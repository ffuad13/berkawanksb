/// <reference lib="webworker" />


// Cache names
const STATIC_CACHE_NAME = 'berkawan-static-v1';
const DYNAMIC_CACHE_NAME = 'berkawan-dynamic-v1';
const ASSETS_CACHE_NAME = 'berkawan-assets-v1';

// Assets to cache
const STATIC_ASSETS = [
  '/',
  '/lapor',
  '/laporan',
  '/images/livestock.webp',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
];

// File extensions to cache
const CACHEABLE_EXTENSIONS = [
  '.js',
  '.css',
  '.woff2',
  '.woff',
  '.ttf',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.ico',
  '.json',
];

// Helper function to determine if a request should be cached
const shouldCacheRequest = (request: Request): boolean => {
  const url = new URL(request.url);

  // Don't cache API requests
  if (url.pathname.startsWith('/api/')) {
    return false;
  }

  // Cache static assets by extension
  if (CACHEABLE_EXTENSIONS.some(ext => url.pathname.endsWith(ext))) {
    return true;
  }

  // Cache HTML requests for routes
  if (request.mode === 'navigate') {
    return true;
  }

  return false;
};

// `self` is already defined in the web worker context.

// Install a service worker
self.addEventListener('install', (event) => {
  const swEvent = event as ExtendableEvent;
  swEvent.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      }),
      // Cache assets cache (will be populated on the fly)
      caches.open(ASSETS_CACHE_NAME),
      // Cache dynamic cache (will be populated on the fly)
      caches.open(DYNAMIC_CACHE_NAME),
    ]).then(() => {
      return ((self as unknown) as ServiceWorkerGlobalScope).skipWaiting();
    })
  );
});

// Cache and return requests
// @ts-ignore
self.addEventListener('fetch', (event: any) => {
  const request = event.request;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    (async () => {
      // Try to get the response from cache first
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const response = await fetch(request);

        // Clone the response as it can only be consumed once
        const responseToCache = response.clone();

        // Cache the response if it meets our criteria
        if (shouldCacheRequest(request) && response.status === 200) {
          const cache = await caches.open(
            request.url.includes('/static/') ? ASSETS_CACHE_NAME : DYNAMIC_CACHE_NAME
          );
          await cache.put(request, responseToCache);
        }

        return response;
      } catch (error) {
        // If offline and request fails, return a fallback
        if (request.mode === 'navigate') {
          const cache = await caches.open(STATIC_CACHE_NAME);
          return cache.match('/') || new Response('Offline Page');
        }
        throw error;
      }
    })()
  );
});

// Update service worker and clean old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME, ASSETS_CACHE_NAME];

  (event as ExtendableEvent).waitUntil(
    (async () => {
      // Delete old caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        })
      );

      // Take control of all clients
      await ((self as unknown) as ServiceWorkerGlobalScope).clients.claim();
    })()
  );
});
