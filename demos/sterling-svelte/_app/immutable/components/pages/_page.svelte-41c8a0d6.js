import{S as $o,i as Bo,s as qo,k as o,q as s,a as r,l as a,m as n,r as d,h as l,c as i,b as c,D as e,B as mt,w as Mo,x as Oo,y as Yo,f as Fo,t as No,z as Uo}from"../../chunks/index-826495f5.js";function Vo(pt){let h,E,v,y,ht,Le,B,vt,He,q,ut,Pe,M,bt,ze,O,_t,Ae,u,Q,Et,yt,X,Tt,wt,Z,Dt,St,ee,kt,Rt,te,It,$e,Y,xt,Be,F,Ct,qe,N,Lt,Me,U,Ht,Oe,V,Pt,Ye,W,zt,Fe,g,At,Ne,j,$t,Ue,G,Bt,Ve,b,le,qt,Mt,oe,Ot,Yt,ae,Ft,We,J,Nt,ge,T,ne,w,re,Ut,Vt,ie,Wt,gt,m,D,se,jt,Gt,de,Jt,Kt,S,fe,Qt,Xt,ce,Zt,el,k,me,tl,ll,pe,ol,al,R,he,nl,rl,ve,il,sl,I,ue,dl,fl,be,cl,ml,x,_e,pl,hl,Ee,vl,ul,C,ye,bl,_l,Te,El,yl,L,we,Tl,wl,De,Dl,Sl,H,Se,kl,Rl,ke,Il,xl,P,Re,Cl,Ll,je,Hl,z,Ie,Pl,zl,Ge,Al,A,xe,$l,Bl,Je,ql,$,Ce,Ml,Ol,Ke;return{c(){h=o("h1"),E=s("Overview"),v=r(),y=o("h2"),ht=s("Why yet another component library?"),Le=r(),B=o("p"),vt=s(`You can choose from a wide spectrum of rich and powerful component libraries. They vary between the unopinionated
that require significant configuration to look decent and the opinionated ones that start great out-of-the-box, but
offer little customization. As Svelte is the new kid on the block, most are built for other frameworks like
React or Angular.`),He=r(),q=o("p"),ut=s(`I want components designed and built to take full advantage of Svelte. I try to balance consistency and customization
with global, usage, and component-specific theme properties. Since Svelte naturally builds self-contained
components the layout, behavior, and style, components will be opinionated. I kept the design minimal and neutral to
allow custom themes to shine.`),Pe=r(),M=o("h2"),bt=s("Design Tenets"),ze=r(),O=o("p"),_t=s("sterling-svelte is designed to:"),Ae=r(),u=o("ul"),Q=o("li"),Et=s("be razor thin"),yt=r(),X=o("li"),Tt=s("have classic and minimalistic style"),wt=r(),Z=o("li"),Dt=s("ideomatically Svelte"),St=r(),ee=o("li"),kt=s("target modern, evergreen browser features"),Rt=r(),te=o("li"),It=s("follow the latest accessibility standards"),$e=r(),Y=o("h3"),xt=s("Theme and Styles"),Be=r(),F=o("p"),Ct=s(`Components have a neutral color scheme with high contrast ratios. Borders are medium weight. To be responsive, each component scales its padding and layout based on font ems. In some cases, pixel spacing or thickness is used but only
after verifying it looks correct and multiple sizes.`),qe=r(),N=o("p"),Lt=s(`The theme is implemented using CSS variables. Care was taken to balance between too few and generic variables and an overwhelming number of component-specific variables. Sets of variables are defined for common usage, buttons (i.e. clickable things), form inputs, containers/lists, and information display. Additionally, a set of semantic colors
display information, success, and errors states.`),Me=r(),U=o("h3"),Ht=s("Slots"),Oe=r(),V=o("p"),Pt=s(`Components leverage Svelte’s slots for customization and replacement of component parts. For example, input components
have a label slot for changing the label component rather than only providing a string value.`),Ye=r(),W=o("h3"),zt=s("Native Element Components"),Fe=r(),g=o("p"),At=s(`Components that wrap an HTML element will forward props to the element and bubble events from the element. If the
native element type is not suitable, a component may avoid using the native element in favor of its own behavior
and style via div elements.`),Ne=r(),j=o("h2"),$t=s("Dependencies"),Ue=r(),G=o("p"),Bt=s(`Dependencies are kept to an absolute minimum. All dependencies are reviewed as the library evolves to determine if
they should be inlined or can be removed.`),Ve=r(),b=o("ul"),le=o("li"),qt=s("uuid to create element identifiers"),Mt=r(),oe=o("li"),Ot=s("floating-ui to position popups and overlays"),Yt=r(),ae=o("li"),Ft=s("lodash-es for data utility functions"),We=r(),J=o("h2"),Nt=s("Roadmap"),ge=r(),T=o("table"),ne=o("thead"),w=o("tr"),re=o("th"),Ut=s("Component"),Vt=r(),ie=o("th"),Wt=s("Published in Version"),gt=r(),m=o("tbody"),D=o("tr"),se=o("td"),jt=s("(theme)"),Gt=r(),de=o("td"),Jt=s("0.0.1"),Kt=r(),S=o("tr"),fe=o("td"),Qt=s("Button"),Xt=r(),ce=o("td"),Zt=s("0.0.3"),el=r(),k=o("tr"),me=o("td"),tl=s("Input"),ll=r(),pe=o("td"),ol=s("0.0.4"),al=r(),R=o("tr"),he=o("td"),nl=s("Checkbox"),rl=r(),ve=o("td"),il=s("0.0.5"),sl=r(),I=o("tr"),ue=o("td"),dl=s("Radio"),fl=r(),be=o("td"),cl=s("0.0.6"),ml=r(),x=o("tr"),_e=o("td"),pl=s("List"),hl=r(),Ee=o("td"),vl=s("0.0.7"),ul=r(),C=o("tr"),ye=o("td"),bl=s("Select"),_l=r(),Te=o("td"),El=s("0.0.7"),yl=r(),L=o("tr"),we=o("td"),Tl=s("Progress"),wl=r(),De=o("td"),Dl=s("0.0.8"),Sl=r(),H=o("tr"),Se=o("td"),kl=s("Slider"),Rl=r(),ke=o("td"),Il=s("0.0.8"),xl=r(),P=o("tr"),Re=o("td"),Cl=s("Menu"),Ll=r(),je=o("td"),Hl=r(),z=o("tr"),Ie=o("td"),Pl=s("Tree"),zl=r(),Ge=o("td"),Al=r(),A=o("tr"),xe=o("td"),$l=s("Tooltip"),Bl=r(),Je=o("td"),ql=r(),$=o("tr"),Ce=o("td"),Ml=s("Dialog"),Ol=r(),Ke=o("td")},l(t){h=a(t,"H1",{});var f=n(h);E=d(f,"Overview"),f.forEach(l),v=i(t),y=a(t,"H2",{});var Yl=n(y);ht=d(Yl,"Why yet another component library?"),Yl.forEach(l),Le=i(t),B=a(t,"P",{});var Fl=n(B);vt=d(Fl,`You can choose from a wide spectrum of rich and powerful component libraries. They vary between the unopinionated
that require significant configuration to look decent and the opinionated ones that start great out-of-the-box, but
offer little customization. As Svelte is the new kid on the block, most are built for other frameworks like
React or Angular.`),Fl.forEach(l),He=i(t),q=a(t,"P",{});var Nl=n(q);ut=d(Nl,`I want components designed and built to take full advantage of Svelte. I try to balance consistency and customization
with global, usage, and component-specific theme properties. Since Svelte naturally builds self-contained
components the layout, behavior, and style, components will be opinionated. I kept the design minimal and neutral to
allow custom themes to shine.`),Nl.forEach(l),Pe=i(t),M=a(t,"H2",{});var Ul=n(M);bt=d(Ul,"Design Tenets"),Ul.forEach(l),ze=i(t),O=a(t,"P",{});var Vl=n(O);_t=d(Vl,"sterling-svelte is designed to:"),Vl.forEach(l),Ae=i(t),u=a(t,"UL",{});var _=n(u);Q=a(_,"LI",{});var Wl=n(Q);Et=d(Wl,"be razor thin"),Wl.forEach(l),yt=i(_),X=a(_,"LI",{});var gl=n(X);Tt=d(gl,"have classic and minimalistic style"),gl.forEach(l),wt=i(_),Z=a(_,"LI",{});var jl=n(Z);Dt=d(jl,"ideomatically Svelte"),jl.forEach(l),St=i(_),ee=a(_,"LI",{});var Gl=n(ee);kt=d(Gl,"target modern, evergreen browser features"),Gl.forEach(l),Rt=i(_),te=a(_,"LI",{});var Jl=n(te);It=d(Jl,"follow the latest accessibility standards"),Jl.forEach(l),_.forEach(l),$e=i(t),Y=a(t,"H3",{});var Kl=n(Y);xt=d(Kl,"Theme and Styles"),Kl.forEach(l),Be=i(t),F=a(t,"P",{});var Ql=n(F);Ct=d(Ql,`Components have a neutral color scheme with high contrast ratios. Borders are medium weight. To be responsive, each component scales its padding and layout based on font ems. In some cases, pixel spacing or thickness is used but only
after verifying it looks correct and multiple sizes.`),Ql.forEach(l),qe=i(t),N=a(t,"P",{});var Xl=n(N);Lt=d(Xl,`The theme is implemented using CSS variables. Care was taken to balance between too few and generic variables and an overwhelming number of component-specific variables. Sets of variables are defined for common usage, buttons (i.e. clickable things), form inputs, containers/lists, and information display. Additionally, a set of semantic colors
display information, success, and errors states.`),Xl.forEach(l),Me=i(t),U=a(t,"H3",{});var Zl=n(U);Ht=d(Zl,"Slots"),Zl.forEach(l),Oe=i(t),V=a(t,"P",{});var eo=n(V);Pt=d(eo,`Components leverage Svelte’s slots for customization and replacement of component parts. For example, input components
have a label slot for changing the label component rather than only providing a string value.`),eo.forEach(l),Ye=i(t),W=a(t,"H3",{});var to=n(W);zt=d(to,"Native Element Components"),to.forEach(l),Fe=i(t),g=a(t,"P",{});var lo=n(g);At=d(lo,`Components that wrap an HTML element will forward props to the element and bubble events from the element. If the
native element type is not suitable, a component may avoid using the native element in favor of its own behavior
and style via div elements.`),lo.forEach(l),Ne=i(t),j=a(t,"H2",{});var oo=n(j);$t=d(oo,"Dependencies"),oo.forEach(l),Ue=i(t),G=a(t,"P",{});var ao=n(G);Bt=d(ao,`Dependencies are kept to an absolute minimum. All dependencies are reviewed as the library evolves to determine if
they should be inlined or can be removed.`),ao.forEach(l),Ve=i(t),b=a(t,"UL",{});var K=n(b);le=a(K,"LI",{});var no=n(le);qt=d(no,"uuid to create element identifiers"),no.forEach(l),Mt=i(K),oe=a(K,"LI",{});var ro=n(oe);Ot=d(ro,"floating-ui to position popups and overlays"),ro.forEach(l),Yt=i(K),ae=a(K,"LI",{});var io=n(ae);Ft=d(io,"lodash-es for data utility functions"),io.forEach(l),K.forEach(l),We=i(t),J=a(t,"H2",{});var so=n(J);Nt=d(so,"Roadmap"),so.forEach(l),ge=i(t),T=a(t,"TABLE",{});var Qe=n(T);ne=a(Qe,"THEAD",{});var fo=n(ne);w=a(fo,"TR",{});var Xe=n(w);re=a(Xe,"TH",{});var co=n(re);Ut=d(co,"Component"),co.forEach(l),Vt=i(Xe),ie=a(Xe,"TH",{});var mo=n(ie);Wt=d(mo,"Published in Version"),mo.forEach(l),Xe.forEach(l),fo.forEach(l),gt=i(Qe),m=a(Qe,"TBODY",{});var p=n(m);D=a(p,"TR",{});var Ze=n(D);se=a(Ze,"TD",{});var po=n(se);jt=d(po,"(theme)"),po.forEach(l),Gt=i(Ze),de=a(Ze,"TD",{});var ho=n(de);Jt=d(ho,"0.0.1"),ho.forEach(l),Ze.forEach(l),Kt=i(p),S=a(p,"TR",{});var et=n(S);fe=a(et,"TD",{});var vo=n(fe);Qt=d(vo,"Button"),vo.forEach(l),Xt=i(et),ce=a(et,"TD",{});var uo=n(ce);Zt=d(uo,"0.0.3"),uo.forEach(l),et.forEach(l),el=i(p),k=a(p,"TR",{});var tt=n(k);me=a(tt,"TD",{});var bo=n(me);tl=d(bo,"Input"),bo.forEach(l),ll=i(tt),pe=a(tt,"TD",{});var _o=n(pe);ol=d(_o,"0.0.4"),_o.forEach(l),tt.forEach(l),al=i(p),R=a(p,"TR",{});var lt=n(R);he=a(lt,"TD",{});var Eo=n(he);nl=d(Eo,"Checkbox"),Eo.forEach(l),rl=i(lt),ve=a(lt,"TD",{});var yo=n(ve);il=d(yo,"0.0.5"),yo.forEach(l),lt.forEach(l),sl=i(p),I=a(p,"TR",{});var ot=n(I);ue=a(ot,"TD",{});var To=n(ue);dl=d(To,"Radio"),To.forEach(l),fl=i(ot),be=a(ot,"TD",{});var wo=n(be);cl=d(wo,"0.0.6"),wo.forEach(l),ot.forEach(l),ml=i(p),x=a(p,"TR",{});var at=n(x);_e=a(at,"TD",{});var Do=n(_e);pl=d(Do,"List"),Do.forEach(l),hl=i(at),Ee=a(at,"TD",{});var So=n(Ee);vl=d(So,"0.0.7"),So.forEach(l),at.forEach(l),ul=i(p),C=a(p,"TR",{});var nt=n(C);ye=a(nt,"TD",{});var ko=n(ye);bl=d(ko,"Select"),ko.forEach(l),_l=i(nt),Te=a(nt,"TD",{});var Ro=n(Te);El=d(Ro,"0.0.7"),Ro.forEach(l),nt.forEach(l),yl=i(p),L=a(p,"TR",{});var rt=n(L);we=a(rt,"TD",{});var Io=n(we);Tl=d(Io,"Progress"),Io.forEach(l),wl=i(rt),De=a(rt,"TD",{});var xo=n(De);Dl=d(xo,"0.0.8"),xo.forEach(l),rt.forEach(l),Sl=i(p),H=a(p,"TR",{});var it=n(H);Se=a(it,"TD",{});var Co=n(Se);kl=d(Co,"Slider"),Co.forEach(l),Rl=i(it),ke=a(it,"TD",{});var Lo=n(ke);Il=d(Lo,"0.0.8"),Lo.forEach(l),it.forEach(l),xl=i(p),P=a(p,"TR",{});var st=n(P);Re=a(st,"TD",{});var Ho=n(Re);Cl=d(Ho,"Menu"),Ho.forEach(l),Ll=i(st),je=a(st,"TD",{}),n(je).forEach(l),st.forEach(l),Hl=i(p),z=a(p,"TR",{});var dt=n(z);Ie=a(dt,"TD",{});var Po=n(Ie);Pl=d(Po,"Tree"),Po.forEach(l),zl=i(dt),Ge=a(dt,"TD",{}),n(Ge).forEach(l),dt.forEach(l),Al=i(p),A=a(p,"TR",{});var ft=n(A);xe=a(ft,"TD",{});var zo=n(xe);$l=d(zo,"Tooltip"),zo.forEach(l),Bl=i(ft),Je=a(ft,"TD",{}),n(Je).forEach(l),ft.forEach(l),ql=i(p),$=a(p,"TR",{});var ct=n($);Ce=a(ct,"TD",{});var Ao=n(Ce);Ml=d(Ao,"Dialog"),Ao.forEach(l),Ol=i(ct),Ke=a(ct,"TD",{}),n(Ke).forEach(l),ct.forEach(l),p.forEach(l),Qe.forEach(l)},m(t,f){c(t,h,f),e(h,E),c(t,v,f),c(t,y,f),e(y,ht),c(t,Le,f),c(t,B,f),e(B,vt),c(t,He,f),c(t,q,f),e(q,ut),c(t,Pe,f),c(t,M,f),e(M,bt),c(t,ze,f),c(t,O,f),e(O,_t),c(t,Ae,f),c(t,u,f),e(u,Q),e(Q,Et),e(u,yt),e(u,X),e(X,Tt),e(u,wt),e(u,Z),e(Z,Dt),e(u,St),e(u,ee),e(ee,kt),e(u,Rt),e(u,te),e(te,It),c(t,$e,f),c(t,Y,f),e(Y,xt),c(t,Be,f),c(t,F,f),e(F,Ct),c(t,qe,f),c(t,N,f),e(N,Lt),c(t,Me,f),c(t,U,f),e(U,Ht),c(t,Oe,f),c(t,V,f),e(V,Pt),c(t,Ye,f),c(t,W,f),e(W,zt),c(t,Fe,f),c(t,g,f),e(g,At),c(t,Ne,f),c(t,j,f),e(j,$t),c(t,Ue,f),c(t,G,f),e(G,Bt),c(t,Ve,f),c(t,b,f),e(b,le),e(le,qt),e(b,Mt),e(b,oe),e(oe,Ot),e(b,Yt),e(b,ae),e(ae,Ft),c(t,We,f),c(t,J,f),e(J,Nt),c(t,ge,f),c(t,T,f),e(T,ne),e(ne,w),e(w,re),e(re,Ut),e(w,Vt),e(w,ie),e(ie,Wt),e(T,gt),e(T,m),e(m,D),e(D,se),e(se,jt),e(D,Gt),e(D,de),e(de,Jt),e(m,Kt),e(m,S),e(S,fe),e(fe,Qt),e(S,Xt),e(S,ce),e(ce,Zt),e(m,el),e(m,k),e(k,me),e(me,tl),e(k,ll),e(k,pe),e(pe,ol),e(m,al),e(m,R),e(R,he),e(he,nl),e(R,rl),e(R,ve),e(ve,il),e(m,sl),e(m,I),e(I,ue),e(ue,dl),e(I,fl),e(I,be),e(be,cl),e(m,ml),e(m,x),e(x,_e),e(_e,pl),e(x,hl),e(x,Ee),e(Ee,vl),e(m,ul),e(m,C),e(C,ye),e(ye,bl),e(C,_l),e(C,Te),e(Te,El),e(m,yl),e(m,L),e(L,we),e(we,Tl),e(L,wl),e(L,De),e(De,Dl),e(m,Sl),e(m,H),e(H,Se),e(Se,kl),e(H,Rl),e(H,ke),e(ke,Il),e(m,xl),e(m,P),e(P,Re),e(Re,Cl),e(P,Ll),e(P,je),e(m,Hl),e(m,z),e(z,Ie),e(Ie,Pl),e(z,zl),e(z,Ge),e(m,Al),e(m,A),e(A,xe),e(xe,$l),e(A,Bl),e(A,Je),e(m,ql),e(m,$),e($,Ce),e(Ce,Ml),e($,Ol),e($,Ke)},p:mt,i:mt,o:mt,d(t){t&&l(h),t&&l(v),t&&l(y),t&&l(Le),t&&l(B),t&&l(He),t&&l(q),t&&l(Pe),t&&l(M),t&&l(ze),t&&l(O),t&&l(Ae),t&&l(u),t&&l($e),t&&l(Y),t&&l(Be),t&&l(F),t&&l(qe),t&&l(N),t&&l(Me),t&&l(U),t&&l(Oe),t&&l(V),t&&l(Ye),t&&l(W),t&&l(Fe),t&&l(g),t&&l(Ne),t&&l(j),t&&l(Ue),t&&l(G),t&&l(Ve),t&&l(b),t&&l(We),t&&l(J),t&&l(ge),t&&l(T)}}}class Wo extends $o{constructor(h){super(),Bo(this,h,null,Vo,qo,{})}}function go(pt){let h,E;return h=new Wo({}),{c(){Mo(h.$$.fragment)},l(v){Oo(h.$$.fragment,v)},m(v,y){Yo(h,v,y),E=!0},p:mt,i(v){E||(Fo(h.$$.fragment,v),E=!0)},o(v){No(h.$$.fragment,v),E=!1},d(v){Uo(h,v)}}}class Go extends $o{constructor(h){super(),Bo(this,h,null,go,qo,{})}}export{Go as default};