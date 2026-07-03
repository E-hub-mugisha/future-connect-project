@extends('layouts.guest')
@section('title', $blog->title)
@section('content')

<style>
:root {
    --tb-bg:        #0e1618;
    --tb-surface:   #141d20;
    --tb-surface2:  #1a2428;
    --tb-green:     #48d597;
    --tb-green-dim: rgba(0,166,103,.14);
    --tb-green-glow:rgba(0,166,103,.28);
    --tb-text:      #e8f0ed;
    --tb-muted:     #7a9a8e;
    --tb-border:    rgba(0,166,103,.16);
    --tb-border-h:  rgba(0,166,103,.38);
    --tb-radius:    14px;
}

.tb-blog-page, .tb-blog-page *, .tb-blog-page *::before, .tb-blog-page *::after { box-sizing: border-box; }
.tb-blog-page { background: var(--tb-bg); font-family: 'DM Sans', sans-serif; color: var(--tb-text); padding-bottom: 20px; }

/* ── Breadcrumb ── */
.tb-breadcrumb {
    background: linear-gradient(145deg, #091315 0%, #0c1e21 65%, #081213 100%);
    border-bottom: 1px solid var(--tb-border);
    padding: 34px 0 28px; position: relative; overflow: hidden;
}
.tb-breadcrumb::before {
    content: ''; position: absolute; inset: 0;
    background-image:
        linear-gradient(rgba(0,166,103,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,166,103,.05) 1px, transparent 1px);
    background-size: 36px 36px; pointer-events: none;
}
.tb-breadcrumb .page-breadcrumb { position: relative; z-index: 1; }
.tb-breadcrumb .breadcrumb { margin-bottom: 10px; }
.tb-breadcrumb .breadcrumb-item a { color: var(--tb-muted); font-size: 13px; text-decoration: none; transition: color .2s; }
.tb-breadcrumb .breadcrumb-item a:hover { color: var(--tb-green); }
.tb-breadcrumb .breadcrumb-item.active,
.tb-breadcrumb .breadcrumb-item[aria-current="page"] { color: var(--tb-green); font-size: 13px; }
.tb-breadcrumb .breadcrumb-item + .breadcrumb-item::before { color: var(--tb-muted); content: "/"; }
.tb-breadcrumb-title {
    position: relative; z-index: 1; font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(22px, 3vw, 32px); letter-spacing: -1px; color: #fff; margin: 0;
    max-width: 900px; line-height: 1.25;
}

.tb-page-content { padding-top: 40px; }

/* ── Article card ── */
.tb-article {
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius);
    overflow: hidden;
}
.tb-article-img { aspect-ratio: 21/9; overflow: hidden; background: var(--tb-surface2); }
.tb-article-img img { width: 100%; height: 100%; object-fit: cover; }
.tb-article-body { padding: 30px 34px 34px; }

.tb-meta-row {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 14px;
    border-bottom: 1px solid var(--tb-border);
    padding-bottom: 22px; margin-bottom: 24px;
}
.tb-meta-user { display: flex; align-items: center; gap: 12px; }
.tb-meta-user img { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 1px solid var(--tb-border); }
.tb-meta-user a { color: #fff; font-weight: 600; font-size: 13.5px; text-decoration: none; }
.tb-meta-user a:hover { color: var(--tb-green); }
.tb-meta-sub { display: flex; align-items: center; gap: 14px; font-size: 12.5px; color: var(--tb-muted); margin-top: 3px; }
.tb-meta-sub span { display: flex; align-items: center; gap: 5px; }
.tb-meta-badge {
    background: var(--tb-green-dim); border: 1px solid var(--tb-border-h);
    color: var(--tb-green); font-size: 11.5px; font-weight: 600;
    padding: 6px 14px; border-radius: 99px;
}

.tb-content { font-size: 15px; line-height: 1.85; color: var(--tb-text); }
.tb-content p { margin-bottom: 1em; }
.tb-content a { color: var(--tb-green); }
.tb-content img { max-width: 100%; border-radius: 10px; }

.tb-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 26px 0 0; }
.tb-tag {
    font-size: 12px; color: var(--tb-muted);
    background: var(--tb-surface2); border: 1px solid var(--tb-border);
    padding: 6px 13px; border-radius: 99px; transition: color .18s, border-color .18s;
}
.tb-tag:hover { color: var(--tb-green); border-color: var(--tb-border-h); }

