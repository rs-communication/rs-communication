'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
  ]

  const navItemClass = (path) => {
    const isActive = pathname === path
    return `relative px-1 py-2 text-sm transition-colors
     ${
       isActive
         ? "text-blue-600 font-semibold"
         : "text-slate-700 hover:text-blue-600"
     }`
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-rs-web.png`}
            alt="RS Communication"
            width={180}
            height={44}
            className="h-10 sm:h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link key={item.path} href={item.path} className={navItemClass(item.path)}>
              {item.name}
              {pathname === item.path && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600 rounded-full"
                />
              )}
            </Link>
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
            <span className={`block w-5 h-[2px] bg-slate-700 transition-all ${open ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
            <span className={`block w-5 h-[2px] bg-slate-700 transition-all ${open ? 'opacity-0' : 'mb-1'}`}></span>
            <span className={`block w-5 h-[2px] bg-slate-700 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors ${pathname === item.path ? 'text-blue-600' : 'text-slate-700'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
