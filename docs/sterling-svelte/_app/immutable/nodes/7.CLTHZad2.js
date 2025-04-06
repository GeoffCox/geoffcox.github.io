import{t as $,a as d,b as w}from"../chunks/Bvk7pPDR.js";import"../chunks/BJOgacJ1.js";import{p as E,t as H,a as L,s as e,c as t,r,Q as j}from"../chunks/CStEGg-U.js";import{s}from"../chunks/CmejSn_P.js";import{i as A}from"../chunks/dILuBAM9.js";import{L as P}from"../chunks/sxW6AO0S.js";const l={npmInstall:"npm install @geoffcox/sterling-svelte",yarnInstall:"yarn add @geoffcox/sterling-svelte",addComponents:`<script>
  import Button from '@geoffcox/sterling-svelte/Button.svelte';
  import { Checkbox } from '@geoffcox/sterling-svelte';
<\/script>

<div>
  <Button>Hello sterling-svelte</Button>
  <Checkbox>Ready</Checkbox>
</div>`,npmInstallThemes:"npm install @geoffcox/sterling-svelte-themes",yarnInstallThemes:"yarn add @geoffcox/sterling-svelte-themes",importCss:"import '@geoffcox/sterling-svelte-themes/sterling.css';",replExample:`<script>
  import {Button} from '@geoffcox/sterling-svelte';
<\/script>

<svelte:head>
  <link href="https://unpkg.com/@geoffcox/sterling-svelte-themes/css/sterling.css" rel="stylesheet">
</svelte:head>

<div class="sterling-theme">
  <Button>Hello sterling-svelte</Button>
</div>`};var R=$(`<div class="topic-page svelte-a6kodj"><h1>Installation</h1> <ol><li>In your Svelte application, use your favorite package manager to install sterling-svelte.</li> <pre> </pre> <pre> </pre> <li>Add sterling-svelte components. You can import each component from their .svelte file or
      multiple at once from the library root.</li> <pre> </pre></ol> <h2>Use the Sterling theme (optional)</h2> <ol><li>Add the sterling-svelte-themes package</li> <pre> </pre> <pre> </pre> <li>In the root of your application (+layout.svelte), import the Sterling theme.</li> <pre> </pre></ol> <p>The Sterling theme automatically switches betweens light and dark modes.</p> <h2>How to use the Sterling theme in a REPL</h2> If you are in the <!> or another project where you cannot import CSS from the sterling-svelte-themes package, you can use
  this alternative: <pre> </pre></div>`);function G(u,x){E(x,!1),A();var o=R(),a=e(t(o),2),n=e(t(a),2),y=t(n,!0);r(n);var i=e(n,2),_=t(i,!0);r(i);var h=e(i,4),k=t(h,!0);r(h),r(a);var p=e(a,4),m=e(t(p),2),I=t(m,!0);r(m);var v=e(m,2),b=t(v,!0);r(v);var c=e(v,4),B=t(c,!0);r(c),r(p);var g=e(p,6);P(g,{href:"https://svelte.dev/playground",target:"_blank",children:(S,Q)=>{j();var T=w("Svelte playground");d(S,T)},$$slots:{default:!0}});var f=e(g,2),C=t(f,!0);r(f),r(o),H(()=>{s(y,l.npmInstall),s(_,l.yarnInstall),s(k,l.addComponents),s(I,l.npmInstallThemes),s(b,l.yarnInstallThemes),s(B,l.importCss),s(C,l.replExample)}),d(u,o),L()}export{G as component};
