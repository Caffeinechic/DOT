/**
 * ServiceCard Component
 * Card for displaying service information with icon and features
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../atoms/Card';
import { Heading, Paragraph } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { CheckIcon } from '../atoms/Icon';
import { fadeInUp } from '@/utils/animations';

export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features = [],
  ctaText = 'Learn More',
  ctaHref,
  onCtaClick,
}) => {
  return (
    <motion.div variants={fadeInUp}>
      <Card variant="elevated" padding="lg" hover className="h-full">
        <div className="flex flex-col h-full space-y-4">
          {/* Icon */}
          {icon && (
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
              {icon}
            </div>
          )}

          {/* Title & Description */}
          <div className="flex-1 space-y-2">
            <Heading level="h3">{title}</Heading>
            <Paragraph size="sm" className="text-neutral-600 dark:text-neutral-400">
              {description}
            </Paragraph>
          </div>

          {/* Features List */}
          {features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon size="sm" className="text-success-DEFAULT mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Button */}
          {(ctaHref || onCtaClick) && (
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={onCtaClick}
                {...(ctaHref && { as: 'a', href: ctaHref })}
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
