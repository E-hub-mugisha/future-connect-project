import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        type: "",
        experience_level: "",
        location: "",
        salary_range: "",
        skills: "",
        description: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.jobs.store"));
    }

    return (
        <AppLayout>
            <Head title="Create New Job" />

            <style>{`
                :root {
                    --create-bg: #f5f5f7;
                    --create-card: #ffffff;

                    --create-text: #1d1d1f;
                    --create-secondary: #6e6e73;
                    --create-muted: #86868b;

                    --create-border: #e5e5e7;
                    --create-border-soft: #ededee;

                    --create-green: #167c52;
                    --create-green-dark: #116440;
                    --create-green-light: #edf8f2;

                    --create-red: #c43d3d;
                    --create-red-light: #fff0f0;

                    --create-radius: 14px;

                    --create-font:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                .fc-create-job,
                .fc-create-job * {
                    box-sizing: border-box;
                }

                .fc-create-job {
                    min-height: 100%;
                    padding: 28px 30px 50px;

                    background: var(--create-bg);
                    color: var(--create-text);

                    font-family: var(--create-font);
                    font-size: 13px;

                    -webkit-font-smoothing: antialiased;
                }

                .create-container {
                    max-width: 1050px;
                    margin: 0 auto;
                }

                /* HEADER */

                .create-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;

                    gap: 20px;
                    margin-bottom: 22px;
                }

                .create-heading {
                    min-width: 0;
                }

                .create-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 7px;

                    margin-bottom: 7px;

                    color: var(--create-green);

                    font-size: 10px;
                    font-weight: 600;

                    letter-spacing: .06em;
                    text-transform: uppercase;
                }

                .create-eyebrow-dot {
                    width: 6px;
                    height: 6px;

                    border-radius: 50%;
                    background: var(--create-green);
                }

                .create-heading h1 {
                    margin: 0;

                    color: var(--create-text);

                    font-size: 21px;
                    line-height: 1.25;
                    font-weight: 600;

                    letter-spacing: -.025em;
                }

                .create-heading p {
                    margin: 5px 0 0;

                    color: var(--create-secondary);

                    font-size: 12px;
                    line-height: 1.5;
                }

                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;

                    min-height: 36px;
                    padding: 0 14px;

                    border: 1px solid #d9d9dc;
                    border-radius: 9px;

                    background: #fff;
                    color: #424245;

                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 500;

                    text-decoration: none;
                    white-space: nowrap;

                    transition:
                        background .18s ease,
                        border-color .18s ease,
                        color .18s ease;
                }

                .back-btn:hover {
                    background: #f8f8f8;
                    border-color: #c8c8cc;
                    color: var(--create-text);
                }

                /* MAIN CARD */

                .create-card {
                    overflow: hidden;

                    background: var(--create-card);

                    border: 1px solid var(--create-border);
                    border-radius: var(--create-radius);

                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .02),
                        0 5px 20px rgba(0, 0, 0, .025);
                }

                /* CARD HEADER */

                .form-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    padding: 18px 22px;

                    border-bottom: 1px solid var(--create-border-soft);
                }

                .form-header-icon {
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;

                    background: var(--create-green-light);
                    color: var(--create-green);

                    font-size: 13px;
                }

                .form-header-content h2 {
                    margin: 0;

                    color: var(--create-text);

                    font-size: 13px;
                    font-weight: 600;
                }

                .form-header-content p {
                    margin: 3px 0 0;

                    color: var(--create-muted);

                    font-size: 10.5px;
                }

                /* FORM */

                .job-form {
                    padding: 24px 22px;
                }

                .form-section {
                    margin-bottom: 25px;
                }

                .form-section:last-child {
                    margin-bottom: 0;
                }

                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 7px;

                    margin: 0 0 14px;

                    color: var(--create-text);

                    font-size: 12px;
                    font-weight: 600;
                }

                .section-title i {
                    color: var(--create-green);
                    font-size: 11px;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 16px;
                }

                .field {
                    min-width: 0;
                }

                .field-full {
                    grid-column: 1 / -1;
                }

                .field-label {
                    display: block;

                    margin: 0 0 6px;

                    color: #4b4b4f;

                    font-size: 10.5px;
                    line-height: 1.3;
                    font-weight: 500;
                }

                .required {
                    color: var(--create-green);
                }

                .field-control {
                    width: 100%;
                    height: 39px;

                    padding: 0 12px;

                    border: 1px solid #dcdcdf;
                    border-radius: 9px;

                    background: #fff;
                    color: var(--create-text);

                    font-family: inherit;
                    font-size: 11.5px;

                    outline: none;

                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease,
                        background .15s ease;
                }

                .field-control:hover {
                    border-color: #c9c9cd;
                }

                .field-control:focus {
                    border-color: var(--create-green);

                    box-shadow:
                        0 0 0 3px rgba(22,124,82,.08);
                }

                .field-control::placeholder {
                    color: #a1a1a6;
                }

                select.field-control {
                    cursor: pointer;
                }

                textarea.field-control {
                    height: auto;
                    min-height: 170px;

                    padding: 11px 12px;

                    resize: vertical;
                    line-height: 1.6;
                }

                .field-error {
                    margin-top: 5px;

                    color: var(--create-red);

                    font-size: 10px;
                    line-height: 1.4;
                }

                .field-control.has-error {
                    border-color: #e1a5a5;

                    background: #fffafa;
                }

                .field-hint {
                    margin: 5px 0 0;

                    color: var(--create-muted);

                    font-size: 9.5px;
                    line-height: 1.4;
                }

                /* DESCRIPTION */

                .description-wrapper {
                    position: relative;
                }

                .description-counter {
                    position: absolute;
                    right: 11px;
                    bottom: 9px;

                    padding: 2px 5px;

                    border-radius: 5px;

                    background: rgba(255,255,255,.9);

                    color: var(--create-muted);

                    font-size: 9px;
                    pointer-events: none;
                }

                /* FOOTER */

                .form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    gap: 15px;

                    padding: 16px 22px;

                    background: #fafafa;

                    border-top: 1px solid var(--create-border-soft);
                }

                .footer-note {
                    display: flex;
                    align-items: center;
                    gap: 7px;

                    color: var(--create-muted);

                    font-size: 10px;
                }

                .footer-note i {
                    color: var(--create-green);
                }

                .footer-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .cancel-btn,
                .publish-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;

                    min-height: 36px;
                    padding: 0 15px;

                    border-radius: 9px;

                    font-family: inherit;
                    font-size: 11.5px;
                    font-weight: 500;

                    text-decoration: none;

                    cursor: pointer;

                    transition:
                        background .18s ease,
                        border-color .18s ease,
                        color .18s ease,
                        opacity .18s ease;
                }

                .cancel-btn {
                    border: 1px solid #d9d9dc;

                    background: #fff;
                    color: #4b4b4f;
                }

                .cancel-btn:hover {
                    background: #f5f5f5;
                    border-color: #c8c8cc;
                }

                .publish-btn {
                    border: 1px solid var(--create-green);

                    background: var(--create-green);
                    color: #fff;
                }

                .publish-btn:hover {
                    background: var(--create-green-dark);
                    border-color: var(--create-green-dark);
                }

                .publish-btn:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                }

                .loading-spinner {
                    width: 12px;
                    height: 12px;

                    border: 2px solid rgba(255,255,255,.4);
                    border-top-color: #fff;

                    border-radius: 50%;

                    animation: create-spin .7s linear infinite;
                }

                @keyframes create-spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* RESPONSIVE */

                @media (max-width: 700px) {
                    .fc-create-job {
                        padding: 20px 15px 40px;
                    }

                    .create-header {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .back-btn {
                        width: 100%;
                    }

                    .form-grid {
                        grid-template-columns: 1fr;
                    }

                    .field-full {
                        grid-column: auto;
                    }

                    .form-footer {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .footer-note {
                        justify-content: center;
                    }

                    .footer-actions {
                        width: 100%;
                    }

                    .cancel-btn,
                    .publish-btn {
                        flex: 1;
                    }
                }

                @media (max-width: 450px) {
                    .job-form {
                        padding: 20px 16px;
                    }

                    .form-header {
                        padding: 16px;
                    }

                    .form-footer {
                        padding: 15px 16px;
                    }
                }
            `}</style>

            <div className="fc-create-job">
                <div className="create-container">

                    {/* HEADER */}
                    <div className="create-header">

                        <div className="create-heading">

                            <div className="create-eyebrow">
                                <span className="create-eyebrow-dot"></span>
                                Recruitment
                            </div>

                            <h1>
                                Create New Job
                            </h1>

                            <p>
                                Create and publish a new opportunity
                                for candidates to apply.
                            </p>

                        </div>

                        <Link
                            href={route("admin.jobs.index")}
                            className="back-btn"
                        >
                            <i className="bi bi-arrow-left"></i>
                            Back to Jobs
                        </Link>

                    </div>

                    {/* FORM CARD */}
                    <div className="create-card">

                        {/* CARD HEADER */}
                        <div className="form-header">

                            <div className="form-header-icon">
                                <i className="bi bi-briefcase"></i>
                            </div>

                            <div className="form-header-content">
                                <h2>
                                    Job Information
                                </h2>

                                <p>
                                    Provide the details candidates
                                    need to understand this position.
                                </p>
                            </div>

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="job-form"
                        >

                            {/* BASIC INFORMATION */}
                            <div className="form-section">

                                <h3 className="section-title">
                                    <i className="bi bi-file-earmark-text"></i>
                                    Basic Information
                                </h3>

                                <div className="form-grid">

                                    {/* TITLE */}
                                    <div className="field field-full">

                                        <label className="field-label">
                                            Job Title{" "}
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData(
                                                    "title",
                                                    e.target.value
                                                )
                                            }
                                            className={`field-control ${
                                                errors.title
                                                    ? "has-error"
                                                    : ""
                                            }`}
                                            placeholder="e.g. Full Stack Developer"
                                            required
                                        />

                                        {errors.title && (
                                            <div className="field-error">
                                                {errors.title}
                                            </div>
                                        )}

                                    </div>

                                    {/* TYPE */}
                                    <div className="field">

                                        <label className="field-label">
                                            Job Type
                                        </label>

                                        <select
                                            value={data.type}
                                            onChange={(e) =>
                                                setData(
                                                    "type",
                                                    e.target.value
                                                )
                                            }
                                            className="field-control"
                                        >
                                            <option value="">
                                                Select job type
                                            </option>
                                            <option value="Full-time">
                                                Full-time
                                            </option>
                                            <option value="Part-time">
                                                Part-time
                                            </option>
                                            <option value="Contract">
                                                Contract
                                            </option>
                                            <option value="Internship">
                                                Internship
                                            </option>
                                            <option value="Remote">
                                                Remote
                                            </option>
                                        </select>

                                    </div>

                                    {/* EXPERIENCE */}
                                    <div className="field">

                                        <label className="field-label">
                                            Experience Level
                                        </label>

                                        <select
                                            value={
                                                data.experience_level
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "experience_level",
                                                    e.target.value
                                                )
                                            }
                                            className="field-control"
                                        >
                                            <option value="">
                                                Select experience level
                                            </option>
                                            <option value="Junior">
                                                Junior
                                            </option>
                                            <option value="Mid">
                                                Mid Level
                                            </option>
                                            <option value="Senior">
                                                Senior
                                            </option>
                                            <option value="Lead">
                                                Lead
                                            </option>
                                        </select>

                                    </div>

                                </div>
                            </div>

                            {/* POSITION DETAILS */}
                            <div className="form-section">

                                <h3 className="section-title">
                                    <i className="bi bi-geo-alt"></i>
                                    Position Details
                                </h3>

                                <div className="form-grid">

                                    {/* LOCATION */}
                                    <div className="field">

                                        <label className="field-label">
                                            Location
                                        </label>

                                        <input
                                            type="text"
                                            value={data.location}
                                            onChange={(e) =>
                                                setData(
                                                    "location",
                                                    e.target.value
                                                )
                                            }
                                            className="field-control"
                                            placeholder="e.g. Kigali, Rwanda"
                                        />

                                    </div>

                                    {/* SALARY */}
                                    <div className="field">

                                        <label className="field-label">
                                            Salary Range
                                        </label>

                                        <input
                                            type="text"
                                            value={data.salary_range}
                                            onChange={(e) =>
                                                setData(
                                                    "salary_range",
                                                    e.target.value
                                                )
                                            }
                                            className="field-control"
                                            placeholder="e.g. 500,000 - 800,000 RWF"
                                        />

                                    </div>

                                    {/* SKILLS */}
                                    <div className="field field-full">

                                        <label className="field-label">
                                            Required Skills
                                        </label>

                                        <input
                                            type="text"
                                            value={data.skills}
                                            onChange={(e) =>
                                                setData(
                                                    "skills",
                                                    e.target.value
                                                )
                                            }
                                            className="field-control"
                                            placeholder="e.g. Laravel, React, MySQL, Git"
                                        />

                                        <p className="field-hint">
                                            Separate multiple skills
                                            with commas.
                                        </p>

                                    </div>

                                </div>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="form-section">

                                <h3 className="section-title">
                                    <i className="bi bi-text-paragraph"></i>
                                    Job Description
                                </h3>

                                <div className="field">

                                    <label className="field-label">
                                        Description{" "}
                                        <span className="required">
                                            *
                                        </span>
                                    </label>

                                    <div className="description-wrapper">

                                        <textarea
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className={`field-control ${
                                                errors.description
                                                    ? "has-error"
                                                    : ""
                                            }`}
                                            placeholder="Describe the role, responsibilities, expectations and what the successful candidate will be responsible for..."
                                            required
                                        />

                                        <span className="description-counter">
                                            {data.description.length} chars
                                        </span>

                                    </div>

                                    {errors.description && (
                                        <div className="field-error">
                                            {errors.description}
                                        </div>
                                    )}

                                </div>
                            </div>

                        </form>

                        {/* FOOTER */}
                        <div className="form-footer">

                            <div className="footer-note">
                                <i className="bi bi-shield-check"></i>

                                Your job will be published after
                                submission.
                            </div>

                            <div className="footer-actions">

                                <Link
                                    href={route(
                                        "admin.jobs.index"
                                    )}
                                    className="cancel-btn"
                                >
                                    Cancel
                                </Link>

                                <button
                                    type="submit"
                                    form=""
                                    className="publish-btn"
                                    disabled={processing}
                                    onClick={handleSubmit}
                                >
                                    {processing ? (
                                        <>
                                            <span className="loading-spinner"></span>
                                            Publishing...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-check2"></i>
                                            Publish Job
                                        </>
                                    )}
                                </button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
