/**
 * Contact Page Component
 * Displays contact information (email and phone)
 * Note: This is static content only - no contact form
 */
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Get In Touch
        </h1>
        
        {/* Contact Information Card */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Feel free to reach out to me if you'd like to collaborate on a project 
            or just want to say hello. I'm always open to discussing new opportunities!
          </p>
          
          {/* Contact Details */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center p-4 bg-indigo-50 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Email
                </h3>
                <a 
                  href="mailto:sammedpatil0104@gmail.com"
                  className="text-indigo-600 hover:text-indigo-800 text-lg transition-colors"
                >
                  sammedpatil0104@gmail.com
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center justify-center p-4 bg-indigo-50 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Phone
                </h3>
                <a 
                  href="tel:+919503202231"
                  className="text-indigo-600 hover:text-indigo-800 text-lg transition-colors"
                >
                  +91-9503202231
                </a>
              </div>
            </div>
            
            {/* LinkedIn */}
            <div className="flex items-center justify-center p-4 bg-indigo-50 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  LinkedIn
                </h3>
                <a 
                  href="https://www.linkedin.com/in/sammed-patil-223063257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-lg transition-colors"
                >
                  linkedin.com/in/sammedpatil
                </a>
              </div>
            </div>
          </div>
          
          {/* Note */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
