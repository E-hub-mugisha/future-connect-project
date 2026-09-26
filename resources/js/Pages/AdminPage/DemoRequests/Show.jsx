import React from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* ================================================================
   ICONS
================================================================ */

const Icon = {
  Back: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M5 12h14" />
    </svg>
  ),

  Mail: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),

  Phone: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),

  Building: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M9 7h1" />
      <path d="M14 7h1" />
      <path d="M9 11h1" />
      <path d="M14 11h1" />
      <path d="M9 15h1" />
      <path d="M14 15h1" />
    </svg>
  ),

  Calendar: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  ),

  Clock: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),

  Check: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  ),

  X: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),

  Trash: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="m19 6-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  ),

  ArrowRight: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
};

/* ================================================================
   HELPERS
================================================================ */

function getInitials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}

function formatDate(value) {
  if (!value) return '—';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function formatDateTime(value) {
  if (!value) return '—';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

/* ================================================================
   COMPONENT
================================================================ */

export default function Show({ demoRequest }) {
  const { flash } = usePage().props;

  const status = demoRequest.status ?? 'pending';

  const statusMeta = {
    pending: {
      label: 'Pending',
      className: 'status-pending',
    },
    confirmed: {
      label: 'Confirmed',
      className: 'status-confirmed',
    },
    completed: {
      label: 'Completed',
      className: 'status-completed',
    },
    cancelled: {
      label: 'Cancelled',
      className: 'status-cancelled',
    },
  };

  const currentStatus = statusMeta[status] ?? {
    label: status,
    className: 'status-default',
  };

  function confirmRequest() {
    router.patch(
      route('admin.demo-requests.confirm', demoRequest.id),
      {},
      {
        preserveScroll: true,
      }
    );
  }

  function cancelRequest() {
    router.patch(
      route('admin.demo-requests.cancel', demoRequest.id),
      {},
      {
        preserveScroll: true,
      }
    );
  }

  function completeRequest() {
    router.patch(
      route('admin.demo-requests.complete', demoRequest.id),
      {},
      {
        preserveScroll: true,
      }
    );
  }

  function destroy() {
    if (
      !confirm(
        `Delete the demo request from ${demoRequest.full_name}? This cannot be undone.`
      )
    ) {
      return;
    }

    router.delete(
      route('admin.demo-requests.destroy', demoRequest.id)
    );
  }

  return (
    <div data-h-scope="demo-request-show">
      <Head title={`${demoRequest.full_name} · Demo Request`} />

      <style>{`
        /* ============================================================
           LIGHT ONLY / APPLE STYLE
        ============================================================ */

        [data-h-scope="demo-request-show"] {
          --dr-bg: #f7f8fa;
          --dr-surface: #ffffff;
          --dr-surface-soft: #f8f9fb;
          --dr-surface-hover: #f3f5f7;

          --dr-text: #17201d;
          --dr-heading: #111715;
          --dr-muted: #6b7773;
          --dr-subtle: #929b98;

          --dr-border: #e7ebe9;
          --dr-border-strong: #dce2df;

          --dr-green: #00a667;
          --dr-green-dark: #008a56;
          --dr-green-soft: #eaf8f2;

          --dr-blue: #3b82f6;
          --dr-blue-soft: #edf4ff;

          --dr-orange: #d97706;
          --dr-orange-soft: #fff7e8;

          --dr-red: #dc4c4c;
          --dr-red-soft: #fff1f1;

          color-scheme: light;
          color: var(--dr-text);
          background: var(--dr-bg);
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "SF Pro Text",
            "SF Pro Display",
            "Helvetica Neue",
            Arial,
            sans-serif;
        }

        [data-h-scope="demo-request-show"] *,
        [data-h-scope="demo-request-show"] *::before,
        [data-h-scope="demo-request-show"] *::after {
          box-sizing: border-box;
        }

        [data-h-scope="demo-request-show"] .dr-page {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 26px 24px 50px;
        }

        /* ============================================================
           TOP BAR
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        [data-h-scope="demo-request-show"] .dr-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--dr-muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: color .18s ease;
        }

        [data-h-scope="demo-request-show"] .dr-back:hover {
          color: var(--dr-green);
        }

        [data-h-scope="demo-request-show"] .dr-back svg {
          width: 15px;
          height: 15px;
        }

        /* ============================================================
           FLASH
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-flash {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 14px;
          margin-bottom: 18px;
          border: 1px solid #cdeedf;
          border-radius: 11px;
          background: var(--dr-green-soft);
          color: #087a50;
          font-size: 13px;
          font-weight: 500;
        }

        /* ============================================================
           HERO
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-hero {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          padding: 22px 24px;
          margin-bottom: 18px;
          background: var(--dr-surface);
          border: 1px solid var(--dr-border);
          border-radius: 16px;
          box-shadow: 0 2px 7px rgba(20, 35, 29, .035);
        }

        [data-h-scope="demo-request-show"] .dr-identity {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        [data-h-scope="demo-request-show"] .dr-avatar {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--dr-green-soft);
          color: var(--dr-green-dark);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -.02em;
        }

        [data-h-scope="demo-request-show"] .dr-title {
          margin: 0;
          color: var(--dr-heading);
          font-size: 20px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -.025em;
        }

        [data-h-scope="demo-request-show"] .dr-subtitle {
          margin-top: 5px;
          color: var(--dr-muted);
          font-size: 12px;
          line-height: 1.5;
        }

        [data-h-scope="demo-request-show"] .dr-hero-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        /* ============================================================
           STATUS
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 11px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          text-transform: capitalize;
          white-space: nowrap;
        }

        [data-h-scope="demo-request-show"] .dr-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        [data-h-scope="demo-request-show"] .status-pending {
          color: #a65f00;
          background: var(--dr-orange-soft);
        }

        [data-h-scope="demo-request-show"] .status-confirmed {
          color: #008451;
          background: var(--dr-green-soft);
        }

        [data-h-scope="demo-request-show"] .status-completed {
          color: #2563c7;
          background: var(--dr-blue-soft);
        }

        [data-h-scope="demo-request-show"] .status-cancelled {
          color: #c23e3e;
          background: var(--dr-red-soft);
        }

        [data-h-scope="demo-request-show"] .status-default {
          color: var(--dr-muted);
          background: var(--dr-surface-soft);
        }

        /* ============================================================
           MAIN GRID
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 290px;
          gap: 18px;
          align-items: start;
        }

        [data-h-scope="demo-request-show"] .dr-main,
        [data-h-scope="demo-request-show"] .dr-sidebar {
          min-width: 0;
        }

        /* ============================================================
           CARDS
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-card {
          margin-bottom: 18px;
          overflow: hidden;
          background: var(--dr-surface);
          border: 1px solid var(--dr-border);
          border-radius: 15px;
          box-shadow: 0 2px 7px rgba(20, 35, 29, .03);
        }

        [data-h-scope="demo-request-show"] .dr-card:last-child {
          margin-bottom: 0;
        }

        [data-h-scope="demo-request-show"] .dr-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 15px 17px;
          border-bottom: 1px solid var(--dr-border);
        }

        [data-h-scope="demo-request-show"] .dr-card-title {
          margin: 0;
          color: var(--dr-heading);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: -.01em;
        }

        [data-h-scope="demo-request-show"] .dr-card-caption {
          color: var(--dr-subtle);
          font-size: 11px;
        }

        [data-h-scope="demo-request-show"] .dr-card-body {
          padding: 16px 17px;
        }

        /* ============================================================
           INFORMATION ROWS
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-info-list {
          display: grid;
          gap: 0;
        }

        [data-h-scope="demo-request-show"] .dr-info-row {
          display: grid;
          grid-template-columns: 150px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          padding: 11px 0;
          border-bottom: 1px solid var(--dr-border);
          font-size: 13px;
        }

        [data-h-scope="demo-request-show"] .dr-info-row:first-child {
          padding-top: 0;
        }

        [data-h-scope="demo-request-show"] .dr-info-row:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        [data-h-scope="demo-request-show"] .dr-label {
          color: var(--dr-muted);
          font-weight: 500;
        }

        [data-h-scope="demo-request-show"] .dr-value {
          color: var(--dr-text);
          font-weight: 600;
          text-align: right;
          word-break: break-word;
        }

        [data-h-scope="demo-request-show"] .dr-value.muted {
          color: var(--dr-muted);
          font-weight: 400;
        }

        [data-h-scope="demo-request-show"] .dr-email {
          color: var(--dr-green-dark);
          text-decoration: none;
        }

        [data-h-scope="demo-request-show"] .dr-email:hover {
          text-decoration: underline;
        }

        /* ============================================================
           CONTACT MINI GRID
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        [data-h-scope="demo-request-show"] .dr-contact-item {
          min-width: 0;
          padding: 12px;
          border: 1px solid var(--dr-border);
          border-radius: 11px;
          background: var(--dr-surface-soft);
        }

        [data-h-scope="demo-request-show"] .dr-contact-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 7px;
          color: var(--dr-muted);
          font-size: 11px;
          font-weight: 500;
        }

        [data-h-scope="demo-request-show"] .dr-contact-top svg {
          width: 14px;
          height: 14px;
          color: var(--dr-green);
        }

        [data-h-scope="demo-request-show"] .dr-contact-value {
          color: var(--dr-text);
          font-size: 12px;
          font-weight: 600;
          word-break: break-word;
        }

        /* ============================================================
           SCHEDULE
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-schedule {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        [data-h-scope="demo-request-show"] .dr-schedule-item {
          padding: 14px;
          border: 1px solid var(--dr-border);
          border-radius: 12px;
          background: var(--dr-surface-soft);
        }

        [data-h-scope="demo-request-show"] .dr-schedule-label {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 7px;
          color: var(--dr-muted);
          font-size: 11px;
          font-weight: 500;
        }

        [data-h-scope="demo-request-show"] .dr-schedule-label svg {
          width: 14px;
          height: 14px;
          color: var(--dr-green);
        }

        [data-h-scope="demo-request-show"] .dr-schedule-value {
          color: var(--dr-heading);
          font-size: 13px;
          font-weight: 700;
        }

        /* ============================================================
           MESSAGE
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-message {
          color: var(--dr-text);
          font-size: 13px;
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
        }

        [data-h-scope="demo-request-show"] .dr-empty-message {
          color: var(--dr-muted);
          font-size: 13px;
        }

        /* ============================================================
           SIDEBAR
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-sidebar-card {
          position: sticky;
          top: 20px;
        }

        [data-h-scope="demo-request-show"] .dr-action-list {
          display: grid;
          gap: 8px;
        }

        [data-h-scope="demo-request-show"] .dr-action {
          width: 100%;
          min-height: 39px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 1px solid transparent;
          border-radius: 9px;
          padding: 9px 12px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          transition:
            background .18s ease,
            border-color .18s ease,
            color .18s ease,
            transform .18s ease;
        }

        [data-h-scope="demo-request-show"] .dr-action:hover {
          transform: translateY(-1px);
        }

        [data-h-scope="demo-request-show"] .dr-action svg {
          width: 14px;
          height: 14px;
        }

        [data-h-scope="demo-request-show"] .dr-action-primary {
          color: #ffffff;
          background: var(--dr-green);
          border-color: var(--dr-green);
          box-shadow: 0 4px 12px rgba(0, 166, 103, .16);
        }

        [data-h-scope="demo-request-show"] .dr-action-primary:hover {
          background: var(--dr-green-dark);
          border-color: var(--dr-green-dark);
        }

        [data-h-scope="demo-request-show"] .dr-action-secondary {
          color: var(--dr-text);
          background: var(--dr-surface);
          border-color: var(--dr-border-strong);
        }

        [data-h-scope="demo-request-show"] .dr-action-secondary:hover {
          color: var(--dr-green-dark);
          border-color: #b9e5d3;
          background: var(--dr-green-soft);
        }

        [data-h-scope="demo-request-show"] .dr-action-danger {
          color: var(--dr-red);
          background: var(--dr-surface);
          border-color: var(--dr-border);
        }

        [data-h-scope="demo-request-show"] .dr-action-danger:hover {
          background: var(--dr-red-soft);
          border-color: #f2cccc;
        }

        [data-h-scope="demo-request-show"] .dr-divider {
          height: 1px;
          margin: 6px 0;
          background: var(--dr-border);
        }

        /* ============================================================
           SIDEBAR META
        ============================================================ */

        [data-h-scope="demo-request-show"] .dr-meta {
          display: grid;
          gap: 10px;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid var(--dr-border);
        }

        [data-h-scope="demo-request-show"] .dr-meta-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          font-size: 11px;
        }

        [data-h-scope="demo-request-show"] .dr-meta-label {
          color: var(--dr-muted);
        }

        [data-h-scope="demo-request-show"] .dr-meta-value {
          color: var(--dr-text);
          font-weight: 600;
          text-align: right;
        }

        /* ============================================================
           RESPONSIVE
        ============================================================ */

        @media (max-width: 900px) {
          [data-h-scope="demo-request-show"] .dr-layout {
            grid-template-columns: 1fr;
          }

          [data-h-scope="demo-request-show"] .dr-sidebar-card {
            position: static;
          }
        }

        @media (max-width: 640px) {
          [data-h-scope="demo-request-show"] .dr-page {
            padding: 18px 14px 35px;
          }

          [data-h-scope="demo-request-show"] .dr-topbar {
            margin-bottom: 16px;
          }

          [data-h-scope="demo-request-show"] .dr-hero {
            padding: 17px;
            flex-direction: column;
          }

          [data-h-scope="demo-request-show"] .dr-hero-right {
            justify-content: flex-start;
          }

          [data-h-scope="demo-request-show"] .dr-title {
            font-size: 18px;
          }

          [data-h-scope="demo-request-show"] .dr-contact-grid,
          [data-h-scope="demo-request-show"] .dr-schedule {
            grid-template-columns: 1fr;
          }

          [data-h-scope="demo-request-show"] .dr-info-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }

          [data-h-scope="demo-request-show"] .dr-value {
            text-align: left;
          }

          [data-h-scope="demo-request-show"] .dr-card-header,
          [data-h-scope="demo-request-show"] .dr-card-body {
            padding-left: 14px;
            padding-right: 14px;
          }
        }

        /* ============================================================
           FORCE LIGHT MODE EVEN IF SYSTEM IS DARK
        ============================================================ */

        @media (prefers-color-scheme: dark) {
          [data-h-scope="demo-request-show"] {
            --dr-bg: #f7f8fa;
            --dr-surface: #ffffff;
            --dr-surface-soft: #f8f9fb;
            --dr-surface-hover: #f3f5f7;
            --dr-text: #17201d;
            --dr-heading: #111715;
            --dr-muted: #6b7773;
            --dr-subtle: #929b98;
            --dr-border: #e7ebe9;
            --dr-border-strong: #dce2df;
          }
        }
      `}</style>

      <div className="dr-page">

        {/* ============================================================
            TOP NAVIGATION
        ============================================================ */}

        <div className="dr-topbar">
          <Link
            href={route('admin.demo-requests.index')}
            className="dr-back"
          >
            <Icon.Back />
            <span>Back to Demo Requests</span>
          </Link>
        </div>

        {/* ============================================================
            FLASH MESSAGE
        ============================================================ */}

        {flash?.success && (
          <div className="dr-flash">
            <Icon.Check width="15" height="15" />
            <span>{flash.success}</span>
          </div>
        )}

        {/* ============================================================
            HERO
        ============================================================ */}

        <section className="dr-hero">
          <div className="dr-identity">
            <div className="dr-avatar">
              {getInitials(demoRequest.full_name)}
            </div>

            <div>
              <h1 className="dr-title">
                {demoRequest.full_name}
              </h1>

              <div className="dr-subtitle">
                Demo request submitted on{' '}
                {formatDateTime(demoRequest.created_at)}
              </div>
            </div>
          </div>

          <div className="dr-hero-right">
            <span
              className={`dr-status ${currentStatus.className}`}
            >
              <span className="dr-status-dot" />
              {currentStatus.label}
            </span>
          </div>
        </section>

        {/* ============================================================
            CONTENT
        ============================================================ */}

        <div className="dr-layout">

          {/* ==========================================================
              MAIN CONTENT
          ========================================================== */}

          <main className="dr-main">

            {/* CONTACT */}
            <section className="dr-card">
              <div className="dr-card-header">
                <h2 className="dr-card-title">
                  Contact Information
                </h2>

                <span className="dr-card-caption">
                  Requester details
                </span>
              </div>

              <div className="dr-card-body">
                <div className="dr-contact-grid">

                  <div className="dr-contact-item">
                    <div className="dr-contact-top">
                      <Icon.Mail />
                      <span>Work Email</span>
                    </div>

                    <div className="dr-contact-value">
                      {demoRequest.work_email ? (
                        <a
                          href={`mailto:${demoRequest.work_email}`}
                          className="dr-email"
                        >
                          {demoRequest.work_email}
                        </a>
                      ) : (
                        '—'
                      )}
                    </div>
                  </div>

                  <div className="dr-contact-item">
                    <div className="dr-contact-top">
                      <Icon.Phone />
                      <span>Phone</span>
                    </div>

                    <div className="dr-contact-value">
                      {demoRequest.phone || '—'}
                    </div>
                  </div>

                  <div className="dr-contact-item">
                    <div className="dr-contact-top">
                      <Icon.Building />
                      <span>Company</span>
                    </div>

                    <div className="dr-contact-value">
                      {demoRequest.company_name || '—'}
                    </div>
                  </div>

                  <div className="dr-contact-item">
                    <div className="dr-contact-top">
                      <Icon.ArrowRight />
                      <span>Role</span>
                    </div>

                    <div className="dr-contact-value">
                      {demoRequest.role || '—'}
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* COMPANY */}
            <section className="dr-card">
              <div className="dr-card-header">
                <h2 className="dr-card-title">
                  Company Details
                </h2>
              </div>

              <div className="dr-card-body">
                <div className="dr-info-list">

                  <div className="dr-info-row">
                    <span className="dr-label">
                      Company Name
                    </span>

                    <span className="dr-value">
                      {demoRequest.company_name || '—'}
                    </span>
                  </div>

                  <div className="dr-info-row">
                    <span className="dr-label">
                      Company Size
                    </span>

                    <span className="dr-value">
                      {demoRequest.company_size || '—'}
                    </span>
                  </div>

                  <div className="dr-info-row">
                    <span className="dr-label">
                      Contact Role
                    </span>

                    <span className="dr-value">
                      {demoRequest.role || '—'}
                    </span>
                  </div>

                </div>
              </div>
            </section>

            {/* SCHEDULE */}
            <section className="dr-card">
              <div className="dr-card-header">
                <h2 className="dr-card-title">
                  Requested Schedule
                </h2>

                <span className="dr-card-caption">
                  Preferred demo time
                </span>
              </div>

              <div className="dr-card-body">
                <div className="dr-schedule">

                  <div className="dr-schedule-item">
                    <div className="dr-schedule-label">
                      <Icon.Calendar />
                      <span>Preferred Date</span>
                    </div>

                    <div className="dr-schedule-value">
                      {formatDate(demoRequest.preferred_date)}
                    </div>
                  </div>

                  <div className="dr-schedule-item">
                    <div className="dr-schedule-label">
                      <Icon.Clock />
                      <span>Preferred Time</span>
                    </div>

                    <div className="dr-schedule-value">
                      {demoRequest.preferred_time || '—'}
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* MESSAGE */}
            <section className="dr-card">
              <div className="dr-card-header">
                <h2 className="dr-card-title">
                  Message
                </h2>
              </div>

              <div className="dr-card-body">
                {demoRequest.message ? (
                  <div className="dr-message">
                    {demoRequest.message}
                  </div>
                ) : (
                  <div className="dr-empty-message">
                    No message was provided with this request.
                  </div>
                )}
              </div>
            </section>

          </main>

          {/* ==========================================================
              SIDEBAR
          ========================================================== */}

          <aside className="dr-sidebar">

            <section className="dr-card dr-sidebar-card">
              <div className="dr-card-header">
                <h2 className="dr-card-title">
                  Request Actions
                </h2>
              </div>

              <div className="dr-card-body">

                <div className="dr-action-list">

                  {status === 'pending' && (
                    <button
                      type="button"
                      className="dr-action dr-action-primary"
                      onClick={confirmRequest}
                    >
                      <Icon.Check />
                      <span>Confirm Demo</span>
                    </button>
                  )}

                  {status === 'confirmed' && (
                    <button
                      type="button"
                      className="dr-action dr-action-secondary"
                      onClick={completeRequest}
                    >
                      <Icon.Check />
                      <span>Mark as Completed</span>
                    </button>
                  )}

                  {(status === 'pending' || status === 'confirmed') && (
                    <button
                      type="button"
                      className="dr-action dr-action-danger"
                      onClick={cancelRequest}
                    >
                      <Icon.X />
                      <span>Cancel Request</span>
                    </button>
                  )}

                  <div className="dr-divider" />

                  <button
                    type="button"
                    className="dr-action dr-action-danger"
                    onClick={destroy}
                  >
                    <Icon.Trash />
                    <span>Delete Request</span>
                  </button>

                </div>

                <div className="dr-meta">

                  <div className="dr-meta-row">
                    <span className="dr-meta-label">
                      Status
                    </span>

                    <span className="dr-meta-value">
                      {currentStatus.label}
                    </span>
                  </div>

                  <div className="dr-meta-row">
                    <span className="dr-meta-label">
                      Submitted
                    </span>

                    <span className="dr-meta-value">
                      {formatDate(demoRequest.created_at)}
                    </span>
                  </div>

                  <div className="dr-meta-row">
                    <span className="dr-meta-label">
                      Request ID
                    </span>

                    <span className="dr-meta-value">
                      #{demoRequest.id}
                    </span>
                  </div>

                </div>
              </div>
            </section>

          </aside>
        </div>
      </div>
    </div>
  );
}

Show.layout = (page) => (
  <AppLayout
    children={page}
    title={page.props.demoRequest.full_name}
  />
);