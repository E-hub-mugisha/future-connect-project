import{r as o,j as e,H,L as s,a as O}from"./app-BO26Fp_i.js";import{G as P}from"./GuestLayout-RkVoz6LJ.js";const d={productDetails:t=>`/products/${t}`,productCategory:t=>`/product/categories/${t}`,sellerStore:"/sellers"};function $({featuredProducts:t=[],categories:N=[],products:i={data:[],links:[]}}){const[h,g]=o.useState(0),p=o.useRef(null),k=r=>g(r);o.useEffect(()=>{if(!(t.length<=1))return p.current=setInterval(()=>{g(r=>(r+1)%t.length)},4e3),()=>clearInterval(p.current)},[t.length]);const z=r=>{clearInterval(p.current),k(r),t.length>1&&(p.current=setInterval(()=>{g(a=>(a+1)%t.length)},4e3))},b=i.data.slice(0,4),[x,u]=o.useState([]),[S,C]=o.useState([]),[A,R]=o.useState(""),[E,D]=o.useState("Newest Arrivals"),L=r=>{u(a=>a.includes(r)?a.filter(n=>n!==r):[...a,r])},T=r=>{C(a=>a.includes(r)?a.filter(n=>n!==r):[...a,r])},[F,c]=o.useState(!1),[l,f]=o.useState({company_name:"",email:"",phone:"",address:"",description:""}),[v,j]=o.useState(!1),m=r=>{f(a=>({...a,[r.target.name]:r.target.value}))},I=r=>{r.preventDefault(),j(!0),O.post(d.sellerStore,l,{onFinish:()=>j(!1),onSuccess:()=>{c(!1),f({company_name:"",email:"",phone:"",address:"",description:""})}})};return e.jsxs(e.Fragment,{children:[e.jsx(H,{title:"Explore our Marketplace"}),e.jsx("style",{children:`
                :root {
                    --bg-deep:    #0e1618;
                    --bg-card:    #121d1f;
                    --bg-raised:  #172224;
                    --accent:     #48d597;
                    --accent-dim: rgba(0,166,103,.15);
                    --accent-glow:rgba(0,166,103,.35);
                    --border:     rgba(255,255,255,.07);
                    --text:       #f0f4f3;
                    --muted:      #7a9490;
                    --white:      #ffffff;
                    --font-head:  -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
                    --font-body:  -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
                }

                .fc-explore * { box-sizing: border-box; margin: 0; padding: 0; }

                .fc-explore { background: var(--bg-deep); color: var(--text); font-family: var(--font-body); }

                /* ── HERO: Recent (left) + Advertisement (right) ── */
                .hero-banner {
                    position: relative;
                    background: var(--bg-deep);
                    padding: 3rem 0 2rem;
                    overflow: hidden;
                }
                .hero-banner::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,166,103,.12) 0%, transparent 70%);
                    pointer-events: none;
                }
                .hero-grid-lines {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(0,166,103,.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,166,103,.04) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                }
                .hero-inner {
                    position: relative;
                    z-index: 2;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                .hero-split {
                    display: grid;
                    grid-template-columns: 1fr 1.15fr;
                    gap: 1.5rem;
                    align-items: stretch;
                }
                @media (max-width: 900px) {
                    .hero-split { grid-template-columns: 1fr; }
                }

                /* -- Recent panel -- */
                .hero-panel {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                }
                .hero-panel-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.1rem; }
                .hero-panel-head h3 {
                    font-family: var(--font-head); font-weight: 800; font-size: 1rem; color: var(--white);
                    display: flex; align-items: center; gap: .5rem;
                }
                .hero-panel-head h3 i { color: var(--accent); font-size: .95rem; }
                .hero-panel-head a { font-size: .78rem; color: var(--accent); text-decoration: none; font-weight: 600; }
                .hero-panel-head a:hover { text-decoration: underline; }

                .recent-list { display: flex; flex-direction: column; gap: .75rem; flex: 1; }
                .recent-row {
                    display: flex; align-items: center; gap: .85rem;
                    background: var(--bg-raised); border: 1px solid var(--border);
                    border-radius: 10px; padding: .6rem .75rem;
                    text-decoration: none; color: inherit;
                    transition: all .2s;
                }
                .recent-row:hover { border-color: var(--accent); transform: translateX(2px); }
                .recent-thumb { width: 46px; height: 46px; border-radius: 8px; overflow: hidden; flex-shrink: 0; background: var(--bg-deep); }
                .recent-thumb img { width: 100%; height: 100%; object-fit: cover; }
                .recent-info { flex: 1; min-width: 0; }
                .recent-info h6 {
                    font-family: var(--font-head); font-size: .82rem; font-weight: 700; color: var(--white);
                    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: .15rem;
                }
                .recent-info p { font-size: .74rem; color: var(--muted); }
                .recent-price { font-family: var(--font-head); font-size: .85rem; font-weight: 800; color: var(--accent); flex-shrink: 0; }
                .recent-empty { color: var(--muted); font-size: .82rem; padding: 1rem 0; text-align: center; }

                /* -- Advertisement panel -- */
                .ad-panel {
                    position: relative;
                    background: linear-gradient(135deg, #0a2e22, #0d3d29);
                    border: 1px solid rgba(0,166,103,.25);
                    border-radius: 16px;
                    padding: 2rem;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 280px;
                }
                .ad-carousel-item { display: none; }
                .ad-carousel-item.active { display: flex; align-items: center; gap: 2rem; }
                .ad-tag {
                    display: inline-flex; align-items: center; gap: .5rem;
                    background: rgba(0,166,103,.18); border: 1px solid rgba(0,166,103,.4);
                    color: var(--accent); font-family: var(--font-head); font-size: .72rem;
                    font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
                    padding: .3rem .85rem; border-radius: 50px; margin-bottom: 1rem;
                }
                .ad-text { flex: 1; position: relative; z-index: 1; }
                .ad-text h1 {
                    font-family: var(--font-head);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 800; line-height: 1.2; color: var(--white);
                    margin-bottom: .6rem;
                }
                .ad-text p { color: var(--muted); font-size: .88rem; line-height: 1.6; margin-bottom: 1.25rem; max-width: 380px; }
                .btn-hero-primary {
                    display: inline-flex; align-items: center; gap: .5rem;
                    background: var(--accent); color: var(--white);
                    font-family: var(--font-head); font-weight: 700; font-size: .85rem;
                    padding: .65rem 1.5rem; border-radius: 8px; text-decoration: none;
                    border: none; cursor: pointer;
                    box-shadow: 0 0 24px var(--accent-glow);
                    transition: all .25s ease;
                }
                .btn-hero-primary:hover { transform: translateY(-2px); box-shadow: 0 0 36px var(--accent-glow); color: var(--white); }
                .ad-visual { flex: 0 0 130px; text-align: center; position: relative; z-index: 1; }
                .ad-visual img { max-width: 100%; filter: drop-shadow(0 20px 40px rgba(0,166,103,.2)); }
                .ad-dots { display: flex; gap: .5rem; margin-top: 1.5rem; position: relative; z-index: 1; }
                .ad-dot {
                    width: 8px; height: 8px; border-radius: 50%;
                    background: rgba(255,255,255,.2); border: 1px solid rgba(0,166,103,.3);
                    cursor: pointer; transition: all .25s;
                }
                .ad-dot.active { background: var(--accent); width: 24px; border-radius: 4px; }
                .ad-panel-empty { color: var(--muted); font-size: .88rem; }

                /* ── SECTION WRAPPER ── */
                .section-wrap { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem; }
                .catalog-layout { display: grid; grid-template-columns: 260px 1fr; gap: 1.75rem; align-items: start; }
                @media (max-width: 900px) {
                    .catalog-layout { grid-template-columns: 1fr; }
                }

                /* ── SIDEBAR (categories, left) ── */
                .cat-sidebar {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 14px; padding: 1.25rem;
                    position: sticky; top: 1.5rem;
                }
                .sidebar-search {
                    display: flex; align-items: center; gap: .5rem;
                    background: var(--bg-raised); border: 1px solid var(--border);
                    border-radius: 8px; padding: .55rem .8rem; margin-bottom: 1.25rem;
                }
                .sidebar-search i { color: var(--muted); }
                .sidebar-search input { background: none; border: none; outline: none; color: var(--text); font-size: .85rem; width: 100%; }
                .sidebar-search input::placeholder { color: var(--muted); }

                .sidebar-block { margin-bottom: 1.5rem; }
                .sidebar-block:last-child { margin-bottom: 0; }
                .sidebar-block-title {
                    font-family: var(--font-head); font-size: .78rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: .08em; color: var(--muted);
                    margin-bottom: .85rem;
                }

                .sidebar-cat-list { display: flex; flex-direction: column; gap: .3rem; }
                .sidebar-cat-item {
                    display: flex; align-items: center; justify-content: space-between; gap: .5rem;
                    padding: .5rem .6rem; border-radius: 8px;
                    text-decoration: none; color: var(--text); font-size: .84rem;
                    cursor: pointer; transition: all .18s; border: 1px solid transparent;
                }
                .sidebar-cat-item:hover { background: var(--bg-raised); }
                .sidebar-cat-item.active { background: var(--accent-dim); border-color: rgba(0,166,103,.3); color: var(--accent); font-weight: 600; }
                .sidebar-cat-count {
                    font-size: .7rem; color: var(--muted); background: var(--bg-raised);
                    border-radius: 50px; padding: .1rem .5rem; flex-shrink: 0;
                }
                .sidebar-cat-item.active .sidebar-cat-count { background: rgba(0,166,103,.18); color: var(--accent); }

                .sidebar-rating-list { display: flex; flex-direction: column; gap: .3rem; }
                .sidebar-rating-item {
                    display: flex; align-items: center; gap: .4rem;
                    padding: .45rem .6rem; border-radius: 8px;
                    cursor: pointer; transition: all .18s; border: 1px solid transparent;
                }
                .sidebar-rating-item:hover { background: var(--bg-raised); }
                .sidebar-rating-item.active { background: var(--accent-dim); border-color: rgba(0,166,103,.3); }
                .sidebar-rating-item i { color: #f59e0b; font-size: .72rem; }

                .sidebar-sort select {
                    width: 100%;
                    background: var(--bg-raised); border: 1px solid var(--border);
                    color: var(--text); font-size: .82rem; padding: .5rem .7rem;
                    border-radius: 8px; outline: none; cursor: pointer;
                }
                .sidebar-sort select:focus { border-color: var(--accent); }

                /* ── CATALOG HEADER (result count) ── */
                .catalog-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: .75rem; }
                .catalog-title { font-family: var(--font-head); font-size: 1.15rem; font-weight: 700; color: var(--white); }
                .catalog-title span { color: var(--accent); }
                .catalog-count { font-size: .8rem; color: var(--muted); }
                .catalog-count strong { color: var(--accent); font-family: var(--font-head); }

                /* ── PRODUCTS GRID ── */
                .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }

                .product-card {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 16px; overflow: hidden;
                    transition: all .3s ease;
                    position: relative;
                }
                .product-card:hover { border-color: rgba(0,166,103,.4); transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,.4), 0 0 0 1px rgba(0,166,103,.1); }

                .product-img-wrap { position: relative; height: 190px; overflow: hidden; background: var(--bg-raised); }
                .product-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
                .product-card:hover .product-img-wrap img { transform: scale(1.05); }
                .product-img-overlay {
                    position: absolute; inset: 0; background: linear-gradient(to top, rgba(14,22,24,.9) 0%, transparent 60%);
                    opacity: 0; transition: opacity .3s;
                }
                .product-card:hover .product-img-overlay { opacity: 1; }
                .product-quick-view {
                    position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%) translateY(8px);
                    background: var(--accent); color: var(--white); font-size: .8rem; font-weight: 600;
                    padding: .45rem 1.2rem; border-radius: 50px; white-space: nowrap;
                    opacity: 0; transition: all .3s; text-decoration: none;
                }
                .product-card:hover .product-quick-view { opacity: 1; transform: translateX(-50%) translateY(0); }

                .product-badge {
                    position: absolute; top: .75rem; left: .75rem;
                    background: var(--accent-dim); border: 1px solid rgba(0,166,103,.4);
                    color: var(--accent); font-size: .7rem; font-weight: 700;
                    padding: .2rem .65rem; border-radius: 50px;
                    font-family: var(--font-head); letter-spacing: .05em;
                }
                .product-fav {
                    position: absolute; top: .75rem; right: .75rem;
                    width: 32px; height: 32px; background: rgba(14,22,24,.8);
                    border: 1px solid var(--border); border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    color: var(--muted); cursor: pointer; transition: all .2s;
                    font-size: .85rem;
                }
                .product-fav:hover { border-color: #e05c5c; color: #e05c5c; }

                .product-body { padding: 1.15rem; }
                .product-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
                .product-category {
                    background: var(--accent-dim); color: var(--accent);
                    font-size: .72rem; font-weight: 700; padding: .2rem .65rem; border-radius: 50px;
                    font-family: var(--font-head); text-decoration: none; letter-spacing: .04em;
                }
                .product-seller { font-size: .78rem; color: var(--muted); display: flex; align-items: center; gap: .3rem; }
                .product-seller i { font-size: .7rem; }
                .product-title { font-family: var(--font-head); font-size: .98rem; font-weight: 700; color: var(--white); margin-bottom: .5rem; line-height: 1.3; text-decoration: none; display: block; }
                .product-title:hover { color: var(--accent); }
                .product-rating { display: flex; align-items: center; gap: .4rem; font-size: .8rem; margin-bottom: 1rem; }
                .product-rating .stars { color: #f59e0b; }
                .product-rating .count { color: var(--muted); }
                .product-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--border); }
                .product-price { font-family: var(--font-head); font-size: 1.15rem; font-weight: 800; color: var(--white); }
                .product-price span { font-size: .75rem; font-weight: 400; color: var(--muted); }
                .btn-view-product {
                    background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
                    color: var(--accent); font-size: .8rem; font-weight: 600;
                    padding: .45rem 1rem; border-radius: 8px; text-decoration: none;
                    transition: all .2s;
                }
                .btn-view-product:hover { background: var(--accent); color: var(--white); }

                .products-empty {
                    grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--muted);
                }

                /* ── PAGINATION ── */
                .pagination-wrap { display: flex; justify-content: center; align-items: center; gap: .5rem; padding: 2.5rem 0 1rem; }
                .page-btn {
                    width: 40px; height: 40px; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    background: var(--bg-card); border: 1px solid var(--border);
                    color: var(--muted); font-size: .85rem; font-weight: 600;
                    cursor: pointer; transition: all .2s; text-decoration: none;
                }
                .page-btn:hover, .page-btn.active { background: var(--accent); border-color: var(--accent); color: var(--white); }
                .page-btn.disabled { opacity: .35; pointer-events: none; }

                /* ── SELLER MODAL ── */
                .fc-modal-backdrop {
                    position: fixed; inset: 0; background: rgba(0,0,0,.6);
                    display: flex; align-items: center; justify-content: center;
                    z-index: 1050; padding: 1rem;
                }
                .fc-modal-content { background: var(--bg-card); border: 1px solid var(--border); border-radius: 18px; color: var(--text); width: 100%; max-width: 720px; }
                .modal-header-custom { background: linear-gradient(135deg, #0a2e22, #0d3d29); border-bottom: 1px solid rgba(0,166,103,.2); padding: 1.5rem 2rem; display: flex; align-items: center; justify-content: space-between; border-radius: 18px 18px 0 0; }
                .modal-header-custom h5 { font-family: var(--font-head); font-weight: 800; color: var(--white); font-size: 1.2rem; }
                .fc-modal-content .form-control, .fc-modal-content .form-select {
                    background: var(--bg-raised); border: 1px solid var(--border);
                    color: var(--text); border-radius: 10px;
                    width: 100%; padding: .55rem .8rem; outline: none;
                }
                .fc-modal-content .form-control:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-dim); }
                .fc-modal-content .form-label { color: var(--muted); font-size: .85rem; font-weight: 500; display: block; margin-bottom: .35rem; }
                .btn-accent {
                    background: var(--accent); color: var(--white); border: none;
                    padding: .7rem 2rem; border-radius: 10px; font-weight: 700;
                    font-family: var(--font-head); cursor: pointer; transition: all .2s;
                    box-shadow: 0 0 20px var(--accent-glow);
                }
                .btn-accent:hover { transform: translateY(-1px); box-shadow: 0 0 28px var(--accent-glow); color: var(--white); }
                .btn-close-white { background: transparent; border: none; color: #fff; font-size: 1.2rem; cursor: pointer; line-height: 1; }

                /* ── APPLY SELLER FLOATING BTN ── */
                .apply-seller-fab {
                    position: fixed; bottom: 2rem; right: 2rem; z-index: 999;
                    background: var(--accent); color: var(--white);
                    display: flex; align-items: center; gap: .6rem;
                    padding: .8rem 1.5rem; border-radius: 50px;
                    font-family: var(--font-head); font-weight: 700; font-size: .9rem;
                    box-shadow: 0 8px 32px var(--accent-glow);
                    text-decoration: none; transition: all .25s; border: none; cursor: pointer;
                }
                .apply-seller-fab:hover { transform: translateY(-3px); box-shadow: 0 12px 40px var(--accent-glow); color: var(--white); }

                /* ── RESPONSIVE ── */
                @media (max-width: 768px) {
                    .ad-carousel-item.active { flex-direction: column; text-align: center; }
                    .ad-visual { flex: 0 0 auto; }
                    .ad-dots { justify-content: center; }
                    .ad-text p { max-width: 100%; }
                    .products-grid { grid-template-columns: 1fr; }
                }

                /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
                [data-h-theme="light"] {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-raised:  #eef4f1;
                    --accent:     #00a667;
                    --accent-dim: rgba(0,166,103,.08);
                    --accent-glow:rgba(0,166,103,.2);
                    --border:     rgba(0,100,60,.1);
                    --text:       #10201b;
                    --muted:      #5b7a70;
                    --white:      #10201b;
                }

                [data-h-theme="light"] .hero-banner::before {
                    background: radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,166,103,.08) 0%, transparent 70%);
                }
                [data-h-theme="light"] .hero-grid-lines {
                    background-image:
                        linear-gradient(rgba(0,100,60,.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,100,60,.05) 1px, transparent 1px);
                }

                [data-h-theme="light"] .btn-hero-primary,
                [data-h-theme="light"] .btn-hero-primary:hover,
                [data-h-theme="light"] .btn-accent,
                [data-h-theme="light"] .btn-accent:hover,
                [data-h-theme="light"] .apply-seller-fab,
                [data-h-theme="light"] .apply-seller-fab:hover,
                [data-h-theme="light"] .product-quick-view,
                [data-h-theme="light"] .page-btn:hover,
                [data-h-theme="light"] .page-btn.active,
                [data-h-theme="light"] .btn-view-product:hover {
                    color: #fff;
                }

                [data-h-theme="light"] .product-img-overlay {
                    background: linear-gradient(to top, rgba(16,32,27,.55) 0%, transparent 60%);
                }

                [data-h-theme="light"] .product-fav {
                    background: rgba(255,255,255,.85);
                }

                [data-h-theme="light"] .product-card:hover {
                    box-shadow: 0 20px 48px rgba(0,0,0,.1), 0 0 0 1px rgba(0,166,103,.1);
                }

                [data-h-theme="light"] .modal-header-custom {
                    background: linear-gradient(135deg, #d9f2e6, #c3ecd9);
                    border-bottom: 1px solid rgba(0,166,103,.25);
                }

                [data-h-theme="light"] .modal-header-custom h5 {
                    color: #10201b !important;
                }
                [data-h-theme="light"] .btn-close-white {
                    filter: none;
                    color: #10201b;
                }

                [data-h-theme="light"] .ad-panel {
                    background: linear-gradient(135deg, #d9f2e6, #c3ecd9);
                    border-color: rgba(0,166,103,.3);
                }
                [data-h-theme="light"] .ad-tag {
                    background: rgba(0,166,103,.12);
                }
            `}),e.jsxs("div",{className:"fc-explore",children:[e.jsxs("section",{className:"hero-banner",children:[e.jsx("div",{className:"hero-grid-lines"}),e.jsx("div",{className:"hero-inner",children:e.jsxs("div",{className:"hero-split",children:[e.jsxs("div",{className:"hero-panel",children:[e.jsxs("div",{className:"hero-panel-head",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"feather-clock"})," Recently Added"]}),i.data.length>0&&e.jsx("a",{href:"#catalog",children:"View all →"})]}),e.jsx("div",{className:"recent-list",children:b.length>0?b.map(r=>{var a;return e.jsxs(s,{href:d.productDetails(r.id),className:"recent-row",children:[e.jsx("div",{className:"recent-thumb",children:e.jsx("img",{src:"/assets/img/gigs/gigs-01.jpg",alt:r.name})}),e.jsxs("div",{className:"recent-info",children:[e.jsx("h6",{children:r.name}),e.jsx("p",{children:((a=r.category)==null?void 0:a.name)??"Uncategorized"})]}),e.jsxs("div",{className:"recent-price",children:["$",r.price]})]},r.id)}):e.jsx("div",{className:"recent-empty",children:"No products yet."})})]}),e.jsx("div",{className:"ad-panel",children:t.length>0?e.jsxs(e.Fragment,{children:[t.map((r,a)=>e.jsxs("div",{className:`ad-carousel-item ${a===h?"active":""}`,"data-index":a,children:[e.jsxs("div",{className:"ad-text",children:[e.jsx("span",{className:"ad-tag",children:"✦ Advertisement"}),e.jsx("h1",{children:r.name}),e.jsx("p",{children:r.description||"Top quality product available now on the Future Connect Shop marketplace."}),e.jsxs(s,{href:d.productDetails(r.id),className:"btn-hero-primary",children:["View Product ",e.jsx("i",{className:"feather-arrow-right"})]})]}),e.jsx("div",{className:"ad-visual",children:e.jsx("img",{src:"/assets/img/banner-img.png",alt:r.name})})]},r.id)),e.jsx("div",{className:"ad-dots",children:t.map((r,a)=>e.jsx("div",{className:`ad-dot ${a===h?"active":""}`,"data-target":a,onClick:()=>z(a)},r.id))})]}):e.jsx("div",{className:"ad-panel-empty",children:"No featured products right now."})})]})})]}),e.jsx("div",{className:"section-wrap",id:"catalog",children:e.jsxs("div",{className:"catalog-layout",children:[e.jsxs("aside",{className:"cat-sidebar",children:[e.jsxs("div",{className:"sidebar-search",children:[e.jsx("i",{className:"feather-search"}),e.jsx("input",{type:"text",placeholder:"Search products...",value:A,onChange:r=>R(r.target.value)})]}),e.jsxs("div",{className:"sidebar-block",children:[e.jsx("div",{className:"sidebar-block-title",children:"Categories"}),e.jsxs("div",{className:"sidebar-cat-list",children:[e.jsx("div",{className:`sidebar-cat-item ${x.length===0?"active":""}`,onClick:()=>u([]),children:"All Categories"}),N.map(r=>e.jsxs("div",{className:`sidebar-cat-item ${x.includes(r.id)?"active":""}`,onClick:()=>L(r.id),children:[e.jsx("span",{children:r.name}),e.jsx("span",{className:"sidebar-cat-count",children:r.products_count??0})]},r.id))]})]}),e.jsxs("div",{className:"sidebar-block",children:[e.jsx("div",{className:"sidebar-block-title",children:"Rating"}),e.jsx("div",{className:"sidebar-rating-list",children:[5,4,3].map(r=>e.jsxs("div",{className:`sidebar-rating-item ${S.includes(r)?"active":""}`,onClick:()=>T(r),children:[Array.from({length:r}).map((a,n)=>e.jsx("i",{className:"fa-solid fa-star"},n)),e.jsx("span",{style:{fontSize:".78rem",color:"var(--muted)",marginLeft:".25rem"},children:"& up"})]},r))})]}),e.jsxs("div",{className:"sidebar-block sidebar-sort",children:[e.jsx("div",{className:"sidebar-block-title",children:"Sort By"}),e.jsxs("select",{value:E,onChange:r=>D(r.target.value),children:[e.jsx("option",{children:"Newest Arrivals"}),e.jsx("option",{children:"Price: Low to High"}),e.jsx("option",{children:"Price: High to Low"}),e.jsx("option",{children:"Top Rated"})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"catalog-header",children:[e.jsxs("h2",{className:"catalog-title",children:["Browse ",e.jsx("span",{children:"Products"})]}),e.jsxs("span",{className:"catalog-count",children:[e.jsx("strong",{children:i.data.length})," product(s)"]})]}),e.jsx("div",{className:"products-grid",children:i.data.length>0?i.data.map(r=>{var a,n,y,w;return e.jsxs("div",{className:"product-card",children:[e.jsxs("div",{className:"product-img-wrap",children:[e.jsx("img",{src:"/assets/img/gigs/gigs-01.jpg",alt:r.name}),e.jsx("div",{className:"product-img-overlay"}),e.jsx(s,{href:d.productDetails(r.id),className:"product-quick-view",children:"Quick View →"}),e.jsx("span",{className:"product-badge",children:((a=r.category)==null?void 0:a.name)??"General"}),e.jsx("div",{className:"product-fav",children:e.jsx("i",{className:"feather-heart"})})]}),e.jsxs("div",{className:"product-body",children:[e.jsxs("div",{className:"product-meta",children:[e.jsx(s,{href:d.productCategory((n=r.category)==null?void 0:n.id),className:"product-category",children:((y=r.category)==null?void 0:y.name)??"Uncategorized"}),e.jsxs("span",{className:"product-seller",children:[e.jsx("i",{className:"ti ti-user"}),(w=r.seller)==null?void 0:w.company_name]})]}),e.jsx(s,{href:d.productDetails(r.id),className:"product-title",children:r.name}),e.jsxs("div",{className:"product-rating",children:[e.jsx("span",{className:"stars",children:Array.from({length:5}).map((B,_)=>e.jsx("i",{className:"fa-solid fa-star"},_))}),e.jsx("span",{className:"count",children:"5.0 (28 reviews)"})]}),e.jsxs("div",{className:"product-footer",children:[e.jsxs("div",{className:"product-price",children:["$",r.price," ",e.jsx("span",{children:"RWF"})]}),e.jsx(s,{href:d.productDetails(r.id),className:"btn-view-product",children:"View Details"})]})]})]},r.id)}):e.jsx("div",{className:"products-empty",children:"No products found."})}),i.links&&i.links.length>3&&e.jsx("div",{className:"pagination-wrap",children:i.links.map((r,a)=>e.jsx(s,{href:r.url||"#",className:`page-btn ${r.active?"active":""} ${r.url?"":"disabled"}`,dangerouslySetInnerHTML:{__html:r.label},preserveScroll:!0},a))})]})]})}),e.jsxs("button",{className:"apply-seller-fab",onClick:()=>c(!0),children:[e.jsx("i",{className:"feather-plus"})," Become a Seller"]}),F&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>c(!1),children:e.jsx("div",{className:"fc-modal-content",onClick:r=>r.stopPropagation(),children:e.jsxs("form",{onSubmit:I,children:[e.jsxs("div",{className:"modal-header-custom",children:[e.jsx("h5",{children:"Apply to Become a Seller"}),e.jsx("button",{type:"button",className:"btn-close-white",onClick:()=>c(!1),children:"✕"})]}),e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsxs("p",{style:{color:"var(--muted)",marginBottom:"1.5rem"},children:["Join the"," ",e.jsx("strong",{style:{color:"var(--accent)"},children:"Future Connect Shop"})," and start selling products that empower our members."]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Company Name"}),e.jsx("input",{type:"text",name:"company_name",className:"form-control",placeholder:"e.g. Creative Minds Ltd",value:l.company_name,onChange:m,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsx("input",{type:"email",name:"email",className:"form-control",placeholder:"e.g. hello@company.com",value:l.email,onChange:m,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Phone Number"}),e.jsx("input",{type:"text",name:"phone",className:"form-control",placeholder:"+250 700 123 456",value:l.phone,onChange:m})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Address"}),e.jsx("input",{type:"text",name:"address",className:"form-control",placeholder:"e.g. Kigali, Rwanda",value:l.address,onChange:m})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{className:"form-label",children:"Company Description"}),e.jsx("textarea",{name:"description",rows:3,className:"form-control",placeholder:"Tell us about your company, products, and goals...",value:l.description,onChange:m})]})]})]}),e.jsxs("div",{style:{borderTop:"1px solid var(--border)",padding:"1.25rem 1.5rem",display:"flex",justifyContent:"space-between"},children:[e.jsx("button",{type:"button",onClick:()=>c(!1),style:{background:"var(--bg-raised)",border:"1px solid var(--border)",color:"var(--muted)",borderRadius:"10px",padding:".6rem 1.5rem",cursor:"pointer"},children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-accent",disabled:v,children:v?"Submitting…":"Submit Application"})]})]})})})]})]})}$.layout=t=>e.jsx(P,{children:t,title:"Explore Products",description:"Discover and purchase top-quality products from our trusted sellers on the Future Connect Shop marketplace."});export{$ as default};
