import{r as S,u as z,j as e,H as D,L as F}from"./app-B7IJkTeC.js";import{G as _}from"./GuestLayout-Dmb6shQU.js";function T({product:r}){var m,b,g,h,x,v,p,f,u,y,j;const[o,l]=S.useState("description"),[d,c]=S.useState(0),t=z({rating:"",comment:""}),s=z({quantity:1});function C(a){a.preventDefault(),t.post(route("product.reviews.store",r.id),{preserveScroll:!0,onSuccess:()=>t.reset()})}function R(a){a.preventDefault(),s.post(route("cart.add",r.id),{preserveScroll:!0})}function q(){s.setData("quantity",Math.max(1,s.data.quantity-1))}function B(){const a=r.stock??1e3;s.setData("quantity",Math.min(a,Number(s.data.quantity)+1))}const n=r.reviews&&r.reviews.length?r.reviews.reduce((a,i)=>a+i.rating,0)/r.reviews.length:0,M=(Number(r.price)*Number(s.data.quantity||1)).toFixed(2);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:r.name}),e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --bg-deep:    #0e1618;
          --bg-card:    #121d1f;
          --bg-raised:  #172224;
          --accent:     #48d597;
          --accent-dim: rgba(0,166,103,.15);
          --accent-glow:rgba(0,166,103,.35);
          --border:     rgba(255,255,255,.07);
          --text:       #f0f4f3;
          --muted:      #7a9490;
          --white:      #ffffff;
        }

        * { box-sizing: border-box; }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }

        .pd-wrapper { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem; }
        .pd-grid { display: grid; grid-template-columns: 1fr 340px; gap: 2rem; align-items: start; }
        @media (max-width: 1024px) { .pd-grid { grid-template-columns: 1fr; } }

        .breadcrumb-row { display: flex; align-items: center; gap: .5rem; font-size: .8rem; color: var(--muted); margin-bottom: 2rem; }
        .breadcrumb-row a { color: var(--muted); text-decoration: none; transition: color .2s; }
        .breadcrumb-row a:hover { color: var(--accent); }
        .breadcrumb-row span { color: var(--accent); }

        .product-image-panel {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; overflow: hidden;
          position: relative;
        }
        .product-main-img {
          width: 100%; height: 420px; object-fit: cover;
          display: block;
        }
        .product-img-glow {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to top, var(--bg-card), transparent);
          pointer-events: none;
        }

        .tab-nav { display: flex; gap: 0; border-bottom: 1px solid var(--border); padding: 0 1.5rem; margin-top: 0; }
        .tab-btn {
          font-family: 'Syne', sans-serif; font-size: .85rem; font-weight: 700;
          color: var(--muted); padding: 1rem 1.25rem;
          border-bottom: 2px solid transparent; border-top: none; border-left: none; border-right: none;
          background: none; cursor: pointer; transition: all .2s; text-decoration: none; display: block;
        }
        .tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }
        .tab-btn:hover:not(.active) { color: var(--text); }

        .tab-pane { display: none; padding: 2rem 1.5rem; }
        .tab-pane.active { display: block; }

        .description-section h3 { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; color: var(--white); margin-bottom: 1rem; }
        .description-section p { color: var(--muted); line-height: 1.8; font-size: .95rem; }

        .review-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
        .review-header h3 { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); }
        .btn-write-review {
          display: inline-flex; align-items: center; gap: .4rem;
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
          color: var(--accent); font-size: .8rem; font-weight: 700;
          padding: .5rem 1.25rem; border-radius: 8px; cursor: pointer;
          text-decoration: none; transition: all .2s;
          font-family: 'Syne', sans-serif;
        }
        .btn-write-review:hover { background: var(--accent); color: var(--white); }

        .rating-summary {
          background: var(--bg-raised); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.5rem; text-align: center; margin-bottom: 1.5rem;
        }
        .rating-summary .big-score { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; color: var(--white); line-height: 1; }
        .rating-summary .out-of { font-size: .85rem; color: var(--muted); margin-bottom: .5rem; }
        .rating-summary .stars { color: #f59e0b; font-size: 1.1rem; margin: .5rem 0; }
        .rating-summary p { font-size: .8rem; color: var(--muted); }

        .review-item {
          border: 1px solid var(--border); border-radius: 14px;
          padding: 1.25rem; margin-bottom: 1rem;
          background: var(--bg-raised); transition: border-color .2s;
        }
        .review-item:hover { border-color: rgba(0,166,103,.25); }
        .review-user { display: flex; align-items: center; gap: .85rem; margin-bottom: .75rem; }
        .review-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border); }
        .review-user-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .9rem; color: var(--white); }
        .review-time { font-size: .75rem; color: var(--muted); }
        .review-stars { color: #f59e0b; font-size: .85rem; margin-bottom: .5rem; }
        .review-text { color: var(--muted); font-size: .9rem; line-height: 1.7; }

        .sidebar-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; overflow: hidden; position: sticky; top: 1.5rem;
        }
        .price-block {
          background: linear-gradient(135deg, #0a2e22, #0d3d2a);
          padding: 1.75rem; border-bottom: 1px solid rgba(0,166,103,.2);
        }
        .price-label { font-size: .78rem; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .1em; font-weight: 600; margin-bottom: .25rem; }
        .price-amount { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--white); }
        .price-currency { font-size: .9rem; color: rgba(255,255,255,.6); margin-left: .25rem; }
        .btn-buy-now {
          display: flex; align-items: center; justify-content: center; gap: .5rem;
          background: var(--accent); color: var(--white);
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .95rem;
          padding: .9rem; border-radius: 10px; text-decoration: none; border: none;
          cursor: pointer; width: 100%; margin-top: 1.25rem;
          box-shadow: 0 0 24px var(--accent-glow);
          transition: all .25s;
        }
        .btn-buy-now:hover { transform: translateY(-2px); box-shadow: 0 0 36px var(--accent-glow); color: var(--white); }

        .seller-block { padding: 1.5rem; }
        .seller-header { display: flex; align-items: center; gap: .85rem; margin-bottom: 1.25rem; }
        .seller-avatar { width: 50px; height: 50px; border-radius: 12px; object-fit: cover; border: 2px solid rgba(0,166,103,.3); }
        .seller-name { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); font-size: .95rem; }
        .seller-online { display: inline-flex; align-items: center; gap: .35rem; font-size: .75rem; color: var(--accent); }
        .seller-online::before { content:''; width: 7px; height: 7px; background: var(--accent); border-radius: 50%; }

        .meta-list { list-style: none; padding: 0; margin: 0 0 1.5rem; }
        .meta-list li { display: flex; align-items: flex-start; gap: .75rem; padding: .6rem 0; border-bottom: 1px solid var(--border); }
        .meta-list li:last-child { border-bottom: none; }
        .meta-list i { color: var(--accent); font-size: .95rem; margin-top: .1rem; flex-shrink: 0; }
        .meta-list .meta-key { font-size: .78rem; color: var(--muted); margin-bottom: .1rem; }
        .meta-list .meta-val { font-size: .88rem; color: var(--text); font-weight: 500; }

        .btn-contact {
          display: flex; align-items: center; justify-content: center; gap: .5rem;
          background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem;
          padding: .8rem; border-radius: 10px; text-decoration: none; width: 100%;
          transition: all .2s; cursor: pointer;
        }
        .btn-contact:hover { border-color: var(--accent); color: var(--accent); }

        .modal-content { background: var(--bg-card) !important; border: 1px solid var(--border) !important; border-radius: 18px !important; color: var(--text) !important; }
        .modal .form-control {
          background: var(--bg-raised) !important; border: 1px solid var(--border) !important;
          color: var(--text) !important; border-radius: 10px !important;
        }
        .modal .form-control:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 3px var(--accent-dim) !important; }
        .modal .form-label { color: var(--muted); font-size: .85rem; }

        .star-select-row { display: flex; gap: .5rem; font-size: 1.6rem; color: var(--muted); cursor: pointer; }
        .star-select-row i.selected { color: #f59e0b; }

        .btn-accent {
          background: var(--accent); color: var(--white); border: none;
          padding: .7rem 2rem; border-radius: 10px; font-weight: 700;
          font-family: 'Syne', sans-serif; cursor: pointer; transition: all .2s;
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .btn-accent:hover { transform: translateY(-1px); color: var(--white); }

        .cart-product-img { width: 100%; border-radius: 14px; object-fit: cover; max-height: 260px; }
        .qty-control { display: flex; align-items: center; gap: 0; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; width: fit-content; }
        .qty-btn {
          width: 36px; height: 40px; background: var(--bg-raised); border: none;
          color: var(--text); font-size: 1rem; cursor: pointer; transition: all .2s;
        }
        .qty-btn:hover { background: var(--accent-dim); color: var(--accent); }
        .qty-num { width: 56px; height: 40px; text-align: center; background: var(--bg-deep); border: none; border-left: 1px solid var(--border); border-right: 1px solid var(--border); color: var(--white); font-family: 'Syne', sans-serif; font-weight: 700; outline: none; }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg-deep:    #f6faf8;
          --bg-card:    #ffffff;
          --bg-raised:  #eef4f1;
          --accent:     #00a667;
          --accent-dim: rgba(0, 166, 103, 0.1);
          --accent-glow:rgba(0, 166, 103, 0.22);
          --border:     rgba(0, 100, 60, 0.12);
          --text:       #10201b;
          --muted:      #5b7a70;
          --white:      #10201b;
        }

        /* Price block + modal headers used a near-black green gradient tuned for
           dark bg — swap to a soft light-mode tint so it isn't a dark smear
           sitting on an otherwise white card */
        [data-h-theme="light"] .price-block {
          background: linear-gradient(135deg, #eaf7f0, #f6faf8);
          border-bottom: 1px solid rgba(0, 166, 103, 0.18);
        }

        /* Those same gradient headers appear as inline styles on the two modals —
           can't override inline styles with CSS alone, so this targets the
           elements structurally instead (first div inside modal-content) */
        [data-h-theme="light"] .modal-content > div:first-child {
          background: linear-gradient(135deg, #eaf7f0, #f6faf8) !important;
          border-bottom: 1px solid rgba(0, 166, 103, 0.18) !important;
        }
        [data-h-theme="light"] .modal-content > div:first-child h5 {
          color: var(--text) !important;
        }

        /* Bootstrap's white close icon needs to go back to the default dark
           icon on a light modal header */
        [data-h-theme="light"] .btn-close-white {
          filter: none;
        }

        /* Price label / currency text used translucent white, invisible on the
           light gradient above */
        [data-h-theme="light"] .price-label,
        [data-h-theme="light"] .price-currency {
          color: rgba(16, 32, 27, 0.55);
        }

          /* Unfilled star color hardcoded to a dark-slate hex in inline styles —
            handled via the starColor()/JS helper below instead of CSS, since
            those are inline style attributes per star */
      `}),e.jsxs("div",{className:"pd-wrapper",children:[e.jsxs("div",{className:"breadcrumb-row",children:[e.jsx("a",{href:"#",children:"Home"})," ",e.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:".65rem"}}),e.jsx("a",{href:"#",children:"Marketplace"})," ",e.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:".65rem"}}),e.jsx(F,{href:route("user.product.category",((m=r.category)==null?void 0:m.id)??"#"),children:((b=r.category)==null?void 0:b.name)??"Products"}),e.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:".65rem"}}),e.jsx("span",{children:r.name})]}),e.jsxs("div",{className:"pd-grid",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"product-image-panel",style:{marginBottom:"1.5rem"},children:[e.jsx("img",{src:"/assets/img/service/service-slide-01.jpg",alt:r.name,className:"product-main-img"}),e.jsx("div",{className:"product-img-glow"})]}),e.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"18px",overflow:"hidden"},children:[e.jsxs("div",{className:"tab-nav",children:[e.jsx("button",{className:`tab-btn${o==="description"?" active":""}`,onClick:()=>l("description"),children:"Description"}),e.jsxs("button",{className:`tab-btn${o==="reviews"?" active":""}`,onClick:()=>l("reviews"),children:["Reviews (",((g=r.reviews)==null?void 0:g.length)??0,")"]})]}),e.jsx("div",{className:`tab-pane${o==="description"?" active":""}`,children:e.jsxs("div",{className:"description-section",children:[e.jsx("h3",{children:"About this product"}),e.jsx("p",{children:r.description})]})}),e.jsxs("div",{className:`tab-pane${o==="reviews"?" active":""}`,children:[e.jsxs("div",{className:"review-header",children:[e.jsx("h3",{children:"Customer Reviews"}),e.jsxs("a",{href:"#",className:"btn-write-review","data-bs-toggle":"modal","data-bs-target":"#addReviewModal",children:[e.jsx("i",{className:"fa-solid fa-pen"})," Write a Review"]})]}),e.jsxs("div",{className:"rating-summary",children:[e.jsx("div",{className:"big-score",children:n.toFixed(1)}),e.jsx("div",{className:"out-of",children:"out of 5.0"}),e.jsx("div",{className:"stars",children:Array.from({length:5}).map((a,i)=>e.jsx("i",{className:"fa-solid fa-star",style:{color:i<Math.round(n)?"#f59e0b":"#2a3d3a"}},i))}),e.jsxs("p",{children:["Based on ",((h=r.reviews)==null?void 0:h.length)??0," reviews"]})]}),(x=r.reviews)==null?void 0:x.map(a=>{var i,w,N;return e.jsxs("div",{className:"review-item",children:[e.jsxs("div",{className:"review-user",children:[e.jsx("img",{src:((i=a.user)==null?void 0:i.profile_photo_url)??"/assets/img/default-avatar.png",alt:(w=a.user)==null?void 0:w.name,className:"review-avatar"}),e.jsxs("div",{children:[e.jsx("div",{className:"review-user-name",children:(N=a.user)==null?void 0:N.name}),e.jsx("div",{className:"review-time",children:a.created_ago})]}),e.jsx("div",{className:"review-stars ms-auto",children:Array.from({length:5}).map((A,k)=>e.jsx("i",{className:"fa-solid fa-star",style:{color:k<a.rating?"#f59e0b":"#2a3d3a"}},k))})]}),e.jsx("p",{className:"review-text",children:a.comment})]},a.id)})]})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"sidebar-card",children:[e.jsxs("div",{className:"price-block",children:[e.jsx("div",{className:"price-label",children:"Price"}),e.jsxs("div",{className:"price-amount",children:[Number(r.price).toLocaleString(),e.jsx("span",{className:"price-currency",children:"RWF"})]}),e.jsxs("button",{className:"btn-buy-now","data-bs-toggle":"modal","data-bs-target":`#addToCartModal${r.id}`,children:[e.jsx("i",{className:"feather-shopping-cart"})," Buy This Product"]})]}),e.jsxs("div",{className:"seller-block",children:[e.jsxs("div",{className:"seller-header",children:[e.jsx("img",{src:"/assets/img/user/user-05.jpg",alt:"Seller",className:"seller-avatar"}),e.jsxs("div",{children:[e.jsx("div",{className:"seller-name",children:(v=r.seller)==null?void 0:v.company_name}),e.jsx("div",{className:"seller-online",children:"Online"})]})]}),e.jsxs("ul",{className:"meta-list",children:[e.jsxs("li",{children:[e.jsx("i",{className:"ti ti-tag"}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-key",children:"Category"}),e.jsx("div",{className:"meta-val",children:((p=r.category)==null?void 0:p.name)??"Uncategorized"})]})]}),e.jsxs("li",{children:[e.jsx("i",{className:"ti ti-user"}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-key",children:"Seller"}),e.jsx("div",{className:"meta-val",children:(f=r.seller)==null?void 0:f.company_name})]})]}),e.jsxs("li",{children:[e.jsx("i",{className:"ti ti-calendar-check"}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-key",children:"Listed"}),e.jsx("div",{className:"meta-val",children:r.listed_ago??"—"})]})]}),e.jsxs("li",{children:[e.jsx("i",{className:"ti ti-stack"}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-key",children:"Stock / Queue"}),e.jsxs("div",{className:"meta-val",children:[r.stock," units"]})]})]}),e.jsxs("li",{children:[e.jsx("i",{className:"ti ti-star"}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-key",children:"Rating"}),e.jsxs("div",{className:"meta-val",children:[n.toFixed(1)," / 5 (",((u=r.reviews)==null?void 0:u.length)??0," reviews)"]})]})]})]}),e.jsxs("a",{href:"#",className:"btn-contact","data-bs-toggle":"modal","data-bs-target":"#contact_me",children:[e.jsx("i",{className:"feather-message-circle"})," Contact Seller"]})]})]})})]})]}),e.jsx("div",{className:"modal fade",id:"addReviewModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsx("div",{style:{background:"linear-gradient(135deg,#0a2e22,#0d3d29)",padding:"1.5rem 2rem",borderRadius:"18px 18px 0 0",borderBottom:"1px solid rgba(0,166,103,.2)"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("h5",{style:{fontFamily:"'Syne',sans-serif",fontWeight:800,color:"#fff",margin:0},children:"Leave a Review"}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal"})]})}),e.jsxs("form",{onSubmit:C,children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label",style:{color:"var(--muted)",fontSize:".85rem",display:"block",marginBottom:".75rem"},children:"Your Rating"}),e.jsx("div",{className:"star-select-row",children:[1,2,3,4,5].map(a=>e.jsx("i",{className:Number(t.data.rating)>=a||d>=a?"fa-solid fa-star":"fa-regular fa-star",style:{color:Number(t.data.rating)>=a||d>=a?"#f59e0b":"var(--muted)"},onMouseEnter:()=>c(a),onMouseLeave:()=>c(0),onClick:()=>t.setData("rating",a)},a))}),t.errors.rating&&e.jsx("small",{className:"text-danger d-block mt-1",children:t.errors.rating})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Your Review"}),e.jsx("textarea",{className:"form-control",rows:"4",placeholder:"Share your experience with this product...",value:t.data.comment,onChange:a=>t.setData("comment",a.target.value),required:!0}),t.errors.comment&&e.jsx("small",{className:"text-danger d-block mt-1",children:t.errors.comment})]})]}),e.jsx("div",{className:"modal-footer",style:{borderTop:"1px solid var(--border)",padding:"1.25rem 2rem"},children:e.jsx("button",{type:"submit",className:"btn-accent w-100",disabled:t.processing,children:"Submit Review"})})]})]})})}),e.jsx("div",{className:"modal fade",id:`addToCartModal${r.id}`,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{style:{background:"linear-gradient(135deg,#0a2e22,#0d3d29)",padding:"1.25rem 2rem",borderRadius:"18px 18px 0 0",borderBottom:"1px solid rgba(0,166,103,.2)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("h5",{style:{fontFamily:"'Syne',sans-serif",fontWeight:800,color:"#fff",margin:0,fontSize:"1rem"},children:"Add to Cart"}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal"})]}),e.jsx("form",{onSubmit:R,children:e.jsx("div",{className:"modal-body p-4",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-5",children:e.jsx("img",{src:`/storage/${r.image}`,alt:r.name,className:"cart-product-img"})}),e.jsxs("div",{className:"col-md-7",children:[e.jsx("h4",{style:{fontFamily:"'Syne',sans-serif",fontWeight:800,color:"var(--white)",marginBottom:".5rem"},children:r.name}),e.jsx("p",{style:{color:"var(--muted)",fontSize:".9rem",marginBottom:"1rem"},children:r.description}),e.jsxs("div",{style:{display:"flex",gap:".5rem",marginBottom:"1rem"},children:[e.jsx("span",{style:{background:"var(--accent-dim)",border:"1px solid rgba(0,166,103,.3)",color:"var(--accent)",fontSize:".75rem",fontWeight:700,padding:".2rem .65rem",borderRadius:"50px"},children:((y=r.category)==null?void 0:y.name)??"General"}),e.jsx("span",{style:{background:"var(--bg-raised)",border:"1px solid var(--border)",color:"var(--muted)",fontSize:".75rem",fontWeight:600,padding:".2rem .65rem",borderRadius:"50px"},children:((j=r.seller)==null?void 0:j.company_name)??"N/A"})]}),e.jsxs("p",{style:{fontSize:".85rem",color:"var(--muted)",marginBottom:"1.25rem"},children:["In Stock: ",e.jsx("strong",{style:{color:"var(--text)"},children:r.stock??"Unlimited"})]}),e.jsxs("div",{style:{marginBottom:"1.25rem"},children:[e.jsx("label",{style:{fontSize:".8rem",color:"var(--muted)",display:"block",marginBottom:".6rem"},children:"Quantity"}),e.jsxs("div",{className:"qty-control",children:[e.jsx("button",{type:"button",className:"qty-btn",onClick:q,children:"−"}),e.jsx("input",{type:"number",className:"qty-num",min:"1",max:r.stock??1e3,value:s.data.quantity,onChange:a=>s.setData("quantity",Math.max(1,Number(a.target.value)||1))}),e.jsx("button",{type:"button",className:"qty-btn",onClick:B,children:"+"})]})]}),e.jsxs("div",{style:{background:"var(--bg-raised)",border:"1px solid var(--border)",borderRadius:"12px",padding:"1rem",marginBottom:"1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{color:"var(--muted)",fontSize:".85rem"},children:"Total Amount"}),e.jsxs("span",{style:{fontFamily:"'Syne',sans-serif",fontSize:"1.3rem",fontWeight:800,color:"var(--white)"},children:["$",M]})]}),e.jsxs("div",{style:{display:"flex",gap:".75rem"},children:[e.jsx("button",{type:"button",className:"btn-contact","data-bs-dismiss":"modal",style:{flex:1},children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-accent",style:{flex:2,padding:".8rem"},disabled:s.processing,children:[e.jsx("i",{className:"feather-shopping-cart"})," Add to Cart"]})]})]})]})})})]})})})]})}T.layout=r=>e.jsx(_,{children:r,title:r.props.product.name});export{T as default};
