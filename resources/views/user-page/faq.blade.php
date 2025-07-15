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
						<li class="breadcrumb-item active" aria-current="page">FAQ</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">
					FAQ
				</h2>
			</div>
		</div>
	</div>
</div>
<!-- /Breadcrumb -->

<!-- Faq Sction -->
<section class="faq-section">
    <div class="container">
        <div class="section-title mb-4 aos" data-aos="fade-up">
            <h2 class="mb-1">Most frequently asked questions</h2>
            <p>Here are the most frequently asked questions you may check before getting started.</p>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="faq-wrapper faq-lists">
                    @foreach ($faqs as $index => $faq)
                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#faq{{ $index }}" aria-expanded="false" aria-controls="faq{{ $index }}">
                                    {{ $faq->question }}
                                </a>
                            </h4>
                            <div id="faq{{ $index }}" class="card-collapse collapse" data-bs-parent=".faq-lists">
                                <div class="faq-content">
                                    <p>{!! nl2br(e($faq->answer)) !!}</p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>

<!-- /Faq Sction -->
@endsection