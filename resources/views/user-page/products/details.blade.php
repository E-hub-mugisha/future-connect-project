@extends('layouts.guest')
@section('title', $product->name)
@section('content')

<style>
    .talent-profile-info {
        background: #011E34;
        color: #fff;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
    }

    .postLists {
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        /* text-align: center; */
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 1.75rem;

    }
</style>

<div class="page-content content" style="transform: none;">
    <div class="container" style="transform: none;">
        <div class="row" style="transform: none;">
            <!-- Service Details -->
            <div class="col-lg-8">
                <div class="postLists">

                    <!-- Slider -->
                    <div class="service-card w-100 mb-4">
                        <div class="service-video-wrap text-center">
                            <div class="service-img-wrap position-relative overflow-hidden" style="width: 100%;">
                                <img src="{{ asset('assets/img/service/service-slide-01.jpg') }}" class="img-fluid w-100 object-fit-cover rounded-4"
                                    alt="Slider Img"
                                    style="height: 30rem; object-fit: cover; transition: transform 0.3s ease;" />
                            </div>
                        </div>
                    </div>

                    <!-- /TAB Services -->
                    <div class="listing-tab p-3">
                        <div class="listing-slider">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a href="javascript:void(0);" class="nav-link active" data-bs-toggle="tab" data-bs-target="#about_gigs" aria-selected="true" role="tab" tabindex="-1">
                                        Description
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="nav-link" data-bs-toggle="tab" data-bs-target="#review" aria-selected="false" role="tab" tabindex="-1">
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="tab-content">

                        <div class="tab-pane fade show active" id="about_gigs" role="tabpanel">
                            <!-- About Gigs -->
                            <div class="service-wrap">
                                <h3>{{ $product->name }} description</h3>
                                <p>{{ $product->description }}</p>
                            </div>
                            <!-- /About Gigs -->
                        </div>
                        <div class="tab-pane fade " id="review" role="tabpanel">
                            <!-- Review Lists -->
                            <div class="review-widget">
                                <div class="review-title sort-search-gigs">
                                    <div class="row align-items-center">
                                        <div class="col-sm-6">
                                            <h3>Reviews ({{ $product->reviews ? $product->reviews->count() : 0 }})</h3>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="filters-wrap sort-categories justify-content-end">
                                                <div class="collapse-card float-lg-end">
                                                    <div class="filter-header">
                                                        <a href="javascript:void(0);" class="btn btn-outline-primary btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#addReviewModal">
                                                            <i class="fas fa-plus me-1"></i> Write a Review
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Total Ratings -->
                                <div class="total-rating align-items-center">
                                    <div class="total-reviews text-center bg-white">
                                        <h6> Customer Reviews &amp; Ratings </h6>
                                        <h2> {{ number_format($product->reviews->avg('rating'), 1) }} / 5.0 </h2>
                                        <div class="icons d-flex align-items-center justify-content-center gap-1 mb-2">
                                            @for ($i = 0; $i < 5; $i++)
                                                @if($i < round($product->reviews->avg('rating')))
                                                <i class="ti ti-star-filled text-warning"></i>
                                                @else
                                                <i class="ti ti-star-filled text-light"></i>
                                                @endif
                                                @endfor
                                        </div>
                                        <p class="text-center">Based On {{ $product->reviews->count() }} Reviews</p>
                                    </div>
                                </div>
                                <!-- Total Ratings -->

                                <ul class="review-lists home-reviews">
                                    @foreach($product->reviews as $review)
                                    <li>
                                        <div class="review-wrap">
                                            <div class="review-user-info">
                                                <div class="review-img">
                                                    <img src="{{ $review->user->profile_photo_url ?? asset('assets/img/default-avatar.png') }}" alt="img">
                                                </div>
                                                <div class="reviewer-info">
                                                    <div class="reviewer-loc">
                                                        <h6><a href="javascript:void(0);">{{ $review->user->name }}</a></h6>
                                                    </div>
                                                    <div class="reviewer-rating">
                                                        <div class="star-rate">
                                                            <span class="ratings">
                                                                @for($i = 0; $i < 5; $i++)
                                                                    <i class="fa-solid fa-star {{ $i < $review->rating ? 'filled text-warning' : 'text-light' }}"></i>
                                                                    @endfor
                                                            </span>
                                                            <span class="rating-count">{{ $review->rating }} </span>
                                                        </div>
                                                    </div>
                                                    <div class="reviewer-time">
                                                        <p>{{ $review->created_at->diffForHumans() }}</p>
                                                        <p> Product review </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-content">
                                                <p>{{ $review->comment }}</p>

                                            </div>
                                        </div>
                                    </li>
                                    @endforeach
                                </ul>
                                <div class="text-center dark-btn">
                                    <a href="javascript:void(0);" class="btn btn-dark text-center fs-13" data-bs-toggle="modal" data-bs-target="#addReviewModal">
                                        <i class="fas fa-plus me-1"></i> Write a Review
                                    </a>
                                </div>
                            </div>
                            <!-- /Review Lists -->

                        </div>
                    </div>
                </div>
                <!-- /Service Details -->
            </div>
            <!-- Member Details -->
            <div class="col-lg-4 theiaStickySidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
                <div class="theiaStickySidebar postLists" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none;">
                    <div class="service-widget">
                        <div class="service-amt p-3 price-lvl price-lvl bg-dark ">
                            <h3 class="">
                                <span class="d-block"> Price </span>
                                {{ $product->price }} RWF
                            </h3>
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#addToCartModal{{ $product->id }}" class="btn btn-primary w-50 mb-0"><i class="feather-shopping-cart"></i> Buy this product</a>

                    </div>
                    <div class="service-widget member-widget">
                        <div class="user-details">
                            <div class="user-img users-img">
                                <img src="assets/img/user/user-05.jpg" alt="img">
                            </div>
                            <div class="user-info">
                                <h5><span class="me-2">{{ $product->seller->company_name }}</span> <span class="badge badge-success"><i class="fa-solid fa-circle"></i> Online</span></h5>
                                <p><i class="fa-solid fa-star"></i>{{ $product->reviews ? $product->reviews->count() : 0 }}.0 ({{ $product->reviews ? $product->reviews->count() : 0 }} Reviews)</p>
                            </div>
                        </div>
                        <div class="member-info member-info-new">
                            <div class="member-list d-flex align-items-center gap mb-3">
                                <i class="ti ti-clock-hour-5"></i>
                                <h6 class="mb-0">
                                    Category
                                    <span class="pt-2"> {{ $product->category?->name ?? 'Uncategorized' }}</span>
                                </h6>
                            </div>
                            <div class="member-list d-flex align-items-center gap mb-3">
                                <i class="ti ti-user"></i>
                                <h6 class="mb-0">
                                    Seller
                                    <span class="pt-2"> {{ $product->seller->company_name }}</span>
                                </h6>
                            </div>
                            <div class="member-list d-flex align-items-center gap mb-3">
                                <i class="ti ti-calendar-check"></i>
                                <h6 class="mb-0">
                                    Last Delivery
                                    <span class="pt-2"> {{ $product->created_at ? $product->created_at->diffForHumans() : '' }}</span>
                                </h6>
                            </div>
                            <div class="member-list d-flex align-items-center gap">
                                <i class="ti ti-world-check"></i>
                                <h6 class="mb-0">
                                    Language
                                    <span class="pt-2"> {{ $product->stock }} Orders in Queue </span>
                                </h6>
                            </div>
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#contact_me" class="btn btn-primary mb-0 w-50">Contact seller</a>
                    </div>
                    <div class="resize-sensor" style="position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                        <div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                            <div style="position: absolute; left: 0px; top: 0px; transition: all; width: 450px; height: 1513px;"></div>
                        </div>
                        <div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                            <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Member Details -->
        </div>


    </div>
