try{self["workbox:core:6.5.3"]&&_()}catch{}const j=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},B=j;class h extends Error{constructor(e,t){const n=B(e,t);super(n),this.name=e,this.details=t}}try{self["workbox:routing:6.5.3"]&&_()}catch{}const H="GET",T=s=>s&&typeof s=="object"?s:{handle:s},q=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),"");class ${constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const c=new Request(...a);return this.handleRequest({request:c,event:e})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const a=n.origin===location.origin,{params:c,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:n});let i=r&&r.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let l;try{l=i.handle({url:n,request:e,event:t,params:c})}catch(u){l=Promise.reject(u)}const p=r&&r.catchHandler;return l instanceof Promise&&(this._catchHandler||p)&&(l=l.catch(async u=>{if(p)try{return await p.handle({url:n,request:e,event:t,params:c})}catch(M){M instanceof Error&&(u=M)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw u})),l}findMatchingRoute({url:e,sameOrigin:t,request:n,event:a}){const c=this._routes.get(n.method)||[];for(const r of c){let i;const o=r.match({url:e,sameOrigin:t,request:n,event:a});if(o)return i=o,(Array.isArray(i)&&i.length===0||o.constructor===Object&&Object.keys(o).length===0||typeof o=="boolean")&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t=H){this._defaultHandlerMap.set(t,T(e))}setCatchHandler(e){this._catchHandler=T(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new h("unregister-route-route-not-registered")}}let g;const A=()=>(g||(g=new $,g.addFetchListener(),g.addCacheListener()),g);try{self["workbox:strategies:6.5.3"]&&_()}catch{}const V={cacheWillUpdate:async({response:s})=>s.status===200||s.status===0?s:null},f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},b=s=>[f.prefix,s,f.suffix].filter(e=>e&&e.length>0).join("-"),G=s=>{for(const e of Object.keys(f))s(e)},K={updateDetails:s=>{G(e=>{typeof s[e]=="string"&&(f[e]=s[e])})},getGoogleAnalyticsName:s=>s||b(f.googleAnalytics),getPrecacheName:s=>s||b(f.precache),getPrefix:()=>f.prefix,getRuntimeName:s=>s||b(f.runtime),getSuffix:()=>f.suffix};function E(s,e){const t=new URL(s);for(const n of e)t.searchParams.delete(n);return t.href}async function Q(s,e,t,n){const a=E(e.url,t);if(e.url===a)return s.match(e,n);const c=Object.assign(Object.assign({},n),{ignoreSearch:!0}),r=await s.keys(e,c);for(const i of r){const o=E(i.url,t);if(a===o)return s.match(i,n)}}class z{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const J=new Set;async function X(){for(const s of J)await s()}function Y(s){return new Promise(e=>setTimeout(e,s))}function m(s){return typeof s=="string"?new Request(s):s}class Z{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new z,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=m(e);if(n.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const r=await t.preloadResponse;if(r)return r}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const r of this.iterateCallbacks("requestWillFetch"))n=await r({request:n.clone(),event:t})}catch(r){if(r instanceof Error)throw new h("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const c=n.clone();try{let r;r=await fetch(n,n.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const i of this.iterateCallbacks("fetchDidSucceed"))r=await i({event:t,request:c,response:r});return r}catch(r){throw a&&await this.runCallbacks("fetchDidFail",{error:r,event:t,originalRequest:a.clone(),request:c.clone()}),r}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=m(e);let n;const{cacheName:a,matchOptions:c}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},c),{cacheName:a});n=await caches.match(r,i);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await o({cacheName:a,matchOptions:c,cachedResponse:n,request:r,event:this.event})||void 0;return n}async cachePut(e,t){const n=m(e);await Y(0);const a=await this.getCacheKey(n,"write");if(!t)throw new h("cache-put-with-no-response",{url:q(a.url)});const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:r,matchOptions:i}=this._strategy,o=await self.caches.open(r),l=this.hasCallback("cacheDidUpdate"),p=l?await Q(o,a.clone(),["__WB_REVISION__"],i):null;try{await o.put(a,l?c.clone():c)}catch(u){if(u instanceof Error)throw u.name==="QuotaExceededError"&&await X(),u}for(const u of this.iterateCallbacks("cacheDidUpdate"))await u({cacheName:r,oldResponse:p,newResponse:c.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let a=e;for(const c of this.iterateCallbacks("cacheKeyWillBeUsed"))a=m(await c({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[n]=a}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const n=this._pluginStateMap.get(t);yield c=>{const r=Object.assign(Object.assign({},c),{state:n});return t[e](r)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&t.status!==200&&(t=void 0),t}}class W{constructor(e={}){this.cacheName=K.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,c=new Z(this,{event:t,request:n,params:a}),r=this._getResponse(c,n,t),i=this._awaitComplete(r,c,n,t);return[r,i]}async _getResponse(e,t,n){await e.runCallbacks("handlerWillStart",{event:n,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new h("no-response",{url:t.url})}catch(c){if(c instanceof Error){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:c,event:n,request:t}),a)break}if(!a)throw c}for(const c of e.iterateCallbacks("handlerWillRespond"))a=await c({event:n,request:t,response:a});return a}async _awaitComplete(e,t,n,a){let c,r;try{c=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:a,request:n,response:c}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:n,response:c,error:r}),t.destroy(),r)throw r}}class ee extends W{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(V)}async _handle(e,t){const n=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(n);let a=await t.cacheMatch(e),c;if(!a)try{a=await n}catch(r){r instanceof Error&&(c=r)}if(!a)throw new h("no-response",{url:e.url,error:c});return a}}try{self["workbox:cacheable-response:6.5.3"]&&_()}catch{}const te=(s,e)=>e.some(t=>s instanceof t);let x,O;function se(){return x||(x=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ne(){return O||(O=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S=new WeakMap,U=new WeakMap,F=new WeakMap,R=new WeakMap,D=new WeakMap;function ae(s){const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("success",c),s.removeEventListener("error",r)},c=()=>{t(w(s.result)),a()},r=()=>{n(s.error),a()};s.addEventListener("success",c),s.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&S.set(t,s)}).catch(()=>{}),D.set(e,s),e}function re(s){if(U.has(s))return;const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",r),s.removeEventListener("abort",r)},c=()=>{t(),a()},r=()=>{n(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",c),s.addEventListener("error",r),s.addEventListener("abort",r)});U.set(s,e)}let I={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return U.get(s);if(e==="objectStoreNames")return s.objectStoreNames||F.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return w(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function ce(s){I=s(I)}function ie(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(C(this),e,...t);return F.set(n,e.sort?e.sort():[e]),w(n)}:ne().includes(s)?function(...e){return s.apply(C(this),e),w(S.get(this))}:function(...e){return w(s.apply(C(this),e))}}function oe(s){return typeof s=="function"?ie(s):(s instanceof IDBTransaction&&re(s),te(s,se())?new Proxy(s,I):s)}function w(s){if(s instanceof IDBRequest)return ae(s);if(R.has(s))return R.get(s);const e=oe(s);return e!==s&&(R.set(s,e),D.set(e,s)),e}const C=s=>D.get(s),le=["get","getKey","getAll","getAllKeys","count"],he=["put","add","delete","clear"],k=new Map;function N(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(k.get(e))return k.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=he.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||le.includes(t)))return;const c=async function(r,...i){const o=this.transaction(r,a?"readwrite":"readonly");let l=o.store;return n&&(l=l.index(i.shift())),(await Promise.all([l[t](...i),a&&o.done]))[0]};return k.set(e,c),c}ce(s=>({...s,get:(e,t,n)=>N(e,t)||s.get(e,t,n),has:(e,t)=>!!N(e,t)||s.has(e,t)}));try{self["workbox:expiration:6.5.3"]&&_()}catch{}try{self["workbox:recipes:6.5.3"]&&_()}catch{}function ue(s){A().setCatchHandler(s)}function v(s,e){const t=e();return s.waitUntil(t),t}try{self["workbox:precaching:6.5.3"]&&_()}catch{}const fe="__WB_REVISION__";function de(s){if(!s)throw new h("add-to-cache-list-unexpected-type",{entry:s});if(typeof s=="string"){const c=new URL(s,location.href);return{cacheKey:c.href,url:c.href}}const{revision:e,url:t}=s;if(!t)throw new h("add-to-cache-list-unexpected-type",{entry:s});if(!e){const c=new URL(t,location.href);return{cacheKey:c.href,url:c.href}}const n=new URL(t,location.href),a=new URL(t,location.href);return n.searchParams.set(fe,e),{cacheKey:n.href,url:a.href}}class pe{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;n?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return n}}}class ge{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:n})=>{const a=(n==null?void 0:n.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}let y;function ye(){if(y===void 0){const s=new Response("");if("body"in s)try{new Response(s.body),y=!0}catch{y=!1}y=!1}return y}async function we(s,e){let t=null;if(s.url&&(t=new URL(s.url).origin),t!==self.location.origin)throw new h("cross-origin-copy-response",{origin:t});const n=s.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},c=e?e(a):a,r=ye()?n.body:await n.blob();return new Response(r,c)}class d extends W{constructor(e={}){e.cacheName=K.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(d.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const a=t.params||{};if(this._fallbackToNetwork){const c=a.integrity,r=e.integrity,i=!r||r===c;n=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?r||c:void 0})),c&&i&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}else throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new h("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,a]of this.plugins.entries())a!==d.copyRedirectedCacheableResponsesPlugin&&(a===d.defaultPrecacheCacheabilityPlugin&&(e=n),a.cacheWillUpdate&&t++);t===0?this.plugins.push(d.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}d.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:s}){return!s||s.status>=400?null:s}};d.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:s}){return s.redirected?await we(s):s}};class me{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new d({cacheName:K.getPrecacheName(e),plugins:[...t,new ge({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){typeof n=="string"?t.push(n):n&&n.revision===void 0&&t.push(n.url);const{cacheKey:a,url:c}=de(n),r=typeof n!="string"&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(c)&&this._urlsToCacheKeys.get(c)!==a)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(c),secondEntry:a});if(typeof n!="string"&&n.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:c});this._cacheKeysToIntegrities.set(a,n.integrity)}if(this._urlsToCacheKeys.set(c,a),this._urlsToCacheModes.set(c,r),t.length>0){const i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return v(e,async()=>{const t=new pe;this.strategy.plugins.push(t);for(const[c,r]of this._urlsToCacheKeys){const i=this._cacheKeysToIntegrities.get(r),o=this._urlsToCacheModes.get(c),l=new Request(c,{integrity:i,cache:o,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:l,event:e}))}const{updatedURLs:n,notUpdatedURLs:a}=t;return{updatedURLs:n,notUpdatedURLs:a}})}activate(e){return v(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),n=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),c=[];for(const r of n)a.has(r.url)||(await t.delete(r),c.push(r.url));return{deletedURLs:c}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let P;const be=()=>(P||(P=new me),P);function L(s){return be().matchPrecache(s)}function Re(s={}){const e=s.pageFallback||"offline.html",t=s.imageFallback||!1,n=s.fontFallback||!1;self.addEventListener("install",c=>{const r=[e];t&&r.push(t),n&&r.push(n),c.waitUntil(self.caches.open("workbox-offline-fallbacks").then(i=>i.addAll(r)))}),ue(async c=>{const r=c.request.destination,i=await self.caches.open("workbox-offline-fallbacks");return r==="document"?await L(e)||await i.match(e)||Response.error():r==="image"&&t!==!1?await L(t)||await i.match(t)||Response.error():r==="font"&&n!==!1&&(await L(n)||await i.match(n))||Response.error()})}function Ce(s){A().setDefaultHandler(s)}const _e=[{"revision":null,"url":"assets/index-22eae1ea.css"},{"revision":null,"url":"assets/index-617ea2c6.js"},{"revision":null,"url":"assets/workbox-window.prod.es5-295a6886.js"},{"revision":"238d923ab6d394260d79edcfb9024641","url":"index.html"},{"revision":"a003ba854e1732c1d4a092b796f322f1","url":"offline.html"},{"revision":"d714963bdcfbf8146489804fa260be01","url":"./images/pwa/icon-maskable.png"},{"revision":"786eaaba55a6b62ecaf32cde1bf26873","url":"./images/pwa/icon-72x72.png"},{"revision":"a5437727776908ffc3d7936b1b28161a","url":"./images/pwa/icon-96x96.png"},{"revision":"abb293e81af9411c28587b747a3e76aa","url":"./images/pwa/icon-128x128.png"},{"revision":"9024e4ee398281b05e092bffd80c9642","url":"./images/pwa/icon-144x144.png"},{"revision":"a67f953bad219821ed6ef2eef8df5ca1","url":"./images/pwa/icon-152x152.png"},{"revision":"18d9668e052ec0ccdb5c53ebf6c30f9a","url":"./images/pwa/icon-192x192.png"},{"revision":"48527e6afb57c06834b4c9ca575f9180","url":"./images/pwa/icon-384x384.png"},{"revision":"d714963bdcfbf8146489804fa260be01","url":"./images/pwa/icon-512x512.png"},{"revision":"175d5fa5ef671edc853124d191c560d6","url":"manifest.webmanifest"}];console.log(_e);Ce(new ee);Re({pageFallback:"./offline.html"});
