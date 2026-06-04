@extends('layouts.guest')
@section('title', 'Stay Updated with Future Connect - Latest Announcements and News')
@section('content')

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

    :root {
        --bg: #0e1618;
        --bg-card: #121d1f;
        --bg-raised: #172224;
        --accent: #00a667;
        --accent-dim: rgba(0, 166, 103, .13);
        --accent-glow: rgba(0, 166, 103, .3);
        --border: rgba(255, 255, 255, .07);
        --text: #f0f4f3;
        --muted: #7a9490;
        --white: #ffffff;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--bg);
        color: var(--text);
        font-family: 'DM Sans', sans-serif;
    }

    /* ── HERO ── */
    .ann-hero {
        position: relative;
        overflow: hidden;
        padding: 5rem 0 4rem;
        background: var(--bg);
    }

    .ann-hero-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        background:
            radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0, 166, 103, .1) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 10% 20%, rgba(0, 166, 103, .06) 0%, transparent 60%);
    }

    .ann-hero-grid {
        position: absolute;
        inset: 0;
        z-index: 0;
        background-image:
            linear-gradient(rgba(0, 166, 103, .03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 166, 103, .03) 1px, transparent 1px);
        background-size: 44px 44px;
    }

    .ann-hero-inner {
        position: relative;
        z-index: 2;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .ann-hero-content {
        flex: 1;
    }

    .ann-hero-tag {
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        background: var(--accent-dim);
        border: 1px solid rgba(0, 166, 103, .3);
        color: var(--accent);
        font-family: 'Syne', sans-serif;
        font-size: .72rem;
        font-weight: 700;
        letter-spacing: .1em;
        text-transform: uppercase;
        padding: .35rem .9rem;
        border-radius: 50px;
        margin-bottom: 1.5rem;
    }

    .ann-hero-content h1 {
        font-family: 'Syne', sans-serif;
        font-size: clamp(2rem, 4vw, 3.2rem);
        font-weight: 800;
        line-height: 1.15;
        color: var(--white);
        margin-bottom: 1rem;
    }

    .ann-hero-content h1 em {
        font-style: normal;
        color: var(--accent);
    }

    .ann-hero-content p {
        color: var(--muted);
        font-size: 1rem;
        line-height: 1.75;
        max-width: 460px;
        margin-bottom: 2rem;
    }

    .btn-hero {
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        background: var(--accent);
        color: var(--white);
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: .9rem;
        padding: .8rem 1.75rem;
        border-radius: 10px;
        text-decoration: none;
        border: none;
        box-shadow: 0 0 28px var(--accent-glow);
        transition: all .25s;
        cursor: pointer;
    }

    .btn-hero:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 40px var(--accent-glow);
        color: var(--white);
    }

    .ann-hero-visual {
        flex: 0 0 420px;
    }

    .ann-hero-visual img {
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
        max-height: 320px;
        opacity: .85;
        box-shadow: 0 24px 60px rgba(0, 0, 0, .5);
    }

    /* ── STATS BAR ── */
    .stats-bar {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2rem 2.5rem;
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .stat-pill {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: .75rem 1.5rem;
        display: flex;
        align-items: center;
        gap: .75rem;
    }

    .stat-pill i {
        color: var(--accent);
        font-size: 1rem;
    }

    .stat-pill-text strong {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        color: var(--white);
        display: block;
        font-size: 1rem;
    }

    .stat-pill-text span {
        font-size: .75rem;
        color: var(--muted);
    }

    /* ── SECTION ── */
    .ann-section {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2rem 4rem;
    }

    .ann-section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    .ann-section-title {
        font-family: 'Syne', sans-serif;
        font-size: 1.3rem;
        font-weight: 800;
        color: var(--white);
    }

    .ann-section-title span {
        color: var(--accent);
    }

    /* ── CARDS GRID ── */
    .ann-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 1.5rem;
    }

    .ann-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 18px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: all .3s ease;
        position: relative;
    }

    .ann-card:hover {
        border-color: rgba(0, 166, 103, .35);
        transform: translateY(-5px);
        box-shadow: 0 24px 56px rgba(0, 0, 0, .4), 0 0 0 1px rgba(0, 166, 103, .08);
    }

    .ann-card-accent-line {
        height: 3px;
        background: linear-gradient(90deg, var(--accent), transparent);
    }

    .ann-card-body {
        padding: 1.75rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .ann-card-icon-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
    }

    .ann-icon-bubble {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: var(--accent-dim);
        border: 1px solid rgba(0, 166, 103, .25);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        font-size: 1.1rem;
    }

    .ann-date-badge {
        font-size: .72rem;
        color: var(--muted);
        font-weight: 500;
        background: var(--bg-raised);
        border: 1px solid var(--border);
        padding: .25rem .75rem;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: .35rem;
    }

    .ann-date-badge i {
        font-size: .65rem;
    }

    .ann-card-title {
        font-family: 'Syne', sans-serif;
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--white);
        line-height: 1.4;
        margin-bottom: .75rem;
    }

    .ann-card-excerpt {
        color: var(--muted);
        font-size: .88rem;
        line-height: 1.7;
        flex: 1;
        margin-bottom: 1.5rem;
    }

    .ann-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 1rem;
        border-top: 1px solid var(--border);
    }

    .ann-author {
        display: flex;
        align-items: center;
        gap: .6rem;
    }

    .ann-author img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid rgba(0, 166, 103, .25);
    }

    .ann-author-info strong {
        font-size: .8rem;
        color: var(--text);
        display: block;
        font-weight: 600;
    }

    .ann-author-info span {
        font-size: .72rem;
        color: var(--muted);
    }

    .btn-read-more {
        display: inline-flex;
        align-items: center;
        gap: .35rem;
        background: var(--accent-dim);
        border: 1px solid rgba(0, 166, 103, .3);
        color: var(--accent);
        font-size: .8rem;
        font-weight: 700;
        padding: .45rem 1rem;
        border-radius: 8px;
        text-decoration: none;
        font-family: 'Syne', sans-serif;
        transition: all .2s;
    }

    .btn-read-more:hover {
        background: var(--accent);
        color: var(--white);
    }

    /* ── EMPTY STATE ── */
    .empty-state {
        text-align: center;
        padding: 5rem 2rem;
    }

    .empty-state i {
        font-size: 3rem;
        color: var(--muted);
        margin-bottom: 1rem;
    }

    .empty-state h4 {
        font-family: 'Syne', sans-serif;
        color: var(--white);
        margin-bottom: .5rem;
    }

    .empty-state p {
        color: var(--muted);
        font-size: .9rem;
    }

    @media (max-width: 768px) {
        .ann-hero-inner {
            flex-direction: column;
        }

        .ann-hero-visual {
            display: none;
        }

        .ann-grid {
            grid-template-columns: 1fr;
        }

        .stats-bar {
            flex-direction: column;
        }
    }
