'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
});

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/darshildesai1906@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          _subject: `New Portfolio Message from ${name}: ${subject || 'Inquiry'}`,
          message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      window.location.href = `mailto:darshildesai1906@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const actionButtons = [
    {
      href: 'https://api.whatsapp.com/send?phone=917990084442&text=Hello%20Darshil!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20chat.',
      label: 'Chat on WhatsApp',
      text: 'WHATSAPP ME',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
          <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.181 8.181 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8 1-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.21.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.13-.22-.2-.47-.32z" />
        </svg>
      ),
    },
    {
      href: 'tel:+917990084442',
      label: 'Call +91 7990084442',
      text: 'CALL ME',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        background: '#E8E4DC',
        color: '#1A1A1A',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
        padding: 'clamp(44px, 7vh, 76px) 0 0',
      }}
    >
      <div style={{ maxWidth: '1140px', margin: 'auto auto', width: '100%', padding: '0 28px' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)', alignItems: 'center' }}>
          {/* Left */}
          <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingRight: 'clamp(20px, 3vw, 40px)', borderRight: '1px solid rgba(26,26,26,0.18)', alignSelf: 'stretch', justifyContent: 'center' }}>
            <motion.span {...fadeUp(0)} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6.5vw, 5.2rem)', letterSpacing: '0.02em', lineHeight: 0.88, color: '#1A1A1A', display: 'block' }}>
              CONTACT
            </motion.span>
            <motion.span {...fadeUp(0.12)} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6.5vw, 5.2rem)', letterSpacing: '0.02em', lineHeight: 0.88, color: 'transparent', WebkitTextStroke: '1.5px #1A1A1A', display: 'block' }}>
              ME
            </motion.span>
            <motion.p {...fadeUp(0.22)} style={{ marginTop: '18px', maxWidth: '420px', fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.88rem, 1.05vw, 0.98rem)', fontWeight: 400, lineHeight: 1.8, color: 'rgba(26,26,26,0.72)' }}>
              I am an enthusiastic developer specializing in creating modern, high-performance websites and digital experiences. I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </motion.p>
            <motion.div {...fadeUp(0.3)} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '380px', marginTop: '24px' }}>
              {actionButtons.map(({ href, label, text, icon }) => (
                <a
                  key={text}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '14px', width: '100%', padding: '13px 18px',
                    border: '1px solid rgba(26,26,26,0.22)', background: 'transparent',
                    textDecoration: 'none',
                    transition: 'border-color 0.3s, background 0.3s, transform 0.3s cubic-bezier(.23,1,.32,1)',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'rgba(26,26,26,0.45)';
                    el.style.background = 'rgba(26,26,26,0.03)';
                    el.style.transform = 'translateX(4px)';
                    const circle = el.querySelector('span') as HTMLSpanElement;
                    if (circle) circle.style.color = '#1A1A1A';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'rgba(26,26,26,0.22)';
                    el.style.background = 'transparent';
                    el.style.transform = '';
                    const circle = el.querySelector('span') as HTMLSpanElement;
                    if (circle) circle.style.color = 'rgba(26,26,26,0.7)';
                  }}
                >
                  <span style={{ width: '32px', height: '32px', border: '1px solid rgba(26,26,26,0.22)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'rgba(26,26,26,0.7)', transition: 'border-color 0.3s, color 0.3s' }}>
                    {icon}
                  </span>
                  <span style={{ flex: 1, fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.95rem', letterSpacing: '0.14em', color: '#1A1A1A' }}>{text}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.15rem', color: 'rgba(26,26,26,0.45)' }}>↗</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - form */}
          <motion.div {...fadeUp(0.15)} style={{ borderLeft: 'none', padding: '0 0 16px clamp(16px, 2.5vw, 32px)', position: 'relative', minWidth: 0 }}>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', letterSpacing: '0.04em', color: '#1A1A1A', lineHeight: 1, marginBottom: '12px', marginTop: 0 }}>
              LET&apos;S WORK TOGETHER
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.85rem, 1vw, 0.95rem)', fontWeight: 300, lineHeight: 1.6, color: 'rgba(26,26,26,0.6)', marginBottom: '22px', maxWidth: '440px', margin: '0 0 22px' }}>
              Have a project in mind or just want to say hello? Fill out the form below.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                style={{ padding: '24px', background: 'rgba(200,67,42,0.06)', border: '1px solid rgba(200,67,42,0.2)', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#C8432A', letterSpacing: '0.04em', lineHeight: 1.6 }}
              >
                Thank you! Your message has been sent successfully. I&apos;ll get back to you shortly.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="cf-name" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.92rem', letterSpacing: '0.1em', color: 'rgba(26,26,26,0.85)' }}>YOUR NAME</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid rgba(26,26,26,0.22)', paddingBottom: '9px' }}>
                    <input
                      type="text" id="cf-name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" required
                      style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.88rem, 1vw, 0.98rem)', fontWeight: 300, color: '#1A1A1A', padding: '2px 0' }}
                    />
                    <span aria-hidden="true" style={{ flexShrink: 0, width: '22px', height: '22px', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="cf-email" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.92rem', letterSpacing: '0.1em', color: 'rgba(26,26,26,0.85)' }}>YOUR EMAIL</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid rgba(26,26,26,0.22)', paddingBottom: '9px' }}>
                    <input
                      type="email" id="cf-email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required
                      style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.88rem, 1vw, 0.98rem)', fontWeight: 300, color: '#1A1A1A', padding: '2px 0' }}
                    />
                    <span aria-hidden="true" style={{ flexShrink: 0, width: '22px', height: '22px', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="6" width="18" height="14" rx="1" /><path d="M3 7l9 7 9-7" /></svg>
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="cf-subject" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.92rem', letterSpacing: '0.1em', color: 'rgba(26,26,26,0.85)' }}>SUBJECT</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid rgba(26,26,26,0.22)', paddingBottom: '9px' }}>
                    <input
                      type="text" id="cf-subject" name="subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Enter subject" required
                      style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.88rem, 1vw, 0.98rem)', fontWeight: 300, color: '#1A1A1A', padding: '2px 0' }}
                    />
                    <span aria-hidden="true" style={{ flexShrink: 0, width: '22px', height: '22px', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 7h12M4 12h16M4 17h10" /></svg>
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="cf-message" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.92rem', letterSpacing: '0.1em', color: 'rgba(26,26,26,0.85)' }}>MESSAGE</label>
                  <div style={{ borderBottom: '1px solid rgba(26,26,26,0.22)', paddingBottom: '9px' }}>
                    <textarea
                      id="cf-message" name="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Write your message here..." required
                      style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.88rem, 1vw, 0.98rem)', fontWeight: 300, color: '#1A1A1A', padding: '2px 0', resize: 'none', minHeight: '74px', lineHeight: 1.6, boxSizing: 'border-box' }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    marginTop: '6px', width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', padding: '14px 18px',
                    border: '1px solid rgba(26,26,26,0.22)', background: submitting ? 'rgba(26,26,26,0.04)' : 'transparent', cursor: submitting ? 'wait' : 'pointer',
                    transition: 'border-color 0.3s, background 0.3s',
                    fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.12em', color: '#1A1A1A',
                  }}
                  onMouseEnter={e => { if (!submitting) { const el = e.currentTarget; el.style.borderColor = 'rgba(26,26,26,0.45)'; el.style.background = 'rgba(26,26,26,0.03)'; } }}
                  onMouseLeave={e => { if (!submitting) { const el = e.currentTarget; el.style.borderColor = 'rgba(26,26,26,0.22)'; el.style.background = 'transparent'; } }}
                >
                  <span>{submitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}</span>
                  <span style={{ width: '30px', height: '30px', border: '1px solid rgba(26,26,26,0.22)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: 'rgba(26,26,26,0.55)' }}>→</span>
                </button>
              </form>
            )}
            {/* Badge */}
            <div aria-hidden="true" style={{ position: 'absolute', right: 0, bottom: '-10px', width: '68px', height: '68px' }}>
              <svg viewBox="0 0 100 100">
                <defs><path id="cfBadgePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" /></defs>
                <text fontFamily="Inter, sans-serif" fontSize="7.2" fill="#6bb09c" letterSpacing="1.8">
                  <textPath href="#cfBadgePath">BUILDING DIGITAL PRODUCTS + THAT MAKE AN IMPACT +</textPath>
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ borderTop: '1px solid rgba(26,26,26,0.13)', marginTop: '48px', padding: '22px 0 28px', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.38)', textAlign: 'center' }}
      >
        Darshil Desai © 2026 — Website Developer
      </motion.div>
    </div>
  );
}
