'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Wrench, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { skills } from '@/lib/data';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/utils/animations';

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = {
    all: { icon: <Code />, label: 'All Skills', color: 'blue' },
    frontend: { icon: <Code />, label: 'Frontend', color: 'blue' },
    mobile: { icon: <Smartphone />, label: 'Mobile', color: 'purple' },
    backend: { icon: <Database />, label: 'Backend', color: 'green' },
    tools: { icon: <Wrench />, label: 'Tools', color: 'orange' },
  };

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const categoryColors: Record<string, string> = {
    frontend: 'from-blue-500 to-cyan-500',
    mobile: 'from-purple-500 to-pink-500',
    backend: 'from-green-500 to-emerald-500',
    tools: 'from-orange-500 to-yellow-500',
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 text-center"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-16"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="mb-16">
          <div className="grid grid-cols-2 md:flex md:justify-center gap-4">
            {Object.entries(categories).map(([key, { icon, label }]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'glass hover:bg-slate-800'
                }`}
              >
                {icon}
                <span className="hidden md:inline">{label}</span>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-2xl font-bold gradient-text">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${
                    categoryColors[skill.category] || 'from-blue-500 to-purple-600'
                  } relative`}
                >
                  <motion.div
                    animate={{ 
                      x: [0, 100, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Category Badge */}
              <div className="mt-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${
                  categoryColors[skill.category] || 'from-blue-500 to-purple-600'
                } bg-opacity-20`}>
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Overview */}
        <AnimatedSection>
          <motion.div
            variants={fadeInLeft}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Code className="w-8 h-8 text-blue-400" />
              My Tech Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  Frontend Development
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• React.js & Next.js for modern web apps</li>
                  <li>• TypeScript for type-safe code</li>
                  <li>• Tailwind CSS for rapid styling</li>
                  <li>• Framer Motion for smooth animations</li>
                  <li>• Redux & Zustand for state management</li>
                </ul>
              </div>

              {/* Mobile */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  Mobile Development
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• React Native for cross-platform apps</li>
                  <li>• Expo for rapid development</li>
                  <li>• Native modules integration</li>
                  <li>• Push notifications & deep linking</li>
                  <li>• App Store & Play Store deployment</li>
                </ul>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  Backend & Database
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Node.js & Express.js</li>
                  <li>• PostgreSQL & MongoDB</li>
                  <li>• RESTful API design</li>
                  <li>• Firebase & Supabase</li>
                  <li>• Authentication & authorization</li>
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-400 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  Tools & Workflow
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Git & GitHub for version control</li>
                  <li>• VS Code with custom setup</li>
                  <li>• Figma for design collaboration</li>
                  <li>• Docker for containerization</li>
                  <li>• CI/CD pipelines (GitHub Actions)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Learning Section */}
        <AnimatedSection className="mt-12">
          <motion.div
            variants={fadeInUp}
            className="glass p-8 rounded-2xl text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold mb-4">Always Learning</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and best practices to stay at the cutting edge of web development.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Web3', 'AI/ML', 'WebAssembly', 'Rust', 'Three.js'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SkillsPage;