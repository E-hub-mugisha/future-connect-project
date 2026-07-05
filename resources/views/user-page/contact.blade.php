@extends('layouts.guest')
@section('title', 'Contact Us')
@section('content')

<style>
    /* ── Google Font ─────────────────────────────── */
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

    /* ── Variables ───────────────────────────────── */
    :root {
        --bg-deep: #0e1618;
        --bg-card: #131f22;
        --bg-input: #0a1214;
        --accent: #48d597;
        --accent-dim: rgba(0, 166, 103, .12);
        --accent-mid: rgba(0, 166, 103, .25);
        --danger: #e07070;
        --danger-dim: rgba(220, 50, 50, .08);
        --danger-border: rgba(220, 50, 50, .3);
        --text-head: #e4eeef;
        --text-body: #7fa0a6;
        --text-muted: #3d5a5e;
        --border: rgba(255, 255, 255, .06);
        --radius-lg: 16px;
        --radius-md: 10px;
    }

    /* ── Page Shell ──────────────────────────────── */
    .cp-page {
        background: var(--bg-deep);
        font-family: 'DM Sans', sans-serif;
        min-height: 100vh;
        padding: 0 0 80px;
        position: relative;
        overflow: hidden;
    }

    /* decorative orbs */
    .cp-page::before,
    .cp-page::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
    }

    /* .cp-page::before {
        width: 560px;
        height: 560px;
        top: -160px;
        right: -140px;
        background: radial-gradient(circle, rgba(0, 166, 103, .07) 0%, transparent 70%);
    } */

    /* .cp-page::after {
        width: 400px;
        height: 400px;
        bottom: 100px;
        left: -120px;
        background: radial-gradient(circle, rgba(0, 166, 103, .05) 0%, transparent 70%);
    } */

    .cp-page > * {
        position: relative;
        z-index: 1;
    }

    /* ── Hero Header ─────────────────────────────── */
    .cp-hero {
        text-align: center;
        padding: 72px 24px 52px;
    }

    .cp-hero__eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        color: var(--accent);
        background: var(--accent-dim);
        border: 1px solid var(--accent-mid);
        border-radius: 100px;
        padding: 5px 14px;
        margin-bottom: 22px;
    }

    .cp-hero__eyebrow::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--accent);
        animation: pulse 2s infinite;
    }

    @keyframes pulse {

        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }

        50% {
            opacity: .4;
            transform: scale(1.4);
        }
    }

    .cp-hero h1 {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2.2rem, 5vw, 3.4rem);
        font-weight: 400;
        color: var(--text-head);
        line-height: 1.15;
        margin: 0 0 16px;
    }

    .cp-hero h1 em {
        font-style: italic;
        color: var(--accent);
    }

    .cp-hero p {
        font-size: 16px;
        color: var(--text-body);
        max-width: 480px;
        margin: 0 auto;
        line-height: 1.75;
    }

    /* ── Info Cards Row ──────────────────────────── */
    .cp-info-row {
        max-width: 880px;
        margin: 0 auto 56px;
        padding: 0 24px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }

    .cp-info-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 28px 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        transition: border-color .25s, transform .25s;
    }

    .cp-info-card:hover {
        border-color: var(--accent-mid);
        transform: translateY(-3px);
    }

    .cp-info-icon {
        width: 44px;
        height: 44px;
        flex-shrink: 0;
        border-radius: 12px;
        background: var(--accent-dim);
        border: 1px solid var(--accent-mid);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cp-info-icon svg {
        width: 18px;
        height: 18px;
        stroke: var(--accent);
        fill: none;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .cp-info-label {
        font-size: 11px;
        font-weight: 600;
        letter-spacing: .8px;
        text-transform: uppercase;
        color: var(--accent);
        margin: 0 0 4px;
    }

    .cp-info-value {
        font-size: 13.5px;
        color: var(--text-body);
        margin: 0;
        line-height: 1.5;
    }

    .cp-info-value a {
        color: var(--text-body);
        text-decoration: none;
        transition: color .2s;
    }

    .cp-info-value a:hover {
        color: var(--accent);
    }

    /* ── Main Content Row (map + form) ───────────── */
    .cp-content {
        max-width: 880px;
        margin: 0 auto;
        padding: 0 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        align-items: stretch;
    }

    /* ── Contact Info Panel ──────────────────────── */
    .cp-info-panel {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 36px 32px;
        display: flex;
        flex-direction: column;
    }

    .cp-info-panel h3 {
        font-family: 'DM Serif Display', serif;
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--text-head);
        margin: 0 0 6px;
        line-height: 1.2;
    }

    .cp-info-panel > p {
        font-size: 13.5px;
        color: var(--text-body);
        margin: 0 0 28px;
        line-height: 1.65;
    }

    .cp-info-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 28px;
    }

    .cp-info-list-item {
        display: flex;
        align-items: flex-start;
        gap: 14px;
    }

    .cp-info-list-icon {
        width: 38px;
        height: 38px;
        flex-shrink: 0;
        border-radius: 10px;
        background: var(--accent-dim);
        border: 1px solid var(--accent-mid);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cp-info-list-icon svg {
        width: 16px;
        height: 16px;
        stroke: var(--accent);
        fill: none;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .cp-info-list-body p {
        margin: 0;
    }

    .cp-info-list-title {
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: .7px;
        text-transform: uppercase;
        color: var(--accent);
        margin-bottom: 3px !important;
    }

    .cp-info-list-value {
        font-size: 13.5px;
        color: var(--text-head);
        line-height: 1.6;
    }

    .cp-info-list-value a {
        color: var(--text-head);
        text-decoration: none;
        transition: color .2s;
    }

    .cp-info-list-value a:hover {
        color: var(--accent);
    }

    .cp-info-divider {
        border: none;
        border-top: 1px solid var(--border);
        margin: 0 0 22px;
    }

    .cp-social-label {
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: .7px;
        text-transform: uppercase;
        color: var(--text-muted);
        margin: 0 0 14px;
    }

    .cp-social-row {
        display: flex;
        gap: 10px;
        margin-top: auto;
    }

    .cp-social-link {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: var(--bg-input);
        border: 1px solid rgba(255, 255, 255, .08);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color .2s, background .2s, transform .2s;
    }

    .cp-social-link svg {
        width: 16px;
        height: 16px;
        stroke: var(--text-body);
        fill: none;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: stroke .2s;
    }

    .cp-social-link:hover {
        border-color: var(--accent-mid);
        background: var(--accent-dim);
        transform: translateY(-2px);
    }

    .cp-social-link:hover svg {
        stroke: var(--accent);
    }

    /* ── Form Panel ──────────────────────────────── */
    .cp-form-panel {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 36px 32px;
    }

    .cp-form-panel h3 {
        font-family: 'DM Serif Display', serif;
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--text-head);
        margin: 0 0 6px;
        line-height: 1.2;
    }

    .cp-form-panel > p {
        font-size: 13.5px;
        color: var(--text-body);
        margin: 0 0 28px;
        line-height: 1.65;
    }

    /* Form fields */
    .cp-form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin-bottom: 14px;
    }

    .cp-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 14px;
    }

    .cp-field label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: .6px;
        text-transform: uppercase;
        color: var(--text-muted);
    }

    .cp-field-error-tag {
        font-size: 9.5px;
        font-weight: 500;
        letter-spacing: .3px;
        color: var(--danger);
        text-transform: none;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .cp-field-error-tag::before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--danger);
        flex-shrink: 0;
    }

    .cp-field input,
    .cp-field textarea {
        background: var(--bg-input);
        border: 1px solid rgba(255, 255, 255, .08);
        border-radius: var(--radius-md);
        color: var(--text-head);
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        padding: 12px 16px;
        width: 100%;
        transition: border-color .2s, box-shadow .2s;
        outline: none;
        -webkit-appearance: none;
    }

    .cp-field input::placeholder,
    .cp-field textarea::placeholder {
        color: var(--text-muted);
    }

    .cp-field input:focus,
    .cp-field textarea:focus {
        border-color: var(--accent-mid);
        box-shadow: 0 0 0 3px rgba(0, 166, 103, .08);
    }

    .cp-field.has-error input,
    .cp-field.has-error textarea {
        border-color: var(--danger-border);
        background: var(--danger-dim);
        box-shadow: 0 0 0 3px rgba(220, 50, 50, .08);
    }

    .cp-field.has-error input:focus,
    .cp-field.has-error textarea:focus {
        border-color: var(--danger);
        box-shadow: 0 0 0 3px rgba(220, 50, 50, .12);
    }

    .cp-field textarea {
        resize: vertical;
        min-height: 110px;
        line-height: 1.6;
    }

    /* Submit button */
    .cp-submit {
        width: 100%;
        background: var(--accent);
        color: #0e1618;
        border: none;
        border-radius: var(--radius-md);
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .3px;
        padding: 14px 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: background .2s, transform .15s;
        margin-top: 6px;
    }

    .cp-submit:hover {
        background: #00c07a;
        transform: translateY(-1px);
    }

    .cp-submit:active {
        transform: scale(.98);
    }

    .cp-submit svg {
        width: 15px;
        height: 15px;
        stroke: #0e1618;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    /* Alert messages */
    .cp-alert {
        border-radius: var(--radius-md);
        padding: 12px 16px;
        font-size: 13px;
        margin-bottom: 18px;
        display: flex;
        align-items: flex-start;
        gap: 10px;
    }

    .cp-alert svg {
        flex-shrink: 0;
        margin-top: 1px;
    }

    .cp-alert--success {
        background: rgba(0, 166, 103, .1);
        border: 1px solid rgba(0, 166, 103, .25);
        color: #4dd9a0;
    }

    .cp-alert--error {
        background: var(--danger-dim);
        border: 1px solid var(--danger-border);
        color: var(--danger);
    }

    /* ── Responsive ──────────────────────────────── */
    @media (max-width: 720px) {
        .cp-info-row {
            grid-template-columns: 1fr;
        }

        .cp-content {
            grid-template-columns: 1fr;
        }

        .cp-form-row {
            grid-template-columns: 1fr;
        }

        .cp-form-panel {
            padding: 24px 20px;
        }
    }

    @media (max-width: 480px) {
        .cp-hero {
            padding: 48px 20px 36px;
        }
    }
</style>

<div class="cp-page">

    {{-- ── Hero (full width) ── --}}
    <div class="cp-hero">
        <div class="cp-hero__eyebrow">Get in Touch</div>
        <h1>Let's <em>Talk</em></h1>
        <p>Have a question, idea, or feedback? Drop us a message — we'd love to hear from you.</p>
    </div>

    {{-- ── Map + Form (two-column) ── --}}
    <div class="cp-content">

        {{-- Contact Info --}}
        <div class="cp-info-panel">
            <h3>Reach Us Directly</h3>
            <p>Prefer not to fill out a form? Here's every other way to reach the Future Connect team.</p>

            <div class="cp-info-list">

                <div class="cp-info-list-item">
                    <div class="cp-info-list-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                            <circle cx="12" cy="9" r="2.5" />
                        </svg>
                    </div>
                    <div class="cp-info-list-body">
                        <p class="cp-info-list-title">Office</p>
                        <p class="cp-info-list-value">Future Connect HQ,<br>Kigali City, Rwanda</p>
                    </div>
                </div>

                <div class="cp-info-list-item">
                    <div class="cp-info-list-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <div class="cp-info-list-body">
                        <p class="cp-info-list-title">Email</p>
                        <p class="cp-info-list-value"><a href="mailto:info@futureconnect.rw">info@futureconnect.rw</a></p>
                    </div>
                </div>

                <div class="cp-info-list-item">
                    <div class="cp-info-list-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                    </div>
                    <div class="cp-info-list-body">
                        <p class="cp-info-list-title">Phone</p>
                        <p class="cp-info-list-value"><a href="tel:+250788123456">+250 788 123 456</a></p>
                    </div>
                </div>

                <div class="cp-info-list-item">
                    <div class="cp-info-list-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div class="cp-info-list-body">
                        <p class="cp-info-list-title">Business Hours</p>
                        <p class="cp-info-list-value">Mon – Fri, 8:00 AM – 6:00 PM (CAT)</p>
                    </div>
                </div>

            </div>

            <hr class="cp-info-divider">

            <p class="cp-social-label">Follow Future Connect</p>
            <div class="cp-social-row">
                <a href="#" class="cp-social-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>
                <a href="#" class="cp-social-link" aria-label="X (Twitter)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4l7.5 9.5L4.5 20H7l5.5-6 4.5 6h4l-7.8-9.9L19.5 4H17l-5 5.7L8 4z" />
                    </svg>
                </a>
                <a href="#" class="cp-social-link" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
                    </svg>
                </a>
                <a href="#" class="cp-social-link" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </a>
            </div>
        </div>

        {{-- Form --}}
        <div class="cp-form-panel">
            <h3>Send Us a Message</h3>
            <p>We typically respond within 24 hours on business days.</p>

            {{-- Success / Error Alerts --}}
            @if(session('success'))
            <div class="cp-alert cp-alert--success">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
                {{ session('success') }}
            </div>
            @endif
            @if($errors->any())
            <div class="cp-alert cp-alert--error">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Please fix the errors below and try again.
            </div>
            @endif

            <form action="{{ route('contact.send') }}" method="POST" novalidate>
                @csrf

                <div class="cp-form-row">
                    <div class="cp-field @error('names') has-error @enderror">
                        <label for="cp-name">
                            Full Name
                            @error('names')<span class="cp-field-error-tag">{{ $message }}</span>@enderror
                        </label>
                        <input
                            type="text"
                            id="cp-name"
                            name="names"
                            placeholder="Jane Doe"
                            value="{{ old('names') }}"
                            required />
                    </div>
                    <div class="cp-field @error('email') has-error @enderror">
                        <label for="cp-email">
                            Email Address
                            @error('email')<span class="cp-field-error-tag">{{ $message }}</span>@enderror
                        </label>
                        <input
                            type="email"
                            id="cp-email"
                            name="email"
                            placeholder="jane@example.com"
                            value="{{ old('email') }}"
                            required />
                    </div>
                </div>

                <div class="cp-field @error('subject') has-error @enderror">
                    <label for="cp-subject">
                        Subject
                        @error('subject')<span class="cp-field-error-tag">{{ $message }}</span>@enderror
                    </label>
                    <input
                        type="text"
                        id="cp-subject"
                        name="subject"
                        placeholder="What's this about?"
                        value="{{ old('subject') }}"
                        required />
                </div>

                <div class="cp-field @error('message') has-error @enderror">
                    <label for="cp-message">
                        Your Message
                        @error('message')<span class="cp-field-error-tag">{{ $message }}</span>@enderror
                    </label>
                    <textarea
                        id="cp-message"
                        name="message"
                        placeholder="Tell us more…"
                        required>{{ old('message') }}</textarea>
                </div>

                <button type="submit" class="cp-submit">
                    Send Message
                    <svg viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                </button>

            </form>
        </div>

    </div>

</div>

@endsection