@php
$categories = \App\Models\Category::inRandomOrder()->take(3)->get();

if (!function_exists('isActiveRoute')) {
function isActiveRoute($route)
{
return request()->routeIs($route) ? 'active' : '';
}
}
@endphp

<!-- Header -->
<header class="header">
    {{-- TOP INFO BAR --}}
    <div class="top-header d-none d-lg-block">
        <div class="container d-flex justify-content-between">
            <div class="top-text">info@futureconnect.rw · +250 784 123 456</div>
            <div class="top-link d-flex gap-3">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
    <div class="container">

        <nav class="navbar navbar-expand-lg header-nav p-0">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <a href="{{ route('user.home') }}" class="navbar-brand logo">
                    <img src="{{ asset('assets/img/WORDMARK - WHITE.png')}}" class="img-fluid" alt="Logo">
                </a>
                <a href="{{ route('user.home') }}" class="dark-logo">
                    <img src="{{ asset('assets/img/WORDMARK - WHITE.png')}}" alt="Logo" class="img-fluid">
                </a>
                <a href="{{ route('user.home') }}" class="navbar-brand logo-small">
                    <img src="{{ asset('assets/img/WORDMARK - WHITE.png')}}" class="img-fluid" alt="Logo">
                </a>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a href="{{ route('user.home') }}" class="menu-logo">
                        <img src="{{ asset('assets/img/WORDMARK - WHITE.png')}}" class="img-fluid" alt="Logo">
                    </a>
                    <a href="{{ route('user.home') }}" class="menu-logo dark-logo">
                        <img src="{{ asset('assets/img/WORDMARK - WHITE.png')}}" alt="Logo" class="img-fluid">
                    </a>
                    <a id="menu_close" class="menu-close" href="#"> <i class="fas fa-times"></i></a>
                </div>
                <ul class="main-nav navbar-nav">
                    <li><a href="{{ route('user.jobs.index') }}">Find Work</a></li>

                    {{-- FIND TALENT --}}
                    <li class="has-submenu megamenu">
                        <a href="javascript:void(0)">Skills Hub <i class="ti ti-chevron-down small"></i></a>
                        <ul class="submenu mega-submenu">
                            <li>
                                {{-- Desktop Mega Menu --}}
                                <div class="megamenu-wrapper">
                                    <div class="row g-2">
                                        <div class="col-md-3">
                                            <h6 class="mb-2">Skills Hub</h6>
                                            <ul>
                                                <li><a class="p-2" href="{{ route('user.talents') }}">Browse Skills</a></li>
                                                <li><a class="p-2" href="#">Verified skills</a></li>
                                                <li><a class="p-2" href="#">Top Rated</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3">
                                            <h6 class="mb-2">Skills Categories</h6>
                                            <ul>
                                                @foreach($categories as $cat)
                                                <li><a class="p-2" href="{{ url('/talents/category/' . $cat->slug) }}">{{ $cat->name }}</a></li>
                                                @endforeach
                                            </ul>
                                        </div>
                                        <div class="col-md-3">
                                            <h6 class="mb-2">Hire</h6>
                                            <ul>
                                                <li><a class="p-2" href="#">Post a Job</a></li>
                                                <li><a class="p-2" href="#">Hire for a Project</a></li>
                                                <li><a class="p-2" href="#">Quick Hire</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3">
                                            <h6 class="mb-2">Register Skills</h6>
                                            <ul>
                                                <li><a class="p-2" href="{{ route('user.register_as_talent') }}">Register Skills</a></li>
                                                <li><a class="p-2" href="{{ route('user.how-it-works') }}">How It Works</a></li>
                                                <li><a class="p-2" href="#">Success Stories</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {{-- Mobile Accordion Menu --}}
                                <ul class="mobile-submenu d-lg-none collapse">
                                    <li>
                                        <a data-bs-toggle="collapse" href="#talentSub1" role="button" aria-expanded="false">
                                            Skills Hub <i class="ti ti-chevron-down small"></i>
                                        </a>
                                        <ul class="collapse" id="talentSub1">
                                            <li><a href="{{ route('user.talents') }}">Browse Skills</a></li>
                                            <li><a href="#">Verified Skills</a></li>
                                            <li><a href="#">Top Rated</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" href="#talentSub2" role="button" aria-expanded="false">
                                            Hire <i class="ti ti-chevron-down small"></i>
                                        </a>
                                        <ul class="collapse" id="talentSub2">
                                            <li><a href="#">Post a Job</a></li>
                                            <li><a href="#">Hire for a Project</a></li>
                                            <li><a href="#">Quick Hire</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" href="#talentSub3" role="button" aria-expanded="false">
                                            Register Your Skills <i class="ti ti-chevron-down small"></i>
                                        </a>
                                        <ul class="collapse" id="talentSub3">
                                            <li><a href="{{ route('user.register_as_talent') }}">Register Skills</a></li>
                                            <li><a href="#">How It Works</a></li>
                                            <li><a href="#">Success Stories</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="{{ route('user.courses') }}">Learning</a></li>
                    <li><a href="{{ route('user.products.index') }}">Marketplace</a></li>
                    <li><a href="{{ route('talent.connections-room') }}">Connect</a></li>
                    <li><a href="{{ route('user.announcements') }}">Community</a></li>
                    <li><a href="{{ route('pricing') }}">Pricing</a></li>
                    <li><a href="{{ route('user.contact') }}">Help</a></li>

                </ul>
            </div>

            <div class="d-flex align-items-center">
                <ul class="nav header-navbar-rht">
                    @auth
                    @php
                    $dashboards = [
                    'admin'=>'admin.dashboard',
                    'agent'=>'agent.dashboard',
                    'talent'=>'talent.dashboard',
                    'seller'=>'seller.dashboard',
                    'user'=>'user.dashboard'
                    ];
                    @endphp
                    <li class="nav-item">
                        <a class="btn btn-light d-inline-flex align-items-center" href="{{ route($dashboards[auth()->user()->role] ?? 'user.dashboard') }}"><i class="ti ti-lock me-1"></i>Dashboard</a>
                    </li>
                    @endauth

                    @guest
                    <li><a class="btn btn-outline-light rounded-pill d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#loginModal">Sign In</a></li>
                    @endguest
                    <li class="nav-item">
                        <a class="btn btn-light rounded-pill d-inline-flex align-items-center" onclick="toggleSearchOverlay(event)"><i class="ti ti-user me-1"></i>Search</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
