import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { useLang } from '@/context/LangContext'

export function Home() {
  const { t } = useLang()

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <p className="mb-3 font-mono text-xs uppercase text-muted-foreground font-nevsky-mono">
          {t('Senior Product Designer · Dubai, UAE', 'Старший продуктовый дизайнер · Дубай, ОАЭ')}
        </p>
        <h1 className="mb-5 text-nevsky-xl font-nevsky-heading-strong">
          Alexander Nevsky
        </h1>
        <p className="max-w-2xl text-nevsky-xs font-nevsky-body text-muted-foreground">
          {t(
            '15+ years designing complex digital systems — fintech, proptech, SaaS and AI-enabled products. From early discovery to production.',
            '15+ лет проектирую сложные цифровые системы — fintech, proptech, SaaS и AI-продукты. От раннего discovery до продакшна.'
          )}
        </p>
      </section>

      {/* Projects grid */}
      <section>
        <h2 className="mb-8 font-mono text-xs uppercase text-muted-foreground font-nevsky-mono">
          {t('Selected Work', 'Избранные работы')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...projects].sort((a, b) => b.date.localeCompare(a.date)).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
