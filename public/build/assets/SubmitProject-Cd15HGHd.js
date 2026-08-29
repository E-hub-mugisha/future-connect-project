import{d as x,r as d,u as b,j as e,H as v,L as j}from"./app-BO26Fp_i.js";import{G as N}from"./GuestLayout-RkVoz6LJ.js";function y({categories:i=[],old:c={},status:f=null,needsAccount:l=!1}){const{props:w}=x(),[s,n]=d.useState(!l),[m,u]=d.useState(l),{data:t,setData:o,post:p,processing:h,errors:r,reset:_}=b({title:c.title??"",description:c.description??"",category_id:c.category_id??"",budget_amount:c.budget_amount??"",budget_currency:c.budget_currency??"RWF",location:c.location??"",email:c.email??"",first_name:c.first_name??"",last_name:c.last_name??""});d.useEffect(()=>{l&&(u(!0),n(!1))},[l]);function g(a){a.preventDefault(),p(route("user.projects.store"))}return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Submit a Project"}),e.jsx("style",{children:`
        :root {
          --fc-bg: #0e1618;
          --fc-bg-alt: #141d20;
          --fc-card: #172124;
          --fc-border: #243033;
          --fc-accent: #48d597;
          --fc-accent-dark: #33a876;
          --fc-white: #ffffff;
          --fc-muted: #9fb0ae;
          --fc-danger: #ff6b6b;
        }

        .fc-page { background: var(--fc-bg); color: var(--fc-white); }

        .fc-list-header {
          border-bottom: 1px solid var(--fc-border);
          padding: 48px 0 36px;
        }
        .fc-list-header h1 { font-weight: 700; font-size: 2rem; color: var(--fc-white); margin-bottom: 6px; }
        .fc-list-header h1 span { color: var(--fc-accent); }
        .fc-list-header p { color: var(--fc-muted); }
        .fc-breadcrumb { color: var(--fc-muted); font-size: .85rem; margin-bottom: 14px; }
        .fc-breadcrumb a { color: var(--fc-muted); text-decoration: none; }
        .fc-breadcrumb a:hover { color: var(--fc-accent); }

        .fc-form-wrap { padding: 40px 0 80px; }

        .fc-form-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 18px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
        }

        .fc-section-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--fc-white);
          margin-bottom: 4px;
        }
        .fc-section-sub { color: var(--fc-muted); font-size: .82rem; margin-bottom: 20px; }

        .fc-divider { border-top: 1px solid var(--fc-border); margin: 28px 0; }

        .fc-form-card label {
          color: var(--fc-muted);
          font-size: .78rem;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 6px;
          display: block;
          font-weight: 600;
        }

        .fc-form-card .form-control,
        .fc-form-card .form-select,
        .fc-form-card textarea.form-control {
          background: var(--fc-bg-alt);
          border: 1px solid var(--fc-border);
          color: var(--fc-white);
          border-radius: 10px;
          padding: .65rem .9rem;
        }

        .fc-form-card .form-control::placeholder { color: #5f7370; }

        .fc-form-card .form-control:focus,
        .fc-form-card .form-select:focus {
          background: var(--fc-bg-alt);
          border-color: var(--fc-accent);
          color: var(--fc-white);
          box-shadow: 0 0 0 3px rgba(72, 213, 151, .15);
        }

        .fc-field-error { color: var(--fc-danger); font-size: .78rem; margin-top: 6px; }

        .fc-account-toggle {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .fc-toggle-pill {
          flex: 1;
          border: 1px solid var(--fc-border);
          background: var(--fc-bg-alt);
          color: var(--fc-muted);
          border-radius: 12px;
          padding: 12px 14px;
          cursor: pointer;
          text-align: left;
          transition: .2s ease;
        }

        .fc-toggle-pill strong { display: block; color: var(--fc-white); font-size: .88rem; margin-bottom: 2px; }
        .fc-toggle-pill span { font-size: .76rem; color: var(--fc-muted); }

        .fc-toggle-pill.active {
          border-color: var(--fc-accent);
          background: rgba(72, 213, 151, .1);
        }
        .fc-toggle-pill.active strong { color: var(--fc-accent); }

        .fc-alert {
          border-radius: 12px;
          padding: 14px 16px;
          font-size: .85rem;
          margin-bottom: 20px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .fc-alert-info {
          background: rgba(72, 213, 151, .1);
          border: 1px solid rgba(72, 213, 151, .35);
          color: var(--fc-white);
        }
        .fc-alert-info .fc-alert-icon { color: var(--fc-accent); }

        .fc-alert-success {
          background: rgba(72, 213, 151, .12);
          border: 1px solid rgba(72, 213, 151, .4);
          color: var(--fc-white);
        }

        .fc-name-fields {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height .3s ease, opacity .25s ease;
        }
        .fc-name-fields.open { max-height: 240px; opacity: 1; margin-top: 4px; }

        .btn-fc-primary {
          background: var(--fc-accent);
          border: none;
          color: #06231a;
          font-weight: 700;
          border-radius: 10px;
          padding: .75rem 1.6rem;
          transition: .2s ease;
        }
        .btn-fc-primary:hover { background: var(--fc-accent-dark); color: #06231a; }
        .btn-fc-primary:disabled { opacity: .6; cursor: not-allowed; }

        .fc-hint { color: var(--fc-muted); font-size: .78rem; margin-top: 6px; }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --fc-bg: #f6faf8;
          --fc-bg-alt: #eef4f1;
          --fc-card: #ffffff;
          --fc-border: rgba(0, 100, 60, 0.12);
          --fc-accent: #00a667;
          --fc-accent-dark: #00c07a;
          --fc-white: #10201b;
          --fc-muted: #5b7a70;
          --fc-danger: #d64545;
        }

        [data-h-theme="light"] .fc-form-card { box-shadow: 0 10px 30px rgba(0, 0, 0, .08); }
        [data-h-theme="light"] .fc-form-card .form-control::placeholder { color: #a9c2b8; }
        [data-h-theme="light"] .fc-form-card .form-control:focus,
        [data-h-theme="light"] .fc-form-card .form-select:focus {
          box-shadow: 0 0 0 3px rgba(0, 166, 103, .15);
        }
        [data-h-theme="light"] .fc-alert-info,
        [data-h-theme="light"] .fc-alert-success {
          background: rgba(0, 166, 103, .08);
          border-color: rgba(0, 166, 103, .3);
        }
      `}),e.jsxs("div",{className:"fc-page",children:[e.jsx("section",{className:"fc-list-header",children:e.jsxs("div",{className:"container p-4",children:[e.jsxs("div",{className:"fc-breadcrumb",children:[e.jsx(j,{href:route("user.projects.index"),children:"Projects"})," / Submit a project"]}),e.jsxs("h1",{children:["Submit a ",e.jsx("span",{children:"project"})]}),e.jsx("p",{children:"Tell us what you need done — talent on FutureConnect will start applying."})]})}),e.jsx("section",{className:"fc-form-wrap",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"fc-form-card",children:[f&&e.jsxs("div",{className:`fc-alert ${m?"fc-alert-info":"fc-alert-success"}`,children:[e.jsx("span",{className:"fc-alert-icon",children:e.jsx("i",{className:"fa-solid fa-circle-info"})}),e.jsx("span",{children:f})]}),e.jsxs("form",{onSubmit:g,children:[e.jsx("div",{className:"fc-section-title",children:"Project details"}),e.jsx("div",{className:"fc-section-sub",children:"What are you looking to get done?"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Project title"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Need a graphic designer for a logo",value:t.title,onChange:a=>o("title",a.target.value)}),r.title&&e.jsx("div",{className:"fc-field-error",children:r.title})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{className:"form-control",rows:5,placeholder:"Describe the scope, deliverables and timeline...",value:t.description,onChange:a=>o("description",a.target.value)}),r.description&&e.jsx("div",{className:"fc-field-error",children:r.description})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{children:"Category"}),e.jsxs("select",{className:"form-select",value:t.category_id,onChange:a=>o("category_id",a.target.value),children:[e.jsx("option",{value:"",children:"Select a category"}),i.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),r.category_id&&e.jsx("div",{className:"fc-field-error",children:r.category_id})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{children:"Location"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Kigali, Rwanda",value:t.location,onChange:a=>o("location",a.target.value)}),r.location&&e.jsx("div",{className:"fc-field-error",children:r.location})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{children:"Budget amount"}),e.jsx("input",{type:"number",min:"0",step:"0.01",className:"form-control",placeholder:"150000",value:t.budget_amount,onChange:a=>o("budget_amount",a.target.value)}),r.budget_amount&&e.jsx("div",{className:"fc-field-error",children:r.budget_amount})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{children:"Currency"}),e.jsxs("select",{className:"form-select",value:t.budget_currency,onChange:a=>o("budget_currency",a.target.value),children:[e.jsx("option",{value:"RWF",children:"RWF"}),e.jsx("option",{value:"USD",children:"USD"})]})]})]}),e.jsx("div",{className:"fc-divider"}),e.jsx("div",{className:"fc-section-title",children:"Your contact details"}),e.jsx("div",{className:"fc-section-sub",children:"We'll use this to attach the project to your account."}),e.jsxs("div",{className:"fc-account-toggle",children:[e.jsxs("button",{type:"button",className:`fc-toggle-pill ${s?"active":""}`,onClick:()=>n(!0),children:[e.jsx("strong",{children:"I already have an account"}),e.jsx("span",{children:"We'll match it to your email"})]}),e.jsxs("button",{type:"button",className:`fc-toggle-pill ${s?"":"active"}`,onClick:()=>n(!1),children:[e.jsx("strong",{children:"This is my first project"}),e.jsx("span",{children:"We'll create an account for you"})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Email address"}),e.jsx("input",{type:"email",className:"form-control",placeholder:"you@example.com",value:t.email,onChange:a=>o("email",a.target.value)}),r.email&&e.jsx("div",{className:"fc-field-error",children:r.email}),e.jsx("div",{className:"fc-hint",children:s?"If this matches an existing account, we'll attach the project to it automatically.":"We couldn't find an account yet? Add your name below and we'll create one and email you the login details."})]}),e.jsx("div",{className:`fc-name-fields ${!s||m?"open":""}`,children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{children:"First name"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Eric",value:t.first_name,onChange:a=>o("first_name",a.target.value)}),r.first_name&&e.jsx("div",{className:"fc-field-error",children:r.first_name})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Niyonzima",value:t.last_name,onChange:a=>o("last_name",a.target.value)}),r.last_name&&e.jsx("div",{className:"fc-field-error",children:r.last_name})]})]})}),e.jsx("button",{type:"submit",className:"btn btn-fc-primary mt-2",disabled:h,children:h?"Submitting...":"Submit project"})]})]})})})})})]})]})}y.layout=i=>e.jsx(N,{children:i,title:"Submit a Project",description:"Post a project and get matched with verified skills on FutureConnect."});export{y as default};
