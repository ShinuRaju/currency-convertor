(this["webpackJsonpcurrency-convertor-app"]=this["webpackJsonpcurrency-convertor-app"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),u=n(18),s=n.n(u),o=(n(25),n(5)),i=n.n(o),j=n(19),b=n(8),p=n(3),l=(n(27),n(28),function(e){var t=e.currencyoptions,n=e.selectCurrency,a=e.onChangeCurrency,r=e.amount,u=e.onchangeAmount;return Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsx)("input",{type:"number",name:"",id:"",value:r,onChange:u}),Object(c.jsx)("select",{name:"currency",id:"",onChange:a,value:n,children:t.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))})]})}),O=n(9),f=n.n(O);var h=function(){var e,t,n="https://api.exchangeratesapi.io/latest",r=Object(a.useState)([]),u=Object(p.a)(r,2),s=u[0],o=u[1],O=Object(a.useState)(),h=Object(p.a)(O,2),d=h[0],v=h[1],m=Object(a.useState)(),y=Object(p.a)(m,2),x=y[0],g=y[1],C=Object(a.useState)(),w=Object(p.a)(C,2),S=w[0],k=w[1],A=Object(a.useState)(1),E=Object(p.a)(A,2),N=E[0],J=E[1],q=Object(a.useState)(!0),B=Object(p.a)(q,2),I=B[0],M=B[1];return I?(t=N,e=N*S):(e=N,t=N/S),Object(a.useEffect)((function(){(function(){var e=Object(b.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(n);case 2:t=e.sent,c=Object.keys(t.data.rates)[1],o([t.data.base].concat(Object(j.a)(Object.keys(t.data.rates)))),v(t.data.base),g(c),k(t.data.rates[c]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){null!=d&&null!=x&&function(){var e=Object(b.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("".concat(n,"?base=").concat(d,"&symbols=").concat(x));case 2:t=e.sent,k(t.data.rates[x]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[d,x]),Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsx)("h1",{children:"Currency Convertor"}),Object(c.jsx)(l,{onchangeAmount:function(e){J(e.target.value),M(!0)},currencyoptions:s,amount:t,selectCurrency:d,onChangeCurrency:function(e){v(e.target.value)}}),Object(c.jsx)("div",{className:"equals",children:"="}),Object(c.jsx)(l,{onchangeAmount:function(e){J(e.target.value),M(!1)},currencyoptions:s,selectCurrency:x,amount:e,onChangeCurrency:function(e){g(e.target.value)}})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0a27810b.chunk.js.map