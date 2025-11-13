@extends('layouts.app')

@section('content')
<div class="container py-5 text-center">
    <div class="card shadow-lg rounded-4 p-5">
        <div class="mb-4">
            <div class="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center" style="width: 90px; height: 90px;">
                <i class="bi bi-check-lg fs-1"></i>
            </div>
        </div>
        <h3 class="fw-bold mb-3">🎉 Sponsorship Completed!</h3>
        <p class="text-muted mb-4">
            Thank you for supporting <strong>{{ $sponsorship->project->title }}</strong>.<br>
            You can track your impact and receive progress updates from the project.
        </p>
        <a href="{{ route('user.projects.index') }}" class="btn btn-primary btn-lg rounded-pill">View More Projects</a>
    </div>
</div>
@endsection
