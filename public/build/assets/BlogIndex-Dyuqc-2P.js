import{r as i,j as e,H as O,L as l,a as v}from"./app-C-Atdk99.js";import{G as U}from"./GuestLayout-be1venag.js";function V({blogs:t,categories:j=[],recent:y=[],filters:n={}}){var C,_;const[W,P]=i.useState(!1),[w,k]=i.useState(n.search||""),[b,N]=i.useState(!1),[x,S]=i.useState((t==null?void 0:t.data)??[]),[p,z]=i.useState((t==null?void 0:t.next_page_url)??null),[u,L]=i.useState((t==null?void 0:t.total)??(((C=t==null?void 0:t.data)==null?void 0:C.length)||0)),h=i.useRef(null),d=`${n.category||""}|${n.search||""}|${n.sort||"latest"}`;i.useEffect(()=>{var r;h.current!==d&&(S((t==null?void 0:t.data)??[]),z((t==null?void 0:t.next_page_url)??null),L((t==null?void 0:t.total)??(((r=t==null?void 0:t.data)==null?void 0:r.length)||0)),h.current=d)},[t,d]);const o=n.category||null,s=n.search||"",g=n.sort||"latest",m=r=>{v.get(route("user.blogs"),r,{preserveState:!0,preserveScroll:!0,replace:!0})},$=r=>{r.preventDefault(),m({category:o||void 0,search:w||void 0,sort:g})},f=r=>{m({category:r||void 0,search:s||void 0,sort:g})},I=()=>{k(""),v.get(route("user.blogs"),{},{preserveState:!0,preserveScroll:!0,replace:!0})},R=r=>{m({category:o||void 0,search:s||void 0,sort:r.target.value})},H=()=>{!p||b||(N(!0),v.get(p,{},{preserveState:!0,preserveScroll:!0,only:["blogs"],onSuccess:r=>{const a=r.props.blogs;S(c=>[...c,...(a==null?void 0:a.data)??[]]),z((a==null?void 0:a.next_page_url)??null),L((a==null?void 0:a.total)??u),h.current=d},onFinish:()=>N(!1)}))},A=((_=j.find(r=>r.slug===o))==null?void 0:_.name)||o;return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"News & Insights | Future Connect"}),e.jsxs("div",{className:"tb-blog-page",children:[e.jsx("div",{className:"tb-breadcrumb",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12 col-12",children:[e.jsx("nav",{"aria-label":"breadcrumb",className:"page-breadcrumb",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx(l,{href:route("user.home"),children:"Home"})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:"News & Insights"})]})}),e.jsx("h2",{className:"tb-breadcrumb-title",children:"News & Insights"})]})})})}),e.jsx("div",{className:"tb-page-content",children:e.jsxs("div",{className:"container",children:[e.jsxs("button",{type:"button",className:"tb-filter-toggle",onClick:()=>P(r=>!r),children:[e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),e.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),e.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),e.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),e.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),e.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),e.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"})]}),"Filters"]}),e.jsxs("div",{className:"tb-content-row",children:[e.jsx("aside",{className:"tb-sidebar",children:e.jsxs("div",{className:`tb-sidebar-body ${W?"open":""}`,children:[e.jsxs("div",{className:"tb-filter-card",children:[e.jsx("h6",{className:"tb-filter-title",children:"Search"}),e.jsxs("form",{className:"tb-search-form",onSubmit:$,children:[e.jsx("input",{type:"text",value:w,onChange:r=>k(r.target.value),placeholder:"Search articles..."}),e.jsx("button",{type:"submit","aria-label":"Search",children:e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]})]}),e.jsxs("div",{className:"tb-filter-card",children:[e.jsx("h6",{className:"tb-filter-title",children:"Categories"}),e.jsxs("ul",{className:"tb-cat-list",children:[e.jsx("li",{children:e.jsx("a",{href:"#",onClick:r=>{r.preventDefault(),f(null)},className:o?"":"active",children:"All Posts"})}),j.map(r=>e.jsx("li",{children:e.jsxs("a",{href:"#",onClick:a=>{a.preventDefault(),f(r.slug)},className:o===r.slug?"active":"",children:[r.name,e.jsx("span",{className:"tb-count",children:r.blogs_count??0})]})},r.slug))]}),(o||s)&&e.jsxs("a",{href:"#",className:"tb-clear-filters",onClick:r=>{r.preventDefault(),I()},children:[e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"Clear filters"]})]}),y.length>0&&e.jsxs("div",{className:"tb-filter-card",children:[e.jsx("h6",{className:"tb-filter-title",children:"Recent Posts"}),e.jsx("ul",{className:"tb-recent-list",children:y.map(r=>e.jsxs("li",{className:"tb-recent-item",children:[e.jsx("div",{className:"tb-recent-thumb",children:e.jsx("img",{src:r.image_url,alt:r.title})}),e.jsxs("div",{className:"tb-recent-info",children:[e.jsx(l,{href:route("user.blog.details",r.slug),children:r.title}),e.jsx("small",{children:r.created_at_formatted})]})]},r.id))})]})]})}),e.jsxs("div",{className:"tb-main",children:[e.jsxs("div",{className:"tb-results-head",children:[e.jsxs("div",{className:"tb-results-count",children:["Showing ",e.jsx("strong",{children:x.length})," of ",e.jsx("strong",{children:u})," article",u===1?"":"s",o&&e.jsxs(e.Fragment,{children:[" ","in ",e.jsx("strong",{children:A})]}),s&&e.jsxs(e.Fragment,{children:[" for “",e.jsx("strong",{children:s}),"”"]})]}),e.jsxs("div",{className:"tb-sort-wrap",children:[e.jsx("label",{htmlFor:"tbSort",children:"Sort by"}),e.jsxs("select",{id:"tbSort",className:"tb-select",value:g,onChange:R,children:[e.jsx("option",{value:"latest",children:"Latest"}),e.jsx("option",{value:"oldest",children:"Oldest"}),e.jsx("option",{value:"popular",children:"Most Popular"})]})]})]}),x.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tb-grid-row",children:x.map(r=>{var a,c,F,M,B;return e.jsxs("div",{className:"tb-card",children:[e.jsxs("div",{className:"tb-card-img",children:[e.jsx(l,{href:route("user.blog.details",r.slug),"aria-label":`Read blog: ${r.title}`,children:e.jsx("img",{src:r.image_url,alt:r.title})}),e.jsx("a",{href:"#",className:"tb-card-cat",onClick:E=>{var D;E.preventDefault(),f((D=r.category)==null?void 0:D.slug)},children:((a=r.category)==null?void 0:a.name)??"Uncategorized"}),e.jsx("button",{type:"button",className:"tb-card-fav","aria-pressed":"false","aria-label":"Add to favorites",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),e.jsxs("div",{className:"tb-card-body",children:[e.jsx("h3",{className:"tb-card-title",children:e.jsx(l,{href:route("user.blog.details",r.slug),children:r.title})}),e.jsx("p",{className:"tb-card-excerpt",children:r.excerpt}),e.jsxs("div",{className:"tb-card-footer",children:[e.jsxs("div",{className:"tb-card-author",children:[e.jsx("a",{href:"#","aria-label":`Author profile: ${(c=r.author)==null?void 0:c.name}`,children:e.jsx("img",{src:(F=r.author)==null?void 0:F.avatar_url,alt:(M=r.author)==null?void 0:M.name})}),e.jsxs("div",{children:[e.jsx("a",{href:"#",children:(B=r.author)==null?void 0:B.name}),e.jsx("small",{children:r.created_at_formatted})]})]}),e.jsx(l,{href:route("user.blog.details",r.slug),className:"tb-card-arrow","aria-label":"Read more",children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),e.jsx("polyline",{points:"7 7 17 7 17 17"})]})})]})]})]},r.id)})}),p&&e.jsx("div",{className:"tb-load-more",children:e.jsx("button",{type:"button",className:"tb-load-more-btn",onClick:H,disabled:b,children:b?"Loading…":e.jsxs(e.Fragment,{children:["Load More",e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("polyline",{points:"19 12 12 19 5 12"})]})]})})})]}):e.jsxs("div",{className:"tb-empty",children:[e.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",style:{margin:"0 auto 12px"},children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}),e.jsx("h5",{children:"No articles found"}),e.jsx("p",{children:"Try adjusting your search or filters."})]})]})]})]})})]}),e.jsx("style",{children:`
                :root {
                    --tb-bg: #0e1618; --tb-surface: #141d20; --tb-surface2: #1a2428;
                    --tb-green: #48d597; --tb-green-dim: rgba(0, 166, 103, .14); --tb-green-glow: rgba(0, 166, 103, .28);
                    --tb-text: #e8f0ed; --tb-muted: #7a9a8e;
                    --tb-border: rgba(0, 166, 103, .16); --tb-border-h: rgba(0, 166, 103, .38);
                    --tb-radius: 14px;
                    --tb-breadcrumb-grad: linear-gradient(145deg, #091315 0%, #0c1e21 65%, #081213 100%);
                    --tb-breadcrumb-grid: rgba(0, 166, 103, .05);
                    --tb-title-color: #fff;
                    --tb-chip-bg: rgba(8, 15, 17, .75);
                    --tb-select-arrow: %237a9a8e;
                    --tb-search-placeholder: #3d5a52;
                }

                [data-h-theme="light"] {
                    --tb-bg: #f6faf8; --tb-surface: #ffffff; --tb-surface2: #eef4f1;
                    --tb-green: #00a667; --tb-green-dim: rgba(0, 166, 103, .08); --tb-green-glow: rgba(0, 166, 103, .18);
                    --tb-text: #10201b; --tb-muted: #5b7a70;
                    --tb-border: rgba(0, 100, 60, .12); --tb-border-h: rgba(0, 100, 60, .3);
                    --tb-breadcrumb-grad: linear-gradient(145deg, #f0f7f4 0%, #e6f3ee 65%, #f0f7f4 100%);
                    --tb-breadcrumb-grid: rgba(0, 100, 60, .06);
                    --tb-title-color: #10201b;
                    --tb-chip-bg: rgba(255, 255, 255, .85);
                    --tb-select-arrow: %235b7a70;
                    --tb-search-placeholder: #a9c2b8;
                }

                .tb-blog-page, .tb-blog-page *, .tb-blog-page *::before, .tb-blog-page *::after { box-sizing: border-box; }
                .tb-blog-page { background: var(--tb-bg); font-family: 'DM Sans', sans-serif; color: var(--tb-text); padding-bottom: 60px; transition: background .25s, color .25s; }

                .tb-breadcrumb {
                    background: var(--tb-breadcrumb-grad);
                    border-bottom: 1px solid var(--tb-border);
                    padding: 34px 0 28px; position: relative; overflow: hidden;
                }
                .tb-breadcrumb::before {
                    content: ''; position: absolute; inset: 0;
                    background-image:
                        linear-gradient(var(--tb-breadcrumb-grid) 1px, transparent 1px),
                        linear-gradient(90deg, var(--tb-breadcrumb-grid) 1px, transparent 1px);
                    background-size: 36px 36px; pointer-events: none;
                }
                .tb-breadcrumb .page-breadcrumb { position: relative; z-index: 1; }
                .tb-breadcrumb .breadcrumb { margin-bottom: 10px; list-style: none; display: flex; padding: 0; }
                .tb-breadcrumb .breadcrumb-item a { color: var(--tb-muted); font-size: 13px; text-decoration: none; transition: color .2s; }
                .tb-breadcrumb .breadcrumb-item a:hover { color: var(--tb-green); }
                .tb-breadcrumb .breadcrumb-item.active,
                .tb-breadcrumb .breadcrumb-item[aria-current="page"] { color: var(--tb-green); font-size: 13px; }
                .tb-breadcrumb .breadcrumb-item + .breadcrumb-item::before { color: var(--tb-muted); content: "/"; margin: 0 8px; }
                .tb-breadcrumb-title {
                    position: relative; z-index: 1; font-family: 'Syne', sans-serif; font-weight: 800;
                    font-size: clamp(26px, 3.4vw, 38px); letter-spacing: -1px; color: var(--tb-title-color); margin: 0;
                }

                .tb-page-content { padding-top: 40px; }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

                .tb-content-row { display: flex; gap: 28px; align-items: flex-start; }
                .tb-main { flex: 1; min-width: 0; }
                .tb-sidebar { width: 300px; flex-shrink: 0; }

                .tb-results-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; gap: 12px; flex-wrap: wrap; }
                .tb-results-count { font-size: 13.5px; color: var(--tb-muted); }
                .tb-results-count strong { color: var(--tb-text); font-weight: 600; }
                .tb-sort-wrap { display: flex; align-items: center; gap: 10px; }
                .tb-sort-wrap label { font-size: 12px; color: var(--tb-muted); text-transform: uppercase; letter-spacing: .6px; }

                .tb-select {
                    background: var(--tb-surface2); border: 1px solid var(--tb-border); color: var(--tb-text);
                    border-radius: 8px; padding: 8px 32px 8px 12px; font-size: 13px; font-family: 'DM Sans', sans-serif;
                    outline: none; appearance: none;
                    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='var(--tb-select-arrow)'/></svg>");
                    background-repeat: no-repeat; background-position: right 12px center;
                    transition: border-color .2s; cursor: pointer;
                }
                .tb-select:focus { border-color: var(--tb-green); }

                .tb-filter-toggle {
                    display: none; width: 100%; align-items: center; justify-content: center; gap: 8px;
                    background: var(--tb-surface); border: 1px solid var(--tb-border); color: var(--tb-text);
                    border-radius: 10px; padding: 12px; margin-bottom: 18px; font-size: 13.5px; font-weight: 600; cursor: pointer;
                }
                .tb-filter-toggle:hover { border-color: var(--tb-border-h); color: var(--tb-green); }

                .tb-filter-card { background: var(--tb-surface); border: 1px solid var(--tb-border); border-radius: var(--tb-radius); padding: 22px; margin-bottom: 20px; }
                .tb-filter-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; color: var(--tb-title-color); margin: 0 0 16px; display: flex; align-items: center; gap: 8px; }
                .tb-filter-title::before { content: ''; width: 3px; height: 15px; border-radius: 2px; background: var(--tb-green); display: inline-block; }

                .tb-search-form { position: relative; }
                .tb-search-form input {
                    width: 100%; background: var(--tb-surface2); border: 1px solid var(--tb-border); border-radius: 10px;
                    color: var(--tb-text); font-size: 13.5px; padding: 11px 40px 11px 14px; outline: none;
                    transition: border-color .2s, background .2s; font-family: 'DM Sans', sans-serif;
                }
                .tb-search-form input::placeholder { color: var(--tb-search-placeholder); }
                .tb-search-form input:focus { border-color: var(--tb-green); background: var(--tb-green-dim); }
                .tb-search-form button {
                    position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
                    width: 30px; height: 30px; border-radius: 7px; background: var(--tb-green); border: none;
                    color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background .2s;
                }
                .tb-search-form button:hover { background: #00c07a; }

                .tb-cat-list { list-style: none; margin: 0; padding: 0; }
                .tb-cat-list li { margin-bottom: 4px; }
                .tb-cat-list a {
                    display: flex; align-items: center; justify-content: space-between; padding: 9px 12px;
                    border-radius: 8px; font-size: 13.5px; color: var(--tb-muted); text-decoration: none;
                    transition: color .18s, background .18s; cursor: pointer;
                }
                .tb-cat-list a:hover { color: var(--tb-title-color); background: var(--tb-green-dim); }
                .tb-cat-list a.active { color: var(--tb-title-color); background: var(--tb-green-dim); border: 1px solid var(--tb-border-h); font-weight: 600; }
                .tb-cat-list a .tb-count { font-size: 11px; color: var(--tb-muted); background: rgba(120,120,120,.12); border-radius: 99px; padding: 2px 8px; }
                .tb-cat-list a.active .tb-count { color: var(--tb-green); background: var(--tb-green-dim); }

                .tb-recent-list { list-style: none; margin: 0; padding: 0; }
                .tb-recent-item { display: flex; gap: 12px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid var(--tb-border); }
                .tb-recent-item:last-child { border-bottom: none; padding-bottom: 0; }
                .tb-recent-item:first-child { padding-top: 0; }
                .tb-recent-thumb { width: 56px; height: 56px; border-radius: 9px; overflow: hidden; flex-shrink: 0; background: var(--tb-surface2); }
                .tb-recent-thumb img { width: 100%; height: 100%; object-fit: cover; }
                .tb-recent-info a {
                    font-size: 13px; font-weight: 600; color: var(--tb-text); text-decoration: none; line-height: 1.35;
                    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; transition: color .18s;
                }
                .tb-recent-info a:hover { color: var(--tb-green); }
                .tb-recent-info small { color: var(--tb-muted); font-size: 11.5px; display: block; margin-top: 4px; }

                .tb-clear-filters { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--tb-green); text-decoration: none; margin-top: 4px; cursor: pointer; }
                .tb-clear-filters:hover { text-decoration: underline; }

                .tb-grid-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
                .tb-card {
                    background: var(--tb-surface); border: 1px solid var(--tb-border); border-radius: var(--tb-radius);
                    overflow: hidden; display: flex; flex-direction: column; transition: transform .25s, box-shadow .25s, border-color .25s;
                }
                .tb-card:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,0,0,.25); border-color: var(--tb-border-h); }
                .tb-card-img { position: relative; aspect-ratio: 16/10; overflow: hidden; background: var(--tb-surface2); }
                .tb-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
                .tb-card:hover .tb-card-img img { transform: scale(1.06); }
                .tb-card-cat {
                    position: absolute; top: 12px; left: 12px; background: var(--tb-chip-bg); backdrop-filter: blur(6px);
                    border: 1px solid var(--tb-border-h); color: var(--tb-green); font-size: 11px; font-weight: 600;
                    padding: 5px 12px; border-radius: 99px; text-decoration: none;
                }
                .tb-card-fav {
                    position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; border-radius: 8px;
                    background: var(--tb-chip-bg); backdrop-filter: blur(6px); border: 1px solid var(--tb-border);
                    color: var(--tb-muted); display: flex; align-items: center; justify-content: center; cursor: pointer;
                    transition: color .2s, border-color .2s;
                }
                .tb-card-fav:hover { color: #ff5c7a; border-color: rgba(255,92,122,.4); }
                .tb-card-body { padding: 20px; display: flex; flex-direction: column; flex: 1; }
                .tb-card-title { font-family: 'Syne', sans-serif; font-size: 16.5px; font-weight: 700; line-height: 1.35; margin: 0 0 8px; }
                .tb-card-title a { color: var(--tb-title-color); text-decoration: none; transition: color .18s; }
                .tb-card-title a:hover { color: var(--tb-green); }
                .tb-card-excerpt { font-size: 13px; color: var(--tb-muted); line-height: 1.6; margin: 0 0 18px; flex: 1; }
                .tb-card-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--tb-border); }
                .tb-card-author { display: flex; align-items: center; gap: 9px; }
                .tb-card-author img { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 1px solid var(--tb-border); }
                .tb-card-author a { font-size: 12.5px; font-weight: 600; color: var(--tb-text); text-decoration: none; }
                .tb-card-author small { display: block; font-size: 11px; color: var(--tb-muted); margin-top: 1px; }
                .tb-card-arrow {
                    width: 30px; height: 30px; border-radius: 8px; border: 1px solid var(--tb-border);
                    color: var(--tb-muted); display: flex; align-items: center; justify-content: center;
                    text-decoration: none; transition: all .2s; flex-shrink: 0;
                }
                .tb-card:hover .tb-card-arrow { color: var(--tb-green); border-color: var(--tb-border-h); transform: translateX(2px); }

                .tb-empty { text-align: center; padding: 70px 20px; background: var(--tb-surface); border: 1px dashed var(--tb-border); border-radius: var(--tb-radius); }
                .tb-empty svg { color: var(--tb-muted); }
                .tb-empty h5 { color: var(--tb-title-color); font-family: 'Syne', sans-serif; margin-bottom: 6px; }
                .tb-empty p { color: var(--tb-muted); font-size: 13.5px; margin: 0; }

                .tb-load-more { display: flex; justify-content: center; margin-top: 36px; }
                .tb-load-more-btn {
                    display: inline-flex; align-items: center; gap: 8px; background: transparent;
                    border: 1.5px solid var(--tb-border-h); color: var(--tb-green); font-family: 'Syne', sans-serif;
                    font-weight: 700; font-size: 13.5px; padding: 12px 30px; border-radius: 10px;
                    text-decoration: none; cursor: pointer; transition: all .2s;
                }
                .tb-load-more-btn:hover:not(:disabled) { background: var(--tb-green); color: #fff; box-shadow: 0 12px 28px var(--tb-green-glow); transform: translateY(-2px); }
                .tb-load-more-btn:disabled { opacity: .6; cursor: not-allowed; }

                @media (max-width: 991px) {
                    .tb-grid-row { grid-template-columns: repeat(2, 1fr); }
                    .tb-sidebar { width: 100%; order: -1; }
                    .tb-content-row { flex-direction: column; }
                    .tb-filter-toggle { display: flex; }
                    .tb-sidebar-body { display: none; }
                    .tb-sidebar-body.open { display: block; }
                }

                @media (max-width: 640px) {
                    .tb-grid-row { grid-template-columns: 1fr; }
                    .tb-results-head { flex-direction: column; align-items: flex-start; }
                }
            `})]})}V.layout=t=>e.jsx(U,{children:t,title:"News & Insights"});export{V as default};
