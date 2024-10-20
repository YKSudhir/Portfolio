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
    host: "0.0.0.0", // Bind to 0.0.0.0 to make it accessible externally
    port: parseInt(import.meta.env.VITE_PORT) || 4173, // Use the correct port
  },
});
