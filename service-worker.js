const CACHE_NAME='rml-gouttiere-v64-8';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
