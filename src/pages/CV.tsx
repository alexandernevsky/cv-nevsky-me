import ReactMarkdown from 'react-markdown'
import { useLang } from '@/context/LangContext'
import { cvEn, cvRu } from '@/data/projects'

export function CV() {
  const { lang, t } = useLang()
  const page = lang === 'en' ? cvEn : cvRu

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-start justify-between mb-12">
        <div>
          <p className="mb-3 font-mono text-xs uppercase text-muted-foreground font-nevsky-mono">
            CV
          </p>
          <h1 className="text-nevsky-l font-nevsky-heading">{page.title}</h1>
        </div>
        <a
          href="mailto:hi@nevsky.me"
          className="mt-2 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-nevsky-strong text-foreground hover:bg-muted transition-colors"
        >
          {t('Get in touch', 'Написать мне')}
        </a>
      </div>
      <div className="prose">
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
    </main>
  )
}
