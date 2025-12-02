
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/E-commerce/home",
    "route": "/E-commerce"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/register"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/login"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/home"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/about-us"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/services"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/products"
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
    "renderMode": 2,
    "route": "/E-commerce/blog"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15617, hash: '95dc89c11b8643a865c93da9b9fa7cef4db89d373d09c124bb5691139e933fa3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5688, hash: '3d793fc8946f57f25159329ee02f7e58f5b1efff69ec17e8c69b1c40054c0913', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 30340, hash: '53baeba074ce166050bc82e190369d8ace6e9efad3d5f0a8762560c07c41e6ca', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 33691, hash: '5c03c0f3b4ea2162d554df70285a321686cf5330a9401ecea8969eacb3060f41', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30328, hash: '5bbd7d77ec191148ac44cc4050413ca6555adc2cf19c876aed488450800645bb', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 33667, hash: '8c583f2076ffa039e94f15e651f134f9dcb096841d1daa9047f8467cdace3377', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 33680, hash: '608971e1128be55c75c3e2105d350189c4e5105c2ff86ab6551ad8c9930e8ad3', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'details/product-1/1/index.html': {size: 38026, hash: '3f3fcf573ebfec3e4e65de69f222711f3215963f4125153a94ab9d73459f8bad', text: () => import('./assets-chunks/details_product-1_1_index_html.mjs').then(m => m.default)},
    'details/product-2/2/index.html': {size: 38026, hash: '3f3fcf573ebfec3e4e65de69f222711f3215963f4125153a94ab9d73459f8bad', text: () => import('./assets-chunks/details_product-2_2_index_html.mjs').then(m => m.default)},
    'details/2/index.html': {size: 38026, hash: '3f3fcf573ebfec3e4e65de69f222711f3215963f4125153a94ab9d73459f8bad', text: () => import('./assets-chunks/details_2_index_html.mjs').then(m => m.default)},
    'details/1/index.html': {size: 38026, hash: '3f3fcf573ebfec3e4e65de69f222711f3215963f4125153a94ab9d73459f8bad', text: () => import('./assets-chunks/details_1_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 33683, hash: '8a301507593dfc7b4b409dd00d1646b57aef78ef6ecfc13013919ab0ab611e93', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 33672, hash: 'fe1f294c4dbc2547b55111c5a1b88780302e365b9a36b68f29b997e1cb3cbb2f', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 123553, hash: 'a6482cbb913e98bc5ff9b99fcfef34b8241628a018832b8d412123afb44ed92b', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 127513, hash: '952ab977fc457e41254f4910c11e0ffb48ac4438e5df4d47af5d4cd3975dd6d9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'main-WLEF6CIZ.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/main-WLEF6CIZ_css.mjs').then(m => m.default)},
    'main.server.css': {size: 12055, hash: 'kMu5EfWlIcc', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-ZVWODRO6.css': {size: 201208, hash: 'H5mYzRKOUSg', text: () => import('./assets-chunks/styles-ZVWODRO6_css.mjs').then(m => m.default)}
  },
};
