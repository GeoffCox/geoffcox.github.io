import{S as Da,i as Ia,s as wa,E as Ss,M as ka,k as r,a as p,l as n,m as d,c as E,h as l,O as Hs,N as Re,b as D,F as e,P as g,g as Ys,Y as zs,d as Ks,I as Ns,J as qs,K as Bs,Q as Js,f as U,t as M,R as Qs,T as Ls,_ as Ws,a7 as Xs,V as Zs,W as js,e as As,w as _e,x as be,y as ve,z as me,Z as Gs,X as H,q as b,r as v,n as Ot,u as Us,C as Rt,D as el,H as tl,B as ll}from"../../../../chunks/index-a2f545b7.js";import{C as Ta}from"../../../../chunks/Checkbox-5131bf2d.js";import{P as $s}from"../../../../chunks/Playground-10e74055.js";import{t as xs,T as eo}from"../../../../chunks/Tab-cfc483ac.js";import{w as xt}from"../../../../chunks/index-f859a6a1.js";/* empty css                                                               *//* empty css                                                           */function Ps(a,t,c){const f=a.slice();return f[37]=t[c],f}const to=a=>({data:a[1]&512,disabled:a[0]&4,selected:a[1]&1024,tabId:a[1]&2048,text:a[1]&4096}),Rs=a=>({data:a[40],disabled:a[2],selected:a[41],tabId:a[42],text:a[43]});function lo(a){let t,c=a[43]+"",f;return{c(){t=r("div"),f=b(c),this.h()},l(o){t=n(o,"DIV",{class:!0});var i=d(t);f=v(i,c),i.forEach(l),this.h()},h(){Ot(t,"class","text svelte-10qx4q3")},m(o,i){D(o,t,i),e(t,f)},p(o,i){i[1]&4096&&c!==(c=o[43]+"")&&Us(f,c)},d(o){o&&l(t)}}}function ao(a){let t;const c=a[9].tabContent,f=Ss(c,a,a[31],Rs),o=f||lo(a);return{c(){o&&o.c()},l(i){o&&o.l(i)},m(i,_){o&&o.m(i,_),t=!0},p(i,_){f?f.p&&(!t||_[0]&4|_[1]&7681)&&Ns(f,c,i,i[31],t?Bs(c,i[31],_,to):qs(i[31]),Rs):o&&o.p&&(!t||_[1]&4096)&&o.p(i,t?_:[-1,-1])},i(i){t||(U(o,i),t=!0)},o(i){M(o,i),t=!1},d(i){o&&o.d(i)}}}function Os(a,t){let c,f,o;return f=new eo({props:{data:t[37],$$slots:{default:[ao,({data:i,disabled:_,selected:k,tabId:I,text:y})=>({40:i,2:_,41:k,42:I,43:y}),({data:i,disabled:_,selected:k,tabId:I,text:y})=>[_?4:0,(i?512:0)|(k?1024:0)|(I?2048:0)|(y?4096:0)]]},$$scope:{ctx:t}}}),{key:a,first:null,c(){c=As(),_e(f.$$.fragment),this.h()},l(i){c=As(),be(f.$$.fragment,i),this.h()},h(){this.first=c},m(i,_){D(i,c,_),ve(f,i,_),o=!0},p(i,_){t=i;const k={};_[0]&1&&(k.data=t[37]),_[0]&4|_[1]&7681&&(k.$$scope={dirty:_,ctx:t}),f.$set(k)},i(i){o||(U(f.$$.fragment,i),o=!0)},o(i){M(f.$$.fragment,i),o=!1},d(i){i&&l(c),me(f,i)}}}function so(a){let t,c=[],f=new Map,o,i,_,k,I=a[0];const y=T=>T[37].tabId;for(let T=0;T<I.length;T+=1){let u=Ps(a,I,T),m=y(u);f.set(m,c[T]=Os(m,u))}const L=a[9].default,F=Ss(L,a,a[31],null);let A=[{class:"sterling-tab-list"},{role:"tablist"},a[4]],P={};for(let T=0;T<A.length;T+=1)P=ka(P,A[T]);return{c(){t=r("div");for(let T=0;T<c.length;T+=1)c[T].c();o=p(),F&&F.c(),this.h()},l(T){t=n(T,"DIV",{class:!0,role:!0});var u=d(t);for(let m=0;m<c.length;m+=1)c[m].l(u);o=E(u),F&&F.l(u),u.forEach(l),this.h()},h(){Hs(t,P),Re(t,"vertical",a[1]),Re(t,"disabled",a[2]),Re(t,"svelte-10qx4q3",!0)},m(T,u){D(T,t,u);for(let m=0;m<c.length;m+=1)c[m].m(t,null);e(t,o),F&&F.m(t,null),i=!0,_||(k=[g(t,"blur",a[10]),g(t,"click",a[11]),g(t,"copy",a[12]),g(t,"cut",a[13]),g(t,"dblclick",a[14]),g(t,"focus",a[15]),g(t,"focusin",a[16]),g(t,"focusout",a[17]),g(t,"keydown",a[18]),g(t,"keypress",a[19]),g(t,"keyup",a[20]),g(t,"mousedown",a[21]),g(t,"mouseenter",a[22]),g(t,"mouseleave",a[23]),g(t,"mousemove",a[24]),g(t,"mouseover",a[25]),g(t,"mouseout",a[26]),g(t,"mouseup",a[27]),g(t,"scroll",a[28]),g(t,"wheel",a[29]),g(t,"paste",a[30])],_=!0)},p(T,u){u[0]&5|u[1]&7681&&(I=T[0],Ys(),c=zs(c,u,y,1,T,I,f,t,Gs,Os,o,Ps),Ks()),F&&F.p&&(!i||u[1]&1)&&Ns(F,L,T,T[31],i?Bs(L,T[31],u,null):qs(T[31]),null),Hs(t,P=Js(A,[{class:"sterling-tab-list"},{role:"tablist"},u[0]&16&&T[4]])),Re(t,"vertical",T[1]),Re(t,"disabled",T[2]),Re(t,"svelte-10qx4q3",!0)},i(T){if(!i){for(let u=0;u<I.length;u+=1)U(c[u]);U(F,T),i=!0}},o(T){for(let u=0;u<c.length;u+=1)M(c[u]);M(F,T),i=!1},d(T){T&&l(t);for(let u=0;u<c.length;u+=1)c[u].d();F&&F.d(T),_=!1,Qs(k)}}}function oo(a,t,c){const f=["disabled","tabs","vertical","selectedTabId","selectionFollowsFocus","selectedTab"];let o=Ls(t,f),i,{$$slots:_={},$$scope:k}=t,{disabled:I=!1}=t,{tabs:y=[]}=t,{vertical:L=!1}=t,{selectedTabId:F=void 0}=t,{selectionFollowsFocus:A=!1}=t,{selectedTab:P=void 0}=t;const T=xt(F);Ws(a,T,h=>c(8,i=h));const u=xt(A),m=xt(L),C=xt(I);Xs(xs,{disabled:C,selectedTabId:T,selectionFollowsFocus:u,vertical:m});const V=Zs(),S=(h,ze)=>{V("select",{tabId:h,tab:ze})};function Y(h){H.call(this,a,h)}function Oe(h){H.call(this,a,h)}function te(h){H.call(this,a,h)}function Se(h){H.call(this,a,h)}function Ne(h){H.call(this,a,h)}function le(h){H.call(this,a,h)}function qe(h){H.call(this,a,h)}function Be(h){H.call(this,a,h)}function ae(h){H.call(this,a,h)}function Ue(h){H.call(this,a,h)}function pe(h){H.call(this,a,h)}function G(h){H.call(this,a,h)}function Me(h){H.call(this,a,h)}function Ee(h){H.call(this,a,h)}function q(h){H.call(this,a,h)}function se(h){H.call(this,a,h)}function N(h){H.call(this,a,h)}function oe(h){H.call(this,a,h)}function Ve(h){H.call(this,a,h)}function Ye(h){H.call(this,a,h)}function re(h){H.call(this,a,h)}return a.$$set=h=>{t=ka(ka({},t),js(h)),c(4,o=Ls(t,f)),"disabled"in h&&c(2,I=h.disabled),"tabs"in h&&c(0,y=h.tabs),"vertical"in h&&c(1,L=h.vertical),"selectedTabId"in h&&c(5,F=h.selectedTabId),"selectionFollowsFocus"in h&&c(7,A=h.selectionFollowsFocus),"selectedTab"in h&&c(6,P=h.selectedTab),"$$scope"in h&&c(31,k=h.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&4&&C.set(I),a.$$.dirty[0]&353&&(c(5,F=i),c(6,P=y.find(h=>h.tabId===F)),S(F,P)),a.$$.dirty[0]&32&&T.set(F),a.$$.dirty[0]&128&&u.set(A),a.$$.dirty[0]&2&&m.set(L)},[y,L,I,T,o,F,P,A,i,_,Y,Oe,te,Se,Ne,le,qe,Be,ae,Ue,pe,G,Me,Ee,q,se,N,oe,Ve,Ye,re,k]}class ro extends Da{constructor(t){super(),Ia(this,t,oo,so,wa,{disabled:2,tabs:0,vertical:1,selectedTabId:5,selectionFollowsFocus:7,selectedTab:6},null,[-1,-1])}}function no(a){let t,c,f;function o(_){a[9](_)}let i={disabled:a[1],tabs:a[5],selectionFollowsFocus:a[3],vertical:a[4]};return a[2]!==void 0&&(i.selectedTabId=a[2]),t=new ro({props:i}),Rt.push(()=>el(t,"selectedTabId",o,a[2])),t.$on("selected",a[10]),{c(){_e(t.$$.fragment)},l(_){be(t.$$.fragment,_)},m(_,k){ve(t,_,k),f=!0},p(_,k){const I={};k&2&&(I.disabled=_[1]),k&8&&(I.selectionFollowsFocus=_[3]),k&16&&(I.vertical=_[4]),!c&&k&4&&(c=!0,I.selectedTabId=_[2],tl(()=>c=!1)),t.$set(I)},i(_){f||(U(t.$$.fragment,_),f=!0)},o(_){M(t.$$.fragment,_),f=!1},d(_){me(t,_)}}}function co(a){let t,c;return{c(){t=r("span"),c=b("disabled"),this.h()},l(f){t=n(f,"SPAN",{slot:!0});var o=d(t);c=v(o,"disabled"),o.forEach(l),this.h()},h(){Ot(t,"slot","label")},m(f,o){D(f,t,o),e(t,c)},p:ll,d(f){f&&l(t)}}}function io(a){let t,c;return{c(){t=r("span"),c=b("selectionFollowsFocus"),this.h()},l(f){t=n(f,"SPAN",{slot:!0});var o=d(t);c=v(o,"selectionFollowsFocus"),o.forEach(l),this.h()},h(){Ot(t,"slot","label")},m(f,o){D(f,t,o),e(t,c)},p:ll,d(f){f&&l(t)}}}function fo(a){let t,c;return{c(){t=r("span"),c=b("vertical"),this.h()},l(f){t=n(f,"SPAN",{slot:!0});var o=d(t);c=v(o,"vertical"),o.forEach(l),this.h()},h(){Ot(t,"slot","label")},m(f,o){D(f,t,o),e(t,c)},p:ll,d(f){f&&l(t)}}}function ho(a){let t,c,f,o,i,_,k,I,y;function L(m){a[6](m)}let F={$$slots:{label:[co]},$$scope:{ctx:a}};a[1]!==void 0&&(F.checked=a[1]),t=new Ta({props:F}),Rt.push(()=>el(t,"checked",L,a[1]));function A(m){a[7](m)}let P={$$slots:{label:[io]},$$scope:{ctx:a}};a[3]!==void 0&&(P.checked=a[3]),o=new Ta({props:P}),Rt.push(()=>el(o,"checked",A,a[3]));function T(m){a[8](m)}let u={$$slots:{label:[fo]},$$scope:{ctx:a}};return a[4]!==void 0&&(u.checked=a[4]),k=new Ta({props:u}),Rt.push(()=>el(k,"checked",T,a[4])),{c(){_e(t.$$.fragment),f=p(),_e(o.$$.fragment),_=p(),_e(k.$$.fragment)},l(m){be(t.$$.fragment,m),f=E(m),be(o.$$.fragment,m),_=E(m),be(k.$$.fragment,m)},m(m,C){ve(t,m,C),D(m,f,C),ve(o,m,C),D(m,_,C),ve(k,m,C),y=!0},p(m,C){const V={};C&4096&&(V.$$scope={dirty:C,ctx:m}),!c&&C&2&&(c=!0,V.checked=m[1],tl(()=>c=!1)),t.$set(V);const S={};C&4096&&(S.$$scope={dirty:C,ctx:m}),!i&&C&8&&(i=!0,S.checked=m[3],tl(()=>i=!1)),o.$set(S);const Y={};C&4096&&(Y.$$scope={dirty:C,ctx:m}),!I&&C&16&&(I=!0,Y.checked=m[4],tl(()=>I=!1)),k.$set(Y)},i(m){y||(U(t.$$.fragment,m),U(o.$$.fragment,m),U(k.$$.fragment,m),y=!0)},o(m){M(t.$$.fragment,m),M(o.$$.fragment,m),M(k.$$.fragment,m),y=!1},d(m){me(t,m),m&&l(f),me(o,m),m&&l(_),me(k,m)}}}function uo(a){let t,c,f;return{c(){t=r("div"),c=b("selectedTabId: "),f=b(a[2])},l(o){t=n(o,"DIV",{});var i=d(t);c=v(i,"selectedTabId: "),f=v(i,a[2]),i.forEach(l)},m(o,i){D(o,t,i),e(t,c),e(t,f)},p(o,i){i&4&&Us(f,o[2])},d(o){o&&l(t)}}}function _o(a){let t,c,f={$$slots:{status:[uo],options:[ho],component:[no]},$$scope:{ctx:a}};return t=new $s({props:f}),a[11](t),{c(){_e(t.$$.fragment)},l(o){be(t.$$.fragment,o)},m(o,i){ve(t,o,i),c=!0},p(o,[i]){const _={};i&4127&&(_.$$scope={dirty:i,ctx:o}),t.$set(_)},i(o){c||(U(t.$$.fragment,o),c=!0)},o(o){M(t.$$.fragment,o),c=!1},d(o){a[11](null),me(t,o)}}}function bo(a,t,c){let f;const o=[{tabId:"first",text:"First"},{tabId:"second",text:"Second",disabled:!0},{tabId:"third",text:"Third"},{tabId:"fourth",text:"Fourth"}];let i=!1,_="third",k=!1,I=!1;function y(u){i=u,c(1,i)}function L(u){k=u,c(3,k)}function F(u){I=u,c(4,I)}function A(u){_=u,c(2,_)}const P=u=>{f.recordEvent(`selected: ${u.detail.selectedTabId}`)};function T(u){Rt[u?"unshift":"push"](()=>{f=u,c(0,f)})}return[f,i,_,k,I,o,y,L,F,A,P,T]}class vo extends Da{constructor(t){super(),Ia(this,t,bo,_o,wa,{})}}function mo(a){let t,c,f,o,i,_,k,I,y,L,F,A,P,T,u,m,C,V,S,Y,Oe,te,Se,Ne,le,qe,Be,ae,Ue,pe,G,Me,Ee,q,se,N,oe,Ve,Ye,re,h,ze,Ke,al,sl,R,z,Je,ol,rl,Qe,We,nl,dl,Xe,cl,il,K,Ze,fl,hl,je,Ge,ul,_l,$e,bl,vl,J,xe,ml,pl,et,tt,El,Tl,lt,kl,Dl,Q,at,Il,wl,st,ot,Fl,yl,rt,Cl,gl,W,nt,Hl,Ll,dt,ct,Al,Pl,it,Rl,Ol,X,ft,Sl,Nl,ht,ut,ql,Bl,_t,Ul,St,Te,Ml,Nt,$,bt,Z,vt,Vl,Yl,mt,zl,Kl,pt,Jl,Ql,Et,j,Tt,Wl,Xl,kt,Dt,Zl,jl,It,Gl,qt,ke,$l,Bt,ne,Ms=`<code class="language-undefined">TabList
  list of tabs
    Tab
  _default_ slot</code>`,Ut,De,xl,Mt,x,wt,de,Ft,ea,ta,yt,la,aa,ce,ie,Ct,sa,oa,gt,ra,na,fe,Ht,da,ca,Ie,ia,Lt,fa,Vt,ee,he,ha,At,ua,_a,ba,ue,va,Pt,ma,pa,Yt;return L=new vo({}),{c(){t=r("h1"),c=b("TabList"),f=p(),o=r("p"),i=b("A list where selecting an item switches to its associated view."),_=p(),k=r("h2"),I=b("Playground"),y=p(),_e(L.$$.fragment),F=p(),A=r("h2"),P=b("Features"),T=p(),u=r("ul"),m=r("li"),C=b("Choose between vertical or horizontal layout."),V=p(),S=r("li"),Y=b("Choose if selection follows focus."),Oe=p(),te=r("li"),Se=b("Users can focus the previous/next tab with arrow keys."),Ne=p(),le=r("li"),qe=b("Users can focus the first/last tab with the home/end keys."),Be=p(),ae=r("li"),Ue=b("Provide tabs as an array of data or declare tabs in HTML."),pe=p(),G=r("h2"),Me=b("Props"),Ee=p(),q=r("table"),se=r("thead"),N=r("tr"),oe=r("th"),Ve=b("Name"),Ye=p(),re=r("th"),h=b("Type"),ze=p(),Ke=r("th"),al=b("Description"),sl=p(),R=r("tbody"),z=r("tr"),Je=r("td"),ol=b("disabled"),rl=p(),Qe=r("td"),We=r("code"),nl=b("boolean"),dl=p(),Xe=r("td"),cl=b("Disables the tab list and tabs"),il=p(),K=r("tr"),Ze=r("td"),fl=b("tabs"),hl=p(),je=r("td"),Ge=r("code"),ul=b("TabData<T>[]"),_l=p(),$e=r("td"),bl=b("The items in the list"),vl=p(),J=r("tr"),xe=r("td"),ml=b("vertical"),pl=p(),et=r("td"),tt=r("code"),El=b("boolean"),Tl=p(),lt=r("td"),kl=b("If tabs are displayed vertically"),Dl=p(),Q=r("tr"),at=r("td"),Il=b("selectedTab"),wl=p(),st=r("td"),ot=r("code"),Fl=b("TabData<T>"),yl=p(),rt=r("td"),Cl=b("The data of the selected tab when databinding"),gl=p(),W=r("tr"),nt=r("td"),Hl=b("selectedTabId"),Ll=p(),dt=r("td"),ct=r("code"),Al=b("string"),Pl=p(),it=r("td"),Rl=b("The ID of the selected tab"),Ol=p(),X=r("tr"),ft=r("td"),Sl=b("selectionFollowsFocus"),Nl=p(),ht=r("td"),ut=r("code"),ql=b("boolean"),Bl=p(),_t=r("td"),Ul=b("If a tab is selected whenever it is focused"),St=p(),Te=r("h2"),Ml=b("Events"),Nt=p(),$=r("table"),bt=r("thead"),Z=r("tr"),vt=r("th"),Vl=b("Name"),Yl=p(),mt=r("th"),zl=b("Event.detail"),Kl=p(),pt=r("th"),Jl=b("Description"),Ql=p(),Et=r("tbody"),j=r("tr"),Tt=r("td"),Wl=b("select"),Xl=p(),kt=r("td"),Dt=r("code"),Zl=b("{ tabId, tab }"),jl=p(),It=r("td"),Gl=b("Raised when a tab is selected."),qt=p(),ke=r("h2"),$l=b("Anatomy"),Bt=p(),ne=r("pre"),Ut=p(),De=r("h2"),xl=b("Slots"),Mt=p(),x=r("table"),wt=r("thead"),de=r("tr"),Ft=r("th"),ea=b("Name"),ta=p(),yt=r("th"),la=b("Description"),aa=p(),ce=r("tbody"),ie=r("tr"),Ct=r("td"),sa=b("default"),oa=p(),gt=r("td"),ra=b("Any declared children"),na=p(),fe=r("tr"),Ht=r("td"),da=b("tabContent"),ca=p(),Ie=r("td"),ia=b("A template for the content of each "),Lt=r("code"),fa=b("Tab"),Vt=p(),ee=r("ul"),he=r("li"),ha=b("default slot "),At=r("code"),ua=b("let"),_a=b(" params: (none)"),ba=p(),ue=r("li"),va=b("tabContent slot "),Pt=r("code"),ma=b("let"),pa=b(" params: data, disabled, selected, tabId, text"),this.h()},l(s){t=n(s,"H1",{});var w=d(t);c=v(w,"TabList"),w.forEach(l),f=E(s),o=n(s,"P",{});var Fa=d(o);i=v(Fa,"A list where selecting an item switches to its associated view."),Fa.forEach(l),_=E(s),k=n(s,"H2",{});var ya=d(k);I=v(ya,"Playground"),ya.forEach(l),y=E(s),be(L.$$.fragment,s),F=E(s),A=n(s,"H2",{});var Ca=d(A);P=v(Ca,"Features"),Ca.forEach(l),T=E(s),u=n(s,"UL",{});var B=d(u);m=n(B,"LI",{});var ga=d(m);C=v(ga,"Choose between vertical or horizontal layout."),ga.forEach(l),V=E(B),S=n(B,"LI",{});var Ha=d(S);Y=v(Ha,"Choose if selection follows focus."),Ha.forEach(l),Oe=E(B),te=n(B,"LI",{});var La=d(te);Se=v(La,"Users can focus the previous/next tab with arrow keys."),La.forEach(l),Ne=E(B),le=n(B,"LI",{});var Aa=d(le);qe=v(Aa,"Users can focus the first/last tab with the home/end keys."),Aa.forEach(l),Be=E(B),ae=n(B,"LI",{});var Pa=d(ae);Ue=v(Pa,"Provide tabs as an array of data or declare tabs in HTML."),Pa.forEach(l),B.forEach(l),pe=E(s),G=n(s,"H2",{});var Ra=d(G);Me=v(Ra,"Props"),Ra.forEach(l),Ee=E(s),q=n(s,"TABLE",{});var zt=d(q);se=n(zt,"THEAD",{});var Oa=d(se);N=n(Oa,"TR",{});var we=d(N);oe=n(we,"TH",{});var Sa=d(oe);Ve=v(Sa,"Name"),Sa.forEach(l),Ye=E(we),re=n(we,"TH",{});var Na=d(re);h=v(Na,"Type"),Na.forEach(l),ze=E(we),Ke=n(we,"TH",{});var qa=d(Ke);al=v(qa,"Description"),qa.forEach(l),we.forEach(l),Oa.forEach(l),sl=E(zt),R=n(zt,"TBODY",{});var O=d(R);z=n(O,"TR",{});var Fe=d(z);Je=n(Fe,"TD",{});var Ba=d(Je);ol=v(Ba,"disabled"),Ba.forEach(l),rl=E(Fe),Qe=n(Fe,"TD",{});var Ua=d(Qe);We=n(Ua,"CODE",{});var Ma=d(We);nl=v(Ma,"boolean"),Ma.forEach(l),Ua.forEach(l),dl=E(Fe),Xe=n(Fe,"TD",{});var Va=d(Xe);cl=v(Va,"Disables the tab list and tabs"),Va.forEach(l),Fe.forEach(l),il=E(O),K=n(O,"TR",{});var ye=d(K);Ze=n(ye,"TD",{});var Ya=d(Ze);fl=v(Ya,"tabs"),Ya.forEach(l),hl=E(ye),je=n(ye,"TD",{});var za=d(je);Ge=n(za,"CODE",{});var Ka=d(Ge);ul=v(Ka,"TabData<T>[]"),Ka.forEach(l),za.forEach(l),_l=E(ye),$e=n(ye,"TD",{});var Ja=d($e);bl=v(Ja,"The items in the list"),Ja.forEach(l),ye.forEach(l),vl=E(O),J=n(O,"TR",{});var Ce=d(J);xe=n(Ce,"TD",{});var Qa=d(xe);ml=v(Qa,"vertical"),Qa.forEach(l),pl=E(Ce),et=n(Ce,"TD",{});var Wa=d(et);tt=n(Wa,"CODE",{});var Xa=d(tt);El=v(Xa,"boolean"),Xa.forEach(l),Wa.forEach(l),Tl=E(Ce),lt=n(Ce,"TD",{});var Za=d(lt);kl=v(Za,"If tabs are displayed vertically"),Za.forEach(l),Ce.forEach(l),Dl=E(O),Q=n(O,"TR",{});var ge=d(Q);at=n(ge,"TD",{});var ja=d(at);Il=v(ja,"selectedTab"),ja.forEach(l),wl=E(ge),st=n(ge,"TD",{});var Ga=d(st);ot=n(Ga,"CODE",{});var $a=d(ot);Fl=v($a,"TabData<T>"),$a.forEach(l),Ga.forEach(l),yl=E(ge),rt=n(ge,"TD",{});var xa=d(rt);Cl=v(xa,"The data of the selected tab when databinding"),xa.forEach(l),ge.forEach(l),gl=E(O),W=n(O,"TR",{});var He=d(W);nt=n(He,"TD",{});var es=d(nt);Hl=v(es,"selectedTabId"),es.forEach(l),Ll=E(He),dt=n(He,"TD",{});var ts=d(dt);ct=n(ts,"CODE",{});var ls=d(ct);Al=v(ls,"string"),ls.forEach(l),ts.forEach(l),Pl=E(He),it=n(He,"TD",{});var as=d(it);Rl=v(as,"The ID of the selected tab"),as.forEach(l),He.forEach(l),Ol=E(O),X=n(O,"TR",{});var Le=d(X);ft=n(Le,"TD",{});var ss=d(ft);Sl=v(ss,"selectionFollowsFocus"),ss.forEach(l),Nl=E(Le),ht=n(Le,"TD",{});var os=d(ht);ut=n(os,"CODE",{});var rs=d(ut);ql=v(rs,"boolean"),rs.forEach(l),os.forEach(l),Bl=E(Le),_t=n(Le,"TD",{});var ns=d(_t);Ul=v(ns,"If a tab is selected whenever it is focused"),ns.forEach(l),Le.forEach(l),O.forEach(l),zt.forEach(l),St=E(s),Te=n(s,"H2",{});var ds=d(Te);Ml=v(ds,"Events"),ds.forEach(l),Nt=E(s),$=n(s,"TABLE",{});var Kt=d($);bt=n(Kt,"THEAD",{});var cs=d(bt);Z=n(cs,"TR",{});var Ae=d(Z);vt=n(Ae,"TH",{});var is=d(vt);Vl=v(is,"Name"),is.forEach(l),Yl=E(Ae),mt=n(Ae,"TH",{});var fs=d(mt);zl=v(fs,"Event.detail"),fs.forEach(l),Kl=E(Ae),pt=n(Ae,"TH",{});var hs=d(pt);Jl=v(hs,"Description"),hs.forEach(l),Ae.forEach(l),cs.forEach(l),Ql=E(Kt),Et=n(Kt,"TBODY",{});var us=d(Et);j=n(us,"TR",{});var Pe=d(j);Tt=n(Pe,"TD",{});var _s=d(Tt);Wl=v(_s,"select"),_s.forEach(l),Xl=E(Pe),kt=n(Pe,"TD",{});var bs=d(kt);Dt=n(bs,"CODE",{});var vs=d(Dt);Zl=v(vs,"{ tabId, tab }"),vs.forEach(l),bs.forEach(l),jl=E(Pe),It=n(Pe,"TD",{});var ms=d(It);Gl=v(ms,"Raised when a tab is selected."),ms.forEach(l),Pe.forEach(l),us.forEach(l),Kt.forEach(l),qt=E(s),ke=n(s,"H2",{});var ps=d(ke);$l=v(ps,"Anatomy"),ps.forEach(l),Bt=E(s),ne=n(s,"PRE",{class:!0});var Vs=d(ne);Vs.forEach(l),Ut=E(s),De=n(s,"H2",{});var Es=d(De);xl=v(Es,"Slots"),Es.forEach(l),Mt=E(s),x=n(s,"TABLE",{});var Jt=d(x);wt=n(Jt,"THEAD",{});var Ts=d(wt);de=n(Ts,"TR",{});var Qt=d(de);Ft=n(Qt,"TH",{});var ks=d(Ft);ea=v(ks,"Name"),ks.forEach(l),ta=E(Qt),yt=n(Qt,"TH",{});var Ds=d(yt);la=v(Ds,"Description"),Ds.forEach(l),Qt.forEach(l),Ts.forEach(l),aa=E(Jt),ce=n(Jt,"TBODY",{});var Wt=d(ce);ie=n(Wt,"TR",{});var Xt=d(ie);Ct=n(Xt,"TD",{});var Is=d(Ct);sa=v(Is,"default"),Is.forEach(l),oa=E(Xt),gt=n(Xt,"TD",{});var ws=d(gt);ra=v(ws,"Any declared children"),ws.forEach(l),Xt.forEach(l),na=E(Wt),fe=n(Wt,"TR",{});var Zt=d(fe);Ht=n(Zt,"TD",{});var Fs=d(Ht);da=v(Fs,"tabContent"),Fs.forEach(l),ca=E(Zt),Ie=n(Zt,"TD",{});var Ea=d(Ie);ia=v(Ea,"A template for the content of each "),Lt=n(Ea,"CODE",{});var ys=d(Lt);fa=v(ys,"Tab"),ys.forEach(l),Ea.forEach(l),Zt.forEach(l),Wt.forEach(l),Jt.forEach(l),Vt=E(s),ee=n(s,"UL",{});var jt=d(ee);he=n(jt,"LI",{});var Gt=d(he);ha=v(Gt,"default slot "),At=n(Gt,"CODE",{});var Cs=d(At);ua=v(Cs,"let"),Cs.forEach(l),_a=v(Gt," params: (none)"),Gt.forEach(l),ba=E(jt),ue=n(jt,"LI",{});var $t=d(ue);va=v($t,"tabContent slot "),Pt=n($t,"CODE",{});var gs=d(Pt);ma=v(gs,"let"),gs.forEach(l),pa=v($t," params: data, disabled, selected, tabId, text"),$t.forEach(l),jt.forEach(l),this.h()},h(){Ot(ne,"class","language-undefined")},m(s,w){D(s,t,w),e(t,c),D(s,f,w),D(s,o,w),e(o,i),D(s,_,w),D(s,k,w),e(k,I),D(s,y,w),ve(L,s,w),D(s,F,w),D(s,A,w),e(A,P),D(s,T,w),D(s,u,w),e(u,m),e(m,C),e(u,V),e(u,S),e(S,Y),e(u,Oe),e(u,te),e(te,Se),e(u,Ne),e(u,le),e(le,qe),e(u,Be),e(u,ae),e(ae,Ue),D(s,pe,w),D(s,G,w),e(G,Me),D(s,Ee,w),D(s,q,w),e(q,se),e(se,N),e(N,oe),e(oe,Ve),e(N,Ye),e(N,re),e(re,h),e(N,ze),e(N,Ke),e(Ke,al),e(q,sl),e(q,R),e(R,z),e(z,Je),e(Je,ol),e(z,rl),e(z,Qe),e(Qe,We),e(We,nl),e(z,dl),e(z,Xe),e(Xe,cl),e(R,il),e(R,K),e(K,Ze),e(Ze,fl),e(K,hl),e(K,je),e(je,Ge),e(Ge,ul),e(K,_l),e(K,$e),e($e,bl),e(R,vl),e(R,J),e(J,xe),e(xe,ml),e(J,pl),e(J,et),e(et,tt),e(tt,El),e(J,Tl),e(J,lt),e(lt,kl),e(R,Dl),e(R,Q),e(Q,at),e(at,Il),e(Q,wl),e(Q,st),e(st,ot),e(ot,Fl),e(Q,yl),e(Q,rt),e(rt,Cl),e(R,gl),e(R,W),e(W,nt),e(nt,Hl),e(W,Ll),e(W,dt),e(dt,ct),e(ct,Al),e(W,Pl),e(W,it),e(it,Rl),e(R,Ol),e(R,X),e(X,ft),e(ft,Sl),e(X,Nl),e(X,ht),e(ht,ut),e(ut,ql),e(X,Bl),e(X,_t),e(_t,Ul),D(s,St,w),D(s,Te,w),e(Te,Ml),D(s,Nt,w),D(s,$,w),e($,bt),e(bt,Z),e(Z,vt),e(vt,Vl),e(Z,Yl),e(Z,mt),e(mt,zl),e(Z,Kl),e(Z,pt),e(pt,Jl),e($,Ql),e($,Et),e(Et,j),e(j,Tt),e(Tt,Wl),e(j,Xl),e(j,kt),e(kt,Dt),e(Dt,Zl),e(j,jl),e(j,It),e(It,Gl),D(s,qt,w),D(s,ke,w),e(ke,$l),D(s,Bt,w),D(s,ne,w),ne.innerHTML=Ms,D(s,Ut,w),D(s,De,w),e(De,xl),D(s,Mt,w),D(s,x,w),e(x,wt),e(wt,de),e(de,Ft),e(Ft,ea),e(de,ta),e(de,yt),e(yt,la),e(x,aa),e(x,ce),e(ce,ie),e(ie,Ct),e(Ct,sa),e(ie,oa),e(ie,gt),e(gt,ra),e(ce,na),e(ce,fe),e(fe,Ht),e(Ht,da),e(fe,ca),e(fe,Ie),e(Ie,ia),e(Ie,Lt),e(Lt,fa),D(s,Vt,w),D(s,ee,w),e(ee,he),e(he,ha),e(he,At),e(At,ua),e(he,_a),e(ee,ba),e(ee,ue),e(ue,va),e(ue,Pt),e(Pt,ma),e(ue,pa),Yt=!0},p:ll,i(s){Yt||(U(L.$$.fragment,s),Yt=!0)},o(s){M(L.$$.fragment,s),Yt=!1},d(s){s&&l(t),s&&l(f),s&&l(o),s&&l(_),s&&l(k),s&&l(y),me(L,s),s&&l(F),s&&l(A),s&&l(T),s&&l(u),s&&l(pe),s&&l(G),s&&l(Ee),s&&l(q),s&&l(St),s&&l(Te),s&&l(Nt),s&&l($),s&&l(qt),s&&l(ke),s&&l(Bt),s&&l(ne),s&&l(Ut),s&&l(De),s&&l(Mt),s&&l(x),s&&l(Vt),s&&l(ee)}}}class Fo extends Da{constructor(t){super(),Ia(this,t,null,mo,wa,{})}}export{Fo as default};