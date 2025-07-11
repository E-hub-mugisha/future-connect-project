@extends ('layouts.guest')
@section('content')


<div class="breadcrumb-bar breadcrumb-bar-info">
    <div class="breadcrumb-img">
        <div class="breadcrumb-left">
            <img src="assets/img/bg/banner-bg-03.png" alt="img" />
        </div>
    </div>
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
                    Inspiring Talents stories on <span class="text-primary">Future Connect</span>
                </h2>
            </div>
        </div>
    </div>
</div>

<div class="page-content">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <form action="{{ route('stories.filter') }}" method="GET">
                    <div class="filters-section mb-4">
                        <ul class="filters-wrap">
                            <li>
                                <div class="collapse-card">
                                    <div class="filter-header">
                                        <a role="button" tabIndex="0">
                                            <i class="ti ti-list page input"></i> Categories
                                        </a>
                                    </div>
                                    <div id="categories" class="collapse-body">
                                        <select name="category" class="form-select categories-lists">
                                            <option value="">Select Category</option>
                                            @foreach($categories as $cat)
                                            <option value="{{ $cat->id }}"><span class="checked-title">{{ $cat->name }}</span></option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="collapse-card">
                                    <div class="filter-header">
                                        <div class="input-location">
                                            <input type="text" name="region" class="form-control" placeholder="e.g., Kigali, Nairobi, Lagos">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="collapse-card">
                                    <div class="filter-header">
                                        <div class="input-block border-0">
                                            <input type="text" name="keyword" class="form-control" placeholder="e.g., photography, coding, music">
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>

                        <div class="text-end mt-3">
                            <button type="submit" class="btn btn-primary">Apply Filters</button>
                            <a href="{{ route('stories.filter') }}" class="btn btn-light">Reset</a>
                        </div>
                    </div>
                </form>

                <div class="trend-section">
                    <div class="row">
                        <div class="container">

                            <div class="row" data-aos="fade-up">
                                @foreach($stories as $story)
                                <div class="col-xl-4 col-md-4">
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider owl-carousel">
                                                <div class="slide-images">
                                                    <a href="{{ url('story-details/'.$story->slug) }}">
                                                        <img src="{{ $story->thumbnail ? asset($story->thumbnail) : asset('assets/img/user/profile.jpg') }}" class="img-fluid" alt="{{ $story->title }}">
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="card-overlay-badge">
                                                @if($story->status == 'published')
                                                <a role="button" tabindex="0">
                                                    <span class="badge bg-success">
                                                        <i class="fa-solid fa-bolt"></i> Published
                                                    </span>
                                                </a>
                                                @elseif($story->status == 'draft')
                                                <a role="button" tabindex="0">
                                                    <span class="badge bg-warning">
                                                        <i class="feather-star"></i> Draft
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
                                                        {{ $story->title }}
                                                    </a>
                                                </h5>
                                            </div>

                                            <div class="gigs-card-footer">
                                                <div class="d-flex align-items-center gigs-left-text">
                                                    <a role="button" tabindex="0" class="avatar avatar-sm flex-shrink-0">
                                                        <img src="{{ asset('assets/img/user/profile.jpg') }}" class="img-fluid rounded-pill" alt="img">
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@endsection