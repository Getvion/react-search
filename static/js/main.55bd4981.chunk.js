(this.webpackJsonpautocompliter=this.webpackJsonpautocompliter||[]).push([[0],{41:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),s=n(16),r=n.n(s),a=(n(7),n(3)),o=n(17),u=n.n(o),l=n(0);var j=function(t){var e,n=t.countries,i=Object(c.useState)(!1),s=Object(a.a)(i,2),r=s[0],o=s[1],u=Object(c.useState)(""),j=Object(a.a)(u,2),p=j[0],b=j[1],h=Object(c.useState)(0),m=Object(a.a)(h,2),d=m[0],O=m[1],f=n.filter((function(t){return t.name.common.toLowerCase().includes(p.toLowerCase())}));return e=f.length?Object(l.jsx)("div",{className:r?"list":"list invisible",children:f.map((function(t,e){return Object(l.jsx)("p",{className:"list__item ".concat(e===d?"active":""),children:t.name.common},e)}))}):Object(l.jsx)("div",{className:r?"list":"list invisible",children:Object(l.jsx)("p",{className:"list__item",children:"Fuck u! (nothing to sugest)"})}),Object(l.jsxs)("div",{className:"app",onClick:function(t){t.target.classList.contains("app")&&o(!1)},children:[Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Search the country",value:p,onChange:function(t){b(t.target.value)},onKeyDown:function(t){o(!0),"Enter"===t.key&&f.length&&(b(e.props.children[d].props.children),O(0),o(!1)),"ArrowUp"===t.key&&f.length&&O((function(t){return t-1})),"ArrowDown"===t.key&&f.length&&O((function(t){return t+1}))},onClick:function(){return o(!0)}}),e]})};var p=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){u.a.get("https://restcountries.com/v3.1/all").then((function(t){return i(t.data)}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j,{countries:n})})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))},7:function(t,e,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.55bd4981.chunk.js.map