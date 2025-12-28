@extends('layouts.talents')
@section('title', 'Product Details')
@section('content')

<div class="container py-4">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="az-content-title">Product Details</h2>

            <a href="{{ route('talent.products.index') }}" class="btn btn-outline-primary">
                <i class="ni ni-arrow-left me-1"></i> Back
            </a>
        </div>

        <div class="card border-0 shadow-sm rounded-4">
            <div class="card-body p-4">

                <div class="row gy-4">

                    {{-- LEFT PRODUCT IMAGE --}}
                    <div class="col-lg-6">
                        <div class="bg-light p-3 rounded-4 text-center">
                            <img src="{{ asset('storage/' . $product->image) }}"
                                alt="Product Image"
                                class="img-fluid rounded-4"
                                style="max-height: 420px; object-fit:cover;">
                        </div>
                    </div>

                    {{-- RIGHT PRODUCT INFO --}}
                    <div class="col-lg-6">
                        <div>
                            <span class="badge bg-success px-3 py-2 mb-2 rounded-pill">
                                {{ ucfirst($product->status) }}
                            </span>

                            <h2 class="fw-bold mb-2">{{ $product->name }}</h2>

                            <h3 class="text-primary fw-bold">
                                {{ $product->price }}
                                <small class="text-muted fs-6"> / item</small>
                            </h3>

                            {{-- Rating --}}
                            <div class="d-flex align-items-center mb-3">
                                <ul class="list-inline m-0 text-warning">
                                    <li class="list-inline-item"><i class="ni ni-star-fill"></i></li>
                                    <li class="list-inline-item"><i class="ni ni-star-fill"></i></li>
                                    <li class="list-inline-item"><i class="ni ni-star-fill"></i></li>
                                    <li class="list-inline-item"><i class="ni ni-star-fill"></i></li>
                                    <li class="list-inline-item"><i class="ni ni-star-half"></i></li>
                                </ul>
                                <span class="ms-2 text-muted">({{ $product->reviews_count }} reviews)</span>
                            </div>

                            <p class="text-muted fs-6">
                                {{ $product->description }}
                            </p>

                            <div class="mt-4">
                                <div class="d-flex justify-content-between py-2 border-bottom">
                                    <span class="text-muted">Category</span>
                                    <span class="fw-semibold">{{ $product->category->name }}</span>
                                </div>

                                <div class="d-flex justify-content-between py-2 border-bottom">
                                    <span class="text-muted">Seller</span>
                                    <span class="fw-semibold">{{ $product->seller->company_name }}</span>
                                </div>

                                <div class="d-flex justify-content-between py-2 border-bottom">
                                    <span class="text-muted">Stock</span>
                                    <span class="fw-semibold">{{ $product->stock }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Divider --}}
                <hr class="my-5">

                {{-- PRODUCT DETAILS & REVIEWS --}}
                <div class="row">

                    {{-- Reviews --}}
                    <div class="col-lg-5 mb-4">
                        <h4 class="fw-bold mb-4">Customer Reviews ({{ $product->reviews_count }})</h4>

                        @forelse($product->reviews as $review)
                        <div class="p-3 border rounded-4 mb-3 shadow-sm">
                            <div class="d-flex align-items-center">
                                <img src="{{ asset('storage/' . $review->user->profile_image) }}"
                                    class="rounded-circle me-3"
                                    width="45"
                                    height="45"
                                    style="object-fit:cover;">

                                <div>
                                    <h6 class="fw-bold mb-0">{{ $review->user->name }}</h6>
                                    <ul class="list-inline m-0 text-warning small">
                                        @for ($i = 0; $i < floor($review->rating); $i++)
                                            <li class="list-inline-item"><i class="ni ni-star-fill"></i></li>
                                            @endfor
                                            @if ($review->rating - floor($review->rating) >= 0.5)
                                            <li class="list-inline-item"><i class="ni ni-star-half"></i></li>
                                            @endif
                                    </ul>
                                </div>
                            </div>

                            <p class="mt-2 text-muted">
                                {{ $review->comment }}
                            </p>
                        </div>
                        @empty
                        <p class="text-muted">No reviews yet.</p>
                        @endforelse
                    </div>

                    {{-- Product Description --}}
                    <div class="col-lg-7">
                        <h4 class="fw-bold mb-3">More About {{ $product->name }}</h4>
                        <p class="text-muted fs-6">{{ $product->description }}</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
@endsection