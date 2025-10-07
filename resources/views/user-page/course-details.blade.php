@extends('layouts.guest')
@section('title', $course->title)

@section('content')

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
		border: 1px solid #fff;
		border-radius: 1em;
		background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
		box-shadow: 0 1em 1em #1f2d3d26;
		text-shadow: 0 1px #fff;
		transition: .25s;
		margin-bottom: 1.5rem;
	}
</style>

<div class="page-content content">
	<div class="container">
		<!-- Breadcrumb & Course Info -->
		<div class="postLists breadcrumb-bar breadcrumb-bar-info breadcrumb-info">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-8 col-12 text-start">
						<nav aria-label="breadcrumb" class="page-breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="{{ route('user.home') }}">Home</a></li>
								<li class="breadcrumb-item"><a href="{{ route('user.stories') }}">Talent Stories</a></li>
								<li class="breadcrumb-item active" aria-current="page">Story Detail</li>
							</ol>
						</nav>
						<h2 class="breadcrumb-title">{{ $course->title }}</h2>
						<ul class="info-links">
							<li><i class="ti ti-star-filled text-warning"></i></li>
							<li>
								<i class="ti ti-eye"></i>{{ number_format($course->feedback->avg('rating') ?? 0, 1) }}
								({{ $course->feedback->count() }} feedback)
							</li>
							<li><i class="ti ti-calendar-due"></i>Published On: {{ $course->created_at->format('d M Y') }}</li>
							<li><i class="ti ti-map-pin-heart"></i>{{ $course->location ?? 'Kigali, Rwanda' }}</li>
							<li class="border-0">{{ $course->category->name }}</li>
						</ul>
					</div>
					<div class="col-lg-4 col-12">
						<ul class="breadcrumb-links service-details">
							<li class="me-0">
								<div class="social-links d-flex align-items-center breadcrumb-social justify-content-lg-end">
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
			</div>
		</div>

		<div class="row">
			<!-- Course Details -->
			<div class="col-lg-8">
				<div class="slider-card service-slider-card postLists">
					<div class="slide-part">
						<div class="slider service-slider">
							<div class="service-img-wrap">
								{{-- If course is free, autoplay the first lesson video --}}
								@if($course->is_free && $course->lessons->isNotEmpty() && $course->lessons->first()->video)
								<video class="img-fluid w-100 rounded-3" controls autoplay muted playsinline poster="{{ asset($course->thumbnail) }}">
									<source src="{{ asset($course->lessons->first()->video) }}" type="video/mp4">
									Your browser does not support the video tag.
								</video>
								@elseif($course->video)
								{{-- Otherwise show intro video --}}
								<video class="img-fluid w-100 rounded-3" controls poster="{{ asset($course->thumbnail) }}">
									<source src="{{ asset($course->video) }}" type="video/mp4">
									Your browser does not support the video tag.
								</video>
								@else
								{{-- Fallback image --}}
								<img src="{{ asset($course->thumbnail) }}" class="img-fluid w-100 rounded-3" alt="{{ $course->title }}">
								@endif
							</div>
						</div>
					</div>
				</div>

				<div class="service-wrap postLists">
					<h3>About this course</h3>
					<p>{{ $course->description }}</p>
				</div>

				<!-- Reviews -->
				<div class="review-widget postLists">
					<div class="review-title sort-search-gigs">
						<div class="row align-items-center">
							<div class="col-sm-6">
								<h3>Reviews ({{ $course->feedback->count() }})</h3>
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

			<!-- Sidebar -->
			<div class="col-lg-4 theiaStickySidebar">
				<div class="row gx-3 row-gap-3 mb-4">
					<div class="col-xl-4 col-lg-6 col-sm-4 col-6">
						<div class="buy-box postLists">
							<i class="feather-calendar"></i>
							<p>Published</p>
							<h6>{{ $course->updated_at->format('M d, Y') }}</h6>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-sm-4 col-6">
						<div class="buy-box postLists">
							<i class="feather-eye"></i>
							<p>Total reviews</p>
							<h6>{{ $course->feedback->count() }}</h6>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-sm-4 col-6">
						<div class="buy-box postLists">
							<i class="feather-heart"></i>
							<p>Likes</p>
							<h6>{{ $course->likes_count ?? 0 }}</h6>
						</div>
					</div>
				</div>

				<div class="service-widget">
					<div class="service-amt p-3 price-lvl price-lvl1 bg-light postLists">
						<h3 class="text-grey">
							@if($course->is_free)
							<span class="d-block text-grey"> Access Free </span>
							@else
							<span class="d-block text-grey"> Access Price </span>
							${{ number_format($course->price, 2) }}
							@endif
						</h3>
					</div>

					<a href="#" data-bs-toggle="modal" data-bs-target="#enrollModal" class="btn btn-primary w-100 mb-0">
						<i class="feather-book-open"></i> Enroll to Full Story
					</a>
				</div>

				<div class="service-widget member-widget postLists">
					<div class="user-details">
						<div class="user-img users-img">
							<img src="{{ $course->talent->image ? asset('image/talents/'.$course->talent->image) : asset('assets/img/user/profile.jpg') }}" alt="Author">
						</div>
						<div class="user-info">
							<h5>
								{{ $course->talent->name }}
								<span class="badge badge-success"><i class="fa-solid fa-circle"></i> {{ $course->talent->status }}</span>
							</h5>
							<p><i class="fa-solid fa-star"></i>{{ $course->talent->rating }} ({{ $course->talent->rating_count }} Ratings)</p>
						</div>
					</div>
					<ul class="member-info">
						<li>Category <span>{{ $course->category->name }}</span></li>
						<li>Language <span>{{ $course->language }}</span></li>
						<li>Last Update <span>{{ $course->updated_at->format('d M Y') }}</span></li>
					</ul>
					<div class="about-me new-about">
						<h6>About the Author</h6>
						<p>{{ $course->talent->bio }}</p>
					</div>
					<a href="{{ route('user.talent.details', $course->talent->id) }}" class="btn btn-primary mb-0 w-100">Talent Profile</a>
				</div>
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
						@forelse($relatedCourses as $related)
						<div class="gigs-grid postLists">
							<div class="gigs-img">
								<div class="img-slider">
									<a href="{{ route('course.detail', $related->id) }}">
										<img src="{{ asset($related->thumbnail) }}" class="img-fluid" alt="{{ $related->title }}">
									</a>
								</div>
								@if($related->is_hot)
								<div class="card-overlay-badge">
									<span class="badge bg-danger"><i class="fa-solid fa-meteor"></i> Hot</span>
								</div>
								@endif
								<div class="user-thumb">
									<a href="{{ route('user.talent.details', $related->talent->id) }}">
										<img src="{{ $related->talent->image ? asset('image/talents/'.$related->talent->image) : asset('assets/img/user/profile.jpg') }}" alt="{{ $related->talent->name }}">
									</a>
								</div>
							</div>

							<div class="gigs-content">
								<div class="gigs-info">
									<a href="{{ route('course.detail', $related->id) }}">
										<span class="badge bg-primary-light">{{ $related->category->name }}</span>
									</a>
								</div>
								<div class="gigs-title">
									<h3><a href="{{ route('course.detail', $related->id) }}">{{ $related->title }}</a></h3>
								</div>
								<div class="star-rate">
									<span>
										<i class="fa-solid fa-star"></i>
										{{ number_format($related->feedback->avg('rating') ?? 0, 1) }}
										({{ $related->feedback->count() }} Reviews)
									</span>
								</div>
								<div class="gigs-card-footer">
									<span class="badge">Delivery in {{ $related->delivery_days ?? 1 }} day(s)</span>
									<h5>
										@if($related->is_free)
										Free
										@else
										${{ number_format($related->price, 2) }}
										@endif
									</h5>
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

	</div>
</div>

@endsection