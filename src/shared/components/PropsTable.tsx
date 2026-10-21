import { Table, type TableColumn } from '@zarr20/rakit-ui';
import type { PropItem } from '../types/playground';

interface PropsTableProps {
  props: PropItem[];
}

export function PropsTable({ props }: PropsTableProps) {
  const columns: TableColumn<PropItem>[] = [
    {
      key: 'name',
      title: 'Prop',
      width: '22%',
      render: (p) => (
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-400 text-xs sm:text-[13px]">
            {p.name}
          </span>
          {p.required && (
            <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-900/60">
              Required
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'type',
      title: 'Type',
      width: '32%',
      render: (p) => (
        <code className="text-indigo-700 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 px-2 py-0.5 rounded-md inline-block max-w-full break-words leading-relaxed font-mono text-[11px] sm:text-xs">
          {p.type}
        </code>
      ),
    },
    {
      key: 'defaultValue',
      title: 'Default',
      width: '16%',
      render: (p) =>
        p.defaultValue ? (
          <code className="text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 px-1.5 py-0.5 rounded-md inline-block font-mono text-[11px] sm:text-xs">
            {p.defaultValue}
          </code>
        ) : (
          <span className="text-slate-400 dark:text-slate-500 font-mono text-xs">—</span>
        ),
    },
    {
      key: 'description',
      title: 'Description',
      width: '30%',
      render: (p) => (
        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          {p.description}
        </div>
      ),
    },
  ];

  return (
    <Table<PropItem>
      data={props}
      columns={columns}
      size="sm"
      striped
      rowKey={(p) => p.name}
    />
  );
}


