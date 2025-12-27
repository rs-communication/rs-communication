export default function ProductCard({ item, onEnquire }) {
  const isDelivery = Boolean(item.delivery)

  return (
    <div
      className="group bg-white rounded-2xl border border-slate-100
                 shadow-sm transition-all duration-300
                 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-slate-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />

        {/* Status Badge (overlay) */}
        <span
          className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-medium
            ${isDelivery
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
            }`}
        >
          {isDelivery ? "Delivery Available" : "Pickup Only"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        <h3 className="font-semibold text-slate-900 leading-snug">
          {item.name}
        </h3>

        <p className="text-xs text-slate-500 mt-1">
          Code: {item.code}
        </p>

        <p className="text-sm font-medium text-slate-700 mt-2">
          {item.price}
        </p>

        {/* CTA */}
        <button
          onClick={() => onEnquire(item)}
          className="mt-5 w-full bg-gradient-to-r from-blue-600 to-green-500
                     text-white py-2.5 rounded-full font-medium
                     hover:opacity-90 transition"
        >
          Enquire on WhatsApp
        </button>
      </div>
    </div>
  )
}
