@extends('layouts.app')
@section('title', $skill->name)
@section('content')

<style>
    :root {
        --bg-deep:       #f0f4f8;
        --bg-card:       #ffffff;
        --bg-surface:    #f8fafc;
        --bg-hover:      #f1f5f9;
        --accent:        #00a667;
        --accent-dim:    rgba(0, 166, 103, 0.10);
        --accent-glow:   rgba(0, 166, 103, 0.25);
        --text-primary:  #0f1c2e;
        --text-secondary:#4a6380;
        --text-muted:    #8ea5be;
        --border:        rgba(15, 28, 46, 0.09);
        --border-accent: rgba(0, 166, 103, 0.28);
        --radius-sm:     6px;
        --radius-md:     10px;
        --radius-lg:     16px;
        --shadow-card:   0 1px 4px rgba(15,28,46,0.07), 0 4px 16px rgba(15,28,46,0.05);
        --shadow-glow:   0 0 18px rgba(0,166,103,0.18);
        --focus-ring:    0 0 0 3px rgba(0, 166, 103, 0.22);
        --transition-fast: 150ms ease;
        --transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    body, .nk-wrap, .nk-content, .container-fluid, .container {
        background-color: var(--bg-deep) !important;
        color: var(--text-primary) !important;
    }

    /* ── Page Header ── */
    .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 28px 0 24px;
        border-bottom: 1px solid var(--border);
        margin-bottom: 28px;
        flex-wrap: wrap;
        gap: 16px;
    }

    .page-header-left { display: flex; align-items: center; gap: 12px; }

    .page-header h2 {
        font-family: 'Sora', 'DM Sans', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        letter-spacing: -0.02em;
        margin: 0;
    }

    .page-header-sub {
        font-size: 0.82rem;
        color: var(--text-muted);
        margin-top: 3px;
        font-weight: 400;
    }

    /* ── Breadcrumb pill ── */
    .breadcrumb-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 12px;
        border-radius: 20px;
        background: var(--accent-dim);
        border: 1px solid var(--border-accent);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--accent);
        text-decoration: none;
        transition: background var(--transition-fast);
    }

    .breadcrumb-pill:hover { background: rgba(0,166,103,0.16); color: var(--accent); }

    /* ── Action buttons ── */
    .btn-back {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 8px 18px; border-radius: var(--radius-sm);
        border: 1px solid #dae2ec; background: var(--bg-card);
        color: var(--text-secondary); font-size: 0.85rem; font-weight: 500;
        text-decoration: none;
        transition: background var(--transition-fast), color var(--transition-fast);
    }
    .btn-back:hover { background: var(--bg-hover); color: var(--text-primary); }

    .btn-edit {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 8px 18px; border-radius: var(--radius-sm);
        background: var(--accent); border: none;
        color: #fff; font-size: 0.85rem; font-weight: 600;
        text-decoration: none;
        transition: background var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
    }
    .btn-edit:hover { background: #008f57; box-shadow: var(--shadow-glow); transform: translateY(-1px); color: #fff; }

    .btn-outline-accent {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 8px 18px; border-radius: var(--radius-sm);
        background: transparent; border: 1px solid var(--accent);
        color: var(--accent); font-size: 0.85rem; font-weight: 600;
        cursor: pointer;
        transition: background var(--transition-fast);
    }
    .btn-outline-accent:hover { background: var(--accent-dim); }

    /* ── Main content card ── */
    .detail-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-card);
        overflow: hidden;
        margin-bottom: 24px;
    }

    /* ── Skill image ── */
    .skill-image-wrap {
        border-radius: var(--radius-lg);
        overflow: hidden;
        border: 1px solid var(--border);
        background: var(--bg-surface);
        aspect-ratio: 4/3;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .skill-image-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform var(--transition-smooth);
    }

    .skill-image-wrap:hover img { transform: scale(1.03); }

    /* ── Category eyebrow ── */
    .skill-category-tag {
        display: inline-flex; align-items: center; gap: 5px;
        font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em;
        text-transform: uppercase; color: var(--accent);
        padding: 4px 10px; border-radius: 20px;
        background: var(--accent-dim); border: 1px solid var(--border-accent);
        margin-bottom: 12px;
    }

    /* ── Skill title ── */
    .skill-title {
        font-family: 'Sora', sans-serif;
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.03em;
        margin: 0 0 12px;
        line-height: 1.25;
    }

    /* ── Star rating ── */
    .rating-row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 16px;
    }

    .stars { display: flex; gap: 3px; }

    .stars i { color: #f59e0b; font-size: 0.95rem; }
    .stars i.half { color: #fcd34d; }

    .rating-label {
        font-size: 0.82rem;
        color: var(--text-muted);
    }

    .rating-score {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }

    /* ── Description ── */
    .skill-description {
        font-size: 0.95rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 24px;
        padding-bottom: 24px;
        border-bottom: 1px solid var(--border);
    }

    /* ── Meta grid ── */
    .meta-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-bottom: 24px;
    }

    .meta-item {}
    .meta-label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; color: var(--text-muted); margin-bottom: 4px; }
    .meta-value { font-size: 0.9rem; font-weight: 600; color: var(--text-primary); }

    /* ── Status & level pills ── */
    .pill-status {
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 10px; border-radius: 20px;
        font-size: 0.75rem; font-weight: 600;
    }
    .pill-status.published { background: var(--accent-dim); color: var(--accent); border: 1px solid var(--border-accent); }
    .pill-status.draft     { background: rgba(245,158,11,0.10); color: #b45309; border: 1px solid rgba(245,158,11,0.25); }
    .pill-status.archived  { background: #f1f5f9; color: var(--text-muted); border: 1px solid var(--border); }

    .pill-level {
        display: inline-block;
        padding: 4px 10px; border-radius: var(--radius-sm);
        font-size: 0.75rem; font-weight: 600;
        background: #eef2f7; color: var(--text-secondary); border: 1px solid var(--border);
    }

    /* ── Tags ── */
    .tags-wrap { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
    .tag-chip {
        padding: 3px 10px; border-radius: 20px;
        font-size: 0.73rem; font-weight: 500;
        background: #eef2f7; color: var(--text-secondary);
        border: 1px solid var(--border);
    }

    /* ── Action buttons row ── */
    .action-row { display: flex; gap: 10px; flex-wrap: wrap; padding-top: 8px; }

    /* ── Divider ── */
    .section-divider {
        border: none;
        border-top: 1px solid var(--border);
        margin: 32px 0;
    }

    /* ── Detail section (below divider) ── */
    .detail-section-title {
        font-family: 'Sora', sans-serif;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 12px;
        letter-spacing: -0.01em;
    }

    .detail-section-body {
        font-size: 0.9rem;
        color: var(--text-secondary);
        line-height: 1.7;
    }

    /* ── Video preview ── */
    .video-preview {
        border-radius: var(--radius-lg);
        overflow: hidden;
        border: 1px solid var(--border);
        position: relative;
        background: var(--bg-surface);
        aspect-ratio: 16/9;
    }

    .video-preview img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
        filter: brightness(0.88);
    }

    .video-play-btn {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(15,28,46,0.18);
        transition: background var(--transition-fast);
        text-decoration: none;
    }

    .video-play-btn:hover { background: rgba(0,166,103,0.25); }

    .play-circle {
        width: 56px; height: 56px;
        border-radius: 50%;
        background: rgba(255,255,255,0.95);
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        font-size: 1.1rem;
        color: var(--accent);
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }

    .video-play-btn:hover .play-circle {
        transform: scale(1.08);
        box-shadow: var(--shadow-glow);
    }

    .play-label {
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255,255,255,0.9);
        border-radius: 20px;
        padding: 4px 14px;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-primary);
        white-space: nowrap;
    }
