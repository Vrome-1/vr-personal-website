'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react'
import { education } from '@/lib/data'

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="space-y-6">
        {/* Degree Info */}
        <div className="border-l-4 border-purple-500 pl-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            {education.degree} in {education.major}
          </h4>
          {education.minor && (
            <p className="text-purple-600 font-medium mb-2">Minor in {education.minor}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <GraduationCap size={16} className="mr-2" />
              {education.university}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {education.graduationDate}
            </div>
          </div>
          {education.gpa && (
            <p className="text-gray-700 mb-4">
              GPA: {education.gpa}
            </p>
          )}
        </div>

        {/* Awards */}
        {education.awards && education.awards.length > 0 && (
          <div>
            <div className="flex items-center mb-3">
              <Award className="text-yellow-500 mr-2" size={18} />
              <h5 className="text-base font-semibold text-gray-900">Awards & Honors</h5>
            </div>
            <div className="space-y-1">
              {education.awards.map((award, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 text-xs">✓</span>
                  <span className="text-gray-700 text-sm">{award}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Relevant Courses */}
        {education.relevantCourses && education.relevantCourses.length > 0 && (
          <div>
            <div className="flex items-center mb-3">
              <BookOpen className="text-blue-500 mr-2" size={18} />
              <h5 className="text-base font-semibold text-gray-900">Relevant Coursework</h5>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.relevantCourses.map((course, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Education
