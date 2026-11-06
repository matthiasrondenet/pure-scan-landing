import React from 'react';
import { BASE } from '../constants.ts';
import { useI18n } from '../i18n.tsx';
import { Layout } from './Layout.tsx';
import { MarkdownBlocks } from './Markdown.tsx';

export const Privacy: React.FC = () => {
  const { t } = useI18n();
  const { meta, intro, summary, sections } = t.policy;

  return (
    <Layout privacyCurrent>
      <main>
        <section className="policy-head">
          <div className="container policy-head__inner">
            <a className="back" href={BASE}>
              {t.policyBack}
            </a>
            <h1>{t.policyTitle}</h1>
            <p className="muted">{meta}</p>
          </div>
        </section>

        <div className="container policy">
          <div className="policy__summary">
            <span className="eyebrow">{t.policySummaryLabel}</span>
            <MarkdownBlocks blocks={intro} />
            <ul>
              {summary.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="policy__layout">
            <nav className="policy__toc" aria-label={t.policyToc}>
              <span className="policy__toc-title">{t.policyToc}</span>
              {sections.map((s, i) => (
                <a key={s.id} href={`#${s.id}`}>
                  {i + 1}. {s.title}
                </a>
              ))}
            </nav>

            <article className="policy__main prose">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="policy__block">
                  <h2>
                    {i + 1}. {s.title}
                  </h2>
                  <MarkdownBlocks blocks={s.blocks} />
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
};
