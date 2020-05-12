import { AppProps } from 'next/app';

import '../styles/main.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;