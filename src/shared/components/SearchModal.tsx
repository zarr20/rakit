import { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Modal, TextField, Badge } from '@zarr20/rakit-ui';
import type { ComponentCategory } from '../types/playground';
import { COMPONENTS_CATALOG } from '../data/componentsMeta';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: ComponentCategory) => void;
}

export function SearchModal({ isOpen, onClose, onSelect }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMPONENTS_CATALOG.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.tagline.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }

      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          onSelect(filtered[selectedIndex].id);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose, onSelect]);

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Quick Search Primitives & Features"
      description="Instant navigation across components, form controls, layouts, and routing."
      size="xl"
      closeOnEsc
      closeOnOverlayClick
    >
      <div className="space-y-4">
        {/* Search Input using rakit-ui TextField */}
        <TextField
          ref={inputRef}
          value={query}
          onChange={(e: any) => {
            setQuery(e.target.value);
            setSelectedIndex(0);
          }}
          placeholder="Search button, modal, table, router..."
          leftIcon={<Search className="w-4 h-4 text-slate-400" />}
          clearable
          onClear={() => setQuery('')}
        />

        {/* Results list */}
        <div className="max-h-72 overflow-y-auto p-1 divide-y divide-slate-100 rounded-xl border border-slate-200">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-sm">
              No components matching "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelect(item.id);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-emerald-50 text-emerald-950 font-medium'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-slate-900">{item.name}</span>
                      <Badge variant="default" size="xs">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {item.tagline}
                    </p>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-emerald-700' : 'text-slate-400'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-200">
          <span>Use ↑ ↓ to navigate, Enter to select</span>
          <span>ESC to close</span>
        </div>
      </div>
    </Modal>
  );
}
