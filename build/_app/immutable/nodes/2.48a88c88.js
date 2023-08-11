import{s as Xt,n as ge,r as cu,i as Jf,f as rt,b as Yf,h as Xf,j as tc}from"../chunks/scheduler.7fe298a2.js";import{S as kr,i as Dr,g as R,h as S,j as z,f as y,k as C,a as M,x as T,y as nc,z as qt,s as q,c as H,A as oo,m as Se,n as be,o as it,e as wi,B as ae,p as ft,t as ie,b as mt,d as X,C as se,D as Zf,r as Yi,u as Xi,v as Zi,w as es,H as em,E as tm,F as nm}from"../chunks/index.81c608d0.js";import{w as lu}from"../chunks/index.b084e48d.js";function Sn(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const rm=!0,qw=Object.freeze(Object.defineProperty({__proto__:null,prerender:rm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},im=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(uu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):im(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new sm;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const om=function(n){const e=uu(n);return hu.encodeByteArray(e,!0)},Ai=function(n){return om(n).replace(/\./g,"")},du=function(n){try{return hu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=()=>am().__FIREBASE_DEFAULTS__,lm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},um=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&du(n[1]);return e&&JSON.parse(e)},zo=()=>{try{return cm()||lm()||um()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fu=n=>{var e,t;return(t=(e=zo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hm=n=>{const e=fu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mu=()=>{var n;return(n=zo())===null||n===void 0?void 0:n.config},pu=n=>{var e;return(e=zo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ai(JSON.stringify(t)),Ai(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function gu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gm(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _u(){try{return typeof indexedDB=="object"}catch{return!1}}function yu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function _m(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ym,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vm(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _t(i,a,r)}}function vm(n,e){return n.replace(Em,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Em=/\{\$([^}]+)}/g;function Im(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ci(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(rc(s)&&rc(o)){if(!Ci(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function rc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tm(n,e){const t=new wm(n,e);return t.subscribe.bind(t)}class wm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Am(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Os),i.error===void 0&&(i.error=Os),i.complete===void 0&&(i.complete=Os);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Am(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Os(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=1e3,Rm=2,Sm=4*60*60*1e3,bm=.5;function ic(n,e=Cm,t=Rm){const r=e*Math.pow(t,n),i=Math.round(bm*r*(Math.random()-.5)*2);return Math.min(Sm,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n){return n&&n._delegate?n._delegate:n}class pt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new dm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dm(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:km(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function km(n){return n===sn?void 0:n}function Dm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Nm={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Mm=Q.INFO,Om={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Lm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Om[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ts{constructor(e){this.name=e,this._logLevel=Mm,this._logHandler=Lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const xm=(n,e)=>e.some(t=>n instanceof t);let sc,oc;function Fm(){return sc||(sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Um(){return oc||(oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vu=new WeakMap,ao=new WeakMap,Eu=new WeakMap,Ls=new WeakMap,qo=new WeakMap;function Bm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ht(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&vu.set(t,n)}).catch(()=>{}),qo.set(e,n),e}function $m(n){if(ao.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ao.set(n,e)}let co={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ao.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Eu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jm(n){co=n(co)}function zm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xs(this),e,...t);return Eu.set(r,e.sort?e.sort():[e]),Ht(r)}:Um().includes(n)?function(...e){return n.apply(xs(this),e),Ht(vu.get(this))}:function(...e){return Ht(n.apply(xs(this),e))}}function qm(n){return typeof n=="function"?zm(n):(n instanceof IDBTransaction&&$m(n),xm(n,Fm())?new Proxy(n,co):n)}function Ht(n){if(n instanceof IDBRequest)return Bm(n);if(Ls.has(n))return Ls.get(n);const e=qm(n);return e!==n&&(Ls.set(n,e),qo.set(e,n)),e}const xs=n=>qo.get(n);function Hm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ht(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ht(o.result),c.oldVersion,c.newVersion,Ht(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gm=["get","getKey","getAll","getAllKeys","count"],Km=["put","add","delete","clear"],Fs=new Map;function ac(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fs.get(e))return Fs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Km.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gm.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Fs.set(e,s),s}jm(n=>({...n,get:(e,t,r)=>ac(e,t)||n.get(e,t,r),has:(e,t)=>!!ac(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lo="@firebase/app",cc="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new ts("@firebase/app"),Jm="@firebase/app-compat",Ym="@firebase/analytics-compat",Xm="@firebase/analytics",Zm="@firebase/app-check-compat",ep="@firebase/app-check",tp="@firebase/auth",np="@firebase/auth-compat",rp="@firebase/database",ip="@firebase/database-compat",sp="@firebase/functions",op="@firebase/functions-compat",ap="@firebase/installations",cp="@firebase/installations-compat",lp="@firebase/messaging",up="@firebase/messaging-compat",hp="@firebase/performance",dp="@firebase/performance-compat",fp="@firebase/remote-config",mp="@firebase/remote-config-compat",pp="@firebase/storage",gp="@firebase/storage-compat",_p="@firebase/firestore",yp="@firebase/firestore-compat",vp="firebase",Ep="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="[DEFAULT]",Ip={[lo]:"fire-core",[Jm]:"fire-core-compat",[Xm]:"fire-analytics",[Ym]:"fire-analytics-compat",[ep]:"fire-app-check",[Zm]:"fire-app-check-compat",[tp]:"fire-auth",[np]:"fire-auth-compat",[rp]:"fire-rtdb",[ip]:"fire-rtdb-compat",[sp]:"fire-fn",[op]:"fire-fn-compat",[ap]:"fire-iid",[cp]:"fire-iid-compat",[lp]:"fire-fcm",[up]:"fire-fcm-compat",[hp]:"fire-perf",[dp]:"fire-perf-compat",[fp]:"fire-rc",[mp]:"fire-rc-compat",[pp]:"fire-gcs",[gp]:"fire-gcs-compat",[_p]:"fire-fst",[yp]:"fire-fst-compat","fire-js":"fire-js",[vp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new Map,ho=new Map;function Tp(n,e){try{n.container.addComponent(e)}catch(t){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ct(n){const e=n.name;if(ho.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;ho.set(e,n);for(const t of Ri.values())Tp(t,n);return!0}function Nr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new En("app","Firebase",wp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=Ep;function Iu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(t||(t=mu()),!t)throw Gt.create("no-options");const s=Ri.get(i);if(s){if(Ci(t,s.options)&&Ci(r,s.config))return s;throw Gt.create("duplicate-app",{appName:i})}const o=new Vm(i);for(const c of ho.values())o.addComponent(c);const a=new Ap(t,r,o);return Ri.set(i,a),a}function Tu(n=uo){const e=Ri.get(n);if(!e&&n===uo&&mu())return Iu();if(!e)throw Gt.create("no-app",{appName:n});return e}function lt(n,e,t){var r;let i=(r=Ip[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}Ct(new pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="firebase-heartbeat-database",Rp=1,hr="firebase-heartbeat-store";let Us=null;function wu(){return Us||(Us=Hm(Cp,Rp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hr)}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),Us}async function Sp(n){try{return await(await wu()).transaction(hr).objectStore(hr).get(Au(n))}catch(e){if(e instanceof _t)fn.warn(e.message);else{const t=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(t.message)}}}async function lc(n,e){try{const r=(await wu()).transaction(hr,"readwrite");await r.objectStore(hr).put(e,Au(n)),await r.done}catch(t){if(t instanceof _t)fn.warn(t.message);else{const r=Gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});fn.warn(r.message)}}}function Au(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=1024,Pp=30*24*60*60*1e3;class kp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=uc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Pp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uc(),{heartbeatsToSend:t,unsentEntries:r}=Dp(this._heartbeatsCache.heartbeats),i=Ai(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function uc(){return new Date().toISOString().substring(0,10)}function Dp(n,e=bp){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),hc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Vp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _u()?yu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return lc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return lc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hc(n){return Ai(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(n){Ct(new pt("platform-logger",e=>new Wm(e),"PRIVATE")),Ct(new pt("heartbeat",e=>new kp(e),"PRIVATE")),lt(lo,cc,n),lt(lo,cc,"esm2017"),lt("fire-js","")}Np("");var Mp="firebase",Op="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Mp,Op,"app");let dr=lu(!1),Si=lu(!1);function Ho(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Cu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lp=Cu,Ru=new En("auth","Firebase",Cu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new ts("@firebase/auth");function xp(n,...e){bi.logLevel<=Q.WARN&&bi.warn(`Auth (${qn}): ${n}`,...e)}function mi(n,...e){bi.logLevel<=Q.ERROR&&bi.error(`Auth (${qn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,...e){throw Go(n,...e)}function Tt(n,...e){return Go(n,...e)}function Su(n,e,t){const r=Object.assign(Object.assign({},Lp()),{[e]:t});return new En("auth","Firebase",r).create(e,{appName:n.name})}function Fp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rt(n,"argument-error"),Su(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Go(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ru.create(n,...e)}function F(n,e,...t){if(!n)throw Go(e,...t)}function kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mi(e),new Error(e)}function Mt(n,e){n||kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Up(){return dc()==="http:"||dc()==="https:"}function dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Up()||gu()||"connection"in navigator)?navigator.onLine:!0}function $p(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=mm()||pm()}get(){return Bp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=new Mr(3e4,6e4);function Pu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Or(n,e,t,r,i={}){return ku(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),bu.fetch()(Du(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ku(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},jp),e);try{const i=new Hp(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ii(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ii(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ii(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Su(n,u,l);Rt(n,u)}}catch(i){if(i instanceof _t)throw i;Rt(n,"network-request-failed",{message:String(i)})}}async function qp(n,e,t,r,i={}){const s=await Or(n,e,t,r,i);return"mfaPendingCredential"in s&&Rt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Du(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ko(n.config,i):`${n.config.apiScheme}://${i}`}class Hp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),zp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Tt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n,e){return Or(n,"POST","/v1/accounts:delete",e)}async function Kp(n,e){return Or(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wp(n,e=!1){const t=st(n),r=await t.getIdToken(e),i=Wo(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ir(Bs(i.auth_time)),issuedAtTime:ir(Bs(i.iat)),expirationTime:ir(Bs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bs(n){return Number(n)*1e3}function Wo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return mi("JWT malformed, contained fewer than 3 sections"),null;try{const i=du(t);return i?JSON.parse(i):(mi("Failed to decode base64 JWT payload"),null)}catch(i){return mi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qp(n){const e=Wo(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&Jp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Jp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await fr(n,Kp(t,{idToken:r}));F(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eg(s.providerUserInfo):[],a=Zp(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Xp(n){const e=st(n);await Pi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eg(n){return n.map(e=>{var{providerId:t}=e,r=Ho(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(n,e){const t=await ku(n,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Du(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await tg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new mr;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ho(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wp(this,e)}reload(){return Xp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Pi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,Gp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=t.createdAt)!==null&&l!==void 0?l:void 0,b=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:P,isAnonymous:U,providerData:I,stsTokenManager:le}=t;F(v&&le,e,"internal-error");const ee=mr.fromJSON(this.name,le);F(typeof v=="string",e,"internal-error"),Ut(h,e.name),Ut(d,e.name),F(typeof P=="boolean",e,"internal-error"),F(typeof U=="boolean",e,"internal-error"),Ut(f,e.name),Ut(E,e.name),Ut(m,e.name),Ut(p,e.name),Ut(w,e.name),Ut(b,e.name);const we=new hn({uid:v,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:U,photoURL:E,phoneNumber:f,tenantId:m,stsTokenManager:ee,createdAt:w,lastLoginAt:b});return I&&Array.isArray(I)&&(we.providerData=I.map(N=>Object.assign({},N))),p&&(we._redirectEventId=p),we}static async _fromIdTokenResponse(e,t,r=!1){const i=new mr;i.updateFromServerResponse(t);const s=new hn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map;function Dt(n){Mt(n instanceof Function,"Expected a class definition");let e=fc.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nu.type="NONE";const mc=Nu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e,t){return`firebase:${n}:${e}:${t}`}class Pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pi(this.userKey,i.apiKey,s),this.fullPersistenceKey=pi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pn(Dt(mc),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Dt(mc);const o=pi(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=hn._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Pn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Pn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fu(e))return"Blackberry";if(Uu(e))return"Webos";if(Qo(e))return"Safari";if((e.includes("chrome/")||Ou(e))&&!e.includes("edge/"))return"Chrome";if(xu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mu(n=je()){return/firefox\//i.test(n)}function Qo(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ou(n=je()){return/crios\//i.test(n)}function Lu(n=je()){return/iemobile/i.test(n)}function xu(n=je()){return/android/i.test(n)}function Fu(n=je()){return/blackberry/i.test(n)}function Uu(n=je()){return/webos/i.test(n)}function ns(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ng(n=je()){var e;return ns(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rg(){return gm()&&document.documentMode===10}function Bu(n=je()){return ns(n)||xu(n)||Uu(n)||Fu(n)||/windows phone/i.test(n)||Lu(n)}function ig(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n,e=[]){let t;switch(n){case"Browser":t=pc(je());break;case"Worker":t=`${pc(je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qn}/${r}`}async function ju(n,e){return Or(n,"GET","/v2/recaptchaConfig",Pu(n,e))}function gc(n){return n!==void 0&&n.enterprise!==void 0}class zu{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function qu(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",sg().appendChild(r)})}function og(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ag="https://www.google.com/recaptcha/enterprise.js?render=",cg="recaptcha-enterprise",lg="NO_RECAPTCHA";class ug{constructor(e){this.type=cg,this.auth=Lr(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ju(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new zu(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;gc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(lg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&gc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qu(ag+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _c(this),this.idTokenSubscription=new _c(this),this.beforeStateQueue=new hg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ru,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$p()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?st(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}async initializeRecaptchaConfig(){const e=await ju(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new zu(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ug(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new En("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$u(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lr(n){return st(n)}class _c{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tm(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n,e){const t=Nr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ci(s,e??{}))return i;Rt(i,"already-initialized")}return t.initialize({options:e})}function mg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pg(n,e,t){const r=Lr(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Hu(e),{host:o,port:a}=gg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_g()}function Hu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gg(n){const e=Hu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yc(o)}}}function yc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _g(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,t){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n,e){return qp(n,"POST","/v1/accounts:signInWithIdp",Pu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="http://localhost";class mn extends Gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ho(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kn(e,t)}buildRequest(){const e={requestUri:yg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends xr{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends xr{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends xr{constructor(){super("twitter.com")}static credential(e,t){return mn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await hn._fromIdTokenResponse(e,r,i),o=vc(r);return new On({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=vc(r);return new On({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function vc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends _t{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ki.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ki(e,t,r,i)}}function Ku(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ki._fromErrorAndOperation(n,s,e,r):s})}async function vg(n,e,t=!1){const r=await fr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return On._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await fr(n,Ku(r,i,e,n),t);F(s.idToken,r,"internal-error");const o=Wo(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(n.uid===a,r,"user-mismatch"),On._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(n,e,t=!1){const r="signIn",i=await Ku(n,r,e),s=await On._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Tg(n,e,t,r){return st(n).onIdTokenChanged(e,t,r)}function wg(n,e,t){return st(n).beforeAuthStateChanged(e,t)}const Di="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Di,"1"),this.storage.removeItem(Di),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){const n=je();return Qo(n)||ns(n)}const Cg=1e3,Rg=10;class Qu extends Wu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ag()&&ig(),this.fallbackToPolling=Bu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Rg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qu.type="LOCAL";const Sg=Qu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends Wu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ju.type="SESSION";const Yu=Ju;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new rs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await bg(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Yo("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function kg(n){wt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function Dg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ng(){return Xu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="firebaseLocalStorageDb",Mg=1,Vi="firebaseLocalStorage",eh="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function is(n,e){return n.transaction([Vi],e?"readwrite":"readonly").objectStore(Vi)}function Og(){const n=indexedDB.deleteDatabase(Zu);return new Fr(n).toPromise()}function mo(){const n=indexedDB.open(Zu,Mg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vi,{keyPath:eh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vi)?e(r):(r.close(),await Og(),e(await mo()))})})}async function Ec(n,e,t){const r=is(n,!0).put({[eh]:e,value:t});return new Fr(r).toPromise()}async function Lg(n,e){const t=is(n,!1).get(e),r=await new Fr(t).toPromise();return r===void 0?null:r.value}function Ic(n,e){const t=is(n,!0).delete(e);return new Fr(t).toPromise()}const xg=800,Fg=3;class th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Fg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rs._getInstance(Ng()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dg(),!this.activeServiceWorker)return;this.sender=new Pg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mo();return await Ec(e,Di,"1"),await Ic(e,Di),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ec(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Lg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ic(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=is(i,!1).getAll();return new Fr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}th.type="LOCAL";const Ug=th;new Mr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n,e){return e?Dt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Bg(n){return Ig(n.auth,new Xo(n),n.bypassAuthState)}function $g(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Eg(t,new Xo(n),n.bypassAuthState)}async function jg(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),vg(t,new Xo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bg;case"linkViaPopup":case"linkViaRedirect":return jg;case"reauthViaPopup":case"reauthViaRedirect":return $g;default:Rt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Mr(2e3,1e4);async function qg(n,e,t){const r=Lr(n);Fp(n,e,Jo);const i=nh(r,t);return new on(r,"signInViaPopup",e,i).executeNotNull()}class on extends rh{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zg.get())};e()}}on.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="pendingRedirect",gi=new Map;class Gg extends rh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=gi.get(this.auth._key());if(!e){try{const r=await Kg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}gi.set(this.auth._key(),e)}return this.bypassAuthState||gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kg(n,e){const t=Jg(e),r=Qg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Wg(n,e){gi.set(n._key(),e)}function Qg(n){return Dt(n._redirectPersistence)}function Jg(n){return pi(Hg,n.config.apiKey,n.name)}async function Yg(n,e,t=!1){const r=Lr(n),i=nh(r,e),o=await new Gg(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=10*60*1e3;class Zg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ih(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Tt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tc(e))}saveEventToCache(e){this.cachedEventUids.add(Tc(e)),this.lastProcessedEventTime=Date.now()}}function Tc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ih({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ih(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(n,e={}){return Or(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r_=/^https?/;async function i_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await t_(n);for(const t of e)try{if(s_(t))return}catch{}Rt(n,"unauthorized-domain")}function s_(n){const e=fo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!r_.test(t))return!1;if(n_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Mr(3e4,6e4);function wc(){const n=wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function a_(n){return new Promise((e,t)=>{var r,i,s;function o(){wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wc(),t(Tt(n,"network-request-failed"))},timeout:o_.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const a=og("iframefcb");return wt()[a]=()=>{gapi.load?o():t(Tt(n,"network-request-failed"))},qu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw _i=null,e})}let _i=null;function c_(n){return _i=_i||a_(n),_i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new Mr(5e3,15e3),u_="__/auth/iframe",h_="emulator/auth/iframe",d_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m_(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ko(e,h_):`https://${n.config.authDomain}/${u_}`,r={apiKey:e.apiKey,appName:n.name,v:qn},i=f_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Vr(r).slice(1)}`}async function p_(n){const e=await c_(n),t=wt().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:m_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(n,"network-request-failed"),a=wt().setTimeout(()=>{s(o)},l_.get());function c(){wt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},__=500,y_=600,v_="_blank",E_="http://localhost";class Ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I_(n,e,t,r=__,i=y_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},g_),{width:r.toString(),height:i.toString(),top:s,left:o}),l=je().toLowerCase();t&&(a=Ou(l)?v_:t),Mu(l)&&(e=e||E_,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,E])=>`${d}${f}=${E},`,"");if(ng(l)&&a!=="_self")return T_(e||"",a),new Ac(null);const h=window.open(e||"",a,u);F(h,n,"popup-blocked");try{h.focus()}catch{}return new Ac(h)}function T_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="__/auth/handler",A_="emulator/auth/handler",C_=encodeURIComponent("fac");async function Cc(n,e,t,r,i,s){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qn,eventId:i};if(e instanceof Jo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Im(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof xr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${C_}=${encodeURIComponent(c)}`:"";return`${R_(n)}?${Vr(a).slice(1)}${l}`}function R_({config:n}){return n.emulator?Ko(n,A_):`https://${n.authDomain}/${w_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="webStorageSupport";class S_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yu,this._completeRedirectFn=Yg,this._overrideRedirectResult=Wg}async _openPopup(e,t,r,i){var s;Mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cc(e,t,r,fo(),i);return I_(e,o,Yo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Cc(e,t,r,fo(),i);return kg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await p_(e),r=new Zg(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($s,{type:$s},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$s];o!==void 0&&t(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=i_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bu()||Qo()||ns()}}const b_=S_;var Rc="@firebase/auth",Sc="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function D_(n){Ct(new pt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$u(n)},l=new dg(r,i,s,c);return mg(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ct(new pt("auth-internal",e=>{const t=Lr(e.getProvider("auth").getImmediate());return(r=>new P_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Rc,Sc,k_(n)),lt(Rc,Sc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=5*60,N_=pu("authIdTokenMaxAge")||V_;let bc=null;const M_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>N_)return;const i=t==null?void 0:t.token;bc!==i&&(bc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zo(n=Tu()){const e=Nr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fg(n,{popupRedirectResolver:b_,persistence:[Ug,Sg,Yu]}),r=pu("authTokenSyncURL");if(r){const s=M_(r);wg(t,s,()=>s(t.currentUser)),Tg(t,o=>s(o))}const i=fu("auth");return i&&pg(t,`http://${i}`),t}D_("Browser");var O_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,ea=ea||{},L=O_||self;function ss(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ur(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function L_(n){return Object.prototype.hasOwnProperty.call(n,js)&&n[js]||(n[js]=++x_)}var js="closure_uid_"+(1e9*Math.random()>>>0),x_=0;function F_(n,e,t){return n.call.apply(n.bind,arguments)}function U_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ue(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ue=F_:Ue=U_,Ue.apply(null,arguments)}function si(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function De(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function nn(){this.s=this.s,this.o=this.o}var B_=0;nn.prototype.s=!1;nn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),B_!=0)&&L_(this)};nn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sh=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ta(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Pc(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ss(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Be(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var $_=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{L.addEventListener("test",()=>{},e),L.removeEventListener("test",()=>{},e)}catch{}return n}();function pr(n){return/^[\s\xa0]*$/.test(n)}function os(){var n=L.navigator;return n&&(n=n.userAgent)?n:""}function yt(n){return os().indexOf(n)!=-1}function na(n){return na[" "](n),n}na[" "]=function(){};function j_(n,e){var t=My;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var z_=yt("Opera"),Ln=yt("Trident")||yt("MSIE"),oh=yt("Edge"),po=oh||Ln,ah=yt("Gecko")&&!(os().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),q_=os().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function ch(){var n=L.document;return n?n.documentMode:void 0}var go;e:{var zs="",qs=function(){var n=os();if(ah)return/rv:([^\);]+)(\)|;)/.exec(n);if(oh)return/Edge\/([\d\.]+)/.exec(n);if(Ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(q_)return/WebKit\/(\S+)/.exec(n);if(z_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(qs&&(zs=qs?qs[1]:""),Ln){var Hs=ch();if(Hs!=null&&Hs>parseFloat(zs)){go=String(Hs);break e}}go=zs}var _o;if(L.document&&Ln){var kc=ch();_o=kc||parseInt(go,10)||void 0}else _o=void 0;var H_=_o;function gr(n,e){if(Be.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(ah){e:{try{na(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:G_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&gr.$.h.call(this)}}De(gr,Be);var G_={2:"touch",3:"pen",4:"mouse"};gr.prototype.h=function(){gr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Br="closure_listenable_"+(1e6*Math.random()|0),K_=0;function W_(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++K_,this.fa=this.ia=!1}function as(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ra(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Q_(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function lh(n){const e={};for(const t in n)e[t]=n[t];return e}const Dc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uh(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Dc.length;s++)t=Dc[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function cs(n){this.src=n,this.g={},this.h=0}cs.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=vo(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new W_(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function yo(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=sh(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(as(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function vo(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var ia="closure_lm_"+(1e6*Math.random()|0),Gs={};function hh(n,e,t,r,i){if(r&&r.once)return fh(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)hh(n,e[s],t,r,i);return null}return t=aa(t),n&&n[Br]?n.O(e,t,Ur(r)?!!r.capture:!!r,i):dh(n,e,t,!1,r,i)}function dh(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Ur(i)?!!i.capture:!!i,a=oa(n);if(a||(n[ia]=a=new cs(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=J_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)$_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(ph(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function J_(){function n(t){return e.call(n.src,n.listener,t)}const e=Y_;return n}function fh(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)fh(n,e[s],t,r,i);return null}return t=aa(t),n&&n[Br]?n.P(e,t,Ur(r)?!!r.capture:!!r,i):dh(n,e,t,!0,r,i)}function mh(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mh(n,e[s],t,r,i);else r=Ur(r)?!!r.capture:!!r,t=aa(t),n&&n[Br]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=vo(s,t,r,i),-1<t&&(as(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=oa(n))&&(e=n.g[e.toString()],n=-1,e&&(n=vo(e,t,r,i)),(t=-1<n?e[n]:null)&&sa(t))}function sa(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Br])yo(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(ph(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=oa(e))?(yo(t,n),t.h==0&&(t.src=null,e[ia]=null)):as(n)}}}function ph(n){return n in Gs?Gs[n]:Gs[n]="on"+n}function Y_(n,e){if(n.fa)n=!0;else{e=new gr(e,this);var t=n.listener,r=n.la||n.src;n.ia&&sa(n),n=t.call(r,e)}return n}function oa(n){return n=n[ia],n instanceof cs?n:null}var Ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function aa(n){return typeof n=="function"?n:(n[Ks]||(n[Ks]=function(e){return n.handleEvent(e)}),n[Ks])}function Pe(){nn.call(this),this.i=new cs(this),this.S=this,this.J=null}De(Pe,nn);Pe.prototype[Br]=!0;Pe.prototype.removeEventListener=function(n,e,t,r){mh(this,n,e,t,r)};function Me(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Be(e,n);else if(e instanceof Be)e.target=e.target||n;else{var i=e;e=new Be(r,n),uh(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=oi(o,r,!0,e)&&i}if(o=e.g=n,i=oi(o,r,!0,e)&&i,i=oi(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=oi(o,r,!1,e)&&i}Pe.prototype.N=function(){if(Pe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)as(t[r]);delete n.g[e],n.h--}}this.J=null};Pe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};Pe.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function oi(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&yo(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var ca=L.JSON.stringify;class X_{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Z_(){var n=la;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class ey{constructor(){this.h=this.g=null}add(e,t){const r=gh.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var gh=new X_(()=>new ty,n=>n.reset());class ty{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ny(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function ry(n){L.setTimeout(()=>{throw n},0)}let _r,yr=!1,la=new ey,_h=()=>{const n=L.Promise.resolve(void 0);_r=()=>{n.then(iy)}};var iy=()=>{for(var n;n=Z_();){try{n.h.call(n.g)}catch(t){ry(t)}var e=gh;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}yr=!1};function ls(n,e){Pe.call(this),this.h=n||1,this.g=e||L,this.j=Ue(this.qb,this),this.l=Date.now()}De(ls,Pe);A=ls.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Me(this,"tick"),this.ga&&(ua(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ua(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}A.N=function(){ls.$.N.call(this),ua(this),delete this.g};function ha(n,e,t){if(typeof n=="function")t&&(n=Ue(n,t));else if(n&&typeof n.handleEvent=="function")n=Ue(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(n,e||0)}function yh(n){n.g=ha(()=>{n.g=null,n.i&&(n.i=!1,yh(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class sy extends nn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yh(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vr(n){nn.call(this),this.h=n,this.g={}}De(vr,nn);var Vc=[];function vh(n,e,t,r){Array.isArray(t)||(t&&(Vc[0]=t.toString()),t=Vc);for(var i=0;i<t.length;i++){var s=hh(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Eh(n){ra(n.g,function(e,t){this.g.hasOwnProperty(t)&&sa(e)},n),n.g={}}vr.prototype.N=function(){vr.$.N.call(this),Eh(this)};vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function us(){this.g=!0}us.prototype.Ea=function(){this.g=!1};function oy(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function ay(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function bn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+ly(n,t)+(r?" "+r:"")})}function cy(n,e){n.info(function(){return"TIMEOUT: "+e})}us.prototype.info=function(){};function ly(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ca(t)}catch{return e}}var In={},Nc=null;function hs(){return Nc=Nc||new Pe}In.Ta="serverreachability";function Ih(n){Be.call(this,In.Ta,n)}De(Ih,Be);function Er(n){const e=hs();Me(e,new Ih(e))}In.STAT_EVENT="statevent";function Th(n,e){Be.call(this,In.STAT_EVENT,n),this.stat=e}De(Th,Be);function Ze(n){const e=hs();Me(e,new Th(e,n))}In.Ua="timingevent";function wh(n,e){Be.call(this,In.Ua,n),this.size=e}De(wh,Be);function $r(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){n()},e)}var ds={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ah={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function da(){}da.prototype.h=null;function Mc(n){return n.h||(n.h=n.i())}function Ch(){}var jr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fa(){Be.call(this,"d")}De(fa,Be);function ma(){Be.call(this,"c")}De(ma,Be);var Eo;function fs(){}De(fs,da);fs.prototype.g=function(){return new XMLHttpRequest};fs.prototype.i=function(){return{}};Eo=new fs;function zr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new vr(this),this.P=uy,n=po?125:void 0,this.V=new ls(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Rh}function Rh(){this.i=null,this.g="",this.h=!1}var uy=45e3,Io={},Ni={};A=zr.prototype;A.setTimeout=function(n){this.P=n};function To(n,e,t){n.L=1,n.v=ps(Ot(e)),n.s=t,n.S=!0,Sh(n,null)}function Sh(n,e){n.G=Date.now(),qr(n),n.A=Ot(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Oh(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Rh,n.g=nd(n.l,t?e:null,!n.s),0<n.O&&(n.M=new sy(Ue(n.Pa,n,n.g),n.O)),vh(n.U,n.g,"readystatechange",n.nb),e=n.I?lh(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Er(),oy(n.j,n.u,n.A,n.m,n.W,n.s)}A.nb=function(n){n=n.target;const e=this.M;e&&Et(n)==3?e.l():this.Pa(n)};A.Pa=function(n){try{if(n==this.g)e:{const u=Et(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||po||this.g&&(this.h.h||this.g.ja()||Fc(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Er(3):Er(2)),ms(this);var t=this.g.da();this.ca=t;t:if(bh(this)){var r=Fc(this.g);n="";var i=r.length,s=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),sr(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,ay(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pr(a)){var l=a;break t}}l=null}if(t=l)bn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wo(this,t);else{this.i=!1,this.o=3,Ze(12),an(this),sr(this);break e}}this.S?(Ph(this,u,o),po&&this.i&&u==3&&(vh(this.U,this.V,"tick",this.mb),this.V.start())):(bn(this.j,this.m,o,null),wo(this,o)),u==4&&an(this),this.i&&!this.J&&(u==4?Xh(this.l,this):(this.i=!1,qr(this)))}else Dy(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),an(this),sr(this)}}}catch{}finally{}};function bh(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Ph(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=hy(n,t),i==Ni){e==4&&(n.o=4,Ze(14),r=!1),bn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Io){n.o=4,Ze(15),bn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else bn(n.j,n.m,i,null),wo(n,i);bh(n)&&i!=Ni&&i!=Io&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ze(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ea(e),e.M=!0,Ze(11))):(bn(n.j,n.m,t,"[Invalid Chunked Response]"),an(n),sr(n))}A.mb=function(){if(this.g){var n=Et(this.g),e=this.g.ja();this.C<e.length&&(ms(this),Ph(this,n,e),this.i&&n!=4&&qr(this))}};function hy(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Ni:(t=Number(e.substring(t,r)),isNaN(t)?Io:(r+=1,r+t>e.length?Ni:(e=e.slice(r,r+t),n.C=r+t,e)))}A.cancel=function(){this.J=!0,an(this)};function qr(n){n.Y=Date.now()+n.P,kh(n,n.P)}function kh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=$r(Ue(n.lb,n),e)}function ms(n){n.B&&(L.clearTimeout(n.B),n.B=null)}A.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(cy(this.j,this.A),this.L!=2&&(Er(),Ze(17)),an(this),this.o=2,sr(this)):kh(this,this.Y-n)};function sr(n){n.l.H==0||n.J||Xh(n.l,n)}function an(n){ms(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,ua(n.V),Eh(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function wo(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Ao(t.i,n))){if(!n.K&&Ao(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Li(t),ys(t);else break e;va(t),Ze(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=$r(Ue(t.ib,t),6e3));if(1>=Fh(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else cn(t,11)}else if((n.K||t.g==n)&&Li(t),!pr(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(pa(s,s.h),s.h=null))}if(r.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,oe(r.I,r.F,m))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=td(r,r.J?r.pa:null,r.Y),o.K){Uh(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ms(a),qr(a)),r.g=o}else Jh(r);0<t.j.length&&vs(t)}else l[0]!="stop"&&l[0]!="close"||cn(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?cn(t,7):ya(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Er(4)}catch{}}function dy(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ss(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function fy(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ss(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Dh(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ss(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=fy(n),r=dy(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function my(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function dn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof dn){this.h=n.h,Mi(this,n.j),this.s=n.s,this.g=n.g,Oi(this,n.m),this.l=n.l;var e=n.i,t=new Ir;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Oc(this,t),this.o=n.o}else n&&(e=String(n).match(Vh))?(this.h=!1,Mi(this,e[1]||"",!0),this.s=Zn(e[2]||""),this.g=Zn(e[3]||"",!0),Oi(this,e[4]),this.l=Zn(e[5]||"",!0),Oc(this,e[6]||"",!0),this.o=Zn(e[7]||"")):(this.h=!1,this.i=new Ir(null,this.h))}dn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(er(e,Lc,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(er(e,Lc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(er(t,t.charAt(0)=="/"?_y:gy,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",er(t,vy)),n.join("")};function Ot(n){return new dn(n)}function Mi(n,e,t){n.j=t?Zn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Oi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Oc(n,e,t){e instanceof Ir?(n.i=e,Ey(n.i,n.h)):(t||(e=er(e,yy)),n.i=new Ir(e,n.h))}function oe(n,e,t){n.i.set(e,t)}function ps(n){return oe(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Zn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function er(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,py),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function py(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Lc=/[#\/\?@]/g,gy=/[#\?:]/g,_y=/[#\?]/g,yy=/[#\?@]/g,vy=/#/g;function Ir(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function rn(n){n.g||(n.g=new Map,n.h=0,n.i&&my(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}A=Ir.prototype;A.add=function(n,e){rn(this),this.i=null,n=Hn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Nh(n,e){rn(n),e=Hn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Mh(n,e){return rn(n),e=Hn(n,e),n.g.has(e)}A.forEach=function(n,e){rn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};A.ta=function(){rn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};A.Z=function(n){rn(this);let e=[];if(typeof n=="string")Mh(this,n)&&(e=e.concat(this.g.get(Hn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};A.set=function(n,e){return rn(this),this.i=null,n=Hn(this,n),Mh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};A.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Oh(n,e,t){Nh(n,e),0<t.length&&(n.i=null,n.g.set(Hn(n,e),ta(t)),n.h+=t.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Hn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Ey(n,e){e&&!n.j&&(rn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Nh(this,r),Oh(this,i,t))},n)),n.j=e}var Iy=class{constructor(n,e){this.g=n,this.map=e}};function Lh(n){this.l=n||Ty,L.PerformanceNavigationTiming?(n=L.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ty=10;function xh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Fh(n){return n.h?1:n.g?n.g.size:0}function Ao(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function pa(n,e){n.g?n.g.add(e):n.h=e}function Uh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Lh.prototype.cancel=function(){if(this.i=Bh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Bh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return ta(n.i)}var wy=class{stringify(n){return L.JSON.stringify(n,void 0)}parse(n){return L.JSON.parse(n,void 0)}};function Ay(){this.g=new wy}function Cy(n,e,t){const r=t||"";try{Dh(n,function(i,s){let o=i;Ur(i)&&(o=ca(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ry(n,e){const t=new us;if(L.Image){const r=new Image;r.onload=si(ai,t,r,"TestLoadImage: loaded",!0,e),r.onerror=si(ai,t,r,"TestLoadImage: error",!1,e),r.onabort=si(ai,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=si(ai,t,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function ai(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Hr(n){this.l=n.fc||null,this.j=n.ob||!1}De(Hr,da);Hr.prototype.g=function(){return new gs(this.l,this.j)};Hr.prototype.i=function(n){return function(){return n}}({});function gs(n,e){Pe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=ga,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(gs,Pe);var ga=0;A=gs.prototype;A.open=function(n,e){if(this.readyState!=ga)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Tr(this)};A.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||L).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=ga};A.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$h(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function $h(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}A.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Gr(this):Tr(this),this.readyState==3&&$h(this)}};A.Za=function(n){this.g&&(this.response=this.responseText=n,Gr(this))};A.Ya=function(n){this.g&&(this.response=n,Gr(this))};A.ka=function(){this.g&&Gr(this)};function Gr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Tr(n)}A.setRequestHeader=function(n,e){this.v.append(n,e)};A.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Tr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Sy=L.JSON.parse;function me(n){Pe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jh,this.L=this.M=!1}De(me,Pe);var jh="",by=/^https?$/i,Py=["POST","PUT"];A=me.prototype;A.Oa=function(n){this.M=n};A.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Eo.g(),this.C=this.u?Mc(this.u):Mc(Eo),this.g.onreadystatechange=Ue(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){xc(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&n instanceof L.FormData,!(0<=sh(Py,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hh(this),0<this.B&&((this.L=ky(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ue(this.ua,this)):this.A=ha(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){xc(this,s)}};function ky(n){return Ln&&typeof n.timeout=="number"&&n.ontimeout!==void 0}A.ua=function(){typeof ea<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function xc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,zh(n),_s(n)}function zh(n){n.F||(n.F=!0,Me(n,"complete"),Me(n,"error"))}A.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Me(this,"complete"),Me(this,"abort"),_s(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_s(this,!0)),me.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?qh(this):this.kb())};A.kb=function(){qh(this)};function qh(n){if(n.h&&typeof ea<"u"&&(!n.C[1]||Et(n)!=4||n.da()!=2)){if(n.v&&Et(n)==4)ha(n.La,0,n);else if(Me(n,"readystatechange"),Et(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Vh)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!by.test(i?i.toLowerCase():"")}t=r}if(t)Me(n,"complete"),Me(n,"success");else{n.m=6;try{var s=2<Et(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",zh(n)}}finally{_s(n)}}}}function _s(n,e){if(n.g){Hh(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Me(n,"ready");try{t.onreadystatechange=r}catch{}}}function Hh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(L.clearTimeout(n.A),n.A=null)}A.isActive=function(){return!!this.g};function Et(n){return n.g?n.g.readyState:0}A.da=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Sy(e)}};function Fc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case jh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Dy(n){const e={};n=(n.g&&2<=Et(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(pr(n[r]))continue;var t=ny(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}Q_(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gh(n){let e="";return ra(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function _a(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Gh(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):oe(n,e,t))}function Yn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Kh(n){this.Ga=0,this.j=[],this.l=new us,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yn("baseRetryDelayMs",5e3,n),this.hb=Yn("retryDelaySeedMs",1e4,n),this.eb=Yn("forwardChannelMaxRetries",2,n),this.xa=Yn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Lh(n&&n.concurrentRequestLimit),this.Ja=new Ay,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=Kh.prototype;A.ra=8;A.H=1;function ya(n){if(Wh(n),n.H==3){var e=n.W++,t=Ot(n.I);if(oe(t,"SID",n.K),oe(t,"RID",e),oe(t,"TYPE","terminate"),Kr(n,t),e=new zr(n,n.l,e),e.L=2,e.v=ps(Ot(t)),t=!1,L.navigator&&L.navigator.sendBeacon)try{t=L.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&L.Image&&(new Image().src=e.v,t=!0),t||(e.g=nd(e.l,null),e.g.ha(e.v)),e.G=Date.now(),qr(e)}ed(n)}function ys(n){n.g&&(Ea(n),n.g.cancel(),n.g=null)}function Wh(n){ys(n),n.u&&(L.clearTimeout(n.u),n.u=null),Li(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&L.clearTimeout(n.m),n.m=null)}function vs(n){if(!xh(n.i)&&!n.m){n.m=!0;var e=n.Na;_r||_h(),yr||(_r(),yr=!0),la.add(e,n),n.C=0}}function Vy(n,e){return Fh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=$r(Ue(n.Na,n,e),Zh(n,n.C)),n.C++,!0)}A.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new zr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=lh(s),uh(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Qh(this,i,e),t=Ot(this.I),oe(t,"RID",n),oe(t,"CVER",22),this.F&&oe(t,"X-HTTP-Session-Id",this.F),Kr(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Gh(s)))+"&"+e:this.o&&_a(t,this.o,s)),pa(this.i,i),this.bb&&oe(t,"TYPE","init"),this.P?(oe(t,"$req",e),oe(t,"SID","null"),i.aa=!0,To(i,t,null)):To(i,t,e),this.H=2}}else this.H==3&&(n?Uc(this,n):this.j.length==0||xh(this.i)||Uc(this))};function Uc(n,e){var t;e?t=e.m:t=n.W++;const r=Ot(n.I);oe(r,"SID",n.K),oe(r,"RID",t),oe(r,"AID",n.V),Kr(n,r),n.o&&n.s&&_a(r,n.o,n.s),t=new zr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Qh(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),pa(n.i,t),To(t,r,e)}function Kr(n,e){n.na&&ra(n.na,function(t,r){oe(e,r,t)}),n.h&&Dh({},function(t,r){oe(e,r,t)})}function Qh(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Ue(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{Cy(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Jh(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;_r||_h(),yr||(_r(),yr=!0),la.add(e,n),n.A=0}}function va(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=$r(Ue(n.Ma,n),Zh(n,n.A)),n.A++,!0)}A.Ma=function(){if(this.u=null,Yh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=$r(Ue(this.jb,this),n)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ze(10),ys(this),Yh(this))};function Ea(n){n.B!=null&&(L.clearTimeout(n.B),n.B=null)}function Yh(n){n.g=new zr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Ot(n.wa);oe(e,"RID","rpc"),oe(e,"SID",n.K),oe(e,"AID",n.V),oe(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&oe(e,"TO",n.qa),oe(e,"TYPE","xmlhttp"),Kr(n,e),n.o&&n.s&&_a(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=ps(Ot(e)),t.s=null,t.S=!0,Sh(t,n)}A.ib=function(){this.v!=null&&(this.v=null,ys(this),va(this),Ze(19))};function Li(n){n.v!=null&&(L.clearTimeout(n.v),n.v=null)}function Xh(n,e){var t=null;if(n.g==e){Li(n),Ea(n),n.g=null;var r=2}else if(Ao(n.i,e))t=e.F,Uh(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=hs(),Me(r,new wh(r,t)),vs(n)}else Jh(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Vy(n,e)||r==2&&va(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:cn(n,5);break;case 4:cn(n,10);break;case 3:cn(n,6);break;default:cn(n,2)}}}function Zh(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function cn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Ue(n.pb,n);t||(t=new dn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Mi(t,"https"),ps(t)),Ry(t.toString(),r)}else Ze(2);n.H=0,n.h&&n.h.za(e),ed(n),Wh(n)}A.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ze(2)):(this.l.info("Failed to ping google.com"),Ze(1))};function ed(n){if(n.H=0,n.ma=[],n.h){const e=Bh(n.i);(e.length!=0||n.j.length!=0)&&(Pc(n.ma,e),Pc(n.ma,n.j),n.i.i.length=0,ta(n.j),n.j.length=0),n.h.ya()}}function td(n,e,t){var r=t instanceof dn?Ot(t):new dn(t);if(r.g!="")e&&(r.g=e+"."+r.g),Oi(r,r.m);else{var i=L.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new dn(null);r&&Mi(s,r),e&&(s.g=e),i&&Oi(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&oe(r,t,e),oe(r,"VER",n.ra),Kr(n,r),r}function nd(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new me(new Hr({ob:!0})):new me(n.va),e.Oa(n.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function rd(){}A=rd.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function xi(){if(Ln&&!(10<=Number(H_)))throw Error("Environmental error: no available transport.")}xi.prototype.g=function(n,e){return new ot(n,e)};function ot(n,e){Pe.call(this),this.g=new Kh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!pr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pr(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Gn(this)}De(ot,Pe);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ze(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=td(n,null,n.Y),vs(n)};ot.prototype.close=function(){ya(this.g)};ot.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ca(n),n=t);e.j.push(new Iy(e.fb++,n)),e.H==3&&vs(e)};ot.prototype.N=function(){this.g.h=null,delete this.j,ya(this.g),delete this.g,ot.$.N.call(this)};function id(n){fa.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}De(id,fa);function sd(){ma.call(this),this.status=1}De(sd,ma);function Gn(n){this.g=n}De(Gn,rd);Gn.prototype.Ba=function(){Me(this.g,"a")};Gn.prototype.Aa=function(n){Me(this.g,new id(n))};Gn.prototype.za=function(n){Me(this.g,new sd)};Gn.prototype.ya=function(){Me(this.g,"b")};function Ny(){this.blockSize=-1}function gt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(gt,Ny);gt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ws(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}gt.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Ws(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ws(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Ws(this,r),i=0;break}}this.h=i,this.i+=e};gt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function Z(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var My={};function Ia(n){return-128<=n&&128>n?j_(n,function(e){return new Z([e|0],0>e?-1:0)}):new Z([n|0],0>n?-1:0)}function It(n){if(isNaN(n)||!isFinite(n))return Dn;if(0>n)return Ne(It(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Co;return new Z(e,0)}function od(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Ne(od(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=It(Math.pow(e,8)),r=Dn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=It(Math.pow(e,s)),r=r.R(s).add(It(o))):(r=r.R(t),r=r.add(It(o)))}return r}var Co=4294967296,Dn=Ia(0),Ro=Ia(1),Bc=Ia(16777216);A=Z.prototype;A.ea=function(){if(at(this))return-Ne(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Co+r)*e,e*=Co}return n};A.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Vt(this))return"0";if(at(this))return"-"+Ne(this).toString(n);for(var e=It(Math.pow(n,6)),t=this,r="";;){var i=Ui(t,e).g;t=Fi(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Vt(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Vt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function at(n){return n.h==-1}A.X=function(n){return n=Fi(this,n),at(n)?-1:Vt(n)?0:1};function Ne(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new Z(t,~n.h).add(Ro)}A.abs=function(){return at(this)?Ne(this):this};A.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new Z(t,t[t.length-1]&-2147483648?-1:0)};function Fi(n,e){return n.add(Ne(e))}A.R=function(n){if(Vt(this)||Vt(n))return Dn;if(at(this))return at(n)?Ne(this).R(Ne(n)):Ne(Ne(this).R(n));if(at(n))return Ne(this.R(Ne(n)));if(0>this.X(Bc)&&0>n.X(Bc))return It(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,ci(t,2*r+2*i),t[2*r+2*i+1]+=s*c,ci(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,ci(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,ci(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new Z(t,0)};function ci(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Xn(n,e){this.g=n,this.h=e}function Ui(n,e){if(Vt(e))throw Error("division by zero");if(Vt(n))return new Xn(Dn,Dn);if(at(n))return e=Ui(Ne(n),e),new Xn(Ne(e.g),Ne(e.h));if(at(e))return e=Ui(n,Ne(e)),new Xn(Ne(e.g),e.h);if(30<n.g.length){if(at(n)||at(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Ro,r=e;0>=r.X(n);)t=$c(t),r=$c(r);var i=An(t,1),s=An(r,1);for(r=An(r,2),t=An(t,2);!Vt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=An(r,1),t=An(t,1)}return e=Fi(n,i.R(e)),new Xn(i,e)}for(i=Dn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=It(t),o=s.R(e);at(o)||0<o.X(n);)t-=r,s=It(t),o=s.R(e);Vt(s)&&(s=Ro),i=i.add(s),n=Fi(n,o)}return new Xn(i,n)}A.gb=function(n){return Ui(this,n).h};A.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new Z(t,this.h&n.h)};A.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new Z(t,this.h|n.h)};A.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new Z(t,this.h^n.h)};function $c(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Z(t,n.h)}function An(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new Z(i,n.h)}xi.prototype.createWebChannel=xi.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;ds.NO_ERROR=0;ds.TIMEOUT=8;ds.HTTP_ERROR=6;Ah.COMPLETE="complete";Ch.EventType=jr;jr.OPEN="a";jr.CLOSE="b";jr.ERROR="c";jr.MESSAGE="d";Pe.prototype.listen=Pe.prototype.O;me.prototype.listenOnce=me.prototype.P;me.prototype.getLastError=me.prototype.Sa;me.prototype.getLastErrorCode=me.prototype.Ia;me.prototype.getStatus=me.prototype.da;me.prototype.getResponseJson=me.prototype.Wa;me.prototype.getResponseText=me.prototype.ja;me.prototype.send=me.prototype.ha;me.prototype.setWithCredentials=me.prototype.Oa;gt.prototype.digest=gt.prototype.l;gt.prototype.reset=gt.prototype.reset;gt.prototype.update=gt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=It;Z.fromString=od;var Oy=function(){return new xi},Ly=function(){return hs()},Qs=ds,xy=Ah,Fy=In,jc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Uy=Hr,li=Ch,By=me,$y=gt,Vn=Z;const zc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new ts("@firebase/firestore");function qc(){return pn.logLevel}function k(n,...e){if(pn.logLevel<=Q.DEBUG){const t=e.map(Ta);pn.debug(`Firestore (${Kn}): ${n}`,...t)}}function Lt(n,...e){if(pn.logLevel<=Q.ERROR){const t=e.map(Ta);pn.error(`Firestore (${Kn}): ${n}`,...t)}}function xn(n,...e){if(pn.logLevel<=Q.WARN){const t=e.map(Ta);pn.warn(`Firestore (${Kn}): ${n}`,...t)}}function Ta(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const e=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: `+n;throw Lt(e),new Error(e)}function ce(n,e){n||O()}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class zy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qy{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new ad(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Le(e)}}class Hy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gy{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Hy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ky{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string"),this.R=t.token,new Ky(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Qy(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function Fn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new D(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Te(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new Te(0,0))}static max(){return new x(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,r){t===void 0?t=0:t>e.length&&O(),r===void 0?r=e.length-t:r>e.length-t&&O(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return wr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends wr{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const Jy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends wr{construct(e,t,r){return new Fe(e,t,r)}static isValidIdentifier(e){return Jy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ue.fromString(e))}static fromName(e){return new V(ue.fromString(e).popFirst(5))}static empty(){return new V(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ue(e.slice()))}}function Yy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(r===1e9?new Te(t+1,0):new Te(t,r));return new Zt(i,V.empty(),e)}function Xy(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Zt(x.min(),V.empty(),-1)}static max(){return new Zt(x.max(),V.empty(),-1)}}function Zy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=V.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==ev)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _?t:_.resolve(t)}catch(t){return _.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_.reject(t)}static resolve(e){return new _((t,r)=>{t(e)})}static reject(e){return new _((t,r)=>{r(e)})}static waitFor(e){return new _((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=_.resolve(!1);for(const r of e)t=t.next(i=>i?_.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new _((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Qr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}wa.ae=-1;function Es(n){return n==null}function Bi(n){return n===0&&1/n==-1/0}function nv(n){return typeof n=="number"&&Number.isInteger(n)&&!Bi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ld(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ui(this.root,e,this.comparator,!0)}}class ui{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gc(this.data.getIterator())}getIteratorFrom(e){return new Gc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class Gc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new dt([])}unionWith(e){let t=new $e(Fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ud("Invalid base64 string: "+s):s}}(e);return new ze(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const rv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(ce(!!n),typeof n=="string"){let e=0;const t=rv.exec(n);if(ce(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gn(n){return typeof n=="string"?ze.fromBase64String(n):ze.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ca(n){const e=n.mapValue.fields.__previous_value__;return Aa(e)?Ca(e):e}function Ar(n){const e=en(n.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,r,i,s,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Cr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Aa(n)?4:sv(n)?9007199254740991:10:O()}function St(n,e){if(n===e)return!0;const t=_n(n);if(t!==_n(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ar(n).isEqual(Ar(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=en(i.timestampValue),a=en(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return gn(i.bytesValue).isEqual(gn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ee(i.doubleValue),a=Ee(s.doubleValue);return o===a?Bi(o)===Bi(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Fn(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Hc(o)!==Hc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!St(o[c],a[c])))return!1;return!0}(n,e);default:return O()}}function Rr(n,e){return(n.values||[]).find(t=>St(t,e))!==void 0}function Un(n,e){if(n===e)return 0;const t=_n(n),r=_n(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ee(s.integerValue||s.doubleValue),c=Ee(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Kc(n.timestampValue,e.timestampValue);case 4:return Kc(Ar(n),Ar(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(s,o){const a=gn(s),c=gn(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=J(a[l],c[l]);if(u!==0)return u}return J(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=J(Ee(s.latitude),Ee(o.latitude));return a!==0?a:J(Ee(s.longitude),Ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Un(a[l],c[l]);if(u)return u}return J(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===hi.mapValue&&o===hi.mapValue)return 0;if(s===hi.mapValue)return 1;if(o===hi.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=J(c[h],u[h]);if(d!==0)return d;const f=Un(a[c[h]],l[u[h]]);if(f!==0)return f}return J(c.length,u.length)}(n.mapValue,e.mapValue);default:throw O()}}function Kc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=en(n),r=en(e),i=J(t.seconds,r.seconds);return i!==0?i:J(t.nanos,r.nanos)}function Bn(n){return So(n)}function So(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=en(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return gn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return V.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=So(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${So(t.fields[o])}`;return i+"}"}(n.mapValue):O()}function bo(n){return!!n&&"integerValue"in n}function Ra(n){return!!n&&"arrayValue"in n}function Wc(n){return!!n&&"nullValue"in n}function Qc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yi(n){return!!n&&"mapValue"in n}function or(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=or(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=or(n.arrayValue.values[t]);return e}return Object.assign({},n)}function sv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!yi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=or(t)}setAll(e){let t=Fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=or(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());yi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];yi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Wn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(or(this.value))}}function hd(n){const e=[];return Wn(n.fields,(t,r)=>{const i=new Fe([t]);if(yi(r)){const s=hd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,x.min(),x.min(),x.min(),ct.empty(),0)}static newFoundDocument(e,t,r,i){return new xe(e,1,t,x.min(),r,i,0)}static newNoDocument(e,t){return new xe(e,2,t,x.min(),x.min(),ct.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,x.min(),x.min(),ct.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t){this.position=e,this.inclusive=t}}function Jc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),t.key):r=Un(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t="asc"){this.field=e,this.dir=t}}function ov(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{}class Ie extends dd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cv(e,t,r):t==="array-contains"?new hv(e,r):t==="in"?new dv(e,r):t==="not-in"?new fv(e,r):t==="array-contains-any"?new mv(e,r):new Ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new lv(e,r):new uv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Un(t,this.value)):t!==null&&_n(this.value)===_n(t)&&this.matchesComparison(Un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bt extends dd{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new bt(e,t)}matches(e){return fd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function fd(n){return n.op==="and"}function md(n){return av(n)&&fd(n)}function av(n){for(const e of n.filters)if(e instanceof bt)return!1;return!0}function Po(n){if(n instanceof Ie)return n.field.canonicalString()+n.op.toString()+Bn(n.value);if(md(n))return n.filters.map(e=>Po(e)).join(",");{const e=n.filters.map(t=>Po(t)).join(",");return`${n.op}(${e})`}}function pd(n,e){return n instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.field.isEqual(i.field)&&St(r.value,i.value)}(n,e):n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&pd(o,i.filters[a]),!0):!1}(n,e):void O()}function gd(n){return n instanceof Ie?function(t){return`${t.field.canonicalString()} ${t.op} ${Bn(t.value)}`}(n):n instanceof bt?function(t){return t.op.toString()+" {"+t.getFilters().map(gd).join(" ,")+"}"}(n):"Filter"}class cv extends Ie{constructor(e,t,r){super(e,t,r),this.key=V.fromName(r.referenceValue)}matches(e){const t=V.comparator(e.key,this.key);return this.matchesComparison(t)}}class lv extends Ie{constructor(e,t){super(e,"in",t),this.keys=_d("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uv extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=_d("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function _d(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>V.fromName(r.referenceValue))}class hv extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ra(t)&&Rr(t.arrayValue,this.value)}}class dv extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Rr(this.value.arrayValue,t)}}class fv extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Rr(this.value.arrayValue,t)}}class mv extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Rr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Xc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new pv(n,e,t,r,i,s,o)}function Sa(n){const e=$(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Po(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Es(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Bn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Bn(r)).join(",")),e.he=t}return e.he}function ba(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ov(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yc(n.startAt,e.startAt)&&Yc(n.endAt,e.endAt)}function ko(n){return V.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function gv(n,e,t,r,i,s,o,a){return new Is(n,e,t,r,i,s,o,a)}function Ts(n){return new Is(n)}function Zc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _v(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function yv(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function vv(n){return n.collectionGroup!==null}function Nn(n){const e=$(n);if(e.Pe===null){e.Pe=[];const t=yv(e),r=_v(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new ar(t)),e.Pe.push(new ar(Fe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ar(Fe.keyField(),s))}}}return e.Pe}function xt(n){const e=$(n);if(!e.Ie)if(e.limitType==="F")e.Ie=Xc(e.path,e.collectionGroup,Nn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Nn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new ar(s.field,o))}const r=e.endAt?new $i(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new $i(e.startAt.position,e.startAt.inclusive):null;e.Ie=Xc(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.Ie}function Do(n,e,t){return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ws(n,e){return ba(xt(n),xt(e))&&n.limitType===e.limitType}function yd(n){return`${Sa(xt(n))}|lt:${n.limitType}`}function Vo(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>gd(i)).join(", ")}]`),Es(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Bn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Bn(i)).join(",")),`Target(${r})`}(xt(n))}; limitType=${n.limitType})`}function As(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Nn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=Jc(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Nn(r),i)||r.endAt&&!function(o,a,c){const l=Jc(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Nn(r),i))}(n,e)}function Ev(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vd(n){return(e,t)=>{let r=!1;for(const i of Nn(n)){const s=Iv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Iv(n,e,t){const r=n.field.isKeyField()?V.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?Un(c,l):O()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ld(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new de(V.comparator);function Ft(){return Tv}const Ed=new de(V.comparator);function tr(...n){let e=Ed;for(const t of n)e=e.insert(t.key,t);return e}function Id(n){let e=Ed;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ln(){return cr()}function Td(){return cr()}function cr(){return new Qn(n=>n.toString(),(n,e)=>n.isEqual(e))}const wv=new de(V.comparator),Av=new $e(V.comparator);function G(...n){let e=Av;for(const t of n)e=e.add(t);return e}const Cv=new $e(J);function Rv(){return Cv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function Ad(n){return{integerValue:""+n}}function Sv(n,e){return nv(e)?Ad(e):wd(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this._=void 0}}function bv(n,e,t){return n instanceof ji?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Aa(s)&&(s=Ca(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Sr?Rd(n,e):n instanceof br?Sd(n,e):function(i,s){const o=Cd(i,s),a=el(o)+el(i.Te);return bo(o)&&bo(i.Te)?Ad(a):wd(i.serializer,a)}(n,e)}function Pv(n,e,t){return n instanceof Sr?Rd(n,e):n instanceof br?Sd(n,e):t}function Cd(n,e){return n instanceof zi?function(r){return bo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ji extends Cs{}class Sr extends Cs{constructor(e){super(),this.elements=e}}function Rd(n,e){const t=bd(e);for(const r of n.elements)t.some(i=>St(i,r))||t.push(r);return{arrayValue:{values:t}}}class br extends Cs{constructor(e){super(),this.elements=e}}function Sd(n,e){let t=bd(e);for(const r of n.elements)t=t.filter(i=>!St(i,r));return{arrayValue:{values:t}}}class zi extends Cs{constructor(e,t){super(),this.serializer=e,this.Te=t}}function el(n){return Ee(n.integerValue||n.doubleValue)}function bd(n){return Ra(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function kv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Sr&&i instanceof Sr||r instanceof br&&i instanceof br?Fn(r.elements,i.elements,St):r instanceof zi&&i instanceof zi?St(r.Te,i.Te):r instanceof ji&&i instanceof ji}(n.transform,e.transform)}class Dv{constructor(e,t){this.version=e,this.transformResults=t}}class Nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rs{}function Pd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dd(n.key,Nt.none()):new Jr(n.key,n.data,Nt.none());{const t=n.data,r=ct.empty();let i=new $e(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Tn(n.key,r,new dt(i.toArray()),Nt.none())}}function Vv(n,e,t){n instanceof Jr?function(i,s,o){const a=i.value.clone(),c=nl(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Tn?function(i,s,o){if(!vi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=nl(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(kd(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function lr(n,e,t,r){return n instanceof Jr?function(s,o,a,c){if(!vi(s.precondition,o))return a;const l=s.value.clone(),u=rl(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof Tn?function(s,o,a,c){if(!vi(s.precondition,o))return a;const l=rl(s.fieldTransforms,c,o),u=o.data;return u.setAll(kd(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return vi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Nv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Cd(r.transform,i||null);s!=null&&(t===null&&(t=ct.empty()),t.set(r.field,s))}return t||null}function tl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fn(r,i,(s,o)=>kv(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Jr extends Rs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tn extends Rs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function nl(n,e,t){const r=new Map;ce(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Pv(o,a,t[i]))}return r}function rl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,bv(s,o,e))}return r}class Dd extends Rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mv extends Rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Vv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Td();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Pd(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&Fn(this.mutations,e.mutations,(t,r)=>tl(t,r))&&Fn(this.baseMutations,e.baseMutations,(t,r)=>tl(t,r))}}class Pa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ce(e.mutations.length===r.length);let i=function(){return wv}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pa(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,K;function Fv(n){switch(n){default:return O();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Vd(n){if(n===void 0)return Lt("GRPC error has no .code"),g.UNKNOWN;switch(n){case ve.OK:return g.OK;case ve.CANCELLED:return g.CANCELLED;case ve.UNKNOWN:return g.UNKNOWN;case ve.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case ve.INTERNAL:return g.INTERNAL;case ve.UNAVAILABLE:return g.UNAVAILABLE;case ve.UNAUTHENTICATED:return g.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case ve.NOT_FOUND:return g.NOT_FOUND;case ve.ALREADY_EXISTS:return g.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return g.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case ve.ABORTED:return g.ABORTED;case ve.OUT_OF_RANGE:return g.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return g.UNIMPLEMENTED;case ve.DATA_LOSS:return g.DATA_LOSS;default:return O()}}(K=ve||(ve={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return di}static getOrCreateInstance(){return di===null&&(di=new ka),di}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let di=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new Vn([4294967295,4294967295],0);function il(n){const e=Uv().encode(n),t=new $y;return t.update(e),new Uint8Array(t.digest())}function sl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vn([t,r],0),new Vn([i,s],0)]}class Da{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nr(`Invalid padding: ${t}`);if(r<0)throw new nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new nr(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Vn.fromNumber(this.de)}Re(e,t,r){let i=e.add(t.multiply(Vn.fromNumber(r)));return i.compare(Bv)===1&&(i=new Vn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=il(e),[r,i]=sl(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Da(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=il(e),[r,i]=sl(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ss(x.min(),i,new de(J),Ft(),G())}}class Yr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Yr(r,t,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,r,i){this.fe=e,this.removedTargetIds=t,this.key=r,this.ge=i}}class Nd{constructor(e,t){this.targetId=e,this.pe=t}}class Md{constructor(e,t,r=ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ol{constructor(){this.ye=0,this.we=cl(),this.Se=ze.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=G(),t=G(),r=G();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:O()}}),new Yr(this.Se,this.be,e,t,r)}xe(){this.De=!1,this.we=cl()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class $v{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Ft(),this.$e=al(),this.Ue=new de(J)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Fe(e.resumeToken));break;default:O()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){var t,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(ko(a))if(s===0){const c=new V(a.path);this.ze(i,c,xe.newNoDocument(c,x.min()))}else ce(s===1);else{const c=this.et(i);if(c!==s){const l=this.tt(e,c);if(l.status!==0){this.Ye(i);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(t=ka.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,f,E){var m,p,w,b,v,P;const U={localCacheCount:f,existenceFilterCount:E.count},I=E.unchangedNames;return I&&(U.bloomFilter={applied:h===0,hashCount:(m=I==null?void 0:I.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(b=(w=(p=I==null?void 0:I.bits)===null||p===void 0?void 0:p.bitmap)===null||w===void 0?void 0:w.length)!==null&&b!==void 0?b:0,padding:(P=(v=I==null?void 0:I.bits)===null||v===void 0?void 0:v.padding)!==null&&P!==void 0?P:0},d&&(U.bloomFilter.mightContain=d)),U}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,t){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=gn(s).toUint8Array()}catch(h){if(h instanceof ud)return xn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new Da(c,o,a)}catch(h){return xn(h instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return l.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return l.de===0?{status:1}:{status:i===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&ko(a.target)){const c=new V(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,xe.newNoDocument(c,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let r=G();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Ss(e,t,this.Ue,this.Ke,r);return this.Ke=Ft(),this.$e=al(),this.Ue=new de(J),i}Ge(e,t){if(!this.Je(e))return;const r=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,r),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,t)?i.Oe(t,1):i.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),r&&(this.Ke=this.Ke.insert(t,r))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new ol,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new $e(J),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||k("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new ol),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function al(){return new de(V.comparator)}function cl(){return new de(V.comparator)}const jv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qv=(()=>({and:"AND",or:"OR"}))();class Hv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function No(n,e){return n.useProto3Json||Es(e)?e:{value:e}}function qi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Od(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Gv(n,e){return qi(n,e.toTimestamp())}function At(n){return ce(!!n),x.fromTimestamp(function(t){const r=en(t);return new Te(r.seconds,r.nanos)}(n))}function Va(n,e){return function(r){return new ue(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Ld(n){const e=ue.fromString(n);return ce(Bd(e)),e}function Mo(n,e){return Va(n.databaseId,e.path)}function Js(n,e){const t=Ld(e);if(t.get(1)!==n.databaseId.projectId)throw new D(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new V(xd(t))}function Oo(n,e){return Va(n.databaseId,e)}function Kv(n){const e=Ld(n);return e.length===4?ue.emptyPath():xd(e)}function Lo(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xd(n){return ce(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ll(n,e,t){return{name:Mo(n,e),fields:t.value.mapValue.fields}}function Wv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ce(u===void 0||typeof u=="string"),ze.fromBase64String(u||"")):(ce(u===void 0||u instanceof Uint8Array),ze.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?g.UNKNOWN:Vd(l.code);return new D(u,l.message||"")}(o);t=new Md(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Js(n,r.document.name),s=At(r.document.updateTime),o=r.document.createTime?At(r.document.createTime):x.min(),a=new ct({mapValue:{fields:r.document.fields}}),c=xe.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];t=new Ei(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Js(n,r.document),s=r.readTime?At(r.readTime):x.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Ei([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Js(n,r.document),s=r.removedTargetIds||[];t=new Ei([],s,i,null)}else{if(!("filter"in e))return O();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new xv(i,s),a=r.targetId;t=new Nd(a,o)}}return t}function Qv(n,e){let t;if(e instanceof Jr)t={update:ll(n,e.key,e.value)};else if(e instanceof Dd)t={delete:Mo(n,e.key)};else if(e instanceof Tn)t={update:ll(n,e.key,e.data),updateMask:iE(e.fieldMask)};else{if(!(e instanceof Mv))return O();t={verify:Mo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ji)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Sr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof br)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw O()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Gv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:O()}(n,e.precondition)),t}function Jv(n,e){return n&&n.length>0?(ce(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?At(i.updateTime):At(s);return o.isEqual(x.min())&&(o=At(s)),new Dv(o,i.transformResults||[])}(t,e))):[]}function Yv(n,e){return{documents:[Oo(n,e.path)]}}function Xv(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Oo(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Oo(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Ud(bt.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Cn(h.field),direction:tE(h.dir)}}(l))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=No(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Zv(n){let e=Kv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ce(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(h){const d=Fd(h);return d instanceof bt&&md(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(E){return new ar(Rn(E.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Es(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new $i(f,d)}(t.startAt));let l=null;return t.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new $i(f,d)}(t.endAt)),gv(e,i,o,s,a,"F",c,l)}function eE(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Rn(t.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Rn(t.unaryFilter.field);return Ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rn(t.unaryFilter.field);return Ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rn(t.unaryFilter.field);return Ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(t){return Ie.create(Rn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return bt.create(t.compositeFilter.filters.map(r=>Fd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))}(n):O()}function tE(n){return jv[n]}function nE(n){return zv[n]}function rE(n){return qv[n]}function Cn(n){return{fieldPath:n.canonicalString()}}function Rn(n){return Fe.fromServerFormat(n.fieldPath)}function Ud(n){return n instanceof Ie?function(t){if(t.op==="=="){if(Qc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NAN"}};if(Wc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NAN"}};if(Wc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(t.field),op:nE(t.op),value:t.value}}}(n):n instanceof bt?function(t){const r=t.getFilters().map(i=>Ud(i));return r.length===1?r[0]:{compositeFilter:{op:rE(t.op),filters:r}}}(n):O()}function iE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,r,i,s=x.min(),o=x.min(),a=ze.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.ct=e}}function oE(n){const e=Zv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Do(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.sn=new cE}addToCollectionParentIndex(e,t){return this.sn.add(t),_.resolve()}getCollectionParents(e,t){return _.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return _.resolve()}deleteFieldIndex(e,t){return _.resolve()}getDocumentsMatchingTarget(e,t){return _.resolve(null)}getIndexType(e,t){return _.resolve(0)}getFieldIndexes(e,t){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,t){return _.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,t){return _.resolve(Zt.min())}updateCollectionGroup(e,t,r){return _.resolve()}updateIndexEntries(e,t){return _.resolve()}}class cE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new $e(ue.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new $n(0)}static On(){return new $n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.changes=new Qn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?_.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&lr(r.mutation,i,dt.empty(),Te.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const i=ln();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=tr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ln();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ft();const o=cr(),a=function(){return cr()}();return t.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Tn)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),lr(u.mutation,l,u.mutation.getFieldMask(),Te.now())):o.set(l.key,dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new uE(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=cr();let i=new de((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=r.get(c)||dt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||G()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Td();u.forEach(d=>{if(!s.has(d)){const f=Pd(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return V.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):_.resolve(ln());let a=-1,c=s;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:Id(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new V(t)).next(r=>{let i=tr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=tr();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const c=function(u,h){return new Is(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,xe.newInvalidDocument(l)))});let o=tr();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&lr(l.mutation,c,dt.empty(),Te.now()),As(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return _.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(i){return{id:i.id,version:i.version,createTime:At(i.createTime)}}(t)),_.resolve()}getNamedQuery(e,t){return _.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(i){return{name:i.name,query:oE(i.bundledQuery),readTime:At(i.readTime)}}(t)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.overlays=new de(V.comparator),this.cr=new Map}getOverlay(e,t){return _.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ln();return _.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),_.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),_.resolve()}getOverlaysForCollection(e,t,r){const i=ln(),s=t.length+1,o=new V(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return _.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new de((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=ln(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ln(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return _.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Lv(t,r));let s=this.cr.get(t);s===void 0&&(s=G(),this.cr.set(t,s)),this.cr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.lr=new $e(Re.hr),this.Pr=new $e(Re.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const r=new Re(e,t);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Er(new Re(e,t))}dr(e,t){e.forEach(r=>this.removeReference(r,t))}Ar(e){const t=new V(new ue([])),r=new Re(t,e),i=new Re(t,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new V(new ue([])),r=new Re(t,e),i=new Re(t,e+1);let s=G();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Re(e,0),r=this.lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return V.comparator(e.key,t.key)||J(e.mr,t.mr)}static Ir(e,t){return J(e.mr,t.mr)||V.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new $e(Re.hr)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ov(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Re(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,t){return _.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.wr(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Re(t,0),i=new Re(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new $e(J);return t.forEach(i=>{const s=new Re(i,0),o=new Re(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),_.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Re(new V(s),0);let a=new $e(J);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.mr)),!0)},o),_.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ce(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return _.forEach(t.mutations,i=>{const s=new Re(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,t){const r=new Re(t,0),i=this.pr.firstAfterOrEqual(r);return _.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.Dr=e,this.docs=function(){return new de(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return _.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=Ft();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ft();const o=t.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Zy(Xy(u),r)<=0||(i.has(u.key)||As(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,t,r,i){O()}vr(e,t){return _.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new gE(this)}getSize(e){return _.resolve(this.size)}}class gE extends lE{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),_.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.persistence=e,this.Cr=new Qn(t=>Sa(t),ba),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Na,this.targetCount=0,this.Or=$n.xn()}forEachTarget(e,t){return this.Cr.forEach((r,i)=>t(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fr&&(this.Fr=t),_.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,_.resolve()}updateTargetData(e,t){return this.Ln(t),_.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cr.get(t)||null;return _.resolve(r)}addMatchingKeys(e,t,r){return this.Mr.Tr(t,r),_.resolve()}removeMatchingKeys(e,t,r){this.Mr.dr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),_.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Mr.Vr(t);return _.resolve(r)}containsKey(e,t){return _.resolve(this.Mr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t){this.Nr={},this.overlays={},this.Br=new wa(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new _E(this),this.indexManager=new aE,this.remoteDocumentCache=function(i){return new pE(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new sE(t),this.Qr=new dE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Nr[e.toKey()];return r||(r=new mE(t,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,r){k("MemoryPersistence","Starting transaction:",e);const i=new vE(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,t){return _.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,t)))}}class vE extends tv{constructor(e){super(),this.currentSequenceNumber=e}}class Ma{constructor(e){this.persistence=e,this.Wr=new Na,this.Gr=null}static zr(e){return new Ma(e)}get jr(){if(this.Gr)return this.Gr;throw O()}addReference(e,t,r){return this.Wr.addReference(r,t),this.jr.delete(r.toString()),_.resolve()}removeReference(e,t,r){return this.Wr.removeReference(r,t),this.jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),_.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.jr,r=>{const i=V.fromPath(r);return this.Hr(e,i).next(s=>{s||t.removeEntry(i,x.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(r=>{r?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return _.or([()=>_.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Li=r,this.ki=i}static qi(e,t){let r=G(),i=G();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Oa(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.$i(e,t).next(s=>s||this.Ui(e,t,i,r)).next(s=>s||this.Wi(e,t))}$i(e,t){if(Zc(t))return _.resolve(null);let r=xt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Do(t,null,"F"),r=xt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=G(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Gi(t,a);return this.zi(t,l,o,c.readTime)?this.$i(e,Do(t,null,"F")):this.ji(e,l,t,c)}))})))}Ui(e,t,r,i){return Zc(t)||i.isEqual(x.min())?this.Wi(e,t):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,r,i)?this.Wi(e,t):(qc()<=Q.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vo(t)),this.ji(e,o,t,Yy(i,-1)))})}Gi(e,t){let r=new $e(vd(e));return t.forEach((i,s)=>{As(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,t){return qc()<=Q.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Vo(t)),this.Ki.getDocumentsMatchingQuery(e,t,Zt.min())}ji(e,t,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new de(J),this.Yi=new Qn(s=>Sa(s),ba),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hE(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function TE(n,e,t,r){return new IE(n,e,t,r)}async function $d(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.es(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=G();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function wE(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=_.resolve();return d.forEach(E=>{f=f.next(()=>u.getEntry(c,E)).next(m=>{const p=l.docVersions.get(E);ce(p!==null),m.version.compareTo(p)<0&&(h.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=G();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function jd(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function AE(n,e){const t=$(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ze.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(m,p,w){return m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(t.kr.updateTargetData(s,f))});let c=Ft(),l=G();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(CE(s,o,e.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(x.min())){const u=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(t.Ji=i,s))}function CE(n,e,t){let r=G(),i=G();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ft();return t.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:i}})}function RE(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function SE(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.kr.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):t.kr.allocateTargetId(r).next(o=>(i=new zt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function xo(n,e,t){const r=$(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qr(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function ul(n,e,t){const r=$(n);let i=x.min(),s=G();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=$(c),d=h.Yi.get(u);return d!==void 0?_.resolve(h.Ji.get(d)):h.kr.getTargetData(l,u)}(r,o,xt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:x.min(),t?s:G())).next(a=>(bE(r,Ev(e),a),{documents:a,ss:s})))}function bE(n,e,t){let r=n.Zi.get(e)||x.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(e,r)}class hl{constructor(){this.activeTargetIds=Rv()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PE{constructor(){this.Hs=new hl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,r){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new hl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi=null;function Ys(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="WebChannelConnection";class NE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http";this.To=r+"://"+t.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(t,r,i,s,o){const a=Ys(),c=this.Vo(t,r);k("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const l={};return this.mo(l,s,o),this.fo(t,c,l,i).then(u=>(k("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw xn("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}po(t,r,i,s,o,a){return this.Ro(t,r,i,s,o)}mo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Vo(t,r){const i=DE[t];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,t,r,i){const s=Ys();return new Promise((o,a)=>{const c=new By;c.setWithCredentials(!0),c.listenOnce(xy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qs.NO_ERROR:const u=c.getResponseJson();k(Oe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Qs.TIMEOUT:k(Oe,`RPC '${e}' ${s} timed out`),a(new D(g.DEADLINE_EXCEEDED,"Request time out"));break;case Qs.HTTP_ERROR:const h=c.getStatus();if(k(Oe,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(p){const w=p.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(w)>=0?w:g.UNKNOWN}(f.status);a(new D(E,f.message))}else a(new D(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new D(g.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{k(Oe,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);k(Oe,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",l,r,15)})}yo(e,t,r){const i=Ys(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Oy(),a=Ly(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Uy({})),this.mo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");k(Oe,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const E=new VE({so:p=>{f?k(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,p):(d||(k(Oe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),k(Oe,`RPC '${e}' stream ${i} sending:`,p),h.send(p))},oo:()=>h.close()}),m=(p,w,b)=>{p.listen(w,v=>{try{b(v)}catch(P){setTimeout(()=>{throw P},0)}})};return m(h,li.EventType.OPEN,()=>{f||k(Oe,`RPC '${e}' stream ${i} transport opened.`)}),m(h,li.EventType.CLOSE,()=>{f||(f=!0,k(Oe,`RPC '${e}' stream ${i} transport closed`),E.Po())}),m(h,li.EventType.ERROR,p=>{f||(f=!0,xn(Oe,`RPC '${e}' stream ${i} transport errored:`,p),E.Po(new D(g.UNAVAILABLE,"The operation could not be completed")))}),m(h,li.EventType.MESSAGE,p=>{var w;if(!f){const b=p.data[0];ce(!!b);const v=b,P=v.error||((w=v[0])===null||w===void 0?void 0:w.error);if(P){k(Oe,`RPC '${e}' stream ${i} received error:`,P);const U=P.status;let I=function(we){const N=ve[we];if(N!==void 0)return Vd(N)}(U),le=P.message;I===void 0&&(I=g.INTERNAL,le="Unknown error status: "+U+" with message "+P.message),f=!0,E.Po(new D(I,le)),h.close()}else k(Oe,`RPC '${e}' stream ${i} received:`,b),E.Io(b)}}),m(a,Fy.STAT_EVENT,p=>{p.stat===jc.PROXY?k(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):p.stat===jc.NOPROXY&&k(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.ho()},0),E}}function Xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n){return new Hv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const t=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new zd(e,t)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,t){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),t=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===t&&this.Xo(r,i)},r=>{e(()=>{const i=new D(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,t){const r=this.Zo(this.Lo);this.stream=this.t_(e,t),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return t=>{this.ii.enqueueAndForget(()=>this.Lo===e?t():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ME extends qd{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}t_(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.Qo.reset();const t=Wv(this.serializer,e),r=function(s){if(!("targetChange"in s))return x.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?x.min():o.readTime?At(o.readTime):x.min()}(e);return this.listener.n_(t,r)}r_(e){const t={};t.database=Lo(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=ko(c)?{documents:Yv(s,c)}:{query:Xv(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Od(s,o.resumeToken);const l=No(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(x.min())>0){a.readTime=qi(s,o.snapshotVersion.toTimestamp());const l=No(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=eE(this.serializer,e);r&&(t.labels=r),this.jo(t)}i_(e){const t={};t.database=Lo(this.serializer),t.removeTarget=e,this.jo(t)}}class OE extends qd{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const t=Jv(e.writeResults,e.commitTime),r=At(e.commitTime);return this.listener.a_(r,t)}return ce(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=Lo(this.serializer),this.jo(e)}__(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Qv(this.serializer,r))};this.jo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new D(g.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,t,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(g.UNKNOWN,i.toString())})}po(e,t,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(g.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class xE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(Lt(t),this.E_=!1):k("OnlineStateTracker",t)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{wn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=$(c);l.p_.add(4),await Xr(l),l.S_.set("Unknown"),l.p_.delete(4),await Ps(l)}(this))})}),this.S_=new xE(r,i)}}async function Ps(n){if(wn(n))for(const e of n.y_)await e(!0)}async function Xr(n){for(const e of n.y_)await e(!1)}function Hd(n,e){const t=$(n);t.g_.has(e.targetId)||(t.g_.set(e.targetId,e),Fa(t)?xa(t):Jn(t).$o()&&La(t,e))}function Gd(n,e){const t=$(n),r=Jn(t);t.g_.delete(e),r.$o()&&Kd(t,e),t.g_.size===0&&(r.$o()?r.Go():wn(t)&&t.S_.set("Unknown"))}function La(n,e){if(n.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(x.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jn(n).r_(e)}function Kd(n,e){n.b_.Be(e),Jn(n).i_(e)}function xa(n){n.b_=new $v({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.g_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),Jn(n).start(),n.S_.d_()}function Fa(n){return wn(n)&&!Jn(n).Ko()&&n.g_.size>0}function wn(n){return $(n).p_.size===0}function Wd(n){n.b_=void 0}async function UE(n){n.g_.forEach((e,t)=>{La(n,e)})}async function BE(n,e){Wd(n),Fa(n)?(n.S_.V_(e),xa(n)):n.S_.set("Unknown")}async function $E(n,e,t){if(n.S_.set("Online"),e instanceof Md&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(n,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hi(n,r)}else if(e instanceof Ei?n.b_.We(e):e instanceof Nd?n.b_.Ze(e):n.b_.je(e),!t.isEqual(x.min()))try{const r=await jd(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.g_.get(l);u&&s.g_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.g_.get(c);if(!u)return;s.g_.set(c,u.withResumeToken(ze.EMPTY_BYTE_STRING,u.snapshotVersion)),Kd(s,c);const h=new zt(u.target,c,l,u.sequenceNumber);La(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await Hi(n,r)}}async function Hi(n,e,t){if(!Qr(e))throw e;n.p_.add(1),await Xr(n),n.S_.set("Offline"),t||(t=()=>jd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await t(),n.p_.delete(1),await Ps(n)})}function Qd(n,e){return e().catch(t=>Hi(n,t,e))}async function ks(n){const e=$(n),t=tn(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;jE(e);)try{const i=await RE(e.localStore,r);if(i===null){e.f_.length===0&&t.Go();break}r=i.batchId,zE(e,i)}catch(i){await Hi(e,i)}Jd(e)&&Yd(e)}function jE(n){return wn(n)&&n.f_.length<10}function zE(n,e){n.f_.push(e);const t=tn(n);t.$o()&&t.o_&&t.__(e.mutations)}function Jd(n){return wn(n)&&!tn(n).Ko()&&n.f_.length>0}function Yd(n){tn(n).start()}async function qE(n){tn(n).c_()}async function HE(n){const e=tn(n);for(const t of n.f_)e.__(t.mutations)}async function GE(n,e,t){const r=n.f_.shift(),i=Pa.from(r,e,t);await Qd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ks(n)}async function KE(n,e){e&&tn(n).o_&&await async function(r,i){if(function(o){return Fv(o)&&o!==g.ABORTED}(i.code)){const s=r.f_.shift();tn(r).Wo(),await Qd(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ks(r)}}(n,e),Jd(n)&&Yd(n)}async function fl(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=wn(t);t.p_.add(3),await Xr(t),r&&t.S_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.p_.delete(3),await Ps(t)}async function WE(n,e){const t=$(n);e?(t.p_.delete(2),await Ps(t)):e||(t.p_.add(2),await Xr(t),t.S_.set("Unknown"))}function Jn(n){return n.D_||(n.D_=function(t,r,i){const s=$(t);return s.h_(),new ME(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:UE.bind(null,n),uo:BE.bind(null,n),n_:$E.bind(null,n)}),n.y_.push(async e=>{e?(n.D_.Wo(),Fa(n)?xa(n):n.S_.set("Unknown")):(await n.D_.stop(),Wd(n))})),n.D_}function tn(n){return n.v_||(n.v_=function(t,r,i){const s=$(t);return s.h_(),new OE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:qE.bind(null,n),uo:KE.bind(null,n),u_:HE.bind(null,n),a_:GE.bind(null,n)}),n.y_.push(async e=>{e?(n.v_.Wo(),await ks(n)):(await n.v_.stop(),n.f_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.f_.length} pending writes`),n.f_=[]))})),n.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Ua(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ba(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),Qr(n))return new D(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||V.comparator(t.key,r.key):(t,r)=>V.comparator(t.key,r.key),this.keyedMap=tr(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new Mn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Mn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.C_=new de(V.comparator)}track(e){const t=e.doc.key,r=this.C_.get(t);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(t,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(t):e.type===1&&r.type===2?this.C_=this.C_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(t,{type:2,doc:e.doc}):O():this.C_=this.C_.insert(t,e)}F_(){const e=[];return this.C_.inorderTraversal((t,r)=>{e.push(r)}),e}}class jn{constructor(e,t,r,i,s,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new jn(e,t,Mn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ws(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(){this.M_=void 0,this.listeners=[]}}class JE{constructor(){this.queries=new Qn(e=>yd(e),ws),this.onlineState="Unknown",this.x_=new Set}}async function Xd(n,e){const t=$(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new QE),i)try{s.M_=await t.onListen(r)}catch(o){const a=Ba(o,`Initialization of query '${Vo(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.O_(t.onlineState),s.M_&&e.N_(s.M_)&&$a(t)}async function Zd(n,e){const t=$(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function YE(n,e){const t=$(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&$a(t)}function XE(n,e,t){const r=$(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function $a(n){n.x_.forEach(e=>{e.next()})}class ef{constructor(e,t,r){this.query=e,this.B_=t,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.L_?this.q_(e)&&(this.B_.next(e),t=!0):this.Q_(e,this.onlineState)&&(this.K_(e),t=!0),this.k_=e,t}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let t=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),t=!0),t}Q_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const t=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}K_(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.key=e}}class nf{constructor(e){this.key=e}}class ZE{constructor(e,t){this.query=e,this.Z_=t,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=G(),this.mutatedKeys=G(),this.ta=vd(e),this.na=new Mn(this.ta)}get ra(){return this.Z_}ia(e,t){const r=t?t.sa:new ml,i=t?t.na:this.na;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=As(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let p=!1;d&&f?d.data.isEqual(f.data)?E!==m&&(r.track({type:3,doc:f}),p=!0):this.oa(d,f)||(r.track({type:2,doc:f}),p=!0,(c&&this.ta(f,c)>0||l&&this.ta(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),p=!0):d&&!f&&(r.track({type:1,doc:d}),p=!0,(c||l)&&(a=!0)),p&&(f?(o=o.add(f),s=m?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((l,u)=>function(d,f){const E=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return E(d)-E(f)}(l.type,u.type)||this.ta(l.doc,u.doc)),this._a(r);const o=t?this.aa():[],a=this.ea.size===0&&this.current?1:0,c=a!==this.X_;return this.X_=a,s.length!==0||c?{snapshot:new jn(this.query,e.na,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new ml,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(t=>this.Z_=this.Z_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Z_=this.Z_.delete(t)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=G(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const t=[];return e.forEach(r=>{this.ea.has(r)||t.push(new nf(r))}),this.ea.forEach(r=>{e.has(r)||t.push(new tf(r))}),t}la(e){this.Z_=e.ss,this.ea=G();const t=this.ia(e.documents);return this.applyChanges(t,!0)}ha(){return jn.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class eI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tI{constructor(e){this.key=e,this.Pa=!1}}class nI{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new Qn(a=>yd(a),ws),this.Ea=new Map,this.da=new Set,this.Aa=new de(V.comparator),this.Ra=new Map,this.Va=new Na,this.ma={},this.fa=new Map,this.ga=$n.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function rI(n,e){const t=fI(n);let r,i;const s=t.Ta.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await SE(t.localStore,xt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await iI(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Hd(t.remoteStore,o)}return i}async function iI(n,e,t,r,i){n.ya=(h,d,f)=>async function(m,p,w,b){let v=p.view.ia(w);v.zi&&(v=await ul(m.localStore,p.query,!1).then(({documents:I})=>p.view.ia(I,v)));const P=b&&b.targetChanges.get(p.targetId),U=p.view.applyChanges(v,m.isPrimaryClient,P);return gl(m,p.targetId,U.ua),U.snapshot}(n,h,d,f);const s=await ul(n.localStore,e,!0),o=new ZE(e,s.ss),a=o.ia(s.documents),c=Yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);gl(n,t,l.ua);const u=new eI(e,t,o);return n.Ta.set(e,u),n.Ea.has(t)?n.Ea.get(t).push(e):n.Ea.set(t,[e]),l.snapshot}async function sI(n,e){const t=$(n),r=t.Ta.get(e),i=t.Ea.get(r.targetId);if(i.length>1)return t.Ea.set(r.targetId,i.filter(s=>!ws(s,e))),void t.Ta.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await xo(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Gd(t.remoteStore,r.targetId),Fo(t,r.targetId)}).catch(Wr)):(Fo(t,r.targetId),await xo(t.localStore,r.targetId,!0))}async function oI(n,e,t){const r=mI(n);try{const i=await function(o,a){const c=$(o),l=Te.now(),u=a.reduce((f,E)=>f.add(E.key),G());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=Ft(),m=G();return c.Xi.getEntries(f,u).next(p=>{E=p,E.forEach((w,b)=>{b.isValidDocument()||(m=m.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,E)).next(p=>{h=p;const w=[];for(const b of a){const v=Nv(b,h.get(b.key).overlayedDocument);v!=null&&w.push(new Tn(b.key,v,hd(v.value.mapValue),Nt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,w,a)}).next(p=>{d=p;const w=p.applyToLocalDocumentSet(h,m);return c.documentOverlayCache.saveOverlays(f,p.batchId,w)})}).then(()=>({batchId:d.batchId,changes:Id(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.ma[o.currentUser.toKey()];l||(l=new de(J)),l=l.insert(a,c),o.ma[o.currentUser.toKey()]=l}(r,i.batchId,t),await Zr(r,i.changes),await ks(r.remoteStore)}catch(i){const s=Ba(i,"Failed to persist write");t.reject(s)}}async function rf(n,e){const t=$(n);try{const r=await AE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Ra.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?ce(o.Pa):i.removedDocuments.size>0&&(ce(o.Pa),o.Pa=!1))}),await Zr(t,r,e)}catch(r){await Wr(r)}}function pl(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=$(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.O_(a)&&(l=!0)}),l&&$a(c)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aI(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new de(V.comparator);o=o.insert(s,xe.newNoDocument(s,x.min()));const a=G().add(s),c=new Ss(x.min(),new Map,new de(J),o,a);await rf(r,c),r.Aa=r.Aa.remove(s),r.Ra.delete(e),ja(r)}else await xo(r.localStore,e,!1).then(()=>Fo(r,e,t)).catch(Wr)}async function cI(n,e){const t=$(n),r=e.batch.batchId;try{const i=await wE(t.localStore,e);of(t,r,null),sf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zr(t,i)}catch(i){await Wr(i)}}async function lI(n,e,t){const r=$(n);try{const i=await function(o,a){const c=$(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ce(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);of(r,e,t),sf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zr(r,i)}catch(i){await Wr(i)}}function sf(n,e){(n.fa.get(e)||[]).forEach(t=>{t.resolve()}),n.fa.delete(e)}function of(n,e,t){const r=$(n);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function Fo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ea.get(e))n.Ta.delete(r),t&&n.Ia.wa(r,t);n.Ea.delete(e),n.isPrimaryClient&&n.Va.Ar(e).forEach(r=>{n.Va.containsKey(r)||af(n,r)})}function af(n,e){n.da.delete(e.path.canonicalString());const t=n.Aa.get(e);t!==null&&(Gd(n.remoteStore,t),n.Aa=n.Aa.remove(e),n.Ra.delete(t),ja(n))}function gl(n,e,t){for(const r of t)r instanceof tf?(n.Va.addReference(r.key,e),uI(n,r)):r instanceof nf?(k("SyncEngine","Document no longer in limbo: "+r.key),n.Va.removeReference(r.key,e),n.Va.containsKey(r.key)||af(n,r.key)):O()}function uI(n,e){const t=e.key,r=t.path.canonicalString();n.Aa.get(t)||n.da.has(r)||(k("SyncEngine","New document in limbo: "+t),n.da.add(r),ja(n))}function ja(n){for(;n.da.size>0&&n.Aa.size<n.maxConcurrentLimboResolutions;){const e=n.da.values().next().value;n.da.delete(e);const t=new V(ue.fromString(e)),r=n.ga.next();n.Ra.set(r,new tI(t)),n.Aa=n.Aa.insert(t,r),Hd(n.remoteStore,new zt(xt(Ts(t.path)),r,"TargetPurposeLimboResolution",wa.ae))}}async function Zr(n,e,t){const r=$(n),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,c)=>{o.push(r.ya(c,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Oa.qi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(c,l){const u=$(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(l,d=>_.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>_.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Qr(h))throw h;k("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),E=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(E);u.Ji=u.Ji.insert(d,m)}}}(r.localStore,s))}async function hI(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await $d(t.localStore,e);t.currentUser=e,function(s,o){s.fa.forEach(a=>{a.forEach(c=>{c.reject(new D(g.CANCELLED,o))})}),s.fa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zr(t,r.ts)}}function dI(n,e){const t=$(n),r=t.Ra.get(e);if(r&&r.Pa)return G().add(r.key);{let i=G();const s=t.Ea.get(e);if(!s)return i;for(const o of s){const a=t.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}function fI(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aI.bind(null,e),e.Ia.n_=YE.bind(null,e.eventManager),e.Ia.wa=XE.bind(null,e.eventManager),e}function mI(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lI.bind(null,e),e}class _l{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return TE(this.persistence,new EE,e.initialUser,this.serializer)}createPersistence(e){return new yE(Ma.zr,this.serializer)}createSharedClientState(e){return new PE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pI{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hI.bind(null,this.syncEngine),await WE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JE}()}createDatastore(e){const t=bs(e.databaseInfo.databaseId),r=function(s){return new NE(s)}(e.databaseInfo);return function(s,o,a,c){return new LE(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new FE(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>pl(this.syncEngine,t,0),function(){return dl.v()?new dl:new kE}())}createSyncEngine(e,t){return function(i,s,o,a,c,l,u){const h=new nI(i,s,o,a,c,l);return u&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=$(t);k("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await Xr(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=cd.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{k("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(k("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ba(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zs(n,e){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $d(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function yl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yI(n);k("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>fl(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>fl(e.remoteStore,s)),n._onlineComponents=e}function _I(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function yI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!_I(t))throw t;xn("Error using user provided cache. Falling back to memory cache: "+t),await Zs(n,new _l)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Zs(n,new _l);return n._offlineComponents}async function lf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await yl(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await yl(n,new pI))),n._onlineComponents}function vI(n){return lf(n).then(e=>e.syncEngine)}async function Uo(n){const e=await lf(n),t=e.eventManager;return t.onListen=rI.bind(null,e.syncEngine),t.onUnlisten=sI.bind(null,e.syncEngine),t}function EI(n,e,t={}){const r=new Kt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new cf({next:d=>{o.enqueueAndForget(()=>Zd(s,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new D(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new D(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new ef(Ts(a.path),u,{includeMetadataChanges:!0,U_:!0});return Xd(s,h)}(await Uo(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n,e,t){if(!t)throw new D(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function II(n,e,t,r){if(e===!0&&r===!0)throw new D(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function El(n){if(!V.isDocumentKey(n))throw new D(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Il(n){if(V.isDocumentKey(n))throw new D(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function za(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O()}function Wt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=za(n);throw new D(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}II("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ds{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jy;switch(r.type){case"firstParty":return new Gy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=vl.get(t);r&&(k("ComponentProvider","Removing Datastore"),vl.delete(t),r.terminate())}(this),Promise.resolve()}}function TI(n,e,t,r={}){var i;const s=(n=Wt(n,Ds))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Le.MOCK_USER;else{a=fm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new D(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Le(l)}n._authCredentials=new zy(new ad(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vs(this.firestore,e,this._query)}}class tt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class Qt extends Vs{constructor(e,t,r){super(e,t,Ts(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new V(e))}withConverter(e){return new Qt(this.firestore,e,this._path)}}function wl(n,e,...t){if(n=st(n),hf("collection","path",e),n instanceof Ds){const r=ue.fromString(e,...t);return Il(r),new Qt(n,null,r)}{if(!(n instanceof tt||n instanceof Qt))throw new D(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Il(r),new Qt(n.firestore,null,r)}}function he(n,e,...t){if(n=st(n),arguments.length===1&&(e=cd.V()),hf("doc","path",e),n instanceof Ds){const r=ue.fromString(e,...t);return El(r),new tt(n,null,new V(r))}{if(!(n instanceof tt||n instanceof Qt))throw new D(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return El(r),new tt(n.firestore,n instanceof Qt?n.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new zd(this,"async_queue_retry"),this.Za=()=>{const t=Xs();t&&k("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Qo.Oo()};const e=Xs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const t=Xs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const t=new Kt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!Qr(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const t=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=t,t}enqueueAfterDelay(e,t,r){this.Xa(),this.Ya.indexOf(e)>-1&&(t=0);const i=Ua.createAndSchedule(this,e,t,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&O()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const t of this.za)if(t.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.za)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const t=this.za.indexOf(e);this.za.splice(t,1)}}function Al(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Pr extends Ds{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new wI}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||df(this),this._firestoreClient.terminate()}}function qa(n,e){const t=typeof n=="object"?n:Tu(),r=typeof n=="string"?n:e||"(default)",i=Nr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hm("firestore");s&&TI(i,...s)}return i}function Ha(n){return n._firestoreClient||df(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function df(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,l,u){return new iv(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,uf(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new gI(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(ze.fromBase64String(e))}catch(t){throw new D(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new zn(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=/^__.*__$/;class CI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jr(e,this.data,t,this.fieldTransforms)}}function mf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Wa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new Wa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return Gi(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(mf(this.au)&&AI.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class RI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bs(e)}Au(e,t,r,i=!1){return new Wa({au:e,methodName:t,du:r,path:Fe.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function SI(n){const e=n._freezeSettings(),t=bs(n._databaseId);return new RI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bI(n,e,t,r,i,s={}){const o=n.Au(s.merge||s.mergeFields?2:0,e,t,i);yf("Data must be an object, but it was:",o,r);const a=gf(r,o);let c,l;if(s.merge)c=new dt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=PI(e,h,t);if(!o.contains(d))throw new D(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);DI(u,d)||u.push(d)}c=new dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new CI(new ct(a),c,l)}function pf(n,e){if(_f(n=st(n)))return yf("Unsupported field value:",e,n),gf(n,e);if(n instanceof ff)return function(r,i){if(!mf(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=pf(a,i.Iu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Te.fromDate(r);return{timestampValue:qi(i.serializer,s)}}if(r instanceof Te){const s=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qi(i.serializer,s)}}if(r instanceof Ka)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zn)return{bytesValue:Od(i.serializer,r._byteString)};if(r instanceof tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Va(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${za(r)}`)}(n,e)}function gf(n,e){const t={};return ld(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wn(n,(r,i)=>{const s=pf(i,e.cu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function _f(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Te||n instanceof Ka||n instanceof zn||n instanceof tt||n instanceof ff)}function yf(n,e,t){if(!_f(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=za(t);throw r==="an object"?e.Tu(n+" a custom object"):e.Tu(n+" "+r)}}function PI(n,e,t){if((e=st(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return vf(n,e);throw Gi("Field path arguments must be of type string or ",n,!1,void 0,t)}const kI=new RegExp("[~\\*/\\[\\]]");function vf(n,e,t){if(e.search(kI)>=0)throw Gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ga(...e.split("."))._internalPath}catch{throw Gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gi(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new D(g.INVALID_ARGUMENT,a+n+c)}function DI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(If("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VI extends Ef{data(){return super.data()}}function If(n,e){return typeof e=="string"?vf(n,e):e instanceof Ga?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class MI{convertValue(e,t="none"){switch(_n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ka(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ca(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ar(e));default:return null}}convertTimestamp(e){const t=en(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);ce(Bd(r));const i=new Cr(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(t)||Lt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tf extends Ef{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(If("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ii extends Tf{data(e={}){return super.data(e)}}class LI{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new rr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ii(this._firestore,this._userDataWriter,r.key,r,new rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Ii(i._firestore,i._userDataWriter,a.doc.key,a.doc,new rr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Ii(i._firestore,i._userDataWriter,a.doc.key,a.doc,new rr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:xI(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n){n=Wt(n,tt);const e=Wt(n.firestore,Pr);return EI(Ha(e),n._key).then(t=>Af(e,n,t))}class wf extends MI{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,t)}}function vt(n,e,t){n=Wt(n,tt);const r=Wt(n.firestore,Pr),i=OI(n.converter,e,t);return FI(r,[bI(SI(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Nt.none())])}function Ti(n,...e){var t,r,i;n=st(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Al(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Al(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof tt)l=Wt(n.firestore,Pr),u=Ts(n._key.path),c={next:h=>{e[o]&&e[o](Af(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Wt(n,Vs);l=Wt(h.firestore,Pr),u=h._query;const d=new wf(l);c={next:f=>{e[o]&&e[o](new LI(l,d,h,f))},error:e[o+1],complete:e[o+2]},NI(n._query)}return function(d,f,E,m){const p=new cf(m),w=new ef(f,p,E);return d.asyncQueue.enqueueAndForget(async()=>Xd(await Uo(d),w)),()=>{p.va(),d.asyncQueue.enqueueAndForget(async()=>Zd(await Uo(d),w))}}(Ha(l),u,a,c)}function FI(n,e){return function(r,i){const s=new Kt;return r.asyncQueue.enqueueAndForget(async()=>oI(await vI(r),i,s)),s.promise}(Ha(n),e)}function Af(n,e,t){const r=t.docs.get(e._key),i=new wf(n);return new Tf(n,i,e._key,r,new rr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Kn=i})(qn),Ct(new pt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Pr(new qy(r.getProvider("auth-internal")),new Wy(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new D(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cr(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),lt(zc,"4.0.0",e),lt(zc,"4.0.0","esm2017")})();const UI=(n,e)=>e.some(t=>n instanceof t);let Cl,Rl;function BI(){return Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return Rl||(Rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cf=new WeakMap,Bo=new WeakMap,Rf=new WeakMap,eo=new WeakMap,Qa=new WeakMap;function jI(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Yt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cf.set(t,n)}).catch(()=>{}),Qa.set(e,n),e}function zI(n){if(Bo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Bo.set(n,e)}let $o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qI(n){$o=n($o)}function HI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(to(this),e,...t);return Rf.set(r,e.sort?e.sort():[e]),Yt(r)}:$I().includes(n)?function(...e){return n.apply(to(this),e),Yt(Cf.get(this))}:function(...e){return Yt(n.apply(to(this),e))}}function GI(n){return typeof n=="function"?HI(n):(n instanceof IDBTransaction&&zI(n),UI(n,BI())?new Proxy(n,$o):n)}function Yt(n){if(n instanceof IDBRequest)return jI(n);if(eo.has(n))return eo.get(n);const e=GI(n);return e!==n&&(eo.set(n,e),Qa.set(e,n)),e}const to=n=>Qa.get(n);function KI(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Yt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yt(o.result),c.oldVersion,c.newVersion,Yt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const WI=["get","getKey","getAll","getAllKeys","count"],QI=["put","add","delete","clear"],no=new Map;function Sl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(no.get(e))return no.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=QI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WI.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return no.set(e,s),s}qI(n=>({...n,get:(e,t,r)=>Sl(e,t)||n.get(e,t,r),has:(e,t)=>!!Sl(e,t)||n.has(e,t)}));const Sf="@firebase/installations",Ja="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=1e4,Pf=`w:${Ja}`,kf="FIS_v2",JI="https://firebaseinstallations.googleapis.com/v1",YI=60*60*1e3,XI="installations",ZI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yn=new En(XI,ZI,eT);function Df(n){return n instanceof _t&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf({projectId:n}){return`${JI}/projects/${n}/installations`}function Nf(n){return{token:n.token,requestStatus:2,expiresIn:nT(n.expiresIn),creationTime:Date.now()}}async function Mf(n,e){const r=(await e.json()).error;return yn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Of({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function tT(n,{refreshToken:e}){const t=Of(n);return t.append("Authorization",rT(e)),t}async function Lf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function nT(n){return Number(n.replace("s","000"))}function rT(n){return`${kf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Vf(n),i=Of(n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:t,authVersion:kf,appId:n.appId,sdkVersion:Pf},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Lf(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:Nf(l.authToken)}}else throw await Mf("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=/^[cdef][\w-]{21}$/,jo="";function aT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=cT(n);return oT.test(t)?t:jo}catch{return jo}}function cT(n){return sT(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new Map;function Uf(n,e){const t=Ns(n);Bf(t,e),lT(t,e)}function Bf(n,e){const t=Ff.get(n);if(t)for(const r of t)r(e)}function lT(n,e){const t=uT();t&&t.postMessage({key:n,fid:e}),hT()}let un=null;function uT(){return!un&&"BroadcastChannel"in self&&(un=new BroadcastChannel("[Firebase] FID Change"),un.onmessage=n=>{Bf(n.data.key,n.data.fid)}),un}function hT(){Ff.size===0&&un&&(un.close(),un=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="firebase-installations-database",fT=1,vn="firebase-installations-store";let ro=null;function Ya(){return ro||(ro=KI(dT,fT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vn)}}})),ro}async function Ki(n,e){const t=Ns(n),i=(await Ya()).transaction(vn,"readwrite"),s=i.objectStore(vn),o=await s.get(t);return await s.put(e,t),await i.done,(!o||o.fid!==e.fid)&&Uf(n,e.fid),e}async function $f(n){const e=Ns(n),r=(await Ya()).transaction(vn,"readwrite");await r.objectStore(vn).delete(e),await r.done}async function Ms(n,e){const t=Ns(n),i=(await Ya()).transaction(vn,"readwrite"),s=i.objectStore(vn),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&Uf(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(n){let e;const t=await Ms(n.appConfig,r=>{const i=mT(r),s=pT(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===jo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function mT(n){const e=n||{fid:aT(),registrationStatus:0};return jf(e)}function pT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gT(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_T(n)}:{installationEntry:e}}async function gT(n,e){try{const t=await iT(n,e);return Ki(n.appConfig,t)}catch(t){throw Df(t)&&t.customData.serverCode===409?await $f(n.appConfig):await Ki(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _T(n){let e=await bl(n.appConfig);for(;e.registrationStatus===1;)await xf(100),e=await bl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Xa(n);return r||t}return e}function bl(n){return Ms(n,e=>{if(!e)throw yn.create("installation-not-found");return jf(e)})}function jf(n){return yT(n)?{fid:n.fid,registrationStatus:0}:n}function yT(n){return n.registrationStatus===1&&n.registrationTime+bf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT({appConfig:n,heartbeatServiceProvider:e},t){const r=ET(n,t),i=tT(n,t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Pf,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Lf(()=>fetch(r,a));if(c.ok){const l=await c.json();return Nf(l)}else throw await Mf("Generate Auth Token",c)}function ET(n,{fid:e}){return`${Vf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(n,e=!1){let t;const r=await Ms(n.appConfig,s=>{if(!zf(s))throw yn.create("not-registered");const o=s.authToken;if(!e&&wT(o))return s;if(o.requestStatus===1)return t=IT(n,e),s;{if(!navigator.onLine)throw yn.create("app-offline");const a=CT(s);return t=TT(n,a),a}});return t?await t:r.authToken}async function IT(n,e){let t=await Pl(n.appConfig);for(;t.authToken.requestStatus===1;)await xf(100),t=await Pl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Za(n,e):r}function Pl(n){return Ms(n,e=>{if(!zf(e))throw yn.create("not-registered");const t=e.authToken;return RT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function TT(n,e){try{const t=await vT(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ki(n.appConfig,r),t}catch(t){if(Df(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $f(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ki(n.appConfig,r)}throw t}}function zf(n){return n!==void 0&&n.registrationStatus===2}function wT(n){return n.requestStatus===2&&!AT(n)}function AT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+YI}function CT(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function RT(n){return n.requestStatus===1&&n.requestTime+bf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(n){const e=n,{installationEntry:t,registrationPromise:r}=await Xa(e);return r?r.catch(console.error):Za(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(n,e=!1){const t=n;return await PT(t),(await Za(t,e)).token}async function PT(n){const{registrationPromise:e}=await Xa(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){if(!n||!n.options)throw io("App Configuration");if(!n.name)throw io("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw io(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function io(n){return yn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="installations",DT="installations-internal",VT=n=>{const e=n.getProvider("app").getImmediate(),t=kT(e),r=Nr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NT=n=>{const e=n.getProvider("app").getImmediate(),t=Nr(e,qf).getImmediate();return{getId:()=>ST(t),getToken:i=>bT(t,i)}};function MT(){Ct(new pt(qf,VT,"PUBLIC")),Ct(new pt(DT,NT,"PRIVATE"))}MT();lt(Sf,Ja);lt(Sf,Ja,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="analytics",OT="firebase_id",LT="origin",xT=60*1e3,FT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ec="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new ts("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ut=new En("analytics","Analytics",UT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(n){if(!n.startsWith(ec)){const e=ut.create("invalid-gtag-resource",{gtagURL:n});return nt.warn(e.message),""}return n}function Hf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function $T(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function jT(n,e){const t=$T("firebase-js-sdk-policy",{createScriptURL:BT}),r=document.createElement("script"),i=`${ec}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function zT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function qT(n,e,t,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await Hf(t)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){nt.error(a)}n("config",i,s)}async function HT(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Hf(t);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){nt.error(s)}}function GT(n,e,t,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await HT(n,e,t,a,c)}else if(s==="config"){const[a,c]=o;await qT(n,e,t,r,a,c)}else if(s==="consent"){const[a]=o;n("consent","update",a)}else if(s==="get"){const[a,c,l]=o;n("get",a,c,l)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){nt.error(a)}}return i}function KT(n,e,t,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=GT(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function WT(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ec)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=30,JT=1e3;class YT{constructor(e={},t=JT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gf=new YT;function XT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ZT(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:XT(r)},s=FT.replace("{app-id}",t),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ew(n,e=Gf,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rw;return setTimeout(async()=>{a.abort()},t!==void 0?t:xT),Kf({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Kf(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Gf){var s;const{appId:o,measurementId:a}=n;try{await tw(r,e)}catch(c){if(a)return nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await ZT(n);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!nw(l)){if(i.deleteThrottleMetadata(o),a)return nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?ic(t,i.intervalMillis,QT):ic(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(o,h),nt.debug(`Calling attemptFetch again in ${u} millis`),Kf(n,h,r,i)}}function tw(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nw(n){if(!(n instanceof _t)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class rw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iw(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(){if(_u())try{await yu()}catch(n){return nt.warn(ut.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return nt.warn(ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ow(n,e,t,r,i,s,o){var a;const c=ew(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&nt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>nt.error(f)),e.push(c);const l=sw().then(f=>{if(f)return r.getId()}),[u,h]=await Promise.all([c,l]);WT(s)||jT(s,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[LT]="firebase",d.update=!0,h!=null&&(d[OT]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.app=e}_delete(){return delete ur[this.app.options.appId],Promise.resolve()}}let ur={},Dl=[];const Vl={};let so="dataLayer",cw="gtag",Nl,Wf,Ml=!1;function lw(){const n=[];if(gu()&&n.push("This is a browser extension environment."),_m()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=ut.create("invalid-analytics-context",{errorInfo:e});nt.warn(t.message)}}function uw(n,e,t){lw();const r=n.options.appId;if(!r)throw ut.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ut.create("no-api-key");if(ur[r]!=null)throw ut.create("already-exists",{id:r});if(!Ml){zT(so);const{wrappedGtag:s,gtagCore:o}=KT(ur,Dl,Vl,so,cw);Wf=s,Nl=o,Ml=!0}return ur[r]=ow(n,Dl,Vl,e,Nl,so,t),new aw(n)}function hw(n,e,t,r){n=st(n),iw(Wf,ur[n.app.options.appId],e,t,r).catch(i=>nt.error(i))}const Ol="@firebase/analytics",Ll="0.10.0";function dw(){Ct(new pt(kl,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return uw(r,i,t)},"PUBLIC")),Ct(new pt("analytics-internal",n,"PRIVATE")),lt(Ol,Ll),lt(Ol,Ll,"esm2017");function n(e){try{const t=e.getProvider(kl).getImmediate();return{logEvent:(r,i,s)=>hw(t,r,i,s)}}catch(t){throw ut.create("interop-component-reg-failed",{reason:t})}}}dw();const Wi=[{Code:"AF",name:"Afghanistan",short:"undefined",Easy:10},{Code:"AL",name:"Albania",short:"undefined",Easy:10},{Code:"DZ",name:"Algeria",short:"undefined",Easy:20},{Code:"AD",name:"Andorra",short:"undefined",Easy:20},{Code:"AO",name:"Angola",short:"undefined",Easy:30},{Code:"AG",name:"Antigua and Barbuda",short:"Antigua",Easy:15},{Code:"AR",name:"Argentina",short:"undefined",Easy:0},{Code:"AM",name:"Armenia",short:"undefined",Easy:27},{Code:"AU",name:"Australia",short:"undefined",Easy:0},{Code:"AT",name:"Austria",short:"undefined",Easy:13},{Code:"AZ",name:"Azerbaijan",short:"undefined",Easy:29},{Code:"BS",name:"Bahamas",short:"undefined",Easy:20},{Code:"BH",name:"Bahrain",short:"undefined",Easy:30},{Code:"BD",name:"Bangladesh",short:"undefined",Easy:5},{Code:"BB",name:"Barbados",short:"undefined",Easy:30},{Code:"BY",name:"Belarus",short:"undefined",Easy:10},{Code:"BE",name:"Belgium",short:"undefined",Easy:0},{Code:"BZ",name:"Belize",short:"undefined",Easy:23},{Code:"BJ",name:"Benin",short:"undefined",Easy:27},{Code:"BT",name:"Bhutan",short:"undefined",Easy:16},{Code:"BO",name:"Bolivia",short:"undefined",Easy:25},{Code:"BA",name:"Bosnia and Herzegovina",short:"Bosnia",Easy:17},{Code:"BW",name:"Botswana",short:"undefined",Easy:21},{Code:"BR",name:"Brazil",short:"undefined",Easy:0},{Code:"BN",name:"Brunei",short:"undefined",Easy:15},{Code:"BG",name:"Bulgaria",short:"undefined",Easy:10},{Code:"BF",name:"Burkina Faso",short:"undefined",Easy:30},{Code:"BI",name:"Burundi",short:"undefined",Easy:24},{Code:"KH",name:"Cambodia",short:"undefined",Easy:10},{Code:"CM",name:"Cameroon",short:"undefined",Easy:17},{Code:"CA",name:"Canada",short:"undefined",Easy:0},{Code:"CV",name:"Cape Verde",short:"undefined",Easy:23},{Code:"CF",name:"Central African Republic",short:"CAR",Easy:32},{Code:"TD",name:"Chad",short:"undefined",Easy:33},{Code:"CL",name:"Chile",short:"undefined",Easy:11},{Code:"CN",name:"China",short:"undefined",Easy:0},{Code:"CO",name:"Colombia",short:"undefined",Easy:10},{Code:"KM",name:"Comoros",short:"undefined",Easy:13},{Code:"CG",name:"Congo",short:"undefined",Easy:20},{Code:"CD",name:"Democratic Republic of the Congo",short:"DRC",Easy:40},{Code:"CR",name:"Costa Rica",short:"undefined",Easy:20},{Code:"CI",name:"Côte d'Ivoire",short:"ivory coast",Easy:20},{Code:"HR",name:"Croatia",short:"undefined",Easy:10},{Code:"CU",name:"Cuba",short:"undefined",Easy:10},{Code:"CY",name:"Cyprus",short:"undefined",Easy:10},{Code:"CZ",name:"Czech Republic",short:"Czechia",Easy:12},{Code:"DK",name:"Denmark",short:"undefined",Easy:5},{Code:"DJ",name:"Djibouti",short:"undefined",Easy:15},{Code:"DM",name:"Dominica",short:"undefined",Easy:15},{Code:"EC",name:"Ecuador",short:"undefined",Easy:15},{Code:"EG",name:"Egypt",short:"undefined",Easy:10},{Code:"SV",name:"El Salvador",short:"undefined",Easy:15},{Code:"GQ",name:"Equatorial Guinea",short:"undefined",Easy:23},{Code:"ER",name:"Eritrea",short:"undefined",Easy:25},{Code:"EE",name:"Estonia",short:"undefined",Easy:30},{Code:"ET",name:"Ethiopia",short:"undefined",Easy:30},{Code:"FJ",name:"Fiji",short:"undefined",Easy:30},{Code:"FI",name:"Finland",short:"undefined",Easy:7},{Code:"FR",name:"France",short:"undefined",Easy:0},{Code:"GA",name:"Gabon",short:"undefined",Easy:25},{Code:"GM",name:"Gambia",short:"undefined",Easy:27},{Code:"GE",name:"Georgia",short:"undefined",Easy:15},{Code:"DE",name:"Germany",short:"undefined",Easy:0},{Code:"GH",name:"Ghana",short:"undefined",Easy:27},{Code:"GR",name:"Greece",short:"undefined",Easy:0},{Code:"GD",name:"Grenada",short:"undefined",Easy:25},{Code:"GT",name:"Guatemala",short:"undefined",Easy:23},{Code:"GW",name:"Guinea Bissau",short:"undefined",Easy:30},{Code:"GY",name:"Guyana",short:"undefined",Easy:25},{Code:"HT",name:"Haiti",short:"undefined",Easy:15},{Code:"HN",name:"Honduras",short:"undefined",Easy:18},{Code:"HK",name:"Hong Kong",short:"undefined",Easy:15},{Code:"HU",name:"Hungary",short:"undefined",Easy:10},{Code:"IS",name:"Iceland",short:"undefined",Easy:10},{Code:"IN",name:"India",short:"undefined",Easy:0},{Code:"IR",name:"Iran",short:"undefined",Easy:10},{Code:"IQ",name:"Iraq",short:"undefined",Easy:19},{Code:"IE",name:"Ireland",short:"undefined",Easy:0},{Code:"IM",name:"Isle of Man",short:"undefined",Easy:28},{Code:"IL",name:"Israel",short:"undefined",Easy:10},{Code:"IT",name:"Italy",short:"undefined",Easy:0},{Code:"JM",name:"Jamaica",short:"undefined",Easy:10},{Code:"JP",name:"Japan",short:"undefined",Easy:0},{Code:"JO",name:"Jordan",short:"undefined",Easy:24},{Code:"KZ",name:"Kazakhstan",short:"undefined",Easy:30},{Code:"KE",name:"Kenya",short:"undefined",Easy:10},{Code:"KI",name:"Kiribati",short:"undefined",Easy:24},{Code:"KP",name:"North Korea",short:"undefined",Easy:0},{Code:"KR",name:"South Korea",short:"undefined",Easy:0},{Code:"KW",name:"Kuwait",short:"undefined",Easy:30},{Code:"KG",name:"Kyrgyzstan",short:"undefined",Easy:30},{Code:"LA",name:"Laos",short:"undefined",Easy:14},{Code:"LV",name:"Latvia",short:"undefined",Easy:20},{Code:"LB",name:"Lebanon",short:"undefined",Easy:20},{Code:"LS",name:"Lesotho",short:"undefined",Easy:20},{Code:"LR",name:"Liberia",short:"undefined",Easy:20},{Code:"LY",name:"Libya",short:"undefined",Easy:15},{Code:"LI",name:"Liechtenstein",short:"undefined",Easy:15},{Code:"LT",name:"Lithuania",short:"undefined",Easy:18},{Code:"LU",name:"Luxembourg",short:"undefined",Easy:15},{Code:"MK",name:"North Macedonia",short:"undefined",Easy:15},{Code:"MG",name:"Madagascar",short:"undefined",Easy:25},{Code:"MW",name:"Malawi",short:"undefined",Easy:15},{Code:"MY",name:"Malaysia",short:"undefined",Easy:20},{Code:"MV",name:"Maldives",short:"undefined",Easy:15},{Code:"ML",name:"Mali",short:"undefined",Easy:25},{Code:"MT",name:"Malta",short:"undefined",Easy:10},{Code:"MH",name:"Marshall Islands",short:"undefined",Easy:23},{Code:"MR",name:"Mauritania",short:"undefined",Easy:23},{Code:"MU",name:"Mauritius",short:"undefined",Easy:23},{Code:"MX",name:"Mexico",short:"undefined",Easy:0},{Code:"FM",name:"Micronesia",short:"undefined",Easy:23},{Code:"MD",name:"Moldova",short:"undefined",Easy:23},{Code:"MC",name:"Monaco",short:"undefined",Easy:23},{Code:"MN",name:"Mongolia",short:"undefined",Easy:23},{Code:"ME",name:"Montenegro",short:"undefined",Easy:23},{Code:"MA",name:"Morocco",short:"undefined",Easy:9},{Code:"MZ",name:"Mozambique",short:"undefined",Easy:23},{Code:"MM",name:"Myanmar",short:"undefined",Easy:23},{Code:"NA",name:"Namibia",short:"undefined",Easy:23},{Code:"NR",name:"Nauru",short:"undefined",Easy:23},{Code:"NP",name:"Nepal",short:"undefined",Easy:10},{Code:"NL",name:"Netherlands",short:"undefined",Easy:0},{Code:"NZ",name:"New Zealand",short:"undefined",Easy:10},{Code:"NI",name:"Nicaragua",short:"undefined",Easy:23},{Code:"NE",name:"Niger",short:"undefined",Easy:23},{Code:"NO",name:"Norway",short:"undefined",Easy:0},{Code:"OM",name:"Oman",short:"undefined",Easy:23},{Code:"PK",name:"Pakistan",short:"undefined",Easy:0},{Code:"PW",name:"Palau",short:"undefined",Easy:23},{Code:"PS",name:"Palestine",short:"undefined",Easy:17},{Code:"PA",name:"Panama",short:"undefined",Easy:23},{Code:"PG",name:"Papua New Guinea",short:"undefined",Easy:18},{Code:"PY",name:"Paraguay",short:"undefined",Easy:23},{Code:"PE",name:"Peru",short:"undefined",Easy:23},{Code:"PH",name:"Philippines",short:"undefined",Easy:23},{Code:"PL",name:"Poland",short:"undefined",Easy:0},{Code:"PT",name:"Portugal",short:"undefined",Easy:0},{Code:"QA",name:"Qatar",short:"undefined",Easy:0},{Code:"RO",name:"Romania",short:"undefined",Easy:23},{Code:"RU",name:"Russia",short:"undefined",Easy:0},{Code:"RW",name:"Rwanda",short:"undefined",Easy:23},{Code:"KN",name:"Saint Kitts and Nevis",short:"saint kitts",Easy:23},{Code:"LC",name:"Saint Lucia",short:"undefined",Easy:15},{Code:"VC",name:"Saint Vincent and the Grenadines",short:"saint vincent",Easy:23},{Code:"WS",name:"Samoa",short:"undefined",Easy:23},{Code:"SM",name:"San Marino",short:"undefined",Easy:20},{Code:"ST",name:"Sao Tome and Principe",short:"undefined",Easy:23},{Code:"SA",name:"Saudi Arabia",short:"undefined",Easy:16},{Code:"SN",name:"Senegal",short:"undefined",Easy:23},{Code:"RS",name:"Serbia",short:"undefined",Easy:23},{Code:"SC",name:"Seychelles",short:"undefined",Easy:13},{Code:"SL",name:"Sierra Leone",short:"undefined",Easy:23},{Code:"SG",name:"Singapore",short:"undefined",Easy:10},{Code:"SK",name:"Slovakia",short:"undefined",Easy:10},{Code:"SI",name:"Slovenia",short:"undefined",Easy:23},{Code:"SB",name:"Solomon Islands",short:"undefined",Easy:23},{Code:"SO",name:"Somalia",short:"undefined",Easy:23},{Code:"ZA",name:"South Africa",short:"undefined",Easy:0},{Code:"SS",name:"South Sudan",short:"undefined",Easy:23},{Code:"ES",name:"Spain",short:"undefined",Easy:0},{Code:"LK",name:"Sri Lanka",short:"undefined",Easy:0},{Code:"SD",name:"Sudan",short:"undefined",Easy:23},{Code:"SR",name:"Suriname",short:"undefined",Easy:23},{Code:"SE",name:"Sweden",short:"undefined",Easy:0},{Code:"CH",name:"Switzerland",short:"undefined",Easy:0},{Code:"SY",name:"Syria",short:"undefined",Easy:23},{Code:"TW",name:"Taiwan",short:"undefined",Easy:11},{Code:"TJ",name:"Tajikistan",short:"undefined",Easy:23},{Code:"TZ",name:"Tanzania",short:"undefined",Easy:23},{Code:"TH",name:"Thailand",short:"undefined",Easy:0},{Code:"TL",name:"Timor-Leste",short:"undefined",Easy:23},{Code:"TG",name:"Togo",short:"undefined",Easy:23},{Code:"TO",name:"Tonga",short:"undefined",Easy:23},{Code:"TT",name:"Trinidad and Tobago",short:"trinidad",Easy:23},{Code:"TN",name:"Tunisia",short:"undefined",Easy:23},{Code:"TR",name:"Turkey",short:"undefined",Easy:0},{Code:"TM",name:"Turkmenistan",short:"undefined",Easy:23},{Code:"TC",name:"Turks and Caicos",short:"Turks and",Easy:23},{Code:"TV",name:"Tuvalu",short:"undefined",Easy:23},{Code:"UG",name:"Uganda",short:"undefined",Easy:23},{Code:"AE",name:"United Arab Emirates",short:"UAE",Easy:10},{Code:"GB",name:"United Kingdom",short:"UK",Easy:0},{Code:"US",name:"United States",short:"USA",Easy:0},{Code:"UY",name:"Uruguay",short:"undefined",Easy:23},{Code:"UZ",name:"Uzbekistan",short:"undefined",Easy:23},{Code:"VU",name:"Vanuatu",short:"undefined",Easy:23},{Code:"VE",name:"Venezuela",short:"undefined",Easy:23},{Code:"VN",name:"Vietnam",short:"undefined",Easy:23},{Code:"YE",name:"Yemen",short:"undefined",Easy:23},{Code:"ZM",name:"Zambia",short:"undefined",Easy:23},{Code:"ZW",name:"Zimbabwe",short:"undefined",Easy:23}];function fw(n){let e,t,r,i;return{c(){e=R("div"),t=R("input"),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=z(e);t=S(o,"INPUT",{autocomplete:!0,id:!0,placeholder:!0,class:!0}),o.forEach(y),this.h()},h(){C(t,"autocomplete","off"),C(t,"id","autobox"),C(t,"placeholder","Enter a country..."),C(t,"class","svelte-c91lay"),C(e,"class","container svelte-c91lay")},m(s,o){M(s,e,o),T(e,t),nc(t,n[0]),r||(i=[qt(t,"click",n[3]),qt(t,"keyup",n[1]),qt(t,"input",n[4])],r=!0)},p(s,[o]){o&1&&t.value!==s[0]&&nc(t,s[0])},i:ge,o:ge,d(s){s&&y(e),r=!1,cu(i)}}}function mw(n,e,t){let{submitted:r}=e,i;function s(c){if(c.key=="Enter"&&i==""){t(2,r="pass");return}(Wi.find(l=>l.name.toLowerCase().replace(/\s/g,"")==i.toLowerCase().replace(/\s/g,""))||Wi.find(l=>l.short.toLowerCase()==i.toLowerCase()))&&(t(2,r=i.toLowerCase()),t(0,i=""))}window.setTimeout(()=>document.q);const o=()=>{dr.set(!0),console.log("start")};function a(){i=this.value,t(0,i)}return n.$$set=c=>{"submitted"in c&&t(2,r=c.submitted)},[i,s,r,o,a]}class pw extends kr{constructor(e){super(),Dr(this,e,mw,fw,Xt,{submitted:2})}}function xl(n,e,t){const r=n.slice();return r[1]=e[t],r}function Fl(n,e,t){const r=n.slice();return r[4]=e[t],r}function Ul(n,e,t){const r=n.slice();return r[7]=e[t],r}function Bl(n){let e,t=n[7]+"",r;return{c(){e=R("th"),r=Se(t)},l(i){e=S(i,"TH",{});var s=z(e);r=be(s,t),s.forEach(y)},m(i,s){M(i,e,s),T(e,r)},p(i,s){s&1&&t!==(t=i[7]+"")&&it(r,t)},d(i){i&&y(e)}}}function gw(n){let e,t=n[4]+"",r;return{c(){e=R("td"),r=Se(t)},l(i){e=S(i,"TD",{});var s=z(e);r=be(s,t),s.forEach(y)},m(i,s){M(i,e,s),T(e,r)},p(i,s){s&1&&t!==(t=i[4]+"")&&it(r,t)},d(i){i&&y(e)}}}function _w(n){let e,t=n[4]+"",r;return{c(){e=R("td"),r=Se(t),this.h()},l(i){e=S(i,"TD",{class:!0});var s=z(e);r=be(s,t),s.forEach(y),this.h()},h(){C(e,"class","correct svelte-enhqh9")},m(i,s){M(i,e,s),T(e,r)},p(i,s){s&1&&t!==(t=i[4]+"")&&it(r,t)},d(i){i&&y(e)}}}function yw(n){let e,t=n[4]+"",r;return{c(){e=R("td"),r=Se(t),this.h()},l(i){e=S(i,"TD",{class:!0});var s=z(e);r=be(s,t),s.forEach(y),this.h()},h(){C(e,"class","incorrect svelte-enhqh9")},m(i,s){M(i,e,s),T(e,r)},p(i,s){s&1&&t!==(t=i[4]+"")&&it(r,t)},d(i){i&&y(e)}}}function $l(n){let e;function t(s,o){return s[4]=="incorrect"?yw:s[4]=="correct"?_w:gw}let r=t(n),i=r(n);return{c(){i.c(),e=wi()},l(s){i.l(s),e=wi()},m(s,o){i.m(s,o),M(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&y(e),i.d(s)}}}function jl(n){let e,t,r=Sn(Object.values(n[1])),i=[];for(let s=0;s<r.length;s+=1)i[s]=$l(Fl(n,r,s));return{c(){e=R("tr");for(let s=0;s<i.length;s+=1)i[s].c();t=q()},l(s){e=S(s,"TR",{});var o=z(e);for(let a=0;a<i.length;a+=1)i[a].l(o);t=H(o),o.forEach(y)},m(s,o){M(s,e,o);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);T(e,t)},p(s,o){if(o&1){r=Sn(Object.values(s[1]));let a;for(a=0;a<r.length;a+=1){const c=Fl(s,r,a);i[a]?i[a].p(c,o):(i[a]=$l(c),i[a].c(),i[a].m(e,t))}for(;a<i.length;a+=1)i[a].d(1);i.length=r.length}},d(s){s&&y(e),oo(i,s)}}}function vw(n){let e,t,r,i,s,o=Sn(Object.keys(n[0][0])),a=[];for(let u=0;u<o.length;u+=1)a[u]=Bl(Ul(n,o,u));let c=Sn(Object.values(n[0])),l=[];for(let u=0;u<c.length;u+=1)l[u]=jl(xl(n,c,u));return{c(){e=R("table"),t=R("thead"),r=R("tr");for(let u=0;u<a.length;u+=1)a[u].c();i=q(),s=R("tbody");for(let u=0;u<l.length;u+=1)l[u].c()},l(u){e=S(u,"TABLE",{});var h=z(e);t=S(h,"THEAD",{});var d=z(t);r=S(d,"TR",{});var f=z(r);for(let m=0;m<a.length;m+=1)a[m].l(f);f.forEach(y),d.forEach(y),i=H(h),s=S(h,"TBODY",{});var E=z(s);for(let m=0;m<l.length;m+=1)l[m].l(E);E.forEach(y),h.forEach(y)},m(u,h){M(u,e,h),T(e,t),T(t,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(r,null);T(e,i),T(e,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(s,null)},p(u,[h]){if(h&1){o=Sn(Object.keys(u[0][0]));let d;for(d=0;d<o.length;d+=1){const f=Ul(u,o,d);a[d]?a[d].p(f,h):(a[d]=Bl(f),a[d].c(),a[d].m(r,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=o.length}if(h&1){c=Sn(Object.values(u[0]));let d;for(d=0;d<c.length;d+=1){const f=xl(u,c,d);l[d]?l[d].p(f,h):(l[d]=jl(f),l[d].c(),l[d].m(s,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}},i:ge,o:ge,d(u){u&&y(e),oo(a,u),oo(l,u)}}}function Ew(n,e,t){let{tableData:r}=e;return n.$$set=i=>{"tableData"in i&&t(0,r=i.tableData)},[r]}class Iw extends kr{constructor(e){super(),Dr(this,e,Ew,vw,Xt,{tableData:0})}}function Qf(n){const e=n-1;return e*e*e+1}function ke(n,{delay:e=0,duration:t=400,easing:r=Jf}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function Qi(n,{delay:e=0,duration:t=400,easing:r=Qf,axis:i="y"}={}){const s=getComputedStyle(n),o=+s.opacity,a=i==="y"?"height":"width",c=parseFloat(s[a]),l=i==="y"?["top","bottom"]:["left","right"],u=l.map(w=>`${w[0].toUpperCase()}${w.slice(1)}`),h=parseFloat(s[`padding${u[0]}`]),d=parseFloat(s[`padding${u[1]}`]),f=parseFloat(s[`margin${u[0]}`]),E=parseFloat(s[`margin${u[1]}`]),m=parseFloat(s[`border${u[0]}Width`]),p=parseFloat(s[`border${u[1]}Width`]);return{delay:e,duration:t,easing:r,css:w=>`overflow: hidden;opacity: ${Math.min(w*20,1)*o};${a}: ${w*c}px;padding-${l[0]}: ${w*h}px;padding-${l[1]}: ${w*d}px;margin-${l[0]}: ${w*f}px;margin-${l[1]}: ${w*E}px;border-${l[0]}-width: ${w*m}px;border-${l[1]}-width: ${w*p}px;`}}function Ji(n,{delay:e=0,duration:t=400,easing:r=Qf,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,c=o.transform==="none"?"":o.transform,l=1-i,u=a*(1-s);return{delay:e,duration:t,easing:r,css:(h,d)=>`
			transform: ${c} scale(${1-l*d});
			opacity: ${a-u*d}
		`}}function Tw(n){let e;return{c(){e=R("div"),this.h()},l(t){e=S(t,"DIV",{class:!0}),z(e).forEach(y),this.h()},h(){C(e,"class","addedscore svelte-1xmzcs0")},m(t,r){M(t,e,r)},p:ge,i:ge,o:ge,d(t){t&&y(e)}}}function ww(n){let e,t,r,i,s;return{c(){e=R("div"),t=Se("+"),r=Se(n[5]),this.h()},l(o){e=S(o,"DIV",{class:!0});var a=z(e);t=be(a,"+"),r=be(a,n[5]),a.forEach(y),this.h()},h(){C(e,"class","addedscore correct svelte-1xmzcs0")},m(o,a){M(o,e,a),T(e,t),T(e,r),s=!0},p(o,a){(!s||a[0]&32)&&it(r,o[5])},i(o){s||(o&&rt(()=>{s&&(i||(i=se(e,Ji,{},!0)),i.run(1))}),s=!0)},o(o){o&&(i||(i=se(e,Ji,{},!1)),i.run(0)),s=!1},d(o){o&&y(e),o&&i&&i.end()}}}function Aw(n){let e,t,r,i;return{c(){e=R("div"),t=Se(n[5]),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=z(e);t=be(o,n[5]),o.forEach(y),this.h()},h(){C(e,"class","addedscore incorrect svelte-1xmzcs0")},m(s,o){M(s,e,o),T(e,t),i=!0},p(s,o){(!i||o[0]&32)&&it(t,s[5])},i(s){i||(s&&rt(()=>{i&&(r||(r=se(e,Ji,{},!0)),r.run(1))}),i=!0)},o(s){s&&(r||(r=se(e,Ji,{},!1)),r.run(0)),i=!1},d(s){s&&y(e),s&&r&&r.end()}}}function Cw(n){let e,t,r,i,s,o,a=n[10].format(n[3])+"",c,l,u,h,d="Exit to main menu",f,E,m,p,w,b;return E=new Iw({props:{tableData:n[8]}}),{c(){e=R("div"),t=R("div"),r=new em(!1),i=q(),s=R("p"),o=Se("Well done. You got a score of "),c=Se(a),l=Se("!"),u=q(),h=R("button"),h.textContent=d,f=q(),Yi(E.$$.fragment),this.h()},l(v){e=S(v,"DIV",{class:!0});var P=z(e);t=S(P,"DIV",{class:!0});var U=z(t);r=tm(U,!1),U.forEach(y),i=H(P),s=S(P,"P",{});var I=z(s);o=be(I,"Well done. You got a score of "),c=be(I,a),l=be(I,"!"),I.forEach(y),u=H(P),h=S(P,"BUTTON",{class:!0,"data-svelte-h":!0}),ae(h)!=="svelte-11qgm8t"&&(h.textContent=d),f=H(P),Xi(E.$$.fragment,P),P.forEach(y),this.h()},h(){r.a=null,C(t,"class","endmessage"),C(h,"class","primary"),C(e,"class","endscreen svelte-1xmzcs0")},m(v,P){M(v,e,P),T(e,t),r.m(n[7],t),T(e,i),T(e,s),T(s,o),T(s,c),T(s,l),T(e,u),T(e,h),T(e,f),Zi(E,e,null),p=!0,w||(b=qt(h,"click",n[15]),w=!0)},p(v,P){(!p||P[0]&128)&&r.p(v[7]),(!p||P[0]&8)&&a!==(a=v[10].format(v[3])+"")&&it(c,a)},i(v){p||(X(E.$$.fragment,v),v&&rt(()=>{p&&(m||(m=se(e,Qi,{},!0)),m.run(1))}),p=!0)},o(v){ie(E.$$.fragment,v),v&&(m||(m=se(e,Qi,{},!1)),m.run(0)),p=!1},d(v){v&&y(e),es(E),v&&m&&m.end(),w=!1,b()}}}function Rw(n){let e,t=n[6],r,i=n[0],s,o,a,c,l=zl(n),u=Hl(n);return{c(){e=R("div"),l.c(),r=q(),u.c(),o=q(),a=R("div"),this.h()},l(h){e=S(h,"DIV",{class:!0});var d=z(e);l.l(d),r=H(d),u.l(d),d.forEach(y),o=H(h),a=S(h,"DIV",{class:!0}),z(a).forEach(y),this.h()},h(){C(e,"class","flag-container svelte-1xmzcs0"),C(a,"class","message-container")},m(h,d){M(h,e,d),l.m(e,null),T(e,r),u.m(e,null),M(h,o,d),M(h,a,d),c=!0},p(h,d){d[0]&64&&Xt(t,t=h[6])?(ft(),ie(l,1,1,ge),mt(),l=zl(h),l.c(),X(l,1),l.m(e,r)):l.p(h,d),d[0]&1&&Xt(i,i=h[0])?(ft(),ie(u,1,1,ge),mt(),u=Hl(h),u.c(),X(u,1),u.m(e,null)):u.p(h,d)},i(h){c||(X(l),X(u),h&&rt(()=>{c&&(s||(s=se(e,ke,{},!0)),s.run(1))}),c=!0)},o(h){ie(l),ie(u),h&&(s||(s=se(e,ke,{},!1)),s.run(0)),c=!1},d(h){h&&(y(e),y(o),y(a)),l.d(h),u.d(h),h&&s&&s.end()}}}function zl(n){let e,t,r,i;return{c(){e=R("div"),t=Se(n[6]),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=z(e);t=be(o,n[6]),o.forEach(y),this.h()},h(){C(e,"class","message svelte-1xmzcs0")},m(s,o){M(s,e,o),T(e,t),i=!0},p(s,o){(!i||o[0]&64)&&it(t,s[6])},i(s){i||(s&&rt(()=>{i&&(r||(r=se(e,ke,{},!0)),r.run(1))}),i=!0)},o(s){s&&(r||(r=se(e,ke,{},!1)),r.run(0)),i=!1},d(s){s&&y(e),s&&r&&r.end()}}}function ql(n){let e,t,r,i;return{c(){e=R("img"),this.h()},l(s){e=S(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){tc(e.src,t="/flags/"+n[0]+".svg")||C(e,"src",t),C(e,"alt","flag"),C(e,"class","svelte-1xmzcs0")},m(s,o){M(s,e,o),i=!0},p(s,o){(!i||o[0]&1&&!tc(e.src,t="/flags/"+s[0]+".svg"))&&C(e,"src",t)},i(s){i||(s&&rt(()=>{i&&(r||(r=se(e,ke,{},!0)),r.run(1))}),i=!0)},o(s){s&&(r||(r=se(e,ke,{},!1)),r.run(0)),i=!1},d(s){s&&y(e),s&&r&&r.end()}}}function Hl(n){let e,t,r,i=n[0]&&ql(n);return{c(){e=R("div"),i&&i.c(),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=z(e);i&&i.l(o),o.forEach(y),this.h()},h(){C(e,"class","con")},m(s,o){M(s,e,o),i&&i.m(e,null),r=!0},p(s,o){s[0]?i?(i.p(s,o),o[0]&1&&X(i,1)):(i=ql(s),i.c(),X(i,1),i.m(e,null)):i&&(ft(),ie(i,1,1,()=>{i=null}),mt())},i(s){r||(X(i),s&&rt(()=>{r&&(t||(t=se(e,ke,{},!0)),t.run(1))}),r=!0)},o(s){ie(i),s&&(t||(t=se(e,ke,{},!1)),t.run(0)),r=!1},d(s){s&&y(e),i&&i.d(),s&&t&&t.end()}}}function Gl(n){let e,t,r;function i(o){n[16](o)}let s={};return n[1]!==void 0&&(s.submitted=n[1]),e=new pw({props:s}),Yf.push(()=>Zf(e,"submitted",i)),e.$on("click",n[17]),{c(){Yi(e.$$.fragment)},l(o){Xi(e.$$.fragment,o)},m(o,a){Zi(e,o,a),r=!0},p(o,a){const c={};!t&&a[0]&2&&(t=!0,c.submitted=o[1],Xf(()=>t=!1)),e.$set(c)},i(o){r||(X(e.$$.fragment,o),r=!0)},o(o){ie(e.$$.fragment,o),r=!1},d(o){es(e,o)}}}function Sw(n){let e,t,r,i='FlameFlags<span class="beta svelte-1xmzcs0">BETA</span>',s,o,a=n[11].format(n[2])+"",c,l,u,h,d=n[10].format(n[3])+"",f,E,m,p,w,b,v,P,U,I,le,ee;const we=[Aw,ww,Tw],N=[];function te(j,ne){return j[5]<0?0:j[5]>0?1:2}m=te(n),p=N[m]=we[m](n);const _e=[Rw,Cw],fe=[];function et(j,ne){return j[4]?1:0}v=et(n),P=fe[v]=_e[v](n);let Y=!n[4]&&Gl(n);return{c(){e=R("div"),t=R("div"),r=R("div"),r.innerHTML=i,s=q(),o=R("div"),c=Se(a),l=q(),u=R("div"),h=R("div"),f=Se(d),E=q(),p.c(),b=q(),P.c(),U=q(),I=R("div"),Y&&Y.c(),this.h()},l(j){e=S(j,"DIV",{class:!0});var ne=z(e);t=S(ne,"DIV",{class:!0});var B=z(t);r=S(B,"DIV",{class:!0,"data-svelte-h":!0}),ae(r)!=="svelte-r605k5"&&(r.innerHTML=i),s=H(B),o=S(B,"DIV",{class:!0});var W=z(o);c=be(W,a),W.forEach(y),l=H(B),u=S(B,"DIV",{class:!0});var ye=z(u);h=S(ye,"DIV",{class:!0});var Ae=z(h);f=be(Ae,d),Ae.forEach(y),E=H(ye),p.l(ye),ye.forEach(y),B.forEach(y),b=H(ne),P.l(ne),U=H(ne),I=S(ne,"DIV",{class:!0});var Ce=z(I);Y&&Y.l(Ce),Ce.forEach(y),ne.forEach(y),this.h()},h(){C(r,"class","title"),C(o,"class","time svelte-1xmzcs0"),C(h,"class","score svelte-1xmzcs0"),C(u,"class","score-container"),C(t,"class","header svelte-1xmzcs0"),C(I,"class","autoboxcontainer svelte-1xmzcs0"),C(e,"class","game svelte-1xmzcs0")},m(j,ne){M(j,e,ne),T(e,t),T(t,r),T(t,s),T(t,o),T(o,c),T(t,l),T(t,u),T(u,h),T(h,f),T(u,E),N[m].m(u,null),T(e,b),fe[v].m(e,null),T(e,U),T(e,I),Y&&Y.m(I,null),ee=!0},p(j,ne){(!ee||ne[0]&4)&&a!==(a=j[11].format(j[2])+"")&&it(c,a),(!ee||ne[0]&8)&&d!==(d=j[10].format(j[3])+"")&&it(f,d);let B=m;m=te(j),m===B?N[m].p(j,ne):(ft(),ie(N[B],1,1,()=>{N[B]=null}),mt(),p=N[m],p?p.p(j,ne):(p=N[m]=we[m](j),p.c()),X(p,1),p.m(u,null));let W=v;v=et(j),v===W?fe[v].p(j,ne):(ft(),ie(fe[W],1,1,()=>{fe[W]=null}),mt(),P=fe[v],P?P.p(j,ne):(P=fe[v]=_e[v](j),P.c()),X(P,1),P.m(e,U)),j[4]?Y&&(ft(),ie(Y,1,1,()=>{Y=null}),mt()):Y?(Y.p(j,ne),ne[0]&16&&X(Y,1)):(Y=Gl(j),Y.c(),X(Y,1),Y.m(I,null))},i(j){ee||(X(p),j&&rt(()=>{ee&&(w||(w=se(t,Qi,{},!0)),w.run(1))}),X(P),X(Y),j&&rt(()=>{ee&&(le||(le=se(e,ke,{},!0)),le.run(1))}),ee=!0)},o(j){ie(p),j&&(w||(w=se(t,Qi,{},!1)),w.run(0)),ie(P),ie(Y),j&&(le||(le=se(e,ke,{},!1)),le.run(0)),ee=!1},d(j){j&&y(e),N[m].d(),j&&w&&w.end(),fe[v].d(),Y&&Y.d(),j&&le&&le.end()}}}function bw(n,e,t){let{app:r}=e,i="blank",s,o=" ",a=45,c=0,l,u,h,d=!1,f=[],E=0,m="Click the box to start the game.",p=0,w="",b;const P=Zo().currentUser,U=qa(r);let I=wl(U,"gamesplayed");he(U,"gamesplayed",P.uid);function le(){I=wl(U,"gamesplayed"),console.log(I)}le(),dr.subscribe(B=>{t(14,b=B)}),Si.subscribe(B=>{});function ee(){var B=Math.floor(Math.random()*Wi.length);return Wi[B]}function we(){d||(t(4,d=!0),dr.set(!1),Jt(he(U,"gamesplayed",P.uid)).then(async B=>{if(B.exists()){console.log("Document data:",B.data());var W=B.data().gamesPlayed;await vt(he(I,P.uid),{gamesPlayed:W+1,uid:P.uid})}else await vt(he(I,P.uid),{gamesPlayed:1,uid:P.uid})}),Jt(he(U,"highscore",P.uid)).then(async B=>{if(B.exists()){console.log("Document data:",B.data());var W=B.data().highscore;c>W&&(await vt(he(U,"highscore",P.uid),{highscore:c,uid:P.uid}),t(7,w=w+"<br>New highscore!<br>"))}else await vt(he(U,"highscore",P.uid),{highscore:c,uid:P.uid})}),p>=f.length&&c>3e4&&Jt(he(U,"achievements",P.uid)).then(async B=>{B.exists()&&await vt(he(U,"achievements",P.uid),{flawless:!0,uid:P.uid})}))}function N(){t(6,m=" "),s=ee(),console.log(s),t(0,i=s.Code.toLowerCase())}function te(B){if(!(a>45)&&s){if(console.log(B.toLowerCase()),console.log(s.name.toLowerCase()),s.name.toLowerCase().replace(/\s/g,"")==B.toLowerCase().replace(/\s/g,"")||s.short.toLowerCase()==B.toLowerCase()){t(3,c=c+4e3),t(5,E=4e3),t(6,m=s.name+" was correct!");var W={Country:s.name,Answered:'"'+B+'"',"Correct?":"correct"};p++,f.push(W)}else if(B=="pass"){t(6,m="Passed. Correct answer was "+s.name+"!");var W={Country:s.name,Answered:"Pass","Correct?":"incorrect"};t(5,E=-1e3),t(3,c=c-1e3),f.push(W)}else{var W={Country:s.name,Answered:'"'+B+'"',"Correct?":"incorrect"};t(6,m="Incorrect. Correct answer was "+s.name+"!"),t(5,E=-1e3),t(3,c=c-1e3),f.push(W)}setTimeout(()=>t(5,E=0),1800),setTimeout(()=>t(6,m=" "),1800),t(0,i=""),setTimeout(N,1300),t(1,o=null)}}let _e=new Intl.NumberFormat("en-US",{minimumIntegerDigits:5,minimumFractionDigits:0}),fe=new Intl.NumberFormat("en-US",{minimumIntegerDigits:2,minimumFractionDigits:2,maximumFractionDigits:2});function et(){u=Date.now(),h=u+45e3,l=setInterval(()=>{Date.now()>=h+100||(Date.now()>=h?(we(),window.clearInterval(l),t(2,a=0)):t(2,a=(h-Date.now())/1e3))},10)}console.log(b);const Y=()=>Si.set(!1);function j(B){o=B,t(1,o)}const ne=()=>{et(),N()};return n.$$set=B=>{"app"in B&&t(13,r=B.app)},n.$$.update=()=>{n.$$.dirty[0]&1&&t(0,i),n.$$.dirty[0]&2&&o!=""&&te(o),n.$$.dirty[0]&16384&&(console.log(b),b==!0&&(et(),N()))},[i,o,a,c,d,E,m,w,f,N,_e,fe,et,r,b,Y,j,ne]}class Pw extends kr{constructor(e){super(),Dr(this,e,bw,Sw,Xt,{app:13},null,[-1,-1])}}function Kl(n){let e,t=`<div class="name svelte-k6xzue">The True OG</div>
                     First Ever Player`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-17xwnhb"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function Wl(n){let e,t=`<div class="name svelte-k6xzue">Flawless</div>
                    Get 100% accuracy in a game with over 30,000 points`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-18z7241"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function Ql(n){let e,t=`<div class="name svelte-k6xzue">High Points V</div>
                    Get a score of 50,000!`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1j096l2"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function Jl(n){let e,t=`<div class="name svelte-k6xzue">High Points IV</div>
                    Get a score of 40,000!`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-12rqdl0"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function Yl(n){let e,t=`<div class="name svelte-k6xzue">High Points III</div>
                    Get a score of 30,000!`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-13r67yd"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function Xl(n){let e,t=`<div class="name svelte-k6xzue">High Points II</div>
                    Get a score of 15,000!`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1i4lvvr"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function Zl(n){let e,t=`<div class="name svelte-k6xzue">High Points I</div>
                    Get a score of 5,000!`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-m5rirt"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function eu(n){let e,t=`<div class="name svelte-k6xzue">Grinder V</div>
                    Play 500 games`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-ekffa8"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function tu(n){let e,t=`<div class="name svelte-k6xzue">Grinder IV</div>
                    Play 250 games`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-x18mk3"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function nu(n){let e,t=`<div class="name svelte-k6xzue">Grinder III</div>
                    Play 100 games`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-7hvqt5"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function ru(n){let e,t=`<div class="name svelte-k6xzue">Grinder II</div>
                    Play 45 games`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1at6tn0"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function iu(n){let e,t=`<div class="name svelte-k6xzue">Grinder I</div>
                    Play 10 games`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-vf1qjn"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function su(n){let e,t=`<div class="name svelte-k6xzue">Beginnings</div>
                    Play your first game`;return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1ph32zg"&&(e.innerHTML=t),this.h()},h(){C(e,"class","badge svelte-k6xzue")},m(r,i){M(r,e,i)},d(r){r&&y(e)}}}function kw(n){let e,t,r="",i,s,o,a,c="Games played:",l,u,h,d,f,E="Highest Score:",m,p,w,b,v,P="Achievments",U,I,le,ee,we,N,te,_e,fe,et,Y,j,ne,B,W=n[0].firstplayer&&Kl(),ye=n[0].flawless&&Wl(),Ae=n[2]>=5e4&&Ql(),Ce=n[2]>=4e4&&Jl(),qe=n[2]>=3e4&&Yl(),He=n[2]>=15e3&&Xl(),Ge=n[2]>=1e4&&Zl(),Ke=n[1]>=500&&eu(),We=n[1]>=250&&tu(),Qe=n[1]>=100&&nu(),Je=n[1]>=45&&ru(),Ye=n[1]>=10&&iu(),Xe=n[1]>=1&&su();return{c(){e=R("div"),t=R("div"),t.innerHTML=r,i=q(),s=R("div"),o=R("div"),a=R("div"),a.textContent=c,l=q(),u=Se(n[1]),h=q(),d=R("div"),f=R("div"),f.textContent=E,m=q(),p=Se(n[2]),w=q(),b=R("div"),v=R("div"),v.textContent=P,U=q(),I=R("div"),W&&W.c(),le=q(),ye&&ye.c(),ee=q(),Ae&&Ae.c(),we=q(),Ce&&Ce.c(),N=q(),qe&&qe.c(),te=q(),He&&He.c(),_e=q(),Ge&&Ge.c(),fe=q(),Ke&&Ke.c(),et=q(),We&&We.c(),Y=q(),Qe&&Qe.c(),j=q(),Je&&Je.c(),ne=q(),Ye&&Ye.c(),B=q(),Xe&&Xe.c(),this.h()},l(pe){e=S(pe,"DIV",{class:!0});var ht=z(e);t=S(ht,"DIV",{class:!0,"data-svelte-h":!0}),ae(t)!=="svelte-lro2xp"&&(t.innerHTML=r),i=H(ht),s=S(ht,"DIV",{class:!0});var ei=z(s);o=S(ei,"DIV",{class:!0});var ti=z(o);a=S(ti,"DIV",{class:!0,"data-svelte-h":!0}),ae(a)!=="svelte-12x3025"&&(a.textContent=c),l=H(ti),u=be(ti,n[1]),ti.forEach(y),h=H(ei),d=S(ei,"DIV",{class:!0,"aria-disabled":!0});var ni=z(d);f=S(ni,"DIV",{class:!0,"data-svelte-h":!0}),ae(f)!=="svelte-ull7jr"&&(f.textContent=E),m=H(ni),p=be(ni,n[2]),ni.forEach(y),ei.forEach(y),w=H(ht),b=S(ht,"DIV",{class:!0});var ri=z(b);v=S(ri,"DIV",{class:!0,"data-svelte-h":!0}),ae(v)!=="svelte-5a2fo4"&&(v.textContent=P),U=H(ri),I=S(ri,"DIV",{class:!0});var re=z(I);W&&W.l(re),le=H(re),ye&&ye.l(re),ee=H(re),Ae&&Ae.l(re),we=H(re),Ce&&Ce.l(re),N=H(re),qe&&qe.l(re),te=H(re),He&&He.l(re),_e=H(re),Ge&&Ge.l(re),fe=H(re),Ke&&Ke.l(re),et=H(re),We&&We.l(re),Y=H(re),Qe&&Qe.l(re),j=H(re),Je&&Je.l(re),ne=H(re),Ye&&Ye.l(re),B=H(re),Xe&&Xe.l(re),re.forEach(y),ri.forEach(y),ht.forEach(y),this.h()},h(){C(t,"class","row-1 svelte-k6xzue"),C(a,"class","title svelte-k6xzue"),C(o,"class","scores"),C(f,"class","title svelte-k6xzue"),C(d,"class","games"),C(d,"aria-disabled","true"),C(s,"class","row-2 svelte-k6xzue"),C(v,"class","title svelte-k6xzue"),C(I,"class","achievments svelte-k6xzue"),C(b,"class","row-3 svelte-k6xzue"),C(e,"class","stats svelte-k6xzue")},m(pe,ht){M(pe,e,ht),T(e,t),T(e,i),T(e,s),T(s,o),T(o,a),T(o,l),T(o,u),T(s,h),T(s,d),T(d,f),T(d,m),T(d,p),T(e,w),T(e,b),T(b,v),T(b,U),T(b,I),W&&W.m(I,null),T(I,le),ye&&ye.m(I,null),T(I,ee),Ae&&Ae.m(I,null),T(I,we),Ce&&Ce.m(I,null),T(I,N),qe&&qe.m(I,null),T(I,te),He&&He.m(I,null),T(I,_e),Ge&&Ge.m(I,null),T(I,fe),Ke&&Ke.m(I,null),T(I,et),We&&We.m(I,null),T(I,Y),Qe&&Qe.m(I,null),T(I,j),Je&&Je.m(I,null),T(I,ne),Ye&&Ye.m(I,null),T(I,B),Xe&&Xe.m(I,null)},p(pe,[ht]){ht&2&&it(u,pe[1]),ht&4&&it(p,pe[2]),pe[0].firstplayer?W||(W=Kl(),W.c(),W.m(I,le)):W&&(W.d(1),W=null),pe[0].flawless?ye||(ye=Wl(),ye.c(),ye.m(I,ee)):ye&&(ye.d(1),ye=null),pe[2]>=5e4?Ae||(Ae=Ql(),Ae.c(),Ae.m(I,we)):Ae&&(Ae.d(1),Ae=null),pe[2]>=4e4?Ce||(Ce=Jl(),Ce.c(),Ce.m(I,N)):Ce&&(Ce.d(1),Ce=null),pe[2]>=3e4?qe||(qe=Yl(),qe.c(),qe.m(I,te)):qe&&(qe.d(1),qe=null),pe[2]>=15e3?He||(He=Xl(),He.c(),He.m(I,_e)):He&&(He.d(1),He=null),pe[2]>=1e4?Ge||(Ge=Zl(),Ge.c(),Ge.m(I,fe)):Ge&&(Ge.d(1),Ge=null),pe[1]>=500?Ke||(Ke=eu(),Ke.c(),Ke.m(I,et)):Ke&&(Ke.d(1),Ke=null),pe[1]>=250?We||(We=tu(),We.c(),We.m(I,Y)):We&&(We.d(1),We=null),pe[1]>=100?Qe||(Qe=nu(),Qe.c(),Qe.m(I,j)):Qe&&(Qe.d(1),Qe=null),pe[1]>=45?Je||(Je=ru(),Je.c(),Je.m(I,ne)):Je&&(Je.d(1),Je=null),pe[1]>=10?Ye||(Ye=iu(),Ye.c(),Ye.m(I,B)):Ye&&(Ye.d(1),Ye=null),pe[1]>=1?Xe||(Xe=su(),Xe.c(),Xe.m(I,null)):Xe&&(Xe.d(1),Xe=null)},i:ge,o:ge,d(pe){pe&&y(e),W&&W.d(),ye&&ye.d(),Ae&&Ae.d(),Ce&&Ce.d(),qe&&qe.d(),He&&He.d(),Ge&&Ge.d(),Ke&&Ke.d(),We&&We.d(),Qe&&Qe.d(),Je&&Je.d(),Ye&&Ye.d(),Xe&&Xe.d()}}}function Dw(n,e,t){let{app:r}=e;const s=Zo().currentUser,o=qa(r);let a="",c="",l=[];return Ti(he(o,"gamesplayed",s.uid),()=>{Jt(he(o,"gamesplayed",s.uid)).then(async u=>{u.exists()?t(1,a=u.data().gamesPlayed):(await vt(he(o,"gamesplayed",s.uid),{gamesPlayed:0,uid:s.uid}),t(1,a=0))})}),Ti(he(o,"highscore",s.uid),()=>{Jt(he(o,"highscore",s.uid)).then(async u=>{u.exists()?t(2,c=u.data().highscore):(await vt(he(o,"highscore",s.uid),{highscore:0,uid:s.uid}),t(2,c=0))})}),Ti(he(o,"achievements",s.uid),()=>{Jt(he(o,"achievements",s.uid)).then(async u=>{u.exists()?t(0,l=u.data()):(await vt(he(o,"achievements",s.uid),{achievments:[],uid:s.uid}),t(0,l=[]))}),console.log(l)}),n.$$set=u=>{"app"in u&&t(3,r=u.app)},n.$$.update=()=>{n.$$.dirty&1&&t(0,l)},[l,a,c,r]}class Vw extends kr{constructor(e){super(),Dr(this,e,Dw,kw,Xt,{app:3})}}function Nw(n){let e=!n[2],t,r,i=ou(n);return{c(){i.c(),t=wi()},l(s){i.l(s),t=wi()},m(s,o){i.m(s,o),M(s,t,o),r=!0},p(s,o){o&4&&Xt(e,e=!s[2])?(ft(),ie(i,1,1,ge),mt(),i=ou(s),i.c(),X(i,1),i.m(t.parentNode,t)):i.p(s,o)},i(s){r||(X(i),r=!0)},o(s){ie(i),r=!1},d(s){s&&y(t),i.d(s)}}}function Mw(n){let e,t,r,i='FlameFlags<span class="beta svelte-16z4wef">BETA</span>',s,o,a,c,l,u,h,d,f,E,m,p,w,b,v=n[1]&&au(n);const P=[Lw,Ow],U=[];function I(N,te){return N[1]?1:0}h=I(n),d=U[h]=P[h](n);const le=[Fw,xw],ee=[];function we(N,te){return N[1]?0:1}return m=we(n),p=ee[m]=le[m](n),{c(){e=R("div"),t=R("div"),r=R("div"),r.innerHTML=i,s=q(),o=R("div"),a=q(),c=R("div"),v&&v.c(),l=q(),u=R("div"),d.c(),f=q(),E=R("div"),p.c(),this.h()},l(N){e=S(N,"DIV",{class:!0});var te=z(e);t=S(te,"DIV",{class:!0});var _e=z(t);r=S(_e,"DIV",{class:!0,"data-svelte-h":!0}),ae(r)!=="svelte-1vtnje"&&(r.innerHTML=i),s=H(_e),o=S(_e,"DIV",{class:!0}),z(o).forEach(y),a=H(_e),c=S(_e,"DIV",{class:!0});var fe=z(c);v&&v.l(fe),fe.forEach(y),_e.forEach(y),l=H(te),u=S(te,"DIV",{class:!0});var et=z(u);d.l(et),et.forEach(y),f=H(te),E=S(te,"DIV",{class:!0});var Y=z(E);p.l(Y),Y.forEach(y),te.forEach(y),this.h()},h(){C(r,"class","title"),C(o,"class","acc svelte-16z4wef"),C(c,"class","acc svelte-16z4wef"),C(t,"class","header"),C(u,"class","buttons svelte-16z4wef"),C(E,"class","stats svelte-16z4wef"),C(e,"class","home")},m(N,te){M(N,e,te),T(e,t),T(t,r),T(t,s),T(t,o),T(t,a),T(t,c),v&&v.m(c,null),T(e,l),T(e,u),U[h].m(u,null),T(e,f),T(e,E),ee[m].m(E,null),b=!0},p(N,te){N[1]?v?(v.p(N,te),te&2&&X(v,1)):(v=au(N),v.c(),X(v,1),v.m(c,null)):v&&(ft(),ie(v,1,1,()=>{v=null}),mt());let _e=h;h=I(N),h===_e?U[h].p(N,te):(ft(),ie(U[_e],1,1,()=>{U[_e]=null}),mt(),d=U[h],d?d.p(N,te):(d=U[h]=P[h](N),d.c()),X(d,1),d.m(u,null));let fe=m;m=we(N),m===fe?ee[m].p(N,te):(ft(),ie(ee[fe],1,1,()=>{ee[fe]=null}),mt(),p=ee[m],p?p.p(N,te):(p=ee[m]=le[m](N),p.c()),X(p,1),p.m(E,null))},i(N){b||(X(v),X(d),X(p),N&&rt(()=>{b&&(w||(w=se(e,ke,{},!0)),w.run(1))}),b=!0)},o(N){ie(v),ie(d),ie(p),N&&(w||(w=se(e,ke,{},!1)),w.run(0)),b=!1},d(N){N&&y(e),v&&v.d(),U[h].d(),ee[m].d(),N&&w&&w.end()}}}function ou(n){let e,t,r,i;return t=new Pw({props:{app:n[3]}}),{c(){e=R("div"),Yi(t.$$.fragment),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=z(e);Xi(t.$$.fragment,o),o.forEach(y),this.h()},h(){C(e,"class","container svelte-16z4wef")},m(s,o){M(s,e,o),Zi(t,e,null),i=!0},p:ge,i(s){i||(X(t.$$.fragment,s),s&&rt(()=>{i&&(r||(r=se(e,ke,{},!0)),r.run(1))}),i=!0)},o(s){ie(t.$$.fragment,s),s&&(r||(r=se(e,ke,{},!1)),r.run(0)),i=!1},d(s){s&&y(e),es(t),s&&r&&r.end()}}}function au(n){let e,t='<i class="fa-solid fa-gear svelte-16z4wef"></i>',r,i,s="Sign Out",o,a,c,l;return{c(){e=R("span"),e.innerHTML=t,r=q(),i=R("span"),i.textContent=s,this.h()},l(u){e=S(u,"SPAN",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-tu1to"&&(e.innerHTML=t),r=H(u),i=S(u,"SPAN",{role:!0,class:!0,"data-svelte-h":!0}),ae(i)!=="svelte-amokhn"&&(i.textContent=s),this.h()},h(){C(e,"class","settingsbtn svelte-16z4wef"),C(i,"role","button"),C(i,"class","secondary signout svelte-16z4wef")},m(u,h){M(u,e,h),M(u,r,h),M(u,i,h),a=!0,c||(l=[qt(e,"click",n[7]),qt(i,"click",n[8])],c=!0)},p:ge,i(u){a||(u&&rt(()=>{a&&(o||(o=se(i,ke,{},!0)),o.run(1))}),a=!0)},o(u){u&&(o||(o=se(i,ke,{},!1)),o.run(0)),a=!1},d(u){u&&(y(e),y(r),y(i)),u&&o&&o.end(),c=!1,cu(l)}}}function Ow(n){let e,t,r,i,s,o,a;return{c(){e=R("button"),t=Se("Play as "),r=Se(n[0]),this.h()},l(c){e=S(c,"BUTTON",{class:!0});var l=z(e);t=be(l,"Play as "),r=be(l,n[0]),l.forEach(y),this.h()},h(){C(e,"class","primary svelte-16z4wef")},m(c,l){M(c,e,l),T(e,t),T(e,r),s=!0,o||(a=qt(e,"click",n[10]),o=!0)},p(c,l){(!s||l&1)&&it(r,c[0])},i(c){s||(c&&rt(()=>{s&&(i||(i=se(e,ke,{},!0)),i.run(1))}),s=!0)},o(c){c&&(i||(i=se(e,ke,{},!1)),i.run(0)),s=!1},d(c){c&&y(e),c&&i&&i.end(),o=!1,a()}}}function Lw(n){let e,t="Sign In with Google",r,i;return{c(){e=R("button"),e.textContent=t,this.h()},l(s){e=S(s,"BUTTON",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1oj5kid"&&(e.textContent=t),this.h()},h(){C(e,"class","primary svelte-16z4wef")},m(s,o){M(s,e,o),r||(i=qt(e,"click",n[9]),r=!0)},p:ge,i:ge,o:ge,d(s){s&&y(e),r=!1,i()}}}function xw(n){let e,t="Your stats:",r;return{c(){e=R("h3"),e.textContent=t,r=Se(`
					Login to see your stats`),this.h()},l(i){e=S(i,"H3",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1p8jh34"&&(e.textContent=t),r=be(i,`
					Login to see your stats`),this.h()},h(){C(e,"class","svelte-16z4wef")},m(i,s){M(i,e,s),M(i,r,s)},p:ge,i:ge,o:ge,d(i){i&&(y(e),y(r))}}}function Fw(n){let e,t="Your Stats:",r,i,s;return i=new Vw({props:{app:n[3]}}),{c(){e=R("h3"),e.textContent=t,r=q(),Yi(i.$$.fragment),this.h()},l(o){e=S(o,"H3",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-ofvq3k"&&(e.textContent=t),r=H(o),Xi(i.$$.fragment,o),this.h()},h(){C(e,"class","svelte-16z4wef")},m(o,a){M(o,e,a),M(o,r,a),Zi(i,o,a),s=!0},p:ge,i(o){s||(X(i.$$.fragment,o),s=!0)},o(o){ie(i.$$.fragment,o),s=!1},d(o){o&&(y(e),y(r)),es(i,o)}}}function Uw(n){let e,t,r,i,s,o;const a=[Mw,Nw],c=[];function l(u,h){return u[2]?1:0}return i=l(n),s=c[i]=a[i](n),{c(){e=R("meta"),t=q(),r=R("section"),s.c(),this.h()},l(u){const h=nm("svelte-1x6f9kh",document.head);e=S(h,"META",{name:!0,content:!0}),h.forEach(y),t=H(u),r=S(u,"SECTION",{});var d=z(r);s.l(d),d.forEach(y),this.h()},h(){document.title="Flagz",C(e,"name","description"),C(e,"content","The best way to learn flags")},m(u,h){T(document.head,e),M(u,t,h),M(u,r,h),c[i].m(r,null),o=!0},p(u,[h]){let d=i;i=l(u),i===d?c[i].p(u,h):(ft(),ie(c[d],1,1,()=>{c[d]=null}),mt(),s=c[i],s?s.p(u,h):(s=c[i]=a[i](u),s.c()),X(s,1),s.m(r,null))},i(u){o||(X(s),o=!0)},o(u){ie(s),o=!1},d(u){u&&(y(t),y(r)),y(e),c[i].d()}}}function Bw(n,e,t){const r={apiKey:"AIzaSyCDeBiCu2q9_RRurOI-AtgNh3LN-QE25EA",authDomain:"flagzisaacboor.firebaseapp.com",projectId:"flagzisaacboor",storageBucket:"flagzisaacboor.appspot.com",messagingSenderId:"133359321350",appId:"1:133359321350:web:5edf48926518a8ddc19e87",measurementId:"G-KEPZWD43M0"};let i;const s=Iu(r),o=qa(s),a=Zo(s),c=new Pt;let l=!1,u;a.currentUser&&(l=!0,u=a.currentUser.email.split("@")[0]);function h(){Si.set(!0)}let d,f;dr.subscribe(b=>{d=b}),Si.subscribe(b=>{t(2,f=b)});function E(){var b=prompt("Enter new username: ");b==null||b==""||b==null||Jt(he(o,"username",i.uid)).then(async v=>{await vt(he(o,"username",i.uid),{username:b})})}console.log(d),console.log(dr);const m=()=>{a.signOut()},p=()=>{qg(a,c)},w=()=>{h()};return n.$$.update=()=>{n.$$.dirty&1&&t(0,u)},a.onAuthStateChanged(b=>{b?(t(1,l=!0),t(0,u=b.email.split("@")[0]),Ti(he(o,"username",b.uid),()=>{Jt(he(o,"username",b.uid)).then(async v=>{v.exists()?t(0,u=v.data().username):(await vt(he(o,"username",b.uid),{username:b.email.split("@")[0]}),b.email.split("@")[0])})})):t(1,l=!1),i=b}),[u,l,f,s,a,c,h,E,m,p,w]}class Ww extends kr{constructor(e){super(),Dr(this,e,Bw,Uw,Xt,{})}}export{Ww as component,qw as universal};
