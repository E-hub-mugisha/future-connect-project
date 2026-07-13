import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
/**
 * NetworkingHub
 * -------------
 * React/Inertia port of the Blade `networking-hub` page.
 *
 * Notes on the conversion from Blade:
 * - `@extends('layouts.guest')` / `@section` — this component assumes it's
 *   rendered inside your Inertia layout (e.g. via `Page.layout = GuestLayout`
 *   or a persistent layout wrapper). The page `<title>` is now set with
 *   Inertia's `<Head>` instead of `@section('title', ...)`.
 * - `\App\Models\Category::all()` became a `categories` prop — pass the
 *   categories (with `talents_count`, e.g. via `withCount('talents')`) from
 *   your controller: `Inertia::render('NetworkingHub', ['categories' => ...])`.
 * - `route('user.talents')` / `route('user.talents.category', $slug)` became
 *   lookups into a `routes` prop (see DEFAULT_ROUTES below for fallbacks).
 *   If you have Ziggy set up globally, swap `r(name)` calls for Ziggy's
 *   `route(name)` directly and drop the `routes` prop.
 * - `{{ asset(...) }}` became plain string paths — pass an `assetBase` prop
 *   if your built assets live somewhere other than `/`.
 * - `@foreach` loops became `.map()`.
 * - `optional($cat->talents)->count() ?? 0` became `cat.talents_count ?? 0`
 *   — make sure your controller eager-loads/counts this.
 * - The vanilla `document.addEventListener('DOMContentLoaded', ...)` talent
 *   tab-filter script referenced `#talentTabs` / `.talent-item`, which don't
 *   exist on this page — it was dead code in the original Blade file, so it
 *   was dropped. If you have a talent tab filter elsewhere, wire it with
 *   React state (`useState` for the active filter) instead of DOM queries.
 * - Swiper's CSS/JS `<script>` tags weren't actually used anywhere in this
 *   page's markup (no `.swiper` elements), so they were left out. If you
 *   add a Swiper carousel later, install the `swiper` npm package and
 *   `import 'swiper/css'` / `import { Swiper, SwiperSlide } from 'swiper/react'`
 *   instead of loading it from a CDN inside a page component.
 */

