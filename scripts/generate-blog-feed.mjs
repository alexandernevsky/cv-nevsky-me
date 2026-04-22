import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()
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
        featureImage: normalizeUrl(data.en?.feature_image ?? ''),
      },
      ru: {
        name: normalizeText(data.ru?.name ?? ''),
        slug: String(data.ru?.slug ?? ''),
        featureImage: normalizeUrl(data.ru?.feature_image ?? ''),
      },
    }
  }
  return tags
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

    const primaryTagSlug = primaryTagPriority.find(slug => canonicalTags.includes(slug)) ?? canonicalTags[0] ?? ''
    const primaryTagRecord = tagRecords[primaryTagSlug] ?? {
      en: { name: primaryTagSlug, slug: primaryTagSlug },
      ru: { name: primaryTagSlug, slug: primaryTagSlug },
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
      isVladimir: canonicalTags.includes('vladimir-trails'),
    })
  }

  posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.id.localeCompare(a.id))
  return posts
}

const tagRecords = readTagRecords()
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
  isVladimir: boolean
}

export const posts: BlogFeedPost[] = ${JSON.stringify(posts, null, 2)}

export const tags = ${JSON.stringify(tagRecords, null, 2)} as const
`

fs.writeFileSync(outputFile, output)
console.log(`Generated ${path.relative(root, outputFile)} from ${posts.length} blog records.`)
