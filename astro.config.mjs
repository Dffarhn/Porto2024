import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";
import { projects } from "./src/data/projects.ts";

const site = "https://daffaraihan.vercel.app";

// https://astro.build/config
export default defineConfig({
  site,
  output: "server",
  integrations: [
    react({
      experimentalReactChildren: true
    }),
    tailwind(),
    sitemap({
      // Private/app pages stay out of the sitemap (they are also noindex + disallowed in robots.txt).
      filter: (page) => !/\/(auth|tasks)(\/|$)/.test(page),
      // /projects/[slug] is a dynamic route, so Astro cannot discover the URLs on its own.
      customPages: projects.map((project) => `${site}/projects/${project.slug}`),
      // Match the canonical URLs, which have no trailing slash (except the homepage).
      serialize: (item) => {
        const url = new URL(item.url);
        if (url.pathname.length > 1) url.pathname = url.pathname.replace(/\/$/, "");
        return { ...item, url: url.href };
      },
    }),
  ],
  adapter: vercel({ imageService: true })
});
