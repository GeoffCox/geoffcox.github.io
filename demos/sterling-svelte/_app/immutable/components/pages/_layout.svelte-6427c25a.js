import{S as ze,i as Qe,s as We,C as Xe,k as n,q as v,a as b,l as c,m as d,r as _,h as i,c as k,n as l,b as Ye,D as e,E as Ze,F as xe,G as $e,H as et,I as tt,J as st,f as lt,t as rt,K as at,o as ot,L as nt,M as ct}from"../../chunks/index-79dc49f8.js";import{d as it,l as ht}from"../../chunks/Switch.svelte_svelte_type_style_lang-ae4f99bd.js";import{b as D,w as dt}from"../../chunks/paths-11e58407.js";const je=(r,t)=>{Object.keys(t).map(s=>{r.style.setProperty(s,t[s]?`${t[s]}`:null)})},Je=(r,t)=>{const s=t.atDocumentRoot?document.documentElement:r;return je(s,t.theme),{update:h=>{h&&je(document.documentElement,h==null?void 0:h.theme)}}},Ke=(r,t)=>Je(r,{...t,theme:it}),Ne=(r,t)=>Je(r,{...t,theme:ht}),Fe=(r,t)=>{let s=t==null?void 0:t.dark;(t==null?void 0:t.dark)===void 0&&(s=window.matchMedia("(prefers-color-scheme: dark)").matches),s?Ke(r,t):Ne(r,t)},Ge=(r,t,s)=>{let h=s==null?void 0:s.dark;(s==null?void 0:s.dark)===void 0&&(h=r.matches),h?Ke(t,s):Ne(t,s)},ut=(r,t)=>{let s=u=>Ge(u,r,t);const h=window.matchMedia("(prefers-color-scheme: dark)");return h.addEventListener("change",s),Fe(r,t),{destory(){h.removeEventListener("change",s)},update(u){h.removeEventListener("change",s),s=m=>Ge(m,r,u),h.addEventListener("change",s),Fe(r,u)}}};function ft(r){let t,s,h,u,m,y,S,w,G,A,K,g,L,a,C,Q,W,M,X,Y,T,Z,x,I,$,ee,P,te,se,R,le,re,V,ae,oe,H,ne,ce,O,ie,he,B,de,ue,U,fe,ve,q,be,_e,j,ke,me,J,N,F,ge,De;const pe=r[5].default,E=Xe(pe,r,r[4],null);return{c(){t=n("div"),s=n("div"),h=n("label"),u=n("input"),m=v(`
      Dark Mode`),y=b(),S=n("h1"),w=v("sterling-svelte (in progress)"),G=b(),A=n("h3"),K=v("A modern, accessible, and lightweight UI component library for Svelte."),g=b(),L=n("div"),a=n("div"),C=n("a"),Q=v("Overview"),W=b(),M=n("a"),X=v("Theme"),Y=b(),T=n("a"),Z=v("Button"),x=b(),I=n("a"),$=v("Checkbox"),ee=b(),P=n("a"),te=v("Dialog"),se=b(),R=n("a"),le=v("Input"),re=b(),V=n("a"),ae=v("Label"),oe=b(),H=n("a"),ne=v("List"),ce=b(),O=n("a"),ie=v("Progress"),he=b(),B=n("a"),de=v("Radio"),ue=b(),U=n("a"),fe=v("Select"),ve=b(),q=n("a"),be=v("Slider"),_e=b(),j=n("a"),ke=v("Switch"),me=b(),J=n("div"),E&&E.c(),this.h()},l(f){t=c(f,"DIV",{class:!0});var p=d(t);s=c(p,"DIV",{class:!0});var ye=d(s);h=c(ye,"LABEL",{});var Ee=d(h);u=c(Ee,"INPUT",{type:!0,title:!0}),m=_(Ee,`
      Dark Mode`),Ee.forEach(i),ye.forEach(i),y=k(p),S=c(p,"H1",{});var we=d(S);w=_(we,"sterling-svelte (in progress)"),we.forEach(i),G=k(p),A=c(p,"H3",{});var Ae=d(A);K=_(Ae,"A modern, accessible, and lightweight UI component library for Svelte."),Ae.forEach(i),g=k(p),L=c(p,"DIV",{class:!0});var z=d(L);a=c(z,"DIV",{class:!0});var o=d(a);C=c(o,"A",{href:!0,class:!0});var Le=d(C);Q=_(Le,"Overview"),Le.forEach(i),W=k(o),M=c(o,"A",{href:!0,class:!0});var Se=d(M);X=_(Se,"Theme"),Se.forEach(i),Y=k(o),T=c(o,"A",{href:!0,class:!0});var Ce=d(T);Z=_(Ce,"Button"),Ce.forEach(i),x=k(o),I=c(o,"A",{href:!0,class:!0});var Me=d(I);$=_(Me,"Checkbox"),Me.forEach(i),ee=k(o),P=c(o,"A",{href:!0,class:!0});var Te=d(P);te=_(Te,"Dialog"),Te.forEach(i),se=k(o),R=c(o,"A",{href:!0,class:!0});var Ie=d(R);le=_(Ie,"Input"),Ie.forEach(i),re=k(o),V=c(o,"A",{href:!0,class:!0});var Pe=d(V);ae=_(Pe,"Label"),Pe.forEach(i),oe=k(o),H=c(o,"A",{href:!0,class:!0});var Re=d(H);ne=_(Re,"List"),Re.forEach(i),ce=k(o),O=c(o,"A",{href:!0,class:!0});var Ve=d(O);ie=_(Ve,"Progress"),Ve.forEach(i),he=k(o),B=c(o,"A",{href:!0,class:!0});var He=d(B);de=_(He,"Radio"),He.forEach(i),ue=k(o),U=c(o,"A",{href:!0,class:!0});var Oe=d(U);fe=_(Oe,"Select"),Oe.forEach(i),ve=k(o),q=c(o,"A",{href:!0,class:!0});var Be=d(q);be=_(Be,"Slider"),Be.forEach(i),_e=k(o),j=c(o,"A",{href:!0,class:!0});var Ue=d(j);ke=_(Ue,"Switch"),Ue.forEach(i),o.forEach(i),me=k(z),J=c(z,"DIV",{class:!0});var qe=d(J);E&&E.l(qe),qe.forEach(i),z.forEach(i),p.forEach(i),this.h()},h(){l(u,"type","checkbox"),u.checked=r[0],l(u,"title","indeterminate => follow OS/browser setting"),l(s,"class","header svelte-b38b6k"),l(C,"href",D+"/"),l(C,"class","svelte-b38b6k"),l(M,"href",D+"/theme"),l(M,"class","svelte-b38b6k"),l(T,"href",D+"/components/button"),l(T,"class","svelte-b38b6k"),l(I,"href",D+"/components/checkbox"),l(I,"class","svelte-b38b6k"),l(P,"href",D+"/components/dialog"),l(P,"class","svelte-b38b6k"),l(R,"href",D+"/components/input"),l(R,"class","svelte-b38b6k"),l(V,"href",D+"/components/label"),l(V,"class","svelte-b38b6k"),l(H,"href",D+"/components/list"),l(H,"class","svelte-b38b6k"),l(O,"href",D+"/components/progress"),l(O,"class","svelte-b38b6k"),l(B,"href",D+"/components/radio"),l(B,"class","svelte-b38b6k"),l(U,"href",D+"/components/select"),l(U,"class","svelte-b38b6k"),l(q,"href",D+"/components/slider"),l(q,"class","svelte-b38b6k"),l(j,"href",D+"/components/switch"),l(j,"class","svelte-b38b6k"),l(a,"class","nav svelte-b38b6k"),l(J,"class","component svelte-b38b6k"),l(L,"class","content svelte-b38b6k"),l(t,"class","layout svelte-b38b6k")},m(f,p){Ye(f,t,p),e(t,s),e(s,h),e(h,u),r[6](u),e(h,m),e(t,y),e(t,S),e(S,w),e(t,G),e(t,A),e(A,K),e(t,g),e(t,L),e(L,a),e(a,C),e(C,Q),e(a,W),e(a,M),e(M,X),e(a,Y),e(a,T),e(T,Z),e(a,x),e(a,I),e(I,$),e(a,ee),e(a,P),e(P,te),e(a,se),e(a,R),e(R,le),e(a,re),e(a,V),e(V,ae),e(a,oe),e(a,H),e(H,ne),e(a,ce),e(a,O),e(O,ie),e(a,he),e(a,B),e(B,de),e(a,ue),e(a,U),e(U,fe),e(a,ve),e(a,q),e(q,be),e(a,_e),e(a,j),e(j,ke),e(L,me),e(L,J),E&&E.m(J,null),F=!0,ge||(De=[Ze(u,"click",r[2]),xe(N=ut.call(null,t,{dark:r[0],atDocumentRoot:!0}))],ge=!0)},p(f,[p]){(!F||p&1)&&(u.checked=f[0]),E&&E.p&&(!F||p&16)&&$e(E,pe,f,f[4],F?tt(pe,f[4],p,null):et(f[4]),null),N&&st(N.update)&&p&1&&N.update.call(null,{dark:f[0],atDocumentRoot:!0})},i(f){F||(lt(E,f),F=!0)},o(f){rt(E,f),F=!1},d(f){f&&i(t),r[6](null),E&&E.d(f),ge=!1,at(De)}}}function vt(r,t,s){let{$$slots:h={},$$scope:u}=t,m,y;const S=()=>{m===void 0?s(0,m=!0):m===!0?s(0,m=!1):(s(0,m=void 0),s(1,y.indeterminate=!0,y))};let w=!1;const G=g=>{s(3,w=g.matches)};ot(()=>{s(1,y.indeterminate=!0,y);const g=window.matchMedia("(prefers-color-scheme: dark)");return s(3,w=g.matches),g.addEventListener("change",G),()=>{g.removeEventListener("change",G)}});let A=dt(m);nt("sterlingDarkMode",A);function K(g){ct[g?"unshift":"push"](()=>{y=g,s(1,y)})}return r.$$set=g=>{"$$scope"in g&&s(4,u=g.$$scope)},r.$$.update=()=>{r.$$.dirty&9&&A.set(m===void 0?w:m)},[m,y,S,w,u,h,K]}class mt extends ze{constructor(t){super(),Qe(this,t,vt,ft,We,{})}}export{mt as default};