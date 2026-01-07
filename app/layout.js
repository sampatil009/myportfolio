import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Metadata for the website
export const metadata = {
  title: 'Sammed Patil - Portfolio',
  description: 'Computer Science Engineering undergraduate with expertise in full-stack development, AI/ML, and cloud technologies',
}

/**
 * Root Layout Component
 * This is the main layout that wraps all pages in the app
 * It includes the Navbar and Footer components that appear on every page
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navigation bar - appears on all pages */}
        <Navbar />
        
        {/* Main content area - changes based on the current page */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer - appears on all pages */}
        <Footer />
      </body>
    </html>
  )
}
