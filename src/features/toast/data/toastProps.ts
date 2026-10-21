import type { PropItem } from '../../../shared/types/playground';

export const TOASTER_PROPS: PropItem[] = [
  {
    name: 'position',
    type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",
    defaultValue: "'top-right'",
    description: 'Posisi kemunculan notifikasi toast di layar.',
  },
  {
    name: 'theme',
    type: "'light' | 'dark' | 'auto'",
    defaultValue: "'auto'",
    description: 'Tema warna toast notification container.',
  },
  {
    name: 'duration',
    type: 'number',
    defaultValue: '4000',
    description: 'Durasi otomatis toast menghilang dalam milidetik.',
  },
  {
    name: 'showProgress',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menampilkan indikator baris timer countdown horizontal di bagian bawah toast.',
  },
];

