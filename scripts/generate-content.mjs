import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()
const projectsDir = path.join(root, 'content/projects')
const pagesDir = path.join(root, 'content/pages')
const outputFile = path.join(root, 'src/data/projects.ts')

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

function readContentFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(source)
  return parsed.data
}

function localized(data, lang) {
  return {
    slug: String(data[lang]?.slug ?? data.id ?? ''),
    title: String(data[lang]?.title ?? ''),
    excerpt: String(data[lang]?.excerpt ?? ''),
    body: String(data[`body_${lang}`] ?? ''),
  }
}

function readPage(fileName, lang) {
  const data = readContentFile(path.join(pagesDir, fileName))
  const page = localized(data, lang)
  return {
    title: page.title,
    content: page.body,
  }
}

const projects = fs
  .readdirSync(projectsDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const data = readContentFile(path.join(projectsDir, file))
    const en = localized(data, 'en')
    const ru = localized(data, 'ru')

    return {
      id: String(data.id ?? file.replace(/\.md$/, '')),
      slugEn: en.slug,
      slugRu: ru.slug,
      titleEn: en.title,
      titleRu: ru.title,
      excerptEn: en.excerpt,
      excerptRu: ru.excerpt,
      date: normalizeDate(data.date),
      featureImage: String(data.feature_image ?? ''),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      contentEn: en.body,
      contentRu: ru.body,
    }
  })
  .sort((a, b) => a.date.localeCompare(b.date))

const data = `// AUTO-GENERATED from content/ - do not edit manually

export interface Project {
  id: string
  slugEn: string
  slugRu: string
  titleEn: string
  titleRu: string
  excerptEn: string
  excerptRu: string
  date: string
  featureImage: string
  tags: string[]
  contentEn: string
  contentRu: string
}

export const projects: Project[] = ${JSON.stringify(projects, null, 2)}

export const aboutEn = ${JSON.stringify(readPage('about.md', 'en'), null, 2)}

export const aboutRu = ${JSON.stringify(readPage('about.md', 'ru'), null, 2)}

export const cvEn = ${JSON.stringify(readPage('cv.md', 'en'), null, 2)}

export const cvRu = ${JSON.stringify(readPage('cv.md', 'ru'), null, 2)}
`

fs.writeFileSync(outputFile, data)
console.log(`Generated ${path.relative(root, outputFile)} from ${projects.length} unified projects.`)
