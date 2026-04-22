import { getProfileText } from '@/data/profile'
import { getTopic, getTopicChipLabel } from '@/data/topics'
import { PromptChip } from './PromptChip'
import { type Lang } from '@/lib/i18n'

const WELCOME_CHIPS = ['who', 'selected-work', 'current-builds', 'ai-orchestrator', 'contact']

interface WelcomeStateProps {
  lang: Lang
  positioning: string
  onSelect: (topicId: string) => void
}

export function WelcomeState({ lang, positioning, onSelect }: WelcomeStateProps) {
  return (
    <div className="mx-auto flex h-full min-h-full w-full max-w-[720px] min-w-0 flex-col justify-center overflow-x-hidden px-5 pt-8 pb-12 md:px-6">
      <div className="min-w-0 break-words font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {getProfileText('role', lang)} · {getProfileText('location', lang)}
      </div>
      <h1 className="mt-3 min-w-0 text-balance break-words font-mono text-[34px] font-[800] leading-[1.05] text-foreground min-[420px]:text-[40px] md:text-[56px]">
        {getProfileText('name', lang)}
      </h1>
      <p className="mt-4 max-w-[600px] min-w-0 whitespace-pre-line break-words text-[15px] font-[500] leading-[1.65] text-foreground/90 md:text-[16px]">
        {positioning}
      </p>
      <p className="mt-3 max-w-[560px] min-w-0 break-words text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
        {lang === 'ru'
          ? 'Откройте тему слева или задайте вопрос ниже. Ответы держатся в рамках проектов, опыта, процесса и контактов'
          : 'Open a topic from the sidebar or ask below. Answers stay inside projects, background, process, and contact'}
      </p>

      <div className="mt-8">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
          {lang === 'ru' ? 'Быстрые темы' : 'Quick topics'}
        </div>
        <div className="mt-3 flex min-w-0 flex-wrap gap-2">
          {WELCOME_CHIPS.map(id => {
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
      </div>
    </div>
  )
}
