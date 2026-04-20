export type Theme = 'dark' | 'light'

const THEME_STORAGE_KEY = 'cv-chat-theme'

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const raw = window.localStorage.getItem(THEME_STORAGE_KEY)
  return raw === 'light' ? 'light' : 'dark'
}

export function setStoredTheme(theme: Theme) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}
