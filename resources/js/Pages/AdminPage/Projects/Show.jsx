import React, { useEffect, useState } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* -------------------------------------------------------------------------- */
/* Icons                                                                       */
/* -------------------------------------------------------------------------- */

const Icon = {
    ArrowLeft: ({ size = 16 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
        </svg>
    ),

    Check: ({ size = 16 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 4 4L19 6" />
        </svg>
    ),

    CheckCircle: ({ size = 17 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="m8.5 12 2.3 2.3 4.7-5" />
        </svg>
    ),

    Users: ({ size = 17 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),

    User: ({ size = 17 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
    ),

    Mail: ({ size = 15 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    ),

    External: ({ size = 15 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 5h5v5" />
            <path d="M10 14 19 5" />
            <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
        </svg>
    ),

    MapPin: ({ size = 15 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    ),

    Briefcase: ({ size = 17 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
        </svg>
    ),

    Wallet: ({ size = 17 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 7V6a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v8a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V7" />
            <path d="M16 14h.01" />
        </svg>
    ),

    Calendar: ({ size = 16 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    ),

    Link: ({ size = 15 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.07.07l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15" />
            <path d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 7 20l1.15-1.15" />
        </svg>
    ),

    X: ({ size = 18 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6l12 12M18 6 6 18" />
        </svg>
    ),

    FileText: ({ size = 17 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8M8 17h6" />
        </svg>
    ),

    Alert: ({ size = 18 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.3 3.5 2.2 18a2 2 0 0 0 1.75 3h16.1a2 2 0 0 0 1.75-3L13.7 3.5a2 2 0 0 0-3.4 0Z" />
            <path d="M12 9v4M12 17h.01" />
        </svg>
    ),

    Inbox: ({ size = 28 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16v16H4z" />
            <path d="M4 14h4l2 2h4l2-2h4" />
        </svg>
    ),
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

function initials(name) {
    if (!name) return '—';

    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase())
        .join('');
}

function formatBudget(project) {
    if (project.budget_amount == null) return '—';

    const currency = project.budget_currency ?? '';
    const amount = Number(project.budget_amount).toLocaleString();

    return currency ? `${currency} ${amount}` : amount;
}

function timeAgo(dateString) {
    if (!dateString) return '';

    const seconds = Math.floor(
        (new Date() - new Date(dateString)) / 1000
    );

    if (seconds < 0) return 'just now';

    const intervals = [
        ['year', 31536000],
        ['month', 2592000],
        ['week', 604800],
        ['day', 86400],
        ['hour', 3600],
        ['minute', 60],
    ];

    for (const [label, secondsInUnit] of intervals) {
        const count = Math.floor(seconds / secondsInUnit);

        if (count >= 1) {
            return `${count} ${label}${count > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

/* -------------------------------------------------------------------------- */
/* Status                                                                      */
/* -------------------------------------------------------------------------- */

function StatusBadge({ status }) {
    const value = (status ?? '').toLowerCase();

    const map = {
        open: {
            cls: 'status-open',
            label: 'Open',
        },
        in_progress: {
            cls: 'status-progress',
            label: 'In Progress',
        },
        completed: {
            cls: 'status-completed',
            label: 'Completed',
        },
        cancelled: {
            cls: 'status-cancelled',
            label: 'Cancelled',
        },
        closed: {
            cls: 'status-cancelled',
            label: 'Closed',
        },
    };

    const meta = map[value] ?? {
        cls: 'status-neutral',
        label: status
            ? status.charAt(0).toUpperCase() + status.slice(1)
            : 'Unknown',
    };

    return (
        <span className={`project-status ${meta.cls}`}>
            <span className="status-dot" />
            {meta.label}
        </span>
    );
}

function ApplicationStatus({ status }) {
    const value = (status ?? 'pending').toLowerCase();

    const map = {
        pending: {
            cls: 'application-pending',
            label: 'Pending',
        },
        accepted: {
            cls: 'application-accepted',
            label: 'Accepted',
        },
        rejected: {
            cls: 'application-rejected',
            label: 'Rejected',
        },
    };

    const meta = map[value] ?? {
        cls: 'application-neutral',
        label: status ?? 'Pending',
    };

    return (
        <span className={`application-status ${meta.cls}`}>
            {meta.label}
        </span>
    );
}

/* -------------------------------------------------------------------------- */
/* Application Card                                                            */
/* -------------------------------------------------------------------------- */

function ApplicationCard({ application }) {
    const [modal, setModal] = useState(null);
    const [submittingAccept, setSubmittingAccept] = useState(false);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        message: '',
    });

    useEffect(() => {
        if (!modal) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setModal(null);
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [modal]);

    useEffect(() => {
        document.body.style.overflow = modal ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [modal]);

    function closeModal() {
        setModal(null);
        reset();
    }

    function handleAccept() {
        setSubmittingAccept(true);

        router.post(
            route('admin.applications.accept', application.id),
            {},
            {
                preserveScroll: true,
                onSuccess: () => {
                    setModal(null);
                },
                onFinish: () => {
                    setSubmittingAccept(false);
                },
            }
        );
    }

    function handleReject(event) {
        event.preventDefault();

        post(route('admin.applications.reject', application.id), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
            },
        });
    }

    const isPending =
        !application.status ||
        application.status.toLowerCase() === 'pending';

    return (
        <>
            <div className="application-card">
                <div className="application-main">
                    <div className="app-avatar">
                        {initials(application.name)}
                    </div>

                    <div className="application-content">
                        <div className="application-heading">
                            <div>
                                <h4>
                                    {application.name ?? 'Unknown Applicant'}
                                </h4>

                                <div className="application-email">
                                    <Icon.Mail size={13} />
                                    {application.email ?? 'No email provided'}
                                </div>
                            </div>

                            <ApplicationStatus
                                status={application.status}
                            />
                        </div>

                        {application.message && (
                            <div className="application-message">
                                <Icon.FileText size={15} />
                                <p>{application.message}</p>
                            </div>
                        )}

                        <div className="application-meta">
                            <span>
                                <Icon.Calendar size={13} />
                                {timeAgo(application.created_at)}
                            </span>

                            {application.portfolio_url && (
                                <a
                                    href={application.portfolio_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon.Link size={13} />
                                    Portfolio
                                    <Icon.External size={12} />
                                </a>
                            )}
                        </div>

                        {isPending && (
                            <div className="application-actions">
                                <button
                                    type="button"
                                    className="application-btn accept"
                                    onClick={() => setModal('accept')}
                                >
                                    <Icon.Check size={14} />
                                    Accept
                                </button>

                                <button
                                    type="button"
                                    className="application-btn reject"
                                    onClick={() => setModal('reject')}
                                >
                                    Reject
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Accept Modal */}
            {modal === 'accept' && (
                <div
                    className="project-modal-backdrop"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <div
                        className="project-modal"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="modal-icon success">
                            <Icon.CheckCircle size={22} />
                        </div>

                        <button
                            type="button"
                            className="modal-close"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            <Icon.X size={18} />
                        </button>

                        <div className="modal-content">
                            <h3>Accept application?</h3>

                            <p>
                                You are about to accept the application from{' '}
                                <strong>{application.name}</strong>.
                            </p>

                            <div className="modal-applicant">
                                <div className="modal-avatar">
                                    {initials(application.name)}
                                </div>

                                <div>
                                    <strong>{application.name}</strong>
                                    <span>{application.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button
                                type="button"
                                className="modal-btn secondary"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                className="modal-btn success"
                                onClick={handleAccept}
                                disabled={submittingAccept}
                            >
                                <Icon.Check size={15} />
                                {submittingAccept
                                    ? 'Accepting...'
                                    : 'Accept application'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Reject Modal */}
            {modal === 'reject' && (
                <div
                    className="project-modal-backdrop"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <div
                        className="project-modal"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="modal-icon danger">
                            <Icon.Alert size={22} />
                        </div>

                        <button
                            type="button"
                            className="modal-close"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            <Icon.X size={18} />
                        </button>

                        <form onSubmit={handleReject}>
                            <div className="modal-content">
                                <h3>Reject application?</h3>

                                <p>
                                    Let the applicant know why their
                                    application was not selected.
                                </p>

                                <div className="modal-applicant">
                                    <div className="modal-avatar">
                                        {initials(application.name)}
                                    </div>

                                    <div>
                                        <strong>{application.name}</strong>
                                        <span>{application.email}</span>
                                    </div>
                                </div>

                                <label className="modal-label">
                                    Message
                                    <span>Optional</span>
                                </label>

                                <textarea
                                    value={data.message}
                                    onChange={(event) =>
                                        setData(
                                            'message',
                                            event.target.value
                                        )
                                    }
                                    rows={4}
                                    placeholder="Add a short message for the applicant..."
                                    className={`modal-textarea ${
                                        errors.message ? 'has-error' : ''
                                    }`}
                                />

                                {errors.message && (
                                    <div className="modal-error">
                                        {errors.message}
                                    </div>
                                )}
                            </div>

                            <div className="modal-actions">
                                <button
                                    type="button"
                                    className="modal-btn secondary"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="modal-btn danger"
                                    disabled={processing}
                                >
                                    {processing
                                        ? 'Rejecting...'
                                        : 'Reject application'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* Main Page                                                                   */
/* -------------------------------------------------------------------------- */

export default function Show({ project }) {
    const applications = project.applications ?? [];
    const [verifying, setVerifying] = useState(false);

    const pendingApplications = applications.filter(
        (application) =>
            !application.status ||
            application.status.toLowerCase() === 'pending'
    ).length;

    const acceptedApplications = applications.filter(
        (application) =>
            application.status?.toLowerCase() === 'accepted'
    ).length;

    function handleVerify() {
        setVerifying(true);

        router.post(
            route('admin.projects.verify', project.id),
            {},
            {
                preserveScroll: true,
                onFinish: () => setVerifying(false),
            }
        );
    }

    return (
        <AppLayout>
            <Head title={`${project.title} — Project`} />

            <style>{`
                .talent-project-show,
                .talent-project-show * {
                    box-sizing: border-box;
                }

                .talent-project-show {
                    --tp-green: #00a667;
                    --tp-green-dark: #008b57;
                    --tp-green-soft: rgba(0, 166, 103, 0.09);
                    --tp-blue: #3578b7;
                    --tp-red: #d65353;
                    --tp-yellow: #b98717;
                    --tp-text: #17221e;
                    --tp-secondary: #53655f;
                    --tp-muted: #8a9893;
                    --tp-border: #e4e9e6;
                    --tp-surface: #ffffff;
                    --tp-background: #f7f9f8;

                    min-height: 100%;
                    padding: 30px;
                    background: var(--tp-background);
                    color: var(--tp-text);
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                    font-size: 14px;
                }

                .tp-container {
                    width: 100%;
                    max-width: 1240px;
                    margin: 0 auto;
                }

                /* Header */

                .tp-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 18px;
                    font-size: 12px;
                    color: var(--tp-muted);
                }

                .tp-breadcrumb a {
                    color: var(--tp-secondary);
                    text-decoration: none;
                    transition: color .15s ease;
                }

                .tp-breadcrumb a:hover {
                    color: var(--tp-green);
                }

                .tp-breadcrumb-separator {
                    color: #bcc6c2;
                }

                .tp-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 24px;
                }

                .tp-header-left {
                    min-width: 0;
                }

                .tp-kicker {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 8px;
                    color: var(--tp-green);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: .07em;
                    text-transform: uppercase;
                }

                .tp-kicker-line {
                    width: 22px;
                    height: 1px;
                    background: var(--tp-green);
                }

                .tp-header h1 {
                    margin: 0;
                    color: var(--tp-text);
                    font-size: clamp(22px, 3vw, 30px);
                    line-height: 1.15;
                    font-weight: 700;
                    letter-spacing: -0.03em;
                }

                .tp-header-description {
                    max-width: 720px;
                    margin: 8px 0 0;
                    color: var(--tp-secondary);
                    font-size: 13px;
                    line-height: 1.65;
                }

                .tp-header-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                }

                .tp-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-height: 38px;
                    padding: 0 14px;
                    border: 1px solid var(--tp-border);
                    border-radius: 9px;
                    background: var(--tp-surface);
                    color: var(--tp-secondary);
                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    transition:
                        border-color .15s ease,
                        color .15s ease,
                        background .15s ease,
                        transform .15s ease;
                }

                .tp-button:hover {
                    border-color: #c9d5d0;
                    color: var(--tp-green);
                    background: #fbfdfc;
                }

                .tp-button-primary {
                    border-color: var(--tp-green);
                    background: var(--tp-green);
                    color: white;
                    box-shadow: 0 5px 14px rgba(0,166,103,.14);
                }

                .tp-button-primary:hover {
                    border-color: var(--tp-green-dark);
                    background: var(--tp-green-dark);
                    color: white;
                }

                /* Layout */

                .tp-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 440px;
                    gap: 20px;
                    align-items: start;
                }

                .tp-main-column,
                .tp-side-column {
                    min-width: 0;
                }

                .tp-side-column {
                    position: sticky;
                    top: 20px;
                }

                /* Cards */

                .tp-card {
                    background: var(--tp-surface);
                    border: 1px solid var(--tp-border);
                    border-radius: 14px;
                    box-shadow: 0 2px 8px rgba(20, 40, 31, .035);
                    overflow: hidden;
                }

                .tp-card + .tp-card {
                    margin-top: 16px;
                }

                .tp-card-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 17px 20px;
                    border-bottom: 1px solid var(--tp-border);
                }

                .tp-card-header h2 {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: -.01em;
                }

                .tp-card-header p {
                    margin: 3px 0 0;
                    color: var(--tp-muted);
                    font-size: 11px;
                }

                .tp-card-body {
                    padding: 20px;
                }

                /* Project Hero */

                .project-hero {
                    padding: 24px;
                    background:
                        linear-gradient(
                            135deg,
                            rgba(0,166,103,.045),
                            rgba(255,255,255,0) 55%
                        ),
                        #fff;
                }

                .project-hero-top {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 16px;
                    margin-bottom: 18px;
                }

                .project-category {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: var(--tp-green);
                    font-size: 11px;
                    font-weight: 700;
                    margin-bottom: 7px;
                }

                .project-title {
                    margin: 0;
                    font-size: 24px;
                    line-height: 1.25;
                    font-weight: 700;
                    letter-spacing: -.035em;
                    color: var(--tp-text);
                }

                .project-description {
                    margin: 0;
                    color: var(--tp-secondary);
                    font-size: 13px;
                    line-height: 1.75;
                }

                .project-owner {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 20px;
                    padding-top: 18px;
                    border-top: 1px solid var(--tp-border);
                }

                .project-owner-avatar {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: var(--tp-green-soft);
                    border: 1px solid rgba(0,166,103,.16);
                    color: var(--tp-green);
                    font-size: 11px;
                    font-weight: 700;
                }

                .project-owner-details strong {
                    display: block;
                    color: var(--tp-text);
                    font-size: 12px;
                    font-weight: 650;
                }

                .project-owner-details span {
                    display: block;
                    margin-top: 2px;
                    color: var(--tp-muted);
                    font-size: 11px;
                }

                /* Status */

                .project-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    flex-shrink: 0;
                    padding: 5px 9px;
                    border-radius: 999px;
                    font-size: 10px;
                    line-height: 1;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: currentColor;
                }

                .status-open {
                    color: var(--tp-green);
                    background: rgba(0,166,103,.09);
                }

                .status-progress {
                    color: var(--tp-blue);
                    background: rgba(53,120,183,.09);
                }

                .status-completed {
                    color: #687670;
                    background: rgba(104,118,112,.1);
                }

                .status-cancelled {
                    color: var(--tp-red);
                    background: rgba(214,83,83,.09);
                }

                .status-neutral {
                    color: var(--tp-muted);
                    background: rgba(138,152,147,.12);
                }

                /* Info grid */

                .project-info-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    border-top: 1px solid var(--tp-border);
                    border-left: 1px solid var(--tp-border);
                }

                .project-info {
                    padding: 15px;
                    border-right: 1px solid var(--tp-border);
                    border-bottom: 1px solid var(--tp-border);
                }

                .project-info-label {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 7px;
                    color: var(--tp-muted);
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: .055em;
                }

                .project-info-value {
                    color: var(--tp-text);
                    font-size: 13px;
                    font-weight: 650;
                }

                /* Verification */

                .verification-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    margin-top: 18px;
                    padding: 14px;
                    border: 1px solid var(--tp-border);
                    border-radius: 10px;
                    background: #fbfcfc;
                }

                .verification-left {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .verification-icon {
                    width: 34px;
                    height: 34px;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--tp-green-soft);
                    color: var(--tp-green);
                }

                .verification-text strong {
                    display: block;
                    font-size: 12px;
                    font-weight: 650;
                }

                .verification-text span {
                    display: block;
                    margin-top: 2px;
                    color: var(--tp-muted);
                    font-size: 10px;
                }

                /* Applications */

                .applications-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .application-count {
                    min-width: 23px;
                    height: 23px;
                    padding: 0 7px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 999px;
                    background: var(--tp-green-soft);
                    color: var(--tp-green);
                    font-size: 10px;
                    font-weight: 700;
                }

                .application-summary {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: var(--tp-muted);
                    font-size: 10px;
                    font-weight: 500;
                }

                .application-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 14px;
                    max-height: calc(100vh - 170px);
                    overflow-y: auto;
                }

                .application-list::-webkit-scrollbar {
                    width: 5px;
                }

                .application-list::-webkit-scrollbar-thumb {
                    background: #d9e1dd;
                    border-radius: 10px;
                }

                .application-card {
                    padding: 14px;
                    border: 1px solid var(--tp-border);
                    border-radius: 11px;
                    background: #fff;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                .application-card:hover {
                    border-color: #d4ded9;
                    box-shadow: 0 4px 12px rgba(20,40,31,.045);
                }

                .application-main {
                    display: flex;
                    align-items: flex-start;
                    gap: 11px;
                }

                .app-avatar {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: #f0f7f4;
                    border: 1px solid #d8e9e1;
                    color: var(--tp-green);
                    font-size: 11px;
                    font-weight: 700;
                }

                .application-content {
                    min-width: 0;
                    flex: 1;
                }

                .application-heading {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 10px;
                }

                .application-heading h4 {
                    margin: 0 0 3px;
                    color: var(--tp-text);
                    font-size: 12px;
                    font-weight: 700;
                }

                .application-email {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    min-width: 0;
                    color: var(--tp-muted);
                    font-size: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .application-status {
                    display: inline-flex;
                    align-items: center;
                    padding: 4px 7px;
                    border-radius: 999px;
                    font-size: 9px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .application-pending {
                    color: var(--tp-yellow);
                    background: rgba(185,135,23,.09);
                }

                .application-accepted {
                    color: var(--tp-green);
                    background: rgba(0,166,103,.09);
                }

                .application-rejected {
                    color: var(--tp-red);
                    background: rgba(214,83,83,.09);
                }

                .application-neutral {
                    color: var(--tp-muted);
                    background: rgba(138,152,147,.12);
                }

                .application-message {
                    display: flex;
                    align-items: flex-start;
                    gap: 7px;
                    margin-top: 11px;
                    padding: 9px 10px;
                    border-radius: 8px;
                    background: #f8faf9;
                    color: var(--tp-secondary);
                }

                .application-message svg {
                    flex-shrink: 0;
                    margin-top: 2px;
                    color: var(--tp-muted);
                }

                .application-message p {
                    margin: 0;
                    font-size: 10px;
                    line-height: 1.55;
                }

                .application-meta {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-top: 10px;
                }

                .application-meta span,
                .application-meta a {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    color: var(--tp-muted);
                    font-size: 10px;
                    text-decoration: none;
                }

                .application-meta a {
                    color: var(--tp-green);
                    font-weight: 600;
                }

                .application-meta a:hover {
                    text-decoration: underline;
                }

                .application-actions {
                    display: flex;
                    gap: 7px;
                    margin-top: 12px;
                    padding-top: 10px;
                    border-top: 1px solid #edf0ee;
                }

                .application-btn {
                    min-height: 30px;
                    padding: 0 11px;
                    border: 1px solid var(--tp-border);
                    border-radius: 7px;
                    background: #fff;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 650;
                    cursor: pointer;
                    transition: all .15s ease;
                }

                .application-btn.accept {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    border-color: rgba(0,166,103,.25);
                    color: var(--tp-green);
                    background: rgba(0,166,103,.035);
                }

                .application-btn.accept:hover {
                    background: var(--tp-green);
                    color: white;
                    border-color: var(--tp-green);
                }

                .application-btn.reject {
                    color: var(--tp-red);
                    border-color: rgba(214,83,83,.18);
                }

                .application-btn.reject:hover {
                    background: rgba(214,83,83,.07);
                    border-color: rgba(214,83,83,.3);
                }

                /* Empty state */

                .empty-applications {
                    padding: 55px 20px;
                    text-align: center;
                    color: var(--tp-muted);
                }

                .empty-applications-icon {
                    width: 52px;
                    height: 52px;
                    margin: 0 auto 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 14px;
                    background: #f3f6f4;
                    color: #9aa8a3;
                }

                .empty-applications strong {
                    display: block;
                    color: var(--tp-secondary);
                    font-size: 12px;
                    margin-bottom: 4px;
                }

                .empty-applications span {
                    font-size: 10px;
                }

                /* Modal */

                .project-modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    background: rgba(15, 24, 20, .38);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }

                .project-modal {
                    position: relative;
                    width: 100%;
                    max-width: 430px;
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,.06);
                    border-radius: 16px;
                    background: white;
                    box-shadow:
                        0 24px 60px rgba(15,24,20,.16),
                        0 4px 16px rgba(15,24,20,.08);
                }

                .modal-icon {
                    width: 42px;
                    height: 42px;
                    margin: 22px 22px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 11px;
                }

                .modal-icon.success {
                    background: rgba(0,166,103,.1);
                    color: var(--tp-green);
                }

                .modal-icon.danger {
                    background: rgba(214,83,83,.1);
                    color: var(--tp-red);
                }

                .modal-close {
                    position: absolute;
                    top: 19px;
                    right: 19px;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 0;
                    border-radius: 8px;
                    background: transparent;
                    color: var(--tp-muted);
                    cursor: pointer;
                }

                .modal-close:hover {
                    background: #f4f6f5;
                    color: var(--tp-text);
                }

                .modal-content {
                    padding: 16px 22px 20px;
                }

                .modal-content h3 {
                    margin: 0 0 6px;
                    color: var(--tp-text);
                    font-size: 17px;
                    font-weight: 700;
                    letter-spacing: -.02em;
                }

                .modal-content > p {
                    margin: 0;
                    color: var(--tp-secondary);
                    font-size: 12px;
                    line-height: 1.6;
                }

                .modal-applicant {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 15px;
                    padding: 11px;
                    border: 1px solid var(--tp-border);
                    border-radius: 9px;
                    background: #fafbfb;
                }

                .modal-avatar {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border-radius: 9px;
                    background: var(--tp-green-soft);
                    color: var(--tp-green);
                    font-size: 10px;
                    font-weight: 700;
                }

                .modal-applicant strong {
                    display: block;
                    color: var(--tp-text);
                    font-size: 11px;
                }

                .modal-applicant span {
                    display: block;
                    margin-top: 2px;
                    color: var(--tp-muted);
                    font-size: 9px;
                }

                .modal-label {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 16px 0 6px;
                    color: var(--tp-text);
                    font-size: 11px;
                    font-weight: 650;
                }

                .modal-label span {
                    color: var(--tp-muted);
                    font-size: 9px;
                    font-weight: 500;
                }

                .modal-textarea {
                    width: 100%;
                    padding: 10px 11px;
                    border: 1px solid var(--tp-border);
                    border-radius: 9px;
                    outline: none;
                    resize: vertical;
                    color: var(--tp-text);
                    background: #fff;
                    font-family: inherit;
                    font-size: 11px;
                    line-height: 1.5;
                    transition: border-color .15s ease, box-shadow .15s ease;
                }

                .modal-textarea:focus {
                    border-color: rgba(0,166,103,.45);
                    box-shadow: 0 0 0 3px rgba(0,166,103,.08);
                }

                .modal-textarea.has-error {
                    border-color: var(--tp-red);
                }

                .modal-error {
                    margin-top: 5px;
                    color: var(--tp-red);
                    font-size: 9px;
                }

                .modal-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 7px;
                    padding: 14px 22px 18px;
                    border-top: 1px solid var(--tp-border);
                    background: #fcfdfd;
                }

                .modal-btn {
                    min-height: 34px;
                    padding: 0 13px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    border: 1px solid var(--tp-border);
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 650;
                    cursor: pointer;
                }

                .modal-btn.secondary {
                    background: white;
                    color: var(--tp-secondary);
                }

                .modal-btn.secondary:hover {
                    background: #f5f7f6;
                }

                .modal-btn.success {
                    border-color: var(--tp-green);
                    background: var(--tp-green);
                    color: white;
                }

                .modal-btn.success:hover {
                    background: var(--tp-green-dark);
                }

                .modal-btn.danger {
                    border-color: var(--tp-red);
                    background: var(--tp-red);
                    color: white;
                }

                .modal-btn.danger:hover {
                    background: #bc4545;
                }

                .modal-btn:disabled {
                    opacity: .55;
                    cursor: not-allowed;
                }

                /* Responsive */

                @media (max-width: 1100px) {
                    .tp-layout {
                        grid-template-columns: minmax(0, 1fr) 390px;
                    }
                }

                @media (max-width: 920px) {
                    .tp-layout {
                        grid-template-columns: 1fr;
                    }

                    .tp-side-column {
                        position: static;
                    }

                    .application-list {
                        max-height: none;
                    }
                }

                @media (max-width: 650px) {
                    .talent-project-show {
                        padding: 20px 14px;
                    }

                    .tp-header {
                        flex-direction: column;
                    }

                    .tp-header-actions {
                        width: 100%;
                    }

                    .tp-header-actions .tp-button {
                        flex: 1;
                    }

                    .project-hero {
                        padding: 18px;
                    }

                    .project-hero-top {
                        flex-direction: column;
                    }

                    .project-info-grid {
                        grid-template-columns: 1fr;
                    }

                    .project-title {
                        font-size: 21px;
                    }

                    .tp-card-body {
                        padding: 17px;
                    }

                    .verification-box {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .verification-box .tp-button {
                        width: 100%;
                    }

                    .application-list {
                        padding: 10px;
                    }

                    .application-heading {
                        flex-direction: column;
                        gap: 7px;
                    }

                    .application-status {
                        align-self: flex-start;
                    }

                    .project-modal-backdrop {
                        padding: 12px;
                    }

                    .project-modal {
                        border-radius: 14px;
                    }
                }

                @media (max-width: 420px) {
                    .tp-header-actions {
                        flex-direction: column;
                    }

                    .tp-header-actions .tp-button {
                        width: 100%;
                    }

                    .application-main {
                        gap: 9px;
                    }

                    .app-avatar {
                        width: 34px;
                        height: 34px;
                    }

                    .application-actions {
                        flex-direction: column;
                    }

                    .application-btn {
                        width: 100%;
                    }
                }
            `}</style>

            <div className="talent-project-show">
                <div className="tp-container">

                    {/* Breadcrumb */}
                    <div className="tp-breadcrumb">
                        <Link href={route('admin.projects.index')}>
                            Projects
                        </Link>

                        <span className="tp-breadcrumb-separator">/</span>

                        <span>{project.title}</span>
                    </div>

                    {/* Header */}
                    <div className="tp-header">
                        <div className="tp-header-left">
                            <div className="tp-kicker">
                                <span className="tp-kicker-line" />
                                Project workspace
                            </div>

                            <h1>{project.title}</h1>

                            <p className="tp-header-description">
                                Review project information and manage talent
                                applications from one workspace.
                            </p>
                        </div>

                        <div className="tp-header-actions">
                            <Link
                                href={route('admin.projects.index')}
                                className="tp-button"
                            >
                                <Icon.ArrowLeft size={14} />
                                Back to projects
                            </Link>
                        </div>
                    </div>

                    {/* Main workspace */}
                    <div className="tp-layout">

                        {/* LEFT: Project */}
                        <main className="tp-main-column">

                            <section className="tp-card">
                                <div className="project-hero">
                                    <div className="project-hero-top">
                                        <div>
                                            <div className="project-category">
                                                <Icon.Briefcase size={13} />
                                                {project.category?.name ??
                                                    project.category ??
                                                    'Project'}
                                            </div>

                                            <h2 className="project-title">
                                                {project.title}
                                            </h2>
                                        </div>

                                        <StatusBadge
                                            status={project.status}
                                        />
                                    </div>

                                    {project.description && (
                                        <p className="project-description">
                                            {project.description}
                                        </p>
                                    )}

                                    {project.user && (
                                        <div className="project-owner">
                                            <div className="project-owner-avatar">
                                                {initials(project.user.name)}
                                            </div>

                                            <div className="project-owner-details">
                                                <strong>
                                                    {project.user.name}
                                                </strong>

                                                <span>
                                                    {project.user.email}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="project-info-grid">
                                    <div className="project-info">
                                        <div className="project-info-label">
                                            <Icon.Briefcase size={12} />
                                            Category
                                        </div>

                                        <div className="project-info-value">
                                            {project.category?.name ??
                                                project.category ??
                                                '—'}
                                        </div>
                                    </div>

                                    <div className="project-info">
                                        <div className="project-info-label">
                                            <Icon.MapPin size={12} />
                                            Location
                                        </div>

                                        <div className="project-info-value">
                                            {project.location || 'Remote'}
                                        </div>
                                    </div>

                                    <div className="project-info">
                                        <div className="project-info-label">
                                            <Icon.Wallet size={12} />
                                            Budget
                                        </div>

                                        <div className="project-info-value">
                                            {formatBudget(project)}
                                        </div>
                                    </div>

                                    <div className="project-info">
                                        <div className="project-info-label">
                                            <Icon.Calendar size={12} />
                                            Published
                                        </div>

                                        <div className="project-info-value">
                                            {project.created_at
                                                ? new Date(
                                                      project.created_at
                                                  ).toLocaleDateString(
                                                      'en-US',
                                                      {
                                                          month: 'short',
                                                          day: 'numeric',
                                                          year: 'numeric',
                                                      }
                                                  )
                                                : '—'}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Verification */}
                            <section className="tp-card">
                                <div className="tp-card-header">
                                    <div>
                                        <h2>Project verification</h2>
                                        <p>
                                            Manage the platform verification
                                            state for this project.
                                        </p>
                                    </div>
                                </div>

                                <div className="tp-card-body">
                                    <div className="verification-box">
                                        <div className="verification-left">
                                            <div className="verification-icon">
                                                {project.verified ? (
                                                    <Icon.CheckCircle
                                                        size={17}
                                                    />
                                                ) : (
                                                    <Icon.Alert size={17} />
                                                )}
                                            </div>

                                            <div className="verification-text">
                                                <strong>
                                                    {project.verified
                                                        ? 'Project is verified'
                                                        : 'Project requires verification'}
                                                </strong>

                                                <span>
                                                    {project.verified
                                                        ? 'This project is approved for the talent platform.'
                                                        : 'Verify this project after reviewing its information.'}
                                                </span>
                                            </div>
                                        </div>

                                        {!project.verified ? (
                                            <button
                                                type="button"
                                                className="tp-button tp-button-primary"
                                                onClick={handleVerify}
                                                disabled={verifying}
                                            >
                                                <Icon.Check size={14} />

                                                {verifying
                                                    ? 'Verifying...'
                                                    : 'Verify project'}
                                            </button>
                                        ) : (
                                            <span className="project-status status-open">
                                                <span className="status-dot" />
                                                Verified
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </section>

                            {/* Project owner / overview */}
                            <section className="tp-card">
                                <div className="tp-card-header">
                                    <div>
                                        <h2>Project overview</h2>
                                        <p>
                                            Key information for the talent
                                            matching process.
                                        </p>
                                    </div>
                                </div>

                                <div className="tp-card-body">
                                    <div className="project-description">
                                        {project.description ||
                                            'No project description has been provided.'}
                                    </div>
                                </div>
                            </section>
                        </main>

                        {/* RIGHT: Applications */}
                        <aside className="tp-side-column">
                            <section className="tp-card">

                                <div className="tp-card-header">
                                    <div>
                                        <div className="applications-header">
                                            <h2>Applications</h2>

                                            <span className="application-count">
                                                {applications.length}
                                            </span>
                                        </div>

                                        <p>
                                            Talent interested in this project
                                        </p>
                                    </div>

                                    <div className="application-summary">
                                        {pendingApplications > 0 && (
                                            <span>
                                                {pendingApplications} pending
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {applications.length === 0 ? (
                                    <div className="empty-applications">
                                        <div className="empty-applications-icon">
                                            <Icon.Inbox size={25} />
                                        </div>

                                        <strong>
                                            No applications yet
                                        </strong>

                                        <span>
                                            Talent applications will appear
                                            here.
                                        </span>
                                    </div>
                                ) : (
                                    <div className="application-list">
                                        {applications.map((application) => (
                                            <ApplicationCard
                                                key={application.id}
                                                application={application}
                                            />
                                        ))}
                                    </div>
                                )}
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}