@php
$categories = \App\Models\Category::inRandomOrder()->take(6)->get();
@endphp

<footer class="footer-two text-light pt-5 position-relative footer-glass">

    {{-- Footer Top Menu --}}
    <div class="footer-top-menu border-secondary py-3">
        <div class="container d-flex flex-wrap justify-content-center gap-4">
            <a href="{{ route('user.about') }}" class="text-light small fw-semibold">About Us</a>
            <a href="{{ route('user.how-it-works') }}" class="text-light small fw-semibold">How It Works</a>
            <a href="{{ route('user.stories') }}" class="text-light small fw-semibold">Stories</a>
            <a href="{{ route('user.courses') }}" class="text-light small fw-semibold">Courses</a>
            <a href="{{ route('user.blogs') }}" class="text-light small fw-semibold">Blog</a>
            <a href="{{ route('user.contact') }}" class="text-light small fw-semibold">Contact</a>
        </div>
    </div>

    {{-- Footer Top Section --}}
    <div class="footer-top-two py-5">
        <div class="container">
            <div class="row row-gap-5">

                {{-- About --}}
                <div class="col-lg-3 col-sm-6 footer-links">
                    <h6 class="fw-bold mb-3">About Future Connect</h6>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('user.about') }}"><i class="ti ti-chevron-right me-2"></i>About Us</a></li>
                        <li><a href="{{ route('user.how-it-works')}}"><i class="ti ti-chevron-right me-2"></i>How It Works</a></li>
                        <li><a href="{{ route('talent.connections-room')}}"><i class="ti ti-chevron-right me-2"></i>Connection Room</a></li>
                        <li><a href="{{ route('user.register_as_talent') }}"><i class="ti ti-chevron-right me-2"></i>Join the Platform</a></li>
                        <li><a href="{{ route('user.contact') }}"><i class="ti ti-chevron-right me-2"></i>Contact Us</a></li>
                    </ul>
                </div>

                {{-- Resources --}}
                <div class="col-lg-3 col-sm-6 footer-links">
                    <h6 class="fw-bold mb-3">Resources</h6>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('user.stories') }}"><i class="ti ti-chevron-right me-2"></i>Inspiring Stories</a></li>
                        <li><a href="{{ url('/courses') }}"><i class="ti ti-chevron-right me-2"></i>Courses</a></li>
                        <li><a href="{{ route('user.blogs') }}"><i class="ti ti-chevron-right me-2"></i>Blog</a></li>
                        <li><a href="{{ route('user.talents') }}"><i class="ti ti-chevron-right me-2"></i>Talents</a></li>
                        <li><a href="{{ route('user.faq') }}"><i class="ti ti-chevron-right me-2"></i>FAQs</a></li>
                    </ul>
                </div>

                {{-- Categories --}}
                <div class="col-lg-3 col-sm-6 footer-links">
                    <h6 class="fw-bold mb-3">Popular Categories</h6>
                    <ul class="list-unstyled">
                        @foreach($categories as $cat)
                        <li><a href="{{ url('/talents/category/' . $cat->slug) }}"><i class="ti ti-chevron-right me-2"></i>{{ $cat->name }}</a></li>
                        @endforeach
                    </ul>
                </div>

                {{-- Contact --}}
                <div class="col-lg-3 col-sm-6 footer-contact">
                    <h6 class="fw-bold mb-3">Get in Touch</h6>
                    <div class="d-flex align-items-start mb-3">
                        <span class="footer-icon me-3"><i class="fa fa-map-pin fs-5"></i></span>
                        <div>
                            <p class="mb-0 fw-semibold">Location</p>
                            <span>Kigali, Rwanda</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start mb-3">
                        <span class="footer-icon me-3"><i class="fa fa-device-tablet fs-5"></i></span>
                        <div>
                            <p class="mb-0 fw-semibold">Phone</p>
                            <span>+250 784 123 456</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start">
                        <span class="footer-icon me-3"><i class="fa fa-mail fs-5"></i></span>
                        <div>
                            <p class="mb-0 fw-semibold">Email</p>
                            <span><a href="mailto:info@futureconnect.rw" class="text-light text-decoration-none">info@futureconnect.rw</a></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    {{-- Footer Bottom Section --}}
    <div class="footer-bottom-two border-secondary py-4">
        <div class="container d-flex flex-column flex-lg-row justify-content-between gap-3">

            {{-- Logo --}}
            <a href="{{ route('user.home') }}" class="footer-logo mb-2 mb-lg-0">
                <img src="{{ asset('assets/img/WORDMARK - WHITE.png')}}" alt="Future Connect Logo" style="height:40px;">
            </a>

            {{-- Social Links --}}
            <div class="social-links mb-2 mb-lg-0">
                <ul class="list-unstyled d-flex gap-3 mb-0">
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
            </div>

            {{-- Legal Links --}}
            <div class="footer-links mb-2 mb-lg-0">
                <ul class="list-unstyled d-flex flex-wrap gap-3 mb-0 small">
                    <li><a href="{{ route('user.privacy-policy') }}" class="text-light text-decoration-none">Privacy Policy</a></li>
                    <li><a href="{{ route('user.terms-condition') }}" class="text-light text-decoration-none">Terms & Conditions</a></li>
                    <li><a href="{{ route('user.donation-policy') }}" class="text-light text-decoration-none">Donation Policy</a></li>
                </ul>
            </div>

            {{-- Copyright --}}
            <div class="copy-right-two small text-light">
                &copy; {{ date('Y') }} Future Connect. Empowering Stories. Real Impact.
            </div>

        </div>
    </div>
</footer>