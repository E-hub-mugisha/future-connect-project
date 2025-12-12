@extends('layouts.talents')
@section('title', isset($course) ? 'Edit Course' : 'Add New Course' )
@section('content')

<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="az-content-breadcrumb">
            <span>Talent</span>
            <span>Courses</span>
        </div>
        <div class="az-content-header d-flex justify-content-between align-items-center">
            <h2 class="az-content-title">{{ isset($course) ? 'Edit Course' : 'Add New Course' }}</h2>
            <div class="d-flex justify-content-end az-content-header-right">
                <a href="{{ route('talent.courses.index') }}" class="btn btn-outline-primary">
                    <i class="bi bi-arrow-left"></i> Back
                </a>
            </div>
        </div>
        @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Please fix the following errors:</strong>
            <ul class="mb-0 mt-2">
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif

        <div class="card card-bordered shadow-sm p-4">
            <p class="text-muted">Fill in the details below to create and publish a course.</p>
            <div class="card-inner">
                <form method="POST" enctype="multipart/form-data"
                    @if(isset($course) && $course->id)
                    action="{{ route('talent.courses.update', $course->id) }}"
                    @else
                    action="{{ route('talent.courses.store') }}"
                    @endif
                    >
                    @csrf
                    @if(isset($course) && $course->id)
                    @method('PUT')
                    @endif

                    <div class="row g-4">
                        <!-- Title -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Course Title</label>
                            <input type="text" name="title"
                                class="form-control"
                                placeholder="Enter course title"
                                value="{{ old('title', $course->title ?? '') }}">
                        </div>
                        <!-- Category -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Category</label>
                            <select name="category_id" class="form-select">
                                <option disabled selected>-- Select Category --</option>
                                @foreach($categories as $cat)
                                <option value="{{ $cat->id }}"
                                    {{ isset($course) && $course->category_id == $cat->id ? 'selected' : '' }}>
                                    {{ $cat->name }}
                                </option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Level -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Level</label>
                            <select name="level" class="form-select">
                                <option disabled selected>-- Select Level --</option>
                                <option value="Beginner" {{ isset($course) && $course->level == 'Beginner' ? 'selected' : '' }}>Beginner</option>
                                <option value="Intermediate" {{ isset($course) && $course->level == 'Intermediate' ? 'selected' : '' }}>Intermediate</option>
                                <option value="Advanced" {{ isset($course) && $course->level == 'Advanced' ? 'selected' : '' }}>Advanced</option>
                            </select>

                        </div>

                        <!-- Description -->
                        <div class="col-md-12 ql-wrapper ql-wrapper-demo">
                            <label class="form-label fw-semibold">Description</label>
                            <textarea name="description" id="quillEditor" rows="4"
                                class="form-control"
                                placeholder="Write a short description...">{{ old('description', $course->description ?? '') }}</textarea>
                        </div>

                        <!-- Thumbnail -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Thumbnail Image</label>
                            <input type="file" name="thumbnail" class="form-control">
                            @if(isset($course) && $course->thumbnail)
                            <div class="mt-3">
                                <img src="{{ asset('storage/'.$course->thumbnail) }}"
                                    alt="Course Thumbnail"
                                    class=" width=" 160">
                            </div>
                            @endif
                        </div>

                        <!-- Video -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Intro Video</label>
                            <input type="text" name="video" class="form-control">
                            @if(isset($course) && $course->video)
                            <div class="mt-3">
                                <video width="200" class=" controls>
                                        <source src=" {{ $course->video }}" type="video/mp4">
                                </video>
                            </div>
                            @endif
                        </div>

                        <!-- Price & Free -->
                        <div class="col-md-4">
                            <label class="form-label fw-semibold">Price (USD)</label>
                            <input type="number" step="0.01" name="price"
                                class="form-control"
                                placeholder="Enter price"
                                value="{{ old('price', $course->price ?? '') }}">
                        </div>

                        <div class="col-md-4 d-flex align-items-center">
                            <label class="form-label fw-semibold me-3">Free?</label>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" name="is_free" value="1"
                                    {{ old('is_free', $course->is_free ?? false) ? 'checked' : '' }}>
                            </div>
                        </div>

                        <!-- Status -->
                        <div class="col-md-4">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
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

@endsection