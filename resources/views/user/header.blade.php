<!-- Header -->
<header class="header dashboard-header">
    <div class="header-user">
        <div class="header-left-mob">
            <a href="seller-dashboard.html" class="logo">
                <img src="assets/img/logo.svg" alt="Logo">
            </a>
        </div>

        <a id="mobile_btn" class="mobile_btn" href="#sidebar">
            <span class="bar-icon">
                <i class="ti ti-baseline-density-medium"></i>
            </span>
        </a>
        <div class="nav user-menu nav-list">
            <div class="wallet-amount wallet-amount-two">
                <span><i class="ti ti-point-filled me-1"></i>Wallet Balance : $6658</span>
            </div>
        </div>
        <div class="header-right d-flex align-items-center">
            <a href="index.html" class="btn btn-light fs-14 rounded-pill"><i class="ti ti-world me-1"></i>Website</a>
            <div class="dashboard-link">
                <ul class="d-inline-flex align-items-center p-1 rounded-pill">
                    <li><a href="buyer-dashboard.html">Buyer</a></li>
                    <li><a href="seller-dashboard.html" class="active">Seller</a></li>
                </ul>
            </div>
            <div class="nav-item dropdown dropdown-menu-end flag-nav nav-item-box">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
                    <img src="assets/img/flags/us.svg" alt="Language" class="img-fluid">
                </a>
                <ul class="dropdown-menu p-2">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item justify-content-start">
                            <img src="assets/img/flags/us.svg" alt="" height="16" class="me-2"> English
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item justify-content-start">
                            <img src="assets/img/flags/de.svg" alt="" height="16" class="me-2"> German
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item justify-content-start">
                            <img src="assets/img/flags/fr.svg" alt="" height="16" class="me-2"> French
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item justify-content-start">
                            <img src="assets/img/flags/ae.svg" alt="" height="16" class="me-2"> Arabic
                        </a>
                    </li>
                </ul>
            </div>
            <div class="nav-item dropdown flag-nav nav-item-box">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
                    <i class="ti ti-sun-high"></i>
                    <i class="ti ti-moon"></i>
                </a>
                <ul class="dropdown-menu p-2">
                    <li class="mb-1">
                        <a href="javascript:void(0);" class="dropdown-item active theme-toggle" id="light-mode-toggle">
                            <i class="ti ti-sun-high me-1"></i>Light Mode
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item theme-toggle" id="dark-mode-toggle">
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
                        <a href="javascript:void(0)" class="mark-all-noti"> Mark all as read <i class="feather-check-square"></i></a>
                    </div>
                    <ul>
                        <li class="notification-message">
                            <div class="media noti-img d-flex">
                                <a href="seller-notifications.html" class="active-noti">
                                    <span class="avatar avatar-sm flex-shrink-0">
                                        <img class="avatar-img rounded-circle img-fluid" alt="User Image" src="assets/img/user/profile.jpg">
                                    </span>
                                </a>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="noti-details"><a href="seller-notifications.html">Lex Murphy</a></h6>
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
                                        <img class="avatar-img rounded-circle img-fluid" alt="User Image" src="assets/img/user/user-02.jpg">
                                    </span>
                                </a>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="noti-details"><a href="seller-notifications.html">Ray Arnold</a></h6>
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
                                        <img class="avatar-img rounded-circle img-fluid" alt="User Image" src="assets/img/user/user-03.jpg">
                                    </span>
                                </a>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="noti-details"><a href="seller-notifications.html">Dennis Nedry</a></h6>
                                        <p class="mb-0">1 Day Ago</p>
                                    </div>
                                    <p>Added a comment to Dennis Nedry</p>
                                    <p class="noti-reply-msg">“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”</p>
                                </div>
                            </div>
                        </li>
                        <li class="notification-message">
                            <div class="media noti-img d-flex">
                                <a href="seller-notifications.html">
                                    <span class="avatar avatar-sm flex-shrink-0">
                                        <img class="avatar-img rounded-circle img-fluid" alt="User Image" src="assets/img/user/user-04.jpg">
                                    </span>
                                </a>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="noti-details"><a href="seller-notifications.html">John Hammond</a></h6>
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
                <a href="seller-profile.html" class="dropdown-toggle d-flex align-items-center nav-link" data-bs-toggle="dropdown">
                    <span class="avatar online avatar-sm">
                        <img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid rounded-circle">
                    </span>
                </a>
                <div class="dropdown-menu p-0 dropdown-profile">
                    <div class="d-flex align-items-center border-bottom p-2 mb-0">
                        <span class="avatar avatar-lg me-2">
                            <img src="assets/img/user/user-04.jpg" alt="img" class="rounded-circle">
                        </span>
                        <div>
                            <h6 class="fs-14 fw-medium mb-1">Harry Brooks</h6>
                            <p class="fs-13 mb-0">Joined On : 14 Jan 2024</p>
                        </div>
                    </div>

                    <div class="p-2">
                        <!-- Item-->
                        <a class="dropdown-item d-flex align-items-center mb-1" href="seller-profile.html">
                            <i class="ti ti-user-cog me-2"></i>My Profile
                        </a>

                        <!-- Item-->
                        <a class="dropdown-item d-flex align-items-center mb-1" href="seller-settings.html">
                            <i class="ti ti-settings-cog me-2"></i>Settings
                        </a>

                        <!-- Item-->
                        <a class="dropdown-item d-flex align-items-center mb-1" href="seller-orders.html">
                            <i class="ti ti-shopping-bag me-2"></i>Orders
                        </a>

                        <!-- Item-->
                        <a class="dropdown-item d-flex align-items-center mb-1" href="seller-earnings.html">
                            <i class="ti ti-moneybag me-2"></i>Earnings
                        </a>

                        <!-- Item-->
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
        <div class="mobile-user-menu">
            <a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
                <span class="avatar online avatar-sm">
                    <img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid rounded-circle">
                </span>
            </a>
            <div class="dropdown-menu p-0 dropdown-profile">
                <div class="d-flex align-items-center border-bottom p-2 mb-0">
                    <span class="avatar avatar-lg me-2">
                        <img src="assets/img/user/user-04.jpg" alt="img" class="rounded-circle">
                    </span>
                    <div>
                        <h6 class="fs-14 fw-medium mb-1">Harry Brooks</h6>
                        <p class="fs-13 mb-0">Joined On : 14 Jan 2024</p>
                    </div>
                </div>

                <div class="p-2">
                    <!-- Item-->
                    <a class="dropdown-item d-flex align-items-center mb-1" href="seller-profile.html">
                        <i class="ti ti-user-cog me-2"></i>My Profile
                    </a>

                    <!-- Item-->
                    <a class="dropdown-item d-flex align-items-center mb-1" href="seller-settings.html">
                        <i class="ti ti-settings-cog me-2"></i>Settings
                    </a>

                    <!-- Item-->
                    <a class="dropdown-item d-flex align-items-center mb-1" href="seller-orders.html">
                        <i class="ti ti-shopping-bag me-2"></i>Orders
                    </a>

                    <!-- Item-->
                    <a class="dropdown-item d-flex align-items-center mb-1" href="seller-earnings.html">
                        <i class="ti ti-moneybag me-2"></i>Earnings
                    </a>

                    <!-- Item-->
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
<!-- /Header -->