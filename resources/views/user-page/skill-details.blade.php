@extends('layouts.guest')
@section('content')


<style>
	.talent-profile-info {
		background: #011E34;
		color: #fff;
		border-radius: 10px;
		padding: 20px;
		margin-bottom: 20px;
	}

	.postLists {
		display: flex;
		/* align-items: center; */
		flex-direction: column;
		border: 1px solid #fff;
		border-radius: 1em;
		background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
		box-shadow: 0 1em 1em #1f2d3d26;
		/* text-align: center; */
		text-shadow: 0 1px #fff;
		transition: .25s;
		margin-bottom: 1.5rem;

	}
</style>

<div class="page-content content">
	<div class="container">
		<div class="row">

			<div class="col-lg-8">

				<div class="postLists breadcrumb-bar breadcrumb-bar-info talent-profile-info breadcrumb-info text-start pt-0 bg-white">

					<h2 class="breadcrumb-title">
						{{ $skill->name }}
					</h2>

					<ul class="info-links">
						<li>
							<i class="ti ti-star-filled text-warning"></i> 5.0 (45 Supporters)
						</li>

						<li>
							<i class="ti ti-user"></i>
							{{ $skill->talent->name ?? 'Author' }}
						</li>

						<li>
							<i class="ti ti-calendar-due"></i>
							Skill Created:
							{{ \Carbon\Carbon::parse($skill->created_at)->format('d/m/Y') }}
						</li>

						<li class="border-0">
							<div class="tranlator d-flex align-items-center">
								<i class="ti ti-heart"></i>
								{{ $skill->level }}
							</div>
						</li>

						<li class="border-0">
							<div class="tranlator d-flex align-items-center">
								<i class="ti ti-heart"></i>
								{{ $skill->category->name ?? 'Uncategorized' }}
							</div>
						</li>
					</ul>
				</div>

				<!-- Slider -->
				<div class="slider-card service-slider-card postLists">
					<div class="slider service-slider">
						<div class="service-img-wrap">
							<img src="{{ asset('assets/img/service/service-slide-01.jpg') }}" class="img-fluid" alt="Slider Img">
						</div>
					</div>
				</div>
				<!-- /Slider -->


				<div class="row gx-3 row-gap-3 mb-4 statistics">
					<div class="col-xl-3 col-lg-6 col-sm-4 col-6 ">
						<div class="buy-box postLists">
							<i class="ti ti-photo-star text-secondary"></i>
							<p>Total Ratings</p>
							<h6>{{ number_format($skill->reviews->avg('rating'), 1) }}</h6>
						</div>
					</div>
					<div class="col-xl-3 col-lg-6 col-sm-4 col-6 ">
						<div class="buy-box postLists">
							<i class="ti ti-heart text-purple"></i>
							<p>Total Likes</p>
							<h6>320</h6>
						</div>
					</div>
					<div class="col-xl-3 col-lg-6 col-sm-4 col-6 ">
						<div class="buy-box postLists">
							<i class="ti ti-message-chatbot text-indigo"></i>
							<p>Feedbacks</p>
							<h6>({{ $skill->reviews->count() }} reviews)</h6>
						</div>
					</div>
					<div class="col-xl-3 col-lg-6 col-sm-4 col-6 ">
						<div class="buy-box postLists">
							<i class="ti ti-eye text-teal"></i>
							<p>Profile Views</p>
							<h6>1,100</h6>
						</div>
					</div>
				</div>

				<div class="postLists p-4">
					<div class="listing-tab">
						<div class="listing-slider">
							<ul class="nav nav-tabs" role="tablist">
								<li class="nav-item" role="presentation">
									<a role="button" tabIndex="0" class="nav-link active" data-bs-toggle="tab"
										data-bs-target="#about_me" aria-selected="false" tabindex="-1">
										Description
									</a>
								</li>
								<li>
									<a role="button" tabIndex="0" class="nav-link" data-bs-toggle="tab"
										data-bs-target="#review" aria-selected="false" tabindex="-1">
										Reviews
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="tab-content rounded-3" style="background: var(--white);">

						<div class="tab-pane fade show active" id="about_me" role="tabpanel">

							<div class="service-wrap">
								<h3>{{ $skill->name}}` Description</h3>
								<p>{{ $skill->description }}</p>
							</div>

						</div>

						<div class="tab-pane fade" id="review" role="tabpanel">
							<div class="review-widget">

								{{-- Title --}}
								<div class="review-title">
									<div class="row align-items-center">
										<div class="col-sm-6">
											<h3>Reviews ({{ $totalReviews }})</h3>
										</div>
										<div class="col-sm-6 text-end">
											<span class="fw-bold">Sort: Most Recent</span>
										</div>
									</div>
								</div>

								{{-- Ratings Summary --}}
								<div class="total-rating align-items-center">
									<div class="total-review">
										@foreach([5,4,3,2,1] as $star)
										<div class="progress-lvl mb-2">
											<h6>{{ $star }} Star Ratings</h6>
											<div class="progress">
												<div class="progress-bar bg-warning"
													role="progressbar"
													style="width: {{ $totalReviews ? ($ratingsCount[$star] / $totalReviews) * 100 : 0 }}%">
												</div>
											</div>
											<p>{{ $ratingsCount[$star] }}</p>
										</div>
										@endforeach
									</div>

									<div class="total-reviews text-center bg-white p-3 rounded shadow-sm">
										<h6> Customer Reviews & Ratings </h6>
										<h2>{{ $averageRating }} / 5.0</h2>
										<div class="icons d-flex align-items-center justify-content-center gap-1 mb-2">
											@for($i=1; $i<=5; $i++)
												<i class="ti ti-star-filled {{ $i <= $averageRating ? 'text-warning' : 'text-light' }}"></i>
												@endfor
										</div>
										<p>Based on {{ $totalReviews }} Reviews</p>
									</div>
								</div>

								{{-- Review List --}}
								<ul class="review-lists home-reviews">
									@forelse($reviews as $review)
									<li>
										<div class="review-wrap">
											<div class="review-user-info d-flex align-items-start">
												<div class="review-img me-3">
													<img src="{{ asset('assets/img/user/profile.jpg') }}" alt="img" />
												</div>
												<div>
													<h6>{{ $review->name }}</h6>
													<div class="star-rate">
														@for($i=1; $i<=5; $i++)
															<i class="fa-solid fa-star {{ $i <= $review->rating ? 'filled text-warning' : 'text-light' }}"></i>
															@endfor
															<span class="rating-count">{{ $review->rating }}.0</span>
													</div>
													<small class="text-muted">{{ $review->created_at->diffForHumans() }}</small>
													<p>{{ $review->comment }}</p>
												</div>
											</div>
										</div>
									</li>
									@empty
									<li>No reviews yet.</li>
									@endforelse
								</ul>

								{{-- Pagination --}}
								<div class="text-center mt-3">
									{{ $reviews->links() }}
								</div>
							</div>

							{{-- Review Form --}}
							<div class="login-card mt-4">
								<div class="login-heading text-start mb-4">
									<h5>Leave a Review</h5>
								</div>
								<form action="{{ route('reviews.store', $skill->id) }}" method="POST">
									@csrf
									<div class="form-wrap form-focus">
										<label class="fw-medium text-dark">Your Rating <span class="text-primary">*</span></label>
										<select name="rating" class="form-control" required>
											<option value="">Select Rating</option>
											@for($i=5; $i>=1; $i--)
											<option value="{{ $i }}">{{ $i }} Star</option>
											@endfor
										</select>
									</div>

									<div class="row mt-3">
										<div class="col-lg-6">
											<div class="form-wrap form-focus">
												<label class="fw-medium text-dark">Name <span class="text-primary">*</span></label>
												<input type="text" name="name" class="form-control" required />
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-wrap form-focus">
												<label class="fw-medium text-dark">Email <span class="text-primary">*</span></label>
												<input type="email" name="email" class="form-control" required />
											</div>
										</div>
										<div class="col-lg-12 mt-3">
											<div class="form-wrap form-focus">
												<label class="fw-medium text-dark">Write a Review <span class="text-primary">*</span></label>
												<textarea name="comment" class="form-control text-area" required></textarea>
											</div>
										</div>
									</div>

									<button type="submit" class="btn btn-primary mt-3">Submit a Review</button>
								</form>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="col-lg-4 theiaStickySidebar">

				<div class="service-widget member-widget postLists">
					<div class="user-details">
						<div class="user-img users-img">
							<img src="{{ $skill->talent->image ? asset('image/talents/' . $skill->talent->image) : asset('/assets/img/user/profile.jpg') }}" alt="img">
						</div>
						<div class="user-info">
							<h5>
								<span
									class="me-2">{{ $skill->talent->name ?? 'Author' }}</span>
								<span class="badge badge-success"><i class="fa-solid fa-circle"></i> Verified</span>
							</h5>
							<p><i class="fa-solid fa-star"></i> {{ number_format($skill->talent->feedback->avg('rating'), 1) }}
								({{ $skill->talent->feedback->count() }} Feedbacks)</p>
						</div>
					</div>

					<div class="about-me new-about">
						<h6>{{ $skill->talent->name }}</h6>
						<p>
							Hello, I'm {{ $skill->talent->name ?? 'Unnamed Talent' }},
							a passionate {{ $skill->talent->skill ?? 'creative' }} and performer blending
							{{ $skill->talent->category->name ?? 'various disciplines' }}.
							<span class="more-content">
								I create immersive experiences that inspire and uplift communities.
							</span>
						</p>
						<a href="{{ route('user.talent.details', $skill->talent->id) }}" role="button" tabindex="0" class="read-more">Read More</a>
					</div>

					<div class="member-info member-info-new">
						<div class="member-list d-flex align-items-center gap mb-3">
							<i class="ti ti-music"></i>
							<h6 class="mb-0">
								Status
								<span class="pt-2">{{ $skill->status }}</span>
							</h6>
						</div>

						<div class="member-list d-flex align-items-center gap mb-3">
							<i class="ti ti-world"></i>
							<h6 class="mb-0">
								Level
								<span class="pt-2">{{ $skill->level }}</span>
							</h6>
						</div>

						<div class="member-list d-flex align-items-center gap mb-3">
							<i class="ti ti-calendar-event"></i>
							<h6 class="mb-0">
								Create Since
								<span
									class="pt-2">{{ \Carbon\Carbon::parse($skill->created_at)->format('d/m/Y') }}</span>
							</h6>
						</div>

						<div class="member-list d-flex align-items-center gap">
							<i class="ti ti-language"></i>
							<h6 class="mb-0">
								Tags
								<span class="pt-2">{{ $skill->tags }}</span>
							</h6>
						</div>
					</div>

					<a role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#contact_talent"
						class="btn btn-outline-primary mb-0 w-100">Contact Talent</a>
				</div>

				<div class="service-widget postLists">
					<div class="service-amt p-3 price-lvl bg-dark">
						<h3 class="">
							<span class="d-block">Support Amount</span>
							$25
						</h3>
					</div>

					<div class="input-block form-wrap form-focus">
						<label class="mb-1 fw-medium text-dark">Choose Amount <span
								class="text-primary">*</span></label>
						<select class="select select2-hidden-accessible" data-select2-id="1" tabindex="-1"
							aria-hidden="true">
							<option data-select2-id="3" class="text-dark">$5</option>
							<option>$10</option>
							<option>$25</option>
							<option>$50</option>
							<option>$100</option>
						</select>
					</div>

					<div class="service-widget service-select-widget">
						<h5 class="mb-3">Support Options</h5>
						<div class="service-select d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center">
								<label class="custom_radio">
									<input type="radio" name="support_option" checked="" />
									<span class="checkmark"></span>
									<span class="m-0 service-head-text">One-Time Support</span>
								</label>
							</div>
						</div>
						<div class="service-select d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center">
								<label class="custom_radio">
									<input type="radio" name="support_option" />
									<span class="checkmark"></span>
									<span class="m-0 service-head-text">Monthly Patron</span>
								</label>
							</div>
						</div>
					</div>

					<a role="button" tabIndex="0" data-bs-toggle="modal" data-bs-target="#support_talent"
						class="btn btn-primary w-100 mb-0">
						<i class="feather-heart"></i> Support This Talent
					</a>
				</div>
				<div class="service-widget postLists" style="background: var(--white);">
					<h5 class="">Share Talent Profile</h5>
					<div class="social-links d-flex align-items-center breadcrumb-social pt-2">
						<ul>
							<li><a role="button" tabIndex="0"><i class="fa-brands fa-facebook" style="color: var(--white);"></i></a></li>
							<li><a role="button" tabIndex="0"><i class="fa-brands fa-x-twitter" style="color: var(--white);"></i></a></li>
							<li><a role="button" tabIndex="0"><i class="fa-brands fa-instagram" style="color: var(--white);"></i></a></li>
							<li><a role="button" tabIndex="0"><i class="fa-brands fa-google" style="color: var(--white);"></i></a></li>
							<li><a role="button" tabIndex="0"><i class="fa-brands fa-youtube" style="color: var(--white);"></i></a></li>
						</ul>
					</div>
				</div>

			</div>
		</div>

		<div class="recent-works mt-5">
			<div class="container">
				<div class="row">
					<div class="col-md-12">

						<div class="title-sec">
							<div class="row align-items-center">
								<div class="col-md-8">
									<h3>Related Skills</h3>
								</div>
							</div>
						</div>

						<div class="gigs-slider owl-carousel">
							@foreach($relatedSkills as $skill)
							<div class="gigs-grid">
								<div class="gigs-img">
									<div class="img-slider">
										<div class="slide-images">
											<a
												href="{{ url('/talent/skills/' . $skill->id) }}">
												<img src="{{ asset('assets/img/home/service-01.jpg') }}"
													class="img-fluid" alt="{{ $skill->name }}">
											</a>
										</div>
									</div>

									<div class="card-overlay-badge">
										<span class="badge bg-danger">
											<i class="fa-solid fa-meteor"></i> {{ $skill->level }}
										</span>
									</div>

									<div class="fav-selection">
										<a role="button" tabindex="0" class="fav-icon">
											<i class="feather-heart"></i>
										</a>
									</div>

									<div class="user-thumb">
										<a
											href="{{ url('/talent-profile/' . ($skill->talent->id ?? '')) }}">
											<img src="{{ asset('assets/img/user/profile.jpg') }}"
												alt="{{ $skill->talent->name ?? 'Talent' }}">
										</a>
									</div>
								</div>

								<div class="gigs-content">
									<div class="gigs-info">
										<a
											href="{{ url('/skills/category/' . $skill->category_id) }}">
											<span
												class="badge bg-primary-light">{{ $skill->category->name ?? 'Uncategorized' }}</span>
										</a>
										<p>
											<i class="ti ti-map-pin-check"></i>
											{{ $skill->talent->address ?? 'Unknown' }}
										</p>
									</div>

									<div class="gigs-title">
										<h3>
											<a
												href="{{ url('skills/'.$skill->slug) }}">{{ $skill->name }}</a>
										</h3>
									</div>

									<div class="star-rate">
										<span>
											<i class="fa-solid fa-star"></i>
											{{ $skill->average_rating ? number_format($skill->average_rating, 1) : '0.0' }}
											({{ $skill->total_reviews ?? 0 }} Reviews)
										</span>
									</div>

									<div class="gigs-card-footer">
										<div>
											<a role="button" tabindex="0" class="share-icon">
												<i class="feather-share-2"></i>
											</a>
											<span class="badge">{{ $skill->tags }}</span>
										</div>
									</div>
								</div>
							</div>
							@endforeach
						</div>

					</div>
				</div>
			</div>
		</div>


	</div>
</div>

</div>

@endsection