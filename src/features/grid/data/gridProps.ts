import type { PropItem } from '../../../shared/types/playground';

export const GRID_PROPS: PropItem[] = [
  {
    name: 'cols',
    type: 'GridColsNumber | ResponsiveProp<GridColsNumber>',
    defaultValue: '12',
    description: 'Jumlah kolom grid (1-12) atau objek breakpoint responsif: { base: 1, sm: 2, md: 3, lg: 12 }',
  },
  {
    name: 'gap',
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | ResponsiveProp<GridGap>",
    defaultValue: "'lg'",
    description: 'Jarak antar kolom dan baris (gap bawaan)',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'",
    defaultValue: "'start'",
    description: 'Perataan vertikal item grid (align-items)',
  },
  {
    name: 'justify',
    type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
    defaultValue: 'undefined',
    description: 'Distribusi horizontal item grid (justify-content)',
  },
];

export const GRID_COL_PROPS: PropItem[] = [
  {
    name: 'span',
    type: 'GridSpanNumber | ResponsiveProp<GridSpanNumber>',
    defaultValue: '12',
    description: 'Lebar kolom (1-12, "full", "auto") atau objek breakpoint responsif: { base: 12, md: 6, lg: 4 }',
  },
  {
    name: 'className',
    type: 'string',
    defaultValue: "''",
    description: 'Kelas CSS kustom tambahan',
  },
];
