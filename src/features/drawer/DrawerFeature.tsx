import { useState } from 'react';
import {
  Drawer,
  Button,
  Badge,
  Checkbox,
  TextField,
  type DrawerPlacement,
  type DrawerSize,
} from '@zarr20/rakit-ui';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { DRAWER_PROPS } from './data/drawerProps';
import { PanelLeft, PanelRight, Play, Layers, BookOpen } from 'lucide-react';

export function DrawerFeature() {
  // Drawer states
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerPlacement>('right');
  const [size, setSize] = useState<DrawerSize>('md');
  const [title, setTitle] = useState('Cloud Service Configuration');
  const [description, setDescription] = useState('Adjust memory allocation and node auto-scaling.');
  const [closeOnEsc, setCloseOnEsc] = useState(true);
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
  const [backdropBlur, setBackdropBlur] = useState(true);

  // Example drawers states
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const placementsList: DrawerPlacement[] = ['left', 'right', 'top', 'bottom'];
  const sizesList: DrawerSize[] = ['sm', 'md', 'lg', 'xl', 'full'];

  const generateCode = () => {
    return `<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  placement="${placement}"
  size="${size}"
  title="${title}"
  description="${description}"
  closeOnEsc={${closeOnEsc}}
  closeOnOverlayClick={${closeOnOverlayClick}}
  backdropBlur={${backdropBlur}}
  footer={
    <div className="flex items-center justify-end gap-2">
      <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
        Save Changes
      </Button>
    </div>
  }
>
  <div className="p-4 space-y-4">
    <p className="text-xs text-slate-600">Drawer panel content...</p>
  </div>
</Drawer>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Drawer (Slide-Over)"
        tagline="Flexible slide-over drawer panel from all 4 screen sides with transform animations, focus trapping, and glassmorphism backdrop."
        badge="Feedback & Overlay"
        importStatement="import { Drawer } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Drawer Sandbox
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
              setPlacement('right');
              setSize('md');
              setTitle('Cloud Service Configuration');
              setDescription('Adjust memory allocation and node auto-scaling.');
              setCloseOnEsc(true);
              setCloseOnOverlayClick(true);
              setBackdropBlur(true);
            }}
            componentId="drawer-basic"
          >
            <div className="flex flex-col items-center justify-center gap-3 py-6">
              <div className="flex items-center gap-2">
                <Badge variant="default" size="xs">
                  Placement: {placement.toUpperCase()}
                </Badge>
                <Badge variant="primary" size="xs">
                  Size: {size.toUpperCase()}
                </Badge>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsOpen(true)}
              >
                Open Drawer ({placement.toUpperCase()} - {size.toUpperCase()})
              </Button>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Drawer Props Configuration" columns={2}>
            <PropControls.Segmented
              label="Placement"
              items={placementsList.map((p) => ({ value: p, label: p }))}
              value={placement}
              onChange={(p) => setPlacement(p as DrawerPlacement)}
              size="xs"
            />

            <PropControls.Segmented
              label="Size"
              items={sizesList.map((s) => ({ value: s, label: s }))}
              value={size}
              onChange={(s) => setSize(s as DrawerSize)}
              size="xs"
            />

            <PropControls.Text
              label="Header Title"
              value={title}
              onChange={setTitle}
            />

            <PropControls.Text
              label="Description"
              value={description}
              onChange={setDescription}
            />

            <PropControls.Toggle
              label="closeOnEsc"
              checked={closeOnEsc}
              onChange={setCloseOnEsc}
              description="Close drawer via ESC key"
            />
            <PropControls.Toggle
              label="closeOnOverlayClick"
              checked={closeOnOverlayClick}
              onChange={setCloseOnOverlayClick}
              description="Close drawer by clicking backdrop overlay"
            />
            <PropControls.Toggle
              label="backdropBlur"
              checked={backdropBlur}
              onChange={setBackdropBlur}
              description="Glassmorphism blur effect on backdrop"
            />
          </PropControls>

          {/* 3. Code Generator */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Examples */}
      <section
        id="examples"
        className="space-y-8 scroll-mt-6 pt-10 border-t border-slate-200/80"
        data-toc-title="Variants & Scenarios"
        data-toc-level="1"
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Variants & Usage Scenarios
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sub-content 1: Navigation Sidebar Drawer */}
          <div
            id="mobile-sidebar"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Mobile Sidebar"
            data-toc-level="2"
          >
            <div className="flex items-center gap-2">
              <PanelLeft className="w-5 h-5 text-emerald-600" />
              <div>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Mobile Sidebar Drawer
                </h4>
                <p className="text-xs text-slate-500">
                  Left placement for off-canvas mobile navigation menu.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Rakit's built-in Sidebar component leverages this Drawer for seamless mobile navigation with backdrop blur.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMobileNavOpen(true)}
              >
                Mobile Navigation Demo (Left Drawer)
              </Button>
            </div>
          </div>

          {/* Sub-content 2: Filter Panel Drawer */}
          <div
            id="filter-panel"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Filter Panel"
            data-toc-level="2"
          >
            <div className="flex items-center gap-2">
              <PanelRight className="w-5 h-5 text-emerald-600" />
              <div>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Filter & Detail Panel
                </h4>
                <p className="text-xs text-slate-500">
                  Right placement for slide-over filter forms.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ideal for advanced filter parameters or inspecting details without leaving the current page view.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFilterOpen(true)}
              >
                Filter Panel Demo (Right Drawer)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Props Reference */}
      <section
        id="props"
        className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80"
        data-toc-title="Props Reference"
        data-toc-level="1"
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Props Reference
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div className="space-y-4">
          <PropsTable props={DRAWER_PROPS} />
        </div>
      </section>

      {/* Main Interactive Drawer */}
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement={placement}
        size={size}
        title={title}
        description={description}
        closeOnEsc={closeOnEsc}
        closeOnOverlayClick={closeOnOverlayClick}
        backdropBlur={backdropBlur}
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
              Save Changes
            </Button>
          </div>
        }
      >
        <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed p-4">
          <p>
            The drawer is portaled to the document root DOM node so it is never clipped by parent overflow containers.
          </p>
          <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-950 dark:text-emerald-200">
            <strong>Layout Consistency:</strong> The mobile sidebar automatically utilizes this Drawer component with consistent backdrop handling and touch gestures.
          </div>
        </div>
      </Drawer>

      {/* Example 1 Drawer: Mobile Nav Drawer */}
      <Drawer
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        placement="left"
        size="sm"
        title="Mobile Navigation Menu"
        description="Side drawer navigation panel example"
      >
        <div className="p-4 space-y-1">
          {['Dashboard', 'Components', 'Forms', 'Data Tables', 'Settings'].map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileNavOpen(false)}
              className="w-full justify-start text-xs font-medium"
            >
              {item}
            </Button>
          ))}
        </div>
      </Drawer>

      {/* Example 2 Drawer: Filter Panel */}
      <Drawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        placement="right"
        size="md"
        title="Advanced Filters"
        description="Refine your search criteria"
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
              Reset
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsFilterOpen(false)}>
              Apply Filters
            </Button>
          </div>
        }
      >
        <div className="p-4 space-y-4">
          <TextField label="Search Keywords" placeholder="Type name or ID..." size="sm" />
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Entity Status
            </label>
            <div className="space-y-1.5">
              <Checkbox label="Active & Operational" defaultChecked size="sm" />
              <Checkbox label="Pending" size="sm" />
              <Checkbox label="Archived" size="sm" />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
