import{S as lt,i as at,s as ot,w as re,x as ne,y as ie,f as fe,t as ce,z as de,k as n,l as i,m as f,h as t,n as st,b as h,M as rt,W as nt,X as it,q as _,r as b,a as m,c as u,D as a,B as ft}from"../../../../chunks/index-a1914b40.js";import{C as ct}from"../../../../chunks/Checkbox-6c8befff.js";import{E as dt,L as ht}from"../../../../chunks/Example-8ccefa23.js";import"../../../../chunks/Slider.svelte_svelte_type_style_lang-ae4f99bd.js";/* empty css                                                                     */function pt($){let l;return{c(){l=_("This is a label")},l(o){l=b(o,"This is a label")},m(o,s){h(o,l,s)},d(o){o&&t(l)}}}function _t($){let l,o,s;return o=new ht({props:{disabled:$[0],$$slots:{default:[pt]},$$scope:{ctx:$}}}),{c(){l=n("div"),re(o.$$.fragment),this.h()},l(r){l=i(r,"DIV",{slot:!0});var p=f(l);ne(o.$$.fragment,p),p.forEach(t),this.h()},h(){st(l,"slot","component")},m(r,p){h(r,l,p),ie(o,l,null),s=!0},p(r,p){const E={};p&1&&(E.disabled=r[0]),p&4&&(E.$$scope={dirty:p,ctx:r}),o.$set(E)},i(r){s||(fe(o.$$.fragment,r),s=!0)},o(r){ce(o.$$.fragment,r),s=!1},d(r){r&&t(l),de(o)}}}function bt($){let l;return{c(){l=_("disabled")},l(o){l=b(o,"disabled")},m(o,s){h(o,l,s)},d(o){o&&t(l)}}}function mt($){let l,o,s,r;function p(c){$[1](c)}let E={$$slots:{label:[bt]},$$scope:{ctx:$}};return $[0]!==void 0&&(E.checked=$[0]),o=new ct({props:E}),rt.push(()=>nt(o,"checked",p,$[0])),{c(){l=n("div"),re(o.$$.fragment),this.h()},l(c){l=i(c,"DIV",{slot:!0});var v=f(l);ne(o.$$.fragment,v),v.forEach(t),this.h()},h(){st(l,"slot","options")},m(c,v){h(c,l,v),ie(o,l,null),r=!0},p(c,v){const T={};v&4&&(T.$$scope={dirty:v,ctx:c}),!s&&v&1&&(s=!0,T.checked=c[0],it(()=>s=!1)),o.$set(T)},i(c){r||(fe(o.$$.fragment,c),r=!0)},o(c){ce(o.$$.fragment,c),r=!1},d(c){c&&t(l),de(o)}}}function ut($){let l,o;return l=new dt({props:{$$slots:{options:[mt],component:[_t]},$$scope:{ctx:$}}}),{c(){re(l.$$.fragment)},l(s){ne(l.$$.fragment,s)},m(s,r){ie(l,s,r),o=!0},p(s,[r]){const p={};r&5&&(p.$$scope={dirty:r,ctx:s}),l.$set(p)},i(s){o||(fe(l.$$.fragment,s),o=!0)},o(s){ce(l.$$.fragment,s),o=!1},d(s){de(l,s)}}}function $t($,l,o){let s=!1;function r(p){s=p,o(0,s)}return[s,r]}class vt extends lt{constructor(l){super(),at(this,l,$t,ut,ot,{})}}function Et($){let l,o,s,r,p,E,c,v,T,he,J,H,N,pe,_e,P,be,K,A,me,Q,L,R,k,S,ue,$e,C,ve,Ee,q,Te,ke,F,D,O,De,He,V,Le,xe,Y,ye,Z,B,we,g,x,z,y,U,Ae,Be,W,Me,Ie,X,w,j,Ne,Pe,G,Re,ee;return c=new vt({}),{c(){l=n("h1"),o=_("Label"),s=m(),r=n("p"),p=_("A styled HTML label element."),E=m(),re(c.$$.fragment),v=m(),T=n("h2"),he=_("Features"),J=m(),H=n("ul"),N=n("li"),pe=_("The label inherits color, when disabled opacity is set to 0.5."),_e=m(),P=n("li"),be=_("HTML label props are forwarded and events are bubbled."),K=m(),A=n("h2"),me=_("Props"),Q=m(),L=n("table"),R=n("thead"),k=n("tr"),S=n("th"),ue=_("Name"),$e=m(),C=n("th"),ve=_("Type"),Ee=m(),q=n("th"),Te=_("Description"),ke=m(),F=n("tbody"),D=n("tr"),O=n("td"),De=_("disabled"),He=m(),V=n("td"),Le=_("boolean"),xe=m(),Y=n("td"),ye=_("Disables the label making it look inactive"),Z=m(),B=n("h2"),we=_("Slots"),g=m(),x=n("table"),z=n("thead"),y=n("tr"),U=n("th"),Ae=_("Name"),Be=m(),W=n("th"),Me=_("Description"),Ie=m(),X=n("tbody"),w=n("tr"),j=n("td"),Ne=_("(default)"),Pe=m(),G=n("td"),Re=_("The content to display within the label")},l(e){l=i(e,"H1",{});var d=f(l);o=b(d,"Label"),d.forEach(t),s=u(e),r=i(e,"P",{});var Se=f(r);p=b(Se,"A styled HTML label element."),Se.forEach(t),E=u(e),ne(c.$$.fragment,e),v=u(e),T=i(e,"H2",{});var Ce=f(T);he=b(Ce,"Features"),Ce.forEach(t),J=u(e),H=i(e,"UL",{});var te=f(H);N=i(te,"LI",{});var qe=f(N);pe=b(qe,"The label inherits color, when disabled opacity is set to 0.5."),qe.forEach(t),_e=u(te),P=i(te,"LI",{});var Fe=f(P);be=b(Fe,"HTML label props are forwarded and events are bubbled."),Fe.forEach(t),te.forEach(t),K=u(e),A=i(e,"H2",{});var Oe=f(A);me=b(Oe,"Props"),Oe.forEach(t),Q=u(e),L=i(e,"TABLE",{});var le=f(L);R=i(le,"THEAD",{});var Ve=f(R);k=i(Ve,"TR",{});var M=f(k);S=i(M,"TH",{});var Ye=f(S);ue=b(Ye,"Name"),Ye.forEach(t),$e=u(M),C=i(M,"TH",{});var ze=f(C);ve=b(ze,"Type"),ze.forEach(t),Ee=u(M),q=i(M,"TH",{});var Ue=f(q);Te=b(Ue,"Description"),Ue.forEach(t),M.forEach(t),Ve.forEach(t),ke=u(le),F=i(le,"TBODY",{});var We=f(F);D=i(We,"TR",{});var I=f(D);O=i(I,"TD",{});var Xe=f(O);De=b(Xe,"disabled"),Xe.forEach(t),He=u(I),V=i(I,"TD",{});var je=f(V);Le=b(je,"boolean"),je.forEach(t),xe=u(I),Y=i(I,"TD",{});var Ge=f(Y);ye=b(Ge,"Disables the label making it look inactive"),Ge.forEach(t),I.forEach(t),We.forEach(t),le.forEach(t),Z=u(e),B=i(e,"H2",{});var Je=f(B);we=b(Je,"Slots"),Je.forEach(t),g=u(e),x=i(e,"TABLE",{});var ae=f(x);z=i(ae,"THEAD",{});var Ke=f(z);y=i(Ke,"TR",{});var oe=f(y);U=i(oe,"TH",{});var Qe=f(U);Ae=b(Qe,"Name"),Qe.forEach(t),Be=u(oe),W=i(oe,"TH",{});var Ze=f(W);Me=b(Ze,"Description"),Ze.forEach(t),oe.forEach(t),Ke.forEach(t),Ie=u(ae),X=i(ae,"TBODY",{});var ge=f(X);w=i(ge,"TR",{});var se=f(w);j=i(se,"TD",{});var et=f(j);Ne=b(et,"(default)"),et.forEach(t),Pe=u(se),G=i(se,"TD",{});var tt=f(G);Re=b(tt,"The content to display within the label"),tt.forEach(t),se.forEach(t),ge.forEach(t),ae.forEach(t)},m(e,d){h(e,l,d),a(l,o),h(e,s,d),h(e,r,d),a(r,p),h(e,E,d),ie(c,e,d),h(e,v,d),h(e,T,d),a(T,he),h(e,J,d),h(e,H,d),a(H,N),a(N,pe),a(H,_e),a(H,P),a(P,be),h(e,K,d),h(e,A,d),a(A,me),h(e,Q,d),h(e,L,d),a(L,R),a(R,k),a(k,S),a(S,ue),a(k,$e),a(k,C),a(C,ve),a(k,Ee),a(k,q),a(q,Te),a(L,ke),a(L,F),a(F,D),a(D,O),a(O,De),a(D,He),a(D,V),a(V,Le),a(D,xe),a(D,Y),a(Y,ye),h(e,Z,d),h(e,B,d),a(B,we),h(e,g,d),h(e,x,d),a(x,z),a(z,y),a(y,U),a(U,Ae),a(y,Be),a(y,W),a(W,Me),a(x,Ie),a(x,X),a(X,w),a(w,j),a(j,Ne),a(w,Pe),a(w,G),a(G,Re),ee=!0},p:ft,i(e){ee||(fe(c.$$.fragment,e),ee=!0)},o(e){ce(c.$$.fragment,e),ee=!1},d(e){e&&t(l),e&&t(s),e&&t(r),e&&t(E),de(c,e),e&&t(v),e&&t(T),e&&t(J),e&&t(H),e&&t(K),e&&t(A),e&&t(Q),e&&t(L),e&&t(Z),e&&t(B),e&&t(g),e&&t(x)}}}class xt extends lt{constructor(l){super(),at(this,l,null,Et,ot,{})}}export{xt as default};