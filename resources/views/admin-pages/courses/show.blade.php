@extends('layouts.app')

@section('title', $course->title.' — CourseHub')
@section('topbar-title', 'Course Detail')

@section('content')
<style>
    .course-hero {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        margin-bottom: 24px;
    }

    .hero-banner {
        position: relative;
        height: 220px;
        background: linear-gradient(135deg, #0b2030 0%, #0a1e2a 50%, #071820 100%);
        overflow: hidden;
    }

    .hero-banner::before {
        content: '';
        position: absolute;
        top: -40%; left: -20%;
        width: 60%;
        height: 200%;
        background: radial-gradient(ellipse, rgba(45,212,191,.12) 0%, transparent 70%);
        pointer-events: none;
    }

    .hero-banner::after {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: linear-gradient(to top, rgba(11,26,30,.9) 0%, transparent 60%);
    }

    .hero-banner img {
        width: 100%; height: 100%;
        object-fit: cover;
        opacity: .55;
    }

    .hero-banner-placeholder {
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
    }

    .hero-banner-placeholder svg {
        width: 64px; height: 64px;
        color: rgba(45,212,191,.15);
    }

    .hero-body {
        padding: 24px 28px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
    }

    .hero-info { flex: 1; min-width: 0; }

    .hero-tags {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }

    .hero-title {
        font-family: var(--font-head);
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--text);
        line-height: 1.25;
        letter-spacing: -.4px;
        margin-bottom: 10px;
    }

    .hero-meta {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
        font-size: .82rem;
        color: var(--text-dim);
    }

    .hero-meta-item {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .hero-meta-item svg { width: 14px; height: 14px; }

    .hero-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: flex-end;
        flex-shrink: 0;
    }

    /* ── Tabs ── */
    .tabs {
        display: flex;
        gap: 4px;
        border-bottom: 1px solid var(--border);
        margin-bottom: 24px;
        overflow-x: auto;
    }

    .tab-btn {
        padding: 10px 16px;
        font-size: .85rem;
        font-weight: 500;
        color: var(--text-dim);
        cursor: pointer;
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        transition: all .15s;
        white-space: nowrap;
        font-family: var(--font-body);
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .tab-btn .tab-count {
        background: var(--surface2);
        border: 1px solid var(--border);
        border-radius: 20px;
        padding: 1px 7px;
        font-size: .7rem;
        font-family: var(--font-head);
    }

    .tab-btn:hover { color: var(--text); }

    .tab-btn.active {
        color: var(--accent);
        border-bottom-color: var(--accent);
    }

    .tab-btn.active .tab-count {
        background: var(--accent-glow);
        border-color: var(--accent);
        color: var(--accent);
    }

    .tab-panel { display: none; }
    .tab-panel.active { display: block; }

    /* ── Info grid ── */
    .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--border);
        border-radius: var(--radius);
        overflow: hidden;
        border: 1px solid var(--border);
    }

    .info-item {
        background: var(--surface);
        padding: 14px 16px;
    }

    .info-item-label {
        font-size: .72rem;
        text-transform: uppercase;
        letter-spacing: .08em;
        color: var(--text-dim);
        font-family: var(--font-head);
        font-weight: 600;
        margin-bottom: 4px;
    }

    .info-item-val {
        font-size: .9rem;
        color: var(--text);
        font-weight: 500;
    }

    /* ── Lesson list ── */
    .lesson-list { display: flex; flex-direction: column; gap: 8px; }

    .lesson-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: var(--surface2);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        transition: border-color .15s;
    }

    .lesson-item:hover { border-color: var(--muted2); }

    .lesson-num {
        width: 28px; height: 28px;
        border-radius: 6px;
        background: var(--border);
        display: flex; align-items: center; justify-content: center;
        font-size: .75rem;
        font-family: var(--font-head);
        font-weight: 700;
        color: var(--muted2);
        flex-shrink: 0;
    }

    .lesson-title { font-size: .875rem; color: var(--text); flex: 1; }
    .lesson-dur   { font-size: .75rem; color: var(--text-dim); white-space: nowrap; }

    /* ── Enrollment list ── */
    .enroll-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 0;
        border-bottom: 1px solid var(--border);
    }

    .enroll-row:last-child { border-bottom: none; }

    .enroll-avatar {
        width: 34px; height: 34px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--surface2), var(--border));
        display: flex; align-items: center; justify-content: center;
        font-size: .75rem;
        font-family: var(--font-head);
        font-weight: 700;
        color: var(--muted2);
        flex-shrink: 0;
    }

    .enroll-name  { font-size: .875rem; font-weight: 500; color: var(--text); }
    .enroll-date  { font-size: .75rem; color: var(--text-dim); margin-left: auto; }

    /* ── Feedback ── */
    .feedback-item {
        padding: 16px;
        background: var(--surface2);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        margin-bottom: 10px;
    }

    .feedback-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }

    .stars { color: #fbbf24; font-size: .85rem; letter-spacing: 1px; }

    .feedback-text { font-size: .875rem; color: var(--text-dim); line-height: 1.5; }

    /* ── Video embed ── */
    .video-embed {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        border-radius: var(--radius);
        background: var(--surface2);
        border: 1px solid var(--border);
    }

    .video-embed iframe {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        border: none;
    }

    .no-content {
        padding: 40px 20px;
        text-align: center;
        color: var(--text-dim);
        font-size: .875rem;
    }

    .no-content svg {
        width: 32px; height: 32px;
        color: var(--muted);
        margin: 0 auto 10px;
        display: block;
    }
</style>


<!-- Breadcrumb -->
<nav class="breadcrumb">
    <a href="#">Dashboard</a>
    <span class="breadcrumb-sep">›</span>
    <a href="{{ route('courses.index') }}">Courses</a>
    <span class="breadcrumb-sep">›</span>
    <span class="breadcrumb-current">{{ Str::limit($course->title, 40) }}</span>
</nav>

<!-- Course Hero -->
<div class="course-hero">
    <div class="hero-banner">
        @if($course->thumbnail)
            <img src="{{ asset('storage/'.$course->thumbnail) }}" alt="{{ $course->title }}">
        @else
            <div class="hero-banner-placeholder">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>
            </div>
        @endif
    </div>

    <div class="hero-body">
        <div class="hero-info">
            <div class="hero-tags">
                <span class="badge badge-{{ $course->status ?? 'draft' }}">
                    <span class="badge-dot"></span>{{ ucfirst($course->status ?? 'draft') }}
                </span>
                @if($course->level)
                    <span class="badge badge-{{ $course->level }}">{{ ucfirst($course->level) }}</span>
                @endif
                @if($course->is_free)
                    <span class="badge badge-free">Free</span>
                @else
                    <span class="badge badge-paid">${{ number_format($course->price, 2) }}</span>
                @endif
                @if($course->category)
                    <span class="badge" style="background:rgba(61,70,72,.3);color:var(--text-dim)">{{ $course->category->name }}</span>
                @endif
            </div>

            <h1 class="hero-title">{{ $course->title }}</h1>

            <div class="hero-meta">
                <div class="hero-meta-item">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    {{ $course->talent->name ?? 'No Instructor' }}
                </div>
                <div class="hero-meta-item">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    {{ $course->lessons->count() }} {{ Str::plural('lesson', $course->lessons->count()) }}
                </div>
                <div class="hero-meta-item">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {{ $course->enrollments->count() }} enrolled
                </div>
                <div class="hero-meta-item">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    Created {{ $course->created_at->format('M d, Y') }}
                </div>
            </div>
        </div>

        <div class="hero-actions">
            <a href="{{ route('courses.edit', $course) }}" class="btn btn-primary">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                Edit Course
            </a>
            <a href="{{ route('courses.index') }}" class="btn btn-ghost">
                ← All Courses
            </a>
        </div>
    </div>
</div>

<!-- Tabs -->
<div class="tabs">
    <button class="tab-btn active" onclick="switchTab(event,'overview')">Overview</button>
    <button class="tab-btn" onclick="switchTab(event,'lessons')">
        Lessons
        <span class="tab-count">{{ $course->lessons->count() }}</span>
    </button>
    <button class="tab-btn" onclick="switchTab(event,'enrollments')">
        Enrollments
        <span class="tab-count">{{ $course->enrollments->count() }}</span>
    </button>
    <button class="tab-btn" onclick="switchTab(event,'feedback')">
        Feedback
        <span class="tab-count">{{ $course->feedback->count() }}</span>
    </button>
</div>

<!-- Overview Panel -->
<div id="tab-overview" class="tab-panel active">
    <div style="display:grid;grid-template-columns:1fr 320px;gap:24px;align-items:start">
        <div>
            @if($course->description)
            <div class="card mb-4">
                <div class="card-header"><span class="card-title">Description</span></div>
                <div class="card-body">
                    <p style="color:var(--text-dim);font-size:.9rem;line-height:1.7">{{ $course->description }}</p>
                </div>
            </div>
            @endif

            @if($course->video)
            <div class="card">
                <div class="card-header"><span class="card-title">Intro Video</span></div>
                <div class="card-body">
                    <div class="video-embed">
                        @php
                            $videoUrl = $course->video;
                            $embedUrl = $videoUrl;
                            if (preg_match('/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/', $videoUrl, $m)) {
                                $embedUrl = 'https://www.youtube.com/embed/'.$m[1];
                            } elseif (preg_match('/vimeo\.com\/(\d+)/', $videoUrl, $m)) {
                                $embedUrl = 'https://player.vimeo.com/video/'.$m[1];
                            }
                        @endphp
                        <iframe src="{{ $embedUrl }}" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            @endif
        </div>

        <div>
            <div class="card">
                <div class="card-header"><span class="card-title">Course Details</span></div>
                <div class="card-body" style="padding:0">
                    <div class="info-grid" style="border:none;border-radius:0">
                        <div class="info-item">
                            <div class="info-item-label">Status</div>
                            <div class="info-item-val">
                                <span class="badge badge-{{ $course->status ?? 'draft' }}">
                                    <span class="badge-dot"></span>{{ ucfirst($course->status ?? 'draft') }}
                                </span>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-label">Level</div>
                            <div class="info-item-val">
                                @if($course->level)
                                    <span class="badge badge-{{ $course->level }}">{{ ucfirst($course->level) }}</span>
                                @else
                                    <span style="color:var(--text-dim)">—</span>
                                @endif
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-label">Pricing</div>
                            <div class="info-item-val">
                                @if($course->is_free)
                                    <span class="badge badge-free">Free</span>
                                @else
                                    <span style="font-family:var(--font-head);font-weight:700">${{ number_format($course->price, 2) }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-label">Category</div>
                            <div class="info-item-val">{{ $course->category->name ?? '—' }}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-label">Instructor</div>
                            <div class="info-item-val">{{ $course->talent->name ?? '—' }}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-label">Lessons</div>
                            <div class="info-item-val" style="font-family:var(--font-head);font-weight:700">{{ $course->lessons->count() }}</div>
                        </div>
                        <div class="info-item col-span-2" style="grid-column:span 2">
                            <div class="info-item-label">Created</div>
                            <div class="info-item-val">{{ $course->created_at->format('F d, Y \a\t H:i') }}</div>
                        </div>
                        <div class="info-item col-span-2" style="grid-column:span 2">
                            <div class="info-item-label">Last Updated</div>
                            <div class="info-item-val">{{ $course->updated_at->format('F d, Y \a\t H:i') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Lessons Panel -->
<div id="tab-lessons" class="tab-panel">
    <div class="card">
        <div class="card-header">
            <span class="card-title">Lessons ({{ $course->lessons->count() }})</span>
            <a href="#" class="btn btn-primary btn-sm">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                Add Lesson
            </a>
        </div>
        <div class="card-body">
            @if($course->lessons->count())
            <div class="lesson-list">
                @foreach($course->lessons->sortBy('order') as $i => $lesson)
                <div class="lesson-item">
                    <div class="lesson-num">{{ str_pad($i+1, 2, '0', STR_PAD_LEFT) }}</div>
                    <div class="lesson-title">{{ $lesson->title ?? 'Untitled Lesson' }}</div>
                    @if(isset($lesson->duration))
                        <div class="lesson-dur">{{ $lesson->duration }} min</div>
                    @endif
                    <a href="#" class="icon-btn edit" style="width:28px;height:28px" title="Edit lesson">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                    </a>
                </div>
                @endforeach
            </div>
            @else
            <div class="no-content">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>
                No lessons yet. Start by adding the first lesson.
            </div>
            @endif
        </div>
    </div>
</div>

<!-- Enrollments Panel -->
<div id="tab-enrollments" class="tab-panel">
    <div class="card">
        <div class="card-header">
            <span class="card-title">Enrolled Students ({{ $course->enrollments->count() }})</span>
        </div>
        <div class="card-body">
            @if($course->enrollments->count())
                @foreach($course->enrollments as $enrollment)
                <div class="enroll-row">
                    <div class="enroll-avatar">
                        {{ strtoupper(substr($enrollment->user->name ?? 'U', 0, 2)) }}
                    </div>
                    <div>
                        <div class="enroll-name">{{ $enrollment->user->name ?? 'Unknown User' }}</div>
                        <div style="font-size:.75rem;color:var(--text-dim)">{{ $enrollment->user->email ?? '' }}</div>
                    </div>
                    <div class="enroll-date">{{ $enrollment->created_at->format('M d, Y') }}</div>
                </div>
                @endforeach
            @else
            <div class="no-content">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                No students enrolled yet.
            </div>
            @endif
        </div>
    </div>
</div>

<!-- Feedback Panel -->
<div id="tab-feedback" class="tab-panel">
    <div class="card">
        <div class="card-header">
            <span class="card-title">Feedback ({{ $course->feedback->count() }})</span>
        </div>
        <div class="card-body">
            @if($course->feedback->count())
                @foreach($course->feedback as $fb)
                <div class="feedback-item">
                    <div class="feedback-header">
                        <div style="display:flex;align-items:center;gap:10px">
                            <div class="enroll-avatar" style="width:30px;height:30px;font-size:.7rem">
                                {{ strtoupper(substr($fb->user->name ?? 'U', 0, 2)) }}
                            </div>
                            <div>
                                <div style="font-size:.85rem;font-weight:500;color:var(--text)">{{ $fb->user->name ?? 'Anonymous' }}</div>
                                <div style="font-size:.72rem;color:var(--text-dim)">{{ $fb->created_at->format('M d, Y') }}</div>
                            </div>
                        </div>
                        @if(isset($fb->rating))
                            <div class="stars">
                                @for($i=1;$i<=5;$i++){{ $i <= $fb->rating ? '★' : '☆' }}@endfor
                            </div>
                        @endif
                    </div>
                    @if(isset($fb->comment) && $fb->comment)
                        <div class="feedback-text">{{ $fb->comment }}</div>
                    @endif
                </div>
                @endforeach
            @else
            <div class="no-content">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                No feedback submitted yet.
            </div>
            @endif
        </div>
    </div>
</div>

<script>
    function switchTab(e, id) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('tab-' + id).classList.add('active');
    }
</script>
@endsection