import { useRef } from 'react';
import { Badge, Button } from '@zarr20/rakit-ui';
import {
  Sparkles,
  Type,
  ChevronDown,
  Tags,
  AlignLeft,
  CheckSquare,
  CircleDot,
  ToggleRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export type FieldComponentSegment =
  | 'autocomplete'
  | 'textfield'
  | 'select'
  | 'multiselect'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'switch';

export interface FieldSegmentItem {
  id: FieldComponentSegment;
  name: string;
  tag: string;
  icon: typeof Sparkles;
  description: string;
}

export const FIELD_SEGMENTS: FieldSegmentItem[] = [
  {
    id: 'autocomplete',
    name: 'Autocomplete',
    tag: 'Combobox',
    icon: Sparkles,
    description: 'Predictive search-as-you-type combobox for dynamic or large datasets.',
  },
  {
    id: 'textfield',
    name: 'TextField',
    tag: 'Input',
    icon: Type,
    description: 'Standard text input with password toggle, prefix, suffix, and validation.',
  },
  {
    id: 'select',
    name: 'Select',
    tag: 'Dropdown',
    icon: ChevronDown,
    description: 'Single-selection dropdown for bounded and static option sets.',
  },
  {
    id: 'multiselect',
    name: 'MultiSelect',
    tag: 'Tags',
    icon: Tags,
    description: 'Pill/tag-based multi-selection with search filtering.',
  },
  {
    id: 'textarea',
    name: 'TextArea',
    tag: 'Multiline',
    icon: AlignLeft,
    description: 'Multi-line text input with character counter and length constraints.',
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    tag: 'Binary / Group',
    icon: CheckSquare,
    description: 'Single checkbox or multi-selection choices in default and card variants.',
  },
  {
    id: 'radio',
    name: 'RadioGroup',
    tag: 'Exclusive',
    icon: CircleDot,
    description: 'Mutually exclusive single-choice option group with vertical or horizontal layout.',
  },
  {
    id: 'switch',
    name: 'Switch',
    tag: 'Toggle',
    icon: ToggleRight,
    description: 'Interactive on/off status toggle switch for settings and instant preferences.',
  },
];

interface FieldSegmentNavProps {
  activeSegment: FieldComponentSegment;
  onChange: (segment: FieldComponentSegment) => void;
}

export function FieldSegmentNav({ activeSegment, onChange }: FieldSegmentNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -220 : 220;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleSelect = (id: FieldComponentSegment, e: React.MouseEvent<HTMLButtonElement>) => {
    onChange(id);
    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const currentSegmentMeta = FIELD_SEGMENTS.find((s) => s.id === activeSegment);

  return (
    <div className="space-y-3">
      {/* Navigation Bar with Horizontal Scroll */}
      <div className="flex items-center gap-2 p-2 bg-slate-50/90 rounded-2xl border border-slate-200 shadow-2xs">
        {/* Left Scroll Trigger */}
        <Button
          variant="ghost"
          size="xs"
          onClick={() => scroll('left')}
          className="shrink-0 text-slate-500 hover:text-slate-800 p-1.5 h-8 w-8 rounded-lg"
          title="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Scrollable Segment Items */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5 scroll-smooth flex-1"
        >
          {FIELD_SEGMENTS.map((seg) => {
            const Icon = seg.icon;
            const isActive = activeSegment === seg.id;

            return (
              <button
                key={seg.id}
                type="button"
                onClick={(e) => handleSelect(seg.id, e)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-all cursor-pointer select-none border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs ring-2 ring-emerald-500/20'
                    : 'bg-white/80 text-slate-600 border-slate-200/80 hover:bg-white hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isActive ? 'text-emerald-400' : 'text-slate-400'
                  }`}
                />
                <span className="font-display font-medium tracking-tight">{seg.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-normal ${
                    isActive
                      ? 'bg-slate-800 text-emerald-300'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {seg.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Trigger */}
        <Button
          variant="ghost"
          size="xs"
          onClick={() => scroll('right')}
          className="shrink-0 text-slate-500 hover:text-slate-800 p-1.5 h-8 w-8 rounded-lg"
          title="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {/* Total Badge */}
        <div className="hidden md:flex items-center pl-2 border-l border-slate-200 shrink-0">
          <Badge variant="subtle" size="xs">
            {FIELD_SEGMENTS.length} Components
          </Badge>
        </div>
      </div>

      {/* Sub-Header / Current Segment Description */}
      {currentSegmentMeta && (
        <div className="flex items-center justify-between px-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-slate-700">
              Sub Playground: <strong className="text-emerald-600">{currentSegmentMeta.name}</strong>
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 hidden sm:inline">{currentSegmentMeta.description}</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Scroll horizontal bar to switch controls
          </span>
        </div>
      )}
    </div>
  );
}
