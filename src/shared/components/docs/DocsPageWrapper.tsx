import type { ReactNode } from 'react';
import type { ComponentCategory } from '../../types/playground';
import { DocsTableOfContents, type TocItem } from './DocsTableOfContents';
import { DocsPaginationNav } from './DocsPaginationNav';

interface DocsPageWrapperProps {
  componentId: ComponentCategory;
  activeTab?: string;
  onTabChange?: (tab: any) => void;
  customTocItems?: TocItem[];
  children: ReactNode;
}

const DEFAULT_DOC_TABS: TocItem[] = [
  { id: 'playground', label: 'Interactive Sandbox' },
  { id: 'examples', label: 'Showcase & Examples' },
  { id: 'props', label: 'API Reference' },
];

export function DocsPageWrapper({
  componentId,
  activeTab = 'playground',
  onTabChange,
  customTocItems,
  children,
}: DocsPageWrapperProps) {
  const tocItems = customTocItems || DEFAULT_DOC_TABS;

  return (
    <div className="flex items-start gap-8 w-full">
      {/* Main Documentation Article Content */}
      <div className="flex-1 min-w-0">
        {children}

        {/* Previous / Next Navigation Bar */}
        <DocsPaginationNav currentId={componentId} />
      </div>

      {/* Right Sticky Table of Contents */}
      {onTabChange && (
        <DocsTableOfContents
          items={tocItems}
          activeId={activeTab}
          onSelect={onTabChange}
        />
      )}
    </div>
  );
}
