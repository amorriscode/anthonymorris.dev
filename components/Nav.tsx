import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function NavLink({ title, path }: { title: string; path?: string }) {
  const router = useRouter()
  const linkPath = path || `/${title}`
  const isActive = router.pathname.includes(linkPath)
  const [isHover, setIsHover] = useState(false)

  return (
    <>
      <div className="nav-link relative inline-block">
        <Link href={linkPath}>
          <a
            className="nav-item text-buzz-purple-dark"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {title}
          </a>
        </Link>

        <div className="dot hidden md:block mt-1 bg-buzz-purple-light dark:bg-buzz-purple-neon transition-opacity duration-200 ease-in-out transform absolute"></div>
      </div>

      <style jsx>{`
        .dot {
          left: 50%;
          margin-left: -5px;
          height: 10px;
          width: 10px;
          border-radius: 2.5px;
          opacity: ${isActive ? '100' : '0'};
          transform: rotate(45deg);
        }

        .nav-link:hover .dot {
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

function Nav() {
  return (
    <nav className="font-extrabold text-center md:flex justify-between items-center space-x-8 my-2">
      <NavLink title="books" />

      <NavLink title="failures" />

      <NavLink title="projects" />

      <NavLink title="til" />

      <NavLink title="uses" />

      <NavLink title="words" />

      {/* <NavLink title="🧠" path="/second-brain" />

      <NavLink title="💀" path="/life" /> */}
    </nav>
  )
}

export default Nav
