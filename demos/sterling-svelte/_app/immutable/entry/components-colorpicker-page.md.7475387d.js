import{S as Rs,i as As,s as Is,y as U,z as V,A as z,g as W,d as j,B as J,w as I,T as K,U as N,a as w,c as E,b as c,h as e,k as T,q as b,l as C,m as y,r as g,H as $,u as Ds,n as bs,C as qs}from"../chunks/index.666c980d.js";import{P as Us}from"../chunks/Playground.655aa626.js";import{C as Vs}from"../chunks/ColorPicker.f81fc8fa.js";import{C as fs}from"../chunks/Checkbox.f0ef92d5.js";function zs(o){let n,a,r,p,d;function h(l){o[11](l)}function u(l){o[12](l)}function f(l){o[13](l)}let k={colorful:o[3],composed:o[4],disabled:o[5]};return o[1]!==void 0&&(k.colorText=o[1]),o[2]!==void 0&&(k.colorFormat=o[2]),o[6]!==void 0&&(k.open=o[6]),n=new Vs({props:k}),I.push(()=>K(n,"colorText",h,o[1])),I.push(()=>K(n,"colorFormat",u,o[2])),I.push(()=>K(n,"open",f,o[6])),{c(){U(n.$$.fragment)},l(l){V(n.$$.fragment,l)},m(l,v){z(n,l,v),d=!0},p(l,v){const H={};v&8&&(H.colorful=l[3]),v&16&&(H.composed=l[4]),v&32&&(H.disabled=l[5]),!a&&v&2&&(a=!0,H.colorText=l[1],N(()=>a=!1)),!r&&v&4&&(r=!0,H.colorFormat=l[2],N(()=>r=!1)),!p&&v&64&&(p=!0,H.open=l[6],N(()=>p=!1)),n.$set(H)},i(l){d||(W(n.$$.fragment,l),d=!0)},o(l){j(n.$$.fragment,l),d=!1},d(l){J(n,l)}}}function Ws(o){let n;return{c(){n=b("colorful")},l(a){n=g(a,"colorful")},m(a,r){c(a,n,r)},d(a){a&&e(n)}}}function js(o){let n;return{c(){n=b("composed")},l(a){n=g(a,"composed")},m(a,r){c(a,n,r)},d(a){a&&e(n)}}}function Js(o){let n;return{c(){n=b("disabled")},l(a){n=g(a,"disabled")},m(a,r){c(a,n,r)},d(a){a&&e(n)}}}function Ks(o){let n;return{c(){n=b("open")},l(a){n=g(a,"open")},m(a,r){c(a,n,r)},d(a){a&&e(n)}}}function Ns(o){let n,a,r,p,d,h,u,f,k,l,v,H;function B(t){o[7](t)}let P={$$slots:{default:[Ws]},$$scope:{ctx:o}};o[3]!==void 0&&(P.checked=o[3]),n=new fs({props:P}),I.push(()=>K(n,"checked",B,o[3]));function G(t){o[8](t)}let R={$$slots:{default:[js]},$$scope:{ctx:o}};o[4]!==void 0&&(R.checked=o[4]),p=new fs({props:R}),I.push(()=>K(p,"checked",G,o[4]));function L(t){o[9](t)}let _={$$slots:{default:[Js]},$$scope:{ctx:o}};o[5]!==void 0&&(_.checked=o[5]),u=new fs({props:_}),I.push(()=>K(u,"checked",L,o[5]));function O(t){o[10](t)}let F={$$slots:{default:[Ks]},$$scope:{ctx:o}};return o[6]!==void 0&&(F.checked=o[6]),l=new fs({props:F}),I.push(()=>K(l,"checked",O,o[6])),{c(){U(n.$$.fragment),r=w(),U(p.$$.fragment),h=w(),U(u.$$.fragment),k=w(),U(l.$$.fragment)},l(t){V(n.$$.fragment,t),r=E(t),V(p.$$.fragment,t),h=E(t),V(u.$$.fragment,t),k=E(t),V(l.$$.fragment,t)},m(t,m){z(n,t,m),c(t,r,m),z(p,t,m),c(t,h,m),z(u,t,m),c(t,k,m),z(l,t,m),H=!0},p(t,m){const S={};m&32768&&(S.$$scope={dirty:m,ctx:t}),!a&&m&8&&(a=!0,S.checked=t[3],N(()=>a=!1)),n.$set(S);const X={};m&32768&&(X.$$scope={dirty:m,ctx:t}),!d&&m&16&&(d=!0,X.checked=t[4],N(()=>d=!1)),p.$set(X);const A={};m&32768&&(A.$$scope={dirty:m,ctx:t}),!f&&m&32&&(f=!0,A.checked=t[5],N(()=>f=!1)),u.$set(A);const D={};m&32768&&(D.$$scope={dirty:m,ctx:t}),!v&&m&64&&(v=!0,D.checked=t[6],N(()=>v=!1)),l.$set(D)},i(t){H||(W(n.$$.fragment,t),W(p.$$.fragment,t),W(u.$$.fragment,t),W(l.$$.fragment,t),H=!0)},o(t){j(n.$$.fragment,t),j(p.$$.fragment,t),j(u.$$.fragment,t),j(l.$$.fragment,t),H=!1},d(t){J(n,t),t&&e(r),J(p,t),t&&e(h),J(u,t),t&&e(k),J(l,t)}}}function Os(o){let n,a,r,p,d,h,u;return{c(){n=T("div"),a=b("colorText: "),r=b(o[1]),p=w(),d=T("div"),h=b("colorFormat: "),u=b(o[2])},l(f){n=C(f,"DIV",{});var k=y(n);a=g(k,"colorText: "),r=g(k,o[1]),k.forEach(e),p=E(f),d=C(f,"DIV",{});var l=y(d);h=g(l,"colorFormat: "),u=g(l,o[2]),l.forEach(e)},m(f,k){c(f,n,k),$(n,a),$(n,r),c(f,p,k),c(f,d,k),$(d,h),$(d,u)},p(f,k){k&2&&Ds(r,f[1]),k&4&&Ds(u,f[2])},d(f){f&&e(n),f&&e(p),f&&e(d)}}}function Qs(o){let n,a,r={noEvents:!0,$$slots:{status:[Os],props:[Ns],component:[zs]},$$scope:{ctx:o}};return n=new Us({props:r}),o[14](n),{c(){U(n.$$.fragment)},l(p){V(n.$$.fragment,p)},m(p,d){z(n,p,d),a=!0},p(p,[d]){const h={};d&32894&&(h.$$scope={dirty:d,ctx:p}),n.$set(h)},i(p){a||(W(n.$$.fragment,p),a=!0)},o(p){j(n.$$.fragment,p),a=!1},d(p){o[14](null),J(n,p)}}}function Ys(o,n,a){let r,p="hsla(222, 50%, 70%, 0.5)",d="hsl",h=!1,u=!1,f=!1,k=!1;function l(_){h=_,a(3,h)}function v(_){u=_,a(4,u)}function H(_){f=_,a(5,f)}function B(_){k=_,a(6,k)}function P(_){p=_,a(1,p)}function G(_){d=_,a(2,d)}function R(_){k=_,a(6,k)}function L(_){I[_?"unshift":"push"](()=>{r=_,a(0,r)})}return[r,p,d,h,u,f,k,l,v,H,B,P,G,R,L]}class Zs extends Rs{constructor(n){super(),As(this,n,Ys,Qs,Is,{})}}function sn(o){let n,a,r,p,d,h,u,f,k,l,v,H,B,P,G,R,L,_,O,F,t=`<code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ColorFormat</span> <span class="token operator">=</span> <span class="token string">'hex'</span> <span class="token operator">|</span> <span class="token string">'rgb'</span> <span class="token operator">|</span> <span class="token string">'hsl'</span><span class="token punctuation">;</span></code>`,m,S,X,A,D,ks,os,x,Bs=`<code class="language-ts"><span class="token comment">/** The color value in HEX, RGB, or HSL format */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> colorText<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> defaultColorText<span class="token punctuation">;</span>

<span class="token comment">/** The current color format */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> colorFormat<span class="token operator">:</span> ColorFormat <span class="token operator">=</span> <span class="token string">'hex'</span><span class="token punctuation">;</span>

<span class="token comment">/** When true, applies colorful theme styles. */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> colorful <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">/** If the picker shoud have its container handle borders and focus indicators */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> composed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">/** If the picker is disabled */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> disabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">/** If the picker dropdown is open */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></code>`,as,Q,ds,ts,Y,ms,ls,Z,_s,ps,ss,hs,cs,M,Gs=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Color indicator --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- Color text input --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Color format tabs --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabList</span> <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- Color sliders --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HexColorSliders</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HslColorSliders</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RgbColorSliders</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span></code>`,rs,ns,$s,is,q,us;return q=new Zs({}),{c(){n=T("h1"),a=b("ColorPicker"),r=w(),p=T("p"),d=b("A Dropdown containing a color value, an input for editing the color text, and sliders for choosing the color in RGB(A), HEX(8), or HSL(A) formats."),h=w(),u=T("ul"),f=T("li"),k=b("The dropdown displays a set of sliders based on the color format selected."),l=w(),v=T("li"),H=b("Changing the input to a color value with a different color format, switches the selected color format."),B=w(),P=T("li"),G=b("Switching from HSL to HEX or RGB rounds values to the nearest color."),R=w(),L=T("h2"),_=b("Types"),O=w(),F=T("pre"),m=w(),S=T("h2"),X=b("Props"),A=w(),D=T("p"),ks=b("Dropdown props are included."),os=w(),x=T("pre"),as=w(),Q=T("h2"),ds=b("Events"),ts=w(),Y=T("p"),ms=b("Dropdown events are included."),ls=w(),Z=T("h2"),_s=b("Anatomy"),ps=w(),ss=T("p"),hs=b("There are not currently any slots with ColorPicker because it is a composite control that closely coordinates the input and the slider values."),cs=w(),M=T("pre"),rs=w(),ns=T("h2"),$s=b("Playground"),is=w(),U(q.$$.fragment),this.h()},l(s){n=C(s,"H1",{});var i=y(n);a=g(i,"ColorPicker"),i.forEach(e),r=E(s),p=C(s,"P",{});var gs=y(p);d=g(gs,"A Dropdown containing a color value, an input for editing the color text, and sliders for choosing the color in RGB(A), HEX(8), or HSL(A) formats."),gs.forEach(e),h=E(s),u=C(s,"UL",{});var es=y(u);f=C(es,"LI",{});var vs=y(f);k=g(vs,"The dropdown displays a set of sliders based on the color format selected."),vs.forEach(e),l=E(es),v=C(es,"LI",{});var ws=y(v);H=g(ws,"Changing the input to a color value with a different color format, switches the selected color format."),ws.forEach(e),B=E(es),P=C(es,"LI",{});var Es=y(P);G=g(Es,"Switching from HSL to HEX or RGB rounds values to the nearest color."),Es.forEach(e),es.forEach(e),R=E(s),L=C(s,"H2",{});var Ts=y(L);_=g(Ts,"Types"),Ts.forEach(e),O=E(s),F=C(s,"PRE",{class:!0});var Xs=y(F);Xs.forEach(e),m=E(s),S=C(s,"H2",{});var Cs=y(S);X=g(Cs,"Props"),Cs.forEach(e),A=E(s),D=C(s,"P",{});var ys=y(D);ks=g(ys,"Dropdown props are included."),ys.forEach(e),os=E(s),x=C(s,"PRE",{class:!0});var xs=y(x);xs.forEach(e),as=E(s),Q=C(s,"H2",{});var Hs=y(Q);ds=g(Hs,"Events"),Hs.forEach(e),ts=E(s),Y=C(s,"P",{});var Ps=y(Y);ms=g(Ps,"Dropdown events are included."),Ps.forEach(e),ls=E(s),Z=C(s,"H2",{});var Ls=y(Z);_s=g(Ls,"Anatomy"),Ls.forEach(e),ps=E(s),ss=C(s,"P",{});var Fs=y(ss);hs=g(Fs,"There are not currently any slots with ColorPicker because it is a composite control that closely coordinates the input and the slider values."),Fs.forEach(e),cs=E(s),M=C(s,"PRE",{class:!0});var Ms=y(M);Ms.forEach(e),rs=E(s),ns=C(s,"H2",{});var Ss=y(ns);$s=g(Ss,"Playground"),Ss.forEach(e),is=E(s),V(q.$$.fragment,s),this.h()},h(){bs(F,"class","language-ts"),bs(x,"class","language-ts"),bs(M,"class","language-svelte")},m(s,i){c(s,n,i),$(n,a),c(s,r,i),c(s,p,i),$(p,d),c(s,h,i),c(s,u,i),$(u,f),$(f,k),$(u,l),$(u,v),$(v,H),$(u,B),$(u,P),$(P,G),c(s,R,i),c(s,L,i),$(L,_),c(s,O,i),c(s,F,i),F.innerHTML=t,c(s,m,i),c(s,S,i),$(S,X),c(s,A,i),c(s,D,i),$(D,ks),c(s,os,i),c(s,x,i),x.innerHTML=Bs,c(s,as,i),c(s,Q,i),$(Q,ds),c(s,ts,i),c(s,Y,i),$(Y,ms),c(s,ls,i),c(s,Z,i),$(Z,_s),c(s,ps,i),c(s,ss,i),$(ss,hs),c(s,cs,i),c(s,M,i),M.innerHTML=Gs,c(s,rs,i),c(s,ns,i),$(ns,$s),c(s,is,i),z(q,s,i),us=!0},p:qs,i(s){us||(W(q.$$.fragment,s),us=!0)},o(s){j(q.$$.fragment,s),us=!1},d(s){s&&e(n),s&&e(r),s&&e(p),s&&e(h),s&&e(u),s&&e(R),s&&e(L),s&&e(O),s&&e(F),s&&e(m),s&&e(S),s&&e(A),s&&e(D),s&&e(os),s&&e(x),s&&e(as),s&&e(Q),s&&e(ts),s&&e(Y),s&&e(ls),s&&e(Z),s&&e(ps),s&&e(ss),s&&e(cs),s&&e(M),s&&e(rs),s&&e(ns),s&&e(is),J(q,s)}}}class tn extends Rs{constructor(n){super(),As(this,n,null,sn,Is,{})}}export{tn as default};