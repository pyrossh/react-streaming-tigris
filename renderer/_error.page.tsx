
export function Page(pageProps) {
  if (pageProps.is404) {
    return <h1>Page not found</h1>
  }
  return <h1>Oops something went wrong</h1>
}