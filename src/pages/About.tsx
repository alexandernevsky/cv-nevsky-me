import ReactMarkdown from 'react-markdown'
import { useLang } from '@/context/LangContext'
import { aboutEn, aboutRu } from '@/data/projects'

export function About() {
  const { lang } = useLang()
  const page = lang === 'en' ? aboutEn : aboutRu

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs text-muted-foreground mb-3 tracking-widest uppercase">
        {lang === 'en' ? 'About' : 'Обо мне'}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight mb-12">{page.title}</h1>
      <div className="prose">
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
    </main>
  )
}
