import { useEffect } from 'react'
import { Moon, Plus, Sun, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getProfileText, profileAvatarSrc } from '@/data/profile'
import { getTopicLabel, sidebarCategories, topics } from '@/data/topics'
import { type Lang } from '@/lib/i18n'
import { type Theme } from '@/lib/theme'
import { SocialLinks } from './SocialLinks'

interface SidebarProps {
  lang: Lang
  theme: Theme
  onToggleLang: () => void
  onToggleTheme: () => void
  activeTopicId: string | null
  onTopicSelect: (id: string) => void
  onReset: () => void
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
  activeTopicId,
  onTopicSelect,
  onReset,
  isOpen,
  onClose,
}: SidebarProps) {
  // Lock body scroll when drawer is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  const handleSelect = (id: string) => {
    onTopicSelect(id)
    if (window.innerWidth < 768) onClose()
  }

  const handleReset = () => {
    onReset()
    if (window.innerWidth < 768) onClose()
  }

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-[min(300px,86vw)] flex-col border-r border-border bg-background transition-transform duration-200 ease-out',
          'md:static md:z-0 md:translate-x-0 md:shrink-0',
          'md:w-[280px]',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label={lang === 'ru' ? 'Темы' : 'Topics'}
      >
        {/* Brand block */}
        <div className="relative border-b border-border px-4 pt-5 pb-5">
          <button
            type="button"
            onClick={onClose}
            className="md:hidden absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
            aria-label={lang === 'ru' ? 'Закрыть боковую панель' : 'Close sidebar'}
          >
            <X size={16} />
          </button>
          <div className="flex min-w-0 flex-col items-start gap-4 pr-10">
            <img
              src={profileAvatarSrc}
              alt={getProfileText('name', lang)}
              className="h-24 w-24 shrink-0 rounded-full object-cover shadow-sm md:h-20 md:w-20"
              loading="lazy"
            />
            <div className="min-w-0 space-y-1">
              <div className="text-[17px] font-[800] leading-[1.12] text-foreground md:text-[13px] md:leading-tight">
                {getProfileText('name', lang)}
              </div>
              <div className="max-w-[220px] font-mono text-[12px] uppercase tracking-[0.16em] leading-[1.45] text-muted-foreground md:max-w-none md:text-[11px] md:tracking-[0.12em]">
                {getProfileText('role', lang)} · {getProfileText('subRole', lang)}
              </div>
            </div>
          </div>
        </div>

        {/* New chat */}
        <div className="px-3 pt-3 pb-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex w-full items-center gap-2 rounded-md border border-border bg-transparent px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
          >
            <Plus size={14} />
            <span>{lang === 'ru' ? 'Новый чат' : 'New chat'}</span>
          </button>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={onToggleLang}
              className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={lang === 'en' ? 'Switch language to Russian' : 'Переключить язык на английский'}
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center justify-center gap-1 rounded-md border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={lang === 'ru' ? 'Переключить тему' : 'Toggle theme'}
            >
              {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
              <span>{lang === 'ru' ? 'Тема' : 'Theme'}</span>
            </button>
          </div>
        </div>

        {/* Prompt library */}
        <nav
          className="flex-1 overflow-y-auto px-2 pt-1 pb-4"
          aria-label={lang === 'ru' ? 'Темы' : 'Topics'}
        >
          {sidebarCategories.map(cat => {
            const items = topics.filter(
              t => t.category === cat.id && t.visibleInSidebar
            )
            if (!items.length) return null
            return (
              <div key={cat.id} className="mb-4">
                <div className="px-3 pt-3 pb-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {lang === 'ru' ? cat.labelRu : cat.label}
                </div>
                <ul className="flex flex-col gap-0.5">
                  {items.map(topic => {
                    const isActive = topic.id === activeTopicId
                    return (
                      <li key={topic.id}>
                        <button
                          type="button"
                          onClick={() => handleSelect(topic.id)}
                          className={cn(
                            'block w-full rounded-md px-3 py-1.5 text-left text-[13px] leading-snug transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40',
                            isActive
                              ? 'bg-muted text-foreground'
                              : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                          )}
                        >
                          {getTopicLabel(topic, lang)}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </nav>

        {/* Footer meta */}
        <div className="border-t border-border px-4 py-3">
          <SocialLinks lang={lang} />
          <div className="mt-3 font-mono text-[11px] text-muted-foreground">
            <div>{getProfileText('location', lang)}</div>
            <div className="mt-0.5">{getProfileText('availability', lang)}</div>
          </div>
        </div>
      </aside>
    </>
  )
}
