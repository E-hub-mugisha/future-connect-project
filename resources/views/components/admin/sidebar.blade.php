@php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

$role = Auth::check() ? Auth::user()->role : null;
$user = Auth::user();
$current = Route::currentRouteName();

$isActive = fn(string $pattern): bool => Str::is($pattern, $current ?? '');
@endphp

<style>
/* ── Sidebar tokens ─────────────────────────── */
:root {
    --sb-bg:       #060f11;
    --sb-surface:  #0d1e22;
    --sb-border:   rgba(72, 213, 151, 0.10);
    --accent:      #48d597;
    --accent-dim:  rgba(72, 213, 151, 0.10);
    --accent-glow: rgba(72, 213, 151, 0.18);
    --text-hi:     #f0faf6;
    --text-mid:    #7aa89f;
    --text-lo:     #3e5e58;
    --danger:      #e85c6a;
}

/* ── Sidebar shell ──────────────────────────── */
.fc-sidebar {
    position: fixed;
    top: 0; left: 0;
    width: 248px;
    height: 100vh;
    background: var(--sb-bg);
    border-right: 1px solid var(--sb-border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1040;
}

/* ── Brand ──────────────────────────────────── */
.fc-sidebar-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 18px 16px;
    border-bottom: 1px solid var(--sb-border);
    flex-shrink: 0;
}
.fc-brand-logo {
    height: 30px;
    object-fit: contain;
}
.fc-brand-name {
    font-size: .88rem;
    font-weight: 800;
    color: var(--text-hi);
    letter-spacing: .3px;
}

/* ── Profile block ──────────────────────────── */
.fc-profile-block {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 14px 18px;
    border-bottom: 1px solid var(--sb-border);
    flex-shrink: 0;
}
.fc-avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: var(--accent-dim);
    border: 1.5px solid rgba(72,213,151,.25);
    color: var(--accent);
    font-size: .72rem;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    letter-spacing: .5px;
}
.fc-profile-info { flex: 1; min-width: 0; }
.fc-profile-name {
    color: var(--text-hi);
    font-size: .82rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.fc-profile-role {
    color: var(--text-lo);
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: .5px;
}
.fc-online-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    box-shadow: 0 0 0 2px rgba(72,213,151,.2);
}

/* ── Scrollable nav body ────────────────────── */
.fc-nav-body {
    flex: 1;
    overflow-y: auto;
    padding: 10px 0 20px;
    scrollbar-width: thin;
    scrollbar-color: var(--sb-border) transparent;
}
.fc-nav-body::-webkit-scrollbar { width: 3px; }
.fc-nav-body::-webkit-scrollbar-track { background: transparent; }
.fc-nav-body::-webkit-scrollbar-thumb { background: var(--sb-border); border-radius: 3px; }

/* ── Section labels ─────────────────────────── */
.fc-nav-section {
    padding: 16px 18px 5px;
    font-size: .64rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-lo);
}

/* ── Nav items ──────────────────────────────── */
.fc-nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 18px;
    margin: 1px 8px;
    border-radius: 8px;
    color: var(--text-mid);
    font-size: .82rem;
    font-weight: 500;
    text-decoration: none;
    border: none;
    background: transparent;
    width: calc(100% - 16px);
    text-align: left;
    cursor: pointer;
    transition: background .15s, color .15s;
    position: relative;
}
.fc-nav-item:hover {
    background: var(--accent-dim);
    color: var(--text-hi);
    text-decoration: none;
}
.fc-nav-item.active {
    background: var(--accent-glow);
    color: var(--accent);
    font-weight: 600;
}
.fc-nav-item.active::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%; transform: translateY(-50%);
    width: 3px; height: 60%;
    background: var(--accent);
    border-radius: 0 3px 3px 0;
}

/* ── Nav icons ──────────────────────────────── */
.fc-nav-icon {
    width: 18px; height: 18px;
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
}
.fc-nav-icon svg { width: 16px; height: 16px; }
.fc-nav-item i {
    font-size: .95rem;
    width: 18px;
    text-align: center;
    flex-shrink: 0;
}

/* Chevron for collapsibles */
.fc-chevron {
    margin-left: auto;
    font-size: .65rem !important;
    transition: transform .2s;
    opacity: .5;
    width: auto !important;
}
.fc-nav-item[aria-expanded="true"] .fc-chevron { transform: rotate(90deg); }

