import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' membuat asset memakai path relatif sehingga aman untuk
// GitHub Pages (https://<user>.github.io/<repo>/) maupun hosting di root.
// Routing memakai HashRouter sehingga tidak butuh rewrite server.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          charts: ['recharts'],
        },
      },
    },
  },
});
