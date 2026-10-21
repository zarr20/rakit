import type { PropItem } from '../../../shared/types/playground';

export const DRAWER_PROPS: PropItem[] = [
  {
    name: 'isOpen',
    type: 'boolean',
    description: 'Menentukan apakah drawer sedang ditampilkan.',
    required: true,
  },
  {
    name: 'onClose',
    type: '() => void',
    description: 'Callback saat drawer diminta untuk ditutup (klik overlay, tombol close, atau tombol Escape).',
    required: true,
  },
  {
    name: 'placement',
    type: "'left' | 'right' | 'top' | 'bottom'",
    defaultValue: "'right'",
    description: 'Arah slide-in drawer. Gunakan left untuk navigasi sidebar mobile.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: 'Lebar (atau tinggi untuk top/bottom) panel drawer.',
  },
  {
    name: 'title',
    type: 'ReactNode',
    description: 'Judul drawer pada header bawaan.',
  },
  {
    name: 'description',
    type: 'ReactNode',
    description: 'Deskripsi singkat di bawah judul.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    description: 'Ikon di samping judul header.',
  },
  {
    name: 'footer',
    type: 'ReactNode',
    description: 'Konten footer aksi drawer (misal tombol Simpan/Batal).',
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menutup drawer otomatis saat menekan tombol Escape.',
  },
  {
    name: 'closeOnOverlayClick',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menutup drawer otomatis saat mengklik area backdrop di luar panel.',
  },
  {
    name: 'backdropBlur',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Memberikan efek glassmorphism blur pada backdrop overlay.',
  },
  {
    name: 'showCloseButton',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menampilkan tombol silang (X) di pojok kanan header.',
  },
];
