export type PlaygroundViewport = 'desktop' | 'tablet' | 'mobile';

export type PlaygroundViewMode = 'split' | 'editor' | 'preview';

export interface PlaygroundExample {
  id: string;
  title: string;
  description: string;
  category: 'Button' | 'Input' | 'Routes' | 'Layout' | 'Feedback' | string;
  code: string;
  files?: Record<string, string>;
  activeFile?: string;
  dependencies?: Record<string, string>;
}

export interface RakitPlaygroundProps {
  initialExample?: PlaygroundExample;
  examples?: PlaygroundExample[];
  activeExampleId?: string;
  onSelectExample?: (example: PlaygroundExample) => void;
  theme?: 'dark' | 'light';
  height?: string | number;
  showToolbar?: boolean;
  className?: string;
}
