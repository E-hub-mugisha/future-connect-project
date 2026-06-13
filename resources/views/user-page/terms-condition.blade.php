@extends('layouts.guest')
@section('title', 'Terms & Conditions | Future Connect')
@section('content')

<style>
/* ─── TOKENS (matching Future Connect palette) ─── */
:root {
  --bg:         #0e1618;
  --surface:    #141d20;
  --surface2:   #1a2428;
  --green:      #48d597;
  --green-mid:  #00a667;
  --green-dim:  rgba(0,166,103,0.12);
  --red:        #f07070;
  --text:       #e8f0ed;
  --muted:      #7a9a8e;
  --border:     rgba(0,166,103,0.18);
  --border-h:   rgba(0,166,103,0.42);
  --radius:     10px;
}

/* ─── PAGE WRAPPER ─── */
.fc-terms-page {
  background: var(--bg);
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  color: var(--text);
  padding-bottom: 72px;
}

/* ─── TOP BAR ─── */
.fc-terms-topbar {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 18px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.fc-terms-topbar .inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* Back button */
.fc-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  padding: 7px 14px 7px 10px;
  border: 1px solid var(--border);
  border-radius: 100px;
  background: var(--surface2);
  transition: all 0.2s ease;
  white-space: nowrap;
  font-family: 'DM Sans', sans-serif;
}
.fc-back-btn svg {
  width: 15px; height: 15px;
  stroke: var(--muted);
  transition: stroke 0.2s, transform 0.2s;
  flex-shrink: 0;
}
.fc-back-btn:hover {
  color: var(--green);
  border-color: var(--border-h);
  background: var(--green-dim);
  text-decoration: none;
}
.fc-back-btn:hover svg {
  stroke: var(--green);
  transform: translateX(-2px);
}

/* Breadcrumb in topbar */
.fc-breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--muted);
  flex-wrap: wrap;
}
.fc-breadcrumb a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.15s;
}
.fc-breadcrumb a:hover { color: var(--green); }
.fc-breadcrumb-sep {
  opacity: 0.4;
  font-size: 10px;
}
.fc-breadcrumb-active { color: var(--green); }

/* ─── HERO ─── */
.fc-terms-hero {
  max-width: 860px;
  margin: 0 auto;
  padding: 52px 24px 36px;
  position: relative;
}

.fc-terms-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--green-dim);
  border: 1px solid rgba(0,166,103,0.28);
  color: var(--green);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 100px;
  margin-bottom: 18px;
}
.fc-terms-badge::before {
  content: '';
  display: inline-block;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--green);
}

.fc-terms-hero h1 {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.4px;
  margin: 0 0 10px;
  line-height: 1.15;
}

.fc-terms-hero h1 span { color: var(--green); }

.fc-terms-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.fc-terms-meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--muted);
}
.fc-terms-meta-item svg {
  width: 13px; height: 13px;
  stroke: var(--muted2, #4a6a60);
  flex-shrink: 0;
}

/* ─── CONTENT CARD ─── */
.fc-terms-content {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
}

.fc-terms-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 40px 44px;
  position: relative;
  overflow: hidden;
}

.fc-terms-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--green), transparent);
  border-radius: 18px 18px 0 0;
}

/* Table of Contents */
.fc-toc {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-bottom: 36px;
}
.fc-toc-label {
  font-size: 10px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 500;
  margin-bottom: 12px;
}
.fc-toc ol {
  margin: 0;
  padding-left: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 24px;
}
.fc-toc ol li {
  font-size: 12.5px;
  color: var(--muted);
  line-height: 1.5;
}
.fc-toc ol li a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.15s;
}
.fc-toc ol li a:hover { color: var(--green); }

/* Divider */
.fc-terms-divider {
  height: 1px;
  background: var(--border);
  margin: 32px 0;
}

/* Section */
.fc-terms-section { margin-bottom: 32px; }
.fc-terms-section:last-child { margin-bottom: 0; }

.fc-terms-section-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.fc-section-num {
  width: 28px; height: 28px;
  border-radius: 8px;
  background: var(--green-dim);
  border: 1px solid rgba(0,166,103,0.25);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 800;
  color: var(--green);
  flex-shrink: 0;
}

.fc-terms-section h6 {
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.fc-terms-section p {
  font-size: 13.5px;
  color: var(--muted);
  line-height: 1.85;
  margin: 0;
}

/* List items */
.fc-terms-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fc-terms-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13.5px;
  color: var(--muted);
  line-height: 1.75;
}

.fc-list-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
  margin-top: 8px;
}

/* Footer note */
.fc-terms-footer-note {
  margin-top: 36px;
  padding: 18px 22px;
  background: var(--green-dim);
  border: 1px solid rgba(0,166,103,0.22);
  border-radius: var(--radius);
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.fc-terms-footer-note-icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}
.fc-terms-footer-note p {
  font-size: 12.5px;
  color: var(--muted);
  margin: 0;
  line-height: 1.7;
}
.fc-terms-footer-note p strong {
  color: var(--green);
  font-weight: 600;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 640px) {
  .fc-terms-card { padding: 24px 18px; }
  .fc-terms-hero { padding: 36px 14px 24px; }
  .fc-terms-content { padding: 0 14px; }
  .fc-toc ol { grid-template-columns: 1fr; }
  .fc-terms-hero h1 { font-size: 1.6rem; }
}
</style>

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">

