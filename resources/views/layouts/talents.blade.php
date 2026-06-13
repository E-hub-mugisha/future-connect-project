<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>@yield('title', 'Talent Panel') — Future Connect</title>

    {{-- Bootstrap 5 --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
    {{-- Bootstrap Icons --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    {{-- Google Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />

    <style>
        /* ── Design Tokens ─────────────────────────────── */
        :root {
            --fc-bg: #0e1618;
            --fc-bg-2: #131d1f;
            --fc-bg-3: #1a2628;
            --fc-green: #48d597;
            --fc-green-dim: rgba(0, 166, 103, 0.12);
            --fc-green-hover: #00bf78;
            --fc-text: #FDFEFE;
            --fc-muted: #8ca3a5;
            --fc-border: rgba(255, 255, 255, 0.07);
            --fc-sidebar-w: 260px;
            --fc-header-h: 64px;
            --font-head: 'Space Grotesk', sans-serif;
            --font-body: 'Inter', sans-serif;
            --radius: 10px;
            --radius-sm: 6px;
            --transition: 0.18s ease;
        }

        /* ── Base ──────────────────────────────────────── */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        html,
        body {
            height: 100%;
            margin: 0;
            font-family: var(--font-body);
            background: var(--fc-bg);
            color: var(--fc-text);
            font-size: 14px;
            -webkit-font-smoothing: antialiased;
        }

        a {
            color: var(--fc-green);
            text-decoration: none;
        }

        a:hover {
            color: var(--fc-green-hover);
        }

        /* ── Layout Shell ──────────────────────────────── */
        .fc-shell {
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        /* ── Sidebar ───────────────────────────────────── */
        .fc-sidebar {
            width: var(--fc-sidebar-w);
            min-height: 100vh;
            background: var(--fc-bg-2);
            border-right: 1px solid var(--fc-border);
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            transition: transform var(--transition), width var(--transition);
            z-index: 1040;
            overflow-y: auto;
            overflow-x: hidden;
            scrollbar-width: thin;
            scrollbar-color: var(--fc-bg-3) transparent;
        }

        .fc-sidebar::-webkit-scrollbar {
            width: 4px;
        }

        .fc-sidebar::-webkit-scrollbar-thumb {
            background: var(--fc-bg-3);
            border-radius: 2px;
        }

        /* Brand / Logo */
        .fc-brand {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 0 20px;
            height: var(--fc-header-h);
            border-bottom: 1px solid var(--fc-border);
            flex-shrink: 0;
        }

        .fc-brand-icon {
            width: 36px;
            height: 36px;
            background: var(--fc-green);
            border-radius: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #fff;
            font-family: var(--font-head);
            font-weight: 700;
            flex-shrink: 0;
        }

        .fc-brand-name {
            font-family: var(--font-head);
            font-size: 16px;
            font-weight: 700;
            color: var(--fc-text);
            line-height: 1.2;
        }

        .fc-brand-tag {
            font-size: 10px;
            color: var(--fc-green);
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        /* Talent Profile Card */
        .fc-profile-card {
            margin: 16px 14px;
            padding: 14px;
            background: var(--fc-bg-3);
            border: 1px solid var(--fc-border);
            border-radius: var(--radius);
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .fc-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--fc-green-dim);
            border: 2px solid var(--fc-green);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--fc-green);
            font-size: 16px;
            font-weight: 700;
            font-family: var(--font-head);
            flex-shrink: 0;
            overflow: hidden;
        }

        .fc-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .fc-profile-info {
            min-width: 0;
        }

        .fc-profile-name {
            font-weight: 600;
            font-size: 13px;
            color: var(--fc-text);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .fc-profile-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 10px;
            color: var(--fc-green);
            font-weight: 500;
            margin-top: 2px;
        }

        .fc-profile-badge .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--fc-green);
            animation: pulse 2s infinite;
        }

        @keyframes pulse {

            0%,
            100% {
                opacity: 1;
            }

            50% {
                opacity: 0.4;
            }
        }

        /* Nav Sections */
        .fc-nav {
            flex: 1;
            padding: 8px 0;
        }

        .fc-nav-section {
            padding: 16px 20px 6px;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--fc-muted);
        }

        .fc-nav-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 9px 14px 9px 20px;
            color: #a8bfc1;
            font-size: 13.5px;
            font-weight: 500;
            border-radius: 0;
            cursor: pointer;
            transition: background var(--transition), color var(--transition);
            position: relative;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            text-decoration: none;
        }

        .fc-nav-item:hover {
            background: var(--fc-green-dim);
            color: var(--fc-text);
        }

        .fc-nav-item.active {
            background: var(--fc-green-dim);
            color: var(--fc-green);
            font-weight: 600;
        }

        .fc-nav-item.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 6px;
            bottom: 6px;
            width: 3px;
            background: var(--fc-green);
            border-radius: 0 3px 3px 0;
        }

        .fc-nav-item i {
            font-size: 16px;
            width: 20px;
            text-align: center;
            flex-shrink: 0;
        }

        .fc-nav-item .fc-badge {
            margin-left: auto;
            background: var(--fc-green);
            color: #fff;
            font-size: 10px;
            font-weight: 700;
            padding: 1px 7px;
            border-radius: 20px;
            line-height: 1.6;
        }

        /* Collapsible sub-nav */
        .fc-nav-item .fc-chevron {
            margin-left: auto;
            font-size: 12px;
            transition: transform var(--transition);
        }

        .fc-nav-item[aria-expanded="true"] .fc-chevron {
            transform: rotate(90deg);
        }

        .fc-subnav {
            padding-left: 50px;
        }

        .fc-subnav .fc-nav-item {
            font-size: 13px;
            color: var(--fc-muted);
            padding-top: 7px;
            padding-bottom: 7px;
        }

        .fc-subnav .fc-nav-item::before {
            display: none;
        }

        .fc-subnav .fc-nav-item.active {
            color: var(--fc-green);
            background: none;
        }

        /* Sidebar Footer */
        .fc-sidebar-footer {
            padding: 14px;
            border-top: 1px solid var(--fc-border);
            flex-shrink: 0;
        }

        .fc-logout-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
            padding: 9px 14px;
            border-radius: var(--radius-sm);
            background: rgba(220, 53, 69, 0.08);
            border: 1px solid rgba(220, 53, 69, 0.15);
            color: #e07070;
            font-size: 13.5px;
            font-weight: 500;
            cursor: pointer;
            transition: background var(--transition);
            text-decoration: none;
        }

        .fc-logout-btn:hover {
            background: rgba(220, 53, 69, 0.18);
            color: #ff8585;
        }

        /* ── Main Area ─────────────────────────────────── */
        .fc-main {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-width: 0;
            overflow: hidden;
        }

        /* ── Header ────────────────────────────────────── */
        .fc-header {
            height: var(--fc-header-h);
            background: var(--fc-bg-2);
            border-bottom: 1px solid var(--fc-border);
            display: flex;
            align-items: center;
            padding: 0 24px;
            gap: 16px;
            flex-shrink: 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .fc-sidebar-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--fc-muted);
            font-size: 20px;
            padding: 4px;
            cursor: pointer;
            border-radius: var(--radius-sm);
            transition: color var(--transition);
        }

        .fc-sidebar-toggle:hover {
            color: var(--fc-text);
        }

        .fc-breadcrumb {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--fc-muted);
        }

        .fc-breadcrumb .current {
            color: var(--fc-text);
            font-weight: 600;
        }

        .fc-breadcrumb i {
            font-size: 10px;
        }

        .fc-header-right {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .fc-icon-btn {
            position: relative;
            width: 38px;
            height: 38px;
            background: var(--fc-bg-3);
            border: 1px solid var(--fc-border);
            border-radius: var(--radius-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--fc-muted);
            font-size: 17px;
            cursor: pointer;
            transition: background var(--transition), color var(--transition);
            text-decoration: none;
        }

        .fc-icon-btn:hover {
            background: var(--fc-green-dim);
            color: var(--fc-green);
            border-color: rgba(0, 166, 103, 0.3);
        }

        .fc-icon-btn .fc-notif-dot {
            position: absolute;
            top: 6px;
            right: 6px;
            width: 8px;
            height: 8px;
            background: var(--fc-green);
            border-radius: 50%;
            border: 2px solid var(--fc-bg-2);
        }

        /* Header user menu */
        .fc-user-menu .dropdown-toggle {
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--fc-bg-3);
            border: 1px solid var(--fc-border);
            border-radius: var(--radius-sm);
            padding: 5px 12px 5px 6px;
            cursor: pointer;
            transition: border-color var(--transition);
            text-decoration: none;
        }

        .fc-user-menu .dropdown-toggle:hover {
            border-color: rgba(0, 166, 103, 0.35);
        }

        .fc-user-menu .dropdown-toggle::after {
            display: none;
        }

        .fc-user-avatar-sm {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--fc-green);
            color: #fff;
            font-size: 12px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-head);
            flex-shrink: 0;
            overflow: hidden;
        }

        .fc-user-avatar-sm img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .fc-user-label {
            font-size: 13px;
            font-weight: 600;
            color: var(--fc-text);
        }

        .fc-user-role {
            font-size: 10px;
            color: var(--fc-green);
        }

        .fc-user-menu .dropdown-menu {
            background: var(--fc-bg-3);
            border: 1px solid var(--fc-border);
            border-radius: var(--radius);
            padding: 6px;
            min-width: 190px;
            margin-top: 6px !important;
        }

        .fc-user-menu .dropdown-item {
            color: #a8bfc1;
            border-radius: var(--radius-sm);
            font-size: 13px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: background var(--transition), color var(--transition);
        }

        .fc-user-menu .dropdown-item:hover {
            background: var(--fc-green-dim);
            color: var(--fc-text);
        }

        .fc-user-menu .dropdown-divider {
            border-color: var(--fc-border);
            margin: 4px 0;
        }

        .fc-user-menu .dropdown-item.text-danger {
            color: #e07070 !important;
        }

        .fc-user-menu .dropdown-item.text-danger:hover {
            background: rgba(220, 53, 69, 0.1);
        }

        /* ── Page Content ──────────────────────────────── */
        .fc-content {
            flex: 1;
            overflow-y: auto;
            padding: 28px;
            scrollbar-width: thin;
            scrollbar-color: var(--fc-bg-3) transparent;
        }

        .fc-content::-webkit-scrollbar {
            width: 6px;
        }

        .fc-content::-webkit-scrollbar-thumb {
            background: var(--fc-bg-3);
            border-radius: 3px;
        }

        .fc-page-head {
            margin-bottom: 24px;
        }

        .fc-page-title {
            font-family: var(--font-head);
            font-size: 22px;
            font-weight: 700;
            color: var(--fc-text);
            margin: 0 0 4px;
        }

        .fc-page-subtitle {
            font-size: 13px;
            color: var(--fc-muted);
            margin: 0;
        }

        /* ── Footer ────────────────────────────────────── */
        .fc-footer {
            padding: 14px 28px;
            border-top: 1px solid var(--fc-border);
            background: var(--fc-bg-2);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-shrink: 0;
        }

        .fc-footer-copy {
            font-size: 12px;
            color: var(--fc-muted);
        }

        .fc-footer-copy span {
            color: var(--fc-green);
        }

        .fc-footer-links {
            display: flex;
            gap: 16px;
        }

        .fc-footer-links a {
            font-size: 12px;
            color: var(--fc-muted);
            transition: color var(--transition);
        }

        .fc-footer-links a:hover {
            color: var(--fc-green);
        }

        /* ── Overlay (mobile) ──────────────────────────── */
        .fc-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            z-index: 1039;
        }

        /* ── Cards / Utilities ─────────────────────────── */
        .fc-card {
            background: var(--fc-bg-2);
            border: 1px solid var(--fc-border);
            border-radius: var(--radius);
        }

        .fc-card-header {
            padding: 16px 20px;
            border-bottom: 1px solid var(--fc-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .fc-card-title {
            font-family: var(--font-head);
            font-size: 15px;
            font-weight: 600;
            color: var(--fc-text);
            margin: 0;
        }

        .fc-card-body {
            padding: 20px;
        }

        .btn-fc-primary {
            background: var(--fc-green);
            border-color: var(--fc-green);
            color: #fff;
            font-weight: 600;
            font-size: 13.5px;
            border-radius: var(--radius-sm);
            padding: 7px 18px;
            transition: background var(--transition), box-shadow var(--transition);
        }

        .btn-fc-primary:hover {
            background: var(--fc-green-hover);
            border-color: var(--fc-green-hover);
            color: #fff;
            box-shadow: 0 0 0 3px rgba(0, 166, 103, 0.2);
        }

        .btn-fc-ghost {
            background: transparent;
            border: 1px solid var(--fc-border);
            color: var(--fc-muted);
            font-size: 13.5px;
            border-radius: var(--radius-sm);
            padding: 7px 18px;
            transition: border-color var(--transition), color var(--transition);
        }

        .btn-fc-ghost:hover {
            border-color: var(--fc-green);
            color: var(--fc-green);
        }

        .fc-stat-card {
            background: var(--fc-bg-2);
            border: 1px solid var(--fc-border);
            border-radius: var(--radius);
            padding: 20px;
            transition: border-color var(--transition);
        }

        .fc-stat-card:hover {
            border-color: rgba(0, 166, 103, 0.3);
        }

        .fc-stat-icon {
            width: 44px;
            height: 44px;
            border-radius: var(--radius-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            margin-bottom: 14px;
        }

        .fc-stat-icon.green {
            background: var(--fc-green-dim);
            color: var(--fc-green);
        }

        .fc-stat-icon.blue {
            background: rgba(59, 130, 246, 0.12);
            color: #60a5fa;
        }

        .fc-stat-icon.amber {
            background: rgba(245, 158, 11, 0.12);
            color: #fbbf24;
        }

        .fc-stat-icon.purple {
            background: rgba(139, 92, 246, 0.12);
            color: #a78bfa;
        }

        .fc-stat-value {
            font-family: var(--font-head);
            font-size: 26px;
            font-weight: 700;
            color: var(--fc-text);
            line-height: 1;
            margin-bottom: 4px;
        }

        .fc-stat-label {
            font-size: 12px;
            color: var(--fc-muted);
        }

        /* Alerts */
        .fc-alert {
            border-radius: var(--radius-sm);
            padding: 12px 16px;
            font-size: 13px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .fc-alert-success {
            background: rgba(0, 166, 103, 0.1);
            border: 1px solid rgba(0, 166, 103, 0.25);
            color: #6de0b3;
        }

        .fc-alert-danger {
            background: rgba(220, 53, 69, 0.1);
            border: 1px solid rgba(220, 53, 69, 0.25);
            color: #e07070;
        }

        .fc-alert-info {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.25);
            color: #90bffa;
        }

        /* Tables */
        .fc-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 13.5px;
        }

        .fc-table thead th {
            background: var(--fc-bg-3);
            color: var(--fc-muted);
            font-weight: 600;
            font-size: 11px;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            padding: 10px 16px;
            border-bottom: 1px solid var(--fc-border);
        }

        .fc-table tbody td {
            padding: 13px 16px;
            border-bottom: 1px solid var(--fc-border);
            color: var(--fc-text);
            vertical-align: middle;
        }

        .fc-table tbody tr:last-child td {
            border-bottom: none;
        }

        .fc-table tbody tr:hover td {
            background: rgba(255, 255, 255, 0.02);
        }

        /* Status badges */
        .fc-status {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-size: 11px;
            font-weight: 600;
            padding: 3px 10px;
            border-radius: 20px;
        }

        .fc-status::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        .fc-status.approved {
            background: rgba(0, 166, 103, 0.12);
            color: #00c97b;
        }

        .fc-status.approved::before {
            background: #00c97b;
        }

        .fc-status.pending {
            background: rgba(245, 158, 11, 0.12);
            color: #fbbf24;
        }

        .fc-status.pending::before {
            background: #fbbf24;
        }

        .fc-status.rejected {
            background: rgba(220, 53, 69, 0.12);
            color: #f87171;
        }

        .fc-status.rejected::before {
            background: #f87171;
        }

        .fc-status.published {
            background: rgba(59, 130, 246, 0.12);
            color: #60a5fa;
        }

        .fc-status.published::before {
            background: #60a5fa;
        }

        /* ── Responsive ────────────────────────────────── */
        @media (max-width: 991.98px) {
            .fc-sidebar {
                position: fixed;
                left: 0;
                top: 0;
                height: 100%;
                transform: translateX(-100%);
            }

            .fc-sidebar.open {
                transform: translateX(0);
                box-shadow: 4px 0 24px rgba(0, 0, 0, 0.4);
            }

            .fc-overlay.show {
                display: block;
            }

            .fc-sidebar-toggle {
                display: flex;
            }

            .fc-content {
                padding: 20px 16px;
            }

            .fc-footer {
                flex-direction: column;
                gap: 8px;
                text-align: center;
            }
        }

        @media (max-width: 575.98px) {

            .fc-user-label,
            .fc-user-role {
                display: none;
            }

            .fc-header {
                padding: 0 16px;
                gap: 10px;
            }
        }
    </style>

    @stack('styles')
</head>

<body>

    <div class="fc-shell">

        {{-- ── Sidebar ──────────────────────────────────────── --}}
        <aside class="fc-sidebar" id="fcSidebar">

            {{-- Brand --}}
            <div class="fc-brand">
                <div class="fc-brand-icon">FC</div>
                <div>
                    <div class="fc-brand-name">Future Connect</div>
                    <div class="fc-brand-tag">Talent Portal</div>
                </div>
            </div>

            {{-- Profile Card --}}
            <div class="fc-profile-card">
                <div class="fc-avatar">
                    @if(auth()->user()->talent?->image)
                    <img src="{{ asset('storage/' . auth()->user()->talent->image) }}" alt="avatar" />
                    @else
                    {{ strtoupper(substr(auth()->user()->name, 0, 1)) }}
                    @endif
                </div>
                <div class="fc-profile-info">
                    <div class="fc-profile-name">{{ auth()->user()->name }}</div>
                    <div class="fc-profile-badge">
                        <span class="dot"></span>
                        {{ ucfirst(auth()->user()->talent?->status ?? 'talent') }}
                    </div>
                </div>
            </div>

            {{-- Navigation --}}
            <nav class="fc-nav">

                {{-- Overview --}}
                <div class="fc-nav-section">Overview</div>

                <a href="{{ route('talent.dashboard') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.dashboard') ? 'active' : '' }}">
                    <i class="bi bi-grid-1x2"></i>
                    Dashboard
                </a>

                <a href="{{ route('talent.get.profile') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.get.profile') ? 'active' : '' }}">
                    <i class="bi bi-person-circle"></i>
                    My Profile
                </a>

                {{-- Skills & Courses --}}
                <div class="fc-nav-section">Skills & Learning</div>

                <a href="{{ route('talent.skills') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.skills*') ? 'active' : '' }}">
                    <i class="bi bi-lightning-charge"></i>
                    My Skills
                </a>

                <button class="fc-nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target="#coursesMenu"
                    aria-expanded="{{ request()->routeIs('talent.courses*') ? 'true' : 'false' }}">
                    <i class="bi bi-play-circle"></i>
                    Courses
                    <i class="bi bi-chevron-right fc-chevron"></i>
                </button>
                <div class="collapse fc-subnav {{ request()->routeIs('talent.courses*') ? 'show' : '' }}" id="coursesMenu">
                    <a href="{{ route('talent.courses.index') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.courses.index') ? 'active' : '' }}">
                        All Courses
                    </a>
                    <a href="{{ route('talent.courses.create') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.courses.create') ? 'active' : '' }}">
                        Create Course
                    </a>
                </div>

                {{-- Work --}}
                <div class="fc-nav-section">Work & Projects</div>

                <button class="fc-nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target="#jobsMenu"
                    aria-expanded="{{ request()->routeIs('talent.jobs*') ? 'true' : 'false' }}">
                    <i class="bi bi-briefcase"></i>
                    Jobs
                    <i class="bi bi-chevron-right fc-chevron"></i>
                </button>
                <div class="collapse fc-subnav {{ request()->routeIs('talent.jobs*') ? 'show' : '' }}" id="jobsMenu">
                    <a href="{{ route('talent.jobs.index') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.jobs.index') ? 'active' : '' }}">
                        Browse Jobs
                    </a>
                    <a href="{{ route('talent.jobs.create') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.jobs.create') ? 'active' : '' }}">
                        Post a Job
                    </a>
                </div>

                <button class="fc-nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target="#projectsMenu"
                    aria-expanded="{{ request()->routeIs('talent.projects*') ? 'true' : 'false' }}">
                    <i class="bi bi-kanban"></i>
                    Projects
                    <i class="bi bi-chevron-right fc-chevron"></i>
                </button>
                <div class="collapse fc-subnav {{ request()->routeIs('talent.projects*') ? 'show' : '' }}" id="projectsMenu">
                    <a href="{{ route('talent.projects.index') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.projects.index') ? 'active' : '' }}">
                        Browse Projects
                    </a>
                    <a href="{{ route('talent.projects.create') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.projects.create') ? 'active' : '' }}">
                        Post a Project
                    </a>
                </div>

                {{-- Network --}}
                <div class="fc-nav-section">Network</div>

                <a href="{{ route('talent.connections.index') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.connections*') ? 'active' : '' }}">
                    <i class="bi bi-people"></i>
                    Connections
                    {{-- Example: show pending count --}}
                    {{-- @if($pendingCount > 0) <span class="fc-badge">{{ $pendingCount }}</span> @endif --}}
                </a>

                <a href="{{ route('talent.announcements.index') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.announcements*') ? 'active' : '' }}">
                    <i class="bi bi-megaphone"></i>
                    Announcements
                </a>

                <a href="{{ route('talent.events.index') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.events*') ? 'active' : '' }}">
                    <i class="bi bi-calendar-event"></i>
                    Events
                </a>

                {{-- Content --}}
                <div class="fc-nav-section">Content</div>

                <a href="{{ route('talent.page.stories') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.page.stories*') ? 'active' : '' }}">
                    <i class="bi bi-journals"></i>
                    My Stories
                </a>

                <a href="{{ route('talent.testimonials.index') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.testimonials*') ? 'active' : '' }}">
                    <i class="bi bi-chat-quote"></i>
                    Testimonials
                </a>

                {{-- Commerce --}}
                <div class="fc-nav-section">Commerce</div>

                <button class="fc-nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target="#productsMenu"
                    aria-expanded="{{ request()->routeIs('talent.products*') ? 'true' : 'false' }}">
                    <i class="bi bi-bag"></i>
                    Products
                    <i class="bi bi-chevron-right fc-chevron"></i>
                </button>
                <div class="collapse fc-subnav {{ request()->routeIs('talent.products*') ? 'show' : '' }}" id="productsMenu">
                    <a href="{{ route('talent.products.index') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.products.index') ? 'active' : '' }}">
                        My Products
                    </a>
                    <a href="{{ route('talent.products.create') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.products.create') ? 'active' : '' }}">
                        Add Product
                    </a>
                    <a href="{{ route('talent.products.seller') }}"
                        class="fc-nav-item {{ request()->routeIs('talent.products.seller') ? 'active' : '' }}">
                        Become a Seller
                    </a>
                </div>

                {{-- Finance --}}
                <div class="fc-nav-section">Finance</div>

                <a href="{{ route('talent.wallets.index') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.wallets*') ? 'active' : '' }}">
                    <i class="bi bi-wallet2"></i>
                    Wallet
                </a>

                <a href="{{ route('talent.payments.index') }}"
                    class="fc-nav-item {{ request()->routeIs('talent.payments*') ? 'active' : '' }}">
                    <i class="bi bi-receipt"></i>
                    Payments
                </a>

            </nav>

            {{-- Sidebar Footer --}}
            <div class="fc-sidebar-footer">
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="fc-logout-btn">
                        <i class="bi bi-box-arrow-left"></i>
                        Sign Out
                    </button>
                </form>
            </div>

        </aside>{{-- /sidebar --}}

        {{-- Overlay (mobile) --}}
        <div class="fc-overlay" id="fcOverlay"></div>

        {{-- ── Main Area ─────────────────────────────────────── --}}
        <div class="fc-main">

            {{-- Header --}}
            <header class="fc-header">

                {{-- Mobile toggle --}}
                <button class="fc-sidebar-toggle" id="fcToggle" aria-label="Toggle sidebar">
                    <i class="bi bi-list"></i>
                </button>

                {{-- Breadcrumb --}}
                <div class="fc-breadcrumb">
                    <i class="bi bi-house-door"></i>
                    <i class="bi bi-chevron-right"></i>
                    @yield('breadcrumb', '<span class="current">Dashboard</span>')
                </div>

                <div class="fc-header-right">

                    {{-- Quick search --}}
                    <a href="#" class="fc-icon-btn" title="Search">
                        <i class="bi bi-search"></i>
                    </a>

                    {{-- Notifications --}}
                    <a href="{{ route('talent.announcements.index') }}" class="fc-icon-btn" title="Announcements">
                        <i class="bi bi-bell"></i>
                        <span class="fc-notif-dot"></span>
                    </a>

                    {{-- Wallet quick-link --}}
                    <a href="{{ route('talent.wallets.index') }}" class="fc-icon-btn" title="Wallet">
                        <i class="bi bi-wallet2"></i>
                    </a>

                    {{-- User menu --}}
                    <div class="dropdown fc-user-menu">
                        <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="fc-user-avatar-sm">
                                @if(auth()->user()->talent?->image)
                                <img src="{{ asset('storage/' . auth()->user()->talent->image) }}" alt="" />
                                @else
                                {{ strtoupper(substr(auth()->user()->name, 0, 1)) }}
                                @endif
                            </div>
                            <div>
                                <div class="fc-user-label">{{ Str::limit(auth()->user()->name, 16) }}</div>
                                <div class="fc-user-role">Talent</div>
                            </div>
                            <i class="bi bi-chevron-down" style="font-size:11px; color:var(--fc-muted); margin-left:4px;"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a class="dropdown-item" href="{{ route('talent.get.profile') }}">
                                    <i class="bi bi-person"></i> My Profile
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('talent.wallets.index') }}">
                                    <i class="bi bi-wallet2"></i> Wallet
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('talent.payments.index') }}">
                                    <i class="bi bi-receipt"></i> Payments
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li>
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <button type="submit" class="dropdown-item text-danger">
                                        <i class="bi bi-box-arrow-left"></i> Sign Out
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>{{-- /header --}}

            {{-- Flash Messages --}}
            @if(session('success'))
            <div class="mx-4 mt-4">
                <div class="fc-alert fc-alert-success">
                    <i class="bi bi-check-circle-fill mt-1"></i>
                    <span>{{ session('success') }}</span>
                </div>
            </div>
            @endif

            @if(session('error'))
            <div class="mx-4 mt-4">
                <div class="fc-alert fc-alert-danger">
                    <i class="bi bi-exclamation-circle-fill mt-1"></i>
                    <span>{{ session('error') }}</span>
                </div>
            </div>
            @endif

            {{-- Page Content --}}
            <main class="fc-content">
                @yield('content')
            </main>

            {{-- Footer --}}
            <footer class="fc-footer">
                <p class="fc-footer-copy mb-0">
                    &copy; {{ date('Y') }} <span>Future Connect</span>. All rights reserved.
                </p>
                <div class="fc-footer-links">
                    <a href="#">Help</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </footer>

        </div>{{-- /fc-main --}}

    </div>{{-- /fc-shell --}}

    {{-- Bootstrap JS --}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        // Sidebar toggle (mobile)
        const sidebar = document.getElementById('fcSidebar');
        const overlay = document.getElementById('fcOverlay');
        const toggle = document.getElementById('fcToggle');

        function openSidebar() {
            sidebar.classList.add('open');
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeSidebar() {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
        }

        toggle?.addEventListener('click', () => {
            sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
        });

        overlay?.addEventListener('click', closeSidebar);

        // Keep sub-menu chevrons in sync with Bootstrap collapse state
        document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(btn => {
            const target = document.querySelector(btn.getAttribute('data-bs-target'));
            if (!target) return;

            target.addEventListener('show.bs.collapse', () => btn.setAttribute('aria-expanded', 'true'));
            target.addEventListener('hide.bs.collapse', () => btn.setAttribute('aria-expanded', 'false'));
        });
    </script>

    @stack('scripts')
</body>

</html>