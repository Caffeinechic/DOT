/**
 * FeatureListItem Component
 * List item for displaying features with icon
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Paragraph } from '../atoms/Typography';
import { fadeInUp } from '@/utils/animations';
import clsx from 'clsx';

export interface FeatureListItemProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const FeatureListItem: React.FC<FeatureListItemProps> = ({
  icon,
  title,
  description,
  href,
  orientation = 'horizontal',
}) => {
  const content = (
    <motion.div
      variants={fadeInUp}
      className={clsx(
        'flex gap-4 p-4 rounded-lg transition-colors duration-200',
        href && 'hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer',
        orientation === 'vertical' ? 'flex-col items-center text-center' : 'items-start'
      )}
    >
      {/* Icon */}
      {icon && (
        <div className={clsx(
          'flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex-shrink-0',
          orientation === 'vertical' ? 'w-16 h-16' : 'w-12 h-12'
        )}>
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 space-y-1">
        <Heading level="h5">{title}</Heading>
        <Paragraph size="sm" className="text-neutral-600 dark:text-neutral-400">
          {description}
        </Paragraph>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
};
