@extends('layouts.guest')
@section('title', 'Ongoing Projects')
@section('content')

<style>
    :root {
        --fc-bg: #0e1618;
        --fc-bg-alt: #141d20;
        --fc-card: #172124;
        --fc-border: #243033;
        --fc-accent: #48d597;
        --fc-accent-dark: #33a876;
        --fc-white: #ffffff;
        --fc-muted: #9fb0ae;
    }

    .fc-page {
        background: var(--fc-bg);
        color: var(--fc-white);
    }

    /* ---- Hero ---- */
    .fc-hero {
        /* background:
            radial-gradient(circle at 15% 20%, rgba(72,213,151,.12), transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(72,213,151,.08), transparent 50%),
            var(--fc-bg); */
        border-bottom: 1px solid var(--fc-border);
        padding: 70px 0 60px;
    }

    .fc-hero h1 {
        font-weight: 700;
        font-size: 2.4rem;
        color: var(--fc-white);
        letter-spacing: -.5px;
    }

    .fc-hero h1 span {
        color: var(--fc-accent);
    }

    .fc-hero p.lead-text {
        color: var(--fc-muted);
        font-size: 1.05rem;
        max-width: 520px;
    }

    .fc-search-card {
        background: var(--fc-card);
        border: 1px solid var(--fc-border);
        border-radius: 18px;
        padding: 22px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
    }

    .fc-search-card label {
        color: var(--fc-muted);
        font-size: .78rem;
        text-transform: uppercase;
        letter-spacing: .05em;
        margin-bottom: 6px;
        display: block;
        font-weight: 600;
    }

    .fc-search-card .form-control,
    .fc-search-card .form-select {
        background: var(--fc-bg-alt);
        border: 1px solid var(--fc-border);
        color: var(--fc-white);
        border-radius: 10px;
        padding: .65rem .9rem;
    }

    .fc-search-card .form-control::placeholder {
        color: #5f7370;
    }

    .fc-search-card .form-control:focus,
    .fc-search-card .form-select:focus {
        background: var(--fc-bg-alt);
        border-color: var(--fc-accent);
        color: var(--fc-white);
        box-shadow: 0 0 0 3px rgba(72, 213, 151, .15);
    }

    .fc-input-block {
        margin-bottom: 16px;
    }

    .fc-input-locaion {
        position: relative;
    }

    .fc-input-locaion img {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        opacity: .7;
    }

    .btn-fc-primary {
        background: var(--fc-accent);
        border: none;
        color: #06231a;
        font-weight: 700;
        border-radius: 10px;
        padding: .7rem 1.6rem;
        transition: .2s ease;
    }

    .btn-fc-primary:hover {
        background: var(--fc-accent-dark);
        color: #06231a;
        transform: translateY(-1px);
    }

    .fc-popular-search {
        margin-top: 20px;
    }

    .fc-popular-search h5 {
        color: var(--fc-muted);
        font-size: .85rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .fc-popular-search ul {
        list-style: none;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
    }

    .fc-popular-search a {
        display: inline-block;
        padding: 6px 14px;
        border: 1px solid var(--fc-border);
        border-radius: 30px;
        color: var(--fc-white);
        font-size: .85rem;
        text-decoration: none;
        transition: .2s;
    }

    .fc-popular-search a:hover {
        border-color: var(--fc-accent);
        color: var(--fc-accent);
    }

    /* ---- Categories ---- */
    .fc-categories {
        background: var(--fc-bg-alt);
        padding: 60px 0;
        border-bottom: 1px solid var(--fc-border);
    }

    .fc-section-header {
        text-align: center;
        margin-bottom: 40px;
    }

    .fc-section-header h2 {
        font-weight: 700;
        font-size: 1.9rem;
        color: var(--fc-white);
        margin-bottom: 8px;
    }

    .fc-section-header h2 .accent-dot {
        color: var(--fc-accent);
    }

    .fc-section-header p {
        color: var(--fc-muted);
    }

    .fc-cat-card {
        background: var(--fc-card);
        border: 1px solid var(--fc-border);
        border-radius: 16px;
        padding: 26px 16px;
        text-align: center;
        transition: .25s ease;
        height: 100%;
    }

    .fc-cat-card:hover {
        border-color: var(--fc-accent);
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(72, 213, 151, .12);
    }

    .fc-cat-card .fc-icon {
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 14px;
        border-radius: 50%;
        background: rgba(72, 213, 151, .12);
        color: var(--fc-accent);
        font-size: 1.3rem;
    }

    .fc-cat-card h6 a {
        color: var(--fc-white);
        text-decoration: none;
        font-weight: 600;
    }

    .fc-cat-card h6 a:hover {
        color: var(--fc-accent);
    }

    .fc-cat-card p {
        color: var(--fc-muted);
        font-size: .85rem;
        margin: 6px 0 0;
    }

    /* ---- Project cards ---- */
    .fc-projects {
        padding: 70px 0;
    }

    .fc-gig-card {
        background: var(--fc-card);
        border: 1px solid var(--fc-border);
        border-radius: 18px;
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
        transition: .25s ease;
    }

    .fc-gig-card:hover {
        border-color: var(--fc-accent);
        transform: translateY(-5px);
        box-shadow: 0 16px 32px rgba(0, 0, 0, .4);
    }

    .fc-gig-img {
        height: 120px;
        background:
            linear-gradient(135deg, rgba(72, 213, 151, .18), rgba(72, 213, 151, .03));
        position: relative;
    }

    .fc-badge-row {
        position: absolute;
        top: 12px;
        left: 12px;
        right: 12px;
        display: flex;
        justify-content: space-between;
        gap: 8px;
    }

    .fc-badge {
        font-size: .72rem;
        font-weight: 700;
        padding: 5px 10px;
        border-radius: 30px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .fc-badge-verified {
        background: rgba(72, 213, 151, .18);
        color: var(--fc-accent);
    }

    .fc-badge-status {
        background: rgba(255, 255, 255, .08);
        color: var(--fc-white);
    }

    .fc-gig-body {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .fc-gig-cat {
        display: inline-block;
        font-size: .72rem;
        font-weight: 700;
        color: var(--fc-accent);
        background: rgba(72, 213, 151, .1);
        padding: 4px 10px;
        border-radius: 20px;
        margin-bottom: 10px;
        width: fit-content;
    }

    .fc-gig-location {
        color: var(--fc-muted);
        font-size: .8rem;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .fc-gig-title {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 10px;
        line-height: 1.35;
    }

    .fc-gig-title a {
        color: var(--fc-white);
        text-decoration: none;
    }

    .fc-gig-title a:hover {
        color: var(--fc-accent);
    }

    .fc-gig-desc {
        color: var(--fc-muted);
        font-size: .88rem;
        margin-bottom: 18px;
        flex: 1;
    }

    .fc-gig-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 14px;
        border-top: 1px solid var(--fc-border);
    }

    .fc-gig-footer .badge {
        background: var(--fc-bg-alt);
        color: var(--fc-muted);
        border: 1px solid var(--fc-border);
        font-weight: 500;
        padding: 6px 12px;
    }

    .btn-fc-outline {
        border: 1px solid var(--fc-accent);
        color: var(--fc-accent);
        background: transparent;
        border-radius: 30px;
        padding: .4rem 1.1rem;
        font-size: .85rem;
        font-weight: 600;
        text-decoration: none;
        transition: .2s;
    }

    .btn-fc-outline:hover {
        background: var(--fc-accent);
        color: #06231a;
    }

    /* ---- CTA ---- */
    .fc-cta {
        background: var(--fc-card);
        border: 1px solid var(--fc-border);
        border-radius: 24px;
        padding: 50px;
        margin-bottom: 70px;
        position: relative;
        overflow: hidden;
    }

    .fc-cta::before {
        content: "";
        position: absolute;
        top: -60px;
        right: -60px;
        width: 220px;
        height: 220px;
        background: radial-gradient(circle, rgba(72, 213, 151, .18), transparent 70%);
    }

    .fc-cta h2 {
        font-weight: 700;
        color: var(--fc-white);
    }

    .fc-cta p {
        color: var(--fc-muted);
        max-width: 420px;
    }

    .fc-cta img {
        max-width: 100%;
    }

    /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
    [data-h-theme="light"] {
        --fc-bg: #f6faf8;
        --fc-bg-alt: #eef4f1;
        --fc-card: #ffffff;
        --fc-border: rgba(0, 100, 60, 0.12);
        --fc-accent: #00a667;
        --fc-accent-dark: #00c07a;
        --fc-white: #10201b;
        --fc-muted: #5b7a70;
    }

    /* Search card shadow was tuned for a dark surface — too heavy on white */
    [data-h-theme="light"] .fc-search-card {
        box-shadow: 0 10px 30px rgba(0, 0, 0, .08);
    }

    /* Placeholder color was a dark-theme-only hex */
    [data-h-theme="light"] .fc-search-card .form-control::placeholder {
        color: #a9c2b8;
    }

    /* Focus glow ring hardcoded to the dark-theme accent rgba */
    [data-h-theme="light"] .fc-search-card .form-control:focus,
    [data-h-theme="light"] .fc-search-card .form-select:focus {
        box-shadow: 0 0 0 3px rgba(0, 166, 103, .15);
    }

    /* Category icon circle background hardcoded rgba */
    [data-h-theme="light"] .fc-cat-card .fc-icon {
        background: rgba(0, 166, 103, .1);
    }

    /* Category card hover shadow hardcoded rgba tuned for dark bg */
    [data-h-theme="light"] .fc-cat-card:hover {
        box-shadow: 0 12px 24px rgba(0, 166, 103, .15);
    }

    /* Project thumbnail gradient hardcoded rgba */
    [data-h-theme="light"] .fc-gig-img {
        background: linear-gradient(135deg, rgba(0, 166, 103, .16), rgba(0, 166, 103, .03));
    }

    /* Verified badge background hardcoded rgba */
    [data-h-theme="light"] .fc-badge-verified {
        background: rgba(0, 166, 103, .14);
    }

    /* Status badge: was translucent white-on-dark, needs a translucent
       dark-on-light equivalent to stay legible */
    [data-h-theme="light"] .fc-badge-status {
        background: rgba(0, 100, 60, .08);
        color: var(--fc-white);
    }

    /* Card hover shadow was tuned for dark bg (heavy black shadow) */
    [data-h-theme="light"] .fc-gig-card:hover {
        box-shadow: 0 16px 32px rgba(0, 0, 0, .1);
    }

    /* Gig category chip background hardcoded rgba */
    [data-h-theme="light"] .fc-gig-cat {
        background: rgba(0, 166, 103, .08);
    }

    /* Primary button text color was a near-black tuned to sit on the dark-mode
       accent green; #06231a reads fine on the light-mode accent too, so this
       is left unchanged intentionally — no override needed */

    /* CTA glow hardcoded rgba */
    [data-h-theme="light"] .fc-cta::before {
        background: radial-gradient(circle, rgba(0, 166, 103, .14), transparent 70%);
    }
</style>

<div class="fc-page">

    <!-- Hero -->
    <section class="fc-hero">
        <div class="container p-4">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="banner-content">
                        <div class="mb-4">
                            <h1 class="mb-2">Get inspired with <span>projects</span> &amp; opportunities</h1>
                            <p class="lead-text">Discover the latest initiatives, programs, and collaborations that drive impact.</p>
                        </div>
                        <div class="fc-search-card">
                            <form action="#">
                                <div class="row">
                                    <div class="col-md-4 fc-input-block">
                                        <label>Category</label>
                                        <select class="form-select">
                                            <option>Select</option>
                                            <option>Digital Marketing</option>
                                            <option>Writing</option>
                                            <option>Social Media</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 fc-input-block">
                                        <label>Location</label>
                                        <div class="fc-input-locaion">
                                            <input type="text" class="form-control" placeholder="Miami, USA">
                                            <img src="{{ asset('assets/img/icons/map-pin-heart.svg') }}" alt="Icon">
                                        </div>
                                    </div>
                                    <div class="col-md-4 fc-input-block">
                                        <label>Keyword</label>
                                        <input type="text" class="form-control" placeholder="Need Graphic Designer">
                                    </div>
                                </div>
                                <button class="btn btn-fc-primary d-inline-flex align-items-center" type="submit">
                                    <i class="ti ti-search me-2"></i> Search
                                </button>
                            </form>
                        </div>
                        <div class="fc-popular-search">
                            <h5>Popular Searches</h5>
                            <ul>
                                <li><a href="service-grid-sidebar.html">Online Mockup</a></li>
                                <li><a href="service-grid-sidebar.html">Carpentering</a></li>
                                <li><a href="service-grid-sidebar.html">Event Organiser</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 d-none d-lg-block text-center">
                    <div class="fc-search-card" style="background:transparent;border:none;box-shadow:none;">
                        <i class="ti ti-bulb" style="font-size:8rem;color:var(--fc-accent);opacity:.25;"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories -->
    <div class="fc-categories">
        <div class="container">
            <div class="fc-section-header">
                <h2>Popular <span class="accent-dot">Categories</span></h2>
                <p>Unlock a world of opportunities and take control of your future</p>
            </div>
            <div class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                @foreach( $categories as $category )
                <div class="col d-flex">
                    <div class="fc-cat-card flex-fill">
                        <span class="fc-icon"><i class="ti ti-speakerphone"></i></span>
                        <h6 class="mb-1"><a href="javascript:void(0);">{{ $category->name }}</a></h6>
                        <p>{{ $category->projects_count ? $category->projects_count : 0 }} Projects</p>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- Projects -->
    <div class="fc-projects">
        <div class="container">
            <div class="fc-section-header">
                <h2>Our ongoing <span class="accent-dot">projects</span></h2>
                <p>Get inspired with projects like these</p>
            </div>
            <div class="row g-4">
                @foreach( $projects as $project )
                <div class="col-lg-4 col-md-6">
                    <div class="fc-gig-card">
                        <div class="fc-gig-img">
                            <div class="fc-badge-row">
                                <a href="{{ route('user.projects.show',$project->id) }}" class="text-decoration-none">
                                    <span class="fc-badge fc-badge-verified">
                                        <i class="feather-star"></i>{{ $project->verified ? 'Verified' : 'Pending' }}
                                    </span>
                                </a>
                                <a href="{{ route('user.projects.show',$project->id) }}" class="text-decoration-none">
                                    <span class="fc-badge fc-badge-status">
                                        <i class="fa-solid fa-meteor"></i>{{ $project->status ?? 'Open' }}
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="fc-gig-body">
                            <a href="{{ route('user.projects.show',$project->id) }}" class="fc-gig-cat">{{ $project->category ?? 'General' }}</a>
                            <div class="fc-gig-location">
                                <i class="ti ti-map-pin-check"></i>{{ $project->location ?? 'Remote' }}
                            </div>
                            <h3 class="fc-gig-title">
                                <a href="{{ route('user.projects.show',$project->id) }}">{{ $project->title }}</a>
                            </h3>
                            <p class="fc-gig-desc">{{ Str::limit($project->description, 120) }}</p>
                            <div class="fc-gig-footer">
                                <span class="badge">{{ $project->location ?? 'Remote' }}</span>
                                <a href="{{ route('user.projects.show',$project->id) }}" class="btn-fc-outline">View details</a>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- CTA -->
    <div class="container">
        <div class="fc-cta">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <img src="{{ asset('assets/img/home/jointeam.svg') }}" alt="img" class="d-none d-lg-block">
                </div>
                <div class="col-lg-5">
                    <h2 class="mb-3">Want to Get Involved?</h2>
                    <p>Explore more projects, collaborate with talented individuals, or submit your own initiatives to make a meaningful impact.</p>
                    <a href="#" class="btn btn-fc-primary">Submit a Project</a>
                </div>
            </div>
        </div>
    </div>

</div>
@endsection