'use client';

import { useCallback, useEffect, useRef } from 'react';

export interface FullPageScrollConfig {
  /** Transition duration in ms */
  duration: number;
  /** CSS cubic-bezier easing array [x1, y1, x2, y2] */
  easing: [number, number, number, number];
  /** Minimum absolute deltaY to trigger a section change (filters momentum) */
  wheelThreshold: number;
  /** Cooldown in ms after a transition during which further input is ignored */
  cooldown: number;
  /** Minimum swipe distance in px to trigger a section change */
  swipeThreshold: number;
}

export const DEFAULT_CONFIG: FullPageScrollConfig = {
  duration: 900,
  easing: [0.77, 0, 0.175, 1],
  wheelThreshold: 30,
  cooldown: 950,
  swipeThreshold: 50,
};

interface UseFullPageScrollOptions {
  totalSections: number;
  currentIndex: number;
  isTransitioning: boolean;
  config: FullPageScrollConfig;
  onNavigate: (index: number) => void;
  activeSectionRef: React.RefObject<HTMLElement | null>;
}

export function useFullPageScroll({
  totalSections,
  currentIndex,
  isTransitioning,
  config,
  onNavigate,
  activeSectionRef,
}: UseFullPageScrollOptions) {
  const lastNavTime = useRef<number>(0);
  const lastInternalScrollTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchStartX = useRef<number>(0);
  const touchStartScrollTop = useRef<number>(0);

  const canNavigate = useCallback(() => {
    if (isTransitioning) return false;
    const now = Date.now();
    if (now - lastNavTime.current < config.cooldown) return false;
    return true;
  }, [isTransitioning, config.cooldown]);

  const navigate = useCallback(
    (direction: number) => {
      if (!canNavigate()) return;
      const next = currentIndex + direction;
      if (next < 0 || next >= totalSections) return;
      lastNavTime.current = Date.now();
      onNavigate(next);
    },
    [canNavigate, currentIndex, totalSections, onNavigate]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const el = activeSectionRef.current;
      const direction = e.deltaY > 0 ? 1 : -1;

      if (!el) {
        if (Math.abs(e.deltaY) < config.wheelThreshold) return;
        navigate(direction);
        return;
      }

      const maxScroll = el.scrollHeight - el.clientHeight;

      // If section content fits on screen (tolerance of 6px):
      if (maxScroll <= 6) {
        if (Math.abs(e.deltaY) < config.wheelThreshold) return;
        navigate(direction);
        return;
      }

      // The section is taller than the viewport and has cut-off content:
      const isAtBottom = el.scrollTop >= maxScroll - 4;
      const isAtTop = el.scrollTop <= 4;
      const now = Date.now();

      if (direction > 0) {
        // Scrolling DOWN
        if (!isAtBottom) {
          // Scroll the section down to show the cut-off part first
          el.scrollTop = Math.min(maxScroll, el.scrollTop + e.deltaY);
          lastInternalScrollTime.current = now;
          return;
        }

        // Already at bottom (user has reached the end of the section).
        // If the user just reached the bottom during this scroll gesture, buffer it so they can see the end
        if (now - lastInternalScrollTime.current < 300) {
          return;
        }

        // On the next intentional scroll after reaching the end, navigate to the next section
        if (Math.abs(e.deltaY) < config.wheelThreshold) return;
        navigate(1);
      } else {
        // Scrolling UP
        if (!isAtTop) {
          // Scroll the section back up towards the top
          el.scrollTop = Math.max(0, el.scrollTop + e.deltaY);
          lastInternalScrollTime.current = now;
          return;
        }

        // Already at top
        if (now - lastInternalScrollTime.current < 300) {
          return;
        }

        // On scroll up at top, navigate to the previous section
        if (Math.abs(e.deltaY) < config.wheelThreshold) return;
        navigate(-1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [navigate, config.wheelThreshold, activeSectionRef]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
      const el = activeSectionRef.current;
      touchStartScrollTop.current = el ? el.scrollTop : 0;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(deltaX) > Math.abs(deltaY)) return;
      if (Math.abs(deltaY) < config.swipeThreshold) return;

      const el = activeSectionRef.current;
      if (el) {
        const maxScroll = el.scrollHeight - el.clientHeight;
        if (maxScroll > 6) {
          if (deltaY > 0) {
            // Swiped up (moving down)
            const wasAtBottom = touchStartScrollTop.current >= maxScroll - 6;
            const isAtBottom = el.scrollTop >= maxScroll - 6;
            if (!wasAtBottom || !isAtBottom) {
              return;
            }
          } else {
            // Swiped down (moving up)
            const wasAtTop = touchStartScrollTop.current <= 6;
            const isAtTop = el.scrollTop <= 6;
            if (!wasAtTop || !isAtTop) {
              return;
            }
          }
        }
      }

      navigate(deltaY > 0 ? 1 : -1);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate, config.swipeThreshold, activeSectionRef]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const el = activeSectionRef.current;
      const maxScroll = el ? el.scrollHeight - el.clientHeight : 0;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          if (el && maxScroll > 6 && el.scrollTop < maxScroll - 6) {
            const step = e.key === 'ArrowDown' ? 120 : el.clientHeight * 0.8;
            el.scrollBy({ top: step, behavior: 'smooth' });
            lastInternalScrollTime.current = Date.now();
            return;
          }
          navigate(1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (el && maxScroll > 6 && el.scrollTop > 6) {
            const step = e.key === 'ArrowUp' ? -120 : -el.clientHeight * 0.8;
            el.scrollBy({ top: step, behavior: 'smooth' });
            lastInternalScrollTime.current = Date.now();
            return;
          }
          navigate(-1);
          break;
        case 'Home':
          e.preventDefault();
          if (canNavigate()) {
            lastNavTime.current = Date.now();
            onNavigate(0);
          }
          break;
        case 'End':
          e.preventDefault();
          if (canNavigate()) {
            lastNavTime.current = Date.now();
            onNavigate(totalSections - 1);
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, canNavigate, onNavigate, totalSections, activeSectionRef]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return { navigate };
}
