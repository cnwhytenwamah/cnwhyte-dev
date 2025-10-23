'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Pepend Blog',
    description:
      'A modern blogging platform featuring rich text editing, authentication, SEO optimization, and a clean UI for reading and writing posts.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/nwamahclinton/pepend-blog',
    demo: 'https://pepend.vercel.app',
    image: '/images/projects/pepend.png',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive and animated portfolio showcasing my projects, experience, and skills — built with a focus on performance and visual appeal.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/nwamahclinton/portfolio',
    demo: 'https://cnwhyte.vercel.app',
    image: '/images/projects/portfolio.png',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with product management, shopping cart, checkout flow, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/nwamahclinton/ecommerce',
    demo: 'https://ecommerce-demo.com',
    image: '/images/projects/ecommerce.png',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-6 bg-[#0c0f1a] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#00e0ff] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my real-world projects — built with precision, creativity,
            and modern web technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 0 25px #00e0ff50' }}
              className="bg-[#111525] border border-[#00e0ff20] rounded-2xl overflow-hidden shadow-lg hover:border-[#00e0ff70] transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-[#00e0ff]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                >
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#00e0ff] text-[#0c0f1a] rounded-full hover:bg-[#00c4e6] transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <FiGithub size={22} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#00e0ff] text-[#0c0f1a] rounded-full hover:bg-[#00c4e6] transition-all duration-300"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={22} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Text Area */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#00e0ff1a] text-[#00e0ff] text-sm rounded-full border border-[#00e0ff30]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}