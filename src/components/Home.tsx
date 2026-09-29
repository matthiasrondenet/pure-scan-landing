import React from 'react';
import { PRIVACY_URL } from '../constants.ts';
import { Layout } from './Layout.tsx';
import { Logo } from './Logo.tsx';

interface Feature {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    title: 'Scan in seconds',
    text: 'Automatic edge detection and perspective correction turn a photo of a page into a clean scan.',
    icon: (
      <>
        <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
        <path d="M4 12h16" />
      </>
    ),
  },
  {
    title: 'Read the text',
    text: 'On-device text recognition lets you search your documents and copy what they say.',
    icon: <path d="M5 6V4h14v2M12 4v16M9 20h6" />,
  },
  {
    title: 'Export to PDF',
    text: 'Share a clean multi-page PDF anywhere with the Android share sheet.',
    icon: (
      <>
        <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" />
        <path d="M14 3v4h4M9 13h6M9 17h6" />
      </>
    ),
  },
];

const ComingSoon: React.FC = () => (
  <span className="pill pill--muted">Coming soon on Google Play</span>
);

export const Home: React.FC = () => (
  <Layout>
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <h1>Scan documents. Keep them yours.</h1>
            <p>
              Pure Scan scans pages, reads the text and exports clean PDFs, all on your device. Your
              documents stay with you.
            </p>
            <ComingSoon />
          </div>
          <Logo className="hero__badge" label="Pure Scan logo" />
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2 className="section__title">What it does</h2>
          <div className="cards">
            {FEATURES.map((f) => (
              <article className="card" key={f.title}>
                <svg
                  className="card__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>

          <div className="private-band">
            <h2>Private by design</h2>
            <p>
              No account, no ads and no tracking by Pure Scan. Your documents stay on your device.
            </p>
            <p>
              <a href={PRIVACY_URL}>Read the privacy policy</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="download">
        <div className="container">
          <div className="download-card">
            <h2>Get Pure Scan</h2>
            <ComingSoon />
            <p className="muted">
              Pure Scan is finishing up its Google Play review — check back soon.
            </p>
            {/* Later: replace the pill with a "Get it on Google Play" link and render the QR
                image (alt "Scan to download Pure Scan on Google Play.") inside this slot. */}
            <div className="download-card__qr" />
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
