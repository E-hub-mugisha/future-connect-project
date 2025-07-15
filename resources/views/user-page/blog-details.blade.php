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
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="blog.html">Blog</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Blog Details</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">
                    {{ $blog->title }}
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
        <div class="row">

            <!-- Blog Details -->
            <div class="col-lg-10 mx-auto">
                <div class="blog-details">
                    <div class="blog-detail-img">
                        <img src="{{ asset('assets/img/blog/blog-large-01.jpg') }}" class="img-fluid" alt="img">
                    </div>
                    <div class="blog-content border-bottom d-flex align-items-center justify-content-between pb-4 mb-4">
                        <div class="user-info">
                            <a role="button" tabIndex="0"><img src="{{ asset('assets/img/user/user-06.jpg') }}" alt="img"></a>
                            <div class="d-flex align-items-center">
                                <p class="me-3"><a role="button" tabIndex="0">{{ $blog->author->name }}</a></p>
                                <span class="d-flex align-items-center me-3"><i class="feather-calendar me-1"></i>{{ $blog->created_at->format('M d, Y') }}</span>
                                <span class="d-flex align-items-center"><i class="feather-message-square me-1"></i>10
                                    comments</span>
                            </div>
                        </div>
                        <span class="badge-text me-3">{{ $blog->category->name ?? 'Uncategorized' }}</span>
                    </div>
                    <div class="blog-contents rounded-3 p-4" style="background: var(--white);">
                        <p>
                            {!! $blog->content !!}
                        </p>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <span class="badge-text me-3">Hiring Tips</span>
                        <span class="badge-text me-3">Freelancer Selection</span>
                        <span class="badge-text">Project Management</span>
                    </div>
                    <div class="blog-author" style="background: var(--white);">
                        <h5 class="mb-4">Author</h5>
                        <div class="blog-author-text">
                            <div class="author-img">
                                <img src="{{ asset('assets/img/user/user-06.jpg') }}" class="img-fluid" alt="img">
                            </div>
                            <div class="author-detail">
                                <h6>{{ $blog->author->name }}</h6>
                                <p>I am experienced project manager and consultant with a rich background in digital
                                    project execution and freelance talent acquisition. </p>
                            </div>
                        </div>
                    </div>
                    @php
                    // Get previous post (by ID less than current)
                    $previous = \App\Models\Blog::where('id', '<', $blog->id)
                        ->where('is_published', true)
                        ->orderBy('id', 'desc')
                        ->first();

                        // Get next post (by ID greater than current)
                        $next = \App\Models\Blog::where('id', '>', $blog->id)
                        ->where('is_published', true)
                        ->orderBy('id', 'asc')
                        ->first();
                        @endphp

                        <div class="blog-pagination">
                            <div class="row">
                                <div class="col-sm-6">
                                    @if ($previous)
                                    <div class="page-previous page-link">
                                        <a href="{{ route('user.blog.details', $previous->slug) }}" role="button" tabindex="0">
                                            <i class="feather-chevron-left"></i> Previous Post
                                        </a>
                                        <h6>{{ $previous->title }}</h6>
                                    </div>
                                    @endif
                                </div>
                                <div class="col-sm-6 text-sm-end">
                                    @if ($next)
                                    <div class="page-next page-link">
                                        <a href="{{ route('user.blog.details', $next->slug) }}" role="button" tabindex="0" class="justify-content-sm-end">
                                            Next Post <i class="feather-chevron-right"></i>
                                        </a>
                                        <h6>{{ $next->title }}</h6>
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <!-- Review Lists -->
                        <div class="review-widget">
                            <div class="review-title sort-search-gigs">
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6">
                                        <h5>Comments (10)</h5>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="search-filter-selected">
                                            <div class="form-group mb-0">
                                                <span class="sort-text">Sort By</span>
                                                <select class="select">
                                                    <option>Recommended</option>
                                                    <option>Date</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="review-lists">
                                <li>
                                    <div class="review-wrap">
                                        <div class="review-user-info">
                                            <div class="review-img">
                                                <img src="assets/img/user/profile.jpg" alt="img">
                                            </div>
                                            <div class="reviewer-info">
                                                <div class="reviewer-loc">
                                                    <p><a role="button" tabIndex="0">kadajsalamander</a></p>
                                                </div>
                                                <div class="reviewer-rating">
                                                    <div class="star-rate">
                                                        <span class="ratings">
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                        </span>
                                                        <span class="rating-count">5.0 </span>
                                                    </div>
                                                    <p>2 days ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>Thank you for this informative article! I've had a couple of hit-and-miss
                                                experiences with freelancers in the past, and I realize now that I wasn't
                                                vetting them properly. Your checklist for choosing the
                                                right freelancer is going to be my go-to from now on</p>
                                            <a role="button" tabIndex="0" class="reply-btn"><i
                                                    class="feather-corner-up-left"></i>Reply</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="review-wrap">
                                        <div class="review-user-info">
                                            <div class="review-img">
                                                <img src="assets/img/user/user-11.jpg" alt="img">
                                            </div>
                                            <div class="reviewer-info">
                                                <div class="reviewer-loc">
                                                    <p><a role="button" tabIndex="0">Simon</a></p>
                                                </div>
                                                <div class="reviewer-rating">
                                                    <div class="star-rate">
                                                        <span class="ratings">
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                        </span>
                                                        <span class="rating-count">4.0 </span>
                                                    </div>
                                                    <p>15 days ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>As a freelancer myself, I find this article spot on! It's important for
                                                clients to understand what to look for in a freelancer and how to foster a
                                                good working relationship. The point about mutual respect
                                                and clear communication is key in my experience. Well done</p>
                                            <a role="button" tabIndex="0" class="reply-btn"><i
                                                    class="feather-corner-up-left"></i>Reply</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="review-wrap">
                                        <div class="review-user-info">
                                            <div class="review-img">
                                                <img src="assets/img/user/user-05.jpg" alt="img">
                                            </div>
                                            <div class="reviewer-info">
                                                <div class="reviewer-loc">
                                                    <p><a role="button" tabIndex="0">Andy</a></p>
                                                </div>
                                                <div class="reviewer-rating">
                                                    <div class="star-rate">
                                                        <span class="ratings">
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                        </span>
                                                        <span class="rating-count">4.0 </span>
                                                    </div>
                                                    <p>15 days ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>This is exactly what I needed! As a small business owner, I rely heavily on
                                                freelancers, and sometimes it’s overwhelming. The advice on clear contracts
                                                and understanding a freelancer's niche is invaluable.
                                                Thank you for sharing your expertise!</p>
                                            <a role="button" tabIndex="0" class="reply-btn"><i
                                                    class="feather-corner-up-left"></i>Reply</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="border-bottom-0">
                                    <div class="review-wrap">
                                        <div class="review-user-info">
                                            <div class="review-img">
                                                <img src="assets/img/user/user-06.jpg" alt="img">
                                            </div>
                                            <div class="reviewer-info">
                                                <div class="reviewer-loc">
                                                    <p><a role="button" tabIndex="0">Dane jose</a></p>
                                                </div>
                                                <div class="reviewer-rating">
                                                    <div class="star-rate">
                                                        <span class="ratings">
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                            <i class="fa-solid fa-star filled"></i>
                                                        </span>
                                                        <span class="rating-count">5.0 </span>
                                                    </div>
                                                    <p>1 Months ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>Overall, I highly recommend this freelancer to anyone looking for
                                                high-quality work and exceptional service. They are a true professional and
                                                I will definitely be hiring them again for future projects. Thank
                                                you for your hard work and dedication!</p>
                                            <a role="button" tabIndex="0" class="reply-btn"><i
                                                    class="feather-corner-up-left"></i>Reply</a>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <div class="review-wrap">
                                                <div class="review-user-info">
                                                    <div class="review-img">
                                                        <img src="assets/img/user/user-02.jpg" alt="img">
                                                    </div>
                                                    <div class="reviewer-info">
                                                        <div class="reviewer-loc">
                                                            <p><a role="button" tabIndex="0">Harry</a></p>
                                                        </div>
                                                        <div class="reviewer-rating">
                                                            <span>Author</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="review-content">
                                                    <p>Thank you for your comment and I will try to make a another post on
                                                        that topic.</p>
                                                    <a role="button" tabIndex="0" class="reply-btn"><i
                                                            class="feather-corner-up-left"></i>Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <div class="d-flex align-items-center justify-content-center">
                                <a role="button" tabIndex="0" class="btn btn-dark">Load More</a>
                            </div>
                        </div>
                        <!-- /Review Lists -->

                        <!-- Leave a Comment -->
                        <div class="comment-section" style="background: var(--white);">
                            <h6>Leave a Comment</h6>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-wrap">
                                        <label class="form-label">Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-wrap">
                                        <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                                        <input type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-wrap">
                                        <label class="form-label">Comment</label>
                                        <textarea class="form-control" rows="3" placeholder="Description"></textarea>
                                    </div>
                                    <div class="form-check mb-4">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Save my name & email in this browser for the next time I comment
                                        </label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit a Review</button>
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
<div class="relate-post-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex align-items-center justify-content-center mb-4">
          <h3>Related Posts</h3>
        </div>
        <div class="relate-slider owl-carousel">
          @foreach ($relatedPosts as $post)
            <div class="blog-grid">
              <div class="blog-img position-relative">
                <a href="{{ route('user.blog.details', $post->slug) }}">
                  <img src="{{ asset('assets/img/blog/blog-large-01.jpg') }}" class="img-fluid" alt="{{ $post->title }}">
                </a>
                <div class="fav-selection position-absolute top-2 end-2">
                  <a role="button" tabindex="0" class="fav-icon" aria-label="Add to favorites">
                    <i class="feather-heart"></i>
                  </a>
                </div>
              </div>
              <div class="blog-content p-3">
                <div class="user-head mb-2">
                  <div class="badge-text">
                    <a href="#" 
                       role="button" tabindex="0" 
                       class="badge bg-primary-light text-decoration-none">
                      {{ $post->category->name ?? 'Uncategorized' }}
                    </a>
                  </div>
                </div>
                <div class="blog-title mb-3">
                  <h3>
                    <a href="{{ route('user.blog.details', $post->slug) }}" tabindex="0" class="text-dark text-decoration-none">
                      {{ $post->title }}
                    </a>
                  </h3>
                  <p class="text-muted small">
                    {{ Str::limit(strip_tags($post->content), 100, '...') }}
                  </p>
                </div>
                <div class="blog-content-footer d-flex justify-content-between align-items-center">
                  <div class="user-info d-flex align-items-center">
                    <a href="#" tabindex="0" aria-label="Author profile: {{ $post->author->name }}">
                      <img src="{{ asset('storage/' . ($post->author->profile_image ?? 'user/default.jpg')) }}" 
                           alt="{{ $post->author->name }}" 
                           class="rounded-circle" 
                           width="40" height="40">
                    </a>
                    <div class="d-flex align-items-center ms-2">
                      <p class="me-2 mb-0 small">
                        <a href="#" tabindex="0" class="text-decoration-none">
                          {{ $post->author->name }}
                        </a>
                      </p>
                      <span class="dot me-2"></span>
                      <small class="text-muted">{{ $post->created_at->format('M d, Y') }}</small>
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

<!-- /Related Posts -->
@endsection