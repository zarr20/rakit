import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@zarr20/rakit-ui/styles.css';
import './index.css';
import { RakitProvider } from '@zarr20/rakit-ui';
import { projectRakitConfig } from './rakit.config';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RakitProvider config={projectRakitConfig}>
        <App />
      </RakitProvider>
    </BrowserRouter>
  </StrictMode>
);
