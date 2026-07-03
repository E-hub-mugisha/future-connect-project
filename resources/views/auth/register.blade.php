<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Register | Future Connect</title>

    <!-- Toastr CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --bg: #0e1618; --surface: #131e21; --border: #1f2f33;
            --green: #48d597; --green-hover: #00bd76;
            --green-dim: rgba(0, 166, 103, .12); --green-glow: rgba(0, 166, 103, .28);
            --text: #e8f0ef; --muted: #6a8a85; --input-bg: #0b1315;
        }

        html, body { min-height: 100%; background: var(--bg); font-family: 'DM Sans', sans-serif; color: var(--text); }

        .page {
            min-height: 100vh; display: flex; align-items: center; justify-content: center;
            padding: 24px 16px; position: relative; overflow: hidden;
        }

        .page::before {
            content: ''; position: fixed; inset: 0; z-index: 0; pointer-events: none;
            background-image:
                linear-gradient(rgba(0, 166, 103, .04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 166, 103, .04) 1px, transparent 1px);
            background-size: 40px 40px;
        }

        .orb { position: fixed; border-radius: 50%; pointer-events: none; filter: blur(60px); z-index: 0; }
        .orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,166,103,.1) 0%, transparent 70%); top: -120px; right: -120px; }
        .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,166,103,.07) 0%, transparent 70%); bottom: -100px; left: -80px; }

        /* ── Global back button (floats above the card) ── */
        .back-nav {
            position: fixed; top: 24px; left: 24px; z-index: 5;
        }
        .back-btn {
            display: inline-flex; align-items: center; gap: 8px;
            background: rgba(19, 30, 33, .7); backdrop-filter: blur(8px);
            border: 1.5px solid var(--border); border-radius: 99px;
            padding: 9px 16px 9px 12px;
            font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
            color: var(--muted); text-decoration: none; cursor: pointer;
            transition: border-color .2s, color .2s, background .2s, transform .15s;
        }
        .back-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform .2s; }
        .back-btn:hover { color: var(--green); border-color: rgba(0,166,103,.35); background: rgba(19, 30, 33, .9); transform: translateX(-2px); }
        .back-btn:hover svg { transform: translateX(-2px); }

        @media (max-width: 480px) {
            .back-nav { top: 14px; left: 14px; }
            .back-btn span { display: none; }
            .back-btn { padding: 10px; }
        }

        /* ── Card ── */
        .card {
            display: flex; width: 100%; max-width: 1020px;
            border-radius: 20px; overflow: hidden;
            border: 1px solid var(--border); position: relative; z-index: 1;
            animation: fadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
            box-shadow: 0 40px 80px rgba(0, 0, 0, .4);
        }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(32px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Left panel ── */
        .panel-left {
            width: 340px; flex-shrink: 0;
            background: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
            padding: 52px 40px;
            display: flex; flex-direction: column; justify-content: space-between;
            position: relative; overflow: hidden;
            border-right: 1px solid var(--border);
        }

        .panel-left::before, .panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
        .panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
        .panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

        .dots { position: absolute; top: 44px; right: 32px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; opacity: .25; }
        .dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--green); display: block; }

        .brand { display: flex; align-items: center; gap: 12px; position: relative; z-index: 1; }
        .brand-mark { width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, var(--green), #008850); display: grid; place-items: center; font-size: 18px; box-shadow: 0 4px 16px rgba(0,166,103,.35); }
        .brand-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; color: var(--text); letter-spacing: -.4px; }
        .brand-name em { font-style: normal; color: var(--green); }

        .pill { display: inline-flex; align-items: center; gap: 6px; background: rgba(0,166,103,.1); border: 1px solid rgba(0,166,103,.2); border-radius: 99px; padding: 5px 12px; font-size: 11px; color: var(--green); font-weight: 500; margin-bottom: 22px; width: fit-content; position: relative; z-index: 1; }
        .pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green); display: inline-block; animation: pulse 2s ease infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

        .tagline { position: relative; z-index: 1; }
        .tagline h2 { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; line-height: 1.15; letter-spacing: -1px; color: var(--text); margin-bottom: 16px; }
        .tagline h2 em { font-style: normal; color: var(--green); }
        .tagline p { color: var(--muted); font-size: 13.5px; line-height: 1.65; }

        /* Feature list */
        .features { display: flex; flex-direction: column; gap: 14px; position: relative; z-index: 1; }
        .feat { display: flex; align-items: flex-start; gap: 12px; }
        .feat-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(0,166,103,.1); border: 1px solid rgba(0,166,103,.2); display: grid; place-items: center; flex-shrink: 0; }
        .feat-icon svg { width: 15px; height: 15px; color: var(--green); }
        .feat-text strong { display: block; font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
        .feat-text span { font-size: 12px; color: var(--muted); }

        /* ── Right form panel ── */
        .panel-right {
            flex: 1; background: var(--surface);
            padding: 48px 48px;
            display: flex; flex-direction: column; justify-content: center;
            position: relative; overflow-y: auto;
        }

        .panel-right::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--green), transparent); opacity: .6; }

        .form-head { margin-bottom: 28px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 7px; font-size: 10.5px; font-weight: 600; color: var(--green); text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 10px; }
        .eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--green); border-radius: 2px; display: inline-block; }
        .form-head h1 { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: var(--text); letter-spacing: -.8px; line-height: 1.1; }
        .form-head p { margin-top: 8px; font-size: 13px; color: var(--muted); }

        /* Two-column grid */
        .fields-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .field-full { grid-column: 1 / -1; }

        .field { display: flex; flex-direction: column; }
        .field label { font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 7px; }

        .input-wrap { position: relative; }
        .input-wrap .ico { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: var(--muted); pointer-events: none; transition: color .2s; }
        .input-wrap:focus-within .ico { color: var(--green); }

        .fc-input {
            width: 100%; background: var(--input-bg);
            border: 1.5px solid var(--border); border-radius: 10px;
            padding: 12px 14px 12px 42px;
            font-family: 'DM Sans', sans-serif; font-size: 13.5px; color: var(--text); outline: none;
            transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .fc-input::placeholder { color: #2d4844; }
        .fc-input:focus { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); background: #0d1719; }

        .field-error { font-size: 11.5px; color: #e07070; margin-top: 5px; }

        /* Password strength */
        .strength-bar { display: flex; gap: 4px; margin-top: 8px; }
        .strength-seg { height: 3px; flex: 1; border-radius: 2px; background: var(--border); transition: background .3s; }
        .strength-seg.weak   { background: #e05a5a; }
        .strength-seg.fair   { background: #e0a045; }
        .strength-seg.good   { background: #5ab4e0; }
        .strength-seg.strong { background: var(--green); }
        .strength-label { font-size: 11px; color: var(--muted); margin-top: 5px; }

        .eye-btn { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex; border-radius: 4px; transition: color .2s, background .2s; }
        .eye-btn:hover { color: var(--green); background: rgba(0,166,103,.1); }

        /* Select */
        .fc-select {
            width: 100%; background: var(--input-bg);
            border: 1.5px solid var(--border); border-radius: 10px;
            padding: 12px 14px 12px 42px;
            font-family: 'DM Sans', sans-serif; font-size: 13.5px; color: var(--text); outline: none;
            appearance: none; cursor: pointer;
            transition: border-color .2s, box-shadow .2s;
        }
        .fc-select:focus { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); }
        .select-arrow { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--muted); }

        /* Terms */
        .terms-row { display: flex; align-items: flex-start; gap: 10px; }
        .terms-row input[type="checkbox"] { appearance: none; width: 17px; height: 17px; border-radius: 5px; border: 1.5px solid var(--border); background: var(--input-bg); cursor: pointer; display: grid; place-items: center; flex-shrink: 0; margin-top: 1px; transition: border-color .2s, background .2s; }
        .terms-row input[type="checkbox"]:checked { background: var(--green); border-color: var(--green); }
        .terms-row input[type="checkbox"]:checked::after { content: ''; display: block; width: 9px; height: 5px; border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg) translateY(-1px); }
        .terms-row label { font-size: 12.5px; color: var(--muted); line-height: 1.5; cursor: pointer; }
        .terms-row label a { color: var(--green); text-decoration: none; font-weight: 500; }
        .terms-row label a:hover { text-decoration: underline; }

        /* Submit */
        .btn {
            width: 100%; padding: 14px;
            background: linear-gradient(135deg, var(--green), #009a5e);
            color: #fff; border: none; border-radius: 10px;
            font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: .2px;
            cursor: pointer; position: relative; overflow: hidden;
            transition: transform .15s, box-shadow .2s, background .2s;
            margin-top: 20px;
        }
        .btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(255,255,255,.09), transparent); pointer-events: none; }
        .btn:hover { background: linear-gradient(135deg, var(--green-hover), #00a65e); box-shadow: 0 12px 32px var(--green-glow); transform: translateY(-2px); }
        .btn:active { transform: translateY(0); }
        .btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

        .login-row { text-align: center; margin-top: 20px; font-size: 13px; color: var(--muted); }
        .login-row a { color: var(--green); text-decoration: none; font-weight: 600; }
        .login-row a:hover { text-decoration: underline; }

        /* ── RESPONSIVE ── */
        @media (max-width: 880px) {
            .card { flex-direction: column; max-width: 560px; }
            .panel-left { width: 100%; border-right: none; border-bottom: 1px solid var(--border); padding: 32px 28px 28px; }
            .dots { display: none; }
            .tagline h2 { font-size: 22px; }
            .tagline p { display: none; }
            .features { flex-direction: row; flex-wrap: wrap; gap: 10px; }
            .feat { flex: 1; min-width: 140px; }
            .panel-right { padding: 36px 32px 40px; }
        }

        @media (max-width: 600px) {
            .fields-grid { grid-template-columns: 1fr; }
            .field-full { grid-column: unset; }
        }

        @media (max-width: 480px) {
            .page { padding: 16px; }
            .panel-left { padding: 24px 20px; }
            .panel-right { padding: 28px 20px 36px; }
            .form-head h1 { font-size: 22px; }
            .features { display: none; }
        }

        /* Logo lockup */
.fc-logo-lockup {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
}
.fc-logo-mark {
    width: 36px;
    height: 36px;
    background: #48d597;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.fc-logo-mark svg {
    width: 18px;
    height: 18px;
    fill: #0e1618;
}
.fc-logo-wordmark {
    font-size: 15px;
    font-weight: 700;
    color: #e2ecee;
    letter-spacing: .3px;
    line-height: 1.2;
    margin: 0;
}
.fc-logo-tagline {
    font-size: 11px;
    color: #4e6b70;
    letter-spacing: .3px;
    margin: 0;
    line-height: 1;
}
    </style>
</head>
<body>

<div class="page">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>

    {{-- ── Back button ── --}}
    <div class="back-nav">
        <a href="{{ url()->previous() !== url()->current() ? url()->previous() : url('/') }}"
           class="back-btn" id="backBtn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            <span>Back</span>
        </a>
    </div>

    <div class="card">

        {{-- ── Left Branding Panel ── --}}
        <div class="panel-left">
            <div class="dots">
                @for ($i = 0; $i < 20; $i++)<span></span>@endfor
            </div>

            <a href="{{ route('user.home') }}" class="fc-logo-lockup">
        <div class="fc-logo-mark">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <div>
          <p class="fc-logo-wordmark">Future Connect</p>
          <p class="fc-logo-tagline">Empowering Stories. Real Impact.</p>
        </div>
      </a>

            <div>
                <div class="pill">Join 8K+ Professionals</div>
                <div class="tagline">
                    <h2>Start your<br><em>journey</em><br>today.</h2>
                    <p>Create your free account and get discovered by verified employers across Rwanda.</p>
                </div>
            </div>

            <div class="features">
                <div class="feat">
                    <div class="feat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div class="feat-text"><strong>Verified Profiles</strong><span>Stand out to employers</span></div>
                </div>
                <div class="feat">
                    <div class="feat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </div>
                    <div class="feat-text"><strong>Rwanda-Wide</strong><span>Opportunities nationwide</span></div>
                </div>
                <div class="feat">
                    <div class="feat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div class="feat-text"><strong>Secure Platform</strong><span>Your data, protected</span></div>
                </div>
                <div class="feat">
                    <div class="feat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    </div>
                    <div class="feat-text"><strong>Career Growth</strong><span>Courses & mentorship</span></div>
                </div>
            </div>
        </div>

        {{-- ── Right Form Panel ── --}}
        <div class="panel-right">
            <div class="form-head">
                <div class="eyebrow">Create Account</div>
                <h1>Join Future Connect</h1>
                <p>Fill in your details to get started for free</p>
            </div>

            <form method="POST" action="{{ route('register') }}">
                @csrf

                <div class="fields-grid">

                    {{-- First Name --}}
                    <div class="field field-full">
                        <label for="name">{{ __('Your Name') }}</label>
                        <div class="input-wrap">
                            <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <input id="name" class="fc-input @error('name') is-invalid @enderror"
                                type="text" name="name" value="{{ old('name') }}"
                                placeholder="Jean Mugisha" required autocomplete="given-name" />
                        </div>
                        @error('name')<div class="field-error">{{ $message }}</div>@enderror
                    </div>

                    {{-- Email --}}
                    <div class="field ">
                        <label for="email">{{ __('Email Address') }}</label>
                        <div class="input-wrap">
                            <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <input id="email" class="fc-input @error('email') is-invalid @enderror"
                                type="email" name="email" value="{{ old('email') }}"
                                placeholder="you@example.com" required autocomplete="email" />
                        </div>
                        @error('email')<div class="field-error">{{ $message }}</div>@enderror
                    </div>

                    {{-- Phone --}}
                    <div class="field">
                        <label for="phone">{{ __('Phone Number') }}</label>
                        <div class="input-wrap">
                            <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <input id="phone" class="fc-input @error('phone') is-invalid @enderror"
                                type="tel" name="phone" value="{{ old('phone') }}"
                                placeholder="+250 7XX XXX XXX" autocomplete="tel" />
                        </div>
                        @error('phone')<div class="field-error">{{ $message }}</div>@enderror
                    </div>

                    {{-- Password --}}
                    <div class="field">
                        <label for="password">{{ __('Password') }}</label>
                        <div class="input-wrap">
                            <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            <input id="password" class="fc-input @error('password') is-invalid @enderror"
                                type="password" name="password"
                                placeholder="••••••••" required autocomplete="new-password"
                                oninput="checkStrength(this.value)" />
                            <button type="button" class="eye-btn" onclick="toggleEye('password','eye1')" aria-label="Toggle password">
                                <svg id="eye1" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            </button>
                        </div>
                        <div class="strength-bar">
                            <span class="strength-seg" id="s1"></span>
                            <span class="strength-seg" id="s2"></span>
                            <span class="strength-seg" id="s3"></span>
                            <span class="strength-seg" id="s4"></span>
                        </div>
                        <div class="strength-label" id="slabel">Use 8+ chars, numbers & symbols</div>
                        @error('password')<div class="field-error">{{ $message }}</div>@enderror
                    </div>

                    {{-- Confirm Password --}}
                    <div class="field">
                        <label for="password_confirmation">{{ __('Confirm Password') }}</label>
                        <div class="input-wrap">
                            <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            <input id="password_confirmation" class="fc-input"
                                type="password" name="password_confirmation"
                                placeholder="••••••••" required autocomplete="new-password" />
                            <button type="button" class="eye-btn" onclick="toggleEye('password_confirmation','eye2')" aria-label="Toggle confirm password">
                                <svg id="eye2" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {{-- Terms --}}
                    <div class="field field-full">
                        <div class="terms-row">
                            <input type="checkbox" id="terms" name="terms" required>
                            <label for="terms">
                                I agree to the <a href="#">Terms of Service</a>
                                and <a href="#">Privacy Policy</a> of Future Connect
                            </label>
                        </div>
                        @error('terms')<div class="field-error">{{ $message }}</div>@enderror
                    </div>

                </div>{{-- /.fields-grid --}}

                <button class="btn" type="submit">
                    <span class="btn-inner">
                        {{ __('Create Account') }}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </span>
                </button>
            </form>

            <div class="login-row">
                Already have an account? <a href="{{ route('login') }}">Sign In</a>
            </div>
        </div>

    </div>
</div>

<!-- Toastr JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script>
    // Prefer real browser history when it exists (avoids bouncing between
    // this page and a previous form submission), otherwise fall back to
    // the server-computed href already set on the anchor.
    document.getElementById('backBtn').addEventListener('click', function (e) {
        if (window.history.length > 1 && document.referrer) {
            e.preventDefault();
            window.history.back();
        }
    });

    function toggleEye(inputId, iconId) {
        const input = document.getElementById(inputId);
        const ico   = document.getElementById(iconId);
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        ico.innerHTML = isHidden
            ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
            : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
    }

    function checkStrength(val) {
        const segs  = ['s1','s2','s3','s4'].map(id => document.getElementById(id));
        const label = document.getElementById('slabel');
        let score = 0;
        if (val.length >= 8)           score++;
        if (/[A-Z]/.test(val))         score++;
        if (/[0-9]/.test(val))         score++;
        if (/[^A-Za-z0-9]/.test(val))  score++;

        const cls = ['', 'weak', 'fair', 'good', 'strong'];
        const lbl = [
            'Use 8+ chars, numbers & symbols',
            'Weak — keep going',
            'Fair — add numbers or symbols',
            'Good — add a special character',
            'Strong password ✓'
        ];
        const col = ['', '#e07070', '#e0a045', '#5ab4e0', 'var(--green)'];

        segs.forEach((s, i) => { s.className = 'strength-seg' + (i < score ? ' ' + cls[score] : ''); });
        label.textContent = val.length === 0 ? lbl[0] : lbl[score];
        label.style.color = val.length === 0 ? 'var(--muted)' : col[score];
    }

    // Toastr notifications
    @if(session('success')) toastr.success("{{ session('success') }}"); @endif
    @if(session('error'))   toastr.error("{{ session('error') }}");   @endif
    @if(session('warning')) toastr.warning("{{ session('warning') }}"); @endif
    @if(session('info'))    toastr.info("{{ session('info') }}");    @endif
</script>

</body>
</html>