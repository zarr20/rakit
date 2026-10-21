import type { PropItem } from '../../../shared/types/playground';

export const BADGE_PROPS: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple'",
    defaultValue: "'default'",
    description: 'Skema warna status badge.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'sm'",
    description: 'Ukuran dimensi dan padding badge: xs (20px), sm (24px), md (28px), lg (32px), xl (36px).',
  },
  {
    name: 'pill',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Mengatur bentuk rounded-full kapsul pill (true) atau rounded sudut proporsional (false).',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Slot ikon atau status dot di sisi kiri label teks.',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Slot ikon di sisi kanan label teks.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Label atau konten teks di dalam badge.',
    required: true,
  },
];
