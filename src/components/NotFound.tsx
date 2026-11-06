import React from 'react';
import { BASE } from '../constants.ts';
import { useI18n } from '../i18n.tsx';
import { Layout } from './Layout.tsx';

export const NotFound: React.FC = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <main className="container not-found">
        <h1>{t.notFoundTitle}</h1>
        <p>
          {t.notFoundBefore}
          <a href={BASE}>{t.notFoundLink}</a>
          {t.notFoundAfter}
        </p>
      </main>
    </Layout>
  );
};
