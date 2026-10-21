import type { PropItem } from '../../../shared/types/playground';

export const HEADING_PROPS: PropItem[] = [
  {
    name: 'as',
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
    defaultValue: "'h1'",
    description: 'Tag elemen semantik heading yang dirender ke DOM.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",
    defaultValue: 'Level default (h1 -> 3xl, h2 -> 2xl, ...)',
    description: 'Ukuran visual heading dari skala Space Grotesk / display.',
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'",
    defaultValue: 'Level default',
    description: 'Tingkat ketebalan font heading.',
  },
  {
    name: 'color',
    type: "'default' | 'secondary' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'inverse'",
    defaultValue: "'default'",
    description: 'Skema warna semantik token teks.',
  },
  {
    name: 'tracking',
    type: "'tighter' | 'tight' | 'normal' | 'wide' | 'wider'",
    defaultValue: "'tight'",
    description: 'Letter spacing heading.',
  },
];

export const TEXT_PROPS: PropItem[] = [
  {
    name: 'as',
    type: 'ElementType (span, p, label, div, ...)',
    defaultValue: "'span'",
    description: 'Tag elemen HTML yang dirender.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Ukuran teks dari 12px (xs) hingga 20px (xl).',
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'",
    defaultValue: "'normal'",
    description: 'Bobot ketebalan font teks.',
  },
  {
    name: 'variant',
    type: "'body' | 'lead' | 'caption' | 'label' | 'mono'",
    defaultValue: "'body'",
    description: 'Preset varian tipografi (body, lead paragraph, caption, label, mono code).',
  },
  {
    name: 'color',
    type: "'default' | 'secondary' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'inverse'",
    defaultValue: "'default'",
    description: 'Skema warna semantik teks.',
  },
  {
    name: 'truncate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Memotong teks satu baris dengan ellipsis jika meluap.',
  },
  {
    name: 'italic / underline / delete / mark',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Modifier format teks inline (miring, garis bawah, coret, atau sorotan highlight).',
  },
];

export const PARAGRAPH_PROPS: PropItem[] = [
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Ukuran font dan line-height paragraf proporsional.',
  },
  {
    name: 'lead',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Gaya lead paragraph berukuran lebih besar untuk pembuka artikel/halaman.',
  },
  {
    name: 'gutterBottom',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Memberi margin bottom standar antar paragraf.',
  },
];