<!-- /Header -->

<!-- Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">

            <!-- Header -->
            <div class="modal-header border-0 bg-gradient text-white"
                style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title fw-bold" id="loginModalLabel">
                    Hi, Welcome Back!
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <!-- Body -->
            <div class="modal-body px-4 py-4">
                <form action="{{ route('login') }}" method="POST">
                    @csrf

                    <div class="text-center mb-4">
                        <img src="{{ asset('assets/img/WORDMARK - WHITE.png')}}" alt="Logo" style="height: 30px;" class="mb-3" />
                        <p class="text-muted small">Fill in your credentials to continue</p>
                    </div>

                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label fw-semibold">Email</label>
                            <div class="input-group input-group-lg rounded-3 shadow-sm">
                                <span class="input-group-text bg-light border-0">
                                    <i class="feather-mail text-primary"></i>
                                </span>
                                <input type="email" name="email" class="form-control border-0 rounded-end" placeholder="you@example.com" required>
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="form-label fw-semibold">Password</label>
                            <div class="input-group input-group-lg rounded-3 shadow-sm">
                                <span class="input-group-text bg-light border-0">
                                    <i class="feather-lock text-primary"></i>
                                </span>
                                <input type="password" name="password" class="form-control border-0 rounded-end" placeholder="••••••••" required>
                            </div>
                        </div>

                        <div class="col-12 d-flex justify-content-between align-items-center mt-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember">
                                <label class="form-check-label small" for="remember">Remember Me</label>
                            </div>
                            <a href="{{ route('password.request') }}" class="text-primary small text-decoration-none fw-semibold">
                                Forgot Password?
                            </a>
                        </div>

                        <div class="col-12 mt-4">
                            <button type="submit" class="btn btn-primary w-100 py-2 rounded-3 fw-semibold shadow-sm">
                                Sign In
                            </button>
                        </div>

                        <div class="text-center mt-3">
                            <p class="text-muted mb-0 small">
                                Don’t have an account?
                                <a href="{{ route('register') }}" class="fw-semibold text-primary text-decoration-none">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>

            <!-- Footer -->
            <div class="modal-footer border-0 bg-light py-2 justify-content-center small text-muted">
                © {{ date('Y') }} Future Connect • All rights reserved
            </div>
        </div>
    </div>
