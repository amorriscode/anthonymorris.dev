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
    <>
      <Link href={href}>
        <a className="space-y-2">
          <div
            className="bg-img bg-am-black w-full h-56 rounded-lg transition-all duration-300"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>

          <div className="px-4">
            <div className="flex justify-between items-center">
              <div className="font-am font-medium">{title}</div>
              <div className="text-xs">
                {status || format(new Date(date), 'MMM d, y')}
              </div>
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        a:hover > .bg-img {
          transform: translateY(-0.5rem);
          --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }

        a:hover {
          color: #47ff75 !important;
        }
      `}</style>
    </>
  )
}

export default ShowcaseCard
