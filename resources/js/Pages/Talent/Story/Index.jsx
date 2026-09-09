import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({
    talent,
    stories = [],
    message,
}) {
    const storyList = Array.isArray(stories)
        ? stories
        : talent?.stories ?? [];

    const hasStories = storyList.length > 0;

    const publishedStories = storyList.filter(
        (story) =>
            story.status === "published" ||
            story.status === "active"
    ).length;

    const totalComments = storyList.reduce(
        (total, story) =>
            total + (story.comments?.length || 0),
        0
    );

    return (
        <AppLayout>
            <Head title="My Story" />

            <div data-h-scope="talent-story">

                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

                    [data-h-scope="talent-story"] {
                        --story-primary: #48d597;
                        --story-primary-dark: #2fbc7e;
                        --story-primary-soft: rgba(72, 213, 151, .11);
                        --story-primary-ink: #0d3d2a;

                        --story-text: #151918;
                        --story-muted: #737d78;
                        --story-light: #969f9b;

                        --story-bg: #f5f7f6;
                        --story-card: #ffffff;
                        --story-border: #e5ebe8;

                        min-height: 100vh;
                        background: var(--story-bg);
                        color: var(--story-text);
                        font-family: 'Inter', sans-serif;
                    }

                    [data-h-scope="talent-story"] *,
                    [data-h-scope="talent-story"] *::before,
                    [data-h-scope="talent-story"] *::after {
                        box-sizing: border-box;
                    }

                    [data-h-scope="talent-story"] h1,
                    [data-h-scope="talent-story"] h2,
                    [data-h-scope="talent-story"] h3,
                    [data-h-scope="talent-story"] h4,
                    [data-h-scope="talent-story"] h5 {
                        font-family: 'Space Grotesk', sans-serif;
                    }

                    .story-container {
                        max-width: 1220px;
                        margin: 0 auto;
                        padding: 30px 24px 70px;
                    }

                    /* =====================================================
                       PAGE HEADER
                    ===================================================== */

                    .story-header {
                        position: relative;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 24px;
                        padding: 28px 30px;
                        margin-bottom: 22px;

                        background:
                            radial-gradient(
                                circle at 100% 0%,
                                rgba(72,213,151,.15),
                                transparent 28%
                            ),
                            linear-gradient(
                                135deg,
                                #ffffff 0%,
                                #f9fcfa 55%,
                                #eff9f4 100%
                            );

                        border: 1px solid #e2e9e5;
                        border-radius: 22px;
                        box-shadow: 0 10px 32px rgba(20,40,30,.045);
                    }

                    .story-header::after {
                        content: "";
                        position: absolute;
                        width: 190px;
                        height: 190px;
                        border-radius: 50%;
                        right: -80px;
                        bottom: -110px;
                        background: rgba(72,213,151,.08);
                    }

                    .story-header-content {
                        position: relative;
                        z-index: 2;
                    }

                    .story-eyebrow {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-bottom: 7px;
                        color: var(--story-primary-dark);
                        font-size: 10px;
                        font-weight: 800;
                        letter-spacing: .1em;
                        text-transform: uppercase;
                    }

                    .story-eyebrow i {
                        font-size: 10px;
                    }

                    .story-page-title {
                        margin: 0;
                        color: #18201c;
                        font-size: 28px;
                        font-weight: 800;
                        letter-spacing: -.03em;
                    }

                    .story-page-subtitle {
                        max-width: 650px;
                        margin: 7px 0 0;
                        color: var(--story-muted);
                        font-size: 12px;
                        line-height: 1.7;
                    }

                    .story-header-actions {
                        position: relative;
                        z-index: 2;
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        flex-shrink: 0;
                    }

                    .story-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        padding: 11px 16px;
                        border-radius: 10px;
                        border: 0;
                        font-size: 11px;
                        font-weight: 700;
                        text-decoration: none;
                        cursor: pointer;
                        transition: all .2s ease;
                    }

                    .story-btn-primary {
                        background: var(--story-primary);
                        color: var(--story-primary-ink);
                        box-shadow: 0 5px 15px rgba(72,213,151,.15);
                    }

                    .story-btn-primary:hover {
                        background: var(--story-primary-dark);
                        color: white;
                        transform: translateY(-1px);
                    }

                    .story-btn-secondary {
                        background: white;
                        color: #3a443f;
                        border: 1px solid #dfe6e2;
                    }

                    .story-btn-secondary:hover {
                        background: #f7faf8;
                        color: #1d2622;
                    }

                    /* =====================================================
                       STAT CARDS
                    ===================================================== */

                    .story-stats {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 15px;
                        margin-bottom: 22px;
                    }

                    .story-stat {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                        padding: 17px;
                        background: white;
                        border: 1px solid var(--story-border);
                        border-radius: 15px;
                    }

                    .story-stat-icon {
                        width: 40px;
                        height: 40px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--story-primary-soft);
                        color: var(--story-primary-dark);
                        font-size: 14px;
                    }

                    .story-stat-value {
                        color: #202824;
                        font-family: 'Space Grotesk', sans-serif;
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 1;
                    }

                    .story-stat-label {
                        margin-top: 4px;
                        color: #929a96;
                        font-size: 9px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: .05em;
                    }

                    /* =====================================================
                       EMPTY STATE
                    ===================================================== */

                    .story-empty {
                        position: relative;
                        overflow: hidden;
                        background: white;
                        border: 1px solid var(--story-border);
                        border-radius: 22px;
                        box-shadow: 0 10px 30px rgba(20,40,30,.035);
                    }

                    .story-empty-inner {
                        position: relative;
                        z-index: 2;
                        max-width: 720px;
                        margin: 0 auto;
                        padding: 65px 30px 70px;
                        text-align: center;
                    }

                    .story-empty-decoration {
                        position: absolute;
                        width: 230px;
                        height: 230px;
                        border-radius: 50%;
                        background: var(--story-primary-soft);
                    }

                    .story-empty-decoration.one {
                        top: -150px;
                        left: -100px;
                    }

                    .story-empty-decoration.two {
                        right: -120px;
                        bottom: -160px;
                        background: rgba(72,213,151,.07);
                    }

                    .story-icon {
                        width: 82px;
                        height: 82px;
                        margin: 0 auto 22px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 24px;
                        background: var(--story-primary-soft);
                        color: var(--story-primary-dark);
                        font-size: 29px;
                    }

                    .story-empty-title {
                        margin: 0 0 9px;
                        color: #1c2521;
                        font-size: 25px;
                        font-weight: 800;
                    }

                    .story-empty-text {
                        max-width: 570px;
                        margin: 0 auto 25px;
                        color: var(--story-muted);
                        font-size: 12px;
                        line-height: 1.8;
                    }

                    .story-empty-features {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 9px;
                        margin-bottom: 27px;
                    }

                    .story-feature {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 7px 10px;
                        border-radius: 999px;
                        background: #f6f9f7;
                        border: 1px solid #e8eeeb;
                        color: #68736e;
                        font-size: 9px;
                        font-weight: 700;
                    }

                    .story-feature i {
                        color: var(--story-primary-dark);
                    }

                    /* =====================================================
                       STORY LAYOUT
                    ===================================================== */

                    .story-layout {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 310px;
                        gap: 22px;
                        align-items: start;
                    }

                    .story-list {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }

                    .story-card {
                        overflow: hidden;
                        background: white;
                        border: 1px solid var(--story-border);
                        border-radius: 18px;
                        box-shadow: 0 6px 24px rgba(20,40,30,.025);
                    }

                    .story-card-media {
                        position: relative;
                        height: 260px;
                        overflow: hidden;
                        background: #edf2ef;
                    }

                    .story-card-media img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform .35s ease;
                    }

                    .story-card:hover .story-card-media img {
                        transform: scale(1.025);
                    }

                    .story-media-placeholder {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background:
                            linear-gradient(
                                135deg,
                                #eef8f3,
                                #f8faf9
                            );
                        color: #8b9691;
                        font-size: 30px;
                    }

                    .story-status {
                        position: absolute;
                        top: 15px;
                        left: 15px;
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 7px 10px;
                        border-radius: 999px;
                        background: rgba(255,255,255,.92);
                        color: #39433e;
                        font-size: 9px;
                        font-weight: 800;
                        box-shadow: 0 4px 15px rgba(0,0,0,.08);
                    }

                    .story-status.published {
                        color: #177249;
                    }

                    .story-status i {
                        font-size: 7px;
                    }

                    .story-card-body {
                        padding: 21px;
                    }

                    .story-card-meta {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 12px;
                        margin-bottom: 9px;
                    }

                    .story-category {
                        display: inline-flex;
                        align-items: center;
                        padding: 5px 9px;
                        border-radius: 7px;
                        background: var(--story-primary-soft);
                        color: var(--story-primary-ink);
                        font-size: 9px;
                        font-weight: 800;
                    }

                    .story-date {
                        color: #9ba39f;
                        font-size: 9px;
                    }

                    .story-title {
                        margin: 0 0 9px;
                        color: #1b2420;
                        font-size: 20px;
                        line-height: 1.25;
                        font-weight: 800;
                    }

                    .story-excerpt {
                        margin: 0;
                        color: #6f7974;
                        font-size: 11px;
                        line-height: 1.75;
                    }

                    .story-tags {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 6px;
                        margin-top: 16px;
                    }

                    .story-tag {
                        padding: 5px 8px;
                        border-radius: 6px;
                        background: #f5f7f6;
                        color: #737d78;
                        font-size: 9px;
                        font-weight: 600;
                    }

                    .story-card-footer {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 12px;
                        margin-top: 19px;
                        padding-top: 16px;
                        border-top: 1px solid #edf0ee;
                    }

                    .story-engagement {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                        color: #89928e;
                        font-size: 9px;
                        font-weight: 600;
                    }

                    .story-engagement span {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                    }

                    .story-card-actions {
                        display: flex;
                        align-items: center;
                        gap: 7px;
                    }

                    .story-small-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 7px 10px;
                        border-radius: 8px;
                        text-decoration: none;
                        font-size: 9px;
                        font-weight: 700;
                        transition: .2s;
                    }

                    .story-small-btn.view {
                        color: #59645f;
                        background: #f5f7f6;
                    }

                    .story-small-btn.view:hover {
                        background: #edf1ef;
                        color: #202824;
                    }

                    .story-small-btn.edit {
                        color: var(--story-primary-ink);
                        background: var(--story-primary-soft);
                    }

                    .story-small-btn.edit:hover {
                        background: rgba(72,213,151,.18);
                    }

                    /* =====================================================
                       SIDEBAR
                    ===================================================== */

                    .story-sidebar {
                        display: flex;
                        flex-direction: column;
                        gap: 18px;
                    }

                    .story-side-card {
                        background: white;
                        border: 1px solid var(--story-border);
                        border-radius: 16px;
                        overflow: hidden;
                    }

                    .story-side-header {
                        padding: 16px 18px;
                        border-bottom: 1px solid var(--story-border);
                    }

                    .story-side-title {
                        margin: 0;
                        color: #27302c;
                        font-size: 13px;
                        font-weight: 800;
                    }

                    .story-side-body {
                        padding: 18px;
                    }

                    .story-tips {
                        display: flex;
                        flex-direction: column;
                        gap: 14px;
                    }

                    .story-tip {
                        display: flex;
                        align-items: flex-start;
                        gap: 10px;
                    }

                    .story-tip-icon {
                        width: 29px;
                        height: 29px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                        background: var(--story-primary-soft);
                        color: var(--story-primary-dark);
                        font-size: 10px;
                    }

                    .story-tip-title {
                        color: #3b4540;
                        font-size: 10px;
                        font-weight: 800;
                    }

                    .story-tip-text {
                        margin-top: 3px;
                        color: #89928e;
                        font-size: 9px;
                        line-height: 1.55;
                    }

                    .story-profile-mini {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        padding-bottom: 16px;
                        margin-bottom: 16px;
                        border-bottom: 1px solid #edf0ee;
                    }

                    .story-profile-avatar {
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        object-fit: cover;
                        border: 2px solid white;
                        outline: 2px solid var(--story-primary);
                    }

                    .story-profile-name {
                        color: #252e2a;
                        font-size: 12px;
                        font-weight: 800;
                    }

                    .story-profile-role {
                        margin-top: 3px;
                        color: #89928e;
                        font-size: 9px;
                    }

                    .story-info-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin-bottom: 11px;
                    }

                    .story-info-row:last-child {
                        margin-bottom: 0;
                    }

                    .story-info-label {
                        color: #8b9490;
                        font-size: 9px;
                    }

                    .story-info-value {
                        color: #3c4541;
                        font-size: 9px;
                        font-weight: 700;
                        text-align: right;
                    }

                    /* =====================================================
                       RESPONSIVE
                    ===================================================== */

                    @media (max-width: 1000px) {
                        .story-layout {
                            grid-template-columns: 1fr;
                        }

                        .story-sidebar {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }

                    @media (max-width: 750px) {
                        .story-container {
                            padding: 18px 14px 50px;
                        }

                        .story-header {
                            align-items: flex-start;
                            flex-direction: column;
                            padding: 23px;
                        }

                        .story-header-actions {
                            width: 100%;
                        }

                        .story-header-actions .story-btn {
                            flex: 1;
                        }

                        .story-page-title {
                            font-size: 24px;
                        }

                        .story-stats {
                            grid-template-columns: 1fr;
                        }

                        .story-sidebar {
                            grid-template-columns: 1fr;
                        }

                        .story-card-media {
                            height: 220px;
                        }
                    }

                    @media (max-width: 480px) {
                        .story-header-actions {
                            display: grid;
                            grid-template-columns: 1fr;
                        }

                        .story-empty-inner {
                            padding: 45px 20px 50px;
                        }

                        .story-empty-title {
                            font-size: 22px;
                        }

                        .story-card-body {
                            padding: 17px;
                        }

                        .story-card-footer {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        .story-card-actions {
                            width: 100%;
                        }

                        .story-small-btn {
                            flex: 1;
                            justify-content: center;
                        }
                    }
                `}</style>

                <div className="story-container">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="story-header">

                        <div className="story-header-content">

                            <div className="story-eyebrow">
                                <i className="fas fa-book-open"></i>
                                Personal Brand
                            </div>

                            <h1 className="story-page-title">
                                My Story
                            </h1>

                            <p className="story-page-subtitle">
                                Share your journey, experience,
                                expertise and achievements with
                                clients and visitors.
                            </p>

                        </div>

                        <div className="story-header-actions">

                            <Link
                                href={route(
                                    "talent.profile"
                                )}
                                className="story-btn story-btn-secondary"
                            >
                                <i className="fas fa-user"></i>
                                My Profile
                            </Link>

                            <Link
                                href={route(
                                    "talent.page.stories.create"
                                )}
                                className="story-btn story-btn-primary"
                            >
                                <i className="fas fa-plus"></i>
                                Create Story
                            </Link>

                        </div>

                    </div>

                    {/* =================================================
                        STATS
                    ================================================= */}

                    <div className="story-stats">

                        <div className="story-stat">

                            <div className="story-stat-icon">
                                <i className="fas fa-book-open"></i>
                            </div>

                            <div>
                                <div className="story-stat-value">
                                    {storyList.length}
                                </div>

                                <div className="story-stat-label">
                                    Total Stories
                                </div>
                            </div>

                        </div>

                        <div className="story-stat">

                            <div className="story-stat-icon">
                                <i className="fas fa-circle-check"></i>
                            </div>

                            <div>
                                <div className="story-stat-value">
                                    {publishedStories}
                                </div>

                                <div className="story-stat-label">
                                    Published
                                </div>
                            </div>

                        </div>

                        <div className="story-stat">

                            <div className="story-stat-icon">
                                <i className="fas fa-comments"></i>
                            </div>

                            <div>
                                <div className="story-stat-value">
                                    {totalComments}
                                </div>

                                <div className="story-stat-label">
                                    Comments
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* =================================================
                        NO STORIES
                    ================================================= */}

                    {!hasStories && (
                        <div className="story-empty">

                            <div className="story-empty-decoration one"></div>
                            <div className="story-empty-decoration two"></div>

                            <div className="story-empty-inner">

                                <div className="story-icon">
                                    <i className="fas fa-feather-pointed"></i>
                                </div>

                                <h2 className="story-empty-title">
                                    Your story starts here
                                </h2>

                                <p className="story-empty-text">
                                    {message ||
                                        "You haven't shared your story yet."}{" "}
                                    Create a story that tells
                                    people who you are, what you
                                    do, what you've accomplished,
                                    and what makes your work
                                    different.
                                </p>

                                <div className="story-empty-features">

                                    <span className="story-feature">
                                        <i className="fas fa-user"></i>
                                        Introduce yourself
                                    </span>

                                    <span className="story-feature">
                                        <i className="fas fa-briefcase"></i>
                                        Show your experience
                                    </span>

                                    <span className="story-feature">
                                        <i className="fas fa-image"></i>
                                        Add media
                                    </span>

                                    <span className="story-feature">
                                        <i className="fas fa-tags"></i>
                                        Add expertise
                                    </span>

                                </div>

                                <Link
                                    href={route(
                                        "talent.page.stories.create"
                                    )}
                                    className="story-btn story-btn-primary px-4"
                                >
                                    <i className="fas fa-plus"></i>
                                    Add Your Story
                                </Link>

                            </div>
                        </div>
                    )}

                    {/* =================================================
                        STORIES
                    ================================================= */}

                    {hasStories && (
                        <div className="story-layout">

                            {/* =========================================
                                STORY LIST
                            ========================================= */}

                            <div className="story-list">

                                {storyList.map(
                                    (story) => (
                                        <StoryCard
                                            key={story.id}
                                            story={story}
                                        />
                                    )
                                )}

                            </div>

                            {/* =========================================
                                SIDEBAR
                            ========================================= */}

                            <aside className="story-sidebar">

                                {/* Profile */}

                                <div className="story-side-card">

                                    <div className="story-side-body">

                                        <div className="story-profile-mini">

                                            <img
                                                src={
                                                    talent?.image
                                                        ? `/${talent.image}`
                                                        : "/img/faces/face10.jpg"
                                                }
                                                alt={
                                                    talent?.name ||
                                                    "Talent"
                                                }
                                                className="story-profile-avatar"
                                            />

                                            <div>

                                                <div className="story-profile-name">
                                                    {talent?.name ||
                                                        "Your Profile"}
                                                </div>

                                                <div className="story-profile-role">
                                                    {talent?.category?.name ||
                                                        "Professional"}
                                                </div>

                                            </div>

                                        </div>

                                        <div className="story-info-row">
                                            <span className="story-info-label">
                                                Stories
                                            </span>

                                            <span className="story-info-value">
                                                {storyList.length}
                                            </span>
                                        </div>

                                        <div className="story-info-row">
                                            <span className="story-info-label">
                                                Published
                                            </span>

                                            <span className="story-info-value">
                                                {publishedStories}
                                            </span>
                                        </div>

                                        <div className="story-info-row">
                                            <span className="story-info-label">
                                                Comments
                                            </span>

                                            <span className="story-info-value">
                                                {totalComments}
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* Tips */}

                                <div className="story-side-card">

                                    <div className="story-side-header">

                                        <h3 className="story-side-title">
                                            Story Tips
                                        </h3>

                                    </div>

                                    <div className="story-side-body">

                                        <div className="story-tips">

                                            <StoryTip
                                                icon="fa-user"
                                                title="Be authentic"
                                                text="Share your real experience and what motivates your work."
                                            />

                                            <StoryTip
                                                icon="fa-image"
                                                title="Use quality media"
                                                text="Add a professional image or visual that supports your story."
                                            />

                                            <StoryTip
                                                icon="fa-lightbulb"
                                                title="Show your expertise"
                                                text="Explain the skills, lessons and experience you've gained."
                                            />

                                            <StoryTip
                                                icon="fa-heart"
                                                title="Connect emotionally"
                                                text="Tell people why your work matters and the impact you create."
                                            />

                                        </div>

                                    </div>
                                </div>

                            </aside>

                        </div>
                    )}

                </div>
            </div>
        </AppLayout>
    );
}

/* =============================================================
   STORY CARD
============================================================= */

function StoryCard({ story }) {

    const isPublished =
        story?.status === "published" ||
        story?.status === "active";

    const mediaUrl = story?.thumbnail
        ? `/${story.thumbnail}`
        : story?.media
        ? `/${story.media}`
        : null;

    const excerpt = stripHtml(
        story?.content || ""
    );

    const tags = parseTags(
        story?.tags
    );

    return (
        <article className="story-card">

            {/* MEDIA */}

            {mediaUrl ? (
                <div className="story-card-media">

                    <img
                        src={mediaUrl}
                        alt={
                            story?.title ||
                            "Story"
                        }
                    />

                    <div
                        className={`story-status ${
                            isPublished
                                ? "published"
                                : ""
                        }`}
                    >
                        <i className="fas fa-circle"></i>

                        {isPublished
                            ? "Published"
                            : capitalize(
                                  story?.status ||
                                      "Draft"
                              )}
                    </div>

                </div>
            ) : (
                <div className="story-card-media">

                    <div className="story-media-placeholder">
                        <i className="fas fa-book-open"></i>
                    </div>

                    <div
                        className={`story-status ${
                            isPublished
                                ? "published"
                                : ""
                        }`}
                    >
                        <i className="fas fa-circle"></i>

                        {isPublished
                            ? "Published"
                            : capitalize(
                                  story?.status ||
                                      "Draft"
                              )}
                    </div>

                </div>
            )}

            {/* BODY */}

            <div className="story-card-body">

                <div className="story-card-meta">

                    <span className="story-category">
                        {story?.category?.name ||
                            "Personal Story"}
                    </span>

                    <span className="story-date">
                        {formatDate(
                            story?.created_at
                        )}
                    </span>

                </div>

                <h2 className="story-title">
                    {story?.title ||
                        "Untitled Story"}
                </h2>

                <p className="story-excerpt">
                    {excerpt
                        ? truncate(
                              excerpt,
                              330
                          )
                        : "No story content available."}
                </p>

                {tags.length > 0 && (
                    <div className="story-tags">

                        {tags
                            .slice(0, 8)
                            .map(
                                (
                                    tag,
                                    index
                                ) => (
                                    <span
                                        key={
                                            index
                                        }
                                        className="story-tag"
                                    >
                                        #{tag}
                                    </span>
                                )
                            )}

                    </div>
                )}

                <div className="story-card-footer">

                    <div className="story-engagement">

                        <span>
                            <i className="fas fa-comments"></i>
                            {story?.comments
                                ?.length ||
                                0}
                        </span>

                        {story?.rating && (
                            <span>
                                <i className="fas fa-star"></i>
                                {Number(
                                    story.rating
                                ).toFixed(1)}
                            </span>
                        )}

                    </div>

                    <div className="story-card-actions">

                        <Link
                            href={
                                story?.slug
                                    ? route(
                                          "talent.page.stories.show",
                                          story.slug
                                      )
                                    : "#"
                            }
                            className="story-small-btn view"
                        >
                            <i className="fas fa-eye"></i>
                            View
                        </Link>

                        <Link
                            href={route(
                                "talent.page.stories.edit",
                                story.id
                            )}
                            className="story-small-btn edit"
                        >
                            <i className="fas fa-pen"></i>
                            Edit
                        </Link>

                    </div>

                </div>

            </div>
        </article>
    );
}

/* =============================================================
   STORY TIP
============================================================= */

function StoryTip({
    icon,
    title,
    text,
}) {
    return (
        <div className="story-tip">

            <div className="story-tip-icon">
                <i className={`fas ${icon}`}></i>
            </div>

            <div>

                <div className="story-tip-title">
                    {title}
                </div>

                <div className="story-tip-text">
                    {text}
                </div>

            </div>

        </div>
    );
}

/* =============================================================
   HELPERS
============================================================= */

function stripHtml(value) {
    if (!value) {
        return "";
    }

    return value
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&quot;/gi, '"')
        .replace(/&#039;/gi, "'")
        .replace(/\s+/g, " ")
        .trim();
}

function truncate(value, length) {
    if (!value) {
        return "";
    }

    if (value.length <= length) {
        return value;
    }

    return (
        value.substring(0, length).trim() +
        "..."
    );
}

function parseTags(tags) {
    if (!tags) {
        return [];
    }

    if (Array.isArray(tags)) {
        return tags.filter(Boolean);
    }

    if (typeof tags === "string") {
        try {
            const parsed =
                JSON.parse(tags);

            if (Array.isArray(parsed)) {
                return parsed.filter(
                    Boolean
                );
            }
        } catch (error) {
            // Continue with comma-separated tags.
        }

        return tags
            .split(",")
            .map((tag) =>
                tag.trim()
            )
            .filter(Boolean);
    }

    return [];
}

function formatDate(date) {
    if (!date) {
        return "";
    }

    try {
        return new Date(
            date
        ).toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
                year: "numeric",
            }
        );
    } catch (error) {
        return "";
    }
}

function capitalize(value) {
    if (!value) {
        return "";
    }

    return (
        value.charAt(0).toUpperCase() +
        value.slice(1)
    );
}