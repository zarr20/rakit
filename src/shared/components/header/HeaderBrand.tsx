import { BrandLogo } from '../BrandLogo';

interface HeaderBrandProps {
  onNavigateHome: () => void;
}

export function HeaderBrand({ onNavigateHome }: HeaderBrandProps) {
  return (
    <div
      onClick={onNavigateHome}
      className="flex items-center gap-2.5 cursor-pointer select-none group"
      title="Rakit Ecosystem — Kembali ke Halaman Utama"
    >
      <BrandLogo size="md" />
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-slate-900 tracking-tight text-base group-hover:text-emerald-700 transition-colors">
            rakit
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
        </div>
        <span className="text-[10px] font-mono text-slate-500 leading-none">
          ecosystem v1.0
        </span>
      </div>
    </div>
  );
}
