/* RML GOUTTIERE ALU — Service Worker V64.5 */
const CACHE_NAME='rml-gouttiere-v64-5';
const CORE=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE).catch(()=>{})))});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const n of await caches.keys())if(n!==CACHE_NAME)await caches.delete(n);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith((async()=>{try{const r=await fetch(e.request,{cache:'no-store'});const c=await caches.open(CACHE_NAME);c.put(e.request,r.clone()).catch(()=>{});return r}catch(err){return(await caches.match(e.request))||(e.request.mode==='navigate'?await caches.match('./index.html'):null)||Response.error()}})())});
