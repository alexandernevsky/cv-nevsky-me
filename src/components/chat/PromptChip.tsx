import { cn } from '@/lib/utils'

interface PromptChipProps {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

export function PromptChip({ children, onClick, className }: PromptChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-[13px] text-foreground transition-colors',
        'hover:border-muted-foreground/60 hover:bg-muted',
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40',
        className
      )}
    >
      {children}
    </button>
  )
}
