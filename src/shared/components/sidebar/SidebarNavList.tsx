import {
  LayoutGrid,
  Layers,
  SquareCode,
  MousePointerClick,
  FormInput,
  Tag,
  Type,
  Table2,
  Code2,
  Maximize2,
  PanelRight,
  BellRing,
  FolderX,
  FolderKanban,
  Milestone,
  Route,
  Terminal,
  Play,
  Palette,
} from 'lucide-react';
import { Badge, Sidebar as RakitSidebar } from '@zarr20/rakit-ui';
import type { ComponentCategory, ComponentMeta } from '../../types/playground';
import type { PackageId } from '../../data/packagesData';

const ICON_MAP: Record<string, any> = {
  LayoutGrid,
  Layers,
  SquareCode,
  MousePointerClick,
  FormInput,
  Tag,
  Type,
  Table2,
  Code2,
  Maximize2,
  PanelRight,
  BellRing,
  FolderX,
  FolderKanban,
  Milestone,
  Route,
  Terminal,
  Play,
  Palette,
};


interface SidebarNavListProps {
  catalog: ComponentMeta[];
  activeCategory: ComponentCategory;
  activePackage: PackageId;
  onSelectCategory: (id: ComponentCategory) => void;
  isCollapsed?: boolean;
}

export function SidebarNavList({
  catalog,
  activeCategory,
  activePackage,
  onSelectCategory,
  isCollapsed = false,
}: SidebarNavListProps) {
  // Filter items matching active package
  const filteredItems = catalog.filter((item) => {
    if (activePackage === 'rakit-ui') {
      return item.packageId === 'rakit-ui' && item.id !== 'overview';
    }
    return item.packageId === 'rakit-routes';
  });

  // Group by category
  const groups = filteredItems.reduce<Record<string, ComponentMeta[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-5 py-3 px-1">
      {Object.entries(groups).map(([groupTitle, items]) => (
        <RakitSidebar.Group key={groupTitle} title={groupTitle} className="space-y-0.5">
          {items.map((item) => {
            const Icon = ICON_MAP[item.iconName] || SquareCode;
            const isActive = activeCategory === item.id;

            return (
              <RakitSidebar.Item
                key={item.id}
                icon={<Icon className="w-4 h-4 shrink-0" />}
                label={item.name}
                active={isActive}
                onClick={() => onSelectCategory(item.id)}
                badge={
                  item.badge && !isCollapsed ? (
                    <Badge variant={isActive ? 'primary' : 'default'} size="xs">
                      {item.badge}
                    </Badge>
                  ) : undefined
                }
              />
            );
          })}
        </RakitSidebar.Group>
      ))}
    </div>
  );
}
