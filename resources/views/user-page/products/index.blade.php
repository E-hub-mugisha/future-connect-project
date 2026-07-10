@extends('layouts.guest')
@section('title', 'Explore our Marketplace')
@section('content')

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

    :root {
        --bg-deep:    #0e1618;
        --bg-card:    #121d1f;
        --bg-raised:  #172224;
        --accent:     #48d597;
        --accent-dim: rgba(0,166,103,.15);
        --accent-glow:rgba(0,166,103,.35);
        --border:     rgba(255,255,255,.07);
        --text:       #f0f4f3;
        --muted:      #7a9490;
        --white:      #ffffff;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }

    /* ── HERO ── */
    .hero-banner {
        position: relative;
        background: var(--bg-deep);
        padding: 3.5rem 0 2rem;
        overflow: hidden;
    }
    .hero-banner::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,166,103,.12) 0%, transparent 70%);
        pointer-events: none;
    }
    .hero-grid-lines {
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(0,166,103,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,166,103,.04) 1px, transparent 1px);
        background-size: 40px 40px;
        pointer-events: none;
    }
    .hero-inner {
        position: relative;
        z-index: 2;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    .hero-carousel-item { display: none; }
    .hero-carousel-item.active { display: flex; align-items: center; gap: 3rem; }
    .hero-text { flex: 1; }
    .hero-text .tag {
        display: inline-flex; align-items: center; gap: .5rem;
        background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
        color: var(--accent); font-family: 'Syne', sans-serif; font-size: .75rem;
        font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
        padding: .35rem .9rem; border-radius: 50px; margin-bottom: 1.25rem;
    }
    .hero-text h1 {
        font-family: 'Syne', sans-serif;
        font-size: clamp(2rem, 4vw, 3.2rem);
        font-weight: 800; line-height: 1.15; color: var(--white);
        margin-bottom: 1rem;
    }
    .hero-text h1 span { color: var(--accent); }
    .hero-text p { color: var(--muted); font-size: 1rem; line-height: 1.7; margin-bottom: 2rem; max-width: 480px; }
    .btn-hero-primary {
        display: inline-flex; align-items: center; gap: .5rem;
        background: var(--accent); color: var(--white);
        font-family: 'Syne', sans-serif; font-weight: 700; font-size: .9rem;
        padding: .75rem 1.75rem; border-radius: 8px; text-decoration: none;
        border: none; cursor: pointer;
        box-shadow: 0 0 24px var(--accent-glow);
        transition: all .25s ease;
    }
    .btn-hero-primary:hover { transform: translateY(-2px); box-shadow: 0 0 36px var(--accent-glow); color: var(--white); }
    .hero-visual { flex: 0 0 300px; text-align: center; }
    .hero-visual img { max-width: 100%; filter: drop-shadow(0 20px 40px rgba(0,166,103,.2)); }
    .hero-dots { display: flex; gap: .5rem; margin-top: 2rem; }
    .hero-dot {
        width: 8px; height: 8px; border-radius: 50%;
        background: var(--border); border: 1px solid rgba(0,166,103,.3);
        cursor: pointer; transition: all .25s;
    }
    .hero-dot.active { background: var(--accent); width: 24px; border-radius: 4px; }

    /* ── SECTION WRAPPER ── */
    .section-wrap { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem; }

    /* ── TRENDING CATEGORIES ── */
    .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
    .section-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; color: var(--white); }
    .section-title span { color: var(--accent); }
    .nav-arrows { display: flex; gap: .5rem; }
    .nav-arrow-btn {
        width: 36px; height: 36px; border-radius: 8px;
        background: var(--bg-card); border: 1px solid var(--border);
        color: var(--muted); display: flex; align-items: center; justify-content: center;
        cursor: pointer; transition: all .2s;
    }
    .nav-arrow-btn:hover { border-color: var(--accent); color: var(--accent); }

    .trend-scroll { display: flex; gap: 1rem; overflow-x: auto; padding-bottom: .5rem; scrollbar-width: none; }
    .trend-scroll::-webkit-scrollbar { display: none; }
    .trend-pill {
        flex: 0 0 auto;
        display: flex; align-items: center; justify-content: space-between; gap: 1.5rem;
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 12px; padding: .75rem 1.25rem;
        text-decoration: none; transition: all .25s;
        min-width: 180px;
    }
    .trend-pill:hover { border-color: var(--accent); background: var(--accent-dim); transform: translateY(-2px); }
    .trend-pill-info h6 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem; color: var(--white); margin: 0 0 .2rem; }
    .trend-pill-info p { font-size: .75rem; color: var(--muted); margin: 0; }
    .trend-pill-arrow { color: var(--accent); font-size: 1.1rem; }

    /* ── FILTERS ── */
    .filter-bar {
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 14px; padding: 1rem 1.5rem;
        display: flex; align-items: center; flex-wrap: wrap; gap: 1rem;
        margin: 1.5rem 0;
    }
    .filter-group { display: flex; align-items: center; gap: .5rem; flex-wrap: wrap; }
    .filter-label { font-size: .78rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .06em; margin-right: .25rem; }
    .filter-chip {
        display: inline-flex; align-items: center; gap: .35rem;
        background: var(--bg-raised); border: 1px solid var(--border);
        color: var(--muted); font-size: .8rem; font-weight: 500;
        padding: .35rem .9rem; border-radius: 50px; cursor: pointer;
        transition: all .2s;
    }
    .filter-chip:hover, .filter-chip.active { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
    .filter-divider { width: 1px; height: 28px; background: var(--border); }
    .sort-select {
        background: var(--bg-raised); border: 1px solid var(--border);
        color: var(--text); font-size: .8rem; padding: .4rem .9rem;
        border-radius: 8px; outline: none; cursor: pointer;
    }
    .sort-select:focus { border-color: var(--accent); }
    .search-input-wrap { display: flex; align-items: center; gap: .5rem; background: var(--bg-raised); border: 1px solid var(--border); border-radius: 8px; padding: .4rem .9rem; flex: 1; min-width: 200px; }
    .search-input-wrap i { color: var(--muted); }
    .search-input-wrap input { background: none; border: none; outline: none; color: var(--text); font-size: .85rem; width: 100%; }
    .search-input-wrap input::placeholder { color: var(--muted); }

    /* ── PRODUCTS GRID ── */
    .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }

    .product-card {
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 16px; overflow: hidden;
        transition: all .3s ease;
        position: relative;
    }
    .product-card:hover { border-color: rgba(0,166,103,.4); transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,.4), 0 0 0 1px rgba(0,166,103,.1); }

    .product-img-wrap { position: relative; height: 200px; overflow: hidden; background: var(--bg-raised); }
    .product-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
    .product-card:hover .product-img-wrap img { transform: scale(1.05); }
    .product-img-overlay {
        position: absolute; inset: 0; background: linear-gradient(to top, rgba(14,22,24,.9) 0%, transparent 60%);
        opacity: 0; transition: opacity .3s;
    }
    .product-card:hover .product-img-overlay { opacity: 1; }
    .product-quick-view {
        position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%) translateY(8px);
        background: var(--accent); color: var(--white); font-size: .8rem; font-weight: 600;
        padding: .45rem 1.2rem; border-radius: 50px; white-space: nowrap;
        opacity: 0; transition: all .3s; text-decoration: none;
    }
    .product-card:hover .product-quick-view { opacity: 1; transform: translateX(-50%) translateY(0); }

    .product-badge {
        position: absolute; top: .75rem; left: .75rem;
        background: var(--accent-dim); border: 1px solid rgba(0,166,103,.4);
        color: var(--accent); font-size: .7rem; font-weight: 700;
        padding: .2rem .65rem; border-radius: 50px;
        font-family: 'Syne', sans-serif; letter-spacing: .05em;
    }
    .product-fav {
        position: absolute; top: .75rem; right: .75rem;
        width: 32px; height: 32px; background: rgba(14,22,24,.8);
        border: 1px solid var(--border); border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        color: var(--muted); cursor: pointer; transition: all .2s;
        font-size: .85rem;
    }
    .product-fav:hover { border-color: #e05c5c; color: #e05c5c; }

    .product-body { padding: 1.25rem; }
    .product-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
    .product-category {
        background: var(--accent-dim); color: var(--accent);
        font-size: .72rem; font-weight: 700; padding: .2rem .65rem; border-radius: 50px;
        font-family: 'Syne', sans-serif; text-decoration: none; letter-spacing: .04em;
    }
    .product-seller { font-size: .78rem; color: var(--muted); display: flex; align-items: center; gap: .3rem; }
    .product-seller i { font-size: .7rem; }
    .product-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: .5rem; line-height: 1.3; text-decoration: none; display: block; }
    .product-title:hover { color: var(--accent); }
    .product-rating { display: flex; align-items: center; gap: .4rem; font-size: .8rem; margin-bottom: 1rem; }
    .product-rating .stars { color: #f59e0b; }
    .product-rating .count { color: var(--muted); }
    .product-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--border); }
    .product-price { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--white); }
    .product-price span { font-size: .75rem; font-weight: 400; color: var(--muted); }
    .btn-view-product {
        background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
        color: var(--accent); font-size: .8rem; font-weight: 600;
        padding: .45rem 1rem; border-radius: 8px; text-decoration: none;
        transition: all .2s;
    }
    .btn-view-product:hover { background: var(--accent); color: var(--white); }

    /* ── PAGINATION ── */
    .pagination-wrap { display: flex; justify-content: center; align-items: center; gap: .5rem; padding: 2.5rem 0 1rem; }
    .page-btn {
        width: 40px; height: 40px; border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        background: var(--bg-card); border: 1px solid var(--border);
        color: var(--muted); font-size: .85rem; font-weight: 600;
        cursor: pointer; transition: all .2s; text-decoration: none;
    }
    .page-btn:hover, .page-btn.active { background: var(--accent); border-color: var(--accent); color: var(--white); }
    .page-btn.disabled { opacity: .35; pointer-events: none; }

    /* ── SELLER MODAL ── */
    .modal-content { background: var(--bg-card) !important; border: 1px solid var(--border) !important; border-radius: 18px !important; color: var(--text) !important; }
    .modal-header-custom { background: linear-gradient(135deg, #0a2e22, #0d3d29); border-bottom: 1px solid rgba(0,166,103,.2) !important; padding: 1.5rem 2rem; }
    .modal-header-custom h5 { font-family: 'Syne', sans-serif; font-weight: 800; color: var(--white); font-size: 1.2rem; }
    .modal .form-control, .modal .form-select {
        background: var(--bg-raised) !important; border: 1px solid var(--border) !important;
        color: var(--text) !important; border-radius: 10px !important;
    }
    .modal .form-control:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 3px var(--accent-dim) !important; }
    .modal .form-label { color: var(--muted); font-size: .85rem; font-weight: 500; }
    .btn-accent {
        background: var(--accent); color: var(--white); border: none;
        padding: .7rem 2rem; border-radius: 10px; font-weight: 700;
        font-family: 'Syne', sans-serif; cursor: pointer; transition: all .2s;
        box-shadow: 0 0 20px var(--accent-glow);
    }
    .btn-accent:hover { transform: translateY(-1px); box-shadow: 0 0 28px var(--accent-glow); color: var(--white); }

    /* ── APPLY SELLER FLOATING BTN ── */
    .apply-seller-fab {
        position: fixed; bottom: 2rem; right: 2rem; z-index: 999;
        background: var(--accent); color: var(--white);
        display: flex; align-items: center; gap: .6rem;
        padding: .8rem 1.5rem; border-radius: 50px;
        font-family: 'Syne', sans-serif; font-weight: 700; font-size: .9rem;
        box-shadow: 0 8px 32px var(--accent-glow);
        text-decoration: none; transition: all .25s; border: none; cursor: pointer;
    }
    .apply-seller-fab:hover { transform: translateY(-3px); box-shadow: 0 12px 40px var(--accent-glow); color: var(--white); }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
        .hero-carousel-item.active { flex-direction: column; text-align: center; }
        .hero-visual { flex: 0 0 auto; }
        .hero-dots { justify-content: center; }
        .hero-text p { max-width: 100%; }
        .filter-bar { flex-direction: column; align-items: flex-start; }
        .products-grid { grid-template-columns: 1fr; }
    }

    /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
    [data-h-theme="light"] {
        --bg-deep:    #f6faf8;
        --bg-card:    #ffffff;
        --bg-raised:  #eef4f1;
        --accent:     #00a667;
        --accent-dim: rgba(0,166,103,.08);
        --accent-glow:rgba(0,166,103,.2);
        --border:     rgba(0,100,60,.1);
        --text:       #10201b;
        --muted:      #5b7a70;
        --white:      #10201b;
    }

    /* Hero radial glow + grid lines tuned for dark bg — soften/darken tint */
    [data-h-theme="light"] .hero-banner::before {
        background: radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,166,103,.08) 0%, transparent 70%);
    }
    [data-h-theme="light"] .hero-grid-lines {
        background-image:
            linear-gradient(rgba(0,100,60,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,100,60,.05) 1px, transparent 1px);
    }

    /* btn-hero-primary text was var(--white), now correctly resolves dark —
       but the button sits on solid green, so force it back to white here */
    [data-h-theme="light"] .btn-hero-primary,
    [data-h-theme="light"] .btn-hero-primary:hover,
    [data-h-theme="light"] .btn-accent,
    [data-h-theme="light"] .btn-accent:hover,
    [data-h-theme="light"] .apply-seller-fab,
    [data-h-theme="light"] .apply-seller-fab:hover,
    [data-h-theme="light"] .product-quick-view,
    [data-h-theme="light"] .page-btn:hover,
    [data-h-theme="light"] .page-btn.active,
    [data-h-theme="light"] .btn-view-product:hover {
        color: #fff;
    }

    /* Product card image overlay: dark-to-transparent scrim reads muddy
       against a white card, soften it */
    [data-h-theme="light"] .product-img-overlay {
        background: linear-gradient(to top, rgba(16,32,27,.55) 0%, transparent 60%);
    }

    /* Product fav icon circle background hardcoded to near-black translucent */
    [data-h-theme="light"] .product-fav {
        background: rgba(255,255,255,.85);
    }

    /* Product card hover shadow tuned for dark bg (heavy black shadow) */
    [data-h-theme="light"] .product-card:hover {
        box-shadow: 0 20px 48px rgba(0,0,0,.1), 0 0 0 1px rgba(0,166,103,.1);
    }

    /* Modal header gradient hardcoded to a deep-green-on-black duotone */
    [data-h-theme="light"] .modal-header-custom {
        background: linear-gradient(135deg, #d9f2e6, #c3ecd9);
        border-bottom: 1px solid rgba(0,166,103,.25) !important;
    }

    /* Modal header title + close icon: hardcoded inline styles override
       the class-based fix below (see note) */
    [data-h-theme="light"] .modal-header-custom h5 {
        color: #10201b !important;
    }
    [data-h-theme="light"] .btn-close-white {
        filter: none;
    }
</style>

<!-- HERO -->
<section class="hero-banner">
    <div class="hero-grid-lines"></div>
    <div class="hero-inner">
        @foreach($featuredProducts as $key => $product)
        <div class="hero-carousel-item {{ $key == 0 ? 'active' : '' }}" data-index="{{ $key }}">
            <div class="hero-text">
                <span class="tag">✦ Featured Product</span>
                <h1>{{ $product->name }}<br><span>Available Now</span></h1>
                <p>{{ $product->description ?? 'Top quality product available now on the Future Connect Shop marketplace.' }}</p>
                <a href="{{ route('user.product-details', $product->id) }}" class="btn-hero-primary">
                    View Product <i class="feather-arrow-right"></i>
                </a>
            </div>
            <div class="hero-visual">
                <img src="assets/img/banner-img.png" alt="{{ $product->name }}">
            </div>
        </div>
        @endforeach
        <div class="hero-dots">
            @foreach($featuredProducts as $key => $product)
            <div class="hero-dot {{ $key == 0 ? 'active' : '' }}" data-target="{{ $key }}"></div>
            @endforeach
        </div>
    </div>
</section>

<!-- TRENDING CATEGORIES -->
<div class="section-wrap">
    <div class="section-header">
        <h2 class="section-title">Trending <span>Categories</span></h2>
        <div class="nav-arrows">
            <button class="nav-arrow-btn" id="trendPrev"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="nav-arrow-btn" id="trendNext"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
    <div class="trend-scroll" id="trendScroll">
        @foreach($categories->take(8) as $category)
        <a href="{{ route('user.product.category', $category->id) }}" class="trend-pill">
            <div class="trend-pill-info">
                <h6>{{ $category->name }}</h6>
                <p>{{ $category->products_count ?? 0 }} Products</p>
            </div>
            <span class="trend-pill-arrow"><i class="feather-arrow-up-right"></i></span>
        </a>
        @endforeach
    </div>

    <!-- FILTER BAR -->
    <div class="filter-bar">
        <div class="search-input-wrap">
            <i class="feather-search"></i>
            <input type="text" placeholder="Search products...">
        </div>
        <div class="filter-divider"></div>
        <div class="filter-group">
            <span class="filter-label">Category</span>
            @foreach($categories->take(5) as $category)
            <label class="filter-chip">
                <input type="checkbox" name="category[]" value="{{ $category->id }}" style="display:none">
                {{ $category->name }}
            </label>
            @endforeach
        </div>
        <div class="filter-divider"></div>
        <div class="filter-group">
            <span class="filter-label">Rating</span>
            @for ($i = 5; $i >= 3; $i--)
            <label class="filter-chip">
                <input type="checkbox" name="rating[]" value="{{ $i }}" style="display:none">
                @for ($j = 1; $j <= $i; $j++)<i class="fa-solid fa-star" style="color:#f59e0b;font-size:.7rem"></i>@endfor
            </label>
            @endfor
        </div>
        <div class="filter-divider"></div>
        <select class="sort-select">
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
        </select>
    </div>

    <!-- PRODUCTS -->
    <div class="products-grid">
        @foreach($products as $product)
        <div class="product-card">
            <div class="product-img-wrap">
                <img src="assets/img/gigs/gigs-01.jpg" alt="{{ $product->name }}">
                <div class="product-img-overlay"></div>
                <a href="{{ route('user.product-details', $product->id) }}" class="product-quick-view">Quick View →</a>
                <span class="product-badge">{{ $product->category?->name ?? 'General' }}</span>
                <div class="product-fav"><i class="feather-heart"></i></div>
            </div>
            <div class="product-body">
                <div class="product-meta">
                    <a href="{{ route('user.product.category', $product->category->id) }}" class="product-category">{{ $product->category?->name ?? 'Uncategorized' }}</a>
                    <span class="product-seller"><i class="ti ti-user"></i>{{ $product->seller->company_name }}</span>
                </div>
                <a href="{{ route('user.product-details', $product->id) }}" class="product-title">{{ $product->name }}</a>
                <div class="product-rating">
                    <span class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                    <span class="count">5.0 (28 reviews)</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">${{ $product->price }} <span>RWF</span></div>
                    <a href="{{ route('user.product-details', $product->id) }}" class="btn-view-product">View Details</a>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <!-- PAGINATION -->
    @if ($products->hasPages())
    <div class="pagination-wrap">
        @if ($products->onFirstPage())
        <a class="page-btn disabled"><i class="fa-solid fa-chevron-left"></i></a>
        @else
        <a href="{{ $products->previousPageUrl() }}" class="page-btn"><i class="fa-solid fa-chevron-left"></i></a>
        @endif
        @foreach ($products->getUrlRange(1, $products->lastPage()) as $page => $url)
        <a href="{{ $url }}" class="page-btn {{ $page == $products->currentPage() ? 'active' : '' }}">{{ $page }}</a>
        @endforeach
        @if ($products->hasMorePages())
        <a href="{{ $products->nextPageUrl() }}" class="page-btn"><i class="fa-solid fa-chevron-right"></i></a>
        @else
        <a class="page-btn disabled"><i class="fa-solid fa-chevron-right"></i></a>
        @endif
    </div>
    @endif
</div>

<!-- APPLY SELLER FAB -->
<button class="apply-seller-fab" data-bs-toggle="modal" data-bs-target="#applySellerModal">
    <i class="feather-plus"></i> Become a Seller
</button>

<!-- SELLER MODAL -->
<div class="modal fade" id="applySellerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <form action="{{ route('seller.store') }}" method="POST" class="p-0">
                @csrf
                <div class="modal-header-custom" > Apply to Become a Seller</h5>
                    <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body p-4">
                    <p style="color:var(--muted);margin-bottom:1.5rem;">Join the <strong style="color:var(--accent)">Future Connect Shop</strong> and start selling products that empower our members.</p>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label">Company Name</label>
                            <input type="text" name="company_name" class="form-control" placeholder="e.g. Creative Minds Ltd" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Email Address</label>
                            <input type="email" name="email" class="form-control" placeholder="e.g. hello@company.com" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Phone Number</label>
                            <input type="text" name="phone" class="form-control" placeholder="+250 700 123 456">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Address</label>
                            <input type="text" name="address" class="form-control" placeholder="e.g. Kigali, Rwanda">
                        </div>
                        <div class="col-12">
                            <label class="form-label">Company Description</label>
                            <textarea name="description" rows="3" class="form-control" placeholder="Tell us about your company, products, and goals..."></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="border-top:1px solid var(--border);padding:1.25rem 2rem;justify-content:space-between;">
                    <button type="button" class="btn" style="background:var(--bg-raised);border:1px solid var(--border);color:var(--muted);border-radius:10px;padding:.6rem 1.5rem;" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn-accent">Submit Application</button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
// Hero carousel
const items = document.querySelectorAll('.hero-carousel-item');
const dots = document.querySelectorAll('.hero-dot');
let current = 0;
let timer;

function goTo(idx) {
    items[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = idx;
    items[current].classList.add('active');
    dots[current].classList.add('active');
}
function autoPlay() { timer = setInterval(() => goTo((current + 1) % items.length), 4000); }
dots.forEach(d => d.addEventListener('click', () => { clearInterval(timer); goTo(+d.dataset.target); autoPlay(); }));
if (items.length > 1) autoPlay();

// Trend scroll arrows
const ts = document.getElementById('trendScroll');
document.getElementById('trendPrev')?.addEventListener('click', () => ts.scrollBy({ left: -220, behavior: 'smooth' }));
document.getElementById('trendNext')?.addEventListener('click', () => ts.scrollBy({ left: 220, behavior: 'smooth' }));

// Filter chip toggle
document.querySelectorAll('.filter-chip').forEach(c => {
    c.addEventListener('click', () => c.classList.toggle('active'));
});
</script>

@endsection