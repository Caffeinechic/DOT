/**
 * PortfolioCard Component
 * Card for displaying portfolio project with image overlay
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { Heading, Paragraph } from '../atoms/Typography';
import { ArrowRightIcon } from '../atoms/Icon';

export interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tags?: string[];
  href: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  category,
  tags = [],
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <Card
        variant="elevated"
        padding="none"
        className="overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 0.8 : 0.6 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="solid" color="primary">
              {category}
            </Badge>
          </div>

          {/* Hover Arrow */}
          <motion.div
            className="absolute bottom-4 right-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <ArrowRightIcon size="sm" className="text-neutral-900" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <Heading level="h4">{title}</Heading>
          <Paragraph size="sm" className="text-neutral-600 dark:text-neutral-400 line-clamp-2">
            {description}
          </Paragraph>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="subtle" color="neutral" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};
