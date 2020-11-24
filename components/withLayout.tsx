import { useState } from 'react'
import Link from 'next/link'

import Nav from './Nav'
import { useKonamiState } from '../context/KonamiContext'

const memojis = ['joy', 'mindblown', 'think', 'wink']

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    const [showMemoji, setShowMemoji] = useState(false)
    const { activated: konamiActivated } = useKonamiState()

    const randomMemoji = konamiActivated
      ? 'pixeldude'
      : memojis[Math.floor(Math.random() * memojis.length)]

    return (
      <>
        <header className="container mx-auto p-4 pb-32">
          <Link href="/">
            <a
              className="header-link text-4xl font-extrabold"
              onMouseEnter={() => setShowMemoji(true)}
              onMouseLeave={() => setShowMemoji(false)}
            >
              am
            </a>
          </Link>
        </header>

        <div className="container mx-auto relative grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <Nav />
          </div>

          <div className="col-span-2 pt-8">
            <PageComponent {...pageProps} />
          </div>
        </div>

        <footer className="relative overflow-hidden p-8">
          <img
            src={`/assets/memojis/${randomMemoji}.png`}
            className="memoji fixed"
          />
        </footer>

        <style jsx>{`
          .memoji {
            bottom: ${showMemoji ? '0' : '-200px'};
            right: 0;
            width: 180px;
            transition: 300ms bottom;
          }
        `}</style>
      </>
    )
  }

  return PageComponentWithLayout
}

export default withLayout
