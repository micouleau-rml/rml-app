const CACHE_NAME="rml-gouttiere-v66-1";
const CORE=["./","./index.html"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE).catch(()=>{})))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.mode==="navigate"){e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const x=r.clone();caches.open(CACHE_NAME).then(c=>c.put("./index.html",x)).catch(()=>{});return r}).catch(()=>caches.match("./index.html")));return;}e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
