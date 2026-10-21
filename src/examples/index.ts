import type { PlaygroundExample } from '../components/playground/playground.types';
import { buttonBasicCode } from './button/basic';
import { buttonVariantsCode } from './button/variants';
import { inputBasicCode } from './input/basic';
import { inputValidationCode } from './input/validation';
import { routesBasicCode } from './routes/basic';
import { routesProtectedRouteCode } from './routes/protected-route';

export const PLAYGROUND_EXAMPLES: PlaygroundExample[] = [
  {
    id: 'button-basic',
    title: 'Button — Basic Counter',
    description: 'Tombol dasar dengan state reaktif dan interaksi klik',
    category: 'Button',
    code: buttonBasicCode,
  },
  {
    id: 'button-variants',
    title: 'Button — Varian & Ukuran',
    description: '10 varian visual, skala ukuran xs-xl, dan loading state',
    category: 'Button',
    code: buttonVariantsCode,
  },
  {
    id: 'input-basic',
    title: 'Input — TextField & Form',
    description: 'TextField, Select, dan Switch dengan data binding dua arah',
    category: 'Input',
    code: inputBasicCode,
  },
  {
    id: 'input-validation',
    title: 'Input — Validasi Form',
    description: 'Validasi form interaktif dengan pesan error dan submit handling',
    category: 'Input',
    code: inputValidationCode,
  },
  {
    id: 'routes-basic',
    title: 'Routes — Navigasi Dasar',
    description: 'Simulasi pergantian rute berbasis rakit-routes',
    category: 'Routes',
    code: routesBasicCode,
  },
  {
    id: 'routes-protected',
    title: 'Routes — RouteGuard RBAC',
    description: 'Proteksi halaman berdasarkan peran pengguna (Guest vs Admin)',
    category: 'Routes',
    code: routesProtectedRouteCode,
  },
];
