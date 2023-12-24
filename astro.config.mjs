import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://inspiring-hummingbird-145527.netlify.app/",
  integrations: [preact()]
});