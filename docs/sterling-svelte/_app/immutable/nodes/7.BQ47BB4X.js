import{a as B,t as M}from"../chunks/disclose-version.BiSuMygR.js";import{p as A,s as e,f as H,t as P,a as U,c as t,r}from"../chunks/runtime.B1Lgz8AP.js";import{s as o}from"../chunks/render.CSQAU11X.js";import{i as E}from"../chunks/lifecycle.CouH_cVo.js";const l={npmInstall:"npm install @geoffcox/sterling-svelte",yarnInstall:"yarn add @geoffcox/sterling-svelte",addComponents:`<script>
  import Button from '@geoffcox/sterling-svelte/Button.svelte';
  import { Checkbox } from '@geoffcox/sterling-svelte';
<\/script>

<div>
  <Button>Hello sterling-svelte</Button>
  <Checkbox>Ready</Checkbox>
</div>`,npmInstallThemes:"npm install @geoffcox/sterling-svelte-themes",yarnInstallThemes:"yarn add @geoffcox/sterling-svelte-themes",importCss:"import '@geoffcox/sterling-svelte-themes/sterling.css';",htmlLightDark:'<html class="light-mode"></html>',importLightDark:`import { applyLightDarkMode } from '@geoffcox/sterling-svelte';

// TODO: Provide UI to toggle this between auto, light, or dark.
let mode = $state('auto');`,useLightDark:`<div use:applyLightDarkMode={{atDocumentRoot: true, mode}}>
  ...
</div>`,replImport:`<svelte:head>
  <link href="https://unpkg.com/@geoffcox/sterling-svelte-themes/css/sterling.css" rel="stylesheet">
</svelte:head>`};var O=M(`<h1>Installation</h1> <ol><li>In your Svelte application, use your favorite package manager to install sterling-svelte.</li> <pre> </pre> <pre> </pre> <li>Add sterling-svelte components. You can import each component from their .svelte file or
    multiple from the library.</li> <pre> </pre></ol> <h2>Apply the Sterling theme (optional & recommended)</h2> <p>If you don't have your own theme for sterling-svelte, it is recommended to use the Sterling theme.</p> <ol><li>Add the sterling-svelte-themes package</li> <pre> </pre> <pre> </pre> <li>In the root of your applications (+layout.svelte), import the Sterling theme.</li> <pre> </pre> <li>Set either light-mode or dark-mode on the root of your application.</li> <pre> </pre></ol> <h2>Support light and dark modes (optional)</h2> <ol><li>Import the applyLightDarkMode action in the script section.</li> <pre> </pre> <li>Use applyLightDark mode on the top-level div of your application.</li> <p>Recommended: Specify <code>atDocumentRoot: true</code> to apply the class at the root of the HTML
    document. This ensure styles are applied to floating UI appending to the body element's children.</p> <pre> </pre></ol> <h2>How to use the Sterling theme in Svelte REPL</h2> If you are working in the svelte.dev REPL or another project where you cannot import CSS from Svelte
components, you can use this alternative: <pre> </pre>`,1);function z(x,_){A(_,!1),E();var g=O(),a=e(H(g),2),s=e(t(a),2),k=t(s,!0);r(s);var i=e(s,2),I=t(i,!0);r(i);var d=e(i,4),D=t(d,!0);r(d),r(a);var p=e(a,6),n=e(t(p),2),L=t(n,!0);r(n);var m=e(n,2),S=t(m,!0);r(m);var h=e(m,4),C=t(h,!0);r(h);var f=e(h,4),b=t(f,!0);r(f),r(p);var v=e(p,4),c=e(t(v),2),T=t(c);r(c);var u=e(c,6),R=t(u,!0);r(u),r(v);var y=e(v,4),w=t(y,!0);r(y),P(()=>{o(k,l.npmInstall),o(I,l.yarnInstall),o(D,l.addComponents),o(L,l.npmInstallThemes),o(S,l.yarnInstallThemes),o(C,l.importCss),o(b,l.htmlLightDark),o(T,`${l.importLightDark}
  `),o(R,l.useLightDark),o(w,l.replImport)}),B(x,g),U()}export{z as component};
