@php
$categories = \App\Models\Category::inRandomOrder()->take(6)->get();
@endphp

{{-- =============================================
     FUTURE CONNECT — MODERN FOOTER
     Background : #0e1618
     Accent     : #48d597
============================================= --}}

<style>
/* ── Reset & Base ────────────────────────────── */
.fc-footer *,
.fc-footer *::before,
.fc-footer *::after { box-sizing: border-box; }

/* ── Footer Shell ────────────────────────────── */
.fc-footer {
    background: #0e1618;
    color: #8fa8ac;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    font-size: 14px;
    line-height: 1.7;
    position: relative;
    overflow: hidden;
}

/* Subtle radial glow top-right */
.fc-footer::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(0,166,103,.08) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
}

.fc-footer > * { position: relative; z-index: 1; }

/* ── Links ───────────────────────────────────── */
.fc-footer a {
    color: #8fa8ac;
    text-decoration: none;
    transition: color .2s ease;
}
.fc-footer a:hover { color: #48d597; }

/* ── Top Navigation Bar ──────────────────────── */
.fc-top-nav {
    border-bottom: 1px solid rgba(255,255,255,.07);
    padding: 14px 0;
}
.fc-top-nav__inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px 28px;
}
.fc-top-nav__inner a {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: .3px;
    color: #9ab0b4;
    padding: 2px 0;
    position: relative;
}
.fc-top-nav__inner a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.5px;
    background: #48d597;
    transition: width .25s ease;
}
.fc-top-nav__inner a:hover { color: #48d597; }
.fc-top-nav__inner a:hover::after { width: 100%; }

/* ── Main Body ───────────────────────────────── */
.fc-main-body {
    padding: 52px 0 40px;
}
.fc-grid {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 36px;
}

/* ── Column Titles ───────────────────────────── */
.fc-col-title {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #48d597;
    margin: 0 0 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,166,103,.22);
}

/* ── Link Lists ──────────────────────────────── */
.fc-link-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
.fc-link-list li { margin-bottom: 8px; }
.fc-link-list a {
    font-size: 13px;
    color: #8fa8ac;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}
.fc-link-list .arrow {
    font-size: 10px;
    color: #48d597;
    display: inline-block;
    transition: transform .2s ease;
}
.fc-link-list a:hover .arrow { transform: translateX(3px); }

/* ── Contact Column ──────────────────────────── */
.fc-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 18px;
}
.fc-contact-item:last-child { margin-bottom: 0; }

