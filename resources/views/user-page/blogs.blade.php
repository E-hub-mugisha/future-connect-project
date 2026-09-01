@extends('layouts.guest')
@section('title', 'News & Insights')
@section('content')

@php
// Categories for the filter sidebar. Adjust the relation/count if your
// Category model names things differently.
$tbCategories = \App\Models\Category::withCount('blogs')->orderBy('name')->get();
$tbRecent = \App\Models\Blog::where('is_published', true)->latest()->take(4)->get();
$tbActiveCat = request('category');
$tbSearch = request('search');
$tbSort = request('sort', 'latest');
@endphp

<style>
    :root {
        --tb-bg: #0e1618;
        --tb-surface: #141d20;
        --tb-surface2: #1a2428;
        --tb-green: #48d597;
        --tb-green-dim: rgba(0, 166, 103, .14);
        --tb-green-glow: rgba(0, 166, 103, .28);
        --tb-text: #e8f0ed;
        --tb-muted: #7a9a8e;
        --tb-border: rgba(0, 166, 103, .16);
        --tb-border-h: rgba(0, 166, 103, .38);
        --tb-radius: 14px;
    }

    .tb-blog-page,
    .tb-blog-page *,
    .tb-blog-page *::before,
    .tb-blog-page *::after {
        box-sizing: border-box;
    }

    .tb-blog-page {
        background: var(--tb-bg);
        font-family: 'DM Sans', sans-serif;
        color: var(--tb-text);
        padding-bottom: 60px;
    }

    /* ── Breadcrumb ── */
    .tb-breadcrumb {
        background: linear-gradient(145deg, #091315 0%, #0c1e21 65%, #081213 100%);
        border-bottom: 1px solid var(--tb-border);
        padding: 34px 0 28px;
        position: relative;
        overflow: hidden;
    }

    .tb-breadcrumb::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(0, 166, 103, .05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 166, 103, .05) 1px, transparent 1px);
        background-size: 36px 36px;
        pointer-events: none;
    }

    .tb-breadcrumb .page-breadcrumb {
        position: relative;
        z-index: 1;
    }

    .tb-breadcrumb .breadcrumb {
        margin-bottom: 10px;
    }

    .tb-breadcrumb .breadcrumb-item a {
        color: var(--tb-muted);
        font-size: 13px;
        text-decoration: none;
        transition: color .2s;
    }

    .tb-breadcrumb .breadcrumb-item a:hover {
        color: var(--tb-green);
    }

    .tb-breadcrumb .breadcrumb-item.active,
    .tb-breadcrumb .breadcrumb-item[aria-current="page"] {
        color: var(--tb-green);
        font-size: 13px;
    }

    .tb-breadcrumb .breadcrumb-item+.breadcrumb-item::before {
        color: var(--tb-muted);
        content: "/";
    }

    .tb-breadcrumb-title {
        position: relative;
        z-index: 1;
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: clamp(26px, 3.4vw, 38px);
        letter-spacing: -1px;
        color: #fff;
        margin: 0;
    }

    /* ── Layout ── */
    .tb-page-content {
        padding-top: 40px;
    }

    .tb-content-row {
        display: flex;
        gap: 28px;
        align-items: flex-start;
    }

    .tb-main {
        flex: 1;
        min-width: 0;
    }

    .tb-sidebar {
        width: 300px;
        flex-shrink: 0;
    }

    /* ── Results head (count + sort) ── */
    .tb-results-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 22px;
        gap: 12px;
        flex-wrap: wrap;
    }

    .tb-results-count {
        font-size: 13.5px;
        color: var(--tb-muted);
    }

    .tb-results-count strong {
        color: var(--tb-text);
        font-weight: 600;
    }

    .tb-sort-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .tb-sort-wrap label {
        font-size: 12px;
        color: var(--tb-muted);
        text-transform: uppercase;
        letter-spacing: .6px;
    }

    .tb-select {
        background: var(--tb-surface2);
        border: 1px solid var(--tb-border);
        color: var(--tb-text);
        border-radius: 8px;
        padding: 8px 32px 8px 12px;
        font-size: 13px;
        font-family: 'DM Sans', sans-serif;
        outline: none;
        appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='%237a9a8e'/></svg>");
        background-repeat: no-repeat;
        background-position: right 12px center;
        transition: border-color .2s;
    }

    .tb-select:focus {
        border-color: var(--tb-green);
    }

    /* ── Mobile filter toggle ── */
    .tb-filter-toggle {
        display: none;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: var(--tb-surface);
        border: 1px solid var(--tb-border);
        color: var(--tb-text);
        border-radius: 10px;
        padding: 12px;
        margin-bottom: 18px;
        font-size: 13.5px;
        font-weight: 600;
        cursor: pointer;
    }

    .tb-filter-toggle:hover {
        border-color: var(--tb-border-h);
        color: var(--tb-green);
    }

    /* ── Filter sidebar ── */
    .tb-filter-card {
        background: var(--tb-surface);
        border: 1px solid var(--tb-border);
        border-radius: var(--tb-radius);
        padding: 22px;
        margin-bottom: 20px;
    }

    .tb-filter-title {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #fff;
        margin: 0 0 16px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .tb-filter-title::before {
        content: '';
        width: 3px;
        height: 15px;
        border-radius: 2px;
        background: var(--tb-green);
        display: inline-block;
    }

    /* search */
    .tb-search-form {
        position: relative;
    }

    .tb-search-form input {
        width: 100%;
        background: var(--tb-surface2);
        border: 1px solid var(--tb-border);
        border-radius: 10px;
        color: var(--tb-text);
        font-size: 13.5px;
        padding: 11px 40px 11px 14px;
        outline: none;
        transition: border-color .2s, background .2s;
    }

    .tb-search-form input::placeholder {
        color: #3d5a52;
    }

    .tb-search-form input:focus {
        border-color: var(--tb-green);
        background: rgba(0, 166, 103, .06);
    }

    .tb-search-form button {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        border-radius: 7px;
        background: var(--tb-green);
        border: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background .2s;
    }

    .tb-search-form button:hover {
        background: #00c07a;
    }

    /* categories */
    .tb-cat-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .tb-cat-list li {
        margin-bottom: 4px;
    }

    .tb-cat-list a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 9px 12px;
        border-radius: 8px;
        font-size: 13.5px;
        color: var(--tb-muted);
        text-decoration: none;
        transition: color .18s, background .18s;
    }

    .tb-cat-list a:hover {
        color: #fff;
        background: var(--tb-green-dim);
    }

    .tb-cat-list a.active {
        color: #fff;
        background: var(--tb-green-dim);
        border: 1px solid var(--tb-border-h);
        font-weight: 600;
    }

    .tb-cat-list a .tb-count {
        font-size: 11px;
        color: var(--tb-muted);
        background: rgba(255, 255, 255, .05);
        border-radius: 99px;
        padding: 2px 8px;
    }

    .tb-cat-list a.active .tb-count {
        color: var(--tb-green);
        background: rgba(0, 166, 103, .14);
    }

    /* recent posts widget */
    .tb-recent-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .tb-recent-item {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        padding: 10px 0;
        border-bottom: 1px solid var(--tb-border);
    }

    .tb-recent-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .tb-recent-item:first-child {
        padding-top: 0;
    }

    .tb-recent-thumb {
        width: 56px;
        height: 56px;
        border-radius: 9px;
        overflow: hidden;
        flex-shrink: 0;
        background: var(--tb-surface2);
    }

    .tb-recent-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .tb-recent-info a {
        font-size: 13px;
        font-weight: 600;
        color: var(--tb-text);
        text-decoration: none;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: color .18s;
    }

    .tb-recent-info a:hover {
        color: var(--tb-green);
    }

    .tb-recent-info small {
        color: var(--tb-muted);
        font-size: 11.5px;
        display: block;
        margin-top: 4px;
    }

    /* clear filters */
    .tb-clear-filters {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12.5px;
        color: var(--tb-green);
        text-decoration: none;
        margin-top: 4px;
    }

    .tb-clear-filters:hover {
        text-decoration: underline;
    }

    /* ── Blog cards ── */
    .tb-grid-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .tb-card {
        background: var(--tb-surface);
        border: 1px solid var(--tb-border);
        border-radius: var(--tb-radius);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform .25s, box-shadow .25s, border-color .25s;
    }

    .tb-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 44px rgba(0, 0, 0, .4);
        border-color: var(--tb-border-h);
    }

    .tb-card-img {
        position: relative;
        aspect-ratio: 16/10;
        overflow: hidden;
        background: var(--tb-surface2);
    }

    .tb-card-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .4s;
    }

    .tb-card:hover .tb-card-img img {
        transform: scale(1.06);
    }

    .tb-card-cat {
        position: absolute;
        top: 12px;
        left: 12px;
        background: rgba(8, 15, 17, .75);
        backdrop-filter: blur(6px);
        border: 1px solid var(--tb-border-h);
        color: var(--tb-green);
        font-size: 11px;
        font-weight: 600;
        padding: 5px 12px;
        border-radius: 99px;
        text-decoration: none;
    }

    .tb-card-fav {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: rgba(8, 15, 17, .75);
        backdrop-filter: blur(6px);
        border: 1px solid var(--tb-border);
        color: var(--tb-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: color .2s, border-color .2s;
    }

    .tb-card-fav:hover {
        color: #ff5c7a;
        border-color: rgba(255, 92, 122, .4);
    }

    .tb-card-body {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .tb-card-title {
        font-family: 'Syne', sans-serif;
        font-size: 16.5px;
        font-weight: 700;
        line-height: 1.35;
        margin: 0 0 8px;
    }

    .tb-card-title a {
        color: #fff;
        text-decoration: none;
        transition: color .18s;
    }

    .tb-card-title a:hover {
        color: var(--tb-green);
    }

    .tb-card-excerpt {
        font-size: 13px;
        color: var(--tb-muted);
        line-height: 1.6;
        margin: 0 0 18px;
        flex: 1;
    }

    .tb-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 16px;
        border-top: 1px solid var(--tb-border);
    }

    .tb-card-author {
        display: flex;
        align-items: center;
        gap: 9px;
    }

    .tb-card-author img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid var(--tb-border);
    }

    .tb-card-author a {
        font-size: 12.5px;
        font-weight: 600;
        color: var(--tb-text);
        text-decoration: none;
    }

    .tb-card-author small {
        display: block;
        font-size: 11px;
        color: var(--tb-muted);
        margin-top: 1px;
    }

    .tb-card-arrow {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--tb-border);
        color: var(--tb-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all .2s;
        flex-shrink: 0;
    }

    .tb-card:hover .tb-card-arrow {
        color: var(--tb-green);
        border-color: var(--tb-border-h);
        transform: translateX(2px);
    }

    /* empty state */
    .tb-empty {
        text-align: center;
        padding: 70px 20px;
        background: var(--tb-surface);
        border: 1px dashed var(--tb-border);
        border-radius: var(--tb-radius);
    }

    .tb-empty i {
        font-size: 34px;
        color: var(--tb-muted);
        margin-bottom: 12px;
        display: inline-block;
    }

    .tb-empty h5 {
        color: #fff;
        font-family: 'Syne', sans-serif;
        margin-bottom: 6px;
    }

    .tb-empty p {
        color: var(--tb-muted);
        font-size: 13.5px;
        margin: 0;
    }

    /* load more */
    .tb-load-more {
        display: flex;
        justify-content: center;
        margin-top: 36px;
    }

    .tb-load-more-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: transparent;
        border: 1.5px solid var(--tb-border-h);
        color: var(--tb-green);
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 13.5px;
        padding: 12px 30px;
        border-radius: 10px;
        text-decoration: none;
        cursor: pointer;
        transition: all .2s;
    }

    .tb-load-more-btn:hover {
        background: var(--tb-green);
        color: #fff;
        box-shadow: 0 12px 28px var(--tb-green-glow);
        transform: translateY(-2px);
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 991px) {
        .tb-grid-row {
            grid-template-columns: repeat(2, 1fr);
        }

        .tb-sidebar {
            width: 100%;
            order: -1;
        }

        .tb-content-row {
            flex-direction: column;
        }

        .tb-filter-toggle {
            display: flex;
        }

        .tb-sidebar-body {
            display: none;
        }

        .tb-sidebar-body.open {
            display: block;
        }
    }

    @media (max-width: 640px) {
        .tb-grid-row {
            grid-template-columns: 1fr;
        }

        .tb-results-head {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
    [data-h-theme="light"] {
        --tb-bg: #f6faf8;
        --tb-surface: #F5f5f7;
        --tb-surface2: #eef4f1;
        --tb-green: #00a667;
        --tb-green-dim: rgba(0, 166, 103, .08);
        --tb-green-glow: rgba(0, 166, 103, .18);
        --tb-text: #10201b;
        --tb-muted: #5b7a70;
        --tb-border: rgba(0, 100, 60, .12);
        --tb-border-h: rgba(0, 100, 60, .3);
    }

    /* Breadcrumb band: hardcoded dark gradient + grid lines need light equivalents */
    [data-h-theme="light"] .tb-breadcrumb {
        background: linear-gradient(145deg, #f0f7f4 0%, #e6f3ee 65%, #f0f7f4 100%);
    }

    [data-h-theme="light"] .tb-breadcrumb::before {
        background-image:
            linear-gradient(rgba(0, 100, 60, .06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 100, 60, .06) 1px, transparent 1px);
    }

    [data-h-theme="light"] .tb-breadcrumb-title {
        color: #10201b;
    }

    /* Card title + card-title link color was hardcoded #fff */
    [data-h-theme="light"] .tb-card-title a {
        color: #10201b;
    }

    /* Category pill + favorite button on card images: hardcoded translucent-black
       chips read as dark smudges on a light card image, switch to translucent-white */
    [data-h-theme="light"] .tb-card-cat {
        background: rgba(255, 255, 255, .85);
        border-color: var(--tb-border-h);
    }

    [data-h-theme="light"] .tb-card-fav {
        background: rgba(255, 255, 255, .85);
    }

    /* Select dropdown caret SVG is hardcoded to a dark-theme muted color;
       swap to the light-theme muted tone so it stays visible */
    [data-h-theme="light"] .tb-select {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='%235b7a70'/></svg>");
    }

    /* Search input placeholder was hardcoded to a dark-theme-only hex */
    [data-h-theme="light"] .tb-search-form input::placeholder {
        color: #a9c2b8;
    }
</style>

<div class="tb-blog-page">

    <!-- Breadcrumb -->
    <div class="tb-breadcrumb">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="{{ route('user.home') }}">Home</a>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">News & Insights</li>
                        </ol>
                    </nav>
                    <h2 class="tb-breadcrumb-title">News & Insights</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="tb-page-content">
        <div class="container">

            <button type="button" class="tb-filter-toggle" id="tbFilterToggle">
                <i class="feather-sliders"></i> Filters
            </button>

            <div class="tb-content-row">

                <!-- Sidebar / Filters -->
                <aside class="tb-sidebar">
                    <div class="tb-sidebar-body" id="tbSidebarBody">

                        <!-- Search -->
                        <div class="tb-filter-card">
                            <h6 class="tb-filter-title">Search</h6>
                            <form class="tb-search-form" action="{{ url()->current() }}" method="GET">
                                @if($tbActiveCat)
                                <input type="hidden" name="category" value="{{ $tbActiveCat }}">
                                @endif
                                <input type="text" name="search" value="{{ $tbSearch }}" placeholder="Search articles...">
                                <button type="submit" aria-label="Search"><i class="feather-search"></i></button>
                            </form>
                        </div>

                        <!-- Categories -->
                        <div class="tb-filter-card">
                            <h6 class="tb-filter-title">Categories</h6>
                            <ul class="tb-cat-list">
                                <li>
                                    <a href="{{ url()->current() }}{{ $tbSearch ? '?search='.urlencode($tbSearch) : '' }}"
                                        class="{{ !$tbActiveCat ? 'active' : '' }}">
                                        All Posts
                                    </a>
                                </li>
                                @foreach($tbCategories as $cat)
                                <li>
                                    <a href="{{ url()->current() }}?category={{ $cat->slug }}{{ $tbSearch ? '&search='.urlencode($tbSearch) : '' }}"
                                        class="{{ $tbActiveCat === $cat->slug ? 'active' : '' }}">
                                        {{ $cat->name }}
                                        <span class="tb-count">{{ $cat->blogs_count ?? 0 }}</span>
                                    </a>
                                </li>
                                @endforeach
                            </ul>
                            @if($tbActiveCat || $tbSearch)
                            <a href="{{ url()->current() }}" class="tb-clear-filters">
                                <i class="feather-x"></i> Clear filters
                            </a>
                            @endif
                        </div>

                        <!-- Recent posts -->
                        @if($tbRecent->count())
                        <div class="tb-filter-card">
                            <h6 class="tb-filter-title">Recent Posts</h6>
                            <ul class="tb-recent-list">
                                @foreach($tbRecent as $r)
                                <li class="tb-recent-item">
                                    <div class="tb-recent-thumb">
                                        <img src="{{ asset('storage/' . $r->image) }}" alt="{{ $r->title }}">
                                    </div>
                                    <div class="tb-recent-info">
                                        <a href="{{ route('user.blog.details', $r->slug) }}">{{ $r->title }}</a>
                                        <small>{{ $r->created_at->format('M d, Y') }}</small>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                        @endif

                    </div>
                </aside>
                <!-- /Sidebar -->

                <!-- Blogs -->
                <div class="tb-main">

                    <div class="tb-results-head">
                        <div class="tb-results-count">
                            Showing <strong>{{ $blogs->count() }}</strong> article{{ $blogs->count() === 1 ? '' : 's' }}
                            @if($tbActiveCat) in <strong>{{ optional($tbCategories->firstWhere('slug', $tbActiveCat))->name ?? $tbActiveCat }}</strong> @endif
                            @if($tbSearch) for “<strong>{{ $tbSearch }}</strong>” @endif
                        </div>
                        <form class="tb-sort-wrap" action="{{ url()->current() }}" method="GET" id="tbSortForm">
                            @if($tbActiveCat)<input type="hidden" name="category" value="{{ $tbActiveCat }}">@endif
                            @if($tbSearch)<input type="hidden" name="search" value="{{ $tbSearch }}">@endif
                            <label for="tbSort">Sort by</label>
                            <select class="tb-select" name="sort" id="tbSort" onchange="document.getElementById('tbSortForm').submit()">
                                <option value="latest" {{ $tbSort === 'latest' ? 'selected' : '' }}>Latest</option>
                                <option value="oldest" {{ $tbSort === 'oldest' ? 'selected' : '' }}>Oldest</option>
                                <option value="popular" {{ $tbSort === 'popular' ? 'selected' : '' }}>Most Popular</option>
                            </select>
                        </form>
                    </div>

                    @if($blogs->count())
                    <div class="tb-grid-row">
                        @foreach ($blogs as $blog)
                        <div class="tb-card">
                            <div class="tb-card-img">
                                <a href="{{ route('user.blog.details', $blog->slug) }}" tabindex="0" aria-label="Read blog: {{ $blog->title }}">
                                    <img src="{{ asset('storage/' . $blog->image) }}" alt="{{ $blog->title }}">
                                </a>
                                <a href="{{ url()->current() }}?category={{ $blog->category->slug ?? '' }}" class="tb-card-cat">
                                    {{ $blog->category->name ?? 'Uncategorized' }}
                                </a>
                                <a role="button" tabindex="0" class="tb-card-fav" aria-pressed="false" aria-label="Add to favorites">
                                    <i class="feather-heart"></i>
                                </a>
                            </div>

                            <div class="tb-card-body">
                                <h3 class="tb-card-title">
                                    <a href="{{ route('user.blog.details', $blog->slug) }}" tabindex="0" aria-label="Read full blog: {{ $blog->title }}">
                                        {{ $blog->title }}
                                    </a>
                                </h3>
                                <p class="tb-card-excerpt">
                                    {{ Str::limit(strip_tags($blog->content), 90, '...') }}
                                </p>

                                <div class="tb-card-footer">
                                    <div class="tb-card-author">
                                        <a href="#" tabindex="0" aria-label="Author profile: {{ $blog->author->name }}">
                                            <img src="{{ asset('storage/' . ($blog->author->profile_image ?? 'user/default.jpg')) }}" alt="{{ $blog->author->name }}">
                                        </a>
                                        <div>
                                            <a href="#" tabindex="0">{{ $blog->author->name }}</a>
                                            <small>{{ $blog->created_at->format('M d, Y') }}</small>
                                        </div>
                                    </div>
                                    <a href="{{ route('user.blog.details', $blog->slug) }}" class="tb-card-arrow" aria-label="Read more">
                                        <i class="feather-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>

                    <div class="tb-load-more">
                        <a role="button" tabindex="0" class="tb-load-more-btn">
                            Load More <i class="feather-arrow-down"></i>
                        </a>
                    </div>
                    @else
                    <div class="tb-empty">
                        <i class="feather-file-text"></i>
                        <h5>No articles found</h5>
                        <p>Try adjusting your search or filters.</p>
                    </div>
                    @endif

                </div>
                <!-- /Blogs -->

            </div>
        </div>
    </div>
    <!-- /Page Content -->

</div>

<script>
    (function() {
        const toggle = document.getElementById('tbFilterToggle');
        const body = document.getElementById('tbSidebarBody');
        toggle && toggle.addEventListener('click', function() {
            body.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    })();
</script>

@endsection