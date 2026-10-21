import { useState } from 'react';
import {
  Drawer,
  Button,
  Card,
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
  const [title, setTitle] = useState('Konfigurasi Layanan Cloud');
  const [description, setDescription] = useState('Sesuaikan alokasi memori dan auto-scaling node.');
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
        Batal
      </Button>
      <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
        Simpan Perubahan
      </Button>
    </div>
  }
>
  <div className="p-4 space-y-4">
    <p className="text-xs text-slate-600">Konten panel laci (drawer)...</p>
  </div>
</Drawer>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Drawer (Slide-Over)"
        tagline="Panel laci geser (slide-over) fleksibel dari 4 sisi layar dengan animasi transform, trap focus, dan backdrop glassmorphism."
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
              setTitle('Konfigurasi Layanan Cloud');
              setDescription('Sesuaikan alokasi memori dan auto-scaling node.');
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
                Buka Drawer ({placement.toUpperCase()} - {size.toUpperCase()})
              </Button>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Props Drawer" columns={3}>
            <PropControls.Segmented
              label="Placement (Arah Muncul)"
              items={placementsList.map((p) => ({ value: p, label: p }))}
              value={placement}
              onChange={(p) => setPlacement(p as DrawerPlacement)}
              size="xs"
            />

            <PropControls.Segmented
              label="Size (Dimensi Panel)"
              items={sizesList.map((s) => ({ value: s, label: s }))}
              value={size}
              onChange={(s) => setSize(s as DrawerSize)}
              size="xs"
            />

            <PropControls.Text
              label="Title Header"
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
              description="Tutup drawer via tombol ESC"
            />
            <PropControls.Toggle
              label="closeOnOverlayClick"
              checked={closeOnOverlayClick}
              onChange={setCloseOnOverlayClick}
              description="Tutup drawer via klik backdrop overlay"
            />
            <PropControls.Toggle
              label="backdropBlur"
              checked={backdropBlur}
              onChange={setBackdropBlur}
              description="Efek blur glassmorphism pada backdrop"
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
        data-toc-title="Varian & Skenario"
        data-toc-level="1"
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Varian & Skenario Penggunaan
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
                  Arah kiri (left) untuk navigasi off-canvas mobile menu.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Komponen Sidebar bawaan Rakit menggunakan Drawer ini untuk navigasi mobile yang mulus dengan backdrop blur.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMobileNavOpen(true)}
              >
                Demo Navigasi Mobile (Left Drawer)
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
                  Arah kanan (right) untuk slide-over formulir filter.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ideal untuk parameter lanjutan atau detail inspeksi tanpa meninggalkan halaman saat ini.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFilterOpen(true)}
              >
                Demo Filter Panel (Right Drawer)
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
              Batal
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
              Simpan Perubahan
            </Button>
          </div>
        }
      >
        <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed p-4">
          <p>
            Drawer terpasang secara portal ke root DOM dokumen sehingga tidak akan terpotong oleh overflow parent container mana pun.
          </p>
          <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-950 dark:text-emerald-200">
            <strong>Keseragaman Layout:</strong> Sidebar pada mobile secara otomatis memanfaatkan komponen Drawer ini dengan penanganan backdrop dan touch gestures yang serasi.
          </div>
        </div>
      </Drawer>

      {/* Example 1 Drawer: Mobile Nav Drawer */}
      <Drawer
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        placement="left"
        size="sm"
        title="Menu Navigasi Mobile"
        description="Contoh panel drawer navigasi samping"
      >
        <div className="p-4 space-y-1">
          {['Dashboard', 'Komponen', 'Formulir', 'Tabel Data', 'Pengaturan'].map((item) => (
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
        title="Filter Lanjutan"
        description="Sesuaikan kriteria pencarian data"
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
              Reset
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsFilterOpen(false)}>
              Terapkan Filter
            </Button>
          </div>
        }
      >
        <div className="p-4 space-y-4">
          <TextField label="Cari Kata Kunci" placeholder="Ketik nama atau ID..." size="sm" />
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Status Entitas
            </label>
            <div className="space-y-1.5">
              <Checkbox label="Aktif & Beroperasi" defaultChecked size="sm" />
              <Checkbox label="Tertunda (Pending)" size="sm" />
              <Checkbox label="Diarsipkan (Archived)" size="sm" />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
