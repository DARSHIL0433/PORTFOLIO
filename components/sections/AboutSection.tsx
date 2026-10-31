'use client';

import React, { useEffect, useRef, useState } from 'react';

const leadText =
  'I’m a web developer passionate about turning ideas into high-performing websites that look exceptional, run smoothly, and deliver intuitive user experiences. With hands-on experience delivering 10+ successful web projects across WordPress, Shopify, and WooCommerce, alongside strong expertise in React.js, JavaScript, PHP, and modern full-stack development, I build clean digital solutions tailored for real-world impact.';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [litCount, setLitCount] = useState(0);

  const words = leadText.trim().split(/\s+/);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    const play = () => {
      setIsInView(true);
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        setLitCount(words.length);
        return;
      }

      const t0 = performance.now() + 300;
      const dur = 1800;

      const frame = (now: number) => {
        const progress = Math.min(Math.max((now - t0) / dur, 0), 1);
        const currentLit = Math.round(progress * words.length);
        setLitCount(currentLit);
        if (progress < 1) {
          requestAnimationFrame(frame);
        }
      };
      requestAnimationFrame(frame);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          if (entries[0].isIntersecting) {
            play();
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(sec);
      return () => observer.disconnect();
    } else {
      play();
    }
  }, [words.length]);

  return (
    <div className="about-v8-container">
      <section
        ref={sectionRef}
        className={`about ${isInView ? 'in' : ''}`}
        id="about"
        aria-label="About me"
      >
        {/* ---------- heading row ---------- */}
        <div className="head r">
          <h2 className="heading anton" aria-label="About me">
            <span className="ol" aria-hidden="true">About</span>{' '}
            <span aria-hidden="true">Me</span>
          </h2>
          <p className="eyebrow">FULL STACK DEVELOPER</p>
        </div>

        {/* ---------- story: portrait | text ---------- */}
        <div className="story">
          <figure className="portrait-wrap r" style={{ '--i': 1 } as React.CSSProperties}>
            <div className="portrait" role="img" aria-label="Portrait of Darshil Desai">
              <img
                src="/assets/darshil-photo.jpg"
                alt="Darshil Desai"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="mono anton ol" aria-hidden="true">DD</span>
              <figcaption>
                <b>Darshil Desai</b>
                <span>Web Developer</span>
              </figcaption>
            </div>
          </figure>

          <div className="copy">
            <span className="rule r" style={{ '--i': 2 } as React.CSSProperties} />

            <p className="lead r" style={{ '--i': 2 } as React.CSSProperties}>
              {words.map((w, i) => (
                <span
                  key={i}
                  className={`w ${i < litCount || isInView ? (i < litCount ? 'on' : '') : ''}`}
                >
                  {w}{' '}
                </span>
              ))}
            </p>

            <div className="cols r" style={{ '--i': 3 } as React.CSSProperties}>
              <p>
                My background spans end-to-end website customization, responsive web design, and bespoke web applications—including platforms like EcoSnap and AgriMitra. I focus on clean code architecture, seamless API integrations, and thoughtful UI/UX that helps businesses establish a memorable digital presence.
              </p>
              <p>
                I thrive on exploring modern web technologies, optimizing performance, and tackling challenges that demand both technical precision and creative problem-solving. My commitment is simple: creating robust, accessible, and scalable websites that exceed client goals while offering users a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Scoped Styles to .about-v8-container ---------- */}
      <style>{`
        .about-v8-container {
          position: relative;
          width: 100%;
          display: block;
          clear: both;
        }

        .about-v8-container .about {
          --bg: #f0ece2;
          --ink: #1a1a1a;
          --text: #2e2e2e;
          --soft: #6f6b62;
          --line: #cbc6ba;
          --dim: rgba(26,26,26,.2);
          --stroke: #4a4a46;
          --ease: cubic-bezier(.2,.7,.2,1);
          --u: min(100vw / 1672, 100svh / 941);

          position: relative !important;
          left: auto !important;
          top: auto !important;
          right: auto !important;
          bottom: auto !important;
          overflow: hidden;
          width: 100% !important;
          max-width: 100% !important;
          height: 100vh;
          height: 100svh;
          display: flex;
          flex-direction: column;
          padding: calc(var(--u) * 122) 5.1vw calc(var(--u) * 68) 5.9vw;
          background: var(--bg);
          color: var(--ink);
          font-family: "Hanken Grotesk", system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          box-sizing: border-box;
          white-space: normal !important;
        }

        .about-v8-container .about::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .06;
          pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }

        .about-v8-container .about > * {
          position: relative;
        }

        .about-v8-container .anton {
          font-family: "Anton", Impact, sans-serif;
          font-weight: 400;
          text-transform: uppercase;
        }

        .about-v8-container .ol {
          color: transparent;
          -webkit-text-stroke: max(1px, calc(var(--u) * 1.4)) var(--stroke);
        }

        /* ---------- heading row ---------- */
        .about-v8-container .head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          padding-bottom: calc(var(--u) * 22);
          border-bottom: 1px solid var(--line);
          width: 100%;
        }

        .about-v8-container .heading {
          font-size: calc(var(--u) * 124);
          line-height: .86;
          letter-spacing: calc(var(--u) * 2);
          white-space: nowrap;
          user-select: none;
          margin: 0;
          color: var(--ink);
        }

        .about-v8-container .eyebrow {
          display: flex;
          align-items: center;
          gap: calc(var(--u) * 22);
          padding-bottom: calc(var(--u) * 6);
          font-size: calc(var(--u) * 17);
          font-weight: 300;
          letter-spacing: .36em;
          color: var(--text);
          white-space: nowrap;
          margin: 0;
        }

        .about-v8-container .eyebrow::before {
          content: "";
          width: calc(var(--u) * 80);
          height: 2px;
          background: var(--ink);
          display: block;
        }

        /* ---------- story: portrait | text ---------- */
        .about-v8-container .story {
          flex: 1;
          min-height: 0;
          display: flex;
          margin-top: calc(var(--u) * 40);
          width: 100%;
        }

        .about-v8-container .portrait-wrap {
          position: relative;
          flex: none;
          height: calc(100% - var(--u) * 16);
          aspect-ratio: 4 / 5;
          margin: 0 calc(var(--u) * 80) 0 0;
        }

        .about-v8-container .portrait-wrap::after {
          content: "";
          position: absolute;
          inset: calc(var(--u) * 16) calc(var(--u) * -16) calc(var(--u) * -16) calc(var(--u) * 16);
          border: 1px solid var(--soft);
          pointer-events: none;
        }

        .about-v8-container .portrait {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          background: #e6e1d4;
          border: 1px solid var(--line);
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .about-v8-container .portrait img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 15%;
        }

        .about-v8-container .portrait .mono {
          font-size: calc(var(--u) * 150);
          letter-spacing: calc(var(--u) * 3);
          line-height: 1;
          user-select: none;
          margin-bottom: calc(var(--u) * 40);
        }

        .about-v8-container .portrait figcaption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: calc(var(--u) * 16) calc(var(--u) * 20);
          background: rgba(240,236,226,.94);
          border-top: 1px solid var(--line);
          z-index: 2;
        }

        .about-v8-container .portrait figcaption b {
          font-size: max(13px, calc(var(--u) * 17));
          font-weight: 500;
          color: var(--ink);
        }

        .about-v8-container .portrait figcaption span {
          font-size: max(11px, calc(var(--u) * 14));
          font-weight: 300;
          color: var(--soft);
          text-align: right;
        }

        .about-v8-container .copy {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-width: 0;
          padding-top: calc(var(--u) * 6);
        }

        .about-v8-container .rule {
          width: calc(var(--u) * 73);
          height: 2px;
          background: var(--ink);
          margin-bottom: calc(var(--u) * 28);
          display: block;
        }

        .about-v8-container .lead {
          max-width: 36em;
          font-size: calc(var(--u) * 27);
          line-height: 1.48;
          font-weight: 300;
          color: var(--ink);
          letter-spacing: -.008em;
          text-wrap: pretty;
          margin: 0;
        }

        .about-v8-container .lead .w {
          color: var(--dim);
          transition: color .3s ease;
        }

        .about-v8-container .lead .w.on {
          color: var(--ink);
        }

        .about-v8-container .cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: calc(var(--u) * 44);
          max-width: calc(var(--u) * 980);
        }

        .about-v8-container .cols p {
          font-size: max(13.5px, calc(var(--u) * 19));
          line-height: 1.68;
          font-weight: 300;
          color: var(--text);
          padding-right: calc(var(--u) * 48);
          text-wrap: pretty;
          margin: 0;
        }

        .about-v8-container .cols p + p {
          padding: 0 0 0 calc(var(--u) * 48);
          border-left: 1px solid var(--line);
        }

        /* ---------- entrance: once, when the section scrolls into view ---------- */
        .about-v8-container .r {
          opacity: 0;
          transform: translateY(calc(var(--u) * 30));
          transition: opacity .9s var(--ease), transform .9s var(--ease);
          transition-delay: calc(var(--i, 0) * .09s);
        }

        .about-v8-container .about.in .r {
          opacity: 1;
          transform: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-v8-container .r {
            opacity: 1;
            transform: none;
          }
          .about-v8-container .lead .w {
            color: var(--ink);
          }
          .about-v8-container *, .about-v8-container *::before, .about-v8-container *::after {
            animation: none !important;
            transition: none !important;
          }
        }

        /* ---------- tablet / mobile: stack, natural height ---------- */
        @media (max-width: 1000px) {
          .about-v8-container .about {
            --u: .8px;
            display: block;
            height: auto;
            min-height: auto;
            padding: 80px 24px 64px;
          }
          .about-v8-container .head {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .about-v8-container .heading {
            font-size: 18vw;
          }
          .about-v8-container .eyebrow {
            font-size: 12px;
            padding: 0;
          }
          .about-v8-container .story {
            display: block;
            margin-top: 32px;
          }
          .about-v8-container .portrait-wrap {
            height: auto;
            width: min(300px, 78%);
            margin: 0 16px 40px 0;
          }
          .about-v8-container .lead {
            font-size: 19px;
          }
          .about-v8-container .cols {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 24px;
          }
          .about-v8-container .cols p, .about-v8-container .cols p + p {
            font-size: 16px;
            padding: 0;
            border: 0;
          }
        }
      `}</style>
    </div>
  );
}
