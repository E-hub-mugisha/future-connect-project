import{d as V,r as x,u as Y,j as e,H as G,L as d,a as q}from"./app-BO26Fp_i.js";import{G as O}from"./GuestLayout-RkVoz6LJ.js";function J({course:a,relatedCourses:u=[],flutterwavePublicKey:W}){var N,w,k,z,S,$,R,C,F,_,P,E,I,D;const{auth:l,flash:m}=V().props,[p,v]=x.useState("description"),[y,g]=x.useState(!1),[t,L]=x.useState((N=a.lessons)!=null&&N.length?a.lessons[0]:null),j=x.useRef(null),o=Y({rating:"",comment:""});function T(r){r.preventDefault(),o.post(route("courses.review",a.id),{preserveScroll:!0,onSuccess:()=>o.reset()})}function B(r){r.preventDefault(),q.post(route("user.courses.enroll",a.id))}function H(r){if(!r)return"";const s=r.split("&")[0],i=s.lastIndexOf("v=");return i===-1?s:s.slice(i+2)}function b(r){var s;L(r),(s=j.current)==null||s.scrollIntoView({behavior:"smooth",block:"start"})}function M(){var s,i;g(!0);const r=`course-${a.id}-${Date.now()}`;window.FlutterwaveCheckout({public_key:W,tx_ref:r,amount:a.price,currency:"RWF",payment_options:"card, mobilemoneyrwanda",customer:{email:((s=l==null?void 0:l.user)==null?void 0:s.email)??"guest@example.com",name:((i=l==null?void 0:l.user)==null?void 0:i.name)??"Guest"},callback:function(n){n.status==="successful"||n.status==="completed"?window.location.href=`/course/payment/callback?tx_ref=${n.tx_ref}&course_id=${a.id}&status=${n.status}`:(alert("Payment not successful. Please try again."),g(!1))},onclose:function(){g(!1)},customizations:{title:a.title,description:"Pay to enroll in this course",logo:"/logo.png"}})}const U=a.feedback&&a.feedback.length?a.feedback.reduce((r,s)=>r+s.rating,0)/a.feedback.length:0,h=(t==null?void 0:t.video_url)||a.video||null,c=t?(w=a.lessons)==null?void 0:w.findIndex(r=>r.id===t.id):-1;return e.jsxs(e.Fragment,{children:[e.jsx(G,{title:a.title}),e.jsx("script",{src:"https://checkout.flutterwave.com/v3.js"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
        :root {
          --bg-base:       #0e1618;
          --bg-card:       #131e21;
          --bg-card-alt:   #192429;
          --bg-elevated:   #1e2d32;
          --accent:        #48d597;
          --accent-dim:    #48d59720;
          --accent-muted:  #48d59740;
          --accent-hover:  #00c27a;
          --text-primary:  #f0f4f5;
          --text-secondary:#8fa8ad;
          --text-muted:    #4d6b72;
          --border:        #1f3038;
          --border-hover:  #2a4550;
          --radius-sm:     6px;
          --radius-md:     10px;
          --radius-lg:     16px;
          --radius-xl:     22px;
        }

        body { background: var(--bg-base) !important; color: var(--text-primary) !important; }

        .cs-page { padding: 2rem 0 4rem; }

        .cs-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: border-color .25s, transform .25s;
        }
        .cs-card:hover { border-color: var(--border-hover); }

        .cs-video-wrap {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          scroll-margin-top: 1.5rem;
        }

        .cs-player-meta {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: .85rem; margin-bottom: 1.5rem; gap: 12px; flex-wrap: wrap;
        }
        .cs-player-lesson-tag {
          font-size: .72rem; font-weight: 700; color: var(--accent);
          text-transform: uppercase; letter-spacing: .6px; margin-bottom: .3rem;
          display: flex; align-items: center; gap: 6px;
        }
        .cs-player-lesson-tag .dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
          animation: cs-pulse 1.6s ease-in-out infinite;
        }
        @keyframes cs-pulse { 0%, 100% { opacity: .4; } 50% { opacity: 1; } }
        .cs-player-lesson-title {
          font-size: 1.15rem; font-weight: 800; color: var(--text-primary);
          font-family: 'Syne', sans-serif;
        }
        .cs-player-nav { display: flex; gap: 8px; flex-shrink: 0; }
        .cs-player-nav button {
          background: var(--bg-elevated); border: 1px solid var(--border);
          color: var(--text-secondary); border-radius: var(--radius-sm);
          width: 34px; height: 34px; display: inline-flex; align-items: center;
          justify-content: center; cursor: pointer; transition: border-color .2s, color .2s;
        }
        .cs-player-nav button:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .cs-player-nav button:disabled { opacity: .35; cursor: not-allowed; }

        .cs-lesson-desc-panel {
          background: var(--bg-elevated); border-left: 3px solid var(--accent);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          padding: 1rem 1.25rem; font-size: .88rem; color: var(--text-secondary); line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .cs-tabs { border-bottom: 1px solid var(--border); margin-bottom: 1.75rem; gap: .25rem; display: flex; }
        .cs-tab-link {
          background: none; border: none; color: var(--text-secondary);
          font-size: .875rem; font-weight: 600; letter-spacing: .4px;
          padding: .75rem 1.25rem; cursor: pointer; position: relative;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          transition: color .2s;
        }
        .cs-tab-link::after {
          content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
          height: 2px; background: var(--accent); opacity: 0; transition: opacity .2s;
        }
        .cs-tab-link.active, .cs-tab-link:hover { color: var(--text-primary); }
        .cs-tab-link.active::after { opacity: 1; }

        .cs-section-title {
          font-size: 1rem; font-weight: 700; color: var(--text-secondary);
          text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 1.25rem;
          display: flex; align-items: center; gap: .5rem;
        }
        .cs-section-title::before {
          content: ''; display: inline-block; width: 3px; height: 1rem;
          background: var(--accent); border-radius: 2px;
        }

        .cs-empty {
          text-align: center; padding: 3rem 1rem;
          color: var(--text-muted); border: 1px dashed var(--border);
          border-radius: var(--radius-md);
        }
        .cs-empty i { font-size: 2.5rem; margin-bottom: 1rem; display: block; color: var(--text-muted); }

        .cs-review-item {
          padding: 1.25rem 0; border-bottom: 1px solid var(--border);
        }
        .cs-review-item:last-child { border-bottom: none; }
        .cs-reviewer-avatar {
          width: 42px; height: 42px; border-radius: 50%; object-fit: cover;
          border: 2px solid var(--border);
        }
        .cs-stars i { color: var(--text-muted); font-size: .8rem; }
        .cs-stars i.filled { color: #f5a623; }
        .cs-review-form-card {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: var(--radius-md); padding: 1.5rem; margin-top: 1.5rem;
        }
        .cs-form-control {
          background: var(--bg-base) !important; border: 1px solid var(--border) !important;
          color: var(--text-primary) !important; border-radius: var(--radius-sm) !important;
        }
        .cs-form-control:focus {
          border-color: var(--accent) !important; box-shadow: 0 0 0 3px var(--accent-dim) !important;
          outline: none !important;
        }
        .cs-form-select {
          background: var(--bg-base) !important; border: 1px solid var(--border) !important;
          color: var(--text-primary) !important; border-radius: var(--radius-sm) !important;
        }

        .cs-sidebar-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
        }
        .cs-sidebar-top {
          background: linear-gradient(135deg, #0e1d21 0%, #0e1618 100%);
          padding: 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        .cs-course-title {
          font-size: 1.2rem; font-weight: 800; color: var(--text-primary);
          line-height: 1.35; margin-bottom: 1rem;
          font-family: 'Syne', sans-serif;
        }
        .cs-meta-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 50px; padding: 4px 12px; font-size: .75rem; color: var(--text-secondary);
          margin: 3px;
        }
        .cs-meta-pill i { color: var(--accent); font-size: .8rem; }
        .cs-price-row {
          display: flex; align-items: baseline; gap: 10px; margin: 1.25rem 0 1rem;
        }
        .cs-price {
          font-size: 2rem; font-weight: 900; color: var(--accent);
          font-family: 'Syne', sans-serif; line-height: 1;
        }
        .cs-price-label { font-size: .8rem; color: var(--text-muted); }

        .cs-author-strip {
          display: flex; align-items: center; gap: 12px;
          padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border);
          background: var(--bg-card-alt);
        }
        .cs-author-avatar {
          width: 52px; height: 52px; border-radius: 50%; object-fit: cover;
          border: 2px solid var(--accent-muted); flex-shrink: 0;
        }
        .cs-author-name { font-size: .95rem; font-weight: 700; color: var(--text-primary); }
        .cs-author-meta { font-size: .78rem; color: var(--text-secondary); margin-top: 2px; }
        .cs-status-dot {
          display: inline-block; width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent); margin-right: 4px; vertical-align: middle;
        }

        .cs-btn-primary {
          display: block; width: 100%; padding: .9rem 1.5rem; text-align: center;
          background: var(--accent); color: #fff; border: none;
          border-radius: var(--radius-md); font-weight: 700; font-size: .95rem;
          cursor: pointer; text-decoration: none; transition: background .2s, transform .15s;
          letter-spacing: .3px;
        }
        .cs-btn-primary:hover { background: var(--accent-hover); transform: translateY(-1px); color: #fff; }
        .cs-btn-outline {
          display: block; width: 100%; padding: .8rem 1.5rem; text-align: center;
          background: transparent; color: var(--accent);
          border: 1px solid var(--accent-muted); border-radius: var(--radius-md);
          font-weight: 700; font-size: .88rem; cursor: pointer; text-decoration: none;
          transition: border-color .2s, background .2s;
        }
        .cs-btn-outline:hover { border-color: var(--accent); background: var(--accent-dim); color: var(--accent); }
        .cs-sidebar-actions { padding: 1.25rem 1.5rem; display: flex; flex-direction: column; gap: 10px; }

        .cs-share-row {
          display: flex; align-items: center; gap: 10px;
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--border);
          font-size: .8rem; color: var(--text-muted);
        }
        .cs-share-icon {
          width: 32px; height: 32px; display: inline-flex; align-items: center;
          justify-content: center; border-radius: 50%;
          background: var(--bg-elevated); border: 1px solid var(--border);
          color: var(--text-secondary); font-size: .85rem;
          transition: border-color .2s, color .2s; text-decoration: none;
        }
        .cs-share-icon:hover { border-color: var(--accent); color: var(--accent); }

        /* ── Course Content sidebar (Udemy/Coursera curriculum panel) ── */
        .cs-content-card { margin-top: 1.25rem; position: sticky; top: 1.5rem; }
        .cs-content-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.1rem 1.25rem; border-bottom: 1px solid var(--border);
        }
        .cs-content-header h3 {
          font-size: .95rem; font-weight: 800; color: var(--text-primary);
          margin: 0; font-family: 'Syne', sans-serif;
        }
        .cs-content-badge {
          background: var(--accent-dim); color: var(--accent);
          font-size: .72rem; font-weight: 700; padding: 3px 10px;
          border-radius: 50px; border: 1px solid var(--accent-muted);
        }
        .cs-content-list {
          list-style: none; margin: 0; padding: .5rem;
          max-height: 480px; overflow-y: auto;
        }
        .cs-content-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px; border-radius: var(--radius-sm);
          cursor: pointer; border: 1px solid transparent;
          transition: background .2s, border-color .2s;
        }
        .cs-content-item:hover { background: var(--bg-card-alt); }
        .cs-content-item.playing {
          background: var(--accent-dim); border-color: var(--accent-muted);
        }
        .cs-content-num {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
          background: var(--bg-elevated); border: 1px solid var(--border);
          color: var(--text-secondary); font-size: .75rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s, border-color .2s, color .2s;
        }
        .cs-content-item.playing .cs-content-num {
          background: var(--accent); border-color: var(--accent); color: #06231a;
        }
        .cs-content-item.playing .cs-content-num i { font-size: .68rem; }
        .cs-content-body { flex: 1; min-width: 0; }
        .cs-content-title {
          font-size: .85rem; font-weight: 600; color: var(--text-primary);
          line-height: 1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .cs-content-item.playing .cs-content-title { color: var(--accent); }
        .cs-content-sub {
          display: flex; align-items: center; gap: 6px; margin-top: 2px;
          font-size: .72rem; color: var(--text-muted);
        }
        .cs-content-sub i { font-size: .68rem; }
        .cs-content-now-playing {
          font-size: .68rem; font-weight: 700; color: var(--accent);
          text-transform: uppercase; letter-spacing: .4px;
          display: flex; align-items: center; gap: 4px; flex-shrink: 0;
        }
        .cs-content-now-playing .dot {
          width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
          animation: cs-pulse 1.6s ease-in-out infinite;
        }

        .cs-related-section { margin-top: 3rem; }
        .cs-related-title {
          font-size: 1.3rem; font-weight: 800; color: var(--text-primary);
          margin-bottom: 1.5rem; font-family: 'Syne', sans-serif;
          display: flex; align-items: center; gap: .75rem;
        }
        .cs-related-title::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
        }
        .cs-course-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
          transition: border-color .25s, transform .25s;
        }
        .cs-course-card:hover { border-color: var(--accent-muted); transform: translateY(-3px); }
        .cs-course-thumb { width: 100%; height: 180px; object-fit: cover; display: block; }
        .cs-course-body { padding: 1.1rem; }
        .cs-cat-tag {
          display: inline-block; background: var(--accent-dim); color: var(--accent);
          font-size: .7rem; font-weight: 700; padding: 3px 10px; border-radius: 50px;
          margin-bottom: .75rem; letter-spacing: .3px; border: 1px solid var(--accent-muted);
        }
        .cs-course-name {
          font-size: .95rem; font-weight: 700; color: var(--text-primary);
          line-height: 1.4; margin-bottom: .75rem; display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
          text-decoration: none;
        }
        .cs-course-name:hover { color: var(--accent); }
        .cs-course-foot {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--border); padding-top: .75rem; margin-top: .75rem;
        }
        .cs-course-price { font-size: 1rem; font-weight: 800; color: var(--accent); }
        .cs-course-price.free { color: #5ab8d4; }

        .cs-pay-modal .modal-content {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); color: var(--text-primary);
        }
        .cs-pay-modal .modal-header {
          background: var(--bg-elevated); border-bottom: 1px solid var(--border);
        }
        .cs-pay-modal .modal-footer {
          background: var(--bg-card-alt); border-top: 1px solid var(--border);
        }
        .cs-pay-modal .btn-close { filter: invert(1) opacity(.6); }

        .cs-alert-success {
          background: var(--accent-dim); border: 1px solid var(--accent-muted);
          color: var(--accent); border-radius: var(--radius-sm); padding: .75rem 1rem;
          margin-bottom: 1rem; font-size: .875rem;
        }
        .cs-login-prompt { color: var(--text-secondary); font-size: .88rem; }
        .cs-login-prompt a { color: var(--accent); text-decoration: none; font-weight: 600; }

        .tab-pane { display: none; }
        .tab-pane.active.show { display: block; }

        @media (max-width: 768px) {
          .cs-price { font-size: 1.5rem; }
          .cs-content-card { position: static; }
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg-base:        #f6faf8;
          --bg-card:        #ffffff;
          --bg-card-alt:    #eef4f1;
          --bg-elevated:    #e6f0eb;
          --accent:         #00a667;
          --accent-dim:     rgba(0, 166, 103, 0.12);
          --accent-muted:   rgba(0, 166, 103, 0.25);
          --accent-hover:   #00c07a;
          --text-primary:   #10201b;
          --text-secondary: #45605a;
          --text-muted:     #7c968f;
          --border:         rgba(0, 100, 60, 0.12);
          --border-hover:   rgba(0, 100, 60, 0.22);
        }

        /* Sidebar top gradient was a near-black dark gradient — swap to a soft
           light-mode tint so it doesn't read as a dark smear on white */
        [data-h-theme="light"] .cs-sidebar-top {
          background: linear-gradient(135deg, #eef7f2 0%, #f6faf8 100%);
        }

        /* Bootstrap's default close icon is already dark, so on a light modal
           header it doesn't need the white-icon invert the dark theme required */
        [data-h-theme="light"] .cs-pay-modal .btn-close {
          filter: none;
        }

        [data-h-theme="light"] .cs-content-item.playing .cs-content-num {
          color: #ffffff;
        }
      `}),e.jsx("div",{className:"page-content content cs-page",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"cs-card p-4",children:[e.jsx("div",{className:"cs-video-wrap",ref:j,children:h?e.jsx("div",{className:"ratio ratio-16x9",children:e.jsx("iframe",{src:`https://www.youtube.com/embed/${H(h)}?autoplay=0&playsinline=1`,title:(t==null?void 0:t.title)??a.title,allow:"autoplay; encrypted-media",allowFullScreen:!0},h)}):e.jsx("img",{src:`/images/thumbnails/${a.thumbnail}`,className:"img-fluid w-100",style:{borderRadius:"var(--radius-md)"},alt:a.title})}),t?e.jsxs("div",{className:"cs-player-meta",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"cs-player-lesson-tag",children:[e.jsx("span",{className:"dot"}),"Lesson ",c+1," of ",a.lessons.length]}),e.jsx("div",{className:"cs-player-lesson-title",children:t.title??"Untitled Lesson"})]}),e.jsxs("div",{className:"cs-player-nav",children:[e.jsx("button",{type:"button",disabled:c<=0,onClick:()=>b(a.lessons[c-1]),title:"Previous lesson",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{type:"button",disabled:c===-1||c>=a.lessons.length-1,onClick:()=>b(a.lessons[c+1]),title:"Next lesson",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]}):e.jsx("div",{className:"cs-player-meta",children:e.jsx("div",{className:"cs-player-lesson-title",children:a.title})}),(t==null?void 0:t.description)&&e.jsx("div",{className:"cs-lesson-desc-panel",children:t.description}),e.jsxs("div",{className:"cs-tabs",children:[e.jsx("button",{className:`cs-tab-link${p==="description"?" active":""}`,onClick:()=>v("description"),children:"Description"}),e.jsxs("button",{className:`cs-tab-link${p==="review"?" active":""}`,onClick:()=>v("review"),children:["Reviews",e.jsx("span",{style:{background:"var(--accent-dim)",color:"var(--accent)",fontSize:".7rem",padding:"1px 7px",borderRadius:"50px",marginLeft:"5px"},children:((k=a.feedback)==null?void 0:k.length)??0})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:`tab-pane${p==="description"?" active show":""}`,children:[e.jsx("p",{className:"cs-section-title",children:"About this course"}),e.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.8,fontSize:".93rem"},children:a.description})]}),e.jsxs("div",{className:`tab-pane${p==="review"?" active show":""}`,children:[e.jsxs("p",{className:"cs-section-title",children:["Reviews (",((z=a.feedback)==null?void 0:z.length)??0,")"]}),((S=a.feedback)==null?void 0:S.length)>0?a.feedback.map(r=>{var s,i,n;return e.jsx("div",{className:"cs-review-item",children:e.jsxs("div",{className:"d-flex align-items-start gap-3",children:[e.jsx("img",{src:(s=r.user)!=null&&s.profile_photo?`/uploads/${r.user.profile_photo}`:"/assets/img/user/profile.jpg",alt:(i=r.user)==null?void 0:i.name,className:"cs-reviewer-avatar"}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[e.jsx("span",{style:{fontWeight:700,color:"var(--text-primary)",fontSize:".92rem"},children:(n=r.user)==null?void 0:n.name}),e.jsx("span",{style:{fontSize:".75rem",color:"var(--text-muted)"},children:r.created_ago})]}),e.jsxs("div",{className:"cs-stars my-1",children:[Array.from({length:5}).map((f,A)=>e.jsx("i",{className:`fa-solid fa-star${A<r.rating?" filled":""}`},A)),e.jsxs("span",{style:{fontSize:".75rem",color:"var(--text-muted)",marginLeft:"4px"},children:[r.rating,".0"]})]}),e.jsx("p",{style:{fontSize:".88rem",color:"var(--text-secondary)",lineHeight:1.6,margin:0},children:r.comment})]})]})},r.id)}):e.jsxs("div",{className:"cs-empty",children:[e.jsx("i",{className:"fa-solid fa-comment-slash"}),e.jsx("p",{children:"No reviews yet. Be the first to leave one!"})]}),e.jsxs("div",{className:"cs-review-form-card mt-4",children:[e.jsx("p",{className:"cs-section-title",children:"Leave a Review"}),l!=null&&l.user?e.jsxs(e.Fragment,{children:[(m==null?void 0:m.success)&&e.jsx("div",{className:"cs-alert-success",children:m.success}),e.jsxs("form",{onSubmit:T,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",style:{color:"var(--text-secondary)",fontSize:".85rem",fontWeight:600},children:"Rating"}),e.jsxs("select",{className:"form-select cs-form-select",value:o.data.rating,onChange:r=>o.setData("rating",r.target.value),required:!0,children:[e.jsx("option",{value:"",children:"-- Select Rating --"}),[1,2,3,4,5].map(r=>e.jsxs("option",{value:r,children:[r," Star",r>1?"s":""]},r))]}),o.errors.rating&&e.jsx("small",{className:"text-danger",children:o.errors.rating})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",style:{color:"var(--text-secondary)",fontSize:".85rem",fontWeight:600},children:"Comment"}),e.jsx("textarea",{rows:"4",className:"form-control cs-form-control",placeholder:"Share your experience with this course...",value:o.data.comment,onChange:r=>o.setData("comment",r.target.value)}),o.errors.comment&&e.jsx("small",{className:"text-danger",children:o.errors.comment})]}),e.jsx("button",{type:"submit",className:"cs-btn-primary",style:{width:"auto",padding:".7rem 2rem",display:"inline-block"},disabled:o.processing,children:"Submit Review"})]})]}):e.jsxs("p",{className:"cs-login-prompt",children:[e.jsx(d,{href:route("login"),children:"Log in"})," to leave a review."]})]})]})]})]})}),e.jsxs("div",{className:"col-lg-4",children:[e.jsxs("div",{className:"cs-sidebar-card",children:[e.jsxs("div",{className:"cs-sidebar-top",children:[e.jsx("h2",{className:"cs-course-title",children:a.title}),e.jsxs("div",{style:{marginBottom:".75rem"},children:[e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-star",style:{color:"#f5a623",fontSize:".75rem"}}),U.toFixed(1)]}),e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-comment-dots"}),(($=a.feedback)==null?void 0:$.length)??0," reviews"]}),e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-tag"}),(R=a.category)==null?void 0:R.name]}),e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-heart",style:{color:"#e74c3c"}}),a.likes_count??0," likes"]}),e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-calendar"}),a.created_ago??""]})]}),e.jsx("div",{className:"cs-price-row",children:a.is_free?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"cs-price",style:{color:"#5ab8d4"},children:"Free"}),e.jsx("span",{className:"cs-price-label",children:"No payment required"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"cs-price",children:["$",Number(a.price).toFixed(2)]}),e.jsx("span",{className:"cs-price-label",children:"one-time payment"})]})})]}),e.jsxs("div",{className:"cs-author-strip",children:[e.jsx("img",{src:(C=a.talent)!=null&&C.image?`/image/talents/${a.talent.image}`:"/assets/img/user/profile.jpg",alt:"Author",className:"cs-author-avatar"}),e.jsxs("div",{children:[e.jsxs("div",{className:"cs-author-name",children:[(F=a.talent)==null?void 0:F.name,e.jsxs("span",{style:{background:"var(--accent-dim)",color:"var(--accent)",fontSize:".68rem",padding:"2px 8px",borderRadius:"50px",marginLeft:"6px",fontWeight:700},children:[e.jsx("span",{className:"cs-status-dot"}),K((_=a.talent)==null?void 0:_.status)]})]}),e.jsxs("div",{className:"cs-author-meta",children:[e.jsx("i",{className:"fa-solid fa-star",style:{color:"#f5a623",fontSize:".7rem"}}),(P=a.talent)==null?void 0:P.rating,"  ·  ",(E=a.talent)==null?void 0:E.rating_count," ratings"]})]})]}),e.jsxs("div",{className:"cs-sidebar-actions",children:[a.is_free?e.jsxs("a",{href:"#enrollModal",className:"cs-btn-primary","data-bs-toggle":"modal",children:[e.jsx("i",{className:"fa-solid fa-bolt me-1"})," Enroll for Free"]}):e.jsxs("a",{href:"#paymentModal",className:"cs-btn-primary","data-bs-toggle":"modal",children:[e.jsx("i",{className:"fa-solid fa-lock-open me-1"}),"Enroll · $",Number(a.price).toFixed(2)]}),e.jsx(d,{href:route("user.talent.details",(I=a.talent)==null?void 0:I.id),className:"cs-btn-outline",children:"View Author Profile"})]}),e.jsxs("div",{className:"cs-share-row",children:[e.jsx("span",{children:"Share"}),["facebook","twitter","instagram","linkedin","whatsapp"].map(r=>e.jsx("a",{href:"javascript:void(0);",className:"cs-share-icon",children:e.jsx("i",{className:`fa-brands fa-${r}`})},r))]})]}),((D=a.lessons)==null?void 0:D.length)>0&&e.jsxs("div",{className:"cs-sidebar-card cs-content-card",children:[e.jsxs("div",{className:"cs-content-header",children:[e.jsx("h3",{children:"Course content"}),e.jsxs("span",{className:"cs-content-badge",children:[a.lessons.length," lessons"]})]}),e.jsx("ul",{className:"cs-content-list",children:a.lessons.map((r,s)=>{const i=(t==null?void 0:t.id)===r.id;return e.jsxs("li",{className:`cs-content-item${i?" playing":""}`,onClick:()=>b(r),children:[e.jsx("div",{className:"cs-content-num",children:i?e.jsx("i",{className:"fa-solid fa-play"}):s+1}),e.jsxs("div",{className:"cs-content-body",children:[e.jsx("div",{className:"cs-content-title",children:r.title??"Untitled Lesson"}),e.jsxs("div",{className:"cs-content-sub",children:[r.video_url?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-circle-play"})," Video"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-file-lines"})," Text"]}),r.duration&&e.jsxs("span",{children:["· ",r.duration]})]})]}),i&&e.jsxs("span",{className:"cs-content-now-playing",children:[e.jsx("span",{className:"dot"})," Playing"]})]},r.id)})})]})]})]}),e.jsxs("div",{className:"cs-related-section",children:[e.jsx("h3",{className:"cs-related-title",children:"Related Courses"}),e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4",children:u.length>0?u.map(r=>{var s,i,n,f;return e.jsx("div",{className:"col",children:e.jsxs("div",{className:"cs-course-card h-100",children:[e.jsx(d,{href:route("user.courses.show",r.slug),children:e.jsx("img",{src:`/image/thumbnails/${r.thumbnail}`,className:"cs-course-thumb",alt:r.title})}),e.jsxs("div",{className:"cs-course-body",children:[e.jsx(d,{href:route("user.courses",{category:(s=r.category)==null?void 0:s.slug}),className:"cs-cat-tag",children:(i=r.category)==null?void 0:i.name}),e.jsx(d,{href:route("user.courses.show",r.slug),className:"d-block cs-course-name",children:r.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:".5rem"},children:[e.jsx("img",{src:(n=r.talent)!=null&&n.image?`/image/talents/${r.talent.image}`:"/assets/img/user/profile.jpg",style:{width:"24px",height:"24px",borderRadius:"50%",objectFit:"cover"},alt:""}),e.jsx("span",{style:{fontSize:".78rem",color:"var(--text-muted)"},children:((f=r.talent)==null?void 0:f.name)??"Unknown"})]}),e.jsxs("div",{className:"cs-course-foot",children:[e.jsx("span",{className:`cs-course-price${r.is_free?" free":""}`,children:r.is_free?"Free":`$${Number(r.price).toFixed(2)}`}),e.jsx(d,{href:route("user.courses.show",r.slug),style:{fontSize:".78rem",color:"var(--accent)",textDecoration:"none",fontWeight:700},children:"View Details →"})]})]})]})},r.id)}):e.jsx("div",{className:"col-12",children:e.jsx("p",{style:{color:"var(--text-muted)"},children:"No related courses found."})})})]})]})}),e.jsx("div",{className:"modal fade cs-pay-modal",id:"enrollModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header border-0",children:[e.jsxs("h5",{className:"modal-title",children:["Enroll in ",a.title]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsx("div",{className:"modal-body",style:{color:"var(--text-secondary)",fontSize:".9rem",padding:"1.5rem"},children:e.jsx("p",{children:"You're about to enroll in this free course. Ready to start learning?"})}),e.jsxs("div",{className:"modal-footer border-0",style:{padding:"1rem 1.5rem"},children:[e.jsx("form",{onSubmit:B,children:e.jsxs("button",{type:"submit",className:"cs-btn-primary",style:{width:"auto",padding:".7rem 1.75rem",display:"inline-block"},children:[e.jsx("i",{className:"fa-solid fa-bolt me-1"})," Yes, Enroll Me"]})}),e.jsx("button",{type:"button",className:"cs-btn-outline",style:{width:"auto",padding:".65rem 1.25rem",display:"inline-block"},"data-bs-dismiss":"modal",children:"Cancel"})]})]})})}),e.jsx("div",{className:"modal fade cs-pay-modal",id:"paymentModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header border-0",children:[e.jsx("h5",{className:"modal-title",children:"Complete Payment"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsxs("div",{className:"modal-body",style:{padding:"1.5rem"},children:[e.jsxs("div",{style:{background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",padding:"1.25rem",marginBottom:"1rem"},children:[e.jsx("div",{style:{fontSize:".8rem",color:"var(--text-muted)",marginBottom:".25rem"},children:"Course"}),e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:a.title})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:".9rem"},children:"Total Due"}),e.jsxs("span",{style:{fontSize:"1.5rem",fontWeight:900,color:"var(--accent)"},children:["$",Number(a.price).toFixed(2)]})]})]}),e.jsxs("div",{className:"modal-footer border-0",style:{padding:"1rem 1.5rem",gap:"10px"},children:[e.jsx("button",{type:"button",className:"cs-btn-primary",style:{width:"auto",padding:".75rem 2rem",display:"inline-flex",alignItems:"center",gap:"8px"},onClick:M,disabled:y,children:y?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Processing…"}),e.jsx("span",{className:"spinner-border spinner-border-sm",role:"status"})]}):e.jsxs("span",{children:[e.jsx("i",{className:"fa fa-lock-open me-1"})," Pay & Enroll"]})}),e.jsx("button",{type:"button",className:"cs-btn-outline",style:{width:"auto",padding:".7rem 1.25rem",display:"inline-block"},"data-bs-dismiss":"modal",children:"Cancel"})]})]})})})]})}function K(a){return a?a.charAt(0).toUpperCase()+a.slice(1):""}J.layout=a=>e.jsx(O,{children:a,title:a.props.course.title});export{J as default};
