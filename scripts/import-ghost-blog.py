#!/usr/bin/env python3
from __future__ import annotations

import collections
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable

from bs4 import BeautifulSoup, NavigableString, Tag


GHOST_URL = "https://cdn.nevsky.me"
DEFAULT_INPUT = Path("/Users/nevsky/Downloads/alieksandr-nievskii.ghost.2026-04-22-14-17-15.json")


@dataclass(frozen=True)
class GhostRecord:
    id: str
    type: str
    slug: str
    title: str
    published_at: str
    created_at: str
    updated_at: str
    locale: str | None
    featured: bool
    visibility: str
    feature_image: str
    custom_excerpt: str
    html: str
    post_tags: tuple[str, ...]


def normalize_url(value: str | None) -> str:
    if not value:
        return ""
    return str(value).replace("__GHOST_URL__", GHOST_URL)


def clean_text(value: Any) -> str:
    if value is None:
        return ""
    text = str(value).replace("\xa0", " ")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def clean_html(value: Any) -> str:
    if value is None:
        return ""
    return normalize_url(str(value))


def canonical_tag_slug(slug: str) -> str | None:
    if slug == "hash-en":
        return None
    return slug[:-3] if slug.endswith("-en") else slug


def dump_frontmatter(data: dict[str, Any], body: str = "") -> str:
    payload = json.dumps(data, ensure_ascii=False, indent=2, sort_keys=False)
    return f"---\n{payload}\n---\n{body}"


def ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def read_export(path: Path) -> dict[str, Any]:
    raw = json.loads(path.read_text())
    return raw["db"][0]["data"]


def build_tag_lookup(tags: list[dict[str, Any]]) -> tuple[dict[str, dict[str, Any]], dict[str, dict[str, Any]]]:
    by_id = {tag["id"]: tag for tag in tags}
    canonical: dict[str, dict[str, Any]] = {}

    for tag in tags:
        slug = tag["slug"]
        if slug == "hash-en":
            continue
        base = canonical_tag_slug(slug)
        if not base:
            continue

        entry = canonical.setdefault(
            base,
            {
                "id": base,
                "ru": None,
                "en": None,
            },
        )
        if slug.endswith("-en"):
            entry["en"] = tag
        else:
            entry["ru"] = tag

    # Fill gaps with whichever side exists so the record is still editable.
    for base, entry in canonical.items():
        if entry["ru"] is None and entry["en"] is not None:
            entry["ru"] = entry["en"]
        if entry["en"] is None and entry["ru"] is not None:
            entry["en"] = entry["ru"]

    return canonical, by_id


def post_is_en(post: dict[str, Any], post_tag_slugs: dict[str, tuple[str, ...]]) -> bool:
    if post.get("locale") == "en":
        return True
    return "hash-en" in post_tag_slugs.get(post["id"], ())


def canonical_fingerprint(post_id: str, post_tag_slugs: dict[str, tuple[str, ...]]) -> tuple[str, ...]:
    slugs = []
    for slug in post_tag_slugs.get(post_id, ()):
        base = canonical_tag_slug(slug)
        if base:
            slugs.append(base)
    return tuple(sorted(set(slugs)))


def parse_block_node(node: Tag) -> dict[str, Any]:
    kind = "raw"
    name = node.name.lower() if node.name else ""
    classes = set(node.get("class", []))

    if name in {"p", "blockquote"}:
        kind = "text"
    elif name in {"h1", "h2", "h3", "h4", "h5", "h6"}:
        kind = "heading"
    elif name in {"ul", "ol"}:
        kind = "list"
    elif name == "hr":
        kind = "separator"
    elif name == "figure":
        if node.find("iframe"):
            kind = "embed"
        elif node.find("video"):
            kind = "video"
        elif node.find("img"):
            kind = "image"
    elif name == "div" and any(cls.startswith("kg-") for cls in classes):
        kind = "raw"

    block: dict[str, Any] = {
        "kind": kind,
        "html": clean_html(str(node)),
    }

    if kind == "image":
        img = node.find("img")
        if img is not None:
            block["src"] = normalize_url(img.get("src"))
            block["alt"] = clean_text(img.get("alt"))
            if img.get("srcset"):
                block["srcset"] = normalize_url(img.get("srcset"))
        caption = node.find("figcaption")
        if caption is not None:
            block["caption"] = clean_html(caption.decode_contents())
    elif kind == "embed":
        iframe = node.find("iframe")
        if iframe is not None:
            block["src"] = normalize_url(iframe.get("src"))
            block["title"] = clean_text(iframe.get("title"))
        caption = node.find("figcaption")
        if caption is not None:
            block["caption"] = clean_html(caption.decode_contents())
    elif kind == "video":
        video = node.find("video")
        if video is not None:
            block["src"] = normalize_url(video.get("src"))
            block["poster"] = normalize_url(video.get("poster"))
            if not block.get("src"):
                source = video.find("source")
                if source is not None:
                    block["src"] = normalize_url(source.get("src"))
        caption = node.find("figcaption")
        if caption is not None:
            block["caption"] = clean_html(caption.decode_contents())

    return block


def parse_blocks(html: str) -> list[dict[str, Any]]:
    if not html:
        return []

    soup = BeautifulSoup(clean_html(html), "html.parser")
    root = soup.body if soup.body is not None else soup
    blocks: list[dict[str, Any]] = []

    for node in root.children:
        if isinstance(node, NavigableString):
            if node.string and node.string.strip():
                blocks.append({
                    "kind": "text",
                    "html": clean_text(node.string),
                })
            continue
        if not isinstance(node, Tag):
            continue
        if node.name and node.name.lower() == "html":
            continue
        blocks.append(parse_block_node(node))

    return blocks


def align_blocks(ru_blocks: list[dict[str, Any]], en_blocks: list[dict[str, Any]]) -> list[dict[str, Any]]:
    total = max(len(ru_blocks), len(en_blocks))
    segments: list[dict[str, Any]] = []

    for index in range(total):
        ru = ru_blocks[index] if index < len(ru_blocks) else None
        en = en_blocks[index] if index < len(en_blocks) else None

        kind = (ru or en or {}).get("kind", "raw")
        segment: dict[str, Any] = {
            "kind": kind,
            "ru": ru.get("html", "") if ru else "",
            "en": en.get("html", "") if en else "",
        }

        if kind in {"image", "embed", "video"}:
            src = ""
            if ru and ru.get("src"):
                src = ru["src"]
            elif en and en.get("src"):
                src = en["src"]
            segment["src"] = src

            alt_ru = ru.get("alt", "") if ru else ""
            alt_en = en.get("alt", "") if en else ""
            if alt_ru or alt_en:
                segment["alt"] = {"ru": alt_ru, "en": alt_en}

            caption_ru = ru.get("caption", "") if ru else ""
            caption_en = en.get("caption", "") if en else ""
            if caption_ru or caption_en:
                segment["caption"] = {"ru": caption_ru, "en": caption_en}

            if kind == "video":
                poster = ""
                if ru and ru.get("poster"):
                    poster = ru["poster"]
                elif en and en.get("poster"):
                    poster = en["poster"]
                if poster:
                    segment["poster"] = poster

        segments.append(segment)

    return segments


