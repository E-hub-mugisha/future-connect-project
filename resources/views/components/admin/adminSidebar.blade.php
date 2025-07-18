@php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;


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

<header class="header dashboard-header">
    <div class="header-user">
        <div class="header-left-mob">
            <a href="/admin/dashboard" class="logo">
                <img src="{{ asset('assets/img/logo.svg') }}" alt="Logo" />
            </a>
        </div>

        <a id="mobile_btn" class="mobile_btn" href="#sidebar">
            <span class="bar-icon">
                <i class="ti ti-baseline-density-medium"></i>
            </span>
        </a>
        <div class="nav user-menu nav-list">
            <div class="wallet-amount wallet-amount-two">
                <span><i class="ti ti-point-filled me-1"></i>Hello, {{ Auth::user()->name }}</span>
            </div>
        </div>
        <div class="header-right d-flex align-items-center">
            <a href="{{ route('user.home') }}" target="_blank" class="btn btn-light fs-14 rounded-pill"><i class="ti ti-world me-1"></i>Website <i class="ti ti-external-link"></i></a>

            <div class="nav-item dropdown flag-nav nav-item-box">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" tabIndex="0">
                    <i class="ti ti-sun-high"></i>
                    <i class="ti ti-moon"></i>
                </a>
                <ul class="dropdown-menu p-2">
                    <li class="mb-1">
                        <a role="button" tabIndex="0" class="dropdown-item active theme-toggle" id="light-mode-toggle">
                            <i class="ti ti-sun-high me-1"></i>Light Mode
                        </a>
                    </li>
                    <li>
                        <a role="button" tabIndex="0" class="dropdown-item theme-toggle" id="dark-mode-toggle">
                            <i class="ti ti-moon me-1"></i>Dark Mode
                        </a>
                    </li>
                </ul>
            </div>
            <div class="nav-item dropdown nav-item-box">
                <a class="nav-link dropdown-toggle" href="seller-notifications.html" data-bs-toggle="dropdown">
                    <i class="ti ti-bell"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end noti-blk">
                    <div class="topnav-dropdown-header border-bottom">
                        <div class="d-flex align-items-center">
                            <h6 class="mb-0">Notifications</h6>
                            <div class="count ms-1">2</div>
                        </div>
                        <a href="javascript:void(0)" class="mark-all-noti"> Mark all as read <i
                                class="feather-check-square"></i></a>
                    </div>
                    <ul>
                        <li class="notification-message">
                            <div class="media noti-img d-flex">
                                <a href="seller-notifications.html" class="active-noti">
                                    <span class="avatar avatar-sm flex-shrink-0">
                                        <img class="avatar-img rounded-circle img-fluid" alt="User Image"
                                            src="{{ asset('assets/img/user/profile.jpg') }}" />
                                    </span>
                                </a>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="noti-details"><a href="seller-notifications.html">Lex Murphy</a>
                                        </h6>
                                        <p class="mb-0">45 mins ago</p>
                                    </div>
                                    <p class="mb-2">Notifications alert you to new messages in your Gigs inbox.</p>
                                    <div class="notify-btns">
                                        <button class="btn btn-sm btn-primary">Accept</button>
                                        <button class="btn btn-sm btn-light">Decline</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="notification-message">
                            <div class="media noti-img d-flex">
                                <a href="seller-notifications.html" class="active-noti">
                                    <span class="avatar avatar-sm flex-shrink-0">
                                        <img class="avatar-img rounded-circle img-fluid" alt="User Image"
                                            src="assets/img/user/user-02.jpg" />
                                    </span>
                                </a>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="noti-details"><a href="seller-notifications.html">Ray Arnold</a>
                                        </h6>
                                        <p class="mb-0">17 mins ago</p>
                                    </div>
                                    <p class="mb-0">Notifications inform you when someone likes, reacts</p>
                                </div>
                            </div>
                        </li>
                        <li class="notification-message">
                            <div class="media noti-img d-flex">
                                <a href="seller-notifications.html">
                                    <span class="avatar avatar-sm flex-shrink-0">
                                        <img class="avatar-img rounded-circle img-fluid" alt="User Image"
                                            src="assets/img/user/user-03.jpg" />
                                    </span>
                                </a>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="noti-details"><a href="seller-notifications.html">Dennis
                                                Nedry</a></h6>
                                        <p class="mb-0">1 Day Ago</p>
                                    </div>
                                    <p>Added a comment to Dennis Nedry</p>
                                    <p class="noti-reply-msg">“Oh, I finished de-bugging the phones, but the
                                        system's compiling for eighteen minutes, or twenty. So, some minor systems
                                        may go on and off for a while.”</p>
                                </div>
                            </div>
                        </li>
                        <li class="notification-message">
                            <div class="media noti-img d-flex">
                                <a href="seller-notifications.html">
                                    <span class="avatar avatar-sm flex-shrink-0">
                                        <img class="avatar-img rounded-circle img-fluid" alt="User Image"
                                            src="assets/img/user/user-04.jpg" />
                                    </span>
                                </a>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="noti-details"><a href="seller-notifications.html">John
                                                Hammond</a></h6>
                                        <p class="mb-0">45 mins ago</p>
                                    </div>
                                    <p class="mb-0">Got Message for Project “Service Management”</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="clear-all-noti">
                        <a class="clear-notification" href="seller-notifications.html"> View all </a>
                    </div>
                </div>
            </div>
            <div class="nav-item dropdown nav-item-box">
                <a href="seller-profile.html" class="dropdown-toggle d-flex align-items-center nav-link"
                    data-bs-toggle="dropdown">
                    <span class="avatar online avatar-sm">
                        <img src="{{ asset('assets/img/user/user-04.jpg') }}" alt="Img"
                            class="img-fluid rounded-circle" />
                    </span>
                </a>
                <div class="dropdown-menu p-0 dropdown-profile">
                    <div class="d-flex align-items-center border-bottom p-2 mb-0">
                        <span class="avatar avatar-lg me-2">
                            <img src="{{ asset('assets/img/user/user-04.jpg') }}" alt="img"
                                class="rounded-circle" />
                        </span>
                        <div>
                            <h6 class="fs-14 fw-medium mb-1">{{ Auth::user()->name }}</h6>
                            <p class="fs-13 mb-0">Joined On :
                                {{ Auth::user()->created_at->format('d M Y') }}
                            </p>
                        </div>
                    </div>

                    <div class="p-2">

                        <a class="dropdown-item d-flex align-items-center mb-1" href="{{ route('admin.users.show', Auth::user()->id) }}">
                            <i class="ti ti-user-cog me-2"></i>My Profile
                        </a>


                        <a class="dropdown-item d-flex align-items-center mb-1" href="seller-settings.html">
                            <i class="ti ti-settings-cog me-2"></i>Settings
                        </a>


                        <a class="dropdown-item d-flex align-items-center mb-1" href="seller-orders.html">
                            <i class="ti ti-shopping-bag me-2"></i>Orders
                        </a>


                        <a class="dropdown-item d-flex align-items-center mb-1" href="seller-earnings.html">
                            <i class="ti ti-moneybag me-2"></i>Earnings
                        </a>


                        <a class="dropdown-item d-flex align-items-center" href="seller-wallet.html">
                            <i class="ti ti-wallet me-2"></i>Wallet
                        </a>

                    </div>

                    <div class="border-top p-3">
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button type="submit" class="btn btn-light btn-md w-100 border-0">Logout</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
        <div class="mobile-user-menu">
            <a role="button" tabIndex="0" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
                <span class="avatar online avatar-sm">
                    <img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid rounded-circle" />
                </span>
            </a>
            <div class="dropdown-menu p-0 dropdown-profile">
                <div class="d-flex align-items-center border-bottom p-2 mb-0">
                    <span class="avatar avatar-lg me-2">
                        <img src="assets/img/user/user-04.jpg" alt="img" class="rounded-circle" />
                    </span>
                    <div>
                        <h6 class="fs-14 fw-medium mb-1">Harry Brooks</h6>
                        <p class="fs-13 mb-0">Joined On : 14 Jan 2024</p>
                    </div>
                </div>

                <div class="p-2">

                    <a class="dropdown-item d-flex align-items-center mb-1" href="seller-profile.html">
                        <i class="ti ti-user-cog me-2"></i>My Profile
                    </a>


                    <a class="dropdown-item d-flex align-items-center mb-1" href="seller-settings.html">
                        <i class="ti ti-settings-cog me-2"></i>Settings
                    </a>


                    <a class="dropdown-item d-flex align-items-center mb-1" href="seller-orders.html">
                        <i class="ti ti-shopping-bag me-2"></i>Orders
                    </a>


                    <a class="dropdown-item d-flex align-items-center mb-1" href="seller-earnings.html">
                        <i class="ti ti-moneybag me-2"></i>Earnings
                    </a>


                    <a class="dropdown-item d-flex align-items-center" href="seller-wallet.html">
                        <i class="ti ti-wallet me-2"></i>Wallet
                    </a>

                </div>

                <div class="border-top p-3">
                    <a href="signin.html" class="btn btn-light btn-md w-100 border-0">Logout</a>
                </div>

            </div>
        </div>
    </div>
