import { createContext, useContext, useEffect, useState } from 'react'
import { getContent, portfolioContent } from '../data/portfolioContent'

const LanguageContext = createContext(null)

export const translations = portfolioContent

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language')
    return saved === 'th' || saved === 'en' ? saved : 'th'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => setLanguage((current) => current === 'th' ? 'en' : 'th')
  const content = getContent(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, content, t: content }}>
      {children}
    </LanguageContext.Provider>
  )
}
