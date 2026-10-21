import { Copy, Check } from 'lucide-react';
import { Badge, Button, Breadcrumb, type BreadcrumbItemData } from '@zarr20/rakit-ui';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

interface PlaygroundHeaderProps {
  title: string;
  tagline: string;
  badge?: string;
  importStatement: string;
  activeTab?: 'playground' | 'examples' | 'props';
  onTabChange?: (tab: 'playground' | 'examples' | 'props') => void;
  breadcrumbs?: BreadcrumbItemData[];
}

export function PlaygroundHeader({
  title,
  tagline,
  badge = 'Component',
  importStatement,
  breadcrumbs,
}: PlaygroundHeaderProps) {
  const { copied, copy } = useCopyToClipboard();

  const defaultBreadcrumbs: BreadcrumbItemData[] = [
    { label: 'Ecosystem', href: '#' },
    { label: badge || 'Components', href: '#' },
    { label: title, active: true },
  ];

  const resolvedBreadcrumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <div className="border-b border-slate-200 pb-6 mb-8">
      {/* In-View Breadcrumb */}
      <div className="mb-3.5">
        <Breadcrumb size="xs" separator="chevron" items={resolvedBreadcrumbs} />
      </div>

      {/* Top row: Title + Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
            {title}
          </h1>
          <Badge variant="primary" size="sm">
            {badge}
          </Badge>
        </div>

        {/* Import snippet using rakit Button */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => copy(importStatement)}
          rightIcon={
            copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400" />
            )
          }
          className="font-mono text-xs max-w-xs sm:max-w-md truncate"
          title="Click to copy import statement"
        >
          <span className="text-slate-500 mr-1.5 font-normal">import:</span>
          <span className="text-slate-800 font-semibold truncate">{importStatement}</span>
        </Button>
      </div>

      {/* Tagline */}
      <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
        {tagline}
      </p>
    </div>
  );
}