const DEFAULT_ROUTES = {
  "user.talents": "/skills-marketplace",
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
      <Head title="Networking Hub – Connect with Skills & Opportunities" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
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
        }

        body {
            background: var(--bg-base) !important;
            color: var(--text-primary) !important;
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

        /* subtle grid pattern */
        .nh-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(var(--border) 1px, transparent 1px),
                linear-gradient(90deg, var(--border) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: .4;
            pointer-events: none;
        }

        /* glow blobs */
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
            font-family: 'Syne', sans-serif;
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

        .nh-cta-btn i {
            font-size: 1rem;
        }

        /* Popular search tags */
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

        /* Hero image collage */
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
            font-family: 'Syne', sans-serif;
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
            font-family: 'Syne', sans-serif;
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

        /* ── Categories Grid (desktop) ───────────────────────────── */
        .nh-cats {
            padding: 3.5rem 0;
        }

        .nh-cat-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 1.4rem;
            display: flex;
            flex-direction: column;
            gap: .6rem;
            transition: border-color .25s, transform .25s;
            height: 100%;
        }

        .nh-cat-card:hover {
            border-color: var(--accent-muted);
            transform: translateY(-3px);
        }

        .nh-cat-icon {
            width: 42px;
            height: 42px;
            border-radius: var(--radius-sm);
            background: var(--accent-dim);
            border: 1px solid var(--accent-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
            font-size: 1.1rem;
            flex-shrink: 0;
        }

        .nh-cat-name {
            font-size: .9rem;
            font-weight: 700;
            color: var(--text-primary);
            text-decoration: none;
            line-height: 1.3;
        }

        .nh-cat-name:hover {
            color: var(--accent);
        }

        .nh-cat-count {
            font-size: .72rem;
            color: var(--text-muted);
        }

        .nh-cat-link {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-size: .75rem;
            font-weight: 700;
            color: var(--accent);
            text-decoration: none;
            margin-top: auto;
            transition: gap .2s;
        }

        .nh-cat-link:hover {
            gap: 8px;
            color: var(--accent-hover);
        }

        /* ── Trending scroll (mobile) ────────────────────────────── */
        .nh-trend-scroll {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 6px;
            scrollbar-width: thin;
            scrollbar-color: var(--border) transparent;
        }

        .nh-trend-scroll::-webkit-scrollbar {
            height: 4px;
        }

        .nh-trend-scroll::-webkit-scrollbar-thumb {
            background: var(--border);
            border-radius: 4px;
        }

        .nh-trend-chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            flex-shrink: 0;
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            font-size: .8rem;
            font-weight: 600;
            padding: 7px 16px;
            border-radius: 50px;
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
            white-space: nowrap;
        }

        .nh-trend-chip:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-dim);
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
        }

        [data-h-theme="light"] {
            --bg-base: #f6faf8;
            --bg-card: #ffffff;
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

        /* CTA button text stays white on the solid accent green */
        [data-h-theme="light"] .nh-cta-btn,
        [data-h-theme="light"] .nh-cta-btn:hover {
            color: #fff;
        }

        /* Hero glow blobs were tuned for a dark background; soften for light */
        [data-h-theme="light"] .nh-hero-glow-1 {
            background: radial-gradient(circle, rgba(0, 166, 103, 0.14) 0%, transparent 65%);
        }

        [data-h-theme="light"] .nh-hero-glow-2 {
            background: radial-gradient(circle, rgba(0, 166, 103, 0.08) 0%, transparent 70%);
        }

        /* Feature-list checkmark icon uses a hardcoded green stroke (#00a667),
       already correct for light mode as-is — no override needed. */
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
                Connect with <span>Skills</span><br />&amp; Opportunities
              </h1>
              <p className="nh-hero-sub">
                A large number of individuals use us to transform their thoughts into the real world and connect with like-minded professionals.
              </p>
              <Link href={r("user.talents")} className="nh-cta-btn">
                Explore Skills <i className="feather-arrow-right"></i>
              </Link>
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
                  <div className="nh-section-eyebrow">About the Hub</div>
                  <h2 className="nh-section-title">
                    Your gateway to meaningful<br />professional connections.
                  </h2>
                  <p>
                    Whether you are a skill seeker looking for opportunities, a project owner looking for collaborators, or an entrepreneur looking to expand your network — this hub connects you with the right people.
                  </p>
                  <h5>Our Mission</h5>
                  <p>
                    At Future Connect, our mission is to empower individuals and businesses by facilitating easy access to a diverse range of high-quality services. We believe in creating a collaborative and inclusive marketplace that fosters growth, creativity, and mutual success.
                  </p>
                </div>
                <ul className="nh-feature-list">
                  <li>Diverse Network of Professionals</li>
                  <li>Trust and Transparency</li>
                  <li>User Friendly Platform</li>
                  <li>Innovation In Technology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="nh-divider" />

        {/* ── Trending Categories (mobile scroll) ──────────────── */}
        <section className="nh-cats d-md-none">
          <div className="nh-section-head">
            <div className="nh-section-eyebrow">Explore</div>
            <h2 className="nh-section-title">Trending Categories</h2>
            <p className="nh-section-sub">Discover inspiring stories, impactful skills, and creative people across Africa</p>
          </div>
          <div className="nh-trend-scroll">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={categoryRoute(routes, cat.slug)}
                className="nh-trend-chip"
              >
                {cat.name}
                <span style={{ background: "var(--bg-elevated)", color: "var(--text-muted)", fontSize: ".65rem", padding: "1px 7px", borderRadius: "50px" }}>
                  {cat.talents_count ?? 0}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Trending Categories (desktop grid) ────────────────── */}
        <section className="nh-cats d-none d-md-block">
          <div className="nh-section-head">
            <div className="nh-section-eyebrow">Explore</div>
            <h2 className="nh-section-title">Trending Categories of Skilled People</h2>
            <p className="nh-section-sub">Discover inspiring stories, impactful skills, and creative people across Africa</p>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            {categories.map((cat) => (
              <div className="col" key={cat.id}>
                <div className="nh-cat-card">
                  <div className="nh-cat-icon">
                    <i className="ti ti-speakerphone"></i>
                  </div>
                  <Link href={categoryRoute(routes, cat.slug)} className="nh-cat-name">
                    {cat.name}
                  </Link>
                  <span className="nh-cat-count">{cat.talents_count ?? 0} skills</span>
                  <Link href={categoryRoute(routes, cat.slug)} className="nh-cat-link">
                    View skills <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="nh-divider" />

        {/* ── Key Benefits ───────────────────────────────────────── */}
        <section className="nh-benefits">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <div className="nh-section-eyebrow">Why Us</div>
              <h2 className="nh-section-title">Key Benefits</h2>
            </div>
            <div className="col-lg-6">
              <p className="nh-section-sub mb-0">
                Find professionals across various fields and expand your network effortlessly.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="nh-benefit-card">
                <div className="nh-benefit-icon">
                  <i className="fa-solid fa-people-arrows"></i>
                </div>
                <div>
                  <h5 className="nh-benefit-title">Collaborate on Projects</h5>
                  <p className="nh-benefit-desc">Work together with skilled individuals to bring your ideas to life and create something remarkable.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nh-benefit-card">
                <div className="nh-benefit-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div>
                  <h5 className="nh-benefit-title">Connect with Skills</h5>
                  <p className="nh-benefit-desc">Find professionals across various fields and expand your network effortlessly with verified profiles.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nh-benefit-card">
                <div className="nh-benefit-icon">
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
                <div>
                  <h5 className="nh-benefit-title">Attend Networking Events</h5>
                  <p className="nh-benefit-desc">Discover and participate in events designed to foster professional relationships and career growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

NetworkingHub.layout = (page) => <GuestLayout children={page} />;