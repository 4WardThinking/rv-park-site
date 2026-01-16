import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://4WardThinking.github.io',
  base: "/rv-park-site",
  sitemap: true,
  integrations: [sitemap(), mdx(), lit(), icon()], // Add renderers to the config
});