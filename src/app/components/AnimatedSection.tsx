'use client';

import { AnimatedSectionProps } from '@/lib/types';
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;