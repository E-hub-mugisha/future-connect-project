// resources/js/Pages/Talent/Story/Create.jsx

import { Head, Link, useForm } from "@inertiajs/react";
import { useMemo, useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function Create({ talent, categories = [] }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        title: "",
        content: "",
        category_id: "",
        tags: "",
        status: "published",
        thumbnail: null,
        media: null,
    });

    const [thumbPreview, setThumbPreview] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | TAGS
    |--------------------------------------------------------------------------
    */

    const tags = useMemo(() => {
        if (!data.tags) return [];

        if (Array.isArray(data.tags)) {
            return data.tags
                .map((tag) => String(tag).trim())
                .filter(Boolean);
        }

        return String(data.tags)
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean);
    }, [data.tags]);

    /*
    |--------------------------------------------------------------------------
    | SELECTED CATEGORY
    |--------------------------------------------------------------------------
    */

    const selectedCategory = useMemo(() => {
        return categories.find(
            (category) =>
                String(category.id) === String(data.category_id)
        );
    }, [categories, data.category_id]);

    /*
    |--------------------------------------------------------------------------
    | THUMBNAIL
    |--------------------------------------------------------------------------
    */

    const handleThumbnail = (file) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            return;
        }

        setData("thumbnail", file);

        const preview = URL.createObjectURL(file);
        setThumbPreview(preview);
    };

    const handleThumbnailInput = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            handleThumbnail(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        const file = e.dataTransfer.files?.[0];

        if (file) {
            handleThumbnail(file);
        }
    };

    const removeThumbnail = () => {
        setThumbPreview(null);
        setData("thumbnail", null);
    };

    /*
    |--------------------------------------------------------------------------
    | MEDIA
    |--------------------------------------------------------------------------
    */

    const handleMedia = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setData("media", file);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | SUBMIT
    |--------------------------------------------------------------------------
    */

    const submit = (e) => {
        e.preventDefault();

        post(route("talent.page.stories.store"), {
            forceFormData: true,
        });
    };

    /*
    |--------------------------------------------------------------------------
    | AUTHOR
    |--------------------------------------------------------------------------
    */

    const talentName =
        talent?.name ||
        talent?.full_name ||
        talent?.user?.name ||
        "Your Profile";

    const talentInitials = talentName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join("");

    return (
        <AppLayout>
            <Head title="Create Story" />

            <div data-h-scope="talent-story-create">
                <style>{`
                    [data-h-scope="talent-story-create"] {
                        --ts-accent: #48d597;
                        --ts-accent-dark: #2fb87c;
                        --ts-accent-soft: rgba(72, 213, 151, 0.10);
                        --ts-ink: #071315;
                        --ts-muted: #6b797b;
                        --ts-border: #e4ebe8;
                        --ts-bg: #f5f8f7;
                        --ts-white: #ffffff;
                        --ts-danger: #dc3545;

                        min-height: calc(100vh - 70px);
                        background:
                            radial-gradient(
                                circle at 10% 0%,
                                rgba(72, 213, 151, .07),
                                transparent 25%
                            ),
                            var(--ts-bg);
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-create"] * {
                        box-sizing: border-box;
                    }

                    /* ==========================================
                       HEADER
                    =========================================== */

                    [data-h-scope="talent-story-create"] .page-header {
                        padding: 28px 0 22px;
                    }

                    [data-h-scope="talent-story-create"] .back-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        color: var(--ts-muted);
                        text-decoration: none;
                        font-size: 13px;
                        font-weight: 650;
                        margin-bottom: 16px;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .back-link:hover {
                        color: var(--ts-ink);
                        transform: translateX(-3px);
                    }

                    [data-h-scope="talent-story-create"] .header-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 20px;
                    }

                    [data-h-scope="talent-story-create"] .page-title {
                        margin: 0;
                        font-size: clamp(26px, 3vw, 36px);
                        font-weight: 800;
                        line-height: 1.15;
                        letter-spacing: -.8px;
                    }

                    [data-h-scope="talent-story-create"] .page-subtitle {
                        margin: 8px 0 0;
                        color: var(--ts-muted);
                        font-size: 14px;
                        line-height: 1.6;
                        max-width: 650px;
                    }

                    [data-h-scope="talent-story-create"] .profile-chip {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 7px 12px 7px 7px;
                        background: #fff;
                        border: 1px solid var(--ts-border);
                        border-radius: 999px;
                    }

                    [data-h-scope="talent-story-create"] .profile-avatar {
                        width: 34px;
                        height: 34px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                        font-size: 11px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-create"] .profile-name {
                        font-size: 11px;
                        font-weight: 750;
                    }

                    /* ==========================================
                       GRID
                    =========================================== */

                    [data-h-scope="talent-story-create"] .editor-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 340px;
                        gap: 24px;
                        align-items: start;
                    }

                    /* ==========================================
                       CARDS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .editor-card {
                        background: var(--ts-white);
                        border: 1px solid var(--ts-border);
                        border-radius: 20px;
                        box-shadow: 0 8px 30px rgba(7, 19, 21, .045);
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-create"] .card-header {
                        padding: 20px 24px;
                        border-bottom: 1px solid var(--ts-border);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                    }

                    [data-h-scope="talent-story-create"] .section-heading {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }

                    [data-h-scope="talent-story-create"] .section-icon {
                        width: 38px;
                        height: 38px;
                        flex: 0 0 38px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-create"] .section-title {
                        margin: 0;
                        font-size: 14px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-create"] .section-description {
                        margin: 2px 0 0;
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-create"] .card-body {
                        padding: 24px;
                    }

                    /* ==========================================
                       FORM
                    =========================================== */

                    [data-h-scope="talent-story-create"] .field {
                        margin-bottom: 22px;
                    }

                    [data-h-scope="talent-story-create"] .field:last-child {
                        margin-bottom: 0;
                    }

                    [data-h-scope="talent-story-create"] .field-label {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin-bottom: 8px;
                    }

                    [data-h-scope="talent-story-create"] .field-label label {
                        margin: 0;
                        color: var(--ts-ink);
                        font-size: 13px;
                        font-weight: 750;
                    }

                    [data-h-scope="talent-story-create"] .required {
                        color: var(--ts-danger);
                    }

                    [data-h-scope="talent-story-create"] .field-help {
                        color: var(--ts-muted);
                        font-size: 10px;
                    }

                    [data-h-scope="talent-story-create"] .form-control,
                    [data-h-scope="talent-story-create"] .form-select {
                        min-height: 46px;
                        border: 1px solid #dfe7e4;
                        border-radius: 12px;
                        background: #fff;
                        color: var(--ts-ink);
                        font-size: 13px;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .form-control {
                        padding: 12px 14px;
                    }

                    [data-h-scope="talent-story-create"] .form-select {
                        padding: 12px 38px 12px 14px;
                    }

                    [data-h-scope="talent-story-create"] .form-control::placeholder {
                        color: #a3adad;
                    }

                    [data-h-scope="talent-story-create"] .form-control:focus,
                    [data-h-scope="talent-story-create"] .form-select:focus {
                        border-color: var(--ts-accent);
                        box-shadow: 0 0 0 4px rgba(72, 213, 151, .12);
                    }

                    [data-h-scope="talent-story-create"] .title-input {
                        min-height: 58px;
                        font-size: 20px;
                        font-weight: 700;
                        letter-spacing: -.2px;
                    }

                    [data-h-scope="talent-story-create"] .content-editor {
                        min-height: 390px;
                        resize: vertical;
                        line-height: 1.8;
                        font-size: 15px;
                    }

                    [data-h-scope="talent-story-create"] .character-count {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 7px;
                        text-align: right;
                    }

                    /* ==========================================
                       STATUS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .status-options {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }

                    [data-h-scope="talent-story-create"] .status-option {
                        position: relative;
                    }

                    [data-h-scope="talent-story-create"] .status-option input {
                        position: absolute;
                        opacity: 0;
                        pointer-events: none;
                    }

                    [data-h-scope="talent-story-create"] .status-option label {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 13px;
                        border: 1px solid var(--ts-border);
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .status-option label:hover {
                        border-color: #c8d5d0;
                    }

                    [data-h-scope="talent-story-create"] .status-option input:checked + label {
                        border-color: var(--ts-accent);
                        background: var(--ts-accent-soft);
                    }

                    [data-h-scope="talent-story-create"] .status-icon {
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9px;
                        background: #f0f4f2;
                        color: var(--ts-muted);
                    }

                    [data-h-scope="talent-story-create"] .status-option input:checked + label .status-icon {
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-create"] .status-name {
                        font-size: 12px;
                        font-weight: 750;
                    }

                    [data-h-scope="talent-story-create"] .status-info {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    /* ==========================================
                       UPLOAD
                    =========================================== */

                    [data-h-scope="talent-story-create"] .upload-zone {
                        position: relative;
                        min-height: 230px;
                        border: 1.5px dashed #ccd8d4;
                        border-radius: 16px;
                        overflow: hidden;
                        background: #fafcfb;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .upload-zone:hover,
                    [data-h-scope="talent-story-create"] .upload-zone.drag-active {
                        border-color: var(--ts-accent);
                        background: rgba(72, 213, 151, .035);
                    }

                    [data-h-scope="talent-story-create"] .upload-empty {
                        min-height: 230px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 25px;
                        text-align: center;
                    }

                    [data-h-scope="talent-story-create"] .upload-icon {
                        width: 54px;
                        height: 54px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 16px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                        font-size: 21px;
                        margin-bottom: 13px;
                    }

                    [data-h-scope="talent-story-create"] .upload-title {
                        color: var(--ts-ink);
                        font-size: 13px;
                        font-weight: 750;
                        margin-bottom: 5px;
                    }

                    [data-h-scope="talent-story-create"] .upload-description {
                        max-width: 280px;
                        color: var(--ts-muted);
                        font-size: 11px;
                        line-height: 1.55;
                        margin-bottom: 14px;
                    }

                    [data-h-scope="talent-story-create"] .upload-button {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 7px;
                        padding: 9px 14px;
                        border-radius: 10px;
                        background: var(--ts-ink);
                        color: #fff;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        text-decoration: none;
                    }

                    [data-h-scope="talent-story-create"] .upload-button:hover {
                        background: var(--ts-accent-dark);
                        color: #fff;
                    }

                    [data-h-scope="talent-story-create"] .upload-preview {
                        position: absolute;
                        inset: 0;
                    }

                    [data-h-scope="talent-story-create"] .upload-preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-create"] .upload-preview-overlay {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        padding: 14px;
                        background: linear-gradient(
                            180deg,
                            transparent 45%,
                            rgba(0,0,0,.75)
                        );
                    }

                    [data-h-scope="talent-story-create"] .preview-label {
                        color: #fff;
                        font-size: 11px;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-story-create"] .remove-image {
                        width: 34px;
                        height: 34px;
                        border: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9px;
                        background: rgba(255,255,255,.94);
                        color: #dc3545;
                        cursor: pointer;
                    }

                    /* ==========================================
                       MEDIA
                    =========================================== */

                    [data-h-scope="talent-story-create"] .media-upload {
                        border: 1px solid var(--ts-border);
                        border-radius: 14px;
                        padding: 15px;
                        background: #fafcfb;
                    }

                    [data-h-scope="talent-story-create"] .media-label {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        cursor: pointer;
                    }

                    [data-h-scope="talent-story-create"] .media-icon {
                        width: 42px;
                        height: 42px;
                        flex: 0 0 42px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-create"] .media-title {
                        color: var(--ts-ink);
                        font-size: 12px;
                        font-weight: 750;
                    }

                    [data-h-scope="talent-story-create"] .media-description {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    [data-h-scope="talent-story-create"] .selected-file {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-top: 12px;
                        padding: 9px 10px;
                        background: #fff;
                        border: 1px solid var(--ts-border);
                        border-radius: 9px;
                        font-size: 10px;
                        color: var(--ts-muted);
                    }

                    [data-h-scope="talent-story-create"] .selected-file span {
                        min-width: 0;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    /* ==========================================
                       TAGS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .tag-preview {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 6px;
                        margin-top: 9px;
                    }

                    [data-h-scope="talent-story-create"] .tag-chip {
                        display: inline-flex;
                        align-items: center;
                        padding: 5px 9px;
                        border-radius: 999px;
                        background: var(--ts-accent-soft);
                        color: #258c60;
                        font-size: 10px;
                        font-weight: 700;
                    }

                    /* ==========================================
                       SIDEBAR
                    =========================================== */

                    [data-h-scope="talent-story-create"] .sidebar {
                        position: sticky;
                        top: 20px;
                    }

                    /* ==========================================
                       PREVIEW
                    =========================================== */

                    [data-h-scope="talent-story-create"] .preview-card {
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-create"] .preview-header {
                        padding: 18px;
                        border-bottom: 1px solid var(--ts-border);
                    }

                    [data-h-scope="talent-story-create"] .preview-cover {
                        height: 190px;
                        position: relative;
                        overflow: hidden;
                        background:
                            linear-gradient(
                                135deg,
                                #071315,
                                #164b39
                            );
                    }

                    [data-h-scope="talent-story-create"] .preview-cover img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-create"] .preview-cover::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(
                            180deg,
                            transparent 20%,
                            rgba(0,0,0,.78)
                        );
                    }

                    [data-h-scope="talent-story-create"] .preview-placeholder {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--ts-accent);
                        font-size: 29px;
                    }

                    [data-h-scope="talent-story-create"] .preview-content {
                        position: absolute;
                        z-index: 2;
                        left: 16px;
                        right: 16px;
                        bottom: 15px;
                        color: #fff;
                    }

                    [data-h-scope="talent-story-create"] .preview-category {
                        display: inline-flex;
                        align-items: center;
                        padding: 5px 9px;
                        border-radius: 999px;
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                        font-size: 9px;
                        font-weight: 800;
                        margin-bottom: 8px;
                    }

                    [data-h-scope="talent-story-create"] .preview-title {
                        margin: 0;
                        font-size: 18px;
                        line-height: 1.2;
                        font-weight: 800;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-create"] .preview-body {
                        padding: 17px;
                    }

                    [data-h-scope="talent-story-create"] .preview-meta {
                        display: flex;
                        justify-content: space-between;
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-bottom: 12px;
                    }

                    [data-h-scope="talent-story-create"] .preview-excerpt {
                        color: #687678;
                        font-size: 11px;
                        line-height: 1.6;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    /* ==========================================
                       PUBLISHING
                    =========================================== */

                    [data-h-scope="talent-story-create"] .publish-card {
                        padding: 18px;
                    }

                    [data-h-scope="talent-story-create"] .publish-info {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 15px;
                    }

                    [data-h-scope="talent-story-create"] .publish-icon {
                        width: 37px;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-create"] .publish-title {
                        color: var(--ts-ink);
                        font-size: 12px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-create"] .publish-description {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    /* ==========================================
                       SAVE BAR
                    =========================================== */

                    [data-h-scope="talent-story-create"] .save-bar {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        margin-top: 24px;
                        padding: 18px 20px;
                        background: rgba(255,255,255,.96);
                        border: 1px solid var(--ts-border);
                        border-radius: 16px;
                        box-shadow: 0 8px 25px rgba(7,19,21,.05);
                    }

                    [data-h-scope="talent-story-create"] .save-info {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-create"] .save-info i {
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-create"] .save-actions {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                    }

                    [data-h-scope="talent-story-create"] .btn-cancel {
                        min-height: 42px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 18px;
                        border: 1px solid var(--ts-border);
                        border-radius: 11px;
                        background: #fff;
                        color: var(--ts-ink);
                        text-decoration: none;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-story-create"] .btn-publish {
                        min-height: 42px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        padding: 0 20px;
                        border: 1px solid var(--ts-accent);
                        border-radius: 11px;
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                        font-size: 12px;
                        font-weight: 800;
                        box-shadow: 0 7px 18px rgba(72,213,151,.18);
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .btn-publish:hover:not(:disabled) {
                        background: var(--ts-accent-dark);
                        border-color: var(--ts-accent-dark);
                        color: #fff;
                        transform: translateY(-1px);
                    }

                    [data-h-scope="talent-story-create"] .btn-publish:disabled {
                        opacity: .65;
                        cursor: not-allowed;
                    }

                    /* ==========================================
                       PROGRESS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .progress-container {
                        margin-top: 14px;
                    }

                    [data-h-scope="talent-story-create"] .progress-label {
                        display: flex;
                        justify-content: space-between;
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-bottom: 6px;
                    }

                    [data-h-scope="talent-story-create"] .progress {
                        height: 6px;
                        background: #e9efec;
                        border-radius: 999px;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-create"] .progress-bar {
                        height: 100%;
                        background: var(--ts-accent);
                        border-radius: 999px;
                        transition: width .2s ease;
                    }

                    /* ==========================================
                       MOBILE STATUS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .mobile-publish {
                        display: none;
                    }

                    /* ==========================================
                       RESPONSIVE
                    =========================================== */

                    @media (max-width: 991.98px) {
                        [data-h-scope="talent-story-create"] .editor-grid {
                            grid-template-columns: 1fr;
                        }

                        [data-h-scope="talent-story-create"] .sidebar {
                            position: static;
                        }

                        [data-h-scope="talent-story-create"] .desktop-publish {
                            display: none;
                        }

                        [data-h-scope="talent-story-create"] .mobile-publish {
                            display: block;
                        }
                    }

                    @media (max-width: 767.98px) {
                        [data-h-scope="talent-story-create"] .page-header {
                            padding-top: 20px;
                        }

                        [data-h-scope="talent-story-create"] .header-row {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        [data-h-scope="talent-story-create"] .profile-chip {
                            display: none;
                        }

                        [data-h-scope="talent-story-create"] .card-header,
                        [data-h-scope="talent-story-create"] .card-body {
                            padding: 17px;
                        }

                        [data-h-scope="talent-story-create"] .content-editor {
                            min-height: 300px;
                        }

                        [data-h-scope="talent-story-create"] .status-options {
                            grid-template-columns: 1fr;
                        }

                        [data-h-scope="talent-story-create"] .save-bar {
                            align-items: stretch;
                            flex-direction: column;
                        }

                        [data-h-scope="talent-story-create"] .save-actions {
                            width: 100%;
                        }

                        [data-h-scope="talent-story-create"] .btn-cancel,
                        [data-h-scope="talent-story-create"] .btn-publish {
                            flex: 1;
                        }
                    }
                `}</style>

                <div className="container-fluid px-3 px-md-4 pb-5">
                    {/* ==========================================
                        HEADER
                    =========================================== */}

                    <div className="page-header">
                        <Link
                            href={route(
                                "talent.get.profile",
                                talent.id
                            )}
                            className="back-link"
                        >
                            <i className="fas fa-arrow-left"></i>
                            Back to Profile
                        </Link>

                        <div className="header-row">
                            <div>
                                <h1 className="page-title">
                                    Create your story
                                </h1>

                                <p className="page-subtitle">
                                    Share your journey, experience and
                                    perspective with the talent community.
                                    Build a story that helps people understand
                                    what makes you unique.
                                </p>
                            </div>

                            <div className="profile-chip">
                                <div className="profile-avatar">
                                    {talentInitials || (
                                        <i className="fas fa-user"></i>
                                    )}
                                </div>

                                <span className="profile-name">
                                    {talentName}
                                </span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={submit}>
                        <div className="editor-grid">
                            {/* ==========================================
                                MAIN CONTENT
                            =========================================== */}

                            <main>
                                {/* STORY CONTENT */}
                                <div className="editor-card mb-4">
                                    <div className="card-header">
                                        <div className="section-heading">
                                            <div className="section-icon">
                                                <i className="fas fa-pen-nib"></i>
                                            </div>

                                            <div>
                                                <h2 className="section-title">
                                                    Story content
                                                </h2>

                                                <p className="section-description">
                                                    Start with a title and tell
                                                    your story in your own
                                                    voice.
                                                </p>
                                            </div>
                                        </div>

                                        <span className="badge rounded-pill bg-light text-secondary">
                                            New story
                                        </span>
                                    </div>

                                    <div className="card-body">
                                        {/* TITLE */}
                                        <div className="field">
                                            <div className="field-label">
                                                <label htmlFor="story-title">
                                                    Story title{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>

                                                <span className="field-help">
                                                    Make it memorable
                                                </span>
                                            </div>

                                            <input
                                                id="story-title"
                                                type="text"
                                                className={`form-control title-input ${
                                                    errors.title
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g. How I turned my passion into a career"
                                            />

                                            {errors.title && (
                                                <div className="invalid-feedback">
                                                    {errors.title}
                                                </div>
                                            )}
                                        </div>

                                        {/* CONTENT */}
                                        <div className="field">
                                            <div className="field-label">
                                                <label htmlFor="story-content">
                                                    Your story{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>

                                                <span className="field-help">
                                                    Be authentic
                                                </span>
                                            </div>

                                            <textarea
                                                id="story-content"
                                                className={`form-control content-editor ${
                                                    errors.content
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={data.content}
                                                onChange={(e) =>
                                                    setData(
                                                        "content",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder={`Tell your story...

What inspired you?
What challenges have you overcome?
What have you learned?
What are you working towards?`}
                                            />

                                            <div className="character-count">
                                                {data.content?.length || 0}{" "}
                                                characters
                                            </div>

                                            {errors.content && (
                                                <div className="invalid-feedback">
                                                    {errors.content}
                                                </div>
                                            )}
                                        </div>

                                        {/* CATEGORY + TAGS */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="field">
                                                    <div className="field-label">
                                                        <label htmlFor="category">
                                                            Category
                                                        </label>

                                                        <span className="field-help">
                                                            Help people discover
                                                            your story
                                                        </span>
                                                    </div>

                                                    <select
                                                        id="category"
                                                        className={`form-select ${
                                                            errors.category_id
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        value={
                                                            data.category_id
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "category_id",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            Select a category
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
                                                        <div className="invalid-feedback">
                                                            {
                                                                errors.category_id
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field">
                                                    <div className="field-label">
                                                        <label htmlFor="tags">
                                                            Tags
                                                        </label>

                                                        <span className="field-help">
                                                            Separate with commas
                                                        </span>
                                                    </div>

                                                    <input
                                                        id="tags"
                                                        type="text"
                                                        className={`form-control ${
                                                            errors.tags
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        value={data.tags}
                                                        onChange={(e) =>
                                                            setData(
                                                                "tags",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Design, Career, Leadership"
                                                    />

                                                    {errors.tags && (
                                                        <div className="invalid-feedback">
                                                            {errors.tags}
                                                        </div>
                                                    )}

                                                    {tags.length > 0 && (
                                                        <div className="tag-preview">
                                                            {tags.map(
                                                                (
                                                                    tag,
                                                                    index
                                                                ) => (
                                                                    <span
                                                                        className="tag-chip"
                                                                        key={`${tag}-${index}`}
                                                                    >
                                                                        #{tag}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ======================================
                                    VISUALS
                                ======================================= */}

                                <div className="editor-card mb-4">
                                    <div className="card-header">
                                        <div className="section-heading">
                                            <div className="section-icon">
                                                <i className="fas fa-images"></i>
                                            </div>

                                            <div>
                                                <h2 className="section-title">
                                                    Story visuals
                                                </h2>

                                                <p className="section-description">
                                                    Add a cover image and
                                                    supporting media.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="row g-4">
                                            {/* COVER IMAGE */}
                                            <div className="col-lg-7">
                                                <div className="field mb-0">
                                                    <div className="field-label">
                                                        <label>
                                                            Cover image
                                                        </label>

                                                        <span className="field-help">
                                                            Recommended: 16:9
                                                        </span>
                                                    </div>

                                                    <div
                                                        className={`upload-zone ${
                                                            dragActive
                                                                ? "drag-active"
                                                                : ""
                                                        }`}
                                                        onDragOver={(e) => {
                                                            e.preventDefault();
                                                            setDragActive(true);
                                                        }}
                                                        onDragLeave={() =>
                                                            setDragActive(false)
                                                        }
                                                        onDrop={handleDrop}
                                                    >
                                                        {thumbPreview ? (
                                                            <div className="upload-preview">
                                                                <img
                                                                    src={
                                                                        thumbPreview
                                                                    }
                                                                    alt="Story cover preview"
                                                                />

                                                                <div className="upload-preview-overlay">
                                                                    <span className="preview-label">
                                                                        Story
                                                                        cover
                                                                    </span>

                                                                    <button
                                                                        type="button"
                                                                        className="remove-image"
                                                                        onClick={
                                                                            removeThumbnail
                                                                        }
                                                                    >
                                                                        <i className="fas fa-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="upload-empty">
                                                                <div className="upload-icon">
                                                                    <i className="fas fa-cloud-arrow-up"></i>
                                                                </div>

                                                                <div className="upload-title">
                                                                    Add a cover
                                                                    image
                                                                </div>

                                                                <div className="upload-description">
                                                                    A strong
                                                                    visual helps
                                                                    your story
                                                                    stand out
                                                                    on your
                                                                    talent
                                                                    profile.
                                                                </div>

                                                                <label
                                                                    htmlFor="thumbnail"
                                                                    className="upload-button"
                                                                >
                                                                    <i className="fas fa-plus"></i>
                                                                    Choose image
                                                                </label>

                                                                <input
                                                                    id="thumbnail"
                                                                    type="file"
                                                                    accept="image/*"
                                                                    className="d-none"
                                                                    onChange={
                                                                        handleThumbnailInput
                                                                    }
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {thumbPreview && (
                                                        <div className="mt-2">
                                                            <label
                                                                htmlFor="thumbnail-change"
                                                                className="upload-button"
                                                            >
                                                                <i className="fas fa-image"></i>
                                                                Change image
                                                            </label>

                                                            <input
                                                                id="thumbnail-change"
                                                                type="file"
                                                                accept="image/*"
                                                                className="d-none"
                                                                onChange={
                                                                    handleThumbnailInput
                                                                }
                                                            />
                                                        </div>
                                                    )}

                                                    {errors.thumbnail && (
                                                        <div className="text-danger small mt-2">
                                                            {
                                                                errors.thumbnail
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* MEDIA */}
                                            <div className="col-lg-5">
                                                <div className="field mb-0">
                                                    <div className="field-label">
                                                        <label>
                                                            Supporting media
                                                        </label>
                                                    </div>

                                                    <div className="media-upload">
                                                        <label
                                                            htmlFor="media"
                                                            className="media-label"
                                                        >
                                                            <div className="media-icon">
                                                                <i className="fas fa-paperclip"></i>
                                                            </div>

                                                            <div>
                                                                <div className="media-title">
                                                                    Add a file
                                                                </div>

                                                                <div className="media-description">
                                                                    Video,
                                                                    audio,
                                                                    document or
                                                                    other media
                                                                </div>
                                                            </div>
                                                        </label>

                                                        <input
                                                            id="media"
                                                            type="file"
                                                            className="d-none"
                                                            onChange={
                                                                handleMedia
                                                            }
                                                        />

                                                        {data.media && (
                                                            <div className="selected-file">
                                                                <i className="fas fa-circle-check text-success"></i>

                                                                <span>
                                                                    {
                                                                        data
                                                                            .media
                                                                            .name
                                                                    }
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {errors.media && (
                                                        <div className="text-danger small mt-2">
                                                            {errors.media}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* MOBILE PUBLISHING */}
                                <div className="editor-card mobile-publish mb-4">
                                    <div className="card-header">
                                        <div className="section-heading">
                                            <div className="section-icon">
                                                <i className="fas fa-sliders"></i>
                                            </div>

                                            <div>
                                                <h2 className="section-title">
                                                    Publishing
                                                </h2>

                                                <p className="section-description">
                                                    Choose how your story will
                                                    be shared.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <StatusSelector
                                            value={data.status}
                                            onChange={(value) =>
                                                setData("status", value)
                                            }
                                        />
                                    </div>
                                </div>
                            </main>

                            {/* ==========================================
                                SIDEBAR
                            =========================================== */}

                            <aside>
                                <div className="sidebar">
                                    {/* LIVE PREVIEW */}
                                    <div className="editor-card preview-card mb-4">
                                        <div className="preview-header">
                                            <div className="section-heading">
                                                <div className="section-icon">
                                                    <i className="fas fa-eye"></i>
                                                </div>

                                                <div>
                                                    <h2 className="section-title">
                                                        Live preview
                                                    </h2>

                                                    <p className="section-description">
                                                        See how your story will
                                                        appear.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="preview-cover">
                                            {thumbPreview ? (
                                                <img
                                                    src={thumbPreview}
                                                    alt="Story preview"
                                                />
                                            ) : (
                                                <div className="preview-placeholder">
                                                    <i className="fas fa-feather-pointed"></i>
                                                </div>
                                            )}

                                            <div className="preview-content">
                                                {selectedCategory?.name && (
                                                    <span className="preview-category">
                                                        {
                                                            selectedCategory.name
                                                        }
                                                    </span>
                                                )}

                                                <h3 className="preview-title">
                                                    {data.title ||
                                                        "Your story title"}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="preview-body">
                                            <div className="preview-meta">
                                                <span>
                                                    <i className="far fa-calendar me-1"></i>
                                                    Today
                                                </span>

                                                <span>
                                                    <i className="fas fa-circle me-1"></i>
                                                    {data.status === "published"
                                                        ? "Published"
                                                        : "Draft"}
                                                </span>
                                            </div>

                                            <div className="preview-excerpt">
                                                {data.content ||
                                                    "Your story preview will appear here as you write."}
                                            </div>
                                        </div>
                                    </div>

                                    {/* PUBLISHING */}
                                    <div className="editor-card publish-card desktop-publish">
                                        <div className="publish-info">
                                            <div className="publish-icon">
                                                <i
                                                    className={
                                                        data.status ===
                                                        "published"
                                                            ? "fas fa-globe"
                                                            : "fas fa-lock"
                                                    }
                                                ></i>
                                            </div>

                                            <div>
                                                <div className="publish-title">
                                                    {data.status === "published"
                                                        ? "Ready to publish"
                                                        : "Saved as a draft"}
                                                </div>

                                                <div className="publish-description">
                                                    {data.status === "published"
                                                        ? "Your story will be visible on your profile."
                                                        : "Your story will remain private until published."}
                                                </div>
                                            </div>
                                        </div>

                                        <StatusSelector
                                            value={data.status}
                                            onChange={(value) =>
                                                setData("status", value)
                                            }
                                        />
                                    </div>
                                </div>
                            </aside>
                        </div>

                        {/* ==========================================
                            SAVE BAR
                        =========================================== */}

                        <div className="save-bar">
                            <div className="save-info">
                                <i className="fas fa-shield-halved"></i>

                                <span>
                                    Your story belongs to your talent profile.
                                </span>
                            </div>

                            <div className="save-actions">
                                <Link
                                    href={route(
                                        "talent.get.profile",
                                        talent.id
                                    )}
                                    className="btn-cancel"
                                >
                                    Cancel
                                </Link>

                                <button
                                    type="submit"
                                    className="btn-publish"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm"></span>
                                            {data.status === "published"
                                                ? "Publishing..."
                                                : "Saving..."}
                                        </>
                                    ) : (
                                        <>
                                            <i
                                                className={
                                                    data.status === "published"
                                                        ? "fas fa-paper-plane"
                                                        : "fas fa-floppy-disk"
                                                }
                                            ></i>

                                            {data.status === "published"
                                                ? "Publish Story"
                                                : "Save Draft"}
                                        </>
                                    )}
                                </button>
                            </div>

                            {progress && (
                                <div className="progress-container w-100">
                                    <div className="progress-label">
                                        <span>
                                            Uploading your story...
                                        </span>

                                        <span>
                                            {progress.percentage}%
                                        </span>
                                    </div>

                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${progress.percentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}

/*
|--------------------------------------------------------------------------
| STATUS SELECTOR
|--------------------------------------------------------------------------
*/

function StatusSelector({ value, onChange }) {
    return (
        <div className="status-options">
            <div className="status-option">
                <input
                    id="create-status-published"
                    type="radio"
                    name="create_story_status"
                    value="published"
                    checked={value === "published"}
                    onChange={() => onChange("published")}
                />

                <label htmlFor="create-status-published">
                    <div className="status-icon">
                        <i className="fas fa-globe"></i>
                    </div>

                    <div>
                        <div className="status-name">
                            Published
                        </div>

                        <div className="status-info">
                            Visible publicly
                        </div>
                    </div>
                </label>
            </div>

            <div className="status-option">
                <input
                    id="create-status-draft"
                    type="radio"
                    name="create_story_status"
                    value="draft"
                    checked={value === "draft"}
                    onChange={() => onChange("draft")}
                />

                <label htmlFor="create-status-draft">
                    <div className="status-icon">
                        <i className="fas fa-file-pen"></i>
                    </div>

                    <div>
                        <div className="status-name">
                            Draft
                        </div>

                        <div className="status-info">
                            Keep it private
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}