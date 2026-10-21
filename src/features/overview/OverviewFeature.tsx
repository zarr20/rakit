import { OverviewHero } from './partials/OverviewHero';
import { OverviewPackages } from './partials/OverviewPackages';
import { OverviewQuickstart } from './partials/OverviewQuickstart';
import { OverviewInteractiveDemo } from './partials/OverviewInteractiveDemo';
import { OverviewPrinciples } from './partials/OverviewPrinciples';
import { OverviewCatalogGrid } from './partials/OverviewCatalogGrid';
import type { ComponentCategory } from '../../shared/types/playground';

interface OverviewFeatureProps {
  onSelectComponent?: (id: ComponentCategory) => void;
}

export function OverviewFeature({ onSelectComponent }: OverviewFeatureProps) {
  return (
    <div className="space-y-12 pb-16">
      <OverviewHero />
      <OverviewPackages />
      <OverviewQuickstart />
      <OverviewInteractiveDemo />
      <OverviewPrinciples />
      <OverviewCatalogGrid />
    </div>
  );
}
