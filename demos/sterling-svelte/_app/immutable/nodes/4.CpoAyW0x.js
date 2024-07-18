import{s as ct,e as s,a as o,H as D,c as a,l as u,g as i,b as B,m as G,f as e,o as I,i as n,n as J}from"../chunks/scheduler.DAtSZXqk.js";import{S as rt,i as ft}from"../chunks/index.DCT8XT7p.js";function pt(st){let c,L="Actions",k,r,N="These actions were built to support components and are available to you in your own component development.",y,f,Q="clickOutside",q,p,V="Raises an event anytime the user clicks outside the bounds of the element.",E,d,P,at=`<code class="language-undefined">&lt;script lang=&quot;ts&quot;&gt;import &#123; clickOutside &#125; from &#39;@geoffcox/sterling-svelte&#39;;
const onClickOutside = (event) =&gt; &#123;
    // do something here
&#125;;
&lt;/script&gt;

&lt;div use:clickOutside on:click_outside=&#123;onClickOutside&#125;&gt;
  &lt;!-- content here --&gt;
&lt;/div&gt;</code>`,H,v,W="forwardEvents",R,m,X=`Forwards native and svelte component events from one component to another.
Useful when you need to make an event appear to bubble up and components are not in the same DOM hierarchy.`,O,g,F,ot=`<code class="language-undefined">&lt;script lang=&quot;ts&quot;&gt;import &#123; forwardEvents &#125; from &#39;@geoffcox/sterling-svelte&#39;;
let targetRef;
const onClick = () =&gt; &#123;
    // do something here
&#125;;
&lt;/script&gt;

&lt;div bind:this=&#123;targetRef&#125; on:click=&#123;onClick&#125;&gt;sterling-svelte&lt;/div&gt;
&lt;button use:forwardEvents=&#123; target: targetRef, events: [&#39;click&#39;]&#125;&gt;Click Me&lt;button&gt;</code>`,K,h,Y="portal",j,x,Z=`Makes the element a child of the target element.
Useful in scenarios like menus when you want to move an element outside of its parent so it can float above it.`,M,C,T,it=`<code class="language-undefined">&lt;script lang=&quot;ts&quot;&gt;import &#123; portal &#125; from &#39;@geoffcox/sterling-svelte&#39;;
&lt;/script&gt;

&lt;div use:portal=&#123;&#123; target: document.body &#125;&#125;&gt;
  &lt;!-- content here --&gt;
&lt;/div&gt;</code>`,S,_,$="trapKeyboardFocus",U,b,tt="Keeps the keyboard focus within the children of an element by handling ‘Tab’ keyboard events.",z,w,A,ut=`<code class="language-undefined">&lt;script lang=&quot;ts&quot;&gt;import &#123; trapKeyboardFocus &#125; from &#39;@geoffcox/sterling-svelte&#39;;
&lt;/script&gt;

&lt;div use:trapKeyboardFocus&gt;
  &lt;!-- content with focusable children here --&gt;
&lt;/div&gt;</code>`;return{c(){c=s("h1"),c.textContent=L,k=o(),r=s("p"),r.textContent=N,y=o(),f=s("h2"),f.textContent=Q,q=o(),p=s("p"),p.textContent=V,E=o(),d=s("pre"),P=new D(!1),H=o(),v=s("h2"),v.textContent=W,R=o(),m=s("p"),m.textContent=X,O=o(),g=s("pre"),F=new D(!1),K=o(),h=s("h2"),h.textContent=Y,j=o(),x=s("p"),x.textContent=Z,M=o(),C=s("pre"),T=new D(!1),S=o(),_=s("h2"),_.textContent=$,U=o(),b=s("p"),b.textContent=tt,z=o(),w=s("pre"),A=new D(!1),this.h()},l(t){c=a(t,"H1",{"data-svelte-h":!0}),u(c)!=="svelte-opy7b3"&&(c.textContent=L),k=i(t),r=a(t,"P",{"data-svelte-h":!0}),u(r)!=="svelte-gjuqox"&&(r.textContent=N),y=i(t),f=a(t,"H2",{"data-svelte-h":!0}),u(f)!=="svelte-17fjhpl"&&(f.textContent=Q),q=i(t),p=a(t,"P",{"data-svelte-h":!0}),u(p)!=="svelte-ryw2kf"&&(p.textContent=V),E=i(t),d=a(t,"PRE",{class:!0});var l=B(d);P=G(l,!1),l.forEach(e),H=i(t),v=a(t,"H2",{"data-svelte-h":!0}),u(v)!=="svelte-1wd40p6"&&(v.textContent=W),R=i(t),m=a(t,"P",{"data-svelte-h":!0}),u(m)!=="svelte-t8xvk1"&&(m.textContent=X),O=i(t),g=a(t,"PRE",{class:!0});var et=B(g);F=G(et,!1),et.forEach(e),K=i(t),h=a(t,"H2",{"data-svelte-h":!0}),u(h)!=="svelte-1mhcqu8"&&(h.textContent=Y),j=i(t),x=a(t,"P",{"data-svelte-h":!0}),u(x)!=="svelte-1bffegs"&&(x.textContent=Z),M=i(t),C=a(t,"PRE",{class:!0});var lt=B(C);T=G(lt,!1),lt.forEach(e),S=i(t),_=a(t,"H2",{"data-svelte-h":!0}),u(_)!=="svelte-z9y998"&&(_.textContent=$),U=i(t),b=a(t,"P",{"data-svelte-h":!0}),u(b)!=="svelte-jw8gn"&&(b.textContent=tt),z=i(t),w=a(t,"PRE",{class:!0});var nt=B(w);A=G(nt,!1),nt.forEach(e),this.h()},h(){P.a=null,I(d,"class","language-undefined"),F.a=null,I(g,"class","language-undefined"),T.a=null,I(C,"class","language-undefined"),A.a=null,I(w,"class","language-undefined")},m(t,l){n(t,c,l),n(t,k,l),n(t,r,l),n(t,y,l),n(t,f,l),n(t,q,l),n(t,p,l),n(t,E,l),n(t,d,l),P.m(at,d),n(t,H,l),n(t,v,l),n(t,R,l),n(t,m,l),n(t,O,l),n(t,g,l),F.m(ot,g),n(t,K,l),n(t,h,l),n(t,j,l),n(t,x,l),n(t,M,l),n(t,C,l),T.m(it,C),n(t,S,l),n(t,_,l),n(t,U,l),n(t,b,l),n(t,z,l),n(t,w,l),A.m(ut,w)},p:J,i:J,o:J,d(t){t&&(e(c),e(k),e(r),e(y),e(f),e(q),e(p),e(E),e(d),e(H),e(v),e(R),e(m),e(O),e(g),e(K),e(h),e(j),e(x),e(M),e(C),e(S),e(_),e(U),e(b),e(z),e(w))}}}class mt extends rt{constructor(c){super(),ft(this,c,null,pt,ct,{})}}export{mt as component};
