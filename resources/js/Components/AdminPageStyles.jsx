import React from 'react';

/**
 * Shared admin-page theme tokens and helper components.
 *
 * Every admin page wraps its content in <AdminPageScope name="skills">
 * (or similar) so the CSS variables defined here are scoped and do not
 * leak across pages. The variables are themed for light mode by default
 * and overridden under [data-bs-theme="dark"], which the ThemeContext
 * toggles on <html>.
 *
 * Why scoped variables? The legacy Blade templates redeclared an identical
 * ~250-line <style> block on every page. This module centralizes it once.
 */

export const ADMIN_PAGE_CSS = `
/* ── Light tokens (default) ── */
[data-ap-scope] {
    --ap-bg-deep:        #f0f4f8;
    --ap-bg-card:        #ffffff;
    --ap-bg-surface:     #f8fafc;
    --ap-bg-hover:       #f1f5f9;
    --ap-bg-inset:       #ffffff;
    --ap-accent:         #00a667;
    --ap-accent-dark:    #008f57;
    --ap-accent-dim:     rgba(0, 166, 103, 0.10);
    --ap-accent-glow:    rgba(0, 166, 103, 0.25);
    --ap-text:           #0f1c2e;
    --ap-text-secondary: #4a6380;
    --ap-text-muted:     #8ea5be;
    --ap-border:         rgba(15, 28, 46, 0.09);
    --ap-border-accent:  rgba(0, 166, 103, 0.28);
    --ap-border-input:   #dae2ec;
    --ap-danger:         #dc3545;
    --ap-danger-dim:     rgba(220, 53, 69, 0.09);
    --ap-warning:        #f59e0b;
    --ap-radius-sm:      6px;
    --ap-radius-md:      10px;
    --ap-radius-lg:      16px;
    --ap-shadow-card:    0 1px 4px rgba(15,28,46,0.07), 0 4px 16px rgba(15,28,46,0.05);
    --ap-shadow-glow:    0 0 18px rgba(0,166,103,0.18);
    --ap-focus-ring:     0 0 0 3px rgba(0, 166, 103, 0.22);
    --ap-input-focus-bg: #ffffff;
    color: var(--ap-text);
}

/* ── Dark tokens (applied when ThemeContext sets data-bs-theme="dark") ── */
[data-bs-theme="dark"] [data-ap-scope] {
    --ap-bg-deep:        #060f11;
    --ap-bg-card:        #0d1e22;
    --ap-bg-surface:     #0a1719;
    --ap-bg-hover:       #112a2f;
    --ap-bg-inset:       #0a1719;
    --ap-accent:         #48d597;
    --ap-accent-dark:    #3bbf82;
    --ap-accent-dim:     rgba(72, 213, 151, 0.10);
    --ap-accent-glow:    rgba(72, 213, 151, 0.30);
    --ap-text:           #f0faf6;
    --ap-text-secondary: #9bbdb4;
    --ap-text-muted:     #6a9a90;
    --ap-border:         rgba(72, 213, 151, 0.12);
    --ap-border-accent:  rgba(72, 213, 151, 0.30);
    --ap-border-input:   rgba(72, 213, 151, 0.18);
    --ap-danger:         #f0667a;
    --ap-danger-dim:     rgba(240, 102, 122, 0.12);
    --ap-warning:        #f5b450;
    --ap-shadow-card:    0 1px 4px rgba(0,0,0,0.30), 0 4px 16px rgba(0,0,0,0.25);
    --ap-shadow-glow:    0 0 18px rgba(72,213,151,0.22);
    --ap-focus-ring:     0 0 0 3px rgba(72, 213, 151, 0.28);
    --ap-input-focus-bg: #060f11;
}

/* ── Layout chrome ── */
[data-ap-scope] .ap-page { padding: 24px 0 40px; }
[data-ap-scope] .ap-page-head {
    display: flex; align-items: center; justify-content: space-between;
    padding: 8px 0 22px; border-bottom: 1px solid var(--ap-border);
    margin-bottom: 24px; flex-wrap: wrap; gap: 16px;
}
[data-ap-scope] .ap-page-title {
    font-family: 'Sora', 'DM Sans', sans-serif; font-size: 1.5rem; font-weight: 700;
    color: var(--ap-text); letter-spacing: -0.02em; margin: 0;
}
[data-ap-scope] .ap-page-title span { color: var(--ap-accent); }
[data-ap-scope] .ap-page-sub { font-size: 0.82rem; color: var(--ap-text-muted); margin-top: 3px; }

/* ── Buttons ── */
[data-ap-scope] .ap-btn {
    display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px;
    border-radius: var(--ap-radius-sm); border: 1px solid transparent;
    font-size: 0.85rem; font-weight: 600; text-decoration: none; cursor: pointer;
    transition: background 150ms ease, color 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
}
[data-ap-scope] .ap-btn i { line-height: 1; }
[data-ap-scope] .ap-btn-primary { background: var(--ap-accent); color: #fff; }
[data-ap-scope] .ap-btn-primary:hover { background: var(--ap-accent-dark); color: #fff; box-shadow: var(--ap-shadow-glow); }
[data-ap-scope] .ap-btn-ghost {
    background: var(--ap-bg-card); color: var(--ap-text-secondary); border-color: var(--ap-border-input);
}
[data-ap-scope] .ap-btn-ghost:hover { background: var(--ap-bg-hover); color: var(--ap-text); border-color: var(--ap-accent); }
[data-ap-scope] .ap-btn-danger { background: var(--ap-danger); color: #fff; }
[data-ap-scope] .ap-btn-danger:hover { background: #b02a37; color: #fff; }
[data-ap-scope] .ap-btn-sm { padding: 5px 12px; font-size: 0.78rem; }
[data-ap-scope] .ap-btn-icon {
    width: 30px; height: 30px; padding: 0; display: inline-flex; align-items: center;
    justify-content: center; border-radius: var(--ap-radius-sm); background: transparent;
    color: var(--ap-text-secondary); border: 1px solid transparent; cursor: pointer;
}
[data-ap-scope] .ap-btn-icon:hover { background: var(--ap-bg-hover); color: var(--ap-accent); }
[data-ap-scope] .ap-btn-icon.danger:hover { background: var(--ap-danger-dim); color: var(--ap-danger); }

/* ── Cards ── */
[data-ap-scope] .ap-card {
    background: var(--ap-bg-card); border: 1px solid var(--ap-border);
    border-radius: var(--ap-radius-lg); box-shadow: var(--ap-shadow-card);
    overflow: hidden; margin-bottom: 20px;
}
[data-ap-scope] .ap-card-head {
    padding: 14px 22px; border-bottom: 1px solid var(--ap-border); background: var(--ap-bg-surface);
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
}
[data-ap-scope] .ap-card-head h5 {
    font-family: 'Sora', sans-serif; font-size: 0.9rem; font-weight: 700;
    color: var(--ap-text); margin: 0; display: inline-flex; align-items: center; gap: 8px;
}
[data-ap-scope] .ap-card-head h5 i { color: var(--ap-accent); }
[data-ap-scope] .ap-card-body { padding: 22px; }

/* ── Tables ── */
[data-ap-scope] .ap-table { width: 100%; border-collapse: collapse; font-size: 0.86rem; }
[data-ap-scope] .ap-table thead th {
    text-align: left; padding: 12px 16px; font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; color: var(--ap-text-muted);
    border-bottom: 1px solid var(--ap-border); background: var(--ap-bg-surface);
}
[data-ap-scope] .ap-table tbody td { padding: 12px 16px; border-bottom: 1px solid var(--ap-border); color: var(--ap-text); vertical-align: middle; }
[data-ap-scope] .ap-table tbody tr:last-child td { border-bottom: none; }
[data-ap-scope] .ap-table tbody tr:hover td { background: var(--ap-bg-hover); }
[data-ap-scope] .ap-table-empty { text-align: center; padding: 40px 16px; color: var(--ap-text-muted); }

/* ── Form controls ── */
[data-ap-scope] .ap-label {
    font-size: 0.74rem; font-weight: 600; color: var(--ap-text-secondary);
    text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; display: block;
}
[data-ap-scope] .ap-input,
[data-ap-scope] .ap-select,
[data-ap-scope] .ap-textarea {
    background: var(--ap-bg-card); border: 1px solid var(--ap-border-input); color: var(--ap-text);
    border-radius: var(--ap-radius-sm); padding: 9px 13px; font-size: 0.86rem; width: 100%;
    transition: border-color 150ms ease, box-shadow 150ms ease;
}
[data-ap-scope] .ap-input:focus,
[data-ap-scope] .ap-select:focus,
[data-ap-scope] .ap-textarea:focus {
    border-color: var(--ap-accent); box-shadow: var(--ap-focus-ring); outline: none; background: var(--ap-input-focus-bg);
}
[data-ap-scope] .ap-input::placeholder,
[data-ap-scope] .ap-textarea::placeholder { color: var(--ap-text-muted); }
[data-ap-scope] .ap-textarea { resize: vertical; min-height: 110px; }
[data-ap-scope] .ap-input.is-invalid,
[data-ap-scope] .ap-select.is-invalid,
[data-ap-scope] .ap-textarea.is-invalid { border-color: var(--ap-danger); }
[data-ap-scope] .ap-field-error { display: block; font-size: 0.74rem; color: var(--ap-danger); margin-top: 4px; }
[data-ap-scope] .ap-hint { display: block; margin-top: 5px; font-size: 0.74rem; color: var(--ap-text-muted); }
[data-ap-scope] .ap-upload {
    position: relative; border: 2px dashed var(--ap-border-input); border-radius: var(--ap-radius-md);
    padding: 22px; text-align: center; background: var(--ap-bg-surface); cursor: pointer;
    transition: border-color 150ms ease, background 150ms ease;
}
[data-ap-scope] .ap-upload:hover { border-color: var(--ap-accent); background: var(--ap-bg-hover); }
[data-ap-scope] .ap-upload input[type="file"] { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
[data-ap-scope] .ap-upload i { font-size: 1.6rem; color: var(--ap-text-muted); display: block; margin-bottom: 6px; }
[data-ap-scope] .ap-upload p { color: var(--ap-text-secondary); font-size: 0.85rem; margin: 0; }
[data-ap-scope] .ap-upload small { color: var(--ap-text-muted); font-size: 0.74rem; }

/* ── Badges ── */
[data-ap-scope] .ap-badge {
    display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px;
    border-radius: 20px; font-size: 0.72rem; font-weight: 600;
    background: var(--ap-accent-dim); color: var(--ap-accent);
}
[data-ap-scope] .ap-badge.warning { background: rgba(245,158,11,0.12); color: var(--ap-warning); }
[data-ap-scope] .ap-badge.danger  { background: var(--ap-danger-dim); color: var(--ap-danger); }
[data-ap-scope] .ap-badge.muted   { background: var(--ap-bg-hover); color: var(--ap-text-secondary); }

/* ── Stat cards ── */
[data-ap-scope] .ap-stat {
    background: var(--ap-bg-card); border: 1px solid var(--ap-border);
    border-radius: var(--ap-radius-md); padding: 16px 18px; display: flex; align-items: center; gap: 12px;
}
[data-ap-scope] .ap-stat-icon {
    width: 42px; height: 42px; border-radius: var(--ap-radius-sm);
    background: var(--ap-accent-dim); color: var(--ap-accent);
    display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
}
[data-ap-scope] .ap-stat-value { font-size: 1.4rem; font-weight: 700; color: var(--ap-text); line-height: 1.1; }
[data-ap-scope] .ap-stat-label { font-size: 0.76rem; color: var(--ap-text-muted); }

/* ── Pagination ── */
[data-ap-scope] .ap-pagination { display: flex; flex-wrap: wrap; gap: 6px; padding: 14px 16px; border-top: 1px solid var(--ap-border); }

/* ── Alerts ── */
[data-ap-scope] .ap-alert {
    border-radius: var(--ap-radius-md); padding: 12px 16px; font-size: 0.85rem; margin-bottom: 16px;
    border: 1px solid var(--ap-border);
}
[data-ap-scope] .ap-alert.danger { background: var(--ap-danger-dim); border-color: var(--ap-danger); color: var(--ap-danger); }
[data-ap-scope] .ap-alert.success { background: var(--ap-accent-dim); border-color: var(--ap-border-accent); color: var(--ap-accent-dark); }

/* ── Misc helpers ── */
[data-ap-scope] .ap-divider { height: 1px; background: var(--ap-border); margin: 16px 0; }
[data-ap-scope] .ap-muted { color: var(--ap-text-muted) !important; }
[data-ap-scope] .ap-keyval { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--ap-border); }
[data-ap-scope] .ap-keyval:last-child { border-bottom: none; }
[data-ap-scope] .ap-keyval-key { color: var(--ap-text-muted); font-size: 0.82rem; }
[data-ap-scope] .ap-keyval-val { color: var(--ap-text); font-size: 0.86rem; font-weight: 500; text-align: right; }
`;

/**
 * Page wrapper that injects the shared admin CSS (once per render is fine —
 * browsers dedupe identical <style> tags by content) and scopes all the
 * variables via a data attribute.
 */
export default function AdminPageScope({ name, children, className = '', fluid = true, ...rest }) {
    return (
        <>
            <style>{ADMIN_PAGE_CSS}</style>
            <div data-ap-scope={name} className={`${fluid ? 'container-fluid' : 'container'} ${className}`} {...rest}>
                {children}
            </div>
        </>
    );
}

/** Standard pagination control for a Laravel paginator object ({links, ...}). */
export function Pagination({ paginator }) {
    if (!paginator?.links || paginator.links.length <= 3) return null;
    return (
        <div className="ap-pagination">
            {paginator.links.map((link, i) =>
                link.url ? (
                    <a
                        key={i}
                        href={link.url}
                        className={`ap-btn ap-btn-sm ${link.active ? 'ap-btn-primary' : 'ap-btn-ghost'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <span
                        key={i}
                        className="ap-btn ap-btn-sm ap-btn-ghost"
                        style={{ opacity: 0.5, cursor: 'default' }}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                )
            )}
        </div>
    );
}
