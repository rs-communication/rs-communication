import { useState } from "react"
import { services } from "../data/services"
import ServiceModal from "../components/ServiceModal"
import { motion } from "framer-motion"

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="text-slate-600 mt-3">
            Government services, online applications, printing and more — all under one roof
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8
                         hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-5">
                {service.title}
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    onClick={() => setSelectedService(item)}
                    className="flex items-start gap-2 cursor-pointer
                               hover:text-blue-600 transition"
                  >
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
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
