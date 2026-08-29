import{u as j,r as u,j as e,H as g,L as c}from"./app-BO26Fp_i.js";import{A as N}from"./AppLayout-Do3g3cSn.js";function y({course:a=null,categories:n=[],talents:o=[]}){const t=!!a,{data:s,setData:r,post:m,put:b,processing:h,errors:l}=j({title:(a==null?void 0:a.title)??"",description:(a==null?void 0:a.description)??"",category_id:(a==null?void 0:a.category_id)??"",talent_id:(a==null?void 0:a.talent_id)??"",level:(a==null?void 0:a.level)??"Beginner",status:(a==null?void 0:a.status)??"draft",video:(a==null?void 0:a.video)??"",is_free:(a==null?void 0:a.is_free)??!1,price:(a==null?void 0:a.price)??0,thumbnail:null}),[f,p]=u.useState(a!=null&&a.thumbnail?`/images/thumbnails/${a.thumbnail}`:"/images/placeholder-course.png");function x(i){const d=i.target.files[0];d&&(r("thumbnail",d),p(URL.createObjectURL(d)))}function v(i){i.preventDefault(),t?b(route("admin.courses.update",a.id),{forceFormData:!0}):m(route("admin.courses.store"),{forceFormData:!0})}return e.jsxs(N,{children:[e.jsx(g,{title:t?"Edit Course":"New Course"}),e.jsx("style",{children:`
                :root{
                    --c-bg:#f7f8fa;
                    --c-card:#ffffff;
                    --c-border:#e9ecf1;
                    --c-text:#1f2430;
                    --c-muted:#7b828f;
                    --c-primary:#4f46e5;
                    --c-primary-soft:#eef0ff;
                    --c-radius:14px;
                }
                .page-wrap{ background:var(--c-bg); }
                .form-card{
                    background:var(--c-card);
                    border:1px solid var(--c-border);
                    border-radius:var(--c-radius);
                    padding:1.75rem;
                }
                .section-title{
                    font-size:.95rem; font-weight:700; color:var(--c-text);
                    margin-bottom:1rem; display:flex; align-items:center; gap:.5rem;
                }
                .section-title i{ color:var(--c-primary); }
                .form-label{ font-size:.82rem; font-weight:600; color:var(--c-text); }
                .form-control, .form-select{
                    border-radius:10px; border:1px solid var(--c-border); font-size:.9rem;
                    padding:.6rem .85rem;
                }
                .form-control:focus, .form-select:focus{
                    border-color:var(--c-primary); box-shadow:0 0 0 3px var(--c-primary-soft);
                }
                textarea.form-control{ min-height:120px; }
                .thumb-preview{
                    width:100%; max-width:220px; aspect-ratio:16/10; object-fit:cover;
                    border-radius:12px; border:1px solid var(--c-border); background:#f1f2f5;
                }
                .upload-box{
                    border:1.5px dashed var(--c-border); border-radius:12px; padding:1rem;
                    text-align:center; cursor:pointer; transition:.15s ease;
                }
                .upload-box:hover{ border-color:var(--c-primary); background:var(--c-primary-soft); }
                .form-check-input:checked{ background-color:var(--c-primary); border-color:var(--c-primary); }
                .btn-primary-soft{
                    background:var(--c-primary); border:none; color:#fff; font-weight:600;
                    border-radius:10px; padding:.6rem 1.3rem;
                }
                .btn-primary-soft:hover{ background:#4338ca; color:#fff; }
                .btn-cancel{
                    border-radius:10px; border:1px solid var(--c-border); color:var(--c-muted);
                    font-weight:600; padding:.6rem 1.3rem; background:#fff;
                }
                .btn-cancel:hover{ background:#f1f2f5; }
                .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
                .page-header p{ color:var(--c-muted); font-size:.9rem; }
                .invalid-feedback{ font-size:.78rem; }
                .price-wrap[data-disabled="true"]{ opacity:.5; pointer-events:none; }
            `}),e.jsx("div",{className:"page-wrap py-4",children:e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center page-header mb-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-1",children:t?"Edit Course":"New Course"}),e.jsx("p",{className:"mb-0",children:t?"Update course details below":"Fill in the details to create a new course"})]}),e.jsxs(c,{href:route("admin.courses.index"),className:"btn btn-cancel",children:[e.jsx("i",{className:"bi bi-arrow-left me-1"})," Back to Courses"]})]}),e.jsx("form",{onSubmit:v,encType:"multipart/form-data",children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg-8",children:[e.jsxs("div",{className:"form-card mb-4",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"bi bi-info-circle"})," Basic Information"]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{className:"form-label",children:["Course Title ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",value:s.title,onChange:i=>r("title",i.target.value),className:`form-control ${l.title?"is-invalid":""}`,placeholder:"e.g. Introduction to Web Development"}),l.title&&e.jsx("div",{className:"invalid-feedback d-block",children:l.title})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Description"}),e.jsx("textarea",{value:s.description,onChange:i=>r("description",i.target.value),className:`form-control ${l.description?"is-invalid":""}`,placeholder:"Brief overview of what students will learn..."}),l.description&&e.jsx("div",{className:"invalid-feedback d-block",children:l.description})]}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("label",{className:"form-label",children:["Category ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsxs("select",{value:s.category_id,onChange:i=>r("category_id",i.target.value),className:`form-select ${l.category_id?"is-invalid":""}`,children:[e.jsx("option",{value:"",children:"Select category"}),n.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),l.category_id&&e.jsx("div",{className:"invalid-feedback d-block",children:l.category_id})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("label",{className:"form-label",children:["Instructor / Talent ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsxs("select",{value:s.talent_id,onChange:i=>r("talent_id",i.target.value),className:`form-select ${l.talent_id?"is-invalid":""}`,children:[e.jsx("option",{value:"",children:"Select instructor"}),o.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),l.talent_id&&e.jsx("div",{className:"invalid-feedback d-block",children:l.talent_id})]})]})]}),e.jsxs("div",{className:"form-card mb-4",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"bi bi-bar-chart-steps"})," Course Details"]}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Level"}),e.jsxs("select",{value:s.level,onChange:i=>r("level",i.target.value),className:`form-select ${l.level?"is-invalid":""}`,children:[e.jsx("option",{value:"Beginner",children:"Beginner"}),e.jsx("option",{value:"Intermediate",children:"Intermediate"}),e.jsx("option",{value:"Advanced",children:"Advanced"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("label",{className:"form-label",children:["Status ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsxs("select",{value:s.status,onChange:i=>r("status",i.target.value),className:`form-select ${l.status?"is-invalid":""}`,children:[e.jsx("option",{value:"draft",children:"Draft"}),e.jsx("option",{value:"published",children:"Published"})]}),l.status&&e.jsx("div",{className:"invalid-feedback d-block",children:l.status})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{className:"form-label",children:"Video URL"}),e.jsx("input",{type:"url",value:s.video,onChange:i=>r("video",i.target.value),className:`form-control ${l.video?"is-invalid":""}`,placeholder:"https://..."}),l.video&&e.jsx("div",{className:"invalid-feedback d-block",children:l.video})]})]})]})]}),e.jsxs("div",{className:"col-lg-4",children:[e.jsxs("div",{className:"form-card mb-4",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"bi bi-image"})," Thumbnail"]}),e.jsx("img",{id:"thumbPreview",src:f,className:"thumb-preview mb-3",alt:"Thumbnail preview"}),e.jsxs("label",{className:"upload-box d-block",children:[e.jsx("i",{className:"bi bi-cloud-upload fs-4 d-block mb-1 text-muted"}),e.jsx("span",{className:"small text-muted",children:"Click to upload image (max 2MB)"}),e.jsx("input",{type:"file",accept:"image/*",className:"d-none",onChange:x})]}),l.thumbnail&&e.jsx("div",{className:"invalid-feedback d-block",children:l.thumbnail})]}),e.jsxs("div",{className:"form-card mb-4",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"bi bi-cash-coin"})," Pricing"]}),e.jsxs("div",{className:"form-check form-switch mb-3",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",id:"isFreeSwitch",checked:s.is_free,onChange:i=>r("is_free",i.target.checked)}),e.jsx("label",{className:"form-check-label",htmlFor:"isFreeSwitch",children:"This course is free"})]}),e.jsxs("div",{className:"price-wrap","data-disabled":s.is_free?"true":"false",children:[e.jsx("label",{className:"form-label",children:"Price (RWF)"}),e.jsx("input",{type:"number",step:"0.01",min:"0",value:s.price,onChange:i=>r("price",i.target.value),className:`form-control ${l.price?"is-invalid":""}`,placeholder:"0.00",disabled:s.is_free}),l.price&&e.jsx("div",{className:"invalid-feedback d-block",children:l.price})]})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs("button",{type:"submit",className:"btn btn-primary-soft flex-fill",disabled:h,children:[e.jsx("i",{className:"bi bi-check2-circle me-1"})," ",t?"Update Course":"Create Course"]}),e.jsx(c,{href:route("admin.courses.index"),className:"btn btn-cancel",children:"Cancel"})]})]})]})})]})})]})}export{y as default};
