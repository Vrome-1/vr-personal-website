'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#home" className="text-2xl font-bold text-gradient">
            VR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            {personalInfo.github && (
              <a href={personalInfo.github} className="text-gray-700 hover:text-purple-600 transition-colors">
                <Github size={20} />
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} className="text-gray-700 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
            )}
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-purple-600 transition-colors">
                <Mail size={20} />
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4">
                {personalInfo.github && (
                  <a href={personalInfo.github} className="text-gray-700 hover:text-purple-600">
                    <Github size={20} />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} className="text-gray-700 hover:text-purple-600">
                    <Linkedin size={20} />
                  </a>
                )}
                {personalInfo.email && (
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-purple-600">
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
