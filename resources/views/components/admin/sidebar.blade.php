@php
use Illuminate\Support\Facades\Auth;
$role = Auth::check() ? Auth::user()->role : null;
@endphp

<div class="nk-sidebar nk-sidebar-fixed is-dark" data-content="sidebarMenu">
    <div class="nk-sidebar-element nk-sidebar-head">
        <div class="nk-menu-trigger">
            <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
                <em class="icon ni ni-arrow-left"></em>
            </a>
            <a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu">
                <em class="icon ni ni-menu"></em>
            </a>
        </div>
        <div class="nk-sidebar-brand">
            <a href="{{ route('user.home') }}" class="logo-link nk-sidebar-logo">
                <img class="logo-light logo-img" src="{{ asset('assets/img/WORDMARK.png') }}" alt="logo">
                <img class="logo-dark logo-img" src="{{ asset('assets/img/WORDMARK.png') }}" alt="logo-dark">
            </a>
        </div>
    </div>

    <div class="nk-sidebar-element nk-sidebar-body">
        <div class="nk-sidebar-content">
            <div class="nk-sidebar-menu" data-simplebar>
                <ul class="nk-menu">

                    <li class="nk-menu-heading">
                        <h6 class="overline-title text-primary-alt">Dashboards</h6>
                    </li>

                    {{-- ===================== ADMIN ===================== --}}
                    @if( $role === 'admin')
                    <li class="nk-menu-item">
                        <a href="/admin/dashboard" class="nk-menu-link {{ isActiveRoute('admin.dashboard') }}">
                            <i class="ti ti-layout-grid me-2"></i><span>Dashboard</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="/admin/talents" class="nk-menu-link {{ isActiveRoute('admin.talents.*') }}">
                            <i class="ti ti-user-bolt me-2"></i><span>Talents</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="/admin/users" class="nk-menu-link {{ isActiveRoute('admin.users.*') }}">
                            <i class="ti ti-wallet me-2"></i><span>Users</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="/admin/categories" class="nk-menu-link {{ isActiveRoute('admin.categories.*') }}">
                            <i class="ti ti-files me-2"></i><span>Categories</span>
                        </a>
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/stories" class="nk-menu-link {{ isActiveRoute('admin.stories.*', 'admin/stories*') }}"> 
                            <i class="ti ti-stars me-2"></i> <span>Stories</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/skills" class="nk-menu-link {{ isActiveRoute('admin.skills.*', 'admin/skills*') }}"> 
                            <i class="ti ti-message me-2"></i> <span>Skills</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/courses" class="nk-menu-link {{ isActiveRoute('admin.courses.*', 'admin/courses*') }}"> 
                            <i class="ti ti-video me-2"></i> <span>Courses</span> 
                        </a>
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/announcements" class="nk-menu-link {{ isActiveRoute('admin.announcements.*', 'admin/announcements*') }}"> 
                            <i class="ti ti-bell me-2"></i> <span>Announcements</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/partners" class="nk-menu-link {{ isActiveRoute('admin.partners.*', 'admin/partners*') }}"> 
                            <i class="ti ti-pennant me-2"></i> <span>Partners</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/testimonials" class="nk-menu-link {{ isActiveRoute('admin.testimonials.*', 'admin/testimonials*') }}"> 
                            <i class="ti ti-moneybag me-2"></i> <span>Testimonials</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/settings" class="nk-menu-link {{ isActiveRoute('admin.settings', 'admin/settings*') }}"> 
                            <i class="ti ti-settings-check me-2"></i> <span>Settings</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/sellers" class="nk-menu-link {{ isActiveRoute('admin.sellers', 'admin/sellers*') }}"> 
                            <i class="ti ti-settings-check me-2"></i> <span>Sellers</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/products" class="nk-menu-link {{ isActiveRoute('admin.products', 'admin/products*') }}"> 
                            <i class="ti ti-settings-check me-2"></i> <span>Products</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/projects" class="nk-menu-link {{ isActiveRoute('admin.projects', 'admin/projects*') }}"> 
                            <i class="ti ti-settings-check me-2"></i> <span>projects</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/events" class="nk-menu-link {{ isActiveRoute('admin.events', 'admin/events*') }}"> 
                            <i class="ti ti-settings-check me-2"></i> <span>events</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/jobs" class="nk-menu-link {{ isActiveRoute('admin.jobs', 'admin/jobs*') }}"> 
                            <i class="ti ti-settings-check me-2"></i> <span>jobs</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item">
                        <a href="/admin/wallets" class="nk-menu-link {{ isActiveRoute('admin.wallets', 'admin/wallets*') }}">
                            <i class="ti ti-wallet me-2"></i><span>Wallets</span>
                        </a>
                    </li>
                    @endif

                </ul>
            </div>
        </div>
    </div>
</div>