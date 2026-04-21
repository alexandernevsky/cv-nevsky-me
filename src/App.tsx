import { useCallback, useEffect, useState } from 'react'
import { useChat } from '@/hooks/useChat'
import { Sidebar } from '@/components/chat/Sidebar'
import { ChatThread } from '@/components/chat/ChatThread'
import { ChatInput } from '@/components/chat/ChatInput'
import { WelcomeState } from '@/components/chat/WelcomeState'
import { TopBar } from '@/components/chat/TopBar'
import { getStoredLang, setStoredLang, type Lang } from '@/lib/i18n'
import { getStoredTheme, setStoredTheme, type Theme } from '@/lib/theme'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return getStoredLang()
  const param = new URLSearchParams(window.location.search).get('lang')
  return param === 'ru' || param === 'en' ? param : getStoredLang()
}

function updateConversationUrl(params: { lang: Lang; topicId?: string; projectId?: string }) {
  if (typeof window === 'undefined') return

  const search = new URLSearchParams()
  search.set('lang', params.lang)
  if (params.topicId) search.set('topic', params.topicId)
  if (params.projectId) search.set('project', params.projectId)

  window.history.pushState(null, '', `${window.location.pathname}?${search.toString()}`)
}

function clearConversationUrl(lang: Lang) {
  if (typeof window === 'undefined') return
  window.history.pushState(null, '', `${window.location.pathname}?lang=${lang}`)
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => getInitialLang())
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const topicId = params.get('topic')
    const projectId = params.get('project')

    if (topicId) {
      sendTopic(topicId)
      return
    }

    if (projectId) {
      sendProject(projectId)
    }
    // Run once on boot to hydrate a shared deep link.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTopicSelect = useCallback(
    (id: string) => {
      updateConversationUrl({ lang, topicId: id })
      sendTopic(id)
    },
    [lang, sendTopic]
  )

  const handleProjectSelect = useCallback(
    (id: string) => {
      updateConversationUrl({ lang, projectId: id })
      sendProject(id)
    },
    [lang, sendProject]
  )

  const handleReset = useCallback(
    () => {
      clearConversationUrl(lang)
      reset()
    },
    [lang, reset]
  )

  const handleLangToggle = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'ru' : 'en'

      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        params.set('lang', next)
        window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`)
      }

      return next
    })
  }, [])

  const activeTopicId =
    [...messages].reverse().find(m => m.role === 'system' && m.topicId)?.topicId ?? null

  const hasMessages = messages.length > 0

  return (
    <div className="flex h-[100dvh] bg-background text-foreground">
      <Sidebar
        lang={lang}
        theme={theme}
        onToggleLang={handleLangToggle}
        onToggleTheme={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
        activeTopicId={activeTopicId}
        onTopicSelect={handleTopicSelect}
        onReset={handleReset}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
        <TopBar
          lang={lang}
          theme={theme}
          onToggleLang={handleLangToggle}
          onToggleTheme={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onReset={handleReset}
          canReset={hasMessages}
        />
        <div className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto">
          {hasMessages ? (
            <ChatThread
              messages={messages}
              lang={lang}
              isAnswering={isAnswering}
              onChipSelect={handleTopicSelect}
              onProjectSelect={handleProjectSelect}
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