</div>

<!-- Add Review Modal -->
<div class="modal fade" id="addReviewModal" tabindex="-1" aria-labelledby="addReviewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
            <div class="modal-header border-0 bg-gradient text-white" style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title" id="addReviewModalLabel" style="font-weight: 700;">Leave a Review</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('product.reviews.store', $product->id) }}" method="POST">
                @csrf
                <div class="modal-body">

                    <!-- Star Rating -->
                    <div class="mb-3">
                        <label class="form-label fw-medium">Your Rating <span class="text-primary">*</span></label>
                        <div class="star-rating d-flex gap-1" style="font-size: 1.5rem; cursor: pointer; color: #ffc107;">
                            @for ($i = 1; $i <= 5; $i++)
                                <i class="fa-regular fa-star text-warning" data-value="{{ $i }}"></i>
                                @endfor
                        </div>
                        <input type="hidden" name="rating" id="ratingInput" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Write a Review <span class="text-primary">*</span></label>
                        <textarea name="comment" class="form-control" rows="4" required></textarea>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="submit" class="btn btn-success w-50 rounded-pill shadow-sm">
                        <i class="fas fa-paper-plane me-1"></i> Submit Review
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Modern Add to Cart Modal -->
<div class="modal fade" id="addToCartModal{{ $product->id }}" tabindex="-1" aria-labelledby="addToCartModalLabel{{ $product->id }}" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4">
            <div class="modal-header bg-gradient-primary text-white">
                <h5 class="modal-title" id="addToCartModalLabel{{ $product->id }}">
                    Add "{{ $product->name }}" to Cart
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <form action="{{ route('cart.add', $product->id) }}" method="POST">
                @csrf
                <div class="modal-body p-4">
                    <div class="row g-4">
                        <!-- Product Image -->
                        <div class="col-md-5 text-center">
                            <img src="{{ asset('storage/'.$product->image) }}" alt="{{ $product->name }}" class="img-fluid rounded-4 shadow-sm">
                        </div>

                        <!-- Product Info -->
                        <div class="col-md-7 d-flex flex-column justify-content-between">
                            <div>
                                <h4 class="fw-bold">{{ $product->name }}</h4>
                                <p class="text-muted mb-2">{{ $product->description }}</p>

                                <p class="mb-1">
                                    <span class="badge bg-info me-2">{{ $product->category->name ?? 'General' }}</span>
                                    <span class="badge bg-success">{{ $product->seller->company_name ?? 'N/A' }}</span>
                                </p>
                                <p class="mb-2"><strong>Stock:</strong> {{ $product->stock ?? 'Unlimited' }}</p>

                                <p class="fs-5 text-primary fw-bold mb-3">
                                    Price: $<span id="modal-price-{{ $product->id }}">{{ number_format($product->price, 2) }}</span>
                                </p>

                                <!-- Quantity Selector -->
                                <div class="d-flex align-items-center mb-3">
                                    <label class="form-label me-3 mb-0">Quantity:</label>
                                    <input type="number" name="quantity" class="form-control quantity-input w-25" min="1" max="{{ $product->stock ?? 1000 }}" value="1" data-price="{{ $product->price }}">
                                </div>

                                <!-- Total -->
                                <div class="text-end mb-3">
                                    <span class="fw-bold">Total: $<span id="modal-total-{{ $product->id }}">{{ number_format($product->price, 2) }}</span></span>
                                </div>
                            </div>

                            <!-- Modal Buttons -->
                            <div class="d-flex gap-2">
                                <button type="button" class="btn btn-light w-50 rounded-pill shadow-sm" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="submit" class="btn btn-primary w-50 rounded-pill shadow-sm">
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

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const modalId = {
            {
                $product - > id
            }
        };
        const qtyInput = document.querySelector('#addToCartModal' + modalId + ' .quantity-input');
        const totalEl = document.getElementById('modal-total-' + modalId);

        function updateTotal() {
            let qty = parseInt(qtyInput.value) || 1;
            const price = parseFloat(qtyInput.dataset.price);
            totalEl.textContent = (price * qty).toFixed(2);
        }

        qtyInput.addEventListener('input', updateTotal);
        updateTotal(); // initial
    });
</script>

<!-- Star Rating Script -->
<script>
    document.addEventListener("DOMContentLoaded", () => {
        const stars = document.querySelectorAll(".star-rating i");
        const ratingInput = document.getElementById("ratingInput");

        stars.forEach(star => {
            star.addEventListener("click", () => {
                const rating = star.getAttribute("data-value");
                ratingInput.value = rating;

                // Fill stars visually
                stars.forEach(s => {
                    if (s.getAttribute("data-value") <= rating) {
                        s.classList.remove("fa-regular");
                        s.classList.add("fa-solid");
                    } else {
                        s.classList.remove("fa-solid");
                        s.classList.add("fa-regular");
                    }
                });
            });
        });
    });
</script>


@endsection