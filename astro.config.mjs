import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://ezdev2.github.io/orus/",
  base: "/",
  integrations: [tailwind(), astroI18next()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
