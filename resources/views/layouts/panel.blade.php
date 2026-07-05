<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Talent Dashboard') · Future Connect</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        :root {
            --fc-forest: #0F3D3E;
            --fc-forest-dark: #0A2C2D;
            --fc-amber: #E8A33D;
            --fc-amber-dark: #C7852A;
            --fc-sand: #F6F4EF;
            --fc-ink: #20262A;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--fc-sand);
            color: var(--fc-ink);
        }

        .fc-display { font-family: 'Sora', sans-serif; }

        .navbar-fc {
            background-color: var(--fc-forest);
            box-shadow: 0 1px 0 rgba(0,0,0,.08);
        }
        .navbar-fc .navbar-brand {
            font-family: 'Sora', sans-serif;
            font-weight: 600;
            color: #fff;
            letter-spacing: -0.01em;
        }
        .navbar-fc .navbar-brand .dot {
            display: inline-block;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--fc-amber);
            margin-right: 8px;
        }
        .navbar-fc .nav-link {
            color: rgba(255,255,255,.72);
            font-size: .9rem;
            font-weight: 500;
            padding: .5rem .85rem !important;
        }
        .navbar-fc .nav-link:hover,
        .navbar-fc .nav-link.active {
            color: #fff;
        }
        .navbar-fc .nav-link.active {
            position: relative;
        }
        .navbar-fc .nav-link.active::after {
            content: "";
            position: absolute;
            left: .85rem;
            right: .85rem;
            bottom: -1px;
            height: 2px;
            background: var(--fc-amber);
            border-radius: 2px;
        }
        .navbar-fc .dropdown-menu {
            border: none;
            box-shadow: 0 10px 30px rgba(0,0,0,.12);
            border-radius: .6rem;
            padding: .4rem;
        }
        .navbar-fc .dropdown-item {
            border-radius: .4rem;
            font-size: .875rem;
            padding: .5rem .7rem;
        }
        .navbar-fc .dropdown-item:hover {
            background-color: var(--fc-sand);
        }

        .btn-fc-primary {
            background-color: var(--fc-amber);
            border-color: var(--fc-amber);
            color: #23281f;
            font-weight: 600;
        }
        .btn-fc-primary:hover {
            background-color: var(--fc-amber-dark);
            border-color: var(--fc-amber-dark);
            color: #fff;
        }
        .btn-fc-outline {
            border-color: var(--fc-forest);
            color: var(--fc-forest);
            font-weight: 600;
        }
        .btn-fc-outline:hover {
            background-color: var(--fc-forest);
            color: #fff;
        }

        .fc-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--fc-forest);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: .85rem;
        }

        .card {
            border: 1px solid rgba(0,0,0,.06);
            border-radius: .75rem;
        }
        .card-stat .label {
            font-size: .75rem;
            color: rgba(32,38,42,.55);
        }
        .card-stat .value {
            font-family: 'Sora', sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
        }

        .status-pill {
            font-size: .72rem;
            font-weight: 600;
            padding: .25rem .6rem;
            border-radius: 999px;
            background: rgba(232,163,61,.15);
            color: var(--fc-amber-dark);
            text-transform: capitalize;
        }
    </style>
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-fc py-2">
        <div class="container-fluid px-4">
            <a class="navbar-brand" href="{{ route('talent.dashboard') }}">
                <span class="dot"></span>Future Connect
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#fcNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="fcNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('talent.dashboard') ? 'active' : '' }}"
                           href="{{ route('talent.dashboard') }}">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('talent.skills') ? 'active' : '' }}"
                           href="{{ route('talent.skills') }}">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('talent.page.stories*') ? 'active' : '' }}"
                           href="{{ route('talent.page.stories') }}">Stories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('talent.connections.index') ? 'active' : '' }}"
                           href="{{ route('talent.connections.index') }}">Connections</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle {{ request()->routeIs('talent.courses.*') ? 'active' : '' }}"
                           href="#" role="button" data-bs-toggle="dropdown">Courses</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('talent.courses.index') }}">My courses</a></li>
                            <li><a class="dropdown-item" href="{{ route('talent.courses.create') }}">Create course</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle {{ request()->routeIs('talent.jobs.*') ? 'active' : '' }}"
                           href="#" role="button" data-bs-toggle="dropdown">Jobs</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('talent.jobs.index') }}">Browse jobs</a></li>
                            <li><a class="dropdown-item" href="{{ route('talent.jobs.create') }}">Post a job</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle {{ request()->routeIs('talent.projects.*') ? 'active' : '' }}"
                           href="#" role="button" data-bs-toggle="dropdown">Projects</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('talent.projects.index') }}">My projects</a></li>
                            <li><a class="dropdown-item" href="{{ route('talent.projects.create') }}">Start a project</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle {{ request()->routeIs('talent.products.*') || request()->routeIs('talent.seller.*') ? 'active' : '' }}"
                           href="#" role="button" data-bs-toggle="dropdown">Products</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('talent.products.index') }}">My products</a></li>
                            <li><a class="dropdown-item" href="{{ route('talent.products.create') }}">Add product</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="{{ route('talent.products.seller') }}">Become a seller</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">More</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('talent.wallets.index') }}">Wallet</a></li>
                            <li><a class="dropdown-item" href="{{ route('talent.payments.index') }}">Payments</a></li>
                            <li><a class="dropdown-item" href="{{ route('talent.events.index') }}">Events</a></li>
                            <li><a class="dropdown-item" href="{{ route('talent.announcements.index') }}">Announcements</a></li>
                            <li><a class="dropdown-item" href="{{ route('talent.testimonials.index') }}">Testimonials</a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="navbar-nav align-items-lg-center">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown">
                            <span class="fc-avatar">{{ strtoupper(substr(auth()->user()->name ?? 'T', 0, 1)) }}</span>
                            <span class="d-none d-lg-inline text-white">{{ auth()->user()->name ?? 'Talent' }}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="{{ route('talent.get.profile') }}">My profile</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <form method="POST" action="{{ route('logout') }}" class="px-2">
                                    @csrf
                                    <button type="submit" class="dropdown-item px-0 text-danger">Sign out</button>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container-fluid px-4 py-4">
        @if(session('success'))
            <div class="alert alert-warning border-0" style="background:rgba(232,163,61,.12); color:var(--fc-amber-dark);">
                {{ session('success') }}
            </div>
        @endif

        <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
                <h1 class="fc-display fs-4 fw-semibold mb-0">@yield('heading', 'Dashboard')</h1>
                <p class="text-secondary small mb-0">@yield('subheading', 'Welcome back')</p>
            </div>
            @hasSection('actions')
                <div>@yield('actions')</div>
            @endif
        </div>

        @yield('content')
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>