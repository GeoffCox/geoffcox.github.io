import{S as We,i as Xe,s as Ye,k as p,q as c,a as f,y as ne,l as u,m as i,r,h as t,c as m,z as ae,n as Ge,b as o,H as n,A as le,g as oe,d as pe,B as ue}from"../chunks/index.666c980d.js";import{L as ie}from"../chunks/Link.18db2708.js";function Ze(E){let a;return{c(){a=c("MenuBar")},l(l){a=r(l,"MenuBar")},m(l,$){o(l,a,$)},d(l){l&&t(a)}}}function ge(E){let a;return{c(){a=c("MenuButton")},l(l){a=r(l,"MenuButton")},m(l,$){o(l,a,$)},d(l){l&&t(a)}}}function et(E){let a;return{c(){a=c("MenuItem")},l(l){a=r(l,"MenuItem")},m(l,$){o(l,a,$)},d(l){l&&t(a)}}}function tt(E){let a;return{c(){a=c("MenuSeparator")},l(l){a=r(l,"MenuSeparator")},m(l,$){o(l,a,$)},d(l){l&&t(a)}}}function st(E){let a,l,$,P,ce,K,v,T,re,k,O,h,fe,R,L,me,U,w,$e,z,H,ke,F,_e,ve,N,de,Q,D,Ee,V,x,Me,W,y,he,X,A,Le,Y,B,we,Z,d,He,j,be,Ie,G,Pe,Te,g,b,Je=`<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function">focusFirstMenuItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function">focusPreviousMenuItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function">focusNextMenuItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function">focusLastMenuItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,ee,S,De,te,I,Ke=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,se;return h=new ie({props:{href:"menubar",$$slots:{default:[Ze]},$$scope:{ctx:E}}}),L=new ie({props:{href:"menubutton",$$slots:{default:[ge]},$$scope:{ctx:E}}}),w=new ie({props:{href:"menuitem",$$slots:{default:[et]},$$scope:{ctx:E}}}),H=new ie({props:{href:"menuseparator",$$slots:{default:[tt]},$$scope:{ctx:E}}}),{c(){a=p("h1"),l=c("Menu"),$=f(),P=p("p"),ce=c("A list of menu items."),K=f(),v=p("ul"),T=p("li"),re=c("Menu is a building block for menu components:"),k=p("ul"),O=p("li"),ne(h.$$.fragment),fe=f(),R=p("li"),ne(L.$$.fragment),me=f(),U=p("li"),ne(w.$$.fragment),$e=f(),z=p("li"),ne(H.$$.fragment),ke=f(),F=p("li"),_e=c("Manages position based on the reference element"),ve=f(),N=p("li"),de=c("The menu floats above other element via portaling"),Q=f(),D=p("h2"),Ee=c("Props"),V=f(),x=p("p"),Me=c("HTMLDivElement props are included."),W=f(),y=p("h2"),he=c("Events"),X=f(),A=p("p"),Le=c("HTMLDivElement events are included."),Y=f(),B=p("h2"),we=c("Methods"),Z=f(),d=p("p"),He=c("HTMLDivElement "),j=p("code"),be=c("blur"),Ie=c(", and "),G=p("code"),Pe=c("focus"),Te=c(" methods are included."),g=f(),b=p("pre"),ee=f(),S=p("h2"),De=c("Anatomy"),te=f(),I=p("pre"),this.h()},l(e){a=u(e,"H1",{});var s=i(a);l=r(s,"Menu"),s.forEach(t),$=m(e),P=u(e,"P",{});var J=i(P);ce=r(J,"A list of menu items."),J.forEach(t),K=m(e),v=u(e,"UL",{});var M=i(v);T=u(M,"LI",{});var C=i(T);re=r(C,"Menu is a building block for menu components:"),k=u(C,"UL",{});var _=i(k);O=u(_,"LI",{});var xe=i(O);ae(h.$$.fragment,xe),xe.forEach(t),fe=m(_),R=u(_,"LI",{});var ye=i(R);ae(L.$$.fragment,ye),ye.forEach(t),me=m(_),U=u(_,"LI",{});var Ae=i(U);ae(w.$$.fragment,Ae),Ae.forEach(t),$e=m(_),z=u(_,"LI",{});var Be=i(z);ae(H.$$.fragment,Be),Be.forEach(t),_.forEach(t),C.forEach(t),ke=m(M),F=u(M,"LI",{});var Se=i(F);_e=r(Se,"Manages position based on the reference element"),Se.forEach(t),ve=m(M),N=u(M,"LI",{});var Ce=i(N);de=r(Ce,"The menu floats above other element via portaling"),Ce.forEach(t),M.forEach(t),Q=m(e),D=u(e,"H2",{});var qe=i(D);Ee=r(qe,"Props"),qe.forEach(t),V=m(e),x=u(e,"P",{});var Oe=i(x);Me=r(Oe,"HTMLDivElement props are included."),Oe.forEach(t),W=m(e),y=u(e,"H2",{});var Re=i(y);he=r(Re,"Events"),Re.forEach(t),X=m(e),A=u(e,"P",{});var Ue=i(A);Le=r(Ue,"HTMLDivElement events are included."),Ue.forEach(t),Y=m(e),B=u(e,"H2",{});var ze=i(B);we=r(ze,"Methods"),ze.forEach(t),Z=m(e),d=u(e,"P",{});var q=i(d);He=r(q,"HTMLDivElement "),j=u(q,"CODE",{});var Fe=i(j);be=r(Fe,"blur"),Fe.forEach(t),Ie=r(q,", and "),G=u(q,"CODE",{});var Ne=i(G);Pe=r(Ne,"focus"),Ne.forEach(t),Te=r(q," methods are included."),q.forEach(t),g=m(e),b=u(e,"PRE",{class:!0});var Qe=i(b);Qe.forEach(t),ee=m(e),S=u(e,"H2",{});var je=i(S);De=r(je,"Anatomy"),je.forEach(t),te=m(e),I=u(e,"PRE",{class:!0});var Ve=i(I);Ve.forEach(t),this.h()},h(){Ge(b,"class","language-ts"),Ge(I,"class","language-svelte")},m(e,s){o(e,a,s),n(a,l),o(e,$,s),o(e,P,s),n(P,ce),o(e,K,s),o(e,v,s),n(v,T),n(T,re),n(T,k),n(k,O),le(h,O,null),n(k,fe),n(k,R),le(L,R,null),n(k,me),n(k,U),le(w,U,null),n(k,$e),n(k,z),le(H,z,null),n(v,ke),n(v,F),n(F,_e),n(v,ve),n(v,N),n(N,de),o(e,Q,s),o(e,D,s),n(D,Ee),o(e,V,s),o(e,x,s),n(x,Me),o(e,W,s),o(e,y,s),n(y,he),o(e,X,s),o(e,A,s),n(A,Le),o(e,Y,s),o(e,B,s),n(B,we),o(e,Z,s),o(e,d,s),n(d,He),n(d,j),n(j,be),n(d,Ie),n(d,G),n(G,Pe),n(d,Te),o(e,g,s),o(e,b,s),b.innerHTML=Je,o(e,ee,s),o(e,S,s),n(S,De),o(e,te,s),o(e,I,s),I.innerHTML=Ke,se=!0},p(e,[s]){const J={};s&1&&(J.$$scope={dirty:s,ctx:e}),h.$set(J);const M={};s&1&&(M.$$scope={dirty:s,ctx:e}),L.$set(M);const C={};s&1&&(C.$$scope={dirty:s,ctx:e}),w.$set(C);const _={};s&1&&(_.$$scope={dirty:s,ctx:e}),H.$set(_)},i(e){se||(oe(h.$$.fragment,e),oe(L.$$.fragment,e),oe(w.$$.fragment,e),oe(H.$$.fragment,e),se=!0)},o(e){pe(h.$$.fragment,e),pe(L.$$.fragment,e),pe(w.$$.fragment,e),pe(H.$$.fragment,e),se=!1},d(e){e&&t(a),e&&t($),e&&t(P),e&&t(K),e&&t(v),ue(h),ue(L),ue(w),ue(H),e&&t(Q),e&&t(D),e&&t(V),e&&t(x),e&&t(W),e&&t(y),e&&t(X),e&&t(A),e&&t(Y),e&&t(B),e&&t(Z),e&&t(d),e&&t(g),e&&t(b),e&&t(ee),e&&t(S),e&&t(te),e&&t(I)}}}class lt extends We{constructor(a){super(),Xe(this,a,null,st,Ye,{})}}export{lt as default};