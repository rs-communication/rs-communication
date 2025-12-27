import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-md">

        <h1 className="text-7xl font-extrabold bg-gradient-to-r
                       from-blue-600 to-green-500
                       bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-slate-900 mt-4">
          Page not found
        </h2>

        <p className="text-slate-600 mt-3">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 rounded-full bg-gradient-to-r
                       from-blue-600 to-green-500
                       text-white font-medium
                       hover:opacity-90 transition"
          >
            Go Home
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full border border-slate-300
                       text-slate-700 font-medium
                       hover:border-blue-600 hover:text-blue-600 transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  )
}
