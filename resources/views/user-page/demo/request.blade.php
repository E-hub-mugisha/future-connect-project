{{-- resources/views/demo/request.blade.php --}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Request a Demo — Future Connect</title>

  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">

 
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
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
      /* Kept in sync by JS with the fixed header stack's real height, so the
         two-column layout below never sits underneath it. */
      --dr-header-h: 0px;
    }

    /* ── LIGHT THEME OVERRIDES ──
       Driven by the same [data-h-theme="light"] attribute the header's
       theme toggle sets on <html>. */
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

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      background: var(--bg);
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      color: var(--text);
    }

    .dr-page {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    /* ── LEFT PANEL ── */
    .dr-left {
      border-right: 1px solid var(--border);
      padding: 60px 52px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: sticky;
      top: var(--dr-header-h);
      /* height: calc(100vh - var(--dr-header-h)); */
      overflow-y: auto;
    }

    .dr-logo-lockup {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    .dr-logo-mark {
      width: 36px;
      height: 36px;
      background: var(--green);
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .dr-logo-mark svg {
      width: 18px;
      height: 18px;
      fill: #fff;
    }

    .dr-logo-wordmark {
      font-size: 15px;
      font-weight: 700;
      color: var(--text);
      letter-spacing: .3px;
      line-height: 1.2;
      margin: 0;
    }

    .dr-logo-tagline {
      font-size: 11px;
      color: var(--muted2);
      letter-spacing: .3px;
      margin: 0;
      line-height: 1;
    }

    .dr-left-body {
      position: relative;
      z-index: 1;
    }

    .dr-badge {
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
    }

    .dr-badge::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--green);
      animation: drPulse 2s infinite;
    }

    @keyframes drPulse {

      0%,
      100% {
        opacity: 1;
        transform: scale(1);
      }

      50% {
        opacity: .4;
        transform: scale(.7);
      }
    }

    .dr-left-body h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 2.4rem;
      font-weight: 800;
      color: var(--text);
      line-height: 1.15;
      letter-spacing: -0.5px;
      margin: 0 0 16px;
    }

    .dr-left-body h1 span {
      color: var(--green);
    }

    .dr-left-body>p {
      font-size: 14.5px;
      color: var(--muted);
      line-height: 1.8;
      margin: 0 0 34px;
      max-width: 380px;
    }

    .dr-features {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .dr-feature {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    .dr-feature-icon {
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

    .dr-feature-text strong {
      display: block;
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text);
      margin-bottom: 2px;
    }

    .dr-feature-text span {
      font-size: 12px;
      color: var(--muted);
      line-height: 1.55;
    }

    .dr-stats {
      display: flex;
      gap: 28px;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
      padding-top: 26px;
      border-top: 1px solid var(--border);
    }

    .dr-stat-num {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.45rem;
      font-weight: 800;
      color: var(--green);
      line-height: 1;
      margin-bottom: 4px;
    }

    .dr-stat-label {
      font-size: 11.5px;
      color: var(--muted);
    }

    /* ── RIGHT PANEL ── */
    .dr-right {
      background: var(--bg);
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .dr-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px 52px 0;
      flex-shrink: 0;
    }

    .dr-home-btn {
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
    }

    .dr-home-btn svg {
      width: 15px;
      height: 15px;
      stroke: var(--muted);
      transition: stroke 0.2s ease, transform 0.2s ease;
      flex-shrink: 0;
    }

    .dr-home-btn:hover {
      color: var(--green);
      border-color: var(--border-h);
      background: var(--green-dim);
    }

    .dr-home-btn:hover svg {
      stroke: var(--green);
      transform: translateX(-2px);
    }

    .dr-login-hint {
      font-size: 12.5px;
      color: var(--muted);
    }

    .dr-login-hint a {
      color: var(--green);
      text-decoration: none;
      font-weight: 500;
    }

    .dr-login-hint a:hover {
      text-decoration: underline;
    }

    .dr-right-body {
      padding: 28px 52px 56px;
      flex: 1;
    }

    .dr-right-head {
      margin-bottom: 24px;
    }

    .dr-right-head h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text);
      margin: 0 0 6px;
    }

    .dr-right-head p {
      font-size: 13px;
      color: var(--muted);
      margin: 0;
    }

    /* ── PANEL ── */
    .dr-panel {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 32px;
      position: relative;
      overflow: hidden;
    }

    .dr-panel::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--green), transparent);
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }

    /* ── ALERTS ── */
    .dr-alert-success {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: var(--green-dim);
      border: 1px solid var(--border-h);
      border-radius: var(--radius);
      padding: 14px 16px;
      margin-bottom: 22px;
    }

    .dr-alert-success-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(0, 166, 103, 0.18);
      border: 1px solid var(--border-h);
      color: var(--green);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 15px;
    }

    .dr-alert-success-body strong {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--green);
      margin-bottom: 3px;
    }

    .dr-alert-success-body p {
      margin: 0;
      font-size: 12.5px;
      color: var(--muted);
      line-height: 1.6;
    }

    .dr-error-banner {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: var(--red-dim);
      border: 1px solid var(--red-border);
      border-radius: var(--radius);
      padding: 14px 16px;
      margin-bottom: 22px;
    }

    .dr-error-banner-icon {
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

    .dr-error-banner-body strong {
      display: block;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--red);
      margin-bottom: 5px;
    }

    .dr-error-banner-body ul {
      margin: 0;
      padding-left: 16px;
      list-style: disc;
    }

    .dr-error-banner-body ul li {
      font-size: 12px;
      color: var(--red);
      line-height: 1.6;
      opacity: .85;
    }

    /* ── FIELDS ── */
    .dr-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 14px;
    }

    .dr-row.single {
      grid-template-columns: 1fr;
    }

    .dr-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .dr-field label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      font-weight: 500;
      color: var(--muted);
      letter-spacing: 0.6px;
      text-transform: uppercase;
    }

    .dr-field-error-tag {
      font-size: 9.5px;
      font-weight: 500;
      color: var(--red);
      text-transform: none;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .dr-field-error-tag::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--red);
      flex-shrink: 0;
    }

    .dr-field input,
    .dr-field select,
    .dr-field textarea {
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

    .dr-field input::placeholder,
    .dr-field textarea::placeholder {
      color: var(--muted2);
    }

    .dr-field input:focus,
    .dr-field select:focus,
    .dr-field textarea:focus {
      border-color: var(--green);
      background: rgba(0, 166, 103, 0.06);
      box-shadow: 0 0 0 3px rgba(0, 166, 103, 0.08);
    }

    .dr-field.has-error input,
    .dr-field.has-error select,
    .dr-field.has-error textarea {
      border-color: var(--red-border);
      background: var(--red-dim);
      box-shadow: 0 0 0 3px rgba(240, 112, 112, 0.08);
    }

    .dr-field select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 16px;
      padding-right: 36px;
      cursor: pointer;
    }

    .dr-field select option {
      background: var(--surface2);
      color: var(--text);
    }

    .dr-field textarea {
      resize: vertical;
      min-height: 96px;
    }

    /* ── ACTIONS ── */
    .dr-actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 24px;
      padding-top: 22px;
      border-top: 1px solid var(--border);
    }

    .dr-btn-submit {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: var(--green);
      color: #0a1f14;
      font-family: 'Montserrat', sans-serif;
      font-size: 13.5px;
      font-weight: 700;
      border: none;
      border-radius: var(--radius);
      padding: 13px 28px;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .dr-btn-submit:hover {
      background: #62eaaa;
      transform: translateY(-1px);
    }

    .dr-note {
      font-size: 11.5px;
      color: var(--muted2);
      margin-top: 14px;
      line-height: 1.6;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 960px) {
      .dr-page {
        grid-template-columns: 1fr;
      }

      .dr-left {
        position: static;
        height: auto;
        padding: 44px 28px 40px;
      }

      .dr-topbar {
        padding: 22px 24px 0;
      }

      .dr-right-body {
        padding: 24px 24px 56px;
      }
    }

    @media (max-width: 520px) {
      .dr-left {
        padding: 36px 18px 32px;
      }

      .dr-topbar {
        padding: 18px 14px 0;
      }

      .dr-right-body {
        padding: 18px 14px 48px;
      }

      .dr-left-body h1 {
        font-size: 1.9rem;
      }

      .dr-panel {
        padding: 20px 14px;
      }

      .dr-row {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>

  @php
  $categories = \App\Models\Category::inRandomOrder()->take(3)->get();

  if (!function_exists('isActiveRoute')) {
  function isActiveRoute($route) {
  return request()->routeIs($route) ? 'active' : '';
  }
  }
  @endphp

  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

  <style>
    :root {
      --h-bg: #0e1618;
      --h-surface: #141d20;
      --h-surface2: #1a2428;
      --h-green: #48d597;
      --h-green-d: rgba(0, 166, 103, 0.14);
      --h-green-b: rgba(0, 166, 103, 0.22);
      --h-text: #e8f0ed;
      --h-muted: #7a9a8e;
      --h-border: rgba(0, 166, 103, 0.16);
      --h-border-h: rgba(0, 166, 103, 0.38);
      --h-radius: 10px;
    }

    .fc-header *,
    .fc-header *::before,
    .fc-header *::after {
      box-sizing: border-box;
    }

    .fc-header a {
      text-decoration: none;
    }

    /* ══════════════════════════════════════
   FIXED WRAPPER (topbar + header pinned together)
══════════════════════════════════════ */
    .fc-header-fixed-wrap {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    }

    /* ══════════════════════════════════════
   TOP INFO BAR
══════════════════════════════════════ */
    .fc-topbar {
      background: #080f11;
      border-bottom: 1px solid rgba(0, 166, 103, 0.1);
      padding: 6px 0;
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      color: var(--h-muted);
      max-height: 40px;
      overflow: hidden;
      opacity: 1;
      transition: max-height 0.32s ease, opacity 0.22s ease, padding 0.32s ease, border-color 0.32s ease;
    }

    .fc-topbar.fc-hide {
      max-height: 0;
      opacity: 0;
      padding-top: 0;
      padding-bottom: 0;
      border-bottom-color: transparent;
      pointer-events: none;
    }

    .fc-topbar .fc-tb-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .fc-topbar .fc-tb-contact {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .fc-topbar .fc-tb-contact span {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .fc-topbar .fc-tb-contact span::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--h-green);
    }

    .fc-topbar .fc-tb-social {
      display: flex;
      gap: 12px;
    }

    .fc-topbar .fc-tb-social a {
      color: var(--h-muted);
      font-size: 13px;
      transition: color 0.2s;
    }

    .fc-topbar .fc-tb-social a:hover {
      color: var(--h-green);
    }

    /* ══════════════════════════════════════
   MAIN HEADER
══════════════════════════════════════ */
    .fc-header {
      background: var(--h-bg);
      border-bottom: 1px solid var(--h-border);
      transition: box-shadow 0.3s, background 0.3s;
    }

    .fc-header.scrolled {
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
      background: rgba(14, 22, 24, 0.97);
      backdrop-filter: blur(12px);
    }

    .fc-header-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 32px;
      height: 66px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 100px;
      font-family: 'DM Sans', sans-serif;
    }

    .fc-header-spacer {
      width: 100%;
    }

    .fc-logo-wrap {
      display: flex;
      align-items: center;
      gap: 9px;
      flex-shrink: 0;
      text-decoration: none;
      justify-self: start;
    }

    .fc-logo-mark {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--h-green);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 13px;
      color: #fff;
    }

    .fc-logo-mark svg {
      width: 16px;
      height: 16px;
      fill: #fff;
    }

    .fc-logo-name {
      font-family: 'Syne', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      line-height: 1.15;
      white-space: nowrap;
    }

    .fc-logo-name span {
      color: var(--h-green);
    }

    .fc-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .fc-nav>li {
      position: relative;
    }

    .fc-nav>li>a {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 11px;
      font-size: 13.5px;
      font-weight: 400;
      color: var(--h-muted);
      border-radius: 7px;
      transition: color 0.2s, background 0.2s;
      white-space: nowrap;
      cursor: pointer;
    }

    .fc-nav>li>a:hover,
    .fc-nav>li:hover>a {
      color: #fff;
      background: rgba(255, 255, 255, 0.05);
    }

    .fc-nav>li>a .chevron {
      font-size: 10px;
      margin-top: 1px;
      transition: transform 0.2s;
      opacity: 0.6;
    }

    .fc-nav>li:hover>a .chevron {
      transform: rotate(180deg);
      opacity: 1;
    }

    .fc-mega {
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%) translateY(6px);
      background: var(--h-surface);
      border: 1px solid var(--h-border);
      border-radius: 16px;
      padding: 14px;
      width: 460px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.22s ease, visibility 0.22s ease, transform 0.22s ease;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      z-index: 100;
    }

    .fc-nav>li:hover .fc-mega {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }

    .fc-mega a.fc-card {
      display: block;
      padding: 12px 14px;
      border-radius: 10px;
      transition: background 0.18s;
    }

    .fc-mega a.fc-card:hover {
      background: var(--h-green-d);
    }

    .fc-mega a.fc-card .fc-card-title {
      font-family: 'Syne', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: var(--h-text);
      margin: 0 0 3px;
      line-height: 1.3;
    }

    .fc-mega a.fc-card:hover .fc-card-title {
      color: #fff;
    }

    .fc-mega a.fc-card .fc-card-desc {
      font-size: 11.5px;
      color: var(--h-muted);
      margin: 0;
      line-height: 1.4;
    }

    .fc-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      justify-self: end;
    }

    .fc-btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border: 1px solid var(--h-border);
      border-radius: 8px;
      font-family: 'DM Sans', sans-serif;
      font-size: 13px;
      font-weight: 400;
      color: var(--h-muted);
      background: transparent;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .fc-btn-ghost:hover {
      color: #fff;
      border-color: var(--h-border-h);
      background: rgba(255, 255, 255, 0.04);
    }

    .fc-btn-green {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 18px;
      background: var(--h-green);
      border: 1px solid var(--h-green);
      border-radius: 8px;
      font-family: 'Syne', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .fc-btn-green:hover {
      background: #00c07a;
      border-color: #00c07a;
      transform: translateY(-1px);
    }

    .fc-btn-search {
      width: 38px;
      height: 38px;
      border: 1px solid var(--h-border);
      border-radius: 8px;
      background: transparent;
      color: var(--h-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 15px;
      flex-shrink: 0;
    }

    .fc-btn-search:hover {
      color: #fff;
      border-color: var(--h-border-h);
      background: rgba(255, 255, 255, 0.04);
    }

    .fc-btn-register-mobile {
      width: 38px;
      height: 38px;
      background: var(--h-green);
      border: none;
      border-radius: 8px;
      color: #fff;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      text-decoration: none;
      flex-shrink: 0;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s;
    }

    .fc-btn-register-mobile:hover {
      background: #00c07a;
      transform: translateY(-1px);
    }

    .fc-login-wrap {
      position: relative;
    }

    .fc-login-panel {
      position: absolute;
      top: calc(100% + 12px);
      right: 0;
      width: 360px;
      background: var(--h-surface);
      border: 1px solid var(--h-border);
      border-radius: 18px;
      padding: 28px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(8px) scale(0.98);
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
      z-index: 200;
      overflow: hidden;
    }

    .fc-login-panel::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--h-green), transparent);
      border-radius: 18px 18px 0 0;
    }

    .fc-login-panel.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }

    .fc-lp-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 22px;
    }

    .fc-lp-head-left h4 {
      font-family: 'Syne', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: #fff;
      margin: 0 0 3px;
    }

    .fc-lp-head-left p {
      font-size: 12px;
      color: var(--h-muted);
      margin: 0;
    }

    .fc-lp-close {
      width: 30px;
      height: 30px;
      border-radius: 7px;
      background: var(--h-surface2);
      border: 1px solid var(--h-border);
      color: var(--h-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    .fc-lp-close:hover {
      color: #fff;
      border-color: var(--h-border-h);
    }

    .fc-lp-field {
      margin-bottom: 14px;
    }

    .fc-lp-field label {
      display: block;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      color: var(--h-muted);
      margin-bottom: 6px;
    }

    .fc-lp-input-wrap {
      position: relative;
    }

    .fc-lp-input-wrap .fc-lp-icon {
      position: absolute;
      left: 13px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--h-muted);
      font-size: 14px;
      pointer-events: none;
    }

    .fc-lp-field input {
      width: 100%;
      background: var(--h-surface2);
      border: 1px solid var(--h-border);
      border-radius: var(--h-radius);
      color: var(--h-text);
      font-family: 'DM Sans', sans-serif;
      font-size: 13.5px;
      padding: 11px 14px 11px 38px;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }

    .fc-lp-field input::placeholder {
      color: #3d5a52;
    }

    .fc-lp-field input:focus {
      border-color: var(--h-green);
      background: rgba(0, 166, 103, 0.06);
    }

    .fc-lp-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
    }

    .fc-lp-remember {
      display: flex;
      align-items: center;
      gap: 7px;
      cursor: pointer;
    }

    .fc-lp-remember input {
      accent-color: var(--h-green);
      cursor: pointer;
    }

    .fc-lp-remember span {
      font-size: 12px;
      color: var(--h-muted);
    }

    .fc-lp-forgot {
      font-size: 12px;
      color: var(--h-green);
      font-weight: 500;
    }

    .fc-lp-forgot:hover {
      text-decoration: underline;
    }

    .fc-lp-submit {
      width: 100%;
      padding: 12px;
      background: var(--h-green);
      border: none;
      border-radius: var(--h-radius);
      font-family: 'Syne', sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s;
      letter-spacing: 0.2px;
    }

    .fc-lp-submit:hover {
      background: #00c07a;
      transform: translateY(-1px);
    }

    .fc-lp-footer {
      text-align: center;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid var(--h-border);
      font-size: 12.5px;
      color: var(--h-muted);
    }

    .fc-lp-footer a {
      color: var(--h-green);
      font-weight: 500;
    }

    .fc-lp-footer a:hover {
      text-decoration: underline;
    }

    .fc-hamburger {
      display: none;
      width: 38px;
      height: 38px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 8px;
      border: 1px solid var(--h-border);
      background: transparent;
      color: var(--h-muted);
      font-size: 22px;
      flex-shrink: 0;
      transition: color 0.2s, border-color 0.2s, background 0.2s;
    }

    .fc-hamburger:hover {
      color: #fff;
      border-color: var(--h-border-h);
      background: rgba(255, 255, 255, 0.04);
    }

    .fc-drawer {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 1050;
      pointer-events: none;
    }

    .fc-drawer.open {
      pointer-events: auto;
    }

    .fc-drawer-bg {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .fc-drawer.open .fc-drawer-bg {
      opacity: 1;
    }

    .fc-drawer-panel {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 300px;
      background: var(--h-surface);
      border-right: 1px solid var(--h-border);
      padding: 24px 20px;
      transform: translateX(-100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow-y: auto;
    }

    .fc-drawer.open .fc-drawer-panel {
      transform: translateX(0);
    }

    .fc-drawer-logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--h-border);
    }

    .fc-drawer-close {
      width: 30px;
      height: 30px;
      border-radius: 7px;
      background: var(--h-surface2);
      border: 1px solid var(--h-border);
      color: var(--h-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s;
    }

    .fc-drawer-close:hover {
      color: #fff;
    }

    .fc-drawer-nav {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .fc-drawer-nav>li>a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      font-size: 14px;
      color: var(--h-muted);
      border-radius: 8px;
      transition: color 0.18s, background 0.18s;
    }

    .fc-drawer-nav>li>a:hover {
      color: #fff;
      background: var(--h-green-d);
    }

    .fc-drawer-nav>li>a .chevron {
      font-size: 10px;
      opacity: 0.6;
      transition: transform 0.2s;
    }

    .fc-drawer-nav>li>a.sub-open .chevron {
      transform: rotate(180deg);
      opacity: 1;
    }

    .fc-drawer-sub {
      list-style: none;
      margin: 0;
      padding: 0 0 4px 12px;
      display: none;
    }

    .fc-drawer-sub.open {
      display: block;
    }

    .fc-drawer-sub li a {
      display: block;
      padding: 7px 12px;
      font-size: 13px;
      color: var(--h-muted);
      border-radius: 7px;
      transition: color 0.18s, background 0.18s;
    }

    .fc-drawer-sub li a:hover {
      color: #fff;
      background: var(--h-green-d);
    }

    .fc-drawer-sub-label {
      padding: 8px 12px 2px;
      font-size: 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--h-green);
      opacity: 0.7;
    }

    .fc-drawer-ctas {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid var(--h-border);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .fc-drawer-ctas .fc-btn-ghost,
    .fc-drawer-ctas .fc-btn-green {
      width: 100%;
      justify-content: center;
    }

    .fc-search-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(8px);
      z-index: 1100;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s;
    }

    .fc-search-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .fc-search-box {
      width: 100%;
      max-width: 640px;
      padding: 0 24px;
    }

    .fc-search-box p {
      text-align: center;
      font-size: 13px;
      color: var(--h-muted);
      margin: 0 0 20px;
      font-family: 'DM Sans', sans-serif;
    }

    .fc-search-input-wrap {
      position: relative;
    }

    .fc-search-input-wrap input {
      width: 100%;
      background: var(--h-surface);
      border: 1px solid var(--h-border-h);
      border-radius: 14px;
      color: var(--h-text);
      font-family: 'DM Sans', sans-serif;
      font-size: 18px;
      padding: 18px 60px 18px 24px;
      outline: none;
      transition: border-color 0.2s;
    }

    .fc-search-input-wrap input::placeholder {
      color: #3d5a52;
    }

    .fc-search-input-wrap input:focus {
      border-color: var(--h-green);
    }

    .fc-search-submit {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: var(--h-green);
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

    .fc-search-submit:hover {
      background: #00c07a;
    }

    .fc-search-close {
      position: absolute;
      top: 24px;
      right: 24px;
      width: 36px;
      height: 36px;
      border-radius: 9px;
      background: var(--h-surface);
      border: 1px solid var(--h-border);
      color: var(--h-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      transition: all 0.2s;
    }

    .fc-search-close:hover {
      color: #fff;
      border-color: var(--h-border-h);
    }

    @media (max-width: 1150px) {
      .fc-nav>li>a {
        padding: 8px 8px;
        font-size: 13px;
      }

      .fc-btn-request-demo {
        display: none;
      }
    }

    @media (max-width: 900px) {
      .fc-nav {
        display: none;
      }

      .fc-hamburger {
        display: flex;
      }

      .fc-drawer {
        display: block;
      }

      .fc-topbar {
        display: none;
      }

      .fc-btn-ghost.fc-sign-in-desktop {
        display: none;
      }

      .fc-btn-green.fc-register-desktop {
        display: none;
      }

      .fc-btn-register-mobile {
        display: flex;
      }
    }

    @media (max-width: 480px) {
      .fc-header-inner {
        padding: 0 16px;
      }
    }

    :root {
      --h-bg: #0e1618;
      --h-surface: #141d20;
      --h-surface2: #1a2428;
      --h-green: #48d597;
      --h-green-d: rgba(0, 166, 103, 0.14);
      --h-green-b: rgba(0, 166, 103, 0.22);
      --h-text: #e8f0ed;
      --h-muted: #7a9a8e;
      --h-border: rgba(0, 166, 103, 0.16);
      --h-border-h: rgba(0, 166, 103, 0.38);
      --h-radius: 10px;
    }

    /* ── LIGHT THEME OVERRIDES ── */
    [data-h-theme="light"] {
      --h-bg: #f6faf8;
      --h-surface: #ffffff;
      --h-surface2: #eef4f1;
      --h-green: #00a667;
      --h-green-d: rgba(0, 166, 103, 0.08);
      --h-green-b: rgba(0, 166, 103, 0.18);
      --h-text: #10201b;
      --h-muted: #5b7a70;
      --h-border: rgba(0, 100, 60, 0.12);
      --h-border-h: rgba(0, 100, 60, 0.3);
    }

    [data-h-theme="light"] .fc-topbar {
      background: #eef4f1;
      border-bottom-color: rgba(0, 100, 60, 0.1);
    }

    [data-h-theme="light"] .fc-header.scrolled {
      background: rgba(246, 250, 248, 0.95);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    }

    [data-h-theme="light"] .fc-logo-mark,
    [data-h-theme="light"] .fc-btn-green,
    [data-h-theme="light"] .fc-lp-submit,
    [data-h-theme="light"] .fc-btn-register-mobile {
      color: #fff;
    }

    [data-h-theme="light"] .fc-logo-name {
      color: #10201b;
    }

    [data-h-theme="light"] .fc-nav>li>a:hover,
    [data-h-theme="light"] .fc-nav>li:hover>a {
      color: #10201b;
      background: rgba(0, 100, 60, 0.06);
    }

    [data-h-theme="light"] .fc-card-title {
      color: #10201b;
    }

    [data-h-theme="light"] .fc-card:hover .fc-card-title {
      color: #00a667;
    }

    [data-h-theme="light"] .fc-lp-field input::placeholder,
    [data-h-theme="light"] .fc-search-input-wrap input::placeholder {
      color: #a9c2b8;
    }

    [data-h-theme="light"] .fc-search-overlay {
      background: rgba(246, 250, 248, 0.92);
    }

    .fc-theme-toggle {
      width: 38px;
      height: 38px;
      border: 1px solid var(--h-border);
      border-radius: 8px;
      background: transparent;
      color: var(--h-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 15px;
      flex-shrink: 0;
      position: relative;
    }

    .fc-theme-toggle:hover {
      color: #fff;
      border-color: var(--h-border-h);
      background: rgba(255, 255, 255, 0.04);
    }

    [data-h-theme="light"] .fc-theme-toggle:hover {
      color: #10201b;
      background: rgba(0, 100, 60, 0.06);
    }

    .fc-theme-toggle .ti-sun {
      display: none;
    }

    .fc-theme-toggle .ti-moon {
      display: inline-flex;
    }

    [data-h-theme="light"] .fc-theme-toggle .ti-sun {
      display: inline-flex;
    }

    [data-h-theme="light"] .fc-theme-toggle .ti-moon {
      display: none;
    }
  </style>

  {{-- ══════════ MODERN TOP HEADER (standalone page — its own header) ══════════ --}}
  <header class="fc-topheader">
    <div class="fc-topheader-inner">
      <a href="{{ route('user.home') }}" class="fc-th-logo">
        <div class="fc-th-logo-mark">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <span class="fc-th-logo-text">Future<span>Connect</span></span>
      </a>

      <div class="fc-th-actions">
        <a href="{{ route('user.home') }}" class="fc-th-home">
          <i class="ti ti-home"></i> <span>Home</span>
        </a>
        <button class="fc-th-toggle" id="fcThemeToggle" aria-label="Toggle theme">
          <i class="ti ti-sun"></i>
          <i class="ti ti-moon"></i>
        </button>
      </div>
    </div>
  </header>

  <div class="dr-page">

    {{-- ══════════ LEFT — Branding ══════════ --}}
    <div class="dr-left">
      <a href="{{ route('user.home') }}" class="dr-logo-lockup">
        <div class="dr-logo-mark">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <div>
          <p class="dr-logo-wordmark">Future Connect</p>
          <p class="dr-logo-tagline">Empowering Stories. Real Impact.</p>
        </div>
      </a>

      <div class="dr-left-body">
        <div class="dr-badge">Live Demo</div>
        <h1>See Future Connect<br>in <span>Action</span></h1>
        <p>Book a personalized walkthrough with our team and discover how Future Connect can help you find, vet, and hire the right talent — fast.</p>

        <div class="dr-features">
          <div class="dr-feature">
            <div class="dr-feature-icon">🎯</div>
            <div class="dr-feature-text">
              <strong>Tailored to You</strong>
              <span>We'll walk through the features most relevant to your team and use case.</span>
            </div>
          </div>
          <div class="dr-feature">
            <div class="dr-feature-icon">⚡</div>
            <div class="dr-feature-text">
              <strong>30 Minutes, No Pressure</strong>
              <span>A quick, friendly session — ask anything, no obligation to buy.</span>
            </div>
          </div>
          <div class="dr-feature">
            <div class="dr-feature-icon">🧑‍💼</div>
            <div class="dr-feature-text">
              <strong>Real Talent Pool</strong>
              <span>See live examples of verified talent matching your industry.</span>
            </div>
          </div>
          <div class="dr-feature">
            <div class="dr-feature-icon">📅</div>
            <div class="dr-feature-text">
              <strong>Flexible Scheduling</strong>
              <span>Pick a time that works for you — we'll confirm within one business day.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="dr-stats">
        <div>
          <div class="dr-stat-num">8K+</div>
          <div class="dr-stat-label">Skills listed</div>
        </div>
        <div>
          <div class="dr-stat-num">4.8</div>
          <div class="dr-stat-label">Avg. rating</div>
        </div>
        <div>
          <div class="dr-stat-num">24h</div>
          <div class="dr-stat-label">Response time</div>
        </div>
      </div>
    </div>

    {{-- ══════════ RIGHT — Form ══════════ --}}
    <div class="dr-right">

      <div class="dr-topbar">
        <a href="{{ route('user.home') }}" class="dr-home-btn">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Back to Home
        </a>
        <span class="dr-login-hint">
          Have an account? <a href="{{ route('login') }}">Sign in →</a>
        </span>
      </div>

      <div class="dr-right-body">

        <div class="dr-right-head">
          <h2>Request a Demo</h2>
          <p>Tell us a bit about your team and we'll set up a time to show you around.</p>
        </div>

        @if (session('success'))
        <div class="dr-alert-success">
          <div class="dr-alert-success-icon">✓</div>
          <div class="dr-alert-success-body">
            <strong>Request received</strong>
            <p>{{ session('success') }}</p>
          </div>
        </div>
        @endif

        @if ($errors->any())
        <div class="dr-error-banner">
          <div class="dr-error-banner-icon">⚠️</div>
          <div class="dr-error-banner-body">
            <strong>Please fix {{ $errors->count() }} {{ Str::plural('issue', $errors->count()) }} before continuing:</strong>
            <ul>
              @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
              @endforeach
            </ul>
          </div>
        </div>
        @endif

        <div class="dr-panel">
          <form action="{{ route('demo.store') }}" method="POST">
            @csrf

            <div class="dr-row">
              <div class="dr-field @error('full_name') has-error @enderror">
                <label for="full_name">
                  Full Name
                  @error('full_name')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <input type="text" id="full_name" name="full_name" value="{{ old('full_name') }}"
                  placeholder="e.g. Jane Uwimana" required>
              </div>

              <div class="dr-field @error('work_email') has-error @enderror">
                <label for="work_email">
                  Work Email
                  @error('work_email')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <input type="email" id="work_email" name="work_email" value="{{ old('work_email') }}"
                  placeholder="you@company.com" required>
              </div>
            </div>

            <div class="dr-row">
              <div class="dr-field @error('phone') has-error @enderror">
                <label for="phone">
                  Phone <span style="text-transform:none;font-weight:400;">(optional)</span>
                  @error('phone')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <input type="tel" id="phone" name="phone" value="{{ old('phone') }}"
                  placeholder="+250 788 123 456">
              </div>

              <div class="dr-field @error('role') has-error @enderror">
                <label for="role">
                  Your Role <span style="text-transform:none;font-weight:400;">(optional)</span>
                  @error('role')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <input type="text" id="role" name="role" value="{{ old('role') }}"
                  placeholder="e.g. HR Manager, Founder">
              </div>
            </div>

            <div class="dr-row">
              <div class="dr-field @error('company_name') has-error @enderror">
                <label for="company_name">
                  Company Name
                  @error('company_name')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <input type="text" id="company_name" name="company_name" value="{{ old('company_name') }}"
                  placeholder="e.g. Umoja NGO" required>
              </div>

              <div class="dr-field @error('company_size') has-error @enderror">
                <label for="company_size">
                  Company Size <span style="text-transform:none;font-weight:400;">(optional)</span>
                  @error('company_size')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <select id="company_size" name="company_size">
                  <option value="">Select size</option>
                  @foreach($companySizes as $value => $label)
                  <option value="{{ $value }}" {{ old('company_size') == $value ? 'selected' : '' }}>{{ $label }}</option>
                  @endforeach
                </select>
              </div>
            </div>

            <div class="dr-row">
              <div class="dr-field @error('preferred_date') has-error @enderror">
                <label for="preferred_date">
                  Preferred Date <span style="text-transform:none;font-weight:400;">(optional)</span>
                  @error('preferred_date')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <input type="date" id="preferred_date" name="preferred_date" value="{{ old('preferred_date') }}"
                  min="{{ now()->toDateString() }}">
              </div>

              <div class="dr-field @error('preferred_time') has-error @enderror">
                <label for="preferred_time">
                  Preferred Time <span style="text-transform:none;font-weight:400;">(optional)</span>
                  @error('preferred_time')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <select id="preferred_time" name="preferred_time">
                  <option value="">Select time</option>
                  @foreach($preferredTimes as $value => $label)
                  <option value="{{ $value }}" {{ old('preferred_time') == $value ? 'selected' : '' }}>{{ $label }}</option>
                  @endforeach
                </select>
              </div>
            </div>

            <div class="dr-row single">
              <div class="dr-field @error('message') has-error @enderror">
                <label for="message">
                  What would you like to see? <span style="text-transform:none;font-weight:400;">(optional)</span>
                  @error('message')<span class="dr-field-error-tag">{{ $message }}</span>@enderror
                </label>
                <textarea id="message" name="message"
                  placeholder="e.g. Hiring for a 6-month design contract, want to see the talent matching flow...">{{ old('message') }}</textarea>
              </div>
            </div>

            <div class="dr-actions">
              <button type="submit" class="dr-btn-submit">Request My Demo →</button>
            </div>

            <p class="dr-note">By submitting, you agree to be contacted by our team regarding your demo request. We won't share your details with third parties.</p>
          </form>
        </div>

      </div>
    </div>

  </div>

  <script>
    /* ── Theme switch: shared across all pages via localStorage ── */
    (function initTheme() {
      const root = document.documentElement;
      const stored = localStorage.getItem('fc-theme');
      const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const theme = stored || (systemPrefersLight ? 'light' : 'dark');
      if (theme === 'light') root.setAttribute('data-h-theme', 'light');
    })();

    function fcSetTheme(theme) {
      const root = document.documentElement;
      if (theme === 'light') {
        root.setAttribute('data-h-theme', 'light');
      } else {
        root.removeAttribute('data-h-theme');
      }
      localStorage.setItem('fc-theme', theme);
    }

    function fcToggleTheme() {
      const isLight = document.documentElement.getAttribute('data-h-theme') === 'light';
      fcSetTheme(isLight ? 'dark' : 'light');
    }

    document.getElementById('fcThemeToggle')?.addEventListener('click', fcToggleTheme);
  </script>

  <script>
    (function() {
      const root = document.documentElement;
      const fixedWrap = document.getElementById('fcHeaderFixedWrap');

      function syncHeaderOffset() {
        if (fixedWrap) {
          root.style.setProperty('--dr-header-h', fixedWrap.offsetHeight + 'px');
        }
      }

      syncHeaderOffset();
      window.addEventListener('resize', syncHeaderOffset, {
        passive: true
      });
      window.addEventListener('scroll', syncHeaderOffset, {
        passive: true
      });
      fixedWrap && fixedWrap.addEventListener('transitionend', syncHeaderOffset);
    })();
  </script>

</body>

</html>