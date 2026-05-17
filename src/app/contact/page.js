'use client'

import { useLanguage } from "../../context/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, MapPin, Clock, Star, MessageCircle, Navigation } from "lucide-react"

export default function ContactPage() {
  const { lang, t } = useLanguage()

  return (
    <section className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900"
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-6 text-lg"
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left: Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100"
          >
            {/* BRAND LOGO */}
            <div className="mb-10">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-rs-web.png`}
                alt="RS Communication"
                width={160}
                height={40}
                className="h-16 w-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="font-bold">7548836764 / 9894395041</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                  <p className="font-bold">Digital & Government Service Center, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{t("contact.workingHoursTitle")}</p>
                  <p className="font-bold">{t("contact.workingHours")}</p>
                  <p className="text-sm text-slate-500">{t("contact.sunday")}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=RS%20Communication"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-100
                           py-4 rounded-2xl font-bold text-slate-700
                           hover:bg-slate-50 hover:border-slate-200 transition-all"
              >
                <Navigation size={18} />
                {t("contact.getDirections")}
              </a>

              <a
                href="https://wa.me/917548836764"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-500
                           text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-100
                           hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                <MessageCircle size={18} />
                {t("contact.whatsapp")}
              </a>
            </div>
          </motion.div>

          {/* Right: Map & Reviews */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >

            {/* Map */}
            <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-xl h-[350px]">
              <iframe
                title="RS Communication Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.669232281873!2d77.17954077001282!3d8.368327561921472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ad00516c299b%3A0xa125ea919bc9b187!2sRS%20Communication!5e0!3m2!1sen!2sin!4v1766763489749!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Star size={80} fill="currentColor" className="text-yellow-400" />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                {t("contact.reviewsTitle")}
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("contact.reviewsSubtitle")}
              </p>
              <a
                href="https://share.google/RVNwL8quUdH0WgEIM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-50 text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all"
              >
                {t("contact.viewReviews")}
                <Star size={16} />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
