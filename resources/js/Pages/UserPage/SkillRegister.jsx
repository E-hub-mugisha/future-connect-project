import React, { useState, useEffect, useRef } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
/**
 * SkillRegister
 * -------------
 * React/Inertia port of `resources/views/skillRegister.blade.php`.
 *
 * This was a standalone page (no `@extends`), carrying its own <head>,
 * header, and theme-toggle script — so this component intentionally does
 * NOT wrap itself in GuestLayout the way the other converted pages do.
 * It renders its own header directly, same as the original.
 *
 * Notes on the conversion:
 * - The inline `<style>` block, all markup, and the light-theme override
 *   block were carried over verbatim into a template-literal `<style>`
 *   tag, unchanged, since none of it needed to become component logic.
 * - `@csrf` was removed — the form now uses Inertia's `useForm` hook,
 *   whose axios instance attaches CSRF automatically. File upload
 *   (`image`) works the same way; `useForm` detects the File object and
 *   sends the request as multipart/form-data.
 * - Laravel's server-side `$errors` bag became `useForm`'s `errors` object
 *   (`skillForm.errors.name`, etc.) — populated automatically if the
 *   backend redirects back with validation errors after a failed submit.
 * - `old('field')` repopulation is handled by keeping `skillForm.data` as
 *   the source of truth for every input's `value`, so a failed submit
 *   (which resets `processing` but keeps `data` as-is) never loses what
 *   the person typed.
 * - The four-step wizard (`goTo`, `validateStep`, `stepRules`,
 *   `updateStepper`) became a `currentStep` state value + a
 *   `stepValidators` map of small pure functions, run against
 *   `skillForm.data` before advancing — same UX, same messages.
 * - The auto-jump-to-first-invalid-step logic
 *   (`@if($errors->has(...)) goTo(...)`) became a `useEffect` that
 *   inspects `skillForm.errors` once after a failed server round-trip and
 *   calls `goTo()` accordingly.
 * - The image file-preview (`handleFile`, `FileReader`, `#preview-img`)
 *   became `imagePreviewUrl` state built with `URL.createObjectURL`.
 * - The theme toggle (`fcSetTheme`/`fcToggleTheme`/localStorage) became a
 *   `theme` state + `useEffect` that mirrors it onto
 *   `document.documentElement`'s `data-h-theme` attribute and
 *   `localStorage`, matching the exact same shared-across-pages mechanism
 *   the Blade version used, so the toggle stays in sync with the rest of
 *   the app.
 * - Named routes (`user.home`, `login`, `talent.register`,
 *   `user.terms-condition`, `home`) became lookups into a `routes` prop
 *   (see DEFAULT_ROUTES) — same pattern as the other converted pages.
 * - The success screen (`@if(session('success'))`) became a `submitted`
 *   boolean prop (pass `session('success')` through as a prop from the
 *   controller) OR is shown automatically after `skillForm.post()` resolves
 *   successfully client-side — both paths are handled.
 */

const DEFAULT_ROUTES = {
  "user.home": "/",
  login: "/login",
  "talent.register": "/talent/register",
  "user.terms-condition": "/terms",
  home: "/",
};

const TOTAL_STEPS = 4;

