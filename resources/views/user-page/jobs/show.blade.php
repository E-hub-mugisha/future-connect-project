@extends('layouts.guest')
@section('title', $job->title)
@section('content')

<style>
    /* ── Tokens ─────────────────────────────────────── */
    :root {
        --bg: #0e1618;
        --surface: #131e21;
        --surface-2: #192428;
        --border: rgba(255, 255, 255, .08);
        --accent: #48d597;
        --accent-dim: rgba(72, 213, 151, .10);
        --accent-glow: rgba(72, 213, 151, .18);
        --text: #F5f5f7;
        --muted: rgba(255, 255, 255, .45);
        --radius: 12px;
        --radius-sm: 8px;
    }

    /* ── Page shell ─────────────────────────────────── */
    .jd-page {
        background: var(--bg);
        min-height: 100vh;
        padding: 48px 0 80px;
        font-family: 'DM Sans', sans-serif;
    }

    /* ── Hero banner ────────────────────────────────── */
    .jd-hero {
        position: relative;
        border-radius: var(--radius);
        overflow: hidden;
        margin-bottom: 28px;
        height: 220px;
    }

    .jd-hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(.45) saturate(.6);
    }

    .jd-hero__overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 30%, rgba(14, 22, 24, .92) 100%);
        display: flex;
        align-items: flex-end;
        padding: 24px 28px;
    }

    .jd-hero__title {
        font-family: 'Syne', sans-serif;
        font-size: clamp(22px, 3vw, 32px);
        font-weight: 800;
        color: var(--text);
        margin: 0;
        line-height: 1.2;
    }

    /* ── Meta strip ─────────────────────────────────── */
    .jd-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 0 20px;
        border-bottom: 1px solid var(--border);
        margin-bottom: 28px;
    }

    .jd-meta__left {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        align-items: center;
    }

    .jd-meta__item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--muted);
    }

    .jd-meta__item a {
        color: var(--accent);
        text-decoration: none;
        font-weight: 600;
    }

    .jd-meta__item a:hover {
        text-decoration: underline;
    }

    .jd-meta__item i {
        font-size: 14px;
    }

    .jd-badge {
        display: inline-flex;
        align-items: center;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        background: var(--accent-dim);
        color: var(--accent);
        border: 1px solid rgba(72, 213, 151, .25);
    }

    /* ── Section labels ─────────────────────────────── */
    .jd-section-label {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: .1em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 10px;
    }

    /* ── Description ─────────────────────────────────── */
    .jd-description {
        font-size: 15px;
        color: rgba(255, 255, 255, .75);
        line-height: 1.75;
        margin-bottom: 28px;
    }

    /* ── Info pills row ─────────────────────────────── */
    .jd-info-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 28px;
    }

    .jd-info-pill {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--surface-2);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: 10px 16px;
        font-size: 13px;
        color: rgba(255, 255, 255, .75);
    }

    .jd-info-pill strong {
        color: var(--text);
        font-weight: 600;
        margin-right: 4px;
    }

    .jd-info-pill i {
        color: var(--accent);
        font-size: 15px;
    }

    /* ── Skills ─────────────────────────────────────── */
    .jd-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 32px;
    }

    .jd-skill-tag {
        padding: 5px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        background: var(--surface-2);
        border: 1px solid var(--border);
        color: rgba(255, 255, 255, .75);
        transition: border-color .2s, color .2s;
    }

    .jd-skill-tag:hover {
        border-color: var(--accent);
        color: var(--accent);
    }

    /* ── Company card ───────────────────────────────── */
    .jd-company {
        display: flex;
        align-items: center;
        gap: 16px;
        background: var(--surface-2);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 20px 20px;
        margin-bottom: 32px;
    }

    .jd-company__avatar {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--accent-dim);
        flex-shrink: 0;
    }

    .jd-company__name {
        font-family: 'Syne', sans-serif;
        font-size: 15px;
        font-weight: 700;
        color: var(--text);
        margin: 0 0 4px;
    }

    .jd-company__bio {
        font-size: 13px;
        color: var(--muted);
        margin: 0;
        line-height: 1.5;
    }

    /* ── Apply CTA ──────────────────────────────────── */
    .jd-apply-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 32px;
        border-radius: var(--radius-sm);
        background: var(--accent);
        color: #0e1618;
        font-size: 15px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        font-family: 'DM Sans', sans-serif;
        transition: background .2s, transform .15s;
        text-decoration: none;
    }

    .jd-apply-btn:hover {
        background: #5fe8a8;
        color: #0e1618;
        transform: translateY(-1px);
    }

    .jd-apply-btn i {
        font-size: 16px;
    }

    /* ── Sidebar cards ──────────────────────────────── */
    .jd-sidebar-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        overflow: hidden;
        margin-bottom: 20px;
        transition: border-color .25s;
    }

    .jd-sidebar-card:hover {
        border-color: rgba(255, 255, 255, .15);
    }

    .jd-sidebar-card__header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 14px 18px;
        border-bottom: 1px solid var(--border);
    }

    .jd-sidebar-card__header img {
        width: 18px;
        height: 18px;
        opacity: .7;
    }

    .jd-sidebar-card__header h6 {
        font-size: 13px;
        font-weight: 700;
        color: var(--text);
        margin: 0;
        letter-spacing: .02em;
    }

    .jd-sidebar-card__body {
        padding: 16px 18px;
    }

    /* Categories */
    .jd-cat-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .jd-cat-list li a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        font-size: 13px;
        color: var(--muted);
        text-decoration: none;
        transition: background .2s, color .2s;
    }

    .jd-cat-list li a:hover,
    .jd-cat-list li a.active {
        background: var(--accent-dim);
        color: var(--accent);
    }

    /* Recent jobs */
    .jd-recent-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .jd-recent-item {
        display: flex;
        gap: 12px;
        align-items: flex-start;
    }

    .jd-recent-item__thumb {
        width: 54px;
        height: 44px;
        border-radius: 6px;
        object-fit: cover;
        flex-shrink: 0;
        border: 1px solid var(--border);
    }

    .jd-recent-item__title a {
        font-size: 13px;
        font-weight: 600;
        color: rgba(255, 255, 255, .8);
        text-decoration: none;
        line-height: 1.4;
        display: block;
        margin-bottom: 4px;
    }

    .jd-recent-item__title a:hover {
        color: var(--accent);
    }

    .jd-recent-item__meta {
        font-size: 11px;
        color: var(--muted);
    }

    /* Tags */
    .jd-tags-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .jd-tags-list li a {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 500;
        background: var(--surface-2);
        border: 1px solid var(--border);
        color: var(--muted);
        text-decoration: none;
        transition: border-color .2s, color .2s, background .2s;
    }

    .jd-tags-list li a:hover {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--accent-dim);
    }

    /* ── Modals ─────────────────────────────────────── */
    .jd-modal .modal-content {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        color: var(--text);
    }

    .jd-modal .modal-header {
        border-bottom: 1px solid var(--border);
        padding: 18px 24px;
    }

    .jd-modal .modal-title {
        font-family: 'Syne', sans-serif;
        font-size: 17px;
        font-weight: 700;
    }

    .jd-modal .modal-body {
        padding: 24px;
    }

    .jd-modal .form-label {
        font-size: 13px;
        font-weight: 600;
        color: rgba(255, 255, 255, .7);
        margin-bottom: 6px;
    }

    .jd-modal .form-control {
        background: var(--surface-2);
        border: 1px solid var(--border);
        color: var(--text);
        border-radius: var(--radius-sm);
        font-size: 14px;
        padding: 10px 14px;
        font-family: 'DM Sans', sans-serif;
    }

    .jd-modal .form-control:focus {
        background: var(--surface-2);
        border-color: var(--accent);
        color: var(--text);
        box-shadow: 0 0 0 3px var(--accent-glow);
    }

    .jd-modal .form-control::placeholder {
        color: var(--muted);
    }

    .jd-modal-submit {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 28px;
        background: var(--accent);
        color: #0e1618;
        border: none;
        border-radius: var(--radius-sm);
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        font-family: 'DM Sans', sans-serif;
        transition: background .2s;
    }

    .jd-modal-submit:hover {
        background: #5fe8a8;
    }

    .jd-modal-subscribe .modal-content {
        background: var(--surface);
        border: 1px solid rgba(72, 213, 151, .2);
        border-radius: var(--radius);
        color: var(--text);
    }

    .jd-modal-subscribe .modal-header {
        border-bottom: 1px solid rgba(72, 213, 151, .15);
        padding: 18px 24px;
    }

    .jd-modal-subscribe .modal-title {
        font-family: 'Syne', sans-serif;
        font-size: 17px;
        font-weight: 700;
        color: var(--accent);
    }

    .jd-modal-subscribe .modal-body {
        padding: 24px;
        font-size: 14px;
        color: rgba(255, 255, 255, .75);
        line-height: 1.65;
    }

    .jd-modal-subscribe .modal-footer {
        border-top: 1px solid var(--border);
        padding: 16px 24px;
        gap: 10px;
    }

    .jd-subscribe-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 24px;
        background: var(--accent);
        color: #0e1618;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        border: none;
        transition: background .2s;
    }

    .jd-subscribe-btn:hover {
        background: #5fe8a8;
        color: #0e1618;
    }

    .jd-close-btn {
        padding: 10px 24px;
        background: transparent;
        color: var(--muted);
        border: 1px solid var(--border);
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: border-color .2s, color .2s;
        font-family: 'DM Sans', sans-serif;
    }

    .jd-close-btn:hover {
        border-color: rgba(255, 255, 255, .25);
        color: var(--text);
    }
