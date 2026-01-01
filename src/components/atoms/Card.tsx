/**
 * Card Component
 * Container with elevation and hover effects
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export type CardVariant = 'elevated' | 'outlined' | 'flat';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  hover?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  elevated: 'bg-white dark:bg-neutral-800 shadow-md',
  outlined: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
  flat: 'bg-neutral-50 dark:bg-neutral-900',
};

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = 'md',
  hover = false,
  className,
  children,
}) => {
  return (
    <motion.div
      className={clsx(
        'rounded-xl transition-shadow duration-300',
        variantStyles[variant],
        paddingStyles[padding],
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
};
