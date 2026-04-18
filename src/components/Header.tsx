import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useLang } from '@/context/LangContext'
import { cn } from '@/lib/utils'

export function Header() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang, t } = useLang()

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'text-xs transition-colors font-nevsky-body sm:text-sm',
      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
    )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm transition-theme">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-sm text-foreground transition-opacity hover:opacity-80 font-nevsky-heading"
        >
          <span className="hidden min-[430px]:inline">Alexander Nevsky</span>
          <span className="min-[430px]:hidden">Nevsky</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <NavLink to="/" end className={navLinkClass}>
            {t('Work', 'Работы')}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            {t('About', 'Обо мне')}
          </NavLink>
          <NavLink to="/cv" className={navLinkClass}>
            CV
          </NavLink>
        </nav>

        {/* Controls */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded border border-transparent px-1.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground font-nevsky-strong sm:px-2"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-foreground' : ''}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === 'ru' ? 'text-foreground' : ''}>RU</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>
    </header>
  )
}
