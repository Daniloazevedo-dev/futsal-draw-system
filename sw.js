const CACHE_NAME = 'futsal-draw-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './dados/jogadores.json',
  './manifest.json'
];

// Instalação - cachear recursos essenciais
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Cacheando recursos');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Instalação concluída');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Erro na instalação:', error);
      })
  );
});

// Ativação - limpar caches antigos
self.addEventListener('activate', event => {
  console.log('[Service Worker] Ativando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[Service Worker] Ativação concluída');
      return self.clients.claim();
    })
  );
});

// Fetch - estratégia Network First com fallback para Cache
self.addEventListener('fetch', event => {
  // Ignorar requisições que não são HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Ignorar requisições POST, PUT, DELETE (apenas GET)
  if (event.request.method !== 'GET') {
    return;
  }

  // Estratégia diferente para recursos externos (CDN)
  if (event.request.url.includes('cdn.tailwindcss.com') || 
      event.request.url.includes('cdnjs.cloudflare.com')) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Retornar do cache, mas atualizar em background
            fetch(event.request).then(response => {
              if (response && response.status === 200) {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, response);
                });
              }
            }).catch(() => {});
            return cachedResponse;
          }
          
          // Se não estiver no cache, buscar da rede
          return fetch(event.request)
            .then(response => {
              if (response && response.status === 200) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, responseToCache);
                });
              }
              return response;
            })
            .catch(() => {
              // Se falhar, retornar resposta vazia para evitar erro
              return new Response('', { status: 503, statusText: 'Service Unavailable' });
            });
        })
    );
    return;
  }

  // Network First para recursos locais
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Se a resposta for bem-sucedida, cachear
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Se falhar a rede, buscar do cache
        return caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // Se for navegação e não tiver no cache, retornar index.html
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            
            // Retornar resposta 404 para outros recursos
            return new Response('Não encontrado', { 
              status: 404, 
              statusText: 'Not Found' 
            });
          });
      })
  );
});

// Mensagem do Service Worker
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
