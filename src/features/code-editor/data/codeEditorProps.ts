import type { PropItem } from '../../../shared/types/playground';

export const CODE_EDITOR_PROPS: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    description: 'Code or JSON string currently being edited or displayed.',
    required: true,
  },
  {
    name: 'onChange',
    type: '(val: string) => void',
    description: 'Callback fired when editor code text is modified.',
  },
  {
    name: 'language',
    type: "'tsx' | 'ts' | 'html' | 'js' | 'json' | 'css' | string",
    defaultValue: "'json'",
    description: 'Programming language for syntax highlighting (TSX, TypeScript, HTML, JavaScript, JSON, CSS, etc.).',
  },
  {
    name: 'files',
    type: 'CodeViewerFile[]',
    description: 'File array for multi-file tabbed browsing in FileViewer / CodeViewer.',
  },
  {
    name: 'activeFileName',
    type: 'string',
    description: 'Currently selected file name in multi-file tab mode.',
  },
  {
    name: 'onActiveFileChange',
    type: '(fileName: string) => void',
    description: 'Callback fired when active file is switched via tab navigation.',
  },
  {
    name: 'readOnly',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Enables read-only display mode with tokenized syntax highlighting.',
  },
  {
    name: 'viewMode',
    type: "'code' | 'tree' | 'split'",
    defaultValue: "'code'",
    description: 'Viewer layout mode (Code raw view, Interactive JSON tree node viewer, or Split side-by-side).',
  },
  {
    name: 'theme',
    type: "'dark' | 'light'",
    defaultValue: "'dark'",
    description: 'Code editor visual theme (light or dark).',
  },
  {
    name: 'showLineNumbers',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Displays line numbering gutter.',
  },
  {
    name: 'showToolbar',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Displays top action toolbar (copy, format JSON, view toggle).',
  },
  {
    name: 'showCopyButton',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Displays clipboard copy action button.',
  },
  {
    name: 'height',
    type: 'string | number',
    defaultValue: "'auto'",
    description: 'Height dimension for the editor canvas container.',
  },
  {
    name: 'defaultViewMode',
    type: "'split' | 'code' | 'preview'",
    defaultValue: "'split'",
    description: 'Initial display mode for LivePlayground (Split side-by-side, Code only, or Preview only).',
  },
  {
    name: 'defaultViewport',
    type: "'desktop' | 'tablet' | 'mobile'",
    defaultValue: "'desktop'",
    description: 'Viewport frame dimension for live preview (Desktop 100%, Tablet 768px, Mobile 375px).',
  },
  {
    name: 'scope',
    type: 'Record<string, any>',
    description: 'Custom scope dictionary to inject components, hooks, or libraries into live compiler.',
  },
  {
    name: 'maxHeight',
    type: 'string | number',
    defaultValue: "'480px'",
    description: 'Maximum height ceiling with vertical scrollbar containment.',
  },
];
