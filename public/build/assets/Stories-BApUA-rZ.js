import{r as s,j as e,H as C,L as l,a as k}from"./app-BO26Fp_i.js";import{G as E}from"./GuestLayout-RkVoz6LJ.js";const n={storiesFilter:"/stories/filter",storyCategory:a=>`/story/category/${a}`,storyDetails:a=>`/story-details/${a}`},F={approved:{label:"Approved",icon:"ti-bolt",className:"status-approved"},pending:{label:"Pending",icon:"ti-clock",className:"status-pending"}};function $(a){return a.replace(/&laquo;/g,"‹").replace(/&raquo;/g,"›").replace(/Previous/i,"Prev")}function D({featuredStories:a=[],categories:d=[],stories:o,filters:c={}}){const g=s.useRef(null),p=s.useRef(null),[x,m]=s.useState(c.category??""),[f,h]=s.useState(c.region??""),[b,u]=s.useState(c.keyword??"");s.useEffect(()=>{if(!a.length)return;function r(){var t,i;(i=(t=p.current)==null?void 0:t.destroy)==null||i.call(t,!0,!0),p.current=new window.Swiper(g.current,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:a.length>2,coverflowEffect:{rotate:24,stretch:0,depth:220,modifier:1,slideShadows:!1},autoplay:{delay:4800,disableOnInteraction:!1},navigation:{nextEl:".trend-next",prevEl:".trend-prev"},pagination:{el:".trend-pagination",clickable:!0}})}if(window.Swiper)r();else{if(!document.getElementById("swiper-bundle-css")){const i=document.createElement("link");i.id="swiper-bundle-css",i.rel="stylesheet",i.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(i)}const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",t.onload=r,document.body.appendChild(t)}return()=>{var t,i;return(i=(t=p.current)==null?void 0:t.destroy)==null?void 0:i.call(t,!0,!0)}},[a.length]);const S=r=>{r.preventDefault(),k.get(n.storiesFilter,{category:x,region:f,keyword:b},{preserveState:!0,preserveScroll:!0,replace:!0})},z=()=>{m(""),h(""),u(""),k.get(n.storiesFilter,{},{preserveState:!0,preserveScroll:!0,replace:!0})},v=(o==null?void 0:o.data)??[],y=(o==null?void 0:o.links)??[];return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Stories"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

                .fc-stories-page, .fc-stories-page * { box-sizing: border-box; }
                .fc-stories-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); }
                .fc-stories-page .container { max-width: 1240px; margin: 0 auto; padding: 0 20px; }

                .stories-page { padding: 40px 0 80px; }

                /* ── Trending hero ── */
                .trend-hero {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(165deg, var(--bg-card) 10%, var(--accent-dim) 160%);
                    border-radius: 28px;
                    padding: 64px 24px;
                    margin-bottom: 48px;
                    border: 1px solid var(--border);
                }
                .trend-eyebrow {
                    text-align: center;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.65);
                    margin-bottom: 6px;
                }
                .trend-heading {
                    text-align: center;
                    font-family: var(--font-head);
                    font-size: 1.9rem;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 40px;
                }
                .trend-swiper { width: 100%; padding: 10px 0 50px; }
                .trend-swiper .swiper-slide {
                    width: min(680px, 84vw);
                    border-radius: 20px;
                    overflow: hidden;
                }
                .trend-slide {
                    position: relative;
                    display: block;
                    border-radius: 20px;
                    overflow: hidden;
                    aspect-ratio: 16 / 8;
                }
                .trend-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
                .trend-slide-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(2,10,10,0.88) 0%, rgba(2,10,10,0.25) 55%, transparent 100%);
                    display: flex; flex-direction: column; justify-content: flex-end;
                    padding: 24px;
                }
                .trend-slide-title {
                    font-family: var(--font-head);
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #fff;
                    line-height: 1.3;
                    margin-bottom: 14px;
                    max-width: 90%;
                }
                .trend-read-more {
                    display: inline-flex; align-items: center; gap: 8px;
                    align-self: flex-start;
                    background: var(--accent);
                    color: #06251a;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.8rem;
                    padding: 9px 18px;
                    border-radius: var(--radius-pill);
                    text-decoration: none;
                    transition: transform 0.2s, background 0.2s;
                }
                .trend-read-more:hover { background: #fff; transform: translateY(-2px); color: #06251a; }

                .trend-controls {
                    display: flex; align-items: center; justify-content: center; gap: 20px;
                    margin-top: 8px;
                }
                .trend-arrow {
                    width: 42px; height: 42px; border-radius: 50%;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: background 0.2s;
                    flex-shrink: 0;
                }
                .trend-arrow:hover { background: rgba(255,255,255,0.2); }
                .trend-pagination { position: relative; display: flex; align-items: center; gap: 6px; }
                .trend-pagination .swiper-pagination-bullet {
                    background: rgba(255,255,255,0.35);
                    opacity: 1;
                    width: 7px; height: 7px;
                }
                .trend-pagination .swiper-pagination-bullet-active { background: var(--accent); width: 20px; border-radius: 4px; }

                /* ── Category strip ── */
                .section-heading {
                    display: flex; align-items: baseline; justify-content: space-between;
                    margin-bottom: 18px;
                }
                .section-heading h5 {
                    font-family: var(--font-head);
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0;
                }
                .category-strip {
                    display: flex; gap: 14px;
                    overflow-x: auto;
                    padding-bottom: 8px;
                    margin-bottom: 44px;
                    scroll-snap-type: x proximity;
                }
                .category-strip::-webkit-scrollbar { height: 5px; }
                .category-strip::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
                .category-chip {
                    flex: 0 0 auto;
                    scroll-snap-align: start;
                    display: flex; align-items: center; justify-content: space-between; gap: 16px;
                    min-width: 220px;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 14px;
                    padding: 16px 18px;
                    text-decoration: none;
                    transition: border-color 0.2s, transform 0.2s;
                }
                .category-chip:hover { border-color: var(--border-accent); transform: translateY(-2px); }
                .category-chip h6 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
                .category-chip p { font-size: 0.76rem; color: var(--text-muted); margin: 0; }
                .category-chip-arrow {
                    width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                }

                /* ── Filters ── */
                .filters-bar {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 22px 24px;
                    margin-bottom: 36px;
                }
                .filters-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr auto;
                    gap: 14px;
                    align-items: end;
                }
                @media(max-width: 900px) { .filters-grid { grid-template-columns: 1fr 1fr; } }
                @media(max-width: 560px) { .filters-grid { grid-template-columns: 1fr; } }
                .filter-field label {
                    display: block; font-size: 0.75rem; font-weight: 500;
                    color: var(--text-secondary); margin-bottom: 6px;
                }
                .filter-control {
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
                }
                .filter-control:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
                .filter-control::placeholder { color: var(--text-muted); }
                select.filter-control { appearance: none; cursor: pointer; }
                .filter-actions { display: flex; gap: 10px; }
                .btn-apply {
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.82rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s;
                    white-space: nowrap;
                }
                .btn-apply:hover { background: var(--accent-dim); }
                .btn-reset {
                    background: transparent;
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 11px 20px;
                    font-family: var(--font-head);
                    font-size: 0.82rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                    white-space: nowrap;
                }
                .btn-reset:hover { border-color: var(--border-accent); color: var(--accent); }

                /* ── Story grid ── */
                .story-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 22px; margin-bottom: 40px; }
                .story-tile {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: border-color 0.25s, transform 0.2s;
                }
                .story-tile:hover { border-color: var(--border-accent); transform: translateY(-3px); }
                .story-tile-img { position: relative; height: 210px; overflow: hidden; }
                .story-tile-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.35s ease; }
                .story-tile:hover .story-tile-img img { transform: scale(1.04); }
                .story-status-pill {
                    position: absolute; top: 12px; left: 12px;
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    backdrop-filter: blur(6px);
                }
                .status-approved { background: rgba(0,166,103,0.9); color: #fff; }
                .status-pending { background: rgba(232,185,74,0.92); color: #2b2004; }

                .story-tile-body { padding: 18px 20px; }
                .story-tile-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
                .story-cat-badge {
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    border-radius: var(--radius-pill);
                    padding: 3px 11px;
                    font-size: 0.7rem;
                    font-weight: 600;
                }
                .story-tags-count { font-size: 0.72rem; color: var(--text-muted); }
                .story-tile-title {
                    font-family: var(--font-head);
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    line-height: 1.35;
                    margin-bottom: 16px;
                    display: block;
                    text-decoration: none;
                }
                .story-tile-title:hover { color: var(--accent); }
                .story-tile-footer { display: flex; align-items: center; gap: 10px; padding-top: 14px; border-top: 1px solid var(--border); }
                .story-tile-footer img { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
                .story-tile-footer h6 { font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin: 0; }
                .story-tile-footer p { font-size: 0.72rem; color: var(--text-muted); margin: 0; }

                .empty-state { text-align: center; padding: 64px 24px; color: var(--text-muted); font-size: 0.9rem; grid-column: 1 / -1; }
                .empty-state i { font-size: 2.2rem; margin-bottom: 12px; display: block; color: var(--text-muted); }

                /* ── Pagination ── */
                .pagination-nav { display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; }
                .page-link {
                    min-width: 38px; height: 38px;
                    display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 12px;
                    border-radius: 10px;
                    border: 1px solid var(--border);
                    background: var(--bg-card);
                    color: var(--text-secondary);
                    font-size: 0.82rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 768px) {
                    .trend-hero { padding: 40px 16px; border-radius: 20px; }
                    .trend-heading { font-size: 1.4rem; }
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
                [data-h-theme="light"] .filter-control { background: rgba(0,100,60,0.03); }
                [data-h-theme="light"] .trend-hero { background: linear-gradient(165deg, #0d3324 10%, var(--accent) 170%); }
            `}),e.jsx("div",{className:"fc-stories-page",children:e.jsx("div",{className:"stories-page",children:e.jsxs("div",{className:"container",children:[a.length>0&&e.jsxs("div",{className:"trend-hero",children:[e.jsx("p",{className:"trend-eyebrow",children:"Featured"}),e.jsx("h2",{className:"trend-heading",children:"Trending Stories"}),e.jsx("div",{className:"swiper trend-swiper",ref:g,children:e.jsx("div",{className:"swiper-wrapper",children:a.map(r=>{var t;return e.jsx("div",{className:"swiper-slide",children:e.jsxs("div",{className:"trend-slide",children:[e.jsx("img",{src:`/images/stories/${r.thumbnail}`,alt:r.title}),e.jsxs("div",{className:"trend-slide-overlay",children:[e.jsx("h3",{className:"trend-slide-title",children:((t=r.title)==null?void 0:t.length)>60?`${r.title.slice(0,60)}…`:r.title}),e.jsxs(l,{href:n.storyDetails(r.slug),className:"trend-read-more",children:[e.jsx("i",{className:"feather-arrow-right"})," Read More"]})]})]})},r.id)})})}),e.jsxs("div",{className:"trend-controls",children:[e.jsx("div",{className:"trend-arrow trend-prev",children:e.jsx("i",{className:"ti ti-chevron-left"})}),e.jsx("div",{className:"trend-pagination"}),e.jsx("div",{className:"trend-arrow trend-next",children:e.jsx("i",{className:"ti ti-chevron-right"})})]})]}),d.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"section-heading",children:e.jsx("h5",{children:"Trending Categories of Stories"})}),e.jsx("div",{className:"category-strip",children:d.map(r=>e.jsxs(l,{href:n.storyCategory(r.slug),className:"category-chip",children:[e.jsxs("div",{children:[e.jsx("h6",{children:r.name}),e.jsxs("p",{children:[r.stories_count??0," stories"]})]}),e.jsx("span",{className:"category-chip-arrow",children:e.jsx("i",{className:"feather-arrow-up-right"})})]},r.id))})]}),e.jsx("form",{onSubmit:S,className:"filters-bar",children:e.jsxs("div",{className:"filters-grid",children:[e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Category"}),e.jsxs("select",{className:"filter-control",value:x,onChange:r=>m(r.target.value),children:[e.jsx("option",{value:"",children:"Select Category"}),d.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Region"}),e.jsx("input",{type:"text",className:"filter-control",placeholder:"e.g., Kigali, Nairobi, Lagos",value:f,onChange:r=>h(r.target.value)})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Keyword"}),e.jsx("input",{type:"text",className:"filter-control",placeholder:"e.g., photography, coding, music",value:b,onChange:r=>u(r.target.value)})]}),e.jsxs("div",{className:"filter-actions",children:[e.jsx("button",{type:"submit",className:"btn-apply",children:"Apply Filters"}),e.jsx("button",{type:"button",className:"btn-reset",onClick:z,children:"Reset"})]})]})}),e.jsx("div",{className:"story-grid",children:v.length>0?v.map(r=>{var w,j,N;const t=F[r.status],i=r.tags?r.tags.split(",").filter(Boolean).length:0;return e.jsxs("div",{className:"story-tile",children:[e.jsxs("div",{className:"story-tile-img",children:[e.jsx(l,{href:n.storyDetails(r.slug),children:e.jsx("img",{src:`/image/stories/${r.thumbnail}`,alt:r.title})}),t&&e.jsxs("span",{className:`story-status-pill ${t.className}`,children:[e.jsx("i",{className:`ti ${t.icon}`})," ",t.label]})]}),e.jsxs("div",{className:"story-tile-body",children:[e.jsxs("div",{className:"story-tile-meta",children:[e.jsx("span",{className:"story-cat-badge",children:(w=r.category)==null?void 0:w.name}),i>0&&e.jsxs("span",{className:"story-tags-count",children:["+",i," Tags"]})]}),e.jsx(l,{href:n.storyDetails(r.slug),className:"story-tile-title",children:((j=r.title)==null?void 0:j.length)>60?`${r.title.slice(0,60)}…`:r.title}),e.jsxs("div",{className:"story-tile-footer",children:[e.jsx("img",{src:"/assets/img/user/profile.jpg",alt:""}),e.jsxs("div",{children:[e.jsx("h6",{children:(N=r.talent)==null?void 0:N.name}),e.jsxs("p",{children:["Posted:"," ",r.created_at&&new Date(r.created_at).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})]})]})]})]})]},r.id)}):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-mood-empty"}),"No stories match your filters yet."]})}),y.length>3&&e.jsx("div",{className:"pagination-nav",children:y.map((r,t)=>e.jsx(l,{href:r.url||"#",className:`page-link ${r.active?"active":""} ${r.url?"":"disabled"}`,preserveScroll:!0,children:$(r.label)},t))})]})})})]})}D.layout=a=>e.jsx(E,{children:a,title:"Stories"});export{D as default};
