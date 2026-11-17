import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const site = "https://daffaraihan.vercel.app";

// Fully static site: every page (including /projects/[slug]) is generated at build time,
// so it needs no server adapter or serverless runtime.
// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    react({
      experimentalReactChildren: true
    }),
    tailwind(),
    sitemap({
      // Match the canonical URLs, which have no trailing slash (except the homepage).
      serialize: (item) => {
        const url = new URL(item.url);
        if (url.pathname.length > 1) url.pathname = url.pathname.replace(/\/$/, "");
        return { ...item, url: url.href };
      },
    }),
  ],
});
