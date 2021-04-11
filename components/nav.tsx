import { useRouter } from 'next/router'
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5'

// Reserve the right to have dark mode in the future
// import { IoMoon, IoSunny } from 'react-icons/io5'
// import { useTheme } from 'next-themes'

import NavLink from './navLink'

function Nav({ handleSearchClick }: { handleSearchClick: () => void }) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  // const { setTheme } = useTheme()

  return (
    <nav
      className={`${
        isHome ? 'fixed' : 'sticky top-0'
      } px-5 py-2.5 w-full z-10 font-am mb-10`}
    >
      <div
        className={`${
          !isHome && 'bg-am-black text-am-white'
        } px-5 py-2.5 w-full rounded-lg sm:flex justify-between`}
      >
        <Link href="/">
          <a>anthony morris</a>
        </Link>

        <div className="space-x-4 flex items-center">
          <NavLink title="books" />

          <NavLink title="failures" />

          <NavLink title="projects" />

          <NavLink title="til" path="/learnings" />

          <NavLink title="uses" />

          <NavLink title="words" />

          <NavLink title="me" />

          <IoSearch
            className="hover:cursor-pointer hover:text-am-green-light"
            onClick={handleSearchClick}
          />

          {/* <div className="hover:cursor-pointer hover:text-am-green-light">
            <IoMoon
              className="hidden dark:block"
              onClick={() => setTheme('light')}
            />
            <IoSunny className="dark:hidden" onClick={() => setTheme('dark')} />
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav
