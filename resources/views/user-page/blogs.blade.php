@extends('layouts.guest')
@section('title', 'News & Insights')
@section('content')

@php
// Categories for the filter sidebar. Adjust the relation/count if your
// Category model names things differently.
$tbCategories = \App\Models\Category::withCount('blogs')->orderBy('name')->get();
$tbRecent = \App\Models\Blog::where('is_published', true)->latest()->take(4)->get();
$tbActiveCat = request('category');
$tbSearch = request('search');
$tbSort = request('sort', 'latest');
@endphp



<div class="tb-blog-page">

    <!-- Breadcrumb -->
    <div class="tb-breadcrumb">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="{{ route('user.home') }}">Home</a>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">News & Insights</li>
                        </ol>
                    </nav>
                    <h2 class="tb-breadcrumb-title">News & Insights</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="tb-page-content">
        <div class="container">

            <button type="button" class="tb-filter-toggle" id="tbFilterToggle">
                <i class="feather-sliders"></i> Filters
            </button>

            <div class="tb-content-row">

                <!-- Sidebar / Filters -->
                <aside class="tb-sidebar">
                    <div class="tb-sidebar-body" id="tbSidebarBody">

                        <!-- Search -->
                        <div class="tb-filter-card">
                            <h6 class="tb-filter-title">Search</h6>
                            <form class="tb-search-form" action="{{ url()->current() }}" method="GET">
                                @if($tbActiveCat)
                                <input type="hidden" name="category" value="{{ $tbActiveCat }}">
                                @endif
                                <input type="text" name="search" value="{{ $tbSearch }}" placeholder="Search articles...">
                                <button type="submit" aria-label="Search"><i class="feather-search"></i></button>
                            </form>
                        </div>

                        <!-- Categories -->
                        <div class="tb-filter-card">
                            <h6 class="tb-filter-title">Categories</h6>
                            <ul class="tb-cat-list">
                                <li>
                                    <a href="{{ url()->current() }}{{ $tbSearch ? '?search='.urlencode($tbSearch) : '' }}"
                                        class="{{ !$tbActiveCat ? 'active' : '' }}">
                                        All Posts
                                    </a>
                                </li>
                                @foreach($tbCategories as $cat)
                                <li>
                                    <a href="{{ url()->current() }}?category={{ $cat->slug }}{{ $tbSearch ? '&search='.urlencode($tbSearch) : '' }}"
                                        class="{{ $tbActiveCat === $cat->slug ? 'active' : '' }}">
                                        {{ $cat->name }}
                                        <span class="tb-count">{{ $cat->blogs_count ?? 0 }}</span>
                                    </a>
                                </li>
                                @endforeach
                            </ul>
                            @if($tbActiveCat || $tbSearch)
                            <a href="{{ url()->current() }}" class="tb-clear-filters">
                                <i class="feather-x"></i> Clear filters
                            </a>
                            @endif
                        </div>

                        <!-- Recent posts -->
                        @if($tbRecent->count())
                        <div class="tb-filter-card">
                            <h6 class="tb-filter-title">Recent Posts</h6>
                            <ul class="tb-recent-list">
                                @foreach($tbRecent as $r)
                                <li class="tb-recent-item">
                                    <div class="tb-recent-thumb">
                                        <img src="{{ asset('storage/' . $r->image) }}" alt="{{ $r->title }}">
                                    </div>
                                    <div class="tb-recent-info">
                                        <a href="{{ route('user.blog.details', $r->slug) }}">{{ $r->title }}</a>
                                        <small>{{ $r->created_at->format('M d, Y') }}</small>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                        @endif

                    </div>
                </aside>
                <!-- /Sidebar -->

                <!-- Blogs -->
                <div class="tb-main">

                    <div class="tb-results-head">
                        <div class="tb-results-count">
                            Showing <strong>{{ $blogs->count() }}</strong> article{{ $blogs->count() === 1 ? '' : 's' }}
                            @if($tbActiveCat) in <strong>{{ optional($tbCategories->firstWhere('slug', $tbActiveCat))->name ?? $tbActiveCat }}</strong> @endif
                            @if($tbSearch) for “<strong>{{ $tbSearch }}</strong>” @endif
                        </div>
                        <form class="tb-sort-wrap" action="{{ url()->current() }}" method="GET" id="tbSortForm">
                            @if($tbActiveCat)<input type="hidden" name="category" value="{{ $tbActiveCat }}">@endif
                            @if($tbSearch)<input type="hidden" name="search" value="{{ $tbSearch }}">@endif
                            <label for="tbSort">Sort by</label>
                            <select class="tb-select" name="sort" id="tbSort" onchange="document.getElementById('tbSortForm').submit()">
                                <option value="latest" {{ $tbSort === 'latest' ? 'selected' : '' }}>Latest</option>
                                <option value="oldest" {{ $tbSort === 'oldest' ? 'selected' : '' }}>Oldest</option>
                                <option value="popular" {{ $tbSort === 'popular' ? 'selected' : '' }}>Most Popular</option>
                            </select>
                        </form>
                    </div>

                    @if($blogs->count())
                    <div class="tb-grid-row">
                        @foreach ($blogs as $blog)
                        <div class="tb-card">
                            <div class="tb-card-img">
                                <a href="{{ route('user.blog.details', $blog->slug) }}" tabindex="0" aria-label="Read blog: {{ $blog->title }}">
                                    <img src="{{ asset('storage/' . $blog->image) }}" alt="{{ $blog->title }}">
                                </a>
                                <a href="{{ url()->current() }}?category={{ $blog->category->slug ?? '' }}" class="tb-card-cat">
                                    {{ $blog->category->name ?? 'Uncategorized' }}
                                </a>
                                <a role="button" tabindex="0" class="tb-card-fav" aria-pressed="false" aria-label="Add to favorites">
                                    <i class="feather-heart"></i>
                                </a>
                            </div>

                            <div class="tb-card-body">
                                <h3 class="tb-card-title">
                                    <a href="{{ route('user.blog.details', $blog->slug) }}" tabindex="0" aria-label="Read full blog: {{ $blog->title }}">
                                        {{ $blog->title }}
                                    </a>
                                </h3>
                                <p class="tb-card-excerpt">
                                    {{ Str::limit(strip_tags($blog->content), 90, '...') }}
                                </p>

                                <div class="tb-card-footer">
                                    <div class="tb-card-author">
                                        <a href="#" tabindex="0" aria-label="Author profile: {{ $blog->author->name }}">
                                            <img src="{{ asset('storage/' . ($blog->author->profile_image ?? 'user/default.jpg')) }}" alt="{{ $blog->author->name }}">
                                        </a>
                                        <div>
                                            <a href="#" tabindex="0">{{ $blog->author->name }}</a>
                                            <small>{{ $blog->created_at->format('M d, Y') }}</small>
                                        </div>
                                    </div>
                                    <a href="{{ route('user.blog.details', $blog->slug) }}" class="tb-card-arrow" aria-label="Read more">
                                        <i class="feather-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>

                    <div class="tb-load-more">
                        <a role="button" tabindex="0" class="tb-load-more-btn">
                            Load More <i class="feather-arrow-down"></i>
                        </a>
                    </div>
                    @else
                    <div class="tb-empty">
                        <i class="feather-file-text"></i>
                        <h5>No articles found</h5>
                        <p>Try adjusting your search or filters.</p>
                    </div>
                    @endif

                </div>
                <!-- /Blogs -->

            </div>
        </div>
    </div>
    <!-- /Page Content -->

</div>

<script>
    (function() {
        const toggle = document.getElementById('tbFilterToggle');
        const body = document.getElementById('tbSidebarBody');
        toggle && toggle.addEventListener('click', function() {
            body.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    })();
</script>

@endsection