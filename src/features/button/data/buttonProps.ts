import type { PropItem } from '../../../shared/types/playground';

export const BUTTON_PROPS: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'outline' | 'success' | 'danger' | 'warning' | 'info' | 'purple' | 'subtle' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Determines the visual appearance and color scheme of the button.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'icon'",
    defaultValue: "'sm'",
    description: 'Dimensional sizing and padding scale of the button.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays a spinner indicator and disables click events.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables user click interactions and dims appearance.',
  },
  {
    name: 'pill',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Renders pill-shaped fully rounded corners (rounded-full).',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Stretches button to fill 100% of its parent container width.',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Icon element rendered before the button label.',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Icon element rendered after the button label.',
  },
];