const PHONE_RE = /^\+?\d[\d\s-]{6,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB

export default function SkillRegister({
  categories = [],
  routes = {},
  submitted = false,
}) {
  const r = (name) => routes[name] || DEFAULT_ROUTES[name] || "#";

  // ── Theme toggle, shared across pages via localStorage (same mechanism
  // as the Blade version) ──
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("fc-theme") : null;
    const systemPrefersLight =
      typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = stored || (systemPrefersLight ? "light" : "dark");
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-h-theme", "light");
    } else {
      root.removeAttribute("data-h-theme");
    }
    localStorage.setItem("fc-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // ── Wizard state ──
  const [currentStep, setCurrentStep] = useState(0);
  const [fieldErrors, setFieldErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const skillForm = useForm({
    name: "",
    address: "",
    phone: "",
    email: "",
    language: "",
    category_id: "",
    description: "",
    image: null,
  });

  // Jump to the first step with a server-side validation error, same as
  // the Blade `@if($errors->has(...)) goTo(...)` block.
  useEffect(() => {
    const errs = skillForm.errors;
    if (!errs || Object.keys(errs).length === 0) return;
    if (errs.name || errs.address) setCurrentStep(0);
    else if (errs.phone || errs.email) setCurrentStep(1);
    else if (errs.language || errs.category_id || errs.description) setCurrentStep(2);
    else if (errs.image) setCurrentStep(3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillForm.errors]);

  const stepValidators = {
    0: () => {
      const errs = {};
      if (!skillForm.data.name.trim()) errs.name = "Full name is required";
      if (!skillForm.data.address.trim()) errs.address = "Location is required";
      return errs;
    },
    1: () => {
      const errs = {};
      if (!PHONE_RE.test(skillForm.data.phone.trim())) errs.phone = "A valid phone number is required";
      if (!EMAIL_RE.test(skillForm.data.email.trim())) errs.email = "A valid email address is required";
      return errs;
    },
    2: () => {
      const errs = {};
      if (!skillForm.data.language.trim()) errs.language = "At least one language is required";
      if (!skillForm.data.category_id) errs.category_id = "Please select a category";
      if (!skillForm.data.description.trim()) errs.description = "A short description is required";
      return errs;
    },
    3: () => {
      const errs = {};
      if (!skillForm.data.image) errs.image = "A profile photo is required";
      if (!termsAccepted) errs.terms = "You must agree to the Terms & Conditions";
      return errs;
    },
  };

  const clearFieldError = (field) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const setField = (field, value) => {
    skillForm.setData(field, value);
    clearFieldError(field);
  };

  const goTo = (step) => setCurrentStep(step);

  const validateAndAdvance = (nextStep) => {
    const stepBeingValidated = nextStep - 1;
    const errs = stepValidators[stepBeingValidated]?.() || {};

    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      // Scroll first error into view, same as the Blade version
      requestAnimationFrame(() => {
        const firstErrKey = Object.keys(errs)[0];
        const el = document.querySelector(`[data-field="${firstErrKey}"]`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      return;
    }

    setFieldErrors({});
    goTo(nextStep);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    setField("image", file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);
    } else {
      setImagePreviewUrl(null);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = stepValidators[3]();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    skillForm.post(r("talent.register"), {
      forceFormData: true,
    });
  };

  const stepPct = currentStep === 0 ? 0 : (currentStep / (TOTAL_STEPS - 1)) * 100;
  const showSuccess = submitted || skillForm.wasSuccessful;

  const errorList = [
    ...Object.values(fieldErrors).filter((v) => typeof v === "string"),
    ...Object.values(skillForm.errors || {}),
  ];

  return (
    <>
      <Head title="Register Your Skills — Future Connect" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />

      <style>{`
        /* ─── TOKENS ─────────────────────────────────────────── */
        :root {
          --bg: #0e1618;
          --surface: #141d20;
          --surface2: #1a2428;
          --surface3: #1f2c30;
          --green: #48d597;
          --green-mid: #00a667;
          --green-dim: rgba(0, 166, 103, 0.12);
          --green-glow: rgba(72, 213, 151, 0.18);
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
        }

        .fc-skill-register-page, .fc-skill-register-page *,
        .fc-skill-register-page *::before,
        .fc-skill-register-page *::after {
          box-sizing: border-box;
        }

        .fc-skill-register-page {
          background: var(--bg);
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          color: var(--text);
        }

        /* ─── TOP HEADER (standalone page — carries its own header + toggle) ── */
        .fc-topheader {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 14px 0;
          position: sticky;
          top: 0;
          z-index: 500;
        }

        .fc-topheader-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .fc-th-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
        }

        .fc-th-logo-mark {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fc-th-logo-mark svg {
          width: 16px;
          height: 16px;
          fill: #0e1618;
        }

        .fc-th-logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
        }

        .fc-th-logo-text span {
          color: var(--green);
        }

        .fc-th-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .fc-th-home {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--muted);
          font-size: 12.5px;
          font-weight: 500;
          text-decoration: none;
          padding: 8px 14px;
          border: 1px solid var(--border);
          border-radius: 100px;
          background: transparent;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .fc-th-home:hover {
          color: var(--green);
          border-color: var(--border-h);
          background: var(--green-dim);
        }

        .fc-th-toggle {
          width: 38px;
          height: 38px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: transparent;
          color: var(--muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 15px;
          flex-shrink: 0;
        }

        .fc-th-toggle:hover {
          color: #fff;
          border-color: var(--border-h);
          background: rgba(255, 255, 255, 0.04);
        }

        .fc-th-toggle .ti-sun { display: none; }
        .fc-th-toggle .ti-moon { display: inline-flex; }
        [data-h-theme="light"] .fc-th-toggle .ti-sun { display: inline-flex; }
        [data-h-theme="light"] .fc-th-toggle .ti-moon { display: none; }

        @media (max-width: 520px) {
          .fc-topheader-inner { padding: 0 18px; }
          .fc-th-home span { display: none; }
        }

        /* ─── PAGE GRID ───────────────────────────────────────── */
        .fc-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* ─── LEFT PANEL ──────────────────────────────────────── */
        .fc-left {
          border-right: 1px solid var(--border);
          padding: 60px 52px;
          display: flex;
          flex-direction: column;
          top: 0;
          overflow: hidden;
        }

        .fc-logo-lockup {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .fc-logo-mark {
          width: 36px;
          height: 36px;
          background: #48d597;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fc-logo-mark svg {
          width: 18px;
          height: 18px;
          fill: #0e1618;
        }

        .fc-logo-wordmark {
          font-size: 15px;
          font-weight: 700;
          color: #e2ecee;
          letter-spacing: .3px;
          line-height: 1.2;
          margin: 0;
        }

        .fc-logo-tagline {
          font-size: 11px;
          color: #4e6b70;
          letter-spacing: .3px;
          margin: 0;
          line-height: 1;
        }

        .fc-left-body {
          position: relative;
          z-index: 1;
        }

        .fc-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.3);
          color: var(--green);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 22px;
          margin-top: 22px;
        }

        .fc-badge::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          animation: fcPulse 2s infinite;
        }

        @keyframes fcPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(.7); }
        }

        .fc-left-body h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.12;
          letter-spacing: -0.5px;
          margin: 16px 0 16px;
        }

        .fc-left-body h1 span {
          color: var(--green);
        }

        .fc-left-body > p {
          font-size: 14.5px;
          color: var(--muted);
          line-height: 1.8;
          margin: 0 0 34px;
          max-width: 360px;
        }

        .fc-features {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .fc-feature {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .fc-feature-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .fc-feature-icon svg {
          width: 18px;
          height: 18px;
          stroke: var(--green);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-feature-text strong {
          display: block;
          font-size: 13.5px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 2px;
        }

        .fc-feature-text span {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.55;
        }

        .fc-stats {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
          padding-top: 26px;
          border-top: 1px solid var(--border);
        }

        .fc-stat-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--green);
          line-height: 1;
          margin-bottom: 4px;
        }

        .fc-stat-label {
          font-size: 11.5px;
          color: var(--muted);
        }

        /* ─── RIGHT PANEL ─────────────────────────────────────── */
        .fc-right {
          background: var(--bg);
          padding: 0;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .fc-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 52px 0;
          flex-shrink: 0;
        }

        .fc-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 12.5px;
          font-weight: 500;
          text-decoration: none;
          padding: 7px 14px 7px 10px;
          border: 1px solid var(--border);
          border-radius: 100px;
          background: var(--surface);
          transition: all 0.2s ease;
          letter-spacing: 0.2px;
        }

        .fc-home-btn svg {
          width: 15px;
          height: 15px;
          stroke: var(--muted);
          transition: stroke 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }

        .fc-home-btn:hover {
          color: var(--green);
          border-color: var(--border-h);
          background: var(--green-dim);
        }

        .fc-home-btn:hover svg {
          stroke: var(--green);
          transform: translateX(-2px);
        }

        .fc-login-hint {
          font-size: 12.5px;
          color: var(--muted);
        }

        .fc-login-hint a {
          color: var(--green);
          text-decoration: none;
          font-weight: 500;
        }

        .fc-login-hint a:hover {
          text-decoration: underline;
        }

        .fc-right-body {
          padding: 28px 52px 56px;
          flex: 1;
        }

        .fc-right-head {
          margin-bottom: 24px;
        }

        .fc-right-head h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
        }

        .fc-right-head p {
          font-size: 13px;
          color: var(--muted);
          margin: 0;
        }

        /* ─── STEPPER ──────────────────────────────────────────── */
        .fc-stepper {
          display: flex;
          align-items: center;
          margin-bottom: 28px;
          position: relative;
        }

        .fc-stepper-track {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border);
          z-index: 0;
        }

        .fc-stepper-fill {
          height: 100%;
          background: var(--green);
          transition: width 0.4s ease;
        }

        .fc-step-node {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--surface);
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: var(--muted);
          z-index: 1;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .fc-step-node svg {
          width: 16px;
          height: 16px;
          stroke: #fff;
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-step-node.fc-done {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
        }

        .fc-step-node.fc-active {
          background: var(--green-dim);
          border-color: var(--green);
          color: var(--green);
          box-shadow: 0 0 0 5px rgba(0, 166, 103, 0.1);
        }

        [data-h-theme="light"] .fc-step-node.fc-active svg {
          stroke: var(--green);
        }

        .fc-step-spacer {
          flex: 1;
          z-index: 0;
        }

        /* ─── PANEL ────────────────────────────────────────────── */
        .fc-panel {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

        .fc-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--green), transparent);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        /* ─── GLOBAL ERROR BANNER ──────────────────────────────── */
        .fc-error-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: var(--red-dim);
          border: 1px solid var(--red-border);
          border-radius: var(--radius);
          padding: 14px 16px;
          margin-bottom: 22px;
          animation: fcShake 0.4s ease;
        }

        .fc-error-banner-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(240, 112, 112, 0.15);
          border: 1px solid var(--red-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 15px;
        }

        [data-h-theme="light"] .fc-error-banner-icon {
          background: rgba(217, 72, 72, 0.1);
        }

        .fc-error-banner-icon svg {
          width: 17px;
          height: 17px;
          stroke: var(--red);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-error-banner-body strong {
          display: block;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--red);
          margin-bottom: 5px;
        }

        .fc-error-banner-body ul {
          margin: 0;
          padding-left: 16px;
          list-style: disc;
        }

        .fc-error-banner-body ul li {
          font-size: 12px;
          color: #f0a0a0;
          line-height: 1.6;
        }

        [data-h-theme="light"] .fc-error-banner-body ul li {
          color: #b03a3a;
        }

        @keyframes fcShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(3px); }
        }

        .fc-panel-head {
          margin-bottom: 22px;
        }

        .fc-step-label {
          font-size: 10px;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          color: var(--green);
          font-weight: 500;
          margin-bottom: 4px;
        }

        .fc-panel-head h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        /* ─── FIELDS ───────────────────────────────────────────── */
        .fc-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .fc-row.single {
          grid-template-columns: 1fr;
        }

        .fc-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .fc-field label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 500;
          color: var(--muted);
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .fc-field-error-tag {
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: var(--red);
          text-transform: none;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .fc-field-error-tag::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--red);
          flex-shrink: 0;
        }

        .fc-input-wrap {
          position: relative;
        }

        .fc-field input,
        .fc-field select,
        .fc-field textarea {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--text);
          font-family: 'Montserrat', sans-serif;
          font-size: 13.5px;
          padding: 11px 14px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          width: 100%;
          -webkit-appearance: none;
          appearance: none;
        }

        .fc-field input::placeholder,
        .fc-field textarea::placeholder {
          color: var(--muted2);
        }

        .fc-field input:focus,
        .fc-field select:focus,
        .fc-field textarea:focus {
          border-color: var(--green);
          background: rgba(0, 166, 103, 0.06);
          box-shadow: 0 0 0 3px rgba(0, 166, 103, 0.08);
        }

        .fc-field.has-error input,
        .fc-field.has-error select,
        .fc-field.has-error textarea {
          border-color: var(--red-border);
          background: var(--red-dim);
          box-shadow: 0 0 0 3px rgba(240, 112, 112, 0.08);
          animation: fcShake 0.35s ease;
        }

        .fc-field.has-error input:focus,
        .fc-field.has-error select:focus,
        .fc-field.has-error textarea:focus {
          border-color: var(--red);
          box-shadow: 0 0 0 3px rgba(240, 112, 112, 0.12);
        }

        .fc-field-msg {
          display: none;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          color: var(--red);
          line-height: 1.5;
          padding: 4px 0 0;
        }

        .fc-field-msg svg {
          width: 12px;
          height: 12px;
          stroke: var(--red);
          flex-shrink: 0;
        }

        .fc-field.has-error .fc-field-msg {
          display: flex;
        }

        .fc-field select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 36px;
          cursor: pointer;
        }

        .fc-field select option {
          background: #141d20;
          color: var(--text);
        }

        [data-h-theme="light"] .fc-field select option {
          background: #F5f5f7;
          color: var(--text);
        }

        .fc-field textarea {
          resize: vertical;
          min-height: 88px;
        }

        /* ─── FILE UPLOAD ──────────────────────────────────────── */
        .fc-file-zone {
          border: 1.5px dashed var(--border);
          border-radius: var(--radius);
          padding: 28px 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s;
          background: var(--surface2);
          position: relative;
        }

        .fc-file-zone:hover {
          border-color: var(--green);
          background: var(--green-dim);
        }

        .fc-file-zone.has-error {
          border-color: var(--red-border);
          background: var(--red-dim);
        }

        .fc-file-zone input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }

        .fc-file-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          font-size: 18px;
        }

        .fc-file-icon svg {
          width: 19px;
          height: 19px;
          stroke: var(--green);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-file-zone p {
          margin: 0;
          font-size: 13px;
          color: var(--muted);
        }

        .fc-file-zone p span {
          color: var(--green);
          font-weight: 500;
        }

        #preview-wrap {
          margin-top: 14px;
          text-align: center;
        }

        #preview-img {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--green);
        }

        #preview-name {
          font-size: 11.5px;
          color: var(--muted);
          margin: 8px 0 0;
        }

        /* ─── TERMS ────────────────────────────────────────────── */
        .fc-check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 20px;
          cursor: pointer;
        }

        .fc-check input[type="checkbox"] {
          accent-color: var(--green);
          margin-top: 3px;
          flex-shrink: 0;
          width: 15px;
          height: 15px;
          cursor: pointer;
        }

        .fc-check span {
          font-size: 12.5px;
          color: var(--muted);
          line-height: 1.65;
        }

        .fc-check a {
          color: var(--green);
          text-decoration: none;
        }

        .fc-check a:hover {
          text-decoration: underline;
        }

        /* ─── ACTIONS ──────────────────────────────────────────── */
        .fc-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid var(--border);
        }

        .fc-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 22px;
          border-radius: var(--radius);
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
          text-decoration: none;
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

        .fc-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-back {
          background: var(--surface2);
          color: var(--muted);
          border: 1px solid var(--border);
        }

        .btn-back:hover {
          border-color: var(--border-h);
          color: var(--text);
        }

        .btn-next {
          background: var(--green);
          color: #0a1f14;
          margin-left: auto;
        }

        .btn-next:hover {
          background: #62eaaa;
          transform: translateY(-1px);
        }

        .btn-submit {
          background: var(--green);
          color: #0a1f14;
          margin-left: auto;
          padding: 12px 28px;
        }

        .btn-submit:hover {
          background: #62eaaa;
          transform: translateY(-1px);
        }

        /* ─── STEP SECTIONS ────────────────────────────────────── */
        .fc-section {
          display: none;
        }

        .fc-section.fc-visible {
          display: block;
          animation: fcFadeUp 0.3s ease;
        }

        @keyframes fcFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ─── SUCCESS ──────────────────────────────────────────── */
        .fc-success {
          text-align: center;
          padding: 24px 0 12px;
        }

        .fc-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--green-dim);
          border: 2px solid rgba(0, 166, 103, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          font-size: 28px;
          color: var(--green);
        }

        .fc-success-icon svg {
          width: 30px;
          height: 30px;
          stroke: var(--green);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-success h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          color: #fff;
          margin: 0 0 10px;
        }

        .fc-success p {
          color: var(--muted);
          font-size: 13.5px;
          margin: 0;
          line-height: 1.75;
        }

        .fc-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 22px;
          color: var(--green);
          font-size: 13.5px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }

        .fc-back-link:hover {
          text-decoration: underline;
        }

        /* ─── PROGRESS HINT ────────────────────────────────────── */
        .fc-progress-hint {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .fc-progress-bar-wrap {
          flex: 1;
          height: 3px;
          background: var(--surface2);
          border-radius: 99px;
          overflow: hidden;
        }

        .fc-progress-bar {
          height: 100%;
          background: var(--green);
          border-radius: 99px;
          transition: width 0.4s ease;
        }

        .fc-progress-text {
          font-size: 11px;
          color: var(--muted);
          white-space: nowrap;
          font-weight: 500;
        }

        /* ─── RESPONSIVE ───────────────────────────────────────── */
        @media (max-width: 960px) {
          .fc-page { grid-template-columns: 1fr; }
          .fc-left { position: static; height: auto; padding: 44px 28px 40px; }
          .fc-topbar { padding: 22px 24px 0; }
          .fc-right-body { padding: 24px 24px 56px; }
        }

        @media (max-width: 520px) {
          .fc-left { padding: 36px 18px 32px; }
          .fc-topbar { padding: 18px 14px 0; }
          .fc-right-body { padding: 18px 14px 48px; }
          .fc-left-body h1 { font-size: 1.9rem; }
          .fc-panel { padding: 20px 14px; }
          .fc-row { grid-template-columns: 1fr; }
        }

        /* ══════════════════════════════════════
           LIGHT THEME OVERRIDES (matches shared header toggle site-wide)
        ══════════════════════════════════════ */
        [data-h-theme="light"] {
          --bg: #f6faf8;
          --surface: #F5f5f7;
          --surface2: #eef4f1;
          --surface3: #e6f1ec;
          --green: #00a667;
          --green-mid: #00c07a;
          --green-dim: rgba(0, 166, 103, 0.08);
          --green-glow: rgba(0, 166, 103, 0.16);
          --red: #d94848;
          --red-dim: rgba(217, 72, 72, 0.08);
          --red-border: rgba(217, 72, 72, 0.3);
          --text: #10201b;
          --muted: #5b7a70;
          --muted2: #8fa89e;
          --border: rgba(0, 100, 60, 0.12);
          --border-h: rgba(0, 100, 60, 0.3);
        }

        [data-h-theme="light"] .fc-th-logo-text,
        [data-h-theme="light"] .fc-logo-text,
        [data-h-theme="light"] .fc-logo-wordmark,
        [data-h-theme="light"] .fc-left-body h1,
        [data-h-theme="light"] .fc-feature-text strong,
        [data-h-theme="light"] .fc-panel-head h3,
        [data-h-theme="light"] .fc-right-head h2,
        [data-h-theme="light"] .fc-success h3 {
          color: #10201b;
        }

        [data-h-theme="light"] .fc-th-toggle:hover {
          color: #10201b;
          background: rgba(0, 100, 60, 0.06);
        }

        [data-h-theme="light"] .fc-logo-tagline {
          color: #8fa89e;
        }
      `}</style>

      <div className="fc-skill-register-page">
        {/* ══════════ MODERN TOP HEADER (standalone page — its own header) ══════════ */}
        <header className="fc-topheader">
          <div className="fc-topheader-inner">
            <Link href={r("user.home")} className="fc-th-logo">
              <div className="fc-th-logo-mark">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="fc-th-logo-text">Future<span>Connect</span></span>
            </Link>

            <div className="fc-th-actions">
              <Link href={r("user.home")} className="fc-th-home">
                <i className="ti ti-home"></i> <span>Home</span>
              </Link>
              <button className="fc-th-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <i className="ti ti-sun"></i>
                <i className="ti ti-moon"></i>
              </button>
            </div>
          </div>
        </header>

        <div className="fc-page">

          {/* ══════════ LEFT — Branding ══════════ */}
          <div className="fc-left">
            <Link href={r("user.home")} className="fc-logo-lockup">
              <div className="fc-logo-mark">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <p className="fc-logo-wordmark">Future Connect</p>
                <p className="fc-logo-tagline">Empowering Stories. Real Impact.</p>
              </div>
            </Link>

            <div className="fc-left-body">
              <div className="fc-badge">skill Hub</div>
              <h1>Showcase Your <span>Skills</span> to the World</h1>

              <div className="fc-features">
                <div className="fc-feature">
                  <div className="fc-feature-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></svg>
                  </div>
                  <div className="fc-feature-text">
                    <strong>Get Verified</strong>
                    <span>Earn a verified badge and build instant credibility with clients.</span>
                  </div>
                </div>
                <div className="fc-feature">
                  <div className="fc-feature-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="3" y1="12" x2="21" y2="12" /><path d="M12 3a13 13 0 0 1 0 18a13 13 0 0 1 0-18z" /></svg>
                  </div>
                  <div className="fc-feature-text">
                    <strong>Global Exposure</strong>
                    <span>Reach clients and employers locally and across the globe.</span>
                  </div>
                </div>
                <div className="fc-feature">
                  <div className="fc-feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                  </div>
                  <div className="fc-feature-text">
                    <strong>Direct Connections</strong>
                    <span>Connect securely with clients through our Connection Room.</span>
                  </div>
                </div>
                <div className="fc-feature">
                  <div className="fc-feature-icon">
                    <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                  </div>
                  <div className="fc-feature-text">
                    <strong>Grow With Us</strong>
                    <span>Access courses, opportunities and tools to level up your career.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════ RIGHT — Form ══════════ */}
          <div className="fc-right">

            <div className="fc-topbar">
              <span></span>
              <span className="fc-login-hint">
                Have a profile? <Link href={r("login")}>Sign in →</Link>
              </span>
            </div>

            <div className="fc-right-body">

              {!showSuccess && (
                <>
                  <div className="fc-right-head">
                    <h2>Create Your skill Profile</h2>
                    <p>Fill in four quick steps — takes less than 3 minutes.</p>
                  </div>

                  {errorList.length > 0 && (
                    <div className="fc-error-banner">
                      <div className="fc-error-banner-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      </div>
                      <div className="fc-error-banner-body">
                        <strong>
                          Please fix {errorList.length} {errorList.length === 1 ? "issue" : "issues"} before continuing:
                        </strong>
                        <ul>
                          {errorList.map((msg, i) => (
                            <li key={i}>{msg}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="fc-progress-hint">
                    <div className="fc-progress-bar-wrap">
                      <div className="fc-progress-bar" style={{ width: `${((currentStep + 1) / TOTAL_STEPS) * 100}%` }} />
                    </div>
                    <span className="fc-progress-text">Step {currentStep + 1} of {TOTAL_STEPS}</span>
                  </div>

                  <div className="fc-stepper">
                    <div className="fc-stepper-track">
                      <div className="fc-stepper-fill" style={{ width: `${stepPct}%` }} />
                    </div>
                    {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                      <React.Fragment key={i}>
                        <div className={`fc-step-node${i < currentStep ? " fc-done" : i === currentStep ? " fc-active" : ""}`}>
                          {i < currentStep ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12" /></svg>
                          ) : (
                            i + 1
                          )}
                        </div>
                        {i < TOTAL_STEPS - 1 && <div className="fc-step-spacer" />}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="fc-panel">
                    <form onSubmit={onSubmit} noValidate encType="multipart/form-data">

                      {/* ── STEP 1: Personal Info ── */}
                      <div className={`fc-section${currentStep === 0 ? " fc-visible" : ""}`}>
                        <div className="fc-panel-head">
                          <div className="fc-step-label">Step 1 of 4</div>
                          <h3>Personal Information</h3>
                        </div>
                        <div className="fc-row">

                          <div className={`fc-field${fieldErrors.name ? " has-error" : ""}`} data-field="name">
                            <label htmlFor="name">
                              Full Name
                              {fieldErrors.name && <span className="fc-field-error-tag">{fieldErrors.name}</span>}
                            </label>
                            <input
                              type="text" id="name"
                              value={skillForm.data.name}
                              onChange={(e) => setField("name", e.target.value)}
                              placeholder="e.g. John Doe"
                            />
                            <span className="fc-field-msg">
                              <svg fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              {fieldErrors.name || "Full name is required"}
                            </span>
                          </div>

                          <div className={`fc-field${fieldErrors.address ? " has-error" : ""}`} data-field="address">
                            <label htmlFor="address">
                              Location / Address
                              {fieldErrors.address && <span className="fc-field-error-tag">{fieldErrors.address}</span>}
                            </label>
                            <input
                              type="text" id="address"
                              value={skillForm.data.address}
                              onChange={(e) => setField("address", e.target.value)}
                              placeholder="e.g. Kigali, Rwanda"
                            />
                            <span className="fc-field-msg">
                              <svg fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              {fieldErrors.address || "Location is required"}
                            </span>
                          </div>

                        </div>
                        <div className="fc-actions">
                          <span></span>
                          <button type="button" className="fc-btn btn-next" onClick={() => validateAndAdvance(1)}>
                            Continue
                            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                          </button>
                        </div>
                      </div>

                      {/* ── STEP 2: Contact Info ── */}
                      <div className={`fc-section${currentStep === 1 ? " fc-visible" : ""}`}>
                        <div className="fc-panel-head">
                          <div className="fc-step-label">Step 2 of 4</div>
                          <h3>Contact Details</h3>
                        </div>
                        <div className="fc-row">

                          <div className={`fc-field${fieldErrors.phone ? " has-error" : ""}`} data-field="phone">
                            <label htmlFor="phone">
                              Phone Number
                              {fieldErrors.phone && <span className="fc-field-error-tag">{fieldErrors.phone}</span>}
                            </label>
                            <input
                              type="tel" id="phone"
                              value={skillForm.data.phone}
                              onChange={(e) => setField("phone", e.target.value)}
                              placeholder="e.g. +250 788 123 456"
                            />
                            <span className="fc-field-msg">
                              <svg fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              {fieldErrors.phone || "A valid phone number is required"}
                            </span>
                          </div>

                          <div className={`fc-field${fieldErrors.email ? " has-error" : ""}`} data-field="email">
                            <label htmlFor="email">
                              Email Address
                              {fieldErrors.email && <span className="fc-field-error-tag">{fieldErrors.email}</span>}
                            </label>
                            <input
                              type="email" id="email"
                              value={skillForm.data.email}
                              onChange={(e) => setField("email", e.target.value)}
                              placeholder="e.g. you@example.com"
                            />
                            <span className="fc-field-msg">
                              <svg fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              {fieldErrors.email || "A valid email address is required"}
                            </span>
                          </div>

                        </div>
                        <div className="fc-actions">
                          <button type="button" className="fc-btn btn-back" onClick={() => goTo(0)}>
                            <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            Back
                          </button>
                          <button type="button" className="fc-btn btn-next" onClick={() => validateAndAdvance(2)}>
                            Continue
                            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                          </button>
                        </div>
                      </div>

                      {/* ── STEP 3: skill Info ── */}
                      <div className={`fc-section${currentStep === 2 ? " fc-visible" : ""}`}>
                        <div className="fc-panel-head">
                          <div className="fc-step-label">Step 3 of 4</div>
                          <h3>Skills &amp; Expertise</h3>
                        </div>
                        <div className="fc-row">

                          <div className={`fc-field${fieldErrors.language ? " has-error" : ""}`} data-field="language">
                            <label htmlFor="language">
                              Languages Spoken
                              {fieldErrors.language && <span className="fc-field-error-tag">{fieldErrors.language}</span>}
                            </label>
                            <input
                              type="text" id="language"
                              value={skillForm.data.language}
                              onChange={(e) => setField("language", e.target.value)}
                              placeholder="e.g. English, Kinyarwanda"
                            />
                            <span className="fc-field-msg">
                              <svg fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              {fieldErrors.language || "At least one language is required"}
                            </span>
                          </div>

                          <div className={`fc-field${fieldErrors.category_id ? " has-error" : ""}`} data-field="category_id">
                            <label htmlFor="category_id">
                              skill Category
                              {fieldErrors.category_id && <span className="fc-field-error-tag">{fieldErrors.category_id}</span>}
                            </label>
                            <select
                              id="category_id"
                              value={skillForm.data.category_id}
                              onChange={(e) => setField("category_id", e.target.value)}
                            >
                              <option value="">Select a category</option>
                              {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                              ))}
                            </select>
                            <span className="fc-field-msg">
                              <svg fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              {fieldErrors.category_id || "Please select a category"}
                            </span>
                          </div>

                        </div>

                        <div className="fc-row single">
                          <div className={`fc-field${fieldErrors.description ? " has-error" : ""}`} data-field="description">
                            <label htmlFor="description">
                              About Your skill
                              {fieldErrors.description && <span className="fc-field-error-tag">{fieldErrors.description}</span>}
                            </label>
                            <textarea
                              id="description"
                              value={skillForm.data.description}
                              onChange={(e) => setField("description", e.target.value)}
                              placeholder="Describe your skills, experience, and what makes you unique..."
                            />
                            <span className="fc-field-msg">
                              <svg fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              {fieldErrors.description || "A short description is required"}
                            </span>
                          </div>
                        </div>

                        <div className="fc-actions">
                          <button type="button" className="fc-btn btn-back" onClick={() => goTo(1)}>
                            <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            Back
                          </button>
                          <button type="button" className="fc-btn btn-next" onClick={() => validateAndAdvance(3)}>
                            Continue
                            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                          </button>
                        </div>
                      </div>

                      {/* ── STEP 4: Photo & Submit ── */}
                      <div className={`fc-section${currentStep === 3 ? " fc-visible" : ""}`}>
                        <div className="fc-panel-head">
                          <div className="fc-step-label">Step 4 of 4</div>
                          <h3>Profile Photo</h3>
                        </div>

                        <div className={`fc-file-zone${fieldErrors.image ? " has-error" : ""}`} data-field="image">
                          <input
                            type="file"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                          <div className="fc-file-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                              <circle cx="12" cy="13" r="4" />
                            </svg>
                          </div>
                          <p><span>Click to upload</span> or drag &amp; drop</p>
                          <p style={{ fontSize: 11, marginTop: 5, color: "var(--muted2)" }}>JPG, PNG — max 5 MB</p>
                        </div>

                        {fieldErrors.image && (
                          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8, fontSize: 12, color: "var(--red)" }}>
                            <svg width="13" height="13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="8" x2="12" y2="12" />
                              <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {fieldErrors.image}
                          </div>
                        )}

                        {imagePreviewUrl && (
                          <div id="preview-wrap">
                            <img id="preview-img" src={imagePreviewUrl} alt="Preview" />
                            <p id="preview-name">{skillForm.data.image?.name}</p>
                          </div>
                        )}

                        <label className="fc-check">
                          <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => {
                              setTermsAccepted(e.target.checked);
                              clearFieldError("terms");
                            }}
                          />
                          <span>
                            I agree to the{" "}
                            <Link href={r("user.terms-condition")}>Terms &amp; Conditions</Link>
                            {" "}of Future Connect.
                          </span>
                        </label>
                        {fieldErrors.terms && (
                          <div style={{ fontSize: 12, color: "var(--red)", marginTop: 6 }}>{fieldErrors.terms}</div>
                        )}

                        <div className="fc-actions">
                          <button type="button" className="fc-btn btn-back" onClick={() => goTo(2)}>
                            <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            Back
                          </button>
                          <button type="submit" className="fc-btn btn-submit" disabled={skillForm.processing}>
                            {skillForm.processing ? "Submitting…" : "Submit Registration"}
                            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                          </button>
                        </div>
                      </div>

                    </form>
                  </div>
                </>
              )}

              {/* Success screen */}
              {showSuccess && (
                <div className="fc-panel">
                  <div className="fc-section fc-visible">
                    <div className="fc-success">
                      <div className="fc-success-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <h3>Registration Submitted!</h3>
                      <p>
                        Your skill profile has been submitted for review.<br />
                        You'll receive a confirmation email within 24–48 hours.
                      </p>
                      <Link href={r("home")} className="fc-back-link">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                        </svg>
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
