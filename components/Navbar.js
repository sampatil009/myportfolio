import Link from 'next/link'

/**
 * Navbar Component
 * Navigation bar that appears on all pages
 * Provides links to navigate between different sections of the portfolio
 */
export default function Navbar() {
  // Array of navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <Link href="/" className="text-xl font-bold text-indigo-600 hover:text-indigo-800">
            Portfolio
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md 
                         text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
