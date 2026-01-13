'use client'

import { motion } from 'framer-motion'
import { personalInfo, skills } from '@/lib/data'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Left: Name, Title, Bio, Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Avatar Image */}
            {personalInfo.avatar && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-start mb-6"
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/30 shadow-2xl hover:border-white/50 transition-all duration-300"
                />
              </motion.div>
            )}

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
                  <span className="text-purple-200">{personalInfo.name}</span>
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-white">
                  {personalInfo.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-2xl text-gray-100 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>


              <div className="flex justify-center lg:justify-start">
                <motion.a
                  href="#contact"
                  className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Overview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>

            <div className="grid gap-4">
              {/* Languages */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-purple-300 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-white">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-white">Frameworks & Libraries</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-300 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-white">Tools & Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
