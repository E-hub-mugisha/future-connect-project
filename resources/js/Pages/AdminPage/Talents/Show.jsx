import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AppLayout";

/**
 * Skills Profile — Admin (show)
 *
 * Expects `talent` to be a fully-loaded resource with relations:
 * category, skills[], stories[], feedback[], connections[], courses[],
 * supports[], user (nullable). Dates arrive pre-formatted or as ISO
 * strings — see formatDate/timeAgo helpers below.
 */
export default function Show({ talent, flash }) {
    const routes = {
        index: () => route("admin.talents.index"),
        edit: (id) => route("admin.talents.edit", id),
        destroy: (id) => route("admin.talents.destroy", id),
    };

    const status = (talent.status || "inactive").toLowerCase();

    const destroyTalent = () => {
        if (!confirm(`Permanently delete ${talent.name}?`)) return;
        router.delete(routes.destroy(talent.id));
    };

    return (
        <AdminLayout>
            <Head title="Skills Profile" />
            <style>{css}</style>

            <div data-h-scope="profile" className="profile-page">
                {flash?.success && (
                    <div className="flash-success mb-4">
                        <CheckIcon />
                        {flash.success}
                    </div>
                )}

                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <Link href={routes.index()}>Skills</Link>
                    <span className="sep">›</span>
                    <span className="current">{talent.name}</span>
                </div>

                {/* Hero */}
                <div className="hero-band">
                    {talent.image ? (
                        <img
                            src={talent.image}
                            alt={talent.name}
                            className="hero-avatar"
                        />
                    ) : (
                        <div className="hero-avatar-placeholder">
                            {talent.name?.charAt(0)?.toUpperCase()}
                        </div>
                    )}

                    <div className="hero-info">
                        <div className="hero-badges">
                            <span className={`badge badge-${status}`}>
                                <span className="badge-dot" />
                                {cap(status)}
                            </span>
                            {talent.featured && (
                                <span className="badge-featured">
                                    ★ Featured
                                </span>
                            )}
                            {talent.level && (
                                <span className="level-pill">
                                    {cap(talent.level)}
                                </span>
                            )}
                            {talent.matched && (
                                <span className="badge-matched">✓ Matched</span>
                            )}
                        </div>
                        <div className="hero-name">{talent.name}</div>
                        <div className="hero-category">
                            {talent.category?.name ?? "No Category"}
                            {talent.language ? ` · ${talent.language}` : ""}
                        </div>
                        <div className="hero-meta">
                            {talent.email && (
                                <div className="hero-meta-item">
                                    <MailIcon /> {talent.email}
                                </div>
                            )}
                            {talent.phone && (
                                <div className="hero-meta-item">
                                    <PhoneIcon /> {talent.phone}
                                </div>
                            )}
                            {talent.address && (
                                <div className="hero-meta-item">
                                    <PinIcon /> {talent.address}
                                </div>
                            )}
                            <div className="hero-meta-item">
                                <CalendarIcon /> Joined{" "}
                                {formatDate(talent.created_at)}
                            </div>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <Link
                            href={routes.edit(talent.id)}
                            className="btn-edit-solid"
                        >
                            <PencilIcon /> Edit
                        </Link>
                        <Link href={routes.index()} className="btn-secondary">
                            ← Back
                        </Link>
                        <button
                            type="button"
                            className="btn-danger-outline"
                            onClick={destroyTalent}
                        >
                            <TrashIcon /> Delete
                        </button>
                    </div>
                </div>

                {/* Stat cards */}
                <div className="stat-grid">
                    <MiniStat
                        tone="accent"
                        icon={<SkillIcon />}
                        value={talent.skills?.length ?? 0}
                        label="Skills"
                    />
                    <MiniStat
                        tone="neutral"
                        icon={<BookIcon />}
                        value={talent.stories?.length ?? 0}
                        label="Stories"
                    />
                    <MiniStat
                        tone="neutral"
                        icon={<ChatIcon />}
                        value={talent.feedback?.length ?? 0}
                        label="Feedback"
                    />
                    <MiniStat
                        tone="neutral"
                        icon={<LinkIcon />}
                        value={talent.connections?.length ?? 0}
                        label="Connections"
                    />
                    <MiniStat
                        tone="neutral"
                        icon={<CapIcon />}
                        value={talent.courses?.length ?? 0}
                        label="Courses"
                    />
                    <MiniStat
                        tone="neutral"
                        icon={<HeartIcon />}
                        value={talent.supports?.length ?? 0}
                        label="Supports"
                    />
                </div>

                {/* Content grid */}
                <div className="content-grid">
                    {/* LEFT */}
                    <div className="col-left">
                        <Card
                            icon={<UserIcon />}
                            tone="neutral"
                            title="Profile Information"
                        >
                            <InfoRow label="Name" value={talent.name} />
                            <InfoRow
                                label="Email"
                                value={talent.email}
                                empty="Not provided"
                            />
                            <InfoRow
                                label="Phone"
                                value={talent.phone}
                                empty="Not provided"
                            />
                            <InfoRow
                                label="Address"
                                value={talent.address}
                                empty="Not provided"
                            />
                            <InfoRow
                                label="Language"
                                value={talent.language}
                                empty="Not specified"
                            />
                            <InfoRow
                                label="Category"
                                value={talent.category?.name}
                                empty="—"
                            />
                            <InfoRow
                                label="Level"
                                value={
                                    talent.level ? (
                                        <span className="level-pill">
                                            {cap(talent.level)}
                                        </span>
                                    ) : null
                                }
                                empty="Not specified"
                            />
                        </Card>

                        {talent.description && (
                            <Card
                                icon={<TextIcon />}
                                tone="neutral"
                                title="Bio / Description"
                                noPadding
                            >
                                <div className="description-text">
                                    {talent.description}
                                </div>
                            </Card>
                        )}

                        <Card
                            icon={<SkillIcon />}
                            tone="accent"
                            title="Skills"
                            count={talent.skills?.length ?? 0}
                            noPadding
                        >
                            {talent.skills?.length > 0 ? (
                                <div className="skills-wrap">
                                    {talent.skills.map((skill) => (
                                        <span
                                            key={skill.id}
                                            className="skill-tag"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <SubEmpty
                                    icon={<QuestionIcon />}
                                    text="No skills added yet"
                                />
                            )}
                        </Card>

                        <Card
                            icon={<BookIcon />}
                            tone="neutral"
                            title="Stories"
                            count={talent.stories?.length ?? 0}
                            noPadding
                        >
                            {talent.stories?.length > 0 ? (
                                talent.stories.slice(0, 5).map((story) => (
                                    <div className="story-item" key={story.id}>
                                        {story.image && (
                                            <img
                                                src={story.image}
                                                alt=""
                                                className="story-thumb"
                                            />
                                        )}
                                        <div>
                                            <div className="story-title">
                                                {story.title ??
                                                    "Untitled Story"}
                                            </div>
                                            <div className="story-date">
                                                {formatDate(story.created_at)}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <SubEmpty
                                    icon={<FolderIcon />}
                                    text="No stories yet"
                                />
                            )}
                        </Card>
                    </div>

                    {/* RIGHT */}
                    <div className="col-right">
                        <Card
                            icon={<ChatIcon />}
                            tone="neutral"
                            title="Feedback"
                            count={talent.feedback?.length ?? 0}
                            noPadding
                        >
                            {talent.feedback?.length > 0 ? (
                                talent.feedback.slice(0, 4).map((fb) => (
                                    <div className="feedback-item" key={fb.id}>
                                        <div className="feedback-header">
                                            <span className="feedback-author">
                                                {fb.name ?? "Anonymous"}
                                            </span>
                                            <span className="feedback-date">
                                                {formatDate(fb.created_at)}
                                            </span>
                                        </div>
                                        {fb.rating != null && (
                                            <div className="stars">
                                                {Array.from(
                                                    { length: 5 },
                                                    (_, i) =>
                                                        i < fb.rating
                                                            ? "★"
                                                            : "☆",
                                                ).join("")}
                                            </div>
                                        )}
                                        <div className="feedback-text">
                                            {limit(
                                                fb.message ?? fb.comment ?? "",
                                                120,
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <SubEmpty
                                    icon={<ChatIcon />}
                                    text="No feedback yet"
                                />
                            )}
                        </Card>

                        <Card
                            icon={<LinkIcon />}
                            tone="neutral"
                            title="Connections"
                            count={talent.connections?.length ?? 0}
                            noPadding
                        >
                            {talent.connections?.length > 0 ? (
                                talent.connections.slice(0, 6).map((conn) => (
                                    <div
                                        className="connection-item"
                                        key={conn.id}
                                    >
                                        <div>
                                            <div className="conn-name">
                                                {conn.name ??
                                                    `Connection #${conn.id}`}
                                            </div>
                                            <div className="conn-type">
                                                {conn.type ?? "General"}
                                            </div>
                                        </div>
                                        <span
                                            className={`conn-status ${conn.status === "active" ? "conn-active" : "conn-pending"}`}
                                        >
                                            {cap(conn.status ?? "pending")}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <SubEmpty
                                    icon={<LinkIcon />}
                                    text="No connections yet"
                                />
                            )}
                        </Card>

                        <Card
                            icon={<ClockIcon />}
                            tone="neutral"
                            title="Record Info"
                        >
                            <InfoRow
                                label="Record ID"
                                value={
                                    <span className="mono">#{talent.id}</span>
                                }
                            />
                            <InfoRow
                                label="Created"
                                value={
                                    <span className="sm">
                                        {formatDate(talent.created_at, true)}
                                    </span>
                                }
                            />
                            <InfoRow
                                label="Updated"
                                value={
                                    <span className="sm">
                                        {timeAgo(talent.updated_at)}
                                    </span>
                                }
                            />
                            {talent.user && (
                                <InfoRow
                                    label="Owner"
                                    value={talent.user.name}
                                />
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

/* ── Helpers ── */
function cap(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
function limit(str, n) {
    if (!str) return "";
    return str.length > n ? str.slice(0, n).trim() + "…" : str;
}
function formatDate(value, withTime = false) {
    if (!value) return "N/A";
    const d = new Date(value);
    if (isNaN(d)) return "N/A";
    const opts = withTime
        ? {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          }
        : { day: "2-digit", month: "short", year: "numeric" };
    return d.toLocaleDateString("en-GB", opts).replace(",", ",");
}
function timeAgo(value) {
    if (!value) return "N/A";
    const d = new Date(value);
    if (isNaN(d)) return "N/A";
    const secs = Math.floor((Date.now() - d.getTime()) / 1000);
    const units = [
        ["year", 31536000],
        ["month", 2592000],
        ["week", 604800],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
    ];
    for (const [label, secInUnit] of units) {
        const val = Math.floor(secs / secInUnit);
        if (val >= 1) return `${val} ${label}${val > 1 ? "s" : ""} ago`;
    }
    return "just now";
}

/* ── Small building blocks ── */
function MiniStat({ tone, icon, value, label }) {
    return (
        <div className="stat-card" data-tone={tone}>
            <div className="s-icon">{icon}</div>
            <div className="s-value">{value}</div>
            <div className="s-label">{label}</div>
        </div>
    );
}

function Card({
    icon,
    tone = "neutral",
    title,
    count,
    noPadding = false,
    children,
}) {
    return (
        <div className="ui-card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon" data-tone={tone}>
                        {icon}
                    </div>
                    <h2>{title}</h2>
                </div>
                {count !== undefined && (
                    <span className="count-pill">{count}</span>
                )}
            </div>
            {noPadding ? children : <div className="card-body">{children}</div>}
        </div>
    );
}

function InfoRow({ label, value, empty = "—" }) {
    const isEmpty = value === null || value === undefined || value === "";
    return (
        <div className="info-row">
            <span className="info-label">{label}</span>
            <span className={`info-value ${isEmpty ? "empty" : ""}`}>
                {isEmpty ? empty : value}
            </span>
        </div>
    );
}

function SubEmpty({ icon, text }) {
    return (
        <div className="sub-empty">
            {icon}
            {text}
        </div>
    );
}

/* ── Inline icons ── */
function CheckIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );
}
function MailIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
        </svg>
    );
}
function PhoneIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
        </svg>
    );
}
function PinIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
        </svg>
    );
}
function CalendarIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
        </svg>
    );
}
function PencilIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
            />
        </svg>
    );
}
function TrashIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
        </svg>
    );
}
function SkillIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
            />
        </svg>
    );
}
function BookIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
        </svg>
    );
}
function ChatIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
        </svg>
    );
}
function LinkIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
        </svg>
    );
}
function CapIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
        </svg>
    );
}
function HeartIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
        </svg>
    );
}
function UserIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
        </svg>
    );
}
function TextIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
        </svg>
    );
}
function QuestionIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
        </svg>
    );
}
function FolderIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
        </svg>
    );
}
function ClockIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}

