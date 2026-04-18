import ReactMarkdown from 'react-markdown'
import { useLang } from '@/context/LangContext'
import { aboutEn, aboutRu } from '@/data/projects'

export function About() {
  const { lang } = useLang()
  const page = lang === 'en' ? aboutEn : aboutRu

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-3 font-mono text-xs uppercase text-muted-foreground font-nevsky-mono">
        {lang === 'en' ? 'About' : 'Обо мне'}
      </p>
      <h1 className="mb-12 text-nevsky-l font-nevsky-heading">{page.title}</h1>
      <div className="prose">
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
    </main>
  )
}
