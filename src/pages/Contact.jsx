import { useLanguage } from "../context/LanguageContext"

export default function Contact() {
  const { lang } = useLanguage()

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            {lang === "en" ? "Contact Us" : "தொடர்பு கொள்ள"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <h3 className="text-lg font-semibold mb-4">
              RS Communication
            </h3>

            <p className="mb-2">📞 7548836764 / 9894395041</p>

            <p className="mb-4">📍 Digital & Government Service Center</p>

            {/* Working Hours */}
            <div className="mb-4">
              <p className="font-medium">⏰ Working Hours</p>
              <p className="text-sm text-slate-600">
                Monday – Saturday: 9:00 AM – 8:00 PM <br />
                Sunday: Closed
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=RS%20Communication"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border py-3 rounded-full"
              >
                📍 Get Directions
              </a>

              <a
                href="https://wa.me/917548836764"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gradient-to-r from-blue-600 to-green-500
                           text-white py-3 rounded-full"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border">
              <iframe
                title="RS Communication Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.669232281873!2d77.17954077001282!3d8.368327561921472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ad00516c299b%3A0xa125ea919bc9b187!2sRS%20Communication!5e0!3m2!1sen!2sin!4v1766763489749!5m2!1sen!2sin"
                className="w-full h-[250px] border-0"
                loading="lazy"
              ></iframe>
            </div>

            {/* Google Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2">⭐ Google Reviews</h4>
              <p className="text-sm text-slate-600">
                Visit Google Maps to read our customer reviews.
              </p>
              <a
                href="https://www.google.com/search?q=RS+Communication"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                View Reviews
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
