@extends('layouts.app')

@section('title', $course->title)

@push('styles')
<style>
    :root{
        --c-bg:#f7f8fa;
        --c-card:#F5f5f7;
        --c-border:#e9ecf1;
        --c-text:#1f2430;
        --c-muted:#7b828f;
        --c-primary:#4f46e5;
        --c-primary-soft:#eef0ff;
        --c-success:#16a34a;
        --c-success-soft:#e9f9ee;
        --c-warning:#d97706;
        --c-warning-soft:#fff4e5;
        --c-radius:14px;
    }
    .page-wrap{ background:var(--c-bg); }
    .hero-card{
        background:var(--c-card); border:1px solid var(--c-border); border-radius:var(--c-radius);
        overflow:hidden;
    }
    .hero-thumb{ width:100%; height:260px; object-fit:cover; background:#f1f2f5; }
    .hero-body{ padding:1.5rem; }
    .badge-soft{ font-weight:600; font-size:.72rem; padding:.4em .75em; border-radius:999px; }
    .badge-published{ background:var(--c-success-soft); color:var(--c-success); }
    .badge-draft{ background:var(--c-warning-soft); color:var(--c-warning); }
    .badge-free{ background:var(--c-primary-soft); color:var(--c-primary); }
    .badge-paid{ background:#f1f2f5; color:var(--c-text); }
    .info-card{
        background:var(--c-card); border:1px solid var(--c-border); border-radius:var(--c-radius);
        padding:1.5rem; height:100%;
    }
    .info-card .section-title{
        font-size:.95rem; font-weight:700; color:var(--c-text); margin-bottom:1rem;
        display:flex; align-items:center; gap:.5rem;
    }
    .info-card .section-title i{ color:var(--c-primary); }
    .meta-row{ display:flex; justify-content:space-between; padding:.55rem 0; border-bottom:1px solid var(--c-border); font-size:.87rem; }
    .meta-row:last-child{ border-bottom:none; }
    .meta-label{ color:var(--c-muted); }
    .meta-value{ color:var(--c-text); font-weight:600; }
    .lesson-item{
        display:flex; align-items:center; justify-content:between; gap:1rem;
        padding:.85rem 1rem; border:1px solid var(--c-border); border-radius:12px; margin-bottom:.6rem;
        background:#fff;
    }
    .lesson-index{
        width:32px;height:32px;border-radius:8px;background:var(--c-primary-soft);color:var(--c-primary);
        display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem;flex-shrink:0;
    }
    .lesson-title{ font-weight:600; color:var(--c-text); font-size:.9rem; }
    .lesson-sub{ font-size:.76rem; color:var(--c-muted); }
    .btn-icon{
        width:32px;height:32px;border-radius:8px; display:inline-flex;align-items:center;justify-content:center;
        border:1px solid var(--c-border); background:#fff; color:var(--c-muted);
    }
    .btn-icon:hover{ background:var(--c-primary-soft); color:var(--c-primary); }
    .btn-icon.danger:hover{ background:#fdecec; color:#dc2626; }
    .feedback-item{ border-bottom:1px solid var(--c-border); padding:1rem 0; }
    .feedback-item:last-child{ border-bottom:none; }
    .stars i{ color:#f59e0b; font-size:.85rem; }
    .btn-primary-soft{
        background:var(--c-primary); border:none; color:#fff; font-weight:600; border-radius:10px; padding:.55rem 1.1rem;
    }
    .btn-primary-soft:hover{ background:#4338ca; color:#fff; }
    .btn-cancel{
        border-radius:10px; border:1px solid var(--c-border); color:var(--c-muted); font-weight:600;
        padding:.55rem 1.1rem; background:#fff;
    }
    .btn-cancel:hover{ background:#f1f2f5; }
    .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
    .page-header p{ color:var(--c-muted); font-size:.9rem; }
</style>
@endpush

@section('content')
<div class="page-wrap py-4">
    <div class="container-fluid">

        <div class="d-flex flex-wrap justify-content-between align-items-center page-header mb-4">
            <div>
                <h1 class="mb-1">{{ $course->title }}</h1>
                <p class="mb-0">Course details, lessons and student feedback</p>
            </div>
            <div class="d-flex gap-2 mt-2 mt-md-0">
                <a href="{{ route('admin.courses.edit', $course->id) }}" class="btn btn-primary-soft">
                    <i class="bi bi-pencil me-1"></i> Edit Course
                </a>
                <a href="{{ route('admin.courses.index') }}" class="btn btn-cancel">
                    <i class="bi bi-arrow-left me-1"></i> Back
                </a>
            </div>
        </div>

        <div class="row g-4 mb-4">
            {{-- Hero --}}
            <div class="col-lg-8">
                <div class="hero-card">
                    <img src="{{ $course->thumbnail ? asset('images/thumbnails/'.$course->thumbnail) : asset('images/placeholder-course.png') }}"
                         class="hero-thumb" alt="{{ $course->title }}">
                    <div class="hero-body">
                        <div class="d-flex flex-wrap gap-2 mb-3">
                            @if($course->status == 'published')
                                <span class="badge-soft badge-published">Published</span>
                            @else
                                <span class="badge-soft badge-draft">Draft</span>
                            @endif

                            @if($course->is_free)
                                <span class="badge-soft badge-free">Free</span>
                            @else
                                <span class="badge-soft badge-paid">{{ number_format($course->price, 0) }} RWF</span>
                            @endif

                            <span class="badge-soft" style="background:#f1f2f5;color:#1f2430;">{{ $course->level }}</span>
                        </div>
                        <p class="text-muted mb-0">{{ $course->description ?: 'No description provided.' }}</p>

                        @if($course->video)
                            <a href="{{ $course->video }}" target="_blank" class="btn btn-cancel mt-3">
                                <i class="bi bi-play-circle me-1"></i> Watch Preview Video
                            </a>
                        @endif
                    </div>
                </div>
            </div>

            {{-- Meta sidebar --}}
            <div class="col-lg-4">
                <div class="info-card">
                    <div class="section-title"><i class="bi bi-info-circle"></i> Overview</div>
                    <div class="meta-row">
                        <span class="meta-label">Instructor</span>
                        <span class="meta-value">{{ $course->talent->name ?? '—' }}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">Category</span>
                        <span class="meta-value">{{ $course->category->name ?? '—' }}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">Slug</span>
                        <span class="meta-value text-truncate" style="max-width:160px;">{{ $course->slug }}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">Created</span>
                        <span class="meta-value">{{ $course->created_at?->format('M d, Y') }}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">Last Updated</span>
                        <span class="meta-value">{{ $course->updated_at?->format('M d, Y') }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4">
            {{-- Lessons --}}
            <div class="col-lg-7">
                <div class="info-card">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="section-title mb-0"><i class="bi bi-collection-play"></i> Lessons</div>
                        <button type="button" class="btn btn-sm btn-primary-soft" data-bs-toggle="modal" data-bs-target="#addLessonModal">
                            <i class="bi bi-plus-lg me-1"></i> Add Lesson
                        </button>
                    </div>

                    @forelse($course->lessons->sortBy('order') as $index => $lesson)
                        <div class="lesson-item">
                            <div class="lesson-index">{{ $index + 1 }}</div>
                            <div class="flex-grow-1">
                                <div class="lesson-title">{{ $lesson->title }}</div>
                                <div class="lesson-sub">{{ \Illuminate\Support\Str::limit($lesson->content, 60) }}</div>
                            </div>
                            <div class="d-flex gap-2">
                                <a href="#" class="btn-icon" title="Edit">
                                    <i class="bi bi-pencil"></i>
                                </a>
                                <form action="#" method="POST"
                                      onsubmit="return confirm('Delete this lesson?');">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn-icon danger" title="Delete">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    @empty
                        <p class="text-muted text-center py-4 mb-0">No lessons added yet.</p>
                    @endforelse
                </div>
            </div>

            {{-- Feedback --}}
            <div class="col-lg-5">
                <div class="info-card">
                    <div class="section-title"><i class="bi bi-chat-square-text"></i> Student Feedback</div>

                    @forelse($course->feedback as $feedback)
                        <div class="feedback-item">
                            <div class="d-flex justify-content-between mb-1">
                                <span class="fw-semibold small">{{ $feedback->user->name ?? 'Anonymous' }}</span>
                                <span class="stars">
                                    @for($i = 1; $i <= 5; $i++)
                                        <i class="bi bi-star{{ $i <= $feedback->rating ? '-fill' : '' }}"></i>
                                    @endfor
                                </span>
                            </div>
                            <p class="small text-muted mb-0">{{ $feedback->comment }}</p>
                        </div>
                    @empty
                        <p class="text-muted text-center py-4 mb-0">No feedback yet.</p>
                    @endforelse
                </div>
            </div>
        </div>

    </div>
</div>

{{-- Add Lesson Modal --}}
<div class="modal fade" id="addLessonModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content" style="border-radius:14px;border:none;">
            <form action="{{ route('admin.courses.lessons.store') }}" method="POST">
                @csrf
                <input type="hidden" name="course_id" value="{{ $course->id }}">
                <div class="modal-header" style="border-bottom:1px solid #e9ecf1;">
                    <h5 class="modal-title fw-bold">Add Lesson</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label fw-semibold small">Title</label>
                        <input type="text" name="title" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold small">Content</label>
                        <textarea name="content" class="form-control" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold small">Video URL</label>
                        <input type="url" name="video_url" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold small">Order</label>
                        <input type="number" name="order" class="form-control" value="{{ $course->lessons->count() + 1 }}">
                    </div>
                </div>
                <div class="modal-footer" style="border-top:1px solid #e9ecf1;">
                    <button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary-soft">Save Lesson</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection