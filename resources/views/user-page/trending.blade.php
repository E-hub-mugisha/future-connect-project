@extends('layouts.guest')

@section('title', 'Trending Now | FutureConnect')

@section('content')
<div class="tr-page">

    {{-- ============ HERO + LIVE TICKER ============ --}}
    <header class="tr-hero">
        <div class="tr-hero__inner">
            <span class="tr-eyebrow"><span class="tr-dot"></span> Updated live</span>
            <h1 class="tr-title">What's moving on FutureConnect</h1>
            <p class="tr-subtitle">The skills, gigs, and talent gaining momentum across Rwanda's marketplace right now.</p>
        </div>

        <div class="tr-ticker" aria-label="Trending skills ticker">
            <div class="tr-ticker__track">
                @foreach ($tickerItems->concat($tickerItems) as $item)
                    <span class="tr-ticker__item">
                        {{ $item->name ?? 'Skill' }}
                        <em class="{{ ($item->trend_up ?? true) ? 'is-up' : 'is-down' }}">
                            {{ ($item->trend_up ?? true) ? '▲' : '▼' }} {{ abs($item->trend_delta ?? 0) }}%
                        </em>
                    </span>
                @endforeach
                @if ($tickerItems->isEmpty())
                    <span class="tr-ticker__item">Trending data will appear here once activity picks up</span>
                @endif
            </div>
        </div>
    </header>

    {{-- ============ FILTER TABS ============ --}}
    <nav class="tr-tabs" id="trTabs">
        <button class="tr-tab is-active" data-filter="all">
            All <span>{{ $counts['all'] }}</span>
        </button>
        <button class="tr-tab" data-filter="skills">
            Skills <span>{{ $counts['skills'] }}</span>
        </button>
        <button class="tr-tab" data-filter="categories">
            Categories <span>{{ $counts['categories'] }}</span>
        </button>
        <button class="tr-tab" data-filter="projects">
            Projects <span>{{ $counts['projects'] }}</span>
        </button>
        <button class="tr-tab" data-filter="products">
            Products <span>{{ $counts['products'] }}</span>
        </button>
        <button class="tr-tab" data-filter="talent">
            Talent <span>{{ $counts['talent'] }}</span>
        </button>
        <span class="tr-tab__indicator" id="trTabIndicator"></span>
    </nav>

    {{-- ============ TRENDING SKILLS ============ --}}
    <section class="tr-section" data-section="skills">
        <div class="tr-section__head">
            <h2>Trending skills</h2>
            <p>What clients are hiring for this month</p>
        </div>

        @if ($trendingSkills->isEmpty())
            <div class="tr-empty">No trending skills yet — check back soon.</div>
        @else
            <div class="tr-grid tr-grid--skills">
                @foreach ($trendingSkills as $skill)
                    <a href="{{ route('skills.show', $skill->slug ?? $skill->id) ?? '#' }}" class="tr-card tr-card--skill">
                        <span class="tr-rank">#{{ $skill->trend_rank }}</span>
                        <span class="tr-card__name">{{ $skill->name }}</span>
                        <span class="tr-delta {{ $skill->trend_up ? 'is-up' : 'is-down' }}">
                            {{ $skill->trend_up ? '▲' : '▼' }} {{ abs($skill->trend_delta) }}%
                        </span>
                        <span class="tr-card__meta">{{ $skill->talents_count ?? 0 }} talents offer this</span>
                    </a>
                @endforeach
            </div>
        @endif
    </section>

    {{-- ============ TRENDING CATEGORIES ============ --}}
    <section class="tr-section" data-section="categories">
        <div class="tr-section__head">
            <h2>Trending categories</h2>
            <p>Where the most new work is landing</p>
        </div>

        @if ($trendingCategories->isEmpty())
            <div class="tr-empty">No trending categories yet — check back soon.</div>
        @else
            <div class="tr-grid tr-grid--categories">
                @foreach ($trendingCategories as $category)
                    <a href="{{ route('categories.show', $category->slug ?? $category->id) ?? '#' }}" class="tr-card tr-card--category">
                        <span class="tr-icon-tile">{{ mb_substr($category->name ?? 'C', 0, 1) }}</span>
                        <span class="tr-card__name">{{ $category->name }}</span>
                        <span class="tr-card__meta">{{ $category->projects_count ?? 0 }} active projects</span>
                        <span class="tr-delta {{ $category->trend_up ? 'is-up' : 'is-down' }}">
                            {{ $category->trend_up ? '▲' : '▼' }} {{ abs($category->trend_delta) }}%
                        </span>
                    </a>
                @endforeach
            </div>
        @endif
    </section>

    {{-- ============ TRENDING PROJECTS ============ --}}
    <section class="tr-section" data-section="projects">
        <div class="tr-section__head">
            <h2>Trending projects</h2>
            <p>Fresh gigs drawing the most proposals</p>
        </div>

        @if ($trendingProjects->isEmpty())
            <div class="tr-empty">No trending projects yet — check back soon.</div>
        @else
            <div class="tr-grid tr-grid--projects">
                @foreach ($trendingProjects as $project)
                    <a href="{{ route('projects.show', $project->slug ?? $project->id) ?? '#' }}" class="tr-card tr-card--project">
                        <div class="tr-card__top">
                            <span class="tr-badge">{{ $project->category->name ?? 'General' }}</span>
                            <span class="tr-delta {{ $project->trend_up ? 'is-up' : 'is-down' }}">
                                {{ $project->trend_up ? '▲' : '▼' }} {{ abs($project->trend_delta) }}%
                            </span>
                        </div>
                        <h3 class="tr-card__title">{{ $project->title }}</h3>
                        <p class="tr-card__desc">{{ Str::limit($project->description ?? '', 90) }}</p>
                        <div class="tr-card__foot">
                            <span>RWF {{ number_format($project->budget_min ?? 0) }}–{{ number_format($project->budget_max ?? 0) }}</span>
                            <span>{{ $project->proposals_count ?? 0 }} proposals</span>
                        </div>
                    </a>
                @endforeach
            </div>
        @endif
    </section>

    {{-- ============ TRENDING PRODUCTS ============ --}}
    <section class="tr-section" data-section="products">
        <div class="tr-section__head">
            <h2>Trending products</h2>
            <p>Digital products and services selling fastest</p>
        </div>

        @if ($trendingProducts->isEmpty())
            <div class="tr-empty">No trending products yet — check back soon.</div>
        @else
            <div class="tr-grid tr-grid--products">
                @foreach ($trendingProducts as $product)
                    <a href="{{ route('products.show', $product->slug ?? $product->id) ?? '#' }}" class="tr-card tr-card--product">
                        <div class="tr-card__top">
                            <span class="tr-badge">{{ $product->seller->name ?? 'FutureConnect seller' }}</span>
                            <span class="tr-delta {{ $product->trend_up ? 'is-up' : 'is-down' }}">
                                {{ $product->trend_up ? '▲' : '▼' }} {{ abs($product->trend_delta) }}%
                            </span>
                        </div>
                        <h3 class="tr-card__title">{{ $product->title }}</h3>
                        <div class="tr-card__foot">
                            <span>RWF {{ number_format($product->price ?? 0) }}</span>
                            <span>★ {{ number_format($product->rating ?? 0, 1) }} · {{ $product->sales_count ?? 0 }} sold</span>
                        </div>
                    </a>
                @endforeach
            </div>
        @endif
    </section>

    {{-- ============ TRENDING TALENT ============ --}}
    <section class="tr-section" data-section="talent">
        <div class="tr-section__head">
            <h2>Trending talent</h2>
            <p>Professionals getting hired the most this month</p>
        </div>

        @if ($trendingTalent->isEmpty())
            <div class="tr-empty">No trending talent yet — check back soon.</div>
        @else
            <div class="tr-grid tr-grid--talent">
                @foreach ($trendingTalent as $talent)
                    <a href="{{ route('talent.show', $talent->slug ?? $talent->id) ?? '#' }}" class="tr-card tr-card--talent">
                        <div class="tr-avatar">{{ mb_substr($talent->name ?? 'T', 0, 1) }}</div>
                        <h3 class="tr-card__title">{{ $talent->name }}</h3>
                        <p class="tr-card__desc">{{ $talent->topSkill->name ?? $talent->title ?? 'Freelance professional' }}</p>
                        <div class="tr-card__foot">
                            <span>★ {{ number_format($talent->rating ?? 0, 1) }}</span>
                            <span>{{ $talent->hires_count ?? 0 }} hires</span>
                        </div>
                        <span class="tr-delta tr-delta--floating {{ $talent->trend_up ? 'is-up' : 'is-down' }}">
                            {{ $talent->trend_up ? '▲' : '▼' }} {{ abs($talent->trend_delta) }}%
                        </span>
                    </a>
                @endforeach
            </div>
        @endif
    </section>

</div>

<style>
    :root {
        --tr-bg: #0e1618;
        --tr-bg-elevated: #131f22;
        --tr-bg-elevated-2: #1a292c;
        --tr-accent: #48d597;
        --tr-accent-dim: #2f8f68;
        --tr-accent-glow: rgba(72, 213, 151, .16);
        --tr-white: #F5f5f7;
        --tr-muted: #9fb3b0;
        --tr-border: rgba(255, 255, 255, .08);
        --tr-danger: #ef7b6a;
    }

    .tr-page {
        background: var(--tr-bg);
        color: var(--tr-white);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        padding: 0 0 80px;
    }

    /* ---------- HERO ---------- */
    .tr-hero {
        padding: 64px 24px 0;
        max-width: 1180px;
        margin: 0 auto;
    }

    .tr-hero__inner { max-width: 640px; }

    .tr-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .06em;
        text-transform: uppercase;
        color: var(--tr-accent);
        margin-bottom: 18px;
    }

    .tr-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--tr-accent);
        box-shadow: 0 0 0 4px var(--tr-accent-glow);
        animation: tr-pulse 1.8s ease-in-out infinite;
    }

    @keyframes tr-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: .35; }
    }

    .tr-title {
        font-family: 'Sora', 'Inter', sans-serif;
        font-size: clamp(32px, 4.5vw, 48px);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: -.02em;
        margin: 0 0 14px;
    }

    .tr-subtitle {
        color: var(--tr-muted);
        font-size: 16px;
        line-height: 1.6;
        margin: 0 0 40px;
    }

    /* ---------- TICKER (signature element) ---------- */
    .tr-ticker {
        border-top: 1px solid var(--tr-border);
        border-bottom: 1px solid var(--tr-border);
        overflow: hidden;
        background: linear-gradient(90deg, var(--tr-bg) 0%, transparent 4%, transparent 96%, var(--tr-bg) 100%), var(--tr-bg-elevated);
        margin: 0 -24px;
        padding: 0 24px;
    }

    .tr-ticker__track {
        display: flex;
        width: max-content;
        animation: tr-scroll 32s linear infinite;
    }

    .tr-ticker:hover .tr-ticker__track { animation-play-state: paused; }

    @keyframes tr-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
    }

    .tr-ticker__item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px 28px;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        border-right: 1px solid var(--tr-border);
    }

    .tr-ticker__item em { font-style: normal; font-weight: 700; font-size: 12.5px; }
    .tr-ticker__item .is-up { color: var(--tr-accent); }
    .tr-ticker__item .is-down { color: var(--tr-danger); }

    /* ---------- TABS ---------- */
    .tr-tabs {
        position: sticky;
        top: 0;
        z-index: 20;
        display: flex;
        gap: 4px;
        max-width: 1180px;
        margin: 32px auto 0;
        padding: 6px;
        background: rgba(19, 31, 34, .92);
        backdrop-filter: blur(10px);
        border: 1px solid var(--tr-border);
        border-radius: 14px;
        overflow-x: auto;
        scrollbar-width: none;
    }

    .tr-tabs::-webkit-scrollbar { display: none; }

    .tr-tab {
        position: relative;
        z-index: 1;
        flex: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        background: transparent;
        border: none;
        border-radius: 10px;
        color: var(--tr-muted);
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: color .2s ease;
    }

    .tr-tab span {
        font-size: 12px;
        font-weight: 700;
        color: var(--tr-muted);
        background: rgba(255, 255, 255, .06);
        border-radius: 999px;
        padding: 1px 8px;
    }

    .tr-tab.is-active { color: var(--tr-bg); }
    .tr-tab.is-active span { background: rgba(14, 22, 24, .18); color: var(--tr-bg); }

    .tr-tab__indicator {
        position: absolute;
        top: 6px;
        left: 6px;
        height: calc(100% - 12px);
        background: var(--tr-accent);
        border-radius: 10px;
        transition: transform .28s cubic-bezier(.4, 0, .2, 1), width .28s cubic-bezier(.4, 0, .2, 1);
        z-index: 0;
    }

    /* ---------- SECTIONS ---------- */
    .tr-section {
        max-width: 1180px;
        margin: 0 auto;
        padding: 56px 24px 0;
        scroll-margin-top: 90px;
    }

    .tr-section__head { margin-bottom: 24px; }

    .tr-section__head h2 {
        font-family: 'Sora', 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 700;
        margin: 0 0 4px;
    }

    .tr-section__head p {
        color: var(--tr-muted);
        font-size: 14.5px;
        margin: 0;
    }

    .tr-empty {
        border: 1px dashed var(--tr-border);
        border-radius: 14px;
        padding: 32px;
        text-align: center;
        color: var(--tr-muted);
        font-size: 14px;
    }

    /* ---------- CARDS (shared) ---------- */
    .tr-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: var(--tr-bg-elevated);
        border: 1px solid var(--tr-border);
        border-radius: 16px;
        padding: 20px;
        text-decoration: none;
        color: var(--tr-white);
        transition: border-color .2s ease, transform .2s ease, background .2s ease;
    }

    .tr-card:hover {
        border-color: var(--tr-accent-dim);
        background: var(--tr-bg-elevated-2);
        transform: translateY(-3px);
    }

    .tr-delta {
        font-size: 12.5px;
        font-weight: 700;
        padding: 3px 9px;
        border-radius: 999px;
        width: fit-content;
    }

    .tr-delta.is-up { color: var(--tr-accent); background: rgba(72, 213, 151, .12); }
    .tr-delta.is-down { color: var(--tr-danger); background: rgba(239, 123, 106, .12); }

    .tr-delta--floating { position: absolute; top: 18px; right: 18px; }

    /* Grids */
    .tr-grid { display: grid; gap: 16px; }
    .tr-grid--skills { grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); }
    .tr-grid--categories { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
    .tr-grid--projects,
    .tr-grid--products { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
    .tr-grid--talent { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }

    /* Skill card */
    .tr-card--skill { gap: 8px; }
    .tr-rank {
        font-size: 12px;
        font-weight: 700;
        color: var(--tr-muted);
        letter-spacing: .04em;
    }
    .tr-card__name { font-size: 17px; font-weight: 700; }
    .tr-card__meta { font-size: 12.5px; color: var(--tr-muted); margin-top: auto; }

    /* Category card */
    .tr-card--category { gap: 10px; align-items: flex-start; }
    .tr-icon-tile {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--tr-accent-glow);
        color: var(--tr-accent);
        font-family: 'Sora', sans-serif;
        font-weight: 700;
        font-size: 18px;
    }

    /* Project / product card */
    .tr-card__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .tr-badge {
        font-size: 11.5px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .04em;
        color: var(--tr-muted);
        border: 1px solid var(--tr-border);
        border-radius: 999px;
        padding: 3px 10px;
    }
    .tr-card__title { font-size: 17px; font-weight: 700; margin: 0 0 8px; line-height: 1.35; }
    .tr-card__desc { font-size: 13.5px; color: var(--tr-muted); line-height: 1.55; margin: 0 0 16px; }
    .tr-card__foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
        padding-top: 14px;
        border-top: 1px solid var(--tr-border);
        font-size: 13px;
        color: var(--tr-muted);
        font-weight: 600;
    }
    .tr-card__foot span:first-child { color: var(--tr-accent); }

    /* Talent card */
    .tr-card--talent { align-items: flex-start; padding-top: 24px; }
    .tr-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--tr-accent);
        color: var(--tr-bg);
        font-family: 'Sora', sans-serif;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 14px;
    }

    @media (max-width: 640px) {
        .tr-hero { padding-top: 40px; }
        .tr-section { padding-top: 40px; }
        .tr-tabs { top: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
        .tr-ticker__track { animation: none; }
        .tr-dot { animation: none; }
    }
</style>
@endsection

@push('scripts')
<script>
    (function () {
        const tabs = document.querySelectorAll('#trTabs .tr-tab');
        const indicator = document.getElementById('trTabIndicator');
        const sections = document.querySelectorAll('.tr-section');

        function moveIndicator(tab) {
            indicator.style.width = tab.offsetWidth + 'px';
            indicator.style.transform = `translateX(${tab.offsetLeft - 6}px)`;
        }

        function setActive(tab) {
            tabs.forEach(t => t.classList.remove('is-active'));
            tab.classList.add('is-active');
            moveIndicator(tab);

            const filter = tab.dataset.filter;
            sections.forEach(section => {
                const match = filter === 'all' || section.dataset.section === filter;
                section.style.display = match ? '' : 'none';
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => setActive(tab));
        });

        // Initialize indicator position once layout is ready
        window.addEventListener('load', () => {
            const active = document.querySelector('#trTabs .tr-tab.is-active');
            if (active) moveIndicator(active);
        });

        window.addEventListener('resize', () => {
            const active = document.querySelector('#trTabs .tr-tab.is-active');
            if (active) moveIndicator(active);
        });
    })();
</script>
@endpush
