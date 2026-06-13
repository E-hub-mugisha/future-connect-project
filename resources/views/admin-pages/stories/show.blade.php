@extends('layouts.app')
@section('title', $story->title)
@section('content')

<style>
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

    :root {
        --bg-deep: #0e1618;
        --bg-card: #131d1f;
        --bg-surface: #1a2628;
        --bg-input: #0f1c1e;
        --accent: #48d597;
        --accent-dim: rgba(0, 166, 103, 0.1);
        --accent-glow: rgba(0, 166, 103, 0.25);
        --text-primary: #e8f0ef;
        --text-secondary: #7a9a96;
        --text-muted: #4a6560;
        --border: rgba(0, 166, 103, 0.12);
        --border-hover: rgba(0, 166, 103, 0.3);
        --danger: #e05757;
        --warning: #e0a230;
        --info: #5a8cff;
        --font-display: 'Sora', sans-serif;
        --font-body: 'DM Sans', sans-serif;
    }

    .show-wrapper {
        background: var(--bg-deep);
        min-height: 100vh;
        padding: 2rem 1.5rem;
        font-family: var(--font-body);
    }

    /* Page Header */
    .page-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1.5rem;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--border);
    }

    .page-header-left h3 {
        font-family: var(--font-display);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 0.2rem;
        letter-spacing: -0.02em;
    }

    .page-header-left p {
        color: var(--text-muted);
        font-size: 0.82rem;
        margin: 0;
    }

    .page-header-actions {
        display: flex;
        gap: 0.6rem;
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    .btn-action {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.5rem 1.1rem;
        border-radius: 10px;
        font-size: 0.8rem;
        font-family: var(--font-body);
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.15s ease;
        border: 1px solid transparent;
        white-space: nowrap;
    }

    .btn-back { background: transparent; border-color: var(--border); color: var(--text-secondary); }
    .btn-back:hover { border-color: var(--border-hover); color: var(--text-primary); }

    .btn-status { background: rgba(224,162,48,0.1); border-color: rgba(224,162,48,0.3); color: var(--warning); }
    .btn-status:hover { background: rgba(224,162,48,0.18); }

    .btn-edit { background: rgba(90,140,255,0.1); border-color: rgba(90,140,255,0.3); color: var(--info); }
    .btn-edit:hover { background: rgba(90,140,255,0.18); }

    .btn-review { background: var(--accent); border-color: var(--accent); color: #fff; box-shadow: 0 0 16px var(--accent-glow); }
    .btn-review:hover { background: #00bf75; transform: translateY(-1px); }

    /* Main Grid */
    .story-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 900px) { .story-grid { grid-template-columns: 1fr; } }

    /* Cards */
    .story-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 6px 30px rgba(0,0,0,0.35);
    }

    /* Thumbnail */
    .thumbnail-wrap {
        width: 100%;
        aspect-ratio: 16/9;
        position: relative;
        overflow: hidden;
        background: #0a1214;
    }

    .thumbnail-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
    }

    .thumbnail-wrap:hover img { transform: scale(1.03); }

    .thumbnail-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(14,22,24,0.85) 0%, transparent 60%);
    }

    /* Info panel */
    .info-panel {
        padding: 1.75rem;
    }

    .story-category-tag {
        display: inline-block;
        padding: 0.2rem 0.75rem;
        background: var(--accent-dim);
        border: 1px solid rgba(0,166,103,0.25);
        border-radius: 20px;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: var(--accent);
        text-transform: uppercase;
        margin-bottom: 0.75rem;
    }

    .story-title {
        font-family: var(--font-display);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.75rem;
        line-height: 1.3;
        letter-spacing: -0.02em;
    }

    /* Rating */
    .rating-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
    }

    .stars {
        display: flex;
        gap: 2px;
    }

    .star-icon {
        color: var(--warning);
        font-size: 0.9rem;
    }

    .star-icon.empty { color: var(--text-muted); }

    .rating-text {
        font-size: 0.8rem;
        color: var(--text-secondary);
    }

    /* Meta list */
    .meta-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 1.25rem;
    }

    .meta-item {}

    .meta-label {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: var(--text-muted);
        margin-bottom: 0.2rem;
        font-weight: 600;
    }

    .meta-value {
        font-size: 0.88rem;
        color: var(--text-primary);
        font-weight: 600;
    }

    .meta-value a {
        color: var(--accent);
        text-decoration: none;
    }

    .meta-value a:hover { text-decoration: underline; }

    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.2rem 0.65rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .status-badge::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    .status-approved { background: rgba(0,166,103,0.12); color: #48d597; }
    .status-approved::before { background: #48d597; box-shadow: 0 0 5px rgba(0,166,103,0.6); }
    .status-pending { background: rgba(224,162,48,0.1); color: #e0a230; }
    .status-pending::before { background: #e0a230; }
    .status-rejected { background: rgba(224,87,87,0.1); color: #e05757; }
    .status-rejected::before { background: #e05757; }
    .status-published { background: rgba(90,140,255,0.1); color: #5a8cff; }
    .status-published::before { background: #5a8cff; }

    .content-excerpt {
        font-size: 0.875rem;
        color: var(--text-secondary);
        line-height: 1.7;
        padding: 1rem;
        background: rgba(0,166,103,0.04);
        border-left: 3px solid var(--accent);
        border-radius: 0 8px 8px 0;
        margin-top: 1rem;
    }

    /* Divider */
    .section-divider {
        height: 1px;
        background: var(--border);
        margin: 1.5rem 0;
    }

    /* Video section */
    .video-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 20px;
        overflow: hidden;
        margin-bottom: 1.5rem;
        box-shadow: 0 6px 30px rgba(0,0,0,0.35);
    }

    .video-card-header {
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    .video-card-header h5 {
        font-family: var(--font-display);
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
    }

    .section-icon {
        color: var(--accent);
        font-size: 1rem;
    }

    .video-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
    }

    @media (max-width: 768px) { .video-grid { grid-template-columns: 1fr; } }

    .video-thumb {
        position: relative;
        aspect-ratio: 16/9;
        background: #0a1214;
    }

    .video-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .video-play-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.4);
        transition: background 0.2s ease;
    }

    .video-thumb:hover .video-play-overlay { background: rgba(0,0,0,0.55); }

    .play-btn {
        width: 56px;
        height: 56px;
        background: var(--accent);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 1.25rem;
        box-shadow: 0 0 0 8px rgba(0,166,103,0.2), 0 0 30px var(--accent-glow);
        transition: all 0.2s ease;
        text-decoration: none;
    }

    .play-btn:hover {
        background: #00bf75;
        transform: scale(1.1);
        color: #fff;
    }

    .video-details {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .video-details h4 {
        font-family: var(--font-display);
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.75rem;
    }

    .video-details p {
        font-size: 0.85rem;
        color: var(--text-secondary);
        line-height: 1.65;
        margin: 0;
    }

    /* Comments */
    .comments-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 6px 30px rgba(0,0,0,0.35);
    }

    .comments-header {
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .comments-header h5 {
        font-family: var(--font-display);
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .comment-count {
        font-size: 0.7rem;
        background: var(--accent-dim);
        color: var(--accent);
        border: 1px solid rgba(0,166,103,0.2);
        border-radius: 20px;
        padding: 0.15rem 0.55rem;
        font-weight: 700;
    }

    .comments-body { padding: 1rem 1.5rem; }

    .comment-item {
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0,166,103,0.07);
        display: flex;
        gap: 1rem;
        align-items: flex-start;
    }

    .comment-item:last-child { border-bottom: none; }

    .comment-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--accent-dim);
        border: 1px solid rgba(0,166,103,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--accent);
        text-transform: uppercase;
        flex-shrink: 0;
    }

    .comment-content { flex: 1; min-width: 0; }

    .comment-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.35rem;
        gap: 0.5rem;
    }

    .comment-author {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-primary);
    }

    .comment-time {
        font-size: 0.75rem;
        color: var(--text-muted);
        white-space: nowrap;
    }

    .comment-text {
        font-size: 0.85rem;
        color: var(--text-secondary);
        line-height: 1.5;
        margin-bottom: 0.5rem;
    }

    .comment-stars {
        display: flex;
        gap: 2px;
    }

    .comment-stars i {
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    .comment-stars i.filled { color: var(--warning); }

    .empty-comments {
        text-align: center;
        padding: 3rem 1rem;
        color: var(--text-muted);
        font-size: 0.85rem;
    }

    .empty-comments i { font-size: 2rem; display: block; margin-bottom: 0.75rem; color: var(--text-muted); }

    /* Modals */
    .modal-content {
        background: #131d1f;
        border: 1px solid var(--border);
        border-radius: 18px;
        overflow: hidden;
        font-family: var(--font-body);
    }

    .modal-header {
        background: rgba(0,166,103,0.05);
        border-bottom: 1px solid var(--border);
        padding: 1.25rem 1.5rem;
    }

    .modal-title {
        font-family: var(--font-display);
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
    }

    .modal-header .btn-close { filter: invert(1) opacity(0.4); }

    .modal-body { padding: 1.5rem; }

    .modal-footer {
        border-top: 1px solid var(--border);
        padding: 1rem 1.5rem;
        gap: 0.5rem;
    }

    /* Modal form controls */
    .modal-label {
        display: block;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-secondary);
        margin-bottom: 0.45rem;
    }

    .modal-input,
    .modal-select,
    .modal-textarea {
        width: 100%;
        background: var(--bg-input);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 0.65rem 0.9rem;
        color: var(--text-primary);
        font-family: var(--font-body);
        font-size: 0.85rem;
        outline: none;
        transition: all 0.15s ease;
        -webkit-appearance: none;
    }

    .modal-input:focus, .modal-select:focus, .modal-textarea:focus {
        border-color: var(--border-focus, rgba(0,166,103,0.5));
        box-shadow: 0 0 0 3px rgba(0,166,103,0.07);
    }

    .modal-select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234a6560' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 0.9rem center;
        padding-right: 2.2rem;
        cursor: pointer;
    }

    .modal-select option { background: #131d1f; }
    .modal-textarea { resize: vertical; min-height: 80px; }
    .modal-mb { margin-bottom: 1rem; }

    .btn-modal-cancel {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text-secondary);
        padding: 0.5rem 1.2rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-family: var(--font-body);
        cursor: pointer;
        transition: all 0.15s ease;
    }

    .btn-modal-cancel:hover { color: var(--text-primary); border-color: var(--border-hover); }

    .btn-modal-success {
        background: var(--accent);
        border: none;
        color: #fff;
        padding: 0.5rem 1.4rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-family: var(--font-body);
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s ease;
        box-shadow: 0 0 14px var(--accent-glow);
    }

    .btn-modal-success:hover { background: #00bf75; }

    .btn-modal-primary {
        background: var(--info);
        border: none;
        color: #fff;
        padding: 0.5rem 1.4rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-family: var(--font-body);
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s ease;
    }

    .btn-modal-primary:hover { background: #4a7aee; }

    /* Tags display */
    .tags-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: 0.3rem;
    }

    .tag-pill {
        display: inline-block;
        padding: 0.15rem 0.55rem;
        background: rgba(90,140,255,0.1);
        border: 1px solid rgba(90,140,255,0.2);
        border-radius: 20px;
        font-size: 0.72rem;
        color: var(--info);
        font-weight: 500;
    }
</style>

<div class="show-wrapper">

    <!-- Header -->
    <div class="page-header">
        <div class="page-header-left">
            <h3>Story Details</h3>
            <p>{{ $story->title }}</p>
        </div>
        <div class="page-header-actions">
            <a href="{{ route('admin.stories.index') }}" class="btn-action btn-back">
                <i class="ti ti-arrow-left"></i> Back
            </a>
            <button class="btn-action btn-status" data-bs-toggle="modal" data-bs-target="#updateStatusModal">
                <i class="ti ti-refresh"></i> Update Status
            </button>
            <a href="{{ route('admin.stories.edit', $story->id) }}" class="btn-action btn-edit">
                <i class="ti ti-pencil"></i> Edit
            </a>
            <button class="btn-action btn-review" data-bs-toggle="modal" data-bs-target="#addReviewModal">
                <i class="ti ti-star"></i> Add Review
            </button>
        </div>
    </div>

    <!-- Main grid -->
    <div class="story-grid">

        <!-- Thumbnail -->
        <div class="story-card">
            <div class="thumbnail-wrap">
                <img src="{{ asset($story->thumbnail) }}" alt="{{ $story->title }}">
                <div class="thumbnail-overlay"></div>
            </div>
        </div>

        <!-- Info -->
        <div class="story-card">
            <div class="info-panel">
                <div class="story-category-tag">{{ $story->category->name }}</div>
                <h2 class="story-title">{{ $story->title }}</h2>

                <div class="rating-row">
                    <div class="stars">
                        @php $avg = $story->comments->avg('rating'); @endphp
                        @for($i = 1; $i <= 5; $i++)
                        <i class="ti {{ $i <= round($avg) ? 'ti-star-filled star-icon' : 'ti-star star-icon empty' }}"></i>
                        @endfor
                    </div>
                    <span class="rating-text">
                        {{ number_format($avg, 1) }} · {{ $story->comments->count() }} reviews
                    </span>
                </div>

                <div class="content-excerpt">
                    {{ Str::limit($story->content, 200) }}
                </div>

                <div class="meta-grid">
                    <div class="meta-item">
                        <div class="meta-label">Author</div>
                        <div class="meta-value">{{ $story->talent->name }}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Phone</div>
                        <div class="meta-value">{{ $story->talent->phone ?? '—' }}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Email</div>
                        <div class="meta-value">
                            <a href="mailto:{{ $story->talent->email }}">{{ $story->talent->email }}</a>
                        </div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Published</div>
                        <div class="meta-value">{{ $story->created_at?->diffForHumans() }}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Status</div>
                        <div class="meta-value">
                            @php $s = strtolower($story->status); @endphp
                            <span class="status-badge status-{{ $s }}">{{ ucfirst($story->status) }}</span>
                        </div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Tags</div>
                        <div class="tags-wrap">
                            @foreach(explode(',', $story->tags ?? '') as $tag)
                                @if(trim($tag))
                                <span class="tag-pill">{{ trim($tag) }}</span>
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Video / Full Content -->
    <div class="video-card">
        <div class="video-card-header">
            <i class="ti ti-player-play section-icon"></i>
            <h5>Story Details of {{ $story->talent->name }}</h5>
        </div>
        <div class="video-grid">
            <div class="video-thumb">
                <img src="{{ asset($story->thumbnail) }}" alt="{{ $story->title }}">
                <div class="video-play-overlay">
                    <a href="{{ $story->media }}" class="play-btn popup-video" target="_blank">
                        <i class="ti ti-player-play-filled"></i>
                    </a>
                </div>
            </div>
            <div class="video-details">
                <h4>Full Story</h4>
                <p>{{ $story->content }}</p>
            </div>
        </div>
    </div>

    <!-- Comments -->
    <div class="comments-card">
        <div class="comments-header">
            <h5>
                <i class="ti ti-message-circle section-icon"></i>
                Story Comments
                <span class="comment-count">{{ $story->comments->count() }}</span>
            </h5>
        </div>
        <div class="comments-body">
            @forelse($story->comments as $comment)
            <div class="comment-item">
                <div class="comment-avatar">{{ substr($comment->name, 0, 1) }}</div>
                <div class="comment-content">
                    <div class="comment-meta">
                        <span class="comment-author">{{ $comment->name }}</span>
                        <span class="comment-time">{{ \Carbon\Carbon::parse($comment->created_at)->diffForHumans() }}</span>
                    </div>
                    <p class="comment-text">{{ $comment->comment }}</p>
                    <div class="comment-stars">
                        @for($i = 1; $i <= 5; $i++)
                        <i class="ti ti-star-filled {{ $i <= $comment->rating ? 'filled' : '' }}"></i>
                        @endfor
                    </div>
                </div>
            </div>
            @empty
            <div class="empty-comments">
                <i class="ti ti-message-off"></i>
                No reviews yet. Be the first to add one.
            </div>
            @endforelse
        </div>
    </div>

</div>

<!-- Update Status Modal -->
<div class="modal fade" id="updateStatusModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><i class="ti ti-refresh me-2" style="color:var(--warning)"></i> Update Story Status</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form action="{{ route('admin.stories.updateStatus', $story->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="modal-body">
                    <div class="modal-mb">
                        <label class="modal-label">Select New Status</label>
                        <select name="status" class="modal-select" required>
                            <option value="pending" {{ $story->status == 'pending' ? 'selected' : '' }}>Pending</option>
                            <option value="approved" {{ $story->status == 'approved' ? 'selected' : '' }}>Approved</option>
                            <option value="rejected" {{ $story->status == 'rejected' ? 'selected' : '' }}>Rejected</option>
                            <option value="published" {{ $story->status == 'published' ? 'selected' : '' }}>Published</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn-modal-success">Update Status</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Add Review Modal -->
<div class="modal fade" id="addReviewModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><i class="ti ti-star me-2" style="color:var(--accent)"></i> Add Review</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form action="{{ route('admin.reviews.store') }}" method="POST">
                @csrf
                <input type="hidden" name="story_id" value="{{ $story->id }}">
                <div class="modal-body">
                    <div class="modal-mb">
                        <label class="modal-label">Your Name</label>
                        <input type="text" name="name" class="modal-input" placeholder="John Doe" required>
                    </div>
                    <div class="modal-mb">
                        <label class="modal-label">Your Email</label>
                        <input type="email" name="email" class="modal-input" placeholder="john@example.com" required>
                    </div>
                    <div class="modal-mb">
                        <label class="modal-label">Rating</label>
                        <select name="rating" class="modal-select" required>
                            <option value="5">⭐⭐⭐⭐⭐ — Excellent (5)</option>
                            <option value="4">⭐⭐⭐⭐ — Good (4)</option>
                            <option value="3">⭐⭐⭐ — Average (3)</option>
                            <option value="2">⭐⭐ — Poor (2)</option>
                            <option value="1">⭐ — Terrible (1)</option>
                        </select>
                    </div>
                    <div class="modal-mb">
                        <label class="modal-label">Comment</label>
                        <textarea name="comment" class="modal-textarea" rows="3" placeholder="Share your thoughts..." required></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn-modal-primary">Submit Review</button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection