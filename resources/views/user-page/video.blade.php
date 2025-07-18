@extends('layouts.guest')

@section('content')
<div class="container text-center py-5">
    <h3>Now Watching Video #{{ $video_id }}</h3>
    <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/{{ $video_id }}" frameborder="0" allowfullscreen></iframe>
    </div>
</div>
@endsection
