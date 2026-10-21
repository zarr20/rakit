import type { PropItem } from '../../../shared/types/playground';

export const TABLE_PROPS: PropItem[] = [
  {
    name: 'data',
    type: 'T[]',
    description: 'Array data sumber yang akan dirender ke dalam baris tabel.',
    required: true,
  },
  {
    name: 'columns',
    type: 'TableColumn<T>[]',
    description: 'Konfigurasi kolom tabel (key, title, sortable, align, render, sticky).',
    required: true,
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Kerapatan padding dan ukuran font tabel.',
  },
  {
    name: 'striped',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Memberikan warna selang-seling (zebra stripe) pada baris genap/ganjil.',
  },
  {
    name: 'bordered',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menambahkan garis pemisah vertikal antar kolom.',
  },
  {
    name: 'stickyHeader',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Mempertahankan posisi header di atas saat tabel di-scroll ke bawah.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menampilkan overlay spinner loading atau baris skeleton placeholder.',
  },
  {
    name: 'skeletonRows',
    type: 'number',
    defaultValue: '0',
    description: 'Jumlah baris animated skeleton placeholder saat isLoading bernilai true.',
  },
  {
    name: 'rowSelection',
    type: 'TableRowSelection<T>',
    description: 'Konfigurasi multi-row selection (selectedRowKeys, onChange, getCheckboxProps).',
  },
  {
    name: 'emptySlot',
    type: 'ReactNode',
    description: 'Slot kustom untuk tampilan saat data tabel kosong.',
  },
  {
    name: 'onRowClick',
    type: '(record: T, index: number) => void',
    description: 'Callback saat baris tabel diklik.',
  },
];

