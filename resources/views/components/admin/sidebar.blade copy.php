@php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

$role = Auth::check() ? Auth::user()->role : null;
$user = Auth::user();
$current = Route::currentRouteName();

// Helper: is current route active?
$isActive = fn(string $pattern): string =>
Str::is($pattern, $current ?? '') ? 'active' : '';
@endphp

{{-- ═══════════════════════════════════════════════════
     Future Connect — Admin Sidebar
     resources/views/admin/partials/sidebar.blade.php
     ═══════════════════════════════════════════════════ --}}

<style>
    /* ── FC Sidebar ───────────────────────────────────────── */
    :root {
        --fc-bg: #051321;
        --fc-bg-2: #060f11;
        --fc-bg-3: #0b2540;
        --fc-green: #48d597;
        --fc-green-dim: rgba(0, 166, 103, 0.12);
        --fc-green-border: rgba(0, 166, 103, 0.30);
        --fc-white: #F5f5f7;
        --fc-w90: rgba(255, 255, 255, 0.90);
        --fc-w60: rgba(255, 255, 255, 0.60);
        --fc-w30: rgba(255, 255, 255, 0.30);
        --fc-w10: rgba(255, 255, 255, 0.07);
        --fc-w05: rgba(255, 255, 255, 0.04);
        --fc-border: rgba(255, 255, 255, 0.08);
        --fc-red: #e05c5c;
        --fc-amber: #e8a44a;
        --fc-blue: #4a9de0;
        --fc-sidebar-w: 260px;
        --fc-radius: 12px;
        --fc-radius-sm: 8px;
    }

    /* Override NioKit sidebar shell */
    .nk-sidebar.nk-sidebar-fixed {
        width: var(--fc-sidebar-w) !important;
        background: var(--fc-bg-2) !important;
        border-right: 1px solid var(--fc-border) !important;
        font-family: 'DM Sans', 'Inter', sans-serif !important;
    }

    /* ── Head ─────────────────────────────────────────────── */
    .nk-sidebar-head {
        padding: 20px 20px 16px !important;
        border-bottom: 1px solid var(--fc-border) !important;
        background: var(--fc-bg-2) !important;
    }

    .fc-logo-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .fc-logo-mark {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: var(--fc-green);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Syne', 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 15px;
        color: #fff;
        flex-shrink: 0;
    }

    .fc-logo-text {
        font-family: 'Syne', 'DM Sans', sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: var(--fc-white);
        line-height: 1.2;
        letter-spacing: 0.01em;
    }

    .fc-logo-text small {
        display: block;
        font-size: 10px;
        font-weight: 400;
        color: var(--fc-w30);
        letter-spacing: 0.06em;
        margin-top: 1px;
    }

    /* ── Body scroll ──────────────────────────────────────── */
    .nk-sidebar-body {
        background: var(--fc-bg-2) !important;
    }

    .nk-sidebar-content {
        background: var(--fc-bg-2) !important;
    }

    .nk-sidebar-menu {
        padding: 8px 0 80px !important;
    }

    /* ── Section headings ─────────────────────────────────── */
    .fc-section {
        padding: 18px 16px 6px;
        font-size: 9.5px;
        font-weight: 500;
        letter-spacing: 0.10em;
        text-transform: uppercase;
        color: var(--fc-w30);
    }

    /* ── Nav items ────────────────────────────────────────── */
    .nk-menu {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nk-menu-item {
        margin: 1px 8px;
    }

    .nk-menu-link {
        display: flex !important;
        align-items: center !important;
        gap: 11px !important;
        padding: 9px 14px !important;
        border-radius: var(--fc-radius-sm) !important;
        font-size: 13.5px !important;
        color: var(--fc-w60) !important;
        text-decoration: none !important;
        transition: all 0.18s ease !important;
        border: 1px solid transparent !important;
        position: relative;
    }

    .nk-menu-link:hover {
        background: var(--fc-w10) !important;
        color: var(--fc-white) !important;
        text-decoration: none !important;
    }

    .nk-menu-link.active {
        background: var(--fc-green-dim) !important;
        color: var(--fc-green) !important;
        border-color: var(--fc-green-border) !important;
    }

    .nk-menu-link.active .fc-nav-icon {
        color: var(--fc-green) !important;
    }

    /* ── Nav icon wrapper ─────────────────────────────────── */
    .fc-nav-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
    }

    .fc-nav-icon svg {
        width: 17px;
        height: 17px;
    }

    .nk-menu-link:hover .fc-nav-icon {
        color: var(--fc-white);
    }

    /* ── Badge pills ──────────────────────────────────────── */
    .fc-pill {
        margin-left: auto;
        font-size: 10px;
        font-weight: 600;
        padding: 2px 7px;
        border-radius: 20px;
        line-height: 1.4;
    }

    .fc-pill-green {
        background: var(--fc-green);
        color: #fff;
    }

    .fc-pill-red {
        background: var(--fc-red);
        color: #fff;
    }

    .fc-pill-amber {
        background: var(--fc-amber);
        color: #fff;
    }

    /* ── Admin profile card ───────────────────────────────── */
    .fc-sidebar-foot {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 12px 16px;
        border-top: 1px solid var(--fc-border);
        background: var(--fc-bg-2);
    }

    .fc-admin-card {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 9px 11px;
        background: var(--fc-w10);
        border-radius: var(--fc-radius-sm);
        cursor: pointer;
    }

    .fc-admin-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--fc-green), #007a4d);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 12px;
        color: #fff;
        font-family: 'Syne', 'DM Sans', sans-serif;
    }

    .fc-admin-info {
        flex: 1;
        min-width: 0;
    }

    .fc-admin-name {
        font-size: 12.5px;
        font-weight: 500;
        color: var(--fc-white);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .fc-admin-role {
        font-size: 10.5px;
        color: var(--fc-w60);
        margin-top: 1px;
    }

    .fc-logout-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--fc-w30);
        display: flex;
        padding: 0;
        transition: color 0.15s;
    }

    .fc-logout-btn:hover {
        color: var(--fc-red);
    }

    /* ── Scrollbar ────────────────────────────────────────── */
    .nk-sidebar-menu::-webkit-scrollbar {
        width: 4px;
    }

    .nk-sidebar-menu::-webkit-scrollbar-track {
        background: transparent;
    }

    .nk-sidebar-menu::-webkit-scrollbar-thumb {
        background: var(--fc-w10);
        border-radius: 4px;
    }

    /* ── Mobile toggle ────────────────────────────────────── */
    .nk-nav-toggle {
        color: var(--fc-w60) !important;
    }

    .nk-nav-toggle:hover {
        color: var(--fc-white) !important;
    }
