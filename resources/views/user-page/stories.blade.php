@extends ('layouts.guest')
@section('content')


<!-- <div class="breadcrumb-bar breadcrumb-bar-info">

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
</div> -->

<style>
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
        margin-bottom: 4.75rem;

    }

    .gigs-grid:hover {
        transform: translateY(-5px);
        transition: all 0.3s ease;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
</style>

<div class="page-content" style="background: #aac2e152;">
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <!-- Category Section -->
                <div class="marketing-section">
                    <div class="marketing-content">
                        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
                            <h2 class="mb-2"><span class="title-bg"></span>Here is the stories of our talents<span
                                    class="title-bg2"></span></h2>
                            <p style="color: #319BF9;">Connect with the next wave of talents, guiding you with fresh perspectives</p>
                        </div>
                    </div>
                </div>
                <!-- /Category Section -->

                <!-- Trending Categories -->
                <div class="trend-section">
                    <div class="row align-items-center">
                        <div class="col-sm-10">
                            <h5>Trending Categories of stories</h5>
                        </div>
                        <div class="col-sm-2 text-sm-end">
                            <div class="owl-nav trend-nav nav-control nav-top"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="trend-items owl-carousel owl-loaded owl-drag">
                                <div class="owl-stage-outer">
                                    <div class="owl-stage" style="transform: translate3d(-1977px, 0px, 0px); transition: 2s; width: 4284px;">
                                        @foreach($categories as $cat)
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">

                                                    <h6><a href="{{ url('/story/category/' . $cat->slug) }}">{{ $cat->name }}</a></h6>
                                                    @if(isset($cat->stories_count))
                                                    <p>{{ $cat->stories_count }} stories</p>
                                                    @else
                                                    <p>0 stories</p>
                                                    @endif
                                                </div>
                                                <a href="{{ url('/story/category/' . $cat->slug) }}"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                                <div class="owl-dots disabled"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Trending Categories -->

            </div>
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
                                    <div class="gigs-grid postLists mb-4">
                                        <div class="gigs-img position-relative">
                                            <a href="{{ url('story-details/'.$story->slug) }}">
                                                <img src="{{ $story->thumbnail ? asset($story->thumbnail) : asset('assets/img/user/profile.jpg') }}"
                                                    class="img-fluid w-100" alt="{{ $story->title }}"
                                                    style="height: 240px; object-fit: cover; transition: transform 0.3s ease;"
                                                    onmouseover="this.style.transform='scale(1.05)'"
                                                    onmouseout="this.style.transform='scale(1)'">
                                            </a>

                                            @if($story->status)
                                            <div class="position-absolute top-0 start-0 m-2">
                                                @if($story->status == 'approved')
                                                <span class="badge bg-success px-3 py-1"><i class="fa-solid fa-bolt"></i> Approved</span>
                                                @elseif($story->status == 'pending')
                                                <span class="badge bg-warning px-3 py-1"><i class="feather-star"></i> Pending</span>
                                                @endif
                                            </div>
                                            @endif
                                        </div>

                                        <div class="gigs-content p-3">
                                            <div class="gigs-info mb-2 d-flex align-items-center">
                                                <span class="badge bg-light text-dark">{{ $story->category->name }}</span>
                                                @if($story->tags)
                                                <small class="text-muted">+{{ count(explode(',', $story->tags)) }} Tags</small>
                                                @endif
                                            </div>

                                            <div class="gigs-title mb-3">
                                                <h5 class="mb-0">
                                                    <a href="{{ url('story-details/'.$story->slug) }}" class="text-dark text-decoration-none">
                                                        {{ \Illuminate\Support\Str::limit($story->title, 60) }}
                                                    </a>
                                                </h5>
                                            </div>

                                            <div class="gigs-card-footer d-flex">
                                                <img src="{{ asset('assets/img/user/profile.jpg') }}"
                                                    class="rounded-circle me-2" width="40" height="40" alt="img">
                                                <div>
                                                    <h6 class="mb-0 fw-semibold">
                                                        <a href="#" class="text-dark text-decoration-none">{{ $story->talent->name }}</a>
                                                    </h6>
                                                    <small class="text-muted">Posted: {{ \Carbon\Carbon::parse($story->created_at)->format('M d, Y') }}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                @endforeach

                                <div class="col-md-12">
                                    <!-- Pagination -->
                                    <div class="pagination" data-aos="fade-up">
                                        @if ($stories->hasPages())
                                        <ul>
                                            {{-- Previous Page Link --}}
                                            @if ($stories->onFirstPage())
                                            <li class="disabled"><span><i class="fa-solid fa-chevron-left"></i></span></li>
                                            @else
                                            <li><a href="{{ $stories->previousPageUrl() }}"><i class="fa-solid fa-chevron-left"></i></a></li>
                                            @endif

                                            {{-- Page Numbers --}}
                                            @foreach ($stories->getUrlRange(1, $stories->lastPage()) as $page => $url)
                                            @if ($page == $stories->currentPage())
                                            <li><a href="javascript:void(0);" class="active">{{ $page }}</a></li>
                                            @else
                                            <li><a href="{{ $url }}">{{ $page }}</a></li>
                                            @endif
                                            @endforeach

                                            {{-- Next Page Link --}}
                                            @if ($stories->hasMorePages())
                                            <li><a href="{{ $stories->nextPageUrl() }}"><i class="fa-solid fa-chevron-right"></i></a></li>
                                            @else
                                            <li class="disabled"><span><i class="fa-solid fa-chevron-right"></i></span></li>
                                            @endif
                                        </ul>
                                        @endif
                                    </div>
                                    <!-- /Pagination -->
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@endsection