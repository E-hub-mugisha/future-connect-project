@extends('layouts.guest')
@section('title', 'Explore Works & Jobs')
@section('content')

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">

<style>
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

    /* Hero stat pills */
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

    /* Mini feature cards */
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
   CATEGORIES SCROLL
══════════════════════════════════════ */
    .cats-bar {
        background: var(--bg-card);
        border-bottom: 1px solid var(--border);
        padding: 18px 0;
    }

    .cats-scroll {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        scrollbar-width: none;
        align-items: center;
    }

    .cats-scroll::-webkit-scrollbar {
        display: none;
    }

    .cat-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: var(--r-pill);
        padding: 7px 16px;
        font-size: 0.78rem;
        font-weight: 500;
        color: var(--text-2);
        text-decoration: none;
        transition: border-color .2s, color .2s, background .2s;
        white-space: nowrap;
    }

    .cat-chip:hover,
    .cat-chip.active {
        border-color: var(--border-h);
        color: var(--accent);
        background: var(--bg-glass2);
    }

    .cat-chip .count {
        background: var(--bg-glass2);
        border: 1px solid var(--border-h);
        color: var(--accent);
        border-radius: 20px;
        padding: 1px 7px;
        font-size: 0.68rem;
    }

    /* ══════════════════════════════════════
   MAIN LAYOUT
══════════════════════════════════════ */
    .jobs-main {
        padding: 40px 0 80px;
    }

    /* ── SIDEBAR ── */
    .jobs-sidebar {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--r-lg);
        padding: 24px;
        position: sticky;
        top: 24px;
    }

    .sidebar-title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .sidebar-title-row h4 {
        font-family: var(--font-head);
        font-size: 1rem;
        font-weight: 700;
        color: var(--text-1);
        margin: 0;
    }

    .reset-link {
        font-size: 0.75rem;
        color: var(--accent);
        text-decoration: none;
    }

    .reset-link:hover {
        text-decoration: underline;
    }

    .filter-group {
        margin-bottom: 22px;
    }

    .filter-group-label {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-3);
        font-weight: 600;
        margin-bottom: 10px;
        display: block;
    }

    .filter-divider {
        border-top: 1px solid var(--border);
        margin: 18px 0;
    }

    .filter-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .filter-list li a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        border-radius: var(--r-sm);
        font-size: 0.82rem;
        color: var(--text-2);
        text-decoration: none;
        transition: background .15s, color .15s;
    }

    .filter-list li a:hover,
    .filter-list li a.active {
        background: var(--bg-glass2);
        color: var(--accent);
    }

    .filter-list li a .fcount {
        font-size: 0.7rem;
        color: var(--text-3);
        background: var(--bg-glass);
        border-radius: 10px;
        padding: 1px 7px;
    }

    .filter-list li a.active .fcount {
        color: var(--accent);
    }

    /* ── JOBS GRID ── */
    .jobs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 18px;
    }

    .job-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--r-md);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: border-color .25s, transform .2s;
    }

    .job-card:hover {
        border-color: var(--border-h);
        transform: translateY(-3px);
    }

    .job-card-thumb {
        position: relative;
        height: 150px;
        overflow: hidden;
        flex-shrink: 0;
    }

    .job-card-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .35s;
    }

    .job-card:hover .job-card-thumb img {
        transform: scale(1.04);
    }

    .job-type-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        background: var(--accent);
        color: #fff;
        border-radius: var(--r-pill);
        padding: 3px 10px;
        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: capitalize;
    }

    .job-card-body {
        padding: 18px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .job-company-row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }

    .company-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid var(--border-h);
        flex-shrink: 0;
    }

    .company-name {
        font-size: 0.78rem;
        color: var(--text-3);
    }

    .job-title {
        font-family: var(--font-head);
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--text-1);
        margin-bottom: 10px;
        line-height: 1.3;
    }

    .job-title a {
        color: inherit;
        text-decoration: none;
    }

    .job-title a:hover {
        color: var(--accent);
    }

    .job-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 14px;
    }

    .job-meta-item {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.75rem;
        color: var(--text-3);
    }

    .job-meta-item i {
        color: var(--accent);
        font-size: 0.8rem;
    }

    .job-card-footer {
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid var(--border);
        padding-top: 12px;
    }

    .job-salary {
        font-family: var(--font-head);
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--accent);
    }

    .btn-view-job {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: var(--bg-glass2);
        border: 1px solid var(--border-h);
        color: var(--accent);
        border-radius: var(--r-pill);
        padding: 6px 14px;
        font-size: 0.75rem;
        font-weight: 600;
        text-decoration: none;
        transition: background .2s, color .2s;
    }

    .btn-view-job:hover {
        background: var(--accent);
        color: #fff;
        border-color: var(--accent);
    }

    /* ── RESULTS HEADER ── */
    .results-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 14px;
        margin-bottom: 24px;
        padding-bottom: 18px;
        border-bottom: 1px solid var(--border);
    }

    .results-count {
        font-family: var(--font-head);
        font-size: 1rem;
        font-weight: 700;
        color: var(--text-1);
    }

    .results-count span {
        color: var(--accent);
    }

    .sort-select {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--r-pill);
        color: var(--text-2);
        padding: 8px 16px;
        font-size: 0.8rem;
        font-family: var(--font-body);
        outline: none;
        cursor: pointer;
    }

    .sort-select:focus {
        border-color: var(--border-h);
    }

    /* ── PAGINATION ── */
    .fc-pagination {
        display: flex;
        justify-content: center;
        margin-top: 36px;
    }

    .fc-pagination nav {
        width: 100%;
    }

    .fc-pagination .pagination {
        display: flex;
        gap: 6px;
        list-style: none;
        padding: 0;
        margin: 0;
        justify-content: center;
        flex-wrap: wrap;
    }

    .fc-pagination .page-item .page-link {
        background: var(--bg-card);
        border: 1px solid var(--border);
        color: var(--text-2);
        border-radius: var(--r-sm);
        padding: 8px 14px;
        font-size: 0.82rem;
        text-decoration: none;
        transition: border-color .2s, color .2s, background .2s;
    }

    .fc-pagination .page-item.active .page-link,
    .fc-pagination .page-item .page-link:hover {
        background: var(--bg-glass2);
        border-color: var(--border-h);
        color: var(--accent);
    }

    /* ── MOBILE FILTER ── */
    .mobile-filter-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--r-pill);
        padding: 10px 20px;
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--text-2);
        cursor: pointer;
        font-family: var(--font-body);
        transition: border-color .2s, color .2s;
    }

    .mobile-filter-btn:hover {
        border-color: var(--border-h);
        color: var(--accent);
    }

    .mobile-filter-btn i {
        color: var(--accent);
    }

    /* Mobile Filter Drawer */
    .filter-offcanvas {
        --bs-offcanvas-bg: var(--bg-card);
        --bs-offcanvas-color: var(--text-1);
    }

    .filter-offcanvas .offcanvas-header {
        border-bottom: 1px solid var(--border);
    }

    .filter-offcanvas .offcanvas-title {
        font-family: var(--font-head);
        font-weight: 700;
    }

    .filter-offcanvas .btn-close {
        filter: invert(1) brightness(0.6);
    }

    /* ── MOBILE JOB CARD (carousel fallback) ── */
    .mobile-job-card {
        padding: 0 4px 24px;
    }

    /* ══════════════════════════════════════
   CTA BAND
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
   MODAL
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
        --bg-card: #ffffff;
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

    /* Buttons keep white text on the green accent already — fine as-is */

    /* Hero grid lines need a darker tint on light bg to stay visible */
    [data-h-theme="light"] .jobs-hero-grid {
        background-image:
            linear-gradient(rgba(0, 100, 60, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 100, 60, 0.05) 1px, transparent 1px);
    }

    /* Bootstrap modal close icon: dark theme inverts it to look light;
       on light theme we want it dark again */
    [data-h-theme="light"] .fc-modal .btn-close {
        filter: none;
    }

    /* Job type badge / thumb overlay already uses --accent, fine */

    /* Company avatar border uses --border-h, fine automatically */

    /* Select dropdown arrow / native control colors */
    [data-h-theme="light"] .sort-select {
        color-scheme: light;
    }

    /* Pagination + form controls inherit vars already, but Bootstrap's
       .page-link / .form-control base styles can leak dark defaults —
       these two are the ones this page overrides manually with inline
       vars already, so no changes needed there. */
