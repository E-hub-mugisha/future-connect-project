@extends ('layouts.guest')
@section('title', 'Courses')
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

<!-- Page Content -->
<div class="page-content">
    <div class="container">
        <!-- Breadcrumb -->
        <div class="breadcrumb-bar breadcrumb-bar-info postLists">
            <div class="breadcrumb-img">
                <div class="breadcrumb-left"> <img src="{{ asset('assets/img/bg/banner-bg-03.png') }}" alt="img"> </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-12">
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <a href="{{ route('user.home') }}">Home</a> </li>
                                <li class="breadcrumb-item"> <a href="{{ route('user.courses') }}">Courses</a> </li>
                            </ol>
                        </nav>
                        <h2 class="breadcrumb-title mb-0"> Browse Listing & More <span class="text-primary">
                                {{ $courses->count() }} Courses </span> </h2>
                    </div>
                </div>
            </div>
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
                        <h3>Skills & Courses</h3>
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