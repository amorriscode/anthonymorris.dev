import { useRouter } from 'next/router'

// Reserve the right to have dark mode in the future
// import { IoMoon, IoSunny } from 'react-icons/io5'
// import { useTheme } from 'next-themes'

import NavLink from './navLink'

function Nav() {
  const router = useRouter()
  // const { setTheme } = useTheme()

  return (
    <nav className="fixed top-0 px-10 py-5 w-full z-10 font-am flex justify-between">
      <div onClick={() => router.push('/')}>anthony morris</div>

      <div className="space-x-4 flex items-center">
        <NavLink title="books" />

        <NavLink title="failures" />

        <NavLink title="projects" />

        <NavLink title="til" />

        <NavLink title="uses" />

        <NavLink title="words" />

        {/* <div className="hover:cursor-pointer hover:text-am-green-light">
          <IoMoon
            className="hidden dark:block"
            onClick={() => setTheme('light')}
          />
          <IoSunny className="dark:hidden" onClick={() => setTheme('dark')} />
        </div> */}
      </div>
    </nav>
  )
}

export default Nav
