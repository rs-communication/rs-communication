import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <section className="bg-slate-50 py-16 md:py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT : CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 rounded-full
                           bg-blue-100 text-blue-700 text-sm font-medium">
            Trusted Local Service Center
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Digital & <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Government Services
            </span>
          </h1>

          {/* Sub text */}
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            அரசு சேவைகள் • Online Applications • Printing • Photo & Gift Works
          </p>

          {/* Primary CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-green-500
                         text-white px-8 py-3 rounded-full font-medium
                         shadow hover:shadow-lg hover:opacity-90 transition"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-full border border-slate-300
                         text-slate-700 font-medium
                         hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* RIGHT : FEATURE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Services We Provide
          </h3>

          <ul className="space-y-4 text-slate-700 text-sm">
            {[
              "Aadhaar / PAN / Voter ID Services",
              "Certificates & Online Applications",
              "Printing, Flex & PVC Cards",
              "Photo Frames & Customized Gifts",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="mt-0.5 text-green-600">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* FIXED GALLERY CTA */}
          <div className="mt-8">
            <Link
              to="/gallery"
              className="
                inline-flex items-center gap-2
                px-6 py-2.5
                rounded-full
                border border-blue-200
                bg-blue-50
                text-blue-600 font-medium text-sm
                hover:bg-blue-100 hover:border-blue-300
                transition
              "
            >
              View Gallery
              <span className="text-base">→</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
