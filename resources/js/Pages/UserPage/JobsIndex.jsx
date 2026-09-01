import React, { useRef, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";


const DEFAULT_ROUTES = {
  "user.jobs.index": "/jobs",
  "user.jobs.browse": "/jobs/browse",
  "user.jobs.store": "/jobs",
  "user.talents": "/talents",
  "register": "/register",
  "login": "/login",
};

const JOB_TYPES = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
];

const EXPERIENCE_LEVELS = [
  { value: "entry", label: "Entry Level" },
  { value: "mid", label: "Mid Level" },
  { value: "senior", label: "Senior Level" },
];

export default function JobsIndex({
  jobs = { total: 0 },
  categories = [],
  routes = {},
  assetBase = "",
}) {
  const r = (name) => routes[name] || DEFAULT_ROUTES[name] || "#";

  // ── Bootstrap Modal, instantiated imperatively ──
  // (data-bs-toggle attributes are unreliable for elements React re-renders)
  const postJobModalRef = useRef(null);
  const postJobModalInstance = useRef(null);

  useEffect(() => {
    let cancelled = false;
    import("bootstrap").then(({ Modal }) => {
      if (cancelled) return;
      if (postJobModalRef.current) {
        postJobModalInstance.current = new Modal(postJobModalRef.current);
      }
    });
    return () => {
      cancelled = true;
      postJobModalInstance.current?.dispose();
    };
  }, []);

  const openPostJobModal = () => postJobModalInstance.current?.show();
  const closePostJobModal = () => postJobModalInstance.current?.hide();

  // Build a browse-jobs URL, optionally pre-filtered by category
  const buildBrowseUrl = (overrides = {}) => {
    const params = new URLSearchParams();
    Object.entries(overrides).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        params.set(key, value);
      }
    });
    const qs = params.toString();
    return qs ? `${r("user.jobs.browse")}?${qs}` : r("user.jobs.browse");
  };

  // ── Post Job form (Inertia useForm) ──
  const postJobForm = useForm({
    title: "",
    description: "",
    job_category_id: "",
    location: "",
    type: "full-time",
    experience_level: "entry",
    salary_range: "",
    skills: "",
  });

  const onPostJobSubmit = (e) => {
    e.preventDefault();
    postJobForm.post(r("user.jobs.store"), {
      preserveScroll: true,
      onSuccess: () => {
        postJobForm.reset();
        closePostJobModal();
      },
    });
  };

  return (
    <>
      <Head title="Explore Works & Jobs" />

      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ╔══════════════════════════════════╗
       ║        DESIGN TOKENS             ║
       ╚══════════════════════════════════╝ */
        :root {
            --bg: #0e1618;
            --bg-card: #131e21;
            --bg-glass: rgba(255, 255, 255, 0.035);
            --bg-glass2: rgba(0, 166, 103, 0.08);
            --accent: #48d597;
            --accent-dim: #008f59;
            --accent-glow: rgba(0, 166, 103, 0.22);
            --border: rgba(255, 255, 255, 0.07);
            --border-h: rgba(0, 166, 103, 0.3);
            --text-1: #f0f4f3;
            --text-2: #8da4a0;
            --text-3: #4d6460;
            --font-head: 'Syne', sans-serif;
            --font-body: 'DM Sans', sans-serif;
            --r-sm: 8px;
            --r-md: 14px;
            --r-lg: 20px;
            --r-pill: 50px;
        }

        body {
            background: var(--bg) !important;
            color: var(--text-1);
            font-family: var(--font-body);
        }

        /* ── SHARED UTILS ── */
        .btn-fc-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--accent);
            color: #fff;
            border: none;
            border-radius: var(--r-pill);
            padding: 11px 26px;
            font-family: var(--font-head);
            font-size: 0.875rem;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            transition: background .2s, transform .15s, box-shadow .2s;
            box-shadow: 0 4px 20px var(--accent-glow);
        }

        .btn-fc-primary:hover {
            background: var(--accent-dim);
            transform: translateY(-2px);
            box-shadow: 0 6px 30px var(--accent-glow);
            color: #fff;
        }

        .btn-fc-primary:disabled {
            opacity: 0.65;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .btn-fc-outline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            color: var(--text-1);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 10px 22px;
            font-family: var(--font-head);
            font-size: 0.875rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: border-color .2s, color .2s, background .2s;
        }

        .btn-fc-outline:hover {
            border-color: var(--border-h);
            color: var(--accent);
            background: var(--bg-glass2);
        }

        .fc-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            color: var(--accent);
            border-radius: var(--r-pill);
            padding: 4px 14px;
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        .eyebrow {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--accent);
            font-weight: 600;
            display: block;
            margin-bottom: 10px;
        }

        /* ══════════════════════════════════════
       HERO STRIP
    ══════════════════════════════════════ */
        .jobs-hero {
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 52px 0 40px;
            position: relative;
            overflow: hidden;
        }

        .jobs-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .jobs-hero-grid {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(rgba(0, 166, 103, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 166, 103, 0.03) 1px, transparent 1px);
            background-size: 48px 48px;
        }

        .jobs-hero-glow {
            position: absolute;
            bottom: -80px;
            right: -80px;
            width: 320px;
            height: 320px;
            border-radius: 50%;
            background: var(--accent-glow);
            filter: blur(90px);
            pointer-events: none;
        }

        .jobs-hero-inner {
            position: relative;
            z-index: 2;
        }

        .jobs-hero h1 {
            font-family: var(--font-head);
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 12px;
            line-height: 1.1;
        }

        .jobs-hero h1 span {
            color: var(--accent);
        }

        .jobs-hero p {
            color: var(--text-2);
            font-size: 0.95rem;
            max-width: 540px;
            line-height: 1.7;
            margin-bottom: 28px;
        }

        .hero-pills {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 28px;
        }

        .hero-pill {
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--bg-glass);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 8px 16px;
            font-size: 0.8rem;
            color: var(--text-2);
        }

        .hero-pill i {
            color: var(--accent);
        }

        .hero-pill strong {
            color: var(--text-1);
        }

        .hero-feature-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background: var(--border);
            border-radius: var(--r-md);
            overflow: hidden;
            margin-top: 40px;
        }

        @media(max-width:767px) {
            .hero-feature-row {
                grid-template-columns: 1fr;
            }
        }

        .hero-feature-item {
            background: var(--bg-card);
            padding: 22px 24px;
            transition: background .2s;
        }

        .hero-feature-item:hover {
            background: var(--bg-glass2);
        }

        .hero-feature-item h5 {
            font-family: var(--font-head);
            font-size: 0.92rem;
            font-weight: 700;
            color: var(--text-1);
            margin-bottom: 6px;
        }

        .hero-feature-item p {
            font-size: 0.8rem;
            color: var(--text-2);
            margin-bottom: 12px;
            line-height: 1.5;
        }

        .strip-link {
            font-size: 0.78rem;
            font-weight: 600;
            color: var(--accent);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            transition: gap .2s;
        }

        .strip-link:hover {
            gap: 8px;
        }

        .fi-icon {
            width: 36px;
            height: 36px;
            border-radius: var(--r-sm);
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
            font-size: 0.9rem;
            margin-bottom: 12px;
        }

        /* ══════════════════════════════════════
       ABOUT SECTION
    ══════════════════════════════════════ */
        .about-section {
            padding: 70px 0;
        }

        .about-section h2 {
            font-family: var(--font-head);
            font-size: clamp(1.5rem, 3vw, 2.1rem);
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 16px;
            letter-spacing: -0.01em;
        }

        .about-section p.lead {
            color: var(--text-2);
            font-size: 0.95rem;
            line-height: 1.8;
            max-width: 560px;
            margin-bottom: 0;
        }

        .about-stats {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        .about-stat {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-md);
            padding: 18px 20px;
            transition: border-color .2s;
        }

        .about-stat:hover {
            border-color: var(--border-h);
        }

        .about-stat h6 {
            font-family: var(--font-head);
            font-size: 0.88rem;
            font-weight: 700;
            color: var(--text-1);
            margin-bottom: 4px;
        }

        .about-stat p {
            font-size: 0.8rem;
            color: var(--text-2);
            margin: 0;
            line-height: 1.55;
        }

        /* ══════════════════════════════════════
       CATEGORY CARDS
    ══════════════════════════════════════ */
        .categories-section {
            padding: 20px 0 70px;
        }

        .job-cat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 16px;
            margin-top: 32px;
        }

        .job-cat-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-md);
            padding: 22px 20px;
            text-decoration: none;
            display: block;
            transition: border-color .2s, transform .2s;
            position: relative;
            overflow: hidden;
        }

        .job-cat-card::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0; right: 0;
            height: 0;
            background: var(--bg-glass2);
            transition: height .2s;
            z-index: 0;
        }

        .job-cat-card:hover {
            border-color: var(--border-h);
            transform: translateY(-3px);
        }

        .job-cat-card:hover::after { height: 100%; }
        .job-cat-card > * { position: relative; z-index: 1; }

        .job-cat-card:hover .fi-icon {
            background: var(--accent);
            color: #fff;
            border-color: var(--accent);
        }

        .job-cat-name {
            font-family: var(--font-head);
            font-size: 0.92rem;
            font-weight: 700;
            color: var(--text-1);
            margin-bottom: 4px;
            transition: color .2s;
        }

        .job-cat-card:hover .job-cat-name { color: var(--accent); }

        .job-cat-count {
            font-size: 0.78rem;
            color: var(--text-3);
        }

        /* ══════════════════════════════════════
       JOIN CTA (gated access)
    ══════════════════════════════════════ */
        .join-cta {
            background: linear-gradient(135deg, var(--bg-card), var(--bg-glass2));
            border: 1px solid var(--border-h);
            border-radius: var(--r-lg);
            padding: 46px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
            margin-bottom: 70px;
        }

        .join-cta::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .join-cta h3 {
            font-family: var(--font-head);
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 10px;
        }

        .join-cta p {
            color: var(--text-2);
            font-size: 0.9rem;
            max-width: 520px;
            margin: 0 auto 26px;
            line-height: 1.7;
        }

        .join-cta-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .join-cta-note {
            margin-top: 18px;
            font-size: 0.78rem;
            color: var(--text-3);
        }

        .join-cta-note a {
            color: var(--accent);
            text-decoration: none;
        }

        .join-cta-note a:hover { text-decoration: underline; }

        /* ══════════════════════════════════════
       CTA BAND (browse jobs)
    ══════════════════════════════════════ */
        .jobs-cta {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            padding: 44px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 28px;
            margin-bottom: 60px;
            position: relative;
            overflow: hidden;
        }

        .jobs-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .jobs-cta-glow {
            position: absolute;
            top: -60px;
            right: -60px;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background: var(--accent-glow);
            filter: blur(70px);
            pointer-events: none;
        }

        .jobs-cta-content {
            position: relative;
        }

        .jobs-cta h3 {
            font-family: var(--font-head);
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 8px;
        }

        .jobs-cta p {
            color: var(--text-2);
            font-size: 0.88rem;
            max-width: 480px;
            margin: 0;
        }

        .jobs-cta-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            position: relative;
        }

        /* ══════════════════════════════════════
       MODAL — genuine Bootstrap Modal, themed to match app
    ══════════════════════════════════════ */
        .fc-modal .modal-content {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            color: var(--text-1);
        }

        .fc-modal .modal-header {
            border-bottom: 1px solid var(--border);
            padding: 22px 28px;
        }

        .fc-modal .modal-title {
            font-family: var(--font-head);
            font-weight: 700;
            font-size: 1.05rem;
            color: var(--text-1);
        }

        .fc-modal .modal-title small {
            display: block;
            font-size: 0.72rem;
            color: var(--text-3);
            font-weight: 400;
            margin-top: 3px;
        }

        .fc-modal .accent-line {
            display: block;
            width: 32px;
            height: 3px;
            background: var(--accent);
            border-radius: 2px;
            margin-top: 6px;
        }

        .fc-modal .btn-close {
            filter: invert(1) brightness(0.6);
        }

        .fc-modal .modal-body {
            padding: 28px;
        }

        .fc-modal .modal-footer {
            border-top: 1px solid var(--border);
            padding: 18px 28px;
        }

        .fc-form-label {
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--text-2);
            margin-bottom: 6px;
            display: block;
        }

        .fc-form-control {
            width: 100%;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border);
            border-radius: var(--r-sm);
            color: var(--text-1);
            padding: 11px 14px;
            font-family: var(--font-body);
            font-size: 0.85rem;
            outline: none;
            transition: border-color .2s;
            margin-bottom: 0;
        }

        .fc-form-control:focus {
            border-color: var(--border-h);
            box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .fc-form-control::placeholder {
            color: var(--text-3);
        }

        .fc-form-control.is-invalid {
            border-color: #e0554f;
            box-shadow: 0 0 0 3px rgba(224, 85, 79, 0.16);
        }

        .fc-form-error {
            font-size: 0.72rem;
            color: #e0554f;
            margin-top: 6px;
        }

        textarea.fc-form-control {
            resize: vertical;
            min-height: 90px;
        }

        select.fc-form-control option {
            background: var(--bg-card);
            color: var(--text-1);
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
            --bg: #f6faf8;
            --bg-card: #F5f5f7;
            --bg-glass: rgba(0, 100, 60, 0.035);
            --bg-glass2: rgba(0, 166, 103, 0.08);
            --accent: #00a667;
            --accent-dim: #00c07a;
            --accent-glow: rgba(0, 166, 103, 0.18);
            --border: rgba(0, 100, 60, 0.1);
            --border-h: rgba(0, 100, 60, 0.28);
            --text-1: #10201b;
            --text-2: #5b7a70;
            --text-3: #8fa89e;
        }

        [data-h-theme="light"] body {
            background: var(--bg) !important;
        }

        [data-h-theme="light"] .jobs-hero-grid {
            background-image:
                linear-gradient(rgba(0, 100, 60, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 100, 60, 0.05) 1px, transparent 1px);
        }

        [data-h-theme="light"] .fc-modal .btn-close {
            filter: none;
        }
      `}</style>

      {/* ════════════════════════════════════
           HERO
      ════════════════════════════════════ */}
      <section className="jobs-hero">
        <div className="jobs-hero-grid"></div>
        <div className="jobs-hero-glow"></div>
        <div className="container jobs-hero-inner">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="eyebrow">Works & Opportunities</span>
              <h1>Explore <span>{jobs.total}+</span> Available Works</h1>
              <p>Discover full-time, part-time and remote job opportunities tailored for your skills. Every role is posted by verified companies.</p>
              <div className="hero-pills">
                <div className="hero-pill"><i className="ti ti-map-pin"></i><strong>Remote</strong> &amp; On-site</div>
                <div className="hero-pill"><i className="ti ti-briefcase"></i>Full-time, Part-time &amp; Freelance</div>
                <div className="hero-pill"><i className="ti ti-shield-check"></i>Verified Listings</div>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href={r("user.jobs.browse")} className="btn-fc-primary">Browse Jobs <i className="ti ti-arrow-right"></i></Link>
                <a href="#join-cta" className="btn-fc-outline">
                  <i className="ti ti-plus"></i> Post a work
                </a>
              </div>
            </div>
          </div>

          {/* 3-column mini cards */}
          <div className="hero-feature-row">
            <div className="hero-feature-item">
              <div className="fi-icon"><i className="ti ti-search"></i></div>
              <h5>Find Work Today</h5>
              <p>Thousands of people browse our marketplace daily. Don't miss out on matching opportunities.</p>
              <Link href={r("user.jobs.browse")} className="strip-link">Browse Jobs <i className="ti ti-arrow-right"></i></Link>
            </div>
            <div className="hero-feature-item">
              <div className="fi-icon"><i className="ti ti-bolt"></i></div>
              <h5>Unlock New Opportunities</h5>
              <p>Tailored job listings, collaboration projects, and freelance works matched to your profile.</p>
              <a href="#categories-section" className="strip-link">Explore Categories <i className="ti ti-arrow-right"></i></a>
            </div>
            <div className="hero-feature-item">
              <div className="fi-icon"><i className="ti ti-coin"></i></div>
              <h5>Ways to Earn</h5>
              <p>Learn how to earn through the Future Connect platform with verified payment protection.</p>
              <a href="#join-cta" className="strip-link">Get Started <i className="ti ti-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
           ABOUT SECTION
      ════════════════════════════════════ */}
      <section className="about-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <span className="eyebrow">About Job Opportunities</span>
              <h2>A trusted place to find real work — or real talent</h2>
              <p className="lead">
                Every job on Future Connect comes from a verified company, so what you see is what you get: real roles, real budgets, and real people on the other end. Whether you're looking for full-time work, a freelance gig, or your first internship, opportunities are organized by category so you can go straight to what fits your skills — no scrolling through irrelevant listings.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-stats">
                <div className="about-stat">
                  <div className="fi-icon" style={{ marginBottom: 0 }}><i className="ti ti-shield-check"></i></div>
                  <div>
                    <h6>Verified companies only</h6>
                    <p>Every listing is reviewed before it goes live, so you're never chasing a job that doesn't exist.</p>
                  </div>
                </div>
                <div className="about-stat">
                  <div className="fi-icon" style={{ marginBottom: 0 }}><i className="ti ti-category"></i></div>
                  <div>
                    <h6>Organized by category</h6>
                    <p>Jobs are grouped by skill area, so you can jump straight to work that matches what you do.</p>
                  </div>
                </div>
                <div className="about-stat">
                  <div className="fi-icon" style={{ marginBottom: 0 }}><i className="ti ti-users"></i></div>
                  <div>
                    <h6>A two-way marketplace</h6>
                    <p>Employers post roles, skilled people apply directly — no agencies, no middlemen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
           JOB CATEGORIES
      ════════════════════════════════════ */}
      <section className="categories-section" id="categories-section">
        <div className="container">
          <span className="eyebrow">Browse by Category</span>
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--text-1)", marginBottom: 8 }}>
            Find work in your field
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: "0.92rem", maxWidth: 520, margin: 0 }}>
            Pick a category to see every open role in that field, or join the platform to unlock full access and post your own opportunities.
          </p>

          <div className="job-cat-grid">
            {categories.map((cat) => (
              <Link key={cat.id} href={buildBrowseUrl({ category: cat.id })} className="job-cat-card">
                <div className="fi-icon"><i className="ti ti-briefcase"></i></div>
                <div className="job-cat-name">{cat.name}</div>
                <div className="job-cat-count">{cat.job_sections_count ?? 0} open roles</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
           JOIN CTA — gated access to posting & jobs
      ════════════════════════════════════ */}
      <div className="container" id="join-cta">
        <div className="join-cta">
          <span className="fc-badge" style={{ marginBottom: 16, display: "inline-flex" }}>Free to Join</span>
          <h3>Join to post jobs & unlock full access</h3>
          <p>
            Create a free account to post your own job listings, apply directly to open roles, and get full access to every opportunity on the platform — not just previews.
          </p>
          <div className="join-cta-actions">
            <Link href={r("register")} className="btn-fc-primary">
              <i className="ti ti-user-plus"></i> Join Free — Get Full Access
            </Link>
            <button type="button" onClick={() => openPostJobModal()} className="btn-fc-outline">
              <i className="ti ti-plus"></i> Already a member? Post a work
            </button>
          </div>
          <div className="join-cta-note">
            Already have an account? <Link href={r("login")}>Log in</Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
           CTA BAND — browse all jobs
      ════════════════════════════════════ */}
      <div className="container">
        <div className="jobs-cta">
          <div className="jobs-cta-glow"></div>
          <div className="jobs-cta-content">
            <span className="eyebrow">Ready to Explore?</span>
            <h3>See every open role, filter by what fits you</h3>
            <p>Search, filter by location and salary, and sort the full list of live opportunities — updated as new work is posted.</p>
          </div>
          <div className="jobs-cta-actions">
            <Link href={r("user.jobs.browse")} className="btn-fc-primary">
              <i className="ti ti-search"></i> Browse All Jobs
            </Link>
            <Link href={r("user.talents")} className="btn-fc-outline">Browse Skills</Link>
          </div>
        </div>
      </div>

      {/* ════════════════════ POST JOB MODAL ════════════════════ */}
      <div
        className="modal fade fc-modal"
        id="postJobModalPage"
        tabIndex="-1"
        aria-hidden="true"
        ref={postJobModalRef}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title">
                  Post a New Job / work
                  <small>Fill in the details below to publish your listing</small>
                </h5>
                <span className="accent-line" />
              </div>
              <button type="button" className="btn-close" onClick={() => closePostJobModal()}>✕</button>
            </div>

            <form onSubmit={onPostJobSubmit} noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="fc-form-label">
                      Job Title <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`fc-form-control${postJobForm.errors.title ? " is-invalid" : ""}`}
                      placeholder="e.g., Senior Laravel Developer"
                      value={postJobForm.data.title}
                      onChange={(e) => postJobForm.setData("title", e.target.value)}
                      required
                    />
                    {postJobForm.errors.title && (
                      <p className="fc-form-error">{postJobForm.errors.title}</p>
                    )}
                  </div>

                  <div className="col-12">
                    <label className="fc-form-label">
                      Description <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <textarea
                      className={`fc-form-control${postJobForm.errors.description ? " is-invalid" : ""}`}
                      rows="4"
                      placeholder="Describe the job responsibilities, requirements, and benefits..."
                      value={postJobForm.data.description}
                      onChange={(e) => postJobForm.setData("description", e.target.value)}
                      required
                    />
                    {postJobForm.errors.description && (
                      <p className="fc-form-error">{postJobForm.errors.description}</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">
                      Category <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <select
                      className={`fc-form-control${postJobForm.errors.job_category_id ? " is-invalid" : ""}`}
                      value={postJobForm.data.job_category_id}
                      onChange={(e) => postJobForm.setData("job_category_id", e.target.value)}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                    {postJobForm.errors.job_category_id && (
                      <p className="fc-form-error">{postJobForm.errors.job_category_id}</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">
                      Location <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`fc-form-control${postJobForm.errors.location ? " is-invalid" : ""}`}
                      placeholder="e.g., Kigali, Rwanda / Remote"
                      value={postJobForm.data.location}
                      onChange={(e) => postJobForm.setData("location", e.target.value)}
                      required
                    />
                    {postJobForm.errors.location && (
                      <p className="fc-form-error">{postJobForm.errors.location}</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">Job Type</label>
                    <select
                      className="fc-form-control"
                      value={postJobForm.data.type}
                      onChange={(e) => postJobForm.setData("type", e.target.value)}
                    >
                      {JOB_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">Experience Level</label>
                    <select
                      className="fc-form-control"
                      value={postJobForm.data.experience_level}
                      onChange={(e) => postJobForm.setData("experience_level", e.target.value)}
                    >
                      {EXPERIENCE_LEVELS.map((lvl) => (
                        <option key={lvl.value} value={lvl.value}>{lvl.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">Salary Range</label>
                    <input
                      type="text"
                      className="fc-form-control"
                      placeholder="e.g., 300K – 800K RWF"
                      value={postJobForm.data.salary_range}
                      onChange={(e) => postJobForm.setData("salary_range", e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">Skills (comma separated)</label>
                    <input
                      type="text"
                      className="fc-form-control"
                      placeholder="e.g., Laravel, Vue, CSS"
                      value={postJobForm.data.skills}
                      onChange={(e) => postJobForm.setData("skills", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer" style={{ gap: 10 }}>
                <button
                  type="button"
                  className="btn-fc-outline"
                  onClick={() => closePostJobModal()}
                  disabled={postJobForm.processing}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-fc-primary" disabled={postJobForm.processing}>
                  <i className={`ti ${postJobForm.processing ? "ti-loader-2" : "ti-send"}`} />{" "}
                  {postJobForm.processing ? "Posting…" : "Post Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

JobsIndex.layout = (page) => <GuestLayout children={page} title="Works & Opportunities" />;