</style>

<div class="jd-page">
    <div class="container">
        <div class="row g-4">

            {{-- ════════════════════════════════════════
                 MAIN COLUMN
            ════════════════════════════════════════ --}}
            <div class="col-lg-8">
                <div class="col-lg-10 mx-auto">

                    {{-- Hero --}}
                    <div class="jd-hero">
                        <img src="{{ asset('assets/img/blog/blog-large-01.jpg') }}" alt="">
                        <div class="jd-hero__overlay">
                            <h1 class="jd-hero__title">{{ $job->title }}</h1>
                        </div>
                    </div>

                    {{-- Meta strip --}}
                    <div class="jd-meta">
                        <div class="jd-meta__left">
                            <span class="jd-meta__item">
                                <i class="feather-briefcase"></i>
                                <a href="javascript:void(0);">{{ $job->company->name }}</a>
                            </span>
                            <span class="jd-meta__item">
                                <i class="feather-calendar"></i>
                                {{ $job->updated_at->format('M d, Y') }}
                            </span>
                            <span class="jd-meta__item">
                                <i class="feather-map-pin"></i>
                                {{ $job->location ?? 'Remote' }}
                            </span>
                        </div>
                        <span class="jd-badge">{{ $job->type ?? 'Full-time' }}</span>
                    </div>

                    {{-- Description --}}
                    <p class="jd-section-label">About this role</p>
                    <p class="jd-description">{{ $job->description }}</p>

                    {{-- Info pills --}}
                    <div class="jd-info-row">
                        <div class="jd-info-pill">
                            <i class="feather-trending-up"></i>
                            <span><strong>Experience</strong> {{ $job->experience_level ?? 'Any' }}</span>
                        </div>
                        <div class="jd-info-pill">
                            <i class="feather-dollar-sign"></i>
                            <span><strong>Salary</strong> {{ $job->salary_range ?? 'Negotiable' }}</span>
                        </div>
                    </div>

                    {{-- Skills --}}
                    <p class="jd-section-label">Skills Required</p>
                    <div class="jd-skills mb-4">
                        @foreach($job->skills_list as $skill)
                        <span class="jd-skill-tag">{{ $skill }}</span>
                        @endforeach
                    </div>

                    {{-- Company card --}}
                    <p class="jd-section-label">About the company</p>
                    <div class="jd-company">
                        <img src="{{ asset('assets/img/user/user-06.jpg') }}" class="jd-company__avatar" alt="">
                        <div>
                            <p class="jd-company__name">{{ $job->company->name }}</p>
                            <p class="jd-company__bio">Experienced project management and digital talent acquisition team focused on connecting top Rwandan talent with global opportunities.</p>
                        </div>
                    </div>

                    {{-- Apply CTA --}}
                    <button
                        class="jd-apply-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#jobModal">
                        <i class="feather-send"></i>
                        Apply for this Job
                    </button>

                </div>
            </div>
            {{-- /Main column --}}

            {{-- ════════════════════════════════════════
                 SIDEBAR
            ════════════════════════════════════════ --}}
            <div class="col-lg-4">

                {{-- Categories --}}
                <div class="jd-sidebar-card">
                    <div class="jd-sidebar-card__header">
                        <img src="{{ asset('assets/img/icons/category-icon.svg') }}" alt="">
                        <h6>Categories</h6>
                    </div>
                    <div class="jd-sidebar-card__body">
                        <ul class="jd-cat-list">
                            @foreach($categories as $cat)
                            <li>
                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['category' => $cat->id])) }}"
                                    class="{{ request('category') == $cat->id ? 'active' : '' }}">
                                    {{ $cat->name }}
                                    <span class="jd-badge" style="font-size:10px;padding:2px 8px;">{{ $cat->job_sections_count }}</span>
                                </a>
                            </li>
                            @endforeach
                        </ul>
                    </div>
                </div>

                {{-- Recent Jobs --}}
                <div class="jd-sidebar-card">
                    <div class="jd-sidebar-card__header">
                        <img src="{{ asset('assets/img/icons/blog-icon.svg') }}" alt="">
                        <h6>Recent Jobs</h6>
                    </div>
                    <div class="jd-sidebar-card__body">
                        <ul class="jd-recent-list">
                            @foreach($recent as $recentJob)
                            <li class="jd-recent-item">
                                <img class="jd-recent-item__thumb"
                                    src="{{ asset('assets/img/blog/blog-thumb-01.jpg') }}"
                                    alt="">
                                <div class="jd-recent-item__title">
                                    <a href="{{ route('user.jobs.show', $recentJob->id) }}">{{ $recentJob->title }}</a>
                                    <div class="jd-recent-item__meta">
                                        {{ $recentJob->company->name }} &middot; {{ $recentJob->updated_at->format('M d, Y') }}
                                    </div>
                                </div>
                            </li>
                            @endforeach
                        </ul>
                    </div>
                </div>

                {{-- Popular Tags --}}
                <div class="jd-sidebar-card">
                    <div class="jd-sidebar-card__header">
                        <img src="{{ asset('assets/img/icons/tag-icon.svg') }}" alt="">
                        <h6>Popular Tags</h6>
                    </div>
                    <div class="jd-sidebar-card__body">
                        <ul class="jd-tags-list">
                            <li><a href="#">In-Demand Skills</a></li>
                            <li><a href="#">Freelancing</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Future Trends</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">Home Care</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            {{-- /Sidebar --}}

        </div>
    </div>
