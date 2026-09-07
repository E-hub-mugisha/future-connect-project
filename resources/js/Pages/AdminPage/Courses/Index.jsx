import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({
    courses,
    categories = [],
    stats = {},
    filters = {},
}) {
    const [search, setSearch] = useState(filters.search ?? '');
    const [status, setStatus] = useState(filters.status ?? '');
    const [level, setLevel] = useState(filters.level ?? '');
    const [categoryId, setCategoryId] = useState(
        filters.category_id ?? ''
    );

    const courseData = courses?.data ?? [];

    function handleFilter(e) {
        e.preventDefault();

        router.get(
            route('admin.courses.index'),
            {
                search: search || undefined,
                status: status || undefined,
                level: level || undefined,
                category_id: categoryId || undefined,
            },
            {
                preserveState: true,
                replace: true,
                preserveScroll: true,
            }
        );
    }

    function resetFilters() {
        setSearch('');
        setStatus('');
        setLevel('');
        setCategoryId('');

        router.get(
            route('admin.courses.index'),
            {},
            {
                preserveState: false,
                replace: true,
            }
        );
    }

    function handleDelete(course) {
        const confirmed = window.confirm(
            `Delete "${course.title}"?\n\nThis action cannot be undone.`
        );

        if (!confirmed) return;

        router.delete(
            route('admin.courses.destroy', course.id),
            {
                preserveScroll: true,
            }
        );
    }

    const hasFilters =
        search ||
        status ||
        level ||
        categoryId;

    return (
        <AppLayout>
            <Head title="Course Library" />

            <style>{styles}</style>

            <div className="talent-courses-page">
                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="courses-hero">
                    <div className="hero-content">
                        <div className="hero-eyebrow">
                            <span className="eyebrow-dot" />
                            Talent learning hub
                        </div>

                        <h1>
                            Course
                            <span> Library</span>
                        </h1>

                        <p>
                            Build, manage and monitor learning
                            experiences that help talent grow their
                            skills and unlock new opportunities.
                        </p>

                        <div className="hero-meta">
                            <div className="hero-meta-item">
                                <span className="hero-meta-number">
                                    {stats.total ?? 0}
                                </span>
                                <span>Courses available</span>
                            </div>

                            <div className="hero-meta-divider" />

                            <div className="hero-meta-item">
                                <span className="hero-meta-number">
                                    {stats.enrollments ?? 0}
                                </span>
                                <span>Total enrollments</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-action">
                        <Link
                            href={route('admin.courses.create')}
                            className="create-course-button"
                        >
                            <PlusIcon />
                            Create course
                        </Link>
                    </div>

                    <div className="hero-decoration">
                        <span />
                        <span />
                        <span />
                    </div>
                </section>

                {/* =====================================================
                    PERFORMANCE OVERVIEW
                ===================================================== */}
                <section className="performance-section">
                    <div className="section-heading">
                        <div>
                            <span className="section-kicker">
                                Platform overview
                            </span>

                            <h2>
                                Learning performance
                            </h2>
                        </div>

                        <span className="updated-label">
                            Course library
                        </span>
                    </div>

                    <div className="performance-grid">
                        <OverviewCard
                            icon={<BookIcon />}
                            label="Total courses"
                            value={stats.total ?? 0}
                            description="Across all categories"
                            type="blue"
                        />

                        <OverviewCard
                            icon={<CheckCircleIcon />}
                            label="Published"
                            value={stats.published ?? 0}
                            description="Currently visible to talent"
                            type="green"
                        />

                        <OverviewCard
                            icon={<EditIcon />}
                            label="Draft courses"
                            value={stats.draft ?? 0}
                            description="Still being prepared"
                            type="orange"
                        />

                        <OverviewCard
                            icon={<UsersIcon />}
                            label="Enrollments"
                            value={stats.enrollments ?? 0}
                            description="Talent learning activity"
                            type="dark"
                        />
                    </div>
                </section>

                {/* =====================================================
                    FILTER / SEARCH
                ===================================================== */}
                <section className="library-toolbar">
                    <div className="toolbar-heading">
                        <div className="library-icon">
                            <GridIcon />
                        </div>

                        <div>
                            <h2>Course library</h2>
                            <span>
                                {courseData.length} course
                                {courseData.length !== 1
                                    ? 's'
                                    : ''}{' '}
                                on this page
                            </span>
                        </div>
                    </div>

                    <form
                        onSubmit={handleFilter}
                        className="filter-form"
                    >
                        <div className="search-input">
                            <SearchIcon />

                            <input
                                type="search"
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                placeholder="Search courses..."
                            />

                            {search && (
                                <button
                                    type="button"
                                    className="clear-search"
                                    onClick={() =>
                                        setSearch('')
                                    }
                                >
                                    <CloseIcon />
                                </button>
                            )}
                        </div>

                        <div className="select-wrapper">
                            <select
                                value={status}
                                onChange={(e) =>
                                    setStatus(
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">
                                    All status
                                </option>
                                <option value="published">
                                    Published
                                </option>
                                <option value="draft">
                                    Draft
                                </option>
                            </select>

                            <ChevronDownIcon />
                        </div>

                        <div className="select-wrapper">
                            <select
                                value={level}
                                onChange={(e) =>
                                    setLevel(
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">
                                    All levels
                                </option>
                                <option value="Beginner">
                                    Beginner
                                </option>
                                <option value="Intermediate">
                                    Intermediate
                                </option>
                                <option value="Advanced">
                                    Advanced
                                </option>
                            </select>

                            <ChevronDownIcon />
                        </div>

                        <div className="select-wrapper category-select">
                            <select
                                value={categoryId}
                                onChange={(e) =>
                                    setCategoryId(
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">
                                    All categories
                                </option>

                                {categories.map(
                                    (category) => (
                                        <option
                                            key={
                                                category.id
                                            }
                                            value={
                                                category.id
                                            }
                                        >
                                            {category.name}
                                        </option>
                                    )
                                )}
                            </select>

                            <ChevronDownIcon />
                        </div>

                        <button
                            type="submit"
                            className="filter-button"
                        >
                            <FilterIcon />
                            Apply
                        </button>

                        {hasFilters && (
                            <button
                                type="button"
                                className="reset-filter"
                                onClick={resetFilters}
                            >
                                Reset
                            </button>
                        )}
                    </form>
                </section>

                {/* =====================================================
                    COURSE LIST
                ===================================================== */}
                <section className="course-library">
                    {courseData.length > 0 ? (
                        <>
                            {/* Desktop */}
                            <div className="desktop-course-table">
                                <div className="course-table-head">
                                    <span className="course-col-main">
                                        Course
                                    </span>
                                    <span>Creator</span>
                                    <span>Category</span>
                                    <span>Level</span>
                                    <span>Pricing</span>
                                    <span>Reach</span>
                                    <span>Status</span>
                                    <span />
                                </div>

                                <div className="course-table-body">
                                    {courseData.map(
                                        (course, index) => (
                                            <CourseRow
                                                key={course.id}
                                                course={course}
                                                index={index}
                                                onDelete={() =>
                                                    handleDelete(
                                                        course
                                                    )
                                                }
                                            />
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="mobile-course-list">
                                {courseData.map(
                                    (course, index) => (
                                        <MobileCourseCard
                                            key={course.id}
                                            course={course}
                                            index={index}
                                            onDelete={() =>
                                                handleDelete(
                                                    course
                                                )
                                            }
                                        />
                                    )
                                )}
                            </div>

                            {/* Pagination */}
                            {courses?.links &&
                                courses.links.length >
                                    3 && (
                                    <Pagination
                                        links={
                                            courses.links
                                        }
                                    />
                                )}
                        </>
                    ) : (
                        <EmptyCourses
                            filtered={Boolean(
                                hasFilters
                            )}
                            onReset={resetFilters}
                            onCreate={() =>
                                router.visit(
                                    route(
                                        'admin.courses.create'
                                    )
                                )
                            }
                        />
                    )}
                </section>
            </div>
        </AppLayout>
    );
}

/* ========================================================================
   OVERVIEW CARD
======================================================================== */

function OverviewCard({
    icon,
    label,
    value,
    description,
    type,
}) {
    return (
        <div className={`overview-card ${type}`}>
            <div className="overview-top">
                <div className="overview-icon">
                    {icon}
                </div>

                <span className="overview-arrow">
                    <ArrowUpIcon />
                </span>
            </div>

            <div className="overview-value">
                {Number(value ?? 0).toLocaleString()}
            </div>

            <div className="overview-label">
                {label}
            </div>

            <div className="overview-description">
                {description}
            </div>
        </div>
    );
}

/* ========================================================================
   DESKTOP COURSE ROW
======================================================================== */

function CourseRow({
    course,
    index,
    onDelete,
}) {
    const image = course.thumbnail
        ? `/images/thumbnails/${course.thumbnail}`
        : '/images/placeholder-course.png';

    const enrollments =
        Number(course.enrollments_count ?? 0);

    return (
        <div className="course-row">
            <div className="course-information">
                <div className="course-number">
                    {String(index + 1).padStart(2, '0')}
                </div>

                <img
                    src={image}
                    alt={course.title}
                    className="course-image"
                    onError={(e) => {
                        e.currentTarget.src =
                            '/images/placeholder-course.png';
                    }}
                />

                <div className="course-info-copy">
                    <Link
                        href={route(
                            'admin.courses.show',
                            course.slug
                        )}
                        className="course-name"
                    >
                        {course.title}
                    </Link>

                    <span className="course-description">
                        {truncate(
                            course.description,
                            70
                        )}
                    </span>
                </div>
            </div>

            <div className="creator-cell">
                <div className="creator-avatar">
                    {getInitials(
                        course.talent?.name
                    )}
                </div>

                <span>
                    {course.talent?.name ?? 'Unassigned'}
                </span>
            </div>

            <div className="category-cell">
                <span className="category-pill">
                    <span />
                    {course.category?.name ??
                        'Uncategorized'}
                </span>
            </div>

            <div>
                <LevelBadge level={course.level} />
            </div>

            <div>
                {course.is_free ? (
                    <span className="price-free">
                        Free
                    </span>
                ) : (
                    <div className="price-cell">
                        <strong>
                            {Number(
                                course.price ?? 0
                            ).toLocaleString()}
                        </strong>
                        <span>RWF</span>
                    </div>
                )}
            </div>

            <div className="reach-cell">
                <div className="reach-number">
                    {enrollments.toLocaleString()}
                </div>

                <div className="reach-label">
                    learners
                </div>
            </div>

            <div>
                <StatusBadge
                    status={course.status}
                />
            </div>

            <CourseActions
                course={course}
                onDelete={onDelete}
            />
        </div>
    );
}

/* ========================================================================
   MOBILE COURSE CARD
======================================================================== */

function MobileCourseCard({
    course,
    index,
    onDelete,
}) {
    const image = course.thumbnail
        ? `/images/thumbnails/${course.thumbnail}`
        : '/images/placeholder-course.png';

    return (
        <article className="mobile-course-card">
            <div className="mobile-course-top">
                <span className="mobile-index">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <StatusBadge
                    status={course.status}
                />
            </div>

            <div className="mobile-course-main">
                <img
                    src={image}
                    alt={course.title}
                    className="mobile-course-image"
                    onError={(e) => {
                        e.currentTarget.src =
                            '/images/placeholder-course.png';
                    }}
                />

                <div>
                    <Link
                        href={route(
                            'admin.courses.show',
                            course.slug
                        )}
                        className="mobile-course-title"
                    >
                        {course.title}
                    </Link>

                    <p>
                        {truncate(
                            course.description,
                            100
                        )}
                    </p>
                </div>
            </div>

            <div className="mobile-course-meta">
                <div>
                    <span>Creator</span>
                    <strong>
                        {course.talent?.name ??
                            'Unassigned'}
                    </strong>
                </div>

                <div>
                    <span>Category</span>
                    <strong>
                        {course.category?.name ??
                            'Uncategorized'}
                    </strong>
                </div>

                <div>
                    <span>Level</span>
                    <LevelBadge
                        level={course.level}
                    />
                </div>

                <div>
                    <span>Enrollment</span>
                    <strong>
                        {Number(
                            course.enrollments_count ??
                                0
                        ).toLocaleString()}
                    </strong>
                </div>
            </div>

            <div className="mobile-course-footer">
                {course.is_free ? (
                    <span className="mobile-price">
                        Free course
                    </span>
                ) : (
                    <span className="mobile-price">
                        {Number(
                            course.price ?? 0
                        ).toLocaleString()}{' '}
                        RWF
                    </span>
                )}

                <CourseActions
                    course={course}
                    onDelete={onDelete}
                />
            </div>
        </article>
    );
}

/* ========================================================================
   COURSE ACTIONS
======================================================================== */

function CourseActions({
    course,
    onDelete,
}) {
    return (
        <div className="course-actions">
            <Link
                href={route(
                    'admin.courses.show',
                    course.slug
                )}
                className="action-button"
                title="View course"
            >
                <EyeIcon />
            </Link>

            <Link
                href={route(
                    'admin.courses.edit',
                    course.id
                )}
                className="action-button"
                title="Edit course"
            >
                <EditIcon />
            </Link>

            <button
                type="button"
                className="action-button delete-action"
                title="Delete course"
                onClick={onDelete}
            >
                <TrashIcon />
            </button>
        </div>
    );
}

/* ========================================================================
   BADGES
======================================================================== */

function StatusBadge({ status }) {
    const published = status === 'published';

    return (
        <span
            className={`status-badge ${
                published ? 'published' : 'draft'
            }`}
        >
            <span className="status-dot" />
            {published ? 'Published' : 'Draft'}
        </span>
    );
}

function LevelBadge({ level }) {
    const normalized = String(
        level ?? ''
    ).toLowerCase();

    let className = 'level-default';

    if (normalized === 'beginner') {
        className = 'level-beginner';
    }

    if (normalized === 'intermediate') {
        className = 'level-intermediate';
    }

    if (normalized === 'advanced') {
        className = 'level-advanced';
    }

    return (
        <span className={`level-badge ${className}`}>
            {level ?? '—'}
        </span>
    );
}

/* ========================================================================
   EMPTY
======================================================================== */

function EmptyCourses({
    filtered,
    onReset,
    onCreate,
}) {
    return (
        <div className="empty-courses">
            <div className="empty-icon">
                {filtered ? (
                    <SearchIcon size={28} />
                ) : (
                    <BookIcon size={28} />
                )}
            </div>

            <span className="empty-kicker">
                {filtered
                    ? 'No matches'
                    : 'Course library'}
            </span>

            <h2>
                {filtered
                    ? 'No courses match your filters'
                    : 'Your learning library is empty'}
            </h2>

            <p>
                {filtered
                    ? 'Try adjusting your search or filters to find what you are looking for.'
                    : 'Create your first course and start building learning opportunities for your talent community.'}
            </p>

            {filtered ? (
                <button
                    type="button"
                    className="empty-button"
                    onClick={onReset}
                >
                    Clear filters
                </button>
            ) : (
                <button
                    type="button"
                    className="empty-button"
                    onClick={onCreate}
                >
                    <PlusIcon />
                    Create first course
                </button>
            )}
        </div>
    );
}

/* ========================================================================
   PAGINATION
======================================================================== */

function Pagination({ links }) {
    return (
        <div className="pagination">
            {links.map((link, index) => {
                if (!link.url) {
                    return (
                        <span
                            key={index}
                            className="page-button disabled"
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                        />
                    );
                }

                return (
                    <Link
                        key={index}
                        href={link.url}
                        preserveState
                        preserveScroll
                        className={`page-button ${
                            link.active
                                ? 'active'
                                : ''
                        }`}
                        dangerouslySetInnerHTML={{
                            __html: link.label,
                        }}
                    />
                );
            })}
        </div>
    );
}

/* ========================================================================
   HELPERS
======================================================================== */

function truncate(value, length) {
    if (!value) return 'No description available.';

    const string = String(value);

    return string.length > length
        ? `${string.slice(0, length).trim()}…`
        : string;
}

function getInitials(name) {
    if (!name) return '?';

    const parts = String(name)
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }

    return (
        parts[0][0] +
        parts[parts.length - 1][0]
    ).toUpperCase();
}

/* ========================================================================
   ICONS
======================================================================== */

function PlusIcon({ size = 16 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
        </svg>
    );
}

function BookIcon({ size = 18 }) {
    return (
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
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
            <path d="M8 6h8" />
            <path d="M8 10h7" />
        </svg>
    );
}

function CheckCircleIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 2.5 2.5L16 9" />
        </svg>
    );
}

function EditIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
        </svg>
    );
}

function UsersIcon() {
    return (
        <svg
            width="18"
            height="18"
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
    );
}

function GridIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
    );
}

function SearchIcon({ size = 17 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </svg>
    );
}

function FilterIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        >
            <path d="M4 6h16" />
            <path d="M7 12h10" />
            <path d="M10 18h4" />
        </svg>
    );
}

function ChevronDownIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

function ArrowUpIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 19V5" />
            <path d="m6 11 6-6 6 6" />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function EyeIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function TrashIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 7h16" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="m6 7 1 13h10l1-13" />
            <path d="M9 7V4h6v3" />
        </svg>
    );
}

<style>{`
    /* =========================================================
       RESPONSIVE COURSE TABLE
       ========================================================= */

    .course-table-wrap {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        border-top: 1px solid var(--line);
    }

    .course-table {
        width: 100%;
        min-width: 1050px;
        border-collapse: separate;
        border-spacing: 0;
        table-layout: fixed;
    }

    .course-table th {
        padding: 13px 18px;
        background: #f8fafc;
        border-bottom: 1px solid var(--line);
        color: #718096;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: .06em;
        text-transform: uppercase;
        text-align: left;
        white-space: nowrap;
    }

    .course-table td {
        padding: 16px 18px;
        border-bottom: 1px solid #edf1f5;
        vertical-align: middle;
        background: #fff;
    }

    .course-table tbody tr {
        transition:
            background .18s ease,
            box-shadow .18s ease;
    }

    .course-table tbody tr:hover td {
        background: #fbfcfe;
    }

    .course-table tbody tr:last-child td {
        border-bottom: 0;
    }

    /* Column widths */

    .course-table th:nth-child(1),
    .course-table td:nth-child(1) {
        width: 31%;
    }

    .course-table th:nth-child(2),
    .course-table td:nth-child(2) {
        width: 15%;
    }

    .course-table th:nth-child(3),
    .course-table td:nth-child(3) {
        width: 13%;
    }

    .course-table th:nth-child(4),
    .course-table td:nth-child(4) {
        width: 10%;
    }

    .course-table th:nth-child(5),
    .course-table td:nth-child(5) {
        width: 11%;
    }

    .course-table th:nth-child(6),
    .course-table td:nth-child(6) {
        width: 9%;
    }

    .course-table th:nth-child(7),
    .course-table td:nth-child(7) {
        width: 7%;
    }

    .course-table th:nth-child(8),
    .course-table td:nth-child(8) {
        width: 4%;
        min-width: 105px;
    }

    /* Course information */

    .course-cell {
        display: flex;
        align-items: center;
        gap: 13px;
        min-width: 0;
    }

    .course-cover {
        width: 58px;
        height: 46px;
        min-width: 58px;
        border-radius: 9px;
        overflow: hidden;
        background: #eef3f9;
        border: 1px solid #e2e8f0;
    }

    .course-cover img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }

    .course-info {
        min-width: 0;
    }

    .course-title {
        display: block;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        color: #172033;
        font-size: 14px;
        font-weight: 750;
        line-height: 1.35;
    }

    .course-description {
        margin-top: 4px;
        max-width: 330px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        color: #8995a7;
        font-size: 12px;
        line-height: 1.4;
    }

    .course-type {
        display: inline-flex;
        align-items: center;
        margin-top: 6px;
        padding: 3px 7px;
        border-radius: 5px;

        background: #f1f5f9;
        color: #64748b;

        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .04em;
    }

    /* Talent */

    .talent-cell {
        display: flex;
        align-items: center;
        gap: 9px;
        min-width: 0;
    }

    .talent-avatar {
        width: 32px;
        height: 32px;
        min-width: 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        background: #eaf1fa;
        color: #426fae;

        font-size: 11px;
        font-weight: 800;
    }

    .talent-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        color: #374151;
        font-size: 12px;
        font-weight: 650;
    }

    /* Category */

    .category-cell {
        display: flex;
        align-items: center;
        gap: 7px;
        min-width: 0;
    }

    .category-dot {
        width: 7px;
        height: 7px;
        min-width: 7px;
        border-radius: 50%;
        background: var(--primary, #5D89C8);
    }

    .category-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        color: #526071;
        font-size: 12px;
        font-weight: 600;
    }

    /* Level */

    .level-badge {
        display: inline-flex;
        align-items: center;
        padding: 5px 8px;
        border-radius: 6px;

        background: #f6f8fb;
        border: 1px solid #e8edf3;

        color: #536173;
        font-size: 11px;
        font-weight: 700;
        white-space: nowrap;
    }

    /* Price */

    .course-price {
        color: #1e293b;
        font-size: 12px;
        font-weight: 750;
        white-space: nowrap;
    }

    .course-price.free {
        color: #23815a;
    }

    /* Status */

    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;

        padding: 5px 8px;
        border-radius: 999px;

        font-size: 10px;
        font-weight: 800;
        white-space: nowrap;
    }

    .status-dot {
        width: 6px;
        height: 6px;
        min-width: 6px;
        border-radius: 50%;
    }

    .status-published {
        background: #ecf8f2;
        color: #18794e;
    }

    .status-published .status-dot {
        background: #26a269;
    }

    .status-draft {
        background: #fff7e8;
        color: #a66a08;
    }

    .status-draft .status-dot {
        background: #d99419;
    }

    .status-default {
        background: #f1f4f7;
        color: #64748b;
    }

    .status-default .status-dot {
        background: #94a3b8;
    }

    /* Enrollment */

    .enrollment-cell {
        display: inline-flex;
        align-items: center;
        gap: 6px;

        color: #526071;
        font-size: 12px;
        font-weight: 700;
        white-space: nowrap;
    }

    /* Actions */

    .course-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 5px;
    }

    .course-action {
        width: 32px;
        height: 32px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        border: 1px solid #e4eaf1;
        border-radius: 7px;
        background: #fff;

        color: #64748b;
        cursor: pointer;

        transition:
            background .18s ease,
            color .18s ease,
            border-color .18s ease,
            transform .18s ease;
    }

    .course-action:hover {
        background: #f4f7fb;
        border-color: #d5dfeb;
        color: #426fae;
        transform: translateY(-1px);
    }

    .course-action.danger:hover {
        background: #fff3f2;
        border-color: #f3d1cd;
        color: #c0392b;
    }

    .course-action svg {
        width: 15px;
        height: 15px;
    }


    /* =========================================================
       TABLET
       ========================================================= */

    @media (max-width: 1200px) {

        .course-table {
            min-width: 960px;
        }

        .course-table th,
        .course-table td {
            padding-left: 13px;
            padding-right: 13px;
        }

        .course-cover {
            width: 52px;
            height: 42px;
            min-width: 52px;
        }

        .course-title {
            font-size: 13px;
        }

        .course-description {
            max-width: 230px;
        }
    }


    /* =========================================================
       SMALL TABLET
       ========================================================= */

    @media (max-width: 1000px) {

        .course-table {
            min-width: 850px;
        }

        /* Hide lower-priority columns */
        .course-table th:nth-child(3),
        .course-table td:nth-child(3) {
            display: none;
        }

        .course-table th:nth-child(4),
        .course-table td:nth-child(4) {
            display: none;
        }

        .course-table th:nth-child(5),
        .course-table td:nth-child(5) {
            width: 13%;
        }

        .course-table th:nth-child(6),
        .course-table td:nth-child(6) {
            width: 12%;
        }

        .course-table th:nth-child(7),
        .course-table td:nth-child(7) {
            width: 10%;
        }

        .course-table th:nth-child(8),
        .course-table td:nth-child(8) {
            width: 110px;
        }
    }


    /* =========================================================
       MOBILE
       ========================================================= */

    @media (max-width: 760px) {

        /*
         * Don't squeeze the table.
         * Turn each row into a clean mobile block.
         */

        .course-table-wrap {
            overflow: visible;
            border-top: 0;
        }

        .course-table {
            display: block;
            min-width: 0;
            width: 100%;
        }

        .course-table thead {
            display: none;
        }

        .course-table tbody {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 12px;
            background: #f7f9fc;
        }

        .course-table tbody tr {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-areas:
                "course actions"
                "meta meta"
                "details details";

            gap: 12px;

            padding: 14px;

            background: #fff;
            border: 1px solid #e4eaf1;
            border-radius: 12px;

            box-shadow: 0 2px 7px rgba(20, 35, 55, .035);
        }

        .course-table tbody tr:hover td {
            background: transparent;
        }

        .course-table td {
            display: block;
            width: auto !important;
            min-width: 0;

            padding: 0;
            border: 0;
            background: transparent;
        }

        /* Course */

        .course-table td:nth-child(1) {
            grid-area: course;
        }

        .course-table td:nth-child(1) .course-cell {
            align-items: flex-start;
        }

        .course-cover {
            width: 62px;
            height: 52px;
            min-width: 62px;
            border-radius: 9px;
        }

        .course-title {
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .course-description {
            max-width: none;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        /* Actions */

        .course-table td:nth-child(8) {
            grid-area: actions;
            align-self: start;
        }

        .course-actions {
            justify-content: flex-end;
        }

        .course-action {
            width: 31px;
            height: 31px;
        }

        /*
         * Put talent/category into a metadata row
         */

        .course-table td:nth-child(2) {
            grid-area: meta;
            padding-top: 2px;
            padding-bottom: 2px;

            border-top: 1px solid #edf1f5;
            border-bottom: 1px solid #edf1f5;
        }

        .talent-cell {
            min-height: 32px;
        }

        /* Hide category on mobile */

        .course-table td:nth-child(3),
        .course-table th:nth-child(3) {
            display: none;
        }

        /* Details row */

        .course-table td:nth-child(4),
        .course-table td:nth-child(5),
        .course-table td:nth-child(6),
        .course-table td:nth-child(7) {
            display: inline-flex;
            align-items: center;
        }

        .course-table td:nth-child(4) {
            grid-area: details;
        }

        /*
         * Create a flexible details row.
         */

        .course-table tbody tr {
            position: relative;
        }

        .course-table td:nth-child(4),
        .course-table td:nth-child(5),
        .course-table td:nth-child(6),
        .course-table td:nth-child(7) {
            margin-right: 14px;
        }

        .course-table td:nth-child(4)::before {
            content: "Level";
            margin-right: 5px;
            color: #98a2b3;
            font-size: 10px;
            font-weight: 700;
        }

        .course-table td:nth-child(5)::before {
            content: "Price";
            margin-right: 5px;
            color: #98a2b3;
            font-size: 10px;
            font-weight: 700;
        }

        .course-table td:nth-child(6)::before {
            content: "";
        }

        .course-table td:nth-child(7)::before {
            content: "Learners";
            margin-right: 5px;
            color: #98a2b3;
            font-size: 10px;
            font-weight: 700;
        }

        .course-table td:nth-child(6) {
            /*
             * Move status into the details area visually.
             */
            display: inline-flex;
        }

        .course-table td:nth-child(7) {
            display: inline-flex;
        }
    }


    /* =========================================================
       VERY SMALL PHONES
       ========================================================= */

    @media (max-width: 480px) {

        .course-table tbody {
            padding: 9px;
            gap: 8px;
        }

        .course-table tbody tr {
            padding: 12px;
            border-radius: 10px;

            grid-template-columns: minmax(0, 1fr) auto;
            gap: 10px;
        }

        .course-cover {
            width: 54px;
            height: 46px;
            min-width: 54px;
        }

        .course-cell {
            gap: 9px;
        }

        .course-title {
            font-size: 12.5px;
        }

        .course-description {
            font-size: 11px;
        }

        .course-type {
            font-size: 9px;
            padding: 3px 6px;
        }

        .course-action {
            width: 29px;
            height: 29px;
        }

        .course-action svg {
            width: 13px;
            height: 13px;
        }

        /*
         * Make the details area wrap naturally.
         */

        .course-table td:nth-child(4),
        .course-table td:nth-child(5),
        .course-table td:nth-child(6),
        .course-table td:nth-child(7) {
            margin-right: 8px;
            margin-bottom: 3px;
        }

        .level-badge {
            font-size: 10px;
            padding: 4px 6px;
        }

        .course-price,
        .enrollment-cell {
            font-size: 11px;
        }

        .status-badge {
            font-size: 9px;
            padding: 4px 6px;
        }
    }


    /* =========================================================
       TABLET LANDSCAPE / TOUCH DEVICES
       ========================================================= */

    @media (hover: none) and (pointer: coarse) {

        .course-action {
            min-width: 34px;
            min-height: 34px;
        }

        .course-table tbody tr:hover td {
            background: #fff;
        }
    }
`}</style>