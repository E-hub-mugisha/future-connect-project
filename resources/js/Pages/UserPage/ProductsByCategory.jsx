import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

/**
 * Converted from resources/views/.../products-by-category.blade.php
 *
 * Assumptions made during conversion:
 *
 * 1. `products` is treated as a Laravel paginator (the original checks
 *    `$products instanceof LengthAwarePaginator`), so it's read as
 *    `{ data, links, current_page, last_page, total, ... }` — same shape as the other
 *    paginated pages I converted for you. `products.count()` -> `products.data.length`.
 *    I used `products.links` (Laravel's built-in windowed pagination array) instead of
 *    manually looping `1..lastPage()` like the original Blade did — that avoids
 *    rendering e.g. 40 page buttons if a category has 40 pages, and matches the
 *    pagination pattern used on your other converted pages. If `products` isn't
 *    actually a paginator on some request, the component falls back to the same
 *    static 1/2/3 placeholder pagination the Blade file had.
 *
 * 2. The Category / Rating / Price / Sort / Search filter bar had **no working logic**
 *    in the original file — no form action, no onChange, no JS filter script (unlike
 *    the course-listing pages, which did have client-side tab filtering). I kept that
 *    exact behavior: all of them are inert, decorative controls, EXCEPT the Category
 *    select, which I wired to navigate via `router.get()` the same way the trending
 *    category chips above it do — that felt like the obvious intended behavior since
 *    it already carries a `selected` value tied to the current category. Let me know
 *    if you want Rating/Price/Sort/Search wired up to an actual query too.
 *
 * 3. `route('user.product.category', $cat->id)` and `route('user.product-details',
 *    $product->id)` carried over as-is.
 *
 * 4. Star ratings and review counts were hardcoded in the original (`4 filled / 5.0
 *    (28 reviews)` for every card) — kept exactly as-is rather than inventing a
 *    per-product rating field that doesn't exist in the source.
 *
 * 5. No light theme existed in the original file — added `[data-h-theme="light"]`
 *    overrides using the same bg-base/bg-card/accent token pattern as your Course
 *    Show page, since this page shares that design language.
 *
 * 6. FIX (this revision): a product with no related `category` (null/undefined)
 *    was crashing the page. `route('user.product.category', product.category?.id)`
 *    still executes even when the `Link` around it never renders — Ziggy resolves
 *    the URL eagerly, and that route requires an `id`, so `undefined` threw
 *    "Ziggy error: 'id' parameter is required...". Optional chaining on the prop
 *    read doesn't protect the `route()` call itself. Fixed by only building the
 *    route/Link when `product.category?.id` actually exists, falling back to a
 *    plain (non-clickable) "Uncategorized" tag otherwise.
 */
