import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function ProductDetails({ product }) {
    const [activeTab, setActiveTab] = useState("description");
    const [hoverStar, setHoverStar] = useState(0);

    const reviewForm = useForm({
        rating: "",
        comment: "",
    });

    const cartForm = useForm({
        quantity: 1,
    });

    function submitReview(e) {
        e.preventDefault();
        reviewForm.post(route("product.reviews.store", product.id), {
            preserveScroll: true,
            onSuccess: () => reviewForm.reset(),
        });
    }

    function submitCart(e) {
        e.preventDefault();
        cartForm.post(route("cart.add", product.id), {
            preserveScroll: true,
        });
    }

    function decreaseQty() {
        cartForm.setData("quantity", Math.max(1, cartForm.data.quantity - 1));
    }

    function increaseQty() {
        const max = product.stock ?? 1000;
        cartForm.setData(
            "quantity",
            Math.min(max, Number(cartForm.data.quantity) + 1),
        );
    }

    const avgRating =
        product.reviews && product.reviews.length
            ? product.reviews.reduce((sum, r) => sum + r.rating, 0) /
              product.reviews.length
            : 0;

    const totalPrice = (
        Number(product.price) * Number(cartForm.data.quantity || 1)
    ).toFixed(2);

    return (
        <>
            <Head title={product.name} />

            <style>{`
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
          --font-head:  -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
          --font-body:  -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
        }

        * { box-sizing: border-box; }
        body { background: var(--bg-deep); color: var(--text); font-family: var(--font-body); }

        .pd-wrapper { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem; }

        /* ── LAYOUT: sidebar (left) + content (right) ── */
        .pd-grid { display: grid; grid-template-columns: 340px 1fr; gap: 2rem; align-items: start; }
        @media (max-width: 1024px) { .pd-grid { grid-template-columns: 1fr; } }
        .pd-grid > .pd-sidebar-col { order: 1; }
        .pd-grid > .pd-content-col { order: 2; }
        @media (max-width: 1024px) {
          .pd-grid > .pd-sidebar-col { order: 2; }
          .pd-grid > .pd-content-col { order: 1; }
        }

        .breadcrumb-row { display: flex; align-items: center; gap: .5rem; font-size: .8rem; color: var(--muted); margin-bottom: 2rem; }
        .breadcrumb-row a { color: var(--muted); text-decoration: none; transition: color .2s; }
        .breadcrumb-row a:hover { color: var(--accent); }
        .breadcrumb-row span { color: var(--accent); }

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

        .tab-nav { display: flex; gap: 0; border-bottom: 1px solid var(--border); padding: 0 1.5rem; margin-top: 0; }
        .tab-btn {
          font-family: var(--font-head); font-size: .85rem; font-weight: 700;
          color: var(--muted); padding: 1rem 1.25rem;
          border-bottom: 2px solid transparent; border-top: none; border-left: none; border-right: none;
          background: none; cursor: pointer; transition: all .2s; text-decoration: none; display: block;
        }
        .tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }
        .tab-btn:hover:not(.active) { color: var(--text); }

        .tab-pane { display: none; padding: 2rem 1.5rem; }
        .tab-pane.active { display: block; }

        .description-section h3 { font-family: var(--font-head); font-size: 1.2rem; font-weight: 700; color: var(--white); margin-bottom: 1rem; }
        .description-section p { color: var(--muted); line-height: 1.8; font-size: .95rem; }

        .review-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
        .review-header h3 { font-family: var(--font-head); font-weight: 700; color: var(--white); }
        .btn-write-review {
          display: inline-flex; align-items: center; gap: .4rem;
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
          color: var(--accent); font-size: .8rem; font-weight: 700;
          padding: .5rem 1.25rem; border-radius: 8px; cursor: pointer;
          text-decoration: none; transition: all .2s;
          font-family: var(--font-head);
        }
        .btn-write-review:hover { background: var(--accent); color: var(--white); }

        .rating-summary {
          background: var(--bg-raised); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.5rem; text-align: center; margin-bottom: 1.5rem;
        }
        .rating-summary .big-score { font-family: var(--font-head); font-size: 3rem; font-weight: 800; color: var(--white); line-height: 1; }
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
        .review-user-name { font-family: var(--font-head); font-weight: 700; font-size: .9rem; color: var(--white); }
        .review-time { font-size: .75rem; color: var(--muted); }
        .review-stars { color: #f59e0b; font-size: .85rem; margin-bottom: .5rem; }
        .review-text { color: var(--muted); font-size: .9rem; line-height: 1.7; }

        .sidebar-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; overflow: hidden; position: sticky; top: 1.5rem;
        }
        .price-block {
          background: linear-gradient(135deg, #0a2e22, #0d3d2a);
          padding: 1.75rem; border-bottom: 1px solid rgba(0,166,103,.2);
        }
        .price-label { font-size: .78rem; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .1em; font-weight: 600; margin-bottom: .25rem; }
        .price-amount { font-family: var(--font-head); font-size: 2rem; font-weight: 800; color: var(--white); }
        .price-currency { font-size: .9rem; color: rgba(255,255,255,.6); margin-left: .25rem; }
        .btn-buy-now {
          display: flex; align-items: center; justify-content: center; gap: .5rem;
          background: var(--accent); color: var(--white);
          font-family: var(--font-head); font-weight: 800; font-size: .95rem;
          padding: .9rem; border-radius: 10px; text-decoration: none; border: none;
          cursor: pointer; width: 100%; margin-top: 1.25rem;
          box-shadow: 0 0 24px var(--accent-glow);
          transition: all .25s;
        }
        .btn-buy-now:hover { transform: translateY(-2px); box-shadow: 0 0 36px var(--accent-glow); color: var(--white); }

        .seller-block { padding: 1.5rem; }
        .seller-header { display: flex; align-items: center; gap: .85rem; margin-bottom: 1.25rem; }
        .seller-avatar { width: 50px; height: 50px; border-radius: 12px; object-fit: cover; border: 2px solid rgba(0,166,103,.3); }
        .seller-name { font-family: var(--font-head); font-weight: 700; color: var(--white); font-size: .95rem; }
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
          color: var(--text); font-family: var(--font-head); font-weight: 700; font-size: .85rem;
          padding: .8rem; border-radius: 10px; text-decoration: none; width: 100%;
          transition: all .2s; cursor: pointer;
        }
        .btn-contact:hover { border-color: var(--accent); color: var(--accent); }

        .modal-content { background: var(--bg-card) !important; border: 1px solid var(--border) !important; border-radius: 18px !important; color: var(--text) !important; }
        .modal .form-control {
          background: var(--bg-raised) !important; border: 1px solid var(--border) !important;
          color: var(--text) !important; border-radius: 10px !important;
        }
        .modal .form-control:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 3px var(--accent-dim) !important; }
        .modal .form-label { color: var(--muted); font-size: .85rem; }

        .star-select-row { display: flex; gap: .5rem; font-size: 1.6rem; color: var(--muted); cursor: pointer; }
        .star-select-row i.selected { color: #f59e0b; }

        .btn-accent {
          background: var(--accent); color: var(--white); border: none;
          padding: .7rem 2rem; border-radius: 10px; font-weight: 700;
          font-family: var(--font-head); cursor: pointer; transition: all .2s;
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .btn-accent:hover { transform: translateY(-1px); color: var(--white); }

        .cart-product-img { width: 100%; border-radius: 14px; object-fit: cover; max-height: 260px; }
        .qty-control { display: flex; align-items: center; gap: 0; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; width: fit-content; }
        .qty-btn {
          width: 36px; height: 40px; background: var(--bg-raised); border: none;
          color: var(--text); font-size: 1rem; cursor: pointer; transition: all .2s;
        }
        .qty-btn:hover { background: var(--accent-dim); color: var(--accent); }
        .qty-num { width: 56px; height: 40px; text-align: center; background: var(--bg-deep); border: none; border-left: 1px solid var(--border); border-right: 1px solid var(--border); color: var(--white); font-family: var(--font-head); font-weight: 700; outline: none; }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg-deep:    #f6faf8;
          --bg-card:    #F5f5f7;
          --bg-raised:  #eef4f1;
          --accent:     #00a667;
          --accent-dim: rgba(0, 166, 103, 0.1);
          --accent-glow:rgba(0, 166, 103, 0.22);
          --border:     rgba(0, 100, 60, 0.12);
          --text:       #10201b;
          --muted:      #5b7a70;
          --white:      #10201b;
        }

        /* Price block + modal headers used a near-black green gradient tuned for
           dark bg — swap to a soft light-mode tint so it isn't a dark smear
           sitting on an otherwise white card */
        [data-h-theme="light"] .price-block {
          background: linear-gradient(135deg, #eaf7f0, #f6faf8);
          border-bottom: 1px solid rgba(0, 166, 103, 0.18);
        }

        /* Those same gradient headers appear as inline styles on the two modals —
           can't override inline styles with CSS alone, so this targets the
           elements structurally instead (first div inside modal-content) */
        [data-h-theme="light"] .modal-content > div:first-child {
          background: linear-gradient(135deg, #eaf7f0, #f6faf8) !important;
          border-bottom: 1px solid rgba(0, 166, 103, 0.18) !important;
        }
        [data-h-theme="light"] .modal-content > div:first-child h5 {
          color: var(--text) !important;
        }

        /* Bootstrap's white close icon needs to go back to the default dark
           icon on a light modal header */
        [data-h-theme="light"] .btn-close-white {
          filter: none;
        }

        /* Price label / currency text used translucent white, invisible on the
           light gradient above */
        [data-h-theme="light"] .price-label,
        [data-h-theme="light"] .price-currency {
          color: rgba(16, 32, 27, 0.55);
        }

          /* Unfilled star color hardcoded to a dark-slate hex in inline styles —
            handled via the starColor()/JS helper below instead of CSS, since
            those are inline style attributes per star */
      `}</style>

            <div className="pd-wrapper">
                {/* BREADCRUMB */}
                <div className="breadcrumb-row">
                    <a href="#">Home</a>{" "}
                    <i
                        className="fa-solid fa-chevron-right"
                        style={{ fontSize: ".65rem" }}
                    ></i>
                    <a href="#">Marketplace</a>{" "}
                    <i
                        className="fa-solid fa-chevron-right"
                        style={{ fontSize: ".65rem" }}
                    ></i>
                    <Link
                        href={route(
                            "user.product.category",
                            product.category?.id ?? "#",
                        )}
                    >
                        {product.category?.name ?? "Products"}
                    </Link>
                    <i
                        className="fa-solid fa-chevron-right"
                        style={{ fontSize: ".65rem" }}
                    ></i>
                    <span>{product.name}</span>
                </div>

                <div className="pd-grid">
                    {/* LEFT: sidebar (price / seller / meta) */}
                    <div className="pd-sidebar-col">
                        <div className="sidebar-card">
                            <div className="price-block">
                                <div className="price-label">Price</div>
                                <div className="price-amount">
                                    {Number(product.price).toLocaleString()}
                                    <span className="price-currency">RWF</span>
                                </div>
                                <Link
                                    href={route(
                                        "checkout.create",
                                        product.slug,
                                    )}
                                    className="btn-buy-now"
                                >
                                    <i className="feather-shopping-cart"></i>{" "}
                                    Buy This Product
                                </Link>
                            </div>

                            <div className="seller-block">
                                <div className="seller-header">
                                    <img
                                        src="/assets/img/user/user-05.jpg"
                                        alt="Seller"
                                        className="seller-avatar"
                                    />
                                    <div>
                                        <div className="seller-name">
                                            {product.seller?.company_name}
                                        </div>
                                        <div className="seller-online">
                                            Online
                                        </div>
                                    </div>
                                </div>

                                <ul className="meta-list">
                                    <li>
                                        <i className="ti ti-tag"></i>
                                        <div>
                                            <div className="meta-key">
                                                Category
                                            </div>
                                            <div className="meta-val">
                                                {product.category?.name ??
                                                    "Uncategorized"}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="ti ti-user"></i>
                                        <div>
                                            <div className="meta-key">
                                                Seller
                                            </div>
                                            <div className="meta-val">
                                                {product.seller?.company_name}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="ti ti-calendar-check"></i>
                                        <div>
                                            <div className="meta-key">
                                                Listed
                                            </div>
                                            <div className="meta-val">
                                                {product.listed_ago ?? "—"}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="ti ti-stack"></i>
                                        <div>
                                            <div className="meta-key">
                                                Stock / Queue
                                            </div>
                                            <div className="meta-val">
                                                {product.stock} units
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="ti ti-star"></i>
                                        <div>
                                            <div className="meta-key">
                                                Rating
                                            </div>
                                            <div className="meta-val">
                                                {avgRating.toFixed(1)} / 5 (
                                                {product.reviews?.length ?? 0}{" "}
                                                reviews)
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <a
                                    href="#"
                                    className="btn-contact"
                                    data-bs-toggle="modal"
                                    data-bs-target="#contact_me"
                                >
                                    <i className="feather-message-circle"></i>{" "}
                                    Contact Seller
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: product content (image, tabs, reviews) */}
                    <div className="pd-content-col">
                        {/* Image */}
                        <div
                            className="product-image-panel"
                            style={{ marginBottom: "1.5rem" }}
                        >
                            <img
                                src="/assets/img/service/service-slide-01.jpg"
                                alt={product.name}
                                className="product-main-img"
                            />
                            <div className="product-img-glow"></div>
                        </div>

                        {/* Tabs */}
                        <div
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                borderRadius: "18px",
                                overflow: "hidden",
                            }}
                        >
                            <div className="tab-nav">
                                <button
                                    className={`tab-btn${activeTab === "description" ? " active" : ""}`}
                                    onClick={() => setActiveTab("description")}
                                >
                                    Description
                                </button>
                                <button
                                    className={`tab-btn${activeTab === "reviews" ? " active" : ""}`}
                                    onClick={() => setActiveTab("reviews")}
                                >
                                    Reviews ({product.reviews?.length ?? 0})
                                </button>
                            </div>

                            <div
                                className={`tab-pane${activeTab === "description" ? " active" : ""}`}
                            >
                                <div className="description-section">
                                    <h3>About this product</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>

                            <div
                                className={`tab-pane${activeTab === "reviews" ? " active" : ""}`}
                            >
                                <div className="review-header">
                                    <h3>Customer Reviews</h3>
                                    <a
                                        href="#"
                                        className="btn-write-review"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addReviewModal"
                                    >
                                        <i className="fa-solid fa-pen"></i>{" "}
                                        Write a Review
                                    </a>
                                </div>

                                <div className="rating-summary">
                                    <div className="big-score">
                                        {avgRating.toFixed(1)}
                                    </div>
                                    <div className="out-of">out of 5.0</div>
                                    <div className="stars">
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <i
                                                    key={i}
                                                    className="fa-solid fa-star"
                                                    style={{
                                                        color:
                                                            i <
                                                            Math.round(
                                                                avgRating,
                                                            )
                                                                ? "#f59e0b"
                                                                : "#2a3d3a",
                                                    }}
                                                ></i>
                                            ),
                                        )}
                                    </div>
                                    <p>
                                        Based on {product.reviews?.length ?? 0}{" "}
                                        reviews
                                    </p>
                                </div>

                                {product.reviews?.map((review) => (
                                    <div
                                        className="review-item"
                                        key={review.id}
                                    >
                                        <div className="review-user">
                                            <img
                                                src={
                                                    review.user
                                                        ?.profile_photo_url ??
                                                    "/assets/img/default-avatar.png"
                                                }
                                                alt={review.user?.name}
                                                className="review-avatar"
                                            />
                                            <div>
                                                <div className="review-user-name">
                                                    {review.user?.name}
                                                </div>
                                                <div className="review-time">
                                                    {review.created_ago}
                                                </div>
                                            </div>
                                            <div className="review-stars ms-auto">
                                                {Array.from({ length: 5 }).map(
                                                    (_, i) => (
                                                        <i
                                                            key={i}
                                                            className="fa-solid fa-star"
                                                            style={{
                                                                color:
                                                                    i <
                                                                    review.rating
                                                                        ? "#f59e0b"
                                                                        : "#2a3d3a",
                                                            }}
                                                        ></i>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                        <p className="review-text">
                                            {review.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* REVIEW MODAL */}
            <div
                className="modal fade"
                id="addReviewModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div
                            style={{
                                background:
                                    "linear-gradient(135deg,#0a2e22,#0d3d29)",
                                padding: "1.5rem 2rem",
                                borderRadius: "18px 18px 0 0",
                                borderBottom: "1px solid rgba(0,166,103,.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily:
                                            "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
                                        fontWeight: 800,
                                        color: "#fff",
                                        margin: 0,
                                    }}
                                >
                                    Leave a Review
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                ></button>
                            </div>
                        </div>
                        <form onSubmit={submitReview}>
                            <div className="modal-body p-4">
                                <div className="mb-4">
                                    <label
                                        className="form-label"
                                        style={{
                                            color: "var(--muted)",
                                            fontSize: ".85rem",
                                            display: "block",
                                            marginBottom: ".75rem",
                                        }}
                                    >
                                        Your Rating
                                    </label>
                                    <div className="star-select-row">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <i
                                                key={i}
                                                className={
                                                    Number(
                                                        reviewForm.data.rating,
                                                    ) >= i || hoverStar >= i
                                                        ? "fa-solid fa-star"
                                                        : "fa-regular fa-star"
                                                }
                                                style={{
                                                    color:
                                                        Number(
                                                            reviewForm.data
                                                                .rating,
                                                        ) >= i || hoverStar >= i
                                                            ? "#f59e0b"
                                                            : "var(--muted)",
                                                }}
                                                onMouseEnter={() =>
                                                    setHoverStar(i)
                                                }
                                                onMouseLeave={() =>
                                                    setHoverStar(0)
                                                }
                                                onClick={() =>
                                                    reviewForm.setData(
                                                        "rating",
                                                        i,
                                                    )
                                                }
                                            ></i>
                                        ))}
                                    </div>
                                    {reviewForm.errors.rating && (
                                        <small className="text-danger d-block mt-1">
                                            {reviewForm.errors.rating}
                                        </small>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Your Review
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Share your experience with this product..."
                                        value={reviewForm.data.comment}
                                        onChange={(e) =>
                                            reviewForm.setData(
                                                "comment",
                                                e.target.value,
                                            )
                                        }
                                        required
                                    ></textarea>
                                    {reviewForm.errors.comment && (
                                        <small className="text-danger d-block mt-1">
                                            {reviewForm.errors.comment}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div
                                className="modal-footer"
                                style={{
                                    borderTop: "1px solid var(--border)",
                                    padding: "1.25rem 2rem",
                                }}
                            >
                                <button
                                    type="submit"
                                    className="btn-accent w-100"
                                    disabled={reviewForm.processing}
                                >
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* CART MODAL */}
            <div
                className="modal fade"
                id={`addToCartModal${product.id}`}
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div
                            style={{
                                background:
                                    "linear-gradient(135deg,#0a2e22,#0d3d29)",
                                padding: "1.25rem 2rem",
                                borderRadius: "18px 18px 0 0",
                                borderBottom: "1px solid rgba(0,166,103,.2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <h5
                                style={{
                                    fontFamily:
                                        "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
                                    fontWeight: 800,
                                    color: "#fff",
                                    margin: 0,
                                    fontSize: "1rem",
                                }}
                            >
                                Add to Cart
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        <form onSubmit={submitCart}>
                            <div className="modal-body p-4">
                                <div className="row g-4">
                                    <div className="col-md-5">
                                        <img
                                            src={`/storage/${product.image}`}
                                            alt={product.name}
                                            className="cart-product-img"
                                        />
                                    </div>
                                    <div className="col-md-7">
                                        <h4
                                            style={{
                                                fontFamily:
                                                    "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
                                                fontWeight: 800,
                                                color: "var(--white)",
                                                marginBottom: ".5rem",
                                            }}
                                        >
                                            {product.name}
                                        </h4>
                                        <p
                                            style={{
                                                color: "var(--muted)",
                                                fontSize: ".9rem",
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            {product.description}
                                        </p>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: ".5rem",
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    background:
                                                        "var(--accent-dim)",
                                                    border: "1px solid rgba(0,166,103,.3)",
                                                    color: "var(--accent)",
                                                    fontSize: ".75rem",
                                                    fontWeight: 700,
                                                    padding: ".2rem .65rem",
                                                    borderRadius: "50px",
                                                }}
                                            >
                                                {product.category?.name ??
                                                    "General"}
                                            </span>
                                            <span
                                                style={{
                                                    background:
                                                        "var(--bg-raised)",
                                                    border: "1px solid var(--border)",
                                                    color: "var(--muted)",
                                                    fontSize: ".75rem",
                                                    fontWeight: 600,
                                                    padding: ".2rem .65rem",
                                                    borderRadius: "50px",
                                                }}
                                            >
                                                {product.seller?.company_name ??
                                                    "N/A"}
                                            </span>
                                        </div>
                                        <p
                                            style={{
                                                fontSize: ".85rem",
                                                color: "var(--muted)",
                                                marginBottom: "1.25rem",
                                            }}
                                        >
                                            In Stock:{" "}
                                            <strong
                                                style={{ color: "var(--text)" }}
                                            >
                                                {product.stock ?? "Unlimited"}
                                            </strong>
                                        </p>

                                        <div
                                            style={{ marginBottom: "1.25rem" }}
                                        >
                                            <label
                                                style={{
                                                    fontSize: ".8rem",
                                                    color: "var(--muted)",
                                                    display: "block",
                                                    marginBottom: ".6rem",
                                                }}
                                            >
                                                Quantity
                                            </label>
                                            <div className="qty-control">
                                                <button
                                                    type="button"
                                                    className="qty-btn"
                                                    onClick={decreaseQty}
                                                >
                                                    −
                                                </button>
                                                <input
                                                    type="number"
                                                    className="qty-num"
                                                    min="1"
                                                    max={product.stock ?? 1000}
                                                    value={
                                                        cartForm.data.quantity
                                                    }
                                                    onChange={(e) =>
                                                        cartForm.setData(
                                                            "quantity",
                                                            Math.max(
                                                                1,
                                                                Number(
                                                                    e.target
                                                                        .value,
                                                                ) || 1,
                                                            ),
                                                        )
                                                    }
                                                />
                                                <button
                                                    type="button"
                                                    className="qty-btn"
                                                    onClick={increaseQty}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                background: "var(--bg-raised)",
                                                border: "1px solid var(--border)",
                                                borderRadius: "12px",
                                                padding: "1rem",
                                                marginBottom: "1.5rem",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: "var(--muted)",
                                                    fontSize: ".85rem",
                                                }}
                                            >
                                                Total Amount
                                            </span>
                                            <span
                                                style={{
                                                    fontFamily:
                                                        "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
                                                    fontSize: "1.3rem",
                                                    fontWeight: 800,
                                                    color: "var(--white)",
                                                }}
                                            >
                                                ${totalPrice}
                                            </span>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: ".75rem",
                                            }}
                                        >
                                            <button
                                                type="button"
                                                className="btn-contact"
                                                data-bs-dismiss="modal"
                                                style={{ flex: 1 }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn-accent"
                                                style={{
                                                    flex: 2,
                                                    padding: ".8rem",
                                                }}
                                                disabled={cartForm.processing}
                                            >
                                                <i className="feather-shopping-cart"></i>{" "}
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

ProductDetails.layout = (page) => (
    <GuestLayout children={page} title={page.props.product.name} />
);