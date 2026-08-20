import{r as x,j as t,H as y,L as i}from"./app-CgjB0zLb.js";import{G as N}from"./GuestLayout-B7urfbcg.js";function o(r,s){try{return route(r,s)}catch{return console.warn(`route("${r}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`),"#"}}function z(r="",s=90){return r.length<=s?r:r.slice(0,s).trimEnd()+"…"}function v(r="",s="?"){return(r||s).slice(0,1).toUpperCase()}const S={skill:"skills.show",project:"projects.show",product:"products.show",talent:"talent.show"};function F(r){if(!r)return"Just now";const s=new Date(r).getTime();if(Number.isNaN(s))return"Just now";const n=Math.max(0,Math.floor((Date.now()-s)/1e3));if(n<60)return"Just now";const l=Math.floor(n/60);if(l<60)return`${l}m ago`;const d=Math.floor(l/60);if(d<24)return`${d}h ago`;const c=Math.floor(d/24);if(c<7)return`${c}d ago`;const h=Math.floor(c/7);return h<5?`${h}w ago`:`${Math.floor(c/30)}mo ago`}function m({up:r,delta:s,floating:n=!1}){return t.jsxs("span",{className:`tr-delta${n?" tr-delta--floating":""} ${r?"is-up":"is-down"}`,children:[r?"▲":"▼"," ",Math.abs(s??0),"%"]})}const T=[{key:"all",label:"All"},{key:"recent",label:"Just Added"},{key:"skills",label:"Skills"},{key:"categories",label:"Categories"},{key:"projects",label:"Projects"},{key:"products",label:"Products"},{key:"talent",label:"Talent"}];function E({tickerItems:r=[],counts:s={all:0,recent:0,skills:0,categories:0,projects:0,products:0,talent:0},trendingSkills:n=[],trendingCategories:l=[],trendingProjects:d=[],trendingProducts:c=[],trendingTalent:h=[],recentlyAdded:f=[]}){const[p,_]=x.useState("all"),b=x.useRef({}),[w,j]=x.useState({width:0,transform:"translateX(0)"});x.useEffect(()=>{function e(){const a=b.current[p];a&&j({width:`${a.offsetWidth}px`,transform:`translateX(${a.offsetLeft-6}px)`})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[p]);const g=e=>p==="all"||p===e,k=p==="recent",u=r.length?[...r,...r]:[];return t.jsxs(t.Fragment,{children:[t.jsx(y,{title:"Trending Now"}),t.jsxs("div",{className:"tr-page",children:[t.jsxs("header",{className:"tr-hero",children:[t.jsxs("div",{className:"tr-hero__inner",children:[t.jsxs("span",{className:"tr-eyebrow",children:[t.jsx("span",{className:"tr-dot"})," Live activity, updated hourly"]}),t.jsx("h1",{className:"tr-title",children:"See who's winning on FutureConnect right now"}),t.jsx("p",{className:"tr-subtitle",children:"Rwanda's sharpest freelancers, the gigs pulling the most proposals, and the newest listings — all in one feed, so you never miss the opportunity that was made for you."}),t.jsxs("div",{className:"tr-hero__cta",children:[t.jsx(i,{href:o("projects.create"),className:"tr-btn tr-btn--primary",children:"Post a project — get proposals today"}),t.jsx(i,{href:o("register"),className:"tr-btn tr-btn--ghost",children:"Join as talent"})]})]}),t.jsx("div",{className:"tr-ticker","aria-label":"Trending skills ticker",children:t.jsx("div",{className:"tr-ticker__track",children:u.length>0?u.map((e,a)=>t.jsxs("span",{className:"tr-ticker__item",children:[e.name??"Skill",t.jsxs("em",{className:e.trend_up??!0?"is-up":"is-down",children:[e.trend_up??!0?"▲":"▼"," ",Math.abs(e.trend_delta??0),"%"]})]},a)):t.jsx("span",{className:"tr-ticker__item",children:"Momentum is building — check back shortly for live trends"})})})]}),t.jsxs("nav",{className:"tr-tabs",id:"trTabs",children:[T.map(e=>t.jsxs("button",{ref:a=>b.current[e.key]=a,className:`tr-tab${p===e.key?" is-active":""}`,onClick:()=>_(e.key),children:[e.label," ",t.jsx("span",{children:s[e.key]??0})]},e.key)),t.jsx("span",{className:"tr-tab__indicator",style:w})]}),k&&t.jsxs("section",{className:"tr-section","data-section":"recent",children:[t.jsxs("div",{className:"tr-section__head",children:[t.jsx("h2",{children:"Just added"}),t.jsx("p",{children:"Fresh off the press — reach out first and skip the competition."})]}),f.length===0?t.jsx("div",{className:"tr-empty",children:"Nothing new in the last few hours — be the first to add something."}):t.jsx("div",{className:"tr-grid tr-grid--recent",children:f.map(e=>t.jsxs(i,{href:o(S[e.type]??"home",e.slug??e.id),className:"tr-card tr-card--recent",children:[t.jsxs("div",{className:"tr-card__top",children:[t.jsxs("span",{className:"tr-badge tr-badge--new",children:["New · ",e.type_label]}),t.jsx("span",{className:"tr-timestamp",children:F(e.created_at)})]}),t.jsx("h3",{className:"tr-card__title",children:e.name}),t.jsx("p",{className:"tr-card__desc",children:e.subtitle})]},`${e.type}-${e.id}`))})]}),g("skills")&&t.jsxs("section",{className:"tr-section","data-section":"skills",children:[t.jsxs("div",{className:"tr-section__head",children:[t.jsx("h2",{children:"In-demand skills"}),t.jsx("p",{children:"What clients can't stop hiring for — list one of these and get found faster."})]}),n.length===0?t.jsx("div",{className:"tr-empty",children:"No trending skills yet — check back soon."}):t.jsx("div",{className:"tr-grid tr-grid--skills",children:n.map(e=>t.jsxs(i,{href:o("skills.show",e.slug??e.id),className:"tr-card tr-card--skill",children:[t.jsxs("span",{className:"tr-rank",children:["#",e.trend_rank]}),t.jsx("span",{className:"tr-card__name",children:e.name}),t.jsx(m,{up:e.trend_up,delta:e.trend_delta}),t.jsxs("span",{className:"tr-card__meta",children:[e.talents_count??0," talents offer this"]})]},e.id))})]}),g("categories")&&t.jsxs("section",{className:"tr-section","data-section":"categories",children:[t.jsxs("div",{className:"tr-section__head",children:[t.jsx("h2",{children:"Where the work is"}),t.jsx("p",{children:"The categories pulling the most new work this month — find your lane and start pitching."})]}),l.length===0?t.jsx("div",{className:"tr-empty",children:"No trending categories yet — check back soon."}):t.jsx("div",{className:"tr-grid tr-grid--categories",children:l.map(e=>t.jsxs(i,{href:o("categories.show",e.slug??e.id),className:"tr-card tr-card--category",children:[t.jsx("span",{className:"tr-icon-tile",children:v(e.name,"C")}),t.jsx("span",{className:"tr-card__name",children:e.name}),t.jsxs("span",{className:"tr-card__meta",children:[e.projects_count??0," active projects"]}),t.jsx(m,{up:e.trend_up,delta:e.trend_delta})]},e.id))})]}),g("projects")&&t.jsxs("section",{className:"tr-section","data-section":"projects",children:[t.jsxs("div",{className:"tr-section__head",children:[t.jsx("h2",{children:"Fresh opportunities"}),t.jsx("p",{children:"New gigs are landing daily — get your proposal in before the best ones fill up."})]}),d.length===0?t.jsx("div",{className:"tr-empty",children:"No trending projects yet — check back soon."}):t.jsx("div",{className:"tr-grid tr-grid--projects",children:d.map(e=>{var a;return t.jsxs(i,{href:o("projects.show",e.slug??e.id),className:"tr-card tr-card--project",children:[t.jsxs("div",{className:"tr-card__top",children:[t.jsx("span",{className:"tr-badge",children:((a=e.category)==null?void 0:a.name)??"General"}),t.jsx(m,{up:e.trend_up,delta:e.trend_delta})]}),t.jsx("h3",{className:"tr-card__title",children:e.title}),t.jsx("p",{className:"tr-card__desc",children:z(e.description??"",90)}),t.jsxs("div",{className:"tr-card__foot",children:[t.jsxs("span",{children:["RWF ",(e.budget_min??0).toLocaleString(),"–",(e.budget_max??0).toLocaleString()]}),t.jsxs("span",{children:[e.proposals_count??0," proposals"]})]})]},e.id)})})]}),g("products")&&t.jsxs("section",{className:"tr-section","data-section":"products",children:[t.jsxs("div",{className:"tr-section__head",children:[t.jsx("h2",{children:"Best-selling services"}),t.jsx("p",{children:"Ready-made products and services converting fastest this month."})]}),c.length===0?t.jsx("div",{className:"tr-empty",children:"No trending products yet — check back soon."}):t.jsx("div",{className:"tr-grid tr-grid--products",children:c.map(e=>{var a;return t.jsxs(i,{href:o("products.show",e.slug??e.id),className:"tr-card tr-card--product",children:[t.jsxs("div",{className:"tr-card__top",children:[t.jsx("span",{className:"tr-badge",children:((a=e.seller)==null?void 0:a.name)??"FutureConnect seller"}),t.jsx(m,{up:e.trend_up,delta:e.trend_delta})]}),t.jsx("h3",{className:"tr-card__title",children:e.title}),t.jsxs("div",{className:"tr-card__foot",children:[t.jsxs("span",{children:["RWF ",(e.price??0).toLocaleString()]}),t.jsxs("span",{children:["★ ",(e.rating??0).toFixed(1)," · ",e.sales_count??0," sold"]})]})]},e.id)})})]}),g("talent")&&t.jsxs("section",{className:"tr-section","data-section":"talent",children:[t.jsxs("div",{className:"tr-section__head",children:[t.jsx("h2",{children:"Rising stars"}),t.jsx("p",{children:"Professionals getting hired again and again — book them before their calendar fills up."})]}),h.length===0?t.jsx("div",{className:"tr-empty",children:"No trending talent yet — check back soon."}):t.jsx("div",{className:"tr-grid tr-grid--talent",children:h.map(e=>{var a;return t.jsxs(i,{href:o("talent.show",e.slug??e.id),className:"tr-card tr-card--talent",children:[t.jsx("div",{className:"tr-avatar",children:v(e.name,"T")}),t.jsx("h3",{className:"tr-card__title",children:e.name}),t.jsx("p",{className:"tr-card__desc",children:((a=e.topSkill)==null?void 0:a.name)??e.title??"Freelance professional"}),t.jsxs("div",{className:"tr-card__foot",children:[t.jsxs("span",{children:["★ ",(e.rating??0).toFixed(1)]}),t.jsxs("span",{children:[e.hires_count??0," hires"]})]}),t.jsx(m,{up:e.trend_up,delta:e.trend_delta,floating:!0})]},e.id)})})]})]}),t.jsx("style",{children:`
        :root {
          --tr-bg: #0e1618;
          --tr-bg-elevated: #131f22;
          --tr-bg-elevated-2: #1a292c;
          --tr-accent: #48d597;
          --tr-accent-dim: #2f8f68;
          --tr-accent-glow: rgba(72, 213, 151, .16);
          --tr-white: #ffffff;
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
          --tr-bg-elevated: #ffffff;
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
          color: #ffffff;
        }
        [data-h-theme="light"] .tr-tab.is-active span {
          background: rgba(255, 255, 255, .25);
          color: #ffffff;
        }

        /* Talent avatar tile has the same --tr-bg-as-dark-text pattern */
        [data-h-theme="light"] .tr-avatar {
          color: #ffffff;
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
          color: #ffffff;
        }
      `})]})}E.layout=r=>t.jsx(N,{children:r});export{E as default};
