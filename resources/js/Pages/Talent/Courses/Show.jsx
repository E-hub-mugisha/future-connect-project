import { Head, Link, useForm, router } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

/* ================================================================
   ICON SYSTEM
================================================================ */

function Icon({ name, className = "", size = 18, strokeWidth = 1.8 }) {
    const common = {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        "aria-hidden": true,
    };

    const icons = {
        info: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5" />
                <path d="M12 8h.01" />
            </>
        ),

        star: (
            <path d="M12 3.5l2.7 5.47 6.04.88-4.37 4.26 1.03 6.02L12 17.6l-5.4 2.84 1.03-6.02L3.26 9.85l6.04-.88L12 3.5z" />
        ),

        play: (
            <>
                <circle cx="12" cy="12" r="9" />
                <polygon
                    points="10 8 16 12 10 16 10 8"
                    fill="currentColor"
                    stroke="none"
                />
            </>
        ),

        check: <path d="M20 6L9 17l-5-5" />,

        checkCircle: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l2.5 2.5L16.5 9" />
            </>
        ),

        bookmark: (
            <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5z" />
        ),

        share: (
            <>
                <circle cx="18" cy="5" r="2.5" />
                <circle cx="6" cy="12" r="2.5" />
                <circle cx="18" cy="19" r="2.5" />
                <path d="M8.2 10.8l7.6-4.5" />
                <path d="M8.2 13.2l7.6 4.5" />
            </>
        ),

        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
            </>
        ),

        arrowRight: (
            <>
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
            </>
        ),

        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),

        pen: (
            <>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
            </>
        ),

        trash: (
            <>
                <path d="M3 6h18" />
                <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
            </>
        ),

        users: (
            <>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </>
        ),

        user: (
            <>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </>
        ),

        cap: (
            <>
                <path d="M22 10L12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
            </>
        ),

        clock: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </>
        ),

        signal: (
            <>
                <path d="M3 20h2v-4H3v4z" />
                <path d="M8 20h2v-9H8v9z" />
                <path d="M13 20h2v-13h-2v13z" />
                <path d="M18 20h2V4h-2v16z" />
            </>
        ),

        tag: (
            <>
                <path d="M20 13.5L13.5 20a2 2 0 0 1-2.83 0L4 13.41a2 2 0 0 1-.59-1.42V5a1 1 0 0 1 1-1h6.99a2 2 0 0 1 1.42.59L20 11.5a2 2 0 0 1 0 2.83z" />
                <circle cx="8" cy="8" r="1.2" />
            </>
        ),

        image: (
            <>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
            </>
        ),

        comment: (
            <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.5 8.5 0 1 1 21 11.5z" />
        ),

        commentSlash: (
            <>
                <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.5 8.5 0 1 1 21 11.5z" />
                <path d="M3 3l18 18" />
            </>
        ),

        mail: (
            <>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
            </>
        ),

        phone: (
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        ),

        x: (
            <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
            </>
        ),
    };

    return <svg {...common}>{icons[name] || null}</svg>;
}

/* ================================================================
   STAR
================================================================ */

