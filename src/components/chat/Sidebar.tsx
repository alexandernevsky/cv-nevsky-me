import { useEffect } from 'react'
import { Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { sidebarCategories, topics } from '@/data/topics'

interface SidebarProps {
  activeTopicId: string | null
  onTopicSelect: (id: string) => void
  onReset: () => void
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({
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
          'fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-border bg-background transition-transform duration-200 ease-out',
          'md:static md:z-0 md:translate-x-0 md:shrink-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Prompt library"
      >
        {/* Brand block */}
        <div className="flex items-start justify-between gap-2 border-b border-border px-4 pt-4 pb-4">
          <div className="min-w-0">
            <div className="text-[13px] font-medium tracking-tight text-foreground">
              {profile.name}
            </div>
            <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {profile.role}
            </div>
            <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {profile.subRole}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="md:hidden -mt-1 -mr-1 grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>
        </div>

        {/* New chat */}
        <div className="px-3 pt-3 pb-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex w-full items-center gap-2 rounded-md border border-border bg-transparent px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
          >
            <Plus size={14} />
            <span>New chat</span>
          </button>
        </div>

        {/* Prompt library */}
        <nav
          className="flex-1 overflow-y-auto px-2 pt-1 pb-4"
          aria-label="Topics"
        >
          {sidebarCategories.map(cat => {
            const items = topics.filter(
              t => t.category === cat.id && t.visibleInSidebar
            )
            if (!items.length) return null
            return (
              <div key={cat.id} className="mb-4">
                <div className="px-3 pt-3 pb-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {cat.label}
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
                          {topic.label}
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
        <div className="border-t border-border px-4 py-3 font-mono text-[11px] text-muted-foreground">
          <div>{profile.location}</div>
          <div className="mt-0.5">{profile.availability}</div>
        </div>
      </aside>
    </>
  )
}
