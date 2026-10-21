# rakit. — Modular Developer Playground (`@zarr20/rakit-ui` & `@zarr20/rakit-routes`)

Interactive playground and visual explorer for the **Rakit** developer ecosystem:
- **`@zarr20/rakit-ui`**: Enterprise UI component library (12+ primitives, compound components, Tailwind CSS v4, dark/light modes).
- **`@zarr20/rakit-routes`**: High-performance, zero-config file-system based routing generator, deterministic route sorter, and RouteGuard access control.

Built with a **Feature-Based** architecture using React 19, TypeScript, and Vite.

---

## 🏗️ Feature-Based Architecture

```text
packages/rakit/src/
├── shared/                             # Shared Kernel & Global Utilities
│   ├── components/                     # Header, Sidebar, BrandLogo, CodeBlock, PropsTable, SearchModal
│   ├── context/                        # ThemeContext (Dark & Light Mode)
│   ├── data/                           # Metadata catalog for components & route features
│   ├── hooks/                          # useTheme, useCopyToClipboard
│   ├── types/                          # Global playground data types
│   └── utils/                          # Helper cn (clsx + tailwind-merge)
│
├── features/                           # Feature Modules (Feature-Based Architecture)
│   ├── overview/                       # Homepage hub & ecosystem catalog
│   ├── button/                         # Button playground with 10 variants, sizes, loading & pill
│   ├── badge/                          # Status badges, MethodBadge (HTTP REST), StatusCodeBadge
│   ├── card/                           # Compound Card (Header, Content, Footer, Collapsible)
│   ├── field/                          # Form controls (TextField, Select, MultiSelect, Switch, Checkbox)
│   ├── modal/                          # Portal-based Modal dialog (sm to full, ESC dismiss)
│   ├── toast/                          # Imperative Toast notification engine & Promise toast
│   ├── table/                          # Data Table (dynamic sorting, sticky columns/headers)
│   ├── tabs/                           # Tabs navigation (pills, underline, bordered)
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
│       │   └── RoutesCheatSheet.tsx    # Path rules cheat sheet ([id], [...slug], 404, layout)
│       ├── data/routesProps.ts         # Props & API documentation
│       └── RakitRoutesPlayground.tsx   # Main hub Rakit Routes Playground
│
├── App.tsx                             # Root layout, package switcher & router
├── main.tsx                            # Root mounting & style imports
└── index.css                           # Design tokens, theme, and matrix grid backdrop
```

---

## 🚀 Running the Playground

```bash
# Navigate to playground directory
cd packages/rakit

# Install dependencies (including local link to rakit-ui & rakit-routes)
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

---

## 🧭 Rakit Routes Playground Features

1. **Path & URL Resolver**: Test file path conversions in real time using `toRoutePath()`:
   - `index.tsx` → `/`
   - `about.tsx` → `/about`
   - `products/[id].tsx` → `/products/:id`
   - `(auth)/login.tsx` → `/login` (Route group)
   - `[...slug].tsx` → `/*` (Wildcard catch-all)
   - `404.tsx` → `*` (Fallback)
2. **Deterministic Route Sorter & Generator**:
   - Executes `sortRoutes()` ensuring static routes precede dynamic routes, and wildcards are positioned last to prevent route shadowing.
   - Generates complete React Router configuration with `React.lazy` code splitting.
3. **RouteGuard & RBAC Simulator**:
   - Tests role permissions (`roles`), access rights (`permissions`), and `guestOnly` modes interactively with the `<RouteGuard>` component.
4. **Vite Plugin & CLI Builder**:
   - Copy-ready configuration for `rakitRoutesPlugin()` and CLI command generator `--watch`.
