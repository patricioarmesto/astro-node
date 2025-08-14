import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),

  integrations: [starlight({
    title: 'Mi encantador sitio de documentos',
  })]
});