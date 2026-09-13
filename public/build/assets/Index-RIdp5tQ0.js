import{r as d,j as e,H as G,L as h,a as E}from"./app-BV2sDVKx.js";import{A as U}from"./AppLayout-KiVsabfS.js";function le({courses:t=[]}){const[s,l]=d.useState(""),[x,b]=d.useState("all"),[u,P]=d.useState("all"),[y,$]=d.useState("newest"),[N,D]=d.useState("grid"),[k,z]=d.useState(null),[B,V]=d.useState(null),Y=d.useMemo(()=>{const r=t.map(i=>{var o;return(o=i.category)==null?void 0:o.name}).filter(Boolean);return[...new Set(r)]},[t]),g=d.useMemo(()=>{const r=t.filter(a=>a.status==="published"),i=t.filter(a=>a.status!=="published"),o=t.reduce((a,c)=>a+Number(c.enrollments_count??0),0),m=t.map(a=>Number(a.feedback_avg_rating??0)).filter(a=>a>0),S=m.length>0?m.reduce((a,c)=>a+c,0)/m.length:0,j=t.reduce((a,c)=>c.is_free?a:a+Number(c.price??0)*Number(c.enrollments_count??0),0);return{total:t.length,published:r.length,drafts:i.length,enrollments:o,averageRating:S,revenue:j}},[t]),C=d.useMemo(()=>{let r=t.filter(i=>{var j,a,c,A;const o=((j=i.title)==null?void 0:j.toLowerCase().includes(s.toLowerCase()))||((c=(a=i.category)==null?void 0:a.name)==null?void 0:c.toLowerCase().includes(s.toLowerCase())),m=x==="all"||i.status===x,S=u==="all"||((A=i.category)==null?void 0:A.name)===u;return o&&m&&S});return r=[...r].sort((i,o)=>{switch(y){case"learners":return Number(o.enrollments_count??0)-Number(i.enrollments_count??0);case"rating":return Number(o.feedback_avg_rating??0)-Number(i.feedback_avg_rating??0);case"price":return Number(o.price??0)-Number(i.price??0);case"title":return(i.title||"").localeCompare(o.title||"");default:return Number(o.id??0)-Number(i.id??0)}}),r},[t,s,x,u,y]),p=d.useMemo(()=>t.length?[...t].sort((r,i)=>Number(i.enrollments_count??0)-Number(r.enrollments_count??0))[0]:null,[t]);function Z(){k&&E.delete(route("talent.courses.destroy",k.id),{preserveScroll:!0,onSuccess:()=>z(null)})}return e.jsxs(U,{children:[e.jsx(G,{title:"Talent Studio — Courses"}),e.jsxs("div",{className:"talent-studio",children:[e.jsx("style",{children:`
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

                    :root {
                        --talent-green: #00a667;
                        --talent-green-dark: #008653;
                        --talent-green-soft: #e9f8f1;
                        --talent-black: #0b0d0f;
                        --talent-text: #111827;
                        --talent-muted: #6b7280;
                        --talent-border: #e8ecea;
                        --talent-bg: #f7f9f8;
                        --talent-white: #ffffff;
                    }

                    .talent-studio {
                        min-height: 100vh;
                        background: var(--talent-bg);
                        color: var(--talent-text);
                        font-family: "DM Sans", sans-serif;
                    }

                    .talent-studio h1,
                    .talent-studio h2,
                    .talent-studio h3,
                    .talent-studio h4,
                    .talent-studio h5,
                    .talent-studio h6 {
                        font-family: "Space Grotesk", sans-serif;
                    }

                    .studio-container {
                        max-width: 1380px;
                        margin: auto;
                        padding: 28px;
                    }

                    .hero {
                        position: relative;
                        overflow: hidden;
                        border-radius: 24px;
                        background: var(--talent-black);
                        color: white;
                        padding: 34px;
                        margin-bottom: 24px;
                    }

                    .hero::after {
                        content: "";
                        position: absolute;
                        width: 260px;
                        height: 260px;
                        border-radius: 50%;
                        background: rgba(0, 166, 103, .18);
                        right: -80px;
                        top: -100px;
                    }

                    .hero-content {
                        position: relative;
                        z-index: 2;
                    }

                    .eyebrow {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 7px 11px;
                        border-radius: 999px;
                        background: rgba(255,255,255,.08);
                        color: #b9f1d8;
                        font-size: 12px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: .08em;
                    }

                    .hero-title {
                        font-size: clamp(28px, 4vw, 44px);
                        line-height: 1.05;
                        margin: 15px 0 10px;
                        max-width: 680px;
                    }

                    .hero-description {
                        color: rgba(255,255,255,.66);
                        max-width: 620px;
                        margin-bottom: 24px;
                    }

                    .hero-actions {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .btn-primary-talent {
                        background: var(--talent-green);
                        border: 1px solid var(--talent-green);
                        color: white;
                        border-radius: 12px;
                        padding: 11px 17px;
                        font-weight: 700;
                        text-decoration: none;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        transition: .2s;
                    }

                    .btn-primary-talent:hover {
                        background: #00b873;
                        color: white;
                        transform: translateY(-1px);
                    }

                    .btn-ghost-talent {
                        background: rgba(255,255,255,.07);
                        border: 1px solid rgba(255,255,255,.14);
                        color: white;
                        border-radius: 12px;
                        padding: 11px 17px;
                        font-weight: 600;
                        text-decoration: none;
                    }

                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        gap: 14px;
                        margin-bottom: 24px;
                    }

                    .stat-card {
                        background: white;
                        border: 1px solid var(--talent-border);
                        border-radius: 18px;
                        padding: 18px;
                        min-height: 125px;
                        transition: .2s;
                    }

                    .stat-card:hover {
                        transform: translateY(-2px);
                        border-color: #cfd8d4;
                    }

                    .stat-top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 15px;
                    }

                    .stat-icon {
                        width: 38px;
                        height: 38px;
                        border-radius: 11px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--talent-green-soft);
                        color: var(--talent-green);
                    }

                    .stat-label {
                        color: var(--talent-muted);
                        font-size: 12px;
                        font-weight: 600;
                    }

                    .stat-value {
                        font-family: "Space Grotesk";
                        font-size: 25px;
                        font-weight: 700;
                    }

                    .dashboard-grid {
                        display: grid;
                        grid-template-columns: 1.7fr 1fr;
                        gap: 18px;
                        margin-bottom: 24px;
                    }

                    .panel {
                        background: white;
                        border: 1px solid var(--talent-border);
                        border-radius: 20px;
                        padding: 22px;
                    }

                    .panel-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 15px;
                        margin-bottom: 18px;
                    }

                    .panel-title {
                        margin: 0;
                        font-size: 17px;
                        font-weight: 700;
                    }

                    .panel-subtitle {
                        color: var(--talent-muted);
                        font-size: 12px;
                        margin-top: 3px;
                    }

                    .featured-course {
                        display: flex;
                        align-items: center;
                        gap: 18px;
                    }

                    .featured-thumb {
                        width: 125px;
                        height: 82px;
                        border-radius: 13px;
                        object-fit: cover;
                        flex-shrink: 0;
                        background: var(--talent-bg);
                    }

                    .featured-title {
                        font-size: 17px;
                        font-weight: 700;
                        margin-bottom: 7px;
                    }

                    .featured-meta {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 12px;
                        color: var(--talent-muted);
                        font-size: 12px;
                    }

                    .progress-wrap {
                        margin-top: 14px;
                    }

                    .progress-label {
                        display: flex;
                        justify-content: space-between;
                        font-size: 11px;
                        color: var(--talent-muted);
                        margin-bottom: 6px;
                    }

                    .progress {
                        height: 7px;
                        background: #edf1ef;
                        border-radius: 99px;
                        overflow: hidden;
                    }

                    .progress-bar {
                        height: 100%;
                        background: var(--talent-green);
                        border-radius: 99px;
                    }

                    .tips {
                        display: flex;
                        flex-direction: column;
                        gap: 11px;
                    }

                    .tip {
                        display: flex;
                        gap: 11px;
                        padding: 12px;
                        border-radius: 13px;
                        background: #f8faf9;
                    }

                    .tip-icon {
                        color: var(--talent-green);
                        flex-shrink: 0;
                    }

                    .tip-title {
                        font-size: 13px;
                        font-weight: 700;
                        margin-bottom: 2px;
                    }

                    .tip-text {
                        font-size: 11px;
                        color: var(--talent-muted);
                        line-height: 1.45;
                    }

                    .toolbar {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        gap: 12px;
                        margin-bottom: 18px;
                    }

                    .search-box {
                        position: relative;
                        width: 320px;
                    }

                    .search-box input {
                        width: 100%;
                        height: 43px;
                        border-radius: 12px;
                        border: 1px solid var(--talent-border);
                        padding: 0 14px 0 40px;
                        background: white;
                        outline: none;
                        font-size: 13px;
                    }

                    .search-box input:focus {
                        border-color: var(--talent-green);
                        box-shadow: 0 0 0 3px rgba(0,166,103,.10);
                    }

                    .search-icon {
                        position: absolute;
                        left: 14px;
                        top: 50%;
                        transform: translateY(-50%);
                        color: var(--talent-muted);
                    }

                    .filters {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                    }

                    .filter-select {
                        height: 43px;
                        border: 1px solid var(--talent-border);
                        border-radius: 12px;
                        background: white;
                        padding: 0 12px;
                        color: #374151;
                        font-size: 12px;
                        outline: none;
                    }

                    .view-switch {
                        display: flex;
                        align-items: center;
                        border: 1px solid var(--talent-border);
                        background: white;
                        border-radius: 12px;
                        overflow: hidden;
                    }

                    .view-button {
                        border: 0;
                        background: transparent;
                        width: 40px;
                        height: 41px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--talent-muted);
                    }

                    .view-button.active {
                        background: var(--talent-green-soft);
                        color: var(--talent-green);
                    }

                    .courses-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: end;
                        margin-bottom: 15px;
                    }

                    .courses-title {
                        font-size: 22px;
                        margin: 0;
                    }

                    .courses-count {
                        color: var(--talent-muted);
                        font-size: 12px;
                    }

                    .course-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 16px;
                    }

                    .course-list {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }

                    .course-card {
                        overflow: hidden;
                        background: white;
                        border: 1px solid var(--talent-border);
                        border-radius: 18px;
                        transition: .2s;
                    }

                    .course-card:hover {
                        transform: translateY(-3px);
                        border-color: #ccd6d1;
                        box-shadow: 0 12px 30px rgba(0,0,0,.05);
                    }

                    .course-list .course-card {
                        display: flex;
                    }

                    .course-list .course-image-wrap {
                        width: 220px;
                        flex-shrink: 0;
                    }

                    .course-list .course-image {
                        height: 100%;
                        min-height: 150px;
                    }

                    .course-image-wrap {
                        position: relative;
                    }

                    .course-image {
                        width: 100%;
                        height: 150px;
                        object-fit: cover;
                        background: #eef3f0;
                        display: block;
                    }

                    .course-placeholder {
                        height: 150px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(
                            135deg,
                            #edf8f3,
                            #f6f8f7
                        );
                        color: var(--talent-green);
                    }

                    .status-badge {
                        position: absolute;
                        right: 10px;
                        top: 10px;
                        padding: 5px 9px;
                        border-radius: 999px;
                        font-size: 10px;
                        font-weight: 700;
                        background: white;
                        box-shadow: 0 4px 15px rgba(0,0,0,.08);
                    }

                    .status-published {
                        color: var(--talent-green-dark);
                    }

                    .status-draft {
                        color: #8a6500;
                    }

                    .course-body {
                        padding: 15px;
                    }

                    .course-category {
                        display: inline-flex;
                        padding: 5px 8px;
                        border-radius: 7px;
                        background: #f2f5f3;
                        color: #4b5563;
                        font-size: 10px;
                        font-weight: 600;
                        margin-bottom: 9px;
                    }

                    .course-title {
                        font-size: 15px;
                        line-height: 1.3;
                        font-weight: 700;
                        margin: 0 0 10px;
                    }

                    .course-meta {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                        color: var(--talent-muted);
                        font-size: 10px;
                        margin-bottom: 12px;
                    }

                    .course-meta span {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                    }

                    .course-footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 8px;
                    }

                    .price {
                        font-size: 14px;
                        font-weight: 800;
                    }

                    .free-badge {
                        color: var(--talent-green-dark);
                        background: var(--talent-green-soft);
                        padding: 5px 8px;
                        border-radius: 7px;
                        font-size: 10px;
                        font-weight: 700;
                    }

                    .course-actions {
                        display: flex;
                        gap: 6px;
                    }

                    .small-action {
                        border: 1px solid var(--talent-border);
                        background: white;
                        color: #374151;
                        border-radius: 8px;
                        padding: 6px 8px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                    }

                    .small-action:hover {
                        color: var(--talent-green);
                        border-color: #bfe8d5;
                        background: var(--talent-green-soft);
                    }

                    .menu-wrapper {
                        position: relative;
                    }

                    .menu-button {
                        border: 1px solid var(--talent-border);
                        width: 30px;
                        height: 30px;
                        border-radius: 8px;
                        background: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .dropdown {
                        position: absolute;
                        right: 0;
                        top: 35px;
                        width: 150px;
                        background: white;
                        border: 1px solid var(--talent-border);
                        border-radius: 12px;
                        padding: 5px;
                        z-index: 30;
                        box-shadow: 0 15px 35px rgba(0,0,0,.12);
                    }

                    .dropdown a,
                    .dropdown button {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        border: 0;
                        background: transparent;
                        padding: 9px 10px;
                        border-radius: 8px;
                        text-decoration: none;
                        color: #374151;
                        font-size: 12px;
                        text-align: left;
                    }

                    .dropdown a:hover,
                    .dropdown button:hover {
                        background: #f4f7f5;
                    }

                    .dropdown .danger {
                        color: #d33d3d;
                    }

                    .empty-state {
                        background: white;
                        border: 1px dashed #ccd6d1;
                        border-radius: 20px;
                        text-align: center;
                        padding: 65px 20px;
                    }

                    .empty-icon {
                        width: 65px;
                        height: 65px;
                        border-radius: 18px;
                        background: var(--talent-green-soft);
                        color: var(--talent-green);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 15px;
                    }

                    .modal-overlay {
                        position: fixed;
                        inset: 0;
                        background: rgba(0,0,0,.48);
                        backdrop-filter: blur(5px);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        padding: 20px;
                    }

                    .delete-modal {
                        width: 100%;
                        max-width: 430px;
                        background: white;
                        border-radius: 22px;
                        padding: 28px;
                        box-shadow: 0 25px 70px rgba(0,0,0,.2);
                        text-align: center;
                    }

                    .delete-icon {
                        width: 58px;
                        height: 58px;
                        border-radius: 16px;
                        background: #fff0ef;
                        color: #d64545;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 16px;
                    }

                    .modal-actions {
                        display: flex;
                        justify-content: center;
                        gap: 8px;
                        margin-top: 22px;
                    }

                    .modal-btn {
                        border: 0;
                        border-radius: 10px;
                        padding: 10px 18px;
                        font-weight: 700;
                    }

                    .modal-cancel {
                        background: #f1f3f2;
                    }

                    .modal-delete {
                        background: #d64545;
                        color: white;
                    }

                    @media(max-width: 1200px) {
                        .stats-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }

                        .course-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }

                    @media(max-width: 900px) {
                        .dashboard-grid {
                            grid-template-columns: 1fr;
                        }

                        .course-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        .search-box {
                            width: 100%;
                        }

                        .toolbar {
                            align-items: stretch;
                        }
                    }

                    @media(max-width: 600px) {
                        .studio-container {
                            padding: 15px;
                        }

                        .hero {
                            padding: 24px;
                            border-radius: 18px;
                        }

                        .stats-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        .course-grid {
                            grid-template-columns: 1fr;
                        }

                        .course-list .course-card {
                            display: block;
                        }

                        .course-list .course-image-wrap {
                            width: 100%;
                        }

                        .filters {
                            width: 100%;
                        }

                        .filter-select {
                            flex: 1;
                        }
                    }
                `}),e.jsxs("div",{className:"studio-container",children:[e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"eyebrow",children:[e.jsx(H,{}),"Talent Studio"]}),e.jsxs("h1",{className:"hero-title",children:["Build your knowledge.",e.jsx("br",{}),"Grow your audience."]}),e.jsx("p",{className:"hero-description",children:"Create, manage and grow professional learning experiences for your talent community."}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs(h,{href:route("talent.courses.create"),className:"btn-primary-talent",children:[e.jsx(_,{}),"Create a course"]}),e.jsx(h,{href:route("talent.courses.index"),className:"btn-ghost-talent",children:"Manage courses"})]})]})}),e.jsxs("section",{className:"stats-grid",children:[e.jsx(f,{icon:e.jsx(w,{}),label:"Total courses",value:g.total}),e.jsx(f,{icon:e.jsx(O,{}),label:"Published",value:g.published}),e.jsx(f,{icon:e.jsx(I,{}),label:"Total learners",value:g.enrollments}),e.jsx(f,{icon:e.jsx(v,{}),label:"Average rating",value:g.averageRating?g.averageRating.toFixed(1):"—"}),e.jsx(f,{icon:e.jsx(J,{}),label:"Estimated revenue",value:`$${g.revenue.toLocaleString(void 0,{minimumFractionDigits:0})}`})]}),p&&e.jsxs("div",{className:"dashboard-grid",children:[e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"panel-title",children:"Top performing course"}),e.jsx("div",{className:"panel-subtitle",children:"Your course with the highest learner engagement"})]}),e.jsx("span",{className:"free-badge",children:"TOP PERFORMER"})]}),e.jsxs("div",{className:"featured-course",children:[p.thumbnail?e.jsx("img",{src:`/${p.thumbnail}`,alt:p.title,className:"featured-thumb"}):e.jsx("div",{className:"featured-thumb d-flex align-items-center justify-content-center",children:e.jsx(w,{size:25})}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("div",{className:"featured-title",children:p.title}),e.jsxs("div",{className:"featured-meta",children:[e.jsxs("span",{children:[e.jsx(I,{size:13}),p.enrollments_count??0," ","learners"]}),e.jsxs("span",{children:[e.jsx(L,{size:13}),p.lessons_count??0," ","lessons"]}),e.jsxs("span",{children:[e.jsx(v,{size:13}),p.feedback_avg_rating?Number(p.feedback_avg_rating).toFixed(1):"N/A"]})]}),e.jsxs("div",{className:"progress-wrap",children:[e.jsxs("div",{className:"progress-label",children:[e.jsx("span",{children:"Course performance"}),e.jsx("strong",{children:"82%"})]}),e.jsx("div",{className:"progress",children:e.jsx("div",{className:"progress-bar",style:{width:"82%"}})})]})]})]})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"panel-title",children:"Creator tips"}),e.jsx("div",{className:"panel-subtitle",children:"Improve your course performance"})]}),e.jsx(H,{size:19})]}),e.jsxs("div",{className:"tips",children:[e.jsx(M,{icon:e.jsx(ee,{}),title:"Use strong thumbnails",text:"A clear visual can improve course discovery."}),e.jsx(M,{icon:e.jsx(v,{}),title:"Collect learner feedback",text:"Ratings build trust and improve conversions."}),e.jsx(M,{icon:e.jsx(L,{}),title:"Keep lessons focused",text:"Short, practical lessons usually feel easier to complete."})]})]})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"courses-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"courses-title",children:"Your courses"}),e.jsxs("div",{className:"courses-count",children:[C.length," of"," ",t.length," courses"]})]}),e.jsxs(h,{href:route("talent.courses.create"),className:"btn-primary-talent",children:[e.jsx(_,{}),"New course"]})]}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"search-box",children:[e.jsx("span",{className:"search-icon",children:e.jsx(Q,{})}),e.jsx("input",{type:"text",placeholder:"Search courses or categories...",value:s,onChange:r=>l(r.target.value)})]}),e.jsxs("div",{className:"filters",children:[e.jsxs("select",{className:"filter-select",value:x,onChange:r=>b(r.target.value),children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"published",children:"Published"}),e.jsx("option",{value:"draft",children:"Drafts"})]}),e.jsxs("select",{className:"filter-select",value:u,onChange:r=>P(r.target.value),children:[e.jsx("option",{value:"all",children:"All categories"}),Y.map(r=>e.jsx("option",{value:r,children:r},r))]}),e.jsxs("select",{className:"filter-select",value:y,onChange:r=>$(r.target.value),children:[e.jsx("option",{value:"newest",children:"Newest"}),e.jsx("option",{value:"learners",children:"Most learners"}),e.jsx("option",{value:"rating",children:"Highest rated"}),e.jsx("option",{value:"price",children:"Highest price"}),e.jsx("option",{value:"title",children:"Alphabetical"})]}),e.jsxs("div",{className:"view-switch",children:[e.jsx("button",{className:`view-button ${N==="grid"?"active":""}`,onClick:()=>D("grid"),children:e.jsx(te,{})}),e.jsx("button",{className:`view-button ${N==="list"?"active":""}`,onClick:()=>D("list"),children:e.jsx(re,{})})]})]})]}),C.length===0?e.jsx(q,{search:s||x!=="all",onCreate:()=>E.visit(route("talent.courses.create"))}):e.jsx("div",{className:N==="grid"?"course-grid":"course-list",children:C.map(r=>e.jsx(W,{course:r,menuOpen:B,setMenuOpen:V,onDelete:()=>z(r)},r.id))})]})]}),e.jsx(K,{course:k,onCancel:()=>z(null),onConfirm:Z})]})]})}function f({icon:t,label:s,value:l}){return e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("div",{className:"stat-icon",children:t}),e.jsx(X,{})]}),e.jsx("div",{className:"stat-label",children:s}),e.jsx("div",{className:"stat-value",children:l})]})}function W({course:t,menuOpen:s,setMenuOpen:l,onDelete:x}){var u;const b=t.status==="published";return e.jsxs("div",{className:"course-card",children:[e.jsxs("div",{className:"course-image-wrap",children:[t.thumbnail?e.jsx("img",{src:`/${t.thumbnail}`,alt:t.title,className:"course-image"}):e.jsx("div",{className:"course-placeholder",children:e.jsx(w,{size:28})}),e.jsx("span",{className:`status-badge ${b?"status-published":"status-draft"}`,children:b?"Published":"Draft"})]}),e.jsxs("div",{className:"course-body",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start gap-2",children:[e.jsx("span",{className:"course-category",children:((u=t.category)==null?void 0:u.name)??"Uncategorized"}),e.jsxs("div",{className:"menu-wrapper",children:[e.jsx("button",{className:"menu-button",onClick:()=>l(s===t.id?null:t.id),children:e.jsx(se,{})}),s===t.id&&e.jsxs("div",{className:"dropdown",children:[e.jsxs(h,{href:route("talent.courses.show",t.id),onClick:()=>l(null),children:[e.jsx(T,{}),"View course"]}),e.jsxs(h,{href:route("talent.courses.edit",t.id),onClick:()=>l(null),children:[e.jsx(F,{}),"Edit course"]}),e.jsxs("button",{className:"danger",onClick:()=>{l(null),x()},children:[e.jsx(R,{}),"Delete"]})]})]})]}),e.jsx("h3",{className:"course-title",children:ae(t.title,58)}),e.jsxs("div",{className:"course-meta",children:[e.jsxs("span",{children:[e.jsx(L,{size:12}),t.lessons_count??0," lessons"]}),e.jsxs("span",{children:[e.jsx(I,{size:12}),t.enrollments_count??0]}),e.jsxs("span",{children:[e.jsx(v,{size:12}),t.feedback_avg_rating?Number(t.feedback_avg_rating).toFixed(1):"—"]})]}),e.jsxs("div",{className:"course-footer",children:[t.is_free?e.jsx("span",{className:"free-badge",children:"FREE"}):e.jsxs("span",{className:"price",children:["$",Number(t.price??0).toFixed(2)]}),e.jsxs("div",{className:"course-actions",children:[e.jsx(h,{href:route("talent.courses.show",t.id),className:"small-action",title:"View course",children:e.jsx(T,{})}),e.jsx(h,{href:route("talent.courses.edit",t.id),className:"small-action",title:"Edit course",children:e.jsx(F,{})})]})]})]})]})}function q({search:t,onCreate:s}){return e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(w,{size:28})}),e.jsx("h3",{children:t?"No courses found":"Create your first course"}),e.jsx("p",{style:{maxWidth:470,margin:"8px auto 20px",color:"#6b7280",fontSize:13},children:t?"Try changing your search or filters.":"Share your expertise with the talent community and start building your audience."}),!t&&e.jsxs("button",{className:"btn-primary-talent",onClick:s,children:[e.jsx(_,{}),"Create your first course"]})]})}function M({icon:t,title:s,text:l}){return e.jsxs("div",{className:"tip",children:[e.jsx("div",{className:"tip-icon",children:t}),e.jsxs("div",{children:[e.jsx("div",{className:"tip-title",children:s}),e.jsx("div",{className:"tip-text",children:l})]})]})}function K({course:t,onCancel:s,onConfirm:l}){return t?e.jsx("div",{className:"modal-overlay",onClick:s,children:e.jsxs("div",{className:"delete-modal",onClick:x=>x.stopPropagation(),children:[e.jsx("div",{className:"delete-icon",children:e.jsx(R,{size:23})}),e.jsx("h3",{style:{fontSize:20,marginBottom:8},children:"Delete course?"}),e.jsxs("p",{style:{color:"#6b7280",fontSize:13,lineHeight:1.6,margin:0},children:["You are about to delete"," ",e.jsx("strong",{children:t.title}),". This action cannot be undone."]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"modal-btn modal-cancel",onClick:s,children:"Cancel"}),e.jsx("button",{className:"modal-btn modal-delete",onClick:l,children:"Delete course"})]})]})}):null}function n({children:t,size:s=16,className:l=""}){return e.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:l,children:t})}function _(t){return e.jsx(n,{...t,children:e.jsx("path",{d:"M12 5v14M5 12h14"})})}function Q(t){return e.jsxs(n,{...t,children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m20 20-4-4"})]})}function w(t){return e.jsxs(n,{...t,children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"})]})}function I(t){return e.jsxs(n,{...t,children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}function v(t){return e.jsx(n,{...t,children:e.jsx("path",{d:"m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1Z"})})}function J(t){return e.jsxs(n,{...t,children:[e.jsx("path",{d:"M20 7V6a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10H5a3 3 0 0 1-3-3V7"}),e.jsx("path",{d:"M16 14h.01"})]})}function O(t){return e.jsx(n,{...t,children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}function X(t){return e.jsx(n,{size:13,...t,children:e.jsx("path",{d:"m18 15-6-6-6 6"})})}function L(t){return e.jsx(n,{...t,children:e.jsx("polygon",{points:"6 3 20 12 6 21 6 3"})})}function ee(t){return e.jsxs(n,{...t,children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("path",{d:"m21 15-5-5L5 21"})]})}function H(t){return e.jsxs(n,{...t,children:[e.jsx("path",{d:"m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5Z"}),e.jsx("path",{d:"m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7Z"})]})}function te(t){return e.jsxs(n,{...t,children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]})}function re(t){return e.jsxs(n,{...t,children:[e.jsx("path",{d:"M8 6h13M8 12h13M8 18h13"}),e.jsx("path",{d:"M3 6h.01M3 12h.01M3 18h.01"})]})}function T(t){return e.jsxs(n,{...t,children:[e.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function F(t){return e.jsxs(n,{...t,children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"})]})}function R(t){return e.jsxs(n,{...t,children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M8 6V4h8v2"}),e.jsx("path",{d:"M19 6v14H5V6"}),e.jsx("path",{d:"M10 11v5M14 11v5"})]})}function se(t){return e.jsxs(n,{size:16,...t,children:[e.jsx("circle",{cx:"5",cy:"12",r:"1"}),e.jsx("circle",{cx:"12",cy:"12",r:"1"}),e.jsx("circle",{cx:"19",cy:"12",r:"1"})]})}function ae(t,s){return t?t.length>s?t.slice(0,s)+"…":t:""}export{le as default};
