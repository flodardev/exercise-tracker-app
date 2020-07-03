(this["webpackJsonpexercise-tracker"]=this["webpackJsonpexercise-tracker"]||[]).push([[0],{160:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(31),c=t.n(l),o=t(19),i=t(6);t(82);var s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Exercise Tracker"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navBar","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navBar"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(o.b,{className:"nav-item nav-link",to:"/"},"Exercises"),r.a.createElement(o.b,{className:"nav-item nav-link",to:"/create"},"Create Exercise Log"),r.a.createElement(o.b,{className:"nav-item nav-link",to:"/user"},"Create User"))))},u=t(20);var m=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/edit/"+e.exercise._id},"Edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)}},"Delete")))},d=t(14),E=t.n(d);var v=function(){var e=Object(n.useState)({exercises:[]}),a=Object(u.a)(e,2),t=a[0],l=a[1];function c(e){E.a.delete(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URL+"exercises/"+e).then((function(e){return console.log(e.data)})),l({exercises:t.exercises.filter((function(a){return a._id!==e}))})}return Object(n.useEffect)((function(){E.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URL+"exercises/").then((function(e){l({exercises:e.data})})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,t.exercises.map((function(e){return r.a.createElement(m,{key:e._id,exercise:e,deleteExercise:c})})))))},p=t(25),b=t(11),f=t(34),O=t.n(f);t(64);var g=function(e){var a=Object(n.useState)({username:"",description:"",duration:0,date:new Date,users:[]}),t=Object(u.a)(a,2),l=t[0],c=t[1];function o(e){var a=e.target,t=a.name,n=a.value;c(Object(b.a)(Object(b.a)({},l),{},Object(p.a)({},t,n)))}return Object(n.useEffect)((function(){E.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URL+"exercises/"+e.match.params.id).then((function(e){c({username:e.data.username,description:e.data.description,duration:e.data.duration,date:new Date(e.data.date)})})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"Edit exercise log"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t={username:l.username,description:l.description,duration:l.duration,date:l.date};E.a.put(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URL+"exercises/"+e.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{required:!0,className:"form-control",name:"username",value:l.username,onChange:o},r.a.createElement("option",null,l.username))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",className:"form-control",name:"description",value:l.description,onChange:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in Minutes): "),r.a.createElement("input",{type:"text",className:"form-control",name:"duration",value:l.duration,onChange:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(O.a,{selected:l.date,onChange:function(e){c(Object(b.a)(Object(b.a)({},l),{},{date:e}))}}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",ClassName:"btn btn-primary"}))))};var _=function(){var e=Object(n.useState)({username:"",description:"",duration:0,date:new Date,users:[]}),a=Object(u.a)(e,2),t=a[0],l=a[1];function c(e){var a=e.target,n=a.name,r=a.value;l(Object(b.a)(Object(b.a)({},t),{},Object(p.a)({},n,r)))}return Object(n.useEffect)((function(){E.a.get("http://localhost:5000/users/").then((function(e){e.data.length>0&&l(Object(b.a)(Object(b.a)({},t),{},{users:e.data.map((function(e){return e.username}))}))}))}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"Create new exercise log"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={username:t.username,description:t.description,duration:t.duration,date:t.date};E.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URL+"exercises/add",a).then((function(e){return console.log(e.data)})),console.log(a),window.location="/"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{required:!0,className:"form-control",name:"username",onChange:c},t.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",className:"form-control",name:"description",value:t.description,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in Minutes): "),r.a.createElement("input",{type:"text",className:"form-control",name:"duration",value:t.duration,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(O.a,{selected:t.date,onChange:function(e){l(Object(b.a)(Object(b.a)({},t),{},{date:e}))}}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise Log",ClassName:"btn btn-primary"}))))};var S=function(){var e=Object(n.useState)({username:""}),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={username:t.username};console.log(a),E.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URL+"users/add",a).then((function(e){return console.log(e.data)})),l({username:""})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",className:"form-control",value:t.username,onChange:function(e){l({username:e.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))};var N=function(){return r.a.createElement(o.a,null,r.a.createElement(s,null),r.a.createElement("br",null),r.a.createElement("div",{className:"container border"},r.a.createElement(i.a,{path:"/",exact:!0,component:v}),r.a.createElement(i.a,{path:"/edit/:id",component:g}),r.a.createElement(i.a,{path:"/create",component:_}),r.a.createElement(i.a,{path:"/user",component:S})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},77:function(e,a,t){e.exports=t(160)}},[[77,1,2]]]);
//# sourceMappingURL=main.daadd4f4.chunk.js.map