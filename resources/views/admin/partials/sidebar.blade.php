{{--
    resources/views/admin/partials/sidebar.blade.php
    Admin sidebar navigation. Active state driven by Route::currentRouteName().
--}}

@php
    $current = Route::currentRouteName();
@endphp

<aside class="sidebar">

    {{-- Logo --}}
    <div class="sidebar-logo">
        <div class="logo-mark">FC</div>
        <div class="logo-text">
            Future Connect
            <span>Admin Panel</span>
        </div>
    </div>

    {{-- Overview --}}
    <div class="sidebar-section">Overview</div>

    <a href="{{ route('admin.dashboard') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.dashboard') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
        </span>
        Dashboard
    </a>

    <a href="{{ route('admin.users.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.users') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        </span>
        Users
        @if($userCount ?? 0)
            <span class="nav-badge">{{ number_format($userCount) }}</span>
        @endif
    </a>

    <a href="{{ route('admin.talents.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.talents') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
        </span>
        Talents
        @if($talentCount ?? 0)
            <span class="nav-badge">{{ $talentCount }}+</span>
        @endif
    </a>

    <a href="{{ route('admin.jobs.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.jobs') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
        </span>
        Jobs & Work
    </a>

    <a href="{{ route('admin.learning.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.learning') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
        </span>
        Learning Hub
    </a>

    {{-- Platform --}}
    <div class="sidebar-section">Platform</div>

    <a href="{{ route('admin.marketplace.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.marketplace') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
        </span>
        Marketplace
    </a>

    <a href="{{ route('admin.verification.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.verification') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
        </span>
        Verification
        @if(($pendingVerifications ?? 0) > 0)
            <span class="nav-badge red">{{ $pendingVerifications }}</span>
        @endif
    </a>

    <a href="{{ route('admin.revenue.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.revenue') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
        </span>
        Revenue
    </a>

    <a href="{{ route('admin.connections.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.connections') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
            </svg>
        </span>
        Connection Room
    </a>

    {{-- System --}}
    <div class="sidebar-section">System</div>

    <a href="{{ route('admin.settings.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.settings') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.07 4.93A10 10 0 0 1 21 12a10 10 0 0 1-1.93 5.07M4.93 4.93A10 10 0 0 0 3 12a10 10 0 0 0 1.93 5.07"/>
            </svg>
        </span>
        Settings
    </a>

    <a href="{{ route('admin.announcements.index') }}"
       class="nav-item {{ Str::startsWith($current, 'admin.announcements') ? 'active' : '' }}">
        <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
        </span>
        Announcements
    </a>

    {{-- Admin Profile --}}
    <div class="sidebar-bottom">
        <div class="admin-card">
            <div class="admin-avatar">
                {{ strtoupper(substr(auth()->user()->name ?? 'A', 0, 1)) }}{{ strtoupper(substr(explode(' ', auth()->user()->name ?? 'D')[1] ?? 'D', 0, 1)) }}
            </div>
            <div class="admin-info">
                <div class="admin-name">{{ auth()->user()->name ?? 'Administrator' }}</div>
                <div class="admin-role">{{ ucfirst(auth()->user()->role ?? 'Super Admin') }}</div>
            </div>
            <form method="POST" action="{{ route('logout') }}" style="margin:0">
                @csrf
                <button type="submit" style="background:none;border:none;cursor:pointer;color:rgba(255,255,255,0.4);display:flex;" title="Log out">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                </button>
            </form>
        </div>
    </div>

</aside>
