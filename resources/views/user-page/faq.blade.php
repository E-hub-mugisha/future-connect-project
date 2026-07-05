@extends('layouts.guest')
@section('title', 'FAQ - Future Connect')
@section('content')

<style>
    :root {
        --fq-bg: #0e1618;
        --fq-surface: #141d20;
        --fq-surface2: #1a2428;
        --fq-green: #48d597;
        --fq-green-d: rgba(0, 166, 103, 0.14);
        --fq-green-b: rgba(0, 166, 103, 0.22);
        --fq-text: #e8f0ed;
        --fq-muted: #7a9a8e;
        --fq-border: rgba(0, 166, 103, 0.16);
        --fq-border-h: rgba(0, 166, 103, 0.38);
    }

    .fq-page * {
        box-sizing: border-box;
    }

    .fq-page {
        background: var(--fq-bg);
        padding-bottom: 90px;
    }

    /* ── HERO ── */
    .fq-hero {
        position: relative;
        overflow: hidden;
        padding: 68px 0 54px;
        border-bottom: 1px solid var(--fq-border);
    }

    .fq-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--fq-green), transparent);
    }

    .fq-hero-glow {
        position: absolute;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 480px;
        height: 480px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(72, 213, 151, 0.16), transparent 70%);
        pointer-events: none;
    }

    .fq-hero-inner {
        position: relative;
        z-index: 2;
        text-align: center;
        max-width: 720px;
        margin: 0 auto;
        padding: 0 24px;
    }

    .fq-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        background: var(--fq-green-d);
        border: 1px solid var(--fq-border-h);
        color: var(--fq-green);
        border-radius: 999px;
        padding: 6px 16px;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 18px;
        font-family: 'Syne', sans-serif;
    }

    .fq-hero h1 {
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: clamp(1.8rem, 4vw, 2.6rem);
        color: #fff;
        margin-bottom: 12px;
        line-height: 1.15;
    }

    .fq-hero h1 span {
        color: var(--fq-green);
    }

    .fq-hero p {
        color: var(--fq-muted);
        font-size: 0.98rem;
        line-height: 1.7;
        margin-bottom: 30px;
    }

    /* Search */
    .fq-search-wrap {
        position: relative;
        max-width: 460px;
        margin: 0 auto;
    }

    .fq-search-wrap i {
        position: absolute;
        left: 18px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--fq-muted);
        font-size: 15px;
        pointer-events: none;
    }

    .fq-search-wrap input {
        width: 100%;
        background: var(--fq-surface);
        border: 1px solid var(--fq-border);
        border-radius: 12px;
        color: var(--fq-text);
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        padding: 14px 16px 14px 44px;
        outline: none;
        transition: border-color .2s, background .2s;
    }

    .fq-search-wrap input::placeholder {
        color: #3d5a52;
    }

    .fq-search-wrap input:focus {
        border-color: var(--fq-green);
        background: rgba(0, 166, 103, 0.06);
    }

    /* ── LAYOUT ── */
    .fq-body {
        max-width: 780px;
        margin: 0 auto;
        padding: 52px 24px 0;
    }

    .fq-count {
        font-size: 0.8rem;
        color: var(--fq-muted);
        margin-bottom: 18px;
        font-family: 'DM Sans', sans-serif;
    }

    .fq-count strong {
        color: var(--fq-green);
        font-weight: 600;
    }

    /* ── FAQ CARD / ACCORDION ── */
    .faq-lists {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .faq-card {
        background: var(--fq-surface);
        border: 1px solid var(--fq-border);
        border-radius: 14px;
        overflow: hidden;
        transition: border-color .2s, background .2s;
    }

    .faq-card:hover {
        border-color: var(--fq-border-h);
    }

    .faq-card.fq-hidden {
        display: none;
    }

    .faq-title {
        margin: 0;
    }

    .faq-title a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 18px 22px;
        font-family: 'Syne', sans-serif;
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--fq-text);
        text-decoration: none;
        cursor: pointer;
    }

    .faq-title a .fq-icon {
        flex-shrink: 0;
        width: 26px;
        height: 26px;
        border-radius: 8px;
        background: var(--fq-green-d);
        border: 1px solid var(--fq-border-h);
        color: var(--fq-green);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        transition: transform .25s, background .2s, color .2s;
    }

    .faq-title a:not(.collapsed) .fq-icon {
        background: var(--fq-green);
        color: #fff;
        transform: rotate(45deg);
    }

    .card-collapse .faq-content {
        padding: 0 22px 20px;
        border-top: 1px solid var(--fq-border);
        margin-top: -1px;
        padding-top: 14px;
    }

    .card-collapse .faq-content p {
        color: var(--fq-muted);
        font-size: 0.88rem;
        line-height: 1.7;
        margin: 0;
    }

    .fq-empty {
        display: none;
        text-align: center;
        padding: 40px 20px;
        color: var(--fq-muted);
        font-size: 0.9rem;
        border: 1px dashed var(--fq-border);
        border-radius: 14px;
    }

    .fq-empty.show {
        display: block;
    }

    /* ── ASK CTA BAND ── */
    .fq-cta {
        max-width: 780px;
        margin: 44px auto 0;
        padding: 0 24px;
    }

    .fq-cta-card {
        background: linear-gradient(135deg, var(--fq-surface), var(--fq-surface2));
        border: 1px solid var(--fq-border);
        border-radius: 18px;
        padding: 36px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
        position: relative;
        overflow: hidden;
    }

    .fq-cta-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--fq-green), transparent);
    }

    .fq-cta-text h3 {
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: 1.2rem;
        color: #fff;
        margin: 0 0 6px;
    }

    .fq-cta-text p {
        color: var(--fq-muted);
        font-size: 0.86rem;
        margin: 0;
        max-width: 420px;
        line-height: 1.6;
    }

    .fq-btn-ask {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--fq-green);
        border: 1px solid var(--fq-green);
        color: #fff;
        border-radius: 10px;
        padding: 12px 24px;
        font-family: 'Syne', sans-serif;
        font-size: 0.88rem;
        font-weight: 700;
        cursor: pointer;
        transition: background .2s, transform .15s;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .fq-btn-ask:hover {
        background: #00c07a;
        border-color: #00c07a;
        transform: translateY(-2px);
    }

    /* ── ASK MODAL ── */
    .fq-modal .modal-content {
        background: var(--fq-surface);
        border: 1px solid var(--fq-border);
        border-radius: 18px;
        color: var(--fq-text);
    }

    .fq-modal .modal-header {
        border-bottom: 1px solid var(--fq-border);
        padding: 22px 26px;
    }

    .fq-modal .modal-title {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 1.05rem;
        color: #fff;
    }

    .fq-modal .modal-title small {
        display: block;
        font-size: 0.75rem;
        color: var(--fq-muted);
        font-weight: 400;
        margin-top: 4px;
    }

    .fq-modal .btn-close {
        filter: invert(1) brightness(0.6);
    }

    .fq-modal .modal-body {
        padding: 26px;
    }

    .fq-modal .modal-footer {
        border-top: 1px solid var(--fq-border);
        padding: 18px 26px;
    }

    .fq-form-label {
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--fq-text);
        margin-bottom: 6px;
        display: block;
    }

    .fq-form-control {
        width: 100%;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fq-border);
        border-radius: 10px;
        color: var(--fq-text);
        padding: 11px 14px;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.85rem;
        outline: none;
        transition: border-color .2s;
    }

    .fq-form-control:focus {
        border-color: var(--fq-border-h);
        box-shadow: 0 0 0 3px var(--fq-green-d);
    }

    .fq-form-control::placeholder {
        color: #3d5a52;
    }

    textarea.fq-form-control {
        resize: vertical;
        min-height: 100px;
    }

    .fq-btn-outline {
        background: transparent;
        color: var(--fq-muted);
        border: 1px solid var(--fq-border);
        border-radius: 10px;
        padding: 10px 20px;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all .2s;
    }

    .fq-btn-outline:hover {
        color: #fff;
        border-color: var(--fq-border-h);
    }

    @media (max-width: 576px) {
        .fq-cta-card {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
        }

        .fq-btn-ask {
            width: 100%;
            justify-content: center;
        }
    }
