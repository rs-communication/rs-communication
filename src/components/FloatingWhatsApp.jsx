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
      aria-label="WhatsApp"
      className="
        fixed z-50
        right-4 sm:right-6
        bottom-[calc(env(safe-area-inset-bottom)+1rem)]
        w-12 h-12 sm:w-14 sm:h-14
        rounded-full
        bg-green-500
        shadow-lg
        flex items-center justify-center
        active:scale-95
        transition-transform
      "
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-6 h-6 sm:w-7 sm:h-7"
        aria-hidden="true"
      >
        <path d="M19.11 17.93c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.14.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
      </svg>
    </a>
  )
}
