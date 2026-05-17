'use client'

import { useLanguage } from "../context/LanguageContext"
import { motion, AnimatePresence } from "framer-motion"

export default function ServiceModal({ service, onClose }) {
  const { lang, t } = useLanguage()
  
  if (!service) return null

  const phoneNumber = "917548836764"
  const serviceName = typeof service === 'string' ? service : (service[lang] || service.en)

  const message = encodeURIComponent(
    lang === 'en' 
      ? `Hello, I would like to know whether the service "${serviceName}" is available today.`
      : `வணக்கம், "${serviceName}" சேவை இன்று கிடைக்குமா என்று நான் தெரிந்துகொள்ள விரும்புகிறேன்.`
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl p-8 border border-slate-100"
        >
          {/* Header */}
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {serviceName}
          </h3>

          <p className="text-slate-600 text-base mb-8 leading-relaxed">
            {lang === 'en' 
              ? "Would you like to check if this service is available today via WhatsApp?"
              : "இந்தச் சேவை இன்று கிடைக்குமா என்று வாட்ஸ்அப் மூலம் சரிபார்க்க விரும்புகிறீர்களா?"}
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-blue-600 to-green-500
                         text-white py-4 rounded-full font-bold shadow-lg
                         hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              {t("contact.whatsapp")}
            </a>

            <button
              onClick={onClose}
              className="w-full border-2 border-slate-200 rounded-full py-4
                         text-slate-700 font-bold hover:bg-slate-50 transition-all"
            >
              {t("enquiry.cancel")}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
