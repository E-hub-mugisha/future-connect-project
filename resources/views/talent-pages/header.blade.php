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
                <li class="nav-item active show">
                    <a href="{{ route('talent.dashboard')}}" class="nav-link"><i class="typcn typcn-chart-area-outline"></i> Dashboard</a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('talent.courses.index')}}" class="nav-link"><i class="typcn typcn-folder"></i> Courses</a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('talent.products.index')}}" class="nav-link"><i class="typcn typcn-document"></i> Products</a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('talent.payments.index')}}" class="nav-link"><i class="typcn typcn-document"></i> Payments</a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('user.subscription') }}" class="nav-link">Subscription</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link with-sub"><i class="typcn typcn-tabs-outline"></i> Utilities</a>
                    <div class="az-menu-sub">
                        <nav class="nav">
                            <a href="{{ route('talent.announcements.index')}}" class="nav-link">Announcements</a>
                            <a href="{{ route('talent.projects.index')}}" class="nav-link">Projects</a>
                            <a href="{{ route('talent.events.index')}}" class="nav-link">Events</a>
                            <a href="{{ route('talent.jobs.index')}}" class="nav-link">Work & Gigs</a>
                        </nav>
                    </div>
                </li>
            </ul>
        </div><!-- az-header-menu -->
        <div class="az-header-right">
            <div class="dropdown az-header-notification">
                <a href="#" class="new"><i class="typcn typcn-bell"></i></a>
                <div class="dropdown-menu">
                    <div class="az-dropdown-header mg-b-20 d-sm-none">
                        <a href="#" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
                    </div>
                    <h6 class="az-notification-title">Notifications</h6>
                    <p class="az-notification-text">You have 2 unread notification</p>
                    <div class="az-notification-list">
                        <div class="media new">
                            <div class="az-img-user"><img src="../img/faces/face2.jpg" alt=""></div>
                            <div class="media-body">
                                <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                                <span>Mar 15 12:32pm</span>
                            </div><!-- media-body -->
                        </div><!-- media -->
                        <div class="media new">
                            <div class="az-img-user online"><img src="../img/faces/face3.jpg" alt=""></div>
                            <div class="media-body">
                                <p><strong>Joyce Chua</strong> just created a new blog post</p>
                                <span>Mar 13 04:16am</span>
                            </div><!-- media-body -->
                        </div><!-- media -->
                        <div class="media">
                            <div class="az-img-user"><img src="../img/faces/face4.jpg" alt=""></div>
                            <div class="media-body">
                                <p><strong>Althea Cabardo</strong> just created a new blog post</p>
                                <span>Mar 13 02:56am</span>
                            </div><!-- media-body -->
                        </div><!-- media -->
                        <div class="media">
                            <div class="az-img-user"><img src="../img/faces/face5.jpg" alt=""></div>
                            <div class="media-body">
                                <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                                <span>Mar 12 10:40pm</span>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- az-notification-list -->
                    <div class="dropdown-footer"><a href="#">View All Notifications</a></div>
                </div><!-- dropdown-menu -->
            </div><!-- az-header-notification -->
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