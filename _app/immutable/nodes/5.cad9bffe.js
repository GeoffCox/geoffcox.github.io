import{s as g,n as $}from"../chunks/scheduler.bebf7e56.js";import{S as b,i as _,o as i,p as l,q as f,t as m,h as c,r as p,e as x,c as y,g as v,d as h,f as d,s as k,a as w}from"../chunks/index.eec01950.js";import{L as u}from"../chunks/Link.09476319.js";import{P as C}from"../chunks/Post.3a1b43be.js";function I(s){let e,a=`I needed a binary search algorithm to find scroll offsets in a virtualized list. There didn't
		seem to be a package implementing a binary search in Typescript, so I created this one. It has a
		bonus feature. If the value isn't found, it provides the nearest range of indices where the
		value would have been.`;return{c(){e=x("p"),e.textContent=a},l(t){e=y(t,"P",{"data-svelte-h":!0}),v(e)!=="svelte-nxzpuj"&&(e.textContent=a)},m(t,r){h(t,e,r)},p:$,d(t){t&&d(e)}}}function P(s){let e,a,t,r;return e=new u({props:{href:"https://github.com/GeoffCox/binary-search/blob/main/lib/README.md",kind:"github"}}),t=new u({props:{href:"https://geoffcox.github.io/demos/binary-search/",kind:"demo"}}),{c(){i(e.$$.fragment),a=k(),i(t.$$.fragment)},l(n){l(e.$$.fragment,n),a=w(n),l(t.$$.fragment,n)},m(n,o){f(e,n,o),h(n,a,o),f(t,n,o),r=!0},p:$,i(n){r||(m(e.$$.fragment,n),m(t.$$.fragment,n),r=!0)},o(n){c(e.$$.fragment,n),c(t.$$.fragment,n),r=!1},d(n){n&&d(a),p(e,n),p(t,n)}}}function L(s){let e,a;return e=new C({props:{category:"Open Source Library",headline:"binary-search",postUrl:"/binary-search",$$slots:{links:[P],default:[I]},$$scope:{ctx:s}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,r){f(e,t,r),a=!0},p(t,[r]){const n={};r&1&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}class T extends b{constructor(e){super(),_(this,e,null,L,g,{})}}export{T as component};