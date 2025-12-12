@extends('layouts.talents')
@section('title', 'Create New project')

@section('content')

<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="az-content-header d-flex justify-content-between align-items-center">
            <h2 class="az-content-title">Post a New project</h2>
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
        <div class="card border-0 shadow-lg">
            <div class="card-body p-4">
                <form action="{{ route('talent.projects.store') }}" method="POST">
                    @csrf
                    <div class="row g-4">
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">project Title</label>
                            <input type="text" name="title" class="form-control" value="{{ old('title') }}" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">project category</label>
                            <input type="text" name="category" class="form-control" value="{{ old('category') }}" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Budget</label>
                            <input type="text" name="budget" class="form-control" value="{{ old('budget') }}" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Location</label>
                            <input type="text" name="location" class="form-control" value="{{ old('location') }}">
                        </div>

                        <div class="col-12 ql-wrapper ql-wrapper-demo">
                            <label class="form-label fw-semibold">project Description</label>
                            <textarea name="description" id="quillEditor" rows="6" class="form-control">{{ old('description') }}</textarea>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
                                <option value="">Select Status</option>
                                <option value="pending" {{ old('status') == 'pending' ? 'selected' : '' }}>pending</option>
                                <option value="approved" {{ old('status') == 'approved' ? 'selected' : '' }}>approved</option>
                                <option value="closed" {{ old('status') == 'closed' ? 'selected' : '' }}>closed</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">verified</label>
                            <select name="verified" class="form-select">
                                <option value="">Select Verification Status</option>
                                <option value="1" {{ old('verified') == '1' ? 'selected' : '' }}>verified</option>
                                <option value="0" {{ old('verified') == '0' ? 'selected' : '' }}>not verified</option>
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