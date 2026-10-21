import { AlignLeft } from 'lucide-react';

export interface TocItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

interface DocsTableOfContentsProps {
  items: TocItem[];
  activeId: string;
  onSelect: (id: string) => void;
  title?: string;
}

export function DocsTableOfContents({
  items,
  activeId,
  onSelect,
  title = 'Pada Halaman Ini',
}: DocsTableOfContentsProps) {
  if (!items || items.length === 0) return null;

  const handleSelect = (id: string) => {
    onSelect(id);
    const element = document.getElementById(id);
    if (element) {
      const scrollContainer = document.querySelector('.rakit-layout-content, main') || window;
      if (scrollContainer === window) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        const container = scrollContainer as HTMLElement;
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const scrollOffset = container.scrollTop + (elementRect.top - containerRect.top) - 20;
        container.scrollTo({ top: scrollOffset, behavior: 'smooth' });
      }
    }
  };

  return (
    <aside className="hidden xl:block w-60 shrink-0 sticky top-6 self-start pl-2">
      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-800 uppercase tracking-wider mb-3 pl-2.5">
        <AlignLeft className="w-3.5 h-3.5 text-emerald-600" />
        <span>{title}</span>
      </div>

      <nav className="flex flex-col space-y-0.5 border-l border-slate-200/80">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isSub = item.level === 2;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.id)}
              className={`text-left -ml-px transition-all block w-full truncate border-l-2 cursor-pointer ${
                isSub
                  ? 'pl-5 pr-2 py-1 text-[11px]'
                  : 'pl-3 pr-2 py-1.5 text-xs font-medium'
              } ${
                isActive
                  ? isSub
                    ? 'border-emerald-600 text-emerald-700 font-medium bg-emerald-50/40 rounded-r-md'
                    : 'border-emerald-600 text-emerald-800 font-semibold bg-emerald-50/60 rounded-r-lg'
                  : isSub
                  ? 'border-transparent text-slate-400 hover:text-slate-700 hover:border-slate-300'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
              title={item.label}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
