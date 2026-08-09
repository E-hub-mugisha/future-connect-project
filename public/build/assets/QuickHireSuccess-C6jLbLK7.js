import{j as e,H as a,L as n}from"./app-CZoN4D26.js";import{G as i}from"./GuestLayout-CYGwNZhv.js";function o({quickHire:s}){const t=String(s.id).padStart(6,"0"),r=s.status?s.status.charAt(0).toUpperCase()+s.status.slice(1):"—";return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Quick Hire - Request submitted successfully"}),e.jsx("style",{children:`
                .qhs-page {
                    background: #0e1618;
                    color: #e8f0ed;
                    font-family: 'DM Sans', sans-serif;
                    min-height: 60vh;
                    display: flex;
                    align-items: center;
                    padding: 60px 0;
                }

                .qhs-card {
                    max-width: 560px;
                    margin: 0 auto;
                    background: #141d20;
                    border: 1px solid rgba(0, 166, 103, .2);
                    border-radius: 16px;
                    padding: 44px 36px;
                    text-align: center;
                }

                .qhs-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(0, 166, 103, .14);
                    border: 1px solid rgba(0, 166, 103, .38);
                    color: #48d597;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 26px;
                    margin: 0 auto 20px;
                }

                .qhs-card h2 {
                    font-family: 'Syne', sans-serif;
                    color: #fff;
                    font-weight: 800;
                    font-size: 24px;
                    margin-bottom: 10px;
                }

                .qhs-card p {
                    color: #7a9a8e;
                    font-size: 14px;
                    line-height: 1.7;
                    margin-bottom: 24px;
                }

                .qhs-summary {
                    text-align: left;
                    background: #1a2428;
                    border: 1px solid rgba(0, 166, 103, .16);
                    border-radius: 10px;
                    padding: 16px 18px;
                    font-size: 12.5px;
                    color: #7a9a8e;
                    margin-bottom: 26px;
                }

                .qhs-summary div { margin-bottom: 6px; }
                .qhs-summary div:last-child { margin-bottom: 0; }
                .qhs-summary strong { color: #e8f0ed; }

                .qhs-btn {
                    display: inline-flex;
                    background: #48d597;
                    color: #06120d;
                    font-weight: 700;
                    font-size: 13.5px;
                    padding: 12px 26px;
                    border-radius: 9px;
                    text-decoration: none;
                    transition: background .2s;
                }

                .qhs-btn:hover { background: #00c07a; color: #06120d; }
            `}),e.jsx("div",{className:"qhs-page",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"qhs-card",children:[e.jsx("div",{className:"qhs-icon",children:e.jsx("i",{className:"feather-check"})}),e.jsx("h2",{children:"Request submitted!"}),e.jsxs("p",{children:["Thanks ",s.client_name," — we've received your project request."," ",s.talent?e.jsxs(e.Fragment,{children:["Our team will confirm your match with"," ",e.jsx("strong",{children:s.talent.name})," shortly."]}):e.jsxs(e.Fragment,{children:["Our team will manually match you with the right talent in the"," ",e.jsx("strong",{children:s.category.name})," category shortly."]})]}),e.jsxs("div",{className:"qhs-summary",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Project:"})," ",s.title]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Category:"})," ",s.category.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," ",r]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Reference:"})," #",t]})]}),e.jsx(n,{href:route("user.home"),className:"qhs-btn",children:"Back to Home"})]})})})]})}o.layout=s=>e.jsx(i,{children:s,title:"Quick Hire - Request submitted successfully"});export{o as default};
