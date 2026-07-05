@extends('layouts.auth')
@section('title', 'Forgot Password')
@section('content')

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

    .fp-scope, .fp-scope *, .fp-scope *::before, .fp-scope *::after { box-sizing: border-box; }

    :root {
        --fp-bg: #0e1618;
        --fp-surface: #131e21;
        --fp-border: #1f2f33;
        --fp-green: #48d597;
        --fp-green-hover: #00bd76;
        --fp-green-dim: rgba(0, 166, 103, .12);
        --fp-green-glow: rgba(0, 166, 103, .28);
        --fp-text: #e8f0ef;
        --fp-muted: #6a8a85;
        --fp-input-bg: #0b1315;
    }

    .fp-scope {
        min-height: 100vh;
        background: var(--fp-bg);
        font-family: 'DM Sans', sans-serif;
        color: var(--fp-text);
        margin: -1px 0 0;
    }

    /* ── Page layout ── */
    .fp-page {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px 16px;
        position: relative;
        overflow: hidden;
    }

    .fp-page::before {
        content: '';
        position: fixed; inset: 0;
        background-image:
            linear-gradient(rgba(0, 166, 103, .04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 166, 103, .04) 1px, transparent 1px);
        background-size: 40px 40px;
        pointer-events: none;
        z-index: 0;
    }

    .fp-orb { position: fixed; border-radius: 50%; pointer-events: none; filter: blur(60px); z-index: 0; }
    .fp-orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,166,103,.1) 0%, transparent 70%); top: -120px; right: -120px; }
    .fp-orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,166,103,.07) 0%, transparent 70%); bottom: -100px; left: -80px; }

    /* ── Back button ── */
    .fp-back-nav { position: fixed; top: 24px; left: 24px; z-index: 5; }
    .fp-back-btn {
        display: inline-flex; align-items: center; gap: 8px;
        background: rgba(19, 30, 33, .7); backdrop-filter: blur(8px);
        border: 1.5px solid var(--fp-border); border-radius: 99px;
        padding: 9px 16px 9px 12px;
        font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
        color: var(--fp-muted); text-decoration: none; cursor: pointer;
        transition: border-color .2s, color .2s, background .2s, transform .15s;
    }
    .fp-back-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform .2s; }
    .fp-back-btn:hover { color: var(--fp-green); border-color: rgba(0,166,103,.35); background: rgba(19, 30, 33, .9); transform: translateX(-2px); }
    .fp-back-btn:hover svg { transform: translateX(-2px); }

    @media (max-width: 480px) {
        .fp-back-nav { top: 14px; left: 14px; }
        .fp-back-btn span { display: none; }
        .fp-back-btn { padding: 10px; }
    }

    /* ── Card ── */
    .fp-card {
        display: flex;
        width: 100%;
        max-width: 980px;
        min-height: 580px;
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid var(--fp-border);
        position: relative; z-index: 1;
        animation: fpFadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
        box-shadow: 0 40px 80px rgba(0, 0, 0, .4);
    }

    @keyframes fpFadeUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Left panel (identical branding to the login page) ── */
    .fp-panel-left {
        flex: 1;
        background: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
        padding: 52px 44px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        border-right: 1px solid var(--fp-border);
    }

    .fp-panel-left::before, .fp-panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
    .fp-panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
    .fp-panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

    .fp-dots {
        position: absolute; top: 44px; right: 40px;
        display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px;
        opacity: .25;
    }
    .fp-dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--fp-green); display: block; }

    .fp-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; position: relative; z-index: 1; }
    .fp-logo-mark {
        width: 36px; height: 36px; background: var(--fp-green); border-radius: 9px;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .fp-logo-mark svg { width: 18px; height: 18px; fill: var(--fp-bg); }
    .fp-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--fp-text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
    .fp-logo-tagline { font-size: 11px; color: #4e6b70; letter-spacing: .3px; margin: 0; line-height: 1; }

    .fp-pill {
        display: inline-flex; align-items: center; gap: 6px;
        background: rgba(0,166,103,.1); border: 1px solid rgba(0,166,103,.2);
        border-radius: 99px; padding: 5px 12px;
        font-size: 11.5px; color: var(--fp-green); font-weight: 500;
        margin-bottom: 28px; position: relative; z-index: 1; width: fit-content;
    }
    .fp-pill::before {
        content: ''; width: 6px; height: 6px; border-radius: 50%;
        background: var(--fp-green); display: inline-block;
        animation: fpPulse 2s ease infinite;
    }
    @keyframes fpPulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

    .fp-tagline { position: relative; z-index: 1; }
    .fp-tagline h2 {
        font-family: 'Syne', sans-serif;
        font-size: clamp(24px, 3vw, 36px); font-weight: 800;
        line-height: 1.15; letter-spacing: -1.2px;
        color: var(--fp-text); margin-bottom: 18px;
    }
    .fp-tagline h2 em { font-style: normal; color: var(--fp-green); }
    .fp-tagline p { color: var(--fp-muted); font-size: 14px; line-height: 1.65; max-width: 280px; }

    .fp-stats { display: flex; position: relative; z-index: 1; }
    .fp-stat { padding: 16px 20px; background: rgba(0,166,103,.06); border: 1px solid rgba(0,166,103,.12); border-radius: 10px; flex: 1; }
    .fp-stat + .fp-stat { margin-left: 10px; }
    .fp-stat-val { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--fp-green); letter-spacing: -1px; }
    .fp-stat-lbl { font-size: 10.5px; color: var(--fp-muted); text-transform: uppercase; letter-spacing: .6px; margin-top: 2px; }

    /* ── Right form panel ── */
    .fp-panel-right {
        width: 420px; flex-shrink: 0;
        background: var(--fp-surface);
        padding: 52px 44px;
        display: flex; flex-direction: column; justify-content: center;
        position: relative;
    }
    .fp-panel-right::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, var(--fp-green), transparent);
        opacity: .6;
    }

    .fp-form-head { margin-bottom: 30px; }
    .fp-eyebrow {
        display: inline-flex; align-items: center; gap: 7px;
        font-size: 10.5px; font-weight: 600; color: var(--fp-green);
        text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 12px;
    }
    .fp-eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--fp-green); border-radius: 2px; display: inline-block; }
    .fp-form-head h1 { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: var(--fp-text); letter-spacing: -1px; line-height: 1.1; }
    .fp-form-head p { margin-top: 12px; font-size: 13.5px; color: var(--fp-muted); line-height: 1.65; }

    .fp-field { margin-bottom: 22px; }
    .fp-field label { display: block; font-size: 11.5px; font-weight: 600; color: var(--fp-muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 8px; }

    .fp-input-wrap { position: relative; }
    .fp-input-wrap .fp-ico {
        position: absolute; left: 15px; top: 50%; transform: translateY(-50%);
        width: 16px; height: 16px; color: var(--fp-muted); pointer-events: none; transition: color .2s;
    }
    .fp-input-wrap:focus-within .fp-ico { color: var(--fp-green); }

    .fp-input {
        width: 100%; background: var(--fp-input-bg);
        border: 1.5px solid var(--fp-border); border-radius: 10px;
        padding: 13px 16px 13px 44px;
        font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--fp-text); outline: none;
        transition: border-color .2s, box-shadow .2s, background .2s;
    }
    .fp-input::placeholder { color: #2d4844; }
    .fp-input:focus { border-color: var(--fp-green); box-shadow: 0 0 0 4px var(--fp-green-dim); background: #0d1719; }

    .fp-field-error { font-size: 12px; color: #e07070; margin-top: 6px; }
    .fp-status { font-size: 13px; color: var(--fp-green); background: var(--fp-green-dim); border: 1px solid rgba(0,166,103,.25); border-radius: 10px; padding: 12px 14px; margin-bottom: 22px; }

    .fp-btn {
        width: 100%; padding: 15px;
        background: linear-gradient(135deg, var(--fp-green), #009a5e);
        color: #fff; border: none; border-radius: 10px;
        font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: .2px;
        cursor: pointer; position: relative; overflow: hidden;
        transition: transform .15s, box-shadow .2s, background .2s;
    }
    .fp-btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(255,255,255,.09), transparent); pointer-events: none; }
    .fp-btn:hover { background: linear-gradient(135deg, var(--fp-green-hover), #00a65e); box-shadow: 0 12px 32px var(--fp-green-glow); transform: translateY(-2px); }
    .fp-btn:active { transform: translateY(0); box-shadow: none; }
    .fp-btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

    .fp-divider { display: flex; align-items: center; gap: 12px; margin: 24px 0; color: var(--fp-muted); font-size: 12px; }
    .fp-divider::before, .fp-divider::after { content: ''; flex: 1; height: 1px; background: var(--fp-border); }

    .fp-signup-row { text-align: center; font-size: 13px; color: var(--fp-muted); }
    .fp-signup-row a { color: var(--fp-green); text-decoration: none; font-weight: 600; }
    .fp-signup-row a:hover { text-decoration: underline; }

    /* ─────────── RESPONSIVE ─────────── */
    @media (max-width: 820px) {
        .fp-card { flex-direction: column; min-height: unset; max-width: 520px; border-radius: 16px; }
        .fp-panel-left { flex: none; padding: 36px 32px 32px; border-right: none; border-bottom: 1px solid var(--fp-border); }
        .fp-dots { display: none; }
        .fp-tagline h2 { font-size: 22px; margin-bottom: 12px; }
        .fp-tagline p { display: none; }
        .fp-stat { padding: 12px 14px; }
        .fp-stat-val { font-size: 17px; }
        .fp-pill { margin-bottom: 20px; }
        .fp-panel-right { width: 100%; padding: 36px 32px 40px; }
        .fp-panel-right::before { display: none; }
    }

    @media (max-width: 520px) {
        .fp-page { padding: 16px; }
        .fp-card { border-radius: 14px; }
        .fp-panel-left { padding: 28px 24px 24px; }
        .fp-logo-wordmark { font-size: 14px; }
        .fp-tagline h2 { font-size: 20px; }
        .fp-stat { padding: 10px 12px; }
        .fp-stat-val { font-size: 16px; }
        .fp-stat-lbl { font-size: 10px; }
        .fp-panel-right { padding: 28px 24px 36px; }
        .fp-form-head h1 { font-size: 22px; }
    }

    @media (max-width: 380px) {
        .fp-stats { flex-direction: column; gap: 8px; }
        .fp-stat + .fp-stat { margin-left: 0; margin-top: 8px; }
    }
</style>

<div class="fp-scope">
    <div class="fp-page">
        <div class="fp-orb fp-orb-1"></div>
        <div class="fp-orb fp-orb-2"></div>

        {{-- ── Back button ── --}}
        <div class="fp-back-nav">
            <a href="{{ route('login') }}" class="fp-back-btn" id="fpBackBtn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                <span>Back to login</span>
            </a>
        </div>

        <div class="fp-card">

            {{-- ── Left branding panel — identical to the login page ── --}}
            <div class="fp-panel-left">
                <div class="fp-dots">
                    @for ($i = 0; $i < 20; $i++)<span></span>@endfor
                </div>

                <a href="{{ route('user.home') }}" class="fp-logo-lockup">
                    <div class="fp-logo-mark">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <div>
                        <p class="fp-logo-wordmark">Future Connect</p>
                        <p class="fp-logo-tagline">Empowering Stories. Real Impact.</p>
                    </div>
                </a>

                <div>
                    <div class="fp-pill">Rwanda's #1 skills Platform</div>
                    <div class="fp-tagline">
                        <h2>Empowering<br><em>skills,</em><br>Opportunities<br>&amp; Growth.</h2>
                        <p>Connect with verified employers, showcase your skills, and unlock new career paths — all in one place.</p>
                    </div>
                </div>

                <div class="fp-stats">
                    <div class="fp-stat">
                        <div class="fp-stat-val">8K+</div>
                        <div class="fp-stat-lbl">Skills</div>
                    </div>
                    <div class="fp-stat">
                        <div class="fp-stat-val">4.8★</div>
                        <div class="fp-stat-lbl">Rating</div>
                    </div>
                    <div class="fp-stat">
                        <div class="fp-stat-val">100%</div>
                        <div class="fp-stat-lbl">Verified</div>
                    </div>
                </div>
            </div>

            {{-- ── Right form panel ── --}}
            <div class="fp-panel-right">
                <div class="fp-form-head">
                    <div class="fp-eyebrow">Reset password</div>
                    <h1>Forgot your<br>password?</h1>
                    <p>No problem. Enter your email address and we'll send you a link to choose a new one.</p>
                </div>

                @if (session('status'))
                    <div class="fp-status">{{ session('status') }}</div>
                @endif

                <form method="POST" action="{{ route('password.email') }}">
                    @csrf

                    {{-- Email --}}
                    <div class="fp-field">
                        <label for="email">{{ __('Email Address') }}</label>
                        <div class="fp-input-wrap">
                            <svg class="fp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <input id="email" class="fp-input" type="email" name="email"
                                value="{{ old('email') }}" placeholder="you@example.com"
                                required autofocus autocomplete="username" />
                        </div>
                        @error('email')
                            <div class="fp-field-error">{{ $message }}</div>
                        @enderror
                    </div>

                    {{-- Submit --}}
                    <button class="fp-btn" type="submit">
                        <span class="fp-btn-inner">
                            {{ __('Email Password Reset Link') }}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
                    </button>
                </form>

                <div class="fp-divider">or</div>

                <div class="fp-signup-row">
                    Remember your password? <a href="{{ route('login') }}">Log in</a>
                </div>
            </div>

        </div>
    </div>
</div>

@endsection