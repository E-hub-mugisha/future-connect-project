import React, { useEffect, useRef, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";


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

function truncate(str = "", len = 90) {
  if (str.length <= len) return str;
  return str.slice(0, len).trimEnd() + "…";
}

function firstLetter(str = "", fallback = "?") {
  return (str || fallback).slice(0, 1).toUpperCase();
}

// Route name each "recently added" item type resolves to — keep this in
// sync with the per-section Link hrefs further down the page.
const RECENT_ROUTE_BY_TYPE = {
  skill: "skills.show",
  project: "projects.show",
  product: "products.show",
  talent: "talent.show",
};

function timeAgo(dateString) {
  if (!dateString) return "Just now";
  const then = new Date(dateString).getTime();
  if (Number.isNaN(then)) return "Just now";
  const seconds = Math.max(0, Math.floor((Date.now() - then) / 1000));
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}w ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

function Delta({ up, delta, floating = false }) {
  return (
    <span className={`tr-delta${floating ? " tr-delta--floating" : ""} ${up ? "is-up" : "is-down"}`}>
      {up ? "▲" : "▼"} {Math.abs(delta ?? 0)}%
    </span>
  );
}

const FILTERS = [
  { key: "all", label: "All" },
  { key: "recent", label: "Just Added" },
  { key: "skills", label: "Skills" },
  { key: "categories", label: "Categories" },
  { key: "projects", label: "Projects" },
  { key: "products", label: "Products" },
  { key: "talent", label: "Talent" },
];

export default function Trending({
  tickerItems = [],
  counts = { all: 0, recent: 0, skills: 0, categories: 0, projects: 0, products: 0, talent: 0 },
  trendingSkills = [],
  trendingCategories = [],
  trendingProjects = [],
  trendingProducts = [],
  trendingTalent = [],
  recentlyAdded = [],
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const tabRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, transform: "translateX(0)" });

  useEffect(() => {
    function moveIndicator() {
      const tab = tabRefs.current[activeFilter];
      if (tab) {
        setIndicatorStyle({
          width: `${tab.offsetWidth}px`,
          transform: `translateX(${tab.offsetLeft - 6}px)`,
        });
      }
    }
    moveIndicator();
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
  }, [activeFilter]);

  // "Just Added" is its own dedicated view rather than folded into "All" —
  // it's the same underlying records as the sections below, just re-sorted
  // by recency instead of by trend volume, so showing both under "All"
  // would just duplicate cards.
  const showSection = (key) => activeFilter === "all" || activeFilter === key;
  const showRecent = activeFilter === "recent";
  const tickerLoop = tickerItems.length ? [...tickerItems, ...tickerItems] : [];

  return (
    <>
      <Head title="Trending Now" />

      <div className="tr-page">
        <header className="tr-hero">
          <div className="tr-hero__inner">
            <span className="tr-eyebrow"><span className="tr-dot" /> Live activity, updated hourly</span>
            <h1 className="tr-title">See who's winning on FutureConnect right now</h1>
            <p className="tr-subtitle">
              Rwanda's sharpest freelancers, the gigs pulling the most proposals, and the newest listings —
              all in one feed, so you never miss the opportunity that was made for you.
            </p>
            <div className="tr-hero__cta">
              <Link href={r("projects.create")} className="tr-btn tr-btn--primary">
                Post a project — get proposals today
              </Link>
              <Link href={r("register")} className="tr-btn tr-btn--ghost">
                Join as talent
              </Link>
            </div>
          </div>

          <div className="tr-ticker" aria-label="Trending skills ticker">
            <div className="tr-ticker__track">
              {tickerLoop.length > 0 ? (
                tickerLoop.map((item, i) => (
                  <span className="tr-ticker__item" key={i}>
                    {item.name ?? "Skill"}
                    <em className={item.trend_up ?? true ? "is-up" : "is-down"}>
                      {(item.trend_up ?? true) ? "▲" : "▼"} {Math.abs(item.trend_delta ?? 0)}%
                    </em>
                  </span>
                ))
              ) : (
                <span className="tr-ticker__item">Momentum is building — check back shortly for live trends</span>
              )}
            </div>
          </div>
        </header>

        <nav className="tr-tabs" id="trTabs">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              ref={(el) => (tabRefs.current[f.key] = el)}
              className={`tr-tab${activeFilter === f.key ? " is-active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label} <span>{counts[f.key] ?? 0}</span>
            </button>
          ))}
          <span className="tr-tab__indicator" style={indicatorStyle} />
        </nav>

        {showRecent && (
          <section className="tr-section" data-section="recent">
            <div className="tr-section__head">
              <h2>Just added</h2>
              <p>Fresh off the press — reach out first and skip the competition.</p>
            </div>

            {recentlyAdded.length === 0 ? (
              <div className="tr-empty">Nothing new in the last few hours — be the first to add something.</div>
            ) : (
              <div className="tr-grid tr-grid--recent">
                {recentlyAdded.map((item) => (
                  <Link
                    key={`${item.type}-${item.id}`}
                    href={r(RECENT_ROUTE_BY_TYPE[item.type] ?? "home", item.slug ?? item.id)}
                    className="tr-card tr-card--recent"
                  >
                    <div className="tr-card__top">
                      <span className="tr-badge tr-badge--new">New · {item.type_label}</span>
                      <span className="tr-timestamp">{timeAgo(item.created_at)}</span>
                    </div>
                    <h3 className="tr-card__title">{item.name}</h3>
                    <p className="tr-card__desc">{item.subtitle}</p>
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}

        {showSection("skills") && (
          <section className="tr-section" data-section="skills">
            <div className="tr-section__head">
              <h2>In-demand skills</h2>
              <p>What clients can't stop hiring for — list one of these and get found faster.</p>
            </div>

            {trendingSkills.length === 0 ? (
              <div className="tr-empty">No trending skills yet — check back soon.</div>
            ) : (
              <div className="tr-grid tr-grid--skills">
                {trendingSkills.map((skill) => (
                  <Link
                    key={skill.id}
                    href={r("skills.show", skill.slug ?? skill.id)}
                    className="tr-card tr-card--skill"
                  >
                    <span className="tr-rank">#{skill.trend_rank}</span>
                    <span className="tr-card__name">{skill.name}</span>
                    <Delta up={skill.trend_up} delta={skill.trend_delta} />
                    <span className="tr-card__meta">{skill.talents_count ?? 0} talents offer this</span>
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}

        {showSection("categories") && (
          <section className="tr-section" data-section="categories">
            <div className="tr-section__head">
              <h2>Where the work is</h2>
              <p>The categories pulling the most new work this month — find your lane and start pitching.</p>
            </div>

            {trendingCategories.length === 0 ? (
              <div className="tr-empty">No trending categories yet — check back soon.</div>
            ) : (
              <div className="tr-grid tr-grid--categories">
                {trendingCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={r("categories.show", category.slug ?? category.id)}
                    className="tr-card tr-card--category"
                  >
                    <span className="tr-icon-tile">{firstLetter(category.name, "C")}</span>
                    <span className="tr-card__name">{category.name}</span>
                    <span className="tr-card__meta">{category.projects_count ?? 0} active projects</span>
                    <Delta up={category.trend_up} delta={category.trend_delta} />
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}

        {showSection("projects") && (
          <section className="tr-section" data-section="projects">
            <div className="tr-section__head">
              <h2>Fresh opportunities</h2>
              <p>New gigs are landing daily — get your proposal in before the best ones fill up.</p>
            </div>

            {trendingProjects.length === 0 ? (
              <div className="tr-empty">No trending projects yet — check back soon.</div>
            ) : (
              <div className="tr-grid tr-grid--projects">
                {trendingProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={r("projects.show", project.slug ?? project.id)}
                    className="tr-card tr-card--project"
                  >
                    <div className="tr-card__top">
                      <span className="tr-badge">{project.category?.name ?? "General"}</span>
                      <Delta up={project.trend_up} delta={project.trend_delta} />
                    </div>
                    <h3 className="tr-card__title">{project.title}</h3>
                    <p className="tr-card__desc">{truncate(project.description ?? "", 90)}</p>
                    <div className="tr-card__foot">
                      <span>
                        RWF {(project.budget_min ?? 0).toLocaleString()}–{(project.budget_max ?? 0).toLocaleString()}
                      </span>
                      <span>{project.proposals_count ?? 0} proposals</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}

        {showSection("products") && (
          <section className="tr-section" data-section="products">
            <div className="tr-section__head">
              <h2>Best-selling services</h2>
              <p>Ready-made products and services converting fastest this month.</p>
            </div>

            {trendingProducts.length === 0 ? (
              <div className="tr-empty">No trending products yet — check back soon.</div>
            ) : (
              <div className="tr-grid tr-grid--products">
                {trendingProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={r("products.show", product.slug ?? product.id)}
                    className="tr-card tr-card--product"
                  >
                    <div className="tr-card__top">
                      <span className="tr-badge">{product.seller?.name ?? "FutureConnect seller"}</span>
                      <Delta up={product.trend_up} delta={product.trend_delta} />
                    </div>
                    <h3 className="tr-card__title">{product.title}</h3>
                    <div className="tr-card__foot">
                      <span>RWF {(product.price ?? 0).toLocaleString()}</span>
                      <span>★ {(product.rating ?? 0).toFixed(1)} · {product.sales_count ?? 0} sold</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}

        {showSection("talent") && (
          <section className="tr-section" data-section="talent">
            <div className="tr-section__head">
              <h2>Rising stars</h2>
              <p>Professionals getting hired again and again — book them before their calendar fills up.</p>
            </div>

            {trendingTalent.length === 0 ? (
              <div className="tr-empty">No trending talent yet — check back soon.</div>
            ) : (
              <div className="tr-grid tr-grid--talent">
                {trendingTalent.map((talent) => (
                  <Link
                    key={talent.id}
                    href={r("talent.show", talent.slug ?? talent.id)}
                    className="tr-card tr-card--talent"
                  >
                    <div className="tr-avatar">{firstLetter(talent.name, "T")}</div>
                    <h3 className="tr-card__title">{talent.name}</h3>
                    <p className="tr-card__desc">{talent.topSkill?.name ?? talent.title ?? "Freelance professional"}</p>
                    <div className="tr-card__foot">
                      <span>★ {(talent.rating ?? 0).toFixed(1)}</span>
                      <span>{talent.hires_count ?? 0} hires</span>
                    </div>
                    <Delta up={talent.trend_up} delta={talent.trend_delta} floating />
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}
      </div>

      <style>{`
        :root {
          --tr-bg: #0e1618;
          --tr-bg-elevated: #131f22;
          --tr-bg-elevated-2: #1a292c;
          --tr-accent: #48d597;
          --tr-accent-dim: #2f8f68;
          --tr-accent-glow: rgba(72, 213, 151, .16);
          --tr-white: #F5f5f7;
          --tr-muted: #9fb3b0;
          --tr-border: rgba(255, 255, 255, .08);
          --tr-danger: #ef7b6a;
          --tr-new: #ffb648;
          --tr-new-glow: rgba(255, 182, 72, .16);
          /* SF Pro is the San Francisco system font. Apple's font license only
             permits shipping the actual SF Pro font files inside apps that run
             on Apple platforms — it can't be self-hosted for a public website.
             The -apple-system / BlinkMacSystemFont stack below is the
             license-safe way to get real San Francisco rendering on macOS/iOS
             (Safari and Chrome resolve it to the OS's system font), with
             sensible fallbacks elsewhere. */
          --tr-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
            "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .tr-page {
          background: var(--tr-bg); color: var(--tr-white);
          font-family: var(--tr-font);
          padding: 0 0 80px;
        }

        .tr-hero { padding: 64px 24px 0; max-width: 1180px; margin: 0 auto; }
        .tr-hero__inner { max-width: 640px; }
        .tr-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600;
          letter-spacing: .06em; text-transform: uppercase; color: var(--tr-accent); margin-bottom: 18px;
        }
        .tr-dot {
          width: 7px; height: 7px; border-radius: 50%; background: var(--tr-accent);
          box-shadow: 0 0 0 4px var(--tr-accent-glow); animation: tr-pulse 1.8s ease-in-out infinite;
        }
        @keyframes tr-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .35; } }

        .tr-title {
          font-family: var(--tr-font); font-size: clamp(32px, 4.5vw, 48px); font-weight: 700;
          line-height: 1.1; letter-spacing: -.02em; margin: 0 0 14px;
        }
        .tr-subtitle { color: var(--tr-muted); font-size: 16px; line-height: 1.6; margin: 0 0 28px; }

        .tr-hero__cta { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 40px; }
        .tr-btn {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 22px;
          border-radius: 12px; font-size: 14.5px; font-weight: 700; text-decoration: none;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .tr-btn:hover { transform: translateY(-2px); }
        .tr-btn--primary { background: var(--tr-accent); color: var(--tr-bg); }
        .tr-btn--primary:hover { background: var(--tr-accent-dim); }
        .tr-btn--ghost { background: transparent; color: var(--tr-white); border: 1px solid var(--tr-border); }
        .tr-btn--ghost:hover { border-color: var(--tr-accent-dim); }

        .tr-ticker {
          border-top: 1px solid var(--tr-border); border-bottom: 1px solid var(--tr-border); overflow: hidden;
          background: linear-gradient(90deg, var(--tr-bg) 0%, transparent 4%, transparent 96%, var(--tr-bg) 100%), var(--tr-bg-elevated);
          margin: 0 -24px; padding: 0 24px;
        }
        .tr-ticker__track { display: flex; width: max-content; animation: tr-scroll 32s linear infinite; }
        .tr-ticker:hover .tr-ticker__track { animation-play-state: paused; }
        @keyframes tr-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .tr-ticker__item {
          display: flex; align-items: center; gap: 10px; padding: 16px 28px; font-size: 14px; font-weight: 600;
          white-space: nowrap; border-right: 1px solid var(--tr-border);
        }
        .tr-ticker__item em { font-style: normal; font-weight: 700; font-size: 12.5px; }
        .tr-ticker__item .is-up { color: var(--tr-accent); }
        .tr-ticker__item .is-down { color: var(--tr-danger); }

        .tr-tabs {
          position: sticky; top: 0; z-index: 20; display: flex; gap: 4px; max-width: 1180px; margin: 32px auto 0;
          padding: 6px; background: rgba(19, 31, 34, .92); backdrop-filter: blur(10px); border: 1px solid var(--tr-border);
          border-radius: 14px; overflow-x: auto; scrollbar-width: none;
        }
        .tr-tabs::-webkit-scrollbar { display: none; }
        .tr-tab {
          position: relative; z-index: 1; flex: none; display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px; background: transparent; border: none; border-radius: 10px; color: var(--tr-muted);
          font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; transition: color .2s ease;
        }
        .tr-tab span {
          font-size: 12px; font-weight: 700; color: var(--tr-muted); background: rgba(255, 255, 255, .06);
          border-radius: 999px; padding: 1px 8px;
        }
        .tr-tab.is-active { color: var(--tr-bg); }
        .tr-tab.is-active span { background: rgba(14, 22, 24, .18); color: var(--tr-bg); }
        .tr-tab__indicator {
          position: absolute; top: 6px; left: 6px; height: calc(100% - 12px); background: var(--tr-accent);
          border-radius: 10px; transition: transform .28s cubic-bezier(.4, 0, .2, 1), width .28s cubic-bezier(.4, 0, .2, 1);
          z-index: 0;
        }

        .tr-section { max-width: 1180px; margin: 0 auto; padding: 56px 24px 0; scroll-margin-top: 90px; }
        .tr-section__head { margin-bottom: 24px; }
        .tr-section__head h2 { font-family: var(--tr-font); font-size: 24px; font-weight: 700; margin: 0 0 4px; }
        .tr-section__head p { color: var(--tr-muted); font-size: 14.5px; margin: 0; }

        .tr-empty {
          border: 1px dashed var(--tr-border); border-radius: 14px; padding: 32px; text-align: center;
          color: var(--tr-muted); font-size: 14px;
        }

        .tr-card {
          position: relative; display: flex; flex-direction: column; background: var(--tr-bg-elevated);
          border: 1px solid var(--tr-border); border-radius: 16px; padding: 20px; text-decoration: none;
          color: var(--tr-white); transition: border-color .2s ease, transform .2s ease, background .2s ease;
        }
        .tr-card:hover { border-color: var(--tr-accent-dim); background: var(--tr-bg-elevated-2); transform: translateY(-3px); }

        .tr-delta { font-size: 12.5px; font-weight: 700; padding: 3px 9px; border-radius: 999px; width: fit-content; }
        .tr-delta.is-up { color: var(--tr-accent); background: rgba(72, 213, 151, .12); }
        .tr-delta.is-down { color: var(--tr-danger); background: rgba(239, 123, 106, .12); }
        .tr-delta--floating { position: absolute; top: 18px; right: 18px; }

        .tr-grid { display: grid; gap: 16px; }
        .tr-grid--skills { grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); }
        .tr-grid--categories { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
        .tr-grid--projects, .tr-grid--products, .tr-grid--recent { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
        .tr-grid--talent { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }

        .tr-card--skill { gap: 8px; }
        .tr-rank { font-size: 12px; font-weight: 700; color: var(--tr-muted); letter-spacing: .04em; }
        .tr-card__name { font-size: 17px; font-weight: 700; }
        .tr-card__meta { font-size: 12.5px; color: var(--tr-muted); margin-top: auto; }

        .tr-card--category { gap: 10px; align-items: flex-start; }
        .tr-icon-tile {
          width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
          background: var(--tr-accent-glow); color: var(--tr-accent); font-family: var(--tr-font); font-weight: 700; font-size: 18px;
        }

        .tr-card__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; gap: 10px; }
        .tr-badge {
          font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: var(--tr-muted);
          border: 1px solid var(--tr-border); border-radius: 999px; padding: 3px 10px;
        }
        .tr-badge--new { color: var(--tr-new); background: var(--tr-new-glow); border-color: transparent; }
        .tr-timestamp { font-size: 12px; font-weight: 600; color: var(--tr-muted); white-space: nowrap; }
        .tr-card__title { font-size: 17px; font-weight: 700; margin: 0 0 8px; line-height: 1.35; }
        .tr-card__desc { font-size: 13.5px; color: var(--tr-muted); line-height: 1.55; margin: 0 0 16px; }
        .tr-card__foot {
          display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 14px;
          border-top: 1px solid var(--tr-border); font-size: 13px; color: var(--tr-muted); font-weight: 600;
        }
        .tr-card__foot span:first-child { color: var(--tr-accent); }

        .tr-card--recent { border-color: rgba(255, 182, 72, .18); }
        .tr-card--recent:hover { border-color: var(--tr-new); }
        .tr-card--recent .tr-card__desc { margin-bottom: 0; }

        .tr-card--talent { align-items: flex-start; padding-top: 24px; }
        .tr-avatar {
          width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          background: var(--tr-accent); color: var(--tr-bg); font-family: var(--tr-font); font-weight: 700;
          font-size: 18px; margin-bottom: 14px;
        }

        @media (max-width: 640px) {
          .tr-hero { padding-top: 40px; }
          .tr-section { padding-top: 40px; }
          .tr-tabs { top: 0; }
          .tr-hero__cta { flex-direction: column; align-items: stretch; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tr-ticker__track { animation: none; }
          .tr-dot { animation: none; }
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --tr-bg: #f6faf8;
          --tr-bg-elevated: #F5f5f7;
          --tr-bg-elevated-2: #eef4f1;
          --tr-accent: #00a667;
          --tr-accent-dim: #00c07a;
          --tr-accent-glow: rgba(0, 166, 103, .16);
          --tr-white: #10201b;
          --tr-muted: #5b7a70;
          --tr-border: rgba(0, 100, 60, .12);
          --tr-danger: #c0392b;
          --tr-new: #b3690a;
          --tr-new-glow: rgba(179, 105, 10, .12);
        }

        /* Active tab used --tr-bg as its (dark) contrast text color against the
           green pill background. On light theme --tr-bg is now pale, so that
           text would vanish — force explicit white instead */
        [data-h-theme="light"] .tr-tab.is-active {
          color: #F5f5f7;
        }
        [data-h-theme="light"] .tr-tab.is-active span {
          background: rgba(255, 255, 255, .25);
          color: #F5f5f7;
        }

        /* Talent avatar tile has the same --tr-bg-as-dark-text pattern */
        [data-h-theme="light"] .tr-avatar {
          color: #F5f5f7;
        }

        /* Sticky tabs bar background was a translucent dark-navy blur — swap
           to a translucent light blur so it doesn't float as a dark bar over
           an otherwise light page */
        [data-h-theme="light"] .tr-tabs {
          background: rgba(255, 255, 255, .85);
        }

        /* Primary CTA button used --tr-bg as its (dark) contrast text color —
           same pattern as the active tab above, needs an explicit override
           on light theme so the label doesn't vanish against the green fill */
        [data-h-theme="light"] .tr-btn--primary {
          color: #F5f5f7;
        }
      `}</style>
    </>
  );
}

Trending.layout = (page) => <GuestLayout children={page} />;