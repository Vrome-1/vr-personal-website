'use client'

import { Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <div className="space-y-4">
          {personalInfo.email && (
            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="text-purple-600 mr-4" size={24} />
              <div className="flex-1">
                <p className="font-medium text-gray-900">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-purple-600 hover:text-purple-800 transition-colors break-all"
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
        <div className="space-y-4">
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
              </div>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-600" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactForm
