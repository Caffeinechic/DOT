/**
 * TestimonialCard Component
 * Card for displaying client testimonials with rating
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '../atoms/Card';
import { Paragraph, Caption } from '../atoms/Typography';
import { fadeIn } from '@/utils/animations';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-warning-DEFAULT' : 'text-neutral-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
}) => {
  return (
    <motion.div variants={fadeIn}>
      <Card variant="elevated" padding="lg" className="h-full">
        <div className="flex flex-col space-y-4">
          {/* Rating */}
          {rating > 0 && (
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} filled={index < rating} />
              ))}
            </div>
          )}

          {/* Quote */}
          <Paragraph className="text-neutral-700 dark:text-neutral-300 italic flex-1">
            &ldquo;{quote}&rdquo;
          </Paragraph>

          {/* Author Info */}
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            {avatar && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={avatar}
                  alt={author}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                {author}
              </p>
              <Caption>
                {role}
                {company && ` • ${company}`}
              </Caption>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
