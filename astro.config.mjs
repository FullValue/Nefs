import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine de production : à confirmer (voir src/data/site.ts et README).
const site = process.env.PUBLIC_SITE_URL || 'https://nefsy.fr';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/payment-status') && !page.includes('/merci'),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  image: { layout: 'constrained' },
});
