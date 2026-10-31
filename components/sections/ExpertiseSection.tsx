'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    num: '01',
    title: 'WEB DEVELOPMENT',
    items: [
      {
        name: 'HTML / CSS',
        body: 'Building semantic, accessible markup and pixel-perfect styling with modern CSS — Flexbox, Grid, animations, and clean responsive layouts.',
      },
      {
        name: 'JavaScript',
        body: 'Interactive, dynamic web experiences with vanilla JavaScript — DOM manipulation, APIs, form validation, and smooth client-side logic.',
      },
      {
        name: 'PHP',
        body: 'Server-side development for dynamic websites, custom backends, form handling, and database-driven web applications.',
      },
      {
        name: 'Responsive Design',
        body: 'Websites that look and work flawlessly across mobile, tablet, and desktop with fluid layouts and optimised breakpoints.',
      },
      {
        name: 'Custom Development',
        body: 'Tailored web solutions built from scratch to match your exact business needs — no templates, no compromises.',
      },
    ],
  },
  {
    num: '02',
    title: 'CMS & ECOMMERCE',
    items: [
      {
        name: 'WordPress',
        body: 'Full WordPress development including custom themes, plugin integration, and content-managed sites clients can easily update.',
      },
      {
        name: 'WooCommerce',
        body: 'Complete e-commerce stores with product catalogs, payment gateways, cart flows, and order management on WordPress.',
      },
      {
        name: 'Shopify',
        body: 'Professional Shopify store setup, theme customization, and conversion-optimised product pages for online retail.',
      },
      {
        name: 'Elementor',
        body: 'Visually rich pages built and customized with Elementor while maintaining clean structure and fast performance.',
      },
      {
        name: 'Theme Customization',
        body: 'Modifying and extending existing themes to perfectly match your brand identity and functional requirements.',
      },
    ],
  },
  {
    num: '03',
    title: 'DESIGN',
    items: [
      {
        name: 'UI/UX Design',
        body: 'User-centered interfaces that balance aesthetics with intuitive navigation and delightful user experiences.',
      },
      {
        name: 'Wireframing',
        body: 'Low-fidelity layouts that map out structure, content hierarchy, and user flows before visual design begins.',
      },
      {
        name: 'Figma',
        body: 'High-fidelity designs, component libraries, and collaborative prototypes crafted in Figma for developer handoff.',
      },
      {
        name: 'Prototyping',
        body: 'Interactive mockups that let you test ideas and user journeys early — saving time and reducing revisions later.',
      },
      {
        name: 'User Research',
        body: 'Understanding your audience through research to inform design decisions that improve engagement and conversion.',
      },
    ],
  },
  {
    num: '04',
    title: 'AUTOMATION',
    items: [
      {
        name: 'AI Automation',
        body: 'Leveraging AI tools to automate repetitive tasks, generate content, and streamline business workflows intelligently.',
      },
      {
        name: 'Workflow Systems',
        body: 'End-to-end automated pipelines connecting apps, triggers, and actions to eliminate manual work.',
      },
      {
        name: 'ChatGPT Integrations',
        body: 'Custom AI chatbots and GPT-powered features integrated directly into websites and business tools.',
      },
      {
        name: 'Make (Integromat)',
        body: 'No-code automation scenarios built on Make to connect services, sync data, and run processes automatically.',
      },
      {
        name: 'Business Automation',
        body: 'Holistic automation strategies that reduce costs, increase efficiency, and scale operations without extra headcount.',
      },
    ],
  },
];

function AccordionList({ items }: { items: { name: string; body: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <ul style={{ listStyle: 'none', margin: '14px 0 0', borderTop: '1px solid rgba(26,26,26,0.12)', padding: 0 }}>
      {items.map((item, i) => (
        <li
          key={item.name}
          style={{ borderBottom: '1px solid rgba(26,26,26,0.12)', cursor: 'pointer', position: 'relative' }}
          onClick={() => setOpenIdx(openIdx === i ? null : i)}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              padding: '10px 0',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                color: openIdx === i ? '#C8432A' : 'rgba(26,26,26,0.62)',
                transition: 'color 0.25s',
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.05rem',
                color: openIdx === i ? '#C8432A' : 'rgba(26,26,26,0.35)',
                lineHeight: 1,
                transition: 'transform 0.4s cubic-bezier(.23,1,.32,1), color 0.25s',
                transform: openIdx === i ? 'rotate(45deg)' : 'none',
                flexShrink: 0,
              }}
            >
              +
            </span>
          </div>
          <motion.div
            animate={{ height: openIdx === i ? 'auto' : 0, opacity: openIdx === i ? 1 : 0 }}
            initial={false}
            transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.76rem',
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(26,26,26,0.58)',
                padding: '8px 0 10px',
              }}
            >
              {item.body}
            </div>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
});

export default function ExpertiseSection() {
  return (
    <div
      style={{
        background: '#E8E4DC',
        color: '#1A1A1A',
        minHeight: '100%',
        padding: 'clamp(24px, 4vh, 44px) 28px',
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1140px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Frame */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
        style={{
          border: '1px solid rgba(26,26,26,0.22)',
          padding: '24px 24px 16px',
          background: 'rgba(232,228,220,0.4)',
          margin: 'auto 0',
        }}
      >
        {/* Top */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'start', gap: '28px' }}>
          <div style={{ lineHeight: 0.9 }}>
            <motion.span
              {...fadeUp(0.1)}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.6rem,3.2vw,2.8rem)',
                letterSpacing: '0.02em',
                color: 'transparent',
                WebkitTextStroke: '1.2px rgba(26,26,26,0.22)',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              MY
            </motion.span>
            <motion.span
              {...fadeUp(0.18)}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2rem,3.8vw,3.6rem)',
                letterSpacing: '0.02em',
                color: 'rgba(26,26,26,0.86)',
                display: 'block',
              }}
            >
              EXPERTISE
            </motion.span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', justifyContent: 'flex-end' }}>
            <motion.p
              {...fadeUp(0.22)}
              style={{
                maxWidth: '260px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.72rem',
                lineHeight: 1.55,
                color: 'rgba(26,26,26,0.58)',
                marginTop: '10px',
              }}
            >
              I combine creativity and technology to build powerful solutions that solve real problems.
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] as [number, number, number, number], delay: 0.3 }}
          style={{ height: '1px', background: 'rgba(26,26,26,0.18)', margin: '24px 0 0', transformOrigin: 'left' }}
        />

        {/* Grid */}
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'rgba(26,26,26,0.16)',
            }}
          />
          {expertiseData.map((cat, ci) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                delay: 0.12 * ci + 0.3,
              }}
              style={{
                padding: '14px 14px 10px',
                ...(ci < 2 ? { borderBottom: '1px solid rgba(26,26,26,0.16)' } : {}),
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    border: '1px solid rgba(26,26,26,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.58rem',
                    letterSpacing: '0.12em',
                    color: 'rgba(26,26,26,0.55)',
                  }}
                >
                  {cat.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '0.92rem',
                    letterSpacing: '0.08em',
                    color: 'rgba(26,26,26,0.82)',
                    marginTop: '4px',
                    flex: 1,
                    paddingLeft: '8px',
                  }}
                >
                  {cat.title}
                </div>
              </div>
              <AccordionList items={cat.items} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
