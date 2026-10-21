import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { COMPONENTS_CATALOG } from '../../data/componentsMeta';
import type { ComponentCategory } from '../../types/playground';

interface DocsPaginationNavProps {
  currentId: ComponentCategory;
}

export function DocsPaginationNav({ currentId }: DocsPaginationNavProps) {
  // Find current item in catalog
  const currentIndex = COMPONENTS_CATALOG.findIndex((item) => item.id === currentId);
  if (currentIndex === -1) return null;

  const currentItem = COMPONENTS_CATALOG[currentIndex];
  // Filter siblings belonging to the same package
  const packageItems = COMPONENTS_CATALOG.filter(
    (item) => item.packageId === currentItem.packageId && item.id !== 'overview'
  );

  const packageIndex = packageItems.findIndex((item) => item.id === currentId);
  const prevItem = packageIndex > 0 ? packageItems[packageIndex - 1] : null;
  const nextItem = packageIndex < packageItems.length - 1 ? packageItems[packageIndex + 1] : null;

  if (!prevItem && !nextItem) return null;

  return (
    <div className="pt-8 mt-12 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Previous Component */}
      {prevItem ? (
        <Link
          to={`/${prevItem.id}`}
          className="group flex flex-col p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-xs transition-all text-left"
        >
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-1 group-hover:text-emerald-700 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Sebelumnya</span>
          </div>
          <span className="font-semibold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
            {prevItem.name}
          </span>
          <span className="text-[11px] text-slate-500 truncate mt-0.5">{prevItem.category}</span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Component */}
      {nextItem && (
        <Link
          to={`/${nextItem.id}`}
          className="group flex flex-col p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-xs transition-all text-right sm:col-start-2"
        >
          <div className="flex items-center justify-end gap-1.5 text-xs text-slate-500 font-mono mb-1 group-hover:text-emerald-700 transition-colors">
            <span>Selanjutnya</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <span className="font-semibold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
            {nextItem.name}
          </span>
          <span className="text-[11px] text-slate-500 truncate mt-0.5">{nextItem.category}</span>
        </Link>
      )}
    </div>
  );
}
