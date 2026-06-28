@extends('layouts.app')

@section('title', isset($course) ? 'Edit Course' : 'New Course')

@section('content')
<style>
    :root{
        --c-bg:#f7f8fa;
        --c-card:#ffffff;
        --c-border:#e9ecf1;
        --c-text:#1f2430;
        --c-muted:#7b828f;
        --c-primary:#4f46e5;
        --c-primary-soft:#eef0ff;
        --c-radius:14px;
    }
    .page-wrap{ background:var(--c-bg); }
    .form-card{
        background:var(--c-card);
        border:1px solid var(--c-border);
        border-radius:var(--c-radius);
        padding:1.75rem;
    }
    .section-title{
        font-size:.95rem; font-weight:700; color:var(--c-text);
        margin-bottom:1rem; display:flex; align-items:center; gap:.5rem;
    }
    .section-title i{ color:var(--c-primary); }
    .form-label{ font-size:.82rem; font-weight:600; color:var(--c-text); }
    .form-control, .form-select{
        border-radius:10px; border:1px solid var(--c-border); font-size:.9rem;
        padding:.6rem .85rem;
    }
    .form-control:focus, .form-select:focus{
        border-color:var(--c-primary); box-shadow:0 0 0 3px var(--c-primary-soft);
    }
    textarea.form-control{ min-height:120px; }
    .thumb-preview{
        width:100%; max-width:220px; aspect-ratio:16/10; object-fit:cover;
        border-radius:12px; border:1px solid var(--c-border); background:#f1f2f5;
    }
    .upload-box{
        border:1.5px dashed var(--c-border); border-radius:12px; padding:1rem;
        text-align:center; cursor:pointer; transition:.15s ease;
    }
    .upload-box:hover{ border-color:var(--c-primary); background:var(--c-primary-soft); }
    .form-check-input:checked{ background-color:var(--c-primary); border-color:var(--c-primary); }
    .btn-primary-soft{
        background:var(--c-primary); border:none; color:#fff; font-weight:600;
        border-radius:10px; padding:.6rem 1.3rem;
    }
    .btn-primary-soft:hover{ background:#4338ca; color:#fff; }
    .btn-cancel{
        border-radius:10px; border:1px solid var(--c-border); color:var(--c-muted);
        font-weight:600; padding:.6rem 1.3rem; background:#fff;
    }
    .btn-cancel:hover{ background:#f1f2f5; }
    .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
    .page-header p{ color:var(--c-muted); font-size:.9rem; }
    .invalid-feedback{ font-size:.78rem; }
    .price-wrap[data-disabled="true"]{ opacity:.5; pointer-events:none; }
</style>


<div class="page-wrap py-4">
    <div class="container-fluid">

        <div class="d-flex flex-wrap justify-content-between align-items-center page-header mb-4">
            <div>
                <h1 class="mb-1">{{ isset($course) ? 'Edit Course' : 'New Course' }}</h1>
                <p class="mb-0">{{ isset($course) ? 'Update course details below' : 'Fill in the details to create a new course' }}</p>
            </div>
            <a href="{{ route('admin.courses.index') }}" class="btn btn-cancel">
                <i class="bi bi-arrow-left me-1"></i> Back to Courses
            </a>
        </div>

        <form action="{{ isset($course) ? route('admin.courses.update', $course->id) : route('admin.courses.store') }}"
              method="POST" enctype="multipart/form-data">
            @csrf
            @if(isset($course))
                @method('PUT')
            @endif

            <div class="row g-4">
                {{-- Main details --}}
                <div class="col-lg-8">
                    <div class="form-card mb-4">
                        <div class="section-title"><i class="bi bi-info-circle"></i> Basic Information</div>

                        <div class="mb-3">
                            <label class="form-label">Course Title <span class="text-danger">*</span></label>
                            <input type="text" name="title" value="{{ old('title', $course->title ?? '') }}"
                                   class="form-control @error('title') is-invalid @enderror"
                                   placeholder="e.g. Introduction to Web Development">
                            @error('title') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea name="description" class="form-control @error('description') is-invalid @enderror"
                                      placeholder="Brief overview of what students will learn...">{{ old('description', $course->description ?? '') }}</textarea>
                            @error('description') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                        </div>

                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label">Category <span class="text-danger">*</span></label>
                                <select name="category_id" class="form-select @error('category_id') is-invalid @enderror">
                                    <option value="">Select category</option>
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id }}"
                                            @selected(old('category_id', $course->category_id ?? null) == $category->id)>
                                            {{ $category->name }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('category_id') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Instructor / Talent <span class="text-danger">*</span></label>
                                <select name="talent_id" class="form-select @error('talent_id') is-invalid @enderror">
                                    <option value="">Select instructor</option>
                                    @foreach($talents as $talent)
                                        <option value="{{ $talent->id }}"
                                            @selected(old('talent_id', $course->talent_id ?? null) == $talent->id)>
                                            {{ $talent->name }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('talent_id') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                            </div>
                        </div>
                    </div>

                    <div class="form-card mb-4">
                        <div class="section-title"><i class="bi bi-bar-chart-steps"></i> Course Details</div>

                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label">Level</label>
                                <select name="level" class="form-select @error('level') is-invalid @enderror">
                                    @php $levelVal = old('level', $course->level ?? 'Beginner'); @endphp
                                    <option value="Beginner" @selected($levelVal=='Beginner')>Beginner</option>
                                    <option value="Intermediate" @selected($levelVal=='Intermediate')>Intermediate</option>
                                    <option value="Advanced" @selected($levelVal=='Advanced')>Advanced</option>
                                </select>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Status <span class="text-danger">*</span></label>
                                <select name="status" class="form-select @error('status') is-invalid @enderror">
                                    @php $statusVal = old('status', $course->status ?? 'draft'); @endphp
                                    <option value="draft" @selected($statusVal=='draft')>Draft</option>
                                    <option value="published" @selected($statusVal=='published')>Published</option>
                                </select>
                                @error('status') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                            </div>

                            <div class="col-md-12">
                                <label class="form-label">Video URL</label>
                                <input type="url" name="video" value="{{ old('video', $course->video ?? '') }}"
                                       class="form-control @error('video') is-invalid @enderror"
                                       placeholder="https://...">
                                @error('video') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Sidebar --}}
                <div class="col-lg-4">
                    <div class="form-card mb-4">
                        <div class="section-title"><i class="bi bi-image"></i> Thumbnail</div>

                        @php $thumb = $course->thumbnail ?? null; @endphp
                        <img id="thumbPreview" src="{{ $thumb ? asset('images/thumbnails/'.$thumb) : asset('images/placeholder-course.png') }}"
                             class="thumb-preview mb-3" alt="Thumbnail preview">

                        <label class="upload-box d-block">
                            <i class="bi bi-cloud-upload fs-4 d-block mb-1 text-muted"></i>
                            <span class="small text-muted">Click to upload image (max 2MB)</span>
                            <input type="file" name="thumbnail" id="thumbInput" accept="image/*" class="d-none" onchange="previewThumb(event)">
                        </label>
                        @error('thumbnail') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                    </div>

                    <div class="form-card mb-4">
                        <div class="section-title"><i class="bi bi-cash-coin"></i> Pricing</div>

                        @php $isFree = old('is_free', $course->is_free ?? false); @endphp
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input" type="checkbox" name="is_free" id="isFreeSwitch"
                                   value="1" @checked($isFree) onchange="togglePrice(this)">
                            <label class="form-check-label" for="isFreeSwitch">This course is free</label>
                        </div>

                        <div class="price-wrap" id="priceWrap" data-disabled="{{ $isFree ? 'true' : 'false' }}">
                            <label class="form-label">Price (RWF)</label>
                            <input type="number" step="0.01" min="0" name="price"
                                   value="{{ old('price', $course->price ?? 0) }}"
                                   class="form-control @error('price') is-invalid @enderror"
                                   placeholder="0.00" {{ $isFree ? 'disabled' : '' }}>
                            @error('price') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                        </div>
                    </div>

                    <div class="d-flex gap-2">
                        <button type="submit" class="btn btn-primary-soft flex-fill">
                            <i class="bi bi-check2-circle me-1"></i> {{ isset($course) ? 'Update Course' : 'Create Course' }}
                        </button>
                        <a href="{{ route('admin.courses.index') }}" class="btn btn-cancel">Cancel</a>
                    </div>
                </div>
            </div>
        </form>

    </div>
</div>

<script>
    function previewThumb(event) {
        const file = event.target.files[0];
        if (file) {
            document.getElementById('thumbPreview').src = URL.createObjectURL(file);
        }
    }
    function togglePrice(checkbox) {
        const wrap = document.getElementById('priceWrap');
        const priceInput = wrap.querySelector('input[name="price"]');
        if (checkbox.checked) {
            wrap.dataset.disabled = 'true';
            priceInput.disabled = true;
        } else {
            wrap.dataset.disabled = 'false';
            priceInput.disabled = false;
        }
    }
</script>
@endsection