def build_author_index(authors: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    return {author["id"]: author for author in authors}


def build_post_author_index(
    rows: list[dict[str, Any]],
    author_by_id: dict[str, dict[str, Any]],
) -> dict[str, dict[str, Any]]:
    result: dict[str, dict[str, Any]] = {}
    sorted_rows = sorted(
        rows,
        key=lambda row: (
            row.get("post_id", ""),
            row.get("sort_order", 0),
            row.get("author_id", ""),
            row.get("id", ""),
        ),
    )

    for rel in sorted_rows:
        post_id = rel.get("post_id")
        author_id = rel.get("author_id")
        if not post_id or not author_id or post_id in result:
            continue

        author = author_by_id.get(author_id)
        if not author:
            continue

        result[post_id] = {
            "id": author["id"],
            "slug": author.get("slug", ""),
            "name": clean_text(author.get("name", "")),
            "bio": clean_text(author.get("bio", "")),
            "profile_image": normalize_url(author.get("profile_image")),
            "website": clean_text(author.get("website", "")),
            "location": clean_text(author.get("location", "")),
            "socials": {
                "facebook": clean_text(author.get("facebook", "")),
                "twitter": clean_text(author.get("twitter", "")),
                "threads": clean_text(author.get("threads", "")),
                "bluesky": clean_text(author.get("bluesky", "")),
                "mastodon": clean_text(author.get("mastodon", "")),
                "tiktok": clean_text(author.get("tiktok", "")),
                "youtube": clean_text(author.get("youtube", "")),
                "instagram": clean_text(author.get("instagram", "")),
                "linkedin": clean_text(author.get("linkedin", "")),
            },
        }

    return result


def build_post_meta_index(rows: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    return {row["post_id"]: row for row in rows}


def build_post_tag_index(rows: list[dict[str, Any]], tag_by_id: dict[str, dict[str, Any]]) -> dict[str, tuple[str, ...]]:
    result: dict[str, list[str]] = collections.defaultdict(list)
    for rel in rows:
        tag = tag_by_id.get(rel["tag_id"])
        if not tag:
            continue
        slug = tag["slug"]
        result[rel["post_id"]].append(slug)
    return {post_id: tuple(slugs) for post_id, slugs in result.items()}


def make_record(
    *,
    kind: str,
    canonical_id: str,
    date: str,
    source: str,
    published_at: dict[str, str],
    created_at: dict[str, str],
    updated_at: dict[str, str],
    ru: dict[str, Any] | None,
    en: dict[str, Any] | None,
    tags: list[str],
    featured_image: str,
    featured_image_alt: dict[str, str],
    featured_image_caption: dict[str, str],
    segments: list[dict[str, Any]],
    author: dict[str, Any] | None = None,
    featured: bool = False,
) -> dict[str, Any]:
    return {
        "kind": kind,
        "id": canonical_id,
        "date": date,
        "source": source,
        "published_at": published_at,
        "created_at": created_at,
        "updated_at": updated_at,
        "featured": featured,
        "tags": tags,
        "feature_image": featured_image,
        "feature_image_alt": featured_image_alt,
        "feature_image_caption": featured_image_caption,
        "author": author or {
            "id": "",
            "slug": "",
            "name": "",
            "bio": "",
            "profile_image": "",
            "website": "",
            "location": "",
            "socials": {
                "facebook": "",
                "twitter": "",
                "threads": "",
                "bluesky": "",
                "mastodon": "",
                "tiktok": "",
                "youtube": "",
                "instagram": "",
                "linkedin": "",
            },
        },
        "ru": ru or {
            "slug": "",
            "title": "",
            "excerpt": "",
            "body": "",
        },
        "en": en or {
            "slug": "",
            "title": "",
            "excerpt": "",
            "body": "",
        },
        "segments": segments,
    }


def write_record(path: Path, record: dict[str, Any]) -> None:
    ensure_dir(path.parent)
    path.write_text(dump_frontmatter(record, ""))


def choose_cover(ru_meta: dict[str, Any] | None, en_meta: dict[str, Any] | None, ru: dict[str, Any] | None, en: dict[str, Any] | None) -> tuple[str, dict[str, str], dict[str, str]]:
    image = ""
    if ru and ru.get("feature_image"):
        image = ru["feature_image"]
    elif en and en.get("feature_image"):
        image = en["feature_image"]

    alt = {"ru": "", "en": ""}
    caption = {"ru": "", "en": ""}
    if ru_meta:
        alt["ru"] = clean_text(ru_meta.get("feature_image_alt"))
        caption["ru"] = clean_html(ru_meta.get("feature_image_caption"))
    if en_meta:
        alt["en"] = clean_text(en_meta.get("feature_image_alt"))
        caption["en"] = clean_html(en_meta.get("feature_image_caption"))
    return normalize_url(image), alt, caption


def pick_source_path(records: Iterable[GhostRecord], root: Path, input_path: Path) -> None:
    data_dir = root / "content" / "blog"
    tags_dir = data_dir / "tags"
    posts_dir = data_dir / "posts"
    pages_dir = data_dir / "pages"

    # Rebuild from scratch so the import always reflects the export exactly.
    for folder in (tags_dir, posts_dir, pages_dir):
        if folder.exists():
            for item in folder.glob("*.md"):
                item.unlink()
        ensure_dir(folder)


def main() -> int:
    input_path = Path(sys.argv[1]).expanduser() if len(sys.argv) > 1 else DEFAULT_INPUT
    root = Path(__file__).resolve().parents[1]
    data = read_export(input_path)

    tags = data["tags"]
    posts = data["posts"]
    authors = data["users"]
    meta_rows = data.get("posts_meta", [])
    post_author_rows = data.get("posts_authors", [])

    tag_by_id = {tag["id"]: tag for tag in tags}
    author_by_id = build_author_index(authors)
    post_meta_by_post_id = build_post_meta_index(meta_rows)
    post_author_by_post_id = build_post_author_index(post_author_rows, author_by_id)
    post_tag_slugs = build_post_tag_index(data["posts_tags"], tag_by_id)

    canonical_tags, _ = build_tag_lookup(tags)

    data_dir = root / "content" / "blog"
    authors_dir = data_dir / "authors"
    tags_dir = data_dir / "tags"
    posts_dir = data_dir / "posts"
    pages_dir = data_dir / "pages"

    for folder in (authors_dir, tags_dir, posts_dir, pages_dir):
        if folder.exists():
            for item in folder.glob("*.md"):
                item.unlink()
        ensure_dir(folder)

    # Write tag records first so the relation widget can target them.
    for canonical_slug, entry in sorted(canonical_tags.items(), key=lambda item: item[0]):
        ru = entry["ru"] or {}
        en = entry["en"] or {}
        record = {
            "kind": "tag",
            "id": canonical_slug,
            "source": {
                "ru": ru.get("slug", ""),
                "en": en.get("slug", ""),
            },
            "ru": {
                "slug": ru.get("slug", ""),
                "name": clean_text(ru.get("name", "")),
                "description": clean_html(ru.get("description")),
                "feature_image": normalize_url(ru.get("feature_image")),
            },
            "en": {
                "slug": en.get("slug", ""),
                "name": clean_text(en.get("name", "")),
                "description": clean_html(en.get("description")),
                "feature_image": normalize_url(en.get("feature_image")),
            },
        }
        write_record(tags_dir / f"{canonical_slug}.md", record)

    for author in sorted(authors, key=lambda item: item.get("slug", "")):
        record = {
            "kind": "author",
            "id": author["id"],
            "slug": author.get("slug", ""),
            "name": clean_text(author.get("name", "")),
            "bio": clean_text(author.get("bio", "")),
            "profile_image": normalize_url(author.get("profile_image")),
            "website": clean_text(author.get("website", "")),
            "location": clean_text(author.get("location", "")),
            "socials": {
                "facebook": clean_text(author.get("facebook", "")),
                "twitter": clean_text(author.get("twitter", "")),
                "threads": clean_text(author.get("threads", "")),
                "bluesky": clean_text(author.get("bluesky", "")),
                "mastodon": clean_text(author.get("mastodon", "")),
                "tiktok": clean_text(author.get("tiktok", "")),
                "youtube": clean_text(author.get("youtube", "")),
                "instagram": clean_text(author.get("instagram", "")),
                "linkedin": clean_text(author.get("linkedin", "")),
            },
        }
        write_record(authors_dir / f"{author['slug']}.md", record)

    # Posts
    post_records: list[dict[str, Any]] = []
    post_items = [p for p in posts if p.get("type") == "post"]
    post_items.sort(key=lambda p: (p["published_at"], p["created_at"], p["id"]))

    grouped: dict[tuple[str, tuple[str, ...]], list[dict[str, Any]]] = collections.defaultdict(list)
    for post in post_items:
        grouped[(post["published_at"][:10], canonical_fingerprint(post["id"], post_tag_slugs))].append(post)

    for (date, fingerprint), items in sorted(grouped.items(), key=lambda item: item[0], reverse=True):
        ru_items = [p for p in items if not post_is_en(p, post_tag_slugs)]
        en_items = [p for p in items if post_is_en(p, post_tag_slugs)]

        # Sort each language partition independently but deterministically.
        ru_items.sort(key=lambda p: (p["published_at"], p["created_at"], p["id"]), reverse=True)
        en_items.sort(key=lambda p: (p["published_at"], p["created_at"], p["id"]), reverse=True)

        total = max(len(ru_items), len(en_items))
        for index in range(total):
            ru_post = ru_items[index] if index < len(ru_items) else None
            en_post = en_items[index] if index < len(en_items) else None

            canonical_id = (ru_post or en_post)["slug"]
            # Prefer the non "-en" slug if available.
            if canonical_id.endswith("-en"):
                canonical_id = canonical_id[:-3]

            ru_meta = post_meta_by_post_id.get(ru_post["id"]) if ru_post else None
            en_meta = post_meta_by_post_id.get(en_post["id"]) if en_post else None
            featured_image, feature_image_alt, feature_image_caption = choose_cover(ru_meta, en_meta, ru_post, en_post)
            author = post_author_by_post_id.get((ru_post or en_post)["id"]) if (ru_post or en_post) else None

            ru_html = clean_html(ru_post["html"]) if ru_post else ""
            en_html = clean_html(en_post["html"]) if en_post else ""
            ru_blocks = parse_blocks(ru_html)
            en_blocks = parse_blocks(en_html)
            segments = align_blocks(ru_blocks, en_blocks)

            merged_tags = list(fingerprint)
            record = make_record(
                kind="post",
                canonical_id=canonical_id,
                date=date,
                source={
                    "kind": "ghost-export",
                    "ru": ru_post["id"] if ru_post else "",
                    "en": en_post["id"] if en_post else "",
                },
                published_at={
                    "ru": ru_post["published_at"] if ru_post else "",
                    "en": en_post["published_at"] if en_post else "",
                },
                created_at={
                    "ru": ru_post["created_at"] if ru_post else "",
                    "en": en_post["created_at"] if en_post else "",
                },
                updated_at={
                    "ru": ru_post["updated_at"] if ru_post else "",
                    "en": en_post["updated_at"] if en_post else "",
                },
                ru={
                    "slug": ru_post["slug"] if ru_post else "",
                    "title": clean_text(ru_post["title"]) if ru_post else "",
                    "excerpt": clean_text(ru_post.get("custom_excerpt") or ru_post.get("plaintext") or "") if ru_post else "",
                    "body": ru_html,
                } if ru_post else None,
                en={
                    "slug": en_post["slug"] if en_post else "",
                    "title": clean_text(en_post["title"]) if en_post else "",
                    "excerpt": clean_text(en_post.get("custom_excerpt") or en_post.get("plaintext") or "") if en_post else "",
                    "body": en_html,
                } if en_post else None,
                tags=merged_tags,
                featured_image=featured_image,
                featured_image_alt=feature_image_alt,
                featured_image_caption=feature_image_caption,
                segments=segments,
                author=author,
                featured=bool((ru_post or en_post).get("featured")) if (ru_post or en_post) else False,
            )

            post_records.append(record)
            write_record(posts_dir / f"{canonical_id}.md", record)

    # Pages
    page_items = [p for p in posts if p.get("type") == "page"]
    page_items.sort(key=lambda p: (p["published_at"], p["created_at"], p["id"]), reverse=True)

    page_groups: dict[str, list[dict[str, Any]]] = collections.defaultdict(list)
    for page in page_items:
        base = page["slug"][:-3] if page["slug"].endswith("-en") else page["slug"]
        page_groups[base].append(page)

    for base_slug, items in sorted(page_groups.items(), key=lambda item: item[0]):
        ru_items = [p for p in items if not post_is_en(p, post_tag_slugs)]
        en_items = [p for p in items if post_is_en(p, post_tag_slugs)]
        ru_items.sort(key=lambda p: (p["published_at"], p["created_at"], p["id"]), reverse=True)
        en_items.sort(key=lambda p: (p["published_at"], p["created_at"], p["id"]), reverse=True)

        total = max(len(ru_items), len(en_items))
        for index in range(total):
            ru_page = ru_items[index] if index < len(ru_items) else None
            en_page = en_items[index] if index < len(en_items) else None

            canonical_id = base_slug
            ru_meta = post_meta_by_post_id.get(ru_page["id"]) if ru_page else None
            en_meta = post_meta_by_post_id.get(en_page["id"]) if en_page else None
            featured_image, feature_image_alt, feature_image_caption = choose_cover(ru_meta, en_meta, ru_page, en_page)
            author = post_author_by_post_id.get((ru_page or en_page)["id"]) if (ru_page or en_page) else None

            ru_html = clean_html(ru_page["html"]) if ru_page else ""
            en_html = clean_html(en_page["html"]) if en_page else ""
            segments = align_blocks(parse_blocks(ru_html), parse_blocks(en_html))

            record = make_record(
                kind="page",
                canonical_id=canonical_id,
                date=(ru_page or en_page)["published_at"][:10],
                source={
                    "kind": "ghost-export",
                    "ru": ru_page["id"] if ru_page else "",
                    "en": en_page["id"] if en_page else "",
                },
                published_at={
                    "ru": ru_page["published_at"] if ru_page else "",
                    "en": en_page["published_at"] if en_page else "",
                },
                created_at={
                    "ru": ru_page["created_at"] if ru_page else "",
                    "en": en_page["created_at"] if en_page else "",
                },
                updated_at={
                    "ru": ru_page["updated_at"] if ru_page else "",
                    "en": en_page["updated_at"] if en_page else "",
                },
                ru={
                    "slug": ru_page["slug"] if ru_page else "",
                    "title": clean_text(ru_page["title"]) if ru_page else "",
                    "excerpt": clean_text(ru_page.get("custom_excerpt") or ru_page.get("plaintext") or "") if ru_page else "",
                    "body": ru_html,
                } if ru_page else None,
                en={
                    "slug": en_page["slug"] if en_page else "",
                    "title": clean_text(en_page["title"]) if en_page else "",
                    "excerpt": clean_text(en_page.get("custom_excerpt") or en_page.get("plaintext") or "") if en_page else "",
                    "body": en_html,
                } if en_page else None,
                tags=list(canonical_fingerprint((ru_page or en_page)["id"], post_tag_slugs)),
                featured_image=featured_image,
                featured_image_alt=feature_image_alt,
                featured_image_caption=feature_image_caption,
                segments=segments,
                author=author,
                featured=bool((ru_page or en_page).get("featured")) if (ru_page or en_page) else False,
            )
            write_record(pages_dir / f"{canonical_id}.md", record)

    print(
        f"Imported {len(authors)} authors, {len(canonical_tags)} tags, {len(post_records)} paired posts, {len(page_groups)} page groups from {input_path}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
