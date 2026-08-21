import{u as _,j as e,H as L,L as o,a as C}from"./app-C-Atdk99.js";import{A as z}from"./AppLayout-3QMuWNNg.js";function A({course:s}){var m,b,f,h,x;const{data:d,setData:n,post:p,processing:g,errors:t,reset:v}=_({course_id:s.id,title:"",content:"",video_url:"",order:(((m=s.lessons)==null?void 0:m.length)??0)+1}),c=[...s.lessons??[]].sort((a,l)=>a.order-l.order),u=s.feedback_avg_rating!=null?Number(s.feedback_avg_rating):s.feedback&&s.feedback.length?s.feedback.reduce((a,l)=>a+l.rating,0)/s.feedback.length:0,j=s.enrollments_count??((b=s.enrollments)==null?void 0:b.length)??0,N=s.feedback_count??((f=s.feedback)==null?void 0:f.length)??0;function y(a){a.preventDefault(),p(route("admin.courses.lessons.store",{course:s.id}),{onSuccess:()=>{var i;v();const l=document.getElementById("addLessonModal"),r=(i=window.bootstrap)==null?void 0:i.Modal.getInstance(l);r==null||r.hide()}})}function w(a){confirm("Delete this lesson?")&&C.delete(route("admin.courses.lessons.destroy",{course:s.id,lesson:a.id}))}function k(a,l){return a?a.length>l?`${a.slice(0,l)}…`:a:""}return e.jsxs(z,{children:[e.jsx(L,{title:s.title}),e.jsx("style",{children:`
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
                    --c-gold:#b8790c;
                    --c-gold-soft:#fdf3e2;
                    --c-radius:14px;
                }
                .page-wrap{ background:var(--c-bg); }
                .hero-card{
                    background:var(--c-card); border:1px solid var(--c-border); border-radius:var(--c-radius);
                    overflow:hidden;
                }
                .hero-thumb{ width:100%; height:260px; object-fit:cover; background:#f1f2f5; }
                .hero-body{ padding:1.5rem; }
                .badge-soft{ font-weight:600; font-size:.72rem; padding:.4em .75em; border-radius:999px; }
                .badge-published{ background:var(--c-success-soft); color:var(--c-success); }
                .badge-draft{ background:var(--c-warning-soft); color:var(--c-warning); }
                .badge-free{ background:var(--c-primary-soft); color:var(--c-primary); }
                .badge-paid{ background:#f1f2f5; color:var(--c-text); }

                /* Quick stats strip */
                .stat-strip{
                    display:grid; grid-template-columns:repeat(4,1fr); gap:0;
                    background:var(--c-card); border:1px solid var(--c-border); border-radius:var(--c-radius);
                    overflow:hidden; margin-bottom:1.5rem;
                }
                .stat-cell{
                    padding:1.1rem 1rem; text-align:center; border-right:1px solid var(--c-border);
                }
                .stat-cell:last-child{ border-right:none; }
                .stat-cell .val{ font-size:1.25rem; font-weight:800; color:var(--c-text); display:block; line-height:1.3; }
                .stat-cell .val i{ color:var(--c-gold); font-size:.95rem; margin-right:.2rem; }
                .stat-cell .lbl{ font-size:.72rem; color:var(--c-muted); text-transform:uppercase; letter-spacing:.05em; }

                .info-card{
                    background:var(--c-card); border:1px solid var(--c-border); border-radius:var(--c-radius);
                    padding:1.5rem; height:100%;
                }
                .info-card .section-title{
                    font-size:.95rem; font-weight:700; color:var(--c-text); margin-bottom:1rem;
                    display:flex; align-items:center; gap:.5rem;
                }
                .info-card .section-title i{ color:var(--c-primary); }
                .meta-row{ display:flex; justify-content:space-between; padding:.55rem 0; border-bottom:1px solid var(--c-border); font-size:.87rem; }
                .meta-row:last-child{ border-bottom:none; }
                .meta-label{ color:var(--c-muted); }
                .meta-value{ color:var(--c-text); font-weight:600; }
                .lesson-item{
                    display:flex; align-items:center; justify-content:between; gap:1rem;
                    padding:.85rem 1rem; border:1px solid var(--c-border); border-radius:12px; margin-bottom:.6rem;
                    background:#fff;
                }
                .lesson-index{
                    width:32px;height:32px;border-radius:8px;background:var(--c-primary-soft);color:var(--c-primary);
                    display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem;flex-shrink:0;
                }
                .lesson-title{ font-weight:600; color:var(--c-text); font-size:.9rem; }
                .lesson-sub{ font-size:.76rem; color:var(--c-muted); }
                .btn-icon{
                    width:32px;height:32px;border-radius:8px; display:inline-flex;align-items:center;justify-content:center;
                    border:1px solid var(--c-border); background:#fff; color:var(--c-muted);
                }
                .btn-icon:hover{ background:var(--c-primary-soft); color:var(--c-primary); }
                .btn-icon.danger:hover{ background:#fdecec; color:#dc2626; }
                .feedback-item{ border-bottom:1px solid var(--c-border); padding:1rem 0; }
                .feedback-item:last-child{ border-bottom:none; }
                .stars i{ color:#f59e0b; font-size:.85rem; }
                .btn-primary-soft{
                    background:var(--c-primary); border:none; color:#fff; font-weight:600; border-radius:10px; padding:.55rem 1.1rem;
                }
                .btn-primary-soft:hover{ background:#4338ca; color:#fff; }
                .btn-cancel{
                    border-radius:10px; border:1px solid var(--c-border); color:var(--c-muted); font-weight:600;
                    padding:.55rem 1.1rem; background:#fff;
                }
                .btn-cancel:hover{ background:#f1f2f5; }
                .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
                .page-header p{ color:var(--c-muted); font-size:.9rem; }
            `}),e.jsx("div",{className:"page-wrap py-4",children:e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center page-header mb-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-1",children:s.title}),e.jsx("p",{className:"mb-0",children:"Course details, lessons and student feedback"})]}),e.jsxs("div",{className:"d-flex gap-2 mt-2 mt-md-0",children:[e.jsxs(o,{href:route("admin.courses.edit",s.id),className:"btn btn-primary-soft",children:[e.jsx("i",{className:"bi bi-pencil me-1"})," Edit Course"]}),e.jsxs(o,{href:route("admin.courses.index"),className:"btn btn-cancel",children:[e.jsx("i",{className:"bi bi-arrow-left me-1"})," Back"]})]})]}),e.jsxs("div",{className:"stat-strip",children:[e.jsxs("div",{className:"stat-cell",children:[e.jsxs("span",{className:"val",children:[e.jsx("i",{className:"bi bi-star-fill"}),u.toFixed(1)]}),e.jsx("span",{className:"lbl",children:"Avg Rating"})]}),e.jsxs("div",{className:"stat-cell",children:[e.jsx("span",{className:"val",children:N}),e.jsx("span",{className:"lbl",children:"Reviews"})]}),e.jsxs("div",{className:"stat-cell",children:[e.jsx("span",{className:"val",children:j}),e.jsx("span",{className:"lbl",children:"Enrolled"})]}),e.jsxs("div",{className:"stat-cell",children:[e.jsx("span",{className:"val",children:c.length}),e.jsx("span",{className:"lbl",children:"Lessons"})]})]}),e.jsxs("div",{className:"row g-4 mb-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"hero-card",children:[e.jsx("img",{src:s.thumbnail?`/images/thumbnails/${s.thumbnail}`:"/images/placeholder-course.png",className:"hero-thumb",alt:s.title}),e.jsxs("div",{className:"hero-body",children:[e.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[s.status==="published"?e.jsx("span",{className:"badge-soft badge-published",children:"Published"}):e.jsx("span",{className:"badge-soft badge-draft",children:"Draft"}),s.is_free?e.jsx("span",{className:"badge-soft badge-free",children:"Free"}):e.jsxs("span",{className:"badge-soft badge-paid",children:[Number(s.price).toLocaleString()," RWF"]}),e.jsx("span",{className:"badge-soft",style:{background:"#f1f2f5",color:"#1f2430"},children:s.level})]}),e.jsx("p",{className:"text-muted mb-0",children:s.description||"No description provided."}),s.video&&e.jsxs("a",{href:s.video,target:"_blank",rel:"noreferrer",className:"btn btn-cancel mt-3",children:[e.jsx("i",{className:"bi bi-play-circle me-1"})," Watch Preview Video"]})]})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"info-card",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"bi bi-info-circle"})," Overview"]}),e.jsxs("div",{className:"meta-row",children:[e.jsx("span",{className:"meta-label",children:"Instructor"}),e.jsx("span",{className:"meta-value",children:((h=s.talent)==null?void 0:h.name)??"—"})]}),e.jsxs("div",{className:"meta-row",children:[e.jsx("span",{className:"meta-label",children:"Category"}),e.jsx("span",{className:"meta-value",children:((x=s.category)==null?void 0:x.name)??"—"})]}),e.jsxs("div",{className:"meta-row",children:[e.jsx("span",{className:"meta-label",children:"Slug"}),e.jsx("span",{className:"meta-value text-truncate",style:{maxWidth:"160px"},children:s.slug})]}),e.jsxs("div",{className:"meta-row",children:[e.jsx("span",{className:"meta-label",children:"Created"}),e.jsx("span",{className:"meta-value",children:s.created_at?new Date(s.created_at).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"—"})]}),e.jsxs("div",{className:"meta-row",children:[e.jsx("span",{className:"meta-label",children:"Last Updated"}),e.jsx("span",{className:"meta-value",children:s.updated_at?new Date(s.updated_at).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"—"})]})]})})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-7",children:e.jsxs("div",{className:"info-card",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsxs("div",{className:"section-title mb-0",children:[e.jsx("i",{className:"bi bi-collection-play"})," Lessons"]}),e.jsxs("button",{type:"button",className:"btn btn-sm btn-primary-soft","data-bs-toggle":"modal","data-bs-target":"#addLessonModal",children:[e.jsx("i",{className:"bi bi-plus-lg me-1"})," Add Lesson"]})]}),c.length>0?c.map((a,l)=>e.jsxs("div",{className:"lesson-item",children:[e.jsx("div",{className:"lesson-index",children:l+1}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("div",{className:"lesson-title",children:a.title}),e.jsx("div",{className:"lesson-sub",children:k(a.content,60)})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(o,{href:route("admin.courses.lessons.edit",{course:s.id,lesson:a.id}),className:"btn-icon",title:"Edit",children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{type:"button",onClick:()=>w(a),className:"btn-icon danger",title:"Delete",children:e.jsx("i",{className:"bi bi-trash"})})]})]},a.id)):e.jsx("p",{className:"text-muted text-center py-4 mb-0",children:"No lessons added yet."})]})}),e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"info-card",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"bi bi-chat-square-text"})," Student Feedback"]}),s.feedback&&s.feedback.length>0?s.feedback.map((a,l)=>{var r;return e.jsxs("div",{className:"feedback-item",children:[e.jsxs("div",{className:"d-flex justify-content-between mb-1",children:[e.jsx("span",{className:"fw-semibold small",children:((r=a.user)==null?void 0:r.name)??"Anonymous"}),e.jsx("span",{className:"stars",children:[1,2,3,4,5].map(i=>e.jsx("i",{className:`bi bi-star${i<=a.rating?"-fill":""}`},i))})]}),e.jsx("p",{className:"small text-muted mb-0",children:a.comment})]},a.id??l)}):e.jsx("p",{className:"text-muted text-center py-4 mb-0",children:"No feedback yet."})]})})]})]})}),e.jsx("div",{className:"modal fade",id:"addLessonModal",tabIndex:"-1",children:e.jsx("div",{className:"modal-dialog",children:e.jsx("div",{className:"modal-content",style:{borderRadius:"14px",border:"none"},children:e.jsxs("form",{onSubmit:y,children:[e.jsxs("div",{className:"modal-header",style:{borderBottom:"1px solid #e9ecf1"},children:[e.jsx("h5",{className:"modal-title fw-bold",children:"Add Lesson"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold small",children:"Title"}),e.jsx("input",{type:"text",value:d.title,onChange:a=>n("title",a.target.value),className:"form-control",required:!0}),t.title&&e.jsx("div",{className:"text-danger small mt-1",children:t.title})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold small",children:"Content"}),e.jsx("textarea",{value:d.content,onChange:a=>n("content",a.target.value),className:"form-control",rows:"3"}),t.content&&e.jsx("div",{className:"text-danger small mt-1",children:t.content})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold small",children:"Video URL"}),e.jsx("input",{type:"url",value:d.video_url,onChange:a=>n("video_url",a.target.value),className:"form-control",required:!0}),t.video_url&&e.jsx("div",{className:"text-danger small mt-1",children:t.video_url})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold small",children:"Order"}),e.jsx("input",{type:"number",value:d.order,onChange:a=>n("order",a.target.value),className:"form-control"})]})]}),e.jsxs("div",{className:"modal-footer",style:{borderTop:"1px solid #e9ecf1"},children:[e.jsx("button",{type:"button",className:"btn btn-cancel","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary-soft",disabled:g,children:"Save Lesson"})]})]})})})})]})}export{A as default};
