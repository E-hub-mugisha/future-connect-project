@extends('layouts.guest')
@section('title', $announcement->title)
@section('content')



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