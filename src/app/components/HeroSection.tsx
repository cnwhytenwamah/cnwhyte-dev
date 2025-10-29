'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import ImageComponent from './ImageComponent'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/cnwhytenwamah', label: 'GitHub' },
  { icon: FiTwitter, href: 'https://twitter.com/cnwhyte', label: 'Twitter' },
  { icon: FiMail, href: 'nwamahclinton@gmail.com', label: 'Email' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
]

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0c0f1a] flex items-center justify-center px-6 py-[20px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-lg text-gray-300 mb-2">Hello, It&apos;s Me</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-2">
            Nwamah Clinton
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-6">
            And I&apos;m a{' '}
            <span className="text-[#00e0ff] font-semibold">
              Frontend Developer
            </span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
            I build beautiful and functional web interfaces that deliver seamless
            digital experiences. Focused on crafting clean, accessible, and
            high-performing applications.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff] hover:text-[#0c0f1a] transition-all duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <a
            href="/resume/clinton_c_nwamah_front-end_resume.pdf"
            download="Nwamah_Clinton_CV.pdf"
            className="inline-block px-8 py-3 bg-[#00e0ff] text-[#0c0f1a] font-semibold rounded-full shadow-lg hover:bg-[#00c4e6] transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-[#00e0ff]/20 rounded-[2rem] p-2">
            <div className="absolute inset-0 bg-[#00e0ff] blur-3xl opacity-30 rounded-[2rem]"></div>
            <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#00e0ff] shadow-[0_0_30px_#00e0ff50]">
              <ImageComponent
                src="/images/profile.jpg" 
                alt="Profile"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}