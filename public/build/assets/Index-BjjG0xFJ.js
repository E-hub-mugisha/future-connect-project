import{r as u,j as e,H as B,L as c,a as f}from"./app-CJlpfYPO.js";import{A as R}from"./AppLayout-WTBEreOn.js";function X({courses:t,categories:r=[],stats:i={},filters:o={}}){const[n,a]=u.useState(o.search??""),[l,d]=u.useState(o.status??""),[p,v]=u.useState(o.level??""),[m,w]=u.useState(o.category_id??""),x=(t==null?void 0:t.data)??[],y=!!(n||l||p||m);function E(s){s.preventDefault(),f.get(route("admin.courses.index"),{search:n||void 0,status:l||void 0,level:p||void 0,category_id:m||void 0},{preserveState:!0,replace:!0,preserveScroll:!0})}function k(){a(""),d(""),v(""),w(""),f.get(route("admin.courses.index"),{},{preserveState:!1,replace:!0})}function N(s){window.confirm(`Delete "${s.title}"?

This action cannot be undone.`)&&f.delete(route("admin.courses.destroy",s.id),{preserveScroll:!0})}return e.jsxs(R,{children:[e.jsx(B,{title:"Course Library"}),e.jsx("style",{children:q}),e.jsxs("div",{className:"courses-page",children:[e.jsxs("section",{className:"courses-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx("span",{children:"Admin"}),e.jsx(V,{}),e.jsx("strong",{children:"Courses"})]}),e.jsxs("div",{className:"title-row",children:[e.jsx("div",{className:"title-icon",children:e.jsx(j,{size:25})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Course Library"}),e.jsx("p",{children:"Create, manage and monitor your learning content."})]})]})]}),e.jsxs(c,{href:route("admin.courses.create"),className:"primary-button",children:[e.jsx(A,{size:18}),"Create course"]})]}),e.jsxs("section",{className:"stats-grid",children:[e.jsx(g,{icon:e.jsx(j,{}),label:"Total courses",value:i.total??0,description:"All courses",type:"blue"}),e.jsx(g,{icon:e.jsx(U,{}),label:"Published",value:i.published??0,description:"Available to learners",type:"green"}),e.jsx(g,{icon:e.jsx(M,{}),label:"Drafts",value:i.draft??0,description:"Still being prepared",type:"orange"}),e.jsx(g,{icon:e.jsx(H,{}),label:"Enrollments",value:i.enrollments??0,description:"Total learners",type:"purple"})]}),e.jsxs("section",{className:"library-card",children:[e.jsxs("div",{className:"library-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"library-title",children:[e.jsx(O,{size:18}),e.jsx("h2",{children:"All courses"})]}),e.jsxs("p",{children:[x.length," course",x.length!==1?"s":""," ","displayed"]})]}),y&&e.jsxs("button",{type:"button",className:"clear-all-button",onClick:k,children:[e.jsx(C,{size:14}),"Clear filters"]})]}),e.jsxs("form",{onSubmit:E,className:"filters",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(T,{size:18}),e.jsx("input",{type:"search",value:n,onChange:s=>a(s.target.value),placeholder:"Search courses..."}),n&&e.jsx("button",{type:"button",className:"search-clear",onClick:()=>a(""),children:e.jsx(C,{size:13})})]}),e.jsx(b,{value:l,onChange:d,options:[{value:"",label:"All status"},{value:"published",label:"Published"},{value:"draft",label:"Draft"}]}),e.jsx(b,{value:p,onChange:v,options:[{value:"",label:"All levels"},{value:"Beginner",label:"Beginner"},{value:"Intermediate",label:"Intermediate"},{value:"Advanced",label:"Advanced"}]}),e.jsx(b,{value:m,onChange:w,options:[{value:"",label:"All categories"},...r.map(s=>({value:s.id,label:s.name}))]}),e.jsxs("button",{type:"submit",className:"filter-button",children:[e.jsx($,{size:16}),"Apply"]})]}),x.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"desktop-table",children:[e.jsxs("div",{className:"table-header",children:[e.jsx("div",{className:"course-column",children:"Course"}),e.jsx("div",{children:"Creator"}),e.jsx("div",{children:"Category"}),e.jsx("div",{children:"Level"}),e.jsx("div",{children:"Price"}),e.jsx("div",{children:"Students"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:"Actions"})]}),e.jsx("div",{className:"table-body",children:x.map((s,h)=>e.jsx(D,{course:s,index:h,onDelete:()=>N(s)},s.id))})]}),e.jsx("div",{className:"mobile-list",children:x.map((s,h)=>e.jsx(W,{course:s,index:h,onDelete:()=>N(s)},s.id))}),(t==null?void 0:t.links)&&t.links.length>3&&e.jsx(_,{links:t.links})]}):e.jsx(F,{filtered:y,onReset:k,onCreate:()=>f.visit(route("admin.courses.create"))})]})]})]})}function g({icon:t,label:r,value:i,description:o,type:n}){return e.jsxs("div",{className:`stat-card stat-${n}`,children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("div",{className:"stat-icon",children:t}),e.jsx("span",{className:"stat-arrow",children:e.jsx(G,{size:14})})]}),e.jsx("div",{className:"stat-value",children:Number(i??0).toLocaleString()}),e.jsx("div",{className:"stat-label",children:r}),e.jsx("div",{className:"stat-description",children:o})]})}function b({value:t,onChange:r,options:i}){return e.jsxs("div",{className:"filter-select",children:[e.jsx("select",{value:t,onChange:o=>r(o.target.value),children:i.map(o=>e.jsx("option",{value:o.value,children:o.label},String(o.value)))}),e.jsx(Y,{size:15})]})}function D({course:t,index:r,onDelete:i}){var a,l,d;const o=t.thumbnail?`/images/thumbnails/${t.thumbnail}`:"/images/placeholder-course.png",n=Number(t.enrollments_count??0);return e.jsxs("div",{className:"course-row",children:[e.jsxs("div",{className:"course-column course-main",children:[e.jsx("span",{className:"course-number",children:String(r+1).padStart(2,"0")}),e.jsx("img",{src:o,alt:t.title,className:"course-image",onError:p=>{p.currentTarget.src="/images/placeholder-course.png"}}),e.jsxs("div",{className:"course-info",children:[e.jsx(c,{href:route("admin.courses.show",t.slug),className:"course-title",children:t.title}),e.jsx("p",{children:I(t.description,65)})]})]}),e.jsxs("div",{className:"creator",children:[e.jsx("div",{className:"avatar",children:P((a=t.talent)==null?void 0:a.name)}),e.jsx("span",{children:((l=t.talent)==null?void 0:l.name)??"Unassigned"})]}),e.jsx("div",{children:e.jsxs("span",{className:"category-badge",children:[e.jsx("span",{className:"category-dot"}),((d=t.category)==null?void 0:d.name)??"Uncategorized"]})}),e.jsx("div",{children:e.jsx(L,{level:t.level})}),e.jsx("div",{className:"price",children:t.is_free?e.jsx("span",{className:"free-price",children:"Free"}):e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:Number(t.price??0).toLocaleString()}),e.jsx("small",{children:"RWF"})]})}),e.jsxs("div",{className:"students",children:[e.jsx("div",{className:"student-count",children:n.toLocaleString()}),e.jsx("span",{children:"learners"})]}),e.jsx("div",{children:e.jsx(S,{status:t.status})}),e.jsx(z,{course:t,onDelete:i})]})}function W({course:t,index:r,onDelete:i}){var a,l;const o=t.thumbnail?`/images/thumbnails/${t.thumbnail}`:"/images/placeholder-course.png",n=Number(t.enrollments_count??0);return e.jsxs("article",{className:"mobile-course-card",children:[e.jsxs("div",{className:"mobile-card-top",children:[e.jsxs("span",{className:"mobile-number",children:["#",String(r+1).padStart(2,"0")]}),e.jsx(S,{status:t.status})]}),e.jsxs("div",{className:"mobile-course-main",children:[e.jsx("img",{src:o,alt:t.title,className:"mobile-image",onError:d=>{d.currentTarget.src="/images/placeholder-course.png"}}),e.jsxs("div",{className:"mobile-course-info",children:[e.jsx(c,{href:route("admin.courses.show",t.slug),className:"mobile-title",children:t.title}),e.jsx("p",{children:I(t.description,100)})]})]}),e.jsxs("div",{className:"mobile-meta",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Creator"}),e.jsx("strong",{children:((a=t.talent)==null?void 0:a.name)??"Unassigned"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Category"}),e.jsx("strong",{children:((l=t.category)==null?void 0:l.name)??"Uncategorized"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Level"}),e.jsx(L,{level:t.level})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Students"}),e.jsx("strong",{children:n.toLocaleString()})]})]}),e.jsxs("div",{className:"mobile-card-footer",children:[t.is_free?e.jsx("span",{className:"free-price",children:"Free course"}):e.jsxs("span",{className:"mobile-price",children:[Number(t.price??0).toLocaleString()," ","RWF"]}),e.jsx(z,{course:t,onDelete:i})]})]})}function z({course:t,onDelete:r}){return e.jsxs("div",{className:"course-actions",children:[e.jsx(c,{href:route("admin.courses.show",t.slug),className:"action-button",title:"View course",children:e.jsx(Z,{size:16})}),e.jsx(c,{href:route("admin.courses.edit",t.id),className:"action-button",title:"Edit course",children:e.jsx(M,{size:16})}),e.jsx("button",{type:"button",className:"action-button delete-button",title:"Delete course",onClick:r,children:e.jsx(K,{size:16})})]})}function S({status:t}){const i=String(t??"").toLowerCase()==="published";return e.jsxs("span",{className:`status-badge ${i?"status-published":"status-draft"}`,children:[e.jsx("span",{className:"status-dot"}),i?"Published":"Draft"]})}function L({level:t}){const r=String(t??"").toLowerCase();let i="level-default";return r==="beginner"&&(i="level-beginner"),r==="intermediate"&&(i="level-intermediate"),r==="advanced"&&(i="level-advanced"),e.jsx("span",{className:`level-badge ${i}`,children:t??"—"})}function F({filtered:t,onReset:r,onCreate:i}){return e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:t?e.jsx(T,{size:30}):e.jsx(j,{size:30})}),e.jsx("span",{className:"empty-label",children:t?"No results":"Course library"}),e.jsx("h2",{children:t?"No courses found":"Your course library is empty"}),e.jsx("p",{children:t?"Try changing your search or filters to find another course.":"Create your first course and start building learning opportunities for your talent community."}),t?e.jsx("button",{type:"button",className:"secondary-button",onClick:r,children:"Clear filters"}):e.jsxs("button",{type:"button",className:"primary-button",onClick:i,children:[e.jsx(A,{size:17}),"Create first course"]})]})}function _({links:t}){return e.jsx("div",{className:"pagination",children:t.map((r,i)=>r.url?e.jsx(c,{href:r.url,preserveState:!0,preserveScroll:!0,className:`page-button ${r.active?"active":""}`,dangerouslySetInnerHTML:{__html:r.label}},i):e.jsx("span",{className:"page-button disabled",dangerouslySetInnerHTML:{__html:r.label}},i))})}function I(t,r){if(!t)return"No description available.";const i=String(t);return i.length>r?`${i.slice(0,r).trim()}…`:i}function P(t){if(!t)return"?";const r=String(t).trim().split(/\s+/).filter(Boolean);return r.length===1?r[0].slice(0,2).toUpperCase():(r[0][0]+r[r.length-1][0]).toUpperCase()}function A({size:t=16}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]})}function j({size:t=18}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"}),e.jsx("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),e.jsx("path",{d:"M8 7h7"}),e.jsx("path",{d:"M8 10h5"})]})}function U(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m8 12 2.5 2.5L16 9"})]})}function M({size:t=17}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"})]})}function H(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}function O({size:t=18}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})}function T({size:t=17}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m20 20-4-4"})]})}function $({size:t=15}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[e.jsx("path",{d:"M4 6h16"}),e.jsx("path",{d:"M7 12h10"}),e.jsx("path",{d:"M10 18h4"})]})}function Y({size:t=14}){return e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m6 9 6 6 6-6"})})}function V(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m9 18 6-6-6-6"})})}function C({size:t=14}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]})}function G({size:t=14}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 19V5"}),e.jsx("path",{d:"m6 11 6-6 6 6"})]})}function Z({size:t=15}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function K({size:t=15}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 7h16"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"m6 7 1 13h10l1-13"}),e.jsx("path",{d:"M9 7V4h6v3"})]})}const q=`
    :root {
        --course-primary: #2563eb;
        --course-primary-dark: #1d4ed8;
        --course-text: #172033;
        --course-muted: #64748b;
        --course-light: #f8fafc;
        --course-border: #e5eaf1;
        --course-white: #ffffff;
        --course-green: #16a34a;
        --course-orange: #ea8a0b;
        --course-purple: #7c3aed;
        --course-danger: #dc2626;
        --course-radius: 16px;
    }

    .courses-page {
        width: 100%;
        min-height: 100vh;
        padding: 28px;
        background:
            linear-gradient(
                180deg,
                #f7f9fc 0%,
                #f8fafc 100%
            );
        color: var(--course-text);
        box-sizing: border-box;
    }

    .courses-page *,
    .courses-page *::before,
    .courses-page *::after {
        box-sizing: border-box;
    }

    /* =========================================================
       HEADER
    ========================================================= */

    .courses-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        max-width: 1500px;
        margin: 0 auto 24px;
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 12px;
        color: #94a3b8;
        font-size: 12px;
        font-weight: 600;
    }

    .breadcrumb strong {
        color: #475569;
    }

    .breadcrumb svg {
        color: #cbd5e1;
    }

    .title-row {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .title-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 14px;
        background: #eff6ff;
        color: var(--course-primary);
        border: 1px solid #dbeafe;
    }

    .title-row h1 {
        margin: 0;
        color: #111827;
        font-size: 27px;
        line-height: 1.15;
        font-weight: 800;
        letter-spacing: -0.025em;
    }

    .title-row p {
        margin: 5px 0 0;
        color: var(--course-muted);
        font-size: 13px;
    }

    .primary-button {
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 0 17px;
        border: 0;
        border-radius: 10px;
        background: var(--course-primary);
        color: #fff;
        text-decoration: none;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        box-shadow:
            0 5px 15px rgba(37, 99, 235, .18);
        transition:
            transform .18s ease,
            background .18s ease,
            box-shadow .18s ease;
    }

    .primary-button:hover {
        background: var(--course-primary-dark);
        color: #fff;
        transform: translateY(-1px);
        box-shadow:
            0 8px 20px rgba(37, 99, 235, .22);
    }

    /* =========================================================
       STATISTICS
    ========================================================= */

    .stats-grid {
        width: 100%;
        max-width: 1500px;
        margin: 0 auto 24px;
        display: grid;
        grid-template-columns:
            repeat(4, minmax(0, 1fr));
        gap: 16px;
    }

    .stat-card {
        position: relative;
        min-height: 165px;
        overflow: hidden;
        padding: 20px;
        background: #fff;
        border: 1px solid var(--course-border);
        border-radius: var(--course-radius);
        box-shadow:
            0 2px 7px rgba(15, 23, 42, .025);
    }

    .stat-card::after {
        content: "";
        position: absolute;
        width: 90px;
        height: 90px;
        right: -35px;
        bottom: -35px;
        border-radius: 50%;
        opacity: .5;
    }

    .stat-blue::after {
        background: #dbeafe;
    }

    .stat-green::after {
        background: #dcfce7;
    }

    .stat-orange::after {
        background: #ffedd5;
    }

    .stat-purple::after {
        background: #ede9fe;
    }

    .stat-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .stat-icon {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }

    .stat-blue .stat-icon {
        background: #eff6ff;
        color: #2563eb;
    }

    .stat-green .stat-icon {
        background: #f0fdf4;
        color: #16a34a;
    }

    .stat-orange .stat-icon {
        background: #fff7ed;
        color: #ea8a0b;
    }

    .stat-purple .stat-icon {
        background: #f5f3ff;
        color: #7c3aed;
    }

    .stat-arrow {
        width: 27px;
        height: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #f8fafc;
        color: #94a3b8;
    }

    .stat-value {
        position: relative;
        z-index: 1;
        color: #111827;
        font-size: 28px;
        line-height: 1;
        font-weight: 800;
        letter-spacing: -.03em;
    }

    .stat-label {
        margin-top: 8px;
        color: #334155;
        font-size: 13px;
        font-weight: 700;
    }

    .stat-description {
        margin-top: 4px;
        color: #94a3b8;
        font-size: 11px;
    }

    /* =========================================================
       LIBRARY CARD
    ========================================================= */

    .library-card {
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        overflow: hidden;
        background: #fff;
        border: 1px solid var(--course-border);
        border-radius: 18px;
        box-shadow:
            0 4px 20px rgba(15, 23, 42, .035);
    }

    .library-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 22px 24px 18px;
    }

    .library-title {
        display: flex;
        align-items: center;
        gap: 9px;
    }

    .library-title svg {
        color: var(--course-primary);
    }

    .library-title h2 {
        margin: 0;
        color: #172033;
        font-size: 17px;
        font-weight: 800;
    }

    .library-header p {
        margin: 5px 0 0 27px;
        color: #94a3b8;
        font-size: 12px;
    }

    .clear-all-button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 0;
        background: transparent;
        color: #64748b;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
    }

    .clear-all-button:hover {
        color: var(--course-primary);
    }

    /* =========================================================
       FILTERS
    ========================================================= */

    .filters {
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 0 24px 20px;
        border-bottom: 1px solid var(--course-border);
    }

    .search-box {
        min-width: 260px;
        height: 40px;
        flex: 1;
        max-width: 400px;
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 0 12px;
        background: #f8fafc;
        border: 1px solid #e6ebf2;
        border-radius: 9px;
        color: #94a3b8;
        transition:
            border-color .18s ease,
            background .18s ease;
    }

    .search-box:focus-within {
        background: #fff;
        border-color: #93c5fd;
        box-shadow:
            0 0 0 3px rgba(59, 130, 246, .08);
    }

    .search-box input {
        width: 100%;
        min-width: 0;
        height: 100%;
        padding: 0;
        outline: none;
        border: 0;
        background: transparent;
        color: #1e293b;
        font-size: 12px;
    }

    .search-box input::placeholder {
        color: #a3afbf;
    }

    .search-clear {
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border: 0;
        border-radius: 50%;
        background: #e2e8f0;
        color: #64748b;
        cursor: pointer;
    }

    .filter-select {
        position: relative;
        min-width: 135px;
        height: 40px;
    }

    .filter-select select {
        width: 100%;
        height: 100%;
        appearance: none;
        outline: none;
        padding: 0 34px 0 12px;
        border: 1px solid #e6ebf2;
        border-radius: 9px;
        background: #fff;
        color: #475569;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
    }

    .filter-select svg {
        position: absolute;
        top: 50%;
        right: 11px;
        pointer-events: none;
        transform: translateY(-50%);
        color: #94a3b8;
    }

    .filter-button {
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        padding: 0 15px;
        border: 0;
        border-radius: 9px;
        background: #172033;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: background .18s ease;
    }

    .filter-button:hover {
        background: #0f172a;
    }

    /* =========================================================
       DESKTOP TABLE
    ========================================================= */

    .desktop-table {
        width: 100%;
        overflow-x: auto;
    }

    .table-header,
    .course-row {
        display: grid;
        grid-template-columns:
            minmax(300px, 2.5fr)
            minmax(130px, 1fr)
            minmax(125px, 1fr)
            105px
            105px
            90px
            110px
            125px;
        min-width: 1100px;
    }

    .table-header {
        padding: 0 24px;
        min-height: 46px;
        align-items: center;
        background: #f8fafc;
        border-top: 1px solid #eef2f6;
        border-bottom: 1px solid var(--course-border);
        color: #94a3b8;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: .07em;
        text-transform: uppercase;
    }

    .course-row {
        min-height: 88px;
        padding: 12px 24px;
        align-items: center;
        border-bottom: 1px solid #eef2f6;
        transition:
            background .18s ease;
    }

    .course-row:last-child {
        border-bottom: 0;
    }

    .course-row:hover {
        background: #fbfdff;
    }

    .course-main {
        min-width: 0;
    }

    .course-column {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
    }

    .course-number {
        width: 23px;
        flex-shrink: 0;
        color: #cbd5e1;
        font-size: 10px;
        font-weight: 800;
    }

    .course-image {
        width: 64px;
        height: 48px;
        flex-shrink: 0;
        object-fit: cover;
        border-radius: 9px;
        background: #eef2f7;
        border: 1px solid #e8edf3;
    }

    .course-info {
        min-width: 0;
    }

    .course-title {
        display: block;
        max-width: 100%;
        overflow: hidden;
        color: #1e293b;
        font-size: 13px;
        line-height: 1.35;
        font-weight: 750;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .course-title:hover {
        color: var(--course-primary);
    }

    .course-info p {
        max-width: 300px;
        margin: 4px 0 0;
        overflow: hidden;
        color: #94a3b8;
        font-size: 10px;
        line-height: 1.4;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    /* =========================================================
       CREATOR
    ========================================================= */

    .creator {
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .creator > span:last-child {
        min-width: 0;
        overflow: hidden;
        color: #475569;
        font-size: 11px;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .avatar {
        width: 29px;
        height: 29px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #eff6ff;
        color: #2563eb;
        font-size: 9px;
        font-weight: 800;
        border: 1px solid #dbeafe;
    }

    /* =========================================================
       CATEGORY
    ========================================================= */

    .category-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        max-width: 115px;
        overflow: hidden;
        padding: 5px 8px;
        border-radius: 6px;
        background: #f8fafc;
        color: #64748b;
        font-size: 10px;
        font-weight: 650;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .category-dot {
        width: 5px;
        height: 5px;
        flex-shrink: 0;
        border-radius: 50%;
        background: #60a5fa;
    }

    /* =========================================================
       LEVEL
    ========================================================= */

    .level-badge {
        display: inline-flex;
        align-items: center;
        padding: 5px 8px;
        border-radius: 6px;
        font-size: 9px;
        font-weight: 800;
        white-space: nowrap;
    }

    .level-beginner {
        background: #ecfdf5;
        color: #15803d;
    }

    .level-intermediate {
        background: #fff7ed;
        color: #c2410c;
    }

    .level-advanced {
        background: #fef2f2;
        color: #b91c1c;
    }

    .level-default {
        background: #f1f5f9;
        color: #64748b;
    }

    /* =========================================================
       PRICE
    ========================================================= */

    .price {
        display: flex;
        align-items: baseline;
        gap: 3px;
    }

    .price strong {
        color: #1e293b;
        font-size: 11px;
    }

    .price small {
        color: #94a3b8;
        font-size: 8px;
        font-weight: 700;
    }

    .free-price {
        color: #15803d;
        font-size: 10px;
        font-weight: 800;
    }

    /* =========================================================
       STUDENTS
    ========================================================= */

    .students {
        display: flex;
        flex-direction: column;
    }

    .student-count {
        color: #334155;
        font-size: 12px;
        font-weight: 800;
    }

    .students span {
        margin-top: 2px;
        color: #94a3b8;
        font-size: 8px;
    }

    /* =========================================================
       STATUS
    ========================================================= */

    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 8px;
        border-radius: 999px;
        font-size: 9px;
        font-weight: 800;
        white-space: nowrap;
    }

    .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    .status-published {
        background: #ecfdf3;
        color: #15803d;
    }

    .status-published .status-dot {
        background: #22c55e;
    }

    .status-draft {
        background: #fff7ed;
        color: #c2410c;
    }

    .status-draft .status-dot {
        background: #f59e0b;
    }

    /* =========================================================
       ACTIONS
    ========================================================= */

    .course-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 5px;
    }

    .action-button {
        width: 32px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e5eaf1;
        border-radius: 8px;
        background: #fff;
        color: #64748b;
        text-decoration: none;
        cursor: pointer;
        transition:
            background .18s ease,
            border-color .18s ease,
            color .18s ease,
            transform .18s ease;
    }

    .action-button:hover {
        background: #f8fafc;
        border-color: #cbd5e1;
        color: var(--course-primary);
        transform: translateY(-1px);
    }

    .delete-button:hover {
        background: #fef2f2;
        border-color: #fecaca;
        color: var(--course-danger);
    }

    /* =========================================================
       MOBILE LIST
    ========================================================= */

    .mobile-list {
        display: none;
    }

    /* =========================================================
       EMPTY STATE
    ========================================================= */

    .empty-state {
        padding: 70px 25px;
        text-align: center;
    }

    .empty-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 18px;
        border-radius: 18px;
        background: #eff6ff;
        color: var(--course-primary);
    }

    .empty-label {
        color: #2563eb;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: .08em;
        text-transform: uppercase;
    }

    .empty-state h2 {
        margin: 8px 0 7px;
        color: #172033;
        font-size: 20px;
        font-weight: 800;
    }

    .empty-state p {
        max-width: 450px;
        margin: 0 auto 20px;
        color: #94a3b8;
        font-size: 12px;
        line-height: 1.7;
    }

    .secondary-button {
        min-height: 40px;
        padding: 0 15px;
        border: 1px solid #dbe2ea;
        border-radius: 9px;
        background: #fff;
        color: #475569;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
    }

    .secondary-button:hover {
        border-color: #bfdbfe;
        color: var(--course-primary);
    }

    /* =========================================================
       PAGINATION
    ========================================================= */

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 18px 24px;
        border-top: 1px solid #eef2f6;
    }

    .page-button {
        min-width: 34px;
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 8px;
        border: 1px solid #e5eaf1;
        border-radius: 8px;
        background: #fff;
        color: #64748b;
        font-size: 11px;
        font-weight: 700;
        text-decoration: none;
    }

    .page-button:hover {
        border-color: #bfdbfe;
        color: var(--course-primary);
    }

    .page-button.active {
        border-color: var(--course-primary);
        background: var(--course-primary);
        color: #fff;
    }

    .page-button.disabled {
        opacity: .45;
        cursor: default;
    }

    /* =========================================================
       MOBILE CARD
    ========================================================= */

    .mobile-course-card {
        margin: 12px;
        padding: 15px;
        border: 1px solid #e5eaf1;
        border-radius: 14px;
        background: #fff;
        box-shadow:
            0 2px 8px rgba(15, 23, 42, .03);
    }

    .mobile-card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 13px;
    }

    .mobile-number {
        color: #94a3b8;
        font-size: 10px;
        font-weight: 800;
    }

    .mobile-course-main {
        display: flex;
        gap: 12px;
    }

    .mobile-image {
        width: 76px;
        height: 58px;
        flex-shrink: 0;
        object-fit: cover;
        border-radius: 9px;
        background: #f1f5f9;
    }

    .mobile-course-info {
        min-width: 0;
    }

    .mobile-title {
        display: block;
        color: #1e293b;
        font-size: 13px;
        line-height: 1.35;
        font-weight: 800;
        text-decoration: none;
    }

    .mobile-title:hover {
        color: var(--course-primary);
    }

    .mobile-course-info p {
        margin: 5px 0 0;
        color: #94a3b8;
        font-size: 10px;
        line-height: 1.5;
    }

    .mobile-meta {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 16px;
        padding-top: 14px;
        border-top: 1px solid #eef2f6;
    }

    .mobile-meta > div {
        min-width: 0;
    }

    .mobile-meta span:first-child {
        display: block;
        margin-bottom: 4px;
        color: #94a3b8;
        font-size: 9px;
        font-weight: 600;
    }

    .mobile-meta strong {
        display: block;
        overflow: hidden;
        color: #475569;
        font-size: 10px;
        font-weight: 750;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .mobile-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-top: 15px;
        padding-top: 13px;
        border-top: 1px solid #eef2f6;
    }

    .mobile-price {
        color: #334155;
        font-size: 11px;
        font-weight: 800;
    }

    /* =========================================================
       RESPONSIVE
    ========================================================= */

    @media (max-width: 1200px) {
        .stats-grid {
            grid-template-columns:
                repeat(2, minmax(0, 1fr));
        }

        .filters {
            flex-wrap: wrap;
        }

        .search-box {
            max-width: none;
            flex-basis: 100%;
        }
    }

    @media (max-width: 850px) {
        .courses-page {
            padding: 18px;
        }

        .courses-header {
            align-items: flex-start;
            flex-direction: column;
        }

        .courses-header .primary-button {
            width: 100%;
        }

        .stats-grid {
            gap: 10px;
        }

        .stat-card {
            min-height: 145px;
            padding: 16px;
        }

        .library-header {
            padding: 18px;
        }

        .filters {
            padding: 0 18px 18px;
        }
    }

    @media (max-width: 680px) {
        .courses-page {
            padding: 12px;
        }

        .title-row h1 {
            font-size: 23px;
        }

        .title-row p {
            font-size: 11px;
        }

        .title-icon {
            width: 44px;
            height: 44px;
        }

        .stats-grid {
            grid-template-columns: 1fr 1fr;
        }

        .stat-value {
            font-size: 23px;
        }

        .stat-label {
            font-size: 11px;
        }

        .stat-description {
            font-size: 9px;
        }

        .desktop-table {
            display: none;
        }

        .mobile-list {
            display: block;
            background: #f8fafc;
            padding: 1px 0;
        }

        .library-header {
            align-items: flex-start;
        }

        .clear-all-button {
            padding-top: 4px;
        }

        .filters {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .search-box {
            grid-column: 1 / -1;
            min-width: 0;
        }

        .filter-select {
            width: 100%;
            min-width: 0;
        }

        .filter-button {
            width: 100%;
        }

        .pagination {
            padding: 15px 10px;
            overflow-x: auto;
            justify-content: flex-start;
        }
    }

    @media (max-width: 430px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }

        .title-row {
            align-items: flex-start;
        }

        .filters {
            grid-template-columns: 1fr;
        }

        .search-box {
            grid-column: auto;
        }

        .mobile-meta {
            gap: 8px;
        }

        .mobile-course-card {
            margin: 10px;
            padding: 13px;
        }
    }
`;export{X as default};
