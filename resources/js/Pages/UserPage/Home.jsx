import React, { useEffect, useRef, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

/**
 * Home (Inertia page component)
 * ------------------------------
 * React/Inertia port of the Blade homepage (`@extends('layouts.guest')`).
 *
 * Notes on the conversion from Blade:
 * - `@extends('layouts.guest')` / `@section('content')` became Inertia's
 *   persistent-layout pattern: `Home.layout = (page) => <GuestLayout>{page}</GuestLayout>`
 *   at the bottom of this file. Swap in your actual layout component path.
 * - `route('name', ...)` calls go through a local `r()` wrapper (see below)
 *   around Ziggy's global `route()` helper — the standard pairing for
 *   Laravel + Inertia. `r()` catches the case where `window.Ziggy` isn't
 *   present yet and logs a pointer to the fix instead of crashing the page.
 *   If you're not using Ziggy at all, swap `r()` for a `routes` prop like in
 *   the UserHeader/UserFooter conversions.
 * - All Blade-side data ($totalTalents, $partners, $categories,
 *   $featuredTalents, $testimonials) became page props, passed in from the
 *   controller via `Inertia::render('Home', [...])`.
 * - `@foreach` / `@if` / `@for` became `.map()` / conditional rendering /
 *   `Array.from({ length: 5 })`.
 * - Internal links use Inertia's `<Link>` for client-side navigation;
 *   external/asset links (images, mailto, `#`) stay as plain `<a>`/`<img>`.
 * - The feature tabs (vanilla JS click handlers) became a React
 *   `activeTab` state.
 * - The hero background carousel and the mobile testimonial carousel still
 *   rely on Bootstrap's JS carousel component (as in the original), wired
 *   up via `useEffect` + refs instead of an inline `<script>` tag. This
 *   assumes `window.bootstrap` is available globally (Bootstrap's JS bundle
 *   loaded in your app entry/layout, same as the Blade version).
 * - Asset paths (`asset('image/talents/...')`) became plain public paths
 *   (`/image/talents/...`) — adjust the base path to match how your Vite/
 *   Laravel build serves `public/`.
 */

const FEATURE_TABS = [
  { key: "skills", label: "Skills" },
  { key: "learning", label: "Learning" },
  { key: "opportunity", label: "Opportunities" },
  { key: "connect", label: "Connect" },
  { key: "marketplace", label: "Marketplace" },
];

const ACCORDION_PANELS = [
  {
    id: "accSkills",
    label: "Skills Marketplace",
    icon: "ti-sparkles",
    routeName: "user.talents",
    cta: "Explore Marketplace",
    desc: "Get verified, showcase your work, and put yourself in front of employers actively hiring for your skill set.",
  },
  {
    id: "accLearn",
    label: "Learning Center",
    icon: "ti-school",
    routeName: "user.courses",
    cta: "Explore Courses",
    desc: "Focused, practical courses built to help you level up fast — taught by people who do the work.",
  },
  {
    id: "accOpp",
    label: "Opportunities",
    icon: "ti-briefcase",
    routeName: "user.talents",
    cta: "Explore Works",
    desc: "Freelance gigs, collaborations, and full-time roles — matched to what you're actually good at.",
  },
  {
    id: "accConnect",
    label: "Connection Room",
    icon: "ti-users",
    routeName: "user.talents",
    cta: "Join Community",
    desc: "A secure space to message, meet, and build real professional relationships with verified members.",
  },
];

// Safe wrapper around Ziggy's global `route()`. If `window.Ziggy` isn't
// present — most commonly because the `@routes` Blade directive is missing
// from your root layout (resources/views/app.blade.php), or it's placed
// after the Inertia app div instead of in <head> — `route()` throws instead
// of returning a URL. This wrapper logs a clear pointer to the fix instead
// of crashing the whole page.
function r(name, params) {
  try {
    return route(name, params);
  } catch (e) {
    console.warn(
      `route("${name}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`
    );
    return "#";
  }
}

function talentImage(t) {
  return t?.image ? `/image/talents/${t.image}` : "/assets/img/user/profile.jpg";
}

function partnerLogo(p) {
  return p?.logo ? `/image/partners/${p.logo}` : "/assets/img/company/logo.svg";
}

function Stars({ rating = 0 }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </>
  );
}

