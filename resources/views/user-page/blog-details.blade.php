@extends('layouts.guest')
@section('title', $blog->title)
@section('content')



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
                            <li class="breadcrumb-item">
                                <a href="{{ route('user.blogs') }}">news & insights</a>
                            </li>
                        </ol>
                    </nav>
                    <h2 class="tb-breadcrumb-title">{{ $blog->title }}</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="tb-page-content">
        <div class="container">
            <div class="row">

                <!-- Blog Details -->
                <div class="col-lg-10 mx-auto">

                    <div class="tb-article">
                        <div class="tb-article-img">
                            <img src="{{ asset('assets/img/blog/blog-large-01.jpg') }}" alt="{{ $blog->title }}">
                        </div>
                        <div class="tb-article-body">

                            <div class="tb-meta-row">
                                <div class="tb-meta-user">
                                    <a role="button" tabindex="0">
                                        <img src="{{ asset('assets/img/user/user-06.jpg') }}" alt="{{ $blog->author->name }}">
                                    </a>
                                    <div>
                                        <a role="button" tabindex="0">{{ $blog->author->name }}</a>
                                        <div class="tb-meta-sub">
                                            <span><i class="feather-calendar"></i>{{ $blog->created_at->format('M d, Y') }}</span>
                                            <span><i class="feather-message-square"></i>10 comments</span>
                                        </div>
                                    </div>
                                </div>
                                <span class="tb-meta-badge">{{ $blog->category->name ?? 'Uncategorized' }}</span>
                            </div>

                            <div class="tb-content">
                                {!! $blog->content !!}
                            </div>

                            <div class="tb-tags">
                                <span class="tb-tag">Hiring Tips</span>
                                <span class="tb-tag">Freelancer Selection</span>
                                <span class="tb-tag">Project Management</span>
                            </div>
                        </div>
                    </div>

                    <!-- Author box -->
                    <div class="tb-author-box">
                        <h5>Author</h5>
                        <div class="tb-author-flex">
                            <img src="{{ asset('assets/img/user/user-06.jpg') }}" alt="{{ $blog->author->name }}">
                            <div>
                                <h6>{{ $blog->author->name }}</h6>
                                <p>I am experienced project manager and consultant with a rich background in digital project execution and freelance talent acquisition.</p>
                            </div>
                        </div>
                    </div>

                    @php
                        $previous = \App\Models\Blog::where('id', '<', $blog->id)
                            ->where('is_published', true)
                            ->orderBy('id', 'desc')->first();

                        $next = \App\Models\Blog::where('id', '>', $blog->id)
                            ->where('is_published', true)
                            ->orderBy('id', 'asc')->first();
                    @endphp

                    <!-- Prev / Next -->
                    @if($previous || $next)
                    <div class="tb-pagination-row">
                        @if($previous)
                        <a href="{{ route('user.blog.details', $previous->slug) }}" class="tb-page-link">
                            <div class="tb-page-eyebrow"><i class="feather-chevron-left"></i> Previous Post</div>
                            <h6>{{ $previous->title }}</h6>
                        </a>
                        @endif
                        @if($next)
                        <a href="{{ route('user.blog.details', $next->slug) }}" class="tb-page-link tb-next">
                            <div class="tb-page-eyebrow">Next Post <i class="feather-chevron-right"></i></div>
                            <h6>{{ $next->title }}</h6>
                        </a>
                        @endif
                    </div>
                    @endif

                    <!-- Comments -->
                    <div class="tb-comments">
                        <div class="tb-comments-head">
                            <h5>Comments (10)</h5>
                            <div class="tb-sort-inline">
                                <span>Sort By</span>
                                <select class="tb-select">
                                    <option>Recommended</option>
                                    <option>Date</option>
                                </select>
                            </div>
                        </div>

                        <ul class="tb-review-list">
                            <li class="tb-review">
                                <img src="{{ asset('assets/img/user/profile.jpg') }}" alt="img">
                                <div style="flex:1;">
                                    <div class="tb-review-name">kadajsalamander</div>
                                    <div class="tb-review-meta">
                                        <span class="tb-stars">★★★★★</span>
                                        <span>5.0</span>
                                        <span>· 2 days ago</span>
                                    </div>
                                    <p class="tb-review-text">Thank you for this informative article! I've had a couple of hit-and-miss experiences with freelancers in the past, and I realize now that I wasn't vetting them properly. Your checklist for choosing the right freelancer is going to be my go-to from now on.</p>
                                    <a role="button" tabindex="0" class="tb-reply-btn"><i class="feather-corner-up-left"></i> Reply</a>
                                </div>
                            </li>
                            <li class="tb-review">
                                <img src="{{ asset('assets/img/user/user-11.jpg') }}" alt="img">
                                <div style="flex:1;">
                                    <div class="tb-review-name">Simon</div>
                                    <div class="tb-review-meta">
                                        <span class="tb-stars">★★★★☆</span>
                                        <span>4.0</span>
                                        <span>· 15 days ago</span>
                                    </div>
                                    <p class="tb-review-text">As a freelancer myself, I find this article spot on! It's important for clients to understand what to look for in a freelancer and how to foster a good working relationship. The point about mutual respect and clear communication is key in my experience. Well done.</p>
                                    <a role="button" tabindex="0" class="tb-reply-btn"><i class="feather-corner-up-left"></i> Reply</a>
                                </div>
                            </li>
                            <li class="tb-review">
                                <img src="{{ asset('assets/img/user/user-05.jpg') }}" alt="img">
                                <div style="flex:1;">
                                    <div class="tb-review-name">Andy</div>
                                    <div class="tb-review-meta">
                                        <span class="tb-stars">★★★★☆</span>
                                        <span>4.0</span>
                                        <span>· 15 days ago</span>
                                    </div>
                                    <p class="tb-review-text">This is exactly what I needed! As a small business owner, I rely heavily on freelancers, and sometimes it's overwhelming. The advice on clear contracts and understanding a freelancer's niche is invaluable. Thank you for sharing your expertise!</p>
                                    <a role="button" tabindex="0" class="tb-reply-btn"><i class="feather-corner-up-left"></i> Reply</a>
                                </div>
                            </li>
                            <li class="tb-review" style="border-bottom:none;">
                                <img src="{{ asset('assets/img/user/user-06.jpg') }}" alt="img">
                                <div style="flex:1;">
                                    <div class="tb-review-name">Dane jose</div>
                                    <div class="tb-review-meta">
                                        <span class="tb-stars">★★★★★</span>
                                        <span>5.0</span>
                                        <span>· 1 month ago</span>
                                    </div>
                                    <p class="tb-review-text">Overall, I highly recommend this freelancer to anyone looking for high-quality work and exceptional service. They are a true professional and I will definitely be hiring them again for future projects. Thank you for your hard work and dedication!</p>
                                    <a role="button" tabindex="0" class="tb-reply-btn"><i class="feather-corner-up-left"></i> Reply</a>

                                    <div class="tb-review-reply">
                                        <div class="tb-review" style="border-bottom:none; padding-bottom:0;">
                                            <img src="{{ asset('assets/img/user/user-02.jpg') }}" alt="img">
                                            <div style="flex:1;">
                                                <div class="tb-review-name">Harry <span class="tb-author-tag">Author</span></div>
                                                <p class="tb-review-text">Thank you for your comment and I will try to make another post on that topic.</p>
                                                <a role="button" tabindex="0" class="tb-reply-btn"><i class="feather-corner-up-left"></i> Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div class="tb-load-more" style="display:flex;justify-content:center;margin-top:26px;">
                            <a role="button" tabindex="0" class="tb-load-more-btn"
                               style="display:inline-flex;align-items:center;gap:8px;background:transparent;border:1.5px solid var(--tb-border-h);color:var(--tb-green);font-family:'Syne',sans-serif;font-weight:700;font-size:13.5px;padding:11px 26px;border-radius:10px;text-decoration:none;cursor:pointer;">
                                Load More <i class="feather-arrow-down"></i>
                            </a>
                        </div>

                        <!-- Leave a Comment -->
                        <div class="tb-comment-form">
                            <h6>Leave a Comment</h6>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="tb-form-group">
                                        <label>Name <span style="color:#e07070;">*</span></label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="tb-form-group">
                                        <label>Email <span style="color:#e07070;">*</span></label>
                                        <input type="email">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="tb-form-group">
                                        <label>Comment</label>
                                        <textarea rows="3" placeholder="Share your thoughts..."></textarea>
                                    </div>
                                    <div class="tb-checkbox-row">
                                        <input type="checkbox" id="tbSaveInfo">
                                        <label for="tbSaveInfo">Save my name & email in this browser for the next time I comment</label>
                                    </div>
                                    <button type="submit" class="tb-submit-btn">Submit a Review</button>
                                </div>
                            </div>
                        </div>
                        <!-- /Leave a Comment -->

                    </div>

                </div>
                <!-- /Blog Details -->

            </div>
        </div>
    </div>
    <!-- /Page Content -->

    <!-- Related Posts -->
    <div class="tb-related-section">
        <div class="container">
            <div class="tb-related-head">
                <h3>Related Posts</h3>
            </div>
            <div class="tb-related-grid">
                @foreach ($relatedPosts as $post)
                <div class="tb-rcard">
                    <div class="tb-rcard-img">
                        <a href="{{ route('user.blog.details', $post->slug) }}">
                            <img src="{{ asset('assets/img/blog/blog-large-01.jpg') }}" alt="{{ $post->title }}">
                        </a>
                        <span class="tb-rcard-cat">{{ $post->category->name ?? 'Uncategorized' }}</span>
                        <a role="button" tabindex="0" class="tb-rcard-fav" aria-label="Add to favorites">
                            <i class="feather-heart"></i>
                        </a>
                    </div>
                    <div class="tb-rcard-body">
                        <h3 class="tb-rcard-title">
                            <a href="{{ route('user.blog.details', $post->slug) }}">{{ $post->title }}</a>
                        </h3>
                        <p class="tb-rcard-excerpt">{{ Str::limit(strip_tags($post->content), 90, '...') }}</p>
                        <div class="tb-rcard-footer">
                            <img src="{{ asset('storage/' . ($post->author->profile_image ?? 'user/default.jpg')) }}" alt="{{ $post->author->name }}">
                            <a href="#">{{ $post->author->name }}</a>
                            <span class="tb-rcard-dot"></span>
                            <small>{{ $post->created_at->format('M d, Y') }}</small>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
    <!-- /Related Posts -->

</div>
@endsection