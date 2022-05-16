import { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Nav from './nav'
import Search from './Search'

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    const [displaySearch, setDisplaySearch] = useState(false)

    return (
      <div className="py-32 mx-auto max-w-2xl px-6 md:px-0">
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

        <main className="mt-12">
          <PageComponent {...pageProps} />
        </main>
      </div>
    )
  }

  return PageComponentWithLayout
}

export default withLayout
