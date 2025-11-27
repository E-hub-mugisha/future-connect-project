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

<section class="hero-section">
    <div class="banner-bg-imgs">
        <img src="{{ asset('assets/img/bg/banner-bg-01.png') }}" class="banner-bg-one" alt="img">
        <img src="{{ asset('assets/img/bg/banner-bg-02.png') }}" class="banner-bg-two" alt="img">
        <!-- <img src="{{ asset('assets/img/bg/banner-bg-04.png') }}" class="banner-bg-four" alt="img"> -->
    </div>
    <div class="container p-4">
        <div class="row">
            <div class="col-lg-8">
                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                    <div class="banner-head">
                        <h1 class="mb-2">Learning center where knowledge meets opportunity</h1>
                        <p class="d-inline-flex">Explore our courses and categories to enhance your skills and advance your career.</p>
                    </div>
                    <div class="banner-form">
                        <form action="#">
                            <div class="banner-search-list">
                                <div class="input-block">
                                    <label>Category</label>
                                    <select class="select">
                                        <option data-select2-id="6">Select</option>
                                        <option>Digital Marketing</option>
                                        <option>Writing</option>
                                        <option>Social Media</option>
                                    </select>
                                 </div>
                                <div class="input-block">
                                    <label>Location</label>
                                    <div class="input-locaion">
                                        <input type="text" class="form-control" placeholder="Miami, USA">
                                        <img src="assets/img/icons/map-pin-heart.svg" alt="Icon">
                                    </div>
                                </div>
                                <div class="input-block border-0">
                                    <label>Keyword</label>
                                    <input type="text" class="form-control" placeholder="Need Graphic Designer">
                                </div>
                            </div>
                            <div class="input-block-btn">
                                <button class="btn btn-lg btn-primary d-inline-flex align-items-center" type="submit">
                                    <i class="ti ti-search"></i> Search
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="popular-search">
                        <h5>Popular Searches : </h5>
                        <ul>
                            <li><a href="#">Online Mockup</a></li>
                            <li><a href="#">Carpentering</a></li>
                            <li><a href="#">Event Organiser</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="banner-img">
                    <!-- <div class="banner-img-right">
                        <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" class="img-fluid" alt="img">
                    </div> -->
                    <img src="{{ asset('assets/img/bg/banner-small-bg-01.svg') }}" class="banner-small-bg-one" alt="img">
                    <img src="{{ asset('assets/img/bg/banner-small-bg-02.png') }}" class="banner-small-bg-two" alt="img">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Page Content -->
<div class="page-content">
    <div class="container">

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
                        <h3>Skills & Courses Browse Listing & More <span class="text-primary">
                                {{ $courses->count() }} Courses </span></h3>
                        <p>View all skills and courses offered by talents</p>
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

        <div class="service-gigs">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        @forelse($courses as $course)
                        <div class="col-xl-3 col-md-6">
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

@endsection