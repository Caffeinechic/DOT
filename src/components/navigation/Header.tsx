/**
 * Header Component
 * Main navigation header with logo, menu, and mobile toggle
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Container } from '../layout/Container';
import { MenuIcon } from '../atoms/Icon';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeaderProps {
  logo?: React.ReactNode;
  logoText?: string;
  navItems?: NavItem[];
  sticky?: boolean;
  transparent?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Header: React.FC<HeaderProps> = ({
  logo,
  logoText = 'DOT',
  navItems = defaultNavItems,
  sticky = true,
  transparent = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={clsx(
          'w-full z-50 transition-all duration-300',
          sticky && 'sticky top-0',
          transparent && !scrolled
            ? 'bg-transparent'
            : 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {logo ? (
                logo
              ) : (
                <span className="text-2xl font-bold text-primary-600">
                  {logoText}
                </span>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'text-neutral-700 dark:text-neutral-300 hover:text-primary-600',
                      'dark:hover:text-primary-400 transition-colors duration-200',
                      'font-medium relative',
                      isActive && 'text-primary-600 dark:text-primary-400'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                        layoutId="activeNav"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-neutral-700 dark:text-neutral-300"
              aria-label="Open menu"
            >
              <MenuIcon size="lg" />
            </button>
          </div>
        </Container>
      </motion.header>
    </>
  );
};
