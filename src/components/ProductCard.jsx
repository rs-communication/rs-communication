'use client'

import Image from "next/image"
import { useLanguage } from "../context/LanguageContext"
import { motion } from "framer-motion"
import { Truck, Store } from "lucide-react"

export default function ProductCard({ item, onEnquire }) {
  const { lang, t } = useLanguage()
  const isDelivery = Boolean(item.delivery)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[2rem] border border-slate-100
                 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.name[lang] || item.name.en}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`flex items-center gap-1.5 text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider
              ${isDelivery
                ? "bg-green-500/90 text-white backdrop-blur-md"
                : "bg-blue-500/90 text-white backdrop-blur-md"
              }`}
          >
            {isDelivery ? <Truck size={12} /> : <Store size={12} />}
            {isDelivery ? t("enquiry.deliveryCharge") : t("enquiry.pickupOnly")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 leading-tight min-h-[3.5rem]">
          {item.name[lang] || item.name.en}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {item.code}
          </span>
          <span className="text-blue-600 font-bold">
            {item.price[lang] || item.price.en}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => onEnquire(item)}
          className="mt-6 w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold
                     hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
        >
          {t("enquiry.send")}
        </button>
      </div>
    </motion.div>
  )
}