/* ── Author box ── */
.tb-author-box {
    background: var(--tb-surface); border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius); padding: 26px; margin-top: 24px;
}
.tb-author-box h5 { font-family: 'Syne', sans-serif; font-size: 14px; color: #fff; margin: 0 0 18px; display: flex; align-items: center; gap: 8px; }
.tb-author-box h5::before { content: ''; width: 3px; height: 15px; border-radius: 2px; background: var(--tb-green); display: inline-block; }
.tb-author-flex { display: flex; gap: 18px; align-items: center; }
.tb-author-flex img { width: 68px; height: 68px; border-radius: 14px; object-fit: cover; border: 1px solid var(--tb-border); flex-shrink: 0; }
.tb-author-flex h6 { font-family: 'Syne', sans-serif; color: #fff; font-size: 15px; margin: 0 0 6px; }
.tb-author-flex p { font-size: 13px; color: var(--tb-muted); line-height: 1.6; margin: 0; }

/* ── Prev / next ── */
.tb-pagination-row { display: flex; gap: 16px; margin-top: 24px; }
.tb-page-link {
    flex: 1; background: var(--tb-surface); border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius); padding: 18px 20px; text-decoration: none;
    transition: border-color .2s, transform .2s;
}
.tb-page-link:hover { border-color: var(--tb-border-h); transform: translateY(-2px); }
.tb-page-link.tb-next { text-align: right; }
.tb-page-link .tb-page-eyebrow { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--tb-green); font-weight: 600; margin-bottom: 8px; }
.tb-page-link.tb-next .tb-page-eyebrow { justify-content: flex-end; }
.tb-page-link h6 { color: #fff; font-size: 13.5px; font-weight: 600; margin: 0; line-height: 1.4; }

/* ── Comments ── */
.tb-comments {
    background: var(--tb-surface); border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius); padding: 28px; margin-top: 24px;
}
.tb-comments-head { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 22px; }
.tb-comments-head h5 { font-family: 'Syne', sans-serif; color: #fff; font-size: 16px; margin: 0; }
.tb-sort-inline { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--tb-muted); }
.tb-select {
    background: var(--tb-surface2); border: 1px solid var(--tb-border); color: var(--tb-text);
    border-radius: 8px; padding: 7px 30px 7px 12px; font-size: 12.5px; outline: none; appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='%237a9a8e'/></svg>");
    background-repeat: no-repeat; background-position: right 10px center;
}

.tb-review-list { list-style: none; margin: 0; padding: 0; }
.tb-review { display: flex; gap: 14px; padding: 18px 0; border-bottom: 1px solid var(--tb-border); }
.tb-review:first-child { padding-top: 0; }
.tb-review img { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1px solid var(--tb-border); flex-shrink: 0; }
.tb-review-name { font-size: 13.5px; font-weight: 600; color: #fff; }
.tb-review-meta { display: flex; align-items: center; gap: 10px; font-size: 11.5px; color: var(--tb-muted); margin-top: 2px; }
.tb-stars { color: #f5b942; font-size: 11px; letter-spacing: 1px; }
.tb-review-text { font-size: 13.5px; color: var(--tb-muted); line-height: 1.7; margin: 10px 0 10px; }
.tb-reply-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--tb-green); text-decoration: none; font-weight: 600; }
.tb-reply-btn:hover { text-decoration: underline; }
.tb-review-reply { margin-left: 58px; margin-top: 6px; }
.tb-author-tag { font-size: 10.5px; color: var(--tb-green); background: var(--tb-green-dim); border-radius: 99px; padding: 2px 9px; }

