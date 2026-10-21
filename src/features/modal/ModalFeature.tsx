import { useState } from 'react';
import {
  Modal,
  Button,
  TextField,
  Card,
  Badge,
  type ModalSize,
} from '@zarr20/rakit-ui';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { MODAL_PROPS } from './data/modalProps';
import { AlertTriangle, Trash2, ShieldCheck, Play, Layers, BookOpen } from 'lucide-react';

export function ModalFeature() {
  // Modal states
  const [isOpen, setIsOpen] = useState(false);
  const [modalSize, setModalSize] = useState<ModalSize>('md');
  const [title, setTitle] = useState('Konfirmasi Deploy Sistem');
  const [description, setDescription] = useState('Pastikan branch release telah melalui seluruh unit testing.');
  const [closeOnEsc, setCloseOnEsc] = useState(true);
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  // Specialized example modals
  const [isDangerOpen, setIsDangerOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const sizesList: ModalSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];

  const generateCode = () => {
    return `<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="${title}"
  description="${description}"
  size="${modalSize}"
  closeOnEsc={${closeOnEsc}}
  closeOnOverlayClick={${closeOnOverlayClick}}
  footer={
    <div className="flex items-center justify-end gap-2">
      <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
        Batal
      </Button>
      <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
        Lanjutkan
      </Button>
    </div>
  }
>
  <p className="text-sm text-slate-600">
    Proses deployment akan memperbarui seluruh worker container secara rolling update.
  </p>
</Modal>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Modal Dialog"
        tagline="Dialog modal berbasis React Portal dengan backdrop blur, transisi animasi halus, dan penanganan accessibility."
        badge="Feedback & Overlay"
        importStatement="import { Modal } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Modal Sandbox
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
              setTitle('Konfirmasi Deploy Sistem');
              setDescription('Pastikan branch release telah melalui seluruh unit testing.');
              setModalSize('md');
              setCloseOnEsc(true);
              setCloseOnOverlayClick(true);
            }}
            componentId="modal-basic"
          >
            <div className="flex flex-col items-center justify-center gap-3 py-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-500">Status Modal:</span>
                <Badge variant={isOpen ? 'success' : 'default'} size="sm">
                  {isOpen ? 'OPEN (Aktif)' : 'CLOSED (Tertutup)'}
                </Badge>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsOpen(true)}
              >
                Buka Dialog Modal ({modalSize.toUpperCase()})
              </Button>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Props Modal" columns={3}>
            <PropControls.Text
              label="Judul Modal"
              value={title}
              onChange={setTitle}
            />

            <PropControls.Text
              label="Deskripsi Subjudul"
              value={description}
              onChange={setDescription}
            />

            <PropControls.Segmented
              label="Ukuran Modal (size)"
              items={sizesList.map((s) => ({ value: s, label: s }))}
              value={modalSize}
              onChange={(s) => setModalSize(s as ModalSize)}
              size="xs"
            />

            <PropControls.Toggle
              label="closeOnEsc"
              checked={closeOnEsc}
              onChange={setCloseOnEsc}
              description="Tutup via tombol ESC"
            />
            <PropControls.Toggle
              label="closeOnOverlayClick"
              checked={closeOnOverlayClick}
              onChange={setCloseOnOverlayClick}
              description="Tutup via klik backdrop overlay"
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
          {/* Sub-content 1: Danger confirmation */}
          <div
            id="danger-confirmation"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Konfirmasi Bahaya"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Konfirmasi Penghapusan Permanen
              </h3>
              <p className="text-xs text-slate-500">
                Dialog peringatan dengan ikon bahaya dan tombol aksi khusus.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="danger"
                size="sm"
                leftIcon={<Trash2 className="w-4 h-4" />}
                onClick={() => setIsDangerOpen(true)}
              >
                Hapus Database Proyek
              </Button>
            </div>
          </div>

          {/* Sub-content 2: Form dialog */}
          <div
            id="form-dialog"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Formulir dalam Modal"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Formulir dalam Modal
              </h3>
              <p className="text-xs text-slate-500">
                Dialog berisi kontrol formulir untuk input data cepat.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="primary"
                size="sm"
                leftIcon={<ShieldCheck className="w-4 h-4" />}
                onClick={() => setIsFormOpen(true)}
              >
                Buat API Key Baru
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: API Reference */}
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
          <PropsTable props={MODAL_PROPS} />
        </div>
      </section>

      {/* Render Controlled Modals */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        size={modalSize}
        closeOnEsc={closeOnEsc}
        closeOnOverlayClick={closeOnOverlayClick}
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
              Batal
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
              Lanjutkan
            </Button>
          </div>
        }
      >
        <div className="space-y-3 text-sm text-slate-600">
          <p>
            Proses deployment akan memvalidasi signature enkripsi dan mendistribusikan aset statis ke 280+ PoP edge network secara global.
          </p>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            Environment: production-apac-east1
          </div>
        </div>
      </Modal>

      {/* Danger Modal */}
      <Modal
        isOpen={isDangerOpen}
        onClose={() => setIsDangerOpen(false)}
        title="Hapus Database Proyek?"
        description="Tindakan ini tidak dapat dibatalkan dan seluruh data akan dihapus permanen."
        icon={<AlertTriangle className="w-5 h-5 text-rose-600" />}
        size="md"
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setIsDangerOpen(false)}>
              Batalkan
            </Button>
            <Button variant="danger" size="sm" onClick={() => setIsDangerOpen(false)}>
              Ya, Hapus Sekarang
            </Button>
          </div>
        }
      >
        <p className="text-sm text-rose-700 bg-rose-50 p-3 rounded-xl border border-rose-200">
          Semua tabel, indeks, dan backup snapshot akan dihapus seketika.
        </p>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Buat Kunci API Baru"
        description="Gunakan kunci ini untuk otentikasi request SDK Anda."
        size="lg"
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setIsFormOpen(false)}>
              Batal
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsFormOpen(false)}>
              Generate Token
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <TextField label="Nama Token" placeholder="contoh: Production Webhook Key" required />
          <TextField label="Masa Berlaku (Expired)" placeholder="30 hari / 90 hari" defaultValue="30 hari" />
        </div>
      </Modal>
    </div>
  );
}
