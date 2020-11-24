import { useRouter } from 'next/router'
import Link from 'next/link'
import { IoIosReturnRight } from 'react-icons/io'

function NavLink({ title, path }: { title: string; path?: string }) {
  const router = useRouter()
  const linkPath = path || `/${title}`
  const isActive = router.pathname.includes(linkPath)

  return (
    <>
      <div className="inline-block mx-4 my-2 md:m-0 md:flex items-center justify-end relative">
        {isActive && (
          <IoIosReturnRight className="inline text-buzz-purple-neon mr-1" />
        )}

        <div className="inline nav-item-container">
          <Link href={linkPath}>
            <a className="nav-item text-buzz-purple-dark">{title}</a>
          </Link>

          <div className="gradient-line"></div>
        </div>
      </div>

      <style jsx>{`
        .gradient-line {
          width: 0%;
          height: 2px;
          background-image: linear-gradient(45deg, #1f1837, #65285a, #e200b9);
          transition: width 0.3s ease-in;
        }

        .nav-item-container:hover .gradient-line {
          width: 100%;
        }
      `}</style>
    </>
  )
}

function Nav() {
  return (
    <nav className="uppercase font-extrabold text-sm sticky top-0 pt-8 text-center md:text-right md:space-y-1">
      <NavLink title="projects" />

      <NavLink title="failures" />

      <NavLink title="words" />

      <NavLink title="books" />

      <NavLink title="uses" />

      <NavLink title="til" />

      <NavLink title="🧠" path="/second-brain" />

      <NavLink title="💀" path="/life" />
    </nav>
  )
}

export default Nav
