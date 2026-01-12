@extends('layouts.talents')
@section('title', $course->title)

@section('content')
<div class="container py-4">
    <div class="az-content-body az-content-body-profile">
        <!-- NAV TABS -->
        <ul class="nav nav-tabs az-nav-line mb-4 gap-3" id="courseTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="overview-tab" data-bs-toggle="tab" href="#overview" role="tab">Course Overview</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab">Reviews</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="details-tab" data-bs-toggle="tab" href="#details" role="tab">Details</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="lessons-tab" data-bs-toggle="tab" href="#lessons" role="tab">Lessons</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="author-tab" data-bs-toggle="tab" href="#author" role="tab">Author</a>
            </li>
        </ul>

        <div class="tab-content" id="courseTabContent">
            <div class="tab-pane fade show active" id="overview" role="tabpanel">

                <!-- Header Buttons -->
                <div class="d-flex justify-content-end align-items-center mb-4 gap-2">
                    <a href="{{ route('talent.courses.edit', $course->id) }}" class="btn btn-info">
                        <em class="icon ni ni-edit"></em> Edit Course
                    </a>
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addLessonModal">Add Lesson</button>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addReviewModal">
                        <em class="icon ni ni-chat"></em> Add Review
                    </button>
                    <a href="{{ route('talent.courses.index') }}" class="btn btn-outline-primary">
                        <em class="icon ni ni-arrow-left"></em> Back to Courses
                    </a>
                </div>

                <div class="row g-4">
                    <!-- Course Preview Section -->
                    <div>
                        @php $firstLesson = $course->lessons->first(); @endphp

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

                    <div>
                        <h3 class="fw-semibold mb-3">{{ $course->title }}</h3>

                        <p class="text-muted mb-0">Category:
                            <span class="fw-semibold text-primary">{{ $course->category->name ?? '-' }}</span>
                        </p>

                        <p class="text-muted">{{ $course->description }}</p>

                        <div class="d-flex align-items-center mb-3 gap-3">
                            <span class="text-dark">{{ ucfirst($course->level ?? 'Beginner') }}</span>
                            <span class="text-{{ $course->is_free ? 'success' : 'primary' }}">
                                {{ $course->is_free ? 'Free' : '$' . number_format($course->price, 2) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="reviews" role="tabpanel">
                <h4 class="fw-bold mb-3">Student Feedback</h4>
                <div>
                    <div>
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

            <div class="tab-pane fade" id="details" role="tabpanel">
                <h4 class="fw-bold mb-3">Course Details</h4>
                <div>
                    <p class="text-muted">{{ $course->description }}</p>

                    <div class="d-flex flex-wrap gap-3">
                        <span class="badge bg-light text-dark">Status: {{ ucfirst($course->status) }}</span>
                        <span class="badge bg-light text-dark">Created: {{ $course->created_at ? $course->created_at->diffForHumans() : '' }}</span>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="lessons" role="tabpanel">
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
                        <div>
                            <button class="btn btn-sm btn-info me-2" data-bs-toggle="modal" data-bs-target="#editLessonModal{{$lesson->id}}">
                                Edit
                            </button>

                            <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteLessonModal{{$lesson->id}}">
                                Delete
                            </button>
                        </div>
                    </div>
                    @endforeach
                </div>
                @else
                <p>No lessons available for this course.</p>
                @endif
            </div>

            <div class="tab-pane fade" id="author" role="tabpanel">
                <div class="card p-4 shadow-sm border-0 rounded-4">
                    <h4 class="fw-bold mb-3">Course Author</h4>

                    <div class="mb-3">
                        <strong>Name:</strong> {{ $course->talent->name }}
                    </div>
                    <div class="mb-3">
                        <strong>Email:</strong> {{ $course->talent->email }}
                    </div>
                    <div class="mb-3">
                        <strong>Phone:</strong> {{ $course->talent->phone }}
                    </div>
                </div>
            </div>

        </div><!-- END TAB CONTENT -->

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
        <form action="{{ route('talent.courses.lessons.store') }}" method="POST" enctype="multipart/form-data">
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

<!-- edit lesson modal -->
@foreach($course->lessons as $lesson)
<div class="modal fade" id="editLessonModal{{$lesson->id}}" tabindex="-1" aria-labelledby="editLessonModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form action="{{ route('talent.courses.lessons.update', $lesson->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editLessonModalLabel">Edit Lesson</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="lesson_id" id="edit_lesson_id">
                    <div class="mb-3">
                        <label for="edit_title" class="form-label">Lesson Title</label>
                        <input type="text" name="title" id="edit_title" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="edit_description" class="form-label">Lesson Description</label>
                        <textarea name="content" id="edit_description" class="form-control" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="edit_video_url" class="form-label">Lesson Video URL</label>
                        <input type="text" name="video_url" id="edit_video_url" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="edit_order" class="form-label">Lesson Order</label>
                        <input type="number" name="order" id="edit_order" class="form-control" min="1">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Update Lesson</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endforeach

<!-- delete lesson modal -->
@foreach($course->lessons as $lesson)
<div class="modal fade" id="deleteLessonModal{{$lesson->id}}" tabindex="-1" aria-labelledby="deleteLessonModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form action="{{ route('talent.courses.lessons.destroy', $lesson->id) }}" method="POST">
            @csrf
            @method('DELETE')
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteLessonModalLabel">Delete Lesson</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this lesson?</p>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-danger">Delete</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endforeach

@endsection