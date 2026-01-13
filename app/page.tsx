import Hero from '@/components/Hero'
import Section from '@/components/Section'
import ExperienceCard from '@/components/ExperienceCard'
import ExtracurricularCard from '@/components/ExtracurricularCard'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import Education from '@/components/Education'
import { experience, extracurriculars, projects, skills, personalInfo } from '@/lib/data'
import { Github } from 'lucide-react'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

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

      {/* Projects Section - Simple 2x2 Grid */}
      <Section
        id="projects"
        title="Portfolio"
        subtitle="Technical projects and creative solutions I've built"
        className="bg-gray-50 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center pt-12">
            <div className="inline-flex items-center space-x-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
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

      {/* Extracurricular Activities Section */}
      <Section
        id="extracurriculars"
        title="Extracurricular Activities"
        subtitle=""
        className="bg-gradient-to-br from-indigo-50 to-purple-50 py-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extracurriculars.map((activity, index) => (
              <ExtracurricularCard key={activity.id} extracurricular={activity} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Let's connect and build something amazing"
        className="bg-gradient-to-br from-purple-50 to-blue-50 py-24"
      >
        <ContactForm />
      </Section>
    </main>
  )
}
