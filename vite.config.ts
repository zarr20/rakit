import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// The local @zarr20/rakit-routes tarball is a Node-only CLI/Vite plugin and
// is not compatible with Vite 6's browser optimizer. The generated router code
// is already committed under src/shared/router, so we intentionally skip the
// runtime plugin during the app build.
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: /^@zarr20\/rakit-routes$/, replacement: '@zarr20/rakit-routes/client' },
      { find: 'node:path', replacement: path.resolve(__dirname, './src/shims/node-path.ts') },
      { find: 'node:fs', replacement: path.resolve(__dirname, './src/shims/node-fs.ts') },
    ],
  },
  server: {
    port: 5173,
    open: false,
  },
});
