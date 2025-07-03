@extends('layouts.guest')
@section('content')

<div class="page-content">
    <div class="container">
        <div className="new-services-section">
            <div className="container">
                <div className="section-header-two text-center" data-aos="fade-up">
                    <h2 className="mb-2"><span className="title-bg"></span>Our {{ $categoryName }} stories<span
                            className="title-bg2"></span></h2>
                    <p>Unlock a world of opportunities and take control of your future</p>
                </div>
                <div className="row">
                    @if($stories->count() > 0)
                        @foreach($stories as $story)
                            <div class="col-xl-4 col-md-6">
                                <div class="gigs-grid">
                                    <div class="gigs-img">
                                        <div class="img-slider owl-carousel">
                                            <div class="slide-images">
                                                <a
                                                    href="{{ url('/story-details/' . $story->slug) }}">
                                                    <img src="{{ asset('assets/img/home/service-01.jpg') }}"
                                                        class="img-fluid" alt="Story">
                                                </a>
                                            </div>
                                        </div>

                                        <div class="card-overlay-badge">
                                            <a href="#">
                                                <span class="badge bg-warning">
                                                    <i class="feather-star"></i> Featured
                                                </span>
                                            </a>
                                            <a href="#">
                                                <span class="badge bg-danger">
                                                    <i class="fa-solid fa-meteor"></i> {{ $story->level }}
                                                </span>
                                            </a>
                                        </div>

                                        <div class="fav-selection">
                                            <a role="button" tabindex="0"><i class="feather-video"></i></a>
                                            <a role="button" tabindex="0" class="fav-icon"><i
                                                    class="feather-heart"></i></a>
                                        </div>
                                    </div>

                                    <div class="gigs-content">
                                        <div class="gigs-info">
                                            <div>
                                                <a href="{{ url('/story-details/' . $story->slug) }}"
                                                    class="badge bg-light">
                                                    {{ $story->category->name ?? 'Uncategorized' }}
                                                </a>
                                                <span class="ms-2">+1</span>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i> 4.8 (360 Reviews)</span>
                                            </div>
                                        </div>

                                        <div class="gigs-title">
                                            <h5>
                                                <a
                                                    href="{{ url('/story-details/' . $story->slug) }}">
                                                    {{ $story->title }}
                                                </a>
                                            </h5>
                                        </div>

                                        <div class="gigs-card-footer">
                                            <div class="d-flex align-items-center gigs-left-text">
                                                <a href="#" class="avatar avatar-sm flex-shrink-0">
                                                    <img src="{{ asset('assets/img/user/profile.jpg') }}"
                                                        class="img-fluid rounded-pill" alt="img">
                                                </a>
                                                <div class="ms-2">
                                                    <h6 class="mb-0">
                                                        <a role="button" tabindex="0">
                                                            {{ $story->author->name ?? 'Author' }}
                                                        </a>
                                                    </h6>
                                                    <p class="mb-0">
                                                        {{ $story->author->address ?? 'Rwanda' }}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <h6 class="mb-1">$645</h6>
                                                <span>{{ $story->tags }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @else
                        <p class="text-center mt-4">No story found for {{ $categoryName }}.</p>
                    @endif

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
