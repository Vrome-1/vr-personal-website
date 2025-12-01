import Hero from '@/components/Hero'
import Section from '@/components/Section'
import ExperienceCard from '@/components/ExperienceCard'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import Education from '@/components/Education'
import { experience, projects, skills, personalInfo } from '@/lib/data'
import { Github, Code, Briefcase, GraduationCap, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      {/* About Section - Clean and focused */}
      <Section
        id="about"
        title="About Me"
        subtitle="Passionate developer crafting digital experiences"
        className="bg-gradient-to-br from-gray-50 to-white py-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Bio */}
            <div className="space-y-6">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Code className="mr-2" size={16} />
                Full-Stack Developer
              </div>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="text-xl font-medium text-gray-900 mb-4">
                  {personalInfo.bio}
                </p>
                <p>
                  I'm passionate about creating efficient, scalable solutions and love working on challenging problems.
                  When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities.
                </p>
              </div>
            </div>

            {/* Right: Skills Overview */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Expertise</h3>
              
              {/* Skill Categories with better visual design */}
              <div className="grid gap-6">
                {/* Languages */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <h4 className="text-lg font-semibold text-gray-800">Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.slice(0, 6).map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <h4 className="text-lg font-semibold text-gray-800">Frameworks & Libraries</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.slice(0, 6).map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <h4 className="text-lg font-semibold text-gray-800">Tools & Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.slice(0, 6).map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Education"
        subtitle="Academic foundation and achievements"
        className="bg-white py-24"
      >
        <div className="max-w-4xl mx-auto">
          <Education />
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Professional Experience"
        subtitle="Building impactful solutions in dynamic environments"
        className="bg-gradient-to-br from-purple-50 to-blue-50 py-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section - Custom Layout: 1 + 2 + 3 + 3 */}
      <Section
        id="projects"
        title="Portfolio"
        subtitle="Technical projects and creative solutions I've built"
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Row 1: 1 Featured Project - Now Wider */}
          <div className="grid grid-cols-1 max-w-4xl mx-auto">
            {projects.slice(0, 1).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Row 2: 2 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.slice(1, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 1} />
            ))}
          </div>

          {/* Row 3: 3 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(3, 6).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 3} />
            ))}
          </div>

          {/* Row 4: 3 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(6, 9).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 6} />
            ))}
          </div>
          
          {/* View More Projects */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center space-x-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Explore More Projects</h3>
                <p className="text-gray-600 text-sm">Check out my complete portfolio on GitHub</p>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 text-sm"
              >
                <Github className="mr-2" size={16} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Ready to bring your ideas to life"
        className="bg-gradient-to-br from-white to-gray-50 py-24"
      >
        <ContactForm />
      </Section>
    </main>
  )
}
