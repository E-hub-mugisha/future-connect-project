@extends('layouts.guest')
@section('title', 'Stay Updated with Future Connect - Latest Announcements and News')
@section('content')

<style>
    #tranding {
        /* position: relative; */
        overflow: hidden;
        background: #060f11;
        color: #fff;
        padding: 1rem 0;
        border-radius: 0.1rem;
        border: 1px solid #3d4648;
        margin-top: 2rem;
        box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
        z-index: 1;
        /* height: 22rem; */
    }

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
        border: 1px solid #afafaf;
        border-radius: 3px;
        /* background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4); */
        /* box-shadow: 0 1em 1em #1f2d3d26; */
        /* text-align: center; */
        /* text-shadow: 0 1px #fff; */
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

<div class="container p-4">
    <section id="tranding">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-6">
                    <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                        <div class="banner-head">
                            <h1 class="mb-2">Get latest updates</h1>
                            <p class="d-inline-flex">Stay informed about the latest news and developments.</p>
                            <p class="d-inline-flex">Discover new features, upcoming events, and important announcements.</p>
                        </div>
                        <a href="{{ route('user.talents') }}" class="btn btn-lg btn-primary mb-3 d-inline-flex align-items-center">
                            Explore Updates below
                            <i class="feather-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-img">
                        <div class="banner-img-right">
                            <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" class="img-fluid" alt="img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
                            <a href="{{ route('user.announcement.details', $ann->id ) }}" class="btn btn-lg btn-primary mb-3 d-inline-flex align-items-center">
                                Read More<i class="feather-arrow-right"></i>
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