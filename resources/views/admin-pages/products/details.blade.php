@extends('layouts.app')
@section('title', 'Product Details')
@section('content')

<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between g-3">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">Product Details</h3>
                        <div class="nk-block-des text-soft">
                            <p>{{ $product->name }}</p>
                        </div>
                    </div>
                    <div class="nk-block-head-content">
                        <a href="{{ route('admin.products.index') }}" class="btn btn-outline-light bg-white d-none d-sm-inline-flex">
                            <em class="icon ni ni-arrow-left"></em><span>Back</span>
                        </a>
                        <a href="{{ route('admin.products.index') }}" class="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none">
                            <em class="icon ni ni-arrow-left"></em>
                        </a>
                    </div>
                </div>
            </div>
            <div class="nk-block">
                <div class="card card-bordered">
                    <div class="card-inner">
                        <div class="row pb-5">
                            <div class="col-lg-6">
                                <div class="product-gallery me-xl-1 me-xxl-5">
                                    <div class="product-gallery-preview order-sm-2">
                                        <div class="product-gallery-preview-item active" id="preview-1">
                                            <img class="product-image" src="{{ asset('storage/' . $product->image) }}" alt="Product Image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-info mt-5 me-xxl-5">
                                    <h4 class="product-price text-primary">{{ $product->price }} <small class="text-muted fs-14px">$98.00</small></h4>
                                    <h2 class="product-title">{{ $product->name }}</h2>
                                    <div class="product-rating">
                                        <ul class="rating">
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-half"></em></li>
                                        </ul>
                                        <div class="amount">{{ $product->reviews_count }} Reviews</div>
                                    </div>
                                    <div class="product-excrept text-soft">
                                        <p class="lead">
                                            {{ $product->description }}
                                        </p>
                                    </div>
                                    <div class="product-meta">
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Category</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $product->category->name }}</div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Seller</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $product->seller->company_name }}</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-meta">
                                        <h6 class="title">Stock {{ $product->stock }}</h6>
                                    </div>
                                    <div class="product-meta">
                                        <h6 class="title">Status {{ $product->status }}</h6>
                                    </div>
                                    <div class="product-meta">
                                        <ul class="d-flex flex-wrap ailgn-center g-2 pt-1">
                                            <li><button class="btn btn-primary">Add to Cart</button>
                                            </li>
                                            <li class="ms-n1"><button class="btn btn-icon btn-trigger text-primary"><em class="icon ni ni-heart"></em></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="hr border-light">
                        <div class="row g-gs flex-lg-row-reverse pt-5">
                            <div class="col-lg-5">
                                <div class="review">
                                    <h3 class="mb-4">Customer Reviews ({{ $product->reviews_count }})</h3>
                                    @foreach($product->reviews as $review)
                                    <div class="review-item">
                                        <div class="review-author">
                                            <div class="author-thumb">
                                                <img src="{{ asset('storage/' . $review->user->profile_image) }}" alt="Author">
                                            </div>
                                            <div class="author-info">
                                                <h5 class="author-name">{{ $review->user->name }}</h5>
                                                <ul class="rating">
                                                    @for ($i = 0; $i < floor($review->rating); $i++)
                                                        <li><em class="icon ni ni-star-fill"></em></li>
                                                    @endfor
                                                    @if ($review->rating - floor($review->rating) >= 0.5)
                                                        <li><em class="icon ni ni-star-half"></em></li>
                                                    @endif
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>{{ $review->comment }}</p>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="product-details entry me-xxl-3">
                                    <h3>Product details of {{ $product->name }}</h3>
                                    <p>{{ $product->description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

@endsection