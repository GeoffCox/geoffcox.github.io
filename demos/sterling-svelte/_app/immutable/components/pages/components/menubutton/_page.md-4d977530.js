import{S as Ua,i as Qa,s as Ya,M as Fa,w as H,x as R,y,Q as pl,a7 as il,f as w,t as g,z as S,T as xs,U as ml,_ as fl,V as cl,a5 as dl,W as _l,C as ja,X as D,E as el,k as o,a as f,l as r,m as u,c,h as e,b as E,F as t,I as nl,J as al,K as sl,q as k,r as v,D as hl,H as $l,B as Ka,n as cn}from"../../../../chunks/index-2a6ec5ba.js";import{C as kl}from"../../../../chunks/Checkbox-920d4dc2.js";import{P as vl}from"../../../../chunks/Playground-87676494.js";import{f as El,b as Il,m as Tl,c as bl,d as Dl,M as W}from"../../../../chunks/MenuItem-e6c8aca1.js";import{M as fn}from"../../../../chunks/MenuSeparator-2c7ad691.js";import{w as wl}from"../../../../chunks/index-8f48d2b2.js";import{B as gl}from"../../../../chunks/Button-b1d25008.js";import{v as Ml}from"../../../../chunks/v4-a960c1f4.js";const Bl=l=>({}),tl=l=>({});function Hl(l){let n;const d=l[10].items,i=el(d,l,l[37],tl);return{c(){i&&i.c()},l(_){i&&i.l(_)},m(_,h){i&&i.m(_,h),n=!0},p(_,h){i&&i.p&&(!n||h[1]&64)&&nl(i,d,_,_[37],n?sl(d,_[37],h,Bl):al(_[37]),tl)},i(_){n||(w(i,_),n=!0)},o(_){g(i,_),n=!1},d(_){i&&i.d(_)}}}function Rl(l){let n,d,i,_;const h=l[10].default,$=el(h,l,l[37],null);return i=new Dl({props:{id:l[6],reference:l[4],open:l[0],$$slots:{default:[Hl]},$$scope:{ctx:l}}}),{c(){n=o("div"),$&&$.c(),d=f(),H(i.$$.fragment)},l(m){n=r(m,"DIV",{});var b=u(n);$&&$.l(b),d=c(b),R(i.$$.fragment,b),b.forEach(e)},m(m,b){E(m,n,b),$&&$.m(n,null),t(n,d),y(i,n,null),l[11](n),_=!0},p(m,b){$&&$.p&&(!_||b[1]&64)&&nl($,h,m,m[37],_?sl(h,m[37],b,null):al(m[37]),null);const M={};b[0]&64&&(M.id=m[6]),b[0]&16&&(M.reference=m[4]),b[0]&1&&(M.open=m[0]),b[1]&64&&(M.$$scope={dirty:b,ctx:m}),i.$set(M)},i(m){_||(w($,m),w(i.$$.fragment,m),_=!0)},o(m){g($,m),g(i.$$.fragment,m),_=!1},d(m){m&&e(n),$&&$.d(m),S(i),l[11](null)}}}function yl(l){let n,d;const i=[{"aria-controls":l[6]},{"aria-expanded":l[0]},{"aria-haspopup":l[5]},{"aria-owns":l[6]},{"data-menu-item-id":l[1]},{"data-root-menu-item-id":l[1]},{variant:l[3]},{shape:l[2]},l[9]];let _={$$slots:{default:[Rl]},$$scope:{ctx:l}};for(let h=0;h<i.length;h+=1)_=Fa(_,i[h]);return n=new gl({props:_}),n.$on("blur",l[12]),n.$on("click",l[13]),n.$on("click",l[8]),n.$on("dblclick",l[14]),n.$on("focus",l[15]),n.$on("focusin",l[16]),n.$on("focusout",l[17]),n.$on("keydown",l[18]),n.$on("keypress",l[19]),n.$on("keyup",l[20]),n.$on("mousedown",l[21]),n.$on("mouseenter",l[22]),n.$on("mouseleave",l[23]),n.$on("mousemove",l[24]),n.$on("mouseover",l[25]),n.$on("mouseout",l[26]),n.$on("mouseup",l[27]),n.$on("pointercancel",l[28]),n.$on("pointerdown",l[29]),n.$on("pointerenter",l[30]),n.$on("pointerleave",l[31]),n.$on("pointermove",l[32]),n.$on("pointerover",l[33]),n.$on("pointerout",l[34]),n.$on("pointerup",l[35]),n.$on("wheel",l[36]),{c(){H(n.$$.fragment)},l(h){R(n.$$.fragment,h)},m(h,$){y(n,h,$),d=!0},p(h,$){const m=$[0]&623?pl(i,[$[0]&64&&{"aria-controls":h[6]},$[0]&1&&{"aria-expanded":h[0]},$[0]&32&&{"aria-haspopup":h[5]},$[0]&64&&{"aria-owns":h[6]},$[0]&2&&{"data-menu-item-id":h[1]},$[0]&2&&{"data-root-menu-item-id":h[1]},$[0]&8&&{variant:h[3]},$[0]&4&&{shape:h[2]},$[0]&512&&il(h[9])]):{};$[0]&81|$[1]&64&&(m.$$scope={dirty:$,ctx:h}),n.$set(m)},i(h){d||(w(n.$$.fragment,h),d=!0)},o(h){g(n.$$.fragment,h),d=!1},d(h){S(n,h)}}}function Sl(l,n,d){let i,_;const h=["menuItemId","open","shape","variant"];let $=xs(n,h),m,{$$slots:b={},$$scope:M}=n;const L=ml(b);let{menuItemId:C}=n,{open:B=!1}=n,{shape:F="rounded"}=n,{variant:V="regular"}=n;const P=Ml();let U;const A=wl([]);fl(l,A,p=>d(38,m=p));const z=cl(),O=p=>{z("close",{menuItemId:p})},at=p=>{z("open",{menuItemId:p})},N=p=>{z("select",{menuItemId:p})},Q=()=>{d(0,B=!B),B&&setTimeout(()=>bl(m),10)};dl(Tl,{rootMenuItemId:C,depth:1,register:p=>{A.set([...m,p])},unregister:p=>{A.set(m.filter(xt=>xt.id!==p.id))},closeMenu:p=>{d(0,B=!1)},focusPrevious:p=>El(m,p),focusNext:p=>Il(m,p),onOpen:at,onClose:O,onSelect:N});function Y(p){ja[p?"unshift":"push"](()=>{U=p,d(4,U)})}function X(p){D.call(this,l,p)}function q(p){D.call(this,l,p)}function st(p){D.call(this,l,p)}function s(p){D.call(this,l,p)}function T(p){D.call(this,l,p)}function St(p){D.call(this,l,p)}function rt(p){D.call(this,l,p)}function J(p){D.call(this,l,p)}function Ct(p){D.call(this,l,p)}function Pt(p){D.call(this,l,p)}function ct(p){D.call(this,l,p)}function Vt(p){D.call(this,l,p)}function At(p){D.call(this,l,p)}function lt(p){D.call(this,l,p)}function bt(p){D.call(this,l,p)}function j(p){D.call(this,l,p)}function Dt(p){D.call(this,l,p)}function zt(p){D.call(this,l,p)}function Jt(p){D.call(this,l,p)}function wt(p){D.call(this,l,p)}function Wt(p){D.call(this,l,p)}function Xt(p){D.call(this,l,p)}function gt(p){D.call(this,l,p)}function Gt(p){D.call(this,l,p)}function Zt(p){D.call(this,l,p)}return l.$$set=p=>{n=Fa(Fa({},n),_l(p)),d(9,$=xs(n,h)),"menuItemId"in p&&d(1,C=p.menuItemId),"open"in p&&d(0,B=p.open),"shape"in p&&d(2,F=p.shape),"variant"in p&&d(3,V=p.variant),"$$scope"in p&&d(37,M=p.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&2&&d(6,i=`${C}-menu-${P}`)},d(5,_=L.items),[B,C,F,V,U,_,i,A,Q,$,b,Y,X,q,st,s,T,St,rt,J,Ct,Pt,ct,Vt,At,lt,bt,j,Dt,zt,Jt,wt,Wt,Xt,gt,Gt,Zt,M]}class Cl extends Ua{constructor(n){super(),Qa(this,n,Sl,yl,Ya,{menuItemId:1,open:0,shape:2,variant:3},null,[-1,-1])}}function Pl(l){let n;return{c(){n=k(">")},l(d){n=v(d,">")},m(d,i){E(d,n,i)},d(d){d&&e(n)}}}function Al(l){let n;return{c(){n=k("File")},l(d){n=v(d,"File")},m(d,i){E(d,n,i)},d(d){d&&e(n)}}}function Ll(l){let n,d,i,_,h,$;return n=new W({props:{menuItemId:"file-share-email",text:"E-mail"}}),i=new W({props:{menuItemId:"file-share-text",text:"Text Messaging"}}),h=new W({props:{menuItemId:"file-share-internet",text:"Entire Internet"}}),{c(){H(n.$$.fragment),d=f(),H(i.$$.fragment),_=f(),H(h.$$.fragment)},l(m){R(n.$$.fragment,m),d=c(m),R(i.$$.fragment,m),_=c(m),R(h.$$.fragment,m)},m(m,b){y(n,m,b),E(m,d,b),y(i,m,b),E(m,_,b),y(h,m,b),$=!0},p:Ka,i(m){$||(w(n.$$.fragment,m),w(i.$$.fragment,m),w(h.$$.fragment,m),$=!0)},o(m){g(n.$$.fragment,m),g(i.$$.fragment,m),g(h.$$.fragment,m),$=!1},d(m){S(n,m),m&&e(d),S(i,m),m&&e(_),S(h,m)}}}function ql(l){let n,d,i,_,h,$,m,b,M,L,C,B,F,V,P,U,A,z,O,at,N,Q,Y,X,q,st;return n=new W({props:{menuItemId:"file-new",text:"New"}}),i=new W({props:{menuItemId:"file-open",text:"Open..."}}),h=new W({props:{menuItemId:"file-save",text:"Save"}}),m=new W({props:{menuItemId:"file-save-as",text:"Save As...",disabled:!0}}),M=new fn({}),C=new W({props:{menuItemId:"auto-save",role:"menuitemcheckbox",text:"Auto Save",checked:l[3]}}),C.$on("select",l[5]),F=new fn({}),P=new W({props:{menuItemId:"prefer-performance",role:"menuitemradio",text:"Performance Mode",checked:l[2]==="performance"}}),P.$on("select",l[6]),A=new W({props:{menuItemId:"prefer-quality",role:"menuitemradio",text:"Quality Mode",checked:l[2]==="quality"}}),A.$on("select",l[7]),O=new fn({}),N=new W({props:{menuItemId:"file-share",text:"Share",$$slots:{default:[Ll]},$$scope:{ctx:l}}}),Y=new fn({}),q=new W({props:{menuItemId:"file-quit",text:"Quit"}}),{c(){H(n.$$.fragment),d=f(),H(i.$$.fragment),_=f(),H(h.$$.fragment),$=f(),H(m.$$.fragment),b=f(),H(M.$$.fragment),L=f(),H(C.$$.fragment),B=f(),H(F.$$.fragment),V=f(),H(P.$$.fragment),U=f(),H(A.$$.fragment),z=f(),H(O.$$.fragment),at=f(),H(N.$$.fragment),Q=f(),H(Y.$$.fragment),X=f(),H(q.$$.fragment)},l(s){R(n.$$.fragment,s),d=c(s),R(i.$$.fragment,s),_=c(s),R(h.$$.fragment,s),$=c(s),R(m.$$.fragment,s),b=c(s),R(M.$$.fragment,s),L=c(s),R(C.$$.fragment,s),B=c(s),R(F.$$.fragment,s),V=c(s),R(P.$$.fragment,s),U=c(s),R(A.$$.fragment,s),z=c(s),R(O.$$.fragment,s),at=c(s),R(N.$$.fragment,s),Q=c(s),R(Y.$$.fragment,s),X=c(s),R(q.$$.fragment,s)},m(s,T){y(n,s,T),E(s,d,T),y(i,s,T),E(s,_,T),y(h,s,T),E(s,$,T),y(m,s,T),E(s,b,T),y(M,s,T),E(s,L,T),y(C,s,T),E(s,B,T),y(F,s,T),E(s,V,T),y(P,s,T),E(s,U,T),y(A,s,T),E(s,z,T),y(O,s,T),E(s,at,T),y(N,s,T),E(s,Q,T),y(Y,s,T),E(s,X,T),y(q,s,T),st=!0},p(s,T){const St={};T&8&&(St.checked=s[3]),C.$set(St);const rt={};T&4&&(rt.checked=s[2]==="performance"),P.$set(rt);const J={};T&4&&(J.checked=s[2]==="quality"),A.$set(J);const Ct={};T&512&&(Ct.$$scope={dirty:T,ctx:s}),N.$set(Ct)},i(s){st||(w(n.$$.fragment,s),w(i.$$.fragment,s),w(h.$$.fragment,s),w(m.$$.fragment,s),w(M.$$.fragment,s),w(C.$$.fragment,s),w(F.$$.fragment,s),w(P.$$.fragment,s),w(A.$$.fragment,s),w(O.$$.fragment,s),w(N.$$.fragment,s),w(Y.$$.fragment,s),w(q.$$.fragment,s),st=!0)},o(s){g(n.$$.fragment,s),g(i.$$.fragment,s),g(h.$$.fragment,s),g(m.$$.fragment,s),g(M.$$.fragment,s),g(C.$$.fragment,s),g(F.$$.fragment,s),g(P.$$.fragment,s),g(A.$$.fragment,s),g(O.$$.fragment,s),g(N.$$.fragment,s),g(Y.$$.fragment,s),g(q.$$.fragment,s),st=!1},d(s){S(n,s),s&&e(d),S(i,s),s&&e(_),S(h,s),s&&e($),S(m,s),s&&e(b),S(M,s),s&&e(L),S(C,s),s&&e(B),S(F,s),s&&e(V),S(P,s),s&&e(U),S(A,s),s&&e(z),S(O,s),s&&e(at),S(N,s),s&&e(Q),S(Y,s),s&&e(X),S(q,s)}}}function Ol(l){let n,d;return n=new Cl({props:{menuItemId:"file",$$slots:{items:[ql],default:[Al]},$$scope:{ctx:l}}}),{c(){H(n.$$.fragment)},l(i){R(n.$$.fragment,i)},m(i,_){y(n,i,_),d=!0},p(i,_){const h={};_&524&&(h.$$scope={dirty:_,ctx:i}),n.$set(h)},i(i){d||(w(n.$$.fragment,i),d=!0)},o(i){g(n.$$.fragment,i),d=!1},d(i){S(n,i)}}}function Nl(l){let n,d;return{c(){n=o("span"),d=k("disabled"),this.h()},l(i){n=r(i,"SPAN",{slot:!0});var _=u(n);d=v(_,"disabled"),_.forEach(e),this.h()},h(){cn(n,"slot","label")},m(i,_){E(i,n,_),t(n,d)},p:Ka,d(i){i&&e(n)}}}function Fl(l){let n,d,i;function _($){l[4]($)}let h={$$slots:{label:[Nl]},$$scope:{ctx:l}};return l[1]!==void 0&&(h.checked=l[1]),n=new kl({props:h}),ja.push(()=>hl(n,"checked",_,l[1])),{c(){H(n.$$.fragment)},l($){R(n.$$.fragment,$)},m($,m){y(n,$,m),i=!0},p($,m){const b={};m&512&&(b.$$scope={dirty:m,ctx:$}),!d&&m&2&&(d=!0,b.checked=$[1],$l(()=>d=!1)),n.$set(b)},i($){i||(w(n.$$.fragment,$),i=!0)},o($){g(n.$$.fragment,$),i=!1},d($){S(n,$)}}}function Ul(l){let n,d,i={$$slots:{options:[Fl],component:[Ol],default:[Pl]},$$scope:{ctx:l}};return n=new vl({props:i}),l[8](n),{c(){H(n.$$.fragment)},l(_){R(n.$$.fragment,_)},m(_,h){y(n,_,h),d=!0},p(_,[h]){const $={};h&526&&($.$$scope={dirty:h,ctx:_}),n.$set($)},i(_){d||(w(n.$$.fragment,_),d=!0)},o(_){g(n.$$.fragment,_),d=!1},d(_){l[8](null),S(n,_)}}}function Ql(l,n,d){let i,_=!1,h="performance",$=!1;function m(B){_=B,d(1,_)}const b=()=>d(3,$=!$),M=()=>d(2,h="performance"),L=()=>d(2,h="quality");function C(B){ja[B?"unshift":"push"](()=>{i=B,d(0,i)})}return[i,_,h,$,m,b,M,L,C]}class Yl extends Ua{constructor(n){super(),Qa(this,n,Ql,Ul,Ya,{})}}function jl(l){let n,d,i,_,h,$,m,b,M,L,C,B,F,V,P,U,A,z,O,at,N,Q,Y,X,q,st,s,T,St=`<code class="language-ts"><span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>menuItemId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,rt,J,Ct=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">menuItemId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>File<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>select=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onSelect<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">menuItemId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>New<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">menuItemId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Open<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">menuItemId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>save<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Save<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">menuItemId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span></code>`,Pt,ct,Vt,At,lt,bt,j,Dt,zt,Jt,wt,Wt,Xt,gt,Gt,Zt,p,xt,dn,K,G,te,_n,hn,Ye,$n,je,kn,ee,vn,En,Z,ne,In,Tn,ae,bn,Dn,se,wn,gn,le,Mn,Bn,x,oe,Hn,Rn,re,yn,Sn,Ke,Cn,ue,Pn,An,tt,pe,Ln,qn,ie,On,Nn,me,Fn,Un,fe,Qn,Yn,et,ce,jn,Kn,de,Vn,zn,Ve,Jn,_e,Wn,ze,Lt,he,Xn,Je,qt,Gn,We,dt,$e,ut,ke,Zn,xn,ve,ta,ea,Ee,na,aa,nt,pt,Ie,sa,la,Xe,oa,Te,ra,ua,it,be,pa,ia,De,we,ma,fa,ge,ca,da,mt,Me,_a,ha,Be,He,$a,ka,Re,va,Ea,ft,ye,Ia,Ta,Se,Ce,ba,Da,Pe,wa,Ge,Ot,Ae,ga,Ze,Nt,Ma,xe,Mt,ll=`<code class="language-undefined">Button
  default slot
  Menu
    items slot</code>`,tn,Ft,Ba,en,_t,Le,Bt,qe,Ha,Ra,Oe,ya,Sa,Ht,Rt,Ne,Ca,Pa,Fe,Aa,La,yt,Ue,qa,Oa,Qe,Na,nn;return L=new Yl({}),{c(){n=o("h1"),d=k("MenuButton"),i=f(),_=o("p"),h=k("A Button that shows a context menu when clicked."),$=f(),m=o("h2"),b=k("Playground"),M=f(),H(L.$$.fragment),C=f(),B=o("h2"),F=k("Features"),V=f(),P=o("ul"),U=o("li"),A=k("Same features as the Button component"),z=f(),O=o("li"),at=k("Same features as the menu of the MenuItem component."),N=f(),Q=o("h2"),Y=k("Usage"),X=f(),q=o("p"),st=k(`Declare a hierarchy of MenuItems each with a unique ID and text to display.
Children of a MenuItem will be in its submenu.`),s=f(),T=o("pre"),rt=f(),J=o("pre"),Pt=f(),ct=o("h2"),Vt=k("Props"),At=f(),lt=o("table"),bt=o("thead"),j=o("tr"),Dt=o("th"),zt=k("Name"),Jt=f(),wt=o("th"),Wt=k("Type"),Xt=f(),gt=o("th"),Gt=k("Default"),Zt=f(),p=o("th"),xt=k("Description"),dn=f(),K=o("tbody"),G=o("tr"),te=o("td"),_n=k("(Button)"),hn=f(),Ye=o("td"),$n=f(),je=o("td"),kn=f(),ee=o("td"),vn=k("Button props"),En=f(),Z=o("tr"),ne=o("td"),In=k("open"),Tn=f(),ae=o("td"),bn=k("boolean"),Dn=f(),se=o("td"),wn=k("false"),gn=f(),le=o("td"),Mn=k("If the submenu is visible"),Bn=f(),x=o("tr"),oe=o("td"),Hn=k("menuItemId"),Rn=f(),re=o("td"),yn=k("string"),Sn=f(),Ke=o("td"),Cn=f(),ue=o("td"),Pn=k("The unqiue ID of the menu item."),An=f(),tt=o("tr"),pe=o("td"),Ln=k("role"),qn=f(),ie=o("td"),On=k("string*"),Nn=f(),me=o("td"),Fn=k("‘menuitem’"),Un=f(),fe=o("td"),Qn=k("The aria role of the menu item."),Yn=f(),et=o("tr"),ce=o("td"),jn=k("text"),Kn=f(),de=o("td"),Vn=k("string"),zn=f(),Ve=o("td"),Jn=f(),_e=o("td"),Wn=k("The text to display for the menu item."),ze=f(),Lt=o("ul"),he=o("li"),Xn=k("* ‘menuitem’ | ‘menuitemcheckbox’ | ‘menuitemradio’"),Je=f(),qt=o("h2"),Gn=k("Events"),We=f(),dt=o("table"),$e=o("thead"),ut=o("tr"),ke=o("th"),Zn=k("Name"),xn=f(),ve=o("th"),ta=k("Event.detail"),ea=f(),Ee=o("th"),na=k("Description"),aa=f(),nt=o("tbody"),pt=o("tr"),Ie=o("td"),sa=k("(Button)"),la=f(),Xe=o("td"),oa=f(),Te=o("td"),ra=k("Button events"),ua=f(),it=o("tr"),be=o("td"),pa=k("close*"),ia=f(),De=o("td"),we=o("code"),ma=k("{ menuItemId }"),fa=f(),ge=o("td"),ca=k("Raised when a menu item’s submenu is closed."),da=f(),mt=o("tr"),Me=o("td"),_a=k("open*"),ha=f(),Be=o("td"),He=o("code"),$a=k("{ menuItemId }"),ka=f(),Re=o("td"),va=k("Raised when a menu item’s submenu is opened."),Ea=f(),ft=o("tr"),ye=o("td"),Ia=k("select*"),Ta=f(),Se=o("td"),Ce=o("code"),ba=k("{ menuItemId }"),Da=f(),Pe=o("td"),wa=k("Raised when a menu item is clicked/selected."),Ge=f(),Ot=o("ul"),Ae=o("li"),ga=k("* raised for a menu item or any of its submenu children."),Ze=f(),Nt=o("h2"),Ma=k("Anatomy"),xe=f(),Mt=o("pre"),tn=f(),Ft=o("h2"),Ba=k("Slots"),en=f(),_t=o("table"),Le=o("thead"),Bt=o("tr"),qe=o("th"),Ha=k("Slot"),Ra=f(),Oe=o("th"),ya=k("Description"),Sa=f(),Ht=o("tbody"),Rt=o("tr"),Ne=o("td"),Ca=k("default"),Pa=f(),Fe=o("td"),Aa=k("Button content"),La=f(),yt=o("tr"),Ue=o("td"),qa=k("items"),Oa=f(),Qe=o("td"),Na=k("Menu items in the context menu"),this.h()},l(a){n=r(a,"H1",{});var I=u(n);d=v(I,"MenuButton"),I.forEach(e),i=c(a),_=r(a,"P",{});var Va=u(_);h=v(Va,"A Button that shows a context menu when clicked."),Va.forEach(e),$=c(a),m=r(a,"H2",{});var za=u(m);b=v(za,"Playground"),za.forEach(e),M=c(a),R(L.$$.fragment,a),C=c(a),B=r(a,"H2",{});var Ja=u(B);F=v(Ja,"Features"),Ja.forEach(e),V=c(a),P=r(a,"UL",{});var an=u(P);U=r(an,"LI",{});var Wa=u(U);A=v(Wa,"Same features as the Button component"),Wa.forEach(e),z=c(an),O=r(an,"LI",{});var Xa=u(O);at=v(Xa,"Same features as the menu of the MenuItem component."),Xa.forEach(e),an.forEach(e),N=c(a),Q=r(a,"H2",{});var Ga=u(Q);Y=v(Ga,"Usage"),Ga.forEach(e),X=c(a),q=r(a,"P",{});var Za=u(q);st=v(Za,`Declare a hierarchy of MenuItems each with a unique ID and text to display.
Children of a MenuItem will be in its submenu.`),Za.forEach(e),s=c(a),T=r(a,"PRE",{class:!0});var ol=u(T);ol.forEach(e),rt=c(a),J=r(a,"PRE",{class:!0});var rl=u(J);rl.forEach(e),Pt=c(a),ct=r(a,"H2",{});var xa=u(ct);Vt=v(xa,"Props"),xa.forEach(e),At=c(a),lt=r(a,"TABLE",{});var sn=u(lt);bt=r(sn,"THEAD",{});var ts=u(bt);j=r(ts,"TR",{});var ht=u(j);Dt=r(ht,"TH",{});var es=u(Dt);zt=v(es,"Name"),es.forEach(e),Jt=c(ht),wt=r(ht,"TH",{});var ns=u(wt);Wt=v(ns,"Type"),ns.forEach(e),Xt=c(ht),gt=r(ht,"TH",{});var as=u(gt);Gt=v(as,"Default"),as.forEach(e),Zt=c(ht),p=r(ht,"TH",{});var ss=u(p);xt=v(ss,"Description"),ss.forEach(e),ht.forEach(e),ts.forEach(e),dn=c(sn),K=r(sn,"TBODY",{});var ot=u(K);G=r(ot,"TR",{});var $t=u(G);te=r($t,"TD",{});var ls=u(te);_n=v(ls,"(Button)"),ls.forEach(e),hn=c($t),Ye=r($t,"TD",{}),u(Ye).forEach(e),$n=c($t),je=r($t,"TD",{}),u(je).forEach(e),kn=c($t),ee=r($t,"TD",{});var os=u(ee);vn=v(os,"Button props"),os.forEach(e),$t.forEach(e),En=c(ot),Z=r(ot,"TR",{});var kt=u(Z);ne=r(kt,"TD",{});var rs=u(ne);In=v(rs,"open"),rs.forEach(e),Tn=c(kt),ae=r(kt,"TD",{});var us=u(ae);bn=v(us,"boolean"),us.forEach(e),Dn=c(kt),se=r(kt,"TD",{});var ps=u(se);wn=v(ps,"false"),ps.forEach(e),gn=c(kt),le=r(kt,"TD",{});var is=u(le);Mn=v(is,"If the submenu is visible"),is.forEach(e),kt.forEach(e),Bn=c(ot),x=r(ot,"TR",{});var vt=u(x);oe=r(vt,"TD",{});var ms=u(oe);Hn=v(ms,"menuItemId"),ms.forEach(e),Rn=c(vt),re=r(vt,"TD",{});var fs=u(re);yn=v(fs,"string"),fs.forEach(e),Sn=c(vt),Ke=r(vt,"TD",{}),u(Ke).forEach(e),Cn=c(vt),ue=r(vt,"TD",{});var cs=u(ue);Pn=v(cs,"The unqiue ID of the menu item."),cs.forEach(e),vt.forEach(e),An=c(ot),tt=r(ot,"TR",{});var Et=u(tt);pe=r(Et,"TD",{});var ds=u(pe);Ln=v(ds,"role"),ds.forEach(e),qn=c(Et),ie=r(Et,"TD",{});var _s=u(ie);On=v(_s,"string*"),_s.forEach(e),Nn=c(Et),me=r(Et,"TD",{});var hs=u(me);Fn=v(hs,"‘menuitem’"),hs.forEach(e),Un=c(Et),fe=r(Et,"TD",{});var $s=u(fe);Qn=v($s,"The aria role of the menu item."),$s.forEach(e),Et.forEach(e),Yn=c(ot),et=r(ot,"TR",{});var It=u(et);ce=r(It,"TD",{});var ks=u(ce);jn=v(ks,"text"),ks.forEach(e),Kn=c(It),de=r(It,"TD",{});var vs=u(de);Vn=v(vs,"string"),vs.forEach(e),zn=c(It),Ve=r(It,"TD",{}),u(Ve).forEach(e),Jn=c(It),_e=r(It,"TD",{});var Es=u(_e);Wn=v(Es,"The text to display for the menu item."),Es.forEach(e),It.forEach(e),ot.forEach(e),sn.forEach(e),ze=c(a),Lt=r(a,"UL",{});var Is=u(Lt);he=r(Is,"LI",{});var Ts=u(he);Xn=v(Ts,"* ‘menuitem’ | ‘menuitemcheckbox’ | ‘menuitemradio’"),Ts.forEach(e),Is.forEach(e),Je=c(a),qt=r(a,"H2",{});var bs=u(qt);Gn=v(bs,"Events"),bs.forEach(e),We=c(a),dt=r(a,"TABLE",{});var ln=u(dt);$e=r(ln,"THEAD",{});var Ds=u($e);ut=r(Ds,"TR",{});var Ut=u(ut);ke=r(Ut,"TH",{});var ws=u(ke);Zn=v(ws,"Name"),ws.forEach(e),xn=c(Ut),ve=r(Ut,"TH",{});var gs=u(ve);ta=v(gs,"Event.detail"),gs.forEach(e),ea=c(Ut),Ee=r(Ut,"TH",{});var Ms=u(Ee);na=v(Ms,"Description"),Ms.forEach(e),Ut.forEach(e),Ds.forEach(e),aa=c(ln),nt=r(ln,"TBODY",{});var Tt=u(nt);pt=r(Tt,"TR",{});var Qt=u(pt);Ie=r(Qt,"TD",{});var Bs=u(Ie);sa=v(Bs,"(Button)"),Bs.forEach(e),la=c(Qt),Xe=r(Qt,"TD",{}),u(Xe).forEach(e),oa=c(Qt),Te=r(Qt,"TD",{});var Hs=u(Te);ra=v(Hs,"Button events"),Hs.forEach(e),Qt.forEach(e),ua=c(Tt),it=r(Tt,"TR",{});var Yt=u(it);be=r(Yt,"TD",{});var Rs=u(be);pa=v(Rs,"close*"),Rs.forEach(e),ia=c(Yt),De=r(Yt,"TD",{});var ys=u(De);we=r(ys,"CODE",{});var Ss=u(we);ma=v(Ss,"{ menuItemId }"),Ss.forEach(e),ys.forEach(e),fa=c(Yt),ge=r(Yt,"TD",{});var Cs=u(ge);ca=v(Cs,"Raised when a menu item’s submenu is closed."),Cs.forEach(e),Yt.forEach(e),da=c(Tt),mt=r(Tt,"TR",{});var jt=u(mt);Me=r(jt,"TD",{});var Ps=u(Me);_a=v(Ps,"open*"),Ps.forEach(e),ha=c(jt),Be=r(jt,"TD",{});var As=u(Be);He=r(As,"CODE",{});var Ls=u(He);$a=v(Ls,"{ menuItemId }"),Ls.forEach(e),As.forEach(e),ka=c(jt),Re=r(jt,"TD",{});var qs=u(Re);va=v(qs,"Raised when a menu item’s submenu is opened."),qs.forEach(e),jt.forEach(e),Ea=c(Tt),ft=r(Tt,"TR",{});var Kt=u(ft);ye=r(Kt,"TD",{});var Os=u(ye);Ia=v(Os,"select*"),Os.forEach(e),Ta=c(Kt),Se=r(Kt,"TD",{});var Ns=u(Se);Ce=r(Ns,"CODE",{});var Fs=u(Ce);ba=v(Fs,"{ menuItemId }"),Fs.forEach(e),Ns.forEach(e),Da=c(Kt),Pe=r(Kt,"TD",{});var Us=u(Pe);wa=v(Us,"Raised when a menu item is clicked/selected."),Us.forEach(e),Kt.forEach(e),Tt.forEach(e),ln.forEach(e),Ge=c(a),Ot=r(a,"UL",{});var Qs=u(Ot);Ae=r(Qs,"LI",{});var Ys=u(Ae);ga=v(Ys,"* raised for a menu item or any of its submenu children."),Ys.forEach(e),Qs.forEach(e),Ze=c(a),Nt=r(a,"H2",{});var js=u(Nt);Ma=v(js,"Anatomy"),js.forEach(e),xe=c(a),Mt=r(a,"PRE",{class:!0});var ul=u(Mt);ul.forEach(e),tn=c(a),Ft=r(a,"H2",{});var Ks=u(Ft);Ba=v(Ks,"Slots"),Ks.forEach(e),en=c(a),_t=r(a,"TABLE",{});var on=u(_t);Le=r(on,"THEAD",{});var Vs=u(Le);Bt=r(Vs,"TR",{});var rn=u(Bt);qe=r(rn,"TH",{});var zs=u(qe);Ha=v(zs,"Slot"),zs.forEach(e),Ra=c(rn),Oe=r(rn,"TH",{});var Js=u(Oe);ya=v(Js,"Description"),Js.forEach(e),rn.forEach(e),Vs.forEach(e),Sa=c(on),Ht=r(on,"TBODY",{});var un=u(Ht);Rt=r(un,"TR",{});var pn=u(Rt);Ne=r(pn,"TD",{});var Ws=u(Ne);Ca=v(Ws,"default"),Ws.forEach(e),Pa=c(pn),Fe=r(pn,"TD",{});var Xs=u(Fe);Aa=v(Xs,"Button content"),Xs.forEach(e),pn.forEach(e),La=c(un),yt=r(un,"TR",{});var mn=u(yt);Ue=r(mn,"TD",{});var Gs=u(Ue);qa=v(Gs,"items"),Gs.forEach(e),Oa=c(mn),Qe=r(mn,"TD",{});var Zs=u(Qe);Na=v(Zs,"Menu items in the context menu"),Zs.forEach(e),mn.forEach(e),un.forEach(e),on.forEach(e),this.h()},h(){cn(T,"class","language-ts"),cn(J,"class","language-svelte"),cn(Mt,"class","language-undefined")},m(a,I){E(a,n,I),t(n,d),E(a,i,I),E(a,_,I),t(_,h),E(a,$,I),E(a,m,I),t(m,b),E(a,M,I),y(L,a,I),E(a,C,I),E(a,B,I),t(B,F),E(a,V,I),E(a,P,I),t(P,U),t(U,A),t(P,z),t(P,O),t(O,at),E(a,N,I),E(a,Q,I),t(Q,Y),E(a,X,I),E(a,q,I),t(q,st),E(a,s,I),E(a,T,I),T.innerHTML=St,E(a,rt,I),E(a,J,I),J.innerHTML=Ct,E(a,Pt,I),E(a,ct,I),t(ct,Vt),E(a,At,I),E(a,lt,I),t(lt,bt),t(bt,j),t(j,Dt),t(Dt,zt),t(j,Jt),t(j,wt),t(wt,Wt),t(j,Xt),t(j,gt),t(gt,Gt),t(j,Zt),t(j,p),t(p,xt),t(lt,dn),t(lt,K),t(K,G),t(G,te),t(te,_n),t(G,hn),t(G,Ye),t(G,$n),t(G,je),t(G,kn),t(G,ee),t(ee,vn),t(K,En),t(K,Z),t(Z,ne),t(ne,In),t(Z,Tn),t(Z,ae),t(ae,bn),t(Z,Dn),t(Z,se),t(se,wn),t(Z,gn),t(Z,le),t(le,Mn),t(K,Bn),t(K,x),t(x,oe),t(oe,Hn),t(x,Rn),t(x,re),t(re,yn),t(x,Sn),t(x,Ke),t(x,Cn),t(x,ue),t(ue,Pn),t(K,An),t(K,tt),t(tt,pe),t(pe,Ln),t(tt,qn),t(tt,ie),t(ie,On),t(tt,Nn),t(tt,me),t(me,Fn),t(tt,Un),t(tt,fe),t(fe,Qn),t(K,Yn),t(K,et),t(et,ce),t(ce,jn),t(et,Kn),t(et,de),t(de,Vn),t(et,zn),t(et,Ve),t(et,Jn),t(et,_e),t(_e,Wn),E(a,ze,I),E(a,Lt,I),t(Lt,he),t(he,Xn),E(a,Je,I),E(a,qt,I),t(qt,Gn),E(a,We,I),E(a,dt,I),t(dt,$e),t($e,ut),t(ut,ke),t(ke,Zn),t(ut,xn),t(ut,ve),t(ve,ta),t(ut,ea),t(ut,Ee),t(Ee,na),t(dt,aa),t(dt,nt),t(nt,pt),t(pt,Ie),t(Ie,sa),t(pt,la),t(pt,Xe),t(pt,oa),t(pt,Te),t(Te,ra),t(nt,ua),t(nt,it),t(it,be),t(be,pa),t(it,ia),t(it,De),t(De,we),t(we,ma),t(it,fa),t(it,ge),t(ge,ca),t(nt,da),t(nt,mt),t(mt,Me),t(Me,_a),t(mt,ha),t(mt,Be),t(Be,He),t(He,$a),t(mt,ka),t(mt,Re),t(Re,va),t(nt,Ea),t(nt,ft),t(ft,ye),t(ye,Ia),t(ft,Ta),t(ft,Se),t(Se,Ce),t(Ce,ba),t(ft,Da),t(ft,Pe),t(Pe,wa),E(a,Ge,I),E(a,Ot,I),t(Ot,Ae),t(Ae,ga),E(a,Ze,I),E(a,Nt,I),t(Nt,Ma),E(a,xe,I),E(a,Mt,I),Mt.innerHTML=ll,E(a,tn,I),E(a,Ft,I),t(Ft,Ba),E(a,en,I),E(a,_t,I),t(_t,Le),t(Le,Bt),t(Bt,qe),t(qe,Ha),t(Bt,Ra),t(Bt,Oe),t(Oe,ya),t(_t,Sa),t(_t,Ht),t(Ht,Rt),t(Rt,Ne),t(Ne,Ca),t(Rt,Pa),t(Rt,Fe),t(Fe,Aa),t(Ht,La),t(Ht,yt),t(yt,Ue),t(Ue,qa),t(yt,Oa),t(yt,Qe),t(Qe,Na),nn=!0},p:Ka,i(a){nn||(w(L.$$.fragment,a),nn=!0)},o(a){g(L.$$.fragment,a),nn=!1},d(a){a&&e(n),a&&e(i),a&&e(_),a&&e($),a&&e(m),a&&e(M),S(L,a),a&&e(C),a&&e(B),a&&e(V),a&&e(P),a&&e(N),a&&e(Q),a&&e(X),a&&e(q),a&&e(s),a&&e(T),a&&e(rt),a&&e(J),a&&e(Pt),a&&e(ct),a&&e(At),a&&e(lt),a&&e(ze),a&&e(Lt),a&&e(Je),a&&e(qt),a&&e(We),a&&e(dt),a&&e(Ge),a&&e(Ot),a&&e(Ze),a&&e(Nt),a&&e(xe),a&&e(Mt),a&&e(tn),a&&e(Ft),a&&e(en),a&&e(_t)}}}class xl extends Ua{constructor(n){super(),Qa(this,n,null,jl,Ya,{})}}export{xl as default};