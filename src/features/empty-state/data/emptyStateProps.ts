import type { PropItem } from '../../../shared/types/playground';

export const EMPTY_STATE_PROPS: PropItem[] = [
  {
    name: 'preset',
    type: "'empty' | '404' | 'error' | 'no-connection' | 'search'",
    description: 'Preset ilustrasi vektor dan teks bawaan untuk skenario error, 404, offline, dsb.',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Judul utama state kosong (misal: "Tidak Ada Data"). Otomatis terisi bila menggunakan preset.',
  },
  {
    name: 'description',
    type: 'string',
    description: 'Penjelasan atau petunjuk bagi pengguna untuk mengisi data.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    description: 'Elemen ikon grafis di tengah atas.',
  },
  {
    name: 'action',
    type: 'ReactNode',
    description: 'Tombol aksi untuk menyelesaikan empty state (e.g. tombol "Buat Baru").',
  },
  {
    name: 'compact',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Mengurangi ukuran padding dan ikon untuk diletakkan di dalam card kecil atau tabel.',
  },
  {
    name: 'theme',
    type: "'light' | 'dark'",
    defaultValue: "'light'",
    description: 'Mode tema kontras warna.',
  },
];
