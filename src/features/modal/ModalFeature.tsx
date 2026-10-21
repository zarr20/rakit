import { useState } from 'react';
import {
  Modal,
  Button,
  TextField,
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
  const [title, setTitle] = useState('System Deployment Confirmation');
  const [description, setDescription] = useState('Ensure release branch has passed all automated unit tests.');
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
        Cancel
      </Button>
      <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
        Proceed
      </Button>
    </div>
  }
>
  <p className="text-sm text-slate-600">
    The deployment process will update all worker containers via a rolling update.
  </p>
</Modal>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Modal Dialog"
        tagline="React Portal-based modal dialog featuring glassmorphism backdrop blur, smooth animation transitions, and accessibility handling."
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
              setTitle('System Deployment Confirmation');
              setDescription('Ensure release branch has passed all automated unit tests.');
              setModalSize('md');
              setCloseOnEsc(true);
              setCloseOnOverlayClick(true);
            }}
            componentId="modal-basic"
          >
            <div className="flex flex-col items-center justify-center gap-3 py-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-500">Modal Status:</span>
                <Badge variant={isOpen ? 'success' : 'default'} size="sm">
                  {isOpen ? 'OPEN (Active)' : 'CLOSED (Inactive)'}
                </Badge>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsOpen(true)}
              >
                Open Modal Dialog ({modalSize.toUpperCase()})
              </Button>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Modal Props Configuration" columns={2}>
            <PropControls.Text
              label="Modal Title"
              value={title}
              onChange={setTitle}
            />

            <PropControls.Text
              label="Subtitle Description"
              value={description}
              onChange={setDescription}
            />

            <PropControls.Segmented
              label="Modal Size (size)"
              items={sizesList.map((s) => ({ value: s, label: s }))}
              value={modalSize}
              onChange={(s) => setModalSize(s as ModalSize)}
              size="xs"
            />

            <PropControls.Toggle
              label="closeOnEsc"
              checked={closeOnEsc}
              onChange={setCloseOnEsc}
              description="Close via ESC key"
            />
            <PropControls.Toggle
              label="closeOnOverlayClick"
              checked={closeOnOverlayClick}
              onChange={setCloseOnOverlayClick}
              description="Close via backdrop overlay click"
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
          {/* Sub-content 1: Danger confirmation */}
          <div
            id="danger-confirmation"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Danger Confirmation"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Permanent Deletion Confirmation
              </h3>
              <p className="text-xs text-slate-500">
                Warning dialog with destructive alert icon and explicit action buttons.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="danger"
                size="sm"
                leftIcon={<Trash2 className="w-4 h-4" />}
                onClick={() => setIsDangerOpen(true)}
              >
                Delete Project Database
              </Button>
            </div>
          </div>

          {/* Sub-content 2: Form dialog */}
          <div
            id="form-dialog"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Form in Modal"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Form in Modal
              </h3>
              <p className="text-xs text-slate-500">
                Dialog containing input controls for rapid data entry.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="primary"
                size="sm"
                leftIcon={<ShieldCheck className="w-4 h-4" />}
                onClick={() => setIsFormOpen(true)}
              >
                Create New API Key
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
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
              Proceed
            </Button>
          </div>
        }
      >
        <div className="space-y-3 text-sm text-slate-600">
          <p>
            The deployment process will validate encryption signatures and distribute static assets to 280+ global edge network PoPs.
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
        title="Delete Project Database?"
        description="This action cannot be undone and all data will be permanently wiped."
        icon={<AlertTriangle className="w-5 h-5 text-rose-600" />}
        size="md"
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setIsDangerOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" size="sm" onClick={() => setIsDangerOpen(false)}>
              Yes, Delete Now
            </Button>
          </div>
        }
      >
        <p className="text-sm text-rose-700 bg-rose-50 p-3 rounded-xl border border-rose-200">
          All tables, indexes, and automated backup snapshots will be deleted immediately.
        </p>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Create New API Key"
        description="Use this key to authenticate requests from your client SDK."
        size="lg"
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setIsFormOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsFormOpen(false)}>
              Generate Token
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <TextField label="Token Name" placeholder="e.g. Production Webhook Key" required />
          <TextField label="Expiration Period" placeholder="30 days / 90 days" defaultValue="30 days" />
        </div>
      </Modal>
    </div>
  );
}
