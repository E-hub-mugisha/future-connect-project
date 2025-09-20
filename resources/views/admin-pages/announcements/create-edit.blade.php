@extends('layouts.app')
@section('title', isset($announcement) ? 'Edit' : 'Create')
@section('content')
<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <h3 class="nk-block-title mb-4">{{ isset($announcement) ? 'Edit' : 'Create' }} Announcement</h3>

            <form action="{{ isset($announcement) ? route('admin.announcements.update', $announcement->id) : route('admin.announcements.store') }}" 
                  method="POST" enctype="multipart/form-data">
                @csrf
                @if(isset($announcement))
                    @method('PUT')
                @endif

                <div class="row">
                    <!-- Left Column -->
                    <div class="col-lg-8">
                        <!-- Basic Info -->
                        <div class="card card-bordered mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Basic Info</h5>
                            </div>
                            <div class="card-inner">
                                <div class="mb-3">
                                    <label class="form-label">Title</label>
                                    <input type="text" name="title" class="form-control" 
                                           value="{{ old('title', $announcement->title ?? '') }}" required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Content</label>
                                    <textarea name="content" class="form-control" rows="5" required>{{ old('content', $announcement->content ?? '') }}</textarea>
                                </div>
                            </div>
                        </div>

                        <!-- Media -->
                        <div class="card card-bordered mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Media</h5>
                            </div>
                            <div class="card-inner">
                                <div class="mb-3">
                                    <label class="form-label">Image</label>
                                    @if(isset($announcement) && $announcement->image)
                                        <div class="mb-2">
                                            <img src="{{ asset('storage/' . $announcement->image) }}" 
                                                 alt="Announcement Image" class="img-fluid rounded" style="max-height:120px;">
                                        </div>
                                    @endif
                                    <input type="file" name="image" class="form-control">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Link</label>
                                    <input type="text" name="link" class="form-control" 
                                           value="{{ old('link', $announcement->link ?? '') }}" placeholder="https://example.com">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column -->
                    <div class="col-lg-4">
                        <!-- Settings -->
                        <div class="card card-bordered mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Settings</h5>
                            </div>
                            <div class="card-inner">
                                <div class="mb-3">
                                    <label class="form-label">Category</label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">-- Select Category --</option>
                                        @foreach($categories as $category)
                                            <option value="{{ $category->id }}" 
                                                {{ old('category_id', $announcement->category_id ?? '') == $category->id ? 'selected' : '' }}>
                                                {{ $category->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="form-check mb-3">
                                    <input type="checkbox" name="is_active" value="1" class="form-check-input" 
                                           id="is_active" {{ old('is_active', $announcement->is_active ?? false) ? 'checked' : '' }}>
                                    <label class="form-check-label" for="is_active">Active</label>
                                </div>
                            </div>
                        </div>

                        <!-- Submit -->
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-lg">
                                {{ isset($announcement) ? 'Update' : 'Create' }} Announcement
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</div>
@endsection
