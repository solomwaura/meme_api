self.addEventListener("Install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./","./src/styles.css","./images/icon.png"]);
        })
    );
});

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request)
        })
    )
})