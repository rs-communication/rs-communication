import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { lang, toggleLang } = useLanguage()
  const base = import.meta.env.BASE_URL
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ]

  const navItemClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm transition-colors
     ${isActive ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"}`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${base}images/logo.png`}
            alt="RS Communication"
            className="h-9 w-auto"
          />
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            RS Communication
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <NavLink key={item.path} to={item.path} className={navItemClass}>
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="border border-slate-300 rounded-full px-4 py-1 text-xs font-medium
                       text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
          >
            {lang === "en" ? "தமிழ்" : "English"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
          >
            <span className="block w-5 h-[2px] bg-slate-700 mb-1"></span>
            <span className="block w-5 h-[2px] bg-slate-700 mb-1"></span>
            <span className="block w-5 h-[2px] bg-slate-700"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
