import{a as T,r as E,u as W,j as e,H,L as n,d as V}from"./app-DAdnLqM_.js";import{G as Y}from"./GuestLayout-DypAKmPK.js";function G({course:r,relatedCourses:g=[],flutterwavePublicKey:B}){var u,f,y,j,N,w,k,z,S,$,_,R,F,C,L;const{auth:l,flash:c}=T().props,[d,m]=E.useState("description"),[h,p]=E.useState(!1),t=W({rating:"",comment:""});function D(a){a.preventDefault(),t.post(route("courses.review",r.id),{preserveScroll:!0,onSuccess:()=>t.reset()})}function I(a){a.preventDefault(),V.post(route("user.courses.enroll",r.id))}function x(a){if(!a)return"";const s=a.split("&")[0],o=s.lastIndexOf("v=");return o===-1?s:s.slice(o+2)}function A(){var s,o;p(!0);const a=`course-${r.id}-${Date.now()}`;window.FlutterwaveCheckout({public_key:B,tx_ref:a,amount:r.price,currency:"RWF",payment_options:"card, mobilemoneyrwanda",customer:{email:((s=l==null?void 0:l.user)==null?void 0:s.email)??"guest@example.com",name:((o=l==null?void 0:l.user)==null?void 0:o.name)??"Guest"},callback:function(i){i.status==="successful"||i.status==="completed"?window.location.href=`/course/payment/callback?tx_ref=${i.tx_ref}&course_id=${r.id}&status=${i.status}`:(alert("Payment not successful. Please try again."),p(!1))},onclose:function(){p(!1)},customizations:{title:r.title,description:"Pay to enroll in this course",logo:"/logo.png"}})}const M=r.feedback&&r.feedback.length?r.feedback.reduce((a,s)=>a+s.rating,0)/r.feedback.length:0,v=r.is_free&&((u=r.lessons)!=null&&u.length)&&r.lessons[0].video?r.lessons[0].video:null;return e.jsxs(e.Fragment,{children:[e.jsx(H,{title:r.title}),e.jsx("script",{src:"https://checkout.flutterwave.com/v3.js"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

        .cs-lessons-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .cs-lessons-badge {
          background: var(--accent-dim); color: var(--accent);
          font-size: .75rem; font-weight: 700; padding: 4px 12px;
          border-radius: 50px; border: 1px solid var(--accent-muted);
          letter-spacing: .3px;
        }
        .cs-lesson-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
        .cs-lesson-item {
          display: flex; align-items: center; justify-content: space-between;
          background: var(--bg-card-alt); border: 1px solid var(--border);
          border-radius: var(--radius-md); padding: 14px 18px;
          transition: border-color .2s, background .2s;
        }
        .cs-lesson-item:hover { border-color: var(--accent-muted); background: var(--bg-elevated); }
        .cs-lesson-left { display: flex; align-items: center; gap: 14px; }
        .cs-lesson-num {
          width: 34px; height: 34px; border-radius: 50%;
          background: var(--accent-dim); border: 1px solid var(--accent-muted);
          color: var(--accent); font-size: .8rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .cs-lesson-title { font-size: .9rem; font-weight: 600; color: var(--text-primary); }
        .cs-lesson-meta { font-size: .75rem; color: var(--text-muted); margin-top: 2px; }
        .cs-lesson-right { display: flex; align-items: center; gap: 8px; }
        .cs-type-badge {
          font-size: .7rem; font-weight: 700; padding: 3px 10px; border-radius: 50px;
          letter-spacing: .3px;
        }
        .cs-type-badge.video { background: var(--accent-dim); color: var(--accent); border: 1px solid var(--accent-muted); }
        .cs-type-badge.text  { background: #1a2d3a; color: #5ab8d4; border: 1px solid #2a4a5a; }
        .cs-preview-btn {
          background: none; border: 1px solid var(--border); color: var(--text-secondary);
          border-radius: var(--radius-sm); padding: 5px 14px; font-size: .78rem; font-weight: 600;
          cursor: pointer; transition: border-color .2s, color .2s;
        }
        .cs-preview-btn:hover { border-color: var(--accent); color: var(--accent); }

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
          position: sticky; top: 1.5rem;
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

        .cs-modal .modal-content {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); color: var(--text-primary);
        }
        .cs-modal .modal-header {
          background: var(--bg-elevated); border-bottom: 1px solid var(--border);
          padding: 1.25rem 1.5rem; border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }
        .cs-modal .modal-title { color: var(--text-primary); font-weight: 700; }
        .cs-modal .modal-body { padding: 1.5rem; background: var(--bg-card); }
        .cs-modal .modal-footer {
          background: var(--bg-card-alt); border-top: 1px solid var(--border);
          padding: 1rem 1.5rem;
        }
        .cs-modal .btn-close { filter: invert(1) opacity(.6); }
        .cs-lesson-desc {
          background: var(--bg-elevated); border-left: 3px solid var(--accent);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          padding: 1rem 1.25rem; font-size: .88rem; color: var(--text-secondary); line-height: 1.7;
          margin-top: 1rem;
        }

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
        [data-h-theme="light"] .cs-modal .btn-close,
        [data-h-theme="light"] .cs-pay-modal .btn-close {
          filter: none;
        }

        /* Lesson type "text" badge colors were a dark-navy chip — lighten so it
           doesn't look like a dark hole on a white card */
        [data-h-theme="light"] .cs-type-badge.text {
          background: #eaf5fa;
          color: #1c7fa0;
          border-color: #c7e6f0;
        }
      `}),e.jsx("div",{className:"page-content content cs-page",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"cs-card p-4",children:[e.jsx("div",{className:"cs-video-wrap mb-4",children:v?e.jsx("div",{className:"ratio ratio-16x9",children:e.jsx("iframe",{src:`https://www.youtube.com/embed/${x(v)}?autoplay=1&mute=1&playsinline=1`,title:r.lessons[0].title,allow:"autoplay; encrypted-media",allowFullScreen:!0})}):r.video?e.jsx("div",{className:"ratio ratio-16x9",children:e.jsx("iframe",{src:`https://www.youtube.com/embed/${x(r.video)}`,title:r.title,allow:"autoplay; encrypted-media",allowFullScreen:!0})}):e.jsx("img",{src:`/images/thumbnails/${r.thumbnail}`,className:"img-fluid w-100",style:{borderRadius:"var(--radius-md)"},alt:r.title})}),e.jsxs("div",{className:"cs-tabs",children:[e.jsx("button",{className:`cs-tab-link${d==="description"?" active":""}`,onClick:()=>m("description"),children:"Description"}),e.jsx("button",{className:`cs-tab-link${d==="lesson"?" active":""}`,onClick:()=>m("lesson"),children:"Course Lessons"}),e.jsxs("button",{className:`cs-tab-link${d==="review"?" active":""}`,onClick:()=>m("review"),children:["Reviews",e.jsx("span",{style:{background:"var(--accent-dim)",color:"var(--accent)",fontSize:".7rem",padding:"1px 7px",borderRadius:"50px",marginLeft:"5px"},children:((f=r.feedback)==null?void 0:f.length)??0})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:`tab-pane${d==="description"?" active show":""}`,children:[e.jsx("p",{className:"cs-section-title",children:"About this course"}),e.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.8,fontSize:".93rem"},children:r.description})]}),e.jsxs("div",{className:`tab-pane${d==="lesson"?" active show":""}`,children:[e.jsxs("div",{className:"cs-lessons-header",children:[e.jsx("p",{className:"cs-section-title mb-0",children:"Course Lessons"}),((y=r.lessons)==null?void 0:y.length)>0&&e.jsxs("span",{className:"cs-lessons-badge",children:[r.lessons.length," Lessons"]})]}),((j=r.lessons)==null?void 0:j.length)>0?e.jsx("ul",{className:"cs-lesson-list",children:r.lessons.map((a,s)=>e.jsxs("li",{className:"cs-lesson-item",children:[e.jsxs("div",{className:"cs-lesson-left",children:[e.jsx("div",{className:"cs-lesson-num",children:s+1}),e.jsxs("div",{children:[e.jsx("div",{className:"cs-lesson-title",children:a.title??"Untitled Lesson"}),a.duration&&e.jsxs("div",{className:"cs-lesson-meta",children:[e.jsx("i",{className:"fa-regular fa-clock me-1"}),a.duration]})]})]}),e.jsxs("div",{className:"cs-lesson-right",children:[a.video_url?e.jsxs("span",{className:"cs-type-badge video",children:[e.jsx("i",{className:"fa-solid fa-play me-1"}),"Video"]}):e.jsxs("span",{className:"cs-type-badge text",children:[e.jsx("i",{className:"fa-solid fa-file-lines me-1"}),"Text"]}),e.jsxs("button",{className:"cs-preview-btn","data-bs-toggle":"modal","data-bs-target":`#lessonModal${a.id}`,children:[e.jsx("i",{className:"fa-solid fa-eye me-1"})," Preview"]})]})]},a.id))}):e.jsxs("div",{className:"cs-empty",children:[e.jsx("i",{className:"fa-solid fa-book-open"}),e.jsx("h5",{style:{color:"var(--text-secondary)",marginBottom:".5rem"},children:"No Lessons Yet"}),e.jsx("p",{style:{fontSize:".88rem"},children:"Lessons haven't been added yet. Check back soon!"})]})]}),e.jsxs("div",{className:`tab-pane${d==="review"?" active show":""}`,children:[e.jsxs("p",{className:"cs-section-title",children:["Reviews (",((N=r.feedback)==null?void 0:N.length)??0,")"]}),((w=r.feedback)==null?void 0:w.length)>0?r.feedback.map(a=>{var s,o,i;return e.jsx("div",{className:"cs-review-item",children:e.jsxs("div",{className:"d-flex align-items-start gap-3",children:[e.jsx("img",{src:(s=a.user)!=null&&s.profile_photo?`/uploads/${a.user.profile_photo}`:"/assets/img/user/profile.jpg",alt:(o=a.user)==null?void 0:o.name,className:"cs-reviewer-avatar"}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[e.jsx("span",{style:{fontWeight:700,color:"var(--text-primary)",fontSize:".92rem"},children:(i=a.user)==null?void 0:i.name}),e.jsx("span",{style:{fontSize:".75rem",color:"var(--text-muted)"},children:a.created_ago})]}),e.jsxs("div",{className:"cs-stars my-1",children:[Array.from({length:5}).map((b,P)=>e.jsx("i",{className:`fa-solid fa-star${P<a.rating?" filled":""}`},P)),e.jsxs("span",{style:{fontSize:".75rem",color:"var(--text-muted)",marginLeft:"4px"},children:[a.rating,".0"]})]}),e.jsx("p",{style:{fontSize:".88rem",color:"var(--text-secondary)",lineHeight:1.6,margin:0},children:a.comment})]})]})},a.id)}):e.jsxs("div",{className:"cs-empty",children:[e.jsx("i",{className:"fa-solid fa-comment-slash"}),e.jsx("p",{children:"No reviews yet. Be the first to leave one!"})]}),e.jsxs("div",{className:"cs-review-form-card mt-4",children:[e.jsx("p",{className:"cs-section-title",children:"Leave a Review"}),l!=null&&l.user?e.jsxs(e.Fragment,{children:[(c==null?void 0:c.success)&&e.jsx("div",{className:"cs-alert-success",children:c.success}),e.jsxs("form",{onSubmit:D,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",style:{color:"var(--text-secondary)",fontSize:".85rem",fontWeight:600},children:"Rating"}),e.jsxs("select",{className:"form-select cs-form-select",value:t.data.rating,onChange:a=>t.setData("rating",a.target.value),required:!0,children:[e.jsx("option",{value:"",children:"-- Select Rating --"}),[1,2,3,4,5].map(a=>e.jsxs("option",{value:a,children:[a," Star",a>1?"s":""]},a))]}),t.errors.rating&&e.jsx("small",{className:"text-danger",children:t.errors.rating})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",style:{color:"var(--text-secondary)",fontSize:".85rem",fontWeight:600},children:"Comment"}),e.jsx("textarea",{rows:"4",className:"form-control cs-form-control",placeholder:"Share your experience with this course...",value:t.data.comment,onChange:a=>t.setData("comment",a.target.value)}),t.errors.comment&&e.jsx("small",{className:"text-danger",children:t.errors.comment})]}),e.jsx("button",{type:"submit",className:"cs-btn-primary",style:{width:"auto",padding:".7rem 2rem",display:"inline-block"},disabled:t.processing,children:"Submit Review"})]})]}):e.jsxs("p",{className:"cs-login-prompt",children:[e.jsx(n,{href:route("login"),children:"Log in"})," to leave a review."]})]})]})]})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"cs-sidebar-card",children:[e.jsxs("div",{className:"cs-sidebar-top",children:[e.jsx("h2",{className:"cs-course-title",children:r.title}),e.jsxs("div",{style:{marginBottom:".75rem"},children:[e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-star",style:{color:"#f5a623",fontSize:".75rem"}}),M.toFixed(1)]}),e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-comment-dots"}),((k=r.feedback)==null?void 0:k.length)??0," reviews"]}),e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-tag"}),(z=r.category)==null?void 0:z.name]}),e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-heart",style:{color:"#e74c3c"}}),r.likes_count??0," likes"]}),e.jsxs("span",{className:"cs-meta-pill",children:[e.jsx("i",{className:"fa-solid fa-calendar"}),r.created_ago??""]})]}),e.jsx("div",{className:"cs-price-row",children:r.is_free?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"cs-price",style:{color:"#5ab8d4"},children:"Free"}),e.jsx("span",{className:"cs-price-label",children:"No payment required"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"cs-price",children:["$",Number(r.price).toFixed(2)]}),e.jsx("span",{className:"cs-price-label",children:"one-time payment"})]})})]}),e.jsxs("div",{className:"cs-author-strip",children:[e.jsx("img",{src:(S=r.talent)!=null&&S.image?`/image/talents/${r.talent.image}`:"/assets/img/user/profile.jpg",alt:"Author",className:"cs-author-avatar"}),e.jsxs("div",{children:[e.jsxs("div",{className:"cs-author-name",children:[($=r.talent)==null?void 0:$.name,e.jsxs("span",{style:{background:"var(--accent-dim)",color:"var(--accent)",fontSize:".68rem",padding:"2px 8px",borderRadius:"50px",marginLeft:"6px",fontWeight:700},children:[e.jsx("span",{className:"cs-status-dot"}),U((_=r.talent)==null?void 0:_.status)]})]}),e.jsxs("div",{className:"cs-author-meta",children:[e.jsx("i",{className:"fa-solid fa-star",style:{color:"#f5a623",fontSize:".7rem"}}),(R=r.talent)==null?void 0:R.rating,"  ·  ",(F=r.talent)==null?void 0:F.rating_count," ratings"]})]})]}),e.jsxs("div",{className:"cs-sidebar-actions",children:[r.is_free?e.jsxs("a",{href:"#enrollModal",className:"cs-btn-primary","data-bs-toggle":"modal",children:[e.jsx("i",{className:"fa-solid fa-bolt me-1"})," Enroll for Free"]}):e.jsxs("a",{href:"#paymentModal",className:"cs-btn-primary","data-bs-toggle":"modal",children:[e.jsx("i",{className:"fa-solid fa-lock-open me-1"}),"Enroll · $",Number(r.price).toFixed(2)]}),e.jsx(n,{href:route("user.talent.details",(C=r.talent)==null?void 0:C.id),className:"cs-btn-outline",children:"View Author Profile"})]}),e.jsxs("div",{className:"cs-share-row",children:[e.jsx("span",{children:"Share"}),["facebook","twitter","instagram","linkedin","whatsapp"].map(a=>e.jsx("a",{href:"javascript:void(0);",className:"cs-share-icon",children:e.jsx("i",{className:`fa-brands fa-${a}`})},a))]})]})})]}),e.jsxs("div",{className:"cs-related-section",children:[e.jsx("h3",{className:"cs-related-title",children:"Related Courses"}),e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4",children:g.length>0?g.map(a=>{var s,o,i,b;return e.jsx("div",{className:"col",children:e.jsxs("div",{className:"cs-course-card h-100",children:[e.jsx(n,{href:route("user.courses.show",a.slug),children:e.jsx("img",{src:`/image/thumbnails/${a.thumbnail}`,className:"cs-course-thumb",alt:a.title})}),e.jsxs("div",{className:"cs-course-body",children:[e.jsx(n,{href:route("user.courses",{category:(s=a.category)==null?void 0:s.slug}),className:"cs-cat-tag",children:(o=a.category)==null?void 0:o.name}),e.jsx(n,{href:route("user.courses.show",a.slug),className:"d-block cs-course-name",children:a.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:".5rem"},children:[e.jsx("img",{src:(i=a.talent)!=null&&i.image?`/image/talents/${a.talent.image}`:"/assets/img/user/profile.jpg",style:{width:"24px",height:"24px",borderRadius:"50%",objectFit:"cover"},alt:""}),e.jsx("span",{style:{fontSize:".78rem",color:"var(--text-muted)"},children:((b=a.talent)==null?void 0:b.name)??"Unknown"})]}),e.jsxs("div",{className:"cs-course-foot",children:[e.jsx("span",{className:`cs-course-price${a.is_free?" free":""}`,children:a.is_free?"Free":`$${Number(a.price).toFixed(2)}`}),e.jsx(n,{href:route("user.courses.show",a.slug),style:{fontSize:".78rem",color:"var(--accent)",textDecoration:"none",fontWeight:700},children:"View Details →"})]})]})]})},a.id)}):e.jsx("div",{className:"col-12",children:e.jsx("p",{style:{color:"var(--text-muted)"},children:"No related courses found."})})})]})]})}),e.jsx("div",{className:"modal fade cs-pay-modal",id:"enrollModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header border-0",children:[e.jsxs("h5",{className:"modal-title",children:["Enroll in ",r.title]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsx("div",{className:"modal-body",style:{color:"var(--text-secondary)",fontSize:".9rem",padding:"1.5rem"},children:e.jsx("p",{children:"You're about to enroll in this free course. Ready to start learning?"})}),e.jsxs("div",{className:"modal-footer border-0",style:{padding:"1rem 1.5rem"},children:[e.jsx("form",{onSubmit:I,children:e.jsxs("button",{type:"submit",className:"cs-btn-primary",style:{width:"auto",padding:".7rem 1.75rem",display:"inline-block"},children:[e.jsx("i",{className:"fa-solid fa-bolt me-1"})," Yes, Enroll Me"]})}),e.jsx("button",{type:"button",className:"cs-btn-outline",style:{width:"auto",padding:".65rem 1.25rem",display:"inline-block"},"data-bs-dismiss":"modal",children:"Cancel"})]})]})})}),e.jsx("div",{className:"modal fade cs-pay-modal",id:"paymentModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header border-0",children:[e.jsx("h5",{className:"modal-title",children:"Complete Payment"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsxs("div",{className:"modal-body",style:{padding:"1.5rem"},children:[e.jsxs("div",{style:{background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",padding:"1.25rem",marginBottom:"1rem"},children:[e.jsx("div",{style:{fontSize:".8rem",color:"var(--text-muted)",marginBottom:".25rem"},children:"Course"}),e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:r.title})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:".9rem"},children:"Total Due"}),e.jsxs("span",{style:{fontSize:"1.5rem",fontWeight:900,color:"var(--accent)"},children:["$",Number(r.price).toFixed(2)]})]})]}),e.jsxs("div",{className:"modal-footer border-0",style:{padding:"1rem 1.5rem",gap:"10px"},children:[e.jsx("button",{type:"button",className:"cs-btn-primary",style:{width:"auto",padding:".75rem 2rem",display:"inline-flex",alignItems:"center",gap:"8px"},onClick:A,disabled:h,children:h?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Processing…"}),e.jsx("span",{className:"spinner-border spinner-border-sm",role:"status"})]}):e.jsxs("span",{children:[e.jsx("i",{className:"fa fa-lock-open me-1"})," Pay & Enroll"]})}),e.jsx("button",{type:"button",className:"cs-btn-outline",style:{width:"auto",padding:".7rem 1.25rem",display:"inline-block"},"data-bs-dismiss":"modal",children:"Cancel"})]})]})})}),(L=r.lessons)==null?void 0:L.map((a,s)=>e.jsx("div",{className:"modal fade cs-modal",id:`lessonModal${a.id}`,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-lg modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:".72rem",color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"3px"},children:["Lesson ",s+1]}),e.jsx("h5",{className:"modal-title",children:a.title??"Untitled Lesson"})]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsxs("div",{className:"modal-body",children:[a.video_url?e.jsx("div",{className:"ratio ratio-16x9 mb-3",style:{borderRadius:"var(--radius-md)",overflow:"hidden"},children:e.jsx("iframe",{src:`https://www.youtube.com/embed/${x(a.video_url)}?autoplay=0&playsinline=1`,title:a.title??"Lesson Video",allowFullScreen:!0})}):e.jsxs("div",{style:{background:"var(--bg-elevated)",border:"1px dashed var(--border)",borderRadius:"var(--radius-md)",padding:"2.5rem",textAlign:"center",marginBottom:"1rem"},children:[e.jsx("i",{className:"fa-solid fa-video-slash",style:{fontSize:"2rem",color:"var(--text-muted)",marginBottom:".75rem",display:"block"}}),e.jsx("span",{style:{color:"var(--text-muted)",fontSize:".88rem"},children:"No video available for this lesson."})]}),a.description&&e.jsx("div",{className:"cs-lesson-desc",children:a.description})]}),e.jsxs("div",{className:"modal-footer",style:{justifyContent:"space-between"},children:[a.duration&&e.jsxs("span",{style:{fontSize:".8rem",color:"var(--text-muted)"},children:[e.jsx("i",{className:"fa-regular fa-clock me-1"}),a.duration]}),e.jsxs("button",{type:"button",className:"cs-preview-btn","data-bs-dismiss":"modal",children:[e.jsx("i",{className:"fa-solid fa-xmark me-1"})," Close"]})]})]})})},a.id))]})}function U(r){return r?r.charAt(0).toUpperCase()+r.slice(1):""}G.layout=r=>e.jsx(Y,{children:r,title:r.props.course.title});export{G as default};
