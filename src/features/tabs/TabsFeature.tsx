import { useState } from 'react';
import {
  Tabs,
  Button,
  type TabItem,
  type TabVariant,
  type TabSize,
} from '@zarr20/rakit-ui';
import { Activity, Shield, Bell, Play, Layers, BookOpen, Key, Settings } from 'lucide-react';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { TABS_PROPS } from './data/tabsProps';

export function TabsFeature() {
  const [variant, setVariant] = useState<TabVariant>('pills');
  const [size, setSize] = useState<TabSize>('md');
  const [activeTabId, setActiveTabId] = useState('profile');
  const [fullWidth, setFullWidth] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [showBadges, setShowBadges] = useState(true);

  const demoItems: TabItem[] = [
    {
      id: 'profile',
      label: 'Account Profile',
      icon: showIcons ? <Activity className="w-4 h-4" /> : undefined,
      content: (
        <div className="mt-4 p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 space-y-1.5 text-left">
          <h4 className="font-semibold text-slate-900 text-sm">User Profile Information</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Manage your public name, custom avatar, verified email address, and timezone preferences.
          </p>
        </div>
      ),
    },
    {
      id: 'security',
      label: 'Security & Auth',
      icon: showIcons ? <Shield className="w-4 h-4" /> : undefined,
      badge: showBadges ? '2FA Active' : undefined,
      badgeVariant: 'success',
      content: (
        <div className="mt-4 p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 space-y-1.5 text-left">
          <h4 className="font-semibold text-slate-900 text-sm">Multi-Factor Protection (MFA)</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Active sessions are secured with FIDO2 WebAuthn keys and time-based authenticator apps (TOTP).
          </p>
        </div>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications & Webhook',
      icon: showIcons ? <Bell className="w-4 h-4" /> : undefined,
      badge: showBadges ? '3 New' : undefined,
      badgeVariant: 'warning',
      content: (
        <div className="mt-4 p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 space-y-1.5 text-left">
          <h4 className="font-semibold text-slate-900 text-sm">Alerts & Webhook Center</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Configure webhook endpoints to receive notifications for deployment events or system downtimes.
          </p>
        </div>
      ),
    },
  ];

  const variantsList: TabVariant[] = ['pills', 'underline', 'bordered'];
  const sizesList: TabSize[] = ['xs', 'sm', 'md', 'lg'];

  const generateCode = () => {
    return `<Tabs
  items={[
    { id: 'profile', label: 'Account Profile', content: <ProfilePanel /> },
    { id: 'security', label: 'Security', badge: '2FA', content: <SecurityPanel /> },
    { id: 'notifications', label: 'Notifications', badge: '3', content: <NotificationPanel /> },
  ]}
  value="${activeTabId}"
  onChange={(id) => setActiveTabId(id)}
  variant="${variant}"
  size="${size}"
  fullWidth={${fullWidth}}
  theme="light"
  extra={<Button size="xs" variant="outline">Refresh</Button>}
/>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Tabs Navigation"
        tagline="Structured tab navigation featuring pills, underline, bordered variants, status badges, icons, and light theme."
        badge="General"
        importStatement="import { Tabs } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Tabs Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Studio Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generateCode()}
            onReset={() => {
              setVariant('pills');
              setSize('md');
              setActiveTabId('profile');
              setFullWidth(false);
              setShowIcons(true);
              setShowBadges(true);
            }}
            componentId="tabs-basic"
          >
            <div className="w-full max-w-2xl mx-auto overflow-x-auto py-2 px-1">
              <Tabs
                items={demoItems}
                value={activeTabId}
                onChange={(id) => setActiveTabId(id)}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                theme="light"
                extra={
                  <Button size="xs" variant="outline">
                    Refresh
                  </Button>
                }
              />
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Tabs Props Configuration" columns={2}>
            <PropControls.Segmented
              label="Visual Variant"
              items={variantsList.map((v) => ({ value: v, label: v }))}
              value={variant}
              onChange={(v) => setVariant(v as TabVariant)}
              size="xs"
              description="pills | underline | bordered"
            />

            <PropControls.Segmented
              label="Tab Size"
              items={sizesList.map((s) => ({ value: s, label: s }))}
              value={size}
              onChange={(s) => setSize(s as TabSize)}
              size="xs"
              description="xs | sm | md | lg"
            />

            <PropControls.Toggle
              label="Full Width (fullWidth)"
              checked={fullWidth}
              onChange={setFullWidth}
              description="Stretch tabs across container width"
            />

            <PropControls.Toggle
              label="Display Node Icons"
              checked={showIcons}
              onChange={setShowIcons}
              description="Visual icon beside tab label"
            />

            <PropControls.Toggle
              label="Display Status Badges"
              checked={showBadges}
              onChange={setShowBadges}
              description="Numeric counter and notification badge"
            />
          </PropControls>

          {/* 3. Code Generator */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Examples & Variants */}
      <section id="examples" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Showcase & Tab Variants
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-8">
          {/* Example 1: Underline Variant */}
          <div
            id="tab-underline"
            data-toc-id="tab-underline"
            data-toc-title="Underline Variant"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">1. "underline" Variant (Page & Documentation Tabs)</h3>
              <p className="text-xs text-slate-500">Flat page navigation with a sleek bottom accent indicator line.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <Tabs
                items={[
                  { id: 'all', label: 'All Requests', badge: '1,420' },
                  { id: 'errors', label: '5xx Errors', badge: '12', badgeVariant: 'danger' },
                  { id: 'slow', label: 'Slow Queries > 1s', badge: '5', badgeVariant: 'warning' },
                  { id: 'cached', label: 'Edge Cached', badge: '98%' },
                ]}
                variant="underline"
                size="md"
                theme="light"
              />
            </div>
          </div>

          {/* Example 2: Bordered Variant */}
          <div
            id="tab-bordered"
            data-toc-id="tab-bordered"
            data-toc-title="Bordered Variant"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">2. "bordered" Variant (Segmented Control Box)</h3>
              <p className="text-xs text-slate-500">Subtle framed box well-suited for time range filters or statistical switches.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <Tabs
                items={[
                  { id: 'day', label: 'Last 24 Hours' },
                  { id: 'week', label: '7 Days' },
                  { id: 'month', label: '30 Days' },
                  { id: 'year', label: '1 Year' },
                ]}
                variant="bordered"
                size="sm"
                theme="light"
              />
            </div>
          </div>

          {/* Example 3: Pills Variant with Icons */}
          <div
            id="tab-pills"
            data-toc-id="tab-pills"
            data-toc-title="Pills & Icon Variant"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">3. "pills" Variant (Modern Capsule Buttons)</h3>
              <p className="text-xs text-slate-500">Capsule buttons with contrast active backgrounds and Lucide icon integration.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <Tabs
                items={[
                  { id: 'overview', label: 'Overview', icon: <Activity className="w-4 h-4" /> },
                  { id: 'keys', label: 'API Keys', icon: <Key className="w-4 h-4" /> },
                  { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
                ]}
                variant="pills"
                size="sm"
                theme="light"
              />
            </div>
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
          <PropsTable props={TABS_PROPS} />
        </div>
      </section>
    </div>
  );
}
