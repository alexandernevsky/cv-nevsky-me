import { useEffect, useRef } from 'react'
import { Message, TypingIndicator } from './Message'
import { type Message as ChatMessage } from '@/hooks/useChat'

interface ChatThreadProps {
  messages: ChatMessage[]
  isAnswering: boolean
  onChipSelect: (topicId: string) => void
  onProjectSelect: (projectId: string) => void
}

export function ChatThread({
  messages,
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
          onChipSelect={onChipSelect}
          onProjectSelect={onProjectSelect}
        />
      ))}
      {isAnswering && <TypingIndicator />}
      <div ref={endRef} />
    </div>
  )
}
