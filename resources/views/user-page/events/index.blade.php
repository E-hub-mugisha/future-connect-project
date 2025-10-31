@extends('layouts.guest')

@section('title', 'Events')

@section('content')

<style>
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

<div class="page-content category-wrap">
	<div class="container">
		<div class="row">

			<!-- Category Section -->
			<div class="col-md-12">
				<div class="marketing-section">
					<div class="marketing-content">
						<h2>All Categories</h2>
						<p>Digital marketing is an essential component of modern business, given the widespread use of the internet and digital devices.</p>
						<div class="marketing-bg">
							<img src="assets/img/bg/market-bg.png" alt="img" class="market-bg">
							<img src="assets/img/bg/market-bg-01.png" alt="img" class="market-img">
						</div>
					</div>
				</div>

				<!-- Trending Categories -->
				<div class="trend-section">
					<div class="row align-items-center">
						<div class="col-sm-10 sortby-title">
							<h4>Trending Categories Today</h4>
						</div>
						<div class="col-sm-2 text-sm-end">
							<div class="owl-nav service-nav nav-control nav-top"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-12">
							<div class="service-sliders owl-carousel owl-loaded owl-drag">





								<div class="owl-stage-outer">
									<div class="owl-stage" style="transform: translate3d(-1320px, 0px, 0px); transition: all; width: 4290px;">
										<div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-02.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Business</a></h5>
														<p>1590 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-03.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Social Media</a></h5>
														<p>7860 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-04.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Artificial Intelligence</a></h5>
														<p>4590 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-02.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Business</a></h5>
														<p>590 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item active" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-01.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Programming &amp; Tech</a></h5>
														<p>5678 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item active" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-02.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Business</a></h5>
														<p>1590 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item active" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-03.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Social Media</a></h5>
														<p>7860 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item active" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-04.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Artificial Intelligence</a></h5>
														<p>4590 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-02.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Business</a></h5>
														<p>590 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-01.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Programming &amp; Tech</a></h5>
														<p>5678 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-02.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Business</a></h5>
														<p>1590 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-03.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Social Media</a></h5>
														<p>7860 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
										<div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
											<div class="service-box">
												<div class="service-info">
													<span class="service-icon">
														<img src="assets/img/icons/service-04.svg" alt="icon">
													</span>
													<div class="servive-name">
														<h5><a href="service.html">Artificial Intelligence</a></h5>
														<p>4590 Sevices</p>
													</div>
												</div>
												<a href="service.html"><i class="feather-arrow-up-right"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div class="owl-dots disabled"></div>
							</div>
							<!-- /Service Slider -->
						</div>
					</div>
				</div>
				<!-- /Trending Categories -->

			</div>
			<!-- /Category Section -->

			<!-- Sort By -->
			<div class="sortby-title">
				<div class="row align-items-center">
					<div class="col-md-12">
						<h4>10 Categories found with <span>14,787</span> Services</h4>
					</div>
				</div>
			</div>
			<!-- /Sort By -->
			@forelse($events as $event)
			<!-- Categories List -->
			<div class="col-xl-3 col-md-6">
				<div class="gigs-grid postLists">
					<div class="gigs-img">
						<div class="img-slider owl-carousel">
							<div class="slide-images">
								<a href="{{ route('user.events.show', $event->id) }}">
									<img src="{{ asset('image/thumbnails/'.$event->image) }}" class="img-fluid" style="height: 240px; object-fit: cover; transition: transform 0.3s ease;" alt="{{ $event->title }}">
								</a>
							</div>
						</div>
						<div class="card-overlay-badge">
							<a href="#">
								<span class="badge bg-primary"><i class="feather-star"></i>{{ $event->type}}</span>
							</a>
						</div>
					</div>

					<div class="gigs-content">
						<div class="gigs-info">
							<a href="#" class="badge bg-primary-light">
								{{ $event->type }}
							</a>
							<div class="star-rate">
								<span>
									<i class="fa-solid fa-star"></i>
									
								</span>
							</div>
						</div>

						<div class="gigs-title">
							<h3><a href="{{ route('user.events.show', $event->id) }}">{{ $event->title }}</a></h3>
						</div>

						<ul class="gigs-user-info">
							<li class="gigs-user">
								<img src="{{ asset('assets/img/user/profile.jpg') }}" alt="img">
								<p>{{ $event->organizer->name ?? 'Unknown' }}</p>
							</li>
							<li class="gigs-loc">
								<p><i class="ti ti-map-pin-check"></i>{{ $event->venue ?? 'N/A' }}</p>
							</li>
						</ul>

						<div class="gigs-card-footer d-flex justify-content-between align-items-center">
							<h5>
								Free
							</h5>
							<span class="badge">Delivery in 1 day</span>
						</div>
					</div>
				</div>
			</div>
			<!-- /Categories List -->
			@empty
			<p class="text-center">No events found.</p>
			@endforelse
		</div>
	</div>
</div>

@endsection