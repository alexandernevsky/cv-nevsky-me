import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/utils'
import { getTopic } from '@/data/topics'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'
import { type Message as ChatMessage } from '@/hooks/useChat'
import { EmbeddedProjectGrid } from './EmbeddedProjectCard'
import { PromptChip } from './PromptChip'

interface MessageProps {
  message: ChatMessage
  onChipSelect: (topicId: string) => void
  onProjectSelect: (projectId: string) => void
}

export function Message({ message, onChipSelect, onProjectSelect }: MessageProps) {
  if (message.role === 'user') {
    return <UserMessage text={message.text ?? ''} />
  }
  return (
    <SystemMessage
      message={message}
      onChipSelect={onChipSelect}
      onProjectSelect={onProjectSelect}
    />
  )
}

function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex w-full justify-end">
      <div className="max-w-[85%] rounded-lg bg-muted/70 px-3.5 py-2.5 text-[14px] leading-relaxed text-foreground">
        {text}
      </div>
    </div>
  )
}

function SystemMessage({
  message,
  onChipSelect,
  onProjectSelect,
}: {
  message: ChatMessage
  onChipSelect: (topicId: string) => void
  onProjectSelect: (projectId: string) => void
}) {
  if (message.kind === 'off-topic') {
    return (
      <div className="w-full">
        <MessageMeta />
        <div className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
          This interface is scoped to Alexander Nevsky — his work, projects,
          process, and contact. Your question sits outside that scope. Try one
          of these instead:
        </div>
        <SuggestionChips ids={message.suggestions ?? []} onSelect={onChipSelect} />
      </div>
    )
  }

  if (message.kind === 'project' && message.projectId) {
    const project = projects.find(p => p.id === message.projectId)
    if (!project) return null
    const year = project.date ? project.date.slice(0, 4) : ''
    return (
      <div className="w-full">
        <MessageMeta />
        <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">
          {year && <span>{year}</span>}
          {year && project.tags.length > 0 && <span>·</span>}
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h2 className="mt-2 text-[22px] leading-[1.2] tracking-tight text-foreground md:text-[26px]">
          {project.titleEn}
        </h2>
        {project.featureImage && (
          <div className="mt-4 overflow-hidden rounded-md border border-border bg-muted">
            <img
              src={project.featureImage}
              alt={project.titleEn}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div
          className={cn(
            'mt-4 text-[15px] leading-[1.65] text-foreground',
            'prose-chat'
          )}
        >
          <ReactMarkdown>{project.contentEn}</ReactMarkdown>
        </div>
        <SuggestionChips ids={message.suggestions ?? []} onSelect={onChipSelect} />
      </div>
    )
  }

  const topic = message.topicId ? getTopic(message.topicId) : undefined
  if (!topic) return null

  return (
    <div className="w-full">
      <MessageMeta />
      <div
        className={cn(
          'mt-2 text-[15px] leading-[1.65] text-foreground',
          'prose-chat'
        )}
      >
        <ReactMarkdown>{topic.response}</ReactMarkdown>
      </div>
      {topic.relatedProjectIds && topic.relatedProjectIds.length > 0 && (
        <EmbeddedProjectGrid
          projectIds={topic.relatedProjectIds}
          onSelect={onProjectSelect}
        />
      )}
      <SuggestionChips ids={message.suggestions ?? []} onSelect={onChipSelect} />
    </div>
  )
}

function MessageMeta() {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      <span
        className="h-1.5 w-1.5 rounded-full bg-foreground/70"
        aria-hidden="true"
      />
      <span>{profile.name}</span>
    </div>
  )
}

function SuggestionChips({
  ids,
  onSelect,
}: {
  ids: string[]
  onSelect: (id: string) => void
}) {
  if (!ids.length) return null
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {ids.map(id => {
        const topic = getTopic(id)
        if (!topic) return null
        const label = topic.chipLabel ?? topic.label
        return (
          <PromptChip key={id} onClick={() => onSelect(id)}>
            {label}
          </PromptChip>
        )
      })}
    </div>
  )
}

export function TypingIndicator() {
  return (
    <div className="w-full">
      <MessageMeta />
      <div className="mt-2 flex items-center gap-1.5">
        <span className="typing-dot" />
        <span className="typing-dot" style={{ animationDelay: '120ms' }} />
        <span className="typing-dot" style={{ animationDelay: '240ms' }} />
      </div>
    </div>
  )
}
