import { useLanguage } from "../context/LanguageContext"

export default function Contact() {
  const { lang } = useLanguage()

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {lang === "en" ? "Contact Us" : "தொடர்பு கொள்ள"}
          </h2>
          <p className="text-slate-600 mt-3">
            {lang === "en"
              ? "We are happy to help you with any service enquiry"
              : "எங்கள் சேவைகள் தொடர்பான எந்தவொரு உதவிக்கும் எங்களை தொடர்பு கொள்ளுங்கள்"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left: Contact Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">

            {/* BRAND LOGO */}
            <img
              src="images/logo-rs-web.png"
              alt="RS Communication"
              className="h-14 sm:h-16 w-auto mb-4"
            />

            <div className="space-y-3 text-slate-700 text-sm">
              <p>📞 7548836764 / 9894395041</p>
              <p>📍 Digital & Government Service Center</p>
            </div>

            {/* Working Hours */}
            <div className="mt-6">
              <p className="font-medium text-slate-900 mb-1">
                ⏰ Working Hours
              </p>
              <p className="text-sm text-slate-600">
                Monday – Saturday: 9:00 AM – 8:00 PM <br />
                Sunday: Closed
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=RS%20Communication"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-slate-300
                           py-3 rounded-full font-medium
                           hover:border-slate-400 transition"
              >
                📍 Get Directions
              </a>

              <a
                href="https://wa.me/917548836764"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gradient-to-r from-blue-600 to-green-500
                           text-white py-3 rounded-full font-medium
                           hover:opacity-90 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Map & Reviews */}
          <div className="space-y-6">

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <iframe
                title="RS Communication Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.669232281873!2d77.17954077001282!3d8.368327561921472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ad00516c299b%3A0xa125ea919bc9b187!2sRS%20Communication!5e0!3m2!1sen!2sin!4v1766763489749!5m2!1sen!2sin"
                className="w-full h-[260px] border-0"
                loading="lazy"
              />
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-2">
                ⭐ Google Reviews
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Read what our customers say about our services.
              </p>
              <a
                href="https://share.google/RVNwL8quUdH0WgEIM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                View Reviews →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
