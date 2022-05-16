import { useRouter } from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'

function NavLink({ title, path }: { title: string; path?: string }) {
  const router = useRouter()
  const linkPath = path || `/${title.toLowerCase()}`
  const isActive = router.pathname.includes(linkPath)

  return (
    <Link href={linkPath}>
      <a
        className={classnames(
          {
            'text-purple-400': isActive,
          },
          'w-fit text-stone-500 hover:text-purple-400 no-underline'
        )}
      >
        {title}
      </a>
    </Link>
  )
}

export default NavLink
