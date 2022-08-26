'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "93042402dad1145aa21ac732eddb3efe",
"index.html": "d970b7c0b41e54f1b4b206972f1159da",
"/": "d970b7c0b41e54f1b4b206972f1159da",
"main.dart.js": "ac0eec434ee318ffee49171763298d6f",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c1218c8a27e5287f9e3d3ab0f6866685",
"assets/AssetManifest.json": "ca8514d9649459555c706b5d11994e98",
"assets/NOTICES": "5fb8df59bd8e47232b613c6a5dfb4796",
"assets/FontManifest.json": "a8b83f2f3344cc4a1f3039859c6634f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/greenies/crispy_noodle_fish_salad.jpg": "670207e16d3bffe20cc3c82cafc30828",
"assets/assets/images/greenies/roasted_chicken_and_green_mango_salad.jpg": "22217b41e5e06f0b90dd34c3e0c2297a",
"assets/assets/images/greenies/backed_salad_with_tempeh.jpg": "db77bbc485cd1aff72393380cd9ea5a5",
"assets/assets/images/greenies/backed_beef_salad.jpg": "9a0644b534611e01327568ca52546edc",
"assets/assets/images/greenies/feta_avo_salad.jpg": "06f744f21f0ace6d17b6872d0dd24d1e",
"assets/assets/images/classics/sreak_sandwich.jpg": "ca3c61ada3a75b2fa4dcf3b2a3bc837f",
"assets/assets/images/classics/campot_lok_lak.jpg": "f4ebfbc5e72d19769aa1a0aafb80ef3f",
"assets/assets/images/classics/sweer_sour_tofu.jpg": "75eb1ac68f5625a57405e41e0e276d2e",
"assets/assets/images/classics/nom_pan_sach.jpg": "86b085e5569382b785252175d2d87cd0",
"assets/assets/images/classics/lemongrass_pork.jpg": "fb44a05ac11126af14d934dcd49aeeb0",
"assets/assets/images/classics/beef_rice_wine.jpg": "1dd52bf85429958d556ab9c86d2baee7",
"assets/assets/images/slow/pork_belly.jpg": "1de969201ac899247999d16bfc10655e",
"assets/assets/images/slow/khor.jpg": "e64a92a8cc9975808096db34d02c57c8",
"assets/assets/images/starters/warm_olives.jpg": "5c696616b11d812fca88a6acc9160086",
"assets/assets/images/starters/deep_fried_spring_rols.jpg": "1bbf97ac4b39c6113a30b9ecc525164b",
"assets/assets/images/starters/lemongrass_beef_sticks.jpg": "949fde5d65dfaaa9d9c1d6e69ca75819",
"assets/assets/images/starters/chicken_nuggets.jpg": "d67be7e5f1dfab16f44c3f36d3e965b0",
"assets/assets/images/starters/kumbhaka_egg.jpg": "b1a9fe239177313a9c1ff3e3deb24546",
"assets/assets/images/starters/egg_plant_toast.jpg": "24a072e784378b2865b43fb373a06e9b",
"assets/assets/images/starters/drunk_tofu.jpg": "ebd20496d6338adc0995706a33313913",
"assets/assets/images/starters/sesame_beef_jerky.jpg": "51c7333fdd5125589b743bfa5aca3b40",
"assets/assets/images/starters/cold_cut_paltter.jpg": "7cc77e14feb8ce86bb360550292f221f",
"assets/assets/images/starters/french_fries.jpg": "310e3c1c03b42bfd688c93dcc4aae552",
"assets/assets/images/starters/hommade_roasted_cashew_nuts.jpg": "f676db22b51a96aa18911ca3024dfe4e",
"assets/assets/images/starters/snack_platter.jpg": "4da2add9ef9bbe0c21ed1f5e8d97a7d3",
"assets/assets/images/starters/super_fresh_vegies.jpg": "bd15b66b25d037a00120ea302ae3acd9",
"assets/assets/images/specials/angus.jpg": "f08078c9d8d200627c01bc3670c69bde",
"assets/assets/images/specials/duck_breast.jpg": "c62c54a621b3e2024bcf4ac4042dfa5f",
"assets/assets/images/specials/seabus.jpg": "64d597516e8d50dedfa40b4e5676ba7b",
"assets/assets/images/desserts/orange_mousse.jpg": "94470c0288f825ced267ef6733d580ce",
"assets/assets/images/desserts/mango.jpg": "08b3b3030a3b40f13333b9d0fd5685f0",
"assets/assets/images/desserts/icecream.jpg": "4b9fc1fff93996fec8b87d9821ff776b",
"assets/assets/images/desserts/brownie.jpg": "db9c92d10e6cdc60d78049c57ddb1292",
"assets/assets/images/coffee/erl_grey.jpg": "92eb0b6c59e078c8960c5614ff2f7139",
"assets/assets/images/coffee/espresso.jpg": "4bf0c29d3e8f646ad515dcdf9d8e1f47",
"assets/assets/images/coffee/mondulkiri_green.jpg": "227b6f2ec472eb34cc2e39c1c27307b9",
"assets/assets/images/coffee/americano.jpg": "80ba72d61ac6b6645929950d84748b49",
"assets/assets/images/coffee/cappuccino.jpg": "49b24bf6e52abe435f5b03643a1226f0",
"assets/assets/images/coffee/english_breakfast.jpg": "6b832acba2825684bf26f8effbd7e268",
"assets/assets/images/coffee/sweet_milk_coffee.jpg": "a9abf2386f73e0a2c015fec7169c3daf",
"assets/assets/images/coffee/late.jpg": "878a3c5d910e1a1a14d8842ff67483f6",
"assets/assets/images/coffee/frappe_with_cream.jpg": "bbe8b62625172ec496936bd306e08aa5",
"assets/assets/images/west/big_ass_burger.jpg": "28e056161682d1ec0455161092899625",
"assets/assets/images/west/chicken_burger.jpg": "4758b4075fa02cddd4875eb362023a6d",
"assets/assets/images/west/fish_and_chips.jpg": "0a86accb2c6a73981687919764abe525",
"assets/assets/images/west/pasta_pastis.jpg": "22275b7502e884dda2d1f8f12cde6ac6",
"assets/assets/images/west/vegie_burger.jpg": "7f871d6bd2f5f53e8fb58d3f98bb3f71",
"assets/assets/images/west/chicken_breast.jpg": "ba5f81c39a34155b927d52bad7387706",
"assets/assets/icons/starters.svg": "86fa94601dd2b85e8b19afb235b97c8e",
"assets/assets/icons/specials.svg": "dbc52416adea1166938ecac0ebcc755d",
"assets/assets/icons/slow_cook.svg": "ff776de2e54e86c9fa8abda1b9f10704",
"assets/assets/icons/dessert.svg": "2ee7303ea0af9686669f8c28a785d7d8",
"assets/assets/icons/classics.svg": "30c542cd4941f726e1e8a8628256b76b",
"assets/assets/icons/greenie.svg": "3a8d1528349e4372dc8edbbac94d6bb7",
"assets/assets/icons/going_west.svg": "3477320bc1ad14ee14f0975c0c7cc88a",
"assets/assets/icons/drinks.svg": "85fd08b066b84f741d41be27f4a7f13b",
"assets/assets/icons/bucket.svg": "171945467aaf33462406b6d8fad1cab8",
"assets/assets/icons/glass.svg": "2193c9061356422fb11f99b38ce23521",
"assets/assets/icons/cup.svg": "eae83bb295978f62ab02b0762e15d8bb",
"assets/assets/icons/pot.svg": "769fc3cca94bd1619903a355f11bee79",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/ZillaSlab-Regular.ttf": "0dc149380f37b6691a4b4e36c2cf1002",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
