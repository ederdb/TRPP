// Service worker do TRPP: guarda os arquivos no aparelho para funcionar sem internet.
// Ao publicar uma nova versão, altere o número abaixo para forçar a renovação do cache.
const VERSAO = 'trpp-pwa-v1.0.1';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Usa a cópia guardada (rápido e offline) e, havendo internet, atualiza em segundo plano para a próxima abertura.
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(guardado => {
    const rede = fetch(r).then(res => {
      if (res && res.ok) { const copia = res.clone(); caches.open(VERSAO).then(c => c.put(r, copia)); }
      return res;
    }).catch(() => undefined);
    return guardado || rede.then(res => res || caches.match('./index.html'));
  }));
});
