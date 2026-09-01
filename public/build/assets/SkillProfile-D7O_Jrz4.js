import{r as m,u as R,j as e,H as B,R as L}from"./app-DQcVR1sC.js";import{G as H}from"./GuestLayout-AyS9Rfgz.js";const g={talentFeedbackStore:"/talent/feedback",supportTalent:"/talent/support",talentConnectionRequest:r=>`/connection/${r}/request`,storyDetails:r=>`/story-details/${r}`,courseDetails:r=>`/course/details/${r}`};function U(r){if(!r)return"";const t=new Date(r),l=Math.floor((Date.now()-t.getTime())/1e3),p=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60]];for(const[x,h]of p){const v=Math.floor(l/h);if(v>=1)return`${v} ${x}${v>1?"s":""} ago`}return"just now"}function w({value:r,size:t="0.85rem"}){return e.jsx("span",{style:{fontSize:t},children:Array.from({length:5}).map((l,p)=>e.jsx("span",{children:p<Math.round(r)?"★":"☆"},p))})}function G({talent:r,profileUrl:t}){var I,T,E;const[l,p]=m.useState("about"),[x,h]=m.useState(!1),[v,F]=m.useState(!1),[N,S]=m.useState(!1),[z,C]=m.useState(!1);m.useEffect(()=>{typeof navigator<"u"&&navigator.share&&F(!0)},[]),m.useEffect(()=>{if(N||z){const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}}},[N,z]);const b=r.feedback||[],u=r.stories||[],f=r.courses||[],c=b.length,k=c?b.reduce((a,i)=>a+(i.rating||0),0)/c:0,Y=[5,4,3,2,1].map(a=>({stars:a,count:b.filter(i=>i.rating===a).length})),q=()=>{navigator.clipboard.writeText(t).then(()=>{h(!0),setTimeout(()=>h(!1),2500)}).catch(()=>{const a=document.getElementById("profileUrl");a&&(a.select(),a.setSelectionRange(0,99999),document.execCommand("copy"),h(!0),setTimeout(()=>h(!1),2500))})},M=()=>{navigator.share&&navigator.share({title:`${r.name} — Talent Profile`,text:`Check out ${r.name} on our platform!`,url:t})},s=R({talent_id:r.id,rating:"",name:"",email:"",comment:""}),_=a=>{a.preventDefault(),s.post(g.talentFeedbackStore,{preserveScroll:!0,onSuccess:()=>s.reset()})},o=R({talent_id:r.id,name:"",email:"",amount:"",message:""}),A=a=>{a.preventDefault(),o.post(g.supportTalent,{preserveScroll:!0,onSuccess:()=>o.reset()})},n=R({message:"",name:"",email:"",phone:""}),P=a=>{a.preventDefault(),n.post(g.talentConnectionRequest(r.id),{preserveScroll:!0,onSuccess:()=>n.reset()})},O=[{key:"about",label:"About Me"},{key:"stories",label:`Stories (${u.length})`},{key:"courses",label:`Courses (${f.length})`},{key:"reviews",label:`Reviews (${b.length})`}];return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:r.name}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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
                }

                .fc-talent-page, .fc-talent-page * { box-sizing: border-box; }
                .fc-talent-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); }

                .talent-page { padding: 40px 0 80px; }

                .hero-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    margin-bottom: 24px;
                    position: relative;
                }
                .hero-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--accent), transparent);
                }

                .talent-photo-wrap {
                    position: relative;
                    height: 100%;
                    min-height: 420px;
                }
                .talent-photo-wrap img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .photo-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to right, transparent 60%, var(--bg-card) 100%);
                }
                .photo-overlay-bottom {
                    position: absolute; bottom: 0; left: 0; right: 0;
                    background: linear-gradient(to top, var(--bg-card) 0%, transparent 50%);
                    height: 120px;
                }

                .talent-info-col { padding: 36px 36px 36px 28px; display: flex; flex-direction: column; justify-content: space-between; }

                .talent-name {
                    font-family: var(--font-head);
                    font-size: 2rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 6px;
                    line-height: 1.1;
                }
                .talent-skill-tag {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    border-radius: var(--radius-pill);
                    padding: 4px 14px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    margin-bottom: 14px;
                }
                .verified-badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    background: rgba(0,166,103,0.12);
                    color: var(--accent);
                    border: 1px solid var(--border-accent);
                    border-radius: var(--radius-pill);
                    padding: 3px 12px;
                    font-size: 0.72rem;
                    font-weight: 600;
                    margin-left: 10px;
                    vertical-align: middle;
                }

                .rating-row { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
                .stars { color: var(--accent); font-size: 0.85rem; letter-spacing: 1px; }
                .rating-num { font-family: var(--font-head); font-weight: 700; font-size: 1rem; color: var(--text-primary); }
                .rating-count { color: var(--text-secondary); font-size: 0.8rem; }

                .about-snippet {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 16px 18px;
                    color: var(--text-secondary);
                    font-size: 0.88rem;
                    line-height: 1.7;
                    margin-bottom: 22px;
                }

                .meta-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 26px; }
                .meta-pill {
                    display: flex; align-items: center; gap: 8px;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    padding: 8px 16px;
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    transition: border-color 0.2s, color 0.2s;
                }
                .meta-pill:hover { border-color: var(--border-accent); color: var(--accent); }
                .meta-pill i { color: var(--accent); font-size: 0.9rem; }
                .meta-pill strong { color: var(--text-primary); margin-right: 2px; }

                .action-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
                .btn-support {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    color: #fff;
                    border: none;
                    border-radius: var(--radius-pill);
                    padding: 11px 24px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
                    box-shadow: 0 4px 20px var(--accent-glow);
                    text-decoration: none;
                }
                .btn-support:hover { background: var(--accent-dim); transform: translateY(-1px); box-shadow: 0 6px 28px var(--accent-glow); color: #fff; }
                .btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
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
                }
                .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: var(--bg-glass2); }

                .share-section { border-top: 1px solid var(--border); padding-top: 20px; }
                .share-label {
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-muted);
                    font-weight: 600;
                    margin-bottom: 12px;
                }
                .share-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

                .copy-link-wrap {
                    display: flex;
                    align-items: center;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    overflow: hidden;
                    flex: 1;
                    min-width: 200px;
                    max-width: 360px;
                    transition: border-color 0.2s;
                }
                .copy-link-wrap:focus-within { border-color: var(--border-accent); }
                .copy-link-wrap .profile-url {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 0.78rem;
                    padding: 9px 14px;
                    flex: 1;
                    min-width: 0;
                    outline: none;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .btn-copy {
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    padding: 9px 16px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                    white-space: nowrap;
                    font-family: var(--font-head);
                    letter-spacing: 0.03em;
                }
                .btn-copy:hover { background: var(--accent-dim); }
                .btn-copy.copied { background: #1a7a50; }

                .social-icon-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 36px; height: 36px;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 50%;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.85rem;
                    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
                }
                .social-icon-btn:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); transform: translateY(-2px); }

                .btn-native-share {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    color: var(--text-secondary);
                    padding: 8px 16px;
                    font-size: 0.78rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                    font-family: var(--font-body);
                }
                .btn-native-share:hover { border-color: var(--border-accent); color: var(--accent); }

                .profile-tabs {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                }
                .tab-nav {
                    display: flex;
                    border-bottom: 1px solid var(--border);
                    overflow-x: auto;
                    scrollbar-width: none;
                }
                .tab-nav::-webkit-scrollbar { display: none; }
                .tab-nav-item {
                    flex-shrink: 0;
                    padding: 16px 28px;
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

                .card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 18px; }
                .content-card {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: border-color 0.25s, transform 0.2s;
                }
                .content-card:hover { border-color: var(--border-accent); transform: translateY(-3px); }
                .content-card-img { position: relative; height: 170px; overflow: hidden; }
                .content-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s ease; }
                .content-card:hover .content-card-img img { transform: scale(1.04); }
                .card-cat {
                    position: absolute; top: 10px; left: 10px;
                    background: var(--accent);
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 3px 10px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                }
                .content-card-body { padding: 14px 16px; }
                .content-card-body h5 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
                .content-card-body h5 a { color: inherit; text-decoration: none; }
                .content-card-body h5 a:hover { color: var(--accent); }
                .card-meta { display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); }
                .card-meta .stars-sm { color: var(--accent); }

                .review-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
                @media(max-width: 768px) { .review-layout { grid-template-columns: 1fr; } }

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
                .avg-score {
                    text-align: center;
                    flex-shrink: 0;
                }
                .avg-number { font-family: var(--font-head); font-size: 3.5rem; font-weight: 800; color: var(--accent); line-height: 1; }
                .avg-out-of { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
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
                .reviewer-avatar {
                    width: 38px; height: 38px; border-radius: 50%;
                    object-fit: cover;
                    border: 1px solid var(--border-accent);
                    flex-shrink: 0;
                }
                .reviewer-name { font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
                .reviewer-time { font-size: 0.72rem; color: var(--text-muted); }
                .reviewer-stars { color: var(--accent); font-size: 0.75rem; margin-left: auto; }
                .review-comment { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.6; }

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
                .star-input-wrap label {
                    font-size: 1.4rem;
                    color: var(--border);
                    cursor: pointer;
                    transition: color 0.15s;
                }
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

                .empty-state {
                    text-align: center; padding: 48px 24px;
                    color: var(--text-muted); font-size: 0.9rem;
                }
                .empty-state i { font-size: 2rem; margin-bottom: 10px; display: block; color: var(--text-muted); }

                .about-full {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 28px;
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    line-height: 1.9;
                }

                /* ── MODAL (custom, no Bootstrap JS dependency) ── */
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
                    max-width: 520px;
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
                .modal-dark .modal-title {
                    font-family: var(--font-head);
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                }
                .modal-dark .accent-bar {
                    display: block; width: 32px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 5px;
                }
                .modal-dark .modal-body {
                    padding: 24px;
                    overflow-y: auto;
                }
                .modal-dark .btn-close {
                    background: transparent;
                    border: none;
                    color: var(--text-primary);
                    filter: invert(1) brightness(0.6);
                    font-size: 1.1rem;
                    cursor: pointer;
                }
                [data-h-theme="light"] .modal-dark .btn-close { filter: none; }

                /* Responsive */
                @media(max-width: 768px) {
                    .talent-info-col { padding: 24px 20px; }
                    .talent-name { font-size: 1.5rem; }
                    .tab-body { padding: 20px; }
                    .copy-link-wrap { min-width: 160px; }
                    .fc-modal-backdrop { padding: 1.5rem 1rem; }
                    .modal-dark { max-height: calc(100vh - 3rem); }
                }

                /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
                [data-h-theme="light"] {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #F5f5f7;
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
                }

                /* Photo overlay gradients were tuned for a dark card bg — they still
                   resolve correctly via --bg-card, no override needed there. But the
                   bottom overlay's transparent-to-card fade can look slightly flat on
                   white, so soften it a touch. */
                [data-h-theme="light"] .photo-overlay-bottom {
                    background: linear-gradient(to top, var(--bg-card) 0%, transparent 60%);
                }

                /* Support/outline buttons keep white text on solid green already via
                   #fff literal — fine. Bar track background hardcoded to white-based
                   translucency, adjust for light bg */
                [data-h-theme="light"] .bar-track {
                    background: rgba(0,100,60,0.08);
                }

                /* form-control-dark background hardcoded to white-based translucency */
                [data-h-theme="light"] .form-control-dark {
                    background: rgba(0,100,60,0.03);
                }

                /* Star rating input default (unfilled) color uses --border, which is
                   already theme-aware — no override needed. */
            `}),e.jsxs("div",{className:"fc-talent-page",children:[e.jsx("div",{className:"talent-page",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"hero-card",children:e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"talent-photo-wrap",children:[e.jsx("img",{src:r.image?`/${r.image}`:"/assets/img/user/profile.jpg",alt:r.name}),e.jsx("div",{className:"photo-overlay"}),e.jsx("div",{className:"photo-overlay-bottom"})]})}),e.jsx("div",{className:"col-md-8",children:e.jsxs("div",{className:"talent-info-col",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"talent-skill-tag",children:[e.jsx("i",{className:"ti ti-sparkles"}),((I=r.category)==null?void 0:I.name)??"Talent"]}),e.jsxs("h1",{className:"talent-name",children:[r.name,e.jsxs("span",{className:"verified-badge",children:[e.jsx("i",{className:"ti ti-discount-check-filled"})," Verified"]})]}),e.jsxs("div",{className:"rating-row mb-3",children:[e.jsx("span",{className:"stars",children:e.jsx(w,{value:k})}),e.jsx("span",{className:"rating-num",children:k.toFixed(1)}),e.jsxs("span",{className:"rating-count",children:["(",c," reviews)"]})]}),e.jsxs("div",{className:"about-snippet",children:["I'm ",r.name||"this talent",", a passionate ",r.skill||"performer"," ","blending ",((T=r.category)==null?void 0:T.name)||"various disciplines",". I create immersive experiences that inspire and uplift communities."]}),e.jsxs("div",{className:"meta-pills",children:[e.jsxs("div",{className:"meta-pill",children:[e.jsx("i",{className:"ti ti-map-pin"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Based in"})," ",r.address]})]}),e.jsxs("div",{className:"meta-pill",children:[e.jsx("i",{className:"ti ti-calendar-event"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Since"})," ",r.created_at&&new Date(r.created_at).toLocaleDateString("en-US",{month:"short",year:"numeric"})]})]}),e.jsxs("div",{className:"meta-pill",children:[e.jsx("i",{className:"ti ti-language"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Speaks"})," ",r.language]})]})]}),e.jsxs("div",{className:"action-row",children:[e.jsxs("button",{className:"btn-support",onClick:()=>S(!0),children:[e.jsx("i",{className:"ti ti-heart"})," Support Talent"]}),e.jsxs("button",{className:"btn-outline",onClick:()=>C(!0),children:[e.jsx("i",{className:"ti ti-user-plus"})," Connect"]})]})]}),e.jsxs("div",{className:"share-section",children:[e.jsx("p",{className:"share-label",children:"Share Profile"}),e.jsxs("div",{className:"share-row",children:[e.jsxs("div",{className:"copy-link-wrap",children:[e.jsx("input",{type:"text",className:"profile-url",id:"profileUrl",value:t,readOnly:!0}),e.jsxs("button",{className:`btn-copy ${x?"copied":""}`,onClick:q,children:[e.jsx("i",{className:`ti ${x?"ti-check":"ti-copy"}`})," ",x?"Copied!":"Copy"]})]}),v&&e.jsxs("button",{className:"btn-native-share",onClick:M,children:[e.jsx("i",{className:"ti ti-share"})," Share"]}),e.jsx("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"Share on Facebook",children:e.jsx("i",{className:"fa-brands fa-facebook-f"})}),e.jsx("a",{href:`https://twitter.com/intent/tweet?url=${encodeURIComponent(t)}&text=${encodeURIComponent(`Check out ${r.name} on our platform!`)}`,target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"Share on X",children:e.jsx("i",{className:"fa-brands fa-x-twitter"})}),e.jsx("a",{href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(t)}`,target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"Share on LinkedIn",children:e.jsx("i",{className:"fa-brands fa-linkedin-in"})}),e.jsx("a",{href:`https://wa.me/?text=${encodeURIComponent(`Check out ${r.name} — ${t}`)}`,target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"Share on WhatsApp",children:e.jsx("i",{className:"fa-brands fa-whatsapp"})}),e.jsx("a",{href:`mailto:?subject=${encodeURIComponent(`Talent Profile: ${r.name}`)}&body=${encodeURIComponent(`Hey! Check out this talent profile: ${t}`)}`,className:"social-icon-btn",title:"Share via Email",children:e.jsx("i",{className:"ti ti-mail"})})]}),x&&e.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--accent)",marginTop:8},children:[e.jsx("i",{className:"ti ti-check"})," Link copied to clipboard!"]})]})]})})]})}),e.jsxs("div",{className:"profile-tabs",children:[e.jsx("div",{className:"tab-nav",children:O.map(a=>e.jsx("button",{className:`tab-nav-item ${l===a.key?"active":""}`,onClick:()=>p(a.key),children:a.label},a.key))}),e.jsxs("div",{className:"tab-body",children:[e.jsxs("div",{className:`tab-pane ${l==="about"?"active":""}`,children:[e.jsx("div",{className:"section-head",children:e.jsxs("h3",{children:["About ",r.name]})}),e.jsxs("div",{className:"about-full",children:[e.jsxs("p",{children:["Hello, I'm ",r.name||"Unnamed Talent",", a passionate"," ",r.skill||"creative"," and performer blending"," ",((E=r.category)==null?void 0:E.name)||"various disciplines",". I create immersive experiences that inspire and uplift communities. My journey has been driven by a deep love for the art and a commitment to bringing authentic storytelling and performance to every audience I meet."]}),r.bio&&e.jsx("p",{style:{marginTop:16},children:r.bio})]})]}),e.jsxs("div",{className:`tab-pane ${l==="stories"?"active":""}`,children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h3",{children:"Stories"}),u.length>0&&e.jsx("span",{className:"count-badge",children:u.length})]}),u.length>0?e.jsx("div",{className:"card-grid",children:u.map(a=>{var d,j,y;const i=(d=a.comments)!=null&&d.length?a.comments.reduce(($,D)=>$+(D.rating||0),0)/a.comments.length:0;return e.jsxs("div",{className:"content-card",children:[e.jsxs("div",{className:"content-card-img",children:[e.jsx("img",{src:"/assets/img/placeholder.jpg",alt:a.title}),e.jsx("span",{className:"card-cat",children:((j=a.category)==null?void 0:j.name)??"Story"})]}),e.jsxs("div",{className:"content-card-body",children:[e.jsx("h5",{children:e.jsx("a",{href:g.storyDetails(a.slug),children:a.title})}),e.jsxs("div",{className:"card-meta",children:[e.jsx("span",{className:"stars-sm",children:e.jsx(w,{value:i,size:"0.75rem"})}),e.jsxs("span",{children:[i.toFixed(1)," (",((y=a.comments)==null?void 0:y.length)??0,")"]}),e.jsx("span",{children:a.tags})]})]})]},a.id)})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-book-off"}),"No stories published yet."]})]}),e.jsxs("div",{className:`tab-pane ${l==="courses"?"active":""}`,children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h3",{children:"Courses"}),f.length>0&&e.jsx("span",{className:"count-badge",children:f.length})]}),f.length>0?e.jsx("div",{className:"card-grid",children:f.map(a=>{var d,j,y;const i=(d=a.feedback)!=null&&d.length?a.feedback.reduce(($,D)=>$+(D.rating||0),0)/a.feedback.length:0;return e.jsxs("div",{className:"content-card",children:[e.jsxs("div",{className:"content-card-img",children:[e.jsx("a",{href:g.courseDetails(a.slug),children:e.jsx("img",{src:`/images/thumbnails/${a.thumbnail}`,alt:a.title})}),e.jsx("span",{className:"card-cat",children:((j=a.category)==null?void 0:j.name)??"Course"})]}),e.jsxs("div",{className:"content-card-body",children:[e.jsx("h5",{children:e.jsx("a",{href:g.courseDetails(a.slug),children:a.title})}),e.jsxs("div",{className:"card-meta",children:[e.jsx("span",{className:"stars-sm",children:e.jsx(w,{value:i,size:"0.75rem"})}),e.jsxs("span",{children:[i.toFixed(1)," (",((y=a.feedback)==null?void 0:y.length)??0,")"]}),e.jsx("span",{children:a.tags})]})]})]},a.id)})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-school-off"}),"No courses available yet."]})]}),e.jsx("div",{className:`tab-pane ${l==="reviews"?"active":""}`,children:e.jsxs("div",{className:"review-layout",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"rating-summary",children:[e.jsxs("div",{className:"avg-score",children:[e.jsx("div",{className:"avg-number",children:k.toFixed(1)}),e.jsx("div",{className:"avg-stars",children:e.jsx(w,{value:k,size:"1.1rem"})}),e.jsxs("div",{className:"avg-count",children:[c," reviews"]})]}),e.jsx("div",{className:"bars-wrap",children:Y.map(({stars:a,count:i})=>{const d=c?i/c*100:0;return e.jsxs("div",{className:"bar-row",children:[e.jsxs("span",{className:"bar-label",children:[a," star"]}),e.jsx("div",{className:"bar-track",children:e.jsx("div",{className:"bar-fill",style:{width:`${d}%`}})}),e.jsx("span",{className:"bar-count",children:i})]},a)})})]}),e.jsxs("div",{className:"section-head",children:[e.jsx("h3",{children:"All Reviews"}),e.jsx("span",{className:"count-badge",children:c})]}),e.jsx("div",{className:"review-list",children:b.length>0?b.map(a=>e.jsxs("div",{className:"review-item",children:[e.jsxs("div",{className:"reviewer-head",children:[e.jsx("img",{src:"/assets/img/user/profile.jpg",className:"reviewer-avatar",alt:""}),e.jsxs("div",{children:[e.jsx("div",{className:"reviewer-name",children:a.name}),e.jsx("div",{className:"reviewer-time",children:U(a.created_at)})]}),e.jsx("span",{className:"reviewer-stars ms-auto",children:e.jsx(w,{value:a.rating,size:"0.75rem"})})]}),e.jsx("p",{className:"review-comment",children:a.comment})]},a.id)):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-message-off"}),"No reviews yet."]})})]}),e.jsx("div",{children:e.jsxs("div",{className:"review-form-card",children:[e.jsx("h4",{children:"Leave a Review"}),e.jsxs("form",{onSubmit:_,children:[e.jsxs("label",{className:"form-label",children:["Your Rating ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("div",{className:"star-input-wrap",children:[5,4,3,2,1].map(a=>e.jsxs(L.Fragment,{children:[e.jsx("input",{type:"radio",name:"rating",id:`s${a}`,value:a,checked:s.data.rating===String(a),onChange:()=>s.setData("rating",String(a)),required:!0}),e.jsx("label",{htmlFor:`s${a}`,title:`${a} star${a>1?"s":""}`,children:"★"})]},a))}),e.jsxs("div",{className:"row g-3",style:{marginBottom:0},children:[e.jsxs("div",{className:"col-6",children:[e.jsxs("label",{className:"form-label",children:["Name ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"text",className:"form-control-dark",placeholder:"Your name",value:s.data.name,onChange:a=>s.setData("name",a.target.value),required:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsxs("label",{className:"form-label",children:["Email ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"email",className:"form-control-dark",placeholder:"you@mail.com",value:s.data.email,onChange:a=>s.setData("email",a.target.value),required:!0})]})]}),e.jsxs("label",{className:"form-label",style:{marginTop:2},children:["Your Review ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("textarea",{className:"form-control-dark",placeholder:"Share your experience…",value:s.data.comment,onChange:a=>s.setData("comment",a.target.value),required:!0}),e.jsx("button",{type:"submit",className:"btn-submit-review",disabled:s.processing,children:s.processing?"Submitting…":"Submit Review"})]})]})})]})})]})]})]})}),N&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>S(!1),children:e.jsxs("div",{className:"modal-dark",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"modal-title",children:["Support ",r.name]}),e.jsx("span",{className:"accent-bar"})]}),e.jsx("button",{className:"btn-close",onClick:()=>S(!1),children:"✕"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:20},children:"Your contribution helps this talent grow and create more incredible work."}),e.jsxs("form",{onSubmit:A,children:[e.jsx("label",{className:"form-label",children:"Your Name"}),e.jsx("input",{type:"text",className:"form-control-dark",placeholder:"John Doe",value:o.data.name,onChange:a=>o.setData("name",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Your Email"}),e.jsx("input",{type:"email",className:"form-control-dark",placeholder:"you@example.com",value:o.data.email,onChange:a=>o.setData("email",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Support Amount (RWF)"}),e.jsx("input",{type:"number",className:"form-control-dark",placeholder:"e.g. 5000",min:"1",value:o.data.amount,onChange:a=>o.setData("amount",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Message (Optional)"}),e.jsx("textarea",{className:"form-control-dark",rows:3,placeholder:"Write a short note...",value:o.data.message,onChange:a=>o.setData("message",a.target.value)}),e.jsxs("button",{type:"submit",className:"btn-submit-review",disabled:o.processing,children:[e.jsx("i",{className:"ti ti-heart me-2"})," ",o.processing?"Sending…":"Send Support"]})]})]})]})}),z&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>C(!1),children:e.jsxs("div",{className:"modal-dark",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"modal-title",children:["Connect with ",r.name]}),e.jsx("span",{className:"accent-bar"})]}),e.jsx("button",{className:"btn-close",onClick:()=>C(!1),children:"✕"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:20},children:"Send a connection request and introduce yourself."}),e.jsxs("form",{onSubmit:P,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Your Name"}),e.jsx("input",{type:"text",className:"form-control-dark",placeholder:"Enter your name",value:n.data.name,onChange:a=>n.setData("name",a.target.value)})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Your Email"}),e.jsx("input",{type:"email",className:"form-control-dark",placeholder:"Enter your email",value:n.data.email,onChange:a=>n.setData("email",a.target.value)})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Your Phone"}),e.jsx("input",{type:"tel",className:"form-control-dark",placeholder:"Enter your phone number",value:n.data.phone,onChange:a=>n.setData("phone",a.target.value)})]}),e.jsx("label",{className:"form-label",children:"Your Message"}),e.jsx("textarea",{className:"form-control-dark",rows:4,placeholder:"Hi! I'd love to connect…",value:n.data.message,onChange:a=>n.setData("message",a.target.value)}),e.jsxs("button",{type:"submit",className:"btn-submit-review",disabled:n.processing,children:[e.jsx("i",{className:"ti ti-user-plus me-2"})," ",n.processing?"Sending…":"Send Request"]})]})]})]})})]})]})}G.layout=r=>e.jsx(H,{children:r,title:"Skill Profile"});export{G as default};
