import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-slate-200">404</h1>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <h2 className="text-3xl font-bold text-slate-900 mt-20">Page Not Found</h2>
        </div>
        <p className="text-slate-600 mt-8 mb-10 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
