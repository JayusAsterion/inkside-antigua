import { createContext } from 'react'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)[Language]
}

export const LANGUAGE_STORAGE_KEY = 'noir-ink-language'

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
