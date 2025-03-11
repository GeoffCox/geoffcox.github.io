import{a as h,t as m}from"../chunks/disclose-version.BiSuMygR.js";import{p as v,s as o,f as g,t as y,a as b,c as t,r as s}from"../chunks/runtime.B1Lgz8AP.js";import{s as a}from"../chunks/render.CSQAU11X.js";import{i as k}from"../chunks/lifecycle.CouH_cVo.js";const p={prefersColorSchemeDark:`<script lang="ts">
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
`};var S=m(`<h1>Media Query Stores</h1> <p>Media queries are exposed as Svelte stores. This allows you to easily subscribe to handle changing
  values.</p> <h2>prefersColorSchemeDark</h2> <p>A Svelte store that keeps a boolean up to date if the <code>prefers-color-scheme</code> media query
  matches 'dark'.</p> <pre> </pre> <h2>prefersReducedMotion</h2> <p>A Svelte store that keeps a boolean up to date if the <code>prefers-reduced-motion</code> media query
  matches 'reduce'.</p> <pre> </pre> <h2>usingKeyboard</h2> <p>A Svelte store that keeps a boolean up to date if the user is typing on the keyboard. This is a
  wrapper around Keyborg's value.</p> <pre> </pre>`,1);function C(c,n){v(n,!1),k();var i=S(),e=o(g(i),8),f=t(e,!0);s(e);var r=o(e,6),l=t(r,!0);s(r);var d=o(r,6),u=t(d,!0);s(d),y(()=>{a(f,p.prefersColorSchemeDark),a(l,p.prefersReducedMotion),a(u,p.usingKeyboard)}),h(c,i),b()}export{C as component};
