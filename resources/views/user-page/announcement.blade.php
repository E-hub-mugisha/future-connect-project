@extends('layouts.guest')
@section('title', 'Announcements')
@section('content')

<style>
    .talent-story-info {
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
        margin-bottom: 1.5rem;

    }
</style>

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

<div class="container">
    <div class="breadcrumb-bar mt-4 breadcrumb-bar-info postLists">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Announcements</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title mb-0">
                    Announcements <span class="text-primary"></span>
                </h2>
            </div>
        </div>
    </div>
</div>

<div class="page-content content">
    <div class="container">
        <div class="row">
            @foreach($announcements as $ann)
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="testimonial-slider-card postLists">
                    <div class="testimonial-item">
                        <div class="testimonial-icon"><i class="ti ti-bell"></i></div>
                        <h5 class="mb-2">{{ $ann->title }}</h5>
                        <p class="mb-3">
                            {{ \Illuminate\Support\Str::limit($ann->content, 100, '...') }}
                        </p>
                        <div class="testimonial-review d-flex align-items-center justify-content-between">
                            <div class="testimonial-user p-0">
                                <img src="{{ asset('assets/img/user/admin.jpg') }}"
                                    alt="img" />
                                <div class="testimonial-info">
                                    <h6>Product Team</h6>
                                    <p>{{ \Carbon\Carbon::parse($ann->created_at)->diffForHumans() }}</p>
                                </div>
                            </div>
                            <a href="{{ route('user.announcement.details', $ann->id ) }}" class="slide-line-btn">
                                <i class="feather-arrow-right"></i>Read More
                                <span class="slide-line"></span>
                                <span class="slide-line"></span>
                                <span class="slide-line"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach

        </div>
    </div>
</div>
@endsection