import type { PropItem } from '../../../shared/types/playground';

export const CONTAINER_PROPS: PropItem[] = [
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'lg'",
    description: 'Horizontal max-width bounding threshold for responsive content.',
  },
  {
    name: 'padding',
    type: "'none' | 'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Internal horizontal and vertical padding space.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered' | 'ghost'",
    defaultValue: "'default'",
    description: 'Background surface and border container style.',
  },
];

export const ACTION_BAR_PROPS: PropItem[] = [
  {
    name: 'position',
    type: "'top' | 'bottom' | 'sticky-bottom'",
    defaultValue: "'bottom'",
    description: 'Placement position for form or page action bar.',
  },
  {
    name: 'align',
    type: "'left' | 'center' | 'right' | 'between'",
    defaultValue: "'right'",
    description: 'Horizontal alignment of action buttons within the bar.',
  },
];
