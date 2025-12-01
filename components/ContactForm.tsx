'use client'

import { Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects.
          Feel free to reach out!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h4>
          
          {personalInfo.email && (
            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="text-purple-600 mr-4" size={24} />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          )}

          {personalInfo.location && (
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <MapPin className="text-purple-600 mr-4" size={24} />
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-gray-600">{personalInfo.location}</p>
              </div>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-gray-900 mb-6">Find Me Online</h4>
          
          {personalInfo.linkedin && (
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <Linkedin className="text-blue-600 mr-4" size={24} />
              <div className="flex-1">
                <p className="font-medium text-gray-900 group-hover:text-blue-900">LinkedIn</p>
                <p className="text-gray-600 text-sm">Connect professionally</p>
              </div>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600" />
            </a>
          )}

          {personalInfo.github && (
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <Github className="text-gray-900 mr-4" size={24} />
              <div className="flex-1">
                <p className="font-medium text-gray-900 group-hover:text-gray-700">GitHub</p>
                <p className="text-gray-600 text-sm">View my code</p>
              </div>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-600" />
            </a>
          )}

          {personalInfo.twitter && (
            <a 
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <div className="w-6 h-6 bg-blue-400 rounded mr-4 flex items-center justify-center">
                <span className="text-white text-xs font-bold">𝕏</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 group-hover:text-blue-900">Twitter</p>
                <p className="text-gray-600 text-sm">Follow for updates</p>
              </div>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600" />
            </a>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 p-8 bg-purple-50 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to Work Together?</h4>
        <p className="text-gray-600 mb-6">
          Feel free to reach out through any of the channels above. I'm always excited to discuss new opportunities!
        </p>
        {personalInfo.email && (
          <a
            href={`mailto:${personalInfo.email}?subject=Portfolio Contact`}
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Send Me an Email
          </a>
        )}
      </div>
    </div>
  )
}

export default ContactForm
