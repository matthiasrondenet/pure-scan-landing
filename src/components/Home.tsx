import React from 'react';
import { DOWNLOAD_URL, PRIVACY_URL, TEST_GROUP_URL, TEST_OPTIN_URL } from '../constants.ts';
import { useI18n } from '../i18n.tsx';
import { Layout } from './Layout.tsx';
import { Logo } from './Logo.tsx';

const ICONS: React.ReactNode[] = [
  <>
    <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
    <path d="M4 12h16" />
  </>,
  <path d="M5 6V4h14v2M12 4v16M9 20h6" />,
  <>
    <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" />
    <path d="M14 3v4h4M9 13h6M9 17h6" />
  </>,
];

const DownloadIcon: React.FC = () => (
  <svg
    className="store__icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </svg>
);

const ShieldIcon: React.FC = () => (
  <svg className="badge__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2l8 3.5v6c0 4.6-3.3 8.6-8 10.5-4.7-1.9-8-5.9-8-10.5v-6L12 2z"
      fill="currentColor"
    />
  </svg>
);

const Phone: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="hero__visual" role="img" aria-label={t.phoneAlt}>
      <div className="phone" aria-hidden="true">
        <div className="phone__screen">
          <div className="phone__top">
            <span className="phone__chip">{t.phonePage}</span>
          </div>
          <div className="phone__sheet">
            <i style={{ width: '64%' }} />
            <i style={{ width: '96%' }} />
            <i style={{ width: '90%' }} />
            <i style={{ width: '94%' }} />
            <i style={{ width: '52%' }} />
            <b />
            <i style={{ width: '92%' }} />
            <i style={{ width: '88%' }} />
            <i style={{ width: '70%' }} />
          </div>
          <div className="phone__frame" />
          <div className="phone__hint">
            <span className="phone__dot" />
            {t.phoneStatus}
          </div>
          <div className="phone__shutter">
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const { t } = useI18n();
  const showTest = TEST_GROUP_URL !== '' && TEST_OPTIN_URL !== '';

  return (
    <Layout>
      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__text">
              <span className="badge">
                <ShieldIcon />
                {t.badge}
              </span>
              <h1>
                {t.heroTitleStart}
                <span className="accent">{t.heroTitleAccent}</span>
              </h1>
              <p className="hero__lead">{t.heroText}</p>
              <a className="store" href={DOWNLOAD_URL}>
                <DownloadIcon />
                <span className="store__label">{t.downloadCta}</span>
              </a>
              <span className="note">{t.downloadNote}</span>
            </div>
            <Phone />
          </div>
        </section>

        <section className="private" id="privacy">
          <div className="container private__grid">
            <div className="private__text">
              <h2>{t.privateTitle}</h2>
              <p>{t.privateText}</p>
              <a className="private__link" href={PRIVACY_URL}>
                {t.privateLink} →
              </a>
            </div>
            <ul className="not-list">
              {t.privateNotItems.map((item) => (
                <li key={item}>
                  <s>{item}</s>
                  <span>{t.privateNot}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <h2 className="section__title">{t.featuresTitle}</h2>
            <div className="cards">
              {t.features.map((f, i) => (
                <article className="card" key={f.title}>
                  <span className="card__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {ICONS[i]}
                    </svg>
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cta" id="download">
          <div className="container">
            <div className="cta">
              <Logo className="cta__mark" />
              <div className="cta__text">
                <h2>{t.downloadTitle}</h2>
                <p>{t.downloadText}</p>
              </div>
              <div className="cta__action">
                <a className="store store--light" href={DOWNLOAD_URL}>
                  <DownloadIcon />
                  <span className="store__label">{t.downloadCta}</span>
                </a>
                {/* Later: add a "Get it on Google Play" link and render the QR image
                    (alt "Scan to download Pure Scan on Google Play.") inside this slot. */}
                <div className="cta__qr" />
              </div>
            </div>
            {showTest && (
              <div className="test">
                <h3>{t.testTitle}</h3>
                <p>{t.testText}</p>
                <div className="test__steps">
                  <a className="test__link" href={TEST_GROUP_URL}>
                    {t.testStepGroup}
                  </a>
                  <a className="test__link" href={TEST_OPTIN_URL}>
                    {t.testStepOptin}
                  </a>
                </div>
                <span className="test__note">{t.testSwitchNote}</span>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};
