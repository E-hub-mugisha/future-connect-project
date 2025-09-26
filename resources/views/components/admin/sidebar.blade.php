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
                            <i class="ti ti-layout-grid me-2"></i><span>Admin Dashboard</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="/admin/talents" class="nk-menu-link {{ isActiveRoute('admin.talents.*') }}">
                            <i class="ti ti-user-bolt me-2"></i><span>Talents</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="/admin/connections" class="nk-menu-link {{ isActiveRoute('admin.connections.*') }}">
                            <i class="ti ti-user-bolt me-2"></i><span>Connections</span>
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
                        <a href="/admin/announcements" class="nk-menu-link {{ isActiveRoute('admin.announcements.*', 'admin/announcements*') }}"> 
                            <i class="ti ti-bell me-2"></i> <span>Announcements</span> 
                        </a> 
                    </li>
                    <li class="nk-menu-item"> 
                        <a href="/admin/banners" class="nk-menu-link {{ isActiveRoute('admin.banners.*', 'admin/banners*') }}"> 
                            <i class="ti ti-transition-top me-2"></i> <span>Banners</span> 
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
                    <li class="nk-menu-item"> 
                        <a href="/admin/settings" class="nk-menu-link {{ isActiveRoute('admin.settings', 'admin/settings*') }}"> 
                            <i class="ti ti-settings-check me-2"></i> <span>Settings</span> 
                        </a> 
                    </li>
                    @endif

                    {{-- ===================== TALENT ===================== --}}
                    @if( $role === 'talent')
                    <li class="nk-menu-item">
                        <a href="{{ route('talent.dashboard') }}" class="nk-menu-link {{ isActiveRoute('talent.dashboard') }}">
                            <i class="ti ti-stars me-2"></i><span>Talent Dashboard</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="{{ route('talent.stories') }}" class="nk-menu-link {{ isActiveRoute('talent.stories.*') }}">
                            <i class="ti ti-microphone me-2"></i><span>My Stories</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="{{ route('talent.skills') }}" class="nk-menu-link {{ isActiveRoute('talent.skills.*') }}">
                            <i class="ti ti-brush me-2"></i><span>My Skills</span>
                        </a>
                    </li>
                    @endif

                    {{-- ===================== USER ===================== --}}
                    @if( $role === 'user')
                    <li class="nk-menu-item">
                        <a href="{{ route('user.home') }}" class="nk-menu-link {{ isActiveRoute('user.home') }}">
                            <i class="ti ti-home me-2"></i><span>User Dashboard</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="{{ route('user.stories') }}" class="nk-menu-link {{ isActiveRoute('user.stories.*') }}">
                            <i class="ti ti-book me-2"></i><span>Browse Stories</span>
                        </a>
                    </li>
                    @endrole

                    {{-- ===================== AGENT ===================== --}}
                    @if( $role === 'agent')
                    <li class="nk-menu-item">
                        <a href="{{ route('agent.dashboard') }}" class="nk-menu-link {{ isActiveRoute('agent.dashboard') }}">
                            <i class="ti ti-briefcase me-2"></i><span>Agent Dashboard</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="{{ route('agent.clients') }}" class="nk-menu-link {{ isActiveRoute('agent.clients.*') }}">
                            <i class="ti ti-users me-2"></i><span>My Clients</span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="{{ route('agent.reports') }}" class="nk-menu-link {{ isActiveRoute('agent.reports.*') }}">
                            <i class="ti ti-chart-bar me-2"></i><span>Reports</span>
                        </a>
                    </li>
                    @endrole

                </ul>
            </div>
        </div>
    </div>
</div>