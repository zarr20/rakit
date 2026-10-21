import type { PropItem } from '../../../shared/types/playground';

export const CARD_PROPS: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'light' | 'bordered' | 'ghost' | 'flat' | 'elevated'",
    defaultValue: "'default'",
    description: 'Gaya background dan border kartu.',
  },
  {
    name: 'padding',
    type: "'none' | 'xSmall' | 'small' | 'medium' | 'large'",
    defaultValue: "'none'",
    description: 'Padding ruang dalam kartu.',
  },
  {
    name: 'gap',
    type: "'none' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | boolean",
    defaultValue: "'medium'",
    description: 'Jarak vertikal antar elemen anak dalam kartu.',
  },
  {
    name: 'hoverable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Memberikan efek elevasi bayangan saat kursor diarahkan (hover).',
  },
  {
    name: 'collapsible',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menjadikan konten kartu dapat diciutkan/dibentangkan.',
  },
  {
    name: 'title',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Judul kartu (otomatis merender CardHeader jika diisi).',
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Deskripsi singkat di bawah judul kartu.',
  },
  {
    name: 'badge',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Elemen badge di sebelah judul kartu.',
  },
];
