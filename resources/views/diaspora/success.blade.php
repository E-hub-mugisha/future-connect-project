@extends('layouts.guest')

@section('content')
<div class="container py-5">
    <div class="card shadow-lg border-0 rounded-4 text-center p-5">
        <div class="mb-4">
            <div class="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center" style="width: 100px; height: 100px;">
                <i class="bi bi-check-lg fs-1"></i>
            </div>
        </div>
        <h3 class="fw-bold mb-3">🎉 Account Submitted Successfully!</h3>
        <p class="text-muted mb-4">
            Thank you for registering with <strong>Future Connect</strong>.<br>
            Your account is under verification. You will receive an update via email soon.
        </p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
            <a href="{{ url('/dashboard') }}" class="btn btn-primary px-4 rounded-pill">Go to Dashboard</a>
            <a href="{{ url('/') }}" class="btn btn-outline-secondary px-4 rounded-pill">Return Home</a>
        </div>
    </div>
</div>
@endsection
