
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
      "chunk-E5X4SLXR.js"
    ],
    "route": "/E-commerce/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E355XMS6.js"
    ],
    "route": "/E-commerce/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WT4VAONP.js"
    ],
    "route": "/E-commerce/forgetpassword"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NWBK4IMH.js",
      "chunk-OD3IV24X.js"
    ],
    "route": "/E-commerce/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AGUZPQ3Z.js"
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
      "chunk-SN2KT5R4.js"
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
    'index.csr.html': {size: 40602, hash: '3298d9e43f5ed3b76c6439339db7713d1fb313003e41125637d23b056dc54dbc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6160, hash: '70bdb821cfbd717e2e1702291be774ec3b3e88b09500322dfc7964e9b2b6fabe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 72486, hash: '2a90facf338559df5e32141ca95671e2829e48c6fcc836a490f2e3ff2d98c91c', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 81956, hash: 'd1230fce7635c0b1b7e1632745d7f16b4a6d2f5616e0a2d9c5ab1c05cb3661a2', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 85077, hash: '0eb4382d767ee958b8eb8750231ef5fb3cef8189374eab745bfd621e3459c8be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 72681, hash: '0bbf7f4790ee40cb0d52f5b617c60736f75b0e7a08671f0bf683425633c24e56', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'details/product-2/2/index.html': {size: 75791, hash: '93451bb66c6f0f54c4894c21524288769deb2349764db2113e9413ff4743bf05', text: () => import('./assets-chunks/details_product-2_2_index_html.mjs').then(m => m.default)},
    'details/2/index.html': {size: 75799, hash: 'b808d8abd2d8f299fc2bef10dc6facc1415eca177330e3ef82b8061299b104f9', text: () => import('./assets-chunks/details_2_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 94237, hash: '9e3400629ddf5d2b0cefa4d40a43973c515109b577dbbfaadd58f889eac8323f', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'wishlist/index.html': {size: 72666, hash: '2b605d82a3b2483cc6f58d3feb0d1f3ccc6a7887d9cb25ce0086fc7b2d133bfa', text: () => import('./assets-chunks/wishlist_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 69015, hash: '9add8798aed3d6f3aba26274cd6b71e5a007feeb06392e7d3095d8f70901199f', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'forgetpassword/index.html': {size: 70695, hash: '8575d45636ee2a84fd9564695d53a3865708596dacc4288f78e00ca1842186f1', text: () => import('./assets-chunks/forgetpassword_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 81278, hash: '7e601d00489a6cd69c4df39f8194a4d5526a39c86fbea252840010aa208da941', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 71005, hash: 'efeeaa167cb94676fde9654985fa77476f678fa675eae277076f43de3ba5ac91', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'details/product-1/1/index.html': {size: 75799, hash: '4d57bda11da0b824fcf28e2ef3ad8827d00692c7061a392a6ddab5b967c78366', text: () => import('./assets-chunks/details_product-1_1_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 70836, hash: '50e535f7830636831bdb2d4269cd2c18db5ac7609a5590e33740895dc3d5ca73', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 176357, hash: 'b52d9415260d187bc0ea3c138be39c1b8032e78fc1d2694f398eb071f4078ab4', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'details/1/index.html': {size: 75799, hash: 'b808d8abd2d8f299fc2bef10dc6facc1415eca177330e3ef82b8061299b104f9', text: () => import('./assets-chunks/details_1_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 78758, hash: 'ecc617c5891bc73661e4fc6bb02a356c5efd4f1c26c722b0fae8a298b816cd1c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 68131, hash: 'b9008bb61502759e63e7fa15d49594a1f2ad4d012060e49bd38617be7f812a96', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'details/index.html': {size: 75798, hash: '933a260864df9ae0cd34a70b9a8cc33c613e090d294dd14a2bd20b474e4d9eaa', text: () => import('./assets-chunks/details_index_html.mjs').then(m => m.default)},
    'main-WLEF6CIZ.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/main-WLEF6CIZ_css.mjs').then(m => m.default)},
    'chunk-WPSKNGMX.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/chunk-WPSKNGMX_css.mjs').then(m => m.default)},
    'main.server.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-5CJKGKFY.css': {size: 474960, hash: 'uwNMBDqXhhQ', text: () => import('./assets-chunks/styles-5CJKGKFY_css.mjs').then(m => m.default)}
  },
};
