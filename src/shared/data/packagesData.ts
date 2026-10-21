export type PackageId = 'rakit-ui' | 'rakit-routes';

export interface PackageInfo {
  id: PackageId;
  name: string;
  version: string;
  badge: string;
  description: string;
  npmUrl: string;
  defaultRoute: string;
}

export const PACKAGES_LIST: PackageInfo[] = [
  {
    id: 'rakit-ui',
    name: '@zarr20/rakit-ui',
    version: 'v1.0.0',
    badge: '18 Primitives',
    description: 'Enterprise React UI Component Library built on Tailwind CSS v4',
    npmUrl: 'https://www.npmjs.com/package/@zarr20/rakit-ui',
    defaultRoute: '/button',
  },
  {
    id: 'rakit-routes',
    name: '@zarr20/rakit-routes',
    version: 'v1.1.5',
    badge: 'File-System Routing',
    description: 'Zero-config file-system router and RBAC RouteGuard for React',
    npmUrl: 'https://www.npmjs.com/package/@zarr20/rakit-routes',
    defaultRoute: '/rakit-routes',
  },
];
