import{t as h,a as m}from"../chunks/DnVUfIgW.js";import"../chunks/Do_toGwJ.js";import{p as v,t as g,a as y,s as a,c as e,r}from"../chunks/DB1YyXYW.js";import{s as p}from"../chunks/2_iocEjr.js";import{i as b}from"../chunks/DxQpxL-0.js";const i={prefersColorSchemeDark:`<script lang="ts">
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
`};var k=h(`<div class="topic-page svelte-a6kodj"><h1>Media Query Stores</h1> <p>Media queries are exposed as Svelte stores. This allows you to easily subscribe to handle
    changing values.</p> <h2>prefersColorSchemeDark</h2> <p>A Svelte store that keeps a boolean up to date if the <code>prefers-color-scheme</code> media query
    matches 'dark'.</p> <pre> </pre> <h2>prefersReducedMotion</h2> <p>A Svelte store that keeps a boolean up to date if the <code>prefers-reduced-motion</code> media query
    matches 'reduce'.</p> <pre> </pre> <h2>usingKeyboard</h2> <p>A Svelte store that keeps a boolean up to date if the user is typing on the keyboard. This is a
    wrapper around Keyborg's value.</p> <pre> </pre></div>`);function C(c,l){v(l,!1),b();var o=k(),t=a(e(o),8),n=e(t,!0);r(t);var s=a(t,6),u=e(s,!0);r(s);var d=a(s,6),f=e(d,!0);r(d),r(o),g(()=>{p(n,i.prefersColorSchemeDark),p(u,i.prefersReducedMotion),p(f,i.usingKeyboard)}),m(c,o),y()}export{C as component};
