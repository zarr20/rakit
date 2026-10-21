import type { PropItem } from '../../../shared/types/playground';

export const DRAWER_PROPS: PropItem[] = [
  {
    name: 'isOpen',
    type: 'boolean',
    description: 'Determines whether the drawer is open and visible.',
    required: true,
  },
  {
    name: 'onClose',
    type: '() => void',
    description: 'Callback fired when the drawer is requested to close (overlay click, close button, or Escape key).',
    required: true,
  },
  {
    name: 'placement',
    type: "'left' | 'right' | 'top' | 'bottom'",
    defaultValue: "'right'",
    description: 'Slide-in direction of the drawer. Use left for mobile sidebar navigation.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: 'Width (or height for top/bottom) of the drawer panel.',
  },
  {
    name: 'title',
    type: 'ReactNode',
    description: 'Title displayed in the built-in drawer header.',
  },
  {
    name: 'description',
    type: 'ReactNode',
    description: 'Short subtitle or description below the title.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    description: 'Icon displayed beside the header title.',
  },
  {
    name: 'footer',
    type: 'ReactNode',
    description: 'Footer action content for the drawer (e.g. Save/Cancel buttons).',
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Automatically close the drawer when pressing the Escape key.',
  },
  {
    name: 'closeOnOverlayClick',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Automatically close the drawer when clicking outside on the backdrop.',
  },
  {
    name: 'backdropBlur',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Applies glassmorphism blur effect to the backdrop overlay.',
  },
  {
    name: 'showCloseButton',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Displays a close (X) button in the top-right corner of the header.',
  },
];
