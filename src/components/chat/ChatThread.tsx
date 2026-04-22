import { useCallback, useEffect, useRef } from 'react'
import { Message, TypingIndicator } from './Message'
import { type Message as ChatMessage } from '@/hooks/useChat'
import { type Lang } from '@/lib/i18n'

interface ChatThreadProps {
  messages: ChatMessage[]
  lang: Lang
  isAnswering: boolean
  onChipSelect: (topicId: string) => void
  onProjectSelect: (projectId: string) => void
}

export function ChatThread({
  messages,
  lang,
  isAnswering,
  onChipSelect,
  onProjectSelect,
}: ChatThreadProps) {
  const endRef = useRef<HTMLDivElement>(null)
  const latestMessageId = messages[messages.length - 1]?.id
  const handleTypingFrame = useCallback(() => {
    endRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' })
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages.length, isAnswering])

  return (
    <div className="mx-auto flex w-full max-w-[960px] min-w-0 flex-col gap-8 overflow-x-hidden px-5 pt-10 pb-12 md:px-6">
      {messages.map(message => (
        <Message
          key={message.id}
          message={message}
          lang={lang}
          onChipSelect={onChipSelect}
          onProjectSelect={onProjectSelect}
          animate={message.id === latestMessageId}
          onTypingFrame={handleTypingFrame}
        />
      ))}
      {isAnswering && <TypingIndicator lang={lang} />}
      <div ref={endRef} />
    </div>
  )
}
