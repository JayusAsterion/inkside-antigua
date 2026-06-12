import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Language } from '../i18n/translations'
import { LANGUAGE_STORAGE_KEY, LanguageContext } from './languageContext'

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  return savedLanguage === 'en' || savedLanguage === 'es' ? savedLanguage : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
