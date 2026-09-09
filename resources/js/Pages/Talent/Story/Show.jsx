import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Show({ story, isOwner }) {
    const formatDate = (date) => {
        if (!date) return null;

        try {
            return new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }).format(new Date(date));
        } catch {
            return null;
        }
    };

    const getMediaUrl = (path) => {
        if (!path) return null;

        if (/^https?:\/\//i.test(path)) {
            return path;
        }

        return path.startsWith("/storage/")
            ? path
            : `/storage/${path.replace(/^\/+/, "")}`;
    };

    const thumbnailUrl = getMediaUrl(story.thumbnail);
    const mediaUrl = getMediaUrl(story.media);

    const tags =
        typeof story.tags === "string"
            ? story.tags
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter(Boolean)
            : Array.isArray(story.tags)
            ? story.tags
            : [];

    const authorName =
        story.talent?.name ||
        story.talent?.full_name ||
        story.talent?.user?.name ||
        "Talent";

    const authorImage = getMediaUrl(
        story.talent?.profile_photo ||
            story.talent?.profile_image ||
            story.talent?.avatar
    );

    const initials = authorName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join("");

    const publishedDate =
        formatDate(story.published_at) ||
        formatDate(story.created_at) ||
        null;

    return (
        <AppLayout>
            <Head title={story.title} />

            <div data-h-scope="talent-story-show">
                <style>{`
                    [data-h-scope="talent-story-show"] {
                        --story-accent: #48d597;
                        --story-accent-dark: #2fb87c;
                        --story-accent-soft: rgba(72, 213, 151, 0.10);
                        --story-ink: #071315;
                        --story-muted: #667477;
                        --story-border: #e7eeeb;
                        --story-bg: #f6f9f8;
                        --story-white: #ffffff;

                        min-height: calc(100vh - 80px);
                        background:
                            radial-gradient(
                                circle at 15% 0%,
                                rgba(72, 213, 151, 0.08),
                                transparent 28%
                            ),
                            var(--story-bg);
                        color: var(--story-ink);
                    }

                    [data-h-scope="talent-story-show"] * {
                        box-sizing: border-box;
                    }

                    /* ================================
                       HEADER
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-topbar {
                        padding: 24px 0;
                    }

                    [data-h-scope="talent-story-show"] .story-back {
                        display: inline-flex;
                        align-items: center;
                        gap: 9px;
                        color: var(--story-muted);
                        text-decoration: none;
                        font-size: 14px;
                        font-weight: 600;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-show"] .story-back:hover {
                        color: var(--story-ink);
                        transform: translateX(-3px);
                    }

                    [data-h-scope="talent-story-show"] .story-owner-actions {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }

                    /* ================================
                       BUTTONS
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        border-radius: 12px;
                        padding: 10px 18px;
                        font-size: 14px;
                        font-weight: 700;
                        text-decoration: none;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-show"] .story-btn-edit {
                        background: var(--story-accent);
                        color: var(--story-ink);
                        border: 1px solid var(--story-accent);
                        box-shadow: 0 6px 18px rgba(72, 213, 151, .18);
                    }

                    [data-h-scope="talent-story-show"] .story-btn-edit:hover {
                        background: var(--story-accent-dark);
                        border-color: var(--story-accent-dark);
                        color: #fff;
                        transform: translateY(-1px);
                    }

                    /* ================================
                       ARTICLE
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-layout {
                        max-width: 1100px;
                        margin: 0 auto;
                    }

                    [data-h-scope="talent-story-show"] .story-article {
                        background: var(--story-white);
                        border: 1px solid var(--story-border);
                        border-radius: 24px;
                        overflow: hidden;
                        box-shadow: 0 15px 45px rgba(7, 19, 21, .06);
                    }

                    /* ================================
                       COVER
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-cover {
                        position: relative;
                        min-height: 390px;
                        overflow: hidden;
                        background:
                            linear-gradient(
                                135deg,
                                #071315 0%,
                                #123b30 50%,
                                #48d597 150%
                            );
                    }

                    [data-h-scope="talent-story-show"] .story-cover-image {
                        width: 100%;
                        height: 100%;
                        min-height: 390px;
                        object-fit: cover;
                        display: block;
                    }

                    [data-h-scope="talent-story-show"] .story-cover-overlay {
                        position: absolute;
                        inset: 0;
                        background:
                            linear-gradient(
                                180deg,
                                rgba(0,0,0,.04) 10%,
                                rgba(0,0,0,.18) 40%,
                                rgba(0,0,0,.82) 100%
                            );
                    }

                    [data-h-scope="talent-story-show"] .story-cover-placeholder {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-show"] .story-cover-placeholder::before {
                        content: "";
                        position: absolute;
                        width: 360px;
                        height: 360px;
                        border-radius: 50%;
                        border: 70px solid rgba(255,255,255,.05);
                    }

                    [data-h-scope="talent-story-show"] .story-cover-placeholder::after {
                        content: "";
                        position: absolute;
                        width: 160px;
                        height: 160px;
                        border-radius: 50%;
                        background: rgba(72,213,151,.12);
                        filter: blur(5px);
                    }

                    [data-h-scope="talent-story-show"] .story-cover-icon {
                        position: relative;
                        z-index: 2;
                        width: 82px;
                        height: 82px;
                        border-radius: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: rgba(255,255,255,.12);
                        border: 1px solid rgba(255,255,255,.18);
                        color: var(--story-accent);
                        font-size: 30px;
                        backdrop-filter: blur(10px);
                    }

                    [data-h-scope="talent-story-show"] .story-cover-content {
                        position: absolute;
                        z-index: 3;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        padding: 42px;
                        color: #fff;
                    }

                    [data-h-scope="talent-story-show"] .story-meta {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-bottom: 15px;
                    }

                    [data-h-scope="talent-story-show"] .story-meta-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 7px 12px;
                        border-radius: 999px;
                        font-size: 12px;
                        font-weight: 700;
                        letter-spacing: .02em;
                    }

                    [data-h-scope="talent-story-show"] .story-category {
                        background: var(--story-accent);
                        color: var(--story-ink);
                    }

                    [data-h-scope="talent-story-show"] .story-status {
                        background: rgba(255,255,255,.13);
                        color: #fff;
                        border: 1px solid rgba(255,255,255,.16);
                        backdrop-filter: blur(8px);
                    }

                    [data-h-scope="talent-story-show"] .story-cover-title {
                        max-width: 850px;
                        margin: 0;
                        font-size: clamp(30px, 4vw, 48px);
                        line-height: 1.08;
                        font-weight: 800;
                        letter-spacing: -1.5px;
                    }

                    [data-h-scope="talent-story-show"] .story-cover-date {
                        margin-top: 15px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        color: rgba(255,255,255,.78);
                        font-size: 13px;
                        font-weight: 500;
                    }

                    /* ================================
                       ARTICLE BODY
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-body {
                        padding: 42px;
                    }

                    [data-h-scope="talent-story-show"] .story-author {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                        padding-bottom: 28px;
                        margin-bottom: 30px;
                        border-bottom: 1px solid var(--story-border);
                    }

                    [data-h-scope="talent-story-show"] .story-author-avatar {
                        width: 46px;
                        height: 46px;
                        flex: 0 0 46px;
                        border-radius: 50%;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--story-accent-soft);
                        color: var(--story-accent-dark);
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-show"] .story-author-avatar img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-show"] .story-author-label {
                        color: var(--story-muted);
                        font-size: 12px;
                        margin-bottom: 2px;
                    }

                    [data-h-scope="talent-story-show"] .story-author-name {
                        font-size: 14px;
                        font-weight: 800;
                        color: var(--story-ink);
                    }

                    [data-h-scope="talent-story-show"] .story-content {
                        color: #273638;
                        font-size: 17px;
                        line-height: 1.9;
                        overflow-wrap: anywhere;
                    }

                    [data-h-scope="talent-story-show"] .story-content p {
                        margin-bottom: 1.35rem;
                    }

                    [data-h-scope="talent-story-show"] .story-content img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 16px;
                    }

                    [data-h-scope="talent-story-show"] .story-content h1,
                    [data-h-scope="talent-story-show"] .story-content h2,
                    [data-h-scope="talent-story-show"] .story-content h3,
                    [data-h-scope="talent-story-show"] .story-content h4 {
                        color: var(--story-ink);
                        font-weight: 800;
                        line-height: 1.25;
                        margin-top: 2rem;
                        margin-bottom: 1rem;
                    }

                    /* ================================
                       ATTACHMENT
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-attachment {
                        margin-top: 38px;
                        padding: 18px;
                        border: 1px solid var(--story-border);
                        background: #fafcfb;
                        border-radius: 16px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                    }

                    [data-h-scope="talent-story-show"] .story-attachment-info {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                        min-width: 0;
                    }

                    [data-h-scope="talent-story-show"] .story-attachment-icon {
                        width: 42px;
                        height: 42px;
                        flex: 0 0 42px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 12px;
                        background: var(--story-accent-soft);
                        color: var(--story-accent-dark);
                    }

                    [data-h-scope="talent-story-show"] .story-attachment-title {
                        font-weight: 750;
                        font-size: 14px;
                        color: var(--story-ink);
                    }

                    [data-h-scope="talent-story-show"] .story-attachment-subtitle {
                        color: var(--story-muted);
                        font-size: 12px;
                        margin-top: 2px;
                    }

                    [data-h-scope="talent-story-show"] .story-view-media {
                        white-space: nowrap;
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 9px 14px;
                        border-radius: 10px;
                        background: var(--story-ink);
                        color: #fff;
                        text-decoration: none;
                        font-size: 12px;
                        font-weight: 700;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-show"] .story-view-media:hover {
                        background: var(--story-accent-dark);
                        color: #fff;
                    }

                    /* ================================
                       TAGS
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-tags {
                        margin-top: 35px;
                        padding-top: 25px;
                        border-top: 1px solid var(--story-border);
                    }

                    [data-h-scope="talent-story-show"] .story-tags-label {
                        color: var(--story-muted);
                        font-size: 12px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: .08em;
                        margin-bottom: 12px;
                    }

                    [data-h-scope="talent-story-show"] .story-tag {
                        display: inline-flex;
                        align-items: center;
                        padding: 7px 12px;
                        margin: 0 7px 7px 0;
                        border-radius: 999px;
                        background: #f0f5f3;
                        color: #41504f;
                        font-size: 12px;
                        font-weight: 650;
                    }

                    /* ================================
                       BOTTOM ACTION
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-bottom {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 20px;
                        margin-top: 25px;
                        padding: 20px 5px 40px;
                    }

                    [data-h-scope="talent-story-show"] .story-bottom-text {
                        color: var(--story-muted);
                        font-size: 13px;
                    }

                    [data-h-scope="talent-story-show"] .story-bottom-text strong {
                        color: var(--story-ink);
                    }

                    /* ================================
                       RESPONSIVE
                    ================================= */

                    @media (max-width: 767.98px) {
                        [data-h-scope="talent-story-show"] .story-topbar {
                            padding: 17px 0;
                        }

                        [data-h-scope="talent-story-show"] .story-owner-actions {
                            gap: 6px;
                        }

                        [data-h-scope="talent-story-show"] .story-btn-edit {
                            padding: 9px 12px;
                        }

                        [data-h-scope="talent-story-show"] .story-btn-edit span {
                            display: none;
                        }

                        [data-h-scope="talent-story-show"] .story-article {
                            border-radius: 18px;
                        }

                        [data-h-scope="talent-story-show"] .story-cover,
                        [data-h-scope="talent-story-show"] .story-cover-image {
                            min-height: 330px;
                        }

                        [data-h-scope="talent-story-show"] .story-cover-content {
                            padding: 25px 22px;
                        }

                        [data-h-scope="talent-story-show"] .story-cover-title {
                            font-size: 30px;
                            letter-spacing: -1px;
                        }

                        [data-h-scope="talent-story-show"] .story-body {
                            padding: 27px 21px;
                        }

                        [data-h-scope="talent-story-show"] .story-content {
                            font-size: 16px;
                            line-height: 1.8;
                        }

                        [data-h-scope="talent-story-show"] .story-attachment {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        [data-h-scope="talent-story-show"] .story-view-media {
                            width: 100%;
                            justify-content: center;
                        }

                        [data-h-scope="talent-story-show"] .story-bottom {
                            align-items: flex-start;
                            flex-direction: column;
                            padding-bottom: 25px;
                        }
                    }
                `}</style>

                <div className="container-fluid px-3 px-md-4">
                    <div className="story-layout">
                        {/* ============================
                            TOP NAVIGATION
                        ============================= */}
                        <div className="story-topbar d-flex align-items-center justify-content-between">
                            <Link
                                href={route(
                                    "talent.get.profile",
                                    story.talent_id
                                )}
                                className="story-back"
                            >
                                <i className="fas fa-arrow-left"></i>
                                <span>Back to Profile</span>
                            </Link>

                            <div className="story-owner-actions">
                                {isOwner && (
                                    <Link
                                        href={route(
                                            "talent.page.stories.edit",
                                            story.id
                                        )}
                                        className="story-btn story-btn-edit"
                                    >
                                        <i className="fas fa-pen"></i>
                                        <span>Edit Story</span>
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* ============================
                            STORY ARTICLE
                        ============================= */}
                        <article className="story-article">
                            {/* COVER */}
                            <div className="story-cover">
                                {thumbnailUrl ? (
                                    <>
                                        <img
                                            src={thumbnailUrl}
                                            alt={story.title}
                                            className="story-cover-image"
                                        />
                                        <div className="story-cover-overlay"></div>
                                    </>
                                ) : (
                                    <div className="story-cover-placeholder">
                                        <div className="story-cover-icon">
                                            <i className="fas fa-feather-pointed"></i>
                                        </div>
                                    </div>
                                )}

                                <div className="story-cover-content">
                                    <div className="story-meta">
                                        {story.category?.name && (
                                            <span className="story-meta-badge story-category">
                                                <i className="fas fa-folder-open"></i>
                                                {story.category.name}
                                            </span>
                                        )}

                                        {story.status && (
                                            <span className="story-meta-badge story-status">
                                                <i
                                                    className={
                                                        story.status ===
                                                        "published"
                                                            ? "fas fa-circle-check"
                                                            : "fas fa-file"
                                                    }
                                                ></i>

                                                {story.status === "published"
                                                    ? "Published"
                                                    : story.status
                                                          .charAt(0)
                                                          .toUpperCase() +
                                                      story.status.slice(1)}
                                            </span>
                                        )}
                                    </div>

                                    <h1 className="story-cover-title">
                                        {story.title}
                                    </h1>

                                    {publishedDate && (
                                        <div className="story-cover-date">
                                            <i className="far fa-calendar"></i>
                                            {publishedDate}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* BODY */}
                            <div className="story-body">
                                {/* AUTHOR */}
                                <div className="story-author">
                                    <div className="story-author-avatar">
                                        {authorImage ? (
                                            <img
                                                src={authorImage}
                                                alt={authorName}
                                            />
                                        ) : (
                                            initials || (
                                                <i className="fas fa-user"></i>
                                            )
                                        )}
                                    </div>

                                    <div>
                                        <div className="story-author-label">
                                            Written by
                                        </div>

                                        <div className="story-author-name">
                                            {authorName}
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div
                                    className="story-content"
                                    dangerouslySetInnerHTML={{
                                        __html: story.content || "",
                                    }}
                                />

                                {/* ATTACHED MEDIA */}
                                {mediaUrl && (
                                    <div className="story-attachment">
                                        <div className="story-attachment-info">
                                            <div className="story-attachment-icon">
                                                <i className="fas fa-paperclip"></i>
                                            </div>

                                            <div>
                                                <div className="story-attachment-title">
                                                    Attached Media
                                                </div>

                                                <div className="story-attachment-subtitle">
                                                    Additional media attached
                                                    to this story
                                                </div>
                                            </div>
                                        </div>

                                        <a
                                            href={mediaUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="story-view-media"
                                        >
                                            <i className="fas fa-arrow-up-right-from-square"></i>
                                            View Media
                                        </a>
                                    </div>
                                )}

                                {/* TAGS */}
                                {tags.length > 0 && (
                                    <div className="story-tags">
                                        <div className="story-tags-label">
                                            <i className="fas fa-tags me-2"></i>
                                            Topics
                                        </div>

                                        <div>
                                            {tags.map((tag, index) => (
                                                <span
                                                    key={`${tag}-${index}`}
                                                    className="story-tag"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </article>

                        {/* ============================
                            FOOTER
                        ============================= */}
                        <div className="story-bottom">
                            <div className="story-bottom-text">
                                <strong>My Story</strong>
                                <span className="mx-2">•</span>
                                Share your journey, experience and perspective.
                            </div>

                            <Link
                                href={route(
                                    "talent.get.profile",
                                    story.talent_id
                                )}
                                className="story-back"
                            >
                                View Profile
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}