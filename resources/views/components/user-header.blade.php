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
    --h-bg:       #0e1618;
    --h-surface:  #141d20;
    --h-surface2: #1a2428;
    --h-green:    #48d597;
    --h-green-d:  rgba(0,166,103,0.14);
    --h-green-b:  rgba(0,166,103,0.22);
    --h-text:     #e8f0ed;
    --h-muted:    #7a9a8e;
    --h-border:   rgba(0,166,103,0.16);
    --h-border-h: rgba(0,166,103,0.38);
    --h-radius:   10px;
}

.fc-header *, .fc-header *::before, .fc-header *::after { box-sizing: border-box; }
.fc-header a { text-decoration: none; }

/* ══════════════════════════════════════
   TOP INFO BAR
══════════════════════════════════════ */
.fc-topbar {
    background: #080f11;
    border-bottom: 1px solid rgba(0,166,103,0.1);
    padding: 6px 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--h-muted);
}
.fc-topbar .fc-tb-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.fc-topbar .fc-tb-contact { display: flex; align-items: center; gap: 16px; }
.fc-topbar .fc-tb-contact span { display: flex; align-items: center; gap: 5px; }
.fc-topbar .fc-tb-contact span::before {
    content: '';
    display: inline-block;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--h-green);
}
.fc-topbar .fc-tb-social { display: flex; gap: 12px; }
.fc-topbar .fc-tb-social a { color: var(--h-muted); font-size: 13px; transition: color 0.2s; }
.fc-topbar .fc-tb-social a:hover { color: var(--h-green); }

/* ══════════════════════════════════════
   MAIN HEADER
══════════════════════════════════════ */
.fc-header {
    background: var(--h-bg);
    border-bottom: 1px solid var(--h-border);
    position: sticky;
    top: 0;
    z-index: 999;
    transition: box-shadow 0.3s;
}
.fc-header.scrolled {
    box-shadow: 0 4px 24px rgba(0,0,0,0.35);
    background: rgba(14,22,24,0.97);
    backdrop-filter: blur(12px);
}
.fc-header-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
    height: 66px;
    display: flex;
    align-items: center;
    gap: 32px;
    font-family: 'DM Sans', sans-serif;
}

/* Logo */
.fc-logo-wrap { display: flex; align-items: center; gap: 9px; flex-shrink: 0; text-decoration: none; }
.fc-logo-mark {
    width: 32px; height: 32px;
    border-radius: 8px;
    background: var(--h-green);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-weight: 800; font-size: 13px; color: #fff;
}
.fc-logo-name { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; color: #fff; line-height: 1; }
.fc-logo-name span { color: var(--h-green); }

/* ── DESKTOP NAV ── */
.fc-nav { display: flex; align-items: center; gap: 2px; list-style: none; margin: 0; padding: 0; flex: 1; }
.fc-nav > li { position: relative; }
.fc-nav > li > a {
    display: flex; align-items: center; gap: 4px;
    padding: 8px 11px;
    font-size: 13.5px; font-weight: 400;
    color: var(--h-muted);
    border-radius: 7px;
    transition: color 0.2s, background 0.2s;
    white-space: nowrap;
}
.fc-nav > li > a:hover,
.fc-nav > li:hover > a { color: #fff; background: rgba(255,255,255,0.05); }
.fc-nav > li > a .chevron { font-size: 10px; margin-top: 1px; transition: transform 0.2s; opacity: 0.6; }
.fc-nav > li:hover > a .chevron { transform: rotate(180deg); opacity: 1; }

/* ── DROPDOWN ── */
.fc-dropdown {
    position: absolute; top: calc(100% + 10px); left: 0;
    background: var(--h-surface);
    border: 1px solid var(--h-border);
    border-radius: 14px; padding: 8px; min-width: 180px;
    list-style: none; margin: 0;
    opacity: 0; visibility: hidden; transform: translateY(6px);
    transition: all 0.2s ease;
    box-shadow: 0 16px 48px rgba(0,0,0,0.4);
    z-index: 100;
}
.fc-nav > li:hover .fc-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
.fc-dropdown li a { display: block; padding: 8px 12px; font-size: 13px; color: var(--h-muted); border-radius: 8px; transition: color 0.18s, background 0.18s; }
.fc-dropdown li a:hover { color: #fff; background: var(--h-green-d); }
.fc-dropdown .fc-dd-label { padding: 8px 12px 4px; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: rgba(122,154,142,0.6); font-weight: 500; }
.fc-dropdown .fc-dd-sep { height: 1px; background: var(--h-border); margin: 6px 8px; }

/* ── MEGA MENU ── */
.fc-mega {
    position: absolute; top: calc(100% + 10px); left: -120px;
    background: var(--h-surface);
    border: 1px solid var(--h-border);
    border-radius: 16px; padding: 20px; width: 600px;
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;
    opacity: 0; visibility: hidden; transform: translateY(6px);
    transition: all 0.22s ease;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    z-index: 100;
}
.fc-nav > li:hover .fc-mega { opacity: 1; visibility: visible; transform: translateY(0); }
.fc-mega-col h6 {
    font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.8px; text-transform: uppercase;
    color: var(--h-green); margin: 0 0 8px; padding: 0 8px;
}
.fc-mega-col ul { list-style: none; margin: 0; padding: 0; }
.fc-mega-col ul li a { display: block; padding: 6px 8px; font-size: 13px; color: var(--h-muted); border-radius: 7px; transition: color 0.18s, background 0.18s; }
.fc-mega-col ul li a:hover { color: #fff; background: var(--h-green-d); }

/* ── RIGHT ACTIONS ── */
.fc-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; margin-left: auto; }

.fc-btn-ghost {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 16px;
    border: 1px solid var(--h-border); border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 400;
    color: var(--h-muted); background: transparent;
    cursor: pointer; transition: all 0.2s;
}
.fc-btn-ghost:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255,255,255,0.04); }

.fc-btn-green {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 18px;
    background: var(--h-green);
    border: 1px solid var(--h-green); border-radius: 8px;
    font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600;
    color: #fff; cursor: pointer; transition: all 0.2s; white-space: nowrap;
}
.fc-btn-green:hover { background: #00c07a; border-color: #00c07a; transform: translateY(-1px); }

.fc-btn-search {
    width: 38px; height: 38px;
    border: 1px solid var(--h-border); border-radius: 8px;
    background: transparent; color: var(--h-muted);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.2s; font-size: 15px;
}
.fc-btn-search:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255,255,255,0.04); }

