'use client';

import React, { useState, useRef } from 'react';

interface Project {
  n: string; // Name
  c: string; // Accent Color
  k: string; // Kind
  y: number; // Year
  d: string; // Description
  s: string; // Stack / Built with
  a: number; // Art type (0, 1, 2)
  url: string; // Live Website URL
  image?: string;
  fit?: 'cover' | 'contain';
  bg?: string;
  location?: string;
  highlights?: string[];
}

const PROJECTS: Project[] = [
  {
    n: 'A&S Aesthetics',
    c: '#B86B64',
    k: 'Luxury Medical Aesthetics Clinic • London',
    y: 2026,
    d: 'A luxury medical aesthetics clinic website based in Knightsbridge, London. Designed to communicate clinical trust and high-end elegance with treatment showcases, online consultation booking, and complete treatment journey guides.',
    s: 'HTML5, CSS3, JavaScript, Booking UI, Responsive Architecture',
    a: 2,
    url: 'https://asaesthetics.co.uk/',
    image: '/assets/as-beauty-mockup.png',
    fit: 'cover',
    bg: '#F8F3ED',
    location: 'Knightsbridge, London',
    highlights: [
      'Treatment pages for skin rejuvenation, anti-wrinkle, fillers & laser therapy',
      'Online consultation and appointment booking functionality',
      'Step-by-step treatment journey and responsive mobile-first UI',
    ],
  },
  {
    n: 'OnwardWay',
    c: '#5B1949',
    k: 'Premium Travel & Tour Planning Platform',
    y: 2026,
    d: 'A premium travel and tour planning platform designed for personalized travel experiences. Showcases customized vacation packages, international destinations, and dedicated vegetarian food services during group tours.',
    s: 'HTML5, CSS3, JavaScript, Custom Tour UI, Responsive Layout',
    a: 0,
    url: 'https://onwardway.com/',
    image: '/assets/onwardway-travel-mockup.png',
    fit: 'cover',
    bg: '#F5ECF3',
    location: 'Global / International Tours',
    highlights: [
      'Curated international tour packages & custom itinerary planning',
      'Dedicated sections for Family Vacations, Group Tours & Luxury Travel',
      '“Every Ticket, A Story” testimonials and vegetarian food services info',
    ],
  },
  {
    n: 'Sisä Skincare',
    c: '#C26E54',
    k: 'Skincare & Aesthetic Clinic • Freshwater, Sydney',
    y: 2026,
    d: 'A premium skincare and aesthetic clinic website in Freshwater, Sydney. Showcases professional skin therapies (Morpheus8, Lumecca IPL, Alma Hybrid Laser), online consultation bookings, and an integrated product store.',
    s: 'HTML5, CSS3, JavaScript, Product Catalog, Booking Funnel, Responsive UI',
    a: 1,
    url: 'http://sisaskincare.com.au/',
    image: '/assets/sisa-skincare-mockup.png',
    fit: 'cover',
    bg: '#FAF2ED',
    location: 'Freshwater, Sydney',
    highlights: [
      'Advanced laser & skin treatment guides (Morpheus8, Lumecca, Alma Hybrid)',
      'Online appointment booking and personalized consultation workflow',
      'Integrated skincare product shop with category filtering & reviews',
    ],
  },
];

