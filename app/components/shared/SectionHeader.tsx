'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  titleColor?: string;
  subtitleColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'center',
  titleColor = 'text-gray-900',
  subtitleColor = 'text-gray-600'
}) => {
  const alignmentClass = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right',
  }[alignment];

  const marginClass = alignment === 'center' ? 'mx-auto' : '';

  return (
    <motion.div 
      className={`mb-12 ${alignmentClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={staggerChildren}
    >
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className={`text-lg md:text-xl ${subtitleColor} max-w-3xl ${marginClass}`}
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
