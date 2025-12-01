'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-purple-200">{personalInfo.name}</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-white">
            {personalInfo.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto text-gray-100 leading-relaxed px-2">
            {personalInfo.bio}
          </p>
          
          <div className="flex justify-center">
            <motion.a
              href="#contact"
              className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
