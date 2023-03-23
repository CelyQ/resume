import { ThemeProvider } from 'next-themes'

function MyApp({
  Component,
  pageProps
}: {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
