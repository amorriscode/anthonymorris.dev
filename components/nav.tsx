import { useRouter } from 'next/router'
import Link from 'next/link'

import NavLink from './navLink'

function Nav({ handleSearchClick }: { handleSearchClick: () => void }) {
  const router = useRouter()

  return (
    <nav className="space-y-4">
      <Link
        href="/"
        className="text-stone-100 font-hammersmith mb-4 hover:text-stone-100">
        
          Anthony Morris
        
      </Link>

      {/* <div
        className="hover:cursor-pointer hover:text-stone-600 text-stone-500"
        onClick={handleSearchClick}
      >
        search
      </div> */}

      <div className="flex flex-col">
        <NavLink title="second brain" path="/second-brain" />

        <NavLink title="bucket list" path="/bucket-list" />

        <NavLink title="projects" />

        <NavLink title="failures" />

        <NavLink title="books" />

        <NavLink title="words" />

        <NavLink title="uses" />
      </div>
    </nav>
  );
}

export default Nav
