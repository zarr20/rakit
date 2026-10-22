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
