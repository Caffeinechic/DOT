/**
 * Typography Components
 * Semantic text elements with consistent styling
 */

'use client';

import React from 'react';
import clsx from 'clsx';

// Heading Component
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: React.ReactNode;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: 'text-5xl font-bold leading-tight',
  h2: 'text-4xl font-bold leading-tight',
  h3: 'text-3xl font-semibold leading-snug',
  h4: 'text-2xl font-semibold leading-snug',
  h5: 'text-xl font-medium leading-normal',
  h6: 'text-lg font-medium leading-normal',
};

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  className,
  children,
  ...props
}) => {
  const Component = level;
  
  return (
    <Component
      className={clsx(
        'text-neutral-900 dark:text-neutral-50',
        headingStyles[level],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Paragraph Component
export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const paragraphStyles: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-sm leading-relaxed',
  md: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed',
};

export const Paragraph: React.FC<ParagraphProps> = ({
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={clsx(
        'text-neutral-700 dark:text-neutral-300',
        paragraphStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

// Caption Component
export interface CaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Caption: React.FC<CaptionProps> = ({ className, children, ...props }) => {
  return (
    <span
      className={clsx(
        'text-sm text-neutral-500 dark:text-neutral-400',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

// Label Component
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  required = false,
  className,
  children,
  ...props
}) => {
  return (
    <label
      className={clsx(
        'text-sm font-medium text-neutral-700 dark:text-neutral-300',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-error-DEFAULT ml-1">*</span>}
    </label>
  );
};

// Text Component (for inline text)
export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
}

const weightStyles: Record<'normal' | 'medium' | 'semibold' | 'bold', string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Text: React.FC<TextProps> = ({
  weight = 'normal',
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={clsx(
        'text-neutral-700 dark:text-neutral-300',
        weightStyles[weight],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
