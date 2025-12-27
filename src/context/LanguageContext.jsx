import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en")

  const toggleLang = () => {
    setLang(lang === "en" ? "ta" : "en")
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