export default function Home({
  totalTalents = 0,
  partners = [],
  categories = [],
  featuredTalents = [],
  testimonials = [],
}) {
  const [activeTab, setActiveTab] = useState("skills");
  const [openAccordion, setOpenAccordion] = useState(ACCORDION_PANELS[0].id);

  const heroCarouselRef = useRef(null);
  const testimonialCarouselRef = useRef(null);

  useEffect(() => {
    if (window.bootstrap && heroCarouselRef.current) {
      new window.bootstrap.Carousel(heroCarouselRef.current, {
        interval: 6000,
        pause: false,
      });
    }
  }, []);

  useEffect(() => {
    if (window.bootstrap && testimonialCarouselRef.current) {
      new window.bootstrap.Carousel(testimonialCarouselRef.current, {
        interval: 6000,
      });
    }
  }, [testimonials.length]);

  return (
    <>
      <Head title="Future Connect — Where Verified Talent Meets Real Opportunity" />

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --bg: #0e1618;
          --bg-card: #131e21;
          --bg-glass: rgba(255, 255, 255, 0.035);
          --bg-glass2: rgba(0, 166, 103, 0.08);
          --accent: #48d597;
          --accent-dim: #008f59;
          --accent-glow: rgba(0, 166, 103, 0.22);
          --accent-line: rgba(0, 166, 103, 0.35);
          --border: rgba(255, 255, 255, 0.07);
          --border-h: rgba(0, 166, 103, 0.3);
          --text-1: #f0f4f3;
          --text-2: #8da4a0;
          --text-3: #4d6460;
          --font-head: 'Montserrat', sans-serif;
          --font-body: 'Montserrat', sans-serif;
          --r-sm: 8px;
          --r-md: 14px;
          --r-lg: 20px;
          --r-pill: 50px;
        }

        body { background: var(--bg) !important; color: var(--text-1); font-family: var(--font-body); }

        .fc-badge {
          display: inline-flex; align-items: center; gap: 6px; background: var(--bg-glass2);
          border: 1px solid var(--border-h); color: var(--accent); border-radius: var(--r-pill);
          padding: 4px 14px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
        }

        .fc-section-head { margin-bottom: 48px; }
        .fc-section-head .eyebrow {
          font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent);
          font-weight: 600; margin-bottom: 12px; display: block;
        }
        .fc-section-head h2 {
          font-family: var(--font-head); font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800;
          color: var(--text-1); margin-bottom: 14px; line-height: 1.15;
        }
        .fc-section-head p { color: var(--text-2); font-size: 0.95rem; max-width: 560px; line-height: 1.7; }

        .btn-fc-primary {
          display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: #fff;
          border: none; border-radius: var(--r-pill); padding: 12px 28px; font-family: var(--font-head);
          font-size: 0.875rem; font-weight: 700; text-decoration: none; cursor: pointer;
          transition: background .2s, transform .15s, box-shadow .2s; box-shadow: 0 4px 22px var(--accent-glow);
        }
        .btn-fc-primary:hover { background: var(--accent-dim); transform: translateY(-2px); box-shadow: 0 8px 32px var(--accent-glow); color: #fff; }

        .btn-fc-outline {
          display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--text-1);
          border: 1px solid var(--border); border-radius: var(--r-pill); padding: 11px 26px; font-family: var(--font-head);
          font-size: 0.875rem; font-weight: 600; text-decoration: none; cursor: pointer;
          transition: border-color .2s, color .2s, background .2s;
        }
        .btn-fc-outline:hover { border-color: var(--border-h); color: var(--accent); background: var(--bg-glass2); }

        .fc-hero { position: relative; min-height: 92vh; display: flex; align-items: center; overflow: hidden; }
        .fc-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .fc-hero-bg .carousel, .fc-hero-bg .carousel-inner, .fc-hero-bg .carousel-item { height: 100%; }
        .fc-hero-bg-slide { width: 100%; height: 100%; background-size: cover; background-position: center; }
        .fc-hero-bg-slide video { width: 100%; height: 100%; object-fit: cover; }
        .fc-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(135deg, rgba(14, 22, 24, 0.92) 0%, rgba(14, 22, 24, 0.75) 50%, rgba(0, 166, 103, 0.08) 100%);
        }
        .fc-hero-grid { position: absolute; inset: 0; z-index: 1; pointer-events: none; background-size: 60px 60px; }
        .fc-hero-content { position: relative; z-index: 2; padding: 80px 40px; }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 0.75rem; text-transform: uppercase;
          letter-spacing: 0.1em; color: var(--accent); font-weight: 600; margin-bottom: 20px;
        }
        .hero-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 2px; background: var(--accent); border-radius: 2px; }

        .fc-hero h1 {
          font-family: var(--font-head); font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 800;
          line-height: 1.08; color: var(--text-1); margin-bottom: 22px;
        }
        .fc-hero h1 .hl { color: var(--accent); }
        .fc-hero p { font-size: 1.05rem; color: var(--text-2); max-width: 540px; line-height: 1.75; margin-bottom: 36px; }

        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 52px; }
        .hero-stats { display: flex; gap: 36px; flex-wrap: wrap; border-top: 1px solid var(--border); padding-top: 28px; }
        .hero-stat-val { font-family: var(--font-head); font-size: 1.7rem; font-weight: 800; color: var(--accent); }
        .hero-stat-lbl { font-size: 0.78rem; color: var(--text-3); margin-top: 2px; }

        .hero-trust-note { font-size: 0.78rem; color: var(--text-3); margin-top: 6px; }

        .avatar-stack { display: flex; }
        .avatar-stack img { width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--bg); object-fit: cover; margin-left: -10px; }
        .avatar-stack img:first-child { margin-left: 0; }

        .fc-feature-strip { background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 28px 0; }
        .feature-strip-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); }
        @media(max-width: 767px) { .feature-strip-grid { grid-template-columns: 1fr; } }
        .feature-strip-item { background: var(--bg-card); padding: 28px 32px; transition: background .2s; }
        .feature-strip-item:hover { background: var(--bg-glass2); }
        .feature-strip-item h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
        .feature-strip-item p { font-size: 0.83rem; color: var(--text-2); margin-bottom: 14px; line-height: 1.6; }
        .strip-link {
          font-size: 0.8rem; font-weight: 600; color: var(--accent); text-decoration: none;
          display: inline-flex; align-items: center; gap: 4px; transition: gap .2s;
        }
        .strip-link:hover { gap: 8px; }
        .strip-icon {
          width: 40px; height: 40px; border-radius: var(--r-sm); background: var(--bg-glass2);
          border: 1px solid var(--border-h); display: flex; align-items: center; justify-content: center;
          color: var(--accent); font-size: 1rem; margin-bottom: 16px;
        }

        .fc-categories { padding: 80px 0; }
        .category-scroll { display: flex; gap: 14px; overflow-x: auto; padding-bottom: 12px; scrollbar-width: none; }
        .category-scroll::-webkit-scrollbar { display: none; }
        .cat-pill {
          display: flex; flex-direction: column; gap: 4px; flex-shrink: 0; background: var(--bg-card);
          border: 1px solid var(--border); border-radius: var(--r-md); padding: 18px 22px; text-decoration: none;
          transition: border-color .2s, transform .2s, background .2s; min-width: 160px;
        }
        .cat-pill:hover { border-color: var(--border-h); background: var(--bg-glass2); transform: translateY(-3px); }
        .cat-pill-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); }
        .cat-pill-count { font-size: 0.75rem; color: var(--text-3); }
        .cat-pill-arrow { color: var(--accent); font-size: 0.75rem; margin-top: 8px; }
        .cat-empty { color: var(--text-3); font-size: 0.85rem; }

        .fc-features { padding: 80px 0; }
        .fc-tab-bar {
          display: flex; gap: 4px; flex-wrap: wrap; background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--r-md); padding: 6px; margin-bottom: 32px;
        }
        .fc-tab-btn {
          flex: 1; min-width: 100px; background: transparent; border: none; border-radius: var(--r-sm);
          padding: 10px 20px; font-family: var(--font-head); font-size: 0.8rem; font-weight: 600; color: var(--text-3);
          cursor: pointer; transition: background .2s, color .2s; white-space: nowrap;
        }
        .fc-tab-btn.active { background: var(--bg-glass2); color: var(--accent); border: 1px solid var(--border-h); }
        .fc-tab-btn:hover:not(.active) { color: var(--text-2); }
        .fc-tab-panel { display: none; animation: panelIn .3s ease; }
        .fc-tab-panel.active { display: block; }
        @keyframes panelIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

        .feature-panel-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 40px; overflow: hidden; position: relative; }
        .feature-panel-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }
        .feature-panel-card h2 { font-family: var(--font-head); font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: var(--text-1); margin-bottom: 16px; line-height: 1.2; }
        .feature-panel-card h2 span { color: var(--accent); }
        .feature-panel-card p { color: var(--text-2); line-height: 1.75; margin-bottom: 28px; max-width: 520px; }

        .feature-img-wrap { text-align: center; }
        .feature-img-wrap img { max-height: 260px; }

        .fc-provide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-top: 24px; }
        .fc-provide-box { background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-md); padding: 24px; transition: border-color .2s, transform .2s; }
        .fc-provide-box:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .fc-provide-box .provide-icon { margin-bottom: 14px; }
        .fc-provide-box .provide-icon img {
          height: 36px;
          filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(130deg) brightness(104%) contrast(101%);
        }
        .fc-provide-box h6 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
        .fc-provide-box p { font-size: 0.82rem; color: var(--text-2); line-height: 1.6; margin-bottom: 16px; }

        .feature-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 12px; }
        .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.87rem; color: var(--text-2); line-height: 1.5; }
        .feature-list li::before {
          content: ''; flex-shrink: 0; margin-top: 5px; width: 16px; height: 16px; border-radius: 50%;
          background: var(--bg-glass2); border: 1px solid var(--border-h);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
          background-size: 10px; background-repeat: no-repeat; background-position: center;
        }

        .fc-how { padding: 80px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2px; background: var(--border); }
        .step-card { background: var(--bg-card); padding: 36px 28px; transition: background .2s; }
        .step-card:hover { background: var(--bg-glass2); }
        .step-num { font-family: var(--font-head); font-size: 3rem; font-weight: 800; color: var(--accent); opacity: 0.15; line-height: 1; margin-bottom: 16px; display: block; }
        .step-card h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 10px; }
        .step-card p { font-size: 0.83rem; color: var(--text-2); line-height: 1.65; margin-bottom: 16px; }

        .fc-partners { padding: 60px 0; }
        .partners-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-3); font-weight: 600; text-align: center; margin-bottom: 32px; }
        .partners-scroll { display: flex; align-items: center; gap: 48px; overflow-x: auto; scrollbar-width: none; padding-bottom: 8px; }
        .partners-scroll::-webkit-scrollbar { display: none; }
        .partners-scroll img { height: 36px; width: auto; object-fit: contain; filter: brightness(0) invert(1); opacity: 0.25; flex-shrink: 0; transition: opacity .2s; }
        .partners-scroll img:hover { opacity: 0.6; }

        .fc-testimonials { padding: 80px 0; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
        .testimonial-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); padding: 24px;
          display: flex; flex-direction: column; gap: 16px; transition: border-color .2s, transform .2s;
        }
        .testimonial-card:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .testimonial-head { display: flex; align-items: center; gap: 14px; }
        .testimonial-head img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-h); flex-shrink: 0; }
        .testimonial-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); }
        .testimonial-role { font-size: 0.75rem; color: var(--text-3); }
        .testimonial-stars { color: var(--accent); font-size: 0.8rem; margin-left: auto; }
        .testimonial-body p { font-size: 0.85rem; color: var(--text-2); line-height: 1.7; }
        .testimonial-loc { font-size: 0.75rem; color: var(--text-3); display: flex; align-items: center; gap: 5px; }

        .fc-cta { margin: 0 0 80px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 56px 48px; position: relative; overflow: hidden; }
        .fc-cta::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
        .fc-cta-glow { position: absolute; top: -60px; right: -60px; width: 280px; height: 280px; border-radius: 50%; background: var(--accent-glow); filter: blur(80px); pointer-events: none; }
        .fc-cta h2 { font-family: var(--font-head); font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; color: var(--text-1); margin-bottom: 12px; }
        .fc-cta p { color: var(--text-2); font-size: 0.95rem; max-width: 480px; margin-bottom: 28px; }

        .fc-accordion { padding: 48px 0; }
        .fc-accordion .accordion-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md) !important; margin-bottom: 8px; overflow: hidden; }
        .fc-accordion .accordion-button { background: var(--bg-card); color: var(--text-1); font-family: var(--font-head); font-weight: 600; font-size: 0.9rem; box-shadow: none; padding: 18px 22px; }
        .fc-accordion .accordion-button:not(.collapsed) { color: var(--accent); background: var(--bg-glass2); }
        .fc-accordion .accordion-button::after { filter: invert(1); }
        .fc-accordion .accordion-collapse { border-top: 1px solid var(--border); }
        .fc-accordion .accordion-body { padding: 24px; }

        [data-h-theme="light"] {
          --bg: #f6faf8; --bg-card: #ffffff; --bg-glass: rgba(0, 60, 40, 0.03); --bg-glass2: rgba(0, 166, 103, 0.07);
          --accent: #00a667; --accent-dim: #00814f; --accent-glow: rgba(0, 166, 103, 0.16); --accent-line: rgba(0, 166, 103, 0.3);
          --border: rgba(0, 60, 40, 0.08); --border-h: rgba(0, 166, 103, 0.28);
          --text-1: #10201b; --text-2: #4f6b65; --text-3: #7d9791;
        }
        [data-h-theme="light"] body { background: var(--bg) !important; color: var(--text-1); }
        [data-h-theme="light"] .btn-fc-primary { color: #fff; }
        [data-h-theme="light"] .btn-fc-primary:hover { color: #fff; }
        [data-h-theme="light"] .fc-hero-overlay {
          background: linear-gradient(135deg, rgba(246, 250, 248, 0.93) 0%, rgba(246, 250, 248, 0.78) 50%, rgba(0, 166, 103, 0.10) 100%);
        }
        [data-h-theme="light"] .fc-provide-box .provide-icon img {
          filter: brightness(0) saturate(100%) invert(38%) sepia(90%) saturate(1000%) hue-rotate(120deg) brightness(90%) contrast(101%);
        }
        [data-h-theme="light"] .partners-scroll img { filter: none; opacity: 0.45; }
        [data-h-theme="light"] .partners-scroll img:hover { opacity: 0.85; }
        [data-h-theme="light"] .fc-accordion .accordion-button::after { filter: none; }
      `}</style>

      {/* ════════════════════════════════════
           1. HERO
      ════════════════════════════════════ */}
      <section className="fc-hero">
        <div className="fc-hero-bg">
          <div id="heroBgCarousel" className="carousel slide" ref={heroCarouselRef}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="fc-hero-bg-slide"
                  style={{ backgroundImage: "url('/assets/img/banner-hero.jpg')" }}
                />
              </div>
              <div className="carousel-item">
                <div className="fc-hero-bg-slide">
                  <video autoPlay muted loop playsInline>
                    <source src="/assets/img/banner-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="fc-hero-bg-slide"
                  style={{ backgroundImage: "url('/assets/img/provide-bg.jpg')" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="fc-hero-overlay" />
        <div className="fc-hero-grid" />

        <div className="container fc-hero-content">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="hero-eyebrow">The Verified Talent Network</p>
              <h1>
                Where Skilled Professionals <span className="hl">Get Discovered.</span>
              </h1>
              <p>
                Future Connect brings verified talent, real opportunities, and practical learning together in one
                trusted platform — so you can build a career or a team without the guesswork.
              </p>
              <div className="hero-ctas">
                <Link href={r("user.talents")} className="btn-fc-primary">
                  Browse Talent <i className="ti ti-arrow-right" />
                </Link>
                <Link href={r("register")} className="btn-fc-outline">
                  Create Your Profile <i className="ti ti-user-plus" />
                </Link>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="hero-stat-val">{totalTalents}+</div>
                  <div className="hero-stat-lbl">Verified Professionals</div>
                </div>
                <div>
                  <div className="hero-stat-val">{partners.length}+</div>
                  <div className="hero-stat-lbl">Trusted Partners</div>
                </div>
                <div>
                  <div className="hero-stat-val">4.8</div>
                  <div className="hero-stat-lbl">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
           5. HOW IT WORKS
      ════════════════════════════════════ */}
      <section className="fc-how">
        <div className="container">
          <div className="fc-section-head text-center" style={{ maxWidth: 600, margin: "0 auto 48px" }}>
            <span className="eyebrow">How It Works</span>
            <h2>From Sign-Up to Standout — in 3 Steps</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-num">01</span>
              <h5>Create Your Profile</h5>
              <p>Sign up and showcase your story, skills, and aspirations through text, images, and video.</p>
              <Link href={r("user.register_as_talent")} className="strip-link">
                Get Started <i className="ti ti-arrow-right" />
              </Link>
            </div>
            <div className="step-card">
              <span className="step-num">02</span>
              <h5>Get Discovered & Rated</h5>
              <p>Employers browse by category, leave ratings, and share feedback that helps you grow your reputation.</p>
              <Link href={r("user.talents")} className="strip-link">
                Explore Skills <i className="ti ti-arrow-right" />
              </Link>
            </div>
            <div className="step-card">
              <span className="step-num">03</span>
              <h5>Grow With the Community</h5>
              <p>Connect with peers, keep learning, and buy or sell tools with creators across the platform.</p>
              <Link href={r("talent.connections-room")} className="strip-link">
                Connection Room<i className="ti ti-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
           2. FEATURE STRIP
      ════════════════════════════════════ */}
      <div className="fc-feature-strip">
        <div className="container">
          <div className="feature-strip-grid">
            <div className="feature-strip-item">
              <div className="strip-icon"><i className="ti ti-rocket" /></div>
              <h5>Get Seen Faster</h5>
              <p>Verified, boosted profiles reach up to 3× more employers — and can be featured right on our homepage.</p>
              <Link href={r("user.talents")} className="strip-link">
                Find Skills <i className="ti ti-arrow-right" />
              </Link>
            </div>
            <div className="feature-strip-item">
              <div className="strip-icon"><i className="ti ti-briefcase" /></div>
              <h5>Unlock Real Opportunities</h5>
              <p>Tailored job listings, freelance gigs, and collaboration projects matched to your actual skill set.</p>
              <Link href={r("user.jobs.index")} className="strip-link">
                Start Exploring <i className="ti ti-arrow-right" />
              </Link>
            </div>
            <div className="feature-strip-item">
              <div className="strip-icon"><i className="ti ti-users" /></div>
              <h5>Grow Your Network</h5>
              <p>Meet professionals, find mentors, and build the relationships that move a career forward.</p>
              <Link href={r("talent.connections-room")} className="strip-link">
                Skill Connect<i className="ti ti-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
           3. TRENDING CATEGORIES
      ════════════════════════════════════ */}
      <section className="fc-categories">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-md-8">
              <div className="fc-section-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Browse Categories</span>
                <h2>The Skills Shaping Today's Market</h2>
                <p>From design to development to consulting — find the category that fits, then find your person.</p>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <Link href={r("user.talents")} className="btn-fc-outline" style={{ fontSize: "0.8rem", padding: "9px 20px" }}>
                All Categories <i className="ti ti-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="category-scroll">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <Link key={cat.id} href={r("user.talents.category", cat.slug)} className="cat-pill">
                  <span className="cat-pill-name">{cat.name}</span>
                  <span className="cat-pill-count">{cat.talents_count ?? 0} talents</span>
                  <span className="cat-pill-arrow"><i className="ti ti-arrow-right" /></span>
                </Link>
              ))
            ) : (
              <p className="cat-empty">New categories are being added — check back soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
           4. FEATURES TABS (DESKTOP)
      ════════════════════════════════════ */}
      <section className="fc-features d-none d-lg-block" id="features">
        <div className="container">
          <div className="fc-section-head">
            <span className="eyebrow">Platform Features</span>
            <h2>Everything You Need, In One Place</h2>
            <p>Showcase your skills, find your next opportunity, keep learning, and connect with the right people — all inside Future Connect.</p>
          </div>

          <div className="fc-tab-bar" role="tablist">
            {FEATURE_TABS.map((tab) => (
              <button
                key={tab.key}
                className={`fc-tab-btn${activeTab === tab.key ? " active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills */}
          <div className={`fc-tab-panel${activeTab === "skills" ? " active" : ""}`}>
            <div className="feature-panel-card">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <span className="fc-badge mb-3"><i className="ti ti-sparkles" /> Skills Marketplace</span>
                  <h2>Turn your skills <span>into</span> your next client.</h2>
                  <p>
                    Future Connect's Skills Marketplace helps you present verified work, build trust fast, and
                    convert profile views into real freelance and full-time opportunities.
                  </p>
                  <ul className="feature-list">
                    <li>Get verified and build instant credibility with employers</li>
                    <li>Feature your story and best work on our homepage</li>
                    <li>Reach up to 3× more clients with a boosted profile</li>
                  </ul>
                  <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                    <Link href={r("user.talents")} className="btn-fc-primary">
                      Find skills<i className="ti ti-arrow-right" />
                    </Link>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div className="avatar-stack">
                        {featuredTalents.map((t, i) => (
                          <img key={t.id ?? i} src={talentImage(t)} alt="" />
                        ))}
                      </div>
                      <div>
                        <div style={{ color: "var(--accent)", fontSize: "0.8rem" }}>★★★★★ 4.8/5</div>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>{totalTalents}+ professionals</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 feature-img-wrap">
                  <img src="/assets/img/home/banner-image.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          {/* Learning */}
          <div className={`fc-tab-panel${activeTab === "learning" ? " active" : ""}`}>
            <div className="feature-panel-card">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <span className="fc-badge mb-3"><i className="ti ti-school" /> Learning Center</span>
                  <h2>Skills that pay off, <span>faster.</span></h2>
                  <p>
                    Short, focused courses taught by working professionals — built for real-world application, not
                    just certificates that sit in a drawer.
                  </p>
                  <ul className="feature-list">
                    <li>Short, high-impact micro-courses</li>
                    <li>Instructors who work in the industry they teach</li>
                    <li>Shareable certificates that strengthen your profile</li>
                  </ul>
                  <Link href={r("user.courses")} className="btn-fc-primary">
                    Explore Courses <i className="ti ti-arrow-right" />
                  </Link>
                </div>
                <div className="col-lg-6 feature-img-wrap">
                  <img src="/assets/img/banner-img.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          {/* Opportunities */}
          <div className={`fc-tab-panel${activeTab === "opportunity" ? " active" : ""}`}>
            <div className="feature-panel-card">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <span className="fc-badge mb-3"><i className="ti ti-briefcase" /> Opportunities</span>
                  <h2>Post the work. <span>Find</span> the right people.</h2>
                  <p>
                    Whether you're hiring or looking to be hired, Opportunities connects you with verified talent
                    and real roles — without the noise of open job boards.
                  </p>
                  <ul className="feature-list">
                    <li>Post freelance gigs and full-time roles in minutes</li>
                    <li>Find verified collaborators in one trusted network</li>
                    <li>Set job alerts so you never miss the right match</li>
                  </ul>
                  <Link href={r("user.jobs.index")} className="btn-fc-primary">
                    Explore Opportunities <i className="ti ti-arrow-right" />
                  </Link>
                </div>
                <div className="col-lg-6 feature-img-wrap">
                  <img src="/assets/img/banner-img.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className={`fc-tab-panel${activeTab === "connect" ? " active" : ""}`}>
            <div className="feature-panel-card">
              <div className="row align-items-center g-5">
                <div className="col-lg-5">
                  <div className="row g-3">
                    <div className="col-6">
                      <img src="/assets/img/aboutus/about-us-01.jpg" alt="" className="img-fluid" style={{ borderRadius: "var(--r-md)" }} />
                    </div>
                    <div className="col-6 d-flex flex-column gap-3">
                      <img src="/assets/img/aboutus/about-us-02.jpg" alt="" className="img-fluid" style={{ borderRadius: "var(--r-md)" }} />
                      <img src="/assets/img/aboutus/about-us-03.jpg" alt="" className="img-fluid" style={{ borderRadius: "var(--r-md)" }} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <span className="fc-badge mb-3"><i className="ti ti-users" /> Connection Room</span>
                  <h2>Build relationships <span>securely</span>, not just contacts.</h2>
                  <p>
                    The Connection Room gives verified professionals a private space to message, meet, and
                    collaborate — from quick check-ins to scheduled mentorship calls.
                  </p>
                  <ul className="feature-list">
                    <li>A diverse, verified professional network</li>
                    <li>Built on trust and transparency at every step</li>
                    <li>A simple, distraction-free way to connect</li>
                  </ul>
                  <Link href={r("talent.connections-room")} className="btn-fc-primary">
                    Skills Connect<i className="ti ti-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Marketplace */}
          <div className={`fc-tab-panel${activeTab === "marketplace" ? " active" : ""}`}>
            <div className="feature-panel-card">
              <span className="fc-badge mb-3"><i className="ti ti-shopping-bag" /> Marketplace</span>
              <h2>Buy, sell, and grow <span>on your terms.</span></h2>
              <p>
                From templates to digital tools, the Marketplace lets creators sell their work with full payment
                protection — and lets buyers shop with confidence.
              </p>
              <div className="fc-provide-grid">
                <div className="fc-provide-box">
                  <div className="provide-icon"><img src="/assets/img/icons/ipad-icon.svg" alt="" /></div>
                  <h6>Browse Products</h6>
                  <p>Everything you need for your craft, backed by secure payments through Future Connect.</p>
                  <Link href={r("user.products.index")} className="btn-fc-primary" style={{ fontSize: "0.8rem", padding: "9px 18px" }}>
                    Explore <i className="ti ti-arrow-right" />
                  </Link>
                </div>
                <div className="fc-provide-box">
                  <div className="provide-icon"><img src="/assets/img/icons/service-icon.svg" alt="" /></div>
                  <h6>Sell a Product</h6>
                  <p>Put your digital products in front of thousands of buyers already on the platform.</p>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#applySellerModal"
                    className="btn-fc-outline"
                    style={{ fontSize: "0.8rem", padding: "9px 18px", cursor: "pointer" }}
                  >
                    Learn More <i className="ti ti-arrow-right" />
                  </a>
                </div>
                <div className="fc-provide-box">
                  <div className="provide-icon"><img src="/assets/img/icons/user-icon-01.svg" alt="" /></div>
                  <h6>Become a Seller</h6>
                  <p>Get paid instantly — Future Connect keeps a small fee to cover logistics and support.</p>
                  <a
                    className="btn-fc-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#applySellerModal"
                    style={{ fontSize: "0.8rem", padding: "9px 18px", cursor: "pointer" }}
                  >
                    Apply <i className="ti ti-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
           4b. FEATURES ACCORDION (MOBILE)
      ════════════════════════════════════ */}
      <div className="fc-accordion d-lg-none">
        <div className="container">
          <div className="fc-section-head">
            <span className="eyebrow">Platform Features</span>
            <h2>Everything You Need, In One Place</h2>
          </div>
          <div className="accordion" id="fcAccordion">
            {ACCORDION_PANELS.map((panel) => {
              const isOpen = openAccordion === panel.id;
              return (
                <div className="accordion-item" key={panel.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button${isOpen ? "" : " collapsed"}`}
                      onClick={() => setOpenAccordion(isOpen ? null : panel.id)}
                    >
                      <i className={`ti ${panel.icon} me-2`} style={{ color: "var(--accent)" }} />
                      {panel.label}
                    </button>
                  </h2>
                  {isOpen && (
                    <div className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        <p style={{ fontSize: "0.85rem", color: "var(--text-2)", marginBottom: 16 }}>{panel.desc}</p>
                        <Link
                          href={r(panel.routeName)}
                          className="btn-fc-primary"
                          style={{ fontSize: "0.82rem", padding: "10px 20px" }}
                        >
                          {panel.cta} <i className="ti ti-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
           6. PARTNERS
      ════════════════════════════════════ */}
      {partners.length > 0 && (
        <section className="fc-partners">
          <div className="container">
            <p className="partners-label">Trusted by {partners.length}+ Partners Worldwide</p>
            <div className="partners-scroll">
              {partners.map((partner, i) => (
                <img key={partner.id ?? i} src={partnerLogo(partner)} alt={partner.name ?? "Partner"} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════
           7. TESTIMONIALS
      ════════════════════════════════════ */}
      <section className="fc-testimonials">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-md-7">
              <div className="fc-section-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Testimonials</span>
                <h2>Real Stories From Real Talent</h2>
                <p>Hear from professionals who've grown their careers, client lists, and networks through Future Connect.</p>
              </div>
            </div>
            <div className="col-md-5 text-md-end">
              <div className="avatar-stack" style={{ justifyContent: "flex-end", marginBottom: 8 }}>
                {testimonials.map((t, i) => (
                  <img key={t.id ?? i} src={talentImage(t.talent)} alt="" />
                ))}
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Building a Global Talent Community</p>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="testimonial-grid d-none d-md-grid">
            {testimonials.map((test, i) => (
              <div className="testimonial-card" key={test.id ?? i}>
                <div className="testimonial-head">
                  <img src={talentImage(test.talent)} alt="" />
                  <div>
                    <div className="testimonial-name">{test.talent?.name ?? "Talent"}</div>
                    <div className="testimonial-role">{test.title ?? "Creative Professional"}</div>
                  </div>
                  <div className="testimonial-stars">
                    <Stars rating={test.rating} />
                  </div>
                </div>
                <div className="testimonial-body">
                  <p>{test.content ?? "Future Connect helped me turn my skills into steady, real opportunities."}</p>
                </div>
                <div className="testimonial-loc">
                  <i className="ti ti-map-pin" style={{ color: "var(--accent)" }} />
                  {test.talent?.address ?? "Kigali, Rwanda"}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div
            id="testimonialCarousel"
            className="carousel slide d-md-none"
            ref={testimonialCarouselRef}
          >
            <div className="carousel-inner">
              {testimonials.map((test, i) => (
                <div className={`carousel-item${i === 0 ? " active" : ""}`} key={test.id ?? i}>
                  <div className="testimonial-card" style={{ margin: "0 auto", maxWidth: 380 }}>
                    <div className="testimonial-head">
                      <img src={talentImage(test.talent)} alt="" />
                      <div>
                        <div className="testimonial-name">{test.talent?.name ?? "Talent"}</div>
                        <div className="testimonial-role">{test.title ?? "Creative Professional"}</div>
                      </div>
                      <div className="testimonial-stars">
                        <Stars rating={test.rating} />
                      </div>
                    </div>
                    <div className="testimonial-body">
                      <p>{test.content ?? "Future Connect helped me turn my skills into steady, real opportunities."}</p>
                    </div>
                    <div className="testimonial-loc">
                      <i className="ti ti-map-pin" style={{ color: "var(--accent)" }} />
                      {test.talent?.address ?? "Kigali, Rwanda"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
           9. CTA JOIN BANNER
      ════════════════════════════════════ */}
      <div className="container">
        <div className="fc-cta">
          <div className="fc-cta-glow" />
          <div className="row align-items-center">
            <div className="col-md-7" style={{ position: "relative" }}>
              <span
                className="eyebrow"
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 12,
                }}
              >
                Join Future Connect
              </span>
              <h2>Your skills deserve to be seen. Let's make that happen.</h2>
              <p>Join a growing community of verified professionals building real careers, one connection at a time. It only takes a few minutes to start.</p>
              <div className="hero-ctas" style={{ marginBottom: 0 }}>
                <Link href={r("user.register_as_talent")} className="btn-fc-primary">
                  Get Started <i className="ti ti-arrow-right" />
                </Link>
                <Link href={r("user.talents")} className="btn-fc-outline">
                  Browse Skills
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.layout = (page) => <GuestLayout children={page} />;