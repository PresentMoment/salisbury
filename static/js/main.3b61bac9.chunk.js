(this.webpackJsonpsalisbury=this.webpackJsonpsalisbury||[]).push([[0],{23:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(0),r=n.n(i),s=n(15),a=n.n(s),o=n(9),u=n(16),j=n(1),b=Object(i.createContext)({isAuthenticated:!1,setAuthenticated:function(){}});function h(){var t=Object(i.useContext)(b).setAuthenticated;var e=function(e,n){var c=Object(i.useState)((function(){var t=window.sessionStorage.getItem(n);return null!==t?JSON.parse(t):e})),r=Object(o.a)(c,2),s=r[0],a=r[1];return"alaska"===s&&t(!0),Object(i.useEffect)((function(){window.sessionStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,a]}(""),n=Object(o.a)(e,2),r=(n[0],n[1]);return Object(c.jsx)("div",{style:{height:"100%",width:"100%",display:"flex"},children:Object(c.jsx)("form",{style:{margin:"auto"},children:Object(c.jsx)("input",{type:"text",name:"name",onChange:function(t){return r(t.target.value)}})})})}function d(t){var e=t.component;return Object(i.useContext)(b).isAuthenticated?Object(c.jsx)(e,{}):Object(c.jsx)(h,{})}n(23);for(var l=[],f=0;f<35;f++)l.push("https://presentmoment.github.io/salisbury/images/".concat(f,".png"));!function(t){for(var e,n,c=t.length;0!==c;)n=Math.floor(Math.random()*c),e=t[c-=1],t[c]=t[n],t[n]=e}(l);var O=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("section",{id:"photos",children:l.map((function(t){return Object(c.jsx)("img",{src:t,alt:t},t)}))})})};function p(){var t=Object(i.useState)(!1),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(c.jsx)(u.a,{children:Object(c.jsx)(j.b,{children:Object(c.jsx)(b.Provider,{value:{isAuthenticated:n,setAuthenticated:r},children:Object(c.jsx)(d,{path:"/",component:O})})})})}n(29);var g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),g()}},[[30,1,2]]]);
//# sourceMappingURL=main.3b61bac9.chunk.js.map