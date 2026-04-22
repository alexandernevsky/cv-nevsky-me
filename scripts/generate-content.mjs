import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()
const projectsDir = path.join(root, 'content/projects')
const pagesDir = path.join(root, 'content/pages')
const settingsDir = path.join(root, 'content/settings')
const topicsDir = path.join(root, 'content/topics')
const outputFile = path.join(root, 'src/data/projects.ts')
const profileOutputFile = path.join(root, 'src/data/profile.ts')
const topicsOutputFile = path.join(root, 'src/data/topics.ts')

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

function localizedText(data, field) {
  return {
    en: String(data[field]?.en ?? ''),
    ru: String(data[field]?.ru ?? ''),
  }
}

function readStringList(value) {
  return Array.isArray(value) ? value.filter(Boolean).map(String) : []
}

function readPositioningList(value) {
  if (!Array.isArray(value)) return []
  return value
    .map(item => ({
      en: String(item?.en ?? ''),
      ru: String(item?.ru ?? ''),
    }))
    .filter(item => item.en || item.ru)
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

const profileData = readContentFile(path.join(settingsDir, 'profile.md'))
const profile = {
  name: localizedText(profileData, 'name'),
  role: localizedText(profileData, 'role'),
  subRole: localizedText(profileData, 'subRole'),
  answerTitle: localizedText(profileData, 'answerTitle'),
  location: localizedText(profileData, 'location'),
  availability: localizedText(profileData, 'availability'),
  summary: localizedText(profileData, 'summary'),
  positioning: readPositioningList(profileData.positioning),
  links: {
    portfolio: String(profileData.links?.portfolio ?? ''),
    blog: String(profileData.links?.blog ?? ''),
    linkedin: String(profileData.links?.linkedin ?? ''),
    telegram: String(profileData.links?.telegram ?? ''),
    whatsapp: String(profileData.links?.whatsapp ?? ''),
    email: String(profileData.links?.email ?? ''),
    phone: String(profileData.links?.phone ?? ''),
    emailAddress: String(profileData.links?.emailAddress ?? ''),
    phoneNumber: String(profileData.links?.phoneNumber ?? ''),
  },
}

const profileDataSource = `// AUTO-GENERATED from content/settings/profile.md - do not edit manually

import { type Lang } from '@/lib/i18n'

export const profile = ${JSON.stringify(profile, null, 2)} as const

export type Profile = typeof profile

export function getProfileText(field: keyof Omit<Profile, 'links' | 'positioning'>, lang: Lang): string {
  return profile[field][lang]
}

export const profileAvatarSrc = ${JSON.stringify(String(profileData.avatar ?? '/assets/avatar/alexander-nevsky.png'))}
`

const topicCategoryIds = ['start', 'about', 'work', 'builds', 'ai', 'life', 'contact']

function readTopic(file) {
  const data = readContentFile(path.join(topicsDir, file))

  return {
    order: Number(data.order ?? 0),
    id: String(data.id ?? file.replace(/\.md$/, '')),
    category: topicCategoryIds.includes(data.category) ? data.category : 'start',
    label: String(data.en?.label ?? ''),
    chipLabel: String(data.en?.chip_label ?? data.en?.label ?? ''),
    promptText: String(data.en?.prompt ?? ''),
    response: String(data.en?.response ?? data.body_en ?? ''),
    keywords: readStringList(data.en?.keywords),
    visibleInSidebar: Boolean(data.visible_in_sidebar),
    relatedProjectIds: readStringList(data.related_project_ids),
    followUps: readStringList(data.follow_ups),
    labelRu: String(data.ru?.label ?? ''),
    chipLabelRu: String(data.ru?.chip_label ?? data.ru?.label ?? ''),
    promptTextRu: String(data.ru?.prompt ?? ''),
    responseRu: String(data.ru?.response ?? data.body_ru ?? ''),
    keywordsRu: readStringList(data.ru?.keywords),
  }
}

const topics = fs
  .readdirSync(topicsDir)
  .filter(file => file.endsWith('.md'))
  .map(readTopic)
  .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))
  .map(({ order, ...topic }) => topic)

const topicsDataSource = `// AUTO-GENERATED from content/topics/ - do not edit manually

export type TopicCategory =
  | 'start'
  | 'about'
  | 'work'
  | 'builds'
  | 'ai'
  | 'life'
  | 'contact'

export interface Topic {
  id: string
  category: TopicCategory
  label: string
  promptText: string
  response: string
  keywords?: string[]
  visibleInSidebar?: boolean
  chipLabel?: string
  relatedProjectIds?: string[]
  followUps?: string[]
  labelRu?: string
  promptTextRu?: string
  responseRu?: string
  chipLabelRu?: string
  keywordsRu?: string[]
}

export const topics: Topic[] = ${JSON.stringify(topics, null, 2)}

export const topicsById: Record<string, Topic> = Object.fromEntries(
  topics.map(t => [t.id, t])
)

export function getTopic(id: string): Topic | undefined {
  return topicsById[id]
}

export function getTopicLabel(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topic.labelRu || topic.label : topic.label
}

export function getTopicChipLabel(topic: Topic, lang: 'en' | 'ru'): string {
  if (lang === 'ru') return topic.chipLabelRu || topic.labelRu || topic.chipLabel || topic.label
  return topic.chipLabel || topic.label
}

export function getTopicPrompt(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topic.promptTextRu || topic.promptText : topic.promptText
}

export function getTopicResponse(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topic.responseRu || topic.response : topic.response
}

export function getTopicKeywords(topic: Topic, lang: 'en' | 'ru'): string[] {
  return lang === 'ru' ? topic.keywordsRu ?? [] : topic.keywords ?? []
}

export function getTopicAllLabels(topic: Topic): string[] {
  return topic.labelRu ? [topic.label, topic.labelRu] : [topic.label]
}

export const sidebarCategories: {
  id: TopicCategory
  label: string
  labelRu: string
}[] = [
  { id: 'start', label: 'Start here', labelRu: 'Старт' },
  { id: 'about', label: 'About', labelRu: 'Обо мне' },
  { id: 'work', label: 'Work', labelRu: 'Работы' },
  { id: 'builds', label: 'Current builds', labelRu: 'Сейчас делаю' },
  { id: 'ai', label: 'AI approach', labelRu: 'Подход к AI' },
  { id: 'life', label: 'Life', labelRu: 'Жизнь' },
  { id: 'contact', label: 'Contact', labelRu: 'Контакты' },
]
`

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
fs.writeFileSync(profileOutputFile, profileDataSource)
fs.writeFileSync(topicsOutputFile, topicsDataSource)
console.log(`Generated ${path.relative(root, outputFile)} from ${projects.length} unified projects.`)
console.log(`Generated ${path.relative(root, profileOutputFile)} from profile settings.`)
console.log(`Generated ${path.relative(root, topicsOutputFile)} from ${topics.length} unified topics.`)
