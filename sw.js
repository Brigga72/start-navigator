const CACHE='cruise-nav-v02812';
const CORE=['./','./index.html','./styles.css?v=02812','./app.js?v=02812','./manifest.webmanifest','./icon-192.png','./icon-512.png','./version.json','./migrate.html','./assets/deck7-forward.png',
  './assets/deck15-aft.png',
  './assets/deck15-forward.png',
  './assets/deck8-aft.png',
  './assets/deck8-forward.png',
  './assets/deck6-aft.png',
  './assets/deck6-forward.png',
  './assets/deck5-aft.png',
  './assets/deck5-forward.png','./assets/deck16-forward.png','./assets/deck16-thrill.png','./assets/verified-route-deck7-7456-elevators.png','./assets/verified-route-deck16-elevators-basecamp.png'];
self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('cruise-nav-')||k.startsWith('star-nav-'))&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('message', event=>{ if(event.data?.type==='SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  const isPage=event.request.mode==='navigate' || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/start-navigator/');
  const isVersion=url.pathname.endsWith('/version.json');
  if(isPage || isVersion){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(resp=>{
      const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{}); return resp;
    }).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{
    const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{}); return resp;
  })));
});
