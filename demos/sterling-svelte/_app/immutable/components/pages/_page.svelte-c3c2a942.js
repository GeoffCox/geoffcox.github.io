import{S as ci,i as vi,s as pi,k as a,q as n,a as i,l as r,m as o,r as d,h as e,c as s,b as v,D as t,B as yl,w as mi,x as ui,y as Ei,f as _i,t as Ti,z as bi}from"../../chunks/index-79dc49f8.js";function yi(Dl){let p,y,m,D,wl,Te,Z,Rl,be,tt,Ll,ye,et,Sl,De,S,ct,vt,Il,kl,we,u,pt,xl,Hl,mt,Cl,zl,ut,Ml,Bl,Et,Al,Ul,_t,$l,Re,lt,gl,Le,at,Pl,Se,E,Tt,Nl,Ol,bt,ql,Fl,yt,Vl,Wl,Dt,Yl,Gl,wt,jl,Ie,rt,Jl,ke,w,Rt,Kl,Ql,Lt,Xl,xe,ot,Zl,He,it,St,ta,Ce,st,ea,ze,nt,It,la,Me,R,kt,I,xt,aa,ra,Ht,oa,ia,b,k,Ct,sa,na,zt,da,fa,x,Mt,ha,ca,Bt,va,pa,H,At,ma,ua,Ut,Ea,Be,dt,_a,Ae,ft,Ta,Ue,L,$t,C,gt,ba,ya,Pt,Da,wa,f,z,Nt,Ra,La,Ot,Sa,Ia,M,qt,ka,xa,Ft,Ha,Ca,B,Vt,za,Ma,Wt,Ba,Aa,A,Yt,Ua,$a,Gt,ga,Pa,U,jt,Na,Oa,Jt,qa,Fa,$,Kt,Va,Wa,Qt,Ya,Ga,g,Xt,ja,Ja,Zt,Ka,Qa,P,te,Xa,Za,ee,tr,er,N,le,lr,ar,ae,rr,or,O,re,ir,sr,oe,nr,dr,q,ie,fr,hr,se,cr,vr,F,ne,pr,mr,de,ur,Er,V,fe,_r,Tr,$e,br,W,he,yr,Dr,ge,wr,Y,ce,Rr,Lr,Pe,Sr,G,ve,Ir,kr,Ne,xr,j,pe,Hr,Cr,Oe,zr,J,me,Mr,Br,qe,Ar,K,ue,Ur,$r,Fe,gr,Q,Ee,Pr,Nr,Ve,Or,X,_e,qr,Fr,We;return{c(){p=a("h1"),y=n("Overview"),m=i(),D=a("h2"),wl=n("Why yet another component library?"),Te=i(),Z=a("p"),Rl=n(`Many component libraries for Svelte are ports of libraries from React or Angular.
Others are CSS ported from design systems like Material UI or Bootstrap.`),be=i(),tt=a("p"),Ll=n(`Svelte builds components that encapsulate behavior, layout, and style.
This can make it difficult to provide component style customization.
Most existing libraries are either strictly opinionated and offer little customization,
or have an overwhelming number of specialty customization knobs.`),ye=i(),et=a("p"),Sl=n(`I needed a component library built to take full advantage of Svelte.
I wanted a consistent minimalist style with a practical style customization.`),De=i(),S=a("p"),ct=a("strong"),vt=a("em"),Il=n("sterling-svelte"),kl=n(":"),we=i(),u=a("ul"),pt=a("li"),xl=n("is thin and lightweight"),Hl=i(),mt=a("li"),Cl=n("is minimal and classically styled"),zl=i(),ut=a("li"),Ml=n("is ideomatic Svelte"),Bl=i(),Et=a("li"),Al=n("targets modern, evergreen browsers"),Ul=i(),_t=a("li"),$l=n("meets latest accessibility standards"),Re=i(),lt=a("h2"),gl=n("Design"),Le=i(),at=a("h3"),Pl=n("Theme and Styles"),Se=i(),E=a("ul"),Tt=a("li"),Nl=n(`Built in themes have a neutral color palette with high contrast ratios.
This keeps the focus on the content of your application.`),Ol=i(),bt=a("li"),ql=n("Size, spacing, and borders are medium weight to make visual separation easy to see while maintaining a clean look."),Fl=i(),yt=a("li"),Vl=n("Each component scales its padding and layout based on font EMs to remain responsive and avoid hard-coded pixel values."),Wl=i(),Dt=a("li"),Yl=n("The theme is applied as CSS variables to allow theme switching without re-rendering."),Gl=i(),wt=a("li"),jl=n("The theme balances general purpose and component-specific variables to provide customization with the minimal performance cost."),Ie=i(),rt=a("h3"),Jl=n("Slots"),ke=i(),w=a("ul"),Rt=a("li"),Kl=n(`Components use slots for customization and replacement of parts.
For example, input components have a label slot for changing the label component rather than only providing a string value.`),Ql=i(),Lt=a("li"),Xl=n(`The default slot is reserved for transclusion where the slot represents the content typically between the open and close tags.
Named slots provide better semantic meaning and extensibility without breaking changes.`),xe=i(),ot=a("h3"),Zl=n("Native HTML Element Components"),He=i(),it=a("ul"),St=a("li"),ta=n("Components that render or wrap an HTML element will forward props and bubble events."),Ce=i(),st=a("h2"),ea=n("Dependencies"),ze=i(),nt=a("ul"),It=a("li"),la=n(`Dependencies are kept to an absolute minimum and the build tree-shakes out unused code.
They are regularly reviewed as the library evolves.`),Me=i(),R=a("table"),kt=a("thead"),I=a("tr"),xt=a("th"),aa=n("Library"),ra=i(),Ht=a("th"),oa=n("Usage"),ia=i(),b=a("tbody"),k=a("tr"),Ct=a("td"),sa=n("uuid"),na=i(),zt=a("td"),da=n("to create element identifiers"),fa=i(),x=a("tr"),Mt=a("td"),ha=n("floating-ui"),ca=i(),Bt=a("td"),va=n("to position popups and overlays"),pa=i(),H=a("tr"),At=a("td"),ma=n("lodash-es"),ua=i(),Ut=a("td"),Ea=n("for data utility functions"),Be=i(),dt=a("h2"),_a=n("Roadmap"),Ae=i(),ft=a("p"),Ta=n("The library is in alpha - anything and everything may change at any time."),Ue=i(),L=a("table"),$t=a("thead"),C=a("tr"),gt=a("th"),ba=n("Component"),ya=i(),Pt=a("th"),Da=n("Introduced in Version"),wa=i(),f=a("tbody"),z=a("tr"),Nt=a("td"),Ra=n("(theme)"),La=i(),Ot=a("td"),Sa=n("0.0.1"),Ia=i(),M=a("tr"),qt=a("td"),ka=n("Button"),xa=i(),Ft=a("td"),Ha=n("0.0.3"),Ca=i(),B=a("tr"),Vt=a("td"),za=n("Input"),Ma=i(),Wt=a("td"),Ba=n("0.0.4"),Aa=i(),A=a("tr"),Yt=a("td"),Ua=n("Checkbox"),$a=i(),Gt=a("td"),ga=n("0.0.5"),Pa=i(),U=a("tr"),jt=a("td"),Na=n("Radio"),Oa=i(),Jt=a("td"),qa=n("0.0.6"),Fa=i(),$=a("tr"),Kt=a("td"),Va=n("List"),Wa=i(),Qt=a("td"),Ya=n("0.0.7"),Ga=i(),g=a("tr"),Xt=a("td"),ja=n("Select"),Ja=i(),Zt=a("td"),Ka=n("0.0.7"),Qa=i(),P=a("tr"),te=a("td"),Xa=n("Progress"),Za=i(),ee=a("td"),tr=n("0.0.8"),er=i(),N=a("tr"),le=a("td"),lr=n("Slider"),ar=i(),ae=a("td"),rr=n("0.0.8"),or=i(),O=a("tr"),re=a("td"),ir=n("Dialog"),sr=i(),oe=a("td"),nr=n("0.0.9"),dr=i(),q=a("tr"),ie=a("td"),fr=n("Label"),hr=i(),se=a("td"),cr=n("0.0.10"),vr=i(),F=a("tr"),ne=a("td"),pr=n("Switch"),mr=i(),de=a("td"),ur=n("0.0.11"),Er=i(),V=a("tr"),fe=a("td"),_r=n("Menu"),Tr=i(),$e=a("td"),br=i(),W=a("tr"),he=a("td"),yr=n("Tree"),Dr=i(),ge=a("td"),wr=i(),Y=a("tr"),ce=a("td"),Rr=n("Tooltip"),Lr=i(),Pe=a("td"),Sr=i(),G=a("tr"),ve=a("td"),Ir=n("TextArea"),kr=i(),Ne=a("td"),xr=i(),j=a("tr"),pe=a("td"),Hr=n("Toggle/Choice"),Cr=i(),Oe=a("td"),zr=i(),J=a("tr"),me=a("td"),Mr=n("Accordion"),Br=i(),qe=a("td"),Ar=i(),K=a("tr"),ue=a("td"),Ur=n("Notifications"),$r=i(),Fe=a("td"),gr=i(),Q=a("tr"),Ee=a("td"),Pr=n("Drawer"),Nr=i(),Ve=a("td"),Or=i(),X=a("tr"),_e=a("td"),qr=n("Tabs"),Fr=i(),We=a("td")},l(l){p=r(l,"H1",{});var h=o(p);y=d(h,"Overview"),h.forEach(e),m=s(l),D=r(l,"H2",{});var Wr=o(D);wl=d(Wr,"Why yet another component library?"),Wr.forEach(e),Te=s(l),Z=r(l,"P",{});var Yr=o(Z);Rl=d(Yr,`Many component libraries for Svelte are ports of libraries from React or Angular.
Others are CSS ported from design systems like Material UI or Bootstrap.`),Yr.forEach(e),be=s(l),tt=r(l,"P",{});var Gr=o(tt);Ll=d(Gr,`Svelte builds components that encapsulate behavior, layout, and style.
This can make it difficult to provide component style customization.
Most existing libraries are either strictly opinionated and offer little customization,
or have an overwhelming number of specialty customization knobs.`),Gr.forEach(e),ye=s(l),et=r(l,"P",{});var jr=o(et);Sl=d(jr,`I needed a component library built to take full advantage of Svelte.
I wanted a consistent minimalist style with a practical style customization.`),jr.forEach(e),De=s(l),S=r(l,"P",{});var Vr=o(S);ct=r(Vr,"STRONG",{});var Jr=o(ct);vt=r(Jr,"EM",{});var Kr=o(vt);Il=d(Kr,"sterling-svelte"),Kr.forEach(e),Jr.forEach(e),kl=d(Vr,":"),Vr.forEach(e),we=s(l),u=r(l,"UL",{});var _=o(u);pt=r(_,"LI",{});var Qr=o(pt);xl=d(Qr,"is thin and lightweight"),Qr.forEach(e),Hl=s(_),mt=r(_,"LI",{});var Xr=o(mt);Cl=d(Xr,"is minimal and classically styled"),Xr.forEach(e),zl=s(_),ut=r(_,"LI",{});var Zr=o(ut);Ml=d(Zr,"is ideomatic Svelte"),Zr.forEach(e),Bl=s(_),Et=r(_,"LI",{});var to=o(Et);Al=d(to,"targets modern, evergreen browsers"),to.forEach(e),Ul=s(_),_t=r(_,"LI",{});var eo=o(_t);$l=d(eo,"meets latest accessibility standards"),eo.forEach(e),_.forEach(e),Re=s(l),lt=r(l,"H2",{});var lo=o(lt);gl=d(lo,"Design"),lo.forEach(e),Le=s(l),at=r(l,"H3",{});var ao=o(at);Pl=d(ao,"Theme and Styles"),ao.forEach(e),Se=s(l),E=r(l,"UL",{});var T=o(E);Tt=r(T,"LI",{});var ro=o(Tt);Nl=d(ro,`Built in themes have a neutral color palette with high contrast ratios.
This keeps the focus on the content of your application.`),ro.forEach(e),Ol=s(T),bt=r(T,"LI",{});var oo=o(bt);ql=d(oo,"Size, spacing, and borders are medium weight to make visual separation easy to see while maintaining a clean look."),oo.forEach(e),Fl=s(T),yt=r(T,"LI",{});var io=o(yt);Vl=d(io,"Each component scales its padding and layout based on font EMs to remain responsive and avoid hard-coded pixel values."),io.forEach(e),Wl=s(T),Dt=r(T,"LI",{});var so=o(Dt);Yl=d(so,"The theme is applied as CSS variables to allow theme switching without re-rendering."),so.forEach(e),Gl=s(T),wt=r(T,"LI",{});var no=o(wt);jl=d(no,"The theme balances general purpose and component-specific variables to provide customization with the minimal performance cost."),no.forEach(e),T.forEach(e),Ie=s(l),rt=r(l,"H3",{});var fo=o(rt);Jl=d(fo,"Slots"),fo.forEach(e),ke=s(l),w=r(l,"UL",{});var Ye=o(w);Rt=r(Ye,"LI",{});var ho=o(Rt);Kl=d(ho,`Components use slots for customization and replacement of parts.
For example, input components have a label slot for changing the label component rather than only providing a string value.`),ho.forEach(e),Ql=s(Ye),Lt=r(Ye,"LI",{});var co=o(Lt);Xl=d(co,`The default slot is reserved for transclusion where the slot represents the content typically between the open and close tags.
Named slots provide better semantic meaning and extensibility without breaking changes.`),co.forEach(e),Ye.forEach(e),xe=s(l),ot=r(l,"H3",{});var vo=o(ot);Zl=d(vo,"Native HTML Element Components"),vo.forEach(e),He=s(l),it=r(l,"UL",{});var po=o(it);St=r(po,"LI",{});var mo=o(St);ta=d(mo,"Components that render or wrap an HTML element will forward props and bubble events."),mo.forEach(e),po.forEach(e),Ce=s(l),st=r(l,"H2",{});var uo=o(st);ea=d(uo,"Dependencies"),uo.forEach(e),ze=s(l),nt=r(l,"UL",{});var Eo=o(nt);It=r(Eo,"LI",{});var _o=o(It);la=d(_o,`Dependencies are kept to an absolute minimum and the build tree-shakes out unused code.
They are regularly reviewed as the library evolves.`),_o.forEach(e),Eo.forEach(e),Me=s(l),R=r(l,"TABLE",{});var Ge=o(R);kt=r(Ge,"THEAD",{});var To=o(kt);I=r(To,"TR",{});var je=o(I);xt=r(je,"TH",{});var bo=o(xt);aa=d(bo,"Library"),bo.forEach(e),ra=s(je),Ht=r(je,"TH",{});var yo=o(Ht);oa=d(yo,"Usage"),yo.forEach(e),je.forEach(e),To.forEach(e),ia=s(Ge),b=r(Ge,"TBODY",{});var ht=o(b);k=r(ht,"TR",{});var Je=o(k);Ct=r(Je,"TD",{});var Do=o(Ct);sa=d(Do,"uuid"),Do.forEach(e),na=s(Je),zt=r(Je,"TD",{});var wo=o(zt);da=d(wo,"to create element identifiers"),wo.forEach(e),Je.forEach(e),fa=s(ht),x=r(ht,"TR",{});var Ke=o(x);Mt=r(Ke,"TD",{});var Ro=o(Mt);ha=d(Ro,"floating-ui"),Ro.forEach(e),ca=s(Ke),Bt=r(Ke,"TD",{});var Lo=o(Bt);va=d(Lo,"to position popups and overlays"),Lo.forEach(e),Ke.forEach(e),pa=s(ht),H=r(ht,"TR",{});var Qe=o(H);At=r(Qe,"TD",{});var So=o(At);ma=d(So,"lodash-es"),So.forEach(e),ua=s(Qe),Ut=r(Qe,"TD",{});var Io=o(Ut);Ea=d(Io,"for data utility functions"),Io.forEach(e),Qe.forEach(e),ht.forEach(e),Ge.forEach(e),Be=s(l),dt=r(l,"H2",{});var ko=o(dt);_a=d(ko,"Roadmap"),ko.forEach(e),Ae=s(l),ft=r(l,"P",{});var xo=o(ft);Ta=d(xo,"The library is in alpha - anything and everything may change at any time."),xo.forEach(e),Ue=s(l),L=r(l,"TABLE",{});var Xe=o(L);$t=r(Xe,"THEAD",{});var Ho=o($t);C=r(Ho,"TR",{});var Ze=o(C);gt=r(Ze,"TH",{});var Co=o(gt);ba=d(Co,"Component"),Co.forEach(e),ya=s(Ze),Pt=r(Ze,"TH",{});var zo=o(Pt);Da=d(zo,"Introduced in Version"),zo.forEach(e),Ze.forEach(e),Ho.forEach(e),wa=s(Xe),f=r(Xe,"TBODY",{});var c=o(f);z=r(c,"TR",{});var tl=o(z);Nt=r(tl,"TD",{});var Mo=o(Nt);Ra=d(Mo,"(theme)"),Mo.forEach(e),La=s(tl),Ot=r(tl,"TD",{});var Bo=o(Ot);Sa=d(Bo,"0.0.1"),Bo.forEach(e),tl.forEach(e),Ia=s(c),M=r(c,"TR",{});var el=o(M);qt=r(el,"TD",{});var Ao=o(qt);ka=d(Ao,"Button"),Ao.forEach(e),xa=s(el),Ft=r(el,"TD",{});var Uo=o(Ft);Ha=d(Uo,"0.0.3"),Uo.forEach(e),el.forEach(e),Ca=s(c),B=r(c,"TR",{});var ll=o(B);Vt=r(ll,"TD",{});var $o=o(Vt);za=d($o,"Input"),$o.forEach(e),Ma=s(ll),Wt=r(ll,"TD",{});var go=o(Wt);Ba=d(go,"0.0.4"),go.forEach(e),ll.forEach(e),Aa=s(c),A=r(c,"TR",{});var al=o(A);Yt=r(al,"TD",{});var Po=o(Yt);Ua=d(Po,"Checkbox"),Po.forEach(e),$a=s(al),Gt=r(al,"TD",{});var No=o(Gt);ga=d(No,"0.0.5"),No.forEach(e),al.forEach(e),Pa=s(c),U=r(c,"TR",{});var rl=o(U);jt=r(rl,"TD",{});var Oo=o(jt);Na=d(Oo,"Radio"),Oo.forEach(e),Oa=s(rl),Jt=r(rl,"TD",{});var qo=o(Jt);qa=d(qo,"0.0.6"),qo.forEach(e),rl.forEach(e),Fa=s(c),$=r(c,"TR",{});var ol=o($);Kt=r(ol,"TD",{});var Fo=o(Kt);Va=d(Fo,"List"),Fo.forEach(e),Wa=s(ol),Qt=r(ol,"TD",{});var Vo=o(Qt);Ya=d(Vo,"0.0.7"),Vo.forEach(e),ol.forEach(e),Ga=s(c),g=r(c,"TR",{});var il=o(g);Xt=r(il,"TD",{});var Wo=o(Xt);ja=d(Wo,"Select"),Wo.forEach(e),Ja=s(il),Zt=r(il,"TD",{});var Yo=o(Zt);Ka=d(Yo,"0.0.7"),Yo.forEach(e),il.forEach(e),Qa=s(c),P=r(c,"TR",{});var sl=o(P);te=r(sl,"TD",{});var Go=o(te);Xa=d(Go,"Progress"),Go.forEach(e),Za=s(sl),ee=r(sl,"TD",{});var jo=o(ee);tr=d(jo,"0.0.8"),jo.forEach(e),sl.forEach(e),er=s(c),N=r(c,"TR",{});var nl=o(N);le=r(nl,"TD",{});var Jo=o(le);lr=d(Jo,"Slider"),Jo.forEach(e),ar=s(nl),ae=r(nl,"TD",{});var Ko=o(ae);rr=d(Ko,"0.0.8"),Ko.forEach(e),nl.forEach(e),or=s(c),O=r(c,"TR",{});var dl=o(O);re=r(dl,"TD",{});var Qo=o(re);ir=d(Qo,"Dialog"),Qo.forEach(e),sr=s(dl),oe=r(dl,"TD",{});var Xo=o(oe);nr=d(Xo,"0.0.9"),Xo.forEach(e),dl.forEach(e),dr=s(c),q=r(c,"TR",{});var fl=o(q);ie=r(fl,"TD",{});var Zo=o(ie);fr=d(Zo,"Label"),Zo.forEach(e),hr=s(fl),se=r(fl,"TD",{});var ti=o(se);cr=d(ti,"0.0.10"),ti.forEach(e),fl.forEach(e),vr=s(c),F=r(c,"TR",{});var hl=o(F);ne=r(hl,"TD",{});var ei=o(ne);pr=d(ei,"Switch"),ei.forEach(e),mr=s(hl),de=r(hl,"TD",{});var li=o(de);ur=d(li,"0.0.11"),li.forEach(e),hl.forEach(e),Er=s(c),V=r(c,"TR",{});var cl=o(V);fe=r(cl,"TD",{});var ai=o(fe);_r=d(ai,"Menu"),ai.forEach(e),Tr=s(cl),$e=r(cl,"TD",{}),o($e).forEach(e),cl.forEach(e),br=s(c),W=r(c,"TR",{});var vl=o(W);he=r(vl,"TD",{});var ri=o(he);yr=d(ri,"Tree"),ri.forEach(e),Dr=s(vl),ge=r(vl,"TD",{}),o(ge).forEach(e),vl.forEach(e),wr=s(c),Y=r(c,"TR",{});var pl=o(Y);ce=r(pl,"TD",{});var oi=o(ce);Rr=d(oi,"Tooltip"),oi.forEach(e),Lr=s(pl),Pe=r(pl,"TD",{}),o(Pe).forEach(e),pl.forEach(e),Sr=s(c),G=r(c,"TR",{});var ml=o(G);ve=r(ml,"TD",{});var ii=o(ve);Ir=d(ii,"TextArea"),ii.forEach(e),kr=s(ml),Ne=r(ml,"TD",{}),o(Ne).forEach(e),ml.forEach(e),xr=s(c),j=r(c,"TR",{});var ul=o(j);pe=r(ul,"TD",{});var si=o(pe);Hr=d(si,"Toggle/Choice"),si.forEach(e),Cr=s(ul),Oe=r(ul,"TD",{}),o(Oe).forEach(e),ul.forEach(e),zr=s(c),J=r(c,"TR",{});var El=o(J);me=r(El,"TD",{});var ni=o(me);Mr=d(ni,"Accordion"),ni.forEach(e),Br=s(El),qe=r(El,"TD",{}),o(qe).forEach(e),El.forEach(e),Ar=s(c),K=r(c,"TR",{});var _l=o(K);ue=r(_l,"TD",{});var di=o(ue);Ur=d(di,"Notifications"),di.forEach(e),$r=s(_l),Fe=r(_l,"TD",{}),o(Fe).forEach(e),_l.forEach(e),gr=s(c),Q=r(c,"TR",{});var Tl=o(Q);Ee=r(Tl,"TD",{});var fi=o(Ee);Pr=d(fi,"Drawer"),fi.forEach(e),Nr=s(Tl),Ve=r(Tl,"TD",{}),o(Ve).forEach(e),Tl.forEach(e),Or=s(c),X=r(c,"TR",{});var bl=o(X);_e=r(bl,"TD",{});var hi=o(_e);qr=d(hi,"Tabs"),hi.forEach(e),Fr=s(bl),We=r(bl,"TD",{}),o(We).forEach(e),bl.forEach(e),c.forEach(e),Xe.forEach(e)},m(l,h){v(l,p,h),t(p,y),v(l,m,h),v(l,D,h),t(D,wl),v(l,Te,h),v(l,Z,h),t(Z,Rl),v(l,be,h),v(l,tt,h),t(tt,Ll),v(l,ye,h),v(l,et,h),t(et,Sl),v(l,De,h),v(l,S,h),t(S,ct),t(ct,vt),t(vt,Il),t(S,kl),v(l,we,h),v(l,u,h),t(u,pt),t(pt,xl),t(u,Hl),t(u,mt),t(mt,Cl),t(u,zl),t(u,ut),t(ut,Ml),t(u,Bl),t(u,Et),t(Et,Al),t(u,Ul),t(u,_t),t(_t,$l),v(l,Re,h),v(l,lt,h),t(lt,gl),v(l,Le,h),v(l,at,h),t(at,Pl),v(l,Se,h),v(l,E,h),t(E,Tt),t(Tt,Nl),t(E,Ol),t(E,bt),t(bt,ql),t(E,Fl),t(E,yt),t(yt,Vl),t(E,Wl),t(E,Dt),t(Dt,Yl),t(E,Gl),t(E,wt),t(wt,jl),v(l,Ie,h),v(l,rt,h),t(rt,Jl),v(l,ke,h),v(l,w,h),t(w,Rt),t(Rt,Kl),t(w,Ql),t(w,Lt),t(Lt,Xl),v(l,xe,h),v(l,ot,h),t(ot,Zl),v(l,He,h),v(l,it,h),t(it,St),t(St,ta),v(l,Ce,h),v(l,st,h),t(st,ea),v(l,ze,h),v(l,nt,h),t(nt,It),t(It,la),v(l,Me,h),v(l,R,h),t(R,kt),t(kt,I),t(I,xt),t(xt,aa),t(I,ra),t(I,Ht),t(Ht,oa),t(R,ia),t(R,b),t(b,k),t(k,Ct),t(Ct,sa),t(k,na),t(k,zt),t(zt,da),t(b,fa),t(b,x),t(x,Mt),t(Mt,ha),t(x,ca),t(x,Bt),t(Bt,va),t(b,pa),t(b,H),t(H,At),t(At,ma),t(H,ua),t(H,Ut),t(Ut,Ea),v(l,Be,h),v(l,dt,h),t(dt,_a),v(l,Ae,h),v(l,ft,h),t(ft,Ta),v(l,Ue,h),v(l,L,h),t(L,$t),t($t,C),t(C,gt),t(gt,ba),t(C,ya),t(C,Pt),t(Pt,Da),t(L,wa),t(L,f),t(f,z),t(z,Nt),t(Nt,Ra),t(z,La),t(z,Ot),t(Ot,Sa),t(f,Ia),t(f,M),t(M,qt),t(qt,ka),t(M,xa),t(M,Ft),t(Ft,Ha),t(f,Ca),t(f,B),t(B,Vt),t(Vt,za),t(B,Ma),t(B,Wt),t(Wt,Ba),t(f,Aa),t(f,A),t(A,Yt),t(Yt,Ua),t(A,$a),t(A,Gt),t(Gt,ga),t(f,Pa),t(f,U),t(U,jt),t(jt,Na),t(U,Oa),t(U,Jt),t(Jt,qa),t(f,Fa),t(f,$),t($,Kt),t(Kt,Va),t($,Wa),t($,Qt),t(Qt,Ya),t(f,Ga),t(f,g),t(g,Xt),t(Xt,ja),t(g,Ja),t(g,Zt),t(Zt,Ka),t(f,Qa),t(f,P),t(P,te),t(te,Xa),t(P,Za),t(P,ee),t(ee,tr),t(f,er),t(f,N),t(N,le),t(le,lr),t(N,ar),t(N,ae),t(ae,rr),t(f,or),t(f,O),t(O,re),t(re,ir),t(O,sr),t(O,oe),t(oe,nr),t(f,dr),t(f,q),t(q,ie),t(ie,fr),t(q,hr),t(q,se),t(se,cr),t(f,vr),t(f,F),t(F,ne),t(ne,pr),t(F,mr),t(F,de),t(de,ur),t(f,Er),t(f,V),t(V,fe),t(fe,_r),t(V,Tr),t(V,$e),t(f,br),t(f,W),t(W,he),t(he,yr),t(W,Dr),t(W,ge),t(f,wr),t(f,Y),t(Y,ce),t(ce,Rr),t(Y,Lr),t(Y,Pe),t(f,Sr),t(f,G),t(G,ve),t(ve,Ir),t(G,kr),t(G,Ne),t(f,xr),t(f,j),t(j,pe),t(pe,Hr),t(j,Cr),t(j,Oe),t(f,zr),t(f,J),t(J,me),t(me,Mr),t(J,Br),t(J,qe),t(f,Ar),t(f,K),t(K,ue),t(ue,Ur),t(K,$r),t(K,Fe),t(f,gr),t(f,Q),t(Q,Ee),t(Ee,Pr),t(Q,Nr),t(Q,Ve),t(f,Or),t(f,X),t(X,_e),t(_e,qr),t(X,Fr),t(X,We)},p:yl,i:yl,o:yl,d(l){l&&e(p),l&&e(m),l&&e(D),l&&e(Te),l&&e(Z),l&&e(be),l&&e(tt),l&&e(ye),l&&e(et),l&&e(De),l&&e(S),l&&e(we),l&&e(u),l&&e(Re),l&&e(lt),l&&e(Le),l&&e(at),l&&e(Se),l&&e(E),l&&e(Ie),l&&e(rt),l&&e(ke),l&&e(w),l&&e(xe),l&&e(ot),l&&e(He),l&&e(it),l&&e(Ce),l&&e(st),l&&e(ze),l&&e(nt),l&&e(Me),l&&e(R),l&&e(Be),l&&e(dt),l&&e(Ae),l&&e(ft),l&&e(Ue),l&&e(L)}}}class Di extends ci{constructor(p){super(),vi(this,p,null,yi,pi,{})}}function wi(Dl){let p,y;return p=new Di({}),{c(){mi(p.$$.fragment)},l(m){ui(p.$$.fragment,m)},m(m,D){Ei(p,m,D),y=!0},p:yl,i(m){y||(_i(p.$$.fragment,m),y=!0)},o(m){Ti(p.$$.fragment,m),y=!1},d(m){bi(p,m)}}}class Li extends ci{constructor(p){super(),vi(this,p,null,wi,pi,{})}}export{Li as default};