import{r as n,u as S,j as e,H as B,L as v}from"./app-B2SIh33N.js";const k="fc-theme",j=[{value:"talent",title:"I’m a Talent",description:"Showcase your skills and get discovered.",icon:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})})},{value:"seller",title:"I’m a Seller",description:"List products or services and reach buyers.",icon:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"m4 9 2-5h12l2 5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),e.jsx("path",{d:"M4 9h16v10H4z",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),e.jsx("path",{d:"M9 19v-5h6v5",fill:"none",stroke:"currentColor",strokeWidth:"1.8"})]})},{value:"user",title:"I’m a Member",description:"Browse, connect, and explore the platform.",icon:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),e.jsx("path",{d:"M8 8h8M8 12h8M8 16h5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}];function F(){var c;if(typeof window>"u")return"light";const t=localStorage.getItem(k);return t==="dark"||t==="light"?t:(c=window.matchMedia)!=null&&c.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"}function o({children:t}){return e.jsx("span",{className:"fc-field-icon",children:t})}function w({visible:t}){return t?e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"none",stroke:"currentColor",strokeWidth:"1.7"})]}):e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M3 3l18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M10.6 6.2A10.6 10.6 0 0 1 12 6c6 0 9.5 6 9.5 6a17.8 17.8 0 0 1-3.1 3.7M6.1 6.9C3.8 8.4 2.5 12 2.5 12s3.5 6 9.5 6c1.3 0 2.5-.3 3.5-.7",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})]})}function f(){return e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m5 12 4 4L19 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function E({categories:t=[]}){const[c,y]=n.useState(F),[d,u]=n.useState("role"),[x,N]=n.useState(!1),[h,C]=n.useState(!1),{data:a,setData:i,post:M,processing:g,errors:s,reset:_}=S({role:"",name:"",email:"",phone:"",password:"",password_confirmation:"",terms:!1,talent_address:"",talent_language:"",category_id:"",talent_description:"",company_name:"",seller_address:"",seller_description:""});n.useEffect(()=>{document.documentElement.dataset.fcTheme=c,localStorage.setItem(k,c)},[c]);const m=n.useMemo(()=>j.find(r=>r.value===a.role),[a.role]),l=n.useMemo(()=>{const r=a.password||"";if(!r)return 0;let p=0;return r.length>=8&&p++,/[A-Z]/.test(r)&&p++,/[0-9]/.test(r)&&p++,/[^A-Za-z0-9]/.test(r)&&p++,p},[a.password]),z=n.useMemo(()=>a.password?l<=1?"Weak":l===2?"Fair":l===3?"Good":"Strong":"",[a.password,l]),W=n.useCallback(r=>{i("role",r),u("form")},[i]),L=r=>{r.preventDefault(),M(route("register"),{onFinish:()=>{_("password","password_confirmation")}})},b=()=>{u("role")};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Create your account | Future Connect"}),e.jsxs("div",{className:"fc-register",children:[e.jsxs("div",{className:"fc-background",children:[e.jsx("span",{className:"fc-orb fc-orb-one"}),e.jsx("span",{className:"fc-orb fc-orb-two"}),e.jsx("span",{className:"fc-grid"})]}),e.jsxs("header",{className:"fc-topbar",children:[e.jsxs(v,{href:route("user.home"),className:"fc-logo","aria-label":"Future Connect home",children:[e.jsxs("span",{className:"fc-logo-mark",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("span",{className:"fc-logo-text",children:[e.jsx("strong",{children:"Future"}),e.jsx("b",{children:"Connect"})]})]}),e.jsxs("div",{className:"fc-topbar-right",children:[e.jsx("span",{className:"fc-login-copy",children:"Already have an account?"}),e.jsx(v,{href:route("login"),className:"fc-login-link",children:"Sign in"}),e.jsx("button",{type:"button",className:"fc-theme-button",onClick:()=>y(r=>r==="dark"?"light":"dark"),"aria-label":"Toggle theme",children:c==="dark"?e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]}):e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})})})]})]}),e.jsx("main",{className:"fc-register-shell",children:e.jsxs("section",{className:"fc-register-card",children:[e.jsx("aside",{className:"fc-brand-panel",children:e.jsxs("div",{className:"fc-brand-inner",children:[e.jsxs("div",{className:"fc-brand-badge",children:[e.jsx("span",{className:"fc-status-dot"}),"A platform built for growth"]}),e.jsxs("div",{className:"fc-brand-content",children:[e.jsx("p",{className:"fc-eyebrow",children:"FUTURE CONNECT"}),e.jsxs("h1",{children:["Your talent.",e.jsx("br",{}),"Your future.",e.jsx("br",{}),e.jsx("span",{children:"Connected."})]}),e.jsx("p",{className:"fc-brand-description",children:"Discover inspiring stories, impactful skills, and creative talent across Africa."})]}),e.jsxs("div",{className:"fc-brand-features",children:[e.jsxs("div",{className:"fc-brand-feature",children:[e.jsx("span",{className:"fc-feature-icon",children:e.jsx(f,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Showcase your skills"}),e.jsx("span",{children:"Create a profile that gets noticed."})]})]}),e.jsxs("div",{className:"fc-brand-feature",children:[e.jsx("span",{className:"fc-feature-icon",children:e.jsx(f,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Build connections"}),e.jsx("span",{children:"Connect with people and opportunities."})]})]}),e.jsxs("div",{className:"fc-brand-feature",children:[e.jsx("span",{className:"fc-feature-icon",children:e.jsx(f,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Grow your opportunities"}),e.jsx("span",{children:"Turn your skills into new possibilities."})]})]})]}),e.jsxs("div",{className:"fc-brand-footer",children:[e.jsxs("div",{className:"fc-mini-avatars",children:[e.jsx("span",{children:"F"}),e.jsx("span",{children:"C"}),e.jsx("span",{children:"A"}),e.jsx("span",{children:"+"})]}),e.jsxs("p",{children:["One platform.",e.jsx("br",{}),"Many possibilities."]})]})]})}),e.jsx("section",{className:"fc-form-panel",children:e.jsxs("div",{className:"fc-form-container",children:[e.jsxs("div",{className:"fc-mobile-logo",children:[e.jsxs("span",{className:"fc-logo-mark",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("span",{className:"fc-logo-text",children:[e.jsx("strong",{children:"Future"}),e.jsx("b",{children:"Connect"})]})]}),e.jsxs("div",{className:"fc-progress",children:[e.jsxs("div",{className:`fc-progress-item ${d==="role"?"active":"done"}`,children:[e.jsx("span",{className:"fc-progress-number",children:d==="form"?e.jsx(f,{}):"01"}),e.jsx("span",{children:"Account type"})]}),e.jsx("div",{className:"fc-progress-line",children:e.jsx("span",{className:d==="form"?"filled":""})}),e.jsxs("div",{className:`fc-progress-item ${d==="form"?"active":""}`,children:[e.jsx("span",{className:"fc-progress-number",children:"02"}),e.jsx("span",{children:"Your details"})]})]}),d==="role"?e.jsxs("div",{className:"fc-step-content",children:[e.jsxs("div",{className:"fc-heading",children:[e.jsx("span",{className:"fc-heading-label",children:"GET STARTED"}),e.jsxs("h2",{children:["How will you use",e.jsx("br",{}),"Future Connect?"]}),e.jsx("p",{children:"Select the account type that best describes you."})]}),e.jsx("div",{className:"fc-role-list",children:j.map(r=>e.jsxs("button",{type:"button",className:`fc-role-card ${a.role===r.value?"selected":""}`,onClick:()=>W(r.value),children:[e.jsx("span",{className:"fc-role-icon",children:r.icon}),e.jsxs("span",{className:"fc-role-copy",children:[e.jsx("strong",{children:r.title}),e.jsx("span",{children:r.description})]}),e.jsx("span",{className:"fc-role-arrow",children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]},r.value))}),e.jsxs("p",{className:"fc-security-note",children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M7 10V7a5 5 0 0 1 10 0v3",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("rect",{x:"5",y:"10",width:"14",height:"10",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"1.7"})]}),"Your information is securely handled."]})]}):e.jsxs("form",{onSubmit:L,className:"fc-step-content",children:[e.jsxs("div",{className:"fc-form-heading-row",children:[e.jsxs("div",{className:"fc-heading",children:[e.jsx("span",{className:"fc-heading-label",children:"CREATE ACCOUNT"}),e.jsxs("h2",{children:["Tell us about",e.jsx("br",{}),"yourself."]}),e.jsxs("p",{children:["You’re joining as"," ",e.jsx("strong",{children:(m==null?void 0:m.title)||a.role}),"."]})]}),e.jsx("button",{type:"button",className:"fc-change-role",onClick:b,children:"Change"})]}),Object.keys(s).length>0&&e.jsxs("div",{className:"fc-error-summary",children:[e.jsx("strong",{children:"Please check your details"}),e.jsx("span",{children:"Some fields need your attention before you can continue."})]}),e.jsxs("div",{className:"fc-form-section",children:[e.jsxs("div",{className:"fc-section-title",children:[e.jsx("span",{children:"01"}),"Account information"]}),e.jsxs("div",{className:"fc-form-grid",children:[e.jsxs("div",{className:"fc-field",children:[e.jsx("label",{htmlFor:"name",children:"Full name"}),e.jsxs("div",{className:"fc-input-wrap",children:[e.jsx(o,{children:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"8",r:"3.5",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("path",{d:"M5 20a7 7 0 0 1 14 0",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]})}),e.jsx("input",{id:"name",type:"text",value:a.name,onChange:r=>i("name",r.target.value),placeholder:"Your full name",autoComplete:"name",required:!0})]}),s.name&&e.jsx("span",{className:"fc-field-error",children:s.name})]}),e.jsxs("div",{className:"fc-field",children:[e.jsx("label",{htmlFor:"phone",children:"Phone number"}),e.jsxs("div",{className:"fc-input-wrap",children:[e.jsx(o,{children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M7 3h3l1.2 4-2 1.5a15 15 0 0 0 6.3 6.3L17 13l4 1.2v3a3 3 0 0 1-3 3C10.3 20.2 3.8 13.7 3.8 6A3 3 0 0 1 7 3Z",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"})})}),e.jsx("input",{id:"phone",type:"tel",value:a.phone,onChange:r=>i("phone",r.target.value),placeholder:"+250 7XX XXX XXX",autoComplete:"tel",required:!0})]}),s.phone&&e.jsx("span",{className:"fc-field-error",children:s.phone})]}),e.jsxs("div",{className:"fc-field fc-field-full",children:[e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsxs("div",{className:"fc-input-wrap",children:[e.jsx(o,{children:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("path",{d:"m4 7 8 6 8-6",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"})]})}),e.jsx("input",{id:"email",type:"email",value:a.email,onChange:r=>i("email",r.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0})]}),s.email&&e.jsx("span",{className:"fc-field-error",children:s.email})]}),e.jsxs("div",{className:"fc-field",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"fc-input-wrap",children:[e.jsx(o,{children:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("rect",{x:"5",y:"10",width:"14",height:"10",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"1.7"})]})}),e.jsx("input",{id:"password",type:x?"text":"password",value:a.password,onChange:r=>i("password",r.target.value),placeholder:"Create a password",autoComplete:"new-password",required:!0}),e.jsx("button",{type:"button",className:"fc-password-toggle",onClick:()=>N(r=>!r),"aria-label":x?"Hide password":"Show password",children:e.jsx(w,{visible:x})})]}),a.password&&e.jsxs("div",{className:"fc-password-strength",children:[e.jsx("div",{className:"fc-strength-bars",children:[1,2,3,4].map(r=>e.jsx("span",{className:r<=l?`active strength-${l}`:""},r))}),e.jsx("span",{children:z})]}),s.password&&e.jsx("span",{className:"fc-field-error",children:s.password})]}),e.jsxs("div",{className:"fc-field",children:[e.jsx("label",{htmlFor:"password_confirmation",children:"Confirm password"}),e.jsxs("div",{className:"fc-input-wrap",children:[e.jsx(o,{children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m5 12 4 4L19 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("input",{id:"password_confirmation",type:h?"text":"password",value:a.password_confirmation,onChange:r=>i("password_confirmation",r.target.value),placeholder:"Repeat your password",autoComplete:"new-password",required:!0}),e.jsx("button",{type:"button",className:"fc-password-toggle",onClick:()=>C(r=>!r),"aria-label":h?"Hide confirmation password":"Show confirmation password",children:e.jsx(w,{visible:h})})]}),s.password_confirmation&&e.jsx("span",{className:"fc-field-error",children:s.password_confirmation})]})]})]}),a.role==="talent"&&e.jsxs("div",{className:"fc-form-section",children:[e.jsxs("div",{className:"fc-section-title",children:[e.jsx("span",{children:"02"}),"Talent profile"]}),e.jsxs("div",{className:"fc-form-grid",children:[e.jsxs("div",{className:"fc-field",children:[e.jsx("label",{htmlFor:"talent_address",children:"Location"}),e.jsxs("div",{className:"fc-input-wrap",children:[e.jsx(o,{children:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("circle",{cx:"12",cy:"9",r:"2.2",fill:"none",stroke:"currentColor",strokeWidth:"1.7"})]})}),e.jsx("input",{id:"talent_address",type:"text",value:a.talent_address,onChange:r=>i("talent_address",r.target.value),placeholder:"City / District"})]}),s.talent_address&&e.jsx("span",{className:"fc-field-error",children:s.talent_address})]}),e.jsxs("div",{className:"fc-field",children:[e.jsx("label",{htmlFor:"talent_language",children:"Preferred language"}),e.jsxs("div",{className:"fc-input-wrap fc-select-wrap",children:[e.jsx(o,{children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M4 5h10M9 5c0 5-2 8-5 10M6 10c2 2 4 3 7 4M15 12h6M18 8l-4 10M16 15h5",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("select",{id:"talent_language",value:a.talent_language,onChange:r=>i("talent_language",r.target.value),children:[e.jsx("option",{value:"",children:"Select language"}),e.jsx("option",{value:"English",children:"English"}),e.jsx("option",{value:"Kinyarwanda",children:"Kinyarwanda"}),e.jsx("option",{value:"French",children:"French"}),e.jsx("option",{value:"Other",children:"Other"})]}),e.jsx("span",{className:"fc-select-arrow",children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m6 9 6 6 6-6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),s.talent_language&&e.jsx("span",{className:"fc-field-error",children:s.talent_language})]}),e.jsxs("div",{className:"fc-field fc-field-full",children:[e.jsx("label",{htmlFor:"category_id",children:"Skill category"}),e.jsxs("div",{className:"fc-input-wrap fc-select-wrap",children:[e.jsx(o,{children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z",fill:"none",stroke:"currentColor",strokeWidth:"1.7"})})}),e.jsxs("select",{id:"category_id",value:a.category_id,onChange:r=>i("category_id",r.target.value),children:[e.jsx("option",{value:"",children:"Select your main category"}),t.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("span",{className:"fc-select-arrow",children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m6 9 6 6 6-6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),s.category_id&&e.jsx("span",{className:"fc-field-error",children:s.category_id})]}),e.jsxs("div",{className:"fc-field fc-field-full",children:[e.jsx("label",{htmlFor:"talent_description",children:"Short bio"}),e.jsx("textarea",{id:"talent_description",value:a.talent_description,onChange:r=>i("talent_description",r.target.value),placeholder:"Tell people briefly about your skills, experience, or what you do...",rows:"4"}),s.talent_description&&e.jsx("span",{className:"fc-field-error",children:s.talent_description})]})]})]}),a.role==="seller"&&e.jsxs("div",{className:"fc-form-section",children:[e.jsxs("div",{className:"fc-section-title",children:[e.jsx("span",{children:"02"}),"Business information"]}),e.jsxs("div",{className:"fc-form-grid",children:[e.jsxs("div",{className:"fc-field fc-field-full",children:[e.jsx("label",{htmlFor:"company_name",children:"Business / company name"}),e.jsxs("div",{className:"fc-input-wrap",children:[e.jsx(o,{children:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M4 20V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("path",{d:"M2 20h20M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]})}),e.jsx("input",{id:"company_name",type:"text",value:a.company_name,onChange:r=>i("company_name",r.target.value),placeholder:"Business or company name"})]}),s.company_name&&e.jsx("span",{className:"fc-field-error",children:s.company_name})]}),e.jsxs("div",{className:"fc-field fc-field-full",children:[e.jsx("label",{htmlFor:"seller_address",children:"Business location"}),e.jsxs("div",{className:"fc-input-wrap",children:[e.jsx(o,{children:e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("circle",{cx:"12",cy:"9",r:"2.2",fill:"none",stroke:"currentColor",strokeWidth:"1.7"})]})}),e.jsx("input",{id:"seller_address",type:"text",value:a.seller_address,onChange:r=>i("seller_address",r.target.value),placeholder:"City / District"})]}),s.seller_address&&e.jsx("span",{className:"fc-field-error",children:s.seller_address})]}),e.jsxs("div",{className:"fc-field fc-field-full",children:[e.jsx("label",{htmlFor:"seller_description",children:"Business description"}),e.jsx("textarea",{id:"seller_description",value:a.seller_description,onChange:r=>i("seller_description",r.target.value),placeholder:"Tell us about the products or services you offer...",rows:"4"}),s.seller_description&&e.jsx("span",{className:"fc-field-error",children:s.seller_description})]})]})]}),e.jsxs("div",{className:"fc-terms",children:[e.jsxs("label",{className:"fc-checkbox",children:[e.jsx("input",{type:"checkbox",checked:a.terms,onChange:r=>i("terms",r.target.checked),required:!0}),e.jsx("span",{className:"fc-checkmark",children:e.jsx(f,{})}),e.jsxs("span",{children:["I agree to the"," ",e.jsx("a",{href:"#",children:"Terms of Service"})," ","and"," ",e.jsx("a",{href:"#",children:"Privacy Policy"}),"."]})]}),s.terms&&e.jsx("span",{className:"fc-field-error",children:s.terms})]}),e.jsxs("div",{className:"fc-form-actions",children:[e.jsxs("button",{type:"button",className:"fc-back-button",onClick:b,disabled:g,children:[e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M19 12H5M11 18l-6-6 6-6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back"]}),e.jsx("button",{type:"submit",className:"fc-submit-button",disabled:g,children:g?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"fc-spinner"}),"Creating account..."]}):e.jsxs(e.Fragment,{children:["Create account",e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})]})]})})]})})]}),e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap');

                :root {
                    --fc-primary: #48d597;
                    --fc-primary-dark: #2fba7b;
                    --fc-primary-soft: rgba(72, 213, 151, .10);
                    --fc-black: #101714;
                    --fc-text: #18211d;
                    --fc-muted: #718078;
                    --fc-border: #e3e9e5;
                    --fc-background: #f5f8f6;
                    --fc-card: #ffffff;
                    --fc-input: #fbfcfb;
                    --fc-danger: #dc4f5c;
                    --fc-shadow: 0 24px 80px rgba(18, 39, 29, .10);
                }

                [data-fc-theme="dark"] {
                    --fc-black: #f4faf7;
                    --fc-text: #eef7f2;
                    --fc-muted: #91a39a;
                    --fc-border: #26352e;
                    --fc-background: #0d1310;
                    --fc-card: #131b17;
                    --fc-input: #101814;
                    --fc-shadow: 0 24px 80px rgba(0, 0, 0, .35);
                }

                * {
                    box-sizing: border-box;
                }

                .fc-register {
                    min-height: 100vh;
                    background: var(--fc-background);
                    color: var(--fc-text);
                    font-family: "DM Sans", sans-serif;
                    position: relative;
                    overflow-x: hidden;
                }

                .fc-background {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                }

                .fc-grid {
                    position: absolute;
                    inset: 0;
                    opacity: .35;
                    background-image:
                        linear-gradient(
                            rgba(72, 213, 151, .04) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(72, 213, 151, .04) 1px,
                            transparent 1px
                        );
                    background-size: 44px 44px;
                }

                .fc-orb {
                    position: absolute;
                    width: 480px;
                    height: 480px;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: .12;
                }

                .fc-orb-one {
                    background: var(--fc-primary);
                    top: -250px;
                    right: -100px;
                }

                .fc-orb-two {
                    background: #5a8cff;
                    bottom: -300px;
                    left: -160px;
                    opacity: .06;
                }

                .fc-topbar {
                    position: relative;
                    z-index: 2;
                    width: min(1440px, calc(100% - 56px));
                    margin: 0 auto;
                    height: 88px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .fc-logo {
                    display: inline-flex;
                    align-items: center;
                    gap: 11px;
                    color: var(--fc-black);
                    text-decoration: none;
                }

                .fc-logo-mark {
                    width: 34px;
                    height: 34px;
                    border-radius: 10px;
                    background: var(--fc-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2px;
                    box-shadow: 0 7px 20px rgba(72, 213, 151, .20);
                }

                .fc-logo-mark span {
                    display: block;
                    width: 4px;
                    border-radius: 5px;
                    background: #0d1712;
                }

                .fc-logo-mark span:nth-child(1) {
                    height: 10px;
                }

                .fc-logo-mark span:nth-child(2) {
                    height: 17px;
                }

                .fc-logo-mark span:nth-child(3) {
                    height: 13px;
                }

                .fc-logo-text {
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                    font-family: "Syne", sans-serif;
                    font-size: 20px;
                    letter-spacing: -.7px;
                }

                .fc-logo-text strong {
                    font-weight: 700;
                }

                .fc-logo-text b {
                    color: var(--fc-primary-dark);
                    font-weight: 700;
                }

                .fc-topbar-right {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }

                .fc-login-copy {
                    color: var(--fc-muted);
                    font-size: 13px;
                }

                .fc-login-link {
                    color: var(--fc-text);
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    padding-bottom: 2px;
                    border-bottom: 1px solid currentColor;
                }

                .fc-login-link:hover {
                    color: var(--fc-primary-dark);
                }

                .fc-theme-button {
                    width: 38px;
                    height: 38px;
                    border: 1px solid var(--fc-border);
                    background: var(--fc-card);
                    color: var(--fc-muted);
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .fc-theme-button:hover {
                    color: var(--fc-primary-dark);
                    border-color: rgba(72, 213, 151, .5);
                    transform: translateY(-1px);
                }

                .fc-theme-button svg {
                    width: 17px;
                    height: 17px;
                }

                .fc-register-shell {
                    position: relative;
                    z-index: 1;
                    width: min(1180px, calc(100% - 40px));
                    margin: 10px auto 50px;
                }

                .fc-register-card {
                    min-height: 720px;
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    border-radius: 26px;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 38% 62%;
                    box-shadow: var(--fc-shadow);
                }

                .fc-brand-panel {
                    background:
                        radial-gradient(
                            circle at 80% 15%,
                            rgba(72, 213, 151, .18),
                            transparent 28%
                        ),
                        linear-gradient(
                            150deg,
                            #102019 0%,
                            #0b1410 100%
                        );
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .fc-brand-panel::after {
                    content: "";
                    position: absolute;
                    width: 360px;
                    height: 360px;
                    border: 1px solid rgba(72, 213, 151, .13);
                    border-radius: 50%;
                    right: -190px;
                    bottom: -100px;
                    box-shadow:
                        0 0 0 55px rgba(72, 213, 151, .025),
                        0 0 0 110px rgba(72, 213, 151, .018);
                }

                .fc-brand-inner {
                    position: relative;
                    z-index: 1;
                    min-height: 100%;
                    padding: 46px 42px 40px;
                    display: flex;
                    flex-direction: column;
                }

                .fc-brand-badge {
                    align-self: flex-start;
                    border: 1px solid rgba(255,255,255,.12);
                    background: rgba(255,255,255,.045);
                    border-radius: 999px;
                    padding: 8px 12px;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .6px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,.78);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .fc-status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--fc-primary);
                    box-shadow: 0 0 0 4px rgba(72, 213, 151, .08);
                }

                .fc-brand-content {
                    margin-top: 74px;
                }

                .fc-eyebrow,
                .fc-heading-label {
                    margin: 0 0 14px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    color: var(--fc-primary);
                }

                .fc-brand-content h1 {
                    margin: 0;
                    font-family: "Syne", sans-serif;
                    font-size: clamp(38px, 4vw, 53px);
                    line-height: 1.02;
                    letter-spacing: -2.8px;
                    font-weight: 700;
                }

                .fc-brand-content h1 span {
                    color: var(--fc-primary);
                }

                .fc-brand-description {
                    max-width: 360px;
                    margin: 25px 0 0;
                    color: rgba(255,255,255,.59);
                    font-size: 14px;
                    line-height: 1.75;
                }

                .fc-brand-features {
                    margin-top: auto;
                    display: grid;
                    gap: 18px;
                    padding-top: 50px;
                }

                .fc-brand-feature {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                }

                .fc-feature-icon {
                    flex: 0 0 25px;
                    width: 25px;
                    height: 25px;
                    border-radius: 8px;
                    background: rgba(72, 213, 151, .12);
                    color: var(--fc-primary);
                    display: grid;
                    place-items: center;
                }

                .fc-feature-icon svg {
                    width: 14px;
                    height: 14px;
                }

                .fc-brand-feature div {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .fc-brand-feature strong {
                    font-size: 12px;
                    font-weight: 700;
                    color: rgba(255,255,255,.92);
                }

                .fc-brand-feature span {
                    font-size: 11px;
                    color: rgba(255,255,255,.42);
                    line-height: 1.45;
                }

                .fc-brand-footer {
                    margin-top: 35px;
                    padding-top: 22px;
                    border-top: 1px solid rgba(255,255,255,.08);
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .fc-mini-avatars {
                    display: flex;
                    padding-left: 5px;
                }

                .fc-mini-avatars span {
                    width: 27px;
                    height: 27px;
                    margin-left: -5px;
                    border: 2px solid #101b15;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    background: #1e3027;
                    color: rgba(255,255,255,.7);
                    font-size: 9px;
                    font-weight: 800;
                }

                .fc-mini-avatars span:nth-child(2) {
                    background: #274238;
                }

                .fc-mini-avatars span:nth-child(3) {
                    background: #345446;
                }

                .fc-mini-avatars span:last-child {
                    background: var(--fc-primary);
                    color: #0d1712;
                }

                .fc-brand-footer p {
                    margin: 0;
                    font-size: 10px;
                    line-height: 1.45;
                    color: rgba(255,255,255,.42);
                }

                .fc-form-panel {
                    background: var(--fc-card);
                    min-width: 0;
                }

                .fc-form-container {
                    width: min(100%, 690px);
                    margin: 0 auto;
                    padding: 52px 58px 50px;
                }

                .fc-mobile-logo {
                    display: none;
                }

                .fc-progress {
                    display: flex;
                    align-items: center;
                    margin-bottom: 48px;
                }

                .fc-progress-item {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--fc-muted);
                    font-size: 10px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .fc-progress-item.active {
                    color: var(--fc-text);
                }

                .fc-progress-item.done {
                    color: var(--fc-primary-dark);
                }

                .fc-progress-number {
                    width: 27px;
                    height: 27px;
                    border: 1px solid var(--fc-border);
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    font-size: 8px;
                    font-weight: 800;
                }

                .fc-progress-item.active .fc-progress-number {
                    border-color: var(--fc-primary);
                    background: var(--fc-primary-soft);
                    color: var(--fc-primary-dark);
                }

                .fc-progress-item.done .fc-progress-number {
                    background: var(--fc-primary);
                    border-color: var(--fc-primary);
                    color: #0c1812;
                }

                .fc-progress-number svg {
                    width: 12px;
                    height: 12px;
                }

                .fc-progress-line {
                    flex: 1;
                    height: 1px;
                    margin: 0 14px;
                    background: var(--fc-border);
                    position: relative;
                }

                .fc-progress-line span {
                    position: absolute;
                    inset: 0;
                    width: 0;
                    background: var(--fc-primary);
                    transition: width .35s ease;
                }

                .fc-progress-line span.filled {
                    width: 100%;
                }

                .fc-heading-label {
                    color: var(--fc-primary-dark);
                }

                .fc-heading h2 {
                    margin: 0;
                    font-family: "Syne", sans-serif;
                    font-size: 31px;
                    line-height: 1.08;
                    letter-spacing: -1.4px;
                    color: var(--fc-black);
                }

                .fc-heading p {
                    margin: 12px 0 0;
                    color: var(--fc-muted);
                    font-size: 13px;
                    line-height: 1.65;
                }

                .fc-heading p strong {
                    color: var(--fc-text);
                }

                .fc-role-list {
                    margin-top: 35px;
                    display: grid;
                    gap: 11px;
                }

                .fc-role-card {
                    width: 100%;
                    min-height: 94px;
                    padding: 17px 18px;
                    border: 1px solid var(--fc-border);
                    background: var(--fc-input);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    text-align: left;
                    cursor: pointer;
                    color: var(--fc-text);
                    transition: .2s ease;
                }

                .fc-role-card:hover {
                    border-color: rgba(72, 213, 151, .55);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(20, 45, 33, .06);
                }

                .fc-role-card.selected {
                    border-color: var(--fc-primary);
                    background: var(--fc-primary-soft);
                    box-shadow: 0 0 0 3px rgba(72, 213, 151, .07);
                }

                .fc-role-icon {
                    flex: 0 0 52px;
                    width: 52px;
                    height: 52px;
                    border-radius: 13px;
                    display: grid;
                    place-items: center;
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    color: var(--fc-primary-dark);
                }

                .fc-role-card.selected .fc-role-icon {
                    background: var(--fc-primary);
                    border-color: var(--fc-primary);
                    color: #0b1812;
                }

                .fc-role-icon svg {
                    width: 23px;
                    height: 23px;
                }

                .fc-role-copy {
                    min-width: 0;
                    flex: 1;
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .fc-role-copy strong {
                    color: var(--fc-black);
                    font-family: "Syne", sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                }

                .fc-role-copy span {
                    color: var(--fc-muted);
                    font-size: 11px;
                }

                .fc-role-arrow {
                    color: var(--fc-muted);
                    margin-left: 12px;
                }

                .fc-role-card:hover .fc-role-arrow,
                .fc-role-card.selected .fc-role-arrow {
                    color: var(--fc-primary-dark);
                }

                .fc-role-arrow svg {
                    width: 19px;
                    height: 19px;
                }

                .fc-security-note {
                    margin: 25px 0 0;
                    color: var(--fc-muted);
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    font-size: 10px;
                }

                .fc-security-note svg {
                    width: 14px;
                    height: 14px;
                    color: var(--fc-primary-dark);
                }

                .fc-form-heading-row {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                }

                .fc-change-role {
                    border: 0;
                    background: transparent;
                    color: var(--fc-muted);
                    font-size: 11px;
                    font-weight: 700;
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    padding: 5px 0;
                }

                .fc-change-role:hover {
                    color: var(--fc-primary-dark);
                }

                .fc-error-summary {
                    margin-top: 24px;
                    padding: 12px 14px;
                    border: 1px solid rgba(220, 79, 92, .22);
                    background: rgba(220, 79, 92, .06);
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .fc-error-summary strong {
                    color: var(--fc-danger);
                    font-size: 11px;
                }

                .fc-error-summary span {
                    color: var(--fc-muted);
                    font-size: 10px;
                }

                .fc-form-section {
                    margin-top: 35px;
                    padding-top: 28px;
                    border-top: 1px solid var(--fc-border);
                }

                .fc-section-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 18px;
                    color: var(--fc-text);
                    font-size: 11px;
                    font-weight: 800;
                }

                .fc-section-title span {
                    color: var(--fc-primary-dark);
                    font-family: "Syne", sans-serif;
                    font-size: 10px;
                }

                .fc-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 17px 14px;
                }

                .fc-field {
                    min-width: 0;
                }

                .fc-field-full {
                    grid-column: 1 / -1;
                }

                .fc-field label {
                    display: block;
                    margin-bottom: 7px;
                    color: var(--fc-text);
                    font-size: 10px;
                    font-weight: 700;
                }

                .fc-input-wrap {
                    min-height: 46px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    border: 1px solid var(--fc-border);
                    background: var(--fc-input);
                    border-radius: 10px;
                    transition: .2s ease;
                }

                .fc-input-wrap:focus-within {
                    border-color: var(--fc-primary);
                    box-shadow: 0 0 0 3px rgba(72, 213, 151, .08);
                }

                .fc-field-icon {
                    width: 44px;
                    flex: 0 0 44px;
                    display: grid;
                    place-items: center;
                    color: #91a099;
                }

                .fc-field-icon svg {
                    width: 17px;
                    height: 17px;
                }

                .fc-input-wrap input,
                .fc-input-wrap select {
                    width: 100%;
                    height: 44px;
                    min-width: 0;
                    padding: 0 13px 0 0;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    color: var(--fc-text);
                    font: inherit;
                    font-size: 12px;
                }

                .fc-input-wrap input::placeholder,
                .fc-field textarea::placeholder {
                    color: #a3aea8;
                }

                .fc-input-wrap select {
                    cursor: pointer;
                    appearance: none;
                    padding-right: 40px;
                }

                .fc-select-arrow {
                    position: absolute;
                    right: 13px;
                    pointer-events: none;
                    color: var(--fc-muted);
                }

                .fc-select-arrow svg {
                    width: 15px;
                    height: 15px;
                }

                .fc-field textarea {
                    width: 100%;
                    resize: vertical;
                    min-height: 100px;
                    border: 1px solid var(--fc-border);
                    border-radius: 10px;
                    background: var(--fc-input);
                    color: var(--fc-text);
                    padding: 12px 13px;
                    outline: 0;
                    font: inherit;
                    font-size: 12px;
                    line-height: 1.6;
                    transition: .2s ease;
                }

                .fc-field textarea:focus {
                    border-color: var(--fc-primary);
                    box-shadow: 0 0 0 3px rgba(72, 213, 151, .08);
                }

                .fc-password-toggle {
                    width: 40px;
                    height: 40px;
                    margin-right: 3px;
                    border: 0;
                    background: transparent;
                    color: var(--fc-muted);
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                }

                .fc-password-toggle:hover {
                    color: var(--fc-primary-dark);
                }

                .fc-password-toggle svg {
                    width: 17px;
                    height: 17px;
                }

                .fc-password-strength {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 7px;
                }

                .fc-strength-bars {
                    flex: 1;
                    display: flex;
                    gap: 3px;
                }

                .fc-strength-bars span {
                    height: 3px;
                    flex: 1;
                    border-radius: 10px;
                    background: var(--fc-border);
                }

                .fc-strength-bars span.active {
                    background: var(--fc-primary);
                }

                .fc-password-strength > span {
                    min-width: 35px;
                    text-align: right;
                    color: var(--fc-muted);
                    font-size: 9px;
                    font-weight: 700;
                }

                .fc-field-error {
                    display: block;
                    margin-top: 5px;
                    color: var(--fc-danger);
                    font-size: 10px;
                    line-height: 1.4;
                }

                .fc-terms {
                    margin-top: 26px;
                }

                .fc-checkbox {
                    display: flex;
                    align-items: flex-start;
                    gap: 9px;
                    cursor: pointer;
                    color: var(--fc-muted);
                    font-size: 10px;
                    line-height: 1.5;
                }

                .fc-checkbox input {
                    position: absolute;
                    opacity: 0;
                    pointer-events: none;
                }

                .fc-checkmark {
                    flex: 0 0 17px;
                    width: 17px;
                    height: 17px;
                    margin-top: -1px;
                    border: 1px solid var(--fc-border);
                    border-radius: 5px;
                    display: grid;
                    place-items: center;
                    color: transparent;
                    transition: .2s ease;
                }

                .fc-checkbox input:checked + .fc-checkmark {
                    background: var(--fc-primary);
                    border-color: var(--fc-primary);
                    color: #0b1711;
                }

                .fc-checkmark svg {
                    width: 11px;
                    height: 11px;
                }

                .fc-checkbox a {
                    color: var(--fc-text);
                    font-weight: 700;
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }

                .fc-form-actions {
                    margin-top: 27px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                }

                .fc-back-button,
                .fc-submit-button {
                    min-height: 45px;
                    border-radius: 10px;
                    font-family: "DM Sans", sans-serif;
                    font-size: 11px;
                    font-weight: 800;
                    cursor: pointer;
                    transition: .2s ease;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .fc-back-button {
                    padding: 0 15px;
                    color: var(--fc-muted);
                    background: transparent;
                    border: 1px solid var(--fc-border);
                }

                .fc-back-button:hover:not(:disabled) {
                    color: var(--fc-text);
                    border-color: var(--fc-muted);
                }

                .fc-back-button svg,
                .fc-submit-button svg {
                    width: 15px;
                    height: 15px;
                }

                .fc-submit-button {
                    flex: 1;
                    max-width: 260px;
                    margin-left: auto;
                    padding: 0 22px;
                    color: #0a1710;
                    border: 1px solid var(--fc-primary);
                    background: var(--fc-primary);
                    box-shadow: 0 9px 24px rgba(72, 213, 151, .18);
                }

                .fc-submit-button:hover:not(:disabled) {
                    background: #61dda6;
                    border-color: #61dda6;
                    transform: translateY(-1px);
                    box-shadow: 0 12px 28px rgba(72, 213, 151, .25);
                }

                .fc-back-button:disabled,
                .fc-submit-button:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                    transform: none;
                }

                .fc-spinner {
                    width: 13px;
                    height: 13px;
                    border: 2px solid rgba(10,23,16,.25);
                    border-top-color: #0a1710;
                    border-radius: 50%;
                    animation: fc-spin .7s linear infinite;
                }

                @keyframes fc-spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                @media (max-width: 1000px) {
                    .fc-register-card {
                        grid-template-columns: 1fr;
                    }

                    .fc-brand-panel {
                        display: none;
                    }

                    .fc-form-container {
                        max-width: 700px;
                    }

                    .fc-mobile-logo {
                        display: inline-flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 36px;
                    }
                }

                @media (max-width: 700px) {
                    .fc-topbar {
                        width: calc(100% - 30px);
                        height: 72px;
                    }

                    .fc-login-copy {
                        display: none;
                    }

                    .fc-topbar-right {
                        gap: 12px;
                    }

                    .fc-register-shell {
                        width: calc(100% - 24px);
                        margin-top: 8px;
                        margin-bottom: 25px;
                    }

                    .fc-register-card {
                        border-radius: 20px;
                    }

                    .fc-form-container {
                        padding: 30px 22px 32px;
                    }

                    .fc-progress {
                        margin-bottom: 36px;
                    }

                    .fc-progress-item span:last-child {
                        display: none;
                    }

                    .fc-progress-line {
                        margin: 0 10px;
                    }

                    .fc-heading h2 {
                        font-size: 27px;
                    }

                    .fc-form-grid {
                        grid-template-columns: 1fr;
                    }

                    .fc-field-full {
                        grid-column: auto;
                    }

                    .fc-form-section {
                        margin-top: 28px;
                        padding-top: 24px;
                    }

                    .fc-form-actions {
                        flex-direction: column-reverse;
                        align-items: stretch;
                    }

                    .fc-submit-button {
                        width: 100%;
                        max-width: none;
                    }

                    .fc-back-button {
                        width: 100%;
                    }

                    .fc-form-heading-row {
                        gap: 12px;
                    }
                }

                @media (max-width: 430px) {
                    .fc-logo-text {
                        font-size: 18px;
                    }

                    .fc-theme-button {
                        width: 35px;
                        height: 35px;
                    }

                    .fc-role-card {
                        min-height: 84px;
                        padding: 13px;
                    }

                    .fc-role-icon {
                        width: 45px;
                        height: 45px;
                        flex-basis: 45px;
                    }

                    .fc-role-copy {
                        margin-left: 11px;
                    }

                    .fc-role-copy strong {
                        font-size: 12px;
                    }

                    .fc-role-copy span {
                        font-size: 10px;
                    }

                    .fc-role-arrow {
                        margin-left: 6px;
                    }
                }
            `})]})}export{E as default};
