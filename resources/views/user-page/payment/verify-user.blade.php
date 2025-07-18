@extends('layouts.guest')

@section('content')
<div class="container mt-5">
    <h4>Enter your email to access the video</h4>

    @if(session('error'))
        <div class="alert alert-danger">{{ session('error') }}</div>
    @endif

    <form action="{{ route('video.verifyEmail') }}" method="POST">
        @csrf
        <input type="hidden" name="story_id" value="{{ $story_id }}">
        <input type="hidden" name="video_id" value="{{ $video_id }}">

        <div class="mb-3">
            <label for="email" class="form-label">Your Email Address</label>
            <input type="email" class="form-control" name="email" required>
        </div>

        <button type="submit" class="btn btn-primary">Continue</button>
    </form>
</div>
@endsection
