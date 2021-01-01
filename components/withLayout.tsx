import { useState } from 'react'
import Link from 'next/link'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

import Nav from './Nav'
import { useKonamiState } from '../context/KonamiContext'

const memojis = ['joy', 'mindblown', 'think', 'wink']

const randomMemoji = memojis[Math.floor(Math.random() * memojis.length)]

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    const [showMemoji, setShowMemoji] = useState(false)
    const { setTheme } = useTheme()
    const { activated: konamiActivated } = useKonamiState()
    const router = useRouter()

    const memoji = konamiActivated ? 'pixeldude' : randomMemoji

    return (
      <>
        <header className="container mx-auto md:pb-24 md:grid px-4 grid-cols-4 gap-8">
          <div className="col-span-1"></div>

          <div className="col-span-2 py-4 flex justify-between items-center">
            <div className="relative">
              <div
                className="relative z-10 uppercase font-extrabold bg-buzz-purple-light dark:bg-buzz-purple-neon text-white rounded p-2 transform rotate-45"
                onMouseEnter={() => setShowMemoji(true)}
                onMouseLeave={() => setShowMemoji(false)}
                onClick={() => router.push('/')}
              >
                am
              </div>
              <div className="absolute  bg-buzz-green-neon w-full h-full rounded top-0 mt-1 transform rotate-45"></div>
            </div>

            <div className="hover:text-buzz-purple-neon hover:cursor-pointer">
              <IoMoon
                className="hidden dark:block"
                onClick={() => setTheme('light')}
              />
              <IoSunny
                className="dark:hidden"
                onClick={() => setTheme('dark')}
              />
            </div>
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
          <img
            src={`/assets/memojis/${memoji}.webp`}
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
