/**
 * Projects Page Component
 * Displays portfolio projects with descriptions and technologies used
 */
export default function Projects() {
  // Array of projects
  const projects = [
    {
      title: 'AI-Powered E-Commerce Negotiator (FairDeal AI)',
      technologies: ['React', 'Flask', 'MongoDB', 'Docker'],
      description: [
        'Developed an intelligent e-commerce negotiation system enabling real-time price bargaining.',
        'Applied sentiment analysis and reinforcement learning techniques to dynamically adjust pricing strategies.',
        'Built a responsive user interface using React with backend services implemented in Flask and MongoDB.',
        'Containerized the application using Docker to ensure scalable and consistent deployment.'
      ]
    },
    {
      title: 'AI-Powered Blogging Platform (BlogifyAI)',
      technologies: ['Python', 'Flask', 'React', 'MongoDB', 'Firebase'],
      date: 'Feb 2025 – Apr 2025',
      description: [
        'Built a scalable blogging platform supporting post creation, content assistance, and comment moderation.',
        'Integrated NLP-based features for title generation, content suggestions, and offensive comment filtering.',
        'Implemented secure authentication using Firebase and RESTful APIs for frontend-backend communication.',
        'Enabled real-time engagement tracking to improve publishing workflow efficiency.'
      ]
    },
    {
      title: 'Hostel Management System',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'MySQL'],
      date: 'Aug 2024 – Oct 2024',
      description: [
        'Developed a full-stack hostel management system to digitize operations such as student registration, room allocation, fee management, and complaint handling.',
        'Designed and implemented relational database schemas for efficient management of student, room, and payment data.',
        'Implemented role-based access control for administrators and students to ensure secure data handling.',
        'Improved administrative efficiency by reducing manual record-keeping through centralized data management.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          My Projects
        </h1>
        
        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Title */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-indigo-600">
                  {project.title}
                </h2>
                {project.date && (
                  <span className="text-gray-500 text-sm font-medium">
                    {project.date}
                  </span>
                )}
              </div>
              
              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Description */}
              <ul className="space-y-2">
                {project.description.map((point, pointIndex) => (
                  <li 
                    key={pointIndex}
                    className="text-gray-600 leading-relaxed flex items-start"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 bg-indigo-50 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            These projects demonstrate my expertise in full-stack development, AI/ML integration, 
            and cloud technologies. Each project showcases problem-solving skills and the ability 
            to build scalable, efficient solutions.
          </p>
        </div>
      </div>
    </div>
  )
}
