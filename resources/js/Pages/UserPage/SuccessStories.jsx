import React, { useEffect, useMemo, useState } from 'react';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

/**
 * Converted from resources/views/.../success-stories.blade.php
 *
 * Assumptions made during conversion:
 *
 * 1. The original built its data with an inline `@php` block, running the
 *    `SuccessStory` query and `session()`/`old()`/`$errors` directly in the
 *    view. In Inertia that logic belongs in the controller, so this component
 *    expects the controller to pass:
 *      - `stories`  → the paginator: `{ data, links, total, current_page, ... }`
 *      - `search`   → the current `?search=` value (string|null)
 *      - `role`     → the current `?role=` value (string|null)
 *      - `roles`    → array/collection of distinct role strings for the filter chips
 *    `flash.story_submitted` (the success banner) and `errors` are read via
 *    Inertia's shared props (`usePage().props`), matching how your other
 *    converted pages handle `session()` and `$errors`.
 *
 * 2. **Submit Story modal** — rewritten with Inertia's `useForm` (multipart,
 *    since there's a file input) instead of a plain `<form method="POST">` +
 *    Blade `@error`/`old()`. Field errors now come from `form.errors.*` and
 *    persisted values from `form.data.*`, which is the direct Inertia
 *    equivalent of `old()`/`@error`.
 *
 * 3. **Auto-reopening the submit modal after a failed submission** — the
 *    original did this via `@if ($errors->any() && old('title') !== null)` in
 *    inline JS on full page reload. Since Inertia does a client-side
 *    (non-full-reload) form post, I keep the modal open manually in the
 *    `onError` callback of the `useForm` submit instead of re-deriving it
 *    from `old()`, which is more direct and doesn't need a page-load check.
 *
 * 4. **Both modals** — rewritten as small self-contained React modal
 *    components (`<SsModal>`) driven by boolean/`selectedStory` state instead
 *    of Bootstrap's `data-bs-toggle="modal"` + the `bootstrap.Modal` JS API +
 *    manual DOM text-content writes (`window.ssStoryData`, `openStory()`,
 *    etc. from the original `<script>` tag). This keeps the same visual
 *    classes (`ss-modal`, `modal-content`, etc.) but state and content are now
 *    plain React, which is the idiomatic Inertia approach and avoids
 *    initializing Bootstrap's JS component on every mount. If your app
 *    already initializes Bootstrap modals globally and you'd rather keep using
 *    `data-bs-toggle`, let me know and I'll switch back to that pattern.
 *
 * 5. **Story detail content rendering** — the original detected whether
 *    `story.content` contained HTML tags and either injected it directly via
 *    `innerHTML` or split plain text into `<p>` paragraphs on double
 *    newlines. I reproduced the same trusted/plain-text branching logic
 *    (still via `dangerouslySetInnerHTML`, since the original explicitly
 *    treats this as trusted moderated content), rather than reworking it into
 *    a fully sanitized renderer, since re-scoping that trust boundary wasn't
 *    requested.
 *
 * 6. `Str::of($story->author_name)->substr(0,1)->upper()` → `.charAt(0).toUpperCase()`.
 *    `Str::limit(strip_tags($story->excerpt), 100, '...')` → a small local
 *    `truncate()` helper applied after a `stripTags()` helper.
 *
 * 7. Pagination uses the `products.links`-style paginator pattern from your
 *    other converted pages (`stories.links` windowed array), rather than
 *    rendering raw `{{ $ssStories->links() }}` Blade pagination HTML.
 *
 * 8. `route('user.home')` and `route('user.success-stories.store')` carried
 *    over as-is via Ziggy.
 */

