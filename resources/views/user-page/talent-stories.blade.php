@extends('layouts.guest')
@section('content')

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

        <div class="section-header-two text-center" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>{{ $talent->name }}'s stories<span
                    class="title-bg2"></span></h2>
            <p>Unlock a world of opportunities and take control of your future</p>
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
                            @forelse($talent->stories as $story)
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
                            @empty
                            <p>No stories available for this talent.</p>
                            @endforelse

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection