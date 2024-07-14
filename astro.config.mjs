import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sentry from '@sentry/astro';
import "dotenv/config"

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  integrations: [mdx(), sitemap(), tailwind(), svelte(), sentry({
    dsn: process.env.SENTRY_DSN,
    sourceMapsUploadOptions: {
      project: process.env.SENTRY_PROJECT_SLUG,
      authToken: process.env.SENTRY_AUTH_TOKEN
    }
  })],
  /* output: "hybrid", // or 'server'
  experimental: {
    actions: true,
  }, */
});