</div>

<!-- Seller Application Modal -->
<div class="modal fade" id="applySellerModal" tabindex="-1" aria-labelledby="applySellerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">

            <form action="{{ route('seller.store') }}" method="POST" class="p-2">
                @csrf

                <!-- Header -->
                <div class="modal-header border-0 bg-gradient text-white"
                    style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                    <h5 class="modal-title fw-bold" id="applySellerModalLabel">
                        🌟 Apply to Become a Seller
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Body -->
                <div class="modal-body py-4 px-3">
                    <p class="text-muted mb-4">
                        Join the <strong>Future Connect Shop</strong> and start selling products that empower our members.
                    </p>

                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Company Name</label>
                            <input type="text" name="company_name" class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="e.g. Creative Minds Ltd" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Email</label>
                            <input type="email" name="email" class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="e.g. example@domain.com" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Phone</label>
                            <input type="text" name="phone" class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="+250 700 123 456">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Address</label>
                            <input type="text" name="address" class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="e.g. Kigali, Rwanda">
                        </div>

                        <div class="col-12">
                            <label class="form-label fw-semibold">Company Description</label>
                            <textarea name="description" rows="3"
                                class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="Tell us more about your company, products, and goals..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="modal-footer border-0 d-flex justify-content-between px-4 py-3">
                    <button type="button" class="btn btn-primary border rounded-3 px-4 py-2 shadow-sm" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="submit" class="btn btn-primary px-5 py-2 rounded-3 shadow-sm fw-semibold">
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

{{-- SEARCH OVERLAY --}}
<section class="search-overlay-section">
    <div class="search-content position-relative">
        <button type="button" class="btn-close-custom position-absolute" onclick="closeSearchOverlay()"></button>
        <form action="{{ route('talent.search') }}" method="GET" class="search-input-group position-relative">
            <input type="text" class="form-control" name="keyword" placeholder="Search talents, skills or stories..." required>
            <button type="submit" class="btn-submit-custom"><i class="ti ti-search input-icon"></i></button>
        </form>
    </div>
</section>

<script>
    function toggleSearchOverlay(event) {
        event.preventDefault();
        document.querySelector('.search-overlay-section').classList.toggle('active');
    }

    function closeSearchOverlay() {
        document.querySelector('.search-overlay-section').classList.remove('active');
    }
    document.addEventListener('click', function(e) {
        const overlay = document.querySelector('.search-overlay-section');
        if (overlay.classList.contains('active') && !e.target.closest('.search-content') && !e.target.closest('.btn')) {
            overlay.classList.remove('active');
        }
    });

    // Mobile menu open/close
    function openMobileMenu() {
        document.getElementById("mobileMenu").classList.add("active");
    }

    function closeMobileMenu() {
        document.getElementById("mobileMenu").classList.remove("active");
    }

    // Mobile submenu collapse toggle
    // document.querySelectorAll('.mobile-submenu a[data-bs-toggle="collapse"]').forEach(el => {
    //     el.addEventListener('click', e => {
    //         e.preventDefault();
    //         const target = document.querySelector(el.getAttribute('href'));
    //         const bsCollapse = new bootstrap.Collapse(target, {
    //             toggle: true
    //         });
    //     });
    // });

    // Sticky header merge on scroll
    const header = document.querySelector('.c-header');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 80 && currentScroll > lastScroll) {
            header.classList.add('merged');
        } else if (currentScroll < 40) {
            header.classList.remove('merged');
        }
        lastScroll = currentScroll;
    });
</script>