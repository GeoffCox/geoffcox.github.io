import{s as y,n as h}from"../chunks/scheduler.bebf7e56.js";import{S as C,i as w,o as p,p as c,q as f,t as u,h as $,r as d,e as x,s as k,c as g,g as _,a as v,d as i,f as l}from"../chunks/index.eec01950.js";import{L as b}from"../chunks/Link.09476319.js";import{P}from"../chunks/Post.3a1b43be.js";function I(r){let t,o=`Recoil JS is my favorite React state management library. It is a lightning-fast, minimal, and
			ideomatic React. It blends MobX's observability and Redux's flat data islands.`,e,a,n=`For some unknown reason, the recoil examples on the official site are documentation only. I
			created a project for each example so you can build and debug them. Additionally, I provided
			an example of a dispatcher pattern using recoil.`;return{c(){t=x("p"),t.textContent=o,e=k(),a=x("p"),a.textContent=n},l(s){t=g(s,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1kiz8o2"&&(t.textContent=o),e=v(s),a=g(s,"P",{"data-svelte-h":!0}),_(a)!=="svelte-x48sx8"&&(a.textContent=n)},m(s,m){i(s,t,m),i(s,e,m),i(s,a,m)},p:h,d(s){s&&(l(t),l(e),l(a))}}}function R(r){let t,o,e,a;return t=new b({props:{href:"https://github.com/GeoffCox/recoil-examples",kind:"github"}}),e=new b({props:{href:"https://recoiljs.org/",kind:"website"}}),{c(){p(t.$$.fragment),o=k(),p(e.$$.fragment)},l(n){c(t.$$.fragment,n),o=v(n),c(e.$$.fragment,n)},m(n,s){f(t,n,s),i(n,o,s),f(e,n,s),a=!0},p:h,i(n){a||(u(t.$$.fragment,n),u(e.$$.fragment,n),a=!0)},o(n){$(t.$$.fragment,n),$(e.$$.fragment,n),a=!1},d(n){n&&l(o),d(t,n),d(e,n)}}}function S(r){let t,o;return t=new P({props:{category:"Open Source Examples",headline:"recoil-examples",postUrl:"/recoil-examples",$$slots:{links:[R],default:[I]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,a){f(t,e,a),o=!0},p(e,[a]){const n={};a&1&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){o||(u(t.$$.fragment,e),o=!0)},o(e){$(t.$$.fragment,e),o=!1},d(e){d(t,e)}}}class A extends C{constructor(t){super(),w(this,t,null,S,y,{})}}export{A as component};