/* ── Sub-nav (collapsible) ──────────────────── */
.fc-subnav {
    padding-left: 20px;
    margin: 0 8px;
}
.fc-subnav .fc-nav-item {
    font-size: .78rem;
    padding: 7px 14px;
    color: var(--text-mid);
    margin: 1px 0;
}
.fc-subnav .fc-nav-item::before { left: 0; }

/* ── Badge ──────────────────────────────────── */
.fc-badge {
    margin-left: auto;
    background: var(--accent);
    color: var(--sb-bg);
    border-radius: 20px;
    font-size: .62rem;
    font-weight: 700;
    padding: 2px 7px;
    min-width: 18px;
    text-align: center;
}

/* ── Sidebar footer (logout) ────────────────── */
.fc-sidebar-footer {
    flex-shrink: 0;
    border-top: 1px solid var(--sb-border);
    padding: 10px 8px;
}
.fc-logout-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 18px;
    border-radius: 8px;
    color: var(--danger);
    font-size: .82rem;
    font-weight: 500;
    background: transparent;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    transition: background .15s;
}
.fc-logout-btn:hover { background: rgba(232,92,106,.10); }
.fc-logout-btn i { font-size: .95rem; width: 18px; text-align: center; }
</style>

<nav class="fc-sidebar" id="sidebar">

    {{-- Brand --}}
    <div class="fc-sidebar-brand">
        <img class="fc-brand-logo" src="{{ asset('assets/img/WORDMARK.png') }}" alt="logo">
    </div>

    {{-- Profile --}}
    <div class="fc-profile-block">
        <div class="fc-avatar">{{ strtoupper(substr(Auth::user()->name, 0, 2)) }}</div>
        <div class="fc-profile-info">
            <div class="fc-profile-name">{{ Auth::user()->name }}</div>
            <div class="fc-profile-role">{{ ucfirst(Auth::user()->role) }}</div>
        </div>
        <div class="fc-online-dot" title="Online"></div>
    </div>

    {{-- Nav body --}}
    <div class="fc-nav-body">

        {{-- ═══════════════════════════════════════
             ADMIN
        ════════════════════════════════════════ --}}
        @if($role === 'admin')

        <div class="fc-nav-section">Overview</div>

        <a href="/admin/dashboard"
            class="fc-nav-item {{ $isActive('admin.dashboard') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/>
                    <rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>
                </svg>
            </span>
            Dashboard
        </a>

        <div class="fc-nav-section">Users & Access</div>

        <a href="/admin/users"
            class="fc-nav-item {{ $isActive('admin.users.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            </span>
            Users
        </a>

        <a href="/admin/talents"
            class="fc-nav-item {{ $isActive('admin.talents.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            </span>
            Talents
        </a>

        <a href="/admin/partners"
            class="fc-nav-item {{ $isActive('admin.partners.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            </span>
            Partners
        </a>

        <div class="fc-nav-section">Content</div>

        <a href="/admin/categories"
            class="fc-nav-item {{ $isActive('admin.categories.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
                </svg>
            </span>
            Categories
        </a>

        <a href="/admin/skills"
            class="fc-nav-item {{ $isActive('admin.skills.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
            </span>
            Skills
        </a>

        <a href="/admin/courses"
            class="fc-nav-item {{ $isActive('admin.courses.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
            </span>
            Courses
        </a>

        <a href="/admin/stories"
            class="fc-nav-item {{ $isActive('admin.stories.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
            </span>
            Stories
        </a>

        <a href="/admin/testimonials"
            class="fc-nav-item {{ $isActive('admin.testimonials.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </span>
            Testimonials
        </a>

        <a href="/admin/announcements"
            class="fc-nav-item {{ $isActive('admin.announcements.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
            </span>
            Announcements
        </a>

        <div class="fc-nav-section">Platform</div>

        <a href="/admin/jobs"
            class="fc-nav-item {{ $isActive('admin.jobs.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
            </span>
            Jobs
        </a>

        <a href="/admin/projects"
            class="fc-nav-item {{ $isActive('admin.projects.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
            </span>
            Projects
        </a>

        <a href="/admin/events"
            class="fc-nav-item {{ $isActive('admin.events.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
            </span>
            Events
        </a>

        <a href="/admin/connections"
            class="fc-nav-item {{ $isActive('admin.connections.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                </svg>
            </span>
            Connections
        </a>

        <div class="fc-nav-section">Commerce</div>

        <a href="/admin/products"
            class="fc-nav-item {{ $isActive('admin.products.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
            </span>
            Products
        </a>

        <a href="/admin/sellers"
            class="fc-nav-item {{ $isActive('admin.sellers.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
            </span>
            Sellers
        </a>

        <a href="/admin/payments"
            class="fc-nav-item {{ $isActive('admin.payments.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
            </span>
            Payments
        </a>

        <a href="/admin/wallets"
            class="fc-nav-item {{ $isActive('admin.wallets.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="1" y="4" width="22" height="16" rx="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
            </span>
            Wallets
        </a>

        <div class="fc-nav-section">System</div>

        <a href="/admin/login-activity"
            class="fc-nav-item {{ $isActive('admin.login-activity.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
            </span>
            Login Activity
        </a>

        <a href="/admin/settings"
            class="fc-nav-item {{ $isActive('admin.settings.*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
            </span>
            Settings
        </a>

        {{-- ═══════════════════════════════════════
             TALENT
        ════════════════════════════════════════ --}}
        @elseif($role === 'talent')

        <div class="fc-nav-section">Overview</div>

        <a href="{{ route('talent.dashboard') }}"
            class="fc-nav-item {{ request()->routeIs('talent.dashboard') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/>
                    <rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>
                </svg>
            </span>
            Dashboard
        </a>

        <a href="{{ route('talent.get.profile') }}"
            class="fc-nav-item {{ request()->routeIs('talent.get.profile') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
            </span>
            My Profile
        </a>

        <div class="fc-nav-section">Skills & Learning</div>

        <a href="{{ route('talent.skills') }}"
            class="fc-nav-item {{ request()->routeIs('talent.skills*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
            </span>
            My Skills
        </a>

        <button class="fc-nav-item"
            data-bs-toggle="collapse"
            data-bs-target="#coursesMenu"
            aria-expanded="{{ request()->routeIs('talent.courses*') ? 'true' : 'false' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
            </span>
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

        <div class="fc-nav-section">Work & Projects</div>

        <button class="fc-nav-item"
            data-bs-toggle="collapse"
            data-bs-target="#jobsMenu"
            aria-expanded="{{ request()->routeIs('talent.jobs*') ? 'true' : 'false' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
            </span>
            Jobs
            <i class="bi bi-chevron-right fc-chevron"></i>
        </button>
        <div class="collapse fc-subnav {{ request()->routeIs('talent.jobs*') ? 'show' : '' }}" id="jobsMenu">
            <a href="{{ route('talent.jobs.index') }}"
                class="fc-nav-item {{ request()->routeIs('talent.jobs.index') ? 'active' : '' }}">Browse Jobs</a>
            <a href="{{ route('talent.jobs.create') }}"
                class="fc-nav-item {{ request()->routeIs('talent.jobs.create') ? 'active' : '' }}">Post a Job</a>
        </div>

        <button class="fc-nav-item"
            data-bs-toggle="collapse"
            data-bs-target="#projectsMenu"
            aria-expanded="{{ request()->routeIs('talent.projects*') ? 'true' : 'false' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
            </span>
            Projects
            <i class="bi bi-chevron-right fc-chevron"></i>
        </button>
        <div class="collapse fc-subnav {{ request()->routeIs('talent.projects*') ? 'show' : '' }}" id="projectsMenu">
            <a href="{{ route('talent.projects.index') }}"
                class="fc-nav-item {{ request()->routeIs('talent.projects.index') ? 'active' : '' }}">Browse Projects</a>
            <a href="{{ route('talent.projects.create') }}"
                class="fc-nav-item {{ request()->routeIs('talent.projects.create') ? 'active' : '' }}">Post a Project</a>
        </div>

        <div class="fc-nav-section">Network</div>

        <a href="{{ route('talent.connections.index') }}"
            class="fc-nav-item {{ request()->routeIs('talent.connections*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            </span>
            Connections
        </a>

        <a href="{{ route('talent.announcements.index') }}"
            class="fc-nav-item {{ request()->routeIs('talent.announcements*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
            </span>
            Announcements
        </a>

        <a href="{{ route('talent.events.index') }}"
            class="fc-nav-item {{ request()->routeIs('talent.events*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
            </span>
            Events
        </a>

        <div class="fc-nav-section">Content</div>

        <a href="{{ route('talent.page.stories') }}"
            class="fc-nav-item {{ request()->routeIs('talent.page.stories*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
            </span>
            My Stories
        </a>

        <a href="{{ route('talent.testimonials.index') }}"
            class="fc-nav-item {{ request()->routeIs('talent.testimonials*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </span>
            Testimonials
        </a>

        <div class="fc-nav-section">Commerce</div>

        <button class="fc-nav-item"
            data-bs-toggle="collapse"
            data-bs-target="#productsMenu"
            aria-expanded="{{ request()->routeIs('talent.products*') ? 'true' : 'false' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
            </span>
            Products
            <i class="bi bi-chevron-right fc-chevron"></i>
        </button>
        <div class="collapse fc-subnav {{ request()->routeIs('talent.products*') ? 'show' : '' }}" id="productsMenu">
            <a href="{{ route('talent.products.index') }}"
                class="fc-nav-item {{ request()->routeIs('talent.products.index') ? 'active' : '' }}">My Products</a>
            <a href="{{ route('talent.products.create') }}"
                class="fc-nav-item {{ request()->routeIs('talent.products.create') ? 'active' : '' }}">Add Product</a>
            <a href="{{ route('talent.products.seller') }}"
                class="fc-nav-item {{ request()->routeIs('talent.products.seller') ? 'active' : '' }}">Become a Seller</a>
        </div>

        <div class="fc-nav-section">Finance</div>

        <a href="{{ route('talent.wallets.index') }}"
            class="fc-nav-item {{ request()->routeIs('talent.wallets*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="1" y="4" width="22" height="16" rx="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
            </span>
            Wallet
        </a>

        <a href="{{ route('talent.payments.index') }}"
            class="fc-nav-item {{ request()->routeIs('talent.payments*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
            </span>
            Payments
        </a>

        {{-- ═══════════════════════════════════════
             USER
        ════════════════════════════════════════ --}}
        @elseif($role === 'user')

        <div class="fc-nav-section">Overview</div>

        <a href="{{ route('user.dashboard') }}"
            class="fc-nav-item {{ request()->routeIs('user.dashboard') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/>
                    <rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>
                </svg>
            </span>
            Dashboard
        </a>

        <div class="fc-nav-section">Network</div>

        <a href="{{ route('user.talents.connected') }}"
            class="fc-nav-item {{ request()->routeIs('user.talents.connected') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
            </span>
            Talents Connected
        </a>

        <a href="{{ route('user.connections') }}"
            class="fc-nav-item {{ request()->routeIs('user.connections') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            </span>
            Connection Requests
        </a>

        <div class="fc-nav-section">Learning</div>

        <a href="/user/courses"
            class="fc-nav-item {{ request()->is('user/courses*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
            </span>
            Courses
        </a>

        <a href="/admin/skills"
            class="fc-nav-item {{ request()->is('admin/skills*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
            </span>
            Skills
        </a>

        <div class="fc-nav-section">Discover</div>

        <a href="/admin/announcements"
            class="fc-nav-item {{ request()->is('admin/announcements*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
            </span>
            Announcements
        </a>

        <a href="/admin/partners"
            class="fc-nav-item {{ request()->is('admin/partners*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            </span>
            Partners
        </a>

        <a href="/admin/testimonials"
            class="fc-nav-item {{ request()->is('admin/testimonials*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </span>
            Testimonials
        </a>

        <div class="fc-nav-section">Finance</div>

        <a href="/admin/payments"
            class="fc-nav-item {{ request()->is('admin/payments*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
            </span>
            Payments
        </a>

        <a href="/user/subscription"
            class="fc-nav-item {{ request()->is('user/subscription*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/>
                    <path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                </svg>
            </span>
            Subscriptions
        </a>

        <a href="/admin/users"
            class="fc-nav-item {{ request()->is('admin/users*') ? 'active' : '' }}">
            <span class="fc-nav-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            </span>
            Users
        </a>

        @endif

    </div>
    {{-- /fc-nav-body --}}

    {{-- Footer: Sign out --}}
    <div class="fc-sidebar-footer">
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" class="fc-logout-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                    style="width:16px;height:16px;flex-shrink:0">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Sign Out
            </button>
        </form>
    </div>

</nav>