import{r as h,j as e,H as T,L as m,a as F}from"./app-B2SIh33N.js";import{A as E}from"./AppLayout-CkTPU_ZW.js";function r({name:c,size:n=20,strokeWidth:i=1.8,className:s=""}){const p={width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",className:s,"aria-hidden":"true"},l={book:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"})]}),plus:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]}),checkCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m8 12 2.5 2.5L16 9"})]}),clock:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 2"})]}),xCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m9 9 6 6"}),e.jsx("path",{d:"m15 9-6 6"})]}),search:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"11",cy:"11",r:"6.5"}),e.jsx("path",{d:"m16 16 4 4"})]}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z"}),e.jsx("circle",{cx:"7.5",cy:"7.5",r:"1"})]}),eye:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"})]}),trash:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 7h16"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M6 7l1 14h10l1-14"}),e.jsx("path",{d:"M9 7V4h6v3"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m6 6 12 12"}),e.jsx("path",{d:"m18 6-12 12"})]})};return e.jsx("svg",{...p,children:l[c]||l.book})}function H({stories:c=[],stats:n={}}){const i=Array.isArray(c)?c:(c==null?void 0:c.data)??[],[s,p]=h.useState(""),[l,j]=h.useState("all"),[o,x]=h.useState(null),d=h.useMemo(()=>({total:(n==null?void 0:n.total)??i.length,approved:(n==null?void 0:n.approved)??i.filter(a=>String((a==null?void 0:a.status)||"").toLowerCase()==="approved").length,pending:(n==null?void 0:n.pending)??i.filter(a=>String((a==null?void 0:a.status)||"").toLowerCase()==="pending").length,rejected:(n==null?void 0:n.rejected)??i.filter(a=>String((a==null?void 0:a.status)||"").toLowerCase()==="rejected").length}),[n,i]),b=h.useMemo(()=>{const a=s.trim().toLowerCase();return i.filter(t=>{var w,y;const g=String((t==null?void 0:t.title)||"").toLowerCase(),v=String(((w=t==null?void 0:t.talent)==null?void 0:w.name)||(t==null?void 0:t.talent_name)||"").toLowerCase(),u=String(((y=t==null?void 0:t.category)==null?void 0:y.name)||(t==null?void 0:t.category_name)||"").toLowerCase(),f=String((t==null?void 0:t.status)||"").toLowerCase();return(!a||g.includes(a)||v.includes(a)||u.includes(a))&&(l==="all"||f===l)})},[i,s,l]),N=a=>{const t=String(a||"pending").toLowerCase();return t==="approved"?"approved":t==="published"?"published":t==="rejected"?"rejected":"pending"},S=a=>{const t=String(a||"pending").toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)},z=a=>String(a).trim().charAt(0).toUpperCase(),C=a=>{if(!a)return"No story description available.";const t=String(a).replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim();return t.length<=130?t:t.substring(0,130)+"…"},L=a=>{if(!a)return"/images/placeholder-story.png";const t=String(a);return/^https?:\/\//i.test(t)||t.charAt(0)==="/"?t:"/"+t},A=()=>{o!=null&&o.id&&F.delete(route("admin.stories.destroy",o.id),{preserveScroll:!0,onSuccess:()=>x(null)})},M=[{key:"all",label:"All",count:d.total},{key:"pending",label:"Pending",count:d.pending},{key:"approved",label:"Approved",count:d.approved},{key:"rejected",label:"Rejected",count:d.rejected}];return e.jsxs(E,{children:[e.jsx(T,{title:"Stories"}),e.jsxs("div",{"data-h-scope":"stories-index",className:"stories-index",children:[e.jsxs("header",{className:"masthead",children:[e.jsxs("div",{className:"masthead-text",children:[e.jsx("p",{className:"kicker",children:"Admin — Story desk"}),e.jsx("h1",{children:"Talent stories"}),e.jsx("p",{className:"dek",children:"Read, verify and publish the stories talent submit about their work."})]}),e.jsxs(m,{href:route("admin.stories.create"),className:"btn btn-primary",children:[e.jsx(r,{name:"plus",size:17}),e.jsx("span",{children:"New story"})]})]}),e.jsxs("section",{className:"tally","aria-label":"Story counts",children:[e.jsxs("div",{className:"tally-item tally-item--lead",children:[e.jsx("strong",{children:d.pending}),e.jsx("span",{children:"Waiting on you"})]}),e.jsxs("div",{className:"tally-item",children:[e.jsx("strong",{children:d.approved}),e.jsx("span",{children:"Approved"})]}),e.jsxs("div",{className:"tally-item",children:[e.jsx("strong",{children:d.rejected}),e.jsx("span",{children:"Rejected"})]}),e.jsxs("div",{className:"tally-item",children:[e.jsx("strong",{children:d.total}),e.jsx("span",{children:"Submitted in total"})]})]}),e.jsxs("section",{className:"toolbar",children:[e.jsxs("div",{className:"search-field",children:[e.jsx(r,{name:"search",size:18}),e.jsx("input",{type:"text",value:s,onChange:a=>p(a.target.value),placeholder:"Search by title, talent or category"}),s&&e.jsx("button",{type:"button",className:"clear-search",onClick:()=>p(""),"aria-label":"Clear search",children:e.jsx(r,{name:"close",size:14})})]}),e.jsx("div",{className:"chip-row",role:"group","aria-label":"Filter by status",children:M.map(a=>e.jsxs("button",{type:"button",className:"chip"+(l===a.key?" is-active":""),onClick:()=>j(a.key),children:[a.label,e.jsx("span",{className:"chip-count",children:a.count})]},a.key))})]}),e.jsxs("section",{className:"index-list",children:[e.jsx("div",{className:"index-list-head",children:e.jsxs("span",{children:[b.length," of ",i.length," stories"]})}),b.length>0?e.jsx("ul",{className:"entries",children:b.map(a=>{var u,f;const t=N(a==null?void 0:a.status),g=((u=a==null?void 0:a.talent)==null?void 0:u.name)||(a==null?void 0:a.talent_name)||"Unknown talent",v=((f=a==null?void 0:a.category)==null?void 0:f.name)||(a==null?void 0:a.category_name)||"Uncategorized";return e.jsxs("li",{className:"entry",children:[e.jsx(m,{href:route("admin.stories.show",a.id),className:"entry-thumb",children:e.jsx("img",{src:L(a==null?void 0:a.thumbnail),alt:(a==null?void 0:a.title)||"Story",onError:k=>{k.currentTarget.src="/images/placeholder-story.png"}})}),e.jsxs("div",{className:"entry-body",children:[e.jsxs("div",{className:"entry-top",children:[e.jsx(m,{href:route("admin.stories.show",a.id),className:"entry-title",children:(a==null?void 0:a.title)||"Untitled story"}),e.jsxs("span",{className:"status-pill "+t,children:[e.jsx("span",{className:"status-dot"}),S(a==null?void 0:a.status)]})]}),e.jsx("p",{className:"entry-excerpt",children:C(a==null?void 0:a.content)}),e.jsxs("div",{className:"entry-meta",children:[e.jsxs("span",{className:"byline",children:[e.jsx("span",{className:"byline-avatar",children:z(g)}),"By ",g]}),e.jsxs("span",{className:"entry-category",children:[e.jsx(r,{name:"tag",size:13}),v]})]})]}),e.jsxs("div",{className:"entry-actions",children:[e.jsx(m,{href:route("admin.stories.show",a.id),className:"icon-button",title:"View story",children:e.jsx(r,{name:"eye",size:16})}),e.jsx(m,{href:route("admin.stories.edit",a.id),className:"icon-button",title:"Edit story",children:e.jsx(r,{name:"edit",size:16})}),e.jsx("button",{type:"button",className:"icon-button danger",title:"Delete story",onClick:()=>x(a),children:e.jsx(r,{name:"trash",size:16})})]})]},a.id)})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(r,{name:"book",size:26})}),e.jsx("h3",{children:s||l!=="all"?"No stories match":"No stories yet"}),e.jsx("p",{children:s||l!=="all"?"Try a different search term or filter.":"Stories talent submit will appear here for review."}),(s||l!=="all")&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{p(""),j("all")},children:"Clear filters"})]})]})]}),o&&e.jsx("div",{className:"modal-backdrop","data-h-scope":"stories-index",onMouseDown:a=>{a.target===a.currentTarget&&x(null)},children:e.jsxs("div",{className:"delete-modal",children:[e.jsx("button",{type:"button",className:"modal-close",onClick:()=>x(null),"aria-label":"Close",children:e.jsx(r,{name:"close",size:18})}),e.jsx("div",{className:"delete-modal-icon",children:e.jsx(r,{name:"trash",size:22})}),e.jsx("h3",{children:"Delete this story?"}),e.jsxs("p",{children:['"',(o==null?void 0:o.title)||"This story",`" will be permanently removed. This can't be undone.`]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>x(null),children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn btn-danger",onClick:A,children:[e.jsx(r,{name:"trash",size:16}),"Delete story"]})]})]})}),e.jsx("style",{children:`

                [data-h-scope="stories-index"] {
                    --ink: #1d1d1f;
                    --ink-soft: #6e6e73;
                    --ink-faint: #a1a1a6;
                    --paper: #ffffff;
                    --surface: #ffffff;
                    --line: #e5e5e7;
                    --brand: #48d597;
                    --brand-ink: #157a4e;
                    --brand-wash: #eaf9f1;
                    --amber: #b8790f;
                    --amber-wash: #fbf1de;
                    --clay: #b5433a;
                    --clay-wash: #faeae8;

                    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
                    color: var(--ink);
                }

                [data-h-scope="stories-index"] * {
                    box-sizing: border-box;
                }

                .stories-index {
                    background: var(--paper);
                    min-height: 100vh;
                    padding: 40px clamp(18px, 4vw, 56px) 64px;
                }

                .stories-index > * {
                    max-width: 1080px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* -----------------------------------------------------------
                   MASTHEAD
                ----------------------------------------------------------- */

                .masthead {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                    padding-bottom: 22px;
                    border-bottom: 2px solid var(--ink);
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                }

                .kicker {
                    margin: 0 0 5px;
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--brand-ink);
                    letter-spacing: 0.01em;
                }

                .masthead h1 {
                    margin: 0;
                    font-weight: 700;
                    font-size: clamp(20px, 2.4vw, 26px);
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                }

                .dek {
                    margin: 6px 0 0;
                    font-size: 12.5px;
                    color: var(--ink-soft);
                    max-width: 46ch;
                }

                /* -----------------------------------------------------------
                   BUTTONS
                ----------------------------------------------------------- */

                .btn {
                    height: 36px;
                    padding: 0 15px;
                    border-radius: 7px;
                    border: 1.5px solid transparent;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    font-family: inherit;
                    font-size: 12.5px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease;
                }

                .btn:hover {
                    transform: translateY(-1px);
                }

                .btn-primary {
                    background: var(--ink);
                    color: #fff;
                    border-color: var(--ink);
                }

                .btn-primary:hover {
                    background: var(--brand-ink);
                    border-color: var(--brand-ink);
                }

                .btn-secondary {
                    background: transparent;
                    color: var(--ink);
                    border-color: var(--line);
                }

                .btn-secondary:hover {
                    border-color: var(--ink-faint);
                }

                .btn-danger {
                    background: var(--clay);
                    color: #fff;
                    border-color: var(--clay);
                }

                .btn-danger:hover {
                    background: #983630;
                    border-color: #983630;
                }

                /* -----------------------------------------------------------
                   TALLY
                ----------------------------------------------------------- */

                .tally {
                    display: flex;
                    gap: clamp(16px, 3vw, 32px);
                    padding: 4px 0 24px;
                    flex-wrap: wrap;
                }

                .tally-item {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    padding-left: clamp(16px, 3vw, 32px);
                    border-left: 1px solid var(--line);
                }

                .tally-item:first-child {
                    padding-left: 0;
                    border-left: 0;
                }

                .tally-item strong {
                    font-weight: 700;
                    font-size: 19px;
                    line-height: 1;
                }

                .tally-item--lead strong {
                    font-size: 26px;
                    color: var(--brand-ink);
                }

                .tally-item span {
                    font-size: 11px;
                    color: var(--ink-soft);
                }

                /* -----------------------------------------------------------
                   TOOLBAR
                ----------------------------------------------------------- */

                .toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    flex-wrap: wrap;
                    padding: 16px 0;
                    border-top: 1px solid var(--line);
                    border-bottom: 1px solid var(--line);
                    margin-bottom: 22px;
                }

                .search-field {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--ink-faint);
                    min-width: 220px;
                    flex: 1 1 260px;
                    max-width: 380px;
                    border-bottom: 1.5px solid var(--line);
                    padding-bottom: 7px;
                }

                .search-field input {
                    flex: 1;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    font-family: inherit;
                    font-size: 13px;
                    color: var(--ink);
                }

                .search-field input::placeholder {
                    color: var(--ink-faint);
                }

                .search-field:has(input:focus) {
                    border-color: var(--brand-ink);
                }

                .clear-search {
                    border: 0;
                    background: transparent;
                    color: var(--ink-faint);
                    cursor: pointer;
                    display: flex;
                    padding: 2px;
                }

                .clear-search:hover {
                    color: var(--ink);
                }

                .chip-row {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                .chip {
                    height: 30px;
                    padding: 0 12px;
                    border-radius: 999px;
                    border: 1px solid var(--line);
                    background: var(--surface);
                    color: var(--ink-soft);
                    font-family: inherit;
                    font-size: 11.5px;
                    font-weight: 600;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                }

                .chip:hover {
                    border-color: var(--ink-faint);
                    color: var(--ink);
                }

                .chip.is-active {
                    background: var(--ink);
                    border-color: var(--ink);
                    color: #fff;
                }

                .chip-count {
                    font-size: 11px;
                    opacity: 0.7;
                }

                /* -----------------------------------------------------------
                   INDEX LIST
                ----------------------------------------------------------- */

                .index-list-head {
                    font-size: 12px;
                    color: var(--ink-faint);
                    margin-bottom: 10px;
                }

                .entries {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
                    gap: 14px;
                }

                .entry {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid var(--line);
                    border-radius: 10px;
                    overflow: hidden;
                    background: var(--surface);
                    transition: border-color 0.12s ease, box-shadow 0.12s ease;
                }

                .entry:hover {
                    border-color: var(--ink-faint);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }

                .entry-thumb {
                    width: 100%;
                    height: 120px;
                    flex-shrink: 0;
                    background: var(--line);
                    display: block;
                }

                .entry-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .entry-body {
                    flex: 1;
                    min-width: 0;
                    padding: 12px 14px 6px;
                }

                .entry-top {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 8px;
                }

                .entry-title {
                    font-weight: 600;
                    font-size: 13px;
                    color: var(--ink);
                    text-decoration: none;
                    line-height: 1.35;
                }

                .entry-title:hover {
                    color: var(--brand-ink);
                }

                .entry-excerpt {
                    margin: 5px 0 9px;
                    font-size: 11.5px;
                    color: var(--ink-soft);
                    line-height: 1.5;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .entry-meta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                .byline {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--ink-soft);
                }

                .byline-avatar {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    font-size: 9px;
                    font-weight: 800;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .entry-category {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 10.5px;
                    color: var(--ink-faint);
                }

                /* -----------------------------------------------------------
                   STATUS PILL
                ----------------------------------------------------------- */

                .status-pill {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 3px 8px;
                    border-radius: 999px;
                    font-size: 9.5px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-pill.approved,
                .status-pill.published {
                    color: var(--brand-ink);
                    background: var(--brand-wash);
                }

                .status-pill.approved .status-dot,
                .status-pill.published .status-dot {
                    background: var(--brand);
                }

                .status-pill.pending {
                    color: var(--amber);
                    background: var(--amber-wash);
                }

                .status-pill.pending .status-dot {
                    background: var(--amber);
                }

                .status-pill.rejected {
                    color: var(--clay);
                    background: var(--clay-wash);
                }

                .status-pill.rejected .status-dot {
                    background: var(--clay);
                }

                /* -----------------------------------------------------------
                   ACTIONS
                ----------------------------------------------------------- */

                .entry-actions {
                    display: flex;
                    gap: 6px;
                    padding: 8px 14px 12px;
                    border-top: 1px solid var(--line);
                    margin-top: 8px;
                }

                .icon-button {
                    width: 28px;
                    height: 28px;
                    border: 1px solid var(--line);
                    border-radius: 6px;
                    background: var(--surface);
                    color: var(--ink-soft);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    cursor: pointer;
                }

                .icon-button:hover {
                    color: var(--brand-ink);
                    border-color: var(--brand);
                    background: var(--brand-wash);
                }

                .icon-button.danger:hover {
                    color: var(--clay);
                    border-color: var(--clay);
                    background: var(--clay-wash);
                }

                /* -----------------------------------------------------------
                   EMPTY STATE
                ----------------------------------------------------------- */

                .empty-state {
                    text-align: center;
                    padding: 70px 20px;
                }

                .empty-icon {
                    width: 56px;
                    height: 56px;
                    margin: 0 auto 16px;
                    border-radius: 14px;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .empty-state h3 {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 600;
                }

                .empty-state p {
                    margin: 6px 0 16px;
                    color: var(--ink-soft);
                    font-size: 12.5px;
                }

                /* -----------------------------------------------------------
                   DELETE MODAL
                ----------------------------------------------------------- */

                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(23, 27, 31, 0.5);
                }

                .delete-modal {
                    position: relative;
                    width: min(400px, 100%);
                    background: var(--surface);
                    border-radius: 14px;
                    padding: 26px;
                    text-align: center;
                }

                .modal-close {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 30px;
                    height: 30px;
                    border: 0;
                    border-radius: 7px;
                    background: var(--paper);
                    color: var(--ink-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .delete-modal-icon {
                    width: 50px;
                    height: 50px;
                    margin: 4px auto 14px;
                    border-radius: 50%;
                    background: var(--clay-wash);
                    color: var(--clay);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .delete-modal h3 {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 600;
                }

                .delete-modal p {
                    margin: 7px 0 18px;
                    color: var(--ink-soft);
                    font-size: 12px;
                    line-height: 1.55;
                }

                .modal-actions {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                }

                /* -----------------------------------------------------------
                   RESPONSIVE — one entry layout, no duplicate markup
                ----------------------------------------------------------- */

                @media (max-width: 720px) {

                    .masthead {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .masthead .btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .toolbar {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .search-field {
                        max-width: none;
                    }

                    .entries {
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }
                }

                @media (max-width: 460px) {

                    .entries {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 10px;
                    }

                    .entry-body {
                        padding: 10px 10px 4px;
                    }

                    .entry-actions {
                        padding: 6px 10px 10px;
                    }
                }

            `})]})}export{H as default};
