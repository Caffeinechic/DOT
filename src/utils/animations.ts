/**
 * Animation Utilities
 * Reusable Framer Motion animation presets and configurations
 */

import { Variants, Transition } from 'framer-motion';

// Animation Durations
export const durations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
} as const;

// Easing Functions
export const easings = {
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  linear: [0, 0, 0, 0],
} as const;

// Standard Transitions
export const transitions = {
  fast: {
    duration: durations.fast,
    ease: easings.easeInOut,
  },
  normal: {
    duration: durations.normal,
    ease: easings.easeOut,
  },
  slow: {
    duration: durations.slow,
    ease: easings.easeOut,
  },
} as const;

// Fade Animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.normal,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

// Slide Animations
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

// Scale Animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.normal,
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.slow,
  },
};

// Stagger Children Animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

// Hover Animations
export const hoverScale: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: transitions.fast,
  },
};

export const hoverLift: Variants = {
  rest: { y: 0, boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' },
  hover: {
    y: -4,
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    transition: transitions.normal,
  },
};

// Rotate Animations
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: transitions.normal,
  },
};

// Modal/Overlay Animations
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.fast,
  },
  exit: {
    opacity: 0,
    transition: transitions.fast,
  },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: transitions.fast,
  },
};

// Menu Animations
export const menuSlide: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.25,
      ease: easings.easeOut,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.25,
      ease: easings.easeIn,
    },
  },
};

// Page Transition Animations
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: transitions.fast,
  },
};

// Utility function to create custom transition
export const createTransition = (
  duration: number = durations.normal,
  ease: readonly [number, number, number, number] = easings.easeOut,
  delay: number = 0
): Transition => ({
  duration,
  ease: ease as any,
  delay,
});

// Utility function to create stagger animation
export const createStagger = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Transition => ({
  staggerChildren,
  delayChildren,
});
