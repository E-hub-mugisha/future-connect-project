@extends('layouts.app')

@section('content')

<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between g-3">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">skill Details</h3>
                        <div class="nk-block-des text-soft">
                            <p>{{ $skill->name }}</p>
                        </div>
                    </div>
                    <div class="nk-block-head-content"><a href="{{ route('admin.skills.index') }}"
                            class="btn btn-outline-light bg-white d-none d-sm-inline-flex"><em
                                class="icon ni ni-arrow-left"></em><span>Back</span></a><a
                            href="{{ route('admin.skills.index') }}"
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
                                                src="{{ asset($skill->image) }}" class="w-100" alt="">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-info mt-5 me-xxl-5">
                                    <h4 class="product-price text-primary">{{ $skill->category->name }}</h4>
                                    <h2 class="product-title">{{ $skill->name }}</h2>
                                    <div class="product-rating">
                                        <ul class="rating">
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-fill"></em></li>
                                            <li><em class="icon ni ni-star-half"></em></li>
                                        </ul>
                                        <div class="amount">{{ number_format($skill->reviews->avg('rating'), 1) }} ({{ $skill->reviews->count() }} Comments)</div>
                                    </div>
                                    <div class="product-excrept text-soft">
                                        <p class="lead">
                                            {{ $skill->description }}
                                        </p>
                                    </div>
                                    <div class="product-meta">
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Author</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $skill->talent->name }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Contact Number</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $skill->talent->phone }}
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Email</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $skill->talent->email }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Date</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $skill->created_at->format('d M Y') }}
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="d-flex g-3 gx-5">
                                            <li>
                                                <div class="fs-14px text-muted">Status</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $skill->status }}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Tags</div>
                                                <div class="fs-16px fw-bold text-secondary">
                                                    {{ $skill->tags }}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-meta">
                                        <ul class="d-flex flex-wrap ailgn-center g-2 pt-1">

                                            <li><button class="btn btn-primary">Add Review</button>
                                            </li>
                                            <li class="ms-n1">
                                                <a href="{{ route('admin.skills.edit', $skill->id) }}" class="btn btn-dark"><i class="ti ti-user-edit me-1"></i>Edit Skill</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="hr border-light">
                        <div class="row g-gs flex-lg-row-reverse pt-5">
                            <div class="col-lg-5">
                                <div class="video"><img class="video-poster w-100"
                                        src="{{ asset($skill->image) }}" alt=""><a
                                        class="video-play popup-video"
                                        href="{{ $skill->image }}"><em
                                            class="icon ni ni-play"></em><span>Watch
                                            Video</span></a>
                                        </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="product-details entry me-xxl-3">
                                    <h3>Skill details of {{ $skill->talent->name }}</h3>
                                    <p>
                                        {{ $skill->description }}
                                    </p>

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