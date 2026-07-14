import React, { useMemo, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

/**
 * Converted from resources/views/.../faq.blade.php
 *
 * Assumptions made during conversion:
 *
 * 1. `$faqs` is expected as a plain array/collection prop (not a paginator) —
 *    matches the simple `@foreach` used in the original, so I did a client-side
 *    `.length` check for the count rather than a paginator-aware pattern.
 *
 * 2. **Live search filtering** — the original ran a vanilla-JS `input` listener
 *    that toggled a `fq-hidden` class on each `.faq-card` by comparing against
 *    `data-fq-question`/`data-fq-answer` attributes (lower-cased question text +
 *    stripped-tag answer text baked in server-side via `strtolower()` /
 *    `strip_tags()`). I reproduced the same matching logic in React: a
 *    `useMemo`-derived filtered list computed from `searchTerm`, with the
 *    question/answer lower-cased and HTML-stripped client-side via a small
 *    `stripTags()` helper (equivalent to Blade's `strip_tags()`).
 *
 * 3. **Accordion (Bootstrap `collapse` + `data-bs-parent`)** — rewritten as a
 *    single `openIndex` piece of state (only one FAQ open at a time, matching
 *    the original's `data-bs-parent="#fqList"` accordion-group behavior),
 *    toggled on click, rather than relying on Bootstrap's collapse JS plugin.
 *    The `.collapse`/`.show`/animation classes are dropped in favor of a plain
 *    conditional render, so there's no slide transition — let me know if you
 *    want that animated back in (a simple max-height/CSS-transition
 *    implementation would do it without pulling in Bootstrap's JS).
 *
 * 4. `{!! nl2br(e($faq->answer)) !!}` — reimplemented as a small `nl2br()`
 *    helper that HTML-escapes the answer text then converts newlines to
 *    `<br>`, rendered via `dangerouslySetInnerHTML` (same escape-then-allow-
 *    only-`<br>` behavior as the original, not raw trusted HTML).
 *
 * 5. **Ask a Question modal** — rewritten with Inertia's `useForm` (posts to
 *    `route('faq.ask.store')`, matching the original's `@csrf` form) instead
 *    of Bootstrap's `data-bs-toggle="modal"` + full-page POST, using the same
 *    self-contained modal pattern (`<FqModal>`) as your other converted pages.
 *    The original had `{{ old('question') }}` — with Inertia that's just
 *    `form.data.question` persisting after a failed submit.
 *
 * 6. `route('faq.ask.store')` carried over as-is — the original Blade file
 *    left a TODO noting the route/controller didn't exist yet ("create a route
 *    named 'faq.ask.store'..."), so you'll still need to add that route +
 *    controller method for the modal's submit to actually work.
 */

function stripTags(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function nl2br(str) {
  return escapeHtml(str).replace(/\n/g, '<br>');
}

function FqModal({ title, subtitle, onClose, children, footer, formId, onSubmit }) {
  return (
    <div className="modal fade fq-modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-modal="true">
      <div className="modal-backdrop fade show" onClick={onClose} style={{ zIndex: 1040 }}></div>
      <div className="modal-dialog modal-dialog-centered" style={{ zIndex: 1050, position: 'relative' }}>
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h5 className="modal-title">
                {title}
                {subtitle && <small>{subtitle}</small>}
              </h5>
            </div>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <form id={formId} onSubmit={onSubmit}>
            <div className="modal-body">{children}</div>
            {footer && <div className="modal-footer" style={{ gap: 10 }}>{footer}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Faq({ faqs = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [showAskModal, setShowAskModal] = useState(false);

  const total = faqs.length;

  const filteredFaqs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return faqs;
    return faqs.filter((faq) => {
      const question = (faq.question || '').toLowerCase();
      const answer = stripTags(faq.answer || '').toLowerCase();
      return question.includes(term) || answer.includes(term);
    });
  }, [faqs, searchTerm]);

  const form = useForm({ question: '' });

  function submitQuestion(e) {
    e.preventDefault();
    form.post(route('faq.ask.store'), {
      preserveScroll: true,
      onSuccess: () => {
        setShowAskModal(false);
        form.reset();
      },
    });
  }

  return (
    <>
      <Head title="FAQ - Future Connect" />

      <style>{`
        :root {
          --fq-bg: #0e1618;
          --fq-surface: #141d20;
          --fq-surface2: #1a2428;
          --fq-green: #48d597;
          --fq-green-d: rgba(0, 166, 103, 0.14);
          --fq-green-b: rgba(0, 166, 103, 0.22);
          --fq-text: #e8f0ed;
          --fq-muted: #7a9a8e;
          --fq-border: rgba(0, 166, 103, 0.16);
          --fq-border-h: rgba(0, 166, 103, 0.38);
        }

        .fq-page * {
          box-sizing: border-box;
        }

        .fq-page {
          background: var(--fq-bg);
          padding-bottom: 90px;
        }

        /* ── HERO ── */
        .fq-hero {
          position: relative;
          overflow: hidden;
          padding: 68px 0 54px;
          border-bottom: 1px solid var(--fq-border);
        }

        .fq-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--fq-green), transparent);
        }

        .fq-hero-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(72, 213, 151, 0.16), transparent 70%);
          pointer-events: none;
        }

        .fq-hero-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .fq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--fq-green-d);
          border: 1px solid var(--fq-border-h);
          color: var(--fq-green);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
          font-family: 'Syne', sans-serif;
        }

        .fq-hero h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.15;
        }

        .fq-hero h1 span {
          color: var(--fq-green);
        }

        .fq-hero p {
          color: var(--fq-muted);
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        /* Search */
        .fq-search-wrap {
          position: relative;
          max-width: 460px;
          margin: 0 auto;
        }

        .fq-search-wrap i {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--fq-muted);
          font-size: 15px;
          pointer-events: none;
        }

        .fq-search-wrap input {
          width: 100%;
          background: var(--fq-surface);
          border: 1px solid var(--fq-border);
          border-radius: 12px;
          color: var(--fq-text);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 14px 16px 14px 44px;
          outline: none;
          transition: border-color .2s, background .2s;
        }

        .fq-search-wrap input::placeholder {
          color: #3d5a52;
        }

        .fq-search-wrap input:focus {
          border-color: var(--fq-green);
          background: rgba(0, 166, 103, 0.06);
        }

        /* ── LAYOUT ── */
        .fq-body {
          max-width: 780px;
          margin: 0 auto;
          padding: 52px 24px 0;
        }

        .fq-count {
          font-size: 0.8rem;
          color: var(--fq-muted);
          margin-bottom: 18px;
          font-family: 'DM Sans', sans-serif;
        }

        .fq-count strong {
          color: var(--fq-green);
          font-weight: 600;
        }

        /* ── FAQ CARD / ACCORDION ── */
        .faq-lists {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-card {
          background: var(--fq-surface);
          border: 1px solid var(--fq-border);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color .2s, background .2s;
        }

        .faq-card:hover {
          border-color: var(--fq-border-h);
        }

        .faq-card.fq-hidden {
          display: none;
        }

        .faq-title {
          margin: 0;
        }

        .faq-title a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 22px;
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--fq-text);
          text-decoration: none;
          cursor: pointer;
        }

        .faq-title a .fq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: var(--fq-green-d);
          border: 1px solid var(--fq-border-h);
          color: var(--fq-green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          transition: transform .25s, background .2s, color .2s;
        }

        .faq-title a:not(.collapsed) .fq-icon {
          background: var(--fq-green);
          color: #fff;
          transform: rotate(45deg);
        }

        .card-collapse .faq-content {
          padding: 0 22px 20px;
          border-top: 1px solid var(--fq-border);
          margin-top: -1px;
          padding-top: 14px;
        }

        .card-collapse .faq-content p {
          color: var(--fq-muted);
          font-size: 0.88rem;
          line-height: 1.7;
          margin: 0;
        }

        .fq-empty {
          display: none;
          text-align: center;
          padding: 40px 20px;
          color: var(--fq-muted);
          font-size: 0.9rem;
          border: 1px dashed var(--fq-border);
          border-radius: 14px;
        }

        .fq-empty.show {
          display: block;
        }

        /* ── ASK CTA BAND ── */
        .fq-cta {
          max-width: 780px;
          margin: 44px auto 0;
          padding: 0 24px;
        }

        .fq-cta-card {
          background: linear-gradient(135deg, var(--fq-surface), var(--fq-surface2));
          border: 1px solid var(--fq-border);
          border-radius: 18px;
          padding: 36px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }

        .fq-cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--fq-green), transparent);
        }

        .fq-cta-text h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          color: #fff;
          margin: 0 0 6px;
        }

        .fq-cta-text p {
          color: var(--fq-muted);
          font-size: 0.86rem;
          margin: 0;
          max-width: 420px;
          line-height: 1.6;
        }

        .fq-btn-ask {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--fq-green);
          border: 1px solid var(--fq-green);
          color: #fff;
          border-radius: 10px;
          padding: 12px 24px;
          font-family: 'Syne', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: background .2s, transform .15s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .fq-btn-ask:hover {
          background: #00c07a;
          border-color: #00c07a;
          transform: translateY(-2px);
        }

        .fq-btn-ask:disabled {
          opacity: .6;
          cursor: not-allowed;
          transform: none;
        }

        /* ── ASK MODAL ── */
        .fq-modal .modal-content {
          background: var(--fq-surface);
          border: 1px solid var(--fq-border);
          border-radius: 18px;
          color: var(--fq-text);
        }

        .fq-modal .modal-header {
          border-bottom: 1px solid var(--fq-border);
          padding: 22px 26px;
        }

        .fq-modal .modal-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #fff;
        }

        .fq-modal .modal-title small {
          display: block;
          font-size: 0.75rem;
          color: var(--fq-muted);
          font-weight: 400;
          margin-top: 4px;
        }

        .fq-modal .btn-close {
          filter: invert(1) brightness(0.6);
        }

        .fq-modal .modal-body {
          padding: 26px;
        }

        .fq-modal .modal-footer {
          border-top: 1px solid var(--fq-border);
          padding: 18px 26px;
        }

        .fq-form-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--fq-text);
          margin-bottom: 6px;
          display: block;
        }

        .fq-form-control {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--fq-border);
          border-radius: 10px;
          color: var(--fq-text);
          padding: 11px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          outline: none;
          transition: border-color .2s;
        }

        .fq-form-control:focus {
          border-color: var(--fq-border-h);
          box-shadow: 0 0 0 3px var(--fq-green-d);
        }

        .fq-form-control::placeholder {
          color: #3d5a52;
        }

        textarea.fq-form-control {
          resize: vertical;
          min-height: 100px;
        }

        .fq-form-error {
          color: #ff8a8a;
          font-size: 0.75rem;
          margin-top: 5px;
        }

        .fq-btn-outline {
          background: transparent;
          color: var(--fq-muted);
          border: 1px solid var(--fq-border);
          border-radius: 10px;
          padding: 10px 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all .2s;
        }

        .fq-btn-outline:hover {
          color: #fff;
          border-color: var(--fq-border-h);
        }

        @media (max-width: 576px) {
          .fq-cta-card {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .fq-btn-ask {
            width: 100%;
            justify-content: center;
          }
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --fq-bg: #f6faf8;
          --fq-surface: #ffffff;
          --fq-surface2: #eef4f1;
          --fq-green: #00a667;
          --fq-green-d: rgba(0, 166, 103, 0.08);
          --fq-green-b: rgba(0, 166, 103, 0.18);
          --fq-text: #10201b;
          --fq-muted: #5b7a70;
          --fq-border: rgba(0, 100, 60, 0.12);
          --fq-border-h: rgba(0, 100, 60, 0.3);
        }

        /* Hero glow — soften so it doesn't look like a smear on white */
        [data-h-theme="light"] .fq-hero-glow {
          background: radial-gradient(circle, rgba(0, 166, 103, 0.1), transparent 70%);
        }

        /* Headings hardcoded to #fff need to flip dark */
        [data-h-theme="light"] .fq-hero h1,
        [data-h-theme="light"] .fq-cta-text h3,
        [data-h-theme="light"] .fq-modal .modal-title {
          color: #10201b;
        }

        /* Search + FAQ answer form placeholder was hardcoded to a dark-theme-only hex */
        [data-h-theme="light"] .fq-search-wrap input::placeholder,
        [data-h-theme="light"] .fq-form-control::placeholder {
          color: #a9c2b8;
        }

        /* Modal close icon: dark theme inverts it to white, revert on light */
        [data-h-theme="light"] .fq-modal .btn-close {
          filter: none;
        }

        /* fq-btn-outline hover color hardcoded to #fff */
        [data-h-theme="light"] .fq-btn-outline:hover {
          color: #10201b;
        }

        /* Form control background was a flat white-on-black translucent fill;
           on a white surface it needs to go the other direction to stay visible */
        [data-h-theme="light"] .fq-form-control {
          background: rgba(0, 100, 60, 0.04);
        }
      `}</style>

      <div className="fq-page">

        {/* Hero + search */}
        <section className="fq-hero">
          <div className="fq-hero-glow"></div>
          <div className="fq-hero-inner">
            <span className="fq-eyebrow"><i className="ti ti-help-circle"></i> Support</span>
            <h1>Frequently asked <span>questions</span></h1>
            <p>Everything you need to know before getting started. Can't find what you're looking for? Ask us directly below.</p>

            <div className="fq-search-wrap">
              <i className="ti ti-search"></i>
              <input
                type="text"
                id="fqSearchInput"
                placeholder="Search questions..."
                autoComplete="off"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className="fq-body">

          <p className="fq-count" id="fqCount">
            {searchTerm ? (
              <>
                <strong>{filteredFaqs.length}</strong> of {total} question{total === 1 ? '' : 's'}
              </>
            ) : (
              <>
                <strong>{total}</strong> question{total === 1 ? '' : 's'}
              </>
            )}
          </p>

          <div className="faq-wrapper">
            <div className="faq-lists" id="fqList">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const isVisible = filteredFaqs.includes(faq);
                return (
                  <div
                    className={`faq-card${isVisible ? '' : ' fq-hidden'}`}
                    key={faq.id ?? index}
                  >
                    <h4 className="faq-title">
                      <a
                        className={isOpen ? '' : 'collapsed'}
                        href={`#faq${index}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq${index}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenIndex(isOpen ? null : index);
                        }}
                      >
                        <span>{faq.question}</span>
                        <span className="fq-icon"><i className="ti ti-plus"></i></span>
                      </a>
                    </h4>
                    {isOpen && (
                      <div id={`faq${index}`} className="card-collapse">
                        <div className="faq-content">
                          <p dangerouslySetInnerHTML={{ __html: nl2br(faq.answer) }} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className={`fq-empty${filteredFaqs.length === 0 ? ' show' : ''}`} id="fqEmpty">
              No questions match your search. Try a different term, or ask us directly below.
            </div>
          </div>

          {/* Ask a question CTA */}
          <div className="fq-cta">
            <div className="fq-cta-card">
              <div className="fq-cta-text">
                <h3>Still have questions?</h3>
                <p>Can't find the answer you're looking for? Send us your question and our team will get back to you.</p>
              </div>
              <button type="button" className="fq-btn-ask" onClick={() => setShowAskModal(true)}>
                <i className="ti ti-message-circle-2"></i> Ask a Question
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════ ASK A QUESTION MODAL ════════════════════ */}
      {showAskModal && (
        <FqModal
          title="Ask a question"
          subtitle="We'll get back to you by email"
          onClose={() => setShowAskModal(false)}
          formId="fqAskForm"
          onSubmit={submitQuestion}
          footer={
            <>
              <button type="button" className="fq-btn-outline" onClick={() => setShowAskModal(false)}>
                Cancel
              </button>
              <button type="submit" className="fq-btn-ask" disabled={form.processing}>
                <i className="ti ti-send"></i> {form.processing ? 'Sending…' : 'Submit Question'}
              </button>
            </>
          }
        >
          <div className="row g-3">
            <div className="col-12">
              <label className="fq-form-label">
                Your Question <span style={{ color: 'var(--fq-green)' }}>*</span>
              </label>
              <textarea
                className="fq-form-control"
                rows={4}
                placeholder="Type your question here..."
                value={form.data.question}
                onChange={(e) => form.setData('question', e.target.value)}
                required
              />
              {form.errors.question && <div className="fq-form-error">{form.errors.question}</div>}
            </div>
          </div>
        </FqModal>
      )}
    </>
  );
}

Faq.layout = (page) => (
  <GuestLayout children={page} title="FAQ - Future Connect" />
);
