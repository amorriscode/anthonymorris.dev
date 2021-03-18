import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function NavLink({ title, path }: { title: string; path?: string }) {
  const router = useRouter()
  const linkPath = path || `/${title}`
  const isActive = router.pathname.includes(linkPath)
  const [isHover, setIsHover] = useState(false)

  return (
    <Link href={linkPath}>
      <a
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`${isActive && 'text-am-green-light'}`}
      >
        {title}
      </a>
    </Link>
  )
}

export default NavLink
