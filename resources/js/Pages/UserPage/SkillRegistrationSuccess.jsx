import React from 'react';
import { Head, Link } from '@inertiajs/react';

/**
 * Converted from resources/views/.../skill-registration-success.blade.php
 *
 * Notes:
 * - The original was a full standalone HTML document (its own <html>/<head>/<body>,
 *   not extending `layouts.guest`) — that's unusual compared to your other pages,
 *   which all extend a shared layout. Since Inertia's root `app.blade.php` already
 *   provides the outer <html>/<head>/<body> scaffolding, this component renders just
 *   the page content — no <GuestLayout> wrapper, no `.layout` assignment — matching
 *   the standalone nature of the original. If this page is actually meant to share
 *   your site header/footer via GuestLayout, let me know and I'll wire that up
 *   instead.
 * - The toastr CSS `<link>` and Google Fonts `<link>` from the original `<head>` are
 *   kept as-is inside the component (React will hoist them into the document head).
 *   toastr itself was linked but never actually used anywhere in the original
 *   markup/script, so I left the CSS link in for parity but there's nothing calling
 *   `toastr.*` on this page.
 * - `talent` is passed as a prop (`talent.name`, `talent.email`, `talent.category.name`),
 *   matching the Blade `$talent` variable.
 * - No light theme existed in the original file — added `[data-h-theme="light"]`
 *   overrides using the same --bg/--surface/--green token pattern as your other pages.
 */
export default function SkillRegistrationSuccess({ talent }) {
  return (
    <>
      <Head title="Skill Registration Successful — Future Connect" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />

      <style>{`
        :root {
          --bg: #0e1618;
          --surface: #141d20;
          --surface2: #1a2428;
          --green: #48d597;
          --green-mid: #00a667;
          --green-dim: rgba(0, 166, 103, 0.12);
          --text: #e8f0ed;
          --muted: #7a9a8e;
          --border: rgba(0, 166, 103, 0.18);
          --radius: 10px;
          --radius-lg: 18px;
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: var(--bg);
        }

        .fc-success-page {
          background: var(--bg);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .fc-success-card {
          width: 100%;
          max-width: 520px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 44px 40px 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fcRise 0.5s ease;
        }

        .fc-success-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--green), transparent);
        }

        @keyframes fcRise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fc-success-icon {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: var(--green-dim);
          border: 2px solid rgba(0, 166, 103, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 22px;
          animation: fcPop 0.5s cubic-bezier(.34,1.56,.64,1) 0.1s both;
        }

        @keyframes fcPop {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }

        .fc-success-icon svg {
          width: 34px;
          height: 34px;
          stroke: var(--green);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-success-eyebrow {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--green);
          margin: 0 0 10px;
        }

        .fc-success-card h2 {
          font-size: 1.55rem;
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -0.3px;
        }

        .fc-success-card > p.fc-success-lede {
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.75;
          margin: 0 0 28px;
          max-width: 380px;
          margin-left: auto;
          margin-right: auto;
        }

        .fc-summary {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 6px 18px;
          text-align: left;
          margin-bottom: 28px;
        }

        .fc-summary-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid var(--border);
        }

        .fc-summary-row:last-child { border-bottom: none; }

        .fc-summary-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: var(--green-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fc-summary-icon svg {
          width: 15px;
          height: 15px;
          stroke: var(--green);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-summary-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }

        .fc-summary-label {
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          color: var(--muted);
        }

        .fc-summary-value {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .fc-success-actions {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .fc-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--radius);
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .fc-btn svg {
          width: 15px;
          height: 15px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-btn-primary {
          background: var(--green);
          color: #0a1f14;
        }
        .fc-btn-primary:hover {
          background: #62eaaa;
          transform: translateY(-1px);
          color: #0a1f14;
        }

        .fc-btn-ghost {
          background: var(--surface2);
          color: var(--muted);
          border: 1px solid var(--border);
        }
        .fc-btn-ghost:hover {
          color: var(--text);
          border-color: rgba(0, 166, 103, 0.42);
        }

        .fc-success-footnote {
          margin-top: 22px;
          font-size: 11.5px;
          color: var(--muted);
        }

        @media (max-width: 480px) {
          .fc-success-card { padding: 34px 22px 28px; }
          .fc-success-card h2 { font-size: 1.3rem; }
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg: #f6faf8;
          --surface: #F5f5f7;
          --surface2: #eef4f1;
          --green: #00a667;
          --green-mid: #00c07a;
          --green-dim: rgba(0, 166, 103, 0.1);
          --text: #10201b;
          --muted: #5b7a70;
          --border: rgba(0, 100, 60, 0.14);
        }

        /* Heading + primary-button text colors were hardcoded (#fff / #0a1f14)
           rather than theme variables, tuned for the dark card. #fff heading
           text would vanish on the light card, so give it an explicit override;
           the button text (#0a1f14, a near-black) still reads fine on the
           light-mode accent green, so it's left unchanged intentionally. */
        [data-h-theme="light"] .fc-success-card h2 {
          color: var(--text);
        }
      `}</style>

      <div className="fc-success-page">
        <div className="fc-success-card">

          <div className="fc-success-icon">
            <svg viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <p className="fc-success-eyebrow">Application Received</p>
          <h2>Skill Registration Successful!</h2>
          <p className="fc-success-lede">
            Thank you for submitting your skill profile. Our team will review the details and get in touch if needed.
          </p>

          <div className="fc-summary">
            <div className="fc-summary-row">
              <div className="fc-summary-icon">
                <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="fc-summary-text">
                <span className="fc-summary-label">Name</span>
                <span className="fc-summary-value">{talent.name}</span>
              </div>
            </div>

            <div className="fc-summary-row">
              <div className="fc-summary-icon">
                <svg viewBox="0 0 24 24"><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              </div>
              <div className="fc-summary-text">
                <span className="fc-summary-label">Email</span>
                <span className="fc-summary-value">{talent.email}</span>
              </div>
            </div>

            <div className="fc-summary-row">
              <div className="fc-summary-icon">
                <svg viewBox="0 0 24 24"><path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.59 3.24L4 3a1 1 0 0 0-1 1l.24 5.59a2 2 0 0 0 .59 1.41l9.58 9.59a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.83z"/><circle cx="8" cy="8" r="1" fill="currentColor" stroke="none"/></svg>
              </div>
              <div className="fc-summary-text">
                <span className="fc-summary-label">Category</span>
                <span className="fc-summary-value">{talent.category?.name}</span>
              </div>
            </div>
          </div>

          <div className="fc-success-actions">
            <Link href={route('user.home')} className="fc-btn fc-btn-primary">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Back to Home
            </Link>
            <Link href={route('login')} className="fc-btn fc-btn-ghost">
              View My Profile
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <p className="fc-success-footnote">You&apos;ll receive a confirmation email within 24–48 hours.</p>

        </div>
      </div>
    </>
  );
}
