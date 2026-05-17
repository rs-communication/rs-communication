import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "../context/LanguageContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsApp from "../components/FloatingWhatsApp"
import FloatingInstagram from "../components/FloatingInstagram"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RS Communication | Digital & Government Services",
  description: "RS Communication - Your trusted local service center for Digital & Government services, Online Applications, Printing, Photo & Gift works.",
  keywords: "RS Communication, Government Services, Aadhaar, PAN Card, Voter ID, Printing, Photo Frames, Gifts, Digital Services",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingInstagram />
            <FloatingWhatsApp />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
