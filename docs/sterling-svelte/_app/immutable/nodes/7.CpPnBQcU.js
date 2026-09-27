import{$ as e,A as t,F as n,M as r,Z as i,dt as a,ft as o,gt as s,ht as c,k as l,l as u,q as d}from"../chunks/CX2jC7lQ.js";import"../chunks/xihTtKlq.js";import{t as f}from"../chunks/D2Z2L_is.js";import"../chunks/ClNsB9K-.js";var p={npmInstall:`npm install @geoffcox/sterling-svelte`,yarnInstall:`yarn add @geoffcox/sterling-svelte`,addComponents:`<script>
  import Button from '@geoffcox/sterling-svelte/Button.svelte';
  import { Checkbox } from '@geoffcox/sterling-svelte';
<\/script>

<div>
  <Button>Hello sterling-svelte</Button>
  <Checkbox>Ready</Checkbox>
</div>`,npmInstallThemes:`npm install @geoffcox/sterling-svelte-themes`,yarnInstallThemes:`yarn add @geoffcox/sterling-svelte-themes`,importCss:`import '@geoffcox/sterling-svelte-themes/sterling.css';`,replExample:`<script>
  import {Button} from '@geoffcox/sterling-svelte';
<\/script>

<svelte:head>
  <link href="https://unpkg.com/@geoffcox/sterling-svelte-themes/css/sterling.css" rel="stylesheet">
</svelte:head>

<div class="sterling-theme">
  <Button>Hello sterling-svelte</Button>
</div>`},m=r(`<div class="topic-page svelte-bn4lq0"><h1>Installation</h1> <ol><li>In your Svelte application, use your favorite package manager to install sterling-svelte.</li> <pre> </pre> <pre> </pre> <li>Add sterling-svelte components. You can import each component from their .svelte file or
      multiple at once from the library root.</li> <pre> </pre></ol> <h2>Use the Sterling theme (optional)</h2> <ol><li>Add the sterling-svelte-themes package</li> <pre> </pre> <pre> </pre> <li>In the root of your application (+layout.svelte), import the Sterling theme.</li> <pre> </pre></ol> <p>The Sterling theme automatically switches betweens light and dark modes.</p> <h2>How to use the Sterling theme in a REPL</h2> If you are in the <!> or another project where you cannot import CSS from the sterling-svelte-themes package, you can use
  this alternative: <pre> </pre></div>`);function h(r,h){o(h,!1),u();var g=m(),_=e(i(g),2),v=e(i(_),2),y=i(v,!0);s(v);var b=e(v,2),x=i(b,!0);s(b);var S=e(b,4),C=i(S,!0);s(S),s(_);var w=e(_,4),T=e(i(w),2),E=i(T,!0);s(T);var D=e(T,2),O=i(D,!0);s(D);var k=e(D,4),A=i(k,!0);s(k),s(w);var j=e(w,6);f(j,{href:`https://svelte.dev/playground`,target:`_blank`,children:(e,r)=>{c(),t(e,n(`Svelte playground`))},$$slots:{default:!0}});var M=e(j,2),N=i(M,!0);s(M),s(g),d(()=>{l(y,p.npmInstall),l(x,p.yarnInstall),l(C,p.addComponents),l(E,p.npmInstallThemes),l(O,p.yarnInstallThemes),l(A,p.importCss),l(N,p.replExample)}),t(r,g),a()}export{h as component};