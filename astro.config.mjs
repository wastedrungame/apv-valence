import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Wasterungame.github.io",
  base: "/apv-valence",
  vite: {
    plugins: [tailwindcss()],
  },
});