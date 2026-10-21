import { Layout } from '@zarr20/rakit-ui';
import { HeaderBrand } from './HeaderBrand';
import { HeaderNav } from './HeaderNav';
import { HeaderSearchTrigger } from './HeaderSearchTrigger';
import { HeaderActions } from './HeaderActions';
import type { PackageId } from '../../data/packagesData';

interface HeaderProps {
  onOpenSearch: () => void;
  onToggleMobileSidebar: () => void;
  onNavigateHome: () => void;
  activePackage?: PackageId;
  onSelectPackage?: (pkgId: PackageId) => void;
  showMobileSidebarButton?: boolean;
}

export function Header({
  onOpenSearch,
  onToggleMobileSidebar,
  onNavigateHome,
  activePackage = 'rakit-ui',
  onSelectPackage,
  showMobileSidebarButton = false,
}: HeaderProps) {
  return (
    <Layout.Header className="h-14 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Navigation */}
        <div className="flex items-center gap-6">
          <HeaderBrand onNavigateHome={onNavigateHome} />
          <HeaderNav />
        </div>

        {/* Center: Search Trigger (Desktop) */}
        <div className="flex-1 max-w-sm hidden lg:block">
          <HeaderSearchTrigger onOpenSearch={onOpenSearch} />
        </div>

        {/* Right: Package Switcher, Links, & Mobile Trigger */}
        <HeaderActions
          onOpenSearch={onOpenSearch}
          onToggleMobileSidebar={onToggleMobileSidebar}
          activePackage={activePackage}
          onSelectPackage={onSelectPackage}
          showMobileSidebarButton={showMobileSidebarButton}
        />
      </div>
    </Layout.Header>
  );
}