.fc-contact-icon {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    background: rgba(0,166,103,.08);
    border: 1px solid rgba(0,166,103,.2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.fc-contact-icon svg {
    width: 14px;
    height: 14px;
    stroke: #48d597;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}
.fc-contact-label {
    font-size: 11px;
    font-weight: 700;
    color: #48d597;
    text-transform: uppercase;
    letter-spacing: .5px;
    margin: 0 0 2px;
}
.fc-contact-value {
    font-size: 13px;
    color: #8fa8ac;
    margin: 0;
}
.fc-contact-value a { color: #8fa8ac; }
.fc-contact-value a:hover { color: #48d597; }

/* ── Divider ─────────────────────────────────── */
.fc-divider {
    border: none;
    border-top: 1px solid rgba(255,255,255,.06);
    margin: 0;
}

/* ── Bottom Bar ──────────────────────────────── */
.fc-bottom {
    max-width: 960px;
    margin: 0 auto;
    padding: 22px 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
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

/* Social icons */
.fc-social {
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
}
.fc-social a {
    width: 34px;
    height: 34px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6a8c91;
    font-size: 14px;
    transition: background .2s, border-color .2s, color .2s;
}
.fc-social a:hover {
    background: #48d597;
    border-color: #48d597;
    color: #0e1618;
}
.fc-social svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
}

/* Legal links */
.fc-legal {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
    list-style: none;
    padding: 0;
    margin: 0;
}
.fc-legal a {
    font-size: 12px;
    color: #4e6b70;
}
.fc-legal a:hover { color: #48d597; }

/* Copyright */
.fc-copy {
    font-size: 12px;
    color: #3d5a5e;
    margin: 0;
}

/* ── Responsive ──────────────────────────────── */
@media (max-width: 768px) {
    .fc-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 480px) {
    .fc-grid {
        grid-template-columns: 1fr;
    }
    .fc-bottom {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>

<footer class="fc-footer">

    {{-- ── Top Nav ── --}}
    <div class="fc-top-nav">
        <div class="fc-top-nav__inner">
            <a href="{{ route('user.about') }}">About Us</a>
            <a href="{{ route('user.how-it-works') }}">How It Works</a>
            <a href="{{ route('user.stories') }}">Stories</a>
            <a href="{{ route('user.courses') }}">Courses</a>
            <a href="{{ route('user.blogs') }}">Blog</a>
            <a href="{{ route('user.contact') }}">Contact</a>
        </div>
    </div>

    {{-- ── Main Grid ── --}}
    <div class="fc-main-body">
        <div class="fc-grid">

            {{-- About --}}
            <div>
                <p class="fc-col-title">About Future Connect</p>
                <ul class="fc-link-list">
                    <li>
                        <a href="{{ route('user.about') }}">
                            <span class="arrow">›</span> About Us
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('user.how-it-works') }}">
                            <span class="arrow">›</span> How It Works
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('talent.connections-room') }}">
                            <span class="arrow">›</span> Connection Room
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('user.register_as_talent') }}">
                            <span class="arrow">›</span> Join the Platform
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('user.contact') }}">
                            <span class="arrow">›</span> Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            {{-- Resources --}}
            <div>
                <p class="fc-col-title">Resources</p>
                <ul class="fc-link-list">
                    <li>
                        <a href="{{ route('user.stories') }}">
                            <span class="arrow">›</span> Inspiring Stories
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('user.courses') }}">
                            <span class="arrow">›</span> Learning Center
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('user.blogs') }}">
                            <span class="arrow">›</span> Blog
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('user.talents') }}">
                            <span class="arrow">›</span> Skills Hub
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('user.faq') }}">
                            <span class="arrow">›</span> FAQs
                        </a>
                    </li>
                </ul>
            </div>

            {{-- Popular Categories --}}
            <div>
                <p class="fc-col-title">Popular Categories</p>
                <ul class="fc-link-list">
                    @foreach($categories as $cat)
                    <li>
                        <a href="{{ url('/talents/category/' . $cat->slug) }}">
                            <span class="arrow">›</span> {{ $cat->name }}
                        </a>
                    </li>
                    @endforeach
                </ul>
            </div>

            {{-- Contact --}}
            <div>
                <p class="fc-col-title">Get in Touch</p>

                <div class="fc-contact-item">
                    <div class="fc-contact-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                            <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                    </div>
                    <div>
                        <p class="fc-contact-label">Location</p>
                        <p class="fc-contact-value">Kigali, Rwanda</p>
                    </div>
                </div>

                <div class="fc-contact-item">
                    <div class="fc-contact-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="fc-contact-label">Phone</p>
                        <p class="fc-contact-value">+250 784 123 456</p>
                    </div>
                </div>

                <div class="fc-contact-item">
                    <div class="fc-contact-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                    </div>
                    <div>
                        <p class="fc-contact-label">Email</p>
                        <p class="fc-contact-value">
                            <a href="mailto:info@futureconnect.rw">info@futureconnect.rw</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>{{-- /.fc-grid --}}
    </div>{{-- /.fc-main-body --}}

    <hr class="fc-divider">

    {{-- ── Bottom Bar ── --}}
    <div class="fc-bottom">

        {{-- Logo --}}
        <a href="{{ route('user.home') }}" class="fc-logo-lockup">
            <div class="fc-logo-mark">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
            </div>
            <div>
                <p class="fc-logo-wordmark">Future Connect</p>
                <p class="fc-logo-tagline">Empowering Stories. Real Impact.</p>
            </div>
        </a>

        {{-- Social --}}
        <ul class="fc-social">
            <li>
                <a href="#" title="Facebook" aria-label="Facebook">
                    <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
            </li>
            <li>
                <a href="#" title="X / Twitter" aria-label="X Twitter">
                    <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
            </li>
            <li>
                <a href="#" title="Instagram" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill:none">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" title="LinkedIn" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
            </li>
            <li>
                <a href="#" title="YouTube" aria-label="YouTube">
                    <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0e1618"/></svg>
                </a>
            </li>
        </ul>

        {{-- Legal --}}
        <ul class="fc-legal">
            <li><a href="{{ route('user.privacy-policy') }}">Privacy Policy</a></li>
            <li><a href="{{ route('user.terms-condition') }}">Terms & Conditions</a></li>
            <li><a href="{{ route('user.donation-policy') }}">Donation Policy</a></li>
        </ul>

        {{-- Copyright --}}
        <p class="fc-copy">&copy; {{ date('Y') }} Future Connect</p>

    </div>

</footer>