@extends('layouts.guest')
@section('title', $talent->name)
@section('content')

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">

<style>
    :root {
        --bg-deep:    #0e1618;
        --bg-card:    #131e21;
        --bg-glass:   rgba(255,255,255,0.035);
        --bg-glass2:  rgba(0,166,103,0.07);
        --accent:     #00a667;
        --accent-dim: #008f59;
        --accent-glow:rgba(0,166,103,0.25);
        --text-primary:   #f0f4f3;
        --text-secondary: #8da4a0;
        --text-muted:     #4d6460;
        --border:     rgba(255,255,255,0.07);
        --border-accent: rgba(0,166,103,0.3);
        --radius-lg:  16px;
        --radius-pill:50px;
        --font-head:  'Syne', sans-serif;
        --font-body:  'DM Sans', sans-serif;
    }

    body, .page-content { background: var(--bg-deep) !important; color: var(--text-primary); font-family: var(--font-body); }

    /* ── PROFILE WRAPPER ── */
    .talent-page { padding: 40px 0 80px; }

    /* ── HERO CARD ── */
    .hero-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        margin-bottom: 24px;
        position: relative;
    }
    .hero-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, transparent, var(--accent), transparent);
    }

    /* ── TALENT PHOTO ── */
    .talent-photo-wrap {
        position: relative;
        height: 100%;
        min-height: 420px;
    }
    .talent-photo-wrap img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
    }
    .photo-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(to right, transparent 60%, var(--bg-card) 100%);
    }
    .photo-overlay-bottom {
        position: absolute; bottom: 0; left: 0; right: 0;
        background: linear-gradient(to top, var(--bg-card) 0%, transparent 50%);
        height: 120px;
    }

    /* ── TALENT INFO ── */
    .talent-info-col { padding: 36px 36px 36px 28px; display: flex; flex-direction: column; justify-content: space-between; }

    .talent-name {
        font-family: var(--font-head);
        font-size: 2rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 6px;
        line-height: 1.1;
    }
    .talent-skill-tag {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--bg-glass2);
        border: 1px solid var(--border-accent);
        color: var(--accent);
        border-radius: var(--radius-pill);
        padding: 4px 14px;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 14px;
    }
    .verified-badge {
        display: inline-flex; align-items: center; gap: 5px;
        background: rgba(0,166,103,0.12);
        color: var(--accent);
        border: 1px solid var(--border-accent);
        border-radius: var(--radius-pill);
        padding: 3px 12px;
        font-size: 0.72rem;
        font-weight: 600;
        margin-left: 10px;
        vertical-align: middle;
    }

    .rating-row { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
    .stars { color: var(--accent); font-size: 0.85rem; letter-spacing: 1px; }
    .rating-num { font-family: var(--font-head); font-weight: 700; font-size: 1rem; color: var(--text-primary); }
    .rating-count { color: var(--text-secondary); font-size: 0.8rem; }

    .about-snippet {
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 16px 18px;
        color: var(--text-secondary);
        font-size: 0.88rem;
        line-height: 1.7;
        margin-bottom: 22px;
    }

    /* ── META PILLS ── */
    .meta-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 26px; }
    .meta-pill {
        display: flex; align-items: center; gap: 8px;
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: var(--radius-pill);
        padding: 8px 16px;
        font-size: 0.8rem;
        color: var(--text-secondary);
        transition: border-color 0.2s, color 0.2s;
    }
    .meta-pill:hover { border-color: var(--border-accent); color: var(--accent); }
    .meta-pill i { color: var(--accent); font-size: 0.9rem; }
    .meta-pill strong { color: var(--text-primary); margin-right: 2px; }

    /* ── ACTION BUTTONS ── */
    .action-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
    .btn-support {
        display: inline-flex; align-items: center; gap: 8px;
        background: var(--accent);
        color: #fff;
        border: none;
        border-radius: var(--radius-pill);
        padding: 11px 24px;
        font-family: var(--font-head);
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        box-shadow: 0 4px 20px var(--accent-glow);
        text-decoration: none;
    }
    .btn-support:hover { background: var(--accent-dim); transform: translateY(-1px); box-shadow: 0 6px 28px var(--accent-glow); color: #fff; }
    .btn-outline {
        display: inline-flex; align-items: center; gap: 8px;
        background: transparent;
        color: var(--text-primary);
        border: 1px solid var(--border);
        border-radius: var(--radius-pill);
        padding: 11px 24px;
        font-family: var(--font-head);
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s, background 0.2s;
        text-decoration: none;
    }
    .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: var(--bg-glass2); }

    /* ── SHARE SECTION ── */
    .share-section { border-top: 1px solid var(--border); padding-top: 20px; }
    .share-label {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-muted);
        font-weight: 600;
        margin-bottom: 12px;
    }
    .share-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

    /* Copy link */
    .copy-link-wrap {
        display: flex;
        align-items: center;
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: var(--radius-pill);
        overflow: hidden;
        flex: 1;
        min-width: 200px;
        max-width: 360px;
        transition: border-color 0.2s;
    }
    .copy-link-wrap:focus-within { border-color: var(--border-accent); }
    .copy-link-wrap .profile-url {
        background: transparent;
        border: none;
        color: var(--text-secondary);
        font-size: 0.78rem;
        padding: 9px 14px;
        flex: 1;
        min-width: 0;
        outline: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .btn-copy {
        background: var(--accent);
        border: none;
        color: #fff;
        padding: 9px 16px;
        font-size: 0.75rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        white-space: nowrap;
        font-family: var(--font-head);
        letter-spacing: 0.03em;
    }
    .btn-copy:hover { background: var(--accent-dim); }
    .btn-copy.copied { background: #1a7a50; }

    /* Social icons */
    .social-icon-btn {
        display: inline-flex; align-items: center; justify-content: center;
        width: 36px; height: 36px;
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: 50%;
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 0.85rem;
        transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
    }
    .social-icon-btn:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); transform: translateY(-2px); }

    /* Native share button */
    .btn-native-share {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: var(--radius-pill);
        color: var(--text-secondary);
        padding: 8px 16px;
        font-size: 0.78rem;
        font-weight: 500;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s;
        font-family: var(--font-body);
    }
    .btn-native-share:hover { border-color: var(--border-accent); color: var(--accent); }

    /* ── TABS ── */
    .profile-tabs {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
    }
    .tab-nav {
        display: flex;
        border-bottom: 1px solid var(--border);
        overflow-x: auto;
        scrollbar-width: none;
    }
    .tab-nav::-webkit-scrollbar { display: none; }
    .tab-nav-item {
        flex-shrink: 0;
        padding: 16px 28px;
        font-family: var(--font-head);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-muted);
        cursor: pointer;
        border: none;
        background: transparent;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        transition: color 0.2s, border-color 0.2s;
        letter-spacing: 0.03em;
    }
    .tab-nav-item.active { color: var(--accent); border-bottom-color: var(--accent); }
    .tab-nav-item:hover { color: var(--text-primary); }

    .tab-body { padding: 32px; }
    .tab-pane { display: none; }
    .tab-pane.active { display: block; animation: fadeIn 0.3s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    /* ── SECTION HEADING ── */
    .section-head {
        display: flex; align-items: baseline; gap: 14px;
        margin-bottom: 24px;
    }
    .section-head h3 {
        font-family: var(--font-head);
        font-size: 1.25rem;
        font-weight: 800;
        color: var(--text-primary);
        margin: 0;
    }
    .section-head .count-badge {
        background: var(--bg-glass2);
        border: 1px solid var(--border-accent);
        color: var(--accent);
        border-radius: var(--radius-pill);
        padding: 2px 10px;
        font-size: 0.72rem;
        font-weight: 600;
    }

    /* ── STORY / COURSE CARDS ── */
    .card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 18px; }
    .content-card {
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
        transition: border-color 0.25s, transform 0.2s;
    }
    .content-card:hover { border-color: var(--border-accent); transform: translateY(-3px); }
    .content-card-img { position: relative; height: 170px; overflow: hidden; }
    .content-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s ease; }
    .content-card:hover .content-card-img img { transform: scale(1.04); }
    .card-cat {
        position: absolute; top: 10px; left: 10px;
        background: var(--accent);
        color: #fff;
        border-radius: var(--radius-pill);
        padding: 3px 10px;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.04em;
    }
    .content-card-body { padding: 14px 16px; }
    .content-card-body h5 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
    .content-card-body h5 a { color: inherit; text-decoration: none; }
    .content-card-body h5 a:hover { color: var(--accent); }
    .card-meta { display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); }
    .card-meta .stars-sm { color: var(--accent); }

    /* ── REVIEWS ── */
    .review-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
    @media(max-width: 768px) { .review-layout { grid-template-columns: 1fr; } }

    .rating-summary {
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        gap: 32px;
    }
    .avg-score {
        text-align: center;
        flex-shrink: 0;
    }
    .avg-number { font-family: var(--font-head); font-size: 3.5rem; font-weight: 800; color: var(--accent); line-height: 1; }
    .avg-out-of { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
    .avg-stars { color: var(--accent); font-size: 1.1rem; margin: 6px 0; }
    .avg-count { font-size: 0.75rem; color: var(--text-secondary); }

    .bars-wrap { flex: 1; }
    .bar-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
    .bar-label { font-size: 0.75rem; color: var(--text-secondary); width: 52px; flex-shrink: 0; }
    .bar-track { flex: 1; height: 6px; background: rgba(255,255,255,0.07); border-radius: 6px; overflow: hidden; }
    .bar-fill { height: 100%; background: var(--accent); border-radius: 6px; transition: width 1s ease; }
    .bar-count { font-size: 0.72rem; color: var(--text-muted); width: 24px; text-align: right; }

    .review-list { display: flex; flex-direction: column; gap: 16px; max-height: 480px; overflow-y: auto; padding-right: 6px; }
    .review-list::-webkit-scrollbar { width: 4px; }
    .review-list::-webkit-scrollbar-track { background: transparent; }
    .review-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

    .review-item {
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 16px 18px;
        transition: border-color 0.2s;
    }
    .review-item:hover { border-color: var(--border-accent); }
    .reviewer-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
    .reviewer-avatar {
        width: 38px; height: 38px; border-radius: 50%;
        object-fit: cover;
        border: 1px solid var(--border-accent);
        flex-shrink: 0;
    }
    .reviewer-name { font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
    .reviewer-time { font-size: 0.72rem; color: var(--text-muted); }
    .reviewer-stars { color: var(--accent); font-size: 0.75rem; margin-left: auto; }
    .review-comment { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.6; }

    /* ── REVIEW FORM ── */
    .review-form-card {
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 28px;
    }
    .review-form-card h4 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; }
    .form-label { font-size: 0.8rem; font-weight: 500; color: var(--text-secondary); margin-bottom: 6px; display: block; }
    .form-control-dark {
        width: 100%;
        background: rgba(255,255,255,0.04);
        border: 1px solid var(--border);
        border-radius: 10px;
        color: var(--text-primary);
        padding: 11px 14px;
        font-family: var(--font-body);
        font-size: 0.85rem;
        outline: none;
        transition: border-color 0.2s;
        margin-bottom: 14px;
    }
    .form-control-dark:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
    .form-control-dark::placeholder { color: var(--text-muted); }
    textarea.form-control-dark { resize: vertical; min-height: 90px; }

    /* Star rating input */
    .star-input-wrap { display: flex; flex-direction: row-reverse; gap: 4px; margin-bottom: 16px; }
    .star-input-wrap input[type="radio"] { display: none; }
    .star-input-wrap label {
        font-size: 1.4rem;
        color: var(--border);
        cursor: pointer;
        transition: color 0.15s;
    }
    .star-input-wrap input[type="radio"]:checked ~ label,
    .star-input-wrap label:hover,
    .star-input-wrap label:hover ~ label { color: var(--accent); }

    .btn-submit-review {
        width: 100%;
        background: var(--accent);
        border: none;
        border-radius: var(--radius-pill);
        color: #fff;
        padding: 12px;
        font-family: var(--font-head);
        font-size: 0.875rem;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 18px var(--accent-glow);
    }
    .btn-submit-review:hover { background: var(--accent-dim); box-shadow: 0 6px 28px var(--accent-glow); }

    /* ── EMPTY STATE ── */
    .empty-state {
        text-align: center; padding: 48px 24px;
        color: var(--text-muted); font-size: 0.9rem;
    }
    .empty-state i { font-size: 2rem; margin-bottom: 10px; display: block; color: var(--text-muted); }

    /* ── ABOUT SECTION ── */
    .about-full {
        background: var(--bg-glass);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 28px;
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.9;
    }

    /* ── MODAL ── */
    .modal-dark .modal-content {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 16px;
        color: var(--text-primary);
    }
    .modal-dark .modal-header {
        border-bottom: 1px solid var(--border);
        padding: 20px 24px 18px;
    }
    .modal-dark .modal-title {
        font-family: var(--font-head);
        font-size: 1rem;
        font-weight: 700;
        color: var(--text-primary);
    }
    .modal-dark .modal-header .accent-bar {
        display: block; width: 32px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 5px;
    }
    .modal-dark .modal-body { padding: 24px; }
    .modal-dark .btn-close { filter: invert(1) brightness(0.6); }
    .modal-dark .input-group-text {
        background: rgba(255,255,255,0.05);
        border-color: var(--border);
        color: var(--text-muted);
    }

    /* Responsive */
    @media(max-width: 768px) {
        .talent-info-col { padding: 24px 20px; }
        .talent-name { font-size: 1.5rem; }
        .tab-body { padding: 20px; }
        .copy-link-wrap { min-width: 160px; }
    }
</style>

<div class="talent-page">
    <div class="container">

        {{-- ═══════════════ HERO CARD ═══════════════ --}}
        <div class="hero-card">
            <div class="row g-0">
                {{-- Photo --}}
                <div class="col-md-4">
                    <div class="talent-photo-wrap">
                        <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}"
                             alt="{{ $talent->name }}">
                        <div class="photo-overlay"></div>
                        <div class="photo-overlay-bottom"></div>
                    </div>
                </div>

                {{-- Info --}}
                <div class="col-md-8">
                    <div class="talent-info-col">
                        <div>
                            {{-- Name & badges --}}
                            <div class="talent-skill-tag">
                                <i class="ti ti-sparkles"></i>
                                {{ $talent->category->name ?? 'Talent' }}
                            </div>
                            <h1 class="talent-name">
                                {{ $talent->name }}
                                <span class="verified-badge">
                                    <i class="ti ti-discount-check-filled"></i> Verified
                                </span>
                            </h1>

                            {{-- Rating --}}
                            <div class="rating-row mb-3">
                                <span class="stars">
                                    @for($i = 1; $i <= 5; $i++)
                                        {{ $i <= round($talent->feedback->avg('rating')) ? '★' : '☆' }}
                                    @endfor
                                </span>
                                <span class="rating-num">{{ number_format($talent->feedback->avg('rating'), 1) }}</span>
                                <span class="rating-count">({{ $talent->feedback->count() }} reviews)</span>
                            </div>

                            {{-- About snippet --}}
                            <div class="about-snippet">
                                I'm {{ $talent->name ?? 'this talent' }},
                                a passionate {{ $talent->skill ?? 'performer' }} blending
                                {{ $talent->category->name ?? 'various disciplines' }}.
                                I create immersive experiences that inspire and uplift communities.
                            </div>

                            {{-- Meta pills --}}
                            <div class="meta-pills">
                                <div class="meta-pill">
                                    <i class="ti ti-map-pin"></i>
                                    <span><strong>Based in</strong> {{ $talent->address }}</span>
                                </div>
                                <div class="meta-pill">
                                    <i class="ti ti-calendar-event"></i>
                                    <span><strong>Since</strong> {{ \Carbon\Carbon::parse($talent->created_at)->format('M Y') }}</span>
                                </div>
                                <div class="meta-pill">
                                    <i class="ti ti-language"></i>
                                    <span><strong>Speaks</strong> {{ $talent->language }}</span>
                                </div>
                            </div>

                            {{-- Actions --}}
                            <div class="action-row">
                                <a role="button" tabindex="0"
                                   data-bs-toggle="modal" data-bs-target="#modal_support"
                                   class="btn-support">
                                    <i class="ti ti-heart"></i> Support Talent
                                </a>
                                <a role="button" tabindex="0"
                                   data-bs-toggle="modal" data-bs-target="#modal_connect"
                                   class="btn-outline">
                                    <i class="ti ti-user-plus"></i> Connect
                                </a>
                            </div>
                        </div>

                        {{-- Share Section --}}
                        <div class="share-section">
                            <p class="share-label">Share Profile</p>
                            <div class="share-row">
                                {{-- Copy link --}}
                                <div class="copy-link-wrap">
                                    <input type="text" class="profile-url" id="profileUrl"
                                           value="{{ url('/talent/' . $talent->id) }}" readonly>
                                    <button class="btn-copy" id="copyBtn" onclick="copyProfileLink()">
                                        <i class="ti ti-copy"></i> Copy
                                    </button>
                                </div>

                                {{-- Native share (mobile) --}}
                                <button class="btn-native-share" id="nativeShareBtn" onclick="nativeShare()" style="display:none;">
                                    <i class="ti ti-share"></i> Share
                                </button>

                                {{-- Social icons --}}
                                <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(url('/talent/'.$talent->id)) }}"
                                   target="_blank" class="social-icon-btn" title="Share on Facebook">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/intent/tweet?url={{ urlencode(url('/talent/'.$talent->id)) }}&text={{ urlencode('Check out '.$talent->name.' on our platform!') }}"
                                   target="_blank" class="social-icon-btn" title="Share on X">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/sharing/share-offsite/?url={{ urlencode(url('/talent/'.$talent->id)) }}"
                                   target="_blank" class="social-icon-btn" title="Share on LinkedIn">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://wa.me/?text={{ urlencode('Check out '.$talent->name.' — '.url('/talent/'.$talent->id)) }}"
                                   target="_blank" class="social-icon-btn" title="Share on WhatsApp">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="mailto:?subject={{ rawurlencode('Talent Profile: '.$talent->name) }}&body={{ rawurlencode('Hey! Check out this talent profile: '.url('/talent/'.$talent->id)) }}"
                                   class="social-icon-btn" title="Share via Email">
                                    <i class="ti ti-mail"></i>
                                </a>
                            </div>
                            <p id="copyToast" style="display:none; font-size:0.75rem; color:var(--accent); margin-top:8px;">
                                <i class="ti ti-check"></i> Link copied to clipboard!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {{-- ═══════════════ TABS ═══════════════ --}}
        <div class="profile-tabs">
            <div class="tab-nav">
                <button class="tab-nav-item active" data-tab="about">About Me</button>
                <button class="tab-nav-item" data-tab="stories">Stories ({{ $talent->stories ? $talent->stories->count() : 0 }})</button>
                <button class="tab-nav-item" data-tab="courses">Courses ({{ $talent->courses ? $talent->courses->count() : 0 }})</button>
                <button class="tab-nav-item" data-tab="reviews">Reviews ({{ $talent->feedback->count() }})</button>
            </div>

            <div class="tab-body">

                {{-- ABOUT --}}
                <div class="tab-pane active" id="tab-about">
                    <div class="section-head">
                        <h3>About {{ $talent->name }}</h3>
                    </div>
                    <div class="about-full">
                        <p>
                            Hello, I'm {{ $talent->name ?? 'Unnamed Talent' }},
                            a passionate {{ $talent->skill ?? 'creative' }} and performer blending
                            {{ $talent->category->name ?? 'various disciplines' }}.
                            I create immersive experiences that inspire and uplift communities.
                            My journey has been driven by a deep love for the art and a commitment to bringing
                            authentic storytelling and performance to every audience I meet.
                        </p>
                        @if($talent->bio)
                        <p style="margin-top: 16px;">{{ $talent->bio }}</p>
                        @endif
                    </div>
                </div>

                {{-- STORIES --}}
                <div class="tab-pane" id="tab-stories">
                    <div class="section-head">
                        <h3>Stories</h3>
                        @if($talent->stories && $talent->stories->count())
                        <span class="count-badge">{{ $talent->stories->count() }}</span>
                        @endif
                    </div>

                    @if($talent->stories && $talent->stories->count())
                    <div class="card-grid">
                        @foreach($talent->stories as $story)
                        <div class="content-card">
                            <div class="content-card-img">
                                <img src="{{ asset('/assets/img/placeholder.jpg') }}" alt="{{ $story->title }}">
                                <span class="card-cat">{{ $story->category->name ?? 'Story' }}</span>
                            </div>
                            <div class="content-card-body">
                                <h5><a href="{{ url('/story-details/'.$story->slug) }}">{{ $story->title }}</a></h5>
                                <div class="card-meta">
                                    <span class="stars-sm">
                                        @for($i = 1; $i <= 5; $i++){{ $i <= round($story->comments->avg('rating')) ? '★' : '☆' }}@endfor
                                    </span>
                                    <span>{{ number_format($story->comments->avg('rating'),1) }} ({{ $story->comments->count() }})</span>
                                    <span>{{ $story->tags }}</span>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @else
                    <div class="empty-state">
                        <i class="ti ti-book-off"></i>
                        No stories published yet.
                    </div>
                    @endif
                </div>

                {{-- COURSES --}}
                <div class="tab-pane" id="tab-courses">
                    <div class="section-head">
                        <h3>Courses</h3>
                        @if($talent->courses && $talent->courses->count())
                        <span class="count-badge">{{ $talent->courses->count() }}</span>
                        @endif
                    </div>

                    @if($talent->courses && $talent->courses->count())
                    <div class="card-grid">
                        @foreach($talent->courses as $course)
                        <div class="content-card">
                            <div class="content-card-img">
                                <a href="{{ url('/course-details/' . $course->slug) }}">
                                    <img src="{{ asset('images/thumbnails/'.$course->thumbnail) }}" alt="{{ $course->title }}">
                                </a>
                                <span class="card-cat">{{ $course->category->name ?? 'Course' }}</span>
                            </div>
                            <div class="content-card-body">
                                <h5><a href="{{ url('/course/details/'.$course->slug) }}">{{ $course->title }}</a></h5>
                                <div class="card-meta">
                                    <span class="stars-sm">
                                        @for($i = 1; $i <= 5; $i++){{ $i <= round($course->feedback->avg('rating') ?? 0) ? '★' : '☆' }}@endfor
                                    </span>
                                    <span>{{ number_format($course->feedback->avg('rating') ?? 0,1) }} ({{ $course->feedback->count() }})</span>
                                    <span>{{ $course->tags }}</span>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @else
                    <div class="empty-state">
                        <i class="ti ti-school-off"></i>
                        No courses available yet.
                    </div>
                    @endif
                </div>

                {{-- REVIEWS --}}
                <div class="tab-pane" id="tab-reviews">
                    <div class="review-layout">
                        {{-- Left: ratings + list --}}
                        <div>
                            @php
                                $total   = $talent->feedback->count();
                                $average = $total ? number_format($talent->feedback->avg('rating'), 1) : '0.0';
                                $starCounts = [
                                    5 => $talent->feedback->where('rating', 5)->count(),
                                    4 => $talent->feedback->where('rating', 4)->count(),
                                    3 => $talent->feedback->where('rating', 3)->count(),
                                    2 => $talent->feedback->where('rating', 2)->count(),
                                    1 => $talent->feedback->where('rating', 1)->count(),
                                ];
                            @endphp

                            <div class="rating-summary">
                                <div class="avg-score">
                                    <div class="avg-number">{{ $average }}</div>
                                    <div class="avg-stars">
                                        @for($i = 1; $i <= 5; $i++){{ $i <= round($average) ? '★' : '☆' }}@endfor
                                    </div>
                                    <div class="avg-count">{{ $total }} reviews</div>
                                </div>
                                <div class="bars-wrap">
                                    @foreach($starCounts as $stars => $count)
                                    @php $pct = $total ? ($count / $total) * 100 : 0; @endphp
                                    <div class="bar-row">
                                        <span class="bar-label">{{ $stars }} star</span>
                                        <div class="bar-track">
                                            <div class="bar-fill" style="width:{{ $pct }}%"></div>
                                        </div>
                                        <span class="bar-count">{{ $count }}</span>
                                    </div>
                                    @endforeach
                                </div>
                            </div>

                            <div class="section-head">
                                <h3>All Reviews</h3>
                                <span class="count-badge">{{ $total }}</span>
                            </div>

                            <div class="review-list">
                                @forelse($talent->feedback as $fb)
                                <div class="review-item">
                                    <div class="reviewer-head">
                                        <img src="{{ asset('assets/img/user/profile.jpg') }}" class="reviewer-avatar" alt="">
                                        <div>
                                            <div class="reviewer-name">{{ $fb->name }}</div>
                                            <div class="reviewer-time">{{ $fb->created_at->diffForHumans() }}</div>
                                        </div>
                                        <span class="reviewer-stars ms-auto">
                                            @for($i=1;$i<=5;$i++){{ $i<=$fb->rating?'★':'☆' }}@endfor
                                        </span>
                                    </div>
                                    <p class="review-comment">{{ $fb->comment }}</p>
                                </div>
                                @empty
                                <div class="empty-state"><i class="ti ti-message-off"></i>No reviews yet.</div>
                                @endforelse
                            </div>
                        </div>

                        {{-- Right: submit form --}}
                        <div>
                            <div class="review-form-card">
                                <h4>Leave a Review</h4>
                                <form action="{{ route('talent.feedback.store') }}" method="POST">
                                    @csrf
                                    <input type="hidden" name="talent_id" value="{{ $talent->id }}">

                                    <label class="form-label">Your Rating <span style="color:var(--accent)">*</span></label>
                                    <div class="star-input-wrap">
                                        <input type="radio" name="rating" id="s5" value="5" required>
                                        <label for="s5" title="5 stars">★</label>
                                        <input type="radio" name="rating" id="s4" value="4">
                                        <label for="s4" title="4 stars">★</label>
                                        <input type="radio" name="rating" id="s3" value="3">
                                        <label for="s3" title="3 stars">★</label>
                                        <input type="radio" name="rating" id="s2" value="2">
                                        <label for="s2" title="2 stars">★</label>
                                        <input type="radio" name="rating" id="s1" value="1">
                                        <label for="s1" title="1 star">★</label>
                                    </div>

                                    <div class="row g-3" style="margin-bottom:0;">
                                        <div class="col-6">
                                            <label class="form-label">Name <span style="color:var(--accent)">*</span></label>
                                            <input type="text" name="name" class="form-control-dark" placeholder="Your name" required>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Email <span style="color:var(--accent)">*</span></label>
                                            <input type="email" name="email" class="form-control-dark" placeholder="you@mail.com" required>
                                        </div>
                                    </div>

                                    <label class="form-label" style="margin-top:2px;">Your Review <span style="color:var(--accent)">*</span></label>
                                    <textarea name="comment" class="form-control-dark" placeholder="Share your experience…" required></textarea>

                                    <button type="submit" class="btn-submit-review">Submit Review</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>


