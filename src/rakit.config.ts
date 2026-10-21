import { defineRakitConfig } from '@zarr20/rakit-ui';

/**
 * Konfigurasi Rakit UI murni default tanpa override style.
 * Seluruh komponen menampilkan gaya asli bawaan dari library @zarr20/rakit-ui.
 */
export const projectRakitConfig = defineRakitConfig({
  prefix: 'rakit',
  enableIdentifiers: true,
});

