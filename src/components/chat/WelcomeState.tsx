import { profile } from '@/data/profile'
import { getTopic } from '@/data/topics'
import { PromptChip } from './PromptChip'

const WELCOME_CHIPS = ['who', 'selected-work', 'current-builds', 'ai-orchestrator', 'contact']

interface WelcomeStateProps {
  onSelect: (topicId: string) => void
}

export function WelcomeState({ onSelect }: WelcomeStateProps) {
  return (
    <div className="mx-auto flex h-full min-h-full w-full max-w-[720px] flex-col justify-center px-5 pt-8 pb-12 md:px-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {profile.role} · {profile.location}
      </div>
      <h1 className="mt-3 text-[40px] leading-[1.05] tracking-tight text-foreground md:text-[56px]">
        {profile.name}.
      </h1>
      <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
        A conversational interface to my work. Browse curated topics from the
        sidebar, or ask directly below. Answers stay inside the scope of my
        projects, background, process, and contact.
      </p>

      <div className="mt-8">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
          Try asking
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {WELCOME_CHIPS.map(id => {
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
      </div>
    </div>
  )
}
