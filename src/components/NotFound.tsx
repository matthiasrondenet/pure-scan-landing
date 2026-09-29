import React from 'react';
import { BASE } from '../constants.ts';
import { Layout } from './Layout.tsx';

export const NotFound: React.FC = () => (
  <Layout>
    <main className="container not-found">
      <h1>Page not found.</h1>
      <p>
        That page doesn&apos;t exist. Head back to the <a href={BASE}>Pure Scan home page</a>.
      </p>
    </main>
  </Layout>
);
