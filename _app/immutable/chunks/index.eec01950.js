var O=Object.defineProperty;var I=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>(I(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as g,l as b,m as M,p as E,q as P,i as A,v as T,w as W,x as N,y as D,z as q,A as H}from"./scheduler.bebf7e56.js";let y=!1;function k(){y=!0}function F(){y=!1}function G(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function R(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=l?s+1:G(1,s,_=>t[n[_]].claim_order,l))-1;i[r]=n[u]+1;const f=u+1;n[f]=r,s=Math.max(f,s)}const o=[],a=[];let c=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(o.push(t[r-1]);c>=r;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);o.reverse(),a.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<a.length;r++){for(;l<o.length&&a[r].claim_order>=o[l].claim_order;)l++;const u=l<o.length?o[l]:null;e.insertBefore(a[r],u)}}function V(e,t){e.appendChild(t)}function J(e,t){if(y){for(R(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function le(e,t,n){y&&!n?J(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function z(e){return document.createElement(e)}function K(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function ce(){return w(" ")}function fe(){return w("")}function S(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function j(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const Q=["width","height"];function ue(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&Q.indexOf(i)===-1?e[i]=t[i]:j(e,i,t[i])}function de(e,t){for(const n in t)j(e,n,t[n])}function _e(e){return e.dataset.svelteH}function U(e){return Array.from(e.childNodes)}function X(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function B(e,t,n,i,s=!1){X(e);const o=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const r=n(c);return r===void 0?e.splice(a,1):e[a]=r,s||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const r=n(c);return r===void 0?e.splice(a,1):e[a]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function L(e,t,n,i){return B(e,s=>s.nodeName===t,s=>{const o=[];for(let a=0;a<s.attributes.length;a++){const c=s.attributes[a];n[c.name]||o.push(c.name)}o.forEach(a=>s.removeAttribute(a))},()=>i(t))}function me(e,t,n){return L(e,t,n,z)}function he(e,t,n){return L(e,t,n,K)}function Y(e,t){return B(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(t),!0)}function pe(e){return Y(e," ")}function ye(e,t){t=""+t,e.data!==t&&(e.data=t)}function $e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let m;function Z(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function ge(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=z("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Z();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=S(window,"message",a=>{a.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{o=S(i.contentWindow,"resize",t),t()}),V(e,i),()=>{(s||o&&i.contentWindow)&&o(),C(i)}}function we(e,t,n){e.classList.toggle(t,!!n)}function xe(e,t){return new e(t)}const h=new Set;let d;function ve(){d={r:0,c:[],p:d}}function be(){d.r||p(d.c),d=d.p}function ee(e,t){e&&e.i&&(h.delete(e),e.i(t))}function Ae(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Ne(e){e&&e.c()}function Se(e,t){e&&e.l(t)}function te(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),A(()=>{const o=e.$$.on_mount.map(D).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...o):p(o),e.$$.on_mount=[]}),s.forEach(A)}function ne(e,t){const n=e.$$;n.fragment!==null&&(T(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(q.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,i,s,o,a,c=[-1]){const r=W;N(e);const l=e.$$={fragment:null,ctx:[],props:o,update:g,not_equal:s,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:b(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};a&&a(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,_,...x)=>{const v=x.length?x[0]:_;return l.ctx&&s(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),u&&ie(e,f)),_}):[],l.update(),u=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){k();const f=U(t.target);l.fragment&&l.fragment.l(f),f.forEach(C)}else l.fragment&&l.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor),F(),M()}N(r)}class Ce{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){ne(this,1),this.$destroy=g}$on(t,n){if(!E(n))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const re="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{ge as A,oe as B,xe as C,fe as D,$e as E,ue as F,S as G,Ce as S,pe as a,j as b,me as c,le as d,z as e,C as f,_e as g,Ae as h,Ee as i,w as j,U as k,Y as l,J as m,ye as n,Ne as o,Se as p,te as q,ne as r,ce as s,ee as t,ve as u,be as v,K as w,he as x,de as y,we as z};