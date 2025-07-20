import { Variants } from 'framer-motion';

// Animation variants for Framer Motion
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier equivalent of 'easeOut'
    }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier equivalent of 'easeOut'
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier equivalent of 'easeOut'
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier equivalent of 'easeOut'
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier equivalent of 'easeOut'
    }
  }
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier equivalent of 'easeOut'
    }
  }
};

// Use this for elements that should animate when they come into viewport
export const inViewOptions = {
  once: true,
  threshold: 0.2,
  margin: '0px 0px -10% 0px'
};
