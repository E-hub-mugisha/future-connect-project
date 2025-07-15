@extends('layouts.guest')
@section('content')

<!-- Breadcrumb -->
<div class="breadcrumb-bar">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-12">
				<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="{{ route('user.home') }}">Home</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">
					Terms & Conditions
				</h2>
			</div>
		</div>
	</div>
</div>
<!-- /Breadcrumb -->

<!-- Terms & Condition -->
<div class="page-content">
	<div class="privacy-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="terms-policy">
						<h6 class="mb-3">Introduction</h6>
						<p class="mb-3">Welcome to DreamsGigs. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions (“Terms”). Please read them carefully before using our services.</p>
						<h6 class="mb-3">Acceptance of Terms</h6>
						<ul>
							<li class="mb-2"><span class="blue-dot"></span>By accessing or using our Gigs, you confirm that you have read, understood, and agreed to these Terms.</li>
							<li class="mb-3"><span class="blue-dot"></span>If you do not agree to these Terms, you may not use the Website or its services.</li>
						</ul>
						<h6 class="mb-3"> Eligibility</h6>
						<ul>
							<li class="mb-2"><span class="blue-dot"></span>Users must be at least 18 years old or have parental/guardian consent to use the platform</li>
							<li class="mb-3"><span class="blue-dot"></span>Organizations must ensure that their members comply with these Terms</li>
						</ul>
						<h6 class="mb-3">Account Registration</h6>
						<ul>
							<li class="mb-2"><span class="blue-dot"></span>Users are required to register an account to access courses and other features.</li>
							<li class="mb-2"><span class="blue-dot"></span>You agree to provide accurate and complete information during registration.</li>
							<li class="mb-3"><span class="blue-dot"></span>You are responsible for maintaining the confidentiality of your login credentials.</li>
						</ul>
						<h6 class="mb-3">Payments and Subscriptions</h6>
						<ul>
							<li class="mb-2"><span class="blue-dot"></span>Certain courses or features may require payment or a subscription.</li>
							<li class="mb-3"><span class="blue-dot"></span>You are responsible for any taxes applicable to your purchase.</li>
						</ul>
						<h6 class="mb-3">Changes to Terms & Conditions</h6>
						<ul>
							<li class="mb-0">DreamsGigs may update these Terms & Conditions periodically. Any changes will be communicated through the website or via email.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- /Terms & Condition -->

@endsection