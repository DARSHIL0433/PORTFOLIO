'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import WorksSection from '@/components/sections/WorksSection';
import StagesSection from '@/components/sections/StagesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function PageClient() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        background: '#E8E4DC',
        color: '#1A1A1A',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Top Scroll Progress Bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '2px',
          background: '#C8432A',
          boxShadow: '0 0 8px rgba(200,67,42,0.6)',
          zIndex: 9999,
          transition: 'width 0.1s linear',
          pointerEvents: 'none',
        }}
      />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="about" style={{ scrollMarginTop: '76px' }}>
        <AboutSection />
      </section>

      <section id="expertise" style={{ scrollMarginTop: '76px' }}>
        <ExpertiseSection />
      </section>

      <section id="works" style={{ scrollMarginTop: '76px' }}>
        <WorksSection />
      </section>

      <section id="stages" style={{ scrollMarginTop: '76px' }}>
        <StagesSection />
      </section>

      <section id="contact" style={{ scrollMarginTop: '76px' }}>
        <ContactSection />
      </section>
    </div>
  );
}
