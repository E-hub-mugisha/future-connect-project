import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/*
|--------------------------------------------------------------------------
| COURSE INDEX
|--------------------------------------------------------------------------
*/

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

    const hasFilters = Boolean(
        search || status || level || categoryId
    );

    function handleFilter(event) {
        event.preventDefault();

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

    return (
        <AppLayout>
            <Head title="Course Library" />

            <style>{styles}</style>

            <div className="courses-page">

                {/* =====================================================
                    PAGE HEADER
                ===================================================== */}

                <section className="courses-header">
                    <div className="header-left">
                        <div className="breadcrumb">
                            <span>Admin</span>
                            <ChevronRightIcon />
                            <strong>Courses</strong>
                        </div>

                        <div className="title-row">
                            <div className="title-icon">
                                <BookOpenIcon size={25} />
                            </div>

                            <div>
                                <h1>Course Library</h1>
                                <p>
                                    Create, manage and monitor your
                                    learning content.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link
                        href={route('admin.courses.create')}
                        className="primary-button"
                    >
                        <PlusIcon size={18} />
                        Create course
                    </Link>
                </section>

                {/* =====================================================
                    STATISTICS
                ===================================================== */}

                <section className="stats-grid">

                    <StatCard
                        icon={<BookOpenIcon />}
                        label="Total courses"
                        value={stats.total ?? 0}
                        description="All courses"
                        type="blue"
                    />

                    <StatCard
                        icon={<CheckCircleIcon />}
                        label="Published"
                        value={stats.published ?? 0}
                        description="Available to learners"
                        type="green"
                    />

                    <StatCard
                        icon={<EditIcon />}
                        label="Drafts"
                        value={stats.draft ?? 0}
                        description="Still being prepared"
                        type="orange"
                    />

                    <StatCard
                        icon={<UsersIcon />}
                        label="Enrollments"
                        value={stats.enrollments ?? 0}
                        description="Total learners"
                        type="purple"
                    />

                </section>

                {/* =====================================================
                    MAIN CONTENT
                ===================================================== */}

                <section className="library-card">

                    {/* Library heading */}

                    <div className="library-header">
                        <div>
                            <div className="library-title">
                                <GridIcon size={18} />
                                <h2>All courses</h2>
                            </div>

                            <p>
                                {courseData.length} course
                                {courseData.length !== 1
                                    ? 's'
                                    : ''}{' '}
                                displayed
                            </p>
                        </div>

                        {hasFilters && (
                            <button
                                type="button"
                                className="clear-all-button"
                                onClick={resetFilters}
                            >
                                <CloseIcon size={14} />
                                Clear filters
                            </button>
                        )}
                    </div>

                    {/* =================================================
                        FILTER BAR
                    ================================================= */}

                    <form
                        onSubmit={handleFilter}
                        className="filters"
                    >
                        <div className="search-box">
                            <SearchIcon size={18} />

                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search courses..."
                            />

                            {search && (
                                <button
                                    type="button"
                                    className="search-clear"
                                    onClick={() =>
                                        setSearch('')
                                    }
                                >
                                    <CloseIcon size={13} />
                                </button>
                            )}
                        </div>

                        <FilterSelect
                            value={status}
                            onChange={setStatus}
                            options={[
                                {
                                    value: '',
                                    label: 'All status',
                                },
                                {
                                    value: 'published',
                                    label: 'Published',
                                },
                                {
                                    value: 'draft',
                                    label: 'Draft',
                                },
                            ]}
                        />

                        <FilterSelect
                            value={level}
                            onChange={setLevel}
                            options={[
                                {
                                    value: '',
                                    label: 'All levels',
                                },
                                {
                                    value: 'Beginner',
                                    label: 'Beginner',
                                },
                                {
                                    value: 'Intermediate',
                                    label: 'Intermediate',
                                },
                                {
                                    value: 'Advanced',
                                    label: 'Advanced',
                                },
                            ]}
                        />

                        <FilterSelect
                            value={categoryId}
                            onChange={setCategoryId}
                            options={[
                                {
                                    value: '',
                                    label: 'All categories',
                                },
                                ...categories.map(
                                    (category) => ({
                                        value: category.id,
                                        label: category.name,
                                    })
                                ),
                            ]}
                        />

                        <button
                            type="submit"
                            className="filter-button"
                        >
                            <FilterIcon size={16} />
                            Apply
                        </button>
                    </form>

                    {/* =================================================
                        COURSE CONTENT
                    ================================================= */}

                    {courseData.length > 0 ? (
                        <>
                            <div className="desktop-table">

                                <div className="table-header">
                                    <div className="course-column">
                                        Course
                                    </div>

                                    <div>Creator</div>
                                    <div>Category</div>
                                    <div>Level</div>
                                    <div>Price</div>
                                    <div>Students</div>
                                    <div>Status</div>
                                    <div>Actions</div>
                                </div>

                                <div className="table-body">

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

                            {/* MOBILE */}

                            <div className="mobile-list">

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

                            {/* PAGINATION */}

                            {courses?.links &&
                                courses.links.length > 3 && (
                                    <Pagination
                                        links={courses.links}
                                    />
                                )}
                        </>
                    ) : (
                        <EmptyCourses
                            filtered={hasFilters}
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


/*
|--------------------------------------------------------------------------
| STAT CARD
|--------------------------------------------------------------------------
*/

function StatCard({
    icon,
    label,
    value,
    description,
    type,
}) {
    return (
        <div className={`stat-card stat-${type}`}>

            <div className="stat-top">
                <div className="stat-icon">
                    {icon}
                </div>

                <span className="stat-arrow">
                    <ArrowUpIcon size={14} />
                </span>
            </div>

            <div className="stat-value">
                {Number(value ?? 0).toLocaleString()}
            </div>

            <div className="stat-label">
                {label}
            </div>

            <div className="stat-description">
                {description}
            </div>
        </div>
    );
}


/*
|--------------------------------------------------------------------------
| FILTER SELECT
|--------------------------------------------------------------------------
*/

function FilterSelect({
    value,
    onChange,
    options,
}) {
    return (
        <div className="filter-select">

            <select
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
            >
                {options.map((option) => (
                    <option
                        key={String(option.value)}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            <ChevronDownIcon size={15} />
        </div>
    );
}


/*
|--------------------------------------------------------------------------
| COURSE ROW
|--------------------------------------------------------------------------
*/

function CourseRow({
    course,
    index,
    onDelete,
}) {
    const image = course.thumbnail
        ? `/images/thumbnails/${course.thumbnail}`
        : '/images/placeholder-course.png';

    const enrollments = Number(
        course.enrollments_count ?? 0
    );

    return (
        <div className="course-row">

            {/* COURSE */}

            <div className="course-column course-main">

                <span className="course-number">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <img
                    src={image}
                    alt={course.title}
                    className="course-image"
                    onError={(event) => {
                        event.currentTarget.src =
                            '/images/placeholder-course.png';
                    }}
                />

                <div className="course-info">

                    <Link
                        href={route(
                            'admin.courses.show',
                            course.slug
                        )}
                        className="course-title"
                    >
                        {course.title}
                    </Link>

                    <p>
                        {truncate(
                            course.description,
                            65
                        )}
                    </p>

                </div>
            </div>


            {/* CREATOR */}

            <div className="creator">

                <div className="avatar">
                    {getInitials(
                        course.talent?.name
                    )}
                </div>

                <span>
                    {course.talent?.name ??
                        'Unassigned'}
                </span>

            </div>


            {/* CATEGORY */}

            <div>
                <span className="category-badge">
                    <span className="category-dot" />

                    {course.category?.name ??
                        'Uncategorized'}
                </span>
            </div>


            {/* LEVEL */}

            <div>
                <LevelBadge
                    level={course.level}
                />
            </div>


            {/* PRICE */}

            <div className="price">

                {course.is_free ? (
                    <span className="free-price">
                        Free
                    </span>
                ) : (
                    <>
                        <strong>
                            {Number(
                                course.price ?? 0
                            ).toLocaleString()}
                        </strong>

                        <small>RWF</small>
                    </>
                )}

            </div>


            {/* STUDENTS */}

            <div className="students">

                <div className="student-count">
                    {enrollments.toLocaleString()}
                </div>

                <span>
                    learners
                </span>

            </div>


            {/* STATUS */}

            <div>
                <StatusBadge
                    status={course.status}
                />
            </div>


            {/* ACTIONS */}

            <CourseActions
                course={course}
                onDelete={onDelete}
            />

        </div>
    );
}


/*
|--------------------------------------------------------------------------
| MOBILE COURSE CARD
|--------------------------------------------------------------------------
*/

function MobileCourseCard({
    course,
    index,
    onDelete,
}) {
    const image = course.thumbnail
        ? `/images/thumbnails/${course.thumbnail}`
        : '/images/placeholder-course.png';

    const enrollments = Number(
        course.enrollments_count ?? 0
    );

    return (
        <article className="mobile-course-card">

            <div className="mobile-card-top">

                <span className="mobile-number">
                    #{String(index + 1).padStart(2, '0')}
                </span>

                <StatusBadge
                    status={course.status}
                />

            </div>

            <div className="mobile-course-main">

                <img
                    src={image}
                    alt={course.title}
                    className="mobile-image"
                    onError={(event) => {
                        event.currentTarget.src =
                            '/images/placeholder-course.png';
                    }}
                />

                <div className="mobile-course-info">

                    <Link
                        href={route(
                            'admin.courses.show',
                            course.slug
                        )}
                        className="mobile-title"
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

            <div className="mobile-meta">

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
                    <span>Students</span>
                    <strong>
                        {enrollments.toLocaleString()}
                    </strong>
                </div>

            </div>

            <div className="mobile-card-footer">

                {course.is_free ? (
                    <span className="free-price">
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


/*
|--------------------------------------------------------------------------
| COURSE ACTIONS
|--------------------------------------------------------------------------
*/

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
                <EyeIcon size={16} />
            </Link>

            <Link
                href={route(
                    'admin.courses.edit',
                    course.id
                )}
                className="action-button"
                title="Edit course"
            >
                <EditIcon size={16} />
            </Link>

            <button
                type="button"
                className="action-button delete-button"
                title="Delete course"
                onClick={onDelete}
            >
                <TrashIcon size={16} />
            </button>

        </div>
    );
}


/*
|--------------------------------------------------------------------------
| STATUS BADGE
|--------------------------------------------------------------------------
*/

function StatusBadge({ status }) {
    const normalized = String(
        status ?? ''
    ).toLowerCase();

    const published =
        normalized === 'published';

    return (
        <span
            className={`status-badge ${
                published
                    ? 'status-published'
                    : 'status-draft'
            }`}
        >
            <span className="status-dot" />

            {published
                ? 'Published'
                : 'Draft'}
        </span>
    );
}


/*
|--------------------------------------------------------------------------
| LEVEL BADGE
|--------------------------------------------------------------------------
*/

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
        <span
            className={`level-badge ${className}`}
        >
            {level ?? '—'}
        </span>
    );
}


/*
|--------------------------------------------------------------------------
| EMPTY STATE
|--------------------------------------------------------------------------
*/

function EmptyCourses({
    filtered,
    onReset,
    onCreate,
}) {
    return (
        <div className="empty-state">

            <div className="empty-icon">
                {filtered ? (
                    <SearchIcon size={30} />
                ) : (
                    <BookOpenIcon size={30} />
                )}
            </div>

            <span className="empty-label">
                {filtered
                    ? 'No results'
                    : 'Course library'}
            </span>

            <h2>
                {filtered
                    ? 'No courses found'
                    : 'Your course library is empty'}
            </h2>

            <p>
                {filtered
                    ? 'Try changing your search or filters to find another course.'
                    : 'Create your first course and start building learning opportunities for your talent community.'}
            </p>

            {filtered ? (
                <button
                    type="button"
                    className="secondary-button"
                    onClick={onReset}
                >
                    Clear filters
                </button>
            ) : (
                <button
                    type="button"
                    className="primary-button"
                    onClick={onCreate}
                >
                    <PlusIcon size={17} />
                    Create first course
                </button>
            )}

        </div>
    );
}


/*
|--------------------------------------------------------------------------
| PAGINATION
|--------------------------------------------------------------------------
*/

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


/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

function truncate(value, length) {
    if (!value) {
        return 'No description available.';
    }

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
        return parts[0]
            .slice(0, 2)
            .toUpperCase();
    }

    return (
        parts[0][0] +
        parts[parts.length - 1][0]
    ).toUpperCase();
}


/*
|--------------------------------------------------------------------------
| ICONS
|--------------------------------------------------------------------------
*/

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


function BookOpenIcon({ size = 18 }) {
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
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
            <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
            <path d="M8 7h7" />
            <path d="M8 10h5" />
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


function EditIcon({ size = 17 }) {
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


function GridIcon({ size = 18 }) {
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
            <rect
                x="3"
                y="3"
                width="7"
                height="7"
                rx="1"
            />
            <rect
                x="14"
                y="3"
                width="7"
                height="7"
                rx="1"
            />
            <rect
                x="3"
                y="14"
                width="7"
                height="7"
                rx="1"
            />
            <rect
                x="14"
                y="14"
                width="7"
                height="7"
                rx="1"
            />
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
            <circle
                cx="11"
                cy="11"
                r="7"
            />
            <path d="m20 20-4-4" />
        </svg>
    );
}


function FilterIcon({ size = 15 }) {
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
            <path d="M4 6h16" />
            <path d="M7 12h10" />
            <path d="M10 18h4" />
        </svg>
    );
}


function ChevronDownIcon({ size = 14 }) {
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
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}


function ChevronRightIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}


function CloseIcon({ size = 14 }) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}


function ArrowUpIcon({ size = 14 }) {
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
            <path d="M12 19V5" />
            <path d="m6 11 6-6 6 6" />
        </svg>
    );
}


function EyeIcon({ size = 15 }) {
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
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
            <circle
                cx="12"
                cy="12"
                r="3"
            />
        </svg>
    );
}


function TrashIcon({ size = 15 }) {
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
            <path d="M4 7h16" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="m6 7 1 13h10l1-13" />
            <path d="M9 7V4h6v3" />
        </svg>
    );
}


/*
|--------------------------------------------------------------------------
| PAGE STYLES
|--------------------------------------------------------------------------
|
| IMPORTANT:
| This is now a valid JavaScript variable.
| It is rendered inside the React component with:
|
| <style>{styles}</style>
|
|--------------------------------------------------------------------------
*/

const styles = `
    :root {
        --course-primary: #2563eb;
        --course-primary-dark: #1d4ed8;
        --course-text: #172033;
        --course-muted: #64748b;
        --course-light: #f8fafc;
        --course-border: #e5eaf1;
        --course-white: #ffffff;
        --course-green: #16a34a;
        --course-orange: #ea8a0b;
        --course-purple: #7c3aed;
        --course-danger: #dc2626;
        --course-radius: 16px;
    }

    .courses-page {
        width: 100%;
        min-height: 100vh;
        padding: 28px;
        background:
            linear-gradient(
                180deg,
                #f7f9fc 0%,
                #f8fafc 100%
            );
        color: var(--course-text);
        box-sizing: border-box;
    }

    .courses-page *,
    .courses-page *::before,
    .courses-page *::after {
        box-sizing: border-box;
    }

    /* =========================================================
       HEADER
    ========================================================= */

    .courses-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        max-width: 1500px;
        margin: 0 auto 24px;
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 12px;
        color: #94a3b8;
        font-size: 12px;
        font-weight: 600;
    }

    .breadcrumb strong {
        color: #475569;
    }

    .breadcrumb svg {
        color: #cbd5e1;
    }

    .title-row {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .title-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 14px;
        background: #eff6ff;
        color: var(--course-primary);
        border: 1px solid #dbeafe;
    }

    .title-row h1 {
        margin: 0;
        color: #111827;
        font-size: 27px;
        line-height: 1.15;
        font-weight: 800;
        letter-spacing: -0.025em;
    }

    .title-row p {
        margin: 5px 0 0;
        color: var(--course-muted);
        font-size: 13px;
    }

    .primary-button {
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 0 17px;
        border: 0;
        border-radius: 10px;
        background: var(--course-primary);
        color: #fff;
        text-decoration: none;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        box-shadow:
            0 5px 15px rgba(37, 99, 235, .18);
        transition:
            transform .18s ease,
            background .18s ease,
            box-shadow .18s ease;
    }

    .primary-button:hover {
        background: var(--course-primary-dark);
        color: #fff;
        transform: translateY(-1px);
        box-shadow:
            0 8px 20px rgba(37, 99, 235, .22);
    }

    /* =========================================================
       STATISTICS
    ========================================================= */

    .stats-grid {
        width: 100%;
        max-width: 1500px;
        margin: 0 auto 24px;
        display: grid;
        grid-template-columns:
            repeat(4, minmax(0, 1fr));
        gap: 16px;
    }

    .stat-card {
        position: relative;
        min-height: 165px;
        overflow: hidden;
        padding: 20px;
        background: #fff;
        border: 1px solid var(--course-border);
        border-radius: var(--course-radius);
        box-shadow:
            0 2px 7px rgba(15, 23, 42, .025);
    }

    .stat-card::after {
        content: "";
        position: absolute;
        width: 90px;
        height: 90px;
        right: -35px;
        bottom: -35px;
        border-radius: 50%;
        opacity: .5;
    }

    .stat-blue::after {
        background: #dbeafe;
    }

    .stat-green::after {
        background: #dcfce7;
    }

    .stat-orange::after {
        background: #ffedd5;
    }

    .stat-purple::after {
        background: #ede9fe;
    }

    .stat-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .stat-icon {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }

    .stat-blue .stat-icon {
        background: #eff6ff;
        color: #2563eb;
    }

    .stat-green .stat-icon {
        background: #f0fdf4;
        color: #16a34a;
    }

    .stat-orange .stat-icon {
        background: #fff7ed;
        color: #ea8a0b;
    }

    .stat-purple .stat-icon {
        background: #f5f3ff;
        color: #7c3aed;
    }

    .stat-arrow {
        width: 27px;
        height: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #f8fafc;
        color: #94a3b8;
    }

    .stat-value {
        position: relative;
        z-index: 1;
        color: #111827;
        font-size: 28px;
        line-height: 1;
        font-weight: 800;
        letter-spacing: -.03em;
    }

    .stat-label {
        margin-top: 8px;
        color: #334155;
        font-size: 13px;
        font-weight: 700;
    }

    .stat-description {
        margin-top: 4px;
        color: #94a3b8;
        font-size: 11px;
    }

    /* =========================================================
       LIBRARY CARD
    ========================================================= */

    .library-card {
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        overflow: hidden;
        background: #fff;
        border: 1px solid var(--course-border);
        border-radius: 18px;
        box-shadow:
            0 4px 20px rgba(15, 23, 42, .035);
    }

    .library-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 22px 24px 18px;
    }

    .library-title {
        display: flex;
        align-items: center;
        gap: 9px;
    }

    .library-title svg {
        color: var(--course-primary);
    }

    .library-title h2 {
        margin: 0;
        color: #172033;
        font-size: 17px;
        font-weight: 800;
    }

    .library-header p {
        margin: 5px 0 0 27px;
        color: #94a3b8;
        font-size: 12px;
    }

    .clear-all-button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 0;
        background: transparent;
        color: #64748b;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
    }

    .clear-all-button:hover {
        color: var(--course-primary);
    }

    /* =========================================================
       FILTERS
    ========================================================= */

    .filters {
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 0 24px 20px;
        border-bottom: 1px solid var(--course-border);
    }

    .search-box {
        min-width: 260px;
        height: 40px;
        flex: 1;
        max-width: 400px;
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 0 12px;
        background: #f8fafc;
        border: 1px solid #e6ebf2;
        border-radius: 9px;
        color: #94a3b8;
        transition:
            border-color .18s ease,
            background .18s ease;
    }

    .search-box:focus-within {
        background: #fff;
        border-color: #93c5fd;
        box-shadow:
            0 0 0 3px rgba(59, 130, 246, .08);
    }

    .search-box input {
        width: 100%;
        min-width: 0;
        height: 100%;
        padding: 0;
        outline: none;
        border: 0;
        background: transparent;
        color: #1e293b;
        font-size: 12px;
    }

    .search-box input::placeholder {
        color: #a3afbf;
    }

    .search-clear {
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border: 0;
        border-radius: 50%;
        background: #e2e8f0;
        color: #64748b;
        cursor: pointer;
    }

    .filter-select {
        position: relative;
        min-width: 135px;
        height: 40px;
    }

    .filter-select select {
        width: 100%;
        height: 100%;
        appearance: none;
        outline: none;
        padding: 0 34px 0 12px;
        border: 1px solid #e6ebf2;
        border-radius: 9px;
        background: #fff;
        color: #475569;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
    }

    .filter-select svg {
        position: absolute;
        top: 50%;
        right: 11px;
        pointer-events: none;
        transform: translateY(-50%);
        color: #94a3b8;
    }

    .filter-button {
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        padding: 0 15px;
        border: 0;
        border-radius: 9px;
        background: #172033;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: background .18s ease;
    }

    .filter-button:hover {
        background: #0f172a;
    }

    /* =========================================================
       DESKTOP TABLE
    ========================================================= */

    .desktop-table {
        width: 100%;
        overflow-x: auto;
    }

    .table-header,
    .course-row {
        display: grid;
        grid-template-columns:
            minmax(300px, 2.5fr)
            minmax(130px, 1fr)
            minmax(125px, 1fr)
            105px
            105px
            90px
            110px
            125px;
        min-width: 1100px;
    }

    .table-header {
        padding: 0 24px;
        min-height: 46px;
        align-items: center;
        background: #f8fafc;
        border-top: 1px solid #eef2f6;
        border-bottom: 1px solid var(--course-border);
        color: #94a3b8;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: .07em;
        text-transform: uppercase;
    }

    .course-row {
        min-height: 88px;
        padding: 12px 24px;
        align-items: center;
        border-bottom: 1px solid #eef2f6;
        transition:
            background .18s ease;
    }

    .course-row:last-child {
        border-bottom: 0;
    }

    .course-row:hover {
        background: #fbfdff;
    }

    .course-main {
        min-width: 0;
    }

    .course-column {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
    }

    .course-number {
        width: 23px;
        flex-shrink: 0;
        color: #cbd5e1;
        font-size: 10px;
        font-weight: 800;
    }

    .course-image {
        width: 64px;
        height: 48px;
        flex-shrink: 0;
        object-fit: cover;
        border-radius: 9px;
        background: #eef2f7;
        border: 1px solid #e8edf3;
    }

    .course-info {
        min-width: 0;
    }

    .course-title {
        display: block;
        max-width: 100%;
        overflow: hidden;
        color: #1e293b;
        font-size: 13px;
        line-height: 1.35;
        font-weight: 750;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .course-title:hover {
        color: var(--course-primary);
    }

    .course-info p {
        max-width: 300px;
        margin: 4px 0 0;
        overflow: hidden;
        color: #94a3b8;
        font-size: 10px;
        line-height: 1.4;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    /* =========================================================
       CREATOR
    ========================================================= */

    .creator {
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .creator > span:last-child {
        min-width: 0;
        overflow: hidden;
        color: #475569;
        font-size: 11px;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .avatar {
        width: 29px;
        height: 29px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #eff6ff;
        color: #2563eb;
        font-size: 9px;
        font-weight: 800;
        border: 1px solid #dbeafe;
    }

    /* =========================================================
       CATEGORY
    ========================================================= */

    .category-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        max-width: 115px;
        overflow: hidden;
        padding: 5px 8px;
        border-radius: 6px;
        background: #f8fafc;
        color: #64748b;
        font-size: 10px;
        font-weight: 650;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .category-dot {
        width: 5px;
        height: 5px;
        flex-shrink: 0;
        border-radius: 50%;
        background: #60a5fa;
    }

    /* =========================================================
       LEVEL
    ========================================================= */

    .level-badge {
        display: inline-flex;
        align-items: center;
        padding: 5px 8px;
        border-radius: 6px;
        font-size: 9px;
        font-weight: 800;
        white-space: nowrap;
    }

    .level-beginner {
        background: #ecfdf5;
        color: #15803d;
    }

    .level-intermediate {
        background: #fff7ed;
        color: #c2410c;
    }

    .level-advanced {
        background: #fef2f2;
        color: #b91c1c;
    }

    .level-default {
        background: #f1f5f9;
        color: #64748b;
    }

    /* =========================================================
       PRICE
    ========================================================= */

    .price {
        display: flex;
        align-items: baseline;
        gap: 3px;
    }

    .price strong {
        color: #1e293b;
        font-size: 11px;
    }

    .price small {
        color: #94a3b8;
        font-size: 8px;
        font-weight: 700;
    }

    .free-price {
        color: #15803d;
        font-size: 10px;
        font-weight: 800;
    }

    /* =========================================================
       STUDENTS
    ========================================================= */

    .students {
        display: flex;
        flex-direction: column;
    }

    .student-count {
        color: #334155;
        font-size: 12px;
        font-weight: 800;
    }

    .students span {
        margin-top: 2px;
        color: #94a3b8;
        font-size: 8px;
    }

    /* =========================================================
       STATUS
    ========================================================= */

    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 8px;
        border-radius: 999px;
        font-size: 9px;
        font-weight: 800;
        white-space: nowrap;
    }

    .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    .status-published {
        background: #ecfdf3;
        color: #15803d;
    }

    .status-published .status-dot {
        background: #22c55e;
    }

    .status-draft {
        background: #fff7ed;
        color: #c2410c;
    }

    .status-draft .status-dot {
        background: #f59e0b;
    }

    /* =========================================================
       ACTIONS
    ========================================================= */

    .course-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 5px;
    }

    .action-button {
        width: 32px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e5eaf1;
        border-radius: 8px;
        background: #fff;
        color: #64748b;
        text-decoration: none;
        cursor: pointer;
        transition:
            background .18s ease,
            border-color .18s ease,
            color .18s ease,
            transform .18s ease;
    }

    .action-button:hover {
        background: #f8fafc;
        border-color: #cbd5e1;
        color: var(--course-primary);
        transform: translateY(-1px);
    }

    .delete-button:hover {
        background: #fef2f2;
        border-color: #fecaca;
        color: var(--course-danger);
    }

    /* =========================================================
       MOBILE LIST
    ========================================================= */

    .mobile-list {
        display: none;
    }

    /* =========================================================
       EMPTY STATE
    ========================================================= */

    .empty-state {
        padding: 70px 25px;
        text-align: center;
    }

    .empty-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 18px;
        border-radius: 18px;
        background: #eff6ff;
        color: var(--course-primary);
    }

    .empty-label {
        color: #2563eb;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: .08em;
        text-transform: uppercase;
    }

    .empty-state h2 {
        margin: 8px 0 7px;
        color: #172033;
        font-size: 20px;
        font-weight: 800;
    }

    .empty-state p {
        max-width: 450px;
        margin: 0 auto 20px;
        color: #94a3b8;
        font-size: 12px;
        line-height: 1.7;
    }

    .secondary-button {
        min-height: 40px;
        padding: 0 15px;
        border: 1px solid #dbe2ea;
        border-radius: 9px;
        background: #fff;
        color: #475569;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
    }

    .secondary-button:hover {
        border-color: #bfdbfe;
        color: var(--course-primary);
    }

    /* =========================================================
       PAGINATION
    ========================================================= */

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 18px 24px;
        border-top: 1px solid #eef2f6;
    }

    .page-button {
        min-width: 34px;
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 8px;
        border: 1px solid #e5eaf1;
        border-radius: 8px;
        background: #fff;
        color: #64748b;
        font-size: 11px;
        font-weight: 700;
        text-decoration: none;
    }

    .page-button:hover {
        border-color: #bfdbfe;
        color: var(--course-primary);
    }

    .page-button.active {
        border-color: var(--course-primary);
        background: var(--course-primary);
        color: #fff;
    }

    .page-button.disabled {
        opacity: .45;
        cursor: default;
    }

    /* =========================================================
       MOBILE CARD
    ========================================================= */

    .mobile-course-card {
        margin: 12px;
        padding: 15px;
        border: 1px solid #e5eaf1;
        border-radius: 14px;
        background: #fff;
        box-shadow:
            0 2px 8px rgba(15, 23, 42, .03);
    }

    .mobile-card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 13px;
    }

    .mobile-number {
        color: #94a3b8;
        font-size: 10px;
        font-weight: 800;
    }

    .mobile-course-main {
        display: flex;
        gap: 12px;
    }

    .mobile-image {
        width: 76px;
        height: 58px;
        flex-shrink: 0;
        object-fit: cover;
        border-radius: 9px;
        background: #f1f5f9;
    }

    .mobile-course-info {
        min-width: 0;
    }

    .mobile-title {
        display: block;
        color: #1e293b;
        font-size: 13px;
        line-height: 1.35;
        font-weight: 800;
        text-decoration: none;
    }

    .mobile-title:hover {
        color: var(--course-primary);
    }

    .mobile-course-info p {
        margin: 5px 0 0;
        color: #94a3b8;
        font-size: 10px;
        line-height: 1.5;
    }

    .mobile-meta {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 16px;
        padding-top: 14px;
        border-top: 1px solid #eef2f6;
    }

    .mobile-meta > div {
        min-width: 0;
    }

    .mobile-meta span:first-child {
        display: block;
        margin-bottom: 4px;
        color: #94a3b8;
        font-size: 9px;
        font-weight: 600;
    }

    .mobile-meta strong {
        display: block;
        overflow: hidden;
        color: #475569;
        font-size: 10px;
        font-weight: 750;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .mobile-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-top: 15px;
        padding-top: 13px;
        border-top: 1px solid #eef2f6;
    }

    .mobile-price {
        color: #334155;
        font-size: 11px;
        font-weight: 800;
    }

    /* =========================================================
       RESPONSIVE
    ========================================================= */

    @media (max-width: 1200px) {
        .stats-grid {
            grid-template-columns:
                repeat(2, minmax(0, 1fr));
        }

        .filters {
            flex-wrap: wrap;
        }

        .search-box {
            max-width: none;
            flex-basis: 100%;
        }
    }

    @media (max-width: 850px) {
        .courses-page {
            padding: 18px;
        }

        .courses-header {
            align-items: flex-start;
            flex-direction: column;
        }

        .courses-header .primary-button {
            width: 100%;
        }

        .stats-grid {
            gap: 10px;
        }

        .stat-card {
            min-height: 145px;
            padding: 16px;
        }

        .library-header {
            padding: 18px;
        }

        .filters {
            padding: 0 18px 18px;
        }
    }

    @media (max-width: 680px) {
        .courses-page {
            padding: 12px;
        }

        .title-row h1 {
            font-size: 23px;
        }

        .title-row p {
            font-size: 11px;
        }

        .title-icon {
            width: 44px;
            height: 44px;
        }

        .stats-grid {
            grid-template-columns: 1fr 1fr;
        }

        .stat-value {
            font-size: 23px;
        }

        .stat-label {
            font-size: 11px;
        }

        .stat-description {
            font-size: 9px;
        }

        .desktop-table {
            display: none;
        }

        .mobile-list {
            display: block;
            background: #f8fafc;
            padding: 1px 0;
        }

        .library-header {
            align-items: flex-start;
        }

        .clear-all-button {
            padding-top: 4px;
        }

        .filters {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .search-box {
            grid-column: 1 / -1;
            min-width: 0;
        }

        .filter-select {
            width: 100%;
            min-width: 0;
        }

        .filter-button {
            width: 100%;
        }

        .pagination {
            padding: 15px 10px;
            overflow-x: auto;
            justify-content: flex-start;
        }
    }

    @media (max-width: 430px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }

        .title-row {
            align-items: flex-start;
        }

        .filters {
            grid-template-columns: 1fr;
        }

        .search-box {
            grid-column: auto;
        }

        .mobile-meta {
            gap: 8px;
        }

        .mobile-course-card {
            margin: 10px;
            padding: 13px;
        }
    }
`;