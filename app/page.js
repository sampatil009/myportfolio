import Link from 'next/link'

/**
 * Home Page Component
 * This is the landing page of the portfolio website
 * Displays name, introduction, and a button to view projects
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center max-w-2xl">
        {/* Name */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          SAMMED PATIL
        </h1>
        
        {/* Short Introduction */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Computer Science Engineering undergraduate passionate about full-stack development, 
          AI/ML, and cloud technologies. I build scalable, AI-driven applications using 
          modern frameworks and tools to deliver impactful software solutions.
        </p>
        
        {/* Button to view projects */}
        <Link 
          href="/projects"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg 
                   text-lg font-semibold hover:bg-indigo-700 transition-colors 
                   duration-300 shadow-lg hover:shadow-xl"
        >
          View My Projects
        </Link>
      </div>
    </div>
  )
}