</style>

{{-- ════════════════════════════════════
     HERO
════════════════════════════════════ --}}
<section class="jobs-hero">
    <div class="jobs-hero-grid"></div>
    <div class="jobs-hero-glow"></div>
    <div class="container jobs-hero-inner">
        <div class="row align-items-center">
            <div class="col-lg-8">
                <span class="eyebrow">Works & Opportunities</span>
                <h1>Explore <span>{{ $jobs->total() }}+</span> Available Works</h1>
                <p>Discover full-time, part-time and remote job opportunities tailored for your skills. Every role is posted by verified companies.</p>
                <div class="hero-pills">
                    <div class="hero-pill"><i class="ti ti-map-pin"></i><strong>Remote</strong> &amp; On-site</div>
                    <div class="hero-pill"><i class="ti ti-briefcase"></i>Full-time, Part-time &amp; Freelance</div>
                    <div class="hero-pill"><i class="ti ti-shield-check"></i>Verified Listings</div>
                </div>
                <div style="display:flex; gap:12px; flex-wrap:wrap;">
                    <a href="#jobs-list" class="btn-fc-primary">Browse Jobs <i class="ti ti-arrow-down"></i></a>
                    <a role="button" data-bs-toggle="modal" data-bs-target="#postJobModal" class="btn-fc-outline">
                        <i class="ti ti-plus"></i> Post a work
                    </a>
                </div>
            </div>
        </div>

        {{-- 3-column mini cards --}}
        <div class="hero-feature-row">
            <div class="hero-feature-item">
                <div class="fi-icon"><i class="ti ti-search"></i></div>
                <h5>Find Work Today</h5>
                <p>Thousands of people browse our marketplace daily. Don't miss out on matching opportunities.</p>
                <a href="#jobs-list" class="strip-link">Browse Jobs <i class="ti ti-arrow-right"></i></a>
            </div>
            <div class="hero-feature-item">
                <div class="fi-icon"><i class="ti ti-bolt"></i></div>
                <h5>Unlock New Opportunities</h5>
                <p>Tailored job listings, collaboration projects, and freelance works matched to your profile.</p>
                <a href="#jobs-list" class="strip-link">Start Exploring <i class="ti ti-arrow-right"></i></a>
            </div>
            <div class="hero-feature-item">
                <div class="fi-icon"><i class="ti ti-coin"></i></div>
                <h5>Ways to Earn</h5>
                <p>Learn how to earn through the Future Connect platform with verified payment protection.</p>
                <a role="button" data-bs-toggle="modal" data-bs-target="#postJobModal" class="strip-link">Get Started <i class="ti ti-arrow-right"></i></a>
            </div>
        </div>
    </div>
