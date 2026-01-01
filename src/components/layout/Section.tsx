/**
 * Section Component
 * Page section with consistent padding and backgrounds
 */

'use client';

import React from 'react';
import clsx from 'clsx';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionBackground = 'white' | 'neutral' | 'primary' | 'secondary';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article' | 'aside';
  padding?: SectionPadding;
  background?: SectionBackground;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const paddingStyles: Record<SectionPadding, string> = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
};

const backgroundStyles: Record<SectionBackground, string> = {
  white: 'bg-white dark:bg-neutral-900',
  neutral: 'bg-neutral-50 dark:bg-neutral-800',
  primary: 'bg-primary-50 dark:bg-primary-900',
  secondary: 'bg-secondary-50 dark:bg-secondary-900',
};

export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  padding = 'md',
  background = 'white',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={clsx(
        paddingStyles[padding],
        backgroundStyles[background],
        !fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
