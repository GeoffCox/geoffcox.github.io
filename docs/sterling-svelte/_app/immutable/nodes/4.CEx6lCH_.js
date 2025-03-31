import{t as k,a as x}from"../chunks/DnVUfIgW.js";import"../chunks/Do_toGwJ.js";import{p as y,t as C,a as _,s,c as e,r as t,U as w}from"../chunks/DB1YyXYW.js";import{s as r}from"../chunks/2_iocEjr.js";import{i as E}from"../chunks/DxQpxL-0.js";import"../chunks/HP_qOp-S.js";const o={clickOutside:`<script lang="ts">
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
`};var O=k(`<div class="topic-page svelte-a6kodj"><h1>Actions</h1> These actions were built to support components and are available to you in your own component
  development. <h2>clickOutside</h2> Raises an event anytime the user clicks outside the bounds of the element. <pre>  <code> </code>
</pre> <h2>forwardEvents</h2> Forwards native and svelte component events from one component to another. Useful when you need to
  make an event appear to bubble up and components are not in the same DOM hierarchy. <pre> </pre> <h2>portal</h2> Makes the element a child of the target element. Useful in scenarios like menus when you want to
  move an element outside of its parent so it can float above it. <pre> </pre> <h2>trapKeyboardFocus</h2> Keeps the keyboard focus within the children of an element by handling 'Tab' keyboard events. <pre> </pre> <h2>DEPRECATED: extraClass</h2> Appends an extra class value to the class prop. Typically used by components to support adding the
  class prop to an existing class name. <pre> </pre></div>`);function A(u,v){y(v,!1),E();var a=O(),n=s(e(a),4),p=s(e(n)),h=e(p,!0);t(p),w(),t(n);var i=s(n,4),m=e(i,!0);t(i);var c=s(i,4),f=e(c,!0);t(c);var l=s(c,4),g=e(l,!0);t(l);var d=s(l,4),b=e(d,!0);t(d),t(a),C(()=>{r(h,o.clickOutside),r(m,o.forwardEvents),r(f,o.portal),r(g,o.trapKeyboardFocus),r(b,o.extraClass)}),x(u,a),_()}export{A as component};
