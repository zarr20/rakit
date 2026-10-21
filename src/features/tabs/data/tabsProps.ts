import type { PropItem } from '../../../shared/types/playground';

export const TABS_PROPS: PropItem[] = [
  {
    name: 'items',
    type: 'TabItem[]',
    description: 'Array tab item yang berisi { id, label, icon, badge, disabled, content }.',
    required: true,
  },
  {
    name: 'variant',
    type: "'default' | 'pills' | 'underline' | 'bordered'",
    defaultValue: "'default'",
    description: 'Gaya visual container dan tombol navigasi tab.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Ukuran tombol tab dan padding.',
  },
  {
    name: 'theme',
    type: "'light' | 'dark'",
    defaultValue: "'light'",
    description: 'Mode tema kontras warna tab.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Tab mengisi seluruh lebar container secara proporsional.',
  },
  {
    name: 'value',
    type: 'string',
    description: 'Tab ID yang sedang aktif (controlled mode).',
  },
  {
    name: 'onChange',
    type: '(tabId: string) => void',
    description: 'Callback saat pengguna mengklik tab lain.',
  },
  {
    name: 'extra',
    type: 'ReactNode',
    description: 'Slot elemen tambahan di sebelah kanan navigasi tab (e.g. tombol aksi).',
  },
];
