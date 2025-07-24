@php

$categories = \App\Models\Category::all();

@endphp

<style>
    .header {
        background-color: #011E34;
        height: 6rem;
        /* Reduced height */
        padding: 7px 5px;
    }

    .main-menu-wrapper {
        background: linear-gradient(to right, #011E34, #09354F);
        padding: 8px 2rem;
        border-radius: 4rem;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }


    .main-menu-wrapper .main-nav .nav-link {
        color: #F0F2F7;
        font-size: 13px;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        border: 2px solid transparent;
        background: transparent;
        display: inline-block;
        /* Prevents full-width behavior */
    }

    .main-menu-wrapper .main-nav .nav-link:hover,
    .main-menu-wrapper .main-nav .nav-link.active {
        color: #F0F2F7;
        border-bottom: 2px solid #F0F2F7;
        background: transparent;
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
        background: rgba(0, 0, 0, 0.95);
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .search-overlay-section.active {
        display: flex;
    }

    .search-content {
        width: 90%;
        max-width: 600px;
        padding: 20px;
    }

    .search-input-group {
        position: relative;
    }

    .search-input-group .input-icon {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        color: #ccc;
    }

    .search-input-group input {
        padding-left: 40px;
        border: none;
        border-bottom: 2px solid #0d6efd;
        background: transparent;
        color: white;
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

    /* Style close button (Bootstrap default styles should mostly apply) */
    .btn-close-white {
        filter: invert(1);
        opacity: 0.8;
    }

    .btn-close-white:hover {
        opacity: 1;
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

                <a href="{{ url('/') }}">
                    <img src="{{ asset('assets/img/logo.svg') }}" class="img-fluid" alt="Logo" style="height: 50px;" />
                </a>
            </div>

            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a id="menu_close" class="menu-close" role="button" tabindex="0"><i class="fas fa-times"></i></a>
                </div>

                <ul class="main-nav navbar-nav">
                    {{-- Home --}}
                    <li>
                        <a href="{{ url('/') }}" class="nav-link {{ isActiveRoute(['home'], ['/']) }}">Home</a>
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

                    {{-- Stories --}}
                    <li class="has-submenu">
                        <a role="button" class="nav-link
                            {{
                                isActiveRoute([], [
                                    'stories', 'upload-story', 'story/category/*'
                                ])
                            }}"
                            tabindex="0">Stories <i class="fas fa-chevron-down"></i></a>

                        <ul class="submenu">
                            <li>
                                <a href="{{ url('/stories') }}"
                                    class="{{ Request::is('stories') ? 'active' : '' }}">All Stories</a>
                            </li>

                            <li class="has-submenu">
                                <a role="button" tabindex="0">Story Categories</a>
                                <ul class="submenu">
                                    @foreach($categories as $cat)
                                    <li>
                                        <a href="{{ url('/story/category/' . $cat->slug) }}"
                                            class="{{ Request::is('story/category/' . $cat->slug) ? 'active' : '' }}">
                                            {{ $cat->name }}
                                        </a>
                                    </li>
                                    @endforeach
                                </ul>
                            </li>
                        </ul>
                    </li>

                    {{-- Skills --}}
                    <li class="has-submenu">
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
                    </li>
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
                    <li class="nav-item">
                        <a class="btn btn-light d-inline-flex align-items-center"
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal">
                            <i class="ti ti-lock me-1"></i>Sign In
                        </a>

                    </li>
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
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-body">

                <form action="{{ route('login') }}" method="POST">
                    @csrf
                    <div class="login-userset">
                        <div class="login-logo text-center mb-3">
                            <img src="{{ asset('assets/img/logo.svg') }}" alt="Logo" style="height: 50px;" />
                        </div>
                        <div class="login-heading text-center mb-4">
                            <h3>Hi, Welcome Back!</h3>
                            <p class="text-muted">Fill in your credentials to continue</p>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <div class="form-wrap form-focus">
                                <span class="form-icon"><i class="feather-mail"></i></span>
                                <input type="email" name="email" class="form-control floating" required />
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <div class="form-wrap form-focus pass-group">
                                <span class="form-icon"><i class="toggle-password feather-eye-off"></i></span>
                                <input type="password" name="password" class="pass-input form-control floating" required />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember">
                                    <label class="form-check-label" for="remember">Remember Me</label>
                                </div>
                            </div>
                            <div class="col-6 text-end">
                                <a href="{{ route('password.request') }}" class="forgot-link">Forgot Password?</a>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary w-100">Sign In</button>

                        <div class="text-center mt-3">
                            <p>Don’t have an account? <a href="{{ route('register') }}">Sign Up</a></p>
                        </div>

                    </div>
                </form>


            </div>
        </div>
    </div>
</div>

<section class="search-overlay-section">
    <div class="search-overlay"></div>
    <div class="search-content">
        <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" aria-label="Close" onclick="closeSearchOverlay()"></button>

        <form action="{{ route('talent.search') }}" method="GET" class="search-input-group position-relative">
            <i class="ti ti-search input-icon"></i>
            <input type="text" class="form-control" name="keyword" placeholder="Search talents, skills or stories..." required>
        </form>
    </div>
</section>

<script>
    function toggleSearchOverlay(event) {
        event.preventDefault();
        const overlaySection = document.querySelector('.search-overlay-section');
        overlaySection.classList.toggle('active');
    }

    // Optional: close overlay when clicking outside input
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

    function closeSearchOverlay() {
        document.querySelector('.search-overlay-section').classList.remove('active');
    }
</script>