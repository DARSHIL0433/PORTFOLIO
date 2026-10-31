'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}

export const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, ariaLabel, children, className = '' }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        aria-label={ariaLabel}
        className={className}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100dvh',
          overflow: 'auto',
          overscrollBehavior: 'contain',
          willChange: 'transform, opacity',
        }}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
