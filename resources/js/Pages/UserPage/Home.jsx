import React, { useEffect, useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

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

// ── Online image helpers (no local asset storage needed) ──────────────
// Photos of skilled people: use the uploaded image if present, otherwise a real
// photograph of a person from randomuser.me (free, no key, alternates
// gender by index so the avatar row doesn't repeat one face).
function personImage(p, seedIndex = 1) {
  if (p?.image) return p.image.startsWith("http") ? p.image : `/image/talents/${p.image}`;
  const n = ((seedIndex - 1) % 90) + 1; // randomuser.me portraits go 0..99
  const gender = seedIndex % 2 === 0 ? "women" : "men";
  return `https://randomuser.me/api/portraits/${gender}/${n}.jpg`;
}

// Partner logos: use the uploaded logo if present, otherwise pull a real,
// full-color icon live from Google's favicon service.
// NOTE: Clearbit's free Logo API (logo.clearbit.com) was permanently shut
// down on Dec 1, 2025 after HubSpot's acquisition — every request to it
// now just fails, which is why logos weren't rendering. Google's s2
// favicon endpoint is free, needs no signup/API key, and is still live.
function partnerLogo(p) {
  if (p?.logo) return p.logo.startsWith("http") ? p.logo : `/image/partners/${p.logo}`;
  if (p?.domain) return `https://www.google.com/s2/favicons?sz=128&domain=${p.domain}`;
  return `https://www.google.com/s2/favicons?sz=128&domain=example.com`;
}

// Real stock photography of real people (verified, currently-live Unsplash
// photos — not random/abstract placeholder images) for section art.
const PHOTO = {
  heroA: "https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?auto=format&fit=crop&w=1600&q=80", // team meeting
  heroB: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=1600&q=80", // handshake after interview
  skills: "https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?auto=format&fit=crop&w=900&q=80", // team reviewing work together
  learning: "https://images.unsplash.com/photo-1752650735119-8929e5f7d1ec?auto=format&fit=crop&w=900&q=80", // person on a video call/laptop
  jobs: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=900&q=80", // handshake, hired
  connect1: "https://images.unsplash.com/photo-1758691737083-0e7fdbde0f05?auto=format&fit=crop&w=700&q=80", // two colleagues at a laptop
  connect2: "https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?auto=format&fit=crop&w=700&q=80", // team talking
  volunteer: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80", // volunteers working together
};

// Real Rwandan companies for a live testing state when no partners have
// been added yet. Every entry here has a genuine logo file verified on
// Wikimedia Commons (free, keyless, stable media host) — no favicon
// substitutes. Once real partners are added with their own uploaded
// `logo`, this list is unused (see displayPartners below).
const DEMO_PARTNERS = [
  { name: "MTN Rwanda", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/MTN_2022_logo.svg" },
  { name: "RwandAir", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/RwandAir_Logotype.png?width=300" },
  { name: "Airtel Rwanda", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Airtel_Africa_logo.svg" },
  { name: "Equity Bank Rwanda", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Equity_Group_Logo.png?width=300" },
];

// The 5 pathways of the ecosystem (Solution section)
const PATHWAYS = [
  { icon: "ti-briefcase", label: "Job Opportunities" },
  { icon: "ti-users", label: "Professional Connections" },
  { icon: "ti-books", label: "Learning" },
  { icon: "ti-rocket", label: "Project Collaboration" },
  { icon: "ti-shopping-bag", label: "Future Connect Market" },
];

const DIFFERENCE_STEPS = ["Discover", "Connect", "Learn", "Collaborate", "Earn", "Grow"];

const WHO_IT_SERVES = [
  { icon: "ti-code", title: "Technical Graduates", desc: "Engineers, developers, and competition winners ready to be found." },
  { icon: "ti-palette", title: "Creatives & Freelancers", desc: "Designers, writers, and makers looking for steady, real work." },
  { icon: "ti-building-community", title: "Organizations & Mentors", desc: "Teams and mentors looking for the exact expertise they need." },
  { icon: "ti-heart-handshake", title: "Volunteers & Changemakers", desc: "People ready to give their time and skills to a cause." },
];

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
  const heroCarouselRef = useRef(null);
  const testimonialCarouselRef = useRef(null);
  const displayPartners = partners.length > 0 ? partners : DEMO_PARTNERS;

  useEffect(() => {
    if (window.bootstrap && heroCarouselRef.current) {
      new window.bootstrap.Carousel(heroCarouselRef.current, { interval: 6000, pause: false });
    }
  }, []);

  useEffect(() => {
    if (window.bootstrap && testimonialCarouselRef.current) {
      new window.bootstrap.Carousel(testimonialCarouselRef.current, { interval: 6000 });
    }
  }, [testimonials.length]);

  return (
    <>
      <Head title="Future Connect — Your Skills Are Your Capital." />

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
          --font-head: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          --r-sm: 8px; --r-md: 14px; --r-lg: 20px; --r-pill: 50px;
        }

        body { background: var(--bg) !important; color: var(--text-1); font-family: var(--font-body); }

        .fc-badge {
          display: inline-flex; align-items: center; gap: 6px; background: var(--bg-glass2);
          border: 1px solid var(--border-h); color: var(--accent); border-radius: var(--r-pill);
          padding: 4px 14px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
        }

        .fc-section-head { margin-bottom: 40px; }
        .fc-section-head .eyebrow {
          font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent);
          font-weight: 600; margin-bottom: 10px; display: block;
        }
        .fc-section-head h2 {
          font-family: var(--font-head); font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800;
          color: var(--text-1); margin-bottom: 12px; line-height: 1.15;
        }
        .fc-section-head p { color: var(--text-2); font-size: 0.95rem; max-width: 560px; line-height: 1.65; }

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

        .fc-hero { position: relative; min-height: 88vh; display: flex; align-items: center; overflow: hidden; }
        .fc-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .fc-hero-bg .carousel, .fc-hero-bg .carousel-inner, .fc-hero-bg .carousel-item { height: 100%; }
        .fc-hero-bg-slide { width: 100%; height: 100%; background-size: cover; background-position: center; }
        .fc-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(135deg, rgba(14, 22, 24, 0.92) 0%, rgba(14, 22, 24, 0.75) 50%, rgba(0, 166, 103, 0.08) 100%);
        }
        .fc-hero-content { position: relative; z-index: 2; padding: 80px 40px; }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 0.75rem; text-transform: uppercase;
          letter-spacing: 0.1em; color: var(--accent); font-weight: 600; margin-bottom: 18px;
        }
        .hero-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 2px; background: var(--accent); border-radius: 2px; }

        .fc-hero h1 {
          font-family: var(--font-head); font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 800;
          line-height: 1.08; color: var(--text-1); margin-bottom: 18px;
        }
        .fc-hero h1 .hl { color: var(--accent); }
        .fc-hero p { font-size: 1.02rem; color: var(--text-2); max-width: 520px; line-height: 1.7; margin-bottom: 30px; }

        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 44px; }
        .hero-stats { display: flex; gap: 36px; flex-wrap: wrap; border-top: 1px solid var(--border); padding-top: 24px; }
        .hero-stat-val { font-family: var(--font-head); font-size: 1.7rem; font-weight: 800; color: var(--accent); }
        .hero-stat-lbl { font-size: 0.78rem; color: var(--text-3); margin-top: 2px; }

        .avatar-stack { display: flex; }
        .avatar-stack img { width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--bg); object-fit: cover; margin-left: -10px; }
        .avatar-stack img:first-child { margin-left: 0; }

        .fc-feature-strip { background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 26px 0; }
        .feature-strip-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); }
        @media(max-width: 767px) { .feature-strip-grid { grid-template-columns: 1fr; } }
        .feature-strip-item { background: var(--bg-card); padding: 26px 30px; transition: background .2s; }
        .feature-strip-item:hover { background: var(--bg-glass2); }
        .feature-strip-item h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .feature-strip-item p { font-size: 0.82rem; color: var(--text-2); margin-bottom: 12px; line-height: 1.55; }
        .strip-link { font-size: 0.8rem; font-weight: 600; color: var(--accent); text-decoration: none; display: inline-flex; align-items: center; gap: 4px; transition: gap .2s; }
        .strip-link:hover { gap: 8px; }
        .strip-icon {
          width: 40px; height: 40px; border-radius: var(--r-sm); background: var(--bg-glass2);
          border: 1px solid var(--border-h); display: flex; align-items: center; justify-content: center;
          color: var(--accent); font-size: 1rem; margin-bottom: 14px;
        }

        /* Problem section */
        .fc-problem { padding: 72px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .problem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2px; background: var(--border); margin-top: 20px; }
        .problem-card { background: var(--bg-card); padding: 30px 26px; transition: background .2s; }
        .problem-card:hover { background: var(--bg-glass2); }
        .problem-icon { font-size: 1.6rem; margin-bottom: 14px; display: block; }
        .problem-card h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
        .problem-card p { font-size: 0.85rem; color: var(--text-2); line-height: 1.65; }

        /* Solution / pathways section */
        .fc-solution { padding: 72px 0; }
        .pathway-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px; margin-top: 28px; }
        .pathway-chip {
          display: inline-flex; align-items: center; gap: 8px; background: var(--bg-glass2);
          border: 1px solid var(--border-h); color: var(--text-1); border-radius: var(--r-pill);
          padding: 10px 18px; font-size: 0.85rem; font-weight: 600;
        }
        .pathway-chip i { color: var(--accent); }
        .pathway-arrow { color: var(--text-3); font-size: 1.1rem; }
        .difference-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; margin-top: 18px; }
        .difference-step {
          font-family: var(--font-head); font-weight: 700; font-size: 0.95rem; color: var(--accent);
          background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-pill); padding: 8px 18px;
        }

        .fc-feature-section { padding: 64px 0; }
        .fc-feature-section.alt { background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .feature-panel-card h2 { font-family: var(--font-head); font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: var(--text-1); margin-bottom: 14px; line-height: 1.2; }
        .feature-panel-card h2 span { color: var(--accent); }
        .feature-panel-card p { color: var(--text-2); line-height: 1.7; margin-bottom: 22px; max-width: 500px; }

        .feature-img-wrap img { width: 100%; height: 320px; object-fit: cover; border-radius: var(--r-lg); border: 1px solid var(--border); }

        .fc-provide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-top: 20px; }
        .fc-provide-box { background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-md); padding: 22px; transition: border-color .2s, transform .2s; }
        .fc-provide-box:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .fc-provide-box .provide-icon {
          width: 40px; height: 40px; border-radius: var(--r-sm); background: var(--bg-glass2); border: 1px solid var(--border-h);
          display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1.1rem; margin-bottom: 12px;
        }
        .fc-provide-box h6 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .fc-provide-box p { font-size: 0.82rem; color: var(--text-2); line-height: 1.55; margin-bottom: 14px; }

        .feature-list { list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 10px; }
        .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.87rem; color: var(--text-2); line-height: 1.5; }
        .feature-list li::before {
          content: ''; flex-shrink: 0; margin-top: 5px; width: 16px; height: 16px; border-radius: 50%;
          background: var(--bg-glass2); border: 1px solid var(--border-h);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
          background-size: 10px; background-repeat: no-repeat; background-position: center;
        }

        .fc-how { padding: 72px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2px; background: var(--border); }
        .step-card { background: var(--bg-card); padding: 32px 26px; transition: background .2s; }
        .step-card:hover { background: var(--bg-glass2); }
        .step-num { font-family: var(--font-head); font-size: 2.6rem; font-weight: 800; color: var(--accent); opacity: 0.15; line-height: 1; margin-bottom: 14px; display: block; }
        .step-card h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
        .step-card p { font-size: 0.83rem; color: var(--text-2); line-height: 1.6; margin-bottom: 14px; }

        /* Who it serves */
        .fc-who { padding: 72px 0; }
        .who-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-top: 20px; }
        .who-card { background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-md); padding: 24px; transition: border-color .2s, transform .2s; }
        .who-card:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .who-card .provide-icon { width: 44px; height: 44px; border-radius: var(--r-sm); background: var(--bg-glass2); border: 1px solid var(--border-h); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1.2rem; margin-bottom: 14px; }
        .who-card h6 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .who-card p { font-size: 0.83rem; color: var(--text-2); line-height: 1.6; }

        /* Philosophy banner */
        .fc-philosophy { padding: 76px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); text-align: center; }
        .fc-philosophy .eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); font-weight: 600; margin-bottom: 14px; display: block; }
        .fc-philosophy h2 { font-family: var(--font-head); font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: var(--text-1); margin-bottom: 18px; }
        .fc-philosophy p { color: var(--text-2); font-size: 1rem; line-height: 1.75; max-width: 640px; margin: 0 auto; }

        /* Volunteering section */
        .fc-volunteer .feature-panel-card p.tagline { color: var(--accent); font-weight: 600; font-size: 0.85rem; margin-bottom: 8px; }

        /* ── Partners: full-color logos, laid out as a list/grid (no scroll) ── */
        .fc-partners { padding: 56px 0; }
        .partners-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-3); font-weight: 600; text-align: center; margin-bottom: 28px; }
        .partners-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;
        }
        .partner-tile {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md);
          padding: 20px; display: flex; align-items: center; justify-content: center; height: 84px;
          transition: border-color .2s, transform .2s;
        }
        .partner-tile:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .partner-tile img { max-height: 34px; max-width: 100%; width: auto; object-fit: contain; }

        .fc-testimonials { padding: 72px 0; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
        .testimonial-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); padding: 22px;
          display: flex; flex-direction: column; gap: 14px; transition: border-color .2s, transform .2s;
        }
        .testimonial-card:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .testimonial-head { display: flex; align-items: center; gap: 14px; }
        .testimonial-head img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-h); flex-shrink: 0; }
        .testimonial-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); }
        .testimonial-role { font-size: 0.75rem; color: var(--text-3); }
        .testimonial-stars { color: var(--accent); font-size: 0.8rem; margin-left: auto; }
        .testimonial-body p { font-size: 0.85rem; color: var(--text-2); line-height: 1.65; }
        .testimonial-loc { font-size: 0.75rem; color: var(--text-3); display: flex; align-items: center; gap: 5px; }
        .testimonial-support { font-size: 0.75rem; color: var(--accent); font-weight: 600; margin-top: -4px; }

        .fc-cta { margin: 0 0 72px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 48px 44px; position: relative; overflow: hidden; }
        .fc-cta::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
        .fc-cta-glow { position: absolute; top: -60px; right: -60px; width: 280px; height: 280px; border-radius: 50%; background: var(--accent-glow); filter: blur(80px); pointer-events: none; }
        .fc-cta h2 { font-family: var(--font-head); font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; color: var(--text-1); margin-bottom: 10px; }
        .fc-cta p { color: var(--text-2); font-size: 0.95rem; max-width: 460px; margin-bottom: 24px; }
        .fc-cta-note { font-size: 0.78rem; color: var(--text-3); margin-top: -12px; margin-bottom: 0; }

        [data-h-theme="light"] {
          --bg: #f6faf8; --bg-card: #F5f5f7; --bg-glass: rgba(0, 60, 40, 0.03); --bg-glass2: rgba(0, 166, 103, 0.07);
          --accent: #00a667; --accent-dim: #00814f; --accent-glow: rgba(0, 166, 103, 0.16); --accent-line: rgba(0, 166, 103, 0.3);
          --border: rgba(0, 60, 40, 0.08); --border-h: rgba(0, 166, 103, 0.28);
          --text-1: #10201b; --text-2: #4f6b65; --text-3: #7d9791;
        }
        [data-h-theme="light"] body { background: var(--bg) !important; color: var(--text-1); }
        [data-h-theme="light"] .btn-fc-primary, [data-h-theme="light"] .btn-fc-primary:hover { color: #fff; }
        [data-h-theme="light"] .fc-hero-overlay {
          background: linear-gradient(135deg, rgba(246, 250, 248, 0.93) 0%, rgba(246, 250, 248, 0.78) 50%, rgba(0, 166, 103, 0.10) 100%);
        }
      `}</style>

      {/* 1. HERO — "Your skills are your capital." */}
      <section className="fc-hero">
        <div className="fc-hero-bg">
          <div id="heroBgCarousel" className="carousel slide" ref={heroCarouselRef}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="fc-hero-bg-slide" style={{ backgroundImage: `url('${PHOTO.heroA}')` }} />
              </div>
              <div className="carousel-item">
                <div className="fc-hero-bg-slide" style={{ backgroundImage: `url('${PHOTO.heroB}')` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="fc-hero-overlay" />

        <div className="container fc-hero-content">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="hero-eyebrow">{totalTalents}+ verified skilled people, already connected</p>
              <h1>
                Hello, <br />Your skills are <span className="hl">your capital.</span>
              </h1>
              <p>The digital ecosystem connecting Africa's skilled people to opportunities, collaborators, mentors, and organizations.</p>
              <div className="hero-ctas">
                <Link href={r("user.register_skills")} className="btn-fc-primary">
                  Join Future Connect <i className="ti ti-arrow-right" />
                </Link>
                <Link href={r("user.talents")} className="btn-fc-outline">
                  Explore the Network <i className="ti ti-arrow-right" />
                </Link>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="hero-stat-val">{totalTalents}+</div>
                  <div className="hero-stat-lbl">Verified Skilled People</div>
                </div>
                <div>
                  <div className="hero-stat-val">{displayPartners.length}+</div>
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

      {/* 2. FEATURE STRIP */}
      <div className="fc-feature-strip">
        <div className="container">
          <div className="feature-strip-grid">
            <div className="feature-strip-item">
              <div className="strip-icon"><i className="ti ti-rocket" /></div>
              <h5>Get Seen Faster</h5>
              <p>Verified, boosted profiles jump the queue and get featured on our homepage.</p>
              <Link href={r("user.talents")} className="strip-link">Find Skilled People <i className="ti ti-arrow-right" /></Link>
            </div>
            <div className="feature-strip-item">
              <div className="strip-icon"><i className="ti ti-briefcase" /></div>
              <h5>Never Miss the Right Job</h5>
              <p>Gigs and roles matched to your actual skills, not keyword spam.</p>
              <Link href={r("user.jobs.index")} className="strip-link">Start Exploring <i className="ti ti-arrow-right" /></Link>
            </div>
            <div className="feature-strip-item">
              <div className="strip-icon"><i className="ti ti-users" /></div>
              <h5>Build a Network That Works</h5>
              <p>Meet the people and collaborators who move a career forward.</p>
              <Link href={r("talent.connections-room")} className="strip-link">Skill Connect <i className="ti ti-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE PROBLEM */}
      <section className="fc-problem" id="problem">
        <div className="container">
          <div className="fc-section-head text-center" style={{ maxWidth: 680, margin: "0 auto 0" }}>
            <span className="eyebrow">The Problem</span>
            <h2>Brilliant skills, disconnected from opportunity.</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card">
              <span className="problem-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <ellipse cx="12" cy="12" rx="9" ry="3.2" />
                  <path d="M6.5 9.5c1.4 1 3.4 1.6 5.5 1.6s4.1-.6 5.5-1.6" />
                </svg>
              </span>
              <h5>The Unseen Void</h5>
              <p>Thousands of brilliant technical minds and competition winners disappear from the grid right after graduation.</p>
            </div>
            <div className="problem-card">
              <span className="problem-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3v4M15 3v4" />
                  <path d="M7 7h10v4a5 5 0 0 1-10 0V7Z" />
                  <path d="M12 16v3M9 21h6" />
                </svg>
              </span>
              <h5>The Connection Deficit</h5>
              <p>Skilled graduates often struggle to find the professional networks and opportunities needed to build careers around their expertise.</p>
            </div>
            <div className="problem-card">
              <span className="problem-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 2.5 20h19L12 3Z" strokeLinejoin="round" />
                  <path d="M12 9.5v4.2" />
                  <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <h5>The Solution Shortage</h5>
              <p>Society's biggest challenges persist while the exact experts trained to solve them remain disconnected and underemployed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION — One ecosystem, multiple pathways */}
      <section className="fc-solution" id="solution">
        <div className="container">
          <div className="fc-section-head text-center" style={{ maxWidth: 680, margin: "0 auto" }}>
            <span className="eyebrow">The Solution</span>
            <h2>One ecosystem. Multiple pathways.</h2>
          </div>

          <div className="pathway-row">
            {PATHWAYS.map((p, i) => (
              <React.Fragment key={p.label}>
                <span className="pathway-chip"><i className={`ti ${p.icon}`} /> {p.label}</span>
                {i < PATHWAYS.length - 1 && <span className="pathway-arrow">→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="fc-section-head text-center" style={{ maxWidth: 680, margin: "56px auto 0" }}>
            <span className="eyebrow">The Future Connect Difference</span>
          </div>
          <div className="difference-row">
            {DIFFERENCE_STEPS.map((step, i) => (
              <React.Fragment key={step}>
                <span className="difference-step">{step}</span>
                {i < DIFFERENCE_STEPS.length - 1 && <span className="pathway-arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SKILLS MARKETPLACE */}
      <section className="fc-feature-section alt" id="skills">
        <div className="container">
          <div className="feature-panel-card">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="fc-badge mb-3"><i className="ti ti-sparkles" /> Skills Marketplace</span>
                <h2>Turn your skills <span>into your next client.</span></h2>
                <p>Get verified, showcase your best work, and turn profile views into paying opportunities.</p>
                <ul className="feature-list">
                  <li>Get verified and build instant credibility</li>
                  <li>Feature your work on our homepage</li>
                </ul>
                <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <Link href={r("user.talents")} className="btn-fc-primary">Get Discovered <i className="ti ti-arrow-right" /></Link>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div className="avatar-stack">
                      {featuredTalents.map((t, i) => (
                        <img key={t.id ?? i} src={personImage(t, i + 1)} alt="" />
                      ))}
                    </div>
                    <div>
                      <div style={{ color: "var(--accent)", fontSize: "0.8rem" }}>★★★★★ 4.8/5</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>{totalTalents}+ skilled people already in</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 feature-img-wrap">
                <img src={PHOTO.skills} alt="Skilled person showcasing a portfolio" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEARNING CENTER */}
      <section className="fc-feature-section" id="learning">
        <div className="container">
          <div className="feature-panel-card">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="fc-badge mb-3"><i className="ti ti-school" /> Learning Center</span>
                <h2>The skills gap ends <span>here.</span></h2>
                <p>Short, sharp micro-courses taught by people doing the work right now.</p>
                <ul className="feature-list">
                  <li>Finish a course in a week, not a semester</li>
                  <li>Shareable certificates for your profile</li>
                </ul>
                <Link href={r("user.courses")} className="btn-fc-primary">Start Learning Free <i className="ti ti-arrow-right" /></Link>
              </div>
              <div className="col-lg-6 feature-img-wrap">
                <img src={PHOTO.learning} alt="Person learning online" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OPPORTUNITIES */}
      <section className="fc-feature-section alt" id="opportunities">
        <div className="container">
          <div className="feature-panel-card">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="fc-badge mb-3"><i className="ti ti-briefcase" /> Opportunities</span>
                <h2>Real roles. <span>Zero noise.</span></h2>
                <p>Skip the open job boards. Get matched with verified skilled people and real work.</p>
                <ul className="feature-list">
                  <li>Post roles in minutes</li>
                  <li>Set alerts so the right match finds you</li>
                </ul>
                <Link href={r("user.jobs.index")} className="btn-fc-primary">Browse Open Roles <i className="ti ti-arrow-right" /></Link>
              </div>
              <div className="col-lg-6 feature-img-wrap">
                <img src={PHOTO.jobs} alt="Person reviewing job opportunities" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONNECTION ROOM */}
      <section className="fc-feature-section" id="connect">
        <div className="container">
          <div className="feature-panel-card">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <div className="row g-3">
                  <div className="col-6">
                    <img src={PHOTO.connect1} alt="Two skilled people collaborating at a laptop" className="img-fluid" style={{ borderRadius: "var(--r-md)", width: "100%", height: "260px", objectFit: "cover" }} />
                  </div>
                  <div className="col-6">
                    <img src={PHOTO.connect2} alt="Colleagues talking together" className="img-fluid" style={{ borderRadius: "var(--r-md)", width: "100%", height: "260px", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <span className="fc-badge mb-3"><i className="ti ti-users" /> Connection Room</span>
                <h2>Your next break <span>starts with one message.</span></h2>
                <p>A private space for verified skilled people to message, meet, and collaborate.</p>
                <ul className="feature-list">
                  <li>A diverse, verified professional network</li>
                  <li>A simple, distraction-free way to connect</li>
                </ul>
                <Link href={r("talent.connections-room")} className="btn-fc-primary">Join the Room <i className="ti ti-arrow-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MARKETPLACE */}
      <section className="fc-feature-section alt" id="marketplace">
        <div className="container">
          <div className="feature-panel-card">
            <span className="fc-badge mb-3"><i className="ti ti-shopping-bag" /> Marketplace</span>
            <h2>Turn what you make <span>into what you earn.</span></h2>
            <p>Sell your digital work with full payment protection, or shop with total confidence.</p>
            <div className="fc-provide-grid">
              <div className="fc-provide-box">
                <div className="provide-icon"><i className="ti ti-shopping-cart" /></div>
                <h6>Browse Products</h6>
                <p>Secure payments through Future Connect.</p>
                <Link href={r("user.products.index")} className="btn-fc-primary" style={{ fontSize: "0.8rem", padding: "9px 18px" }}>Explore <i className="ti ti-arrow-right" /></Link>
              </div>
              <div className="fc-provide-box">
                <div className="provide-icon"><i className="ti ti-package" /></div>
                <h6>Sell a Product</h6>
                <p>Reach buyers already on the platform.</p>
                <a data-bs-toggle="modal" data-bs-target="#applySellerModal" className="btn-fc-outline" style={{ fontSize: "0.8rem", padding: "9px 18px", cursor: "pointer" }}>Learn More <i className="ti ti-arrow-right" /></a>
              </div>
              <div className="fc-provide-box">
                <div className="provide-icon"><i className="ti ti-user-check" /></div>
                <h6>Become a Seller</h6>
                <p>Get paid instantly, minus a small platform fee.</p>
                <a className="btn-fc-primary" data-bs-toggle="modal" data-bs-target="#applySellerModal" style={{ fontSize: "0.8rem", padding: "9px 18px", cursor: "pointer" }}>Apply Now <i className="ti ti-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. VOLUNTEERING — request-for-volunteering portal, mirrors the "Request a Demo" pattern */}
      <section className="fc-feature-section fc-volunteer" id="volunteer">
        <div className="container">
          <div className="feature-panel-card">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="fc-badge mb-3"><i className="ti ti-heart-handshake" /> Volunteering</span>
                <p className="tagline">Give your skills, not just your time.</p>
                <h2>Skills built to help <span>should get the chance to.</span></h2>
                <p>Organizations post real needs, and skilled people step up to volunteer their expertise — from a one-off consultation to an ongoing project.</p>
                <ul className="feature-list">
                  <li>Organizations submit a request for volunteering in minutes</li>
                  <li>Skilled people browse and apply to causes that match their expertise</li>
                </ul>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#requestVolunteeringModal"
                    className="btn-fc-primary"
                    style={{ cursor: "pointer" }}
                  >
                    Request for Volunteering <i className="ti ti-arrow-right" />
                  </a>
                  <Link href={r("user.volunteer.index")} className="btn-fc-outline">
                    Become a Volunteer
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 feature-img-wrap">
                <img src={PHOTO.volunteer} alt="Volunteers working together" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. HOW IT WORKS */}
      <section className="fc-how">
        <div className="container">
          <div className="fc-section-head text-center" style={{ maxWidth: 560, margin: "0 auto 40px" }}>
            <span className="eyebrow">How It Works</span>
            <h2>From sign-up to standout — in 3 steps</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-num">01</span>
              <h5>Create Your Profile</h5>
              <p>Sign up free and showcase your skills in minutes.</p>
              <Link href={r("user.register_skills")} className="strip-link">Get Started <i className="ti ti-arrow-right" /></Link>
            </div>
            <div className="step-card">
              <span className="step-num">02</span>
              <h5>Get Discovered & Rated</h5>
              <p>Organizations browse, rate, and build your reputation.</p>
              <Link href={r("user.talents")} className="strip-link">Explore Skills <i className="ti ti-arrow-right" /></Link>
            </div>
            <div className="step-card">
              <span className="step-num">03</span>
              <h5>Grow With the Community</h5>
              <p>Connect with peers and keep learning as you go.</p>
              <Link href={r("talent.connections-room")} className="strip-link">Connection Room <i className="ti ti-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHO IT SERVES */}
      <section className="fc-who" id="who">
        <div className="container">
          <div className="fc-section-head text-center" style={{ maxWidth: 680, margin: "0 auto" }}>
            <span className="eyebrow">Who It Serves</span>
            <h2>Built for everyone with skills.</h2>
          </div>
          <div className="who-grid">
            {WHO_IT_SERVES.map((w) => (
              <div className="who-card" key={w.title}>
                <div className="provide-icon"><i className={`ti ${w.icon}`} /></div>
                <h6>{w.title}</h6>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. PHILOSOPHY */}
      <section className="fc-philosophy">
        <div className="container">
          <span className="eyebrow">The Core Philosophy</span>
          <h2>Your knowledge is your capital.</h2>
          <p>In a world rich in knowledge but limited in opportunity, Future Connect helps turn skills into connections, opportunities, collaboration, and income.</p>
        </div>
      </section>

      {/* 14. PARTNERS — full-color logos in a fixed list/grid, no scrolling */}
      <section className="fc-partners">
        <div className="container">
          <div className="fc-section-head text-center" style={{ margin: "0 auto 8px" }}>
            <span className="eyebrow">Our Partners</span>
            <h2>Building a global network</h2>
          </div>
          <p className="partners-label">Trusted by {displayPartners.length}+ partners worldwide</p>
          <div className="partners-grid">
            {displayPartners.map((partner, i) => (
              <div className="partner-tile" key={partner.id ?? partner.domain ?? i}>
                <img src={partnerLogo(partner)} alt={partner.name ?? "Partner"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. TESTIMONIALS */}
      <section className="fc-testimonials">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-md-7">
              <div className="fc-section-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Testimonials</span>
                <h2>Real stories from real skilled people</h2>
                <p>People who've grown their careers through Future Connect.</p>
              </div>
            </div>
            <div className="col-md-5 text-md-end">
              <div className="avatar-stack" style={{ justifyContent: "flex-end", marginBottom: 8 }}>
                {testimonials.map((t, i) => (
                  <img key={t.id ?? i} src={personImage(t.talent, i + 1)} alt="" />
                ))}
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Building a global talent community</p>
            </div>
          </div>

          <div className="testimonial-grid d-none d-md-grid">
            {testimonials.map((test, i) => (
              <div className="testimonial-card" key={test.id ?? i}>
                <div className="testimonial-head">
                  <img src={personImage(test.talent, i + 1)} alt="" />
                  <div>
                    <div className="testimonial-name">{test.talent?.name ?? "Skilled Person"}</div>
                    <div className="testimonial-role">{test.title ?? "Creative Professional"}</div>
                  </div>
                  <div className="testimonial-stars"><Stars rating={test.rating} /></div>
                </div>
                <div className="testimonial-body">
                  <p>{test.content ?? "Future Connect helped me turn my skills into steady, real opportunities."}</p>
                </div>
                {test.talent?.username && (
                  <div className="testimonial-support">
                    <i className="ti ti-heart" /> Support @{test.talent.username}
                  </div>
                )}
                <div className="testimonial-loc">
                  <i className="ti ti-map-pin" style={{ color: "var(--accent)" }} />
                  {test.talent?.address ?? "Kigali, Rwanda"}
                </div>
              </div>
            ))}
          </div>

          <div id="testimonialCarousel" className="carousel slide d-md-none" ref={testimonialCarouselRef}>
            <div className="carousel-inner">
              {testimonials.map((test, i) => (
                <div className={`carousel-item${i === 0 ? " active" : ""}`} key={test.id ?? i}>
                  <div className="testimonial-card" style={{ margin: "0 auto", maxWidth: 380 }}>
                    <div className="testimonial-head">
                      <img src={personImage(test.talent, i + 1)} alt="" />
                      <div>
                        <div className="testimonial-name">{test.talent?.name ?? "Skilled Person"}</div>
                        <div className="testimonial-role">{test.title ?? "Creative Professional"}</div>
                      </div>
                      <div className="testimonial-stars"><Stars rating={test.rating} /></div>
                    </div>
                    <div className="testimonial-body">
                      <p>{test.content ?? "Future Connect helped me turn my skills into steady, real opportunities."}</p>
                    </div>
                    {test.talent?.username && (
                      <div className="testimonial-support">
                        <i className="ti ti-heart" /> Support @{test.talent.username}
                      </div>
                    )}
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

      {/* 16. CTA */}
      <div className="container">
        <div className="fc-cta">
          <div className="fc-cta-glow" />
          <div className="row align-items-center">
            <div className="col-md-7" style={{ position: "relative" }}>
              <span className="eyebrow" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: 10 }}>
                Join Future Connect
              </span>
              <h2>Your skills deserve to be seen.</h2>
              <p>Join a growing community of verified skilled people building real careers.</p>
              <div className="hero-ctas" style={{ marginBottom: 6 }}>
                <Link href={r("user.register_skills")} className="btn-fc-primary">Get Started Today <i className="ti ti-arrow-right" /></Link>
                <Link href={r("user.talents")} className="btn-fc-outline">Browse Skills</Link>
              </div>
              <p className="fc-cta-note">No credit card. No commitment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Request for Volunteering modal — same interaction pattern as "Request a Demo" */}
      <div className="modal fade" id="requestVolunteeringModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)" }}>
            <div className="modal-header" style={{ borderBottom: "1px solid var(--border)" }}>
              <h5 className="modal-title" style={{ color: "var(--text-1)", fontFamily: "var(--font-head)", fontWeight: 700 }}>
                Request for Volunteering
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form method="POST" action={r("user.volunteer.request.store")}>
              <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <p style={{ color: "var(--text-2)", fontSize: "0.85rem", marginBottom: 0 }}>
                  Tell us what your organization or cause needs, and we'll match you with skilled people ready to volunteer.
                </p>
                <input type="text" name="organization" placeholder="Organization / cause name" className="form-control" required />
                <input type="email" name="email" placeholder="Contact email" className="form-control" required />
                <input type="text" name="skills_needed" placeholder="Skills needed (e.g. design, web development)" className="form-control" required />
                <textarea name="details" rows="4" placeholder="Describe the volunteering opportunity" className="form-control" required />
              </div>
              <div className="modal-footer" style={{ borderTop: "1px solid var(--border)" }}>
                <button type="button" className="btn-fc-outline" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn-fc-primary">Submit Request <i className="ti ti-arrow-right" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Home.layout = (page) => <GuestLayout children={page} />;