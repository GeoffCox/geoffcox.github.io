import{S as ms,i as hs,s as ds,k as e,q as u,a as l,l as p,m as o,r as i,h as a,c,n as q,b as t,H as k,C as W}from"../chunks/index.3ab8247a.js";function ys(os){let r,A,P,d,J,R,y,X,C,b,z,O,f,ls=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> <span class="token function-variable function">onClickOutside</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> svelte<span class="token punctuation">.</span><span class="token constant">JSX</span><span class="token punctuation">.</span>ClickOutsideEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// do something here</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">use:</span>clickOutside</span> <span class="token attr-name"><span class="token namespace">on:</span>click_outside=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onClickOutside<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- content here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,j,_,B,x,g,G,T,v,cs=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> <span class="token literal-property property">targetRef</span><span class="token operator">:</span> HTMLDivElement<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// do something here</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>targetRef<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onClick<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>sterling-svelte<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">use:</span>forwardEvents=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span> <span class="token literal-property property">target</span><span class="token operator">:</span> targetRef<span class="token punctuation">,</span> <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'click'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span></code>`,F,w,I,K,E,N,L,m,us=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">use:</span>portal=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">target</span><span class="token operator">:</span> document<span class="token punctuation">.</span>body <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- content here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,S,H,Q,U,M,V,D,h,is=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">use:</span>trapKeyboardFocus</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- content with focusable children here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`;return{c(){r=e("h1"),A=u("Actions"),P=l(),d=e("p"),J=u("Sterling-svelte exports the actions used within its components."),R=l(),y=e("h2"),X=u("clickOutside"),C=l(),b=e("p"),z=u("Raises an event anytime the user clicks outside the bounds of the element."),O=l(),f=e("pre"),j=l(),_=e("h2"),B=u("forwardEvents"),x=l(),g=e("p"),G=u(`Forwards native and svelte component events from one component to another.
Useful when you need to make an event appear to bubble up and components are not in the same DOM hierarchy.`),T=l(),v=e("pre"),F=l(),w=e("h2"),I=u("portal"),K=l(),E=e("p"),N=u(`Makes the element a child of the target element.
Useful in scenarios like menus when you want to move an element outside of its parent so it can float above it.`),L=l(),m=e("pre"),S=l(),H=e("h2"),Q=u("trapKeyboardFocus"),U=l(),M=e("p"),V=u("Keeps the keyboard focus within the children of an element by handling ‘Tab’ keyboard events."),D=l(),h=e("pre"),this.h()},l(s){r=p(s,"H1",{});var n=o(r);A=i(n,"Actions"),n.forEach(a),P=c(s),d=p(s,"P",{});var Y=o(d);J=i(Y,"Sterling-svelte exports the actions used within its components."),Y.forEach(a),R=c(s),y=p(s,"H2",{});var Z=o(y);X=i(Z,"clickOutside"),Z.forEach(a),C=c(s),b=p(s,"P",{});var $=o(b);z=i($,"Raises an event anytime the user clicks outside the bounds of the element."),$.forEach(a),O=c(s),f=p(s,"PRE",{class:!0});var ks=o(f);ks.forEach(a),j=c(s),_=p(s,"H2",{});var ss=o(_);B=i(ss,"forwardEvents"),ss.forEach(a),x=c(s),g=p(s,"P",{});var as=o(g);G=i(as,`Forwards native and svelte component events from one component to another.
Useful when you need to make an event appear to bubble up and components are not in the same DOM hierarchy.`),as.forEach(a),T=c(s),v=p(s,"PRE",{class:!0});var rs=o(v);rs.forEach(a),F=c(s),w=p(s,"H2",{});var ns=o(w);I=i(ns,"portal"),ns.forEach(a),K=c(s),E=p(s,"P",{});var ts=o(E);N=i(ts,`Makes the element a child of the target element.
Useful in scenarios like menus when you want to move an element outside of its parent so it can float above it.`),ts.forEach(a),L=c(s),m=p(s,"PRE",{class:!0});var fs=o(m);fs.forEach(a),S=c(s),H=p(s,"H2",{});var es=o(H);Q=i(es,"trapKeyboardFocus"),es.forEach(a),U=c(s),M=p(s,"P",{});var ps=o(M);V=i(ps,"Keeps the keyboard focus within the children of an element by handling ‘Tab’ keyboard events."),ps.forEach(a),D=c(s),h=p(s,"PRE",{class:!0});var vs=o(h);vs.forEach(a),this.h()},h(){q(f,"class","language-svelte"),q(v,"class","language-svelte"),q(m,"class","language-svelte"),q(h,"class","language-svelte")},m(s,n){t(s,r,n),k(r,A),t(s,P,n),t(s,d,n),k(d,J),t(s,R,n),t(s,y,n),k(y,X),t(s,C,n),t(s,b,n),k(b,z),t(s,O,n),t(s,f,n),f.innerHTML=ls,t(s,j,n),t(s,_,n),k(_,B),t(s,x,n),t(s,g,n),k(g,G),t(s,T,n),t(s,v,n),v.innerHTML=cs,t(s,F,n),t(s,w,n),k(w,I),t(s,K,n),t(s,E,n),k(E,N),t(s,L,n),t(s,m,n),m.innerHTML=us,t(s,S,n),t(s,H,n),k(H,Q),t(s,U,n),t(s,M,n),k(M,V),t(s,D,n),t(s,h,n),h.innerHTML=is},p:W,i:W,o:W,d(s){s&&a(r),s&&a(P),s&&a(d),s&&a(R),s&&a(y),s&&a(C),s&&a(b),s&&a(O),s&&a(f),s&&a(j),s&&a(_),s&&a(x),s&&a(g),s&&a(T),s&&a(v),s&&a(F),s&&a(w),s&&a(K),s&&a(E),s&&a(L),s&&a(m),s&&a(S),s&&a(H),s&&a(U),s&&a(M),s&&a(D),s&&a(h)}}}class _s extends ms{constructor(r){super(),hs(this,r,null,ys,ds,{})}}export{_s as default};