import { ThemeProvider } from 'next-themes'

export default function App({
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
