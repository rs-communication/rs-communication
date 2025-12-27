import { Link, NavLink } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const { lang, toggleLang } = useLanguage()
  const base = import.meta.env.BASE_URL

  const navItemClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-700 hover:text-blue-600"
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${base}images/logo.png`}
            alt="RS Communication Logo"
            className="h-10 w-auto"
          />
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r
                           from-blue-600 to-green-500
                           bg-clip-text text-transparent">
            RS Communication
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-8">

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" className={navItemClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navItemClass}>
              Services
            </NavLink>
            <NavLink to="/gallery" className={navItemClass}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={navItemClass}>
              Contact
            </NavLink>
          </nav>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="border border-slate-300 rounded-full
                       px-4 py-1 text-xs font-medium
                       text-slate-700 hover:border-blue-600
                       transition"
          >
            {lang === "en" ? "தமிழ்" : "English"}
          </button>
        </div>

      </div>
    </header>
  )
}
