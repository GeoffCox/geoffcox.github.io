import{t as _,a as C}from"../chunks/Bvk7pPDR.js";import"../chunks/BJOgacJ1.js";import{p as E,t as w,a as D,s as o,c as e,r as t}from"../chunks/CStEGg-U.js";import{s as r}from"../chunks/CmejSn_P.js";import{i as O}from"../chunks/dILuBAM9.js";const s={applyLightDarkMode:`<script lang="ts">
  import { applyLightDarkMode } from '@geoffcox/sterling-svelte';
<\/script>

<div use:applyLightDarkMode={{ mode: 'auto', atDocumentRoot: true }}>
  <!-- content here -->
</div>
`,clickOutside:`<script lang="ts">
  import { clickOutside, type ClickOutsideEvent } from '@geoffcox/sterling-svelte';
  const onClickOutside = (event: ClickOutsideEvent) => {
    // do something here
  };
<\/script>

<div use:clickOutside on:click_outside={onClickOutside}>
  <!-- content here -->
</div>
`,extraClass:`<script lang="ts">
  import { extraClass } from '@geoffcox/sterling-svelte';

  let {children, class: _class}
<\/script>

<button class="sterling-button" use:extraClass={extraClass: _class}>
  {#if children}
    {children}
  {/endif}
</button>
`,forwardEvents:`<script lang="ts">
  import { forwardEvents } from '@geoffcox/sterling-svelte';

  let targetRef: HTMLDivElement;

  const onClick = () => {
    // do something here
  };
<\/script>

<div bind:this={targetRef} on:click={onClick}>sterling-svelte</div>
<button use:forwardEvents={ target: targetRef, events: ['click']}>Click Me<button>
`,portal:`<script lang="ts">
  import { portal } from '@geoffcox/sterling-svelte';
<\/script>

<div use:portal={{ target: document.body }}>
  <!-- content here -->
</div>
`,trapKeyboardFocus:`<script lang="ts">
  import { trapKeyboardFocus } from '@geoffcox/sterling-svelte';
<\/script>

<div use:trapKeyboardFocus>
  <!-- content with focusable children here -->
</div>
`};var M=_(`<div class="topic-page svelte-a6kodj"><h1>Actions</h1> These actions were built to support components and are available to you in your own component
  development. <h2>clickOutside</h2> Raises an event anytime the user clicks outside the bounds of the element. <pre> </pre> <h2>colorScheme</h2> Sets the color-scheme on the document root element. It can be applied at any div in the
  application. The value set should be 'light dark', 'light', or 'dark'. <pre> </pre> <h2>forwardEvents</h2> Forwards native and svelte component events from one component to another. Useful when you need to
  make an event appear to bubble up and components are not in the same DOM hierarchy. <pre> </pre> <h2>portal</h2> Makes the element a child of the target element. Useful in scenarios like menus when you want to
  move an element outside of its parent so it can float above it. <pre> </pre> <h2>trapKeyboardFocus</h2> Keeps the keyboard focus within the children of an element by handling 'Tab' keyboard events. <pre> </pre> <h2>applyLightDarkMode (DEPRECATED)</h2> When using sterling-svelte-themes 2.0 or later, you should use the colorScheme action instead.
  Sets light-mode or dark-mode classes on the node or optionally on the root document element. <pre> </pre> <h2>extraClass (DEPRECATED)</h2> Appends an extra class value to the class prop. Typically used by components to support adding the
  class prop to an existing class name. <pre> </pre></div>`);function A(u,v){E(v,!1),O();var a=M(),n=o(e(a),4),m=e(n,!0);t(n);var i=o(n,4),f=e(i,!0);t(i);var l=o(i,4),g=e(l,!0);t(l);var c=o(l,4),k=e(c,!0);t(c);var p=o(c,4),b=e(p,!0);t(p);var d=o(p,4),y=e(d,!0);t(d);var h=o(d,4),x=e(h,!0);t(h),t(a),w(()=>{r(m,s.clickOutside),r(f,s.clickOutside),r(g,s.forwardEvents),r(k,s.portal),r(b,s.trapKeyboardFocus),r(y,s.applyLightDarkMode),r(x,s.extraClass)}),C(u,a),D()}export{A as component};
