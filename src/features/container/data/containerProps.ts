import type { PropItem } from '../../../shared/types/playground';

export const CONTAINER_PROPS: PropItem[] = [
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'lg'",
    description: 'Lebar batas horizontal container responsif.',
  },
  {
    name: 'padding',
    type: "'none' | 'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Padding ruang dalam horizontal dan vertikal.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered' | 'ghost'",
    defaultValue: "'default'",
    description: 'Gaya background dan border container.',
  },
];

export const ACTION_BAR_PROPS: PropItem[] = [
  {
    name: 'position',
    type: "'top' | 'bottom' | 'sticky-bottom'",
    defaultValue: "'bottom'",
    description: 'Penempatan posisi action bar aksi formulir/halaman.',
  },
  {
    name: 'align',
    type: "'left' | 'center' | 'right' | 'between'",
    defaultValue: "'right'",
    description: 'Perataan horizontal tombol di dalam bar.',
  },
];