export default function ProductsByCategory({ category, categories = [], products }) {
  const productList = products?.data ?? (Array.isArray(products) ? products : []);
  const paginationLinks = products?.links ?? [];
  const isPaginated = Array.isArray(products?.links);
  const totalProducts = products?.total ?? productList.length;

  function handleCategoryChange(e) {
    const id = e.target.value;
    if (id) {
      router.get(route('user.product.category', id));
    }
  }

  return (
    <>
      <Head title={category.name} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        :root {
          --bg-base:      #0e1618;
          --bg-card:      #131e21;
          --bg-card-alt:  #192429;
          --bg-elevated:  #1e2d32;
          --accent:       #48d597;
          --accent-dim:   #48d59718;
          --accent-muted: #48d59740;
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
          background: radial-gradient(circle, #48d59710 0%, transparent 70%);
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

        .fc-section-label {
          font-size: .72rem; font-weight: 700; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 1.2px;
          display: flex; align-items: center; gap: .5rem; margin-bottom: 1rem;
        }
        .fc-section-label::before {
          content: ''; width: 3px; height: .85rem;
          background: var(--accent); border-radius: 2px; display: inline-block;
        }

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

        .fc-seller-thumb {
          position: absolute; bottom: 10px; left: 10px;
          width: 32px; height: 32px; border-radius: 50%; object-fit: cover;
          border: 2px solid var(--accent-muted);
        }

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
        .fc-page-btn.disabled { opacity: .4; pointer-events: none; }

        .fc-empty {
          text-align: center; padding: 4rem 1rem;
          color: var(--text-muted); border: 1px dashed var(--border);
          border-radius: var(--radius-lg); margin: 1rem 0;
        }
        .fc-empty i { font-size: 3rem; margin-bottom: 1rem; display: block; }

        @media (max-width: 576px) {
          .fc-hero { padding: 2rem 1.25rem; }
          .fc-filter-bar { flex-direction: column; align-items: stretch; }
          .fc-results-count { margin-left: 0; }
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg-base:        #f6faf8;
          --bg-card:        #ffffff;
          --bg-card-alt:    #eef4f1;
          --bg-elevated:    #e6f0eb;
          --accent:         #00a667;
          --accent-dim:     rgba(0, 166, 103, 0.1);
          --accent-muted:   rgba(0, 166, 103, 0.25);
          --accent-hover:   #00c07a;
          --text-primary:   #10201b;
          --text-secondary: #45605a;
          --text-muted:     #7c968f;
          --border:         rgba(0, 100, 60, 0.12);
          --border-hover:   rgba(0, 100, 60, 0.22);
        }

        /* Hero glows tuned for a dark card — soften so they don't read as smears on white */
        [data-h-theme="light"] .fc-hero::before {
          background: radial-gradient(circle, rgba(0,166,103,.14) 0%, transparent 70%);
        }
        [data-h-theme="light"] .fc-hero::after {
          background: radial-gradient(circle, rgba(0,166,103,.08) 0%, transparent 70%);
        }

        /* "In stock" status badge was a dark-navy chip — lighten for a white card */
        [data-h-theme="light"] .fc-badge-status {
          background: #eaf5fa;
          color: #1c7fa0;
          border-color: #c7e6f0;
        }
        [data-h-theme="light"] .fc-badge-status.out {
          background: #fbebeb;
          color: #b3273a;
          border-color: #f0caca;
        }

        /* Icon-button overlay background was translucent near-black, tuned for
           photos on a dark page — keep it but slightly lighter so it still reads
           as an overlay chip rather than a black dot on light imagery */
        [data-h-theme="light"] .fc-icon-btn {
          background: rgba(255,255,255,.75);
        }
      `}</style>

      <div className="page-content" style={{ padding: '2rem 0 4rem' }}>
        <div className="container">

          {/* Hero Banner */}
          <div className="fc-hero">
            <div className="fc-hero-eyebrow">
              <i className="fa-solid fa-store"></i> FutureConnect Shop
            </div>
            <h1 className="fc-hero-title">
              Products in <span>{category.name}</span>
            </h1>
            <p className="fc-hero-sub">Find everything you need from trusted local and global sellers.</p>
          </div>

          {/* Trending Categories */}
          <div className="fc-trend-section">
            <div className="fc-section-label">Trending Categories</div>
            <div className="fc-trend-scroll">
              {categories.slice(0, 8).map((cat) => (
                <Link
                  key={cat.id}
                  href={route('user.product.category', cat.id)}
                  className={`fc-trend-chip${cat.id === category.id ? ' active' : ''}`}
                >
                  {cat.name}
                  <span className="count">{cat.products_count ?? 0}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Filter + Sort Bar */}
          <div className="fc-filter-bar">
            <span className="fc-filter-label"><i className="fa-solid fa-filter me-1"></i>Filter</span>

            {/* Category — wired to navigate, same as the trending chips above */}
            <select className="fc-filter-select" defaultValue={category.id} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option value={cat.id} key={cat.id}>{cat.name}</option>
              ))}
            </select>

            {/* Rating, Price, Sort, Search — decorative only, same as the original */}
            <select className="fc-filter-select" defaultValue="">
              <option value="">Any Rating</option>
              {[5, 4, 3, 2, 1].map((i) => (
                <option value={i} key={i}>{i}★ &amp; up</option>
              ))}
            </select>

            <select className="fc-filter-select" defaultValue="">
              <option value="">Any Price</option>
              <option value="under-100">Under $100</option>
              <option value="100-500">$100 – $500</option>
              <option value="500-1000">$500 – $1,000</option>
            </select>

            <select className="fc-filter-select" defaultValue="newest">
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="top-rated">Top Rated</option>
            </select>

            <div className="fc-search-wrap">
              <span className="fc-search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" placeholder="Search products…" />
            </div>

            <span className="fc-results-count">
              <strong>{productList.length}</strong> products
            </span>
          </div>

          {/* Product Grid */}
          {productList.length > 0 ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {productList.map((product) => (
                <div className="col" key={product.id}>
                  <div className="fc-product-card">

                    {/* Image */}
                    <div className="fc-product-img-wrap">
                      <Link href={route('user.product-details', product.id)}>
                        <img
                          src={product.image ? `/image/products/${product.image}` : '/assets/img/gigs/gigs-01.jpg'}
                          alt={product.name}
                        />
                      </Link>

                      {/* Badges */}
                      <div className="fc-img-badges">
                        {product.stock > 0 && (
                          <span className="fc-badge fc-badge-stock">
                            <i className="fa-solid fa-boxes-stacked"></i> {product.stock} left
                          </span>
                        )}
                        <span className={`fc-badge fc-badge-status${product.status?.toLowerCase() === 'out of stock' ? ' out' : ''}`}>
                          <i className="fa-solid fa-circle fa-xs"></i> {product.status}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="fc-img-actions">
                        <a href="javascript:void(0);" className="fc-icon-btn" title="Watch video">
                          <i className="feather-video"></i>
                        </a>
                        <a href="javascript:void(0);" className="fc-icon-btn" title="Save">
                          <i className="feather-heart"></i>
                        </a>
                      </div>

                      {/* Seller avatar */}
                      <img src="/assets/img/user/user-01.jpg" className="fc-seller-thumb" alt="Seller" />
                    </div>

                    {/* Body */}
                    <div className="fc-product-body">
                      <div className="fc-product-meta">
                        {/* FIX: guard against a missing/null category — route() throws
                            immediately if called with an undefined id, even when the
                            Link that would use it never actually renders. */}
                        {product.category?.id ? (
                          <Link href={route('user.product.category', product.category.id)} className="fc-cat-tag">
                            {product.category.name}
                          </Link>
                        ) : (
                          <span className="fc-cat-tag" style={{ cursor: 'default' }}>
                            Uncategorized
                          </span>
                        )}
                        <span className="fc-seller-name">
                          <i className="fa-solid fa-store" style={{ fontSize: '.65rem' }}></i>
                          {product.seller?.company_name ?? 'Seller'}
                        </span>
                      </div>

                      <Link href={route('user.product-details', product.id)} className="fc-product-name">
                        {product.name}
                      </Link>

                      <div className="fc-stars">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <i key={i} className={`fa-solid fa-star${i <= 4 ? ' filled' : ''}`}></i>
                        ))}
                        <span style={{ marginLeft: '4px', color: 'var(--text-muted)' }}>5.0 (28 reviews)</span>
                      </div>

                      <div className="fc-product-foot">
                        <div>
                          <div className="fc-price">${Number(product.price).toFixed(2)}</div>
                          <div className="fc-delivery">
                            <i className="fa-solid fa-bolt"></i> Delivery in 1 day
                          </div>
                        </div>
                        <Link href={route('user.product-details', product.id)} className="fc-view-btn">
                          View →
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="fc-empty">
              <i className="fa-solid fa-box-open"></i>
              <h5 style={{ color: 'var(--text-secondary)', marginBottom: '.5rem' }}>No Products Found</h5>
              <p style={{ fontSize: '.88rem' }}>There are no products in this category yet.</p>
            </div>
          )}

          {/* Pagination */}
          {isPaginated && paginationLinks.length > 3 ? (
            <div className="fc-pagination">
              {paginationLinks.map((link, i) => (
                <button
                  key={i}
                  className={`fc-page-btn${link.active ? ' active' : ''}${!link.url ? ' disabled' : ''}`}
                  onClick={() => link.url && router.get(link.url, {}, { preserveScroll: true })}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              ))}
            </div>
          ) : (
            /* Fallback static pagination, same as the original Blade's non-paginator branch */
            <div className="fc-pagination">
              <a href="javascript:void(0);" className="fc-page-btn arrow"><i className="fa-solid fa-chevron-left"></i></a>
              <a href="javascript:void(0);" className="fc-page-btn active">1</a>
              <a href="javascript:void(0);" className="fc-page-btn">2</a>
              <a href="javascript:void(0);" className="fc-page-btn">3</a>
              <a href="javascript:void(0);" className="fc-page-btn arrow"><i className="fa-solid fa-chevron-right"></i></a>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

ProductsByCategory.layout = (page) => (
  <GuestLayout children={page} title={page.props.category.name} />
);