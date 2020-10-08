import { AppProps } from 'next/app'

import { KonamiProvider } from '../context/KonamiContext'

import '../styles/main.css'
import 'highlight.js/styles/dracula.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <KonamiProvider>
      <Component {...pageProps} />
    </KonamiProvider>
  )
}

export default App
