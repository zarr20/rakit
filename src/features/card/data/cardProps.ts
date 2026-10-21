import type { PropItem } from '../../../shared/types/playground';

export const CARD_PROPS: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'light' | 'bordered' | 'ghost' | 'flat' | 'elevated'",
    defaultValue: "'default'",
    description: 'Background and border style of the card.',
  },
  {
    name: 'padding',
    type: "'none' | 'xSmall' | 'small' | 'medium' | 'large'",
    defaultValue: "'none'",
    description: 'Inner padding space of the card.',
  },
  {
    name: 'gap',
    type: "'none' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | boolean",
    defaultValue: "'medium'",
    description: 'Vertical spacing between child elements within the card.',
  },
  {
    name: 'hoverable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Applies elevation shadow effect on hover.',
  },
  {
    name: 'collapsible',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Makes card body content collapsible/expandable.',
  },
  {
    name: 'title',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Card title (automatically renders CardHeader when provided).',
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Brief description below the card title.',
  },
  {
    name: 'badge',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Badge element displayed adjacent to the card title.',
  },
];
