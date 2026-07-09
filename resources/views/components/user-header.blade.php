@php
$categories = \App\Models\Category::inRandomOrder()->take(3)->get();

if (!function_exists('isActiveRoute')) {
function isActiveRoute($route) {
return request()->routeIs($route) ? 'active' : '';
}
}
@endphp



{{-- ════════════════════ FIXED HEADER STACK (topbar + header pinned to viewport) ════════════════════ --}}
<div class="fc-header-fixed-wrap" id="fcHeaderFixedWrap">

    {{-- TOP INFO BAR — slides/fades away once the page scrolls --}}
    <div class="fc-topbar d-none d-lg-block" id="fcTopbar">
        <div class="fc-tb-inner">
            <div class="fc-tb-contact">
                <span>info@futureconnect.rw</span>
                <span>+250 784 123 456</span>
            </div>
            <div class="fc-tb-social">
                <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>

    {{-- MAIN HEADER --}}
    <header class="fc-header" id="fcHeader">
        <div class="fc-header-inner">

            {{-- Logo (same markup/classes used in the mobile drawer, for visual parity) --}}
            <a href="{{ route('user.home') }}" class="fc-logo-wrap">
                <div class="fc-logo-mark">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                </div>
                <div class="fc-logo-name">Future<span>Connect</span></div>
            </a>

            {{-- Desktop Navigation --}}
            <ul class="fc-nav">

                {{-- Platform — what you can DO on FutureConnect --}}
                <li>
                    <a href="javascript:void(0)">Platform <span class="chevron">▾</span></a>
                    <div class="fc-mega">
                        <a class="fc-card" href="{{ route('talent.connections-room') }}">
                            <p class="fc-card-title">Professional Connections</p>
                            <p class="fc-card-desc">Connect with experts and peers in your field.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.projects.index') }}">
                            <p class="fc-card-title">Project Collaboration</p>
                            <p class="fc-card-desc">Build projects with talented people.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.jobs.index') }}">
                            <p class="fc-card-title">Job Opportunities</p>
                            <p class="fc-card-desc">Find jobs, internships, and career opportunities.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.courses') }}">
                            <p class="fc-card-title">Learning</p>
                            <p class="fc-card-desc">Learn, grow, and earn new certifications.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.talents') }}">
                            <p class="fc-card-title">Skills Hub</p>
                            <p class="fc-card-desc">Showcase your skills and portfolio.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.products.index') }}">
                            <p class="fc-card-title">Marketplace</p>
                            <p class="fc-card-desc">Buy and sell technology solutions.</p>
                        </a>
                    </div>
                </li>

                {{-- Solutions — who FutureConnect is for --}}
                <li>
                    <a href="javascript:void(0)">Solutions <span class="chevron">▾</span></a>
                    <div class="fc-mega">
                        <a class="fc-card" href="{{ route('solutions.students') }}">
                            <p class="fc-card-title">For Students</p>
                            <p class="fc-card-desc">Launch your career with confidence.</p>
                        </a>
                        <a class="fc-card" href="{{ route('solutions.ngos') }}">
                            <p class="fc-card-title">For NGOs</p>
                            <p class="fc-card-desc">Partner with skilled local talent.</p>
                        </a>
                        <a class="fc-card" href="{{ route('solutions.companies') }}">
                            <p class="fc-card-title">For Companies</p>
                            <p class="fc-card-desc">Find verified and sharp skills faster.</p>
                        </a>
                        <a class="fc-card" href="{{ route('solutions.professionals') }}">
                            <p class="fc-card-title">For Professionals</p>
                            <p class="fc-card-desc">Grow your network and opportunities.</p>
                        </a>
                        <a class="fc-card" href="{{ route('solutions.universities') }}">
                            <p class="fc-card-title">For Universities</p>
                            <p class="fc-card-desc">Empower students beyond graduation.</p>
                        </a>
                        {{-- TODO: no dedicated investors route exists yet — swap in route('user.investors') once it's built --}}
                        <a class="fc-card" href="{{ route('solutions.investors') }}">
                            <p class="fc-card-title">For Investors</p>
                            <p class="fc-card-desc">Discover skills worth investing in.</p>
                        </a>
                    </div>
                </li>


                <li>

                    <a href="{{ route('user.trending.index') }}">Trending</a>
                </li>

                {{-- Company — about the platform + support --}}
                <li>
                    <a href="javascript:void(0)">Company <span class="chevron">▾</span></a>
                    <div class="fc-mega">
                        <a class="fc-card" href="{{ route('user.how-it-works') }}">
                            <p class="fc-card-title">How It Works</p>
                            <p class="fc-card-desc">See the platform in action.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.contact') }}">
                            <p class="fc-card-title">Contact</p>
                            <p class="fc-card-desc">Get in touch with our team.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.success-stories') }}">
                            <p class="fc-card-title">Customer Stories</p>
                            <p class="fc-card-desc">Real outcomes from real talent.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.contact') }}">
                            <p class="fc-card-title">Partnerships</p>
                            <p class="fc-card-desc">Team up with FutureConnect.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.faq') }}">
                            <p class="fc-card-title">FAQ</p>
                            <p class="fc-card-desc">Answers to common questions.</p>
                        </a>
                        <a class="fc-card" href="{{ route('user.contact') }}">
                            <p class="fc-card-title">Help &amp; Support</p>
                            <p class="fc-card-desc">Get help when you need it.</p>
                        </a>
                    </div>
                </li>

                <li>
                    <a href="{{ route('pricing') }}">Pricing</a>
                </li>

            </ul>

            {{-- Right Actions --}}
            <div class="fc-actions">

                <a href="{{ route('demo.request') }}" class="fc-btn-ghost fc-btn-request-demo">Request Demo</a>

                {{-- Theme toggle --}}
                <button class="fc-btn-theme" id="fcThemeToggle" aria-label="Toggle theme">
                    <i class="ti ti-sun"></i>
                    <i class="ti ti-moon"></i>
                </button>
                {{-- Search button --}}
                <button class="fc-btn-search" id="fcSearchBtn" aria-label="Search">
                    <i class="ti ti-search"></i>
                </button>

                @auth
                {{-- Dashboard link --}}
                @php
                $dashboards = [
                'admin' => 'admin.dashboard',
                'agent' => 'agent.dashboard',
                'talent' => 'talent.dashboard',
                'seller' => 'seller.dashboard',
                'user' => 'user.dashboard',
                ];
                @endphp
                <a href="{{ route($dashboards[auth()->user()->role] ?? 'user.dashboard') }}"
                    class="fc-btn-green">
                    <i class="ti ti-layout-dashboard"></i> Dashboard
                </a>

                @else
                {{-- Sign In — triggers inline login panel --}}
                <div class="fc-login-wrap">
                    <button class="fc-btn-ghost fc-sign-in-desktop" id="fcSignInBtn">
                        <i class="ti ti-user"></i> Sign In
                    </button>

                    {{-- ── INLINE LOGIN PANEL ── --}}
                    <div class="fc-login-panel" id="fcLoginPanel">
                        <div class="fc-lp-head">
                            <div class="fc-lp-head-left">
                                <h4>Welcome Back</h4>
                                <p>Sign in to your account</p>
                            </div>
                            <button class="fc-lp-close" id="fcLoginClose">✕</button>
                        </div>

                        <form action="{{ route('login') }}" method="POST">
                            @csrf

                            <div class="fc-lp-field">
                                <label for="lp_email">Email</label>
                                <div class="fc-lp-input-wrap">
                                    <i class="ti ti-mail fc-lp-icon"></i>
                                    <input type="email" id="lp_email" name="email"
                                        placeholder="you@example.com" required
                                        value="{{ old('email') }}">
                                </div>
                            </div>

                            <div class="fc-lp-field">
                                <label for="lp_password">Password</label>
                                <div class="fc-lp-input-wrap">
                                    <i class="ti ti-lock fc-lp-icon"></i>
                                    <input type="password" id="lp_password" name="password"
                                        placeholder="••••••••" required>
                                </div>
                            </div>

                            <div class="fc-lp-row">
                                <label class="fc-lp-remember">
                                    <input type="checkbox" name="remember">
                                    <span>Remember me</span>
                                </label>
                                <a href="{{ route('password.request') }}" class="fc-lp-forgot">
                                    Forgot password?
                                </a>
                            </div>

                            <button type="submit" class="fc-lp-submit">Sign In →</button>
                        </form>

                        <div class="fc-lp-footer">
                            No account yet?
                            <a href="{{ route('register') }}">Create one →</a>
                        </div>
                    </div>
                </div>

                {{-- Mobile: + icon button (shown only on small screens) --}}
                <a href="{{ route('user.register_as_talent') }}"
                    class="fc-btn-register-mobile"
                    aria-label="Register Skills"
                    title="Register Skills">
                    <i class="ti ti-plus"></i>
                </a>

                {{-- Desktop: full text button (hidden on small screens) --}}
                <a href="{{ route('user.register_as_talent') }}" class="fc-btn-green fc-register-desktop">
                    Register Skills
                </a>
                @endauth

                {{-- Mobile hamburger — icon-based, no spans --}}
                <button class="fc-hamburger" id="fcHamburger" aria-label="Menu">
                    <i class="ti ti-menu-2"></i>
                </button>

            </div>

        </div>
    </header>

</div>

{{-- Spacer — reserves the fixed stack's height so page content doesn't jump underneath it --}}
<div class="fc-header-spacer" id="fcHeaderSpacer"></div>

{{-- ════════════════════ MOBILE DRAWER (mirrors the desktop nav exactly) ════════════════════ --}}
<div class="fc-drawer" id="fcDrawer">
    <div class="fc-drawer-bg" id="fcDrawerBg"></div>
    <div class="fc-drawer-panel">

        <div class="fc-drawer-logo">
            <a href="{{ route('user.home') }}" class="fc-logo-wrap">
                <div class="fc-logo-mark">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                </div>
                <div class="fc-logo-name">Future<span>Connect</span></div>
            </a>
            <button class="fc-drawer-close" id="fcDrawerClose">✕</button>
        </div>

        <ul class="fc-drawer-nav">
            <li>
                <a href="javascript:void(0)" onclick="toggleDrawerSub(this)">
                    Platform <span class="chevron">▾</span>
                </a>
                <ul class="fc-drawer-sub">
                    <li><a href="{{ route('talent.connections-room') }}">Professional Connections</a></li>
                    <li><a href="{{ route('user.talents') }}">Project Collaboration</a></li>
                    <li><a href="{{ route('user.jobs.index') }}">Job Opportunities</a></li>
                    <li><a href="{{ route('user.courses') }}">Learning</a></li>
                    <li><a href="{{ route('user.register_as_talent') }}">Skills Hub</a></li>
                    <li><a href="{{ route('user.products.index') }}">Marketplace</a></li>
                </ul>
            </li>
            <li>
                <a href="javascript:void(0)" onclick="toggleDrawerSub(this)">
                    Solutions <span class="chevron">▾</span>
                </a>
                <ul class="fc-drawer-sub">
                    <li><a href="{{ route('solutions.students') }}">For Students</a></li>
                    <li><a href="{{ route('solutions.ngos') }}">For NGOs</a></li>
                    <li><a href="{{ route('solutions.companies') }}">For Companies</a></li>
                    <li><a href="{{ route('solutions.professionals') }}">For Professionals</a></li>
                    <li><a href="{{ route('solutions.universities') }}">For Universities</a></li>
                    <li><a href="{{ route('solutions.investors') }}">For Investors</a></li>
                </ul>
            </li>
            <li><a href="{{ route('user.trending.index') }}">Trending</a></li>
            <li>
                <a href="javascript:void(0)" onclick="toggleDrawerSub(this)">
                    Company <span class="chevron">▾</span>
                </a>
                <ul class="fc-drawer-sub">
                    <li><a href="{{ route('user.how-it-works') }}">How It Works</a></li>
                    <li><a href="{{ route('user.contact') }}">Contact</a></li>
                    <li><a href="{{ route('user.success-stories') }}">Customer Stories</a></li>
                    <li><a href="{{ route('user.contact') }}">Partnerships</a></li>
                    <li><a href="{{ route('user.faq') }}">FAQ</a></li>
                    <li><a href="{{ route('user.contact') }}">Help &amp; Support</a></li>
                </ul>
            </li>
            <li><a href="{{ route('pricing') }}">Pricing</a></li>
        </ul>

        <div class="fc-drawer-ctas">
            @auth
            @php
            $dashboards = ['admin'=>'admin.dashboard','agent'=>'agent.dashboard','talent'=>'talent.dashboard','seller'=>'seller.dashboard','user'=>'user.dashboard'];
            @endphp
            <a href="{{ route($dashboards[auth()->user()->role] ?? 'user.dashboard') }}" class="fc-btn-green">
                Dashboard
            </a>
            @else
            <button class="fc-btn-ghost" onclick="openMobileLogin()">Sign In</button>
            <a href="{{ route('user.register_as_talent') }}" class="fc-btn-green">Register Skills</a>
            @endauth
            <a href="{{ route('demo.request') }}" class="fc-btn-ghost">Request Demo</a>
        </div>

    </div>
</div>

{{-- ════════════════════ SEARCH OVERLAY ════════════════════ --}}
<div class="fc-search-overlay" id="fcSearchOverlay">
    <button class="fc-search-close" id="fcSearchClose">✕</button>
    <div class="fc-search-box">
        <p>Search talents, skills, stories &amp; more</p>
        <form action="{{ route('talent.search') }}" method="GET">
            <div class="fc-search-input-wrap">
                <input type="text" name="keyword" placeholder="e.g. Photography, Coding, Dance..." required autofocus>
                <button type="submit" class="fc-search-submit"><i class="ti ti-search"></i></button>
            </div>
        </form>
    </div>
</div>

{{-- ════════════════════ SELLER MODAL ════════════════════ --}}
<div class="modal fade" id="applySellerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg" style="background:var(--h-surface);border:1px solid var(--h-border);border-radius:18px;overflow:hidden;">
            <form action="{{ route('seller.store') }}" method="POST">
                @csrf
                <div class="modal-header border-0" style="background:linear-gradient(135deg,#071a10,#0e1618);padding:20px 24px;">
                    <h5 class="modal-title fw-bold" style="color:#fff;font-family:'Syne',sans-serif;">Apply to Become a Seller</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body py-4 px-4">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Company Name</label>
                            <input type="text" name="company_name" class="form-control mt-1" placeholder="e.g. Creative Minds Ltd" style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;" required>
                        </div>
                        <div class="col-md-6">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Email</label>
                            <input type="email" name="email" class="form-control mt-1" placeholder="example@domain.com" style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;" required>
                        </div>
                        <div class="col-md-6">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Phone</label>
                            <input type="text" name="phone" class="form-control mt-1" placeholder="+250 700 123 456" style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;">
                        </div>
                        <div class="col-md-6">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Address</label>
                            <input type="text" name="address" class="form-control mt-1" placeholder="Kigali, Rwanda" style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;">
                        </div>
                        <div class="col-12">
                            <label style="font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--h-muted);">Company Description</label>
                            <textarea name="description" rows="3" class="form-control mt-1" placeholder="Tell us about your company..." style="background:var(--h-surface2);border:1px solid var(--h-border);color:var(--h-text);border-radius:10px;resize:vertical;"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 px-4 py-3 d-flex justify-content-between" style="background:var(--h-surface2);">
                    <button type="button" class="btn" data-bs-dismiss="modal" style="background:transparent;border:1px solid var(--h-border);color:var(--h-muted);border-radius:9px;padding:9px 22px;font-family:'DM Sans',sans-serif;">Cancel</button>
                    <button type="submit" class="btn" style="background:var(--h-green);color:#fff;border:none;border-radius:9px;padding:9px 28px;font-family:'Syne',sans-serif;font-weight:700;">Submit Application</button>
                </div>
            </form>
        </div>
    </div>
</div>

{{-- ════════════════════════════════════
     POST JOB MODAL
════════════════════════════════════ --}}
<div class="modal fade fc-modal" id="postJobModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg ">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h5 class="modal-title">
                        Post a New Job / work
                        <small>Fill in the details below to publish your listing</small>
                    </h5>
                    <span class="accent-line"></span>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form action="{{ route('user.jobs.store') }}" method="POST">
                @csrf
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="fc-form-label">Job Title <span style="color:var(--accent)">*</span></label>
                            <input type="text" name="title" class="fc-form-control" placeholder="e.g., Senior Laravel Developer" required>
                        </div>
                        <div class="col-12">
                            <label class="fc-form-label">Description <span style="color:var(--accent)">*</span></label>
                            <textarea name="description" class="fc-form-control" rows="4" placeholder="Describe the job responsibilities, requirements, and benefits..." required></textarea>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Category <span style="color:var(--accent)">*</span></label>
                            <select name="job_category_id" class="fc-form-control" required>
                                <option value="">Select Category</option>
                                @foreach($categories as $cat)
                                <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Location <span style="color:var(--accent)">*</span></label>
                            <input type="text" name="location" class="fc-form-control" placeholder="e.g., Kigali, Rwanda / Remote" required>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Job Type</label>
                            <select name="type" class="fc-form-control">
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Experience Level</label>
                            <select name="experience_level" class="fc-form-control">
                                <option value="entry">Entry Level</option>
                                <option value="mid">Mid Level</option>
                                <option value="senior">Senior Level</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Salary Range</label>
                            <input type="text" name="salary_range" class="fc-form-control" placeholder="e.g., 300K – 800K RWF">
                        </div>
                        <div class="col-md-4">
                            <label class="fc-form-label">Skills (comma separated)</label>
                            <input type="text" name="skills" class="fc-form-control" placeholder="e.g., Laravel, Vue, CSS">
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="gap:10px;">
                    <button type="button" class="btn-fc-outline" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn-fc-primary">
                        <i class="ti ti-send"></i> Post Job
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
{{-- ════════════════════ SCRIPTS ════════════════════ --}}
<script>
    (function() {

        /* ── Fixed header stack: hide topbar + toggle header shadow on scroll,
             and keep a spacer div in sync so page content never jumps ── */
        const fixedWrap = document.getElementById('fcHeaderFixedWrap');
        const header = document.getElementById('fcHeader');
        const topbar = document.getElementById('fcTopbar');
        const spacer = document.getElementById('fcHeaderSpacer');

        const SCROLL_THRESHOLD = 60;

        function syncSpacerHeight() {
            if (fixedWrap && spacer) {
                spacer.style.height = fixedWrap.offsetHeight + 'px';
            }
        }

        function handleScrollState() {
            const scrolled = window.scrollY > SCROLL_THRESHOLD;
            header && header.classList.toggle('scrolled', scrolled);
            topbar && topbar.classList.toggle('fc-hide', scrolled);
        }

        // Initial sync
        handleScrollState();
        syncSpacerHeight();

        window.addEventListener('scroll', () => {
            handleScrollState();
        }, {
            passive: true
        });

        // Topbar height change is animated (max-height transition) — resync the
        // spacer once that transition finishes so content settles smoothly.
        topbar && topbar.addEventListener('transitionend', syncSpacerHeight);

        // Keep spacer accurate on resize (e.g. nav wrapping, orientation change)
        window.addEventListener('resize', syncSpacerHeight, {
            passive: true
        });

        /* ── Login panel toggle ── */
        const signInBtn = document.getElementById('fcSignInBtn');
        const loginPanel = document.getElementById('fcLoginPanel');
        const loginClose = document.getElementById('fcLoginClose');

        if (signInBtn && loginPanel) {
            signInBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                loginPanel.classList.toggle('open');
            });

            loginClose && loginClose.addEventListener('click', () => {
                loginPanel.classList.remove('open');
            });

            document.addEventListener('click', (e) => {
                if (loginPanel.classList.contains('open') &&
                    !loginPanel.contains(e.target) &&
                    e.target !== signInBtn) {
                    loginPanel.classList.remove('open');
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') loginPanel.classList.remove('open');
            });
        }

        /* ── Search overlay ── */
        const searchBtn = document.getElementById('fcSearchBtn');
        const searchOverlay = document.getElementById('fcSearchOverlay');
        const searchClose = document.getElementById('fcSearchClose');

        searchBtn && searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('open');
            setTimeout(() => searchOverlay.querySelector('input').focus(), 100);
        });

        searchClose && searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('open');
        });

        searchOverlay && searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) searchOverlay.classList.remove('open');
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') searchOverlay && searchOverlay.classList.remove('open');
        });

        /* ── Mobile drawer ── */
        const hamburger = document.getElementById('fcHamburger');
        const drawer = document.getElementById('fcDrawer');
        const drawerBg = document.getElementById('fcDrawerBg');
        const drawerClose = document.getElementById('fcDrawerClose');

        function openDrawer() {
            drawer.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeDrawer() {
            drawer.classList.remove('open');
            document.body.style.overflow = '';
        }

        hamburger && hamburger.addEventListener('click', openDrawer);
        drawerClose && drawerClose.addEventListener('click', closeDrawer);
        drawerBg && drawerBg.addEventListener('click', closeDrawer);

        /* ── Mobile drawer sub-menus ── */
        window.toggleDrawerSub = function(el) {
            const sub = el.nextElementSibling;
            if (sub && sub.classList.contains('fc-drawer-sub')) {
                sub.classList.toggle('open');
                el.classList.toggle('sub-open', sub.classList.contains('open'));
            }
        };

        /* ── Mobile login (opens login panel from drawer) ── */
        window.openMobileLogin = function() {
            closeDrawer();
            if (loginPanel) {
                setTimeout(() => loginPanel.classList.add('open'), 350);
                document.getElementById('fcSignInBtn') && document.getElementById('fcSignInBtn').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        };

    })();
</script>