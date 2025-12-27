import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { lang, toggleLang } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          RS Communication
        </h1>

        <div className="flex items-center gap-6">
          <nav className="space-x-6 text-sm font-medium text-slate-700">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <button
            onClick={toggleLang}
            className="border rounded-full px-4 py-1 text-xs font-medium"
          >
            {lang === "en" ? "தமிழ்" : "English"}
          </button>
        </div>

      </div>
    </header>
  )
}
