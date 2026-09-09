import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function Profile({
    talent,
    categories = [],
    flash = {},
}) {
    const [editOpen, setEditOpen] = useState(false);
    const [passwordOpen, setPasswordOpen] = useState(false);

    const reviews = talent?.feedback ?? [];
    const courses = talent?.courses ?? [];

    const recentReviews = reviews.slice(0, 5);
    const recentCourses = courses.slice(0, 5);

    const averageRating =
        reviews.length > 0
            ? (
                  reviews.reduce(
                      (sum, review) =>
                          sum + Number(review.rating || 0),
                      0
                  ) / reviews.length
              ).toFixed(1)
            : "0.0";

    const profileFields = [
        talent?.name,
        talent?.email,
        talent?.phone,
        talent?.address,
        talent?.language,
        talent?.description,
        talent?.category_id,
        talent?.level,
        talent?.image,
    ];

    const completion = Math.round(
        (profileFields.filter(Boolean).length /
            profileFields.length) *
            100
    );

    return (
        <AppLayout>
            <Head title={`${talent?.name || "Talent"} — Profile`} />

            <div data-h-scope="talent-profile">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

                    [data-h-scope="talent-profile"] {
                        --tp-primary: #48d597;
                        --tp-primary-dark: #2fbc7e;
                        --tp-primary-soft: rgba(72, 213, 151, .12);
                        --tp-primary-soft-2: #edf9f3;
                        --tp-primary-ink: #0f3d2b;

                        --tp-text: #151918;
                        --tp-muted: #6b7470;
                        --tp-light-text: #8a938f;

                        --tp-bg: #f5f7f6;
                        --tp-card: #ffffff;
                        --tp-border: #e5ebe8;

                        background: var(--tp-bg);
                        color: var(--tp-text);
                        min-height: 100vh;
                        font-family: 'Inter', sans-serif;
                    }

                    [data-h-scope="talent-profile"] *,
                    [data-h-scope="talent-profile"] *::before,
                    [data-h-scope="talent-profile"] *::after {
                        box-sizing: border-box;
                    }

                    [data-h-scope="talent-profile"] h1,
                    [data-h-scope="talent-profile"] h2,
                    [data-h-scope="talent-profile"] h3,
                    [data-h-scope="talent-profile"] h4,
                    [data-h-scope="talent-profile"] h5,
                    [data-h-scope="talent-profile"] h6 {
                        font-family: 'Space Grotesk', sans-serif;
                    }

                    .tp-container {
                        max-width: 1250px;
                        margin: 0 auto;
                        padding: 30px 24px 70px;
                    }

                    /* =====================================================
                       HERO
                    ===================================================== */

                    .tp-hero {
                        position: relative;
                        overflow: hidden;
                        margin-bottom: 24px;
                        background:
                            radial-gradient(
                                circle at 95% 10%,
                                rgba(72,213,151,.15),
                                transparent 28%
                            ),
                            linear-gradient(
                                135deg,
                                #ffffff 0%,
                                #f9fcfa 52%,
                                #eef8f3 100%
                            );
                        border: 1px solid #e1e9e5;
                        border-radius: 24px;
                        box-shadow: 0 12px 40px rgba(21, 35, 28, .055);
                    }

                    .tp-hero::before {
                        content: "";
                        position: absolute;
                        width: 240px;
                        height: 240px;
                        border-radius: 50%;
                        right: -90px;
                        bottom: -130px;
                        background: rgba(72,213,151,.07);
                    }

                    .tp-hero-inner {
                        position: relative;
                        z-index: 2;
                        padding: 34px;
                    }

                    .tp-profile-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 28px;
                    }

                    .tp-profile-main {
                        display: flex;
                        align-items: center;
                        gap: 22px;
                        min-width: 0;
                    }

                    .tp-avatar-wrapper {
                        position: relative;
                        flex-shrink: 0;
                    }

                    .tp-avatar {
                        width: 112px;
                        height: 112px;
                        border-radius: 50%;
                        object-fit: cover;
                        display: block;
                        border: 4px solid white;
                        outline: 3px solid var(--tp-primary);
                        background: #edf2ef;
                        box-shadow: 0 10px 25px rgba(20, 45, 34, .12);
                    }

                    .tp-avatar-camera {
                        position: absolute;
                        right: 0;
                        bottom: 2px;
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        background: var(--tp-primary);
                        color: var(--tp-primary-ink);
                        border: 3px solid white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 13px;
                        box-shadow: 0 4px 12px rgba(30, 100, 70, .15);
                    }

                    .tp-name {
                        margin: 0 0 8px;
                        font-size: 32px;
                        line-height: 1.15;
                        font-weight: 800;
                        color: var(--tp-text);
                        letter-spacing: -.03em;
                    }

                    .tp-email {
                        color: #69736e;
                        font-size: 13px;
                        display: flex;
                        align-items: center;
                        gap: 7px;
                    }

                    .tp-email i {
                        color: var(--tp-primary-dark);
                    }

                    .tp-badges {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-top: 14px;
                    }

                    .tp-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 7px 11px;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        line-height: 1;
                    }

                    .tp-badge-primary {
                        background: var(--tp-primary);
                        color: var(--tp-primary-ink);
                    }

                    .tp-badge-soft {
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-ink);
                        border: 1px solid rgba(72,213,151,.15);
                    }

                    .tp-badge-status {
                        background: #f1f5f3;
                        color: #59635e;
                        border: 1px solid #e3e9e6;
                    }

                    .tp-actions {
                        display: flex;
                        gap: 9px;
                        flex-wrap: wrap;
                        flex-shrink: 0;
                    }

                    .tp-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        border: 0;
                        border-radius: 11px;
                        padding: 11px 16px;
                        font-size: 12px;
                        font-weight: 700;
                        text-decoration: none;
                        transition: all .2s ease;
                        cursor: pointer;
                        white-space: nowrap;
                    }

                    .tp-btn-primary {
                        background: var(--tp-primary);
                        color: var(--tp-primary-ink);
                        box-shadow: 0 5px 15px rgba(72,213,151,.16);
                    }

                    .tp-btn-primary:hover {
                        background: var(--tp-primary-dark);
                        color: white;
                        transform: translateY(-1px);
                    }

                    .tp-btn-secondary {
                        background: white;
                        color: #27302c;
                        border: 1px solid #dce4e0;
                    }

                    .tp-btn-secondary:hover {
                        background: #f7faf8;
                        border-color: #cbd7d1;
                        color: #151918;
                    }

                    .tp-hero-description {
                        max-width: 760px;
                        margin: 27px 0 0;
                        color: #69736e;
                        line-height: 1.75;
                        font-size: 13px;
                    }

                    /* =====================================================
                       STATS
                    ===================================================== */

                    .tp-stats {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        margin-top: 30px;
                        padding-top: 22px;
                        border-top: 1px solid #e2e9e5;
                    }

                    .tp-stat {
                        padding: 0 22px;
                        border-right: 1px solid #e2e9e5;
                    }

                    .tp-stat:first-child {
                        padding-left: 0;
                    }

                    .tp-stat:last-child {
                        border-right: 0;
                    }

                    .tp-stat-value {
                        font-family: 'Space Grotesk', sans-serif;
                        font-size: 24px;
                        font-weight: 700;
                        color: #17201c;
                    }

                    .tp-stat-label {
                        margin-top: 4px;
                        color: #89928e;
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: .06em;
                        font-weight: 700;
                    }

                    /* =====================================================
                       MAIN GRID
                    ===================================================== */

                    .tp-grid {
                        display: grid;
                        grid-template-columns: 345px minmax(0, 1fr);
                        gap: 24px;
                    }

                    .tp-card {
                        background: var(--tp-card);
                        border: 1px solid var(--tp-border);
                        border-radius: 18px;
                        overflow: hidden;
                        box-shadow: 0 5px 20px rgba(20,35,28,.025);
                    }

                    .tp-card + .tp-card {
                        margin-top: 20px;
                    }

                    .tp-card-header {
                        padding: 18px 21px;
                        border-bottom: 1px solid var(--tp-border);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 12px;
                    }

                    .tp-card-title {
                        margin: 0;
                        color: #18201c;
                        font-size: 16px;
                        font-weight: 700;
                    }

                    .tp-card-subtitle {
                        color: #8a938f;
                        font-size: 11px;
                        margin-top: 3px;
                    }

                    .tp-card-body {
                        padding: 21px;
                    }

                    .tp-count {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 28px;
                        height: 28px;
                        padding: 0 8px;
                        border-radius: 8px;
                        background: #f1f4f2;
                        color: #626b67;
                        font-size: 11px;
                        font-weight: 700;
                    }

                    /* =====================================================
                       COMPLETION
                    ===================================================== */

                    .tp-completion-top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 9px;
                    }

                    .tp-completion-top strong {
                        font-size: 13px;
                        color: #28312d;
                    }

                    .tp-completion-top span {
                        color: var(--tp-primary-dark);
                        font-size: 12px;
                        font-weight: 800;
                    }

                    .tp-progress {
                        width: 100%;
                        height: 8px;
                        overflow: hidden;
                        border-radius: 999px;
                        background: #edf1ef;
                    }

                    .tp-progress-bar {
                        height: 100%;
                        border-radius: inherit;
                        background: linear-gradient(
                            90deg,
                            #48d597,
                            #68e0aa
                        );
                    }

                    .tp-completion-text {
                        margin: 12px 0 0;
                        color: #7b8580;
                        font-size: 11px;
                        line-height: 1.6;
                    }

                    /* =====================================================
                       CONTACT
                    ===================================================== */

                    .tp-contact {
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                        margin-bottom: 19px;
                    }

                    .tp-contact:last-child {
                        margin-bottom: 0;
                    }

                    .tp-contact-icon {
                        width: 39px;
                        height: 39px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-dark);
                        font-size: 14px;
                    }

                    .tp-section-label {
                        margin-bottom: 4px;
                        color: #929a96;
                        font-size: 9px;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: .07em;
                    }

                    .tp-contact-value {
                        color: #303935;
                        font-size: 12px;
                        font-weight: 600;
                        line-height: 1.5;
                        word-break: break-word;
                    }

                    /* =====================================================
                       SECURITY
                    ===================================================== */

                    .tp-security {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                    }

                    .tp-security-icon {
                        width: 48px;
                        height: 48px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 14px;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-dark);
                        font-size: 18px;
                    }

                    .tp-security-title {
                        color: #252e2a;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    .tp-security-text {
                        margin-top: 3px;
                        color: #8a938f;
                        font-size: 10px;
                        line-height: 1.5;
                    }

                    .tp-security-button {
                        width: 100%;
                        margin-top: 17px;
                        padding: 10px 14px;
                        border: 1px solid #dce4e0;
                        border-radius: 10px;
                        background: white;
                        color: #303834;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: .2s;
                    }

                    .tp-security-button:hover {
                        background: #f7faf8;
                        border-color: #cbd7d1;
                    }

                    /* =====================================================
                       REVIEWS
                    ===================================================== */

                    .tp-rating-summary {
                        display: flex;
                        align-items: center;
                        gap: 14px;
                        padding: 15px;
                        margin-bottom: 20px;
                        border-radius: 13px;
                        background: #f8faf9;
                        border: 1px solid #edf1ef;
                    }

                    .tp-rating-number {
                        font-family: 'Space Grotesk', sans-serif;
                        font-size: 30px;
                        font-weight: 700;
                        line-height: 1;
                        color: #1c2521;
                    }

                    .tp-rating-stars {
                        color: #f3b63f;
                        font-size: 14px;
                        letter-spacing: 1px;
                    }

                    .tp-rating-text {
                        margin-top: 3px;
                        color: #8a938f;
                        font-size: 10px;
                    }

                    .tp-review {
                        display: flex;
                        gap: 13px;
                        padding: 17px 0;
                        border-bottom: 1px solid var(--tp-border);
                    }

                    .tp-review:first-child {
                        padding-top: 0;
                    }

                    .tp-review:last-child {
                        padding-bottom: 0;
                        border-bottom: 0;
                    }

                    .tp-review-avatar {
                        width: 42px;
                        height: 42px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-ink);
                        font-size: 11px;
                        font-weight: 800;
                    }

                    .tp-review-content {
                        flex: 1;
                        min-width: 0;
                    }

                    .tp-review-top {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 12px;
                    }

                    .tp-review-name {
                        color: #252d29;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    .tp-stars {
                        color: #f3b63f;
                        font-size: 11px;
                        white-space: nowrap;
                    }

                    .tp-review-comment {
                        margin: 7px 0 5px;
                        color: #68726d;
                        font-size: 11px;
                        line-height: 1.65;
                    }

                    .tp-review-date {
                        color: #a0a7a4;
                        font-size: 9px;
                    }

                    /* =====================================================
                       COURSES
                    ===================================================== */

                    .tp-table-wrapper {
                        overflow-x: auto;
                    }

                    .tp-table {
                        width: 100%;
                        border-collapse: collapse;
                    }

                    .tp-table th {
                        padding: 12px 14px;
                        background: #f8faf9;
                        border-bottom: 1px solid var(--tp-border);
                        color: #858e8a;
                        text-align: left;
                        font-size: 9px;
                        text-transform: uppercase;
                        letter-spacing: .07em;
                        font-weight: 800;
                    }

                    .tp-table td {
                        padding: 15px 14px;
                        border-bottom: 1px solid var(--tp-border);
                        color: #444d49;
                        font-size: 11px;
                        vertical-align: middle;
                    }

                    .tp-table tbody tr:last-child td {
                        border-bottom: 0;
                    }

                    .tp-table tbody tr {
                        transition: background .15s ease;
                    }

                    .tp-table tbody tr:hover {
                        background: #fbfcfb;
                    }

                    .tp-course-title {
                        color: #252e2a;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    .tp-course-description {
                        max-width: 390px;
                        overflow: hidden;
                        color: #7c8581;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    .tp-course-category {
                        display: inline-flex;
                        padding: 5px 9px;
                        border-radius: 7px;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-ink);
                        font-size: 9px;
                        font-weight: 800;
                    }

                    /* =====================================================
                       EMPTY
                    ===================================================== */

                    .tp-empty {
                        padding: 45px 20px;
                        text-align: center;
                        color: var(--tp-muted);
                    }

                    .tp-empty-icon {
                        width: 50px;
                        height: 50px;
                        margin: 0 auto 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 15px;
                        background: #f1f4f2;
                        color: #9aa39e;
                        font-size: 17px;
                    }

                    .tp-empty-text {
                        color: #7c8581;
                        font-size: 11px;
                    }

                    /* =====================================================
                       MODALS
                    ===================================================== */

                    .tp-modal-backdrop {
                        position: fixed;
                        inset: 0;
                        z-index: 1050;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                        background: rgba(12,18,15,.55);
                        backdrop-filter: blur(6px);
                    }

                    .tp-modal {
                        width: 100%;
                        max-width: 780px;
                        max-height: 90vh;
                        overflow-y: auto;
                        background: white;
                        border-radius: 20px;
                        box-shadow: 0 30px 80px rgba(0,0,0,.25);
                    }

                    .tp-modal-sm {
                        max-width: 500px;
                    }

                    .tp-modal-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        padding: 20px 23px;
                        border-bottom: 1px solid var(--tp-border);
                    }

                    .tp-modal-title {
                        margin: 0;
                        color: #1c2420;
                        font-size: 18px;
                        font-weight: 700;
                    }

                    .tp-modal-close {
                        width: 34px;
                        height: 34px;
                        border: 0;
                        border-radius: 9px;
                        background: #f1f4f2;
                        color: #69736e;
                        cursor: pointer;
                        transition: .2s;
                    }

                    .tp-modal-close:hover {
                        background: #e7ece9;
                        color: #252d29;
                    }

                    .tp-modal-body {
                        padding: 23px;
                    }

                    /* =====================================================
                       FORM
                    ===================================================== */

                    .tp-form-label {
                        display: block;
                        margin-bottom: 7px;
                        color: #333c38;
                        font-size: 11px;
                        font-weight: 800;
                    }

                    .tp-form-control {
                        width: 100%;
                        min-height: 42px;
                        padding: 10px 12px;
                        border: 1px solid #dfe5e2;
                        border-radius: 10px;
                        outline: none;
                        background: white;
                        color: #303834;
                        font-family: 'Inter', sans-serif;
                        font-size: 12px;
                        transition: .2s;
                    }

                    .tp-form-control::placeholder {
                        color: #a2aaa6;
                    }

                    .tp-form-control:focus {
                        border-color: var(--tp-primary);
                        box-shadow: 0 0 0 3px rgba(72,213,151,.12);
                    }

                    textarea.tp-form-control {
                        resize: vertical;
                    }

                    .tp-form-control.is-invalid {
                        border-color: #dc3545;
                    }

                    .tp-error {
                        margin-top: 5px;
                        color: #dc3545;
                        font-size: 10px;
                    }

                    .tp-photo-editor {
                        display: flex;
                        align-items: center;
                        gap: 17px;
                        margin-bottom: 23px;
                        padding: 15px;
                        border: 1px solid var(--tp-border);
                        border-radius: 14px;
                        background: #f8faf9;
                    }

                    .tp-photo-preview {
                        width: 82px;
                        height: 82px;
                        flex-shrink: 0;
                        border-radius: 50%;
                        object-fit: cover;
                        border: 3px solid white;
                        outline: 2px solid var(--tp-primary);
                    }

                    .tp-upload-note {
                        margin-top: 5px;
                        color: #929b97;
                        font-size: 9px;
                    }

                    .tp-modal-footer {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        gap: 8px;
                        margin-top: 22px;
                        padding-top: 17px;
                        border-top: 1px solid var(--tp-border);
                    }

                    .tp-cancel-btn {
                        border: 1px solid #dfe5e2;
                        border-radius: 10px;
                        background: white;
                        color: #59625e;
                        padding: 10px 15px;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .tp-cancel-btn:hover {
                        background: #f7f9f8;
                    }

                    .tp-password-intro {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        margin-bottom: 22px;
                        padding: 14px;
                        border: 1px solid #e7ece9;
                        border-radius: 13px;
                        background: #f7faf8;
                    }

                    .tp-password-intro-icon {
                        width: 43px;
                        height: 43px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 12px;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-dark);
                    }

                    .tp-password-intro-title {
                        color: #2b342f;
                        font-size: 11px;
                        font-weight: 800;
                    }

                    .tp-password-intro-text {
                        margin: 3px 0 0;
                        color: #89928e;
                        font-size: 9px;
                        line-height: 1.5;
                    }

                    /* =====================================================
                       ALERT
                    ===================================================== */

                    .tp-success-alert {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        padding: 12px 15px;
                        margin-bottom: 20px;
                        border: 1px solid #cdeede;
                        border-radius: 12px;
                        background: #effaf4;
                        color: #17643f;
                        font-size: 12px;
                        font-weight: 600;
                    }

                    /* =====================================================
                       RESPONSIVE
                    ===================================================== */

                    @media (max-width: 1100px) {
                        .tp-grid {
                            grid-template-columns: 300px minmax(0, 1fr);
                        }

                        .tp-name {
                            font-size: 28px;
                        }
                    }

                    @media (max-width: 992px) {
                        .tp-grid {
                            grid-template-columns: 1fr;
                        }

                        .tp-profile-row {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        .tp-actions {
                            width: 100%;
                        }
                    }

                    @media (max-width: 700px) {
                        .tp-container {
                            padding: 17px 13px 45px;
                        }

                        .tp-hero-inner {
                            padding: 22px;
                        }

                        .tp-profile-main {
                            width: 100%;
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        .tp-avatar {
                            width: 94px;
                            height: 94px;
                        }

                        .tp-name {
                            font-size: 25px;
                        }

                        .tp-actions {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                        }

                        .tp-actions .tp-btn {
                            width: 100%;
                        }

                        .tp-stats {
                            grid-template-columns: repeat(2, 1fr);
                            gap: 20px 0;
                        }

                        .tp-stat {
                            padding: 0 15px;
                            border-right: 0;
                        }

                        .tp-stat:nth-child(odd) {
                            padding-left: 0;
                        }

                        .tp-stat:nth-child(even) {
                            border-left: 1px solid #e2e9e5;
                        }

                        .tp-table {
                            min-width: 650px;
                        }

                        .tp-photo-editor {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        .tp-modal-backdrop {
                            padding: 10px;
                        }

                        .tp-modal {
                            max-height: 94vh;
                            border-radius: 16px;
                        }
                    }

                    @media (max-width: 480px) {
                        .tp-actions {
                            grid-template-columns: 1fr;
                        }

                        .tp-profile-main {
                            gap: 16px;
                        }

                        .tp-stats {
                            gap: 17px 0;
                        }

                        .tp-stat-value {
                            font-size: 21px;
                        }

                        .tp-card-body {
                            padding: 17px;
                        }

                        .tp-modal-body {
                            padding: 18px;
                        }
                    }
                `}</style>

                <div className="tp-container">

                    {/* =====================================================
                        SUCCESS MESSAGE
                    ===================================================== */}

                    {flash?.success && (
                        <div className="tp-success-alert">
                            <i className="fas fa-circle-check"></i>
                            <span>{flash.success}</span>
                        </div>
                    )}

                    {/* =====================================================
                        HERO
                    ===================================================== */}

                    <div className="tp-hero">
                        <div className="tp-hero-inner">

                            <div className="tp-profile-row">

                                <div className="tp-profile-main">

                                    <div className="tp-avatar-wrapper">
                                        <img
                                            src={
                                                talent?.image
                                                    ? `/${talent.image}`
                                                    : "/img/faces/face10.jpg"
                                            }
                                            alt={talent?.name || "Profile"}
                                            className="tp-avatar"
                                        />

                                        <div className="tp-avatar-camera">
                                            <i className="fas fa-camera"></i>
                                        </div>
                                    </div>

                                    <div>

                                        <h1 className="tp-name">
                                            {talent?.name || "Unnamed Talent"}
                                        </h1>

                                        <div className="tp-email">
                                            <i className="fas fa-envelope"></i>
                                            <span>
                                                {talent?.email ||
                                                    "Email not provided"}
                                            </span>
                                        </div>

                                        <div className="tp-badges">

                                            {talent?.category?.name && (
                                                <span className="tp-badge tp-badge-primary">
                                                    <i className="fas fa-layer-group"></i>
                                                    {talent.category.name}
                                                </span>
                                            )}

                                            {talent?.level && (
                                                <span className="tp-badge tp-badge-soft">
                                                    <i className="fas fa-chart-line"></i>
                                                    {capitalize(
                                                        talent.level
                                                    )}
                                                </span>
                                            )}

                                            {talent?.status && (
                                                <span className="tp-badge tp-badge-status">
                                                    <i className="fas fa-circle-check"></i>
                                                    {capitalize(
                                                        talent.status
                                                    )}
                                                </span>
                                            )}

                                        </div>
                                    </div>
                                </div>

                                <div className="tp-actions">

                                    <Link
                                        href={route(
                                            "talent.page.stories.index"
                                        )}
                                        className="tp-btn tp-btn-secondary"
                                    >
                                        <i className="fas fa-book-open"></i>
                                        My Story
                                    </Link>

                                    <button
                                        type="button"
                                        className="tp-btn tp-btn-primary"
                                        onClick={() =>
                                            setEditOpen(true)
                                        }
                                    >
                                        <i className="fas fa-pen"></i>
                                        Edit Profile
                                    </button>

                                </div>

                            </div>

                            {talent?.description && (
                                <p className="tp-hero-description">
                                    {talent.description}
                                </p>
                            )}

                            {/* =================================================
                                STATS
                            ================================================= */}

                            <div className="tp-stats">

                                <div className="tp-stat">
                                    <div className="tp-stat-value">
                                        {reviews.length}
                                    </div>

                                    <div className="tp-stat-label">
                                        Reviews
                                    </div>
                                </div>

                                <div className="tp-stat">
                                    <div className="tp-stat-value">
                                        {averageRating}
                                    </div>

                                    <div className="tp-stat-label">
                                        Average Rating
                                    </div>
                                </div>

                                <div className="tp-stat">
                                    <div className="tp-stat-value">
                                        {courses.length}
                                    </div>

                                    <div className="tp-stat-label">
                                        Courses
                                    </div>
                                </div>

                                <div className="tp-stat">
                                    <div className="tp-stat-value">
                                        {completion}%
                                    </div>

                                    <div className="tp-stat-label">
                                        Profile Complete
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* =====================================================
                        MAIN CONTENT
                    ===================================================== */}

                    <div className="tp-grid">

                        {/* =================================================
                            LEFT SIDEBAR
                        ================================================= */}

                        <div>

                            {/* Profile completion */}

                            <div className="tp-card">

                                <div className="tp-card-body">

                                    <div className="tp-completion-top">
                                        <strong>
                                            Profile completion
                                        </strong>

                                        <span>
                                            {completion}%
                                        </span>
                                    </div>

                                    <div className="tp-progress">
                                        <div
                                            className="tp-progress-bar"
                                            style={{
                                                width: `${completion}%`,
                                            }}
                                        />
                                    </div>

                                    <p className="tp-completion-text">
                                        A complete profile helps clients
                                        understand your expertise and
                                        improves your visibility.
                                    </p>

                                </div>
                            </div>

                            {/* Contact information */}

                            <div className="tp-card">

                                <div className="tp-card-header">
                                    <h2 className="tp-card-title">
                                        Contact Information
                                    </h2>
                                </div>

                                <div className="tp-card-body">

                                    <ContactRow
                                        icon="fa-phone"
                                        label="Phone"
                                        value={talent?.phone}
                                    />

                                    <ContactRow
                                        icon="fa-envelope"
                                        label="Email"
                                        value={talent?.email}
                                    />

                                    <ContactRow
                                        icon="fa-location-dot"
                                        label="Address"
                                        value={talent?.address}
                                    />

                                    <ContactRow
                                        icon="fa-language"
                                        label="Language"
                                        value={talent?.language}
                                    />

                                </div>
                            </div>

                            {/* Security */}

                            <div className="tp-card">

                                <div className="tp-card-header">
                                    <h2 className="tp-card-title">
                                        Account Security
                                    </h2>
                                </div>

                                <div className="tp-card-body">

                                    <div className="tp-security">

                                        <div className="tp-security-icon">
                                            <i className="fas fa-shield-halved"></i>
                                        </div>

                                        <div>
                                            <div className="tp-security-title">
                                                Password protected
                                            </div>

                                            <div className="tp-security-text">
                                                Keep your account secure with
                                                a strong password.
                                            </div>
                                        </div>

                                    </div>

                                    <button
                                        type="button"
                                        className="tp-security-button"
                                        onClick={() =>
                                            setPasswordOpen(true)
                                        }
                                    >
                                        <i className="fas fa-key me-2"></i>
                                        Change Password
                                    </button>

                                </div>
                            </div>

                        </div>

                        {/* =================================================
                            RIGHT CONTENT
                        ================================================= */}

                        <div>

                            {/* Reviews */}

                            <div className="tp-card">

                                <div className="tp-card-header">

                                    <div>
                                        <h2 className="tp-card-title">
                                            Client Reviews
                                        </h2>

                                        <div className="tp-card-subtitle">
                                            Feedback from your clients
                                        </div>
                                    </div>

                                    <span className="tp-count">
                                        {reviews.length}
                                    </span>

                                </div>

                                <div className="tp-card-body">

                                    {reviews.length > 0 && (
                                        <div className="tp-rating-summary">

                                            <div className="tp-rating-number">
                                                {averageRating}
                                            </div>

                                            <div>
                                                <div className="tp-rating-stars">
                                                    {renderStars(
                                                        Number(
                                                            averageRating
                                                        )
                                                    )}
                                                </div>

                                                <div className="tp-rating-text">
                                                    Based on{" "}
                                                    {reviews.length}{" "}
                                                    {reviews.length === 1
                                                        ? "review"
                                                        : "reviews"}
                                                </div>
                                            </div>

                                        </div>
                                    )}

                                    {recentReviews.length === 0 ? (
                                        <EmptyState
                                            icon="fa-comment-slash"
                                            text="You don't have any reviews yet."
                                        />
                                    ) : (
                                        recentReviews.map((review) => (
                                            <ReviewCard
                                                key={review.id}
                                                review={review}
                                            />
                                        ))
                                    )}

                                </div>
                            </div>

                            {/* Courses */}

                            <div className="tp-card">

                                <div className="tp-card-header">

                                    <div>
                                        <h2 className="tp-card-title">
                                            My Courses
                                        </h2>

                                        <div className="tp-card-subtitle">
                                            Courses and professional
                                            training
                                        </div>
                                    </div>

                                    <span className="tp-count">
                                        {courses.length}
                                    </span>

                                </div>

                                {recentCourses.length === 0 ? (
                                    <EmptyState
                                        icon="fa-book-open"
                                        text="No courses available yet."
                                    />
                                ) : (
                                    <div className="tp-table-wrapper">

                                        <table className="tp-table">

                                            <thead>
                                                <tr>
                                                    <th>
                                                        Course
                                                    </th>

                                                    <th>
                                                        Category
                                                    </th>

                                                    <th>
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                {recentCourses.map(
                                                    (course) => (
                                                        <tr
                                                            key={
                                                                course.id
                                                            }
                                                        >

                                                            <td>
                                                                <div className="tp-course-title">
                                                                    {
                                                                        course.title
                                                                    }
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <span className="tp-course-category">
                                                                    {course
                                                                        .category
                                                                        ?.name ||
                                                                        "General"}
                                                                </span>
                                                            </td>

                                                            <td>
                                                                <div className="tp-course-description">
                                                                    {course.description ||
                                                                        "No description"}
                                                                </div>
                                                            </td>

                                                        </tr>
                                                    )
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                </div>

                {/* =========================================================
                    EDIT PROFILE MODAL
                ========================================================= */}

                <Modal
                    show={editOpen}
                    onClose={() => setEditOpen(false)}
                    title="Edit Profile"
                >
                    <EditProfileForm
                        talent={talent}
                        categories={categories}
                        onSaved={() => setEditOpen(false)}
                    />
                </Modal>

                {/* =========================================================
                    CHANGE PASSWORD MODAL
                ========================================================= */}

                <Modal
                    show={passwordOpen}
                    onClose={() => setPasswordOpen(false)}
                    title="Change Password"
                    small
                >
                    <ChangePasswordForm
                        onSaved={() => setPasswordOpen(false)}
                    />
                </Modal>

            </div>
        </AppLayout>
    );
}

/* =============================================================
   CONTACT ROW
============================================================= */

function ContactRow({
    icon,
    label,
    value,
}) {
    return (
        <div className="tp-contact">

            <div className="tp-contact-icon">
                <i className={`fas ${icon}`}></i>
            </div>

            <div>
                <div className="tp-section-label">
                    {label}
                </div>

                <div className="tp-contact-value">
                    {value || "Not provided"}
                </div>
            </div>

        </div>
    );
}

/* =============================================================
   REVIEW CARD
============================================================= */

function ReviewCard({ review }) {
    const rating = Math.max(
        0,
        Math.min(5, Number(review?.rating || 0))
    );

    const reviewerName =
        review?.reviewer_name || "Anonymous";

    const initials = reviewerName
        .split(" ")
        .filter(Boolean)
        .map((word) => word.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className="tp-review">

            <div className="tp-review-avatar">
                {initials || "AN"}
            </div>

            <div className="tp-review-content">

                <div className="tp-review-top">

                    <div className="tp-review-name">
                        {reviewerName}
                    </div>

                    <div className="tp-stars">
                        {renderStars(rating)}
                    </div>

                </div>

                <div className="tp-review-comment">
                    {review?.comment ||
                        "No comment provided."}
                </div>

                <div className="tp-review-date">
                    {review?.created_at_human || ""}
                </div>

            </div>
        </div>
    );
}

/* =============================================================
   EMPTY STATE
============================================================= */

function EmptyState({
    icon,
    text,
}) {
    return (
        <div className="tp-empty">

            <div className="tp-empty-icon">
                <i className={`fas ${icon}`}></i>
            </div>

            <div className="tp-empty-text">
                {text}
            </div>

        </div>
    );
}

/* =============================================================
   MODAL
============================================================= */

function Modal({
    show,
    onClose,
    title,
    children,
    small = false,
}) {
    useEffect(() => {
        if (!show) return;

        const originalOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.body.style.overflow =
                originalOverflow;

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [show, onClose]);

    if (!show) {
        return null;
    }

    return (
        <div
            className="tp-modal-backdrop"
            onClick={onClose}
        >
            <div
                className={`tp-modal ${
                    small ? "tp-modal-sm" : ""
                }`}
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                <div className="tp-modal-header">

                    <h2 className="tp-modal-title">
                        {title}
                    </h2>

                    <button
                        type="button"
                        className="tp-modal-close"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <i className="fas fa-xmark"></i>
                    </button>

                </div>

                <div className="tp-modal-body">
                    {children}
                </div>

            </div>
        </div>
    );
}

/* =============================================================
   EDIT PROFILE FORM
============================================================= */

function EditProfileForm({
    talent,
    categories = [],
    onSaved,
}) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        progress,
    } = useForm({
        _method: "put",
        name: talent?.name ?? "",
        level: talent?.level ?? "",
        description: talent?.description ?? "",
        address: talent?.address ?? "",
        phone: talent?.phone ?? "",
        email: talent?.email ?? "",
        language: talent?.language ?? "",
        category_id: talent?.category_id ?? "",
        image: null,
    });

    const [preview, setPreview] =
        useState(
            talent?.image
                ? `/${talent.image}`
                : "/img/faces/face10.jpg"
        );

    function handleImageChange(event) {
        const file =
            event.target.files?.[0];

        if (!file) {
            return;
        }

        setData("image", file);

        const objectUrl =
            URL.createObjectURL(file);

        setPreview(objectUrl);
    }

    useEffect(() => {
        return () => {
            if (
                preview &&
                preview.startsWith("blob:")
            ) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    function submit(event) {
        event.preventDefault();

        post(
            route(
                "talent.profile.update",
                talent.id
            ),
            {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    onSaved();
                },
            }
        );
    }

    return (
        <form onSubmit={submit}>

            {/* =================================================
                PHOTO
            ================================================= */}

            <div className="tp-photo-editor">

                <img
                    src={preview}
                    alt="Profile preview"
                    className="tp-photo-preview"
                />

                <div className="flex-grow-1">

                    <label className="tp-form-label">
                        Profile Photo
                    </label>

                    <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        className={`tp-form-control ${
                            errors.image
                                ? "is-invalid"
                                : ""
                        }`}
                        onChange={
                            handleImageChange
                        }
                    />

                    <div className="tp-upload-note">
                        JPG, PNG or WEBP. Maximum
                        file size: 2MB.
                    </div>

                    {errors.image && (
                        <div className="tp-error">
                            {errors.image}
                        </div>
                    )}

                    {progress && (
                        <div
                            className="progress mt-2"
                            style={{
                                height: 5,
                                borderRadius: 10,
                            }}
                        >
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${progress.percentage}%`,
                                    background:
                                        "#48d597",
                                }}
                            />
                        </div>
                    )}

                </div>
            </div>

            {/* =================================================
                FORM FIELDS
            ================================================= */}

            <div className="row g-3">

                <FormField
                    label="Full Name"
                    value={data.name}
                    error={errors.name}
                    col="col-md-6"
                    onChange={(value) =>
                        setData(
                            "name",
                            value
                        )
                    }
                />

                <FormField
                    label="Email"
                    type="email"
                    value={data.email}
                    error={errors.email}
                    col="col-md-6"
                    onChange={(value) =>
                        setData(
                            "email",
                            value
                        )
                    }
                />

                <FormField
                    label="Phone"
                    value={data.phone}
                    error={errors.phone}
                    col="col-md-6"
                    onChange={(value) =>
                        setData(
                            "phone",
                            value
                        )
                    }
                />

                <FormField
                    label="Address"
                    value={data.address}
                    error={errors.address}
                    col="col-md-6"
                    onChange={(value) =>
                        setData(
                            "address",
                            value
                        )
                    }
                />

                <FormField
                    label="Language"
                    value={data.language}
                    error={errors.language}
                    col="col-md-6"
                    placeholder="e.g. English, French"
                    onChange={(value) =>
                        setData(
                            "language",
                            value
                        )
                    }
                />

                {/* Category */}

                <div className="col-md-6">

                    <label className="tp-form-label">
                        Professional Category
                    </label>

                    <select
                        className={`tp-form-control ${
                            errors.category_id
                                ? "is-invalid"
                                : ""
                        }`}
                        value={
                            data.category_id
                        }
                        onChange={(event) =>
                            setData(
                                "category_id",
                                event.target.value
                            )
                        }
                    >

                        <option value="">
                            Select category
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
                                    {
                                        category.name
                                    }
                                </option>
                            )
                        )}

                    </select>

                    {errors.category_id && (
                        <div className="tp-error">
                            {
                                errors.category_id
                            }
                        </div>
                    )}

                </div>

                {/* Professional Level */}

                <div className="col-md-6">

                    <label className="tp-form-label">
                        Professional Level
                    </label>

                    <select
                        className={`tp-form-control ${
                            errors.level
                                ? "is-invalid"
                                : ""
                        }`}
                        value={
                            data.level
                        }
                        onChange={(event) =>
                            setData(
                                "level",
                                event.target.value
                            )
                        }
                    >

                        <option value="">
                            Select level
                        </option>

                        <option value="beginner">
                            Beginner
                        </option>

                        <option value="intermediate">
                            Intermediate
                        </option>

                        <option value="advanced">
                            Advanced
                        </option>

                        <option value="expert">
                            Expert
                        </option>

                        <option value="senior">
                            Senior
                        </option>

                    </select>

                    {errors.level && (
                        <div className="tp-error">
                            {errors.level}
                        </div>
                    )}

                </div>

                {/* Description */}

                <div className="col-12">

                    <label className="tp-form-label">
                        Professional Description
                    </label>

                    <textarea
                        rows="5"
                        className={`tp-form-control ${
                            errors.description
                                ? "is-invalid"
                                : ""
                        }`}
                        value={
                            data.description
                        }
                        onChange={(event) =>
                            setData(
                                "description",
                                event.target.value
                            )
                        }
                        placeholder="Tell clients about your experience, expertise and services..."
                    />

                    {errors.description && (
                        <div className="tp-error">
                            {
                                errors.description
                            }
                        </div>
                    )}

                </div>

            </div>

            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="tp-modal-footer">

                <button
                    type="button"
                    className="tp-cancel-btn"
                    onClick={onSaved}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="tp-btn tp-btn-primary"
                    disabled={processing}
                >

                    {processing ? (
                        <>
                            <span className="spinner-border spinner-border-sm" />
                            Saving...
                        </>
                    ) : (
                        <>
                            <i className="fas fa-check"></i>
                            Save Changes
                        </>
                    )}

                </button>

            </div>

        </form>
    );
}

