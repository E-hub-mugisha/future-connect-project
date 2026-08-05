import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';


const routes = {
    talentFeedbackStore: '/talent/feedback',
    supportTalent: '/talent/support',
    talentConnectionRequest: (id) => `/connection/${id}/request`,
    storyDetails: (slug) => `/story-details/${slug}`,
    courseDetails: (slug) => `/course/details/${slug}`,
};

function formatRelativeTime(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const intervals = [
        ['year', 31536000],
        ['month', 2592000],
        ['day', 86400],
        ['hour', 3600],
        ['minute', 60],
    ];
    for (const [label, secs] of intervals) {
        const count = Math.floor(seconds / secs);
        if (count >= 1) return `${count} ${label}${count > 1 ? 's' : ''} ago`;
    }
    return 'just now';
}

function StarDisplay({ value, size = '0.85rem' }) {
    return (
        <span style={{ fontSize: size }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < Math.round(value) ? '★' : '☆'}</span>
            ))}
        </span>
    );
}

export default function SkillProfile({ talent, profileUrl }) {
    const [activeTab, setActiveTab] = useState('about');
    const [copied, setCopied] = useState(false);
    const [canNativeShare, setCanNativeShare] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false); 
    const [connectOpen, setConnectOpen] = useState(false);

    useEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.share) {
            setCanNativeShare(true);
        }
    }, []);

    // Lock body scroll while a modal is open, and restore it on close/unmount
    useEffect(() => {
        if (supportOpen || connectOpen) {
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = previousOverflow;
            };
        }
    }, [supportOpen, connectOpen]);

    const feedback = talent.feedback || [];
    const stories = talent.stories || [];
    const courses = talent.courses || [];

    const totalReviews = feedback.length;
    const avgRating = totalReviews
        ? feedback.reduce((acc, f) => acc + (f.rating || 0), 0) / totalReviews
        : 0;

    const starCounts = [5, 4, 3, 2, 1].map((stars) => ({
        stars,
        count: feedback.filter((f) => f.rating === stars).length,
    }));

    const copyProfileLink = () => {
        navigator.clipboard
            .writeText(profileUrl)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
            })
            .catch(() => {
                // Fallback for older browsers
                const input = document.getElementById('profileUrl');
                if (input) {
                    input.select();
                    input.setSelectionRange(0, 99999);
                    document.execCommand('copy');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2500);
                }
            });
    };

    const nativeShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `${talent.name} — Talent Profile`,
                text: `Check out ${talent.name} on our platform!`,
                url: profileUrl,
            });
        }
    };

    // ── Forms ──
    const reviewForm = useForm({
        talent_id: talent.id,
        rating: '',
        name: '',
        email: '',
        comment: '',
    });

    const submitReview = (e) => {
        e.preventDefault();
        reviewForm.post(routes.talentFeedbackStore, {
            preserveScroll: true,
            onSuccess: () => reviewForm.reset(),
        });
    };

    const supportForm = useForm({
        talent_id: talent.id,
        name: '',
        email: '',
        amount: '',
        message: '',
    });

    const submitSupport = (e) => {
        e.preventDefault();
        supportForm.post(routes.supportTalent, {
            preserveScroll: true,
            onSuccess: () => supportForm.reset(),
        });
    };

    const connectForm = useForm({
        message: '',
        name: '',
        email: '',
        phone: '',
    });

    const submitConnect = (e) => {
        e.preventDefault();
        connectForm.post(routes.talentConnectionRequest(talent.id), {
            preserveScroll: true,
            onSuccess: () => connectForm.reset(),
        });
    };

    const tabs = [
        { key: 'about', label: 'About Me' },
        { key: 'stories', label: `Stories (${stories.length})` },
        { key: 'courses', label: `Courses (${courses.length})` },
        { key: 'reviews', label: `Reviews (${feedback.length})` },
    ];

    return (
        <>
            <Head title={talent.name} />
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
                :root {
                    --bg-deep:    #0e1618;
                    --bg-card:    #131e21;
                    --bg-glass:   rgba(255,255,255,0.035);
                    --bg-glass2:  rgba(0,166,103,0.07);
                    --accent:     #48d597;
                    --accent-dim: #008f59;
                    --accent-glow:rgba(0,166,103,0.25);
                    --text-primary:   #f0f4f3;
                    --text-secondary: #8da4a0;
                    --text-muted:     #4d6460;
                    --border:     rgba(255,255,255,0.07);
                    --border-accent: rgba(0,166,103,0.3);
                    --radius-lg:  16px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                }

                .fc-talent-page, .fc-talent-page * { box-sizing: border-box; }
                .fc-talent-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); }

                .talent-page { padding: 40px 0 80px; }

                .hero-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    margin-bottom: 24px;
                    position: relative;
                }
                .hero-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--accent), transparent);
                }

                .talent-photo-wrap {
                    position: relative;
                    height: 100%;
                    min-height: 420px;
                }
                .talent-photo-wrap img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .photo-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to right, transparent 60%, var(--bg-card) 100%);
                }
                .photo-overlay-bottom {
                    position: absolute; bottom: 0; left: 0; right: 0;
                    background: linear-gradient(to top, var(--bg-card) 0%, transparent 50%);
                    height: 120px;
                }

                .talent-info-col { padding: 36px 36px 36px 28px; display: flex; flex-direction: column; justify-content: space-between; }

                .talent-name {
                    font-family: var(--font-head);
                    font-size: 2rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 6px;
                    line-height: 1.1;
                }
                .talent-skill-tag {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    border-radius: var(--radius-pill);
                    padding: 4px 14px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    margin-bottom: 14px;
                }
                .verified-badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    background: rgba(0,166,103,0.12);
                    color: var(--accent);
                    border: 1px solid var(--border-accent);
                    border-radius: var(--radius-pill);
                    padding: 3px 12px;
                    font-size: 0.72rem;
                    font-weight: 600;
                    margin-left: 10px;
                    vertical-align: middle;
                }

                .rating-row { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
                .stars { color: var(--accent); font-size: 0.85rem; letter-spacing: 1px; }
                .rating-num { font-family: var(--font-head); font-weight: 700; font-size: 1rem; color: var(--text-primary); }
                .rating-count { color: var(--text-secondary); font-size: 0.8rem; }

                .about-snippet {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 16px 18px;
                    color: var(--text-secondary);
                    font-size: 0.88rem;
                    line-height: 1.7;
                    margin-bottom: 22px;
                }

                .meta-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 26px; }
                .meta-pill {
                    display: flex; align-items: center; gap: 8px;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    padding: 8px 16px;
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    transition: border-color 0.2s, color 0.2s;
                }
                .meta-pill:hover { border-color: var(--border-accent); color: var(--accent); }
                .meta-pill i { color: var(--accent); font-size: 0.9rem; }
                .meta-pill strong { color: var(--text-primary); margin-right: 2px; }

                .action-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
                .btn-support {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    color: #fff;
                    border: none;
                    border-radius: var(--radius-pill);
                    padding: 11px 24px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
                    box-shadow: 0 4px 20px var(--accent-glow);
                    text-decoration: none;
                }
                .btn-support:hover { background: var(--accent-dim); transform: translateY(-1px); box-shadow: 0 6px 28px var(--accent-glow); color: #fff; }
                .btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent;
                    color: var(--text-primary);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    padding: 11px 24px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                    text-decoration: none;
                }
                .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: var(--bg-glass2); }

                .share-section { border-top: 1px solid var(--border); padding-top: 20px; }
                .share-label {
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-muted);
                    font-weight: 600;
                    margin-bottom: 12px;
                }
                .share-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

                .copy-link-wrap {
                    display: flex;
                    align-items: center;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    overflow: hidden;
                    flex: 1;
                    min-width: 200px;
                    max-width: 360px;
                    transition: border-color 0.2s;
                }
                .copy-link-wrap:focus-within { border-color: var(--border-accent); }
                .copy-link-wrap .profile-url {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 0.78rem;
                    padding: 9px 14px;
                    flex: 1;
                    min-width: 0;
                    outline: none;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .btn-copy {
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    padding: 9px 16px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                    white-space: nowrap;
                    font-family: var(--font-head);
                    letter-spacing: 0.03em;
                }
                .btn-copy:hover { background: var(--accent-dim); }
                .btn-copy.copied { background: #1a7a50; }

                .social-icon-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 36px; height: 36px;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 50%;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.85rem;
                    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
                }
                .social-icon-btn:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); transform: translateY(-2px); }

                .btn-native-share {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    color: var(--text-secondary);
                    padding: 8px 16px;
                    font-size: 0.78rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                    font-family: var(--font-body);
                }
                .btn-native-share:hover { border-color: var(--border-accent); color: var(--accent); }

                .profile-tabs {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                }
                .tab-nav {
                    display: flex;
                    border-bottom: 1px solid var(--border);
                    overflow-x: auto;
                    scrollbar-width: none;
                }
                .tab-nav::-webkit-scrollbar { display: none; }
                .tab-nav-item {
                    flex-shrink: 0;
                    padding: 16px 28px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--text-muted);
                    cursor: pointer;
                    border: none;
                    background: transparent;
                    border-bottom: 2px solid transparent;
                    margin-bottom: -1px;
                    transition: color 0.2s, border-color 0.2s;
                    letter-spacing: 0.03em;
                }
                .tab-nav-item.active { color: var(--accent); border-bottom-color: var(--accent); }
                .tab-nav-item:hover { color: var(--text-primary); }

                .tab-body { padding: 32px; }
                .tab-pane { display: none; }
                .tab-pane.active { display: block; animation: fadeIn 0.3s ease; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

                .section-head {
                    display: flex; align-items: baseline; gap: 14px;
                    margin-bottom: 24px;
                }
                .section-head h3 {
                    font-family: var(--font-head);
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0;
                }
                .section-head .count-badge {
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    border-radius: var(--radius-pill);
                    padding: 2px 10px;
                    font-size: 0.72rem;
                    font-weight: 600;
                }

                .card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 18px; }
                .content-card {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: border-color 0.25s, transform 0.2s;
                }
                .content-card:hover { border-color: var(--border-accent); transform: translateY(-3px); }
                .content-card-img { position: relative; height: 170px; overflow: hidden; }
                .content-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s ease; }
                .content-card:hover .content-card-img img { transform: scale(1.04); }
                .card-cat {
                    position: absolute; top: 10px; left: 10px;
                    background: var(--accent);
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 3px 10px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                }
                .content-card-body { padding: 14px 16px; }
                .content-card-body h5 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
                .content-card-body h5 a { color: inherit; text-decoration: none; }
                .content-card-body h5 a:hover { color: var(--accent); }
                .card-meta { display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); }
                .card-meta .stars-sm { color: var(--accent); }

                .review-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
                @media(max-width: 768px) { .review-layout { grid-template-columns: 1fr; } }

                .rating-summary {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 24px;
                    margin-bottom: 24px;
                    display: flex;
                    align-items: center;
                    gap: 32px;
                }
                .avg-score {
                    text-align: center;
                    flex-shrink: 0;
                }
                .avg-number { font-family: var(--font-head); font-size: 3.5rem; font-weight: 800; color: var(--accent); line-height: 1; }
                .avg-out-of { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
                .avg-stars { color: var(--accent); font-size: 1.1rem; margin: 6px 0; }
                .avg-count { font-size: 0.75rem; color: var(--text-secondary); }

                .bars-wrap { flex: 1; }
                .bar-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
                .bar-label { font-size: 0.75rem; color: var(--text-secondary); width: 52px; flex-shrink: 0; }
                .bar-track { flex: 1; height: 6px; background: rgba(255,255,255,0.07); border-radius: 6px; overflow: hidden; }
                .bar-fill { height: 100%; background: var(--accent); border-radius: 6px; transition: width 1s ease; }
                .bar-count { font-size: 0.72rem; color: var(--text-muted); width: 24px; text-align: right; }

                .review-list { display: flex; flex-direction: column; gap: 16px; max-height: 480px; overflow-y: auto; padding-right: 6px; }
                .review-list::-webkit-scrollbar { width: 4px; }
                .review-list::-webkit-scrollbar-track { background: transparent; }
                .review-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

                .review-item {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 16px 18px;
                    transition: border-color 0.2s;
                }
                .review-item:hover { border-color: var(--border-accent); }
                .reviewer-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
                .reviewer-avatar {
                    width: 38px; height: 38px; border-radius: 50%;
                    object-fit: cover;
                    border: 1px solid var(--border-accent);
                    flex-shrink: 0;
                }
                .reviewer-name { font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
                .reviewer-time { font-size: 0.72rem; color: var(--text-muted); }
                .reviewer-stars { color: var(--accent); font-size: 0.75rem; margin-left: auto; }
                .review-comment { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.6; }

                .review-form-card {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 28px;
                }
                .review-form-card h4 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; }
                .form-label { font-size: 0.8rem; font-weight: 500; color: var(--text-secondary); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    color: var(--text-primary);
                    padding: 11px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.2s;
                    margin-bottom: 14px;
                }
                .form-control-dark:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
                .form-control-dark::placeholder { color: var(--text-muted); }
                textarea.form-control-dark { resize: vertical; min-height: 90px; }

                .star-input-wrap { display: flex; flex-direction: row-reverse; gap: 4px; margin-bottom: 16px; }
                .star-input-wrap input[type="radio"] { display: none; }
                .star-input-wrap label {
                    font-size: 1.4rem;
                    color: var(--border);
                    cursor: pointer;
                    transition: color 0.15s;
                }
                .star-input-wrap input[type="radio"]:checked ~ label,
                .star-input-wrap label:hover,
                .star-input-wrap label:hover ~ label { color: var(--accent); }

                .btn-submit-review {
                    width: 100%;
                    background: var(--accent);
                    border: none;
                    border-radius: var(--radius-pill);
                    color: #fff;
                    padding: 12px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s, box-shadow 0.2s;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-submit-review:hover { background: var(--accent-dim); box-shadow: 0 6px 28px var(--accent-glow); }
                .btn-submit-review:disabled { opacity: 0.6; cursor: not-allowed; }

                .empty-state {
                    text-align: center; padding: 48px 24px;
                    color: var(--text-muted); font-size: 0.9rem;
                }
                .empty-state i { font-size: 2rem; margin-bottom: 10px; display: block; color: var(--text-muted); }

                .about-full {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 28px;
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    line-height: 1.9;
                }

                /* ── MODAL (custom, no Bootstrap JS dependency) ── */
                .fc-modal-backdrop {
                    position: fixed; inset: 0; background: rgba(0,0,0,.6);
                    display: flex; align-items: flex-start; justify-content: center;
                    z-index: 1050; padding: 3rem 1rem;
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }
                .modal-dark {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    color: var(--text-primary);
                    width: 100%;
                    max-width: 520px;
                    margin: auto 0;
                    max-height: calc(100vh - 6rem);
                    display: flex;
                    flex-direction: column;
                }
                .modal-dark .modal-header {
                    border-bottom: 1px solid var(--border);
                    padding: 20px 24px 18px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    flex-shrink: 0;
                }
                .modal-dark .modal-title {
                    font-family: var(--font-head);
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                }
                .modal-dark .accent-bar {
                    display: block; width: 32px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 5px;
                }
                .modal-dark .modal-body {
                    padding: 24px;
                    overflow-y: auto;
                }
                .modal-dark .btn-close {
                    background: transparent;
                    border: none;
                    color: var(--text-primary);
                    filter: invert(1) brightness(0.6);
                    font-size: 1.1rem;
                    cursor: pointer;
                }
                [data-h-theme="light"] .modal-dark .btn-close { filter: none; }

                /* Responsive */
                @media(max-width: 768px) {
                    .talent-info-col { padding: 24px 20px; }
                    .talent-name { font-size: 1.5rem; }
                    .tab-body { padding: 20px; }
                    .copy-link-wrap { min-width: 160px; }
                    .fc-modal-backdrop { padding: 1.5rem 1rem; }
                    .modal-dark { max-height: calc(100vh - 3rem); }
                }

                /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
                [data-h-theme="light"] {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-glass:   rgba(0,100,60,0.035);
                    --bg-glass2:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #7f958d;
                    --border:     rgba(0,100,60,0.1);
                    --border-accent: rgba(0,166,103,0.3);
                }

                /* Photo overlay gradients were tuned for a dark card bg — they still
                   resolve correctly via --bg-card, no override needed there. But the
                   bottom overlay's transparent-to-card fade can look slightly flat on
                   white, so soften it a touch. */
                [data-h-theme="light"] .photo-overlay-bottom {
                    background: linear-gradient(to top, var(--bg-card) 0%, transparent 60%);
                }

                /* Support/outline buttons keep white text on solid green already via
                   #fff literal — fine. Bar track background hardcoded to white-based
                   translucency, adjust for light bg */
                [data-h-theme="light"] .bar-track {
                    background: rgba(0,100,60,0.08);
                }

                /* form-control-dark background hardcoded to white-based translucency */
                [data-h-theme="light"] .form-control-dark {
                    background: rgba(0,100,60,0.03);
                }

                /* Star rating input default (unfilled) color uses --border, which is
                   already theme-aware — no override needed. */
            `}</style>

            <div className="fc-talent-page">
                <div className="talent-page">
                    <div className="container">
                        {/* ═══════════════ HERO CARD ═══════════════ */}
                        <div className="hero-card">
                            <div className="row g-0">
                                {/* Photo */}
                                <div className="col-md-4">
                                    <div className="talent-photo-wrap">
                                        <img
                                            src={talent.image ? `/${talent.image}` : '/assets/img/user/profile.jpg'}
                                            alt={talent.name}
                                        />
                                        <div className="photo-overlay" />
                                        <div className="photo-overlay-bottom" />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="col-md-8">
                                    <div className="talent-info-col">
                                        <div>
                                            <div className="talent-skill-tag">
                                                <i className="ti ti-sparkles" />
                                                {talent.category?.name ?? 'Talent'}
                                            </div>
                                            <h1 className="talent-name">
                                                {talent.name}
                                                <span className="verified-badge">
                                                    <i className="ti ti-discount-check-filled" /> Verified
                                                </span>
                                            </h1>

                                            <div className="rating-row mb-3">
                                                <span className="stars">
                                                    <StarDisplay value={avgRating} />
                                                </span>
                                                <span className="rating-num">{avgRating.toFixed(1)}</span>
                                                <span className="rating-count">({totalReviews} reviews)</span>
                                            </div>

                                            <div className="about-snippet">
                                                I'm {talent.name || 'this talent'}, a passionate {talent.skill || 'performer'}{' '}
                                                blending {talent.category?.name || 'various disciplines'}. I create immersive
                                                experiences that inspire and uplift communities.
                                            </div>

                                            <div className="meta-pills">
                                                <div className="meta-pill">
                                                    <i className="ti ti-map-pin" />
                                                    <span>
                                                        <strong>Based in</strong> {talent.address}
                                                    </span>
                                                </div>
                                                <div className="meta-pill">
                                                    <i className="ti ti-calendar-event" />
                                                    <span>
                                                        <strong>Since</strong>{' '}
                                                        {talent.created_at &&
                                                            new Date(talent.created_at).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                year: 'numeric',
                                                            })}
                                                    </span>
                                                </div>
                                                <div className="meta-pill">
                                                    <i className="ti ti-language" />
                                                    <span>
                                                        <strong>Speaks</strong> {talent.language}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="action-row">
                                                <button className="btn-support" onClick={() => setSupportOpen(true)}>
                                                    <i className="ti ti-heart" /> Support Talent
                                                </button>
                                                <button className="btn-outline" onClick={() => setConnectOpen(true)}>
                                                    <i className="ti ti-user-plus" /> Connect
                                                </button>
                                            </div>
                                        </div>

                                        {/* Share Section */}
                                        <div className="share-section">
                                            <p className="share-label">Share Profile</p>
                                            <div className="share-row">
                                                <div className="copy-link-wrap">
                                                    <input
                                                        type="text"
                                                        className="profile-url"
                                                        id="profileUrl"
                                                        value={profileUrl}
                                                        readOnly
                                                    />
                                                    <button className={`btn-copy ${copied ? 'copied' : ''}`} onClick={copyProfileLink}>
                                                        <i className={`ti ${copied ? 'ti-check' : 'ti-copy'}`} />{' '}
                                                        {copied ? 'Copied!' : 'Copy'}
                                                    </button>
                                                </div>

                                                {canNativeShare && (
                                                    <button className="btn-native-share" onClick={nativeShare}>
                                                        <i className="ti ti-share" /> Share
                                                    </button>
                                                )}

                                                <a
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="social-icon-btn"
                                                    title="Share on Facebook"
                                                >
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                                <a
                                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                                        profileUrl
                                                    )}&text=${encodeURIComponent(`Check out ${talent.name} on our platform!`)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="social-icon-btn"
                                                    title="Share on X"
                                                >
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                                <a
                                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                                        profileUrl
                                                    )}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="social-icon-btn"
                                                    title="Share on LinkedIn"
                                                >
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                                <a
                                                    href={`https://wa.me/?text=${encodeURIComponent(
                                                        `Check out ${talent.name} — ${profileUrl}`
                                                    )}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="social-icon-btn"
                                                    title="Share on WhatsApp"
                                                >
                                                    <i className="fa-brands fa-whatsapp" />
                                                </a>
                                                <a
                                                    href={`mailto:?subject=${encodeURIComponent(
                                                        `Talent Profile: ${talent.name}`
                                                    )}&body=${encodeURIComponent(
                                                        `Hey! Check out this talent profile: ${profileUrl}`
                                                    )}`}
                                                    className="social-icon-btn"
                                                    title="Share via Email"
                                                >
                                                    <i className="ti ti-mail" />
                                                </a>
                                            </div>
                                            {copied && (
                                                <p style={{ fontSize: '0.75rem', color: 'var(--accent)', marginTop: 8 }}>
                                                    <i className="ti ti-check" /> Link copied to clipboard!
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ═══════════════ TABS ═══════════════ */}
                        <div className="profile-tabs">
                            <div className="tab-nav">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.key}
                                        className={`tab-nav-item ${activeTab === tab.key ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="tab-body">
                                {/* ABOUT */}
                                <div className={`tab-pane ${activeTab === 'about' ? 'active' : ''}`}>
                                    <div className="section-head">
                                        <h3>About {talent.name}</h3>
                                    </div>
                                    <div className="about-full">
                                        <p>
                                            Hello, I'm {talent.name || 'Unnamed Talent'}, a passionate{' '}
                                            {talent.skill || 'creative'} and performer blending{' '}
                                            {talent.category?.name || 'various disciplines'}. I create immersive experiences
                                            that inspire and uplift communities. My journey has been driven by a deep love
                                            for the art and a commitment to bringing authentic storytelling and performance
                                            to every audience I meet.
                                        </p>
                                        {talent.bio && <p style={{ marginTop: 16 }}>{talent.bio}</p>}
                                    </div>
                                </div>

                                {/* STORIES */}
                                <div className={`tab-pane ${activeTab === 'stories' ? 'active' : ''}`}>
                                    <div className="section-head">
                                        <h3>Stories</h3>
                                        {stories.length > 0 && <span className="count-badge">{stories.length}</span>}
                                    </div>

                                    {stories.length > 0 ? (
                                        <div className="card-grid">
                                            {stories.map((story) => {
                                                const storyAvg = story.comments?.length
                                                    ? story.comments.reduce((a, c) => a + (c.rating || 0), 0) /
                                                      story.comments.length
                                                    : 0;
                                                return (
                                                    <div className="content-card" key={story.id}>
                                                        <div className="content-card-img">
                                                            <img src="/assets/img/placeholder.jpg" alt={story.title} />
                                                            <span className="card-cat">{story.category?.name ?? 'Story'}</span>
                                                        </div>
                                                        <div className="content-card-body">
                                                            <h5>
                                                                <a href={routes.storyDetails(story.slug)}>{story.title}</a>
                                                            </h5>
                                                            <div className="card-meta">
                                                                <span className="stars-sm">
                                                                    <StarDisplay value={storyAvg} size="0.75rem" />
                                                                </span>
                                                                <span>
                                                                    {storyAvg.toFixed(1)} ({story.comments?.length ?? 0})
                                                                </span>
                                                                <span>{story.tags}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="empty-state">
                                            <i className="ti ti-book-off" />
                                            No stories published yet.
                                        </div>
                                    )}
                                </div>

                                {/* COURSES */}
                                <div className={`tab-pane ${activeTab === 'courses' ? 'active' : ''}`}>
                                    <div className="section-head">
                                        <h3>Courses</h3>
                                        {courses.length > 0 && <span className="count-badge">{courses.length}</span>}
                                    </div>

                                    {courses.length > 0 ? (
                                        <div className="card-grid">
                                            {courses.map((course) => {
                                                const courseAvg = course.feedback?.length
                                                    ? course.feedback.reduce((a, f) => a + (f.rating || 0), 0) /
                                                      course.feedback.length
                                                    : 0;
                                                return (
                                                    <div className="content-card" key={course.id}>
                                                        <div className="content-card-img">
                                                            <a href={routes.courseDetails(course.slug)}>
                                                                <img
                                                                    src={`/images/thumbnails/${course.thumbnail}`}
                                                                    alt={course.title}
                                                                />
                                                            </a>
                                                            <span className="card-cat">{course.category?.name ?? 'Course'}</span>
                                                        </div>
                                                        <div className="content-card-body">
                                                            <h5>
                                                                <a href={routes.courseDetails(course.slug)}>{course.title}</a>
                                                            </h5>
                                                            <div className="card-meta">
                                                                <span className="stars-sm">
                                                                    <StarDisplay value={courseAvg} size="0.75rem" />
                                                                </span>
                                                                <span>
                                                                    {courseAvg.toFixed(1)} ({course.feedback?.length ?? 0})
                                                                </span>
                                                                <span>{course.tags}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="empty-state">
                                            <i className="ti ti-school-off" />
                                            No courses available yet.
                                        </div>
                                    )}
                                </div>

                                {/* REVIEWS */}
                                <div className={`tab-pane ${activeTab === 'reviews' ? 'active' : ''}`}>
                                    <div className="review-layout">
                                        {/* Left: ratings + list */}
                                        <div>
                                            <div className="rating-summary">
                                                <div className="avg-score">
                                                    <div className="avg-number">{avgRating.toFixed(1)}</div>
                                                    <div className="avg-stars">
                                                        <StarDisplay value={avgRating} size="1.1rem" />
                                                    </div>
                                                    <div className="avg-count">{totalReviews} reviews</div>
                                                </div>
                                                <div className="bars-wrap">
                                                    {starCounts.map(({ stars, count }) => {
                                                        const pct = totalReviews ? (count / totalReviews) * 100 : 0;
                                                        return (
                                                            <div className="bar-row" key={stars}>
                                                                <span className="bar-label">{stars} star</span>
                                                                <div className="bar-track">
                                                                    <div className="bar-fill" style={{ width: `${pct}%` }} />
                                                                </div>
                                                                <span className="bar-count">{count}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            <div className="section-head">
                                                <h3>All Reviews</h3>
                                                <span className="count-badge">{totalReviews}</span>
                                            </div>

                                            <div className="review-list">
                                                {feedback.length > 0 ? (
                                                    feedback.map((fb) => (
                                                        <div className="review-item" key={fb.id}>
                                                            <div className="reviewer-head">
                                                                <img
                                                                    src="/assets/img/user/profile.jpg"
                                                                    className="reviewer-avatar"
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <div className="reviewer-name">{fb.name}</div>
                                                                    <div className="reviewer-time">
                                                                        {formatRelativeTime(fb.created_at)}
                                                                    </div>
                                                                </div>
                                                                <span className="reviewer-stars ms-auto">
                                                                    <StarDisplay value={fb.rating} size="0.75rem" />
                                                                </span>
                                                            </div>
                                                            <p className="review-comment">{fb.comment}</p>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="empty-state">
                                                        <i className="ti ti-message-off" />
                                                        No reviews yet.
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right: submit form */}
                                        <div>
                                            <div className="review-form-card">
                                                <h4>Leave a Review</h4>
                                                <form onSubmit={submitReview}>
                                                    <label className="form-label">
                                                        Your Rating <span style={{ color: 'var(--accent)' }}>*</span>
                                                    </label>
                                                    <div className="star-input-wrap">
                                                        {[5, 4, 3, 2, 1].map((star) => (
                                                            <React.Fragment key={star}>
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    id={`s${star}`}
                                                                    value={star}
                                                                    checked={reviewForm.data.rating === String(star)}
                                                                    onChange={() => reviewForm.setData('rating', String(star))}
                                                                    required
                                                                />
                                                                <label htmlFor={`s${star}`} title={`${star} star${star > 1 ? 's' : ''}`}>
                                                                    ★
                                                                </label>
                                                            </React.Fragment>
                                                        ))}
                                                    </div>

                                                    <div className="row g-3" style={{ marginBottom: 0 }}>
                                                        <div className="col-6">
                                                            <label className="form-label">
                                                                Name <span style={{ color: 'var(--accent)' }}>*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control-dark"
                                                                placeholder="Your name"
                                                                value={reviewForm.data.name}
                                                                onChange={(e) => reviewForm.setData('name', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <label className="form-label">
                                                                Email <span style={{ color: 'var(--accent)' }}>*</span>
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control-dark"
                                                                placeholder="you@mail.com"
                                                                value={reviewForm.data.email}
                                                                onChange={(e) => reviewForm.setData('email', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <label className="form-label" style={{ marginTop: 2 }}>
                                                        Your Review <span style={{ color: 'var(--accent)' }}>*</span>
                                                    </label>
                                                    <textarea
                                                        className="form-control-dark"
                                                        placeholder="Share your experience…"
                                                        value={reviewForm.data.comment}
                                                        onChange={(e) => reviewForm.setData('comment', e.target.value)}
                                                        required
                                                    />

                                                    <button
                                                        type="submit"
                                                        className="btn-submit-review"
                                                        disabled={reviewForm.processing}
                                                    >
                                                        {reviewForm.processing ? 'Submitting…' : 'Submit Review'}
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════ SUPPORT MODAL ═══════════════ */}
                {supportOpen && (
                    <div className="fc-modal-backdrop" onClick={() => setSupportOpen(false)}>
                        <div className="modal-dark" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <div>
                                    <h5 className="modal-title">Support {talent.name}</h5>
                                    <span className="accent-bar" />
                                </div>
                                <button className="btn-close" onClick={() => setSupportOpen(false)}>
                                    ✕
                                </button>
                            </div>
                            <div className="modal-body">
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 20 }}>
                                    Your contribution helps this talent grow and create more incredible work.
                                </p>
                                <form onSubmit={submitSupport}>
                                    <label className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control-dark"
                                        placeholder="John Doe"
                                        value={supportForm.data.name}
                                        onChange={(e) => supportForm.setData('name', e.target.value)}
                                        required
                                    />

                                    <label className="form-label">Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control-dark"
                                        placeholder="you@example.com"
                                        value={supportForm.data.email}
                                        onChange={(e) => supportForm.setData('email', e.target.value)}
                                        required
                                    />

                                    <label className="form-label">Support Amount (RWF)</label>
                                    <input
                                        type="number"
                                        className="form-control-dark"
                                        placeholder="e.g. 5000"
                                        min="1"
                                        value={supportForm.data.amount}
                                        onChange={(e) => supportForm.setData('amount', e.target.value)}
                                        required
                                    />

                                    <label className="form-label">Message (Optional)</label>
                                    <textarea
                                        className="form-control-dark"
                                        rows={3}
                                        placeholder="Write a short note..."
                                        value={supportForm.data.message}
                                        onChange={(e) => supportForm.setData('message', e.target.value)}
                                    />

                                    <button type="submit" className="btn-submit-review" disabled={supportForm.processing}>
                                        <i className="ti ti-heart me-2" />{' '}
                                        {supportForm.processing ? 'Sending…' : 'Send Support'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* ═══════════════ CONNECT MODAL ═══════════════ */}
                {connectOpen && (
                    <div className="fc-modal-backdrop" onClick={() => setConnectOpen(false)}>
                        <div className="modal-dark" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <div>
                                    <h5 className="modal-title">Connect with {talent.name}</h5>
                                    <span className="accent-bar" />
                                </div>
                                <button className="btn-close" onClick={() => setConnectOpen(false)}>
                                    ✕
                                </button>
                            </div>
                            <div className="modal-body">
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 20 }}>
                                    Send a connection request and introduce yourself.
                                </p>
                                <form onSubmit={submitConnect}>
                                    <div className="mb-3">
                                        <label className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control-dark"
                                            placeholder="Enter your name"
                                            value={connectForm.data.name}
                                            onChange={(e) => connectForm.setData('name', e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Email</label>
                                        <input
                                            type="email"
                                            className="form-control-dark"
                                            placeholder="Enter your email"
                                            value={connectForm.data.email}
                                            onChange={(e) => connectForm.setData('email', e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control-dark"
                                            placeholder="Enter your phone number"
                                            value={connectForm.data.phone}
                                            onChange={(e) => connectForm.setData('phone', e.target.value)}
                                        />
                                    </div>
                                    <label className="form-label">Your Message</label>
                                    <textarea
                                        className="form-control-dark"
                                        rows={4}
                                        placeholder="Hi! I'd love to connect…"
                                        value={connectForm.data.message}
                                        onChange={(e) => connectForm.setData('message', e.target.value)}
                                    />
                                    <button type="submit" className="btn-submit-review" disabled={connectForm.processing}>
                                        <i className="ti ti-user-plus me-2" />{' '}
                                        {connectForm.processing ? 'Sending…' : 'Send Request'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

SkillProfile.layout = (page) => <GuestLayout children={page} title="Skill Profile" />;