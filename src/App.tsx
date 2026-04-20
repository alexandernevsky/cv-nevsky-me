import { useCallback, useEffect, useState } from 'react'
import { useChat } from '@/hooks/useChat'
import { Sidebar } from '@/components/chat/Sidebar'
import { ChatThread } from '@/components/chat/ChatThread'
import { ChatInput } from '@/components/chat/ChatInput'
import { WelcomeState } from '@/components/chat/WelcomeState'
import { TopBar } from '@/components/chat/TopBar'
import { getStoredLang, setStoredLang, type Lang } from '@/lib/i18n'
import { getStoredTheme, setStoredTheme, type Theme } from '@/lib/theme'

export default function App() {
  const [lang, setLang] = useState<Lang>(() => getStoredLang())
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme())
  const { messages, isAnswering, sendTopic, sendFreeText, sendProject, reset } = useChat(lang)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    setStoredLang(lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    setStoredTheme(theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

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
        lang={lang}
        theme={theme}
        onToggleLang={() => setLang(prev => (prev === 'en' ? 'ru' : 'en'))}
        onToggleTheme={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
        activeTopicId={activeTopicId}
        onTopicSelect={handleTopicSelect}
        onReset={reset}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar
          lang={lang}
          theme={theme}
          onToggleLang={() => setLang(prev => (prev === 'en' ? 'ru' : 'en'))}
          onToggleTheme={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onReset={reset}
          canReset={hasMessages}
        />
        <div className="flex-1 overflow-y-auto">
          {hasMessages ? (
            <ChatThread
              messages={messages}
              lang={lang}
              isAnswering={isAnswering}
              onChipSelect={handleTopicSelect}
              onProjectSelect={sendProject}
            />
          ) : (
            <WelcomeState lang={lang} onSelect={handleTopicSelect} />
          )}
        </div>
        <ChatInput lang={lang} onSend={sendFreeText} isBusy={isAnswering} />
      </main>
    </div>
  )
}
