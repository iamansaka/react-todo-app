(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),s=n.n(o),i=(n(13),n(5)),r=n(7),d=n(4),j=n.n(d),l=n.p+"static/media/check.51638b35.svg",u=n.p+"static/media/check-done.58154f6f.svg",h=n(0);function b(e){return Object(h.jsxs)("div",{className:j.a.task,children:[Object(h.jsxs)("div",{className:j.a.task__content,onClick:e.doneTodo,children:[Object(h.jsx)("img",{src:e.done?u:l,onClick:e.doneTodo}),Object(h.jsx)("p",{className:e.done?j.a.done:"",children:e.name})]}),Object(h.jsx)("div",{onClick:e.deleteTodo,children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]})}n(15);var v=function(){var e=Object(a.useState)([{done:!0,text:"Nourrir le chat"},{done:!0,text:"Faire du ReactJs"},{done:!1,text:"Aller faire du jogging"}]),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(r.a)(o,2),d=s[0],j=s[1],l=n.map((function(e,t){return Object(h.jsx)(b,{done:e.done,name:e.text,deleteTodo:function(){return function(e){var t=Object(i.a)(n);t.splice(e,1),c(t)}(t)},doneTodo:function(){return function(e){var t=Object(i.a)(n);t[e].done=!t[e].done,c(t)}(t)}},t)})).reverse();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("h1",{children:"Todos list"})}),Object(h.jsxs)("form",{className:"form__add",onSubmit:function(e){return function(e){e.preventDefault();var t={done:!1,text:d};c([].concat(Object(i.a)(n),[t])),j("")}(e)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Ajouter une t\xe2che",value:d,onChange:function(e){return function(e){j(e.target.value)}(e)}}),Object(h.jsx)("button",{type:"submit",children:"Ajouter"})]}),Object(h.jsx)("div",{className:"task__list",children:l})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()},4:function(e,t,n){e.exports={task:"Task_task__1IAtP",task__content:"Task_task__content__4KWTK",done:"Task_done__2BtyO"}}},[[16,1,2]]]);
//# sourceMappingURL=main.2d678722.chunk.js.map