import{r as o,j as e,H as P,L as n,a as G}from"./app-ClS8wKza.js";import{G as $}from"./GuestLayout-CXbJ8NXm.js";const s={productDetails:t=>`/products/${t}`,productCategory:t=>`/product/categories/${t}`,sellerStore:"/sellers"};function q({featuredProducts:t=[],categories:g=[],products:m={data:[],links:[]}}){const[b,h]=o.useState(0),p=o.useRef(null),N=r=>h(r);o.useEffect(()=>{if(!(t.length<=1))return p.current=setInterval(()=>{h(r=>(r+1)%t.length)},4e3),()=>clearInterval(p.current)},[t.length]);const k=r=>{clearInterval(p.current),N(r),t.length>1&&(p.current=setInterval(()=>{h(a=>(a+1)%t.length)},4e3))},x=o.useRef(null),u=r=>{var a;(a=x.current)==null||a.scrollBy({left:r*220,behavior:"smooth"})},[S,C]=o.useState([]),[z,R]=o.useState([]),[E,A]=o.useState(""),[T,D]=o.useState("Newest Arrivals"),I=r=>{C(a=>a.includes(r)?a.filter(i=>i!==r):[...a,r])},L=r=>{R(a=>a.includes(r)?a.filter(i=>i!==r):[...a,r])},[_,c]=o.useState(!1),[l,f]=o.useState({company_name:"",email:"",phone:"",address:"",description:""}),[v,w]=o.useState(!1),d=r=>{f(a=>({...a,[r.target.name]:r.target.value}))},F=r=>{r.preventDefault(),w(!0),G.post(s.sellerStore,l,{onFinish:()=>w(!1),onSuccess:()=>{c(!1),f({company_name:"",email:"",phone:"",address:"",description:""})}})};return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Explore our Marketplace"}),e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

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
                }

                .fc-explore * { box-sizing: border-box; margin: 0; padding: 0; }

                .fc-explore { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }

                /* ── HERO ── */
                .hero-banner {
                    position: relative;
                    background: var(--bg-deep);
                    padding: 3.5rem 0 2rem;
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
                .hero-carousel-item { display: none; }
                .hero-carousel-item.active { display: flex; align-items: center; gap: 3rem; }
                .hero-text { flex: 1; }
                .hero-text .tag {
                    display: inline-flex; align-items: center; gap: .5rem;
                    background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
                    color: var(--accent); font-family: 'Syne', sans-serif; font-size: .75rem;
                    font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
                    padding: .35rem .9rem; border-radius: 50px; margin-bottom: 1.25rem;
                }
                .hero-text h1 {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(2rem, 4vw, 3.2rem);
                    font-weight: 800; line-height: 1.15; color: var(--white);
                    margin-bottom: 1rem;
                }
                .hero-text h1 span { color: var(--accent); }
                .hero-text p { color: var(--muted); font-size: 1rem; line-height: 1.7; margin-bottom: 2rem; max-width: 480px; }
                .btn-hero-primary {
                    display: inline-flex; align-items: center; gap: .5rem;
                    background: var(--accent); color: var(--white);
                    font-family: 'Syne', sans-serif; font-weight: 700; font-size: .9rem;
                    padding: .75rem 1.75rem; border-radius: 8px; text-decoration: none;
                    border: none; cursor: pointer;
                    box-shadow: 0 0 24px var(--accent-glow);
                    transition: all .25s ease;
                }
                .btn-hero-primary:hover { transform: translateY(-2px); box-shadow: 0 0 36px var(--accent-glow); color: var(--white); }
                .hero-visual { flex: 0 0 300px; text-align: center; }
                .hero-visual img { max-width: 100%; filter: drop-shadow(0 20px 40px rgba(0,166,103,.2)); }
                .hero-dots { display: flex; gap: .5rem; margin-top: 2rem; }
                .hero-dot {
                    width: 8px; height: 8px; border-radius: 50%;
                    background: var(--border); border: 1px solid rgba(0,166,103,.3);
                    cursor: pointer; transition: all .25s;
                }
                .hero-dot.active { background: var(--accent); width: 24px; border-radius: 4px; }

                /* ── SECTION WRAPPER ── */
                .section-wrap { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem; }

                /* ── TRENDING CATEGORIES ── */
                .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
                .section-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; color: var(--white); }
                .section-title span { color: var(--accent); }
                .nav-arrows { display: flex; gap: .5rem; }
                .nav-arrow-btn {
                    width: 36px; height: 36px; border-radius: 8px;
                    background: var(--bg-card); border: 1px solid var(--border);
                    color: var(--muted); display: flex; align-items: center; justify-content: center;
                    cursor: pointer; transition: all .2s;
                }
                .nav-arrow-btn:hover { border-color: var(--accent); color: var(--accent); }

                .trend-scroll { display: flex; gap: 1rem; overflow-x: auto; padding-bottom: .5rem; scrollbar-width: none; }
                .trend-scroll::-webkit-scrollbar { display: none; }
                .trend-pill {
                    flex: 0 0 auto;
                    display: flex; align-items: center; justify-content: space-between; gap: 1.5rem;
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 12px; padding: .75rem 1.25rem;
                    text-decoration: none; transition: all .25s;
                    min-width: 180px;
                    color: inherit;
                }
                .trend-pill:hover { border-color: var(--accent); background: var(--accent-dim); transform: translateY(-2px); }
                .trend-pill-info h6 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem; color: var(--white); margin: 0 0 .2rem; }
                .trend-pill-info p { font-size: .75rem; color: var(--muted); margin: 0; }
                .trend-pill-arrow { color: var(--accent); font-size: 1.1rem; }

                /* ── FILTERS ── */
                .filter-bar {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 14px; padding: 1rem 1.5rem;
                    display: flex; align-items: center; flex-wrap: wrap; gap: 1rem;
                    margin: 1.5rem 0;
                }
                .filter-group { display: flex; align-items: center; gap: .5rem; flex-wrap: wrap; }
                .filter-label { font-size: .78rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .06em; margin-right: .25rem; }
                .filter-chip {
                    display: inline-flex; align-items: center; gap: .35rem;
                    background: var(--bg-raised); border: 1px solid var(--border);
                    color: var(--muted); font-size: .8rem; font-weight: 500;
                    padding: .35rem .9rem; border-radius: 50px; cursor: pointer;
                    transition: all .2s;
                }
                .filter-chip:hover, .filter-chip.active { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
                .filter-divider { width: 1px; height: 28px; background: var(--border); }
                .sort-select {
                    background: var(--bg-raised); border: 1px solid var(--border);
                    color: var(--text); font-size: .8rem; padding: .4rem .9rem;
                    border-radius: 8px; outline: none; cursor: pointer;
                }
                .sort-select:focus { border-color: var(--accent); }
                .search-input-wrap { display: flex; align-items: center; gap: .5rem; background: var(--bg-raised); border: 1px solid var(--border); border-radius: 8px; padding: .4rem .9rem; flex: 1; min-width: 200px; }
                .search-input-wrap i { color: var(--muted); }
                .search-input-wrap input { background: none; border: none; outline: none; color: var(--text); font-size: .85rem; width: 100%; }
                .search-input-wrap input::placeholder { color: var(--muted); }

                /* ── PRODUCTS GRID ── */
                .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }

                .product-card {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 16px; overflow: hidden;
                    transition: all .3s ease;
                    position: relative;
                }
                .product-card:hover { border-color: rgba(0,166,103,.4); transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,.4), 0 0 0 1px rgba(0,166,103,.1); }

                .product-img-wrap { position: relative; height: 200px; overflow: hidden; background: var(--bg-raised); }
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
                    font-family: 'Syne', sans-serif; letter-spacing: .05em;
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

                .product-body { padding: 1.25rem; }
                .product-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: .75rem; }
                .product-category {
                    background: var(--accent-dim); color: var(--accent);
                    font-size: .72rem; font-weight: 700; padding: .2rem .65rem; border-radius: 50px;
                    font-family: 'Syne', sans-serif; text-decoration: none; letter-spacing: .04em;
                }
                .product-seller { font-size: .78rem; color: var(--muted); display: flex; align-items: center; gap: .3rem; }
                .product-seller i { font-size: .7rem; }
                .product-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: .5rem; line-height: 1.3; text-decoration: none; display: block; }
                .product-title:hover { color: var(--accent); }
                .product-rating { display: flex; align-items: center; gap: .4rem; font-size: .8rem; margin-bottom: 1rem; }
                .product-rating .stars { color: #f59e0b; }
                .product-rating .count { color: var(--muted); }
                .product-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--border); }
                .product-price { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--white); }
                .product-price span { font-size: .75rem; font-weight: 400; color: var(--muted); }
                .btn-view-product {
                    background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
                    color: var(--accent); font-size: .8rem; font-weight: 600;
                    padding: .45rem 1rem; border-radius: 8px; text-decoration: none;
                    transition: all .2s;
                }
                .btn-view-product:hover { background: var(--accent); color: var(--white); }

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
                .modal-header-custom h5 { font-family: 'Syne', sans-serif; font-weight: 800; color: var(--white); font-size: 1.2rem; }
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
                    font-family: 'Syne', sans-serif; cursor: pointer; transition: all .2s;
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
                    font-family: 'Syne', sans-serif; font-weight: 700; font-size: .9rem;
                    box-shadow: 0 8px 32px var(--accent-glow);
                    text-decoration: none; transition: all .25s; border: none; cursor: pointer;
                }
                .apply-seller-fab:hover { transform: translateY(-3px); box-shadow: 0 12px 40px var(--accent-glow); color: var(--white); }

                /* ── RESPONSIVE ── */
                @media (max-width: 768px) {
                    .hero-carousel-item.active { flex-direction: column; text-align: center; }
                    .hero-visual { flex: 0 0 auto; }
                    .hero-dots { justify-content: center; }
                    .hero-text p { max-width: 100%; }
                    .filter-bar { flex-direction: column; align-items: flex-start; }
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
            `}),e.jsxs("div",{className:"fc-explore",children:[e.jsxs("section",{className:"hero-banner",children:[e.jsx("div",{className:"hero-grid-lines"}),e.jsxs("div",{className:"hero-inner",children:[t.map((r,a)=>e.jsxs("div",{className:`hero-carousel-item ${a===b?"active":""}`,"data-index":a,children:[e.jsxs("div",{className:"hero-text",children:[e.jsx("span",{className:"tag",children:"✦ Featured Product"}),e.jsxs("h1",{children:[r.name,e.jsx("br",{}),e.jsx("span",{children:"Available Now"})]}),e.jsx("p",{children:r.description||"Top quality product available now on the Future Connect Shop marketplace."}),e.jsxs(n,{href:s.productDetails(r.id),className:"btn-hero-primary",children:["View Product ",e.jsx("i",{className:"feather-arrow-right"})]})]}),e.jsx("div",{className:"hero-visual",children:e.jsx("img",{src:"/assets/img/banner-img.png",alt:r.name})})]},r.id)),e.jsx("div",{className:"hero-dots",children:t.map((r,a)=>e.jsx("div",{className:`hero-dot ${a===b?"active":""}`,"data-target":a,onClick:()=>k(a)},r.id))})]})]}),e.jsxs("div",{className:"section-wrap",children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("h2",{className:"section-title",children:["Trending ",e.jsx("span",{children:"Categories"})]}),e.jsxs("div",{className:"nav-arrows",children:[e.jsx("button",{className:"nav-arrow-btn",onClick:()=>u(-1),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"nav-arrow-btn",onClick:()=>u(1),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]}),e.jsx("div",{className:"trend-scroll",ref:x,children:g.slice(0,8).map(r=>e.jsxs(n,{href:s.productCategory(r.id),className:"trend-pill",children:[e.jsxs("div",{className:"trend-pill-info",children:[e.jsx("h6",{children:r.name}),e.jsxs("p",{children:[r.products_count??0," Products"]})]}),e.jsx("span",{className:"trend-pill-arrow",children:e.jsx("i",{className:"feather-arrow-up-right"})})]},r.id))}),e.jsxs("div",{className:"filter-bar",children:[e.jsxs("div",{className:"search-input-wrap",children:[e.jsx("i",{className:"feather-search"}),e.jsx("input",{type:"text",placeholder:"Search products...",value:E,onChange:r=>A(r.target.value)})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-label",children:"Category"}),g.slice(0,5).map(r=>e.jsx("label",{className:`filter-chip ${S.includes(r.id)?"active":""}`,onClick:()=>I(r.id),children:r.name},r.id))]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-label",children:"Rating"}),[5,4,3].map(r=>e.jsx("label",{className:`filter-chip ${z.includes(r)?"active":""}`,onClick:()=>L(r),children:Array.from({length:r}).map((a,i)=>e.jsx("i",{className:"fa-solid fa-star",style:{color:"#f59e0b",fontSize:".7rem"}},i))},r))]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("select",{className:"sort-select",value:T,onChange:r=>D(r.target.value),children:[e.jsx("option",{children:"Newest Arrivals"}),e.jsx("option",{children:"Price: Low to High"}),e.jsx("option",{children:"Price: High to Low"}),e.jsx("option",{children:"Top Rated"})]})]}),e.jsx("div",{className:"products-grid",children:m.data.map(r=>{var a,i,y,j;return e.jsxs("div",{className:"product-card",children:[e.jsxs("div",{className:"product-img-wrap",children:[e.jsx("img",{src:"/assets/img/gigs/gigs-01.jpg",alt:r.name}),e.jsx("div",{className:"product-img-overlay"}),e.jsx(n,{href:s.productDetails(r.id),className:"product-quick-view",children:"Quick View →"}),e.jsx("span",{className:"product-badge",children:((a=r.category)==null?void 0:a.name)??"General"}),e.jsx("div",{className:"product-fav",children:e.jsx("i",{className:"feather-heart"})})]}),e.jsxs("div",{className:"product-body",children:[e.jsxs("div",{className:"product-meta",children:[e.jsx(n,{href:s.productCategory((i=r.category)==null?void 0:i.id),className:"product-category",children:((y=r.category)==null?void 0:y.name)??"Uncategorized"}),e.jsxs("span",{className:"product-seller",children:[e.jsx("i",{className:"ti ti-user"}),(j=r.seller)==null?void 0:j.company_name]})]}),e.jsx(n,{href:s.productDetails(r.id),className:"product-title",children:r.name}),e.jsxs("div",{className:"product-rating",children:[e.jsx("span",{className:"stars",children:Array.from({length:5}).map((H,O)=>e.jsx("i",{className:"fa-solid fa-star"},O))}),e.jsx("span",{className:"count",children:"5.0 (28 reviews)"})]}),e.jsxs("div",{className:"product-footer",children:[e.jsxs("div",{className:"product-price",children:["$",r.price," ",e.jsx("span",{children:"RWF"})]}),e.jsx(n,{href:s.productDetails(r.id),className:"btn-view-product",children:"View Details"})]})]})]},r.id)})}),m.links&&m.links.length>3&&e.jsx("div",{className:"pagination-wrap",children:m.links.map((r,a)=>e.jsx(n,{href:r.url||"#",className:`page-btn ${r.active?"active":""} ${r.url?"":"disabled"}`,dangerouslySetInnerHTML:{__html:r.label},preserveScroll:!0},a))})]}),e.jsxs("button",{className:"apply-seller-fab",onClick:()=>c(!0),children:[e.jsx("i",{className:"feather-plus"})," Become a Seller"]}),_&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>c(!1),children:e.jsx("div",{className:"fc-modal-content",onClick:r=>r.stopPropagation(),children:e.jsxs("form",{onSubmit:F,children:[e.jsxs("div",{className:"modal-header-custom",children:[e.jsx("h5",{children:"Apply to Become a Seller"}),e.jsx("button",{type:"button",className:"btn-close-white",onClick:()=>c(!1),children:"✕"})]}),e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsxs("p",{style:{color:"var(--muted)",marginBottom:"1.5rem"},children:["Join the"," ",e.jsx("strong",{style:{color:"var(--accent)"},children:"Future Connect Shop"})," and start selling products that empower our members."]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Company Name"}),e.jsx("input",{type:"text",name:"company_name",className:"form-control",placeholder:"e.g. Creative Minds Ltd",value:l.company_name,onChange:d,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsx("input",{type:"email",name:"email",className:"form-control",placeholder:"e.g. hello@company.com",value:l.email,onChange:d,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Phone Number"}),e.jsx("input",{type:"text",name:"phone",className:"form-control",placeholder:"+250 700 123 456",value:l.phone,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Address"}),e.jsx("input",{type:"text",name:"address",className:"form-control",placeholder:"e.g. Kigali, Rwanda",value:l.address,onChange:d})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{className:"form-label",children:"Company Description"}),e.jsx("textarea",{name:"description",rows:3,className:"form-control",placeholder:"Tell us about your company, products, and goals...",value:l.description,onChange:d})]})]})]}),e.jsxs("div",{style:{borderTop:"1px solid var(--border)",padding:"1.25rem 1.5rem",display:"flex",justifyContent:"space-between"},children:[e.jsx("button",{type:"button",onClick:()=>c(!1),style:{background:"var(--bg-raised)",border:"1px solid var(--border)",color:"var(--muted)",borderRadius:"10px",padding:".6rem 1.5rem",cursor:"pointer"},children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-accent",disabled:v,children:v?"Submitting…":"Submit Application"})]})]})})})]})]})}q.layout=t=>e.jsx($,{children:t,title:"Explore Products",description:"Discover and purchase top-quality products from our trusted sellers on the Future Connect Shop marketplace."});export{q as default};
