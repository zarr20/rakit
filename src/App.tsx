import { useState, useEffect, useRef, Suspense } from 'react';
import { useLocation, useNavigate, Routes } from 'react-router-dom';
import { Layout, Toaster } from '@zarr20/rakit-ui';
import { generatedRoutes } from './shared/router/router';
import { ThemeProvider } from './shared/context/ThemeContext';
import { DocsProvider } from './shared/context/DocsContext';
import { Header } from './shared/components/Header';
import { DocsSidebar } from './shared/components/sidebar/DocsSidebar';
import { DocsLayoutContainer } from './shared/components/docs';
import { SearchModal } from './shared/components/SearchModal';
import { GlobalFooter } from './shared/layout/GlobalFooter';
import type { ComponentCategory } from './shared/types/playground';
import type { PackageId } from './shared/data/packagesData';
import { PACKAGES_LIST } from './shared/data/packagesData';

function PlaygroundApp() {
  const location = useLocation();
  const navigate = useNavigate();

  // Route & View Detection
  const path = location.pathname;
  const pathSegment = path.replace(/^\//, '').split('/')[0] || '';
  const isFullOverview = path === '/' || path === '';
  const isPlayground = path === '/playground';
  const isDocsView = !isFullOverview && !isPlayground;

  const activeCategory: ComponentCategory = (pathSegment as ComponentCategory) || 'overview';

  // Package state (defaults to rakit-ui, switches to rakit-routes if on routes page)
  const [activePackage, setActivePackage] = useState<PackageId>(
    pathSegment === 'rakit-routes' || pathSegment === 'sandbox' ? 'rakit-routes' : 'rakit-ui'
  );

  // Sync package when pathname changes
  useEffect(() => {
    if (pathSegment === 'rakit-routes' || pathSegment === 'sandbox') {
      setActivePackage('rakit-routes');
    } else if (pathSegment && pathSegment !== 'playground') {
      setActivePackage('rakit-ui');
    }
  }, [pathSegment]);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleSelectCategory = (category: ComponentCategory) => {
    navigate(category === 'overview' ? '/' : `/${category}`);
  };

  const handleSelectPackage = (pkgId: PackageId) => {
    setActivePackage(pkgId);
    const target = PACKAGES_LIST.find((p) => p.id === pkgId);
    if (target) {
      navigate(target.defaultRoute);
    }
  };

  // Scroll to top on navigation
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  // Global Keyboard Shortcut: ⌘K / Ctrl+K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <Layout
      theme="light"
      fullScreen={true}
      className="h-screen w-screen flex flex-col font-sans bg-white text-slate-800 overflow-hidden"
    >
      <Toaster position="top-right" />

      {/* Top Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
        onNavigateHome={() => navigate('/')}
        activePackage={activePackage}
        onSelectPackage={handleSelectPackage}
        showMobileSidebarButton={isDocsView}
      />

      {/* Main Layout Area */}
      <Layout.Body className="flex-1 w-full min-h-0 flex relative overflow-hidden">
        {/* Render DocsSidebar ONLY in Docs view (Not on full-width overview / playground) */}
        {isDocsView && (
          <>
            <DocsSidebar
              activeCategory={activeCategory}
              activePackage={activePackage}
              onSelectCategory={handleSelectCategory}
              onSelectPackage={handleSelectPackage}
              isOpenMobile={isMobileSidebarOpen}
              onCloseMobile={() => setIsMobileSidebarOpen(false)}
              isCollapsed={isSidebarCollapsed}
              onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
            />
            <Layout.Backdrop
              visible={isMobileSidebarOpen}
              onClick={() => setIsMobileSidebarOpen(false)}
              scope="full"
            />
          </>
        )}

        {/* Content Container */}
        <Layout.Content
          ref={mainContentRef}
          padded={false}
          className={`flex-1 min-w-0 min-h-0 flex flex-col overflow-y-auto scroll-smooth ${
            isFullOverview
              ? 'px-4 sm:px-6 lg:px-8 py-6'
              : isPlayground
              ? 'p-3 sm:p-6'
              : 'p-4 sm:p-6 lg:p-8'
          }`}
        >
          {/* Content Body */}
          <div className="w-full">
            {isDocsView && activeCategory !== 'docs' ? (
              <DocsLayoutContainer activeCategory={activeCategory}>
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center min-h-[300px]">
                      <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                  }
                >
                  <Routes>{generatedRoutes()}</Routes>
                </Suspense>
              </DocsLayoutContainer>
            ) : (
              <div className={`w-full mx-auto ${isFullOverview ? 'max-w-7xl' : isPlayground ? 'max-w-7xl' : 'max-w-5xl'}`}>
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center min-h-[300px]">
                      <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                  }
                >
                  <Routes>{generatedRoutes()}</Routes>
                </Suspense>
              </div>
            )}
          </div>

          {/* Footer attached at bottom of scrollable content for full overview */}
          <GlobalFooter />
        </Layout.Content>
      </Layout.Body>

      {/* Quick Search Palette */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelect={handleSelectCategory}
      />
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <DocsProvider>
        <PlaygroundApp />
      </DocsProvider>
    </ThemeProvider>
  );
}
