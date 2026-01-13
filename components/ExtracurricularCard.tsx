'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

interface Extracurricular {
  id: number
  organization: string
  website?: string
  position: string
  duration: string
  location?: string
  description?: string
  achievements: string[]
}

interface ExtracurricularCardProps {
  extracurricular: Extracurricular
  index: number
}

const ExtracurricularCard = ({ extracurricular, index }: ExtracurricularCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header */}
      <div className="mb-3">
        {extracurricular.website ? (
          <a
            href={extracurricular.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors duration-200 mb-1 inline-block underline decoration-gray-400 hover:decoration-purple-600"
          >
            {extracurricular.organization}
          </a>
        ) : (
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {extracurricular.organization}
          </h3>
        )}
        <p className="text-purple-600 font-semibold">
          {extracurricular.position}
        </p>
      </div>


      {/* Key Contributions */}
      <div className="mb-3">
        <h5 className="font-semibold text-gray-900 mb-3">Key Contributions:</h5>
        <ul className="space-y-2">
          {extracurricular.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-gray-500 mr-2 mt-1">•</span>
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer with duration */}
      <div className="pt-3 border-t border-gray-100">
        <div className="text-sm text-gray-600">
          {extracurricular.duration}
        </div>
      </div>
    </motion.div>
  )
}

export default ExtracurricularCard