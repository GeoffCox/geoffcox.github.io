import{t as U,a as _,b as H}from"../chunks/DnVUfIgW.js";import"../chunks/Do_toGwJ.js";import{p as j,t as P,a as E,s as e,c as t,r,U as J}from"../chunks/DB1YyXYW.js";import{s as o}from"../chunks/2_iocEjr.js";import{i as Y}from"../chunks/DxQpxL-0.js";import{L as q}from"../chunks/DhgXGpEA.js";const l={npmInstall:"npm install @geoffcox/sterling-svelte",yarnInstall:"yarn add @geoffcox/sterling-svelte",addComponents:`<script>
  import Button from '@geoffcox/sterling-svelte/Button.svelte';
  import { Checkbox } from '@geoffcox/sterling-svelte';
<\/script>

<div>
  <Button>Hello sterling-svelte</Button>
  <Checkbox>Ready</Checkbox>
</div>`,npmInstallThemes:"npm install @geoffcox/sterling-svelte-themes",yarnInstallThemes:"yarn add @geoffcox/sterling-svelte-themes",importCss:"import '@geoffcox/sterling-svelte-themes/sterling.css';",htmlLightDark:'<html class="light-mode"></html>',importLightDark:`import { applyLightDarkMode } from '@geoffcox/sterling-svelte';

// Just like this site does, you can provide UI to toggle this between modes.
let mode = $state('auto');`,useLightDark:`<div use:applyLightDarkMode={{atDocumentRoot: true, mode}}>
  ...
</div>`,replImport:`<svelte:head>
  <link href="https://unpkg.com/@geoffcox/sterling-svelte-themes/css/sterling.css" rel="stylesheet">
</svelte:head>`};var z=U(`<div class="topic-page svelte-a6kodj"><h1>Installation</h1> <ol><li>In your Svelte application, use your favorite package manager to install sterling-svelte.</li> <pre> </pre> <pre> </pre> <li>Add sterling-svelte components. You can import each component from their .svelte file or
      multiple at once from the library root.</li> <pre> </pre></ol> <h2>Apply the Sterling theme (optional)</h2> <p>If you don't have your own theme for sterling-svelte, it is recommended to use the Sterling
    theme.</p> <ol><li>Add the sterling-svelte-themes package</li> <pre> </pre> <pre> </pre> <li>In the root of your application (+layout.svelte), import the Sterling theme.</li> <pre> </pre> <li>Set either light-mode or dark-mode at the &lt;html&gt; or &lt;body&gt; root.</li> <pre> </pre></ol> <h2>Automatic light and dark modes (optional)</h2> <ol><li>Import the applyLightDarkMode action in the script section.</li> <pre> </pre> <li>Use applyLightDark mode on the top-level div of your application.</li> <p>Recommended: Specify <code>atDocumentRoot: true</code> to apply the class at the root of the HTML
      document. This ensure styles are applied to floating UI appending to the &lt;body&gt; children.</p> <pre> </pre></ol> <h2>How to use the Sterling theme in a REPL</h2> If you are in the <!> or another project where you cannot import CSS from Svelte components, you can use this alternative: <pre> </pre></div>`);function W(k,I){j(I,!1),Y();var a=z(),s=e(t(a),2),i=e(t(s),2),L=t(i,!0);r(i);var p=e(i,2),D=t(p,!0);r(p);var c=e(p,4),S=t(c,!0);r(c),r(s);var n=e(s,6),m=e(t(n),2),b=t(m,!0);r(m);var h=e(m,2),C=t(h,!0);r(h);var v=e(h,4),$=t(v,!0);r(v);var u=e(v,4),T=t(u,!0);r(u),r(n);var d=e(n,4),g=e(t(d),2),B=t(g);r(g);var f=e(g,6),R=t(f,!0);r(f),r(d);var y=e(d,4);q(y,{href:"https://svelte.dev/playground",target:"_blank",children:(A,F)=>{J();var M=H("Svelte playground");_(A,M)},$$slots:{default:!0}});var x=e(y,2),w=t(x,!0);r(x),r(a),P(()=>{o(L,l.npmInstall),o(D,l.yarnInstall),o(S,l.addComponents),o(b,l.npmInstallThemes),o(C,l.yarnInstallThemes),o($,l.importCss),o(T,l.htmlLightDark),o(B,`${l.importLightDark}
  `),o(R,l.useLightDark),o(w,l.replImport)}),_(k,a),E()}export{W as component};
