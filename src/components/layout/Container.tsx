/**
 * Container Component
 * Responsive container with max-width and padding
 */

'use client';

import React from 'react';
import clsx from 'clsx';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  center?: boolean;
  children: React.ReactNode;
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  size = 'xl',
  center = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'w-full px-4 sm:px-6 lg:px-8',
        sizeStyles[size],
        center && 'mx-auto',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