</section>

{{-- ════════════════════════════════════
     CATEGORIES SCROLL BAR
════════════════════════════════════ --}}
<div class="cats-bar">
    <div class="container">
        <div class="cats-scroll">
            <a href="{{ route('user.jobs.index') }}"
                class="cat-chip {{ !request('category') ? 'active' : '' }}">
                All <span class="count">{{ $jobs->total() }}</span>
            </a>
            @foreach($categories as $cat)
            <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['category' => $cat->id])) }}"
                class="cat-chip {{ request('category') == $cat->id ? 'active' : '' }}">
                {{ $cat->name }}
                <span class="count">{{ $cat->job_sections_count ?? 0 }}</span>
            </a>
            @endforeach
        </div>
    </div>
</div>

{{-- ════════════════════════════════════
     MAIN CONTENT
════════════════════════════════════ --}}
<div class="jobs-main" id="jobs-list">
    <div class="container">
        <div class="row g-4">

            {{-- ── SIDEBAR (desktop) ── --}}
            <div class="col-lg-3 d-none d-lg-block">
                <div class="jobs-sidebar">
                    <div class="sidebar-title-row">
                        <h4><i class="ti ti-adjustments-horizontal me-2" style="color:var(--accent)"></i>Filters</h4>
                        <a href="{{ route('user.jobs.index') }}" class="reset-link">
                            <i class="ti ti-refresh"></i> Reset
                        </a>
                    </div>

                    {{-- Categories --}}
                    <div class="filter-group">
                        <span class="filter-group-label">Categories</span>
                        <ul class="filter-list">
                            @foreach($categories as $cat)
                            <li>
                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['category' => $cat->id])) }}"
                                    class="{{ request('category') == $cat->id ? 'active' : '' }}">
                                    {{ $cat->name }}
                                    <span class="fcount">{{ $cat->job_sections_count ?? 0 }}</span>
                                </a>
                            </li>
                            @endforeach
                        </ul>
                    </div>

                    <div class="filter-divider"></div>

                    {{-- Locations --}}
                    <div class="filter-group">
                        <span class="filter-group-label">Location</span>
                        <ul class="filter-list">
                            @foreach($locations as $loc)
                            <li>
                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['location' => $loc])) }}"
                                    class="{{ request('location') == $loc ? 'active' : '' }}">
                                    <span><i class="ti ti-map-pin me-1" style="font-size:0.75rem;color:var(--accent)"></i>{{ $loc }}</span>
                                </a>
                            </li>
                            @endforeach
                        </ul>
                    </div>

                    <div class="filter-divider"></div>

                    {{-- Salary --}}
                    <div class="filter-group" style="margin-bottom:0;">
                        <span class="filter-group-label">Salary Range</span>
                        <ul class="filter-list">
                            @foreach($salary as $b)
                            <li>
                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['salary' => $b])) }}"
                                    class="{{ request('salary') == $b ? 'active' : '' }}">
                                    <span><i class="ti ti-coin me-1" style="font-size:0.75rem;color:var(--accent)"></i>{{ $b }}</span>
                                </a>
                            </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>

            {{-- ── JOBS CONTENT ── --}}
            <div class="col-lg-9">

                {{-- Results header --}}
                <div class="results-header">
                    <div class="results-count">
                        <span>{{ $jobs->total() }}</span> Jobs Found
                        @if(request('category') || request('location') || request('salary'))
                        <span style="font-size:0.75rem; color:var(--text-3); font-weight:400; margin-left:10px;">
                            (filtered)
                            <a href="{{ route('user.jobs.index') }}" style="color:var(--accent); text-decoration:none; margin-left:4px;">
                                <i class="ti ti-x"></i> Clear
                            </a>
                        </span>
                        @endif
                    </div>
                    <div style="display:flex; align-items:center; gap:12px;">
                        {{-- Mobile filter trigger --}}
                        <button class="mobile-filter-btn d-lg-none"
                            data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas">
                            <i class="ti ti-adjustments-horizontal"></i> Filters
                        </button>
                        <select class="sort-select" onchange="window.location=this.value">
                            <option value="{{ route('user.jobs.index', request()->all()) }}">Sort: Latest</option>
                            <option value="{{ route('user.jobs.index', array_merge(request()->all(), ['sort'=>'salary'])) }}" {{ request('sort')=='salary'?'selected':'' }}>Sort: Salary</option>
                        </select>
                    </div>
                </div>

                {{-- Desktop Grid --}}
                <div class="jobs-grid d-none d-md-grid">
                    @forelse($jobs as $job)
                    <div class="job-card">
                        <div class="job-card-thumb">
                            <img src="assets/img/blog/blog-01.jpg" alt="{{ $job->title }}">
                            @if($job->type)
                            <span class="job-type-badge">{{ $job->type }}</span>
                            @endif
                        </div>
                        <div class="job-card-body">
                            <div class="job-company-row">
                                <img src="assets/img/user/user-01.jpg" class="company-avatar" alt="">
                                <span class="company-name">{{ $job->company->name ?? 'Company' }}</span>
                            </div>
                            <h3 class="job-title">
                                <a href="{{ route('user.jobs.show', $job->id) }}">{{ $job->title }}</a>
                            </h3>
                            <div class="job-meta">
                                <span class="job-meta-item">
                                    <i class="ti ti-map-pin"></i> {{ $job->location ?? 'Remote' }}
                                </span>
                                @if($job->experience_level)
                                <span class="job-meta-item">
                                    <i class="ti ti-chart-bar"></i> {{ ucfirst($job->experience_level) }}
                                </span>
                                @endif
                            </div>
                            <div class="job-card-footer">
                                <span class="job-salary">{{ $job->salary_range }}</span>
                                <a href="{{ route('user.jobs.show', $job->id) }}" class="btn-view-job">
                                    View <i class="ti ti-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    @empty
                    <div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-3);">
                        <i class="ti ti-briefcase-off" style="font-size:2.5rem; display:block; margin-bottom:12px;"></i>
                        No jobs found matching your filters.
                        <br><a href="{{ route('user.jobs.index') }}" style="color:var(--accent); font-size:0.85rem;">Clear filters</a>
                    </div>
                    @endforelse
                </div>

                {{-- Mobile: card stack --}}
                <div class="d-md-none">
                    @forelse($jobs as $job)
                    <div class="job-card mobile-job-card">
                        <div class="job-card-body" style="padding:20px;">
                            <div class="job-company-row">
                                <img src="assets/img/user/user-01.jpg" class="company-avatar" alt="">
                                <span class="company-name">{{ $job->company->name ?? 'Company' }}</span>
                                @if($job->type)
                                <span class="fc-badge" style="margin-left:auto; font-size:0.65rem; padding:2px 10px;">{{ $job->type }}</span>
                                @endif
                            </div>
                            <h3 class="job-title"><a href="{{ route('user.jobs.show', $job->id) }}">{{ $job->title }}</a></h3>
                            <div class="job-meta">
                                <span class="job-meta-item"><i class="ti ti-map-pin"></i> {{ $job->location ?? 'Remote' }}</span>
                            </div>
                            <div class="job-card-footer">
                                <span class="job-salary">{{ $job->salary_range }}</span>
                                <a href="{{ route('user.jobs.show', $job->id) }}" class="btn-view-job">View <i class="ti ti-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    @empty
                    <p style="text-align:center; color:var(--text-3); padding:40px;">No jobs found.</p>
                    @endforelse
                </div>

                {{-- Pagination --}}
                <div class="fc-pagination">
                    {{ $jobs->links() }}
                </div>
            </div>
        </div>
    </div>
