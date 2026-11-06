import React from 'react';
import { BASE, DEVELOPER, EMAIL, PRIVACY_URL } from '../constants.ts';
import { useI18n } from '../i18n.tsx';
import { Logo } from './Logo.tsx';

interface LayoutProps {
  privacyCurrent?: boolean;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ privacyCurrent = false, children }) => {
  const { lang, t, toggle } = useI18n();

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href={BASE}>
            <Logo className="brand__badge" />
            <span>Pure Scan</span>
          </a>
          <nav className="nav" aria-label={t.navLabel}>
            <a href={`${BASE}#features`}>{t.navFeatures}</a>
            <a href={PRIVACY_URL} aria-current={privacyCurrent ? 'page' : undefined}>
              {t.navPrivacy}
            </a>
          </nav>
          <div className="site-header__actions">
            <button type="button" className="lang" onClick={toggle} aria-label={t.switchLabel}>
              <span className="lang__chip" data-active={lang === 'fr'}>
                FR
              </span>
              <span className="lang__chip" data-active={lang === 'en'}>
                EN
              </span>
            </button>
            <a className="btn btn--small" href={`${BASE}#download`}>
              {t.headerCta}
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p className="site-footer__about">
            <Logo className="site-footer__badge" />
            <span>
              © {new Date().getFullYear()} {DEVELOPER}
            </span>
          </p>
          <nav className="site-footer__links" aria-label="Footer">
            <a href={PRIVACY_URL}>{t.privacyShort}</a>
            <a href={`mailto:${EMAIL}`}>{t.contact}</a>
          </nav>
        </div>
      </footer>
    </>
  );
};
