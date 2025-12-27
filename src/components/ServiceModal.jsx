export default function ServiceModal({ service, onClose }) {
  if (!service) return null

  const phoneNumber = "917548836764" // country code + number (NO +, NO spaces)

  const message = encodeURIComponent(
    `Hello, I would like to know whether the service "${service}" is available today.`
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl animate-fadeIn">

        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          {service}
        </h3>

        <p className="text-slate-600 mb-6">
          Would you like to check if this service is available?
        </p>

        <div className="flex gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gradient-to-r from-blue-600 to-green-500
                       text-white py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Check on WhatsApp
          </a>

          <button
            onClick={onClose}
            className="flex-1 border border-slate-300 rounded-full py-3
                       hover:border-slate-500 transition"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}
