import { Menu, RotateCcw } from 'lucide-react'

interface TopBarProps {
  onOpenSidebar: () => void
  onReset: () => void
  canReset: boolean
}

export function TopBar({ onOpenSidebar, onReset, canReset }: TopBarProps) {
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
      <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        Alexander Nevsky
      </div>
      <button
        type="button"
        onClick={onReset}
        disabled={!canReset}
        className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40 disabled:opacity-40"
        aria-label="Reset conversation"
      >
        <RotateCcw size={15} />
      </button>
    </div>
  )
}
