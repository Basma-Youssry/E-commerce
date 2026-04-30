
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/E-commerce"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QNXI7MIJ.js"
    ],
    "route": "/E-commerce/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OPGURWKD.js"
    ],
    "route": "/E-commerce/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAUKSN4V.js"
    ],
    "route": "/E-commerce/forgetpassword"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J63HHIE3.js",
      "chunk-OD3IV24X.js"
    ],
    "route": "/E-commerce/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3HWNOTWU.js"
    ],
    "route": "/E-commerce/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TVTBQGTN.js"
    ],
    "route": "/E-commerce/brands"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GSC7EYPF.js",
      "chunk-OD3IV24X.js"
    ],
    "route": "/E-commerce/products"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/details"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/details/product-1/1"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/details/product-2/2"
  },
  {
    "renderMode": 0,
    "route": "/E-commerce/details/*"
  },
  {
    "renderMode": 0,
    "route": "/E-commerce/details/*/*"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/details/1"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/details/2"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/contact-us"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/check-out"
  },
  {
    "renderMode": 1,
    "route": "/E-commerce/check-out/*"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/categories"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/wishlist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KXF3JKV7.js"
    ],
    "route": "/E-commerce/allorders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-565Z6KE5.js"
    ],
    "route": "/E-commerce/cart"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33901, hash: '6ee2bc49e7312e8531ed008ce39e676f74b06c249bd3613360cce60d5c5275a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6159, hash: 'b8ce3446095b446d24e0b21f0e1b53f4761292adb105648c61fe9c6561036fcc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 78201, hash: '51536bf9d7c6e8b509ab9af370f5f53498421f34545c4ad2b76b5c93f2409a25', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 65601, hash: 'd877bd005c20672b0e453d9d3c3469db3cc1d8890003341c36fb5958b7513a46', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 75080, hash: 'fc5e5b1c36d63ae5eb72042221dfb5ffe2b79b8388e79a1e431e2f5b95908c76', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 87372, hash: 'a13f83d787a3f49731246fbc63bcea7e0790cd30b397e495e8c563e058d3433a', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 65814, hash: 'facbc4f257be6c460ac1eab4b5c91bf4f04c365b5e46d45861ccbec8f4eda8a1', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'wishlist/index.html': {size: 65784, hash: '5bb0d6c0764b7d3d71124f25a7438e6b7757e24b6c16fed3080fac183b552788', text: () => import('./assets-chunks/wishlist_index_html.mjs').then(m => m.default)},
    'details/2/index.html': {size: 68926, hash: '321d57e7708580f35b09ff595632e56302beb1c06f64984f2d7631654ecdc553', text: () => import('./assets-chunks/details_2_index_html.mjs').then(m => m.default)},
    'details/product-2/2/index.html': {size: 68934, hash: 'e768a8790abfb3f3aa323aef10a02c1ee737ff64b08b78b144d74781186734d9', text: () => import('./assets-chunks/details_product-2_2_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 62151, hash: '78115b94f4ecf6736e48f3c0c4c6dc2604daf5ea234cfe2247b678ee7d6a46c4', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'forgetpassword/index.html': {size: 63824, hash: '82b44f6f063da2d7f440fc3ca4615b8ea8fa92986204aadeb15dbba9886a1a72', text: () => import('./assets-chunks/forgetpassword_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 74399, hash: '6b5e184361be51b8c0316d6f972fcdd7a693a961bdb430f93ffe65f7c4a3bf30', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'details/product-1/1/index.html': {size: 68934, hash: 'e768a8790abfb3f3aa323aef10a02c1ee737ff64b08b78b144d74781186734d9', text: () => import('./assets-chunks/details_product-1_1_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 63972, hash: 'bad1edb3e34e4694263a48873e251bf9e55cddaa8b66d5d901e68054206b4b68', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 64137, hash: '939b10c3039566728b8ebcc78735ccd3d4fda018c69e099a399adf6cc8f674bd', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 169499, hash: '80a6ebd90026c79b31c699b091b7eca13348ed4bdaba5a4981a74ae586540c4f', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 71881, hash: '420510f9addf9f91c3a9412fe0b8b81c2708735711f8256c880ffeb85925d05f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 61266, hash: '65ffaac456636661d9d23e91a1f85481d18d881177bb9e13ede4b341b18e0412', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'details/1/index.html': {size: 68934, hash: '327ad23d50c49ec492d0cbfac93641f934b8ed090e92c5bd0fcac703b39ba2b2', text: () => import('./assets-chunks/details_1_index_html.mjs').then(m => m.default)},
    'details/index.html': {size: 68926, hash: '321d57e7708580f35b09ff595632e56302beb1c06f64984f2d7631654ecdc553', text: () => import('./assets-chunks/details_index_html.mjs').then(m => m.default)},
    'main-WLEF6CIZ.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/main-WLEF6CIZ_css.mjs').then(m => m.default)},
    'chunk-WPSKNGMX.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/chunk-WPSKNGMX_css.mjs').then(m => m.default)},
    'main.server.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-MLEN3H2Z.css': {size: 426599, hash: '3bOFRZTV5rI', text: () => import('./assets-chunks/styles-MLEN3H2Z_css.mjs').then(m => m.default)}
  },
};
