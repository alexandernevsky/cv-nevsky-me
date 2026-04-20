import { useEffect, useRef } from 'react'
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

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages.length, isAnswering])

  return (
    <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8 px-5 pt-10 pb-12 md:px-6">
      {messages.map(message => (
        <Message
          key={message.id}
          message={message}
          lang={lang}
          onChipSelect={onChipSelect}
          onProjectSelect={onProjectSelect}
        />
      ))}
      {isAnswering && <TypingIndicator lang={lang} />}
      <div ref={endRef} />
    </div>
  )
}
