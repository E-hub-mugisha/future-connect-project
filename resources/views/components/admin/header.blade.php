<div class="nk-header nk-header-fixed is-light">
    <div class="container-fluid">
        <div class="nk-header-wrap">
            <div class="nk-menu-trigger d-xl-none ms-n1"><a href="#"
                    class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em
                        class="icon ni ni-menu"></em></a></div>
            <div class="nk-header-brand d-xl-none"><a href="{{ route('user.home') }}" class="logo-link"><img
                        class="logo-light logo-img" src="images/logo.png"
                        srcset="{{ asset('assets/img/WORDMARK.png') }} 2x" alt="logo"><img class="logo-dark logo-img"
                        src="{{ asset('assets/img/WORDMARK.png') }}" srcset="{{ asset('assets/img/WORDMARK.png') }} 2x"
                        alt="logo-dark"></a></div>
            <div class="nk-header-news d-none d-xl-block">
                <div class="nk-news-list"><a class="nk-news-item" href="#">
                        <div class="nk-news-icon"><em class="icon ni ni-card-view"></em></div>
                        <div class="nk-news-text">
                            <p>Do you know the latest update of 2025? <span> A overview of our is now
                                    available on YouTube</span></p><em class="icon ni ni-external"></em>
                        </div>
                    </a></div>
            </div>
            <div class="nk-header-tools">
                <ul class="nk-quick-nav">
                    <li class="me-n1">
                        @if(!Auth::user()->is_verified)
                        <!-- Upgrade Button -->
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#verifyModal">
                            Upgrade to Verified
                        </button>
                        @else
                        <span class="badge bg-success p-2">Verified Member</span>

                        @endif

                    </li>
                    <li class="dropdown user-dropdown"><a href="#" class="dropdown-toggle"
                            data-bs-toggle="dropdown">
                            <div class="user-toggle">
                                <div class="user-avatar sm"><em class="icon ni ni-user-alt"></em></div>
                                <div class="user-info d-none d-md-block">
                                    <div class="user-status">{{ Auth::user()->role }}</div>
                                    <div class="user-name dropdown-indicator">{{ Auth::user()->name }}</div>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                            <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                <div class="user-card">
                                    <div class="user-avatar"><span>AB</span></div>
                                    <div class="user-info"><span class="lead-text">{{ Auth::user()->name }}</span><span
                                            class="sub-text">{{ Auth::user()->email }}</span></div>
                                </div>
                            </div>
                            <div class="dropdown-inner">
                                <ul class="link-list">
                                    <li><a href="{{ route('admin.users.show', Auth::user()->id ) }}"><em
                                                class="icon ni ni-user-alt"></em><span>View
                                                Profile</span></a></li>
                                    <li><a href="/admin/settings"><em
                                                class="icon ni ni-setting-alt"></em><span>Platform
                                                Setting</span></a></li>
                                    <li><a href="/admin/login-activity"><em
                                                class="icon ni ni-activity-alt"></em><span>Login
                                                Activity</span></a></li>
                                </ul>
                            </div>
                            <div class="dropdown-inner">
                                <ul class="link-list">
                                    <li>
                                        <form method="POST" action="{{ route('logout') }}">
                                            @csrf
                                            <button class="btn btn-danger " type="submit"><em class="icon ni ni-signout"></em><span>Sign
                                                    out</span></button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="dropdown notification-dropdown me-n1"><a href="#"
                            class="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                            <div class="icon-status icon-status-info"><em class="icon ni ni-bell"></em>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                            <div class="dropdown-head"><span
                                    class="sub-title nk-dropdown-title">Notifications</span><a
                                    href="#">Mark All as Read</a></div>
                            <div class="dropdown-body">
                                <div class="nk-notification">
                                    <div class="nk-notification-item dropdown-inner">
                                        <div class="nk-notification-icon"><em
                                                class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                        </div>
                                        <div class="nk-notification-content">
                                            <div class="nk-notification-text">You have requested to
                                                <span>Widthdrawl</span>
                                            </div>
                                            <div class="nk-notification-time">2 hrs ago</div>
                                        </div>
                                    </div>
                                    <div class="nk-notification-item dropdown-inner">
                                        <div class="nk-notification-icon"><em
                                                class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                        </div>
                                        <div class="nk-notification-content">
                                            <div class="nk-notification-text">Your <span>Deposit
                                                    Order</span> is placed</div>
                                            <div class="nk-notification-time">2 hrs ago</div>
                                        </div>
                                    </div>
                                    <div class="nk-notification-item dropdown-inner">
                                        <div class="nk-notification-icon"><em
                                                class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                        </div>
                                        <div class="nk-notification-content">
                                            <div class="nk-notification-text">You have requested to
                                                <span>Widthdrawl</span>
                                            </div>
                                            <div class="nk-notification-time">2 hrs ago</div>
                                        </div>
                                    </div>
                                    <div class="nk-notification-item dropdown-inner">
                                        <div class="nk-notification-icon"><em
                                                class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                        </div>
                                        <div class="nk-notification-content">
                                            <div class="nk-notification-text">Your <span>Deposit
                                                    Order</span> is placed</div>
                                            <div class="nk-notification-time">2 hrs ago</div>
                                        </div>
                                    </div>
                                    <div class="nk-notification-item dropdown-inner">
                                        <div class="nk-notification-icon"><em
                                                class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                        </div>
                                        <div class="nk-notification-content">
                                            <div class="nk-notification-text">You have requested to
                                                <span>Widthdrawl</span>
                                            </div>
                                            <div class="nk-notification-time">2 hrs ago</div>
                                        </div>
                                    </div>
                                    <div class="nk-notification-item dropdown-inner">
                                        <div class="nk-notification-icon"><em
                                                class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                        </div>
                                        <div class="nk-notification-content">
                                            <div class="nk-notification-text">Your <span>Deposit
                                                    Order</span> is placed</div>
                                            <div class="nk-notification-time">2 hrs ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-foot center"><a href="#">View All</a></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- Verification Modal -->
<div class="modal fade" id="verifyModal" tabindex="-1" aria-labelledby="verifyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="verifyModalLabel">Upgrade to Verified</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>Choose how you want to upgrade your account to Verified:</p>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Wallet
                        <span class="badge bg-primary">{{ number_format(Auth::user()->wallet->balance ?? 0, 2) }} RWF</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Pay Direct (Flutterwave)
                        <span class="badge bg-warning">Secure Payment</span>
                    </li>
                </ul>
            </div>
            <div class="modal-footer border-0 d-flex justify-content-between">
                <!-- Wallet Upgrade -->
                <form action="{{ route('membership.upgrade.wallet') }}" method="POST">
                    @csrf
                    <button type="submit" class="btn btn-primary">Use Wallet</button>
                </form>

                <!-- Flutterwave Upgrade -->
                <a href="{{ route('membership.upgrade.flutterwave') }}" class="btn btn-warning">
                    Pay with Flutterwave
                </a>
            </div>
        </div>
    </div>
</div>