</header>

<div class="sidebar" id="sidebar">
    <div class="sidebar-logo">
        <div class="d-flex align-items-center justify-content-between">
            <a href="/admin/dashboard" class="logo logo-normal">
                <img src="{{ asset('assets/img/logo.svg' ) }}" alt="Logo" />
            </a>
            <a href="/admin/dashboard" class="logo-small">
                <img src="{{ asset('assets/img/logo-small.svg' ) }}" alt="Logo"
                    class="img-fluid" />
            </a>
            <a href="/admin/dashboard" class="dark-logo">
                <img src="{{ asset('assets/img/dark-logo.svg' ) }}" alt="Logo"
                    class="img-fluid" />
            </a>
            <a id="toggle_btn" role="button" tabIndex="0" class="active">
                <i class="ti ti-arrow-bar-right"></i>
            </a>
        </div>
    </div>
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
            <ul>
                <li>
                    @if(Auth::check() && Auth::user()->role == 'admin')
                    <ul>
                        <li>
                            <a href="/admin/dashboard" class="{{ isActiveRoute('admin.dashboard') }}">
                                <i class="ti ti-layout-grid me-2"></i><span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/talents" class="{{ isActiveRoute('admin.talents.*', 'admin/talents*') }}">
                                <i class="ti ti-user-bolt me-2"></i><span>Talents</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/users" class="{{ isActiveRoute('admin.users.*', 'admin/users*') }}">
                                <i class="ti ti-wallet me-2"></i><span>Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/categories" class="{{ isActiveRoute('admin.categories.*', 'admin/categories*') }}">
                                <i class="ti ti-files me-2"></i><span>Categories</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/stories" class="{{ isActiveRoute('admin.stories.*', 'admin/stories*') }}">
                                <i class="ti ti-stars me-2"></i> <span>Stories</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/skills" class="{{ isActiveRoute('admin.skills.*', 'admin/skills*') }}">
                                <i class="ti ti-message me-2"></i> <span>Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/announcements" class="{{ isActiveRoute('admin.announcements.*', 'admin/announcements*') }}">
                                <i class="ti ti-bell me-2"></i> <span>Announcements</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/banners" class="{{ isActiveRoute('admin.banners.*', 'admin/banners*') }}">
                                <i class="ti ti-transition-top me-2"></i> <span>Banners</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/partners" class="{{ isActiveRoute('admin.partners.*', 'admin/partners*') }}">
                                <i class="ti ti-pennant me-2"></i> <span>Partners</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/testimonials" class="{{ isActiveRoute('admin.testimonials.*', 'admin/testimonials*') }}">
                                <i class="ti ti-moneybag me-2"></i> <span>Testimonials</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/payments" class="{{ isActiveRoute('admin.payments.*', 'admin/payments*') }}">
                                <i class="ti ti-transition-top me-2"></i> <span>Story Payments</span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-settings.html" class="{{ isActiveRoute('', 'seller-settings*') }}">
                                <i class="ti ti-settings-check me-2"></i> <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                    @else
                    <ul>
                        <li>
                            <a href="/talent/page/dashboard" class="{{ isActiveRoute('talent.dashboard') }}">
                                <i class="ti ti-layout-grid me-2"></i><span>Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="/talent/profile" class="{{ isActiveRoute('talent.profile') }}">
                                <i class="ti ti-user me-2"></i><span>Profile</span>
                            </a>
                        </li>
                    </ul>
                    @endif
                </li>
            </ul>
            <div class="sidebar-footer">
                <a href="signin.html" target="_blank"><i class="ti ti-logout me-2"></i><span>Logout</span></a>
            </div>
        </div>
    </div>
</div>