/* ── Comment form ── */
.tb-comment-form { margin-top: 28px; padding-top: 26px; border-top: 1px solid var(--tb-border); }
.tb-comment-form h6 { font-family: 'Syne', sans-serif; color: #fff; font-size: 14px; margin-bottom: 18px; }
.tb-form-group { margin-bottom: 16px; }
.tb-form-group label { display: block; font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .6px; color: var(--tb-muted); margin-bottom: 7px; }
.tb-form-group input, .tb-form-group textarea {
    width: 100%; background: var(--tb-surface2); border: 1px solid var(--tb-border);
    border-radius: 10px; color: var(--tb-text); font-size: 13.5px; padding: 11px 14px;
    outline: none; transition: border-color .2s, background .2s; font-family: 'DM Sans', sans-serif;
}
.tb-form-group input:focus, .tb-form-group textarea:focus { border-color: var(--tb-green); background: rgba(0,166,103,.06); }
.tb-checkbox-row { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
.tb-checkbox-row input { accent-color: var(--tb-green); width: 15px; height: 15px; cursor: pointer; }
.tb-checkbox-row label { font-size: 12.5px; color: var(--tb-muted); cursor: pointer; margin: 0; }
.tb-submit-btn {
    background: var(--tb-green); border: none; color: #fff; font-family: 'Syne', sans-serif;
    font-weight: 700; font-size: 13.5px; padding: 12px 28px; border-radius: 10px;
    cursor: pointer; transition: background .2s, transform .2s;
}
.tb-submit-btn:hover { background: #00c07a; transform: translateY(-2px); }

/* ── Related posts ── */
.tb-related-section { background: var(--tb-bg); padding: 50px 0 60px; border-top: 1px solid var(--tb-border); margin-top: 10px; }
.tb-related-head { text-align: center; margin-bottom: 30px; }
.tb-related-head h3 { font-family: 'Syne', sans-serif; font-weight: 800; color: #fff; font-size: 24px; letter-spacing: -.5px; }
.tb-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.tb-rcard {
    background: var(--tb-surface); border: 1px solid var(--tb-border); border-radius: var(--tb-radius);
    overflow: hidden; transition: transform .25s, box-shadow .25s, border-color .25s;
}
.tb-rcard:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,0,0,.4); border-color: var(--tb-border-h); }
.tb-rcard-img { position: relative; aspect-ratio: 16/10; overflow: hidden; background: var(--tb-surface2); }
.tb-rcard-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.tb-rcard:hover .tb-rcard-img img { transform: scale(1.06); }
.tb-rcard-cat {
    position: absolute; top: 12px; left: 12px; background: rgba(8,15,17,.75); backdrop-filter: blur(6px);
    border: 1px solid var(--tb-border-h); color: var(--tb-green); font-size: 11px; font-weight: 600;
    padding: 5px 12px; border-radius: 99px; text-decoration: none;
}
.tb-rcard-fav {
    position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; border-radius: 8px;
    background: rgba(8,15,17,.75); backdrop-filter: blur(6px); border: 1px solid var(--tb-border);
    color: var(--tb-muted); display: flex; align-items: center; justify-content: center; cursor: pointer;
    transition: color .2s, border-color .2s;
}
.tb-rcard-fav:hover { color: #ff5c7a; border-color: rgba(255,92,122,.4); }
.tb-rcard-body { padding: 18px; }
.tb-rcard-title { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; margin: 0 0 8px; line-height: 1.35; }
.tb-rcard-title a { color: #fff; text-decoration: none; transition: color .18s; }
.tb-rcard-title a:hover { color: var(--tb-green); }
.tb-rcard-excerpt { font-size: 12.5px; color: var(--tb-muted); line-height: 1.6; margin: 0 0 16px; }
.tb-rcard-footer { display: flex; align-items: center; gap: 9px; padding-top: 14px; border-top: 1px solid var(--tb-border); }
.tb-rcard-footer img { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; }
.tb-rcard-footer a { font-size: 11.5px; font-weight: 600; color: var(--tb-text); text-decoration: none; }
.tb-rcard-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--tb-muted); }
.tb-rcard-footer small { font-size: 11px; color: var(--tb-muted); }

/* ── RESPONSIVE ── */
@media (max-width: 991px) {
    .tb-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
    .tb-article-body { padding: 24px 20px 28px; }
    .tb-pagination-row { flex-direction: column; }
    .tb-page-link.tb-next { text-align: left; }
    .tb-page-link.tb-next .tb-page-eyebrow { justify-content: flex-start; }
    .tb-review-reply { margin-left: 0; }
}
@media (max-width: 640px) {
    .tb-related-grid { grid-template-columns: 1fr; }
}
</style>

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