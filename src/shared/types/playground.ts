export type ThemeMode = 'dark' | 'light';

export type ComponentCategory =
  | 'overview'
  | 'button'
  | 'badge'
  | 'card'
  | 'field'
  | 'modal'
  | 'drawer'
  | 'toast'
  | 'table'
  | 'tabs'
  | 'code-editor'
  | 'empty-state'
  | 'container'
  | 'grid'
  | 'typography'
  | 'breadcrumb'
  | 'sandbox'
  | 'playground'
  | 'theming'
  | 'docs'
  | 'rakit-routes';


export interface ComponentMeta {
  id: ComponentCategory;
  name: string;
  tagline: string;
  badge?: string;
  iconName: string;
  category:
    | 'Getting Started'
    | 'Layout & Structure'
    | 'Inputs & Forms'
    | 'Data Display'
    | 'Feedback & Overlay'
    | 'Navigation'
    | 'Ecosystem & Routing'
    | string;
  packageId?: 'rakit-ui' | 'rakit-routes';
}

export interface PropItem {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}
