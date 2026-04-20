import { useEffect, useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChatInputProps {
  onSend: (text: string) => void
  isBusy: boolean
}

const MAX_HEIGHT = 180

export function ChatInput({ onSend, isBusy }: ChatInputProps) {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-grow
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT)}px`
  }, [value])

  const submit = () => {
    const trimmed = value.trim()
    if (!trimmed || isBusy) return
    onSend(trimmed)
    setValue('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  const disabled = isBusy || !value.trim()

  return (
    <div className="w-full border-t border-border bg-background pt-4 pb-5">
      <form
        className="mx-auto w-full max-w-[720px] px-5 md:px-6"
        onSubmit={e => {
          e.preventDefault()
          submit()
        }}
      >
        <div
          className={cn(
            'relative flex items-end gap-2 rounded-xl border border-border bg-background px-3.5 py-2.5',
            'transition-colors',
            'focus-within:border-muted-foreground/60'
          )}
        >
          <textarea
            ref={textareaRef}
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about projects, background, or current builds…"
            rows={1}
            autoFocus
            className={cn(
              'flex-1 resize-none bg-transparent text-[15px] leading-[1.55] text-foreground outline-none placeholder:text-muted-foreground',
              'font-sans'
            )}
            style={{ maxHeight: MAX_HEIGHT }}
            aria-label="Ask a question"
          />
          <button
            type="submit"
            disabled={disabled}
            className={cn(
              'grid h-8 w-8 shrink-0 place-items-center rounded-md transition-colors',
              'focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40',
              disabled
                ? 'bg-muted text-muted-foreground/60'
                : 'bg-foreground text-background hover:bg-foreground/90'
            )}
            aria-label="Send message"
          >
            <ArrowUp size={15} strokeWidth={2.4} />
          </button>
        </div>
        <div className="mt-2 px-1 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">
          Scope: Alexander Nevsky · work, projects, process, contact
        </div>
      </form>
    </div>
  )
}
