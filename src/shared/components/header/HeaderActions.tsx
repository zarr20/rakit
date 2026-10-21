import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  Layers,
  Route,
  ChevronDown,
  Check,
  Search,
  Menu,
} from 'lucide-react';
import { Button, Badge } from '@zarr20/rakit-ui';
import { PACKAGES_LIST, type PackageId } from '../../data/packagesData';

interface HeaderActionsProps {
  onOpenSearch: () => void;
  onToggleMobileSidebar: () => void;
  activePackage?: PackageId;
  onSelectPackage?: (pkgId: PackageId) => void;
  showMobileSidebarButton?: boolean;
}

export function HeaderActions({
  onOpenSearch,
  onToggleMobileSidebar,
  activePackage = 'rakit-ui',
  onSelectPackage,
  showMobileSidebarButton = false,
}: HeaderActionsProps) {
  const navigate = useNavigate();
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target as Node)) {
        setIsSwitcherOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentPkg = PACKAGES_LIST.find((p) => p.id === activePackage) || PACKAGES_LIST[0];

  const handleSwitchPackage = (pkgId: PackageId) => {
    setIsSwitcherOpen(false);
    onSelectPackage?.(pkgId);
    const target = PACKAGES_LIST.find((p) => p.id === pkgId);
    if (target) {
      navigate(target.defaultRoute);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Package Selector Dropdown */}
      <div className="relative" ref={switcherRef}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsSwitcherOpen((prev) => !prev)}
          className="h-8.5 text-xs font-mono font-medium gap-1.5"
          title="Select Active Documentation Package"
          leftIcon={
            currentPkg.id === 'rakit-ui' ? (
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Route className="w-3.5 h-3.5 text-blue-600" />
            )
          }
          rightIcon={<ChevronDown className="w-3 h-3 text-slate-400" />}
        >
          <span className="hidden sm:inline font-semibold">{currentPkg.name}</span>
          <span className="sm:hidden font-semibold">{currentPkg.id}</span>
        </Button>

        {isSwitcherOpen && (
          <div className="absolute right-0 mt-1.5 w-64 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl z-50 animate-in fade-in zoom-in-95">
            <div className="px-2 py-1 text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
              Select Ecosystem Package
            </div>
            {PACKAGES_LIST.map((pkg) => {
              const isSelected = pkg.id === currentPkg.id;
              const Icon = pkg.id === 'rakit-ui' ? Layers : Route;
              return (
                <div
                  key={pkg.id}
                  onClick={() => handleSwitchPackage(pkg.id)}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-xs transition-colors ${
                    isSelected ? 'bg-emerald-50 text-emerald-950 font-medium' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <div className="truncate">
                      <div className="font-mono font-semibold text-xs truncate">{pkg.name}</div>
                      <div className="text-[10px] text-slate-500 font-sans truncate">{pkg.version}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Mobile search button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onOpenSearch}
        className="md:hidden text-slate-500 h-8.5 w-8.5"
        aria-label="Search Components"
      >
        <Search className="w-4 h-4" />
      </Button>

      {/* NPM Link */}
      <a
        href={currentPkg.npmUrl}
        target="_blank"
        rel="noreferrer"
        title="View on NPM Registry"
        className="hidden sm:inline-flex"
      >
        <Button variant="ghost" size="icon" className="text-slate-500 h-8.5 w-8.5">
          <Package className="w-4 h-4" />
        </Button>
      </a>

      {/* GitHub Repo */}
      <a
        href="https://github.com/zarr20/rakit"
        target="_blank"
        rel="noreferrer"
        title="View GitHub Repository"
        className="hidden sm:inline-flex"
      >
        <Button variant="ghost" size="icon" className="text-slate-500 h-8.5 w-8.5">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </Button>
      </a>

      {/* Mobile Drawer Trigger (when sidebar is available in docs) */}
      {showMobileSidebarButton && (
        <Button
          variant="outline"
          size="icon"
          onClick={onToggleMobileSidebar}
          className="lg:hidden h-8.5 w-8.5 text-slate-700"
          aria-label="Open Sidebar Menu"
        >
          <Menu className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
