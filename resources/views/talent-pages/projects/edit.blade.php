@extends('layouts.talents')
@section('title', 'Edit Project')

@section('content')
<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="az-content-header d-flex justify-content-between align-items-center">
            <h2 class="az-content-title">Edit Project</h2>
            <div class="d-flex justify-content-end az-content-header-right">
                <a href="{{ route('talent.projects.index') }}" class="btn btn-outline-primary">
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
        <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4">
                <form action="{{ route('talent.projects.update', $project->id) }}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="row g-4">
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Project Title</label>
                            <input type="text" name="title" class="form-control" value="{{ $project->title }}" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Project Category</label>
                            <input type="text" name="category" class="form-control" value="{{ $project->category }}" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Budget</label>
                            <input type="text" name="budget" class="form-control" value="{{ $project->budget }}" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Location</label>
                            <input type="text" name="location" class="form-control" value="{{ $project->location }}">
                        </div>

                        <div class="col-12 ql-wrapper ql-wrapper-demo">
                            <label class="form-label fw-semibold">Project Description</label>
                            <textarea name="description" id="quillEditor" rows="6" class="form-control">{{ old('description', $project->description ?? '') }}</textarea>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
                                <option value="">Select Status</option>
                                <option value="pending" {{ $project->status == 'pending' ? 'selected' : '' }}>Pending</option>
                                <option value="approved" {{ $project->status == 'approved' ? 'selected' : '' }}>Approved</option>
                                <option value="closed" {{ $project->status == 'closed' ? 'selected' : '' }}>Closed</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Verified</label>
                            <select name="verified" class="form-select">
                                <option value="">Select Verification Status</option>
                                <option value="1" {{ $project->verified ? 'selected' : '' }}>Verified</option>
                                <option value="0" {{ !$project->verified ? 'selected' : '' }}>Not Verified</option>
                            </select>
                        </div>

                        <div class="mt-4 text-end">
                            <button type="submit" class="btn btn-primary px-4 py-2">
                                <i class="bi bi-save"></i> Publish project
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection