@extends('layouts.app')
@section('title', 'Create New project')

@section('content')
<div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Post a New project</h2>
        <a href="{{ route('admin.projects.index') }}" class="btn btn-outline-primary rounded-pill">
            <i class="bi bi-arrow-left"></i> Back
        </a>
    </div>

    <div class="card border-0 shadow-lg rounded-4">
        <div class="card-body p-4">
            <form action="{{ route('admin.projects.store') }}" method="POST">
                @csrf
                <div class="row g-4">
                    <div class="col-md-6">
                        <label class="form-label fw-semibold">project Title</label>
                        <input type="text" name="title" class="form-control rounded-pill" value="{{ old('title') }}" required>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">project category</label>
                        <input type="text" name="category" class="form-control rounded-pill" value="{{ old('category') }}" required>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Budget</label>
                        <input type="text" name="budget" class="form-control rounded-pill" value="{{ old('budget') }}" required>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Location</label>
                        <input type="text" name="location" class="form-control rounded-pill" value="{{ old('location') }}">
                    </div>

                    <div class="col-12">
                        <label class="form-label fw-semibold">project Description</label>
                        <textarea name="description" rows="6" class="form-control rounded-4">{{ old('description') }}</textarea>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Status</label>
                        <select name="status" class="form-select rounded-pill">
                            <option value="">Select Status</option>
                            <option value="pending" {{ old('status') == 'pending' ? 'selected' : '' }}>pending</option>
                            <option value="approved" {{ old('status') == 'approved' ? 'selected' : '' }}>approved</option>
                            <option value="closed" {{ old('status') == 'closed' ? 'selected' : '' }}>closed</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label fw-semibold">verified</label>
                        <select name="verified" class="form-select rounded-pill">
                            <option value="">Select Verification Status</option>
                            <option value="1" {{ old('verified') == '1' ? 'selected' : '' }}>verified</option>
                            <option value="0" {{ old('verified') == '0' ? 'selected' : '' }}>not verified</option>
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
