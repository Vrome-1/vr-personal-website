'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location?: string
  description: string
  technologies?: string[]
  achievements: string[]
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-8 card-hover"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {experience.position}
          </h3>
          <h4 className="text-xl text-purple-600 font-semibold mb-2">
            {experience.company}
          </h4>

          {experience.location && (
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin size={16} className="mr-2" />
              {experience.location}
            </div>
          )}
        </div>

        <div className="text-gray-600 flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            {experience.duration}
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {experience.description}
      </p>

      <div className="mb-6">
        <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {experience.technologies && experience.technologies.length > 0 && (
        <div>
          <h5 className="font-semibold text-gray-900 mb-3">Technologies:</h5>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default ExperienceCard