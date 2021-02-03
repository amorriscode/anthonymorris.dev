import { useState } from 'react'
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
        <header className="container mx-auto max-w-3xl px-4 pb-12 md:pb-24 mt-8">
          <div className="flex justify-between items-center">
            <div className="logo relative hover:cursor-pointer">
              <div
                className="relative z-10 uppercase font-extrabold bg-buzz-purple-light dark:bg-buzz-purple-neon hover:bg-buzz-purple-neon dark:hover:bg-buzz-purple-light text-white rounded p-2 transform rotate-45"
                onMouseEnter={() => setShowMemoji(true)}
                onMouseLeave={() => setShowMemoji(false)}
                onClick={() => router.push('/')}
              >
                am
              </div>
              <div className="bottom-block absolute bg-buzz-green-neon w-full h-full rounded top-0 mt-1 transform"></div>
            </div>

            <div className="hidden md:block">
              <Nav />
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

          <div className="md:hidden mt-8">
            <Nav />
          </div>
        </header>

        <div className="max-w-3xl px-4 mx-auto">
          <PageComponent {...pageProps} />
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

          .logo .bottom-block {
            transform: rotate(45deg);
          }

          .logo:hover .bottom-block {
            opacity: 100;
            animation: spin 1.5s cubic-bezier(0.76, 0, 0.24, 1);
          }

          @keyframes spin {
            from {
              transform: rotate(45deg);
            }
            60% {
              transform: rotate(15deg);
            }
            to {
              transform: rotate(405deg);
            }
          }
        `}</style>
      </>
    )
  }

  return PageComponentWithLayout
}

export default withLayout
