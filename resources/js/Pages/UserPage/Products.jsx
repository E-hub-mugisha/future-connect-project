import React, { useState, useRef, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const routes = {
    productDetails: (id) => `/products/${id}`,
    productCategory: (id) => `/product/categories/${id}`,
    sellerStore: '/sellers',
};

export default function Products({ featuredProducts = [], categories = [], products = { data: [], links: [] } }) {
    // ── Hero carousel state ──
    const [activeSlide, setActiveSlide] = useState(0);
    const timerRef = useRef(null);

    const goTo = (idx) => setActiveSlide(idx);

    useEffect(() => {
        if (featuredProducts.length <= 1) return;
        timerRef.current = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % featuredProducts.length);
        }, 4000);
        return () => clearInterval(timerRef.current);
    }, [featuredProducts.length]);

    const handleDotClick = (idx) => {
        clearInterval(timerRef.current);
        goTo(idx);
        if (featuredProducts.length > 1) {
            timerRef.current = setInterval(() => {
                setActiveSlide((prev) => (prev + 1) % featuredProducts.length);
            }, 4000);
        }
    };

    // ── Trending category scroll ──
    const trendScrollRef = useRef(null);
    const scrollTrend = (dir) => {
        trendScrollRef.current?.scrollBy({ left: dir * 220, behavior: 'smooth' });
    };

    // ── Filters ──
    const [activeCategories, setActiveCategories] = useState([]);
    const [activeRatings, setActiveRatings] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('Newest Arrivals');

    const toggleCategory = (id) => {
        setActiveCategories((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const toggleRating = (rating) => {
        setActiveRatings((prev) =>
            prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
        );
    };

    // ── Seller application modal ──
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({
        company_name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleFormChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitSellerApplication = (e) => {
        e.preventDefault();
        setSubmitting(true);
        router.post(routes.sellerStore, form, {
            onFinish: () => setSubmitting(false),
            onSuccess: () => {
                setModalOpen(false);
                setForm({ company_name: '', email: '', phone: '', address: '', description: '' });
            },
        });
    };

    return (
        <>
            <Head title="Explore our Marketplace" />

            <style>{`
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

                .fc-explore * { box-sizing: border-box; margin: 0; padding: 0; }

                .fc-explore { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }

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
                    color: inherit;
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
                .fc-modal-backdrop {
                    position: fixed; inset: 0; background: rgba(0,0,0,.6);
                    display: flex; align-items: center; justify-content: center;
                    z-index: 1050; padding: 1rem;
                }
                .fc-modal-content { background: var(--bg-card); border: 1px solid var(--border); border-radius: 18px; color: var(--text); width: 100%; max-width: 720px; }
                .modal-header-custom { background: linear-gradient(135deg, #0a2e22, #0d3d29); border-bottom: 1px solid rgba(0,166,103,.2); padding: 1.5rem 2rem; display: flex; align-items: center; justify-content: space-between; border-radius: 18px 18px 0 0; }
                .modal-header-custom h5 { font-family: 'Syne', sans-serif; font-weight: 800; color: var(--white); font-size: 1.2rem; }
                .fc-modal-content .form-control, .fc-modal-content .form-select {
                    background: var(--bg-raised); border: 1px solid var(--border);
                    color: var(--text); border-radius: 10px;
                    width: 100%; padding: .55rem .8rem; outline: none;
                }
                .fc-modal-content .form-control:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-dim); }
                .fc-modal-content .form-label { color: var(--muted); font-size: .85rem; font-weight: 500; display: block; margin-bottom: .35rem; }
                .btn-accent {
                    background: var(--accent); color: var(--white); border: none;
                    padding: .7rem 2rem; border-radius: 10px; font-weight: 700;
                    font-family: 'Syne', sans-serif; cursor: pointer; transition: all .2s;
                    box-shadow: 0 0 20px var(--accent-glow);
                }
                .btn-accent:hover { transform: translateY(-1px); box-shadow: 0 0 28px var(--accent-glow); color: var(--white); }
                .btn-close-white { background: transparent; border: none; color: #fff; font-size: 1.2rem; cursor: pointer; line-height: 1; }

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

                [data-h-theme="light"] .hero-banner::before {
                    background: radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,166,103,.08) 0%, transparent 70%);
                }
                [data-h-theme="light"] .hero-grid-lines {
                    background-image:
                        linear-gradient(rgba(0,100,60,.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,100,60,.05) 1px, transparent 1px);
                }

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

                [data-h-theme="light"] .product-img-overlay {
                    background: linear-gradient(to top, rgba(16,32,27,.55) 0%, transparent 60%);
                }

                [data-h-theme="light"] .product-fav {
                    background: rgba(255,255,255,.85);
                }

                [data-h-theme="light"] .product-card:hover {
                    box-shadow: 0 20px 48px rgba(0,0,0,.1), 0 0 0 1px rgba(0,166,103,.1);
                }

                [data-h-theme="light"] .modal-header-custom {
                    background: linear-gradient(135deg, #d9f2e6, #c3ecd9);
                    border-bottom: 1px solid rgba(0,166,103,.25);
                }

                [data-h-theme="light"] .modal-header-custom h5 {
                    color: #10201b !important;
                }
                [data-h-theme="light"] .btn-close-white {
                    filter: none;
                    color: #10201b;
                }
            `}</style>

            <div className="fc-explore">
                {/* HERO */}
                <section className="hero-banner">
                    <div className="hero-grid-lines" />
                    <div className="hero-inner">
                        {featuredProducts.map((product, key) => (
                            <div
                                key={product.id}
                                className={`hero-carousel-item ${key === activeSlide ? 'active' : ''}`}
                                data-index={key}
                            >
                                <div className="hero-text">
                                    <span className="tag">✦ Featured Product</span>
                                    <h1>
                                        {product.name}
                                        <br />
                                        <span>Available Now</span>
                                    </h1>
                                    <p>
                                        {product.description ||
                                            'Top quality product available now on the Future Connect Shop marketplace.'}
                                    </p>
                                    <Link href={routes.productDetails(product.id)} className="btn-hero-primary">
                                        View Product <i className="feather-arrow-right" />
                                    </Link>
                                </div>
                                <div className="hero-visual">
                                    <img src="/assets/img/banner-img.png" alt={product.name} />
                                </div>
                            </div>
                        ))}
                        <div className="hero-dots">
                            {featuredProducts.map((product, key) => (
                                <div
                                    key={product.id}
                                    className={`hero-dot ${key === activeSlide ? 'active' : ''}`}
                                    data-target={key}
                                    onClick={() => handleDotClick(key)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* TRENDING CATEGORIES */}
                <div className="section-wrap">
                    <div className="section-header">
                        <h2 className="section-title">
                            Trending <span>Categories</span>
                        </h2>
                        <div className="nav-arrows">
                            <button className="nav-arrow-btn" onClick={() => scrollTrend(-1)}>
                                <i className="fa-solid fa-chevron-left" />
                            </button>
                            <button className="nav-arrow-btn" onClick={() => scrollTrend(1)}>
                                <i className="fa-solid fa-chevron-right" />
                            </button>
                        </div>
                    </div>
                    <div className="trend-scroll" ref={trendScrollRef}>
                        {categories.slice(0, 8).map((category) => (
                            <Link
                                key={category.id}
                                href={routes.productCategory(category.id)}
                                className="trend-pill"
                            >
                                <div className="trend-pill-info">
                                    <h6>{category.name}</h6>
                                    <p>{category.products_count ?? 0} Products</p>
                                </div>
                                <span className="trend-pill-arrow">
                                    <i className="feather-arrow-up-right" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* FILTER BAR */}
                    <div className="filter-bar">
                        <div className="search-input-wrap">
                            <i className="feather-search" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="filter-divider" />
                        <div className="filter-group">
                            <span className="filter-label">Category</span>
                            {categories.slice(0, 5).map((category) => (
                                <label
                                    key={category.id}
                                    className={`filter-chip ${activeCategories.includes(category.id) ? 'active' : ''}`}
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    {category.name}
                                </label>
                            ))}
                        </div>
                        <div className="filter-divider" />
                        <div className="filter-group">
                            <span className="filter-label">Rating</span>
                            {[5, 4, 3].map((rating) => (
                                <label
                                    key={rating}
                                    className={`filter-chip ${activeRatings.includes(rating) ? 'active' : ''}`}
                                    onClick={() => toggleRating(rating)}
                                >
                                    {Array.from({ length: rating }).map((_, j) => (
                                        <i
                                            key={j}
                                            className="fa-solid fa-star"
                                            style={{ color: '#f59e0b', fontSize: '.7rem' }}
                                        />
                                    ))}
                                </label>
                            ))}
                        </div>
                        <div className="filter-divider" />
                        <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option>Newest Arrivals</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Top Rated</option>
                        </select>
                    </div>

                    {/* PRODUCTS */}
                    <div className="products-grid">
                        {products.data.map((product) => (
                            <div className="product-card" key={product.id}>
                                <div className="product-img-wrap">
                                    <img src="/assets/img/gigs/gigs-01.jpg" alt={product.name} />
                                    <div className="product-img-overlay" />
                                    <Link href={routes.productDetails(product.id)} className="product-quick-view">
                                        Quick View →
                                    </Link>
                                    <span className="product-badge">{product.category?.name ?? 'General'}</span>
                                    <div className="product-fav">
                                        <i className="feather-heart" />
                                    </div>
                                </div>
                                <div className="product-body">
                                    <div className="product-meta">
                                        <Link
                                            href={routes.productCategory(product.category?.id)}
                                            className="product-category"
                                        >
                                            {product.category?.name ?? 'Uncategorized'}
                                        </Link>
                                        <span className="product-seller">
                                            <i className="ti ti-user" />
                                            {product.seller?.company_name}
                                        </span>
                                    </div>
                                    <Link href={routes.productDetails(product.id)} className="product-title">
                                        {product.name}
                                    </Link>
                                    <div className="product-rating">
                                        <span className="stars">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <i key={i} className="fa-solid fa-star" />
                                            ))}
                                        </span>
                                        <span className="count">5.0 (28 reviews)</span>
                                    </div>
                                    <div className="product-footer">
                                        <div className="product-price">
                                            ${product.price} <span>RWF</span>
                                        </div>
                                        <Link href={routes.productDetails(product.id)} className="btn-view-product">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAGINATION */}
                    {products.links && products.links.length > 3 && (
                        <div className="pagination-wrap">
                            {products.links.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.url || '#'}
                                    className={`page-btn ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                    preserveScroll
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* APPLY SELLER FAB */}
                <button className="apply-seller-fab" onClick={() => setModalOpen(true)}>
                    <i className="feather-plus" /> Become a Seller
                </button>

                {/* SELLER MODAL */}
                {modalOpen && (
                    <div className="fc-modal-backdrop" onClick={() => setModalOpen(false)}>
                        <div className="fc-modal-content" onClick={(e) => e.stopPropagation()}>
                            <form onSubmit={submitSellerApplication}>
                                <div className="modal-header-custom">
                                    <h5>Apply to Become a Seller</h5>
                                    <button
                                        type="button"
                                        className="btn-close-white"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
                                        Join the{' '}
                                        <strong style={{ color: 'var(--accent)' }}>Future Connect Shop</strong> and
                                        start selling products that empower our members.
                                    </p>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label className="form-label">Company Name</label>
                                            <input
                                                type="text"
                                                name="company_name"
                                                className="form-control"
                                                placeholder="e.g. Creative Minds Ltd"
                                                value={form.company_name}
                                                onChange={handleFormChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="e.g. hello@company.com"
                                                value={form.email}
                                                onChange={handleFormChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">Phone Number</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                placeholder="+250 700 123 456"
                                                value={form.phone}
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="form-control"
                                                placeholder="e.g. Kigali, Rwanda"
                                                value={form.address}
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <label className="form-label">Company Description</label>
                                            <textarea
                                                name="description"
                                                rows={3}
                                                className="form-control"
                                                placeholder="Tell us about your company, products, and goals..."
                                                value={form.description}
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        borderTop: '1px solid var(--border)',
                                        padding: '1.25rem 1.5rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setModalOpen(false)}
                                        style={{
                                            background: 'var(--bg-raised)',
                                            border: '1px solid var(--border)',
                                            color: 'var(--muted)',
                                            borderRadius: '10px',
                                            padding: '.6rem 1.5rem',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn-accent" disabled={submitting}>
                                        {submitting ? 'Submitting…' : 'Submit Application'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

Products.layout = (page) => (
    <GuestLayout
        children={page}
        title="Explore Products"
        description="Discover and purchase top-quality products from our trusted sellers on the Future Connect Shop marketplace."
    />
);