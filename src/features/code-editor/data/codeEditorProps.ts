import type { PropItem } from '../../../shared/types/playground';

export const CODE_EDITOR_PROPS: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    description: 'String kode atau JSON yang sedang diedit/ditampilkan.',
    required: true,
  },
  {
    name: 'onChange',
    type: '(val: string) => void',
    description: 'Callback saat teks kode diubah oleh pengguna.',
  },
  {
    name: 'language',
    type: "'tsx' | 'ts' | 'html' | 'js' | 'json' | 'css' | string",
    defaultValue: "'json'",
    description: 'Bahasa pemrograman untuk syntax highlighting (TSX, TypeScript, HTML, JavaScript, JSON, CSS, dll).',
  },
  {
    name: 'files',
    type: 'CodeViewerFile[]',
    description: 'Daftar berkas untuk mode multi-file tabs pada FileViewer / CodeViewer.',
  },
  {
    name: 'activeFileName',
    type: 'string',
    description: 'Nama berkas yang sedang aktif terpilih dalam mode multi-file tabs.',
  },
  {
    name: 'onActiveFileChange',
    type: '(fileName: string) => void',
    description: 'Callback saat berkas aktif diubah melalui tab navigasi.',
  },
  {
    name: 'readOnly',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Mengaktifkan mode read-only dengan rendering syntax highlighting tokenized.',
  },
  {
    name: 'viewMode',
    type: "'code' | 'tree' | 'split'",
    defaultValue: "'code'",
    description: 'Mode tampilan (Code raw view, Interactive JSON tree node viewer, atau Split side-by-side).',
  },
  {
    name: 'theme',
    type: "'dark' | 'light'",
    defaultValue: "'dark'",
    description: 'Tema tampilan editor kode (light atau dark).',
  },
  {
    name: 'showLineNumbers',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menampilkan penomoran baris (gutter).',
  },
  {
    name: 'showToolbar',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menampilkan baris aksi atas (copy, format JSON, view toggle).',
  },
  {
    name: 'showCopyButton',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Menampilkan tombol salin kode ke clipboard.',
  },
  {
    name: 'height',
    type: 'string | number',
    defaultValue: "'auto'",
    description: 'Ketinggian area editor.',
  },
  {
    name: 'defaultViewMode',
    type: "'split' | 'code' | 'preview'",
    defaultValue: "'split'",
    description: 'Mode tampilan awal pada LivePlayground (Split side-by-side, Code only, atau Preview only).',
  },
  {
    name: 'defaultViewport',
    type: "'desktop' | 'tablet' | 'mobile'",
    defaultValue: "'desktop'",
    description: 'Ukuran frame viewport live preview (Desktop 100%, Tablet 768px, Mobile 375px).',
  },
  {
    name: 'scope',
    type: 'Record<string, any>',
    description: 'Objek scope kustom untuk menginjeksi komponen, hooks, atau library tambahan ke live compiler.',
  },
  {
    name: 'maxHeight',
    type: 'string | number',
    defaultValue: "'480px'",
    description: 'Batas ketinggian maksimal editor dengan scrollbar vertikal.',
  },
];
