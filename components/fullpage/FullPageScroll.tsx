'use client';

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useFullPageScroll } from '@/hooks/use-fullpage-scroll';
import SideDots from './SideDots';

// ─── Config ──────────────────────────────────────────────────────────────────
// Adjust these values to tune feel:
export const FULLPAGE_CONFIG = {
  /** Transition animation duration in ms */
  duration: 900,
  /** CSS cubic-bezier for the slide easing */
  easing: [0.77, 0, 0.175, 1] as [number, number, number, number],
  /** Minimum wheel deltaY to register as intentional scroll */
  wheelThreshold: 30,
  /** How long to lock input after a transition (ms) */
  cooldown: 950,
  /** Minimum touch swipe distance in px */
  swipeThreshold: 50,
};

// ─── Context ──────────────────────────────────────────────────────────────────
interface FullPageContextValue {
  currentIndex: number;
  totalSections: number;
  navigateTo: (index: number) => void;
}

const FullPageContext = createContext<FullPageContextValue>({
  currentIndex: 0,
  totalSections: 1,
  navigateTo: () => {},
});

export const useFullPage = () => useContext(FullPageContext);

// ─── Section Definition ───────────────────────────────────────────────────────
export interface SectionDef {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface FullPageScrollProps {
  sections: SectionDef[];
}

// ─── Variants ─────────────────────────────────────────────────────────────────
function getVariants(
  durationS: number,
  easing: [number, number, number, number],
  reducedMotion: boolean
) {
  if (reducedMotion) {
    return {
      enter: () => ({ opacity: 0 }),
      center: { opacity: 1, transition: { duration: 0.3 } },
      exit: () => ({ opacity: 0, transition: { duration: 0.3 } }),
    };
  }
  return {
    enter: (dir: number) => ({
      y: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: durationS,
        ease: easing,
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? '-20%' : '20%',
      opacity: 0.4,
      scale: 0.95,
      transition: {
        duration: durationS,
        ease: easing,
      },
    }),
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function FullPageScroll({ sections }: FullPageScrollProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeSectionRef = useRef<HTMLElement | null>(null);

  // Read hash on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const idx = sections.findIndex((s) => s.id === hash);
      if (idx !== -1) setCurrentIndex(idx);
    }
  }, [sections]);

  const navigateTo = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      const dir = index > currentIndex ? 1 : -1;
      setDirection(dir);
      setIsTransitioning(true);
      setCurrentIndex(index);
      // Sync URL hash
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${sections[index].id}`);
      }
    },
    [currentIndex, sections]
  );

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  useFullPageScroll({
    totalSections: sections.length,
    currentIndex,
    isTransitioning,
    config: FULLPAGE_CONFIG,
    onNavigate: navigateTo,
    activeSectionRef,
  });

  const variants = getVariants(
    FULLPAGE_CONFIG.duration / 1000,
    FULLPAGE_CONFIG.easing,
    reducedMotion
  );

  const section = sections[currentIndex];

  return (
    <FullPageContext.Provider value={{ currentIndex, totalSections: sections.length, navigateTo }}>
      {/* Container */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'hidden',
          background: '#E8E4DC',
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={section.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationComplete={handleTransitionEnd}
            style={{
              position: 'absolute',
              inset: 0,
              willChange: 'transform, opacity',
            }}
          >
            <section
              ref={(el) => {
                activeSectionRef.current = el;
                if (el) {
                  if (direction > 0) {
                    el.scrollTop = 0;
                  } else if (direction < 0) {
                    el.scrollTop = Math.max(0, el.scrollHeight - el.clientHeight);
                  }
                }
              }}
              id={section.id}
              className="fp-section"
              aria-label={section.label}
              tabIndex={-1}
              style={{
                width: '100%',
                height: '100dvh',
                overflowY: 'auto',
                overscrollBehavior: 'contain',
              }}
            >
              {section.component}
            </section>
          </motion.div>
        </AnimatePresence>

        <style>{`
          .fp-section {
            scrollbar-width: thin;
            scrollbar-color: rgba(26, 26, 26, 0.18) transparent;
          }
          .fp-section::-webkit-scrollbar {
            width: 5px;
          }
          .fp-section::-webkit-scrollbar-track {
            background: transparent;
          }
          .fp-section::-webkit-scrollbar-thumb {
            background: rgba(26, 26, 26, 0.18);
            border-radius: 999px;
          }
          .fp-section::-webkit-scrollbar-thumb:hover {
            background: rgba(200, 67, 42, 0.5);
          }
        `}</style>

        {/* Side dot navigation */}
        <SideDots
          sections={sections.map((s) => ({ id: s.id, label: s.label }))}
          currentIndex={currentIndex}
          onNavigate={navigateTo}
        />

        {/* Section counter */}
        <SectionCounter currentIndex={currentIndex} total={sections.length} />

        {/* Progress bar */}
        <ProgressBar currentIndex={currentIndex} total={sections.length} />
      </div>
    </FullPageContext.Provider>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────
function ProgressBar({ currentIndex, total }: { currentIndex: number; total: number }) {
  const progress = ((currentIndex) / (total - 1)) * 100;
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(26,26,26,0.1)',
        zIndex: 9010,
      }}
    >
      <motion.div
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          height: '100%',
          background: '#C8432A',
          boxShadow: '0 0 6px rgba(200,67,42,0.5)',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}

// ─── Section Counter ──────────────────────────────────────────────────────────
function SectionCounter({ currentIndex, total }: { currentIndex: number; total: number }) {
  const current = String(currentIndex + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '28px',
        zIndex: 1000,
        fontFamily: "'Inter', sans-serif",
        fontSize: '9px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(26,26,26,0.4)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      <motion.span
        key={current}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ color: 'rgba(26,26,26,0.75)' }}
      >
        {current}
      </motion.span>
      <span>/</span>
      <span>{totalStr}</span>
    </div>
  );
}
