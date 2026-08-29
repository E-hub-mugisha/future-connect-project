import{j as e,H as x,L as c,a as p}from"./app-BO26Fp_i.js";import{G as h}from"./GuestLayout-RkVoz6LJ.js";function b({category:t,categories:i=[],products:a}){const s=(a==null?void 0:a.data)??(Array.isArray(a)?a:[]),n=(a==null?void 0:a.links)??[],m=Array.isArray(a==null?void 0:a.links);(a==null?void 0:a.total)??s.length;function g(r){const o=r.target.value;o&&p.get(route("user.product.category",o))}return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:t.name}),e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
        :root {
          --bg-base:      #0e1618;
          --bg-card:      #131e21;
          --bg-card-alt:  #192429;
          --bg-elevated:  #1e2d32;
          --accent:       #48d597;
          --accent-dim:   #48d59718;
          --accent-muted: #48d59740;
          --accent-hover: #00c27a;
          --text-primary: #f0f4f5;
          --text-secondary:#8fa8ad;
          --text-muted:   #4d6b72;
          --border:       #1f3038;
          --border-hover: #2a4550;
          --radius-sm:    6px;
          --radius-md:    10px;
          --radius-lg:    16px;
        }

        body { background: var(--bg-base) !important; color: var(--text-primary) !important; }

        .fc-hero {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 3rem 2rem;
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .fc-hero::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, var(--accent-muted) 0%, transparent 70%);
          pointer-events: none;
        }
        .fc-hero::after {
          content: '';
          position: absolute; bottom: -40px; left: -40px;
          width: 180px; height: 180px;
          background: radial-gradient(circle, #48d59710 0%, transparent 70%);
          pointer-events: none;
        }
        .fc-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--accent-dim); border: 1px solid var(--accent-muted);
          color: var(--accent); font-size: .72rem; font-weight: 700;
          padding: 4px 12px; border-radius: 50px; letter-spacing: .8px;
          text-transform: uppercase; margin-bottom: .75rem;
        }
        .fc-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 900; color: var(--text-primary);
          line-height: 1.2; margin-bottom: .5rem;
        }
        .fc-hero-title span { color: var(--accent); }
        .fc-hero-sub { color: var(--text-secondary); font-size: .92rem; }

        .fc-section-label {
          font-size: .72rem; font-weight: 700; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 1.2px;
          display: flex; align-items: center; gap: .5rem; margin-bottom: 1rem;
        }
        .fc-section-label::before {
          content: ''; width: 3px; height: .85rem;
          background: var(--accent); border-radius: 2px; display: inline-block;
        }

        .fc-trend-section { margin-bottom: 2.5rem; }
        .fc-trend-scroll {
          display: flex; gap: 10px; overflow-x: auto; padding-bottom: 6px;
          scrollbar-width: thin; scrollbar-color: var(--border) transparent;
        }
        .fc-trend-scroll::-webkit-scrollbar { height: 4px; }
        .fc-trend-scroll::-webkit-scrollbar-track { background: transparent; }
        .fc-trend-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
        .fc-trend-chip {
          display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;
          background: var(--bg-card); border: 1px solid var(--border);
          color: var(--text-secondary); font-size: .8rem; font-weight: 600;
          padding: 7px 16px; border-radius: 50px; text-decoration: none;
          transition: border-color .2s, color .2s, background .2s;
          white-space: nowrap;
        }
        .fc-trend-chip:hover, .fc-trend-chip.active {
          border-color: var(--accent); color: var(--accent);
          background: var(--accent-dim); text-decoration: none;
        }
        .fc-trend-chip .count {
          font-size: .68rem; color: var(--text-muted);
          background: var(--bg-elevated); padding: 1px 7px; border-radius: 50px;
        }
        .fc-trend-chip:hover .count, .fc-trend-chip.active .count { color: var(--accent); }

        .fc-filter-bar {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap; margin-bottom: 2rem;
          padding: 1rem 1.25rem;
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-md);
        }
        .fc-filter-label {
          font-size: .75rem; color: var(--text-muted); font-weight: 600;
          text-transform: uppercase; letter-spacing: .8px; margin-right: 4px;
        }
        .fc-filter-select {
          background: var(--bg-elevated) !important;
          border: 1px solid var(--border) !important;
          color: var(--text-secondary) !important;
          border-radius: var(--radius-sm) !important;
          font-size: .82rem !important; padding: 6px 12px !important;
          cursor: pointer;
        }
        .fc-filter-select:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 3px var(--accent-dim) !important;
          outline: none !important; color: var(--text-primary) !important;
        }
        .fc-filter-select option { background: var(--bg-elevated); }
        .fc-search-wrap {
          flex: 1; min-width: 160px; position: relative;
        }
        .fc-search-wrap input {
          width: 100%; background: var(--bg-elevated) !important;
          border: 1px solid var(--border) !important;
          color: var(--text-primary) !important; border-radius: var(--radius-sm) !important;
          padding: 7px 12px 7px 34px !important; font-size: .82rem !important;
        }
        .fc-search-wrap input:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 3px var(--accent-dim) !important; outline: none !important;
        }
        .fc-search-wrap input::placeholder { color: var(--text-muted) !important; }
        .fc-search-wrap .fc-search-icon {
          position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
          color: var(--text-muted); font-size: .8rem; pointer-events: none;
        }
        .fc-results-count {
          margin-left: auto; font-size: .78rem; color: var(--text-muted); white-space: nowrap;
        }
        .fc-results-count strong { color: var(--accent); }

        .fc-product-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: border-color .25s, transform .25s;
          height: 100%;
          display: flex; flex-direction: column;
        }
        .fc-product-card:hover {
          border-color: var(--accent-muted);
          transform: translateY(-4px);
        }

        .fc-product-img-wrap {
          position: relative; overflow: hidden;
          height: 210px; background: var(--bg-elevated);
          flex-shrink: 0;
        }
        .fc-product-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; transition: transform .4s ease;
        }
        .fc-product-card:hover .fc-product-img-wrap img { transform: scale(1.05); }

        .fc-img-badges {
          position: absolute; top: 10px; left: 10px;
          display: flex; flex-direction: column; gap: 5px;
        }
        .fc-badge {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: .68rem; font-weight: 700; padding: 3px 9px; border-radius: 50px;
          letter-spacing: .3px;
        }
        .fc-badge-stock {
          background: var(--accent-dim); color: var(--accent); border: 1px solid var(--accent-muted);
        }
        .fc-badge-status {
          background: #1a2535; color: #5ab8d4; border: 1px solid #2a4558;
        }
        .fc-badge-status.out { background: #2a1a1a; color: #e07070; border-color: #4a2a2a; }

        .fc-img-actions {
          position: absolute; top: 10px; right: 10px;
          display: flex; flex-direction: column; gap: 6px;
        }
        .fc-icon-btn {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(14,22,24,.75); border: 1px solid var(--border);
          color: var(--text-secondary); display: flex; align-items: center;
          justify-content: center; text-decoration: none; font-size: .8rem;
          transition: border-color .2s, color .2s, background .2s;
          backdrop-filter: blur(4px);
        }
        .fc-icon-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }

        .fc-seller-thumb {
          position: absolute; bottom: 10px; left: 10px;
          width: 32px; height: 32px; border-radius: 50%; object-fit: cover;
          border: 2px solid var(--accent-muted);
        }

        .fc-product-body {
          padding: 1rem; flex: 1; display: flex; flex-direction: column; gap: .5rem;
        }
        .fc-product-meta {
          display: flex; align-items: center; justify-content: space-between;
        }
        .fc-cat-tag {
          display: inline-block; background: var(--accent-dim); color: var(--accent);
          font-size: .68rem; font-weight: 700; padding: 2px 9px; border-radius: 50px;
          text-decoration: none; border: 1px solid var(--accent-muted); letter-spacing: .3px;
        }
        .fc-cat-tag:hover { color: var(--accent-hover); text-decoration: none; }
        .fc-seller-name {
          font-size: .72rem; color: var(--text-muted);
          display: flex; align-items: center; gap: 4px;
        }
        .fc-product-name {
          font-size: .92rem; font-weight: 700; color: var(--text-primary);
          line-height: 1.4; text-decoration: none;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .fc-product-name:hover { color: var(--accent); }
        .fc-stars { font-size: .75rem; color: var(--text-muted); }
        .fc-stars .fa-star { color: var(--text-muted); }
        .fc-stars .fa-star.filled { color: #f5a623; }

        .fc-product-foot {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--border); padding-top: .75rem; margin-top: auto;
        }
        .fc-price { font-size: 1.05rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; }
        .fc-delivery {
          font-size: .7rem; color: var(--text-muted); display: flex; align-items: center; gap: 4px;
        }
        .fc-view-btn {
          background: none; border: 1px solid var(--border); color: var(--text-secondary);
          border-radius: var(--radius-sm); padding: 5px 12px; font-size: .75rem; font-weight: 600;
          text-decoration: none; transition: border-color .2s, color .2s;
        }
        .fc-view-btn:hover { border-color: var(--accent); color: var(--accent); }

        .fc-pagination {
          display: flex; align-items: center; justify-content: center;
          gap: 6px; margin-top: 2.5rem; flex-wrap: wrap;
        }
        .fc-page-btn {
          width: 38px; height: 38px; display: flex; align-items: center; justify-content: center;
          border-radius: var(--radius-sm); border: 1px solid var(--border);
          background: var(--bg-card); color: var(--text-secondary);
          font-size: .82rem; font-weight: 600; cursor: pointer; text-decoration: none;
          transition: border-color .2s, color .2s, background .2s;
        }
        .fc-page-btn:hover, .fc-page-btn.active {
          border-color: var(--accent); color: var(--accent); background: var(--accent-dim);
        }
        .fc-page-btn.arrow { color: var(--text-muted); }
        .fc-page-btn.arrow:hover { color: var(--accent); }
        .fc-page-btn.disabled { opacity: .4; pointer-events: none; }

        .fc-empty {
          text-align: center; padding: 4rem 1rem;
          color: var(--text-muted); border: 1px dashed var(--border);
          border-radius: var(--radius-lg); margin: 1rem 0;
        }
        .fc-empty i { font-size: 3rem; margin-bottom: 1rem; display: block; }

        @media (max-width: 576px) {
          .fc-hero { padding: 2rem 1.25rem; }
          .fc-filter-bar { flex-direction: column; align-items: stretch; }
          .fc-results-count { margin-left: 0; }
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg-base:        #f6faf8;
          --bg-card:        #ffffff;
          --bg-card-alt:    #eef4f1;
          --bg-elevated:    #e6f0eb;
          --accent:         #00a667;
          --accent-dim:     rgba(0, 166, 103, 0.1);
          --accent-muted:   rgba(0, 166, 103, 0.25);
          --accent-hover:   #00c07a;
          --text-primary:   #10201b;
          --text-secondary: #45605a;
          --text-muted:     #7c968f;
          --border:         rgba(0, 100, 60, 0.12);
          --border-hover:   rgba(0, 100, 60, 0.22);
        }

        /* Hero glows tuned for a dark card — soften so they don't read as smears on white */
        [data-h-theme="light"] .fc-hero::before {
          background: radial-gradient(circle, rgba(0,166,103,.14) 0%, transparent 70%);
        }
        [data-h-theme="light"] .fc-hero::after {
          background: radial-gradient(circle, rgba(0,166,103,.08) 0%, transparent 70%);
        }

        /* "In stock" status badge was a dark-navy chip — lighten for a white card */
        [data-h-theme="light"] .fc-badge-status {
          background: #eaf5fa;
          color: #1c7fa0;
          border-color: #c7e6f0;
        }
        [data-h-theme="light"] .fc-badge-status.out {
          background: #fbebeb;
          color: #b3273a;
          border-color: #f0caca;
        }

        /* Icon-button overlay background was translucent near-black, tuned for
           photos on a dark page — keep it but slightly lighter so it still reads
           as an overlay chip rather than a black dot on light imagery */
        [data-h-theme="light"] .fc-icon-btn {
          background: rgba(255,255,255,.75);
        }
      `}),e.jsx("div",{className:"page-content",style:{padding:"2rem 0 4rem"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-hero",children:[e.jsxs("div",{className:"fc-hero-eyebrow",children:[e.jsx("i",{className:"fa-solid fa-store"})," FutureConnect Shop"]}),e.jsxs("h1",{className:"fc-hero-title",children:["Products in ",e.jsx("span",{children:t.name})]}),e.jsx("p",{className:"fc-hero-sub",children:"Find everything you need from trusted local and global sellers."})]}),e.jsxs("div",{className:"fc-trend-section",children:[e.jsx("div",{className:"fc-section-label",children:"Trending Categories"}),e.jsx("div",{className:"fc-trend-scroll",children:i.slice(0,8).map(r=>e.jsxs(c,{href:route("user.product.category",r.id),className:`fc-trend-chip${r.id===t.id?" active":""}`,children:[r.name,e.jsx("span",{className:"count",children:r.products_count??0})]},r.id))})]}),e.jsxs("div",{className:"fc-filter-bar",children:[e.jsxs("span",{className:"fc-filter-label",children:[e.jsx("i",{className:"fa-solid fa-filter me-1"}),"Filter"]}),e.jsxs("select",{className:"fc-filter-select",defaultValue:t.id,onChange:g,children:[e.jsx("option",{value:"",children:"All Categories"}),i.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsxs("select",{className:"fc-filter-select",defaultValue:"",children:[e.jsx("option",{value:"",children:"Any Rating"}),[5,4,3,2,1].map(r=>e.jsxs("option",{value:r,children:[r,"★ & up"]},r))]}),e.jsxs("select",{className:"fc-filter-select",defaultValue:"",children:[e.jsx("option",{value:"",children:"Any Price"}),e.jsx("option",{value:"under-100",children:"Under $100"}),e.jsx("option",{value:"100-500",children:"$100 – $500"}),e.jsx("option",{value:"500-1000",children:"$500 – $1,000"})]}),e.jsxs("select",{className:"fc-filter-select",defaultValue:"newest",children:[e.jsx("option",{value:"newest",children:"Newest"}),e.jsx("option",{value:"price-asc",children:"Price: Low → High"}),e.jsx("option",{value:"price-desc",children:"Price: High → Low"}),e.jsx("option",{value:"top-rated",children:"Top Rated"})]}),e.jsxs("div",{className:"fc-search-wrap",children:[e.jsx("span",{className:"fc-search-icon",children:e.jsx("i",{className:"fa-solid fa-magnifying-glass"})}),e.jsx("input",{type:"text",placeholder:"Search products…"})]}),e.jsxs("span",{className:"fc-results-count",children:[e.jsx("strong",{children:s.length})," products"]})]}),s.length>0?e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4",children:s.map(r=>{var o,l,d;return e.jsx("div",{className:"col",children:e.jsxs("div",{className:"fc-product-card",children:[e.jsxs("div",{className:"fc-product-img-wrap",children:[e.jsx(c,{href:route("user.product-details",r.id),children:e.jsx("img",{src:r.image?`/image/products/${r.image}`:"/assets/img/gigs/gigs-01.jpg",alt:r.name})}),e.jsxs("div",{className:"fc-img-badges",children:[r.stock>0&&e.jsxs("span",{className:"fc-badge fc-badge-stock",children:[e.jsx("i",{className:"fa-solid fa-boxes-stacked"})," ",r.stock," left"]}),e.jsxs("span",{className:`fc-badge fc-badge-status${((o=r.status)==null?void 0:o.toLowerCase())==="out of stock"?" out":""}`,children:[e.jsx("i",{className:"fa-solid fa-circle fa-xs"})," ",r.status]})]}),e.jsxs("div",{className:"fc-img-actions",children:[e.jsx("a",{href:"javascript:void(0);",className:"fc-icon-btn",title:"Watch video",children:e.jsx("i",{className:"feather-video"})}),e.jsx("a",{href:"javascript:void(0);",className:"fc-icon-btn",title:"Save",children:e.jsx("i",{className:"feather-heart"})})]}),e.jsx("img",{src:"/assets/img/user/user-01.jpg",className:"fc-seller-thumb",alt:"Seller"})]}),e.jsxs("div",{className:"fc-product-body",children:[e.jsxs("div",{className:"fc-product-meta",children:[(l=r.category)!=null&&l.id?e.jsx(c,{href:route("user.product.category",r.category.id),className:"fc-cat-tag",children:r.category.name}):e.jsx("span",{className:"fc-cat-tag",style:{cursor:"default"},children:"Uncategorized"}),e.jsxs("span",{className:"fc-seller-name",children:[e.jsx("i",{className:"fa-solid fa-store",style:{fontSize:".65rem"}}),((d=r.seller)==null?void 0:d.company_name)??"Seller"]})]}),e.jsx(c,{href:route("user.product-details",r.id),className:"fc-product-name",children:r.name}),e.jsxs("div",{className:"fc-stars",children:[[1,2,3,4,5].map(f=>e.jsx("i",{className:`fa-solid fa-star${f<=4?" filled":""}`},f)),e.jsx("span",{style:{marginLeft:"4px",color:"var(--text-muted)"},children:"5.0 (28 reviews)"})]}),e.jsxs("div",{className:"fc-product-foot",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"fc-price",children:["$",Number(r.price).toFixed(2)]}),e.jsxs("div",{className:"fc-delivery",children:[e.jsx("i",{className:"fa-solid fa-bolt"})," Delivery in 1 day"]})]}),e.jsx(c,{href:route("user.product-details",r.id),className:"fc-view-btn",children:"View →"})]})]})]})},r.id)})}):e.jsxs("div",{className:"fc-empty",children:[e.jsx("i",{className:"fa-solid fa-box-open"}),e.jsx("h5",{style:{color:"var(--text-secondary)",marginBottom:".5rem"},children:"No Products Found"}),e.jsx("p",{style:{fontSize:".88rem"},children:"There are no products in this category yet."})]}),m&&n.length>3?e.jsx("div",{className:"fc-pagination",children:n.map((r,o)=>e.jsx("button",{className:`fc-page-btn${r.active?" active":""}${r.url?"":" disabled"}`,onClick:()=>r.url&&p.get(r.url,{},{preserveScroll:!0}),dangerouslySetInnerHTML:{__html:r.label}},o))}):e.jsxs("div",{className:"fc-pagination",children:[e.jsx("a",{href:"javascript:void(0);",className:"fc-page-btn arrow",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("a",{href:"javascript:void(0);",className:"fc-page-btn active",children:"1"}),e.jsx("a",{href:"javascript:void(0);",className:"fc-page-btn",children:"2"}),e.jsx("a",{href:"javascript:void(0);",className:"fc-page-btn",children:"3"}),e.jsx("a",{href:"javascript:void(0);",className:"fc-page-btn arrow",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})})]})}b.layout=t=>e.jsx(h,{children:t,title:t.props.category.name});export{b as default};
