'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SideDotsProps {
  sections: { id: string; label: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function SideDots({ sections, currentIndex, onNavigate }: SideDotsProps) {
  return (
    <nav
      aria-label="Section navigation"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      {sections.map((section, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={section.id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          >
            {/* Tooltip */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: '20px',
                backgroundColor: 'rgba(26,26,26,0.88)',
                color: '#E8E4DC',
                fontSize: '9px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '5px 10px',
                borderRadius: '3px',
                whiteSpace: 'nowrap',
                opacity: 0,
                pointerEvents: 'none',
                transition: 'opacity 0.2s ease',
              }}
              className="dot-tooltip"
            >
              {section.label}
            </div>

            <button
              onClick={() => onNavigate(index)}
              aria-label={`Go to ${section.label}`}
              aria-current={isActive ? 'true' : undefined}
              style={{
                width: isActive ? '8px' : '6px',
                height: isActive ? '8px' : '6px',
                borderRadius: '50%',
                border: '1px solid rgba(26,26,26,0.5)',
                backgroundColor: isActive ? '#C8432A' : 'transparent',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
                outline: 'none',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                const tooltip = (e.currentTarget.previousSibling as HTMLElement);
                if (tooltip) tooltip.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const tooltip = (e.currentTarget.previousSibling as HTMLElement);
                if (tooltip) tooltip.style.opacity = '0';
              }}
              onFocus={(e) => {
                const tooltip = (e.currentTarget.previousSibling as HTMLElement);
                if (tooltip) tooltip.style.opacity = '1';
              }}
              onBlur={(e) => {
                const tooltip = (e.currentTarget.previousSibling as HTMLElement);
                if (tooltip) tooltip.style.opacity = '0';
              }}
            />
          </div>
        );
      })}
    </nav>
  );
}
