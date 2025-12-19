@extends ('layouts.guest')
@section('title', 'Learning Center and Courses')
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
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 1.5rem;
    }
</style>
<style>
    #tranding {
        position: relative;
        overflow: hidden;
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
        color: #fff;
        padding: 1rem 0;
        border-radius: 2rem;
        margin-top: 2rem;
        box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
        z-index: 1;
        /* height: 22rem; */
    }

    .tranding-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        align-items: center;
        gap: 2rem;
        width: 80%;
        margin: 0 auto;
    }

    .tranding-image-slider {
        width: 100%;
        height: 20rem;
        perspective: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tranding-image-slider .swiper-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tranding-image-slider .swiper-slide {
        height: 15rem;
        width: 15rem;
        transition: transform 0.5s ease, opacity 0.5s ease;
        transform: scale(0.9);
        z-index: 1;
        opacity: 0.6;
    }

    .tranding-image-slider .swiper-slide.swiper-slide-active {
        transform: scale(1.1);
        z-index: 3;
        opacity: 1;
        margin: 0 auto;
    }

    .tranding-image-slider .swiper-slide img {
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
        object-fit: cover;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .tranding-caption-slider {
        width: 80%;
        text-align: left;
    }

    .tranding-caption-slider .swiper-slide {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .tranding-caption-slider .swiper-slide-active {
        opacity: 1;
        transform: translateY(0);
    }

    .tranding-slide-caption p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .tranding-line-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        border: 2px solid #fff;
        border-radius: 30px;
        padding: 0.5rem 1.2rem;
        transition: all 0.3s ease;
    }

    .tranding-line-btn:hover {
        background-color: #fff;
        color: #319BF9;
    }

    .tranding-slider-control {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4 ease;
    }

    .tranding-slider-control .slider-arrow {
        background: var(--white);
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        left: 3%;
        transform: translateX(-42%);
        filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .slider-arrow {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: rgba(255, 255, 255);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .slider-arrow:hover {
        background: #fff;
        color: #319BF9;
    }

    /* Bubbles */
    .bubbles {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 0;
    }

    .bubbles span {
        position: absolute;
        bottom: -150px;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: bubbleUp 15s infinite;
        opacity: 0.6;
    }

    .bubbles span:nth-child(1) {
        left: 10%;
        width: 60px;
        height: 60px;
        animation-duration: 20s;
    }

    .bubbles span:nth-child(2) {
        left: 30%;
        animation-delay: 2s;
    }

    .bubbles span:nth-child(3) {
        left: 50%;
        width: 80px;
        height: 80px;
        animation-duration: 25s;
    }

    .bubbles span:nth-child(4) {
        left: 70%;
        animation-delay: 1s;
        width: 30px;
        height: 30px;
    }

    .bubbles span:nth-child(5) {
        left: 90%;
        animation-duration: 18s;
    }

    @keyframes bubbleUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
        }

        50% {
            opacity: 0.8;
        }

        100% {
            transform: translateY(-1000px) scale(1.3);
            opacity: 0;
        }
    }
</style>

<style>
    /* --- SWITCH-STYLE NAV PILLS --- */
    .nav-pills {
        display: inline-flex;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border-radius: 50px;
        padding: 5px;
        margin-bottom: 2rem;
        justify-content: center;
    }

    .nav-pills .nav-link {
        border-radius: 50px;
        color: #fff;
        font-weight: 500;
        padding: 0.6rem 1.5rem;
        transition: all 0.3s ease;
    }

    .nav-pills .nav-link.active {
        background-color: #0d6efd;
        color: #fff;
        box-shadow: 0 0 10px rgba(13, 110, 253, 0.6);
    }

    .nav-pills .nav-link:not(.active):hover {
        background-color: rgba(255, 255, 255, 0.1);
    }


    .hero-tab {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        padding: 2rem;
        color: #f1f1f1;
    }

    .hero-tab h4 {
        font-weight: 600;
        color: #fff;
    }

    .hero-tab p {
        font-size: 1rem;
        margin: 1rem 0 1.5rem;
    }

    .btn-light {
        border-radius: 50px;
        font-weight: 600;
        padding: 0.6rem 1.5rem;
    }

    #market-section {
        position: relative;
        /* background: #319bf9; */
        color: #f1f1f1;
        padding: 80px 0 56px;
        z-index: 1;
    }

    #market-section .provide-box {
        background: #d4e6f526;
        backdrop-filter: blur(15px) saturate(180%);
    }
</style>
<div class="container p-4">
    <section id="tranding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                        <div class="banner-head mt-4">
                            <h1 class="mb-2 text-white">Your gateway to share skills, opportunities, and grow your skills.</h1>
                            <!-- <p class="d-inline-flex text-white">Your gateway to skills, opportunities, and growth — all in one place.</p> -->
                        </div>
                        <div class="banner-form">
                            <!-- Tabs Navigation -->
                            <ul class="nav nav-pills mb-3" id="heroTabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="marketplace-tab" data-bs-toggle="pill" data-bs-target="#marketplace" type="button" role="tab">Learning</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="opportunities-tab" data-bs-toggle="pill" data-bs-target="#opportunities" type="button" role="tab">Opportunities</button>
                                </li>
                            </ul>

                            <!-- Tabs Content -->
                            <div class="tab-content" id="heroTabsContent">
                                <!-- Skills Marketplace -->
                                <div class="tab-pane hero-tab fade show active" id="marketplace" role="tabpanel">
                                    <h4 class="text-white">Learning center where knowledge meets opportunity</h4>
                                    <p class="text-white">
                                        Explore our courses and categories to enhance your skills and advance your career.
                                    </p>
                                    <a href="#courses" class="btn btn-light">Explore courses</a>
                                </div>

                                <!-- Opportunities Center -->
                                <div class="tab-pane hero-tab fade" id="opportunities" role="tabpanel">
                                    <h4 class="text-white">Unlock New Opportunities</h4>
                                    <p class="text-white">
                                        You can join the platform and share your skills with contribute to the community
                                    </p>
                                    <a href="#opportunities" class="btn btn-light">Join Platform</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="banner-img">
                        <div class="banner-img-right">
                            <img src="assets/img/banner-img.png" class="img-fluid" alt="img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>


