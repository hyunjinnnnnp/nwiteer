(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(35),s=n.n(c),i=n(9),u=n(23),o=n(7),l=n(10),j=n.n(l),d=n(18),b=n(15),p=n(24),f=n(25);n(46),n(48),n(57),n(56);f.a.initializeApp({apiKey:"AIzaSyAZ6i2WU6K-m6pOg75Ry_vrcTxVGH1Y1Bk",authDomain:"nwitter-5f3a3.firebaseapp.com",projectId:"nwitter-5f3a3",storageBucket:"nwitter-5f3a3.appspot.com",messagingSenderId:"689192606240",appId:"1:689192606240:web:93e93dc19928b871da7a45",measurementId:"G-QD90Q3G3LL"});var O=f.a,h=f.a.auth(),m=f.a.firestore(),x=f.a.storage(),v=n(2),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],o=s[1],l=Object(a.useState)(!0),b=Object(i.a)(l,2),p=b[0],f=b[1],O=Object(a.useState)(""),m=Object(i.a)(O,2),x=m[0],g=m[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&o(a)},w=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=7;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:e.next=9;break;case 7:return e.next=9,h.signInWithEmailAndPassword(n,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:w,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(v.jsx)("input",{type:"submit",value:p?"Create Account":"Log In",className:"authInput authSubmit"}),x&&Object(v.jsx)("span",{className:"authError",children:x})]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign in":"Create Account"})]})},y=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new O.auth.GoogleAuthProvider:"github"===n&&(a=new O.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(b.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(b.a,{icon:p.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(v.jsx)(b.a,{icon:p.a})]})]})]})},w=n(27),N=n(20),k=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),p=l[0],f=l[1],O=function(){var e=Object(d.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=window.confirm("Are you sure you want to delete this nweet?"))){e.next=4;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:if(!n||!t.attachmentUrl){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return u((function(e){return!e}))},g=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("nweets/".concat(t.id)).update({text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(v.jsx)("input",{type:"text",placeholder:"Edit your Nweet",value:p,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update",className:"formBtn"})]}),Object(v.jsx)("span",{onClick:h,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl,alt:"img"}),n&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:O,children:Object(v.jsx)(b.a,{icon:N.d})}),Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(b.a,{icon:N.a})})]})]})})},S=n(59),I=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],p=o[1],f=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,r,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return r=x.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,m.collection("nweets").add(u);case 15:s(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(b.a,{icon:N.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:l,style:{backgroundImage:l},alt:"img"}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(b.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){return m.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)})),function(){return s([])}}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(I,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(v.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj,n=e.refreshUser,r=Object(a.useState)([]),c=Object(i.a)(r,2),s=(c[0],c[1]),u=Object(a.useState)(t.displayName),l=Object(i.a)(u,2),b=l[0],p=l[1],f=Object(o.f)(),O=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===b){e.next=5;break}return e.next=4,t.updateProfile({displayName:b});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:n=e.sent,a=n.docs.map((function(e){return Object(w.a)({id:e.id},e.data())})),s(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.uid]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:O,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;p(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:b,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),f.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(v.jsx)(b.a,{icon:p.c,color:"#04AAFF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(v.jsx)(b.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(v.jsxs)(u.a,{children:[n&&Object(v.jsx)(F,{userObj:a}),Object(v.jsx)(o.c,{children:n?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(C,{userObj:a})}),Object(v.jsx)(o.a,{exact:!0,path:"/profile",children:Object(v.jsx)(A,{userObj:a,refreshUser:t})})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(y,{})})})})]})};var B=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(U,{refreshUser:function(){var e=h.currentUser;o(Object.assign({},e)),o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};n(54);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.c75f5da9.chunk.js.map