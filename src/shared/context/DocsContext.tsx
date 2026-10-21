import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { TocItem } from '../components/docs/DocsTableOfContents';

interface DocsContextValue {
  activeSection: string;
  setActiveSection: (section: string) => void;
  // Aliases for backward compatibility
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tocItems: TocItem[];
  setTocItems: (items: TocItem[]) => void;
  scrollToSection: (id: string) => void;
}

const DEFAULT_ITEMS: TocItem[] = [
  { id: 'playground', label: 'Interactive Sandbox' },
  { id: 'examples', label: 'Showcase & Examples' },
  { id: 'props', label: 'API Reference' },
];

const DocsContext = createContext<DocsContextValue>({
  activeSection: 'playground',
  setActiveSection: () => {},
  activeTab: 'playground',
  setActiveTab: () => {},
  tocItems: DEFAULT_ITEMS,
  setTocItems: () => {},
  scrollToSection: () => {},
});

export function DocsProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('playground');
  const [tocItems, setTocItems] = useState<TocItem[]>(DEFAULT_ITEMS);

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <DocsContext.Provider
      value={{
        activeSection,
        setActiveSection,
        activeTab: activeSection,
        setActiveTab: setActiveSection,
        tocItems,
        setTocItems,
        scrollToSection,
      }}
    >
      {children}
    </DocsContext.Provider>
  );
}

export function useDocsContext() {
  return useContext(DocsContext);
}
