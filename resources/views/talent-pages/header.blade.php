<div class="az-header">
    <div class="container">
        <div class="az-header-left">
            <a href="{{ route('user.home')}}" class="az-logo"><img src="{{ asset('assets/img/WORDMARK.png') }}" class="img-fluid" alt="Logo" style="height: 50px;" /></a>
            <a href="#" id="azMenuShow" class="az-header-menu-icon d-lg-none"><span></span></a>
        </div><!-- az-header-left -->
        <div class="az-header-menu">
            <div class="az-header-menu-header">
                <a href="{{ route('user.home')}}" class="az-logo"><img src="{{ asset('assets/img/WORDMARK.png') }}" class="img-fluid" alt="Logo" style="height: 50px;" /></a>
                <a href="#" class="close">&times;</a>
            </div><!-- az-header-menu-header -->
            <ul class="nav">
                <li class="nav-item {{ request()->routeIs('talent.dashboard') ? 'active show' : '' }}">
                    <a href="{{ route('talent.dashboard') }}" class="nav-link">
                        <i class="typcn typcn-chart-area-outline"></i> Dashboard
                    </a>
                </li>

                <li class="nav-item {{ request()->routeIs('talent.courses.*') ? 'active show' : '' }}">
                    <a href="{{ route('talent.courses.index') }}" class="nav-link">
                        <i class="typcn typcn-folder"></i> Courses
                    </a>
                </li>

                <li class="nav-item {{ request()->routeIs('talent.products.*') ? 'active show' : '' }}">
                    <a href="{{ route('talent.products.index') }}" class="nav-link">
                        <i class="typcn typcn-document"></i> Products
                    </a>
                </li>

                <li class="nav-item {{ request()->routeIs('user.subscription') ? 'active show' : '' }}">
                    <a href="{{ route('user.subscription') }}" class="nav-link">
                        <i class="typcn typcn-credit-card"></i> Subscription
                    </a>
                </li>

                {{-- UTILITIES (WITH SUBMENU) --}}
                @php
                $utilitiesActive = request()->routeIs(
                'talent.announcements.*',
                'talent.projects.*',
                'talent.events.*',
                'talent.jobs.*'
                );
                @endphp

                <li class="nav-item {{ $utilitiesActive ? 'active show' : '' }}">
                    <a href="#" class="nav-link with-sub">
                        <i class="typcn typcn-tabs-outline"></i> Utilities
                    </a>
                    <div class="az-menu-sub {{ $utilitiesActive ? 'show' : '' }}">
                        <nav class="nav">

                            <a href="{{ route('talent.projects.index') }}"
                                class="nav-link {{ request()->routeIs('talent.projects.*') ? 'active' : '' }}">
                                Projects
                            </a>

                            <a href="{{ route('talent.jobs.index') }}"
                                class="nav-link {{ request()->routeIs('talent.jobs.*') ? 'active' : '' }}">
                                Work & Gigs
                            </a>
                        </nav>
                    </div>
                </li>
            </ul>

        </div><!-- az-header-menu -->
        <div class="az-header-right">
            <div class="dropdown az-profile-menu">
                <a href="#" class="az-img-user"><img src="../img/faces/face1.jpg" alt=""></a>
                <div class="dropdown-menu">
                    <div class="az-dropdown-header d-sm-none">
                        <a href="#" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
                    </div>
                    <div class="az-header-profile">
                        <div class="az-img-user">
                            <img src="../img/faces/face1.jpg" alt="">
                        </div><!-- az-img-user -->
                        <h6>{{ Auth::user()->name }}</h6>
                        <span>{{ Auth::user()->role }}</span>
                    </div><!-- az-header-profile -->

                    <a href="{{ route('talent.get.profile')}}" class="dropdown-item"><i class="typcn typcn-user-outline"></i> My Profile</a>
                    <a href="{{ route('talent.wallets.index')}}" class="dropdown-item"><i class="typcn typcn-edit"></i> Wallet</a>
                    <a href="{{ route('talent.connections.index')}}" class="dropdown-item"><i class="typcn typcn-time"></i> Connections</a>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="dropdown-item"><i class="typcn typcn-power-outline"></i> Sign Out</button>
                    </form>
                </div><!-- dropdown-menu -->
            </div>
        </div><!-- az-header-right -->
    </div><!-- container -->
</div><!-- az-header -->