importScripts('OneSignalSDKWorker.js');

const CACHE = 'fonefan-v10';

/* Sin skipWaiting ni clients.claim: una versión nueva se aplica en la próxima visita,
   sin reemplazar la página mientras el usuario la está viendo. */
self.addEventListener('install', () => {});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);

  if (
    req.method !== 'GET' ||
    url.origin !== self.location.origin ||
    url.pathname.includes('OneSignal') ||
    url.pathname.endsWith('sw.js')
  ) {
    return;
  }

  e.respondWith(
    fetch(new Request(req, { cache: 'no-cache' }))
      .then(res => {
        if (res.ok) {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put(req, copia));
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});