function stripTags(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

function truncate(str, length = 100) {
  if (!str) return '';
  return str.length > length ? str.slice(0, length).trimEnd() + '...' : str;
}

function SsModal({ id, title, onClose, children, footer }) {
  return (
    <div className="modal fade ss-modal show" id={id} style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-modal="true">
      <div className="modal-backdrop fade show" onClick={onClose} style={{ zIndex: 1040 }}></div>
      <div className="modal-dialog modal-dialog-centered modal-lg" style={{ zIndex: 1050, position: 'relative' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories({ stories, search = '', role = '', roles = [] }) {
  const { props } = usePage();
  const flashMessage = props.flash?.story_submitted;

  const storyList = stories?.data ?? [];
  const paginationLinks = stories?.links ?? [];
  const isPaginated = Array.isArray(stories?.links);
  const total = stories?.total ?? storyList.length;

  const [searchValue, setSearchValue] = useState(search);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const form = useForm({
    title: '',
    author_name: '',
    role: '',
    excerpt: '',
    content: '',
    thumbnail: null,
  });

  function submitStory(e) {
    e.preventDefault();
    form.post(route('user.success-stories.store'), {
      forceFormData: true,
      onSuccess: () => {
        setShowSubmitModal(false);
        form.reset();
      },
      onError: () => {
        // keep the modal open so the person can see/fix the field errors,
        // same intent as the original's auto-reopen-on-error behavior
        setShowSubmitModal(true);
      },
    });
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    router.get(route('user.success-stories'), {
      search: searchValue || undefined,
      role: role || undefined,
    });
  }

  function currentUrlWith(params) {
    return route('user.success-stories', params);
  }

  const hasActiveFilters = Boolean(role || search);

  return (
    <>
      <Head title="Success Stories | Future Connect" />

      <style>{`
        :root {
          --ss-bg: #0e1618;
          --ss-surface: #141d20;
          --ss-surface2: #1a2428;
          --ss-green: #48d597;
          --ss-green-dim: rgba(0, 166, 103, .14);
          --ss-green-glow: rgba(0, 166, 103, .28);
          --ss-text: #e8f0ed;
          --ss-muted: #7a9a8e;
          --ss-border: rgba(0, 166, 103, .16);
          --ss-border-h: rgba(0, 166, 103, .38);
          --ss-radius: 14px;
          --ss-btn-text: #06120d;
          --ss-heading: #ffffff;
          --ss-placeholder: #3d5a52;
          --ss-error: #ff8a8a;
          --ss-card-shadow: rgba(0, 0, 0, .4);
          --ss-quote-bg: rgba(8, 15, 17, .75);
          --ss-hero-grad: linear-gradient(145deg, #091315 0%, #0c1e21 65%, #081213 100%);
        }

        /* ── LIGHT THEME OVERRIDES ──────────────────────
           Driven by the same [data-h-theme="light"] attribute
           the header sets on <html> (and persists via
           localStorage 'fc-theme'), so this page just follows
           whatever the header's toggle already decided. ── */
        [data-h-theme="light"] {
          --ss-bg: #f6faf8;
          --ss-surface: #ffffff;
          --ss-surface2: #eef4f1;
          --ss-green: #00a667;
          --ss-green-dim: rgba(0, 166, 103, .08);
          --ss-green-glow: rgba(0, 166, 103, .18);
          --ss-text: #10201b;
          --ss-muted: #5b7a70;
          --ss-border: rgba(0, 100, 60, .12);
          --ss-border-h: rgba(0, 100, 60, .3);
          --ss-btn-text: #ffffff;
          --ss-heading: #10201b;
          --ss-placeholder: #a9c2b8;
          --ss-error: #c94040;
          --ss-card-shadow: rgba(16, 32, 27, .12);
          --ss-quote-bg: rgba(255, 255, 255, .85);
          --ss-hero-grad: linear-gradient(145deg, #eef7f2 0%, #ffffff 65%, #f2f8f5 100%);
        }

        [data-h-theme="light"] .ss-modal .btn-close {
          filter: none;
          opacity: .6;
        }

        [data-h-theme="light"] .ss-card:hover,
        [data-h-theme="light"] .ss-cta-banner,
        [data-h-theme="light"] .ss-filter-bar {
          box-shadow: 0 1px 3px rgba(16, 32, 27, .05);
        }

        .ss-page,
        .ss-page *,
        .ss-page *::before,
        .ss-page *::after {
          box-sizing: border-box;
        }

        .ss-page {
          background: var(--ss-bg);
          font-family: 'DM Sans', sans-serif;
          color: var(--ss-text);
          padding-bottom: 60px;
          transition: background .25s ease;
        }

        /* ── Breadcrumb / hero ── */
        .ss-breadcrumb {
          background: var(--ss-hero-grad);
          border-bottom: 1px solid var(--ss-border);
          padding: 44px 0 36px;
          position: relative;
          overflow: hidden;
          text-align: center;
          transition: background .25s ease;
        }

        .ss-breadcrumb::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 166, 103, .05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 166, 103, .05) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        .ss-breadcrumb .page-breadcrumb {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
        }

        .ss-breadcrumb .breadcrumb {
          margin-bottom: 14px;
        }

        .ss-breadcrumb .breadcrumb-item a {
          color: var(--ss-muted);
          font-size: 13px;
          text-decoration: none;
          transition: color .2s;
        }

        .ss-breadcrumb .breadcrumb-item a:hover {
          color: var(--ss-green);
        }

        .ss-breadcrumb .breadcrumb-item.active,
        .ss-breadcrumb .breadcrumb-item[aria-current="page"] {
          color: var(--ss-green);
          font-size: 13px;
        }

        .ss-breadcrumb .breadcrumb-item+.breadcrumb-item::before {
          color: var(--ss-muted);
          content: "/";
        }

        .ss-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 166, 103, .1);
          border: 1px solid rgba(0, 166, 103, .2);
          border-radius: 99px;
          padding: 5px 14px;
          font-size: 11.5px;
          color: var(--ss-green);
          font-weight: 500;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .ss-pill::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ss-green);
          display: inline-block;
        }

        .ss-breadcrumb-title {
          position: relative;
          z-index: 1;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(26px, 3.6vw, 40px);
          letter-spacing: -1px;
          color: var(--ss-heading);
          margin: 0 0 10px;
        }

        .ss-breadcrumb-sub {
          position: relative;
          z-index: 1;
          color: var(--ss-muted);
          font-size: 14px;
          max-width: 560px;
          margin: 0 auto 22px;
          line-height: 1.6;
        }

        .ss-hero-cta {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--ss-green);
          color: var(--ss-btn-text);
          font-weight: 700;
          font-size: 13.5px;
          padding: 12px 22px;
          border-radius: 10px;
          border: none;
          text-decoration: none;
          transition: background .2s, transform .2s;
        }

        .ss-hero-cta:hover {
          background: #00c07a;
          color: var(--ss-btn-text);
          transform: translateY(-2px);
        }

        /* ── Page content ── */
        .ss-page-content {
          padding-top: 40px;
        }

        /* ── CTA banner ── */
        .ss-cta-banner {
          background: linear-gradient(120deg, var(--ss-surface) 0%, var(--ss-surface2) 100%);
          border: 1px solid var(--ss-border);
          border-radius: var(--ss-radius);
          padding: 30px 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
          transition: background .25s, border-color .25s;
        }

        .ss-cta-banner::after {
          content: '';
          position: absolute;
          right: -60px;
          top: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--ss-green-glow) 0%, transparent 70%);
          pointer-events: none;
        }

        .ss-cta-banner-text {
          position: relative;
          z-index: 1;
          max-width: 560px;
        }

        .ss-cta-banner-text h4 {
          font-family: 'Syne', sans-serif;
          color: var(--ss-heading);
          font-weight: 700;
          font-size: 19px;
          margin: 0 0 6px;
        }

        .ss-cta-banner-text p {
          color: var(--ss-muted);
          font-size: 13.5px;
          margin: 0;
          line-height: 1.6;
        }

        .ss-cta-banner-btn {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--ss-green);
          color: var(--ss-btn-text);
          font-weight: 700;
          font-size: 13.5px;
          padding: 13px 24px;
          border-radius: 10px;
          border: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background .2s, transform .2s;
        }

        .ss-cta-banner-btn:hover {
          background: #00c07a;
          transform: translateY(-2px);
        }

        /* ── Filter bar ── */
        .ss-filter-bar {
          background: var(--ss-surface);
          border: 1px solid var(--ss-border);
          border-radius: var(--ss-radius);
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 30px;
          transition: background .25s, border-color .25s;
        }

        .ss-search-form {
          position: relative;
          flex: 1;
          min-width: 220px;
        }

        .ss-search-form input {
          width: 100%;
          background: var(--ss-surface2);
          border: 1px solid var(--ss-border);
          border-radius: 10px;
          color: var(--ss-text);
          font-size: 13.5px;
          padding: 11px 40px 11px 14px;
          outline: none;
          transition: border-color .2s, background .2s;
        }

        .ss-search-form input::placeholder {
          color: var(--ss-placeholder);
        }

        .ss-search-form input:focus {
          border-color: var(--ss-green);
          background: rgba(0, 166, 103, .06);
        }

        .ss-search-form button {
          position: absolute;
          right: 6px;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          border-radius: 7px;
          background: var(--ss-green);
          border: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background .2s;
        }

        .ss-search-form button:hover {
          background: #00c07a;
        }

        .ss-role-chips {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ss-chip {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--ss-muted);
          background: var(--ss-surface2);
          border: 1px solid var(--ss-border);
          padding: 8px 15px;
          border-radius: 99px;
          text-decoration: none;
          transition: all .18s;
          white-space: nowrap;
        }

        .ss-chip:hover {
          color: var(--ss-heading);
          border-color: var(--ss-border-h);
        }

        .ss-chip.active {
          color: var(--ss-heading);
          background: var(--ss-green-dim);
          border-color: var(--ss-border-h);
          font-weight: 600;
        }

        .ss-clear-filters {
          font-size: 12.5px;
          color: var(--ss-green);
          text-decoration: none;
          white-space: nowrap;
        }

        .ss-clear-filters:hover {
          text-decoration: underline;
        }

        /* ── Results head ── */
        .ss-results-count {
          font-size: 13.5px;
          color: var(--ss-muted);
          margin-bottom: 20px;
        }

        .ss-results-count strong {
          color: var(--ss-text);
          font-weight: 600;
        }

        /* ── Story cards ── */
        .ss-grid-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ss-card {
          background: var(--ss-surface);
          border: 1px solid var(--ss-border);
          border-radius: var(--ss-radius);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform .25s, box-shadow .25s, border-color .25s, background .25s;
          cursor: pointer;
        }

        .ss-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 44px var(--ss-card-shadow);
          border-color: var(--ss-border-h);
        }

        .ss-card-img {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: var(--ss-surface2);
        }

        .ss-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s;
        }

        .ss-card:hover .ss-card-img img {
          transform: scale(1.06);
        }

        .ss-card-quote-icon {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--ss-quote-bg);
          backdrop-filter: blur(6px);
          border: 1px solid var(--ss-border-h);
          color: var(--ss-green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
        }

        .ss-card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .ss-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 16.5px;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 10px;
        }

        .ss-card-title button {
          background: none;
          border: none;
          padding: 0;
          color: var(--ss-heading);
          text-decoration: none;
          transition: color .18s;
          text-align: left;
          font-family: 'Syne', sans-serif;
          font-size: 16.5px;
          font-weight: 700;
          line-height: 1.35;
        }

        .ss-card:hover .ss-card-title button {
          color: var(--ss-green);
        }

        .ss-card-excerpt {
          font-size: 13px;
          color: var(--ss-muted);
          line-height: 1.65;
          margin: 0 0 20px;
          flex: 1;
          font-style: italic;
        }

        .ss-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid var(--ss-border);
        }

        .ss-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          flex-shrink: 0;
          background: var(--ss-green-dim);
          border: 1px solid var(--ss-border-h);
          color: var(--ss-green);
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ss-card-person {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ss-card-person-name {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--ss-text);
        }

        .ss-card-person-role {
          font-size: 11px;
          color: var(--ss-muted);
          margin-top: 1px;
        }

        .ss-card-arrow {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          border: 1px solid var(--ss-border);
          color: var(--ss-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all .2s;
          flex-shrink: 0;
          background: none;
          cursor: pointer;
        }

        .ss-card:hover .ss-card-arrow {
          color: var(--ss-green);
          border-color: var(--ss-border-h);
          transform: translateX(2px);
        }

        /* ── Empty state ── */
        .ss-empty {
          text-align: center;
          padding: 70px 20px;
          background: var(--ss-surface);
          border: 1px dashed var(--ss-border);
          border-radius: var(--ss-radius);
        }

        .ss-empty i {
          font-size: 34px;
          color: var(--ss-muted);
          margin-bottom: 12px;
          display: inline-block;
        }

        .ss-empty h5 {
          color: var(--ss-heading);
          font-family: 'Syne', sans-serif;
          margin-bottom: 6px;
        }

        .ss-empty p {
          color: var(--ss-muted);
          font-size: 13.5px;
          margin: 0;
        }

        /* ── Pagination ── */
        .ss-pagination-wrap {
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }

        .ss-pagination-wrap nav ul.pagination {
          gap: 6px;
        }

        .ss-pagination-wrap .page-link {
          background: var(--ss-surface);
          border: 1px solid var(--ss-border);
          color: var(--ss-muted);
          border-radius: 8px !important;
          margin: 0;
        }

        .ss-pagination-wrap .page-item.active .page-link {
          background: var(--ss-green);
          border-color: var(--ss-green);
          color: var(--ss-btn-text);
        }

        .ss-pagination-wrap .page-link:hover {
          color: var(--ss-green);
          border-color: var(--ss-border-h);
        }

        /* ── Modals ── */
        .ss-modal .modal-content {
          background: var(--ss-surface);
          border: 1px solid var(--ss-border-h);
          border-radius: var(--ss-radius);
          color: var(--ss-text);
        }

        .ss-modal .modal-header {
          border-bottom: 1px solid var(--ss-border);
          padding: 20px 24px;
        }

        .ss-modal .modal-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          color: var(--ss-heading);
          font-size: 18px;
        }

        .ss-modal .modal-body {
          padding: 24px;
        }

        .ss-modal .modal-footer {
          border-top: 1px solid var(--ss-border);
          padding: 16px 24px;
        }

        .ss-modal .btn-close {
          filter: invert(1) grayscale(1) brightness(1.6);
          opacity: .7;
        }

        .ss-form-label {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--ss-muted);
          margin-bottom: 6px;
          display: block;
        }

        .ss-form-control {
          width: 100%;
          background: var(--ss-surface2);
          border: 1px solid var(--ss-border);
          border-radius: 9px;
          color: var(--ss-text);
          font-size: 13.5px;
          padding: 11px 14px;
          outline: none;
          transition: border-color .2s, background .2s;
        }

        .ss-form-control::placeholder {
          color: var(--ss-placeholder);
        }

        .ss-form-control:focus {
          border-color: var(--ss-green);
          background: rgba(0, 166, 103, .06);
        }

        textarea.ss-form-control {
          resize: vertical;
          min-height: 90px;
        }

        .ss-form-group {
          margin-bottom: 16px;
        }

        .ss-form-error {
          color: var(--ss-error);
          font-size: 11.5px;
          margin-top: 5px;
        }

        .ss-btn-primary {
          background: var(--ss-green);
          color: var(--ss-btn-text);
          font-weight: 700;
          font-size: 13.5px;
          border: none;
          border-radius: 9px;
          padding: 11px 22px;
          cursor: pointer;
          transition: background .2s;
        }

        .ss-btn-primary:hover {
          background: #00c07a;
        }

        .ss-btn-primary:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .ss-btn-secondary {
          background: transparent;
          color: var(--ss-muted);
          font-weight: 600;
          font-size: 13.5px;
          border: 1px solid var(--ss-border);
          border-radius: 9px;
          padding: 11px 22px;
          cursor: pointer;
          transition: all .2s;
        }

        .ss-btn-secondary:hover {
          color: var(--ss-text);
          border-color: var(--ss-border-h);
        }

        .ss-alert-success {
          background: rgba(0, 166, 103, .1);
          border: 1px solid var(--ss-border-h);
          color: var(--ss-green);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 13px;
          margin-bottom: 24px;
        }

        /* Detail modal specific */
        .ss-detail-img {
          width: 100%;
          aspect-ratio: 16/8;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
          background: var(--ss-surface2);
        }

        .ss-detail-person {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--ss-border);
        }

        .ss-detail-content {
          font-size: 14px;
          line-height: 1.8;
          color: var(--ss-text);
        }

        .ss-detail-content p {
          margin-bottom: 14px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 991px) {
          .ss-grid-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .ss-grid-row {
            grid-template-columns: 1fr;
          }

          .ss-filter-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .ss-cta-banner {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }

          .ss-cta-banner-btn {
            justify-content: center;
          }
        }
      `}</style>

      <div className="ss-page">

        {/* Breadcrumb / hero */}
        <div className="ss-breadcrumb">
          <div className="container">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={route('user.home')}>Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">Success Stories</li>
              </ol>
            </nav>
            <div className="ss-pill">Real People, Real Results</div>
            <h2 className="ss-breadcrumb-title">Success Stories</h2>
            <p className="ss-breadcrumb-sub">Meet the talents and clients who found real opportunity through Future Connect.</p>
            <button type="button" className="ss-hero-cta" onClick={() => setShowSubmitModal(true)}>
              <i className="feather-edit-3"></i> Share Your Story
            </button>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Page Content */}
        <div className="ss-page-content">
          <div className="container">

            {flashMessage && (
              <div className="ss-alert-success">
                <i className="feather-check-circle"></i>
                {flashMessage}
              </div>
            )}

            {/* Filter bar */}
            <div className="ss-filter-bar">
              <form className="ss-search-form" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  name="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search success stories..."
                />
                <button type="submit" aria-label="Search"><i className="feather-search"></i></button>
              </form>

              {roles.length > 0 && (
                <div className="ss-role-chips">
                  <Link
                    href={currentUrlWith(search ? { search } : {})}
                    className={`ss-chip ${!role ? 'active' : ''}`}
                  >
                    All
                  </Link>
                  {roles.map((r) => (
                    <Link
                      key={r}
                      href={currentUrlWith(search ? { role: r, search } : { role: r })}
                      className={`ss-chip ${role === r ? 'active' : ''}`}
                    >
                      {r}
                    </Link>
                  ))}
                </div>
              )}

              {hasActiveFilters && (
                <Link href={route('user.success-stories')} className="ss-clear-filters">
                  <i className="feather-x"></i> Clear
                </Link>
              )}
            </div>
            {/* /Filter bar */}

            <div className="ss-results-count">
              Showing <strong>{total}</strong> stor{total === 1 ? 'y' : 'ies'}
              {role && <> from <strong>{role}</strong></>}
              {search && <> for &ldquo;<strong>{search}</strong>&rdquo;</>}
            </div>

            {storyList.length > 0 ? (
              <>
                <div className="ss-grid-row">
                  {storyList.map((story) => (
                    <div
                      className="ss-card ss-card-trigger"
                      key={story.slug}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedStory(story)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setSelectedStory(story);
                      }}
                    >
                      <div className="ss-card-body">
                        <h3 className="ss-card-title">
                          <button type="button" aria-label={`Read full story: ${story.title}`}>
                            {story.title}
                          </button>
                        </h3>
                        <p className="ss-card-excerpt">
                          &ldquo;{truncate(stripTags(story.excerpt), 100)}&rdquo;
                        </p>

                        <div className="ss-card-footer">
                          <div className="ss-card-person">
                            <div className="ss-avatar">
                              {story.author_name ? story.author_name.charAt(0).toUpperCase() : '?'}
                            </div>
                            <div>
                              <div className="ss-card-person-name">{story.author_name}</div>
                              {story.role && <div className="ss-card-person-role">{story.role}</div>}
                            </div>
                          </div>
                          <button type="button" className="ss-card-arrow" aria-label="Read more">
                            <i className="feather-arrow-up-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {isPaginated && paginationLinks.length > 3 && (
                  <div className="ss-pagination-wrap">
                    <nav>
                      <ul className="pagination">
                        {paginationLinks.map((link, i) => (
                          <li key={i} className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}>
                            <button
                              type="button"
                              className="page-link"
                              disabled={!link.url}
                              onClick={() => link.url && router.get(link.url, {}, { preserveScroll: true })}
                              dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="ss-empty">
                <i className="feather-star"></i>
                <h5>No success stories found</h5>
                <p>Try adjusting your search or filters.</p>
              </div>
            )}

            {/* CTA banner */}
            <div className="ss-cta-banner">
              <div className="ss-cta-banner-text">
                <h4>Have your own success story?</h4>
                <p>Whether you found your next opportunity or your ideal talent through Future Connect, we'd love to feature your story and inspire others in the community.</p>
              </div>
              <button type="button" className="ss-cta-banner-btn" onClick={() => setShowSubmitModal(true)}>
                <i className="feather-plus-circle"></i> Submit Your Story
              </button>
            </div>
            {/* /CTA banner */}

          </div>
        </div>
        {/* /Page Content */}

      </div>

      {/* Submit Success Story Modal */}
      {showSubmitModal && (
        <SsModal
          id="ssSubmitModal"
          title="Share Your Success Story"
          onClose={() => setShowSubmitModal(false)}
          footer={
            <>
              <button type="button" className="ss-btn-secondary" onClick={() => setShowSubmitModal(false)}>
                Cancel
              </button>
              <button type="submit" form="ssSubmitForm" className="ss-btn-primary" disabled={form.processing}>
                {form.processing ? 'Submitting…' : 'Submit Story'}
              </button>
            </>
          }
        >
          <form id="ssSubmitForm" onSubmit={submitStory}>
            <div className="ss-form-group">
              <label className="ss-form-label" htmlFor="ss_title">Story Title</label>
              <input
                type="text"
                id="ss_title"
                className="ss-form-control"
                placeholder="e.g. How I landed my first remote client"
                value={form.data.title}
                onChange={(e) => form.setData('title', e.target.value)}
                required
              />
              {form.errors.title && <div className="ss-form-error">{form.errors.title}</div>}
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="ss-form-group">
                  <label className="ss-form-label" htmlFor="ss_author_name">Your Name</label>
                  <input
                    type="text"
                    id="ss_author_name"
                    className="ss-form-control"
                    placeholder="Full name"
                    value={form.data.author_name}
                    onChange={(e) => form.setData('author_name', e.target.value)}
                    required
                  />
                  {form.errors.author_name && <div className="ss-form-error">{form.errors.author_name}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="ss-form-group">
                  <label className="ss-form-label" htmlFor="ss_role">Your Role</label>
                  <input
                    type="text"
                    id="ss_role"
                    className="ss-form-control"
                    placeholder="e.g. Freelance Designer, Client, Agency"
                    value={form.data.role}
                    onChange={(e) => form.setData('role', e.target.value)}
                  />
                  {form.errors.role && <div className="ss-form-error">{form.errors.role}</div>}
                </div>
              </div>
            </div>

            <div className="ss-form-group">
              <label className="ss-form-label" htmlFor="ss_excerpt">Short Summary</label>
              <textarea
                id="ss_excerpt"
                className="ss-form-control"
                rows={2}
                placeholder="A one or two sentence teaser shown on the story card"
                value={form.data.excerpt}
                onChange={(e) => form.setData('excerpt', e.target.value)}
                required
              />
              {form.errors.excerpt && <div className="ss-form-error">{form.errors.excerpt}</div>}
            </div>

            <div className="ss-form-group">
              <label className="ss-form-label" htmlFor="ss_content">Full Story</label>
              <textarea
                id="ss_content"
                className="ss-form-control"
                rows={6}
                placeholder="Tell us the full story..."
                value={form.data.content}
                onChange={(e) => form.setData('content', e.target.value)}
                required
              />
              {form.errors.content && <div className="ss-form-error">{form.errors.content}</div>}
            </div>

            <div className="ss-form-group">
              <label className="ss-form-label" htmlFor="ss_thumbnail">Photo (optional)</label>
              <input
                type="file"
                id="ss_thumbnail"
                className="ss-form-control"
                accept="image/*"
                onChange={(e) => form.setData('thumbnail', e.target.files[0] ?? null)}
              />
              {form.errors.thumbnail && <div className="ss-form-error">{form.errors.thumbnail}</div>}
            </div>
          </form>
        </SsModal>
      )}
      {/* /Submit Success Story Modal */}

      {/* Story Detail Modal */}
      {selectedStory && (
        <SsModal
          id="ssDetailModal"
          title={selectedStory.title}
          onClose={() => setSelectedStory(null)}
        >
          <img
            src={selectedStory.thumbnail_url || '/assets/img/blog/blog-large-01.jpg'}
            alt={selectedStory.title}
            className="ss-detail-img"
          />
          <div className="ss-detail-person">
            <div className="ss-avatar" style={{ width: 44, height: 44, fontSize: 16 }}>
              {selectedStory.author_name ? selectedStory.author_name.charAt(0).toUpperCase() : '?'}
            </div>
            <div>
              <div className="ss-card-person-name" style={{ fontSize: 14 }}>{selectedStory.author_name}</div>
              <div className="ss-card-person-role">{selectedStory.role || ''}</div>
            </div>
          </div>
          <StoryDetailContent content={selectedStory.content} />
        </SsModal>
      )}
      {/* /Story Detail Modal */}
    </>
  );
}

/**
 * Renders `story.content` the same way the original inline script did:
 * if it looks like it already contains HTML tags, render as-is (trusted,
 * moderated content); otherwise treat it as plain text and split on blank
 * lines into paragraphs, preserving single line breaks as <br>.
 */
function StoryDetailContent({ content }) {
  const html = useMemo(() => {
    if (!content) return '';
    if (/<[a-z][\s\S]*>/i.test(content)) {
      return content;
    }
    return content
      .split(/\n{2,}/)
      .map((p) => `<p>${p.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }, [content]);

  return <div className="ss-detail-content" dangerouslySetInnerHTML={{ __html: html }} />;
}

SuccessStories.layout = (page) => (
  <GuestLayout children={page} title="Success Stories | Future Connect" />
);
