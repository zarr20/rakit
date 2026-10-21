import type { PropItem } from '../../../shared/types/playground';

export const EMPTY_STATE_PROPS: PropItem[] = [
  {
    name: 'preset',
    type: "'empty' | '404' | 'error' | 'no-connection' | 'search'",
    description: 'Built-in vector illustration and text preset for error, 404, offline, search, and empty scenarios.',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Primary empty state title (e.g. "No Data Found"). Automatically populated when using presets.',
  },
  {
    name: 'description',
    type: 'string',
    description: 'Explanation or instructions for users to populate or resolve data state.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    description: 'Center graphic icon element rendered above the title.',
  },
  {
    name: 'action',
    type: 'ReactNode',
    description: 'Call-to-action button to resolve the empty state (e.g. "Create New" button).',
  },
  {
    name: 'compact',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Reduces padding and icon proportions to fit within small cards or data tables.',
  },
  {
    name: 'theme',
    type: "'light' | 'dark'",
    defaultValue: "'light'",
    description: 'Visual color contrast theme mode.',
  },
];
