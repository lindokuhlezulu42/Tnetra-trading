import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // GitHub Pages repository name
  base: "/Tnetra-trading/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});