function StarIcon({ filled = true, size = 14 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={filled ? 0 : 1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M12 3.5l2.7 5.47 6.04.88-4.37 4.26 1.03 6.02L12 17.6l-5.4 2.84 1.03-6.02L3.26 9.85l6.04-.88L12 3.5z" />
        </svg>
    );
}

/* ================================================================
   TABS
================================================================ */

const TABS = [
    { key: "overview", label: "Overview", icon: "info" },
    { key: "curriculum", label: "Curriculum", icon: "cap" },
    { key: "reviews", label: "Reviews", icon: "star" },
    { key: "details", label: "Details", icon: "list" },
    { key: "author", label: "Instructor", icon: "user" },
];

/* ================================================================
   MAIN PAGE
================================================================ */

export default function CourseShow({ course }) {
    const [activeTab, setActiveTab] = useState("overview");
    const [bookmarked, setBookmarked] = useState(false);

    const [addLessonOpen, setAddLessonOpen] = useState(false);
    const [editLesson, setEditLesson] = useState(null);
    const [deleteLesson, setDeleteLesson] = useState(null);
    const [addReviewOpen, setAddReviewOpen] = useState(false);

    const lessons = course.lessons ?? [];
    const feedback = course.feedback ?? [];

    const avgRating = feedback.length
        ? feedback.reduce((sum, item) => sum + Number(item.rating || 0), 0) /
          feedback.length
        : 0;

    const firstLesson = lessons[0];

    const completedLessons = 0;

    const progress = lessons.length
        ? Math.round((completedLessons / lessons.length) * 100)
        : 0;

    const totalDuration = lessons.reduce(
        (sum, lesson) => sum + Number(lesson.duration || 0),
        0,
    );

    function handleShare() {
        if (navigator.share) {
            navigator.share({
                title: course.title,
                text: course.description,
                url: window.location.href,
            });
        } else {
            navigator.clipboard?.writeText(window.location.href);
            alert("Course link copied to clipboard.");
        }
    }

    return (
        <AppLayout>
            <Head title={course.title} />

            <div data-talent-course>
                <style>{`

                    /* =====================================================
                       DESIGN SYSTEM
                    ===================================================== */

                    [data-talent-course] {
                        --talent-green: #00A667;
                        --talent-green-dark: #008653;
                        --talent-green-soft: #E9F8F2;

                        --talent-black: #111111;
                        --talent-ink: #202124;
                        --talent-muted: #667085;

                        --talent-white: #FFFFFF;
                        --talent-bg: #F7F9F8;

                        --talent-border: #E5E9E7;
                        --talent-border-soft: #EEF1EF;

                        --talent-warning: #F59E0B;
                        --talent-danger: #DC2626;

                        --talent-shadow-sm:
                            0 1px 2px rgba(16,24,40,.04);

                        --talent-shadow:
                            0 6px 20px rgba(16,24,40,.06);

                        --talent-shadow-lg:
                            0 18px 45px rgba(16,24,40,.10);

                        background:
                            var(--talent-bg);

                        color:
                            var(--talent-black);

                        min-height: 100vh;

                        font-family:
                            Inter,
                            -apple-system,
                            BlinkMacSystemFont,
                            "Segoe UI",
                            sans-serif;
                    }

                    [data-talent-course] * {
                        box-sizing: border-box;
                    }

                    /* =====================================================
                       GLOBAL CARD
                    ===================================================== */

                    [data-talent-course] .talent-card {
                        background: var(--talent-white);
                        border: 1px solid var(--talent-border);
                        border-radius: 18px;
                        box-shadow: var(--talent-shadow-sm);
                    }

                    /* =====================================================
                       HERO
                    ===================================================== */

                    [data-talent-course] .course-hero {
                        position: relative;
                        overflow: hidden;

                        background:
                            linear-gradient(
                                135deg,
                                #FFFFFF 0%,
                                #F2FBF7 100%
                            );

                        border:
                            1px solid var(--talent-border);

                        border-radius: 24px;

                        box-shadow:
                            var(--talent-shadow);
                    }

                    [data-talent-course] .course-hero::after {
                        content: "";

                        position: absolute;

                        width: 260px;
                        height: 260px;

                        right: -100px;
                        top: -100px;

                        background:
                            rgba(0,166,103,.08);

                        border-radius: 50%;

                        pointer-events: none;
                    }

                    [data-talent-course] .hero-accent {
                        position: absolute;

                        left: 0;
                        top: 0;
                        bottom: 0;

                        width: 5px;

                        background:
                            var(--talent-green);
                    }

                    [data-talent-course] .hero-content {
                        position: relative;
                        z-index: 2;
                    }

                    [data-talent-course] .category-badge {
                        background: var(--talent-green-soft);
                        color: var(--talent-green-dark);

                        border-radius: 999px;

                        padding: 7px 12px;

                        font-size: 12px;
                        font-weight: 700;

                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                    }

                    [data-talent-course] .status-badge {
                        border-radius: 999px;

                        padding: 7px 12px;

                        font-size: 12px;
                        font-weight: 700;
                    }

                    [data-talent-course] .status-published {
                        background: #ECFDF3;
                        color: #087443;
                    }

                    [data-talent-course] .status-draft {
                        background: #FFF7E8;
                        color: #A15C00;
                    }

                    [data-talent-course] .course-title {
                        font-size: clamp(1.8rem, 4vw, 2.8rem);
                        line-height: 1.1;

                        font-weight: 800;

                        letter-spacing: -0.04em;

                        max-width: 850px;

                        color: var(--talent-black);
                    }

                    [data-talent-course] .course-subtitle {
                        max-width: 760px;

                        color: var(--talent-muted);

                        font-size: 1rem;

                        line-height: 1.7;
                    }

                    /* =====================================================
                       BUTTONS
                    ===================================================== */

                    [data-talent-course] .btn-green {
                        background: var(--talent-green);
                        color: #FFFFFF;

                        border: 1px solid var(--talent-green);

                        font-weight: 700;

                        border-radius: 10px;

                        padding: 11px 16px;

                        display: inline-flex;
                        align-items: center;
                        justify-content: center;

                        gap: 8px;

                        transition:
                            .18s ease;
                    }

                    [data-talent-course] .btn-green:hover {
                        background: var(--talent-green-dark);
                        border-color: var(--talent-green-dark);

                        color: #FFFFFF;

                        transform: translateY(-1px);

                        box-shadow:
                            0 8px 18px rgba(0,166,103,.20);
                    }

                    [data-talent-course] .btn-light {
                        background: #FFFFFF;
                        color: var(--talent-black);

                        border: 1px solid var(--talent-border);

                        font-weight: 700;

                        border-radius: 10px;

                        padding: 10px 15px;

                        display: inline-flex;
                        align-items: center;
                        justify-content: center;

                        gap: 8px;

                        transition: .18s ease;
                    }

                    [data-talent-course] .btn-light:hover {
                        background: var(--talent-green-soft);

                        border-color:
                            rgba(0,166,103,.25);

                        color:
                            var(--talent-green-dark);
                    }

                    [data-talent-course] .icon-button {
                        width: 42px;
                        height: 42px;

                        border-radius: 10px;

                        display: inline-flex;
                        align-items: center;
                        justify-content: center;

                        border:
                            1px solid var(--talent-border);

                        background: #FFFFFF;

                        color:
                            var(--talent-muted);

                        transition: .18s ease;
                    }

                    [data-talent-course] .icon-button:hover {
                        background:
                            var(--talent-green-soft);

                        border-color:
                            rgba(0,166,103,.25);

                        color:
                            var(--talent-green);
                    }

                    [data-talent-course] .icon-button.active {
                        background:
                            var(--talent-green-soft);

                        color:
                            var(--talent-green);

                        border-color:
                            rgba(0,166,103,.3);
                    }

                    /* =====================================================
                       HERO STATS
                    ===================================================== */

                    [data-talent-course] .hero-stat {
                        display: inline-flex;

                        align-items: center;

                        gap: 7px;

                        color:
                            var(--talent-muted);

                        font-size: .9rem;

                        font-weight: 600;
                    }

                    [data-talent-course] .hero-stat strong {
                        color:
                            var(--talent-black);
                    }

                    [data-talent-course] .rating {
                        color:
                            var(--talent-warning);
                    }

                    /* =====================================================
                       MAIN CONTENT
                    ===================================================== */

                    [data-talent-course] .section-title {
                        font-size: 1.15rem;

                        font-weight: 800;

                        color:
                            var(--talent-black);

                        letter-spacing: -.02em;
                    }

                    [data-talent-course] .description {
                        color:
                            #525D69;

                        line-height: 1.8;

                        font-size: .97rem;
                    }

                    /* =====================================================
                       FEATURE LIST
                    ===================================================== */

                    [data-talent-course] .feature-item {
                        display: flex;

                        align-items: flex-start;

                        gap: 12px;

                        color:
                            #414B55;

                        font-size: .93rem;

                        line-height: 1.55;
                    }

                    [data-talent-course] .feature-icon {
                        width: 25px;
                        height: 25px;

                        flex-shrink: 0;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        background:
                            var(--talent-green-soft);

                        color:
                            var(--talent-green);

                        border-radius: 50%;
                    }

                    /* =====================================================
                       COURSE MEDIA
                    ===================================================== */

                    [data-talent-course] .course-media {
                        width: 100%;

                        aspect-ratio: 16 / 9;

                        object-fit: cover;

                        background:
                            linear-gradient(
                                135deg,
                                #EAF0ED,
                                #F8FAF9
                            );
                    }

                    /* =====================================================
                       COURSE PURCHASE / ENROLL CARD
                    ===================================================== */

                    [data-talent-course] .enroll-card {
                        position: sticky;

                        top: 20px;

                        padding: 0;

                        overflow: hidden;
                    }

                    [data-talent-course] .price-area {
                        padding: 24px;

                        border-bottom:
                            1px solid var(--talent-border-soft);
                    }

                    [data-talent-course] .course-price {
                        font-size: 2rem;

                        font-weight: 850;

                        letter-spacing: -.04em;

                        color:
                            var(--talent-black);
                    }

                    [data-talent-course] .free-label {
                        display: inline-flex;

                        background:
                            var(--talent-green-soft);

                        color:
                            var(--talent-green-dark);

                        padding: 7px 12px;

                        border-radius: 999px;

                        font-weight: 800;

                        font-size: .85rem;
                    }

                    [data-talent-course] .enroll-body {
                        padding: 22px 24px 24px;
                    }

                    [data-talent-course] .enroll-feature {
                        display: flex;

                        gap: 10px;

                        align-items: center;

                        margin-bottom: 13px;

                        color:
                            #525D69;

                        font-size: .9rem;
                    }

                    [data-talent-course] .enroll-feature svg {
                        color:
                            var(--talent-green);
                    }

                    /* =====================================================
                       TABS
                    ===================================================== */

                    [data-talent-course] .tabs-wrapper {
                        background: #FFFFFF;

                        border:
                            1px solid var(--talent-border);

                        border-radius: 15px;

                        padding: 5px;

                        overflow-x: auto;
                    }

                    [data-talent-course] .tab-button {
                        border: 0;

                        background: transparent;

                        color:
                            var(--talent-muted);

                        font-size: .88rem;

                        font-weight: 700;

                        padding: 11px 16px;

                        border-radius: 10px;

                        white-space: nowrap;

                        display: inline-flex;

                        align-items: center;

                        gap: 7px;

                        transition: .18s ease;
                    }

                    [data-talent-course] .tab-button:hover {
                        background:
                            var(--talent-green-soft);

                        color:
                            var(--talent-green-dark);
                    }

                    [data-talent-course] .tab-button.active {
                        background:
                            var(--talent-green);

                        color:
                            #FFFFFF;
                    }

                    /* =====================================================
                       CURRICULUM
                    ===================================================== */

                    [data-talent-course] .lesson {
                        position: relative;

                        display: flex;

                        align-items: center;

                        gap: 14px;

                        padding: 15px;

                        border:
                            1px solid var(--talent-border);

                        border-radius: 13px;

                        background:
                            #FFFFFF;

                        transition: .18s ease;
                    }

                    [data-talent-course] .lesson:hover {
                        border-color:
                            rgba(0,166,103,.35);

                        box-shadow:
                            0 5px 18px rgba(16,24,40,.05);

                        transform:
                            translateY(-1px);
                    }

                    [data-talent-course] .lesson-number {
                        width: 38px;
                        height: 38px;

                        flex-shrink: 0;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        background:
                            var(--talent-green-soft);

                        color:
                            var(--talent-green-dark);

                        border-radius: 10px;

                        font-size: .85rem;

                        font-weight: 800;
                    }

                    [data-talent-course] .lesson-title {
                        font-weight: 700;

                        color:
                            var(--talent-black);

                        font-size: .93rem;
                    }

                    [data-talent-course] .lesson-description {
                        color:
                            var(--talent-muted);

                        font-size: .82rem;

                        margin-top: 3px;
                    }

                    /* =====================================================
                       INSTRUCTOR
                    ===================================================== */

                    [data-talent-course] .instructor-avatar {
                        width: 72px;
                        height: 72px;

                        object-fit: cover;

                        border-radius: 50%;

                        border:
                            3px solid var(--talent-green-soft);
                    }

                    [data-talent-course] .instructor-stat {
                        padding: 14px;

                        background:
                            #F8FAF9;

                        border:
                            1px solid var(--talent-border-soft);

                        border-radius: 12px;
                    }

                    [data-talent-course] .instructor-stat-value {
                        font-size: 1.1rem;

                        font-weight: 800;

                        color:
                            var(--talent-black);
                    }

                    /* =====================================================
                       REVIEWS
                    ===================================================== */

                    [data-talent-course] .rating-summary {
                        background:
                            var(--talent-green-soft);

                        border-radius: 15px;

                        padding: 20px;
                    }

                    [data-talent-course] .rating-number {
                        font-size: 2.5rem;

                        font-weight: 850;

                        line-height: 1;

                        color:
                            var(--talent-black);
                    }

                    [data-talent-course] .review-item {
                        padding: 18px 0;

                        border-bottom:
                            1px solid var(--talent-border-soft);
                    }

                    /* =====================================================
                       DETAILS
                    ===================================================== */

                    [data-talent-course] .detail-box {
                        background:
                            #F8FAF9;

                        border:
                            1px solid var(--talent-border-soft);

                        border-radius: 13px;

                        padding: 15px;
                    }

                    [data-talent-course] .detail-label {
                        color:
                            var(--talent-muted);

                        font-size: .78rem;

                        font-weight: 600;

                        margin-bottom: 4px;
                    }

                    [data-talent-course] .detail-value {
                        color:
                            var(--talent-black);

                        font-weight: 700;

                        word-break: break-word;
                    }

                    /* =====================================================
                       MODALS
                    ===================================================== */

                    [data-talent-course] .modal-content {
                        border:
                            1px solid var(--talent-border);

                        border-radius: 18px;

                        box-shadow:
                            var(--talent-shadow-lg);

                        background:
                            #FFFFFF;
                    }

                    [data-talent-course] .form-control {
                        border:
                            1px solid var(--talent-border);

                        background:
                            #FFFFFF;

                        color:
                            var(--talent-black);

                        border-radius: 10px;

                        padding: 10px 12px;
                    }

                    [data-talent-course] .form-control:focus {
                        border-color:
                            var(--talent-green);

                        box-shadow:
                            0 0 0 3px rgba(0,166,103,.12);
                    }

                    /* =====================================================
                       MOBILE
                    ===================================================== */

                    @media(max-width: 991px) {
                        [data-talent-course] .enroll-card {
                            position: static;
                        }

                        [data-talent-course] .course-title {
                            font-size: 2rem;
                        }
                    }

                    @media(max-width: 575px) {
                        [data-talent-course] .container-fluid {
                            padding-left: 14px !important;
                            padding-right: 14px !important;
                        }

                        [data-talent-course] .course-hero {
                            border-radius: 17px;
                        }

                        [data-talent-course] .course-title {
                            font-size: 1.65rem;
                        }

                        [data-talent-course] .hero-actions {
                            width: 100%;
                        }

                        [data-talent-course] .hero-actions .btn {
                            flex: 1;
                        }

                        [data-talent-course] .lesson {
                            align-items: flex-start;
                        }

                        [data-talent-course] .lesson-actions {
                            display: none !important;
                        }
                    }

                `}</style>

                <div className="container-fluid px-4 py-4">
                    {/* =====================================================
                        BREADCRUMB
                    ===================================================== */}

                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Link
                            href={route("talent.courses.index")}
                            className="text-decoration-none d-inline-flex align-items-center gap-2"
                            style={{
                                color: "var(--talent-muted)",
                                fontSize: ".88rem",
                                fontWeight: 600,
                            }}
                        >
                            <Icon name="arrowLeft" size={15} />
                            Courses
                        </Link>

                        <span style={{ color: "#B6BFBB" }}>/</span>

                        <span
                            className="text-truncate"
                            style={{
                                color: "var(--talent-black)",
                                fontSize: ".88rem",
                                fontWeight: 700,
                                maxWidth: 300,
                            }}
                        >
                            {course.title}
                        </span>
                    </div>

                    {/* =====================================================
                        HERO
                    ===================================================== */}

                    <div className="course-hero mb-4">
                        <div className="hero-accent" />

                        <div className="hero-content p-4 p-lg-5">
                            <div className="row align-items-center g-4">
                                <div className="col-xl-8">
                                    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                                        <span className="category-badge">
                                            <Icon name="tag" size={13} />
                                            {course.category?.name ??
                                                "Uncategorized"}
                                        </span>

                                        <span
                                            className={`status-badge ${
                                                course.status === "published"
                                                    ? "status-published"
                                                    : "status-draft"
                                            }`}
                                        >
                                            {capitalize(course.status)}
                                        </span>

                                        {course.is_free && (
                                            <span className="free-label">
                                                Free Course
                                            </span>
                                        )}
                                    </div>

                                    <h1 className="course-title mb-3">
                                        {course.title}
                                    </h1>

                                    <p className="course-subtitle mb-4">
                                        {course.description ||
                                            "Develop practical skills and grow your professional capabilities through this course."}
                                    </p>

                                    {/* Stats */}

                                    <div className="d-flex flex-wrap gap-4">
                                        <span className="hero-stat">
                                            <Icon
                                                name="cap"
                                                size={16}
                                                style={{
                                                    color: "var(--talent-green)",
                                                }}
                                            />
                                            <strong>{lessons.length}</strong>
                                            Lessons
                                        </span>

                                        <span className="hero-stat">
                                            <Icon name="users" size={16} />
                                            <strong>
                                                {course.enrollments_count ?? 0}
                                            </strong>
                                            Learners
                                        </span>

                                        <span className="hero-stat">
                                            <Icon name="signal" size={16} />
                                            <strong>
                                                {capitalize(
                                                    course.level ?? "Beginner",
                                                )}
                                            </strong>
                                        </span>

                                        {avgRating > 0 && (
                                            <span className="hero-stat rating">
                                                <StarIcon size={15} />
                                                <strong>
                                                    {avgRating.toFixed(1)}
                                                </strong>
                                                ({feedback.length} reviews)
                                            </span>
                                        )}
                                    </div>

                                    {/* Instructor */}

                                    {course.talent && (
                                        <div className="d-flex align-items-center gap-3 mt-4">
                                            <img
                                                src={
                                                    course.talent.image
                                                        ? `/${course.talent.image}`
                                                        : "/img/faces/face10.jpg"
                                                }
                                                alt={course.talent.name}
                                                className="rounded-circle"
                                                style={{
                                                    width: 42,
                                                    height: 42,
                                                    objectFit: "cover",
                                                }}
                                            />

                                            <div>
                                                <div
                                                    style={{
                                                        color: "var(--talent-muted)",
                                                        fontSize: ".75rem",
                                                    }}
                                                >
                                                    Course instructor
                                                </div>

                                                <strong
                                                    style={{
                                                        color: "var(--talent-black)",
                                                        fontSize: ".9rem",
                                                    }}
                                                >
                                                    {course.talent.name}
                                                </strong>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="col-xl-4">
                                    <div className="d-flex flex-wrap justify-content-xl-end gap-2 hero-actions">
                                        <button
                                            type="button"
                                            className={`icon-button ${
                                                bookmarked ? "active" : ""
                                            }`}
                                            onClick={() =>
                                                setBookmarked(!bookmarked)
                                            }
                                            title={
                                                bookmarked
                                                    ? "Remove bookmark"
                                                    : "Bookmark course"
                                            }
                                        >
                                            <Icon name="bookmark" size={18} />
                                        </button>

                                        <button
                                            type="button"
                                            className="icon-button"
                                            onClick={handleShare}
                                            title="Share course"
                                        >
                                            <Icon name="share" size={18} />
                                        </button>

                                        <Link
                                            href={route(
                                                "talent.courses.edit",
                                                course.id,
                                            )}
                                            className="btn btn-green"
                                        >
                                            <Icon name="pen" size={15} />
                                            Edit Course
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =====================================================
                        TABS
                    ===================================================== */}

                    <div className="tabs-wrapper d-flex gap-1 mb-4">
                        {TABS.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                className={`tab-button ${
                                    activeTab === tab.key ? "active" : ""
                                }`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <Icon name={tab.icon} size={15} />

                                {tab.label}

                                {tab.key === "curriculum" &&
                                    ` (${lessons.length})`}

                                {tab.key === "reviews" &&
                                    ` (${feedback.length})`}
                            </button>
                        ))}
                    </div>

                    {/* =====================================================
                        OVERVIEW
                    ===================================================== */}

                    {activeTab === "overview" && (
                        <Overview
                            course={course}
                            firstLesson={firstLesson}
                            progress={progress}
                            totalDuration={totalDuration}
                            onStart={() => {
                                if (firstLesson?.video_url) {
                                    window.open(
                                        firstLesson.video_url,
                                        "_blank",
                                    );
                                }
                            }}
                        />
                    )}

                    {/* =====================================================
                        CURRICULUM
                    ===================================================== */}

                    {activeTab === "curriculum" && (
                        <Curriculum
                            course={course}
                            onEdit={setEditLesson}
                            onDelete={setDeleteLesson}
                            onAddLesson={() => setAddLessonOpen(true)}
                        />
                    )}

                    {/* =====================================================
                        REVIEWS
                    ===================================================== */}

                    {activeTab === "reviews" && (
                        <Reviews feedback={feedback} avgRating={avgRating} />
                    )}

                    {/* =====================================================
                        DETAILS
                    ===================================================== */}

                    {activeTab === "details" && <Details course={course} />}

                    {/* =====================================================
                        AUTHOR
                    ===================================================== */}

                    {activeTab === "author" && (
                        <Author talent={course.talent} course={course} />
                    )}
                </div>
            </div>

            {/* =============================================================
                MODALS
            ============================================================= */}

            <AddLessonModal
                show={addLessonOpen}
                courseId={course.id}
                onClose={() => setAddLessonOpen(false)}
            />

            <EditLessonModal
                lesson={editLesson}
                onClose={() => setEditLesson(null)}
            />

            <DeleteLessonModal
                lesson={deleteLesson}
                onCancel={() => setDeleteLesson(null)}
            />

            <AddReviewModal
                show={addReviewOpen}
                courseId={course.id}
                onClose={() => setAddReviewOpen(false)}
            />
        </AppLayout>
    );
}

/* ================================================================
   OVERVIEW
================================================================ */

function Overview({ course, firstLesson, progress, totalDuration, onStart }) {
    return (
        <div className="row g-4">
            <div className="col-xl-8">
                {/* Media */}

                <div className="talent-card overflow-hidden mb-4">
                    {course.is_free && firstLesson?.video_url ? (
                        <video className="course-media" controls>
                            <source
                                src={firstLesson.video_url}
                                type="video/mp4"
                            />
                        </video>
                    ) : course.video ? (
                        <video
                            className="course-media"
                            controls
                            poster={
                                course.thumbnail
                                    ? `/${course.thumbnail}`
                                    : undefined
                            }
                        >
                            <source src={course.video} type="video/mp4" />
                        </video>
                    ) : course.thumbnail ? (
                        <img
                            src={`/${course.thumbnail}`}
                            alt={course.title}
                            className="course-media"
                        />
                    ) : (
                        <div className="course-media d-flex align-items-center justify-content-center">
                            <Icon
                                name="image"
                                size={55}
                                className="text-secondary"
                            />
                        </div>
                    )}
                </div>

                {/* About */}

                <div className="talent-card p-4 p-lg-5 mb-4">
                    <h2 className="section-title mb-3">About this course</h2>

                    <p className="description mb-0">
                        {course.description ||
                            "This course is designed to help learners develop practical knowledge and professional skills."}
                    </p>
                </div>

                {/* What you will learn */}

                <div className="talent-card p-4 p-lg-5">
                    <h2 className="section-title mb-4">What you'll learn</h2>

                    <div className="row g-3">
                        {[
                            "Build practical and job-ready skills",
                            "Understand important concepts through structured lessons",
                            "Apply your knowledge through practical learning",
                            "Improve your professional capabilities",
                            "Learn at your own pace",
                            "Strengthen your career portfolio",
                        ].map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="feature-item">
                                    <span className="feature-icon">
                                        <Icon name="check" size={14} />
                                    </span>

                                    <span>{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN */}

            <div className="col-xl-4">
                <div className="talent-card enroll-card">
                    <div className="price-area">
                        {course.is_free ? (
                            <span className="free-label">FREE</span>
                        ) : (
                            <div className="course-price">
                                ${Number(course.price ?? 0).toFixed(2)}
                            </div>
                        )}

                        <div
                            className="small mt-2"
                            style={{
                                color: "var(--talent-muted)",
                            }}
                        >
                            Access this course and start developing your skills.
                        </div>
                    </div>

                    <div className="enroll-body">
                        <button
                            type="button"
                            className="btn btn-green w-100 mb-4"
                            onClick={onStart}
                        >
                            <Icon name="play" size={17} />
                            Start Learning
                        </button>

                        <div className="enroll-feature">
                            <Icon name="cap" size={16} />
                            {course.lessons?.length ?? 0} lessons
                        </div>

                        <div className="enroll-feature">
                            <Icon name="signal" size={16} />
                            {capitalize(course.level ?? "Beginner")} level
                        </div>

                        <div className="enroll-feature">
                            <Icon name="users" size={16} />
                            {course.enrollments_count ?? 0} learners
                        </div>

                        <div className="enroll-feature">
                            <Icon name="clock" size={16} />
                            {totalDuration
                                ? `${totalDuration} minutes`
                                : "Self-paced learning"}
                        </div>

                        <div className="enroll-feature">
                            <Icon name="checkCircle" size={16} />
                            Professional learning content
                        </div>
                    </div>
                </div>

                {/* Progress */}

                <div className="talent-card p-4 mt-4">
                    <div className="d-flex justify-content-between mb-2">
                        <strong
                            style={{
                                fontSize: ".9rem",
                            }}
                        >
                            Your progress
                        </strong>

                        <span
                            style={{
                                color: "var(--talent-green)",
                                fontWeight: 800,
                                fontSize: ".85rem",
                            }}
                        >
                            {progress}%
                        </span>
                    </div>

                    <div
                        style={{
                            height: 7,
                            background: "#E9EEEB",
                            borderRadius: 99,
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: `${progress}%`,
                                height: "100%",
                                background: "var(--talent-green)",
                                borderRadius: 99,
                            }}
                        />
                    </div>

                    <small
                        className="d-block mt-2"
                        style={{
                            color: "var(--talent-muted)",
                        }}
                    >
                        Start learning to track your progress.
                    </small>
                </div>
            </div>
        </div>
    );
}

/* ================================================================
   CURRICULUM
================================================================ */

function Curriculum({ course, onEdit, onDelete, onAddLesson }) {
    const lessons = course.lessons ?? [];

    return (
        <div className="row g-4">
            <div className="col-xl-8">
                <div className="talent-card p-4 p-lg-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="section-title mb-1">
                                Course curriculum
                            </h2>

                            <div
                                style={{
                                    color: "var(--talent-muted)",
                                    fontSize: ".85rem",
                                }}
                            >
                                {lessons.length} lessons
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn-green"
                            onClick={onAddLesson}
                        >
                            <Icon name="plus" size={15} />
                            Add Lesson
                        </button>
                    </div>

                    {lessons.length === 0 ? (
                        <EmptyState
                            icon="cap"
                            title="No lessons yet"
                            description="Start building your course curriculum by adding your first lesson."
                        />
                    ) : (
                        <div className="d-flex flex-column gap-2">
                            {lessons.map((lesson, index) => (
                                <div key={lesson.id} className="lesson">
                                    <div className="lesson-number">
                                        {index + 1}
                                    </div>

                                    <div className="flex-grow-1 min-w-0">
                                        <div className="lesson-title text-truncate">
                                            {lesson.title}
                                        </div>

                                        {lesson.content && (
                                            <div className="lesson-description text-truncate">
                                                {truncate(lesson.content, 120)}
                                            </div>
                                        )}

                                        <div
                                            className="d-flex align-items-center gap-3 mt-2"
                                            style={{
                                                color: "var(--talent-muted)",
                                                fontSize: ".75rem",
                                            }}
                                        >
                                            <span>Lesson {index + 1}</span>

                                            {lesson.video_url && (
                                                <span>Video</span>
                                            )}
                                        </div>
                                    </div>

                                    {course.is_free && lesson.video_url && (
                                        <a
                                            href={lesson.video_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-light btn-sm"
                                        >
                                            <Icon name="play" size={14} />
                                            Watch
                                        </a>
                                    )}

                                    <div className="lesson-actions d-flex gap-2">
                                        <button
                                            type="button"
                                            className="icon-button"
                                            style={{
                                                width: 34,
                                                height: 34,
                                            }}
                                            onClick={() => onEdit(lesson)}
                                        >
                                            <Icon name="pen" size={14} />
                                        </button>

                                        <button
                                            type="button"
                                            className="icon-button"
                                            style={{
                                                width: 34,
                                                height: 34,
                                            }}
                                            onClick={() => onDelete(lesson)}
                                        >
                                            <Icon name="trash" size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="col-xl-4">
                <div className="talent-card p-4">
                    <h3 className="section-title mb-4">Course structure</h3>

                    <StructureItem
                        icon="cap"
                        label="Lessons"
                        value={lessons.length}
                    />

                    <StructureItem
                        icon="users"
                        label="Learners"
                        value={course.enrollments_count ?? 0}
                    />

                    <StructureItem
                        icon="star"
                        label="Rating"
                        value={
                            course.feedback?.length
                                ? (
                                      course.feedback.reduce(
                                          (s, f) => s + Number(f.rating),
                                          0,
                                      ) / course.feedback.length
                                  ).toFixed(1)
                                : "—"
                        }
                    />

                    <StructureItem
                        icon="signal"
                        label="Level"
                        value={capitalize(course.level ?? "Beginner")}
                    />
                </div>
            </div>
        </div>
    );
}

function StructureItem({ icon, label, value }) {
    return (
        <div
            className="d-flex align-items-center justify-content-between py-3"
            style={{
                borderBottom: "1px solid var(--talent-border-soft)",
            }}
        >
            <div className="d-flex align-items-center gap-2">
                <span
                    style={{
                        color: "var(--talent-green)",
                    }}
                >
                    <Icon name={icon} size={16} />
                </span>

                <span
                    style={{
                        color: "var(--talent-muted)",
                        fontSize: ".88rem",
                    }}
                >
                    {label}
                </span>
            </div>

            <strong
                style={{
                    color: "var(--talent-black)",
                    fontSize: ".88rem",
                }}
            >
                {value}
            </strong>
        </div>
    );
}

/* ================================================================
   REVIEWS
================================================================ */

function Reviews({ feedback, avgRating }) {
    return (
        <div className="talent-card p-4 p-lg-5">
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="rating-summary text-center">
                        <div className="rating-number mb-2">
                            {avgRating ? avgRating.toFixed(1) : "—"}
                        </div>

                        <div className="d-flex justify-content-center rating mb-2">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <StarIcon
                                    key={n}
                                    filled={n <= Math.round(avgRating)}
                                    size={17}
                                />
                            ))}
                        </div>

                        <small
                            style={{
                                color: "var(--talent-muted)",
                            }}
                        >
                            {feedback.length} reviews
                        </small>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h2 className="section-title mb-1">
                                Learner reviews
                            </h2>

                            <span
                                style={{
                                    color: "var(--talent-muted)",
                                    fontSize: ".85rem",
                                }}
                            >
                                Feedback from people who took this course
                            </span>
                        </div>
                    </div>

                    {feedback.length === 0 ? (
                        <EmptyState
                            icon="commentSlash"
                            title="No reviews yet"
                            description="Learner feedback will appear here once students review this course."
                        />
                    ) : (
                        feedback.map((item) => (
                            <div key={item.id} className="review-item">
                                <div className="d-flex gap-3">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: 42,
                                            height: 42,
                                            background:
                                                "var(--talent-green-soft)",
                                            color: "var(--talent-green)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon name="user" size={18} />
                                    </div>

                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between gap-3">
                                            <strong>{item.name}</strong>

                                            <small
                                                style={{
                                                    color: "var(--talent-muted)",
                                                }}
                                            >
                                                {item.created_at_human}
                                            </small>
                                        </div>

                                        <Stars value={item.rating} />

                                        <p
                                            className="mb-0 mt-2"
                                            style={{
                                                color: "#525D69",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {item.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

function Stars({ value }) {
    return (
        <div
            className="d-inline-flex align-items-center gap-1 mt-1"
            style={{
                color: "var(--talent-warning)",
            }}
        >
            {[1, 2, 3, 4, 5].map((n) => (
                <StarIcon key={n} filled={n <= Number(value)} size={14} />
            ))}
        </div>
    );
}

/* ================================================================
   DETAILS
================================================================ */

function Details({ course }) {
    return (
        <div className="talent-card p-4 p-lg-5">
            <h2 className="section-title mb-4">Course information</h2>

            <div className="row g-3">
                <Detail label="Status" value={capitalize(course.status)} />

                <Detail
                    label="Level"
                    value={capitalize(course.level ?? "Beginner")}
                />

                <Detail
                    label="Category"
                    value={course.category?.name ?? "Uncategorized"}
                />

                <Detail label="Lessons" value={course.lessons?.length ?? 0} />

                <Detail
                    label="Learners"
                    value={course.enrollments_count ?? 0}
                />

                <Detail
                    label="Created"
                    value={course.created_at_human ?? "—"}
                />

                <Detail
                    label="Course type"
                    value={course.is_free ? "Free" : "Premium"}
                />

                <Detail label="Slug" value={course.slug ?? "—"} />
            </div>
        </div>
    );
}

function Detail({ label, value }) {
    return (
        <div className="col-md-6">
            <div className="detail-box">
                <div className="detail-label">{label}</div>

                <div className="detail-value">{value}</div>
            </div>
        </div>
    );
}

/* ================================================================
   AUTHOR
================================================================ */

function Author({ talent, course }) {
    return (
        <div className="row g-4">
            <div className="col-xl-8">
                <div className="talent-card p-4 p-lg-5">
                    <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                        <img
                            src={
                                talent?.image
                                    ? `/${talent.image}`
                                    : "/img/faces/face10.jpg"
                            }
                            alt={talent?.name}
                            className="instructor-avatar"
                        />

                        <div>
                            <div
                                style={{
                                    color: "var(--talent-muted)",
                                    fontSize: ".78rem",
                                }}
                            >
                                Course instructor
                            </div>

                            <h2
                                className="mb-1"
                                style={{
                                    fontWeight: 800,
                                    letterSpacing: "-.02em",
                                }}
                            >
                                {talent?.name ?? "Course Instructor"}
                            </h2>

                            <div
                                style={{
                                    color: "var(--talent-muted)",
                                    fontSize: ".9rem",
                                }}
                            >
                                {talent?.email ?? "Professional talent"}
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="instructor-stat">
                                <div
                                    style={{
                                        color: "var(--talent-muted)",
                                        fontSize: ".75rem",
                                    }}
                                >
                                    Learners
                                </div>

                                <div className="instructor-stat-value">
                                    {course.enrollments_count ?? 0}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="instructor-stat">
                                <div
                                    style={{
                                        color: "var(--talent-muted)",
                                        fontSize: ".75rem",
                                    }}
                                >
                                    Lessons
                                </div>

                                <div className="instructor-stat-value">
                                    {course.lessons?.length ?? 0}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="instructor-stat">
                                <div
                                    style={{
                                        color: "var(--talent-muted)",
                                        fontSize: ".75rem",
                                    }}
                                >
                                    Reviews
                                </div>

                                <div className="instructor-stat-value">
                                    {course.feedback?.length ?? 0}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4">
                <div className="talent-card p-4">
                    <h3 className="section-title mb-3">Instructor contact</h3>

                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Icon name="mail" size={16} className="text-success" />

                        <span
                            style={{
                                color: "var(--talent-muted)",
                                fontSize: ".88rem",
                            }}
                        >
                            {talent?.email ?? "—"}
                        </span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <Icon name="phone" size={16} className="text-success" />

                        <span
                            style={{
                                color: "var(--talent-muted)",
                                fontSize: ".88rem",
                            }}
                        >
                            {talent?.phone ?? "—"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================================================================
   EMPTY STATE
================================================================ */

function EmptyState({ icon, title, description }) {
    return (
        <div
            className="text-center py-5"
            style={{
                color: "var(--talent-muted)",
            }}
        >
            <div
                className="d-inline-flex align-items-center justify-content-center mb-3"
                style={{
                    width: 58,
                    height: 58,
                    borderRadius: 16,
                    background: "var(--talent-green-soft)",
                    color: "var(--talent-green)",
                }}
            >
                <Icon name={icon} size={27} />
            </div>

            <h5
                style={{
                    color: "var(--talent-black)",
                    fontWeight: 800,
                }}
            >
                {title}
            </h5>

            <p
                className="mb-0 mx-auto"
                style={{
                    maxWidth: 480,
                    lineHeight: 1.6,
                }}
            >
                {description}
            </p>
        </div>
    );
}

/* ================================================================
   ADD LESSON
================================================================ */

function AddLessonModal({ show, courseId, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_id: courseId,
        title: "",
        content: "",
        video_url: "",
        order: "",
    });

    if (!show) return null;

    function submit(e) {
        e.preventDefault();

        post(route("talent.courses.lessons.store"), {
            preserveScroll: true,

            onSuccess: () => {
                reset();
                onClose();
            },
        });
    }

    return (
        <ModalShell title="Add course lesson" onClose={onClose}>
            <LessonForm
                data={data}
                setData={setData}
                errors={errors}
                onSubmit={submit}
                onCancel={onClose}
                processing={processing}
                submitLabel="Add Lesson"
            />
        </ModalShell>
    );
}

/* ================================================================
   EDIT LESSON
================================================================ */

function EditLessonModal({ lesson, onClose }) {
    const { data, setData, put, processing, errors } = useForm({
        title: lesson?.title ?? "",
        content: lesson?.content ?? "",
        video_url: lesson?.video_url ?? "",
        order: lesson?.order ?? "",
    });

    if (!lesson) return null;

    function submit(e) {
        e.preventDefault();

        put(route("talent.courses.lessons.update", lesson.id), {
            preserveScroll: true,
            onSuccess: onClose,
        });
    }

    return (
        <ModalShell title="Edit lesson" onClose={onClose}>
            <LessonForm
                data={data}
                setData={setData}
                errors={errors}
                onSubmit={submit}
                onCancel={onClose}
                processing={processing}
                submitLabel="Update Lesson"
            />
        </ModalShell>
    );
}

/* ================================================================
   LESSON FORM
================================================================ */

function LessonForm({
    data,
    setData,
    errors,
    onSubmit,
    onCancel,
    processing,
    submitLabel,
}) {
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label fw-semibold">Lesson title</label>

                <input
                    type="text"
                    className={`form-control ${
                        errors.title ? "is-invalid" : ""
                    }`}
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    placeholder="e.g. Introduction to..."
                />

                {errors.title && (
                    <div className="invalid-feedback">{errors.title}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold">
                    Lesson description
                </label>

                <textarea
                    rows={4}
                    className={`form-control ${
                        errors.content ? "is-invalid" : ""
                    }`}
                    value={data.content}
                    onChange={(e) => setData("content", e.target.value)}
                    placeholder="Describe what learners will learn..."
                />

                {errors.content && (
                    <div className="invalid-feedback">{errors.content}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold">Video URL</label>

                <input
                    type="url"
                    className={`form-control ${
                        errors.video_url ? "is-invalid" : ""
                    }`}
                    value={data.video_url}
                    onChange={(e) => setData("video_url", e.target.value)}
                    placeholder="https://..."
                />

                {errors.video_url && (
                    <div className="invalid-feedback">{errors.video_url}</div>
                )}
            </div>

            <div className="mb-4">
                <label className="form-label fw-semibold">Lesson order</label>

                <input
                    type="number"
                    min="1"
                    className={`form-control ${
                        errors.order ? "is-invalid" : ""
                    }`}
                    value={data.order}
                    onChange={(e) => setData("order", e.target.value)}
                    placeholder="1"
                />

                {errors.order && (
                    <div className="invalid-feedback">{errors.order}</div>
                )}
            </div>

            <div className="d-flex justify-content-end gap-2">
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="btn btn-green"
                    disabled={processing}
                >
                    {processing ? "Saving..." : submitLabel}
                </button>
            </div>
        </form>
    );
}

/* ================================================================
   DELETE LESSON
================================================================ */

function DeleteLessonModal({ lesson, onCancel }) {
    if (!lesson) return null;

    function confirmDelete() {
        router.delete(route("talent.courses.lessons.destroy", lesson.id), {
            preserveScroll: true,
            onSuccess: onCancel,
        });
    }

    return (
        <ModalShell title="Delete lesson" onClose={onCancel} size="sm">
            <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#FEF2F2",
                    color: "#DC2626",
                }}
            >
                <Icon name="trash" size={23} />
            </div>

            <p
                className="text-center"
                style={{
                    color: "var(--talent-muted)",
                    lineHeight: 1.6,
                }}
            >
                Are you sure you want to delete{" "}
                <strong
                    style={{
                        color: "var(--talent-black)",
                    }}
                >
                    {lesson.title}
                </strong>
                ?
            </p>

            <div className="d-flex justify-content-center gap-2 mt-4">
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="button"
                    className="btn btn-danger rounded-3 px-4"
                    onClick={confirmDelete}
                >
                    Delete Lesson
                </button>
            </div>
        </ModalShell>
    );
}

/* ================================================================
   ADD REVIEW
================================================================ */

function AddReviewModal({ show, courseId, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_id: courseId,
        rating: 5,
        comment: "",
    });

    if (!show) return null;

    function submit(e) {
        e.preventDefault();

        post(route("admin.courses.feedback.store"), {
            preserveScroll: true,

            onSuccess: () => {
                reset();
                onClose();
            },
        });
    }

    return (
        <ModalShell title="Add learner review" onClose={onClose}>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label fw-semibold">Rating</label>

                    <input
                        type="number"
                        min="1"
                        max="5"
                        className={`form-control ${
                            errors.rating ? "is-invalid" : ""
                        }`}
                        value={data.rating}
                        onChange={(e) => setData("rating", e.target.value)}
                    />

                    {errors.rating && (
                        <div className="invalid-feedback">{errors.rating}</div>
                    )}
                </div>

                <div className="mb-4">
                    <label className="form-label fw-semibold">Review</label>

                    <textarea
                        rows={4}
                        className={`form-control ${
                            errors.comment ? "is-invalid" : ""
                        }`}
                        value={data.comment}
                        onChange={(e) => setData("comment", e.target.value)}
                        placeholder="Write learner feedback..."
                    />

                    {errors.comment && (
                        <div className="invalid-feedback">{errors.comment}</div>
                    )}
                </div>

                <div className="d-flex justify-content-end gap-2">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn btn-green"
                        disabled={processing}
                    >
                        {processing ? "Submitting..." : "Submit Review"}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ================================================================
   MODAL SHELL
================================================================ */

function ModalShell({ title, onClose, size, children }) {
    return (
        <div
            data-talent-course
            style={{
                position: "relative",
                zIndex: 9999,
            }}
        >
            <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                onClick={onClose}
            >
                <div
                    className={`modal-dialog modal-dialog-centered ${
                        size === "sm" ? "modal-sm" : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-content">
                        <div className="modal-header border-0 px-4 pt-4">
                            <h5
                                className="modal-title"
                                style={{
                                    fontWeight: 800,
                                    color: "var(--talent-black)",
                                }}
                            >
                                {title}
                            </h5>

                            <button
                                type="button"
                                className="icon-button"
                                onClick={onClose}
                                style={{
                                    width: 34,
                                    height: 34,
                                }}
                            >
                                <Icon name="x" size={16} />
                            </button>
                        </div>

                        <div className="modal-body p-4">{children}</div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show" onClick={onClose} />
        </div>
    );
}

/* ================================================================
   HELPERS
================================================================ */

function truncate(text, length) {
    if (!text) return "";

    return text.length > length ? text.slice(0, length) + "…" : text;
}

function capitalize(value) {
    if (!value) return "";

    return value.charAt(0).toUpperCase() + value.slice(1);
}
