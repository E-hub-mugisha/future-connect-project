@extends('layouts.guest')
@section('title', $course->title)

@section('content')

<script src="https://checkout.flutterwave.com/v3.js"></script>



{{-- Google Fonts: Syne for headings --}}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap" rel="stylesheet">

<div class="page-content content cs-page">
    <div class="container">
        <div class="row g-4">

            {{-- ── Main Column ───────────────────────────────────── --}}
            <div class="col-lg-8">
                <div class="cs-card p-4">

                    {{-- Video --}}
                    <div class="cs-video-wrap mb-4">
                        @if($course->is_free && $course->lessons->isNotEmpty() && $course->lessons->first()->video)
                            <div class="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast($course->lessons->first()->video, 'v=') }}?autoplay=1&mute=1&playsinline=1"
                                    title="{{ $course->lessons->first()->title }}"
                                    allow="autoplay; encrypted-media" allowfullscreen>
                                </iframe>
                            </div>
                        @elseif($course->video)
                            <div class="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast($course->video, 'v=') }}"
                                    title="{{ $course->title }}"
                                    allow="autoplay; encrypted-media" allowfullscreen>
                                </iframe>
                            </div>
                        @else
                            <img src="{{ asset('images/thumbnails/'.$course->thumbnail) }}"
                                 class="img-fluid w-100" style="border-radius: var(--radius-md);"
                                 alt="{{ $course->title }}">
                        @endif
                    </div>

                    {{-- Tabs nav --}}
                    <div class="cs-tabs">
                        <button class="cs-tab-link active" data-target="description">Description</button>
                        <button class="cs-tab-link" data-target="lesson">Course Lessons</button>
                        <button class="cs-tab-link" data-target="review">
                            Reviews
                            <span style="background:var(--accent-dim);color:var(--accent);font-size:.7rem;padding:1px 7px;border-radius:50px;margin-left:5px;">
                                {{ $course->feedback->count() }}
                            </span>
                        </button>
                    </div>

                    {{-- Tab panels --}}
                    <div>

                        {{-- Description --}}
                        <div class="tab-pane active show" id="description">
                            <p class="cs-section-title">About this course</p>
                            <p style="color:var(--text-secondary);line-height:1.8;font-size:.93rem;">
                                {{ $course->description }}
                            </p>
                        </div>

                        {{-- Lessons --}}
                        <div class="tab-pane" id="lesson">
                            <div class="cs-lessons-header">
                                <p class="cs-section-title mb-0">Course Lessons</p>
                                @if($course->lessons->count() > 0)
                                    <span class="cs-lessons-badge">{{ $course->lessons->count() }} Lessons</span>
                                @endif
                            </div>

                            @if($course->lessons->count() > 0)
                                <ul class="cs-lesson-list">
                                    @foreach($course->lessons as $key => $lesson)
                                    <li class="cs-lesson-item">
                                        <div class="cs-lesson-left">
                                            <div class="cs-lesson-num">{{ $key + 1 }}</div>
                                            <div>
                                                <div class="cs-lesson-title">{{ $lesson->title ?? 'Untitled Lesson' }}</div>
                                                @if($lesson->duration)
                                                    <div class="cs-lesson-meta">
                                                        <i class="fa-regular fa-clock me-1"></i>{{ $lesson->duration }}
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="cs-lesson-right">
                                            @if($lesson->video_url)
                                                <span class="cs-type-badge video"><i class="fa-solid fa-play me-1"></i>Video</span>
                                            @else
                                                <span class="cs-type-badge text"><i class="fa-solid fa-file-lines me-1"></i>Text</span>
                                            @endif
                                            <button class="cs-preview-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#lessonModal{{ $lesson->id }}">
                                                <i class="fa-solid fa-eye me-1"></i> Preview
                                            </button>
                                        </div>
                                    </li>
                                    @endforeach
                                </ul>
                            @else
                                <div class="cs-empty">
                                    <i class="fa-solid fa-book-open"></i>
                                    <h5 style="color:var(--text-secondary);margin-bottom:.5rem;">No Lessons Yet</h5>
                                    <p style="font-size:.88rem;">Lessons haven't been added yet. Check back soon!</p>
                                </div>
                            @endif
                        </div>

                        {{-- Reviews --}}
                        <div class="tab-pane" id="review">
                            <p class="cs-section-title">Reviews ({{ $course->feedback->count() }})</p>

                            @forelse($course->feedback as $feedback)
                            <div class="cs-review-item">
                                <div class="d-flex align-items-start gap-3">
                                    <img src="{{ $feedback->user->profile_photo ? asset('uploads/'.$feedback->user->profile_photo) : asset('assets/img/user/profile.jpg') }}"
                                         alt="{{ $feedback->user->name }}" class="cs-reviewer-avatar">
                                    <div style="flex:1;">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <span style="font-weight:700;color:var(--text-primary);font-size:.92rem;">{{ $feedback->user->name }}</span>
                                            <span style="font-size:.75rem;color:var(--text-muted);">{{ $feedback->created_at->diffForHumans() }}</span>
                                        </div>
                                        <div class="cs-stars my-1">
                                            @for($i=1;$i<=5;$i++)
                                                <i class="fa-solid fa-star{{ $i <= $feedback->rating ? ' filled' : '' }}"></i>
                                            @endfor
                                            <span style="font-size:.75rem;color:var(--text-muted);margin-left:4px;">{{ $feedback->rating }}.0</span>
                                        </div>
                                        <p style="font-size:.88rem;color:var(--text-secondary);line-height:1.6;margin:0;">{{ $feedback->comment }}</p>
                                    </div>
                                </div>
                            </div>
                            @empty
                            <div class="cs-empty">
                                <i class="fa-solid fa-comment-slash"></i>
                                <p>No reviews yet. Be the first to leave one!</p>
                            </div>
                            @endforelse

                            {{-- Review Form --}}
                            <div class="cs-review-form-card mt-4">
                                <p class="cs-section-title">Leave a Review</p>
                                @auth
                                    @if(session('success'))
                                        <div class="cs-alert-success">{{ session('success') }}</div>
                                    @endif
                                    <form action="{{ route('courses.review', $course->id) }}" method="POST">
                                        @csrf
                                        <div class="mb-3">
                                            <label class="form-label" style="color:var(--text-secondary);font-size:.85rem;font-weight:600;">Rating</label>
                                            <select name="rating" class="form-select cs-form-select" required>
                                                <option value="">-- Select Rating --</option>
                                                @for($i = 1; $i <= 5; $i++)
                                                    <option value="{{ $i }}">{{ $i }} Star{{ $i > 1 ? 's' : '' }}</option>
                                                @endfor
                                            </select>
                                            @error('rating')<small class="text-danger">{{ $message }}</small>@enderror
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" style="color:var(--text-secondary);font-size:.85rem;font-weight:600;">Comment</label>
                                            <textarea name="comment" rows="4" class="form-control cs-form-control"
                                                      placeholder="Share your experience with this course..."></textarea>
                                            @error('comment')<small class="text-danger">{{ $message }}</small>@enderror
                                        </div>
                                        <button type="submit" class="cs-btn-primary" style="width:auto;padding:.7rem 2rem;display:inline-block;">
                                            Submit Review
                                        </button>
                                    </form>
                                @else
                                    <p class="cs-login-prompt"><a href="{{ route('login') }}">Log in</a> to leave a review.</p>
                                @endauth
                            </div>
                        </div>

                    </div>{{-- /Tab panels --}}
                </div>{{-- /cs-card --}}
            </div>{{-- /col-lg-8 --}}

            {{-- ── Sidebar ────────────────────────────────────────── --}}
            <div class="col-lg-4">
                <div class="cs-sidebar-card">

                    {{-- Top section --}}
                    <div class="cs-sidebar-top">
                        <h2 class="cs-course-title">{{ $course->title }}</h2>

                        {{-- Meta pills --}}
                        <div style="margin-bottom:.75rem;">
                            <span class="cs-meta-pill">
                                <i class="fa-solid fa-star" style="color:#f5a623;font-size:.75rem;"></i>
                                {{ number_format($course->feedback->avg('rating') ?? 0, 1) }}
                            </span>
                            <span class="cs-meta-pill">
                                <i class="fa-solid fa-comment-dots"></i>
                                {{ $course->feedback->count() }} reviews
                            </span>
                            <span class="cs-meta-pill">
                                <i class="fa-solid fa-tag"></i>
                                {{ $course->category->name }}
                            </span>
                            <span class="cs-meta-pill">
                                <i class="fa-solid fa-heart" style="color:#e74c3c;"></i>
                                {{ $course->likes_count ?? 0 }} likes
                            </span>
                            <span class="cs-meta-pill">
                                <i class="fa-solid fa-calendar"></i>
                                {{ $course->created_at ? $course->created_at->diffForHumans() : '' }}
                            </span>
                        </div>

                        {{-- Price --}}
                        <div class="cs-price-row">
                            @if($course->is_free)
                                <span class="cs-price" style="color:#5ab8d4;">Free</span>
                                <span class="cs-price-label">No payment required</span>
                            @else
                                <span class="cs-price">${{ number_format($course->price, 2) }}</span>
                                <span class="cs-price-label">one-time payment</span>
                            @endif
                        </div>
                    </div>

                    {{-- Author strip --}}
                    <div class="cs-author-strip">
                        <img src="{{ $course->talent->image ? asset('image/talents/'.$course->talent->image) : asset('assets/img/user/profile.jpg') }}"
                             alt="Author" class="cs-author-avatar">
                        <div>
                            <div class="cs-author-name">
                                {{ $course->talent->name }}
                                <span style="background:var(--accent-dim);color:var(--accent);font-size:.68rem;padding:2px 8px;border-radius:50px;margin-left:6px;font-weight:700;">
                                    <span class="cs-status-dot"></span>{{ ucfirst($course->talent->status) }}
                                </span>
                            </div>
                            <div class="cs-author-meta">
                                <i class="fa-solid fa-star" style="color:#f5a623;font-size:.7rem;"></i>
                                {{ $course->talent->rating }} &nbsp;·&nbsp; {{ $course->talent->rating_count }} ratings
                            </div>
                        </div>
                    </div>

                    {{-- Action buttons --}}
                    <div class="cs-sidebar-actions">
                        @if($course->is_free)
                            <a href="#enrollModal" class="cs-btn-primary" data-bs-toggle="modal">
                                <i class="fa-solid fa-bolt me-1"></i> Enroll for Free
                            </a>
                        @else
                            <a href="#paymentModal" class="cs-btn-primary" data-bs-toggle="modal">
                                <i class="fa-solid fa-lock-open me-1"></i>
                                Enroll · ${{ number_format($course->price, 2) }}
                            </a>
                        @endif
                        <a href="{{ route('user.talent.details', $course->talent->id) }}" class="cs-btn-outline">
                            View Author Profile
                        </a>
                    </div>

                    {{-- Share --}}
                    <div class="cs-share-row">
                        <span>Share</span>
                        @foreach(['facebook','twitter','instagram','linkedin','whatsapp'] as $social)
                            <a href="javascript:void(0);" class="cs-share-icon">
                                <i class="fa-brands fa-{{ $social }}"></i>
                            </a>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>

        {{-- ── Related Courses ────────────────────────────────────── --}}
        <div class="cs-related-section">
            <h3 class="cs-related-title">Related Courses</h3>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                @forelse($relatedCourses as $rc)
                <div class="col">
                    <div class="cs-course-card h-100">
                        <a href="{{ route('user.courses.show', $rc->slug) }}">
                            <img src="{{ asset('image/thumbnails/'.$rc->thumbnail) }}"
                                 class="cs-course-thumb"
                                 alt="{{ $rc->title }}">
                        </a>
                        <div class="cs-course-body">
                            <a href="{{ route('user.courses', ['category' => $rc->category->slug]) }}" class="cs-cat-tag">
                                {{ $rc->category->name }}
                            </a>
                            <a href="{{ route('user.courses.show', $rc->slug) }}" class="d-block cs-course-name">
                                {{ $rc->title }}
                            </a>
                            <div style="display:flex;align-items:center;gap:8px;margin-bottom:.5rem;">
                                <img src="{{ $rc->talent->image ? asset('image/talents/'.$rc->talent->image) : asset('assets/img/user/profile.jpg') }}"
                                     style="width:24px;height:24px;border-radius:50%;object-fit:cover;"
                                     alt="">
                                <span style="font-size:.78rem;color:var(--text-muted);">{{ $rc->talent->name ?? 'Unknown' }}</span>
                            </div>
                            <div class="cs-course-foot">
                                <span class="cs-course-price {{ $rc->is_free ? 'free' : '' }}">
                                    {{ $rc->is_free ? 'Free' : '$'.number_format($rc->price, 2) }}
                                </span>
                                <a href="{{ route('user.courses.show', $rc->slug) }}"
                                   style="font-size:.78rem;color:var(--accent);text-decoration:none;font-weight:700;">
                                    View Details →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                @empty
                <div class="col-12">
                    <p style="color:var(--text-muted);">No related courses found.</p>
                </div>
                @endforelse
            </div>
        </div>

    </div>{{-- /container --}}
