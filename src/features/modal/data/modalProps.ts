import type { PropItem } from '../../../shared/types/playground';

export const MODAL_PROPS: PropItem[] = [
  {
    name: 'isOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Status visibilitas dialog modal.',
    required: true,
  },
  {
    name: 'onClose',
    type: '() => void',
    description: 'Callback dipanggil saat tombol close, tombol ESC, atau overlay backdrop diklik.',
    required: true,
  },
  {
    name: 'title',
    type: 'ReactNode',
    description: 'Judul dialog modal pada header.',
  },
  {
    name: 'description',
    type: 'ReactNode',
    description: 'Subjudul atau keterangan deskripsi dialog.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: 'Skala ukuran lebar dialog modal responsif (xs ~384px hingga full ~95vw).',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    description: 'Elemen ikon di samping judul modal.',
  },
  {
    name: 'footer',
    type: 'ReactNode',
    description: 'Konten footer tombol aksi (batal / konfirmasi).',
  },
  {
    name: 'trapFocus',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Mengunci fokus keyboard (Tab / Shift+Tab) di dalam modal dan mengembalikan fokus saat ditutup.',
  },
  {
    name: 'backdropBlur',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menerapkan efek glassmorphism blur pada latar backdrop overlay.',
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menutup modal saat tombol keyboard Escape ditekan.',
  },
  {
    name: 'closeOnOverlayClick',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menutup modal saat backdrop blur di luar modal diklik.',
  },
];