function ArtSvg({ type, color }: { type: number; color: string }) {
  const k = '#15130F';
  const w = '#FBF8F0';

  if (type === 0) {
    return (
      <svg viewBox="0 0 400 260" aria-hidden="true" style={{ display: 'block', width: '100%', height: 'auto' }}>
        <circle cx="330" cy="50" r="90" fill="#fff" opacity=".08" />
        <rect x="150" y="22" width="100" height="216" rx="20" fill={w} />
        <circle cx="200" cy="96" r="32" fill="none" stroke={color} strokeOpacity=".2" strokeWidth="11" />
        <path d="M200 64a32 32 0 1 1-30 44" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" />
        {[150, 174, 198].map(y => (
          <rect key={y} x="164" y={y} width="72" height="16" rx="5" fill={color} opacity=".16" />
        ))}
        <rect x="40" y="70" width="70" height="9" rx="4" fill="#fff" opacity=".7" />
        <rect x="40" y="88" width="48" height="7" rx="3" fill="#fff" opacity=".35" />
        <rect x="290" y="170" width="70" height="9" rx="4" fill="#fff" opacity=".7" />
        <rect x="304" y="188" width="56" height="7" rx="3" fill="#fff" opacity=".35" />
      </svg>
    );
  }

  if (type === 1) {
    return (
      <svg viewBox="0 0 400 260" aria-hidden="true" style={{ display: 'block', width: '100%', height: 'auto' }}>
        <rect x="36" y="28" width="328" height="206" rx="12" fill={w} />
        <rect x="36" y="28" width="62" height="206" rx="12" fill={color} opacity=".14" />
        {[0, 1, 2].map(i => (
          <rect key={i} x={114 + i * 82} y="46" width="72" height="44" rx="8" fill={color} opacity={0.12 + i * 0.1} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <rect
            key={i}
            x={118 + i * 30}
            y={214 - ((i * 31) % 80 + 30)}
            width="20"
            height={(i * 31) % 80 + 30}
            rx="4"
            fill={color}
            opacity={0.4 + i * 0.08}
          />
        ))}
        <path d="M118 150l36-28 32 14 42-42 42 18 44-24" fill="none" stroke={k} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 260" aria-hidden="true" style={{ display: 'block', width: '100%', height: 'auto' }}>
      <rect x="36" y="28" width="328" height="206" rx="12" fill={w} />
      <rect x="36" y="28" width="328" height="24" rx="12" fill={k} opacity=".08" />
      <rect x="150" y="52" width="214" height="102" fill={color} opacity=".85" />
      <circle cx="286" cy="104" r="28" fill={w} opacity=".6" />
      <rect x="58" y="78" width="74" height="10" rx="4" fill={k} opacity=".85" />
      <rect x="58" y="98" width="66" height="6" rx="3" fill={k} opacity=".25" />
      <rect x="58" y="112" width="50" height="6" rx="3" fill={k} opacity=".25" />
      <rect x="58" y="130" width="48" height="16" rx="8" fill={color} />
      {[0, 1, 2, 3].map(i => (
        <rect key={i} x={58 + i * 76} y="170" width="66" height="50" rx="6" fill={color} opacity={0.18 + i * 0.14} />
      ))}
    </svg>
  );
}

export default function WorksSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    const wasOpen = openIndex === i;
    const hadOtherOpen = openIndex !== null && !wasOpen;
    setOpenIndex(wasOpen ? null : i);

    if (!wasOpen) {
      setTimeout(
        () => {
          itemRefs.current[i]?.scrollIntoView({ block: 'start', behavior: 'smooth' });
        },
        hadOtherOpen ? 650 : 150
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (i + 1) % PROJECTS.length;
      rowRefs.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (i - 1 + PROJECTS.length) % PROJECTS.length;
      rowRefs.current[prev]?.focus();
    }
  };

  return (
    <div className="works-accordion-section">
      <style>{`
        .works-accordion-section {
          --bg: #E8E2D8;
          --ink: #15130F;
          --mute: #6C675C;
          --line: #15130F33;
          --brass: #A8812F;
          --card: #F3EFE6;
          --out: #15130F73;
          box-sizing: border-box;
          background: var(--bg) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.8' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 .3 0 0 0 0 .25 0 0 0 0 .15 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
          color: var(--ink);
          font-family: 'Inter Tight', system-ui, -apple-system, sans-serif;
          line-height: 1.6;
          width: 100%;
          position: relative;
        }

        .works-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 24px 32px 70px;
        }

        .works-header {
          padding: 32px 0 44px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--ink);
        }

        .works-h2 {
          margin: 0;
          font: 400 clamp(2.4rem, 6.5vw, 5.4rem) / .95 'Bebas Neue', Impact, sans-serif;
          letter-spacing: .025em;
        }

        .works-h2 .ln {
          display: block;
          overflow: hidden;
        }

        .works-h2 .ln b {
          display: block;
          font-weight: 400;
          transform: translateY(104%);
          animation: worksUp 1.1s cubic-bezier(.2, .8, .2, 1) forwards;
        }

        .works-h2 .ln:nth-child(2) b {
          animation-delay: .14s;
        }

        .works-h2 .o {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--out);
        }

        .works-h2 sup {
          font: 500 1rem 'Inter Tight', sans-serif;
          letter-spacing: 0;
          color: var(--brass);
          margin-left: 10px;
          vertical-align: top;
          position: relative;
          top: .9em;
        }

        @keyframes worksUp {
          to {
            transform: none;
          }
        }

        .works-header p {
          margin: 0;
          max-width: 28ch;
          color: var(--mute);
        }

        .works-list {
          width: 100%;
        }

        .works-item {
          border-bottom: 1px solid var(--line);
          scroll-margin-top: 12px;
          opacity: 0;
          transform: translateY(14px);
          animation: worksIn .8s cubic-bezier(.2, .8, .2, 1) forwards;
          animation-delay: calc(.55s + var(--i) * .09s);
        }

        @keyframes worksIn {
          to {
            opacity: 1;
            transform: none;
          }
        }

        .works-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 24px;
          width: 100%;
          padding: 22px 24px 18px;
          border: 0;
          background: none;
          color: var(--ink);
          font: inherit;
          text-align: left;
          cursor: pointer;
          overflow: hidden;
          transition: background .5s;
        }

        .works-kind {
          font-weight: 500;
          font-size: .95rem;
          color: var(--mute);
        }

        .works-name {
          font: 400 clamp(2rem, 5.5vw, 4.4rem) / 1 'Bebas Neue', Impact, sans-serif;
          letter-spacing: .02em;
          color: var(--ink);
          -webkit-text-stroke: 1.5px transparent;
          transition: color .55s, -webkit-text-stroke-color .55s, letter-spacing .7s cubic-bezier(.2, .8, .2, 1);
        }

        .works-end {
          display: flex;
          align-items: center;
          gap: 26px;
          font-size: .95rem;
        }

        .works-arrow {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1.5px solid var(--ink);
          display: grid;
          place-items: center;
          transition: background .4s, color .4s, transform .7s cubic-bezier(.77, 0, .18, 1);
        }

        .works-arrow svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .works-line {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: var(--brass);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .8s cubic-bezier(.77, 0, .18, 1);
        }

        /* spotlight: the row you point at stays solid, the others become outlines */
        @media (hover: hover) {
          .works-list:has(.works-row:hover) .works-item:not(:hover) .works-name {
            color: transparent;
            -webkit-text-stroke-color: var(--out);
          }

          .works-row:hover .works-name {
            letter-spacing: .045em;
          }

          .works-row:hover .works-line {
            transform: scaleX(1);
          }

          .works-row:hover .works-arrow {
            background: var(--ink);
            color: var(--bg);
          }
        }

        .works-list.has-open .works-item:not(.open) .works-name {
          color: transparent;
          -webkit-text-stroke-color: var(--out);
        }

        @media (hover: hover) {
          .works-list.has-open:has(.works-row:hover) .works-item:hover .works-name {
            color: var(--ink);
            -webkit-text-stroke-color: transparent;
          }
        }

        .works-item.open .works-row {
          background: var(--card);
        }

        .works-item.open .works-name {
          color: var(--c);
        }

        .works-item.open .works-line {
          transform: scaleX(1);
        }

        .works-item.open .works-arrow {
          transform: rotate(90deg);
          background: var(--ink);
          color: var(--bg);
        }

        .works-row:focus-visible {
          outline: 3px solid var(--brass);
          outline-offset: -3px;
        }

        .works-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .9s cubic-bezier(.77, 0, .18, 1);
        }

        .works-item.open .works-panel {
          grid-template-rows: 1fr;
        }

        .works-pin {
          overflow: hidden;
          min-height: 0;
          background: var(--card);
        }

        .works-cols {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 60px;
          padding: 40px 24px 60px;
        }

        .works-cols > div:first-child > * {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .5s, transform .7s cubic-bezier(.2, .8, .2, 1);
        }

        .works-item.open .works-cols > div:first-child > * {
          opacity: 1;
          transform: none;
        }

        .works-item.open .works-cols > div:first-child > :nth-child(1) {
          transition-delay: .35s;
        }

        .works-item.open .works-cols > div:first-child > :nth-child(2) {
          transition-delay: .45s;
        }

        .works-item.open .works-cols > div:first-child > :nth-child(3) {
          transition-delay: .55s;
        }

        .works-item.open .works-cols > div:first-child > :nth-child(4) {
          transition-delay: .65s;
        }

        .works-desc {
          margin: 0 0 24px;
          font: 500 1.15rem / 1.5 'Inter Tight', sans-serif;
          max-width: 34ch;
        }

        .works-stats {
          display: flex;
          gap: 40px;
          padding: 16px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          margin-bottom: 6px;
        }

        .works-stats b {
          display: block;
          font: 400 3.2rem / 1 'Bebas Neue', sans-serif;
          letter-spacing: .02em;
          color: var(--c);
        }

        .works-stats span {
          font-size: .85rem;
          color: var(--mute);
        }

        .works-dl {
          margin: 0 0 28px;
          font-size: .95rem;
        }

        .works-dl div {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 14px;
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
        }

        .works-dl dt {
          color: var(--mute);
        }

        .works-dl dd {
          margin: 0;
          font-weight: 500;
        }

        .works-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .works-btn {
          font: 500 .95rem 'Inter Tight', sans-serif;
          padding: 14px 28px;
          border-radius: 99px;
          text-decoration: none;
          background: var(--ink);
          color: var(--bg);
          transition: transform .3s;
          display: inline-block;
        }

        .works-btn.o2 {
          background: none;
          color: var(--ink);
          box-shadow: inset 0 0 0 1.5px var(--ink);
        }

        .works-btn:hover {
          transform: translateY(-2px);
        }

        .works-btn:focus-visible {
          outline: 3px solid var(--brass);
          outline-offset: 3px;
        }

        .works-highlights {
          margin: 0 0 24px;
          padding: 16px 18px;
          background: rgba(255, 255, 255, 0.45);
          border: 1px solid var(--line);
          border-radius: 8px;
        }

        .works-hl-title {
          font-size: .78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: var(--mute);
          margin-bottom: 10px;
        }

        .works-hl-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .works-hl-item {
          font-size: .88rem;
          line-height: 1.45;
          color: var(--ink);
          display: flex;
          align-items: flex-start;
          gap: 9px;
        }

        .works-hl-check {
          font-weight: 700;
          line-height: 1.3;
          flex-shrink: 0;
        }

        /* Modal Styles */
        .works-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(21, 19, 15, 0.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 10000;
          display: grid;
          place-items: center;
          padding: 24px 16px;
          animation: worksModalFadeIn .3s ease forwards;
        }

        @keyframes worksModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .works-modal-dialog {
          background: #F8F5EE;
          color: var(--ink);
          width: 100%;
          max-width: 780px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 16px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          position: relative;
          border: 1px solid rgba(21, 19, 15, 0.15);
          animation: worksModalPop .35s cubic-bezier(.16, 1, .3, 1) forwards;
        }

        @keyframes worksModalPop {
          from { opacity: 0; transform: scale(.95) translateY(12px); }
          to { opacity: 1; transform: none; }
        }

        .works-modal-close {
          position: absolute;
          top: 18px;
          right: 20px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(21, 19, 15, 0.2);
          background: #fff;
          color: var(--ink);
          font-size: 1.4rem;
          line-height: 1;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: background .2s, transform .2s;
          z-index: 2;
        }

        .works-modal-close:hover {
          background: var(--ink);
          color: #fff;
          transform: rotate(90deg);
        }

        .works-modal-header {
          padding: 32px 32px 18px;
          border-bottom: 1px solid var(--line);
        }

        .works-modal-badge {
          display: inline-block;
          font-size: .75rem;
          text-transform: uppercase;
          letter-spacing: .08em;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 99px;
          border: 1.5px solid currentColor;
          margin-bottom: 10px;
        }

        .works-modal-title {
          font: 400 clamp(2rem, 5vw, 3.2rem)/1 'Bebas Neue', Impact, sans-serif;
          letter-spacing: .02em;
          margin: 0 0 6px;
        }

        .works-modal-loc {
          font-size: .9rem;
          color: var(--mute);
          margin: 0;
        }

        .works-modal-image-wrap {
          padding: 16px;
          border-bottom: 1px solid var(--line);
        }

        .works-modal-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          display: block;
        }

        .works-modal-body {
          padding: 28px 32px 36px;
        }

        .works-modal-section {
          margin-bottom: 24px;
        }

        .works-modal-section h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 10px;
          letter-spacing: -.01em;
        }

        .works-modal-section p {
          margin: 0;
          font-size: .98rem;
          line-height: 1.6;
          color: #2D2A26;
        }

        .works-modal-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid var(--line);
          border-radius: 10px;
          margin-bottom: 24px;
        }

        .works-modal-stat-box {
          text-align: center;
        }

        .works-modal-stat-num {
          display: block;
          font: 400 2.4rem/1 'Bebas Neue', sans-serif;
          letter-spacing: .02em;
        }

        .works-modal-stat-label {
          font-size: .8rem;
          color: var(--mute);
          text-transform: uppercase;
          letter-spacing: .05em;
        }

        .works-modal-features-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .works-modal-features-list li {
          font-size: .93rem;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .feat-check {
          font-weight: 800;
          font-size: 1rem;
          line-height: 1.3;
          flex-shrink: 0;
        }

        .works-modal-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          padding: 16px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          margin-bottom: 24px;
          font-size: .9rem;
        }

        .works-modal-meta strong {
          display: block;
          font-size: .75rem;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: var(--mute);
          margin-bottom: 2px;
        }

        .works-modal-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .works-shot {
          align-self: start;
          padding: 12px;
          background: #ffffff99;
          box-shadow: 0 0 0 1px var(--line);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .5s .2s, transform .9s cubic-bezier(.2, .8, .2, 1) .2s;
        }

        .works-item.open .works-shot {
          opacity: 1;
          transform: none;
        }

        .works-im {
          position: relative;
          overflow: hidden;
          background: var(--c);
          display: block;
        }

        .works-im svg,
        .works-im img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 400 / 260;
          transform: scale(1.22);
          transition: transform 1.6s cubic-bezier(.2, .8, .2, 1) .4s;
        }

        .works-item.open .works-im svg,
        .works-item.open .works-im img {
          transform: none;
        }

        .works-im::after {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--ink);
          transform-origin: right;
          transition: transform 1s cubic-bezier(.77, 0, .18, 1) .4s;
        }

        .works-item.open .works-im::after {
          transform: translateX(101%);
        }

        @media (max-width: 860px) {
          .works-wrap {
            padding: 20px 18px 70px;
          }

          .works-header {
            padding: 48px 0 36px;
          }

          .works-row {
            grid-template-columns: 1fr auto;
            padding: 18px 6px 14px;
            gap: 12px;
          }

          .works-kind {
            display: none;
          }

          .works-end span {
            display: none;
          }

          .works-arrow {
            width: 44px;
            height: 44px;
          }

          .works-cols {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 28px 6px 40px;
          }

          .works-cols > .works-shot {
            order: -1;
          }

          .works-stats b {
            font-size: 2.6rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            transition-duration: .01s !important;
            transition-delay: 0s !important;
            animation-duration: .01s !important;
            animation-delay: 0s !important;
          }
        }
      `}</style>

      <main className="works-wrap">
        <header className="works-header">
          <h2 className="works-h2">
            <span className="ln">
              <b>Selected work</b>
            </span>
            <span className="ln">
              <b className="o">
                and case studies<sup>({String(PROJECTS.length).padStart(2, '0')})</sup>
              </b>
            </span>
          </h2>
          <p>Select a project to read how it was made.</p>
        </header>

        <div className={`works-list ${openIndex !== null ? 'has-open' : ''}`} id="works-list">
          {PROJECTS.map((p, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={p.n}
                ref={el => {
                  itemRefs.current[i] = el;
                }}
                className={`works-item ${isOpen ? 'open' : ''}`}
                style={
                  {
                    '--c': p.c,
                    '--i': i,
                  } as React.CSSProperties
                }
              >
                <button
                  ref={el => {
                    rowRefs.current[i] = el;
                  }}
                  className="works-row"
                  id={`works-r${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`works-p${i}`}
                  onClick={() => toggle(i)}
                  onKeyDown={e => handleKeyDown(e, i)}
                >
                  <span className="works-name">{p.n}</span>
                  <span className="works-end">
                    <span className="works-arrow">
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </span>
                  <span className="works-line"></span>
                </button>

                <div className="works-panel" id={`works-p${i}`} role="region" aria-labelledby={`works-r${i}`}>
                  <div className="works-pin">
                    <div className="works-cols">
                      <div>
                        <p className="works-desc">{p.d}</p>
                        <dl className="works-dl">
                          <div>
                            <dt>Built with</dt>
                            <dd>{p.s}</dd>
                          </div>
                        </dl>
                        {p.highlights && p.highlights.length > 0 && (
                          <div className="works-highlights">
                            <div className="works-hl-title">Key Highlights</div>
                            <ul className="works-hl-list">
                              {p.highlights.map((hl, hIdx) => (
                                <li key={hIdx} className="works-hl-item">
                                  <span className="works-hl-check" style={{ color: p.c }}>
                                    ✓
                                  </span>
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="works-btns">
                          <a
                            className="works-btn"
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Live Site ↗
                          </a>
                          <a className="works-btn o2" href="#contact">
                            Let&apos;s build this
                          </a>
                        </div>
                      </div>

                      <div className="works-shot">
                        <span
                          className="works-im"
                          style={{
                            background: p.bg || p.c,
                          }}
                        >
                          {p.image ? (
                            <img
                              src={p.image}
                              alt={p.n}
                              style={{
                                objectFit: p.fit || 'cover',
                                objectPosition: 'center',
                                background: p.bg || 'transparent',
                              }}
                            />
                          ) : (
                            <ArtSvg type={p.a} color={p.c} />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
