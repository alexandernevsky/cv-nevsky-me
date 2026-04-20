import { useCallback, useState } from 'react'
import { useChat } from '@/hooks/useChat'
import { Sidebar } from '@/components/chat/Sidebar'
import { ChatThread } from '@/components/chat/ChatThread'
import { ChatInput } from '@/components/chat/ChatInput'
import { WelcomeState } from '@/components/chat/WelcomeState'
import { TopBar } from '@/components/chat/TopBar'

export default function App() {
  const { messages, isAnswering, sendTopic, sendFreeText, sendProject, reset } = useChat()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleTopicSelect = useCallback(
    (id: string) => {
      sendTopic(id)
    },
    [sendTopic]
  )

  const activeTopicId =
    [...messages].reverse().find(m => m.role === 'system' && m.topicId)?.topicId ?? null

  const hasMessages = messages.length > 0

  return (
    <div className="flex h-[100dvh] bg-background text-foreground">
      <Sidebar
        activeTopicId={activeTopicId}
        onTopicSelect={handleTopicSelect}
        onReset={reset}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onReset={reset}
          canReset={hasMessages}
        />
        <div className="flex-1 overflow-y-auto">
          {hasMessages ? (
            <ChatThread
              messages={messages}
              isAnswering={isAnswering}
              onChipSelect={handleTopicSelect}
              onProjectSelect={sendProject}
            />
          ) : (
            <WelcomeState onSelect={handleTopicSelect} />
          )}
        </div>
        <ChatInput onSend={sendFreeText} isBusy={isAnswering} />
      </main>
    </div>
  )
}
