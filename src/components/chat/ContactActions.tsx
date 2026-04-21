import { useState } from 'react'
import { Check, Copy, ExternalLink, Mail, MessageCircle, Send } from 'lucide-react'
import { profile } from '@/data/profile'
import { type Lang } from '@/lib/i18n'

interface ContactActionsProps {
  lang: Lang
}

const iconClassName = 'h-4 w-4 shrink-0'

export function ContactActions({ lang }: ContactActionsProps) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.emailAddress)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = profile.links.email
    }
  }

  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-2">
      <ContactLink
        href={profile.links.email}
        icon={<Mail className={iconClassName} />}
        label="Email"
        value={profile.links.emailAddress}
      />
      <button
        type="button"
        onClick={copyEmail}
        className="group flex min-w-0 items-center gap-3 rounded-md border border-border bg-background px-3 py-2 text-left transition-colors hover:bg-muted focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
      >
        {copied ? <Check className={iconClassName} /> : <Copy className={iconClassName} />}
        <span className="min-w-0">
          <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {copied ? (lang === 'ru' ? 'Скопировано' : 'Copied') : (lang === 'ru' ? 'Скопировать' : 'Copy')}
          </span>
          <span className="block truncate text-[13px] text-foreground">{profile.links.emailAddress}</span>
        </span>
      </button>
      <ContactLink
        href={profile.links.telegram}
        icon={<Send className={iconClassName} />}
        label="Telegram"
        value="@alexander_nevsky"
      />
      <ContactLink
        href={profile.links.whatsapp}
        icon={<MessageCircle className={iconClassName} />}
        label="WhatsApp"
        value={profile.links.phoneNumber}
      />
      <ContactLink
        href={profile.links.linkedin}
        icon={<LinkedInIcon />}
        label="LinkedIn"
        value="/in/nevskyalexander"
      />
      <ContactLink
        href={profile.links.portfolio}
        icon={<ExternalLink className={iconClassName} />}
        label={lang === 'ru' ? 'Портфолио' : 'Portfolio'}
        value="nevskii.me"
      />
    </div>
  )
}

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex min-w-0 items-center gap-3 rounded-md border border-border bg-background px-3 py-2 transition-colors hover:bg-muted focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
    >
      {icon}
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-[13px] text-foreground">{value}</span>
      </span>
    </a>
  )
}

function LinkedInIcon() {
  return (
    <svg
      className={iconClassName}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M8 11v7" />
      <path d="M8 8v.01" />
      <path d="M12 18v-7" />
      <path d="M12 14.5c0-2.2 1.2-3.5 3-3.5s3 1.3 3 3.5V18" />
      <path d="M4 4h16v16H4z" />
    </svg>
  )
}
