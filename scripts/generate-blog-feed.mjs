import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()
const authorsDir = path.join(root, 'content/blog/authors')
const postsDir = path.join(root, 'content/blog/posts')
const tagsDir = path.join(root, 'content/blog/tags')
const outputFile = path.join(root, 'src/data/blog-feed.ts')

const primaryTagPriority = [
  'threshold-signals',
  'estate',
  'dubai',
  'family-live',
  'alexander-live',
  'design',
  'framer',
  'webflow',
  'd2q-studio',
  'heritage',
  'cv',
  'vibe-coding',
  'ai-stream',
  'moscow',
  'irina-articles',
  'juriy-prose',
  'alexander-jr-stories',
  'daria-stories',
  'konstantin-stories',
  'vlesu-stories',
  'vladimir-trails',
]

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function normalizeUrl(value) {
  return String(value ?? '').replaceAll('__GHOST_URL__', 'https://cdn.nevsky.me')
}

function extractFirstImageSrc(...htmlParts) {
  for (const html of htmlParts) {
    const source = normalizeUrl(html)
    const match = source.match(/<img[^>]+src="([^"]+)"/i)
    if (match?.[1]) return normalizeUrl(match[1])
  }
  return ''
}

function readFrontmatter(filePath) {
  const source = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(source)
  return parsed.data
}

function readTagRecords() {
  const tags = {}
  for (const file of fs.readdirSync(tagsDir)) {
    if (!file.endsWith('.md')) continue
    const data = readFrontmatter(path.join(tagsDir, file))
    tags[String(data.id ?? file.replace(/\.md$/, ''))] = {
      en: {
        name: normalizeText(data.en?.name ?? ''),
        slug: String(data.en?.slug ?? ''),
        description: normalizeText(data.en?.description ?? ''),
        featureImage: normalizeUrl(data.en?.feature_image ?? ''),
      },
      ru: {
        name: normalizeText(data.ru?.name ?? ''),
        slug: String(data.ru?.slug ?? ''),
        description: normalizeText(data.ru?.description ?? ''),
        featureImage: normalizeUrl(data.ru?.feature_image ?? ''),
      },
    }
  }
  return tags
}

function readAuthorRecords() {
  const authors = {}
  if (!fs.existsSync(authorsDir)) return authors

  for (const file of fs.readdirSync(authorsDir)) {
    if (!file.endsWith('.md')) continue
    const data = readFrontmatter(path.join(authorsDir, file))
    const id = String(data.id ?? file.replace(/\.md$/, ''))
    authors[id] = {
      id,
      slug: String(data.slug ?? ''),
      name: normalizeText(data.name ?? ''),
      bio: normalizeText(data.bio ?? ''),
      profileImage: normalizeUrl(data.profile_image ?? ''),
      website: normalizeText(data.website ?? ''),
      location: normalizeText(data.location ?? ''),
      socials: {
        facebook: normalizeText(data.socials?.facebook ?? ''),
        twitter: normalizeText(data.socials?.twitter ?? ''),
        threads: normalizeText(data.socials?.threads ?? ''),
        bluesky: normalizeText(data.socials?.bluesky ?? ''),
        mastodon: normalizeText(data.socials?.mastodon ?? ''),
        tiktok: normalizeText(data.socials?.tiktok ?? ''),
        youtube: normalizeText(data.socials?.youtube ?? ''),
        instagram: normalizeText(data.socials?.instagram ?? ''),
        linkedin: normalizeText(data.socials?.linkedin ?? ''),
      },
    }
  }

  return authors
}

