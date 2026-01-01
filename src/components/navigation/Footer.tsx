/**
 * Footer Component
 * Site footer with multi-column layout and social links
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../layout/Container';
import { Grid } from '../layout/Grid';
import { Flex } from '../layout/Flex';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterProps {
  logo?: React.ReactNode;
  logoText?: string;
  description?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'UI/UX Design', href: '/services/design' },
      { label: 'Consulting', href: '/services/consulting' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({
  logo,
  logoText = 'DOT',
  description = 'Building exceptional digital experiences.',
  columns = defaultColumns,
  socialLinks = [],
  copyrightText,
}) => {
  const currentYear = new Date().getFullYear();
  const copyright = copyrightText || `© ${currentYear} ${logoText}. All rights reserved.`;

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container>
        <div className="py-12 md:py-16">
          <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
            {/* Logo & Description */}
            <div className="space-y-4">
              {logo ? (
                logo
              ) : (
                <span className="text-2xl font-bold text-white">{logoText}</span>
              )}
              <p className="text-sm text-neutral-400">{description}</p>
              
              {/* Social Links */}
              {socialLinks.length > 0 && (
                <Flex gap="sm" className="mt-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-400 hover:text-primary-400 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </Flex>
              )}
            </div>

            {/* Footer Columns */}
            {columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-white font-semibold">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Grid>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 py-6">
          <p className="text-sm text-neutral-500 text-center">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
};
