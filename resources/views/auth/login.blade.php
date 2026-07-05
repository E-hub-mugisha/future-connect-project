<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Login | Future Connect</title>

    <!-- Toastr CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --bg: #0e1618;
            --surface: #131e21;
            --border: #1f2f33;
            --green: #48d597;
            --green-hover: #00bd76;
            --green-dim: rgba(0, 166, 103, .12);
            --green-glow: rgba(0, 166, 103, .28);
            --text: #e8f0ef;
            --muted: #6a8a85;
            --input-bg: #0b1315;
        }

        html, body { height: 100%; background: var(--bg); font-family: 'DM Sans', sans-serif; color: var(--text); }

        /* ── Page layout ── */
        .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px 16px;
            position: relative;
            overflow: hidden;
        }

        .page::before {
            content: '';
            position: fixed; inset: 0;
            background-image:
                linear-gradient(rgba(0, 166, 103, .04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 166, 103, .04) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
            z-index: 0;
        }

        /* Ambient orbs */
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
            display: flex;
            width: 100%;
            max-width: 980px;
            min-height: 580px;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--border);
            position: relative; z-index: 1;
            animation: fadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
            box-shadow: 0 40px 80px rgba(0, 0, 0, .4);
        }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(32px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Left panel ── */
        .panel-left {
            flex: 1;
            background: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
            padding: 52px 44px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            border-right: 1px solid var(--border);
        }

        .panel-left::before, .panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
        .panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
        .panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

        .dots {
            position: absolute; top: 44px; right: 40px;
            display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px;
            opacity: .25;
        }
        .dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--green); display: block; }

        /* Brand */
        .brand { display: flex; align-items: center; gap: 12px; position: relative; z-index: 1; }
        .brand-mark {
            width: 40px; height: 40px; border-radius: 10px;
            background: linear-gradient(135deg, var(--green), #008850);
            display: grid; place-items: center; font-size: 18px;
            box-shadow: 0 4px 16px rgba(0,166,103,.35);
        }
        .brand-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 19px; color: var(--text); letter-spacing: -.4px; }
        .brand-name em { font-style: normal; color: var(--green); }

        /* Pill */
        .pill {
            display: inline-flex; align-items: center; gap: 6px;
            background: rgba(0,166,103,.1); border: 1px solid rgba(0,166,103,.2);
            border-radius: 99px; padding: 5px 12px;
            font-size: 11.5px; color: var(--green); font-weight: 500;
            margin-bottom: 28px; position: relative; z-index: 1; width: fit-content;
        }
        .pill::before {
            content: ''; width: 6px; height: 6px; border-radius: 50%;
            background: var(--green); display: inline-block;
            animation: pulse 2s ease infinite;
        }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

        /* Tagline */
        .tagline { position: relative; z-index: 1; }
        .tagline h2 {
            font-family: 'Syne', sans-serif;
            font-size: clamp(24px, 3vw, 36px); font-weight: 800;
            line-height: 1.15; letter-spacing: -1.2px;
            color: var(--text); margin-bottom: 18px;
        }
        .tagline h2 em { font-style: normal; color: var(--green); }
        .tagline p { color: var(--muted); font-size: 14px; line-height: 1.65; max-width: 280px; }

        /* Stats */
        .stats { display: flex; position: relative; z-index: 1; }
        .stat { padding: 16px 20px; background: rgba(0,166,103,.06); border: 1px solid rgba(0,166,103,.12); border-radius: 10px; flex: 1; }
        .stat + .stat { margin-left: 10px; }
        .stat-val { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--green); letter-spacing: -1px; }
        .stat-lbl { font-size: 10.5px; color: var(--muted); text-transform: uppercase; letter-spacing: .6px; margin-top: 2px; }

        /* ── Right form panel ── */
        .panel-right {
            width: 420px; flex-shrink: 0;
            background: var(--surface);
            padding: 52px 44px;
            display: flex; flex-direction: column; justify-content: center;
            position: relative;
        }
        .panel-right::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
            background: linear-gradient(90deg, transparent, var(--green), transparent);
            opacity: .6;
        }

        .form-head { margin-bottom: 36px; }
        .eyebrow {
            display: inline-flex; align-items: center; gap: 7px;
            font-size: 10.5px; font-weight: 600; color: var(--green);
            text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 12px;
        }
        .eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--green); border-radius: 2px; display: inline-block; }
        .form-head h1 { font-family: 'Syne', sans-serif; font-size: 30px; font-weight: 800; color: var(--text); letter-spacing: -1px; line-height: 1.08; }
        .form-head p { margin-top: 10px; font-size: 13.5px; color: var(--muted); line-height: 1.5; }

        /* Fields */
        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 11.5px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 8px; }

        .input-wrap { position: relative; }
        .input-wrap .ico {
            position: absolute; left: 15px; top: 50%; transform: translateY(-50%);
            width: 16px; height: 16px; color: var(--muted); pointer-events: none; transition: color .2s;
        }
        .input-wrap:focus-within .ico { color: var(--green); }

        .fc-input {
            width: 100%; background: var(--input-bg);
            border: 1.5px solid var(--border); border-radius: 10px;
            padding: 13px 42px 13px 44px;
            font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--text); outline: none;
            transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .fc-input::placeholder { color: #2d4844; }
        .fc-input:focus { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); background: #0d1719; }

        /* Validation errors */
        .field-error { font-size: 12px; color: #e07070; margin-top: 6px; }

        .eye-btn {
            position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
            background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex;
            border-radius: 4px; transition: color .2s, background .2s;
        }
        .eye-btn:hover { color: var(--green); background: rgba(0,166,103,.1); }

        /* Remember / Forgot */
        .row-mid { display: flex; align-items: center; justify-content: space-between; margin: 2px 0 28px; }
        .check-wrap { display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; }
        .check-wrap input[type="checkbox"] {
            appearance: none; width: 17px; height: 17px; border-radius: 5px;
            border: 1.5px solid var(--border); background: var(--input-bg); cursor: pointer;
            display: grid; place-items: center; flex-shrink: 0;
            transition: border-color .2s, background .2s;
        }
        .check-wrap input[type="checkbox"]:checked { background: var(--green); border-color: var(--green); }
        .check-wrap input[type="checkbox"]:checked::after {
            content: ''; display: block; width: 9px; height: 5px;
            border-left: 2px solid #fff; border-bottom: 2px solid #fff;
            transform: rotate(-45deg) translateY(-1px);
        }
        .check-wrap span { font-size: 13px; color: var(--muted); }
        .forgot { font-size: 12.5px; color: var(--green); text-decoration: none; font-weight: 500; transition: opacity .2s; }
        .forgot:hover { opacity: .7; }

        /* Submit */
        .btn {
            width: 100%; padding: 15px;
            background: linear-gradient(135deg, var(--green), #009a5e);
            color: #fff; border: none; border-radius: 10px;
            font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: .2px;
            cursor: pointer; position: relative; overflow: hidden;
            transition: transform .15s, box-shadow .2s, background .2s;
        }
        .btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(255,255,255,.09), transparent); pointer-events: none; }
        .btn:hover { background: linear-gradient(135deg, var(--green-hover), #00a65e); box-shadow: 0 12px 32px var(--green-glow); transform: translateY(-2px); }
        .btn:active { transform: translateY(0); box-shadow: none; }
        .btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

        .divider { display: flex; align-items: center; gap: 12px; margin: 24px 0; color: var(--muted); font-size: 12px; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }

        .signup-row { text-align: center; font-size: 13px; color: var(--muted); }
        .signup-row a { color: var(--green); text-decoration: none; font-weight: 600; }
        .signup-row a:hover { text-decoration: underline; }

        /* ─────────── RESPONSIVE ─────────── */
        @media (max-width: 820px) {
            .card { flex-direction: column; min-height: unset; max-width: 520px; border-radius: 16px; }
            .panel-left { flex: none; padding: 36px 32px 32px; border-right: none; border-bottom: 1px solid var(--border); }
            .dots { display: none; }
            .tagline h2 { font-size: 22px; margin-bottom: 12px; }
            .tagline p { display: none; }
            .stat { padding: 12px 14px; }
            .stat-val { font-size: 17px; }
            .pill { margin-bottom: 20px; }
            .panel-right { width: 100%; padding: 36px 32px 40px; }
            .panel-right::before { display: none; }
        }

        @media (max-width: 520px) {
            .page { padding: 16px; }
            .card { border-radius: 14px; }
            .panel-left { padding: 28px 24px 24px; }
            .brand-name { font-size: 17px; }
            .tagline h2 { font-size: 20px; }
            .stat { padding: 10px 12px; }
            .stat-val { font-size: 16px; }
            .stat-lbl { font-size: 10px; }
            .panel-right { padding: 28px 24px 36px; }
            .form-head h1 { font-size: 24px; }
        }

        @media (max-width: 380px) {
            .stats { flex-direction: column; gap: 8px; }
            .stat + .stat { margin-left: 0; margin-top: 8px; }
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
                <div class="pill">Rwanda's #1 skills Platform</div>
                <div class="tagline">
                    <h2>Empowering<br><em>skills,</em><br>Opportunities<br>&amp; Growth.</h2>
                    <p>Connect with verified employers, showcase your skills, and unlock new career paths — all in one place.</p>
                </div>
            </div>

            <div class="stats">
                <div class="stat">
                    <div class="stat-val">8K+</div>
                    <div class="stat-lbl">Skills</div>
                </div>
                <div class="stat">
                    <div class="stat-val">4.8★</div>
                    <div class="stat-lbl">Rating</div>
                </div>
                <div class="stat">
                    <div class="stat-val">100%</div>
                    <div class="stat-lbl">Verified</div>
                </div>
            </div>
        </div>

        {{-- ── Right Form Panel ── --}}
        <div class="panel-right">
            <div class="form-head">
                <div class="eyebrow">Welcome back</div>
                <h1>Sign in to<br>your account</h1>
                <p>Enter your credentials to continue</p>
            </div>

            <form method="POST" action="{{ route('login') }}">
                @csrf

                {{-- Email --}}
                <div class="field">
                    <label for="email">{{ __('Email Address') }}</label>
                    <div class="input-wrap">
                        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <input id="email" class="fc-input @error('email') is-invalid @enderror"
                            type="email" name="email" value="{{ old('email') }}"
                            placeholder="you@example.com" required autofocus autocomplete="username" />
                    </div>
                    @error('email')
                        <div class="field-error">{{ $message }}</div>
                    @enderror
                </div>

                {{-- Password --}}
                <div class="field">
                    <label for="password">{{ __('Password') }}</label>
                    <div class="input-wrap">
                        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        <input id="password" class="fc-input @error('password') is-invalid @enderror"
                            type="password" name="password"
                            placeholder="••••••••" required autocomplete="current-password" />
                        <button type="button" class="eye-btn" id="eyeBtn" aria-label="Toggle password visibility">
                            <svg id="eyeIco" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                <line x1="1" y1="1" x2="23" y2="23"/>
                            </svg>
                        </button>
                    </div>
                    @error('password')
                        <div class="field-error">{{ $message }}</div>
                    @enderror
                </div>

                {{-- Remember / Forgot --}}
                <div class="row-mid">
                    <label class="check-wrap">
                        <input type="checkbox" name="remember" id="remember_me">
                        <span>Remember me</span>
                    </label>
                    @if (Route::has('password.request'))
                        <a class="forgot" href="{{ route('password.request') }}">Forgot password?</a>
                    @endif
                </div>

                {{-- Submit --}}
                <button class="btn" type="submit">
                    <span class="btn-inner">
                        {{ __('Log In') }}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </span>
                </button>
            </form>

            <div class="divider">or</div>

            <div class="signup-row">
                Don't have an account? <a href="{{ route('register') }}">Sign Up for free</a>
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

    // Password toggle
    document.getElementById('eyeBtn').addEventListener('click', function () {
        const input = document.getElementById('password');
        const ico   = document.getElementById('eyeIco');
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        ico.innerHTML = isHidden
            ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
            : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
    });

    // Toastr notifications
    @if(session('success')) toastr.success("{{ session('success') }}"); @endif
    @if(session('error'))   toastr.error("{{ session('error') }}");   @endif
    @if(session('warning')) toastr.warning("{{ session('warning') }}"); @endif
    @if(session('info'))    toastr.info("{{ session('info') }}");    @endif
</script>

</body>
</html>