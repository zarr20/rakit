import type { PropItem } from '../../../shared/types/playground';

export const BREADCRUMB_PROPS: PropItem[] = [
  {
    name: 'items',
    type: 'BreadcrumbItemData[]',
    defaultValue: 'undefined',
    description: 'Array deklaratif item breadcrumb ({ id, label, href, onClick, active, icon }).',
  },
  {
    name: 'separator',
    type: "'slash' | 'chevron' | 'arrow' | 'bullet' | ReactNode",
    defaultValue: "'slash'",
    description: 'Bentuk pemisah visual antar segmen item navigasi.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg'",
    defaultValue: "'sm'",
    description: 'Skala ukuran teks dan spacing celah pemisah breadcrumb.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Konten subkomponen jika menggunakan mode compound (<Breadcrumb.Item>, dll.).',
  },
];

export const BREADCRUMB_ITEM_PROPS: PropItem[] = [
  {
    name: 'active',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menandai apakah item ini merupakan posisi halaman saat ini.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Elemen link, teks, atau icon di dalam item.',
    required: true,
  },
];

export const BREADCRUMB_LINK_PROPS: PropItem[] = [
  {
    name: 'href',
    type: 'string',
    defaultValue: 'undefined',
    description: 'URL target navigasi tautan.',
  },
  {
    name: 'onClick',
    type: '() => void',
    defaultValue: 'undefined',
    description: 'Handler klik kustom saat item tautan ditekan.',
  },
  {
    name: 'as',
    type: 'ElementType (a, Link, button, ...)',
    defaultValue: "'a'",
    description: 'Komponen dasar yang dirender untuk tautan (bisa diintegrasikan dengan router).',
  },
];
