import { Search } from 'lucide-react';

interface HeaderSearchTriggerProps {
  onOpenSearch: () => void;
}

export function HeaderSearchTrigger({ onOpenSearch }: HeaderSearchTriggerProps) {
  return (
    <button
      type="button"
      onClick={onOpenSearch}
      className="w-full flex items-center justify-between h-8.5 px-3 text-xs font-mono rounded-xl border border-slate-200 bg-slate-50/90 hover:bg-white hover:border-emerald-500/50 hover:shadow-2xs text-slate-500 hover:text-slate-800 transition-all cursor-pointer group"
      aria-label="Search Components and Documentation"
    >
      <div className="flex items-center gap-2">
        <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
        <span className="font-sans text-xs">Search components or APIs...</span>
      </div>
      <div className="flex items-center gap-1">
        <kbd className="px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-500 shadow-2xs group-hover:border-slate-300">
          ctrl + K
        </kbd>
      </div>
    </button>
  );
}
