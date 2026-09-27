import{$ as e,A as t,M as n,Z as r,dt as i,ft as a,gt as o,k as s,l as c,q as l}from"../chunks/CX2jC7lQ.js";import"../chunks/xihTtKlq.js";import"../chunks/ClNsB9K-.js";var u={prefersColorSchemeDark:`<script lang="ts">
  import { prefersColorSchemeDark } from '@geoffcox/sterling-svelte';
<\/script>

<div>The user prefers dark mode: {$prefersColorSchemeDark}</div>
`,prefersReducedMotion:`<script lang="ts">
  import { prefersReducedMotion } from '@geoffcox/sterling-svelte';
<\/script>

<div>The user prefers reduced motion: {$prefersReducedMotion}</div>
`,usingKeyboard:`<script lang="ts">
  import { usingKeyboard } from '@geoffcox/sterling-svelte';
<\/script>

<div>The user is currently using the keyboard: {$usingKeyboard}</div>
`},d=n(`<div class="topic-page svelte-ovlqxr"><h1>Media Query Stores</h1> <p>Media queries are exposed as Svelte stores. This allows you to easily subscribe to handle
    changing values.</p> <h2>prefersColorSchemeDark</h2> <p>A Svelte store that keeps a boolean up to date if the <code>prefers-color-scheme</code> media query
    matches 'dark'.</p> <pre> </pre> <h2>prefersReducedMotion</h2> <p>A Svelte store that keeps a boolean up to date if the <code>prefers-reduced-motion</code> media query
    matches 'reduce'.</p> <pre> </pre> <h2>usingKeyboard</h2> <p>A Svelte store that keeps a boolean up to date if the user is typing on the keyboard. This is a
    wrapper around Keyborg's value.</p> <pre> </pre></div>`);function f(n,f){a(f,!1),c();var p=d(),m=e(r(p),8),h=r(m,!0);o(m);var g=e(m,6),_=r(g,!0);o(g);var v=e(g,6),y=r(v,!0);o(v),o(p),l(()=>{s(h,u.prefersColorSchemeDark),s(_,u.prefersReducedMotion),s(y,u.usingKeyboard)}),t(n,p),i()}export{f as component};