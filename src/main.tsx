import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './components/Home.tsx';
import { NotFound } from './components/NotFound.tsx';
import { Privacy } from './components/Privacy.tsx';
import { I18nProvider, type Page } from './i18n.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

const pages: Record<Page, React.FC> = {
  home: Home,
  privacy: Privacy,
  'not-found': NotFound,
};

const key = (root.dataset.page ?? 'home') as Page;
const page: Page = key in pages ? key : 'not-found';
const Component = pages[page];

createRoot(root).render(
  <StrictMode>
    <I18nProvider page={page}>
      <Component />
    </I18nProvider>
  </StrictMode>
);
