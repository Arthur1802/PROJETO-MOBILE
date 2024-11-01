const CACHE_NAME = "am2vlearn-cache-v1"
const urlsToCache = [
    "/",
    "/index.html",
    "/offline.html",
    "/src/main.jsx",
    "/src/App.jsx",
    "/src/AppRoutes.jsx",
    "/src/App.css",
    "/src/pages/Main/Main.jsx",
    "/src/pages/Main/Main.css",
    "/src/assets/icons/appIcons/512x512.png",
    "/src/assets/logo/logo.png",
    "/src/pages/Welcome/Welcome.jsx",
    "/src/pages/Welcome/Welcome.css",
    "/src/pages/Login&Signin/Login.jsx",
    "/src/pages/Login&Signin/Login.css",
    "/src/pages/Login&Signin/Signin.jsx",
    "/src/pages/Login&Signin/Signin.css",
    "/src/utils/authentication/auth.js",
    "/src/utils/authentication/firebase.js",
    "/src/components/BackBtn/BackBtn.jsx"
]

// Install Event
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Opened cache")
            return cache.addAll(urlsToCache)
        })
    )
})

// Fetch Event
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request).catch(() => {
                if (event.request.mode === "navigate") {
                    return caches.match("/offline.html")
                } else if (event.request.destination === "image") {
                    return caches.match("/src/assets/icons/appIcons/512x512.png")
                }
            })
        })
    )
})

// Activate Event
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME]
    event.waitUntil(
        caches.keys().then(keyList =>
            Promise.all(
                keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        return caches.delete(key)
                    }
                })
            )
        )
    )
})