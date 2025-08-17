import { useRouter } from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'

function NavLink({ title, path }: { title: string; path?: string }) {
  const router = useRouter()
  const linkPath = path || `/${title.toLowerCase()}`
  const isActive = router.pathname.includes(linkPath)

  return (
    <Link
      href={linkPath}
      className={classnames(
        isActive ? 'text-purple-400' : 'text-stone-500',
        'w-fit hover:text-purple-400 no-underline'
      )}
    >
      {title}
    </Link>
  )
}

export default NavLink
