import { projects, type Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import { type Lang } from '@/lib/i18n'

interface EmbeddedProjectCardProps {
  projectId: string
  lang: Lang
  onSelect?: (projectId: string) => void
}

export function EmbeddedProjectCard({ projectId, lang, onSelect }: EmbeddedProjectCardProps) {
  const project: Project | undefined = projects.find(p => p.id === projectId)
  if (!project) return null

  const year = project.date ? project.date.slice(0, 4) : ''
  const clickable = Boolean(onSelect)

  const title = lang === 'ru' ? project.titleRu : project.titleEn
  const excerpt = lang === 'ru' ? project.excerptRu : project.excerptEn

  return (
    <button
      type="button"
      disabled={!clickable}
      onClick={clickable ? () => onSelect!(project.id) : undefined}
      className={cn(
        'group block w-full overflow-hidden rounded-md bg-transparent text-left transition-colors',
        clickable
          ? 'cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40'
          : 'cursor-default'
      )}
      aria-label={clickable ? (lang === 'ru' ? `Открыть проект: ${title}` : `Open project: ${title}`) : title}
    >
      {project.featureImage && (
        <div className="w-full overflow-hidden rounded-md bg-muted">
          <img
            src={project.featureImage}
            alt={title}
            className={cn(
              'block h-auto w-full transition-transform duration-300',
              clickable && 'group-hover:scale-[1.02]'
            )}
            loading="lazy"
          />
        </div>
      )}
      <div className="mt-2 flex items-center justify-between gap-2">
        {year && (
          <span className="font-mono text-[11px] text-muted-foreground">{year}</span>
        )}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-1">
        <div
          className={cn(
            'text-[13px] leading-snug text-foreground',
            clickable && 'transition-colors group-hover:text-muted-foreground'
          )}
        >
          {title}
        </div>
        {excerpt && (
          <p className="mt-1 line-clamp-3 text-[12px] leading-relaxed text-muted-foreground">
            {excerpt}
          </p>
        )}
      </div>
    </button>
  )
}

interface EmbeddedProjectGridProps {
  projectIds: string[]
  lang: Lang
  onSelect?: (projectId: string) => void
}

export function EmbeddedProjectGrid({ projectIds, lang, onSelect }: EmbeddedProjectGridProps) {
  if (!projectIds.length) return null
  return (
    <div className="mt-5 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
      {projectIds.map(id => (
        <EmbeddedProjectCard key={id} projectId={id} lang={lang} onSelect={onSelect} />
      ))}
    </div>
  )
}
