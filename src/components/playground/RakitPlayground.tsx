import { useState, useEffect, useMemo } from 'react';
import { LivePlayground } from '@zarr20/rakit-ui';
import type { RakitPlaygroundProps } from './playground.types';
import { decodePlaygroundCode, encodePlaygroundCode } from './urlUtils';
import * as RakitRoutes from '@zarr20/rakit-routes';

export function RakitPlayground({
  initialExample,
  height = '640px',
  showToolbar = true,
  className = '',
}: RakitPlaygroundProps) {
  // Check URL parameters for shared code state (?code=...)
  const restoredCode = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    const codeParam = params.get('code');
    if (codeParam) {
      return decodePlaygroundCode(codeParam);
    }
    return null;
  }, []);

  const [activeCode, setActiveCode] = useState(
    restoredCode || initialExample?.code || ''
  );

  useEffect(() => {
    if (initialExample?.code) {
      setActiveCode(initialExample.code);
    }
  }, [initialExample]);

  const handleCodeChange = (newCode: string) => {
    setActiveCode(newCode);
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.set('code', encodePlaygroundCode(newCode));
      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
  };

  const routesScope = useMemo(() => {
    return {
      import: {
        '@zarr20/rakit-routes': RakitRoutes,
      },
      ...RakitRoutes,
    };
  }, []);

  return (
    <LivePlayground
      code={activeCode}
      onChange={handleCodeChange}
      initialCode={initialExample?.code || activeCode}
      title={initialExample?.title ? `${initialExample.title} (App.tsx)` : 'App.tsx'}
      height={height}
      showToolbar={showToolbar}
      scope={routesScope}
      className={className}
    />
  );
}
