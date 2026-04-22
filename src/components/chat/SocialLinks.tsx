import { ExternalLink, Globe, Linkedin, Mail, MessageCircle, Send } from 'lucide-react'
import { profile } from '@/data/profile'
import { type Lang } from '@/lib/i18n'

interface SocialLinksProps {
  lang: Lang
}

const links = [
  {
    key: 'email',
    href: profile.links.email,
    labelEn: 'Email',
    labelRu: 'Email',
    value: profile.links.emailAddress,
    icon: Mail,
  },
  {
    key: 'telegram',
    href: profile.links.telegram,
    labelEn: 'Telegram',
    labelRu: 'Telegram',
    value: '@alexander_nevsky',
    icon: Send,
  },
  {
    key: 'whatsapp',
    href: profile.links.whatsapp,
    labelEn: 'WhatsApp',
    labelRu: 'WhatsApp',
    value: profile.links.phoneNumber,
    icon: MessageCircle,
  },
  {
    key: 'linkedin',
    href: profile.links.linkedin,
    labelEn: 'LinkedIn',
    labelRu: 'LinkedIn',
    value: '/in/nevskyalexander',
    icon: Linkedin,
  },
  {
    key: 'portfolio',
    href: profile.links.portfolio,
    labelEn: 'Portfolio',
    labelRu: 'Портфолио',
    value: 'nevskii.me',
    icon: ExternalLink,
  },
  {
    key: 'blog',
    href: profile.links.blog,
    labelEn: 'Blog',
    labelRu: 'Блог',
    value: 'nevsky.me',
    icon: Globe,
  },
] as const

export function SocialLinks({ lang }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {links.map(link => {
        const Icon = link.icon
        const label = lang === 'ru' ? link.labelRu : link.labelEn
        return (
          <a
            key={link.key}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
            aria-label={`${label}: ${link.value}`}
            title={`${label}: ${link.value}`}
          >
            <Icon size={15} />
          </a>
        )
      })}
    </div>
  )
}
