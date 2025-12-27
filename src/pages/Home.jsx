import { Link } from "react-router-dom"

export default function Home() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="bg-slate-50 min-h-[92vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT : CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full
                          bg-blue-100 text-blue-700 text-sm font-medium">
            Trusted Local Service Center
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Digital & <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-500
                             bg-clip-text text-transparent">
              Government Services
            </span>
          </h1>

          {/* Sub text */}
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            அரசு சேவைகள் • Online Applications • Printing • Photo & Gift Works
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-green-500
                         text-white px-8 py-3 rounded-full font-medium
                         hover:opacity-90 transition"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-full border border-slate-300
                         text-slate-700 font-medium
                         hover:border-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT : FEATURE CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">

          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Services We Provide
          </h3>

          <ul className="space-y-4 text-slate-700 text-sm">
            <li className="flex gap-3">
              <span className="text-green-600">✔</span>
              Aadhaar / PAN / Voter ID Services
            </li>
            <li className="flex gap-3">
              <span className="text-green-600">✔</span>
              Certificates & Online Applications
            </li>
            <li className="flex gap-3">
              <span className="text-green-600">✔</span>
              Printing, Flex & PVC Cards
            </li>
            <li className="flex gap-3">
              <span className="text-green-600">✔</span>
              Photo Frames & Customized Gifts
            </li>
          </ul>

          {/* Secondary CTA */}
          <div className="mt-6">
            <Link
              to="/gallery"
              className="text-blue-600 font-medium text-sm
                         hover:underline"
            >
              View Gallery →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
