import { useState } from 'react'
import Link from 'next/link'

import Nav from './Nav'
import { useKonamiState } from '../context/KonamiContext'

const memojis = ['joy', 'mindblown', 'think', 'wink']
const greetings = [
  `it's me,`,
  'hello from',
  `howdy! i'm`,
  'i am',
  'the one they call',
  'mr.',
  'someone like',
  'hello my name is',
  'probably',
  'definitely',
]

const randomMemoji = memojis[Math.floor(Math.random() * memojis.length)]
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    const [showMemoji, setShowMemoji] = useState(false)
    const { activated: konamiActivated } = useKonamiState()

    const memoji = konamiActivated ? 'pixeldude' : randomMemoji

    return (
      <>
        <header className="container mx-auto md:pb-24 md:grid px-4 grid-cols-4 gap-8">
          <div className="col-span-1"></div>

          <div className="col-span-2 py-4">
            <Link href="/">
              <a
                className="header-link uppercase font-extrabold text-buzz-purple-light"
                onMouseEnter={() => setShowMemoji(true)}
                onMouseLeave={() => setShowMemoji(false)}
              >
                {randomGreeting} anthony morris
              </a>
            </Link>
          </div>
        </header>

        <div className="container mx-auto relative px-4 md:grid md:grid-cols-6 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Nav />
          </div>

          <div className="md:col-span-5 col-span-2 lg:col-span-2 pt-8">
            <PageComponent {...pageProps} />
          </div>
        </div>

        <footer className="relative overflow-hidden pb-4 md:p-8">
          <img src={`/assets/memojis/${memoji}.png`} className="memoji fixed" />
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
