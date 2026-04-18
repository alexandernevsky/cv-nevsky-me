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
      className="group flex flex-col gap-3 transition-opacity duration-200 hover:opacity-85"
    >
      {/* Feature image */}
      {project.featureImage && (
        <div className="overflow-hidden rounded-md bg-muted">
          <img
            src={project.featureImage}
            alt={title}
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center justify-between">
        {year && (
          <span className="font-mono text-xs text-muted-foreground font-nevsky-mono">{year}</span>
        )}
        <div className="flex flex-wrap gap-1 ml-auto">
          {project.tags.slice(0, 2).map(tag => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base leading-snug text-foreground transition-colors line-clamp-2 font-nevsky-heading">
        {title}
      </h3>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 font-nevsky-body">
          {excerpt}
        </p>
      )}
    </Link>
  )
}
