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
      '@zarr20/rakit-ui/styles.css': path.resolve(__dirname, '../rakit-ui/dist/rakit-ui.css'),
      '@zarr20/rakit-ui': path.resolve(__dirname, '../rakit-ui/src/index.ts'),
      '@zarr20/rakit-routes/client': path.resolve(__dirname, '../rakit-routes/src/client.ts'),
      '@zarr20/rakit-routes': path.resolve(__dirname, '../rakit-routes/src/client.ts'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});

