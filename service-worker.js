/* RML GOUTTIERE ALU — Service Worker V64.1 */
const CACHE_NAME = 'rml-gouttiere-v64-1';
const CORE = ['./', './index.html', './manifest.json'];
self.addEventListener('install', event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE).catch(() => {}))); });
self.addEventListener('activate', event => { event.waitUntil((async () => { const names = await caches.keys(); await Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))); await self.clients.claim(); })()); });
self.addEventListener('fetch', event => { const req=event.request; if(req.method!=='GET') return; event.respondWith((async()=>{ try{ const fresh=await fetch(req,{cache:'no-store'}); const cache=await caches.open(CACHE_NAME); cache.put(req,fresh.clone()).catch(()=>{}); return fresh; }catch(e){ return (await caches.match(req)) || (req.mode==='navigate' ? (await caches.match('./index.html')) : null) || Response.error(); } })()); });
