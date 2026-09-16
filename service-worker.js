const CACHE_NAME="rml-gouttiere-v66";
const CORE=["./","./index.html","./manifest.json","./header-logo.png","./icon-command.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE).catch(()=>{})))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.mode==="navigate"){e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(CACHE_NAME).then(c=>c.put("./index.html",x)).catch(()=>{});return r}).catch(()=>caches.match("./index.html")));return;}e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,x)).catch(()=>{});return r}).catch(()=>caches.match(e.request)))});
