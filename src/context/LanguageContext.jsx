'use client'

import { createContext, useContext, useState, useEffect } from "react"
import { translations } from "../data/translations"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en")

  // Load language preference from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang) {
      setLang(savedLang)
    }
  }, [])

  const toggleLang = () => {
    const newLang = lang === "en" ? "ta" : "en"
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  const t = (keyPath) => {
    const keys = keyPath.split(".")
    let value = translations[lang]
    for (const key of keys) {
      if (value && value[key]) {
        value = value[key]
      } else {
        return keyPath // Fallback to key if not found
      }
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
