import{s as I,a as C,k as W,m as S,e as f,p as y,b as _,q as b,t as x,i as a,w as j,f as r}from"../chunks/scheduler.75f5293f.js";import{S as q,i as T,c as U,b as z,m as B,t as D,a as E,d as O}from"../chunks/index.36074062.js";import{g as A,a as F}from"../chunks/spread.8a54911c.js";import{P as G}from"../chunks/Post.19bcd7ab.js";function J(m){let t,p=`Back in the days of Windows 95, my brother called me in a panic. He reported that his drive
        was out of space and he couldn't figure out what to do.`,o,s,n=`I walked him through selecting some files he didn't need anymore. When I told him to drag the
        files to the recycle bin in Windows Explorer, he couldn't find it. I asked him to look on his
        desktop and he reported it wasn't there either.`,i,d,$=`He then told me what he had done the day before while trying to clean up files on his desktop.
        He had somehow dragged the recycle bin icon around and ended up creating a shortcut to the
        recycle bin. He now had two recycle bins on his desktop. He dragged one on to to the other and
        then emptied the recycle bin.`,w,c,P=`Turns out he dragged the real recycle bin to the recycle bin shortcut. This put the recycle
        bin control panel app into the recycle bin. When he emptied the recycle bin, the control panel
        app deleted itself!`,g,h,k=`The OS went through the recycle bin app for soft and hard deletes. Ctrl+Del didn't do
        anything. We were able to open a command prompt and delete files, but this was too tedious for
        him to do regularly without my help. He just kind of lived with a too full drive until he
        bought his next computer.`,v,u,H=`I doubt any developer or tester could have predicted a user would use a shortcut to the
        recycle bin to delete the recycle bin.`;return{c(){t=f("p"),t.textContent=p,o=y(),s=f("p"),s.textContent=n,i=y(),d=f("p"),d.textContent=$,w=y(),c=f("p"),c.textContent=P,g=y(),h=f("p"),h.textContent=k,v=y(),u=f("p"),u.textContent=H},l(e){t=_(e,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1wdsowr"&&(t.textContent=p),o=x(e),s=_(e,"P",{"data-svelte-h":!0}),b(s)!=="svelte-2t5xhz"&&(s.textContent=n),i=x(e),d=_(e,"P",{"data-svelte-h":!0}),b(d)!=="svelte-1psaswb"&&(d.textContent=$),w=x(e),c=_(e,"P",{"data-svelte-h":!0}),b(c)!=="svelte-1u35y1l"&&(c.textContent=P),g=x(e),h=_(e,"P",{"data-svelte-h":!0}),b(h)!=="svelte-5tducc"&&(h.textContent=k),v=x(e),u=_(e,"P",{"data-svelte-h":!0}),b(u)!=="svelte-1el10jq"&&(u.textContent=H)},m(e,l){a(e,t,l),a(e,o,l),a(e,s,l),a(e,i,l),a(e,d,l),a(e,w,l),a(e,c,l),a(e,g,l),a(e,h,l),a(e,v,l),a(e,u,l)},p:j,d(e){e&&(r(t),r(o),r(s),r(i),r(d),r(w),r(c),r(g),r(h),r(v),r(u))}}}function K(m){let t,p;const o=[{category:"Story"},{headline:"Users are unpredictable"},{postUrl:"unpredictable-users"},m[0]];let s={$$slots:{default:[J]},$$scope:{ctx:m}};for(let n=0;n<o.length;n+=1)s=C(s,o[n]);return t=new G({props:s}),{c(){U(t.$$.fragment)},l(n){z(t.$$.fragment,n)},m(n,i){B(t,n,i),p=!0},p(n,[i]){const d=i&1?A(o,[o[0],o[1],o[2],F(n[0])]):{};i&2&&(d.$$scope={dirty:i,ctx:n}),t.$set(d)},i(n){p||(D(t.$$.fragment,n),p=!0)},o(n){E(t.$$.fragment,n),p=!1},d(n){O(t,n)}}}function L(m,t,p){const o=[];let s=W(t,o);return m.$$set=n=>{t=C(C({},t),S(n)),p(0,s=W(t,o))},[s]}class V extends q{constructor(t){super(),T(this,t,L,K,I,{})}}export{V as component};