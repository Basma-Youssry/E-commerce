
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
    'index.csr.html': {size: 40601, hash: '6407e5039c666dd83a4b772efd5eeb82cb5e246427e0ca3e6f2500410944ab1c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6159, hash: '4ea073ebce4462bb3259d4e889c94ff071c8fa95b0ac32d2d3a7e9daf019f097', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 85065, hash: 'd7af09116c6dd3c9cae75f17efb18f2306c19402f7160b6f8af4f4378337fb83', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 72465, hash: '1ca8f742d65ed0e05e894deaf3b5a2fcfbb04e50cc97125616cc348fc5fdb3f5', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 81944, hash: 'a54dc3cc1ddc85819c6be4883d6c4a10d7d311c739d6e3f6a22849b71b9d19db', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 94236, hash: 'e681176ec876e9f82ae3e5add17532e9c860087ab1c1dd305c31e7cb98637886', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 72678, hash: '537479ebd643086c9cdb07f38632dc15069b839aab51b7a6d49656ce91ef9490', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'wishlist/index.html': {size: 72648, hash: 'ab79faa3b762119958e6a89297ca3d67c6da4ad72fad576e73f685f7f7b04759', text: () => import('./assets-chunks/wishlist_index_html.mjs').then(m => m.default)},
    'details/product-2/2/index.html': {size: 75798, hash: '596b14135b64b1cb3fdfc6697f9569cc1b0caa445cc4a092765b2706e3fa6670', text: () => import('./assets-chunks/details_product-2_2_index_html.mjs').then(m => m.default)},
    'details/2/index.html': {size: 75790, hash: 'b0906c9207d120affd9808bfc20ca4978cf129d20654a887621b4a870a8135e2', text: () => import('./assets-chunks/details_2_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 69015, hash: '20109aaedd0b03979784df4f81fa0b7d3b28b4b66c1ef1ad52e4d91957ccdc91', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'forgetpassword/index.html': {size: 70688, hash: '9064e25ba0369c0e23261209b14d758ee96b33d2ffaa95db5d89c5df30134ee1', text: () => import('./assets-chunks/forgetpassword_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 81263, hash: '916b77f33bbafa9205ea40d1ffedef4c1808d833f4a73c4f3eba0ad6c5d6dd6d', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'details/product-1/1/index.html': {size: 75790, hash: 'b0906c9207d120affd9808bfc20ca4978cf129d20654a887621b4a870a8135e2', text: () => import('./assets-chunks/details_product-1_1_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 71001, hash: '0b47aa94b533ea7e47cfa2a7ddabfd9bc15d24a721c35bc42b5eb88643a217ec', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 70836, hash: 'e218fddffddd1ba17522cf2ea2871c2edc7c83d169db81fd4dcecbe0837589c4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 176364, hash: 'c2dae26b2bc7861613a71fcae19e2184e9d2d8730787b2f252708ce444456199', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'details/1/index.html': {size: 75790, hash: 'b0906c9207d120affd9808bfc20ca4978cf129d20654a887621b4a870a8135e2', text: () => import('./assets-chunks/details_1_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 68131, hash: '87dcd95b4d7d6e3a19f7986bffc072d78db091fd112746ac70177998211676c5', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 78750, hash: '3ca0547d12bae469d0624e57fe36acaf122bc12eb8d3c976b614731b143cc94b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'details/index.html': {size: 75798, hash: '596b14135b64b1cb3fdfc6697f9569cc1b0caa445cc4a092765b2706e3fa6670', text: () => import('./assets-chunks/details_index_html.mjs').then(m => m.default)},
    'main-WLEF6CIZ.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/main-WLEF6CIZ_css.mjs').then(m => m.default)},
    'chunk-WPSKNGMX.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/chunk-WPSKNGMX_css.mjs').then(m => m.default)},
    'main.server.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-5CJKGKFY.css': {size: 474960, hash: 'uwNMBDqXhhQ', text: () => import('./assets-chunks/styles-5CJKGKFY_css.mjs').then(m => m.default)}
  },
};
