@extends('layouts.auth')
@section('title', 'Reset Password')
@section('content')

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

    .rp-scope, .rp-scope *, .rp-scope *::before, .rp-scope *::after { box-sizing: border-box; }

    :root {
        --rp-bg: #0e1618;
        --rp-surface: #131e21;
        --rp-border: #1f2f33;
        --rp-green: #48d597;
        --rp-green-hover: #00bd76;
        --rp-green-dim: rgba(0, 166, 103, .12);
        --rp-green-glow: rgba(0, 166, 103, .28);
        --rp-text: #e8f0ef;
        --rp-muted: #6a8a85;
        --rp-input-bg: #0b1315;
    }

    .rp-scope {
        min-height: 100vh;
        background: var(--rp-bg);
        font-family: 'DM Sans', sans-serif;
        color: var(--rp-text);
        margin: -1px 0 0;
    }

    .rp-page {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px 16px;
        position: relative;
        overflow: hidden;
    }

    .rp-page::before {
        content: '';
        position: fixed; inset: 0;
        background-image:
            linear-gradient(rgba(0, 166, 103, .04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 166, 103, .04) 1px, transparent 1px);
        background-size: 40px 40px;
        pointer-events: none;
        z-index: 0;
    }

    .rp-orb { position: fixed; border-radius: 50%; pointer-events: none; filter: blur(60px); z-index: 0; }
    .rp-orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,166,103,.1) 0%, transparent 70%); top: -120px; right: -120px; }
    .rp-orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,166,103,.07) 0%, transparent 70%); bottom: -100px; left: -80px; }

    .rp-back-nav { position: fixed; top: 24px; left: 24px; z-index: 5; }
    .rp-back-btn {
        display: inline-flex; align-items: center; gap: 8px;
        background: rgba(19, 30, 33, .7); backdrop-filter: blur(8px);
        border: 1.5px solid var(--rp-border); border-radius: 99px;
        padding: 9px 16px 9px 12px;
        font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
        color: var(--rp-muted); text-decoration: none; cursor: pointer;
        transition: border-color .2s, color .2s, background .2s, transform .15s;
    }
    .rp-back-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform .2s; }
    .rp-back-btn:hover { color: var(--rp-green); border-color: rgba(0,166,103,.35); background: rgba(19, 30, 33, .9); transform: translateX(-2px); }
    .rp-back-btn:hover svg { transform: translateX(-2px); }

    @media (max-width: 480px) {
        .rp-back-nav { top: 14px; left: 14px; }
        .rp-back-btn span { display: none; }
        .rp-back-btn { padding: 10px; }
    }

    .rp-card {
        display: flex;
        width: 100%;
        max-width: 980px;
        min-height: 580px;
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid var(--rp-border);
        position: relative; z-index: 1;
        animation: rpFadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
        box-shadow: 0 40px 80px rgba(0, 0, 0, .4);
    }

    @keyframes rpFadeUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    .rp-panel-left {
        flex: 1;
        background: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
        padding: 52px 44px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        border-right: 1px solid var(--rp-border);
    }

    .rp-panel-left::before, .rp-panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
    .rp-panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
    .rp-panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

    .rp-dots {
        position: absolute; top: 44px; right: 40px;
        display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px;
        opacity: .25;
    }
    .rp-dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--rp-green); display: block; }

    .rp-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; position: relative; z-index: 1; }
    .rp-logo-mark {
        width: 36px; height: 36px; background: var(--rp-green); border-radius: 9px;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .rp-logo-mark svg { width: 18px; height: 18px; fill: var(--rp-bg); }
    .rp-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--rp-text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
    .rp-logo-tagline { font-size: 11px; color: #4e6b70; letter-spacing: .3px; margin: 0; line-height: 1; }

    .rp-pill {
        display: inline-flex; align-items: center; gap: 6px;
        background: rgba(0,166,103,.1); border: 1px solid rgba(0,166,103,.2);
        border-radius: 99px; padding: 5px 12px;
        font-size: 11.5px; color: var(--rp-green); font-weight: 500;
        margin-bottom: 28px; position: relative; z-index: 1; width: fit-content;
    }
    .rp-pill::before {
        content: ''; width: 6px; height: 6px; border-radius: 50%;
        background: var(--rp-green); display: inline-block;
        animation: rpPulse 2s ease infinite;
    }
    @keyframes rpPulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

    .rp-tagline { position: relative; z-index: 1; }
    .rp-tagline h2 {
        font-family: 'Syne', sans-serif;
        font-size: clamp(24px, 3vw, 36px); font-weight: 800;
        line-height: 1.15; letter-spacing: -1.2px;
        color: var(--rp-text); margin-bottom: 18px;
    }
    .rp-tagline h2 em { font-style: normal; color: var(--rp-green); }
    .rp-tagline p { color: var(--rp-muted); font-size: 14px; line-height: 1.65; max-width: 280px; }

    .rp-stats { display: flex; position: relative; z-index: 1; }
    .rp-stat { padding: 16px 20px; background: rgba(0,166,103,.06); border: 1px solid rgba(0,166,103,.12); border-radius: 10px; flex: 1; }
    .rp-stat + .rp-stat { margin-left: 10px; }
    .rp-stat-val { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--rp-green); letter-spacing: -1px; }
    .rp-stat-lbl { font-size: 10.5px; color: var(--rp-muted); text-transform: uppercase; letter-spacing: .6px; margin-top: 2px; }

    .rp-panel-right {
        width: 460px; flex-shrink: 0;
        background: var(--rp-surface);
        padding: 52px 44px;
        display: flex; flex-direction: column; justify-content: center;
        position: relative;
    }
    .rp-panel-right::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, var(--rp-green), transparent);
        opacity: .6;
    }

    .rp-form-head { margin-bottom: 28px; }
    .rp-eyebrow {
        display: inline-flex; align-items: center; gap: 7px;
        font-size: 10.5px; font-weight: 600; color: var(--rp-green);
        text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 12px;
    }
    .rp-eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--rp-green); border-radius: 2px; display: inline-block; }
    .rp-form-head h1 { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: var(--rp-text); letter-spacing: -1px; line-height: 1.1; }
    .rp-form-head p { margin-top: 12px; font-size: 13.5px; color: var(--rp-muted); line-height: 1.65; }

    .rp-field { margin-bottom: 18px; }
    .rp-field label { display: block; font-size: 11.5px; font-weight: 600; color: var(--rp-muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 8px; }

    .rp-input-wrap { position: relative; }
    .rp-input-wrap .rp-ico {
        position: absolute; left: 15px; top: 50%; transform: translateY(-50%);
        width: 16px; height: 16px; color: var(--rp-muted); pointer-events: none; transition: color .2s;
    }
    .rp-input-wrap:focus-within .rp-ico { color: var(--rp-green); }

    .rp-input {
        width: 100%; background: var(--rp-input-bg);
        border: 1.5px solid var(--rp-border); border-radius: 10px;
        padding: 13px 42px 13px 44px;
        font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--rp-text); outline: none;
        transition: border-color .2s, box-shadow .2s, background .2s;
    }
    .rp-input::placeholder { color: #2d4844; }
    .rp-input:focus { border-color: var(--rp-green); box-shadow: 0 0 0 4px var(--rp-green-dim); background: #0d1719; }

    .rp-field-error { font-size: 12px; color: #e07070; margin-top: 6px; }

    .rp-eye-btn {
        position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
        background: none; border: none; padding: 4px; color: var(--rp-muted); cursor: pointer; display: flex;
        border-radius: 4px; transition: color .2s, background .2s;
    }
    .rp-eye-btn:hover { color: var(--rp-green); background: rgba(0,166,103,.1); }

    .rp-btn {
        width: 100%; padding: 15px; margin-top: 8px;
        background: linear-gradient(135deg, var(--rp-green), #009a5e);
        color: #fff; border: none; border-radius: 10px;
        font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: .2px;
        cursor: pointer; position: relative; overflow: hidden;
        transition: transform .15s, box-shadow .2s, background .2s;
    }
    .rp-btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(255,255,255,.09), transparent); pointer-events: none; }
    .rp-btn:hover { background: linear-gradient(135deg, var(--rp-green-hover), #00a65e); box-shadow: 0 12px 32px var(--rp-green-glow); transform: translateY(-2px); }
    .rp-btn:active { transform: translateY(0); box-shadow: none; }
    .rp-btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

    @media (max-width: 820px) {
        .rp-card { flex-direction: column; min-height: unset; max-width: 520px; border-radius: 16px; }
        .rp-panel-left { flex: none; padding: 36px 32px 32px; border-right: none; border-bottom: 1px solid var(--rp-border); }
        .rp-dots { display: none; }
        .rp-tagline h2 { font-size: 22px; margin-bottom: 12px; }
        .rp-tagline p { display: none; }
        .rp-stat { padding: 12px 14px; }
        .rp-stat-val { font-size: 17px; }
        .rp-pill { margin-bottom: 20px; }
        .rp-panel-right { width: 100%; padding: 36px 32px 40px; }
        .rp-panel-right::before { display: none; }
    }

    @media (max-width: 520px) {
        .rp-page { padding: 16px; }
        .rp-card { border-radius: 14px; }
        .rp-panel-left { padding: 28px 24px 24px; }
        .rp-logo-wordmark { font-size: 14px; }
        .rp-tagline h2 { font-size: 20px; }
        .rp-stat { padding: 10px 12px; }
        .rp-stat-val { font-size: 16px; }
        .rp-stat-lbl { font-size: 10px; }
        .rp-panel-right { padding: 28px 24px 36px; }
        .rp-form-head h1 { font-size: 22px; }
    }

    @media (max-width: 380px) {
        .rp-stats { flex-direction: column; gap: 8px; }
        .rp-stat + .rp-stat { margin-left: 0; margin-top: 8px; }
    }
</style>

<div class="rp-scope">
    <div class="rp-page">
        <div class="rp-orb rp-orb-1"></div>
        <div class="rp-orb rp-orb-2"></div>

        <div class="rp-back-nav">
            <a href="{{ route('login') }}" class="rp-back-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                <span>Back to login</span>
            </a>
        </div>

        <div class="rp-card">

            {{-- ── Left branding panel — identical to login / forgot-password ── --}}
            <div class="rp-panel-left">
                <div class="rp-dots">
                    @for ($i = 0; $i < 20; $i++)<span></span>@endfor
                </div>

                <a href="{{ route('user.home') }}" class="rp-logo-lockup">
                    <div class="rp-logo-mark">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <div>
                        <p class="rp-logo-wordmark">Future Connect</p>
                        <p class="rp-logo-tagline">Empowering Stories. Real Impact.</p>
                    </div>
                </a>

                <div>
                    <div class="rp-pill">Rwanda's #1 Talent Platform</div>
                    <div class="rp-tagline">
                        <h2>Empowering<br><em>Talent,</em><br>Opportunities<br>&amp; Growth.</h2>
                        <p>Connect with verified employers, showcase your skills, and unlock new career paths — all in one place.</p>
                    </div>
                </div>

                <div class="rp-stats">
                    <div class="rp-stat">
                        <div class="rp-stat-val">8K+</div>
                        <div class="rp-stat-lbl">Skills</div>
                    </div>
                    <div class="rp-stat">
                        <div class="rp-stat-val">4.8★</div>
                        <div class="rp-stat-lbl">Rating</div>
                    </div>
                    <div class="rp-stat">
                        <div class="rp-stat-val">100%</div>
                        <div class="rp-stat-lbl">Verified</div>
                    </div>
                </div>
            </div>

            {{-- ── Right form panel ── --}}
            <div class="rp-panel-right">
                <div class="rp-form-head">
                    <div class="rp-eyebrow">Reset password</div>
                    <h1>Choose a new<br>password</h1>
                    <p>Your new password must be different from previously used passwords.</p>
                </div>

                <form method="POST" action="{{ route('password.store') }}">
                    @csrf

                    {{-- Password Reset Token --}}
                    <input type="hidden" name="token" value="{{ $request->route('token') }}">

                    {{-- Email --}}
                    <div class="rp-field">
                        <label for="email">{{ __('Email Address') }}</label>
                        <div class="rp-input-wrap">
                            <svg class="rp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <input id="email" class="rp-input" type="email" name="email"
                                value="{{ old('email', $request->email ?? '') }}"
                                placeholder="you@example.com" required autocomplete="username" />
                        </div>
                        @error('email')
                            <div class="rp-field-error">{{ $message }}</div>
                        @enderror
                    </div>

                    {{-- Password --}}
                    <div class="rp-field">
                        <label for="password">{{ __('New Password') }}</label>
                        <div class="rp-input-wrap">
                            <svg class="rp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            <input id="password" class="rp-input" type="password" name="password"
                                placeholder="••••••••" required autocomplete="new-password" />
                            <button type="button" class="rp-eye-btn" data-toggle-for="password" aria-label="Toggle password visibility">
                                <svg class="rp-eye-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            </button>
                        </div>
                        @error('password')
                            <div class="rp-field-error">{{ $message }}</div>
                        @enderror
                    </div>

                    {{-- Confirm Password --}}
                    <div class="rp-field">
                        <label for="password_confirmation">{{ __('Confirm Password') }}</label>
                        <div class="rp-input-wrap">
                            <svg class="rp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            <input id="password_confirmation" class="rp-input" type="password" name="password_confirmation"
                                placeholder="••••••••" required autocomplete="new-password" />
                            <button type="button" class="rp-eye-btn" data-toggle-for="password_confirmation" aria-label="Toggle password visibility">
                                <svg class="rp-eye-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            </button>
                        </div>
                        @error('password_confirmation')
                            <div class="rp-field-error">{{ $message }}</div>
                        @enderror
                    </div>

                    <button class="rp-btn" type="submit">
                        <span class="rp-btn-inner">
                            {{ __('Reset Password') }}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
                    </button>
                </form>
            </div>

        </div>
    </div>
</div>

<script>
    document.querySelectorAll('.rp-eye-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const input = document.getElementById(btn.getAttribute('data-toggle-for'));
            const ico = btn.querySelector('.rp-eye-ico');
            const isHidden = input.type === 'password';
            input.type = isHidden ? 'text' : 'password';
            ico.innerHTML = isHidden
                ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
                : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
        });
    });
</script>

@endsection