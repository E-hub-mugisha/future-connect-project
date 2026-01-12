@php

$categories = \App\Models\Category::all();

if (!function_exists('isActiveRoute')) {
function isActiveRoute($route)
{
return request()->routeIs($route) ? 'active' : '';
}
}
@endphp

<style>
    .top-header {
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        border-bottom: 1px solid #4A91ED;
        padding: 6px 0;
        transition: transform .3s ease;
    }

    .top-header .top-text {
        color: #4A91ED;
    }

    .primary-header {
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        /* padding: 12px 0; */
    }

    .primary-menu li {
        list-style: none;
        margin-right: 18px;
    }

    .primary-menu li a {
        padding: 10px;
        /* font-weight: 500; */
        color: #2d2d2d;
    }

    .primary-menu li a:hover {
        color: #4A91ED;
    }

    /* -------- CENTER PRIMARY MENU -------- */
    .primary-header .navbar {
        position: relative;
    }

    /* Center group */
    .primary-menu {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex !important;
        align-items: center;
        justify-content: center;
    }

    /* spacing stays clean */
    .primary-menu li {
        margin: 0 14px;
    }

    /* -------- CENTER SECONDARY MENU -------- */
    .secondary-menu {
        justify-content: center;
        width: 100%;
    }

    /* -------- MOBILE SAFE -------- */
    @media(max-width:991px) {
        .primary-menu {
            position: static;
            transform: none;
        }
    }

    .secondary-header {
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        /* border-top: 1px solid #ececec;
        border-bottom: 1px solid #4A91ED; */
        /* position: sticky; */
        top: 0;
        z-index: 999;
        transition: transform .3s ease;
    }

    .secondary-menu {
        display: flex;
        gap: 18px;
        padding: 0;
    }

    .secondary-menu li {
        list-style: none;
    }

    .secondary-menu li a {
        padding: 13px 10px;
        display: block;
        color: #444;
        /* font-weight: 500; */
    }

    .secondary-menu li a:hover {
        color: #4A91ED;
    }

    .mega-parent {
        position: relative;
    }

    .mega-menu {
        position: absolute;
        left: 0;
        top: 100%;
        width: 800px;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        padding: 25px;
        border-radius: 12px;
        border: 1px solid #eaeaea;
        box-shadow: 0 20px 40px rgba(0, 0, 0, .08);
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: .3s ease;
    }

    .mega-parent:hover .mega-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .mega-menu h6 {
        font-weight: 700;
        margin-bottom: 10px;
    }

    .mega-menu ul {
        list-style: none;
        padding: 0;
    }

    .mega-menu ul li a {
        display: block;
        padding: 6px 0;
        color: #333;
    }

    .mega-menu ul li a:hover {
        color: #0d6efd;
    }

    @media(max-width:991px) {
        .top-header {
            display: none;
        }

        .primary-menu {
            display: none !important;
        }

        .secondary-header {
            display: none;
        }
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        height: 100%;
        background: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, .2);
        transition: .3s;
        z-index: 9999;
    }

    .mobile-menu.active {
        left: 0;
    }

    .mobile-header {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-bottom: 1px solid #ddd;
    }

    .mobile-nav {
        list-style: none;
        padding: 0;
    }

    .mobile-nav li a {
        display: block;
        padding: 14px 20px;
        border-bottom: 1px solid #f1f1f1;
        color: #333;
    }

    .mobile-nav li a:hover {
        background: #f5f7ff;
    }

    /* Hide text on mobile */
    .responsive-btn .btn-text {
        display: inline;
        /* desktop default */
    }

    @media(max-width:991px) {
        .responsive-btn .btn-text {
            display: none;
            /* hide text on mobile */
        }

        .responsive-btn {
            width: 40px;
            padding: 8px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .responsive-btn i {
            font-size: 18px;
        }
    }
</style>

<style>
    .search-overlay-section {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1055;
        width: 100%;
        height: 100vh;

        /* ✅ Transparent + Blur Background */
        background: rgba(53, 61, 93, 0.71);
        /* Slight tint for contrast */
        backdrop-filter: blur(5px);
        /* Main blur effect */
        -webkit-backdrop-filter: blur(5px);
        /* Safari support */

        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .search-overlay-section.active {
        display: flex;
    }

    .search-content {
        width: 55%;
        /* max-width: 600px; */
        /* padding: 20px; */
        background: rgba(255, 255, 255, 0.67);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 50px;
    }

    .search-input-group {
        position: relative;
    }

    .search-input-group .input-icon {
        position: absolute;
        top: 50%;
        left: 6px;
        transform: translateY(-50%);
        color: #ccc;
    }

    .search-input-group input {
        padding-left: 40px;
        border: none;
        border-bottom: 2px solid #0d6efd;
        background: transparent;
        color: #fff;
        font-size: 1.1rem;
        width: 100%;
    }

    .search-input-group input:focus {
        outline: none;
        border-color: #0d6efd;
    }

    @media (max-width: 576px) {
        .search-content {
            padding: 10px;
        }

        .search-input-group input {
            font-size: 1rem;
        }
    }

    /* Style for the close button */
    .btn-close-white {
        filter: invert(1);
        opacity: 0.8;
    }

    .btn-close-white:hover {
        opacity: 1;
    }

    /* Close Button */
    .btn-close-custom {
        width: 36px;
        height: 36px;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.8);
        color: #333;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-close-custom::before {
        content: "×";
        /* custom close icon */
    }

    .btn-close-custom:hover {
        background: #0d6efd;
        color: #fff;
    }

    /* Submit Button */
    .btn-submit-custom {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        border: none;
        background: #0d6efd;
        color: #fff;
        padding: 14px 14px;
        border-radius: 50px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .btn-submit-custom:hover {
        background: #084298;
    }

    /* Modern Input Focus Effect */
    .form-control:focus,
    .form-select:focus {
        border-color: #0052D4 !important;
        box-shadow: 0 0 0 0.2rem rgba(0, 82, 212, 0.25) !important;
    }

    /* Smooth modal appearance */
    .modal-content {
        animation: slideUp 0.35s ease-in-out;
    }

    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .header {
        position: sticky;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1001;
        background: var(--white);
        transition: ease all 0.5s;
        -webkit-transition: ease all 0.5s;
        -ms-transition: ease all 0.5s;
    }
</style>

<header class="c-header">

    {{-- ================= TOP HEADER ================= --}}
    <div class="top-header" id="topHeader">
        <div class="container d-flex justify-content-between align-items-center small">
            <div class="top-text">
                <i class="ti ti-mail"></i> support@example.com &nbsp; | &nbsp;
                <i class="ti ti-phone"></i> +250 780 000 000
            </div>

            <div class="d-flex gap-3">
                <li class="me-2"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li class="me-2"><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                <li class="me-2"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li class="me-2"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
            </div>
        </div>
    </div>

    {{-- ================= PRIMARY HEADER ================= --}}
    <div class="primary-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg">

                {{-- Mobile Toggle --}}
                <button class="navbar-toggler" type="button" onclick="openMobileMenu()">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {{-- Logo --}}
                <a href="{{ route('user.home') }}" class="navbar-brand">
                    <img src="{{ asset('assets/img/WORDMARK.png') }}" height="48">
                </a>

                {{-- PRIMARY MENU --}}
                <ul class="nav primary-menu d-none d-lg-flex ms-4">

                    <li><a href="{{ route('user.home') }}">Home</a></li>

                    {{-- MEGA DROPDOWN --}}
                    <li class="mega-parent">
                        <a href="#">
                            Skills Hub <i class="ti ti-chevron-down small"></i>
                        </a>

                        <div class="mega-menu">
                            <div class="row g-4">

                                {{-- Popular Categories --}}
                                <div class="col-md-6">
                                    <h6>Popular Categories</h6>
                                    <ul>
                                        @php
                                        $popularCategories = \App\Models\Talent::with('category')
                                        ->whereNotNull('category_id')
                                        ->select('category_id')
                                        ->selectRaw('COUNT(*) as total')
                                        ->groupBy('category_id')
                                        ->orderByDesc('total')
                                        ->take(3)
                                        ->get()
                                        ->map(function($item){
                                        return [
                                        'name' => $item->category->name ?? '-',
                                        'slug' => $item->category->slug ?? '#',
                                        'total' => $item->total
                                        ];
                                        });
                                        @endphp

                                        @forelse($popularCategories as $category)
                                        <li>
                                            <a href="{{ route('user.talents.category', $category['slug']) }}">
                                                {{ $category['name'] }}
                                                <span class="text-muted small">({{ $category['total'] }})</span>
                                            </a>
                                        </li>
                                        @empty
                                        <li class="text-muted">No categories yet</li>
                                        @endforelse
                                    </ul>
                                </div>

                                {{-- Actions --}}
                                <div class="col-md-6">
                                    <h6>Actions</h6>
                                    <ul>
                                        <li><a href="{{ route('user.talents') }}">Browse Talents</a></li>
                                        <li><a onclick="toggleSearchOverlay(event)">Search Skills</a></li>
                                        <li><a href="{{ route('user.register_as_talent') }}">Register your skills</a></li>
                                        
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </li>


                    <li><a href="{{ route('user.courses') }}">Learning Center</a></li>
                    <li><a href="{{ route('user.contact') }}">Contact</a></li>
                    <li><a href="{{ route('user.about') }}">About</a></li>
                </ul>

                {{-- RIGHT --}}
                <ul class="navbar-nav ms-auto align-items-center gap-2">

                    @auth

                    @php
                    $role = auth()->user()->role;

                    // Define dashboard routes per role
                    $dashboards = [
                    'admin' => 'admin.dashboard',
                    'agent' => 'agent.dashboard',
                    'talent' => 'talent.dashboard',
                    'seller' => 'seller.dashboard',
                    'user' => 'user.dashboard'
                    ];
                    @endphp
                    <li class="nav-item">
                        <a href="{{ route($dashboards[$role] ?? 'user.dashboard') }}" class="btn btn-outline-dark responsive-btn">
                            <i class="ti ti-dashboard"></i>
                            <span class="btn-text"> Dashboard</span>
                        </a>
                    </li>
                    @endauth

                    @guest
                    <li class="nav-item">
                        <a class="btn btn-outline-primary rounded-pill responsive-btn" data-bs-toggle="modal" data-bs-target="#loginModal">
                            <i class="ti ti-lock"></i>
                            <span class="btn-text"> Sign In</span>
                        </a>
                    </li>
                    @endguest

                    <li class="nav-item">
                        <a class="btn btn-primary rounded-pill responsive-btn" onclick="toggleSearchOverlay(event)">
                            <i class="ti ti-search"></i>
                            <span class="btn-text"> Search</span>
                        </a>
                    </li>

                </ul>


            </nav>
        </div>
    </div>

    {{-- ================= SECONDARY STICKY NAV ================= --}}
    <div class="secondary-header" id="secondaryHeader">
        <div class="container">
            <ul class="nav secondary-menu">
                <li><a href="{{ route('user.jobs.index') }}"><i class="ti ti-briefcase"></i> Find Work</a></li>
                <li><a href="{{ route('talent.connections-room') }}"><i class="ti ti-message-dots"></i> Networking</a></li>
                <li><a href="{{ route('user.products.index') }}"><i class="ti ti-shopping-cart"></i> Marketplace</a></li>
                <li><a href="{{ route('user.announcements') }}"><i class="ti ti-bell"></i> What's New</a></li>
                <li><a href="{{ route('pricing') }}"><i class="ti ti-currency-dollar"></i> Pricing</a></li>
            </ul>
        </div>
    </div>

    {{-- ================= MOBILE MENU ================= --}}
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-header">
            <span>Menu</span>
            <button onclick="closeMobileMenu()"><i class="fas fa-times"></i></button>
        </div>

        <ul class="mobile-nav">
            <li><a href="{{ route('user.home') }}">Home</a></li>
            <li><a href="{{ route('user.talents') }}">Skills Hub</a></li>
            <li><a href="{{ route('user.courses') }}">Learning Center</a></li>
            <li><a href="{{ route('user.jobs.index') }}">Find Work</a></li>
            <li><a href="{{ route('talent.connections-room') }}">Networking</a></li>
            <li><a href="{{ route('user.products.index') }}">Marketplace</a></li>
            <li><a href="{{ route('user.announcements') }}">What's New</a></li>
            <li><a href="{{ route('pricing') }}">Pricing</a></li>
        </ul>
    </div>

</header>


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
                        <img src="{{ asset('assets/img/WORDMARK.png') }}" alt="Logo" style="height: 30px;" class="mb-3" />
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


<section class="search-overlay-section">
    <div class="search-overlay"></div>

    <div class="search-content position-relative">
        <!-- Close Button -->
        <button type="button"
            class="btn-close-custom position-absolute "
            aria-label="Close"
            onclick="closeSearchOverlay()">
        </button>

        <!-- Search Form -->
        <form action="{{ route('talent.search') }}" method="GET" class="search-input-group position-relative">
            <input type="text" class="form-control" name="keyword" placeholder="Search talents, skills or stories..." required>
            <button type="submit" class="btn-submit-custom">
                <i class="ti ti-search input-icon"></i>
            </button>
        </form>
    </div>
</section>


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


<script>
    function toggleSearchOverlay(event) {
        event.preventDefault();
        const overlaySection = document.querySelector('.search-overlay-section');
        overlaySection.classList.toggle('active');
    }

    function closeSearchOverlay() {
        document.querySelector('.search-overlay-section').classList.remove('active');
    }

    // Optional: close overlay when clicking outside the search box
    document.addEventListener('click', function(e) {
        const overlay = document.querySelector('.search-overlay-section');
        if (
            overlay.classList.contains('active') &&
            !e.target.closest('.search-content') &&
            !e.target.closest('.btn')
        ) {
            overlay.classList.remove('active');
        }
    });
</script>

<script>
    let lastScroll = 0;
    const topHeader = document.getElementById("topHeader");

    window.addEventListener("scroll", () => {
        let current = window.pageYOffset;
        if (current > lastScroll) {
            topHeader.style.transform = "translateY(-100%)";
        } else {
            topHeader.style.transform = "translateY(0)";
        }
        lastScroll = current;
    });

    function openMobileMenu() {
        document.getElementById("mobileMenu").classList.add("active");
    }

    function closeMobileMenu() {
        document.getElementById("mobileMenu").classList.remove("active");
    }
</script>