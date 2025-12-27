import { useState } from "react"
import { galleryItems } from "../data/gallery"
import ProductCard from "../components/ProductCard"
import EnquiryModal from "../components/EnquiryModal"

export default function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Photo & Print Shop
          </h2>
          <p className="text-slate-600 mt-2">
            Custom prints • Frames • Gifts
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, i) => (
            <ProductCard
              key={i}
              item={item}
              onEnquire={setSelectedProduct}
            />
          ))}
        </div>

        {/* Popup */}
        <EnquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

      </div>
    </section>
  )
}
