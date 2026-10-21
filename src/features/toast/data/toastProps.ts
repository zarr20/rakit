import type { PropItem } from '../../../shared/types/playground';

export const TOASTER_PROPS: PropItem[] = [
  {
    name: 'position',
    type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",
    defaultValue: "'top-right'",
    description: 'Screen anchor position where toast notifications appear.',
  },
  {
    name: 'theme',
    type: "'light' | 'dark' | 'auto'",
    defaultValue: "'auto'",
    description: 'Color theme of the toast notification container.',
  },
  {
    name: 'duration',
    type: 'number',
    defaultValue: '4000',
    description: 'Auto-dismiss duration in milliseconds.',
  },
  {
    name: 'showProgress',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Displays a horizontal countdown timer bar along the bottom of the toast.',
  },
];
