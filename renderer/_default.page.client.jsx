import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageLayout } from './PageLayout';

export const clientRouting = true
export const hydrationCanBeAborted = true

let root;
export async function render(pageContext) {
  const { Page, pageProps } = pageContext
  const page = (
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  )
  const container = document.getElementById('page-view');
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
}