</style>

<div class="nk-sidebar nk-sidebar-fixed is-dark" data-content="sidebarMenu">

    {{-- ── Head ─────────────────────────────────────────── --}}
    <div class="nk-sidebar-element nk-sidebar-head">
        <div class="nk-menu-trigger">
            <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
            </a>
        </div>
        <a href="{{ route('user.home') }}" class="fc-logo-wrap" style="text-decoration:none">
            <div class="fc-logo-mark">FC</div>
            <div class="fc-logo-text">
                Future Connect
                <small>Admin Panel</small>
            </div>
        </a>
    </div>

    {{-- ── Body ─────────────────────────────────────────── --}}
    <div class="nk-sidebar-element nk-sidebar-body">
        <div class="nk-sidebar-content">
            <div class="nk-sidebar-menu" data-simplebar>
                <ul class="nk-menu">

                    @if($role === 'admin')

                    {{-- Overview --}}
                    <div class="fc-section">Overview</div>

                    <li class="nk-menu-item">
                        <a href="/admin/dashboard" class="nk-menu-link {{ $isActive('admin.dashboard') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                </svg>
                            </span>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/talents" class="nk-menu-link {{ $isActive('admin.talents.index*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </span>
                            <span>Talents</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/users" class="nk-menu-link {{ $isActive('admin.users.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </span>
                            <span>Users</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/categories" class="nk-menu-link {{ $isActive('admin.categories.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                </svg>
                            </span>
                            <span>Categories</span>
                        </a>
                    </li>

                    {{-- Content --}}
                    <div class="fc-section">Content</div>

                    <li class="nk-menu-item">
                        <a href="/admin/stories" class="nk-menu-link {{ $isActive('admin.stories.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M12 20h9" />
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                </svg>
                            </span>
                            <span>Stories</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/skills" class="nk-menu-link {{ $isActive('admin.skills.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </span>
                            <span>Skills</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/courses" class="nk-menu-link {{ $isActive('admin.courses.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                </svg>
                            </span>
                            <span>Courses</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/announcements" class="nk-menu-link {{ $isActive('admin.announcements.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </span>
                            <span>Announcements</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/testimonials" class="nk-menu-link {{ $isActive('admin.testimonials.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </span>
                            <span>Testimonials</span>
                        </a>
                    </li>

                    {{-- Platform --}}
                    <div class="fc-section">Platform</div>

                    <li class="nk-menu-item">
                        <a href="/admin/jobs" class="nk-menu-link {{ $isActive('admin.jobs.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" />
                                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                </svg>
                            </span>
                            <span>Jobs</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/projects" class="nk-menu-link {{ $isActive('admin.projects.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                                </svg>
                            </span>
                            <span>Projects</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/events" class="nk-menu-link {{ $isActive('admin.events.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </span>
                            <span>Events</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/connections" class="nk-menu-link {{ $isActive('admin.connections.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                                </svg>
                            </span>
                            <span>Connections</span>
                        </a>
                    </li>

                    {{-- Commerce --}}
                    <div class="fc-section">Commerce</div>

                    <li class="nk-menu-item">
                        <a href="/admin/products" class="nk-menu-link {{ $isActive('admin.products.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                            </span>
                            <span>Products</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/sellers" class="nk-menu-link {{ $isActive('admin.sellers.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </span>
                            <span>Sellers</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/payments" class="nk-menu-link {{ $isActive('admin.payments.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </span>
                            <span>Payments</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/wallets" class="nk-menu-link {{ $isActive('admin.wallets.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </span>
                            <span>Wallets</span>
                        </a>
                    </li>

                    {{-- System --}}
                    <div class="fc-section">System</div>

                    <li class="nk-menu-item">
                        <a href="/admin/partners" class="nk-menu-link {{ $isActive('admin.partners.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </span>
                            <span>Partners</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/login-activity" class="nk-menu-link {{ $isActive('admin.login-activity.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </span>
                            <span>Login Activity</span>
                        </a>
                    </li>

                    <li class="nk-menu-item">
                        <a href="/admin/settings" class="nk-menu-link {{ $isActive('admin.settings.*') }}">
                            <span class="fc-nav-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg>
                            </span>
                            <span>Settings</span>
                        </a>
                    </li>

                    @endif {{-- end admin --}}

                </ul>
            </div>
        </div>
    </div>

    {{-- ── Admin profile card ────────────────────────────── --}}
    @auth
    <div class="fc-sidebar-foot">
        <div class="fc-admin-card">
            <div class="fc-admin-avatar">
                @php
                $parts = explode(' ', trim($user->name ?? 'Admin User'));
                $initials = strtoupper(substr($parts[0], 0, 1) . substr($parts[1] ?? '', 0, 1));
                @endphp
                {{ $initials }}
            </div>
            <div class="fc-admin-info">
                <div class="fc-admin-name">{{ $user->name ?? 'Administrator' }}</div>
                <div class="fc-admin-role">{{ ucfirst($user->role ?? 'admin') }}</div>
            </div>
            <form method="POST" action="{{ route('logout') }}" style="margin:0">
                @csrf
                <button type="submit" class="fc-logout-btn" title="Log out">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                </button>
            </form>
        </div>
    </div>
    @endauth

</div>