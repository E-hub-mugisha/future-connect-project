@extends('layouts.app')

@section('title', 'Edit: '.$course->title.' — CourseHub')
@section('topbar-title', 'Edit Course')
@section('content')


<style>
    .upload-zone {
        border: 2px dashed var(--border);
        border-radius: var(--radius-lg);
        padding: 24px;
        text-align: center;
        cursor: pointer;
        transition: all .2s;
        position: relative;
        background: var(--surface2);
    }

    .upload-zone:hover, .upload-zone.drag-over {
        border-color: var(--accent);
        background: var(--accent-glow);
    }

    .upload-zone input[type="file"] {
        position: absolute; inset: 0;
        opacity: 0; cursor: pointer;
        width: 100%; height: 100%;
    }

    .upload-icon {
        width: 44px; height: 44px;
        border-radius: 10px;
        background: rgba(45,212,191,.12);
        display: inline-flex; align-items: center; justify-content: center;
        color: var(--accent);
        margin-bottom: 12px;
    }

    .upload-icon svg { width: 22px; height: 22px; }

    .upload-zone h4 {
        font-family: var(--font-head);
        font-size: .875rem;
        font-weight: 600;
        color: var(--text);
        margin-bottom: 3px;
    }

    .upload-zone p { font-size: .78rem; color: var(--text-dim); }
    .upload-zone span { color: var(--accent); }

    .preview-box {
        position: relative;
        border-radius: var(--radius);
        overflow: hidden;
        background: var(--surface2);
        border: 1px solid var(--border);
        margin-bottom: 10px;
    }

    .preview-box img { width: 100%; height: 160px; object-fit: cover; display: block; }

    .preview-remove {
        position: absolute; top: 8px; right: 8px;
        width: 28px; height: 28px;
        border-radius: 50%;
        background: rgba(6,15,17,.8);
        border: 1px solid var(--border);
        display: flex; align-items: center; justify-content: center;
        color: var(--danger);
        cursor: pointer;
        transition: background .15s;
    }

    .preview-remove:hover { background: rgba(244,63,94,.2); }
    .preview-remove svg { width: 13px; height: 13px; }

    .section-heading {
        font-family: var(--font-head);
        font-size: .8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .1em;
        color: var(--muted2);
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    .section-heading::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--border);
    }

    .price-toggle-group { display: flex; gap: 10px; }

    .price-radio { flex: 1; position: relative; }
    .price-radio input { position: absolute; opacity: 0; }

    .price-radio-label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: var(--radius);
        border: 1px solid var(--border);
        background: var(--surface2);
        cursor: pointer;
        font-size: .875rem;
        color: var(--text-dim);
        transition: all .18s;
        font-family: var(--font-head);
        font-weight: 500;
    }

    .price-radio input:checked + .price-radio-label {
        border-color: var(--accent);
        background: var(--accent-glow);
        color: var(--accent);
    }

    .form-hint { font-size: .75rem; color: var(--text-dim); margin-top: 5px; }
    .form-error { font-size: .78rem; color: var(--danger); margin-top: 5px; }
    .form-control.is-invalid, .form-select.is-invalid { border-color: var(--danger); }

    .sticky-actions {
        position: sticky;
        bottom: 0;
        background: linear-gradient(to top, var(--bg) 80%, transparent);
        padding: 20px 0 8px;
        margin-top: 8px;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .danger-zone {
        background: rgba(244,63,94,.05);
        border: 1px solid rgba(244,63,94,.2);
        border-radius: var(--radius-lg);
        padding: 18px 20px;
        margin-top: 16px;
    }

    .danger-zone h4 {
        font-family: var(--font-head);
        font-size: .875rem;
        font-weight: 600;
        color: var(--danger);
        margin-bottom: 6px;
    }

    .danger-zone p {
        font-size: .8rem;
        color: var(--text-dim);
        margin-bottom: 12px;
    }
</style>



<!-- Breadcrumb -->
<nav class="breadcrumb">
    <a href="#">Dashboard</a>
    <span class="breadcrumb-sep">›</span>
    <a href="{{ route('courses.index') }}">Courses</a>
    <span class="breadcrumb-sep">›</span>
    <a href="{{ route('courses.show', $course) }}">{{ Str::limit($course->title, 30) }}</a>
    <span class="breadcrumb-sep">›</span>
    <span class="breadcrumb-current">Edit</span>
</nav>

<!-- Page header -->
<div class="page-header">
    <div class="page-header-text">
        <h1>Edit Course</h1>
        <p>Last updated {{ $course->updated_at->diffForHumans() }}</p>
    </div>
    <div style="display:flex;gap:10px">
        <a href="{{ route('courses.show', $course) }}" class="btn btn-secondary">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            View
        </a>
        <a href="{{ route('courses.index') }}" class="btn btn-ghost">Back</a>
    </div>
</div>

@if($errors->any())
<div class="alert alert-danger mb-4">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    <div>
        <strong>Please fix the following errors:</strong>
        <ul style="margin-top:6px;padding-left:16px">
            @foreach($errors->all() as $err)
                <li>{{ $err }}</li>
            @endforeach
        </ul>
    </div>
</div>
@endif

<form method="POST" action="{{ route('courses.update', $course) }}" enctype="multipart/form-data">
    @csrf @method('PUT')

    <div style="display:grid; grid-template-columns: 1fr 320px; gap: 24px; align-items: start;">

        <!-- Left -->
        <div>
            <!-- Basic Info -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="section-heading">Basic Information</div>

                    <div class="form-group">
                        <label class="form-label">Course Title <span style="color:var(--danger)">*</span></label>
                        <input type="text" name="title"
                               class="form-control {{ $errors->has('title') ? 'is-invalid' : '' }}"
                               placeholder="e.g. Full-Stack Web Development Bootcamp"
                               value="{{ old('title', $course->title) }}" required>
                        @error('title')<div class="form-error">{{ $message }}</div>@enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <textarea name="description"
                                  class="form-control {{ $errors->has('description') ? 'is-invalid' : '' }}"
                                  rows="5" placeholder="Describe what students will learn…">{{ old('description', $course->description) }}</textarea>
                        @error('description')<div class="form-error">{{ $message }}</div>@enderror
                    </div>

                    <div class="form-grid">
                        <div class="form-group" style="margin-bottom:0">
                            <label class="form-label">Talent / Instructor <span style="color:var(--danger)">*</span></label>
                            <select name="talent_id" class="form-select {{ $errors->has('talent_id') ? 'is-invalid' : '' }}" required>
                                <option value="">Select talent…</option>
                                @foreach($talents ?? [] as $talent)
                                    <option value="{{ $talent->id }}" {{ old('talent_id', $course->talent_id) == $talent->id ? 'selected' : '' }}>{{ $talent->name }}</option>
                                @endforeach
                            </select>
                            @error('talent_id')<div class="form-error">{{ $message }}</div>@enderror
                        </div>

                        <div class="form-group" style="margin-bottom:0">
                            <label class="form-label">Category <span style="color:var(--danger)">*</span></label>
                            <select name="category_id" class="form-select {{ $errors->has('category_id') ? 'is-invalid' : '' }}" required>
                                <option value="">Select category…</option>
                                @foreach($categories ?? [] as $cat)
                                    <option value="{{ $cat->id }}" {{ old('category_id', $course->category_id) == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                                @endforeach
                            </select>
                            @error('category_id')<div class="form-error">{{ $message }}</div>@enderror
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pricing -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="section-heading">Pricing</div>

                    <div class="form-group">
                        <label class="form-label">Access Type</label>
                        <div class="price-toggle-group">
                            <label class="price-radio">
                                <input type="radio" name="is_free" value="1"
                                       {{ old('is_free', $course->is_free) ? 'checked' : '' }}
                                       onchange="document.getElementById('price-wrap').style.display='none'">
                                <span class="price-radio-label">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:15px;height:15px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    Free
                                </span>
                            </label>
                            <label class="price-radio">
                                <input type="radio" name="is_free" value="0"
                                       {{ !old('is_free', $course->is_free) ? 'checked' : '' }}
                                       onchange="document.getElementById('price-wrap').style.display='block'">
                                <span class="price-radio-label">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:15px;height:15px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    Paid
                                </span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group" id="price-wrap" style="{{ !old('is_free', $course->is_free) ? '' : 'display:none' }}">
                        <label class="form-label">Price (USD)</label>
                        <input type="number" name="price"
                               class="form-control {{ $errors->has('price') ? 'is-invalid' : '' }}"
                               placeholder="29.99" step="0.01" min="0"
                               value="{{ old('price', $course->price) }}">
                        @error('price')<div class="form-error">{{ $message }}</div>@enderror
                    </div>
                </div>
            </div>

            <!-- Media -->
            <div class="card">
                <div class="card-body">
                    <div class="section-heading">Media</div>

                    <div class="form-group" style="margin-bottom:0">
                        <label class="form-label">Intro Video URL</label>
                        <input type="url" name="video"
                               class="form-control {{ $errors->has('video') ? 'is-invalid' : '' }}"
                               placeholder="https://youtube.com/watch?v=..."
                               value="{{ old('video', $course->video) }}">
                        <div class="form-hint">Paste a YouTube or Vimeo URL for the intro preview.</div>
                        @error('video')<div class="form-error">{{ $message }}</div>@enderror
                    </div>
                </div>
            </div>
        </div>

        <!-- Right -->
        <div>
            <!-- Publish settings -->
            <div class="card mb-4">
                <div class="card-header">
                    <span class="card-title">Publish Settings</span>
                    <span class="badge badge-{{ $course->status }}">
                        <span class="badge-dot"></span>
                        {{ ucfirst($course->status) }}
                    </span>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select name="status" class="form-select">
                            <option value="draft"     {{ old('status', $course->status) === 'draft'     ? 'selected' : '' }}>Draft</option>
                            <option value="published" {{ old('status', $course->status) === 'published' ? 'selected' : '' }}>Published</option>
                            <option value="archived"  {{ old('status', $course->status) === 'archived'  ? 'selected' : '' }}>Archived</option>
                        </select>
                    </div>

                    <div class="form-group" style="margin-bottom:0">
                        <label class="form-label">Difficulty Level</label>
                        <select name="level" class="form-select">
                            <option value="">Not specified</option>
                            <option value="beginner"     {{ old('level', $course->level) === 'beginner'     ? 'selected' : '' }}>Beginner</option>
                            <option value="intermediate" {{ old('level', $course->level) === 'intermediate' ? 'selected' : '' }}>Intermediate</option>
                            <option value="advanced"     {{ old('level', $course->level) === 'advanced'     ? 'selected' : '' }}>Advanced</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Thumbnail -->
            <div class="card mb-4">
                <div class="card-header">
                    <span class="card-title">Thumbnail</span>
                </div>
                <div class="card-body">
                    @if($course->thumbnail)
                    <div id="preview-box" class="preview-box">
                        <img id="preview-img" src="{{ asset('storage/'.$course->thumbnail) }}" alt="">
                        <button type="button" class="preview-remove" onclick="clearPreview()">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                    </div>
                    <div id="upload-zone" class="upload-zone" style="display:none">
                    @else
                    <div id="preview-box" class="preview-box" style="display:none">
                        <img id="preview-img" src="" alt="">
                        <button type="button" class="preview-remove" onclick="clearPreview()">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                    </div>
                    <div id="upload-zone" class="upload-zone">
                    @endif
                        <input type="file" name="thumbnail" accept="image/*" id="thumbnail-input" onchange="previewThumb(this)">
                        <div class="upload-icon">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        </div>
                        <h4>Replace Thumbnail</h4>
                        <p><span>Click to browse</span> or drag & drop</p>
                    </div>
                    @error('thumbnail')<div class="form-error mt-1">{{ $message }}</div>@enderror
                </div>
            </div>

            <!-- Stats mini -->
            <div class="card">
                <div class="card-body">
                    <div class="section-heading">Quick Stats</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                        <div style="text-align:center;padding:12px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius)">
                            <div style="font-family:var(--font-head);font-size:1.4rem;font-weight:800;color:var(--text)">{{ $course->lessons->count() }}</div>
                            <div style="font-size:.75rem;color:var(--text-dim);margin-top:2px">Lessons</div>
                        </div>
                        <div style="text-align:center;padding:12px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius)">
                            <div style="font-family:var(--font-head);font-size:1.4rem;font-weight:800;color:var(--text)">{{ $course->enrollments->count() }}</div>
                            <div style="font-size:.75rem;color:var(--text-dim);margin-top:2px">Enrollments</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Danger zone -->
            <div class="danger-zone">
                <h4>Danger Zone</h4>
                <p>Permanently delete this course and all related data. This action cannot be undone.</p>
                <form method="POST" action="{{ route('courses.destroy', $course) }}" onsubmit="return confirm('Are you sure? This will permanently delete the course and all its lessons and enrollments.')">
                    @csrf @method('DELETE')
                    <button type="submit" class="btn btn-danger btn-sm w-full" style="justify-content:center">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        Delete Course
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Sticky actions -->
    <div class="sticky-actions">
        <button type="submit" class="btn btn-primary">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            Save Changes
        </button>
        <a href="{{ route('courses.show', $course) }}" class="btn btn-ghost">Cancel</a>
    </div>
</form>


<script>
    function previewThumb(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = e => {
                document.getElementById('preview-img').src = e.target.result;
                document.getElementById('preview-box').style.display = 'block';
                document.getElementById('upload-zone').style.display = 'none';
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    function clearPreview() {
        document.getElementById('thumbnail-input').value = '';
        document.getElementById('preview-box').style.display = 'none';
        document.getElementById('upload-zone').style.display = 'block';
    }

    const zone = document.getElementById('upload-zone');
    if (zone) {
        zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                document.getElementById('thumbnail-input').files = e.dataTransfer.files;
                previewThumb(document.getElementById('thumbnail-input'));
            }
        });
    }
</script>
@endsection