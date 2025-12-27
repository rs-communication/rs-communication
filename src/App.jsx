import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import FloatingInstagram from "./components/FloatingInstagram"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <BrowserRouter basename="/rs-communication">
      {/* App Shell */}
      <div className="flex flex-col min-h-screen bg-slate-50">

        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Social Buttons (global) */}
        <FloatingInstagram />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  )
}
