import React, { useEffect, useRef, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

/**
 * DemoRequest (Inertia page component)
 * --------------------------------------
 * React/Inertia port of `resources/views/demo/request.blade.php`.
 *
 * This page intentionally does NOT use the shared GuestLayout — like the
 * original Blade file, it's a standalone two-column layout with its own
 * minimal top bar, not the full site header/footer. It's rendered as a
 * top-level Inertia page (no `.layout` assignment at the bottom).
 *
 * Notes on the conversion, and a design bug fixed along the way:
 * - **Bug fix**: the original page's top bar (`<header class="fc-topheader">`
 *   with `fc-th-logo` / `fc-th-actions` / `fc-th-home` / `fc-th-toggle`
 *   classes) had NO matching CSS anywhere in the file — the `<style>` block
 *   only styled a *different*, unused header (`fc-header` / `fc-nav` /
 *   `fc-mega`, copy-pasted from the main site header partial). The result
 *   was an unstyled, unlaid-out top bar. This version gives `.dr-topheader`
 *   real CSS: a slim sticky bar with the logo on the left and Home link +
 *   theme toggle on the right.
 * - **Bug fix**: the height-sync script referenced
 *   `document.getElementById('fcHeaderFixedWrap')`, an ID that doesn't
 *   exist anywhere on this page (it belongs to the shared site header used
 *   elsewhere) — so `--dr-header-h` was silently always `0px` and the
 *   `position: sticky` left panel's `top` offset never accounted for the
 *   bar's real height. This version measures the actual top bar via a
 *   `ref` instead.
 * - `route('name')` goes through the same safe `r()` wrapper used on the
 *   other pages (falls back to `#` + a console warning if Ziggy's
 *   `window.Ziggy` isn't set up).
 * - `$companySizes` / `$preferredTimes` (associative arrays passed to the
 *   Blade `<select>`s) become `companySizes` / `preferredTimes` props as
 *   plain `{ value: label }` objects — that's what Laravel's `Inertia::render`
 *   actually serializes a string-keyed PHP array to (a JSON object, not an
 *   array), so this component reads them with `Object.entries()` rather
 *   than `.map()`.
 * - `@csrf`, `old()`, `@error()`, and `session('success')` all became
 *   Inertia's `useForm()` — it tracks `data`, `errors`, and `processing`
 *   for you and re-populates `errors` automatically after a failed
 *   validation redirect, so there's no need to manually thread old input
 *   back into each field.
 * - The success banner reads from a shared `flash.success` prop (via
 *   `usePage().props.flash`) — wire this up in
 *   `HandleInertiaRequests::share()` if you haven't already:
 *   `'flash' => ['success' => fn () => $request->session()->get('success')]`.
 * - The theme-toggle script and the header-height-sync script both became
 *   `useEffect` hooks.
 */

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

const DEFAULT_COMPANY_SIZES = {
  "1-10": "1 – 10 employees",
  "11-50": "11 – 50 employees",
  "51-200": "51 – 200 employees",
  "200+": "200+ employees",
};

const DEFAULT_PREFERRED_TIMES = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  flexible: "I'm flexible",
};

function useTheme() {
  const [theme, setThemeState] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("fc-theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setThemeState(stored || (systemPrefersLight ? "light" : "dark"));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.setAttribute("data-h-theme", "light");
    else root.removeAttribute("data-h-theme");
    localStorage.setItem("fc-theme", theme);
  }, [theme]);

  const toggleTheme = () => setThemeState((t) => (t === "light" ? "dark" : "light"));
  return [theme, toggleTheme];
}

function useHeaderHeightVar(ref) {
  useEffect(() => {
    function sync() {
      if (ref.current) {
        document.documentElement.style.setProperty("--dr-header-h", `${ref.current.offsetHeight}px`);
      }
    }
    sync();
    window.addEventListener("resize", sync, { passive: true });
    return () => window.removeEventListener("resize", sync);
  }, [ref]);
}

