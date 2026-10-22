import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { rakitRoutesPlugin } from '@zarr20/rakit-routes/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    rakitRoutesPlugin({
      pages: {
        dir: 'src/pages',
      },
      output: {
        dir: 'src/shared/router',
        fileName: 'router',
      },
    }),
  ],
  optimizeDeps: {
    // The local @zarr20/rakit-routes tarball is a Node/Vite plugin dependency.
    // Vite should not prebundle it for the browser build because it imports
    // Node builtins like fs/path directly.
    exclude: ['@zarr20/rakit-routes'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
