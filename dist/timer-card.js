function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(t){return(e,s)=>void 0!==s?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,s):i(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;null===(n=window.HTMLSlotElement)||void 0===n||n.prototype.assignedElements;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=window,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;let h=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new h(i,t,a)},d=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new h("string"==typeof t?t:t+"",void 0,a))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var u;const p=window,v=p.trustedTypes,f=v?v.emptyScript:"",$=p.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:_},y="finalized";let b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{o?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),s=r.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:g).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:g;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var A;b[y]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==$||$({ReactiveElement:b}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.3");const w=window,E=w.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,k="?"+S,P=`<${k}>`,T=document,U=()=>T.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,O="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,R=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,j=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),K=new WeakMap,W=T.createTreeWalker(T,129,null,!1);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=M;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===M?"!--"===l[1]?o=V:void 0!==l[1]?o=R:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=D):void 0!==l[3]&&(o=D):o===D?">"===l[0]?(o=null!=n?n:M,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?D:'"'===l[3]?j:z):o===j||o===z?o=D:o===V||o===R?o=M:(o=D,n=void 0);const d=o===D&&t[e+1].startsWith("/>")?" ":"";r+=o===M?i+P:h>=0?(s.push(a),i.slice(0,h)+x+i.slice(h)+S+d):i+S+(-2===h?(s.push(void 0),e):d)}return[Z(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=Y(t,e);if(this.el=F.createElement(l,i),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=W.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(x)||e.startsWith(S)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+x).split(S),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?it:"@"===e[1]?st:Q})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),W.nextNode(),a.push({type:2,index:++n});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){var n,r,o,a;if(e===I)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=N(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(i,!0);W.currentNode=n;let r=W.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new J(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new nt(r,this,t)),this._$AV.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=W.nextNode(),o++)}return W.currentNode=T,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,s){var n;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),N(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(Z(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new X(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new F(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new J(this.k(U()),this.k(U()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=G(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==I,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=G(this,s[i+o],e,o),a===I&&(a=this._$AH[o]),r||(r=!N(a)||a!==this._$AH[o]),a===q?t=q:t!==q&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const et=E?E.emptyScript:"";class it extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class st extends Q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=G(this,t,e,0))&&void 0!==i?i:q)===I)return;const s=this._$AH,n=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==q&&(s===q||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=w.litHtmlPolyfillSupport;null==rt||rt(F,J),(null!==(A=w.litHtmlVersions)&&void 0!==A?A:w.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot,at;let lt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new J(e.insertBefore(U(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}};lt.finalized=!0,lt._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:lt});const ht=globalThis.litElementPolyfillSupport;null==ht||ht({LitElement:lt}),(null!==(at=globalThis.litElementVersions)&&void 0!==at?at:globalThis.litElementVersions=[]).push("3.3.3");const ct=c`   
    table {
        width: 100%;
        border-spacing: 0;
        border-collapse: separate;
        padding: 16px;
    }
    table.nopadding {
        padding: 0px;
        width: 100%;
        border-spacing: 0;
        border-collapse: separate;
    }
    th {
        background-color: var(--table-row-alternative-background-color, #eee);
    }
    th, td {
        padding: 5px;
        text-align: left;
    }
    tr {
        color: var(--secondary-text-color);
    }
    tr:nth-child(even) {
        background-color: var(--table-row-alternative-background-color, #eee);
    }
    .text-center {
        text-align: center;
    }
    .width-40 {
        width: 40px;
    }
    .width-50 {
        width: 50px;
    }
    .width-60 {
        width: 60px;
    }
    .hide {
        display: none;
    }
    .strikethrough {
        text-decoration: line-through;
    }
    .italic {
        font-style: italic;
    }
    a {
        text-decoration: none;
        color: var(--secondary-text-color);
    }
    .clickable {
        cursor: pointer;
    }
    ha-icon {
        color: var(--secondary-text-color);
    }
    .transparent {
        background-color: transparent !important;
    }
`;class dt{constructor(t){this.config=t.config,this.hass=t._hass,this.parent=t}translation(t){return!this.config.translations||Object.keys(this.config.translations).indexOf(t)<0?this.defaultTranslations[t]:this.config.translations[t]}getProperties(){return this.parent.properties?.get("cardValues"),{}}getParentCardValues(){const t=this.parent.properties??new Map;return{properties:t.get("cardValues")??{},cardValues:t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),vt(t,e);return!0},ft=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},$t=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),mt(e)}};function gt(t){void 0!==this._$AN?(ft(this),this._$AM=t,$t(this)):this._$AM=t}function _t(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)vt(s[t],!1),ft(s[t]);else null!=s&&(vt(s,!1),ft(s));else vt(this,t)}const mt=t=>{var e,i,s,n;t.type==ut&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=_t),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=gt))};class yt extends pt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),$t(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(vt(this,t),ft(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class At{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise(t=>this.Z=t))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends yt{constructor(){super(...arguments),this._$Cq=new bt(this),this._$CK=new At}render(t,e){return I}update(t,[e,i]){if(this.isConnected||this.disconnected(),e===this._$CX)return;this._$CX=e;let s=0;const{_$Cq:n,_$CK:r}=this;return(async(t,e)=>{for await(const i of t)if(!1===await e(i))return})(e,async t=>{for(;r.get();)await r.get();const o=n.deref();if(void 0!==o){if(o._$CX!==e)return!1;void 0!==i&&(t=i(t,s)),o.commitValue(t,s),s++}return!0}),I}commitValue(t,e){this.setValue(t)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}});class Et extends dt{constructor(t){super(t),this.defaultTranslations={days:"d",hours:"h",minutes:"m",seconds:"s",timer_complete:"Timer Completed",timer_not_started:"Timer Not Started"}}cardSize(){return 6}isValidDate(t){return t instanceof Date&&!isNaN(t.getTime())}getFormattedDate(t){const e=(new Date).getTime(),i=this.config.reverse?e-t.getTime():t.getTime()-e,s=Math.floor(i/864e5),n=Math.floor(i%864e5/36e5),r=Math.floor(i%36e5/6e4),o=Math.floor(i%6e4/1e3);return`${s}${this.translation("days")} ${n}${this.translation("hours")} ${r}${this.translation("minutes")} ${o}${this.translation("seconds")} `}getEntityDate(t){const[e,i]=t.split(" "),[s,n,r]=e.split("-").map(Number),[o,a,l]=i.split(":").map(Number);return new Date(s,n-1,r,o,a,l)}async*runTimer(t,e){if(e){for(;new Date>t;)yield this.getFormattedDate(t),await new Promise(t=>setTimeout(t,1e3));yield this.translation("timer_not_started")}else{for(;t>new Date;)yield this.getFormattedDate(t),await new Promise(t=>setTimeout(t,1e3));yield this.translation("timer_complete")}}render(){let t;if(this.config.date){const e=new Date(this.config.date);if(!this.isValidDate(e))throw new Error("Please define a valid date.");t=e}else if(this.config.entity){const e=new Date(this.getEntityDate(this.config.hass.states[this.config.entity].state));if(!this.isValidDate(e))throw new Error("Please define a valid entity.");t=e}const e=this.runTimer(t,this.config.reverse);return B`<table>
                        <tr>
                            <td class="text-center">
                                <h1>${wt(e)}</h1>
                            </td>
                        </tr>
                    </table>`}}const Ct="timer-card",xt=`${Ct}-editor`;console.info(`%c ${Ct.toUpperCase()} %c 1.1.0`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"timer-card",name:"Timer Card",preview:!1,description:"Display a simple timer"});let St=class extends lt{set properties(t){this._cardValues=t,this.update(t)}get properties(){return this._cardValues}constructor(){super()}static async getConfigElement(){return await Promise.resolve().then(function(){return Ht}),document.createElement(xt)}setConfig(t){(t=>{if(!(""!==t.date&&null!==t.date&&void 0!==t.date||""!==t.entity&&null!==t.entity&&void 0!==t.entity))throw new Error("Please define a date or a entity.")})(t),this.config={...t}}shouldUpdate(t){return((t,e,i)=>{if(i.has("config"))return!0;const s=i.get("_hass");if(s&&t.entity)return s.states[t.entity]!==t.hass.states[t.entity];const n=i.get("card");if(n&&n.parent)return n.parent.properties!==e.properties;const r=i.get("cardValues");return!!r&&r!=e.properties})(this.config,this,t)}set hass(t){this._hass=t,this.config.hass=t,this.card=new Et(this)}static get styles(){return ct}render(){if(!this._hass||!this.config)return B``;try{return B`
                <ha-card elevation="2">
                    ${this.warning?B`<hui-warning>${this.warning}</hui-warning>`:""}
                    ${this.config.title?B`<h1 class="card-header">${this.config.title}</h1>`:""}
                    ${this.card.render()}
                </ha-card>
            `}catch(t){return B`<hui-warning>${t.toString()}</hui-warning>`}}getCardSize(){return this.card.cardSize()}};t([s()],St.prototype,"_hass",void 0),t([s()],St.prototype,"config",void 0),t([s()],St.prototype,"card",void 0),t([s()],St.prototype,"warning",void 0),t([s()],St.prototype,"properties",null),St=t([e(Ct)],St);var kt,Pt,Tt=St;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(kt||(kt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Pt||(Pt={}));var Ut=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};let Nt=class extends lt{setConfig(t){this.config=t}get _title(){return this.config?.title}get _date(){return this.config?.date}get _entity(){return this.config?.entity}get _reverse(){return void 0!==this.config?.reverse&&this.config?.reverse}generateCheckbox(t,e,i){return B`
            <ha-formfield label=${e}>
                <ha-switch
                    .checked=${i}
                    .configValue=${t}
                    @change=${this._valueChanged}
                ></ha-switch>
            </ha-formfield>
        `}render(){return this.hass&&this.config?B`
            <div class="card-config">
              <div class="tabs">
                <div class="tab">
                    <input type="checkbox" id="entity" class="tab-checkbox">
                    <label class="tab-label" for="entity">Basic configuration</label>
                    <div class="tab-content">
                        <paper-input
                            label="Title"
                            .value=${this._title}
                            .placeholder=${this._title}
                            .configValue=${"title"}
                            @value-changed=${this._valueChanged}
                        ></paper-input>
                        <paper-input
                            label="Date"
                            .value=${this._date}
                            .placeholder=${this._date}
                            .configValue=${"date"}
                            @value-changed=${this._valueChanged}
                        ></paper-input>
                        <paper-input
                            label="Entity"
                            .value=${this._entity}
                            .placeholder=${this._entity}
                            .configValue=${"entity"}
                            @value-changed=${this._valueChanged}
                        ></paper-input>
                        <div class="side-by-side">                            
                            ${this.generateCheckbox("reverse","Reverse?",this._reverse)}  
                        </div>
                    </div>
                </div>
              </div>
            </div>
            `:B``}_valueChangedSelect(t){if(!this.config||!this.hass)return;const e=t.detail.value.itemValue,i=t.detail.value.parentElement.configValue;if(i)if(""===t.detail.value.itemValue){const t={...this.config};delete t[i],this.config=t}else this.config={...this.config,[i]:e};Ut(this,"config-changed",{config:this.config})}_valueChanged(t){if(!this.config||!this.hass)return;const e=t.target;if(e.configValue)if(""===e.value){const t={...this.config};delete t[e.configValue],this.config=t}else this.config={...this.config,[e.configValue]:void 0!==e.checked?e.checked:e.value};Ut(this,"config-changed",{config:this.config})}static get styles(){return c`
          ha-switch {
            padding: 16px 6px;
          }
          .side-by-side {
            display: flex;
            flex-flow: row wrap;
          }
          .side-by-side > * {
            padding-right: 8px;
            width: 50%;
            flex-flow: column wrap;
            box-sizing: border-box;
          }
          .side-by-side > *:last-child {
            flex: 1;
            padding-right: 0;
          }
          .suffix {
            margin: 0 8px;
          }
          .group {
            padding: 15px;
            border: 1px solid var(--primary-text-color)
          }
          .tabs {
            overflow: hidden;        
          }
          .tab {
            width: 100%;
            color: var(--primary-text-color);
            overflow: hidden;
          }
          .tab-label {
            display: flex;
            justify-content: space-between;
            padding: 1em 1em 1em 0em;
            border-bottom: 1px solid var(--secondary-text-color);
            font-weight: bold;
            cursor: pointer;
          }
          .tab-label:hover {
            /*background: #1a252f;*/
          }
          .tab-label::after {
            content: "❯";
            width: 1em;
            height: 1em;
            text-align: center;
            transition: all 0.35s;
          }
          .tab-content {
            max-height: 0;
            padding: 0 1em;
            background: var(--secondary-background-color);
            transition: all 0.35s;
          }
          input.tab-checkbox {
            position: absolute;
            opacity: 0;
            z-index: -1;
          }      
          input.tab-checkbox:checked + .tab-label {
            border-color: var(--accent-color);
          }
          input.tab-checkbox:checked + .tab-label::after {
            transform: rotate(90deg);
          }
          input.tab-checkbox:checked ~ .tab-content {
            max-height: 100vh;
            padding: 1em;
          }      
        `}};t([s({attribute:!1})],Nt.prototype,"hass",void 0),t([function(t){return s({...t,state:!0})}()],Nt.prototype,"config",void 0),Nt=t([e(xt)],Nt);var Ht=Object.freeze({__proto__:null,get FormulaOneCardEditor(){return Nt}});export{Tt as default};
