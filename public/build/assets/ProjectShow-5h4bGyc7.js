import{u as i,j as e,H as b,L as f}from"./app-DQcVR1sC.js";import{G as h}from"./GuestLayout-AyS9Rfgz.js";function p({project:r,recent:d=[]}){var c,t;const l=i({message:"",amount:"",currency:"USD"}),s=i({message:"",portfolio_url:"",attachment:null,name:"",email:""});function n(a){a.preventDefault(),l.post(route("diaspora.sponsorship.store",r.id))}function m(a){a.preventDefault(),s.post(route("user.projects.apply",r.id),{forceFormData:!0})}return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:r.title}),e.jsx("style",{children:`
        :root{
          --fc-bg:#0e1618;
          --fc-bg-alt:#141d20;
          --fc-card:#172124;
          --fc-border:#243033;
          --fc-accent:#48d597;
          --fc-accent-dark:#33a876;
          --fc-white:#F5f5f7;
          --fc-muted:#9fb0ae;
        }

        .fc-page{ background:var(--fc-bg); color:var(--fc-white); padding:60px 0; }

        .fc-card{
          background:var(--fc-card);
          border:1px solid var(--fc-border);
          border-radius:20px;
          overflow:hidden;
        }

        /* Header */
        .fc-proj-header{
          padding:28px 30px;
          border-bottom:1px solid var(--fc-border);
          background:
            radial-gradient(circle at 90% 0%, rgba(72,213,151,.10), transparent 55%),
            var(--fc-bg-alt);
        }
        .fc-proj-header h2{ color:var(--fc-white); font-weight:700; margin:0; }
        .fc-proj-meta{ color:var(--fc-muted); font-size:.88rem; margin-top:10px; }
        .fc-proj-meta i{ color:var(--fc-accent); }

        .fc-badge-verified{
          background:rgba(72,213,151,.15);
          color:var(--fc-accent);
          font-weight:700;
          font-size:.78rem;
          padding:6px 14px;
          border-radius:30px;
        }

        /* Body */
        .fc-proj-body{ padding:30px; }
        .fc-proj-desc{ color:var(--fc-muted); line-height:1.7; margin-bottom:28px; }

        .fc-info-box{
          background:var(--fc-bg-alt);
          border:1px solid var(--fc-border);
          border-radius:14px;
          padding:18px;
          text-align:center;
          transition:.2s;
          height:100%;
        }
        .fc-info-box:hover{
          border-color:var(--fc-accent);
          transform:translateY(-3px);
        }
        .fc-info-box small{ color:var(--fc-muted); display:block; margin-bottom:6px; font-size:.78rem; text-transform:uppercase; letter-spacing:.04em; }
        .fc-info-box span{ color:var(--fc-white); font-weight:700; font-size:1.05rem; }

        .btn-fc-primary{
          background:var(--fc-accent);
          border:none;
          color:#06231a;
          font-weight:700;
          border-radius:30px;
          padding:.7rem 1.6rem;
          transition:.2s ease;
        }
        .btn-fc-primary:hover{ background:var(--fc-accent-dark); color:#06231a; transform:translateY(-1px); }

        .btn-fc-outline-primary{
          background:transparent;
          border:1px solid var(--fc-accent);
          color:var(--fc-accent);
          font-weight:600;
          border-radius:30px;
          padding:.6rem 1.4rem;
          transition:.2s;
        }
        .btn-fc-outline-primary:hover{ background:var(--fc-accent); color:#06231a; }

        /* Sidebar */
        .fc-sidebar-header{
          padding:18px 22px;
          border-bottom:1px solid var(--fc-border);
          font-weight:700;
          color:var(--fc-white);
        }
        .fc-sidebar-header i{ color:var(--fc-accent); }

        .fc-recent-item{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:16px 22px;
          border-bottom:1px solid var(--fc-border);
          text-decoration:none;
          transition:.2s;
        }
        .fc-recent-item:last-child{ border-bottom:none; }
        .fc-recent-item:hover{ background:var(--fc-bg-alt); }
        .fc-recent-item h6{ color:var(--fc-white); font-weight:600; margin-bottom:4px; }
        .fc-recent-item small{ color:var(--fc-muted); }
        .fc-recent-item small i{ color:var(--fc-accent); }
        .fc-recent-item .verified-icon{ color:var(--fc-accent); }

        .fc-cta-card{ padding:34px 24px; text-align:center; }
        .fc-cta-card h6{ color:var(--fc-white); font-weight:700; }
        .fc-cta-card p{ color:var(--fc-muted); font-size:.88rem; }

        /* Modals */
        .modal-content{
          background:var(--fc-card);
          border:1px solid var(--fc-border);
          border-radius:18px;
          color:var(--fc-white);
        }
        .modal-header{
          border-bottom:1px solid var(--fc-border);
          background:var(--fc-bg-alt) !important;
        }
        .modal-header h5{ color:var(--fc-white); }
        .modal-header small{ color:var(--fc-muted) !important; }
        .modal-footer{ border-top:1px solid var(--fc-border); }
        .modal .form-label{ color:var(--fc-muted); font-weight:600; font-size:.85rem; }
        .modal .form-control, .modal .form-select, .modal textarea{
          background:var(--fc-bg-alt) !important;
          border:1px solid var(--fc-border) !important;
          color:var(--fc-white) !important;
          border-radius:12px !important;
        }
        .modal .form-control::placeholder{ color:#5f7370; }
        .modal .form-control:focus, .modal .form-select:focus{
          border-color:var(--fc-accent) !important;
          box-shadow:0 0 0 3px rgba(72,213,151,.15) !important;
        }
        .modal .file-upload-box{
          background:var(--fc-bg-alt);
          border:1px dashed var(--fc-border) !important;
        }
        .modal .btn-light{
          background:var(--fc-bg-alt);
          border:1px solid var(--fc-border);
          color:var(--fc-white);
        }
        .modal .btn-light:hover{ background:var(--fc-border); color:var(--fc-white); }
        .modal .alert-danger{
          background:rgba(220,53,69,.12);
          border:1px solid rgba(220,53,69,.3);
          color:#ff8a97;
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --fc-bg: #f6faf8;
          --fc-bg-alt: #eef4f1;
          --fc-card: #F5f5f7;
          --fc-border: rgba(0, 100, 60, 0.12);
          --fc-accent: #00a667;
          --fc-accent-dark: #00c07a;
          --fc-white: #10201b;
          --fc-muted: #5b7a70;
        }

        /* Header radial glow — soften on light bg */
        [data-h-theme="light"] .fc-proj-header {
          background:
            radial-gradient(circle at 90% 0%, rgba(0,166,103,.08), transparent 55%),
            var(--fc-bg-alt);
        }

        /* Verified badge background hardcoded rgba */
        [data-h-theme="light"] .fc-badge-verified {
          background: rgba(0, 166, 103, .14);
        }

        /* Focus glow ring hardcoded to dark-theme accent rgba */
        [data-h-theme="light"] .modal .form-control:focus,
        [data-h-theme="light"] .modal .form-select:focus {
          box-shadow: 0 0 0 3px rgba(0, 166, 103, .15) !important;
        }

        /* Placeholder color was a dark-theme-only hex */
        [data-h-theme="light"] .modal .form-control::placeholder {
          color: #a9c2b8;
        }

        /* Alert-danger tuned for dark bg — lighten to stay legible on white */
        [data-h-theme="light"] .modal .alert-danger {
          background: rgba(220,53,69,.08);
          border: 1px solid rgba(220,53,69,.25);
          color: #b3273a;
        }

        /* Primary button text color (#06231a) reads fine on the light-mode
           accent green too, so intentionally left unchanged. */
      `}),e.jsx("div",{className:"fc-page",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"fc-card",children:[e.jsxs("div",{className:"fc-proj-header",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between flex-wrap gap-2",children:[e.jsx("h2",{children:r.title}),r.verified&&e.jsxs("span",{className:"fc-badge-verified",children:[e.jsx("i",{className:"bi bi-patch-check-fill me-1"})," Verified"]})]}),e.jsxs("p",{className:"fc-proj-meta mb-0",children:[e.jsx("i",{className:"bi bi-person-circle me-1"})," ",((c=r.user)==null?void 0:c.name)??"Unknown"," • ",e.jsx("i",{className:"bi bi-geo-alt me-1"})," ",r.location??"Remote"," • ",e.jsx("i",{className:"bi bi-briefcase me-1"})," ",((t=r.category)==null?void 0:t.name)??"General"]})]}),e.jsxs("div",{className:"fc-proj-body",children:[e.jsx("p",{className:"fc-proj-desc",children:r.description}),e.jsxs("div",{className:"row g-3 mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"fc-info-box",children:[e.jsx("small",{children:"💰 Budget"}),e.jsx("span",{children:r.budget})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"fc-info-box",children:[e.jsx("small",{children:"📊 Status"}),e.jsx("span",{children:x(r.status)})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"fc-info-box",children:[e.jsx("small",{children:"🕒 Posted"}),e.jsx("span",{children:r.posted_ago})]})})]}),e.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[e.jsxs("button",{className:"btn btn-fc-primary","data-bs-toggle":"modal","data-bs-target":"#applyModal",children:[e.jsx("i",{className:"bi bi-envelope-paper me-2"})," Apply for Collaboration"]}),e.jsx("button",{type:"button",className:"btn btn-fc-outline-primary","data-bs-toggle":"modal","data-bs-target":"#sponsorModal",children:"Sponsor This Project"})]}),e.jsx("div",{className:"modal fade",id:"sponsorModal",tabIndex:"-1","aria-labelledby":"sponsorModalLabel","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title fw-bold",id:"sponsorModalLabel",children:["Sponsor: ",r.title]}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsxs("div",{className:"modal-body",children:[Object.keys(l.errors).length>0&&e.jsxs("div",{className:"alert alert-danger",children:[e.jsx("h6",{className:"mb-2 fw-bold",children:"❗ Please fix the following errors:"}),e.jsx("ul",{className:"mb-0",children:Object.values(l.errors).map((a,o)=>e.jsx("li",{children:a},o))})]}),e.jsx("p",{className:"text-muted mb-4",style:{color:"var(--fc-muted)"},children:r.description}),e.jsxs("form",{id:"sponsorForm",onSubmit:n,children:[e.jsxs("div",{className:"col-12 mb-3",children:[e.jsx("label",{className:"form-label",children:"Message"}),e.jsx("textarea",{name:"message",rows:"4",className:"form-control",placeholder:"Leave a message...",value:l.data.message,onChange:a=>l.setData("message",a.target.value)})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Amount"}),e.jsx("input",{type:"number",name:"amount",className:`form-control${l.errors.amount?" is-invalid":""}`,value:l.data.amount,onChange:a=>l.setData("amount",a.target.value),required:!0}),l.errors.amount&&e.jsx("div",{className:"invalid-feedback",children:l.errors.amount})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Currency"}),e.jsxs("select",{name:"currency",className:`form-select${l.errors.currency?" is-invalid":""}`,value:l.data.currency,onChange:a=>l.setData("currency",a.target.value),children:[e.jsx("option",{value:"USD",children:"USD"}),e.jsx("option",{value:"EUR",children:"EUR"}),e.jsx("option",{value:"RWF",children:"RWF"})]}),l.errors.currency&&e.jsx("div",{className:"invalid-feedback",children:l.errors.currency})]}),e.jsx("button",{type:"submit",className:"btn btn-fc-primary w-100",disabled:l.processing,children:"Sponsor Now"})]})]})]})})})]})]})}),e.jsxs("div",{className:"col-lg-4",children:[e.jsxs("div",{className:"fc-card mb-4",children:[e.jsxs("div",{className:"fc-sidebar-header",children:[e.jsx("i",{className:"bi bi-stars me-2"})," Recent Projects"]}),e.jsx("div",{children:d.map(a=>{var o;return e.jsxs(f,{href:route("user.projects.show",a.id),className:"fc-recent-item",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:a.title}),e.jsxs("small",{children:[e.jsx("i",{className:"bi bi-tag me-1"}),((o=a.category)==null?void 0:o.name)??"General"]})]}),a.verified&&e.jsx("i",{className:"bi bi-patch-check-fill verified-icon"})]},a.id)})})]}),e.jsx("div",{className:"fc-card",children:e.jsxs("div",{className:"fc-cta-card",children:[e.jsx("h6",{className:"mb-2",children:"Want to post your own project?"}),e.jsx("p",{className:"mb-3",children:"Share your idea and find talented collaborators."}),e.jsxs("a",{href:"#",className:"btn btn-fc-outline-primary",children:[e.jsx("i",{className:"bi bi-plus-circle me-1"})," Post a Project"]})]})})]})]})})}),e.jsx("div",{className:"modal fade",id:"applyModal",tabIndex:"-1","aria-labelledby":"applyModalLabel","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content overflow-hidden",children:[e.jsxs("div",{className:"modal-header p-4",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"modal-title fw-bold mb-1",children:[e.jsx("i",{className:"bi bi-envelope-paper me-2",style:{color:"var(--fc-accent)"}})," Apply for Collaboration"]}),e.jsx("small",{children:"Connect with this project by sharing your skills and experience"})]}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal"})]}),e.jsxs("form",{onSubmit:m,className:"p-3 p-md-4",children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"form-label",children:[e.jsx("i",{className:"bi bi-person-circle me-1",style:{color:"var(--fc-accent)"}})," Your Name"]}),e.jsx("input",{type:"text",name:"name",className:"form-control p-3",placeholder:"Your full name",value:s.data.name,onChange:a=>s.setData("name",a.target.value),required:!0}),s.errors.name&&e.jsx("div",{className:"text-danger small mt-1",children:s.errors.name})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"form-label",children:[e.jsx("i",{className:"bi bi-envelope me-1",style:{color:"var(--fc-accent)"}})," Your Email"]}),e.jsx("input",{type:"email",name:"email",className:"form-control p-3",placeholder:"Your email address",value:s.data.email,onChange:a=>s.setData("email",a.target.value),required:!0}),s.errors.email&&e.jsx("div",{className:"text-danger small mt-1",children:s.errors.email})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"form-label",children:[e.jsx("i",{className:"bi bi-chat-dots me-1",style:{color:"var(--fc-accent)"}})," Message / Collaboration Proposal"]}),e.jsx("textarea",{name:"message",className:"form-control p-3",rows:"4",placeholder:"Tell us about your expertise and how you can contribute...",value:s.data.message,onChange:a=>s.setData("message",a.target.value),required:!0}),s.errors.message&&e.jsx("div",{className:"text-danger small mt-1",children:s.errors.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"form-label",children:[e.jsx("i",{className:"bi bi-link-45deg me-1",style:{color:"var(--fc-accent)"}})," Portfolio URL (optional)"]}),e.jsx("input",{type:"url",name:"portfolio_url",className:"form-control p-3",placeholder:"https://yourportfolio.com",value:s.data.portfolio_url,onChange:a=>s.setData("portfolio_url",a.target.value)}),s.errors.portfolio_url&&e.jsx("div",{className:"text-danger small mt-1",children:s.errors.portfolio_url})]}),e.jsxs("div",{className:"mb-2",children:[e.jsxs("label",{className:"form-label",children:[e.jsx("i",{className:"bi bi-paperclip me-1",style:{color:"var(--fc-accent)"}})," Attach File (optional)"]}),e.jsxs("div",{className:"file-upload-box p-4 rounded-4 text-center",children:[e.jsx("input",{type:"file",name:"attachment",className:"form-control form-control-sm border-0",accept:".pdf,.doc,.docx,.zip",onChange:a=>s.setData("attachment",a.target.files[0])}),e.jsx("small",{className:"d-block mt-2",style:{color:"var(--fc-muted)"},children:"Accepted: PDF, DOC, DOCX, ZIP — Max 2MB"})]}),s.errors.attachment&&e.jsx("div",{className:"text-danger small mt-1",children:s.errors.attachment})]})]}),e.jsxs("div",{className:"modal-footer d-flex justify-content-between px-4 pb-4",children:[e.jsxs("button",{type:"button",className:"btn btn-light","data-bs-dismiss":"modal",children:[e.jsx("i",{className:"bi bi-x-circle me-1"})," Cancel"]}),e.jsxs("button",{type:"submit",className:"btn btn-fc-primary px-5",disabled:s.processing,children:[e.jsx("i",{className:"bi bi-send-check me-1"})," Submit Application"]})]})]})]})})})]})}function x(r){return r?r.charAt(0).toUpperCase()+r.slice(1):""}p.layout=r=>e.jsx(h,{children:r,title:r.props.project.title});export{p as default};
