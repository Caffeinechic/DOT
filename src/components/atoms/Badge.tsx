/**
 * Badge Component
 * Small status indicator or label
 */

'use client';

import React from 'react';
import clsx from 'clsx';

export type BadgeVariant = 'solid' | 'outline' | 'subtle';
export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  children: React.ReactNode;
}

const colorStyles: Record<BadgeColor, Record<BadgeVariant, string>> = {
  primary: {
    solid: 'bg-primary-600 text-white',
    outline: 'border border-primary-600 text-primary-600',
    subtle: 'bg-primary-100 text-primary-700',
  },
  secondary: {
    solid: 'bg-secondary-600 text-white',
    outline: 'border border-secondary-600 text-secondary-600',
    subtle: 'bg-secondary-100 text-secondary-700',
  },
  success: {
    solid: 'bg-success-DEFAULT text-white',
    outline: 'border border-success-DEFAULT text-success-DEFAULT',
    subtle: 'bg-success-light text-success-dark',
  },
  warning: {
    solid: 'bg-warning-DEFAULT text-white',
    outline: 'border border-warning-DEFAULT text-warning-DEFAULT',
    subtle: 'bg-warning-light text-warning-dark',
  },
  error: {
    solid: 'bg-error-DEFAULT text-white',
    outline: 'border border-error-DEFAULT text-error-DEFAULT',
    subtle: 'bg-error-light text-error-dark',
  },
  neutral: {
    solid: 'bg-neutral-600 text-white',
    outline: 'border border-neutral-600 text-neutral-600',
    subtle: 'bg-neutral-100 text-neutral-700',
  },
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium rounded-full',
        colorStyles[color][variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
