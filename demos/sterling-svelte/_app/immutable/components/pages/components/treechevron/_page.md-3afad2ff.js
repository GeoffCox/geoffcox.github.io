import{S as ut,i as _t,s as mt,w as oe,x as le,y as re,f as ae,t as ne,z as se,C as Me,k as s,l as i,m as f,h as l,n as _e,b as u,D as ht,a as _,c as m,H as dt,q as $,r as v,F as r,B as Ue}from"../../../../chunks/index-dd21ae8f.js";import{C as pt}from"../../../../chunks/Checkbox-f847d083.js";import{P as bt}from"../../../../chunks/Playground-d7c24942.js";import{T as Et}from"../../../../chunks/TreeChevron-f6c2e486.js";function kt(d){let t,a,n;return a=new Et({props:{expanded:d[1],hasChildren:d[2]}}),{c(){t=s("div"),oe(a.$$.fragment),this.h()},l(o){t=i(o,"DIV",{slot:!0});var h=f(t);le(a.$$.fragment,h),h.forEach(l),this.h()},h(){_e(t,"slot","component")},m(o,h){u(o,t,h),re(a,t,null),n=!0},p(o,h){const b={};h&2&&(b.expanded=o[1]),h&4&&(b.hasChildren=o[2]),a.$set(b)},i(o){n||(ae(a.$$.fragment,o),n=!0)},o(o){ne(a.$$.fragment,o),n=!1},d(o){o&&l(t),se(a)}}}function Tt(d){let t,a;return{c(){t=s("span"),a=$("expanded"),this.h()},l(n){t=i(n,"SPAN",{slot:!0});var o=f(t);a=v(o,"expanded"),o.forEach(l),this.h()},h(){_e(t,"slot","label")},m(n,o){u(n,t,o),r(t,a)},p:Ue,d(n){n&&l(t)}}}function Ct(d){let t,a;return{c(){t=s("span"),a=$("hasChildren"),this.h()},l(n){t=i(n,"SPAN",{slot:!0});var o=f(t);a=v(o,"hasChildren"),o.forEach(l),this.h()},h(){_e(t,"slot","label")},m(n,o){u(n,t,o),r(t,a)},p:Ue,d(n){n&&l(t)}}}function xt(d){let t,a,n,o,h,b;function C(c){d[3](c)}let g={$$slots:{label:[Tt]},$$scope:{ctx:d}};d[1]!==void 0&&(g.checked=d[1]),t=new pt({props:g}),Me.push(()=>ht(t,"checked",C,d[1]));function k(c){d[4](c)}let x={$$slots:{label:[Ct]},$$scope:{ctx:d}};return d[2]!==void 0&&(x.checked=d[2]),o=new pt({props:x}),Me.push(()=>ht(o,"checked",k,d[2])),{c(){oe(t.$$.fragment),n=_(),oe(o.$$.fragment)},l(c){le(t.$$.fragment,c),n=m(c),le(o.$$.fragment,c)},m(c,E){re(t,c,E),u(c,n,E),re(o,c,E),b=!0},p(c,E){const A={};E&64&&(A.$$scope={dirty:E,ctx:c}),!a&&E&2&&(a=!0,A.checked=c[1],dt(()=>a=!1)),t.$set(A);const P={};E&64&&(P.$$scope={dirty:E,ctx:c}),!h&&E&4&&(h=!0,P.checked=c[2],dt(()=>h=!1)),o.$set(P)},i(c){b||(ae(t.$$.fragment,c),ae(o.$$.fragment,c),b=!0)},o(c){ne(t.$$.fragment,c),ne(o.$$.fragment,c),b=!1},d(c){se(t,c),c&&l(n),se(o,c)}}}function wt(d){let t,a,n={$$slots:{options:[xt],component:[kt]},$$scope:{ctx:d}};return t=new bt({props:n}),d[5](t),{c(){oe(t.$$.fragment)},l(o){le(t.$$.fragment,o)},m(o,h){re(t,o,h),a=!0},p(o,[h]){const b={};h&70&&(b.$$scope={dirty:h,ctx:o}),t.$set(b)},i(o){a||(ae(t.$$.fragment,o),a=!0)},o(o){ne(t.$$.fragment,o),a=!1},d(o){d[5](null),se(t,o)}}}function Dt(d,t,a){let n,o=!1,h=!0;function b(k){o=k,a(1,o)}function C(k){h=k,a(2,h)}function g(k){Me[k?"unshift":"push"](()=>{n=k,a(0,n)})}return[n,o,h,b,C,g]}class yt extends ut{constructor(t){super(),_t(this,t,Dt,wt,mt,{})}}function gt(d){let t,a,n,o,h,b,C,g,k,x,c,E,A,P,T,q,me,$e,z,ve,be,M,Ee,ke,U,Te,ie,R,Ce,fe,H,V,w,Y,xe,we,j,De,ye,G,ge,Pe,L,D,J,He,Ie,K,Q,Ae,Le,W,Ne,Re,y,X,Se,Be,Z,ee,Fe,Oe,te,qe,ce,S,ze,he,N,$t='<code class="language-undefined">TreeChevron</code>',de;return x=new yt({}),{c(){t=s("h1"),a=$("TreeChevron"),n=_(),o=s("p"),h=$("A chevron indicating expanded/collapsed state for items in a Tree."),b=_(),C=s("h2"),g=$("Playground"),k=_(),oe(x.$$.fragment),c=_(),E=s("h2"),A=$("Features"),P=_(),T=s("ul"),q=s("li"),me=$("Displays a chevron for items with children and a bullet for items without."),$e=_(),z=s("li"),ve=$("Chevron points right when collapsed, points down when expanded."),be=_(),M=s("li"),Ee=$("Chevron changes are animated as rotation."),ke=_(),U=s("li"),Te=$("No animation occurs for prefers-reduced-motion."),ie=_(),R=s("h2"),Ce=$("Props"),fe=_(),H=s("table"),V=s("thead"),w=s("tr"),Y=s("th"),xe=$("Name"),we=_(),j=s("th"),De=$("Type"),ye=_(),G=s("th"),ge=$("Description"),Pe=_(),L=s("tbody"),D=s("tr"),J=s("td"),He=$("expanded"),Ie=_(),K=s("td"),Q=s("code"),Ae=$("boolean"),Le=_(),W=s("td"),Ne=$("If the associated item is expanded."),Re=_(),y=s("tr"),X=s("td"),Se=$("hasChildren"),Be=_(),Z=s("td"),ee=s("code"),Fe=$("boolean"),Oe=_(),te=s("td"),qe=$("If the associated item has children."),ce=_(),S=s("h2"),ze=$("Anatomy"),he=_(),N=s("pre"),this.h()},l(e){t=i(e,"H1",{});var p=f(t);a=v(p,"TreeChevron"),p.forEach(l),n=m(e),o=i(e,"P",{});var Ve=f(o);h=v(Ve,"A chevron indicating expanded/collapsed state for items in a Tree."),Ve.forEach(l),b=m(e),C=i(e,"H2",{});var Ye=f(C);g=v(Ye,"Playground"),Ye.forEach(l),k=m(e),le(x.$$.fragment,e),c=m(e),E=i(e,"H2",{});var je=f(E);A=v(je,"Features"),je.forEach(l),P=m(e),T=i(e,"UL",{});var I=f(T);q=i(I,"LI",{});var Ge=f(q);me=v(Ge,"Displays a chevron for items with children and a bullet for items without."),Ge.forEach(l),$e=m(I),z=i(I,"LI",{});var Je=f(z);ve=v(Je,"Chevron points right when collapsed, points down when expanded."),Je.forEach(l),be=m(I),M=i(I,"LI",{});var Ke=f(M);Ee=v(Ke,"Chevron changes are animated as rotation."),Ke.forEach(l),ke=m(I),U=i(I,"LI",{});var Qe=f(U);Te=v(Qe,"No animation occurs for prefers-reduced-motion."),Qe.forEach(l),I.forEach(l),ie=m(e),R=i(e,"H2",{});var We=f(R);Ce=v(We,"Props"),We.forEach(l),fe=m(e),H=i(e,"TABLE",{});var pe=f(H);V=i(pe,"THEAD",{});var Xe=f(V);w=i(Xe,"TR",{});var B=f(w);Y=i(B,"TH",{});var Ze=f(Y);xe=v(Ze,"Name"),Ze.forEach(l),we=m(B),j=i(B,"TH",{});var et=f(j);De=v(et,"Type"),et.forEach(l),ye=m(B),G=i(B,"TH",{});var tt=f(G);ge=v(tt,"Description"),tt.forEach(l),B.forEach(l),Xe.forEach(l),Pe=m(pe),L=i(pe,"TBODY",{});var ue=f(L);D=i(ue,"TR",{});var F=f(D);J=i(F,"TD",{});var ot=f(J);He=v(ot,"expanded"),ot.forEach(l),Ie=m(F),K=i(F,"TD",{});var lt=f(K);Q=i(lt,"CODE",{});var rt=f(Q);Ae=v(rt,"boolean"),rt.forEach(l),lt.forEach(l),Le=m(F),W=i(F,"TD",{});var at=f(W);Ne=v(at,"If the associated item is expanded."),at.forEach(l),F.forEach(l),Re=m(ue),y=i(ue,"TR",{});var O=f(y);X=i(O,"TD",{});var nt=f(X);Se=v(nt,"hasChildren"),nt.forEach(l),Be=m(O),Z=i(O,"TD",{});var st=f(Z);ee=i(st,"CODE",{});var it=f(ee);Fe=v(it,"boolean"),it.forEach(l),st.forEach(l),Oe=m(O),te=i(O,"TD",{});var ft=f(te);qe=v(ft,"If the associated item has children."),ft.forEach(l),O.forEach(l),ue.forEach(l),pe.forEach(l),ce=m(e),S=i(e,"H2",{});var ct=f(S);ze=v(ct,"Anatomy"),ct.forEach(l),he=m(e),N=i(e,"PRE",{class:!0});var vt=f(N);vt.forEach(l),this.h()},h(){_e(N,"class","language-undefined")},m(e,p){u(e,t,p),r(t,a),u(e,n,p),u(e,o,p),r(o,h),u(e,b,p),u(e,C,p),r(C,g),u(e,k,p),re(x,e,p),u(e,c,p),u(e,E,p),r(E,A),u(e,P,p),u(e,T,p),r(T,q),r(q,me),r(T,$e),r(T,z),r(z,ve),r(T,be),r(T,M),r(M,Ee),r(T,ke),r(T,U),r(U,Te),u(e,ie,p),u(e,R,p),r(R,Ce),u(e,fe,p),u(e,H,p),r(H,V),r(V,w),r(w,Y),r(Y,xe),r(w,we),r(w,j),r(j,De),r(w,ye),r(w,G),r(G,ge),r(H,Pe),r(H,L),r(L,D),r(D,J),r(J,He),r(D,Ie),r(D,K),r(K,Q),r(Q,Ae),r(D,Le),r(D,W),r(W,Ne),r(L,Re),r(L,y),r(y,X),r(X,Se),r(y,Be),r(y,Z),r(Z,ee),r(ee,Fe),r(y,Oe),r(y,te),r(te,qe),u(e,ce,p),u(e,S,p),r(S,ze),u(e,he,p),u(e,N,p),N.innerHTML=$t,de=!0},p:Ue,i(e){de||(ae(x.$$.fragment,e),de=!0)},o(e){ne(x.$$.fragment,e),de=!1},d(e){e&&l(t),e&&l(n),e&&l(o),e&&l(b),e&&l(C),e&&l(k),se(x,e),e&&l(c),e&&l(E),e&&l(P),e&&l(T),e&&l(ie),e&&l(R),e&&l(fe),e&&l(H),e&&l(ce),e&&l(S),e&&l(he),e&&l(N)}}}class Lt extends ut{constructor(t){super(),_t(this,t,null,gt,mt,{})}}export{Lt as default};