/**
 * useScrollAnimation Hook
 * Provides scroll-triggered animation controls for Framer Motion
 */

'use client';

import { useAnimation } from 'framer-motion';
import { useInView } from './useInView';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): [React.RefObject<HTMLDivElement | null>, ReturnType<typeof useAnimation>, boolean] {
  const controls = useAnimation();
  const [ref, isInView] = useInView<HTMLDivElement>(options);

  // Trigger animation when element comes into view
  if (isInView) {
    controls.start('visible');
  }

  return [ref, controls, isInView];
}