</style>

<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            <!-- Page Header -->
            <div class="page-header">
                <div>
                    <h2>Skill <span style="color:var(--accent)">Details</span></h2>
                    <p class="page-header-sub">{{ $skill->name }}</p>
                </div>
                <a href="{{ route('admin.skills.index') }}" class="btn-back">
                    <i class="ti ti-arrow-left"></i> Back to Skills
                </a>
            </div>

            <!-- Main Detail Card -->
            <div class="detail-card">
                <div style="padding:28px;">

                    <!-- Top section: image + info -->
                    <div class="row g-4 pb-4" style="border-bottom:1px solid var(--border);">
                        <!-- Image -->
                        <div class="col-lg-5">
                            <div class="skill-image-wrap">
                                <img src="{{ asset($skill->image) }}" alt="{{ $skill->name }}">
                            </div>
                        </div>

                        <!-- Info -->
                        <div class="col-lg-7">
                            <div class="skill-category-tag">
                                <i class="ti ti-folder" style="font-size:0.75rem;"></i>
                                {{ $skill->category->name }}
                            </div>

                            <h1 class="skill-title">{{ $skill->name }}</h1>

                            <!-- Rating -->
                            <div class="rating-row">
                                <div class="stars">
                                    <i class="ti ti-star-filled"></i>
                                    <i class="ti ti-star-filled"></i>
                                    <i class="ti ti-star-filled"></i>
                                    <i class="ti ti-star-filled"></i>
                                    <i class="ti ti-star-half-filled half"></i>
                                </div>
                                <span class="rating-score">{{ number_format($skill->reviews->avg('rating'), 1) }}</span>
                                <span class="rating-label">({{ $skill->reviews->count() }} reviews)</span>
                            </div>

                            <!-- Description -->
                            <p class="skill-description">{{ $skill->description }}</p>

                            <!-- Meta grid -->
                            <div class="meta-grid">
                                <div class="meta-item">
                                    <div class="meta-label">Author</div>
                                    <div class="meta-value">{{ $skill->talent->name }}</div>
                                </div>
                                <div class="meta-item">
                                    <div class="meta-label">Contact</div>
                                    <div class="meta-value">{{ $skill->talent->phone }}</div>
                                </div>
                                <div class="meta-item">
                                    <div class="meta-label">Email</div>
                                    <div class="meta-value" style="font-size:0.82rem; word-break:break-all;">{{ $skill->talent->email }}</div>
                                </div>
                                <div class="meta-item">
                                    <div class="meta-label">Date Added</div>
                                    <div class="meta-value">{{ $skill->created_at->format('d M Y') }}</div>
                                </div>
                                <div class="meta-item">
                                    <div class="meta-label">Status</div>
                                    <span class="pill-status {{ strtolower($skill->status) }}">{{ ucfirst($skill->status) }}</span>
                                </div>
                                <div class="meta-item">
                                    <div class="meta-label">Level</div>
                                    <span class="pill-level">{{ $skill->level }}</span>
                                </div>
                            </div>

                            @if($skill->tags)
                            <div class="mb-4">
                                <div class="meta-label" style="margin-bottom:8px;">Tags</div>
                                <div class="tags-wrap">
                                    @foreach(explode(',', $skill->tags) as $tag)
                                    <span class="tag-chip">{{ trim($tag) }}</span>
                                    @endforeach
                                </div>
                            </div>
                            @endif

                            <!-- Action buttons -->
                            <div class="action-row">
                                <button class="btn-outline-accent">
                                    <i class="ti ti-star"></i> Add Review
                                </button>
                                <a href="{{ route('admin.skills.edit', $skill->id) }}" class="btn-edit">
                                    <i class="ti ti-pencil"></i> Edit Skill
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom section: video + extended details -->
                    <div class="row g-4 pt-4 flex-lg-row-reverse">

                        <!-- Video preview -->
                        <div class="col-lg-5">
                            <div class="video-preview">
                                <img src="{{ asset($skill->image) }}" alt="{{ $skill->name }}">
                                <a class="video-play-btn" href="{{ $skill->image }}" target="_blank">
                                    <div class="play-circle">
                                        <i class="ti ti-player-play-filled" style="margin-left:2px;"></i>
                                    </div>
                                </a>
                                <span class="play-label"><i class="ti ti-video me-1"></i> Watch Video</span>
                            </div>
                        </div>

                        <!-- Extended description -->
                        <div class="col-lg-7">
                            <h3 class="detail-section-title">
                                About {{ $skill->talent->name }}'s Skill
                            </h3>
                            <div class="detail-section-body">
                                {{ $skill->description }}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

@endsection