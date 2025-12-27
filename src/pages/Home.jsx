export default function Home() {
  return (
    <section className="bg-slate-50 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Trusted Digital & <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Government Services
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            அரசு சேவைகள் • Online Applications • Printing & Photo Works
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/services" className="btn-primary">
              Explore Services
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-full border border-slate-300
                         text-slate-700 hover:border-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Visual Card */}
        <div className="card p-8">
          <ul className="space-y-4 text-slate-700">
            <li>✔ Aadhaar / PAN / Voter ID</li>
            <li>✔ Certificates & Online Forms</li>
            <li>✔ Printing & PVC Cards</li>
            <li>✔ Photo Frames & Gift Prints</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
