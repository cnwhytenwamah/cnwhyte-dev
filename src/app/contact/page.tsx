'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import axios from 'axios';

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'nwamahclinton@gmail.com',
    href: 'mailto:nwamahclinton@gmail.com',
  },
  {
    icon: FiPhone,
    title: 'Phone',
    value: '+234 815-616-6597',
    href: 'tel:2348156166597',
  },
  {
    icon: FiMapPin,
    title: 'Location',
    value: '#1 Jesa avenue off Kreigani rd, Omoku, Rivers State',
    href: null,
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
            Get <span className="text-[#00e0ff]">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#00e0ff] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Drop me a message —
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="bg-[#101424] border border-[#00e0ff]/30 p-6 rounded-2xl shadow-md hover:shadow-[#00e0ff]/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00e0ff]/10 rounded-lg">
                    <info.icon className="text-[#00e0ff]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-400 hover:text-[#00e0ff] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-[#00c4e6] to-[#00e0ff] p-6 rounded-2xl text-[#0c0f1a] shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">Let&apos;s Collaborate</h3>
              <p className="opacity-90">
                Always open to discussing exciting ideas, new projects, or long-term partnerships.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#101424] border border-[#00e0ff]/30 p-8 rounded-2xl shadow-lg hover:shadow-[#00e0ff]/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[#0c0f1a] border border-[#00e0ff]/20 text-gray-200 focus:ring-2 focus:ring-[#00e0ff] outline-none transition-all" placeholder="John Amaka"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[#0c0f1a] border border-[#00e0ff]/20 text-gray-200 focus:ring-2 focus:ring-[#00e0ff] outline-none transition-all" placeholder="john@gmail.com"/>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[#0c0f1a] border border-[#00e0ff]/20 text-gray-200 focus:ring-2 focus:ring-[#00e0ff] outline-none transition-all" placeholder="Project Inquiry"/>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 rounded-lg bg-[#0c0f1a] border border-[#00e0ff]/20 text-gray-200 focus:ring-2 focus:ring-[#00e0ff] outline-none transition-all resize-none" placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00c4e6] to-[#00e0ff] text-[#0c0f1a] font-semibold rounded-lg shadow-lg hover:shadow-[#00e0ff]/40 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0c0f1a] border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend size={18} />
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-900/20 border border-green-500/30 text-green-400 rounded-lg"
                >
                  Thanks for reaching out! I will get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded-lg"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}