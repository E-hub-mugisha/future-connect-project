@extends('layouts.guest')
@section('title', $product->name)
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
        --white:      #F5f5f7;
    }

    * { box-sizing: border-box; }
    body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }

    /* ── LAYOUT ── */
    .pd-wrapper { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem; }
    .pd-grid { display: grid; grid-template-columns: 1fr 340px; gap: 2rem; align-items: start; }
    @media (max-width: 1024px) { .pd-grid { grid-template-columns: 1fr; } }

    /* ── BREADCRUMB ── */
    .breadcrumb-row { display: flex; align-items: center; gap: .5rem; font-size: .8rem; color: var(--muted); margin-bottom: 2rem; }
    .breadcrumb-row a { color: var(--muted); text-decoration: none; transition: color .2s; }
    .breadcrumb-row a:hover { color: var(--accent); }
    .breadcrumb-row span { color: var(--accent); }

    /* ── PRODUCT IMAGE ── */
    .product-image-panel {
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 18px; overflow: hidden;
        position: relative;
    }
    .product-main-img {
        width: 100%; height: 420px; object-fit: cover;
        display: block;
    }
    .product-img-glow {
        position: absolute; bottom: 0; left: 0; right: 0;
        height: 120px;
        background: linear-gradient(to top, var(--bg-card), transparent);
        pointer-events: none;
    }

    /* ── TABS ── */
    .tab-nav { display: flex; gap: 0; border-bottom: 1px solid var(--border); padding: 0 1.5rem; margin-top: 0; }
    .tab-btn {
        font-family: 'Syne', sans-serif; font-size: .85rem; font-weight: 700;
        color: var(--muted); padding: 1rem 1.25rem;
        border-bottom: 2px solid transparent; border-top: none; border-left: none; border-right: none;
        background: none; cursor: pointer; transition: all .2s; text-decoration: none; display: block;
    }
    .tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }
    .tab-btn:hover:not(.active) { color: var(--text); }

    .tab-pane { display: none; padding: 2rem 1.5rem; }
    .tab-pane.active { display: block; }

    .description-section h3 { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; color: var(--white); margin-bottom: 1rem; }
    .description-section p { color: var(--muted); line-height: 1.8; font-size: .95rem; }

    /* ── REVIEWS ── */
    .review-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
    .review-header h3 { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); }
    .btn-write-review {
        display: inline-flex; align-items: center; gap: .4rem;
        background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
        color: var(--accent); font-size: .8rem; font-weight: 700;
        padding: .5rem 1.25rem; border-radius: 8px; cursor: pointer;
        text-decoration: none; transition: all .2s;
        font-family: 'Syne', sans-serif;
    }
    .btn-write-review:hover { background: var(--accent); color: var(--white); }

    .rating-summary {
        background: var(--bg-raised); border: 1px solid var(--border);
        border-radius: 14px; padding: 1.5rem; text-align: center; margin-bottom: 1.5rem;
    }
    .rating-summary .big-score { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; color: var(--white); line-height: 1; }
    .rating-summary .out-of { font-size: .85rem; color: var(--muted); margin-bottom: .5rem; }
    .rating-summary .stars { color: #f59e0b; font-size: 1.1rem; margin: .5rem 0; }
    .rating-summary p { font-size: .8rem; color: var(--muted); }

    .review-item {
        border: 1px solid var(--border); border-radius: 14px;
        padding: 1.25rem; margin-bottom: 1rem;
        background: var(--bg-raised); transition: border-color .2s;
    }
    .review-item:hover { border-color: rgba(0,166,103,.25); }
    .review-user { display: flex; align-items: center; gap: .85rem; margin-bottom: .75rem; }
    .review-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border); }
    .review-user-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .9rem; color: var(--white); }
    .review-time { font-size: .75rem; color: var(--muted); }
    .review-stars { color: #f59e0b; font-size: .85rem; margin-bottom: .5rem; }
    .review-text { color: var(--muted); font-size: .9rem; line-height: 1.7; }

    /* ── SIDEBAR ── */
    .sidebar-card {
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 18px; overflow: hidden; position: sticky; top: 1.5rem;
    }
    .price-block {
        background: linear-gradient(135deg, #0a2e22, #0d3d2a);
        padding: 1.75rem; border-bottom: 1px solid rgba(0,166,103,.2);
    }
    .price-label { font-size: .78rem; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .1em; font-weight: 600; margin-bottom: .25rem; }
    .price-amount { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--white); }
    .price-currency { font-size: .9rem; color: rgba(255,255,255,.6); margin-left: .25rem; }
    .btn-buy-now {
        display: flex; align-items: center; justify-content: center; gap: .5rem;
        background: var(--accent); color: var(--white);
        font-family: 'Syne', sans-serif; font-weight: 800; font-size: .95rem;
        padding: .9rem; border-radius: 10px; text-decoration: none; border: none;
        cursor: pointer; width: 100%; margin-top: 1.25rem;
        box-shadow: 0 0 24px var(--accent-glow);
        transition: all .25s;
    }
    .btn-buy-now:hover { transform: translateY(-2px); box-shadow: 0 0 36px var(--accent-glow); color: var(--white); }

    .seller-block { padding: 1.5rem; }
    .seller-header { display: flex; align-items: center; gap: .85rem; margin-bottom: 1.25rem; }
    .seller-avatar { width: 50px; height: 50px; border-radius: 12px; object-fit: cover; border: 2px solid rgba(0,166,103,.3); }
    .seller-name { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); font-size: .95rem; }
    .seller-online { display: inline-flex; align-items: center; gap: .35rem; font-size: .75rem; color: var(--accent); }
    .seller-online::before { content:''; width: 7px; height: 7px; background: var(--accent); border-radius: 50%; }

    .meta-list { list-style: none; padding: 0; margin: 0 0 1.5rem; }
    .meta-list li { display: flex; align-items: flex-start; gap: .75rem; padding: .6rem 0; border-bottom: 1px solid var(--border); }
    .meta-list li:last-child { border-bottom: none; }
    .meta-list i { color: var(--accent); font-size: .95rem; margin-top: .1rem; flex-shrink: 0; }
    .meta-list .meta-key { font-size: .78rem; color: var(--muted); margin-bottom: .1rem; }
    .meta-list .meta-val { font-size: .88rem; color: var(--text); font-weight: 500; }

    .btn-contact {
        display: flex; align-items: center; justify-content: center; gap: .5rem;
        background: var(--bg-raised); border: 1px solid var(--border);
        color: var(--text); font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem;
        padding: .8rem; border-radius: 10px; text-decoration: none; width: 100%;
        transition: all .2s;
    }
    .btn-contact:hover { border-color: var(--accent); color: var(--accent); }

    /* ── MODAL ── */
    .modal-content { background: var(--bg-card) !important; border: 1px solid var(--border) !important; border-radius: 18px !important; color: var(--text) !important; }
    .modal .form-control {
        background: var(--bg-raised) !important; border: 1px solid var(--border) !important;
        color: var(--text) !important; border-radius: 10px !important;
    }
    .modal .form-control:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 3px var(--accent-dim) !important; }
    .modal .form-label { color: var(--muted); font-size: .85rem; }

    .star-select-row { display: flex; gap: .5rem; font-size: 1.6rem; color: var(--muted); cursor: pointer; }
    .star-select-row i.selected { color: #f59e0b; }
    .star-select-row i:hover ~ i { color: var(--muted) !important; }

    .btn-accent {
        background: var(--accent); color: var(--white); border: none;
        padding: .7rem 2rem; border-radius: 10px; font-weight: 700;
        font-family: 'Syne', sans-serif; cursor: pointer; transition: all .2s;
        box-shadow: 0 0 20px var(--accent-glow);
    }
    .btn-accent:hover { transform: translateY(-1px); color: var(--white); }

    /* Cart modal product layout */
    .cart-product-img { width: 100%; border-radius: 14px; object-fit: cover; max-height: 260px; }
    .qty-control { display: flex; align-items: center; gap: 0; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; width: fit-content; }
    .qty-btn {
        width: 36px; height: 40px; background: var(--bg-raised); border: none;
        color: var(--text); font-size: 1rem; cursor: pointer; transition: all .2s;
    }
    .qty-btn:hover { background: var(--accent-dim); color: var(--accent); }
    .qty-num { width: 56px; height: 40px; text-align: center; background: var(--bg-deep); border: none; border-left: 1px solid var(--border); border-right: 1px solid var(--border); color: var(--white); font-family: 'Syne', sans-serif; font-weight: 700; outline: none; }
</style>

<div class="pd-wrapper">
    <!-- BREADCRUMB -->
    <div class="breadcrumb-row">
        <a href="#">Home</a> <i class="fa-solid fa-chevron-right" style="font-size:.65rem"></i>
        <a href="#">Marketplace</a> <i class="fa-solid fa-chevron-right" style="font-size:.65rem"></i>
        <a href="{{ route('user.product.category', $product->category->id ?? '#') }}">{{ $product->category?->name ?? 'Products' }}</a>
        <i class="fa-solid fa-chevron-right" style="font-size:.65rem"></i>
        <span>{{ $product->name }}</span>
    </div>

    <div class="pd-grid">
        <!-- LEFT: product content -->
        <div>
            <!-- Image -->
            <div class="product-image-panel" style="margin-bottom:1.5rem;">
                <img src="{{ asset('assets/img/service/service-slide-01.jpg') }}" alt="{{ $product->name }}" class="product-main-img">
                <div class="product-img-glow"></div>
            </div>

            <!-- Tabs -->
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:18px;overflow:hidden;">
                <div class="tab-nav">
                    <button class="tab-btn active" data-tab="description">Description</button>
                    <button class="tab-btn" data-tab="reviews">Reviews ({{ $product->reviews ? $product->reviews->count() : 0 }})</button>
                </div>

                <div class="tab-pane active" id="tab-description">
                    <div class="description-section">
                        <h3>About this product</h3>
                        <p>{{ $product->description }}</p>
                    </div>
                </div>

                <div class="tab-pane" id="tab-reviews">
                    <div class="review-header">
                        <h3>Customer Reviews</h3>
                        <a href="#" class="btn-write-review" data-bs-toggle="modal" data-bs-target="#addReviewModal">
                            <i class="fa-solid fa-pen"></i> Write a Review
                        </a>
                    </div>

                    <div class="rating-summary">
                        <div class="big-score">{{ number_format($product->reviews->avg('rating'), 1) }}</div>
                        <div class="out-of">out of 5.0</div>
                        <div class="stars">
                            @for ($i = 0; $i < 5; $i++)
                                <i class="fa-solid fa-star {{ $i < round($product->reviews->avg('rating')) ? '' : '' }}" style="{{ $i < round($product->reviews->avg('rating')) ? 'color:#f59e0b' : 'color:#2a3d3a' }}"></i>
                            @endfor
                        </div>
                        <p>Based on {{ $product->reviews->count() }} reviews</p>
                    </div>

                    @foreach($product->reviews as $review)
                    <div class="review-item">
                        <div class="review-user">
                            <img src="{{ $review->user->profile_photo_url ?? asset('assets/img/default-avatar.png') }}" alt="{{ $review->user->name }}" class="review-avatar">
                            <div>
                                <div class="review-user-name">{{ $review->user->name }}</div>
                                <div class="review-time">{{ $review->created_at->diffForHumans() }}</div>
                            </div>
                            <div class="review-stars ms-auto">
                                @for($i = 0; $i < 5; $i++)
                                    <i class="fa-solid fa-star" style="{{ $i < $review->rating ? 'color:#f59e0b' : 'color:#2a3d3a' }}"></i>
                                @endfor
                            </div>
                        </div>
                        <p class="review-text">{{ $review->comment }}</p>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>

        <!-- RIGHT: sidebar -->
        <div>
            <div class="sidebar-card">
                <div class="price-block">
                    <div class="price-label">Price</div>
                    <div class="price-amount">{{ number_format($product->price, 0) }}<span class="price-currency">RWF</span></div>
                    <button class="btn-buy-now" data-bs-toggle="modal" data-bs-target="#addToCartModal{{ $product->id }}">
                        <i class="feather-shopping-cart"></i> Buy This Product
                    </button>
                </div>

                <div class="seller-block">
                    <div class="seller-header">
                        <img src="assets/img/user/user-05.jpg" alt="Seller" class="seller-avatar">
                        <div>
                            <div class="seller-name">{{ $product->seller->company_name }}</div>
                            <div class="seller-online">Online</div>
                        </div>
                    </div>

                    <ul class="meta-list">
                        <li>
                            <i class="ti ti-tag"></i>
                            <div>
                                <div class="meta-key">Category</div>
                                <div class="meta-val">{{ $product->category?->name ?? 'Uncategorized' }}</div>
                            </div>
                        </li>
                        <li>
                            <i class="ti ti-user"></i>
                            <div>
                                <div class="meta-key">Seller</div>
                                <div class="meta-val">{{ $product->seller->company_name }}</div>
                            </div>
                        </li>
                        <li>
                            <i class="ti ti-calendar-check"></i>
                            <div>
                                <div class="meta-key">Listed</div>
                                <div class="meta-val">{{ $product->created_at ? $product->created_at->diffForHumans() : '—' }}</div>
                            </div>
                        </li>
                        <li>
                            <i class="ti ti-stack"></i>
                            <div>
                                <div class="meta-key">Stock / Queue</div>
                                <div class="meta-val">{{ $product->stock }} units</div>
                            </div>
                        </li>
                        <li>
                            <i class="ti ti-star"></i>
                            <div>
                                <div class="meta-key">Rating</div>
                                <div class="meta-val">{{ number_format($product->reviews->avg('rating'), 1) }} / 5 ({{ $product->reviews->count() }} reviews)</div>
                            </div>
                        </li>
                    </ul>

                    <a href="#" class="btn-contact" data-bs-toggle="modal" data-bs-target="#contact_me">
                        <i class="feather-message-circle"></i> Contact Seller
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- REVIEW MODAL -->
<div class="modal fade" id="addReviewModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div style="background:linear-gradient(135deg,#0a2e22,#0d3d29);padding:1.5rem 2rem;border-radius:18px 18px 0 0;border-bottom:1px solid rgba(0,166,103,.2);">
                <div style="display:flex;align-items:center;justify-content:space-between;">
                    <h5 style="font-family:'Syne',sans-serif;font-weight:800;color:#fff;margin:0;">Leave a Review</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
            </div>
            <form action="{{ route('product.reviews.store', $product->id) }}" method="POST">
                @csrf
                <div class="modal-body p-4">
                    <div class="mb-4">
                        <label class="form-label" style="color:var(--muted);font-size:.85rem;display:block;margin-bottom:.75rem;">Your Rating</label>
                        <div class="star-select-row" id="starRow">
                            @for ($i = 1; $i <= 5; $i++)
                                <i class="fa-regular fa-star" data-value="{{ $i }}"></i>
                            @endfor
                        </div>
                        <input type="hidden" name="rating" id="ratingInput" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Your Review</label>
                        <textarea name="comment" class="form-control" rows="4" placeholder="Share your experience with this product..." required></textarea>
                    </div>
                </div>
                <div class="modal-footer" style="border-top:1px solid var(--border);padding:1.25rem 2rem;">
                    <button type="submit" class="btn-accent w-100">Submit Review</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- CART MODAL -->
<div class="modal fade" id="addToCartModal{{ $product->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div style="background:linear-gradient(135deg,#0a2e22,#0d3d29);padding:1.25rem 2rem;border-radius:18px 18px 0 0;border-bottom:1px solid rgba(0,166,103,.2);display:flex;align-items:center;justify-content:space-between;">
                <h5 style="font-family:'Syne',sans-serif;font-weight:800;color:#fff;margin:0;font-size:1rem;">Add to Cart</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <form action="{{ route('cart.add', $product->id) }}" method="POST">
                @csrf
                <div class="modal-body p-4">
                    <div class="row g-4">
                        <div class="col-md-5">
                            <img src="{{ asset('storage/'.$product->image) }}" alt="{{ $product->name }}" class="cart-product-img">
                        </div>
                        <div class="col-md-7">
                            <h4 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--white);margin-bottom:.5rem;">{{ $product->name }}</h4>
                            <p style="color:var(--muted);font-size:.9rem;margin-bottom:1rem;">{{ $product->description }}</p>
                            <div style="display:flex;gap:.5rem;margin-bottom:1rem;">
                                <span style="background:var(--accent-dim);border:1px solid rgba(0,166,103,.3);color:var(--accent);font-size:.75rem;font-weight:700;padding:.2rem .65rem;border-radius:50px;">{{ $product->category->name ?? 'General' }}</span>
                                <span style="background:var(--bg-raised);border:1px solid var(--border);color:var(--muted);font-size:.75rem;font-weight:600;padding:.2rem .65rem;border-radius:50px;">{{ $product->seller->company_name ?? 'N/A' }}</span>
                            </div>
                            <p style="font-size:.85rem;color:var(--muted);margin-bottom:1.25rem;">In Stock: <strong style="color:var(--text)">{{ $product->stock ?? 'Unlimited' }}</strong></p>

                            <div style="margin-bottom:1.25rem;">
                                <label style="font-size:.8rem;color:var(--muted);display:block;margin-bottom:.6rem;">Quantity</label>
                                <div class="qty-control">
                                    <button type="button" class="qty-btn" id="qtyMinus">−</button>
                                    <input type="number" name="quantity" class="qty-num" id="qtyInput" min="1" max="{{ $product->stock ?? 1000 }}" value="1" data-price="{{ $product->price }}">
                                    <button type="button" class="qty-btn" id="qtyPlus">+</button>
                                </div>
                            </div>

                            <div style="background:var(--bg-raised);border:1px solid var(--border);border-radius:12px;padding:1rem;margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;">
                                <span style="color:var(--muted);font-size:.85rem;">Total Amount</span>
                                <span style="font-family:'Syne',sans-serif;font-size:1.3rem;font-weight:800;color:var(--white);">$<span id="totalPrice">{{ number_format($product->price, 2) }}</span></span>
                            </div>

                            <div style="display:flex;gap:.75rem;">
                                <button type="button" class="btn-contact" data-bs-dismiss="modal" style="flex:1;">Cancel</button>
                                <button type="submit" class="btn-accent" style="flex:2;padding:.8rem;">
                                    <i class="feather-shopping-cart"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
});

