import { useLang } from '@/context/LangContext'

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="mt-24 border-t border-border py-10 transition-theme">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Alexander Nevsky</span>
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/nevskyalexander"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://nevsky.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {t('Portfolio', 'Портфолио')}
          </a>
          <a
            href="mailto:nevsky.alexander@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
