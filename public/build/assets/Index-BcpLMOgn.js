import{r as d,j as e,H as m,L as i,a as b}from"./app-CgjB0zLb.js";import{A as p}from"./AppLayout-BhRRfzUA.js";function N({courses:s}){const[a,r]=d.useState(""),[n,l]=d.useState(null),o=s.filter(t=>t.title.toLowerCase().includes(a.toLowerCase()));function h(){b.delete(route("talent.courses.destroy",n.id),{preserveScroll:!0,onSuccess:()=>l(null)})}return e.jsxs(p,{children:[e.jsx(m,{title:"Courses"}),e.jsxs("div",{"data-h-scope":"talent-courses",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-courses"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-courses"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-courses"] .h-header-card {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-courses"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-courses"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255,255,255,0.25);
                    }
                    [data-h-scope="talent-courses"] .h-btn-ghost:hover {
                        background: rgba(255,255,255,0.1);
                    }
                    [data-h-scope="talent-courses"] .h-stat {
                        background: rgba(255,255,255,0.06);
                        border: 1px solid rgba(255,255,255,0.12);
                    }
                    [data-h-scope="talent-courses"] .h-course-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6,15,17,0.06);
                        transition: transform .15s ease, box-shadow .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-course-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 18px rgba(6,15,17,0.07);
                    }
                    [data-h-scope="talent-courses"] .h-thumb {
                        height: 96px;
                        object-fit: cover;
                        background: rgba(72,213,151,0.08);
                    }
                    [data-h-scope="talent-courses"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-ink {
                        background: rgba(6,15,17,0.06);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-warning {
                        background: #fff3cd;
                        color: #7a5b00;
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-success {
                        background: rgba(72,213,151,0.15);
                        color: var(--h-accent-dark);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-meta-icon {
                        color: var(--h-accent-dark);
                        width: 13px;
                    }
                    [data-h-scope="talent-courses"] .h-search:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72,213,151,0.25);
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-menu {
                        min-width: 150px;
                        border: 1px solid rgba(6,15,17,0.08);
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item {
                        cursor: pointer;
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item:hover {
                        background: rgba(72,213,151,0.1);
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item.text-danger:hover {
                        background: #fdecea;
                    }
                    [data-h-scope="talent-courses"] .h-view-btn {
                        background: rgba(6,15,17,0.04);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-view-btn:hover {
                        background: rgba(72,213,151,0.18);
                        color: var(--h-accent-dark);
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[e.jsx("div",{className:"card h-header-card border-0 shadow-sm rounded-4 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"fw-bold mb-1",children:"My Courses"}),e.jsx("p",{className:"mb-0",style:{opacity:.7},children:"Manage the courses you've published on the platform"})]}),e.jsxs(i,{href:route("talent.courses.create"),className:"btn h-btn-accent rounded-pill px-4 py-2",children:[e.jsx("i",{className:"fas fa-plus me-2"}),"Create New Course"]})]}),e.jsxs("div",{className:"row g-3",children:[e.jsx(c,{icon:"fa-layer-group",label:"Total Courses",value:s.length}),e.jsx(c,{icon:"fa-circle-check",label:"Published",value:s.filter(t=>t.status==="published").length}),e.jsx(c,{icon:"fa-users",label:"Total Enrollments",value:s.reduce((t,u)=>t+(u.enrollments_count??0),0)})]})]})}),e.jsx("div",{className:"d-flex align-items-center mb-4",children:e.jsxs("div",{className:"position-relative",style:{maxWidth:340,width:"100%"},children:[e.jsx("i",{className:"fas fa-search position-absolute",style:{left:14,top:12,opacity:.4}}),e.jsx("input",{type:"text",className:"form-control h-search rounded-pill ps-5",placeholder:"Search courses...",value:a,onChange:t=>r(t.target.value)})]})}),o.length===0?e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body text-center py-5 text-secondary",children:[e.jsx("i",{className:"fas fa-book-open fs-1 mb-3 d-block opacity-25"}),e.jsx("p",{className:"mb-0",children:"No courses found."})]})}):e.jsx("div",{className:"row g-3",children:o.map(t=>e.jsx("div",{className:"col-md-6 col-lg-4 col-xl-3",children:e.jsx(x,{course:t,onDelete:()=>l(t)})},t.id))})]})]}),e.jsx(f,{course:n,onCancel:()=>l(null),onConfirm:h})]})}function c({icon:s,label:a,value:r}){return e.jsx("div",{className:"col-sm-4",children:e.jsxs("div",{className:"h-stat rounded-4 p-3 d-flex align-items-center gap-3",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center rounded-3",style:{width:40,height:40,background:"rgba(72,213,151,0.2)",flexShrink:0},children:e.jsx("i",{className:`fas ${s}`,style:{color:"#48d597"}})}),e.jsxs("div",{children:[e.jsx("div",{className:"small",style:{opacity:.65},children:a}),e.jsx("div",{className:"fw-bold fs-5",children:r})]})]})})}function x({course:s,onDelete:a}){var l;const[r,n]=d.useState(!1);return e.jsxs("div",{className:"h-course-card rounded-4 overflow-hidden position-relative",children:[e.jsxs("div",{className:"position-relative",children:[s.thumbnail?e.jsx("img",{src:`/${s.thumbnail}`,alt:s.title,className:"w-100 h-thumb"}):e.jsx("div",{className:"w-100 h-thumb d-flex align-items-center justify-content-center",children:e.jsx("i",{className:"fas fa-image",style:{color:"#48d597",opacity:.5}})}),e.jsx("span",{className:`badge position-absolute top-0 end-0 m-2 rounded-pill px-2 py-1 ${s.status==="published"?"h-badge-success":"h-badge-warning"}`,style:{fontSize:10},children:s.status==="published"?"Published":"Draft"})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start gap-1 mb-1",children:[e.jsx("span",{className:"badge h-badge-ink rounded-pill px-2 py-1",style:{fontSize:10},children:((l=s.category)==null?void 0:l.name)??"Uncategorized"}),e.jsxs("div",{className:"position-relative",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-light rounded-circle p-0",style:{width:24,height:24},onClick:()=>n(o=>!o),children:e.jsx("i",{className:"fas fa-ellipsis-vertical",style:{fontSize:11}})}),r&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100",style:{zIndex:10},onClick:()=>n(!1)}),e.jsxs("div",{className:"h-dropdown-menu bg-white rounded-3 shadow-sm position-absolute end-0 mt-1 py-1",style:{zIndex:20},children:[e.jsxs(i,{href:route("talent.courses.edit",s.id),className:"h-dropdown-item d-block px-3 py-2 text-decoration-none text-dark small",children:[e.jsx("i",{className:"fas fa-pen me-2",style:{width:14}}),"Edit"]}),e.jsxs("button",{type:"button",className:"h-dropdown-item d-block w-100 text-start border-0 bg-transparent px-3 py-2 text-danger small",onClick:()=>{n(!1),a()},children:[e.jsx("i",{className:"fas fa-trash me-2",style:{width:14}}),"Delete"]})]})]})]})]}),e.jsx("h6",{className:"fw-bold mb-1",style:{fontSize:13.5,lineHeight:1.3},children:g(s.title,42)}),e.jsxs("div",{className:"d-flex flex-wrap gap-2 small text-secondary mb-2",style:{fontSize:11},children:[e.jsxs("span",{children:[e.jsx("i",{className:"fas fa-graduation-cap h-meta-icon me-1"}),s.lessons_count??0]}),e.jsxs("span",{children:[e.jsx("i",{className:"fas fa-users h-meta-icon me-1"}),s.enrollments_count??0]}),s.feedback_avg_rating?e.jsxs("span",{children:[e.jsx("i",{className:"fas fa-star me-1",style:{color:"#f5b301"}}),Number(s.feedback_avg_rating).toFixed(1)]}):null]}),e.jsx("div",{className:"d-flex justify-content-between align-items-center mb-2",children:s.is_free?e.jsx("span",{className:"badge h-badge-success rounded-pill px-2 py-1",style:{fontSize:11},children:"Free"}):e.jsxs("span",{className:"fw-bold",style:{color:"#060f11",fontSize:13},children:["$",Number(s.price??0).toFixed(2)]})}),e.jsxs(i,{href:route("talent.courses.show",s.id),className:"btn h-view-btn rounded-pill w-100 py-1",style:{fontSize:12},children:[e.jsx("i",{className:"fas fa-eye me-1"}),"View Course"]})]})]})}function f({course:s,onCancel:a,onConfirm:r}){return s?e.jsxs("div",{"data-h-scope":"talent-courses",children:[e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",onClick:a,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",role:"document",onClick:n=>n.stopPropagation(),children:e.jsx("div",{className:"modal-content rounded-4 border-0 shadow",children:e.jsxs("div",{className:"modal-body p-4 text-center",children:[e.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3",style:{width:56,height:56,background:"#fdecea"},children:e.jsx("i",{className:"fas fa-trash text-danger fs-5"})}),e.jsx("h6",{className:"fw-bold mb-2",children:"Delete Course"}),e.jsxs("p",{className:"text-secondary mb-4",children:["Are you sure you want to delete ",e.jsx("strong",{children:s.title}),"? This action cannot be undone."]}),e.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[e.jsx("button",{type:"button",className:"btn btn-light rounded-pill px-4",onClick:a,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn btn-danger rounded-pill px-4",onClick:r,children:"Delete"})]})]})})})}),e.jsx("div",{className:"modal-backdrop fade show",onClick:a})]}):null}function g(s,a){return s?s.length>a?s.slice(0,a)+"…":s:""}export{N as default};
