import React from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Show({ course }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_id: course.id,
        title: '',
        content: '',
        video_url: '',
        order: (course.lessons?.length ?? 0) + 1,
    });

    const sortedLessons = [...(course.lessons ?? [])].sort(
        (a, b) => Number(a.order) - Number(b.order)
    );

    const avgRating =
        course.feedback_avg_rating != null
            ? Number(course.feedback_avg_rating)
            : course.feedback?.length
                ? course.feedback.reduce(
                    (sum, feedback) => sum + Number(feedback.rating || 0),
                    0
                ) / course.feedback.length
                : 0;

    const enrolledCount =
        course.enrollments_count ?? course.enrollments?.length ?? 0;

    const reviewsCount =
        course.feedback_count ?? course.feedback?.length ?? 0;

    const completedLessons = sortedLessons.length;

    function handleAddLesson(e) {
        e.preventDefault();

        post(
            route('admin.courses.lessons.store', {
                course: course.id,
            }),
            {
                onSuccess: () => {
                    reset();

                    const modalEl =
                        document.getElementById('addLessonModal');

                    const modal =
                        window.bootstrap?.Modal.getInstance(modalEl);

                    modal?.hide();
                },
            }
        );
    }

    function handleDeleteLesson(lesson) {
        if (confirm(`Delete "${lesson.title}"?`)) {
            router.delete(
                route('admin.courses.lessons.destroy', {
                    course: course.id,
                    lesson: lesson.id,
                })
            );
        }
    }

    function limit(text, length) {
        if (!text) return '';

        return text.length > length
            ? `${text.slice(0, length)}…`
            : text;
    }

    function formatDate(date) {
        if (!date) return '—';

        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    }

    function getInitials(name) {
        if (!name) return 'U';

        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .slice(0, 2)
            .toUpperCase();
    }

    return (
        <AppLayout>
            <Head title={`${course.title} - Course`} />

            <style>{`
                :root {
                    --course-bg: #f6f7fb;
                    --course-surface: #ffffff;
                    --course-border: #e7eaf0;
                    --course-text: #171a21;
                    --course-muted: #737b8c;
                    --course-primary: #4f46e5;
                    --course-primary-dark: #4338ca;
                    --course-primary-soft: #eef0ff;
                    --course-success: #16a34a;
                    --course-success-soft: #eaf8ef;
                    --course-warning: #d97706;
                    --course-warning-soft: #fff5e8;
                    --course-danger: #dc2626;
                    --course-danger-soft: #fff0f0;
                    --course-radius: 18px;
                    --course-shadow: 0 8px 30px rgba(15, 23, 42, .05);
                }

                .course-page {
                    min-height: 100vh;
                    background: var(--course-bg);
                    padding: 28px;
                }

                .course-container {
                    max-width: 1500px;
                    margin: 0 auto;
                }

                /* HEADER */

                .course-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 24px;
                }

                .course-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 8px;
                    color: var(--course-muted);
                    font-size: 13px;
                }

                .course-breadcrumb a {
                    color: var(--course-muted);
                    text-decoration: none;
                }

                .course-breadcrumb a:hover {
                    color: var(--course-primary);
                }

                .course-page-title {
                    margin: 0;
                    color: var(--course-text);
                    font-size: 28px;
                    font-weight: 800;
                    letter-spacing: -.5px;
                }

                .course-page-subtitle {
                    margin: 6px 0 0;
                    color: var(--course-muted);
                    font-size: 14px;
                }

                .header-actions {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .course-btn {
                    min-height: 42px;
                    padding: 0 16px;
                    border-radius: 11px;
                    border: 1px solid transparent;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: .2s ease;
                    cursor: pointer;
                }

                .course-btn-primary {
                    color: white;
                    background: var(--course-primary);
                    border-color: var(--course-primary);
                }

                .course-btn-primary:hover {
                    background: var(--course-primary-dark);
                    border-color: var(--course-primary-dark);
                    color: white;
                    transform: translateY(-1px);
                }

                .course-btn-light {
                    color: var(--course-text);
                    background: white;
                    border-color: var(--course-border);
                }

                .course-btn-light:hover {
                    background: #f9fafb;
                    color: var(--course-primary);
                    border-color: #d9dcf5;
                }

                /* HERO */

                .course-hero {
                    position: relative;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: minmax(280px, 420px) 1fr;
                    min-height: 330px;
                    background: var(--course-surface);
                    border: 1px solid var(--course-border);
                    border-radius: var(--course-radius);
                    box-shadow: var(--course-shadow);
                    margin-bottom: 20px;
                }

                .course-hero-image {
                    position: relative;
                    min-height: 330px;
                    background: #e9ebf1;
                }

                .course-hero-image img {
                    width: 100%;
                    height: 100%;
                    min-height: 330px;
                    display: block;
                    object-fit: cover;
                }

                .course-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(0,0,0,.02),
                        rgba(0,0,0,.3)
                    );
                    pointer-events: none;
                }

                .course-hero-content {
                    padding: 36px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .course-tags {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 18px;
                }

                .course-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border-radius: 999px;
                    padding: 6px 11px;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: .03em;
                }

                .tag-published {
                    color: var(--course-success);
                    background: var(--course-success-soft);
                }

                .tag-draft {
                    color: var(--course-warning);
                    background: var(--course-warning-soft);
                }

                .tag-free {
                    color: var(--course-primary);
                    background: var(--course-primary-soft);
                }

                .tag-neutral {
                    color: #596273;
                    background: #f1f3f6;
                }

                .course-hero-title {
                    margin: 0 0 12px;
                    max-width: 760px;
                    color: var(--course-text);
                    font-size: 32px;
                    line-height: 1.18;
                    font-weight: 850;
                    letter-spacing: -.8px;
                }

                .course-description {
                    max-width: 780px;
                    margin: 0;
                    color: var(--course-muted);
                    font-size: 15px;
                    line-height: 1.75;
                }

                .course-hero-footer {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 18px;
                    margin-top: 25px;
                    padding-top: 20px;
                    border-top: 1px solid var(--course-border);
                }

                .instructor-mini {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .avatar {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    font-size: 12px;
                    font-weight: 800;
                }

                .instructor-label {
                    color: var(--course-muted);
                    font-size: 11px;
                    margin-bottom: 2px;
                }

                .instructor-name {
                    color: var(--course-text);
                    font-size: 13px;
                    font-weight: 700;
                }

                .preview-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--course-primary);
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .preview-link:hover {
                    color: var(--course-primary-dark);
                }

                /* STATS */

                .course-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 14px;
                    margin-bottom: 20px;
                }

                .stat-card {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 18px;
                    background: var(--course-surface);
                    border: 1px solid var(--course-border);
                    border-radius: 15px;
                    box-shadow: var(--course-shadow);
                }

                .stat-icon {
                    width: 44px;
                    height: 44px;
                    flex-shrink: 0;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--course-primary-soft);
                    color: var(--course-primary);
                    font-size: 18px;
                }

                .stat-number {
                    display: block;
                    color: var(--course-text);
                    font-size: 21px;
                    line-height: 1.2;
                    font-weight: 800;
                }

                .stat-label {
                    display: block;
                    margin-top: 3px;
                    color: var(--course-muted);
                    font-size: 12px;
                }

                /* CONTENT */

                .content-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.55fr) minmax(300px, .85fr);
                    gap: 20px;
                }

                .content-card {
                    background: var(--course-surface);
                    border: 1px solid var(--course-border);
                    border-radius: var(--course-radius);
                    box-shadow: var(--course-shadow);
                    overflow: hidden;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 20px 22px;
                    border-bottom: 1px solid var(--course-border);
                }

                .card-title-wrap {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                }

                .card-title-icon {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    color: var(--course-primary);
                    background: var(--course-primary-soft);
                }

                .card-title {
                    margin: 0;
                    color: var(--course-text);
                    font-size: 15px;
                    font-weight: 800;
                }

                .card-subtitle {
                    margin: 2px 0 0;
                    color: var(--course-muted);
                    font-size: 11px;
                }

                .card-body {
                    padding: 20px 22px;
                }

                /* LESSONS */

                .lesson-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .lesson-row {
                    display: grid;
                    grid-template-columns: 42px minmax(0, 1fr) auto;
                    align-items: center;
                    gap: 13px;
                    padding: 13px;
                    border: 1px solid var(--course-border);
                    border-radius: 13px;
                    transition: .18s ease;
                }

                .lesson-row:hover {
                    border-color: #d8dbef;
                    background: #fbfbff;
                    transform: translateY(-1px);
                }

                .lesson-number {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 11px;
                    color: var(--course-primary);
                    background: var(--course-primary-soft);
                    font-size: 12px;
                    font-weight: 800;
                }

                .lesson-name {
                    color: var(--course-text);
                    font-size: 14px;
                    font-weight: 750;
                    margin-bottom: 3px;
                }

                .lesson-description {
                    color: var(--course-muted);
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .lesson-actions {
                    display: flex;
                    gap: 6px;
                }

                .lesson-action {
                    width: 34px;
                    height: 34px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9px;
                    border: 1px solid var(--course-border);
                    color: var(--course-muted);
                    background: white;
                    text-decoration: none;
                    cursor: pointer;
                    transition: .18s ease;
                }

                .lesson-action:hover {
                    color: var(--course-primary);
                    border-color: #d8dbef;
                    background: var(--course-primary-soft);
                }

                .lesson-action.delete:hover {
                    color: var(--course-danger);
                    border-color: #ffd5d5;
                    background: var(--course-danger-soft);
                }

                .empty-state {
                    text-align: center;
                    padding: 50px 20px;
                    color: var(--course-muted);
                }

                .empty-icon {
                    width: 55px;
                    height: 55px;
                    margin: 0 auto 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                    background: #f3f4f7;
                    color: #9aa1ae;
                    font-size: 22px;
                }

                .empty-state strong {
                    display: block;
                    color: var(--course-text);
                    margin-bottom: 4px;
                }

                .empty-state span {
                    font-size: 12px;
                }

                /* OVERVIEW */

                .meta-list {
                    display: flex;
                    flex-direction: column;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 14px 0;
                    border-bottom: 1px solid var(--course-border);
                }

                .meta-item:first-child {
                    padding-top: 0;
                }

                .meta-item:last-child {
                    padding-bottom: 0;
                    border-bottom: none;
                }

                .meta-label {
                    color: var(--course-muted);
                    font-size: 12px;
                }

                .meta-value {
                    max-width: 60%;
                    color: var(--course-text);
                    font-size: 13px;
                    font-weight: 700;
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* FEEDBACK */

                .rating-summary {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 15px;
                    margin-bottom: 18px;
                    border-radius: 13px;
                    background: #fffbf3;
                    border: 1px solid #f7ead0;
                }

                .rating-number {
                    color: var(--course-text);
                    font-size: 30px;
                    font-weight: 850;
                    line-height: 1;
                }

                .rating-stars {
                    display: flex;
                    gap: 2px;
                    color: #f59e0b;
                    font-size: 14px;
                }

                .rating-label {
                    color: var(--course-muted);
                    font-size: 11px;
                    margin-top: 4px;
                }

                .feedback-list {
                    display: flex;
                    flex-direction: column;
                }

                .feedback-item {
                    padding: 15px 0;
                    border-bottom: 1px solid var(--course-border);
                }

                .feedback-item:first-child {
                    padding-top: 0;
                }

                .feedback-item:last-child {
                    padding-bottom: 0;
                    border-bottom: none;
                }

                .feedback-user {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                }

                .feedback-avatar {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #eef0ff;
                    color: var(--course-primary);
                    font-size: 10px;
                    font-weight: 800;
                }

                .feedback-name {
                    color: var(--course-text);
                    font-size: 12px;
                    font-weight: 750;
                }

                .feedback-date {
                    color: var(--course-muted);
                    font-size: 10px;
                }

                .feedback-stars {
                    margin-left: auto;
                    color: #f59e0b;
                    font-size: 11px;
                }

                .feedback-comment {
                    margin: 10px 0 0 41px;
                    color: var(--course-muted);
                    font-size: 12px;
                    line-height: 1.6;
                }

                /* MODAL */

                .lesson-modal .modal-content {
                    border: 0;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 25px 80px rgba(15, 23, 42, .2);
                }

                .lesson-modal .modal-header {
                    padding: 20px 22px;
                    border-bottom: 1px solid var(--course-border);
                }

                .lesson-modal .modal-body {
                    padding: 22px;
                }

                .lesson-modal .modal-footer {
                    padding: 16px 22px;
                    border-top: 1px solid var(--course-border);
                    background: #fafbfc;
                }

                .form-label-modern {
                    display: block;
                    margin-bottom: 7px;
                    color: var(--course-text);
                    font-size: 12px;
                    font-weight: 750;
                }

                .form-control-modern {
                    width: 100%;
                    min-height: 44px;
                    padding: 10px 12px;
                    color: var(--course-text);
                    background: white;
                    border: 1px solid var(--course-border);
                    border-radius: 10px;
                    outline: none;
                    font-size: 13px;
                    transition: .18s ease;
                }

                textarea.form-control-modern {
                    min-height: 110px;
                    resize: vertical;
                }

                .form-control-modern:focus {
                    border-color: var(--course-primary);
                    box-shadow: 0 0 0 3px rgba(79, 70, 229, .1);
                }

                .field-error {
                    margin-top: 5px;
                    color: var(--course-danger);
                    font-size: 11px;
                }

                .modal-btn {
                    min-height: 40px;
                    padding: 0 15px;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 700;
                    border: 1px solid var(--course-border);
                    cursor: pointer;
                }

                .modal-btn-cancel {
                    color: var(--course-muted);
                    background: white;
                }

                .modal-btn-save {
                    color: white;
                    background: var(--course-primary);
                    border-color: var(--course-primary);
                }

                .modal-btn-save:hover {
                    background: var(--course-primary-dark);
                }

                /* RESPONSIVE */

                @media (max-width: 1100px) {
                    .course-hero {
                        grid-template-columns: 1fr;
                    }

                    .course-hero-image {
                        min-height: 260px;
                    }

                    .course-hero-image img {
                        min-height: 260px;
                    }

                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 800px) {
                    .course-page {
                        padding: 18px;
                    }

                    .course-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .course-page-title {
                        font-size: 23px;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .header-actions .course-btn {
                        flex: 1;
                    }

                    .course-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .course-hero-content {
                        padding: 24px;
                    }

                    .course-hero-title {
                        font-size: 25px;
                    }
                }

                @media (max-width: 560px) {
                    .course-page {
                        padding: 12px;
                    }

                    .course-stats {
                        grid-template-columns: 1fr 1fr;
                        gap: 8px;
                    }

                    .stat-card {
                        padding: 13px;
                    }

                    .stat-icon {
                        width: 38px;
                        height: 38px;
                    }

                    .stat-number {
                        font-size: 18px;
                    }

                    .lesson-row {
                        grid-template-columns: 38px minmax(0, 1fr);
                    }

                    .lesson-actions {
                        grid-column: 2;
                    }

                    .meta-item {
                        align-items: flex-start;
                    }

                    .meta-value {
                        max-width: 55%;
                    }
                }
            `}</style>

            <div className="course-page">
                <div className="course-container">

                    {/* HEADER */}
                    <div className="course-header">
                        <div>
                            <div className="course-breadcrumb">
                                <Link href={route('admin.courses.index')}>
                                    Courses
                                </Link>

                                <i className="bi bi-chevron-right"></i>

                                <span>Course Details</span>
                            </div>

                            <h1 className="course-page-title">
                                {course.title}
                            </h1>

                            <p className="course-page-subtitle">
                                Manage course content, lessons and student feedback
                            </p>
                        </div>

                        <div className="header-actions">
                            <Link
                                href={route('admin.courses.edit', course.id)}
                                className="course-btn course-btn-primary"
                            >
                                <i className="bi bi-pencil"></i>
                                Edit Course
                            </Link>

                            <Link
                                href={route('admin.courses.index')}
                                className="course-btn course-btn-light"
                            >
                                <i className="bi bi-arrow-left"></i>
                                Back
                            </Link>
                        </div>
                    </div>

                    {/* HERO */}
                    <div className="course-hero">

                        <div className="course-hero-image">
                            <img
                                src={
                                    course.thumbnail
                                        ? `/images/thumbnails/${course.thumbnail}`
                                        : '/images/placeholder-course.png'
                                }
                                alt={course.title}
                            />

                            <div className="course-image-overlay"></div>
                        </div>

                        <div className="course-hero-content">

                            <div className="course-tags">

                                <span
                                    className={`course-tag ${
                                        course.status === 'published'
                                            ? 'tag-published'
                                            : 'tag-draft'
                                    }`}
                                >
                                    <i
                                        className={`bi ${
                                            course.status === 'published'
                                                ? 'bi-check-circle-fill'
                                                : 'bi-pencil-square'
                                        }`}
                                    ></i>

                                    {course.status === 'published'
                                        ? 'Published'
                                        : 'Draft'}
                                </span>

                                <span
                                    className={`course-tag ${
                                        course.is_free
                                            ? 'tag-free'
                                            : 'tag-neutral'
                                    }`}
                                >
                                    <i
                                        className={`bi ${
                                            course.is_free
                                                ? 'bi-unlock'
                                                : 'bi-cash-stack'
                                        }`}
                                    ></i>

                                    {course.is_free
                                        ? 'Free Course'
                                        : `${Number(
                                            course.price || 0
                                        ).toLocaleString()} RWF`}
                                </span>

                                <span className="course-tag tag-neutral">
                                    <i className="bi bi-bar-chart"></i>
                                    {course.level}
                                </span>

                            </div>

                            <h2 className="course-hero-title">
                                {course.title}
                            </h2>

                            <p className="course-description">
                                {course.description ||
                                    'No description has been provided for this course yet.'}
                            </p>

                            <div className="course-hero-footer">

                                <div className="instructor-mini">
                                    <div className="avatar">
                                        {getInitials(course.talent?.name)}
                                    </div>

                                    <div>
                                        <div className="instructor-label">
                                            Instructor
                                        </div>

                                        <div className="instructor-name">
                                            {course.talent?.name || 'Not assigned'}
                                        </div>
                                    </div>
                                </div>

                                {course.video && (
                                    <a
                                        href={course.video}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="preview-link"
                                    >
                                        <i className="bi bi-play-circle-fill"></i>
                                        Watch course preview
                                    </a>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="course-stats">

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="bi bi-star-fill"></i>
                            </div>

                            <div>
                                <span className="stat-number">
                                    {avgRating.toFixed(1)}
                                </span>

                                <span className="stat-label">
                                    Average rating
                                </span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="bi bi-chat-left-text"></i>
                            </div>

                            <div>
                                <span className="stat-number">
                                    {reviewsCount}
                                </span>

                                <span className="stat-label">
                                    Student reviews
                                </span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="bi bi-people"></i>
                            </div>

                            <div>
                                <span className="stat-number">
                                    {enrolledCount}
                                </span>

                                <span className="stat-label">
                                    Enrolled students
                                </span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="bi bi-collection-play"></i>
                            </div>

                            <div>
                                <span className="stat-number">
                                    {completedLessons}
                                </span>

                                <span className="stat-label">
                                    Course lessons
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* MAIN CONTENT */}
                    <div className="content-grid">

                        {/* LEFT */}
                        <div>

                            {/* LESSONS */}
                            <div className="content-card mb-4">

                                <div className="card-header">

                                    <div className="card-title-wrap">
                                        <div className="card-title-icon">
                                            <i className="bi bi-collection-play"></i>
                                        </div>

                                        <div>
                                            <h3 className="card-title">
                                                Course Lessons
                                            </h3>

                                            <p className="card-subtitle">
                                                Manage the learning content
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="course-btn course-btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addLessonModal"
                                    >
                                        <i className="bi bi-plus-lg"></i>
                                        Add Lesson
                                    </button>

                                </div>

                                <div className="card-body">

                                    {sortedLessons.length > 0 ? (
                                        <div className="lesson-list">

                                            {sortedLessons.map(
                                                (lesson, index) => (
                                                    <div
                                                        className="lesson-row"
                                                        key={lesson.id}
                                                    >

                                                        <div className="lesson-number">
                                                            {String(
                                                                index + 1
                                                            ).padStart(2, '0')}
                                                        </div>

                                                        <div>
                                                            <div className="lesson-name">
                                                                {lesson.title}
                                                            </div>

                                                            <div className="lesson-description">
                                                                {limit(
                                                                    lesson.content,
                                                                    100
                                                                ) ||
                                                                    'No lesson description'}
                                                            </div>
                                                        </div>

                                                        <div className="lesson-actions">

                                                            <Link
                                                                href={route(
                                                                    'admin.courses.lessons.edit',
                                                                    {
                                                                        course:
                                                                            course.id,
                                                                        lesson:
                                                                            lesson.id,
                                                                    }
                                                                )}
                                                                className="lesson-action"
                                                                title="Edit lesson"
                                                            >
                                                                <i className="bi bi-pencil"></i>
                                                            </Link>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleDeleteLesson(
                                                                        lesson
                                                                    )
                                                                }
                                                                className="lesson-action delete"
                                                                title="Delete lesson"
                                                            >
                                                                <i className="bi bi-trash"></i>
                                                            </button>

                                                        </div>
                                                    </div>
                                                )
                                            )}

                                        </div>
                                    ) : (
                                        <div className="empty-state">

                                            <div className="empty-icon">
                                                <i className="bi bi-journal-x"></i>
                                            </div>

                                            <strong>
                                                No lessons yet
                                            </strong>

                                            <span>
                                                Start building this course by
                                                adding your first lesson.
                                            </span>

                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* FEEDBACK */}
                            <div className="content-card">

                                <div className="card-header">

                                    <div className="card-title-wrap">
                                        <div className="card-title-icon">
                                            <i className="bi bi-chat-square-text"></i>
                                        </div>

                                        <div>
                                            <h3 className="card-title">
                                                Student Feedback
                                            </h3>

                                            <p className="card-subtitle">
                                                What students are saying
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-body">

                                    <div className="rating-summary">

                                        <div className="rating-number">
                                            {avgRating.toFixed(1)}
                                        </div>

                                        <div>
                                            <div className="rating-stars">
                                                {[1, 2, 3, 4, 5].map(
                                                    star => (
                                                        <i
                                                            key={star}
                                                            className={`bi ${
                                                                star <=
                                                                Math.round(
                                                                    avgRating
                                                                )
                                                                    ? 'bi-star-fill'
                                                                    : 'bi-star'
                                                            }`}
                                                        ></i>
                                                    )
                                                )}
                                            </div>

                                            <div className="rating-label">
                                                Based on {reviewsCount}{' '}
                                                {reviewsCount === 1
                                                    ? 'review'
                                                    : 'reviews'}
                                            </div>
                                        </div>

                                    </div>

                                    {course.feedback?.length > 0 ? (
                                        <div className="feedback-list">

                                            {course.feedback.map(
                                                (feedback, index) => (
                                                    <div
                                                        className="feedback-item"
                                                        key={
                                                            feedback.id ??
                                                            index
                                                        }
                                                    >

                                                        <div className="d-flex align-items-center">

                                                            <div className="feedback-user">

                                                                <div className="feedback-avatar">
                                                                    {getInitials(
                                                                        feedback
                                                                            .user
                                                                            ?.name
                                                                    )}
                                                                </div>

                                                                <div>
                                                                    <div className="feedback-name">
                                                                        {feedback
                                                                            .user
                                                                            ?.name ||
                                                                            'Anonymous'}
                                                                    </div>

                                                                    {feedback.created_at && (
                                                                        <div className="feedback-date">
                                                                            {formatDate(
                                                                                feedback.created_at
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>

                                                            </div>

                                                            <div className="feedback-stars">

                                                                {[1, 2, 3, 4, 5].map(
                                                                    star => (
                                                                        <i
                                                                            key={
                                                                                star
                                                                            }
                                                                            className={`bi ${
                                                                                star <=
                                                                                Number(
                                                                                    feedback.rating
                                                                                )
                                                                                    ? 'bi-star-fill'
                                                                                    : 'bi-star'
                                                                            }`}
                                                                        ></i>
                                                                    )
                                                                )}

                                                            </div>

                                                        </div>

                                                        {feedback.comment && (
                                                            <p className="feedback-comment">
                                                                {feedback.comment}
                                                            </p>
                                                        )}

                                                    </div>
                                                )
                                            )}

                                        </div>
                                    ) : (
                                        <div className="empty-state">

                                            <div className="empty-icon">
                                                <i className="bi bi-chat-left"></i>
                                            </div>

                                            <strong>
                                                No feedback yet
                                            </strong>

                                            <span>
                                                Student reviews will appear
                                                here once submitted.
                                            </span>

                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div>

                            {/* OVERVIEW */}
                            <div className="content-card mb-4">

                                <div className="card-header">

                                    <div className="card-title-wrap">
                                        <div className="card-title-icon">
                                            <i className="bi bi-info-circle"></i>
                                        </div>

                                        <div>
                                            <h3 className="card-title">
                                                Course Overview
                                            </h3>

                                            <p className="card-subtitle">
                                                Course information
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-body">

                                    <div className="meta-list">

                                        <div className="meta-item">
                                            <span className="meta-label">
                                                Instructor
                                            </span>

                                            <span className="meta-value">
                                                {course.talent?.name || '—'}
                                            </span>
                                        </div>

                                        <div className="meta-item">
                                            <span className="meta-label">
                                                Category
                                            </span>

                                            <span className="meta-value">
                                                {course.category?.name || '—'}
                                            </span>
                                        </div>

                                        <div className="meta-item">
                                            <span className="meta-label">
                                                Level
                                            </span>

                                            <span className="meta-value">
                                                {course.level || '—'}
                                            </span>
                                        </div>

                                        <div className="meta-item">
                                            <span className="meta-label">
                                                Price
                                            </span>

                                            <span className="meta-value">
                                                {course.is_free
                                                    ? 'Free'
                                                    : `${Number(
                                                        course.price || 0
                                                    ).toLocaleString()} RWF`}
                                            </span>
                                        </div>

                                        <div className="meta-item">
                                            <span className="meta-label">
                                                Status
                                            </span>

                                            <span className="meta-value">
                                                {course.status === 'published'
                                                    ? 'Published'
                                                    : 'Draft'}
                                            </span>
                                        </div>

                                        <div className="meta-item">
                                            <span className="meta-label">
                                                Created
                                            </span>

                                            <span className="meta-value">
                                                {formatDate(
                                                    course.created_at
                                                )}
                                            </span>
                                        </div>

                                        <div className="meta-item">
                                            <span className="meta-label">
                                                Updated
                                            </span>

                                            <span className="meta-value">
                                                {formatDate(
                                                    course.updated_at
                                                )}
                                            </span>
                                        </div>

                                        <div className="meta-item">
                                            <span className="meta-label">
                                                Slug
                                            </span>

                                            <span
                                                className="meta-value"
                                                title={course.slug}
                                            >
                                                {course.slug || '—'}
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* COURSE ACTIONS */}
                            <div className="content-card">

                                <div className="card-header">

                                    <div className="card-title-wrap">
                                        <div className="card-title-icon">
                                            <i className="bi bi-lightning-charge"></i>
                                        </div>

                                        <div>
                                            <h3 className="card-title">
                                                Quick Actions
                                            </h3>

                                            <p className="card-subtitle">
                                                Manage this course
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-body">

                                    <div className="d-grid gap-2">

                                        <Link
                                            href={route(
                                                'admin.courses.edit',
                                                course.id
                                            )}
                                            className="course-btn course-btn-primary"
                                        >
                                            <i className="bi bi-pencil"></i>
                                            Edit Course
                                        </Link>

                                        <button
                                            type="button"
                                            className="course-btn course-btn-light"
                                            data-bs-toggle="modal"
                                            data-bs-target="#addLessonModal"
                                        >
                                            <i className="bi bi-plus-circle"></i>
                                            Add New Lesson
                                        </button>

                                        {course.video && (
                                            <a
                                                href={course.video}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="course-btn course-btn-light"
                                            >
                                                <i className="bi bi-play-circle"></i>
                                                Watch Preview
                                            </a>
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* ADD LESSON MODAL */}
            <div
                className="modal fade lesson-modal"
                id="addLessonModal"
                tabIndex="-1"
                aria-labelledby="addLessonModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <form onSubmit={handleAddLesson}>

                            <div className="modal-header">

                                <div>
                                    <h5
                                        className="modal-title fw-bold mb-1"
                                        id="addLessonModalLabel"
                                    >
                                        Add New Lesson
                                    </h5>

                                    <small className="text-muted">
                                        Add a lesson to {course.title}
                                    </small>
                                </div>

                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>

                            </div>

                            <div className="modal-body">

                                <div className="mb-3">
                                    <label className="form-label-modern">
                                        Lesson Title
                                    </label>

                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={e =>
                                            setData(
                                                'title',
                                                e.target.value
                                            )
                                        }
                                        className="form-control-modern"
                                        placeholder="e.g. Introduction to the course"
                                        required
                                    />

                                    {errors.title && (
                                        <div className="field-error">
                                            {errors.title}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label-modern">
                                        Lesson Content
                                    </label>

                                    <textarea
                                        value={data.content}
                                        onChange={e =>
                                            setData(
                                                'content',
                                                e.target.value
                                            )
                                        }
                                        className="form-control-modern"
                                        placeholder="Describe what students will learn in this lesson..."
                                        rows="4"
                                    />

                                    {errors.content && (
                                        <div className="field-error">
                                            {errors.content}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label-modern">
                                        Video URL
                                    </label>

                                    <input
                                        type="url"
                                        value={data.video_url}
                                        onChange={e =>
                                            setData(
                                                'video_url',
                                                e.target.value
                                            )
                                        }
                                        className="form-control-modern"
                                        placeholder="https://youtube.com/..."
                                        required
                                    />

                                    {errors.video_url && (
                                        <div className="field-error">
                                            {errors.video_url}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-0">
                                    <label className="form-label-modern">
                                        Lesson Order
                                    </label>

                                    <input
                                        type="number"
                                        min="1"
                                        value={data.order}
                                        onChange={e =>
                                            setData(
                                                'order',
                                                e.target.value
                                            )
                                        }
                                        className="form-control-modern"
                                    />
                                </div>

                            </div>

                            <div className="modal-footer">

                                <button
                                    type="button"
                                    className="modal-btn modal-btn-cancel"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="modal-btn modal-btn-save"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                            ></span>
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-check-lg me-1"></i>
                                            Save Lesson
                                        </>
                                    )}
                                </button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}