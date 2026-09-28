import{r as a,u as G,j as e,H as J,L as K,a as L}from"./app-B2SIh33N.js";import{A as Q}from"./AppLayout-CkTPU_ZW.js";function X(t){if(!t)return null;try{const i=String(t).trim(),n=i.match(/(?:youtube\.com\/watch\?v=)([^&?/]+)/i);if(n!=null&&n[1])return n[1];const l=i.match(/youtu\.be\/([^?&/]+)/i);if(l!=null&&l[1])return l[1];const x=i.match(/youtube\.com\/embed\/([^?&/]+)/i);if(x!=null&&x[1])return x[1];const u=i.match(/youtube\.com\/shorts\/([^?&/]+)/i);return u!=null&&u[1]?u[1]:null}catch{return null}}function _(t){const i=Math.max(0,Math.floor(Number(t)||0)),n=Math.floor(i/3600),l=Math.floor(i%3600/60),x=i%60;return n>0?`${n}:${String(l).padStart(2,"0")}:${String(x).padStart(2,"0")}`:`${l}:${String(x).padStart(2,"0")}`}function ee(t){return t?String(t).split(" ").filter(Boolean).slice(0,2).map(i=>{var n;return(n=i[0])==null?void 0:n.toUpperCase()}).join(""):"C"}function W(t,i=160){if(!t)return"";const n=String(t);return n.length<=i?n:`${n.substring(0,i)}...`}const d={Play:({size:t=18})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M8 5.14v13.72a1 1 0 0 0 1.5.86l10-6.86a1 1 0 0 0 0-1.72l-10-6.86A1 1 0 0 0 8 5.14Z"})}),Lock:({size:t=18})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"10",rx:"2"}),e.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]}),Check:({size:t=18})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m5 12 4 4L19 6"})}),Book:({size:t=18})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22Z"}),e.jsx("path",{d:"M4 5.5V22"})]}),Users:({size:t=18})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Star:({size:t=17,filled:i=!1})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:i?"currentColor":"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3Z"})})};function ie({course:t,isEnrolled:i=!1,auth:n}){var T,$,A;const[l,x]=a.useState(!1),[u,E]=a.useState(!1),[y,N]=a.useState(0),[V,k]=a.useState(!1),[te,v]=a.useState(!1),[h,I]=a.useState(!!i),[j,M]=a.useState(!1),C=a.useRef(null),r=a.useRef(null),m=a.useMemo(()=>X(t==null?void 0:t.video),[t==null?void 0:t.video]),c=a.useMemo(()=>Math.max(0,Number((t==null?void 0:t.preview_duration)||0)),[t==null?void 0:t.preview_duration]),w=a.useMemo(()=>[...(t==null?void 0:t.lessons)||[]].sort((s,o)=>Number(s.order||0)-Number(o.order||0)),[t==null?void 0:t.lessons]),b=(t==null?void 0:t.reviews)||[],P=a.useMemo(()=>b.length?b.reduce((o,f)=>o+Number(f.rating||0),0)/b.length:0,[b]),Y=Number((t==null?void 0:t.enrollments_count)||0),D=a.useMemo(()=>t!=null&&t.is_free||c<=0?0:Math.min(100,Math.round(y/c*100)),[t==null?void 0:t.is_free,c,y]),{data:S,setData:z,post:H,processing:F,errors:p,reset:U}=G({course_id:t.id,title:"",content:"",video_url:"",order:w.length+1});a.useEffect(()=>{I(!!i)},[i]),a.useEffect(()=>{var f;if(!l||!m)return;if((f=window.YT)!=null&&f.Player){E(!0);return}if(!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){const g=document.createElement("script");g.src="https://www.youtube.com/iframe_api",g.async=!0,document.body.appendChild(g)}const o=window.onYouTubeIframeAPIReady;return window.onYouTubeIframeAPIReady=()=>{o&&o(),E(!0)},()=>{window.onYouTubeIframeAPIReady=o}},[l,m]),a.useEffect(()=>{if(!l||!u||!m||!C.current)return;if(r.current){try{r.current.destroy()}catch{}r.current=null}N(0),k(!1),C.current.innerHTML="";const s=document.createElement("div");return C.current.appendChild(s),r.current=new window.YT.Player(s,{videoId:m,playerVars:{autoplay:1,controls:1,rel:0,modestbranding:1,playsinline:1},events:{onReady:o=>{try{o.target.playVideo()}catch{}}}}),()=>{if(r.current){try{r.current.destroy()}catch{}r.current=null}}},[l,u,m]),a.useEffect(()=>{if(!l||!r.current||!m)return;const s=setInterval(()=>{try{if(!r.current||typeof r.current.getCurrentTime!="function")return;const o=Number(r.current.getCurrentTime())||0;if(N(o),t!=null&&t.is_free||h)return;c>0&&o>=c&&(r.current.pauseVideo(),r.current.seekTo(c,!0),N(c),k(!0),v(!0))}catch{}},250);return()=>{clearInterval(s)}},[l,m,t==null?void 0:t.is_free,h,c]);const R=()=>{m&&(N(0),k(!1),v(!1),x(!0))},O=()=>{if(x(!1),v(!1),r.current){try{r.current.stopVideo(),r.current.destroy()}catch{}r.current=null}},B=()=>{if(!j){if(!(n!=null&&n.user)){L.visit(route("login"),{preserveScroll:!0});return}M(!0),L.post(route("courses.enroll",t.id),{},{preserveScroll:!0,onSuccess:()=>{if(I(!0),v(!1),k(!1),r.current)try{r.current.seekTo(y,!0),r.current.playVideo()}catch{}},onFinish:()=>{M(!1)}})}},Z=s=>{s.preventDefault(),H(route("admin.courses.lessons.store",{course:t.id}),{preserveScroll:!0,onSuccess:()=>{var f;U();const o=document.getElementById("addLessonModal");if(o&&((f=window.bootstrap)!=null&&f.Modal)){const g=window.bootstrap.Modal.getInstance(o);g==null||g.hide()}}})},q=s=>{window.confirm(`Delete "${s.title}"?`)&&L.delete(route("admin.courses.lessons.destroy",{course:t.id,lesson:s.id}),{preserveScroll:!0})};return e.jsxs(Q,{children:[e.jsx(J,{title:`${(t==null?void 0:t.title)||"Course"} · Course`}),e.jsxs("div",{className:"course-page",children:[e.jsx("style",{children:`
                    .course-page {
                        min-height: 100vh;
                        background: #f7f8fa;
                        color: #1d1d1f;
                        font-family:
                            -apple-system,
                            BlinkMacSystemFont,
                            "SF Pro Display",
                            "SF Pro Text",
                            "Inter",
                            "Segoe UI",
                            sans-serif;
                        font-size: 13px;
                    }

                    .course-shell {
                        max-width: 1380px;
                        margin: 0 auto;
                        padding: 28px 24px 60px;
                    }

                    .course-breadcrumb {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        color: #86868b;
                        font-size: 12px;
                        margin-bottom: 18px;
                    }

                    .course-breadcrumb a {
                        color: #6e6e73;
                        text-decoration: none;
                    }

                    .course-breadcrumb a:hover {
                        color: #111;
                    }

                    .course-hero {
                        background: #fff;
                        border: 1px solid #e7e7e9;
                        border-radius: 20px;
                        padding: 30px;
                        box-shadow:
                            0 8px 30px rgba(
                                0,
                                0,
                                0,
                                .04
                            );
                    }

                    .course-label {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 6px 10px;
                        border-radius: 999px;
                        background: #f2f2f7;
                        color: #555;
                        font-size: 11px;
                        font-weight: 600;
                        letter-spacing: .01em;
                    }

                    .course-title {
                        font-size: clamp(
                            28px,
                            4vw,
                            44px
                        );
                        line-height: 1.08;
                        letter-spacing: -.035em;
                        font-weight: 700;
                        margin: 15px 0 12px;
                        max-width: 850px;
                    }

                    .course-description {
                        max-width: 800px;
                        color: #6e6e73;
                        font-size: 14px;
                        line-height: 1.7;
                        margin-bottom: 22px;
                    }

                    .course-meta {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 12px 20px;
                        color: #6e6e73;
                        font-size: 12px;
                    }

                    .course-meta-item {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                    }

                    .course-rating {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        color: #1d1d1f;
                        font-weight: 600;
                    }

                    .course-rating-stars {
                        display: inline-flex;
                        color: #f5a623;
                    }

                    .course-layout {
                        display: grid;
                        grid-template-columns:
                            minmax(0, 1fr)
                            350px;
                        gap: 24px;
                        margin-top: 24px;
                        align-items: start;
                    }

                    .course-card {
                        background: #fff;
                        border: 1px solid #e7e7e9;
                        border-radius: 18px;
                        overflow: hidden;
                    }

                    .course-card-body {
                        padding: 22px;
                    }

                    .video-preview {
                        position: relative;
                        background: #000;
                        aspect-ratio: 16 / 9;
                        overflow: hidden;
                    }

                    .video-preview iframe,
                    .video-preview > div {
                        width: 100%;
                        height: 100%;
                    }

                    .preview-placeholder {
                        aspect-ratio: 16 / 9;
                        background:
                            linear-gradient(
                                135deg,
                                #171717,
                                #292929
                            );
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        position: relative;
                    }

                    .preview-placeholder-content {
                        text-align: center;
                        max-width: 420px;
                        padding: 30px;
                    }

                    .preview-play {
                        width: 64px;
                        height: 64px;
                        border: 0;
                        border-radius: 50%;
                        background: #fff;
                        color: #111;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 16px;
                        box-shadow:
                            0 10px 30px
                            rgba(0,0,0,.2);
                        transition:
                            transform .2s ease;
                    }

                    .preview-play:hover {
                        transform: scale(1.04);
                    }

                    .preview-placeholder h3 {
                        font-size: 18px;
                        margin: 0 0 7px;
                        font-weight: 650;
                    }

                    .preview-placeholder p {
                        color: #b8b8b8;
                        font-size: 12px;
                        margin: 0;
                        line-height: 1.6;
                    }

                    .preview-bar {
                        padding: 12px 16px;
                        background: #fff;
                        border-top: 1px solid #e7e7e9;
                    }

                    .preview-progress {
                        height: 4px;
                        background: #ededed;
                        border-radius: 99px;
                        overflow: hidden;
                    }

                    .preview-progress-fill {
                        height: 100%;
                        background: #111;
                        transition: width .15s linear;
                    }

                    .preview-progress-meta {
                        display: flex;
                        justify-content: space-between;
                        gap: 10px;
                        margin-top: 7px;
                        font-size: 11px;
                        color: #86868b;
                    }

                    .section-heading {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        padding: 20px 22px;
                        border-bottom: 1px solid #ededed;
                    }

                    .section-heading h2 {
                        margin: 0;
                        font-size: 16px;
                        letter-spacing: -.015em;
                        font-weight: 650;
                    }

                    .section-heading span {
                        font-size: 11px;
                        color: #86868b;
                    }

                    .lesson-item {
                        display: flex;
                        align-items: center;
                        gap: 14px;
                        padding: 15px 22px;
                        border-bottom: 1px solid #f0f0f2;
                    }

                    .lesson-item:last-child {
                        border-bottom: 0;
                    }

                    .lesson-number {
                        width: 32px;
                        height: 32px;
                        flex: 0 0 32px;
                        border-radius: 9px;
                        background: #f2f2f7;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 11px;
                        font-weight: 600;
                        color: #555;
                    }

                    .lesson-content {
                        min-width: 0;
                        flex: 1;
                    }

                    .lesson-title {
                        font-size: 13px;
                        font-weight: 600;
                        margin-bottom: 4px;
                    }

                    .lesson-description {
                        font-size: 11px;
                        color: #86868b;
                        line-height: 1.5;
                    }

                    .lesson-actions {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }

                    .course-sidebar {
                        position: sticky;
                        top: 20px;
                    }

                    .price-card {
                        padding: 24px;
                    }

                    .price-label {
                        color: #86868b;
                        font-size: 11px;
                        margin-bottom: 5px;
                    }

                    .price {
                        font-size: 30px;
                        line-height: 1;
                        letter-spacing: -.03em;
                        font-weight: 700;
                        margin-bottom: 18px;
                    }

                    .price.free {
                        color: #16803c;
                    }

                    .primary-button {
                        width: 100%;
                        border: 0;
                        border-radius: 11px;
                        padding: 12px 16px;
                        background: #111;
                        color: #fff;
                        font-size: 12px;
                        font-weight: 600;
                        transition:
                            opacity .2s ease,
                            transform .2s ease;
                    }

                    .primary-button:hover {
                        opacity: .9;
                        transform: translateY(-1px);
                    }

                    .secondary-button {
                        width: 100%;
                        border: 1px solid #dedee2;
                        border-radius: 11px;
                        padding: 11px 16px;
                        background: #fff;
                        color: #1d1d1f;
                        font-size: 12px;
                        font-weight: 600;
                    }

                    .feature-list {
                        margin-top: 22px;
                        padding-top: 20px;
                        border-top: 1px solid #ededed;
                    }

                    .feature-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 10px;
                        padding: 7px 0;
                        color: #555;
                        font-size: 12px;
                        line-height: 1.5;
                    }

                    .feature-item svg {
                        color: #16803c;
                        flex: 0 0 auto;
                        margin-top: 1px;
                    }

                    .instructor-card {
                        padding: 20px;
                    }

                    .instructor {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }

                    .avatar {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: #f2f2f7;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 650;
                        font-size: 12px;
                    }

                    .instructor-name {
                        font-size: 13px;
                        font-weight: 600;
                    }

                    .instructor-role {
                        color: #86868b;
                        font-size: 11px;
                        margin-top: 3px;
                    }

                    .modal-backdrop-custom {
                        position: fixed;
                        inset: 0;
                        background:
                            rgba(0,0,0,.55);
                        z-index: 1080;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                    }

                    .preview-modal {
                        width: min(
                            100%,
                            1000px
                        );
                        background: #fff;
                        border-radius: 18px;
                        overflow: hidden;
                        box-shadow:
                            0 30px 80px
                            rgba(0,0,0,.25);
                    }

                    .preview-modal-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 15px 18px;
                        border-bottom: 1px solid #ededed;
                    }

                    .preview-modal-title {
                        font-size: 13px;
                        font-weight: 650;
                    }

                    .preview-close {
                        border: 0;
                        background: #f2f2f7;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        font-size: 18px;
                        line-height: 1;
                    }

                    .enroll-overlay {
                        position: absolute;
                        inset: 0;
                        background:
                            rgba(0,0,0,.7);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 25px;
                        z-index: 5;
                    }

                    .enroll-box {
                        width: min(
                            100%,
                            410px
                        );
                        background: #fff;
                        border-radius: 16px;
                        padding: 28px;
                        text-align: center;
                        box-shadow:
                            0 20px 60px
                            rgba(0,0,0,.25);
                    }

                    .enroll-icon {
                        width: 46px;
                        height: 46px;
                        border-radius: 13px;
                        background: #f2f2f7;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 14px;
                    }

                    .enroll-box h3 {
                        margin: 0 0 8px;
                        font-size: 19px;
                        letter-spacing: -.02em;
                    }

                    .enroll-box p {
                        margin: 0 0 18px;
                        color: #6e6e73;
                        font-size: 12px;
                        line-height: 1.65;
                    }

                    .enroll-actions {
                        display: flex;
                        gap: 8px;
                    }

                    .enroll-actions button {
                        flex: 1;
                    }

                    @media (max-width: 991px) {
                        .course-layout {
                            grid-template-columns: 1fr;
                        }

                        .course-sidebar {
                            position: static;
                        }
                    }

                    @media (max-width: 576px) {
                        .course-shell {
                            padding: 18px 14px 40px;
                        }

                        .course-hero {
                            padding: 20px;
                            border-radius: 15px;
                        }

                        .course-title {
                            font-size: 29px;
                        }

                        .course-layout {
                            margin-top: 16px;
                        }

                        .course-card {
                            border-radius: 15px;
                        }

                        .enroll-actions {
                            flex-direction: column;
                        }
                    }
                `}),e.jsxs("div",{className:"course-shell",children:[e.jsxs("div",{className:"course-breadcrumb",children:[e.jsx(K,{href:route("admin.courses.index"),children:"Courses"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:t.title})]}),e.jsxs("section",{className:"course-hero",children:[e.jsxs("div",{className:"course-label",children:[e.jsx(d.Book,{size:13}),((T=t.category)==null?void 0:T.name)||"Course"]}),e.jsx("h1",{className:"course-title",children:t.title}),e.jsx("p",{className:"course-description",children:W(t.description,400)}),e.jsxs("div",{className:"course-meta",children:[e.jsxs("div",{className:"course-meta-item",children:[e.jsx(d.Users,{size:15}),Y," enrolled"]}),e.jsxs("div",{className:"course-meta-item",children:[e.jsx(d.Book,{size:15}),w.length," lessons"]}),e.jsxs("div",{className:"course-rating",children:[e.jsx("span",{className:"course-rating-stars",children:e.jsx(d.Star,{size:15,filled:!0})}),P?P.toFixed(1):"New",b.length>0&&e.jsxs("span",{children:["(",b.length,")"]})]}),t.is_free?e.jsx("span",{className:"badge text-bg-success",children:"Free"}):e.jsxs("strong",{children:[Number(t.price||0).toLocaleString()," ","RWF"]})]})]}),e.jsxs("div",{className:"course-layout",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"course-card mb-4",children:[l?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"video-preview",style:{position:"relative"},children:[e.jsx("div",{ref:C}),V&&!h&&e.jsx("div",{className:"enroll-overlay",children:e.jsxs("div",{className:"enroll-box",children:[e.jsx("div",{className:"enroll-icon",children:e.jsx(d.Lock,{size:21})}),e.jsx("h3",{children:"Preview finished"}),e.jsx("p",{children:"You have watched the free preview. Enroll in this course to continue watching the complete video."}),e.jsxs("div",{className:"enroll-actions",children:[e.jsx("button",{type:"button",className:"secondary-button",onClick:()=>v(!1),children:"Continue browsing"}),e.jsx("button",{type:"button",className:"primary-button",onClick:B,disabled:j,children:j?"Enrolling...":"Enroll now"})]})]})})]}),!t.is_free&&!h&&c>0&&e.jsxs("div",{className:"preview-bar",children:[e.jsx("div",{className:"preview-progress",children:e.jsx("div",{className:"preview-progress-fill",style:{width:`${D}%`}})}),e.jsxs("div",{className:"preview-progress-meta",children:[e.jsx("span",{children:"Preview"}),e.jsxs("span",{children:[_(y)," ","/"," ",_(c)]})]})]})]}):e.jsx("div",{className:"preview-placeholder",children:e.jsxs("div",{className:"preview-placeholder-content",children:[e.jsx("button",{type:"button",className:"preview-play",onClick:R,disabled:!m,children:e.jsx(d.Play,{size:25})}),e.jsx("h3",{children:"Watch course preview"}),e.jsx("p",{children:t.is_free?"Preview the course video.":c>0?`Watch the first ${_(c)} free. Enroll to continue watching.`:"Enroll to access the course video."})]})}),l&&e.jsx("div",{className:"course-card-body",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"fw-semibold",style:{fontSize:"13px"},children:"Course preview"}),e.jsx("div",{className:"text-muted",style:{fontSize:"11px"},children:h?"Full course access unlocked":t.is_free?"Free course":"Free preview"})]}),e.jsx("button",{type:"button",className:"btn btn-sm btn-light border",onClick:O,children:"Close"})]})})]}),e.jsxs("div",{className:"course-card mb-4",children:[e.jsxs("div",{className:"section-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Course content"}),e.jsx("span",{children:"Structured learning materials"})]}),e.jsx("button",{type:"button",className:"btn btn-sm btn-dark","data-bs-toggle":"modal","data-bs-target":"#addLessonModal",children:"Add lesson"})]}),w.length>0?w.map((s,o)=>e.jsxs("div",{className:"lesson-item",children:[e.jsx("div",{className:"lesson-number",children:o+1}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("div",{className:"lesson-title",children:s.title}),s.content&&e.jsx("div",{className:"lesson-description",children:W(s.content,130)})]}),e.jsxs("div",{className:"lesson-actions",children:[s.video_url&&e.jsx("a",{href:s.video_url,target:"_blank",rel:"noreferrer",className:"btn btn-sm btn-light",children:e.jsx(d.Play,{size:13})}),e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>q(s),children:"Delete"})]})]},s.id)):e.jsx("div",{className:"p-5 text-center text-muted",children:"No lessons have been added yet."})]}),e.jsxs("div",{className:"course-card",children:[e.jsx("div",{className:"section-heading",children:e.jsx("h2",{children:"About this course"})}),e.jsx("div",{className:"course-card-body",children:e.jsx("div",{style:{fontSize:"13px",lineHeight:"1.8",color:"#555",whiteSpace:"pre-line"},children:t.description})})]})]}),e.jsxs("aside",{className:"course-sidebar",children:[e.jsx("div",{className:"course-card mb-3",children:e.jsxs("div",{className:"price-card",children:[e.jsx("div",{className:"price-label",children:"Course access"}),t.is_free?e.jsx("div",{className:"price free",children:"Free"}):e.jsxs("div",{className:"price",children:[Number(t.price||0).toLocaleString()," ","RWF"]}),!h&&e.jsxs(e.Fragment,{children:[!t.is_free&&e.jsx("button",{type:"button",className:"primary-button mb-2",onClick:B,disabled:j,children:j?"Enrolling...":"Enroll in course"}),e.jsxs("button",{type:"button",className:"secondary-button",onClick:R,disabled:!m,children:[e.jsx(d.Play,{size:14})," ","Watch preview"]})]}),h&&e.jsx("div",{className:"alert alert-success mb-0 py-2",children:e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(d.Check,{size:16}),e.jsx("span",{style:{fontSize:"12px"},children:"You are enrolled in this course."})]})}),e.jsxs("div",{className:"feature-list",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx(d.Check,{size:15}),"Full course video access"]}),e.jsxs("div",{className:"feature-item",children:[e.jsx(d.Check,{size:15}),w.length," structured lessons"]}),e.jsxs("div",{className:"feature-item",children:[e.jsx(d.Check,{size:15}),"Track your course progress"]}),e.jsxs("div",{className:"feature-item",children:[e.jsx(d.Check,{size:15}),"Access from your account"]})]})]})}),e.jsx("div",{className:"course-card",children:e.jsxs("div",{className:"instructor-card",children:[e.jsx("div",{className:"text-muted mb-3",style:{fontSize:"11px"},children:"Instructor"}),e.jsxs("div",{className:"instructor",children:[e.jsx("div",{className:"avatar",children:ee(($=t==null?void 0:t.instructor)==null?void 0:$.name)}),e.jsxs("div",{children:[e.jsx("div",{className:"instructor-name",children:(A=t==null?void 0:t.instructor)==null?void 0:A.name}),e.jsx("div",{className:"instructor-role",children:"Course instructor"})]})]})]})})]})]})]}),e.jsx("div",{className:"modal fade",id:"addLessonModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsx("div",{className:"modal-content border-0 shadow-lg",children:e.jsxs("form",{onSubmit:Z,children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",style:{fontSize:"15px",fontWeight:650},children:"Add lesson"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Lesson title"}),e.jsx("input",{type:"text",className:`form-control ${p.title?"is-invalid":""}`,value:S.title,onChange:s=>z("title",s.target.value),placeholder:"Enter lesson title"}),p.title&&e.jsx("div",{className:"invalid-feedback",children:p.title})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Content"}),e.jsx("textarea",{className:`form-control ${p.content?"is-invalid":""}`,rows:"4",value:S.content,onChange:s=>z("content",s.target.value),placeholder:"Describe this lesson..."}),p.content&&e.jsx("div",{className:"invalid-feedback",children:p.content})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Video URL"}),e.jsx("input",{type:"url",className:`form-control ${p.video_url?"is-invalid":""}`,value:S.video_url,onChange:s=>z("video_url",s.target.value),placeholder:"https://youtube.com/..."}),p.video_url&&e.jsx("div",{className:"invalid-feedback",children:p.video_url})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Lesson order"}),e.jsx("input",{type:"number",min:"1",className:`form-control ${p.order?"is-invalid":""}`,value:S.order,onChange:s=>z("order",Number(s.target.value))}),p.order&&e.jsx("div",{className:"invalid-feedback",children:p.order})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-light","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-dark",disabled:F,children:F?"Saving...":"Add lesson"})]})]})})})})]})]})}export{ie as default};
