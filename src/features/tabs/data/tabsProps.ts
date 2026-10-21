import type { PropItem } from '../../../shared/types/playground';

export const TABS_PROPS: PropItem[] = [
  {
    name: 'items',
    type: 'TabItem[]',
    description: 'Array of tab items containing { id, label, icon, badge, disabled, content }.',
    required: true,
  },
  {
    name: 'variant',
    type: "'default' | 'pills' | 'underline' | 'bordered'",
    defaultValue: "'default'",
    description: 'Visual appearance variant for the tab navigation container and triggers.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Tab trigger dimensions and padding scale.',
  },
  {
    name: 'theme',
    type: "'light' | 'dark'",
    defaultValue: "'light'",
    description: 'Visual color contrast theme mode for the tabs.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Stretches tab triggers evenly across 100% of the container width.',
  },
  {
    name: 'value',
    type: 'string',
    description: 'Currently active tab ID in controlled mode.',
  },
  {
    name: 'onChange',
    type: '(tabId: string) => void',
    description: 'Callback fired when a different tab is clicked or selected.',
  },
  {
    name: 'extra',
    type: 'ReactNode',
    description: 'Supplemental right-aligned element slot (e.g. action button or filter).',
  },
];
