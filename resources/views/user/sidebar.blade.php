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

                    <li class="nk-menu-item">
                        <a href="{{ route('user.dashboard') }}" class="nk-menu-link {{ isActiveRoute('user.dashboard') }}">
                            <i class="ti ti-layout-grid me-2"></i><span>Dashboard</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="{{ route('user.talents.connected') }}" class="nk-menu-link {{ isActiveRoute('user.talents.connected') }}">
                            <i class="ti ti-user-bolt me-2"></i><span>Talents Connected</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="{{ route('user.connections') }}" class="nk-menu-link {{ isActiveRoute('user.connections') }}">
                            <i class="ti ti-user-bolt me-2"></i><span>Connection Requested</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="/admin/users" class="nk-menu-link {{ isActiveRoute('admin.users.*') }}">
                            <i class="ti ti-wallet me-2"></i><span>Users</span>
                        </a>
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/user/courses" class="nk-menu-link {{ isActiveRoute('user.courses.*', 'user/courses*') }}"> 
                            <i class="ti ti-stars me-2"></i> <span>courses</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/skills" class="nk-menu-link {{ isActiveRoute('admin.skills.*', 'admin/skills*') }}"> 
                            <i class="ti ti-message me-2"></i> <span>Skills</span> 
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
                        <a href="/admin/payments" class="nk-menu-link {{ isActiveRoute('admin.payments.*', 'admin/payments*') }}"> 
                            <i class="ti ti-transition-top me-2"></i> <span>Story Payments</span> 
                        </a> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