function readPostRecords(tagRecords) {
  const posts = []

  for (const file of fs.readdirSync(postsDir)) {
    if (!file.endsWith('.md')) continue
    const data = readFrontmatter(path.join(postsDir, file))
    const tags = Array.isArray(data.tags) ? data.tags.map(String) : []
    const canonicalTags = tags
      .filter(tag => tag !== 'hash-en')
      .map(tag => (tag.endsWith('-en') ? tag.slice(0, -3) : tag))
    const slugRu = normalizeText(data.ru?.slug ?? '')
    const slugEn = normalizeText(data.en?.slug ?? '')

    const primaryTagSlug = primaryTagPriority.find(slug => canonicalTags.includes(slug)) ?? canonicalTags[0] ?? ''
    const primaryTagRecord = tagRecords[primaryTagSlug] ?? {
      en: { name: primaryTagSlug, slug: primaryTagSlug, description: '' },
      ru: { name: primaryTagSlug, slug: primaryTagSlug, description: '' },
    }

    const publishedAt = String(data.published_at?.ru ?? data.published_at?.en ?? `${data.date} 00:00:00`)
    const date = String(data.date ?? publishedAt.slice(0, 10))
    const titleRu = normalizeText(data.ru?.title ?? '')
    const titleEn = normalizeText(data.en?.title ?? '')
    const excerptRu = normalizeText(data.ru?.excerpt ?? '')
    const excerptEn = normalizeText(data.en?.excerpt ?? '')
    const featureImage =
      normalizeUrl(data.feature_image ?? '') ||
      extractFirstImageSrc(data.ru?.body ?? '', data.en?.body ?? '') ||
      primaryTagRecord.en.featureImage ||
      primaryTagRecord.ru.featureImage
    const altRu = normalizeText(data.feature_image_alt?.ru ?? '') || titleRu
    const altEn = normalizeText(data.feature_image_alt?.en ?? '') || titleEn

    posts.push({
      id: String(data.id ?? file.replace(/\.md$/, '')),
      kind: String(data.kind ?? 'post'),
      date,
      publishedAt,
      featured: Boolean(data.featured),
      tags: canonicalTags,
      slug: {
        en: slugEn || slugRu || String(data.id ?? file.replace(/\.md$/, '')),
        ru: slugRu || slugEn || String(data.id ?? file.replace(/\.md$/, '')),
      },
      primaryTag: {
        en: primaryTagRecord.en.name,
        ru: primaryTagRecord.ru.name,
      },
      title: {
        en: titleEn,
        ru: titleRu,
      },
      excerpt: {
        en: excerptEn,
        ru: excerptRu,
      },
      image: {
        src: featureImage,
        alt: {
          en: altEn,
          ru: altRu,
        },
      },
      source: {
        en: String(data.source?.en ?? ''),
        ru: String(data.source?.ru ?? ''),
      },
      author: {
        id: String(data.author?.id ?? ''),
        slug: String(data.author?.slug ?? ''),
        name: String(data.author?.name ?? ''),
        bio: String(data.author?.bio ?? ''),
        profileImage: String(data.author?.profile_image ?? ''),
        website: String(data.author?.website ?? ''),
        location: String(data.author?.location ?? ''),
      },
      isVladimir: canonicalTags.includes('vladimir-trails'),
    })
  }

  posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.id.localeCompare(a.id))
  return posts
}

const tagRecords = readTagRecords()
const authorRecords = readAuthorRecords()
const posts = readPostRecords(tagRecords)

const output = `// AUTO-GENERATED from content/blog - do not edit manually

export type Lang = 'en' | 'ru'

export type LocalizedText = {
  en: string
  ru: string
}

export type BlogFeedPost = {
  id: string
  kind: string
  date: string
  publishedAt: string
  featured: boolean
  tags: string[]
  slug: LocalizedText
  primaryTag: LocalizedText
  title: LocalizedText
  excerpt: LocalizedText
  image: {
    src: string
    alt: LocalizedText
  }
  source: {
    en: string
    ru: string
  }
  author: {
    id: string
    slug: string
    name: string
    bio: string
    profileImage: string
    website: string
    location: string
  }
  isVladimir: boolean
}

export type BlogAuthor = {
  id: string
  slug: string
  name: string
  bio: string
  profileImage: string
  website: string
  location: string
  socials: {
    facebook: string
    twitter: string
    threads: string
    bluesky: string
    mastodon: string
    tiktok: string
    youtube: string
    instagram: string
    linkedin: string
  }
}

export type BlogTag = {
  id: string
  source: {
    ru: string
    en: string
  }
  ru: {
    slug: string
    name: string
    description: string
    featureImage: string
  }
  en: {
    slug: string
    name: string
    description: string
    featureImage: string
  }
}

export const posts: BlogFeedPost[] = ${JSON.stringify(posts, null, 2)}

export const authors: BlogAuthor[] = ${JSON.stringify(Object.values(authorRecords), null, 2)}

export const tags: BlogTag[] = ${JSON.stringify(
  Object.entries(tagRecords).map(([id, tag]) => ({
    id,
    source: {
      ru: tag.ru.slug,
      en: tag.en.slug,
    },
    ...tag,
  })),
  null,
  2
)}
`

fs.writeFileSync(outputFile, output)
console.log(`Generated ${path.relative(root, outputFile)} from ${posts.length} blog records.`)
