import { useState } from 'react';
import {
  toast,
  Button,
  type ToastPosition,
} from '@zarr20/rakit-ui';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { TOASTER_PROPS } from './data/toastProps';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, Loader2, Play, Layers, BookOpen } from 'lucide-react';

export function ToastFeature() {
  const [position, setPosition] = useState<ToastPosition>('top-right');
  const [showProgress, setShowProgress] = useState(true);
  const [toastTheme, setToastTheme] = useState<'colored' | 'light' | 'dark'>('colored');

  const positions: ToastPosition[] = [
    'top-right',
    'top-center',
    'top-left',
    'bottom-right',
    'bottom-center',
    'bottom-left',
  ];

  const triggerSuccess = () => {
    toast.success('File successfully uploaded to cloud storage!', {
      description: '2.4 MB stored in apac-east cluster.',
      showProgress,
      theme: toastTheme,
    });
  };

  const triggerError = () => {
    toast.error('Failed to connect to database server!', {
      description: 'Connection timed out after 5000ms. Please check network settings.',
      showProgress,
      theme: toastTheme,
    });
  };

  const triggerInfo = () => {
    toast.info('System update scheduled', {
      description: 'Routine maintenance on Sunday at 02:00 UTC.',
      showProgress,
      theme: toastTheme,
    });
  };

  const triggerWarning = () => {
    toast.warning('Storage capacity reached 85%', {
      description: 'Consider upgrading your plan before quota is exhausted.',
      showProgress,
      theme: toastTheme,
    });
  };

  const triggerPromise = () => {
    const fakeAsyncProcess = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) resolve('Done');
        else reject(new Error('Failed'));
      }, 2000);
    });

    toast.promise(
      fakeAsyncProcess,
      {
        loading: 'Processing payment transaction...',
        success: 'Payment confirmed successfully!',
        error: 'Payment failed, please try again.',
      }
    );
  };

  const sampleSnippet = `import { toast, Toaster } from '@zarr20/rakit-ui';

// 1. Place <Toaster /> at root of application (e.g. App.tsx)
<Toaster position="${position}" />

// 2. Call imperatively at any time:
toast.success('Operation Successful!', {
  description: 'Data has been written to the database.'
});

toast.error('Failed to process data');

// 3. Promise toast (loading -> success/error automatically):
toast.promise(fetchApi(), {
  loading: 'Saving data...',
  success: 'Data saved!',
  error: 'System error occurred'
});`;

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Toast Notifications"
        tagline="Modern toast notification system with imperative triggers, promise loading support, auto-dismiss countdowns, and flexible positioning."
        badge="Feedback & Overlay"
        importStatement="import { toast, Toaster } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Toast Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Studio Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={sampleSnippet}
            onReset={() => setPosition('top-right')}
            componentId="toast-basic"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 py-6">
              <Button
                variant="success"
                size="md"
                onClick={triggerSuccess}
                leftIcon={<CheckCircle2 className="w-4 h-4" />}
              >
                Trigger Success
              </Button>

              <Button
                variant="danger"
                size="md"
                onClick={triggerError}
                leftIcon={<AlertCircle className="w-4 h-4" />}
              >
                Trigger Error
              </Button>

              <Button
                variant="info"
                size="md"
                onClick={triggerInfo}
                leftIcon={<Info className="w-4 h-4" />}
              >
                Trigger Info
              </Button>

              <Button
                variant="warning"
                size="md"
                onClick={triggerWarning}
                leftIcon={<AlertTriangle className="w-4 h-4" />}
              >
                Trigger Warning
              </Button>

              <Button
                variant="purple"
                size="md"
                onClick={triggerPromise}
                leftIcon={<Loader2 className="w-4 h-4 animate-spin" />}
              >
                Trigger Promise Toast
              </Button>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Toaster & Position Configuration" columns={2}>
            <PropControls.Segmented
              label="Screen Position"
              items={positions.map((p) => ({ value: p, label: p }))}
              value={position}
              onChange={(p) => setPosition(p as ToastPosition)}
              size="xs"
            />

            <PropControls.Segmented
              label="Color Theme"
              items={[
                { value: 'colored', label: 'Colored' },
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
              ]}
              value={toastTheme}
              onChange={(t) => setToastTheme(t as any)}
              size="xs"
            />

            <PropControls.Item label="Progress Timer Bar">
              <div className="pt-1">
                <PropControls.Toggle
                  label="showProgress"
                  checked={showProgress}
                  onChange={setShowProgress}
                  description="Horizontal countdown timer bar along the bottom of toast"
                />
              </div>
            </PropControls.Item>
          </PropControls>

          {/* 3. Code Generator */}
          <PropControls.Code codeSnippet={sampleSnippet} />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sub-content 1: Action Toast */}
          <div
            id="action-toast"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Action Toast (Undo)"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Toast with Action Buttons (Undo Action)
              </h3>
              <p className="text-xs text-slate-500">
                Interactive notification with immediate undo action callback.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast('1 item moved to trash', {
                    action: {
                      label: 'Undo',
                      onClick: () => toast.success('Action successfully undone!'),
                    },
                  });
                }}
              >
                Simulate Delete Item & Undo
              </Button>
            </div>
          </div>

          {/* Sub-content 2: Progress Timer Bar */}
          <div
            id="progress-timer"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Progress Timer Bar"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Progress Timer Bar
              </h3>
              <p className="text-xs text-slate-500">
                Visual countdown indicator for toast timeout duration before dismissal.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast.success('Data updates saved', {
                    description: 'This notification features a 5-second visual countdown timer.',
                    duration: 5000,
                    showProgress: true,
                  });
                }}
              >
                Try Progress Toast (5 Seconds)
              </Button>
            </div>
          </div>

          {/* Sub-content 3: Custom Layout Toast */}
          <div
            id="custom-toast"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Custom JSX Toast"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Custom JSX Layout Toast
              </h3>
              <p className="text-xs text-slate-500">
                Render fully customizable React elements inside toast notifications.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast(
                    <div className="p-4 bg-slate-900 text-white rounded-xl shadow-xl flex items-center gap-3">
                      <span className="text-xl">🚀</span>
                      <div>
                        <div className="font-semibold text-xs">Version 1.2.0 Released!</div>
                        <div className="text-[11px] text-slate-400">Click to review release notes.</div>
                      </div>
                    </div>
                  );
                }}
              >
                Trigger Custom JSX Toast
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
          <PropsTable props={TOASTER_PROPS} />
        </div>
      </section>
    </div>
  );
}
