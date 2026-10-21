import { useEffect, useRef, type ReactNode } from 'react';
import type { ComponentCategory } from '../../types/playground';
import { DocsTableOfContents, type TocItem } from './DocsTableOfContents';
import { DocsPaginationNav } from './DocsPaginationNav';
import { useDocsContext } from '../../context/DocsContext';

interface DocsLayoutContainerProps {
  activeCategory: ComponentCategory;
  children: ReactNode;
}

export function DocsLayoutContainer({
  activeCategory,
  children,
}: DocsLayoutContainerProps) {
  const { activeSection, setActiveSection, tocItems, setTocItems, scrollToSection } = useDocsContext();
  const articleRef = useRef<HTMLDivElement>(null);

  // Dynamic Heading & Sub-content Scanner
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = articleRef.current;
      if (!container) return;

      const elements = container.querySelectorAll(
        'section[id], [data-toc-id], h2[id], h3[id]'
      );

      const items: TocItem[] = [];
      elements.forEach((el) => {
        const id = el.getAttribute('data-toc-id') || el.id;
        if (!id) return;
        if (el.getAttribute('data-toc-ignore') === 'true') return;

        const rawTitle =
          el.getAttribute('data-toc-title') ||
          el.getAttribute('data-toc-label') ||
          el.querySelector('h2, h3')?.textContent ||
          el.textContent ||
          id;

        const cleanLabel = rawTitle.replace(/#[a-zA-Z0-9_-]+/g, '').trim();
        if (!cleanLabel) return;

        const level: 1 | 2 =
          el.tagName === 'H3' ||
          el.getAttribute('data-toc-level') === '2' ||
          el.classList.contains('toc-sub')
            ? 2
            : 1;

        if (!items.some((it) => it.id === id)) {
          items.push({ id, label: cleanLabel, level });
        }
      });

      if (items.length > 0) {
        setTocItems(items);
        setActiveSection(items[0].id);
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [activeCategory, setTocItems, setActiveSection]);

  // ScrollSpy: dynamically highlight active section or sub-content in 'Pada Halaman Ini'
  useEffect(() => {
    if (!tocItems || tocItems.length === 0) return;

    let isThrottled = false;

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      requestAnimationFrame(() => {
        isThrottled = false;
        let currentSection = tocItems[0]?.id;

        for (const item of tocItems) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // Offset for sticky header
            if (rect.top <= 140) {
              currentSection = item.id;
            }
          }
        }

        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      });
    };

    const scrollContainer = document.querySelector('.rakit-layout-content, main') || window;
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tocItems, activeSection, setActiveSection]);

  return (
    <div className="flex items-start gap-8 w-full max-w-7xl mx-auto">
      {/* Main Documentation Article Content */}
      <div ref={articleRef} className="flex-1 min-w-0 space-y-12 pb-16">
        {children}

        {/* Previous / Next Component Navigation */}
        <DocsPaginationNav currentId={activeCategory} />
      </div>

      {/* Right Sticky Table of Contents (On this page) with Sub-content support */}
      <DocsTableOfContents
        items={tocItems}
        activeId={activeSection}
        onSelect={scrollToSection}
      />
    </div>
  );
}
