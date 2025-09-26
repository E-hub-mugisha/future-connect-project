@extends('layouts.guest')
@section('title', 'Connection Room')
@section('content')
<div class="container">
    <h2 class="mb-4">Connection Room</h2>
    <div class="row">
        @foreach($talents as $talent)
        <div class="col-md-4 mb-3">
            <div class="card shadow">
                <img src="{{ $talent->image ?? 'default.jpg' }}" class="card-img-top" alt="{{ $talent->name }}">
                <div class="card-body">
                    <h5 class="card-title">{{ $talent->name }}</h5>
                    <p class="card-text">{{ Str::limit($talent->description,80) }}</p>
                    <a href="{{ route('talent.profile.show',$talent->id) }}" class="btn btn-primary">View Profile</a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    {{ $talents->links() }}
</div>
@endsection
