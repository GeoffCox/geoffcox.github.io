import{S as ft,i as ht,s as ct,w as te,x as oe,y as ne,f as re,t as le,z as ae,C as Oe,k as i,l as d,m as f,h as n,n as ue,b as u,D as st,a as _,c as m,H as it,q as $,r as v,F as r,B as qe}from"../../../../chunks/index-2a6ec5ba.js";import{C as dt}from"../../../../chunks/Checkbox-920d4dc2.js";import{P as _t}from"../../../../chunks/Playground-87676494.js";import{T as mt}from"../../../../chunks/TreeChevron-eec3dfeb.js";import"../../../../chunks/TextArea.svelte_svelte_type_style_lang-ae4f99bd.js";/* empty css                                                              *//* empty css                                                             *//* empty css                                                                *//* empty css                                                             *//* empty css                                                             *//* empty css                                                              *//* empty css                                                                *//* empty css                                                               *//* empty css                                                                     *//* empty css                                                           *//* empty css                                                               *//* empty css                                                            *//* empty css                                                                     */function $t(c){let t,l,a;return l=new mt({props:{expanded:c[1],hasChildren:c[2]}}),{c(){t=i("div"),te(l.$$.fragment),this.h()},l(o){t=d(o,"DIV",{slot:!0});var h=f(t);oe(l.$$.fragment,h),h.forEach(n),this.h()},h(){ue(t,"slot","component")},m(o,h){u(o,t,h),ne(l,t,null),a=!0},p(o,h){const b={};h&2&&(b.expanded=o[1]),h&4&&(b.hasChildren=o[2]),l.$set(b)},i(o){a||(re(l.$$.fragment,o),a=!0)},o(o){le(l.$$.fragment,o),a=!1},d(o){o&&n(t),ae(l)}}}function vt(c){let t,l;return{c(){t=i("span"),l=$("expanded"),this.h()},l(a){t=d(a,"SPAN",{slot:!0});var o=f(t);l=v(o,"expanded"),o.forEach(n),this.h()},h(){ue(t,"slot","label")},m(a,o){u(a,t,o),r(t,l)},p:qe,d(a){a&&n(t)}}}function bt(c){let t,l;return{c(){t=i("span"),l=$("hasChildren"),this.h()},l(a){t=d(a,"SPAN",{slot:!0});var o=f(t);l=v(o,"hasChildren"),o.forEach(n),this.h()},h(){ue(t,"slot","label")},m(a,o){u(a,t,o),r(t,l)},p:qe,d(a){a&&n(t)}}}function Et(c){let t,l,a,o,h,b;function T(s){c[3](s)}let g={$$slots:{label:[vt]},$$scope:{ctx:c}};c[1]!==void 0&&(g.checked=c[1]),t=new dt({props:g}),Oe.push(()=>st(t,"checked",T,c[1]));function k(s){c[4](s)}let C={$$slots:{label:[bt]},$$scope:{ctx:c}};return c[2]!==void 0&&(C.checked=c[2]),o=new dt({props:C}),Oe.push(()=>st(o,"checked",k,c[2])),{c(){te(t.$$.fragment),a=_(),te(o.$$.fragment)},l(s){oe(t.$$.fragment,s),a=m(s),oe(o.$$.fragment,s)},m(s,E){ne(t,s,E),u(s,a,E),ne(o,s,E),b=!0},p(s,E){const A={};E&64&&(A.$$scope={dirty:E,ctx:s}),!l&&E&2&&(l=!0,A.checked=s[1],it(()=>l=!1)),t.$set(A);const P={};E&64&&(P.$$scope={dirty:E,ctx:s}),!h&&E&4&&(h=!0,P.checked=s[2],it(()=>h=!1)),o.$set(P)},i(s){b||(re(t.$$.fragment,s),re(o.$$.fragment,s),b=!0)},o(s){le(t.$$.fragment,s),le(o.$$.fragment,s),b=!1},d(s){ae(t,s),s&&n(a),ae(o,s)}}}function kt(c){let t,l,a={$$slots:{options:[Et],component:[$t]},$$scope:{ctx:c}};return t=new _t({props:a}),c[5](t),{c(){te(t.$$.fragment)},l(o){oe(t.$$.fragment,o)},m(o,h){ne(t,o,h),l=!0},p(o,[h]){const b={};h&70&&(b.$$scope={dirty:h,ctx:o}),t.$set(b)},i(o){l||(re(t.$$.fragment,o),l=!0)},o(o){le(t.$$.fragment,o),l=!1},d(o){c[5](null),ae(t,o)}}}function Tt(c,t,l){let a,o=!1,h=!0;function b(k){o=k,l(1,o)}function T(k){h=k,l(2,h)}function g(k){Oe[k?"unshift":"push"](()=>{a=k,l(0,a)})}return[a,o,h,b,T,g]}class Ct extends ft{constructor(t){super(),ht(this,t,Tt,kt,ct,{})}}function wt(c){let t,l,a,o,h,b,T,g,k,C,s,E,A,P,w,q,_e,me,z,$e,ve,M,be,se,N,Ee,ie,H,U,x,V,ke,Te,Y,Ce,we,j,xe,De,I,D,G,ye,ge,J,K,Pe,He,Q,Ae,Ie,y,W,Le,Ne,X,Z,Re,Se,ee,Be,de,R,Fe,fe,L,pt='<code class="language-undefined">TreeChevron</code>',he;return C=new Ct({}),{c(){t=i("h1"),l=$("TreeChevron"),a=_(),o=i("p"),h=$("A chevron indicating expanded/collapsed state for nodes in a Tree."),b=_(),T=i("h2"),g=$("Playground"),k=_(),te(C.$$.fragment),s=_(),E=i("h2"),A=$("Features"),P=_(),w=i("ul"),q=i("li"),_e=$("Displays a chevron for nodes with children and a bullet for nodes without."),me=_(),z=i("li"),$e=$("Chevron points right when node collapsed, points down when expanded."),ve=_(),M=i("li"),be=$("Chevron changes are animated as rotation. No animation when prefers-reduced motion."),se=_(),N=i("h2"),Ee=$("Props"),ie=_(),H=i("table"),U=i("thead"),x=i("tr"),V=i("th"),ke=$("Name"),Te=_(),Y=i("th"),Ce=$("Type"),we=_(),j=i("th"),xe=$("Description"),De=_(),I=i("tbody"),D=i("tr"),G=i("td"),ye=$("expanded"),ge=_(),J=i("td"),K=i("code"),Pe=$("boolean"),He=_(),Q=i("td"),Ae=$("If the associated node is expanded."),Ie=_(),y=i("tr"),W=i("td"),Le=$("hasChildren"),Ne=_(),X=i("td"),Z=i("code"),Re=$("boolean"),Se=_(),ee=i("td"),Be=$("If the associated node has children."),de=_(),R=i("h2"),Fe=$("Anatomy"),fe=_(),L=i("pre"),this.h()},l(e){t=d(e,"H1",{});var p=f(t);l=v(p,"TreeChevron"),p.forEach(n),a=m(e),o=d(e,"P",{});var ze=f(o);h=v(ze,"A chevron indicating expanded/collapsed state for nodes in a Tree."),ze.forEach(n),b=m(e),T=d(e,"H2",{});var Me=f(T);g=v(Me,"Playground"),Me.forEach(n),k=m(e),oe(C.$$.fragment,e),s=m(e),E=d(e,"H2",{});var Ue=f(E);A=v(Ue,"Features"),Ue.forEach(n),P=m(e),w=d(e,"UL",{});var S=f(w);q=d(S,"LI",{});var Ve=f(q);_e=v(Ve,"Displays a chevron for nodes with children and a bullet for nodes without."),Ve.forEach(n),me=m(S),z=d(S,"LI",{});var Ye=f(z);$e=v(Ye,"Chevron points right when node collapsed, points down when expanded."),Ye.forEach(n),ve=m(S),M=d(S,"LI",{});var je=f(M);be=v(je,"Chevron changes are animated as rotation. No animation when prefers-reduced motion."),je.forEach(n),S.forEach(n),se=m(e),N=d(e,"H2",{});var Ge=f(N);Ee=v(Ge,"Props"),Ge.forEach(n),ie=m(e),H=d(e,"TABLE",{});var ce=f(H);U=d(ce,"THEAD",{});var Je=f(U);x=d(Je,"TR",{});var B=f(x);V=d(B,"TH",{});var Ke=f(V);ke=v(Ke,"Name"),Ke.forEach(n),Te=m(B),Y=d(B,"TH",{});var Qe=f(Y);Ce=v(Qe,"Type"),Qe.forEach(n),we=m(B),j=d(B,"TH",{});var We=f(j);xe=v(We,"Description"),We.forEach(n),B.forEach(n),Je.forEach(n),De=m(ce),I=d(ce,"TBODY",{});var pe=f(I);D=d(pe,"TR",{});var F=f(D);G=d(F,"TD",{});var Xe=f(G);ye=v(Xe,"expanded"),Xe.forEach(n),ge=m(F),J=d(F,"TD",{});var Ze=f(J);K=d(Ze,"CODE",{});var et=f(K);Pe=v(et,"boolean"),et.forEach(n),Ze.forEach(n),He=m(F),Q=d(F,"TD",{});var tt=f(Q);Ae=v(tt,"If the associated node is expanded."),tt.forEach(n),F.forEach(n),Ie=m(pe),y=d(pe,"TR",{});var O=f(y);W=d(O,"TD",{});var ot=f(W);Le=v(ot,"hasChildren"),ot.forEach(n),Ne=m(O),X=d(O,"TD",{});var nt=f(X);Z=d(nt,"CODE",{});var rt=f(Z);Re=v(rt,"boolean"),rt.forEach(n),nt.forEach(n),Se=m(O),ee=d(O,"TD",{});var lt=f(ee);Be=v(lt,"If the associated node has children."),lt.forEach(n),O.forEach(n),pe.forEach(n),ce.forEach(n),de=m(e),R=d(e,"H2",{});var at=f(R);Fe=v(at,"Anatomy"),at.forEach(n),fe=m(e),L=d(e,"PRE",{class:!0});var ut=f(L);ut.forEach(n),this.h()},h(){ue(L,"class","language-undefined")},m(e,p){u(e,t,p),r(t,l),u(e,a,p),u(e,o,p),r(o,h),u(e,b,p),u(e,T,p),r(T,g),u(e,k,p),ne(C,e,p),u(e,s,p),u(e,E,p),r(E,A),u(e,P,p),u(e,w,p),r(w,q),r(q,_e),r(w,me),r(w,z),r(z,$e),r(w,ve),r(w,M),r(M,be),u(e,se,p),u(e,N,p),r(N,Ee),u(e,ie,p),u(e,H,p),r(H,U),r(U,x),r(x,V),r(V,ke),r(x,Te),r(x,Y),r(Y,Ce),r(x,we),r(x,j),r(j,xe),r(H,De),r(H,I),r(I,D),r(D,G),r(G,ye),r(D,ge),r(D,J),r(J,K),r(K,Pe),r(D,He),r(D,Q),r(Q,Ae),r(I,Ie),r(I,y),r(y,W),r(W,Le),r(y,Ne),r(y,X),r(X,Z),r(Z,Re),r(y,Se),r(y,ee),r(ee,Be),u(e,de,p),u(e,R,p),r(R,Fe),u(e,fe,p),u(e,L,p),L.innerHTML=pt,he=!0},p:qe,i(e){he||(re(C.$$.fragment,e),he=!0)},o(e){le(C.$$.fragment,e),he=!1},d(e){e&&n(t),e&&n(a),e&&n(o),e&&n(b),e&&n(T),e&&n(k),ae(C,e),e&&n(s),e&&n(E),e&&n(P),e&&n(w),e&&n(se),e&&n(N),e&&n(ie),e&&n(H),e&&n(de),e&&n(R),e&&n(fe),e&&n(L)}}}class Ut extends ft{constructor(t){super(),ht(this,t,null,wt,ct,{})}}export{Ut as default};