</style>

<div class="fq-page">

    {{-- Hero + search --}}
    <section class="fq-hero">
        <div class="fq-hero-glow"></div>
        <div class="fq-hero-inner">
            <span class="fq-eyebrow"><i class="ti ti-help-circle"></i> Support</span>
            <h1>Frequently asked <span>questions</span></h1>
            <p>Everything you need to know before getting started. Can't find what you're looking for? Ask us directly below.</p>

            <div class="fq-search-wrap">
                <i class="ti ti-search"></i>
                <input type="text" id="fqSearchInput" placeholder="Search questions..." autocomplete="off">
            </div>
        </div>
    </section>

    <div class="fq-body">

        <p class="fq-count" id="fqCount">
            <strong>{{ $faqs->count() }}</strong> question{{ $faqs->count() === 1 ? '' : 's' }}
        </p>

        <div class="faq-wrapper">
            <div class="faq-lists" id="fqList">
                @foreach ($faqs as $index => $faq)
                <div class="faq-card aos" data-aos="fade-up" data-fq-question="{{ strtolower($faq->question) }}" data-fq-answer="{{ strtolower(strip_tags($faq->answer)) }}">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faq{{ $index }}" aria-expanded="false" aria-controls="faq{{ $index }}">
                            <span>{{ $faq->question }}</span>
                            <span class="fq-icon"><i class="ti ti-plus"></i></span>
                        </a>
                    </h4>
                    <div id="faq{{ $index }}" class="card-collapse collapse" data-bs-parent="#fqList">
                        <div class="faq-content">
                            <p>{!! nl2br(e($faq->answer)) !!}</p>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <div class="fq-empty" id="fqEmpty">
                No questions match your search. Try a different term, or ask us directly below.
            </div>
        </div>

        {{-- Ask a question CTA --}}
        <div class="fq-cta">
            <div class="fq-cta-card">
                <div class="fq-cta-text">
                    <h3>Still have questions?</h3>
                    <p>Can't find the answer you're looking for? Send us your question and our team will get back to you.</p>
                </div>
                <button type="button" class="fq-btn-ask" data-bs-toggle="modal" data-bs-target="#askQuestionModal">
                    <i class="ti ti-message-circle-2"></i> Ask a Question
                </button>
            </div>
        </div>

    </div>
