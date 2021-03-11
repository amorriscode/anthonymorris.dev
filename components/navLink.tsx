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
      <div className="hover:text-am-green-light">
        <Link href={linkPath}>
          <a
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {title}
          </a>
        </Link>
      </div>
    </>
  )
}

export default NavLink
