# rakit. — Modular Developer Playground (`@zarr20/rakit-ui` & `@zarr20/rakit-routes`)

Playground interaktif dan visual explorer untuk ekosistem developer **Rakit**:
- **`@zarr20/rakit-ui`**: Enterprise UI component library (12+ primitives, compound components, Tailwind CSS v4, dark/light modes).
- **`@zarr20/rakit-routes`**: High-performance, zero-config file-system based routing generator, deterministic route sorter, dan RouteGuard access control.

Dibangun dengan arsitektur **Feature-Based** menggunakan React 19, TypeScript, dan Vite.

---

## 🏗️ Arsitektur Feature-Based

```text
packages/rakit/src/
├── shared/                             # Shared Kernel & Global Utilities
│   ├── components/                     # Header, Sidebar, BrandLogo, CodeBlock, PropsTable, SearchModal
│   ├── context/                        # ThemeContext (Dark & Light Mode)
│   ├── data/                           # Metadata katalog komponen & route features
│   ├── hooks/                          # useTheme, useCopyToClipboard
│   ├── types/                          # Tipe data global playground
│   └── utils/                          # Helper cn (clsx + tailwind-merge)
│
├── features/                           # Modul Fitur (Feature-Based Architecture)
│   ├── overview/                       # Hub beranda & katalog modul ekosistem
│   ├── button/                         # Playground 10 varian button, size, loading & pill
│   ├── badge/                          # Badge status, MethodBadge (HTTP REST), StatusCodeBadge
│   ├── card/                           # Compound Card (Header, Content, Footer, Collapsible)
│   ├── field/                          # Form controls (TextField, Select, MultiSelect, Switch, Checkbox)
│   ├── modal/                          # Portal-based Modal dialog (sm s/d full, ESC dismiss)
│   ├── toast/                          # Imperative Toast notification engine & Promise toast
│   ├── table/                          # Data Table (sorting dinamis, sticky columns/headers)
│   ├── tabs/                           # Navigasi Tabs (pills, underline, bordered)
│   ├── code-editor/                    # CodeEditor, JsonEditor & visual JsonTreeViewer
│   ├── empty-state/                    # Visual placeholder state
│   ├── container/                      # Container & Layout shell primitives (ActionBar)
│   ├── sandbox/                        # Live interactive API request dispatcher & console
│   │
│   └── rakit-routes/                   # 🔥 Rakit Routes Playground
│       ├── components/
│       │   ├── PathResolverSandbox.tsx # Live input -> toRoutePath() URL converter
│       │   ├── RouteSorterSandbox.tsx  # Virtual file tree & deterministic priority sorting
│       │   ├── RouteGuardSandbox.tsx   # Role-Based Access Control (RBAC) & RouteGuard
│       │   ├── VitePluginShowcase.tsx  # Zero-config Vite plugin & CLI command generator
│       │   └── RoutesCheatSheet.tsx    # Tabel aturan path ([id], [...slug], 404, layout)
│       ├── data/routesProps.ts         # Props & API documentation
│       └── RakitRoutesPlayground.tsx   # Main hub Rakit Routes Playground
│
├── App.tsx                             # Root layout, package switcher & router
├── main.tsx                            # Root mounting & style imports
└── index.css                           # Desain token, tema, dan matrix grid backdrop
```

---

## 🚀 Menjalankan Playground

```bash
# Masuk ke direktori playground
cd packages/rakit

# Install dependencies (termasuk link lokal ke rakit-ui & rakit-routes)
npm install

# Jalankan development server
npm run dev

# Build production bundle
npm run build
```

---

## 🧭 Fitur Rakit Routes Playground

1. **Path & URL Resolver**: Menguji konversi file path secara real-time menggunakan `toRoutePath()`:
   - `index.tsx` → `/`
   - `about.tsx` → `/about`
   - `products/[id].tsx` → `/products/:id`
   - `(auth)/login.tsx` → `/login` (Route group)
   - `[...slug].tsx` → `/*` (Wildcard catch-all)
   - `404.tsx` → `*` (Fallback)
2. **Deterministic Route Sorter & Generator**:
   - Menjalankan `sortRoutes()` untuk memastikan rute statis selalu mendahului rute dinamis, dan wildcard selalu diletakkan di akhir untuk mencegah route shadowing.
   - Meng-generate kode router React Router lengkap dengan `React.lazy` code splitting.
3. **RouteGuard & RBAC Simulator**:
   - Menguji izin akses peran (`roles`), izin hak (`permissions`), dan mode `guestOnly` secara interaktif dengan komponen `<RouteGuard>`.
4. **Vite Plugin & CLI Builder**:
   - Konfigurasi siap salin untuk `rakitRoutesPlugin()` dan CLI command generator `--watch`.
