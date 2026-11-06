import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import policyEn from './content/privacy-policy.md?raw';
import policyFr from './content/privacy-policy.fr.md?raw';
import { parseMarkdown, type ParsedPolicy } from './markdown.ts';

export type Lang = 'fr' | 'en';
export type Page = 'home' | 'privacy' | 'not-found';

const STORAGE_KEY = 'pure-scan-landing-lang';

interface Feature {
  title: string;
  text: string;
}

export interface Copy {
  documentTitle: string;
  description: string;
  navLabel: string;
  switchLabel: string;
  navFeatures: string;
  navPrivacy: string;
  headerCta: string;

  // Hero
  badge: string;
  heroTitleStart: string;
  heroTitleAccent: string;
  heroText: string;
  comingSoon: string;
  phoneAlt: string;
  phonePage: string;
  phoneStatus: string;

  // Features
  featuresTitle: string;
  features: Feature[];

  // Private by design
  privateTitle: string;
  privateText: string;
  privateLink: string;
  privateNot: string;
  privateNotItems: string[];

  // Download
  downloadTitle: string;
  downloadText: string;

  // Footer
  contact: string;
  privacyShort: string;

  // Privacy page
  policyDocumentTitle: string;
  policyDescription: string;
  policyTitle: string;
  policyBack: string;
  policyToc: string;
  policySummaryLabel: string;
  policy: ParsedPolicy;

  // 404
  notFoundDocumentTitle: string;
  notFoundTitle: string;
  notFoundBefore: string;
  notFoundLink: string;
  notFoundAfter: string;
}

const en: Copy = {
  documentTitle: 'Pure Scan — Private document scanner for Android',
  description:
    'Pure Scan is a private document scanner for Android. Scan pages, recognize text and export PDFs, all on your device. No account, no ads.',
  navLabel: 'Main',
  switchLabel: 'Passer en français',
  navFeatures: 'Features',
  navPrivacy: 'Privacy',
  headerCta: 'Get the app',

  badge: 'On-device · no account · no ads',
  heroTitleStart: 'Scan documents. Keep them ',
  heroTitleAccent: 'yours.',
  heroText:
    'Pure Scan scans pages, reads the text and exports clean PDFs, all on your device. Your documents stay with you.',
  comingSoon: 'Coming soon on Google Play',
  phoneAlt: 'Illustration of the Pure Scan camera screen',
  phonePage: 'Page 2 of 3',
  phoneStatus: 'Document detected — hold steady',

  featuresTitle: 'What it does',
  features: [
    {
      title: 'Scan in seconds',
      text: 'Automatic edge detection and perspective correction turn a photo of a page into a clean scan.',
    },
    {
      title: 'Read the text',
      text: 'On-device text recognition lets you search your documents and copy what they say.',
    },
    {
      title: 'Export to PDF',
      text: 'Share a clean multi-page PDF anywhere with the Android share sheet.',
    },
  ],

  privateTitle: 'Private by design',
  privateText:
    'No account, no ads and no tracking by Pure Scan. Your documents stay on your device.',
  privateLink: 'Read the privacy policy',
  privateNot: 'Not in Pure Scan',
  privateNotItems: ['Create an account', 'Ads', 'Tracking'],

  downloadTitle: 'Get Pure Scan',
  downloadText: 'Pure Scan is finishing up its Google Play review — check back soon.',

  contact: 'Contact',
  privacyShort: 'Privacy',

  policyDocumentTitle: 'Privacy Policy — Pure Scan',
  policyDescription: 'Privacy policy for Pure Scan, the private document scanner for Android.',
  policyTitle: 'Privacy Policy',
  policyBack: '← Back to home',
  policyToc: 'On this page',
  policySummaryLabel: 'The short version',
  policy: parseMarkdown(policyEn),

  notFoundDocumentTitle: 'Page not found — Pure Scan',
  notFoundTitle: 'Page not found.',
  notFoundBefore: "That page doesn't exist. Head back to the ",
  notFoundLink: 'Pure Scan home page',
  notFoundAfter: '.',
};

