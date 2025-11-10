@extends('layouts.guest')
@section('title', 'exciting Events')
@section('content')

<div class="page-content content">
	<div class="container">
		<div class="row">
			<div class="section-header-two text-center">
				<h2 class="mb-2"><span class="title-bg"></span>Our New events<span class="title-bg2"></span></h2>
				<p>Unlock a world of opportunities and take control of your future</p>
			</div>
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