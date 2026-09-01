import{r as l,_ as L,u as T,j as e,H as $,L as g}from"./app-DQcVR1sC.js";import{G as F}from"./GuestLayout-AyS9Rfgz.js";const P={"user.jobs.index":"/jobs","user.jobs.show":"/jobs/:id","user.jobs.apply":"/jobs",pricing:"/pricing"},m=50,I=5*1024*1024,U=["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],O=/\.(pdf|doc|docx)$/i;function H({job:s,categories:N=[],recent:w=[],filters:b={},routes:k={},assetBase:S="",showSubscribeModal:z=!1}){var v,y;const d=a=>k[a]||P[a]||"#",o=a=>`${S}${a}`,E=s.apply_url||`${d("user.jobs.apply")}/${s.id}`,D=a=>a.show_url||`${d("user.jobs.show")}/${a.id}`,p=l.useRef(null),n=l.useRef(null),x=l.useRef(null),c=l.useRef(null);l.useEffect(()=>{let a=!1;return L(async()=>{const{Modal:r}=await import("./bootstrap.esm-ifhUiil8.js");return{Modal:r}},[]).then(({Modal:r})=>{a||(p.current&&(n.current=new r(p.current)),x.current&&(c.current=new r(x.current),z&&c.current.show()))}),()=>{var r,_;a=!0,(r=n.current)==null||r.dispose(),(_=c.current)==null||_.dispose()}},[]);const M=()=>{var a;return(a=n.current)==null?void 0:a.show()},j=()=>{var a;return(a=n.current)==null?void 0:a.hide()},u=()=>{var a;return(a=c.current)==null?void 0:a.hide()},t=T({cover_letter:"",resume:null,name:"",email:""}),[i,f]=l.useState({cover_letter:"",resume:"",name:"",email:""}),h=t.data.cover_letter.trim().length,R=h>=m?"#48d597":"#f07070",C=()=>{const a={cover_letter:"",resume:"",name:"",email:""};h<m&&(a.cover_letter=`Please write at least ${m} characters.`);const r=t.data.resume;return r?!O.test(r.name)&&!U.includes(r.type)?a.resume="Only PDF, DOC, or DOCX files are accepted.":r.size>I&&(a.resume="File size must not exceed 5 MB."):a.resume="Please upload your resume.",f(a),!a.cover_letter&&!a.resume},A=a=>{if(a.preventDefault(),!C()){const r=document.querySelector("#jobApplyModalPage .is-invalid");r&&r.scrollIntoView({behavior:"smooth",block:"center"});return}t.post(E,{forceFormData:!0,onSuccess:()=>{t.reset(),f({cover_letter:"",resume:"",name:"",email:""}),j()}})};return s?e.jsxs(e.Fragment,{children:[e.jsx($,{title:s.title}),e.jsx("style",{children:`
        /* ── Tokens ─────────────────────────────────────── */
        :root {
            --bg: #0e1618;
            --surface: #131e21;
            --surface-2: #192428;
            --border: rgba(255, 255, 255, .08);
            --accent: #48d597;
            --accent-dim: rgba(72, 213, 151, .10);
            --accent-glow: rgba(72, 213, 151, .18);
            --text: #F5f5f7;
            --muted: rgba(255, 255, 255, .45);
            --radius: 12px;
            --radius-sm: 8px;
        }

        /* ── Page shell ─────────────────────────────────── */
        .jd-page {
            background: var(--bg);
            min-height: 100vh;
            padding: 48px 0 80px;
            font-family: 'DM Sans', sans-serif;
        }

        /* ── Hero banner ────────────────────────────────── */
        .jd-hero {
            position: relative;
            border-radius: var(--radius);
            overflow: hidden;
            margin-bottom: 28px;
            height: 220px;
        }

        .jd-hero img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(.45) saturate(.6);
        }

        [data-h-theme="light"] .jd-hero img {
            filter: brightness(.65) saturate(.8);
        }

        .jd-hero__overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 30%, rgba(14, 22, 24, .92) 100%);
            display: flex;
            align-items: flex-end;
            padding: 24px 28px;
        }

        [data-h-theme="light"] .jd-hero__overlay {
            background: linear-gradient(180deg, transparent 30%, rgba(16, 32, 27, .88) 100%);
        }

        .jd-hero__title {
            font-family: 'Syne', sans-serif;
            font-size: clamp(22px, 3vw, 32px);
            font-weight: 800;
            color: var(--text);
            margin: 0;
            line-height: 1.2;
        }

        /* ── Meta strip ─────────────────────────────────── */
        .jd-meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 16px 0 20px;
            border-bottom: 1px solid var(--border);
            margin-bottom: 28px;
        }

        .jd-meta__left {
            display: flex;
            flex-wrap: wrap;
            gap: 18px;
            align-items: center;
        }

        .jd-meta__item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--muted);
        }

        .jd-meta__item a {
            color: var(--accent);
            text-decoration: none;
            font-weight: 600;
        }

        .jd-meta__item a:hover {
            text-decoration: underline;
        }

        .jd-meta__item i {
            font-size: 14px;
        }

        .jd-badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            background: var(--accent-dim);
            color: var(--accent);
            border: 1px solid rgba(72, 213, 151, .25);
        }

        /* ── Section labels ─────────────────────────────── */
        .jd-section-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: var(--muted);
            margin-bottom: 10px;
        }

        /* ── Description ─────────────────────────────────── */
        .jd-description {
            font-size: 15px;
            color: rgba(255, 255, 255, .75);
            line-height: 1.75;
            margin-bottom: 28px;
        }

        [data-h-theme="light"] .jd-description {
            color: rgba(16, 32, 27, .78);
        }

        /* ── Info pills row ─────────────────────────────── */
        .jd-info-row {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 28px;
        }

        .jd-info-pill {
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--surface-2);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            padding: 10px 16px;
            font-size: 13px;
            color: rgba(255, 255, 255, .75);
        }

        [data-h-theme="light"] .jd-info-pill {
            color: rgba(16, 32, 27, .78);
        }

        .jd-info-pill strong {
            color: var(--text);
            font-weight: 600;
            margin-right: 4px;
        }

        .jd-info-pill i {
            color: var(--accent);
            font-size: 15px;
        }

        /* ── Skills ─────────────────────────────────────── */
        .jd-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 32px;
        }

        .jd-skill-tag {
            padding: 5px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            background: var(--surface-2);
            border: 1px solid var(--border);
            color: rgba(255, 255, 255, .75);
            transition: border-color .2s, color .2s;
        }

        [data-h-theme="light"] .jd-skill-tag {
            color: rgba(16, 32, 27, .78);
        }

        .jd-skill-tag:hover {
            border-color: var(--accent);
            color: var(--accent);
        }

        /* ── Company card ───────────────────────────────── */
        .jd-company {
            display: flex;
            align-items: center;
            gap: 16px;
            background: var(--surface-2);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 20px 20px;
            margin-bottom: 32px;
        }

        .jd-company__avatar {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--accent-dim);
            flex-shrink: 0;
        }

        .jd-company__name {
            font-family: 'Syne', sans-serif;
            font-size: 15px;
            font-weight: 700;
            color: var(--text);
            margin: 0 0 4px;
        }

        .jd-company__bio {
            font-size: 13px;
            color: var(--muted);
            margin: 0;
            line-height: 1.5;
        }

        /* ── Apply CTA ──────────────────────────────────── */
        .jd-apply-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 32px;
            border-radius: var(--radius-sm);
            background: var(--accent);
            color: #0e1618;
            font-size: 15px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            font-family: 'DM Sans', sans-serif;
            transition: background .2s, transform .15s;
            text-decoration: none;
        }

        .jd-apply-btn:hover {
            background: #5fe8a8;
            color: #0e1618;
            transform: translateY(-1px);
        }

        .jd-apply-btn i {
            font-size: 16px;
        }

        /* ── Sidebar cards ──────────────────────────────── */
        .jd-sidebar-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            overflow: hidden;
            margin-bottom: 20px;
            transition: border-color .25s;
        }

        .jd-sidebar-card:hover {
            border-color: rgba(255, 255, 255, .15);
        }

        [data-h-theme="light"] .jd-sidebar-card:hover {
            border-color: rgba(0, 100, 60, .2);
        }

        .jd-sidebar-card__header {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 14px 18px;
            border-bottom: 1px solid var(--border);
        }

        .jd-sidebar-card__header img {
            width: 18px;
            height: 18px;
            opacity: .7;
        }

        [data-h-theme="light"] .jd-sidebar-card__header img {
            filter: invert(0.4) sepia(1) saturate(4) hue-rotate(100deg);
        }

        .jd-sidebar-card__header h6 {
            font-size: 13px;
            font-weight: 700;
            color: var(--text);
            margin: 0;
            letter-spacing: .02em;
        }

        .jd-sidebar-card__body {
            padding: 16px 18px;
        }

        /* Categories */
        .jd-cat-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .jd-cat-list li a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 10px;
            border-radius: var(--radius-sm);
            font-size: 13px;
            color: var(--muted);
            text-decoration: none;
            transition: background .2s, color .2s;
        }

        .jd-cat-list li a:hover,
        .jd-cat-list li a.active {
            background: var(--accent-dim);
            color: var(--accent);
        }

        /* Recent jobs */
        .jd-recent-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .jd-recent-item {
            display: flex;
            gap: 12px;
            align-items: flex-start;
        }

        .jd-recent-item__thumb {
            width: 54px;
            height: 44px;
            border-radius: 6px;
            object-fit: cover;
            flex-shrink: 0;
            border: 1px solid var(--border);
        }

        .jd-recent-item__title a {
            font-size: 13px;
            font-weight: 600;
            color: rgba(255, 255, 255, .8);
            text-decoration: none;
            line-height: 1.4;
            display: block;
            margin-bottom: 4px;
        }

        [data-h-theme="light"] .jd-recent-item__title a {
            color: rgba(16, 32, 27, .85);
        }

        .jd-recent-item__title a:hover {
            color: var(--accent);
        }

        .jd-recent-item__meta {
            font-size: 11px;
            color: var(--muted);
        }

        /* Tags */
        .jd-tags-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .jd-tags-list li a {
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            background: var(--surface-2);
            border: 1px solid var(--border);
            color: var(--muted);
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
        }

        .jd-tags-list li a:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-dim);
        }

        /* ── Modals — genuine Bootstrap Modal, themed to match app ── */
        .jd-modal .modal-content {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            color: var(--text);
        }

        .jd-modal .modal-header {
            border-bottom: 1px solid var(--border);
            padding: 18px 24px;
        }

        .jd-modal .modal-title {
            font-family: 'Syne', sans-serif;
            font-size: 17px;
            font-weight: 700;
        }

        .jd-modal .modal-body {
            padding: 24px;
        }

        .jd-modal .form-label {
            font-size: 13px;
            font-weight: 600;
            color: rgba(255, 255, 255, .7);
            margin-bottom: 6px;
        }

        [data-h-theme="light"] .jd-modal .form-label {
            color: rgba(16, 32, 27, .75);
        }

        .jd-modal .form-control {
            background: var(--surface-2);
            border: 1px solid var(--border);
            color: var(--text);
            border-radius: var(--radius-sm);
            font-size: 14px;
            padding: 10px 14px;
            font-family: 'DM Sans', sans-serif;
        }

        .jd-modal .form-control:focus {
            background: var(--surface-2);
            border-color: var(--accent);
            color: var(--text);
            box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .jd-modal .form-control::placeholder {
            color: var(--muted);
        }

        .jd-modal .form-control.is-invalid {
            border-color: #f07070;
        }

        .jd-modal .fc-error-text {
            font-size: 12px;
            color: #f07070;
            margin-top: 6px;
        }

        .jd-cover-count {
            font-size: 11px;
            color: var(--muted);
            margin-top: 6px;
            text-align: right;
        }

        .jd-modal-submit {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 28px;
            background: var(--accent);
            color: #0e1618;
            border: none;
            border-radius: var(--radius-sm);
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            font-family: 'DM Sans', sans-serif;
            transition: background .2s;
        }

        .jd-modal-submit:hover {
            background: #5fe8a8;
        }

        .jd-modal-submit:disabled {
            opacity: .65;
            cursor: not-allowed;
        }

        .jd-modal-subscribe .modal-content {
            background: var(--surface);
            border: 1px solid rgba(72, 213, 151, .2);
            border-radius: var(--radius);
            color: var(--text);
        }

        .jd-modal-subscribe .modal-header {
            border-bottom: 1px solid rgba(72, 213, 151, .15);
            padding: 18px 24px;
        }

        .jd-modal-subscribe .modal-title {
            font-family: 'Syne', sans-serif;
            font-size: 17px;
            font-weight: 700;
            color: var(--accent);
        }

        .jd-modal-subscribe .modal-body {
            padding: 24px;
            font-size: 14px;
            color: rgba(255, 255, 255, .75);
            line-height: 1.65;
        }

        [data-h-theme="light"] .jd-modal-subscribe .modal-body {
            color: rgba(16, 32, 27, .78);
        }

        .jd-modal-subscribe .modal-footer {
            border-top: 1px solid var(--border);
            padding: 16px 24px;
            gap: 10px;
        }

        .jd-subscribe-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 24px;
            background: var(--accent);
            color: #0e1618;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
            border: none;
            transition: background .2s;
        }

        .jd-subscribe-btn:hover {
            background: #5fe8a8;
            color: #0e1618;
        }

        .jd-close-btn {
            padding: 10px 24px;
            background: transparent;
            color: var(--muted);
            border: 1px solid var(--border);
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: border-color .2s, color .2s;
            font-family: 'DM Sans', sans-serif;
        }

        .jd-close-btn:hover {
            border-color: rgba(255, 255, 255, .25);
            color: var(--text);
        }

        .jd-btn-close {
            background: transparent;
            border: none;
            color: var(--text);
            filter: invert(1) brightness(2);
            font-size: 1rem;
            cursor: pointer;
            line-height: 1;
            opacity: .8;
        }

        .jd-btn-close:hover {
            opacity: 1;
        }

        [data-h-theme="light"] .jd-btn-close {
            filter: none;
            color: var(--text);
        }

        /* ══════════════════════════════════════
           LIGHT THEME OVERRIDES
           (matches the app-wide header toggle, same token set used
           in SkillProfile / JobsIndex)
        ══════════════════════════════════════ */
        [data-h-theme="light"] {
            --bg: #f6faf8;
            --surface: #F5f5f7;
            --surface-2: #eef6f2;
            --border: rgba(0, 100, 60, .1);
            --accent: #00a667;
            --accent-dim: rgba(0, 166, 103, .08);
            --accent-glow: rgba(0, 166, 103, .18);
            --text: #10201b;
            --muted: rgba(16, 32, 27, .5);
        }
      `}),e.jsx("div",{className:"jd-page",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"col-lg-10 mx-auto",children:[e.jsxs("div",{className:"jd-hero",children:[e.jsx("img",{src:o("/assets/img/blog/blog-large-01.jpg"),alt:""}),e.jsx("div",{className:"jd-hero__overlay",children:e.jsx("h1",{className:"jd-hero__title",children:s.title})})]}),e.jsxs("div",{className:"jd-meta",children:[e.jsxs("div",{className:"jd-meta__left",children:[e.jsxs("span",{className:"jd-meta__item",children:[e.jsx("i",{className:"feather-briefcase"}),e.jsx("a",{href:"javascript:void(0);",children:(v=s.company)==null?void 0:v.name})]}),e.jsxs("span",{className:"jd-meta__item",children:[e.jsx("i",{className:"feather-calendar"}),s.updated_at&&new Date(s.updated_at).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})]}),e.jsxs("span",{className:"jd-meta__item",children:[e.jsx("i",{className:"feather-map-pin"}),s.location??"Remote"]})]}),e.jsx("span",{className:"jd-badge",children:s.type??"Full-time"})]}),e.jsx("p",{className:"jd-section-label",children:"About this role"}),e.jsx("p",{className:"jd-description",children:s.description}),e.jsxs("div",{className:"jd-info-row",children:[e.jsxs("div",{className:"jd-info-pill",children:[e.jsx("i",{className:"feather-trending-up"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Experience"})," ",s.experience_level??"Any"]})]}),e.jsxs("div",{className:"jd-info-pill",children:[e.jsx("i",{className:"feather-dollar-sign"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Salary"})," ",s.salary_range??"Negotiable"]})]})]}),e.jsx("p",{className:"jd-section-label",children:"Skills Required"}),e.jsx("div",{className:"jd-skills mb-4",children:(s.skills_list||[]).map((a,r)=>e.jsx("span",{className:"jd-skill-tag",children:a},r))}),e.jsx("p",{className:"jd-section-label",children:"About the company"}),e.jsxs("div",{className:"jd-company",children:[e.jsx("img",{src:o("/assets/img/user/user-06.jpg"),className:"jd-company__avatar",alt:""}),e.jsxs("div",{children:[e.jsx("p",{className:"jd-company__name",children:(y=s.company)==null?void 0:y.name}),e.jsx("p",{className:"jd-company__bio",children:"Experienced project management and digital talent acquisition team focused on connecting top Rwandan talent with global opportunities."})]})]}),e.jsxs("button",{className:"jd-apply-btn",onClick:()=>M(),children:[e.jsx("i",{className:"feather-send"}),"Apply for this Job"]})]})}),e.jsxs("div",{className:"col-lg-4",children:[e.jsxs("div",{className:"jd-sidebar-card",children:[e.jsxs("div",{className:"jd-sidebar-card__header",children:[e.jsx("img",{src:o("/assets/img/icons/category-icon.svg"),alt:""}),e.jsx("h6",{children:"Categories"})]}),e.jsx("div",{className:"jd-sidebar-card__body",children:e.jsx("ul",{className:"jd-cat-list",children:N.map(a=>e.jsx("li",{children:e.jsxs(g,{href:`${d("user.jobs.index")}?${new URLSearchParams({...b,category:a.id}).toString()}`,className:String(b.category)===String(a.id)?"active":"",children:[a.name,e.jsx("span",{className:"jd-badge",style:{fontSize:10,padding:"2px 8px"},children:a.job_sections_count})]})},a.id))})})]}),e.jsxs("div",{className:"jd-sidebar-card",children:[e.jsxs("div",{className:"jd-sidebar-card__header",children:[e.jsx("img",{src:o("/assets/img/icons/blog-icon.svg"),alt:""}),e.jsx("h6",{children:"Recent Jobs"})]}),e.jsx("div",{className:"jd-sidebar-card__body",children:e.jsx("ul",{className:"jd-recent-list",children:w.map(a=>{var r;return e.jsxs("li",{className:"jd-recent-item",children:[e.jsx("img",{className:"jd-recent-item__thumb",src:o("/assets/img/blog/blog-thumb-01.jpg"),alt:""}),e.jsxs("div",{className:"jd-recent-item__title",children:[e.jsx(g,{href:D(a),children:a.title}),e.jsxs("div",{className:"jd-recent-item__meta",children:[(r=a.company)==null?void 0:r.name," ·"," ",a.updated_at&&new Date(a.updated_at).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})]})]})]},a.id)})})})]}),e.jsxs("div",{className:"jd-sidebar-card",children:[e.jsxs("div",{className:"jd-sidebar-card__header",children:[e.jsx("img",{src:o("/assets/img/icons/tag-icon.svg"),alt:""}),e.jsx("h6",{children:"Popular Tags"})]}),e.jsx("div",{className:"jd-sidebar-card__body",children:e.jsxs("ul",{className:"jd-tags-list",children:[e.jsx("li",{children:e.jsx("a",{href:"#",children:"In-Demand Skills"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Freelancing"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Business"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Future Trends"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Digital Marketing"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Home Care"})})]})})]})]})]})})}),e.jsx("div",{className:"modal fade jd-modal",id:"jobApplyModalPage",tabIndex:"-1","aria-labelledby":"jobApplyModalLabel","aria-hidden":"true",ref:p,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",id:"jobApplyModalLabel",children:["Apply for “",s.title,"”"]}),e.jsx("button",{type:"button",className:"jd-btn-close",onClick:()=>j(),"aria-label":"Close",children:"✕"})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("form",{onSubmit:A,noValidate:!0,encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"form-label",children:"Name"}),e.jsx("input",{type:"text",className:`form-control${i.name?" is-invalid":""}`,placeholder:"Your Name",value:t.data.name,onChange:a=>t.setData("name",a.target.value)}),i.name&&e.jsx("div",{className:"fc-error-text",children:i.name})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{type:"email",className:`form-control${i.email?" is-invalid":""}`,placeholder:"Your Email",value:t.data.email,onChange:a=>t.setData("email",a.target.value)}),i.email&&e.jsx("div",{className:"fc-error-text",children:i.email})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"form-label",children:"Cover Letter"}),e.jsx("textarea",{className:`form-control${i.cover_letter?" is-invalid":""}`,rows:5,placeholder:"Tell the employer why you're a great fit…",value:t.data.cover_letter,onChange:a=>t.setData("cover_letter",a.target.value)}),e.jsxs("div",{className:"jd-cover-count",style:{color:R},children:[h," / ",m,"+ characters"]}),i.cover_letter&&e.jsx("div",{className:"fc-error-text",children:i.cover_letter}),t.errors.cover_letter&&e.jsx("div",{className:"fc-error-text",children:t.errors.cover_letter})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label",children:"Resume (PDF / DOC)"}),e.jsx("input",{type:"file",className:`form-control${i.resume?" is-invalid":""}`,accept:".pdf,.doc,.docx",onChange:a=>{var r;return t.setData("resume",((r=a.target.files)==null?void 0:r[0])??null)}}),i.resume&&e.jsx("div",{className:"fc-error-text",children:i.resume}),t.errors.resume&&e.jsx("div",{className:"fc-error-text",children:t.errors.resume})]}),e.jsxs("button",{type:"submit",className:"jd-modal-submit",disabled:t.processing,children:[e.jsx("i",{className:`feather-${t.processing?"loader":"send"}`})," ",t.processing?"Submitting…":"Submit Application"]})]})})]})})}),e.jsx("div",{className:"modal fade jd-modal-subscribe",id:"jobSubscribeModalPage",tabIndex:"-1","aria-hidden":"true",ref:x,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Subscription Required"}),e.jsx("button",{type:"button",className:"jd-btn-close",onClick:()=>u(),children:"✕"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("p",{children:"To apply for jobs on FutureConnect, you need an active subscription."}),e.jsx("p",{className:"mb-0",children:"Upgrade your plan to start applying and get noticed by top companies."})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsxs(g,{href:d("pricing"),className:"jd-subscribe-btn",children:[e.jsx("i",{className:"feather-zap"})," Subscribe Now"]}),e.jsx("button",{type:"button",className:"jd-close-btn",onClick:()=>u(),children:"Not now"})]})]})})})]}):null}H.layout=s=>e.jsx(F,{children:s,title:"Job Details"});export{H as default};
