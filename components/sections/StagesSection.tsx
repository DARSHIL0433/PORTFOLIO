'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const stagesData = [
  {
    num: 'FAQ 01',
    title: 'DO YOU BUILD CUSTOM WEBSITES OR USE PRE-MADE TEMPLATES?',
    body: 'I build custom, tailored websites coded from scratch with clean HTML, CSS, JavaScript, and PHP, as well as bespoke CMS architectures. Every site is designed around your unique brand identity and business objectives — ensuring zero template bloat, optimal performance, and high conversion.',
  },
  {
    num: 'FAQ 02',
    title: 'WHICH CMS & E-COMMERCE PLATFORMS DO YOU SPECIALIZE IN?',
    body: 'I have extensive expertise with WordPress, WooCommerce, and Shopify, as well as page builders like Elementor. Whether you need a custom WordPress theme, an advanced e-commerce store with secure payment gateways, or a high-converting Shopify store, I develop scalable and reliable solutions.',
  },
  {
    num: 'FAQ 03',
    title: 'WILL MY WEBSITE BE FULLY RESPONSIVE ACROSS ALL DEVICES?',
    body: 'Yes, absolutely. Every project is developed with a mobile-first philosophy, fluid responsive grids, and rigorous cross-device testing. Your website will adapt seamlessly and deliver a fast, frictionless experience on smartphones, tablets, laptops, and ultra-wide desktops.',
  },
  {
    num: 'FAQ 04',
    title: 'CAN I EASILY UPDATE AND MANAGE CONTENT ONCE THE SITE IS LIVE?',
    body: 'Yes. Whether on WordPress, Shopify, or a headless setup, I configure intuitive admin dashboards with customized fields. You and your team can easily update text, swap images, create new pages, or add products without touching code. Full documentation and handoff training are included.',
  },
  {
    num: 'FAQ 05',
    title: 'HOW DO YOU ENSURE FAST LOADING SPEEDS AND SEO OPTIMIZATION?',
    body: 'Speed and SEO are core pillars of my development workflow. I write semantic HTML5 markup, implement lazy loading, optimize images and assets, minimize render-blocking scripts, and follow Core Web Vitals best practices to ensure fast page loads and strong search engine rankings.',
  },
  {
    num: 'FAQ 06',
    title: 'CAN YOU INTEGRATE AI CHATBOTS AND WORKFLOW AUTOMATIONS?',
    body: 'Yes! Beyond frontend development, I build end-to-end automated pipelines using Make (Integromat), OpenAI / ChatGPT integrations, and custom webhook connections. This enables automatic lead capture, CRM syncing, customer notifications, and automated workflows that save you hours every week.',
  },
];

export default function StagesSection() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <div
      style={{
        background: '#E8E4DC',
        color: '#1A1A1A',
        minHeight: '100%',
        padding: 'clamp(28px, 5vh, 48px) 28px',
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1140px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
      }}
    >
      <div style={{ margin: 'auto 0', width: '100%', position: 'relative' }}>
      {/* Ghost bg number */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        aria-hidden="true"
        style={{
          position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)',
          fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(9rem, 15vw, 14rem)',
          color: 'transparent', WebkitTextStroke: '1px rgba(26,26,26,0.04)',
          pointerEvents: 'none', userSelect: 'none', lineHeight: 1,
        }}
      >
        {String(openIdx + 1).padStart(2, '0')}
      </motion.div>

      {/* Heading matching the other sections (Selected Work / Expertise) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          maxWidth: '1040px',
          margin: '0 auto 28px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '24px',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(26,26,26,0.18)',
          paddingBottom: '28px',
        }}
      >
        <div style={{ lineHeight: 0.92 }}>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.4rem, 5.8vw, 4.8rem)',
              letterSpacing: '0.025em',
              color: '#1A1A1A',
            }}
          >
            FREQUENTLY ASKED
          </div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.4rem, 5.8vw, 4.8rem)',
              letterSpacing: '0.025em',
              color: 'transparent',
              WebkitTextStroke: '1.5px #1A1A1A',
              display: 'flex',
              alignItems: 'baseline',
            }}
          >
            QUESTIONS
            <span
              style={{
                fontSize: '0.38em',
                verticalAlign: 'super',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                letterSpacing: 0,
                color: '#6C675C',
                WebkitTextStroke: '0px',
                marginLeft: '12px',
              }}
            >
              ({String(stagesData.length).padStart(2, '0')})
            </span>
          </div>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 'clamp(0.88rem, 1vw, 1rem)',
            color: '#6C675C',
            maxWidth: '32ch',
            lineHeight: 1.5,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
          }}
        >
          Answers to common questions about my development workflow, tech stack, and services.
        </p>
      </motion.div>

      {/* List */}
      <div style={{ maxWidth: '1040px', margin: '0 auto', width: '100%' }}>
        {stagesData.map((stage, i) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 }}
            onClick={() => setOpenIdx(i)}
            style={{
              display: 'grid', gridTemplateColumns: 'clamp(72px, 8vw, 90px) 1fr 32px',
              alignItems: 'center', gap: '24px',
              padding: '18px 0', borderBottom: '1px solid rgba(26,26,26,0.13)',
              ...(i === 0 ? { borderTop: '1px solid rgba(26,26,26,0.13)' } : {}),
              cursor: 'pointer', position: 'relative',
              transition: 'padding-left 0.35s cubic-bezier(.23,1,.32,1)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '8px'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '0'; }}
          >
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.74rem', letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: openIdx === i ? '#C8432A' : 'rgba(26,26,26,0.38)',
              transition: 'color 0.3s',
            }}>
              {stage.num}
            </div>
            <div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: openIdx === i ? '#C8432A' : '#1A1A1A',
                transition: 'color 0.25s, letter-spacing 0.35s',
                letterSpacing: openIdx === i ? '0.12em' : '0.08em',
              }}>
                {stage.title}
              </div>
              <motion.div
                animate={{ height: openIdx === i ? 'auto' : 0, opacity: openIdx === i ? 1 : 0 }}
                initial={false}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.92rem, 1.05vw, 1.02rem)', fontWeight: 350, lineHeight: 1.85, color: 'rgba(26,26,26,0.68)', paddingTop: '12px', paddingBottom: '6px' }}>
                  {stage.body}
                </div>
              </motion.div>
            </div>
            <div style={{
              fontSize: '1.35rem', color: openIdx === i ? '#C8432A' : 'rgba(26,26,26,0.35)',
              textAlign: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 300,
              transition: 'transform 0.4s cubic-bezier(.23,1,.32,1), color 0.25s',
              transform: openIdx === i ? 'rotate(45deg)' : 'none', lineHeight: 1,
            }}>
              +
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
}
