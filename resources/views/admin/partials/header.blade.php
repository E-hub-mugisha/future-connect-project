{{--
    resources/views/admin/partials/header.blade.php
    Sticky top header for admin panel pages.
    Accepts: $pageTitle, $pageSubtitle (optional, set in each view)
--}}
<header class="header">

    {{-- Page title --}}
    <div style="flex:1">
        <div class="header-title">@yield('page_title', 'Dashboard Overview')</div>
        <div class="header-date">
            {{ now()->isoFormat('dddd, D MMMM YYYY') }} &nbsp;·&nbsp; Kigali, Rwanda
        </div>
    </div>

    {{-- Search --}}
    <div class="search-bar">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="text" placeholder="Search platform…" id="admin-search" />
    </div>

    {{-- Notifications --}}
    <a href="{{ route('admin.notifications') }}" class="header-btn" title="Notifications">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        @if(($unreadNotifications ?? 0) > 0)
            <div class="notif-dot"></div>
        @endif
    </a>

    {{-- Messages --}}
    <a href="{{ route('admin.messages') }}" class="header-btn" title="Messages">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
        </svg>
    </a>

</header>
