import React from 'react'
import { escapeInject } from 'vite-plugin-ssr'
import { renderToStream } from 'react-streaming/server'
import { PageLayout } from './PageLayout'

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps']

export async function render(pageContext) {
  const { Page, pageProps } = pageContext
  const page = (
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  )
  const stream = await renderToStream(page, { disable: false })

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`
}
