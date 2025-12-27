export default function ProductCard({ item, onEnquire }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-t-2xl bg-slate-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Name */}
        <h3 className="font-semibold text-slate-900">
          {item.name}
        </h3>

        {/* Code */}
        <p className="text-xs text-slate-500 mb-1">
          Code: {item.code}
        </p>

        {/* Price */}
        <p className="text-sm font-medium text-slate-700 mb-2">
          {item.price}
        </p>

        {/* Delivery Badge */}
        <span
          className={`inline-block text-xs px-3 py-1 rounded-full mb-4
            ${item.delivery
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
            }`}
        >
          {item.delivery ? "Delivery Available" : "Pickup Only"}
        </span>

        {/* CTA */}
        <button
          onClick={() => onEnquire(item)}
          className="w-full mt-2 bg-gradient-to-r from-blue-600 to-green-500
                     text-white py-2.5 rounded-full font-medium
                     hover:opacity-90 transition"
        >
          Enquire on WhatsApp
        </button>

      </div>
    </div>
  )
}
