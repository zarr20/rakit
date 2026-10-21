import type { PropItem } from '../../../shared/types/playground';

export const BUTTON_PROPS: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'outline' | 'success' | 'danger' | 'warning' | 'info' | 'purple' | 'subtle' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Menentukan gaya visual button.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'icon'",
    defaultValue: "'sm'",
    description: 'Ukuran dimensi dan padding tombol.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menampilkan spinner loading dan menonaktifkan klik.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menonaktifkan interaksi klik tombol.',
  },
  {
    name: 'pill',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Mengubah sudut tombol menjadi rounded-full melingkar.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Tombol mengisi lebar penuh container (w-full).',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Elemen ikon di sebelah kiri teks.',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Elemen ikon di sebelah kanan teks.',
  },
];
