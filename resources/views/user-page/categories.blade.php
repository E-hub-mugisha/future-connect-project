@extends('layouts.guest')
@section('content')

<!-- Breadcrumb -->
<div class="breadcrumb-bar">
	<div class="breadcrumb-img">
		<div class="breadcrumb-left">
			<img src="assets/img/bg/banner-bg-03.png" alt="img">
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-12">
				<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="index.html">Home</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">Categories</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">
					Browse Categories
				</h2>
			</div>
		</div>
	</div>
</div>
<!-- /Breadcrumb -->


<!-- Future Connect: Popular Talent Categories -->
<div class="popular-section-two">
	<div class="container">
		<div class="section-header-two text-center" data-aos="fade-up">
			<h2 class="mb-2"><span class="title-bg"></span>Popular Talent Categories<span class="title-bg2"></span></h2>
			<p>Discover inspiring stories, impactful skills, and creative talent across Africa</p>
		</div>
		<div
			class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
			@foreach($categories as $cat)
			<div class="col d-flex">
				<div class="pop-category flex-fill" data-aos="flip-left">
					<span><i class="ti ti-movie"></i></span>
					<h6 class="mb-1"><a
							href="{{ url('/talents/category/' . $cat->slug) }}">{{ $cat->name }}</a>
					</h6>
					<p>85 Stories</p>
				</div>
			</div>
			@endforeach
		</div>
	</div>
</div>
<!-- /Future Connect: Popular Talent Categories -->

<!-- Load More -->
<div class="search-load-btn">
	<a role="button" tabIndex="0" class="btn btn-primary d-inline-flex align-items-center">
		<i class="ti ti-loader-3 me-2"></i> Load More
	</a>
</div>
<!-- /Load More -->

@endsection