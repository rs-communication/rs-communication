export default function FloatingWhatsApp() {
  const phone = "917548836764"
  const message = encodeURIComponent(
    "Hello, I would like to enquire about your services."
  )

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500
                 w-14 h-14 rounded-full shadow-lg
                 flex items-center justify-center
                 hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
        <path d="M19.11 17.93c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.14.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
      </svg>
    </a>
  )
}