{{-- ═══════════════ SUPPORT MODAL ═══════════════ --}}
<div class="modal fade modal-dark" id="modal_support" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h5 class="modal-title">Support {{ $talent->name }}</h5>
                    <span class="accent-bar"></span>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:20px;">
                    Your contribution helps this talent grow and create more incredible work.
                </p>
                <form method="POST" action="{{ route('support.talent') }}">
                    @csrf
                    <input type="hidden" name="talent_id" value="{{ $talent->id }}">

                    <label class="form-label">Your Name</label>
                    <input type="text" name="name" class="form-control-dark" placeholder="John Doe" required>

                    <label class="form-label">Your Email</label>
                    <input type="email" name="email" class="form-control-dark" placeholder="you@example.com" required>

                    <label class="form-label">Support Amount (RWF)</label>
                    <input type="number" name="amount" class="form-control-dark" placeholder="e.g. 5000" min="1" required>

                    <label class="form-label">Message (Optional)</label>
                    <textarea name="message" class="form-control-dark" rows="3" placeholder="Write a short note..."></textarea>

                    <button type="submit" class="btn-submit-review">
                        <i class="ti ti-heart me-2"></i> Send Support
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

{{-- ═══════════════ CONNECT MODAL ═══════════════ --}}
<div class="modal fade modal-dark" id="modal_connect" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h5 class="modal-title">Connect with {{ $talent->name }}</h5>
                    <span class="accent-bar"></span>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:20px;">
                    Send a connection request and introduce yourself.
                </p>
                <form method="POST" action="{{ route('talent.connections.request', $talent->id) }}">
                    @csrf
                    <label class="form-label">Your Message</label>
                    <textarea name="message" class="form-control-dark" rows="4" placeholder="Hi! I'd love to connect…"></textarea>
                    <button type="submit" class="btn-submit-review">
                        <i class="ti ti-user-plus me-2"></i> Send Request
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>


