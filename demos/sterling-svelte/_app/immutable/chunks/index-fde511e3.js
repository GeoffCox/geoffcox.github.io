function w(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function W(){return Object.create(null)}function k(t){t.forEach(J)}function z(t){return typeof t=="function"}function $t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(nt(e,n))}function wt(t,e,n,i){if(t){const s=K(t,e,n,i);return t[0](s)}}function K(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function kt(t,e,n,i,s,u){if(s){const r=K(e,n,i,u);t.p(r,s)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Nt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function St(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function At(t){const e={};for(const n in t)e[n]=!0;return e}function Ct(t){return t&&z(t.destroy)?t.destroy:w}let j=!1;function it(){j=!0}function st(){j=!1}function rt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,a=(s>0&&e[n[s]].claim_order<=l?s+1:rt(1,s,_=>e[n[_]].claim_order,l))-1;i[c]=n[a]+1;const d=a+1;n[d]=c,s=Math.max(d,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(r[c],a)}}function ot(t,e){if(j){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){j&&!n?ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Ot(){return F(" ")}function Pt(){return F("")}function Tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Q(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Dt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Q(t,i,e[i])}function Lt(t,e){for(const n in e)Q(t,n,e[n])}function at(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,s=!1){_t(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function U(t,e,n,i){return R(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Bt(t,e,n){return U(t,e,n,ut)}function qt(t,e,n){return U(t,e,n,ft)}function dt(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function zt(t){return dt(t," ")}function Ft(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ht(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function It(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Wt(t,e){return new t(e)}let v;function b(t){v=t}function x(){if(!v)throw new Error("Function called outside component initialization");return v}function Gt(t){x().$$.on_mount.push(t)}function Jt(t){x().$$.after_update.push(t)}function Kt(t){x().$$.on_destroy.push(t)}function Qt(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const u=ht(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,u)}),!u.defaultPrevented}return!0}}function Rt(t,e){return x().$$.context.set(t,e),e}function Ut(t){return x().$$.context.get(t)}function Vt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],G=[],A=[],L=[],V=Promise.resolve();let B=!1;function X(){B||(B=!0,V.then(Y))}function Xt(){return X(),V}function q(t){A.push(t)}function Yt(t){L.push(t)}const D=new Set;let S=0;function Y(){const t=v;do{for(;S<$.length;){const e=$[S];S++,b(e),mt(e.$$)}for(b(null),$.length=0,S=0;G.length;)G.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];D.has(n)||(D.add(n),n())}A.length=0}while($.length);for(;L.length;)L.pop()();B=!1,D.clear(),b(t)}function mt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const C=new Set;let g;function Zt(){g={r:0,c:[],p:g}}function te(){g.r||k(g.c),g=g.p}function Z(t,e){t&&t.i&&(C.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ee(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function ne(t,e,n,i,s,u,r,o,c,l,a,d){let _=t.length,m=u.length,h=_;const M={};for(;h--;)M[t[h].key]=h;const E=[],O=new Map,P=new Map;for(h=m;h--;){const f=d(s,u,h),p=n(f);let y=r.get(p);y?i&&y.p(f,e):(y=l(p,f),y.c()),O.set(p,E[h]=y),p in M&&P.set(p,Math.abs(h-M[p]))}const H=new Set,I=new Set;function T(f){Z(f,1),f.m(o,a),r.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=E[m-1],p=t[_-1],y=f.key,N=p.key;f===p?(a=f.first,_--,m--):O.has(N)?!r.has(y)||H.has(y)?T(f):I.has(N)?_--:P.get(y)>P.get(N)?(I.add(y),T(f)):(H.add(N),_--):(c(p,r),_--)}for(;_--;){const f=t[_];O.has(f.key)||c(f,r)}for(;m;)T(E[m-1]);return E}function ie(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],o=e[u];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[u]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function se(t,e,n,i){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,i===void 0&&n(t.$$.ctx[s]))}function re(t){t&&t.c()}function ce(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,n),i||q(()=>{const r=t.$$.on_mount.map(J).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),u.forEach(q)}function gt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&($.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,s,u,r,o=[-1]){const c=v;b(t);const l=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:W(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&s(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),a&&xt(t,d)),_}):[],l.update(),a=!0,k(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){it();const d=at(e.target);l.fragment&&l.fragment.l(d),d.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Z(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),st(),Y()}b(c)}class le{$destroy(){gt(this,1),this.$destroy=w}$on(e,n){if(!z(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{At as $,Xt as A,w as B,wt as C,ot as D,Tt as E,Ct as F,kt as G,Et as H,vt as I,z as J,k as K,Rt as L,G as M,bt as N,tt as O,Dt as P,It as Q,ie as R,le as S,St as T,Nt as U,Vt as V,ft as W,qt as X,Lt as Y,Kt as Z,Mt as _,Ot as a,Qt as a0,ne as a1,ee as a2,se as a3,Yt as a4,Ut as a5,jt as b,zt as c,te as d,Pt as e,Z as f,Zt as g,lt as h,oe as i,Jt as j,ut as k,Bt as l,at as m,Q as n,Gt as o,Ht as p,F as q,dt as r,$t as s,pt as t,Ft as u,Wt as v,re as w,ce as x,yt as y,gt as z};