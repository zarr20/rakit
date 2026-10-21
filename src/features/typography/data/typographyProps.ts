import type { PropItem } from '../../../shared/types/playground';

export const HEADING_PROPS: PropItem[] = [
  {
    name: 'as',
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
    defaultValue: "'h1'",
    description: 'Semantic heading HTML element rendered into the DOM.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",
    defaultValue: 'Level default (h1 -> 3xl, h2 -> 2xl, ...)',
    description: 'Visual heading size from the Space Grotesk / display typography scale.',
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'",
    defaultValue: 'Level default',
    description: 'Font weight thickness level for the heading.',
  },
  {
    name: 'color',
    type: "'default' | 'secondary' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'inverse'",
    defaultValue: "'default'",
    description: 'Semantic color token scheme for the text.',
  },
  {
    name: 'tracking',
    type: "'tighter' | 'tight' | 'normal' | 'wide' | 'wider'",
    defaultValue: "'tight'",
    description: 'Letter spacing tracking for the heading.',
  },
];

export const TEXT_PROPS: PropItem[] = [
  {
    name: 'as',
    type: 'ElementType (span, p, label, div, ...)',
    defaultValue: "'span'",
    description: 'HTML tag element rendered.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Text size scale ranging from 12px (xs) to 20px (xl).',
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'",
    defaultValue: "'normal'",
    description: 'Font weight thickness for the text.',
  },
  {
    name: 'variant',
    type: "'body' | 'lead' | 'caption' | 'label' | 'mono'",
    defaultValue: "'body'",
    description: 'Typography variant preset (body, lead paragraph, caption, label, mono code).',
  },
  {
    name: 'color',
    type: "'default' | 'secondary' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'inverse'",
    defaultValue: "'default'",
    description: 'Semantic color scheme of the text.',
  },
  {
    name: 'truncate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Truncates single line text with ellipsis upon overflow.',
  },
  {
    name: 'italic / underline / delete / mark',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Inline text formatting modifiers (italic, underline, strikethrough, or highlight).',
  },
];

export const PARAGRAPH_PROPS: PropItem[] = [
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Proportional font size and line-height scale for paragraph text.',
  },
  {
    name: 'lead',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Larger lead paragraph styling for article or page intros.',
  },
  {
    name: 'gutterBottom',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Applies standardized bottom margin between paragraphs.',
  },
];
