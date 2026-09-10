// resources/js/Pages/Talent/Courses/Index.jsx

import { Head, Link, router } from "@inertiajs/react";
import { useMemo, useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function CoursesIndex({ courses = [] }) {
    const [query, setQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const [viewMode, setViewMode] = useState("grid");
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [menuOpen, setMenuOpen] = useState(null);

    const categories = useMemo(() => {
        const values = courses
            .map((course) => course.category?.name)
            .filter(Boolean);

        return [...new Set(values)];
    }, [courses]);

    const stats = useMemo(() => {
        const published = courses.filter(
            (course) => course.status === "published"
        );

        const drafts = courses.filter(
            (course) => course.status !== "published"
        );

        const enrollments = courses.reduce(
            (total, course) => total + Number(course.enrollments_count ?? 0),
            0
        );

        const ratings = courses
            .map((course) => Number(course.feedback_avg_rating ?? 0))
            .filter((rating) => rating > 0);

        const averageRating =
            ratings.length > 0
                ? ratings.reduce((a, b) => a + b, 0) / ratings.length
                : 0;

        const revenue = courses.reduce((total, course) => {
            if (course.is_free) return total;

            return (
                total +
                Number(course.price ?? 0) *
                    Number(course.enrollments_count ?? 0)
            );
        }, 0);

        return {
            total: courses.length,
            published: published.length,
            drafts: drafts.length,
            enrollments,
            averageRating,
            revenue,
        };
    }, [courses]);

    const filteredCourses = useMemo(() => {
        let result = courses.filter((course) => {
            const matchesSearch =
                course.title
                    ?.toLowerCase()
                    .includes(query.toLowerCase()) ||
                course.category?.name
                    ?.toLowerCase()
                    .includes(query.toLowerCase());

            const matchesStatus =
                statusFilter === "all" ||
                course.status === statusFilter;

            const matchesCategory =
                categoryFilter === "all" ||
                course.category?.name === categoryFilter;

            return matchesSearch && matchesStatus && matchesCategory;
        });

        result = [...result].sort((a, b) => {
            switch (sortBy) {
                case "learners":
                    return (
                        Number(b.enrollments_count ?? 0) -
                        Number(a.enrollments_count ?? 0)
                    );

                case "rating":
                    return (
                        Number(b.feedback_avg_rating ?? 0) -
                        Number(a.feedback_avg_rating ?? 0)
                    );

                case "price":
                    return (
                        Number(b.price ?? 0) -
                        Number(a.price ?? 0)
                    );

                case "title":
                    return (a.title || "").localeCompare(b.title || "");

                default:
                    return Number(b.id ?? 0) - Number(a.id ?? 0);
            }
        });

        return result;
    }, [
        courses,
        query,
        statusFilter,
        categoryFilter,
        sortBy,
    ]);

    const topCourse = useMemo(() => {
        if (!courses.length) return null;

        return [...courses].sort(
            (a, b) =>
                Number(b.enrollments_count ?? 0) -
                Number(a.enrollments_count ?? 0)
        )[0];
    }, [courses]);

    function confirmDelete() {
        if (!deleteTarget) return;

        router.delete(
            route("talent.courses.destroy", deleteTarget.id),
            {
                preserveScroll: true,
                onSuccess: () => setDeleteTarget(null),
            }
        );
    }

    return (
        <AppLayout>
            <Head title="Talent Studio — Courses" />

            <div className="talent-studio">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

                    :root {
                        --talent-green: #00a667;
                        --talent-green-dark: #008653;
                        --talent-green-soft: #e9f8f1;
                        --talent-black: #0b0d0f;
                        --talent-text: #111827;
                        --talent-muted: #6b7280;
                        --talent-border: #e8ecea;
                        --talent-bg: #f7f9f8;
                        --talent-white: #ffffff;
                    }

                    .talent-studio {
                        min-height: 100vh;
                        background: var(--talent-bg);
                        color: var(--talent-text);
                        font-family: "DM Sans", sans-serif;
                    }

                    .talent-studio h1,
                    .talent-studio h2,
                    .talent-studio h3,
                    .talent-studio h4,
                    .talent-studio h5,
                    .talent-studio h6 {
                        font-family: "Space Grotesk", sans-serif;
                    }

                    .studio-container {
                        max-width: 1380px;
                        margin: auto;
                        padding: 28px;
                    }

                    .hero {
                        position: relative;
                        overflow: hidden;
                        border-radius: 24px;
                        background: var(--talent-black);
                        color: white;
                        padding: 34px;
                        margin-bottom: 24px;
                    }

                    .hero::after {
                        content: "";
                        position: absolute;
                        width: 260px;
                        height: 260px;
                        border-radius: 50%;
                        background: rgba(0, 166, 103, .18);
                        right: -80px;
                        top: -100px;
                    }

                    .hero-content {
                        position: relative;
                        z-index: 2;
                    }

                    .eyebrow {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 7px 11px;
                        border-radius: 999px;
                        background: rgba(255,255,255,.08);
                        color: #b9f1d8;
                        font-size: 12px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: .08em;
                    }

                    .hero-title {
                        font-size: clamp(28px, 4vw, 44px);
                        line-height: 1.05;
                        margin: 15px 0 10px;
                        max-width: 680px;
                    }

                    .hero-description {
                        color: rgba(255,255,255,.66);
                        max-width: 620px;
                        margin-bottom: 24px;
                    }

                    .hero-actions {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .btn-primary-talent {
                        background: var(--talent-green);
                        border: 1px solid var(--talent-green);
                        color: white;
                        border-radius: 12px;
                        padding: 11px 17px;
                        font-weight: 700;
                        text-decoration: none;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        transition: .2s;
                    }

                    .btn-primary-talent:hover {
                        background: #00b873;
                        color: white;
                        transform: translateY(-1px);
                    }

                    .btn-ghost-talent {
                        background: rgba(255,255,255,.07);
                        border: 1px solid rgba(255,255,255,.14);
                        color: white;
                        border-radius: 12px;
                        padding: 11px 17px;
                        font-weight: 600;
                        text-decoration: none;
                    }

                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        gap: 14px;
                        margin-bottom: 24px;
                    }

                    .stat-card {
                        background: white;
                        border: 1px solid var(--talent-border);
                        border-radius: 18px;
                        padding: 18px;
                        min-height: 125px;
                        transition: .2s;
                    }

                    .stat-card:hover {
                        transform: translateY(-2px);
                        border-color: #cfd8d4;
                    }

                    .stat-top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 15px;
                    }

                    .stat-icon {
                        width: 38px;
                        height: 38px;
                        border-radius: 11px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--talent-green-soft);
                        color: var(--talent-green);
                    }

                    .stat-label {
                        color: var(--talent-muted);
                        font-size: 12px;
                        font-weight: 600;
                    }

                    .stat-value {
                        font-family: "Space Grotesk";
                        font-size: 25px;
                        font-weight: 700;
                    }

                    .dashboard-grid {
                        display: grid;
                        grid-template-columns: 1.7fr 1fr;
                        gap: 18px;
                        margin-bottom: 24px;
                    }

                    .panel {
                        background: white;
                        border: 1px solid var(--talent-border);
                        border-radius: 20px;
                        padding: 22px;
                    }

                    .panel-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 15px;
                        margin-bottom: 18px;
                    }

                    .panel-title {
                        margin: 0;
                        font-size: 17px;
                        font-weight: 700;
                    }

                    .panel-subtitle {
                        color: var(--talent-muted);
                        font-size: 12px;
                        margin-top: 3px;
                    }

                    .featured-course {
                        display: flex;
                        align-items: center;
                        gap: 18px;
                    }

                    .featured-thumb {
                        width: 125px;
                        height: 82px;
                        border-radius: 13px;
                        object-fit: cover;
                        flex-shrink: 0;
                        background: var(--talent-bg);
                    }

                    .featured-title {
                        font-size: 17px;
                        font-weight: 700;
                        margin-bottom: 7px;
                    }

                    .featured-meta {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 12px;
                        color: var(--talent-muted);
                        font-size: 12px;
                    }

                    .progress-wrap {
                        margin-top: 14px;
                    }

                    .progress-label {
                        display: flex;
                        justify-content: space-between;
                        font-size: 11px;
                        color: var(--talent-muted);
                        margin-bottom: 6px;
                    }

                    .progress {
                        height: 7px;
                        background: #edf1ef;
                        border-radius: 99px;
                        overflow: hidden;
                    }

                    .progress-bar {
                        height: 100%;
                        background: var(--talent-green);
                        border-radius: 99px;
                    }

                    .tips {
                        display: flex;
                        flex-direction: column;
                        gap: 11px;
                    }

                    .tip {
                        display: flex;
                        gap: 11px;
                        padding: 12px;
                        border-radius: 13px;
                        background: #f8faf9;
                    }

                    .tip-icon {
                        color: var(--talent-green);
                        flex-shrink: 0;
                    }

                    .tip-title {
                        font-size: 13px;
                        font-weight: 700;
                        margin-bottom: 2px;
                    }

                    .tip-text {
                        font-size: 11px;
                        color: var(--talent-muted);
                        line-height: 1.45;
                    }

                    .toolbar {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        gap: 12px;
                        margin-bottom: 18px;
                    }

                    .search-box {
                        position: relative;
                        width: 320px;
                    }

                    .search-box input {
                        width: 100%;
                        height: 43px;
                        border-radius: 12px;
                        border: 1px solid var(--talent-border);
                        padding: 0 14px 0 40px;
                        background: white;
                        outline: none;
                        font-size: 13px;
                    }

                    .search-box input:focus {
                        border-color: var(--talent-green);
                        box-shadow: 0 0 0 3px rgba(0,166,103,.10);
                    }

                    .search-icon {
                        position: absolute;
                        left: 14px;
                        top: 50%;
                        transform: translateY(-50%);
                        color: var(--talent-muted);
                    }

                    .filters {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                    }

                    .filter-select {
                        height: 43px;
                        border: 1px solid var(--talent-border);
                        border-radius: 12px;
                        background: white;
                        padding: 0 12px;
                        color: #374151;
                        font-size: 12px;
                        outline: none;
                    }

                    .view-switch {
                        display: flex;
                        align-items: center;
                        border: 1px solid var(--talent-border);
                        background: white;
                        border-radius: 12px;
                        overflow: hidden;
                    }

                    .view-button {
                        border: 0;
                        background: transparent;
                        width: 40px;
                        height: 41px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--talent-muted);
                    }

                    .view-button.active {
                        background: var(--talent-green-soft);
                        color: var(--talent-green);
                    }

                    .courses-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: end;
                        margin-bottom: 15px;
                    }

                    .courses-title {
                        font-size: 22px;
                        margin: 0;
                    }

                    .courses-count {
                        color: var(--talent-muted);
                        font-size: 12px;
                    }

                    .course-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 16px;
                    }

                    .course-list {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }

                    .course-card {
                        overflow: hidden;
                        background: white;
                        border: 1px solid var(--talent-border);
                        border-radius: 18px;
                        transition: .2s;
                    }

                    .course-card:hover {
                        transform: translateY(-3px);
                        border-color: #ccd6d1;
                        box-shadow: 0 12px 30px rgba(0,0,0,.05);
                    }

                    .course-list .course-card {
                        display: flex;
                    }

                    .course-list .course-image-wrap {
                        width: 220px;
                        flex-shrink: 0;
                    }

                    .course-list .course-image {
                        height: 100%;
                        min-height: 150px;
                    }

                    .course-image-wrap {
                        position: relative;
                    }

                    .course-image {
                        width: 100%;
                        height: 150px;
                        object-fit: cover;
                        background: #eef3f0;
                        display: block;
                    }

                    .course-placeholder {
                        height: 150px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(
                            135deg,
                            #edf8f3,
                            #f6f8f7
                        );
                        color: var(--talent-green);
                    }

                    .status-badge {
                        position: absolute;
                        right: 10px;
                        top: 10px;
                        padding: 5px 9px;
                        border-radius: 999px;
                        font-size: 10px;
                        font-weight: 700;
                        background: white;
                        box-shadow: 0 4px 15px rgba(0,0,0,.08);
                    }

                    .status-published {
                        color: var(--talent-green-dark);
                    }

                    .status-draft {
                        color: #8a6500;
                    }

                    .course-body {
                        padding: 15px;
                    }

                    .course-category {
                        display: inline-flex;
                        padding: 5px 8px;
                        border-radius: 7px;
                        background: #f2f5f3;
                        color: #4b5563;
                        font-size: 10px;
                        font-weight: 600;
                        margin-bottom: 9px;
                    }

                    .course-title {
                        font-size: 15px;
                        line-height: 1.3;
                        font-weight: 700;
                        margin: 0 0 10px;
                    }

                    .course-meta {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                        color: var(--talent-muted);
                        font-size: 10px;
                        margin-bottom: 12px;
                    }

                    .course-meta span {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                    }

                    .course-footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 8px;
                    }

                    .price {
                        font-size: 14px;
                        font-weight: 800;
                    }

                    .free-badge {
                        color: var(--talent-green-dark);
                        background: var(--talent-green-soft);
                        padding: 5px 8px;
                        border-radius: 7px;
                        font-size: 10px;
                        font-weight: 700;
                    }

                    .course-actions {
                        display: flex;
                        gap: 6px;
                    }

                    .small-action {
                        border: 1px solid var(--talent-border);
                        background: white;
                        color: #374151;
                        border-radius: 8px;
                        padding: 6px 8px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                    }

                    .small-action:hover {
                        color: var(--talent-green);
                        border-color: #bfe8d5;
                        background: var(--talent-green-soft);
                    }

                    .menu-wrapper {
                        position: relative;
                    }

                    .menu-button {
                        border: 1px solid var(--talent-border);
                        width: 30px;
                        height: 30px;
                        border-radius: 8px;
                        background: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .dropdown {
                        position: absolute;
                        right: 0;
                        top: 35px;
                        width: 150px;
                        background: white;
                        border: 1px solid var(--talent-border);
                        border-radius: 12px;
                        padding: 5px;
                        z-index: 30;
                        box-shadow: 0 15px 35px rgba(0,0,0,.12);
                    }

                    .dropdown a,
                    .dropdown button {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        border: 0;
                        background: transparent;
                        padding: 9px 10px;
                        border-radius: 8px;
                        text-decoration: none;
                        color: #374151;
                        font-size: 12px;
                        text-align: left;
                    }

                    .dropdown a:hover,
                    .dropdown button:hover {
                        background: #f4f7f5;
                    }

                    .dropdown .danger {
                        color: #d33d3d;
                    }

                    .empty-state {
                        background: white;
                        border: 1px dashed #ccd6d1;
                        border-radius: 20px;
                        text-align: center;
                        padding: 65px 20px;
                    }

                    .empty-icon {
                        width: 65px;
                        height: 65px;
                        border-radius: 18px;
                        background: var(--talent-green-soft);
                        color: var(--talent-green);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 15px;
                    }

                    .modal-overlay {
                        position: fixed;
                        inset: 0;
                        background: rgba(0,0,0,.48);
                        backdrop-filter: blur(5px);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        padding: 20px;
                    }

                    .delete-modal {
                        width: 100%;
                        max-width: 430px;
                        background: white;
                        border-radius: 22px;
                        padding: 28px;
                        box-shadow: 0 25px 70px rgba(0,0,0,.2);
                        text-align: center;
                    }

                    .delete-icon {
                        width: 58px;
                        height: 58px;
                        border-radius: 16px;
                        background: #fff0ef;
                        color: #d64545;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 16px;
                    }

                    .modal-actions {
                        display: flex;
                        justify-content: center;
                        gap: 8px;
                        margin-top: 22px;
                    }

                    .modal-btn {
                        border: 0;
                        border-radius: 10px;
                        padding: 10px 18px;
                        font-weight: 700;
                    }

                    .modal-cancel {
                        background: #f1f3f2;
                    }

                    .modal-delete {
                        background: #d64545;
                        color: white;
                    }

                    @media(max-width: 1200px) {
                        .stats-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }

                        .course-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }

                    @media(max-width: 900px) {
                        .dashboard-grid {
                            grid-template-columns: 1fr;
                        }

                        .course-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        .search-box {
                            width: 100%;
                        }

                        .toolbar {
                            align-items: stretch;
                        }
                    }

                    @media(max-width: 600px) {
                        .studio-container {
                            padding: 15px;
                        }

                        .hero {
                            padding: 24px;
                            border-radius: 18px;
                        }

                        .stats-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        .course-grid {
                            grid-template-columns: 1fr;
                        }

                        .course-list .course-card {
                            display: block;
                        }

                        .course-list .course-image-wrap {
                            width: 100%;
                        }

                        .filters {
                            width: 100%;
                        }

                        .filter-select {
                            flex: 1;
                        }
                    }
                `}</style>

                <div className="studio-container">

                    {/* HERO */}
                    <section className="hero">
                        <div className="hero-content">
                            <div className="eyebrow">
                                <IconSpark />
                                Talent Studio
                            </div>

                            <h1 className="hero-title">
                                Build your knowledge.
                                <br />
                                Grow your audience.
                            </h1>

                            <p className="hero-description">
                                Create, manage and grow professional learning
                                experiences for your talent community.
                            </p>

                            <div className="hero-actions">
                                <Link
                                    href={route("talent.courses.create")}
                                    className="btn-primary-talent"
                                >
                                    <IconPlus />
                                    Create a course
                                </Link>

                                <Link
                                    href={route("talent.courses.index")}
                                    className="btn-ghost-talent"
                                >
                                    Manage courses
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* STATS */}
                    <section className="stats-grid">

                        <StatCard
                            icon={<IconBook />}
                            label="Total courses"
                            value={stats.total}
                        />

                        <StatCard
                            icon={<IconCheck />}
                            label="Published"
                            value={stats.published}
                        />

                        <StatCard
                            icon={<IconUsers />}
                            label="Total learners"
                            value={stats.enrollments}
                        />

                        <StatCard
                            icon={<IconStar />}
                            label="Average rating"
                            value={
                                stats.averageRating
                                    ? stats.averageRating.toFixed(1)
                                    : "—"
                            }
                        />

                        <StatCard
                            icon={<IconWallet />}
                            label="Estimated revenue"
                            value={`$${stats.revenue.toLocaleString(
                                undefined,
                                {
                                    minimumFractionDigits: 0,
                                }
                            )}`}
                        />

                    </section>

                    {/* PERFORMANCE */}
                    {topCourse && (
                        <div className="dashboard-grid">

                            <section className="panel">
                                <div className="panel-header">
                                    <div>
                                        <h3 className="panel-title">
                                            Top performing course
                                        </h3>

                                        <div className="panel-subtitle">
                                            Your course with the highest learner
                                            engagement
                                        </div>
                                    </div>

                                    <span className="free-badge">
                                        TOP PERFORMER
                                    </span>
                                </div>

                                <div className="featured-course">

                                    {topCourse.thumbnail ? (
                                        <img
                                            src={`/${topCourse.thumbnail}`}
                                            alt={topCourse.title}
                                            className="featured-thumb"
                                        />
                                    ) : (
                                        <div className="featured-thumb d-flex align-items-center justify-content-center">
                                            <IconBook size={25} />
                                        </div>
                                    )}

                                    <div className="flex-grow-1">
                                        <div className="featured-title">
                                            {topCourse.title}
                                        </div>

                                        <div className="featured-meta">
                                            <span>
                                                <IconUsers size={13} />
                                                {topCourse.enrollments_count ??
                                                    0}{" "}
                                                learners
                                            </span>

                                            <span>
                                                <IconPlay size={13} />
                                                {topCourse.lessons_count ?? 0}{" "}
                                                lessons
                                            </span>

                                            <span>
                                                <IconStar size={13} />
                                                {topCourse.feedback_avg_rating
                                                    ? Number(
                                                          topCourse.feedback_avg_rating
                                                      ).toFixed(1)
                                                    : "N/A"}
                                            </span>
                                        </div>

                                        <div className="progress-wrap">
                                            <div className="progress-label">
                                                <span>
                                                    Course performance
                                                </span>
                                                <strong>82%</strong>
                                            </div>

                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    style={{
                                                        width: "82%",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="panel">
                                <div className="panel-header">
                                    <div>
                                        <h3 className="panel-title">
                                            Creator tips
                                        </h3>

                                        <div className="panel-subtitle">
                                            Improve your course performance
                                        </div>
                                    </div>

                                    <IconSpark
                                        size={19}
                                    />
                                </div>

                                <div className="tips">

                                    <Tip
                                        icon={<IconImage />}
                                        title="Use strong thumbnails"
                                        text="A clear visual can improve course discovery."
                                    />

                                    <Tip
                                        icon={<IconStar />}
                                        title="Collect learner feedback"
                                        text="Ratings build trust and improve conversions."
                                    />

                                    <Tip
                                        icon={<IconPlay />}
                                        title="Keep lessons focused"
                                        text="Short, practical lessons usually feel easier to complete."
                                    />

                                </div>
                            </section>

                        </div>
                    )}

                    {/* COURSE MANAGEMENT */}
                    <section className="panel">

                        <div className="courses-header">
                            <div>
                                <h2 className="courses-title">
                                    Your courses
                                </h2>

                                <div className="courses-count">
                                    {filteredCourses.length} of{" "}
                                    {courses.length} courses
                                </div>
                            </div>

                            <Link
                                href={route("talent.courses.create")}
                                className="btn-primary-talent"
                            >
                                <IconPlus />
                                New course
                            </Link>
                        </div>

                        {/* TOOLBAR */}
                        <div className="toolbar">

                            <div className="search-box">
                                <span className="search-icon">
                                    <IconSearch />
                                </span>

                                <input
                                    type="text"
                                    placeholder="Search courses or categories..."
                                    value={query}
                                    onChange={(e) =>
                                        setQuery(e.target.value)
                                    }
                                />
                            </div>

                            <div className="filters">

                                <select
                                    className="filter-select"
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(e.target.value)
                                    }
                                >
                                    <option value="all">
                                        All statuses
                                    </option>

                                    <option value="published">
                                        Published
                                    </option>

                                    <option value="draft">
                                        Drafts
                                    </option>
                                </select>

                                <select
                                    className="filter-select"
                                    value={categoryFilter}
                                    onChange={(e) =>
                                        setCategoryFilter(e.target.value)
                                    }
                                >
                                    <option value="all">
                                        All categories
                                    </option>

                                    {categories.map((category) => (
                                        <option
                                            key={category}
                                            value={category}
                                        >
                                            {category}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    className="filter-select"
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value)
                                    }
                                >
                                    <option value="newest">
                                        Newest
                                    </option>

                                    <option value="learners">
                                        Most learners
                                    </option>

                                    <option value="rating">
                                        Highest rated
                                    </option>

                                    <option value="price">
                                        Highest price
                                    </option>

                                    <option value="title">
                                        Alphabetical
                                    </option>
                                </select>

                                <div className="view-switch">

                                    <button
                                        className={`view-button ${
                                            viewMode === "grid"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setViewMode("grid")
                                        }
                                    >
                                        <IconGrid />
                                    </button>

                                    <button
                                        className={`view-button ${
                                            viewMode === "list"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setViewMode("list")
                                        }
                                    >
                                        <IconList />
                                    </button>

                                </div>
                            </div>
                        </div>

                        {/* COURSES */}
                        {filteredCourses.length === 0 ? (
                            <EmptyState
                                search={query || statusFilter !== "all"}
                                onCreate={() =>
                                    router.visit(
                                        route(
                                            "talent.courses.create"
                                        )
                                    )
                                }
                            />
                        ) : (
                            <div
                                className={
                                    viewMode === "grid"
                                        ? "course-grid"
                                        : "course-list"
                                }
                            >
                                {filteredCourses.map((course) => (
                                    <CourseCard
                                        key={course.id}
                                        course={course}
                                        menuOpen={menuOpen}
                                        setMenuOpen={setMenuOpen}
                                        onDelete={() =>
                                            setDeleteTarget(course)
                                        }
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </div>

                <DeleteModal
                    course={deleteTarget}
                    onCancel={() => setDeleteTarget(null)}
                    onConfirm={confirmDelete}
                />
            </div>
        </AppLayout>
    );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ icon, label, value }) {
    return (
        <div className="stat-card">
            <div className="stat-top">
                <div className="stat-icon">
                    {icon}
                </div>

                <IconArrowUp />
            </div>

            <div className="stat-label">
                {label}
            </div>

            <div className="stat-value">
                {value}
            </div>
        </div>
    );
}

/* =========================================================
   COURSE CARD
========================================================= */

function CourseCard({
    course,
    menuOpen,
    setMenuOpen,
    onDelete,
}) {
    const published = course.status === "published";

    return (
        <div className="course-card">

            <div className="course-image-wrap">

                {course.thumbnail ? (
                    <img
                        src={`/${course.thumbnail}`}
                        alt={course.title}
                        className="course-image"
                    />
                ) : (
                    <div className="course-placeholder">
                        <IconBook size={28} />
                    </div>
                )}

                <span
                    className={`status-badge ${
                        published
                            ? "status-published"
                            : "status-draft"
                    }`}
                >
                    {published ? "Published" : "Draft"}
                </span>
            </div>

            <div className="course-body">

                <div className="d-flex justify-content-between align-items-start gap-2">

                    <span className="course-category">
                        {course.category?.name ??
                            "Uncategorized"}
                    </span>

                    <div className="menu-wrapper">

                        <button
                            className="menu-button"
                            onClick={() =>
                                setMenuOpen(
                                    menuOpen === course.id
                                        ? null
                                        : course.id
                                )
                            }
                        >
                            <IconDots />
                        </button>

                        {menuOpen === course.id && (
                            <div className="dropdown">

                                <Link
                                    href={route(
                                        "talent.courses.show",
                                        course.id
                                    )}
                                    onClick={() =>
                                        setMenuOpen(null)
                                    }
                                >
                                    <IconEye />
                                    View course
                                </Link>

                                <Link
                                    href={route(
                                        "talent.courses.edit",
                                        course.id
                                    )}
                                    onClick={() =>
                                        setMenuOpen(null)
                                    }
                                >
                                    <IconEdit />
                                    Edit course
                                </Link>

                                <button
                                    className="danger"
                                    onClick={() => {
                                        setMenuOpen(null);
                                        onDelete();
                                    }}
                                >
                                    <IconTrash />
                                    Delete
                                </button>

                            </div>
                        )}
                    </div>
                </div>

                <h3 className="course-title">
                    {truncate(course.title, 58)}
                </h3>

                <div className="course-meta">

                    <span>
                        <IconPlay size={12} />
                        {course.lessons_count ?? 0} lessons
                    </span>

                    <span>
                        <IconUsers size={12} />
                        {course.enrollments_count ?? 0}
                    </span>

                    <span>
                        <IconStar size={12} />
                        {course.feedback_avg_rating
                            ? Number(
                                  course.feedback_avg_rating
                              ).toFixed(1)
                            : "—"}
                    </span>

                </div>

                <div className="course-footer">

                    {course.is_free ? (
                        <span className="free-badge">
                            FREE
                        </span>
                    ) : (
                        <span className="price">
                            ${Number(
                                course.price ?? 0
                            ).toFixed(2)}
                        </span>
                    )}

                    <div className="course-actions">

                        <Link
                            href={route(
                                "talent.courses.show",
                                course.id
                            )}
                            className="small-action"
                            title="View course"
                        >
                            <IconEye />
                        </Link>

                        <Link
                            href={route(
                                "talent.courses.edit",
                                course.id
                            )}
                            className="small-action"
                            title="Edit course"
                        >
                            <IconEdit />
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({ search, onCreate }) {
    return (
        <div className="empty-state">

            <div className="empty-icon">
                <IconBook size={28} />
            </div>

            <h3>
                {search
                    ? "No courses found"
                    : "Create your first course"}
            </h3>

            <p
                style={{
                    maxWidth: 470,
                    margin: "8px auto 20px",
                    color: "#6b7280",
                    fontSize: 13,
                }}
            >
                {search
                    ? "Try changing your search or filters."
                    : "Share your expertise with the talent community and start building your audience."}
            </p>

            {!search && (
                <button
                    className="btn-primary-talent"
                    onClick={onCreate}
                >
                    <IconPlus />
                    Create your first course
                </button>
            )}
        </div>
    );
}

/* =========================================================
   TIP
========================================================= */

function Tip({ icon, title, text }) {
    return (
        <div className="tip">
            <div className="tip-icon">
                {icon}
            </div>

            <div>
                <div className="tip-title">
                    {title}
                </div>

                <div className="tip-text">
                    {text}
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   DELETE MODAL
========================================================= */

function DeleteModal({
    course,
    onCancel,
    onConfirm,
}) {
    if (!course) return null;

    return (
        <div
            className="modal-overlay"
            onClick={onCancel}
        >
            <div
                className="delete-modal"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                <div className="delete-icon">
                    <IconTrash size={23} />
                </div>

                <h3
                    style={{
                        fontSize: 20,
                        marginBottom: 8,
                    }}
                >
                    Delete course?
                </h3>

                <p
                    style={{
                        color: "#6b7280",
                        fontSize: 13,
                        lineHeight: 1.6,
                        margin: 0,
                    }}
                >
                    You are about to delete{" "}
                    <strong>
                        {course.title}
                    </strong>
                    . This action cannot be undone.
                </p>

                <div className="modal-actions">

                    <button
                        className="modal-btn modal-cancel"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                    <button
                        className="modal-btn modal-delete"
                        onClick={onConfirm}
                    >
                        Delete course
                    </button>

                </div>
            </div>
        </div>
    );
}

/* =========================================================
   ICON SYSTEM
========================================================= */

function Icon({
    children,
    size = 16,
    className = "",
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {children}
        </svg>
    );
}

function IconPlus(props) {
    return (
        <Icon {...props}>
            <path d="M12 5v14M5 12h14" />
        </Icon>
    );
}

function IconSearch(props) {
    return (
        <Icon {...props}>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </Icon>
    );
}

function IconBook(props) {
    return (
        <Icon {...props}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        </Icon>
    );
}

function IconUsers(props) {
    return (
        <Icon {...props}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </Icon>
    );
}

function IconStar(props) {
    return (
        <Icon {...props}>
            <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1Z" />
        </Icon>
    );
}

function IconWallet(props) {
    return (
        <Icon {...props}>
            <path d="M20 7V6a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10H5a3 3 0 0 1-3-3V7" />
            <path d="M16 14h.01" />
        </Icon>
    );
}

function IconCheck(props) {
    return (
        <Icon {...props}>
            <path d="m5 12 4 4L19 6" />
        </Icon>
    );
}

function IconArrowUp(props) {
    return (
        <Icon
            size={13}
            {...props}
        >
            <path d="m18 15-6-6-6 6" />
        </Icon>
    );
}

function IconPlay(props) {
    return (
        <Icon {...props}>
            <polygon points="6 3 20 12 6 21 6 3" />
        </Icon>
    );
}

function IconImage(props) {
    return (
        <Icon {...props}>
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
            />
            <circle
                cx="8.5"
                cy="8.5"
                r="1.5"
            />
            <path d="m21 15-5-5L5 21" />
        </Icon>
    );
}

function IconSpark(props) {
    return (
        <Icon {...props}>
            <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5Z" />
            <path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7Z" />
        </Icon>
    );
}

function IconGrid(props) {
    return (
        <Icon {...props}>
            <rect
                x="3"
                y="3"
                width="7"
                height="7"
            />
            <rect
                x="14"
                y="3"
                width="7"
                height="7"
            />
            <rect
                x="3"
                y="14"
                width="7"
                height="7"
            />
            <rect
                x="14"
                y="14"
                width="7"
                height="7"
            />
        </Icon>
    );
}

function IconList(props) {
    return (
        <Icon {...props}>
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </Icon>
    );
}

function IconEye(props) {
    return (
        <Icon {...props}>
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
            <circle
                cx="12"
                cy="12"
                r="3"
            />
        </Icon>
    );
}

function IconEdit(props) {
    return (
        <Icon {...props}>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </Icon>
    );
}

function IconTrash(props) {
    return (
        <Icon {...props}>
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6v14H5V6" />
            <path d="M10 11v5M14 11v5" />
        </Icon>
    );
}

function IconDots(props) {
    return (
        <Icon
            size={16}
            {...props}
        >
            <circle
                cx="5"
                cy="12"
                r="1"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
            />
            <circle
                cx="19"
                cy="12"
                r="1"
            />
        </Icon>
    );
}

function truncate(text, length) {
    if (!text) return "";
    return text.length > length
        ? text.slice(0, length) + "…"
        : text;
}