import { escapeInject } from 'vite-plugin-ssr';
import { renderToStream } from 'react-streaming/server';
import { PageContextProvider } from '@/hooks/usePageContext';
import { PageLayout } from './PageLayout';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

export async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageContextProvider value={pageContext}>
      <PageLayout>
        <Page {...pageProps} />
      </PageLayout>
    </PageContextProvider>
  )
  const stream = await renderToStream(page, { disable: false })

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`
}
