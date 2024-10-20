import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development or production)
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
    server: {
      host: "0.0.0.0", // Bind to 0.0.0.0 to make it accessible externally
      port: parseInt(env.VITE_PORT) || 4173, // Use VITE_PORT from environment, fallback to 4173
    },
  };
});
