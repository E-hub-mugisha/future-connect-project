// resources/js/Pages/Talent/Story/Edit.jsx

import { Head, Link, useForm } from "@inertiajs/react";
import { useMemo, useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function Edit({ story, categories = [] }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        _method: "put",
        title: story.title ?? "",
        content: story.content ?? "",
        category_id: story.category_id ?? "",
        tags: story.tags ?? "",
        status: story.status ?? "published",
        thumbnail: null,
        media: null,
    });

    const [thumbPreview, setThumbPreview] = useState(
        story.thumbnail ? `/storage/${story.thumbnail}` : null
    );

    const [dragActive, setDragActive] = useState(false);

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

    const selectedCategory = useMemo(() => {
        return categories.find(
            (category) => String(category.id) === String(data.category_id)
        );
    }, [categories, data.category_id]);

    const handleThumbnail = (file) => {
        if (!file) return;

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

        if (file && file.type.startsWith("image/")) {
            handleThumbnail(file);
        }
    };

    const removeThumbnail = () => {
        setThumbPreview(
            story.thumbnail ? `/storage/${story.thumbnail}` : null
        );

        setData("thumbnail", null);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("talent.page.stories.update", story.id), {
            forceFormData: true,
        });
    };

    return (
        <AppLayout>
            <Head title={`Edit Story — ${story.title}`} />

            <div data-h-scope="talent-story-editor">
                <style>{`
                    [data-h-scope="talent-story-editor"] {
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

                    [data-h-scope="talent-story-editor"] * {
                        box-sizing: border-box;
                    }

                    /* =====================================
                       PAGE HEADER
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .editor-header {
                        padding: 28px 0 22px;
                    }

                    [data-h-scope="talent-story-editor"] .back-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        color: var(--ts-muted);
                        text-decoration: none;
                        font-size: 13px;
                        font-weight: 650;
                        margin-bottom: 15px;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .back-link:hover {
                        color: var(--ts-ink);
                        transform: translateX(-3px);
                    }

                    [data-h-scope="talent-story-editor"] .editor-title {
                        margin: 0;
                        font-size: clamp(25px, 3vw, 34px);
                        line-height: 1.15;
                        letter-spacing: -.7px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-editor"] .editor-subtitle {
                        color: var(--ts-muted);
                        margin: 8px 0 0;
                        font-size: 14px;
                        line-height: 1.6;
                    }

                    /* =====================================
                       MAIN GRID
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .editor-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 340px;
                        gap: 24px;
                        align-items: start;
                    }

                    /* =====================================
                       CARDS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .editor-card {
                        background: var(--ts-white);
                        border: 1px solid var(--ts-border);
                        border-radius: 20px;
                        box-shadow: 0 8px 30px rgba(7, 19, 21, .045);
                    }

                    [data-h-scope="talent-story-editor"] .editor-card-header {
                        padding: 20px 24px;
                        border-bottom: 1px solid var(--ts-border);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                    }

                    [data-h-scope="talent-story-editor"] .section-heading {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }

                    [data-h-scope="talent-story-editor"] .section-icon {
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

                    [data-h-scope="talent-story-editor"] .section-title {
                        margin: 0;
                        font-size: 14px;
                        font-weight: 800;
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-editor"] .section-description {
                        margin: 2px 0 0;
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-editor"] .editor-card-body {
                        padding: 24px;
                    }

                    /* =====================================
                       FORM ELEMENTS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .field {
                        margin-bottom: 22px;
                    }

                    [data-h-scope="talent-story-editor"] .field:last-child {
                        margin-bottom: 0;
                    }

                    [data-h-scope="talent-story-editor"] .field-label {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin-bottom: 8px;
                    }

                    [data-h-scope="talent-story-editor"] .field-label label {
                        color: var(--ts-ink);
                        font-size: 13px;
                        font-weight: 750;
                        margin: 0;
                    }

                    [data-h-scope="talent-story-editor"] .required {
                        color: var(--ts-danger);
                    }

                    [data-h-scope="talent-story-editor"] .field-help {
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-editor"] .form-control,
                    [data-h-scope="talent-story-editor"] .form-select {
                        min-height: 46px;
                        border: 1px solid #dfe7e4;
                        border-radius: 12px;
                        color: var(--ts-ink);
                        background-color: #fff;
                        font-size: 13px;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .form-control {
                        padding: 12px 14px;
                    }

                    [data-h-scope="talent-story-editor"] .form-select {
                        padding: 12px 38px 12px 14px;
                    }

                    [data-h-scope="talent-story-editor"] .form-control::placeholder {
                        color: #a3adad;
                    }

                    [data-h-scope="talent-story-editor"] .form-control:focus,
                    [data-h-scope="talent-story-editor"] .form-select:focus {
                        border-color: var(--ts-accent);
                        box-shadow: 0 0 0 4px rgba(72, 213, 151, .12);
                    }

                    [data-h-scope="talent-story-editor"] .title-input {
                        min-height: 58px;
                        font-size: 20px;
                        font-weight: 700;
                        letter-spacing: -.2px;
                    }

                    [data-h-scope="talent-story-editor"] .content-editor {
                        min-height: 390px;
                        resize: vertical;
                        line-height: 1.8;
                        font-size: 15px;
                    }

                    [data-h-scope="talent-story-editor"] .character-count {
                        color: var(--ts-muted);
                        font-size: 11px;
                        margin-top: 7px;
                        text-align: right;
                    }

                    /* =====================================
                       STATUS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .status-options {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }

                    [data-h-scope="talent-story-editor"] .status-option {
                        position: relative;
                    }

                    [data-h-scope="talent-story-editor"] .status-option input {
                        position: absolute;
                        opacity: 0;
                        pointer-events: none;
                    }

                    [data-h-scope="talent-story-editor"] .status-option label {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 13px;
                        border: 1px solid var(--ts-border);
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .status-option label:hover {
                        border-color: #c8d5d0;
                    }

                    [data-h-scope="talent-story-editor"] .status-option input:checked + label {
                        border-color: var(--ts-accent);
                        background: var(--ts-accent-soft);
                    }

                    [data-h-scope="talent-story-editor"] .status-icon {
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9px;
                        background: #f0f4f2;
                        color: var(--ts-muted);
                    }

                    [data-h-scope="talent-story-editor"] .status-option input:checked + label .status-icon {
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-editor"] .status-name {
                        font-size: 12px;
                        font-weight: 750;
                    }

                    [data-h-scope="talent-story-editor"] .status-info {
                        font-size: 10px;
                        color: var(--ts-muted);
                        margin-top: 2px;
                    }

                    /* =====================================
                       THUMBNAIL UPLOAD
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .upload-zone {
                        position: relative;
                        min-height: 210px;
                        border: 1.5px dashed #ccd8d4;
                        border-radius: 16px;
                        overflow: hidden;
                        background: #fafcfb;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .upload-zone:hover,
                    [data-h-scope="talent-story-editor"] .upload-zone.drag-active {
                        border-color: var(--ts-accent);
                        background: rgba(72, 213, 151, .035);
                    }

                    [data-h-scope="talent-story-editor"] .upload-preview {
                        position: absolute;
                        inset: 0;
                    }

                    [data-h-scope="talent-story-editor"] .upload-preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-editor"] .upload-preview-overlay {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        padding: 14px;
                        background: linear-gradient(
                            180deg,
                            transparent 40%,
                            rgba(0,0,0,.72)
                        );
                    }

                    [data-h-scope="talent-story-editor"] .preview-label {
                        color: #fff;
                        font-size: 11px;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-story-editor"] .remove-image {
                        border: 0;
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9px;
                        background: rgba(255,255,255,.92);
                        color: #dc3545;
                        cursor: pointer;
                    }

                    [data-h-scope="talent-story-editor"] .upload-empty {
                        min-height: 210px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        padding: 25px;
                    }

                    [data-h-scope="talent-story-editor"] .upload-icon {
                        width: 52px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 15px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                        font-size: 20px;
                        margin-bottom: 12px;
                    }

                    [data-h-scope="talent-story-editor"] .upload-title {
                        color: var(--ts-ink);
                        font-size: 13px;
                        font-weight: 750;
                        margin-bottom: 4px;
                    }

                    [data-h-scope="talent-story-editor"] .upload-description {
                        color: var(--ts-muted);
                        font-size: 11px;
                        line-height: 1.5;
                        margin-bottom: 13px;
                    }

                    [data-h-scope="talent-story-editor"] .upload-button {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 8px 13px;
                        border-radius: 9px;
                        background: var(--ts-ink);
                        color: #fff;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        margin: 0;
                    }

                    [data-h-scope="talent-story-editor"] .upload-button:hover {
                        background: var(--ts-accent-dark);
                    }

                    /* =====================================
                       FILE ATTACHMENT
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .file-upload {
                        border: 1px solid var(--ts-border);
                        border-radius: 14px;
                        padding: 14px;
                        background: #fafcfb;
                    }

                    [data-h-scope="talent-story-editor"] .file-upload-label {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        cursor: pointer;
                    }

                    [data-h-scope="talent-story-editor"] .file-icon {
                        width: 40px;
                        height: 40px;
                        flex: 0 0 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-editor"] .file-title {
                        font-size: 12px;
                        font-weight: 750;
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-editor"] .file-description {
                        font-size: 10px;
                        color: var(--ts-muted);
                        margin-top: 2px;
                    }

                    [data-h-scope="talent-story-editor"] .current-file {
                        display: flex;
                        align-items: center;
                        gap: 7px;
                        margin-top: 12px;
                        padding: 8px 10px;
                        background: #fff;
                        border: 1px solid var(--ts-border);
                        border-radius: 9px;
                        color: var(--ts-muted);
                        font-size: 10px;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .current-file span {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    /* =====================================
                       TAGS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .tag-preview {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 6px;
                        margin-top: 9px;
                    }

                    [data-h-scope="talent-story-editor"] .tag-chip {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                        padding: 5px 9px;
                        border-radius: 999px;
                        background: var(--ts-accent-soft);
                        color: #258c60;
                        font-size: 10px;
                        font-weight: 700;
                    }

                    /* =====================================
                       SIDEBAR
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .sidebar-card {
                        position: sticky;
                        top: 20px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-card {
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .preview-cover {
                        height: 180px;
                        position: relative;
                        background:
                            linear-gradient(
                                135deg,
                                #071315,
                                #164b39
                            );
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .preview-cover img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-editor"] .preview-cover::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(
                            180deg,
                            transparent 20%,
                            rgba(0,0,0,.78)
                        );
                    }

                    [data-h-scope="talent-story-editor"] .preview-cover-placeholder {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--ts-accent);
                        font-size: 27px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-content {
                        position: absolute;
                        z-index: 2;
                        left: 16px;
                        right: 16px;
                        bottom: 15px;
                        color: #fff;
                    }

                    [data-h-scope="talent-story-editor"] .preview-category {
                        display: inline-flex;
                        padding: 5px 9px;
                        border-radius: 999px;
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                        font-size: 9px;
                        font-weight: 800;
                        margin-bottom: 8px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-title {
                        margin: 0;
                        font-size: 18px;
                        line-height: 1.2;
                        font-weight: 800;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .preview-body {
                        padding: 17px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-meta {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-bottom: 12px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-excerpt {
                        color: #687678;
                        font-size: 11px;
                        line-height: 1.6;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    /* =====================================
                       PUBLISH BOX
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .publish-box {
                        padding: 18px;
                    }

                    [data-h-scope="talent-story-editor"] .publish-status {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 15px;
                    }

                    [data-h-scope="talent-story-editor"] .publish-status-icon {
                        width: 36px;
                        height: 36px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-editor"] .publish-status-title {
                        font-size: 12px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-editor"] .publish-status-description {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    /* =====================================
                       SAVE BAR
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .save-bar {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        padding: 18px 20px;
                        margin-top: 24px;
                        background: rgba(255,255,255,.95);
                        border: 1px solid var(--ts-border);
                        border-radius: 16px;
                        box-shadow: 0 8px 25px rgba(7,19,21,.05);
                    }

                    [data-h-scope="talent-story-editor"] .save-info {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-editor"] .save-info i {
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-editor"] .save-actions {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                    }

                    [data-h-scope="talent-story-editor"] .btn-cancel {
                        min-height: 42px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 18px;
                        border-radius: 11px;
                        border: 1px solid var(--ts-border);
                        background: #fff;
                        color: var(--ts-ink);
                        text-decoration: none;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-story-editor"] .btn-save {
                        min-height: 42px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        padding: 0 20px;
                        border-radius: 11px;
                        border: 1px solid var(--ts-accent);
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                        font-size: 12px;
                        font-weight: 800;
                        box-shadow: 0 7px 18px rgba(72,213,151,.18);
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .btn-save:hover:not(:disabled) {
                        background: var(--ts-accent-dark);
                        border-color: var(--ts-accent-dark);
                        color: #fff;
                        transform: translateY(-1px);
                    }

                    [data-h-scope="talent-story-editor"] .btn-save:disabled {
                        opacity: .65;
                        cursor: not-allowed;
                    }

                    /* =====================================
                       PROGRESS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .upload-progress {
                        margin-top: 15px;
                    }

                    [data-h-scope="talent-story-editor"] .progress {
                        height: 6px;
                        background: #e9efec;
                        border-radius: 999px;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .progress-bar {
                        height: 100%;
                        background: var(--ts-accent);
                        border-radius: 999px;
                        transition: width .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .progress-label {
                        display: flex;
                        justify-content: space-between;
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-bottom: 6px;
                    }

                    /* =====================================
                       ERROR
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .invalid-feedback {
                        font-size: 11px;
                    }

                    /* =====================================
                       RESPONSIVE
                    ====================================== */

                    @media (max-width: 991.98px) {
                        [data-h-scope="talent-story-editor"] .editor-grid {
                            grid-template-columns: 1fr;
                        }

                        [data-h-scope="talent-story-editor"] .sidebar-card {
                            position: static;
                        }

                        [data-h-scope="talent-story-editor"] .preview-layout {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 18px;
                        }
                    }

                    @media (max-width: 767.98px) {
                        [data-h-scope="talent-story-editor"] .editor-header {
                            padding-top: 20px;
                        }

                        [data-h-scope="talent-story-editor"] .editor-card-header {
                            padding: 17px;
                        }

                        [data-h-scope="talent-story-editor"] .editor-card-body {
                            padding: 17px;
                        }

                        [data-h-scope="talent-story-editor"] .content-editor {
                            min-height: 300px;
                        }

                        [data-h-scope="talent-story-editor"] .preview-layout {
                            display: block;
                        }

                        [data-h-scope="talent-story-editor"] .save-bar {
                            align-items: stretch;
                            flex-direction: column;
                        }

                        [data-h-scope="talent-story-editor"] .save-actions {
                            width: 100%;
                        }

                        [data-h-scope="talent-story-editor"] .btn-cancel,
                        [data-h-scope="talent-story-editor"] .btn-save {
                            flex: 1;
                        }

                        [data-h-scope="talent-story-editor"] .status-options {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>

                <div className="container-fluid px-3 px-md-4 pb-5">
                    <div className="editor-header">
                        <Link
                            href={route(
                                "talent.page.stories.show",
                                story.id
                            )}
                            className="back-link"
                        >
                            <i className="fas fa-arrow-left"></i>
                            Back to Story
                        </Link>

                        <h1 className="editor-title">
                            Edit your story
                        </h1>

                        <p className="editor-subtitle">
                            Refine your story, update its presentation, and
                            choose how it appears on your talent profile.
                        </p>
                    </div>

                    <form onSubmit={submit}>
                        <div className="editor-grid">
                            {/* ==========================================
                                MAIN EDITOR
                            =========================================== */}
                            <main>
                                {/* STORY CONTENT */}
                                <div className="editor-card mb-4">
                                    <div className="editor-card-header">
                                        <div className="section-heading">
                                            <div className="section-icon">
                                                <i className="fas fa-pen-nib"></i>
                                            </div>

                                            <div>
                                                <h2 className="section-title">
                                                    Story content
                                                </h2>

                                                <p className="section-description">
                                                    Tell your audience what
                                                    makes your journey unique.
                                                </p>
                                            </div>
                                        </div>

                                        <span className="badge rounded-pill bg-light text-secondary">
                                            {data.status === "published"
                                                ? "Published"
                                                : "Draft"}
                                        </span>
                                    </div>

                                    <div className="editor-card-body">
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
                                                placeholder="Give your story a compelling title"
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
                                                    Share your experience
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
                                                placeholder="Tell your story..."
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

                                        {/* CATEGORY */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="field">
                                                    <div className="field-label">
                                                        <label htmlFor="category">
                                                            Category
                                                        </label>
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
                                                                        #
                                                                        {tag}
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

                                {/* VISUAL MEDIA */}
                                <div className="editor-card mb-4">
                                    <div className="editor-card-header">
                                        <div className="section-heading">
                                            <div className="section-icon">
                                                <i className="fas fa-images"></i>
                                            </div>

                                            <div>
                                                <h2 className="section-title">
                                                    Story visuals
                                                </h2>

                                                <p className="section-description">
                                                    Give your story a strong
                                                    visual identity.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="editor-card-body">
                                        <div className="row g-4">
                                            {/* THUMBNAIL */}
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
                                                                    alt="Story thumbnail preview"
                                                                />

                                                                <div className="upload-preview-overlay">
                                                                    <span className="preview-label">
                                                                        Cover
                                                                        image
                                                                    </span>

                                                                    <button
                                                                        type="button"
                                                                        className="remove-image"
                                                                        onClick={
                                                                            removeThumbnail
                                                                        }
                                                                        title="Remove selected image"
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
                                                                    Upload a
                                                                    cover image
                                                                </div>

                                                                <div className="upload-description">
                                                                    Drag and
                                                                    drop an
                                                                    image here,
                                                                    or choose a
                                                                    file from
                                                                    your device.
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
                                                                htmlFor="thumbnail-replace"
                                                                className="upload-button"
                                                            >
                                                                <i className="fas fa-image"></i>
                                                                Change image
                                                            </label>

                                                            <input
                                                                id="thumbnail-replace"
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
                                                            Attached media
                                                        </label>
                                                    </div>

                                                    <div className="file-upload">
                                                        <label
                                                            htmlFor="media"
                                                            className="file-upload-label"
                                                        >
                                                            <div className="file-icon">
                                                                <i className="fas fa-paperclip"></i>
                                                            </div>

                                                            <div>
                                                                <div className="file-title">
                                                                    Replace
                                                                    attached
                                                                    file
                                                                </div>

                                                                <div className="file-description">
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
                                                            onChange={(e) =>
                                                                setData(
                                                                    "media",
                                                                    e.target
                                                                        .files?.[0] ||
                                                                        null
                                                                )
                                                            }
                                                        />

                                                        {story.media && (
                                                            <div className="current-file">
                                                                <i className="fas fa-file"></i>

                                                                <span>
                                                                    Current:{" "}
                                                                    {story.media
                                                                        .split(
                                                                            "/"
                                                                        )
                                                                        .pop()}
                                                                </span>
                                                            </div>
                                                        )}

                                                        {data.media && (
                                                            <div className="current-file">
                                                                <i className="fas fa-circle-check text-success"></i>

                                                                <span>
                                                                    New file:{" "}
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

                                {/* MOBILE STATUS SECTION */}
                                <div className="editor-card d-lg-none mb-4">
                                    <div className="editor-card-header">
                                        <div className="section-heading">
                                            <div className="section-icon">
                                                <i className="fas fa-sliders"></i>
                                            </div>

                                            <div>
                                                <h2 className="section-title">
                                                    Publishing
                                                </h2>

                                                <p className="section-description">
                                                    Control who can see your
                                                    story.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="editor-card-body">
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
                                <div className="sidebar-card">
                                    {/* PREVIEW */}
                                    <div className="editor-card preview-card mb-4">
                                        <div className="editor-card-header">
                                            <div className="section-heading">
                                                <div className="section-icon">
                                                    <i className="fas fa-eye"></i>
                                                </div>

                                                <div>
                                                    <h2 className="section-title">
                                                        Live preview
                                                    </h2>

                                                    <p className="section-description">
                                                        How your story will
                                                        appear.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="preview-cover">
                                            {thumbPreview ? (
                                                <img
                                                    src={thumbPreview}
                                                    alt="Preview"
                                                />
                                            ) : (
                                                <div className="preview-cover-placeholder">
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
                                                    "Your story preview will appear here once you start writing."}
                                            </div>
                                        </div>
                                    </div>

                                    {/* PUBLISHING */}
                                    <div className="editor-card publish-box d-none d-lg-block">
                                        <div className="publish-status">
                                            <div className="publish-status-icon">
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
                                                <div className="publish-status-title">
                                                    {data.status === "published"
                                                        ? "Visible to everyone"
                                                        : "Private draft"}
                                                </div>

                                                <div className="publish-status-description">
                                                    {data.status === "published"
                                                        ? "Your story can appear on your talent profile."
                                                        : "Only you can access this draft."}
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
                                    Your changes are saved securely to your
                                    talent profile.
                                </span>
                            </div>

                            <div className="save-actions">
                                <Link
                                    href={route(
                                        "talent.page.stories.show",
                                        story.id
                                    )}
                                    className="btn-cancel"
                                >
                                    Cancel
                                </Link>

                                <button
                                    type="submit"
                                    className="btn-save"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm"></span>
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

                            {progress && (
                                <div className="upload-progress w-100">
                                    <div className="progress-label">
                                        <span>Uploading changes...</span>
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

/**
 * Publishing status selector
 */
function StatusSelector({ value, onChange }) {
    return (
        <div className="status-options">
            <div className="status-option">
                <input
                    id="status-published"
                    type="radio"
                    name="story_status"
                    value="published"
                    checked={value === "published"}
                    onChange={() => onChange("published")}
                />

                <label htmlFor="status-published">
                    <div className="status-icon">
                        <i className="fas fa-globe"></i>
                    </div>

                    <div>
                        <div className="status-name">Published</div>
                        <div className="status-info">
                            Visible publicly
                        </div>
                    </div>
                </label>
            </div>

            <div className="status-option">
                <input
                    id="status-draft"
                    type="radio"
                    name="story_status"
                    value="draft"
                    checked={value === "draft"}
                    onChange={() => onChange("draft")}
                />

                <label htmlFor="status-draft">
                    <div className="status-icon">
                        <i className="fas fa-file-pen"></i>
                    </div>

                    <div>
                        <div className="status-name">Draft</div>
                        <div className="status-info">
                            Keep it private
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}