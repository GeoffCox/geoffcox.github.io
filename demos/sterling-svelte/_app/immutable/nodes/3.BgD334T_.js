import{s as he,B as V,e as w,c as k,d as me,h as c,j as le,k as p,a as g,b as v,J as ae,t as pe,f as ue,N as Ke,H as Ne,g as y,i as Me,n as Je}from"../chunks/scheduler.Bw_xjNFK.js";import{S as _e,i as ge,c as j,a as C,m as T,t as E,b as S,d as x,f as ce,g as We,e as Xe}from"../chunks/index.BMoFg06t.js";import{S as Ye}from"../chunks/SvelteIcon.DockpRgu.js";import{P as Qe}from"../chunks/Playground.DC53lmnd.js";import{B as Fe}from"../chunks/Popover.D5eTKQkG.js";import{C as Be}from"../chunks/Checkbox.BWMJVdRd.js";import{I as Ze}from"../chunks/MenuSeparator.yHwjPP_Z.js";import{V as et}from"../chunks/VariantInput.XD_9tCNV.js";function De(t){let e,n;return e=new Ye({}),{c(){j(e.$$.fragment)},l(s){C(e.$$.fragment,s)},m(s,i){T(e,s,i),n=!0},i(s){n||(E(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function tt(t){let e,n,s,i=t[4]&&De();return{c(){i&&i.c(),e=g(),n=pe(t[3])},l(r){i&&i.l(r),e=v(r),n=ue(r,t[3])},m(r,a){i&&i.m(r,a),p(r,e,a),p(r,n,a),s=!0},p(r,a){r[4]?i?a&16&&E(i,1):(i=De(),i.c(),E(i,1),i.m(e.parentNode,e)):i&&(We(),S(i,1,1,()=>{i=null}),Xe()),(!s||a&8)&&Ke(n,r[3])},i(r){s||(E(i),s=!0)},o(r){S(i),s=!1},d(r){r&&(c(e),c(n)),i&&i.d(r)}}}function nt(t){let e,n,s;return n=new Fe({props:{disabled:t[1],variant:t[2],$$slots:{default:[tt]},$$scope:{ctx:t}}}),n.$on("click",t[9]),{c(){e=w("div"),j(n.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0,slot:!0});var r=me(e);C(n.$$.fragment,r),r.forEach(c),this.h()},h(){le(e,"class","component svelte-wjcjyy"),le(e,"slot","component")},m(i,r){p(i,e,r),T(n,e,null),s=!0},p(i,r){const a={};r&2&&(a.disabled=i[1]),r&4&&(a.variant=i[2]),r&2072&&(a.$$scope={dirty:r,ctx:i}),n.$set(a)},i(i){s||(E(n.$$.fragment,i),s=!0)},o(i){S(n.$$.fragment,i),s=!1},d(i){i&&c(e),x(n)}}}function st(t){let e;return{c(){e=pe("disabled")},l(n){e=ue(n,"disabled")},m(n,s){p(n,e,s)},d(n){n&&c(e)}}}function it(t){let e,n,s,i,r,a;function d(l){t[7](l)}let $={$$slots:{default:[st]},$$scope:{ctx:t}};t[1]!==void 0&&($.checked=t[1]),e=new Be({props:$}),V.push(()=>ce(e,"checked",d));function f(l){t[8](l)}let m={availableVariants:["capsule","circular ","colorful","secondary","square","tool"]};return t[2]!==void 0&&(m.variant=t[2]),i=new et({props:m}),V.push(()=>ce(i,"variant",f)),{c(){j(e.$$.fragment),s=g(),j(i.$$.fragment)},l(l){C(e.$$.fragment,l),s=v(l),C(i.$$.fragment,l)},m(l,h){T(e,l,h),p(l,s,h),T(i,l,h),a=!0},p(l,h){const b={};h&2048&&(b.$$scope={dirty:h,ctx:l}),!n&&h&2&&(n=!0,b.checked=l[1],ae(()=>n=!1)),e.$set(b);const _={};!r&&h&4&&(r=!0,_.variant=l[2],ae(()=>r=!1)),i.$set(_)},i(l){a||(E(e.$$.fragment,l),E(i.$$.fragment,l),a=!0)},o(l){S(e.$$.fragment,l),S(i.$$.fragment,l),a=!1},d(l){l&&c(s),x(e,l),x(i,l)}}}function ot(t){let e;return{c(){e=pe("with icon")},l(n){e=ue(n,"with icon")},m(n,s){p(n,e,s)},d(n){n&&c(e)}}}function rt(t){let e,n,s,i,r,a;function d(l){t[5](l)}let $={};t[3]!==void 0&&($.value=t[3]),e=new Ze({props:$}),V.push(()=>ce(e,"value",d));function f(l){t[6](l)}let m={$$slots:{default:[ot]},$$scope:{ctx:t}};return t[4]!==void 0&&(m.checked=t[4]),i=new Be({props:m}),V.push(()=>ce(i,"checked",f)),{c(){j(e.$$.fragment),s=g(),j(i.$$.fragment)},l(l){C(e.$$.fragment,l),s=v(l),C(i.$$.fragment,l)},m(l,h){T(e,l,h),p(l,s,h),T(i,l,h),a=!0},p(l,h){const b={};!n&&h&8&&(n=!0,b.value=l[3],ae(()=>n=!1)),e.$set(b);const _={};h&2048&&(_.$$scope={dirty:h,ctx:l}),!r&&h&16&&(r=!0,_.checked=l[4],ae(()=>r=!1)),i.$set(_)},i(l){a||(E(e.$$.fragment,l),E(i.$$.fragment,l),a=!0)},o(l){S(e.$$.fragment,l),S(i.$$.fragment,l),a=!1},d(l){l&&c(s),x(e,l),x(i,l)}}}function lt(t){let e,n,s={$$slots:{tweaks:[rt],props:[it],component:[nt]},$$scope:{ctx:t}};return e=new Qe({props:s}),t[10](e),{c(){j(e.$$.fragment)},l(i){C(e.$$.fragment,i)},m(i,r){T(e,i,r),n=!0},p(i,[r]){const a={};r&2079&&(a.$$scope={dirty:r,ctx:i}),e.$set(a)},i(i){n||(E(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){t[10](null),x(e,i)}}}function at(t,e,n){let s,i=!1,r="",a="sterling-svelte",d=!0;function $(_){a=_,n(3,a)}function f(_){d=_,n(4,d)}function m(_){i=_,n(1,i)}function l(_){r=_,n(2,r)}const h=()=>s.recordEvent("click");function b(_){V[_?"unshift":"push"](()=>{s=_,n(0,s)})}return[s,i,r,a,d,$,f,m,l,h,b]}class ct extends _e{constructor(e){super(),ge(this,e,at,lt,he,{})}}const pt=500,ut=20,dt=300,ft="https://stackblitz.com",Le=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],mt=["project","search","ports","settings"],ht=["light","dark"],_t=["editor","preview"],He={clickToLoad:t=>U("ctl",t),devToolsHeight:t=>Ae("devtoolsheight",t),forceEmbedLayout:t=>U("embed",t),hideDevTools:t=>U("hidedevtools",t),hideExplorer:t=>U("hideExplorer",t),hideNavigation:t=>U("hideNavigation",t),openFile:t=>oe("file",t),showSidebar:t=>gt("showSidebar",t),sidebarView:t=>fe("sidebarView",t,mt),startScript:t=>oe("startScript",t),terminalHeight:t=>Ae("terminalHeight",t),theme:t=>fe("theme",t,ht),view:t=>fe("view",t,_t),zenMode:t=>U("zenMode",t),organization:t=>`${oe("orgName",t==null?void 0:t.name)}&${oe("orgProvider",t==null?void 0:t.provider)}`};function Re(t={}){const e=Object.entries(t).map(([n,s])=>s!=null&&He.hasOwnProperty(n)?He[n](s):"").filter(Boolean);return e.length?`?${e.join("&")}`:""}function U(t,e){return e===!0?`${t}=1`:""}function gt(t,e){return typeof e=="boolean"?`${t}=${e?"1":"0"}`:""}function Ae(t,e){if(typeof e=="number"&&!Number.isNaN(e)){const n=Math.min(100,Math.max(0,e));return`${t}=${encodeURIComponent(Math.round(n))}`}return""}function fe(t,e="",n=[]){return n.includes(e)?`${t}=${encodeURIComponent(e)}`:""}function oe(t,e){return(Array.isArray(e)?e:[e]).filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`${t}=${encodeURIComponent(s)}`).join("&")}function Ue(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function ve(t,e){return`${Ve(e)}${t}${Re(e)}`}function $e(t,e){const n={forceEmbedLayout:!0};return e&&typeof e=="object"&&Object.assign(n,e),`${Ve(n)}${t}${Re(n)}`}function Ve(t={}){return(typeof t.origin=="string"?t.origin:ft).replace(/\/$/,"")}function be(t,e,n){if(!e||!t||!t.parentNode)throw new Error("Invalid Element");t.id&&(e.id=t.id),t.className&&(e.className=t.className),vt(e,n),t.replaceWith(e)}function we(t){if(typeof t=="string"){const e=document.getElementById(t);if(!e)throw new Error(`Could not find element with id '${t}'`);return e}else if(t instanceof HTMLElement)return t;throw new Error(`Invalid element: ${t}`)}function ke(t){return t&&t.newWindow===!1?"_self":"_blank"}function vt(t,e={}){const n=Object.hasOwnProperty.call(e,"height")?`${e.height}`:`${dt}`,s=Object.hasOwnProperty.call(e,"width")?`${e.width}`:void 0;t.setAttribute("height",n),s?t.setAttribute("width",s):t.setAttribute("style","width:100%;")}class $t{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:n}){return new Promise((s,i)=>{const r=Ue();this.pending[r]={resolve:s,reject:i},this.port.postMessage({type:e,payload:{...n,__reqid:r}})})}messageListener(e){var d;if(typeof((d=e.data.payload)==null?void 0:d.__reqid)!="string")return;const{type:n,payload:s}=e.data,{__reqid:i,__success:r,__error:a}=s;this.pending[i]&&(r?this.pending[i].resolve(this.cleanResult(s)):this.pending[i].reject(a?`${n}: ${a}`:n),delete this.pending[i])}cleanResult(e){const n={...e};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}}class bt{constructor(e,n){this.editor={openFile:s=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:s}}),setCurrentFile:s=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:s}}),setTheme:s=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:s}}),setView:s=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:s}}),showSidebar:(s=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:s}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(s=>(s==null?void 0:s.url)??null),setUrl:(s="/")=>{if(typeof s!="string"||!s.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${s}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:s}})}},this._rdc=new $t(e),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(e){const n=s=>s!==null&&typeof s=="object";if(!n(e)||!n(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const re=[];class wt{constructor(e){this.id=Ue(),this.element=e,this.pending=new Promise((n,s)=>{const i=({data:f,ports:m})=>{(f==null?void 0:f.action)==="SDK_INIT_SUCCESS"&&f.id===this.id&&(this.vm=new bt(m[0],f.payload),n(this.vm),a())},r=()=>{var f;(f=this.element.contentWindow)==null||f.postMessage({action:"SDK_INIT",id:this.id},"*")};function a(){window.clearInterval($),window.removeEventListener("message",i)}window.addEventListener("message",i),r();let d=0;const $=window.setInterval(()=>{if(this.vm){a();return}if(d>=ut){a(),s("Timeout: Unable to establish a connection with the StackBlitz VM"),re.forEach((f,m)=>{f.id===this.id&&re.splice(m,1)});return}d++,r()},pt)}),re.push(this)}}const kt=t=>{const e=t instanceof Element?"element":"id";return re.find(n=>n[e]===t)??null};function yt(t,e){const n=document.createElement("input");return n.type="hidden",n.name=t,n.value=e,n}function Et(t){return t.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function qe({template:t,title:e,description:n,dependencies:s,files:i,settings:r}){if(!Le.includes(t)){const f=Le.map(m=>`'${m}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${f}`)}const a=[],d=(f,m,l="")=>{a.push(yt(f,typeof m=="string"?m:l))};d("project[title]",e),typeof n=="string"&&n.length>0&&d("project[description]",n),d("project[template]",t,"javascript"),s&&(t==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):d("project[dependencies]",JSON.stringify(s))),r&&d("project[settings]",JSON.stringify(r)),Object.entries(i).forEach(([f,m])=>{d(`project[files][${Et(f)}]`,m)});const $=document.createElement("form");return $.method="POST",$.setAttribute("style","display:none!important;"),$.append(...a),$}function St(t,e){const n=qe(t);return n.action=$e("/run",e),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function jt(t,e){const n=qe(t);n.action=ve("/run",e),n.target=ke(e),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function de(t){return t!=null&&t.contentWindow?(kt(t)??new wt(t)).pending:Promise.reject("Provided element is not an iframe.")}function Ct(t,e){jt(t,e)}function Tt(t,e){const n=ve(`/edit/${t}`,e),s=ke(e);window.open(n,s)}function xt(t,e){const n=ve(`/github/${t}`,e),s=ke(e);window.open(n,s)}function Pt(t,e,n){var a;const s=we(t),i=St(e,n),r=document.createElement("iframe");return be(s,r,n),(a=r.contentDocument)==null||a.write(i),de(r)}function It(t,e,n){const s=we(t),i=document.createElement("iframe");return i.src=$e(`/edit/${e}`,n),be(s,i,n),de(i)}function Nt(t,e,n){const s=we(t),i=document.createElement("iframe");return i.src=$e(`/github/${e}`,n),be(s,i,n),de(i)}const Mt={connect:de,embedGithubProject:Nt,embedProject:Pt,embedProjectId:It,openGithubProject:xt,openProject:Ct,openProjectId:Tt},Dt=`<script lang="ts">  
import '@geoffcox/sterling-svelte/css/sterling.css';
import Example from './Example.svelte';
<\/script>

<main>
  <div use:applyLightDarkMode={{
    atDocumentRoot: true,
    mode: 'light'
  }}>   
    <h1>Example</h1>
    <Example />
  </div>
</main>
`,Lt=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Svelte + TS</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>
`,Ht=`import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
`,At=`{
  "name": "vite-svelte-ts-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-check --tsconfig ./tsconfig.json"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^3.1.1",
    "@tsconfig/svelte": "^5.0.4",
    "svelte": "^4.2.17",
    "svelte-check": "^3.8.0",
    "tslib": "^2.6.2",
    "typescript": "^5.2.2",
    "vite": "^5.2.12"
  },
  "dependencies": {
    "@geoffcox/sterling-svelte": "1.0.7"
  }
}
`,Ot=`import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}`,Ft=`{
  "extends": "@tsconfig/svelte/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "useDefineForClassFields": true,
    "module": "ESNext",
    "resolveJsonModule": true,
    "isolatedModules": true
    "target": "ESNext",
  },
  "include": ["src/**/*.ts", "src/**/*.js", "src/**/*.svelte"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`,Bt=`{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true
  },
  "include": ["vite.config.ts"]
}`,Rt=`import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})`,Ut=`/// <reference types="svelte" />
/// <reference types="vite/client" />`,Oe={title:"Dynamically Generated sterling-svelte Project",description:"svelte-sterling dynamic project",template:"node",files:{"index.html":Lt,"package.json":At,"svelte.config.js":Ot,"tsconfig.json":Ft,"tsconfig.node.json":Bt,"vite.config.ts":Rt,"src/App.svelte":Dt,"src/main.ts":Ht,"src/vite-env.d.ts":Ut}},Vt=t=>{const e={...Oe};e.files["src/Example.svelte"]=t,Mt.openProject(Oe,{openFile:"index.js"})},qt=`<script lang="ts">
import Button from '$lib/Button.svelte';
<\/script>

<Button>Hello Button</Button>
`;function zt(t){let e;return{c(){e=pe("Stackblitz")},l(n){e=ue(n,"Stackblitz")},m(n,s){p(n,e,s)},d(n){n&&c(e)}}}function Gt(t){let e,n;return e=new Fe({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),e.$on("click",t[0]),{c(){j(e.$$.fragment)},l(s){C(e.$$.fragment,s)},m(s,i){T(e,s,i),n=!0},p(s,[i]){const r={};i&2&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(E(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function Kt(t){return[()=>Vt(qt)]}class Jt extends _e{constructor(e){super(),ge(this,e,Kt,Gt,he,{})}}function Wt(t){let e,n="Button",s,i,r="A styled HTML <code>button</code> element.",a,d,$="<li>Choose different button shapes and variants.</li> <li>The default type is <code>&#39;button&#39;</code> rather than <code>&#39;submit&#39;</code>.</li>",f,m,l="Props",h,b,_="HTMLButtonElement props are included.",q,P,z,ze=`<code class="language-ts"><span class="token comment">/** Additional class names to apply. */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> variant<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></code>`,G,I,ye="Events",K,N,Ee="HTMLButtonElement events are included.",J,M,Se="Methods",W,D,je="HTMLButtonElement <code>blur</code>, <code>click</code>, and <code>focus</code> methods are included.",X,L,Ce="Anatomy",Y,H,Te="Use the default slot to place content within the button.",Q,A,Z,Ge=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sterling-button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>variant<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`,ee,O,xe="Playground",te,F,ne,B,Pe="StackBlitz",se,R,ie;return F=new ct({}),R=new Jt({}),{c(){e=w("h1"),e.textContent=n,s=g(),i=w("p"),i.innerHTML=r,a=g(),d=w("ul"),d.innerHTML=$,f=g(),m=w("h2"),m.textContent=l,h=g(),b=w("p"),b.textContent=_,q=g(),P=w("pre"),z=new Ne(!1),G=g(),I=w("h2"),I.textContent=ye,K=g(),N=w("p"),N.textContent=Ee,J=g(),M=w("h2"),M.textContent=Se,W=g(),D=w("p"),D.innerHTML=je,X=g(),L=w("h2"),L.textContent=Ce,Y=g(),H=w("p"),H.textContent=Te,Q=g(),A=w("pre"),Z=new Ne(!1),ee=g(),O=w("h2"),O.textContent=xe,te=g(),j(F.$$.fragment),ne=g(),B=w("h2"),B.textContent=Pe,se=g(),j(R.$$.fragment),this.h()},l(o){e=k(o,"H1",{"data-svelte-h":!0}),y(e)!=="svelte-14i8kww"&&(e.textContent=n),s=v(o),i=k(o,"P",{"data-svelte-h":!0}),y(i)!=="svelte-4iezs8"&&(i.innerHTML=r),a=v(o),d=k(o,"UL",{"data-svelte-h":!0}),y(d)!=="svelte-1vcerqc"&&(d.innerHTML=$),f=v(o),m=k(o,"H2",{"data-svelte-h":!0}),y(m)!=="svelte-1lq2xlg"&&(m.textContent=l),h=v(o),b=k(o,"P",{"data-svelte-h":!0}),y(b)!=="svelte-4ax7x5"&&(b.textContent=_),q=v(o),P=k(o,"PRE",{class:!0});var u=me(P);z=Me(u,!1),u.forEach(c),G=v(o),I=k(o,"H2",{"data-svelte-h":!0}),y(I)!=="svelte-1b7vw6v"&&(I.textContent=ye),K=v(o),N=k(o,"P",{"data-svelte-h":!0}),y(N)!=="svelte-1vj0ffw"&&(N.textContent=Ee),J=v(o),M=k(o,"H2",{"data-svelte-h":!0}),y(M)!=="svelte-27oo3k"&&(M.textContent=Se),W=v(o),D=k(o,"P",{"data-svelte-h":!0}),y(D)!=="svelte-c0vzvc"&&(D.innerHTML=je),X=v(o),L=k(o,"H2",{"data-svelte-h":!0}),y(L)!=="svelte-nes0c9"&&(L.textContent=Ce),Y=v(o),H=k(o,"P",{"data-svelte-h":!0}),y(H)!=="svelte-1xq2y2w"&&(H.textContent=Te),Q=v(o),A=k(o,"PRE",{class:!0});var Ie=me(A);Z=Me(Ie,!1),Ie.forEach(c),ee=v(o),O=k(o,"H2",{"data-svelte-h":!0}),y(O)!=="svelte-1uz9czj"&&(O.textContent=xe),te=v(o),C(F.$$.fragment,o),ne=v(o),B=k(o,"H2",{"data-svelte-h":!0}),y(B)!=="svelte-1iyb389"&&(B.textContent=Pe),se=v(o),C(R.$$.fragment,o),this.h()},h(){z.a=null,le(P,"class","language-ts"),Z.a=null,le(A,"class","language-svelte")},m(o,u){p(o,e,u),p(o,s,u),p(o,i,u),p(o,a,u),p(o,d,u),p(o,f,u),p(o,m,u),p(o,h,u),p(o,b,u),p(o,q,u),p(o,P,u),z.m(ze,P),p(o,G,u),p(o,I,u),p(o,K,u),p(o,N,u),p(o,J,u),p(o,M,u),p(o,W,u),p(o,D,u),p(o,X,u),p(o,L,u),p(o,Y,u),p(o,H,u),p(o,Q,u),p(o,A,u),Z.m(Ge,A),p(o,ee,u),p(o,O,u),p(o,te,u),T(F,o,u),p(o,ne,u),p(o,B,u),p(o,se,u),T(R,o,u),ie=!0},p:Je,i(o){ie||(E(F.$$.fragment,o),E(R.$$.fragment,o),ie=!0)},o(o){S(F.$$.fragment,o),S(R.$$.fragment,o),ie=!1},d(o){o&&(c(e),c(s),c(i),c(a),c(d),c(f),c(m),c(h),c(b),c(q),c(P),c(G),c(I),c(K),c(N),c(J),c(M),c(W),c(D),c(X),c(L),c(Y),c(H),c(Q),c(A),c(ee),c(O),c(te),c(ne),c(B),c(se)),x(F,o),x(R,o)}}}class on extends _e{constructor(e){super(),ge(this,e,null,Wt,he,{})}}export{on as component};
