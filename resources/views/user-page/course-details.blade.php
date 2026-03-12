@extends('layouts.guest')
@section('title', $course->title)

@section('content')

<!-- Flutterwave Script -->
<script src="https://checkout.flutterwave.com/v3.js"></script>

<style>
	.talent-story-info {
		background: #011E34;
		color: #fff;
		border-radius: 10px;
		padding: 20px;
		margin-bottom: 20px;
	}

	.postLists {
		display: flex;
		flex-direction: column;
		border: 1px solid #afafaf;
		border-radius: 3px;
		/* background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4); */
		/* box-shadow: 0 1em 1em #1f2d3d26; */
		/* text-shadow: 0 1px #fff; */
		transition: .25s;
		margin-bottom: 1.5rem;
	}
</style>

<style>
	.course-list-group-item {
		position: relative;
		display: block;
		padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
		color: var(--bs-list-group-color);
		text-decoration: none;
		/* background-color: var(--bs-list-group-bg); */
		/* border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color); */
	}
</style>
<div class="page-content content">
	<div class="container">

		<div class="row">
			<!-- Course Details -->
			<div class="col-lg-8">
				<div class="postLists p-4">
					<div class="service-card w-100 mb-4">
						<div class="service-video-wrap text-center">
							<div class="video-wrapper position-relative overflow-hidden rounded-4 shadow" style="width: 100%;">
								@if($course->is_free && $course->lessons->isNotEmpty() && $course->lessons->first()->video)
								<div class="ratio ratio-16x9">
									<iframe
										src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast($course->lessons->first()->video, 'v=') }}?autoplay=1&mute=1&playsinline=1"
										title="{{ $course->lessons->first()->title }}"
										allow="autoplay; encrypted-media"
										allowfullscreen
										class="rounded-3">
									</iframe>
								</div>
								@elseif($course->video)
								<div class="ratio ratio-16x9">
									<iframe
										src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast($course->video, 'v=') }}"
										title="{{ $course->title }}"
										allow="autoplay; encrypted-media"
										allowfullscreen
										class="rounded-3">
									</iframe>
								</div>
								@else
								<img
									src="{{ asset('images/thumbnails/'.$course->thumbnail) }}"
									class="img-fluid w-100 rounded-3 shadow-sm"
									alt="{{ $course->title }}">
								@endif
							</div>

						</div>
					</div>

					<div class="listing-tab">
						<div class="listing-slider">
							<ul class="nav nav-tabs" role="tablist">
								<li class="nav-item" role="presentation">
									<a href="javascript:void(0);" class="nav-link active" data-bs-toggle="tab" data-bs-target="#description" aria-selected="true" role="tab">
										Description
									</a>
								</li>
								<li>
									<a href="javascript:void(0);" class="nav-link" data-bs-toggle="tab" data-bs-target="#lesson" aria-selected="false" role="tab" tabindex="-1">
										Course Lessons
									</a>
								</li>
								<li>
									<a href="javascript:void(0);" class="nav-link" data-bs-toggle="tab" data-bs-target="#review" aria-selected="false" role="tab" tabindex="-1">
										Reviews
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="tab-content">

						<div class="tab-pane fade active show" id="description" role="tabpanel">
							<!-- About Gigs -->
							<div class="service-wrap">
								<h3 style="color: #afafaf;">About </h3>
								<p>
									{{ $course->description }}
								</p>
							</div>
							<!-- /About Gigs -->
						</div>
						<div class="tab-pane fade" id="lesson" role="tabpanel">
							<!-- Lessons Section -->
							<div class="service-wrap course-lessons">

								<div class="lessons-header mb-4">
									<h3 class="lessons-title" style="color: #afafaf;">
										<i class="fa-solid fa-book-open me-2"></i> Course Lessons
									</h3>
									@if($course->lessons->count() > 0)
									<span class="lessons-count badge" style="background: #afafaf; color: #2e7d32">{{ $course->lessons->count() }} Lessons</span>
									@endif
								</div>

								@if($course->lessons->count() > 0)
								<ul class="lessons-list">
									@foreach($course->lessons as $key => $lesson)
									<li class="lesson-item">
										<div class="lesson-left">
											<div class="lesson-number">{{ $key + 1 }}</div>
											<div class="lesson-info">
												<span class="lesson-title-text">{{ $lesson->title ?? 'Untitled Lesson' }}</span>
												@if($lesson->duration)
												<span class="lesson-meta">
													<i class="fa-regular fa-clock me-1"></i>{{ $lesson->duration }}
												</span>
												@endif
											</div>
										</div>
										<div class="lesson-right">
											@if($lesson->video_url)
											<span class="lesson-type-badge video"><i class="fa-solid fa-play me-1"></i>Video</span>
											@else
											<span class="lesson-type-badge text"><i class="fa-solid fa-file-lines me-1"></i>Text</span>
											@endif
											<button class="nav-link" data-bs-toggle="modal" data-bs-target="#lessonModal{{ $lesson->id }}">
												<i class="fa-solid fa-eye me-1"></i> Preview
											</button>
										</div>
									</li>

									@endforeach
								</ul>

								@else
								<div class="no-lessons-placeholder">
									<i class="fa-solid fa-book-open"></i>
									<h5>No Lessons Yet</h5>
									<p>Lessons for this course haven't been added yet. Check back soon!</p>
								</div>
								@endif

							</div>
							<!-- /Lessons Section -->
						</div>

						<style>
							/* Lessons Header */
							.lessons-header {
								display: flex;
								align-items: center;
								justify-content: space-between;
								border-bottom: 1px solid #f0f0f0;
								padding-bottom: 4px;
							}

							.lessons-title {
								font-size: 1.2rem;
								font-weight: 700;
								color: #2d2d2d;
								margin: 0;
							}

							.lessons-count.badge {
								background: linear-gradient(135deg, #1d85f5, #0d6efd);
								color: #fff;
								font-size: 0.78rem;
								padding: 6px 14px;
								border-radius: 50px;
								font-weight: 600;
								letter-spacing: 0.3px;
							}

							/* Lessons List */
							.lessons-list {
								list-style: none;
								padding: 0;
								margin: 0;
								display: flex;
								flex-direction: column;
								gap: 10px;
							}

							.lesson-item {
								display: flex;
								align-items: center;
								justify-content: space-between;
								/* background: #f8faff; */
								border: 1px solid #e8efff;
								border-radius: 3px;
								padding: 14px 18px;
								transition: all 0.25s ease;
							}

							.lesson-item:hover {
								background: #eef4ff;
								border-color: #b3ceff;
								transform: translateY(-1px);
								box-shadow: 0 4px 16px rgba(13, 110, 253, 0.08);
							}

							.lesson-left {
								display: flex;
								align-items: center;
								gap: 14px;
							}

							.lesson-number {
								width: 36px;
								height: 36px;
								border-radius: 50%;
								/* background: linear-gradient(135deg, #1d85f5, #0d6efd); */
								color: #fff;
								border: 1px solid #afafaf;
								font-size: 0.82rem;
								font-weight: 700;
								display: flex;
								align-items: center;
								justify-content: center;
								flex-shrink: 0;
							}

							.lesson-info {
								display: flex;
								flex-direction: column;
								gap: 3px;
							}

							.lesson-title-text {
								font-size: 0.95rem;
								font-weight: 600;
								color: #afafaf;
							}

							.lesson-meta {
								font-size: 0.78rem;
								color: #afafaf;
							}

							/* Right Side */
							.lesson-right {
								display: flex;
								align-items: center;
								gap: 10px;
							}

							.lesson-type-badge {
								font-size: 0.73rem;
								font-weight: 600;
								padding: 4px 10px;
								border-radius: 50px;
								letter-spacing: 0.3px;
							}

							.lesson-type-badge.video {
								background: #afafaf;
								color: #2e7d32;
							}

							.lesson-type-badge.text {
								background: #e8f5e9;
								color: #2e7d32;
							}

							.btn-view-lesson {
								/* background: linear-gradient(135deg, #1d85f5, #0d6efd); */
								color: #fff;
								border: 1px solid #afafaf;
								/* border: none; */
								border-radius: 3px;
								padding: 7px 16px;
								font-size: 0.82rem;
								font-weight: 600;
								cursor: pointer;
								transition: all 0.2s ease;
								white-space: nowrap;
							}

							.btn-view-lesson:hover {
								/* background: linear-gradient(135deg, #0d6efd, #0a58ca); */
								box-shadow: 0 4px 12px rgba(13, 110, 253, 0.35);
								transform: translateY(-1px);
							}

							/* Modal */
							.lesson-modal-content {
								border: none;
								border-radius: 16px;
								overflow: hidden;
								box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
							}

							.lesson-modal-header {
								/* background: linear-gradient(135deg, #1d85f5, #0d6efd); */
								padding: 20px 24px;
								border: none;
								display: flex;
								align-items: flex-start;
								justify-content: space-between;
							}

							.modal-title-wrap {
								display: flex;
								flex-direction: column;
								gap: 4px;
							}

							.modal-lesson-number {
								font-size: 0.75rem;
								font-weight: 600;
								color: rgba(255, 255, 255, 0.7);
								text-transform: uppercase;
								letter-spacing: 1px;
							}

							.lesson-modal-header .modal-title {
								font-size: 1.1rem;
								font-weight: 700;
								color: #fff;
								margin: 0;
							}

							.lesson-modal-body {
								padding: 24px;
								/* background: #fff; */
							}

							.video-wrapper {
								border-radius: 12px;
								overflow: hidden;
								box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
							}

							.no-video-placeholder {
								background: #f8faff;
								border: 2px dashed #d0dff5;
								border-radius: 12px;
								padding: 40px;
								text-align: center;
								color: #8a94a6;
							}

							.no-video-placeholder i {
								font-size: 2rem;
								margin-bottom: 10px;
								display: block;
							}

							.lesson-description {
								font-size: 0.93rem;
								color: #4a4a6a;
								line-height: 1.7;
								background: #f8faff;
								border-left: 3px solid #0d6efd;
								padding: 14px 18px;
								border-radius: 0 10px 10px 0;
							}

							.lesson-modal-footer {
								/* background: #f8faff; */
								border-top: 1px solid #eef0f5;
								padding: 14px 24px;
								display: flex;
								align-items: center;
								justify-content: space-between;
							}

							.duration-badge {
								font-size: 0.82rem;
								color: #8a94a6;
								font-weight: 500;
							}

							.btn-close-modal {
								background: #f0f2f5;
								color: #4a4a6a;
								border: none;
								border-radius: 8px;
								padding: 7px 16px;
								font-size: 0.82rem;
								font-weight: 600;
								cursor: pointer;
								transition: all 0.2s ease;
							}

							.btn-close-modal:hover {
								background: #e2e6ea;
							}

							/* Empty State */
							.no-lessons-placeholder {
								text-align: center;
								padding: 50px 20px;
								color: #8a94a6;
							}

							.no-lessons-placeholder i {
								font-size: 3rem;
								margin-bottom: 16px;
								display: block;
								color: #c5d0e6;
							}

							.no-lessons-placeholder h5 {
								font-weight: 700;
								color: #4a4a6a;
								margin-bottom: 8px;
							}

							.no-lessons-placeholder p {
								font-size: 0.9rem;
							}
						</style>
						<div class="tab-pane fade" id="review" role="tabpanel">

							<div class="row">
								<!-- Reviews -->
								<div class="review-widget">
									<div class="review-title sort-search-gigs">
										<div class="row align-items-center">
											<div class="col-sm-6">
												<h3 style="color: #afafaf;">Reviews ({{ $course->feedback->count() }})</h3>
											</div>
											<div class="col-sm-6">
												<div class="filters-wrap sort-categories justify-content-end">
													<div class="dropdown float-lg-end">
														<button class="btn btn-light dropdown-toggle" type="button" id="sortReviewDropdown" data-bs-toggle="dropdown">
															Sort By: Most Recent
														</button>
														<ul class="dropdown-menu" aria-labelledby="sortReviewDropdown">
															<li><a class="dropdown-item active" href="#">Most Recent</a></li>
															<li><a class="dropdown-item" href="#">Oldest</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

									<ul class="review-lists home-reviews">
										@foreach($course->feedback as $feedback)
										<li>
											<div class="review-wrap">
												<div class="review-user-info">
													<div class="review-img">
														<img src="{{ $feedback->user->profile_photo ? asset('uploads/'.$feedback->user->profile_photo) : asset('assets/img/user/profile.jpg') }}" alt="{{ $feedback->user->name }}">
													</div>
													<div class="reviewer-info">
														<h6><a href="#">{{ $feedback->user->name }}</a></h6>
														<div class="star-rate">
															@for($i=1;$i<=5;$i++)
																<i class="fa-solid fa-star{{ $i <= $feedback->rating ? ' filled' : '' }}"></i>
																@endfor
																<span class="rating-count">{{ $feedback->rating }}</span>
														</div>
														<p class="reviewer-time">{{ $feedback->created_at->diffForHumans() }}</p>
													</div>
												</div>
												<div class="review-content">
													<p>{{ $feedback->comment }}</p>
												</div>
											</div>
										</li>
										@endforeach
									</ul>
									<!-- Add a Review --><!-- Review Form -->
									<div class="course-review mt-5">
										<h4>Leave a Review</h4>

										@auth
										@if(session('success'))
										<div class="alert alert-success">{{ session('success') }}</div>
										@endif

										<form action="{{ route('courses.review', $course->id) }}" method="POST">
											@csrf
											<div class="mb-3">
												<label class="form-label">Rating</label>
												<select name="rating" class="form-select" required>
													<option value="">-- Select --</option>
													@for($i = 1; $i <= 5; $i++)
														<option value="{{ $i }}">{{ $i }} Star{{ $i > 1 ? 's' : '' }}</option>
														@endfor
												</select>
												@error('rating') <small class="text-danger">{{ $message }}</small> @enderror
											</div>

											<div class="mb-3">
												<label class="form-label">Comment</label>
												<textarea name="comment" rows="4" class="form-control" placeholder="Write your review..."></textarea>
												@error('comment') <small class="text-danger">{{ $message }}</small> @enderror
											</div>

											<button type="submit" class="btn btn-primary">Submit Review</button>
										</form>
										@else
										<p><a href="{{ route('login') }}">Login</a> to leave a review.</p>
										@endauth
									</div>
									<!-- /Review Form -->

								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

			<!-- Sidebar -->
			<div class="col-lg-4 theiaStickySidebar">
				<div class="service-widget member-widget postLists p-4">
					<div class="course-header p-4 mb-4">
						<!-- Course Title -->
						<h2 class="breadcrumb-title fw-bold mb-3" style="color: #afafaf;">{{ $course->title }}</h2>

						<!-- Course Info -->
						<ul class="info-links d-flex flex-wrap gap-3 mb-4 list-unstyled p-0">
							<li class="d-flex align-items-center">
								<i class="ti ti-star-filled text-warning me-1"></i>
								{{ number_format($course->feedback->avg('rating') ?? 0, 1) }}
							</li>
							<li class="d-flex align-items-center">
								<i class="ti ti-eye me-1"></i>
								{{ $course->feedback->count() }} feedback
							</li>
							<li class="d-flex align-items-center">
								<i class="ti ti-calendar-due me-1"></i>
								Published: {{ $course->created_at ? $course->created_at->diffForHumans() : '' }}
							</li>
							<li class="d-flex align-items-center">
								<i class="ti ti-tag me-1"></i>
								Category: {{ $course->category->name }}
							</li>
							<li class="d-flex align-items-center">
								<i class="feather-heart me-1 text-danger"></i>
								{{ $course->likes_count ?? 0 }} Likes
							</li>
						</ul>

						<!-- Author Info -->
						<div class="d-flex align-items-center gap-3 mb-3">
							<div class="user-img flex-shrink-0">
								<img src="{{ $course->talent->image ? asset('image/talents/'.$course->talent->image) : asset('assets/img/user/profile.jpg') }}"
									alt="Author" class="rounded-circle shadow-sm" style="width: 70px; height: 70px; object-fit: cover;">
							</div>
							<div class="user-info flex-grow-1">
								<h5 class="mb-1 fw-semibold">
									{{ $course->talent->name }}
									<span class="badge bg-success ms-2 py-1 px-2 small">
										<i class="fa-solid fa-circle fa-xs me-1"></i> {{ ucfirst($course->talent->status) }}
									</span>
								</h5>
								<p class="text-muted mb-0 small">
									<i class="fa-solid fa-star text-warning me-1"></i>{{ $course->talent->rating }}
									({{ $course->talent->rating_count }} Ratings)
								</p>
							</div>
						</div>

						<!-- About Author -->
						<div class="about-me border-top pt-3">
							<ul class="breadcrumb-links service-details">
								<li class="me-0">
									<div class="social-links d-flex align-items-center breadcrumb-social justify-content-lg-start">
										Share
										<ul class="ms-3">
											@foreach(['facebook','twitter','instagram','linkedin','whatsapp'] as $social)
											<li><a href="javascript:void(0);"><i class="fa-brands fa-{{ $social }}"></i></a></li>
											@endforeach
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<style>
						.course-header {
							/* background: #fff; */
							transition: all 0.3s ease;
						}

						.course-header:hover {
							transform: translateY(-3px);
							box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
						}

						.info-links li {
							/* background: #f7f9fc; */
							border-radius: 0.5rem;
							padding: 0.5rem 0.75rem;
							display: flex;
							align-items: center;
							font-size: 0.875rem;
							transition: 0.3s;
						}

						.info-links li:hover {
							/* background: #e6f0ff; */
						}

						.user-img img {
							border: 2px solid #e6ecf4;
						}

						.badge {
							font-size: 0.75rem;
						}
					</style>

					<!-- Action Buttons -->
					<div class="d-flex gap-2 flex-wrap">
						<a href="{{ route('user.talent.details', $course->talent->id) }}"
							class="btn btn-outline-primary modern-btn">
							View Author Profile
						</a>

						@if($course->is_free)
						<a href="#enrollModal"
							class="btn modern-btn"
							data-bs-toggle="modal">
							<i class="feather-book-open me-1"></i> Enroll for Free
						</a>
						@else
						<a href="#paymentModal"
							class="btn flex-grow-1 modern-btn"
							data-bs-toggle="modal">
							<i class="feather-book-open me-1"></i> Enroll for ${{ number_format($course->price, 2) }}
						</a>
						@endif
					</div>

					<style>
						/* Modern card hover */
						.postLists {
							transition: all 0.3s ease;
						}

						.postLists:hover {
							transform: translateY(-5px);
							box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
						}

						/* User image border */
						.user-img img {
							border: 2px solid #e6ecf4;
						}

						/* Badges */
						.badge {
							font-size: 0.75rem;
						}

						/* Modern buttons */
						.modern-btn {
							position: relative;
							overflow: hidden;
							min-width: 150px;
							padding: 0.625rem 1.5rem;
							font-weight: 600;
							transition: all 0.3s ease;
							/* background: linear-gradient(135deg, #6C63FF, #5CC1FF); */
							color: #fff;
							border: 1px solid #afafaf;
							/* box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3); */
						}

						.modern-btn.btn-outline-primary {
							color: #afafaf;
							border: 1px solid #afafaf;
							background: transparent;
						}

						.modern-btn:hover {
							transform: translateY(-2px);
							box-shadow: 0 6px 18px rgba(108, 99, 255, 0.4);
							background-position: right center;
						}

						.modern-btn i {
							transition: transform 0.3s ease;
						}

						.modern-btn:hover i {
							transform: translateX(3px);
						}

						/* Responsive: stack buttons on small screens */
						@media (max-width: 575px) {
							.modern-btn {
								flex-grow: 1;
								text-align: center;
							}
						}
					</style>

				</div>

				<style>
					.postLists {
						transition: all 0.3s ease;
					}

					.postLists:hover {
						transform: translateY(-4px);
						box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
					}

					.user-img img {
						border: 2px solid #e6ecf4;
					}

					.badge {
						font-size: 0.75rem;
					}
				</style>

			</div>
		</div>
		<!-- Related Courses -->
		<div class="related-courses mt-5">
			<div class="row">
				<div class="col-md-12">
					<div class="title-sec">
						<div class="row align-items-center">
							<div class="col-md-8">
								<h3>Related Courses</h3>
							</div>
							<div class="col-md-4">
								<div class="owl-nav worknav nav-control nav-top"></div>
							</div>
						</div>
					</div>

					<div class="gigs-slider owl-carousel">
						@forelse($relatedCourses as $course)
						<div class="gigs-grid postLists">
                                <div class="gigs-img">
                                    <div class="img-slider owl-carousel">
                                        <div class="slide-images">
                                            <a href="{{ route('user.courses.show', $course->slug) }}">
                                                <img src="{{ asset('image/thumbnails/'.$course->thumbnail) }}" class="img-fluid" style="height: 240px; object-fit: cover; transition: transform 0.3s ease;" alt="{{ $course->title }}">
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="gigs-content">
                                    <div class="gigs-info">
                                        <a href="{{ route('user.courses', ['category' => $course->category->slug]) }}" class="badge bg-primary-light">
                                            {{ $course->category->name }}
                                        </a>
                                        <div class="star-rate">
                                            <span>
                                                <i class="fa-solid fa-star"></i>
                                                {{ number_format($course->feedback->avg('rating') ?? 0, 1) }}
                                                ({{ $course->feedback->count() }} feedback)
                                            </span>
                                        </div>
                                    </div>

                                    <div class="gigs-title">
                                        <h3><a href="{{ route('user.courses.show', $course->slug) }}">{{ $course->title }}</a></h3>
                                    </div>

                                    <ul class="gigs-user-info">
                                        <li class="gigs-user">
                                            <img src="{{ $course->talent->image ? asset('image/talents/'.$course->talent->image) : asset('assets/img/user/profile.jpg') }}" alt="img">
                                            <p>{{ $course->talent->name ?? 'Unknown' }}</p>
                                        </li>
                                        <li class="gigs-loc">
                                            <p><i class="ti ti-map-pin-check"></i>{{ $course->talent->region ?? 'N/A' }}</p>
                                        </li>
                                    </ul>

                                    <div class="gigs-card-footer d-flex justify-content-between align-items-center">
                                        <h5>
                                            @if($course->is_free)
                                            Free
                                            @else
                                            ${{ number_format($course->price, 2) }}
                                            @endif
                                        </h5>
                                        <span class="badge"><a href="{{ route('user.courses.show', $course->slug) }}">View Details</a></span>
                                    </div>
                                </div>
                            </div>
						@empty
						<p class="text-muted">No related courses found.</p>
						@endforelse
					</div>
				</div>
			</div>
		</div>
		<!-- /Related Courses -->

		<!-- Enroll Modal -->
		<div class="modal fade " id="enrollModal" tabindex="-1" aria-labelledby="enrollModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content postLists">
					<div class="modal-header">
						<h5 class="modal-title" id="enrollModalLabel">Enroll in {{ $course->title }}</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<p>You need to enroll in this course before you can leave a review or access lessons.</p>
					</div>
					<div class="modal-footer">
						<form action="{{ route('user.courses.enroll', $course->id) }}" method="POST">
							@csrf
							<button type="submit" class="btn btn-success">Yes, Enroll Me</button>
						</form>
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					</div>
				</div>
			</div>
		</div>
		<!-- /Enroll Modal -->

		<!-- Paid Course Payment Modal -->
		<div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content postLists">
					<div class="modal-header">
						<h5 class="modal-title" id="paymentModalLabel">Pay to Enroll in {{ $course->title }}</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
						<p>The course costs <strong>${{ number_format($course->price, 2) }}</strong>.</p>
						<p>Please complete the payment to confirm enrollment.</p>
					</div>
					<div class="modal-footer">
						<form action="{{ route('user.courses.pay', $course->id) }}" method="POST">
							@csrf
							<button type="button" class="btn btn-success w-100" id="payBtn">
								<span id="payBtnText"><i class="fa fa-money-bill-wave"></i> Pay Now</span>
								<span id="payBtnSpinner" class="spinner-border spinner-border-sm d-none" role="status"></span>
							</button>
						</form>
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>

@foreach($course->lessons as $key => $lesson)
<!-- Lesson Modal -->
<div class="modal fade" id="lessonModal{{ $lesson->id }}" tabindex="-1"
	aria-labelledby="lessonModalLabel{{ $lesson->id }}" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered">
		<div class="modal-content lesson-modal-content">
			<div class="modal-header lesson-modal-header">
				<div class="modal-title-wrap">
					<span class="modal-lesson-number">Lesson {{ $key + 1 }}</span>
					<h5 class="modal-title" id="lessonModalLabel{{ $lesson->id }}">
						{{ $lesson->title ?? 'Untitled Lesson' }}
					</h5>
				</div>
				<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body lesson-modal-body">
				@if($lesson->video_url)
				<div class="ratio ratio-16x9 mb-4 video-wrapper">
					<iframe
						src="https://www.youtube.com/embed/{{ \Illuminate\Support\Str::afterLast(\Illuminate\Support\Str::before($lesson->video_url, '&'), 'v=') }}?autoplay=0&playsinline=1"
						title="{{ $lesson->title ?? 'Lesson Video' }}"
						allowfullscreen
						class="rounded-3">
					</iframe>
				</div>
				@else
				<div class="no-video-placeholder mb-4">
					<i class="fa-solid fa-video-slash"></i>
					<p>No video available for this lesson.</p>
				</div>
				@endif

				@if($lesson->description)
				<div class="lesson-description">
					<p>{{ $lesson->description }}</p>
				</div>
				@endif
			</div>
			<div class="modal-footer lesson-modal-footer">
				@if($lesson->duration)
				<span class="duration-badge">
					<i class="fa-regular fa-clock me-1"></i> {{ $lesson->duration }}
				</span>
				@endif
				<button type="button" class="btn-close-modal" data-bs-dismiss="modal">
					<i class="fa-solid fa-xmark me-1"></i> Close
				</button>
			</div>
		</div>
	</div>
</div>
<!-- /Lesson Modal -->
@endforeach
<script>
	document.addEventListener("DOMContentLoaded", function() {
		const payBtn = document.getElementById("payBtn");
		const payBtnText = document.getElementById("payBtnText");
		const payBtnSpinner = document.getElementById("payBtnSpinner");

		if (!payBtn) return;

		payBtn.addEventListener("click", function() {
			payBtnText.textContent = "Processing Payment...";
			payBtnSpinner.classList.remove("d-none");
			payBtn.disabled = true;

			const userEmail = "{{ auth()->user()->email ?? 'guest@example.com' }}";
			const userName = "{{ auth()->user()->name ?? 'Guest' }}";
			const courseId = "{{ $course->id }}";
			const coursePrice = "{{ $course->price }}";
			const txRef = "course-" + courseId + "-" + Date.now();

			FlutterwaveCheckout({
				public_key: "{{ env('FLW_PUBLIC_KEY') }}",
				tx_ref: txRef,
				amount: coursePrice,
				currency: "RWF",
				payment_options: "card, mobilemoneyrwanda",
				customer: {
					email: userEmail,
					name: userName
				},
				callback: function(data) {
					if (data.status === "successful" || data.status === "completed") {
						window.location.href = `/course/payment/callback?tx_ref=${data.tx_ref}&course_id=${courseId}&status=${data.status}`;
					} else {
						alert("Payment not successful. Please try again.");
						resetPaymentButton();
					}
				},
				onclose: function() {
					resetPaymentButton();
				},
				customizations: {
					title: "{{ $course->title }}",
					description: "Pay to enroll in this course",
					logo: "{{ asset('logo.png') }}"
				}
			});
		});

		function resetPaymentButton() {
			payBtnText.innerHTML = '<i class="fa fa-money-bill-wave"></i> Pay Now';
			payBtnSpinner.classList.add("d-none");
			payBtn.disabled = false;
		}
	});
</script>

@endsection