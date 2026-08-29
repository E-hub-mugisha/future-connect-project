import{d as m,r as p,u,j as e,H as b}from"./app-BO26Fp_i.js";import{G as v}from"./GuestLayout-RkVoz6LJ.js";const f=[{value:"corporate",label:"Corporate"},{value:"ngo",label:"NGO / Development Partner"},{value:"academic",label:"Academic / Training Institution"},{value:"government",label:"Government Agency"},{value:"other",label:"Other"}],j=[{value:"hiring",label:"Talent Hiring"},{value:"training",label:"Training Programs"},{value:"funding",label:"Program Funding"},{value:"internships",label:"Internships"},{value:"events",label:"Joint Events"},{value:"other_interest",label:"Other"}],y=["Partner One","Partner Two","Partner Three","Partner Four","Partner Five"];function N(){const{flash:i}=m().props,[o,l]=p.useState("dark");p.useEffect(()=>{const r=localStorage.getItem("fc-theme");r&&l(r)},[]);const{data:s,setData:t,post:c,processing:n,errors:a,reset:d}=u({organization_name:"",partnership_type:"",contact_name:"",contact_role:"",email:"",phone:"",website:"",interests:[],message:""}),h=r=>{t("interests",s.interests.includes(r)?s.interests.filter(x=>x!==r):[...s.interests,r])},g=r=>{r.preventDefault(),c("/partnerships/apply",{onSuccess:()=>d()})};return e.jsxs("div",{className:"partnerships-page","data-theme":o,children:[e.jsx(b,{title:"Partnerships — Future Connect"}),e.jsx("style",{children:`
                .partnerships-page {
                    --p-bg-primary: #0e1618;
                    --p-bg-secondary: #131d20;
                    --p-bg-card: #172226;
                    --p-bg-elevated: #1c2a2e;
                    --p-border-color: rgba(255, 255, 255, 0.08);
                    --p-border-hover: rgba(0, 166, 103, 0.4);
                    --p-text-primary: #f2f5f4;
                    --p-text-secondary: #9fb0ae;
                    --p-text-muted: #6b7c7a;
                    --p-accent: #00a667;
                    --p-accent-hover: #00c278;
                    --p-accent-soft: rgba(0, 166, 103, 0.12);
                    --p-accent-border: rgba(0, 166, 103, 0.35);
                    --p-danger: #e5484d;
                    --p-radius-sm: 8px;
                    --p-radius-md: 14px;
                    --p-radius-lg: 20px;
                    --p-shadow-card: 0 10px 30px rgba(0, 0, 0, 0.35);
                    --p-font-system: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

                    font-family: var(--p-font-system);
                    background: var(--p-bg-primary);
                    color: var(--p-text-primary);
                    -webkit-font-smoothing: antialiased;
                    line-height: 1.6;
                    transition: background 0.25s ease, color 0.25s ease;
                }

                .partnerships-page[data-theme="light"] {
                    --p-bg-primary: #f6f9f8;
                    --p-bg-secondary: #ffffff;
                    --p-bg-card: #ffffff;
                    --p-bg-elevated: #eef3f1;
                    --p-border-color: rgba(14, 22, 24, 0.08);
                    --p-border-hover: rgba(0, 166, 103, 0.35);
                    --p-text-primary: #0e1618;
                    --p-text-secondary: #4b5b58;
                    --p-text-muted: #7c8b89;
                    --p-accent: #00a667;
                    --p-accent-hover: #00915b;
                    --p-accent-soft: rgba(0, 166, 103, 0.08);
                    --p-accent-border: rgba(0, 166, 103, 0.3);
                    --p-shadow-card: 0 10px 30px rgba(14, 22, 24, 0.08);
                }

                .partnerships-page * { box-sizing: border-box; }
                .partnerships-page a { color: inherit; text-decoration: none; }

                .partnerships-page .container {
                    max-width: 1160px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                /* HERO */
                .partnerships-page .hero {
                    padding: 88px 0 64px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .partnerships-page .hero::before {
                    content: "";
                    position: absolute;
                    top: -120px; left: 50%;
                    transform: translateX(-50%);
                    width: 600px; height: 320px;
                    background: radial-gradient(circle, rgba(0,166,103,0.18), transparent 70%);
                    pointer-events: none;
                }
                .partnerships-page .eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 14px;
                    border-radius: 999px;
                    background: var(--p-accent-soft);
                    border: 1px solid var(--p-accent-border);
                    color: var(--p-accent);
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                .partnerships-page .hero h1 {
                    font-size: 44px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    margin: 0 0 16px;
                    position: relative;
                }
                .partnerships-page .hero h1 span { color: var(--p-accent); }
                .partnerships-page .hero p {
                    max-width: 620px;
                    margin: 0 auto;
                    color: var(--p-text-secondary);
                    font-size: 17px;
                    position: relative;
                }
                .partnerships-page .hero-cta { margin-top: 32px; display: flex; gap: 14px; justify-content: center; position: relative; }

                .partnerships-page .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 13px 26px;
                    border-radius: var(--p-radius-sm);
                    font-weight: 600;
                    font-size: 14.5px;
                    cursor: pointer;
                    border: 1px solid transparent;
                    transition: all 0.2s ease;
                }
                .partnerships-page .btn-primary { background: var(--p-accent); color: #061410; }
                .partnerships-page .btn-primary:hover { background: var(--p-accent-hover); transform: translateY(-1px); }
                .partnerships-page .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
                .partnerships-page .btn-ghost { background: transparent; border-color: var(--p-border-color); color: var(--p-text-primary); }
                .partnerships-page .btn-ghost:hover { border-color: var(--p-border-hover); }

                /* SECTION HEADER */
                .partnerships-page section { padding: 72px 0; }
                .partnerships-page .section-head { text-align: center; max-width: 620px; margin: 0 auto 44px; }
                .partnerships-page .section-head .tag {
                    color: var(--p-accent); font-size: 13px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; display: block;
                }
                .partnerships-page .section-head h2 { font-size: 30px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 10px; }
                .partnerships-page .section-head p { color: var(--p-text-secondary); font-size: 15.5px; margin: 0; }

                /* PARTNER TYPE CARDS */
                .partnerships-page .type-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                .partnerships-page .type-card {
                    background: var(--p-bg-card);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-lg);
                    padding: 30px 26px;
                    transition: border-color 0.2s ease, transform 0.2s ease;
                }
                .partnerships-page .type-card:hover { border-color: var(--p-border-hover); transform: translateY(-3px); }
                .partnerships-page .type-icon {
                    width: 46px; height: 46px;
                    border-radius: 12px;
                    background: var(--p-accent-soft);
                    border: 1px solid var(--p-accent-border);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 20px;
                    margin-bottom: 18px;
                    color: var(--p-accent);
                }
                .partnerships-page .type-card h3 { font-size: 18px; margin: 0 0 10px; font-weight: 650; }
                .partnerships-page .type-card p { color: var(--p-text-secondary); font-size: 14.5px; margin: 0 0 14px; }
                .partnerships-page .type-card ul { margin: 0; padding-left: 18px; color: var(--p-text-secondary); font-size: 14px; }
                .partnerships-page .type-card li { margin-bottom: 6px; }

                /* BENEFITS */
                .partnerships-page .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 18px;
                }
                .partnerships-page .benefit-card {
                    background: var(--p-bg-secondary);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-md);
                    padding: 22px;
                    text-align: left;
                }
                .partnerships-page .benefit-card .num {
                    font-size: 13px; font-weight: 700; color: var(--p-accent);
                    margin-bottom: 10px; display: block;
                }
                .partnerships-page .benefit-card h4 { font-size: 15.5px; margin: 0 0 6px; font-weight: 650; }
                .partnerships-page .benefit-card p { font-size: 13.5px; color: var(--p-text-secondary); margin: 0; }

                /* PARTNER LOGOS */
                .partnerships-page .logos-wrap {
                    background: var(--p-bg-secondary);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-lg);
                    padding: 40px;
                }
                .partnerships-page .logos-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                    align-items: center;
                }
                .partnerships-page .logo-slot {
                    aspect-ratio: 3 / 1.4;
                    background: var(--p-bg-elevated);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-sm);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--p-text-muted);
                    font-size: 12.5px;
                    font-weight: 600;
                    text-align: center;
                    padding: 8px;
                }

                /* FORM */
                .partnerships-page .form-wrap {
                    display: grid;
                    grid-template-columns: 0.9fr 1.4fr;
                    gap: 40px;
                    align-items: start;
                }
                .partnerships-page .form-aside h2 { font-size: 28px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
                .partnerships-page .form-aside p { color: var(--p-text-secondary); font-size: 15px; margin-bottom: 24px; }
                .partnerships-page .aside-item {
                    display: flex; gap: 12px; align-items: flex-start;
                    margin-bottom: 18px; font-size: 14px; color: var(--p-text-secondary);
                }
                .partnerships-page .aside-icon {
                    width: 30px; height: 30px; border-radius: 8px;
                    background: var(--p-accent-soft); border: 1px solid var(--p-accent-border);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--p-accent); font-size: 14px; flex-shrink: 0;
                }

                .partnerships-page .card-form {
                    background: var(--p-bg-card);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-lg);
                    padding: 34px;
                    box-shadow: var(--p-shadow-card);
                }
                .partnerships-page .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .partnerships-page .field { margin-bottom: 18px; }
                .partnerships-page .field label {
                    display: block; font-size: 13.5px; font-weight: 600;
                    color: var(--p-text-secondary); margin-bottom: 7px;
                }
                .partnerships-page .field label .req { color: var(--p-accent); }
                .partnerships-page .field input,
                .partnerships-page .field select,
                .partnerships-page .field textarea {
                    width: 100%;
                    background: var(--p-bg-elevated);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-sm);
                    padding: 11px 14px;
                    color: var(--p-text-primary);
                    font-family: var(--p-font-system);
                    font-size: 14.5px;
                    outline: none;
                    transition: border-color 0.2s ease;
                }
                .partnerships-page .field input:focus,
                .partnerships-page .field select:focus,
                .partnerships-page .field textarea:focus { border-color: var(--p-accent); }
                .partnerships-page .field textarea { resize: vertical; min-height: 100px; }
                .partnerships-page .field small.error { color: var(--p-danger); font-size: 12.5px; display: block; margin-top: 6px; }

                .partnerships-page .checkbox-group {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                    margin-top: 6px;
                }
                .partnerships-page .checkbox-item {
                    display: flex; align-items: center; gap: 9px;
                    background: var(--p-bg-elevated);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-sm);
                    padding: 10px 12px;
                    font-size: 13.5px;
                    color: var(--p-text-secondary);
                    cursor: pointer;
                }
                .partnerships-page .checkbox-item input { width: auto; accent-color: var(--p-accent); }

                .partnerships-page .form-submit {
                    display: flex; align-items: center; justify-content: space-between;
                    margin-top: 24px;
                }
                .partnerships-page .form-note { font-size: 12.5px; color: var(--p-text-muted); max-width: 260px; }

                .partnerships-page .status-banner {
                    padding: 14px 18px;
                    border-radius: var(--p-radius-sm);
                    font-size: 14px;
                    margin-bottom: 24px;
                    border: 1px solid;
                }
                .partnerships-page .status-banner.success {
                    background: var(--p-accent-soft); border-color: var(--p-accent-border); color: var(--p-accent);
                }
                .partnerships-page .status-banner.error {
                    background: rgba(229, 72, 77, 0.1); border-color: rgba(229, 72, 77, 0.35); color: var(--p-danger);
                }

                .partnerships-page footer {
                    border-top: 1px solid var(--p-border-color);
                    padding: 32px 0;
                    text-align: center;
                    color: var(--p-text-muted);
                    font-size: 13px;
                }

                @media (max-width: 860px) {
                    .partnerships-page .type-grid { grid-template-columns: 1fr; }
                    .partnerships-page .benefits-grid { grid-template-columns: 1fr 1fr; }
                    .partnerships-page .logos-grid { grid-template-columns: repeat(2, 1fr); }
                    .partnerships-page .form-wrap { grid-template-columns: 1fr; }
                    .partnerships-page .form-row, .partnerships-page .checkbox-group { grid-template-columns: 1fr; }
                    .partnerships-page .hero h1 { font-size: 32px; }
                }
            `}),e.jsx("header",{className:"hero",children:e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"eyebrow",children:"🤝 Partner With Future Connect"}),e.jsxs("h1",{children:["Build Rwanda's talent",e.jsx("br",{}),"ecosystem ",e.jsx("span",{children:"with us"})]}),e.jsx("p",{children:"We collaborate with corporates, NGOs, and institutions to connect skilled talent with real opportunity — through hiring pipelines, training programs, and shared initiatives across Rwanda."}),e.jsxs("div",{className:"hero-cta",children:[e.jsx("a",{href:"#apply",className:"btn btn-primary",children:"Become a Partner"}),e.jsx("a",{href:"#types",className:"btn btn-ghost",children:"Explore Partnership Types"})]})]})}),e.jsx("section",{id:"types",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("span",{className:"tag",children:"Partnership Tracks"}),e.jsx("h2",{children:"Ways to work with us"}),e.jsx("p",{children:"Whether you're a business, a development partner, or a training institution, there's a track built for your goals."})]}),e.jsxs("div",{className:"type-grid",children:[e.jsxs("div",{className:"type-card",children:[e.jsx("div",{className:"type-icon",children:"🏢"}),e.jsx("h3",{children:"Corporate Partners"}),e.jsx("p",{children:"For companies looking to hire verified talent, sponsor programs, or co-brand initiatives."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Priority access to vetted talent pools"}),e.jsx("li",{children:"Co-branded hiring campaigns"}),e.jsx("li",{children:"Internship & apprenticeship pipelines"})]})]}),e.jsxs("div",{className:"type-card",children:[e.jsx("div",{className:"type-icon",children:"🌍"}),e.jsx("h3",{children:"NGOs & Development Partners"}),e.jsx("p",{children:"For organizations funding skills development, employment access, or youth economic inclusion."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Joint program design & delivery"}),e.jsx("li",{children:"Shared monitoring & reporting"}),e.jsx("li",{children:"Community-level outreach support"})]})]}),e.jsxs("div",{className:"type-card",children:[e.jsx("div",{className:"type-icon",children:"🎓"}),e.jsx("h3",{children:"Academic & Training Institutions"}),e.jsx("p",{children:"For universities, TVET schools, and training providers building career pathways for graduates."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Graduate placement partnerships"}),e.jsx("li",{children:"Curriculum & industry feedback loops"}),e.jsx("li",{children:"Joint certification programs"})]})]})]})]})}),e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("span",{className:"tag",children:"Why Partner With Us"}),e.jsx("h2",{children:"What partners get"})]}),e.jsxs("div",{className:"benefits-grid",children:[e.jsxs("div",{className:"benefit-card",children:[e.jsx("span",{className:"num",children:"01"}),e.jsx("h4",{children:"Verified Talent Network"}),e.jsx("p",{children:"Access a growing pool of vetted, skills-assessed candidates across sectors."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("span",{className:"num",children:"02"}),e.jsx("h4",{children:"Local Reach"}),e.jsx("p",{children:"Tap into our presence across Rwanda's districts, from Kigali to rural communities."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("span",{className:"num",children:"03"}),e.jsx("h4",{children:"Impact Reporting"}),e.jsx("p",{children:"Transparent placement and outcome data for your CSR or donor reporting needs."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("span",{className:"num",children:"04"}),e.jsx("h4",{children:"Co-Branded Visibility"}),e.jsx("p",{children:"Featured placement on our platform and joint communications on shared initiatives."})]})]})]})}),e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("span",{className:"tag",children:"Our Network"}),e.jsx("h2",{children:"Trusted by organizations across Rwanda"})]}),e.jsx("div",{className:"logos-wrap",children:e.jsx("div",{className:"logos-grid",children:y.map(r=>e.jsx("div",{className:"logo-slot",children:r},r))})})]})}),e.jsx("section",{id:"apply",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"form-wrap",children:[e.jsxs("div",{className:"form-aside",children:[e.jsx("span",{className:"eyebrow",style:{marginBottom:16},children:"Application"}),e.jsx("h2",{children:"Let's build something together"}),e.jsx("p",{children:"Tell us about your organization and how you'd like to collaborate. Our partnerships team typically responds within 3–5 business days."}),e.jsxs("div",{className:"aside-item",children:[e.jsx("div",{className:"aside-icon",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:"var(--p-text-primary)"},children:"Quick review"}),e.jsx("br",{}),"We assess every application against our active program priorities."]})]}),e.jsxs("div",{className:"aside-item",children:[e.jsx("div",{className:"aside-icon",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:"var(--p-text-primary)"},children:"No obligation"}),e.jsx("br",{}),"Submitting an application starts a conversation — not a commitment."]})]}),e.jsxs("div",{className:"aside-item",children:[e.jsx("div",{className:"aside-icon",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:"var(--p-text-primary)"},children:"Direct contact"}),e.jsx("br",{}),"A member of our partnerships team will reach out personally."]})]})]}),e.jsxs("div",{className:"card-form",children:[(i==null?void 0:i.success)&&e.jsx("div",{className:"status-banner success",children:i.success}),Object.keys(a).length>0&&e.jsx("div",{className:"status-banner error",children:"Please fix the errors below and resubmit."}),e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Organization Name ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",value:s.organization_name,onChange:r=>t("organization_name",r.target.value),required:!0}),a.organization_name&&e.jsx("small",{className:"error",children:a.organization_name})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Partnership Type ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{value:s.partnership_type,onChange:r=>t("partnership_type",r.target.value),required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select type"}),f.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))]}),a.partnership_type&&e.jsx("small",{className:"error",children:a.partnership_type})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Contact Person ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",value:s.contact_name,onChange:r=>t("contact_name",r.target.value),required:!0}),a.contact_name&&e.jsx("small",{className:"error",children:a.contact_name})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Role / Title"}),e.jsx("input",{type:"text",value:s.contact_role,onChange:r=>t("contact_role",r.target.value)})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",value:s.email,onChange:r=>t("email",r.target.value),required:!0}),a.email&&e.jsx("small",{className:"error",children:a.email})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Phone Number ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"tel",value:s.phone,onChange:r=>t("phone",r.target.value),placeholder:"+250 7__ ___ ___",required:!0}),a.phone&&e.jsx("small",{className:"error",children:a.phone})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Organization Website"}),e.jsx("input",{type:"url",value:s.website,onChange:r=>t("website",r.target.value),placeholder:"https://"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Areas of Interest"}),e.jsx("div",{className:"checkbox-group",children:j.map(r=>e.jsxs("label",{className:"checkbox-item",children:[e.jsx("input",{type:"checkbox",checked:s.interests.includes(r.value),onChange:()=>h(r.value)}),r.label]},r.value))})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Tell us about your proposal ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("textarea",{value:s.message,onChange:r=>t("message",r.target.value),placeholder:"What would you like to achieve through this partnership?",required:!0}),a.message&&e.jsx("small",{className:"error",children:a.message})]}),e.jsxs("div",{className:"form-submit",children:[e.jsx("div",{className:"form-note",children:"By submitting, you agree to be contacted by our partnerships team regarding this application."}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:n,children:n?"Submitting…":"Submit Application"})]})]})]})]})})}),e.jsx("footer",{children:e.jsxs("div",{className:"container",children:["© ",new Date().getFullYear()," Future Connect. All rights reserved."]})})]})}N.layout=i=>e.jsx(v,{children:i});export{N as default};
