import { useState } from 'react';
import {
  toast,
  Button,
  Card,
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
    toast.success('File berhasil diunggah ke storage cloud!', {
      description: 'Ukuran 2.4 MB tersimpan di cluster apac-east.',
      showProgress,
      theme: toastTheme,
    });
  };

  const triggerError = () => {
    toast.error('Gagal terhubung ke database server!', {
      description: 'Koneksi timeout setelah 5000ms. Silakan periksa jaringan.',
      showProgress,
      theme: toastTheme,
    });
  };

  const triggerInfo = () => {
    toast.info('Pembaruan sistem dijadwalkan', {
      description: 'Maintenance rutin pada hari Minggu pukul 02:00 WIB.',
      showProgress,
      theme: toastTheme,
    });
  };

  const triggerWarning = () => {
    toast.warning('Kapasitas penyimpanan mencapai 85%', {
      description: 'Pertimbangkan untuk upgrade paket sebelum kuota habis.',
      showProgress,
      theme: toastTheme,
    });
  };


  const triggerPromise = () => {
    const fakeAsyncProcess = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) resolve('Done');
        else reject(new Error('Gagal'));
      }, 2000);
    });

    toast.promise(
      fakeAsyncProcess,
      {
        loading: 'Sedang memproses pembayaran...',
        success: 'Pembayaran berhasil dikonfirmasi!',
        error: 'Pembayaran gagal, silakan coba kembali.',
      }
    );
  };

  const sampleSnippet = `import { toast, Toaster } from '@zarr20/rakit-ui';

// 1. Letakkan <Toaster /> di root aplikasi (misal App.tsx)
<Toaster position="${position}" />

// 2. Panggil kapan saja secara imperatif:
toast.success('Operasi Berhasil!', {
  description: 'Data telah disimpan ke database.'
});

toast.error('Gagal memproses data');

// 3. Promise toast (loading -> success/error otomatis):
toast.promise(fetchApi(), {
  loading: 'Menyimpan data...',
  success: 'Data tersimpan!',
  error: 'Terjadi kesalahan sistem'
});`;

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Toast Notifications"
        tagline="Sistem notifikasi toast modern dengan pemanggilan imperatif, dukungan promise loading, durasi otomatis, dan posisi fleksibel."
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
          <PropControls title="Konfigurasi Toaster & Posisi" columns={3}>
            <PropControls.Segmented
              label="Pilih Posisi Layar"
              items={positions.map((p) => ({ value: p, label: p }))}
              value={position}
              onChange={(p) => setPosition(p as ToastPosition)}
              size="xs"
            />

            <PropControls.Segmented
              label="Tema Warna (Theme)"
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
                  description="Countdown timer horizontal di bawah toast"
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
                Toast dengan Tombol Aksi (Action Undo)
              </h3>
              <p className="text-xs text-slate-500">
                Notifikasi interaktif dengan callback aksi pembatalan langsung.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast('1 item dipindahkan ke tempat sampah', {
                    action: {
                      label: 'Urungkan',
                      onClick: () => toast.success('Tindakan berhasil diurungkan!'),
                    },
                  });
                }}
              >
                Simulasi Hapus Item & Undo
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
                Indikator visual countdown durasi timeout toast sebelum menghilang.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center min-h-[140px]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast.success('Pembaruan data tersimpan', {
                    description: 'Notifikasi ini memiliki visual timer 5 detik.',
                    duration: 5000,
                    showProgress: true,
                  });
                }}
              >
                Coba Toast Progress (5 Detik)
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
                Render elemen React kustom sepenuhnya di dalam toast.
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
                        <div className="font-semibold text-xs">Versi 1.2.0 Dirilis!</div>
                        <div className="text-[11px] text-slate-400">Klik untuk melihat catatan rilis.</div>
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