</div>

{{-- ════════════════════════════════════════
     APPLY MODAL
════════════════════════════════════════ --}}
<div class="modal fade jd-modal" id="jobModal" tabindex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="jobModalLabel">
                    Apply for &ldquo;{{ $job->title }}&rdquo;
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="{{ route('user.jobs.apply', $job->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="mb-4">
                        <label class="form-label">Cover Letter</label>
                        <textarea name="cover_letter" class="form-control" rows="5"
                            placeholder="Tell the employer why you're a great fit…" required>{{ old('cover_letter') }}</textarea>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Resume (PDF / DOC)</label>
                        <input type="file" name="resume" class="form-control" required>
                    </div>
                    <button type="submit" class="jd-modal-submit">
                        <i class="feather-send"></i> Submit Application
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

{{-- ════════════════════════════════════════
     SUBSCRIBE MODAL
════════════════════════════════════════ --}}
<div class="modal fade jd-modal-subscribe" id="subscribeModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Subscription Required</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>To apply for jobs on FutureConnect, you need an active subscription.</p>
                <p class="mb-0">Upgrade your plan to start applying and get noticed by top companies.</p>
            </div>
            <div class="modal-footer">
                <a href="{{ route('pricing') }}" class="jd-subscribe-btn">
                    <i class="feather-zap"></i> Subscribe Now
                </a>
                <button type="button" class="jd-close-btn" data-bs-dismiss="modal">Not now</button>
            </div>
        </div>
    </div>
