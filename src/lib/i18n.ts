export type Lang = 'en' | 'ru'

const LANG_STORAGE_KEY = 'cv-chat-lang'

export function getStoredLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const raw = window.localStorage.getItem(LANG_STORAGE_KEY)
  return raw === 'ru' ? 'ru' : 'en'
}

export function setStoredLang(lang: Lang) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(LANG_STORAGE_KEY, lang)
}
