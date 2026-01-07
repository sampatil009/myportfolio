/**
 * Footer Component
 * Footer that appears on all pages
 * Displays copyright information and simple footer content
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
