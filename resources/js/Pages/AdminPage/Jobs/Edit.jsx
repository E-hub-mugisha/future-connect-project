import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Edit({ job }) {
    const { data, setData, put, processing, errors } = useForm({
        title: job.title ?? '',
        type: job.type ?? '',
        experience_level: job.experience_level ?? '',
        location: job.location ?? '',
        salary_range: job.salary_range ?? '',
        skills: job.skills ?? '',
        description: job.description ?? '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        put(route('admin.jobs.update', job.id));
    }

    return (
        <AppLayout>
            <Head title={`Edit Job — ${job.title}`} />

            <div className="edit-job-page">
                <div className="edit-job-container">

                    {/* =====================================================
                        HEADER
                    ====================================================== */}
                    <div className="page-header">
                        <div className="header-left">
                            <div className="eyebrow">
                                <span className="eyebrow-dot"></span>
                                Recruitment
                            </div>

                            <h1>Edit Job</h1>

                            <p className="header-description">
                                Update the information below to keep this job
                                posting accurate and up to date.
                            </p>
                        </div>

                        <Link
                            href={route('admin.jobs.index')}
                            className="back-button"
                        >
                            <i className="bi bi-arrow-left"></i>
                            <span>Back to Jobs</span>
                        </Link>
                    </div>

                    {/* =====================================================
                        JOB SUMMARY
                    ====================================================== */}
                    <div className="job-summary">
                        <div className="summary-icon">
                            <i className="bi bi-briefcase"></i>
                        </div>

                        <div className="summary-content">
                            <span className="summary-label">
                                Currently editing
                            </span>

                            <h2>{job.title}</h2>
                        </div>

                        <div className="summary-status">
                            <span className="status-dot"></span>
                            Job Posting
                        </div>
                    </div>

                    {/* =====================================================
                        FORM CARD
                    ====================================================== */}
                    <div className="form-card">

                        <form onSubmit={handleSubmit}>

                            {/* =================================================
                                BASIC INFORMATION
                            ================================================== */}
                            <div className="form-section">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <i className="bi bi-pencil-square"></i>
                                    </div>

                                    <div>
                                        <h3>Basic Information</h3>
                                        <p>
                                            Update the main information candidates
                                            will see about this position.
                                        </p>
                                    </div>
                                </div>

                                <div className="fields-grid">

                                    {/* Job Title */}
                                    <div className="field full-width">
                                        <label htmlFor="title">
                                            Job Title
                                            <span className="required">*</span>
                                        </label>

                                        <input
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData('title', e.target.value)
                                            }
                                            className={errors.title ? 'input-error' : ''}
                                            placeholder="e.g. Full Stack Developer"
                                            required
                                        />

                                        {errors.title && (
                                            <div className="error-message">
                                                <i className="bi bi-exclamation-circle"></i>
                                                {errors.title}
                                            </div>
                                        )}

                                        <span className="field-hint">
                                            Use a clear and specific title that describes
                                            the position.
                                        </span>
                                    </div>

                                    {/* Job Type */}
                                    <div className="field">
                                        <label htmlFor="type">
                                            Job Type
                                        </label>

                                        <div className="input-wrapper">
                                            <i className="bi bi-clock input-icon"></i>

                                            <select
                                                id="type"
                                                value={data.type}
                                                onChange={(e) =>
                                                    setData('type', e.target.value)
                                                }
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
                                    </div>

                                    {/* Experience */}
                                    <div className="field">
                                        <label htmlFor="experience_level">
                                            Experience Level
                                        </label>

                                        <div className="input-wrapper">
                                            <i className="bi bi-bar-chart input-icon"></i>

                                            <select
                                                id="experience_level"
                                                value={data.experience_level}
                                                onChange={(e) =>
                                                    setData(
                                                        'experience_level',
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select experience level
                                                </option>
                                                <option value="Junior">
                                                    Junior
                                                </option>
                                                <option value="Mid">
                                                    Mid-level
                                                </option>
                                                <option value="Senior">
                                                    Senior
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-divider"></div>

                            {/* =================================================
                                POSITION DETAILS
                            ================================================== */}
                            <div className="form-section">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>

                                    <div>
                                        <h3>Position Details</h3>
                                        <p>
                                            Specify where the position is based and
                                            the compensation information.
                                        </p>
                                    </div>
                                </div>

                                <div className="fields-grid">

                                    {/* Location */}
                                    <div className="field">
                                        <label htmlFor="location">
                                            Location
                                        </label>

                                        <div className="input-wrapper">
                                            <i className="bi bi-geo-alt input-icon"></i>

                                            <input
                                                id="location"
                                                type="text"
                                                value={data.location}
                                                onChange={(e) =>
                                                    setData(
                                                        'location',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g. Kigali, Rwanda"
                                            />
                                        </div>
                                    </div>

                                    {/* Salary */}
                                    <div className="field">
                                        <label htmlFor="salary_range">
                                            Salary Range
                                        </label>

                                        <div className="input-wrapper">
                                            <i className="bi bi-cash-stack input-icon"></i>

                                            <input
                                                id="salary_range"
                                                type="text"
                                                value={data.salary_range}
                                                onChange={(e) =>
                                                    setData(
                                                        'salary_range',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g. 500,000 - 800,000 RWF"
                                            />
                                        </div>

                                        <span className="field-hint">
                                            You can leave this blank if salary is not
                                            publicly disclosed.
                                        </span>
                                    </div>

                                    {/* Skills */}
                                    <div className="field full-width">
                                        <label htmlFor="skills">
                                            Required Skills
                                        </label>

                                        <div className="input-wrapper">
                                            <i className="bi bi-stars input-icon"></i>

                                            <input
                                                id="skills"
                                                type="text"
                                                value={data.skills}
                                                onChange={(e) =>
                                                    setData(
                                                        'skills',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g. Laravel, React, MySQL, Git"
                                            />
                                        </div>

                                        <span className="field-hint">
                                            Separate multiple skills with commas.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="section-divider"></div>

                            {/* =================================================
                                DESCRIPTION
                            ================================================== */}
                            <div className="form-section">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <i className="bi bi-file-text"></i>
                                    </div>

                                    <div>
                                        <h3>Job Description</h3>
                                        <p>
                                            Provide candidates with enough context
                                            to understand the role and expectations.
                                        </p>
                                    </div>
                                </div>

                                <div className="field">
                                    <label htmlFor="description">
                                        Description
                                        <span className="required">*</span>
                                    </label>

                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value
                                            )
                                        }
                                        rows={9}
                                        className={
                                            errors.description
                                                ? 'textarea-error'
                                                : ''
                                        }
                                        placeholder="Describe the role, responsibilities, expectations, qualifications and other important information..."
                                        required
                                    />

                                    <div className="textarea-footer">
                                        <span>
                                            Keep the description clear and easy to
                                            scan.
                                        </span>

                                        <span>
                                            {data.description.length} characters
                                        </span>
                                    </div>

                                    {errors.description && (
                                        <div className="error-message">
                                            <i className="bi bi-exclamation-circle"></i>
                                            {errors.description}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* =================================================
                                FORM FOOTER
                            ================================================== */}
                            <div className="form-footer">
                                <div className="footer-note">
                                    <i className="bi bi-shield-check"></i>

                                    <span>
                                        Your changes will be saved to this job posting.
                                    </span>
                                </div>

                                <div className="footer-actions">
                                    <Link
                                        href={route('admin.jobs.index')}
                                        className="cancel-button"
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        className="save-button"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <span className="button-spinner"></span>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-check2"></i>
                                                Save Changes
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            {/* =============================================================
                PAGE STYLES
            ============================================================== */}
            <style>{`
                .edit-job-page {
                    min-height: 100vh;
                    background: #f5f5f7;
                    color: #1d1d1f;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                    font-size: 13px;
                    padding: 28px 30px 55px;
                }

                .edit-job-container {
                    width: 100%;
                    max-width: 1080px;
                    margin: 0 auto;
                }

                /* ================= HEADER ================= */

                .page-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 25px;
                    margin-bottom: 24px;
                }

                .header-left {
                    min-width: 0;
                }

                .eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 8px;
                    color: #167c52;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                }

                .eyebrow-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #167c52;
                }

                .page-header h1 {
                    margin: 0;
                    font-size: 27px;
                    line-height: 1.15;
                    font-weight: 700;
                    letter-spacing: -.03em;
                    color: #1d1d1f;
                }

                .header-description {
                    margin: 7px 0 0;
                    max-width: 590px;
                    color: #6e6e73;
                    font-size: 12px;
                    line-height: 1.55;
                }

                .back-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    height: 35px;
                    padding: 0 14px;
                    flex-shrink: 0;
                    border: 1px solid #dcdcdf;
                    border-radius: 9px;
                    background: #fff;
                    color: #38383a;
                    font-size: 11px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all .18s ease;
                }

                .back-button:hover {
                    background: #f8f8f8;
                    border-color: #c9c9cc;
                    color: #1d1d1f;
                    transform: translateY(-1px);
                }

                /* ================= JOB SUMMARY ================= */

                .job-summary {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    padding: 15px 17px;
                    margin-bottom: 18px;
                    background: #fff;
                    border: 1px solid #e5e5e7;
                    border-radius: 13px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, .025);
                }

                .summary-icon {
                    width: 39px;
                    height: 39px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border-radius: 10px;
                    background: #edf8f2;
                    color: #167c52;
                    font-size: 15px;
                }

                .summary-content {
                    min-width: 0;
                    flex: 1;
                }

                .summary-label {
                    display: block;
                    margin-bottom: 2px;
                    color: #86868b;
                    font-size: 9px;
                    font-weight: 600;
                    letter-spacing: .03em;
                    text-transform: uppercase;
                }

                .summary-content h2 {
                    margin: 0;
                    overflow: hidden;
                    color: #1d1d1f;
                    font-size: 14px;
                    font-weight: 650;
                    line-height: 1.35;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .summary-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 9px;
                    border-radius: 999px;
                    background: #f3f8f5;
                    color: #167c52;
                    font-size: 9px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #167c52;
                }

                /* ================= FORM CARD ================= */

                .form-card {
                    overflow: hidden;
                    background: #fff;
                    border: 1px solid #e5e5e7;
                    border-radius: 15px;
                    box-shadow: 0 4px 18px rgba(0, 0, 0, .035);
                }

                .form-section {
                    padding: 25px 27px;
                }

                .section-heading {
                    display: flex;
                    align-items: flex-start;
                    gap: 11px;
                    margin-bottom: 22px;
                }

                .section-icon {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border-radius: 8px;
                    background: #f2f7f4;
                    color: #167c52;
                    font-size: 13px;
                }

                .section-heading h3 {
                    margin: 0 0 3px;
                    color: #1d1d1f;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: -.01em;
                }

                .section-heading p {
                    margin: 0;
                    color: #86868b;
                    font-size: 10.5px;
                    line-height: 1.5;
                }

                .fields-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 18px 20px;
                }

                .field {
                    min-width: 0;
                }

                .full-width {
                    grid-column: 1 / -1;
                }

                .field label {
                    display: block;
                    margin: 0 0 7px;
                    color: #3a3a3c;
                    font-size: 10.5px;
                    font-weight: 650;
                }

                .required {
                    margin-left: 3px;
                    color: #c43d3d;
                }

                .field input,
                .field select,
                .field textarea {
                    width: 100%;
                    box-sizing: border-box;
                    border: 1px solid #dedee1;
                    outline: none;
                    background: #fff;
                    color: #1d1d1f;
                    font-family: inherit;
                    font-size: 11.5px;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease,
                        background .15s ease;
                }

                .field input,
                .field select {
                    height: 39px;
                    border-radius: 9px;
                    padding: 0 11px;
                }

                .field textarea {
                    min-height: 190px;
                    resize: vertical;
                    border-radius: 9px;
                    padding: 11px 12px;
                    line-height: 1.6;
                }

                .field input::placeholder,
                .field textarea::placeholder {
                    color: #b0b0b5;
                }

                .field input:focus,
                .field select:focus,
                .field textarea:focus {
                    border-color: #4ca47c;
                    box-shadow: 0 0 0 3px rgba(22, 124, 82, .09);
                }

                .input-wrapper {
                    position: relative;
                }

                .input-wrapper .input-icon {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    z-index: 1;
                    color: #98989d;
                    font-size: 11px;
                    pointer-events: none;
                    transform: translateY(-50%);
                }

                .input-wrapper input,
                .input-wrapper select {
                    padding-left: 31px;
                }

                .input-wrapper select {
                    appearance: auto;
                }

                .field-hint {
                    display: block;
                    margin-top: 6px;
                    color: #9a9a9f;
                    font-size: 9.5px;
                    line-height: 1.4;
                }

                .error-message {
                    display: flex;
                    align-items: flex-start;
                    gap: 5px;
                    margin-top: 6px;
                    color: #c43d3d;
                    font-size: 9.5px;
                    line-height: 1.4;
                }

                .input-error,
                .textarea-error {
                    border-color: #d96a6a !important;
                }

                .input-error:focus,
                .textarea-error:focus {
                    box-shadow: 0 0 0 3px rgba(196, 61, 61, .08) !important;
                }

                .section-divider {
                    height: 1px;
                    margin: 0 27px;
                    background: #ededee;
                }

                /* ================= TEXTAREA ================= */

                .textarea-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    margin-top: 7px;
                    color: #9a9a9f;
                    font-size: 9.5px;
                }

                /* ================= FOOTER ================= */

                .form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 17px 27px;
                    background: #fafafa;
                    border-top: 1px solid #ededee;
                }

                .footer-note {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #86868b;
                    font-size: 9.5px;
                }

                .footer-note i {
                    color: #167c52;
                    font-size: 11px;
                }

                .footer-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .cancel-button,
                .save-button {
                    height: 36px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    padding: 0 15px;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 10.5px;
                    font-weight: 650;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all .18s ease;
                }

                .cancel-button {
                    border: 1px solid #dcdcdf;
                    background: #fff;
                    color: #55555a;
                }

                .cancel-button:hover {
                    background: #f4f4f5;
                    color: #1d1d1f;
                }

                .save-button {
                    border: 1px solid #167c52;
                    background: #167c52;
                    color: #fff;
                    box-shadow: 0 2px 6px rgba(22, 124, 82, .16);
                }

                .save-button:hover:not(:disabled) {
                    background: #116440;
                    border-color: #116440;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 10px rgba(22, 124, 82, .2);
                }

                .save-button:disabled {
                    opacity: .65;
                    cursor: not-allowed;
                    transform: none;
                }

                .button-spinner {
                    width: 11px;
                    height: 11px;
                    border: 1.5px solid rgba(255,255,255,.4);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin .7s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* ================= RESPONSIVE ================= */

                @media (max-width: 760px) {
                    .edit-job-page {
                        padding: 22px 16px 40px;
                    }

                    .page-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .back-button {
                        width: 100%;
                        justify-content: center;
                    }

                    .job-summary {
                        align-items: flex-start;
                    }

                    .summary-status {
                        display: none;
                    }

                    .form-section {
                        padding: 21px 18px;
                    }

                    .fields-grid {
                        grid-template-columns: 1fr;
                        gap: 17px;
                    }

                    .full-width {
                        grid-column: auto;
                    }

                    .section-divider {
                        margin: 0 18px;
                    }

                    .form-footer {
                        align-items: stretch;
                        flex-direction: column;
                        padding: 16px 18px;
                    }

                    .footer-note {
                        justify-content: center;
                    }

                    .footer-actions {
                        width: 100%;
                    }

                    .cancel-button,
                    .save-button {
                        flex: 1;
                    }
                }

                @media (max-width: 450px) {
                    .edit-job-page {
                        padding: 17px 11px 30px;
                    }

                    .page-header h1 {
                        font-size: 23px;
                    }

                    .header-description {
                        font-size: 11px;
                    }

                    .job-summary {
                        padding: 12px;
                    }

                    .form-section {
                        padding: 18px 14px;
                    }

                    .section-heading {
                        margin-bottom: 18px;
                    }

                    .section-divider {
                        margin: 0 14px;
                    }

                    .form-footer {
                        padding: 14px;
                    }

                    .textarea-footer {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 3px;
                    }
                }
            `}</style>
        </AppLayout>
    );
}