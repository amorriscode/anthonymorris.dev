import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import { KonamiProvider } from '../context/KonamiContext'

import '../styles/main.css'
import '../styles/search.css'
import 'highlight.js/styles/dracula.css'

import SEO from '../seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <ThemeProvider attribute="class">
        <KonamiProvider>
          <Component {...pageProps} />
        </KonamiProvider>
      </ThemeProvider>
    </>
  )
}

export default App
