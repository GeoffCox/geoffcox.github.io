import{S as Ve,i as He,s as Oe,C as Be,k as c,q as g,a as p,l as i,m as d,r as E,h,c as b,n as r,b as Ue,D as t,E as qe,F as je,G as Fe,H as Ge,I as Je,J as Ke,f as Ne,t as ze,K as Qe,o as We,L as Xe,M as Ye}from"../../chunks/index-826495f5.js";import{d as Ze,l as xe}from"../../chunks/Slider.svelte_svelte_type_style_lang-dd36c6c0.js";import{b as y,w as $e}from"../../chunks/paths-b6ca9006.js";const Me=(l,e)=>{Object.keys(e).map(s=>{l.style.setProperty(s,e[s]?`${e[s]}`:null)})},Ie=(l,e)=>{const s=e.atDocumentRoot?document.documentElement:l;return Me(s,e.theme),{update:a=>{a&&Me(document.documentElement,a==null?void 0:a.theme)}}},Pe=(l,e)=>Ie(l,{...e,theme:Ze}),Re=(l,e)=>Ie(l,{...e,theme:xe}),Se=(l,e)=>{let s=e==null?void 0:e.dark;(e==null?void 0:e.dark)===void 0&&(s=window.matchMedia("(prefers-color-scheme: dark)").matches),s?Pe(l,e):Re(l,e)},Te=(l,e,s)=>{let a=s==null?void 0:s.dark;(s==null?void 0:s.dark)===void 0&&(a=l.matches),a?Pe(e,s):Re(e,s)},et=(l,e)=>{let s=u=>Te(u,l,e);const a=window.matchMedia("(prefers-color-scheme: dark)");return a.addEventListener("change",s),Se(l,e),{destory(){a.removeEventListener("change",s)},update(u){a.removeEventListener("change",s),s=v=>Te(v,l,u),a.addEventListener("change",s),Se(l,u)}}};function tt(l){let e,s,a,u,v,D,L,w,q,A,F,_,C,o,M,K,N,S,z,Q,T,W,X,I,Y,Z,P,x,$,R,ee,te,V,se,le,H,re,oe,O,ae,ne,B,ce,ie,j,G,U,he,fe;const de=l[5].default,m=Be(de,l,l[4],null);return{c(){e=c("div"),s=c("div"),a=c("label"),u=c("input"),v=g(`
			Dark Mode`),D=p(),L=c("h1"),w=g("sterling-svelte (in progress)"),q=p(),A=c("h3"),F=g("A modern, accessible, and lightweight UI component library for Svelte."),_=p(),C=c("div"),o=c("div"),M=c("a"),K=g("Overview"),N=p(),S=c("a"),z=g("Theme"),Q=p(),T=c("a"),W=g("Button"),X=p(),I=c("a"),Y=g("Checkbox"),Z=p(),P=c("a"),x=g("Input"),$=p(),R=c("a"),ee=g("List"),te=p(),V=c("a"),se=g("Progress"),le=p(),H=c("a"),re=g("Radio"),oe=p(),O=c("a"),ae=g("Select"),ne=p(),B=c("a"),ce=g("Slider"),ie=p(),j=c("div"),m&&m.c(),this.h()},l(f){e=i(f,"DIV",{class:!0});var k=d(e);s=i(k,"DIV",{class:!0});var ve=d(s);a=i(ve,"LABEL",{});var ue=d(a);u=i(ue,"INPUT",{type:!0,title:!0}),v=E(ue,`
			Dark Mode`),ue.forEach(h),ve.forEach(h),D=b(k),L=i(k,"H1",{});var _e=d(L);w=E(_e,"sterling-svelte (in progress)"),_e.forEach(h),q=b(k),A=i(k,"H3",{});var ke=d(A);F=E(ke,"A modern, accessible, and lightweight UI component library for Svelte."),ke.forEach(h),_=b(k),C=i(k,"DIV",{class:!0});var J=d(C);o=i(J,"DIV",{class:!0});var n=d(o);M=i(n,"A",{href:!0,class:!0});var me=d(M);K=E(me,"Overview"),me.forEach(h),N=b(n),S=i(n,"A",{href:!0,class:!0});var ge=d(S);z=E(ge,"Theme"),ge.forEach(h),Q=b(n),T=i(n,"A",{href:!0,class:!0});var pe=d(T);W=E(pe,"Button"),pe.forEach(h),X=b(n),I=i(n,"A",{href:!0,class:!0});var Ee=d(I);Y=E(Ee,"Checkbox"),Ee.forEach(h),Z=b(n),P=i(n,"A",{href:!0,class:!0});var be=d(P);x=E(be,"Input"),be.forEach(h),$=b(n),R=i(n,"A",{href:!0,class:!0});var De=d(R);ee=E(De,"List"),De.forEach(h),te=b(n),V=i(n,"A",{href:!0,class:!0});var ye=d(V);se=E(ye,"Progress"),ye.forEach(h),le=b(n),H=i(n,"A",{href:!0,class:!0});var we=d(H);re=E(we,"Radio"),we.forEach(h),oe=b(n),O=i(n,"A",{href:!0,class:!0});var Ae=d(O);ae=E(Ae,"Select"),Ae.forEach(h),ne=b(n),B=i(n,"A",{href:!0,class:!0});var Ce=d(B);ce=E(Ce,"Slider"),Ce.forEach(h),n.forEach(h),ie=b(J),j=i(J,"DIV",{class:!0});var Le=d(j);m&&m.l(Le),Le.forEach(h),J.forEach(h),k.forEach(h),this.h()},h(){r(u,"type","checkbox"),u.checked=l[0],r(u,"title","indeterminate => follow OS/browser setting"),r(s,"class","header svelte-19rtkoe"),r(M,"href",y+"/"),r(M,"class","svelte-19rtkoe"),r(S,"href",y+"/theme"),r(S,"class","svelte-19rtkoe"),r(T,"href",y+"/components/button"),r(T,"class","svelte-19rtkoe"),r(I,"href",y+"/components/checkbox"),r(I,"class","svelte-19rtkoe"),r(P,"href",y+"/components/input"),r(P,"class","svelte-19rtkoe"),r(R,"href",y+"/components/list"),r(R,"class","svelte-19rtkoe"),r(V,"href",y+"/components/progress"),r(V,"class","svelte-19rtkoe"),r(H,"href",y+"/components/radio"),r(H,"class","svelte-19rtkoe"),r(O,"href",y+"/components/select"),r(O,"class","svelte-19rtkoe"),r(B,"href",y+"/components/slider"),r(B,"class","svelte-19rtkoe"),r(o,"class","nav svelte-19rtkoe"),r(j,"class","component svelte-19rtkoe"),r(C,"class","content svelte-19rtkoe"),r(e,"class","layout svelte-19rtkoe")},m(f,k){Ue(f,e,k),t(e,s),t(s,a),t(a,u),l[6](u),t(a,v),t(e,D),t(e,L),t(L,w),t(e,q),t(e,A),t(A,F),t(e,_),t(e,C),t(C,o),t(o,M),t(M,K),t(o,N),t(o,S),t(S,z),t(o,Q),t(o,T),t(T,W),t(o,X),t(o,I),t(I,Y),t(o,Z),t(o,P),t(P,x),t(o,$),t(o,R),t(R,ee),t(o,te),t(o,V),t(V,se),t(o,le),t(o,H),t(H,re),t(o,oe),t(o,O),t(O,ae),t(o,ne),t(o,B),t(B,ce),t(C,ie),t(C,j),m&&m.m(j,null),U=!0,he||(fe=[qe(u,"click",l[2]),je(G=et.call(null,e,{dark:l[0],atDocumentRoot:!0}))],he=!0)},p(f,[k]){(!U||k&1)&&(u.checked=f[0]),m&&m.p&&(!U||k&16)&&Fe(m,de,f,f[4],U?Je(de,f[4],k,null):Ge(f[4]),null),G&&Ke(G.update)&&k&1&&G.update.call(null,{dark:f[0],atDocumentRoot:!0})},i(f){U||(Ne(m,f),U=!0)},o(f){ze(m,f),U=!1},d(f){f&&h(e),l[6](null),m&&m.d(f),he=!1,Qe(fe)}}}function st(l,e,s){let{$$slots:a={},$$scope:u}=e,v,D;const L=()=>{v===void 0?s(0,v=!0):v===!0?s(0,v=!1):(s(0,v=void 0),s(1,D.indeterminate=!0,D))};let w=!1;const q=_=>{s(3,w=_.matches)};We(()=>{s(1,D.indeterminate=!0,D);const _=window.matchMedia("(prefers-color-scheme: dark)");return s(3,w=_.matches),_.addEventListener("change",q),()=>{_.removeEventListener("change",q)}});let A=$e(v);Xe("sterlingDarkMode",A);function F(_){Ye[_?"unshift":"push"](()=>{D=_,s(1,D)})}return l.$$set=_=>{"$$scope"in _&&s(4,u=_.$$scope)},l.$$.update=()=>{l.$$.dirty&9&&A.set(v===void 0?w:v)},[v,D,L,w,u,a,F]}class at extends Ve{constructor(e){super(),He(this,e,st,tt,Oe,{})}}export{at as default};