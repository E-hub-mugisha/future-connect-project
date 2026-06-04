@extends('layouts.guest')
@section('title', $announcement->title)
@section('content')

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

    :root {
        --bg:         #0e1618;
        --bg-card:    #121d1f;
        --bg-raised:  #172224;
        --accent:     #00a667;
        --accent-dim: rgba(0,166,103,.13);
        --accent-glow:rgba(0,166,103,.3);
        --border:     rgba(255,255,255,.07);
        --text:       #f0f4f3;
        --muted:      #7a9490;
        --white:      #ffffff;
    }

    *, *::before, *::after { box-sizing: border-box; }
    body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }

    /* ── PAGE LAYOUT ── */
    .ad-wrapper { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }
    .ad-grid { display: grid; grid-template-columns: 1fr 320px; gap: 2rem; align-items: start; }
    @media (max-width: 1024px) { .ad-grid { grid-template-columns: 1fr; } }

    /* ── BREADCRUMB ── */
    .breadcrumb-bar {
        background: linear-gradient(135deg, #0a2e22, #0d3d29);
        border: 1px solid rgba(0,166,103,.2);
        border-radius: 14px; padding: 1.1rem 1.75rem;
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 2rem; flex-wrap: wrap; gap: .75rem;
    }
    .breadcrumb-trail { display: flex; align-items: center; gap: .5rem; font-size: .82rem; }
    .breadcrumb-trail a { color: rgba(255,255,255,.7); text-decoration: none; transition: color .2s; }
    .breadcrumb-trail a:hover { color: var(--accent); }
    .breadcrumb-trail .sep { color: rgba(255,255,255,.3); font-size: .65rem; }
    .breadcrumb-trail .current { color: var(--white); font-weight: 600; }
    .breadcrumb-tag {
        background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
        color: var(--accent); font-size: .72rem; font-weight: 700;
        padding: .25rem .8rem; border-radius: 50px; font-family: 'Syne', sans-serif;
        letter-spacing: .06em; text-transform: uppercase;
    }

    /* ── MAIN CARD ── */
    .ad-main {
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 20px; overflow: hidden;
    }
    .ad-cover {
        position: relative; width: 100%; height: 380px; overflow: hidden;
    }
    .ad-cover img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
    .ad-main:hover .ad-cover img { transform: scale(1.02); }
    .ad-cover-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(to top, var(--bg-card) 0%, rgba(14,22,24,.5) 40%, transparent 70%);
    }
    .ad-cover-status {
        position: absolute; top: 1.25rem; left: 1.25rem;
        display: flex; gap: .5rem;
    }
    .status-badge {
        font-size: .72rem; font-weight: 700; padding: .3rem .85rem; border-radius: 50px;
        font-family: 'Syne', sans-serif; letter-spacing: .05em; text-transform: uppercase;
        border: 1px solid;
    }
    .status-active { background: rgba(0,166,103,.2); color: var(--accent); border-color: rgba(0,166,103,.4); }
    .status-inactive { background: rgba(255,255,255,.1); color: var(--muted); border-color: var(--border); }
    .status-cat { background: rgba(255,255,255,.1); color: var(--white); border-color: rgba(255,255,255,.15); }

    .ad-body { padding: 2.25rem; }

    .ad-meta-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
    .ad-meta-item { display: flex; align-items: center; gap: .4rem; font-size: .8rem; color: var(--muted); }
    .ad-meta-item i { color: var(--accent); font-size: .85rem; }
    .ad-meta-divider { width: 1px; height: 14px; background: var(--border); }

    .ad-title {
        font-family: 'Syne', sans-serif; font-size: clamp(1.5rem, 3vw, 2.2rem);
        font-weight: 800; color: var(--white); line-height: 1.25; margin-bottom: 2rem;
    }

    .ad-content { color: #c8d8d5; font-size: .98rem; line-height: 1.9; }
    .ad-content p { margin-bottom: 1.25rem; }

    /* ── COMMENTS ── */
    .comments-section {
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 20px; padding: 2rem; margin-top: 1.5rem;
    }
    .comments-section h4 {
        font-family: 'Syne', sans-serif; font-weight: 800; color: var(--white);
        font-size: 1.1rem; margin-bottom: 1.75rem;
        display: flex; align-items: center; gap: .6rem;
    }
    .comments-section h4 .count-badge {
        background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
        color: var(--accent); font-size: .72rem; padding: .15rem .65rem; border-radius: 50px;
    }

    .comment-item {
        display: flex; gap: 1rem; padding: 1.25rem 0; border-bottom: 1px solid var(--border);
    }
    .comment-item:last-of-type { border-bottom: none; }
    .comment-avatar { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 2px solid rgba(0,166,103,.2); }
    .comment-body {}
    .comment-header { display: flex; align-items: center; gap: .75rem; margin-bottom: .4rem; flex-wrap: wrap; }
    .comment-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .9rem; color: var(--white); }
    .comment-time { font-size: .75rem; color: var(--muted); }
    .comment-text { color: var(--muted); font-size: .9rem; line-height: 1.7; }

    .no-comments { text-align: center; padding: 2rem; }
    .no-comments i { font-size: 2rem; color: var(--muted); display: block; margin-bottom: .75rem; }
    .no-comments p { color: var(--muted); font-size: .9rem; }

    /* Comment form */
    .comment-form-wrap { margin-top: 1.75rem; border-top: 1px solid var(--border); padding-top: 1.75rem; }
    .comment-form-wrap h5 { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); font-size: .95rem; margin-bottom: 1rem; }
    .comment-form-wrap textarea {
        width: 100%; background: var(--bg-raised); border: 1px solid var(--border);
        border-radius: 12px; color: var(--text); font-family: 'DM Sans', sans-serif;
        font-size: .9rem; padding: .9rem 1.1rem; resize: vertical; outline: none;
        transition: border-color .2s;
    }
    .comment-form-wrap textarea:focus { border-color: var(--accent); }
    .comment-form-wrap textarea::placeholder { color: var(--muted); }
    .btn-submit-comment {
        display: inline-flex; align-items: center; gap: .45rem;
        background: var(--accent); color: var(--white);
        font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem;
        padding: .7rem 1.5rem; border-radius: 10px; border: none;
        cursor: pointer; margin-top: .75rem;
        box-shadow: 0 0 20px var(--accent-glow); transition: all .2s;
    }
    .btn-submit-comment:hover { transform: translateY(-1px); box-shadow: 0 0 30px var(--accent-glow); }
    .login-prompt { color: var(--muted); font-size: .88rem; padding: 1rem 0; }
    .login-prompt a { color: var(--accent); text-decoration: none; font-weight: 600; }
    .login-prompt a:hover { text-decoration: underline; }

    /* ── SIDEBAR ── */
    .sidebar-sticky { position: sticky; top: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem; }

    .sidebar-card {
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 18px; overflow: hidden;
    }
    .sidebar-card-header {
        padding: 1.1rem 1.5rem; border-bottom: 1px solid var(--border);
        display: flex; align-items: center; gap: .6rem;
    }
    .sidebar-card-header h5 { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); font-size: .95rem; margin: 0; }
    .sidebar-card-header i { color: var(--accent); }

    .related-list { padding: .75rem; }
    .related-item {
        display: flex; gap: .85rem; padding: .85rem .75rem;
        border-radius: 12px; text-decoration: none;
        transition: background .2s; align-items: center;
    }
    .related-item:hover { background: var(--bg-raised); }
    .related-thumb { width: 64px; height: 64px; border-radius: 10px; object-fit: cover; flex-shrink: 0; border: 1px solid var(--border); }
    .related-info {}
    .related-title { font-family: 'Syne', sans-serif; font-size: .82rem; font-weight: 700; color: var(--white); line-height: 1.35; margin-bottom: .3rem; display: block; }
    .related-time { font-size: .72rem; color: var(--muted); display: flex; align-items: center; gap: .3rem; }

    /* Author card */
    .author-card-body { padding: 1.5rem; text-align: center; }
    .author-avatar { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(0,166,103,.3); margin: 0 auto .75rem; display: block; }
    .author-name { font-family: 'Syne', sans-serif; font-weight: 800; color: var(--white); font-size: 1rem; margin-bottom: .25rem; }
    .author-role { font-size: .78rem; color: var(--accent); font-weight: 600; margin-bottom: 1rem; }
    .author-divider { height: 1px; background: var(--border); margin: .75rem 0; }
    .author-stat { display: flex; justify-content: center; gap: 2rem; }
    .author-stat-item { text-align: center; }
    .author-stat-item strong { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--white); display: block; }
    .author-stat-item span { font-size: .72rem; color: var(--muted); }
