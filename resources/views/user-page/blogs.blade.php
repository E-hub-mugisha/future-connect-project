@extends('layouts.guest')
@section('content')


<!-- Breadcrumb -->
<div class="breadcrumb-bar">
    
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('user.home') }}">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Blog </li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">
                    Talent Blog
                </h2>
            </div>
        </div>
    </div>
</div>
<!-- /Breadcrumb -->

<!-- Page Content -->
<div class="page-content">
    <div class="container">

        <!-- Blogs -->
        <div class="blog">
            <div class="row">
                @foreach ($blogs as $blog)
                <div class="col-xl-4 col-md-6">
                    <div class="blog-grid card shadow-sm">
                        <div class="blog-img position-relative">
                            <a href="{{ route('user.blog.details', $blog->slug) }}" tabindex="0" aria-label="Read blog: {{ $blog->title }}">
                                <img src="{{ asset('storage/' . $blog->image) }}"
                                    class="img-fluid rounded-top"
                                    alt="{{ $blog->title }}">
                            </a>
                            <div class="fav-selection position-absolute top-2 end-2">
                                <a role="button" tabindex="0" class="fav-icon text-danger" aria-pressed="false" aria-label="Add to favorites">
                                    <i class="feather-heart"></i>
                                </a>
                            </div>
                        </div>

                        <div class="blog-content p-3">
                            <div class="user-head mb-2">
                                <a href="#"
                                    role="button" tabindex="0"
                                    class="badge bg-primary-light text-decoration-none">
                                    {{ $blog->category->name ?? 'Uncategorized' }}
                                </a>
                            </div>

                            <div class="blog-title mb-3">
                                <h3 class="h5">
                                    <a href="{{ route('user.blog.details', $blog->slug) }}"
                                        tabindex="0"
                                        class="text-dark text-decoration-none"
                                        aria-label="Read full blog: {{ $blog->title }}">
                                        {{ $blog->title }}
                                    </a>
                                </h3>
                                <p class="text-muted small mb-0">
                                    {{ Str::limit(strip_tags($blog->content), 80, '...') }}
                                </p>
                            </div>

                            <div class="blog-content-footer d-flex justify-content-between align-items-center">
                                <div class="user-info d-flex align-items-center">
                                    <a href="#"
                                        tabindex="0"
                                        aria-label="Author profile: {{ $blog->author->name }}">
                                        <img src="{{ asset('storage/' . ($blog->author->profile_image ?? 'user/default.jpg')) }}"
                                            alt="{{ $blog->author->name }}"
                                            class="rounded-circle"
                                            width="40" height="40">
                                    </a>
                                    <div class="ms-2">
                                        <p class="mb-0 small">
                                            <a href="#"
                                                tabindex="0"
                                                class="text-decoration-none">
                                                {{ $blog->author->name }}
                                            </a>
                                        </p>
                                        <small class="text-muted">{{ $blog->created_at->format('M d, Y') }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <a role="button" tabIndex="0" class="btn btn-dark">Load More</a>
            </div>
        </div>
        <!-- /Blogs -->

    </div>
</div>
<!-- /Page Content -->

@endsection