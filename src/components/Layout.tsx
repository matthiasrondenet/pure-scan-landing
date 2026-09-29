import React from 'react';
import { BASE, DEVELOPER, EMAIL, PRIVACY_URL } from '../constants.ts';
import { Logo } from './Logo.tsx';

interface LayoutProps {
  privacyCurrent?: boolean;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ privacyCurrent = false, children }) => (
  <>
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href={BASE}>
          <Logo className="brand__badge" />
          <span>Pure Scan</span>
        </a>
        <nav className="nav" aria-label="Main">
          <a href={PRIVACY_URL} aria-current={privacyCurrent ? 'page' : undefined}>
            Privacy
          </a>
        </nav>
      </div>
    </header>

    {children}

    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="muted">
          © {new Date().getFullYear()} {DEVELOPER}
        </p>
        <nav className="site-footer__links" aria-label="Footer">
          <a href={PRIVACY_URL}>Privacy</a>
          <a href={`mailto:${EMAIL}`}>Contact</a>
        </nav>
      </div>
    </footer>
  </>
);
