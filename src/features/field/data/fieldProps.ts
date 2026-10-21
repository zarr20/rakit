import type { PropItem } from '../../../shared/types/playground';

export const TEXT_FIELD_PROPS: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    description: 'Nilai teks controlled input.',
  },
  {
    name: 'onChange',
    type: '(e: ChangeEvent<HTMLInputElement>) => void',
    description: 'Callback saat teks berubah.',
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Placeholder teks saat input kosong.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Tingkatan ukuran standar field input.',
  },
  {
    name: 'clearable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menampilkan tombol silang untuk menghapus isi teks dalam 1 klik.',
  },
  {
    name: 'type',
    type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url'",
    defaultValue: "'text'",
    description: 'Tipe elemen input HTML. Jika password, otomatis ada toggle mata show/hide.',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    description: 'Ikon di sisi kiri input.',
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label field di atas input.',
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Pesan panduan di bawah input.',
  },
  {
    name: 'error',
    type: 'string | boolean',
    description: 'Pesan kesalahan atau status error border merah.',
  },
];

export const AUTOCOMPLETE_PROPS: PropItem[] = [
  {
    name: 'options',
    type: '(AutocompleteOption | string)[]',
    description: 'Daftar pilihan query data.',
    required: true,
  },
  {
    name: 'value',
    type: 'string',
    description: 'Nilai yang terpilih.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    description: 'Callback saat item dipilih atau diketik.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Ukuran kontrol autocomplete.',
  },
  {
    name: 'clearable',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menampilkan tombol hapus input cepat.',
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menampilkan spinner saat query asinkron berjalan.',
  },
  {
    name: 'emptyText',
    type: 'string',
    defaultValue: "'Tidak ada pilihan yang cocok'",
    description: 'Pesan ketika tidak ada opsi yang sesuai pencarian.',
  },
];

export const SELECT_PROPS: PropItem[] = [
  {
    name: 'options',
    type: 'Array<{ label: string; value: string | number } | string>',
    description: 'Daftar pilihan dropdown.',
    required: true,
  },
  {
    name: 'value',
    type: 'string',
    description: 'Nilai yang terpilih.',
  },
  {
    name: 'onChange',
    type: '(val: string) => void',
    description: 'Callback saat item dropdown dipilih.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Ukuran kontrol select dropdown.',
  },
  {
    name: 'searchable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Mengaktifkan input pencarian internal dalam dropdown.',
  },
  {
    name: 'clearable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menampilkan tombol hapus pilihan.',
  },
];

export const MULTI_SELECT_PROPS: PropItem[] = [
  {
    name: 'options',
    type: 'Array<{ label: string; value: string } | string>',
    description: 'Daftar pilihan tag.',
    required: true,
  },
  {
    name: 'value',
    type: 'string[]',
    description: 'Array nilai yang terpilih.',
  },
  {
    name: 'onChange',
    type: '(values: string[]) => void',
    description: 'Callback saat array tag diperbarui.',
  },
  {
    name: 'maxDisplayTags',
    type: 'number',
    description: 'Batas jumlah tag yang ditampilkan sebelum ringkasan +N.',
  },
];

export const TEXT_AREA_PROPS: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    description: 'Nilai teks multi-baris.',
  },
  {
    name: 'rows',
    type: 'number',
    defaultValue: '3',
    description: 'Jumlah baris tinggi textarea default.',
  },
  {
    name: 'showCount',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Menampilkan counter jumlah karakter.',
  },
  {
    name: 'maxLength',
    type: 'number',
    description: 'Batas maksimal karakter input.',
  },
];

export const CHECKBOX_PROPS: PropItem[] = [
  {
    name: 'checked',
    type: 'boolean',
    description: 'Status centang.',
  },
  {
    name: 'onChange',
    type: '(checked: boolean) => void',
    description: 'Callback saat status centang berubah.',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Status parsial/sebagian (garis horizontal).',
  },
  {
    name: 'variant',
    type: "'default' | 'card'",
    defaultValue: "'default'",
    description: 'Varian tampilan standar inline atau kotak kartu interaktif.',
  },
];

export const RADIO_PROPS: PropItem[] = [
  {
    name: 'options',
    type: 'RadioOption[]',
    description: 'Daftar pilihan radio eksklusif.',
    required: true,
  },
  {
    name: 'value',
    type: 'string',
    description: 'Nilai radio aktif.',
  },
  {
    name: 'orientation',
    type: "'vertical' | 'horizontal'",
    defaultValue: "'vertical'",
    description: 'Susunan tata letak item radio.',
  },
  {
    name: 'variant',
    type: "'default' | 'card'",
    defaultValue: "'default'",
    description: 'Varian tampilan standar atau kartu pilihan.',
  },
];

export const SWITCH_PROPS: PropItem[] = [
  {
    name: 'checked',
    type: 'boolean',
    description: 'Status aktif on/off.',
  },
  {
    name: 'onChange',
    type: '(checked: boolean) => void',
    description: 'Callback saat toggle switch berubah.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Tingkatan ukuran switch toggle.',
  },
];
