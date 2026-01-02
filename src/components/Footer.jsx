import { Link } from "react-router-dom"

export default function Footer() {
  const base = import.meta.env.BASE_URL

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand (PNG Logo Only) */}
          <div>
            <img
              src={`${base}images/logo-rs-web.png`}
              alt="RS Communication"
              className="h-16 sm:h-20 w-auto mb-4"
            />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Digital & Government service center providing reliable online,
              printing, and photo solutions under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📞 7548836764 / 9894395041</li>
              <li>📍 RS Communication, Tamil Nadu</li>
              <li>⏰ Mon – Sat: 9:00 AM – 8:00 PM</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">

          <p>
            © {new Date().getFullYear()} RS Communication. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="https://wa.me/917548836764"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/r_s_commu_nication_1609/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="https://www.google.com/maps/search/RS+Communication"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Google Maps
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}
