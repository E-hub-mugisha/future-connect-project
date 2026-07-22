import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const routes = {
    storyCommentStore: '/story/comment/store',
    verifyEmail: '/video/verify-email',
    talentDetails: (id) => `/skills/${id}`,
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

export default function StoryDetails({ story }) {
    const [activeTab, setActiveTab] = useState('description');
    const [verifyOpen, setVerifyOpen] = useState(false);
    const [thumbnailVisible, setThumbnailVisible] = useState(true);

    const playerMountRef = useRef(null);
    const playerInstanceRef = useRef(null);
    const checkIntervalRef = useRef(null);
    const PAUSE_AT_SECONDS = 30;

    const comments = story.comments || [];
    const totalReviews = comments.length;
    const avgRating = totalReviews
        ? comments.reduce((acc, c) => acc + (c.rating || 0), 0) / totalReviews
        : 0;

    const starCounts = [5, 4, 3, 2, 1].map((stars) => ({
        stars,
        count: comments.filter((c) => c.rating === stars).length,
    }));

    const feedback = story.talent?.feedback || [];
    const talentAvg = feedback.length
        ? feedback.reduce((acc, f) => acc + (f.rating || 0), 0) / feedback.length
        : 0;

    const videoId = useMemo(() => {
        if (!story.media) return null;
        const match = story.media.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    }, [story.media]);

    const hasVideo = Boolean(videoId && story.thumbnail);

    // ── YouTube IFrame API setup ──
    useEffect(() => {
        if (!hasVideo) return;

        function createPlayer() {
            playerInstanceRef.current = new window.YT.Player(playerMountRef.current, {
                height: '100%',
                width: '100%',
                videoId,
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                    rel: 0,
                    modestbranding: 1,
                },
                events: {
                    onStateChange: handlePlayerStateChange,
                },
            });
        }

        if (window.YT && window.YT.Player) {
            createPlayer();
        } else {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            const previousReady = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                previousReady?.();
                createPlayer();
            };
        }

        return () => {
            clearInterval(checkIntervalRef.current);
            playerInstanceRef.current?.destroy?.();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasVideo, videoId]);

    function handlePlayerStateChange(event) {
        if (event.data === window.YT.PlayerState.PLAYING) {
            checkIntervalRef.current = setInterval(() => {
                const currentTime = playerInstanceRef.current?.getCurrentTime?.() ?? 0;
                if (currentTime >= PAUSE_AT_SECONDS) {
                    playerInstanceRef.current?.pauseVideo();
                    clearInterval(checkIntervalRef.current);
                    setVerifyOpen(true);
                }
            }, 500);
        } else {
            clearInterval(checkIntervalRef.current);
        }
    }

    const handlePlayClick = () => {
        setThumbnailVisible(false);
        playerInstanceRef.current?.playVideo();
    };

    // Lock body scroll while the verify modal is open
    useEffect(() => {
        if (verifyOpen) {
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = previousOverflow;
            };
        }
    }, [verifyOpen]);

    // ── Forms ──
    const verifyForm = useForm({
        story_id: story.id,
        video_id: videoId,
        email: '',
    });

    const submitVerify = (e) => {
        e.preventDefault();
        verifyForm.post(routes.verifyEmail, {
            preserveScroll: true,
            onSuccess: () => {
                setVerifyOpen(false);
                playerInstanceRef.current?.playVideo();
            },
        });
    };

    const reviewForm = useForm({
        story_id: story.id,
        rating: '',
        name: '',
        email: '',
        comment: '',
    });

    const submitReview = (e) => {
        e.preventDefault();
        reviewForm.post(routes.storyCommentStore, {
            preserveScroll: true,
            onSuccess: () => reviewForm.reset(),
        });
    };

    const stats = [
        { icon: 'ti-photo-star', label: 'Total Ratings', value: totalReviews ? avgRating.toFixed(1) : '—' },
        { icon: 'ti-heart', label: 'Total Likes', value: story.likes ?? 320 },
        { icon: 'ti-message-chatbot', label: 'Comments', value: `${totalReviews} Comment${totalReviews === 1 ? '' : 's'}` },
        { icon: 'ti-eye', label: 'Profile Views', value: story.views ?? '1,100' },
    ];

    const statusMeta = {
        approved: { label: 'Approved', className: 'status-approved' },
        pending: { label: 'Pending', className: 'status-pending' },
    };
    const status = statusMeta[story.status] ?? null;

    const tabs = [
        { key: 'description', label: 'Description' },
        { key: 'reviews', label: `Reviews (${totalReviews})` },
    ];

    return (
        <>
            <Head title={story.title} />
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
                    --warn:       #e8b94a;
                }

                .fc-story-page, .fc-story-page * { box-sizing: border-box; }
                .fc-story-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); }

                .story-page { padding: 40px 0 80px; }

                .story-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    margin-bottom: 24px;
                    position: relative;
                }
                .story-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--accent), transparent);
                }

                /* ── Video ── */
                .video-wrapper {
                    position: relative;
                    width: 100%;
                    padding-top: 56.25%;
                    background: #000;
                    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
                    overflow: hidden;
                }
                .video-mount, .video-thumbnail {
                    position: absolute; inset: 0;
                }
                .video-thumbnail { cursor: pointer; background: #000; }
                .video-thumbnail img { width: 100%; height: 100%; object-fit: cover; display: block; }
                .play-btn {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    background: #fff;
                    color: #111;
                    display: flex; align-items: center; gap: 10px;
                    padding: 12px 24px;
                    border-radius: var(--radius-pill);
                    box-shadow: 0 8px 28px rgba(0,0,0,0.4);
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.9rem;
                    transition: transform 0.2s;
                }
                .video-thumbnail:hover .play-btn { transform: translate(-50%, -50%) scale(1.05); }
                .play-btn i { color: #e0483e; }

                /* ── Stats row ── */
                .stat-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1px;
                    background: var(--border);
                    border-top: 1px solid var(--border);
                    border-bottom: 1px solid var(--border);
                }
                @media(max-width: 640px) { .stat-grid { grid-template-columns: repeat(2, 1fr); } }
                .stat-cell {
                    background: var(--bg-card);
                    padding: 22px 18px;
                    text-align: center;
                }
                .stat-cell i { font-size: 1.3rem; color: var(--accent); margin-bottom: 8px; display: block; }
                .stat-cell p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin: 0 0 4px; }
                .stat-cell h6 { font-family: var(--font-head); font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin: 0; }

                /* ── Tabs (shared pattern) ── */
                .tab-nav {
                    display: flex;
                    border-bottom: 1px solid var(--border);
                    overflow-x: auto;
                    scrollbar-width: none;
                    padding: 0 8px;
                }
                .tab-nav::-webkit-scrollbar { display: none; }
                .tab-nav-item {
                    flex-shrink: 0;
                    padding: 18px 24px;
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

                .story-title { font-family: var(--font-head); font-size: 1.4rem; font-weight: 800; margin-bottom: 14px; color: var(--text-primary); }
                .story-body { color: var(--text-secondary); font-size: 0.92rem; line-height: 1.9; white-space: pre-line; }

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

                /* ── Reviews ── */
                .review-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
                @media(max-width: 900px) { .review-layout { grid-template-columns: 1fr; } }

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
                .avg-score { text-align: center; flex-shrink: 0; }
                .avg-number { font-family: var(--font-head); font-size: 3.5rem; font-weight: 800; color: var(--accent); line-height: 1; }
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
                .reviewer-avatar { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-accent); flex-shrink: 0; }
                .reviewer-name { font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
                .reviewer-time { font-size: 0.72rem; color: var(--text-muted); }
                .reviewer-stars { color: var(--accent); font-size: 0.75rem; margin-left: auto; }
                .review-comment { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 10px; }
                .reply-link {
                    display: inline-flex; align-items: center; gap: 6px;
                    font-size: 0.72rem; color: var(--text-muted);
                    background: var(--bg-glass2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    cursor: pointer;
                    transition: color 0.2s, border-color 0.2s;
                }
                .reply-link:hover { color: var(--accent); border-color: var(--border-accent); }

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
                .star-input-wrap label { font-size: 1.4rem; color: var(--border); cursor: pointer; transition: color 0.15s; }
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

                .empty-state { text-align: center; padding: 48px 24px; color: var(--text-muted); font-size: 0.9rem; }
                .empty-state i { font-size: 2rem; margin-bottom: 10px; display: block; color: var(--text-muted); }

                /* ── Sidebar ── */
                .sidebar-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 26px;
                    margin-bottom: 24px;
                }
                .sidebar-story-title {
                    font-family: var(--font-head);
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 16px;
                    line-height: 1.3;
                }
                .info-links { list-style: none; margin: 0 0 22px; padding: 0; }
                .info-links li {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 0.82rem;
                    color: var(--text-secondary);
                    padding: 9px 0;
                    border-bottom: 1px solid var(--border);
                }
                .info-links li:last-child { border-bottom: none; padding-bottom: 0; }
                .info-links li i { color: var(--accent); font-size: 0.95rem; }
                .status-pill {
                    display: inline-flex; align-items: center; gap: 6px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.72rem;
                    font-weight: 600;
                }
                .status-approved { background: rgba(0,166,103,0.14); color: var(--accent); border: 1px solid var(--border-accent); }
                .status-pending { background: rgba(232,185,74,0.14); color: var(--warn); border: 1px solid rgba(232,185,74,0.35); }

                .talent-mini { display: flex; align-items: center; gap: 14px; padding: 18px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-bottom: 18px; }
                .talent-mini img { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-accent); flex-shrink: 0; }
                .talent-mini h5 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; display: flex; align-items: center; gap: 6px; }
                .talent-mini h5 i { color: var(--accent); font-size: 0.9rem; }
                .talent-mini p { font-size: 0.78rem; color: var(--text-secondary); margin: 0; }

                .tag-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 22px; font-size: 0.82rem; color: var(--text-secondary); }
                .tag-row i { color: var(--accent); margin-top: 2px; }

                .btn-outline {
                    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
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
                    width: 100%;
                }
                .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: var(--bg-glass2); }

                .share-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 16px; }
                .share-icons { display: flex; gap: 10px; flex-wrap: wrap; }
                .social-icon-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 38px; height: 38px;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 50%;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
                }
                .social-icon-btn:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); transform: translateY(-2px); }

                /* ── Modal (matches SkillProfile pattern) ── */
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
                    max-width: 480px;
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
                .modal-dark .modal-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0; }
                .modal-dark .accent-bar { display: block; width: 32px; height: 3px; background: var(--warn); border-radius: 2px; margin-top: 5px; }
                .modal-dark .modal-body { padding: 24px; overflow-y: auto; }
                .modal-dark .modal-footer { padding: 0 24px 24px; display: flex; gap: 10px; }
                .modal-dark .modal-footer .btn-submit-review { flex: 1; }
                .modal-dark .btn-cancel {
                    flex: 1;
                    background: transparent;
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                }
                .modal-dark .btn-cancel:hover { border-color: var(--border-accent); color: var(--accent); }
                .modal-dark .btn-close {
                    background: transparent; border: none; color: var(--text-primary);
                    filter: invert(1) brightness(0.6); font-size: 1.1rem; cursor: pointer;
                }
                [data-h-theme="light"] .modal-dark .btn-close { filter: none; }

                @media(max-width: 768px) {
                    .tab-body { padding: 20px; }
                    .sidebar-card { padding: 20px; }
                    .fc-modal-backdrop { padding: 1.5rem 1rem; }
                    .modal-dark { max-height: calc(100vh - 3rem); }
                }

                /* ── LIGHT THEME ── */
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
                    --warn: #b3820f;
                }
                [data-h-theme="light"] .bar-track { background: rgba(0,100,60,0.08); }
                [data-h-theme="light"] .form-control-dark { background: rgba(0,100,60,0.03); }
                [data-h-theme="light"] .status-pending { background: rgba(179,130,15,0.1); }
            `}</style>

            <div className="fc-story-page">
                <div className="story-page">
                    <div className="container">
                        <div className="row">
                            {/* ═══════════════ MAIN COLUMN ═══════════════ */}
                            <div className="col-lg-8">
                                <div className="story-card">
                                    {hasVideo && (
                                        <div className="video-wrapper">
                                            <div ref={playerMountRef} className="video-mount" />
                                            {thumbnailVisible && (
                                                <div className="video-thumbnail" onClick={handlePlayClick}>
                                                    <img src={`/image/stories/${story.thumbnail}`} alt={story.title} />
                                                    <div className="play-btn">
                                                        <i className="fa fa-play" /> Watch Story
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="stat-grid">
                                        {stats.map((s) => (
                                            <div className="stat-cell" key={s.label}>
                                                <i className={`ti ${s.icon}`} />
                                                <p>{s.label}</p>
                                                <h6>{s.value}</h6>
                                            </div>
                                        ))}
                                    </div>

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
                                        {/* DESCRIPTION */}
                                        <div className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                                            <h3 className="story-title">{story.title}</h3>
                                            <p className="story-body">{story.content}</p>
                                        </div>

                                        {/* REVIEWS */}
                                        <div className={`tab-pane ${activeTab === 'reviews' ? 'active' : ''}`}>
                                            <div className="review-layout">
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
                                                        {comments.length > 0 ? (
                                                            comments.map((c, i) => (
                                                                <div className="review-item" key={c.id ?? i}>
                                                                    <div className="reviewer-head">
                                                                        <img src="/assets/img/user/profile.jpg" className="reviewer-avatar" alt="" />
                                                                        <div>
                                                                            <div className="reviewer-name">{c.name}</div>
                                                                            <div className="reviewer-time">
                                                                                {formatRelativeTime(c.created_at)}
                                                                            </div>
                                                                        </div>
                                                                        <span className="reviewer-stars">
                                                                            <StarDisplay value={c.rating} size="0.75rem" />
                                                                        </span>
                                                                    </div>
                                                                    <p className="review-comment">{c.comment}</p>
                                                                    <button className="reply-link">
                                                                        <i className="feather-corner-up-left" /> Reply
                                                                    </button>
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

                                                            <button type="submit" className="btn-submit-review" disabled={reviewForm.processing}>
                                                                {reviewForm.processing ? 'Submitting…' : 'Submit a Review'}
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ═══════════════ SIDEBAR ═══════════════ */}
                            <div className="col-lg-4">
                                <div className="sidebar-card">
                                    <h2 className="sidebar-story-title">{story.title}</h2>
                                    <ul className="info-links">
                                        <li>
                                            <i className="ti ti-calendar-due" /> {story.category?.name}
                                        </li>
                                        <li>
                                            <i className="ti ti-star-filled" style={{ color: 'var(--accent)' }} />
                                            {avgRating.toFixed(1)} ({totalReviews} Comments)
                                        </li>
                                        <li>
                                            <i className="ti ti-calendar-due" /> Posted on:{' '}
                                            {story.created_at &&
                                                new Date(story.created_at).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: '2-digit',
                                                    year: 'numeric',
                                                })}
                                        </li>
                                        {status && (
                                            <li>
                                                <span className={`status-pill ${status.className}`}>{status.label}</span>
                                            </li>
                                        )}
                                    </ul>

                                    <div className="talent-mini">
                                        <img
                                            src={story.talent?.image ? `/image/talents/${story.talent.image}` : '/assets/img/user/profile.jpg'}
                                            alt={story.talent?.name}
                                        />
                                        <div>
                                            <h5>
                                                {story.talent?.name}
                                                <i className="ti ti-discount-check-filled" />
                                            </h5>
                                            <p>
                                                <i className="ti ti-star-filled" /> {talentAvg.toFixed(1)} ({feedback.length} Feedbacks)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="tag-row">
                                        <i className="ti ti-tags" />
                                        <span>
                                            <strong style={{ color: 'var(--text-primary)' }}>Tags: </strong>
                                            {story.tags}
                                        </span>
                                    </div>

                                    <a href={routes.talentDetails(story.talent?.id)} className="btn-outline">
                                        Back to profile
                                    </a>
                                </div>

                                <div className="sidebar-card">
                                    <h5 className="share-title">Share this story</h5>
                                    <div className="share-icons">
                                        <a role="button" tabIndex={0} className="social-icon-btn" title="Share on Facebook">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                        <a role="button" tabIndex={0} className="social-icon-btn" title="Share on X">
                                            <i className="fa-brands fa-x-twitter" />
                                        </a>
                                        <a role="button" tabIndex={0} className="social-icon-btn" title="Share on Instagram">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                        <a role="button" tabIndex={0} className="social-icon-btn" title="Share via Google">
                                            <i className="fa-brands fa-google" />
                                        </a>
                                        <a role="button" tabIndex={0} className="social-icon-btn" title="Share on YouTube">
                                            <i className="fa-brands fa-youtube" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════ EMAIL VERIFY MODAL ═══════════════ */}
                {verifyOpen && (
                    <div className="fc-modal-backdrop" onClick={() => setVerifyOpen(false)}>
                        <div className="modal-dark" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <div>
                                    <h5 className="modal-title">Verify Email to Continue</h5>
                                    <span className="accent-bar" />
                                </div>
                                <button className="btn-close" onClick={() => setVerifyOpen(false)}>
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={submitVerify}>
                                <div className="modal-body">
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 16, textAlign: 'center' }}>
                                        Please enter your email to verify if you have access to this video.
                                    </p>
                                    <input
                                        type="email"
                                        className="form-control-dark"
                                        placeholder="Enter your email"
                                        value={verifyForm.data.email}
                                        onChange={(e) => verifyForm.setData('email', e.target.value)}
                                        required
                                        style={{ marginBottom: 0 }}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn-submit-review" disabled={verifyForm.processing}>
                                        {verifyForm.processing ? 'Verifying…' : 'Verify Email'}
                                    </button>
                                    <button type="button" className="btn-cancel" onClick={() => setVerifyOpen(false)}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

StoryDetails.layout = (page) => <GuestLayout children={page} title="Story Details" />;
