'use client'

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "../context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-rs-web.png`}
              alt="RS Communication"
              width={160}
              height={40}
              className="h-16 sm:h-20 w-auto mb-4 brightness-0 invert"
            />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    href={link.path}
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
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📞 7548836764 / 9894395041</li>
              <li>📍 RS Communication, Tamil Nadu</li>
              <li>⏰ {t("footer.workingHours")}</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">

          <p>
            © {new Date().getFullYear()} RS Communication. {t("footer.rights")}
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
