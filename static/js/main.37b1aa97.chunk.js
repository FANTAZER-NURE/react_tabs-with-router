(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(1)),b=c(6),j=c.n(b),r=c(2),l=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},d=function(e){var t,c=e.tabs,a=Object(i.h)().tabId,s=null===(t=c.find((function(e){return e.id===a})))||void 0===t?void 0:t.content;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:c.map((function(e){return Object(r.jsx)("li",{"data-cy":"tab",className:j()({"is-active":a===e.id}),children:Object(r.jsx)(n.b,{to:"../".concat(e.id),children:e.title})})}))})}),Object(r.jsx)("div",{className:"block","data-cy":"tab-content",children:s||"Please select a tab"})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(r.jsx)("div",{className:"navbar-menu",children:Object(r.jsxs)("div",{className:"navbar-start",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})}),Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(l,{})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"tabs/",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(d,{tabs:o})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(d,{tabs:o})})]})]})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.37b1aa97.chunk.js.map