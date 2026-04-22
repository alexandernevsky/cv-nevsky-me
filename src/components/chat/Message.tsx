import { lazy, Suspense } from 'react'
import { getTopic, getTopicChipLabel, getTopicPrompt, getTopicResponse } from '@/data/topics'
import { projects } from '@/data/projects'
import { getProfileText, profileAvatarSrc } from '@/data/profile'
import { type Message as ChatMessage } from '@/hooks/useChat'
import { ContactActions } from './ContactActions'
import { EmbeddedProjectGrid } from './EmbeddedProjectCard'
import { PromptChip } from './PromptChip'
import { type Lang } from '@/lib/i18n'

interface MessageProps {
  message: ChatMessage
  lang: Lang
  onChipSelect: (topicId: string) => void
  onProjectSelect: (projectId: string) => void
}

const MarkdownContent = lazy(() =>
  import('./MarkdownContent').then(module => ({ default: module.MarkdownContent }))
)

export function Message({ message, lang, onChipSelect, onProjectSelect }: MessageProps) {
  if (message.role === 'user') {
    return <UserMessage message={message} lang={lang} />
  }
  return (
    <SystemMessage
      message={message}
      lang={lang}
      onChipSelect={onChipSelect}
      onProjectSelect={onProjectSelect}
    />
  )
}

/**
 * Converts lines like `![](url)caption` into semantic <figure>+<figcaption>.
 * Works because a block-level raw HTML element stops Markdown from wrapping
 * the result in <p>. Empty captions produce <figure> with <img> only.
 */
function transformInlineImageCaptions(md: string): string {
  return md.replace(
    /^!\[([^\]]*)\]\(([^)]+)\)(.*)$/gm,
    (_full, alt: string, src: string, captionRaw: string) => {
      const caption = captionRaw.trim()
      const safeAlt = alt.replace(/"/g, '&quot;')
      const imgTag = `<img src="${src}" alt="${safeAlt}" loading="lazy" />`
      if (caption) {
        return `<figure class="chat-media"><a href="${src}" target="_blank" rel="noopener noreferrer">${imgTag}</a><figcaption>${caption}</figcaption></figure>`
      }
      return `<figure class="chat-media"><a href="${src}" target="_blank" rel="noopener noreferrer">${imgTag}</a></figure>`
    }
  )
}

/**
 * Strips a leading `# Title` from markdown since the component renders the
 * title separately in its own styled <h2>.
 */
