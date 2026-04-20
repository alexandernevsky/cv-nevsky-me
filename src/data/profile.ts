import { type Lang } from '@/lib/i18n'

export const profile = {
  name: {
    en: 'Alexander Nevsky',
    ru: 'Александр Невский',
  },
  role: {
    en: 'Senior Product Designer',
    ru: 'Старший продуктовый дизайнер',
  },
  subRole: {
    en: 'AI Product Orchestrator',
    ru: 'AI Product Orchestrator',
  },
  answerTitle: {
    en: 'Senior Product Designer · AI Product Orchestrator',
    ru: 'Старший продуктовый дизайнер · AI Product Orchestrator',
  },
  location: {
    en: 'Dubai, UAE',
    ru: 'Дубай, ОАЭ',
  },
  availability: {
    en: 'Open to onsite / hybrid / remote',
    ru: 'Открыт к onsite / hybrid / remote',
  },
  summary: {
    en: '15+ years designing complex digital systems — fintech, proptech, SaaS, and AI-enabled products. From early discovery to production.',
    ru: '15+ лет проектирую сложные цифровые системы — fintech, proptech, SaaS и AI-продукты. От раннего discovery до продакшна.',
  },
  links: {
    portfolio: 'https://nevskii.me',
    blog: 'https://nevsky.me',
    linkedin: 'https://linkedin.com/in/nevskyalexander',
    telegram: 'https://t.me/alexander_nevsky',
    whatsapp: 'https://wa.me/971505031984',
    email: 'mailto:hi@nevsky.me',
    phone: 'tel:+971505031984',
    emailAddress: 'hi@nevsky.me',
    phoneNumber: '+971 50 503 1984',
  },
} as const

export type Profile = typeof profile

export function getProfileText(field: keyof Omit<Profile, 'links'>, lang: Lang): string {
  return profile[field][lang]
}

export const profileAvatarSrc = '/assets/avatar/alexander-nevsky.png'
