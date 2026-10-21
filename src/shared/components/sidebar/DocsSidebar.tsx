import { Sidebar as RakitSidebar } from '@zarr20/rakit-ui';
import type { ComponentCategory } from '../../types/playground';
import type { PackageId } from '../../data/packagesData';
import { COMPONENTS_CATALOG } from '../../data/componentsMeta';
import { SidebarPackageSwitcher } from './SidebarPackageSwitcher';
import { SidebarNavList } from './SidebarNavList';

interface DocsSidebarProps {
  activeCategory: ComponentCategory;
  activePackage: PackageId;
  onSelectCategory: (id: ComponentCategory) => void;
  onSelectPackage: (pkg: PackageId) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function DocsSidebar({
  activeCategory,
  activePackage,
  onSelectCategory,
  onSelectPackage,
  isOpenMobile,
  onCloseMobile,
  isCollapsed = false,
  onToggleCollapse,
}: DocsSidebarProps) {
  return (
    <RakitSidebar
      collapsed={isCollapsed}
      onToggleCollapse={onToggleCollapse}
      isOpen={isOpenMobile}
      onClose={onCloseMobile}
      mobileMode="drawer"
      className="bg-white/95 border-r border-slate-200 shadow-2xs z-30"
    >
      <RakitSidebar.Header className="flex flex-col gap-0 p-0 border-b-0">
        <SidebarPackageSwitcher
          activePackage={activePackage}
          onSelectPackage={onSelectPackage}
        />
      </RakitSidebar.Header>

      <RakitSidebar.Nav className="px-2 overflow-y-auto">
        <SidebarNavList
          catalog={COMPONENTS_CATALOG}
          activeCategory={activeCategory}
          activePackage={activePackage}
          onSelectCategory={(id) => {
            onSelectCategory(id);
            onCloseMobile();
          }}
          isCollapsed={isCollapsed}
        />
      </RakitSidebar.Nav>

      <RakitSidebar.Footer className="p-3 border-t border-slate-100 flex items-center justify-between">
        <RakitSidebar.Toggle />
      </RakitSidebar.Footer>
    </RakitSidebar>
  );
}
