@extends('layouts.guest')

@section('content')
<div class="container mt-5">
    <div class="card shadow-sm">
        <div class="card-body text-center">
            <h2 class="text-success">🎉 Talent Registered Successfully!</h2>
            <p class="mt-3">Thank you for submitting your talent profile. Our team will review the details and get in touch if needed.</p>

            <div class="mt-4">
                <h5>Summary:</h5>
                <ul class="list-unstyled">
                    <li><strong>Name:</strong> {{ session('talent_name') ?? 'N/A' }}</li>
                    <li><strong>Email:</strong> {{ session('talent_email') ?? 'N/A' }}</li>
                    <li><strong>Category:</strong> {{ session('talent_category') ?? 'N/A' }}</li>
                </ul>
            </div>

            <a href="#" class="btn btn-primary mt-4">🏠 Back to Home</a>
        </div>
    </div>
</div>
@endsection
