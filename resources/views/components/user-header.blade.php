@php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;

$categories = \App\Models\Category::all();

// Helper to check if a route or url pattern is active, returns 'active' or ''
function isActiveRoute($routeNames, $urlPatterns = []) {
foreach ((array) $routeNames as $route) {
if (Route::is($route)) {
return 'active';
}
}
foreach ((array) $urlPatterns as $pattern) {
if (Request::is($pattern)) {
return 'active';
}
}
return '';
}
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
        color: #e4e4e4;
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
        color: #e4e4e4;
        border-bottom: 2px solid #e4e4e4;
        background: transparent;
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
                            <li>
                                <a href="{{ url('/upload-story') }}"
                                    class="{{ Request::is('upload-story') ? 'active' : '' }}">Upload Story</a>
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