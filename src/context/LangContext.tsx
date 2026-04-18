import { createContext, useContext, useState } from 'react'

type Lang = 'en' | 'ru'

interface LangContextValue {
  lang: Lang
  toggle: () => void
  t: (en: string, ru: string) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    return saved ?? 'en'
  })

  const toggle = () => {
    const next = lang === 'en' ? 'ru' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const t = (en: string, ru: string) => (lang === 'en' ? en : ru)

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be inside LangProvider')
  return ctx
}
