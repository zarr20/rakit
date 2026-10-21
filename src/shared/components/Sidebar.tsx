import { DocsSidebar } from './sidebar/DocsSidebar';
import type { ComponentCategory } from '../types/playground';
import type { PackageId } from '../data/packagesData';

interface SidebarProps {
  activeCategory: ComponentCategory;
  onSelectCategory: (id: ComponentCategory) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  activePackage?: PackageId;
  onSelectPackage?: (pkg: PackageId) => void;
}

export function Sidebar({
  activeCategory,
  onSelectCategory,
  isOpenMobile,
  onCloseMobile,
  isCollapsed = false,
  onToggleCollapse,
  activePackage,
  onSelectPackage,
}: SidebarProps) {
  // Infer active package if not explicitly provided
  const resolvedPackage: PackageId =
    activePackage || (activeCategory === 'rakit-routes' || activeCategory === 'sandbox' ? 'rakit-routes' : 'rakit-ui');

  return (
    <DocsSidebar
      activeCategory={activeCategory}
      activePackage={resolvedPackage}
      onSelectCategory={onSelectCategory}
      onSelectPackage={onSelectPackage || (() => {})}
      isOpenMobile={isOpenMobile}
      onCloseMobile={onCloseMobile}
      isCollapsed={isCollapsed}
      onToggleCollapse={onToggleCollapse}
    />
  );
}

export { DocsSidebar };