<div class="fc-terms-page">

  {{-- ── Sticky Top Bar ── --}}
  <div class="fc-terms-topbar">
    <div class="inner">
      {{-- Back button: goes to previous page in history, falls back to home --}}
      <a href="javascript:history.back()" class="fc-back-btn"
         onclick="if(document.referrer === '') { window.location='{{ route('user.home') }}'; return false; }">
        <svg fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
        </svg>
        Go Back
      </a>

      {{-- Breadcrumb --}}
      <nav class="fc-breadcrumb" aria-label="breadcrumb">
        <a href="{{ route('user.home') }}">Home</a>
        <span class="fc-breadcrumb-sep">›</span>
        <span class="fc-breadcrumb-active">Terms &amp; Conditions</span>
      </nav>
    </div>
  </div>

  {{-- ── Hero ── --}}
  <div class="fc-terms-hero">
    <div class="fc-terms-badge">Legal</div>
    <h1>Terms &amp; <span>Conditions</span></h1>
    <div class="fc-terms-meta">
      <span class="fc-terms-meta-item">
        <svg fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Last updated: January 2025
      </span>
      <span class="fc-terms-meta-item">
        <svg fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        ~3 min read
      </span>
    </div>
  </div>

  {{-- ── Content Card ── --}}
  <div class="fc-terms-content">
    <div class="fc-terms-card">

      {{-- Table of Contents --}}
      <div class="fc-toc">
        <div class="fc-toc-label">Contents</div>
        <ol>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#acceptance">Acceptance of Terms</a></li>
          <li><a href="#eligibility">Eligibility</a></li>
          <li><a href="#account">Account Registration</a></li>
          <li><a href="#payments">Payments &amp; Subscriptions</a></li>
          <li><a href="#changes">Changes to Terms</a></li>
        </ol>
      </div>

      <div class="fc-terms-divider"></div>

      {{-- 1. Introduction --}}
      <div class="fc-terms-section" id="intro">
        <div class="fc-terms-section-head">
          <div class="fc-section-num">01</div>
          <h6>Introduction</h6>
        </div>
        <p>Welcome to DreamsGigs. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions ("Terms"). Please read them carefully before using our services.</p>
      </div>

      <div class="fc-terms-divider"></div>

      {{-- 2. Acceptance --}}
      <div class="fc-terms-section" id="acceptance">
        <div class="fc-terms-section-head">
          <div class="fc-section-num">02</div>
          <h6>Acceptance of Terms</h6>
        </div>
        <ul class="fc-terms-list">
          <li>
            <span class="fc-list-dot"></span>
            By accessing or using our Gigs, you confirm that you have read, understood, and agreed to these Terms.
          </li>
          <li>
            <span class="fc-list-dot"></span>
            If you do not agree to these Terms, you may not use the Website or its services.
          </li>
        </ul>
      </div>

      <div class="fc-terms-divider"></div>

      {{-- 3. Eligibility --}}
      <div class="fc-terms-section" id="eligibility">
        <div class="fc-terms-section-head">
          <div class="fc-section-num">03</div>
          <h6>Eligibility</h6>
        </div>
        <ul class="fc-terms-list">
          <li>
            <span class="fc-list-dot"></span>
            Users must be at least 18 years old or have parental/guardian consent to use the platform.
          </li>
          <li>
            <span class="fc-list-dot"></span>
            Organizations must ensure that their members comply with these Terms.
          </li>
        </ul>
      </div>

      <div class="fc-terms-divider"></div>

      {{-- 4. Account Registration --}}
      <div class="fc-terms-section" id="account">
        <div class="fc-terms-section-head">
          <div class="fc-section-num">04</div>
          <h6>Account Registration</h6>
        </div>
        <ul class="fc-terms-list">
          <li>
            <span class="fc-list-dot"></span>
            Users are required to register an account to access courses and other features.
          </li>
          <li>
            <span class="fc-list-dot"></span>
            You agree to provide accurate and complete information during registration.
          </li>
          <li>
            <span class="fc-list-dot"></span>
            You are responsible for maintaining the confidentiality of your login credentials.
          </li>
        </ul>
      </div>

      <div class="fc-terms-divider"></div>

      {{-- 5. Payments --}}
      <div class="fc-terms-section" id="payments">
        <div class="fc-terms-section-head">
          <div class="fc-section-num">05</div>
          <h6>Payments &amp; Subscriptions</h6>
        </div>
        <ul class="fc-terms-list">
          <li>
            <span class="fc-list-dot"></span>
            Certain courses or features may require payment or a subscription.
          </li>
          <li>
            <span class="fc-list-dot"></span>
            You are responsible for any taxes applicable to your purchase.
          </li>
        </ul>
      </div>

      <div class="fc-terms-divider"></div>

      {{-- 6. Changes --}}
      <div class="fc-terms-section" id="changes">
        <div class="fc-terms-section-head">
          <div class="fc-section-num">06</div>
          <h6>Changes to Terms &amp; Conditions</h6>
        </div>
        <ul class="fc-terms-list">
          <li>
            <span class="fc-list-dot"></span>
            DreamsGigs may update these Terms &amp; Conditions periodically. Any changes will be communicated through the website or via email.
          </li>
        </ul>
      </div>

      {{-- Footer note --}}
      <div class="fc-terms-footer-note">
        <div class="fc-terms-footer-note-icon">📋</div>
        <p>
          <strong>Questions about these terms?</strong> If you have any concerns or need clarification on any section,
          please reach out to our support team before using the platform.
        </p>
      </div>

    </div>
  </div>

</div>

@endsection