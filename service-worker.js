/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","ffad1708d66db1016045716791468305"],["css/creative.css","8f98b6184d2a3365091e73d34269b02e"],["css/creative.min.css","fdaed843e22f17cf77ee7c764f675a14"],["gulpfile.js","9d8a96992eea60c50e4ec0c7e0b29a93"],["img/header.jpg","fb7e411aaf7b47c5cb3e1ebb3171d12a"],["img/portfolio/fullsize/1.jpg","35fc9782e5ef3c24442a1532a553a0d6"],["img/portfolio/fullsize/2.jpg","291ec430375d8618b1bec328242f6806"],["img/portfolio/fullsize/3.jpg","997129817a9825a7097633d84032de7c"],["img/portfolio/fullsize/4.jpg","0cc1d0046001c93dc5c32c98ce15cb27"],["img/portfolio/fullsize/5.jpg","edb6acef9dd5bdf5fc73eae0d100108c"],["img/portfolio/fullsize/6.jpg","61db59089da1ab56cc3845f926ef8bb5"],["img/portfolio/thumbnails/1.jpg","35fc9782e5ef3c24442a1532a553a0d6"],["img/portfolio/thumbnails/2.jpg","291ec430375d8618b1bec328242f6806"],["img/portfolio/thumbnails/3.jpg","997129817a9825a7097633d84032de7c"],["img/portfolio/thumbnails/4.jpg","0cc1d0046001c93dc5c32c98ce15cb27"],["img/portfolio/thumbnails/5.jpg","edb6acef9dd5bdf5fc73eae0d100108c"],["img/portfolio/thumbnails/6.jpg","61db59089da1ab56cc3845f926ef8bb5"],["index.html","f55fdbd5a6c8c9c310a86bc1abe8f65c"],["js/creative.js","ddd4b993dadc36d5dedda6005fec0841"],["js/creative.min.js","b2282765c9c7f6e6c4018f2cc081a6e2"],["less/creative.less","db3ca88245e6afc7b238796278a963b8"],["less/mixins.less","06c9911cdedd1e9c12c8f463641cbbb9"],["less/variables.less","e5356f970f770c33dd8ce9256d4fd1ac"],["package.json","cf25e18ec8b468617afde3efa61c33aa"],["vendor/bootstrap/css/bootstrap.css","2a31dca112f26923b51676cb764c58d5"],["vendor/bootstrap/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["vendor/bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["vendor/bootstrap/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["vendor/bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["vendor/bootstrap/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["vendor/bootstrap/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["vendor/font-awesome/css/font-awesome.css","c893516247ce9e0167d9fb5012dc0edd"],["vendor/font-awesome/css/font-awesome.min.css","fea395db9a5c8eaba924d98161324597"],["vendor/font-awesome/fonts/FontAwesome.otf","5dc41d8fe329a22fa1ee9225571c843e"],["vendor/font-awesome/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["vendor/font-awesome/fonts/fontawesome-webfont.svg","24c601e721ebd8279d38e2cfa0d01bc6"],["vendor/font-awesome/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["vendor/font-awesome/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["vendor/font-awesome/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["vendor/font-awesome/less/animated.less","08baef05e05301cabc91599a54921081"],["vendor/font-awesome/less/bordered-pulled.less","898f90e40876883214bbd121b0c20e9f"],["vendor/font-awesome/less/core.less","fb4efe4ae63737706875bbbfc7b7e9af"],["vendor/font-awesome/less/fixed-width.less","5e07ec001f8d21bd279c12ee542813f7"],["vendor/font-awesome/less/font-awesome.less","a6e571bc7835b879c5e5d72672f9324c"],["vendor/font-awesome/less/icons.less","ed16388f54f7f641569192d0845d67d9"],["vendor/font-awesome/less/larger.less","8cb65280c0f889daf72626c21a7c8628"],["vendor/font-awesome/less/list.less","975571323cf880a4a30601998236b027"],["vendor/font-awesome/less/mixins.less","fbb1f2f1ab96ba020c7f14208aac72b8"],["vendor/font-awesome/less/path.less","a8c41460c42a4fe9e98550f00c8b3f19"],["vendor/font-awesome/less/rotated-flipped.less","a8476cdc50c264abd11ff59d6a9dd025"],["vendor/font-awesome/less/screen-reader.less","0f881617264587bef0df6ce92253ecea"],["vendor/font-awesome/less/stacked.less","518e2b2d263982d2caa1e6514b4b4eac"],["vendor/font-awesome/less/variables.less","3d965ba085457e3bbe91089f36c90427"],["vendor/font-awesome/scss/_animated.scss","39ff4f359a7b81d6585075715f41e5dc"],["vendor/font-awesome/scss/_bordered-pulled.scss","4cad0df17bf40327feae33fa9a6c6ba2"],["vendor/font-awesome/scss/_core.scss","ef059a98cf9de6ca5b77ee6850771cf0"],["vendor/font-awesome/scss/_fixed-width.scss","9277ab6964a434d499873687b00be906"],["vendor/font-awesome/scss/_icons.scss","e9e6c9fbcc5b594818a9137b4f4ca147"],["vendor/font-awesome/scss/_larger.scss","e95931566f6fc6ad5685c4fa9802e206"],["vendor/font-awesome/scss/_list.scss","7107e80b053928271d5fcf422dc29490"],["vendor/font-awesome/scss/_mixins.scss","aa2b8f32b403733713d8885f14ab86cc"],["vendor/font-awesome/scss/_path.scss","ab5a9e8388563e097b5ce835601f01d2"],["vendor/font-awesome/scss/_rotated-flipped.scss","9f5d4bc6fadea89328d2aac26574a9d8"],["vendor/font-awesome/scss/_screen-reader.scss","8907bd7dbf4799e8120bda5568d76fea"],["vendor/font-awesome/scss/_stacked.scss","5594237226aedfbca2fa1c7f4604c214"],["vendor/font-awesome/scss/_variables.scss","bbe336ec6d41724590ac195d1cb46255"],["vendor/font-awesome/scss/font-awesome.scss","5bc2ca1bf1d5fd4fb9fe17a572629d82"],["vendor/jquery-easing/jquery.easing.js","61560d8cc75095dadde5e6bd03b9e850"],["vendor/jquery-easing/jquery.easing.min.js","1fa75b21db621ed52758b13cf6d23f50"],["vendor/jquery/jquery.js","fb2d334dabf4902825df4fe6c2298b4b"],["vendor/jquery/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["vendor/magnific-popup/jquery.magnific-popup.js","5b23ded83b6a631b06040ed574e43dd6"],["vendor/magnific-popup/jquery.magnific-popup.min.js","ba6cf724c8bb1cf5b084e79ff230626e"],["vendor/magnific-popup/magnific-popup.css","30b593b71d7672658f89bfea0ab360c9"],["vendor/scrollreveal/scrollreveal.js","b66df6d74b90a84bcbad1e6ece4dc7db"],["vendor/scrollreveal/scrollreveal.min.js","b8d4ede888d284c51cbf85d686e02da3"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







