import { useCallback, useRef, useState } from 'react'
import { getTopic, getTopicPrompt, type Topic } from '@/data/topics'
import { projects } from '@/data/projects'
import { matchTopic, offTopicSuggestions } from '@/lib/chatRouter'
import { type Lang } from '@/lib/i18n'

export type MessageRole = 'user' | 'system'

export type MessageKind =
  | 'topic'
  | 'free-text-match'
  | 'off-topic'
  | 'project'
  | 'plain'
  | 'user'

export interface Message {
  id: string
  role: MessageRole
  kind: MessageKind
  /** For user messages — the raw text */
  text?: string
  /** For system messages — the topic driving the answer */
  topicId?: string
  /** For project messages — the project being shown */
  projectId?: string
  /** For off-topic responses — the user's original query */
  sourceQuery?: string
  /** Suggested follow-up topic IDs for chips under the message */
  suggestions?: string[]
  createdAt: number
}

const ANSWER_DELAY_MS = 280

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

export interface UseChat {
  messages: Message[]
  isAnswering: boolean
  sendTopic: (id: string) => void
  sendFreeText: (text: string) => void
  sendProject: (id: string) => void
  reset: () => void
}

export function useChat(lang: Lang): UseChat {
  const [messages, setMessages] = useState<Message[]>([])
  const [isAnswering, setIsAnswering] = useState(false)
  const pendingTimer = useRef<number | null>(null)

  const appendSystemFromTopic = useCallback((topic: Topic, kind: MessageKind) => {
    setMessages(prev => [
      ...prev,
      {
        id: uid(),
        role: 'system',
        kind,
        topicId: topic.id,
        suggestions: topic.followUps,
        createdAt: Date.now(),
      },
    ])
  }, [])

  const scheduleAnswer = useCallback((fn: () => void) => {
    setIsAnswering(true)
    if (pendingTimer.current) window.clearTimeout(pendingTimer.current)
    pendingTimer.current = window.setTimeout(() => {
      fn()
      setIsAnswering(false)
      pendingTimer.current = null
    }, ANSWER_DELAY_MS)
  }, [])

  const sendTopic = useCallback(
    (id: string) => {
      const topic = getTopic(id)
      if (!topic) return
      setMessages(prev => [
        ...prev,
        {
          id: uid(),
          role: 'user',
          kind: 'user',
          topicId: topic.id,
          text: getTopicPrompt(topic, lang),
          createdAt: Date.now(),
        },
      ])
      scheduleAnswer(() => appendSystemFromTopic(topic, 'topic'))
    },
    [appendSystemFromTopic, lang, scheduleAnswer]
  )

  const sendFreeText = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) return
      setMessages(prev => [
        ...prev,
        {
          id: uid(),
          role: 'user',
          kind: 'user',
          text: trimmed,
          createdAt: Date.now(),
        },
      ])
      const match = matchTopic(trimmed)
      scheduleAnswer(() => {
        if (match) {
          appendSystemFromTopic(match, 'free-text-match')
        } else {
          setMessages(prev => [
            ...prev,
            {
              id: uid(),
              role: 'system',
              kind: 'off-topic',
              sourceQuery: trimmed,
              suggestions: offTopicSuggestions(),
              createdAt: Date.now(),
            },
          ])
        }
      })
    },
    [appendSystemFromTopic, scheduleAnswer]
  )

  const sendProject = useCallback(
    (projectId: string) => {
      const project = projects.find(p => p.id === projectId)
      if (!project) return
      setMessages(prev => [
        ...prev,
        {
          id: uid(),
          role: 'user',
          kind: 'user',
          projectId: project.id,
          text: lang === 'ru' ? `Расскажи про «${project.titleRu}».` : `Tell me about "${project.titleEn}".`,
          createdAt: Date.now(),
        },
      ])
      scheduleAnswer(() => {
        setMessages(prev => [
          ...prev,
          {
            id: uid(),
            role: 'system',
            kind: 'project',
            projectId: project.id,
            suggestions: ['selected-work', 'contact'],
            createdAt: Date.now(),
          },
        ])
      })
    },
    [lang, scheduleAnswer]
  )

  const reset = useCallback(() => {
    if (pendingTimer.current) {
      window.clearTimeout(pendingTimer.current)
      pendingTimer.current = null
    }
    setIsAnswering(false)
    setMessages([])
  }, [])

  return { messages, isAnswering, sendTopic, sendFreeText, sendProject, reset }
}
