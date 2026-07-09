@extends('layouts.guest')
@section('title', 'Contact Us')
@section('content')



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