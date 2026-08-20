import{u as R,r as n,j as e,H as E}from"./app-CgjB0zLb.js";import{G as L}from"./GuestLayout-B7urfbcg.js";const _=4,D={title:1,category_id:1,description:1,budget_min:2,budget_max:2,timeline:2,experience_level:2,skills:2,talent_id:3,client_name:4,company_name:4,client_email:4,client_phone:4};function H({categories:c,timelines:b,experienceLevels:N}){const{data:t,setData:s,post:w,processing:k,errors:l}=R({title:"",category_id:"",description:"",budget_type:"fixed",budget_min:"",budget_max:"",timeline:"",experience_level:"",skills:"",talent_id:"",client_name:"",company_name:"",client_email:"",client_phone:""}),[a,g]=n.useState(1),[h,x]=n.useState([]),[u,q]=n.useState(!1),[v,p]=n.useState(""),f=n.useRef(null),d=n.useRef(null),m=c.find(r=>String(r.id)===String(t.category_id)),S=b[t.timeline],y=h.find(r=>String(r.id)===String(t.talent_id));n.useEffect(()=>{const r=Object.keys(l);if(r.length===0)return;const i=r.map(o=>D[o]).filter(Boolean);i.length>0&&g(Math.min(...i))},[l]),n.useEffect(()=>{a===3&&C()},[a]);function C(){if(!t.category_id){x([]),p("Please choose a category in step 1 first.");return}f.current!==t.category_id&&(q(!0),p(""),fetch(`/quick-hire/talents-by-category/${t.category_id}`,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(r=>r.json()).then(r=>{f.current=t.category_id,q(!1),x(r.talents??[]),(!r.talents||r.talents.length===0)&&p("No available talent found in this category yet — that's okay, we'll manually match you after you submit.")}).catch(()=>{q(!1),x([]),p("Could not load suggestions right now — you can still submit and we'll match you manually.")}))}function z(r){s("category_id",r.target.value),f.current=null,s("talent_id","")}function F(r){s("talent_id",String(t.talent_id)===String(r.id)?"":r.id)}function j(){const r=d.current;if(!r)return!0;const i=r.querySelector(":invalid");return i?(i.reportValidity(),!1):!0}function T(){j()&&a<_&&g(a+1)}function P(){a>1&&g(a-1)}function $(r){r.preventDefault(),j()&&w(route("quick-hire.store"))}const B=t.budget_min||t.budget_max?`${t.budget_type} — ${t.budget_min||"0"} to ${t.budget_max||"—"} RWF`:t.budget_type;return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Quick Hire - Post a project, get matched fast"}),e.jsx("style",{children:`
                :root {
                    --qh-bg: #0e1618;
                    --qh-surface: #141d20;
                    --qh-surface2: #1a2428;
                    --qh-green: #48d597;
                    --qh-green-dim: rgba(0, 166, 103, .14);
                    --qh-green-glow: rgba(0, 166, 103, .28);
                    --qh-text: #e8f0ed;
                    --qh-muted: #7a9a8e;
                    --qh-border: rgba(0, 166, 103, .16);
                    --qh-border-h: rgba(0, 166, 103, .38);
                    --qh-radius: 14px;
                }

                .qh-page, .qh-page *, .qh-page *::before, .qh-page *::after {
                    box-sizing: border-box;
                }

                .qh-page {
                    background: var(--qh-bg);
                    font-family: 'DM Sans', sans-serif;
                    color: var(--qh-text);
                    padding: 50px 0 80px;
                }

                .qh-header {
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto 36px;
                }

                .qh-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(0, 166, 103, .1);
                    border: 1px solid rgba(0, 166, 103, .2);
                    border-radius: 99px;
                    padding: 5px 14px;
                    font-size: 11.5px;
                    color: var(--qh-green);
                    font-weight: 500;
                    margin-bottom: 16px;
                }

                .qh-pill::before {
                    content: '';
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--qh-green);
                    display: inline-block;
                }

                .qh-header h1 {
                    font-family: 'Syne', sans-serif;
                    font-weight: 800;
                    font-size: clamp(26px, 3.4vw, 36px);
                    letter-spacing: -1px;
                    color: #fff;
                    margin: 0 0 10px;
                }

                .qh-header p {
                    color: var(--qh-muted);
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                }

                .qh-wrap {
                    max-width: 760px;
                    margin: 0 auto;
                }

                .qh-progress {
                    display: flex;
                    align-items: center;
                    margin-bottom: 36px;
                }

                .qh-progress-step {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                }

                .qh-progress-circle {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: var(--qh-surface2);
                    border: 1px solid var(--qh-border);
                    color: var(--qh-muted);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    font-weight: 700;
                    z-index: 1;
                    transition: all .25s;
                }

                .qh-progress-label {
                    font-size: 11px;
                    color: var(--qh-muted);
                    margin-top: 8px;
                    text-align: center;
                    white-space: nowrap;
                }

                .qh-progress-line {
                    position: absolute;
                    top: 17px;
                    left: -50%;
                    width: 100%;
                    height: 2px;
                    background: var(--qh-border);
                    z-index: 0;
                }

                .qh-progress-step:first-child .qh-progress-line {
                    display: none;
                }

                .qh-progress-step.active .qh-progress-circle,
                .qh-progress-step.done .qh-progress-circle {
                    background: var(--qh-green);
                    border-color: var(--qh-green);
                    color: #06120d;
                }

                .qh-progress-step.active .qh-progress-label,
                .qh-progress-step.done .qh-progress-label {
                    color: var(--qh-text);
                }

                .qh-progress-step.done .qh-progress-line,
                .qh-progress-step.active .qh-progress-line {
                    background: var(--qh-green);
                }

                .qh-card {
                    background: var(--qh-surface);
                    border: 1px solid var(--qh-border);
                    border-radius: var(--qh-radius);
                    padding: 32px;
                }

                .qh-step { display: none; }
                .qh-step.active { display: block; animation: qhFade .25s ease; }

                @keyframes qhFade {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .qh-step-title {
                    font-family: 'Syne', sans-serif;
                    font-weight: 700;
                    font-size: 20px;
                    color: #fff;
                    margin: 0 0 4px;
                }

                .qh-step-sub {
                    color: var(--qh-muted);
                    font-size: 13px;
                    margin: 0 0 24px;
                }

                .qh-form-group { margin-bottom: 18px; }

                .qh-form-label {
                    font-size: 12.5px;
                    font-weight: 600;
                    color: var(--qh-muted);
                    margin-bottom: 6px;
                    display: block;
                }

                .qh-form-control, select.qh-form-control {
                    width: 100%;
                    background: var(--qh-surface2);
                    border: 1px solid var(--qh-border);
                    border-radius: 9px;
                    color: var(--qh-text);
                    font-size: 13.5px;
                    padding: 12px 14px;
                    outline: none;
                    transition: border-color .2s, background .2s;
                }

                .qh-form-control::placeholder { color: #3d5a52; }

                .qh-form-control:focus {
                    border-color: var(--qh-green);
                    background: rgba(0, 166, 103, .06);
                }

                textarea.qh-form-control { resize: vertical; min-height: 110px; }

                .qh-form-error {
                    color: #ff8a8a;
                    font-size: 11.5px;
                    margin-top: 5px;
                }

                .qh-row { display: flex; gap: 16px; flex-wrap: wrap; }
                .qh-row > div { flex: 1; min-width: 180px; }

                .qh-toggle-group {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 18px;
                }

                .qh-toggle {
                    flex: 1;
                    text-align: center;
                    padding: 12px;
                    border-radius: 9px;
                    border: 1px solid var(--qh-border);
                    background: var(--qh-surface2);
                    color: var(--qh-muted);
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all .2s;
                }

                .qh-toggle input { display: none; }

                .qh-toggle.active {
                    background: var(--qh-green-dim);
                    border-color: var(--qh-border-h);
                    color: #fff;
                }

                .qh-talent-loading {
                    text-align: center;
                    color: var(--qh-muted);
                    font-size: 13px;
                    padding: 30px 0;
                }

                .qh-talent-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 14px;
                }

                .qh-talent-card {
                    position: relative;
                    background: var(--qh-surface2);
                    border: 1px solid var(--qh-border);
                    border-radius: 12px;
                    padding: 16px;
                    display: flex;
                    gap: 12px;
                    align-items: flex-start;
                    cursor: pointer;
                    transition: all .2s;
                }

                .qh-talent-card:hover { border-color: var(--qh-border-h); }

                .qh-talent-card.selected {
                    border-color: var(--qh-green);
                    background: var(--qh-green-dim);
                }

                .qh-talent-card img {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    object-fit: cover;
                    flex-shrink: 0;
                    background: var(--qh-surface);
                }

                .qh-talent-name {
                    font-size: 13.5px;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 2px;
                }

                .qh-talent-meta {
                    font-size: 10.5px;
                    color: var(--qh-green);
                    font-weight: 600;
                    margin-bottom: 4px;
                    display: flex;
                    gap: 6px;
                    align-items: center;
                }

                .qh-talent-excerpt {
                    font-size: 11.5px;
                    color: var(--qh-muted);
                    line-height: 1.5;
                }

                .qh-talent-check {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    border: 1px solid var(--qh-border-h);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: transparent;
                    font-size: 10px;
                    background: var(--qh-surface);
                    transition: all .2s;
                }

                .qh-talent-card.selected .qh-talent-check {
                    background: var(--qh-green);
                    color: #06120d;
                }

                .qh-skip-note {
                    text-align: center;
                    margin-top: 16px;
                    font-size: 12px;
                    color: var(--qh-muted);
                }

                .qh-empty-talents {
                    text-align: center;
                    padding: 30px;
                    color: var(--qh-muted);
                    font-size: 13px;
                    border: 1px dashed var(--qh-border);
                    border-radius: 10px;
                }

                .qh-review {
                    background: var(--qh-surface2);
                    border: 1px solid var(--qh-border);
                    border-radius: 10px;
                    padding: 16px 18px;
                    margin-bottom: 22px;
                    font-size: 12.5px;
                    color: var(--qh-muted);
                }

                .qh-review div { margin-bottom: 6px; }
                .qh-review strong { color: var(--qh-text); }
                .qh-review div:last-child { margin-bottom: 0; }

                .qh-nav {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 28px;
                    gap: 12px;
                }

                .qh-btn-primary {
                    background: var(--qh-green);
                    color: #06120d;
                    font-weight: 700;
                    font-size: 13.5px;
                    border: none;
                    border-radius: 9px;
                    padding: 13px 26px;
                    cursor: pointer;
                    transition: background .2s;
                }

                .qh-btn-primary:hover { background: #00c07a; }
                .qh-btn-primary:disabled { opacity: .6; cursor: not-allowed; }

                .qh-btn-secondary {
                    background: transparent;
                    color: var(--qh-muted);
                    font-weight: 600;
                    font-size: 13.5px;
                    border: 1px solid var(--qh-border);
                    border-radius: 9px;
                    padding: 13px 26px;
                    cursor: pointer;
                    transition: all .2s;
                }

                .qh-btn-secondary:hover { color: var(--qh-text); border-color: var(--qh-border-h); }
                .qh-btn-secondary:disabled { opacity: .35; cursor: not-allowed; }

                @media (max-width: 640px) {
                    .qh-card { padding: 22px; }
                    .qh-talent-grid { grid-template-columns: 1fr; }
                    .qh-progress-label { display: none; }
                }
            `}),e.jsx("div",{className:"qh-page",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"qh-header",children:[e.jsx("div",{className:"qh-pill",children:"Quick Hire"}),e.jsx("h1",{children:"Post a project, get matched fast"}),e.jsx("p",{children:"Tell us what you need and we'll suggest talent from the right category — no lengthy job posting required."})]}),e.jsxs("div",{className:"qh-wrap",children:[e.jsx("div",{className:"qh-progress",children:["Project","Budget","Talent","Contact"].map((r,i)=>{const o=i+1;return e.jsxs("div",{className:`qh-progress-step ${o===a?"active":""} ${o<a?"done":""}`,children:[e.jsx("div",{className:"qh-progress-line"}),e.jsx("div",{className:"qh-progress-circle",children:o}),e.jsx("div",{className:"qh-progress-label",children:r})]},o)})}),e.jsx("div",{className:"qh-card",children:e.jsxs("form",{onSubmit:$,children:[e.jsxs("div",{className:`qh-step ${a===1?"active":""}`,ref:a===1?d:null,children:[e.jsx("h3",{className:"qh-step-title",children:"What do you need done?"}),e.jsx("p",{className:"qh-step-sub",children:"Give us the essentials — we'll use the category to find matching talent."}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_title",children:"Project Title"}),e.jsx("input",{type:"text",id:"qh_title",className:"qh-form-control",placeholder:"e.g. Build a landing page for our NGO",value:t.title,onChange:r=>s("title",r.target.value),required:!0}),l.title&&e.jsx("div",{className:"qh-form-error",children:l.title})]}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_category",children:"Category"}),e.jsxs("select",{id:"qh_category",className:"qh-form-control",value:t.category_id,onChange:z,required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select a category"}),c.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),l.category_id&&e.jsx("div",{className:"qh-form-error",children:l.category_id})]}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_description",children:"Project Description"}),e.jsx("textarea",{id:"qh_description",className:"qh-form-control",rows:"5",placeholder:"Describe the work, goals, and any specifics the talent should know...",value:t.description,onChange:r=>s("description",r.target.value),required:!0}),l.description&&e.jsx("div",{className:"qh-form-error",children:l.description})]})]}),e.jsxs("div",{className:`qh-step ${a===2?"active":""}`,ref:a===2?d:null,children:[e.jsx("h3",{className:"qh-step-title",children:"Budget & timeline"}),e.jsx("p",{className:"qh-step-sub",children:"This helps us match you with talent in the right range and availability."}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",children:"Budget Type"}),e.jsxs("div",{className:"qh-toggle-group",children:[e.jsxs("label",{className:`qh-toggle ${t.budget_type==="fixed"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"budget_type",value:"fixed",checked:t.budget_type==="fixed",onChange:()=>s("budget_type","fixed")})," Fixed Price"]}),e.jsxs("label",{className:`qh-toggle ${t.budget_type==="hourly"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"budget_type",value:"hourly",checked:t.budget_type==="hourly",onChange:()=>s("budget_type","hourly")})," Hourly Rate"]})]})]}),e.jsxs("div",{className:"qh-row",children:[e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_budget_min",children:"Min Budget (RWF)"}),e.jsx("input",{type:"number",min:"0",step:"1000",id:"qh_budget_min",className:"qh-form-control",placeholder:"e.g. 100000",value:t.budget_min,onChange:r=>s("budget_min",r.target.value)}),l.budget_min&&e.jsx("div",{className:"qh-form-error",children:l.budget_min})]}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_budget_max",children:"Max Budget (RWF)"}),e.jsx("input",{type:"number",min:"0",step:"1000",id:"qh_budget_max",className:"qh-form-control",placeholder:"e.g. 300000",value:t.budget_max,onChange:r=>s("budget_max",r.target.value)}),l.budget_max&&e.jsx("div",{className:"qh-form-error",children:l.budget_max})]})]}),e.jsxs("div",{className:"qh-row",children:[e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_timeline",children:"Timeline"}),e.jsxs("select",{id:"qh_timeline",className:"qh-form-control",value:t.timeline,onChange:r=>s("timeline",r.target.value),children:[e.jsx("option",{value:"",children:"Select timeline"}),Object.entries(b).map(([r,i])=>e.jsx("option",{value:r,children:i},r))]})]}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_experience",children:"Experience Level"}),e.jsxs("select",{id:"qh_experience",className:"qh-form-control",value:t.experience_level,onChange:r=>s("experience_level",r.target.value),children:[e.jsx("option",{value:"",children:"Select level"}),Object.entries(N).map(([r,i])=>e.jsx("option",{value:r,children:i},r))]})]})]}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_skills",children:"Skills Needed (comma separated)"}),e.jsx("input",{type:"text",id:"qh_skills",className:"qh-form-control",placeholder:"e.g. Laravel, React, UI Design",value:t.skills,onChange:r=>s("skills",r.target.value)})]})]}),e.jsxs("div",{className:`qh-step ${a===3?"active":""}`,ref:a===3?d:null,children:[e.jsx("h3",{className:"qh-step-title",children:"Suggested talent for you"}),e.jsx("p",{className:"qh-step-sub",children:m?`Based on "${m.name}", here's who's available.`:"Based on the category you selected, here's who's available."}),u&&e.jsx("div",{className:"qh-talent-loading",children:"Loading suggestions…"}),!u&&h.length>0&&e.jsx("div",{className:"qh-talent-grid",children:h.map(r=>e.jsxs("div",{className:`qh-talent-card ${String(t.talent_id)===String(r.id)?"selected":""}`,onClick:()=>F(r),children:[e.jsx("img",{src:r.image,alt:r.name}),e.jsxs("div",{children:[e.jsx("div",{className:"qh-talent-name",children:r.name}),e.jsxs("div",{className:"qh-talent-meta",children:[r.featured&&e.jsx("span",{children:"⭐ Featured"}),e.jsxs("span",{children:["Level ",r.level]}),!r.available&&e.jsx("span",{style:{color:"#7a9a8e"},children:"Busy"})]}),e.jsx("div",{className:"qh-talent-excerpt",children:r.excerpt||""})]}),e.jsx("div",{className:"qh-talent-check",children:"✓"})]},r.id))}),!u&&h.length===0&&v&&e.jsx("div",{className:"qh-empty-talents",children:v}),e.jsx("p",{className:"qh-skip-note",children:"Selecting a talent is optional — you can skip this step and we'll match you manually."})]}),e.jsxs("div",{className:`qh-step ${a===4?"active":""}`,ref:a===4?d:null,children:[e.jsx("h3",{className:"qh-step-title",children:"Your contact details"}),e.jsx("p",{className:"qh-step-sub",children:"So we can send your matches and next steps."}),e.jsxs("div",{className:"qh-row",children:[e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_client_name",children:"Full Name"}),e.jsx("input",{type:"text",id:"qh_client_name",className:"qh-form-control",placeholder:"Your name",value:t.client_name,onChange:r=>s("client_name",r.target.value),required:!0}),l.client_name&&e.jsx("div",{className:"qh-form-error",children:l.client_name})]}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_company_name",children:"Company (optional)"}),e.jsx("input",{type:"text",id:"qh_company_name",className:"qh-form-control",placeholder:"Organization name",value:t.company_name,onChange:r=>s("company_name",r.target.value)})]})]}),e.jsxs("div",{className:"qh-row",children:[e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_client_email",children:"Email"}),e.jsx("input",{type:"email",id:"qh_client_email",className:"qh-form-control",placeholder:"you@example.com",value:t.client_email,onChange:r=>s("client_email",r.target.value),required:!0}),l.client_email&&e.jsx("div",{className:"qh-form-error",children:l.client_email})]}),e.jsxs("div",{className:"qh-form-group",children:[e.jsx("label",{className:"qh-form-label",htmlFor:"qh_client_phone",children:"Phone (optional)"}),e.jsx("input",{type:"text",id:"qh_client_phone",className:"qh-form-control",placeholder:"+250 7xx xxx xxx",value:t.client_phone,onChange:r=>s("client_phone",r.target.value)})]})]}),e.jsxs("div",{className:"qh-review",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Project:"})," ",t.title||"—"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Category:"})," ",m?m.name:"—"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Budget:"})," ",B]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Timeline:"})," ",S||"—"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Preferred talent:"})," ",y?y.name:"Not selected — we'll match you manually"]})]})]}),e.jsxs("div",{className:"qh-nav",children:[e.jsx("button",{type:"button",className:"qh-btn-secondary",onClick:P,disabled:a===1,children:"Back"}),a<_?e.jsx("button",{type:"button",className:"qh-btn-primary",onClick:T,children:"Continue"}):e.jsx("button",{type:"submit",className:"qh-btn-primary",disabled:k,children:"Submit Request"})]})]})})]})]})})]})}H.layout=c=>e.jsx(L,{children:c,title:"Quick Hire - Post a project, get matched fast"});export{H as default};
