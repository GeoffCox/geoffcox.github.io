import{S as ht,i as pt,s as ut,w as oe,x as re,y as le,f as ne,t as ae,z as se,K as Se,k as s,l as i,m as f,h as t,n as _t,b as u,L as ft,a as _,c as m,M as ct,q as $,r as v,D as o,B as vt}from"../../../../chunks/index-80be727c.js";import{C as dt}from"../../../../chunks/Checkbox-950f2235.js";import{P as Et}from"../../../../chunks/Playground-964e23a1.js";import{T as bt}from"../../../../chunks/TreeChevron-ab92567d.js";function kt(h){let r,n,c;return n=new bt({props:{expanded:h[1],hasChildren:h[2]}}),{c(){r=s("div"),oe(n.$$.fragment),this.h()},l(l){r=i(l,"DIV",{slot:!0});var d=f(r);re(n.$$.fragment,d),d.forEach(t),this.h()},h(){_t(r,"slot","component")},m(l,d){u(l,r,d),le(n,r,null),c=!0},p(l,d){const E={};d&2&&(E.expanded=l[1]),d&4&&(E.hasChildren=l[2]),n.$set(E)},i(l){c||(ne(n.$$.fragment,l),c=!0)},o(l){ae(n.$$.fragment,l),c=!1},d(l){l&&t(r),se(n)}}}function Tt(h){let r;return{c(){r=$("expanded")},l(n){r=v(n,"expanded")},m(n,c){u(n,r,c)},d(n){n&&t(r)}}}function Ct(h){let r;return{c(){r=$("hasChildren")},l(n){r=v(n,"hasChildren")},m(n,c){u(n,r,c)},d(n){n&&t(r)}}}function xt(h){let r,n,c,l,d,E;function C(a){h[3](a)}let g={$$slots:{default:[Tt]},$$scope:{ctx:h}};h[1]!==void 0&&(g.checked=h[1]),r=new dt({props:g}),Se.push(()=>ft(r,"checked",C,h[1]));function k(a){h[4](a)}let x={$$slots:{default:[Ct]},$$scope:{ctx:h}};return h[2]!==void 0&&(x.checked=h[2]),l=new dt({props:x}),Se.push(()=>ft(l,"checked",k,h[2])),{c(){oe(r.$$.fragment),c=_(),oe(l.$$.fragment)},l(a){re(r.$$.fragment,a),c=m(a),re(l.$$.fragment,a)},m(a,b){le(r,a,b),u(a,c,b),le(l,a,b),E=!0},p(a,b){const L={};b&64&&(L.$$scope={dirty:b,ctx:a}),!n&&b&2&&(n=!0,L.checked=a[1],ct(()=>n=!1)),r.$set(L);const H={};b&64&&(H.$$scope={dirty:b,ctx:a}),!d&&b&4&&(d=!0,H.checked=a[2],ct(()=>d=!1)),l.$set(H)},i(a){E||(ne(r.$$.fragment,a),ne(l.$$.fragment,a),E=!0)},o(a){ae(r.$$.fragment,a),ae(l.$$.fragment,a),E=!1},d(a){se(r,a),a&&t(c),se(l,a)}}}function wt(h){let r,n,c={$$slots:{options:[xt],component:[kt]},$$scope:{ctx:h}};return r=new Et({props:c}),h[5](r),{c(){oe(r.$$.fragment)},l(l){re(r.$$.fragment,l)},m(l,d){le(r,l,d),n=!0},p(l,[d]){const E={};d&70&&(E.$$scope={dirty:d,ctx:l}),r.$set(E)},i(l){n||(ne(r.$$.fragment,l),n=!0)},o(l){ae(r.$$.fragment,l),n=!1},d(l){h[5](null),se(r,l)}}}function Dt(h,r,n){let c,l=!1,d=!0;function E(k){l=k,n(1,l)}function C(k){d=k,n(2,d)}function g(k){Se[k?"unshift":"push"](()=>{c=k,n(0,c)})}return[c,l,d,E,C,g]}class yt extends ht{constructor(r){super(),pt(this,r,Dt,wt,ut,{})}}function gt(h){let r,n,c,l,d,E,C,g,k,x,a,b,L,H,T,M,_e,me,S,$e,ve,z,Ee,be,K,ke,ie,N,Te,fe,P,U,w,V,Ce,xe,Y,we,De,j,ye,ge,A,D,G,He,Pe,J,Q,Ie,Le,W,Ae,Re,y,X,Ne,Be,Z,ee,Oe,qe,te,Fe,ce,B,Me,de,R,mt='<code class="language-undefined">TreeChevron</code>',he;return x=new yt({}),{c(){r=s("h1"),n=$("TreeChevron"),c=_(),l=s("p"),d=$("A chevron indicating expanded/collapsed state for items in a Tree."),E=_(),C=s("h2"),g=$("Playground"),k=_(),oe(x.$$.fragment),a=_(),b=s("h2"),L=$("Features"),H=_(),T=s("ul"),M=s("li"),_e=$("Displays a chevron for items with children and a bullet for items without."),me=_(),S=s("li"),$e=$("Chevron points right when collapsed, points down when expanded."),ve=_(),z=s("li"),Ee=$("Chevron changes are animated as rotation."),be=_(),K=s("li"),ke=$("No animation occurs for prefers-reduced-motion."),ie=_(),N=s("h2"),Te=$("Props"),fe=_(),P=s("table"),U=s("thead"),w=s("tr"),V=s("th"),Ce=$("Name"),xe=_(),Y=s("th"),we=$("Type"),De=_(),j=s("th"),ye=$("Description"),ge=_(),A=s("tbody"),D=s("tr"),G=s("td"),He=$("expanded"),Pe=_(),J=s("td"),Q=s("code"),Ie=$("boolean"),Le=_(),W=s("td"),Ae=$("If the associated item is expanded."),Re=_(),y=s("tr"),X=s("td"),Ne=$("hasChildren"),Be=_(),Z=s("td"),ee=s("code"),Oe=$("boolean"),qe=_(),te=s("td"),Fe=$("If the associated item has children."),ce=_(),B=s("h2"),Me=$("Anatomy"),de=_(),R=s("pre"),this.h()},l(e){r=i(e,"H1",{});var p=f(r);n=v(p,"TreeChevron"),p.forEach(t),c=m(e),l=i(e,"P",{});var ze=f(l);d=v(ze,"A chevron indicating expanded/collapsed state for items in a Tree."),ze.forEach(t),E=m(e),C=i(e,"H2",{});var Ke=f(C);g=v(Ke,"Playground"),Ke.forEach(t),k=m(e),re(x.$$.fragment,e),a=m(e),b=i(e,"H2",{});var Ue=f(b);L=v(Ue,"Features"),Ue.forEach(t),H=m(e),T=i(e,"UL",{});var I=f(T);M=i(I,"LI",{});var Ve=f(M);_e=v(Ve,"Displays a chevron for items with children and a bullet for items without."),Ve.forEach(t),me=m(I),S=i(I,"LI",{});var Ye=f(S);$e=v(Ye,"Chevron points right when collapsed, points down when expanded."),Ye.forEach(t),ve=m(I),z=i(I,"LI",{});var je=f(z);Ee=v(je,"Chevron changes are animated as rotation."),je.forEach(t),be=m(I),K=i(I,"LI",{});var Ge=f(K);ke=v(Ge,"No animation occurs for prefers-reduced-motion."),Ge.forEach(t),I.forEach(t),ie=m(e),N=i(e,"H2",{});var Je=f(N);Te=v(Je,"Props"),Je.forEach(t),fe=m(e),P=i(e,"TABLE",{});var pe=f(P);U=i(pe,"THEAD",{});var Qe=f(U);w=i(Qe,"TR",{});var O=f(w);V=i(O,"TH",{});var We=f(V);Ce=v(We,"Name"),We.forEach(t),xe=m(O),Y=i(O,"TH",{});var Xe=f(Y);we=v(Xe,"Type"),Xe.forEach(t),De=m(O),j=i(O,"TH",{});var Ze=f(j);ye=v(Ze,"Description"),Ze.forEach(t),O.forEach(t),Qe.forEach(t),ge=m(pe),A=i(pe,"TBODY",{});var ue=f(A);D=i(ue,"TR",{});var q=f(D);G=i(q,"TD",{});var et=f(G);He=v(et,"expanded"),et.forEach(t),Pe=m(q),J=i(q,"TD",{});var tt=f(J);Q=i(tt,"CODE",{});var ot=f(Q);Ie=v(ot,"boolean"),ot.forEach(t),tt.forEach(t),Le=m(q),W=i(q,"TD",{});var rt=f(W);Ae=v(rt,"If the associated item is expanded."),rt.forEach(t),q.forEach(t),Re=m(ue),y=i(ue,"TR",{});var F=f(y);X=i(F,"TD",{});var lt=f(X);Ne=v(lt,"hasChildren"),lt.forEach(t),Be=m(F),Z=i(F,"TD",{});var nt=f(Z);ee=i(nt,"CODE",{});var at=f(ee);Oe=v(at,"boolean"),at.forEach(t),nt.forEach(t),qe=m(F),te=i(F,"TD",{});var st=f(te);Fe=v(st,"If the associated item has children."),st.forEach(t),F.forEach(t),ue.forEach(t),pe.forEach(t),ce=m(e),B=i(e,"H2",{});var it=f(B);Me=v(it,"Anatomy"),it.forEach(t),de=m(e),R=i(e,"PRE",{class:!0});var $t=f(R);$t.forEach(t),this.h()},h(){_t(R,"class","language-undefined")},m(e,p){u(e,r,p),o(r,n),u(e,c,p),u(e,l,p),o(l,d),u(e,E,p),u(e,C,p),o(C,g),u(e,k,p),le(x,e,p),u(e,a,p),u(e,b,p),o(b,L),u(e,H,p),u(e,T,p),o(T,M),o(M,_e),o(T,me),o(T,S),o(S,$e),o(T,ve),o(T,z),o(z,Ee),o(T,be),o(T,K),o(K,ke),u(e,ie,p),u(e,N,p),o(N,Te),u(e,fe,p),u(e,P,p),o(P,U),o(U,w),o(w,V),o(V,Ce),o(w,xe),o(w,Y),o(Y,we),o(w,De),o(w,j),o(j,ye),o(P,ge),o(P,A),o(A,D),o(D,G),o(G,He),o(D,Pe),o(D,J),o(J,Q),o(Q,Ie),o(D,Le),o(D,W),o(W,Ae),o(A,Re),o(A,y),o(y,X),o(X,Ne),o(y,Be),o(y,Z),o(Z,ee),o(ee,Oe),o(y,qe),o(y,te),o(te,Fe),u(e,ce,p),u(e,B,p),o(B,Me),u(e,de,p),u(e,R,p),R.innerHTML=mt,he=!0},p:vt,i(e){he||(ne(x.$$.fragment,e),he=!0)},o(e){ae(x.$$.fragment,e),he=!1},d(e){e&&t(r),e&&t(c),e&&t(l),e&&t(E),e&&t(C),e&&t(k),se(x,e),e&&t(a),e&&t(b),e&&t(H),e&&t(T),e&&t(ie),e&&t(N),e&&t(fe),e&&t(P),e&&t(ce),e&&t(B),e&&t(de),e&&t(R)}}}class At extends ht{constructor(r){super(),pt(this,r,null,gt,ut,{})}}export{At as default};