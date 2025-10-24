'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript,
  SiTailwindcss, SiGit, SiFigma, SiJest, SiFirebase, SiVercel, SiNetlify
} from 'react-icons/si';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 95, color: 'text-[#00e0ff]' },
      { name: 'Next.js', icon: SiNextdotjs, level: 90, color: 'text-white' },
      { name: 'TypeScript', icon: SiTypescript, level: 90, color: 'text-[#00e0ff]' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: 'text-[#00e0ff]' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit, level: 90, color: 'text-[#00e0ff]' },
      { name: 'Firebase', icon: SiFirebase, level: 85, color: 'text-[#00e0ff]' },
      { name: 'Vercel', icon: SiVercel, level: 80, color: 'text-white' },
      { name: 'Netlify', icon: SiNetlify, level: 80, color: 'text-[#00e0ff]' },
    ],
  },
  {
    category: 'Design & Testing',
    skills: [
      { name: 'Figma', icon: SiFigma, level: 80, color: 'text-[#00e0ff]' },
      { name: 'Jest', icon: SiJest, level: 75, color: 'text-[#00e0ff]' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6 bg-[#0c0f1a] text-gray-300"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Frontend <span className="text-[#00e0ff]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#00e0ff] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to craft responsive, modern, and interactive experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#101424] border border-[#00e0ff]/30 rounded-2xl shadow-lg p-8 hover:shadow-[#00e0ff]/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#00e0ff] mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className={`${skill.color}`} size={26} />
                        <span className="font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: i * 0.2 + index * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-[#00c4e6] to-[#00e0ff] rounded-full shadow-[0_0_8px_#00e0ff]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-semibold text-[#00e0ff] mb-8">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Framer Motion',
              'REST API',
              'Responsive Design',
              'Accessibility (a11y)',
              'React Hook Form',
              'Styled Components',
              'Sass',
              'ESLint & Prettier',
              'Vite',
              'Storybook',
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 border border-[#00e0ff]/40 rounded-full text-gray-300 hover:bg-[#00e0ff] hover:text-[#0c0f1a] transition-all duration-300 shadow-sm hover:shadow-[#00e0ff]/40"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}