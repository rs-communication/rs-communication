'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function Home() {
  const { t } = useLanguage()

  return (
    <section className="bg-slate-50 py-16 md:py-24 flex items-center min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT : CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1 rounded-full
                           bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
            {t("hero.badge")}
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            {t("hero.heading1")} <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {t("hero.heading2")}
            </span>
          </h1>

          {/* Sub text */}
          <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
            {t("hero.subtext")}
          </p>

          {/* Primary CTAs */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-600 to-green-500
                         text-white px-10 py-4 rounded-full font-bold
                         shadow-xl shadow-blue-200 hover:shadow-2xl hover:scale-105 transition-all"
            >
              {t("hero.ctaExplore")}
            </Link>

            <Link
              href="/contact"
              className="px-10 py-4 rounded-full border-2 border-slate-200
                         text-slate-700 font-bold bg-white
                         hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              {t("hero.ctaContact")}
            </Link>
          </div>
        </motion.div>

        {/* RIGHT : FEATURE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative background element */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-[2rem] blur-2xl opacity-50 -z-10" />
          
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              {t("hero.servicesTitle")}
            </h3>

            <ul className="space-y-6">
              {t("hero.services").map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* FIXED GALLERY CTA */}
            <div className="mt-12">
              <Link
                href="/gallery"
                className="
                  group
                  inline-flex items-center gap-3
                  px-8 py-3
                  rounded-xl
                  bg-slate-900
                  text-white font-semibold text-sm
                  hover:bg-slate-800
                  transition-all duration-300
                "
              >
                {t("hero.viewGallery")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
