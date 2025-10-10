@extends('layouts.app')
@section('title', $course->title)

@section('content')
<div class="container py-4">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 class="fw-bold mb-1">{{ $course->title }}</h2>
                    <p class="text-muted mb-0">Category: <span class="fw-semibold text-primary">{{ $course->category->name ?? '-' }}</span></p>
                </div>
                <a href="{{ route('admin.courses.index') }}" class="btn btn-outline-primary rounded-pill">
                    <em class="icon ni ni-arrow-left"></em> Back to Courses
                </a>
            </div>

            <div class="row g-4">
                <!-- Course Preview Section -->
                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                        @php
                        $firstLesson = $course->lessons->first();
                        @endphp

                        @if($course->is_free && $firstLesson)
                        <video class="w-100" controls autoplay muted loop>
                            <source src="{{ asset('storage/'.$firstLesson->video) }}" type="video/mp4">
                        </video>
                        @else
                        @if($course->video)
                        <video class="w-100 rounded" controls poster="{{ asset('images/thumbnails/'.$course->thumbnail) }}">
                            <source src="{{ $course->video }}" type="video/mp4">
                        </video>
                        @else
                        <img src="{{ asset('images/thumbnails/'.$course->thumbnail) }}" class="w-100 rounded" alt="{{ $course->title }}">
                        @endif
                        @endif
                    </div>
                </div>

                <!-- Course Info -->
                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm rounded-4 p-4">
                        <h3 class="fw-semibold mb-3">{{ $course->title }}</h3>
                        <p class="text-muted">{{ $course->description }}</p>

                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-light text-dark me-2 px-3 py-2">{{ ucfirst($course->level ?? 'Beginner') }}</span>
                            <span class="badge bg-{{ $course->is_free ? 'success' : 'primary' }} px-3 py-2">
                                {{ $course->is_free ? 'Free' : '$' . number_format($course->price, 2) }}
                            </span>
                        </div>

                        <div class="mt-3">
                            <div class="d-flex flex-wrap gap-3">
                                <div>
                                    <span class="text-muted d-block small">Author</span>
                                    <span class="fw-semibold">{{ $course->talent->name }}</span>
                                </div>
                                <div>
                                    <span class="text-muted d-block small">Email</span>
                                    <span class="fw-semibold">{{ $course->talent->email }}</span>
                                </div>
                                <div>
                                    <span class="text-muted d-block small">Contact</span>
                                    <span class="fw-semibold">{{ $course->talent->phone }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <a href="{{ route('admin.courses.edit', $course->id) }}" class="btn btn-dark me-2 mt-4">
                                <em class="icon ni ni-edit"></em> Edit Course
                            </a>
                            <button class="btn btn-success mt-4" data-bs-toggle="modal" data-bs-target="#addLessonModal">Add Lesson</button>
                            <button class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#addReviewModal">
                                <em class="icon ni ni-chat"></em> Add Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Course Lessons --}}
            <div class="row mt-4">
                <div class="col-12">
                    <h4>Course Lessons</h4>
                    @if($course->lessons->count())
                    <div class="list-group">
                        @foreach($course->lessons as $lesson)
                        <div class="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{{ $loop->iteration }}. {{ $lesson->title }}</strong>
                                <p class="mb-0 text-soft">{{ $lesson->description ?? '' }}</p>
                            </div>
                            @if($course->is_free)
                            <video width="150" controls>
                                <source src="{{ asset($lesson->video) }}" type="video/mp4">
                            </video>
                            @else
                            <span class="badge bg-secondary">Premium</span>
                            @endif
                        </div>
                        @endforeach
                    </div>
                    @else
                    <p>No lessons available for this course.</p>
                    @endif
                </div>
            </div>

            <!-- Feedback Section -->
            <div class="mt-5">
                <h4 class="fw-bold mb-3">Student Feedback</h4>
                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-body">
                        @forelse($course->feedback as $feedback)
                        <div class="border-bottom py-3 d-flex align-items-start justify-content-between">
                            <div>
                                <div class="d-flex align-items-center mb-1">
                                    <div class="avatar avatar-sm bg-light me-2">
                                        <em class="icon ni ni-user-alt"></em>
                                    </div>
                                    <strong>{{ $feedback->name }}</strong>
                                    <small class="text-muted ms-2">{{ $feedback->created_at->diffForHumans() }}</small>
                                </div>
                                <p class="mb-1">{{ $feedback->comment }}</p>
                                <div class="text-warning">
                                    @for ($i = 1; $i <= 5; $i++)
                                        <em class="icon ni ni-star{{ $i <= $feedback->rating ? '-fill' : '' }}"></em>
                                        @endfor
                                </div>
                            </div>
                        </div>
                        @empty
                        <p class="text-muted m-3">No feedback available yet.</p>
                        @endforelse
                    </div>
                </div>
            </div>

            <!-- Course Details Section -->
            <div class="mt-5">
                <h4 class="fw-bold mb-3">Course Details</h4>
                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-body">
                        <p class="text-muted">{{ $course->description }}</p>
                        <div class="d-flex flex-wrap gap-3">
                            <span class="badge bg-light text-dark">Status: {{ ucfirst($course->status) }}</span>
                            <span class="badge bg-light text-dark">Created: {{ $course->created_at->format('d M Y') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

{{-- Add Review Modal --}}
<div class="modal fade" id="addReviewModal" tabindex="-1" aria-labelledby="addReviewModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form method="POST" action="{{ route('admin.courses.feedback.store') }}">
            @csrf
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Review</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="course_id" value="{{ $course->id }}">
                    <div class="mb-3">
                        <label>Rating (1-5)</label>
                        <input type="number" name="rating" class="form-control" min="1" max="5" required>
                    </div>
                    <div class="mb-3">
                        <label>Comment</label>
                        <textarea name="comment" class="form-control" rows="3" required></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Submit Review</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </form>
    </div>
</div>

{{-- Add Lesson Modal --}}
<div class="modal fade" id="addLessonModal" tabindex="-1" aria-labelledby="addLessonModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form action="{{ route('admin.courses.lessons.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addLessonModalLabel">Add Lesson to {{ $course->title ?? 'Course' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="course_id" value="{{ $course->id }}">
                    <div class="mb-3">
                        <label for="title" class="form-label">Lesson Title</label>
                        <input type="text" name="title" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Lesson Description</label>
                        <textarea name="content" class="form-control" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="video_url" class="form-label">Lesson Video</label>
                        <input type="text" name="video_url" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="order" class="form-label">Lesson Order</label>
                        <input type="number" name="order" class="form-control" min="1">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Save Lesson</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection