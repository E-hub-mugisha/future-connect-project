import React, { useState, useRef } from 'react';
import { Head, Link, useForm, usePage, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';


export default function CourseShow({ course, relatedCourses = [], flutterwavePublicKey }) {
  const { auth, flash } = usePage().props;
  const [activeTab, setActiveTab] = useState('description');
  const [payProcessing, setPayProcessing] = useState(false);

  // The lesson currently loaded in the main player — this is what turns the
  // page from "modal per lesson" into a Coursera/Udemy style course-content
  // player: pick a lesson on the right, it plays up top, description updates.
  const [activeLesson, setActiveLesson] = useState(
    course.lessons?.length ? course.lessons[0] : null
  );

  const playerRef = useRef(null);

  const reviewForm = useForm({
    rating: '',
    comment: '',
  });

  function submitReview(e) {
    e.preventDefault();
    reviewForm.post(route('courses.review', course.id), {
      preserveScroll: true,
      onSuccess: () => reviewForm.reset(),
    });
  }

  function submitEnroll(e) {
    e.preventDefault();
    router.post(route('user.courses.enroll', course.id));
  }

  function extractYouTubeId(url) {
    if (!url) return '';
    const beforeAmp = url.split('&')[0];
    const idx = beforeAmp.lastIndexOf('v=');
    return idx === -1 ? beforeAmp : beforeAmp.slice(idx + 2);
  }

  function playLesson(lesson) {
    setActiveLesson(lesson);
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handlePay() {
    setPayProcessing(true);

    const txRef = `course-${course.id}-${Date.now()}`;

    window.FlutterwaveCheckout({
      public_key: flutterwavePublicKey,
      tx_ref: txRef,
      amount: course.price,
      currency: 'RWF',
      payment_options: 'card, mobilemoneyrwanda',
      customer: {
        email: auth?.user?.email ?? 'guest@example.com',
        name: auth?.user?.name ?? 'Guest',
      },
      callback: function (data) {
        if (data.status === 'successful' || data.status === 'completed') {
          window.location.href = `/course/payment/callback?tx_ref=${data.tx_ref}&course_id=${course.id}&status=${data.status}`;
        } else {
          alert('Payment not successful. Please try again.');
          setPayProcessing(false);
        }
      },
      onclose: function () {
        setPayProcessing(false);
      },
      customizations: {
        title: course.title,
        description: 'Pay to enroll in this course',
        logo: '/logo.png',
      },
    });
  }

  const avgRating =
    course.feedback && course.feedback.length
      ? course.feedback.reduce((sum, f) => sum + f.rating, 0) / course.feedback.length
      : 0;

  // What plays in the main player: the selected lesson's video takes priority,
  // then course-level video, then fall back to the thumbnail image.
  const playerVideoUrl = activeLesson?.video_url || course.video || null;
  const lessonIndex = activeLesson
    ? course.lessons?.findIndex((l) => l.id === activeLesson.id)
    : -1;

  return (
    <>
      <Head title={course.title} />

      <script src="https://checkout.flutterwave.com/v3.js"></script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        :root {
          --bg-base:       #0e1618;
          --bg-card:       #131e21;
          --bg-card-alt:   #192429;
          --bg-elevated:   #1e2d32;
          --accent:        #48d597;
          --accent-dim:    #48d59720;
          --accent-muted:  #48d59740;
          --accent-hover:  #00c27a;
          --text-primary:  #f0f4f5;
          --text-secondary:#8fa8ad;
          --text-muted:    #4d6b72;
          --border:        #1f3038;
          --border-hover:  #2a4550;
          --radius-sm:     6px;
          --radius-md:     10px;
          --radius-lg:     16px;
          --radius-xl:     22px;
        }

        body { background: var(--bg-base) !important; color: var(--text-primary) !important; }

        .cs-page { padding: 2rem 0 4rem; }

        .cs-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: border-color .25s, transform .25s;
        }
        .cs-card:hover { border-color: var(--border-hover); }

        .cs-video-wrap {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          scroll-margin-top: 1.5rem;
        }

        .cs-player-meta {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: .85rem; margin-bottom: 1.5rem; gap: 12px; flex-wrap: wrap;
        }
        .cs-player-lesson-tag {
          font-size: .72rem; font-weight: 700; color: var(--accent);
          text-transform: uppercase; letter-spacing: .6px; margin-bottom: .3rem;
          display: flex; align-items: center; gap: 6px;
        }
        .cs-player-lesson-tag .dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
          animation: cs-pulse 1.6s ease-in-out infinite;
        }
        @keyframes cs-pulse { 0%, 100% { opacity: .4; } 50% { opacity: 1; } }
        .cs-player-lesson-title {
          font-size: 1.15rem; font-weight: 800; color: var(--text-primary);
          font-family: 'Syne', sans-serif;
        }
        .cs-player-nav { display: flex; gap: 8px; flex-shrink: 0; }
        .cs-player-nav button {
          background: var(--bg-elevated); border: 1px solid var(--border);
          color: var(--text-secondary); border-radius: var(--radius-sm);
          width: 34px; height: 34px; display: inline-flex; align-items: center;
          justify-content: center; cursor: pointer; transition: border-color .2s, color .2s;
        }
        .cs-player-nav button:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .cs-player-nav button:disabled { opacity: .35; cursor: not-allowed; }

        .cs-lesson-desc-panel {
          background: var(--bg-elevated); border-left: 3px solid var(--accent);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          padding: 1rem 1.25rem; font-size: .88rem; color: var(--text-secondary); line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .cs-tabs { border-bottom: 1px solid var(--border); margin-bottom: 1.75rem; gap: .25rem; display: flex; }
        .cs-tab-link {
          background: none; border: none; color: var(--text-secondary);
          font-size: .875rem; font-weight: 600; letter-spacing: .4px;
          padding: .75rem 1.25rem; cursor: pointer; position: relative;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          transition: color .2s;
        }
        .cs-tab-link::after {
          content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
          height: 2px; background: var(--accent); opacity: 0; transition: opacity .2s;
        }
        .cs-tab-link.active, .cs-tab-link:hover { color: var(--text-primary); }
        .cs-tab-link.active::after { opacity: 1; }

        .cs-section-title {
          font-size: 1rem; font-weight: 700; color: var(--text-secondary);
          text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 1.25rem;
          display: flex; align-items: center; gap: .5rem;
        }
        .cs-section-title::before {
          content: ''; display: inline-block; width: 3px; height: 1rem;
          background: var(--accent); border-radius: 2px;
        }

        .cs-empty {
          text-align: center; padding: 3rem 1rem;
          color: var(--text-muted); border: 1px dashed var(--border);
          border-radius: var(--radius-md);
        }
        .cs-empty i { font-size: 2.5rem; margin-bottom: 1rem; display: block; color: var(--text-muted); }

        .cs-review-item {
          padding: 1.25rem 0; border-bottom: 1px solid var(--border);
        }
        .cs-review-item:last-child { border-bottom: none; }
        .cs-reviewer-avatar {
          width: 42px; height: 42px; border-radius: 50%; object-fit: cover;
          border: 2px solid var(--border);
        }
        .cs-stars i { color: var(--text-muted); font-size: .8rem; }
        .cs-stars i.filled { color: #f5a623; }
        .cs-review-form-card {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: var(--radius-md); padding: 1.5rem; margin-top: 1.5rem;
        }
        .cs-form-control {
          background: var(--bg-base) !important; border: 1px solid var(--border) !important;
          color: var(--text-primary) !important; border-radius: var(--radius-sm) !important;
        }
        .cs-form-control:focus {
          border-color: var(--accent) !important; box-shadow: 0 0 0 3px var(--accent-dim) !important;
          outline: none !important;
        }
        .cs-form-select {
          background: var(--bg-base) !important; border: 1px solid var(--border) !important;
          color: var(--text-primary) !important; border-radius: var(--radius-sm) !important;
        }

        .cs-sidebar-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
        }
        .cs-sidebar-top {
          background: linear-gradient(135deg, #0e1d21 0%, #0e1618 100%);
          padding: 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        .cs-course-title {
          font-size: 1.2rem; font-weight: 800; color: var(--text-primary);
          line-height: 1.35; margin-bottom: 1rem;
          font-family: 'Syne', sans-serif;
        }
        .cs-meta-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 50px; padding: 4px 12px; font-size: .75rem; color: var(--text-secondary);
          margin: 3px;
        }
        .cs-meta-pill i { color: var(--accent); font-size: .8rem; }
        .cs-price-row {
          display: flex; align-items: baseline; gap: 10px; margin: 1.25rem 0 1rem;
        }
        .cs-price {
          font-size: 2rem; font-weight: 900; color: var(--accent);
          font-family: 'Syne', sans-serif; line-height: 1;
        }
        .cs-price-label { font-size: .8rem; color: var(--text-muted); }

        .cs-author-strip {
          display: flex; align-items: center; gap: 12px;
          padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border);
          background: var(--bg-card-alt);
        }
        .cs-author-avatar {
          width: 52px; height: 52px; border-radius: 50%; object-fit: cover;
          border: 2px solid var(--accent-muted); flex-shrink: 0;
        }
        .cs-author-name { font-size: .95rem; font-weight: 700; color: var(--text-primary); }
        .cs-author-meta { font-size: .78rem; color: var(--text-secondary); margin-top: 2px; }
        .cs-status-dot {
          display: inline-block; width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent); margin-right: 4px; vertical-align: middle;
        }

        .cs-btn-primary {
          display: block; width: 100%; padding: .9rem 1.5rem; text-align: center;
          background: var(--accent); color: #fff; border: none;
          border-radius: var(--radius-md); font-weight: 700; font-size: .95rem;
          cursor: pointer; text-decoration: none; transition: background .2s, transform .15s;
          letter-spacing: .3px;
        }
        .cs-btn-primary:hover { background: var(--accent-hover); transform: translateY(-1px); color: #fff; }
        .cs-btn-outline {
          display: block; width: 100%; padding: .8rem 1.5rem; text-align: center;
          background: transparent; color: var(--accent);
          border: 1px solid var(--accent-muted); border-radius: var(--radius-md);
          font-weight: 700; font-size: .88rem; cursor: pointer; text-decoration: none;
          transition: border-color .2s, background .2s;
        }
        .cs-btn-outline:hover { border-color: var(--accent); background: var(--accent-dim); color: var(--accent); }
        .cs-sidebar-actions { padding: 1.25rem 1.5rem; display: flex; flex-direction: column; gap: 10px; }

        .cs-share-row {
          display: flex; align-items: center; gap: 10px;
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--border);
          font-size: .8rem; color: var(--text-muted);
        }
        .cs-share-icon {
          width: 32px; height: 32px; display: inline-flex; align-items: center;
          justify-content: center; border-radius: 50%;
          background: var(--bg-elevated); border: 1px solid var(--border);
          color: var(--text-secondary); font-size: .85rem;
          transition: border-color .2s, color .2s; text-decoration: none;
        }
        .cs-share-icon:hover { border-color: var(--accent); color: var(--accent); }

        /* ── Course Content sidebar (Udemy/Coursera curriculum panel) ── */
        .cs-content-card { margin-top: 1.25rem; position: sticky; top: 1.5rem; }
        .cs-content-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.1rem 1.25rem; border-bottom: 1px solid var(--border);
        }
        .cs-content-header h3 {
          font-size: .95rem; font-weight: 800; color: var(--text-primary);
          margin: 0; font-family: 'Syne', sans-serif;
        }
        .cs-content-badge {
          background: var(--accent-dim); color: var(--accent);
          font-size: .72rem; font-weight: 700; padding: 3px 10px;
          border-radius: 50px; border: 1px solid var(--accent-muted);
        }
        .cs-content-list {
          list-style: none; margin: 0; padding: .5rem;
          max-height: 480px; overflow-y: auto;
        }
        .cs-content-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px; border-radius: var(--radius-sm);
          cursor: pointer; border: 1px solid transparent;
          transition: background .2s, border-color .2s;
        }
        .cs-content-item:hover { background: var(--bg-card-alt); }
        .cs-content-item.playing {
          background: var(--accent-dim); border-color: var(--accent-muted);
        }
        .cs-content-num {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
          background: var(--bg-elevated); border: 1px solid var(--border);
          color: var(--text-secondary); font-size: .75rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s, border-color .2s, color .2s;
        }
        .cs-content-item.playing .cs-content-num {
          background: var(--accent); border-color: var(--accent); color: #06231a;
        }
        .cs-content-item.playing .cs-content-num i { font-size: .68rem; }
        .cs-content-body { flex: 1; min-width: 0; }
        .cs-content-title {
          font-size: .85rem; font-weight: 600; color: var(--text-primary);
          line-height: 1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .cs-content-item.playing .cs-content-title { color: var(--accent); }
        .cs-content-sub {
          display: flex; align-items: center; gap: 6px; margin-top: 2px;
          font-size: .72rem; color: var(--text-muted);
        }
        .cs-content-sub i { font-size: .68rem; }
        .cs-content-now-playing {
          font-size: .68rem; font-weight: 700; color: var(--accent);
          text-transform: uppercase; letter-spacing: .4px;
          display: flex; align-items: center; gap: 4px; flex-shrink: 0;
        }
        .cs-content-now-playing .dot {
          width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
          animation: cs-pulse 1.6s ease-in-out infinite;
        }

        .cs-related-section { margin-top: 3rem; }
        .cs-related-title {
          font-size: 1.3rem; font-weight: 800; color: var(--text-primary);
          margin-bottom: 1.5rem; font-family: 'Syne', sans-serif;
          display: flex; align-items: center; gap: .75rem;
        }
        .cs-related-title::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
        }
        .cs-course-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
          transition: border-color .25s, transform .25s;
        }
        .cs-course-card:hover { border-color: var(--accent-muted); transform: translateY(-3px); }
        .cs-course-thumb { width: 100%; height: 180px; object-fit: cover; display: block; }
        .cs-course-body { padding: 1.1rem; }
        .cs-cat-tag {
          display: inline-block; background: var(--accent-dim); color: var(--accent);
          font-size: .7rem; font-weight: 700; padding: 3px 10px; border-radius: 50px;
          margin-bottom: .75rem; letter-spacing: .3px; border: 1px solid var(--accent-muted);
        }
        .cs-course-name {
          font-size: .95rem; font-weight: 700; color: var(--text-primary);
          line-height: 1.4; margin-bottom: .75rem; display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
          text-decoration: none;
        }
        .cs-course-name:hover { color: var(--accent); }
        .cs-course-foot {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--border); padding-top: .75rem; margin-top: .75rem;
        }
        .cs-course-price { font-size: 1rem; font-weight: 800; color: var(--accent); }
        .cs-course-price.free { color: #5ab8d4; }

        .cs-pay-modal .modal-content {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); color: var(--text-primary);
        }
        .cs-pay-modal .modal-header {
          background: var(--bg-elevated); border-bottom: 1px solid var(--border);
        }
        .cs-pay-modal .modal-footer {
          background: var(--bg-card-alt); border-top: 1px solid var(--border);
        }
        .cs-pay-modal .btn-close { filter: invert(1) opacity(.6); }

        .cs-alert-success {
          background: var(--accent-dim); border: 1px solid var(--accent-muted);
          color: var(--accent); border-radius: var(--radius-sm); padding: .75rem 1rem;
          margin-bottom: 1rem; font-size: .875rem;
        }
        .cs-login-prompt { color: var(--text-secondary); font-size: .88rem; }
        .cs-login-prompt a { color: var(--accent); text-decoration: none; font-weight: 600; }

        .tab-pane { display: none; }
        .tab-pane.active.show { display: block; }

        @media (max-width: 768px) {
          .cs-price { font-size: 1.5rem; }
          .cs-content-card { position: static; }
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg-base:        #f6faf8;
          --bg-card:        #ffffff;
          --bg-card-alt:    #eef4f1;
          --bg-elevated:    #e6f0eb;
          --accent:         #00a667;
          --accent-dim:     rgba(0, 166, 103, 0.12);
          --accent-muted:   rgba(0, 166, 103, 0.25);
          --accent-hover:   #00c07a;
          --text-primary:   #10201b;
          --text-secondary: #45605a;
          --text-muted:     #7c968f;
          --border:         rgba(0, 100, 60, 0.12);
          --border-hover:   rgba(0, 100, 60, 0.22);
        }

        /* Sidebar top gradient was a near-black dark gradient — swap to a soft
           light-mode tint so it doesn't read as a dark smear on white */
        [data-h-theme="light"] .cs-sidebar-top {
          background: linear-gradient(135deg, #eef7f2 0%, #f6faf8 100%);
        }

        /* Bootstrap's default close icon is already dark, so on a light modal
           header it doesn't need the white-icon invert the dark theme required */
        [data-h-theme="light"] .cs-pay-modal .btn-close {
          filter: none;
        }

        [data-h-theme="light"] .cs-content-item.playing .cs-content-num {
          color: #ffffff;
        }
      `}</style>

      <div className="page-content content cs-page">
        <div className="container">
          <div className="row g-4">

            {/* Main Column */}
            <div className="col-lg-8">
              <div className="cs-card p-4">

                {/* Player */}
                <div className="cs-video-wrap" ref={playerRef}>
                  {playerVideoUrl ? (
                    <div className="ratio ratio-16x9">
                      <iframe
                        key={playerVideoUrl}
                        src={`https://www.youtube.com/embed/${extractYouTubeId(playerVideoUrl)}?autoplay=0&playsinline=1`}
                        title={activeLesson?.title ?? course.title}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <img
                      src={`/images/thumbnails/${course.thumbnail}`}
                      className="img-fluid w-100"
                      style={{ borderRadius: 'var(--radius-md)' }}
                      alt={course.title}
                    />
                  )}
                </div>

                {/* Player meta / lesson navigation, Udemy/Coursera style */}
                {activeLesson ? (
                  <div className="cs-player-meta">
                    <div>
                      <div className="cs-player-lesson-tag">
                        <span className="dot"></span>
                        Lesson {lessonIndex + 1} of {course.lessons.length}
                      </div>
                      <div className="cs-player-lesson-title">{activeLesson.title ?? 'Untitled Lesson'}</div>
                    </div>
                    <div className="cs-player-nav">
                      <button
                        type="button"
                        disabled={lessonIndex <= 0}
                        onClick={() => playLesson(course.lessons[lessonIndex - 1])}
                        title="Previous lesson"
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      <button
                        type="button"
                        disabled={lessonIndex === -1 || lessonIndex >= course.lessons.length - 1}
                        onClick={() => playLesson(course.lessons[lessonIndex + 1])}
                        title="Next lesson"
                      >
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="cs-player-meta">
                    <div className="cs-player-lesson-title">{course.title}</div>
                  </div>
                )}

                {activeLesson?.description && (
                  <div className="cs-lesson-desc-panel">{activeLesson.description}</div>
                )}

                {/* Tabs nav */}
                <div className="cs-tabs">
                  <button className={`cs-tab-link${activeTab === 'description' ? ' active' : ''}`} onClick={() => setActiveTab('description')}>
                    Description
                  </button>
                  <button className={`cs-tab-link${activeTab === 'review' ? ' active' : ''}`} onClick={() => setActiveTab('review')}>
                    Reviews
                    <span style={{ background: 'var(--accent-dim)', color: 'var(--accent)', fontSize: '.7rem', padding: '1px 7px', borderRadius: '50px', marginLeft: '5px' }}>
                      {course.feedback?.length ?? 0}
                    </span>
                  </button>
                </div>

                {/* Tab panels */}
                <div>

                  {/* Description */}
                  <div className={`tab-pane${activeTab === 'description' ? ' active show' : ''}`}>
                    <p className="cs-section-title">About this course</p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '.93rem' }}>
                      {course.description}
                    </p>
                  </div>

                  {/* Reviews */}
                  <div className={`tab-pane${activeTab === 'review' ? ' active show' : ''}`}>
                    <p className="cs-section-title">Reviews ({course.feedback?.length ?? 0})</p>

                    {course.feedback?.length > 0 ? (
                      course.feedback.map((feedback) => (
                        <div className="cs-review-item" key={feedback.id}>
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src={feedback.user?.profile_photo ? `/uploads/${feedback.user.profile_photo}` : '/assets/img/user/profile.jpg'}
                              alt={feedback.user?.name}
                              className="cs-reviewer-avatar"
                            />
                            <div style={{ flex: 1 }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '.92rem' }}>{feedback.user?.name}</span>
                                <span style={{ fontSize: '.75rem', color: 'var(--text-muted)' }}>{feedback.created_ago}</span>
                              </div>
                              <div className="cs-stars my-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <i key={i} className={`fa-solid fa-star${i < feedback.rating ? ' filled' : ''}`}></i>
                                ))}
                                <span style={{ fontSize: '.75rem', color: 'var(--text-muted)', marginLeft: '4px' }}>{feedback.rating}.0</span>
                              </div>
                              <p style={{ fontSize: '.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{feedback.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="cs-empty">
                        <i className="fa-solid fa-comment-slash"></i>
                        <p>No reviews yet. Be the first to leave one!</p>
                      </div>
                    )}

                    {/* Review Form */}
                    <div className="cs-review-form-card mt-4">
                      <p className="cs-section-title">Leave a Review</p>
                      {auth?.user ? (
                        <>
                          {flash?.success && <div className="cs-alert-success">{flash.success}</div>}
                          <form onSubmit={submitReview}>
                            <div className="mb-3">
                              <label className="form-label" style={{ color: 'var(--text-secondary)', fontSize: '.85rem', fontWeight: 600 }}>Rating</label>
                              <select
                                className="form-select cs-form-select"
                                value={reviewForm.data.rating}
                                onChange={(e) => reviewForm.setData('rating', e.target.value)}
                                required
                              >
                                <option value="">-- Select Rating --</option>
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <option value={i} key={i}>{i} Star{i > 1 ? 's' : ''}</option>
                                ))}
                              </select>
                              {reviewForm.errors.rating && <small className="text-danger">{reviewForm.errors.rating}</small>}
                            </div>
                            <div className="mb-3">
                              <label className="form-label" style={{ color: 'var(--text-secondary)', fontSize: '.85rem', fontWeight: 600 }}>Comment</label>
                              <textarea
                                rows="4"
                                className="form-control cs-form-control"
                                placeholder="Share your experience with this course..."
                                value={reviewForm.data.comment}
                                onChange={(e) => reviewForm.setData('comment', e.target.value)}
                              ></textarea>
                              {reviewForm.errors.comment && <small className="text-danger">{reviewForm.errors.comment}</small>}
                            </div>
                            <button type="submit" className="cs-btn-primary" style={{ width: 'auto', padding: '.7rem 2rem', display: 'inline-block' }} disabled={reviewForm.processing}>
                              Submit Review
                            </button>
                          </form>
                        </>
                      ) : (
                        <p className="cs-login-prompt"><Link href={route('login')}>Log in</Link> to leave a review.</p>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="cs-sidebar-card">

                <div className="cs-sidebar-top">
                  <h2 className="cs-course-title">{course.title}</h2>

                  <div style={{ marginBottom: '.75rem' }}>
                    <span className="cs-meta-pill">
                      <i className="fa-solid fa-star" style={{ color: '#f5a623', fontSize: '.75rem' }}></i>
                      {avgRating.toFixed(1)}
                    </span>
                    <span className="cs-meta-pill">
                      <i className="fa-solid fa-comment-dots"></i>
                      {course.feedback?.length ?? 0} reviews
                    </span>
                    <span className="cs-meta-pill">
                      <i className="fa-solid fa-tag"></i>
                      {course.category?.name}
                    </span>
                    <span className="cs-meta-pill">
                      <i className="fa-solid fa-heart" style={{ color: '#e74c3c' }}></i>
                      {course.likes_count ?? 0} likes
                    </span>
                    <span className="cs-meta-pill">
                      <i className="fa-solid fa-calendar"></i>
                      {course.created_ago ?? ''}
                    </span>
                  </div>

                  <div className="cs-price-row">
                    {course.is_free ? (
                      <>
                        <span className="cs-price" style={{ color: '#5ab8d4' }}>Free</span>
                        <span className="cs-price-label">No payment required</span>
                      </>
                    ) : (
                      <>
                        <span className="cs-price">${Number(course.price).toFixed(2)}</span>
                        <span className="cs-price-label">one-time payment</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="cs-author-strip">
                  <img
                    src={course.talent?.image ? `/image/talents/${course.talent.image}` : '/assets/img/user/profile.jpg'}
                    alt="Author"
                    className="cs-author-avatar"
                  />
                  <div>
                    <div className="cs-author-name">
                      {course.talent?.name}
                      <span style={{ background: 'var(--accent-dim)', color: 'var(--accent)', fontSize: '.68rem', padding: '2px 8px', borderRadius: '50px', marginLeft: '6px', fontWeight: 700 }}>
                        <span className="cs-status-dot"></span>{capitalize(course.talent?.status)}
                      </span>
                    </div>
                    <div className="cs-author-meta">
                      <i className="fa-solid fa-star" style={{ color: '#f5a623', fontSize: '.7rem' }}></i>
                      {course.talent?.rating} &nbsp;·&nbsp; {course.talent?.rating_count} ratings
                    </div>
                  </div>
                </div>

                <div className="cs-sidebar-actions">
                  {course.is_free ? (
                    <a href="#enrollModal" className="cs-btn-primary" data-bs-toggle="modal">
                      <i className="fa-solid fa-bolt me-1"></i> Enroll for Free
                    </a>
                  ) : (
                    <a href="#paymentModal" className="cs-btn-primary" data-bs-toggle="modal">
                      <i className="fa-solid fa-lock-open me-1"></i>
                      Enroll · ${Number(course.price).toFixed(2)}
                    </a>
                  )}
                  <Link href={route('user.talent.details', course.talent?.id)} className="cs-btn-outline">
                    View Author Profile
                  </Link>
                </div>

                <div className="cs-share-row">
                  <span>Share</span>
                  {['facebook', 'twitter', 'instagram', 'linkedin', 'whatsapp'].map((social) => (
                    <a href="javascript:void(0);" className="cs-share-icon" key={social}>
                      <i className={`fa-brands fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Course Content — Udemy/Coursera style curriculum list.
                  Clicking a row plays it in the main player above instead of a modal. */}
              {course.lessons?.length > 0 && (
                <div className="cs-sidebar-card cs-content-card">
                  <div className="cs-content-header">
                    <h3>Course content</h3>
                    <span className="cs-content-badge">{course.lessons.length} lessons</span>
                  </div>
                  <ul className="cs-content-list">
                    {course.lessons.map((lesson, key) => {
                      const isPlaying = activeLesson?.id === lesson.id;
                      return (
                        <li
                          className={`cs-content-item${isPlaying ? ' playing' : ''}`}
                          key={lesson.id}
                          onClick={() => playLesson(lesson)}
                        >
                          <div className="cs-content-num">
                            {isPlaying ? <i className="fa-solid fa-play"></i> : key + 1}
                          </div>
                          <div className="cs-content-body">
                            <div className="cs-content-title">{lesson.title ?? 'Untitled Lesson'}</div>
                            <div className="cs-content-sub">
                              {lesson.video_url ? (
                                <><i className="fa-solid fa-circle-play"></i> Video</>
                              ) : (
                                <><i className="fa-solid fa-file-lines"></i> Text</>
                              )}
                              {lesson.duration && <span>· {lesson.duration}</span>}
                            </div>
                          </div>
                          {isPlaying && (
                            <span className="cs-content-now-playing">
                              <span className="dot"></span> Playing
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Related Courses */}
          <div className="cs-related-section">
            <h3 className="cs-related-title">Related Courses</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {relatedCourses.length > 0 ? (
                relatedCourses.map((rc) => (
                  <div className="col" key={rc.id}>
                    <div className="cs-course-card h-100">
                      <Link href={route('user.courses.show', rc.slug)}>
                        <img src={`/image/thumbnails/${rc.thumbnail}`} className="cs-course-thumb" alt={rc.title} />
                      </Link>
                      <div className="cs-course-body">
                        <Link href={route('user.courses', { category: rc.category?.slug })} className="cs-cat-tag">
                          {rc.category?.name}
                        </Link>
                        <Link href={route('user.courses.show', rc.slug)} className="d-block cs-course-name">
                          {rc.title}
                        </Link>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '.5rem' }}>
                          <img
                            src={rc.talent?.image ? `/image/talents/${rc.talent.image}` : '/assets/img/user/profile.jpg'}
                            style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
                            alt=""
                          />
                          <span style={{ fontSize: '.78rem', color: 'var(--text-muted)' }}>{rc.talent?.name ?? 'Unknown'}</span>
                        </div>
                        <div className="cs-course-foot">
                          <span className={`cs-course-price${rc.is_free ? ' free' : ''}`}>
                            {rc.is_free ? 'Free' : `$${Number(rc.price).toFixed(2)}`}
                          </span>
                          <Link href={route('user.courses.show', rc.slug)} style={{ fontSize: '.78rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 700 }}>
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p style={{ color: 'var(--text-muted)' }}>No related courses found.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ══ MODALS ══ */}
      {/* Note: per-lesson preview modals are gone — lessons now play inline in
          the main player above, selected from the "Course content" sidebar. */}

      {/* Enroll Modal */}
      <div className="modal fade cs-pay-modal" id="enrollModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title">Enroll in {course.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body" style={{ color: 'var(--text-secondary)', fontSize: '.9rem', padding: '1.5rem' }}>
              <p>You&apos;re about to enroll in this free course. Ready to start learning?</p>
            </div>
            <div className="modal-footer border-0" style={{ padding: '1rem 1.5rem' }}>
              <form onSubmit={submitEnroll}>
                <button type="submit" className="cs-btn-primary" style={{ width: 'auto', padding: '.7rem 1.75rem', display: 'inline-block' }}>
                  <i className="fa-solid fa-bolt me-1"></i> Yes, Enroll Me
                </button>
              </form>
              <button type="button" className="cs-btn-outline" style={{ width: 'auto', padding: '.65rem 1.25rem', display: 'inline-block' }} data-bs-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <div className="modal fade cs-pay-modal" id="paymentModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title">Complete Payment</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body" style={{ padding: '1.5rem' }}>
              <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '.8rem', color: 'var(--text-muted)', marginBottom: '.25rem' }}>Course</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{course.title}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Total Due</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent)' }}>${Number(course.price).toFixed(2)}</span>
              </div>
            </div>
            <div className="modal-footer border-0" style={{ padding: '1rem 1.5rem', gap: '10px' }}>
              <button
                type="button"
                className="cs-btn-primary"
                style={{ width: 'auto', padding: '.75rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                onClick={handlePay}
                disabled={payProcessing}
              >
                {payProcessing ? (
                  <>
                    <span>Processing…</span>
                    <span className="spinner-border spinner-border-sm" role="status"></span>
                  </>
                ) : (
                  <span><i className="fa fa-lock-open me-1"></i> Pay &amp; Enroll</span>
                )}
              </button>
              <button type="button" className="cs-btn-outline" style={{ width: 'auto', padding: '.7rem 1.25rem', display: 'inline-block' }} data-bs-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function capitalize(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

CourseShow.layout = (page) => <GuestLayout children={page} title={page.props.course.title} />;