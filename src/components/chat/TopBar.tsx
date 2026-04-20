import { Menu, Moon, RotateCcw, Sun } from 'lucide-react'
import { type Lang } from '@/lib/i18n'
import { type Theme } from '@/lib/theme'
import { getProfileText } from '@/data/profile'

interface TopBarProps {
  lang: Lang
  theme: Theme
  onToggleLang: () => void
  onToggleTheme: () => void
  onOpenSidebar: () => void
  onReset: () => void
  canReset: boolean
}

export function TopBar({
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
  onOpenSidebar,
  onReset,
  canReset,
}: TopBarProps) {
  return (
    <div className="sticky top-0 z-30 flex h-12 items-center justify-between border-b border-border bg-background/90 px-3 backdrop-blur-sm md:hidden">
      <button
        type="button"
        onClick={onOpenSidebar}
        className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
        aria-label="Open sidebar"
      >
        <Menu size={17} />
      </button>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleLang}
          className="rounded-md border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={lang === 'en' ? 'Switch language to Russian' : 'Переключить язык на английский'}
        >
          {lang === 'en' ? 'RU' : 'EN'}
        </button>
        <button
          type="button"
          onClick={onToggleTheme}
          className="grid h-7 w-7 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={lang === 'ru' ? 'Переключить тему' : 'Toggle theme'}
        >
          {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
        </button>
        <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {getProfileText('name', lang)}
        </div>
      </div>
      <button
        type="button"
        onClick={onReset}
        disabled={!canReset}
        className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40 disabled:opacity-40"
        aria-label={lang === 'ru' ? 'Сбросить диалог' : 'Reset conversation'}
      >
        <RotateCcw size={15} />
      </button>
    </div>
  )
}
