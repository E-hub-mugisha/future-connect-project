@extends('layouts.guest')
@section('title', 'Contact Us')
@section('content')

<style>
/* ── Google Font ─────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ── Variables ───────────────────────────────── */
:root {
    --bg-deep:     #0e1618;
    --bg-card:     #131f22;
    --bg-input:    #0a1214;
    --accent:      #48d597;
    --accent-dim:  rgba(0,166,103,.12);
    --accent-mid:  rgba(0,166,103,.25);
    --text-head:   #e4eeef;
    --text-body:   #7fa0a6;
    --text-muted:  #3d5a5e;
    --border:      rgba(255,255,255,.06);
    --radius-lg:   16px;
    --radius-md:   10px;
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
.cp-page::before {
    width: 560px; height: 560px;
    top: -160px; right: -140px;
    background: radial-gradient(circle, rgba(0,166,103,.07) 0%, transparent 70%);
}
.cp-page::after {
    width: 400px; height: 400px;
    bottom: 100px; left: -120px;
    background: radial-gradient(circle, rgba(0,166,103,.05) 0%, transparent 70%);
}

.cp-page > * { position: relative; z-index: 1; }

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
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 2s infinite;
}
@keyframes pulse {
    0%,100%{ opacity:1; transform:scale(1); }
    50%{ opacity:.4; transform:scale(1.4); }
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
    width: 44px; height: 44px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--accent-dim);
    border: 1px solid var(--accent-mid);
    display: flex;
    align-items: center;
    justify-content: center;
}
.cp-info-icon svg {
    width: 18px; height: 18px;
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
.cp-info-value a:hover { color: var(--accent); }

/* ── Main Content Row ────────────────────────── */
.cp-content {
    max-width: 880px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: stretch;
}

/* ── Map Panel ───────────────────────────────── */
.cp-map-panel {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.cp-map-panel iframe {
    width: 100%;
    flex: 1;
    min-height: 280px;
    border: 0;
    filter: grayscale(1) invert(0.9) hue-rotate(160deg) brightness(.75) contrast(1.05);
    display: block;
}
.cp-map-footer {
    padding: 16px 20px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 10px;
}
.cp-map-footer svg {
    width: 15px; height: 15px;
    stroke: var(--accent);
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex-shrink: 0;
}
.cp-map-footer span {
    font-size: 12.5px;
    color: var(--text-body);
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
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .6px;
    text-transform: uppercase;
    color: var(--text-muted);
}
.cp-field input,
.cp-field textarea {
    background: var(--bg-input);
    border: 1px solid rgba(255,255,255,.08);
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
    box-shadow: 0 0 0 3px rgba(0,166,103,.08);
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
.cp-submit:active { transform: scale(.98); }
.cp-submit svg {
    width: 15px; height: 15px;
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
.cp-alert--success {
    background: rgba(0,166,103,.1);
    border: 1px solid rgba(0,166,103,.25);
    color: #4dd9a0;
}
.cp-alert--error {
    background: rgba(220,50,50,.08);
    border: 1px solid rgba(220,50,50,.2);
    color: #e07070;
}

/* ── Responsive ──────────────────────────────── */
@media (max-width: 720px) {
    .cp-info-row { grid-template-columns: 1fr; }
    .cp-content   { grid-template-columns: 1fr; }
    .cp-form-row  { grid-template-columns: 1fr; }
    .cp-form-panel { padding: 24px 20px; }
}
@media (max-width: 480px) {
    .cp-hero { padding: 48px 20px 36px; }
}
</style>

<div class="cp-page">

    {{-- ── Hero ── --}}
    <div class="cp-hero">
        <div class="cp-hero__eyebrow">Get in Touch</div>
        <h1>Let's <em>Talk</em></h1>
        <p>Have a question, idea, or feedback? Drop us a message — we'd love to hear from you.</p>
    </div>

    {{-- ── Info Cards ── --}}
    <div class="cp-info-row">

        <div class="cp-info-card">
            <div class="cp-info-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
            </div>
            <div>
                <p class="cp-info-label">Email Us</p>
                <p class="cp-info-value">
                    <a href="mailto:info@futureconnect.rw">info@futureconnect.rw</a>
                </p>
            </div>
        </div>

        <div class="cp-info-card">
            <div class="cp-info-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
            </div>
            <div>
                <p class="cp-info-label">Call Us</p>
                <p class="cp-info-value">+250 788 123 456</p>
            </div>
        </div>

        <div class="cp-info-card">
            <div class="cp-info-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                </svg>
            </div>
            <div>
                <p class="cp-info-label">Visit Us</p>
                <p class="cp-info-value">Future Connect HQ,<br>Kigali City, Rwanda</p>
            </div>
        </div>

    </div>

    {{-- ── Map + Form ── --}}
    <div class="cp-content">

        {{-- Map --}}
        <div class="cp-map-panel">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.8594561078528!2d30.097123416047607!3d-1.9440729322966414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6ddf3b71f67%3A0x7d91d3b6169b4f11!2sKigali%20Innovation%20City!5e0!3m2!1sen!2srw!4v1684567890123!5m2!1sen!2srw"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div class="cp-map-footer">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span>Kigali Innovation City, Kigali, Rwanda</span>
            </div>
        </div>

        {{-- Form --}}
        <div class="cp-form-panel">
            <h3>Send Us a Message</h3>
            <p>We typically respond within 24 hours on business days.</p>

            {{-- Success / Error Alerts --}}
            @if(session('success'))
            <div class="cp-alert cp-alert--success">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {{ session('success') }}
            </div>
            @endif
            @if($errors->any())
            <div class="cp-alert cp-alert--error">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Please fix the errors below and try again.
            </div>
            @endif

            <form action="{{ route('contact.send') }}" method="POST" novalidate>
                @csrf

                <div class="cp-form-row">
                    <div class="cp-field">
                        <label for="cp-name">Full Name</label>
                        <input
                            type="text"
                            id="cp-name"
                            name="names"
                            placeholder="Jane Doe"
                            value="{{ old('names') }}"
                            required
                        />
                    </div>
                    <div class="cp-field">
                        <label for="cp-email">Email Address</label>
                        <input
                            type="email"
                            id="cp-email"
                            name="email"
                            placeholder="jane@example.com"
                            value="{{ old('email') }}"
                            required
                        />
                    </div>
                </div>

                <div class="cp-field">
                    <label for="cp-subject">Subject</label>
                    <input
                        type="text"
                        id="cp-subject"
                        name="subject"
                        placeholder="What's this about?"
                        value="{{ old('subject') }}"
                        required
                    />
                </div>

                <div class="cp-field">
                    <label for="cp-message">Your Message</label>
                    <textarea
                        id="cp-message"
                        name="message"
                        placeholder="Tell us more…"
                        required
                    >{{ old('message') }}</textarea>
                </div>

                <button type="submit" class="cp-submit">
                    Send Message
                    <svg viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                </button>

            </form>
        </div>

    </div>

</div>

@endsection