<script>
    // ── TABS ──
    document.querySelectorAll('.tab-nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-nav-item').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById('tab-' + btn.dataset.tab);
            if (target) target.classList.add('active');
        });
    });

    // ── COPY LINK ──
    function copyProfileLink() {
        const url = document.getElementById('profileUrl').value;
        const btn = document.getElementById('copyBtn');
        const toast = document.getElementById('copyToast');

        navigator.clipboard.writeText(url).then(() => {
            btn.innerHTML = '<i class="ti ti-check"></i> Copied!';
            btn.classList.add('copied');
            toast.style.display = 'block';
            setTimeout(() => {
                btn.innerHTML = '<i class="ti ti-copy"></i> Copy';
                btn.classList.remove('copied');
                toast.style.display = 'none';
            }, 2500);
        }).catch(() => {
            // Fallback for older browsers
            const input = document.getElementById('profileUrl');
            input.select(); input.setSelectionRange(0, 99999);
            document.execCommand('copy');
            btn.innerHTML = '<i class="ti ti-check"></i> Copied!';
            setTimeout(() => { btn.innerHTML = '<i class="ti ti-copy"></i> Copy'; }, 2500);
        });
    }

    // ── NATIVE SHARE (mobile) ──
    if (navigator.share) {
        document.getElementById('nativeShareBtn').style.display = 'inline-flex';
    }
    function nativeShare() {
        if (navigator.share) {
            navigator.share({
                title: '{{ addslashes($talent->name) }} — Talent Profile',
                text: 'Check out {{ addslashes($talent->name) }} on our platform!',
                url: '{{ url('/talent/'.$talent->id) }}'
            });
        }
    }
</script>

@endsection