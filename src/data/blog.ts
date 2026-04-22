import { profile } from '@/data/profile'
import { type Lang } from '@/lib/i18n'

type LocalizedText = {
  en: string
  ru: string
}

type BlogSection = {
  title: LocalizedText
  summary: LocalizedText
}


const featuredStreams = [
  { en: 'Alexander', ru: 'Александр' },
  { en: 'Estate', ru: 'Недвижимость' },
  { en: 'Dubai', ru: 'Дубай' },
  { en: 'Family', ru: 'Семья' },
  { en: 'Design', ru: 'Дизайн' },
  { en: 'Threshold', ru: 'Threshold' },
  { en: 'AI', ru: 'AI' },
  { en: 'Framer', ru: 'Framer' },
  { en: 'Webflow', ru: 'Webflow' },
  { en: 'Moscow', ru: 'Москва' },
]

const heroCopy: Record<Lang, BlogSection> = {
  en: {
    title: { en: 'Alexander Yuryevich Nevsky', ru: 'Александр Юрьевич Невский' },
    summary: {
      en: 'I live in Dubai. I explore how technology, design, space, and human life come together into a new reality. Real estate, design, artificial intelligence, and visual art are, for me, parts of a single view of the world. I look at homes, interfaces, and the future through the lens of taste, systems thinking, and real family life in Dubai.',
      ru: 'Я живу в Дубае. Исследую, как технологии, дизайн, пространство и жизнь человека складываются в новую реальность. Недвижимость, дизайн, искусственный интеллект и визуальное искусство для меня — части одного взгляда на мир. Я смотрю на дома, интерфейсы и будущее через вкус, системное мышление и реальную семейную жизнь в Дубае.',
    },
  },
  ru: {
    title: { en: 'Alexander Yuryevich Nevsky', ru: 'Александр Юрьевич Невский' },
    summary: {
      en: 'I live in Dubai. I explore how technology, design, space, and human life come together into a new reality. Real estate, design, artificial intelligence, and visual art are, for me, parts of a single view of the world. I look at homes, interfaces, and the future through the lens of taste, systems thinking, and real family life in Dubai.',
      ru: 'Я живу в Дубае. Исследую, как технологии, дизайн, пространство и жизнь человека складываются в новую реальность. Недвижимость, дизайн, искусственный интеллект и визуальное искусство для меня — части одного взгляда на мир. Я смотрю на дома, интерфейсы и будущее через вкус, системное мышление и реальную семейную жизнь в Дубае.',
    },
  },
}

const introCopy: Record<Lang, string> = {
  en: 'I design your life in Dubai. Real estate broker with a Yango designer background. UX audits of homes, neighborhoods, and schools. Honest, systematic, from a Jumeirah resident.',
  ru: 'Я проектирую вашу жизнь в Дубае. Риелтор с дизайнерским бэкграундом из Yango. UX-аудит жилья, районов и школ. Честно, системно, от резидента Джумейры.',
}

const sectionCopy: Record<'featured' | 'latest' | 'streams' | 'contacts', Record<Lang, BlogSection>> = {
  featured: {
    en: {
      title: { en: 'Featured', ru: 'Избранное' },
      summary: { en: 'The posts that best describe the current direction.', ru: 'Посты, которые лучше всего описывают текущий вектор.' },
    },
    ru: {
      title: { en: 'Избранное', ru: 'Избранное' },
      summary: { en: 'Посты, которые лучше всего описывают текущий вектор.', ru: 'Посты, которые лучше всего описывают текущий вектор.' },
    },
  },
  latest: {
    en: {
      title: { en: 'Latest', ru: 'Свежее' },
      summary: { en: 'The newest entries from the current homepage.', ru: 'Самые новые записи с текущей главной страницы.' },
    },
    ru: {
      title: { en: 'Свежее', ru: 'Свежее' },
      summary: { en: 'Самые новые записи с текущей главной страницы.', ru: 'Самые новые записи с текущей главной страницы.' },
    },
  },
  streams: {
    en: {
      title: { en: 'Streams', ru: 'Потоки' },
      summary: { en: 'The site is organized by recurring contexts.', ru: 'Сайт собран вокруг повторяющихся контекстов.' },
    },
    ru: {
      title: { en: 'Потоки', ru: 'Потоки' },
      summary: { en: 'Сайт собран вокруг повторяющихся контекстов.', ru: 'Сайт собран вокруг повторяющихся контекстов.' },
    },
  },
  contacts: {
    en: {
      title: { en: 'Contacts', ru: 'Контакты' },
      summary: { en: 'For direct contact, Telegram is usually the fastest path.', ru: 'Для связи быстрее всего обычно работает Telegram.' },
    },
    ru: {
      title: { en: 'Контакты', ru: 'Контакты' },
      summary: { en: 'Для связи быстрее всего обычно работает Telegram.', ru: 'Для связи быстрее всего обычно работает Telegram.' },
    },
  },
}

const footerCopy: Record<Lang, string> = {
  en: 'New posts, notes, and updates are easiest to read in Telegram.',
  ru: 'Новые посты, заметки и обновления удобнее всего читать в Telegram.',
}

const currentSiteCopy: Record<Lang, string> = {
  en: 'I design your life in Dubai. Real estate broker with a Yango designer background. UX audits of homes, neighborhoods, and schools. Honest, systematic, from a Jumeirah resident.',
  ru: 'Я проектирую вашу жизнь в Дубае. Риелтор с дизайнерским бэкграундом из Yango. UX-аудит жилья, районов и школ. Честно, системно, от резидента Джумейры.',
}

export const blogData = {
  heroCopy,
  introCopy,
  sectionCopy,
  footerCopy,
  currentSiteCopy,
  streams: featuredStreams,
  contacts: {
    portfolio: profile.links.portfolio,
    telegram: profile.links.telegram,
    whatsapp: profile.links.whatsapp,
    email: profile.links.email,
    phone: profile.links.phone,
  },
  brandAvatar:
    'https://cdn.nevsky.me/content/images/size/w256h256/format/png/2026/01/aleksandr-nevskii_avatar-7.webp',
}

export function formatBlogDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}
