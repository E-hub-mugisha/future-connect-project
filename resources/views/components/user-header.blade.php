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

    /* Spacer that reserves the header's height in normal flow so page
   content doesn't jump underneath the fixed header/topbar */
    .fc-header-spacer {
        width: 100%;
    }

    /* ── Logo (shared markup/classes for desktop header + mobile drawer) ── */
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

    /* ── DESKTOP NAV ── */
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

    /* ── MEGA MENU — flat 2-column grid of feature cards, no sub-headers ── */
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

    /* Trending is a plain link, not a dropdown — it points at live platform
       activity rather than a static menu, so no mega markup is attached to it. */

    /* ── RIGHT ACTIONS ── */
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

    /* ── MOBILE + ICON REGISTER BUTTON ── */
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

    /* ── LOGIN DROPDOWN PANEL ── */
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

    /* ── HAMBURGER — icon-based ── */
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

    /* ── MOBILE DRAWER ── */
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

    /* ── SEARCH OVERLAY ── */
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

    /* ── RESPONSIVE ── */
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

    /* ══════════════════════════════════════
   MODAL (shared: post job / apply seller)
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
        --h-surface: #F5f5f7;
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

    /* ── THEME TOGGLE BUTTON ── */
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

{{-- ════════════════════ FIXED HEADER STACK (topbar + header pinned to viewport) ════════════════════ --}}
<div class="fc-header-fixed-wrap" id="fcHeaderFixedWrap">

    {{-- TOP INFO BAR — slides/fades away once the page scrolls --}}
    <div class="fc-topbar d-none d-lg-block" id="fcTopbar">
        <div class="fc-tb-inner">
            <div class="fc-tb-contact">
                <span>info@futureconnect.rw</span>
                <span>+250 784 123 456</span>
            </div>
            <div class="fc-tb-social">
                <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>

    {{-- MAIN HEADER --}}
    <header class="fc-header" id="fcHeader">
        <div class="fc-header-inner">

            {{-- Logo (same markup/classes used in the mobile drawer, for visual parity) --}}
            <a href="{{ route('user.home') }}" class="fc-logo-wrap">
                <div class="fc-logo-mark">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                </div>
                <div class="fc-logo-name">Future<span>Connect</span></div>
            </a>

            {{-- Desktop Navigation --}}
            <ul class="fc-nav">

                {{-- Platform — what you can DO on FutureConnect --}}
                <li>
                    <a href="javascript:void(0)">Platform <span class="chevron">▾</span></a>
                    <div class="fc-mega">
                        <a class="fc-card" href="{{ route('talent.connections-room') }}">
                            <p class="fc-card-title">Professional Connections</p>
                            <p class="fc-card-desc">Connect with experts and peers in your field.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.projects.index') }}">
                            <p class="fc-card-title">Project Collaboration</p>
                            <p class="fc-card-desc">Build projects with talented people.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.jobs.index') }}">
                            <p class="fc-card-title">Job Opportunities</p>
                            <p class="fc-card-desc">Find jobs, internships, and career opportunities.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.courses') }}">
                            <p class="fc-card-title">Learning</p>
                            <p class="fc-card-desc">Learn, grow, and earn new certifications.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.talents') }}">
                            <p class="fc-card-title">Skills Hub</p>
                            <p class="fc-card-desc">Showcase your skills and portfolio.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.products.index') }}">
                            <p class="fc-card-title">Marketplace</p>
                            <p class="fc-card-desc">Buy and sell technology solutions.</p>
                        </a>
                    </div>
                </li>

                {{-- Solutions — who FutureConnect is for --}}
                <li>
                    <a href="javascript:void(0)">Solutions <span class="chevron">▾</span></a>
                    <div class="fc-mega">
                        <a class="fc-card" href="{{ route('solutions.students') }}">
                            <p class="fc-card-title">For Students</p>
                            <p class="fc-card-desc">Launch your career with confidence.</p>
                        </a>
                        <a class="fc-card" href="{{ route('solutions.ngos') }}">
                            <p class="fc-card-title">For NGOs</p>
                            <p class="fc-card-desc">Partner with skilled local talent.</p>
                        </a>
                        <a class="fc-card" href="{{ route('solutions.companies') }}">
                            <p class="fc-card-title">For Companies</p>
                            <p class="fc-card-desc">Find verified and sharp skills faster.</p>
                        </a>
                        <a class="fc-card" href="{{ route('solutions.professionals') }}">
                            <p class="fc-card-title">For Professionals</p>
                            <p class="fc-card-desc">Grow your network and opportunities.</p>
                        </a>
                        <a class="fc-card" href="{{ route('solutions.universities') }}">
                            <p class="fc-card-title">For Universities</p>
                            <p class="fc-card-desc">Empower students beyond graduation.</p>
                        </a>
                        {{-- TODO: no dedicated investors route exists yet — swap in route('user.investors') once it's built --}}
                        <a class="fc-card" href="{{ route('solutions.investors') }}">
                            <p class="fc-card-title">For Investors</p>
                            <p class="fc-card-desc">Discover skills worth investing in.</p>
                        </a>
                    </div>
                </li>


                <li>

                    <a href="{{ route('user.trending.index') }}">Trending</a>
                </li>

                {{-- Company — about the platform + support --}}
                <li>
                    <a href="javascript:void(0)">Company <span class="chevron">▾</span></a>
                    <div class="fc-mega">
                        <a class="fc-card" href="{{ route('user.how-it-works') }}">
                            <p class="fc-card-title">How It Works</p>
                            <p class="fc-card-desc">See the platform in action.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.contact') }}">
                            <p class="fc-card-title">Contact</p>
                            <p class="fc-card-desc">Get in touch with our team.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.success-stories') }}">
                            <p class="fc-card-title">Customer Stories</p>
                            <p class="fc-card-desc">Real outcomes from real talent.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.contact') }}">
                            <p class="fc-card-title">Partnerships</p>
                            <p class="fc-card-desc">Team up with FutureConnect.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.faq') }}">
                            <p class="fc-card-title">FAQ</p>
                            <p class="fc-card-desc">Answers to common questions.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.contact') }}">
                            <p class="fc-card-title">Help &amp; Support</p>
                            <p class="fc-card-desc">Get help when you need it.</p>
                        </a>
                    </div>
                </li>

                <li>
                    <a href="{{ route('pricing') }}">Pricing</a>
                </li>

            </ul>

            {{-- Right Actions --}}
            <div class="fc-actions">

                <a href="{{ route('demo.request') }}" class="fc-btn-ghost fc-btn-request-demo">Request Demo</a>

                {{-- Theme toggle --}}
                <button class="fc-theme-toggle" id="fcThemeToggle" aria-label="Toggle theme">
                    <i class="ti ti-sun"></i>
                    <i class="ti ti-moon"></i>
                </button>

                {{-- Search button --}}
                <button class="fc-btn-search" id="fcSearchBtn" aria-label="Search">
                    <i class="ti ti-search"></i>
                </button>

                @auth
                {{-- Dashboard link --}}
                @php
                $dashboards = [
                'admin' => 'admin.dashboard',
                'agent' => 'agent.dashboard',
                'talent' => 'talent.dashboard',
                'seller' => 'seller.dashboard',
                'user' => 'user.dashboard',
                ];
                @endphp
                <a href="{{ route($dashboards[auth()->user()->role] ?? 'user.dashboard') }}"
                    class="fc-btn-green">
                    <i class="ti ti-layout-dashboard"></i> Dashboard
                </a>

                @else
                {{-- Sign In — triggers inline login panel --}}
                <div class="fc-login-wrap">
                    <button class="fc-btn-ghost fc-sign-in-desktop" id="fcSignInBtn">
                        <i class="ti ti-user"></i> Sign In
                    </button>

                    {{-- ── INLINE LOGIN PANEL ── --}}
                    <div class="fc-login-panel" id="fcLoginPanel">
                        <div class="fc-lp-head">
                            <div class="fc-lp-head-left">
                                <h4>Welcome Back</h4>
                                <p>Sign in to your account</p>
                            </div>
                            <button class="fc-lp-close" id="fcLoginClose">✕</button>
                        </div>

                        <form action="{{ route('login') }}" method="POST">
                            @csrf

                            <div class="fc-lp-field">
                                <label for="lp_email">Email</label>
                                <div class="fc-lp-input-wrap">
                                    <i class="ti ti-mail fc-lp-icon"></i>
                                    <input type="email" id="lp_email" name="email"
                                        placeholder="you@example.com" required
                                        value="{{ old('email') }}">
                                </div>
                            </div>

                            <div class="fc-lp-field">
                                <label for="lp_password">Password</label>
                                <div class="fc-lp-input-wrap">
                                    <i class="ti ti-lock fc-lp-icon"></i>
                                    <input type="password" id="lp_password" name="password"
                                        placeholder="••••••••" required>
                                </div>
                            </div>

                            <div class="fc-lp-row">
                                <label class="fc-lp-remember">
                                    <input type="checkbox" name="remember">
                                    <span>Remember me</span>
                                </label>
                                <a href="{{ route('password.request') }}" class="fc-lp-forgot">
                                    Forgot password?
                                </a>
                            </div>

                            <button type="submit" class="fc-lp-submit">Sign In →</button>
                        </form>

                        <div class="fc-lp-footer">
                            No account yet?
                            <a href="{{ route('register') }}">Create one →</a>
                        </div>
                    </div>
                </div>

                {{-- Mobile: + icon button (shown only on small screens) --}}
                <a href="{{ route('user.register_skills') }}"
                    class="fc-btn-register-mobile"
                    aria-label="Register Skills"
                    title="Register Skills">
                    <i class="ti ti-plus"></i>
                </a>

                {{-- Desktop: full text button (hidden on small screens) --}}
                <a href="{{ route('user.register_skills') }}" class="fc-btn-green fc-register-desktop">
                    Register Skills
                </a>
                @endauth

                {{-- Mobile hamburger — icon-based, no spans --}}
                <button class="fc-hamburger" id="fcHamburger" aria-label="Menu">
                    <i class="ti ti-menu-2"></i>
                </button>

            </div>

        </div>
    </header>

</div>

{{-- Spacer — reserves the fixed stack's height so page content doesn't jump underneath it --}}
<div class="fc-header-spacer" id="fcHeaderSpacer"></div>

{{-- ════════════════════ MOBILE DRAWER (mirrors the desktop nav exactly) ════════════════════ --}}
<div class="fc-drawer" id="fcDrawer">
    <div class="fc-drawer-bg" id="fcDrawerBg"></div>
    <div class="fc-drawer-panel">

        <div class="fc-drawer-logo">
            <a href="{{ route('user.home') }}" class="fc-logo-wrap">
                <div class="fc-logo-mark">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                </div>
                <div class="fc-logo-name">Future<span>Connect</span></div>
            </a>
            <button class="fc-drawer-close" id="fcDrawerClose">✕</button>
        </div>

        <ul class="fc-drawer-nav">
            <li>
                <a href="javascript:void(0)" onclick="toggleDrawerSub(this)">
                    Platform <span class="chevron">▾</span>
                </a>
                <ul class="fc-drawer-sub">
                    <li><a href="{{ route('talent.connections-room') }}">Professional Connections</a></li>
                    <li><a href="{{ route('user.talents') }}">Project Collaboration</a></li>
                    <li><a href="{{ route('user.jobs.index') }}">Job Opportunities</a></li>
                    <li><a href="{{ route('user.courses') }}">Learning</a></li>
                    <li><a href="{{ route('user.register_skills') }}">Skills Hub</a></li>
                    <li><a href="{{ route('user.products.index') }}">Marketplace</a></li>
                </ul>
            </li>
            <li>
                <a href="javascript:void(0)" onclick="toggleDrawerSub(this)">
                    Solutions <span class="chevron">▾</span>
                </a>
                <ul class="fc-drawer-sub">
                    <li><a href="{{ route('solutions.students') }}">For Students</a></li>
                    <li><a href="{{ route('solutions.ngos') }}">For NGOs</a></li>
                    <li><a href="{{ route('solutions.companies') }}">For Companies</a></li>
                    <li><a href="{{ route('solutions.professionals') }}">For Professionals</a></li>
                    <li><a href="{{ route('solutions.universities') }}">For Universities</a></li>
                    <li><a href="{{ route('solutions.investors') }}">For Investors</a></li>
                </ul>
            </li>
            <li><a href="{{ route('user.trending.index') }}">Trending</a></li>
            <li>
                <a href="javascript:void(0)" onclick="toggleDrawerSub(this)">
                    Company <span class="chevron">▾</span>
                </a>
                <ul class="fc-drawer-sub">
                    <li><a href="{{ route('user.how-it-works') }}">How It Works</a></li>
                    <li><a href="{{ route('user.contact') }}">Contact</a></li>
                    <li><a href="{{ route('user.success-stories') }}">Customer Stories</a></li>
                    <li><a href="{{ route('user.contact') }}">Partnerships</a></li>
                    <li><a href="{{ route('user.faq') }}">FAQ</a></li>
                    <li><a href="{{ route('user.contact') }}">Help &amp; Support</a></li>
                </ul>
            </li>
            <li><a href="{{ route('pricing') }}">Pricing</a></li>
        </ul>

        <div class="fc-drawer-ctas">
            @auth
            @php
            $dashboards = ['admin'=>'admin.dashboard','agent'=>'agent.dashboard','talent'=>'talent.dashboard','seller'=>'seller.dashboard','user'=>'user.dashboard'];
            @endphp
            <a href="{{ route($dashboards[auth()->user()->role] ?? 'user.dashboard') }}" class="fc-btn-green">
                Dashboard
            </a>
            @else
            <button class="fc-btn-ghost" onclick="openMobileLogin()">Sign In</button>
            <a href="{{ route('user.register_skills') }}" class="fc-btn-green">Register Skills</a>
            @endauth
            <a href="{{ route('demo.request') }}" class="fc-btn-ghost">Request Demo</a>
        </div>

    </div>
</div>

{{-- ════════════════════ SEARCH OVERLAY ════════════════════ --}}
<div class="fc-search-overlay" id="fcSearchOverlay">
    <button class="fc-search-close" id="fcSearchClose">✕</button>
    <div class="fc-search-box">
        <p>Search talents, skills, stories &amp; more</p>
        <form action="{{ route('talent.search') }}" method="GET">
            <div class="fc-search-input-wrap">
                <input type="text" name="keyword" placeholder="e.g. Photography, Coding, Dance..." required autofocus>
                <button type="submit" class="fc-search-submit"><i class="ti ti-search"></i></button>
            </div>
        </form>
    </div>
</div>

{{-- ════════════════════ SELLER MODAL ════════════════════ --}}
<div class="modal fade" id="applySellerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg" style="background:var(--h-surface);border:1px solid var(--h-border);border-radius:18px;overflow:hidden;">
            <form action="{{ route('seller.store') }}" method="POST">
                @csrf
                <div class="modal-header border-0" style="background:linear-gradient(135deg,#071a10,#0e1618);padding:20px 24px;">
                    <h5 class="modal-title fw-bold" style="color:#fff;font-family:'Syne',sans-serif;">Apply to Become a Seller</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body py-4 px-4">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Company Name</label>
                            <input type="text" name="company_name" class="form-control mt-1" placeholder="e.g. Creative Minds Ltd" style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;" required>
                        </div>
                        <div class="col-md-6">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Email</label>
                            <input type="email" name="email" class="form-control mt-1" placeholder="example@domain.com" style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;" required>
                        </div>
                        <div class="col-md-6">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Phone</label>
                            <input type="text" name="phone" class="form-control mt-1" placeholder="+250 700 123 456" style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;">
                        </div>
                        <div class="col-md-6">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Address</label>
                            <input type="text" name="address" class="form-control mt-1" placeholder="Kigali, Rwanda" style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;">
                        </div>
                        <div class="col-12">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Company Description</label>
                            <textarea name="description" rows="3" class="form-control mt-1" placeholder="Tell us about your company..." style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;resize:vertical;"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 px-4 py-3 d-flex justify-content-between" style="background:var(--h-surface2);">
                    <button type="button" class="btn" data-bs-dismiss="modal" style="background:transparent;border:1px solid var(--h-border);color:var(--h-muted);border-radius:9px;padding:9px 22px;font-family:'DM Sans',sans-serif;">Cancel</button>
                    <button type="submit" class="btn" style="background:var(--h-green);color:#fff;border:none;border-radius:9px;padding:9px 28px;font-family:'Syne',sans-serif;font-weight:700;">Submit Application</button>
                </div>
            </form>
        </div>
    </div>
</div>

{{-- ════════════════════════════════════
     POST JOB MODAL
════════════════════════════════════ --}}
<div class="modal fade fc-modal" id="postJobModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg ">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h5 class="modal-title">
                        Post a New Job / work
                        <small>Fill in the details below to publish your listing</small>
                    </h5>
                    <span class="accent-line"></span>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form action="{{ route('user.jobs.store') }}" method="POST">
                @csrf
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="fc-form-label">Job Title <span style="color:var(--accent)">*</span></label>
                            <input type="text" name="title" class="fc-form-control" placeholder="e.g., Senior Laravel Developer" required>
                        </div>
                        <div class="col-12">
                            <label class="fc-form-label">Description <span style="color:var(--accent)">*</span></label>
                            <textarea name="description" class="fc-form-control" rows="4" placeholder="Describe the job responsibilities, requirements, and benefits..." required></textarea>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Category <span style="color:var(--accent)">*</span></label>
                            <select name="job_category_id" class="fc-form-control" required>
                                <option value="">Select Category</option>
                                @foreach($categories as $cat)
                                <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Location <span style="color:var(--accent)">*</span></label>
                            <input type="text" name="location" class="fc-form-control" placeholder="e.g., Kigali, Rwanda / Remote" required>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Job Type</label>
                            <select name="type" class="fc-form-control">
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Experience Level</label>
                            <select name="experience_level" class="fc-form-control">
                                <option value="entry">Entry Level</option>
                                <option value="mid">Mid Level</option>
                                <option value="senior">Senior Level</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Salary Range</label>
                            <input type="text" name="salary_range" class="fc-form-control" placeholder="e.g., 300K – 800K RWF">
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Skills (comma separated)</label>
                            <input type="text" name="skills" class="fc-form-control" placeholder="e.g., Laravel, Vue, CSS">
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="gap:10px;">
                    <button type="button" class="btn-fc-outline" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn-fc-primary">
                        <i class="ti ti-send"></i> Post Job
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
{{-- ════════════════════ SCRIPTS ════════════════════ --}}
<script>
    (function() {

        /* ── Fixed header stack: hide topbar + toggle header shadow on scroll,
             and keep a spacer div in sync so page content never jumps ── */
        const fixedWrap = document.getElementById('fcHeaderFixedWrap');
        const header = document.getElementById('fcHeader');
        const topbar = document.getElementById('fcTopbar');
        const spacer = document.getElementById('fcHeaderSpacer');

        const SCROLL_THRESHOLD = 60;

        function syncSpacerHeight() {
            if (fixedWrap && spacer) {
                spacer.style.height = fixedWrap.offsetHeight + 'px';
            }
        }

        function handleScrollState() {
            const scrolled = window.scrollY > SCROLL_THRESHOLD;
            header && header.classList.toggle('scrolled', scrolled);
            topbar && topbar.classList.toggle('fc-hide', scrolled);
        }

        // Initial sync
        handleScrollState();
        syncSpacerHeight();

        window.addEventListener('scroll', () => {
            handleScrollState();
        }, {
            passive: true
        });

        // Topbar height change is animated (max-height transition) — resync the
        // spacer once that transition finishes so content settles smoothly.
        topbar && topbar.addEventListener('transitionend', syncSpacerHeight);

        // Keep spacer accurate on resize (e.g. nav wrapping, orientation change)
        window.addEventListener('resize', syncSpacerHeight, {
            passive: true
        });

        /* ── Login panel toggle ── */
        const signInBtn = document.getElementById('fcSignInBtn');
        const loginPanel = document.getElementById('fcLoginPanel');
        const loginClose = document.getElementById('fcLoginClose');

        if (signInBtn && loginPanel) {
            signInBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                loginPanel.classList.toggle('open');
            });

            loginClose && loginClose.addEventListener('click', () => {
                loginPanel.classList.remove('open');
            });

            document.addEventListener('click', (e) => {
                if (loginPanel.classList.contains('open') &&
                    !loginPanel.contains(e.target) &&
                    e.target !== signInBtn) {
                    loginPanel.classList.remove('open');
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') loginPanel.classList.remove('open');
            });
        }

        /* ── Search overlay ── */
        const searchBtn = document.getElementById('fcSearchBtn');
        const searchOverlay = document.getElementById('fcSearchOverlay');
        const searchClose = document.getElementById('fcSearchClose');

        searchBtn && searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('open');
            setTimeout(() => searchOverlay.querySelector('input').focus(), 100);
        });

        searchClose && searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('open');
        });

        searchOverlay && searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) searchOverlay.classList.remove('open');
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') searchOverlay && searchOverlay.classList.remove('open');
        });

        /* ── Mobile drawer ── */
        const hamburger = document.getElementById('fcHamburger');
        const drawer = document.getElementById('fcDrawer');
        const drawerBg = document.getElementById('fcDrawerBg');
        const drawerClose = document.getElementById('fcDrawerClose');

        function openDrawer() {
            drawer.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeDrawer() {
            drawer.classList.remove('open');
            document.body.style.overflow = '';
        }

        hamburger && hamburger.addEventListener('click', openDrawer);
        drawerClose && drawerClose.addEventListener('click', closeDrawer);
        drawerBg && drawerBg.addEventListener('click', closeDrawer);

        /* ── Mobile drawer sub-menus ── */
        window.toggleDrawerSub = function(el) {
            const sub = el.nextElementSibling;
            if (sub && sub.classList.contains('fc-drawer-sub')) {
                sub.classList.toggle('open');
                el.classList.toggle('sub-open', sub.classList.contains('open'));
            }
        };

        /* ── Mobile login (opens login panel from drawer) ── */
        window.openMobileLogin = function() {
            closeDrawer();
            if (loginPanel) {
                setTimeout(() => loginPanel.classList.add('open'), 350);
                document.getElementById('fcSignInBtn') && document.getElementById('fcSignInBtn').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        };

    })();
</script>

<script>
    /* ── Theme switch: persisted in localStorage, defaults to system preference ── */
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

    const themeToggle = document.getElementById('fcThemeToggle');
    themeToggle && themeToggle.addEventListener('click', fcToggleTheme);

    const themeToggleMobile = document.getElementById('fcThemeToggleMobile');
    themeToggleMobile && themeToggleMobile.addEventListener('click', fcToggleTheme);
</script>