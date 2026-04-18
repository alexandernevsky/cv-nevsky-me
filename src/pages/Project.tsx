import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { useLang } from '@/context/LangContext'
import { projects } from '@/data/projects'

export function Project() {
  const { slug } = useParams<{ slug: string }>()
  const { lang, t } = useLang()

  const project = projects.find(
    p => p.slugEn === slug || p.slugRu === slug
  )

  if (!project) return <Navigate to="/" replace />

  const title = lang === 'en' ? project.titleEn : project.titleRu
  const content = lang === 'en' ? project.contentEn : project.contentRu
  const year = project.date ? project.date.slice(0, 4) : ''

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* Back */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-10 group"
      >
        <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
        {t('All work', 'Все работы')}
      </Link>

      {/* Hero image */}
      {project.featureImage && (
        <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted mb-10">
          <img
            src={project.featureImage}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          {year && (
            <span className="font-mono text-xs text-muted-foreground">{year}</span>
          )}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight leading-tight">{title}</h1>
      </header>

      {/* Content */}
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </main>
  )
}
