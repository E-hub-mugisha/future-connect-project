<!-- Sidebar -->
<div class="sidebar" id="sidebar">
    <div class="sidebar-logo">
        <div class="d-flex align-items-center justify-content-between">
            <a href="seller-dashboard.html" class="logo logo-normal">
                <img src="assets/img/logo.svg" alt="Logo">
            </a>
            <a href="seller-dashboard.html" class="logo-small">
                <img src="assets/img/logo-small.svg" alt="Logo" class="img-fluid">
            </a>
            <a href="seller-dashboard.html" class="dark-logo">
                <img src="assets/img/dark-logo.svg" alt="Logo" class="img-fluid">
            </a>
            <a id="toggle_btn" href="javascript:void(0);" class="active">
                <i class="ti ti-arrow-bar-right"></i>
            </a>
        </div>
    </div>
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
            <ul>
                <li>
                    <ul>
                        <li>
                            <a href="{{ route('user.dashboard') }}" class="active">
                                <i class="ti ti-layout-grid me-2"></i><span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('user.talents.connected') }}">
                                <i class="ti ti-layers-intersect me-2"></i><span>Talent Connected</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('user.transactions') }}">
                                <i class="ti ti-user-bolt me-2"></i><span>Transactions</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('user.connections') }}">
                                <i class="ti ti-wallet me-2"></i><span>Connection Requested</span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-files.html">
                                <i class="ti ti-files me-2"></i><span>Files</span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-reviews.html">
                                <i class="ti ti-stars me-2"></i> <span> My Reviews </span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-message.html">
                                <i class="ti ti-message me-2"></i> <span>Messages </span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-notifications.html">
                                <i class="ti ti-bell me-2"></i> <span>Notifications </span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-transactions.html">
                                <i class="ti ti-transition-top me-2"></i> <span>Transactions </span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-payouts.html">
                                <i class="ti ti-pennant me-2"></i> <span>Payouts </span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-earnings.html">
                                <i class="ti ti-moneybag me-2"></i> <span> Earnings </span>
                            </a>
                        </li>
                        <li>
                            <a href="seller-settings.html">
                                <i class="ti ti-settings-check me-2"></i> <span> Settings</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="sidebar-footer">
                <a href="signin.html" target="_blank"><i class="ti ti-logout me-2"></i><span>Logout</span></a>
            </div>
        </div>
    </div>
</div>
<!-- /Sidebar -->