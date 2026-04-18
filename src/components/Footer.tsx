import { useLang } from '@/context/LangContext'
import { BookOpen, Briefcase, Linkedin, Mail, MessageCircle, Phone, Send } from 'lucide-react'

const links = [
  {
    href: 'https://linkedin.com/in/nevskyalexander',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://t.me/alexander_nevsky',
    label: 'Telegram',
    icon: Send,
  },
  {
    href: 'https://wa.me/971505031984?text=Hi!',
    label: 'WhatsApp',
    icon: MessageCircle,
  },
  {
    href: 'mailto:hi@nevsky.me',
    label: 'Email',
    icon: Mail,
  },
  {
    href: 'tel:+971505031984',
    label: 'Phone',
    icon: Phone,
  },
  {
    href: 'https://nevsky.me',
    label: 'Blog',
    icon: BookOpen,
  },
  {
    href: 'https://nevskii.me',
    label: 'Portfolio',
    icon: Briefcase,
  },
]

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="mt-24 border-t border-border py-10 transition-theme">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-nevsky-body">
          <div className="text-foreground">© {new Date().getFullYear()} Alexander Nevsky</div>
          <div>{t('Dubai, UAE · Product design and AI-assisted product building', 'Дубай, ОАЭ · Продуктовый дизайн и AI-assisted product building')}</div>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm font-nevsky-body text-muted-foreground transition-colors hover:border-muted-foreground hover:text-foreground"
              aria-label={label}
              title={label}
            >
              <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
              <span>{label === 'Portfolio' ? t('Portfolio', 'Портфолио') : label === 'Blog' ? t('Blog', 'Блог') : label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
