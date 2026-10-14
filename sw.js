// Cambiá el número cada vez que quieras forzar una limpieza total de la caché
const CACHE = 'fonefan-v2';

// Se instala y toma control de inmediato, sin esperar a cerrar la app
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Red primero (sin caché HTTP); si no hay conexión, usa la copia guardada
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);

  // Solo guardamos archivos de tu propio sitio. Las APIs de F1 y las fuentes van directo a la red.
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

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