// Next Line service worker: makes the whole app usable offline. vite.config.ts (precacheServiceWorker) copies this
// file to dist/sw.js and fills in PRECACHE (every built file with a content hash) and VERSION (a hash of the list).
const VERSION = "918930ee068a";
const PRECACHE = ["assets/barlow-condensed-latin-500-BgYH2mbd.woff2","assets/barlow-condensed-latin-600-DepVgxBB.woff2","assets/barlow-condensed-latin-700-v1xN8_Wq.woff2","assets/barlow-latin-400-qiz4-Cze.woff2","assets/barlow-latin-500-BPAOfeC8.woff2","assets/barlow-latin-600-DILqtrty.woff2","assets/main-BSlktMZp.css","assets/main-CTmFFFWO.js","assets/map-demo-Cl9KxQcN.css","assets/map-demo-CnCbRuo7.js","assets/tiles-CbsE6d2l.js","./","logo.svg","map-demo.html"];
const CACHE = "nextline-" + VERSION;
const scope = self.registration.scope;
const urlOf = (path) => new URL(path, scope).href;

self.addEventListener("install", (event) => {
  // Fresh copies (not the browser's HTTP cache), so the cache never mixes two deploys.
  const fetchAll = async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(PRECACHE.map((path) => new Request(urlOf(path), { cache: "reload" })));
  };
  event.waitUntil(fetchAll().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  const dropOld = async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith("nextline-") && key !== CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  };
  event.waitUntil(dropOld());
});

// The page: network first, but on weak signal (no answer within PAGE_WAIT_MS) the cached copy opens the app. The
// cache is not refreshed from this response: a new deploy brings a new sw.js, whose install caches the new page
// together with its new scripts, so the cached page never points at files the cache lacks.
const PAGE_WAIT_MS = 3000;
// The demo map (map-demo.html, a test page) is its own page; every other navigation opens the app.
const pageFor = (request) =>
  new URL(request.url).pathname.endsWith("/map-demo.html") ? urlOf("map-demo.html") : urlOf("./");
async function page(request) {
  const cached = await caches.match(pageFor(request), { cacheName: CACHE });
  if (!cached) return fetch(request);
  const controller = new AbortController();
  const giveUp = setTimeout(() => controller.abort(), PAGE_WAIT_MS);
  try {
    return await fetch(request, { signal: controller.signal });
  } catch {
    return cached;
  } finally {
    clearTimeout(giveUp);
  }
}

// Everything else is in the precache (file names carry a hash or never change): cache first.
async function asset(request) {
  const cached = await caches.match(request.url, { cacheName: CACHE, ignoreSearch: true });
  return cached || fetch(request);
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || !request.url.startsWith(scope)) return;
  event.respondWith(request.mode === "navigate" ? page(request) : asset(request));
});
