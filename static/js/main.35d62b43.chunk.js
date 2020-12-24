(this.webpackJsonpsplit=this.webpackJsonpsplit||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n.n(r),a=n(13),s=n.n(a),i=(n(65),n(66),n(15)),l=n.n(i),u=n(22),d=n(8),j=n(16),b=n(34);n(68);function O(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"text-center",children:"Split"})})}var h=n(129);function p(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)(h.a.Group,{controlId:"receiptName",children:Object(c.jsx)(h.a.Control,{value:e.value,type:"text",onChange:function(t){return e.onChange(t.target.value)},placeholder:"Receipt Name"})})})})}var f=n(133),x=n(132),m=n(23),g=n.n(m),v=n(131);function y(e){var t=e.contributors,n=e.setContributors,o=e.dispatch,a=Object(r.useState)(""),s=Object(d.a)(a,2),i=s[0],l=s[1],u=Object(r.useRef)();var j={onClick:function(e,t,c){n((function(e){return e.filter((function(e){return e.id!==t.id}))})),o({type:L.REMOVE_CONTRIBUTOR,payload:{contributor:t}})}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a.Group,{children:Object(c.jsx)(f.a,{children:Object(c.jsx)(f.a.Body,{children:Object(c.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),n((function(e){return[{id:Object(v.a)(),name:i}].concat(Object(b.a)(e))})),l(""),u.current.focus()},children:[Object(c.jsx)(h.a.Group,{controlId:"receiptContributor",children:Object(c.jsx)(h.a.Control,{type:"text",placeholder:"Contributor",value:i,ref:u,onChange:function(e){return l(e.target.value)}})}),Object(c.jsx)(h.a.Group,{controlId:"receiptAddContributor",children:Object(c.jsx)(x.a,{type:"submit",variant:"dark",className:"form-control",children:"Add"})})]})})})}),Object(c.jsx)(g.a,{keyField:"id",data:t,columns:[{dataField:"id",hidden:!0},{dataField:"name",text:"Contributors List"}],rowEvents:j,hover:!0,condensed:!0})]})}var T=n(54),E=n.n(T);function S(e){var t=e.items,n=e.dispatch,o=[{dataField:"id",hidden:!0},{dataField:"name",text:"Name"},{dataField:"cost",text:"Cost",formatter:function(e,t){return Object(c.jsxs)(c.Fragment,{children:["$",e]})}},{dataField:"selected",text:"Selected",hidden:!0},{dataField:"contributors",text:"Contributors ",formatter:function(e,t){return e.map((function(t,n){return n<e.length-1?t.name+", ":t.name}))}}];var a=Object(r.useState)(""),s=Object(d.a)(a,2),i=s[0],l=s[1],u=Object(r.useState)(""),j=Object(d.a)(u,2),b=j[0],O=j[1],p=Object(r.useState)(""),m=Object(d.a)(p,2),v=m[0],y=m[1],T=Object(r.useRef)(),S={onClick:function(e,t,c){n({type:L.DELETE_ITEM,payload:{id:t.id}})}};Object(r.useEffect)((function(){var e=0;t.forEach((function(t){e+=parseFloat(t.cost)||0})),y(e)}),[t]);var C={mode:"checkbox",onSelect:function(e,t,c,r){n({type:L.TOGGLE_ITEM,payload:{id:e.id}})},onSelectAll:function(e,t,c){n({type:L.TOGGLE_ITEMS,payload:{selected:e}})}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{keyField:"id",data:t,columns:o,rowEvents:S,selectRow:C,striped:!0,hover:!0,condensed:!0}),Object(c.jsxs)("h4",{children:["Total = $",parseFloat(v).toFixed(2)]}),Object(c.jsx)(h.a.Group,{children:Object(c.jsx)(f.a,{children:Object(c.jsx)(f.a.Body,{children:Object(c.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),n({type:L.ADD_ITEM,payload:{name:i,cost:b}}),l(""),T.current.focus(),O("")},children:[Object(c.jsx)(h.a.Group,{controlId:"itemName",children:Object(c.jsx)(h.a.Control,{type:"text",placeholder:"Item",value:i,ref:T,onChange:function(e){return l(e.target.value)}})}),Object(c.jsx)(h.a.Group,{controlId:"itemCost",children:Object(c.jsx)(E.a,{placeholder:"$0.00",allowDecimals:!0,decimalsLimit:2,prefix:"$",className:"form-control",value:b,onChange:function(e){return O(e)}})}),Object(c.jsx)(h.a.Group,{controlId:"formSubmit",children:Object(c.jsx)(x.a,{type:"submit",variant:"dark",className:"form-control",children:"Add Item"})})]})})})})]})}var C=n(130),I=n(57),k=n(128);function F(e){var t=e.contributors,n=e.items,o=Object(r.useState)(!1),a=Object(d.a)(o,2),s=a[0],i=a[1],l=function(){return i(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a.Group,{children:Object(c.jsx)(x.a,{variant:"secondary",onClick:function(){i(!0)},className:"form-control",children:"Split"})}),Object(c.jsxs)(k.a,{show:s,onHide:l,size:"lg",children:[Object(c.jsx)(k.a.Header,{closeButton:!0,children:Object(c.jsx)(k.a.Title,{children:"Split Bill "})}),Object(c.jsxs)(k.a.Body,{children:[t.map((function(e){var t=0;return Object(c.jsx)(h.a.Group,{children:Object(c.jsxs)(f.a,{children:[Object(c.jsxs)(f.a.Body,{children:[Object(c.jsx)(f.a.Title,{children:e.name}),Object(c.jsx)(f.a.Text,{children:Object(c.jsx)(C.a,{children:n.map((function(n){if(n.contributors.includes(e)){var r=parseFloat(n.cost)/n.contributors.length;return t+=r,Object(c.jsxs)(I.a,{children:[n.name,": $",r.toFixed(2)]},n.id)}}))})})]}),Object(c.jsxs)(f.a.Footer,{children:["$",t.toFixed(2)]})]})})})),function(){var e=0;return Object(c.jsxs)(f.a,{children:[Object(c.jsxs)(f.a.Body,{children:[Object(c.jsx)(f.a.Title,{children:"Remaining"}),Object(c.jsx)(f.a.Text,{children:Object(c.jsx)(C.a,{children:n.map((function(t){if(0===t.contributors.length)return e+=parseFloat(t.cost),Object(c.jsxs)(I.a,{children:[t.name,": $",t.cost]},t.id)}))})})]}),Object(c.jsxs)(f.a.Footer,{children:["$",e.toFixed(2)]})]})}()]}),Object(c.jsx)(k.a.Footer,{children:Object(c.jsx)(x.a,{variant:"secondary",onClick:l,children:"Done"})})]})]})}var w=n(53);function R(e){var t=e.contributors,n=e.dispatch;function o(e){O(e),l(!0)}var a=Object(r.useState)(!1),s=Object(d.a)(a,2),i=s[0],l=s[1],u=Object(r.useState)(L.ADD_CONTRIBUTOR),j=Object(d.a)(u,2),b=j[0],O=j[1],p=function(){return l(!1)},f={onClick:function(e,t,c){n({type:b,payload:{contributor:t}}),p()}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(k.a,{show:i,onHide:p,children:[Object(c.jsx)(k.a.Header,{closeButton:!0,children:Object(c.jsx)(k.a.Title,{children:"Select Contributor "})}),Object(c.jsx)(k.a.Body,{children:Object(c.jsx)(g.a,{keyField:"id",data:t,columns:[{dataField:"id",hidden:!0},{dataField:"name",text:"Name",headerAttrs:{hidden:!0}}],rowEvents:f,hover:!0,condensed:!0})}),Object(c.jsx)(k.a.Footer,{children:Object(c.jsx)(x.a,{variant:"secondary",onClick:p,children:"Close"})})]}),Object(c.jsx)(h.a,{children:Object(c.jsx)(h.a.Group,{children:Object(c.jsxs)(h.a.Row,{children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(x.a,{onClick:function(){return o(L.ADD_CONTRIBUTOR)},variant:"secondary",className:"form-control",children:"Assign"})}),Object(c.jsx)(w.a,{children:Object(c.jsx)(x.a,{onClick:function(){return o(L.DELETE_CONTRIBUTOR)},variant:"danger",className:"form-control",children:"Remove"})})]})})})]})}var N=n(33);var _=function(e){var t=e.onSuccess,n=Object(N.useGoogleLogin)({onSuccess:t,onFailure:function(e){console.log("Login failed: res:",e)},clientId:"55175628075-ku05stpmvkh3ocvjs5nn3qljns90dmes.apps.googleusercontent.com",isSignedIn:!0,accessType:"offline"}).signIn;return Object(c.jsxs)(x.a,{onClick:n,variant:"outline-dark",size:"sm",className:"form-control",children:[Object(c.jsx)("img",{src:"/split/google.svg",alt:"google login",className:"icon"}),"Sign in with Google"]})};var D=function(e){var t=e.setSignedIn,n=Object(N.useGoogleLogout)({clientId:"55175628075-ku05stpmvkh3ocvjs5nn3qljns90dmes.apps.googleusercontent.com",onLogoutSuccess:function(e){window.location.reload(!1),console.log("Successfully logged out"),t(!1)},onFailure:function(){console.log("Handle failure cases")}}).signOut;return Object(c.jsxs)(x.a,{onClick:n,variant:"outline-dark",size:"sm",className:"form-control",children:[Object(c.jsx)("img",{src:"/split/google.svg",alt:"google login",className:"icon"}),"Sign out"]})},G=n(56);function A(e){var t=e.receipts,n=e.signedIn,o=e.onSave,a=e.onDelete,s=e.onSelect,i=Object(r.useState)([]),l=Object(d.a)(i,2),u=l[0],j=l[1];return Object(r.useEffect)((function(){console.log(t),n?function(e){j(e.map((function(e){return console.log(e.name),{value:e._id,label:e.name}})))}(t):j()}),[t]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(h.a.Group,{children:Object(c.jsx)(G.a,{options:u,onChange:function(e){return s(e)},placeholder:"Select a Receipt"})})}),Object(c.jsx)(h.a.Group,{children:Object(c.jsxs)(h.a.Row,{children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(x.a,{type:"submit",variant:"secondary",className:"form-control",onClick:o,children:"Save"})}),Object(c.jsx)(w.a,{children:Object(c.jsx)(x.a,{type:"submit",variant:"danger",className:"form-control",onClick:a,children:"Delete"})})]})})]})}var L={ADD_ITEM:"add-item",DELETE_ITEM:"delete-item",TOGGLE_ITEM:"toggle-item",TOGGLE_ITEMS:"toggle-items",ADD_CONTRIBUTOR:"add-contributor",DELETE_CONTRIBUTOR:"delete-contributor",REMOVE_CONTRIBUTOR:"remove-contributor",SET_ITEMS:"set-items"};function B(e,t){switch(t.type){case L.ADD_ITEM:return[].concat(Object(b.a)(e),[(n=t.payload.name,c=t.payload.cost,{id:Object(v.a)(),name:n,cost:c,selected:!1,contributors:[]})]);case L.TOGGLE_ITEM:return e.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},{selected:!e.selected}):e}));case L.TOGGLE_ITEMS:return e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{selected:t.payload.selected})}));case L.DELETE_ITEM:return e.filter((function(e){return e.id!==t.payload.id}));case L.ADD_CONTRIBUTOR:return e.map((function(e){return e.selected&&!e.contributors.includes(t.payload.contributor)?Object(j.a)(Object(j.a)({},e),{},{contributors:e.contributors.concat(t.payload.contributor)}):e}));case L.REMOVE_CONTRIBUTOR:return e.map((function(e){return e.contributors.includes(t.payload.contributor)?Object(j.a)(Object(j.a)({},e),{},{contributors:e.contributors.filter((function(e){return e!==t.payload.contributor}))}):e}));case L.DELETE_CONTRIBUTOR:return e.map((function(e){return e.selected&&e.contributors.includes(t.payload.contributor)?Object(j.a)(Object(j.a)({},e),{},{contributors:e.contributors.filter((function(e){return e!==t.payload.contributor}))}):e}));case L.SET_ITEMS:return t.payload.items;default:return e}var n,c}var M=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(""),s=Object(d.a)(a,2),i=s[0],j=s[1],b=Object(r.useState)(""),x=Object(d.a)(b,2),m=x[0],g=x[1],T=Object(r.useReducer)(B,[]),E=Object(d.a)(T,2),C=E[0],I=E[1],k=Object(r.useState)([]),w=Object(d.a)(k,2),N=w[0],G=w[1],M=Object(r.useState)([]),U=Object(d.a)(M,2),$=U[0],P=U[1],H=Object(r.useState)(!1),J=Object(d.a)(H,2),z=J[0],V=J[1];function q(){return(q=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://split.chis.dev","/receipts/").concat(t),{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return P(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return alert("Please Login"),e.abrupt("return");case 3:if(t={owner:n,_id:i,name:m,items:C,contributors:N},""===i){e.next=9;break}return e.next=7,fetch("".concat("https://split.chis.dev","/receipts/").concat(n,"/").concat(i),{mode:"cors",method:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}));case 7:e.next=13;break;case 9:return t._id=Object(v.a)(),j(t._id),e.next=13,fetch("".concat("https://split.chis.dev","/receipts/"),{mode:"cors",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}));case 13:window.location.reload(!1);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return alert("Please Login"),e.abrupt("return");case 3:if(""!==i){e.next=7;break}console.log("No receipt exists, reloading page"),e.next=9;break;case 7:return e.next=9,fetch("".concat("https://split.chis.dev","/receipts/").concat(n,"/").concat(i),{mode:"cors",method:"DELETE",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 9:window.location.reload(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return alert("Please Login"),e.abrupt("return");case 3:return j(t.value),e.next=6,fetch("".concat("https://split.chis.dev","/receipts/").concat(n,"/").concat(t.value),{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){g(e.name),I({type:L.SET_ITEMS,payload:{items:e.items}}),G(e.contributors)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)("div",{className:"App-header",children:[Object(c.jsx)(O,{}),Object(c.jsx)(f.a,{className:"col-11 mx-auto",children:Object(c.jsxs)(f.a.Body,{children:[Object(c.jsxs)(h.a.Group,{children:[!z&&Object(c.jsx)(_,{onSuccess:function(e){o((function(){return e.googleId})),function(e){q.apply(this,arguments)}(e.googleId),V((function(){return!0})),console.log("Successfully logged in, your google id is ".concat(e.googleId)),function(e){var t=1e3*(e.tokenObj.expires_in||3300),n=function(){var c=Object(u.a)(l.a.mark((function c(){var r;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.reloadAuthResponse();case 2:r=c.sent,t=1e3*(r.expires_in||3300),console.log("newAuthRes:",r),localStorage.setItem("authToken",r.id_token),setTimeout(n,t);case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();setTimeout(n,t)}(e)}}),z&&Object(c.jsx)(D,{setSignedIn:function(e){return V(e)}})]}),Object(c.jsx)(A,{receipts:$,signedIn:z,onSave:function(){return K.apply(this,arguments)},onDelete:function(){return Q.apply(this,arguments)},onSelect:function(e){return W.apply(this,arguments)}}),Object(c.jsx)(p,{value:m,onChange:function(e){return g(e)}}),Object(c.jsx)(y,{contributors:N,setContributors:function(e){return G(e)},dispatch:I}),Object(c.jsx)(R,{contributors:N,dispatch:I}),Object(c.jsx)(S,{items:C,dispatch:I}),Object(c.jsx)(F,{contributors:N,items:C})]})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),U()},66:function(e,t,n){},68:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.35d62b43.chunk.js.map