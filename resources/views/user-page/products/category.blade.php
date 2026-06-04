@extends('layouts.guest')
@section('title', $category->name)
@section('content')

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap" rel="stylesheet">

<style>
    /* ── Tokens ──────────────────────────────────────────────── */
    :root {
        --bg-base:      #0e1618;
        --bg-card:      #131e21;
        --bg-card-alt:  #192429;
        --bg-elevated:  #1e2d32;
        --accent:       #00a667;
        --accent-dim:   #00a66718;
        --accent-muted: #00a66740;
        --accent-hover: #00c27a;
        --text-primary: #f0f4f5;
        --text-secondary:#8fa8ad;
        --text-muted:   #4d6b72;
        --border:       #1f3038;
        --border-hover: #2a4550;
        --radius-sm:    6px;
        --radius-md:    10px;
        --radius-lg:    16px;
    }

    body { background: var(--bg-base) !important; color: var(--text-primary) !important; }

    /* ── Hero Banner ─────────────────────────────────────────── */
    .fc-hero {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 3rem 2rem;
        margin-bottom: 2.5rem;
        position: relative;
        overflow: hidden;
    }
    .fc-hero::before {
        content: '';
        position: absolute; top: -60px; right: -60px;
        width: 280px; height: 280px;
        background: radial-gradient(circle, var(--accent-muted) 0%, transparent 70%);
        pointer-events: none;
    }
    .fc-hero::after {
        content: '';
        position: absolute; bottom: -40px; left: -40px;
        width: 180px; height: 180px;
        background: radial-gradient(circle, #00a66710 0%, transparent 70%);
        pointer-events: none;
    }
    .fc-hero-eyebrow {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--accent-dim); border: 1px solid var(--accent-muted);
        color: var(--accent); font-size: .72rem; font-weight: 700;
        padding: 4px 12px; border-radius: 50px; letter-spacing: .8px;
        text-transform: uppercase; margin-bottom: .75rem;
    }
    .fc-hero-title {
        font-family: 'Syne', sans-serif;
        font-size: clamp(1.6rem, 3vw, 2.4rem);
        font-weight: 900; color: var(--text-primary);
        line-height: 1.2; margin-bottom: .5rem;
    }
    .fc-hero-title span { color: var(--accent); }
    .fc-hero-sub { color: var(--text-secondary); font-size: .92rem; }

    /* ── Section Heading ─────────────────────────────────────── */
    .fc-section-label {
        font-size: .72rem; font-weight: 700; color: var(--text-muted);
        text-transform: uppercase; letter-spacing: 1.2px;
        display: flex; align-items: center; gap: .5rem; margin-bottom: 1rem;
    }
    .fc-section-label::before {
        content: ''; width: 3px; height: .85rem;
        background: var(--accent); border-radius: 2px; display: inline-block;
    }

    /* ── Trending Categories ─────────────────────────────────── */
    .fc-trend-section { margin-bottom: 2.5rem; }
    .fc-trend-scroll {
        display: flex; gap: 10px; overflow-x: auto; padding-bottom: 6px;
        scrollbar-width: thin; scrollbar-color: var(--border) transparent;
    }
    .fc-trend-scroll::-webkit-scrollbar { height: 4px; }
    .fc-trend-scroll::-webkit-scrollbar-track { background: transparent; }
    .fc-trend-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
    .fc-trend-chip {
        display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;
        background: var(--bg-card); border: 1px solid var(--border);
        color: var(--text-secondary); font-size: .8rem; font-weight: 600;
        padding: 7px 16px; border-radius: 50px; text-decoration: none;
        transition: border-color .2s, color .2s, background .2s;
        white-space: nowrap;
    }
    .fc-trend-chip:hover, .fc-trend-chip.active {
        border-color: var(--accent); color: var(--accent);
        background: var(--accent-dim); text-decoration: none;
    }
    .fc-trend-chip .count {
        font-size: .68rem; color: var(--text-muted);
        background: var(--bg-elevated); padding: 1px 7px; border-radius: 50px;
    }
    .fc-trend-chip:hover .count, .fc-trend-chip.active .count { color: var(--accent); }

    /* ── Filter + Sort Bar ──────────────────────────────────────  */
    .fc-filter-bar {
        display: flex; align-items: center; gap: 10px;
        flex-wrap: wrap; margin-bottom: 2rem;
        padding: 1rem 1.25rem;
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: var(--radius-md);
    }
    .fc-filter-label {
        font-size: .75rem; color: var(--text-muted); font-weight: 600;
        text-transform: uppercase; letter-spacing: .8px; margin-right: 4px;
    }
    .fc-filter-select {
        background: var(--bg-elevated) !important;
        border: 1px solid var(--border) !important;
        color: var(--text-secondary) !important;
        border-radius: var(--radius-sm) !important;
        font-size: .82rem !important; padding: 6px 12px !important;
        cursor: pointer;
    }
    .fc-filter-select:focus {
        border-color: var(--accent) !important;
        box-shadow: 0 0 0 3px var(--accent-dim) !important;
        outline: none !important; color: var(--text-primary) !important;
    }
    .fc-filter-select option { background: var(--bg-elevated); }
    .fc-search-wrap {
        flex: 1; min-width: 160px; position: relative;
    }
    .fc-search-wrap input {
        width: 100%; background: var(--bg-elevated) !important;
        border: 1px solid var(--border) !important;
        color: var(--text-primary) !important; border-radius: var(--radius-sm) !important;
        padding: 7px 12px 7px 34px !important; font-size: .82rem !important;
    }
    .fc-search-wrap input:focus {
        border-color: var(--accent) !important;
        box-shadow: 0 0 0 3px var(--accent-dim) !important; outline: none !important;
    }
    .fc-search-wrap input::placeholder { color: var(--text-muted) !important; }
    .fc-search-wrap .fc-search-icon {
        position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
        color: var(--text-muted); font-size: .8rem; pointer-events: none;
    }
    .fc-results-count {
        margin-left: auto; font-size: .78rem; color: var(--text-muted); white-space: nowrap;
    }
    .fc-results-count strong { color: var(--accent); }

    /* ── Product Grid ─────────────────────────────────────────── */
    .fc-product-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        transition: border-color .25s, transform .25s;
        height: 100%;
        display: flex; flex-direction: column;
    }
    .fc-product-card:hover {
        border-color: var(--accent-muted);
        transform: translateY(-4px);
    }

    /* Image area */
    .fc-product-img-wrap {
        position: relative; overflow: hidden;
        height: 210px; background: var(--bg-elevated);
        flex-shrink: 0;
    }
    .fc-product-img-wrap img {
        width: 100%; height: 100%; object-fit: cover;
        display: block; transition: transform .4s ease;
    }
    .fc-product-card:hover .fc-product-img-wrap img { transform: scale(1.05); }

    /* Badges overlay */
    .fc-img-badges {
        position: absolute; top: 10px; left: 10px;
        display: flex; flex-direction: column; gap: 5px;
    }
    .fc-badge {
        display: inline-flex; align-items: center; gap: 4px;
        font-size: .68rem; font-weight: 700; padding: 3px 9px; border-radius: 50px;
        letter-spacing: .3px;
    }
    .fc-badge-stock {
        background: var(--accent-dim); color: var(--accent); border: 1px solid var(--accent-muted);
    }
    .fc-badge-status {
        background: #1a2535; color: #5ab8d4; border: 1px solid #2a4558;
    }
    .fc-badge-status.out { background: #2a1a1a; color: #e07070; border-color: #4a2a2a; }

    /* Actions overlay */
    .fc-img-actions {
        position: absolute; top: 10px; right: 10px;
        display: flex; flex-direction: column; gap: 6px;
    }
    .fc-icon-btn {
        width: 32px; height: 32px; border-radius: 50%;
        background: rgba(14,22,24,.75); border: 1px solid var(--border);
        color: var(--text-secondary); display: flex; align-items: center;
        justify-content: center; text-decoration: none; font-size: .8rem;
        transition: border-color .2s, color .2s, background .2s;
        backdrop-filter: blur(4px);
    }
    .fc-icon-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }

    /* Seller avatar */
    .fc-seller-thumb {
        position: absolute; bottom: 10px; left: 10px;
        width: 32px; height: 32px; border-radius: 50%; object-fit: cover;
        border: 2px solid var(--accent-muted);
    }

    /* Card body */
    .fc-product-body {
        padding: 1rem; flex: 1; display: flex; flex-direction: column; gap: .5rem;
    }
    .fc-product-meta {
        display: flex; align-items: center; justify-content: space-between;
    }
    .fc-cat-tag {
        display: inline-block; background: var(--accent-dim); color: var(--accent);
        font-size: .68rem; font-weight: 700; padding: 2px 9px; border-radius: 50px;
        text-decoration: none; border: 1px solid var(--accent-muted); letter-spacing: .3px;
    }
    .fc-cat-tag:hover { color: var(--accent-hover); text-decoration: none; }
    .fc-seller-name {
        font-size: .72rem; color: var(--text-muted);
        display: flex; align-items: center; gap: 4px;
    }
    .fc-product-name {
        font-size: .92rem; font-weight: 700; color: var(--text-primary);
        line-height: 1.4; text-decoration: none;
        display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .fc-product-name:hover { color: var(--accent); }
    .fc-stars { font-size: .75rem; color: var(--text-muted); }
    .fc-stars .fa-star { color: var(--text-muted); }
    .fc-stars .fa-star.filled { color: #f5a623; }

    /* Card footer */
    .fc-product-foot {
        display: flex; align-items: center; justify-content: space-between;
        border-top: 1px solid var(--border); padding-top: .75rem; margin-top: auto;
    }
    .fc-price { font-size: 1.05rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; }
    .fc-delivery {
        font-size: .7rem; color: var(--text-muted); display: flex; align-items: center; gap: 4px;
    }
    .fc-view-btn {
        background: none; border: 1px solid var(--border); color: var(--text-secondary);
        border-radius: var(--radius-sm); padding: 5px 12px; font-size: .75rem; font-weight: 600;
        text-decoration: none; transition: border-color .2s, color .2s;
    }
    .fc-view-btn:hover { border-color: var(--accent); color: var(--accent); }

    /* ── Pagination ───────────────────────────────────────────── */
    .fc-pagination {
        display: flex; align-items: center; justify-content: center;
        gap: 6px; margin-top: 2.5rem; flex-wrap: wrap;
    }
    .fc-page-btn {
        width: 38px; height: 38px; display: flex; align-items: center; justify-content: center;
        border-radius: var(--radius-sm); border: 1px solid var(--border);
        background: var(--bg-card); color: var(--text-secondary);
        font-size: .82rem; font-weight: 600; cursor: pointer; text-decoration: none;
        transition: border-color .2s, color .2s, background .2s;
    }
    .fc-page-btn:hover, .fc-page-btn.active {
        border-color: var(--accent); color: var(--accent); background: var(--accent-dim);
    }
    .fc-page-btn.arrow { color: var(--text-muted); }
    .fc-page-btn.arrow:hover { color: var(--accent); }

    /* ── Empty state ──────────────────────────────────────────── */
    .fc-empty {
        text-align: center; padding: 4rem 1rem;
        color: var(--text-muted); border: 1px dashed var(--border);
        border-radius: var(--radius-lg); margin: 1rem 0;
    }
    .fc-empty i { font-size: 3rem; margin-bottom: 1rem; display: block; }

    /* ── Responsive ──────────────────────────────────────────── */
    @media (max-width: 576px) {
        .fc-hero { padding: 2rem 1.25rem; }
        .fc-filter-bar { flex-direction: column; align-items: stretch; }
        .fc-results-count { margin-left: 0; }
    }
</style>

<div class="page-content" style="padding: 2rem 0 4rem;">
    <div class="container">

        {{-- ── Hero Banner ──────────────────────────────────────── --}}
        <div class="fc-hero">
            <div class="fc-hero-eyebrow">
                <i class="fa-solid fa-store"></i> FutureConnect Shop
            </div>
            <h1 class="fc-hero-title">
                Products in <span>{{ $category->name }}</span>
            </h1>
            <p class="fc-hero-sub">Find everything you need from trusted local and global sellers.</p>
        </div>

        {{-- ── Trending Categories ──────────────────────────────── --}}
        <div class="fc-trend-section">
            <div class="fc-section-label">Trending Categories</div>
            <div class="fc-trend-scroll">
                @foreach($categories->take(8) as $cat)
                <a href="{{ route('user.product.category', $cat->id) }}"
                   class="fc-trend-chip {{ $cat->id === $category->id ? 'active' : '' }}">
                    {{ $cat->name }}
                    <span class="count">{{ $cat->products_count ?? 0 }}</span>
                </a>
                @endforeach
            </div>
        </div>

        {{-- ── Filter + Sort Bar ────────────────────────────────── --}}
        <div class="fc-filter-bar">
            <span class="fc-filter-label"><i class="fa-solid fa-filter me-1"></i>Filter</span>

            {{-- Category --}}
            <select class="fc-filter-select">
                <option value="">All Categories</option>
                @foreach($categories as $cat)
                    <option value="{{ $cat->id }}" {{ $cat->id === $category->id ? 'selected' : '' }}>
                        {{ $cat->name }}
                    </option>
                @endforeach
            </select>

            {{-- Rating --}}
            <select class="fc-filter-select">
                <option value="">Any Rating</option>
                @for($i=5;$i>=1;$i--)
                    <option value="{{ $i }}">{{ $i }}★ & up</option>
                @endfor
            </select>

            {{-- Price --}}
            <select class="fc-filter-select">
                <option value="">Any Price</option>
                <option value="under-100">Under $100</option>
                <option value="100-500">$100 – $500</option>
                <option value="500-1000">$500 – $1,000</option>
            </select>

            {{-- Sort --}}
            <select class="fc-filter-select">
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="top-rated">Top Rated</option>
            </select>

            {{-- Search --}}
            <div class="fc-search-wrap">
                <span class="fc-search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" placeholder="Search products…">
            </div>

            <span class="fc-results-count">
                <strong>{{ $products->count() }}</strong> products
            </span>
        </div>

        {{-- ── Product Grid ──────────────────────────────────────── --}}
        @if($products->count() > 0)
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            @foreach($products as $product)
            <div class="col">
                <div class="fc-product-card">

                    {{-- Image --}}
                    <div class="fc-product-img-wrap">
                        <a href="{{ route('user.product-details', $product->id) }}">
                            <img src="{{ $product->image ? asset('image/products/'.$product->image) : asset('assets/img/gigs/gigs-01.jpg') }}"
                                 alt="{{ $product->name }}">
                        </a>

                        {{-- Badges --}}
                        <div class="fc-img-badges">
                            @if($product->stock > 0)
                                <span class="fc-badge fc-badge-stock">
                                    <i class="fa-solid fa-boxes-stacked"></i> {{ $product->stock }} left
                                </span>
                            @endif
                            <span class="fc-badge fc-badge-status {{ strtolower($product->status) === 'out of stock' ? 'out' : '' }}">
                                <i class="fa-solid fa-circle fa-xs"></i> {{ $product->status }}
                            </span>
                        </div>

                        {{-- Actions --}}
                        <div class="fc-img-actions">
                            <a href="javascript:void(0);" class="fc-icon-btn" title="Watch video">
                                <i class="feather-video"></i>
                            </a>
                            <a href="javascript:void(0);" class="fc-icon-btn" title="Save">
                                <i class="feather-heart"></i>
                            </a>
                        </div>

                        {{-- Seller avatar --}}
                        <img src="assets/img/user/user-01.jpg" class="fc-seller-thumb" alt="Seller">
                    </div>

                    {{-- Body --}}
                    <div class="fc-product-body">
                        <div class="fc-product-meta">
                            <a href="{{ route('user.product.category', $product->category->id) }}" class="fc-cat-tag">
                                {{ $product->category?->name ?? 'Uncategorized' }}
                            </a>
                            <span class="fc-seller-name">
                                <i class="fa-solid fa-store" style="font-size:.65rem;"></i>
                                {{ $product->seller->company_name ?? 'Seller' }}
                            </span>
                        </div>

                        <a href="{{ route('user.product-details', $product->id) }}" class="fc-product-name">
                            {{ $product->name }}
                        </a>

                        <div class="fc-stars">
                            @for($i=1;$i<=5;$i++)
                                <i class="fa-solid fa-star{{ $i <= 4 ? ' filled' : '' }}"></i>
                            @endfor
                            <span style="margin-left:4px;color:var(--text-muted);">5.0 (28 reviews)</span>
                        </div>

                        <div class="fc-product-foot">
                            <div>
                                <div class="fc-price">${{ number_format($product->price, 2) }}</div>
                                <div class="fc-delivery">
                                    <i class="fa-solid fa-bolt"></i> Delivery in 1 day
                                </div>
                            </div>
                            <a href="{{ route('user.product-details', $product->id) }}" class="fc-view-btn">
                                View →
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            @endforeach
        </div>
        @else
        <div class="fc-empty">
            <i class="fa-solid fa-box-open"></i>
            <h5 style="color:var(--text-secondary);margin-bottom:.5rem;">No Products Found</h5>
            <p style="font-size:.88rem;">There are no products in this category yet.</p>
        </div>
        @endif

        {{-- ── Pagination ────────────────────────────────────────── --}}
        @if($products instanceof \Illuminate\Pagination\LengthAwarePaginator && $products->lastPage() > 1)
        <div class="fc-pagination">
            <a href="{{ $products->previousPageUrl() ?? 'javascript:void(0);' }}"
               class="fc-page-btn arrow {{ $products->onFirstPage() ? 'disabled' : '' }}"
               style="{{ $products->onFirstPage() ? 'opacity:.4;pointer-events:none;' : '' }}">
                <i class="fa-solid fa-chevron-left"></i>
            </a>
            @for($p = 1; $p <= $products->lastPage(); $p++)
                <a href="{{ $products->url($p) }}" class="fc-page-btn {{ $products->currentPage() === $p ? 'active' : '' }}">
                    {{ $p }}
                </a>
            @endfor
            <a href="{{ $products->nextPageUrl() ?? 'javascript:void(0);' }}"
               class="fc-page-btn arrow {{ !$products->hasMorePages() ? 'disabled' : '' }}"
               style="{{ !$products->hasMorePages() ? 'opacity:.4;pointer-events:none;' : '' }}">
                <i class="fa-solid fa-chevron-right"></i>
            </a>
        </div>
        @else
        {{-- Fallback static pagination --}}
        <div class="fc-pagination">
            <a href="javascript:void(0);" class="fc-page-btn arrow"><i class="fa-solid fa-chevron-left"></i></a>
            <a href="javascript:void(0);" class="fc-page-btn active">1</a>
            <a href="javascript:void(0);" class="fc-page-btn">2</a>
            <a href="javascript:void(0);" class="fc-page-btn">3</a>
            <a href="javascript:void(0);" class="fc-page-btn arrow"><i class="fa-solid fa-chevron-right"></i></a>
        </div>
        @endif

    </div>
</div>

@endsection