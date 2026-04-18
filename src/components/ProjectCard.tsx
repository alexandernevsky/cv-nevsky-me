import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { useLang } from '@/context/LangContext'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLang()
  const title = lang === 'en' ? project.titleEn : project.titleRu
  const excerpt = lang === 'en' ? project.excerptEn : project.excerptRu
  const slug = lang === 'en' ? project.slugEn : project.slugRu
  const year = project.date ? project.date.slice(0, 4) : ''

  return (
    <Link
      to={`/work/${slug}`}
      className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-4 hover:border-muted-foreground transition-all duration-200"
    >
      {/* Feature image */}
      {project.featureImage && (
        <div className="aspect-[16/9] overflow-hidden rounded-md bg-muted">
          <img
            src={project.featureImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center justify-between">
        {year && (
          <span className="font-mono text-xs text-muted-foreground">{year}</span>
        )}
        <div className="flex flex-wrap gap-1 ml-auto">
          {project.tags.slice(0, 2).map(tag => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium leading-snug text-foreground group-hover:text-foreground transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      )}
    </Link>
  )
}
