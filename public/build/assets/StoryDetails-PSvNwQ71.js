import{r as n,u as P,j as e,H as G,R as H}from"./app-DQcVR1sC.js";import{G as O}from"./GuestLayout-AyS9Rfgz.js";const k={storyCommentStore:"/story/comment/store",verifyEmail:"/video/verify-email",talentDetails:r=>`/skills/${r}`};function U(r){if(!r)return"";const d=new Date(r),g=Math.floor((Date.now()-d.getTime())/1e3),l=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60]];for(const[c,y]of l){const p=Math.floor(g/y);if(p>=1)return`${p} ${c}${p>1?"s":""} ago`}return"just now"}function E({value:r,size:d="0.85rem"}){return e.jsx("span",{style:{fontSize:d},children:Array.from({length:5}).map((g,l)=>e.jsx("span",{children:l<Math.round(r)?"★":"☆"},l))})}function W({story:r}){var z,S,C,R,T,I;const[d,g]=n.useState("description"),[l,c]=n.useState(!1),[y,p]=n.useState(!0),N=n.useRef(null),m=n.useRef(null),v=n.useRef(null),V=30,b=r.comments||[],s=b.length,f=s?b.reduce((a,t)=>a+(t.rating||0),0)/s:0,Y=[5,4,3,2,1].map(a=>({stars:a,count:b.filter(t=>t.rating===a).length})),h=((z=r.talent)==null?void 0:z.feedback)||[],A=h.length?h.reduce((a,t)=>a+(t.rating||0),0)/h.length:0,u=n.useMemo(()=>{if(!r.media)return null;const a=r.media.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]+)/);return a?a[1]:null},[r.media]),w=!!(u&&r.thumbnail);n.useEffect(()=>{if(!w)return;function a(){m.current=new window.YT.Player(N.current,{height:"100%",width:"100%",videoId:u,playerVars:{autoplay:0,controls:1,rel:0,modestbranding:1},events:{onStateChange:F}})}if(window.YT&&window.YT.Player)a();else{const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",document.body.appendChild(t);const o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{o==null||o(),a()}}return()=>{var t,o;clearInterval(v.current),(o=(t=m.current)==null?void 0:t.destroy)==null||o.call(t)}},[w,u]);function F(a){a.data===window.YT.PlayerState.PLAYING?v.current=setInterval(()=>{var o,D,$;(((D=(o=m.current)==null?void 0:o.getCurrentTime)==null?void 0:D.call(o))??0)>=V&&(($=m.current)==null||$.pauseVideo(),clearInterval(v.current),c(!0))},500):clearInterval(v.current)}const _=()=>{var a;p(!1),(a=m.current)==null||a.playVideo()};n.useEffect(()=>{if(l){const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}}},[l]);const x=P({story_id:r.id,video_id:u,email:""}),M=a=>{a.preventDefault(),x.post(k.verifyEmail,{preserveScroll:!0,onSuccess:()=>{var t;c(!1),(t=m.current)==null||t.playVideo()}})},i=P({story_id:r.id,rating:"",name:"",email:"",comment:""}),L=a=>{a.preventDefault(),i.post(k.storyCommentStore,{preserveScroll:!0,onSuccess:()=>i.reset()})},q=[{icon:"ti-photo-star",label:"Total Ratings",value:s?f.toFixed(1):"—"},{icon:"ti-heart",label:"Total Likes",value:r.likes??320},{icon:"ti-message-chatbot",label:"Comments",value:`${s} Comment${s===1?"":"s"}`},{icon:"ti-eye",label:"Profile Views",value:r.views??"1,100"}],j={approved:{label:"Approved",className:"status-approved"},pending:{label:"Pending",className:"status-pending"}}[r.status]??null,B=[{key:"description",label:"Description"},{key:"reviews",label:`Reviews (${s})`}];return e.jsxs(e.Fragment,{children:[e.jsx(G,{title:r.title}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
                :root {
                    --bg-deep:    #0e1618;
                    --bg-card:    #131e21;
                    --bg-glass:   rgba(255,255,255,0.035);
                    --bg-glass2:  rgba(0,166,103,0.07);
                    --accent:     #48d597;
                    --accent-dim: #008f59;
                    --accent-glow:rgba(0,166,103,0.25);
                    --text-primary:   #f0f4f3;
                    --text-secondary: #8da4a0;
                    --text-muted:     #4d6460;
                    --border:     rgba(255,255,255,0.07);
                    --border-accent: rgba(0,166,103,0.3);
                    --radius-lg:  16px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    --warn:       #e8b94a;
                }

                .fc-story-page, .fc-story-page * { box-sizing: border-box; }
                .fc-story-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); }

                .story-page { padding: 40px 0 80px; }

                .story-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    margin-bottom: 24px;
                    position: relative;
                }
                .story-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--accent), transparent);
                }

                /* ── Video ── */
                .video-wrapper {
                    position: relative;
                    width: 100%;
                    padding-top: 56.25%;
                    background: #000;
                    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
                    overflow: hidden;
                }
                .video-mount, .video-thumbnail {
                    position: absolute; inset: 0;
                }
                .video-thumbnail { cursor: pointer; background: #000; }
                .video-thumbnail img { width: 100%; height: 100%; object-fit: cover; display: block; }
                .play-btn {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    background: #fff;
                    color: #111;
                    display: flex; align-items: center; gap: 10px;
                    padding: 12px 24px;
                    border-radius: var(--radius-pill);
                    box-shadow: 0 8px 28px rgba(0,0,0,0.4);
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.9rem;
                    transition: transform 0.2s;
                }
                .video-thumbnail:hover .play-btn { transform: translate(-50%, -50%) scale(1.05); }
                .play-btn i { color: #e0483e; }

                /* ── Stats row ── */
                .stat-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1px;
                    background: var(--border);
                    border-top: 1px solid var(--border);
                    border-bottom: 1px solid var(--border);
                }
                @media(max-width: 640px) { .stat-grid { grid-template-columns: repeat(2, 1fr); } }
                .stat-cell {
                    background: var(--bg-card);
                    padding: 22px 18px;
                    text-align: center;
                }
                .stat-cell i { font-size: 1.3rem; color: var(--accent); margin-bottom: 8px; display: block; }
                .stat-cell p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin: 0 0 4px; }
                .stat-cell h6 { font-family: var(--font-head); font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin: 0; }

                /* ── Tabs (shared pattern) ── */
                .tab-nav {
                    display: flex;
                    border-bottom: 1px solid var(--border);
                    overflow-x: auto;
                    scrollbar-width: none;
                    padding: 0 8px;
                }
                .tab-nav::-webkit-scrollbar { display: none; }
                .tab-nav-item {
                    flex-shrink: 0;
                    padding: 18px 24px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--text-muted);
                    cursor: pointer;
                    border: none;
                    background: transparent;
                    border-bottom: 2px solid transparent;
                    margin-bottom: -1px;
                    transition: color 0.2s, border-color 0.2s;
                    letter-spacing: 0.03em;
                }
                .tab-nav-item.active { color: var(--accent); border-bottom-color: var(--accent); }
                .tab-nav-item:hover { color: var(--text-primary); }

                .tab-body { padding: 32px; }
                .tab-pane { display: none; }
                .tab-pane.active { display: block; animation: fadeIn 0.3s ease; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

                .story-title { font-family: var(--font-head); font-size: 1.4rem; font-weight: 800; margin-bottom: 14px; color: var(--text-primary); }
                .story-body { color: var(--text-secondary); font-size: 0.92rem; line-height: 1.9; white-space: pre-line; }

                .section-head {
                    display: flex; align-items: baseline; gap: 14px;
                    margin-bottom: 24px;
                }
                .section-head h3 {
                    font-family: var(--font-head);
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0;
                }
                .section-head .count-badge {
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    border-radius: var(--radius-pill);
                    padding: 2px 10px;
                    font-size: 0.72rem;
                    font-weight: 600;
                }

                /* ── Reviews ── */
                .review-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
                @media(max-width: 900px) { .review-layout { grid-template-columns: 1fr; } }

                .rating-summary {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 24px;
                    margin-bottom: 24px;
                    display: flex;
                    align-items: center;
                    gap: 32px;
                }
                .avg-score { text-align: center; flex-shrink: 0; }
                .avg-number { font-family: var(--font-head); font-size: 3.5rem; font-weight: 800; color: var(--accent); line-height: 1; }
                .avg-stars { color: var(--accent); font-size: 1.1rem; margin: 6px 0; }
                .avg-count { font-size: 0.75rem; color: var(--text-secondary); }

                .bars-wrap { flex: 1; }
                .bar-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
                .bar-label { font-size: 0.75rem; color: var(--text-secondary); width: 52px; flex-shrink: 0; }
                .bar-track { flex: 1; height: 6px; background: rgba(255,255,255,0.07); border-radius: 6px; overflow: hidden; }
                .bar-fill { height: 100%; background: var(--accent); border-radius: 6px; transition: width 1s ease; }
                .bar-count { font-size: 0.72rem; color: var(--text-muted); width: 24px; text-align: right; }

                .review-list { display: flex; flex-direction: column; gap: 16px; max-height: 480px; overflow-y: auto; padding-right: 6px; }
                .review-list::-webkit-scrollbar { width: 4px; }
                .review-list::-webkit-scrollbar-track { background: transparent; }
                .review-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

                .review-item {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 16px 18px;
                    transition: border-color 0.2s;
                }
                .review-item:hover { border-color: var(--border-accent); }
                .reviewer-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
                .reviewer-avatar { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-accent); flex-shrink: 0; }
                .reviewer-name { font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
                .reviewer-time { font-size: 0.72rem; color: var(--text-muted); }
                .reviewer-stars { color: var(--accent); font-size: 0.75rem; margin-left: auto; }
                .review-comment { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 10px; }
                .reply-link {
                    display: inline-flex; align-items: center; gap: 6px;
                    font-size: 0.72rem; color: var(--text-muted);
                    background: var(--bg-glass2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    cursor: pointer;
                    transition: color 0.2s, border-color 0.2s;
                }
                .reply-link:hover { color: var(--accent); border-color: var(--border-accent); }

                .review-form-card {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 28px;
                }
                .review-form-card h4 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; }
                .form-label { font-size: 0.8rem; font-weight: 500; color: var(--text-secondary); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    color: var(--text-primary);
                    padding: 11px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.2s;
                    margin-bottom: 14px;
                }
                .form-control-dark:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
                .form-control-dark::placeholder { color: var(--text-muted); }
                textarea.form-control-dark { resize: vertical; min-height: 90px; }

                .star-input-wrap { display: flex; flex-direction: row-reverse; gap: 4px; margin-bottom: 16px; }
                .star-input-wrap input[type="radio"] { display: none; }
                .star-input-wrap label { font-size: 1.4rem; color: var(--border); cursor: pointer; transition: color 0.15s; }
                .star-input-wrap input[type="radio"]:checked ~ label,
                .star-input-wrap label:hover,
                .star-input-wrap label:hover ~ label { color: var(--accent); }

                .btn-submit-review {
                    width: 100%;
                    background: var(--accent);
                    border: none;
                    border-radius: var(--radius-pill);
                    color: #fff;
                    padding: 12px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s, box-shadow 0.2s;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-submit-review:hover { background: var(--accent-dim); box-shadow: 0 6px 28px var(--accent-glow); }
                .btn-submit-review:disabled { opacity: 0.6; cursor: not-allowed; }

                .empty-state { text-align: center; padding: 48px 24px; color: var(--text-muted); font-size: 0.9rem; }
                .empty-state i { font-size: 2rem; margin-bottom: 10px; display: block; color: var(--text-muted); }

                /* ── Sidebar ── */
                .sidebar-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 26px;
                    margin-bottom: 24px;
                }
                .sidebar-story-title {
                    font-family: var(--font-head);
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 16px;
                    line-height: 1.3;
                }
                .info-links { list-style: none; margin: 0 0 22px; padding: 0; }
                .info-links li {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 0.82rem;
                    color: var(--text-secondary);
                    padding: 9px 0;
                    border-bottom: 1px solid var(--border);
                }
                .info-links li:last-child { border-bottom: none; padding-bottom: 0; }
                .info-links li i { color: var(--accent); font-size: 0.95rem; }
                .status-pill {
                    display: inline-flex; align-items: center; gap: 6px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.72rem;
                    font-weight: 600;
                }
                .status-approved { background: rgba(0,166,103,0.14); color: var(--accent); border: 1px solid var(--border-accent); }
                .status-pending { background: rgba(232,185,74,0.14); color: var(--warn); border: 1px solid rgba(232,185,74,0.35); }

                .talent-mini { display: flex; align-items: center; gap: 14px; padding: 18px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-bottom: 18px; }
                .talent-mini img { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-accent); flex-shrink: 0; }
                .talent-mini h5 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; display: flex; align-items: center; gap: 6px; }
                .talent-mini h5 i { color: var(--accent); font-size: 0.9rem; }
                .talent-mini p { font-size: 0.78rem; color: var(--text-secondary); margin: 0; }

                .tag-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 22px; font-size: 0.82rem; color: var(--text-secondary); }
                .tag-row i { color: var(--accent); margin-top: 2px; }

                .btn-outline {
                    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
                    background: transparent;
                    color: var(--text-primary);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    padding: 11px 24px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                    text-decoration: none;
                    width: 100%;
                }
                .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: var(--bg-glass2); }

                .share-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 16px; }
                .share-icons { display: flex; gap: 10px; flex-wrap: wrap; }
                .social-icon-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 38px; height: 38px;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 50%;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
                }
                .social-icon-btn:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); transform: translateY(-2px); }

                /* ── Modal (matches SkillProfile pattern) ── */
                .fc-modal-backdrop {
                    position: fixed; inset: 0; background: rgba(0,0,0,.6);
                    display: flex; align-items: flex-start; justify-content: center;
                    z-index: 1050; padding: 3rem 1rem;
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }
                .modal-dark {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    color: var(--text-primary);
                    width: 100%;
                    max-width: 480px;
                    margin: auto 0;
                    max-height: calc(100vh - 6rem);
                    display: flex;
                    flex-direction: column;
                }
                .modal-dark .modal-header {
                    border-bottom: 1px solid var(--border);
                    padding: 20px 24px 18px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    flex-shrink: 0;
                }
                .modal-dark .modal-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0; }
                .modal-dark .accent-bar { display: block; width: 32px; height: 3px; background: var(--warn); border-radius: 2px; margin-top: 5px; }
                .modal-dark .modal-body { padding: 24px; overflow-y: auto; }
                .modal-dark .modal-footer { padding: 0 24px 24px; display: flex; gap: 10px; }
                .modal-dark .modal-footer .btn-submit-review { flex: 1; }
                .modal-dark .btn-cancel {
                    flex: 1;
                    background: transparent;
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                }
                .modal-dark .btn-cancel:hover { border-color: var(--border-accent); color: var(--accent); }
                .modal-dark .btn-close {
                    background: transparent; border: none; color: var(--text-primary);
                    filter: invert(1) brightness(0.6); font-size: 1.1rem; cursor: pointer;
                }
                [data-h-theme="light"] .modal-dark .btn-close { filter: none; }

                @media(max-width: 768px) {
                    .tab-body { padding: 20px; }
                    .sidebar-card { padding: 20px; }
                    .fc-modal-backdrop { padding: 1.5rem 1rem; }
                    .modal-dark { max-height: calc(100vh - 3rem); }
                }

                /* ── LIGHT THEME ── */
                [data-h-theme="light"] {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-glass:   rgba(0,100,60,0.035);
                    --bg-glass2:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #7f958d;
                    --border:     rgba(0,100,60,0.1);
                    --border-accent: rgba(0,166,103,0.3);
                    --warn: #b3820f;
                }
                [data-h-theme="light"] .bar-track { background: rgba(0,100,60,0.08); }
                [data-h-theme="light"] .form-control-dark { background: rgba(0,100,60,0.03); }
                [data-h-theme="light"] .status-pending { background: rgba(179,130,15,0.1); }
            `}),e.jsxs("div",{className:"fc-story-page",children:[e.jsx("div",{className:"story-page",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"story-card",children:[w&&e.jsxs("div",{className:"video-wrapper",children:[e.jsx("div",{ref:N,className:"video-mount"}),y&&e.jsxs("div",{className:"video-thumbnail",onClick:_,children:[e.jsx("img",{src:`/image/stories/${r.thumbnail}`,alt:r.title}),e.jsxs("div",{className:"play-btn",children:[e.jsx("i",{className:"fa fa-play"})," Watch Story"]})]})]}),e.jsx("div",{className:"stat-grid",children:q.map(a=>e.jsxs("div",{className:"stat-cell",children:[e.jsx("i",{className:`ti ${a.icon}`}),e.jsx("p",{children:a.label}),e.jsx("h6",{children:a.value})]},a.label))}),e.jsx("div",{className:"tab-nav",children:B.map(a=>e.jsx("button",{className:`tab-nav-item ${d===a.key?"active":""}`,onClick:()=>g(a.key),children:a.label},a.key))}),e.jsxs("div",{className:"tab-body",children:[e.jsxs("div",{className:`tab-pane ${d==="description"?"active":""}`,children:[e.jsx("h3",{className:"story-title",children:r.title}),e.jsx("p",{className:"story-body",children:r.content})]}),e.jsx("div",{className:`tab-pane ${d==="reviews"?"active":""}`,children:e.jsxs("div",{className:"review-layout",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"rating-summary",children:[e.jsxs("div",{className:"avg-score",children:[e.jsx("div",{className:"avg-number",children:f.toFixed(1)}),e.jsx("div",{className:"avg-stars",children:e.jsx(E,{value:f,size:"1.1rem"})}),e.jsxs("div",{className:"avg-count",children:[s," reviews"]})]}),e.jsx("div",{className:"bars-wrap",children:Y.map(({stars:a,count:t})=>{const o=s?t/s*100:0;return e.jsxs("div",{className:"bar-row",children:[e.jsxs("span",{className:"bar-label",children:[a," star"]}),e.jsx("div",{className:"bar-track",children:e.jsx("div",{className:"bar-fill",style:{width:`${o}%`}})}),e.jsx("span",{className:"bar-count",children:t})]},a)})})]}),e.jsxs("div",{className:"section-head",children:[e.jsx("h3",{children:"All Reviews"}),e.jsx("span",{className:"count-badge",children:s})]}),e.jsx("div",{className:"review-list",children:b.length>0?b.map((a,t)=>e.jsxs("div",{className:"review-item",children:[e.jsxs("div",{className:"reviewer-head",children:[e.jsx("img",{src:"/assets/img/user/profile.jpg",className:"reviewer-avatar",alt:""}),e.jsxs("div",{children:[e.jsx("div",{className:"reviewer-name",children:a.name}),e.jsx("div",{className:"reviewer-time",children:U(a.created_at)})]}),e.jsx("span",{className:"reviewer-stars",children:e.jsx(E,{value:a.rating,size:"0.75rem"})})]}),e.jsx("p",{className:"review-comment",children:a.comment}),e.jsxs("button",{className:"reply-link",children:[e.jsx("i",{className:"feather-corner-up-left"})," Reply"]})]},a.id??t)):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-message-off"}),"No reviews yet."]})})]}),e.jsx("div",{children:e.jsxs("div",{className:"review-form-card",children:[e.jsx("h4",{children:"Leave a Review"}),e.jsxs("form",{onSubmit:L,children:[e.jsxs("label",{className:"form-label",children:["Your Rating ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("div",{className:"star-input-wrap",children:[5,4,3,2,1].map(a=>e.jsxs(H.Fragment,{children:[e.jsx("input",{type:"radio",name:"rating",id:`s${a}`,value:a,checked:i.data.rating===String(a),onChange:()=>i.setData("rating",String(a)),required:!0}),e.jsx("label",{htmlFor:`s${a}`,title:`${a} star${a>1?"s":""}`,children:"★"})]},a))}),e.jsxs("div",{className:"row g-3",style:{marginBottom:0},children:[e.jsxs("div",{className:"col-6",children:[e.jsxs("label",{className:"form-label",children:["Name ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"text",className:"form-control-dark",placeholder:"Your name",value:i.data.name,onChange:a=>i.setData("name",a.target.value),required:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsxs("label",{className:"form-label",children:["Email ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"email",className:"form-control-dark",placeholder:"you@mail.com",value:i.data.email,onChange:a=>i.setData("email",a.target.value),required:!0})]})]}),e.jsxs("label",{className:"form-label",style:{marginTop:2},children:["Your Review ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("textarea",{className:"form-control-dark",placeholder:"Share your experience…",value:i.data.comment,onChange:a=>i.setData("comment",a.target.value),required:!0}),e.jsx("button",{type:"submit",className:"btn-submit-review",disabled:i.processing,children:i.processing?"Submitting…":"Submit a Review"})]})]})})]})})]})]})}),e.jsxs("div",{className:"col-lg-4",children:[e.jsxs("div",{className:"sidebar-card",children:[e.jsx("h2",{className:"sidebar-story-title",children:r.title}),e.jsxs("ul",{className:"info-links",children:[e.jsxs("li",{children:[e.jsx("i",{className:"ti ti-calendar-due"})," ",(S=r.category)==null?void 0:S.name]}),e.jsxs("li",{children:[e.jsx("i",{className:"ti ti-star-filled",style:{color:"var(--accent)"}}),f.toFixed(1)," (",s," Comments)"]}),e.jsxs("li",{children:[e.jsx("i",{className:"ti ti-calendar-due"})," Posted on:"," ",r.created_at&&new Date(r.created_at).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})]}),j&&e.jsx("li",{children:e.jsx("span",{className:`status-pill ${j.className}`,children:j.label})})]}),e.jsxs("div",{className:"talent-mini",children:[e.jsx("img",{src:(C=r.talent)!=null&&C.image?`/image/talents/${r.talent.image}`:"/assets/img/user/profile.jpg",alt:(R=r.talent)==null?void 0:R.name}),e.jsxs("div",{children:[e.jsxs("h5",{children:[(T=r.talent)==null?void 0:T.name,e.jsx("i",{className:"ti ti-discount-check-filled"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-star-filled"})," ",A.toFixed(1)," (",h.length," Feedbacks)"]})]})]}),e.jsxs("div",{className:"tag-row",children:[e.jsx("i",{className:"ti ti-tags"}),e.jsxs("span",{children:[e.jsx("strong",{style:{color:"var(--text-primary)"},children:"Tags: "}),r.tags]})]}),e.jsx("a",{href:k.talentDetails((I=r.talent)==null?void 0:I.id),className:"btn-outline",children:"Back to profile"})]}),e.jsxs("div",{className:"sidebar-card",children:[e.jsx("h5",{className:"share-title",children:"Share this story"}),e.jsxs("div",{className:"share-icons",children:[e.jsx("a",{role:"button",tabIndex:0,className:"social-icon-btn",title:"Share on Facebook",children:e.jsx("i",{className:"fa-brands fa-facebook-f"})}),e.jsx("a",{role:"button",tabIndex:0,className:"social-icon-btn",title:"Share on X",children:e.jsx("i",{className:"fa-brands fa-x-twitter"})}),e.jsx("a",{role:"button",tabIndex:0,className:"social-icon-btn",title:"Share on Instagram",children:e.jsx("i",{className:"fa-brands fa-instagram"})}),e.jsx("a",{role:"button",tabIndex:0,className:"social-icon-btn",title:"Share via Google",children:e.jsx("i",{className:"fa-brands fa-google"})}),e.jsx("a",{role:"button",tabIndex:0,className:"social-icon-btn",title:"Share on YouTube",children:e.jsx("i",{className:"fa-brands fa-youtube"})})]})]})]})]})})}),l&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>c(!1),children:e.jsxs("div",{className:"modal-dark",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"modal-title",children:"Verify Email to Continue"}),e.jsx("span",{className:"accent-bar"})]}),e.jsx("button",{className:"btn-close",onClick:()=>c(!1),children:"✕"})]}),e.jsxs("form",{onSubmit:M,children:[e.jsxs("div",{className:"modal-body",children:[e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:16,textAlign:"center"},children:"Please enter your email to verify if you have access to this video."}),e.jsx("input",{type:"email",className:"form-control-dark",placeholder:"Enter your email",value:x.data.email,onChange:a=>x.setData("email",a.target.value),required:!0,style:{marginBottom:0}})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"submit",className:"btn-submit-review",disabled:x.processing,children:x.processing?"Verifying…":"Verify Email"}),e.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>c(!1),children:"Cancel"})]})]})]})})]})]})}W.layout=r=>e.jsx(O,{children:r,title:"Story Details"});export{W as default};
