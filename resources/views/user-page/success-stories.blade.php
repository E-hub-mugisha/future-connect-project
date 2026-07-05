@extends('layouts.guest')
@section('title', 'Success Stories | Future Connect')
@section('content')

@php
// Adjust the query/paginate size to taste. Kept simple since
// SuccessStory has no `is_published` flag on the model shown.
$ssStories = \App\Models\SuccessStory::latest()->paginate(9)->withQueryString();
$ssSearch = request('search');
$ssRole = request('role');

// Distinct roles, used as quick filter chips.
$ssRoles = \App\Models\SuccessStory::whereNotNull('role')
->where('role', '!=', '')
->distinct()
->orderBy('role')
->pluck('role');
@endphp

<style>
    :root {
        --ss-bg: #0e1618;
        --ss-surface: #141d20;
        --ss-surface2: #1a2428;
        --ss-green: #48d597;
        --ss-green-dim: rgba(0, 166, 103, .14);
        --ss-green-glow: rgba(0, 166, 103, .28);
        --ss-text: #e8f0ed;
        --ss-muted: #7a9a8e;
        --ss-border: rgba(0, 166, 103, .16);
        --ss-border-h: rgba(0, 166, 103, .38);
        --ss-radius: 14px;
    }

    .ss-page,
    .ss-page *,
    .ss-page *::before,
    .ss-page *::after {
        box-sizing: border-box;
    }

    .ss-page {
        background: var(--ss-bg);
        font-family: 'DM Sans', sans-serif;
        color: var(--ss-text);
        padding-bottom: 60px;
    }

    /* ── Breadcrumb / hero ── */
    .ss-breadcrumb {
        background: linear-gradient(145deg, #091315 0%, #0c1e21 65%, #081213 100%);
        border-bottom: 1px solid var(--ss-border);
        padding: 44px 0 36px;
        position: relative;
        overflow: hidden;
        text-align: center;
    }

    .ss-breadcrumb::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(0, 166, 103, .05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 166, 103, .05) 1px, transparent 1px);
        background-size: 36px 36px;
        pointer-events: none;
    }

    .ss-breadcrumb .page-breadcrumb {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
    }

    .ss-breadcrumb .breadcrumb {
        margin-bottom: 14px;
    }

    .ss-breadcrumb .breadcrumb-item a {
        color: var(--ss-muted);
        font-size: 13px;
        text-decoration: none;
        transition: color .2s;
    }

    .ss-breadcrumb .breadcrumb-item a:hover {
        color: var(--ss-green);
    }

    .ss-breadcrumb .breadcrumb-item.active,
    .ss-breadcrumb .breadcrumb-item[aria-current="page"] {
        color: var(--ss-green);
        font-size: 13px;
    }

    .ss-breadcrumb .breadcrumb-item+.breadcrumb-item::before {
        color: var(--ss-muted);
        content: "/";
    }

    .ss-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(0, 166, 103, .1);
        border: 1px solid rgba(0, 166, 103, .2);
        border-radius: 99px;
        padding: 5px 14px;
        font-size: 11.5px;
        color: var(--ss-green);
        font-weight: 500;
        margin-bottom: 16px;
        position: relative;
        z-index: 1;
    }

    .ss-pill::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--ss-green);
        display: inline-block;
    }

    .ss-breadcrumb-title {
        position: relative;
        z-index: 1;
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: clamp(26px, 3.6vw, 40px);
        letter-spacing: -1px;
        color: #fff;
        margin: 0 0 10px;
    }

    .ss-breadcrumb-sub {
        position: relative;
        z-index: 1;
        color: var(--ss-muted);
        font-size: 14px;
        max-width: 560px;
        margin: 0 auto 22px;
        line-height: 1.6;
    }

    .ss-hero-cta {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--ss-green);
        color: #06120d;
        font-weight: 700;
        font-size: 13.5px;
        padding: 12px 22px;
        border-radius: 10px;
        border: none;
        text-decoration: none;
        transition: background .2s, transform .2s;
    }

    .ss-hero-cta:hover {
        background: #00c07a;
        color: #06120d;
        transform: translateY(-2px);
    }

    /* ── Page content ── */
    .ss-page-content {
        padding-top: 40px;
    }

    /* ── CTA banner ── */
    .ss-cta-banner {
        background: linear-gradient(120deg, var(--ss-surface) 0%, #10201b 100%);
        border: 1px solid var(--ss-border);
        border-radius: var(--ss-radius);
        padding: 30px 34px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
        margin-bottom: 30px;
        position: relative;
        overflow: hidden;
    }

    .ss-cta-banner::after {
        content: '';
        position: absolute;
        right: -60px;
        top: -60px;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, var(--ss-green-glow) 0%, transparent 70%);
        pointer-events: none;
    }

    .ss-cta-banner-text {
        position: relative;
        z-index: 1;
        max-width: 560px;
    }

    .ss-cta-banner-text h4 {
        font-family: 'Syne', sans-serif;
        color: #fff;
        font-weight: 700;
        font-size: 19px;
        margin: 0 0 6px;
    }

    .ss-cta-banner-text p {
        color: var(--ss-muted);
        font-size: 13.5px;
        margin: 0;
        line-height: 1.6;
    }

    .ss-cta-banner-btn {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--ss-green);
        color: #06120d;
        font-weight: 700;
        font-size: 13.5px;
        padding: 13px 24px;
        border-radius: 10px;
        border: none;
        white-space: nowrap;
        cursor: pointer;
        transition: background .2s, transform .2s;
    }

    .ss-cta-banner-btn:hover {
        background: #00c07a;
        transform: translateY(-2px);
    }

    /* ── Filter bar ── */
    .ss-filter-bar {
        background: var(--ss-surface);
        border: 1px solid var(--ss-border);
        border-radius: var(--ss-radius);
        padding: 18px 20px;
        display: flex;
        align-items: center;
        gap: 18px;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }

    .ss-search-form {
        position: relative;
        flex: 1;
        min-width: 220px;
    }

    .ss-search-form input {
        width: 100%;
        background: var(--ss-surface2);
        border: 1px solid var(--ss-border);
        border-radius: 10px;
        color: var(--ss-text);
        font-size: 13.5px;
        padding: 11px 40px 11px 14px;
        outline: none;
        transition: border-color .2s, background .2s;
    }

    .ss-search-form input::placeholder {
        color: #3d5a52;
    }

    .ss-search-form input:focus {
        border-color: var(--ss-green);
        background: rgba(0, 166, 103, .06);
    }

    .ss-search-form button {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        border-radius: 7px;
        background: var(--ss-green);
        border: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background .2s;
    }

    .ss-search-form button:hover {
        background: #00c07a;
    }

    .ss-role-chips {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }

    .ss-chip {
        font-size: 12.5px;
        font-weight: 500;
        color: var(--ss-muted);
        background: var(--ss-surface2);
        border: 1px solid var(--ss-border);
        padding: 8px 15px;
        border-radius: 99px;
        text-decoration: none;
        transition: all .18s;
        white-space: nowrap;
    }

    .ss-chip:hover {
        color: #fff;
        border-color: var(--ss-border-h);
    }

    .ss-chip.active {
        color: #fff;
        background: var(--ss-green-dim);
        border-color: var(--ss-border-h);
        font-weight: 600;
    }

    .ss-clear-filters {
        font-size: 12.5px;
        color: var(--ss-green);
        text-decoration: none;
        white-space: nowrap;
    }

    .ss-clear-filters:hover {
        text-decoration: underline;
    }

    /* ── Results head ── */
    .ss-results-count {
        font-size: 13.5px;
        color: var(--ss-muted);
        margin-bottom: 20px;
    }

    .ss-results-count strong {
        color: var(--ss-text);
        font-weight: 600;
    }

    /* ── Story cards ── */
    .ss-grid-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .ss-card {
        background: var(--ss-surface);
        border: 1px solid var(--ss-border);
        border-radius: var(--ss-radius);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform .25s, box-shadow .25s, border-color .25s;
        cursor: pointer;
    }

    .ss-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 44px rgba(0, 0, 0, .4);
        border-color: var(--ss-border-h);
    }

    .ss-card-img {
        position: relative;
        aspect-ratio: 16/10;
        overflow: hidden;
        background: var(--ss-surface2);
    }

    .ss-card-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .4s;
    }

    .ss-card:hover .ss-card-img img {
        transform: scale(1.06);
    }

    .ss-card-quote-icon {
        position: absolute;
        top: 12px;
        left: 12px;
        width: 34px;
        height: 34px;
        border-radius: 9px;
        background: rgba(8, 15, 17, .75);
        backdrop-filter: blur(6px);
        border: 1px solid var(--ss-border-h);
        color: var(--ss-green);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
    }

    .ss-card-body {
        padding: 22px;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .ss-card-title {
        font-family: 'Syne', sans-serif;
        font-size: 16.5px;
        font-weight: 700;
        line-height: 1.35;
        margin: 0 0 10px;
    }

    .ss-card-title button {
        background: none;
        border: none;
        padding: 0;
        color: #fff;
        text-decoration: none;
        transition: color .18s;
        text-align: left;
        font-family: 'Syne', sans-serif;
        font-size: 16.5px;
        font-weight: 700;
        line-height: 1.35;
    }

    .ss-card:hover .ss-card-title button {
        color: var(--ss-green);
    }

    .ss-card-excerpt {
        font-size: 13px;
        color: var(--ss-muted);
        line-height: 1.65;
        margin: 0 0 20px;
        flex: 1;
        font-style: italic;
    }

    .ss-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 16px;
        border-top: 1px solid var(--ss-border);
    }

    .ss-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--ss-green-dim);
        border: 1px solid var(--ss-border-h);
        color: var(--ss-green);
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ss-card-person {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .ss-card-person-name {
        font-size: 12.5px;
        font-weight: 600;
        color: var(--ss-text);
    }

    .ss-card-person-role {
        font-size: 11px;
        color: var(--ss-muted);
        margin-top: 1px;
    }

    .ss-card-arrow {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--ss-border);
        color: var(--ss-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all .2s;
        flex-shrink: 0;
        background: none;
        cursor: pointer;
    }

    .ss-card:hover .ss-card-arrow {
        color: var(--ss-green);
        border-color: var(--ss-border-h);
        transform: translateX(2px);
    }

    /* ── Empty state ── */
    .ss-empty {
        text-align: center;
        padding: 70px 20px;
        background: var(--ss-surface);
        border: 1px dashed var(--ss-border);
        border-radius: var(--ss-radius);
    }

    .ss-empty i {
        font-size: 34px;
        color: var(--ss-muted);
        margin-bottom: 12px;
        display: inline-block;
    }

    .ss-empty h5 {
        color: #fff;
        font-family: 'Syne', sans-serif;
        margin-bottom: 6px;
    }

    .ss-empty p {
        color: var(--ss-muted);
        font-size: 13.5px;
        margin: 0;
    }

    /* ── Pagination ── */
    .ss-pagination-wrap {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }

    .ss-pagination-wrap nav ul.pagination {
        gap: 6px;
    }

    .ss-pagination-wrap .page-link {
        background: var(--ss-surface);
        border: 1px solid var(--ss-border);
        color: var(--ss-muted);
        border-radius: 8px !important;
        margin: 0;
    }

    .ss-pagination-wrap .page-item.active .page-link {
        background: var(--ss-green);
        border-color: var(--ss-green);
        color: #fff;
    }

    .ss-pagination-wrap .page-link:hover {
        color: var(--ss-green);
        border-color: var(--ss-border-h);
    }

    /* ── Modals ── */
    .ss-modal .modal-content {
        background: var(--ss-surface);
        border: 1px solid var(--ss-border-h);
        border-radius: var(--ss-radius);
        color: var(--ss-text);
    }

    .ss-modal .modal-header {
        border-bottom: 1px solid var(--ss-border);
        padding: 20px 24px;
    }

    .ss-modal .modal-title {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        color: #fff;
        font-size: 18px;
    }

    .ss-modal .modal-body {
        padding: 24px;
    }

    .ss-modal .modal-footer {
        border-top: 1px solid var(--ss-border);
        padding: 16px 24px;
    }

    .ss-modal .btn-close {
        filter: invert(1) grayscale(1) brightness(1.6);
        opacity: .7;
    }

    .ss-form-label {
        font-size: 12.5px;
        font-weight: 600;
        color: var(--ss-muted);
        margin-bottom: 6px;
        display: block;
    }

    .ss-form-control {
        width: 100%;
        background: var(--ss-surface2);
        border: 1px solid var(--ss-border);
        border-radius: 9px;
        color: var(--ss-text);
        font-size: 13.5px;
        padding: 11px 14px;
        outline: none;
        transition: border-color .2s, background .2s;
    }

    .ss-form-control::placeholder {
        color: #3d5a52;
    }

    .ss-form-control:focus {
        border-color: var(--ss-green);
        background: rgba(0, 166, 103, .06);
    }

    textarea.ss-form-control {
        resize: vertical;
        min-height: 90px;
    }

    .ss-form-group {
        margin-bottom: 16px;
    }

    .ss-form-error {
        color: #ff8a8a;
        font-size: 11.5px;
        margin-top: 5px;
    }

    .ss-btn-primary {
        background: var(--ss-green);
        color: #06120d;
        font-weight: 700;
        font-size: 13.5px;
        border: none;
        border-radius: 9px;
        padding: 11px 22px;
        cursor: pointer;
        transition: background .2s;
    }

    .ss-btn-primary:hover {
        background: #00c07a;
    }

    .ss-btn-secondary {
        background: transparent;
        color: var(--ss-muted);
        font-weight: 600;
        font-size: 13.5px;
        border: 1px solid var(--ss-border);
        border-radius: 9px;
        padding: 11px 22px;
        cursor: pointer;
        transition: all .2s;
    }

    .ss-btn-secondary:hover {
        color: var(--ss-text);
        border-color: var(--ss-border-h);
    }

    .ss-alert-success {
        background: rgba(0, 166, 103, .1);
        border: 1px solid var(--ss-border-h);
        color: var(--ss-green);
        border-radius: 10px;
        padding: 12px 16px;
        font-size: 13px;
        margin-bottom: 24px;
    }

    /* Detail modal specific */
    .ss-detail-img {
        width: 100%;
        aspect-ratio: 16/8;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 20px;
        background: var(--ss-surface2);
    }

    .ss-detail-person {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 18px;
        padding-bottom: 18px;
        border-bottom: 1px solid var(--ss-border);
    }

    .ss-detail-content {
        font-size: 14px;
        line-height: 1.8;
        color: var(--ss-text);
    }

    .ss-detail-content p {
        margin-bottom: 14px;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 991px) {
        .ss-grid-row {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .ss-grid-row {
            grid-template-columns: 1fr;
        }

        .ss-filter-bar {
            flex-direction: column;
            align-items: stretch;
        }

        .ss-cta-banner {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
        }

        .ss-cta-banner-btn {
            justify-content: center;
        }
    }
</style>

<div class="ss-page">

    <!-- Breadcrumb / hero -->
    <div class="ss-breadcrumb">
        <div class="container">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="{{ route('user.home') }}">Home</a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">Success Stories</li>
                </ol>
            </nav>
            <div class="ss-pill">Real People, Real Results</div>
            <h2 class="ss-breadcrumb-title">Success Stories</h2>
            <p class="ss-breadcrumb-sub">Meet the talents and clients who found real opportunity through Future Connect.</p>
            <button type="button" class="ss-hero-cta" data-bs-toggle="modal" data-bs-target="#ssSubmitModal">
                <i class="feather-edit-3"></i> Share Your Story
            </button>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="ss-page-content">
        <div class="container">

            @if (session('story_submitted'))
            <div class="ss-alert-success">
                <i class="feather-check-circle"></i>
                {{ session('story_submitted') }}
            </div>
            @endif

            <!-- Filter bar -->
            <div class="ss-filter-bar">
                <form class="ss-search-form" action="{{ url()->current() }}" method="GET">
                    @if($ssRole)<input type="hidden" name="role" value="{{ $ssRole }}">@endif
                    <input type="text" name="search" value="{{ $ssSearch }}" placeholder="Search success stories...">
                    <button type="submit" aria-label="Search"><i class="feather-search"></i></button>
                </form>

                @if($ssRoles->count())
                <div class="ss-role-chips">
                    <a href="{{ url()->current() }}{{ $ssSearch ? '?search='.urlencode($ssSearch) : '' }}"
                        class="ss-chip {{ !$ssRole ? 'active' : '' }}">All</a>
                    @foreach($ssRoles as $r)
                    <a href="{{ url()->current() }}?role={{ urlencode($r) }}{{ $ssSearch ? '&search='.urlencode($ssSearch) : '' }}"
                        class="ss-chip {{ $ssRole === $r ? 'active' : '' }}">{{ $r }}</a>
                    @endforeach
                </div>
                @endif

                @if($ssRole || $ssSearch)
                <a href="{{ url()->current() }}" class="ss-clear-filters"><i class="feather-x"></i> Clear</a>
                @endif
            </div>
            <!-- /Filter bar -->

            <div class="ss-results-count">
                Showing <strong>{{ $ssStories->total() }}</strong> stor{{ $ssStories->total() === 1 ? 'y' : 'ies' }}
                @if($ssRole) from <strong>{{ $ssRole }}</strong>@endif
                @if($ssSearch) for “<strong>{{ $ssSearch }}</strong>”@endif
            </div>

            @if($ssStories->count())
            <div class="ss-grid-row">
                @foreach ($ssStories as $story)
                <div class="ss-card ss-card-trigger" data-slug="{{ $story->slug }}" role="button" tabindex="0">
                    <!-- <div class="ss-card-img">
                        <img src="{{ $story->thumbnail_url ?: asset('assets/img/blog/blog-large-01.jpg') }}" alt="{{ $story->title }}">
                        <div class="ss-card-quote-icon"><i class="feather-message-circle"></i></div>
                    </div> -->

                    <div class="ss-card-body">
                        <h3 class="ss-card-title">
                            <button type="button" aria-label="Read full story: {{ $story->title }}">
                                {{ $story->title }}
                            </button>
                        </h3>
                        <p class="ss-card-excerpt">
                            &ldquo;{{ Str::limit(strip_tags($story->excerpt), 100, '...') }}&rdquo;
                        </p>

                        <div class="ss-card-footer">
                            <div class="ss-card-person">
                                <div class="ss-avatar">{{ Str::of($story->author_name)->substr(0,1)->upper() }}</div>
                                <div>
                                    <div class="ss-card-person-name">{{ $story->author_name }}</div>
                                    @if($story->role)
                                    <div class="ss-card-person-role">{{ $story->role }}</div>
                                    @endif
                                </div>
                            </div>
                            <button type="button" class="ss-card-arrow" aria-label="Read more">
                                <i class="feather-arrow-up-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <div class="ss-pagination-wrap">
                {{ $ssStories->links() }}
            </div>
            @else
            <div class="ss-empty">
                <i class="feather-star"></i>
                <h5>No success stories found</h5>
                <p>Try adjusting your search or filters.</p>
            </div>
            @endif

            
            <!-- CTA banner -->
            <div class="ss-cta-banner">
                <div class="ss-cta-banner-text">
                    <h4>Have your own success story?</h4>
                    <p>Whether you found your next opportunity or your ideal talent through Future Connect, we'd love to feature your story and inspire others in the community.</p>
                </div>
                <button type="button" class="ss-cta-banner-btn" data-bs-toggle="modal" data-bs-target="#ssSubmitModal">
                    <i class="feather-plus-circle"></i> Submit Your Story
                </button>
            </div>
            <!-- /CTA banner -->

        </div>
    </div>
    <!-- /Page Content -->

</div>

<!-- Submit Success Story Modal -->
<div class="modal fade ss-modal" id="ssSubmitModal" tabindex="-1" aria-labelledby="ssSubmitModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <form action="{{ route('user.success-stories.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title" id="ssSubmitModalLabel">Share Your Success Story</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="ss-form-group">
                        <label class="ss-form-label" for="ss_title">Story Title</label>
                        <input type="text" name="title" id="ss_title" class="ss-form-control"
                            placeholder="e.g. How I landed my first remote client" value="{{ old('title') }}" required>
                        @error('title')<div class="ss-form-error">{{ $message }}</div>@enderror
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="ss-form-group">
                                <label class="ss-form-label" for="ss_author_name">Your Name</label>
                                <input type="text" name="author_name" id="ss_author_name" class="ss-form-control"
                                    placeholder="Full name" value="{{ old('author_name') }}" required>
                                @error('author_name')<div class="ss-form-error">{{ $message }}</div>@enderror
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="ss-form-group">
                                <label class="ss-form-label" for="ss_role">Your Role</label>
                                <input type="text" name="role" id="ss_role" class="ss-form-control"
                                    placeholder="e.g. Freelance Designer, Client, Agency" value="{{ old('role') }}">
                                @error('role')<div class="ss-form-error">{{ $message }}</div>@enderror
                            </div>
                        </div>
                    </div>

                    <div class="ss-form-group">
                        <label class="ss-form-label" for="ss_excerpt">Short Summary</label>
                        <textarea name="excerpt" id="ss_excerpt" class="ss-form-control" rows="2"
                            placeholder="A one or two sentence teaser shown on the story card" required>{{ old('excerpt') }}</textarea>
                        @error('excerpt')<div class="ss-form-error">{{ $message }}</div>@enderror
                    </div>

                    <div class="ss-form-group">
                        <label class="ss-form-label" for="ss_content">Full Story</label>
                        <textarea name="content" id="ss_content" class="ss-form-control" rows="6"
                            placeholder="Tell us the full story..." required>{{ old('content') }}</textarea>
                        @error('content')<div class="ss-form-error">{{ $message }}</div>@enderror
                    </div>

                    <div class="ss-form-group">
                        <label class="ss-form-label" for="ss_thumbnail">Photo (optional)</label>
                        <input type="file" name="thumbnail" id="ss_thumbnail" class="ss-form-control" accept="image/*">
                        @error('thumbnail')<div class="ss-form-error">{{ $message }}</div>@enderror
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="ss-btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="ss-btn-primary">Submit Story</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /Submit Success Story Modal -->

<!-- Story Detail Modal -->
<div class="modal fade ss-modal" id="ssDetailModal" tabindex="-1" aria-labelledby="ssDetailModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ssDetailModalLabel">Success Story</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="" alt="" class="ss-detail-img" id="ssDetailImg">
                <div class="ss-detail-person">
                    <div class="ss-avatar" id="ssDetailAvatar" style="width:44px;height:44px;font-size:16px;"></div>
                    <div>
                        <div class="ss-card-person-name" id="ssDetailName" style="font-size:14px;"></div>
                        <div class="ss-card-person-role" id="ssDetailRole"></div>
                    </div>
                </div>
                <div class="ss-detail-content" id="ssDetailContent"></div>
            </div>
        </div>
    </div>
</div>
<!-- /Story Detail Modal -->

@php
    // Full story data for each card on this page, keyed by slug, so the
    // detail modal can be populated instantly without another request.
    $ssStoryData = [];
    foreach ($ssStories->items() as $ssItem) {
        $ssStoryData[$ssItem->slug] = [
            'title' => $ssItem->title,
            'author_name' => $ssItem->author_name,
            'role' => $ssItem->role,
            'content' => $ssItem->content,
            'thumbnail_url' => $ssItem->thumbnail_url ?: asset('assets/img/blog/blog-large-01.jpg'),
        ];
    }
@endphp

<script>
    window.ssStoryData = @json($ssStoryData);

    document.addEventListener('DOMContentLoaded', function () {
        var detailModalEl = document.getElementById('ssDetailModal');
        var detailModal = new bootstrap.Modal(detailModalEl);

        function openStory(slug) {
            var story = window.ssStoryData[slug];
            if (!story) return;

            document.getElementById('ssDetailModalLabel').textContent = story.title;
            document.getElementById('ssDetailImg').src = story.thumbnail_url;
            document.getElementById('ssDetailImg').alt = story.title;
            document.getElementById('ssDetailName').textContent = story.author_name;
            document.getElementById('ssDetailRole').textContent = story.role || '';
            document.getElementById('ssDetailAvatar').textContent = story.author_name
                ? story.author_name.charAt(0).toUpperCase()
                : '?';

            // Content is treated as trusted rich text coming from the app's
            // own moderated submissions. Line breaks are preserved as
            // paragraphs for plain-text content.
            var contentEl = document.getElementById('ssDetailContent');
            if (/<[a-z][\s\S]*>/i.test(story.content)) {
                contentEl.innerHTML = story.content;
            } else {
                contentEl.innerHTML = story.content
                    .split(/\n{2,}/)
                    .map(function (p) { return '<p>' + p.replace(/\n/g, '<br>') + '</p>'; })
                    .join('');
            }

            detailModal.show();
        }

        document.querySelectorAll('.ss-card-trigger').forEach(function (card) {
            card.addEventListener('click', function () {
                openStory(card.getAttribute('data-slug'));
            });
            card.addEventListener('keypress', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    openStory(card.getAttribute('data-slug'));
                }
            });
        });

        // Re-open the submit modal automatically if the form came back
        // with validation errors, so the user doesn't lose their place.
        @if ($errors->any() && old('title') !== null)
        var submitModal = new bootstrap.Modal(document.getElementById('ssSubmitModal'));
        submitModal.show();
        @endif
    });
</script>

@endsection