</div>{{-- /cs-page --}}

{{-- ══ MODALS ══════════════════════════════════════════════════════ --}}

{{-- Enroll Modal --}}
<div class="modal fade cs-pay-modal" id="enrollModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title">Enroll in {{ $course->title }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body" style="color:var(--text-secondary);font-size:.9rem;padding:1.5rem;">
                <p>You're about to enroll in this free course. Ready to start learning?</p>
            </div>
            <div class="modal-footer border-0" style="padding:1rem 1.5rem;">
                <form action="{{ route('user.courses.enroll', $course->id) }}" method="POST">
                    @csrf
                    <button type="submit" class="cs-btn-primary" style="width:auto;padding:.7rem 1.75rem;display:inline-block;">
                        <i class="fa-solid fa-bolt me-1"></i> Yes, Enroll Me
                    </button>
                </form>
                <button type="button" class="cs-btn-outline"
                        style="width:auto;padding:.65rem 1.25rem;display:inline-block;"
                        data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>

{{-- Payment Modal --}}
<div class="modal fade cs-pay-modal" id="paymentModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title">Complete Payment</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body" style="padding:1.5rem;">
                <div style="background:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--radius-md);padding:1.25rem;margin-bottom:1rem;">
                    <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:.25rem;">Course</div>
                    <div style="font-weight:700;color:var(--text-primary);">{{ $course->title }}</div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;">
                    <span style="color:var(--text-secondary);font-size:.9rem;">Total Due</span>
                    <span style="font-size:1.5rem;font-weight:900;color:var(--accent);">${{ number_format($course->price, 2) }}</span>
                </div>
            </div>
            <div class="modal-footer border-0" style="padding:1rem 1.5rem;gap:10px;">
                <form action="{{ route('user.courses.pay', $course->id) }}" method="POST">
                    @csrf
                    <button type="button" class="cs-btn-primary" id="payBtn"
                            style="width:auto;padding:.75rem 2rem;display:inline-flex;align-items:center;gap:8px;">
                        <span id="payBtnText"><i class="fa fa-lock-open me-1"></i> Pay & Enroll</span>
                        <span id="payBtnSpinner" class="spinner-border spinner-border-sm d-none" role="status"></span>
                    </button>
                </form>
                <button type="button" class="cs-btn-outline"
                        style="width:auto;padding:.7rem 1.25rem;display:inline-block;"
                        data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>

{{-- Lesson Modals --}}
@foreach($course->lessons as $key => $lesson)
<div class="modal fade cs-modal" id="lessonModal{{ $lesson->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <div style="font-size:.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;">
                        Lesson {{ $key + 1 }}
                    </div>
                    <h5 class="modal-title">{{ $lesson->title ?? 'Untitled Lesson' }}</h5>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                @if($lesson->video_url)
                    <div class="ratio ratio-16x9 mb-3" style="border-radius:var(--radius-md);overflow:hidden;">
                        <iframe
                            src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast(\Illuminate\Support\Str::before($lesson->video_url, '&'), 'v=') }}?autoplay=0&playsinline=1"
                            title="{{ $lesson->title ?? 'Lesson Video' }}"
                            allowfullscreen>
                        </iframe>
                    </div>
                @else
                    <div style="background:var(--bg-elevated);border:1px dashed var(--border);border-radius:var(--radius-md);padding:2.5rem;text-align:center;margin-bottom:1rem;">
                        <i class="fa-solid fa-video-slash" style="font-size:2rem;color:var(--text-muted);margin-bottom:.75rem;display:block;"></i>
                        <span style="color:var(--text-muted);font-size:.88rem;">No video available for this lesson.</span>
                    </div>
                @endif
                @if($lesson->description)
                    <div class="cs-lesson-desc">{{ $lesson->description }}</div>
                @endif
            </div>
            <div class="modal-footer" style="justify-content:space-between;">
                @if($lesson->duration)
                    <span style="font-size:.8rem;color:var(--text-muted);">
                        <i class="fa-regular fa-clock me-1"></i>{{ $lesson->duration }}
                    </span>
                @endif
                <button type="button" class="cs-preview-btn" data-bs-dismiss="modal">
                    <i class="fa-solid fa-xmark me-1"></i> Close
                </button>
            </div>
        </div>
    </div>
