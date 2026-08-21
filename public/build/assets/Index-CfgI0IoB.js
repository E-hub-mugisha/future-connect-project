import{r as c,j as e,H as y,L as d,a as i}from"./app-C-Atdk99.js";import{A as w}from"./AppLayout-3QMuWNNg.js";function C({courses:s,categories:v=[],stats:t,filters:l={}}){const[n,o]=c.useState(l.search??""),[m,b]=c.useState(l.status??""),[h,x]=c.useState(l.level??""),[f,u]=c.useState(l.category_id??"");function g(a){a.preventDefault(),i.get(route("admin.courses.index"),{search:n,status:m,level:h,category_id:f},{preserveState:!0,replace:!0})}function j(){o(""),b(""),x(""),u(""),i.get(route("admin.courses.index"))}function N(a){confirm("Delete this course? This action cannot be undone.")&&i.delete(route("admin.courses.destroy",a.id))}return e.jsxs(w,{children:[e.jsx(y,{title:"Courses"}),e.jsx("style",{children:`
                :root{
                    --c-bg:#f7f8fa;
                    --c-card:#ffffff;
                    --c-border:#e9ecf1;
                    --c-text:#1f2430;
                    --c-muted:#7b828f;
                    --c-primary:#4f46e5;
                    --c-primary-soft:#eef0ff;
                    --c-success:#16a34a;
                    --c-success-soft:#e9f9ee;
                    --c-warning:#d97706;
                    --c-warning-soft:#fff4e5;
                    --c-danger:#dc2626;
                    --c-danger-soft:#fdecec;
                    --c-radius:14px;
                }
                .page-wrap{background:var(--c-bg);}
                .stat-card{
                    background:var(--c-card);
                    border:1px solid var(--c-border);
                    border-radius:var(--c-radius);
                    padding:1.25rem 1.5rem;
                    height:100%;
                    transition:transform .15s ease, box-shadow .15s ease;
                }
                .stat-card:hover{ transform:translateY(-2px); box-shadow:0 8px 24px rgba(31,36,48,.06); }
                .stat-icon{
                    width:44px;height:44px;border-radius:12px;
                    display:flex;align-items:center;justify-content:center;
                    font-size:1.1rem;
                }
                .stat-value{ font-size:1.6rem; font-weight:700; color:var(--c-text); line-height:1; }
                .stat-label{ font-size:.8rem; color:var(--c-muted); font-weight:500; text-transform:uppercase; letter-spacing:.03em; }

                .filter-card{
                    background:var(--c-card);
                    border:1px solid var(--c-border);
                    border-radius:var(--c-radius);
                    padding:1.25rem;
                }
                .table-card{
                    background:var(--c-card);
                    border:1px solid var(--c-border);
                    border-radius:var(--c-radius);
                    overflow:hidden;
                }
                .table-modern thead th{
                    background:#fafbfc;
                    color:var(--c-muted);
                    font-size:.72rem;
                    text-transform:uppercase;
                    letter-spacing:.04em;
                    font-weight:700;
                    border-bottom:1px solid var(--c-border);
                    padding:.9rem 1rem;
                    white-space:nowrap;
                }
                .table-modern td{
                    padding:.9rem 1rem;
                    vertical-align:middle;
                    border-bottom:1px solid var(--c-border);
                    color:var(--c-text);
                }
                .table-modern tbody tr:last-child td{ border-bottom:none; }
                .table-modern tbody tr{ transition:background .12s ease; }
                .table-modern tbody tr:hover{ background:#fafbfd; }

                .course-thumb{
                    width:56px;height:56px;border-radius:10px;object-fit:cover;
                    border:1px solid var(--c-border);
                    background:#f1f2f5;
                }
                .course-title{ font-weight:600; color:var(--c-text); }
                .course-sub{ font-size:.78rem; color:var(--c-muted); }

                .badge-soft{
                    font-weight:600; font-size:.72rem; padding:.4em .75em; border-radius:999px;
                }
                .badge-published{ background:var(--c-success-soft); color:var(--c-success); }
                .badge-draft{ background:var(--c-warning-soft); color:var(--c-warning); }
                .badge-free{ background:var(--c-primary-soft); color:var(--c-primary); }
                .badge-paid{ background:#f1f2f5; color:var(--c-text); }

                .btn-icon{
                    width:34px;height:34px;border-radius:9px;
                    display:inline-flex;align-items:center;justify-content:center;
                    border:1px solid var(--c-border);
                    background:#fff;color:var(--c-muted);
                    transition:.15s ease;
                }
                .btn-icon:hover{ background:var(--c-primary-soft); color:var(--c-primary); border-color:var(--c-primary-soft); }
                .btn-icon.danger:hover{ background:var(--c-danger-soft); color:var(--c-danger); border-color:var(--c-danger-soft); }

                .btn-primary-soft{
                    background:var(--c-primary);
                    border:none;
                    color:#fff;
                    font-weight:600;
                    border-radius:10px;
                    padding:.55rem 1.1rem;
                }
                .btn-primary-soft:hover{ background:#4338ca; color:#fff; }

                .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
                .page-header p{ color:var(--c-muted); font-size:.9rem; }

                .form-select, .form-control{
                    border-radius:10px;
                    border:1px solid var(--c-border);
                    font-size:.875rem;
                }
                .form-select:focus, .form-control:focus{
                    border-color:var(--c-primary);
                    box-shadow:0 0 0 3px var(--c-primary-soft);
                }
            `}),e.jsx("div",{className:"page-wrap py-4",children:e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center page-header mb-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-1",children:"Courses"}),e.jsx("p",{className:"mb-0",children:"Manage, publish and track all platform courses"})]}),e.jsxs(d,{href:route("admin.courses.create"),className:"btn btn-primary-soft mt-2 mt-md-0",children:[e.jsx("i",{className:"bi bi-plus-lg me-1"})," New Course"]})]}),e.jsxs("div",{className:"row g-3 mb-4",children:[e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-card d-flex align-items-center gap-3",children:[e.jsx("div",{className:"stat-icon",style:{background:"var(--c-primary-soft)",color:"var(--c-primary)"},children:e.jsx("i",{className:"bi bi-collection-play"})}),e.jsxs("div",{children:[e.jsx("div",{className:"stat-value",children:t.total}),e.jsx("div",{className:"stat-label",children:"Total Courses"})]})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-card d-flex align-items-center gap-3",children:[e.jsx("div",{className:"stat-icon",style:{background:"var(--c-success-soft)",color:"var(--c-success)"},children:e.jsx("i",{className:"bi bi-check-circle"})}),e.jsxs("div",{children:[e.jsx("div",{className:"stat-value",children:t.published}),e.jsx("div",{className:"stat-label",children:"Published"})]})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-card d-flex align-items-center gap-3",children:[e.jsx("div",{className:"stat-icon",style:{background:"var(--c-warning-soft)",color:"var(--c-warning)"},children:e.jsx("i",{className:"bi bi-pencil-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"stat-value",children:t.draft}),e.jsx("div",{className:"stat-label",children:"Drafts"})]})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-card d-flex align-items-center gap-3",children:[e.jsx("div",{className:"stat-icon",style:{background:"#f1f2f5",color:"var(--c-text)"},children:e.jsx("i",{className:"bi bi-people"})}),e.jsxs("div",{children:[e.jsx("div",{className:"stat-value",children:t.enrollments}),e.jsx("div",{className:"stat-label",children:"Enrollments"})]})]})})]}),e.jsx("div",{className:"filter-card mb-4",children:e.jsxs("form",{onSubmit:g,className:"row g-2 align-items-end",children:[e.jsxs("div",{className:"col-12 col-md-4",children:[e.jsx("label",{className:"form-label small text-muted mb-1",children:"Search"}),e.jsx("input",{type:"text",value:n,onChange:a=>o(a.target.value),className:"form-control",placeholder:"Search by course title..."})]}),e.jsxs("div",{className:"col-6 col-md-2",children:[e.jsx("label",{className:"form-label small text-muted mb-1",children:"Status"}),e.jsxs("select",{value:m,onChange:a=>b(a.target.value),className:"form-select",children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"published",children:"Published"}),e.jsx("option",{value:"draft",children:"Draft"})]})]}),e.jsxs("div",{className:"col-6 col-md-2",children:[e.jsx("label",{className:"form-label small text-muted mb-1",children:"Level"}),e.jsxs("select",{value:h,onChange:a=>x(a.target.value),className:"form-select",children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"Beginner",children:"Beginner"}),e.jsx("option",{value:"Intermediate",children:"Intermediate"}),e.jsx("option",{value:"Advanced",children:"Advanced"})]})]}),e.jsxs("div",{className:"col-6 col-md-2",children:[e.jsx("label",{className:"form-label small text-muted mb-1",children:"Category"}),e.jsxs("select",{value:f,onChange:a=>u(a.target.value),className:"form-select",children:[e.jsx("option",{value:"",children:"All"}),v.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]}),e.jsxs("div",{className:"col-6 col-md-2 d-flex gap-2",children:[e.jsxs("button",{type:"submit",className:"btn btn-primary-soft flex-fill",children:[e.jsx("i",{className:"bi bi-funnel me-1"})," Filter"]}),e.jsx("button",{type:"button",onClick:j,className:"btn btn-icon",title:"Reset",children:e.jsx("i",{className:"bi bi-arrow-counterclockwise"})})]})]})}),e.jsxs("div",{className:"table-card",children:[e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-modern mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Course"}),e.jsx("th",{children:"Talent"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Level"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Enrollments"}),e.jsx("th",{className:"text-end",children:"Actions"})]})}),e.jsx("tbody",{children:s.data.length>0?s.data.map(a=>{var r,p;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("img",{src:a.thumbnail?`/images/thumbnails/${a.thumbnail}`:"/images/placeholder-course.png",className:"course-thumb",alt:a.title}),e.jsxs("div",{children:[e.jsx("div",{className:"course-title",children:a.title}),e.jsx("div",{className:"course-sub",children:a.description?`${a.description.slice(0,40)}${a.description.length>40?"…":""}`:""})]})]})}),e.jsx("td",{children:((r=a.talent)==null?void 0:r.name)??"—"}),e.jsx("td",{children:((p=a.category)==null?void 0:p.name)??"—"}),e.jsx("td",{children:e.jsx("span",{className:"badge-soft",style:{background:"#f1f2f5",color:"#1f2430"},children:a.level})}),e.jsx("td",{children:a.is_free?e.jsx("span",{className:"badge-soft badge-free",children:"Free"}):e.jsxs("span",{className:"badge-soft badge-paid",children:[Number(a.price).toLocaleString()," RWF"]})}),e.jsx("td",{children:a.status==="published"?e.jsx("span",{className:"badge-soft badge-published",children:"Published"}):e.jsx("span",{className:"badge-soft badge-draft",children:"Draft"})}),e.jsx("td",{children:e.jsx("span",{className:"fw-semibold",children:a.enrollments_count})}),e.jsx("td",{className:"text-end",children:e.jsxs("div",{className:"d-flex justify-content-end gap-2",children:[e.jsx(d,{href:route("admin.courses.show",a.slug),className:"btn-icon",title:"View",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(d,{href:route("admin.courses.edit",a.id),className:"btn-icon",title:"Edit",children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{type:"button",onClick:()=>N(a),className:"btn-icon danger",title:"Delete",children:e.jsx("i",{className:"bi bi-trash"})})]})})]},a.id)}):e.jsx("tr",{children:e.jsxs("td",{colSpan:"8",className:"text-center py-5 text-muted",children:[e.jsx("i",{className:"bi bi-inbox fs-3 d-block mb-2"}),"No courses found."]})})})]})}),s.links&&s.links.length>3&&e.jsx("div",{className:"p-3 border-top d-flex flex-wrap gap-1",children:s.links.map((a,r)=>a.url?e.jsx(d,{href:a.url,preserveState:!0,className:`btn btn-sm ${a.active?"btn-primary-soft":"btn-cancel"}`,dangerouslySetInnerHTML:{__html:a.label}},r):e.jsx("span",{className:"btn btn-sm btn-cancel disabled",dangerouslySetInnerHTML:{__html:a.label}},r))})]})]})})]})}export{C as default};