function stripLeadingH1(md: string): string {
  return md.replace(/^\s*#\s+[^\n]+\n+/, '')
}

function UserMessage({ message, lang }: { message: ChatMessage; lang: Lang }) {
  const topic = message.topicId ? getTopic(message.topicId) : undefined
  const project = message.projectId ? projects.find(p => p.id === message.projectId) : undefined

  let text = message.text ?? ''
  if (topic) text = getTopicPrompt(topic, lang)
  if (project) text = lang === 'ru' ? `Расскажи про «${project.titleRu}».` : `Tell me about "${project.titleEn}".`

  return (
    <div className="mx-auto w-full max-w-[720px]">
      <div className="flex w-full justify-end">
        <div className="max-w-[85%] rounded-lg bg-foreground px-3.5 py-2.5 text-[14px] leading-relaxed text-background shadow-sm">
          {text}
        </div>
      </div>
    </div>
  )
}

function SystemMessage({
  message,
  lang,
  onChipSelect,
  onProjectSelect,
}: {
  message: ChatMessage
  lang: Lang
  onChipSelect: (topicId: string) => void
  onProjectSelect: (projectId: string) => void
}) {
  if (message.kind === 'off-topic') {
    return (
      <div className="mx-auto w-full max-w-[720px]">
        <MessageMeta lang={lang} />
        <div className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
          {lang === 'ru'
            ? 'Этот интерфейс ограничен темами об Александре Невском: работа, проекты, процесс и контакты. Ваш вопрос вне этого контекста. Попробуйте одну из тем ниже:'
            : 'This interface is scoped to Alexander Nevsky — his work, projects, process, and contact. Your question sits outside that scope. Try one of these instead:'}
        </div>
        <SuggestionChips lang={lang} ids={message.suggestions ?? []} onSelect={onChipSelect} />
      </div>
    )
  }

  if (message.kind === 'project' && message.projectId) {
    const project = projects.find(p => p.id === message.projectId)
    if (!project) return null
    const year = project.date ? project.date.slice(0, 4) : ''
    const title = lang === 'ru' ? project.titleRu : project.titleEn
    const rawContent = lang === 'ru' ? project.contentRu : project.contentEn
    const content = transformInlineImageCaptions(stripLeadingH1(rawContent))

    return (
      <div className="w-full">
        <div className="mx-auto w-full max-w-[720px]">
          <MessageMeta lang={lang} />
          <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">
            {year && <span>{year}</span>}
            {year && project.tags.length > 0 && <span>·</span>}
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h2 className="mt-2 font-mono text-[24px] font-[800] leading-[1.18] text-foreground md:text-[32px]">
            {title}
          </h2>
        </div>

        {project.featureImage && (
          <div className="mt-5 overflow-hidden rounded-md border border-border bg-muted">
            <img
              src={project.featureImage}
              alt={title}
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>
        )}

        <div className="mt-6">
          <Suspense fallback={<MarkdownFallback />}>
            <MarkdownContent wide>
              {content}
            </MarkdownContent>
          </Suspense>
        </div>

        <div className="mx-auto w-full max-w-[720px]">
          <SuggestionChips lang={lang} ids={message.suggestions ?? []} onSelect={onChipSelect} />
        </div>
      </div>
    )
  }

  const topic = message.topicId ? getTopic(message.topicId) : undefined
  if (!topic) return null

  return (
    <div className="mx-auto w-full max-w-[720px]">
      <MessageMeta lang={lang} />
      <div className="mt-2">
        <Suspense fallback={<MarkdownFallback />}>
          <MarkdownContent>
            {getTopicResponse(topic, lang)}
          </MarkdownContent>
        </Suspense>
      </div>
      {topic.id === 'contact' && <ContactActions lang={lang} />}
      {topic.relatedProjectIds && topic.relatedProjectIds.length > 0 && (
        <EmbeddedProjectGrid
          projectIds={topic.relatedProjectIds}
          lang={lang}
          onSelect={onProjectSelect}
        />
      )}
      <SuggestionChips lang={lang} ids={message.suggestions ?? []} onSelect={onChipSelect} />
    </div>
  )
}

function MarkdownFallback() {
  return <div className="h-12 animate-pulse rounded-md bg-muted/60" />
}

function MessageMeta({ lang }: { lang: Lang }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={profileAvatarSrc}
        alt={getProfileText('name', lang)}
        className="h-8 w-8 shrink-0 rounded-full object-cover"
        loading="lazy"
      />
      <div className="min-w-0">
        <div className="truncate text-[13px] font-[800] leading-tight text-foreground">
          {getProfileText('name', lang)}
        </div>
        <div className="truncate font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          {getProfileText('answerTitle', lang)}
        </div>
      </div>
    </div>
  )
}

function SuggestionChips({
  lang,
  ids,
  onSelect,
}: {
  lang: Lang
  ids: string[]
  onSelect: (id: string) => void
}) {
  if (!ids.length) return null
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {ids.map(id => {
        const topic = getTopic(id)
        if (!topic) return null
        const label = getTopicChipLabel(topic, lang)
        return (
          <PromptChip key={id} onClick={() => onSelect(id)}>
            {label}
          </PromptChip>
        )
      })}
    </div>
  )
}

export function TypingIndicator({ lang }: { lang: Lang }) {
  return (
    <div className="mx-auto w-full max-w-[720px]">
      <MessageMeta lang={lang} />
      <div className="mt-2 flex items-center gap-1.5">
        <span className="typing-dot" />
        <span className="typing-dot" style={{ animationDelay: '120ms' }} />
        <span className="typing-dot" style={{ animationDelay: '240ms' }} />
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {lang === 'ru' ? 'Формирую ответ…' : 'Thinking…'}
      </div>
    </div>
  )
}
