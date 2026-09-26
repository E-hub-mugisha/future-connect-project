import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import {
    Head,
    Link,
    router,
    useForm,
} from "@inertiajs/react";

import AppLayout from "@/Layouts/AppLayout";

/* ==========================================================================
   HELPERS
=========================================================================== */

function getYoutubeVideoId(url) {
    if (!url) return null;

    try {
        const value = String(url).trim();

        const normalMatch = value.match(
            /(?:youtube\.com\/watch\?v=)([^&?/]+)/i
        );

        if (normalMatch?.[1]) {
            return normalMatch[1];
        }

        const shortMatch = value.match(
            /youtu\.be\/([^?&/]+)/i
        );

        if (shortMatch?.[1]) {
            return shortMatch[1];
        }

        const embedMatch = value.match(
            /youtube\.com\/embed\/([^?&/]+)/i
        );

        if (embedMatch?.[1]) {
            return embedMatch[1];
        }

        const shortsMatch = value.match(
            /youtube\.com\/shorts\/([^?&/]+)/i
        );

        if (shortsMatch?.[1]) {
            return shortsMatch[1];
        }

        return null;
    } catch {
        return null;
    }
}

function formatDuration(seconds) {
    const total = Math.max(
        0,
        Math.floor(Number(seconds) || 0)
    );

    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const secs = total % 60;

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(secs).padStart(2, "0")}`;
    }

    return `${minutes}:${String(secs).padStart(
        2,
        "0"
    )}`;
}

function getInitials(name) {
    if (!name) return "C";

    return String(name)
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase())
        .join("");
}

function limit(text, length = 160) {
    if (!text) return "";

    const value = String(text);

    if (value.length <= length) {
        return value;
    }

    return `${value.substring(0, length)}...`;
}

/* ==========================================================================
   ICONS
=========================================================================== */

const Icon = {
    Play: ({ size = 18 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l10-6.86a1 1 0 0 0 0-1.72l-10-6.86A1 1 0 0 0 8 5.14Z" />
        </svg>
    ),

    Lock: ({ size = 18 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect
                x="4"
                y="10"
                width="16"
                height="10"
                rx="2"
            />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
    ),

    Check: ({ size = 18 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 4 4L19 6" />
        </svg>
    ),

    Book: ({ size = 18 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22Z" />
            <path d="M4 5.5V22" />
        </svg>
    ),

    Users: ({ size = 18 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),

    Star: ({ size = 17, filled = false }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3Z" />
        </svg>
    ),

    ChevronDown: ({ size = 17 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    ),
};

/* ==========================================================================
   MAIN COMPONENT
=========================================================================== */

export default function Show({
    course,
    isEnrolled = false,
    auth,
}) {
    /* ----------------------------------------------------------------------
       STATES
    ---------------------------------------------------------------------- */

    const [previewOpen, setPreviewOpen] =
        useState(false);

    const [youtubeReady, setYoutubeReady] =
        useState(false);

    const [previewCurrentTime, setPreviewCurrentTime] =
        useState(0);

    const [previewEnded, setPreviewEnded] =
        useState(false);

    const [enrollPromptOpen, setEnrollPromptOpen] =
        useState(false);

    const [userIsEnrolled, setUserIsEnrolled] =
        useState(Boolean(isEnrolled));

    const [enrolling, setEnrolling] =
        useState(false);

    /* ----------------------------------------------------------------------
       REFS
    ---------------------------------------------------------------------- */

    const playerContainerRef = useRef(null);

    const playerRef = useRef(null);

    /* ----------------------------------------------------------------------
       COURSE DATA
    ---------------------------------------------------------------------- */

    const youtubeVideoId = useMemo(
        () => getYoutubeVideoId(course?.video),
        [course?.video]
    );

    const previewDurationSeconds = useMemo(
        () =>
            Math.max(
                0,
                Number(course?.preview_duration || 0)
            ),
        [course?.preview_duration]
    );

    const lessons = useMemo(() => {
        return [...(course?.lessons || [])].sort(
            (a, b) =>
                Number(a.order || 0) -
                Number(b.order || 0)
        );
    }, [course?.lessons]);

    const reviews = course?.reviews || [];

    const avgRating = useMemo(() => {
        if (!reviews.length) return 0;

        const total = reviews.reduce(
            (sum, review) =>
                sum + Number(review.rating || 0),
            0
        );

        return total / reviews.length;
    }, [reviews]);

    const enrolledCount = Number(
        course?.enrollments_count || 0
    );

    const previewPercentage = useMemo(() => {
        if (
            course?.is_free ||
            previewDurationSeconds <= 0
        ) {
            return 0;
        }

        return Math.min(
            100,
            Math.round(
                (previewCurrentTime /
                    previewDurationSeconds) *
                    100
            )
        );
    }, [
        course?.is_free,
        previewDurationSeconds,
        previewCurrentTime,
    ]);

    /* ----------------------------------------------------------------------
       ADD LESSON FORM
    ---------------------------------------------------------------------- */

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        course_id: course.id,
        title: "",
        content: "",
        video_url: "",
        order: lessons.length + 1,
    });

    /* ----------------------------------------------------------------------
       KEEP PROP + LOCAL ENROLLMENT STATE IN SYNC
    ---------------------------------------------------------------------- */

    useEffect(() => {
        setUserIsEnrolled(Boolean(isEnrolled));
    }, [isEnrolled]);

    /* ----------------------------------------------------------------------
       LOAD YOUTUBE IFRAME API
    ---------------------------------------------------------------------- */

    useEffect(() => {
        if (!previewOpen || !youtubeVideoId) {
            return;
        }

        if (window.YT?.Player) {
            setYoutubeReady(true);
            return;
        }

        const existingScript = document.querySelector(
            'script[src="https://www.youtube.com/iframe_api"]'
        );

        if (!existingScript) {
            const script =
                document.createElement("script");

            script.src =
                "https://www.youtube.com/iframe_api";

            script.async = true;

            document.body.appendChild(script);
        }

        const previousCallback =
            window.onYouTubeIframeAPIReady;

        window.onYouTubeIframeAPIReady = () => {
            if (previousCallback) {
                previousCallback();
            }

            setYoutubeReady(true);
        };

        return () => {
            window.onYouTubeIframeAPIReady =
                previousCallback;
        };
    }, [previewOpen, youtubeVideoId]);

    /* ----------------------------------------------------------------------
       CREATE YOUTUBE PLAYER
    ---------------------------------------------------------------------- */

    useEffect(() => {
        if (
            !previewOpen ||
            !youtubeReady ||
            !youtubeVideoId ||
            !playerContainerRef.current
        ) {
            return;
        }

        if (playerRef.current) {
            try {
                playerRef.current.destroy();
            } catch {}

            playerRef.current = null;
        }

        setPreviewCurrentTime(0);
        setPreviewEnded(false);

        playerContainerRef.current.innerHTML = "";

        const playerElement =
            document.createElement("div");

        playerContainerRef.current.appendChild(
            playerElement
        );

        playerRef.current =
            new window.YT.Player(playerElement, {
                videoId: youtubeVideoId,

                playerVars: {
                    autoplay: 1,
                    controls: 1,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                },

                events: {
                    onReady: (event) => {
                        try {
                            event.target.playVideo();
                        } catch {}
                    },
                },
            });

        return () => {
            if (playerRef.current) {
                try {
                    playerRef.current.destroy();
                } catch {}

                playerRef.current = null;
            }
        };
    }, [
        previewOpen,
        youtubeReady,
        youtubeVideoId,
    ]);

    /* ----------------------------------------------------------------------
       PREVIEW TIMER
    ---------------------------------------------------------------------- */

    useEffect(() => {
        if (
            !previewOpen ||
            !playerRef.current ||
            !youtubeVideoId
        ) {
            return;
        }

        const timer = setInterval(() => {
            try {
                if (
                    !playerRef.current ||
                    typeof playerRef.current
                        .getCurrentTime !==
                        "function"
                ) {
                    return;
                }

                const current =
                    Number(
                        playerRef.current.getCurrentTime()
                    ) || 0;

                setPreviewCurrentTime(current);

                /*
                |--------------------------------------------------------------------------
                | FREE COURSE
                |--------------------------------------------------------------------------
                */

                if (course?.is_free) {
                    return;
                }

                /*
                |--------------------------------------------------------------------------
                | ENROLLED USER
                |--------------------------------------------------------------------------
                */

                if (userIsEnrolled) {
                    return;
                }

                /*
                |--------------------------------------------------------------------------
                | PAID COURSE PREVIEW
                |--------------------------------------------------------------------------
                */

                if (
                    previewDurationSeconds > 0 &&
                    current >=
                        previewDurationSeconds
                ) {
                    playerRef.current.pauseVideo();

                    playerRef.current.seekTo(
                        previewDurationSeconds,
                        true
                    );

                    setPreviewCurrentTime(
                        previewDurationSeconds
                    );

                    setPreviewEnded(true);

                    setEnrollPromptOpen(true);
                }
            } catch {
                // Ignore player timing errors.
            }
        }, 250);

        return () => {
            clearInterval(timer);
        };
    }, [
        previewOpen,
        youtubeVideoId,
        course?.is_free,
        userIsEnrolled,
        previewDurationSeconds,
    ]);

    /* ----------------------------------------------------------------------
       OPEN PREVIEW
    ---------------------------------------------------------------------- */

    const openPreview = () => {
        if (!youtubeVideoId) {
            return;
        }

        setPreviewCurrentTime(0);
        setPreviewEnded(false);
        setEnrollPromptOpen(false);
        setPreviewOpen(true);
    };

    /* ----------------------------------------------------------------------
       CLOSE PREVIEW
    ---------------------------------------------------------------------- */

    const closePreview = () => {
        setPreviewOpen(false);
        setEnrollPromptOpen(false);

        if (playerRef.current) {
            try {
                playerRef.current.stopVideo();
                playerRef.current.destroy();
            } catch {}

            playerRef.current = null;
        }
    };

    /* ----------------------------------------------------------------------
       ENROLL
    ---------------------------------------------------------------------- */

    const enrollInCourse = () => {
        if (enrolling) {
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | LOGIN CHECK
        |--------------------------------------------------------------------------
        */

        if (!auth?.user) {
            router.visit(
                route("login"),
                {
                    preserveScroll: true,
                }
            );

            return;
        }

        setEnrolling(true);

        router.post(
            route("courses.enroll", course.id),
            {},
            {
                preserveScroll: true,

                onSuccess: () => {
                    /*
                    |--------------------------------------------------------------------------
                    | Unlock immediately
                    |--------------------------------------------------------------------------
                    */

                    setUserIsEnrolled(true);
                    setEnrollPromptOpen(false);
                    setPreviewEnded(false);

                    /*
                    |--------------------------------------------------------------------------
                    | Continue playing from current position
                    |--------------------------------------------------------------------------
                    */

                    if (playerRef.current) {
                        try {
                            playerRef.current.seekTo(
                                previewCurrentTime,
                                true
                            );

                            playerRef.current.playVideo();
                        } catch {}
                    }
                },

                onFinish: () => {
                    setEnrolling(false);
                },
            }
        );
    };

    /* ----------------------------------------------------------------------
       ADD LESSON
    ---------------------------------------------------------------------- */

    const submitLesson = (event) => {
        event.preventDefault();

        post(
            route(
                "admin.courses.lessons.store",
                {
                    course: course.id,
                }
            ),
            {
                preserveScroll: true,

                onSuccess: () => {
                    reset();

                    const modalEl =
                        document.getElementById(
                            "addLessonModal"
                        );

                    if (
                        modalEl &&
                        window.bootstrap?.Modal
                    ) {
                        const modal =
                            window.bootstrap.Modal.getInstance(
                                modalEl
                            );

                        modal?.hide();
                    }
                },
            }
        );
    };

    /* ----------------------------------------------------------------------
       DELETE LESSON
    ---------------------------------------------------------------------- */

    const deleteLesson = (lesson) => {
        if (
            !window.confirm(
                `Delete "${lesson.title}"?`
            )
        ) {
            return;
        }

        router.delete(
            route(
                "admin.courses.lessons.destroy",
                {
                    course: course.id,
                    lesson: lesson.id,
                }
            ),
            {
                preserveScroll: true,
            }
        );
    };

    /* ----------------------------------------------------------------------
       RENDER
    ---------------------------------------------------------------------- */

    return (
        <AppLayout>
            <Head
                title={`${course?.title || "Course"} · Course`}
            />

            <div className="course-page">
                <style>{`
                    .course-page {
                        min-height: 100vh;
                        background: #f7f8fa;
                        color: #1d1d1f;
                        font-family:
                            -apple-system,
                            BlinkMacSystemFont,
                            "SF Pro Display",
                            "SF Pro Text",
                            "Inter",
                            "Segoe UI",
                            sans-serif;
                        font-size: 13px;
                    }

                    .course-shell {
                        max-width: 1380px;
                        margin: 0 auto;
                        padding: 28px 24px 60px;
                    }

                    .course-breadcrumb {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        color: #86868b;
                        font-size: 12px;
                        margin-bottom: 18px;
                    }

                    .course-breadcrumb a {
                        color: #6e6e73;
                        text-decoration: none;
                    }

                    .course-breadcrumb a:hover {
                        color: #111;
                    }

                    .course-hero {
                        background: #fff;
                        border: 1px solid #e7e7e9;
                        border-radius: 20px;
                        padding: 30px;
                        box-shadow:
                            0 8px 30px rgba(
                                0,
                                0,
                                0,
                                .04
                            );
                    }

                    .course-label {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 6px 10px;
                        border-radius: 999px;
                        background: #f2f2f7;
                        color: #555;
                        font-size: 11px;
                        font-weight: 600;
                        letter-spacing: .01em;
                    }

                    .course-title {
                        font-size: clamp(
                            28px,
                            4vw,
                            44px
                        );
                        line-height: 1.08;
                        letter-spacing: -.035em;
                        font-weight: 700;
                        margin: 15px 0 12px;
                        max-width: 850px;
                    }

                    .course-description {
                        max-width: 800px;
                        color: #6e6e73;
                        font-size: 14px;
                        line-height: 1.7;
                        margin-bottom: 22px;
                    }

                    .course-meta {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 12px 20px;
                        color: #6e6e73;
                        font-size: 12px;
                    }

                    .course-meta-item {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                    }

                    .course-rating {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        color: #1d1d1f;
                        font-weight: 600;
                    }

                    .course-rating-stars {
                        display: inline-flex;
                        color: #f5a623;
                    }

                    .course-layout {
                        display: grid;
                        grid-template-columns:
                            minmax(0, 1fr)
                            350px;
                        gap: 24px;
                        margin-top: 24px;
                        align-items: start;
                    }

                    .course-card {
                        background: #fff;
                        border: 1px solid #e7e7e9;
                        border-radius: 18px;
                        overflow: hidden;
                    }

                    .course-card-body {
                        padding: 22px;
                    }

                    .video-preview {
                        position: relative;
                        background: #000;
                        aspect-ratio: 16 / 9;
                        overflow: hidden;
                    }

                    .video-preview iframe,
                    .video-preview > div {
                        width: 100%;
                        height: 100%;
                    }

                    .preview-placeholder {
                        aspect-ratio: 16 / 9;
                        background:
                            linear-gradient(
                                135deg,
                                #171717,
                                #292929
                            );
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        position: relative;
                    }

                    .preview-placeholder-content {
                        text-align: center;
                        max-width: 420px;
                        padding: 30px;
                    }

                    .preview-play {
                        width: 64px;
                        height: 64px;
                        border: 0;
                        border-radius: 50%;
                        background: #fff;
                        color: #111;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 16px;
                        box-shadow:
                            0 10px 30px
                            rgba(0,0,0,.2);
                        transition:
                            transform .2s ease;
                    }

                    .preview-play:hover {
                        transform: scale(1.04);
                    }

                    .preview-placeholder h3 {
                        font-size: 18px;
                        margin: 0 0 7px;
                        font-weight: 650;
                    }

                    .preview-placeholder p {
                        color: #b8b8b8;
                        font-size: 12px;
                        margin: 0;
                        line-height: 1.6;
                    }

                    .preview-bar {
                        padding: 12px 16px;
                        background: #fff;
                        border-top: 1px solid #e7e7e9;
                    }

                    .preview-progress {
                        height: 4px;
                        background: #ededed;
                        border-radius: 99px;
                        overflow: hidden;
                    }

                    .preview-progress-fill {
                        height: 100%;
                        background: #111;
                        transition: width .15s linear;
                    }

                    .preview-progress-meta {
                        display: flex;
                        justify-content: space-between;
                        gap: 10px;
                        margin-top: 7px;
                        font-size: 11px;
                        color: #86868b;
                    }

                    .section-heading {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        padding: 20px 22px;
                        border-bottom: 1px solid #ededed;
                    }

                    .section-heading h2 {
                        margin: 0;
                        font-size: 16px;
                        letter-spacing: -.015em;
                        font-weight: 650;
                    }

                    .section-heading span {
                        font-size: 11px;
                        color: #86868b;
                    }

                    .lesson-item {
                        display: flex;
                        align-items: center;
                        gap: 14px;
                        padding: 15px 22px;
                        border-bottom: 1px solid #f0f0f2;
                    }

                    .lesson-item:last-child {
                        border-bottom: 0;
                    }

                    .lesson-number {
                        width: 32px;
                        height: 32px;
                        flex: 0 0 32px;
                        border-radius: 9px;
                        background: #f2f2f7;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 11px;
                        font-weight: 600;
                        color: #555;
                    }

                    .lesson-content {
                        min-width: 0;
                        flex: 1;
                    }

                    .lesson-title {
                        font-size: 13px;
                        font-weight: 600;
                        margin-bottom: 4px;
                    }

                    .lesson-description {
                        font-size: 11px;
                        color: #86868b;
                        line-height: 1.5;
                    }

                    .lesson-actions {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }

                    .course-sidebar {
                        position: sticky;
                        top: 20px;
                    }

                    .price-card {
                        padding: 24px;
                    }

                    .price-label {
                        color: #86868b;
                        font-size: 11px;
                        margin-bottom: 5px;
                    }

                    .price {
                        font-size: 30px;
                        line-height: 1;
                        letter-spacing: -.03em;
                        font-weight: 700;
                        margin-bottom: 18px;
                    }

                    .price.free {
                        color: #16803c;
                    }

                    .primary-button {
                        width: 100%;
                        border: 0;
                        border-radius: 11px;
                        padding: 12px 16px;
                        background: #111;
                        color: #fff;
                        font-size: 12px;
                        font-weight: 600;
                        transition:
                            opacity .2s ease,
                            transform .2s ease;
                    }

                    .primary-button:hover {
                        opacity: .9;
                        transform: translateY(-1px);
                    }

                    .secondary-button {
                        width: 100%;
                        border: 1px solid #dedee2;
                        border-radius: 11px;
                        padding: 11px 16px;
                        background: #fff;
                        color: #1d1d1f;
                        font-size: 12px;
                        font-weight: 600;
                    }

                    .feature-list {
                        margin-top: 22px;
                        padding-top: 20px;
                        border-top: 1px solid #ededed;
                    }

                    .feature-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 10px;
                        padding: 7px 0;
                        color: #555;
                        font-size: 12px;
                        line-height: 1.5;
                    }

                    .feature-item svg {
                        color: #16803c;
                        flex: 0 0 auto;
                        margin-top: 1px;
                    }

                    .instructor-card {
                        padding: 20px;
                    }

                    .instructor {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }

                    .avatar {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: #f2f2f7;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 650;
                        font-size: 12px;
                    }

                    .instructor-name {
                        font-size: 13px;
                        font-weight: 600;
                    }

                    .instructor-role {
                        color: #86868b;
                        font-size: 11px;
                        margin-top: 3px;
                    }

                    .modal-backdrop-custom {
                        position: fixed;
                        inset: 0;
                        background:
                            rgba(0,0,0,.55);
                        z-index: 1080;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                    }

                    .preview-modal {
                        width: min(
                            100%,
                            1000px
                        );
                        background: #fff;
                        border-radius: 18px;
                        overflow: hidden;
                        box-shadow:
                            0 30px 80px
                            rgba(0,0,0,.25);
                    }

                    .preview-modal-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 15px 18px;
                        border-bottom: 1px solid #ededed;
                    }

                    .preview-modal-title {
                        font-size: 13px;
                        font-weight: 650;
                    }

                    .preview-close {
                        border: 0;
                        background: #f2f2f7;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        font-size: 18px;
                        line-height: 1;
                    }

                    .enroll-overlay {
                        position: absolute;
                        inset: 0;
                        background:
                            rgba(0,0,0,.7);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 25px;
                        z-index: 5;
                    }

                    .enroll-box {
                        width: min(
                            100%,
                            410px
                        );
                        background: #fff;
                        border-radius: 16px;
                        padding: 28px;
                        text-align: center;
                        box-shadow:
                            0 20px 60px
                            rgba(0,0,0,.25);
                    }

                    .enroll-icon {
                        width: 46px;
                        height: 46px;
                        border-radius: 13px;
                        background: #f2f2f7;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 14px;
                    }

                    .enroll-box h3 {
                        margin: 0 0 8px;
                        font-size: 19px;
                        letter-spacing: -.02em;
                    }

                    .enroll-box p {
                        margin: 0 0 18px;
                        color: #6e6e73;
                        font-size: 12px;
                        line-height: 1.65;
                    }

                    .enroll-actions {
                        display: flex;
                        gap: 8px;
                    }

                    .enroll-actions button {
                        flex: 1;
                    }

                    @media (max-width: 991px) {
                        .course-layout {
                            grid-template-columns: 1fr;
                        }

                        .course-sidebar {
                            position: static;
                        }
                    }

                    @media (max-width: 576px) {
                        .course-shell {
                            padding: 18px 14px 40px;
                        }

                        .course-hero {
                            padding: 20px;
                            border-radius: 15px;
                        }

                        .course-title {
                            font-size: 29px;
                        }

                        .course-layout {
                            margin-top: 16px;
                        }

                        .course-card {
                            border-radius: 15px;
                        }

                        .enroll-actions {
                            flex-direction: column;
                        }
                    }
                `}</style>

                <div className="course-shell">

                    {/* ======================================================
                       BREADCRUMB
                    ====================================================== */}

                    <div className="course-breadcrumb">
                        <Link href={route("admin.courses.index")}>
                            Courses
                        </Link>

                        <span>/</span>

                        <span>{course.title}</span>
                    </div>

                    {/* ======================================================
                       HERO
                    ====================================================== */}

                    <section className="course-hero">
                        <div className="course-label">
                            <Icon.Book size={13} />

                            {course.category?.name ||
                                "Course"}
                        </div>

                        <h1 className="course-title">
                            {course.title}
                        </h1>

                        <p className="course-description">
                            {limit(
                                course.description,
                                400
                            )}
                        </p>

                        <div className="course-meta">

                            <div className="course-meta-item">
                                <Icon.Users size={15} />

                                {enrolledCount} enrolled
                            </div>

                            <div className="course-meta-item">
                                <Icon.Book size={15} />

                                {lessons.length} lessons
                            </div>

                            <div className="course-rating">
                                <span className="course-rating-stars">
                                    <Icon.Star
                                        size={15}
                                        filled
                                    />
                                </span>

                                {avgRating
                                    ? avgRating.toFixed(
                                          1
                                      )
                                    : "New"}

                                {reviews.length > 0 && (
                                    <span>
                                        (
                                        {
                                            reviews.length
                                        }
                                        )
                                    </span>
                                )}
                            </div>

                            {course.is_free ? (
                                <span className="badge text-bg-success">
                                    Free
                                </span>
                            ) : (
                                <strong>
                                    {Number(
                                        course.price || 0
                                    ).toLocaleString()}{" "}
                                    RWF
                                </strong>
                            )}
                        </div>
                    </section>

                    {/* ======================================================
                       MAIN CONTENT
                    ====================================================== */}

                    <div className="course-layout">

                        {/* ==================================================
                           LEFT
                        ================================================== */}

                        <div>

                            {/* ==================================================
                               VIDEO
                            ================================================== */}

                            <div className="course-card mb-4">

                                {!previewOpen ? (
                                    <div className="preview-placeholder">

                                        <div className="preview-placeholder-content">

                                            <button
                                                type="button"
                                                className="preview-play"
                                                onClick={
                                                    openPreview
                                                }
                                                disabled={
                                                    !youtubeVideoId
                                                }
                                            >
                                                <Icon.Play
                                                    size={
                                                        25
                                                    }
                                                />
                                            </button>

                                            <h3>
                                                Watch course
                                                preview
                                            </h3>

                                            <p>
                                                {course.is_free
                                                    ? "Preview the course video."
                                                    : previewDurationSeconds >
                                                        0
                                                      ? `Watch the first ${formatDuration(
                                                            previewDurationSeconds
                                                        )} free. Enroll to continue watching.`
                                                      : "Enroll to access the course video."}
                                            </p>

                                        </div>

                                    </div>
                                ) : (
                                    <>
                                        <div
                                            className="video-preview"
                                            style={{
                                                position:
                                                    "relative",
                                            }}
                                        >
                                            <div
                                                ref={
                                                    playerContainerRef
                                                }
                                            />

                                            {previewEnded &&
                                                !userIsEnrolled && (
                                                    <div className="enroll-overlay">

                                                        <div className="enroll-box">

                                                            <div className="enroll-icon">
                                                                <Icon.Lock
                                                                    size={
                                                                        21
                                                                    }
                                                                />
                                                            </div>

                                                            <h3>
                                                                Preview
                                                                finished
                                                            </h3>

                                                            <p>
                                                                You have
                                                                watched
                                                                the free
                                                                preview.
                                                                Enroll in
                                                                this course
                                                                to continue
                                                                watching the
                                                                complete
                                                                video.
                                                            </p>

                                                            <div className="enroll-actions">

                                                                <button
                                                                    type="button"
                                                                    className="secondary-button"
                                                                    onClick={() =>
                                                                        setEnrollPromptOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    Continue
                                                                    browsing
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="primary-button"
                                                                    onClick={
                                                                        enrollInCourse
                                                                    }
                                                                    disabled={
                                                                        enrolling
                                                                    }
                                                                >
                                                                    {enrolling
                                                                        ? "Enrolling..."
                                                                        : "Enroll now"}
                                                                </button>

                                                            </div>

                                                        </div>

                                                    </div>
                                                )}
                                        </div>

                                        {!course.is_free &&
                                            !userIsEnrolled &&
                                            previewDurationSeconds >
                                                0 && (
                                                <div className="preview-bar">

                                                    <div className="preview-progress">
                                                        <div
                                                            className="preview-progress-fill"
                                                            style={{
                                                                width: `${previewPercentage}%`,
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="preview-progress-meta">
                                                        <span>
                                                            Preview
                                                        </span>

                                                        <span>
                                                            {
                                                                formatDuration(
                                                                    previewCurrentTime
                                                                )
                                                            }{" "}
                                                            /{" "}
                                                            {
                                                                formatDuration(
                                                                    previewDurationSeconds
                                                                )
                                                            }
                                                        </span>
                                                    </div>

                                                </div>
                                            )}
                                    </>
                                )}

                                {previewOpen && (
                                    <div className="course-card-body">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <div>
                                                <div
                                                    className="fw-semibold"
                                                    style={{
                                                        fontSize:
                                                            "13px",
                                                    }}
                                                >
                                                    Course preview
                                                </div>

                                                <div
                                                    className="text-muted"
                                                    style={{
                                                        fontSize:
                                                            "11px",
                                                    }}
                                                >
                                                    {userIsEnrolled
                                                        ? "Full course access unlocked"
                                                        : course.is_free
                                                          ? "Free course"
                                                          : "Free preview"}
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                className="btn btn-sm btn-light border"
                                                onClick={
                                                    closePreview
                                                }
                                            >
                                                Close
                                            </button>

                                        </div>

                                    </div>
                                )}
                            </div>

                            {/* ==================================================
                               LESSONS
                            ================================================== */}

                            <div className="course-card mb-4">

                                <div className="section-heading">

                                    <div>
                                        <h2>
                                            Course content
                                        </h2>

                                        <span>
                                            Structured learning
                                            materials
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-sm btn-dark"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addLessonModal"
                                    >
                                        Add lesson
                                    </button>

                                </div>

                                {lessons.length > 0 ? (
                                    lessons.map(
                                        (
                                            lesson,
                                            index
                                        ) => (
                                            <div
                                                className="lesson-item"
                                                key={
                                                    lesson.id
                                                }
                                            >

                                                <div className="lesson-number">
                                                    {index +
                                                        1}
                                                </div>

                                                <div className="lesson-content">

                                                    <div className="lesson-title">
                                                        {
                                                            lesson.title
                                                        }
                                                    </div>

                                                    {lesson.content && (
                                                        <div className="lesson-description">
                                                            {limit(
                                                                lesson.content,
                                                                130
                                                            )}
                                                        </div>
                                                    )}

                                                </div>

                                                <div className="lesson-actions">

                                                    {lesson.video_url && (
                                                        <a
                                                            href={
                                                                lesson.video_url
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="btn btn-sm btn-light"
                                                        >
                                                            <Icon.Play
                                                                size={
                                                                    13
                                                                }
                                                            />
                                                        </a>
                                                    )}

                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() =>
                                                            deleteLesson(
                                                                lesson
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>

                                                </div>

                                            </div>
                                        )
                                    )
                                ) : (
                                    <div className="p-5 text-center text-muted">
                                        No lessons have been
                                        added yet.
                                    </div>
                                )}

                            </div>

                            {/* ==================================================
                               DESCRIPTION
                            ================================================== */}

                            <div className="course-card">

                                <div className="section-heading">
                                    <h2>
                                        About this course
                                    </h2>
                                </div>

                                <div className="course-card-body">

                                    <div
                                        style={{
                                            fontSize:
                                                "13px",
                                            lineHeight:
                                                "1.8",
                                            color:
                                                "#555",
                                            whiteSpace:
                                                "pre-line",
                                        }}
                                    >
                                        {
                                            course.description
                                        }
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ==================================================
                           SIDEBAR
                        ================================================== */}

                        <aside className="course-sidebar">

                            {/* PRICE */}
                            <div className="course-card mb-3">

                                <div className="price-card">

                                    <div className="price-label">
                                        Course access
                                    </div>

                                    {course.is_free ? (
                                        <div className="price free">
                                            Free
                                        </div>
                                    ) : (
                                        <div className="price">
                                            {Number(
                                                course.price ||
                                                    0
                                            ).toLocaleString()}{" "}
                                            RWF
                                        </div>
                                    )}

                                    {!userIsEnrolled && (
                                        <>
                                            {!course.is_free && (
                                                <button
                                                    type="button"
                                                    className="primary-button mb-2"
                                                    onClick={
                                                        enrollInCourse
                                                    }
                                                    disabled={
                                                        enrolling
                                                    }
                                                >
                                                    {enrolling
                                                        ? "Enrolling..."
                                                        : "Enroll in course"}
                                                </button>
                                            )}

                                            <button
                                                type="button"
                                                className="secondary-button"
                                                onClick={
                                                    openPreview
                                                }
                                                disabled={
                                                    !youtubeVideoId
                                                }
                                            >
                                                <Icon.Play
                                                    size={14}
                                                />{" "}
                                                Watch preview
                                            </button>
                                        </>
                                    )}

                                    {userIsEnrolled && (
                                        <div className="alert alert-success mb-0 py-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <Icon.Check
                                                    size={
                                                        16
                                                    }
                                                />

                                                <span
                                                    style={{
                                                        fontSize:
                                                            "12px",
                                                    }}
                                                >
                                                    You are enrolled
                                                    in this course.
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="feature-list">

                                        <div className="feature-item">
                                            <Icon.Check
                                                size={
                                                    15
                                                }
                                            />

                                            Full course video
                                            access
                                        </div>

                                        <div className="feature-item">
                                            <Icon.Check
                                                size={
                                                    15
                                                }
                                            />

                                            {lessons.length} structured
                                            lessons
                                        </div>

                                        <div className="feature-item">
                                            <Icon.Check
                                                size={
                                                    15
                                                }
                                            />

                                            Track your course
                                            progress
                                        </div>

                                        <div className="feature-item">
                                            <Icon.Check
                                                size={
                                                    15
                                                }
                                            />

                                            Access from your
                                            account
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* INSTRUCTOR */}
                            <div className="course-card">

                                <div className="instructor-card">

                                    <div
                                        className="text-muted mb-3"
                                        style={{
                                            fontSize:
                                                "11px",
                                        }}
                                    >
                                        Instructor
                                    </div>

                                    <div className="instructor">

                                        <div className="avatar">
                                            {getInitials(
                                                course
                                                    ?.instructor
                                                    ?.name
                                            )}
                                        </div>

                                        <div>
                                            <div className="instructor-name">
                                                {
                                                    course
                                                        ?.instructor
                                                        ?.name
                                                }
                                            </div>

                                            <div className="instructor-role">
                                                Course instructor
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </aside>

                    </div>
                </div>

                {/* ==========================================================
                   ADD LESSON MODAL
                =========================================================== */}

                <div
                    className="modal fade"
                    id="addLessonModal"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg">

                            <form
                                onSubmit={
                                    submitLesson
                                }
                            >

                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        style={{
                                            fontSize:
                                                "15px",
                                            fontWeight:
                                                650,
                                        }}
                                    >
                                        Add lesson
                                    </h5>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                    />
                                </div>

                                <div className="modal-body">

                                    <div className="mb-3">

                                        <label className="form-label small fw-semibold">
                                            Lesson title
                                        </label>

                                        <input
                                            type="text"
                                            className={`form-control ${
                                                errors.title
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            value={
                                                data.title
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "title",
                                                    e
                                                        .target
                                                        .value
                                                )
                                            }
                                            placeholder="Enter lesson title"
                                        />

                                        {errors.title && (
                                            <div className="invalid-feedback">
                                                {
                                                    errors.title
                                                }
                                            </div>
                                        )}

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label small fw-semibold">
                                            Content
                                        </label>

                                        <textarea
                                            className={`form-control ${
                                                errors.content
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            rows="4"
                                            value={
                                                data.content
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "content",
                                                    e
                                                        .target
                                                        .value
                                                )
                                            }
                                            placeholder="Describe this lesson..."
                                        />

                                        {errors.content && (
                                            <div className="invalid-feedback">
                                                {
                                                    errors.content
                                                }
                                            </div>
                                        )}

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label small fw-semibold">
                                            Video URL
                                        </label>

                                        <input
                                            type="url"
                                            className={`form-control ${
                                                errors.video_url
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            value={
                                                data.video_url
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "video_url",
                                                    e
                                                        .target
                                                        .value
                                                )
                                            }
                                            placeholder="https://youtube.com/..."
                                        />

                                        {errors.video_url && (
                                            <div className="invalid-feedback">
                                                {
                                                    errors.video_url
                                                }
                                            </div>
                                        )}

                                    </div>

                                    <div>

                                        <label className="form-label small fw-semibold">
                                            Lesson order
                                        </label>

                                        <input
                                            type="number"
                                            min="1"
                                            className={`form-control ${
                                                errors.order
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            value={
                                                data.order
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "order",
                                                    Number(
                                                        e
                                                            .target
                                                            .value
                                                    )
                                                )
                                            }
                                        />

                                        {errors.order && (
                                            <div className="invalid-feedback">
                                                {
                                                    errors.order
                                                }
                                            </div>
                                        )}

                                    </div>

                                </div>

                                <div className="modal-footer">

                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-dark"
                                        disabled={
                                            processing
                                        }
                                    >
                                        {processing
                                            ? "Saving..."
                                            : "Add lesson"}
                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}