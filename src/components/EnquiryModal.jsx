import { useState } from "react"

export default function EnquiryModal({ product, onClose }) {
  if (!product) return null

  const phoneNumber = "917548836764"

  const [quantity, setQuantity] = useState(1)
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [pillowSize, setPillowSize] = useState("Medium")

  const getSizeText = () => {
    switch (product.type) {
      case "frame":
        return `Size: ${width} x ${height} inches`
      case "flex":
        return `Size: ${width} x ${height} feet`
      case "pillow":
        return `Size: ${pillowSize}`
      case "mug":
        return `Size: Not Applicable`
      default:
        return ""
    }
  }

  const deliveryText = product.delivery
    ? "Delivery charges applicable"
    : "Delivery not applicable (Pickup only)"

  const message = encodeURIComponent(
    `Hello, I would like to enquire about:\n\n` +
    `Product: ${product.name}\n` +
    `Product Code: ${product.code}\n` +
    `${getSizeText()}\n` +
    `Quantity: ${quantity}\n` +
    `Price: ${product.price}\n` +
    `Delivery: ${deliveryText}`
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">

        <h3 className="text-xl font-semibold mb-2">
          Enquire – {product.name}
        </h3>

        <p className="text-sm text-slate-600 mb-4">
          {product.price}
        </p>

        {product.delivery && (
          <p className="text-xs text-orange-600 mb-4">
            Delivery charges applicable
          </p>
        )}

        {/* Size Inputs */}
        {(product.type === "frame" || product.type === "flex") && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="number"
              placeholder={`Width (${product.type === "frame" ? "inches" : "feet"})`}
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="number"
              placeholder={`Height (${product.type === "frame" ? "inches" : "feet"})`}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border rounded-lg px-4 py-2"
            />
          </div>
        )}

        {product.type === "pillow" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Select Size
            </label>
            <select
              value={pillowSize}
              onChange={(e) => setPillowSize(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        )}

        {/* Quantity */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gradient-to-r from-blue-600 to-green-500
                       text-white py-3 rounded-full font-medium"
          >
            Send Enquiry
          </a>

          <button
            onClick={onClose}
            className="flex-1 border border-slate-300 rounded-full py-3"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}
