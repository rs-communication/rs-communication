'use client'

import { useState } from "react"
import { galleryItems } from "../../data/gallery"
import ProductCard from "../../components/ProductCard"
import EnquiryModal from "../../components/EnquiryModal"
import { useLanguage } from "../../context/LanguageContext"
import { motion } from "framer-motion"

export default function GalleryPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { t } = useLanguage()

  return (
    <section className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900"
          >
            {t("gallery.title")}
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
            {t("gallery.subtitle")}
          </motion.p>
        </div>

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
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {galleryItems.map((item, i) => (
            <ProductCard
              key={i}
              item={item}
              onEnquire={setSelectedProduct}
            />
          ))}
        </motion.div>

        {/* Popup */}
        <EnquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

      </div>
    </section>
  )
}
