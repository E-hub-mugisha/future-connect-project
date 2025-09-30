@extends('layouts.guest')
@section('title', $talent->name)
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

<div class="page-content content">
    <div class="container">
        <div class="row">

            <div class="col-lg-5 col-md-6 col-sm-12">

                <div class="postLists breadcrumb-bar-info talent-profile-info breadcrumb-info text-start pt-0 ">
                    <h2 class="breadcrumb-title mt-4">
                        {{ $talent->name }} <i class="ti ti-discount-check-filled verify-icon"></i>
                    </h2>
                    <ul class="info-links">
                        <li>
                            <i class="ti ti-star-filled text-warning"></i>
                            {{ number_format($talent->feedback->avg('rating'), 1) }}
                            ({{ $talent->feedback->count() }} Feedbacks)
                        </li>

                        <li>
                            <i class="ti ti-user"></i>Open to {{ $talent->skill }}
                        </li>
                        <li>
                            <i class="ti ti-calendar-due"></i>{{ $talent->category->name ?? 'Uncategorized' }}
                        </li>
                        <li class="border-0">
                            <div class="tranlator d-flex align-items-center">
                                <i class="ti ti-heart"></i>
                                {{ $talent->status ? 'Active' : 'Inactive' }}
                            </div>
                        </li>
                        <li>
                            @php
                            // Pick a color class based on the level
                            $badgeClass = match($talent->level) {
                            'advanced' => 'bg-success', // Green
                            'intermediate' => 'bg-warning text-dark', // Yellow/Orange
                            default => 'bg-secondary', // Gray for Beginner
                            };
                            @endphp

                            <span class="badge {{ $badgeClass }}">
                                {{ ucfirst($talent->level) }}
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- Slider -->
                <div class="service-card w-100 mb-4">
                    <div class="service-video-wrap text-center">
                        <div class="service-img-wrap position-relative overflow-hidden rounded-4 shadow" style="width: 100%;">
                            <img
                                src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                class="img-fluid w-100 h-100 object-fit-cover rounded-4"
                                alt="Slider Img"
                                style="object-fit: cover;" />
                        </div>
                    </div>
                </div>
                <!-- /Slider -->

                <div class="row gx-3 row-gap-3 statistics">
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box postLists">
                            <i class="ti ti-photo-star text-secondary"></i>
                            <p>Total Stories</p>
                            <h6>
                                {{ $talent->stories->count() }}
                            </h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box postLists">
                            <i class="ti ti-heart text-purple"></i>
                            <p>Total Rating</p>
                            <h6>
                                {{ number_format($talent->feedback->avg('rating'), 1) }}

                            </h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box postLists">
                            <i class="ti ti-message-chatbot text-indigo"></i>
                            <p>Feedbacks</p>
                            <h6>
                                {{ $talent->feedback->count() }}

                            </h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box postLists">
                            <i class="ti ti-eye text-teal"></i>
                            <p>Profile Views</p>
                            <h6>1,100</h6>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-lg-7">

                <div class="service-widget member-widget postLists">
                    <div class="user-details">
                        <div class="user-img users-img">
                            <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}" alt="img" />
                        </div>
                        <div class="user-info">
                            <h5>
                                <span class="me-2">{{ $talent->name }} <i class="ti ti-discount-check-filled verify-icon"></i></span>
                                <span class="badge badge-success">
                                    Verified
                                </span>
                            </h5>
                            <p><i class="fa-solid fa-star"></i> {{ number_format($talent->feedback->avg('rating'), 1) }}
                                ({{ $talent->feedback->count() }} Feedbacks)</p>
                        </div>
                    </div>

                    <div class="about-me new-about">
                        <h6>About Me</h6>
                        <p>
                            Hello, I'm {{ $talent->name ?? 'Unnamed Talent' }},
                            a passionate {{ $talent->skill ?? 'creative' }} and performer blending
                            {{ $talent->category->name ?? 'various disciplines' }}.
                            <span class="more-content">
                                I create immersive experiences that inspire and uplift communities.
                            </span>
                        </p>
                        <a role="button" tabindex="0" class="read-more">Read More</a>
                    </div>

                    <div class="member-info member-info-new">

                        <div class="member-list d-flex align-items-center gap mb-3">
                            <i class="ti ti-world"></i>
                            <h6 class="mb-0">
                                Based In
                                <span class="pt-2"> {{ $talent->address }}</span>
                            </h6>
                        </div>
                        <div class="member-list d-flex align-items-center gap mb-3">
                            <i class="ti ti-calendar-event"></i>
                            <h6 class="mb-0">
                                Active Since
                                <span class="pt-2"> {{ \Carbon\Carbon::parse($talent->created_at)->format('F d, Y') }}</span>
                            </h6>
                        </div>
                        <div class="member-list d-flex align-items-center gap">
                            <i class="ti ti-language"></i>
                            <h6 class="mb-0">
                                Languages
                                <span class="pt-2">{{ $talent->language }}</span>
                            </h6>
                        </div>
                    </div>
                    <div class="col-md-12 mt-4">
                        <style>
                            .slide-line-btn {
                                position: relative;
                                display: inline-flex;
                                align-items: center;
                                gap: 6px;
                                padding: 6px 16px;
                                color: #fff;
                                background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
                                border-radius: 30px;
                                text-decoration: none;
                                overflow: hidden;
                                z-index: 1;
                            }

                            .slide-line {
                                position: absolute;
                                top: 100%;
                                left: -100%;
                                width: 200%;
                                height: 100%;
                                background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%);
                                transform: rotate(45deg);
                                animation: slideRightUp 2s ease-in-out infinite;
                                z-index: 0;
                            }

                            .slide-line:nth-child(2) {
                                animation-delay: 0s;
                                opacity: 0;
                                width: 50%;
                            }

                            .slide-line:nth-child(3) {
                                animation-delay: 0s;
                                opacity: 0.5;
                                width: 150%;
                            }

                            .slide-line:nth-child(4) {
                                animation-delay: 0.8s;
                                opacity: 0.7;
                                width: 200%;
                            }

                            @keyframes slideRightUp {
                                0% {
                                    top: 100%;
                                    left: -100%;
                                }

                                50% {
                                    top: 0%;
                                    left: 0%;
                                }

                                100% {
                                    top: -100%;
                                    left: 100%;
                                }
                            }

                            .slide-line-btn span {
                                pointer-events: none;
                            }
                        </style>
                        <a role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#support_talent"
                            class="btn slide-line-btn mb-0">Support Talent
                            <span class="slide-line"></span>
                            <span class="slide-line"></span>
                            <span class="slide-line"></span>
                        </a>
                        <a role="button" tabindex="0" href="{{ route('talent.stories', $talent->id) }}"
                            class="btn slide-line-btn mb-0">Stories
                            <span class="slide-line"></span>
                            <span class="slide-line"></span>
                            <span class="slide-line"></span>
                        </a>
                    </div>
                    <div class="service-widget mt-4">
                        <h5 class="">Share Talent Profile</h5>
                        <div class="social-links d-flex align-items-center breadcrumb-social pt-2">
                            <ul>
                                <li><a role="button" tabIndex="0"><i class="fa-brands fa-facebook" style="color: var(--white);"></i></a></li>
                                <li><a role="button" tabIndex="0"><i class="fa-brands fa-x-twitter" style="color: var(--white);"></i></a></li>
                                <li><a role="button" tabIndex="0"><i class="fa-brands fa-instagram" style="color: var(--white);"></i></a></li>
                                <li><a role="button" tabIndex="0"><i class="fa-brands fa-google" style="color: var(--white);"></i></a></li>
                                <li><a role="button" tabIndex="0"><i class="fa-brands fa-youtube" style="color: var(--white);"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div class="clearfix"></div>

            <div class="col-md-12">
                <div class="postLists">
                    <div class="row">
                        <div class="review-widget col-md-6">

                            {{-- Reviews Title --}}
                            <div class="review-title sort-search-gigs">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <h3>Reviews ({{ $talent->feedback->count() }})</h3>
                                    </div>
                                </div>
                            </div>

                            {{-- Star Breakdown --}}
                            <div class="total-rating align-items-center">
                                <div class="total-review">

                                    @php
                                    $total = $talent->feedback->count();
                                    $starCounts = [
                                    5 => $talent->feedback->where('rating', 5)->count(),
                                    4 => $talent->feedback->where('rating', 4)->count(),
                                    3 => $talent->feedback->where('rating', 3)->count(),
                                    2 => $talent->feedback->where('rating', 2)->count(),
                                    1 => $talent->feedback->where('rating', 1)->count(),
                                    ];
                                    $average = $total ? number_format($talent->feedback->avg('rating'), 1) : 0;
                                    @endphp

                                    @foreach($starCounts as $stars => $count)
                                    @php
                                    $percent = $total ? ($count / $total) * 100 : 0;
                                    @endphp
                                    <div class="progress-lvl mb-2">
                                        <h6>{{ $stars }} Star Ratings</h6>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar"
                                                style="width: {{ $percent }}%" aria-valuenow="{{ $percent }}" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <p>{{ $count }}</p>
                                    </div>
                                    @endforeach

                                </div>

                                {{-- Average Rating --}}
                                <div class="total-reviews text-center bg-white">
                                    <h6> Customer Reviews & Ratings </h6>
                                    <h2> {{ $average }} / 5.0 </h2>
                                    <div class="icons d-flex align-items-center justify-content-center gap-1 mb-2">
                                        @for($i = 1; $i <= 5; $i++)
                                            <i class="ti ti-star-filled {{ $i <= round($average) ? 'text-warning' : 'text-light' }}"></i>
                                            @endfor
                                    </div>
                                    <p class="text-center">Based on {{ $total }} Reviews</p>
                                </div>
                            </div>

                            {{-- Individual Reviews List --}}
                            <ul class="review-lists home-reviews">
                                @forelse($talent->feedback as $fb)
                                <li>
                                    <div class="review-wrap">
                                        <div class="review-user-info">
                                            <div class="review-img">
                                                <img src="{{ asset('assets/img/user/profile.jpg') }}" alt="img" />
                                            </div>
                                            <div class="reviewer-info">
                                                <div class="reviewer-loc">
                                                    <h6>{{ $fb->name }}</h6>
                                                </div>
                                                <div class="reviewer-rating">
                                                    <div class="star-rate">
                                                        <span class="ratings">
                                                            @for($i = 1; $i <= 5; $i++)
                                                                <i class="fa-solid fa-star {{ $i <= $fb->rating ? 'filled' : '' }}"></i>
                                                                @endfor
                                                        </span>
                                                        <span class="rating-count">{{ $fb->rating }} </span>
                                                    </div>
                                                </div>
                                                <div class="reviewer-time">
                                                    <p>{{ $fb->created_at->diffForHumans() }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>{{ $fb->comment }}</p>
                                        </div>
                                    </div>
                                </li>
                                @empty
                                <li>No reviews yet.</li>
                                @endforelse
                            </ul>

                        </div>

                        {{-- Review Submission Form --}}
                        <div class="login-card col-md-6">
                            <form action="{{ route('talent.feedback.store') }}" method="POST">
                                @csrf
                                <input type="hidden" name="talent_id" value="{{ $talent->id }}">

                                <div class="login-heading text-start mb-4">
                                    <h5>Leave a Review</h5>
                                </div>

                                <div class="form-wrap form-focus mb-3">
                                    <label class="mb-1 fw-medium text-dark">Your Rating <span class="text-primary">*</span></label>

                                    <div class="star-rating">
                                        <input type="radio" name="rating" id="star5" value="5" required>
                                        <label for="star5" class="ti ti-star-filled"></label>

                                        <input type="radio" name="rating" id="star4" value="4">
                                        <label for="star4" class="ti ti-star-filled"></label>

                                        <input type="radio" name="rating" id="star3" value="3">
                                        <label for="star3" class="ti ti-star-filled"></label>

                                        <input type="radio" name="rating" id="star2" value="2">
                                        <label for="star2" class="ti ti-star-filled"></label>

                                        <input type="radio" name="rating" id="star1" value="1">
                                        <label for="star1" class="ti ti-star-filled"></label>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-lg-6 mb-3">
                                        <div class="form-wrap form-focus">
                                            <label class="mb-1 fw-medium text-dark">Name <span class="text-primary">*</span></label>
                                            <input type="text" name="name" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <div class="form-wrap form-focus">
                                            <label class="mb-1 fw-medium text-dark">Email <span class="text-primary">*</span></label>
                                            <input type="email" name="email" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 mb-3">
                                        <div class="form-wrap form-focus">
                                            <label class="mb-1 fw-medium text-dark">Write a Review <span class="text-primary">*</span></label>
                                            <textarea name="comment" class="form-control text-area" required></textarea>
                                        </div>
                                    </div>
                                </div>

                                <button class="btn btn-primary member-btn">Submit a Review</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div class="recent-works">
            <div class="row">
                <div class="col-md-12">
                    <div class="title-sec">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h3>{{ $talent->name }}'s Stories</h3>
                            </div>
                            <div class="col-md-4">
                                <div class="owl-nav worknav nav-control nav-top"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next disabled"><i class="fa-solid fa-chevron-right"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div class="gigs-slider owl-carousel owl-loaded owl-drag">
                        @if($talent->stories && $talent->stories->count())
                        <div class="owl-stage-outer">
                            <div class="owl-stage" style="transform: translate3d(-440px, 0px, 0px); transition: 2s; width: 1760px;">
                                @foreach($talent->stories as $story)
                                <div class="owl-item" style="width: 416px; margin-right: 24px;">
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider owl-carousel">
                                                <div class="slide-images">
                                                    <a href="{{ url('/story-details/' . $story->slug) }}">
                                                        <img src="{{ asset('assets/img/home/service-01.jpg') }}" class="img-fluid" alt="Gigs">
                                                    </a>
                                                </div>

                                            </div>
                                            <div class="card-overlay-badge">
                                                <a href="{{ url('/story/category/'.$story->slug) }}">
                                                    <span class="badge bg-warning">
                                                        <i class="feather-star"></i>{{ $story->category->name ?? 'Uncategorized' }}
                                                    </span>
                                                </a>
                                                <a href="{{ url('/story/category/'.$story->slug) }}">
                                                    <span class="badge bg-danger">
                                                        <i class="fa-solid fa-meteor"></i>
                                                        {{ $story->category->name ?? 'Uncategorized' }}
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
                                                    <a href="{{ url('/story/category/'.$story->category->slug ?? '') }}"
                                                        class="badge bg-light">
                                                        {{ $story->category->name ?? 'Uncategorized' }}
                                                    </a>
                                                    <span class="ms-2">+1</span>
                                                </div>
                                                <div class="star-rate">
                                                    <span>
                                                        <i class="fa-solid fa-star"></i>
                                                        {{ number_format($story->comments->avg('rating'), 1) }}
                                                        ({{ $story->comments->count() }} Reviews)
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="gigs-title">
                                                <h5><a
                                                        href="{{ url('/story-details/'.$story->slug) }}">{{ $story->title }}</a>
                                                </h5>
                                            </div>
                                            <div class="gigs-card-footer d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center gigs-left-text">
                                                    <a href="{{ url('/talent/' . $story->talent->id) }}" class="avatar avatar-sm flex-shrink-0">
                                                        <img src="{{ $story->talent->image ? asset('image/talents/' . $story->talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                                            class="img-fluid rounded-pill" alt="img" />
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="mb-0">
                                                            <a role="button"
                                                                tabindex="0">{{ $story->talent->name ?? 'Author' }}</a>
                                                        </h6>

                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span>{{ $story->tags }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                        <div class="owl-dots disabled"></div>
                        @else
                        <p>No stories found.</p>
                        @endif
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="support_talent" tabindex="-1" aria-labelledby="supportTalentLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="supportTalentLabel">Support Talent</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Add form or message here -->
                    <form method="POST" action="{{ route('support.talent') }}">
                        @csrf
                        <input type="hidden" name="talent_id" value="{{ $talent->id }}">

                        <div class="mb-3">
                            <label for="name" class="form-label">Your Name</label>
                            <input type="text" class="form-control" name="name" id="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Your Email</label>
                            <input type="email" class="form-control" name="email" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="amount" class="form-label">Support Amount</label>
                            <input type="number" class="form-control" name="amount" id="amount" required>
                        </div>

                        <div class="mb-3">
                            <label for="message" class="form-label">Message (Optional)</label>
                            <textarea name="message" id="message" class="form-control" rows="3"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Send Support</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            $('.star-rating-input i').click(function() {
                var rating = $(this).data('value');
                $('#ratingInput').val(rating);

                // Highlight stars
                $('.star-rating-input i').each(function() {
                    if ($(this).data('value') <= rating) {
                        $(this).removeClass('text-light').addClass('text-warning');
                    } else {
                        $(this).removeClass('text-warning').addClass('text-light');
                    }
                });
            });
        });
    </script>


    @endsection