const fr: Copy = {
  documentTitle: 'Pure Scan — Scanner de documents privé pour Android',
  description:
    'Pure Scan est un scanner de documents privé pour Android. Numérisez vos pages, reconnaissez le texte et exportez des PDF, le tout sur votre appareil. Sans compte, sans publicité.',
  navLabel: 'Principale',
  switchLabel: 'Switch to English',
  navFeatures: 'Fonctions',
  navPrivacy: 'Confidentialité',
  headerCta: "Obtenir l'app",

  badge: "Sur l'appareil · sans compte · sans pub",
  heroTitleStart: 'Scannez vos documents. Gardez-les ',
  heroTitleAccent: 'pour vous.',
  heroText:
    'Pure Scan numérise vos pages, lit le texte et exporte des PDF propres, le tout sur votre appareil. Vos documents restent chez vous.',
  comingSoon: 'Bientôt sur Google Play',
  phoneAlt: "Illustration de l'écran de l'appareil photo de Pure Scan",
  phonePage: 'Page 2 sur 3',
  phoneStatus: 'Document détecté — ne bougez plus',

  featuresTitle: 'Ce que fait Pure Scan',
  features: [
    {
      title: 'Numérisez en quelques secondes',
      text: "La détection automatique des bords et la correction de perspective transforment la photo d'une page en scan propre.",
    },
    {
      title: 'Lisez le texte',
      text: "La reconnaissance de texte sur l'appareil permet de rechercher dans vos documents et de copier leur contenu.",
    },
    {
      title: 'Exportez en PDF',
      text: 'Partagez un PDF multipage propre partout grâce au menu de partage Android.',
    },
  ],

  privateTitle: 'Confidentialité dès la conception',
  privateText:
    'Pas de compte, pas de publicité et aucun suivi par Pure Scan. Vos documents restent sur votre appareil.',
  privateLink: 'Lire la politique de confidentialité',
  privateNot: 'Pas dans Pure Scan',
  privateNotItems: ['Créer un compte', 'Publicités', 'Suivi'],

  downloadTitle: 'Obtenir Pure Scan',
  downloadText: 'Pure Scan termine sa validation par Google Play — revenez bientôt.',

  contact: 'Contact',
  privacyShort: 'Confidentialité',

  policyDocumentTitle: 'Politique de confidentialité — Pure Scan',
  policyDescription:
    'Politique de confidentialité de Pure Scan, le scanner de documents privé pour Android.',
  policyTitle: 'Politique de confidentialité',
  policyBack: "← Retour à l'accueil",
  policyToc: 'Sur cette page',
  policySummaryLabel: 'En bref',
  policy: parseMarkdown(policyFr),

  notFoundDocumentTitle: 'Page introuvable — Pure Scan',
  notFoundTitle: 'Page introuvable.',
  notFoundBefore: "Cette page n'existe pas. Retournez à ",
  notFoundLink: "l'accueil de Pure Scan",
  notFoundAfter: '.',
};

const COPY: Record<Lang, Copy> = { fr, en };

// French for any French browser language, English for everything else.
const detectLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    // Storage can be blocked; fall through to the browser language.
  }
  const languages = navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  return languages.some((l) => l.toLowerCase().startsWith('fr')) ? 'fr' : 'en';
};

const pageTitle = (page: Page, t: Copy): string =>
  page === 'privacy'
    ? t.policyDocumentTitle
    : page === 'not-found'
      ? t.notFoundDocumentTitle
      : t.documentTitle;

const pageDescription = (page: Page, t: Copy): string =>
  page === 'privacy' ? t.policyDescription : t.description;

interface I18n {
  lang: Lang;
  t: Copy;
  toggle: () => void;
}

const Context = createContext<I18n | null>(null);

export const I18nProvider: React.FC<{ page: Page; children: React.ReactNode }> = ({
  page,
  children,
}) => {
  const [lang, setLang] = useState<Lang>(detectLang);
  const t = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = pageTitle(page, t);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', pageDescription(page, t));
  }, [lang, t, page]);

  const toggle = useCallback(() => {
    const next: Lang = lang === 'fr' ? 'en' : 'fr';
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not persisted; the choice still applies for this visit.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useI18n = (): I18n => {
  const value = useContext(Context);
  if (!value) throw new Error('useI18n must be used inside I18nProvider');
  return value;
};
