@extends('layouts.app')
@section('title', $story->title )
@section('content')

<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between g-3">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">Story Details</h3>
                        <div class="nk-block-des text-soft">
                            <p>{{ $story->title }}</p>
                        </div>
                    </div>
                    <div class="nk-block-head-content">
                        <a href="{{ route('admin.stories.index') }}" class="btn btn-outline-danger rounded-pill">
                            <span>Back to story</span>
                        </a>
                        <button class="btn btn-warning rounded-pill" data-bs-toggle="modal" data-bs-target="#updateStatusModal">
                            Update Status
                        </button>
                        <a href="{{ route('admin.stories.edit', $story->id) }}" class="btn btn-info rounded-pill"><i class="ti ti-user-edit me-1"></i>Edit Story</a>

                        <button class="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#addReviewModal">
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
            <div class="nk-block">
                <div class="card card-bordered">
                    <div class="card-inner">
                        <div class="row pb-5">
                            <div class="col-lg-6">
                                <div class="product-gallery me-xl-1 me-xxl-5">
                                    <div class="slider-init" id="sliderFor"
                                        data-slick='{"arrows": false, "fade": true, "asNavFor":"#sliderNav", "slidesToShow": 1, "slidesToScroll": 1}'>
                                        <div class="slider-item rounded"><img
                                                src="{{ asset($story->thumbnail) }}" class="w-100" alt="">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-info mt-5 me-xxl-5">
                                    <h4 class="product-price text-primary">{{ $story->category->name }}</h4>
                                    <h2 class="product-title">{{ $story->title }}</h2>
                                    <div class="product-rating">
                                        <ul class="rating">
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-half"></em></li>
                                        </ul>
                                        <div class="amount">{{ number_format($story->comments->avg('rating'), 1) }} ({{ $story->comments->count() }} Comments)</div>
                                    </div>
                                    <div class="product-excrept text-soft">
                                        <p class="lead">
                                            {{ $story->content }}
                                        </p>
                                    </div>
                                    <div class="product-meta">
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Author</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $story->talent->name }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Contact Number</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $story->talent->phone }}
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Email</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $story->talent->email }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Date</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $story->created_at ? $story->created_at->diffForHumans() : '' }}
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Status</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $story->status }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Tags</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $story->tags }}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="hr border-light">
                        <div class="row g-gs flex-lg-row-reverse pt-5">
                            <div class="col-lg-5">
                                <div class="video">
                                    <img class="video-poster w-100" src="{{ asset($story->thumbnail) }}" alt="">
                                    <a class="video-play popup-video" href="{{ $story->media }}">
                                        <em class="icon ni ni-play"></em>
                                        <span>Watch Video</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="product-details entry me-xxl-3">
                                    <h3>Story details of {{ $story->talent->name }}</h3>
                                    <p>
                                        {{ $story->content }}
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="row g-gs mt-4">
                            <div class="col-md-10">

                                <div class="card card-bordered">
                                    <h4 class="p-2">Story comments</h4>
                                    <div class="card-inner py-3">
                                        @forelse($story->comments as $comment)
                                        <div class="d-sm-flex align-items-sm-center justify-content-sm-between">
                                            <div class="pb-1 pb-sm-0">
                                                <h5 class="title">{{ $comment->comment }}</h5>
                                                <div class="d-flex">
                                                    <p class="m-0 pe-2">by <a href="#" target="_blank">{{ $comment->name }}</a></p><span>{{ \Carbon\Carbon::parse($comment->created_at)->diffForHumans() }}</span>
                                                </div>
                                            </div>
                                            <ul class="rating">
                                                @for($i = 1; $i <= 5; $i++)
                                                    <em class="icon ni ni-star-fill {{ $i <= $comment->rating ? 'filled' : '' }}"></em>
                                                    @endfor
                                            </ul>
                                        </div>
                                        @empty
                                        <li>No reviews yet.</li>
                                        @endforelse
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Update Status Modal -->
<div class="modal fade" id="updateStatusModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Update Story Status</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <form action="{{ route('admin.stories.updateStatus', $story->id) }}" method="POST">
                @csrf
                @method('PUT')

                <div class="modal-body">

                    <div class="mb-3">
                        <label class="form-label">Select Status</label>
                        <select name="status" class="form-select" required>
                            <option value="pending" {{ $story->status == 'pending' ? 'selected' : '' }}>Pending</option>
                            <option value="approved" {{ $story->status == 'approved' ? 'selected' : '' }}>Approved</option>
                            <option value="rejected" {{ $story->status == 'rejected' ? 'selected' : '' }}>Rejected</option>
                            <option value="published" {{ $story->status == 'published' ? 'selected' : '' }}>Published</option>
                        </select>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-success">Update Status</button>
                </div>

            </form>

        </div>
    </div>
</div>

<!-- Add Review Modal -->
<div class="modal fade" id="addReviewModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Add Review</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <form action="{{ route('admin.reviews.store') }}" method="POST">
                @csrf

                <div class="modal-body">

                    <!-- Story ID -->
                    <input type="hidden" name="story_id" value="{{ $story->id }}">

                    <!-- Name -->
                    <div class="mb-3">
                        <label class="form-label">Your Name</label>
                        <input type="text" name="name" class="form-control" required>
                    </div>

                    <!-- Email -->
                    <div class="mb-3">
                        <label class="form-label">Your Email</label>
                        <input type="email" name="email" class="form-control" required>
                    </div>

                    <!-- Rating -->
                    <div class="mb-3">
                        <label class="form-label">Rating</label>
                        <select name="rating" class="form-select" required>
                            <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                            <option value="4">⭐⭐⭐⭐ (4)</option>
                            <option value="3">⭐⭐⭐ (3)</option>
                            <option value="2">⭐⭐ (2)</option>
                            <option value="1">⭐ (1)</option>
                        </select>
                    </div>

                    <!-- Comment -->
                    <div class="mb-3">
                        <label class="form-label">Comment</label>
                        <textarea name="comment" class="form-control" rows="3" required></textarea>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Submit Review</button>
                </div>

            </form>

        </div>
    </div>
</div>

@endsection