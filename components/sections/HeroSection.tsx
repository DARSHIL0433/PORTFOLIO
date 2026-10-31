'use client';

import React, { useState } from 'react';

const marqueeItems = [
  'Web Development',
  'React.js',
  'Next.js',
  'WordPress',
  'Shopify',
  'WooCommerce',
  'JavaScript (ES6+)',
  'PHP',
  'UI/UX Design',
  'Tailwind CSS',
  'Figma',
  'HTML5 / CSS3',
  'REST APIs',
  'Custom Applications',
];

export default function HeroSection() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const goToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-wrapper">
      {/* ═══ FIXED HEADER / NAVBAR ═══ */}
      <header className="hero-site-header">
        <div className="hero-header-inner">
          {/* Logo / Name */}
          <button
            onClick={() => goToSection('hero')}
            className="hero-logo-btn"
          >
            <span className="hero-logo-icon" />
            <span className="hero-logo-text">Darshil Desai</span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hero-header-nav">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Expertise', id: 'expertise' },
              { label: 'Work', id: 'works' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goToSection(id)}
                onMouseEnter={() => setHoveredNav(id)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`hero-header-link ${hoveredNav === id ? 'is-hovered' : ''}`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Download CV & Mobile Toggle */}
          <div className="hero-header-right">
            <a
              href="/assets/Darshil_Desai_Resume.pdf"
              download="Darshil_Desai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-download-cv"
            >
              <span className="hero-cv-dot" />
              <span>Download CV ↗</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hero-mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="hero-mobile-menu">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Expertise', id: 'expertise' },
              { label: 'Work', id: 'works' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goToSection(id)}
                className="hero-mobile-menu-item"
              >
                {label}
              </button>
            ))}
            <a
              href="/assets/Darshil_Desai_Resume.pdf"
              download="Darshil_Desai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-mobile-cv"
            >
              Download CV ↗
            </a>
          </div>
        )}
      </header>

      {/* ═══ HERO SECTION ═══ */}
      <section className="hero" id="home" aria-label="Introduction">
        <div className="stage">
          <p className="eyebrow">FULL STACK</p>
          <span className="eyebrow-line" aria-hidden="true" />

          <h1 aria-label="Web Developer" style={{ display: 'contents' }}>
            <span className="title-web" aria-hidden="true">Web</span>
            <span className="title-dev" aria-hidden="true">Developer</span>
          </h1>

          <ul className="steps">
            <li>IDEAS</li>
            <li>DESIGN</li>
            <li>DEVELOP</li>
            <li>DELIVER</li>
          </ul>
          <span className="steps-line" aria-hidden="true" />

          <p className="intro">
            Hi, I’m <strong>Darshil Desai</strong> — a Full Stack Developer<br />
            who builds modern, user-focused websites<br />
            and digital products.
          </p>

          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              goToSection('works');
            }}
            className="btn btn-primary"
          >
            <span>View My Work</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 12h18M14 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              goToSection('about');
            }}
            className="btn btn-ghost"
          >
            About Me
          </a>

          <span className="divider" aria-hidden="true" />

          <span className="rule rule-1" aria-hidden="true" />
          <p className="hero-quote">
            I combine creativity and<br />
            technology to build clean,<br />
            functional and high-performing<br />
            digital experiences.
          </p>

          <span className="rule rule-2" aria-hidden="true" />
          <p className="spec-label">SPECIALIZED IN</p>
          <ul className="spec-list">
            <li>Web Development</li>
            <li>WordPress &amp; Shopify</li>
            <li>UI/UX Design</li>
            <li>Ecommerce Solutions</li>
            <li>Custom Web Applications</li>
          </ul>
        </div>
      </section>

      {/* ═══ MARQUEE SECTION (BELOW HERO WITH SPACE) ═══ */}
      <div className="hero-marquee-wrapper" id="tools" aria-label="Technologies and skills marquee">
        <div className="hero-marquee-bar">
          <div className="hero-marquee-track">
            {marqueeItems.concat(marqueeItems).map((tech, idx) => (
              <div key={idx} className="hero-marquee-item">
                <span>{tech}</span>
                <span className="hero-marquee-sep">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SCOPED STYLES ═══ */}
      <style>{`
        .hero-wrapper {
          position: relative;
          width: 100%;
          background: #f0ece2;
          --bg: #f0ece2;
          --ink: #1a1a1a;
          --text: #2e2e2e;
          --line: #c4bfb3;

          /* 1 "u" = 1px of the 1672 x 941 reference design */
          --u: min(100vw / 1672, 100vh / 941);
          --u: min(100vw / 1672, 100svh / 941);

          font-family: "Hanken Grotesk", "Inter", system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ---------- HEADER ---------- */
        .hero-site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 64px;
          border-bottom: 1px solid rgba(26, 26, 26, 0.08);
          background: rgba(240, 236, 226, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 990;
          display: flex;
          align-items: center;
        }

        .hero-header-inner {
          width: 100%;
          max-width: 1672px;
          margin: 0 auto;
          padding: 0 max(24px, calc(var(--u) * 98));
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .hero-logo-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: inherit;
        }

        .hero-logo-icon {
          width: 7px;
          height: 7px;
          background: #C8432A;
          border-radius: 1px;
          display: block;
          transform: rotate(45deg);
        }

        .hero-logo-text {
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink);
        }

        .hero-header-nav {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hero-header-link {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 4px;
          font-family: inherit;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26, 26, 26, 0.6);
          transition: all 0.25s ease;
        }

        .hero-header-link.is-hovered {
          background: rgba(26, 26, 26, 0.06);
          color: var(--ink);
        }

        .hero-header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-download-cv {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: inherit;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26, 26, 26, 0.65);
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid rgba(26, 26, 26, 0.12);
          transition: all 0.25s ease;
        }

        .hero-download-cv:hover {
          color: var(--ink);
          border-color: var(--ink);
          background: rgba(26, 26, 26, 0.04);
        }

        .hero-cv-dot {
          width: 6px;
          height: 6px;
          background: #C8432A;
          border-radius: 50%;
          animation: heroBlink 2s ease infinite;
        }

        @keyframes heroBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.4); }
        }

        .hero-mobile-toggle {
          display: none;
          background: none;
          border: 1px solid rgba(26, 26, 26, 0.15);
          border-radius: 4px;
          padding: 6px;
          cursor: pointer;
          color: var(--ink);
        }

        .hero-mobile-menu {
          position: absolute;
          top: 64px;
          left: 0;
          right: 0;
          background: var(--bg);
          border-bottom: 1px solid rgba(26, 26, 26, 0.1);
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 12px 24px rgba(26, 26, 26, 0.08);
        }

        .hero-mobile-menu-item {
          background: none;
          border: none;
          text-align: left;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
          padding: 8px 0;
          cursor: pointer;
        }

        .hero-mobile-cv {
          display: inline-block;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          padding: 10px 0;
          border-top: 1px solid rgba(26, 26, 26, 0.08);
        }

        /* ---------- HERO ---------- */
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100svh;
          overflow: hidden;
          display: grid;
          place-items: center;
          background: var(--bg);
        }

        /* subtle paper grain */
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .07;
          pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }

        .stage {
          position: relative;
          width: calc(var(--u) * 1672);
          height: calc(var(--u) * 941);
        }
        .hero-wrapper .stage > * { position: absolute; }

        /* ---------- LEFT: eyebrow ---------- */
        .eyebrow {
          left: calc(var(--u) * 98);
          top: calc(var(--u) * 156);
          font-size: calc(var(--u) * 22);
          line-height: calc(var(--u) * 28);
          font-weight: 300;
          letter-spacing: .42em;
          color: var(--text);
          white-space: nowrap;
          margin: 0;
        }
        .eyebrow-line {
          left: calc(var(--u) * 351);
          top: calc(var(--u) * 169);
          width: calc(var(--u) * 113);
          height: max(1px, calc(var(--u) * 2));
          background: var(--ink);
          display: block;
        }

        /* ---------- LEFT: giant title ---------- */
        .title-web,
        .title-dev {
          position: absolute;
          display: block;
          font-family: "Anton", "Impact", sans-serif;
          font-weight: 400;
          text-transform: uppercase;
          white-space: nowrap;
          line-height: 1;
          user-select: none;
          margin: 0;
        }
        .title-web {
          left: calc(var(--u) * 96);
          top: calc(var(--u) * 191);
          font-size: calc(var(--u) * 264);
          color: var(--ink);
          transform: scaleX(1.27);          /* widens Anton to match the heavy "WEB" */
          transform-origin: left top;
        }
        .title-dev {
          left: calc(var(--u) * 96);
          top: calc(var(--u) * 437);
          font-size: calc(var(--u) * 241);
          letter-spacing: calc(var(--u) * 2);
          color: transparent;
          -webkit-text-stroke: max(1px, calc(var(--u) * 1.6)) #4a4a46;
        }

        /* ---------- MIDDLE: IDEAS / DESIGN / DEVELOP / DELIVER ---------- */
        .steps {
          left: calc(var(--u) * 730);
          top: calc(var(--u) * 242);
          list-style: none;
          font-size: calc(var(--u) * 18);
          line-height: calc(var(--u) * 31);
          font-weight: 300;
          letter-spacing: .27em;
          color: var(--text);
          margin: 0;
          padding: 0;
        }
        .steps-line {
          left: calc(var(--u) * 730);
          top: calc(var(--u) * 390);
          width: calc(var(--u) * 72);
          height: max(1px, calc(var(--u) * 2));
          background: var(--text);
          display: block;
        }

        /* ---------- LEFT: intro + buttons ---------- */
        .intro {
          left: calc(var(--u) * 98);
          top: calc(var(--u) * 683);
          font-size: calc(var(--u) * 23);
          line-height: calc(var(--u) * 32.5);
          font-weight: 300;
          color: var(--text);
          white-space: nowrap;
          margin: 0;
        }
        .intro strong { font-weight: 700; color: var(--ink); }

        .btn {
          display: flex;
          align-items: center;
          height: calc(var(--u) * 64);
          top: calc(var(--u) * 809);
          font-family: inherit;
          font-size: calc(var(--u) * 18);
          font-weight: 400;
          letter-spacing: .02em;
          text-decoration: none;
          cursor: pointer;
          transition: background .2s ease, color .2s ease, border-color .2s ease;
          box-sizing: border-box;
        }
        .btn svg {
          width: calc(var(--u) * 20);
          height: calc(var(--u) * 20);
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .btn-primary {
          left: calc(var(--u) * 98);
          width: calc(var(--u) * 248);
          padding: 0 calc(var(--u) * 42);
          justify-content: space-between;
          background: var(--ink);
          color: #f5f2ea;
          border: 1.5px solid var(--ink);
        }
        .btn-primary:hover { background: transparent; color: var(--ink); }
        .btn-ghost {
          left: calc(var(--u) * 365);
          width: calc(var(--u) * 196);
          justify-content: center;
          background: transparent;
          color: var(--ink);
          border: 1.5px solid #6a6963;
        }
        .btn-ghost:hover { background: var(--ink); color: #f5f2ea; border-color: var(--ink); }
        .btn:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }

        /* ---------- DIVIDER ---------- */
        .divider {
          left: calc(var(--u) * 1160);
          top: calc(var(--u) * 208);
          width: 1px;
          height: calc(var(--u) * 665);
          background: var(--line);
          display: block;
        }

        /* ---------- RIGHT COLUMN ---------- */
        .rule {
          left: calc(var(--u) * 1247);
          width: calc(var(--u) * 73);
          height: max(1px, calc(var(--u) * 2));
          background: var(--text);
          display: block;
        }
        .rule-1 { top: calc(var(--u) * 220); }
        .rule-2 { top: calc(var(--u) * 547); }

        .hero-quote {
          left: calc(var(--u) * 1247);
          top: calc(var(--u) * 257);
          font-size: calc(var(--u) * 22);
          line-height: calc(var(--u) * 30.3);
          font-weight: 300;
          color: var(--text);
          white-space: nowrap;
          margin: 0;
        }

        .spec-label {
          left: calc(var(--u) * 1247);
          top: calc(var(--u) * 580);
          font-size: calc(var(--u) * 17);
          line-height: calc(var(--u) * 24);
          font-weight: 300;
          letter-spacing: .32em;
          color: var(--text);
          white-space: nowrap;
          margin: 0;
        }
        .spec-list {
          left: calc(var(--u) * 1247);
          top: calc(var(--u) * 618);
          list-style: none;
          font-size: calc(var(--u) * 23);
          line-height: calc(var(--u) * 39.7);
          font-weight: 300;
          color: var(--text);
          white-space: nowrap;
          margin: 0;
          padding: 0;
        }

        /* ---------- MARQUEE SECTION (BELOW HERO WITH SPACE) ---------- */
        .hero-marquee-wrapper {
          position: relative;
          width: 100%;
          padding: calc(var(--u) * 36) 0 calc(var(--u) * 24);
          background: var(--bg);
        }

        .hero-marquee-bar {
          position: relative;
          width: 100%;
          height: calc(var(--u) * 54);
          min-height: 42px;
          max-height: 56px;
          background: rgba(240, 236, 226, 0.95);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          display: flex;
          align-items: center;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
        }

        .hero-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: heroMarqueeScroll 28s linear infinite;
        }

        .hero-marquee-track:hover {
          animation-play-state: paused;
        }

        .hero-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 0 16px;
          font-family: inherit;
          font-size: calc(var(--u) * 14.5);
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text);
          white-space: nowrap;
          cursor: default;
          transition: color 0.25s ease;
        }

        .hero-marquee-item:hover {
          color: #C8432A;
        }

        .hero-marquee-sep {
          font-size: 9px;
          color: #C8432A;
          opacity: 0.75;
          margin-left: 16px;
        }

        @keyframes heroMarqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ---------- MOBILE / TABLET: stack naturally ---------- */
        @media (max-width: 900px) {
          .hero-site-header {
            height: 56px;
          }
          .hero-header-nav {
            display: none !important;
          }
          .hero-mobile-toggle {
            display: inline-flex !important;
          }
          .hero-wrapper {
            --u: 1px;
          }
          .hero {
            height: auto;
            min-height: 100svh;
            display: flex;
            flex-direction: column;
            padding-top: 56px;
          }
          .stage {
            width: 100%;
            height: auto;
            padding: 36px 24px 28px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .stage > * {
            position: static !important;
          }
          .eyebrow-line, .steps-line, .divider, .rule {
            display: none !important;
          }
          .eyebrow {
            font-size: 14px;
            line-height: 1.2;
          }
          .title-web, .title-dev {
            position: static !important;
          }
          .title-web {
            font-size: 28vw;
            transform: none;
            margin-bottom: -1vw;
          }
          .title-dev {
            font-size: 15vw;
            letter-spacing: 0;
          }
          .steps {
            font-size: 14px;
            line-height: 26px;
          }
          .intro {
            font-size: 18px;
            line-height: 1.5;
            white-space: normal;
          }
          .hero-quote {
            font-size: 17px;
            line-height: 1.5;
            white-space: normal;
          }
          .spec-label {
            font-size: 13px;
          }
          .spec-list {
            font-size: 18px;
            line-height: 34px;
            white-space: normal;
          }
          .btn {
            height: 52px;
            font-size: 16px;
            width: 100%;
          }
          .btn-primary, .btn-ghost {
            left: auto !important;
          }
          .btn-primary {
            padding: 0 24px;
          }
          .hero-marquee-wrapper {
            padding: 24px 0 16px;
          }
          .hero-marquee-bar {
            position: relative;
            width: 100%;
            height: 44px;
            margin-top: 0;
          }
          .hero-marquee-item {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .btn { transition: none; }
          .hero-marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
