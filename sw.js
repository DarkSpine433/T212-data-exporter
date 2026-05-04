const CACHE_NAME = "t212-exporter-v1.3.1";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./src/styles/styles.css",
        "./src/core/i18n.js",
        "./bookmark-blockage-fix.html",
        "./privacy-policy.html",
        "./src/styles/bookmark.css",
        "./src/assets/icons/favicon.ico",
        "./src/assets/logo.png",
        "./src/assets/og-image.png",
        "./src/assets/icons/favicon-16x16.png",
        "./src/assets/icons/favicon-32x32.png",
        "./src/assets/icons/android-chrome-192x192.png",
        "./src/assets/icons/android-chrome-512x512.png",
      ]);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
