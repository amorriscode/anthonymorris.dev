import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import anime from 'animejs'
import { useEffect } from 'react'

import { KonamiProvider } from '../context/KonamiContext'

import '../styles/main.css'
import '../styles/search.css'
import 'highlight.js/styles/dracula.css'

import SEO from '../seo.config'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    anime({
      targets: ['header', 'section', 'article'],
      opacity: 1,
      duration: 2000,
      easing: 'easeOutQuart',
    })
  })

  return (
    <>
      <DefaultSeo {...SEO} />

      <KonamiProvider>
        <Component {...pageProps} />
      </KonamiProvider>
    </>
  )
}

export default App
