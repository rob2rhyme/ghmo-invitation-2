// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) {
            return 'react'; // All React-related code goes into a separate chunk
          }
          if (id.includes('node_modules/lodash')) {
            return 'lodash'; // All Lodash-related code goes into a separate chunk
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    hmr: { overlay: false }
  }
});
