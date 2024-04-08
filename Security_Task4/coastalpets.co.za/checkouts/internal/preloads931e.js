
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.591e83bb7770ae82ddac.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/960.baseline.en.869b5ce85f2c5d9a4454.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/24.baseline.en.f3da40087df29c15dcfb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/706.baseline.en.a2177ecce24cf8201826.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.15110e2cbbf09771600f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.baseline.en.3248b1ea37c8c8287656.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.baseline.en.5089c4b81144a409042b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/172.baseline.en.64de56fbe330d69414ed.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.baseline.en.aaf5a5941b77953f0095.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.541639521ba1c524d972.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/960.baseline.en.3b7d1d70411c2da0a2ac.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.f79e630f70b79519e81e.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.baseline.en.5c8be743b69bc96dbc9b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.en.93a7c74905e220633b50.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0328/5752/2307/files/Coastal_Aquariums_and_Pet_Supplies_Online_-_Logo_-_LR_-_Transparent_x320.png?v=1679127613"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  