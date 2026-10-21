import type { PropItem } from '../../../shared/types/playground';

export const BADGE_PROPS: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple'",
    defaultValue: "'default'",
    description: 'Badge status color scheme variant.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'sm'",
    description: 'Dimensional sizing and padding scale: xs (20px), sm (24px), md (28px), lg (32px), xl (36px).',
  },
  {
    name: 'pill',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Renders fully rounded capsule pill (true) or proportional rounded corners (false).',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Icon or status dot slot rendered on the left of the badge label.',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Icon slot rendered on the right of the badge label.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Label or text content inside the badge.',
    required: true,
  },
];
