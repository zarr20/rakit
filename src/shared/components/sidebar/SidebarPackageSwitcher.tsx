import { Layers, Route } from 'lucide-react';
import { SegmentedControl } from '@zarr20/rakit-ui';
import { PACKAGES_LIST, type PackageId } from '../../data/packagesData';

interface SidebarPackageSwitcherProps {
  activePackage: PackageId;
  onSelectPackage: (pkg: PackageId) => void;
}

export function SidebarPackageSwitcher({
  activePackage,
  onSelectPackage,
}: SidebarPackageSwitcherProps) {
  const items = PACKAGES_LIST.map((pkg) => {
    const Icon = pkg.id === 'rakit-ui' ? Layers : Route;
    return {
      value: pkg.id,
      label: pkg.id === 'rakit-ui' ? 'Rakit UI' : 'Routes',
      icon: <Icon className="w-3.5 h-3.5" />,
    };
  });

  return (
    <div className="p-3 border-b border-slate-200/80 bg-slate-50/60">
      <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
        Documentation Package
      </div>
      <SegmentedControl
        items={items}
        value={activePackage}
        onChange={(val) => onSelectPackage(val as PackageId)}
        size="sm"
        fullWidth
      />
    </div>
  );
}

