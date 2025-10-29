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
    .header {
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        height: 6rem;
        /* Reduced height */
        padding: 7px 5px;
    }

    .main-menu-wrapper {
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        padding: 15px 2rem;
        border-radius: 4rem;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }


    .main-menu-wrapper .main-nav a {
        color: #319BF9;
        font-size: 13px;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        border: 2px solid transparent;
        display: inline-block;
        /* Prevents full-width behavior */

    }

    .main-menu-wrapper .main-nav a:hover,
    .main-menu-wrapper .main-nav a.active {
        color: #319BF9;
        border-bottom: 2px solid #F0F2F7;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        border-radius: 10px;
        padding: 6px 20px;
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
.form-control:focus, .form-select:focus {
    border-color: #0052D4 !important;
    box-shadow: 0 0 0 0.2rem rgba(0, 82, 212, 0.25) !important;
}

/* Smooth modal appearance */
.modal-content {
    animation: slideUp 0.35s ease-in-out;
}

@keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

</style>

<header class="header">
    <div class="container">
        <nav class="navbar navbar-expand-lg header-nav p-0">
            <div class="navbar-header">
                <a id="mobile_btn" role="button" tabindex="0">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>

                <a href="{{ route('user.home') }}">
                    <img src="{{ asset('assets/img/WORDMARK.png') }}" class="img-fluid" alt="Logo" style="height: 50px;" />
                </a>
            </div>

            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a id="menu_close" class="menu-close" role="button" tabindex="0"><i class="fas fa-times"></i></a>
                </div>

                <ul class="main-nav navbar-nav">
                    {{-- Home --}}
                    <li>
                        <a href="{{ route('user.home') }}" class="nav-link {{ isActiveRoute(['user.home']) }}">Home</a>
                    </li>

                    {{-- Talents --}}
                    <li class="has-submenu">
                        {{-- Parent menu link does not go anywhere --}}
                        <a role="button" class="nav-link
                            {{
                                // Check if any talent-related routes or URLs are active
                                isActiveRoute(
                                    ['user.talents'], // route names
                                    ['talents*', 'register_as_talent', 'talents/category/*']
                                )
                            }}"
                            tabindex="0">Talents <i class="fas fa-chevron-down"></i></a>

                        <ul class="submenu">
                            <li>
                                <a href="{{ route('user.talents') }}"
                                    class="{{ isActiveRoute(['user.talents']) }}">All Talents</a>
                            </li>
                            <li>
                                <a href="{{ url('/register_as_talent') }}"
                                    class="{{ Request::is('register_as_talent') ? 'active' : '' }}">Register as Talent</a>
                            </li>
                            <li class="has-submenu">
                                <a role="button" tabindex="0">Talent Categories</a>
                                <ul class="submenu">
                                    @foreach($categories as $cat)
                                    <li>
                                        <a href="{{ url('/talents/category/' . $cat->slug) }}"
                                            class="{{ Request::is('talents/category/' . $cat->slug) ? 'active' : '' }}">
                                            {{ $cat->name }}
                                        </a>
                                    </li>
                                    @endforeach
                                </ul>
                            </li>
                        </ul>
                    </li>

                    {{-- Announcements --}}
                    <li>
                        <a href="{{ route('user.announcements') }}"
                            class="nav-link {{ isActiveRoute(['user.announcements']) }}">Announcements</a>
                    </li>

                    {{-- Announcements --}}
                    <li>
                        <a href="{{ route('talent.connections-room') }}"
                            class="nav-link {{ isActiveRoute(['talent.connections-room']) }}">Connection Room</a>
                    </li>
                    {{-- Courses --}}
                    <li class="has-submenu">
                        <a role="button" class="nav-link {{ isActiveRoute([], [ 'courses', 'courses/*', 'courses/category/*' ]) }}"
                            tabindex="0">Courses <i class="fas fa-chevron-down"></i>
                        </a>

                        <ul class="submenu">
                            <li>
                                <a href="{{ url('/courses') }}"
                                    class="{{ Request::is('courses') ? 'active' : '' }}">All Courses</a>
                            </li>

                            <li class="has-submenu">
                                <a role="button" tabindex="0">Course Categories</a>
                                <ul class="submenu">
                                    @foreach($categories as $cat)
                                    <li>
                                        <a href="{{ url('/courses/category/' . $cat->slug) }}"
                                            class="{{ Request::is('courses/category/' . $cat->slug) ? 'active' : '' }}">
                                            {{ $cat->name }}
                                        </a>
                                    </li>
                                    @endforeach
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {{-- products --}}
                    <li>
                        <a href="{{ route('user.products.index') }}"
                            class="nav-link {{ isActiveRoute(['user.products.index']) }}">Shop</a>
                    </li>
                    <!-- Apply as Seller Button -->
                    <li>
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#applySellerModal">
                            Become a Seller
                        </a>
                    </li>
                    {{-- Skills --}}
                    <!-- <li class="has-submenu">
                        <a role="button" class="nav-link
                            {{
                                isActiveRoute([], [
                                    'skills', 'skills/category/*'
                                ])
                            }}"
                            tabindex="0">Skills <i class="fas fa-chevron-down"></i></a>

                        <ul class="submenu">
                            <li>
                                <a href="{{ url('/skills') }}"
                                    class="{{ Request::is('skills') ? 'active' : '' }}">All Skills</a>
                            </li>
                            <li class="has-submenu">
                                <a role="button" tabindex="0">Skills Categories</a>
                                <ul class="submenu">
                                    @foreach($categories as $cat)
                                    <li>
                                        <a href="{{ url('/skills/category/' . $cat->slug) }}"
                                            class="{{ Request::is('skills/category/' . $cat->slug) ? 'active' : '' }}">
                                            {{ $cat->name }}
                                        </a>
                                    </li>
                                    @endforeach
                                </ul>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </div>

            <div class="d-flex align-items-center">
                <div class="nav-item dropdown flag-nav nav-item-box nav-item-box-home me-3">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" tabindex="0" role="button">
                        <i class="ti ti-sun-high"></i>
                        <i class="ti ti-moon"></i>
                    </a>
                    <ul class="dropdown-menu p-2">
                        <li class="mb-1">
                            <a role="button" tabindex="0" class="dropdown-item active theme-toggle rounded-2"
                                id="light-mode-toggle">
                                <i class="ti ti-sun-high me-2"></i>Light Mode
                            </a>
                        </li>
                        <li>
                            <a role="button" tabindex="0" class="dropdown-item theme-toggle rounded-2"
                                id="dark-mode-toggle">
                                <i class="ti ti-moon me-2"></i>Dark Mode
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="nav header-navbar-rht">
                    {{-- If user is logged in --}}
                    @auth
                    @php
                    $role = Auth::user()->role;
                    $dashboards = [
                    'admin' => 'admin.dashboard',
                    'talent' => 'talent.dashboard',
                    'user' => 'user.dashboard',
                    ];
                    @endphp

                    <li class="nav-item">
                        <a class="btn btn-light d-inline-flex align-items-center"
                            href="{{ route($dashboards[$role] ?? 'user.dashboard') }}"
                            style="background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
                  box-shadow: 0 1em 1em #1f2d3d26;">
                            <i class="ti ti-dashboard me-1"></i>Dashboard
                        </a>
                    </li>
                    @endauth

                    {{-- Show Sign In if NOT logged in --}}
                    @guest
                    <li class="nav-item">
                        <a class="btn btn-light d-inline-flex align-items-center login"
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal"
                            style="background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
                  box-shadow: 0 1em 1em #1f2d3d26;">
                            <i class="ti ti-lock me-1"></i>Sign In
                        </a>
                    </li>
                    @endguest

                    <li class="nav-item">
                        <a class="btn btn-primary d-inline-flex align-items-center" href="#" onclick="toggleSearchOverlay(event)">
                            <i class="ti ti-search me-1"></i>Search
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
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
                    🔐 Welcome Back
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <!-- Body -->
            <div class="modal-body px-4 py-4">
                <form action="{{ route('login') }}" method="POST">
                    @csrf

                    <div class="text-center mb-4">
                        <img src="{{ asset('assets/img/WORDMARK.png') }}" alt="Logo" style="height: 50px;" class="mb-3" />
                        <h4 class="fw-semibold mb-1">Hi, Welcome Back!</h4>
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
                    <button type="button" class="btn btn-light border rounded-3 px-4 py-2 shadow-sm" data-bs-dismiss="modal">
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