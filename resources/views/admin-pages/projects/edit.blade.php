@extends('layouts.app')
@section('title', 'Edit Project')

@section('content')
<div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Edit Project</h2>
        <a href="{{ route('admin.projects.index') }}" class="btn btn-outline-primary rounded-pill">
            <i class="bi bi-arrow-left"></i> Back
        </a>
    </div>

    <div class="card border-0 shadow-lg rounded-4">
        <div class="card-body p-4">
            <form action="{{ route('admin.projects.update', $project->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="row g-4">
                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Project Title</label>
                        <input type="text" name="title" class="form-control rounded-pill" value="{{ $project->title }}" required>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Project Category</label>
                        <input type="text" name="category" class="form-control rounded-pill" value="{{ $project->category }}" required>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Budget</label>
                        <input type="text" name="budget" class="form-control rounded-pill" value="{{ $project->budget }}" required>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Location</label>
                        <input type="text" name="location" class="form-control rounded-pill" value="{{ $project->location }}">
                    </div>

                    <div class="col-12">
                        <label class="form-label fw-semibold">Project Description</label>
                        <textarea name="description" rows="6" class="form-control rounded-4">{{ $project->description }}</textarea>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Status</label>
                        <select name="status" class="form-select rounded-pill">
                            <option value="">Select Status</option>
                            <option value="pending" {{ $project->status == 'pending' ? 'selected' : '' }}>Pending</option>
                            <option value="approved" {{ $project->status == 'approved' ? 'selected' : '' }}>Approved</option>
                            <option value="closed" {{ $project->status == 'closed' ? 'selected' : '' }}>Closed</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Verified</label>
                        <select name="verified" class="form-select rounded-pill">
                            <option value="">Select Verification Status</option>
                            <option value="1" {{ $project->verified ? 'selected' : '' }}>Verified</option>
                            <option value="0" {{ !$project->verified ? 'selected' : '' }}>Not Verified</option>
                        </select>
                    </div>

                <div class="mt-4 text-end">
                    <button type="submit" class="btn btn-primary rounded-pill px-4 py-2">
                        <i class="bi bi-save"></i> Publish project
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
