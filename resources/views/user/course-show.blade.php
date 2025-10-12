@extends('layouts.user')
@section('title', $course->title)
@section('content')

<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            {{-- Page Header --}}
            <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between g-3">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">Course Details</h3>
                        <div class="nk-block-des text-soft">
                            <p>{{ $course->title ?? 'Untitled Course' }}</p>
                        </div>
                    </div>
                    <div class="nk-block-head-content">
                        <a href="/user/courses" class="btn btn-outline-light bg-white d-none d-sm-inline-flex">
                            <em class="icon ni ni-arrow-left"></em><span>Back</span>
                        </a>
                        <a href="/user/courses" class="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none">
                            <em class="icon ni ni-arrow-left"></em>
                        </a>
                    </div>
                </div>
            </div>

            {{-- Course Main Card --}}
            <div class="nk-block">
                <div class="card card-bordered">
                    <div class="card-inner">

                        {{-- Top Row: Video & Info --}}
                        <div class="row pb-5">

                            {{-- Left Column: Video --}}
                            <div class="col-lg-6 mb-4 mb-lg-0">
                                <div class="product-gallery me-xl-1 me-xxl-5">
                                    @if($course->is_free && $course->lessons->isNotEmpty())
                                        {{-- Free course: autoplay first lesson --}}
                                        <div class="ratio ratio-16x9 rounded-3">
                                            <iframe src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast($course->lessons->first()->video_url, 'v=') }}?autoplay=1&mute=1&playsinline=1"
                                                    title="{{ $course->lessons->first()->title }}"
                                                    allow="autoplay; encrypted-media" allowfullscreen class="rounded-3">
                                            </iframe>
                                        </div>
                                    @elseif($course->video)
                                        {{-- Paid course or intro video --}}
                                        <div class="ratio ratio-16x9 rounded-3">
                                            <iframe src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast($course->video, 'v=') }}?playsinline=1"
                                                    title="{{ $course->title }}"
                                                    allowfullscreen class="rounded-3">
                                            </iframe>
                                        </div>
                                    @else
                                        {{-- Fallback image --}}
                                        <img src="{{ asset($course->thumbnail ?? 'images/default-thumbnail.png') }}" class="img-fluid rounded-3" alt="{{ $course->title }}">
                                    @endif
                                </div>
                            </div>

                            {{-- Right Column: Course Info --}}
                            <div class="col-lg-6">
                                <div class="product-info mt-5 mt-lg-0 me-xxl-5">
                                    <h4 class="product-price text-primary">{{ $course->category->name ?? 'Uncategorized' }}</h4>
                                    <h2 class="product-title">{{ $course->title ?? 'Untitled Course' }}</h2>

                                    {{-- Rating --}}
                                    <div class="product-rating mb-3">
                                        <ul class="rating">
                                            @for($i = 1; $i <= 5; $i++)
                                                <li>
                                                    <em class="icon ni ni-star-fill {{ $i <= round($course->feedback->avg('rating') ?? 0) ? 'filled' : '' }}"></em>
                                                </li>
                                            @endfor
                                        </ul>
                                        <div class="amount">{{ number_format($course->feedback->avg('rating') ?? 0, 1) }} ({{ $course->feedback->count() }} Feedback)</div>
                                    </div>

                                    {{-- Description --}}
                                    <p class="lead text-soft">{{ $course->description ?? 'No description provided.' }}</p>

                                    {{-- Meta Info --}}
                                    <div class="product-meta mb-3">
                                        <ul class="d-flex g-3 gx-5 flex-wrap">
                                            <li>
                                                <div class="fs-14px text-muted">Author</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $course->talent->name ?? 'N/A' }}</div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Email</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $course->talent->email ?? 'N/A' }}</div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Phone</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $course->talent->phone ?? 'N/A' }}</div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Created At</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $course->created_at?->format('d M Y') ?? '-' }}</div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Status</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ ucfirst($course->status ?? 'N/A') }}</div>
                                            </li>
                                            <li>
                                                <div class="fs-14px text-muted">Tags</div>
                                                <div class="fs-16px fw-bold text-secondary">{{ $course->tags ?? '-' }}</div>
                                            </li>
                                        </ul>
                                    </div>

                                    {{-- Actions --}}
                                    <div class="product-meta">
                                        <ul class="d-flex flex-wrap g-2 pt-1">
                                            <li><button class="btn btn-primary">Add Review</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div> {{-- end row --}}

                        <hr class="hr border-light">

                        {{-- Course Feedback --}}
                        <div class="row mt-4">
                            <div class="col-md-10">
                                <div class="card card-bordered">
                                    <h4 class="p-2">Course Feedback</h4>
                                    <div class="card-inner py-3">
                                        @forelse($course->feedback as $comment)
                                        <div class="d-sm-flex align-items-sm-center justify-content-sm-between mb-3 border-bottom pb-2">
                                            <div class="pb-1 pb-sm-0">
                                                <h5 class="title">{{ $comment->comment }}</h5>
                                                <div class="d-flex">
                                                    <p class="m-0 pe-2">by <strong>{{ $comment->name }}</strong></p>
                                                    <span>{{ \Carbon\Carbon::parse($comment->created_at)->diffForHumans() }}</span>
                                                </div>
                                            </div>
                                            <ul class="rating">
                                                @for($i = 1; $i <= 5; $i++)
                                                    <em class="icon ni ni-star-fill {{ $i <= $comment->rating ? 'filled' : '' }}"></em>
                                                @endfor
                                            </ul>
                                        </div>
                                        @empty
                                        <p class="text-muted px-3">No feedback yet.</p>
                                        @endforelse
                                    </div>
                                </div>
                            </div>
                        </div>

                        {{-- Lessons Section --}}
                        <div class="row mt-5">
                            <div class="col-md-12">
                                <div class="card card-bordered">
                                    <div class="card-inner">
                                        <h4 class="p-2">Course Lessons</h4>
                                        @if($course->lessons->count() > 0)
                                        <div class="table-responsive">
                                            <table class="table table-hover align-middle">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Lesson Title</th>
                                                        <th>Duration</th>
                                                        <th>Preview</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach($course->lessons as $key => $lesson)
                                                    <tr>
                                                        <td>{{ $key + 1 }}</td>
                                                        <td>{{ $lesson->title ?? 'Untitled' }}</td>
                                                        <td>{{ $lesson->duration ?? '-' }}</td>
                                                        <td>
                                                            <button class="btn btn-sm btn-primary" data-bs-toggle="modal"
                                                                data-bs-target="#lessonModal{{ $lesson->id }}">
                                                                <em class="icon ni ni-eye"></em> View
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    {{-- Lesson Modal --}}
                                                    <div class="modal fade" id="lessonModal{{ $lesson->id }}" tabindex="-1"
                                                        aria-labelledby="lessonModalLabel{{ $lesson->id }}" aria-hidden="true">
                                                        <div class="modal-dialog modal-lg modal-dialog-centered">
                                                            <div class="modal-content">
                                                                <div class="modal-header bg-light">
                                                                    <h5 class="modal-title" id="lessonModalLabel{{ $lesson->id }}">
                                                                        {{ $lesson->title ?? 'Untitled' }}
                                                                    </h5>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    @if($lesson->video_url)
                                                                    <div class="ratio ratio-16x9 mb-3">
                                                                        <iframe src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast($lesson->video_url, 'v=') }}?autoplay=0&playsinline=1"
                                                                                title="{{ $lesson->title ?? 'Lesson Video' }}"
                                                                                allowfullscreen class="rounded-3">
                                                                        </iframe>
                                                                    </div>
                                                                    @endif
                                                                    <p class="lead text-muted">{{ $lesson->description ?? '' }}</p>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <span class="text-muted">Duration: {{ $lesson->duration ?? '-' }}</span>
                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {{-- End Modal --}}

                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                        @else
                                        <p class="text-muted px-3">No lessons available for this course yet.</p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> {{-- end card-inner --}}
                </div> {{-- end card --}}
            </div> {{-- end nk-block --}}

        </div>
    </div>
</div>

@endsection
