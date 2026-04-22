import { useCallback, useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { useChat } from '@/hooks/useChat'
import { Sidebar } from '@/components/chat/Sidebar'
import { ChatThread } from '@/components/chat/ChatThread'
import { ChatInput } from '@/components/chat/ChatInput'
import { WelcomeState } from '@/components/chat/WelcomeState'
import { TopBar } from '@/components/chat/TopBar'
import { BlogPage } from '@/components/blog/BlogPage'
import { profile } from '@/data/profile'
import { getStoredLang, setStoredLang, type Lang } from '@/lib/i18n'
import { getStoredTheme, setStoredTheme, type Theme } from '@/lib/theme'

function getInitialRouteLang(pathname: string): Lang | null {
  if (pathname === '/blog/ru' || pathname.startsWith('/blog/ru/')) return 'ru'
  if (pathname === '/blog' || pathname.startsWith('/blog/')) return 'en'
  return null
}

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return getStoredLang()
  const routeLang = getInitialRouteLang(window.location.pathname)
  if (routeLang) return routeLang
  const param = new URLSearchParams(window.location.search).get('lang')
  return param === 'ru' || param === 'en' ? param : getStoredLang()
}

function isBlogRoute(pathname: string) {
  return pathname === '/blog' || pathname.startsWith('/blog/')
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

function pickRandomPositioningIndex() {
  const total = profile.positioning.length
  return total > 0 ? Math.floor(Math.random() * total) : 0
}

export default function App() {
  const [pathname, setPathname] = useState(() => (typeof window === 'undefined' ? '/' : window.location.pathname))
  const [lang, setLang] = useState<Lang>(() => getInitialLang())
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme())
  const [positioningIndex, setPositioningIndex] = useState(() => pickRandomPositioningIndex())

  useEffect(() => {
    const syncLocation = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', syncLocation)
    return () => window.removeEventListener('popstate', syncLocation)
  }, [])

  useEffect(() => {
    const routeLang = getInitialRouteLang(pathname)
    if (routeLang && routeLang !== lang) {
      setLang(routeLang)
      return
    }

    if (!routeLang) {
      const param = new URLSearchParams(window.location.search).get('lang')
      const nextLang = param === 'ru' || param === 'en' ? param : getStoredLang()
      if (nextLang !== lang) setLang(nextLang)
    }
  }, [lang, pathname])

  useEffect(() => {
    setStoredLang(lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    setStoredTheme(theme)
    document.documentElement.dataset.theme = isBlogRoute(pathname) ? 'dark' : theme
  }, [pathname, theme])

  useEffect(() => {
    if (isBlogRoute(pathname)) {
      document.documentElement.dataset.page = 'blog'
      document.documentElement.dataset.theme = 'dark'
      document.title =
        lang === 'ru' ? 'Александр Невский — Блог' : 'Alexander Nevsky — Blog'
      return
    }

    delete document.documentElement.dataset.page
    document.title =
      lang === 'ru'
        ? 'Александр Невский — Conversational Portfolio'
        : 'Alexander Nevsky — Conversational Portfolio'
  }, [lang, pathname])

  const handleLangToggle = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'ru' : 'en'

      if (typeof window !== 'undefined') {
        if (isBlogRoute(window.location.pathname)) {
          const nextPath = next === 'ru' ? '/blog/ru/' : '/blog/'
          window.history.pushState(null, '', nextPath)
          setPathname(nextPath)
        } else {
          const params = new URLSearchParams(window.location.search)
          params.set('lang', next)
          window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`)
        }
      }

      return next
    })
  }, [])

  if (isBlogRoute(pathname)) {
    return (
      <BlogPage
        lang={lang}
        onToggleLang={handleLangToggle}
      />
    )
  }

  return (
    <ChatShell
      lang={lang}
      theme={theme}
      onToggleLang={handleLangToggle}
      onToggleTheme={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
      positioningIndex={positioningIndex}
      setPositioningIndex={setPositioningIndex}
    />
  )
}

function ChatShell({
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
  positioningIndex,
  setPositioningIndex,
}: {
  lang: Lang
  theme: Theme
  onToggleLang: () => void
  onToggleTheme: () => void
  positioningIndex: number
  setPositioningIndex: Dispatch<SetStateAction<number>>
}) {
  const { messages, isAnswering, sendTopic, sendFreeText, sendProject, reset } = useChat(lang)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
      setPositioningIndex(pickRandomPositioningIndex())
      clearConversationUrl(lang)
      reset()
    },
    [lang, reset, setPositioningIndex]
  )

  const activeTopicId =
    [...messages].reverse().find(m => m.role === 'system' && m.topicId)?.topicId ?? null

  const hasMessages = messages.length > 0

  return (
    <div className="flex h-[100dvh] bg-background text-foreground">
      <Sidebar
        lang={lang}
        theme={theme}
        onToggleLang={onToggleLang}
        onToggleTheme={onToggleTheme}
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
          onToggleLang={onToggleLang}
          onToggleTheme={onToggleTheme}
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
            <WelcomeState
              lang={lang}
              positioning={
                profile.positioning[positioningIndex]?.[lang] ??
                (lang === 'ru'
                  ? 'Я работаю на стыке дизайна и AI, соединяя продуктовую логику, форму и живые системы.'
                  : 'I work at the intersection of design and AI, connecting product logic, form, and living systems.')
              }
              onSelect={handleTopicSelect}
            />
          )}
        </div>
        <ChatInput lang={lang} onSend={sendFreeText} isBusy={isAnswering} />
      </main>
    </div>
  )
}
