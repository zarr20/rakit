import type { PropItem } from '../../../shared/types/playground';

export const GRID_PROPS: PropItem[] = [
  {
    name: 'cols',
    type: 'GridColsNumber | ResponsiveProp<GridColsNumber>',
    defaultValue: '12',
    description: 'Number of grid columns (1-12) or responsive breakpoint dictionary: { base: 1, sm: 2, md: 3, lg: 12 }',
  },
  {
    name: 'gap',
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | ResponsiveProp<GridGap>",
    defaultValue: "'lg'",
    description: 'Spacing gap between columns and rows.',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'",
    defaultValue: "'start'",
    description: 'Vertical alignment of grid items (align-items).',
  },
  {
    name: 'justify',
    type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
    defaultValue: 'undefined',
    description: 'Horizontal distribution of grid items (justify-content).',
  },
];

export const GRID_COL_PROPS: PropItem[] = [
  {
    name: 'span',
    type: 'GridSpanNumber | ResponsiveProp<GridSpanNumber>',
    defaultValue: '12',
    description: 'Column span width (1-12, "full", "auto") or responsive breakpoint dictionary: { base: 12, md: 6, lg: 4 }',
  },
  {
    name: 'className',
    type: 'string',
    defaultValue: "''",
    description: 'Additional custom CSS classes.',
  },
];
