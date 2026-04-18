import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { useLang } from '@/context/LangContext'

export function Home() {
  const { t } = useLang()

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <p className="font-mono text-xs text-muted-foreground mb-3 tracking-widest uppercase">
          {t('Senior Product Designer · Dubai, UAE', 'Старший продуктовый дизайнер · Дубай, ОАЭ')}
        </p>
        <h1 className="text-5xl font-semibold tracking-tight mb-5 leading-tight">
          Alexander Nevsky
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {t(
            '15+ years designing complex digital systems — fintech, proptech, SaaS and AI-enabled products. From early discovery to production.',
            '15+ лет проектирую сложные цифровые системы — fintech, proptech, SaaS и AI-продукты. От раннего discovery до продакшна.'
          )}
        </p>
      </section>

      {/* Projects grid */}
      <section>
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8 font-mono">
          {t('Selected Work', 'Избранные работы')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
