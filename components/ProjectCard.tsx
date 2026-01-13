'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 border-gray-100 hover:border-purple-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image/Preview */}
      <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
        {/* Project Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-indigo-600/40 transition-transform duration-500 group-hover:scale-110"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-3">
          <div className="text-center text-white w-full max-w-4xl px-2">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h3>
            
            {/* Action Buttons */}
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              {project.github && (
                <a
                  href={project.github}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Source Code"
                >
                  <Github size={20} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <motion.p 
          className="text-gray-600 mb-4 leading-relaxed text-sm"
          animate={{ opacity: isHovered ? 0.8 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 hover:shadow-md transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect Border */}
      <motion.div 
        className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
        animate={{ borderColor: isHovered ? 'rgba(147, 51, 234, 0.3)' : 'transparent' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default ProjectCard