</style>

<div class="ad-wrapper">
    <!-- BREADCRUMB -->
    <div class="breadcrumb-bar">
        <div class="breadcrumb-trail">
            <a href="#">Home</a>
            <span class="sep"><i class="fa-solid fa-chevron-right"></i></span>
            <a href="{{ route('user.announcements') ?? '#' }}">Announcements</a>
            <span class="sep"><i class="fa-solid fa-chevron-right"></i></span>
            <span class="current">{{ \Illuminate\Support\Str::limit($announcement->title, 40, '…') }}</span>
        </div>
        <span class="breadcrumb-tag">{{ $announcement->category->name }}</span>
    </div>

    <div class="ad-grid">
        <!-- MAIN CONTENT -->
        <div>
            <div class="ad-main">
                <!-- Cover Image -->
                <div class="ad-cover">
                    @if($announcement->image)
                        <img src="{{ asset('storage/' . $announcement->image) }}" alt="{{ $announcement->title }}">
                    @else
                        <img src="{{ asset('assets/img/announcement/image.jpg') }}" alt="{{ $announcement->title }}">
                    @endif
                    <div class="ad-cover-overlay"></div>
                    <div class="ad-cover-status">
                        <span class="status-badge {{ $announcement->is_active ? 'status-active' : 'status-inactive' }}">
                            {{ $announcement->is_active ? '● Active' : '○ Inactive' }}
                        </span>
                        <span class="status-badge status-cat">{{ $announcement->category->name }}</span>
                    </div>
                </div>

                <!-- Body -->
                <div class="ad-body">
                    <div class="ad-meta-row">
                        <div class="ad-meta-item"><i class="ti ti-user"></i> {{ $announcement->user->name }}</div>
                        <div class="ad-meta-divider"></div>
                        <div class="ad-meta-item"><i class="ti ti-calendar"></i> {{ $announcement->created_at->format('M d, Y') }}</div>
                        <div class="ad-meta-divider"></div>
                        <div class="ad-meta-item"><i class="ti ti-clock"></i> {{ $announcement->created_at->diffForHumans() }}</div>
                        <div class="ad-meta-divider"></div>
                        <div class="ad-meta-item"><i class="ti ti-message"></i> {{ $announcement->comments->count() }} comments</div>
                    </div>

                    <h1 class="ad-title">{{ $announcement->title }}</h1>

                    <div class="ad-content">
                        {!! nl2br(e($announcement->content)) !!}
                    </div>
                </div>
            </div>

            <!-- COMMENTS -->
            <div class="comments-section">
                <h4>
                    <i class="ti ti-message-circle" style="color:var(--accent)"></i>
                    Comments
                    <span class="count-badge">{{ $announcement->comments->count() }}</span>
                </h4>

                @forelse($announcement->comments as $comment)
                <div class="comment-item">
                    <img src="{{ $comment->user->avatar ?? asset('assets/img/user/profile.jpg') }}" alt="{{ $comment->user->name }}" class="comment-avatar">
                    <div class="comment-body">
                        <div class="comment-header">
                            <span class="comment-name">{{ $comment->user->name }}</span>
                            <span class="comment-time">{{ $comment->created_at->diffForHumans() }}</span>
                        </div>
                        <p class="comment-text">{{ $comment->content }}</p>
                    </div>
                </div>
                @empty
                <div class="no-comments">
                    <i class="ti ti-message-off"></i>
                    <p>No comments yet. Be the first to share your thoughts!</p>
                </div>
                @endforelse

                <!-- Comment Form -->
                <div class="comment-form-wrap">
                    @auth
                    <h5>Leave a Comment</h5>
                    <form action="{{ route('announcement.comment', $announcement->id) }}" method="POST">
                        @csrf
                        <textarea name="content" rows="4" placeholder="Write your thoughts about this announcement..." required></textarea>
                        <button type="submit" class="btn-submit-comment">
                            <i class="feather-send"></i> Submit Comment
                        </button>
                    </form>
                    @else
                    <p class="login-prompt">
                        <i class="ti ti-lock" style="margin-right:.35rem"></i>
                        Please <a href="{{ route('login') }}">sign in</a> to leave a comment.
                    </p>
                    @endauth
                </div>
            </div>
        </div>

        <!-- SIDEBAR -->
        <div class="sidebar-sticky">
            <!-- Author card -->
            <div class="sidebar-card">
                <div class="sidebar-card-header">
                    <i class="ti ti-user-circle"></i>
                    <h5>Posted By</h5>
                </div>
                <div class="author-card-body">
                    <img src="{{ asset('assets/img/user/admin.jpg') }}" alt="Author" class="author-avatar">
                    <div class="author-name">{{ $announcement->user->name }}</div>
                    <div class="author-role">Product Team</div>
                    <div class="author-divider"></div>
                    <div class="author-stat">
                        <div class="author-stat-item">
                            <strong>{{ $relatedAnnouncements->count() + 1 }}</strong>
                            <span>Posts</span>
                        </div>
                        <div class="author-stat-item">
                            <strong>{{ $announcement->comments->count() }}</strong>
                            <span>Comments</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Related -->
            <div class="sidebar-card">
                <div class="sidebar-card-header">
                    <i class="ti ti-bell"></i>
                    <h5>Related Announcements</h5>
                </div>
                <div class="related-list">
                    @forelse($relatedAnnouncements as $related)
                    <a href="{{ route('user.announcement.details', $related->id) }}" class="related-item">
                        @if($related->image)
                            <img src="{{ asset('storage/' . $related->image) }}" alt="{{ $related->title }}" class="related-thumb">
                        @else
                            <img src="{{ asset('assets/img/announcement/image.jpg') }}" alt="Announcement" class="related-thumb">
                        @endif
                        <div class="related-info">
                            <span class="related-title">{{ \Illuminate\Support\Str::limit($related->title, 52, '…') }}</span>
                            <span class="related-time"><i class="ti ti-clock" style="font-size:.65rem"></i> {{ $related->created_at->diffForHumans() }}</span>
                        </div>
                    </a>
                    @empty
                    <div style="padding:1rem 1.5rem;color:var(--muted);font-size:.85rem;text-align:center;">No related announcements.</div>
                    @endforelse
                </div>
            </div>
        </div>
    </div>
</div>

@endsection