/* ── MOBILE + ICON REGISTER BUTTON ── */
.fc-btn-register-mobile {
    width: 38px; height: 38px;
    background: var(--h-green);
    border: none; border-radius: 8px;
    color: #fff;
    display: none;
    align-items: center; justify-content: center;
    font-size: 20px;
    text-decoration: none;
    flex-shrink: 0;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
}
.fc-btn-register-mobile:hover { background: #00c07a; transform: translateY(-1px); }

/* ── LOGIN DROPDOWN PANEL ── */
.fc-login-wrap { position: relative; }
.fc-login-panel {
    position: absolute; top: calc(100% + 12px); right: 0;
    width: 360px;
    background: var(--h-surface);
    border: 1px solid var(--h-border);
    border-radius: 18px; padding: 28px;
    opacity: 0; visibility: hidden;
    transform: translateY(8px) scale(0.98);
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 24px 64px rgba(0,0,0,0.55);
    z-index: 200; overflow: hidden;
}
.fc-login-panel::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--h-green), transparent);
    border-radius: 18px 18px 0 0;
}
.fc-login-panel.open { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }
.fc-lp-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
.fc-lp-head-left h4 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0 0 3px; }
.fc-lp-head-left p { font-size: 12px; color: var(--h-muted); margin: 0; }
.fc-lp-close {
    width: 30px; height: 30px; border-radius: 7px;
    background: var(--h-surface2); border: 1px solid var(--h-border);
    color: var(--h-muted); display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 14px; transition: all 0.2s; flex-shrink: 0;
}
.fc-lp-close:hover { color: #fff; border-color: var(--h-border-h); }
.fc-lp-field { margin-bottom: 14px; }
.fc-lp-field label { display: block; font-size: 10px; font-weight: 500; letter-spacing: 0.8px; text-transform: uppercase; color: var(--h-muted); margin-bottom: 6px; }
.fc-lp-input-wrap { position: relative; }
.fc-lp-input-wrap .fc-lp-icon { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); color: var(--h-muted); font-size: 14px; pointer-events: none; }
.fc-lp-field input {
    width: 100%; background: var(--h-surface2);
    border: 1px solid var(--h-border); border-radius: var(--h-radius);
    color: var(--h-text); font-family: 'DM Sans', sans-serif; font-size: 13.5px;
    padding: 11px 14px 11px 38px; outline: none;
    transition: border-color 0.2s, background 0.2s;
}
.fc-lp-field input::placeholder { color: #3d5a52; }
.fc-lp-field input:focus { border-color: var(--h-green); background: rgba(0,166,103,0.06); }
.fc-lp-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.fc-lp-remember { display: flex; align-items: center; gap: 7px; cursor: pointer; }
.fc-lp-remember input { accent-color: var(--h-green); cursor: pointer; }
.fc-lp-remember span { font-size: 12px; color: var(--h-muted); }
.fc-lp-forgot { font-size: 12px; color: var(--h-green); font-weight: 500; }
.fc-lp-forgot:hover { text-decoration: underline; }
.fc-lp-submit {
    width: 100%; padding: 12px;
    background: var(--h-green); border: none; border-radius: var(--h-radius);
    font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
    color: #fff; cursor: pointer; transition: background 0.2s, transform 0.15s;
    letter-spacing: 0.2px;
}
.fc-lp-submit:hover { background: #00c07a; transform: translateY(-1px); }
.fc-lp-footer { text-align: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--h-border); font-size: 12.5px; color: var(--h-muted); }
.fc-lp-footer a { color: var(--h-green); font-weight: 500; }
.fc-lp-footer a:hover { text-decoration: underline; }

/* ── HAMBURGER — icon-based ── */
.fc-hamburger {
    display: none;
    width: 38px; height: 38px;
    align-items: center; justify-content: center;
    cursor: pointer; border-radius: 8px;
    border: 1px solid var(--h-border);
    background: transparent; color: var(--h-muted);
    font-size: 22px; flex-shrink: 0;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.fc-hamburger:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255,255,255,0.04); }

