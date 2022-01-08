import { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Nav from './nav'
import Search from './Search'

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    const [displaySearch, setDisplaySearch] = useState(false)

    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://files.stork-search.net/basic.css"
          />
        </Head>

        <Script src="https://files.stork-search.net/stork.js"></Script>

        <Nav handleSearchClick={() => setDisplaySearch(true)} />

        {displaySearch && (
          <Search handleSearchClose={() => setDisplaySearch(false)} />
        )}

        <PageComponent {...pageProps} />
      </>
    )
  }

  return PageComponentWithLayout
}

export default withLayout
