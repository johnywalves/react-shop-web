import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'

import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import manifest from '../../public/manifest.json'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', (url: string) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content={manifest.theme_color} />

        <title>{manifest.name}</title>
        <meta name="title" content={manifest.name} />
        <meta name="description" content={manifest.description} />
        <meta name="author" content={manifest.author} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={manifest.public_url} />
        <meta property="og:site_name" content={manifest.name} />
        <meta property="og:title" content={manifest.name} />
        <meta property="og:description" content={manifest.description} />
        <meta
          property="og:image"
          itemProp="image"
          content={manifest.thumbnail}
        />
        <meta property="og:locale" content="pt_BR" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={manifest.public_url} />
        <meta property="twitter:title" content={manifest.name} />
        <meta property="twitter:description" content={manifest.description} />
        <meta property="twitter:image" content={manifest.thumbnail} />

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
