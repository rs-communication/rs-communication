'use client'

import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"

export default function EnquiryModal({ product, onClose }) {
  const { lang, t } = useLanguage()
  const [quantity, setQuantity] = useState(1)
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [pillowSize, setPillowSize] = useState("Medium")

  if (!product) return null

  const phoneNumber = "917548836764"
  const productName = product.name[lang] || product.name.en

  const getSizeText = () => {
    switch (product.type) {
      case "frame":
        return `${t("enquiry.size")}: ${width} x ${height} ${t("enquiry.inches")}`
      case "flex":
        return `${t("enquiry.size")}: ${width} x ${height} ${t("enquiry.feet")}`
      case "pillow":
        return `${t("enquiry.size")}: ${pillowSize}`
      case "mug":
        return `${t("enquiry.size")}: N/A`
      default:
        return ""
    }
  }

  const deliveryText = product.delivery
    ? t("enquiry.deliveryCharge")
    : t("enquiry.pickupOnly")

  const message = encodeURIComponent(
    `Hello, I would like to enquire about:\n\n` +
    `Product: ${productName}\n` +
    `Code: ${product.code}\n` +
    `${getSizeText()}\n` +
    `Quantity: ${quantity}\n` +
    `Price: ${product.price[lang] || product.price.en}\n` +
    `Delivery: ${deliveryText}`
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 overflow-hidden relative border border-slate-100"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X size={20} className="text-slate-400" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 pr-8">
              {t("enquiry.title")} – {productName}
            </h3>
            <p className="text-blue-600 font-bold mt-2">
              {product.price[lang] || product.price.en}
            </p>

            {product.delivery && (
              <p className="text-xs font-bold text-orange-600 mt-2 uppercase tracking-wider">
                {t("enquiry.deliveryCharge")}
              </p>
            )}
          </div>

          <div className="space-y-6">
            {/* Size Inputs */}
            {(product.type === "frame" || product.type === "flex") && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                    {t("enquiry.width")} ({product.type === "frame" ? t("enquiry.inches") : t("enquiry.feet")})
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                    {t("enquiry.height")} ({product.type === "frame" ? t("enquiry.inches") : t("enquiry.feet")})
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            )}

            {product.type === "pillow" && (
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                  {t("enquiry.selectSize")}
                </label>
                <select
                  value={pillowSize}
                  onChange={(e) => setPillowSize(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none"
                >
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                {t("enquiry.quantity")}
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[2] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-500
                         text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-100
                         hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              <Send size={18} />
              {t("enquiry.send")}
            </a>

            <button
              onClick={onClose}
              className="flex-1 border-2 border-slate-100 rounded-2xl py-4
                         text-slate-500 font-bold hover:bg-slate-50 transition-all"
            >
              {t("enquiry.cancel")}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
