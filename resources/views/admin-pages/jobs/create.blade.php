@extends('layouts.app')
@section('title', 'Create New Job')

@section('content')
<div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Post a New Job</h2>
        <a href="{{ route('admin.jobs.index') }}" class="btn btn-outline-primary rounded-pill">
            <i class="bi bi-arrow-left"></i> Back
        </a>
    </div>

    <div class="card border-0 shadow-lg rounded-4">
        <div class="card-body p-4">
            <form action="{{ route('admin.jobs.store') }}" method="POST">
                @csrf
                <div class="row g-4">
                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Job Title</label>
                        <input type="text" name="title" class="form-control rounded-pill" value="{{ old('title') }}" required>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Category</label>
                        <select name="category_id" class="form-select rounded-pill" required>
                            <option value="">Select Category</option>
                            @foreach($categories as $category)
                                <option value="{{ $category->id }}">
                                    {{ $category->name }}
                                </option>
                            @endforeach
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Job Type</label>
                        <select name="type" class="form-select rounded-pill">
                            <option value="">Select Type</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Contract</option>
                            <option>Internship</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Experience Level</label>
                        <select name="experience_level" class="form-select rounded-pill">
                            <option value="">Select Level</option>
                            <option>Junior</option>
                            <option>Mid</option>
                            <option>Senior</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Location</label>
                        <input type="text" name="location" class="form-control rounded-pill" value="{{ old('location') }}">
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Salary Range</label>
                        <input type="text" name="salary_range" class="form-control rounded-pill" placeholder="e.g. 50000 - 80000" value="{{ old('salary_range') }}">
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-semibold">Required Skills</label>
                        <input type="text" name="skills" class="form-control rounded-pill" placeholder="e.g. PHP, Laravel, React" value="{{ old('skills') }}">
                    </div>

                    <div class="col-12">
                        <label class="form-label fw-semibold">Job Description</label>
                        <textarea name="description" rows="6" class="form-control rounded-4">{{ old('description') }}</textarea>
                    </div>
                </div>

                <div class="mt-4 text-end">
                    <button type="submit" class="btn btn-primary rounded-pill px-4 py-2">
                        <i class="bi bi-save"></i> Publish Job
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
