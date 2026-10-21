import type { PropItem } from '../../../shared/types/playground';

export const BREADCRUMB_PROPS: PropItem[] = [
  {
    name: 'items',
    type: 'BreadcrumbItemData[]',
    defaultValue: 'undefined',
    description: 'Declarative array of breadcrumb items ({ id, label, href, onClick, active, icon }).',
  },
  {
    name: 'separator',
    type: "'slash' | 'chevron' | 'arrow' | 'bullet' | ReactNode",
    defaultValue: "'slash'",
    description: 'Visual separator style rendered between navigation segment items.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg'",
    defaultValue: "'sm'",
    description: 'Text size scale and separator gap spacing.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Subcomponent content when using compound component mode (<Breadcrumb.Item>, etc.).',
  },
];

export const BREADCRUMB_ITEM_PROPS: PropItem[] = [
  {
    name: 'active',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Marks whether this item represents the active current page position.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Link element, text, or icon within the item.',
    required: true,
  },
];

export const BREADCRUMB_LINK_PROPS: PropItem[] = [
  {
    name: 'href',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Target navigation URL for the link.',
  },
  {
    name: 'onClick',
    type: '() => void',
    defaultValue: 'undefined',
    description: 'Custom click event handler when the link item is triggered.',
  },
  {
    name: 'as',
    type: 'ElementType (a, Link, button, ...)',
    defaultValue: "'a'",
    description: 'Underlying element rendered for the link (can be integrated with framework routers).',
  },
];
