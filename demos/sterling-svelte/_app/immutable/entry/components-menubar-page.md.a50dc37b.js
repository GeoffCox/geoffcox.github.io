import{S as h,i as ee,s as te,L as we,D as d,k as Y,l as X,m as j,h as k,Y as ne,Z as se,b as M,_ as T,M as be,N as xe,O as Me,I as ye,g as _,d as v,$ as Ee,J as ae,a4 as Ce,a3 as Ie,a5 as pe,K as Fe,a0 as A,w as ue,y as g,z as w,A as b,B as x,a as E,c as C,C as Q,q as Z,r as G,n as Pe,H as K}from"../chunks/index.60e805ab.js";import{P as Re}from"../chunks/Playground.e480cf30.js";import{b as Se,e as Ne,M as F}from"../chunks/MenuItem.eba7a53d.js";import{w as Oe}from"../chunks/index.15eb4eef.js";/* empty css                                                      */import{M as J}from"../chunks/MenuSeparator.b74ab7b8.js";function Te(r){let t,o,u,$;const p=r[6].default,f=we(p,r,r[5],null);let n=[{class:"sterling-menu-bar"},{role:"menubar"},r[2]],l={};for(let s=0;s<n.length;s+=1)l=d(l,n[s]);return{c(){t=Y("div"),f&&f.c(),this.h()},l(s){t=X(s,"DIV",{class:!0,role:!0});var y=j(t);f&&f.l(y),y.forEach(k),this.h()},h(){ne(t,l),se(t,"svelte-obdzqg",!0)},m(s,y){M(s,t,y),f&&f.m(t,null),r[28](t),o=!0,u||($=[T(t,"blur",r[7]),T(t,"click",r[8]),T(t,"copy",r[9]),T(t,"cut",r[10]),T(t,"dblclick",r[11]),T(t,"focus",r[12]),T(t,"focusin",r[13]),T(t,"focusout",r[14]),T(t,"keydown",r[15]),T(t,"keypress",r[16]),T(t,"keyup",r[17]),T(t,"mousedown",r[18]),T(t,"mouseenter",r[19]),T(t,"mouseleave",r[20]),T(t,"mousemove",r[21]),T(t,"mouseover",r[22]),T(t,"mouseout",r[23]),T(t,"mouseup",r[24]),T(t,"scroll",r[25]),T(t,"wheel",r[26]),T(t,"paste",r[27])],u=!0)},p(s,y){f&&f.p&&(!o||y[0]&32)&&be(f,p,s,s[5],o?Me(p,s[5],y,null):xe(s[5]),null),ne(t,l=ye(n,[{class:"sterling-menu-bar"},{role:"menubar"},y[0]&4&&s[2]])),se(t,"svelte-obdzqg",!0)},i(s){o||(_(f,s),o=!0)},o(s){v(f,s),o=!1},d(s){s&&k(t),f&&f.d(s),r[28](null),u=!1,Ee($)}}}function Ae(r,t,o){const u=["blur","focus"];let $=ae(t,u),p,{$$slots:f={},$$scope:n}=t,l;const s=Ce(),y=m=>{s("close",{value:m})},P=m=>{s("open",{value:m})},L=m=>{s("select",{value:m})},R=()=>{l==null||l.blur()},S=m=>{l==null||l.focus(m)},a=Oe([]);Ie(r,a,m=>o(29,p=m));const I=m=>{const V=p==null?void 0:p.findIndex(U=>U.value===m);if(V!==-1){const U=V===0?p.length-1:V-1;p[U].focus(),p[U].open()}},O=m=>{const V=p==null?void 0:p.findIndex(U=>U.value===m);if(V!==-1){const U=(V+1)%p.length;p[U].focus(),p[U].open()}};pe(Se,{register:m=>{a.set([...p,m])},unregister:m=>{a.set(p.filter(V=>V.value!==m.value))},closeMenu:m=>{},focusPrevious:I,focusNext:O,onClose:y,onOpen:P,onSelect:L}),pe(Ne,{openPreviousMenu:I,openNextMenu:O});function D(m){A.call(this,r,m)}function c(m){A.call(this,r,m)}function N(m){A.call(this,r,m)}function B(m){A.call(this,r,m)}function H(m){A.call(this,r,m)}function z(m){A.call(this,r,m)}function q(m){A.call(this,r,m)}function e(m){A.call(this,r,m)}function i(m){A.call(this,r,m)}function W(m){A.call(this,r,m)}function re(m){A.call(this,r,m)}function le(m){A.call(this,r,m)}function me(m){A.call(this,r,m)}function $e(m){A.call(this,r,m)}function oe(m){A.call(this,r,m)}function fe(m){A.call(this,r,m)}function ie(m){A.call(this,r,m)}function ce(m){A.call(this,r,m)}function ke(m){A.call(this,r,m)}function _e(m){A.call(this,r,m)}function ve(m){A.call(this,r,m)}function ge(m){ue[m?"unshift":"push"](()=>{l=m,o(0,l)})}return r.$$set=m=>{t=d(d({},t),Fe(m)),o(2,$=ae(t,u)),"$$scope"in m&&o(5,n=m.$$scope)},[l,a,$,R,S,n,f,D,c,N,B,H,z,q,e,i,W,re,le,me,$e,oe,fe,ie,ce,ke,_e,ve,ge]}class Le extends h{constructor(t){super(),ee(this,t,Ae,Te,te,{blur:3,focus:4},null,[-1,-1])}get blur(){return this.$$.ctx[3]}get focus(){return this.$$.ctx[4]}}function Be(r){let t,o,u,$,p,f;return t=new F({props:{value:"recent-7",text:"Recent File 7"}}),u=new F({props:{value:"recent-8",text:"Recent File 8"}}),p=new F({props:{value:"recent-9",text:"Recent File 9"}}),{c(){g(t.$$.fragment),o=E(),g(u.$$.fragment),$=E(),g(p.$$.fragment)},l(n){w(t.$$.fragment,n),o=C(n),w(u.$$.fragment,n),$=C(n),w(p.$$.fragment,n)},m(n,l){b(t,n,l),M(n,o,l),b(u,n,l),M(n,$,l),b(p,n,l),f=!0},p:Q,i(n){f||(_(t.$$.fragment,n),_(u.$$.fragment,n),_(p.$$.fragment,n),f=!0)},o(n){v(t.$$.fragment,n),v(u.$$.fragment,n),v(p.$$.fragment,n),f=!1},d(n){x(t,n),n&&k(o),x(u,n),n&&k($),x(p,n)}}}function ze(r){let t,o,u,$,p,f,n,l,s,y,P,L,R,S;return t=new F({props:{value:"recent-1",text:"Recent File 1"}}),u=new F({props:{value:"recent-2",text:"Recent File 2"}}),p=new F({props:{value:"recent-3",text:"Recent File 3"}}),n=new F({props:{value:"recent-4",text:"Recent File 4"}}),s=new F({props:{value:"recent-5",text:"Recent File 5"}}),P=new F({props:{value:"recent-6",text:"Recent File 6"}}),R=new F({props:{value:"open-recent-older",text:"Older",$$slots:{default:[Be]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment),o=E(),g(u.$$.fragment),$=E(),g(p.$$.fragment),f=E(),g(n.$$.fragment),l=E(),g(s.$$.fragment),y=E(),g(P.$$.fragment),L=E(),g(R.$$.fragment)},l(a){w(t.$$.fragment,a),o=C(a),w(u.$$.fragment,a),$=C(a),w(p.$$.fragment,a),f=C(a),w(n.$$.fragment,a),l=C(a),w(s.$$.fragment,a),y=C(a),w(P.$$.fragment,a),L=C(a),w(R.$$.fragment,a)},m(a,I){b(t,a,I),M(a,o,I),b(u,a,I),M(a,$,I),b(p,a,I),M(a,f,I),b(n,a,I),M(a,l,I),b(s,a,I),M(a,y,I),b(P,a,I),M(a,L,I),b(R,a,I),S=!0},p(a,I){const O={};I&32&&(O.$$scope={dirty:I,ctx:a}),R.$set(O)},i(a){S||(_(t.$$.fragment,a),_(u.$$.fragment,a),_(p.$$.fragment,a),_(n.$$.fragment,a),_(s.$$.fragment,a),_(P.$$.fragment,a),_(R.$$.fragment,a),S=!0)},o(a){v(t.$$.fragment,a),v(u.$$.fragment,a),v(p.$$.fragment,a),v(n.$$.fragment,a),v(s.$$.fragment,a),v(P.$$.fragment,a),v(R.$$.fragment,a),S=!1},d(a){x(t,a),a&&k(o),x(u,a),a&&k($),x(p,a),a&&k(f),x(n,a),a&&k(l),x(s,a),a&&k(y),x(P,a),a&&k(L),x(R,a)}}}function De(r){let t,o,u,$,p,f,n,l,s,y,P,L,R,S,a,I,O,D,c,N,B,H,z,q;return t=new F({props:{value:"new-file",text:"New..."}}),u=new J({}),p=new F({props:{value:"open-file",text:"Open..."}}),n=new F({props:{value:"open-folder",text:"Open Folder..."}}),s=new F({props:{value:"open-recent",text:"Open Recent",$$slots:{default:[ze]},$$scope:{ctx:r}}}),P=new J({}),R=new F({props:{value:"save",text:"Save"}}),a=new F({props:{value:"save-as",text:"Save As..."}}),O=new F({props:{value:"save-all",text:"Save All"}}),c=new J({}),B=new F({props:{value:"close-file",text:"Close File"}}),z=new F({props:{value:"close-folder",text:"Close Folder"}}),{c(){g(t.$$.fragment),o=E(),g(u.$$.fragment),$=E(),g(p.$$.fragment),f=E(),g(n.$$.fragment),l=E(),g(s.$$.fragment),y=E(),g(P.$$.fragment),L=E(),g(R.$$.fragment),S=E(),g(a.$$.fragment),I=E(),g(O.$$.fragment),D=E(),g(c.$$.fragment),N=E(),g(B.$$.fragment),H=E(),g(z.$$.fragment)},l(e){w(t.$$.fragment,e),o=C(e),w(u.$$.fragment,e),$=C(e),w(p.$$.fragment,e),f=C(e),w(n.$$.fragment,e),l=C(e),w(s.$$.fragment,e),y=C(e),w(P.$$.fragment,e),L=C(e),w(R.$$.fragment,e),S=C(e),w(a.$$.fragment,e),I=C(e),w(O.$$.fragment,e),D=C(e),w(c.$$.fragment,e),N=C(e),w(B.$$.fragment,e),H=C(e),w(z.$$.fragment,e)},m(e,i){b(t,e,i),M(e,o,i),b(u,e,i),M(e,$,i),b(p,e,i),M(e,f,i),b(n,e,i),M(e,l,i),b(s,e,i),M(e,y,i),b(P,e,i),M(e,L,i),b(R,e,i),M(e,S,i),b(a,e,i),M(e,I,i),b(O,e,i),M(e,D,i),b(c,e,i),M(e,N,i),b(B,e,i),M(e,H,i),b(z,e,i),q=!0},p(e,i){const W={};i&32&&(W.$$scope={dirty:i,ctx:e}),s.$set(W)},i(e){q||(_(t.$$.fragment,e),_(u.$$.fragment,e),_(p.$$.fragment,e),_(n.$$.fragment,e),_(s.$$.fragment,e),_(P.$$.fragment,e),_(R.$$.fragment,e),_(a.$$.fragment,e),_(O.$$.fragment,e),_(c.$$.fragment,e),_(B.$$.fragment,e),_(z.$$.fragment,e),q=!0)},o(e){v(t.$$.fragment,e),v(u.$$.fragment,e),v(p.$$.fragment,e),v(n.$$.fragment,e),v(s.$$.fragment,e),v(P.$$.fragment,e),v(R.$$.fragment,e),v(a.$$.fragment,e),v(O.$$.fragment,e),v(c.$$.fragment,e),v(B.$$.fragment,e),v(z.$$.fragment,e),q=!1},d(e){x(t,e),e&&k(o),x(u,e),e&&k($),x(p,e),e&&k(f),x(n,e),e&&k(l),x(s,e),e&&k(y),x(P,e),e&&k(L),x(R,e),e&&k(S),x(a,e),e&&k(I),x(O,e),e&&k(D),x(c,e),e&&k(N),x(B,e),e&&k(H),x(z,e)}}}function He(r){let t,o,u,$,p,f,n,l,s,y,P,L,R,S,a,I,O,D,c,N,B,H,z,q;return t=new F({props:{value:"undo",text:"Undo"}}),u=new F({props:{value:"redo",text:"Redo"}}),p=new J({}),n=new F({props:{value:"cut",text:"Cut"}}),s=new F({props:{value:"copy",text:"Copy"}}),P=new F({props:{value:"paste",text:"Paste"}}),R=new J({}),a=new F({props:{value:"find",text:"Find"}}),O=new F({props:{value:"replace",text:"Replace"}}),c=new J({}),B=new F({props:{value:"whitespace",role:"menuitemcheckbox",text:"Show whitespace"}}),z=new F({props:{value:"word-wrap",role:"menuitemcheckbox",text:"Word wrap",checked:!0}}),{c(){g(t.$$.fragment),o=E(),g(u.$$.fragment),$=E(),g(p.$$.fragment),f=E(),g(n.$$.fragment),l=E(),g(s.$$.fragment),y=E(),g(P.$$.fragment),L=E(),g(R.$$.fragment),S=E(),g(a.$$.fragment),I=E(),g(O.$$.fragment),D=E(),g(c.$$.fragment),N=E(),g(B.$$.fragment),H=E(),g(z.$$.fragment)},l(e){w(t.$$.fragment,e),o=C(e),w(u.$$.fragment,e),$=C(e),w(p.$$.fragment,e),f=C(e),w(n.$$.fragment,e),l=C(e),w(s.$$.fragment,e),y=C(e),w(P.$$.fragment,e),L=C(e),w(R.$$.fragment,e),S=C(e),w(a.$$.fragment,e),I=C(e),w(O.$$.fragment,e),D=C(e),w(c.$$.fragment,e),N=C(e),w(B.$$.fragment,e),H=C(e),w(z.$$.fragment,e)},m(e,i){b(t,e,i),M(e,o,i),b(u,e,i),M(e,$,i),b(p,e,i),M(e,f,i),b(n,e,i),M(e,l,i),b(s,e,i),M(e,y,i),b(P,e,i),M(e,L,i),b(R,e,i),M(e,S,i),b(a,e,i),M(e,I,i),b(O,e,i),M(e,D,i),b(c,e,i),M(e,N,i),b(B,e,i),M(e,H,i),b(z,e,i),q=!0},p:Q,i(e){q||(_(t.$$.fragment,e),_(u.$$.fragment,e),_(p.$$.fragment,e),_(n.$$.fragment,e),_(s.$$.fragment,e),_(P.$$.fragment,e),_(R.$$.fragment,e),_(a.$$.fragment,e),_(O.$$.fragment,e),_(c.$$.fragment,e),_(B.$$.fragment,e),_(z.$$.fragment,e),q=!0)},o(e){v(t.$$.fragment,e),v(u.$$.fragment,e),v(p.$$.fragment,e),v(n.$$.fragment,e),v(s.$$.fragment,e),v(P.$$.fragment,e),v(R.$$.fragment,e),v(a.$$.fragment,e),v(O.$$.fragment,e),v(c.$$.fragment,e),v(B.$$.fragment,e),v(z.$$.fragment,e),q=!1},d(e){x(t,e),e&&k(o),x(u,e),e&&k($),x(p,e),e&&k(f),x(n,e),e&&k(l),x(s,e),e&&k(y),x(P,e),e&&k(L),x(R,e),e&&k(S),x(a,e),e&&k(I),x(O,e),e&&k(D),x(c,e),e&&k(N),x(B,e),e&&k(H),x(z,e)}}}function qe(r){let t,o,u,$,p,f,n,l;return t=new F({props:{value:"explorer",role:"menuitemradio",checked:!0,text:"Explorer"}}),u=new F({props:{value:"search",role:"menuitemradio",text:"Search"}}),p=new F({props:{value:"source-control",role:"menuitemradio",text:"Source Control"}}),n=new F({props:{value:"extensions",role:"menuitemradio",text:"Extensions"}}),{c(){g(t.$$.fragment),o=E(),g(u.$$.fragment),$=E(),g(p.$$.fragment),f=E(),g(n.$$.fragment)},l(s){w(t.$$.fragment,s),o=C(s),w(u.$$.fragment,s),$=C(s),w(p.$$.fragment,s),f=C(s),w(n.$$.fragment,s)},m(s,y){b(t,s,y),M(s,o,y),b(u,s,y),M(s,$,y),b(p,s,y),M(s,f,y),b(n,s,y),l=!0},p:Q,i(s){l||(_(t.$$.fragment,s),_(u.$$.fragment,s),_(p.$$.fragment,s),_(n.$$.fragment,s),l=!0)},o(s){v(t.$$.fragment,s),v(u.$$.fragment,s),v(p.$$.fragment,s),v(n.$$.fragment,s),l=!1},d(s){x(t,s),s&&k(o),x(u,s),s&&k($),x(p,s),s&&k(f),x(n,s)}}}function Ue(r){let t,o,u,$,p,f;return t=new F({props:{value:"file",text:"File",$$slots:{default:[De]},$$scope:{ctx:r}}}),u=new F({props:{value:"edit",text:"Edit",$$slots:{default:[He]},$$scope:{ctx:r}}}),p=new F({props:{value:"view",text:"View",$$slots:{default:[qe]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment),o=E(),g(u.$$.fragment),$=E(),g(p.$$.fragment)},l(n){w(t.$$.fragment,n),o=C(n),w(u.$$.fragment,n),$=C(n),w(p.$$.fragment,n)},m(n,l){b(t,n,l),M(n,o,l),b(u,n,l),M(n,$,l),b(p,n,l),f=!0},p(n,l){const s={};l&32&&(s.$$scope={dirty:l,ctx:n}),t.$set(s);const y={};l&32&&(y.$$scope={dirty:l,ctx:n}),u.$set(y);const P={};l&32&&(P.$$scope={dirty:l,ctx:n}),p.$set(P)},i(n){f||(_(t.$$.fragment,n),_(u.$$.fragment,n),_(p.$$.fragment,n),f=!0)},o(n){v(t.$$.fragment,n),v(u.$$.fragment,n),v(p.$$.fragment,n),f=!1},d(n){x(t,n),n&&k(o),x(u,n),n&&k($),x(p,n)}}}function Ve(r){let t,o;return t=new Le({props:{$$slots:{default:[Ue]},$$scope:{ctx:r}}}),t.$on("close",r[1]),t.$on("open",r[2]),t.$on("select",r[3]),{c(){g(t.$$.fragment)},l(u){w(t.$$.fragment,u)},m(u,$){b(t,u,$),o=!0},p(u,$){const p={};$&32&&(p.$$scope={dirty:$,ctx:u}),t.$set(p)},i(u){o||(_(t.$$.fragment,u),o=!0)},o(u){v(t.$$.fragment,u),o=!1},d(u){x(t,u)}}}function Ke(r){let t,o,u={$$slots:{component:[Ve]},$$scope:{ctx:r}};return t=new Re({props:u}),r[4](t),{c(){g(t.$$.fragment)},l($){w(t.$$.fragment,$)},m($,p){b(t,$,p),o=!0},p($,[p]){const f={};p&33&&(f.$$scope={dirty:p,ctx:$}),t.$set(f)},i($){o||(_(t.$$.fragment,$),o=!0)},o($){v(t.$$.fragment,$),o=!1},d($){r[4](null),x(t,$)}}}function Ye(r,t,o){let u;const $=l=>u.recordEvent(`close '${l.detail.value}'`),p=l=>u.recordEvent(`open '${l.detail.value}'`),f=l=>u.recordEvent(`select '${l.detail.value}'`);function n(l){ue[l?"unshift":"push"](()=>{u=l,o(0,u)})}return[u,$,p,f,n]}class Xe extends h{constructor(t){super(),ee(this,t,Ye,Ke,te,{})}}function je(r){let t,o,u,$,p,f,n,l,s,y,P,L,R,S,a,I,O=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// ----- Props ----- //</span>

  <span class="token comment">// HTMLDivElement props are forwarded</span>

  <span class="token comment">// ----- Events ----- //</span>

  <span class="token comment">// HTMLDivElement events are bubbled</span>

  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> value <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'open'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> value <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> value <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ----- Methods ----- //</span>

  <span class="token keyword">function</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">focus</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> FocusOptions</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ----- Context ----- //</span>

  type MenuBarContext <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    openPreviousMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">currentValue</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    openNextMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">currentValue</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Anatomy --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,D;return S=new Xe({}),{c(){t=Y("h1"),o=Z("MenuBar"),u=E(),$=Y("p"),p=Z("A horizontal list of menu items typically at the top of a window."),f=E(),n=Y("ul"),l=Y("li"),s=Z("Children can be MenuItem or non-MenuItem components"),y=E(),P=Y("li"),L=Z("Bubbles events for MenuItem descendants"),R=E(),g(S.$$.fragment),a=E(),I=Y("pre"),this.h()},l(c){t=X(c,"H1",{});var N=j(t);o=G(N,"MenuBar"),N.forEach(k),u=C(c),$=X(c,"P",{});var B=j($);p=G(B,"A horizontal list of menu items typically at the top of a window."),B.forEach(k),f=C(c),n=X(c,"UL",{});var H=j(n);l=X(H,"LI",{});var z=j(l);s=G(z,"Children can be MenuItem or non-MenuItem components"),z.forEach(k),y=C(H),P=X(H,"LI",{});var q=j(P);L=G(q,"Bubbles events for MenuItem descendants"),q.forEach(k),H.forEach(k),R=C(c),w(S.$$.fragment,c),a=C(c),I=X(c,"PRE",{class:!0});var e=j(I);e.forEach(k),this.h()},h(){Pe(I,"class","language-svelte")},m(c,N){M(c,t,N),K(t,o),M(c,u,N),M(c,$,N),K($,p),M(c,f,N),M(c,n,N),K(n,l),K(l,s),K(n,y),K(n,P),K(P,L),M(c,R,N),b(S,c,N),M(c,a,N),M(c,I,N),I.innerHTML=O,D=!0},p:Q,i(c){D||(_(S.$$.fragment,c),D=!0)},o(c){v(S.$$.fragment,c),D=!1},d(c){c&&k(t),c&&k(u),c&&k($),c&&k(f),c&&k(n),c&&k(R),x(S,c),c&&k(a),c&&k(I)}}}class he extends h{constructor(t){super(),ee(this,t,null,je,te,{})}}export{he as default};