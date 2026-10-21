import { defineRakitConfig } from '@zarr20/rakit-ui';

/**
 * Pure default Rakit UI configuration without custom style overrides.
 * All components render their native default styling from @zarr20/rakit-ui.
 */
export const projectRakitConfig = defineRakitConfig({
  prefix: 'rakit',
  enableIdentifiers: true,
});

