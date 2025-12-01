import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Root route
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },

  // Static pages
  { path: 'home', renderMode: RenderMode.Prerender },
  { path: 'about-us', renderMode: RenderMode.Prerender },
  { path: 'services', renderMode: RenderMode.Prerender },
  { path: 'products', renderMode: RenderMode.Prerender },
  { path: 'contact-us', renderMode: RenderMode.Prerender },
  { path: 'check-out', renderMode: RenderMode.Prerender },
  { path: 'blog', renderMode: RenderMode.Prerender },

  // Auth
  { path: 'register', renderMode: RenderMode.Prerender },
  { path: 'login', renderMode: RenderMode.Prerender },

  // Details with slug + id
  {
    path: 'details/:slug/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'product-1', id: '1' },
        { slug: 'product-2', id: '2' },
      ];
    }
  },

  // Details with only id
  {
    path: 'details/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { id: '1' },
        { id: '2' },
      ];
    }
  },

  // Catch-all (must be last)
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }
];