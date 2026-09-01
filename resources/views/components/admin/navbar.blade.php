<style>
    /* ── THEME TOKENS ── */
    :root {
        --dark: #060f11;
        --dark-2: #0d1e22;
        --dark-3: #122028;
        --green: #48d597;
        --green-dim: rgba(72, 213, 151, 0.10);
        --green-border: rgba(72, 213, 151, 0.25);
        --white: #F5f5f7;
        --white-70: rgba(255, 255, 255, 0.70);
        --white-30: rgba(255, 255, 255, 0.30);
        --white-10: rgba(255, 255, 255, 0.08);
        --border: rgba(255, 255, 255, 0.08);
    }

    /* ── NAVBAR ── */
    .navbar.default-layout-navbar {
        background: var(--dark-2);
        border-bottom: 1px solid var(--border);
        height: 64px;
    }

    .navbar-brand-wrapper {
        width: 240px;
        min-width: 240px;
        height: 64px;
        background: var(--dark);
        border-right: 1px solid var(--border);
        padding: 0 18px;
    }

    .brand-icon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        overflow: hidden;
        background: var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .brand-icon img {
        width: 22px;
        height: 22px;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }

    .brand-name {
        font-size: 15px;
        font-weight: 600;
        color: var(--white);
        letter-spacing: 0.3px;
    }

    .sidebar-toggle {
        background: none;
        border: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        color: var(--white-70);
        font-size: 20px;
        transition: background 0.15s, color 0.15s;
        padding: 0;
    }

    .sidebar-toggle:hover {
        background: var(--white-10);
        color: var(--white);
    }

    .navbar-menu-wrapper {
        padding: 0 20px;
        background: var(--dark-2);
    }

    .page-title {
        font-size: 12px;
        font-weight: 500;
        color: var(--white-30);
        letter-spacing: 0.6px;
        text-transform: uppercase;
    }

    .page-title span {
        color: var(--white-70);
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0;
    }

    /* nav icon buttons */
    .nav-icon-btn {
        width: 38px;
        height: 38px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white-70);
        font-size: 20px;
        position: relative;
        transition: background 0.15s, color 0.15s;
        text-decoration: none;
    }

    .nav-icon-btn:hover {
        background: var(--white-10);
        color: var(--white);
    }

    .badge-count {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--green);
        color: var(--dark);
        font-size: 9px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-divider {
        width: 1px;
        height: 28px;
        background: var(--border);
        margin: 0 6px;
    }

    /* user pill */
    .user-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 10px 5px 5px;
        border-radius: 10px;
        background: var(--white-10);
        border: 1px solid var(--border);
        cursor: pointer;
        text-decoration: none;
        transition: background 0.15s, border-color 0.15s;
    }

    .user-btn:hover {
        background: var(--green-dim);
        border-color: var(--green-border);
    }

    .user-avatar {
        width: 30px;
        height: 30px;
        border-radius: 7px;
        background: var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 700;
        color: var(--dark);
        flex-shrink: 0;
    }

    .user-avatar-lg {
        width: 52px;
        height: 52px;
        border-radius: 12px;
        font-size: 18px;
    }

    .user-info {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
    }

    .user-name {
        font-size: 13px;
        font-weight: 500;
        color: var(--white);
    }

    .user-role {
        font-size: 10px;
        color: var(--green);
        font-weight: 500;
    }

    .chevron-icon {
        font-size: 12px;
        color: var(--white-30);
    }

    /* dropdowns */
    .navbar-dropdown {
        background: var(--dark-3) !important;
        border: 1px solid var(--border) !important;
        border-radius: 12px !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
        min-width: 220px;
        padding: 6px;
    }

    .navbar-dropdown .dropdown-header {
        display: flex;
        align-items: center;
        padding: 10px 12px;
        font-size: 12px;
        font-weight: 500;
        color: var(--white-70);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border-radius: 8px;
    }

    .navbar-dropdown .dropdown-divider {
        border-color: var(--border);
        margin: 4px 0;
    }

    .navbar-dropdown .dropdown-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 9px 12px;
        font-size: 13px;
        color: var(--white-70);
        border-radius: 8px;
        transition: background 0.12s, color 0.12s;
    }

    .navbar-dropdown .dropdown-item:hover {
        background: var(--white-10);
        color: var(--white);
    }

    .navbar-dropdown .dropdown-item .dropdown-item-icon {
        font-size: 16px;
    }

    .navbar-dropdown .dropdown-item.text-danger {
        color: #e05c6a !important;
    }

    .navbar-dropdown .dropdown-item.text-danger:hover {
        background: rgba(224, 92, 106, 0.1);
    }

    .text-green {
        color: var(--green) !important;
    }

    /* preview list */
    .preview-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }

    .preview-thumbnail img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--border);
    }

    /* user dropdown menu */
    .user-dropdown-menu {
        min-width: 240px;
    }

    .user-dropdown-menu .dropdown-header {
        flex-direction: column;
        align-items: center;
        padding: 16px 12px 12px;
        position: static;
    }