/* ── MOBILE DRAWER ── */
.fc-drawer { display: none; position: fixed; inset: 0; z-index: 1050; pointer-events: none; }
.fc-drawer.open { pointer-events: auto; }
.fc-drawer-bg { position: absolute; inset: 0; background: rgba(0,0,0,0.7); opacity: 0; transition: opacity 0.3s; }
.fc-drawer.open .fc-drawer-bg { opacity: 1; }
.fc-drawer-panel {
    position: absolute; left: 0; top: 0; bottom: 0; width: 300px;
    background: var(--h-surface); border-right: 1px solid var(--h-border);
    padding: 24px 20px; transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    overflow-y: auto;
}
.fc-drawer.open .fc-drawer-panel { transform: translateX(0); }
.fc-drawer-logo { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--h-border); }
.fc-drawer-close {
    width: 30px; height: 30px; border-radius: 7px;
    background: var(--h-surface2); border: 1px solid var(--h-border);
    color: var(--h-muted); display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 14px; transition: all 0.2s;
}
.fc-drawer-close:hover { color: #fff; }
.fc-drawer-nav { list-style: none; margin: 0; padding: 0; }
.fc-drawer-nav > li > a { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; font-size: 14px; color: var(--h-muted); border-radius: 8px; transition: color 0.18s, background 0.18s; }
.fc-drawer-nav > li > a:hover { color: #fff; background: var(--h-green-d); }
.fc-drawer-sub { list-style: none; margin: 0; padding: 0 0 4px 12px; display: none; }
.fc-drawer-sub.open { display: block; }
.fc-drawer-sub li a { display: block; padding: 7px 12px; font-size: 13px; color: var(--h-muted); border-radius: 7px; transition: color 0.18s, background 0.18s; }
.fc-drawer-sub li a:hover { color: #fff; background: var(--h-green-d); }
.fc-drawer-sub-label { padding: 8px 12px 2px; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: var(--h-green); opacity: 0.7; }
.fc-drawer-ctas { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--h-border); display: flex; flex-direction: column; gap: 10px; }
.fc-drawer-ctas .fc-btn-ghost,
.fc-drawer-ctas .fc-btn-green { width: 100%; justify-content: center; }

/* ── SEARCH OVERLAY ── */
.fc-search-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
    z-index: 1100; display: flex; align-items: center; justify-content: center;
    opacity: 0; visibility: hidden; transition: all 0.25s;
}
.fc-search-overlay.open { opacity: 1; visibility: visible; }
.fc-search-box { width: 100%; max-width: 640px; padding: 0 24px; }
.fc-search-box p { text-align: center; font-size: 13px; color: var(--h-muted); margin: 0 0 20px; font-family: 'DM Sans', sans-serif; }
.fc-search-input-wrap { position: relative; }
.fc-search-input-wrap input {
    width: 100%; background: var(--h-surface);
    border: 1px solid var(--h-border-h); border-radius: 14px;
    color: var(--h-text); font-family: 'DM Sans', sans-serif; font-size: 18px;
    padding: 18px 60px 18px 24px; outline: none; transition: border-color 0.2s;
}
.fc-search-input-wrap input::placeholder { color: #3d5a52; }
.fc-search-input-wrap input:focus { border-color: var(--h-green); }
.fc-search-submit {
    position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
    width: 36px; height: 36px; background: var(--h-green);
    border: none; border-radius: 8px; color: #fff; font-size: 15px;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
}
.fc-search-submit:hover { background: #00c07a; }
.fc-search-close {
    position: absolute; top: 24px; right: 24px;
    width: 36px; height: 36px; border-radius: 9px;
    background: var(--h-surface); border: 1px solid var(--h-border);
    color: var(--h-muted); cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; transition: all 0.2s;
}
.fc-search-close:hover { color: #fff; border-color: var(--h-border-h); }

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
    .fc-nav > li > a { padding: 8px 8px; font-size: 13px; }
}

@media (max-width: 900px) {
    .fc-nav { display: none; }
    .fc-hamburger { display: flex; }
    .fc-drawer { display: block; }
    .fc-topbar { display: none; }
    .fc-btn-ghost.fc-sign-in-desktop { display: none; }
    .fc-btn-green.fc-register-desktop { display: none; }
    .fc-btn-register-mobile { display: flex; }
}

@media (max-width: 480px) {
    .fc-header-inner { padding: 0 16px; }
}
</style>

{{-- ════════════════════ TOP INFO BAR ════════════════════ --}}
<div class="fc-topbar d-none d-lg-block">
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

{{-- ════════════════════ MAIN HEADER ════════════════════ --}}
<header class="fc-header" id="fcHeader">
    <div class="fc-header-inner">

        {{-- Logo --}}
        <a href="{{ route('user.home') }}" class="fc-logo-wrap">
            <div class="fc-logo-mark">FC</div>
            <div class="fc-logo-name">Future<span>Connect</span></div>
        </a>

        {{-- Desktop Navigation --}}
        <ul class="fc-nav">

            <li>
                <a href="{{ route('user.jobs.index') }}">Find Opportunities</a>
            </li>

            {{-- Skills Hub — mega menu --}}
            <li>
                <a href="javascript:void(0)">Skills Hub <span class="chevron">▾</span></a>
                <div class="fc-mega">
                    <div class="fc-mega-col">
                        <h6>Browse</h6>
                        <ul>
                            <li><a href="{{ route('user.talents') }}">Find Skills</a></li>
                            <li><a href="#">Verified</a></li>
                            <li><a href="#">Top Rated</a></li>
                        </ul>
                    </div>
                    <div class="fc-mega-col">
                        <h6>Categories</h6>
                        <ul>
                            @foreach($categories as $cat)
                            <li><a href="{{ url('/talents/category/' . $cat->slug) }}">{{ $cat->name }}</a></li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="fc-mega-col">
                        <h6>Hire</h6>
                        <ul>
                            <li><a href="#">Post a Job</a></li>
                            <li><a href="#">For a Project</a></li>
                            <li><a href="#">Quick Hire</a></li>
                        </ul>
                    </div>
                    <div class="fc-mega-col">
                        <h6>Register</h6>
                        <ul>
                            <li><a href="{{ route('user.register_as_talent') }}">Register Skills</a></li>
                            <li><a href="{{ route('user.how-it-works') }}">How It Works</a></li>
                            <li><a href="#">Success Stories</a></li>
                        </ul>
                    </div>
                </div>
            </li>

            <li>
                <a href="{{ route('user.courses') }}">Learning Hub</a>
            </li>

            <li>
                <a href="{{ route('user.products.index') }}">Marketplace</a>
            </li>

            <li>
                <a href="{{ route('talent.connections-room') }}">Connection Room</a>
            </li>

            {{-- More dropdown --}}
            <li>
                <a href="javascript:void(0)">More <span class="chevron">▾</span></a>
                <ul class="fc-dropdown">
                    <li class="fc-dd-label">Discover</li>
                    <li><a href="{{ route('user.announcements') }}">Updates</a></li>
                    <li><a href="{{ route('pricing') }}">Pricing</a></li>
                    <li><a href="{{ route('user.how-it-works') }}">How It Works</a></li>
                    <li class="fc-dd-sep"></li>
                    <li><a href="{{ route('user.contact') }}">Help &amp; Support</a></li>
                </ul>
            </li>

        </ul>

        {{-- Right Actions --}}
        <div class="fc-actions">

            {{-- Search button --}}
            <button class="fc-btn-search" id="fcSearchBtn" aria-label="Search">
                <i class="ti ti-search"></i>
            </button>

            @auth
            {{-- Dashboard link --}}
            @php
            $dashboards = [
                'admin'   => 'admin.dashboard',
                'agent'   => 'agent.dashboard',
                'talent'  => 'talent.dashboard',
                'seller'  => 'seller.dashboard',
                'user'    => 'user.dashboard',
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
            <a href="{{ route('user.register_as_talent') }}"
               class="fc-btn-register-mobile"
               aria-label="Register Skills"
               title="Register Skills">
                <i class="ti ti-plus"></i>
            </a>

            {{-- Desktop: full text button (hidden on small screens) --}}
            <a href="{{ route('user.register_as_talent') }}" class="fc-btn-green fc-register-desktop">
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

{{-- ════════════════════ MOBILE DRAWER ════════════════════ --}}
<div class="fc-drawer" id="fcDrawer">
    <div class="fc-drawer-bg" id="fcDrawerBg"></div>
    <div class="fc-drawer-panel">

        <div class="fc-drawer-logo">
            <a href="{{ route('user.home') }}" class="fc-logo-wrap">
                <div class="fc-logo-mark">FC</div>
                <div class="fc-logo-name">Future<span>Connect</span></div>
            </a>
            <button class="fc-drawer-close" id="fcDrawerClose">✕</button>
        </div>

        <ul class="fc-drawer-nav">
            <li><a href="{{ route('user.jobs.index') }}">Find Opportunities</a></li>
            <li>
                <a href="javascript:void(0)" onclick="toggleDrawerSub(this)">
                    Skills Hub <span>▾</span>
                </a>
                <ul class="fc-drawer-sub">
                    <li class="fc-drawer-sub-label">Browse</li>
                    <li><a href="{{ route('user.talents') }}">Find Skills</a></li>
                    <li><a href="#">Verified Skills</a></li>
                    <li class="fc-drawer-sub-label">Hire</li>
                    <li><a href="#">Post a Job</a></li>
                    <li><a href="#">Quick Hire</a></li>
                    <li class="fc-drawer-sub-label">Register</li>
                    <li><a href="{{ route('user.register_as_talent') }}">Register Skills</a></li>
                </ul>
            </li>
            <li><a href="{{ route('user.courses') }}">Learning Hub</a></li>
            <li><a href="{{ route('user.products.index') }}">Marketplace</a></li>
            <li><a href="{{ route('talent.connections-room') }}">Connection Room</a></li>
            <li><a href="{{ route('user.announcements') }}">Updates</a></li>
            <li><a href="{{ route('pricing') }}">Pricing</a></li>
            <li><a href="{{ route('user.contact') }}">Help</a></li>
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
            <a href="{{ route('user.register_as_talent') }}" class="fc-btn-green">Register Skills</a>
            @endauth
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

{{-- ════════════════════ SCRIPTS ════════════════════ --}}
<script>
(function() {

    /* ── Sticky scroll ── */
    const header = document.getElementById('fcHeader');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* ── Login panel toggle ── */
    const signInBtn  = document.getElementById('fcSignInBtn');
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
    const searchBtn     = document.getElementById('fcSearchBtn');
    const searchOverlay = document.getElementById('fcSearchOverlay');
    const searchClose   = document.getElementById('fcSearchClose');

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
    const hamburger   = document.getElementById('fcHamburger');
    const drawer      = document.getElementById('fcDrawer');
    const drawerBg    = document.getElementById('fcDrawerBg');
    const drawerClose = document.getElementById('fcDrawerClose');

    function openDrawer()  { drawer.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeDrawer() { drawer.classList.remove('open'); document.body.style.overflow = ''; }

    hamburger  && hamburger.addEventListener('click', openDrawer);
    drawerClose && drawerClose.addEventListener('click', closeDrawer);
    drawerBg   && drawerBg.addEventListener('click', closeDrawer);

    /* ── Mobile drawer sub-menus ── */
    window.toggleDrawerSub = function(el) {
        const sub = el.nextElementSibling;
        if (sub && sub.classList.contains('fc-drawer-sub')) {
            sub.classList.toggle('open');
        }
    };

    /* ── Mobile login (opens login panel from drawer) ── */
    window.openMobileLogin = function() {
        closeDrawer();
        if (loginPanel) {
            setTimeout(() => loginPanel.classList.add('open'), 350);
            document.getElementById('fcSignInBtn') && document.getElementById('fcSignInBtn').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

})();
</script>