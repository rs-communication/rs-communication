export default function Footer() {
  const base = import.meta.env.BASE_URL

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${base}images/logo.png`}
                alt="RS Communication Logo"
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold text-white">
                RS Communication
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Digital & Government service center providing reliable online,
              printing, and photo solutions under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`${base}`} className="hover:text-white">Home</a></li>
              <li><a href={`${base}services`} className="hover:text-white">Services</a></li>
              <li><a href={`${base}gallery`} className="hover:text-white">Gallery</a></li>
              <li><a href={`${base}contact`} className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 7548836764 / 9894395041</li>
              <li>📍 RS Communication, Tamil Nadu</li>
              <li>⏰ Mon–Sat: 9:00 AM – 8:00 PM</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} RS Communication. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://wa.me/917548836764"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/r_s_commu_nication_1609/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.google.com/maps/search/RS+Communication"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Google Maps
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