</div>

{{-- ════════════════════════════════════
     MOBILE FILTER OFFCANVAS
════════════════════════════════════ --}}
<div class="offcanvas offcanvas-start filter-offcanvas" tabindex="-1" id="filterOffcanvas">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title">
            <i class="ti ti-adjustments-horizontal me-2" style="color:var(--accent)"></i>Filters
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <div class="sidebar-title-row" style="margin-bottom:16px;">
            <span style="font-size:0.78rem; color:var(--text-3);">{{ $jobs->total() }} results</span>
            <a href="{{ route('user.jobs.index') }}" class="reset-link"><i class="ti ti-refresh"></i> Reset All</a>
        </div>

        <div class="filter-group">
            <span class="filter-group-label">Categories</span>
            <ul class="filter-list">
                @foreach($categories as $cat)
                <li>
                    <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['category' => $cat->id])) }}"
                        class="{{ request('category') == $cat->id ? 'active' : '' }}" data-bs-dismiss="offcanvas">
                        {{ $cat->name }} <span class="fcount">{{ $cat->job_sections_count ?? 0 }}</span>
                    </a>
                </li>
                @endforeach
            </ul>
        </div>
        <div class="filter-divider"></div>
        <div class="filter-group">
            <span class="filter-group-label">Location</span>
            <ul class="filter-list">
                @foreach($locations as $loc)
                <li>
                    <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['location' => $loc])) }}"
                        class="{{ request('location') == $loc ? 'active' : '' }}" data-bs-dismiss="offcanvas">
                        <i class="ti ti-map-pin me-1" style="color:var(--accent)"></i>{{ $loc }}
                    </a>
                </li>
                @endforeach
            </ul>
        </div>
        <div class="filter-divider"></div>
        <div class="filter-group">
            <span class="filter-group-label">Salary Range</span>
            <ul class="filter-list">
                @foreach($salary as $b)
                <li>
                    <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['salary' => $b])) }}"
                        class="{{ request('salary') == $b ? 'active' : '' }}" data-bs-dismiss="offcanvas">
                        <i class="ti ti-coin me-1" style="color:var(--accent)"></i>{{ $b }}
                    </a>
                </li>
                @endforeach
            </ul>
        </div>
    </div>
</div>

{{-- ════════════════════════════════════
     CTA BAND
════════════════════════════════════ --}}
<div class="container">
    <div class="jobs-cta">
        <div class="jobs-cta-glow"></div>
        <div class="jobs-cta-content">
            <span class="eyebrow">Post Your work</span>
            <h3>Showcase Your Skills & Find Work Today!</h3>
            <p>Post your work in minutes and reach thousands of potential clients. Verified listings get more visibility and faster responses. Takes less than 5 minutes.</p>
        </div>
        <div class="jobs-cta-actions">
            <a role="button" data-bs-toggle="modal" data-bs-target="#postJobModal" class="btn-fc-primary">
                <i class="ti ti-plus"></i> Post Your work
            </a>
            <a href="{{ route('user.talents') }}" class="btn-fc-outline">Browse Skills</a>
        </div>
    </div>
</div>



@endsection