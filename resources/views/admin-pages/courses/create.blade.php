@extends('layouts.app')

@section('content')
<div class="container-fluid py-4">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-bold mb-0">
                    {{ isset($course) ? 'Edit Course' : 'Add New Course' }}
                </h3>
                <a href="{{ route('admin.courses.index') }}" class="btn btn-outline-primary">
                    <i class="bi bi-arrow-left"></i> Back
                </a>
            </div>

            <div class="card border-0 shadow-sm rounded-4">
                <div class="card-body p-4">
                    <form method="POST" enctype="multipart/form-data"
                        @if(isset($course) && $course->id)
                        action="{{ route('admin.courses.update', $course->id) }}"
                        @else
                        action="{{ route('admin.courses.store') }}"
                        @endif
                        >
                        @csrf
                        @if(isset($course) && $course->id)
                        @method('PUT')
                        @endif

                        <div class="row g-4">
                            <!-- Talent -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Talent</label>
                                <select name="talent_id" class="form-select rounded-3 shadow-sm">
                                    <option disabled selected>-- Select Talent --</option>
                                    @foreach($talents as $talent)
                                    <option value="{{ $talent->id }}"
                                        {{ isset($course) && $course->talent_id == $talent->id ? 'selected' : '' }}>
                                        {{ $talent->name }}
                                    </option>
                                    @endforeach
                                </select>
                            </div>

                            <!-- Category -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Category</label>
                                <select name="category_id" class="form-select rounded-3 shadow-sm">
                                    <option disabled selected>-- Select Category --</option>
                                    @foreach($categories as $cat)
                                    <option value="{{ $cat->id }}"
                                        {{ isset($course) && $course->category_id == $cat->id ? 'selected' : '' }}>
                                        {{ $cat->name }}
                                    </option>
                                    @endforeach
                                </select>
                            </div>

                            <!-- Title -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Course Title</label>
                                <input type="text" name="title"
                                    class="form-control rounded-3 shadow-sm"
                                    placeholder="Enter course title"
                                    value="{{ old('title', $course->title ?? '') }}">
                            </div>

                            <!-- Level -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Level</label>
                                <input type="text" name="level"
                                    class="form-control rounded-3 shadow-sm"
                                    placeholder="Beginner, Intermediate, Advanced"
                                    value="{{ old('level', $course->level ?? '') }}">
                            </div>

                            <!-- Description -->
                            <div class="col-12">
                                <label class="form-label fw-semibold">Description</label>
                                <textarea name="description" rows="4"
                                    class="form-control rounded-3 shadow-sm"
                                    placeholder="Write a short description...">{{ old('description', $course->description ?? '') }}</textarea>
                            </div>

                            <!-- Price & Free -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Price (USD)</label>
                                <input type="number" step="0.01" name="price"
                                    class="form-control rounded-3 shadow-sm"
                                    placeholder="Enter price"
                                    value="{{ old('price', $course->price ?? '') }}">
                            </div>

                            <div class="col-md-6 d-flex align-items-center">
                                <label class="form-label fw-semibold me-3">Free?</label>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="is_free" value="1"
                                        {{ old('is_free', $course->is_free ?? false) ? 'checked' : '' }}>
                                </div>
                            </div>

                            <!-- Thumbnail -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Thumbnail Image</label>
                                <input type="file" name="thumbnail" class="form-control rounded-3 shadow-sm">
                                @if(isset($course) && $course->thumbnail)
                                <div class="mt-3">
                                    <img src="{{ asset('storage/'.$course->thumbnail) }}"
                                        alt="Course Thumbnail"
                                        class="rounded-3 shadow-sm" width="160">
                                </div>
                                @endif
                            </div>

                            <!-- Video -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Intro Video</label>
                                <input type="text" name="video" class="form-control rounded-3 shadow-sm">
                                @if(isset($course) && $course->video)
                                <div class="mt-3">
                                    <video width="200" class="rounded-3 shadow-sm" controls>
                                        <source src="{{ $course->video }}" type="video/mp4">
                                    </video>
                                </div>
                                @endif
                            </div>

                            <!-- Status -->
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Status</label>
                                <select name="status" class="form-select rounded-3 shadow-sm">
                                    <option value="draft" {{ old('status', $course->status ?? '') == 'draft' ? 'selected' : '' }}>Draft</option>
                                    <option value="published" {{ old('status', $course->status ?? '') == 'published' ? 'selected' : '' }}>Published</option>
                                </select>
                            </div>

                            <!-- Submit -->
                            <div class="col-12 text-end mt-4">
                                <button type="submit" class="btn btn-primary btn-lg px-4 shadow-sm">
                                    <i class="bi bi-save me-2"></i> Save Course
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection