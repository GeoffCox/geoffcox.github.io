import{S as Et,i as Ct,s as Tt,k as i,l as _,m as d,h as u,b as He,f as re,t as ae,d as Dt,o as zt,C as At,D as Bt,E as $t,q as b,a as p,w as wt,r as g,c as v,x as Lt,n as l,F as e,y as xt,G as St,H as Vt,I as Mt,J as Pt,K as Ft,L as Ot,z as Rt,g as Ut}from"../../chunks/index-a2f545b7.js";import{d as qt,l as Ht}from"../../chunks/TextArea.svelte_svelte_type_style_lang-ae4f99bd.js";/* empty css                                                        *//* empty css                                                       *//* empty css                                                          *//* empty css                                                       *//* empty css                                                       *//* empty css                                                        */import{S as jt}from"../../chunks/Select-5e52d2f9.js";/* empty css                                                     *//* empty css                                                         *//* empty css                                                      */import{b as k}from"../../chunks/paths-b4419565.js";const bt=(n,o)=>{Object.keys(o).map(r=>{n.style.setProperty(r,o[r]?`${o[r]}`:null)})},je=(n,o)=>{const r=o.atDocumentRoot?document.documentElement:n;return bt(r,o.theme),{update:s=>{s&&bt(document.documentElement,s==null?void 0:s.theme)}}},Ge=(n,o)=>je(n,{...o,theme:qt}),Je=(n,o)=>je(n,{...o,theme:Ht}),gt=(n,o)=>{let r=o==null?void 0:o.dark;(o==null?void 0:o.dark)===void 0&&(r=window.matchMedia("(prefers-color-scheme: dark)").matches),r?Ge(n,o):Je(n,o)},kt=(n,o,r)=>{let s=r==null?void 0:r.dark;(r==null?void 0:r.dark)===void 0&&(s=n.matches),s?Ge(o,r):Je(o,r)},Gt=(n,o)=>{let r=f=>kt(f,n,o);const s=window.matchMedia("(prefers-color-scheme: dark)");return s.addEventListener("change",r),gt(n,o),{destory(){s.removeEventListener("change",r)},update(f){s.removeEventListener("change",r),r=I=>kt(I,n,f),s.addEventListener("change",r),gt(n,f)}}},t={neutral0:"hsl(209, 46%, 0%)",neutral10:"hsl(209, 46%, 12%)",neutral15:"hsl(209, 46%, 15%)",neutral20:"hsl(209, 46%, 20%)",neutral30:"hsl(209, 46%, 30%)",neutral45:"hsl(209, 46%, 45%)",neutral60:"hsl(209, 46%, 60%)",neutral75:"hsl(209, 46%, 75%)",neutral85:"hsl(209, 46%, 85%)",neutral92:"hsl(209, 46%, 92%)",neutral96:"hsl(209, 46%, 96%)",neutral98:"hsl(209, 46%, 98%)",neutral100:"hsl(209, 46%, 100%)"},Jt={"--Common__background-color":t.neutral15,"--Common__border-color":t.neutral92,"--Common__border-radius":"0","--Common__border-style":"solid","--Common__border-width":"2px","--Common__color":t.neutral100,"--Common__background-color--hover":t.neutral15,"--Common__border-color--hover":t.neutral96,"--Common__color--hover":t.neutral100,"--Common__background-color--focus":t.neutral45,"--Common__border-color--focus":t.neutral100,"--Common__color--focus":t.neutral100,"--Common__outline-color":t.neutral100,"--Common__outline-offset":"0","--Common__outline-style":"solid","--Common__outline-width":"2px","--Common__background-color--disabled":t.neutral45,"--Common__border-color--disabled":t.neutral92,"--Common__color--disabled":t.neutral92,"--Layer__background-color--1":t.neutral20,"--Layer__color--1":t.neutral100,"--Layer__background-color--2":t.neutral10,"--Layer__color--2":t.neutral100,"--Layer__background-color--3":t.neutral45,"--Layer__color--3":t.neutral100,"--Button__background-color":t.neutral45,"--Button__border-color":t.neutral92,"--Button__border-radius":"8px","--Button__border-style":"solid","--Button__border-width":"2px","--Button__color":t.neutral100,"--Button__background-color--hover":t.neutral45,"--Button__border-color--hover":t.neutral96,"--Button__color--hover":t.neutral100,"--Button__background-color--active":t.neutral60,"--Button__border-color--active":t.neutral98,"--Button__color--active":t.neutral98,"--Button__background-color--focus":t.neutral45,"--Button__border-color--focus":t.neutral100,"--Button__color--focus":t.neutral100,"--Button__background-color--disabled":t.neutral75,"--Button__border-color--disabled":t.neutral92,"--Button__color--disabled":t.neutral92,"--Input__background-color":t.neutral30,"--Input__border-color":t.neutral92,"--Input__border-radius":"3px","--Input__border-style":"solid","--Input__border-width":"2px","--Input__color":t.neutral100,"--Input__background-color--hover":t.neutral15,"--Input__border-color--hover":t.neutral96,"--Input__color--hover":t.neutral100,"--Input__background-color--focus":t.neutral15,"--Input__border-color--focus":t.neutral100,"--Input__color--focus":t.neutral100,"--Input__background-color--selected":t.neutral60,"--Input__border-color--selected":t.neutral98,"--Input__color--selected":t.neutral100,"--Input__background-color--disabled":t.neutral45,"--Input__border-color--disabled":t.neutral85,"--Input__color--disabled":t.neutral85,"--Display__background-color":t.neutral30,"--Display__border-color":t.neutral92,"--Display__color":t.neutral100,"--Display__color--subtle":t.neutral96,"--Display__color--faint":t.neutral45,"--Display__color--disabled":t.neutral45,"--Display__color--info":"#025E73","--Display__color--progress":"#0099DD","--Display__color--success":"#03A64A","--Display__color--warning":"#F2A71B","--Display__color--error":"#A62B1F"};function It(n){let o,r,s,f,I,D,x,X,L,z,ee,te,B,a,w,oe,h,y,E,A,S,ne,ce,V,ue,ie,M,_e,de,P,he,fe,F,me,pe,O,ve,be,R,ge,ke,U,Ie,ye,q,Ee,Ce,H,Te,De,j,ze,Ae,G,Be,$e,J,we,Le,K,xe,Se,N,Ve,Me,Q,Pe,Fe,W,Oe,Re,Y,le,Z,Ue,Ke;function yt(m){n[5](m)}let Ne={items:n[2],$$slots:{label:[Kt]},$$scope:{ctx:n}};n[0]!==void 0&&(Ne.selectedIndex=n[0]),z=new jt({props:Ne}),At.push(()=>Bt(z,"selectedIndex",yt,n[0]));const qe=n[4].default,C=$t(qe,n,n[6],null);return{c(){o=i("div"),r=i("div"),s=i("div"),f=b("sterling-svelte (in progress)"),I=p(),D=i("div"),x=b("A modern, accessible, and lightweight UI component library for Svelte."),X=p(),L=i("div"),wt(z.$$.fragment),te=p(),B=i("div"),a=i("div"),w=i("a"),oe=b("Overview"),h=p(),y=i("a"),E=b("Theme"),A=p(),S=i("a"),ne=b("Button"),ce=p(),V=i("a"),ue=b("Checkbox"),ie=p(),M=i("a"),_e=b("Dialog"),de=p(),P=i("a"),he=b("Input"),fe=p(),F=i("a"),me=b("Label"),pe=p(),O=i("a"),ve=b("List"),be=p(),R=i("a"),ge=b("Progress"),ke=p(),U=i("a"),Ie=b("Radio"),ye=p(),q=i("a"),Ee=b("Select"),Ce=p(),H=i("a"),Te=b("Slider"),De=p(),j=i("a"),ze=b("Switch"),Ae=p(),G=i("a"),Be=b("Tab"),$e=p(),J=i("a"),we=b("TabList"),Le=p(),K=i("a"),xe=b("TextArea"),Se=p(),N=i("a"),Ve=b("Tree"),Me=p(),Q=i("a"),Pe=b("TreeChevron"),Fe=p(),W=i("a"),Oe=b("TreeItem"),Re=p(),Y=i("div"),C&&C.c(),this.h()},l(m){o=_(m,"DIV",{class:!0});var T=d(o);r=_(T,"DIV",{class:!0});var $=d(r);s=_($,"DIV",{class:!0});var Qe=d(s);f=g(Qe,"sterling-svelte (in progress)"),Qe.forEach(u),I=v($),D=_($,"DIV",{class:!0});var We=d(D);x=g(We,"A modern, accessible, and lightweight UI component library for Svelte."),We.forEach(u),X=v($),L=_($,"DIV",{class:!0});var Xe=d(L);Lt(z.$$.fragment,Xe),Xe.forEach(u),$.forEach(u),te=v(T),B=_(T,"DIV",{class:!0});var se=d(B);a=_(se,"DIV",{class:!0});var c=d(a);w=_(c,"A",{href:!0,class:!0});var Ye=d(w);oe=g(Ye,"Overview"),Ye.forEach(u),h=v(c),y=_(c,"A",{href:!0,class:!0});var Ze=d(y);E=g(Ze,"Theme"),Ze.forEach(u),A=v(c),S=_(c,"A",{href:!0,class:!0});var et=d(S);ne=g(et,"Button"),et.forEach(u),ce=v(c),V=_(c,"A",{href:!0,class:!0});var tt=d(V);ue=g(tt,"Checkbox"),tt.forEach(u),ie=v(c),M=_(c,"A",{href:!0,class:!0});var ot=d(M);_e=g(ot,"Dialog"),ot.forEach(u),de=v(c),P=_(c,"A",{href:!0,class:!0});var rt=d(P);he=g(rt,"Input"),rt.forEach(u),fe=v(c),F=_(c,"A",{href:!0,class:!0});var lt=d(F);me=g(lt,"Label"),lt.forEach(u),pe=v(c),O=_(c,"A",{href:!0,class:!0});var st=d(O);ve=g(st,"List"),st.forEach(u),be=v(c),R=_(c,"A",{href:!0,class:!0});var at=d(R);ge=g(at,"Progress"),at.forEach(u),ke=v(c),U=_(c,"A",{href:!0,class:!0});var nt=d(U);Ie=g(nt,"Radio"),nt.forEach(u),ye=v(c),q=_(c,"A",{href:!0,class:!0});var ct=d(q);Ee=g(ct,"Select"),ct.forEach(u),Ce=v(c),H=_(c,"A",{href:!0,class:!0});var ut=d(H);Te=g(ut,"Slider"),ut.forEach(u),De=v(c),j=_(c,"A",{href:!0,class:!0});var it=d(j);ze=g(it,"Switch"),it.forEach(u),Ae=v(c),G=_(c,"A",{href:!0,class:!0});var _t=d(G);Be=g(_t,"Tab"),_t.forEach(u),$e=v(c),J=_(c,"A",{href:!0,class:!0});var dt=d(J);we=g(dt,"TabList"),dt.forEach(u),Le=v(c),K=_(c,"A",{href:!0,class:!0});var ht=d(K);xe=g(ht,"TextArea"),ht.forEach(u),Se=v(c),N=_(c,"A",{href:!0,class:!0});var ft=d(N);Ve=g(ft,"Tree"),ft.forEach(u),Me=v(c),Q=_(c,"A",{href:!0,class:!0});var mt=d(Q);Pe=g(mt,"TreeChevron"),mt.forEach(u),Fe=v(c),W=_(c,"A",{href:!0,class:!0});var pt=d(W);Oe=g(pt,"TreeItem"),pt.forEach(u),c.forEach(u),Re=v(se),Y=_(se,"DIV",{class:!0});var vt=d(Y);C&&C.l(vt),vt.forEach(u),se.forEach(u),T.forEach(u),this.h()},h(){l(s,"class","title svelte-9hpczi"),l(D,"class","subtitle svelte-9hpczi"),l(L,"class","select-theme svelte-9hpczi"),l(r,"class","header svelte-9hpczi"),l(w,"href",k+"/"),l(w,"class","svelte-9hpczi"),l(y,"href",k+"/theme"),l(y,"class","svelte-9hpczi"),l(S,"href",k+"/components/button"),l(S,"class","svelte-9hpczi"),l(V,"href",k+"/components/checkbox"),l(V,"class","svelte-9hpczi"),l(M,"href",k+"/components/dialog"),l(M,"class","svelte-9hpczi"),l(P,"href",k+"/components/input"),l(P,"class","svelte-9hpczi"),l(F,"href",k+"/components/label"),l(F,"class","svelte-9hpczi"),l(O,"href",k+"/components/list"),l(O,"class","svelte-9hpczi"),l(R,"href",k+"/components/progress"),l(R,"class","svelte-9hpczi"),l(U,"href",k+"/components/radio"),l(U,"class","svelte-9hpczi"),l(q,"href",k+"/components/select"),l(q,"class","svelte-9hpczi"),l(H,"href",k+"/components/slider"),l(H,"class","svelte-9hpczi"),l(j,"href",k+"/components/switch"),l(j,"class","svelte-9hpczi"),l(G,"href",k+"/components/tab"),l(G,"class","svelte-9hpczi"),l(J,"href",k+"/components/tablist"),l(J,"class","svelte-9hpczi"),l(K,"href",k+"/components/textarea"),l(K,"class","svelte-9hpczi"),l(N,"href",k+"/components/tree"),l(N,"class","svelte-9hpczi"),l(Q,"href",k+"/components/treechevron"),l(Q,"class","svelte-9hpczi"),l(W,"href",k+"/components/treeitem"),l(W,"class","svelte-9hpczi"),l(a,"class","nav svelte-9hpczi"),l(Y,"class","component svelte-9hpczi"),l(B,"class","content svelte-9hpczi"),l(o,"class","layout svelte-9hpczi")},m(m,T){He(m,o,T),e(o,r),e(r,s),e(s,f),e(r,I),e(r,D),e(D,x),e(r,X),e(r,L),xt(z,L,null),e(o,te),e(o,B),e(B,a),e(a,w),e(w,oe),e(a,h),e(a,y),e(y,E),e(a,A),e(a,S),e(S,ne),e(a,ce),e(a,V),e(V,ue),e(a,ie),e(a,M),e(M,_e),e(a,de),e(a,P),e(P,he),e(a,fe),e(a,F),e(F,me),e(a,pe),e(a,O),e(O,ve),e(a,be),e(a,R),e(R,ge),e(a,ke),e(a,U),e(U,Ie),e(a,ye),e(a,q),e(q,Ee),e(a,Ce),e(a,H),e(H,Te),e(a,De),e(a,j),e(j,ze),e(a,Ae),e(a,G),e(G,Be),e(a,$e),e(a,J),e(J,we),e(a,Le),e(a,K),e(K,xe),e(a,Se),e(a,N),e(N,Ve),e(a,Me),e(a,Q),e(Q,Pe),e(a,Fe),e(a,W),e(W,Oe),e(B,Re),e(B,Y),C&&C.m(Y,null),Z=!0,Ue||(Ke=St(le=n[3].call(null,o,{index:n[0]})),Ue=!0)},p(m,T){const $={};T&64&&($.$$scope={dirty:T,ctx:m}),!ee&&T&1&&(ee=!0,$.selectedIndex=m[0],Vt(()=>ee=!1)),z.$set($),C&&C.p&&(!Z||T&64)&&Mt(C,qe,m,m[6],Z?Ft(qe,m[6],T,null):Pt(m[6]),null),le&&Ot(le.update)&&T&1&&le.update.call(null,{index:m[0]})},i(m){Z||(re(z.$$.fragment,m),re(C,m),Z=!0)},o(m){ae(z.$$.fragment,m),ae(C,m),Z=!1},d(m){m&&u(o),Rt(z),C&&C.d(m),Ue=!1,Ke()}}}function Kt(n){let o;return{c(){o=b("Theme")},l(r){o=g(r,"Theme")},m(r,s){He(r,o,s)},d(r){r&&u(o)}}}function Nt(n){let o,r,s=n[1]&&It(n);return{c(){o=i("div"),s&&s.c()},l(f){o=_(f,"DIV",{});var I=d(o);s&&s.l(I),I.forEach(u)},m(f,I){He(f,o,I),s&&s.m(o,null),r=!0},p(f,[I]){f[1]?s?(s.p(f,I),I&2&&re(s,1)):(s=It(f),s.c(),re(s,1),s.m(o,null)):s&&(Ut(),ae(s,1,1,()=>{s=null}),Dt())},i(f){r||(re(s),r=!0)},o(f){ae(s),r=!1},d(f){f&&u(o),s&&s.d()}}}function Qt(n,o,r){let{$$slots:s={},$$scope:f}=o;const I=["automatic (light/dark)","light","dark","ocean (dark)"];let D=0,x=!1;const X=(h,y)=>{const E={atDocumentRoot:!0};switch(y){case 1:Je(h,E);break;case 2:Ge(h,E);break;case 3:je(h,{...E,theme:Jt});break;case 0:default:Gt(h,E);break}},L=(h,y)=>(X(h,y.index),{destroy(){},update(E){X(h,E.index)}}),z=()=>{const h=document.cookie.split(";"),y={};return h.forEach(E=>{const A=E.split("=");A[0]&&(y[A[0]]=A[1]??"")}),y},ee=30*24*60*60*1e3,te=(h,y,E=ee)=>{const A=new Date;A.setTime(A.getTime()+E),document.cookie=`${h}=${y};expires=${A.toUTCString()};path=/`},B=()=>document?z()["sterling-docs-theme"]:"",a=h=>{document&&te("sterling-docs-theme",h)},w=()=>{const h=I.indexOf(B());h!==-1&&r(0,D=h)};zt(()=>{r(1,x=!0),w()});function oe(h){D=h,r(0,D)}return n.$$set=h=>{"$$scope"in h&&r(6,f=h.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&x&&a(I[D])},[D,x,I,L,s,oe,f]}class uo extends Et{constructor(o){super(),Ct(this,o,Qt,Nt,Tt,{})}}export{uo as default};