/**
 * Skills Page Component
 * Displays a list of technical skills organized by category
 */
export default function Skills() {
  // Array of skills organized by category
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'SQL']
    },
    {
      category: 'Web & Backend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Flask', 'React']
    },
    {
      category: 'Data & ML',
      skills: ['NLP', 'BERT', 'Sentiment Analysis', 'Reinforcement Learning', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      category: 'Tools & Cloud',
      skills: ['Git', 'GitHub', 'Docker', 'Firebase', 'AWS']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          My Skills
        </h1>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Title */}
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                {category.category}
              </h2>
              
              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-gray-700 flex items-center"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 bg-indigo-50 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            Continuously expanding my expertise in AI/ML, cloud technologies, and full-stack 
            development. Always exploring new frameworks and best practices to build better solutions.
          </p>
        </div>
      </div>
    </div>
  )
}