</style>

<!-- HERO -->
<section class="ann-hero">
    <div class="ann-hero-bg"></div>
    <div class="ann-hero-grid"></div>
    <div class="ann-hero-inner">
        <div class="ann-hero-content">
            <div class="ann-hero-tag">
                <i class="ti ti-bell"></i> Live Updates
            </div>
            <h1>Stay in the loop with<br><em>Future Connect</em></h1>
            <p>Discover the latest news, platform updates, upcoming events, and important announcements — all in one place.</p>
            <a href="#announcements" class="btn-hero">
                Explore Announcements <i class="feather-arrow-down"></i>
            </a>
        </div>
        <div class="ann-hero-visual">
            <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" alt="Updates">
        </div>
    </div>
</section>

<!-- STATS -->
<div class="stats-bar">
    <div class="stat-pill">
        <i class="ti ti-bell"></i>
        <div class="stat-pill-text">
            <strong>{{ $announcements->count() }}</strong>
            <span>Announcements</span>
        </div>
    </div>
    <div class="stat-pill">
        <i class="ti ti-refresh"></i>
        <div class="stat-pill-text">
            <strong>Weekly</strong>
            <span>Update Frequency</span>
        </div>
    </div>
    <div class="stat-pill">
        <i class="ti ti-speakerphone"></i>
        <div class="stat-pill-text">
            <strong>Product Team</strong>
            <span>Official Source</span>
        </div>
    </div>
</div>

<!-- ANNOUNCEMENTS GRID -->
<section class="ann-section" id="announcements">
    <div class="ann-section-header">
        <h2 class="ann-section-title">Latest <span>Announcements</span></h2>
    </div>

    @if($announcements->count())
    <div class="ann-grid">
        @foreach($announcements as $ann)
        <div class="ann-card">
            <div class="ann-card-accent-line"></div>
            <div class="ann-card-body">
                <div class="ann-card-icon-row">
                    <div class="ann-icon-bubble">
                        <i class="ti ti-bell"></i>
                    </div>
                    <div class="ann-date-badge">
                        <i class="ti ti-clock"></i>
                        {{ \Carbon\Carbon::parse($ann->created_at)->diffForHumans() }}
                    </div>
                </div>

                <h3 class="ann-card-title">{{ $ann->title }}</h3>
                <p class="ann-card-excerpt">
                    {{ \Illuminate\Support\Str::limit($ann->content, 110, '…') }}
                </p>

                <div class="ann-card-footer">
                    <div class="ann-author">
                        <img src="{{ asset('assets/img/user/admin.jpg') }}" alt="Product Team">
                        <div class="ann-author-info">
                            <strong>Product Team</strong>
                            <span>Official</span>
                        </div>
                    </div>
                    <a href="{{ route('user.announcement.details', $ann->id) }}" class="btn-read-more">
                        Read More <i class="feather-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    @else
    <div class="empty-state">
        <i class="ti ti-bell-off"></i>
        <h4>No announcements yet</h4>
        <p>Check back soon for the latest updates from the Product Team.</p>
    </div>
    @endif
</section>

@endsection