<!-- Page Content -->
<div class="page-content">
    <div class="container">
        <div class="title-header">
            <h3>Trending Learning materials<span class="text-primary">
                    categories</span></h3>
            <p>View all learning material and courses offered by skilled people</p>
        </div>
        <div class="trend-section server-grid-slider">
            <div class="service-sliders owl-carousel">
                @foreach($categories as $category)
                <div class="service-box postLists">
                    <div class="service-info">
                        <div class="servive-name">
                            <h5><a href="{{ url('/courses/category/' . $category->slug) }}">{{ $category->name }}</a></h5>
                            <p>({{ $category->courses->count() }} Courses)</p>
                        </div>
                    </div>
                    <a href="{{ url('/courses/category/' . $category->slug) }}"><i class="feather-arrow-up-right"></i></a>
                </div>
                @endforeach
            </div>
        </div>

        <div class="title-section">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="title-header">
                        <h3>Learning center & Courses Browse Listing & More <span class="text-primary">
                                {{ $courses->count() }} Courses </span></h3>
                        <p>View all learning material and courses offered by skilled people</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- Sorting options -->
                    <div class="filters-wrap sort-categories justify-content-lg-end">
                        <div class="collapse-card float-lg-end">
                            <div class="filter-header">
                                <a role="button" tabIndex="0" class="sorts-list"><i class="ti ti-sort-ascending"></i>Sorts by: <span>New Arrivals</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="service-gigs" id="courses">
            <div class="row">
                <div class="filters-section">
                    <div class="listing-tab ">
                        <ul class="nav nav-tabs justify-content-center flex-wrap gap-2" id="courseTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" data-filter="latest" type="button">Latest</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-filter="popular" type="button">Popular</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-filter="featured" type="button">Featured</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-filter="recommended" type="button">Recommended</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="row" id="courseGrid">
                        @forelse($courses as $course)
                        <div class="col-xl-3 col-md-6 course-item" data-category="{{ strtolower($course->tag ?? 'featured') }}">
                            <div class="gigs-grid postLists">
                                <div class="gigs-img">
                                    <div class="img-slider owl-carousel">
                                        <div class="slide-images">
                                            <a href="{{ route('user.courses.show', $course->slug) }}">
                                                <img src="{{ asset('image/thumbnails/'.$course->thumbnail) }}" class="img-fluid" style="height: 240px; object-fit: cover; transition: transform 0.3s ease;" alt="{{ $course->title }}">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="card-overlay-badge">
                                        <a href="{{ route('user.courses', ['category' => $course->category->slug]) }}">
                                            <span class="badge bg-primary"><i class="feather-star"></i>{{ $course->category->name }}</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="gigs-content">
                                    <div class="gigs-info">
                                        <a href="{{ route('user.courses', ['category' => $course->category->slug]) }}" class="badge bg-primary-light">
                                            {{ $course->category->name }}
                                        </a>
                                        <div class="star-rate">
                                            <span>
                                                <i class="fa-solid fa-star"></i>
                                                {{ number_format($course->feedback->avg('rating') ?? 0, 1) }}
                                                ({{ $course->feedback->count() }} feedback)
                                            </span>
                                        </div>
                                    </div>

                                    <div class="gigs-title">
                                        <h3><a href="{{ route('user.courses.show', $course->slug) }}">{{ $course->title }}</a></h3>
                                    </div>

                                    <ul class="gigs-user-info">
                                        <li class="gigs-user">
                                            <img src="{{ $course->talent->image ? asset('image/talents/'.$course->talent->image) : asset('assets/img/user/profile.jpg') }}" alt="img">
                                            <p>{{ $course->talent->name ?? 'Unknown' }}</p>
                                        </li>
                                        <li class="gigs-loc">
                                            <p><i class="ti ti-map-pin-check"></i>{{ $course->talent->region ?? 'N/A' }}</p>
                                        </li>
                                    </ul>

                                    <div class="gigs-card-footer d-flex justify-content-between align-items-center">
                                        <h5>
                                            @if($course->is_free)
                                            Free
                                            @else
                                            ${{ number_format($course->price, 2) }}
                                            @endif
                                        </h5>
                                        <span class="badge">Delivery in 1 day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @empty
                        <p class="text-center">No courses found.</p>
                        @endforelse

                        <div class="col-md-12">
                            {{ $courses->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('#courseTabs .nav-link');
        const items = document.querySelectorAll('.course-item');

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Activate clicked tab
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.dataset.filter;

                items.forEach(item => {
                    const category = item.dataset.category;
                    if (filter === category) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
</script>

@endsection