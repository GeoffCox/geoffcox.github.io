import{S as de,i as he,s as ue,C as fe,k as u,q as I,a as L,l as f,m,r as S,h as v,c as A,n as d,b as ve,D as o,E as _e,F as me,G as ke,H as ge,I as pe,J as Ee,f as be,t as De,K as ye,o as we,L as Me,M as Te}from"../../chunks/index-1684c79f.js";import{d as Ce,l as Ie}from"../../chunks/lightTheme-aae6d10f.js";/* empty css                                                        *//* empty css                                                       */import{b as R,w as Le}from"../../chunks/paths-9f807399.js";const se=(l,e)=>{Object.keys(e).map(t=>{l.style.setProperty(t,e[t]?`${e[t]}`:null)})},ae=(l,e)=>{const t=e.atDocumentRoot?document.documentElement:l;return se(t,e.theme),{update:s=>{s&&se(document.documentElement,s==null?void 0:s.theme)}}},ce=(l,e)=>ae(l,{...e,theme:Ce}),ie=(l,e)=>ae(l,{...e,theme:Ie}),re=(l,e)=>{let t=e==null?void 0:e.dark;(e==null?void 0:e.dark)===void 0&&(t=window.matchMedia("(prefers-color-scheme: dark)").matches),t?ce(l,e):ie(l,e)},ne=(l,e,t)=>{let s=t==null?void 0:t.dark;(t==null?void 0:t.dark)===void 0&&(s=l.matches),s?ce(e,t):ie(e,t)},Se=(l,e)=>{let t=r=>ne(r,l,e);const s=window.matchMedia("(prefers-color-scheme: dark)");return s.addEventListener("change",t),re(l,e),{destory(){s.removeEventListener("change",t)},update(r){s.removeEventListener("change",t),t=a=>ne(a,l,r),s.addEventListener("change",t),re(l,r)}}};function Ae(l){let e,t,s,r,a,k,D,g,V,p,O,c,E,_,y,U,q,w,j,F,M,G,J,T,K,N,H,P,C,z,X;const Q=l[5].default,h=fe(Q,l,l[4],null);return{c(){e=u("div"),t=u("div"),s=u("label"),r=u("input"),a=I(`
			Dark Mode`),k=L(),D=u("h1"),g=I("sterling-svelte (in progress)"),V=L(),p=u("h3"),O=I("A modern, accessible, and lightweight UI component library for Svelte."),c=L(),E=u("div"),_=u("div"),y=u("a"),U=I("Overview"),q=L(),w=u("a"),j=I("Theme"),F=L(),M=u("a"),G=I("Button"),J=L(),T=u("a"),K=I("Input"),N=L(),H=u("div"),h&&h.c(),this.h()},l(n){e=f(n,"DIV",{class:!0});var i=m(e);t=f(i,"DIV",{class:!0});var Y=m(t);s=f(Y,"LABEL",{});var W=m(s);r=f(W,"INPUT",{type:!0,title:!0}),a=S(W,`
			Dark Mode`),W.forEach(v),Y.forEach(v),k=A(i),D=f(i,"H1",{});var Z=m(D);g=S(Z,"sterling-svelte (in progress)"),Z.forEach(v),V=A(i),p=f(i,"H3",{});var x=m(p);O=S(x,"A modern, accessible, and lightweight UI component library for Svelte."),x.forEach(v),c=A(i),E=f(i,"DIV",{class:!0});var B=m(E);_=f(B,"DIV",{class:!0});var b=m(_);y=f(b,"A",{href:!0,class:!0});var $=m(y);U=S($,"Overview"),$.forEach(v),q=A(b),w=f(b,"A",{href:!0,class:!0});var ee=m(w);j=S(ee,"Theme"),ee.forEach(v),F=A(b),M=f(b,"A",{href:!0,class:!0});var te=m(M);G=S(te,"Button"),te.forEach(v),J=A(b),T=f(b,"A",{href:!0,class:!0});var le=m(T);K=S(le,"Input"),le.forEach(v),b.forEach(v),N=A(B),H=f(B,"DIV",{class:!0});var oe=m(H);h&&h.l(oe),oe.forEach(v),B.forEach(v),i.forEach(v),this.h()},h(){d(r,"type","checkbox"),r.checked=l[0],d(r,"title","indeterminate => follow OS/browser setting"),d(t,"class","header svelte-19rtkoe"),d(y,"href",R+"/"),d(y,"class","svelte-19rtkoe"),d(w,"href",R+"/theme"),d(w,"class","svelte-19rtkoe"),d(M,"href",R+"/components/button"),d(M,"class","svelte-19rtkoe"),d(T,"href",R+"/components/input"),d(T,"class","svelte-19rtkoe"),d(_,"class","nav svelte-19rtkoe"),d(H,"class","component svelte-19rtkoe"),d(E,"class","content svelte-19rtkoe"),d(e,"class","layout svelte-19rtkoe")},m(n,i){ve(n,e,i),o(e,t),o(t,s),o(s,r),l[6](r),o(s,a),o(e,k),o(e,D),o(D,g),o(e,V),o(e,p),o(p,O),o(e,c),o(e,E),o(E,_),o(_,y),o(y,U),o(_,q),o(_,w),o(w,j),o(_,F),o(_,M),o(M,G),o(_,J),o(_,T),o(T,K),o(E,N),o(E,H),h&&h.m(H,null),C=!0,z||(X=[_e(r,"click",l[2]),me(P=Se.call(null,e,{dark:l[0],atDocumentRoot:!0}))],z=!0)},p(n,[i]){(!C||i&1)&&(r.checked=n[0]),h&&h.p&&(!C||i&16)&&ke(h,Q,n,n[4],C?pe(Q,n[4],i,null):ge(n[4]),null),P&&Ee(P.update)&&i&1&&P.update.call(null,{dark:n[0],atDocumentRoot:!0})},i(n){C||(be(h,n),C=!0)},o(n){De(h,n),C=!1},d(n){n&&v(e),l[6](null),h&&h.d(n),z=!1,ye(X)}}}function Ve(l,e,t){let{$$slots:s={},$$scope:r}=e,a,k;const D=()=>{a===void 0?t(0,a=!0):a===!0?t(0,a=!1):(t(0,a=void 0),t(1,k.indeterminate=!0,k))};let g=!1;const V=c=>{t(3,g=c.matches)};we(()=>{t(1,k.indeterminate=!0,k);const c=window.matchMedia("(prefers-color-scheme: dark)");return t(3,g=c.matches),c.addEventListener("change",V),()=>{c.removeEventListener("change",V)}});let p=Le(a);Me("sterlingDarkMode",p);function O(c){Te[c?"unshift":"push"](()=>{k=c,t(1,k)})}return l.$$set=c=>{"$$scope"in c&&t(4,r=c.$$scope)},l.$$.update=()=>{l.$$.dirty&9&&p.set(a===void 0?g:a)},[a,k,D,g,r,s,O]}class Ue extends de{constructor(e){super(),he(this,e,Ve,Ae,ue,{})}}export{Ue as default};