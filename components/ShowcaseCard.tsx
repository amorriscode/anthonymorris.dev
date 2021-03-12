import Link from 'next/link'
import { format } from 'date-fns'

function ShowcaseCard({
  title,
  description,
  heroImage,
  href,
  status,
  date,
}: {
  title: string
  description: string
  heroImage: string
  href: string
  status?: string
  date: string
}) {
  return (
    <Link href={href}>
      <a className="space-y-2">
        <div
          className="bg-am-black w-full h-56 rounded-lg"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div className="px-4">
          <div className="flex justify-between items-center">
            <div className="font-am font-medium">{title}</div>
            {status && <div className="text-xs">{status}</div>}
          </div>

          {!status && (
            <div className="text-xs">
              written {format(new Date(date), 'MMMM do, y')}
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default ShowcaseCard