</div>
@endforeach

{{-- ══ SCRIPTS ══════════════════════════════════════════════════════ --}}
<script>
/* ── Tab Switching ───────────────────────────────────────── */
document.querySelectorAll('.cs-tab-link').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cs-tab-link').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active','show'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active','show');
    });
});

/* ── Flutterwave Payment ──────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
    const payBtn = document.getElementById("payBtn");
    if (!payBtn) return;

    payBtn.addEventListener("click", function () {
        const payBtnText = document.getElementById("payBtnText");
        const payBtnSpinner = document.getElementById("payBtnSpinner");

        payBtnText.textContent = "Processing…";
        payBtnSpinner.classList.remove("d-none");
        payBtn.disabled = true;

        const userEmail  = "{{ auth()->user()->email ?? 'guest@example.com' }}";
        const userName   = "{{ auth()->user()->name ?? 'Guest' }}";
        const courseId   = "{{ $course->id }}";
        const coursePrice= "{{ $course->price }}";
        const txRef      = "course-" + courseId + "-" + Date.now();

        FlutterwaveCheckout({
            public_key: "{{ env('FLW_PUBLIC_KEY') }}",
            tx_ref: txRef,
            amount: coursePrice,
            currency: "RWF",
            payment_options: "card, mobilemoneyrwanda",
            customer: { email: userEmail, name: userName },
            callback: function (data) {
                if (data.status === "successful" || data.status === "completed") {
                    window.location.href = `/course/payment/callback?tx_ref=${data.tx_ref}&course_id=${courseId}&status=${data.status}`;
                } else {
                    alert("Payment not successful. Please try again.");
                    resetBtn();
                }
            },
            onclose: function () { resetBtn(); },
            customizations: {
                title: "{{ $course->title }}",
                description: "Pay to enroll in this course",
                logo: "{{ asset('logo.png') }}"
            }
        });

        function resetBtn() {
            payBtnText.innerHTML = '<i class="fa fa-lock-open me-1"></i> Pay & Enroll';
            payBtnSpinner.classList.add("d-none");
            payBtn.disabled = false;
        }
    });
});
</script>

@endsection