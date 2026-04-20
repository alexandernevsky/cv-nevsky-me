export const profile = {
  name: 'Alexander Nevsky',
  role: 'Senior Product Designer',
  subRole: 'AI Product Orchestrator',
  location: 'Dubai, UAE',
  availability: 'Open to onsite / hybrid / remote',
  summary:
    '15+ years designing complex digital systems — fintech, proptech, SaaS, and AI-enabled products. From early discovery to production.',
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