</div>

@if(session('showSubscribeModal'))
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new bootstrap.Modal(document.getElementById('subscribeModal')).show();
    });
</script>
@endif

<script>
/* ── Apply form validation ── */

/* Character counter for cover letter */
const coverEl = document.getElementById('cover_letter');
const coverCount = document.getElementById('coverCount');
if (coverEl) {
    coverEl.addEventListener('input', function () {
        const len = this.value.trim().length;
        coverCount.textContent = len;
        coverCount.style.color = len >= 50 ? '#48d597' : '#f07070';
    });
    /* init count on page load (for old() repopulation) */
    coverCount.textContent = coverEl.value.trim().length;
}

function validateApplyForm(e) {
    e.preventDefault();
    let valid = true;

    /* ── Cover letter ── */
    const cover = document.getElementById('cover_letter');
    if (!cover || cover.value.trim().length < 50) {
        showApplyErr('wrap-cover', 'err-cover', cover);
        valid = false;
    } else {
        clearApplyErr('wrap-cover', 'cover_letter');
    }

    /* ── Resume: required + type + size ── */
    const resume = document.getElementById('resume');
    const allowedTypes = ['application/pdf',
                          'application/msword',
                          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const allowedExts  = /\.(pdf|doc|docx)$/i;
    const maxBytes     = 5 * 1024 * 1024; // 5 MB

    let resumeMsg = '';
    if (!resume || resume.files.length === 0) {
        resumeMsg = 'Please upload your resume.';
    } else {
        const file = resume.files[0];
        if (!allowedExts.test(file.name) && !allowedTypes.includes(file.type)) {
            resumeMsg = 'Only PDF, DOC, or DOCX files are accepted.';
        } else if (file.size > maxBytes) {
            resumeMsg = 'File size must not exceed 5 MB.';
        }
    }

    if (resumeMsg) {
        document.getElementById('err-resume').textContent = resumeMsg;
        showApplyErr('wrap-resume', 'err-resume', resume);
        valid = false;
    } else {
        clearApplyErr('wrap-resume', 'resume');
    }

    /* ── Submit if all pass ── */
    if (valid) {
        /* Disable button to prevent double-submit */
        const btn = document.getElementById('applySubmitBtn');
        btn.disabled = true;
        btn.innerHTML = '<i class="feather-loader"></i> Submitting…';
        document.getElementById('applyForm').submit();
    } else {
        /* Scroll to first error inside modal */
        const firstErr = document.querySelector('.modal.show .is-invalid, .modal.show .fc-invalid');
        if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function showApplyErr(wrapId, errId, inputEl) {
    const wrap = document.getElementById(wrapId);
    const err  = document.getElementById(errId);
    if (wrap)    wrap.classList.add('fc-invalid-wrap');
    if (inputEl) inputEl.classList.add('is-invalid');
    if (err)     err.style.display = 'block';
}

function clearApplyErr(wrapId, inputId) {
    const wrap  = document.getElementById(wrapId);
    const input = document.getElementById(inputId);
    const err   = wrap ? wrap.querySelector('.invalid-feedback') : null;
    if (wrap)  wrap.classList.remove('fc-invalid-wrap');
    if (input) input.classList.remove('is-invalid');
    if (err)   err.style.display = 'none';
}
</script>

@endsection