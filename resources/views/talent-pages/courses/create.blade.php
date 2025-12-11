@extends('layouts.talents')
@section('title', 'Create Course')
@section('content')
<div class="container-fluid py-4">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="main-title mb-4">
                <h3>
                    {{ isset($course) ? 'Edit Course' : 'Add New Course' }}
                </h3>
                <p class="text-muted">Fill in the details below to create and publish a course.</p>
                <a href="{{ route('admin.courses.index') }}" class="btn btn-outline-primary">
                    <i class="bi bi-arrow-left"></i> Back
                </a>
            </div>

            <div class="nk-block nk-block-lg">
                <div class="card card-bordered shadow-sm">
                    <div class="card-inner">
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

                                <!-- Title -->
                                <div class="col-md-6">
                                    <label class="form-label fw-semibold">Course Title</label>
                                    <input type="text" name="title"
                                        class="form-control"
                                        placeholder="Enter course title"
                                        value="{{ old('title', $course->title ?? '') }}">
                                </div>

                                <!-- Level -->
                                <div class="col-md-6">
                                    <label class="form-label fw-semibold">Level</label>
                                    <input type="text" name="level"
                                        class="form-control"
                                        placeholder="Beginner, Intermediate, Advanced"
                                        value="{{ old('level', $course->level ?? '') }}">
                                </div>

                                <!-- Description -->
                                <div class="col-12">
                                    <label class="form-label fw-semibold">Description</label>
                                    <textarea name="description" rows="4"
                                        class="form-control"
                                        placeholder="Write a short description...">{{ old('description', $course->description ?? '') }}</textarea>
                                </div>

                                <!-- Price & Free -->
                                <div class="col-md-6">
                                    <label class="form-label fw-semibold">Price (USD)</label>
                                    <input type="number" step="0.01" name="price"
                                        class="form-control"
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

                                <!-- Status -->
                                <div class="col-md-6">
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
    </div>
</div>
@endsection