function H(t){return t.split("-")[0]}function Y(t){return t.split("-")[1]}function N(t){return["top","bottom"].includes(H(t))?"x":"y"}function et(t){return t==="y"?"height":"width"}function ot(t,e,n){let{reference:i,floating:o}=t;const s=i.x+i.width/2-o.width/2,c=i.y+i.height/2-o.height/2,r=N(e),a=et(r),f=i[a]/2-o[a]/2,d=r==="x";let l;switch(H(e)){case"top":l={x:s,y:i.y-o.height};break;case"bottom":l={x:s,y:i.y+i.height};break;case"right":l={x:i.x+i.width,y:c};break;case"left":l={x:i.x-o.width,y:c};break;default:l={x:i.x,y:i.y}}switch(Y(e)){case"start":l[r]-=f*(n&&d?-1:1);break;case"end":l[r]+=f*(n&&d?-1:1)}return l}const Et=async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:c}=n,r=s.filter(Boolean),a=await(c.isRTL==null?void 0:c.isRTL(e));let f=await c.getElementRects({reference:t,floating:e,strategy:o}),{x:d,y:l}=ot(f,i,a),u=i,h={},m=0;for(let g=0;g<r.length;g++){const{name:y,fn:b}=r[g],{x:p,y:v,data:w,reset:x}=await b({x:d,y:l,initialPlacement:i,placement:u,strategy:o,middlewareData:h,rects:f,platform:c,elements:{reference:t,floating:e}});d=p??d,l=v??l,h={...h,[y]:{...h[y],...w}},x&&m<=50&&(m++,typeof x=="object"&&(x.placement&&(u=x.placement),x.rects&&(f=x.rects===!0?await c.getElementRects({reference:t,floating:e,strategy:o}):x.rects),{x:d,y:l}=ot(f,u,a)),g=-1)}return{x:d,y:l,placement:u,strategy:o,middlewareData:h}};function ut(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function j(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function dt(t,e){var n;e===void 0&&(e={});const{x:i,y:o,platform:s,rects:c,elements:r,strategy:a}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:l="floating",altBoundary:u=!1,padding:h=0}=e,m=ut(h),g=r[u?l==="floating"?"reference":"floating":l],y=j(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(g)))==null||n?g:g.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(r.floating)),boundary:f,rootBoundary:d,strategy:a})),b=l==="floating"?{...c.floating,x:i,y:o}:c.reference,p=await(s.getOffsetParent==null?void 0:s.getOffsetParent(r.floating)),v=await(s.isElement==null?void 0:s.isElement(p))&&await(s.getScale==null?void 0:s.getScale(p))||{x:1,y:1},w=j(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:p,strategy:a}):b);return{top:(y.top-w.top+m.top)/v.y,bottom:(w.bottom-y.bottom+m.bottom)/v.y,left:(y.left-w.left+m.left)/v.x,right:(w.right-y.right+m.right)/v.x}}const Rt=Math.min,Tt=Math.max;function Q(t,e,n){return Tt(t,Rt(e,n))}const Bt=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:i=0}=t??{},{x:o,y:s,placement:c,rects:r,platform:a}=e;if(n==null)return{};const f=ut(i),d={x:o,y:s},l=N(c),u=et(l),h=await a.getDimensions(n),m=l==="y"?"top":"left",g=l==="y"?"bottom":"right",y=r.reference[u]+r.reference[l]-d[l]-r.floating[u],b=d[l]-r.reference[l],p=await(a.getOffsetParent==null?void 0:a.getOffsetParent(n));let v=p?l==="y"?p.clientHeight||0:p.clientWidth||0:0;v===0&&(v=r.floating[u]);const w=y/2-b/2,x=f[m],K=v-h[u]-f[g],R=v/2-h[u]/2+w,_=Q(x,R,K),F=Y(c)!=null&&R!=_&&r.reference[u]/2-(R<x?f[m]:f[g])-h[u]/2<0;return{[l]:d[l]-(F?R<x?x-R:K-R:0),data:{[l]:_,centerOffset:R-_}}}}),Lt={left:"right",right:"left",bottom:"top",top:"bottom"};function z(t){return t.replace(/left|right|bottom|top/g,e=>Lt[e])}function Ft(t,e,n){n===void 0&&(n=!1);const i=Y(t),o=N(t),s=et(o);let c=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(c=z(c)),{main:c,cross:z(c)}}const Dt={start:"end",end:"start"};function st(t){return t.replace(/start|end/g,e=>Dt[e])}const Ct=["top","right","bottom","left"];Ct.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);const It=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:o,rects:s,initialPlacement:c,platform:r,elements:a}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:l,fallbackStrategy:u="bestFit",flipAlignment:h=!0,...m}=t,g=H(i),y=l||(g===c||!h?[z(c)]:function(_){const F=z(_);return[st(_),F,st(F)]}(c)),b=[c,...y],p=await dt(e,m),v=[];let w=((n=o.flip)==null?void 0:n.overflows)||[];if(f&&v.push(p[g]),d){const{main:_,cross:F}=Ft(i,s,await(r.isRTL==null?void 0:r.isRTL(a.floating)));v.push(p[_],p[F])}if(w=[...w,{placement:i,overflows:v}],!v.every(_=>_<=0)){var x,K;const _=((x=(K=o.flip)==null?void 0:K.index)!=null?x:0)+1,F=b[_];if(F)return{data:{index:_,overflows:w},reset:{placement:F}};let S="bottom";switch(u){case"bestFit":{var R;const it=(R=w.map(B=>[B,B.overflows.filter(W=>W>0).reduce((W,kt)=>W+kt,0)]).sort((B,W)=>B[1]-W[1])[0])==null?void 0:R[0].placement;it&&(S=it);break}case"initialPlacement":S=c}if(i!==S)return{reset:{placement:S}}}return{}}}},jt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,o=await async function(s,c){const{placement:r,platform:a,elements:f}=s,d=await(a.isRTL==null?void 0:a.isRTL(f.floating)),l=H(r),u=Y(r),h=N(r)==="x",m=["left","top"].includes(l)?-1:1,g=d&&h?-1:1,y=typeof c=="function"?c(s):c;let{mainAxis:b,crossAxis:p,alignmentAxis:v}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...y};return u&&typeof v=="number"&&(p=u==="end"?-1*v:v),h?{x:p*g,y:b*m}:{x:b*m,y:p*g}}(e,t);return{x:n+o.x,y:i+o.y,data:o}}}};function At(t){return t==="x"?"y":"x"}const zt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:s=!0,crossAxis:c=!1,limiter:r={fn:y=>{let{x:b,y:p}=y;return{x:b,y:p}}},...a}=t,f={x:n,y:i},d=await dt(e,a),l=N(H(o)),u=At(l);let h=f[l],m=f[u];if(s){const y=l==="y"?"bottom":"right";h=Q(h+d[l==="y"?"top":"left"],h,h-d[y])}if(c){const y=u==="y"?"bottom":"right";m=Q(m+d[u==="y"?"top":"left"],m,m-d[y])}const g=r.fn({...e,[l]:h,[u]:m});return{...g,data:{x:g.x-n,y:g.y-i}}}}};function k(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){return k(t).getComputedStyle(t)}function A(t){return mt(t)?(t.nodeName||"").toLowerCase():""}let I;function ht(){if(I)return I;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(I=t.brands.map(e=>e.brand+"/"+e.version).join(" "),I):navigator.userAgent}function D(t){return t instanceof k(t).HTMLElement}function E(t){return t instanceof k(t).Element}function mt(t){return t instanceof k(t).Node}function rt(t){return typeof ShadowRoot>"u"?!1:t instanceof k(t).ShadowRoot||t instanceof ShadowRoot}function X(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function Pt(t){return["table","td","th"].includes(A(t))}function Z(t){const e=/firefox/i.test(ht()),n=L(t),i=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!i&&i!=="none"||e&&n.willChange==="filter"||e&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(o=>n.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const s=n.contain;return s!=null&&s.includes(o)})}function gt(){return!/^((?!chrome|android).)*safari/i.test(ht())}function nt(t){return["html","body","#document"].includes(A(t))}const ct=Math.min,$=Math.max,U=Math.round;function yt(t){const e=L(t);let n=parseFloat(e.width),i=parseFloat(e.height);const o=t.offsetWidth,s=t.offsetHeight,c=U(n)!==o||U(i)!==s;return c&&(n=o,i=s),{width:n,height:i,fallback:c}}function pt(t){return E(t)?t:t.contextElement}const vt={x:1,y:1};function O(t){const e=pt(t);if(!D(e))return vt;const n=e.getBoundingClientRect(),{width:i,height:o,fallback:s}=yt(e);let c=(s?U(n.width):n.width)/i,r=(s?U(n.height):n.height)/o;return c&&Number.isFinite(c)||(c=1),r&&Number.isFinite(r)||(r=1),{x:c,y:r}}function P(t,e,n,i){var o,s;e===void 0&&(e=!1),n===void 0&&(n=!1);const c=t.getBoundingClientRect(),r=pt(t);let a=vt;e&&(i?E(i)&&(a=O(i)):a=O(t));const f=r?k(r):window,d=!gt()&&n;let l=(c.left+(d&&((o=f.visualViewport)==null?void 0:o.offsetLeft)||0))/a.x,u=(c.top+(d&&((s=f.visualViewport)==null?void 0:s.offsetTop)||0))/a.y,h=c.width/a.x,m=c.height/a.y;if(r){const g=k(r),y=i&&E(i)?k(i):i;let b=g.frameElement;for(;b&&i&&y!==g;){const p=O(b),v=b.getBoundingClientRect(),w=getComputedStyle(b);v.x+=(b.clientLeft+parseFloat(w.paddingLeft))*p.x,v.y+=(b.clientTop+parseFloat(w.paddingTop))*p.y,l*=p.x,u*=p.y,h*=p.x,m*=p.y,l+=v.x,u+=v.y,b=k(b).frameElement}}return{width:h,height:m,top:u,right:l+h,bottom:u+m,left:l,x:l,y:u}}function C(t){return((mt(t)?t.ownerDocument:t.document)||window.document).documentElement}function q(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function bt(t){return P(C(t)).left+q(t).scrollLeft}function Ot(t,e,n){const i=D(e),o=C(e),s=P(t,!0,n==="fixed",e);let c={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(i||!i&&n!=="fixed")if((A(e)!=="body"||X(o))&&(c=q(e)),D(e)){const a=P(e,!0);r.x=a.x+e.clientLeft,r.y=a.y+e.clientTop}else o&&(r.x=bt(o));return{x:s.left+c.scrollLeft-r.x,y:s.top+c.scrollTop-r.y,width:s.width,height:s.height}}function V(t){if(A(t)==="html")return t;const e=t.assignedSlot||t.parentNode||(rt(t)?t.host:null)||C(t);return rt(e)?e.host:e}function lt(t){return D(t)&&L(t).position!=="fixed"?t.offsetParent:null}function at(t){const e=k(t);let n=lt(t);for(;n&&Pt(n)&&L(n).position==="static";)n=lt(n);return n&&(A(n)==="html"||A(n)==="body"&&L(n).position==="static"&&!Z(n))?e:n||function(i){let o=V(i);for(;D(o)&&!nt(o);){if(Z(o))return o;o=V(o)}return null}(t)||e}function wt(t){const e=V(t);return nt(e)?t.ownerDocument.body:D(e)&&X(e)?e:wt(e)}function M(t,e){var n;e===void 0&&(e=[]);const i=wt(t),o=i===((n=t.ownerDocument)==null?void 0:n.body),s=k(i);return o?e.concat(s,s.visualViewport||[],X(i)?i:[]):e.concat(i,M(i))}function ft(t,e,n){return e==="viewport"?j(function(i,o){const s=k(i),c=C(i),r=s.visualViewport;let a=c.clientWidth,f=c.clientHeight,d=0,l=0;if(r){a=r.width,f=r.height;const u=gt();(u||!u&&o==="fixed")&&(d=r.offsetLeft,l=r.offsetTop)}return{width:a,height:f,x:d,y:l}}(t,n)):E(e)?function(i,o){const s=P(i,!0,o==="fixed"),c=s.top+i.clientTop,r=s.left+i.clientLeft,a=D(i)?O(i):{x:1,y:1},f=i.clientWidth*a.x,d=i.clientHeight*a.y,l=r*a.x,u=c*a.y;return{top:u,left:l,right:l+f,bottom:u+d,x:l,y:u,width:f,height:d}}(e,n):j(function(i){var o;const s=C(i),c=q(i),r=(o=i.ownerDocument)==null?void 0:o.body,a=$(s.scrollWidth,s.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),f=$(s.scrollHeight,s.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let d=-c.scrollLeft+bt(i);const l=-c.scrollTop;return L(r||s).direction==="rtl"&&(d+=$(s.clientWidth,r?r.clientWidth:0)-a),{width:a,height:f,x:d,y:l}}(C(t)))}const Kt={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const s=n==="clippingAncestors"?function(f,d){const l=d.get(f);if(l)return l;let u=M(f).filter(y=>E(y)&&A(y)!=="body"),h=null;const m=L(f).position==="fixed";let g=m?V(f):f;for(;E(g)&&!nt(g);){const y=L(g),b=Z(g);(m?b||h:b||y.position!=="static"||!h||!["absolute","fixed"].includes(h.position))?h=y:u=u.filter(p=>p!==g),g=V(g)}return d.set(f,u),u}(e,this._c):[].concat(n),c=[...s,i],r=c[0],a=c.reduce((f,d)=>{const l=ft(e,d,o);return f.top=$(l.top,f.top),f.right=ct(l.right,f.right),f.bottom=ct(l.bottom,f.bottom),f.left=$(l.left,f.left),f},ft(e,r,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t;const o=D(n),s=C(n);if(n===s)return e;let c={scrollLeft:0,scrollTop:0},r={x:1,y:1};const a={x:0,y:0};if((o||!o&&i!=="fixed")&&((A(n)!=="body"||X(s))&&(c=q(n)),D(n))){const f=P(n);r=O(n),a.x=f.x+n.clientLeft,a.y=f.y+n.clientTop}return{width:e.width*r.x,height:e.height*r.y,x:e.x*r.x-c.scrollLeft*r.x+a.x,y:e.y*r.y-c.scrollTop*r.y+a.y}},isElement:E,getDimensions:function(t){return yt(t)},getOffsetParent:at,getDocumentElement:C,getScale:O,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t;const o=this.getOffsetParent||at,s=this.getDimensions;return{reference:Ot(e,await o(n),i),floating:{x:0,y:0,...await s(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>L(t).direction==="rtl"};function Ut(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:c=!0,animationFrame:r=!1}=i,a=o&&!r,f=a||s?[...E(t)?M(t):t.contextElement?M(t.contextElement):[],...M(e)]:[];f.forEach(h=>{a&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});let d,l=null;if(c){let h=!0;l=new ResizeObserver(()=>{h||n(),h=!1}),E(t)&&!r&&l.observe(t),E(t)||!t.contextElement||r||l.observe(t.contextElement),l.observe(e)}let u=r?P(t):null;return r&&function h(){const m=P(t);!u||m.x===u.x&&m.y===u.y&&m.width===u.width&&m.height===u.height||n(),u=m,d=requestAnimationFrame(h)}(),n(),()=>{var h;f.forEach(m=>{a&&m.removeEventListener("scroll",n),s&&m.removeEventListener("resize",n)}),(h=l)==null||h.disconnect(),l=null,r&&cancelAnimationFrame(d)}}const Yt=(t,e,n)=>{const i=new Map,o={platform:Kt,...n},s={...o.platform,_c:i};return Et(t,e,{...o,platform:s})};/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */const Wt=typeof WeakRef<"u";class xt{constructor(e){Wt&&typeof e=="object"?this._weakRef=new WeakRef(e):this._instance=e}deref(){var e,n,i;let o;return this._weakRef?(o=(e=this._weakRef)===null||e===void 0?void 0:e.deref(),o||delete this._weakRef):(o=this._instance,!((i=(n=o)===null||n===void 0?void 0:n.isDisposed)===null||i===void 0)&&i.call(n)&&delete this._instance),o}}/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */const tt="keyborg:focusin";function $t(t){const e=t.HTMLElement,n=e.prototype.focus;let i=!1;return e.prototype.focus=function(){i=!0},t.document.createElement("button").focus(),e.prototype.focus=n,i}let J=!1;function Mt(t){const e=t;J||(J=$t(e));const n=e.HTMLElement.prototype.focus;if(n.__keyborgNativeFocus)return;e.HTMLElement.prototype.focus=o;const i=e.__keyborgData={focusInHandler:s=>{var c;const r=s.target;if(!r)return;const a=document.createEvent("HTMLEvents");a.initEvent(tt,!0,!0);const f={relatedTarget:s.relatedTarget||void 0};(J||i.lastFocusedProgrammatically)&&(f.isFocusedProgrammatically=r===((c=i.lastFocusedProgrammatically)===null||c===void 0?void 0:c.deref()),i.lastFocusedProgrammatically=void 0),a.details=f,r.dispatchEvent(a)}};e.document.addEventListener("focusin",e.__keyborgData.focusInHandler,!0);function o(){const s=e.__keyborgData;return s&&(s.lastFocusedProgrammatically=new xt(this)),n.apply(this,arguments)}o.__keyborgNativeFocus=n}function Vt(t){const e=t,n=e.HTMLElement.prototype,i=n.focus.__keyborgNativeFocus,o=e.__keyborgData;o&&(e.document.removeEventListener("focusin",o.focusInHandler,!0),delete e.__keyborgData),i&&(n.focus=i)}/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */const Ht=500;let _t=0;class Nt{constructor(){this.__keyborgCoreRefs={},this._isNavigatingWithKeyboard=!1}add(e){const n=e.id;n in this.__keyborgCoreRefs||(this.__keyborgCoreRefs[n]=new xt(e))}remove(e){delete this.__keyborgCoreRefs[e],Object.keys(this.__keyborgCoreRefs).length===0&&(this._isNavigatingWithKeyboard=!1)}setVal(e){if(this._isNavigatingWithKeyboard!==e){this._isNavigatingWithKeyboard=e;for(const n of Object.keys(this.__keyborgCoreRefs)){const o=this.__keyborgCoreRefs[n].deref();o?o.update(e):this.remove(n)}}}getVal(){return this._isNavigatingWithKeyboard}}const T=new Nt;class St{constructor(e,n){this._isMouseUsed=!1,this._onFocusIn=o=>{if(this._isMouseUsed){this._isMouseUsed=!1;return}if(T.getVal())return;const s=o.details;s.relatedTarget&&(s.isFocusedProgrammatically||s.isFocusedProgrammatically===void 0||T.setVal(!0))},this._onMouseDown=o=>{o.buttons===0||o.clientX===0&&o.clientY===0&&o.screenX===0&&o.screenY===0||(this._isMouseUsed=!0,T.setVal(!1))},this._onKeyDown=o=>{var s;const c=T.getVal(),r=o.keyCode,a=this._triggerKeys;!c&&(!a||a.has(r))?T.setVal(!0):c&&(!((s=this._dismissKeys)===null||s===void 0)&&s.has(r))&&this._scheduleDismiss()},this.id="c"+ ++_t,this._win=e;const i=e.document;if(n){const o=n.triggerKeys,s=n.dismissKeys;o!=null&&o.length&&(this._triggerKeys=new Set(o)),s!=null&&s.length&&(this._dismissKeys=new Set(s))}i.addEventListener(tt,this._onFocusIn,!0),i.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("keydown",this._onKeyDown,!0),Mt(e),T.add(this)}dispose(){const e=this._win;if(e){this._dismissTimer&&(e.clearTimeout(this._dismissTimer),this._dismissTimer=void 0),Vt(e);const n=e.document;n.removeEventListener(tt,this._onFocusIn,!0),n.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("keydown",this._onKeyDown,!0),delete this._win,T.remove(this.id)}}isDisposed(){return!!this._win}update(e){var n,i;const o=(i=(n=this._win)===null||n===void 0?void 0:n.__keyborg)===null||i===void 0?void 0:i.refs;if(o)for(const s of Object.keys(o))G.update(o[s],e)}_scheduleDismiss(){const e=this._win;if(e){this._dismissTimer&&(e.clearTimeout(this._dismissTimer),this._dismissTimer=void 0);const n=e.document.activeElement;this._dismissTimer=e.setTimeout(()=>{this._dismissTimer=void 0;const i=e.document.activeElement;n&&i&&n===i&&T.setVal(!1)},Ht)}}}class G{constructor(e,n){this._cb=[],this._id="k"+ ++_t,this._win=e;const i=e.__keyborg;i?(this._core=i.core,i.refs[this._id]=this):(this._core=new St(e,n),e.__keyborg={core:this._core,refs:{[this._id]:this}})}static create(e,n){return new G(e,n)}static dispose(e){e.dispose()}static update(e,n){e._cb.forEach(i=>i(n))}dispose(){var e;const n=(e=this._win)===null||e===void 0?void 0:e.__keyborg;n!=null&&n.refs[this._id]&&(delete n.refs[this._id],Object.keys(n.refs).length===0&&(n.core.dispose(),delete this._win.__keyborg)),this._cb=[],delete this._core,delete this._win}isNavigatingWithKeyboard(){return T.getVal()}subscribe(e){this._cb.push(e)}unsubscribe(e){const n=this._cb.indexOf(e);n>=0&&this._cb.splice(n,1)}setVal(e){T.setVal(e)}}function Xt(t,e){return G.create(t,e)}export{zt as E,jt as T,Yt as V,It as b,Xt as c,Bt as m,Ut as z};