/* =============================================================
   CHANGE PASSWORD FORM
============================================================= */

function ChangePasswordForm({
    onSaved,
}) {
    const {
        data,
        setData,
        put,
        processing,
        errors,
        reset,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    function submit(event) {
        event.preventDefault();

        put(
            route(
                "talent.password.update"
            ),
            {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    onSaved();
                },
            }
        );
    }

    return (
        <form onSubmit={submit}>

            {/* Intro */}

            <div className="tp-password-intro">

                <div className="tp-password-intro-icon">
                    <i className="fas fa-shield-halved"></i>
                </div>

                <div>

                    <div className="tp-password-intro-title">
                        Secure your account
                    </div>

                    <p className="tp-password-intro-text">
                        Choose a strong password
                        that you don't use on
                        other websites.
                    </p>

                </div>

            </div>

            <PasswordField
                label="Current Password"
                value={
                    data.current_password
                }
                error={
                    errors.current_password
                }
                onChange={(value) =>
                    setData(
                        "current_password",
                        value
                    )
                }
            />

            <PasswordField
                label="New Password"
                value={
                    data.password
                }
                error={
                    errors.password
                }
                onChange={(value) =>
                    setData(
                        "password",
                        value
                    )
                }
            />

            <PasswordField
                label="Confirm New Password"
                value={
                    data.password_confirmation
                }
                error={
                    errors.password_confirmation
                }
                onChange={(value) =>
                    setData(
                        "password_confirmation",
                        value
                    )
                }
            />

            <div className="tp-modal-footer">

                <button
                    type="button"
                    className="tp-cancel-btn"
                    onClick={onSaved}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="tp-btn tp-btn-primary"
                    disabled={processing}
                >

                    {processing ? (
                        <>
                            <span className="spinner-border spinner-border-sm" />
                            Updating...
                        </>
                    ) : (
                        <>
                            <i className="fas fa-key"></i>
                            Update Password
                        </>
                    )}

                </button>

            </div>

        </form>
    );
}