</div>

{{-- ════════════════════ ASK A QUESTION MODAL ════════════════════ --}}
<div class="modal fade fq-modal" id="askQuestionModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h5 class="modal-title">
                        Ask a question
                        <small>We'll get back to you by email</small>
                    </h5>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            {{-- TODO: create a route named 'faq.ask.store' with a controller that
                 stores/emails the submitted question --}}
            <form action="{{ route('faq.ask.store') }}" method="POST">
                @csrf
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="fq-form-label">Your Question <span style="color:var(--fq-green)">*</span></label>
                            <textarea name="question" class="fq-form-control" rows="4" placeholder="Type your question here..." required>{{ old('question') }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="gap:10px;">
                    <button type="button" class="fq-btn-outline" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="fq-btn-ask">
                        <i class="ti ti-send"></i> Submit Question
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    (function() {
        const input = document.getElementById('fqSearchInput');
        const cards = Array.from(document.querySelectorAll('#fqList .faq-card'));
        const empty = document.getElementById('fqEmpty');
        const count = document.getElementById('fqCount');
        const total = cards.length;

        if (!input) return;

        input.addEventListener('input', () => {
            const term = input.value.trim().toLowerCase();
            let visible = 0;

            cards.forEach(card => {
                const question = card.getAttribute('data-fq-question') || '';
                const answer = card.getAttribute('data-fq-answer') || '';
                const matches = !term || question.includes(term) || answer.includes(term);
                card.classList.toggle('fq-hidden', !matches);
                if (matches) visible++;
            });

            empty.classList.toggle('show', visible === 0);
            count.innerHTML = term
                ? `<strong>${visible}</strong> of ${total} question${total === 1 ? '' : 's'}`
                : `<strong>${total}</strong> question${total === 1 ? '' : 's'}`;
        });
    })();
</script>

@endsection