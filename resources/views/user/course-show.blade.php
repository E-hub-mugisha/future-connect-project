@extends('layouts.user')
@section('title', $course->title )
@section('content')

<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between g-3">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">Courses Details</h3>
                        <div class="nk-block-des text-soft">
                            <p>{{ $course->title }}</p>
                        </div>
                    </div>
                    <div class="nk-block-head-content"><a href="{{ route('admin.courses.index') }}"
                            class="btn btn-outline-light bg-white d-none d-sm-inline-flex"><em
                                class="icon ni ni-arrow-left"></em><span>Back</span></a><a
                            href="{{ route('admin.courses.index') }}"
                            class="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"><em
                                class="icon ni ni-arrow-left"></em></a>
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
                                                src="{{ asset($course->thumbnail) }}" class="w-100" alt="">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-info mt-5 me-xxl-5">
                                    <h4 class="product-price text-primary">{{ $course->category->name }}</h4>
                                    <h2 class="product-title">{{ $course->title }}</h2>
                                    <div class="product-rating">
                                        <ul class="rating">
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-half"></em></li>
                                        </ul>
                                        <div class="amount">{{ number_format($course->feedback->avg('rating'), 1) }} ({{ $course->feedback->count() }} Feedback)</div>
                                    </div>
                                    <div class="product-excrept text-soft">
                                        <p class="lead">
                                            {{ $course->description }}
                                        </p>
                                    </div>
                                    <div class="product-meta">
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Author</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $course->talent->name }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Contact Number</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $course->talent->phone }}
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Email</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $course->talent->email }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Date</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $course->created_at->format('d M Y') }}
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Status</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $course->status }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Tags</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $course->tags }}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-meta">
                                        <ul class="d-flex flex-wrap ailgn-center g-2 pt-1">

                                            <li><button class="btn btn-primary">Add Review</button>
                                            </li>
                                            <li class="ms-n1">
                                                <a href="{{ route('admin.courses.edit', $course->id) }}" class="btn btn-dark"><i class="ti ti-user-edit me-1"></i>Edit Course</a>
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
                                    <img class="video-poster w-100" src="{{ asset($course->thumbnail) }}" alt="">
                                    <a class="video-play popup-video" href="{{ $course->media }}">
                                        <em class="icon ni ni-play"></em>
                                        <span>Watch Video</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="product-details entry me-xxl-3">
                                    <h3>Courses details of {{ $course->talent->name }}</h3>
                                    <p>
                                        {{ $course->description }}
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="row g-gs mt-4">
                            <div class="col-md-10">

                                <div class="card card-bordered">
                                    <h4 class="p-2">Course feedback</h4>
                                    <div class="card-inner py-3">
                                        @forelse($course->feedback as $comment)
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


@endsection