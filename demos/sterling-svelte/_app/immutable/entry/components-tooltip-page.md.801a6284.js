import{S as yn,i as Ln,s as Sn,z as P,A as R,B as V,g as C,d as I,C as A,x as kt,T as Dt,k as n,l as r,m as i,h as e,p as Mt,b as E,U as wt,a as v,c as $,r as p,u,H as t,n as Sl,v as Wn,e as Ll,w as Pn,f as Rn,R as Vn}from"../chunks/index.111fe57f.js";import{C as kn}from"../chunks/Checkbox.52c41c49.js";import{P as Yn}from"../chunks/Playground.4b17e7e8.js";import{I as jn}from"../chunks/Input.ad2b92dd.js";import{T as qn,F as yl}from"../chunks/Field.ac231aa0.js";import{L as An}from"../chunks/ListItem.b6147757.js";import{S as Mn}from"../chunks/Select.602062c4.js";import{S as zn}from"../chunks/Slider.c6dd2637.js";import"../chunks/TextArea.svelte_svelte_type_style_lang.93d4bcc3.js";/* empty css                                                     *//* empty css                                                     *//* empty css                                                       *//* empty css                                                    *//* empty css                                                   *//* empty css                                                   *//* empty css                                                       *//* empty css                                                      *//* empty css                                                         *//* empty css                                                            *//* empty css                                                    *//* empty css                                                     *//* empty css                                                  *//* empty css                                                      *//* empty css                                                   *//* empty css                                                          *//* empty css                                                              *//* empty css                                                       */const Dn=["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],wn=["hover","click"];function On(_,l,f){const o=_.slice();return o[13]=l[f],o}function Cn(_,l,f){const o=_.slice();return o[16]=l[f],o}function Gn(_){let l,f;return{c(){l=n("div"),f=p("Sterling")},l(o){l=r(o,"DIV",{});var c=i(l);f=u(c,"Sterling"),c.forEach(e)},m(o,c){E(o,l,c),t(l,f)},p:Sl,d(o){o&&e(l)}}}function Jn(_){let l,f;return{c(){l=n("div"),f=p(_[5]),this.h()},l(o){l=r(o,"DIV",{class:!0,slot:!0});var c=i(l);f=u(c,_[5]),c.forEach(e),this.h()},h(){Mt(l,"class","tip svelte-17029k1"),Mt(l,"slot","tip")},m(o,c){E(o,l,c),t(l,f)},p(o,c){c&32&&Wn(f,o[5])},d(o){o&&e(l)}}}function Kn(_){let l,f,o,c;function T(d){_[12](d)}let s={disabled:_[0],showOn:_[1],hoverDelayMilliseconds:_[2],placement:_[3],$$slots:{tip:[Jn],default:[Gn]},$$scope:{ctx:_}};return _[4]!==void 0&&(s.open=_[4]),f=new qn({props:s}),kt.push(()=>Dt(f,"open",T,_[4])),{c(){l=n("div"),P(f.$$.fragment),this.h()},l(d){l=r(d,"DIV",{slot:!0});var h=i(l);R(f.$$.fragment,h),h.forEach(e),this.h()},h(){Mt(l,"slot","component")},m(d,h){E(d,l,h),V(f,l,null),c=!0},p(d,h){const k={};h&1&&(k.disabled=d[0]),h&2&&(k.showOn=d[1]),h&4&&(k.hoverDelayMilliseconds=d[2]),h&8&&(k.placement=d[3]),h&524320&&(k.$$scope={dirty:h,ctx:d}),!o&&h&16&&(o=!0,k.open=d[4],wt(()=>o=!1)),f.$set(k)},i(d){c||(C(f.$$.fragment,d),c=!0)},o(d){I(f.$$.fragment,d),c=!1},d(d){d&&e(l),A(f)}}}function Qn(_){let l;return{c(){l=p("disabled")},l(f){l=u(f,"disabled")},m(f,o){E(f,l,o)},d(f){f&&e(l)}}}function Xn(_){let l;return{c(){l=p("open")},l(f){l=u(f,"open")},m(f,o){E(f,l,o)},d(f){f&&e(l)}}}function Zn(_){let l=_[16]+"",f;return{c(){f=p(l)},l(o){f=u(o,l)},m(o,c){E(o,f,c)},p:Sl,d(o){o&&e(f)}}}function Hn(_){let l,f;return l=new An({props:{value:_[16],$$slots:{default:[Zn]},$$scope:{ctx:_}}}),{c(){P(l.$$.fragment)},l(o){R(l.$$.fragment,o)},m(o,c){V(l,o,c),f=!0},p(o,c){const T={};c&524288&&(T.$$scope={dirty:c,ctx:o}),l.$set(T)},i(o){f||(C(l.$$.fragment,o),f=!0)},o(o){I(l.$$.fragment,o),f=!1},d(o){A(l,o)}}}function xn(_){let l,f,o=wn,c=[];for(let s=0;s<o.length;s+=1)c[s]=Hn(Cn(_,o,s));const T=s=>I(c[s],1,1,()=>{c[s]=null});return{c(){for(let s=0;s<c.length;s+=1)c[s].c();l=Ll()},l(s){for(let d=0;d<c.length;d+=1)c[d].l(s);l=Ll()},m(s,d){for(let h=0;h<c.length;h+=1)c[h].m(s,d);E(s,l,d),f=!0},p(s,d){if(d&0){o=wn;let h;for(h=0;h<o.length;h+=1){const k=Cn(s,o,h);c[h]?(c[h].p(k,d),C(c[h],1)):(c[h]=Hn(k),c[h].c(),C(c[h],1),c[h].m(l.parentNode,l))}for(Pn(),h=o.length;h<c.length;h+=1)T(h);Rn()}},i(s){if(!f){for(let d=0;d<o.length;d+=1)C(c[d]);f=!0}},o(s){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)I(c[d]);f=!1},d(s){Vn(c,s),s&&e(l)}}}function tr(_){let l,f,o;function c(s){_[8](s)}let T={composed:!0,$$slots:{default:[xn]},$$scope:{ctx:_}};return _[1]!==void 0&&(T.selectedValue=_[1]),l=new Mn({props:T}),kt.push(()=>Dt(l,"selectedValue",c,_[1])),{c(){P(l.$$.fragment)},l(s){R(l.$$.fragment,s)},m(s,d){V(l,s,d),o=!0},p(s,d){const h={};d&524288&&(h.$$scope={dirty:d,ctx:s}),!f&&d&2&&(f=!0,h.selectedValue=s[1],wt(()=>f=!1)),l.$set(h)},i(s){o||(C(l.$$.fragment,s),o=!0)},o(s){I(l.$$.fragment,s),o=!1},d(s){A(l,s)}}}function er(_){let l=_[13]+"",f;return{c(){f=p(l)},l(o){f=u(o,l)},m(o,c){E(o,f,c)},p:Sl,d(o){o&&e(f)}}}function In(_){let l,f;return l=new An({props:{value:_[13],$$slots:{default:[er]},$$scope:{ctx:_}}}),{c(){P(l.$$.fragment)},l(o){R(l.$$.fragment,o)},m(o,c){V(l,o,c),f=!0},p(o,c){const T={};c&524288&&(T.$$scope={dirty:c,ctx:o}),l.$set(T)},i(o){f||(C(l.$$.fragment,o),f=!0)},o(o){I(l.$$.fragment,o),f=!1},d(o){A(l,o)}}}function lr(_){let l,f,o=Dn,c=[];for(let s=0;s<o.length;s+=1)c[s]=In(On(_,o,s));const T=s=>I(c[s],1,1,()=>{c[s]=null});return{c(){for(let s=0;s<c.length;s+=1)c[s].c();l=Ll()},l(s){for(let d=0;d<c.length;d+=1)c[d].l(s);l=Ll()},m(s,d){for(let h=0;h<c.length;h+=1)c[h].m(s,d);E(s,l,d),f=!0},p(s,d){if(d&0){o=Dn;let h;for(h=0;h<o.length;h+=1){const k=On(s,o,h);c[h]?(c[h].p(k,d),C(c[h],1)):(c[h]=In(k),c[h].c(),C(c[h],1),c[h].m(l.parentNode,l))}for(Pn(),h=o.length;h<c.length;h+=1)T(h);Rn()}},i(s){if(!f){for(let d=0;d<o.length;d+=1)C(c[d]);f=!0}},o(s){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)I(c[d]);f=!1},d(s){Vn(c,s),s&&e(l)}}}function or(_){let l,f,o;function c(s){_[9](s)}let T={composed:!0,$$slots:{default:[lr]},$$scope:{ctx:_}};return _[3]!==void 0&&(T.selectedValue=_[3]),l=new Mn({props:T}),kt.push(()=>Dt(l,"selectedValue",c,_[3])),{c(){P(l.$$.fragment)},l(s){R(l.$$.fragment,s)},m(s,d){V(l,s,d),o=!0},p(s,d){const h={};d&524288&&(h.$$scope={dirty:d,ctx:s}),!f&&d&8&&(f=!0,h.selectedValue=s[3],wt(()=>f=!1)),l.$set(h)},i(s){o||(C(l.$$.fragment,s),o=!0)},o(s){I(l.$$.fragment,s),o=!1},d(s){A(l,s)}}}function ar(_){let l,f,o;function c(s){_[10](s)}let T={composed:!0};return _[5]!==void 0&&(T.value=_[5]),l=new jn({props:T}),kt.push(()=>Dt(l,"value",c,_[5])),{c(){P(l.$$.fragment)},l(s){R(l.$$.fragment,s)},m(s,d){V(l,s,d),o=!0},p(s,d){const h={};!f&&d&32&&(f=!0,h.value=s[5],wt(()=>f=!1)),l.$set(h)},i(s){o||(C(l.$$.fragment,s),o=!0)},o(s){I(l.$$.fragment,s),o=!1},d(s){A(l,s)}}}function sr(_){let l,f,o;function c(s){_[11](s)}let T={min:0,max:3e3};return _[2]!==void 0&&(T.value=_[2]),l=new zn({props:T}),kt.push(()=>Dt(l,"value",c,_[2])),{c(){P(l.$$.fragment)},l(s){R(l.$$.fragment,s)},m(s,d){V(l,s,d),o=!0},p(s,d){const h={};!f&&d&4&&(f=!0,h.value=s[2],wt(()=>f=!1)),l.$set(h)},i(s){o||(C(l.$$.fragment,s),o=!0)},o(s){I(l.$$.fragment,s),o=!1},d(s){A(l,s)}}}function nr(_){let l,f,o,c,T,s,d,h,k,M,y,N,B,L,H;function O(m){_[6](m)}let Ot={$$slots:{default:[Qn]},$$scope:{ctx:_}};_[0]!==void 0&&(Ot.checked=_[0]),l=new kn({props:Ot}),kt.push(()=>Dt(l,"checked",O,_[0]));function Nt(m){_[7](m)}let Q={$$slots:{default:[Xn]},$$scope:{ctx:_}};return _[4]!==void 0&&(Q.checked=_[4]),c=new kn({props:Q}),kt.push(()=>Dt(c,"checked",Nt,_[4])),d=new yl({props:{label:"autoShow",$$slots:{default:[tr]},$$scope:{ctx:_}}}),k=new yl({props:{label:"placement",$$slots:{default:[or]},$$scope:{ctx:_}}}),y=new yl({props:{label:"tip (text)",$$slots:{default:[ar]},$$scope:{ctx:_}}}),L=new yl({props:{label:`hoverDelayMilliseconds: ${_[2]}ms`,$$slots:{default:[sr]},$$scope:{ctx:_}}}),{c(){P(l.$$.fragment),o=v(),P(c.$$.fragment),s=v(),P(d.$$.fragment),h=v(),P(k.$$.fragment),M=v(),P(y.$$.fragment),N=v(),B=n("div"),P(L.$$.fragment),this.h()},l(m){R(l.$$.fragment,m),o=$(m),R(c.$$.fragment,m),s=$(m),R(d.$$.fragment,m),h=$(m),R(k.$$.fragment,m),M=$(m),R(y.$$.fragment,m),N=$(m),B=r(m,"DIV",{class:!0});var b=i(B);R(L.$$.fragment,b),b.forEach(e),this.h()},h(){Mt(B,"class","delay-slider svelte-17029k1")},m(m,b){V(l,m,b),E(m,o,b),V(c,m,b),E(m,s,b),V(d,m,b),E(m,h,b),V(k,m,b),E(m,M,b),V(y,m,b),E(m,N,b),E(m,B,b),V(L,B,null),H=!0},p(m,b){const K={};b&524288&&(K.$$scope={dirty:b,ctx:m}),!f&&b&1&&(f=!0,K.checked=m[0],wt(()=>f=!1)),l.$set(K);const pt={};b&524288&&(pt.$$scope={dirty:b,ctx:m}),!T&&b&16&&(T=!0,pt.checked=m[4],wt(()=>T=!1)),c.$set(pt);const Ct={};b&524290&&(Ct.$$scope={dirty:b,ctx:m}),d.$set(Ct);const X={};b&524296&&(X.$$scope={dirty:b,ctx:m}),k.$set(X);const Ht={};b&524320&&(Ht.$$scope={dirty:b,ctx:m}),y.$set(Ht);const Z={};b&4&&(Z.label=`hoverDelayMilliseconds: ${m[2]}ms`),b&524292&&(Z.$$scope={dirty:b,ctx:m}),L.$set(Z)},i(m){H||(C(l.$$.fragment,m),C(c.$$.fragment,m),C(d.$$.fragment,m),C(k.$$.fragment,m),C(y.$$.fragment,m),C(L.$$.fragment,m),H=!0)},o(m){I(l.$$.fragment,m),I(c.$$.fragment,m),I(d.$$.fragment,m),I(k.$$.fragment,m),I(y.$$.fragment,m),I(L.$$.fragment,m),H=!1},d(m){A(l,m),m&&e(o),A(c,m),m&&e(s),A(d,m),m&&e(h),A(k,m),m&&e(M),A(y,m),m&&e(N),m&&e(B),A(L)}}}function rr(_){let l,f;return l=new Yn({props:{$$slots:{options:[nr],component:[Kn]},$$scope:{ctx:_}}}),{c(){P(l.$$.fragment)},l(o){R(l.$$.fragment,o)},m(o,c){V(l,o,c),f=!0},p(o,[c]){const T={};c&524351&&(T.$$scope={dirty:c,ctx:o}),l.$set(T)},i(o){f||(C(l.$$.fragment,o),f=!0)},o(o){I(l.$$.fragment,o),f=!1},d(o){A(l,o)}}}function ir(_,l,f){let o=!1,c="hover",T=1e3,s="top",d=!1,h="Tooltip";function k(O){o=O,f(0,o)}function M(O){d=O,f(4,d)}function y(O){c=O,f(1,c)}function N(O){s=O,f(3,s)}function B(O){h=O,f(5,h)}function L(O){T=O,f(2,T)}function H(O){d=O,f(4,d)}return[o,c,T,s,d,h,k,M,y,N,B,L,H]}class cr extends yn{constructor(l){super(),Ln(this,l,ir,rr,Sn,{})}}function fr(_){let l,f,o,c,T,s,d,h,k,M,y,N,B,L,H,O,Ot,Nt,Q,m,b,K,pt,Ct,X,Ht,Z,It,Pl,al,x,Bt,Rl,Vl,Ft,Al,sl,yt,Ml,nl,ut,Nn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Tooltip <span class="token keyword">from</span> <span class="token string">'@geoffcox/sterling-svelte/Tooltip.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>sterling-svelte<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A modern, accessible, and lightweight component library for Svelte.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span></code>`,rl,Lt,Nl,il,tt,Ut,U,Wt,Bl,Fl,Yt,Ul,Wl,jt,Yl,jl,qt,ql,zl,S,W,zt,Gl,Jl,Gt,Jt,Kl,Ql,Kt,Qt,Xl,Zl,Xt,xl,to,Y,Zt,eo,lo,xt,te,oo,ao,ee,le,so,no,oe,ro,io,j,ae,co,fo,se,ne,po,uo,re,ie,ho,_o,ce,mo,vo,q,fe,$o,Eo,de,pe,go,To,ue,he,bo,ko,_e,Do,wo,z,me,Oo,Co,ve,$e,Ho,Io,Ee,ge,yo,Lo,Te,So,Po,G,be,Ro,Vo,ke,De,Ao,Mo,we,Oe,No,Bo,Ce,Fo,cl,J,et,Uo,He,Wo,Yo,Ie,jo,qo,D,zo,ye,Go,Jo,Le,Ko,Qo,Se,Xo,Zo,Pe,xo,ta,Re,ea,la,Ve,oa,aa,Ae,sa,na,Me,ra,ia,Ne,ca,fa,Be,da,pa,Fe,ua,ha,Ue,_a,ma,We,va,fl,St,$a,dl,ht,Bn=`<code class="language-undefined">default slot
origin (div)

Tooltip (div)
    tip slot</code>`,pl,Pt,Ea,ul,Rt,ga,hl,lt,Ye,_t,je,Ta,ba,qe,ka,Da,mt,vt,ze,wa,Oa,Ge,Ca,Ha,$t,Je,Ia,ya,Ke,La,_l,Vt,Sa,ml,ot,Qe,Et,Xe,Pa,Ra,Ze,Va,Aa,gt,Tt,xe,Ma,Na,tl,Ba,Fa,bt,el,Ua,Wa,ll,Ya,vl;return M=new cr({}),{c(){l=n("h1"),f=p("Tooltip"),o=v(),c=n("p"),T=p("Descriptive information that floats above and near another element."),s=v(),d=n("h2"),h=p("Playground"),k=v(),P(M.$$.fragment),y=v(),N=n("h2"),B=p("Features"),L=v(),H=n("ul"),O=n("li"),Ot=p("Set if hover or click shows the tooltip"),Nt=v(),Q=n("li"),m=p("The tooltip floats above other element via portaling"),b=v(),K=n("li"),pt=p("Set another element as the portal target"),Ct=v(),X=n("li"),Ht=p("Set the delay before the tooltip is shown"),Z=v(),It=n("h2"),Pl=p("Interactions"),al=v(),x=n("ul"),Bt=n("li"),Rl=p("Hovering over the reference element can display the tooltip"),Vl=v(),Ft=n("li"),Al=p("Clicking the reference element can display the tooltip"),sl=v(),yt=n("h2"),Ml=p("Usage"),nl=v(),ut=n("pre"),rl=v(),Lt=n("h2"),Nl=p("Props"),il=v(),tt=n("table"),Ut=n("thead"),U=n("tr"),Wt=n("th"),Bl=p("Name"),Fl=v(),Yt=n("th"),Ul=p("Type"),Wl=v(),jt=n("th"),Yl=p("Default"),jl=v(),qt=n("th"),ql=p("Description"),zl=v(),S=n("tbody"),W=n("tr"),zt=n("td"),Gl=p("disabled"),Jl=v(),Gt=n("td"),Jt=n("code"),Kl=p("boolean"),Ql=v(),Kt=n("td"),Qt=n("code"),Xl=p("false"),Zl=v(),Xt=n("td"),xl=p("If showing the tooltip is disabled.*"),to=v(),Y=n("tr"),Zt=n("td"),eo=p("showOn"),lo=v(),xt=n("td"),te=n("code"),oo=p("TooltipShowOn"),ao=v(),ee=n("td"),le=n("code"),so=p("hover"),no=v(),oe=n("td"),ro=p("Which interaction shows/hides the tooltip"),io=v(),j=n("tr"),ae=n("td"),co=p("hoverDelayMilliseconds"),fo=v(),se=n("td"),ne=n("code"),po=p("number"),uo=v(),re=n("td"),ie=n("code"),ho=p("1000"),_o=v(),ce=n("td"),mo=p("How long to delay before showing the tooltip"),vo=v(),q=n("tr"),fe=n("td"),$o=p("open"),Eo=v(),de=n("td"),pe=n("code"),go=p("boolean"),To=v(),ue=n("td"),he=n("code"),bo=p("false"),ko=v(),_e=n("td"),Do=p("If the tooltip is visible"),wo=v(),z=n("tr"),me=n("td"),Oo=p("placement"),Co=v(),ve=n("td"),$e=n("code"),Ho=p("FloatingPlacement"),Io=v(),Ee=n("td"),ge=n("code"),yo=p("top"),Lo=v(),Te=n("td"),So=p("Where the tooltip appears relative to the reference element"),Po=v(),G=n("tr"),be=n("td"),Ro=p("portalTarget"),Vo=v(),ke=n("td"),De=n("code"),Ao=p("HTMLElement"),Mo=v(),we=n("td"),Oe=n("code"),No=p("document.body"),Bo=v(),Ce=n("td"),Fo=p("The element to target for the tooltip portal"),cl=v(),J=n("ul"),et=n("li"),Uo=p("TooltipShowOn = "),He=n("code"),Wo=p("'click'"),Yo=p(" | "),Ie=n("code"),jo=p("'hover'"),qo=v(),D=n("li"),zo=p("FloatingPlacement = "),ye=n("code"),Go=p("'top'"),Jo=p(" | "),Le=n("code"),Ko=p("'right'"),Qo=p(" | "),Se=n("code"),Xo=p("'bottom'"),Zo=p(" | "),Pe=n("code"),xo=p("'left'"),ta=p(" | "),Re=n("code"),ea=p("'top-start'"),la=p(" | "),Ve=n("code"),oa=p("'right-start'"),aa=p(" | "),Ae=n("code"),sa=p("'bottom-start'"),na=p(" | "),Me=n("code"),ra=p("'left-start'"),ia=p(" | "),Ne=n("code"),ca=p("'top-end'"),fa=p(" | "),Be=n("code"),da=p("'right-end'"),pa=p(" | "),Fe=n("code"),ua=p("'bottom-end'"),ha=p(" | "),Ue=n("code"),_a=p("'left-end'"),ma=v(),We=n("li"),va=p("* Disabling the tooltip only prevents showing it. It does not disable the default slot contents."),fl=v(),St=n("h2"),$a=p("Anatomy"),dl=v(),ht=n("pre"),pl=v(),Pt=n("p"),Ea=p(`The origin is a non-displayed element immediately following the default slot.
It locates the preceding element to reference for positioning the tooltip.`),ul=v(),Rt=n("h2"),ga=p("Slots"),hl=v(),lt=n("table"),Ye=n("thead"),_t=n("tr"),je=n("th"),Ta=p("Name"),ba=v(),qe=n("th"),ka=p("Description"),Da=v(),mt=n("tbody"),vt=n("tr"),ze=n("td"),wa=p("default"),Oa=v(),Ge=n("td"),Ca=p("The reference content associated with the tooltip"),Ha=v(),$t=n("tr"),Je=n("td"),Ia=p("tip"),ya=v(),Ke=n("td"),La=p("The content of the tooltip"),_l=v(),Vt=n("h1"),Sa=p("Let Params"),ml=v(),ot=n("table"),Qe=n("thead"),Et=n("tr"),Xe=n("th"),Pa=p("Name"),Ra=v(),Ze=n("th"),Va=p("Passed to slots"),Aa=v(),gt=n("tbody"),Tt=n("tr"),xe=n("td"),Ma=p("disabled"),Na=v(),tl=n("td"),Ba=p("default"),Fa=v(),bt=n("tr"),el=n("td"),Ua=p("open"),Wa=v(),ll=n("td"),Ya=p("default"),this.h()},l(a){l=r(a,"H1",{});var g=i(l);f=u(g,"Tooltip"),g.forEach(e),o=$(a),c=r(a,"P",{});var ja=i(c);T=u(ja,"Descriptive information that floats above and near another element."),ja.forEach(e),s=$(a),d=r(a,"H2",{});var qa=i(d);h=u(qa,"Playground"),qa.forEach(e),k=$(a),R(M.$$.fragment,a),y=$(a),N=r(a,"H2",{});var za=i(N);B=u(za,"Features"),za.forEach(e),L=$(a),H=r(a,"UL",{});var at=i(H);O=r(at,"LI",{});var Ga=i(O);Ot=u(Ga,"Set if hover or click shows the tooltip"),Ga.forEach(e),Nt=$(at),Q=r(at,"LI",{});var Ja=i(Q);m=u(Ja,"The tooltip floats above other element via portaling"),Ja.forEach(e),b=$(at),K=r(at,"LI",{});var Ka=i(K);pt=u(Ka,"Set another element as the portal target"),Ka.forEach(e),Ct=$(at),X=r(at,"LI",{});var Qa=i(X);Ht=u(Qa,"Set the delay before the tooltip is shown"),Qa.forEach(e),at.forEach(e),Z=$(a),It=r(a,"H2",{});var Xa=i(It);Pl=u(Xa,"Interactions"),Xa.forEach(e),al=$(a),x=r(a,"UL",{});var $l=i(x);Bt=r($l,"LI",{});var Za=i(Bt);Rl=u(Za,"Hovering over the reference element can display the tooltip"),Za.forEach(e),Vl=$($l),Ft=r($l,"LI",{});var xa=i(Ft);Al=u(xa,"Clicking the reference element can display the tooltip"),xa.forEach(e),$l.forEach(e),sl=$(a),yt=r(a,"H2",{});var ts=i(yt);Ml=u(ts,"Usage"),ts.forEach(e),nl=$(a),ut=r(a,"PRE",{class:!0});var Fn=i(ut);Fn.forEach(e),rl=$(a),Lt=r(a,"H2",{});var es=i(Lt);Nl=u(es,"Props"),es.forEach(e),il=$(a),tt=r(a,"TABLE",{});var El=i(tt);Ut=r(El,"THEAD",{});var ls=i(Ut);U=r(ls,"TR",{});var st=i(U);Wt=r(st,"TH",{});var os=i(Wt);Bl=u(os,"Name"),os.forEach(e),Fl=$(st),Yt=r(st,"TH",{});var as=i(Yt);Ul=u(as,"Type"),as.forEach(e),Wl=$(st),jt=r(st,"TH",{});var ss=i(jt);Yl=u(ss,"Default"),ss.forEach(e),jl=$(st),qt=r(st,"TH",{});var ns=i(qt);ql=u(ns,"Description"),ns.forEach(e),st.forEach(e),ls.forEach(e),zl=$(El),S=r(El,"TBODY",{});var F=i(S);W=r(F,"TR",{});var nt=i(W);zt=r(nt,"TD",{});var rs=i(zt);Gl=u(rs,"disabled"),rs.forEach(e),Jl=$(nt),Gt=r(nt,"TD",{});var is=i(Gt);Jt=r(is,"CODE",{});var cs=i(Jt);Kl=u(cs,"boolean"),cs.forEach(e),is.forEach(e),Ql=$(nt),Kt=r(nt,"TD",{});var fs=i(Kt);Qt=r(fs,"CODE",{});var ds=i(Qt);Xl=u(ds,"false"),ds.forEach(e),fs.forEach(e),Zl=$(nt),Xt=r(nt,"TD",{});var ps=i(Xt);xl=u(ps,"If showing the tooltip is disabled.*"),ps.forEach(e),nt.forEach(e),to=$(F),Y=r(F,"TR",{});var rt=i(Y);Zt=r(rt,"TD",{});var us=i(Zt);eo=u(us,"showOn"),us.forEach(e),lo=$(rt),xt=r(rt,"TD",{});var hs=i(xt);te=r(hs,"CODE",{});var _s=i(te);oo=u(_s,"TooltipShowOn"),_s.forEach(e),hs.forEach(e),ao=$(rt),ee=r(rt,"TD",{});var ms=i(ee);le=r(ms,"CODE",{});var vs=i(le);so=u(vs,"hover"),vs.forEach(e),ms.forEach(e),no=$(rt),oe=r(rt,"TD",{});var $s=i(oe);ro=u($s,"Which interaction shows/hides the tooltip"),$s.forEach(e),rt.forEach(e),io=$(F),j=r(F,"TR",{});var it=i(j);ae=r(it,"TD",{});var Es=i(ae);co=u(Es,"hoverDelayMilliseconds"),Es.forEach(e),fo=$(it),se=r(it,"TD",{});var gs=i(se);ne=r(gs,"CODE",{});var Ts=i(ne);po=u(Ts,"number"),Ts.forEach(e),gs.forEach(e),uo=$(it),re=r(it,"TD",{});var bs=i(re);ie=r(bs,"CODE",{});var ks=i(ie);ho=u(ks,"1000"),ks.forEach(e),bs.forEach(e),_o=$(it),ce=r(it,"TD",{});var Ds=i(ce);mo=u(Ds,"How long to delay before showing the tooltip"),Ds.forEach(e),it.forEach(e),vo=$(F),q=r(F,"TR",{});var ct=i(q);fe=r(ct,"TD",{});var ws=i(fe);$o=u(ws,"open"),ws.forEach(e),Eo=$(ct),de=r(ct,"TD",{});var Os=i(de);pe=r(Os,"CODE",{});var Cs=i(pe);go=u(Cs,"boolean"),Cs.forEach(e),Os.forEach(e),To=$(ct),ue=r(ct,"TD",{});var Hs=i(ue);he=r(Hs,"CODE",{});var Is=i(he);bo=u(Is,"false"),Is.forEach(e),Hs.forEach(e),ko=$(ct),_e=r(ct,"TD",{});var ys=i(_e);Do=u(ys,"If the tooltip is visible"),ys.forEach(e),ct.forEach(e),wo=$(F),z=r(F,"TR",{});var ft=i(z);me=r(ft,"TD",{});var Ls=i(me);Oo=u(Ls,"placement"),Ls.forEach(e),Co=$(ft),ve=r(ft,"TD",{});var Ss=i(ve);$e=r(Ss,"CODE",{});var Ps=i($e);Ho=u(Ps,"FloatingPlacement"),Ps.forEach(e),Ss.forEach(e),Io=$(ft),Ee=r(ft,"TD",{});var Rs=i(Ee);ge=r(Rs,"CODE",{});var Vs=i(ge);yo=u(Vs,"top"),Vs.forEach(e),Rs.forEach(e),Lo=$(ft),Te=r(ft,"TD",{});var As=i(Te);So=u(As,"Where the tooltip appears relative to the reference element"),As.forEach(e),ft.forEach(e),Po=$(F),G=r(F,"TR",{});var dt=i(G);be=r(dt,"TD",{});var Ms=i(be);Ro=u(Ms,"portalTarget"),Ms.forEach(e),Vo=$(dt),ke=r(dt,"TD",{});var Ns=i(ke);De=r(Ns,"CODE",{});var Bs=i(De);Ao=u(Bs,"HTMLElement"),Bs.forEach(e),Ns.forEach(e),Mo=$(dt),we=r(dt,"TD",{});var Fs=i(we);Oe=r(Fs,"CODE",{});var Us=i(Oe);No=u(Us,"document.body"),Us.forEach(e),Fs.forEach(e),Bo=$(dt),Ce=r(dt,"TD",{});var Ws=i(Ce);Fo=u(Ws,"The element to target for the tooltip portal"),Ws.forEach(e),dt.forEach(e),F.forEach(e),El.forEach(e),cl=$(a),J=r(a,"UL",{});var At=i(J);et=r(At,"LI",{});var ol=i(et);Uo=u(ol,"TooltipShowOn = "),He=r(ol,"CODE",{});var Ys=i(He);Wo=u(Ys,"'click'"),Ys.forEach(e),Yo=u(ol," | "),Ie=r(ol,"CODE",{});var js=i(Ie);jo=u(js,"'hover'"),js.forEach(e),ol.forEach(e),qo=$(At),D=r(At,"LI",{});var w=i(D);zo=u(w,"FloatingPlacement = "),ye=r(w,"CODE",{});var qs=i(ye);Go=u(qs,"'top'"),qs.forEach(e),Jo=u(w," | "),Le=r(w,"CODE",{});var zs=i(Le);Ko=u(zs,"'right'"),zs.forEach(e),Qo=u(w," | "),Se=r(w,"CODE",{});var Gs=i(Se);Xo=u(Gs,"'bottom'"),Gs.forEach(e),Zo=u(w," | "),Pe=r(w,"CODE",{});var Js=i(Pe);xo=u(Js,"'left'"),Js.forEach(e),ta=u(w," | "),Re=r(w,"CODE",{});var Ks=i(Re);ea=u(Ks,"'top-start'"),Ks.forEach(e),la=u(w," | "),Ve=r(w,"CODE",{});var Qs=i(Ve);oa=u(Qs,"'right-start'"),Qs.forEach(e),aa=u(w," | "),Ae=r(w,"CODE",{});var Xs=i(Ae);sa=u(Xs,"'bottom-start'"),Xs.forEach(e),na=u(w," | "),Me=r(w,"CODE",{});var Zs=i(Me);ra=u(Zs,"'left-start'"),Zs.forEach(e),ia=u(w," | "),Ne=r(w,"CODE",{});var xs=i(Ne);ca=u(xs,"'top-end'"),xs.forEach(e),fa=u(w," | "),Be=r(w,"CODE",{});var tn=i(Be);da=u(tn,"'right-end'"),tn.forEach(e),pa=u(w," | "),Fe=r(w,"CODE",{});var en=i(Fe);ua=u(en,"'bottom-end'"),en.forEach(e),ha=u(w," | "),Ue=r(w,"CODE",{});var ln=i(Ue);_a=u(ln,"'left-end'"),ln.forEach(e),w.forEach(e),ma=$(At),We=r(At,"LI",{});var on=i(We);va=u(on,"* Disabling the tooltip only prevents showing it. It does not disable the default slot contents."),on.forEach(e),At.forEach(e),fl=$(a),St=r(a,"H2",{});var an=i(St);$a=u(an,"Anatomy"),an.forEach(e),dl=$(a),ht=r(a,"PRE",{class:!0});var Un=i(ht);Un.forEach(e),pl=$(a),Pt=r(a,"P",{});var sn=i(Pt);Ea=u(sn,`The origin is a non-displayed element immediately following the default slot.
It locates the preceding element to reference for positioning the tooltip.`),sn.forEach(e),ul=$(a),Rt=r(a,"H2",{});var nn=i(Rt);ga=u(nn,"Slots"),nn.forEach(e),hl=$(a),lt=r(a,"TABLE",{});var gl=i(lt);Ye=r(gl,"THEAD",{});var rn=i(Ye);_t=r(rn,"TR",{});var Tl=i(_t);je=r(Tl,"TH",{});var cn=i(je);Ta=u(cn,"Name"),cn.forEach(e),ba=$(Tl),qe=r(Tl,"TH",{});var fn=i(qe);ka=u(fn,"Description"),fn.forEach(e),Tl.forEach(e),rn.forEach(e),Da=$(gl),mt=r(gl,"TBODY",{});var bl=i(mt);vt=r(bl,"TR",{});var kl=i(vt);ze=r(kl,"TD",{});var dn=i(ze);wa=u(dn,"default"),dn.forEach(e),Oa=$(kl),Ge=r(kl,"TD",{});var pn=i(Ge);Ca=u(pn,"The reference content associated with the tooltip"),pn.forEach(e),kl.forEach(e),Ha=$(bl),$t=r(bl,"TR",{});var Dl=i($t);Je=r(Dl,"TD",{});var un=i(Je);Ia=u(un,"tip"),un.forEach(e),ya=$(Dl),Ke=r(Dl,"TD",{});var hn=i(Ke);La=u(hn,"The content of the tooltip"),hn.forEach(e),Dl.forEach(e),bl.forEach(e),gl.forEach(e),_l=$(a),Vt=r(a,"H1",{});var _n=i(Vt);Sa=u(_n,"Let Params"),_n.forEach(e),ml=$(a),ot=r(a,"TABLE",{});var wl=i(ot);Qe=r(wl,"THEAD",{});var mn=i(Qe);Et=r(mn,"TR",{});var Ol=i(Et);Xe=r(Ol,"TH",{});var vn=i(Xe);Pa=u(vn,"Name"),vn.forEach(e),Ra=$(Ol),Ze=r(Ol,"TH",{});var $n=i(Ze);Va=u($n,"Passed to slots"),$n.forEach(e),Ol.forEach(e),mn.forEach(e),Aa=$(wl),gt=r(wl,"TBODY",{});var Cl=i(gt);Tt=r(Cl,"TR",{});var Hl=i(Tt);xe=r(Hl,"TD",{});var En=i(xe);Ma=u(En,"disabled"),En.forEach(e),Na=$(Hl),tl=r(Hl,"TD",{});var gn=i(tl);Ba=u(gn,"default"),gn.forEach(e),Hl.forEach(e),Fa=$(Cl),bt=r(Cl,"TR",{});var Il=i(bt);el=r(Il,"TD",{});var Tn=i(el);Ua=u(Tn,"open"),Tn.forEach(e),Wa=$(Il),ll=r(Il,"TD",{});var bn=i(ll);Ya=u(bn,"default"),bn.forEach(e),Il.forEach(e),Cl.forEach(e),wl.forEach(e),this.h()},h(){Mt(ut,"class","language-svelte"),Mt(ht,"class","language-undefined")},m(a,g){E(a,l,g),t(l,f),E(a,o,g),E(a,c,g),t(c,T),E(a,s,g),E(a,d,g),t(d,h),E(a,k,g),V(M,a,g),E(a,y,g),E(a,N,g),t(N,B),E(a,L,g),E(a,H,g),t(H,O),t(O,Ot),t(H,Nt),t(H,Q),t(Q,m),t(H,b),t(H,K),t(K,pt),t(H,Ct),t(H,X),t(X,Ht),E(a,Z,g),E(a,It,g),t(It,Pl),E(a,al,g),E(a,x,g),t(x,Bt),t(Bt,Rl),t(x,Vl),t(x,Ft),t(Ft,Al),E(a,sl,g),E(a,yt,g),t(yt,Ml),E(a,nl,g),E(a,ut,g),ut.innerHTML=Nn,E(a,rl,g),E(a,Lt,g),t(Lt,Nl),E(a,il,g),E(a,tt,g),t(tt,Ut),t(Ut,U),t(U,Wt),t(Wt,Bl),t(U,Fl),t(U,Yt),t(Yt,Ul),t(U,Wl),t(U,jt),t(jt,Yl),t(U,jl),t(U,qt),t(qt,ql),t(tt,zl),t(tt,S),t(S,W),t(W,zt),t(zt,Gl),t(W,Jl),t(W,Gt),t(Gt,Jt),t(Jt,Kl),t(W,Ql),t(W,Kt),t(Kt,Qt),t(Qt,Xl),t(W,Zl),t(W,Xt),t(Xt,xl),t(S,to),t(S,Y),t(Y,Zt),t(Zt,eo),t(Y,lo),t(Y,xt),t(xt,te),t(te,oo),t(Y,ao),t(Y,ee),t(ee,le),t(le,so),t(Y,no),t(Y,oe),t(oe,ro),t(S,io),t(S,j),t(j,ae),t(ae,co),t(j,fo),t(j,se),t(se,ne),t(ne,po),t(j,uo),t(j,re),t(re,ie),t(ie,ho),t(j,_o),t(j,ce),t(ce,mo),t(S,vo),t(S,q),t(q,fe),t(fe,$o),t(q,Eo),t(q,de),t(de,pe),t(pe,go),t(q,To),t(q,ue),t(ue,he),t(he,bo),t(q,ko),t(q,_e),t(_e,Do),t(S,wo),t(S,z),t(z,me),t(me,Oo),t(z,Co),t(z,ve),t(ve,$e),t($e,Ho),t(z,Io),t(z,Ee),t(Ee,ge),t(ge,yo),t(z,Lo),t(z,Te),t(Te,So),t(S,Po),t(S,G),t(G,be),t(be,Ro),t(G,Vo),t(G,ke),t(ke,De),t(De,Ao),t(G,Mo),t(G,we),t(we,Oe),t(Oe,No),t(G,Bo),t(G,Ce),t(Ce,Fo),E(a,cl,g),E(a,J,g),t(J,et),t(et,Uo),t(et,He),t(He,Wo),t(et,Yo),t(et,Ie),t(Ie,jo),t(J,qo),t(J,D),t(D,zo),t(D,ye),t(ye,Go),t(D,Jo),t(D,Le),t(Le,Ko),t(D,Qo),t(D,Se),t(Se,Xo),t(D,Zo),t(D,Pe),t(Pe,xo),t(D,ta),t(D,Re),t(Re,ea),t(D,la),t(D,Ve),t(Ve,oa),t(D,aa),t(D,Ae),t(Ae,sa),t(D,na),t(D,Me),t(Me,ra),t(D,ia),t(D,Ne),t(Ne,ca),t(D,fa),t(D,Be),t(Be,da),t(D,pa),t(D,Fe),t(Fe,ua),t(D,ha),t(D,Ue),t(Ue,_a),t(J,ma),t(J,We),t(We,va),E(a,fl,g),E(a,St,g),t(St,$a),E(a,dl,g),E(a,ht,g),ht.innerHTML=Bn,E(a,pl,g),E(a,Pt,g),t(Pt,Ea),E(a,ul,g),E(a,Rt,g),t(Rt,ga),E(a,hl,g),E(a,lt,g),t(lt,Ye),t(Ye,_t),t(_t,je),t(je,Ta),t(_t,ba),t(_t,qe),t(qe,ka),t(lt,Da),t(lt,mt),t(mt,vt),t(vt,ze),t(ze,wa),t(vt,Oa),t(vt,Ge),t(Ge,Ca),t(mt,Ha),t(mt,$t),t($t,Je),t(Je,Ia),t($t,ya),t($t,Ke),t(Ke,La),E(a,_l,g),E(a,Vt,g),t(Vt,Sa),E(a,ml,g),E(a,ot,g),t(ot,Qe),t(Qe,Et),t(Et,Xe),t(Xe,Pa),t(Et,Ra),t(Et,Ze),t(Ze,Va),t(ot,Aa),t(ot,gt),t(gt,Tt),t(Tt,xe),t(xe,Ma),t(Tt,Na),t(Tt,tl),t(tl,Ba),t(gt,Fa),t(gt,bt),t(bt,el),t(el,Ua),t(bt,Wa),t(bt,ll),t(ll,Ya),vl=!0},p:Sl,i(a){vl||(C(M.$$.fragment,a),vl=!0)},o(a){I(M.$$.fragment,a),vl=!1},d(a){a&&e(l),a&&e(o),a&&e(c),a&&e(s),a&&e(d),a&&e(k),A(M,a),a&&e(y),a&&e(N),a&&e(L),a&&e(H),a&&e(Z),a&&e(It),a&&e(al),a&&e(x),a&&e(sl),a&&e(yt),a&&e(nl),a&&e(ut),a&&e(rl),a&&e(Lt),a&&e(il),a&&e(tt),a&&e(cl),a&&e(J),a&&e(fl),a&&e(St),a&&e(dl),a&&e(ht),a&&e(pl),a&&e(Pt),a&&e(ul),a&&e(Rt),a&&e(hl),a&&e(lt),a&&e(_l),a&&e(Vt),a&&e(ml),a&&e(ot)}}}class Nr extends yn{constructor(l){super(),Ln(this,l,null,fr,Sn,{})}}export{Nr as default};