@extends('layouts.user')
@section('title', 'Profile')
@section('content')
<h2>Edit Profile</h2>
<form action="#" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="mb-3">
        <label>Name</label>
        <input type="text" class="form-control" name="name" value="{{ $user->name }}">
    </div>
    <div class="mb-3">
        <label>Bio</label>
        <textarea class="form-control" name="bio">{{ $user->bio }}</textarea>
    </div>
    <div class="mb-3">
        <label>Profile Photo</label>
        <input type="file" class="form-control" name="photo">
    </div>
    <button class="btn btn-primary">Update Profile</button>
</form>
@endsection
