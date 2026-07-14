import React, { useEffect, useRef, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

/**
 * Pricing (Inertia page component)
 * ---------------------------------
 * React/Inertia port of the Blade "Pricing" view, redesigned toward a
 * cleaner, more professional (Upwork-style) marketplace look: a lot more
 * whitespace, a pill-style billing switch instead of tabs, prices shown up
 * front, a single confident accent color, and cards that lean on subtle
 * borders/shadows rather than glow effects.
 *
 * Notes on the conversion from Blade:
 * - `route('name')` goes through the same safe `r()` wrapper used across
 *   the other pages (falls back to `#` + a console warning if Ziggy's
 *   `window.Ziggy` isn't set up — see the `@routes` note from Home.jsx).
 * - `$plans` (Eloquent collection with nested `prices` and `features`)
 *   became a `plans` prop: `{ id, name, subtitle, is_featured, limit_text,
 *   features: string[], prices: [{ billing_cycle: 'monthly'|'annually', price }] }`.
 * - `auth()->guest()` / `auth()->user()->hasUsedTrial()` became an `auth`
 *   prop: `null` for a guest, or `{ hasUsedTrial: boolean }` for a logged-in
 *   user — pass this from a shared Inertia prop (e.g. via
 *   `HandleInertiaRequests::share()`) rather than a page-specific one if
 *   you already share `auth.user` globally.
 * - The trial-activation `<form>` and the "Confirm & Subscribe" modal form
 *   became Inertia's `useForm()` — this gets you CSRF handling, validation
 *   error propagation, and a `processing` state for free, no manual
 *   `@csrf` hidden input needed.
 * - The Bootstrap tab toggle (`data-bs-toggle="tab"`) became a `billing`
 *   state (`'monthly' | 'annually'`), rendered as a pill switch.
 * - The Bootstrap "Confirm Subscription" modal (opened via
 *   `data-bs-toggle="modal"` + a `show.bs.modal` listener reading
 *   `data-*` attributes off the clicked button) still uses Bootstrap's own
 *   modal component (same as the rest of this app), but driven
 *   imperatively from React: a `bootstrap.Modal` instance is created once
 *   in a `useEffect`, and "Choose Plan" sets `selectedPlan` state *then*
 *   calls `.show()` on it — no DOM `data-*` attribute round-trip needed.
 *   This assumes `window.bootstrap` is available globally (Bootstrap's JS
 *   bundle loaded in your app entry/layout, same as elsewhere in this app).
 * - The page's own light/dark theme sync script (for standalone use
 *   outside the header) became a `useEffect` — see `useStandaloneTheme()`
 *   below. It's optional: if this page always renders inside the shared
 *   `GuestLayout`/`UserHeader`, you can delete it and rely on the header's
 *   toggle alone. The page's colors are CSS variables scoped under
 *   `.pp-page`, with a dark-mode default and a `[data-h-theme="light"]`
 *   override — same pattern as the rest of the site, so the header's
 *   theme toggle now actually changes this page's palette.
 */

function r(name, params) {
  try {
    return route(name, params);
  } catch (e) {
    console.warn(
      `route("${name}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`
    );
    return "#";
  }
}

function useStandaloneTheme() {
  React.useEffect(() => {
    const root = document.documentElement;
    const STORAGE_KEY = "fc-theme";

    function applyTheme(theme) {
      if (theme === "light") root.setAttribute("data-h-theme", "light");
      else root.removeAttribute("data-h-theme");
    }

    function storedOrSystemTheme() {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") return stored;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }

    // Only self-apply if no header toggle exists on the page to have
    // already set the attribute.
    if (!document.querySelector("#fcThemeToggle, [data-theme-toggle]")) {
      applyTheme(storedOrSystemTheme());
    }

    function handleStorage(e) {
      if (e.key === STORAGE_KEY) applyTheme(e.newValue === "light" ? "light" : "dark");
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
}

function priceForCycle(plan, cycle) {
  return plan.prices?.find((p) => p.billing_cycle === cycle) || null;
}

export default function Pricing({ plans = [], auth = null }) {
  useStandaloneTheme();

  const [billing, setBilling] = useState("annually");
  const [selectedPlan, setSelectedPlan] = useState(null); // { id, name, price, cycle }

  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const trialForm = useForm({});
  const subscribeForm = useForm({ plan_id: "", billing_cycle: "" });

  useEffect(() => {
    if (window.bootstrap && modalRef.current) {
      bsModalRef.current = new window.bootstrap.Modal(modalRef.current);
      // Keep React state in sync if the modal gets dismissed any other
      // way (Esc key, backdrop click, close button — all handled by
      // Bootstrap itself, we just need to know when it happens).
      modalRef.current.addEventListener("hidden.bs.modal", () => setSelectedPlan(null));
    }
    return () => bsModalRef.current?.dispose();
  }, []);

  const openConfirm = (plan, price, cycle) => {
    setSelectedPlan({ id: plan.id, name: plan.name, price: price.price ?? price.amount, cycle });
    subscribeForm.setData({ plan_id: plan.id, billing_cycle: cycle });
    bsModalRef.current?.show();
  };

  const closeConfirm = () => bsModalRef.current?.hide();

  const submitSubscribe = (e) => {
    e.preventDefault();
    subscribeForm.post(r("subscribe"), {
      onSuccess: () => bsModalRef.current?.hide(),
    });
  };

  const submitTrial = (e) => {
    e.preventDefault();
    trialForm.post(r("trial.activate"));
  };

  const visiblePlans = plans
    .map((plan) => ({ plan, price: priceForCycle(plan, billing) }))
    .filter((entry) => entry.price);

  return (
    <>
      <Head title="Pricing Plan" />

      <style>{`
        .pp-page * { box-sizing: border-box; }

        /* Dark theme (default — matches the rest of the site's dark mode) */
        .pp-page {
          --pp-bg: #0e1618;
          --pp-surface: #131e21;
          --pp-border: #223338;
          --pp-border-soft: #1a2a2e;
          --pp-accent: #48d597;
          --pp-accent-dark: #2fb87d;
          --pp-accent-tint: rgba(72, 213, 151, 0.12);
          --pp-text: #f0f4f3;
          --pp-text-soft: #dce8e6;
          --pp-muted: #8da4a0;
          --pp-muted2: #62787a;
          --pp-badge-bg: rgba(72, 213, 151, 0.12);
          --pp-badge-border: rgba(72, 213, 151, 0.3);
          --pp-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
          --pp-shadow-hover: 0 16px 36px rgba(0, 0, 0, 0.45);
          background: var(--pp-bg);
          font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;
          transition: background 0.2s;
        }

        /* Light theme override — toggled via data-h-theme="light" on <html>,
           the same attribute the header's theme switch sets. */
        [data-h-theme="light"] .pp-page {
          --pp-bg: #f7f8fa;
          --pp-surface: #ffffff;
          --pp-border: #e4e7eb;
          --pp-border-soft: #edeff2;
          --pp-accent: #00a667;
          --pp-accent-dark: #00814f;
          --pp-accent-tint: #eafbe7;
          --pp-text: #1a1a1a;
          --pp-text-soft: #2c2c2c;
          --pp-muted: #5e6b74;
          --pp-muted2: #8a97a0;
          --pp-badge-bg: #eafbe7;
          --pp-badge-border: #b8ebae;
          --pp-shadow: 0 1px 2px rgba(20, 24, 28, 0.04);
          --pp-shadow-hover: 0 12px 28px rgba(20, 24, 28, 0.08);
        }

        .pp-eyebrow {
          display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600;
          color: var(--pp-accent-dark); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px;
        }

        /* ===== TRIAL BANNER ===== */
        .pp-trial-banner {
          background: var(--pp-surface);
          border: 1px solid var(--pp-border);
          border-radius: 12px;
          padding: 40px 40px;
          margin: 32px 0;
          box-shadow: var(--pp-shadow);
        }
        .pp-trial-image img { max-height: 220px; object-fit: contain; }
        .pp-trial-banner h2 { font-size: 24px; font-weight: 700; color: var(--pp-text); line-height: 1.3; margin-bottom: 8px; }
        .pp-trial-banner p { font-size: 14px; color: var(--pp-muted); margin-bottom: 20px; }

        .pp-btn-primary {
          display: inline-flex; align-items: center; gap: 8px; background: var(--pp-accent); color: #fff;
          border: none; padding: 12px 26px; border-radius: 6px; font-size: 14px; font-weight: 600;
          text-decoration: none; cursor: pointer; transition: background 0.15s;
        }
        .pp-btn-primary:hover { background: var(--pp-accent-dark); color: #fff; }
        .pp-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

        .pp-btn-outline {
          display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--pp-text-soft);
          border: 1px solid var(--pp-border); padding: 11px 22px; border-radius: 6px; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: border-color 0.15s, color 0.15s;
        }
        .pp-btn-outline:hover { border-color: var(--pp-muted2); color: var(--pp-text); }

        .pp-trial-note { display: block; font-size: 12.5px; color: var(--pp-muted2); margin-top: 14px; }

        /* ===== PRICING SECTION ===== */
        .pp-price-section { padding: 48px 0 88px; }

        .pp-section-head { text-align: center; max-width: 560px; margin: 0 auto 40px; }
        .pp-section-head h1 { font-size: 32px; font-weight: 700; color: var(--pp-text); margin-bottom: 10px; }
        .pp-section-head p { font-size: 15px; color: var(--pp-muted); }

        /* Billing switch — pill style */
        .pp-billing-switch {
          display: inline-flex; align-items: center; gap: 4px; background: var(--pp-surface);
          border: 1px solid var(--pp-border); border-radius: 999px; padding: 4px; box-shadow: var(--pp-shadow);
        }
        .pp-billing-switch button {
          border: none; background: transparent; padding: 9px 22px; border-radius: 999px; font-size: 13.5px;
          font-weight: 600; color: var(--pp-muted); cursor: pointer; transition: background 0.15s, color 0.15s;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .pp-billing-switch button.active { background: var(--pp-accent); color: #fff; }
        .pp-billing-switch .pp-save-tag {
          font-size: 10.5px; font-weight: 700; background: rgba(255,255,255,0.25); padding: 1px 6px; border-radius: 999px;
        }
        .pp-billing-switch button:not(.active) .pp-save-tag { background: var(--pp-accent-tint); color: var(--pp-accent-dark); }

        .pp-switch-wrap { display: flex; justify-content: center; margin-bottom: 44px; }

        /* Price cards */
        .pp-price-card {
          background: var(--pp-surface); border: 1px solid var(--pp-border); border-radius: 14px;
          padding: 32px 28px; height: 100%; display: flex; flex-direction: column;
          box-shadow: var(--pp-shadow); transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
        }
        .pp-price-card:hover { box-shadow: var(--pp-shadow-hover); transform: translateY(-2px); }
        .pp-price-card.featured { border: 2px solid var(--pp-accent); position: relative; }
        .pp-featured-ribbon {
          position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
          background: var(--pp-accent); color: #fff; font-size: 11px; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase; padding: 5px 16px; border-radius: 999px;
          box-shadow: 0 4px 10px rgba(20, 168, 0, 0.3);
        }

        .pp-plan-name { font-size: 18px; font-weight: 700; color: var(--pp-text); margin: 0 0 4px; }
        .pp-plan-subtitle { font-size: 13px; color: var(--pp-muted); margin: 0 0 20px; }

        .pp-amount-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
        .pp-amount-row .pp-amount { font-size: 38px; font-weight: 800; color: var(--pp-text); line-height: 1; }
        .pp-amount-row .pp-cycle { font-size: 13.5px; color: var(--pp-muted); }
        .pp-limit-text { font-size: 12.5px; color: var(--pp-muted2); margin-bottom: 24px; }

        .pp-divider { border: none; border-top: 1px solid var(--pp-border-soft); margin: 0 0 22px; }

        .pp-features-label { font-size: 11px; font-weight: 700; color: var(--pp-muted2); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px; }
        .pp-features { flex: 1; list-style: none; margin: 0 0 26px; padding: 0; display: flex; flex-direction: column; gap: 11px; }
        .pp-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 13.5px; color: var(--pp-text-soft); line-height: 1.5; }
        .pp-features li .pp-check {
          width: 18px; height: 18px; border-radius: 50%; background: var(--pp-accent-tint); color: var(--pp-accent-dark);
          display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; margin-top: 1px;
        }

        .pp-choose-btn {
          margin-top: auto; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer;
          border: 1.5px solid var(--pp-accent); background: transparent; color: var(--pp-accent-dark);
          transition: background 0.15s, color 0.15s;
        }
        .pp-choose-btn:hover { background: var(--pp-accent-tint); }
        .pp-price-card.featured .pp-choose-btn { background: var(--pp-accent); color: #fff; }
        .pp-price-card.featured .pp-choose-btn:hover { background: var(--pp-accent-dark); }

        .pp-empty-state { text-align: center; padding: 60px 20px; color: var(--pp-muted); }

        /* ===== MODAL (Bootstrap's own .modal component, themed with the
           same --pp-* variables as the rest of this page) ===== */
        #confirmPlanModal .modal-content {
          background: var(--pp-surface) !important;
          border: 1px solid var(--pp-border) !important;
          border-radius: 14px !important;
          overflow: hidden;
        }
        #confirmPlanModal .modal-header {
          background: var(--pp-accent-tint) !important;
          border-bottom: 1px solid var(--pp-border-soft) !important;
          padding: 20px 24px;
        }
        #confirmPlanModal .modal-title { font-size: 16px; font-weight: 700; color: var(--pp-text); }
        #confirmPlanModal .btn-close-white {
          filter: invert(1) grayscale(1) brightness(2);
          opacity: 0.6;
        }
        [data-h-theme="light"] #confirmPlanModal .btn-close-white { filter: none; }
        #confirmPlanModal .btn-close-white:hover { opacity: 1; }
        #confirmPlanModal .modal-body { padding: 24px; background: var(--pp-surface); }
        #confirmPlanModal .modal-body p.pp-lead { font-size: 13px; color: var(--pp-muted); margin-bottom: 8px; }
        #confirmPlanModal .modal-body h4 { font-size: 19px; font-weight: 700; color: var(--pp-text); margin: 0 0 4px; }
        #confirmPlanModal .modal-body .pp-price-line { font-size: 13px; color: var(--pp-muted2); margin-bottom: 16px; }
        #confirmPlanModal .pp-modal-alert {
          background: var(--pp-accent-tint); border: 1px solid var(--pp-badge-border); color: var(--pp-accent-dark);
          border-radius: 8px; font-size: 13px; padding: 12px 16px;
        }
        #confirmPlanModal .modal-footer {
          background: var(--pp-bg); border-top: 1px solid var(--pp-border-soft) !important; padding: 16px 24px;
          display: flex; gap: 10px; justify-content: flex-end;
        }

        @media (max-width: 767px) {
          .pp-trial-banner { padding: 28px 24px; }
          .pp-section-head h1 { font-size: 26px; }
        }
      `}</style>

      <div className="pp-page">
        {/* TRIAL BANNER */}
        <div className="container mt-4">
          <div className="pp-trial-banner">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="pp-trial-image position-relative d-lg-block d-none text-center">
                  <img src="/assets/img/home/jointeam.svg" alt="Join Future Connect" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-5">
                <span className="pp-eyebrow">Free Trial</span>
                <h2>Start with a 7-day free trial</h2>
                <p>Access all basic features — no commitment required.</p>

                {!auth && (
                  <Link href={r("trial.start")} className="pp-btn-primary">
                    Start Free Trial
                  </Link>
                )}
                {auth && !auth.hasUsedTrial && (
                  <form onSubmit={submitTrial}>
                    <button type="submit" className="pp-btn-primary" disabled={trialForm.processing}>
                      {trialForm.processing ? "Starting…" : "Start Free Trial"}
                    </button>
                  </form>
                )}

                <span className="pp-trial-note d-lg-block d-none">
                  Takes less than 5 minutes — you stay in control of your work.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PRICING SECTION */}
        <section className="pp-price-section">
          <div className="container">
            <div className="pp-section-head">
              <h1>Simple, transparent pricing</h1>
              <p>Pick the plan that fits how you work. Switch or cancel anytime.</p>
            </div>

            <div className="pp-switch-wrap">
              <div className="pp-billing-switch" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === "monthly"}
                  className={billing === "monthly" ? "active" : ""}
                  onClick={() => setBilling("monthly")}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === "annually"}
                  className={billing === "annually" ? "active" : ""}
                  onClick={() => setBilling("annually")}
                >
                  Yearly <span className="pp-save-tag">Save 20%</span>
                </button>
              </div>
            </div>

            {visiblePlans.length === 0 ? (
              <p className="pp-empty-state">No plans available for this billing cycle yet.</p>
            ) : (
              <div className="row justify-content-center">
                {visiblePlans.map(({ plan, price }) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={plan.id}>
                    <div className={`pp-price-card${plan.is_featured ? " featured" : ""}`}>
                      {plan.is_featured && <span className="pp-featured-ribbon">Most Popular</span>}

                      <h3 className="pp-plan-name">{plan.name}</h3>
                      <p className="pp-plan-subtitle">
                        {plan.subtitle ?? (billing === "monthly" ? "Perfect plan for you" : "Best yearly value")}
                      </p>

                      <div className="pp-amount-row">
                        <span className="pp-amount">${price.price ?? price.amount}</span>
                        <span className="pp-cycle">/ {billing === "monthly" ? "month" : "year"}</span>
                      </div>
                      {plan.limit_text && <p className="pp-limit-text">{plan.limit_text}</p>}

                      <hr className="pp-divider" />

                      <div className="pp-features-label">Includes</div>
                      <ul className="pp-features">
                        {(plan.features || []).map((feature, i) => (
                          <li key={i}>
                            <span className="pp-check"><i className="ti ti-check" /></span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        className="pp-choose-btn"
                        onClick={() => openConfirm(plan, price, billing)}
                      >
                        <i className="ti ti-shopping-cart" /> Choose Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* CONFIRM MODAL — Bootstrap's own .modal component. Always mounted
          (Bootstrap needs a stable DOM node to control), content driven by
          `selectedPlan` state, shown/hidden imperatively via bsModalRef
          from openConfirm()/closeConfirm() rather than data-bs-* attrs. */}
      <div className="modal fade" id="confirmPlanModal" ref={modalRef} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Subscription</h5>
              <button type="button" className="btn-close btn-close-white" onClick={closeConfirm} aria-label="Close" />
            </div>

            <form onSubmit={submitSubscribe}>
              <div className="modal-body">
                <p className="pp-lead mb-2">You are about to subscribe to:</p>
                <h4>{selectedPlan?.name}</h4>
                <p className="pp-price-line">
                  ${selectedPlan?.price} / {selectedPlan?.cycle}
                </p>
                <div className="pp-modal-alert mt-3">
                  This plan will be activated immediately after confirmation.
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="pp-btn-outline" onClick={closeConfirm}>
                  Cancel
                </button>
                <button type="submit" className="pp-btn-primary" disabled={subscribeForm.processing}>
                  {subscribeForm.processing ? "Confirming…" : "Confirm & Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Pricing.layout = (page) => <GuestLayout children={page} />;