// Star rating
const stars = document.querySelectorAll('#starRow i');
const ratingInput = document.getElementById('ratingInput');
stars.forEach(s => {
    s.addEventListener('mouseover', () => {
        const val = +s.dataset.value;
        stars.forEach((st, i) => {
            st.className = i < val ? 'fa-solid fa-star' : 'fa-regular fa-star';
            st.style.color = i < val ? '#f59e0b' : 'var(--muted)';
        });
    });
    s.addEventListener('click', () => {
        ratingInput.value = s.dataset.value;
        stars.forEach(st => st.dataset.locked = 'false');
        s.dataset.locked = 'true';
    });
});
document.getElementById('starRow')?.addEventListener('mouseleave', () => {
    const val = ratingInput.value || 0;
    stars.forEach((st, i) => {
        st.className = i < val ? 'fa-solid fa-star' : 'fa-regular fa-star';
        st.style.color = i < val ? '#f59e0b' : 'var(--muted)';
    });
});

// Qty controls
const qtyInput = document.getElementById('qtyInput');
const totalEl = document.getElementById('totalPrice');
function updateTotal() {
    const qty = parseInt(qtyInput.value) || 1;
    const price = parseFloat(qtyInput.dataset.price);
    totalEl.textContent = (price * qty).toFixed(2);
}
document.getElementById('qtyMinus')?.addEventListener('click', () => {
    if (qtyInput.value > 1) { qtyInput.value--; updateTotal(); }
});
document.getElementById('qtyPlus')?.addEventListener('click', () => {
    qtyInput.value++; updateTotal();
});
qtyInput?.addEventListener('input', updateTotal);
</script>

@endsection