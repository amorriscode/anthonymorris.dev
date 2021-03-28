import { useState } from 'react'
import Head from 'next/head'

import Nav from './nav'
import Search from './Search'

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    const [displaySearch, setDisplaySearch] = useState(false)

    return (
      <>
        <Head>
          <script src="https://files.stork-search.net/stork.js"></script>
          <link
            rel="stylesheet"
            href="https://files.stork-search.net/basic.css"
          />
        </Head>

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
