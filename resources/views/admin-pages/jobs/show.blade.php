@extends('layouts.app')
@section('title', 'Job Details: ' . $job->title)

@section('content')
<div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Job Details</h2>
        <a href="{{ route('admin.jobs.index') }}" class="btn btn-outline-primary rounded-pill">
            <i class="bi bi-arrow-left"></i> Back
        </a>
    </div>

    <div class="card border-0 shadow-lg rounded-4">
        <div class="card-body p-4">
            <h3 class="fw-bold mb-3">{{ $job->title }}</h3>
            <h5 class="mb-1">Company: {{ $job->company->name ?? 'N/A' }}</h5>
            <h6 class="mb-3">Category: {{ $job->category->name ?? 'N/A' }}</h6>
            <p class="text-muted mb-1"><i class="bi bi-geo-alt"></i> {{ $job->location ?? 'Not specified' }}</p>
            <p class="text-muted mb-3"><i class="bi bi-briefcase"></i> {{ $job->type ?? 'N/A' }} • {{ $job->experience_level ?? 'N/A' }}</p>
            <p><strong>Salary:</strong> {{ $job->salary_range ?? 'N/A' }}</p>

            <hr>

            <h5 class="fw-semibold mt-4 mb-3">Job Description</h5>
            <p>{{ $job->description }}</p>

            @if($job->skills)
                <h6 class="fw-semibold mt-4">Skills Required:</h6>
                @foreach(explode(',', $job->skills) as $skill)
                    <span class="badge bg-primary-subtle text-primary rounded-pill me-1">{{ trim($skill) }}</span>
                @endforeach
            @endif

            <div class="mt-5">
                <a href="{{ route('admin.jobs.applications', $job->id) }}" class="btn btn-outline-success rounded-pill px-4 py-2">
                    <i class="bi bi-people"></i> View Applications
                </a>
            </div>
        </div>
    </div>
</div>
@endsection
