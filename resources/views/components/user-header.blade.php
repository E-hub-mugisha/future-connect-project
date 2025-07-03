@php
    $categories = \App\Models\Category::all();
@endphp

<header class="header">
    <div class="container">
        <nav class="navbar navbar-expand-lg header-nav p-0">
            <div class="navbar-header">
                <a id="mobile_btn" role="button" tabIndex="0">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <a href="index.html" class="navbar-brand logo">
                    <img src="{{ asset('assets/img/FUTURE CONNECT LOGO - LONG.svg') }}"
                        alt="Logo" />
                </a>
                <a href="index.html" class="dark-logo">
                    <img src="{{ asset('assets/img/FUTURE CONNECT LOGO - LONG - WHITE.svg') }}"
                        alt="Logo" class="img-fluid" />
                </a>
                <a href="index.html" class="navbar-brand logo-small">
                    <img src="{{ asset('assets/img/FUTURE CONNECT LOGO.png') }}"
                        class="img-fluid" alt="Logo" />
                </a>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a href="index.html" class="menu-logo">
                        <img src="{{ asset('assets/img/FUTURE CONNECT LOGO.png') }}"
                            class="img-fluid" alt="Logo" />
                    </a>
                    <a href="index.html" class="menu-logo dark-logo">
                        <img src="{{ asset('assets/img/FUTURE CONNECT LOGO - LONG - WHITE.svg') }}"
                            alt="Logo" class="img-fluid" />
                    </a>
                    <a id="menu_close" class="menu-close" role="button" tabIndex="0"> <i class="fas fa-times"></i></a>
                </div>
                <ul class="main-nav navbar-nav">
                    <li><a href="/" class="nav-link active">Home</a></li>

                    <li class="has-submenu">
                        <a role="button" tabIndex="0">Talents <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="{{ route('user.talents') }}">All Talents</a></li>
                            <li><a href="/register_as_talent">Register as Talent</a></li>
                            <li class="has-submenu">
                                <a role="button" tabIndex="0">Talent Categories </a>
                                <ul class="submenu">
                                    @foreach($categories as $cat)
                                        <li>
                                            <a
                                                href="{{ url('/talents/category/' . $cat->slug) }}">{{ $cat->name }}</a>
                                        </li>
                                    @endforeach
                                </ul>

                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="{{ route('user.announcements') }}">Announcements</a>
                    </li>

                    <li class="has-submenu">
                        <a role="button" tabIndex="0">Stories <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="/stories">All Stories</a></li>
                            <li><a href="/upload-story">Upload Story</a></li>
                            <li class="has-submenu">
                                <a role="button" tabIndex="0">Story Categories </a>
                                <ul class="submenu">
                                    @foreach($categories as $cat)
                                        <li>
                                            <a
                                                href="{{ url('/story/category/' . $cat->slug) }}">{{ $cat->name }}</a>
                                        </li>
                                    @endforeach
                                </ul>

                            </li>
                        </ul>
                    </li>

                    <li class="has-submenu">
                        <a role="button" tabIndex="0">Skills <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="/skills">All Skills</a></li>
                            <li class="has-submenu">
                                <a role="button" tabIndex="0">Skills Categories </a>
                                <ul class="submenu">
                                    @foreach($categories as $cat)
                                        <li>
                                            <a
                                                href="{{ url('/skills/category/' . $cat->slug) }}">{{ $cat->name }}</a>
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
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" tabIndex="0" role="button">
                        <i class="ti ti-sun-high"></i>
                        <i class="ti ti-moon"></i>
                    </a>
                    <ul class="dropdown-menu p-2">
                        <li class="mb-1">
                            <a role="button" tabIndex="0" class="dropdown-item active theme-toggle rounded-2"
                                id="light-mode-toggle">
                                <i class="ti ti-sun-high me-2"></i>Light Mode
                            </a>
                        </li>
                        <li>
                            <a role="button" tabIndex="0" class="dropdown-item theme-toggle rounded-2"
                                id="dark-mode-toggle">
                                <i class="ti ti-moon me-2"></i>Dark Mode
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="nav header-navbar-rht">
                    <li class="nav-item">
                        <a class="btn btn-light d-inline-flex align-items-center" href="/login"><i
                                class="ti ti-lock me-1"></i>Sign In</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-primary d-inline-flex align-items-center" href="signup.html"><i
                                class="ti ti-user me-1"></i>Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
