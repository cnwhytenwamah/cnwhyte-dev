'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Briefcase, GraduationCap, Award, Linkedin, Github } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/utils/animations';
import AnimatedSection from '../components/AnimatedSection';
import ImageComponent from '../components/ImageComponent';

const AboutPage = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      description:
        'Leading frontend development team, building scalable React applications and mentoring junior developers.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Startup Inc',
      description:
        'Developed mobile-first web applications using React and Next.js. Implemented design systems and component libraries.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description:
        'Started career building responsive websites and learning modern JavaScript frameworks.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: '2019',
      title: 'Computer Science Degree',
      company: 'Ignatius Ajuru University',
      description: 'Focused on software engineering and web development.',
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const achievements = [
    { icon: <Award className="text-[#00e0ff]" />, text: 'Best Mobile App Award 2023' },
    { icon: <Award className="text-[#00e0ff]" />, text: 'Open Source Contributor' },
    { icon: <Award className="text-[#00e0ff]" />, text: 'Tech Conference Speaker' },
    { icon: <Award className="text-[#00e0ff]" />, text: 'Certified React Developer' },
  ];

  return (
    <div className="min-h-screen bg-[#0c0f1a] pt-24 pb-16 px-6 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 text-center text-white"
          >
            About <span className="text-[#00e0ff]">Me</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16"
          >
            Passionate about creating exceptional digital experiences that make a difference.
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <AnimatedSection>
            <motion.div variants={fadeInLeft}>
              <motion.div
                className="relative mb-8"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: '0 0 25px #00e0ff60',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                  }}
                  className="relative w-full aspect-square rounded-[2rem] overflow-hidden border-2 border-[#00e0ff] shadow-[0_0_25px_#00e0ff50]"
                >
                  <ImageComponent
                    src="/images/profile-1.jpg"
                    alt="Profile picture"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 25px #00e0ff60',
                  borderColor: '#00e0ff',
                }}
                className="p-6 border-2 border-[#00e0ff30] rounded-2xl bg-[#0e1220] shadow-[0_0_20px_#00e0ff30] transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Quick Facts</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>▹ 5+ years of development experience</li>
                  <li>▹ 50+ projects completed</li>
                  <li>▹ Open source contributor</li>
                  <li>▹ Always learning & improving</li>
                </ul>

                <div className="flex gap-4 mt-6">
                  {[Github, Linkedin, Mail].map((Icon, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff] hover:text-[#0c0f1a] transition-all duration-300"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-6 py-3 bg-[#00e0ff] text-[#0c0f1a] rounded-full font-semibold shadow-lg hover:bg-[#00c4e6] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInRight}>
              <h2 className="text-3xl font-bold mb-6 text-white">My Story</h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  I am a passionate frontend developer with over 5 years of experience creating
                  exceptional digital experiences. My journey in web development started with a
                  curiosity about how websites work, which quickly evolved into a deep love for
                  building intuitive, performant applications.
                </p>
                <p>
                  Specializing in{' '}
                  <span className="text-[#00e0ff] font-semibold">React</span>,{' '}
                  <span className="text-[#00e0ff] font-semibold">Next.js</span>, and{' '}
                  <span className="text-[#00e0ff] font-semibold">React Native</span>, I&apos;ve had
                  the opportunity to work on diverse projects ranging from e-commerce platforms
                  to mobile applications used by thousands of users.
                </p>
                <p>
                  What drives me is the perfect blend of creativity and logic in frontend
                  development. I believe in writing clean, maintainable code while crafting
                  beautiful user interfaces that provide seamless experiences across all devices.
                </p>
                <p>
                  When I am not coding, you will find me contributing to open source projects,
                  writing technical articles, or exploring the latest web technologies. I am
                  always eager to learn and share knowledge with the developer community.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Achievements</h2>
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
                className="p-6 border-2 border-[#00e0ff30] rounded-2xl text-center bg-[#0e1220] shadow-[0_0_20px_#00e0ff20]"
              >
                <div className="mb-3 flex justify-center">{achievement.icon}</div>
                <p className="text-gray-300">{achievement.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-white">My Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00e0ff30]" />
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
                      className={`p-6 border-2 border-[#00e0ff30] rounded-2xl bg-[#0e1220] shadow-[0_0_20px_#00e0ff20] ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="text-[#00e0ff] font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                      <div className="text-gray-400 mb-3">{item.company}</div>
                      <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>

                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[#00e0ff] text-[#0c0f1a] items-center justify-center flex-shrink-0 shadow-[0_0_20px_#00e0ff60]">
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