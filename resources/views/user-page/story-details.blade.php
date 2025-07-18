@extends('layouts.guest')
@section('content')
<!-- Breadcrumb -->
<div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info">

    <div class="container">
        <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('user.home') }}">Home</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="{{ route('user.stories') }}">Stories</a>
                </li>
            </ol>
        </nav>
        <h2 class="breadcrumb-title">
            {{ $story->title }}
        </h2>
    </div>
</div>
<!-- /Breadcrumb -->

<style>
    .talent-story-info {
        background: #011E34;
        color: #fff;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
    }
</style>

<!-- Content -->
<div class="page-content content">
    <div class="container">
        <div class="row">

            <!-- Service Details -->
            <div class="col-lg-8">
                <!-- Talent story Header -->
                <div class="breadcrumb-bar breadcrumb-bar-info talent-story-info breadcrumb-info text-start pt-0 bg-white">
                    <a role="button" tabIndex="0" class="badge bg-light mb-4 mt-4 text-dark">
                        {{ $story->category->name }}
                    </a>
                    </br>
                    <h2 class="breadcrumb-title">
                        {{ $story->title }}
                    </h2>
                    <ul class="info-links">
                        <li>
                            <i class="ti ti-star-filled text-warning"></i>
                            {{ number_format($story->comments->avg('rating'), 1) }}
                            ({{ $story->comments->count() }} Comments)
                        </li>
                        <li>
                            <i class="ti ti-calendar-due"></i>Posted on:
                            {{ \Carbon\Carbon::parse($story->created_at)->format('M d, Y') }}
                        </li>
                        <li class="border-0">
                            <div class="tranlator d-flex align-items-center">
                                @if($story->status == 'approved')
                                <span class="badge bg-success">
                                    Approved
                                </span>
                                @elseif($story->status == 'pending')
                                <span class="badge bg-warning">
                                    Pending
                                </span>
                                @endif
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- /Talent Profile Header -->


                <!-- Slider -->
                @php
                // Extract YouTube video ID from full URL
                preg_match('/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]+)/', $story->media, $matches);
                $videoId = $matches[1] ?? null;
                @endphp

                @if ($videoId && $story->thumbnail)
                <div class="service-card w-100 mb-4">
                    <div class="service-video-wrap text-center">
                        <div class="video-wrapper position-relative overflow-hidden rounded-4 shadow" style="width: 100%; padding-top: 56.25%;">

                            <!-- YouTube Player (hidden behind thumbnail initially) -->
                            <div id="player" class="position-absolute top-0 start-0 w-100 h-100"></div>

                            <!-- Custom Thumbnail Overlay -->
                            <div class="video-thumbnail position-absolute top-0 start-0 w-100 h-100" id="custom-thumbnail" style="cursor: pointer; background-color: #000;">
                                <img src="{{ asset($story->thumbnail) }}"
                                    alt="Video Thumbnail"
                                    class="img-fluid w-100 h-100 object-fit-cover rounded-4"
                                    style="object-fit: cover;">
                                <div class="position-absolute top-50 start-50 translate-middle bg-white px-4 py-2 rounded-pill shadow d-flex align-items-center gap-2 play-btn"
                                    style="z-index: 2;">
                                    <i class="fa fa-play text-danger"></i>
                                    <span class="fw-semibold text-dark">Watch Story</span>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="emailVerifyModal" tabindex="-1" aria-labelledby="emailVerifyModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content border-0 shadow-lg rounded-4">
                                        <div class="modal-header bg-warning bg-opacity-10">
                                            <h5 class="modal-title fw-bold" id="emailVerifyModalLabel">Verify Email to Continue</h5>
                                        </div>
                                        <form id="emailVerifyForm" method="POST" action="{{ route('video.verifyEmail') }}">
                                            @csrf
                                            <input type="hidden" name="story_id" value="{{ $story->id }}">
                                            <input type="hidden" name="video_id" value="{{ $videoId }}">
                                            <div class="modal-body text-center">
                                                <p>Please enter your email to verify if you have access to this video.</p>
                                                <input type="email" class="form-control" name="email" placeholder="Enter your email" required>
                                            </div>
                                            <div class="modal-footer justify-content-center">
                                                <button type="submit" class="btn btn-success px-4">Verify Email</button>
                                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- YouTube IFrame API + Playback Logic -->
                            <script>
                                var tag = document.createElement('script');
                                tag.src = "https://www.youtube.com/iframe_api";
                                var firstScriptTag = document.getElementsByTagName('script')[0];
                                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                                var player;
                                var pauseTime = 90; // 1:30
                                var checkInterval;

                                function onYouTubeIframeAPIReady() {
                                    player = new YT.Player('player', {
                                        height: '100%',
                                        width: '100%',
                                        videoId: '{{ $videoId }}', // Replace with dynamic video ID
                                        playerVars: {
                                            'autoplay': 0,
                                            'controls': 1,
                                            'rel': 0,
                                            'modestbranding': 1
                                        },
                                        events: {
                                            'onReady': onPlayerReady,
                                            'onStateChange': onPlayerStateChange
                                        }
                                    });
                                }

                                function onPlayerReady(event) {
                                    document.getElementById('custom-thumbnail').addEventListener('click', function() {
                                        this.style.display = 'none';
                                        event.target.playVideo();
                                    });
                                }

                                function onPlayerStateChange(event) {
                                    if (event.data === YT.PlayerState.PLAYING) {
                                        checkInterval = setInterval(function() {
                                            var currentTime = player.getCurrentTime();
                                            if (currentTime >= pauseTime) {
                                                player.pauseVideo();
                                                clearInterval(checkInterval);
                                                var modal = new bootstrap.Modal(document.getElementById('emailVerifyModal'));
                                                modal.show();
                                            }
                                        }, 500);
                                    } else {
                                        clearInterval(checkInterval);
                                    }
                                }

                                document.addEventListener("DOMContentLoaded", function() {
                                    document.getElementById("resumeBtn")?.addEventListener("click", function() {
                                        player.playVideo();
                                    });

                                    document.getElementById("cancelPlaybackBtn")?.addEventListener("click", function() {
                                        player.stopVideo(); // Stops the video
                                        document.getElementById('custom-thumbnail').style.display = 'block'; // Optionally show thumbnail again
                                    });
                                });
                            </script>
                        </div>

                    </div>
                </div>
                @endif
                <!-- /Slider -->

                <div class="row gx-3 row-gap-3 mb-4 statistics">
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box">
                            <i class="ti ti-photo-star text-secondary"></i>
                            <p>Total Ratings</p>
                            <h6>{{ number_format($story->comments->avg('rating'), 1) }}</h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box">
                            <i class="ti ti-heart text-purple"></i>
                            <p>Total Likes</p>
                            <h6>320</h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box">
                            <i class="ti ti-message-chatbot text-indigo"></i>
                            <p>Comments</p>
                            <h6>({{ $story->comments->count() }} Comments)</h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box">
                            <i class="ti ti-eye text-teal"></i>
                            <p>Profile Views</p>
                            <h6>1,100</h6>
                        </div>
                    </div>
                </div>


                <!-- /TAB Services -->
                <div class="listing-tab">
                    <div class="listing-slider">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a role="button" tabIndex="0" class="nav-link active" data-bs-toggle="tab"
                                    data-bs-target="#about_me" aria-selected="false" role="tab" tabindex="-1">
                                    Description
                                </a>
                            </li>
                            <li>
                                <a role="button" tabIndex="0" class="nav-link" data-bs-toggle="tab" data-bs-target="#review"
                                    aria-selected="false" role="tab" tabindex="-1">
                                    Reviews
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="tab-content rounded-3" style="background: var(--white);">

                    <div class="tab-pane fade show active" id="about_me" role="tabpanel">
                        <!-- About Gigs -->
                        <div class="service-wrap">
                            <h3>{{ $story->title }}</h3>
                            <p>{{ $story->description }}</p>
                        </div>
                        <!-- /About Gigs -->
                    </div>
                    <div class="tab-pane fade " id="review" role="tabpanel">
                        <!-- Review Lists -->
                        <div class="review-widget">
                            <div class="review-title sort-search-gigs">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <h3>Reviews (45)</h3>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="filters-wrap sort-categories justify-content-end">
                                            <div class="collapse-card float-lg-end">
                                                <div class="filter-header">
                                                    <a role="button" tabIndex="0" class="sorts-list">
                                                        Most Recent
                                                    </a>
                                                </div>
                                                <div id="categories" class="collapse-body" style="display: none;">
                                                    <div class="form-group search-group">
                                                        <span class="search-icon"><i class="feather-search"></i></span>
                                                        <input type="text" class="form-control"
                                                            placeholder="Search Category">
                                                    </div>
                                                    <ul class="checkbox-list categories-lists">
                                                        <li class="active">
                                                            <label class="custom_check">
                                                                <span class="checked-title"> Recent</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="custom_check">
                                                                <span class="checked-title">Oldest </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Total Ratings -->
                            <div class="total-rating align-items-center">
                                <div class="total-review">
                                    @php
                                    $total = $story->comments->count();
                                    $starCounts = [
                                    5 => $story->comments->where('rating', 5)->count(),
                                    4 => $story->comments->where('rating', 4)->count(),
                                    3 => $story->comments->where('rating', 3)->count(),
                                    2 => $story->comments->where('rating', 2)->count(),
                                    1 => $story->comments->where('rating', 1)->count(),
                                    ];
                                    $average = $total ? number_format($story->comments->avg('rating'), 1) : 0;
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
                            <!-- Total Ratings -->

                            <ul class="review-lists home-reviews">
                                @forelse($story->comments as $comment)
                                <li>
                                    <div class="review-wrap">
                                        <div class="review-user-info">
                                            <div class="review-img">
                                                <img src="{{ asset('assets/img/user/profile.jpg') }}"
                                                    alt="img" />
                                            </div>
                                            <div class="reviewer-info">
                                                <div class="reviewer-loc">
                                                    <h6><a role="button" tabindex="0">{{ $comment->name }}</a>
                                                    </h6>
                                                </div>
                                                <div class="reviewer-rating">
                                                    <div class="star-rate">
                                                        <span class="ratings">
                                                            @for($i = 1; $i <= 5; $i++)
                                                                <i class="fa-solid fa-star {{ $i <= $comment->rating ? 'filled' : '' }}"></i>
                                                                @endfor
                                                        </span>
                                                        <span class="rating-count">{{ $comment->rating }} </span>
                                                    </div>
                                                </div>
                                                <div class="reviewer-time">
                                                    <p>{{ \Carbon\Carbon::parse($comment->created_at)->diffForHumans() }}
                                                    </p>
                                                    <p>{{ $comment->created_at->format('d M, Y') }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>
                                                {{ $comment->comment }}
                                            </p>
                                            <a role="button" tabindex="0" class="reply-btn bg-light">
                                                <i class="feather-corner-up-left"></i> Reply
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                @empty
                                <li>No reviews yet.</li>
                                @endforelse

                            </ul>

                        </div>
                        <!-- /Review Lists -->

                        <!-- Review Tags -->
                        <div class="login-card">
                            <form action="{{ route('story.comment.store') }}" method="POST">
                                @csrf
                                <input type="hidden" name="story_id" value="{{ $story->id }}">

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
                        <!-- /Review Tags -->
                    </div>
                </div>
            </div>
            <!-- /Service Details -->

            <!-- Talent Profile Sidebar -->
            <div class="col-lg-4 theiaStickySidebar">

                <div class="service-widget member-widget" style="background: var(--white);">
                    <div class="user-details">
                        <div class="user-img users-img">
                            <img src="{{ $story->talent->image ? asset('image/talents/' . $story->talent->image) : asset('/assets/img/user/profile.jpg') }}" alt="img">
                        </div>
                        <div class="user-info">
                            <h5>
                                <span class="me-2">{{ $story->talent->name }} <i class="ti ti-discount-check-filled verify-icon"></i></span>
                                <span class="badge badge-success">
                                    Verified
                                </span>
                            </h5>
                            <p><i class="fa-solid fa-star"></i> {{ number_format($story->talent->feedback->avg('rating'), 1) }}
                                ({{ $story->talent->feedback->count() }} Feedbacks)</p>
                        </div>
                    </div>

                    <div class="about-me new-about">
                        <h6>{{ $story->talent->name }}</h6>
                        <p>
                            Hello, I'm {{ $story->talent->name ?? 'Unnamed Talent' }},
                            a passionate {{ $story->talent->skill ?? 'creative' }} and performer blending
                            {{ $story->talent->category->name ?? 'various disciplines' }}.
                            <span class="more-content">
                                I create immersive experiences that inspire and uplift communities.
                            </span>
                        </p>

                        <a href="{{ route('user.talent.details', $story->talent->id) }}" role="button" tabIndex="0" class="read-more">Read More</a>
                    </div>

                    <div class="member-info member-info-new">
                        <div class="member-list d-flex align-items-center gap mb-3">
                            <i class="ti ti-music"></i>
                            <h6 class="mb-0">
                                Talent Type
                                <span class="pt-2"> {{ $story->talent->category->name }}</span>
                            </h6>
                        </div>
                        <div class="member-list d-flex align-items-center gap mb-3">
                            <i class="ti ti-world"></i>
                            <h6 class="mb-0">
                                Based In
                                <span class="pt-2"> {{ $story->talent->address }}</span>
                            </h6>
                        </div>
                        <div class="member-list d-flex align-items-center gap mb-3">
                            <i class="ti ti-calendar-event"></i>
                            <h6 class="mb-0">
                                Posted:
                                <span class="pt-2">
                                    {{ \Carbon\Carbon::parse($story->created_at)->format('M d, Y') }}</span>
                            </h6>
                        </div>
                        <div class="member-list d-flex align-items-center gap">
                            <i class="ti ti-language"></i>
                            <h6 class="mb-0">
                                Tags
                                <span
                                    class="pt-2">{{ $story->tags }}</span>

                            </h6>
                        </div>
                    </div>

                    <a role="button" tabIndex="0" data-bs-toggle="modal" data-bs-target="#contact_talent"
                        class="btn btn-outline-primary mb-0 w-100">Contact Talent</a>
                </div>

                <div class="service-widget" style="background: var(--white);">
                    <h5 class="">Share this story</h5>
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
            <!-- /Talent Profile Sidebar -->
        </div>

        <!-- Recent Work -->
        <div class="recent-works">
            <div class="row">
                <div class="col-md-12">
                    <div class="title-sec">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h3>Recent Works</h3>
                            </div>
                            <div class="col-md-4">
                                <div class="owl-nav worknav nav-control nav-top"></div>
                            </div>
                        </div>
                    </div>
                    <div class="gigs-slider owl-carousel">
                        @forelse($relatedStories as $related)
                        <div class="gigs-grid">
                            <div class="gigs-img">
                                <div class="img-slider">
                                    <div class="slide-images">
                                        <a
                                            href="{{ route('story.details', $related->slug) }}">
                                            <img src="{{ asset($related->media) }}" class="img-fluid"
                                                alt="{{ $related->title }}">
                                        </a>
                                    </div>
                                </div>

                                <div class="card-overlay-badge">
                                    <span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span>
                                </div>

                                <div class="fav-selection">
                                    <a role="button" tabindex="0" class="video-icon"><i class="feather-video"></i></a>
                                    <a role="button" tabindex="0" class="fav-icon"><i class="feather-heart"></i></a>
                                </div>

                                <div class="user-thumb">
                                    <img src="{{ asset('assets/img/user/user-10.jpg') }}"
                                        alt="img">
                                </div>
                            </div>

                            <div class="gigs-content">
                                <div class="gigs-info">
                                    <span class="badge bg-primary-light">
                                        {{ $related->category->name ?? 'Uncategorized' }}
                                    </span>
                                    <p><i
                                            class="ti ti-map-pin-check"></i>{{ $related->location ?? 'Unknown' }}
                                    </p>
                                </div>

                                <div class="gigs-title">
                                    <h3>
                                        <a
                                            href="{{ route('story.details', $related->slug) }}">
                                            {{ Str::limit($related->title, 60) }}
                                        </a>
                                    </h3>
                                </div>

                                <div class="star-rate">
                                    <span><i class="fa-solid fa-star"></i> 4.2 (65 Reviews)</span>
                                </div>

                                <div class="gigs-card-footer">
                                    <div>
                                        <a role="button" tabindex="0" class="share-icon"><i
                                                class="feather-share-2"></i></a>
                                        <span class="badge">Published
                                            {{ \Carbon\Carbon::parse($related->created_at)->diffForHumans() }}</span>
                                    </div>
                                    <h5>${{ $related->price ?? 'N/A' }}</h5>
                                </div>
                            </div>
                        </div>
                        @empty
                        <p>No related stories found.</p>
                        @endforelse

                    </div>

                </div>
            </div>
        </div>
        <!-- /Recent Work -->

    </div>
    <!-- /Content -->
</div>
@endsection