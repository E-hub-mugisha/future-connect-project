import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";


const DEFAULT_ROUTES = {
  "user.talents": "/skills-marketplace",
  "talent.start-connecting": "/start-connecting"
};

const categoryRoute = (routes, slug) =>
  (routes["user.talents.category"] || "/skills/category/:slug").replace(
    ":slug",
    slug
  );

export default function NetworkingHub({
  categories = [],
  routes = {},
  assetBase = "",
}) {
  const r = (name) => routes[name] || DEFAULT_ROUTES[name] || "#";
  const asset = (path) => `${assetBase}${path}`;

  const popularCategories = categories.slice(0, 6);

  return (
    <>
      <Head title="Connection Room – Stop Searching. Start Connecting." />

      <style>{`
        /*
          Font note: Apple does not license the SF Pro / San Francisco font
          files for embedding on non-Apple-platform web pages. The correct,
          fully-licensed way to render actual San Francisco on Apple devices
          is the system-font stack below — Safari/macOS/iOS resolve
          -apple-system / BlinkMacSystemFont straight to San Francisco,
          and every other OS falls back to its own native UI font.
        */

        /* ── Tokens ──────────────────────────────────────────────── */
        :root {
            --bg-base: #0e1618;
            --bg-card: #131e21;
            --bg-card-alt: #192429;
            --bg-elevated: #1e2d32;
            --accent: #48d597;
            --accent-dim: #48d59718;
            --accent-muted: #48d59740;
            --accent-hover: #00c27a;
            --text-primary: #f0f4f5;
            --text-secondary: #8fa8ad;
            --text-muted: #4d6b72;
            --border: #1f3038;
            --border-hover: #2a4550;
            --radius-sm: 6px;
            --radius-md: 10px;
            --radius-lg: 16px;
            --font-head: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background: var(--bg-base) !important;
            color: var(--text-primary) !important;
            font-family: var(--font-body);
        }

        /* ── Hero ────────────────────────────────────────────────── */
        .nh-hero {
            position: relative;
            overflow: hidden;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 4rem 2.5rem;
            margin: 2rem 0 3rem;
        }

        .nh-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-size: 40px 40px;
            opacity: .4;
            pointer-events: none;
        }

        .nh-hero-glow-1 {
            position: absolute;
            top: -80px;
            right: -80px;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--accent-muted) 0%, transparent 65%);
            pointer-events: none;
        }

        .nh-hero-glow-2 {
            position: absolute;
            bottom: -60px;
            left: 10%;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background: radial-gradient(circle, #48d59710 0%, transparent 70%);
            pointer-events: none;
        }

        .nh-hero-content {
            position: relative;
            z-index: 2;
        }

        .nh-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            background: var(--accent-dim);
            border: 1px solid var(--accent-muted);
            color: var(--accent);
            font-size: .72rem;
            font-weight: 700;
            padding: 4px 14px;
            border-radius: 50px;
            letter-spacing: .8px;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        .nh-hero-title {
            font-family: var(--font-head);
            font-size: clamp(1.8rem, 4vw, 3rem);
            font-weight: 900;
            color: var(--text-primary);
            line-height: 1.15;
            margin-bottom: 1rem;
        }

        .nh-hero-title span {
            color: var(--accent);
        }

        .nh-hero-sub {
            color: var(--text-secondary);
            font-size: .95rem;
            line-height: 1.7;
            max-width: 520px;
            margin-bottom: 1.75rem;
        }

        .nh-cta-row {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .nh-cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--accent);
            color: #fff;
            border: none;
            border-radius: var(--radius-md);
            padding: .9rem 2rem;
            font-weight: 700;
            font-size: .95rem;
            text-decoration: none;
            transition: background .2s, transform .15s;
            letter-spacing: .3px;
        }

        .nh-cta-btn:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
            color: #fff;
        }

        .nh-cta-btn-outline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            color: var(--text-primary);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: .85rem 1.9rem;
            font-weight: 700;
            font-size: .95rem;
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
            letter-spacing: .3px;
        }

        .nh-cta-btn-outline:hover {
            border-color: var(--accent-muted);
            color: var(--accent);
            background: var(--accent-dim);
        }

        .nh-cta-btn i,
        .nh-cta-btn-outline i {
            font-size: 1rem;
        }

        .nh-popular {
            margin-top: 1.5rem;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .nh-popular-label {
            font-size: .75rem;
            color: var(--text-muted);
            font-weight: 600;
            white-space: nowrap;
        }

        .nh-tag {
            display: inline-block;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            font-size: .75rem;
            padding: 4px 12px;
            border-radius: 50px;
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
        }

        .nh-tag:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-dim);
            text-decoration: none;
        }

        .nh-hero-img-wrap {
            position: relative;
            z-index: 2;
            height: 100%;
        }

        .nh-hero-img-main {
            width: 100%;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border);
            object-fit: cover;
            height: 260px;
            display: block;
        }

        .nh-hero-stat {
            position: absolute;
            bottom: -16px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: .6rem 1.25rem;
            display: flex;
            align-items: center;
            gap: 20px;
            white-space: nowrap;
        }

        .nh-stat-item {
            text-align: center;
        }

        .nh-stat-num {
            font-family: var(--font-head);
            font-size: 1.1rem;
            font-weight: 900;
            color: var(--accent);
        }

        .nh-stat-lbl {
            font-size: .65rem;
            color: var(--text-muted);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .6px;
        }

        /* ── Section heading ─────────────────────────────────────── */
        .nh-section-head {
            margin-bottom: 2rem;
        }

        .nh-section-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: .72rem;
            font-weight: 700;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: .5rem;
        }

        .nh-section-eyebrow::before {
            content: '';
            width: 3px;
            height: .85rem;
            background: var(--accent);
            border-radius: 2px;
            display: inline-block;
        }

        .nh-section-title {
            font-family: var(--font-head);
            font-size: clamp(1.4rem, 2.5vw, 1.9rem);
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: .5rem;
        }

        .nh-section-sub {
            color: var(--text-secondary);
            font-size: .88rem;
        }

        /* ── About Section ───────────────────────────────────────── */
        .nh-about {
            padding: 4rem 0;
        }

        .nh-about-img-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 12px;
        }

        .nh-about-img-grid img {
            width: 100%;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            object-fit: cover;
            display: block;
        }

        .nh-about-img-grid img:first-child {
            grid-row: 1 / 3;
            height: 100%;
        }

        .nh-about-img-grid img:nth-child(2) {
            height: 150px;
        }

        .nh-about-img-grid img:nth-child(3) {
            height: 150px;
        }

        .nh-about-text {
            padding-left: 1.5rem;
        }

        .nh-about-text h6 {
            color: var(--accent);
            font-size: .8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: .75rem;
        }

        .nh-about-text p {
            color: var(--text-secondary);
            font-size: .88rem;
            line-height: 1.75;
            margin-bottom: 1rem;
        }

        .nh-about-text h5 {
            color: var(--text-primary);
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: .5rem;
        }

        .nh-feature-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .nh-feature-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: .875rem;
            color: var(--text-secondary);
        }

        .nh-feature-list li::before {
            content: '';
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--accent-dim);
            border: 1px solid var(--accent-muted);
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 10px;
        }

        /* ── Connection animation section ───────────────────────── */
        .nh-connect {
            padding: 4rem 0 2rem;
        }

        .nh-connect-visual {
            position: relative;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 3.5rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            overflow: hidden;
        }

        .nh-connect-line {
            flex: 1;
            height: 120px;
            min-width: 120px;
        }

        .nh-connect-node {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .6rem;
            flex-shrink: 0;
            position: relative;
            z-index: 2;
        }

        .nh-connect-avatar {
            width: 76px;
            height: 76px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            animation: nhPulseRing 2.6s ease-in-out infinite;
        }

        .nh-connect-avatar.accent {
            background: var(--accent-dim);
            border: 1px solid var(--accent-muted);
            color: var(--accent);
            animation-delay: .6s;
        }

        @keyframes nhPulseRing {
            0%   { box-shadow: 0 0 0 0 var(--accent-muted); }
            70%  { box-shadow: 0 0 0 14px transparent; }
            100% { box-shadow: 0 0 0 0 transparent; }
        }

        .nh-connect-node span {
            font-size: .78rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .nh-connect-badges {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 1.75rem;
        }

        .nh-connect-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            font-size: .76rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 50px;
            animation: nhFloat 3.2s ease-in-out infinite;
        }

        .nh-connect-badge i { color: var(--accent); font-size: .7rem; }
        .nh-connect-badge:nth-child(2) { animation-delay: .4s; }
        .nh-connect-badge:nth-child(3) { animation-delay: .8s; }
        .nh-connect-badge:nth-child(4) { animation-delay: 1.2s; }

        @keyframes nhFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
        }

        @media (prefers-reduced-motion: reduce) {
            .nh-connect-avatar,
            .nh-connect-badge {
                animation: none !important;
            }
        }

        /* ── Dashboard preview section ───────────────────────────── */
        .nh-dashboard {
            padding: 3.5rem 0;
        }

        .nh-dashboard-frame {
            position: relative;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,.35);
        }

        .nh-browser-bar {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: .7rem 1rem;
            background: var(--bg-elevated);
            border-bottom: 1px solid var(--border);
        }

        .nh-browser-dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: var(--border-hover);
        }

        .nh-dashboard-img {
            width: 100%;
            display: block;
            object-fit: cover;
        }

        .nh-dashboard-glow {
            position: absolute;
            top: -60px;
            right: -60px;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--accent-muted) 0%, transparent 65%);
            pointer-events: none;
            z-index: -1;
        }

        .nh-dashboard-copy-wrap { position: relative; }

        /* ── Marketing / Start Connecting panel ─────────────────── */
        .nh-market {
            padding: 3.5rem 0;
        }

        .nh-market-panel {
            position: relative;
            overflow: hidden;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 3rem 2.5rem;
        }

        .nh-market-panel::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .nh-market-glow {
            position: absolute;
            top: -70px;
            left: -70px;
            width: 320px;
            height: 320px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--accent-muted) 0%, transparent 65%);
            pointer-events: none;
        }

        .nh-market-title {
            font-family: var(--font-head);
            font-size: clamp(1.5rem, 3vw, 2.1rem);
            font-weight: 900;
            color: var(--text-primary);
            margin-bottom: .85rem;
            position: relative;
        }

        .nh-market-title span {
            color: var(--accent);
        }

        .nh-market-sub {
            color: var(--text-secondary);
            font-size: .92rem;
            line-height: 1.75;
            max-width: 560px;
            margin-bottom: 1.75rem;
            position: relative;
        }

        .nh-market-points {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.25rem;
            margin-top: 2.25rem;
            position: relative;
        }

        .nh-market-point {
            display: flex;
            flex-direction: column;
            gap: .4rem;
        }

        .nh-market-point-num {
            font-family: var(--font-head);
            font-weight: 900;
            font-size: 1.6rem;
            color: var(--accent);
        }

        .nh-market-point-lbl {
            font-size: .82rem;
            color: var(--text-secondary);
            line-height: 1.5;
        }

        .nh-market-note {
            font-size: .78rem;
            color: var(--text-muted);
            margin-top: 1rem;
            position: relative;
        }

        /* ── Benefits ────────────────────────────────────────────── */
        .nh-benefits {
            padding: 3.5rem 0;
        }

        .nh-benefit-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 1.75rem;
            height: 100%;
            transition: border-color .25s, transform .25s;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .nh-benefit-card:hover {
            border-color: var(--accent-muted);
            transform: translateY(-3px);
        }

        .nh-benefit-icon {
            width: 52px;
            height: 52px;
            border-radius: var(--radius-md);
            background: var(--accent-dim);
            border: 1px solid var(--accent-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            color: var(--accent);
        }

        .nh-benefit-title {
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .nh-benefit-desc {
            font-size: .85rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin: 0;
        }

        /* ── Closing CTA ─────────────────────────────────────────── */
        .nh-close-cta {
            margin: 1rem 0 3.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 3rem 2.5rem;
            position: relative;
            overflow: hidden;
            text-align: center;
        }

        .nh-close-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .nh-close-cta h2 {
            font-family: var(--font-head);
            font-size: clamp(1.4rem, 2.8vw, 2rem);
            font-weight: 900;
            color: var(--text-primary);
            margin-bottom: .75rem;
        }

        .nh-close-cta p {
            color: var(--text-secondary);
            font-size: .92rem;
            max-width: 480px;
            margin: 0 auto 1.75rem;
            line-height: 1.7;
        }

        .nh-close-cta .nh-cta-row { justify-content: center; }

        /* ── Divider ─────────────────────────────────────────────── */
        .nh-divider {
            border: none;
            border-top: 1px solid var(--border);
            margin: 0;
        }

        /* ── Responsive ──────────────────────────────────────────── */
        @media (max-width: 768px) {
            .nh-hero {
                padding: 2.5rem 1.25rem;
            }

            .nh-about-text {
                padding-left: 0;
                margin-top: 1.5rem;
            }

            .nh-hero-img-wrap {
                margin-top: 2rem;
            }

            .nh-market-panel {
                padding: 2.25rem 1.5rem;
            }

            .nh-close-cta {
                padding: 2.25rem 1.5rem;
            }

            .nh-connect-visual {
                flex-direction: column;
                padding: 2.25rem 1.5rem;
            }

            .nh-connect-line {
                width: 100%;
                height: 80px;
            }
        }

        [data-h-theme="light"] {
            --bg-base: #f6faf8;
            --bg-card: #F5f5f7;
            --bg-card-alt: #eef4f1;
            --bg-elevated: #e7f0ec;
            --accent: #00a667;
            --accent-dim: rgba(0, 166, 103, 0.08);
            --accent-muted: rgba(0, 166, 103, 0.25);
            --accent-hover: #00814f;
            --text-primary: #10201b;
            --text-secondary: #4f6b65;
            --text-muted: #7d9791;
            --border: rgba(0, 60, 40, 0.1);
            --border-hover: rgba(0, 100, 60, 0.22);
        }

        [data-h-theme="light"] body {
            background: var(--bg-base) !important;
            color: var(--text-primary) !important;
        }

        [data-h-theme="light"] .nh-cta-btn,
        [data-h-theme="light"] .nh-cta-btn:hover {
            color: #fff;
        }

        [data-h-theme="light"] .nh-hero-glow-1 {
            background: radial-gradient(circle, rgba(0, 166, 103, 0.14) 0%, transparent 65%);
        }

        [data-h-theme="light"] .nh-hero-glow-2 {
            background: radial-gradient(circle, rgba(0, 166, 103, 0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] .nh-market-glow,
        [data-h-theme="light"] .nh-dashboard-glow {
            background: radial-gradient(circle, rgba(0, 166, 103, 0.14) 0%, transparent 65%);
        }

        [data-h-theme="light"] .nh-dashboard-frame {
            box-shadow: 0 20px 50px rgba(0, 60, 40, .1);
        }
      `}</style>

      <div className="container">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <div className="nh-hero">
          <div className="nh-hero-glow-1"></div>
          <div className="nh-hero-glow-2"></div>
          <div className="row align-items-center nh-hero-content">
            <div className="col-lg-7">
              <span className="nh-eyebrow">
                <i className="fa-solid fa-network-wired"></i> Networking Hub
              </span>
              <h1 className="nh-hero-title">
                Your Next Opportunity <span>Is Waiting</span><br />On the Other Side of a Connection
              </h1>
              <p className="nh-hero-sub">
                Every day you're not on Future Connect, someone else is booking the client, hiring the designer,
                or landing the collaborator who should've found you. Join now — verified people, real
                opportunities, one conversation away.
              </p>
              <div className="nh-cta-row">
                <Link href={r("talent.start-connecting")} className="nh-cta-btn">
                  Start Connecting <i className="feather-arrow-right"></i>
                </Link>
                <Link href={r("user.talents")} className="nh-cta-btn-outline">
                  Explore Skills <i className="feather-arrow-right"></i>
                </Link>
              </div>
              <div className="nh-popular">
                <span className="nh-popular-label">Popular:</span>
                {popularCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={categoryRoute(routes, cat.slug)}
                    className="nh-tag"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="nh-hero-img-wrap">
                <img src={asset("/assets/img/bg/provide-bg.jpg")} className="nh-hero-img-main" alt="Networking Hub" />
                <div className="nh-hero-stat">
                  <div className="nh-stat-item">
                    <div className="nh-stat-num">10K+</div>
                    <div className="nh-stat-lbl">Skills</div>
                  </div>
                  <div style={{ width: 1, height: 32, background: "var(--border)" }}></div>
                  <div className="nh-stat-item">
                    <div className="nh-stat-num">{categories.length}</div>
                    <div className="nh-stat-lbl">Categories</div>
                  </div>
                  <div style={{ width: 1, height: 32, background: "var(--border)" }}></div>
                  <div className="nh-stat-item">
                    <div className="nh-stat-num">98%</div>
                    <div className="nh-stat-lbl">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="nh-divider" />

        {/* ── About Section ─────────────────────────────────────── */}
        <section className="nh-about">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="nh-about-img-grid">
                <img src={asset("/assets/img/bg/provide-bg.jpg")} alt="About" />
                <img src={asset("/assets/img/aboutus/about-us-02.jpg")} alt="About" />
                <img src={asset("/assets/img/aboutus/about-us-03.jpg")} alt="About" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="nh-about-text">
                <div className="nh-section-head">
                  <div className="nh-section-eyebrow">Why Join</div>
                  <h2 className="nh-section-title">
                    Stop searching alone.<br />Start connecting instead.
                  </h2>
                  <p>
                    Whether you're chasing your next client, hunting for a collaborator, or trying to grow a
                    network from scratch — doing it the old way costs you weeks. Future Connect puts the right
                    people directly in front of you the moment you sign in.
                  </p>
                  <h5>Built for people who move fast</h5>
                  <p>
                    We believe finding the right person shouldn't take longer than doing the work itself. So we
                    built a platform where every profile is verified, every opportunity is real, and every
                    connection actually goes somewhere.
                  </p>
                </div>
                <ul className="nh-feature-list">
                  <li>Verified professionals, not empty profiles</li>
                  <li>Real opportunities, updated daily</li>
                  <li>A platform built for speed, not friction</li>
                  <li>Your network, growing while you sleep</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="nh-divider" />

        {/* ── Connection animation section ───────────────────────── */}
        <section className="nh-connect">
          <div className="nh-section-head text-center mx-auto" style={{ maxWidth: 620 }}>
            <div className="nh-section-eyebrow justify-content-center">How It Works</div>
            <h2 className="nh-section-title">One click. One connection. One step closer.</h2>
            <p className="nh-section-sub">
              You post what you need — Future Connect quietly matches you with the right talent in the background.
            </p>
          </div>

          <div className="nh-connect-visual">
            <div className="nh-connect-node">
              <div className="nh-connect-avatar">
                <i className="fa-solid fa-user"></i>
              </div>
              <span>You</span>
            </div>

            <svg className="nh-connect-line" viewBox="0 0 600 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20,60 C 150,10 450,110 580,60"
                stroke="var(--border-hover)"
                strokeWidth="2"
                strokeDasharray="6 10"
                fill="none"
              />
              <circle r="5" fill="var(--accent)">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M20,60 C 150,10 450,110 580,60" />
              </circle>
              <circle r="5" fill="var(--accent)" opacity="0.6">
                <animateMotion dur="3.2s" begin="1.05s" repeatCount="indefinite" path="M20,60 C 150,10 450,110 580,60" />
              </circle>
              <circle r="5" fill="var(--accent)" opacity="0.3">
                <animateMotion dur="3.2s" begin="2.1s" repeatCount="indefinite" path="M20,60 C 150,10 450,110 580,60" />
              </circle>
            </svg>

            <div className="nh-connect-node">
              <div className="nh-connect-avatar accent">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <span>Skills</span>
            </div>
          </div>

          <div className="nh-connect-badges">
            <span className="nh-connect-badge"><i className="fa-solid fa-circle-check"></i> Verified</span>
            <span className="nh-connect-badge"><i className="fa-solid fa-bolt"></i> Instant match</span>
            <span className="nh-connect-badge"><i className="fa-solid fa-shield-halved"></i> Secure messaging</span>
            <span className="nh-connect-badge"><i className="fa-solid fa-star"></i> Rated by real clients</span>
          </div>
        </section>

        {/* ── Dashboard preview section ───────────────────────────── */}
        <section className="nh-dashboard">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 order-lg-2">
              <div className="nh-dashboard-copy-wrap">
                <div className="nh-dashboard-glow"></div>
                <div className="nh-section-eyebrow">Your Command Center</div>
                <h2 className="nh-section-title">Everything you need, in one dashboard.</h2>
                <p className="nh-section-sub mb-3">
                  Track conversations, manage active projects, and see new matches roll in — all from a single,
                  clean dashboard built to keep you moving instead of digging through tabs.
                </p>
                <ul className="nh-feature-list mb-4">
                  <li>See new matches the moment they land</li>
                  <li>Manage every conversation in one inbox</li>
                  <li>Track projects from first message to done</li>
                </ul>
                <Link href={r("user.talents")} className="nh-cta-btn">
                  Get Your Dashboard <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="nh-dashboard-frame">
                <div className="nh-browser-bar">
                  <span className="nh-browser-dot"></span>
                  <span className="nh-browser-dot"></span>
                  <span className="nh-browser-dot"></span>
                </div>
                <img
                  src={asset("/assets/img/dashboard/dashboard-preview.jpg")}
                  alt="Future Connect dashboard preview"
                  className="nh-dashboard-img"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="nh-divider" />

        {/* ── Marketing panel: Start Connecting ──────────────────── */}
        <section className="nh-market">
          <div className="nh-market-panel">
            <div className="nh-market-glow"></div>
            <span className="nh-eyebrow">Why Wait?</span>
            <h2 className="nh-market-title">
              Your Next Opportunity Is <span>One Connection Away.</span>
            </h2>
            <p className="nh-market-sub">
              Every day you're not connected is a day someone else claims the client, the collaborator, or the
              mentor who should've found you. Future Connect brings the network to you — verified people, real
              opportunities, no cold outreach required.
            </p>
            <div className="nh-cta-row">
              <Link href={r("talent.start-connecting")} className="nh-cta-btn">
                Start Connecting <i className="feather-arrow-right"></i>
              </Link>
              <Link href={r("user.talents")} className="nh-cta-btn-outline">
                Explore Skills <i className="feather-arrow-right"></i>
              </Link>
            </div>
            <div className="nh-market-points">
              <div className="nh-market-point">
                <span className="nh-market-point-num">10K+</span>
                <span className="nh-market-point-lbl">Verified skills ready to work with you</span>
              </div>
              <div className="nh-market-point">
                <span className="nh-market-point-num">98%</span>
                <span className="nh-market-point-lbl">Satisfaction from people who made the switch</span>
              </div>
              <div className="nh-market-point">
                <span className="nh-market-point-num">3 min</span>
                <span className="nh-market-point-lbl">Average time to set up your profile</span>
              </div>
            </div>
            <p className="nh-market-note">Free to join. No credit card required.</p>
          </div>
        </section>

      </div>
    </>
  );
}

NetworkingHub.layout = (page) => <GuestLayout children={page} />;