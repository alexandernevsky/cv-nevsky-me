# CMS Editing Guide

This site uses Decap CMS. Editing content in `/admin` creates a GitHub commit, then Cloudflare Pages rebuilds the site from `main`.

## Main Collections

- `Settings -> Profile and contacts` edits the shared name, role, avatar, email, phone, Telegram, WhatsApp, LinkedIn, portfolio, and blog links.
- `Chat topics` edits the chat sidebar topics, user prompts, answers, free-text keywords, follow-up chips, and related project cards.
- `Projects` edits project posts. Each project is one bilingual Markdown file with English and Russian fields.
- `Pages` keeps older CV/About content available for generated data.

## Chat Topics

Use `Topic ID` as stable lowercase kebab-case, for example `current-builds`.

Do not rename an existing topic ID unless you also update every place that references it:

- `Follow-up topic IDs`
- deep links like `?topic=current-builds`
- code or docs that mention the old ID

`Sidebar order` controls order inside each category. Use gaps like `10`, `20`, `30` so a new topic can be inserted later.

`Show in sidebar` controls visibility in the left menu. Hidden topics can still be opened from follow-up chips or free-text matching.

`Related project IDs` renders project cards below the answer. Select existing projects from the relation field.

`Follow-up topic IDs` renders chips below the answer. Select existing chat topics from the relation field.

`Keywords` are used by the local free-text matcher. Add short words and common phrases in both English and Russian.

## Projects

Use `ID` as stable lowercase kebab-case. The ID is what chat topics use in `Related project IDs`.

Images can use:

- uploaded assets from `/uploads`
- existing public assets like `/assets/placeholders/dubai-crm.svg`
- absolute external image URLs

Markdown image captions use this pattern:

```md
![](/assets/placeholders/dubai-crm.svg)Caption text here
```

The site turns that into a full-width figure with a caption.

## Publishing

After pressing Publish in Decap:

1. Check that a commit appears in GitHub.
2. Wait for Cloudflare Pages to finish the new build.
3. Open `https://cv.nevsky.me/?topic=current-builds&lang=ru` or another edited topic to verify the result.

If the admin UI publishes but the site does not change, check Cloudflare Pages deployment logs first.
