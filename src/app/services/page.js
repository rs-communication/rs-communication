'use client'

import { useState } from "react"
import { services } from "../../data/services"
import ServiceModal from "../../components/ServiceModal"
import { useLanguage } from "../../context/LanguageContext"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)
  const { lang, t } = useLanguage()

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900"
          >
            {t("services.title")}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mt-6 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-600 mt-6 text-lg"
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
              }}
              className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8
                         hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center justify-between">
                {service.title[lang] || service.title.en}
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </h3>

              <ul className="space-y-4">
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    onClick={() => setSelectedService(item)}
                    className="flex items-center gap-3 cursor-pointer group/item transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/item:scale-150 group-hover/item:bg-blue-600 transition-all"></span>
                    <span className="text-slate-700 text-sm font-medium group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all">
                      {item[lang] || item.en}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Modal */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />

      </div>
    </section>
  )
}
