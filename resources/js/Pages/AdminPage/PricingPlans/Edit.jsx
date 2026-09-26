import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import PlanForm from './PlanForm';

export default function Edit({ plan }) {
    const form = useForm({
        name: plan.name ?? '',
        description: plan.description ?? '',
        features: Array.isArray(plan.features) ? plan.features : [],
        is_featured: plan.is_featured ?? false,
        is_active: plan.is_active ?? true,
        monthly_price: plan.monthly_price ?? '',
        annual_price: plan.annual_price ?? '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        form.transform((data) => ({
            ...data,
            _method: 'put',
        }));

        form.post(
            route('admin.pricing-plans.update', plan.id),
            {
                preserveScroll: true,
            }
        );
    }

    return (
        <div data-h-scope="pricing-plan-edit">
            <Head title={`Edit ${plan.name}`} />

            <style>{`
                [data-h-scope="pricing-plan-edit"] {
                    --pe-bg: #f7f8fa;
                    --pe-card: #ffffff;
                    --pe-text: #1d1d1f;
                    --pe-muted: #6e6e73;
                    --pe-subtle: #86868b;
                    --pe-border: #e6e6eb;
                    --pe-primary: #0b8f5b;
                    --pe-primary-dark: #087a4d;
                    --pe-primary-soft: #edf9f3;
                    --pe-warning: #b7791f;
                    --pe-warning-soft: #fff8e8;
                    --pe-danger: #d93025;
                    --pe-danger-soft: #fff1f0;

                    color-scheme: light !important;
                    min-height: 100%;
                    background: var(--pe-bg) !important;
                    color: var(--pe-text) !important;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                [data-h-scope="pricing-plan-edit"] *,
                [data-h-scope="pricing-plan-edit"] *::before,
                [data-h-scope="pricing-plan-edit"] *::after {
                    box-sizing: border-box;
                }

                @media (prefers-color-scheme: dark) {
                    [data-h-scope="pricing-plan-edit"] {
                        color-scheme: light !important;
                        background: #f7f8fa !important;
                        color: #1d1d1f !important;
                    }

                    [data-h-scope="pricing-plan-edit"] input,
                    [data-h-scope="pricing-plan-edit"] textarea,
                    [data-h-scope="pricing-plan-edit"] select {
                        color-scheme: light !important;
                        background: #ffffff !important;
                        color: #1d1d1f !important;
                    }
                }

                /* =========================================================
                   PAGE
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-page {
                    width: 100%;
                    max-width: 1180px;
                    margin: 0 auto;
                    padding: 28px 24px 48px;
                }

                /* =========================================================
                   HEADER
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 24px;
                    margin-bottom: 26px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-header-main {
                    min-width: 0;
                }

                [data-h-scope="pricing-plan-edit"] .pe-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 8px;
                    color: var(--pe-primary);
                    font-size: 11px;
                    line-height: 1;
                    font-weight: 700;
                    letter-spacing: .04em;
                    text-transform: uppercase;
                }

                [data-h-scope="pricing-plan-edit"] .pe-eyebrow-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--pe-primary);
                }

                [data-h-scope="pricing-plan-edit"] .pe-title-row {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 9px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-title {
                    margin: 0;
                    color: var(--pe-text);
                    font-size: 25px;
                    line-height: 1.2;
                    font-weight: 700;
                    letter-spacing: -.025em;
                }

                [data-h-scope="pricing-plan-edit"] .pe-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 9px;
                    border-radius: 999px;
                    font-size: 10px;
                    line-height: 1;
                    font-weight: 700;
                    white-space: nowrap;
                }

                [data-h-scope="pricing-plan-edit"] .pe-status.active {
                    color: #087a4d;
                    background: var(--pe-primary-soft);
                }

                [data-h-scope="pricing-plan-edit"] .pe-status.inactive {
                    color: #9a3412;
                    background: #fff3ed;
                }

                [data-h-scope="pricing-plan-edit"] .pe-status-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: currentColor;
                }

                [data-h-scope="pricing-plan-edit"] .pe-subtitle {
                    max-width: 680px;
                    margin: 7px 0 0;
                    color: var(--pe-muted);
                    font-size: 13px;
                    line-height: 1.55;
                }

                [data-h-scope="pricing-plan-edit"] .pe-back {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    flex-shrink: 0;
                    padding: 9px 13px;
                    border: 1px solid var(--pe-border);
                    border-radius: 9px;
                    background: #ffffff;
                    color: #4d4d52;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 600;
                    transition:
                        border-color .15s ease,
                        background .15s ease,
                        color .15s ease,
                        transform .15s ease;
                }

                [data-h-scope="pricing-plan-edit"] .pe-back:hover {
                    border-color: #d0d0d5;
                    background: #fafafa;
                    color: var(--pe-text);
                    transform: translateY(-1px);
                }

                [data-h-scope="pricing-plan-edit"] .pe-back svg {
                    width: 14px;
                    height: 14px;
                }

                /* =========================================================
                   MAIN LAYOUT
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 285px;
                    gap: 20px;
                    align-items: start;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-card {
                    min-width: 0;
                    overflow: hidden;
                    border: 1px solid var(--pe-border);
                    border-radius: 14px;
                    background: var(--pe-card);
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .025),
                        0 5px 20px rgba(0, 0, 0, .025);
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    padding: 18px 20px;
                    border-bottom: 1px solid var(--pe-border);
                    background: #ffffff;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-header-content {
                    min-width: 0;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-title {
                    margin: 0;
                    color: var(--pe-text);
                    font-size: 14px;
                    line-height: 1.4;
                    font-weight: 700;
                    letter-spacing: -.01em;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-description {
                    margin: 4px 0 0;
                    color: var(--pe-muted);
                    font-size: 12px;
                    line-height: 1.5;
                }

                [data-h-scope="pricing-plan-edit"] .pe-edit-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 9px;
                    border: 1px solid #e3e3e8;
                    border-radius: 7px;
                    background: #f8f8fa;
                    color: #66666c;
                    font-size: 10px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                [data-h-scope="pricing-plan-edit"] .pe-edit-label svg {
                    width: 12px;
                    height: 12px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body {
                    padding: 20px;
                }

                /* =========================================================
                   SIDEBAR
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card {
                    padding: 17px;
                    border: 1px solid var(--pe-border);
                    border-radius: 13px;
                    background: #ffffff;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .02);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card.primary {
                    border-color: #d6eee2;
                    background: var(--pe-primary-soft);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card.warning {
                    border-color: #f0dfb9;
                    background: var(--pe-warning-soft);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 31px;
                    height: 31px;
                    margin-bottom: 11px;
                    border-radius: 8px;
                    background: #f2f3f5;
                    color: #55565b;
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card.primary .pe-side-icon {
                    background: #dff4e9;
                    color: var(--pe-primary);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card.warning .pe-side-icon {
                    background: #f9ebc9;
                    color: var(--pe-warning);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-icon svg {
                    width: 15px;
                    height: 15px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-title {
                    margin: 0 0 5px;
                    color: var(--pe-text);
                    font-size: 12px;
                    font-weight: 700;
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-text {
                    margin: 0;
                    color: var(--pe-muted);
                    font-size: 11.5px;
                    line-height: 1.6;
                }

                /* =========================================================
                   CURRENT PLAN SUMMARY
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-summary {
                    margin-top: 13px;
                    padding-top: 13px;
                    border-top: 1px solid rgba(11, 143, 91, .12);
                }

                [data-h-scope="pricing-plan-edit"] .pe-summary-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 5px 0;
                }

                [data-h-scope="pricing-plan-edit"] .pe-summary-label {
                    color: var(--pe-muted);
                    font-size: 10.5px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-summary-value {
                    max-width: 150px;
                    overflow: hidden;
                    color: var(--pe-text);
                    font-size: 10.5px;
                    font-weight: 650;
                    text-align: right;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* =========================================================
                   FORM OVERRIDES
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-form-body form {
                    color: var(--pe-text);
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body label {
                    color: #343438 !important;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif !important;
                    font-size: 12px !important;
                    font-weight: 600 !important;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body input,
                [data-h-scope="pricing-plan-edit"] .pe-form-body textarea,
                [data-h-scope="pricing-plan-edit"] .pe-form-body select {
                    color: #1d1d1f !important;
                    background: #ffffff !important;
                    border-color: #dedee3 !important;
                    border-radius: 8px !important;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif !important;
                    font-size: 12.5px !important;
                    box-shadow: none !important;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body input:focus,
                [data-h-scope="pricing-plan-edit"] .pe-form-body textarea:focus,
                [data-h-scope="pricing-plan-edit"] .pe-form-body select:focus {
                    border-color: #8bcfb0 !important;
                    box-shadow: 0 0 0 3px rgba(11, 143, 91, .09) !important;
                    outline: none !important;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body input::placeholder,
                [data-h-scope="pricing-plan-edit"] .pe-form-body textarea::placeholder {
                    color: #a1a1a7 !important;
                }

                /*
                 * Prevent inherited dark-theme styles from affecting
                 * PlanForm elements.
                 */
                [data-h-scope="pricing-plan-edit"] .pe-form-body .bg-dark,
                [data-h-scope="pricing-plan-edit"] .pe-form-body .bg-black,
                [data-h-scope="pricing-plan-edit"] .pe-form-body [class*="dark"] {
                    background: #ffffff !important;
                    color: #1d1d1f !important;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body button[type="submit"],
                [data-h-scope="pricing-plan-edit"] .pe-form-body .btn-primary {
                    border: 0 !important;
                    border-radius: 8px !important;
                    background: var(--pe-primary) !important;
                    color: #ffffff !important;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif !important;
                    font-size: 12px !important;
                    font-weight: 650 !important;
                    box-shadow: none !important;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body button[type="submit"]:hover,
                [data-h-scope="pricing-plan-edit"] .pe-form-body .btn-primary:hover {
                    background: var(--pe-primary-dark) !important;
                }

                /* =========================================================
                   RESPONSIVE
                ========================================================= */

                @media (max-width: 900px) {
                    [data-h-scope="pricing-plan-edit"] .pe-layout {
                        grid-template-columns: 1fr;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-sidebar {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 640px) {
                    [data-h-scope="pricing-plan-edit"] .pe-page {
                        padding: 20px 14px 35px;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-header {
                        flex-direction: column;
                        margin-bottom: 20px;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-title {
                        font-size: 22px;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-back {
                        width: 100%;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-form-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-form-body {
                        padding: 15px;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-sidebar {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="pe-page">
                {/* Header */}
                <div className="pe-header">
                    <div className="pe-header-main">
                        <div className="pe-eyebrow">
                            <span className="pe-eyebrow-dot" />
                            Talent platform
                        </div>

                        <div className="pe-title-row">
                            <h1 className="pe-title">
                                Edit pricing plan
                            </h1>

                            <span
                                className={`pe-status ${
                                    plan.is_active
                                        ? 'active'
                                        : 'inactive'
                                }`}
                            >
                                <span className="pe-status-dot" />

                                {plan.is_active
                                    ? 'Active'
                                    : 'Inactive'}
                            </span>
                        </div>

                        <p className="pe-subtitle">
                            Update the pricing, benefits, visibility, and
                            positioning of this plan without changing its
                            existing configuration.
                        </p>
                    </div>

                    <Link
                        href={route('admin.pricing-plans.index')}
                        className="pe-back"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 12H5" />
                            <path d="m12 19-7-7 7-7" />
                        </svg>

                        Back to plans
                    </Link>
                </div>

                {/* Main */}
                <div className="pe-layout">
                    <div className="pe-form-card">
                        <div className="pe-form-header">
                            <div className="pe-form-header-content">
                                <h2 className="pe-form-title">
                                    Plan configuration
                                </h2>

                                <p className="pe-form-description">
                                    Make changes to the plan details,
                                    pricing, features, and availability.
                                </p>
                            </div>

                            <div className="pe-edit-label">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 20h9" />
                                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                </svg>

                                Editing existing plan
                            </div>
                        </div>

                        <div className="pe-form-body">
                            <PlanForm
                                mode="edit"
                                form={form}
                                onSubmit={handleSubmit}
                                backHref={route(
                                    'admin.pricing-plans.index'
                                )}
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="pe-sidebar">
                        <div className="pe-side-card primary">
                            <div className="pe-side-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3v18" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
                                </svg>
                            </div>

                            <h3 className="pe-side-title">
                                Current plan
                            </h3>

                            <p className="pe-side-text">
                                Review the existing configuration before
                                publishing your changes.
                            </p>

                            <div className="pe-summary">
                                <div className="pe-summary-row">
                                    <span className="pe-summary-label">
                                        Name
                                    </span>

                                    <span className="pe-summary-value">
                                        {plan.name || 'Unnamed'}
                                    </span>
                                </div>

                                <div className="pe-summary-row">
                                    <span className="pe-summary-label">
                                        Features
                                    </span>

                                    <span className="pe-summary-value">
                                        {Array.isArray(plan.features)
                                            ? plan.features.length
                                            : 0}
                                    </span>
                                </div>

                                <div className="pe-summary-row">
                                    <span className="pe-summary-label">
                                        Status
                                    </span>

                                    <span className="pe-summary-value">
                                        {plan.is_active
                                            ? 'Active'
                                            : 'Inactive'}
                                    </span>
                                </div>

                                <div className="pe-summary-row">
                                    <span className="pe-summary-label">
                                        Featured
                                    </span>

                                    <span className="pe-summary-value">
                                        {plan.is_featured
                                            ? 'Yes'
                                            : 'No'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pe-side-card">
                            <div className="pe-side-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m12 3 1.9 5.8H20l-4.9 3.6 1.9 5.8-5-3.5-5 3.5 1.9-5.8L4 8.8h6.1L12 3Z" />
                                </svg>
                            </div>

                            <h3 className="pe-side-title">
                                Keep the value clear
                            </h3>

                            <p className="pe-side-text">
                                Make sure the description and feature list
                                clearly explain what professionals receive
                                from this plan.
                            </p>
                        </div>

                        {!plan.is_active && (
                            <div className="pe-side-card warning">
                                <div className="pe-side-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 9v4" />
                                        <path d="M12 17h.01" />
                                        <path d="M10.3 3.7 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z" />
                                    </svg>
                                </div>

                                <h3 className="pe-side-title">
                                    Plan is inactive
                                </h3>

                                <p className="pe-side-text">
                                    This plan is currently not active. Enable
                                    it from the form when you are ready to make
                                    it available.
                                </p>
                            </div>
                        )}

                        {plan.is_featured && (
                            <div className="pe-side-card primary">
                                <div className="pe-side-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6Z" />
                                    </svg>
                                </div>

                                <h3 className="pe-side-title">
                                    Featured plan
                                </h3>

                                <p className="pe-side-text">
                                    This plan is currently marked as featured
                                    and may receive additional visual
                                    prominence across the platform.
                                </p>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </div>
    );
}

Edit.layout = (page) => (
    <AppLayout
        children={page}
        title={`Edit ${page.props.plan.name}`}
    />
);