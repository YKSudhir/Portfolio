import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    host: true, // This makes the server accessible externally
    port: parseInt(import.meta.env.VITE_PORT) || 4173, // Use VITE_PORT from env file or default to 4173
  },
});
