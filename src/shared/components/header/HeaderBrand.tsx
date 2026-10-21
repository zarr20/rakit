import { BrandLogo } from '../BrandLogo';

interface HeaderBrandProps {
  onNavigateHome: () => void;
}

export function HeaderBrand({ onNavigateHome }: HeaderBrandProps) {
  return (
    <div
      onClick={onNavigateHome}
      className="flex items-center gap-2.5 cursor-pointer select-none group"
      title="Rakit Ecosystem — Back to Overview"
    >
      <BrandLogo size="md" />
    </div>
  );
}
