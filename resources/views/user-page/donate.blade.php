@extends('layouts.guest')
@section('content')

<!-- Breadcrumb -->
<div class="breadcrumb-bar breadcrumb-bar-info">

	<div class="container">
		<div class="row">
			<div class="col-md-12 col-12">
				<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="{{ route('user.home') }}">Home</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">Donate</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title mb-0">
					Make a Donation
				</h2>
			</div>
		</div>
	</div>
</div>
<!-- /Breadcrumb -->

<!-- Page Content -->
<div class="page-content">
	<div class="container">
		<div class="row">
			<!-- Donation Form -->
			<div class="col-lg-8">
				<div class="login-card mb-3 mb-lg-0">
					<div class="login-heading text-start mb-4">
						<h5>Donor Information</h5>
					</div>
					<div class="row">
						<div class="col-lg-6">
							<div class="form-wrap form-focus">
								<label class="mb-1 fw-medium text-dark"> First Name <span
										class="text-primary">*</span> </label>
								<input type="text" class="form-control floating" name="first_name">
							</div>
						</div>
						<div class="col-lg-6">
							<div class="form-wrap form-focus">
								<label class="mb-1 fw-medium text-dark"> Last Name <span
										class="text-primary">*</span> </label>
								<input type="text" class="form-control floating" name="last_name">
							</div>
						</div>
						<div class="col-lg-12">
							<div class="form-wrap form-focus">
								<label class="mb-1 fw-medium text-dark"> Email Address <span
										class="text-primary">*</span> </label>
								<input type="email" class="form-control floating" name="email">
							</div>
						</div>
						<div class="col-lg-12">
							<div class="form-wrap form-focus">
								<label class="mb-1 fw-medium text-dark"> Donation Amount ($) <span
										class="text-primary">*</span> </label>
								<input type="number" class="form-control floating" name="donation_amount"
									min="1">
							</div>
						</div>
						<div class="col-lg-12">
							<div class="form-wrap form-focus">
								<label class="mb-1 fw-medium text-dark"> Message (Optional)</label>
								<textarea class="form-control" rows="3" name="message"></textarea>
							</div>
						</div>
					</div>

					<div class="check-payment mt-4">
						<h5>Payment Method</h5>
						<ul class="nav payment-gateway">
							<li>
								<div class="active" data-bs-toggle="tab" data-bs-target="#pay-paypal">
									<label class="payment-card mb-0">
										<input type="radio" name="payment" checked>
										<span class="content">
											<span class="radio-btn"></span>
											<span class="payment-text">Pay with PayPal</span>
											<img src="assets/img/payment/gateway-01.png" alt="">
										</span>
									</label>
								</div>
							</li>
							<li>
								<div data-bs-toggle="tab" data-bs-target="#pay-stripe">
									<label class="payment-card mb-0">
										<input type="radio" name="payment">
										<span class="content">
											<span class="radio-btn"></span>
											<span class="payment-text">Pay with Stripe</span>
											<img src="assets/img/payment/gateway-02.png" alt=""
												class="img-fluid img2">
										</span>
									</label>
								</div>
							</li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane show active" id="pay-paypal">
								<div class="row">
									<div class="col-lg-6">
										<div class="form-wrap form-focus mb-0">
											<label class="mb-1 fw-medium text-dark"> PayPal Email <span
													class="text-primary">*</span> </label>
											<input type="email" class="form-control">
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="pay-stripe">
								<div class="row">
									<div class="col-lg-6">
										<div class="form-wrap form-focus mb-0">
											<label class="mb-1 fw-medium text-dark"> Card Number <span
													class="text-primary">*</span> </label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-wrap form-focus mb-0">
											<label class="mb-1 fw-medium text-dark"> CVV <span
													class="text-primary">*</span> </label>
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Donation Form -->

			<!-- Donation Summary -->
			<div class="col-lg-4">
				<div class="service-widget member-widget mb-0" style="background: var(--white);">
					<h5 class="service-head d-flex align-items-center">Donation Summary</h5>
					<div class="user-details bg-light p-3 mb-16">
						<div class="user-img">
							<img src="{{ asset('assets/img/charity.webp') }}" alt="Donation">
						</div>
						<div class="user-info">
							<h5>Support Our Cause</h5>
							<p>Your generous donation will help make a difference.</p>
						</div>
					</div>
					<ul class="member-info">
						<li>
							Donation Amount
							<span>$298</span>
						</li>
						<li>
							Processing Fee
							<span>$4</span>
						</li>
						<li>
							Total
							<span>$302</span>
						</li>
					</ul>
					<a href="donation-success.html" class="btn btn-primary mb-0 w-100">Donate $302</a>
				</div>
			</div>
			<!-- /Donation Summary -->
		</div>
	</div>
</div>
<!-- /Page Content -->

@endsection