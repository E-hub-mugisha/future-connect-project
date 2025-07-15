@extends('layouts.guest')
@section('content')

<div class="breadcrumb-bar breadcrumb-bar-info">

    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('user.home') }}">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Stories</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title mb-0">
                    Inspiring Talents stories on <span class="text-primary">{{ $categoryName }}</span>
                </h2>
            </div>
        </div>
    </div>
</div>

<div class="page-content">
    <div class="container">

        <div class="section-header-two text-center" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Our {{ $categoryName }} stories<span
                    class="title-bg2"></span></h2>
            <p>Unlock a world of opportunities and take control of your future</p>
        </div>
        <div class="row">
            <div class="trend-section">
                @if($stories->count() > 0)
                @foreach($stories as $story)
                <div class="col-xl-4 col-md-4">
                    <div class="gigs-grid">
                        <div class="gigs-img">
                            <div class="img-slider owl-carousel">
                                <div class="slide-images">
                                    <a href="{{ url('story-details/'.$story->slug) }}">
                                        <img src="{{ $story->thumbnail ? asset($story->thumbnail) : asset('assets/img/user/profile.jpg') }}" class="img-fluid" alt="{{ $story->title }}" style="height: 240px; object-fit: cover;">
                                    </a>
                                </div>
                            </div>

                            <div class="card-overlay-badge">
                                @if($story->status == 'approved')
                                <a role="button" tabindex="0">
                                    <span class="badge bg-success">
                                        <i class="fa-solid fa-bolt"></i> approved
                                    </span>
                                </a>
                                @elseif($story->status == 'pending')
                                <a role="button" tabindex="0">
                                    <span class="badge bg-warning">
                                        <i class="feather-star"></i> pending
                                    </span>
                                </a>
                                @endif
                            </div>
                        </div>

                        <div class="gigs-content">
                            <div class="gigs-info">
                                <div>
                                    <span class="badge bg-light">{{ $story->category->name }}</span>
                                    @if($story->tags)
                                    <span class="ms-2">+{{ count(explode(',', $story->tags)) }}</span>
                                    @endif
                                </div>
                            </div>

                            <div class="gigs-title">
                                <h5>
                                    <a href="{{ url('story-details/'.$story->slug) }}">
                                        {{ \Illuminate\Support\Str::limit($story->title, 60) }}
                                    </a>
                                </h5>
                            </div>

                            <div class="gigs-card-footer">
                                <div class="d-flex align-items-center gigs-left-text">
                                    <a role="button" tabindex="0" class="avatar avatar-sm flex-shrink-0">
                                        <img src="{{ asset('assets/img/user/profile.jpg') }}" class="rounded-circle me-2" width="40" height="40" alt="img">
                                    </a>
                                    <div class="ms-2">
                                        <h6 class="mb-0">
                                            <a role="button" tabindex="0">{{ $story->talent->name }}</a>
                                        </h6>
                                        <p class="mb-0">Posted: {{ \Carbon\Carbon::parse($story->created_at)->format('M d, Y') }}</p>
                                    </div>
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

@endsection