export default function DemoRequest({
  companySizes = DEFAULT_COMPANY_SIZES,
  preferredTimes = DEFAULT_PREFERRED_TIMES,
}) {
  const { flash } = usePage().props;
  const [, toggleTheme] = useTheme();
  const topbarRef = useRef(null);
  useHeaderHeightVar(topbarRef);

  const { data, setData, post, processing, errors } = useForm({
    full_name: "",
    work_email: "",
    phone: "",
    role: "",
    company_name: "",
    company_size: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });

  const errorCount = Object.keys(errors).length;
  const todayStr = new Date().toISOString().slice(0, 10);

  const field = (name) => ({
    id: name,
    name,
    value: data[name],
    onChange: (e) => setData(name, e.target.value),
  });

  const submit = (e) => {
    e.preventDefault();
    post(r("demo.store"));
  };

  return (
    <>
      <Head title="Request a Demo — Future Connect">
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        :root {
          --bg: #0e1618;
          --surface: #141d20;
          --surface2: #1a2428;
          --green: #48d597;
          --green-mid: #00a667;
          --green-dim: rgba(0, 166, 103, 0.12);
          --red: #f07070;
          --red-dim: rgba(240, 112, 112, 0.10);
          --red-border: rgba(240, 112, 112, 0.35);
          --text: #e8f0ed;
          --muted: #7a9a8e;
          --muted2: #4a6a60;
          --border: rgba(0, 166, 103, 0.18);
          --border-h: rgba(0, 166, 103, 0.42);
          --radius: 10px;
          --radius-lg: 18px;
          --dr-header-h: 0px;
        }

        [data-h-theme="light"] {
          --bg: #f6faf8;
          --surface: #ffffff;
          --surface2: #eef4f1;
          --green: #00a667;
          --green-mid: #00a667;
          --green-dim: rgba(0, 166, 103, 0.08);
          --red: #d64545;
          --red-dim: rgba(214, 69, 69, 0.08);
          --red-border: rgba(214, 69, 69, 0.3);
          --text: #10201b;
          --muted: #5b7a70;
          --muted2: #8aa89e;
          --border: rgba(0, 100, 60, 0.14);
          --border-h: rgba(0, 100, 60, 0.35);
        }

        .dr-root, .dr-root *, .dr-root *::before, .dr-root *::after { box-sizing: border-box; }

        .dr-root { background: var(--bg); margin: 0; font-family: 'Montserrat', sans-serif; color: var(--text); min-height: 100vh; }

        /* ── TOP BAR (this is the fix — the original page's equivalent
           markup had zero matching CSS anywhere) ── */
        .dr-topheader {
          position: sticky; top: 0; z-index: 50;
          background: var(--surface); border-bottom: 1px solid var(--border);
        }
        .dr-topheader-inner {
          max-width: 1400px; margin: 0 auto; padding: 14px 52px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .dr-th-logo { display: flex; align-items: center; gap: 9px; text-decoration: none; }
        .dr-th-logo-mark {
          width: 32px; height: 32px; border-radius: 8px; background: var(--green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .dr-th-logo-mark svg { width: 16px; height: 16px; fill: #fff; }
        .dr-th-logo-text { font-size: 15px; font-weight: 700; color: var(--text); white-space: nowrap; }
        .dr-th-logo-text span { color: var(--green); }
        .dr-th-actions { display: flex; align-items: center; gap: 10px; }
        .dr-th-home {
          display: inline-flex; align-items: center; gap: 6px; color: var(--muted); font-size: 13px;
          font-weight: 500; text-decoration: none; padding: 7px 14px; border: 1px solid var(--border);
          border-radius: 100px; background: var(--surface2); transition: all 0.2s;
        }
        .dr-th-home:hover { color: var(--green); border-color: var(--border-h); background: var(--green-dim); }
        .dr-th-toggle {
          width: 36px; height: 36px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface2);
          color: var(--muted); display: flex; align-items: center; justify-content: center; cursor: pointer;
          transition: all 0.2s; font-size: 15px;
        }
        .dr-th-toggle:hover { color: var(--green); border-color: var(--border-h); }
        .dr-th-toggle .ti-sun { display: none; }
        .dr-th-toggle .ti-moon { display: inline-flex; }
        [data-h-theme="light"] .dr-th-toggle .ti-sun { display: inline-flex; }
        [data-h-theme="light"] .dr-th-toggle .ti-moon { display: none; }
        @media (max-width: 520px) {
          .dr-topheader-inner { padding: 12px 18px; }
          .dr-th-home span { display: none; }
        }

        .dr-page { min-height: calc(100vh - 65px); display: grid; grid-template-columns: 1fr 1fr; }

        .dr-left {
          border-right: 1px solid var(--border); padding: 60px 52px; display: flex; flex-direction: column;
          justify-content: space-between; position: sticky; top: var(--dr-header-h); overflow-y: auto;
        }
        .dr-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .dr-logo-mark {
          width: 36px; height: 36px; background: var(--green); border-radius: 9px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .dr-logo-mark svg { width: 18px; height: 18px; fill: #fff; }
        .dr-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
        .dr-logo-tagline { font-size: 11px; color: var(--muted2); letter-spacing: .3px; margin: 0; line-height: 1; }

        .dr-left-body { position: relative; z-index: 1; }
        .dr-badge {
          display: inline-flex; align-items: center; gap: 7px; background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.3); color: var(--green); font-size: 10px; font-weight: 500;
          letter-spacing: 1.4px; text-transform: uppercase; padding: 5px 14px; border-radius: 100px; margin-bottom: 22px;
        }
        .dr-badge::before {
          content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%;
          background: var(--green); animation: drPulse 2s infinite;
        }
        @keyframes drPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(.7); } }

        .dr-left-body h1 {
          font-family: 'Montserrat', sans-serif; font-size: 2.4rem; font-weight: 800; color: var(--text);
          line-height: 1.15; letter-spacing: -0.5px; margin: 0 0 16px;
        }
        .dr-left-body h1 span { color: var(--green); }
        .dr-left-body > p { font-size: 14.5px; color: var(--muted); line-height: 1.8; margin: 0 0 34px; max-width: 380px; }

        .dr-features { display: flex; flex-direction: column; gap: 14px; }
        .dr-feature { display: flex; align-items: flex-start; gap: 14px; }
        .dr-feature-icon {
          width: 38px; height: 38px; border-radius: 10px; background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.25); display: flex; align-items: center; justify-content: center;
          font-size: 16px; flex-shrink: 0; margin-top: 1px;
        }
        .dr-feature-text strong { display: block; font-size: 13.5px; font-weight: 500; color: var(--text); margin-bottom: 2px; }
        .dr-feature-text span { font-size: 12px; color: var(--muted); line-height: 1.55; }

        .dr-stats {
          display: flex; gap: 28px; flex-wrap: wrap; position: relative; z-index: 1;
          padding-top: 26px; border-top: 1px solid var(--border);
        }
        .dr-stat-num { font-family: 'Montserrat', sans-serif; font-size: 1.45rem; font-weight: 800; color: var(--green); line-height: 1; margin-bottom: 4px; }
        .dr-stat-label { font-size: 11.5px; color: var(--muted); }

        .dr-right { background: var(--bg); overflow-y: auto; display: flex; flex-direction: column; }
        .dr-topbar { display: flex; align-items: center; justify-content: space-between; padding: 22px 52px 0; flex-shrink: 0; }
        .dr-home-btn {
          display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-size: 12.5px; font-weight: 500;
          text-decoration: none; padding: 7px 14px 7px 10px; border: 1px solid var(--border); border-radius: 100px;
          background: var(--surface); transition: all 0.2s ease;
        }
        .dr-home-btn svg { width: 15px; height: 15px; stroke: var(--muted); transition: stroke 0.2s ease, transform 0.2s ease; flex-shrink: 0; }
        .dr-home-btn:hover { color: var(--green); border-color: var(--border-h); background: var(--green-dim); }
        .dr-home-btn:hover svg { stroke: var(--green); transform: translateX(-2px); }
        .dr-login-hint { font-size: 12.5px; color: var(--muted); }
        .dr-login-hint a { color: var(--green); text-decoration: none; font-weight: 500; }
        .dr-login-hint a:hover { text-decoration: underline; }

        .dr-right-body { padding: 28px 52px 56px; flex: 1; }
        .dr-right-head { margin-bottom: 24px; }
        .dr-right-head h2 { font-family: 'Montserrat', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--text); margin: 0 0 6px; }
        .dr-right-head p { font-size: 13px; color: var(--muted); margin: 0; }

        .dr-panel {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
          padding: 32px; position: relative; overflow: hidden;
        }
        .dr-panel::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--green), transparent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .dr-alert-success {
          display: flex; align-items: flex-start; gap: 12px; background: var(--green-dim);
          border: 1px solid var(--border-h); border-radius: var(--radius); padding: 14px 16px; margin-bottom: 22px;
        }
        .dr-alert-success-icon {
          width: 32px; height: 32px; border-radius: 8px; background: rgba(0, 166, 103, 0.18);
          border: 1px solid var(--border-h); color: var(--green); display: flex; align-items: center;
          justify-content: center; flex-shrink: 0; font-size: 15px;
        }
        .dr-alert-success-body strong { display: block; font-size: 13px; font-weight: 600; color: var(--green); margin-bottom: 3px; }
        .dr-alert-success-body p { margin: 0; font-size: 12.5px; color: var(--muted); line-height: 1.6; }

        .dr-error-banner {
          display: flex; align-items: flex-start; gap: 12px; background: var(--red-dim);
          border: 1px solid var(--red-border); border-radius: var(--radius); padding: 14px 16px; margin-bottom: 22px;
        }
        .dr-error-banner-icon {
          width: 32px; height: 32px; border-radius: 8px; background: rgba(240, 112, 112, 0.15);
          border: 1px solid var(--red-border); display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 15px;
        }
        .dr-error-banner-body strong { display: block; font-size: 12.5px; font-weight: 600; color: var(--red); margin-bottom: 5px; }
        .dr-error-banner-body ul { margin: 0; padding-left: 16px; list-style: disc; }
        .dr-error-banner-body ul li { font-size: 12px; color: var(--red); line-height: 1.6; opacity: .85; }

        .dr-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        .dr-row.single { grid-template-columns: 1fr; }
        .dr-field { display: flex; flex-direction: column; gap: 6px; }
        .dr-field label {
          display: flex; align-items: center; justify-content: space-between; font-size: 10px; font-weight: 500;
          color: var(--muted); letter-spacing: 0.6px; text-transform: uppercase;
        }
        .dr-field-error-tag {
          font-size: 9.5px; font-weight: 500; color: var(--red); text-transform: none;
          display: flex; align-items: center; gap: 4px;
        }
        .dr-field-error-tag::before {
          content: ''; display: inline-block; width: 4px; height: 4px; border-radius: 50%;
          background: var(--red); flex-shrink: 0;
        }
        .dr-field input, .dr-field select, .dr-field textarea {
          background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius);
          color: var(--text); font-family: 'Montserrat', sans-serif; font-size: 13.5px; padding: 11px 14px;
          outline: none; transition: border-color 0.2s, background 0.2s, box-shadow 0.2s; width: 100%;
          -webkit-appearance: none; appearance: none;
        }
        .dr-field input::placeholder, .dr-field textarea::placeholder { color: var(--muted2); }
        .dr-field input:focus, .dr-field select:focus, .dr-field textarea:focus {
          border-color: var(--green); background: rgba(0, 166, 103, 0.06); box-shadow: 0 0 0 3px rgba(0, 166, 103, 0.08);
        }
        .dr-field.has-error input, .dr-field.has-error select, .dr-field.has-error textarea {
          border-color: var(--red-border); background: var(--red-dim); box-shadow: 0 0 0 3px rgba(240, 112, 112, 0.08);
        }
        .dr-field select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 12px center; background-size: 16px;
          padding-right: 36px; cursor: pointer;
        }
        .dr-field select option { background: var(--surface2); color: var(--text); }
        .dr-field textarea { resize: vertical; min-height: 96px; }

        .dr-actions { display: flex; justify-content: flex-end; align-items: center; margin-top: 24px; padding-top: 22px; border-top: 1px solid var(--border); }
        .dr-btn-submit {
          display: inline-flex; align-items: center; gap: 7px; background: var(--green); color: #0a1f14;
          font-family: 'Montserrat', sans-serif; font-size: 13.5px; font-weight: 700; border: none;
          border-radius: var(--radius); padding: 13px 28px; cursor: pointer; transition: background 0.2s ease, transform 0.2s ease;
        }
        .dr-btn-submit:hover { background: #62eaaa; transform: translateY(-1px); }
        .dr-btn-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .dr-note { font-size: 11.5px; color: var(--muted2); margin-top: 14px; line-height: 1.6; }

        @media (max-width: 960px) {
          .dr-page { grid-template-columns: 1fr; }
          .dr-left { position: static; height: auto; padding: 44px 28px 40px; }
          .dr-topbar { padding: 22px 24px 0; }
          .dr-right-body { padding: 24px 24px 56px; }
        }
        @media (max-width: 520px) {
          .dr-left { padding: 36px 18px 32px; }
          .dr-topbar { padding: 18px 14px 0; }
          .dr-right-body { padding: 18px 14px 48px; }
          .dr-left-body h1 { font-size: 1.9rem; }
          .dr-panel { padding: 20px 14px; }
          .dr-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="dr-root">
        {/* TOP BAR */}
        <header className="dr-topheader" ref={topbarRef}>
          <div className="dr-topheader-inner">
            <Link href={r("user.home")} className="dr-th-logo">
              <div className="dr-th-logo-mark">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="dr-th-logo-text">Future<span>Connect</span></span>
            </Link>

            <div className="dr-th-actions">
              <Link href={r("user.home")} className="dr-th-home">
                <i className="ti ti-home" /> <span>Home</span>
              </Link>
              <button className="dr-th-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <i className="ti ti-sun" />
                <i className="ti ti-moon" />
              </button>
            </div>
          </div>
        </header>

        <div className="dr-page">
          {/* LEFT — Branding */}
          <div className="dr-left">
            <Link href={r("user.home")} className="dr-logo-lockup">
              <div className="dr-logo-mark">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <p className="dr-logo-wordmark">Future Connect</p>
                <p className="dr-logo-tagline">Empowering Stories. Real Impact.</p>
              </div>
            </Link>

            <div className="dr-left-body">
              <div className="dr-badge">Live Demo</div>
              <h1>
                See Future Connect<br />in <span>Action</span>
              </h1>
              <p>
                Book a personalized walkthrough with our team and discover how Future Connect can help you find,
                vet, and hire the right talent — fast.
              </p>

              <div className="dr-features">
                <div className="dr-feature">
                  <div className="dr-feature-icon">🎯</div>
                  <div className="dr-feature-text">
                    <strong>Tailored to You</strong>
                    <span>We'll walk through the features most relevant to your team and use case.</span>
                  </div>
                </div>
                <div className="dr-feature">
                  <div className="dr-feature-icon">⚡</div>
                  <div className="dr-feature-text">
                    <strong>30 Minutes, No Pressure</strong>
                    <span>A quick, friendly session — ask anything, no obligation to buy.</span>
                  </div>
                </div>
                <div className="dr-feature">
                  <div className="dr-feature-icon">🧑‍💼</div>
                  <div className="dr-feature-text">
                    <strong>Real Talent Pool</strong>
                    <span>See live examples of verified talent matching your industry.</span>
                  </div>
                </div>
                <div className="dr-feature">
                  <div className="dr-feature-icon">📅</div>
                  <div className="dr-feature-text">
                    <strong>Flexible Scheduling</strong>
                    <span>Pick a time that works for you — we'll confirm within one business day.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dr-stats">
              <div>
                <div className="dr-stat-num">8K+</div>
                <div className="dr-stat-label">Skills listed</div>
              </div>
              <div>
                <div className="dr-stat-num">4.8</div>
                <div className="dr-stat-label">Avg. rating</div>
              </div>
              <div>
                <div className="dr-stat-num">24h</div>
                <div className="dr-stat-label">Response time</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="dr-right">
            <div className="dr-topbar">
              <Link href={r("user.home")} className="dr-home-btn">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                </svg>
                Back to Home
              </Link>
              <span className="dr-login-hint">
                Have an account? <Link href={r("login")}>Sign in →</Link>
              </span>
            </div>

            <div className="dr-right-body">
              <div className="dr-right-head">
                <h2>Request a Demo</h2>
                <p>Tell us a bit about your team and we'll set up a time to show you around.</p>
              </div>

              {flash?.success && (
                <div className="dr-alert-success">
                  <div className="dr-alert-success-icon">✓</div>
                  <div className="dr-alert-success-body">
                    <strong>Request received</strong>
                    <p>{flash.success}</p>
                  </div>
                </div>
              )}

              {errorCount > 0 && (
                <div className="dr-error-banner">
                  <div className="dr-error-banner-icon">⚠️</div>
                  <div className="dr-error-banner-body">
                    <strong>
                      Please fix {errorCount} {errorCount === 1 ? "issue" : "issues"} before continuing:
                    </strong>
                    <ul>
                      {Object.values(errors).map((msg, i) => (
                        <li key={i}>{msg}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="dr-panel">
                <form onSubmit={submit}>
                  <div className="dr-row">
                    <div className={`dr-field${errors.full_name ? " has-error" : ""}`}>
                      <label htmlFor="full_name">
                        Full Name
                        {errors.full_name && <span className="dr-field-error-tag">{errors.full_name}</span>}
                      </label>
                      <input type="text" placeholder="e.g. Jane Uwimana" required {...field("full_name")} />
                    </div>

                    <div className={`dr-field${errors.work_email ? " has-error" : ""}`}>
                      <label htmlFor="work_email">
                        Work Email
                        {errors.work_email && <span className="dr-field-error-tag">{errors.work_email}</span>}
                      </label>
                      <input type="email" placeholder="you@company.com" required {...field("work_email")} />
                    </div>
                  </div>

                  <div className="dr-row">
                    <div className={`dr-field${errors.phone ? " has-error" : ""}`}>
                      <label htmlFor="phone">
                        Phone <span style={{ textTransform: "none", fontWeight: 400 }}>(optional)</span>
                        {errors.phone && <span className="dr-field-error-tag">{errors.phone}</span>}
                      </label>
                      <input type="tel" placeholder="+250 788 123 456" {...field("phone")} />
                    </div>

                    <div className={`dr-field${errors.role ? " has-error" : ""}`}>
                      <label htmlFor="role">
                        Your Role <span style={{ textTransform: "none", fontWeight: 400 }}>(optional)</span>
                        {errors.role && <span className="dr-field-error-tag">{errors.role}</span>}
                      </label>
                      <input type="text" placeholder="e.g. HR Manager, Founder" {...field("role")} />
                    </div>
                  </div>

                  <div className="dr-row">
                    <div className={`dr-field${errors.company_name ? " has-error" : ""}`}>
                      <label htmlFor="company_name">
                        Company Name
                        {errors.company_name && <span className="dr-field-error-tag">{errors.company_name}</span>}
                      </label>
                      <input type="text" placeholder="e.g. Umoja NGO" required {...field("company_name")} />
                    </div>

                    <div className={`dr-field${errors.company_size ? " has-error" : ""}`}>
                      <label htmlFor="company_size">
                        Company Size <span style={{ textTransform: "none", fontWeight: 400 }}>(optional)</span>
                        {errors.company_size && <span className="dr-field-error-tag">{errors.company_size}</span>}
                      </label>
                      <select {...field("company_size")}>
                        <option value="">Select size</option>
                        {Object.entries(companySizes).map(([value, label]) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="dr-row">
                    <div className={`dr-field${errors.preferred_date ? " has-error" : ""}`}>
                      <label htmlFor="preferred_date">
                        Preferred Date <span style={{ textTransform: "none", fontWeight: 400 }}>(optional)</span>
                        {errors.preferred_date && <span className="dr-field-error-tag">{errors.preferred_date}</span>}
                      </label>
                      <input type="date" min={todayStr} {...field("preferred_date")} />
                    </div>

                    <div className={`dr-field${errors.preferred_time ? " has-error" : ""}`}>
                      <label htmlFor="preferred_time">
                        Preferred Time <span style={{ textTransform: "none", fontWeight: 400 }}>(optional)</span>
                        {errors.preferred_time && <span className="dr-field-error-tag">{errors.preferred_time}</span>}
                      </label>
                      <select {...field("preferred_time")}>
                        <option value="">Select time</option>
                        {Object.entries(preferredTimes).map(([value, label]) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="dr-row single">
                    <div className={`dr-field${errors.message ? " has-error" : ""}`}>
                      <label htmlFor="message">
                        What would you like to see? <span style={{ textTransform: "none", fontWeight: 400 }}>(optional)</span>
                        {errors.message && <span className="dr-field-error-tag">{errors.message}</span>}
                      </label>
                      <textarea
                        placeholder="e.g. Hiring for a 6-month design contract, want to see the talent matching flow..."
                        {...field("message")}
                      />
                    </div>
                  </div>

                  <div className="dr-actions">
                    <button type="submit" className="dr-btn-submit" disabled={processing}>
                      {processing ? "Sending…" : "Request My Demo →"}
                    </button>
                  </div>

                  <p className="dr-note">
                    By submitting, you agree to be contacted by our team regarding your demo request. We won't
                    share your details with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}