/* ── Styles: monochrome + single green accent, shared tokens with the Skills Registry index ── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

[data-h-scope="profile"] {
    --ink:          #0A0A0A;
    --ink-2:        #45474A;
    --ink-faint:    #90928F;
    --line:         #E2E2DF;
    --line-soft:    #EEEEEB;
    --canvas:       #F5F5F3;
    --surface:      #FFFFFF;
    --surface-alt:  #FAFAF8;

    --accent:       #00A667;
    --accent-ink:   #00814F;
    --accent-soft:  #E3F5EC;

    --radius-lg: 12px;
    --radius-md: 10px;
    --radius-sm: 7px;

    font-family: 'Inter', sans-serif;
}

.profile-page { padding: 28px 32px; background: var(--canvas); }

.flash-success { background: var(--accent-soft); border: 1px solid var(--accent); color: var(--accent-ink); border-radius: var(--radius-md); padding: 12px 18px; font-size: 13px; display: flex; align-items: center; gap: 9px; }

.breadcrumb-bar { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--ink-faint); margin-bottom: 20px; }
.breadcrumb-bar a { color: var(--ink-faint); text-decoration: none; transition: color .15s; }
.breadcrumb-bar a:hover { color: var(--accent-ink); }
.breadcrumb-bar .sep { font-size: 10px; }
.breadcrumb-bar .current { color: var(--ink-2); font-weight: 600; }

.hero-band {
    background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
    padding: 26px 28px; display: flex; gap: 24px; align-items: flex-start; position: relative;
    overflow: hidden; margin-bottom: 20px;
}
.hero-band::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--accent); opacity: .85; }
.hero-avatar { width: 92px; height: 92px; border-radius: 50%; object-fit: cover; border: 1px solid var(--line); flex-shrink: 0; }
.hero-avatar-placeholder { width: 92px; height: 92px; border-radius: 50%; background: var(--ink); color: #fff; font-family: 'Space Grotesk', sans-serif; font-size: 34px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.hero-info { flex: 1; min-width: 0; }
.hero-badges { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; margin-bottom: 9px; }
.hero-name { font-family: 'Space Grotesk', sans-serif; font-size: 23px; font-weight: 600; color: var(--ink); letter-spacing: -.3px; line-height: 1.2; margin-bottom: 4px; }
.hero-category { font-size: 13px; color: var(--ink-faint); margin-bottom: 14px; }
.hero-meta { display: flex; gap: 18px; flex-wrap: wrap; }
.hero-meta-item { display: flex; align-items: center; gap: 5px; font-size: 12.5px; color: var(--ink-2); }
.hero-meta-item svg { color: var(--ink-faint); flex-shrink: 0; }
.hero-actions { display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; min-width: 140px; }

.btn-edit-solid { display: inline-flex; align-items: center; justify-content: center; gap: 6px; background: var(--ink); color: #fff; border: none; border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; font-weight: 500; cursor: pointer; text-decoration: none; transition: background .18s; white-space: nowrap; }
.btn-edit-solid:hover { background: #000; color: #fff; }
.btn-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 6px; background: var(--surface-alt); color: var(--ink-2); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; font-weight: 500; cursor: pointer; text-decoration: none; transition: all .15s; white-space: nowrap; }
.btn-secondary:hover { background: var(--line-soft); color: var(--ink); }
.btn-danger-outline { display: inline-flex; align-items: center; justify-content: center; gap: 6px; background: transparent; color: var(--ink-2); border: 1px dashed var(--ink); border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; cursor: pointer; transition: all .15s; white-space: nowrap; width: 100%; }
.btn-danger-outline:hover { background: var(--ink); color: #fff; border-style: solid; }

.badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 600; }
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.badge-active   { background: var(--accent-soft); color: var(--accent-ink); }
.badge-inactive { background: var(--surface-alt); color: var(--ink-faint); border: 1px solid var(--line); }
.badge-pending  { background: var(--surface-alt); color: var(--ink-2); border: 1px dashed var(--ink-2); }
.badge-featured { background: var(--surface); color: var(--ink); border: 1px solid var(--ink); border-radius: 20px; font-size: 11px; font-weight: 700; padding: 3px 9px; display: inline-flex; align-items: center; gap: 4px; }
.badge-matched  { background: var(--accent); color: #fff; border-radius: 20px; font-size: 11px; font-weight: 700; padding: 3px 9px; display: inline-flex; align-items: center; gap: 4px; }
.level-pill { display: inline-block; padding: 3px 9px; border-radius: 6px; font-size: 11px; font-weight: 600; background: var(--surface-alt); color: var(--ink-2); border: 1px solid var(--line); }

.stat-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; margin-bottom: 20px; }
@media (max-width: 1200px) { .stat-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px)  { .stat-grid { grid-template-columns: repeat(2, 1fr); } }
.stat-card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 16px 18px; position: relative; overflow: hidden; }
.stat-card[data-tone="accent"]  { --tone: var(--accent); --tone-bg: var(--accent-soft); }
.stat-card[data-tone="neutral"] { --tone: var(--ink); --tone-bg: var(--surface-alt); }
.stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--tone); opacity: .8; }
.s-icon { width: 30px; height: 30px; border-radius: 9px; display: flex; align-items: center; justify-content: center; background: var(--tone-bg); color: var(--tone); margin-bottom: 10px; }
.s-value { font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 700; color: var(--ink); letter-spacing: -.4px; line-height: 1; font-variant-numeric: tabular-nums; }
.s-label { font-size: 11px; color: var(--ink-faint); text-transform: uppercase; letter-spacing: .08em; margin-top: 5px; font-weight: 600; }

.content-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; align-items: start; }
@media (max-width: 1000px) { .content-grid { grid-template-columns: 1fr; } }
.col-left, .col-right { display: flex; flex-direction: column; gap: 20px; }

.ui-card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
.card-header { padding: 13px 20px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.card-header-left { display: flex; align-items: center; gap: 9px; }
.card-header-icon { width: 28px; height: 28px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.card-header-icon[data-tone="accent"]  { background: var(--accent-soft); color: var(--accent-ink); }
.card-header-icon[data-tone="neutral"] { background: var(--surface-alt); color: var(--ink-2); }
.card-header h2 { font-size: 13px; font-weight: 600; color: var(--ink); margin: 0; }
.count-pill { background: var(--surface-alt); color: var(--ink-faint); border: 1px solid var(--line); border-radius: 20px; font-size: 11px; font-weight: 600; padding: 2px 9px; font-variant-numeric: tabular-nums; }
.card-body { padding: 18px 20px; }

.info-row { display: flex; gap: 12px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid var(--line-soft); }
.info-row:last-child { border-bottom: none; padding-bottom: 0; }
.info-row:first-child { padding-top: 0; }
.info-label { font-size: 11px; color: var(--ink-faint); text-transform: uppercase; letter-spacing: .07em; font-weight: 600; min-width: 110px; padding-top: 1px; flex-shrink: 0; }
.info-value { font-size: 13.5px; color: var(--ink); flex: 1; line-height: 1.5; }
.info-value.empty { color: var(--ink-faint); font-style: italic; }
.info-value .mono { font-variant-numeric: tabular-nums; font-size: 12.5px; color: var(--ink-faint); }
.info-value .sm { font-size: 12.5px; }

.description-text { font-size: 13.5px; color: var(--ink-2); line-height: 1.75; padding: 18px 20px; }

.skills-wrap { padding: 16px 20px; display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { background: var(--surface-alt); color: var(--ink-2); border: 1px solid var(--line); font-size: 12px; padding: 4px 12px; border-radius: 20px; transition: all .15s; }
.skill-tag:hover { border-color: var(--accent); color: var(--accent-ink); background: var(--accent-soft); }

.feedback-item { padding: 14px 20px; border-bottom: 1px solid var(--line-soft); }
.feedback-item:last-child { border-bottom: none; }
.feedback-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
.feedback-author { font-size: 13px; font-weight: 600; color: var(--ink); }
.feedback-date { font-size: 11px; color: var(--ink-faint); }
.feedback-text { font-size: 12.5px; color: var(--ink-2); line-height: 1.55; margin-top: 4px; }
.stars { color: var(--ink); font-size: 12px; margin-bottom: 4px; }

.story-item { display: flex; align-items: center; gap: 12px; padding: 13px 20px; border-bottom: 1px solid var(--line-soft); }
.story-item:last-child { border-bottom: none; }
.story-thumb { width: 52px; height: 40px; border-radius: var(--radius-sm); object-fit: cover; border: 1px solid var(--line); background: var(--surface-alt); flex-shrink: 0; }
.story-title { font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 2px; }
.story-date { font-size: 11px; color: var(--ink-faint); }

.connection-item { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border-bottom: 1px solid var(--line-soft); gap: 12px; }
.connection-item:last-child { border-bottom: none; }
.conn-name { font-size: 13px; font-weight: 600; color: var(--ink); }
.conn-type { font-size: 11px; color: var(--ink-faint); margin-top: 1px; }
.conn-status { font-size: 11px; font-weight: 600; padding: 3px 9px; border-radius: 20px; }
.conn-active  { background: var(--accent-soft); color: var(--accent-ink); }
.conn-pending { background: var(--surface-alt); color: var(--ink-2); border: 1px dashed var(--ink-2); }

.sub-empty { padding: 28px 20px; text-align: center; font-size: 12.5px; color: var(--ink-faint); }
.sub-empty svg { margin: 0 auto 8px; display: block; opacity: .4; }

@media (max-width: 700px) {
    .hero-band { flex-wrap: wrap; }
    .hero-actions { flex-direction: row; flex-wrap: wrap; min-width: 0; }
}
@media (max-width: 480px) {
    .hero-name { font-size: 20px; }
}
`;
