import React from 'react';
import policy from '../content/privacy-policy.md?raw';
import { Layout } from './Layout.tsx';
import { parseMarkdown } from '../markdown.ts';
import { MarkdownBlocks } from './Markdown.tsx';

const { meta, blocks } = parseMarkdown(policy);

export const Privacy: React.FC = () => (
  <Layout privacyCurrent>
    <main className="policy">
      <div className="container">
        <div className="prose">
          <article className="policy__card">
            <h1>Privacy Policy</h1>
            <p className="label muted">{meta}</p>
            <MarkdownBlocks blocks={blocks} />
          </article>
        </div>
      </div>
    </main>
  </Layout>
);
