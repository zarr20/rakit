import { useState } from 'react';
import {
  Card,
  Button,
  Badge,
  TextField,
  Checkbox,
  type CardVariant,
  type CardPadding,
} from '@zarr20/rakit-ui';
import { DollarSign, Users, Activity, Play, Layers, BookOpen } from 'lucide-react';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { CARD_PROPS } from './data/cardProps';

export function CardFeature() {
  const [variant, setVariant] = useState<CardVariant>('default');
  const [padding, setPadding] = useState<CardPadding>('large');
  const [hoverable, setHoverable] = useState(false);
  const [collapsible, setCollapsible] = useState(false);
  const [title, setTitle] = useState('Database Server Status');
  const [description, setDescription] = useState('PostgreSQL cluster in Singapore region (ap-southeast-1)');

  const variantsList: CardVariant[] = ['default', 'bordered', 'flat', 'elevated', 'ghost'];
  const paddingsList: CardPadding[] = ['none', 'small', 'medium', 'large'];

  const generateCode = () => {
    const props: string[] = [];
    if (variant !== 'default') props.push(`variant="${variant}"`);
    if (padding !== 'large') props.push(`padding="${padding}"`);
    if (hoverable) props.push('hoverable');
    if (collapsible) props.push('collapsible');

    const propsStr = props.length > 0 ? ` ${props.join(' ')}` : '';
    return `<Card
  title="${title}"
  description="${description}"${propsStr}
  badge={<Badge variant="success" size="xs">Live</Badge>}
>
  <p className="text-sm text-slate-600">
    All API requests operational with average latency of 32ms.
  </p>
  <div className="mt-4 flex items-center justify-end gap-2">
    <Button variant="secondary" size="xs">Dismiss</Button>
    <Button variant="primary" size="xs">View Details</Button>
  </div>
</Card>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Card Container"
        tagline="Modular container with CardHeader, CardTitle, CardContent, CardFooter, FeatureBanner, and collapsible support."
        badge="Layout & Structure"
        importStatement="import { Card } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Card Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generateCode()}
            onReset={() => {
              setVariant('default');
              setPadding('large');
              setHoverable(false);
              setCollapsible(false);
              setTitle('Database Server Status');
              setDescription('PostgreSQL cluster in Singapore region (ap-southeast-1)');
            }}
            componentId="card-basic"
          >
            <div className="w-full max-w-lg">
              <Card
                title={title}
                description={description}
                variant={variant}
                padding={padding}
                hoverable={hoverable}
                collapsible={collapsible}
                badge={<Badge variant="success" size="xs">Live</Badge>}
              >
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All API requests operational with average latency of 32ms.
                </p>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button variant="secondary" size="xs">Dismiss</Button>
                  <Button variant="primary" size="xs">View Details</Button>
                </div>
              </Card>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Card Configuration" columns={2}>
            <TextField
              label="Title"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
              size="sm"
            />

            <TextField
              label="Description"
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
              size="sm"
            />

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-medium text-slate-600">Variant ({variant})</label>
              <div className="flex flex-wrap gap-1">
                {variantsList.map((v) => (
                  <Button
                    key={v}
                    variant={variant === v ? 'primary' : 'outline'}
                    size="xs"
                    onClick={() => setVariant(v)}
                    className="font-mono text-[11px]"
                  >
                    {v}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-medium text-slate-600">Padding ({padding})</label>
              <div className="flex flex-wrap gap-1">
                {paddingsList.map((p) => (
                  <Button
                    key={p}
                    variant={padding === p ? 'primary' : 'outline'}
                    size="xs"
                    onClick={() => setPadding(p)}
                    className="font-mono text-[11px]"
                  >
                    {p}
                  </Button>
                ))}
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 flex items-center gap-4 pt-2">
              <Checkbox
                label="hoverable (Lift Effect)"
                checked={hoverable}
                onChange={setHoverable}
                size="sm"
              />
              <Checkbox
                label="collapsible (Foldable)"
                checked={collapsible}
                onChange={setCollapsible}
                size="sm"
              />
            </div>
          </PropControls>

          {/* 3. Generated Code Viewer */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Examples Showcase */}
      <section id="examples" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Showcase & Metric Cards
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div
          id="stat-cards"
          data-toc-id="stat-cards"
          data-toc-title="Metrics & Statistics Cards"
          data-toc-level="2"
          className="space-y-4"
        >
          <div>
            <h3 className="text-base font-display font-semibold text-slate-900">
              KPI Summary & Metrics Cards
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Compact card examples with hover elevation for KPI dashboards and system status monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example 1: Stat Card */}
            <Card variant="default" padding="medium" hoverable>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">Total Revenue</span>
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-bold font-display text-slate-900">$48,290.00</span>
                <p className="text-xs text-emerald-700 mt-1 font-medium">+18.2% from last month</p>
              </div>
            </Card>

            {/* Example 2: Stat Card 2 */}
            <Card variant="default" padding="medium" hoverable>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">Active Users</span>
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-bold font-display text-slate-900">12,450</span>
                <p className="text-xs text-sky-600 mt-1 font-medium">+5.4% new users</p>
              </div>
            </Card>

            {/* Example 3: Stat Card 3 */}
            <Card variant="default" padding="medium" hoverable>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">System Health</span>
                <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
                  <Activity className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-bold font-display text-slate-900">99.98%</span>
                <p className="text-xs text-violet-600 mt-1 font-medium">Optimal 30-day uptime</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: API Reference */}
      <section id="props" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              API Reference & Props
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div className="space-y-4">
          <PropsTable props={CARD_PROPS} />
        </div>
      </section>
    </div>
  );
}
