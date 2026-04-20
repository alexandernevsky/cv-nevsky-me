import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()
const postsDirCandidates = [
  path.join(root, 'posts_md'),
  path.join(root, 'artifacts/imports/posts/posts_md'),
]
const contentDir = path.join(root, 'content')
const projectsDir = path.join(contentDir, 'projects')
const pagesDir = path.join(contentDir, 'pages')

const postsDir = postsDirCandidates.find(candidate => fs.existsSync(candidate))

if (!postsDir) {
  throw new Error(
    'Source posts directory not found. Expected one of: posts_md or artifacts/imports/posts/posts_md'
  )
}

const pagePairs = [
  {
    output: 'about.md',
    en: 'about-me-as-designer-en.md',
    ru: 'about-me-as-designer.md',
  },
  {
    output: 'cv.md',
    en: 'alexander-nevsky-cv-en.md',
    ru: 'alexander-nevsky-cv-rus.md',
  },
]

function normalizeDate(value) {
  if (value instanceof Date) {
    const year = value.getFullYear()
    const month = String(value.getMonth() + 1).padStart(2, '0')
    const day = String(value.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const raw = String(value ?? '')
  const match = raw.match(/\d{4}-\d{2}-\d{2}/)
  return match ? match[0] : ''
}

function cyrillicScore(text) {
  const chars = text.match(/[A-Za-zА-Яа-яЁё]/g) ?? []
  if (!chars.length) return 0
  const cyrillic = chars.filter(char => /[А-Яа-яЁё]/.test(char)).length
  return cyrillic / chars.length
}

function isCvPost(post) {
  return post.tags.some(tag => tag === 'cv' || tag === 'cv-en')
}

function normalizeTags(...tagGroups) {
  return [
    ...new Set(
      tagGroups
        .flat()
        .map(tag => String(tag).replace(/-en$/, ''))
        .filter(tag => tag !== 'cv' && tag !== 'hash')
    ),
  ]
}

function readPost(fileName) {
  const filePath = path.join(postsDir, fileName)
  const source = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(source)
  const slug = String(parsed.data.slug ?? fileName.replace(/\.md$/, ''))
  const tags = Array.isArray(parsed.data.tags) ? parsed.data.tags.map(String) : []

  return {
    fileName,
    slug,
    title: String(parsed.data.title ?? slug),
    excerpt: String(parsed.data.excerpt ?? ''),
    date: normalizeDate(parsed.data.date),
    featureImage: String(parsed.data.feature_image ?? ''),
    tags,
    type: String(parsed.data.type ?? ''),
    body: parsed.content.trim(),
  }
}

function writeMarkdown(filePath, data) {
  const source = matter.stringify('', data, { lineWidth: -1 })
  fs.writeFileSync(filePath, source)
}

fs.mkdirSync(projectsDir, { recursive: true })
fs.mkdirSync(pagesDir, { recursive: true })

const posts = fs.readdirSync(postsDir).filter(file => file.endsWith('.md')).map(readPost)
const projectGroups = new Map()

for (const post of posts) {
  if (post.type === 'page' || !isCvPost(post)) continue

  const key = `${post.date}__${post.featureImage || post.title}`
  const group = projectGroups.get(key) ?? []
  group.push(post)
  projectGroups.set(key, group)
}

for (const group of projectGroups.values()) {
  const sorted = [...group].sort((a, b) => cyrillicScore(a.title) - cyrillicScore(b.title))
  const en = sorted[0]
  const ru = sorted[sorted.length - 1] ?? en
  const id = en.slug

  writeMarkdown(path.join(projectsDir, `${id}.md`), {
    id,
    date: en.date || ru.date,
    feature_image: en.featureImage || ru.featureImage,
    tags: normalizeTags(en.tags, ru.tags),
    en: {
      slug: en.slug,
      title: en.title,
      excerpt: en.excerpt,
    },
    ru: {
      slug: ru.slug,
      title: ru.title,
      excerpt: ru.excerpt,
    },
    body_en: en.body,
    body_ru: ru.body,
  })
}

for (const page of pagePairs) {
  const en = readPost(page.en)
  const ru = readPost(page.ru)

  writeMarkdown(path.join(pagesDir, page.output), {
    id: page.output.replace(/\.md$/, ''),
    en: {
      slug: en.slug,
      title: en.title,
      excerpt: en.excerpt,
    },
    ru: {
      slug: ru.slug,
      title: ru.title,
      excerpt: ru.excerpt,
    },
    body_en: en.body,
    body_ru: ru.body,
  })
}

console.log(`Migrated ${projectGroups.size} projects and ${pagePairs.length} pages into content/.`)
