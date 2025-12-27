export default function FloatingInstagram() {
  return (
    <a
      href="https://www.instagram.com/r_s_commu_nication_1609/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50
                 w-12 h-12 rounded-full
                 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400
                 shadow-lg flex items-center justify-center
                 hover:scale-110 transition"
      aria-label="Instagram"
    >
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
      </svg>
    </a>
  )
}
