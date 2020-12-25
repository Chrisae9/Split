(this.webpackJsonpsplit=this.webpackJsonpsplit||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(14),s=n.n(o),i=(n(65),n(66),n(8)),u=n.n(i),l=n(16),d=n(9),j=n(17),b=n(34);n(68);function p(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"text-center",children:"Split"})})}var O=n(129);function f(e){var t=e.name,n=e.setName;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(O.a.Group,{controlId:"receiptName",children:Object(c.jsx)(O.a.Control,{value:t,type:"text",onChange:function(e){return n(e.target.value)},placeholder:"Receipt Name"})})})}var h=n(132),m=n(133),x=n(23),v=n.n(x);function g(e){var t=e.contributors,n=e.setContributors,a=e.dispatch,o=Object(r.useState)(""),s=Object(d.a)(o,2),i=s[0],u=s[1],l=Object(r.useRef)();var j={onClick:function(e,t,c){n((function(e){return e.filter((function(e){return e.name!==t.name}))})),a({type:L.REMOVE_CONTRIBUTOR,payload:{contributor:t}})}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a.Group,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)(h.a.Body,{children:Object(c.jsxs)(O.a,{onSubmit:function(e){e.preventDefault();var c=!1;t.map((function(e){e.name===i&&(c=!0)})),c?alert("Contributor already exists"):n((function(e){return[{name:i}].concat(Object(b.a)(e))})),u(""),l.current.focus()},children:[Object(c.jsx)(O.a.Group,{controlId:"receiptContributor",children:Object(c.jsx)(O.a.Control,{type:"text",placeholder:"Contributor",value:i,ref:l,onChange:function(e){return u(e.target.value)}})}),Object(c.jsx)(O.a.Group,{controlId:"receiptAddContributor",children:Object(c.jsx)(m.a,{type:"submit",variant:"dark",className:"form-control",children:"Add"})})]})})})}),Object(c.jsx)(v.a,{keyField:"_id",data:t,columns:[{dataField:"_id",hidden:!0},{dataField:"name",text:"Contributors List"}],rowEvents:j,hover:!0,condensed:!0})]})}var y=n(54),T=n.n(y);function E(e){var t=e.items,n=e.dispatch,a=[{dataField:"_id",hidden:!0},{dataField:"name",text:"Name"},{dataField:"cost",text:"Cost",formatter:function(e,t){return Object(c.jsxs)(c.Fragment,{children:["$",e]})}},{dataField:"selected",text:"Selected",hidden:!0},{dataField:"contributors",text:"Contributors ",formatter:function(e,t){return e.map((function(t,n){return n<e.length-1?t.name+", ":t.name}))}}];var o=Object(r.useState)(""),s=Object(d.a)(o,2),i=s[0],u=s[1],l=Object(r.useState)(""),j=Object(d.a)(l,2),b=j[0],p=j[1],f=Object(r.useState)(""),x=Object(d.a)(f,2),g=x[0],y=x[1],E=Object(r.useRef)(),S={onClick:function(e,t,c){n({type:L.DELETE_ITEM,payload:{id:t._id}})}};Object(r.useEffect)((function(){var e=0;t.forEach((function(t){e+=parseFloat(t.cost)||0})),y(e)}),[t]);var C={mode:"checkbox",onSelect:function(e,t,c,r){n({type:L.TOGGLE_ITEM,payload:{id:e._id}})},onSelectAll:function(e,t,c){n({type:L.TOGGLE_ITEMS,payload:{selected:e}})}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{keyField:"_id",data:t,columns:a,rowEvents:S,selectRow:C,striped:!0,hover:!0,condensed:!0}),Object(c.jsxs)("h4",{children:["Total = $",parseFloat(g).toFixed(2)]}),Object(c.jsx)(O.a.Group,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)(h.a.Body,{children:Object(c.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),n({type:L.ADD_ITEM,payload:{name:i,cost:b}}),u(""),E.current.focus(),p("")},children:[Object(c.jsx)(O.a.Group,{controlId:"itemName",children:Object(c.jsx)(O.a.Control,{type:"text",placeholder:"Item",value:i,ref:E,onChange:function(e){return u(e.target.value)}})}),Object(c.jsx)(O.a.Group,{controlId:"itemCost",children:Object(c.jsx)(T.a,{placeholder:"$0.00",allowDecimals:!0,decimalsLimit:2,prefix:"$",className:"form-control",value:b,onChange:function(e){return p(e)}})}),Object(c.jsx)(O.a.Group,{controlId:"formSubmit",children:Object(c.jsx)(m.a,{type:"submit",variant:"dark",className:"form-control",children:"Add Item"})})]})})})})]})}var S=n(130),C=n(57),I=n(128);function k(e){var t=e.contributors,n=e.items,a=Object(r.useState)(!1),o=Object(d.a)(a,2),s=o[0],i=o[1],u=function(){return i(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a.Group,{children:Object(c.jsx)(m.a,{variant:"secondary",onClick:function(){i(!0)},className:"form-control",children:"Split"})}),Object(c.jsxs)(I.a,{show:s,onHide:u,size:"lg",children:[Object(c.jsx)(I.a.Header,{closeButton:!0,children:Object(c.jsx)(I.a.Title,{children:"Split Bill "})}),Object(c.jsxs)(I.a.Body,{children:[t.map((function(e){var t=0;return Object(c.jsx)(O.a.Group,{children:Object(c.jsxs)(h.a,{children:[Object(c.jsxs)(h.a.Body,{children:[Object(c.jsx)(h.a.Title,{children:e.name}),Object(c.jsx)(h.a.Text,{children:Object(c.jsx)(S.a,{children:n.map((function(n){var r=!1;if(n.contributors.map((function(t){t.name===e.name&&(r=!0)})),r){var a=parseFloat(n.cost)/n.contributors.length;return t+=a,Object(c.jsxs)(C.a,{children:[n.name,": $",a.toFixed(2)]},n._id)}}))})})]}),Object(c.jsxs)(h.a.Footer,{children:["$",t.toFixed(2)]})]})})})),function(){var e=0;return Object(c.jsxs)(h.a,{children:[Object(c.jsxs)(h.a.Body,{children:[Object(c.jsx)(h.a.Title,{children:"Remaining"}),Object(c.jsx)(h.a.Text,{children:Object(c.jsx)(S.a,{children:n.map((function(t){if(0===t.contributors.length)return e+=parseFloat(t.cost),Object(c.jsxs)(C.a,{children:[t.name,": $",t.cost]},t._id)}))})})]}),Object(c.jsxs)(h.a.Footer,{children:["$",e.toFixed(2)]})]})}()]}),Object(c.jsx)(I.a.Footer,{children:Object(c.jsx)(m.a,{variant:"secondary",onClick:u,children:"Done"})})]})]})}var w=n(131),_=n(53);function F(e){var t=e.contributors,n=e.dispatch;function a(e){p(e),u(!0)}var o=Object(r.useState)(!1),s=Object(d.a)(o,2),i=s[0],u=s[1],l=Object(r.useState)(L.ADD_CONTRIBUTOR),j=Object(d.a)(l,2),b=j[0],p=j[1],f=function(){return u(!1)},h={onClick:function(e,t,c){n({type:b,payload:{contributor:t}}),f()}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(I.a,{show:i,onHide:f,children:[Object(c.jsx)(I.a.Header,{closeButton:!0,children:Object(c.jsx)(I.a.Title,{children:"Select Contributor "})}),Object(c.jsx)(I.a.Body,{children:Object(c.jsx)(v.a,{keyField:"_id",data:t,columns:[{dataField:"_id",hidden:!0},{dataField:"name",text:"Name",headerAttrs:{hidden:!0}}],rowEvents:h,hover:!0,condensed:!0})}),Object(c.jsx)(I.a.Footer,{children:Object(c.jsx)(m.a,{variant:"secondary",onClick:f,children:"Close"})})]}),Object(c.jsx)(O.a,{children:Object(c.jsx)(O.a.Group,{children:Object(c.jsxs)(O.a.Row,{children:[Object(c.jsx)(_.a,{children:Object(c.jsx)(m.a,{onClick:function(){return a(L.ADD_CONTRIBUTOR)},variant:"secondary",className:"form-control",children:"Assign"})}),Object(c.jsx)(_.a,{children:Object(c.jsx)(m.a,{onClick:function(){return a(L.DELETE_CONTRIBUTOR)},variant:"danger",className:"form-control",children:"Remove"})})]})})})]})}var N=n(33);var R=function(e){var t=e.onSuccess,n=Object(N.useGoogleLogin)({onSuccess:t,onFailure:function(e){console.log("Login failed: res:",e)},clientId:"55175628075-ku05stpmvkh3ocvjs5nn3qljns90dmes.apps.googleusercontent.com",isSignedIn:!0,accessType:"offline"}).signIn;return Object(c.jsxs)(m.a,{onClick:n,variant:"outline-dark",size:"sm",className:"form-control",children:[Object(c.jsx)("img",{src:"/split/google.svg",alt:"google login",className:"icon"}),"Sign in with Google"]})};var D=function(e){var t=e.setSignedIn,n=Object(N.useGoogleLogout)({clientId:"55175628075-ku05stpmvkh3ocvjs5nn3qljns90dmes.apps.googleusercontent.com",onLogoutSuccess:function(e){window.location.reload(!1),console.log("Successfully logged out"),t(!1)},onFailure:function(){console.log("Handle failure cases")}}).signOut;return Object(c.jsxs)(m.a,{onClick:n,variant:"outline-dark",size:"sm",className:"form-control",children:[Object(c.jsx)("img",{src:"/split/google.svg",alt:"google login",className:"icon"}),"Sign out"]})},G=n(56);function A(e){var t=e.receipts,n=e.signedIn,a=e.onSave,o=e.onDelete,s=e.onSelect,i=Object(r.useState)([]),u=Object(d.a)(i,2),l=u[0],j=u[1];return Object(r.useEffect)((function(){n?(console.log(t),function(e){j(e.map((function(e){return{value:e._id,label:e.name}})))}(t)):j()}),[t]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a,{children:Object(c.jsx)(O.a.Group,{children:Object(c.jsx)(G.a,{options:l,onChange:function(e){return s(e)},placeholder:"Select a Receipt"})})}),Object(c.jsx)(O.a.Group,{children:Object(c.jsxs)(O.a.Row,{children:[Object(c.jsx)(_.a,{children:Object(c.jsx)(m.a,{type:"submit",variant:"secondary",className:"form-control",onClick:a,children:"Save"})}),Object(c.jsx)(_.a,{children:Object(c.jsx)(m.a,{type:"submit",variant:"danger",className:"form-control",onClick:o,children:"Delete"})})]})})]})}var L={ADD_ITEM:"add-item",DELETE_ITEM:"delete-item",TOGGLE_ITEM:"toggle-item",TOGGLE_ITEMS:"toggle-items",ADD_CONTRIBUTOR:"add-contributor",DELETE_CONTRIBUTOR:"delete-contributor",REMOVE_CONTRIBUTOR:"remove-contributor",SET_ITEMS:"set-items"};function B(e,t){switch(t.type){case L.ADD_ITEM:return[].concat(Object(b.a)(e),[(n=t.payload.name,c=t.payload.cost,{_id:Object(w.a)(),name:n,cost:c,selected:!1,contributors:[]})]);case L.TOGGLE_ITEM:return e.map((function(e){return e._id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},{selected:!e.selected}):e}));case L.TOGGLE_ITEMS:return e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{selected:t.payload.selected})}));case L.DELETE_ITEM:return e.filter((function(e){return e._id!==t.payload.id}));case L.ADD_CONTRIBUTOR:return e.map((function(e){var n=!1;return e.contributors.map((function(e){e.name===t.payload.contributor.name&&(n=!0)})),e.selected&&!n?Object(j.a)(Object(j.a)({},e),{},{contributors:e.contributors.concat(t.payload.contributor)}):e}));case L.REMOVE_CONTRIBUTOR:return e.map((function(e){var n=!1;return e.contributors.map((function(e){e.name===t.payload.contributor.name&&(n=!0)})),n?Object(j.a)(Object(j.a)({},e),{},{contributors:e.contributors.filter((function(e){return e.name!==t.payload.contributor.name}))}):e}));case L.DELETE_CONTRIBUTOR:return e.map((function(e){var n=!1;return e.contributors.map((function(e){e.name===t.payload.contributor.name&&(n=!0)})),e.selected&&n?Object(j.a)(Object(j.a)({},e),{},{contributors:e.contributors.filter((function(e){return e.name!==t.payload.contributor.name}))}):e}));case L.SET_ITEMS:return t.payload.items;default:return e}var n,c}var M=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),s=Object(d.a)(o,2),i=s[0],j=s[1],b=Object(r.useState)(""),m=Object(d.a)(b,2),x=m[0],v=m[1],y=Object(r.useReducer)(B,[]),T=Object(d.a)(y,2),S=T[0],C=T[1],I=Object(r.useState)([]),_=Object(d.a)(I,2),N=_[0],G=_[1],M=Object(r.useState)([]),U=Object(d.a)(M,2),$=U[0],P=U[1],H=Object(r.useState)(!1),J=Object(d.a)(H,2),z=J[0],V=J[1];function q(){return(q=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(l.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://split.chis.dev","/receipts/").concat(t),{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,P(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,n();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return alert("Please Login"),e.abrupt("return");case 3:if(t=null,c={owner:n,_id:i,name:x,items:S,contributors:N},""===i){e.next=11;break}return t=function(){var e=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://split.chis.dev","/receipts/").concat(n,"/").concat(i),{mode:"cors",method:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(c)});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=9,t();case 9:e.next=16;break;case 11:return c._id=Object(w.a)(),j(c._id),t=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://split.chis.dev","/receipts/"),{mode:"cors",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(c)});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=16,t();case 16:window.location.reload();case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return alert("Please Login"),e.abrupt("return");case 3:if(""!==i){e.next=7;break}console.log("No receipt exists, reloading page"),e.next=10;break;case 7:return t=function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://split.chis.dev","/receipts/").concat(n,"/").concat(i),{mode:"cors",method:"DELETE",headers:{"Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=10,t();case 10:window.location.reload();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return alert("Please Login"),e.abrupt("return");case 3:return j(t.value),c=function(){var e=Object(l.a)(u.a.mark((function e(){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://split.chis.dev","/receipts/").concat(n,"/").concat(t.value),{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,console.log(r),v(r.name),C({type:L.SET_ITEMS,payload:{items:r.items}}),G(r.contributors);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=7,c();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)("div",{className:"App-header",children:[Object(c.jsx)(p,{}),Object(c.jsx)(h.a,{className:"col-11 mx-auto",children:Object(c.jsxs)(h.a.Body,{children:[Object(c.jsxs)(O.a.Group,{children:[!z&&Object(c.jsx)(R,{onSuccess:function(e){a((function(){return e.googleId})),function(e){q.apply(this,arguments)}(e.googleId),V((function(){return!0})),console.log("Successfully logged in, your google id is ".concat(e.googleId)),function(e){var t=1e3*(e.tokenObj.expires_in||3300),n=function(){var c=Object(l.a)(u.a.mark((function c(){var r;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.reloadAuthResponse();case 2:r=c.sent,t=1e3*(r.expires_in||3300),console.log("newAuthRes:",r),localStorage.setItem("authToken",r.id_token),setTimeout(n,t);case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();setTimeout(n,t)}(e)}}),z&&Object(c.jsx)(D,{setSignedIn:function(e){return V(e)}})]}),Object(c.jsx)(A,{receipts:$,signedIn:z,onSave:function(){return K.apply(this,arguments)},onDelete:function(){return Q.apply(this,arguments)},onSelect:function(e){return W.apply(this,arguments)}}),Object(c.jsx)(f,{name:x,setName:function(e){return v(e)}}),Object(c.jsx)(g,{contributors:N,setContributors:function(e){return G(e)},dispatch:C}),Object(c.jsx)(F,{contributors:N,dispatch:C}),Object(c.jsx)(E,{items:S,dispatch:C}),Object(c.jsx)(k,{contributors:N,items:S})]})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),U()},66:function(e,t,n){},68:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.e559275f.chunk.js.map