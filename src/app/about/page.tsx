'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Briefcase, GraduationCap, Award, Linkedin, Github } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/utils/animations';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      description: 'Leading frontend development team, building scalable React applications and mentoring junior developers.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Startup Inc',
      description: 'Developed mobile-first web applications using React and Next.js. Implemented design systems and component libraries.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Started career building responsive websites and learning modern JavaScript frameworks.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: '2019',
      title: 'Computer Science Degree',
      company: 'University',
      description: 'Graduated with honors. Focused on software engineering and web development.',
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const achievements = [
    { icon: <Award />, text: 'Best Mobile App Award 2023' },
    { icon: <Award />, text: 'Open Source Contributor' },
    { icon: <Award />, text: 'Tech Conference Speaker' },
    { icon: <Award />, text: 'Certified React Developer' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 text-center"
          >
            About <span className="text-blue-500">Me</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
          >
            Passionate about creating exceptional digital experiences that make a difference
          </motion.p>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <AnimatedSection>
            <motion.div variants={fadeInLeft}>
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-full aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-9xl">
                  👨‍💻
                </div>
              </div>

              {/* Quick Facts */}
              <div className="p-6 border rounded-xl bg-white shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>▹ 5+ years of development experience</li>
                  <li>▹ 50+ projects completed</li>
                  <li>▹ Open source contributor</li>
                  <li>▹ Always learning & improving</li>
                </ul>

                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="mailto:your.email@example.com"
                    className="p-3 rounded-full border hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </div>

                {/* Download CV Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.button>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection>
            <motion.div variants={fadeInRight}>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  I'm a passionate frontend developer with over 5 years of experience creating 
                  exceptional digital experiences. My journey in web development started with a 
                  curiosity about how websites work, which quickly evolved into a deep love for 
                  building intuitive, performant applications.
                </p>
                <p>
                  Specializing in <span className="font-semibold">React</span>, 
                  <span className="font-semibold"> Next.js</span>, and 
                  <span className="font-semibold"> React Native</span>, I've had 
                  the opportunity to work on diverse projects ranging from e-commerce platforms 
                  to mobile applications used by thousands of users.
                </p>
                <p>
                  What drives me is the perfect blend of creativity and logic in frontend 
                  development. I believe in writing clean, maintainable code while crafting 
                  beautiful user interfaces that provide seamless experiences across all devices.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open source projects, 
                  writing technical articles, or exploring the latest web technologies. I'm 
                  always eager to learn and share knowledge with the developer community.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Achievements Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 border rounded-xl text-center bg-white shadow-sm"
              >
                <div className="mb-3 flex justify-center">
                  {achievement.icon}
                </div>
                <p className="text-gray-700">{achievement.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 border rounded-xl bg-white shadow-sm ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="text-blue-500 font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <div className="text-gray-500 mb-3">{item.company}</div>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  </div>

                  <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-500 text-white items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;