'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';
import { ContactFormData } from '@/lib/types';

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Port Harcourt, Nigeria',
      link: null,
    },
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-16"
          >
            Have a project in mind or just want to chat? I'd love to hear from you!
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <motion.div variants={fadeInLeft} className="glass p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className={`w-full px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    status === 'loading'
                      ? 'bg-slate-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection>
            <motion.div variants={fadeInRight} className="space-y-6">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass p-6 rounded-xl"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-start gap-4 group"
                      >
                        <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                          <div className="font-semibold group-hover:text-blue-400 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                          <div className="font-semibold">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Availability Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span className="font-semibold text-green-400">Available for Projects</span>
                </div>
                <p className="text-slate-300">
                  I'm currently available for freelance projects and full-time opportunities.
                  Let's build something amazing together!
                </p>
              </motion.div>

              {/* Response Time */}
              <div className="glass p-6 rounded-xl">
                <h3 className="font-semibold mb-2">⚡ Quick Response</h3>
                <p className="text-slate-300 text-sm">
                  I typically respond within 24 hours. For urgent matters, 
                  feel free to reach out via phone.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* FAQ Section */}
        <AnimatedSection className="mt-20">
          <motion.div variants={fadeInUp} className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "What's your typical response time?",
                  a: "I aim to respond to all inquiries within 24 hours during business days."
                },
                {
                  q: "Do you work with international clients?",
                  a: "Yes! I work with clients globally across different time zones."
                },
                {
                  q: "What's your project minimum?",
                  a: "I typically work on projects starting from $2,000, but I'm flexible for interesting opportunities."
                },
                {
                  q: "Do you offer ongoing support?",
                  a: "Yes, I provide maintenance and support packages for completed projects."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-slate-800/50 rounded-lg"
                >
                  <h4 className="font-semibold mb-2 text-blue-400">{faq.q}</h4>
                  <p className="text-slate-300 text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;