</style>

<nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="navbar-brand-wrapper d-flex align-items-center justify-content-between">
        <a class="navbar-brand brand-logo d-flex align-items-center gap-2" href="#">
            <div class="brand-icon">
                <img src="{{ asset('assets/img/WORDMARK.png') }}" alt="{{ config('app.name') }} logo" />
            </div>
            <span class="brand-name">{{ config('app.name') }}</span>
        </a>
        <button class="sidebar-toggle" type="button" data-toggle="minimize" aria-label="Toggle sidebar">
            <i class="icon-menu"></i>
        </button>
    </div>

    <div class="navbar-menu-wrapper d-flex align-items-center justify-content-between flex-grow-1">
        <p class="page-title mb-0 d-none d-lg-block">
            Dashboard <span>— @yield('title')</span>
        </p>

        <ul class="navbar-nav d-flex align-items-center gap-1 list-unstyled mb-0">
            {{-- Notifications --}}
            <li class="nav-item">
                <a class="nav-icon-btn" href="#" id="notifDropdown" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Notifications">
                    <i class="icon-bell"></i>
                    <span class="badge-count">3</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end navbar-dropdown" aria-labelledby="notifDropdown">
                    <div class="dropdown-header">
                        <span>Notifications</span>
                        <a href="#" class="text-green ms-auto">Mark all read</a>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                        <i class="icon-info text-green me-2"></i> New employee registered
                    </a>
                    <a class="dropdown-item" href="#">
                        <i class="icon-close text-danger me-2"></i> Transfer request declined
                    </a>
                </div>
            </li>

            {{-- Messages --}}
            <li class="nav-item">
                <a class="nav-icon-btn" href="#" id="messageDropdown" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Messages">
                    <i class="icon-speech"></i>
                    <span class="badge-count">7</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                    <div class="dropdown-header">
                        <span>Messages</span>
                        <a href="#" class="text-green ms-auto">View all</a>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item preview-item" href="#">
                        <div class="preview-thumbnail">
                            <img src="{{ asset('assets/images/faces/face10.jpg') }}" alt="" class="img-sm profile-pic">
                        </div>
                        <div class="preview-item-content py-2">
                            <p class="preview-subject fw-medium text-white mb-0">Marian Garner</p>
                            <p class="small text-muted mb-0">The meeting is cancelled</p>
                        </div>
                    </a>
                    <a class="dropdown-item preview-item" href="#">
                        <div class="preview-thumbnail">
                            <img src="{{ asset('assets/images/faces/face12.jpg') }}" alt="" class="img-sm profile-pic">
                        </div>
                        <div class="preview-item-content py-2">
                            <p class="preview-subject fw-medium text-white mb-0">David Grey</p>
                            <p class="small text-muted mb-0">Please review the report</p>
                        </div>
                    </a>
                </div>
            </li>

            {{-- Search --}}
            <li class="nav-item d-none d-lg-block">
                <a class="nav-icon-btn" href="#" aria-label="Search">
                    <i class="icon-magnifier"></i>
                </a>
            </li>

            <li class="nav-divider d-none d-xl-block"></li>

            {{-- User dropdown --}}
            <li class="nav-item d-none d-xl-flex">
                <a class="user-btn" href="#" id="UserDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="user-avatar">
                        {{ strtoupper(substr(auth()->user()->name, 0, 2)) }}
                    </div>
                    <div class="user-info">
                        <span class="user-name">{{ auth()->user()->name }}</span>
                        <span class="user-role">{{ auth()->user()->role ?? 'User' }}</span>
                    </div>
                    <i class="icon-arrow-down chevron-icon"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end navbar-dropdown user-dropdown-menu" aria-labelledby="UserDropdown">
                    <div class="dropdown-header text-center">
                        <div class="user-avatar user-avatar-lg mx-auto mb-2">
                            {{ strtoupper(substr(auth()->user()->name, 0, 2)) }}
                        </div>
                        <p class="fw-medium text-white mb-0">{{ auth()->user()->name }}</p>
                        <p class="small text-muted mb-0">{{ auth()->user()->email }}</p>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                        <i class="icon-user dropdown-item-icon text-green"></i> My Profile
                    </a>
                    <a class="dropdown-item" href="#">
                        <i class="icon-settings dropdown-item-icon text-green"></i> Settings
                    </a>
                    <a class="dropdown-item" href="#">
                        <i class="icon-question dropdown-item-icon text-green"></i> Help & FAQ
                    </a>
                    <div class="dropdown-divider"></div>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="dropdown-item text-danger">
                            <i class="icon-power dropdown-item-icon"></i> Sign Out
                        </button>
                    </form>
                </div>
            </li>
        </ul>

        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas" aria-label="Open menu">
            <span class="icon-menu"></span>
        </button>
    </div>
</nav>