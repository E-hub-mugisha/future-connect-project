import{r as d,j as e,H as b,L as h,a as f}from"./app-DQcVR1sC.js";import{A as g}from"./AppLayout-D93w9Ma6.js";function P({courses:s}){const[t,a]=d.useState(""),[o,c]=d.useState(null),l=s.filter(n=>n.title.toLowerCase().includes(t.toLowerCase()));function p(){f.delete(route("talent.courses.destroy",o.id),{preserveScroll:!0,onSuccess:()=>c(null)})}return e.jsxs(g,{children:[e.jsx(b,{title:"Courses"}),e.jsxs("div",{"data-h-scope":"talent-courses",children:[e.jsx("style",{children:`
                    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

                    [data-h-scope="talent-courses"] {
                        --h-accent: #48d597;
                        --h-accent-ink: #0f3d2b;
                        --h-ink: #000000;
                        --h-white: #ffffff;
                        --h-bg: #f6f8f7;
                        --h-line: rgba(0, 0, 0, 0.1);
                        --h-line-soft: rgba(0, 0, 0, 0.06);
                        --h-muted: rgba(0, 0, 0, 0.55);
                        background-color: var(--h-bg);
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-courses"] h1,
                    [data-h-scope="talent-courses"] h2,
                    [data-h-scope="talent-courses"] h3,
                    [data-h-scope="talent-courses"] h4,
                    [data-h-scope="talent-courses"] h5,
                    [data-h-scope="talent-courses"] h6 {
                        font-family: 'Space Grotesk', 'Inter', sans-serif;
                        letter-spacing: -0.01em;
                    }

                    /* ---- header: light panel, accent stripe, no dark band ---- */
                    [data-h-scope="talent-courses"] .h-header-card {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                        border-radius: 16px;
                        position: relative;
                        overflow: hidden;
                    }
                    [data-h-scope="talent-courses"] .h-header-card::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        width: 4px;
                        background: var(--h-accent);
                    }

                    [data-h-scope="talent-courses"] .h-card {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                        border-radius: 14px;
                    }

                    [data-h-scope="talent-courses"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-accent-ink);
                        border: 1px solid var(--h-accent);
                        font-weight: 600;
                        transition: background .15s ease, border-color .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-btn-accent:hover {
                        background: #34c084;
                        border-color: #34c084;
                        color: var(--h-accent-ink);
                    }

                    /* ---- stat pills: light tinted tiles, not dark glass ---- */
                    [data-h-scope="talent-courses"] .h-stat {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                    }
                    [data-h-scope="talent-courses"] .h-stat-icon {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                    }

                    [data-h-scope="talent-courses"] .h-course-card {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                        border-radius: 14px;
                        transition: border-color .15s ease, transform .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-course-card:hover {
                        border-color: var(--h-line);
                        transform: translateY(-2px);
                    }
                    [data-h-scope="talent-courses"] .h-thumb {
                        height: 96px;
                        object-fit: cover;
                        background: var(--h-bg);
                    }

                    [data-h-scope="talent-courses"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-accent-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-ink {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                        color: var(--h-ink);
                        font-weight: 500;
                    }
                    [data-h-scope="talent-courses"] .h-badge-warning {
                        background: #fff8e6;
                        border: 1px solid #f2d488;
                        color: #7a5b00;
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-success {
                        background: rgba(72,213,151,0.15);
                        border: 1px solid rgba(72,213,151,0.4);
                        color: var(--h-accent-ink);
                        font-weight: 600;
                    }

                    [data-h-scope="talent-courses"] .h-meta-icon {
                        color: var(--h-ink);
                        opacity: 0.55;
                    }

                    [data-h-scope="talent-courses"] .h-search {
                        border: 1px solid var(--h-line);
                        background: var(--h-white);
                    }
                    [data-h-scope="talent-courses"] .h-search:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 3px rgba(72,213,151,0.2);
                    }

                    [data-h-scope="talent-courses"] .h-dropdown-menu {
                        min-width: 150px;
                        border: 1px solid var(--h-line-soft);
                        border-radius: 10px;
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item {
                        cursor: pointer;
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item:hover {
                        background: var(--h-bg);
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item.text-danger:hover {
                        background: #fdecea;
                    }

                    [data-h-scope="talent-courses"] .h-icon-btn {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-courses"] .h-icon-btn:hover {
                        background: var(--h-white);
                        border-color: var(--h-line);
                    }

                    [data-h-scope="talent-courses"] .h-view-btn {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                        color: var(--h-ink);
                        font-weight: 600;
                        transition: background .15s ease, border-color .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-view-btn:hover {
                        background: rgba(72,213,151,0.14);
                        border-color: rgba(72,213,151,0.4);
                        color: var(--h-accent-ink);
                    }

                    [data-h-scope="talent-courses"] .h-modal-content {
                        border-radius: 16px;
                        border: none;
                        overflow: hidden;
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",style:{maxWidth:1240,margin:"0 auto"},children:[e.jsx("div",{className:"h-header-card mb-4",children:e.jsxs("div",{className:"p-4 ps-4",children:[e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"fw-bold mb-1",children:"My Courses"}),e.jsx("p",{className:"mb-0",style:{color:"var(--h-muted, rgba(0,0,0,0.55))"},children:"Manage the courses you've published on the platform"})]}),e.jsxs(h,{href:route("talent.courses.create"),className:"btn h-btn-accent rounded-pill px-4 py-2 d-inline-flex align-items-center",children:[e.jsx(y,{className:"me-2"}),"Create New Course"]})]}),e.jsxs("div",{className:"row g-3",children:[e.jsx(i,{icon:e.jsx(N,{}),label:"Total Courses",value:s.length}),e.jsx(i,{icon:e.jsx(k,{}),label:"Published",value:s.filter(n=>n.status==="published").length}),e.jsx(i,{icon:e.jsx(u,{}),label:"Total Enrollments",value:s.reduce((n,m)=>n+(m.enrollments_count??0),0)})]})]})}),e.jsx("div",{className:"d-flex align-items-center mb-4",children:e.jsxs("div",{className:"position-relative",style:{maxWidth:340,width:"100%"},children:[e.jsx("span",{className:"position-absolute d-flex align-items-center",style:{left:14,top:0,bottom:0,opacity:.45},children:e.jsx(w,{})}),e.jsx("input",{type:"text",className:"form-control h-search rounded-pill ps-5",placeholder:"Search courses...",value:t,onChange:n=>a(n.target.value)})]})}),l.length===0?e.jsxs("div",{className:"h-card text-center py-5",children:[e.jsx(C,{className:"mb-3",size:40,style:{opacity:.2}}),e.jsx("p",{className:"mb-0",style:{color:"var(--h-muted, rgba(0,0,0,0.55))"},children:"No courses found."})]}):e.jsx("div",{className:"row g-3",children:l.map(n=>e.jsx("div",{className:"col-md-6 col-lg-4 col-xl-3",children:e.jsx(j,{course:n,onDelete:()=>c(n)})},n.id))})]})]}),e.jsx(v,{course:o,onCancel:()=>c(null),onConfirm:p})]})}function i({icon:s,label:t,value:a}){return e.jsx("div",{className:"col-sm-4",children:e.jsxs("div",{className:"h-stat rounded-4 p-3 d-flex align-items-center gap-3",children:[e.jsx("div",{className:"h-stat-icon d-flex align-items-center justify-content-center rounded-3",style:{width:40,height:40,flexShrink:0,color:"#48d597"},children:s}),e.jsxs("div",{children:[e.jsx("div",{className:"small",style:{color:"rgba(0,0,0,0.55)"},children:t}),e.jsx("div",{className:"fw-bold fs-5",children:a})]})]})})}function j({course:s,onDelete:t}){var c;const[a,o]=d.useState(!1);return e.jsxs("div",{className:"h-course-card overflow-hidden position-relative",children:[e.jsxs("div",{className:"position-relative",children:[s.thumbnail?e.jsx("img",{src:`/${s.thumbnail}`,alt:s.title,className:"w-100 h-thumb"}):e.jsx("div",{className:"w-100 h-thumb d-flex align-items-center justify-content-center",children:e.jsx(I,{style:{opacity:.3}})}),e.jsx("span",{className:`badge position-absolute top-0 end-0 m-2 rounded-pill px-2 py-1 ${s.status==="published"?"h-badge-success":"h-badge-warning"}`,style:{fontSize:10},children:s.status==="published"?"Published":"Draft"})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start gap-1 mb-1",children:[e.jsx("span",{className:"badge h-badge-ink rounded-pill px-2 py-1",style:{fontSize:10},children:((c=s.category)==null?void 0:c.name)??"Uncategorized"}),e.jsxs("div",{className:"position-relative",children:[e.jsx("button",{type:"button",className:"h-icon-btn btn btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center",style:{width:24,height:24},onClick:()=>o(l=>!l),children:e.jsx(S,{size:13})}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100",style:{zIndex:10},onClick:()=>o(!1)}),e.jsxs("div",{className:"h-dropdown-menu bg-white position-absolute end-0 mt-1 py-1",style:{zIndex:20},children:[e.jsxs(h,{href:route("talent.courses.edit",s.id),className:"h-dropdown-item d-flex align-items-center px-3 py-2 text-decoration-none text-dark small",children:[e.jsx(z,{className:"me-2",size:13}),"Edit"]}),e.jsxs("button",{type:"button",className:"h-dropdown-item d-flex align-items-center w-100 text-start border-0 bg-transparent px-3 py-2 text-danger small",onClick:()=>{o(!1),t()},children:[e.jsx(x,{className:"me-2",size:13}),"Delete"]})]})]})]})]}),e.jsx("h6",{className:"fw-bold mb-1",style:{fontSize:13.5,lineHeight:1.3},children:D(s.title,42)}),e.jsxs("div",{className:"d-flex flex-wrap align-items-center gap-3 small mb-2",style:{fontSize:11,color:"rgba(0,0,0,0.55)"},children:[e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(L,{size:12,className:"h-meta-icon"}),s.lessons_count??0]}),e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(u,{size:12,className:"h-meta-icon"}),s.enrollments_count??0]}),s.feedback_avg_rating?e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(_,{size:12,style:{color:"#f5b301"}}),Number(s.feedback_avg_rating).toFixed(1)]}):null]}),e.jsx("div",{className:"d-flex justify-content-between align-items-center mb-2",children:s.is_free?e.jsx("span",{className:"badge h-badge-success rounded-pill px-2 py-1",style:{fontSize:11},children:"Free"}):e.jsxs("span",{className:"fw-bold",style:{color:"#000000",fontSize:13},children:["$",Number(s.price??0).toFixed(2)]})}),e.jsxs(h,{href:route("talent.courses.show",s.id),className:"h-view-btn btn rounded-pill w-100 py-1 d-flex align-items-center justify-content-center gap-1",style:{fontSize:12},children:[e.jsx(M,{size:13}),"View Course"]})]})]})}function v({course:s,onCancel:t,onConfirm:a}){return s?e.jsxs("div",{"data-h-scope":"talent-courses",children:[e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",onClick:t,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",role:"document",onClick:o=>o.stopPropagation(),children:e.jsx("div",{className:"modal-content h-modal-content",children:e.jsxs("div",{className:"modal-body p-4 text-center",children:[e.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3",style:{width:56,height:56,background:"#fdecea",border:"1px solid #f6c7c1"},children:e.jsx(x,{size:20,style:{color:"#d64545"}})}),e.jsx("h6",{className:"fw-bold mb-2",children:"Delete course"}),e.jsxs("p",{className:"mb-4",style:{color:"rgba(0,0,0,0.6)"},children:["Are you sure you want to delete ",e.jsx("strong",{children:s.title}),"? This action cannot be undone."]}),e.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[e.jsx("button",{type:"button",className:"btn btn-light rounded-pill px-4",onClick:t,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn btn-danger rounded-pill px-4",onClick:a,children:"Delete"})]})]})})})}),e.jsx("div",{className:"modal-backdrop fade show",onClick:t})]}):null}function r({children:s,size:t=15,className:a="",style:o={},viewBox:c="0 0 24 24"}){return e.jsx("svg",{width:t,height:t,viewBox:c,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:a,style:o,children:s})}function y(s){return e.jsx(r,{size:14,...s,children:e.jsx("path",{d:"M12 5v14M5 12h14"})})}function w(s){return e.jsxs(r,{size:14,...s,children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]})}function N(s){return e.jsxs(r,{size:18,...s,children:[e.jsx("path",{d:"m12 2 9 5-9 5-9-5 9-5Z"}),e.jsx("path",{d:"m3 12 9 5 9-5"}),e.jsx("path",{d:"m3 17 9 5 9-5"})]})}function k(s){return e.jsxs(r,{size:18,...s,children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m8.5 12.5 2.3 2.3L15.5 10"})]})}function u(s){return e.jsxs(r,{...s,children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"10",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}function C(s){return e.jsxs(r,{...s,children:[e.jsx("path",{d:"M2 6a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2Z"}),e.jsx("path",{d:"M22 6a2 2 0 0 0-2-2h-5a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22Z"})]})}function I(s){return e.jsxs(r,{size:20,...s,children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("circle",{cx:"9",cy:"9",r:"1.5"}),e.jsx("path",{d:"m21 15-5-5L5 21"})]})}function S({size:s=15,...t}){return e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"currentColor",...t,children:[e.jsx("circle",{cx:"12",cy:"5",r:"1.6"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.6"}),e.jsx("circle",{cx:"12",cy:"19",r:"1.6"})]})}function z(s){return e.jsxs(r,{...s,children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"})]})}function x(s){return e.jsxs(r,{...s,children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),e.jsx("path",{d:"M10 11v6M14 11v6"})]})}function M(s){return e.jsxs(r,{...s,children:[e.jsx("path",{d:"M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function L(s){return e.jsxs(r,{...s,children:[e.jsx("path",{d:"m2 9 10-5 10 5-10 5-10-5Z"}),e.jsx("path",{d:"M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"})]})}function _({size:s=14,style:t={},...a}){return e.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"currentColor",style:t,...a,children:e.jsx("path",{d:"m12 2 3.1 6.6 7.2.8-5.4 5 1.5 7.1L12 18l-6.4 3.5 1.5-7.1-5.4-5 7.2-.8L12 2Z"})})}function D(s,t){return s?s.length>t?s.slice(0,t)+"…":s:""}export{P as default};
