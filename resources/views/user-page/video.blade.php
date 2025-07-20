@extends('layouts.guest')

@section('content')
<div class="container py-5">

    <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
            <h2 class="mb-4">You're Now Watching</h2>
            <div class="card shadow-lg border-0">
                <div class="card-body p-0">
                    <div class="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
                        <iframe class="embed-responsive-item"
                            src="https://www.youtube.com/embed/{{ $video_id }}"
                            allowfullscreen
                            title="YouTube Video Player"
                            style="border-radius: 0.5rem;">
                        </iframe>
                    </div>
                </div>
                <div class="card-footer bg-white text-muted py-3">
                    <h5 class="mb-0">{{ $story->title }}</h5>
                </div>
            </div>
        </div>
        <!-- Comments Sidebar -->
        <div class="col-lg-4">
            <div class="card shadow-sm border-0 h-100 d-flex flex-column">
                <div class="card-header bg-light">
                    <h5 class="mb-0">Comments</h5>
                </div>

                <!-- Scrollable Comments -->
                <div class="card-body p-3 overflow-hidden position-relative" style="height: 300px;">
                    <div class="scrolling-comments">
                        @foreach( $story->comments as $comment )
                        <div class="mb-3 border-bottom pb-2">
                            <strong>{{ $comment->name }}</strong>
                            <p class="mb-1">{{ $comment->comment }}</p>
                            <small class="text-muted">{{ $comment->created_at->diffForHumans() }}</small>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>

        <!-- Static Comment Form -->
        <div class="col-lg-12 mt-4">
            <div class="rounded-3 p-4" style="background: var(--white);">
                <form action="{{ route('story.comment.store') }}" method="POST">
                    @csrf
                    <input type="hidden" name="story_id" value="{{ $story->id }}">

                    <div class="login-heading text-start mb-4">
                        <h5>Leave a comment</h5>
                    </div>

                    <div class="form-wrap form-focus mb-3">
                        <label class="mb-1 fw-medium text-dark">Your Rating <span class="text-primary">*</span></label>

                        <div class="star-rating">
                            <input type="radio" name="rating" id="star5" value="5" required>
                            <label for="star5" class="ti ti-star-filled"></label>

                            <input type="radio" name="rating" id="star4" value="4">
                            <label for="star4" class="ti ti-star-filled"></label>

                            <input type="radio" name="rating" id="star3" value="3">
                            <label for="star3" class="ti ti-star-filled"></label>

                            <input type="radio" name="rating" id="star2" value="2">
                            <label for="star2" class="ti ti-star-filled"></label>

                            <input type="radio" name="rating" id="star1" value="1">
                            <label for="star1" class="ti ti-star-filled"></label>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-6 mb-3">
                            <div class="form-wrap form-focus">
                                <label class="mb-1 fw-medium text-dark">Name <span class="text-primary">*</span></label>
                                <input type="text" name="name" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <div class="form-wrap form-focus">
                                <label class="mb-1 fw-medium text-dark">Email <span class="text-primary">*</span></label>
                                <input type="email" name="email" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-lg-12 mb-3">
                            <div class="form-wrap form-focus">
                                <label class="mb-1 fw-medium text-dark">Write a Review <span class="text-primary">*</span></label>
                                <textarea name="comment" class="form-control text-area" required></textarea>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-primary member-btn">Submit a Review</button>
                </form>
                <div class="card-footer text-muted pt-3">
                    <small class="text-muted">Your comment will be reviewed before being published.</small>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection