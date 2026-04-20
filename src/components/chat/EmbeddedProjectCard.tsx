import { projects, type Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface EmbeddedProjectCardProps {
  projectId: string
  onSelect?: (projectId: string) => void
}

export function EmbeddedProjectCard({ projectId, onSelect }: EmbeddedProjectCardProps) {
  const project: Project | undefined = projects.find(p => p.id === projectId)
  if (!project) return null

  const year = project.date ? project.date.slice(0, 4) : ''
  const clickable = Boolean(onSelect)

  return (
    <button
      type="button"
      disabled={!clickable}
      onClick={clickable ? () => onSelect!(project.id) : undefined}
      className={cn(
        'group flex flex-col gap-2 rounded-md border border-border bg-background overflow-hidden text-left transition-colors',
        clickable
          ? 'hover:border-muted-foreground/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40 cursor-pointer'
          : 'cursor-default'
      )}
      aria-label={clickable ? `Open project: ${project.titleEn}` : project.titleEn}
    >
      {project.featureImage && (
        <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
          <img
            src={project.featureImage}
            alt={project.titleEn}
            className={cn(
              'h-full w-full object-cover transition-transform duration-300',
              clickable && 'group-hover:scale-[1.02]'
            )}
            loading="lazy"
          />
        </div>
      )}
      <div className="flex items-center justify-between gap-2 px-3 pt-2">
        {year && (
          <span className="font-mono text-[11px] text-muted-foreground">{year}</span>
        )}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="rounded-sm border border-border bg-muted px-1.5 py-px font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-3 pb-3">
        <div
          className={cn(
            'text-[13px] leading-snug text-foreground',
            clickable && 'transition-colors group-hover:text-foreground'
          )}
        >
          {project.titleEn}
        </div>
        {project.excerptEn && (
          <p className="mt-1 line-clamp-3 text-[12px] leading-relaxed text-muted-foreground">
            {project.excerptEn}
          </p>
        )}
      </div>
    </button>
  )
}

interface EmbeddedProjectGridProps {
  projectIds: string[]
  onSelect?: (projectId: string) => void
}

export function EmbeddedProjectGrid({ projectIds, onSelect }: EmbeddedProjectGridProps) {
  if (!projectIds.length) return null
  return (
    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {projectIds.map(id => (
        <EmbeddedProjectCard key={id} projectId={id} onSelect={onSelect} />
      ))}
    </div>
  )
}