/* =============================================================
   FORM FIELD
============================================================= */

function FormField({
    label,
    value,
    onChange,
    error,
    col = "col-12",
    type = "text",
    placeholder = "",
}) {
    return (
        <div className={col}>

            <label className="tp-form-label">
                {label}
            </label>

            <input
                type={type}
                value={value ?? ""}
                placeholder={placeholder}
                className={`tp-form-control ${
                    error
                        ? "is-invalid"
                        : ""
                }`}
                onChange={(event) =>
                    onChange(
                        event.target.value
                    )
                }
            />

            {error && (
                <div className="tp-error">
                    {error}
                </div>
            )}

        </div>
    );
}

/* =============================================================
   PASSWORD FIELD
============================================================= */

function PasswordField({
    label,
    value,
    onChange,
    error,
}) {
    const [show, setShow] =
        useState(false);

    return (
        <div className="mb-3">

            <label className="tp-form-label">
                {label}
            </label>

            <div className="position-relative">

                <input
                    type={
                        show
                            ? "text"
                            : "password"
                    }
                    value={value ?? ""}
                    className={`tp-form-control pe-5 ${
                        error
                            ? "is-invalid"
                            : ""
                    }`}
                    onChange={(event) =>
                        onChange(
                            event.target.value
                        )
                    }
                />

                <button
                    type="button"
                    className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent me-2"
                    onClick={() =>
                        setShow(!show)
                    }
                    style={{
                        color: "#727b77",
                        cursor: "pointer",
                    }}
                    aria-label={
                        show
                            ? "Hide password"
                            : "Show password"
                    }
                >
                    <i
                        className={`fas ${
                            show
                                ? "fa-eye-slash"
                                : "fa-eye"
                        }`}
                    ></i>
                </button>

            </div>

            {error && (
                <div className="tp-error">
                    {error}
                </div>
            )}

        </div>
    );
}

/* =============================================================
   STAR RENDERER
============================================================= */

function renderStars(rating) {
    const rounded =
        Math.round(
            Number(rating || 0)
        );

    const safeRating = Math.max(
        0,
        Math.min(5, rounded)
    );

    return (
        <>
            {Array.from(
                { length: 5 },
                (_, index) => (
                    <i
                        key={index}
                        className={`${
                            index <
                            safeRating
                                ? "fas"
                                : "far"
                        } fa-star`}
                        style={{
                            marginRight:
                                2,
                        }}
                    ></i>
                )
            )}
        </>
    );
}

/* =============================================================
   HELPER
============================================================= */

function capitalize(value) {
    if (!value) {
        return "";
    }

    return (
        value.charAt(0).toUpperCase() +
        value.slice(1)
    );
}