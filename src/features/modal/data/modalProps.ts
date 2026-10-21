import type { PropItem } from '../../../shared/types/playground';

export const MODAL_PROPS: PropItem[] = [
  {
    name: 'isOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Visibility status of the modal dialog.',
    required: true,
  },
  {
    name: 'onClose',
    type: '() => void',
    description: 'Callback fired when the close button, ESC key, or backdrop overlay is clicked.',
    required: true,
  },
  {
    name: 'title',
    type: 'ReactNode',
    description: 'Title of the modal dialog in the header.',
  },
  {
    name: 'description',
    type: 'ReactNode',
    description: 'Subtitle or descriptive text under the header title.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: 'Responsive width scale for the modal dialog (xs ~384px to full ~95vw).',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    description: 'Icon element displayed alongside the modal title.',
  },
  {
    name: 'footer',
    type: 'ReactNode',
    description: 'Footer content for action buttons (cancel / confirm).',
  },
  {
    name: 'trapFocus',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Traps keyboard focus (Tab / Shift+Tab) inside the modal and restores focus when closed.',
  },
  {
    name: 'backdropBlur',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Applies glassmorphism blur effect to the backdrop overlay background.',
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Closes the modal when pressing the Escape key.',
  },
  {
    name: 'closeOnOverlayClick',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Closes the modal when clicking outside on the backdrop.',
  },
];
