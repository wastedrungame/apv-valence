import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://apv-valence.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
});