import{r as s,u as B,j as e,H as M,L as d}from"./app-C-Atdk99.js";const b="fc-theme";function F(){if(typeof window>"u")return"dark";const a=localStorage.getItem(b);return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}const u=["Use 8+ chars, numbers & symbols","Weak — keep going","Fair — add numbers or symbols","Good — add a special character","Strong password ✓"],W=["","weak","fair","good","strong"];function A(a){let n=0;return a.length>=8&&n++,/[A-Z]/.test(a)&&n++,/[0-9]/.test(a)&&n++,/[^A-Za-z0-9]/.test(a)&&n++,n}const m=[{key:"talent",title:"Talent",subtitle:"Showcase your skills & get discovered",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2L12 2z"})})},{key:"seller",title:"Seller",subtitle:"List products or services & reach buyers",icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 3h18l-1.5 9h-15L3 3z"}),e.jsx("circle",{cx:"9",cy:"20",r:"1.5"}),e.jsx("circle",{cx:"17",cy:"20",r:"1.5"})]})},{key:"user",title:"Regular User",subtitle:"Browse, connect, and explore the platform",icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}];function E({categories:a=[]}){const[n,v]=s.useState(F),[x,j]=s.useState(!1),[h,y]=s.useState(!1),[g,f]=s.useState("role"),{data:i,setData:o,post:w,processing:c,errors:t,reset:k}=B({role:"",name:"",email:"",phone:"",password:"",password_confirmation:"",terms:!1,talent_address:"",talent_language:"",category_id:"",talent_description:"",company_name:"",seller_address:"",seller_description:""});s.useEffect(()=>{document.documentElement.setAttribute("data-theme",n),localStorage.setItem(b,n)},[n]);const N=s.useCallback(()=>{v(r=>r==="dark"?"light":"dark")},[]),l=s.useMemo(()=>A(i.password),[i.password]),_=i.password.length===0?u[0]:u[l],C=r=>{o("role",r),f("form")},L=()=>f("role"),z=r=>{r.preventDefault(),w(route("register"),{onFinish:()=>k("password","password_confirmation")})},p=m.find(r=>r.key===i.role);return e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"Register | Future Connect"}),e.jsxs("div",{className:"page",children:[e.jsx("div",{className:"orb orb-1"}),e.jsx("div",{className:"orb orb-2"}),e.jsx("div",{className:"top-nav",children:e.jsx("button",{type:"button",className:"theme-btn",onClick:N,"aria-label":"Toggle light / dark theme",title:n==="dark"?"Switch to light mode":"Switch to dark mode",children:n==="dark"?e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})}),e.jsx("div",{className:"back-nav",children:g==="form"?e.jsxs("button",{type:"button",className:"back-btn",onClick:L,children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),e.jsx("polyline",{points:"12 19 5 12 12 5"})]}),e.jsx("span",{children:"Change role"})]}):e.jsxs(d,{href:"/",className:"back-btn",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),e.jsx("polyline",{points:"12 19 5 12 12 5"})]}),e.jsx("span",{children:"Back"})]})}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"panel-left",children:[e.jsx("div",{className:"dots",children:Array.from({length:20}).map((r,S)=>e.jsx("span",{},S))}),e.jsxs(d,{href:route("user.home"),className:"fc-logo-lockup",children:[e.jsx("div",{className:"fc-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-logo-wordmark",children:"Future Connect"}),e.jsx("p",{className:"fc-logo-tagline",children:"Empowering Stories. Real Impact."})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"pill",children:"Join 8K+ Professionals"}),e.jsxs("div",{className:"tagline",children:[e.jsxs("h2",{children:["Start your",e.jsx("br",{}),e.jsx("em",{children:"journey"}),e.jsx("br",{}),"today."]}),e.jsx("p",{children:"Create your free account and get discovered by verified employers across Rwanda."})]})]}),e.jsxs("div",{className:"features",children:[e.jsxs("div",{className:"feat",children:[e.jsx("div",{className:"feat-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),e.jsxs("div",{className:"feat-text",children:[e.jsx("strong",{children:"Verified Profiles"}),e.jsx("span",{children:"Stand out to employers"})]})]}),e.jsxs("div",{className:"feat",children:[e.jsx("div",{className:"feat-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),e.jsxs("div",{className:"feat-text",children:[e.jsx("strong",{children:"Rwanda-Wide"}),e.jsx("span",{children:"Opportunities nationwide"})]})]}),e.jsxs("div",{className:"feat",children:[e.jsx("div",{className:"feat-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),e.jsxs("div",{className:"feat-text",children:[e.jsx("strong",{children:"Secure Platform"}),e.jsx("span",{children:"Your data, protected"})]})]}),e.jsxs("div",{className:"feat",children:[e.jsx("div",{className:"feat-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]})}),e.jsxs("div",{className:"feat-text",children:[e.jsx("strong",{children:"Career Growth"}),e.jsx("span",{children:"Courses & mentorship"})]})]})]})]}),e.jsx("div",{className:"panel-right",children:g==="role"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-head",children:[e.jsx("div",{className:"eyebrow",children:"Create Account"}),e.jsx("h1",{children:"How will you use Future Connect?"}),e.jsx("p",{children:"Pick the option that fits you best — you can always update this later."})]}),e.jsx("div",{className:"role-grid",children:m.map(r=>e.jsxs("button",{type:"button",className:"role-card",onClick:()=>C(r.key),children:[e.jsx("div",{className:"role-icon",children:r.icon}),e.jsxs("div",{className:"role-text",children:[e.jsx("strong",{children:r.title}),e.jsx("span",{children:r.subtitle})]}),e.jsxs("svg",{className:"role-arrow",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]},r.key))}),e.jsxs("div",{className:"role-note",children:["Not a talent or seller? Apart from those two options, everyone else registers as a"," ",e.jsx("strong",{children:"Regular User"})," — you can browse, connect, and use the platform freely."]}),e.jsxs("div",{className:"login-row",children:["Already have an account?"," ",e.jsx(d,{href:route("login"),children:"Sign In"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-head",children:[e.jsxs("div",{className:"eyebrow",children:[p==null?void 0:p.title," Account"]}),e.jsxs("h1",{children:[i.role==="talent"&&"Set up your Talent profile",i.role==="seller"&&"Set up your Seller account",i.role==="user"&&"Create your account"]}),e.jsx("p",{children:"Fill in your details to get started for free"})]}),e.jsxs("form",{onSubmit:z,children:[e.jsxs("div",{className:"fields-grid",children:[e.jsxs("div",{className:"field field-full",children:[e.jsx("label",{htmlFor:"name",children:"Your Name"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),e.jsx("input",{id:"name",className:`fc-input ${t.name?"is-invalid":""}`,type:"text",name:"name",value:i.name,onChange:r=>o("name",r.target.value),placeholder:"Jean Mugisha",required:!0,autoComplete:"given-name"})]}),t.name&&e.jsx("div",{className:"field-error",children:t.name})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"email",children:"Email Address"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),e.jsx("input",{id:"email",className:`fc-input ${t.email?"is-invalid":""}`,type:"email",name:"email",value:i.email,onChange:r=>o("email",r.target.value),placeholder:"you@example.com",required:!0,autoComplete:"email"})]}),t.email&&e.jsx("div",{className:"field-error",children:t.email})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"phone",children:"Phone Number"}),e.jsxs("div",{className:"input-wrap",children:[e.jsx("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})}),e.jsx("input",{id:"phone",className:`fc-input ${t.phone?"is-invalid":""}`,type:"tel",name:"phone",value:i.phone,onChange:r=>o("phone",r.target.value),placeholder:"+250 7XX XXX XXX",autoComplete:"tel"})]}),t.phone&&e.jsx("div",{className:"field-error",children:t.phone})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("input",{id:"password",className:`fc-input ${t.password?"is-invalid":""}`,type:x?"text":"password",name:"password",value:i.password,onChange:r=>o("password",r.target.value),placeholder:"••••••••",required:!0,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"eye-btn",onClick:()=>j(r=>!r),"aria-label":"Toggle password",children:x?e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}):e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})})]}),e.jsx("div",{className:"strength-bar",children:[0,1,2,3].map(r=>e.jsx("span",{className:`strength-seg ${r<l?W[l]:""}`},r))}),e.jsx("div",{className:"strength-label",style:{color:i.password.length===0?"var(--muted)":["","#e07070","#e0a045","#5ab4e0","var(--green)"][l]},children:_}),t.password&&e.jsx("div",{className:"field-error",children:t.password})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"password_confirmation",children:"Confirm Password"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("input",{id:"password_confirmation",className:"fc-input",type:h?"text":"password",name:"password_confirmation",value:i.password_confirmation,onChange:r=>o("password_confirmation",r.target.value),placeholder:"••••••••",required:!0,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"eye-btn",onClick:()=>y(r=>!r),"aria-label":"Toggle confirm password",children:h?e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}):e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})})]}),t.password_confirmation&&e.jsx("div",{className:"field-error",children:t.password_confirmation})]}),i.role==="talent"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"field-full role-section-label",children:"Talent Details"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"talent_address",children:"Address"}),e.jsx("input",{id:"talent_address",className:`fc-input fc-input--plain ${t.talent_address?"is-invalid":""}`,type:"text",value:i.talent_address,onChange:r=>o("talent_address",r.target.value),placeholder:"Kigali, Gasabo",required:!0}),t.talent_address&&e.jsx("div",{className:"field-error",children:t.talent_address})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"talent_language",children:"Language"}),e.jsx("input",{id:"talent_language",className:`fc-input fc-input--plain ${t.talent_language?"is-invalid":""}`,type:"text",value:i.talent_language,onChange:r=>o("talent_language",r.target.value),placeholder:"Kinyarwanda, English",required:!0}),t.talent_language&&e.jsx("div",{className:"field-error",children:t.talent_language})]}),e.jsxs("div",{className:"field field-full",children:[e.jsx("label",{htmlFor:"category_id",children:"Category"}),e.jsxs("select",{id:"category_id",className:`fc-input fc-input--plain ${t.category_id?"is-invalid":""}`,value:i.category_id,onChange:r=>o("category_id",r.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select a category"}),a.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),t.category_id&&e.jsx("div",{className:"field-error",children:t.category_id})]}),e.jsxs("div",{className:"field field-full",children:[e.jsx("label",{htmlFor:"talent_description",children:"Short Bio"}),e.jsx("textarea",{id:"talent_description",className:`fc-input fc-input--plain fc-textarea ${t.talent_description?"is-invalid":""}`,value:i.talent_description,onChange:r=>o("talent_description",r.target.value),placeholder:"Tell employers a bit about your skills and experience...",rows:3}),t.talent_description&&e.jsx("div",{className:"field-error",children:t.talent_description})]})]}),i.role==="seller"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"field-full role-section-label",children:"Seller Details"}),e.jsxs("div",{className:"field field-full",children:[e.jsx("label",{htmlFor:"company_name",children:"Company / Business Name"}),e.jsx("input",{id:"company_name",className:`fc-input fc-input--plain ${t.company_name?"is-invalid":""}`,type:"text",value:i.company_name,onChange:r=>o("company_name",r.target.value),placeholder:"Terra Real Estate Ltd",required:!0}),t.company_name&&e.jsx("div",{className:"field-error",children:t.company_name})]}),e.jsxs("div",{className:"field field-full",children:[e.jsx("label",{htmlFor:"seller_address",children:"Business Address"}),e.jsx("input",{id:"seller_address",className:`fc-input fc-input--plain ${t.seller_address?"is-invalid":""}`,type:"text",value:i.seller_address,onChange:r=>o("seller_address",r.target.value),placeholder:"Kigali, Nyarugenge",required:!0}),t.seller_address&&e.jsx("div",{className:"field-error",children:t.seller_address})]}),e.jsxs("div",{className:"field field-full",children:[e.jsx("label",{htmlFor:"seller_description",children:"Business Description"}),e.jsx("textarea",{id:"seller_description",className:`fc-input fc-input--plain fc-textarea ${t.seller_description?"is-invalid":""}`,value:i.seller_description,onChange:r=>o("seller_description",r.target.value),placeholder:"What does your business sell or offer?",rows:3}),t.seller_description&&e.jsx("div",{className:"field-error",children:t.seller_description})]})]}),e.jsxs("div",{className:"field field-full",children:[e.jsxs("div",{className:"terms-row",children:[e.jsx("input",{type:"checkbox",id:"terms",name:"terms",checked:i.terms,onChange:r=>o("terms",r.target.checked),required:!0}),e.jsxs("label",{htmlFor:"terms",children:["I agree to the"," ",e.jsx("a",{href:"#",children:"Terms of Service"})," ","and"," ",e.jsx("a",{href:"#",children:"Privacy Policy"})," ","of Future Connect"]})]}),t.terms&&e.jsx("div",{className:"field-error",children:t.terms})]})]}),e.jsx("button",{className:"btn",type:"submit",disabled:c,children:e.jsxs("span",{className:"btn-inner",children:[c?"Creating account…":"Create Account",!c&&e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),e.jsxs("div",{className:"login-row",children:["Already have an account?"," ",e.jsx(d,{href:route("login"),children:"Sign In"})]})]})})]})]}),e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                :root, [data-theme="dark"] {
                    --bg: #0e1618; --surface: #131e21; --border: #1f2f33;
                    --green: #48d597; --green-hover: #00bd76;
                    --green-dim: rgba(0, 166, 103, .12); --green-glow: rgba(0, 166, 103, .28);
                    --text: #e8f0ef; --muted: #6a8a85; --input-bg: #0b1315;
                    --card-shadow: rgba(0, 0, 0, .4);
                    --grid-line: rgba(0, 166, 103, .04);
                    --orb-1: rgba(0,166,103,.1);
                    --orb-2: rgba(0,166,103,.07);
                    --left-grad: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
                    --panel-white-overlay: rgba(255,255,255,.09);
                    --field-error: #e07070;
                }

                [data-theme="light"] {
                    --bg: #f4f9f7; --surface: #ffffff; --border: #dde8e4;
                    --green: #00a65e; --green-hover: #00bd76;
                    --green-dim: rgba(0, 166, 94, .10); --green-glow: rgba(0, 166, 94, .22);
                    --text: #0e1618; --muted: #5c7570; --input-bg: #f3f8f6;
                    --card-shadow: rgba(20, 50, 40, .12);
                    --grid-line: rgba(0, 166, 94, .05);
                    --orb-1: rgba(0,166,94,.08);
                    --orb-2: rgba(0,166,94,.06);
                    --left-grad: linear-gradient(145deg, #e6f5ef 0%, #d9f0e6 55%, #eefaf5 100%);
                    --panel-white-overlay: rgba(255,255,255,.4);
                    --field-error: #c9463f;
                }

                html, body { min-height: 100%; background: var(--bg); font-family: 'DM Sans', sans-serif; color: var(--text); transition: background .25s, color .25s; }

                .page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px 16px; position: relative; overflow: hidden; }

                .page::before {
                    content: ''; position: fixed; inset: 0; z-index: 0; pointer-events: none;
                    background-image:
                        linear-gradient(var(--grid-line) 1px, transparent 1px),
                        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
                    background-size: 40px 40px;
                }

                .orb { position: fixed; border-radius: 50%; pointer-events: none; filter: blur(60px); z-index: 0; }
                .orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, var(--orb-1) 0%, transparent 70%); top: -120px; right: -120px; }
                .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, var(--orb-2) 0%, transparent 70%); bottom: -100px; left: -80px; }

                .top-nav { position: fixed; top: 24px; right: 24px; z-index: 5; }
                .theme-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 38px; height: 38px;
                    background: rgba(19, 30, 33, .1); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--border); border-radius: 50%;
                    color: var(--muted); cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s, transform .15s;
                }
                .theme-btn:hover { color: var(--green); border-color: rgba(0,166,103,.35); transform: rotate(15deg); }

                .back-nav { position: fixed; top: 24px; left: 24px; z-index: 5; }
                .back-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(19, 30, 33, .07); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--border); border-radius: 99px;
                    padding: 9px 16px 9px 12px;
                    font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
                    color: var(--muted); text-decoration: none; cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s, transform .15s;
                }
                .back-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform .2s; }
                .back-btn:hover { color: var(--green); border-color: rgba(0,166,103,.35); transform: translateX(-2px); }
                .back-btn:hover svg { transform: translateX(-2px); }

                @media (max-width: 480px) {
                    .back-nav { top: 14px; left: 14px; }
                    .top-nav { top: 14px; right: 14px; }
                    .back-btn span { display: none; }
                    .back-btn { padding: 10px; }
                }

                .card {
                    display: grid; grid-template-columns: 450px minmax(0, 1fr);
                    width: 100%; max-width: 1020px;
                    border-radius: 20px; overflow: hidden;
                    border: 1px solid var(--border); position: relative; z-index: 1;
                    animation: fadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
                    box-shadow: 0 40px 80px var(--card-shadow);
                }

                @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

                .panel-left {
                    background: var(--left-grad); padding: 52px 40px;
                    display: flex; flex-direction: column; justify-content: space-between;
                    position: relative; overflow-y: auto; min-height: 0;
                    border-right: 1px solid var(--border);
                }

                .panel-left::before, .panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
                .panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
                .panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

                .dots { position: absolute; top: 44px; right: 32px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; opacity: .25; }
                .dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--green); display: block; }

                .fc-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; position: relative; z-index: 1; }
                .fc-logo-mark { width: 36px; height: 36px; background: var(--green); border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fc-logo-mark svg { width: 18px; height: 18px; fill: var(--bg); }
                .fc-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
                .fc-logo-tagline { font-size: 11px; color: var(--muted); letter-spacing: .3px; margin: 0; line-height: 1; }

                .pill { display: inline-flex; align-items: center; gap: 6px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.2); border-radius: 99px; padding: 5px 12px; font-size: 11px; color: var(--green); font-weight: 500; margin-bottom: 22px; margin-top: 24px; width: fit-content; position: relative; z-index: 1; }
                .pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green); display: inline-block; animation: pulse 2s ease infinite; }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

                .tagline { position: relative; z-index: 1; }
                .tagline h2 { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; line-height: 1.15; letter-spacing: -1px; color: var(--text); margin-bottom: 16px; }
                .tagline h2 em { font-style: normal; color: var(--green); }
                .tagline p { color: var(--muted); font-size: 13.5px; line-height: 1.65; }

                .features { display: flex; flex-direction: column; gap: 14px; position: relative; z-index: 1; }
                .feat { display: flex; align-items: flex-start; gap: 12px; }
                .feat-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.2); display: grid; place-items: center; flex-shrink: 0; }
                .feat-icon svg { width: 15px; height: 15px; color: var(--green); }
                .feat-text strong { display: block; font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
                .feat-text span { font-size: 12px; color: var(--muted); }

                .panel-right {
                    background: var(--surface); padding: 48px 48px;
                    display: flex; flex-direction: column; justify-content: center;
                    position: relative; overflow-y: auto; min-height: 0; min-width: 0;
                }
                .panel-right::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--green), transparent); opacity: .6; }

                .form-head { margin-bottom: 28px; }
                .eyebrow { display: inline-flex; align-items: center; gap: 7px; font-size: 10.5px; font-weight: 600; color: var(--green); text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 10px; }
                .eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--green); border-radius: 2px; display: inline-block; }
                .form-head h1 { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: var(--text); letter-spacing: -.8px; line-height: 1.1; }
                .form-head p { margin-top: 8px; font-size: 13px; color: var(--muted); }

                /* Role selection */
                .role-grid { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
                .role-card {
                    display: flex; align-items: center; gap: 14px; text-align: left;
                    background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 14px;
                    padding: 16px 18px; cursor: pointer; font-family: 'DM Sans', sans-serif;
                    transition: border-color .2s, box-shadow .2s, transform .15s;
                }
                .role-card:hover { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); transform: translateY(-1px); }
                .role-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.2); display: grid; place-items: center; flex-shrink: 0; color: var(--green); }
                .role-icon svg { width: 19px; height: 19px; }
                .role-text { flex: 1; display: flex; flex-direction: column; gap: 2px; }
                .role-text strong { font-size: 14.5px; font-weight: 700; color: var(--text); }
                .role-text span { font-size: 12px; color: var(--muted); }
                .role-arrow { width: 16px; height: 16px; color: var(--muted); flex-shrink: 0; transition: transform .2s, color .2s; }
                .role-card:hover .role-arrow { color: var(--green); transform: translateX(3px); }

                .role-note {
                    font-size: 12.5px; color: var(--muted); line-height: 1.6;
                    background: var(--green-dim); border: 1px solid rgba(0,166,103,.18);
                    border-radius: 10px; padding: 12px 14px; margin-bottom: 24px;
                }
                .role-note strong { color: var(--green); }

                .role-section-label {
                    font-size: 11px; font-weight: 700; color: var(--green); text-transform: uppercase;
                    letter-spacing: 1px; margin-top: 6px; padding-top: 14px; border-top: 1px dashed var(--border);
                }

                .fields-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .field-full { grid-column: 1 / -1; }

                .field { display: flex; flex-direction: column; }
                .field label { font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 7px; }

                .input-wrap { position: relative; }
                .input-wrap .ico { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: var(--muted); pointer-events: none; transition: color .2s; }
                .input-wrap:focus-within .ico { color: var(--green); }

                .fc-input {
                    width: 100%; background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 10px;
                    padding: 12px 14px 12px 42px; font-family: 'DM Sans', sans-serif; font-size: 13.5px; color: var(--text); outline: none;
                    transition: border-color .2s, box-shadow .2s, background .2s;
                }
                .fc-input--plain { padding: 12px 14px; }
                .fc-textarea { resize: vertical; min-height: 80px; }
                select.fc-input { appearance: none; cursor: pointer; }
                .fc-input::placeholder { color: var(--muted); opacity: .5; }
                .fc-input:focus { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); }
                .fc-input.is-invalid { border-color: var(--field-error); }

                .field-error { font-size: 11.5px; color: var(--field-error); margin-top: 5px; }

                .strength-bar { display: flex; gap: 4px; margin-top: 8px; }
                .strength-seg { height: 3px; flex: 1; border-radius: 2px; background: var(--border); transition: background .3s; }
                .strength-seg.weak   { background: #e05a5a; }
                .strength-seg.fair   { background: #e0a045; }
                .strength-seg.good   { background: #5ab4e0; }
                .strength-seg.strong { background: var(--green); }
                .strength-label { font-size: 11px; color: var(--muted); margin-top: 5px; }

                .eye-btn { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex; border-radius: 4px; transition: color .2s, background .2s; }
                .eye-btn:hover { color: var(--green); background: var(--green-dim); }

                .terms-row { display: flex; align-items: flex-start; gap: 10px; }
                .terms-row input[type="checkbox"] { appearance: none; width: 17px; height: 17px; border-radius: 5px; border: 1.5px solid var(--border); background: var(--input-bg); cursor: pointer; display: grid; place-items: center; flex-shrink: 0; margin-top: 1px; transition: border-color .2s, background .2s; }
                .terms-row input[type="checkbox"]:checked { background: var(--green); border-color: var(--green); }
                .terms-row input[type="checkbox"]:checked::after { content: ''; display: block; width: 9px; height: 5px; border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg) translateY(-1px); }
                .terms-row label { font-size: 12.5px; color: var(--muted); line-height: 1.5; cursor: pointer; }
                .terms-row label a { color: var(--green); text-decoration: none; font-weight: 500; }
                .terms-row label a:hover { text-decoration: underline; }

                .btn {
                    width: 100%; padding: 14px; background: linear-gradient(135deg, var(--green), #009a5e);
                    color: #fff; border: none; border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
                    letter-spacing: .2px; cursor: pointer; position: relative; overflow: hidden;
                    transition: transform .15s, box-shadow .2s, background .2s; margin-top: 20px;
                }
                .btn:disabled { opacity: .7; cursor: not-allowed; }
                .btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, var(--panel-white-overlay), transparent); pointer-events: none; }
                .btn:hover:not(:disabled) { background: linear-gradient(135deg, var(--green-hover), #00a65e); box-shadow: 0 12px 32px var(--green-glow); transform: translateY(-2px); }
                .btn:active:not(:disabled) { transform: translateY(0); }
                .btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

                .login-row { text-align: center; margin-top: 20px; font-size: 13px; color: var(--muted); }
                .login-row a { color: var(--green); text-decoration: none; font-weight: 600; }
                .login-row a:hover { text-decoration: underline; }

                @media (max-width: 880px) {
                    .card { grid-template-columns: 1fr; max-width: 560px; max-height: none; overflow: visible; }
                    .panel-left { border-right: none; border-bottom: 1px solid var(--border); padding: 32px 28px 28px; overflow: visible; }
                    .dots { display: none; }
                    .tagline h2 { font-size: 22px; }
                    .tagline p { display: none; }
                    .features { flex-direction: row; flex-wrap: wrap; gap: 10px; }
                    .feat { flex: 1; min-width: 140px; }
                    .panel-right { padding: 36px 32px 40px; overflow: visible; }
                }

                @media (max-width: 600px) {
                    .fields-grid { grid-template-columns: 1fr; }
                    .field-full { grid-column: unset; }
                }

                @media (max-width: 480px) {
                    .page { padding: 16px; }
                    .panel-left { padding: 24px 20px; }
                    .panel-right { padding: 28px 20px 36px; }
                    .form-head h1 { font-size: 22px; }
                    .features { display: none; }
                }
            `})]})}export{E as default};
