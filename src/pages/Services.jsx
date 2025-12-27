import { useState } from "react"
import { services } from "../data/services"
import ServiceModal from "../components/ServiceModal"

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="card p-8">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>

              <ul className="space-y-2 text-sm text-slate-600">
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    className="cursor-pointer hover:text-blue-600 transition"
                    onClick={() => setSelectedService(item)}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popup */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />

      </div>
    </section>
  )
}
