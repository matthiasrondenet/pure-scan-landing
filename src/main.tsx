import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './components/Home.tsx';
import { NotFound } from './components/NotFound.tsx';
import { Privacy } from './components/Privacy.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

const pages: Record<string, React.FC> = {
  home: Home,
  privacy: Privacy,
  'not-found': NotFound,
};

const Page = pages[root.dataset.page ?? 'home'] ?? NotFound;

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
