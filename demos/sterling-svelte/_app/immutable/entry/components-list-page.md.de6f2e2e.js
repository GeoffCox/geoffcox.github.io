import{S as ln,i as cn,s as un,y as D,z as W,A as j,g as I,d as z,B as F,w as q,T as X,k as M,l as R,m as S,h as d,n as Z,W as en,b as g,U as G,a as H,c as O,q as w,r as y,H as v,u as kn,e as sn,v as dn,f as mn,R as _n,C as rn}from"../chunks/index.0c4ca2cd.js";import{C as Q}from"../chunks/Checkbox.e0b96079.js";import{P as $n}from"../chunks/Playground.e5862966.js";import{L as gn}from"../chunks/List.71a8e569.js";import{I as hn}from"../chunks/Input.e15eeeb9.js";import{c as an}from"../chunks/countries.48751f7c.js";import{L as bn}from"../chunks/ListItem.a443303f.js";import{F as vn}from"../chunks/Field.0a7fcfd7.js";import{r as wn,t as tn,a as yn}from"../chunks/toNumber.2b34027e.js";var En=function(){return wn.Date.now()};const Y=En;var Ln="Expected a function",In=Math.max,Tn=Math.min;function Vn(p,n,e){var t,s,u,l,a,c,f=0,h=!1,_=!1,E=!0;if(typeof p!="function")throw new TypeError(Ln);n=tn(n)||0,yn(e)&&(h=!!e.leading,_="maxWait"in e,u=_?In(tn(e.maxWait)||0,n):u,E="trailing"in e?!!e.trailing:E);function $(k){var o=t,r=s;return t=s=void 0,f=k,l=p.apply(r,o),l}function T(k){return f=k,a=setTimeout(V,n),h?$(k):l}function N(k){var o=k-c,r=k-f,i=n-o;return _?Tn(i,u-r):i}function L(k){var o=k-c,r=k-f;return c===void 0||o>=n||o<0||_&&r>=u}function V(){var k=Y();if(L(k))return P(k);a=setTimeout(V,N(k))}function P(k){return a=void 0,E&&t?$(k):(t=s=void 0,l)}function m(){a!==void 0&&clearTimeout(a),f=0,t=c=s=a=void 0}function C(){return a===void 0?l:P(Y())}function A(){var k=Y(),o=L(k);if(t=arguments,s=this,c=k,o){if(a===void 0)return T(c);if(_)return clearTimeout(a),a=setTimeout(V,n),$(c)}return a===void 0&&(a=setTimeout(V,n)),l}return A.cancel=m,A.flush=C,A}function on(p,n,e){const t=p.slice();return t[16]=n[e],t}function Cn(p){let n=p[16]+"",e;return{c(){e=w(n)},l(t){e=y(t,n)},m(t,s){g(t,e,s)},p:rn,d(t){t&&d(e)}}}function pn(p){let n,e;return n=new bn({props:{value:p[16],$$slots:{default:[Cn]},$$scope:{ctx:p}}}),{c(){D(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,s){j(n,t,s),e=!0},p(t,s){const u={};s&524288&&(u.$$scope={dirty:s,ctx:t}),n.$set(u)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}function zn(p){let n,e,t=an,s=[];for(let l=0;l<t.length;l+=1)s[l]=pn(on(p,t,l));const u=l=>z(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();n=sn()},l(l){for(let a=0;a<s.length;a+=1)s[a].l(l);n=sn()},m(l,a){for(let c=0;c<s.length;c+=1)s[c].m(l,a);g(l,n,a),e=!0},p(l,a){if(a&0){t=an;let c;for(c=0;c<t.length;c+=1){const f=on(l,t,c);s[c]?(s[c].p(f,a),I(s[c],1)):(s[c]=pn(f),s[c].c(),I(s[c],1),s[c].m(n.parentNode,n))}for(dn(),c=t.length;c<s.length;c+=1)u(c);mn()}},i(l){if(!e){for(let a=0;a<t.length;a+=1)I(s[a]);e=!0}},o(l){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)z(s[a]);e=!1},d(l){_n(s,l),l&&d(n)}}}function Pn(p){let n,e,t,s;function u(a){p[12](a)}let l={colorful:p[3],composed:p[4],disabled:p[5],horizontal:p[6],selectionKeys:"tab",$$slots:{default:[zn]},$$scope:{ctx:p}};return p[0]!==void 0&&(l.selectedValue=p[0]),e=new gn({props:l}),q.push(()=>X(e,"selectedValue",u,p[0])),e.$on("select",p[13]),{c(){n=M("div"),D(e.$$.fragment),this.h()},l(a){n=R(a,"DIV",{class:!0,slot:!0});var c=S(n);W(e.$$.fragment,c),c.forEach(d),this.h()},h(){Z(n,"class","component svelte-n0l1u3"),Z(n,"slot","component"),en(n,"horizontal",p[6])},m(a,c){g(a,n,c),j(e,n,null),s=!0},p(a,c){const f={};c&8&&(f.colorful=a[3]),c&16&&(f.composed=a[4]),c&32&&(f.disabled=a[5]),c&64&&(f.horizontal=a[6]),c&524288&&(f.$$scope={dirty:c,ctx:a}),!t&&c&1&&(t=!0,f.selectedValue=a[0],G(()=>t=!1)),e.$set(f),(!s||c&64)&&en(n,"horizontal",a[6])},i(a){s||(I(e.$$.fragment,a),s=!0)},o(a){z(e.$$.fragment,a),s=!1},d(a){a&&d(n),F(e)}}}function An(p){let n;return{c(){n=w("colorful")},l(e){n=y(e,"colorful")},m(e,t){g(e,n,t)},d(e){e&&d(n)}}}function Mn(p){let n;return{c(){n=w("composed")},l(e){n=y(e,"composed")},m(e,t){g(e,n,t)},d(e){e&&d(n)}}}function Rn(p){let n;return{c(){n=w("disabled")},l(e){n=y(e,"disabled")},m(e,t){g(e,n,t)},d(e){e&&d(n)}}}function Sn(p){let n;return{c(){n=w("horizontal")},l(e){n=y(e,"horizontal")},m(e,t){g(e,n,t)},d(e){e&&d(n)}}}function Dn(p){let n,e,t;function s(l){p[11](l)}let u={composed:!0};return p[1]!==void 0&&(u.value=p[1]),n=new hn({props:u}),q.push(()=>X(n,"value",s,p[1])),{c(){D(n.$$.fragment)},l(l){W(n.$$.fragment,l)},m(l,a){j(n,l,a),t=!0},p(l,a){const c={};!e&&a&2&&(e=!0,c.value=l[1],G(()=>e=!1)),n.$set(c)},i(l){t||(I(n.$$.fragment,l),t=!0)},o(l){z(n.$$.fragment,l),t=!1},d(l){F(n,l)}}}function Wn(p){let n,e,t,s,u,l,a,c,f,h,_,E,$,T;function N(o){p[7](o)}let L={$$slots:{default:[An]},$$scope:{ctx:p}};p[3]!==void 0&&(L.checked=p[3]),n=new Q({props:L}),q.push(()=>X(n,"checked",N,p[3]));function V(o){p[8](o)}let P={$$slots:{default:[Mn]},$$scope:{ctx:p}};p[4]!==void 0&&(P.checked=p[4]),s=new Q({props:P}),q.push(()=>X(s,"checked",V,p[4]));function m(o){p[9](o)}let C={$$slots:{default:[Rn]},$$scope:{ctx:p}};p[5]!==void 0&&(C.checked=p[5]),a=new Q({props:C}),q.push(()=>X(a,"checked",m,p[5]));function A(o){p[10](o)}let k={$$slots:{default:[Sn]},$$scope:{ctx:p}};return p[6]!==void 0&&(k.checked=p[6]),h=new Q({props:k}),q.push(()=>X(h,"checked",A,p[6])),$=new vn({props:{label:"selectedValue",$$slots:{default:[Dn]},$$scope:{ctx:p}}}),{c(){D(n.$$.fragment),t=H(),D(s.$$.fragment),l=H(),D(a.$$.fragment),f=H(),D(h.$$.fragment),E=H(),D($.$$.fragment)},l(o){W(n.$$.fragment,o),t=O(o),W(s.$$.fragment,o),l=O(o),W(a.$$.fragment,o),f=O(o),W(h.$$.fragment,o),E=O(o),W($.$$.fragment,o)},m(o,r){j(n,o,r),g(o,t,r),j(s,o,r),g(o,l,r),j(a,o,r),g(o,f,r),j(h,o,r),g(o,E,r),j($,o,r),T=!0},p(o,r){const i={};r&524288&&(i.$$scope={dirty:r,ctx:o}),!e&&r&8&&(e=!0,i.checked=o[3],G(()=>e=!1)),n.$set(i);const b={};r&524288&&(b.$$scope={dirty:r,ctx:o}),!u&&r&16&&(u=!0,b.checked=o[4],G(()=>u=!1)),s.$set(b);const B={};r&524288&&(B.$$scope={dirty:r,ctx:o}),!c&&r&32&&(c=!0,B.checked=o[5],G(()=>c=!1)),a.$set(B);const U={};r&524288&&(U.$$scope={dirty:r,ctx:o}),!_&&r&64&&(_=!0,U.checked=o[6],G(()=>_=!1)),h.$set(U);const J={};r&524290&&(J.$$scope={dirty:r,ctx:o}),$.$set(J)},i(o){T||(I(n.$$.fragment,o),I(s.$$.fragment,o),I(a.$$.fragment,o),I(h.$$.fragment,o),I($.$$.fragment,o),T=!0)},o(o){z(n.$$.fragment,o),z(s.$$.fragment,o),z(a.$$.fragment,o),z(h.$$.fragment,o),z($.$$.fragment,o),T=!1},d(o){F(n,o),o&&d(t),F(s,o),o&&d(l),F(a,o),o&&d(f),F(h,o),o&&d(E),F($,o)}}}function jn(p){let n,e,t;return{c(){n=M("div"),e=w("selectedValue: "),t=w(p[0])},l(s){n=R(s,"DIV",{});var u=S(n);e=y(u,"selectedValue: "),t=y(u,p[0]),u.forEach(d)},m(s,u){g(s,n,u),v(n,e),v(n,t)},p(s,u){u&1&&kn(t,s[0])},d(s){s&&d(n)}}}function Fn(p){let n,e,t={$$slots:{status:[jn],props:[Wn],component:[Pn]},$$scope:{ctx:p}};return n=new $n({props:t}),p[14](n),{c(){D(n.$$.fragment)},l(s){W(n.$$.fragment,s)},m(s,u){j(n,s,u),e=!0},p(s,[u]){const l={};u&524415&&(l.$$scope={dirty:u,ctx:s}),n.$set(l)},i(s){e||(I(n.$$.fragment,s),e=!0)},o(s){z(n.$$.fragment,s),e=!1},d(s){p[14](null),F(n,s)}}}function Nn(p,n,e){let t,s=!1,u=!1,l=!1,a=!1,c,f="";const h=Vn(m=>{e(0,c=m)},500);function _(m){s=m,e(3,s)}function E(m){u=m,e(4,u)}function $(m){l=m,e(5,l)}function T(m){a=m,e(6,a)}function N(m){f=m,e(1,f),e(0,c)}function L(m){c=m,e(0,c)}const V=m=>{t.recordEvent(`select:${m.detail.value}`)};function P(m){q[m?"unshift":"push"](()=>{t=m,e(2,t)})}return p.$$.update=()=>{p.$$.dirty&1&&e(1,f=c),p.$$.dirty&2&&h(f)},[c,f,t,s,u,l,a,_,E,$,T,N,L,V,P]}class Hn extends ln{constructor(n){super(),cn(this,n,Nn,Fn,un,{})}}function On(p){let n,e,t,s,u,l,a,c,f,h,_,E,$,T,N,L,V,P,m,C,A,k,o=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// ----- Props ----- //</span>

  <span class="token comment">// HTMLDivElement props are forwarded</span>

  <span class="token keyword">let</span> composed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> horizontal <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">selectedValue</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

  <span class="token comment">// ----- Events ----- //</span>

  <span class="token comment">// HTMLDivElement events are bubbled</span>

  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> value <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ----- Methods ----- //</span>

  <span class="token keyword">function</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">focus</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> FocusOptions</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">scrollToSelectedItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">selectFirstItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">selectPreviousItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">selectNextItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">selectLastItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ----- Context ----- //</span>

  type ListContext <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> Readable<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token literal-property property">selectedValue</span><span class="token operator">:</span> Writable<span class="token operator">&lt;</span>string <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token literal-property property">horizontal</span><span class="token operator">:</span> Readable<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Anatomy --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>composed<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>horizontal<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>selectedValue<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,r;return C=new Hn({}),{c(){n=M("h1"),e=w("List"),t=H(),s=M("p"),u=w("A list of items where an item can be selected."),l=H(),a=M("ul"),c=M("li"),f=w("Choose between a vertical or horizontal list."),h=H(),_=M("li"),E=w("Note: A list item is identified by having "),$=M("code"),T=w("data-value"),N=w(" and "),L=M("code"),V=w('role="listitem"'),P=w(" properties"),m=H(),D(C.$$.fragment),A=H(),k=M("pre"),this.h()},l(i){n=R(i,"H1",{});var b=S(n);e=y(b,"List"),b.forEach(d),t=O(i),s=R(i,"P",{});var B=S(s);u=y(B,"A list of items where an item can be selected."),B.forEach(d),l=O(i),a=R(i,"UL",{});var U=S(a);c=R(U,"LI",{});var J=S(c);f=y(J,"Choose between a vertical or horizontal list."),J.forEach(d),h=O(U),_=R(U,"LI",{});var K=S(_);E=y(K,"Note: A list item is identified by having "),$=R(K,"CODE",{});var x=S($);T=y(x,"data-value"),x.forEach(d),N=y(K," and "),L=R(K,"CODE",{});var nn=S(L);V=y(nn,'role="listitem"'),nn.forEach(d),P=y(K," properties"),K.forEach(d),U.forEach(d),m=O(i),W(C.$$.fragment,i),A=O(i),k=R(i,"PRE",{class:!0});var fn=S(k);fn.forEach(d),this.h()},h(){Z(k,"class","language-svelte")},m(i,b){g(i,n,b),v(n,e),g(i,t,b),g(i,s,b),v(s,u),g(i,l,b),g(i,a,b),v(a,c),v(c,f),v(a,h),v(a,_),v(_,E),v(_,$),v($,T),v(_,N),v(_,L),v(L,V),v(_,P),g(i,m,b),j(C,i,b),g(i,A,b),g(i,k,b),k.innerHTML=o,r=!0},p:rn,i(i){r||(I(C.$$.fragment,i),r=!0)},o(i){z(C.$$.fragment,i),r=!1},d(i){i&&d(n),i&&d(t),i&&d(s),i&&d(l),i&&d(a),i&&d(m),F(C,i),i&&d(A),i&&d(k)}}}class Zn extends ln{constructor(n){super(),cn(this,n,null,On,un,{})}}export{Zn as default};