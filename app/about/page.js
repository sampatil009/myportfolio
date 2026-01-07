/**
 * About Page Component
 * Displays a brief description and education details
 */
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About Me
        </h1>
        
        {/* Brief Description Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Summary
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Computer Science Engineering undergraduate with a strong academic record and 
            hands-on experience in full-stack development, AI/ML, and cloud technologies. 
            Proficient in Python, Java, with practical exposure to building scalable, 
            AI-driven applications using modern frameworks and tools.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Demonstrated ability to design efficient systems, solve complex problems, and 
            collaborate effectively in team environments. Passionate about leveraging 
            artificial intelligence, cloud computing, and system design to deliver impactful 
            software solutions.
          </p>
        </section>
        
        {/* Education Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Education
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Bachelor of Technology (B.Tech) in Computer Science Engineering
              </h3>
              <p className="text-gray-600 mt-1">
                Walchand Institute of Technology, Solapur
              </p>
              <p className="text-gray-500 text-sm mt-1">
                2022 – 2026 | CGPA: 9.04
              </p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-gray-600 mt-1">
                The New Highschool & Jr. College, Ichalkaranji
              </p>
              <p className="text-gray-500 text-sm mt-1">
                2020 – 2022 | Percentage: 77.50%
              </p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-gray-600 mt-1">
                M. G. Shaha Vidyamandir & Jr. College, Bahubali
              </p>
              <p className="text-gray-500 text-sm mt-1">
                2019 – 2020 | Percentage: 93.00%
              </p>
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Certifications
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Google Cloud Career Launchpad - Cloud Engineer Track
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Completed hands-on courses and labs covering Google Cloud infrastructure, 
                compute, networking, storage, and cloud operations.
              </p>
              <p className="text-gray-500 text-sm mt-1">2024</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-800">
                AWS Academy Cloud Foundations
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Gained foundational knowledge of cloud computing concepts, AWS core services, 
                security, and pricing models.
              </p>
              <p className="text-gray-500 text-sm mt-1">AWS Academy</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Python for Data Science
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Acquired practical skills in data analysis, data manipulation, and visualization 
                using Python libraries.
              </p>
              <p className="text-gray-500 text-sm mt-1">Infosys Springboard</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Agile Scrum Certification
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Learned Agile principles, Scrum roles, and iterative software development practices.
              </p>
              <p className="text-gray-500 text-sm mt-1">Infosys Springboard</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
