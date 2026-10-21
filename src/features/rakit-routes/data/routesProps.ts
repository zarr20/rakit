import type { PropItem } from '../../../shared/types/playground';

export const ROUTE_MAPPER_CONFIG_PROPS: PropItem[] = [
  {
    name: 'pages.dir',
    type: 'string',
    defaultValue: "'src/pages'",
    description: 'Direktori tempat file halaman React (page components) berada.',
    required: true,
  },
  {
    name: 'output.dir',
    type: 'string',
    defaultValue: "'src/shared/router'",
    description: 'Direktori target untuk file kode router yang digenerate.',
    required: true,
  },
  {
    name: 'output.name',
    type: 'string',
    defaultValue: "'router'",
    description: 'Nama file hasil generate (tanpa ekstensi .tsx).',
  },
  {
    name: 'watch',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Mode watch untuk live regenerasi otomatis saat file halaman bertambah/berubah.',
  },
];

export const ROUTE_GUARD_PROPS: PropItem[] = [
  {
    name: 'meta',
    type: 'RouteMeta',
    description: 'Metadata rute yang berisi hak akses: { protected, roles, permissions, guestOnly, redirect }.',
  },
  {
    name: 'auth',
    type: 'AuthState | null',
    description: 'Status otentikasi pengguna aktif: { isLogin, user, roles, permissions }.',
    required: true,
  },
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Komponen halaman yang dilindungi jika lolos evaluasi guard.',
    required: true,
  },
  {
    name: 'fallback',
    type: 'ReactNode | ((redirect?: string) => ReactNode)',
    description: 'Komponen yang dirender jika akses ditolak (misal: redirect ke /login atau halaman 403).',
  },
  {
    name: 'options',
    type: 'GuardOptions',
    description: 'Konfigurasi redirect fallback { fallbackRedirect, forbiddenRedirect, guestRedirect }.',
  },
];

export const VITE_PLUGIN_PROPS: PropItem[] = [
  {
    name: 'pagesDir',
    type: 'string',
    defaultValue: "'src/pages'",
    description: 'Path folder halaman yang dipantau oleh server Vite.',
  },
  {
    name: 'outputDir',
    type: 'string',
    defaultValue: "'src/shared/router'",
    description: 'Path folder output file router yang digenerate oleh plugin.',
  },
];
