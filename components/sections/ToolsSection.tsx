'use client';

import React from 'react';
import { motion } from 'framer-motion';

const tools = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'WordPress', 'Shopify', 'Figma'];
const doubled = [...tools, ...tools];

export default function ToolsSection() {
  return (
    <div
      style={{
        background: '#E8E4DC',
        color: '#1A1A1A',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ width: '100%', maxWidth: '1140px', padding: '36px 0' }}>
        {/* Label pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '6px 20px',
              border: '1px solid rgba(26,26,26,0.08)', borderRadius: '999px',
              background: '#faf8f5',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
          >
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8432A', flexShrink: 0, display: 'block' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.52rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.55)', whiteSpace: 'nowrap' }}>
              Technologies &amp; Tools I Work With
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8432A', flexShrink: 0, display: 'block' }} />
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          style={{
            width: '100%', overflow: 'hidden',
            background: 'rgba(255,255,255,0.22)',
            borderTop: '1px solid rgba(26,26,26,0.13)',
            borderBottom: '1px solid rgba(26,26,26,0.13)',
            padding: '22px 0',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div
            style={{
              display: 'flex', alignItems: 'center',
              width: 'max-content',
              animation: 'tt-scroll 25s linear infinite',
            }}
          >
            {doubled.map((tool, i) => (
              <React.Fragment key={`${tool}-${i}`}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '0.76rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(26,26,26,0.85)', whiteSpace: 'nowrap',
                    cursor: 'default', flexShrink: 0,
                    transition: 'color 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.color = '#C8432A'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.color = 'rgba(26,26,26,0.85)'; (e.currentTarget as HTMLDivElement).style.transform = ''; }}
                >
                  {tool}
                </div>
                <div
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '1.8rem', margin: '0 1.8rem', flexShrink: 0,
                    alignSelf: 'stretch', position: 'relative',
                  }}
                >
                  <div style={{ width: '1px', height: '14px', background: 'rgba(26,26,26,0.15)' }} />
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8432A' }} />
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes tt-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
