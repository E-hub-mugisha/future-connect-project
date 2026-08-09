import{r as b,j as e,H as _,L as k,u as f,a as A}from"./app-CZoN4D26.js";import{A as $}from"./AppLayout-cgNkyb5j.js";const D=[{key:"overview",label:"Overview",icon:"fa-circle-info"},{key:"reviews",label:"Reviews",icon:"fa-star"},{key:"details",label:"Details",icon:"fa-list"},{key:"lessons",label:"Lessons",icon:"fa-graduation-cap"},{key:"author",label:"Author",icon:"fa-user"}];function V({course:s}){var v,g,N,w;const[a,l]=b.useState("overview"),[t,n]=b.useState(!1),[c,r]=b.useState(null),[d,h]=b.useState(null),[m,i]=b.useState(!1),L=(v=s.lessons)==null?void 0:v[0],j=(g=s.feedback)!=null&&g.length?s.feedback.reduce((o,u)=>o+u.rating,0)/s.feedback.length:null;return e.jsxs($,{children:[e.jsx(_,{title:s.title}),e.jsxs("div",{"data-h-scope":"talent-course-show",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-course-show"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-course-show"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-course-show"] .h-header-card {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background .15s ease;
                    }
                    [data-h-scope="talent-course-show"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255,255,255,0.25);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-ghost:hover {
                        background: rgba(255,255,255,0.1);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-outline {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-outline:hover {
                        background: rgba(6,15,17,0.04);
                    }
                    [data-h-scope="talent-course-show"] .h-tabs {
                        border-bottom: 1px solid rgba(6,15,17,0.08);
                    }
                    [data-h-scope="talent-course-show"] .h-tab {
                        background: transparent;
                        border: none;
                        padding: 10px 18px;
                        color: rgba(6,15,17,0.55);
                        font-weight: 600;
                        font-size: 0.9rem;
                        border-bottom: 2px solid transparent;
                        cursor: pointer;
                        white-space: nowrap;
                    }
                    [data-h-scope="talent-course-show"] .h-tab.active {
                        color: var(--h-ink);
                        border-bottom-color: var(--h-accent);
                    }
                    [data-h-scope="talent-course-show"] .h-tab:hover:not(.active) {
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-course-show"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-course-show"] .h-badge-ink {
                        background: rgba(6,15,17,0.06);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-course-show"] .h-badge-success {
                        background: rgba(72,213,151,0.15);
                        color: var(--h-accent-dark);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-course-show"] .h-media {
                        background: rgba(6,15,17,0.03);
                        aspect-ratio: 16/9;
                        object-fit: cover;
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-row {
                        border: 1px solid rgba(6,15,17,0.06);
                        transition: box-shadow .15s ease;
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-row:hover {
                        box-shadow: 0 4px 14px rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-num {
                        background: rgba(72,213,151,0.15);
                        color: var(--h-accent-dark);
                        font-weight: 700;
                        width: 34px;
                        height: 34px;
                        flex-shrink: 0;
                    }
                    [data-h-scope="talent-course-show"] .h-star-filled { color: #f5b301; }
                    [data-h-scope="talent-course-show"] .h-star-empty { color: rgba(6,15,17,0.15); }
                    [data-h-scope="talent-course-show"] .form-control:focus,
                    [data-h-scope="talent-course-show"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72,213,151,0.25);
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[e.jsx("div",{className:"card h-header-card border-0 shadow-sm rounded-4 mb-4",children:e.jsx("div",{className:"card-body p-4",children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsx("span",{className:"badge h-badge-accent rounded-pill px-3 py-2",children:((N=s.category)==null?void 0:N.name)??"Uncategorized"}),e.jsx("span",{className:"badge rounded-pill px-3 py-2",style:{background:s.status==="published"?"rgba(72,213,151,0.2)":"rgba(245,179,1,0.2)",color:s.status==="published"?"#48d597":"#f5b301",fontWeight:600},children:x(s.status)})]}),e.jsx("h4",{className:"fw-bold mb-1",children:s.title}),e.jsxs("p",{className:"mb-0",style:{opacity:.7},children:[((w=s.lessons)==null?void 0:w.length)??0," lessons · ",s.enrollments_count??0," enrolled",j&&e.jsxs(e.Fragment,{children:[" · ",e.jsx("i",{className:"fas fa-star mx-1",style:{color:"#f5b301"}}),j.toFixed(1)]})]})]}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsxs(k,{href:route("talent.courses.edit",s.id),className:"btn h-btn-accent rounded-pill px-3 py-2",children:[e.jsx("i",{className:"fas fa-pen me-2"}),"Edit Course"]}),e.jsxs("button",{type:"button",className:"btn h-btn-ghost rounded-pill px-3 py-2",onClick:()=>n(!0),children:[e.jsx("i",{className:"fas fa-plus me-2"}),"Add Lesson"]}),e.jsxs("button",{type:"button",className:"btn h-btn-ghost rounded-pill px-3 py-2",onClick:()=>i(!0),children:[e.jsx("i",{className:"fas fa-comment me-2"}),"Add Review"]}),e.jsxs(k,{href:route("talent.courses.index"),className:"btn h-btn-ghost rounded-pill px-3 py-2",children:[e.jsx("i",{className:"fas fa-arrow-left me-2"}),"Back"]})]})]})})}),e.jsx("div",{className:"h-tabs d-flex gap-1 mb-4 overflow-auto",children:D.map(o=>{var u,y;return e.jsxs("button",{type:"button",className:`h-tab ${a===o.key?"active":""}`,onClick:()=>l(o.key),children:[e.jsx("i",{className:`fas ${o.icon} me-2`}),o.label,o.key==="lessons"&&` (${((u=s.lessons)==null?void 0:u.length)??0})`,o.key==="reviews"&&` (${((y=s.feedback)==null?void 0:y.length)??0})`]},o.key)})}),a==="overview"&&e.jsx(R,{course:s,firstLesson:L}),a==="reviews"&&e.jsx(T,{feedback:s.feedback??[]}),a==="details"&&e.jsx(F,{course:s}),a==="lessons"&&e.jsx(z,{course:s,onEdit:r,onDelete:h}),a==="author"&&e.jsx(O,{talent:s.talent})]})]}),e.jsx(M,{show:t,courseId:s.id,onClose:()=>n(!1)}),e.jsx(B,{lesson:c,onClose:()=>r(null)}),e.jsx(I,{lesson:d,onCancel:()=>h(null)}),e.jsx(U,{show:m,courseId:s.id,onClose:()=>i(!1)})]})}function R({course:s,firstLesson:a}){var l;return e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4 overflow-hidden",children:s.is_free&&(a!=null&&a.video_url)?e.jsx("video",{className:"w-100 h-media",controls:!0,children:e.jsx("source",{src:a.video_url,type:"video/mp4"})}):s.video?e.jsx("video",{className:"w-100 h-media",controls:!0,poster:s.thumbnail?`/${s.thumbnail}`:void 0,children:e.jsx("source",{src:s.video,type:"video/mp4"})}):s.thumbnail?e.jsx("img",{src:`/${s.thumbnail}`,alt:s.title,className:"w-100 h-media"}):e.jsx("div",{className:"w-100 h-media d-flex align-items-center justify-content-center",children:e.jsx("i",{className:"fas fa-image fs-1",style:{color:"#48d597",opacity:.4}})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4 h-100",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h5",{className:"fw-bold mb-3",children:s.title}),e.jsx("p",{className:"text-secondary mb-4",children:s.description}),e.jsxs("div",{className:"d-flex flex-wrap gap-3 mb-3",children:[e.jsx(C,{icon:"fa-signal",label:x(s.level??"Beginner")}),e.jsx(C,{icon:"fa-tag",label:((l=s.category)==null?void 0:l.name)??"Uncategorized"})]}),e.jsxs("div",{className:"pt-3 border-top d-flex align-items-center justify-content-between",children:[s.is_free?e.jsx("span",{className:"badge h-badge-success rounded-pill px-3 py-2 fs-6",children:"Free"}):e.jsxs("span",{className:"fw-bold fs-4",style:{color:"#060f11"},children:["$",Number(s.price??0).toFixed(2)]}),e.jsxs("span",{className:"text-secondary small",children:[e.jsx("i",{className:"fas fa-users me-1"}),s.enrollments_count??0," enrolled"]})]})]})})})]})}function C({icon:s,label:a}){return e.jsxs("span",{className:"badge h-badge-ink rounded-pill px-3 py-2",children:[e.jsx("i",{className:`fas ${s} me-2`}),a]})}function T({feedback:s}){return e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h6",{className:"fw-bold mb-4",children:"Student Feedback"}),s.length===0?e.jsxs("div",{className:"text-center py-5 text-secondary",children:[e.jsx("i",{className:"fas fa-comment-slash fs-2 mb-3 d-block opacity-25"}),e.jsx("p",{className:"mb-0",children:"No feedback available yet."})]}):e.jsx("div",{className:"d-flex flex-column gap-3",children:s.map(a=>e.jsxs("div",{className:"d-flex gap-3 pb-3 border-bottom",children:[e.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center flex-shrink-0",style:{width:40,height:40,background:"rgba(72,213,151,0.15)"},children:e.jsx("i",{className:"fas fa-user",style:{color:"#2fb87c"}})}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-1",children:[e.jsx("strong",{children:a.name}),e.jsx("small",{className:"text-secondary",children:a.created_at_human??""})]}),e.jsx("p",{className:"mb-1 text-secondary",children:a.comment}),e.jsx(E,{value:a.rating})]})]},a.id))})]})})}function E({value:s}){return e.jsx("div",{children:[1,2,3,4,5].map(a=>e.jsx("i",{className:`fas fa-star ${a<=s?"h-star-filled":"h-star-empty"}`,style:{fontSize:13,marginRight:2}},a))})}function F({course:s}){return e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h6",{className:"fw-bold mb-3",children:"Course Details"}),e.jsx("p",{className:"text-secondary mb-4",children:s.description}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsxs("span",{className:"badge h-badge-ink rounded-pill px-3 py-2",children:["Status: ",x(s.status)]}),e.jsxs("span",{className:"badge h-badge-ink rounded-pill px-3 py-2",children:["Level: ",x(s.level??"Beginner")]}),e.jsxs("span",{className:"badge h-badge-ink rounded-pill px-3 py-2",children:["Created: ",s.created_at_human??"—"]}),e.jsxs("span",{className:"badge h-badge-ink rounded-pill px-3 py-2",children:["Slug: ",s.slug]})]})]})})}function z({course:s,onEdit:a,onDelete:l}){const t=s.lessons??[];return e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h6",{className:"fw-bold mb-4",children:"Course Lessons"}),t.length===0?e.jsxs("div",{className:"text-center py-5 text-secondary",children:[e.jsx("i",{className:"fas fa-graduation-cap fs-2 mb-3 d-block opacity-25"}),e.jsx("p",{className:"mb-0",children:"No lessons available for this course."})]}):e.jsx("div",{className:"d-flex flex-column gap-2",children:t.map((n,c)=>e.jsxs("div",{className:"h-lesson-row rounded-4 p-3 d-flex align-items-center gap-3",children:[e.jsx("div",{className:"h-lesson-num rounded-3 d-flex align-items-center justify-content-center",children:c+1}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("div",{className:"fw-semibold",children:n.title}),n.content&&e.jsx("div",{className:"small text-secondary",children:P(n.content,90)})]}),s.is_free?e.jsxs("a",{href:n.video_url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm h-btn-outline rounded-pill px-3",children:[e.jsx("i",{className:"fas fa-play me-1"})," Watch"]}):e.jsx("span",{className:"badge h-badge-ink rounded-pill px-3 py-2",children:"Premium"}),e.jsxs("div",{className:"d-flex gap-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-light rounded-circle",style:{width:32,height:32},onClick:()=>a(n),children:e.jsx("i",{className:"fas fa-pen small"})}),e.jsx("button",{type:"button",className:"btn btn-sm btn-light rounded-circle text-danger",style:{width:32,height:32},onClick:()=>l(n),children:e.jsx("i",{className:"fas fa-trash small"})})]})]},n.id))})]})})}function O({talent:s}){return e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h6",{className:"fw-bold mb-4",children:"Course Author"}),e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-4",children:[e.jsx("img",{src:s!=null&&s.image?`/${s.image}`:"/img/faces/face10.jpg",alt:s==null?void 0:s.name,className:"rounded-circle",style:{width:64,height:64,objectFit:"cover",border:"2px solid #48d597"}}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold",children:s==null?void 0:s.name}),e.jsx("div",{className:"small text-secondary",children:s==null?void 0:s.email})]})]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"small h-badge-ink rounded-3 p-3",children:[e.jsx("div",{className:"text-secondary small mb-1",children:"Email"}),e.jsx("div",{className:"fw-semibold",children:(s==null?void 0:s.email)||"—"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"small h-badge-ink rounded-3 p-3",children:[e.jsx("div",{className:"text-secondary small mb-1",children:"Phone"}),e.jsx("div",{className:"fw-semibold",children:(s==null?void 0:s.phone)||"—"})]})})]})]})})}function M({show:s,courseId:a,onClose:l}){const{data:t,setData:n,post:c,processing:r,errors:d,reset:h}=f({course_id:a,title:"",content:"",video_url:"",order:""});if(!s)return null;function m(i){i.preventDefault(),c(route("talent.courses.lessons.store"),{preserveScroll:!0,onSuccess:()=>{h(),l()}})}return e.jsx(p,{title:"Add Lesson",onClose:l,children:e.jsx(S,{data:t,setData:n,errors:d,onSubmit:m,onCancel:l,processing:r,submitLabel:"Save Lesson"})})}function B({lesson:s,onClose:a}){const{data:l,setData:t,put:n,processing:c,errors:r}=f({title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",video_url:(s==null?void 0:s.video_url)??"",order:(s==null?void 0:s.order)??""});if(!s)return null;function d(h){h.preventDefault(),n(route("talent.courses.lessons.update",s.id),{preserveScroll:!0,onSuccess:a})}return e.jsx(p,{title:"Edit Lesson",onClose:a,children:e.jsx(S,{data:l,setData:t,errors:r,onSubmit:d,onCancel:a,processing:c,submitLabel:"Update Lesson"})})}function S({data:s,setData:a,errors:l,onSubmit:t,onCancel:n,processing:c,submitLabel:r}){return e.jsxs("form",{onSubmit:t,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Lesson Title"}),e.jsx("input",{type:"text",className:`form-control rounded-3 ${l.title?"is-invalid":""}`,value:s.title,onChange:d=>a("title",d.target.value)}),l.title&&e.jsx("div",{className:"invalid-feedback",children:l.title})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Lesson Description"}),e.jsx("textarea",{rows:3,className:`form-control rounded-3 ${l.content?"is-invalid":""}`,value:s.content,onChange:d=>a("content",d.target.value)}),l.content&&e.jsx("div",{className:"invalid-feedback",children:l.content})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Lesson Video Link"}),e.jsx("input",{type:"text",placeholder:"https://...",className:`form-control rounded-3 ${l.video_url?"is-invalid":""}`,value:s.video_url,onChange:d=>a("video_url",d.target.value)}),l.video_url&&e.jsx("div",{className:"invalid-feedback",children:l.video_url})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Lesson Order"}),e.jsx("input",{type:"number",min:"1",className:`form-control rounded-3 ${l.order?"is-invalid":""}`,value:s.order,onChange:d=>a("order",d.target.value)}),l.order&&e.jsx("div",{className:"invalid-feedback",children:l.order})]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2",children:[e.jsx("button",{type:"button",className:"btn h-btn-outline rounded-pill px-4",onClick:n,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn h-btn-accent rounded-pill px-4",disabled:c,children:c?"Saving...":r})]})]})}function I({lesson:s,onCancel:a}){if(!s)return null;function l(){A.delete(route("talent.courses.lessons.destroy",s.id),{preserveScroll:!0,onSuccess:a})}return e.jsxs(p,{title:"Delete Lesson",onClose:a,size:"sm",children:[e.jsxs("p",{className:"text-secondary mb-4",children:["Are you sure you want to delete ",e.jsx("strong",{children:s.title}),"? This action cannot be undone."]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2",children:[e.jsx("button",{type:"button",className:"btn h-btn-outline rounded-pill px-4",onClick:a,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn btn-danger rounded-pill px-4",onClick:l,children:"Delete"})]})]})}function U({show:s,courseId:a,onClose:l}){const{data:t,setData:n,post:c,processing:r,errors:d,reset:h}=f({course_id:a,rating:5,comment:""});if(!s)return null;function m(i){i.preventDefault(),c(route("admin.courses.feedback.store"),{preserveScroll:!0,onSuccess:()=>{h(),l()}})}return e.jsx(p,{title:"Add Review",onClose:l,children:e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Rating (1–5)"}),e.jsx("input",{type:"number",min:"1",max:"5",className:`form-control rounded-3 ${d.rating?"is-invalid":""}`,value:t.rating,onChange:i=>n("rating",i.target.value)}),d.rating&&e.jsx("div",{className:"invalid-feedback",children:d.rating})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Comment"}),e.jsx("textarea",{rows:3,className:`form-control rounded-3 ${d.comment?"is-invalid":""}`,value:t.comment,onChange:i=>n("comment",i.target.value)}),d.comment&&e.jsx("div",{className:"invalid-feedback",children:d.comment})]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2",children:[e.jsx("button",{type:"button",className:"btn h-btn-outline rounded-pill px-4",onClick:l,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn h-btn-accent rounded-pill px-4",disabled:r,children:r?"Submitting...":"Submit Review"})]})]})})}function p({title:s,onClose:a,size:l,children:t}){const n=l==="sm"?"modal-sm":"";return e.jsxs("div",{"data-h-scope":"talent-course-show",children:[e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",onClick:a,children:e.jsx("div",{className:`modal-dialog modal-dialog-centered ${n}`,role:"document",onClick:c=>c.stopPropagation(),children:e.jsxs("div",{className:"modal-content rounded-4 border-0 shadow",children:[e.jsxs("div",{className:"modal-header border-0 pb-0",children:[e.jsx("h5",{className:"modal-title fw-bold",style:{color:"#060f11"},children:s}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:a})]}),e.jsx("div",{className:"modal-body p-4",children:t})]})})}),e.jsx("div",{className:"modal-backdrop fade show",onClick:a})]})}function P(s,a){return s?s.length>a?s.slice(0,a)+"…":s:""}function x(s){return s?s.charAt(0).toUpperCase()+s.slice(1):""}export{V as default};
