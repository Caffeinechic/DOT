/**
 * Icon Component
 * SVG wrapper for consistent icon sizing and coloring
 */

'use client';

import React from 'react';
import clsx from 'clsx';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: IconSize;
  children: React.ReactNode;
}

const sizeStyles: Record<IconSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export const Icon: React.FC<IconProps> = ({
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(sizeStyles[size], className)}
      {...props}
    >
      {children}
    </svg>
  );
};

// Common Icon Components
export const ChevronRightIcon: React.FC<Omit<IconProps, 'children'>> = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </Icon>
);

export const ChevronDownIcon: React.FC<Omit<IconProps, 'children'>> = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </Icon>
);

export const MenuIcon: React.FC<Omit<IconProps, 'children'>> = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </Icon>
);

export const CloseIcon: React.FC<Omit<IconProps, 'children'>> = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </Icon>
);

export const SearchIcon: React.FC<Omit<IconProps, 'children'>> = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </Icon>
);

export const CheckIcon: React.FC<Omit<IconProps, 'children'>> = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </Icon>
);

export const ArrowRightIcon: React.FC<Omit<IconProps, 'children'>> = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </Icon>
);
